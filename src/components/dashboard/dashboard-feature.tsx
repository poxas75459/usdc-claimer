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
    "5PLEuJyFqqarsFSVf2PRdYK9mXfdkNJFQy6aEGPixRanVPs8uBUPhNMviv57VR7aoZrT5ACLF6RJB8dWj38RQATF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LKTzNdGkaWsNV8qq46J4fZxe2SvqqtKRQdDwzUXb7Z1FffwAX1AJrVWdP4xeBGDP5xCvPnUebtJB3x9EquohqAX",
  "key1": "4HyZncphoKvizsTVwBX67hgEFALvtCP4kQzvZb7G8BzD5VxHhvvp1V8NhgoGTZkWVm7xPH3mpd3mb2C5KTkBotPo",
  "key2": "3SczVAqnXfEkfUiy52Am4we5HfcUKjkW7X6Nv1sWmGur9y2h7YjKAuRmUE7m4azxtKZ9qZCwzeXksKpFzQez9ibL",
  "key3": "4L7vLoQdLVbYXUP8Pu3uhX2Khzm89GMXpUEMRFCGrCkPvZzMTMGN53h7dq441f9H77yqtpiuRHE6UxfWzZgjvTSb",
  "key4": "fX9dZchkmVz2BXe7TjP5oEjsZ3tvnevTcw6Trd5qzRYmst6LK7vnuJSMq2Wfenu5JPcVhdP2WZn8sPex5YtNv9e",
  "key5": "3rKq1XgticbM9k25WF1ay21SAovggqpB4bYXzqA6VGu29fwtUMGEMWsMXMe1sKTsv3mHTmRBwAoUfVWfQC9bnVP2",
  "key6": "2oUBrfnoWEoPsnUh8MqU7rRSu7svNj4z61ufoakco6Yuf2NhAn2hv1pwXpUzdrV9mNYy1w4GsWmCeVtGGoKw44Ue",
  "key7": "4wDKx8jvGzVh74PZW7kmsg4zF5UM8eLWXRE3i2Vth6CGakv4vCthTDANVsofPb6nqin8pQfFjgA6f83fjBRD93SQ",
  "key8": "4WcuTo5Ncdo5kXdbf3mAyE1QjFj8gpDgYqzTrYJDATTVt6gEF71wmniikSyyryJMT2hbN1t7dzUoVkgNA6nCc94N",
  "key9": "8bsb44fG6i423ro4zZWGxBgr8UMXZ7PcNyZN5ZPr7g1Vg6M2nZamg37Sq3ETFo1WVidQQk52JNADs4GWC1pwUZh",
  "key10": "2mn3XDdajXsMbojrurdfufqik556DBhgdShWz6vrXhovztALinUfsBG1RZuusRcaSCBGcMtnR48KKjkk1oynxjoK",
  "key11": "4LVJLDctopp3BjnxkzKqZiLq53Pm5X35J2Z1CyYWbrxxzpqCGnph4fczoy9zASgkz3XJL5chkM5boxBHW5ojLbrb",
  "key12": "57bs9htLnVbnepCvWqVvL1j5y63kqvRdYJq8ELFkbps9v8mEFwZazTNcUsCjzR9W9DUDswuLiNMcrs2ra1acYFm1",
  "key13": "5w8XsbJG1N4b3asBGCVyhDgXewwUUQ16RXURMFiBWJU6FfYGxLYncXwH3RjUDCRW9hqMq4ZdbTKXhJmRq5YczFkK",
  "key14": "3bbRKWxjKQPN3mHF8CVs26DCtgeAyFbEAdx9AysbzKjgyRcaMmxA1rjVjDdYRBLJmmcedohKKCPbZDGJUX3NsAPb",
  "key15": "2PwuminThkpDwAQRHtnj3bwEtwMEeBeJpqrWdWycXhv6qVaq7UGB944q2fxaMyJjRkvvQQfxoR74cpKjB8cevBw4",
  "key16": "5LCcU2GFjfjm37HCtz48LfXQ2RV4u94T7Mdxo3TnhdHsG7wKhnm5MWMq8DpVvgnnFZhBPU7JVa8rmkBKUo4Ry7K1",
  "key17": "3vRydQF2pSX9XXfXzuaKnW2M1rFtgs68JV7XsEzivkpVhZWSQp8VfiGYmZtBKJYypJhQNZTKKKrpxNuqU5qGsN2T",
  "key18": "2eShASdooDBun47hpKt55mk8a5msE23S1muwQH4gfXdQQ7kwcujmMThRrrAGxWoqLWN368Ljp6jPb3TdRS61wF9H",
  "key19": "53MtzAV6KP9Yj7BschabAkwm2AkD77iTYHvraYq71i9V7FRkQbScQWKr1oMAcSXivX2x8jjgEWEyTT7qUq2rtcbY",
  "key20": "2iF2hqMsyoH3gtNV4pWPJptxb73WRzFsXrpczJHpcUT2wCMLPiZNoz7JyXNuGUPhimCH2kfEa6tY5n7EkKqsxZpw",
  "key21": "4QfkjwHEbuH2hY7VAtMgKbHbz5kv1cPwHGtKz3rz5oWaV3DQPPNwBhq7joJTTkh1yQ8FruqxRof2GEiMtxo7afC6",
  "key22": "2oH6Nk9t541eYN2dF4Rb6gdiinq8utdGr798UNUo8yXaDhxzFEHhSXiV8iQRdwM5rQz3WwHCFn861ZoDGU7QyN9Y",
  "key23": "2E84dpRCCHsbLJQJ3oZ19S5u6rq2igToAZRzhBu21oAUiDAvC6oBEumQiqxcPqWPNe4KjiPjssK77crDXsDUkMVe",
  "key24": "5Ra9GvwjgGKtE15GErM2KHcRY7ypdy9gvRrypnevHGDjgGaTzp58FRh3iTbCFikPnWCEqtEGmxsfy3Pgkm5ych3E",
  "key25": "3Pq7KLyXj6GEtWX1dChihw4QywNX9jxK6MKu6mun9RVAS4oGMxPPSA3oBGBB7Tk12xXnuPpnUyzE1S5RLVpMdav8",
  "key26": "66pM4V77vuSfDMZu69whXrjR9P4Er4bw6LeHyJfc3RgSK3BrMKWZHangphLU34LuNx551XQZPCtdHeUb21xTWVZt",
  "key27": "5ndwW32JCiA6QqVog4npmtiGwfifNPZUw91vdeoKVTufME62ZaxZ9uKKfkix796sDYj5Krxa1aPekFNBGpT3SSek",
  "key28": "3Mt3ekVTWrceqDHjhAwSfKsNbjaYmnqnhTLZuHHUDGfrR2gRgtJUaPsttvKc6UWqHiEXanU1uLBa2C9zjTqrx7aq",
  "key29": "4vWPT91ichwVx4uM9CpvxHASVmFDXmbc7ZLPC6opTWDxrHTs1GeRbVv6JNCeikS6Ffj4PZNAsgKGGV4XjVvVmD1k",
  "key30": "3AvAZqSeZ3t4dgH2vTTnEk924uxwRY7sPxZAUHt4p6yBPYbP6mcdhxFzMoJ8TMg5FWzczRtGqNJR1ZmRAvR4yTm8",
  "key31": "4wnXReAAhYLCXbY9PAsyDr2hQLgWVBxGK7yeVsSyx6QTrUAB8KRUk2CFRM2GVQwjqvSZ4c3ARZZdbAgRZEkUkqpt",
  "key32": "2Aq1KQ9B3usJrLJSGXxj4VapUJRwH1oQ8ynZd1eDixTpeq7ushfrEKzXqmo9y7inP8YVevrwT4aoE5NEBYh1qvpd",
  "key33": "dZUKhdresX6xbhcH8hUB5Kr2KTWqSdJAvvJfUBxrBtFXcrUYLDaCgSg7ukbG7eJXgT5ugYV2vp8WnpHrteo5E96",
  "key34": "46K72XCdxmFG25kAE2wVVxYJBK4tTTfmUWkGYtwkMZGVn6DNDAgNHyyjBA55A8RDyn8NjCENz4sW46gMhKq7w5eu",
  "key35": "569iPxhD8o56Xzq4qqC5MXY9R3V2wPeuJmCxWYriEGzDRHQVKRFXFBjecJRzAWgsZbZBgjPwvkC1zh1LV7QhTfeV",
  "key36": "282C9cquPx6ZVD1zgviYDmxStZiyDCY9ZJ5xuGigbc7Gq5neuamn7zNm8bcTbyo1Bm5gGGPQi4V6BLVPoVNVWjxS",
  "key37": "2Lh4f6U1Ag3AVXh2WnhWzM5nsYronRdeRwLqHyQcWMv8uznKgE5hP2tuWbdUXCHVZpBAUY3ZpGYT5vBDh1jw5ZuF",
  "key38": "24b5SAbw7Rzr4PY9ccaQRrj3Ktk5gAbX6g7NP9pmRrGiuQZCn6VJiGfAn7zFCgNfG6k3SK936ao5RfXgm1qa1pRt",
  "key39": "334XjNq5SUck9oGbPdRWUs2zUuzX3UsRPqWvAJgkJB9M1HviLyDmUCepzs3H1yZhKcCij2wKMfLepfRWnsxxpwcE",
  "key40": "4nKkWwcU3CNpcshb9HLuGakiNaUBWLkCH77uNRDXgHQpcQB5PgnWhuoLmcgaaJPftMb7zpqm5f5AiKjRXNqcEjcj",
  "key41": "3YBQ6YdJcbf7cJVD5XGxPfR8ZZZ8QUegEcWf5AUsiUmSPawbe6zw4xkbxNFo9Tqc5ozr4RQEdBRwyw94EyZkMSEN"
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
