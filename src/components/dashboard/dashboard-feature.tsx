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
    "3vZLWfLW7NshTA9yW42mFGj6oGy21agv9LiiR6Yu8NBR3iZKb7JoGhcdSsgUX49Eirpmi4McVS8gxS2ksLx8LcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KmHcMKQKu5z42x23BeXr39Tf6qEfB7S81jhzMsVmS5qH7E8XbPmhEdEBgrQp8Xim3EZG4NwwCb1n8iMSiGMqHEq",
  "key1": "3DMsGV4jXCogLi1ZDQcgFmWVcnFZSHLfs6Pg7NCiMV5i3yZAzS2sHCo7SFbSjcPag6aLSscsy4dkzBC4FpACwRNA",
  "key2": "3uyz8epmnGym7D9ncMsQW1Xq56rAHt4vcL9mFvXnFkZsA6Ab5gRe69bDgpFAYQMxuRoepYpM8mmP2tFeavm1qYH5",
  "key3": "4YUn1hqPU5HzLCpDMyf7xSYbByVJ6ywn1pQcRe4P7NcPCLB9MpyeNQXdS7vqHbY9FyfFSdxFEn6qF1eidTUedVAJ",
  "key4": "6ZZVTimCGiNzPgfDUgZ7VSUsizP263yktwtqavEwDi6yfZynjCJJPZaaKdix9SoaYAbrE2VuXJGLGGfTbvuKHXE",
  "key5": "5ZjD4RVvD35rgYrqckZgjdtW22D5qBYFXsjQa3B5Ki5nYN8Nhq5spVee3eckFSg8Dj88uxBp2osdGKFbvonZZEc1",
  "key6": "241sMkffNTuXoemYC7d7Kk6apMkwyaUR8t3nchKLV6o1y2pSWpJvGHvCkQschMYqQjwRM5tN82T3XeVLpXHQJHVQ",
  "key7": "5PXoi78okuu9JgxCPLZWezbyMHvSCVjsduQ55vXXityaHA1vZaMbC3WNNcfLDLAGyQpyHc4UbEwxsv4SBq1rdLq5",
  "key8": "7qykD9yNzKGagL2tm7chQ4pih6fcgPKWEkTcnSswdympWXY1J55S5T4xZWksfLyhahx5F9QWa3eqWqcEa533pzz",
  "key9": "3fqeDHmUkfXSwwwSNkjdyYjfxs4v27hHQYkmDTLEwLKvMUru4okYNfdSWxsSkKJVdhzKpq71r29YRT2Ms4vsYWLL",
  "key10": "5RHhQwBaKU9DEQHpjqQFXAwEa2hje2MBbQB9L3mHxtD63WVeytyYxeNhjdErSsYCYq6WJFXVpwF5BEHEzhAsfVcM",
  "key11": "3PEHHvdwJs7iGzV2EtPUE4BgUe7jus28qC7oKDtbW2VZj7Jstj3N2XdegS1VM9NBwQ9vNiBUvs4egNMX8h1b6RTR",
  "key12": "2s5VUdGtpxsneuXErTdzaHMJseGtJn3pqwvnUQ8mDLGMNbqLUE73VaZf3xEzQhpZu8pGULoPzkEabZ3GLiCtU9uG",
  "key13": "2Fyw8ZxLGebDYTBGBxCYowujNrBxdto2ZHss3PvfChoz5evFyE2EEyBMSk7sC31qhBSvPTCorQ2txAPxm8rd5fSD",
  "key14": "3Yq5FTRbYe5UNLSaNaJSemcyV5rLNoX1UrfeUDjPEBY3dGW2oSM8PTb2RAy4VdCNcVdu1ZkN2aJg74N9qemL7h9X",
  "key15": "2Fu2wf16ivQWqfYrRbs2zYGQYYMqpcSAcGGPbtyLwnozquH81fjK7JQrbdwFK2PAsvZ7joTHEECZpeZEqgim7yaX",
  "key16": "Xoaegts5Rshy1hkRwM3S9VEhy82tnMioY58JgtbDbpWvroHgNBDJvEex6G7m9h7X78G8JKog7b9QUU2KBgLWbMA",
  "key17": "27Hhq8RFyPmVjnxKPYsty8VGwp2aunKy3HK4DDidD6sTZ1xSNygN1uiYtoVy8zx8s4gGkhgeVF4m5zHAHxWnAZfB",
  "key18": "4UCFRxwK8foMtPGvrr4BRHqca4eUP5E5f92pGfdag94ZryEqCZn8kw1hKQf2PDbkMU9cwz9YSXxQ2TaDQs9SWiPe",
  "key19": "29Z6MioXLBzhDQLFqzEb8fkMX7zyS2Lc8ddFooEuCRY2HrmV8zzFxAbKb2rqgqzWDEeZSaL6TyARpigKt1MDZei8",
  "key20": "2YjLdYw9XdvHKX7kmDiqy68Jvu97u5cBnxbphNNcaauivEUrxwtPX3cqeJiNt5bcdJS8N8DZYA2oGXi7ADHxCkkw",
  "key21": "2tM4G5wzKMcYSEJ4ovdVwFxH4WfkzJExenfAzqagWBKw9xSSkH5kaifudZQr5b8R4naeFDV2MN62PWfiovJHM43Z",
  "key22": "242v2A2Kce8FD5vxZURRjkEdCDwPwpjpXHBfPiDF45P4gVM45P6cpP9fCMgr4ZxkrrReLUyHgBAfEDW6xm9wdNos",
  "key23": "3dLhFyTbHf4yn84jM1j7uHdQ1i88a828si8oGJMespzQKmDcwjDW9rCCq3oQQJ6a5wZ5j4fWv2VuyGBhq2xTbfaz",
  "key24": "2znrTh5HuyUcfrXK7SBVPqoJPADm4EuSSQW4Tb8FQhxLZd7TVyBRPCYX6MVaRqxQpwPWbcUpFtS4sWF8qz4EK5Ek",
  "key25": "2Uh31gXGvmLn2Jm1fhzQZjh61vDML4Rkt6xQynQJfTzakDuWgbS1KihWQW75M9xTqXQ4vsSwBGSYUXQKLhtsv5gM"
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
