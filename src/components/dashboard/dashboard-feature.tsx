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
    "dRPLoPsSJnmJk2vGwB8dLAoTPsoeLLe4Ta9dbyYMHHNwC178UePpGBM9cya2LnfhRK3FjkwVxmccPv2f6vqR6Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v1dzDrUrWcsi26hpWexwpDeNg4vuZSzKv9ETRcvQrnNpVxsrJowFzavE2YUSFM6cqBvwctFhExNpdhT28SVonVB",
  "key1": "5ECg49o6y3q3jprz5KdQknyLiPFo1M6Yf85KUAFs7r3YnCirjTADE4s98qN4YXi4tVG3fSkgAAy4NVPqL7ZQHMEA",
  "key2": "2xGTjBCDu18mEZmgRUXZzApE4kqwoKkzKJHQVdy3iFnVw5nD7qk5Rg5whfQfFo23yzrF676CqnGpPWRmiM8p9Gyw",
  "key3": "47QL7kswBcGN3kA18yH4uj6ce6HZyvTw5Fi7YVpHS2azxvXtzGNf3rBEGs6SuiauxNWvDVFRwKb4MnqtmH467b4k",
  "key4": "666beJHf7P76QWihgQSBAAZoMkiuQzpJRvXYyPmihuWC3bLK9Mp8o5EUr9SgyGCrtoUJDeHiz84PJ2mJVbg2BzYD",
  "key5": "3PukmnsX44BvrdQ7XwrEDxaesZ2VRzS5cY6WY62EUrq2URetBmVxaau2tyQcFC6ab86oXRXktPMuxaEfsFoqfwoN",
  "key6": "2Cro848jy7ccxSPm2XnDMzJwRSbCVrsXWJG13Tuo9XyrpuNEw841PYq68jHwePKsMbnmUUoidGf2YWK9iThCiFSA",
  "key7": "4u58N9gZeuHBSzLCVcuSMgEm8YU1YQKZmyyt2jHhcQsapZpkJ8mcLW52SQKs7KHYcY2DGcm9Wrt5Jwk19b52tB7k",
  "key8": "vPiCyXUGgnPyXnx7CGUhGZyjwmdGvZuFsNxSjfYDSvS5spCkj8cf4Us5ksTV8iHuXLFhcyXHSpWTymQaCtT2Mza",
  "key9": "8honvkiDVBLsbe7SQxNfhnrsHuGCcBhAiaD8ZveGFipqPSDkr7jpp9spqEwg9TS6ndCjQ2V1UZhi39gNHqdJkWK",
  "key10": "3yrRFVPuqKj7gbjX15ETDVdPxLWS4w9CrXWqaB2amF4ACqMHQqX1NcEjum2azNeNo1yxQLQ7kRyjnkUUaaeTajHZ",
  "key11": "5fPK3eAFFwWjKQyzsikZvvSqDZqnvP3v4BXoUBT6mYRsEfPmnQDSqg9UBto6C5nne2k9L4kpZ27tr122zTLV4v3m",
  "key12": "659GDQSgY74AcQZEMBM6ycGr8UZfC87nYMY7wH6KcPHxhzSS9346e9YPin23adE5HfVPgPiKwmBYKNUAr2jG7Hy4",
  "key13": "62yBhgJSPo2xDmdoxx7mUh1TneAaBazUKAfkbawFcKBFbwszE15mmvYvf25pWY1EsdNxRXEskYMaxnuyygArygej",
  "key14": "EKD73rqaRry3iCbsrVeyP2SzP4oZqSzFFMv8MzT4XBjfS5DxNmyhTWufQrXcMCCsK1HHUcYR3GurmeHXEcUDeyA",
  "key15": "cWVNNkJqXtYzbNJqtPRf8H8yBJQBWTY9m4ckDyAeGjp1nmKTi2nctnzPagng2LeRQbTzsvUw9HsFEzWWu7D5ouK",
  "key16": "3Axz4vRkPLpL3giTiPDaEgEfTqTAg2Karvxh5EPVsioCFKfXZTuuaiffy69LzGg9zRszquUsNtd57EassvXD4PjJ",
  "key17": "U2ox8PGBwAJvdYvYGWfvDqVmC98gGeySNfnVEGN7VSvJEGL9JwLmRVXKSGDtbf51Br1jqdqg2KD3XVZg4csQZza",
  "key18": "5VH1awVduC5j1fMw9cmUrtMGkFjAd2H1dn2pi3KhzKUkbkP5xJoj7Kzci6wh3Z9voWHvdu2Vw6ifziDNRAWjp4fj",
  "key19": "5Wjw8NzcPspr55TUUn4EML3zdij4dnshoxGNxb5z6ak25jZhw2fNmAHS8GfAX8L222eZmG3ABMbjLA6oXv9KtTEW",
  "key20": "2gs56a4dinDc9AJpWQcaKW2dT29HL7Aayu2SYYvdk9w42mf4PiKqpkjdbQRZ86rypt1URhZTNSdTJgipmEdHMvkB",
  "key21": "5SqzTMMGBkLWy7rbDpY2Ww2UBn5aVtkhPiwDj2LYvubw1mFZ1V8566tmimjwkhibnixifiao5ARgVxZgpNn1NeVU",
  "key22": "4XKP4ApyUPc9HkT9T8L3TX1p5BjWiLgDfa6vcGriWe33g7YWFbZt1WLV486XrxBtA4pas6Qm92orrAfzbWM8SVSr",
  "key23": "3qrhu4eiQBQMdWjSEH9CjdY7tgpndiNBCWfhCrB65b1iAfEg1FHyYTrr3vkzxHjVq6W3SZMaAWgYY5eMeomzxk7R",
  "key24": "YvUxEGmH2maCV3Th1YZoWb9J4avjASdVsKvpWHZrYx99e3n3PQtf9nKxjju81RzRX5xrtzVJHQffBV6X5Dqwvkp",
  "key25": "XuqqhSZCFDHEr6Lp6DMnhjAfHwqA3aSBpfwHXKHxznyabzZvzj7VFk7imi1VnYbiC754c1E6QMydP8CB9NCBX99",
  "key26": "62E8XVe12WuMiL8QQRg81LtpxiL6tPfjHsuWpsZDTc7yApLm3zXNNKZk3FX37vi7XoRHHDxSZjqDkMQNxq5NoJLm",
  "key27": "4d5dMF8Ctgi5sjuBDsoEBNTuZT4jVMYBaXX751ExvVBQ8ehDTWQGQ8UAGf2sgkfVx83xpGKbQZA6cXrRveKe8X8H",
  "key28": "qB11uspVTiErd38dBQaJini7jr6K8byenS97Rb5uWoVpshy8AFtZ8K4hSnnLZMBR3jM1U5Aru9169MyWwb9yGme",
  "key29": "4iodZL7ZK9ZAjhTyJgyjgAdxyxq44UFGYTmhc153jHv5GwjxZerfGAL5ahnRWrAxdskRejW4ufPVXhzCjyVuGbUR",
  "key30": "2G2RfaW17qLF6gKqYJfxTDxJS5USTdomL4sDsev8pwC12vJcz7FRZBen4KiBgZz1aNznckxM6xhWYN4g2yo3ZrbA",
  "key31": "4KEao1f22GMLDKnzGKbeGMhCNPNWPou2xpqyPcQUmUZRDs36wJFaMdSA64DvCKnUQ1hF6ftisrBLwucNua1Rp13F",
  "key32": "5LkieL49Zt69zdJ9iACGRJPvyhZYafDevczNFVh7tV15qnhXjR3JgocZEcTrN1PpX5zM54is2iUvJ1XPbcVdbAUZ",
  "key33": "exC1K7oYjywPLiZBUqefZXYTWpiswBcBz7Wv8y1kXv1jeVEGAbesjJhnxMLXW2aBY7cKj9MSRNSUyzLrxtjz8Kh",
  "key34": "4djUmMJdrtL2adodkdESzqB5ouEG9ciXmGDHDYtbK5mQ8XWrGptyZPVVahuhhnGu7hb32v1Yxz1KW1xfHqsRVEtc",
  "key35": "ppCDiewWn5SZibnANr74hSnz2q11QUTaS8vmdKcAUtnrsjVUonSkqVN2adPANjPk9rvRfdNpLUvJmk6SjzaQw7y",
  "key36": "3xpBYCjBvHytVQhgw3CjetLZmpwA1rjXVBBvAvv6E1fEpbPhnGesLf3882tUy5apRMPjpVdW5zRAkNBcNK3igUx",
  "key37": "5KK1TFEedfahCTvsNBfWVLZXWNCbwZsraETW7n8vqmvaKZhDo89RovC6RRY7kGUrFWWDcD1BHn6RJSfijcoNcDSS",
  "key38": "5zVxgF5sVvTi3ZcPcn3DFVP1eBABsm9QWLyopqo8Lq6HfoQrnzWsdmZ7UQGcH5Yqsa92t5G6kSSVRHPg84pgD9Yd",
  "key39": "4oeasp4N6x3zgFnpDktJ9fkqmgaU57b32JXucr1Aha8Rqdnf6jRo9LYEAh8gsirCWB53Y6dA3X9r7ujzzXrMpRpA"
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
