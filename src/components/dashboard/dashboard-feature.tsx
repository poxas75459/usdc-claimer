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
    "4KHFDFn5JYYcjZEat1zLJ4hZhKyW9nRvrk7xqXndSBGBcnhs2zLN2TjqfonprP4h2w2nuWXRdPdawnv3DaZ4kVvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZDiWG5RHQud4GnQJWCdNieeYzGq1Nc4gBkGG1FVj8Boc8wxw7LxJF73BEPiPjsWuhYGUT7dHZtXtyyyvTeQ4iEq",
  "key1": "4LSx3QpEaHaFhcRn99ceHiAzJy7N25cB5YsyobrTnw3jqBKRFpKf7cW1gEmes4AeTJf5NxSMKSgWaqVP4zikCztB",
  "key2": "2bvCi5i3sdJAp5HHdnCcWA7oM1M9FAnejg82bv14G4gJm86YiXpXESkBBaBnJe1Ek8g1yAsK5o9DL3tM1MH5ceJ4",
  "key3": "3dQwmxcB7LYCT4xqa1gQ7efHAPA3fR9wntJ68UfwjMDBpzFzVUHaySayRhhMATNVzr6Q8d3fWJ4r6hExHiPQ9Tts",
  "key4": "45HMvqZruVDfPavoPTDLzDL7LNS72DEmKy3dk6cKdshUUz9fXZxpKBZCKNYNXdoyzjsPd71GLQeX839XfvBy7FkP",
  "key5": "4GNbRxfp5mpgBzFGuP1gdWFSJ84iFiv1TRQca7uCxnVZbDPxSnF7h7VkUrPRsEdFCPK82KENFc2aaGBr6jEUU2Q3",
  "key6": "5Yha7g54iHP54zu6djK2hwMA4GxXPHdXmpRnE1jgEEziEUA3Hr8XbJ422m7fCtrrH3BvyNjANqq81bZ8aTgGaKV5",
  "key7": "4bFZJhea3De8AqknEca1vkZAkRAcXdnain4ndW3iNmvGHQPiKUhGv5JiBKVBPeNi4dUqJiK1kYkVe6mf9NZMteXQ",
  "key8": "34ohBSx8uxbUogHpFwT6qPfmF7NrCh2TYkmziWMYW1WSuZofVa55WdXqCWCZYQY17PEcv4nGqPhcdJ8jy1UgjD2N",
  "key9": "39gXbLhwkbrC9gVraCkyNyLp5jmazB3nm7LyNgN61Bnv5Kf8yMbhzg8kgRuF6KGASefbsCN2brzAkdXpaQXfhFbp",
  "key10": "5i2dnoPSiabscgawWvBN82MDoEinT3EnkoLKS1dyFxTWfZh4zAB7UD1FCzSwk2XiqPkJv3647JwctFP9WVVxNU3M",
  "key11": "37dGJ9h8G4b2naBeaAyfTHoMQ96EVVbWVFV7hh8hBDUbYAcCHhoEJmQhUV7YNG2jtvbYGcGfskRPSqgGXJaoM6ZV",
  "key12": "675LwZba79sJQF5oX9F1T49Fuz9MtoegRU1rjKe3JkSiMLmcbyGRrBqNUVdBh8J3VukMKgjFegHHnsoMrYuZ5hZS",
  "key13": "34tzn49zdpZFVpRXV2UskF1TD34QoTyeQDxg3jSXs58swRDUA1ciVZtfxD28J4PR6oUAg9b3VWaiaP3eZp7rEmjR",
  "key14": "34UCTP9YEFFUjDGbmL8WgBo4GrcrX55Z6X2tqFysB7pnHecX7NBuRDN3gh6KuK7evefAdXesRbFZ74KjKWoUwoGy",
  "key15": "2HkcE4UMmsD1GbThCq64w8G3voGXrQ9NFyLrh9zQFsBV7wkcddTpVGHhVjT2iiYi4LiBNHApaxLykotRrm3SQhBZ",
  "key16": "5WxHM5LchczZ8kgGNNHrCRcTa16k5Kf1D9xLu6AUoNwzYrZm48CkrQSrw3k1EHeyGHcW1HuqjVtKUWg7UZ1BAm29",
  "key17": "8yzDakE6uqyqAWjPxGEmNATASnGXtae4i5ZKs8zk6WsZ87qbiw3uTbiXCD7D32eUpoFHsytT9jV6GVDUtjxWQR3",
  "key18": "67TsjFffB4rU7uPFWSpgEGT7eCorBy4qJ7TBdrhQDMsFoiRbsN3WK8xYGXFdFZLTWwpJot5e9KosZr3tfHxvXmuD",
  "key19": "3uhMNXJ7m1sjGwNbUuijguyLkQtcQUuwdG6Ffpo8nccVW8YsGYBb5KKe3vu5H6cNVY78HZMnBgWFkWbuttLmPJDZ",
  "key20": "5YLG3CugtTihugHt9pv7GKo2YMrtzMUbRBgKY9XMBM3DgidHd6phXzWBoQBSe5wp88zca72yEUuzEcHuQYVEibTp",
  "key21": "4vesme7JQ8Yd6uwbPbH9R5EkPXpAd7M58PFqhskAQNpN32fjs3YHzoX1qH4m4vqrhmixcsHvsVmCczq3FSsgDvFE",
  "key22": "5xnFg29iqtGQMABcNEC8hk2yp5hDhT9NvbasKLN2tEkjt7CkTZ4nLNZcUKYtWyBsv2dqxMFheRwEBdNDvjGypuRh",
  "key23": "48hmb2zbjb7dyXZVV4WmunM5j3WMNK6qERPdVZaRvRKQ78Jyce5novmbcxD1hyobgRskQQQ5pMwhkgDiFAhBSBXn",
  "key24": "5t9BfNRE2CsnX3kkEYSRcsdwwXPybccV9AAQkijc7LyrV8UmcMGDYp5q4BmFNX1CH7rt4oqjcamXH5WcajtGzkH1",
  "key25": "5TWTSqsJPggSM5dgwBrm8MgmrC7t4x9Aa5Ccfyv8vhoSb3y2dVsEdMc28RN4dbmpTCbepwJTLqfTn4rqxiE3tzcV",
  "key26": "5PkQcWiwStwDz6Wmo65TjBdPf2VZ7oqZ7wM7SQ8yfgUBxUBkTX3CHezmEqx4VF3BMjkB2ryYj1cZnz6z8o8iXifr",
  "key27": "3C6EmvyCVevsNDLgAUs8cANiJGWfy1BbjrBuULM2VPHC4rZ4YEgN6oQzBLkEwadt4fNakSzPma23owjNpXiYora5",
  "key28": "3NtjXZL62ZPiTXtBTEd5sGUUBq1BLyHbt2tBeqzh6ZEMb5HQeVTa3D8vQ5gi4gAsFfPmFegxibY4WUxi3vvbWJ36",
  "key29": "61fWVCcX5xoVv5BSN5Y8bnZeKMxZJGLNwDcuyhp8wJDvYucr9pkJn417RHGV5GdiZJGgW9EESKeYUU9rsaV7Br3P",
  "key30": "3tWpnCNLQ1UTXJDgQ723f2T2qREQhAgy5xVwubBNbuyWMnydc5z6nz9r1vUoPUtj6AVTFhTG98Jehhji5Dn5fZdZ",
  "key31": "5MU67Umq5eM8zDyJYPSPXrrcQXXrEQzqo9AsYYT64jLftkRbCjBFWrFFFiiGBDN2mMoR3WXph6Gvhv3gVoo7R7bW",
  "key32": "dmaj5vv1hnRn5X6naTdkYicYfMLexgbvdmbKgupmLuVSxf9G274KoUYpDScf3Ue9jaoHKLBATBcsNs8izKV4dyv",
  "key33": "2Z9Zj2KXFYPPRRTCg7tK1zmrDRgsDsfq639erwWUUmW4qbDYzAD76NkwaMLhkTD6Pzth3Vt1gEVRfrB7YBLTgfwV",
  "key34": "5hUhijgckYTAidBW9XFhhWyKAWQrMQtG7JjdnTbu2AJYwUabt13JXD75ERmgELwDnNmnomRrZ2uD2XpZEhxZQuFA",
  "key35": "4pq65K2y7aXgRWsjbbh6nWsECxHFdWbCaKNxoo1gmyiT8fF3uUTP8vxmydH5ALeLiPUtEc2vbC1GgQ3ABp2DNjwo",
  "key36": "5ekYzRBE5yZHN6nL1wyRTsHEcECHJfMzvayT3ngmR4BzegAawPJcCjfPqMSbg8JTLuSwXKF2MT8y89mMJkZ2tjCT",
  "key37": "38TARVRYwagytcdEuhJDB2KLjYzD5cnRmeCsf9CEprAm2gg8iNRgsEN9jrY79JMWpr2ymKM1Rdxc3kTqX2KnAKc7",
  "key38": "CTpxsJ1khfbYvFepmUn7jVsBDQXwEPhkmVERXJAQwdQVJdmaSPZdjKoBZCDW1HGEbPqmbtWuZXpqZ6rcbNzpp9V",
  "key39": "4f85N6WrNqyYPEjzLnpmb9t8HhmGkJjUx3Rs53pQMUt1eg63tcLyi3eu6X7vkm7v5yXtZKNugGEDmgwiYzoYn8Xq",
  "key40": "J2oTTv1xiqLMLfHRykcK1PC1nm7ySGof6DdiLzobzd4NLxcQ1X1BSaZeJshQYrZt8WWRKb5npQh2o242hqVALdB",
  "key41": "4aJdYr4UTKeU1drLHuhzY4RZSsv2ZxNhJeCxMz5FH67cWLaNLf43gwVz5fzxBCEPNPr1e9RHuRj4tGke3bg51fWL",
  "key42": "njACjWjwhoR427YGWo7auQwnixx1gaT4MMe6K6TeCUzynfhEzL79AV6kM2HMD9LBG5fmRkytd7v1rtPETHiicE2",
  "key43": "iZAzeqQe8ro1eUuwkp8VyqtdxS9s2Ka3p5WtJgyQDPzxyZmbVSntUqqEtstw52pTamGBi2SHZQdMYZyok8DBuB9"
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
