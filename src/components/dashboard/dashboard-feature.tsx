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
    "42b6H5rAPGiAR4957JNCYo7BHGG3iWjsfr3hEN2LZ3SAY3XSfFmy9Vj271P92BtoadXtvUFuUC6UjSpPy15BWX8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JV6Uy2z8UVffoE73HJSVBoCnCVCcWGnmYguXxVfmQCXY6ueiThp9pCm62QoATFnAMQRUMz3Bzx47dHRgEYk9caJ",
  "key1": "634U3QKpztacPg6698DS9eDejL2d5CM9D5DtdyUQYp5w9fxUUAK8UNTpRDMoxe8CzUrREQkBYsbAHeHGdEtKqxmu",
  "key2": "3aPGSXgxfnWsSZVyDcu2cGAp8gbdAdgHuNcbXqSgB4d3BX7x6MbosSTbWPjezuDVNbvdFVaPp4YrUcxpMERfLTCQ",
  "key3": "2RGPuwRFe4RccTkHCUhyj4PKMUtGZjomp99C1JoCCUvYmTSvxXxnL3CrkMQ8Kh9wJmTVeUBKqn1JCbCdqToXFB4h",
  "key4": "5Kp76ag1m6wXqGGKTU22to4Feibig74srPDRXKg7Qfe6zohBjd4URoUvpyRVgh1GLL8iLZub26YSwNPF8qdhA1jm",
  "key5": "2nfZGWFuPYbLuc6V3NeryavDLRVKkWc3bLkwJkHoX8MmDWz2wbWi5M9xUPKZdiBmtzb9ci5f8xCEikh2PK76uic8",
  "key6": "2feSjuTtZNDbAZpDKQ1cRfnUTHxkGdniB3drK8ac5ycPiLkSQGqcHecjqLpzAXoVttghTkwqQrWDraAHSznz8RE3",
  "key7": "4Wkwmdy11qbPTgNoJqt2EATPbjUD52srWNWDYcVNiJC8fQTnmEWGmsSMgmP6cyamqXr6zmAdn5ANr29rorxJR2yJ",
  "key8": "3heLxsoAqwLwEShHsAGA8hhF2PaNUDoQD2KcqVMsFw4G5V85g4rZSzkfd3aVqik1VLjpWGnxUDV6FEwr1BVSXxYW",
  "key9": "3Exz2iNaHvMsgVTsnum5N7vH3byUeqAmsyKyXPPbEhezQykqd6qv2r8by5zLfdXsaQ95pPKGTsNp3ZWDqpkK6Bhy",
  "key10": "5iLrRdicc1fmfhXkrBBGYCFogCn9Qwx3A6n8qEtUCwZEqMsNeM9v4KePzbNADAaCvcJTwVigA7bqzhkbjPrSTvEW",
  "key11": "2QF7bJXs7E2knZWP41EMDDqEH4LwyDMxRVSFM4NesRwvdR8hkkSq1rmY8FgxbtVFeoVKuH4yQtFKKj41hVLNaDuU",
  "key12": "38FNr228XivPdMy1qqQigxAzoh79zK5VS9Eh3b8PuczhsCp2XxVANTfJfXGBja6mAu2VpXQESzq9N6q2Pk8yUcFy",
  "key13": "5mrWZAu1Je3SH6dYRFVyHzPPenxoeTSfSAnBRNeNfCQtKdV8MnXqRKwChv7CB8Q2L3e5U8jMgRiXU5KQUTCAdv4o",
  "key14": "3T3uygWgdWsdoEpHzXDpuMA5HkkSs6xNDtQ5bNXZWdTYcR4jtBTUQg63LuozSoeMmgBdZ2Z9t35TKB2fuY6TyGLr",
  "key15": "2DNfwp249xfwDpsjJxZkBTokLBz7CAaFm5zs1jfUXzvhxQQeND5XZokvWZ8N9iqJZU6QNDQhBuGw7x4r3PerxtXx",
  "key16": "2eAdWXUpY4YatuPcnDrXeWi2BGNirmjSTe76B6yb8DeKk7DhpBqVPPEzkiT2R5jonHjFA3z4NQPoQFNxLbFZqi7r",
  "key17": "3RjeWAcbp7ZvrT4b3QqFkC74je6qLGma4HiNSKnMQm4Z63njZdLArqAMB33LcfaBWwSKuTwq7AP2mesWkZPL743F",
  "key18": "4Ji7HGCinutLXmnW8psJRnKPEzY6Quw6xBHRoSKnmje6V4RnyfLLiWengJAh1y8iiKeFSniRgsn7MRMG6UEBENci",
  "key19": "5FfB3aHvFGXwnEPYDvegwxjJwYafXRgWyBaZLM1fDMRCSeCeexhrxTffoTwsaoDEcxSPDzxXZJpcpshjeboZK2Tk",
  "key20": "2QEMr4PuTVeJUgH5EkrfviqdHyxnkNaWFguStheu8p7YSpkbxUU3mckmh7LEvEQjHgdoyitiRdEYaXuyNdSEEgxr",
  "key21": "2NUfHou3mjkaaLcAetWnXPJ8Zy3XAfYr9Khbyirj9k7DK7Nsmn8gfYExKFLY8q5fT8SKgXHGqbFoBWazagBKVQff",
  "key22": "4tneJN4nYdgdPcNy7feJYDBcS6XpqxNGQUFSM3DM2zWFViqkSbFdburFamcesQTmJ4wbGZkf67cxMw8qp9AsN8iY",
  "key23": "JvqZZuKN3joS7uZ8suW1vJuqPJEB3c6MwoYqWWMr7ZX6iRn75VmRoVSWxnxPzWykJo7Lj7BXRn6caHiEd6qqGNx",
  "key24": "4H7WjFyZdfwnr5NLY28A3GRdyD8Yid4vR7zgqxNUGMur2KksdTK2bLhPpYXDNxFZrx4cNzYEVn8wxam9WRuhAPhz",
  "key25": "4GF7WMVECamwshen7iZp5YV6HERrzXouCszt2k7aBQXSpSe1Ww7XtFUGLbne2MPq2JvWxou1RR251NEPLMfMDtAm",
  "key26": "4qUiQQ18HMqKDBtzvRMRomQeDAMg9g9VbvmLtMxjDNkGrfdfWsTTQEs1cCdJk3MfX56LgDrWWCdy5vAThrAu6o4F",
  "key27": "24mY39wsHoSYFRvRmNoCgpP6gLPRKsApSZjUwxBr8n5ENMcSZNFPpNru8FBhtwNxA2hs6oSs6qRmf3L39cDQUHvv",
  "key28": "cmHajDc4o3jpcHJEkVuZLLkw1HM6nfTtGqRjhnSGhRcK7CyNrqyfXbYJjW7QvQ5uWoipfVkYgi5PeQcXBPZwFFn",
  "key29": "4eBVV4hd36ZxpcQ8eec3naHrWPGWERtF6a2cEi9XbuAvgH4sK8oe1UXRMbHwbCfZAX66tvrSP5qXbfL6xCksd2FB",
  "key30": "3nXXzqyJg8ffWpMtqRH5nGsn6EqXWEYcdhberYfeUeqAmE9xDDPnvvKJajdzDB9kBYd8MtGYcbNvBhiBGqBkkFTn",
  "key31": "pijWma4nMSAHVx2FxvRn57t6w1aZb48tEuCKmWPnyvvGEED3qHtaMdiNqnoCZDTAEcM6LSMNngKTQr4GAo6T3cz",
  "key32": "AotMywjm66BqqzDyedVEGZGJ4vjxf2zJVNAC9VHeRWY3QPj9roCsKBGi7kks2retjoJ3Csf7oLmwRsbWC9RvV6G",
  "key33": "3WA1JzaTJVVfaDtzb7Kr3wcmjDnphW7wvZqrJsVv13pM66a4sHaFvnBkcTKYhmFNZDRvgC18MK1tpRqJd5NZ7ou7",
  "key34": "58tm31LsGRbmmAUyn8nhQ26oKbuE13ZKjPLwSDscAYX89FkVNwa7J5GJr21fMXiyuiGFGuWLG5Fd4Fb6NmMySajL",
  "key35": "5ZsQrBrd92JV4TF6kbggXVVjJfSSTUjPrbLYGx8yVwML4Y25z32YB9wJjFaGaeysRKAgbeWdN5f9iWPxD2K4fKsp",
  "key36": "3tmzLUXdvtByadJLxN2Zw89NCtz1vTgEkxLyfj46munUwRKQmoGB585nwCa72jDdu1NWLUC77ZfUfU8sTsQicKpw",
  "key37": "4wXprCRzA3MhzMsUw3JuKaQaacVZ2VfdJBSGgxKAQL1rWpeXc42joPZtWpDYA9VFjHtCYpepqrGhFkTAeDht2bcL",
  "key38": "4mhFgZpw3KqQjGAvAaxVMEHg5ajZaeazixzLTfo3UbCiRXXoRhrNrWf1EN8Qg9yC2iFcwJsNKZMV5XMcZVBvqH4K",
  "key39": "641NNENECvAcWZ4VxJaNPGXaLmuoMaTSuNuVsQdcpazWh2jcvCxDn4mXd33SMCYPqv9jF6e6NFaHm3MxFUVYKwuY",
  "key40": "33pbUXKCK5sYqwGTGKfMe5q3oRfCZNEvxmEDs1Rqv4nXBmxv2ryjgbEvpHmm6UY4Vt9SFGk1qAETaTvmstHkhy42",
  "key41": "5mdwJDZXqKnoovAKZwHVtqRf47VRrNNKwACZj4oKDKZUhJUzkG5fEJSm4aHhGqSmjxuUjXuizmgGbKQGMCtupmUb"
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
