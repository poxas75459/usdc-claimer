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
    "626wNx5fVGY3anvY56W1pFic7zQshhcYmsgaxPYL7HJ7iZ891HSojjiwBeh9DzAmL9Yq6XwVU5EewePK65x9Jt7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qHHALXha42GK27ikD25eQ2qDQsBCiSyTRjvYPvebUQ72bPoaFdrTUAhZxXMpMaKvVgsF368ChD7JiiFegmCcEA7",
  "key1": "4ef4f9rFr7duyxHqKe5dzGpCiaY68KjW4xeiM92KN6PtBYRc9pngTm4tXdmvUBwsTa9y9iWRZFs2easwhPAHAQNd",
  "key2": "4gi1xGQ9Tp8HF8gaqtar6zjcbzBEezf5pdU3vm8fjcdXb8VoZZo3ibgCqmcWzbpuQUoCGtcpnQZ5Vmnrc83aTBRf",
  "key3": "pDtg5WbAgETvxXizBFn8VaSvoJYrHEjvuDJRX8GWN8hrxSqoGHUnkYKksEMwF7ogv2hTDMjCwhvzH2cTzGUaJU9",
  "key4": "5Ex2YtnDM4XUjuXyZi52836rFdjtfoMVAdz8y1YVfrtMh68p9TyP2AGQTm9BtghPfmLEqfNQBmk1ozGWb586YVyW",
  "key5": "4i9p7zTckA6NLAzpjtxGuA5dgTABRZ23RM6o4RzJ7qLLbsfSctyPrjHRExXxKG5ENJJokeu91vA6CFBEj4R6nzWQ",
  "key6": "3pdDq7rqDj2UfeJAcjZdhMNSXxMvpWEnWMod4dy14a1XsY5k2KgoUi4s5mpTRTSmsx5ZV9JgdBpSGAZbCTNQ2Dio",
  "key7": "3kr1kYS4qLYnjumC634qy68N1Wer6g1kTSFjsW6waaZx9FrTvb83YGfJX31mkZWrj4zmqUqcKiYBYA5H9cdCMuDK",
  "key8": "2wbE3VZMtXLzVJwMTuVMmLoGa36RatdXPgi4A42eaxJonRN6QVUEoHdbRLi59A8cPagC69QsDrag4CDvqUNGDYBZ",
  "key9": "4gBACpFspFMvvnaZCeV45tNUidLK2CPHZoj6HPw9rxJab9mzLHWa9ETSXneCLBLSFZzTMEYe4jQ23eVyPqvKG4DL",
  "key10": "2YwMS6qgAuFLLGz4ooMEpT23SbJFny2c2yurvwDhyQ4FMeJz2fVaBUA7ihvPhQkGWUhejptf4Pzum2EgQxBUzn9T",
  "key11": "39ZCXAh8GRMkwcjcjtc9gpMezPvtkFkitqeJowJoiMWRNdqkg22ygRbVjrBi8oAsWpYTU8wTCS1es3YupsvNTawN",
  "key12": "4cBZSEeXPREGA1xzSJ5JA88cqwQosjcrE7yQMcfCTGCD7VyMZ11BSHeu16h4TCS1ob7akR3kfGyRmWi2MUSVJcY8",
  "key13": "5a1MhXM7DkGgnTp712yqu3XM5PYS1Z81498azQZuGaKmZRnP2SoZNgd5irbxi2h5rGNxnmQRZn2wfeXCfYwZ9MJK",
  "key14": "N3hPJusjK3EziUdwqDZtqagznLFpZbLsU7rYEPWRTm8tkRFCbpV9H6YbhrxMabbnntEvWbC3UNjqcBWJ6pyrQ4B",
  "key15": "4PGeRXmuPQwCBeYsAuWqYMJounT6ky24TrieL8xZGmwuEmMzntN8XTqUXLQEMfKrqcqoV7B1eaWMpxGSBjnzSMNq",
  "key16": "5zbsCF17UxenXhAKtCur3kE7DwAhcN2R9VmcC7tZpfQca25zSWWEKV2o5boyYXs5XLqSVBwBHP3eiESbTYMCxYQX",
  "key17": "3WbQNQbcbw5ZTxe61J6NZtCzXghgrF4Pv2eJ2d1xbyitchuJieqrTC2rk1cL2H2CiMTc7LRNHL49tZY1CX1mkLuM",
  "key18": "3cfobbFFhpqV3sXDBrGXDEufKbqYHvMDQsiaq68X2trJoroY8kggEXiXRfomuG8cE1VdtdGoKYJ62CKgvGrWchmZ",
  "key19": "2zGVMJybfwTCRndWmGB9g97fNZkux7Hf2e4SgAi8dF3WGP1rxQBh1oDiRa3b1vTHN47CVP73kFaQHAaKd1KvtBng",
  "key20": "37jj5LEoH4c5hUaKAYFp6BSgjtFHP4U7cCBUJ1nCPcTvTGznzn4C4poiTiWUo3rrCYqnsgjZcH6x4B7q6eSuQ9fS",
  "key21": "5B1B8Qdn56neXigFEackhGsaKPGz3HPSmwiKQrmhhyfprxWYz69scdiDQi1m4T4DbYBJKSoJ7eFK5pjysY9hV4mN",
  "key22": "25oYq7BaSQ1y1VFMBTML1akEQPMCA9mmgrjRccMRPoQoxZ5HUtDZ7aQQve3Mt5nccYMn3iPC9YKgyQ2tDhMSWpwe",
  "key23": "15EfJEjsL9JiBAiP9YkqA5kCgiVzsAHQiizwRzMWLViY7H2svtT4LuVnafbDtLqwNhJvfK3gNSYcDJdPrSZrtD7",
  "key24": "473ifCkU9bX3triuFp5phUutmn3X5jh7ViPGnx7HFHR7dFEctLKSxjkgMi65JRKLwBvCpFP39nZPo1u3HH9A89qk",
  "key25": "2y7WFcPh9VTLzG5hWHN9EEwWcw8VorLoB2PuM6on6XejgrWNgssRJ2C2RcwZ8kSGw8RdiHAMmnVh7qkhah2MpkYJ",
  "key26": "3Hyhb4z1KF5aQ1byZEporc9GGb6RDTETiXjjqaeEnWtCdzPo7cZW5J4yvW5AXxfdpBLg51gDwVe3EGFhnPo9Ycbb",
  "key27": "uJ19xiKG5256FPhNURhphoFh2Bc3vZ6TZ7YiuAhUBKnqRUJE4zzGWmmvYHgsMHat1rjEBeSnx9g7d3uBJwBcT7t",
  "key28": "5X22AfddSY5AT1X9uSqdzBBCFQW9yy6zqA6tSwX32t6Jazze3YS4owSMwCkVZjVvDjrNSu4WJoh9myY3LYhzJxPP",
  "key29": "4vdHdrXGW4u63dHWxG8ZNFecf8biPXqDzzxBCNQgZ6qGpktosW2P3Zge4ZKrxrKfjox1Y69nYJ3hocDU7BXo2EJe",
  "key30": "3DDQuSwQdDqrpWYp4vznAXt7GkyUBTy8PMQAQz7LErHyzNztEq2iaTzVuH4Gb7eYGCgWmZQQDACUMzMiuyogNqYv",
  "key31": "3RAgDzLShK46dRmAQXh3hpgAY3XxMKSFNUujTP1mxbMUhGgxWRBQbEWBXLcZgLvpYYdYRxWd2LXv9FgTbh3iDJDf",
  "key32": "jM7h4Tr2po5pkAn4U9xPK95N8k8vRFakJcVhhaHYozHBCWkALpuf2evmBiVnMnCpuQcMSD2LbpQBwTsAKPCwAHt",
  "key33": "5Uw32c3XwYPkY5bqY84vTV9Fxh468JEWtaTanddzg4Vi3nanmgRq9bo4n5K8JFXmjRQwkBKPNxPJoQESoRdLGhao",
  "key34": "5Qc6LLqVjfsF3rfjbGAJRRbW3i2Hw36WN4QwxNnBtK9Ad7faTApqq8bT2HnE6wnuVN9S6FDeessxZzhghnD9rxge",
  "key35": "3jskng7ZRm1EC4zbeRWWyjLhwdsa18KvV2jFejHbvnscoMZiTBYTP9QkjC8pkQbxhDPaNL6DCoLEcNzu3ZfRM9rP",
  "key36": "4goeiZFzcY39uxiiw6RLaZZnodvRwT3fWHHwBhQu3HRZvYTa8ofzxyTJNAGra5PpCPPxba8U96VWHsW2w4rmEWV5",
  "key37": "5gjBbUdf4VwTD2Vghum9W3Mh4q1QTqgA3oG7aRUGUozsAay8AMZXLo6PqABd9mAioMnsz5aJrbavgKwwM3EsyQXF",
  "key38": "4FuSDiG4eydbaytAjsfcRW8qBqpr5Zmk2MxUhDoHpQJiBZESZXTZr1EoiUsyqamc9zfpm83YWGCiAh27mCJGe5Re",
  "key39": "4DW6FYsfQUAVyazL8qZHE5ep7Vvr5jKeBx9XJSeZe1ikQn4neC2EqxJVrbNewC7RHPHR1QPvMV8WPvRigpb1ojiu",
  "key40": "4ufpnX6Kf5K6rRKC7ztTdYESaLRGQL3YkpasNAiqUxGbUexNAzvFmydzyZsJuKYgDhtdyQjmJY6isuuatPx8Ukvz",
  "key41": "EuWvooxsudGKa3uY11jhP3xemDQNEtoQHB5iUuJm1Cb4eYtyBmTERrQ3Anvu3fo2WhuwdKEbKQjhkBTazmnzkye",
  "key42": "3xifrnRabdHZ55vXPeRWQoMt8NRJS9ZDM3GbtwAxbqtUeRaYSi4QS7jfMieDprRUZUtxF3a17Nn3xoeMGBCfUhn",
  "key43": "5Wm68vNDi2ztEAY3JSx1XdSunjLGkzSA2GpXwT8zbjDTxMMMP1eM2thZp6AxEMVHdNvusmpkjrSCPGthZAoaThK8",
  "key44": "4LLxqqMz8vfyjFLugXS7BSBFw4SJPMdBYGUz2t8P4CSfYhRgwen6M5267WpiWYrv1wc3oxvstgWZqzrhxKtdaA9d",
  "key45": "3rC4VthTUghnbRmkniV4N1VqJ2RsGJ3nRRXCv2HNcgH6pBkurhMDZ6Pik9pbfq6XLvkYw5Nnopc76WqL3Db6UD4",
  "key46": "4nwLsw83RP9FYDN3UnLzUZtHmedfJsco8MLrFJ5HD2ig1YLaYZDBfQUzPGmA41k76NF78ezAReY7WYjc8nzke75T",
  "key47": "5JPZkX3y4zQfRSx6n8t2HhU2kPN3uDJ5GCzsrQuCk128rHYSkpRjM1Zer8oUTZPxu5q9nTeRGVtM7rQDe36QwBc6"
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
