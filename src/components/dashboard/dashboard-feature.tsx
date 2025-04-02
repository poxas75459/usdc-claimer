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
    "2CVDCDHEj7b5EK1hNwE57rSyU2VmpGPC4nPPLAxCAbi3xi3TZCD3aYjmNQbiKmEyjZhKujKMNCytiejtR4Je3U1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhvsmefcpjjgwExFvWhHmWNLXMsv4RbdoNjgX8h385PJjd95eC3NeVbX39s1d1doGauovPYjboPxcz2xSXiBrYv",
  "key1": "56p8BnSKQnhrcDZS97u3sHtozBDtaB36ZcbCAZnyD7gAE7vGV87RnYDPuKCaoK8fW42Fzb6XqSejjYxLMVXuLy1i",
  "key2": "NqfcmqsvzFpkCwqisusFR1tZwhnDKAs9AwM8QVTqPRUqUpwWovYEGaLvhFcipu7GazvAsty2EY95jKTAeLHFjZx",
  "key3": "3R9Pmp57fgz2g2eqNhJ8jgJoW7w37y75TmfyJYsQJxyAGNVeZ9mptYmEVuXkbd6RrcF9JZEZwGQ6ff2cQRRRGcxV",
  "key4": "uZqxZ1fcYPwDVr68Bw2hqLC1MwmCvSTcaQM7pvzDP8VjtjQkkaGTaQ862q7Hc8dY3J5ZubQGBei3akG7K3a2dND",
  "key5": "3YMW4CdkcSYsBLkRTNr98poKE5ZPWTnfgjcZ74XUomrB9jomwWR2qEL74Mx8kZb3sg1hcFijzGqmMBdXuL1i9c9c",
  "key6": "2GZ3SR3gv62JeyDpm9HDmE9y3d5WUasSFKBJRU4y3dKYKrHNr9fUmChFjcyNg2JMYhmrKFBWpuMQ8UZ6K6jS3EeG",
  "key7": "5pVgWwepTov7bN5cfW7ZjAVjtwMmRCLD9PSRqFNUYPCVXpqVSswGCZtfCcBAkME1ZrnBEVRK3NJ9u7ZigVwjZYcT",
  "key8": "42PaBmw7AhYQnQRN2QG8KYpbnbm2X1vg2Wdcn27EgQ6FkzvCytNcvxLhCLaZcT44Dwcd5jPo85vCfMroqvDE2h8q",
  "key9": "2dk5Njz7qJtXSkauy6Xy3W7PxKk1JAReXdCaD5P1MaBJsQuqbD2PuLes1QTo17zeP6SSRz2uqdU6uJzF1DupghLv",
  "key10": "rKW7Gjknvkz42uCRU63BW9MjwxTkAxM1HzbtjadGHcXqomh9g8dMFZW2nspCn52J8GzHASg6nie3B8TsEZWgBDP",
  "key11": "2MsRM7fMcNqTfEpidpRq7kktt7dL2Rk3JRUde5zSLjWaC71m3Bc6ppH6f1wkEpm1YYJSyjYbJrTNsDk3wGFSHZZZ",
  "key12": "pqiryRaS5SikLH5zWbQrq1HGRQec6GpiadPG8xRXjEUDwGK3grgKGovuT1J9QAQnSc2qqrovVCaw3bcW9qx4KeB",
  "key13": "2w1VmEQeAkdakMveJ1a9vydnYD9AtK778mL8BULrL5JhNz3LqcVpWUS8pSYbUgsvLKP7nXuei8BKeB3sNFgquTQQ",
  "key14": "4iYcVN49PjcF628WA7juDYuuL8HWHoVqP6JxWCJ2fsP15e4BjeyCKe7TszxUEviXcyZhk8fkduR9pMUtrUgeeQhg",
  "key15": "4L93Qsw4HKf9Fu79J2kTkvXiYwVRvh6sUWi4QbpTNXYc7nRAQem7ErxHVLNBmK8cY8WyiwUFqHE3ctV6eZuqFYem",
  "key16": "2EUCBa9YLR95MebFBxYqPDLw11d8MdA2PrU9yLTAtXKWefgiv6ixwXfcm6yh65X6xYQowpvokKHU4STRTmvdbj5A",
  "key17": "2M9sd9XUumSoTcbmPACqtsXHPSPywiyA1zzkGhc8u6iTyhHhX7CV7n5nqnFieHWdZ4KZ5ULKYCu2mbL5QQiMwHxB",
  "key18": "32dSRCnHfaPP7NyK3d1qxtW6BcrRWTiGEdbScXUYVd4xQxViExrqmCJE2Ahzzbq5tg9cHSWpTfynbkLV8m1Yx12H",
  "key19": "4hgyk4D868XsTAf2EPPEQjbw9DzfNwcT3ZzfsCSkkJStiJ5PNcVGpVyEkY7PjVdD2NXqUBTuHeAs2ibmYB3YCyBA",
  "key20": "46uPzWSQerAshbmcc5yjvH4dkki9PNj2rCQFyaJR6JXdf9fbak66QBhdzSEEfWfsyYPdCqZjujPDcyLFNdAKYVox",
  "key21": "4xDRBW6zAjc5JQhWHtSHH9mzMSEkyRu1gJUrkPZePHtnga9B93R8gbTAHeg8sCyB7iMMf4ENxCrRtJtNQGjHEC2a",
  "key22": "5mcCECeoxXp1xe9pumh3AqNkkqZmfQEzTdkLLY2uyD7ZP8T2aVWkNQvB3CubhGGMAfxtvgHxHcencsELRLzpErd",
  "key23": "5QCzD9ZQLpoj7zjJA9xBsPaPu6UaECUEXRUpiYUts6XeWdvquemnNAqAmT37or7H3bGK28fJTd1A7kRKMccZhQ67",
  "key24": "2uRkwaiecx5i1bnfqZUdF2RSDapFoD8xgoWo1dQmkc9tqEfyQS5qfcpKUahRvLzUMxfTjXToxp6BBLPRoYaEuEbC",
  "key25": "2g9YCpDfFUmXKzeMvNoM43cj1madbLLr4LNC2GLBTzNiYjU4xHCafC5ZDUpVbgmXYKdVASVCGUPgMcuFpKsLYUL",
  "key26": "38W9XzpqzSbyfJh842gmxzFWoQqqT6XFJzdNTJjmB81d2vJMDSFStbzBvYt6kSrvf8JRovAdYpNF71n9yvsMvBFg",
  "key27": "4T1azSocwqz6BzPAVfBSWN8DDjzASMEaMvZJ5kev9YJFkKGKmT8PV6MSTp8pwp23uHjHmR2nGVhUbXX2nhua1FBL",
  "key28": "5oLWrWEVYsAiRccSZ3KNRcpayA3cyNd5Sq5vGYMGPMvkHUFqNSeNWc6BikkZjwu7YLtq1NJJunFwpyuJJFV1X7JL",
  "key29": "2fmRTMqzp4a49xMXUxuKcuN8ra6hsNBY8ELua2C1XzAYRZrCTZL1dRBaQyEHxjyXwySPGe5GxtZKn52454Uebye3",
  "key30": "4BRssrs1j7CVGwyhN9Eihy16zbUKYpAf8P4mT5LUKc7u2oEyuvpP2a5CzC5QdKZUdpXZSDyiAzhUdh5JdpiWqPV8",
  "key31": "2uERPd56pXJERkzQhS9AdB6fuEdtCzFTYsSdtE3yedqKTRpZW6WqyvULr1CLEYjoxzBf1SH9JVR3YydZoVYjs5sa",
  "key32": "4hNxzpeUuFoDJXAWA6ekTi5URBrZz8FgQt1JRSyd6Q8wXKjbeNNzk5izo1WXSjtd3ssvrdmnYWoNY4JUo3fVmrBo",
  "key33": "28bmXCu8yyH7ZnCxSBtCJNyfvdu4g5vDN9KMJsngB6HToDTTrjbQDm8tKvhKZdXCThEWEupUdRAjsxt21STVo6wC",
  "key34": "2iAdnX1hCoZgQS4Sv43FJAqWt6A5XGRXzz5Ki78xXC1mBq8kpu95yEgFRDY9TRZFvT7Du8pZJKQvj2hVAi6Tyzrv",
  "key35": "2is5VqRcHtRUWAV7hM26iE5evKpecQ9DqskZDK7jciHv4Bk9cw3jAsZpGiQ66etMCtm3UJbPrRiyaBeBYKyMuBQS"
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
