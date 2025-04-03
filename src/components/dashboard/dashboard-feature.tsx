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
    "2KZMgPYmRk7nidgSBFGWaq3k83dirDYBzr42rjrNSVrrc3oXfTkponwN74D2dLjZkThUEFk9mKUZ8baymErepGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ees86dd5pfY6cZ134R79xskHU5dF9b3xRjXyfuyvaxvHSyYEiG8azWZNzEUXnFXdBhcctifst6tx8wJJdwXUHtd",
  "key1": "yPrPoTU1wYTg5rifMbQiraZdDsSvncLWTsEGhSTEbqCysa9oh4dnUH5cbK8qvkKqGEWTpB2xcpPEDBwHooZGPWR",
  "key2": "3QQ8BWVciHHpTQp9a7mLr2jEK5aTTCTnkfA5ZMnNFRiyvmEwbEuXV1VdgA7ThWuSNXwz2TuHNKHg8cuFhy6oZMMr",
  "key3": "5a1tnQksPkM8CALibB24Y43hArbgcf1MWdqggztja18sBce7QDQ7FUoxFZBEUqj9VCs5xhfZBoFSHahrhQiypTkz",
  "key4": "2xQ2NScpHJpeDQoJgUxNiLacpXaBBtzFwpM9siseirwzJE4bHqwb7tXQqT5DQnigBovFMRnBmw9wH5YWKf9KFLj1",
  "key5": "3YCrQzJkAju3a6d7cp8hkPWvyhLeynsymaK19RFbZc1GuWAxWnqtcoYm8R1BdCx1dHVc6MHErAShJA1BgxRMhgZ5",
  "key6": "GzXTmzb1ezsNk5Dn3hdjHEKUB27pnXacg48wfXU6k6uaAS5zMCm12sXw8dJfsrqzXuD9bx3JV6wqMXr3PrpKLaa",
  "key7": "4HsSU4AdqgTw5CWXgmcThdt2vi8EVtrfYYjFBewcJm4iwEAYTSYF64foc4RANmnD1VPbZ5FRpoiGGoqbpTos3YcY",
  "key8": "5Xfx6B76acieWBNQwWVvUZpTVXABPQSXxa3ngaNM8hofL4Asnsdp7J3PUzgob31QZtZGbwoDtbaw3bdWoNDme7ky",
  "key9": "2WLiqk1Jp8Hb85D6nqT4vorVZMMLCazPX6qHkxSYFD7tjdLVHxNoNKCvBpC68mudtHk1PafxPgMSbWPnGmwDB6mG",
  "key10": "3AUWo8jvBBitgeKC5YxnVs4b2bbDBnfJRE8FAZuey36KTWp9Rhm1w9JrRRDzrpdcjHnK199e7KisYEfU2zcQoygu",
  "key11": "AntonESbgRVGSJFqbxYyyLvs8m4GSSHTAxs5PrGaZcEFzK3jgvHrcFskZavx26dcRKSDm2MqvXS5CkrePB8jR4m",
  "key12": "65TdQMf6JrQE8Zm6c7oYo7CHKyFy2yrC3d6q2eB1xsMxZKHWMKu2dCa76h4aSZLkNVG1dkMRv2dSQ3GsoQdTq6fH",
  "key13": "bJsdmw3yTZRPJqYztZLuPsprzKWcLVPANDfbKWU3jVzP7Mm4JfRT15djrdtb26tc3gTWvM4cNrdh2kQx17XACai",
  "key14": "2AQjZxqvvm4ZASrhSbDpV85pH3QVS7FQzciizgEB9KTzAggshgmMipmLwpd9RyuxsM8p3d2vTcB4kVegWjHPdtev",
  "key15": "DXYasBrmJP4FdnhAk6TkneQ4427veH3JDwiBkZKcCAYoMvfVQ67yNYDjsvrxSjUt6gX6iyEPVm7MQHKgse3fHFs",
  "key16": "4mKCGzQHzodgMLhXcoM8VAuxFL1BH2H2e8ZyS7jfYuUq6dxom15W9rG9bH6zLTsvPPNMVd2ghxUNqa5e3EHd3V4p",
  "key17": "28dANDyJuTsKTPG3XqQKduKrfjeogxoP6FKRn9hw3UgAvcKPTT2fJVpq4UBVGrACUqffeG8Ni2P2z8sWK2dRXXVr",
  "key18": "5xLZQhYvTkRXMju7852MQqWLw7ThLZimevo54DgB2SrhSKqV2KSZTvBjjfRaHehYoYL3Tk6mdLHVxF9obuWHUS1s",
  "key19": "naHpshtiEujMjaa2WAZgjpNyk1WzZkgDgTkQavzWk5rtwochiVTCnwuBDM1YEoiCnCD5oiBsnmHzyZZEJS3zvAk",
  "key20": "2Ah2sUnxaDnQZkgPKSVxu7S9A1rW6gmBLFM1A9g3TXcxFN4tTGCE7qV45ytpwT7Few7huhECT9xQcn2dC31v3mdk",
  "key21": "HPrtEUr9QVpAgiRoSbMzCnHmv71rdMhr1ocrhd2Wjya9UMa2Ycm4Eenf2WT9dYMh2DUS8c9PayYoQiDcvzyQjwy",
  "key22": "2pXnCEhvYJ3VX4jNEq6AUX1SBbYPZyumAArVeB7n3fikfeR9eE3ozBA8kbpTjRtLXgTdXig4oUEaqKpaXeQaDKwu",
  "key23": "3oe5CgBWThazWxxKGu21yVRJsKH53UzY8zugDV9dXX1PUgKDKus7ffmhqreTo3Gr8m5KiUx4aCoSNLLQgCbomnHz",
  "key24": "8RdrNy51EnFe7r4uc1bvEKKLYSauTbhXyjawiZrSqcDytrDd3ghcmk2Yyhm76G3tRdqEfeoJV2ofKxnaew6bcT5",
  "key25": "4oegCpYoZGMqcppqoDH2YE4gCydnhWBgmjfcmMYPDwBWso2NFebvdkiVHf17YiDhpuD2s2nakmBYLHnXg1tFi9er",
  "key26": "4oSE2bb9yz4p7JjHiQPwi5PEceqDPdufkyfmUi6fonyfs2qviaPCSRToW9wjS6tHuV6jDwvnesvJftX8LFQSXUq",
  "key27": "5xpSBVmsXshVWAXmmnRxnivTw6aqFwSKpo9fNs4Lh5RhdZQfmCuGjwGF2q1N94yjHsD2UR7uUEugP4L3j4fp4Dof",
  "key28": "3FWqmfKxgCpoZfYaYFguekcrCH3Yt5YnJXv9mbnSXvHs74efDAHokViRoFyo6nWZd97tj8r6384kCY2ZCyBBqAQZ",
  "key29": "3YmSUfyabmGQm9CKF7fXty16FAHfka3LPS3vi6pkt6NQyDuXnixE8AgWrnWKTJjFCnGV9SDC1BQhLMigRKV2vjoT",
  "key30": "3dSMzu14YhLewKjnCyKHy7Pe5teTr4fkNdj6GcBk3ue2MMWrE28ba99yfvm3o78HXXc6nzhELeHjBVY5EVq1jfjH",
  "key31": "UZdVpmmuGjbnPgMJJhs1AmyVhB6B1JAY4Y14BAqmiyVkPAXbVbngnfCtMR2SHtqSzzixdXGoRZWb3CHuRoCc2wq",
  "key32": "3hmxdbGshMCmxpiGm1dj9rngofosRdUi85ESmEp9j7uoX48U8QA89nG2h8MJcp9JsDTQt1TrwAS1sNFwVx98woKs"
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
