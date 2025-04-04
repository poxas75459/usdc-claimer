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
    "3MEjdkP9E8gaJ5A86T5eKYo2MmntFBBp5wRUFRHyvUTpPzjq3hyyhgQKwx7MS3y7NWx9274ztUU7EQ9cVjHQ7YoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqjfZsnMVdTTyrkfLF7KqWvhsN5jBPuCmVN8eaXu4zTRYhUk1eKPEH5PX1SrpVB5Rv3AL6P1JhD2h3fuJrDq26k",
  "key1": "3xXyn9bntubNwRj2YXJkuAzPxQ5bPC41RyhvsVxFq5T1zK1YoiD2nxTCgQkQzDv5bKLmRoUiPVnkvztSbeV8fnbS",
  "key2": "2BGfKCo9NuSmZYAvu1DQmY8iWJzv9HZZ56MRXLDXdKNeRxLy9ZqPpV8stiuqQj9ze1sCvTYTTpMXojiV6a5cJcKT",
  "key3": "5ttMtk9rNScyxe83Fw6wVCZCTQFseNSpRrZerJZ2gYtS29sRhWtzAiBXTjBQkyRMe5S9Mzc3sMpgjz44KfqFL6E",
  "key4": "2m9waF4F5MgeLVtEW3BaPJ4YFXriwPvzXh6YZhDTSGWWsGQNRtmDgH4B24HQngj4QLFguXeAaNQSsMiZBmFssA4J",
  "key5": "5i1xdHcG3Ee97x5fCFDgEwQYjBPfi7J1EWR45fcsnij3WwZJkH9Nv8159Mw88RQuhhFhiju6M1BE4NUi4B5BAmKU",
  "key6": "5yYCgSh8z4fBQUUftASvqPDf8gvYPcrpAfw8qSQ8XryDTFev64pHWxBZZzbJK8g8MLooxMPyxbSfUd52tzqtDuYy",
  "key7": "5muXJEHLwHPp2Vqdg3BvvFJDZpFRJwQzNwEfHqujzja9yVfjMRFF28HkTps8VXKZNf3z9ASVstCXhDfeNyhJXkkA",
  "key8": "c6feCjz9fJyPpogoZrrgqiU5FmSatAeqRURszcsHXZjKm4agN7hgepWogY4S57fMZMoYeZPwG1VRrFEM1gbVgHG",
  "key9": "AMsGsXi9JSUDeWAqYLMbXDsChPsJwagQmEkN2hp18wHbeG9nGitVo8dYv7HwkJPAAM3qw6VVLTspvDcce4eKSaj",
  "key10": "2eK5DZKgCvSi262zgA9kNQytYPZJWM86FjU1dyqTbmuxaPfQA8V5x8w3m59VaHjAydi14V1F9c51CCZKdk7wUj4i",
  "key11": "3NRupiBn2DFSQE5Zpcb3TVPs4fhEck6rY1opi6MgNxSgEEGaQXuRy3CPVSVPnLQoFPHKbsXfSQY9xRUizUDZYw46",
  "key12": "3nFanE3qUyP9aXwD7rbisKpseii4Wr97kQCbrGTRhvYijjiEWivzcXc666QEKarySH1g3Kpfprjaa7fqW8HXiZKp",
  "key13": "5p5Wpqd7nHbwBXsfygB2ZMk3vfRG2cPvNBrmb67gNq7qHeAxyFuy9vXNFwf6EqnTSBJSLo74XbYrdCZFv3LyKjy7",
  "key14": "31MiWNkR5d6bcKtLXqg1qYoutHrQSDKoQifcQX3FR99xq4tAduQ2k5fr11NkKxSg2P3TPpfRXavoYGovpYg3LE8W",
  "key15": "58Sv392m4Z4GKV2yZNcXcTUNrs7ZT5MQri2PWaUpyNFNi5UoKfoAaQu6xbXY8nyuMzPMiHsJq8aBrRS159wBVMBG",
  "key16": "1zWNQVrHRkCeyTWbJKKYjEZWF6HNq52PG8QAyhSuvLcS4gZirXHWJXDcCyB5YZkRfAtKYVTHzJsgFKaydYxKYM4",
  "key17": "39wPN4uhyxswL9zGAMYQwoxuRPZt84EPA3g33ePz8WgQLRvqtt6BHMCc4PKYZtrdnu3hzRrzXATAUdtJ1UWQbR5a",
  "key18": "3NHMZCTvn8FztyZw9w5YqkD4gJb38ohCq2zsW7sA5xrhc1GMXEyAXLoLnW2PDs6U4cetZCwk46kCVhmt75Vba2c2",
  "key19": "HNBYxXgn1HBR6vRqdaGrCvhv7nypfvUZDNTFCQp1KrnJ1rgWzV27TAPZBMpyBUA6FovgMiUS2LoCbCQz6tQzB8V",
  "key20": "55LX2BooGoc5F4LVofj1UMQoXy3P639XDJLaMFB7Af2QvdZUURZPrRMR666ZBTvHPjFp53xgMpXUgKuR1F5ny3ZK",
  "key21": "3vcsjz5kuWN67ZdWzCZKZ7hh7YzFcsMMyauczFksCtHdqfh966No6Dnpepb5tmU2k68it7mdeFMQ6tCvZwfWHJEz",
  "key22": "4axvfTVzWSpokYhK1hfo6WTcjniZiF8j8avY1SNTig3gG4oKENiaDP3JhZU8Dd75DBDUtJbyCK2QxKrnNgj34R9k",
  "key23": "zZHm9q7SBT3Pme86xJWmHX8XFuULrgqihQFWn8L9ctUksL88G5gNFfQi3sB88iyNCypAsUhC7cc5P7fUCyEgChW",
  "key24": "5UBMQtBbgYLgZYBvWxYekQFkw6wWWaGKSvjCSB49T9ABNH9kHbHQ6A9KFAaJzTFEwX3ZnKYigDFfJnBd9rpAvc7U",
  "key25": "4WVGc59A8CfK58jQj6CLk5aqqm7QkSuK2gvz7oSdhaZaSRWgHzt7kSjSEqVo3wY7WKNWaNpYa1JroQ1qkk1xJ3cu",
  "key26": "3sdMtnZQhbvK3tJzAd5tBukC4A4nUMAVovx4baVBSFat959P7zM3YkDtW4T4gBsWp8T88PUtbkeyZ9dynsacz8Lp",
  "key27": "5h8JmxTwxy2exHCXALQhHD7AXFryTRehSwriYFdLvoDSEKuS4urytHEb3jQLEee7fPwRrUGiu4t9ebpN5txzKfAT",
  "key28": "2PsYiMGDvmYRsuCacTBFVwDgFJFgCY6euuEegxBkzDHmQWimYash8kc8dFbZ8yHY5uizFXvRLRzNMewzSF2da9uD",
  "key29": "mXmsv71LP42N7X1Bje3EcoqAomWzuWqrR1njoNka6v6eZNF8G9fr22xcPizyB7utB8kTGmUyXTnZCrNecY8QuXT",
  "key30": "54fQtM4VeosGeKhksNJmjirHrpc4fB5vpUU87Axo4LzPxhsjEpNqUijJ31Gwusn1qGa1kk21bn7pKUQA15RT6Bc2",
  "key31": "2PWDvjruMFBskCXNheUy6y6E3p6aetqTBRquynHzmmbmmPAWdDBFbg52coWfXaXB76gUCmGJDWu7pBXVCM862DHQ",
  "key32": "577u9fwGASmi4GZ1BHZUid4xDiJLtb1QKh3eqRwc2WSvAfX5Q4gGvrAqCMT1BnfgNppCM2ie4kFa8EzQfXoSqFC7",
  "key33": "2eQZwXSvmJ7RW7zaPosocZaoho25zhsopVHFHoUKuGMGypvdc5zDszgddkWkD47xheJEGCUYwkKMcqeD6e9TQ2Un",
  "key34": "3yPvANd3SMsytzCityddqJ7inUVYCzQt3abduhK1GtxXePiHCkNtzkebXsqnLzazWQyQ6xTmJDduYKnSZvmnbS83",
  "key35": "63AnbDRCe2WEVH8pKZgKr8tdAGMrmtSBHWQ7WSwWc46LVis5VvhZ1X7NkEG3jMSYkVmng2wY9QixCCKrEP1XP77J",
  "key36": "5DrzGU6j4fq5qC1jyynG5YM3tb28oQM7ii2EUT8F6r9hnni1UEwXgeAvX3pwsVANuQm8HjuDZtZWFEWULbwZYx5M",
  "key37": "5PXnP4TonvjVsBuvpRSCgs9SmF2Eb2JikTSWmh9qYbHWyiYzWSCYabRNV6UkrYT5axhZQcXdjxNvb2JzwS2Faqkw",
  "key38": "4PduU6cVsamuBYZUVwuDWr53AqqYi168w84RyPzH1b8J7KrgRKnceX5auBGjYn2WzWu62FqEYB735pp2czQvJwaz",
  "key39": "Pp9GLyHfZxGTnc8DGMzotkgNjgriaWiKWKW1NXy3DTS467oGjeWZttVUawywKmvBjvDUvWqQr8racK3oyBNm3zv",
  "key40": "5WErPS9eyTEFwqFzo5fKz8qBEFRMjgJVQx58QK3BBw9MvZ5fPttFpjWAMgA4z9MkyfmW5U9XTKCtVLstXsEUahcx",
  "key41": "hJKhRBiQJQp6Ung6Hny8xLGPQyouVMaaHx9bKyTdSKoxRsjKmirTaXjuwgnz8475Aqes1FTb2mG3VtAdijmaTuD",
  "key42": "4sBfoQMef96dGYKCNsmbaoQo2Ksazyvv47gwcNx9Fem3zcTviLvDMuABaHSSAbeUowrJAo4DRPJgMvr64CQ3nXdN",
  "key43": "qsSuqzhcifQMZQdN5g6tZZa2jw9d1j41PXxpqn1bHtZg6WbihiFRhhqARGxqJVC32fzxG5GBsE6K9eiksc4G6go",
  "key44": "4T2FAyC7V467RfgehsxpWpHWvv3Nrdij4ZzDhBuLDnWr34NKiT9xyMm16Z8DRMwtG4sCfuedQtdMYoqnoHz9ETb9"
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
