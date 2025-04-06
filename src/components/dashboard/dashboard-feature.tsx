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
    "4MDAzK7VwMVr7FvB8FTuxfxyXio1JykHYjfnJJdt9DjXQZCEaSaie3EQZnsq4pBYsTvQx5t55mda4jkScR8S7vpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWmbxFKXTgbybBiXgT6TcFLxpgiPQgDUxyjddosxeLArqTvngJtdkejV144zKjjA8DHoZrRLAQp1PFwFRCDoU9U",
  "key1": "U8bmLucJky7kkFcD7BVWpUqB9vrxTEBSrVfmA7YS78CdijrK9SA91JJ51mSwCXR2cw64QMmvXUAafF32eXfePJT",
  "key2": "5Pnr6MHt9ewGopRRMqmrVHrKyuHuQgC4jXgiBxD4NXJBUtyeSJqkZ3HdcuPPp9WL397bq7fdfu3xfRsrxAsD2YMg",
  "key3": "5UKN9qXxpr7oZRJtmcVEVmffGwKWHwcUj1pAfEPZh6Ka9vH82t96wDhJFRTs291K2UcZMebR1ubSBTmkTbtco1Ng",
  "key4": "4FQuh4LX4VyWPtQcStGZ4YBXWetqK7tWT2GmF5hJi1KTeEUwnLTRt2XhdyVd4RSS78rjGgz36xKNqy2PyyAPf9G7",
  "key5": "4gNYRRVhDeF3CEsmwojAjG56WfppfqUS5DFQd3WW2d3qSdkLzqT16G4HR7poexBn9TVWkJe9gkFz392Csuxf55mo",
  "key6": "x39axvz7cRSovhdbcUkQJEk7Gv61bRFpwzbyPeza5YKS5Ev3znJ4x2Tx9zfTWEnTZEu6eYVdpUhXRPo94P3muWY",
  "key7": "647u2pjWM7uExFaJbicGKTv5uoc4NCuMYNPPJYUTtX3FYZF3SK7BMkcCxbjfe3Ut4wGQuJSawNALz1Qrt3RysVMU",
  "key8": "3Qp23VFSqW4HAAWnVdevCeb1fLH5wQpZmTPbPrtnM9SG1ZzxPbHECroiQchbQFLiyeYUvo4sVNG8ZkLwmR7yndQT",
  "key9": "3JVYpji7AU5W29apkhZKpybHa9q57XfKm4No4p1FKSjDNUbkFLdg4GEyP6vDqvwJ76dUEYXDquy3u9P2C4MJwbQY",
  "key10": "2KoUA9v2GoppnR9x5or2s1mEHEwJFvcEHjJuY4FS1K8fGbefba86z6w4rqeU79wsxdCp44tmF2gDZ78AqVikE61",
  "key11": "53T9VNMyc2fhb9HZ6xLfkc2d4Kbz1a8WShL519UNNwobHoFHBY14fsEby7gbgZUJaXFM5oZgtsegpg9Don6iWGJT",
  "key12": "65Pxih2QobZuGns4ytD1ABjABnGzpaeDbTRFc5xoGvw3qRG14o9m7KfNpG51W35RWt7VwQbRMDgNKVLk6TNePkyV",
  "key13": "2QnVvRbBQqRicSFbm5epc64nWVSiL78eZoXVaZTHBz218LNbCAv2fgXAhfYpYW8CtLJ4iJ6zG1Bwp4PfaeLAkViC",
  "key14": "5JcKFvf1hdTmATo6WuKKPRyvQ8qDHRRpWRRrGeWxxdvyB658dq8TmJziJ4AtPTmztMBgpDNQFnJB23ufxWEi84fp",
  "key15": "5FPNtLoBrApfB8oWA5WQ6zAgRRHUjxf9d6PHm4VMThAhWPUDq3PEuo3BSq554nFzb1cCENF2QZ9o8RD8GWUtyN3w",
  "key16": "Dm3itQdfnh3EXCrtxqvJedD9arj4TKZFFabqD7k6PxHancJztYZqgTaSxqiUmAuS9Jo4SkYJP3FoXLzRtMj3C22",
  "key17": "5VVALj1wwVpGDYMX9hjtJyDw1A2cQEqUdwr89dMwEtRYvY2zB62gBBvSCbYyJPubELVYvjVuCUhJySyBqrFJT9nh",
  "key18": "5nLSxjoLUSVWbjwrwh9HYm3tzDyQAmqgEPKCCyLXXDLxANDTsf4ojt7DStvc8QdhqxUvS7QwmqKKJYPbYkpeqPiR",
  "key19": "wjBL98aTtXj1QUW6ycQBQyQrPANhzEGCGPnGPTLv9LhAPyjQJVmgNCvQN1iaUitfQDhBtsMCemBvxSNAPr8eMx4",
  "key20": "3yyPdHQ7M98FcVXkBTRoHC3u1Bb24QaiUMUzEWYom76BBogVCuCTSdyVX7m4qNJpLq8DuqfsYeJihqzvp1yMxFbu",
  "key21": "5r4E9CTUD64LPvXbMhxexrSG142GbjbdkWgdPEPwSBNrKqHVAodnsa7RseQVFGis2PxADCztMxNpUkfPSj3zJtK",
  "key22": "31aVvBaPhKA51mof9ut4oHUyouS6rwghEzyWpLrLUo592q3g1fLmLBmNZi9H8XqZ9aMggsZPGdn5o6cDQf599pBv",
  "key23": "3atygdM5ue5Dv1frE3hhr6rD4z7fruqd4Dg3d184W3LmKFVS7zr1XCGzCFTykCwqNstPDSaj3YthcsEdHUzuBjDF",
  "key24": "2WroydbCBzKXW5drFJm3q2pQPMkdXKrXZRX8zbyLf4ggjGWCbvuNoSbKWRPxSJVuw1UTQqH9D81w6XdwL5EPMhpm",
  "key25": "5NctF72LNmje2qGVafagyyMtq1cddQkUthexYv1rNBV7H2Q7dyo8sp6QsAQjwnt7KmBpVDTR7L3TBqKBQvNJRJZS",
  "key26": "3Svq3uRTY8CwdzcQjwgGhLy4a8DUJPDQxmEKo3vp65xNSE7MKBg2E9k3R6SJpsn1UYfsT7oFmJr8BRYnDQByD8zu",
  "key27": "3KJCWeGkfjLyxCQc4hR7SVmmyyhgxE7qAmV6n7FFe8Kxq3bmywG4ejebdgfQhL2ck4JLvXVdMEhsdNDieZB5vgFs",
  "key28": "2yC7hWPhwMybfy3kc8i3igzd5jrhbnXDoUYMdKyyPiiPDMEptxTBJP3HKyrdXvYBJNdU94EZ1aRsHY14ZqYsquer",
  "key29": "2My1nH5YFWBFc5VCzJWvYiHKakPKQisxnoN37T5hQAXXDh9bnqqJVBtZwVsZij4whTNzvme4PcPXgDAwvZC4VUf9",
  "key30": "4GR3AWcvgXEQFQKbZS5ogBkqZ1TwHPXKkRxnUC3HPgETFxwbmgPDhimqrWhZPDJqMnA9TwLzT67rxKRUKTixnb38",
  "key31": "4dmuhEaUrKtjabZ5qQaYj1kAKM1Mj3Mi9AoWoSUmnsY8vFbCeSung9ar96hP5PvFXBE79cn872XM6Ukc1Ey87B9b",
  "key32": "2Df1pM2yx5iNdZQTwNHgEw6QaV6pTkFNHjaMQd4RNCw7svp8Gui37ZK3CQcrDhZafZk1LuZZpXEwcE9xwvcG8pDQ",
  "key33": "52ETdydsmf4DnTtqNL7GMq2xNJjz8aSivmnWg2B54i3ZLtKk2nzSYL3f6S73YXoyndPt3rZMcztg66LRQuW5Vg8e",
  "key34": "4c395XEwbjhunVX7kjsv493wYpHVq146i9NAUZoxrzhh1FQkNAL3efV8rcC2kLwBzwaTJadKwKwkDU7JzXg1qdaY",
  "key35": "4rPcv6LKnWjQ7mAZmGJAYtPpXj31cieDjKSrd4Lxphgsx9dvJKGTa6jEtXw36Nt5gGcpwzpSuAT7xu7xcGNVcWKg",
  "key36": "VKY1HaweLeowL5fFF8emghiktpsUzaMMkrNYSTtaDMeN96eCvfTHtojSbDpEmYU8ixMspzo6QezBnXqatTE6xD3",
  "key37": "3xBPiW7Jo1HzjpMDVzeDxtzv6Fq711u8A5dzDMEhV24nLUVjaXNYZ3YhM6P3F9FBggxTUNqaJgQ36MCQP9EotZhA",
  "key38": "3TiJL9CsT1BWpFwVvzjVF7PUpeLvtAeh8QEjRU9yzBMH7uYs3sp9cWq1NyuoUnh8MX2KsoUBYbp7D4SUWfdwD9jj",
  "key39": "5SQxQRaK7wo3eZDiccWFXVnAhA4xZdDdusfZ9VhKMDDxBwyGHCSdtsvroe1uNyhwR2y3QnHmCHBw63XCNtjwrgyy",
  "key40": "38nUsWZ6ytv6Vsb7ecQkQzGJx8VYVvgh43P3fXF2QXM9pL5V8gL8DBGGa9zafS7qvbJsRLE8YfNdCWsDDXLtCHc3",
  "key41": "27L8hY5qoPsMndtHYbpgxtcgQ2YTrwgXausBNHiVsvGv3g8sGYETtXPkdMacstsdXUmGPQ3Hi3HfQNf7xVzhiT9Q",
  "key42": "AxmZuyHiRFTZjPHMJRr4T31a3rakdgLTwBzxzJk5kbmxZdCktKCgZedDJXfwZBZqz75po2VuTwMjXpELCxzHLrv",
  "key43": "5QZ4AvrzEWTszm6K6r5tbzzm3cthGzBURfvpyzpRSR7i85VHWgBDFpYsHHGc5mXy2eCysvwczqr1JuA9AYigdU23",
  "key44": "3dMS8GHw63YF2tkXZwnCoH81VKx4xtdWJpGTifcmddmzpCnVhCgdTDFBrFNa48eLzuv5nYZ4TiakueJ4bqevymED",
  "key45": "zgbKtxep23UDPK57fbT7RoTVWos6UYyUzSXs3m3pHLAwWwoHNZqgG6JM3dvwsbkGkkLA733efEem2YPnB49jPFm",
  "key46": "4gjHZ1az35bVCSfEJNjMtyrBqrrs3HkCS4K32BCjbns1dMkdiaFsNFCMnMngxpDbSaDdHdcHQHeeo7xZfYYoXDkg",
  "key47": "2gA4QYKbwyKedueayvU5dJvZLhvvf69qkVUEMWsVztTrRTxXxze56SzvoWGKUn2aqNxrFmkZdUYNgbZx8ZiaXVPi",
  "key48": "KCSdxEjqmrQjK1VHjndAREJaf31d8fnhooxTvECjq3oK9YAgbkp6FzfjZdTDizWDwn18AFrXx95DxspoDniGHFH"
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
