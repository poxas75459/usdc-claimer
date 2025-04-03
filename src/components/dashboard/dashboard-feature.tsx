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
    "4R4oysDy5VxVo6jpe2XYCtA6mBcfjsfJwFMr9FRMMuNyiapaefCTUZg3YCvf4EaPnwQfLQWrGtszvoAbNmuXfBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2v6qZUJscWnkMNXtyJCFknYgURDj3Ld1C1yZPw4PmA25KgUq4ifMiEofUW623FWQtDqXmLgczENSB94fb7tJgW",
  "key1": "3PCzW2ERpSdoh2H5zMkBQhHe382WUkitVnQKvC87yDA9Q6iQfexYL186a8uhUnjjkGHiBkanaBvM2ocNv7uYMXBc",
  "key2": "3SmiqB8ttT6H7FUocvr28RwhrAoWtdXu9y23qhdounyRAGMu4sRYa4NwgbXUUg8B8djQi87pEhCZJXCfJEK7Noxm",
  "key3": "3ph3XqDEaHJE3iftu6rfRCdqkXyDSztjQ7tCSk8yFPyjSarzWeRULqQyossFrRJHDm2yhda5VMhfcX5CFmS43Df3",
  "key4": "mgmm2Mj1C2FPbZ1LahWAx4yVokJ2AmsXgScKEc7z24avB94Nks9rRN1m935bTTCDpwE9rrPS3ZCzTMDuk9MXqsK",
  "key5": "3SE7ybmeinexNehBuDPsUA2ZF9g1U7A6KnQGxGPEwq2CQRnZmRQUB7VuiTuVmBuusvhJSeHhzTrTgno2EQRoggQD",
  "key6": "47ZwP1FzKPaDaGP2TH6Wxffds5jcJtmPT97po5yHEAkEmCG6dx2LBbS3TLiv3DLqtC7gThHpcghXMDVHZ5B1VMdp",
  "key7": "62HpGo7UUS7FUwiVJbJJGQmV15jwnFZssab9nvV2BZ53PAi3N9xKyDTwg32LNkxvDKWFdKLowzAYh99379VR3pL",
  "key8": "3R97sCitFcSzNnMGFig3rPvJ4JVcZ9zNftSX3TYkK4gmGsXFSuQv61jFiFueXwGTrfKfo6WK8Da4uKPkCm2n5CFM",
  "key9": "2iohsBExVWULKyzyexBhY2tSUk8npb65xdvRoFNpjgAKbBsnijaCq5TdE6AnQK7af2ioZDJKVnUahvbVRNiQpYwh",
  "key10": "4oJ7TaPWrwkQaVZ4tBJCKAGRBVVPWjuPtXurXAtJpJXdP286zA8bAVqJct38RP8j6Bj1Aykc6qzaLD1MVjX96Va3",
  "key11": "2kYPk1FVZ27aJG8Gn5xs5DkANT7ncJCtFW7YgT9RkTERHPbdJrJtJrcbbbkv3qzjGJb1nhf6CwuXBTSW9c1uS7Sc",
  "key12": "4AFQhxZirDp2sfwF4TJn9r6todNW8moGpkJyJMenhC2WnHbrZsg1dDxn59s7UssAFcUMGsSUz7NA35wnHseKoT4A",
  "key13": "563wusz3ButW2mnSBGt9TNeEcrgtSM3JE24iRs3sBdF12mkqfgrXSC9pHKWxP5qZXY8Kpi9h7AdcFiWXgDUoUVxh",
  "key14": "2G6qnLdc6j6KeVgvca6bxLywzBMZbn7TQvVwjiNpGzDsFT1cLgd3hmTyqo9jxRosVZSuMANiY54aDtQz5WB6Mi35",
  "key15": "2NSNsEaUNyYLhvYDFqjuX6dg688h9gsDKyQAKifxsDBi6joNZoj2BrriTsVzYUedZdF33RvLZJ57NaiURTrK354i",
  "key16": "3CUmj8FSBHqY23YwXrwNwfCSmu5BWYVe7bXLAW4KXJtjLsTekepdDPdTR7UNKMCLeJw1cikLb1fx8t6a98WVmyyW",
  "key17": "5ErBq8pBkKomc76YQyRCk5ChXfBFyYB3X4CcjesoMxUpSeUGyEU5qGhoC8S4Y8rVi41g8DbWdxN64Y69DnDyMMZw",
  "key18": "3LBFLqro4NYyiaZrpUNa1G94wZq3Ys4KUijYT337tkgr168hRMsurpGzJ6UoucsSno4yWFHGB4j5BuXmhjFVViEH",
  "key19": "2wCSentsYUcSWybnBuLvephXQLEGyqXu8rrZd4cye8AhEG2KentH49JaPExwLVi98KRK9BfKLJb9EWfY19rePdV8",
  "key20": "Y2dShah71c2hQBjY65gQtoma8DZBeB86EvDYey96TA4Gsmwub52anb5AfVEnHmWZZwEV1k2dX9oYYrG1ZkHZD6p",
  "key21": "2R6ZVpWMSxdBx4j3qnFuz14me4j1FovbMDmeKwKN4824xJnDvJY1xBBBqXxdzCqhfoS4afNZKeKPQfBahwUssmAm",
  "key22": "54upFypfprzXr9p8TzkEbBRdyC1W4hwBTBeHSKmNdizX586gCpzpLM1WTjSnrKhqyenYGpYjXysqC4S8gNqQNpFU",
  "key23": "GgEJjRVW1m76zhwM4eumGKrur4j6cqrnqveUCMt15C1npbuohkrzpnEQvYMePp1Vi4DBJjasTAmasUMa9EB4A62",
  "key24": "2RSUZWx2S4tFejUjy1o79G3QuPKGJJSZEzd1CmM28mxEnAUj497wmKHnsywTtDcPcxcvaapP6HBvJW5ziNygFg7f",
  "key25": "5PRFrC43waixGJRH4AsozBY5G2vcpAFTYq2pVuc2pQHuF9aqiyQTs6pt6GbqswpWZqW4Lt2mLBbgLiJ7JMLzuHeg"
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
