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
    "khuR5KAfu6dqbxQeUMuKRFmSVf6XE3kLt7utduxsBEZkZiQqUQNsbjM7W9Ek7Y2xj9xuV2ccUygA5BB8wuxsg8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vs112gWoxA3tni3HXT5cRxd7HKyfZGRx7JFUq3HNhhg2UkRduCX2MMqkrujaMcjmXecmnaLT9iweNMt3L2iMqEL",
  "key1": "5smDSXYEuhumn236GQM4eQBVwXoMsbPgAyu8ro9UfM6yyeUv5bDVd5pmdFysBGc13mmdu2s9mxmkyrguADf1FZE3",
  "key2": "2A56jWr7fAPH2TPqR94hwe4APVtH7FnbokZK2RWapYoLbvkAvEhS4SdCseE1WNKLoTXc4Eq84baHVxvMBGxTSRVg",
  "key3": "1SRrdFL7pXiwNE6w8zSsjo2X8ZrLjFVHpUt9upb3rRDUop7H7tYFqNYzDUJ16dAb5eGJzdMihxMYAyFfNrCTwrV",
  "key4": "5rAJjT3mdHY7QT5zb4eVNDtGLYLPnzrK4LCHXyKDuVJefa3kn7oSJJduCjzu9PHF3rzUKYUWTs8N23fdidmLc4n2",
  "key5": "3E5UPwnG3BhTxYtGyqBg26QfeCH52Uhd791wND4tms3SNuNmcNpswS13iA5PqWuiSHsEVBkBKkt6pAdKfqfojcKo",
  "key6": "3TeuMCopTCXcH4LYFjn4URKLkYS4gBz4U4dsph3vsZkna1FExz2KnWfSfgpf4Bxy9dYaAeLUSBKYij2gGXGxkKy1",
  "key7": "2svWMo5VDKHU8ZwKu967H8atjg1JMiQDSnEe9LXAVdE59qkhGqHi1k1iZSDLNXyjw6Ytm27EkbcHECe4sfJ3zL86",
  "key8": "5yL7e4YhQQxDXdUCvJgop3DuhYtvkRPM2R939sdBT4okfvRe1M1nsf5ZyEux5XvNoTHbKAfaDKBvF4JZXemtDSrd",
  "key9": "462qFwm6m17JLmq6GxawXoTzc36f8FHuWZVZo6wEKwWGGUgFdXJYb7jndx3wYMXmBbdkfwZv2f9XZxxoysKw2hHL",
  "key10": "3aiQc1v85u3Cj7iVcAXPekwJUvQLH372oFAkRLx65B3LWthirZAskWgPfbTggsG8CDZm8cC9s6eFTh8iZPxTTa48",
  "key11": "5CLL3tBSY7GUCUguqTxrRR5esw933dGJiTkbd7MQCVSJXJsqyUryG5vm8u5fYx69QW3cELGTmZnm38QgMXUShYNX",
  "key12": "4Rx5zQFcHev4UbyrouKXaTgfyk6gucpciykCLDyjGaAfm1FLnjF71XmheZL1BHVAcJhygMtgAgWJHbj34mdb1HQR",
  "key13": "GDWoZtzPsneY3AMGzgsUNwT9tdcp26fbqYnDMj1qeeFG3n1hohwpnMAYZenNdxa2Wns8rwSkHYs4ZNS9zZs5A8u",
  "key14": "2LxLVFnkECq7nbiUprkywmWeSLxSHUaxh34D8AhH56Y9StEbu7NcQGHvB5eAVaM1ucpxxE99jRcbSsrZRBEM5Yx",
  "key15": "2FnJeZpq6x5kC6Mz4DyygaJdpbfF5yK1MXDznH8xrgZBsAo38VotFZgiLHDGQsYCHFarAhecqzHzpLNpAzdE1JLC",
  "key16": "61JTc6dAgA3vC9fr2exfi5GKbVHJizkNncsF8nbVy5C9WQ89fZaLyKecgLoeb4RYLifsWecpboMV7HYnm1nJfRKo",
  "key17": "4vGEfW3NjJ5WqxHVbpxxsS7F8R1gcYeP1zmqS8tC2Pw6kYEGsQ8Y9LkzRFgaFYiYZBPuffC4Aghv2JwpF9GuoWgj",
  "key18": "4Bin3NyD4ivk9A2G6YFdMKmfLMffNH9BnxSty1vcNFVgM69uxX9BnoEEguT9k8yuYEsmnM7fbhk3CxGeR6aK3scd",
  "key19": "Nxxp5qE45twzU8CFNasmoLHjcHfVf6sgM1Zn6e8SxPoDuvtwM5vKcSAgGkZdroyMbzNrL43bMDpbjwuttnUcDVV",
  "key20": "5m7nqTnFkandpcEPNLf7nNNfQ1g5zeLp7FyG3CU14hSBVNYMgw88oVQGm6fQAyUNsKrrGpF1q5qYkd3bxN5St9NA",
  "key21": "2tyuyV3S9Y4WLPKTGimzxuz4HjjrRoGc7mTuyyMMpktCtwdnDHed1AcdC32oULcVvbps2DnPd8bD1xd7MJyzidNb",
  "key22": "4mWw6d5cyLxW4RnWR4YUTLtcpUhLirMNqUZ9dPgL2ugjHvERdZPjCFMxmYDoBp5zstYn3nET5HRznM7Dk8McsTEq",
  "key23": "vWPbUf3BDxwrk7p9Yeq3JNq5y3irE2ZdyLY12ceJqLXpbUZHQbHvFRbHQ51o2AqUG1V5yanstFDDg6xQCJCCfgF",
  "key24": "45RgsMTSih1wDAwKxvNWJsQhcmNuVb519cPdwKhwm5RkKQnPPvJKnCBYbjvvSHPFYyBDKNABRvVgo4a5cGuwhAs",
  "key25": "2dsnDc8zy5hqRu1CjzhXHkXgPHsxiejQKRjfmL5T7Vz7MFfxTKw1sEwqkEos7ocBq86UeQFtwyJFQDbfFEteuLzL",
  "key26": "3XcXYFKFw8JtU7xvubNx4Qbj2R6hFFFfzACZWfJb99EfPttmdcHawcWj3wFJVuSXhZ9C3f4sf7B8H2Nt5tzf49Ki",
  "key27": "5mKbqKX7pBNWcA7wE5n3kUktvc8gkEwp7TAQukYZCWsoGzJfKuoEu93mt6NMMQEVsDquCgu4ViAyLz3D6QwnDMjE",
  "key28": "5fyDuurwLPYdZ9haNWzmYPSgH8VV7vpCH1g6TGLcGXGMaAhAko2caEUQv4UKdpVTWHyYnsga6tRjNoTLceK28Mm",
  "key29": "5y1NXMkVU8crMycre45zUP8JWMcjwPxTVZs3Tf8ccEFcvqhafaMugWChWxJQfXGHsr2KfrGd8zBvv3mWubEmQkUY",
  "key30": "oFoZNpcuKLhZLtBEUgN6w1pZuy1DZPitFWyoK4V6vamVoUBauMcqxNSKZwJ1m1hntYE6ctqtygr5LqVv1RTp6ps",
  "key31": "5BHvAJCQEYqjzjZD2vz61V9d6w9NmJ3s5JPZKhCNAH33DrYK5p3TYUPKzFNdAJfq1Z4nbgtQUsuwxbS6Xp3X4rwv",
  "key32": "4TJtWSpLN5M9Mn6USk6gNotyThsjid4qsqSg1YFeo35h1DrjgbKMAo58oEDeeMaMXCDWQwMDHhUSCuz1DH5vcQBc"
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
