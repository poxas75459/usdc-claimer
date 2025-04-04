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
    "F1NPNPSFRBveovZxUtL9Y6xk6FvumrwPV7LbVk4KszUmVD6HuBBQdAWLwuUzajyT2pgmvuhseyNMEcigPaVmsh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qaAuF55FLzgUJyBCxFSRUxcKGKyJvznVj4SprTMs3sGHJAFU6yAgwfd9EKKPtQBjHjukC7reyqAgaHDFF7p9wub",
  "key1": "5eJwAfabUniVdD6LTwkvh3Lx8Na4vTngBBWTLsw7pHMuXkTVXntCB3sMJWwz6yFBxFLs5fWcDsSRqYZ97DAYCuDq",
  "key2": "4YpfkwCSdo3TnTp8Z6mssYKk42HXTgKQ8fYwDwZcHCpYpJEibnZzc133vRuysrtUTcShGAoNnoreqGQbqa8LEx6b",
  "key3": "2ZxjiDZTaTwTrjKvBygTS8s5yksgNpEqkj6HoECjQDME2BiviCTnuDJvsX7t1GWN3XdCapCFR86HgwByw9hxa2PD",
  "key4": "2bnf2x8MtDiANX2RQiYKfr2usExejJo2L9aoa3upr7mNYrD87nzHWgTCLnNwJ9Yo3p8tvLJmZYV57bRGTFqJ7JgY",
  "key5": "4RWofH7ZuFyx3fAZqgggDZnfjoJcMgTUzkQEApXpZhEqUHVAPoHBPVoQ87U8aUVhz9B3dsxLaJ4ZRAcodfk5U9P6",
  "key6": "26MbMZZ82DY1V3TRbTrqA6ksAnBhEDzGBTcYKPd8mmh5m6hEWGimTcfGofgNDr4JaRQ9Exs6Pv5bWwuKeviDbjrF",
  "key7": "5sNAEkfUWti5REVF4X1W7X7RA8h1SgdCYsDUBi5EmXQz94CTTscGtVDhxuJnrauK8HNC5QXa1RNcB45mMJDXnFYt",
  "key8": "2p21oNAYwgaAusGxEZwrqmNBc3YGH92JA2z3GyvXdvJjaxSnnatmhKirsvnyNCRP2rDFdnsjESj6E2S2jfDh9N6w",
  "key9": "rEgnvq7H4rXXdYcLdShP2kiVRyQFvX4w5oQeb6YxR15breHGJsocLA7qoNCNLzpv9FRfYgTMopE6dtjGxSqhNQQ",
  "key10": "N7GUkNswoScSd2ZUhQBYUSt52FeK5TMkQbMt49gssrZhaRzYbrLdRnZr8KwoaQnDrktxy8Pq1cnknDCAAbL2fdW",
  "key11": "cmNuUJ5C6R4m8HcxsASbSqnFzY4X8zfY52u82PcxbeU4zeWc2ne1JWZAPb8a8pt2SaGdCPN1igPMf8cqkpo3FER",
  "key12": "5YJbwiCzZq87ccRByLnAEq8Bicve4g9gYeDrcmyTVtwJJx8RadGgi95CYv2rDvUFcx2m6RUBjhqh9vYVbCtLBpme",
  "key13": "4TjtwGJgyxbnuuYso42CDXux6rmVUHdWw1mdjTpNdW9FtXvaqueESkkHfzMBsJ7GMT1GxoNNVVbsqiB8kxPxJG8Y",
  "key14": "ZMAYDQPShXz4YNjRBBSdPwqw15c88QH2NUeLbXbAKQH7BvWZ4jp4oogvPcumEr2STwfKzvAGgNxSBRx5KvtESME",
  "key15": "4jmAqn87Re3UocNp9i64mK75Zceb6bdm53EoeV8bZSWeC1hsqXTThJXhxKyKjVkLQq5k681vjbK8h3cf7a9k2Ykc",
  "key16": "2Jo5kPaopfJx238V82NMYXkWHctcDLLdPMRPdwF9A9WY2Kx9iLLgToWiRTUaVGN2pd9ZwFSgBVpzmaM3de27drjb",
  "key17": "2UvZhDJwtW2V4pMCLKcoji8tVDh6uztodiekqw6ZMRM4gDoi9YusF2Joy8BPPZVTVi3GDxGknGWY7uF1effBxeH1",
  "key18": "2ZjBn1xgYKUQasJNfgNFBm53mmRVFteKnwym6svoTaaaskftE9sXC85jZxZVDWDJM5GZbK4WaZiku1uzzeJjdEKs",
  "key19": "2pjSkRcdp58dwjwwRS7EMYN9BjBtQfGwNJkNdYKEFuhczcfxfUK3Xz9Daf6YpyXawV2s5ZrzQVhQ23ggSuLiX8LU",
  "key20": "4ipzmT6pL85UmAqE5Uxeay6j9LayiEJuo9uJHfYnFyMZqWYV3SzLdMLPM3nBCWqmbUW6kNGqsmfrPMQABSQSdshx",
  "key21": "46xrvdVoCMGYrxfMBtA4eWC2M5Dg6UcszWaogwJkafedFb2QvDD1qnRxUNvnGo6EfZwkEdxjE1QCfb6RL42obihg",
  "key22": "3kMaAxqS7zcqBAEWn18VLWiC6cMHLD6WdvWGV1q3TMbbtCsVP9gKfyZBZn9LN7jedJ7gJi1AcGWbN29XZEjHByT4",
  "key23": "55hfAmF8bpDjyUeujBirv17WTAa3diqroruSwRWZhReBfWJkd83D95LCnxRV7AFwHKxatAcnmoziv8sdjmMjWUtX",
  "key24": "zvsD5yD8yPRHa4rgHz8yrpxHRzbPA6wyivXoh7NXoFm9YjdYBkxamVEPiUnKb8MB7zRaGi638HobbCpLCxk1rp5",
  "key25": "59NF3gA2LPNbzdn16e4kYuktBVhGXtXoMFx9QnvnqK3t6VF4u12BHbVrFZGNUqFRFZgQduifwTNpGmq9x3uWfzhf",
  "key26": "31cWvmDegEJch3N8hG31K6MDJYRqgCUyAzu6cmw1BwXRmqSQVU4khT9X3KbjoNLRFzcWQT5QWCsBzBnTXZnuC1Z1",
  "key27": "oZH4L72YyizMJsBxrNLXWUYBGL6xP2GvoRQ5DeTDXhzxhcns3NH1QSuBwvKgurEHK71zH5tcJ5cdadDQZXEGHMg",
  "key28": "2LiseNT6NANUyyRx3aJLDqdkpi6C69cNERN3kRbdEd49nksWQJP8RWA6nGnd2msvHnWbzM1pKJpimw9kukdVdTBU",
  "key29": "hdt2XfqLPdJyt7vSQWayu295cace94vCsmNq327HXTRhixkgRRHLiK6qbWL9TrkXxQb2DDVy8WtB3qdhR2q69Le",
  "key30": "4TY5zup5KWnSTAH6NuN7Z5jyWL6YyaWwa2WnJdczQp4zR1JdgBaccYu56D3DP3x4tPLmxWqUYyPHsc4hSZrMW4TD",
  "key31": "64z4LYaj5HZBDhbG8r63RYKLwQ3p4nYNcbWMjJ1x8Q8FWqxjPkusHRxJZkbV6LcqNCX88kbNXrjPeW7GzRvYDe2Y",
  "key32": "3dCTfFnkdrvfQSXLPrzqxGVWQ8mCYVNP6PTmdyiNCyqht65kn9hjjdHq37PtuL4fq2BN1NVk9NbZV3M8z3QuPzmD",
  "key33": "3ExhSVJbS2XCAHT7L4XLgtWYw7Fd4bgQ1G2efP9M3jJvH7SgSUtpoaM1g76psH4h5hsiFXxZH51bHFWyQyaXVg3c",
  "key34": "2EBoZMoJCFoxde3dcvTvUHg8DnkzEM6p4EWamjUKtJnmVfZ5JDtbUh6KpNZPushRdKHtDpK8rEKZaX75ahNTvFXn",
  "key35": "3R7zBjbBTGBRwVRPTH7FPqDH2FqYwRAL8GapJe18YG1gktStQHd1KT9peYBjdEtqgXZr5q1QT8TRmwgznTuTXDc3",
  "key36": "3RLW9xPWSst8YydTuPGUvCZ2YJSibc2JBEB58o8Tahk2tNxQCXTbuKhbKpWG14hAPSFo1sBRHE9VnE39pNanwztj",
  "key37": "4BqegScsTQZWDbUPxUkmvu7NBcpwSf1xyAmt38DWiX5fXEpMf9Ezva4qk7nR1jLYZn6w4KczqfLCrraKnLr4e3rG",
  "key38": "4XMTTJx7CLwsD8v4nWLqPszrAyV2UCgaazaypvTfRfcuhPXXQBpCvoZJtsPQN82n8yjta7V1Gx5BL5HhoDuYYupQ",
  "key39": "3naCUzghPMKY9xNqBnZESVppcS1nxu2tWpcWwLmpkRDVqvAf9F6EjeUjSmBaWGRvWRX8G4U7hUqXDxFJLu1vWUky",
  "key40": "66W4GCJfkijuwTdwYpcsKBJuXp9LKU6tgikwhHw5jAAQ3zdh3bE8f8ppBX5fWMYbt43F6aZazNoFYwpbLoPnv6Rk",
  "key41": "5AwVm9LCo58QRFDnRdMtbH7N6GmsftFggSSjFrXDW6ashkF4bmbHKj8aTvpG7d8KRKedAfK4iAQxXJFvawuPjPer",
  "key42": "4NVUghZcv1yjYCin3cAPdbTNQvVffmqvRnQ8XARyoj4RSfE84rBn9VHgoNMqXQVbPpPDC9oRYRJ5vs9JxWpKxNv4",
  "key43": "2fBwMjnzothGFZceqNwfekv4YtTNnGhgSd5NnTzhFcwpbH13WCikt57V9LXvwem1rRgnzq36gMtkekit7WJRw3Uy",
  "key44": "4v8kXFULgW6fBV8282efHDWZArn9nLG1WUbRW34BFJZ4Je5N1oArFdBGmor75N5eWS57ZUVdbL35a2uRenYGVENY",
  "key45": "4JLgnAEx9AVBWLRfUawFtQbtomKsiojBPKJQ3xBuAamdXuLA1FKZHXitSkGd6BjZZuyaGSjmMbjtuEqPRTVfQq3c",
  "key46": "VpoCUNAiutXaUzn4NcA4b322dn1ZA93WhfisV2rcg2yi16vbBteWgM1VcaKEDZYWFirerU2d9fVbPkxQ1NUfdca",
  "key47": "5bX3SZLY9SfL9iwiu61cFt1CTEwv1tybEwyK9LgxfNNEG4XUMgxRNDwHQ6JiLoP7opWMtxsBEXNhzyCM9npWeWGx"
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
