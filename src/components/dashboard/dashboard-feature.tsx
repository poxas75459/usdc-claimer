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
    "2dCYPGBdZkPvHmHDxHV9AESaxxJpi36SJjuriu9AN2VNMbw4dAzX1e8YMtkuSsAscVhiEijX5MNf7x6eMHbyoV2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b25yHbRsFf8VnMHvCUjH3ieQSxmjRwksYscdiDnSaUt5j7jS7waTT3nQ7GqwR9HZ9gkYARwNhBL8uZeHcKcBumc",
  "key1": "4a7f8Cu4PbuRx9XJRBxqSdnCSDT3yrTUxXsZ3HehhCyC6PCzsK8yjj3QvgDeSsayeNemGyyMEHfwEoiMfXRgB4db",
  "key2": "d4WT41kXvWk7GoAeCsE2V6vFb7adZYN3fu43fhGLC67tZtonE9wHB31hmaRFYXNmapTTBRwz4mfEJJfSkGnGgmY",
  "key3": "5jysMrfV3ZJuq7uFHpnnY3BdjnRSEH3qKn9bwWrhpQeWimxiEvZsUA4ihUTUWGeyJQAtubvQidVishP2LYnQ1Wwq",
  "key4": "4BANq22cDbqJDFwvpbWw85MvcWHiXMqrdv7VyTMr2VLfyeW3qmUDbW7ACRbY6NG6C1ERiz5WbVALu9CNgJKdFFR4",
  "key5": "5HsWPzg4Twut8CXMwHswu1pUGEN7fPFHTtJyy1FKvFubQasjkEcXmMc8cbpBaGH923BCHQjrETSmrePRRKR4HPN4",
  "key6": "53BQDYtkdpWpvJVEVbWrbtdWjhr9ZKnzHrXhUhr6sBme3phbJHuqTo2DrdhamTbr4MqoUzDSPX75oUssmY5wt6Aw",
  "key7": "4r69QJAmBv3eDerCPvu6MLaYxNHV16KPczimVFf2m5hRJ9V6goxf9TGakVBY7tqDN6Jy9SBxqysgsXMVp4JNfUzE",
  "key8": "2uUczsVhi9Mv67NRjL8LLAmf8h5T6dr5qEYJX4hZC6oQpkRs8mU9HiW6cbzbWbpWBSs83DMPNxxLQXmrvrZsJx1A",
  "key9": "GExZmSFN6XHKWe8QSU2UaVwxhSay8xG3SU216niwDdMDpjHwTcQj5w2zL7xio6PTeYgj5vok5u2HkJa5r8v3mpk",
  "key10": "49Y8HwuG4s3UepguFQqN7Sryn4aEXPYNdLfArAoHLbga4hEMBAvNrLh23ApxYxuLqWJhZJSNCgyBcBgPBmvLcbat",
  "key11": "2PqNoE2mmXzXPndpuTjdSC6CwKLNw2uZcawpQRVuc7V8y2KoN1ZV7ABGd9hZtAFufFPiH4hZSSvq3SHiJtnnty9G",
  "key12": "gGebvwrUxVxp54q3kLoKEZSQWSqtt5mHqJa6LjPkTyCFP1bHUpAmRq4ynDuLHbnapq4vqgAfGYBXDf5PE9VzRUV",
  "key13": "5HGD8Bcyz3uw9pkaCc8Y2z1tzBWoFMDWfxztWNJxrPjnioEv7Kws1tsXNzoj2ZmCStAHUQMnDgTkXmXoakEGEDHj",
  "key14": "5g9hUswrhZ3UbkQtzunhGSa3frADmEkXeDw98v6UGhR33G4JdoyBYJsUoa1RuZjpo3tuhBQLVd3FDPneaLGT6tnT",
  "key15": "5cUp83pLkdzx3bJxzH2Nh2ZCvnxWiKYKda6GXwod54NNm2iQsdf3UBmrXJmLZBpiwS7ph7kwFSQLBqag1AVn7aEC",
  "key16": "3V7iUJNhbhEMnUYZh7dKyj1i55jeYHvL9i7ZEus739hzXmv8Dut5SLx7UoGwPEsnXot3qbwfQA2rX7sY86uNn2dj",
  "key17": "57un1mM792BSeaAj9G2bSu6We6tyvTSV3ARWuvYJGiksqaPZLegxnWUKX2NLnFmVYuimbdJuvYf4DxGmnZnZdB7D",
  "key18": "NC5cGrTwU1gaddSADecYU1HXeWvqaLntVZcqjqW5LxrmgnZawBHUjs88PXZrcQ6agUtWBWqeWk2HXPtw6FeD4kg",
  "key19": "5rLfHx6AobwBexhVbhGFcYy65mYdgAFUqHMHDAUy6JiX12zowkb9aobx7NpPDGEJYcBLWRPG6Snzdu7yYWwCcXB4",
  "key20": "3aPdJZSS73w9jFReJeAeeEVxqkQ45hU8G5VEPZhPsd5tNg7456hMRffA9wcVsf4TdtEdYhjm31wkPuKC52xZUx2q",
  "key21": "XEnbsxtkhxhM6Ya3xxdQ3rFGzBb5P6PXE38HxbkcUFDMVzjoeybU7ABZNrb8HBiB4YzC2Y5xBCdKQuJcfoteQ1P",
  "key22": "27yx37Pv7GJ7Z88JKi4LenLCyy5JXx8nWmZ7RZhWFumecVUcqQNKPTdyCURqR68gAp1ZDQTKvXGLji3nbLB6qyoe",
  "key23": "4t6HJPV6z3KP1PBXtyz1LrES9d4UtHBk3SW8VwyJpFcd7AWYWz8ahDzgs3zRKDekVVsCLDyB8A6xfZQ9J9YUge2P",
  "key24": "4b3aiGpyLbTAr9TbX4r12aeGE1euFCschHGoWs6inuvB5Xj31PiYULq2AdUUu6yoWPuPRUfJKcg7FGFAAEG7xWUC",
  "key25": "2mpokuBcaK1tRQQq89184QDxwyNjQWnugFrxZMg8gufnAihhAVQeGdQZQvY39CMnQ3Q76UgzqTPxVTo7xmpeGuMe",
  "key26": "5fmZ9BjHYaM3iqGURubpCW78rWBPopq1jT8WGV9pMKfDTBgE4DtYpTWBKaCki32twjaK9hHnMjrFDf4rmTX19tMC",
  "key27": "3Tes1TN7zTj5XPAtuSU2K8ryYyYvxGJYsAYBF3EwX3hB9NZJME2QZLvXmyh4vo4ii2sLdSBhHnzG7vJ3Ucq1sWdL",
  "key28": "2NGtU1k1XqidCZFHZHrtsDTzWzkKVnS4TsGvDoraC2sRQuh8EfeSmpABJfBUu45VZRkkGXm52R75A7WJoUWaK96o",
  "key29": "4QtGdorKdziSR1Pk6JFMX3aT6Vw7727FCYkqeHXj6ZKkbBUN7prsCU7MjgS5CKXfcgUcHZyBy878NfffeEgGRoaG",
  "key30": "5xMsP6EhpcD9HVSxxf2YpY89xf6Ue4LpZYQwTA3W7R1381Nw2eSTXito7hzgr7mx7frgTeACb4e5vHypN4HtX3L1",
  "key31": "62eAeR3FG7SbQwcv5DLUZCqi3dXzfFq9Ynqi3QEGiQGJFqQkNp5L7m5YHJiXbF3kyxxUSqWmeaaAdMzffc2ukWyM",
  "key32": "38Qb7axajodohVwip7ZBYo6QPitrFcurQMUyBLmr5j9EthQG8gmRgZnWoWnKLfubNt1sFaHERpmTpECdU6pxTQTb"
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
