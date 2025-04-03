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
    "4vr1q49FGFYDvqgyVVmaYTJxZ2hoE9UauDhzHZDSrRJGG2chev2gk2VtNn5KWVKzdwD5vTdCPELCXeisU4zHbp2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rvmauMEShWuzvBL2qjc9NZBGsJXziqGoVnvAvrNegnTWfr7QDoHHqh48XArS77sVuG8uJPajHp37zXEhzPQR38m",
  "key1": "4J5R5zBVDmJTp8TZf69tpx2GyG3WbSANNj7zogKqFEtJiCRGwKBVwQ15XUSGjUKHwJMfMtju6d4Hxo7uS2mtFc2Z",
  "key2": "2oozuRknNtCUsQbgvr4CTmEs2h9dE1L5E7nsvZ3TpfGWrmQRQcWU5PC9hDFqDrmGhmAbRviAUPHVvtMPZCzvUWSA",
  "key3": "PbKW94aMrgLbBT5ZYSwJAADnhE4pohgSwmuRFeEE5y9w1sTwvGbFzmh4YupqpTqJuWRmh7z8vPi93A7YydS54o7",
  "key4": "5eobFgY3fU1ejqUNLqjjYr9arnyFay6SJ8pLQXsQwNjct2WaFecee56W16AhnkX972drZZz29HKDkxkAFJhyAuYN",
  "key5": "7xcE9tKVjzGmCFHKMWWxL9xXVpnPHBnJFK37cA8qicNY2bVXkcYp3jDynbPUaS9aB24Wm4NEd485aXJ8AZofpmx",
  "key6": "4CSPRe95hvTHZECsdAgMCiSpp3GgYvKiaXHSh7dpEizVhqCZ8KfvCco1Z17SbfkQY6AprJSZGQmbYzx7KZjh6tW3",
  "key7": "2iaz7qB5MqN4JgSRHDR5ViTTGfm6jKSaWCjvjrRpx7KGBxsHrzD8feiYJ6RjThaSWNCAX6dS4objhYZ6bToqTWhC",
  "key8": "21mX3kCM8MfAiFThkX2fqET4LAPfQdzXqFZbq583sea27Hv2rQqZMA7iFgtfRGvLD4EgVYkX9bZjLVtH8rtnd5Fi",
  "key9": "51uoWXqGqn1xhEHjBJqx3TCqfNnupRddQtcrmiVodxq1kNxz7xbmC2SVnT88zc9KU4ZdFMs3mPMDfJ2ZAbVFqQKd",
  "key10": "2VpHggi4XX4a6fMfQRabx9mssvfWj3oJapRz5DApNdJoz15bmHdeTasdSYD41yYvDscuDeM7rHxJtTpCoGHLSJrs",
  "key11": "3CVg8k8pfWyzKBhVRHxtAWZvhF4hKWmZfhdj9JYhBLEWVNrCRo9P3KW6GL3GXEYW7K7TwL1QkzeqHf73ih9Xb3rp",
  "key12": "5SGjJhFDmSQhZTF5ojCD7soabh6MBXpVBNNjDSF7Ch95pG9BCBhoy4hXHZKJtNfW4nZan6SifYJ2rSN6Sr2XCrkr",
  "key13": "3WKp4HSbu8gqP9BcZa8r7KGxvujGXpwCjvfL46XSc6QptmSk9rXqfDZn2RZLwFTsWGDR4mJWiJ4DAuNjVbqDQisk",
  "key14": "25pTHSMTtzC3wCURWiUt1VGaju2uKKBQtgqJx88cvkJzoC9v2S88ULdHFc41m54dqmdHZtiYmTfWxbpQbzqQ5LND",
  "key15": "33TLbUBNvaVHRA5cY4iGfvPN2mNxojREJT98Hf1f6uMLffvfYUaGuR5JjLDVshzQfpVvhH9zyccHYi7wRPFXh5kK",
  "key16": "bXZWiWrXMgReqjCx6dzu3ihBgZnEY4vGZDcbBPiW3AVvkXHvnPeSN5kZgQPUUFHYkWt931HuEM17c5CtNsorXaz",
  "key17": "3XihC1jDzb2pm983f6W4aSgJ9KN5C2kNUcHihKCnHMQ6Pq81pnRmG4MC2DsEZNZTgKRiEG9rdSFNV1CTu1bFKuUo",
  "key18": "3BHCJJTxWD1orYMUL54AL4Be5vhPHmjw3XnJYkHBPcoftQT7VbXYHnpTNfAoPbkwj3sVxXWwauzPBvbpznsQDFs5",
  "key19": "4YDYXgBBkQJTk5HxanK6NDStFbWgPrFCYGALGhhZ4BLJ9UHxGtdUcXnzLnPHqTxnS81McJ6WkxN4hfvVTPfuAZuJ",
  "key20": "2HtBzdgPbqEe1DzqB9CMt1fpTbCpaeCMn3HZ7A818XdtRBdC9vNX9XbnPz9pwMaFDtujEZWicXLkymodRf5AMUFX",
  "key21": "dQ8LtbQ9dP9ZpsaQMjxva24MTqD2jhGYdaGu182s6zA2ND9VTyqcqZhCtv44SdcJz1x3p7MFRoNzeiQfRXLQknM",
  "key22": "5HLUvcftWS4B1zryKtRiB6fhrJbDyrtvn23hjppZAwrJhUitW63DzuW8CjFCUAftyfjJpgUCFn4zGzDw5oSFa5wy",
  "key23": "3uAYeZ3sn6Lx1PnfQe31VBcvf5ob3iwRsvp7W1f9We1xgUdFzwFpzi41k2aF3P7mxi6gpuvyam7qk9QMn4H14Rju",
  "key24": "5QNeh2oxbvromHQ9eWeMxu51YWw4eoMakbF7wAbBySzQvDNCQnq4PQJqSh5dNKztqMK1iZsLbG8vdziL7AHMEX6A",
  "key25": "2DUsfMnb38Lga8yyhhicMczTopFRCLhtm4q9BPFswU3YhoTpKcZGT3cLVTNcNcNeF2v5fY7vvK2RM6quRmbyPLNU",
  "key26": "2pNTSht1DYSgM5Xo2vr7emrJK6ydVXLgZfJaZMkHsVLkMqGTvUHra5hziRr5NRxXRK6DtjPNkWhjPovLDVs2ARa",
  "key27": "4qywtRnMnuh2znuM758ViRGGgBQB5jq5ijNaUddm6QEi5khQ5tWG2UHHnBekEfdPUDZpCrQp2KmM9F5uBuNztrDK",
  "key28": "5SVS8uU1NyA8dXAHKs8qM669SwrjqPb64qP5J5uAM36b1HgR3iMcuAxG9iX4DqfugAqK1CfE8C4P4jfTcRTH7Wog",
  "key29": "4kGVD3BxJjV6PsMVvCYopvCqoyRozjx8WLBo3Pq544Q9rQMN5XodvHcfHrwU6RLTX7A2YreEeA71Qet6Lv7KRmhh",
  "key30": "5jkgiXQjox7G5qemEvCFJEVKhceMo5ujgm4BfqJUVnQBmvb44BZGvBA1CBmjiPYgCrAkudoFeDWm2EnCpd2vi5Xu",
  "key31": "4wME813vkFHjzXvVXMcMX4t8UY7k8vM2TbRL31i1LnHaukRsaETaaDWrC5doiFGE3ys3trAVqZaEUbJaEKiksh2Y",
  "key32": "n6GfgwqKK5TuTdgifr8exdZXKgEa1AC4Y5FKXLopVa54kJURiKFhFG19VP8wwMDKQs9Y6WY2PFywE72tx1bGKJR",
  "key33": "55eruBXttQYuqDFAsXpXdRWvQuL6y99JzyQipcstcEwMLFNpWQqgMXUb1oriobg1zPSu34RW4mKicn3vzLKKCjNZ",
  "key34": "2HhKKcW87t9HouxLRomUjqiUVJYzC7Vqw3ou3BNWbuCxmMk6qpmDrURztkMoiW9eUC9hw2kHcGdS1vsptrTb4qkX",
  "key35": "39zmNSL3BG5d5NZiu5J8JQ8g5YgWfPnWrn5Zdek5QJaPqhqGa97Bzyoo6cVpXiwSuFCh3sxjw6NUDtACtv1xPDV5",
  "key36": "3TJE2QCkhbBuMeEMb4SryRcTEL4h3pSNgrxmAAeqPBd8P1zupfPZswm4CsJkJUgmS4Q24aYBbRU8xHR3pBkrNmHv",
  "key37": "4j6CrMySjZ9pBiWHcGTdU45TysULe2hCpxiEx99dfc66VJZUayWwPuSWcMFiHnm5edWVDSSS4ty113GAwgHEeqrv",
  "key38": "25GsB2LwXEMMCMLy1Rdt5oQfYyzGKEvMfhhud57vWiEenGvYWzAfpZyrPRx7176Loe5UK6gZs4SjWKvnMazcycfB",
  "key39": "3TYb3wp9Qt2mVcKKFgJuTQRgN3BLXqfosqqPE11SQ1qkcsJ4XbyRQ2hGZzYtFKeKwcJ72aP1LA3Zew3DE9tzaSBt",
  "key40": "2oSDQFD3qjKWBcSyYLCXk7XUA8N1k6n3c8zEAZcAA2j8SiboB3kMHg8iQDekQ8x8ppg65zQNMhWPMsJ7nWpZGySr",
  "key41": "4rxjz88uLezzCeroZAyivcBT98ipNfFxU2pekRzVnorLppxvgSyHF3BUQNvfVuzKi9uWLG6k2A7pJB1LEbTT3VKq",
  "key42": "24aQJ7EfzGCS8McogGNT8URjKrJxUAFZ2c3tw6dEqAJtRR9HeS8TosNGAdztemModPCPerEJM2XD7pfwwQuFsCaP",
  "key43": "5HKzqjkJ66wyfdmSUd8xPTBiyhEHSMbxfRFNPDZNWzmTGDsUunxNrWYN8f9VCgmPj4LCf4dGRwKpkc4nnaKzgo4i"
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
