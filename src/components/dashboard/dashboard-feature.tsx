/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "58MVV3iSrqabwZbTq1TVZmndreASEoWw8qTz3m3iw21Z5vQLGyFGRHmBBJGuyfRgLQD3CBymtKLk9DQhbrKDgzBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "256VzUiDPSjcy93fbPKSN8JihrK7VvvxeB2tnSXbVZVAjieTwi9rJjcaEAYgZpb3jnqnM7CXbKuveqD3q45SU2a5",
  "key1": "4cMDLHkZ4rQtBcgNMqv3Y6o7QaAsYRYd5gLVaiAQ9Tej2T2Y8dfwDqFYMMg9AAUV9ENigCgvgvSJGMZTeZEm4MH2",
  "key2": "44g55GsiuSipjjLDztNJBvPd2Cs3qGHskKwnvpBHkszgd7htna7erYYt1EYLAWXg8Bxefk9F3AB8yYPnbcqeTome",
  "key3": "5ZD57edc9YaZU6HpSk4aqU9DXuC6f6gLQ3f9vfDvnNn3AGmYEcZjJNFFvmqzh5BEVZN6ZT35XBSikVuyLYmyXLFf",
  "key4": "3sVnP7RxNEoqPkwMg2DipBVZcspgrU8NDoAnQEDtqEzgf2FUCwBeoBu4GRH5bMKxZZRVC3anoN99LfRGbx6zC2Yc",
  "key5": "3xwDEGyHrMwQk1L9tjLeWXmtQbWBf1ft5HBLRPthrRczEz9HFTAngKvdGb18mygLTyArXS7ybkHB4SMKcH65Jnn3",
  "key6": "3VfMVw8JoCeiRtB6Yb12eXoFTLm9kffBFitaR8Yx3eBSsBpm6qVNieTQgzSozVS1Wc3DT4y8XTmGMQ1eEwtaYP94",
  "key7": "5kMCuJEAWUjXPaDE4r8zawUkgcQyMwb1GsJxy8xgjMzGUKrATJY32ecnrym7sBvAEdDEf6sAn1ksFK4WJPnCy9fY",
  "key8": "CTsvj7NgLirqrEBJnQLFH312NjnUkRF4uhEqeX4ridc2WToECQHfeT4etpXspikGNqm7xnGUv8RNxWm64ewKdwD",
  "key9": "4JUiHsqoQ2rKyNoLie5MEU3yWaBuPWcR6RJck6DP1VWTMs88f7R8RwGYvTzvU3Emyz1DmmxCNjBivEDeJwEk5jTW",
  "key10": "4YonFWE68GYQfUx72JwucWRqaSdjgXnYWJ9LgUA5JvVWDF2m2rXvhsKgpnUhBpN8nZsJwmGzz4EeSJi4U37TPrJ1",
  "key11": "5Qrc2E4hLW83GWJfcZvhNaypDZMto2Qwqzif2MyjPEL8sG4roHVrbW5Spunc4jrNsNLmLNDFMifFbMSd2TeggQX5",
  "key12": "4X1iLcUnELGyXbzG8pkf625LQTuQgrDUGZrZSLCx19D7tTcQK4mw5DcyzNmzDjmhUG4PD6BPHRBk8Ut4F6wFoL73",
  "key13": "3EQogNfB1QxBTqkSsVMxhjiSXDvvfdTTpDbEArPPwg49TMitwMURb2FGxd6nDLzjifxDNGos1ueZXcEhwbHNg8UT",
  "key14": "5bTAGMsJcBDcvrwv977JtNhwQykhNry9aD4SS5Y6CRwageE3hn5eMMyk2xjHGMUbcnZvUe3CRR7jJiyPjHUxEtg4",
  "key15": "55hDD6pMVpchYrrBA1SNJWh266fdtwSeLAb42frGihneQiBhshyyUoF57LoyKjpoeZjxm6r8bGBtPkGhSGgJN87B",
  "key16": "5qVe6xhxzgJHdhh4Uiaxzh9ZLMBstiZpgKgfNAG1B4hQbnBoZfN7SDeWtJWrmKjdQ3igVnJ1ErfQHux8Njak31DA",
  "key17": "5FLN9aLWSSVGni5Ans3sAvrE6vhNLH3cdGMFjE8Qjpmd64Br1bnsWGyoC6ToL3Hc1NcbRk7W2KZ2pJ6m38Ns4hXS",
  "key18": "4pn46tXtXvKTKAhcUoiX3vcTZTHp6J1wABxuUAxP42kDmsTbrNRyAjakZoRtCC9osS7qy34eLKcDNHdawRM6EqMM",
  "key19": "3okqgiEzaaVGJW1LVMwPd82ccVe4DFxvnn3aX3m1cZ6LfyAfdQk9RkxzHBW1TK5ua9u1ZEysH1e99LoAtartNQxt",
  "key20": "5atpAkbs4pepv6oxaXe7UsRvsPt6EJznzyeTvNT2XJAdftc5vdZ2R8SELw7RdvBLmmkjakADP984MqL5okcUXQoB",
  "key21": "2sfRVizbcAn5Mjt21uiZez6hZ299RquWuVZxXrKSPS2V1kTrqekRe868XJqk6MSSxATNeuv6hU9mGorg5EicVsKb",
  "key22": "3fTWksCKNtFSegZFk41dV8x8ez1T5jF4MLKRVyyhLsJ3TcMJ3bWyEaPg3gxwj4VDDgYatZHrzkyAw23bjWZRQbkz",
  "key23": "g8pfAhBj47Y469mZY3SqRCySpmMVfzUmgcAdhHJi3xtsUP6Ar5MXdwQHdV62qAP9FGCHsAthnHBp1hKYmiMSzqC",
  "key24": "2c4Z9ybLhbjwRYVKPXDoSaH7bmis9LB5LZj7gucNSCLUsY5FSUYRUinTzeWywsvsHBH7stJN6xtSG7m33jT6byLK",
  "key25": "62tWJDHiEdYksJojmSiA5xR5LnFS6UtKBPi3bXij6Vz8aSybCeciUckZT4RAiWMPnubNxNacxAFVENpucDHtsEus",
  "key26": "84s1fXPH1huiaKHs74AwZYX8rue9chsCvy7CFPNrJ8AGdaU4LAGHTuLzbJrR6diY6mbGDCxcu8SHWqiyEvxfHd2",
  "key27": "RFxKARXtLe8Rrmzjw7mdG8tA5bFf6iCEd5PgdqMakBFFJVcYk3CzWujaDJcHZLFuFUfpaDABnM8mo9c6JT8zacb",
  "key28": "3sQEDm5ELkDHxsRD2Vj8ESwLReotuZqmckkdDCvCYDwRFhUJid8y8qwZboYmqyN3KgVWjbGFjioY3N62jCKXXbHd",
  "key29": "2mzrjdFEXMmjeofgjhveZnquaUJRaCaDsN6NUmFrAVnMknkB9a3DaPFMy1fwqp4JNLLB8xQ12DTgY4GSwHXRm85S",
  "key30": "5tTCoQpYM6zbZw3hzS41Z3HHGQ9GnhbgPNqVspJENZbWYMTzXkJUSRXHteRwS6EtUMCHHKrTQEAvgcTkNeVKKryp",
  "key31": "HU7DXX4mjjQ4H1GWmdzyR41ba6yNjJdtyRtVRPWMZBeSX57jwENKpZk9SBMWmVYKErTXBWSm26Em3cg4Nt9DqEb",
  "key32": "tgqwapwaNWBh7PT9KZxbuaMnstfkbbWWJEG5tdDevermka2MXuAbuLXbfKbWWxYPjk2oFSjRj4ojjDQfscREQLh",
  "key33": "1JXJHaUGU4Qr9zM3nDQvJfYXhkKgK1Sp6fmFoemnMkwP53MdbhKCvCxdfGWNTHQvFZBgToP2pavh1WddWbLwF7m",
  "key34": "3aQkqzvGmZFWseEcGUFJERFxenrKPWyhnLMmBLHW3ivjbcNgxH2h1Pw9RG63DEzegtbypUEsA6Q5ZKNLrxv1Wei7",
  "key35": "2UDUrmUr1scR4ZK1zmVffAtrX9sfobtNXmtGTgAw2p8NAMhaaVLTDdW1opowjdpkYHzWF8qxMMrBackFi1k4aQ7k",
  "key36": "1HG3c8VwkwEfJ3syemYVdVq4E5ruukxm6QeSBEtQXAnev2Kb8MHG6d2MiGHfKhCeRZa5p8JKzgi7UQmCp4XrHkG",
  "key37": "3QxdCKBf84qcouaj9ed9wsgQk67Q8gA3cpxTFBGaXUr5bphDNFYQSQqvzGPHm8soBzJaH4EPG6RG1fndRusshZnX",
  "key38": "5bvFwhHJuzUCtcdEd26v7RXXvwPzfGCJRhsJE15t9kiRDzqLWcDArXju1C19scnjKnw4nBgBunDRp2rshp7ovzWJ",
  "key39": "4CJ81RtQttV1MZQgJzXdCH97SPPAf7PREvFRbWGMj59HaUAfCgmKTTKz2oFbWh3Cj5UHFktnAjwVCiCxoT3Nk4L7",
  "key40": "5g13viJ2r17aFVWS6SQ4gjyn23YwSiJBDjsPQgbU4mhcUi9xrX6cdjHC8dtXrC3zDFQ7uQYCoD8FWYCJFbdn3CYk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
