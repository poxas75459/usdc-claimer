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
    "29TKB9aHoKTypEYti3xU7Z8t5JRJ29sdnyzP8Z9CKcmmWU2XJEPqYShLhSQFzeVN4r8wJx92gbLmLk3MmbS8aRnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EDcEJs4t9YNAD5Tdag4JNXKD3xMi9vszTBap5tryXQTjVihDmRQJkAvFUvWZh64oLfizJzev3UGN4cKRrhgPeR3",
  "key1": "3E8PDD7Bb2Wd8NQ2PhAmHyN3VJxpFTf6oRDmcAbhUk49D42kmFU3JaucBrP7DTTUYTnmWTi8wq7Wj8eeX3DWAZ2S",
  "key2": "5XZDcUsPvJRY9chmUix1piEjhhLXbGRsBsCZi6yx4xzTBoug9PnStEAJFnMWzVh3GL2AAk1zvMcNxz9c7uQoKY8Y",
  "key3": "4SAjEnLZZqBpup3GpM9ixQ1ht2iL9paXETcEqoGt9xX9MyqJnQSGdFFKFzQ1kPm1fDar6z619yLGJ442EThRLuXH",
  "key4": "4uVbimmM9GefaGVzkrUV3hNQ79DijDE3mSgsCger1xD3K3c9nqLUChkpuBBAkoC6miMV4x5nqtcj1HTPh4tvcDMC",
  "key5": "49ux6Fm2wxH4VzBFeAs7TkUuZxtviopUWCQW3cMtsKejRj1fZGWZAA1JENZAHQFZEZ2bow581q929SweUU9bNxjA",
  "key6": "2RZ1NzsYBAGFpgofT7wJeAQdM818Ai878DgyXtP2j4SDdutQZKvEJLWSf9enxCVTi3NM729AnjTJ7cUHF4em2166",
  "key7": "2mgMvp1pucDYThmLsN73jsqfJchTzVgZjMRm3wgwQ3rz5ncnmNUHZT5YJeBeQRR4852mdjybxu76BBQKYRif2Uzg",
  "key8": "28dTFNk9tkarZuM8fFgz5HcVkP7bDibWEVnz5zChQyZ2ucoMkMYYdV3qG7urGCFh5dmMVBxDWfun7DbGZvA4vhKS",
  "key9": "25U2DaXo8V6hStG5JD6Sv3GXxQuGYnPBHsFuxWC1gF58Lu37JYSEZTzEwHknek4PsDwdPX5yjniMfhXV9RJvgfDL",
  "key10": "4b66bHR7TjaLCFDNhjDhYEF7DgLc67TSJ4eztxtcvL8enCn2oqVNjueDUx4Bwr4c6dv7fg5U6kC5oaKBTxWndCJH",
  "key11": "2GsunQzZ3AtVS4WC3MDPncTBNGL7zKcy81yzrGryVXgUVibFLCWcg2sLhfAA25QujvF2YZSRkU3ALiWDgGenNStJ",
  "key12": "CG4M4icwwPM6PuR2sfEgbbDcGi4bQ7ok3Jy8EFn6JVb6yPvob4AgToPUUMVeFMvbwNr4ufhbJzpUrBMcshHWkoS",
  "key13": "AbtFE1MT4E7kdyDKT3Asw5HLrdi26HwZEZAyF5MvPxTXPGA39TCxPWeZu3iSz2qCQMkfELD8fLiaCstrhcgydi8",
  "key14": "2vYwzcmnpCz55aYCFWiEBVs2PKfPkzwG3KdvnND7ewQ2G1AtibRikcrWg5eXxNk3kYH8UuTeF8mMxPJUQWfy75Uq",
  "key15": "3DBHK15KkDXuKgb4RbeZutV5PQkCCTwYueBJkdGy3CEZrsyT1JhtHRrrUR6uGUJNPH9d2ZLDUpHSpZ3CdUBZiS6V",
  "key16": "5GgtsQ9h86GLhrjmT69nhn8j5ny8QoGq8h36AWQie355LpmURBYd3y72S3gNdmCoQVMtKhiF74ZYoR8kHH3Wejpi",
  "key17": "zd6zywQjdLibJeJoK1mckaQ3Ck6cNX3RmjjdZqRa6sKYgkziZxg3rifTc8JkJVhECmbsnSmo5rubcKJtJ7jtQB3",
  "key18": "28rrvNLpoL9Uir5343YgJsC2KFNzw6YecmfyD8ftUBZKeXCinELCe478nMYsWQbmfwr6xodYSibHprMVg5LNknD4",
  "key19": "5W3iP6jzPxg3iva4ArDPT7cYngtAzZsJRw3jxaxwFDck31Uviktfqm1xaYi3dccZHC1wzVqJt959Pv8wgEeTfS3z",
  "key20": "Mh3wEFYaQiX43puPp3Khwr91DqdSxd93K8MaddbGdFSJKkmB1infwQCJE6Gtupr2NrM7uZk8VPhhcjx5HY176Rv",
  "key21": "4q9vRLBt4h8nNhJJn9uoKWiPYGfzPo4AQ9UgVuxZYANziwjjKgTdzQ5gzSFPaszDMz7oDT9iPs55QMaBKMPHxwRN",
  "key22": "3euCTwyFSbXrKXVJnhcdoZ87UEpzPQT1vCpNH9s95Sb5xVPnpTjx6rToj9Wvrg9Y1qex2noqpeytuPshKV9vZSye",
  "key23": "3LQTaC1rwpvqgGUbDsXVPYnzNN6VkPucc77wqep4aiz2PeFq1DyvqjXdGGheYvWg2QqxZQkg6QZ4CEtF8n8mJooT",
  "key24": "K9s1xv8d3BkZg4R4BHDnNoDyNDnQ4A24LBbsWHMrj3D1Ybwp3x5hC4mKVck6w4Gf6zpsQxyKdY1an1VH5h3fuzp",
  "key25": "2hPi877uEor1GZysQvAhsBmYkVP7w3tJzmMNvhwrUdcajTdbezrbTmYBXm5cRK4EZHh3WwToaQQNmtomFSz2nDYg",
  "key26": "ALrnYB7L6x67qwcGDzej7ZxnjdnZb2JjLqRoiPwDownLch5eCUXxqvex37yiDANboL4f94uA3PRwgd2eNdpo31C",
  "key27": "3QUrU9DfVAiCbC1tVnF8EDrZZXKE8Su8BQzCvdTnVQfnxp9SckQEWX2zzphtuCwxkJMqiaULCQvs5Cm1mFNjEjCf",
  "key28": "2999TTjzHppsq7DdACPg2xywiQw5jVne18eZ7e8MxcUhmCSNjSs9BgdWVpfuAXpQvWUrhQ5FQ8AbQF4z8fTwx4Pk",
  "key29": "4Lq3krw1iMcP8UkMvVdQNrh8cYuTNwy5qkBua493zxN7znERo186q3K4L9iKAsVuxWEgRXw8oKwwEavtXWFasek5",
  "key30": "3eQFDxZattehVWbzxYBQE6mmjz2at4cWtMojTp4kNyQRu6jFmpsrrY1BKvBVXzoMwu1vmAki9W8zi7j4bygGLX1E",
  "key31": "4XEMbgMtxj8xn8qqA2s2c59YG17x6JE5aRMEbrM1ej4YQgYX2B7VfpTJEy2JK9TLwrev53ewY3HjRueoeGPVT4FZ",
  "key32": "4yQcAqdnhbG4FUciYqxwYqCTLZtMPyHGkkjwqMeicZo63jCmxuhtnbWEtJLqCqu6FTnwbZCVc1SNmKJYs4x5xq2e"
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
