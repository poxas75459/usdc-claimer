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
    "4qp4DKafqfYDsutYpevLRAsuGfW32mkzZSmZhZqsmWkGcZsEhKmDxjoCRkuADFVLDi6yrvaYN8pPQ5i4RpZweZGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emKc9LrRk1DDLznfje1b8p5uq4zDKDtfAHLXhL522aN9iDMfBawnWBhGYbQ2obgVKhgnUsp3HLs64K4SmkG2Gkj",
  "key1": "2x4mvkTkEJZ2r93Ja6VvePFUFo3y3XmkZUahgEN9woRJYT3hRp2RsDGbeFmSGf25qN1MWtH9jSTbRNkCCo5WVZqF",
  "key2": "4T7Q1tu6fr6U3numgQNYhjSzmzdFKaP1ppyVFBeLBxoiwKZPp45STv35P7y7Wa4ZT1bEYuJDpvrpfhzSaQBLShJq",
  "key3": "3vrF9XgWjadfJz4zex5QvoTyXxw1uXjiEQbzAyv2cs5kndsT7KZqbszA9p8k4XPXKtRt9ARdJaJ3Lk8hjQzTkvRk",
  "key4": "2jUb1X3XfpEs1YZULYNcwAbz8ovTNmdaYK6TD9dK551S2HadZaRNTLgyuK2Fbcqw75RCeUoJTUS5sSCtHvukkxjH",
  "key5": "5cYBmX4GYeeNHstnzKV6KxHfkQtuTVPdW6tWaHaUzqKySC1eNN79brprtTS8rvJEoY8tiWNG5ipga1mFPyUshUkF",
  "key6": "5oHhfooqy7umQTc7DvH1K9PzQrmessK2Ef2Lp6At2AXwexJ5RVhS938ED7vKmEoP1fuCDtm4TUvbReyao2awPmr2",
  "key7": "64dF87nvNdVnozDk3MTASdAoNdUVswgTULGJdFm5HdcLYhF4g739zypTQAzXoWdJxJoMuYwUHxM9fqJLm3zdxzvv",
  "key8": "42Ywi3sVCdpYjf3XcCNhyeGf6sc2Xx5CwPZwUDnLDVhkxDwKga9drKaWJVcRJJnH96CRBwiPxtyv8jNgsS2MRyui",
  "key9": "4fmk6FDQxL9HGC8DVEgE12zJrsa3UnaRos82J5qGw8pg7WUbgAgPJcHRErU3pxYEaVYFBPKvjauy5nbN7ZvhmniB",
  "key10": "4o9FhKtCMBF5aCtxzEV6TpmEMyQEb3sudqtPRpuB9tzNKaTTtnwNYACMqEFmPY64W6AJinwWzGX9J9PXsM9vhPf8",
  "key11": "4YCKDCVq6gT2nrxF28Au7CWmjyJo7gjmKt6n2SaezrA7w6wAhAeiYbFLDzrEwagxhatgyPu8vdjpyUe2rbeDPH9U",
  "key12": "5goXzn6C9LZ3JmB5quev6MAFE66aT4HZSXt3oGWcShh25mhxze9Nr2baJyRS7aPuY87PDVCisi9KjWNgsbUfpjY7",
  "key13": "7JHLu2FyroDWoYjXvSuN2Hpf4CqscBWvodpjRj4gSM54tNWw3YWPAwhptcqnHahkL4RuRJTVhSPKtus494S6xEs",
  "key14": "KMXuAdB3aEkZzgPttadGewu8Yk5WE5WLjes4Xp5Rq4UQby3RUjXLHYe3Ar5eXGkcbFMtmBLy9So728zXbJXJ5eC",
  "key15": "xCQPP7qiYkfj7rbVkHYKPr4KzGUPDai9H71f7439wKj6Gf6V9qkTgUM7wfAowwdya7KSLR7nuaYQzY6qWGY258s",
  "key16": "b58yKe7hnhDAaDaQJB2g6A9xb4ZTpbdH9fRuci7oo94CdHe2a8RNEjvQUMy9iq6W7hyPmg6s7BQKBHcrhL215jL",
  "key17": "24zRevn6aAuWYKGh6cpFCfzuakw7sP5TmQXTou8fo2FQDwLaNnwxBRrpk5RQaJ4v8JtSqyTJdFhJgvq3T6e15QvE",
  "key18": "4Fx2HfvRyEMg4kzZySmuAC41YETtrF7YnULZywuMGApmE8H8V3KhemmYk6VfkgfY2SZ9QQYvzcivN9zxK8ujKrHn",
  "key19": "2Mc6MoVuEHEDnuawd5S5jk9dCwuHq155xEUfKmXL3bhTzrc8EtfVrnc1rMQDiHGfT1CjKJVphcmM5P8cXgZWfm9K",
  "key20": "562uUAA4CJXfq8bQPC4MqBcoeZ1CGCBVXVaXWs7bHMjkEQese3ZAFNspdAdVWB3dGjRPXMB6mPe4vo6ZG9ct12vY",
  "key21": "3AumSNEXd1Stsi9HWq9p9vgacWyisKnsEiMdN9eoKhEBNF315ShAJ9CaFHjPXupVnJnsCJpynantPMJfXyZtdgHY",
  "key22": "5j61DP44m6xzYG7FtoeSFWMhiH3eZV9M1KEuoFxvwfscfNYgLq4GmNKc5Gj2fvDh4HX1FfLH898TPNt4JhUkzKxP",
  "key23": "6WUV551AcxmwP54f52HcLvpGhkwyXCgMjwVLPcKA24kMPd1Ya1HeV1xKC4V28qK3xHpzKXh8shLEQZNF3GbpntU",
  "key24": "QrHqU9amz418KgrjxFbfWRPoP56JwgMU6j8f6G5uGurv47Bi2wXgQCSUAnP3EBe1umXaNpQ98qqqzjMxz1c12Hr",
  "key25": "57XUbcDHfHZZWEhMQBB21gUDyAYpBGZ9Cq1TTNHpjCcWvADqpVU9fJzbRg5m3xLKVz8S2SbhopTaVW4V12UMh96J",
  "key26": "5fS3NkNBG7dYUA5yereG5Bge5kn2qDmngmnvKQ5Zj7rtBHPZYVh1Z3h5m2jrKLHfzvAxEapzXWxEcbP72tQCQBfx",
  "key27": "48toV1Zp85vzU3dSKJcnMC9zqj9G1rXB3DUHPwQTgHdtpnmjLgJsKMyDedjZvpTVSonDKubQpmJgsD6Vg5g9KnbQ",
  "key28": "3iLt76x1bBS2CWu2KstcarzQ4dxu5t8mFVAjPMKqwVc9dkhNsGEGZ8TKckjWiWT8JfWVcKYNDj3CMfKS1uRP31Nr",
  "key29": "3deCyGLp1RVPhp21L5P2D78qPizuiow1ifdgtXENNLdpDjAkdesYt67XweZNr7sG9FpCWdKmNjeQqNJVmRckUCCt",
  "key30": "3z9G6r4iFnzq3aa3dvZLCqHM9oGXZLutzk6fFGXngfvRh63uF5FCb29eQC7aKqrutBkARBRkkPbNG4vXm4seLLBW",
  "key31": "3TntWft8RQorEpBTnm2tfqFe7GfqsYBSxys71zyVokoP9mkJCDB2CZxZW8WzRLt583PPgZcRmfXCL4M5fsD2Famy",
  "key32": "4nWxwz9sPQenmSVPfCuVbT9sLKSfem9dAw6vFV9rtgVeyzCeio6ckbmVaK8uMFw6Kvmtov3SL7MLrjyHQ94MUErB",
  "key33": "Jzoid9WyZse4y28cTnXgDmgPgs58qSEtdxf6ebeVxSZUFhXccdXdVQy2SpZrdaJresVWPaWnbmUKgJWPC9ksFVm",
  "key34": "5z4WaGe9o4K3ME3povJ7DXoV71YFb7jdGpJjG5tPAVmftQfZhseUr1Y87wne1gA6ico7ibnNANnR997rm5F9siSa",
  "key35": "5z68hsyTePWRCJuCL4XQGbP4q34ia8BPjrERBUcU72V8GFkU5tWcCiyispq3jagpPeAw6JrWs7aqAnJUa3yqbfwU",
  "key36": "4D24Ci8CieNdcisYHXGkzEX1dUV58oHjWGtuyVDfoEvSUuH9oohtvRT6gxeeqPFWABZR1aK71LD7rHHunHgavHGF",
  "key37": "54iz5EiQbQfUA9CQ7gLXywD7tM1BrAUhLJBGxmT2GW8Sc3caBVqm1LmMTAnmXKD8VuiCc4rCptvzKmZyh5ZWL29L",
  "key38": "4qVN7BuCxD6j6nqqiLdTzFShXjsPKQBnfake4duBqShLK4LCwCgYDN3kidgbE6oBg4kxXVWPkeQ7rNzF266PQGxY",
  "key39": "2ki9KK3j7LozP8kaMiu2jKP55MXN9NGwxcANYgegEhZDCEYDykDvEefu6qKos1JcHGxJw9dPFYm47YzAtwvQvP68",
  "key40": "4j1J3haczzf88fKFSvep9gmEWhTnQu474HDQhDEvEzvVbDHZjMLFwS9XZjMuQSvqoumBPxAPtCAvDk4Pf6U2yzbR",
  "key41": "3v9fm2cNSd7e6pZ1VEcHM78qgRzAdfiRek1JjGojhamLYcX8UxEFPaMDHnjMqnYfwchhASXRC1vTEFPuWbRKm1B1",
  "key42": "29jyNT5bt7i7Y2X5E55EET9FTtawFixGEfqmAawu9YsLDCJL2hDMTEDW7LazJ1AVxVnt4HJ7anVFQ9GN933PFNWB",
  "key43": "5rdDekApkXrmQgz35sp2TygHCZLUZGaZuMYnmVCAaZpot2kuSgUFJf55ZE1MVkiR3YpgzGZJJdmMKBHouCaANLpk",
  "key44": "4yCLmwoiQVyAAPK7nUDb2C7kwZBPpz87V6vcHtYmDotLEifV9tDtN87F8TnJewF7jPUtQXxzCRon1FXfAPvRqPLG"
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
