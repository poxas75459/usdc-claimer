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
    "29FiP87prAZFxETA5gDgBrfKJWccZxmQi4Av4fQdgwZjDk5M6era3YMqDaG16AKZF88SW5EPdzo1ZQpcmrit1499"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5on4duuwcq3ucTFPQdGuxgCcGtkGaubnTrVht91zZ5ofPmhGbMijsWsqKPkrWjeSTkfjVzoWrjXLEs8PHVPjf395",
  "key1": "65nJmooBQqXZdP7EyocjLfXAysPUYisXMpm1YxSKyhR8VPuz3NR74AAGJxtu7HhBjsj5CKzvVTdAkmgjCFsWibWk",
  "key2": "4bXQxVFDSqSmrTp7euf6i3FRQvoV2BexWEfFg17Amcr4cGMtGTC4vsDzaWZrXwP4DU2xRMCwomfnqYrv2Sw9oBk7",
  "key3": "5kkRfAQCXBRJD1MfWeKpB8ZwSdSEkMKzXpt6F4b3Q3DBk5izCF4y8L8CBxY2BwsCGb1kt8ZnjBLd7tiahug185uy",
  "key4": "5UjRLC9ZL618E2MKX1HZUzKty6hjUgP1QHHdyLh2cwVjSd1d9bpUnDdKfhmort8hmedaL6rvBG9Jejh3XFyt3Z4a",
  "key5": "5GG8tT7Eu7oz4un1bkSPkjrkDeAyc5nhfsjNTLqVfeZDcY6kMwD3PLfvnanSgcTSTatDCRhQYrakLnV5AiUb2e8F",
  "key6": "41y4M6FkBHCmbHzHX2z4pXdaB5Lk9FwmcsShGmATTK878HfRuLsvVadYq1Twdq57VXkyPxo5xA28C8AUuJ3j3Xig",
  "key7": "XAi1phQu9fgD8MKHdMfFTByqjzKhC4X6hqeTUE3VcQGKpQFFy3XeaZohV4MBY1jZ9nGvk8VpgsNb3GfXgAe1mUT",
  "key8": "3NdUpgp1w9zNL8zYpdzqTyA42WbYDShW1R6h4L8PHhWiwKAsSbKhupcqQcMMQe44zJLWFETtTAD8sa9e6k53nAvS",
  "key9": "3obQhaJWcm8fnMJvVo151LS5aQj3FebkcsffcmhcXjfhDQXotDXKse4uTQtWuBDzNNgGQF6sLmo7ACRwaRui2Rfi",
  "key10": "4Cs9NNEkPLTTV6iZe6DNDaGGAUQUyuzCSfZ3nPv4eufgcZeoGTd4Vn1sjp74Wy8PY495AgCTwzV9ZYGHXp55N7Wb",
  "key11": "36J1vsGkYmtp1rhviDqQgajnb59zyHojyh1cA1iCsDHR4iY4QafQZVjKSEK6qj3oicQ19AGDEk1jbYPPW6nMJ8cv",
  "key12": "xpnaLSTcTkAcWcaM6gz7Ccdr8owTzSXfdSwg6t1RY2TuiyNga1XfeSaF69A3yBi24Fei3iWLQXYK92hCTQeFxHF",
  "key13": "3WtBYy3MTnniSBSNNKs7dFyyYxzi7G48n7dWwqJbotrw9R2LHvB5S92zGJ2q7AnS5rev7hCrFJTNb7ZQCuCeQie1",
  "key14": "4tkiRv9heqyZCfyLnGbf4MRBZkLbsSQuVjMqqXzaFkTD9EjnXb6KLiYPVVgPaBu3sYm1g1KcCRo2oyhrNWVpV6aa",
  "key15": "2KiDMMXJhLEUfBXEAK6HRcjLipHKDRDFnmkHw3fVDzGyHJj8B1LxkaKp45J11hvCVwbdEkrzpCoA9bwQZhp1rctm",
  "key16": "68LkDKtPigCa6WmwAZLfbEYciCNe5wfL5wNAJCeAKXQ1ZvWRhzj3Miiwqr3NTxDqXq98bpLjaSi9Nbcjx8kFNVF",
  "key17": "5d6XC7kFMJXHGN7jZj8JxXsCMy8fNsNKpsNQyxhwS8SC7MjCbSCKuZVGHVhUVngL4bf5mNkVdU1nmEaW915Twsen",
  "key18": "2fDHaTAhM9mZcx9D8HawaBi6VtZs6PSiAfdRrDhrCcuFjhRBvUoJ3viRQN5UD8gzeV9LrmxrHxvY5oD9tdk9ySSK",
  "key19": "5zd1nZSSuWWmAa1265w97Q6y9Aqyonrp2fdbLhSLd432gA2Tx3qjy3WJQGH9PujTjH7v3qt2eazdpRn9gNjeG4sG",
  "key20": "5oUEp7c1F5nmKCxTuZpvgw8uRXyfxLPDELqQPmYW4PUdnoFpiv6DDiGjDgtdeciuyQUvzrhAM9NTmmA27WCbUzdy",
  "key21": "3m7JDFTU3ZEAfTQzmA2RxBBvuLmAgsGyQbLb3GfxyFeVGFjYH59wEZL4yFcYTf2aufgKUFQx61sDNHjf5HPdycY7",
  "key22": "2UWosv1AggSZ4SdgKAMstWWQtstGKKdXFTrH6KMfxpCv8CgoCZANFipXNfQSvkxzZkKgKubNzVQ4QW3j9hanevWe",
  "key23": "5Mf8xW56Kb7AGnLWLqxwKdxHC2Se3yVVHi6aN4oQQntVkZ5xfrfMUH5SUAs1L9kHUQagfhhEUVUsMbLYP5KMQwZV",
  "key24": "25WpYW1GQS6qPScftEG5VKPjHhLrQxSErQDaqtfVKLvy6PVUpH5UjdDcwx7Hga45g1NKKRQ2yncbHVEg6cjpzFHq",
  "key25": "5gxGdUVU4Wb88DVzeLFvrLebFDbWPFJV6RJp5RTPLbnyG3mYe88SQqPnskzgRsXpZH8D5PXfxbCED9CL3uUMiz6n",
  "key26": "fpZHVdpMQSUjUtrSnEbHNMBh7ubkRsm7RhzbEZGkftu7p7hn1erzj6CuH9dKXbk2EuKKrnBVh1YVJ3Wu66P4mQs",
  "key27": "3NnXtdpSGVTc9WpFbQknyjx1Cq4pMyS2qwytwbLYJZoXJQzuWYvRobCKCuBMH8CZDpBJztv4EELZVa1zy8wL5X8T",
  "key28": "5JCA81FgxWhV1DxRHfAzJrjkKSP51ZgbAbwJQHzor5DY1PiyugrwmGqKFhLCHETiJ2EBNgqdAd1yt4WbMHxr4BYE",
  "key29": "3gYUja55prbXPF4SLbpbW9h3BtsW3DyoQ5Y3H9vs6vueKK2qfYaUBUYhn5BJPETWnxs1wPSbfB2rTthv3BVRapmP",
  "key30": "5jhyGpYswnkqo4HUrZeZwg8H3nvhVWpELAiC2sCwU3FGz5G5w7JHPidUxmZUyCbvoqvAWcYLnuG5hWLbwxMpy7tB",
  "key31": "4gWuWcqFAv2W2Dme9MMAVSrcY8i299Ha1CGsEEpnktPmz4GMBdsnzA2txwwwd3xZPLpGHrDP1kn4WMXNSsm15udh",
  "key32": "3gsATYVrM6fUPiptq3EyL2yvw4UBPL1WA9htfnUzZCwicWcL4STrv5FyiUx5ReyBtm3wFR1AQKZ7LFgzP5uCYpf7",
  "key33": "4VboY4nxjNpwcSEDJJidjANexRXouEgDAnxAGA1sxanLTpoQRRGK2bt2bmhkF6uAkUt8z33VP6geek144zaqKSmW"
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
