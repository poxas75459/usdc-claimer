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
    "3FZzv1tcTDMTSHMFkpY2CL4YhFDkPwkpCWE5NHVBNtwnnrtn96Xa7MihtkSx47NcvYD16uRijfLNqg3uyLH2wSG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYrQVSLCY81Li77UsJQGHMNWMH7gqmBhjUjdP2mvmLYcttDwPaL51A21g1BJKUAf9EFdZ9VSpJ3qzPGSJiy9MFQ",
  "key1": "2AASAzBa8xkY7GkuZtcPT6wVa1LmhFaucuYcjJdCCGw7cBgz3jbv18bfXAspdBZqWe3drGnjUQJ24uyvGX28qL2A",
  "key2": "2PWwbafMXdmYssEHXnDTkMX97796pbpicwpQ9uKSgJbL8jm47jAdPtazCEuux5DmH7i7qx92heqqUBNuAAkUQZJw",
  "key3": "fTBSSFaMDQjB5xZZqVw9qT9xGBqM39Bd5Y8qfLMebbdgMHPZc4ZTYTE5HSj1bSLgvojHmnuovBHaGFp1EEgqBcr",
  "key4": "4PadmnEau1PdU4Wrk1F6LzhkVaCy8fJJrsYHpzudhDG3m1fsR6uTfpNNeeo7a1exYBRNEayDD7YWBEPbm8vMgGEc",
  "key5": "4j8RMoHp4Mgk3LsbGMadRhmkKVpuVrwQM1CPfFfJ5fRjpTiQCqHheMSwmqt6TxPtn8a3KJmwM33hstxPW8uY5xCw",
  "key6": "4F63aY8yufDEJANcXYaKQGA7j8ZTvFRJ6dZwus9dd4L8d2uMw9e4SAHcMrsm4DseNpBcu9xmCyiEWQqdtvU6YpZ2",
  "key7": "2qcieYFEb5Q26DX6Lx8MA7b6hhqAe3uEhMv8PUfXw2yT51XA1PqMDRpKXu9fDwC9K1CY7VoE2bYXtsncMpac9UgX",
  "key8": "5qknFp6SAHbxznV8EDrztZymZuUayKQkXBgVyDH1k2RvowERKuKNxeLBwYZt7jFeWwWqNKLHS6MSHryrAqGdkRFe",
  "key9": "5B62C3wM64Jfq8ARQd3CmzQkjbtvhr9xjsihofyPGvTKmK5tx8aN7YS3xB9dc1qiBhXoMxuMLjdwMesiR5XuEfF6",
  "key10": "2pGYfu2ZfvE28Ee7ztMWgoBeNB46YVdYPmdzmC5cf5xqr2jD32G8PfFzzeBXQWDLFoMgjiBSvhMUxuXGWamCn3xK",
  "key11": "jyoMfuUXwKmubr1kh7Am61x5r4XcV6BCL4MwSwwHZ7YUR5snobPMrZ6XAV2r39FBmzMbCwjSmLdWyfWoTAK2T9c",
  "key12": "5QNBH5XapwCXCAhiwyqGFJWfr6oqoxnZXYHBzVup6FDxJ57S7KYT8oMo41bKv4Sq4nGmZuptCpATaqvszhHC1k2V",
  "key13": "2wM3tbBWiJHgEnkhxDQrCrvZEEFqSoEec1wrECSxxLs3SWnHKQDKqY8zsVemSa85NtCmVon41aMQwTVzbsQ8rm3L",
  "key14": "3jPbURX7XfhWi5ETHMZF5UK4Y22wSHne2ZnMSvLs5Vwn7dDnMVBKpr7tnrdhnX8Wb3UaUJrFzAiWvZbu7ekrNU4q",
  "key15": "43jD2dMwWAphLK3dHTPQmdfJio2hVxGnW5UfPxGoLNxFCpJ24unj8PSsZPi4Cf2fK7cFtdEER4aej4oSjgFtd8Dq",
  "key16": "3eDvDHSjLukFBqEYp4xQSfq3rQ9wvxsX7xp8L314TELHXU7B5w1LbRnV2HURanjRMgySqkRLYbV9ANr9yLXxjdCp",
  "key17": "mmiiTrwXRb5jm7aFCstTCm2N8s9sYKNSWPiWu49z1ibKQNycjTwjHu1xHm59fQTP2AdS5dyQ8AGdieTRJDmKsdh",
  "key18": "593k3LFrfuBbMJ38H2C53YN9qjWqTfjxL6Y716wNn1tKaMuUuqJT27hunK8ZekCyvc3MxV5ArdAmmrT5dzjcFArn",
  "key19": "4kSyD2eyyV24kYQots332LNQ1o8bq9TL4KdqxebZBpdp3bnTjVpnn5JuTHcr4kFW5WbMrTm8HkQGf5fx1uqYBuY1",
  "key20": "2z6VTHAW8SN3A2q753GYCxQWiSYSFN3196pm9BFCSVDcAhzUuCQhjvKDUB97RLeC9Kttiyy67pgWhNwhokEgamSJ",
  "key21": "2CpYLkjhPs6xawpZ4XFaSyomskEoqqR8knpakyVwoZ8xwx5WtpvW6y5kNbfKWY7qmmz3yG1YDRtnZZ12VfZByRkJ",
  "key22": "3vypu8iynHttEFAZJhFYtBWwz2dt2UzHVJPBMqHA7sj4zZDdURPs47KmTh3ZYNJ4mdHg5nJkqeupr2y6dWjPwNAQ",
  "key23": "3k9sWrLZiR5TqtpcmEAT81PQ3aU3q3cDDCeSBNEAnaQAoJpzDN5RV7Y2AkTCdnyNLJhriR3xZZfshU6Wz2ySoFSx",
  "key24": "55jnZjx7V7jK2i1yPoX5rNgKnWKDoJgtm2tZSNz7Q5LJFEYq1Bb3bmN94H8XZ7GtvpG2xYGCrtifrPDdL4RVc76j",
  "key25": "4Yce54u5Rw5LDcnw3utAkXDeyxBuHRg3eJtAeY6Z3Ua7sJsnEy3aTQ44L9it1jBPtRyEdeoKHtkNvo2PmDXaDBnL",
  "key26": "28jGBTgFoPgdbDT9iygQ4hA3STqkoBuBbh5cHepkiFap9jHAyDNE5woDYQ5pemm4jqxPf3M6Py4Zxa6NVdkXVqcf",
  "key27": "FBDq2reKMdZy9o7W9ZQfKs1Hne2VcGDXcpS8opyB7qj4osJfqoiiAZSH9uFcXEWWiTBgi3TNUMMuLZYidwDsHkr",
  "key28": "39z7Syx45obhjdSEC9FiY6a3t5tUkCvKhgbRcgQJLzoXSG8LyuAWXaW1KMYzCfcyRbAeTyDTJTCWYo8v5mH9gJQb"
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
