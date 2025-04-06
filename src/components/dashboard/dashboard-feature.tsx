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
    "518YwZQAahjHhLAs6kfTTXgojXF63jhhy79qYPDE79W5qp5FyAdzWVkVVxaWKmcy4pzFmuQqfnWKg9CXsVTDqZBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28URNGTUtqkvg7shh1QvTgXfSPz5PvT3WoTdGdy3tFrkchfj3Dn9kfp68mVqHcCu64rUHYXqHJUUgn7KxcR9aT7p",
  "key1": "3ufKeetKBwJ14ZobPqj56oY9mRQtMMEspqVjsn7pd2zHAm8ZKDKoXBEhA7JL4szpNEHznALfMudnUG7heQPZuBC8",
  "key2": "3Pe3r5FVGohn6u8TEtyNX2pWYUnBLRiYHwNVca8uXDiDmmU8Y1AdzJpxq2AvcGa7XYw85veEyuK8aj1D6VTmZkgL",
  "key3": "YYdUnEa818hHXic64Qm4BRuLLVjgTLnkKrwoNSwrkHjuDQLgyVDBgdHCqyTbRz47jJUHpabnXPnX6qBTPb9RQKa",
  "key4": "3bmSbhuNDkJvoU5YXABdM25xyYmy5EQZqLNwxMYrPGAV5J3ZagTB1xDuNa1dUT1AToCACacwEkrAhqeCd84N2xgf",
  "key5": "3BVTi1VVmUTuPd8d1ESF6EU5d59gcyT4D4Ab4wBp2STBSzFMqGDDQQ1EdTsXpMM9kz1VV3yi9kK28c5AAfThCEHu",
  "key6": "LYLm2XKhmJJugnTdUTz6SZR5jVbQjDBQMqU36syTNStPkKTuPQGTT7s4D55TKZQeb6HMs9wFWjqj94HtRvA1XnX",
  "key7": "2gou4vfqZgUm2wmuyifUfRRzHn6cLyX5WudLZudiSJJGv1b2JSZ9SjRwgngERwnSHSvCkuVWo7YxEWsCdEk36qSP",
  "key8": "1XS9Pp2RDC6aXvnE3QhrbuFXzkEcEoM7AcXUdhCYjFeMw5dzdH1RTt29ES55XMZWtFhkb5crFRArDH58Rjcw9pc",
  "key9": "5KpzA9MGt5fnCY9jqYT6hQnnhtEm21aKYRuCWUgj6XESU8F2mYX6WQCE2Hs5ePB8tDdiVMuxNCofTqKXTLJcbafz",
  "key10": "GLvui4KX1fX9ZP4ynnYcihhJnqN5Jz2qzJjVVfbCWpctaY2wyKWTPBTRhUJYNETZXtSkyVDdUgHqroncG6YaLfb",
  "key11": "p2MsJuz7anviaCjhcoy4tXatCjKD23dVpFf4FXKCg6JPz4yboZ98KQD8rkoaYHhsGNmymutG7NYbZJHhfu5E4d6",
  "key12": "3S7757KSPr64AGu2YUqhAEXm5aHXna9ATTHFioNpRDSCbd4oR49LZcp8JroJUFfNFGBvbeVrKRCmDtNs7LhLrcNv",
  "key13": "2foQtHSZjDD8d98XSh8M7ZQRH8VNDb4yvBiNNSa3fesyMCvwh1jkhSVP8gt9tRp9MFbR5qFyLuU2woHy16XmCoNG",
  "key14": "4sc6KAe65CBNCouspvZmLcuvxgvM919QoKtRvHCZRFVywTpZBfqpRtQe4n2R2AunXoLb6gP9tGVd4YJMNUTFuUGb",
  "key15": "3yP1NF2rt7Ng614h4JjYJCqvfesf2sDvC1MhgXd2L5DLJCXj2XBRGgyyv54MaCchcce7MTUuWUkVy66b7NkiE5XG",
  "key16": "4w3UGaE1iFMVViR8L2Jw1FykRoXQ1EKrrfQMS34MUjAH3KHuvDYtWJsfgNq1BigxgHoMxnuPE1N9rwhdGbVRi8Y6",
  "key17": "HMYCA4ZGutg5SLFQ981tko5aihKsZBosWhBet8HmGKwtXht21f2ESmPktfDaxwomt1TNicS6qagLWrFEfCeTmZT",
  "key18": "DwYsthRSuFbBcrv2zkNqCX9ieQuoje547bxEDc1yLhHeb3Bx7n7w2naSkg8D5T6TFVPFcRg3X5NEcLvvy6eoqXw",
  "key19": "4LUsnChbWxCFqPcMhGLdV4nA8nzT87AAuyYGfwMQFXEHqX8y3sbspq4QucjftZYrZtrLPoN7ckqxxQNgcr5KNm5U",
  "key20": "4dutkBZJtBq7MSnq5iFpqeZpVHdeAT6pYZzyrhAY6sYjC2vLw9CFjk8Zwn39mZMnLgB1tHK6zAAepyLePSgqCXJu",
  "key21": "2x7syzmwfuh97x6M6b3y72iSHC4T1yf5QnFfx2g8TwkiKKZQKLHYye7B1FMjjavCD7PjowTdZ5RBuZe6Ne8FpD5Z",
  "key22": "3W3j74YaeHZmYdnMeHjTTttNrqauZcjn1Xr5ZT29xRapGvKNKnyuanggA2PAqdb7pJEhducvDAb6f2xaQyRRtxuK",
  "key23": "5kAs1edSd9WH7AXVMZFnYPvVMEujxyLdgnNtoSCJzPBw3j9hekpiRiZkG2r6jbbJ1LLfAbQQ7gXQCvi2JXEhxmjQ",
  "key24": "3AG7wWAn8yy1XebjhAymKKAd1c96NdmxCkd7UehMXbM8KFH2Xr7YuLRTBy3VgvUEWWNHo7yykYWUxVqicWFrdJ11",
  "key25": "2YxeWfK7bTW27RqTim1MtpppmWT91pUpqtvBkWcMkJKbjQ8FSUkibH6ufDzbQ44WHoCD3BMg5GcK4NHzFSAub2B3",
  "key26": "2qNgjqGHWQSfvYxGBQVSAASwCeXsmV9H3g4cB4XseENiajYBb7gwLPYe7H1ErnAsiLDfyeVZSSXrtVZCT81FkeGW",
  "key27": "2pwcnTT21JMkV3rpSBn7zrm2o7dZTyfi4MeX6i3zUCFGLo7ooTy6uZY6QLvhjhMm6bGkQvzztdNRGCt8qVQefNLz",
  "key28": "4ppRukV8fpRgQBL9k8z5Trs4Azw9uHHZyi9KSxCy7jwxud434KPWzX9sdsBneHNxV1eCXZvRppRGxUxCxNFbyXXj",
  "key29": "4PL4RENsTEQxCiXWYmgo1PzzT6JMH9sf92dbnjZR1WPFpbdVmYb3P2d7TYwduWj6YkR9G34wphsahqvcFoukFN7v",
  "key30": "2yp71wfRVjYfifHA5XEXTZkcLngwhudjDY6EWCvagtxf7C3Tpp9hEpayJKCyis2Fz4b8s4Eti3k7psApBfRsgf9P",
  "key31": "5tGy44et7it1jEdv7vEVPtUAR4Y44dm9JrbnLnjnh8o4PzWzcrsxpGEiprbWF2xnn8vk4ah1by1HhcYXQu83yT3T",
  "key32": "jcJa2P93mT6hsfdcmfwqTR37r61MxjgwcduP45hDwcmQKK51wDmoizz51yNYkrXBHmBqL7tqi9S4LRWDrjpnCWt",
  "key33": "5VFiNithXjb5DzHN1iQqAtq9adJg2K5zguYPrEc7xQwoiTYt3odnKVyLZrMdXuc1mnwwMFK2AFpzgSB1A4aWxbhq",
  "key34": "5NurTqDmHmogjfN8bLTEcEqX2Ffv51ieBguW6eMk3MDrJqCuYvbM8aL1B2j1TKkf2dW4wZMHjVL2hhyKo5VHyokJ",
  "key35": "3VHiNA6MThqgitgLMzYsZBWi5KU6tHWHfUUsfNYjVU83BYVB8FduJ54BboDvbx3QsdwZGwA3LND1wePgS6S7utr4",
  "key36": "5hkQTHLZ8Qq2z8LyX1CLfp1HiUw7EJ7vsHSFDHFSH4adGz89X81NPCNooh1JnvnVdHXkHzC6pYZHEQWafg1NgEAA",
  "key37": "4B2GcWVx13Ee6SdX7tr4Q9xJHA4DgDpLrjxyhVJgwoDKHnZ2xvy1dCUx6qHU7fDDYZKSZ18fv5TaKB7u5Fm5ABzs",
  "key38": "24H778NRpAQoXg3FSbUPChdP4325PGpo92MqZzqJZyx9D2Z8ZrnKrH9kDMcvTjULAm1fVmsh6fPMps7zU4zYKLgw",
  "key39": "2UnFKnhaoiZg63nHnwscEQBmeGGdV1WGgRzV3BtLWrwEtxRLpZWfrzjKd1u5mQMbPf7jmSWwd95bqBRwt5eNgRmw",
  "key40": "2d8X9wD1fm2Sz96avjpCH6ugyVhGVjYzLRsZFag1bQhiiKwaorjDuhxJCRw3JQroQ97qKokMcZACrnzbxuiDwDrb",
  "key41": "AghdcZXGWTthB2dM3ey6uwfzdU5Gz3zRh94spURgyVCnHNnD482LHp22dvbUwae1NMqHkX1rRxQJWf28VL7Mr7n",
  "key42": "4X4Yoej1XYEZJ2iQz6gx8Cs2tLqFRRG8DpqfBreNTVCTuRBx3bmzXq2ZYP5FHd4mtJ3Maa3jNJM6dectFsJCfvqR",
  "key43": "csrmAyF6mYVZd7tkP6B3HwbPZjtqmQstoV7G6LhiMLjAmK6R9x73Bxf3VrNiyDVshEnYFv6S5PyB9tjVHRYNfUw",
  "key44": "DUK7fk1cc618N9x4QK7GqyRNxBjo5L39amCbkrLJUBtSbZJW6FmCSztrk5BkyZHYKS56XQWMf92e3LezqrM1Ygn",
  "key45": "4URb3jJLAY7WEdZ28ERNZrqT3eU1upAMypAdk8vyDiKhb3NVmrKEA16Y2LhnrdGnKZmwk3Xoe7RPN1FGpGDfeTDD",
  "key46": "59EKUnpff6LasiEoPFnN3UayHZpxbSVmUdhoKqtbhtmRggTAGcDicwr5yfj4NnDF1z36DFArtUiAUEfdKTJMyLuH",
  "key47": "2BViParnTYb6FSwj6zMg6Ak9zKjQcFVyxDnvrZ8p91fD4bBFnG1EPvf2cLcPnCYTvdeTc4mxtKrKUXvKubSum3WV",
  "key48": "2vfrLfG6jbF3ALvMK1iYXrMDonn1W16MmKS1WvuZm2gYFevJsXfqcHLkDRjqMQ3WzeCXPLt7zkZwxckk1WxPrSUq",
  "key49": "4UT4EQzsuXfLs1TzW7xcmLbkzcEGrMJTpFMMbciQ5RPPW11czZwBdHugqK336XJNwXtxRE7VeaaQPEentmPQdYpS"
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
