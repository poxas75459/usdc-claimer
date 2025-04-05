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
    "2PMdmEKhNqCxvJXVU4yDbN41v16DwSzs8svCwJXY9488WmGBBUWKyXUTDQucKeQgv62Uq3SooNPabQY2TkxpHeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p1anvChaqfYq7ZbWoqN1rd5qshpoEDthPu2sVjYdyfBCVwBZ2koQe3vUV4XXEppbwKciKcDXT7jGzjRyFozzzib",
  "key1": "2RZdFbNd6c8MEtA3arY5pmEfzrztaPa7wu9P7M2YxKiT2vh54o91skUPSK1vpvEKXzKRPQh8G9v1aAeAbouWrc4r",
  "key2": "5LQJmHqqUJtsH2Mm2pjfP4daKYFYk4Jw5yMdqYtTEygmm8ZUWkGRoHT4ersBqXo4bsXT3uJiM6XNmoc4hEyFFQC4",
  "key3": "4w39Rdmbj7ob7Dy4JZsgso1zYuB1smD8iHmzaPdXj8HEnfqfafyAT1jhqTQc16YzRvXdYpfDnbUj2aACEDp7kERV",
  "key4": "5s6SmnaH6mEL7LmbXCZAwfCfYien7tbCmMRT3ghWpBsUJjQCwmmnKTr9DUWKPKGgH3NprM2BezCGtnggmA65uEc8",
  "key5": "5S4AFpYLV2pGiNENr9unwwJMV6nnE6fHRTTJHpP2BEmnqBkQYmsuYXt14mKd7XTmz2S6RCAYStgBKHsjDqLT5zPF",
  "key6": "6Lizsa2CxscgVj5XwSLa2vWBa2z6veBPL5NM3oJWxssK6ZdriTBzmTREwVUGcYyXXvXv3AFwzTVHPS9ZCiD225W",
  "key7": "2yQGuN9LusygtLoyFwPHAMoCFgdoeecjYQtiydBe8MSTfgtCr5vZUi8w7xxSqnVfuvb9JH9BPAMLAzdnbrB2WkNV",
  "key8": "546TB8sSYx3cCSTGCLLfT6a4K3FbRGdyGhur11iCKsgAFMxxkb1e4PuBRLvM5zXNiKqK5yi2oHAEddLMGWvLLTWN",
  "key9": "45H4LbfjrsJd8A3LSpnE7EEergmdHw3dEk4DgBCkvNoCqVGTgiyRxCMZhr57x2rpn5YmsWyrL9a6GdDJQa3ULpmU",
  "key10": "61u46A9LTqpofZZ5huJML7ZJZxG9ebQK6rZ2nDi7BFpeuY8g8UNUQwHwzdithGBHkPf4yyXs5Q6f1F7CPN2GX8jV",
  "key11": "U8NSPPM1fcSXf1aVaZKHAS8z34vYqUqTeDedkTVenFygEzXGxDrSvtstqawhErwtKf7ouVUjhWheWt4rhFpNvNQ",
  "key12": "2pNjZ7Dvhhxw8atU4ZPs82Go7df7oy4DRZLZTqmuLwm2EyGe6pE4Ks8tLcdejAFJV7jmat3tjuvUpqGixRXims4o",
  "key13": "2dbj3STUqWq2cWwDqZCSMmuCc2FJoJQAnkesV1DtkU5GSBbT5LnGtLkFkHpPHRWqCqaJDYkPQZEugQoUqAn5nB9V",
  "key14": "5X8CVq1r1DpwYPD94yS6XG4QdnbPRhifFYW7RriYxrJbq9cuvyiXnb17owQwW5CjjqWSFQ86LLX3A8hbjcssL3WZ",
  "key15": "h9PDLVoweZhvUHT27xBw8BxLrQaAwd3E6HQsCon7crheiC8hBxJHA1iGbXWWtUXzUtVGKLXVswgw7pBJR5j5qym",
  "key16": "DczNgUf3QWs3ntY41azcEgQMY2ZSwa5jfQ79finP3C2rVYot6oRWuSoggTWfksrbd3f8CQdVpLjHjjBP8EPSU2S",
  "key17": "53XnxbjZR3GzCb6undsBkaZubhaDmSk6R7aaSXoadfhAEMkU3vtAP7p5r24dsg8xBYvozEBwU13Cy4zeyrefFQ4H",
  "key18": "3vfuMVxQicFZRuJVKfQGmqM3HMbDEjiEjkwK8H3Dp9a3oUtdbB4oNBMJizqjAuBFnWfB5JYDMepi1TPPXRTEhgaE",
  "key19": "5eHD69WgQRs439DcXA2fyzm1K1DsivhutfRmGqZNMk4tH5SHw3sKh4LUFCbdrtJ7Tx4w9artPQ7AJ6uqshpGrUWu",
  "key20": "47sk417pJQEcYS4q7Mnv6PXd86YCZoCtu5mmWznYHrXLevkNCWHHz1zJHgjnRUEPDQPw6DVNRyswZTWJ4M4PdsMx",
  "key21": "3jtt2LpQcAZJ8J2fbhsenSuzojpnBoxbKR9cVbE1KNVWoyssuuKVmrzYyXefNLTG2si9dLFgaBMvd1G7CjbNTxWg",
  "key22": "5mGUkDS69rk4t6EpU7mp6eoZGsrEtPuupourvpd66mNtNg53S1NjpAGkGa5enpcNcTXfX3dL5SRvPqEBxB8kvHH8",
  "key23": "3HXAkskrU7okDLiSvapgRZqCoFD3Lv59ux6nAi8WajZVjJnmNnu1uxsoqZzqCKS7vTsvNZSeE4RgPt8GU4Z7vYzS",
  "key24": "2MQ1sc7xRomc4VkAbX2B6wp4UPabrw9nceahNFFGVJkP6QGbqmanobBqRLL5yhEp9QEHi5ve94CmRb4KokuL1zEC",
  "key25": "2AEgCohBX1R4Cin6qBQGt9fHd15LFmHhjKmgvWwPkYmnBnf2ttsqSHGXpwWAy8NawcDvuFUKy3c54YbALRFXY9tv",
  "key26": "3bP73rWqpvtnQXsQT1YzG8sAJmrLhWiGDzRHnzQUKECSLzHs7vzg52h53eHQ5bUHPm1Bwohtn6rLuzDkX18pu15a",
  "key27": "55sYEBpMR4ACkRSpPtKW48XPfgDTVhqm5PdPCmf4LSTC1b6x5icAeH3v3k6Wac4xASwRdLAwwPsFLRBLi4mFM8Jw",
  "key28": "2qQcPNmbnJrJhqnBDHH9gBRM2R5oprahWHKSUfSQd82igATV2iQAbMz9NDtKCFdcprVQNnZjmtwwSsU4QKMAbhDk",
  "key29": "2aairfdwjNRk1MFmNz8AJCVXJt9irTbm6MrDpKNebaSEbJ7JViWppKrpYqh8bj6XxQ8cwBgzgaTdHE9nRcEDwmDn",
  "key30": "5vHrMSUzPcMzw3pq4PPXUqxD5EeK6uibAhTbzE1RRKHVDKhPqVcFVjH7KSSEQKFAVB3TBWSFsJiNi4WMf9RvrdKH",
  "key31": "2ieaG8gnBdvyNVF44j9U9YUGbRibuZQi9x9zabxs24VLwkv3q9PYBeP4RbC567H9tZNksXDJ83BRGmNPrbZFL19r",
  "key32": "34XfTNJzdrwyrm4UxEnvGL9GQajQD2sgzEEzwDvQUtqq8vFn2tYNyx89HFdZ2N3nAB2gGSma5STAZwsZTMcVS1uu",
  "key33": "48cybZpUSKqSgkwH3MsRSaBoqPNJZ1EZrsSEST1cvvpaWYmTQYf94xkDKnKi3qhtPCq6BLKtioY68A2k3SVVPKxf",
  "key34": "2kLGNpXSHkwbqMS55Eu1VdonKKhPtYk1vs47MgC2FrLYrEuLCqvzqhXP6ceuAq3hbsSKqt3iDAYWJtxUMQfpFPKx",
  "key35": "2uS8dyq1X7FG96jhPtzzZS7RLRpP6TbQiTX571J1hjEewoe4kpd3YeHfksVXe3NagWwqPTsRNw7GdM3bzUTPdkHW",
  "key36": "5KdwmUiNL7ygAH4oW4sNKpSpgqYaNrRz5X6PkpDYmN9h1LqfRiMNADyoTUsCXsc2fCpJUE5sNNWEqK3Cad1NqC6S",
  "key37": "2XG6HESoNu4GxrHoMGAjZQGLJrz7HbbjUgX7TKLDSCYpCm7yDb3ncvSfXymeTF4vFVMStfWqWWakxCH2T4VXppF6",
  "key38": "34ExBrCRfFArnJ8kamBvnrfS1gQ2kCgVY3xdZUd6djuEHNcbb2sM1jYCEtfWvaFgYogp6Nz9VNncZFebDBpXZka8"
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
