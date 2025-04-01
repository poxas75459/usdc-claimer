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
    "KnQUzSzye4S57aQ3PcRzVQ1bNebG84PiiHUDzYdcnJCVndrWCtAg7HLhY9C4cXHbJDeCnavJfVo9cZ5f6xU2PHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aju71mNwjfkYoyJXfwJgLoAx4bWYHT2mLCo628Rs6rk4DThFWoxKEzYVi9wDB2hFZobFbzhvQHKe6qJvLnTSj8K",
  "key1": "4tEWCVmxDbFwfnoLF6yaFv4cuP2uVN7jPET1YnVLy6teoiLr2G1SQPtG8jRJLKzwHAsc3cAQroNSGXG11fAcyzD2",
  "key2": "3TTYcB4JK1HRowcbpJ4cipraR5u2hNNUQA1oxsQotPGb8kDezdLhSQbypo45a8k7EWMmhgpzvkzuvwF2jEXtzRhV",
  "key3": "5haoGHUgrYFEgbJVr9dy1L2u3SD7fMUbNZySK1LoCT3zkPMxUFNdjh4VQNpBoGGDjtubSvMqMRz4sanCyke7viu8",
  "key4": "5cGVW85Zdc5S4beyx6rJCGu57fJU7vUAb1xacDLMVBh1B462sEmrawUT35htia2K4AvsmBHbDUgSNT9sCibngPVY",
  "key5": "4uBXq7FCNkGrfwWt1NttFtdH8G5oxHcfEu5QN7kNs6Eb4sBC5Sto48BGcvyk5YRAaxrrt9XMXoYnQiDRs8wXDHy5",
  "key6": "2W94oXFSK1vXRnjs4pgaZ5U8PcWLvDpyRapoYBf6sRE9XCJ4xC7AfTxJYd637aCUffBHbuS8kynk4W63NaCmiQbR",
  "key7": "2aRaF2hRz8am7ByT3eJvtJGNNYCKjXVLg3egqcgJH62Rk5KmpjCikTh6ZGEqGkN4WoXfvw3GREEhKkRAg8vGJyPy",
  "key8": "LQa39UohUjJtbm1bSGPqhVMhyPU4vyLUwmXuRuJ3mWZr2hhm9oivFm4UG99f7X7q2juLmSQdZgRkUQPg4C2jY11",
  "key9": "MGYjkQ1F6rJ5e3nd7FECYfyn668QR2sfTYcXsFymijmacqrzupnwvdKH9LhQy9FVyPCLdovXRSPGoNXwA4rgBeM",
  "key10": "Pbv82KCpJArCztU7yaumwLHPVLmSiaHrKijwxwivqPsw7ihtKinrZ4QnKZEMGD2YMF3KPMiC71tcUwESQ5gxQQe",
  "key11": "5Xdzt12C6GF7AjQPxUkrzcc8HBwKGJTQkAmQbxakfztT3DxucTq5ZaYe1ybPfBxpHezXUmxbRaiYsr93nPLHEbch",
  "key12": "3NNQB3UoQbW4GyV3h1cksxsG9WAcg4hDDPwh7SLxxuNzjS5KtZLhrEbCxHxGYLT9YWUSY9hWJjcDDBhAZLW7bJ8r",
  "key13": "3eWUYJFUmGA2R4SmwjvoacUB6X9AzBbzqogGprNSsnrqPXR5hiyf4SEXUZMyuwMkAD6j6VA4gtww89BtnpXATEM4",
  "key14": "64w3jVypxxtHTt3S1nP4s3mSULGjGpFh3KZpPEdB6ZhbsSQMso94r9E5T2P2g5VChGVwbEgQ1h994UGdwYPhyDjC",
  "key15": "sFSJK9hqWmmUga89sLphTGoAqNzqZWFAcB9G8Lp4Ru1zDzw9vANiZBwLjEEMy69KwBZF3nnymURL7X5AkwMNEPe",
  "key16": "27PTzUUFeoxJDwANj4b3ne9qSgExfnAqXwvBqEo1GP8LLAYgHrQsAkNdNLxq3KhkpdM3gw3ei7Y4jXTsPT9rjq9K",
  "key17": "T38esiWota7n112K8LspTBCUFsktUQRoKD9BX8S4mhGUoqbBzCGXs1y4zwQnTB2nEvAqGoqN9nYZA5ppHErvUwP",
  "key18": "2D5fhNkHJcDthr5vzREkwDfGDrf34yE3EW5GnUsR3bcS5K2CqVnJ51pfXgwKRMQWyf8ahFCHXTL1skPFUyG5Dm47",
  "key19": "vhtfRBiy7yyNUe4fEitdEfundgKVpKESEXvRvykcujEjuS8LqV6T1ADXVhCbDwopWprKPJCiqPbZXw7fRoxKeFR",
  "key20": "5u776Wnuk7nhroGnrPFwkbi8c3LbrfotqSR2Cd7XegUFePTbbAiZwDXJdXqPg9EbBhs5huS47Qw2rCLdKVYMcB7V",
  "key21": "4GLfo5gSNKhKkUi6a8NEdwPAxyEoPNYfD7sj5fECa9E69mESisAzTJJmhS119hUsnKdrewEtAFAer7pwS7FR3oKq",
  "key22": "3eP1jHw6VFW1282ncVzMNiFFYM8Rq6LK3vYiLEMZXL1qCqXLvpxBPCqsRgiPr11gBHvks2sVCpajiCgauSppazwK",
  "key23": "A6d7U5729b1d42JEG7jGw4jdhzgQNDiFBZ4uH2Vbt6fsMV8Hn4Y8KyFNouQdxyRVuKB5CVcfDwc4Dch7ry9mZDh",
  "key24": "4BazBPjEuNj8j5jD1rm41sgBF7iFeDFWmGi8zWkjFQwJjg5GgVqh3M776DAxXCG5M5yj2Y17Jauynxaxz8XLD3LY",
  "key25": "4uBZmquuoKV81ikXeXHA99goRj46JYquAkmCvLHWQcGBDv3VtTroBoSLrUPCyuLzWpg2W8J8VKw7FLBCF6GqZqxj",
  "key26": "2ZLp2L3jDrJJojrvm1HpKT31HDTg385zkRKwNHuzDxLGonK82gNNf8t2E8Bicns6gsekR1puf1sk2HwU8kLoPVio",
  "key27": "4bXgW9pMdvawnP2N7idZR94TWCdFF8h9tWxLenyenqA1qhRzPPkaZqmNbJJohXAuz4o4sK8WuBExaTtvpip1zyte",
  "key28": "46nAZQGzGD1FGjBwURTP1JDJLCmEiQPXTBP1tRoQRZZ6Bxcb5Tm8ofgz7LsVoEk5mszpnLZRvYcix2zdGyayfiXW",
  "key29": "o8mhcHCEsCSnfMD78GjXuK93BkMUo61KwtPdVgSJLk1WoZX1FRufPajcLZEVAf9Uka1hFtzZMdXqDtigTFUYHZZ",
  "key30": "354jEZmaXfh6yMvR16fJU3TG3F1zmdiEgHE9WNaV3YWjvuU9kxczfWcjcoPv5BCxG1598h27CNwy8AyK3KwLN6zN",
  "key31": "5Mfigjk4v9Ed1EHf5sft3Rh5UqWMo7prJv1FqcLafBByhSTLsaU4u9K8cm1BDNBMEQTvJSo3E2tM8wEkUgx74CBz",
  "key32": "4C92rG7aT7yE4JVCk8PrGCjp3toXL7nUeMKfp2eUgJSVYw84qSGBZSBmjrotC9mG5ewYmBHLPW9X2PiJfzq8fCMU",
  "key33": "5syZvSFB3yKzd3FzoqZsYGyLEM66nPWfvzrc3Y2dU9ohPA5E3jjfvKnhNphV8949btvmgaect5FbFfDhyp8M6QF5",
  "key34": "59tSueV9hrUDPQguEai8jgwEgNAMTwyqivqGfwpkdEZ7ZeMGkqDrVbudDXeryoVBZCrLW77Fh3uwd9KJq5oCbshK",
  "key35": "4UooYFxEX1mV3b1CZuj541V91MKe7NUU1oAm2p9MN9XY2BA3Ke2m5nSjntVsPBfpBX88pt4zXKoQYNL2FRDch34u",
  "key36": "5rSdxQXWCBbm24HbwngLgkAxX4j4EBJ4GVvZHif2Vd2DELrTSCQ6bHnA51cmkLyquVYnE6tW1D8M7rj6VrovKEqU",
  "key37": "3YRrHoH3ABavHTj9VbxKkJ9igHURn5VdvAvBHiDedSVxWksY3vNZsWz2EXCy3EGip3ZwUSVhAx9GVbptPMcWPfNi",
  "key38": "4HxcQLG6yTCvh4S2BW5r1HSY71QG723jsZBZcGBYFkzgNq9GHaUpy8oeModGRbXLx1WYBnisyxKcozRpvW59XzGA",
  "key39": "3aBJijuDBgyXCPCDahjAYYidZ6CWgQZEoKzeq7QtdQAHEvh76doigmX5GmQxmXHgZQuQq1U8iazWLkjeAR4yCC3L",
  "key40": "2Rhs33bHnRxEjNh2WVkAzakKYFG74SnCQNUcYBzKEMBcxMVQpdBwBRzArwBRxo6VJUJ1zCRPL4ZSw3Gg8t6b5Z1v",
  "key41": "4Jns5C7FXwkfGNnssojVRwQt6n3KGX4k9TK8gyrpyZPT9GwzKUyV7YpxEPRiXWwX9A49pn9M8van3VzMuvuAsh7P",
  "key42": "JAoGmkzpFiTw5rVkr7zw8hAVLZUXRiDXpQ9dBSFRDdSQp6PqFukEgJe98Ye988wwaqfJnJVJV7U7EobztjQPPaN",
  "key43": "2y7qqbcmqcsQ9Pe2VNyEJ2oDvGVd6MvoiVvrezMhvm2SWGx2humMfiUPqnftvXQrErWoxxUrFXnpzWuzwJigiQCD",
  "key44": "2WU2wG1VQpTE5p4zie1SJ1bNQ3Mb2w9tMTW1KE7pSofCJLQvd91wTFYNHXjR4AT7HnNE8iuvF8k9zusX5htqMnVd",
  "key45": "4yDQCDii49Vy8vyfCm3ajBFcCMKtSWuejwHrWWn81RnQbztBcjSqmizCm2BQ39p6jRzwMKd3vnSqYLdUpjHPGBjC",
  "key46": "21vPLwEFPDmE33cUPppEMfSKbopgE9rawK3aaE8iSAiUygMxoRwZHxxgbCKss9Gq3zqJqMhoPjhrmySpVnD1brtG",
  "key47": "37GJ4fPxYaS3jexwxkWSEvSWGSQekG7RKuPHFC6wAyAsWiRkYV4KnVxkCMAbnj7oH2vUSBoipL6MUvnVr4dWm1Xq",
  "key48": "2eU72tdY9DrJhJroGmP9wnTsGEMYCYyM5eU8ggQAeppbXZUUfZQeZ3KYd7eM63qeskfRtKoJTUEL7ePNwN7tL6ef"
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
