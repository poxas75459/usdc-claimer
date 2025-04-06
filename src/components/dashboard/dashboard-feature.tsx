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
    "61238sEfNJh4DiodzAaFoKSXoTU2936cHiKwNS5QPtHG9QbRJvjaC2djjqnUZHK38Lddk9VasXZcKcN3Pf6ThhWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36EhUS4s2LNAstE1yoSib23izLtHc3LkArA3aGFNFL6VH2B6nUNDY3F27mxLx4qaLBySGw9CqTu8LkcARXWZkHoY",
  "key1": "3dsLApzYrMCyJceJCEpVc6DRggugGi5Bi3ZsX56z355LLC2pZRTF7SNAv2VUquW4xf49ECURNMyGdKvCSNLv3YeD",
  "key2": "5J13hmKGddhUCGgo7B3c4x4kFvRGMDYR7S57orDU5btwsQC2NiTUHdNgm6RGimSRGnAoyBWwSwJVLvy8EEGY1UPd",
  "key3": "mgfhpuM9xPSuDFyXJuhrpocFKpSaPvQBdnEC3y9vS8HYJhP23Zd4qKP1pbaAJygFwwceHsWj5p5K2o8nbtS1pnK",
  "key4": "34CvtqNFDJwgju6iL56XTkR7rJoHdL4zt69GXuMfqgS25iz4iQ8zBrU58mgjiMSSZDA95sigQyb9XYyygUuEkiJC",
  "key5": "3XxeTU5QPH17NPwNzgG3HLfkAEUoy5q77G1W6EBvD2a6sW3FgQAauCR4X274n3Z5t1TVJ679EDv9tAvMFpG2iB2r",
  "key6": "2EtPmRpK1ojQVSX3A83Z6adZqddcd4Q1uwHG6xouUisRCusqr3AZrCWdAHfkmseEGtz5z7WjWrn8CYQe6VQK7zVK",
  "key7": "128ZuJkNerMXYSnHvrDWDtZanuDusbvZnB1XvPbwTrSmst6hhvbVsNWVjJeoNqvUCGEVNdKfNouBWKuKzrJ3YVJM",
  "key8": "2p9p7Vx8Y35F6fZgNmUXZs4b3kwtR8P4XbM4Y1XwVxRAwMALe6DAdiKurANN5HqaR8MXtEW3EkSz5CGCde9bNHQb",
  "key9": "5JxhdwEPDYYy5k7ruzuPLd5eid2WL7tQh5ipS4PHjvG2ha6BG5pD5hQ9yER5xy3SZz2y5GcPJr8jLCzeMCXmv5j1",
  "key10": "uKNT1ngZpThWGDJKbhb6G4E38U5ZcPGbVLvkPzEie6oeXdThA5e6BTxQaenTdythQvJd3ZgVmcmpmjyxzN3qiR5",
  "key11": "bgJUXHXMAcLXurqWEkbDkYDLKCLMbxhfCZjfCgWGcfarCCAyAam3XkSGhek2RAjCUwbiFrYiA6qj2vw7FJunEpJ",
  "key12": "34av72STUkRJAXsUTfBpPtMfmWriSr9ZNwnQdYdGzJmKJVPApHx5e2bPzG5d77fXijeWzgEyzGuiWL2CeaywouHq",
  "key13": "5WcMbEctHSfLowiR9y2ozKDuBUQjzXt1MEwyGYqjvbkNuZSTzHsTUhLNeCwWPazwC2fp6B8X8DPfDJT8YpkEYGxE",
  "key14": "5TeNZeZvU8Hajt6TmA4zYBSrpEkTwyKgmL2eHfPcC77HZWQwbM91h42sXkmoGZw4gAMK48QKy8QGVjqyteTNdZwj",
  "key15": "2qYs5nDjSUvtrkxGnLTVmKskH5qkBkRZkzmPEzkpNiPiFyAPYbzLZKYjsBJeqXAyw4ddCaF2b31qoRyGYjvJ2Dum",
  "key16": "4qm5acMf5rLUaRTTByKjpa9P99pEFWhvxo4CK4tf4ofoHKGwfkxJTdLeYhfpD6b7Hj4TUWAtUc8DBx8f93eEbywm",
  "key17": "4Ymb3F6kke9giD6YFh827WY4ZkhDaGwssd5nUKPCmRaUhSmr3ZqfPhqjUrgqfCAgYr83ax7bKrndCLsJTcPZ4KbZ",
  "key18": "jGcAigwbs1u5oiwvW6PB7LbixskdLg4HiNeESV3fgwAFVMszAzMRuTn2YfQmVhLNuDZF3yL8xBW2gdmwzwC1TsS",
  "key19": "gHVVuLiRSikykDvmG51Nm69jMuFb4jSpyPZMv75cT88j38q1sdcZKD7ossNTP45TrM49hUKSQopbN1Jafyy5LXC",
  "key20": "52z16XmUADtq1MPEsRhS2H7EmaF3iAh7SrskCj3TNdr9kfV4x93QP6FTUZ9roXE1gmY2eLtAwedahxKyS5qAwcJB",
  "key21": "xhQPcRCFmhpoUPwdR37CcKzy1V2AJtE5hiDUbUGhEXhNiJft7hcVUdZMhMVinJLa2wHoogVTURedCMLNLLX2Xr5",
  "key22": "2YvTPT12uzEGauqkhM4G8F8XQowaSyaBJJiQbMkaaAy9yxFP3WAumhAPw6nFi6gL2WWYtkMCvexn395nwU9qmuWi",
  "key23": "5Kpj61QPJCifkKQiNXLR1EtNp2CmtobwnuyhNMWkYKq8abLUpRzc561BC2iGsXRVkKQ4unywwLkPDdPU3R8bFMB5",
  "key24": "2k6c2JTWrLbZ2vB6CaBaCgfphPqoZDYnnSi7tgFn5XuxHdrAX8WBs9Tus8Y6LqheRinm7FkLGLHDGQcjRiB5A32N",
  "key25": "31p8VjPLp2GiwciU62EaPVef4m3B1XM35nfCMv47Gj6yPjCWZMd51qhjGtDizDcPm79qkwqGZJewF1Z3s8RfuAxN",
  "key26": "4AycxemA2z3aiComhuNchx9sHSSn4XGMRfUpfsN9YQWi1UBMT5KbyX3m8cqv6mVMswNdmLA2q4ZmtGivqZYy7ZGN",
  "key27": "3Ys2DSeYxS87U1ZL2jxz3LkfSAHNhNtUb5KccwMHkQ152vf93gkuBxKufTnqqa1gPYZYGEYZQzZmq3F1DZtuyZpL",
  "key28": "xFGLLky9DR6XeRwit7Sabmzb9DWjoPhTjF6dEuvFSRZAWU1nYK4TVtBkK35kfzYJPhfpo88pjsgYzW8U2ZHMsfT",
  "key29": "PAUXpK2TfTPwU4zg8kvC4VYQAApRfYd9mVPv48yeXouyd8KuR5NBFmmeMfKfaD29QhM4Y86CZ15V66cPMzDarp4",
  "key30": "GDcTRDL1zWmvmc3qx5rB7dGaX9T3MKeywmqDvH5QiMnPyCttYg1muFq7GZ4kavG7NspGRvBCd6vny1KnbeZ8MMa"
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
