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
    "wsdAQu1sMFFfWVTTtggj1dtSirsbj1DYXNPVoEo2VAaKaYocWAZV6Q2SDKe8szSwBTEzp1CGKT142zLcJtDw3Nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hkk6W4RnfpdJs27wNiE1SN3AtZwCohKDeqDiztjHdwAF3EcdnjHiEUCn9vGQyFTBe4YJbZGmgNq53ygVjy9AU9",
  "key1": "3JxTHpXs3yahR4t5tKpRnYiUjv4JudM7HkrDSXqGwMXnPmkPkxwgyK4FwaNLw8FmZDyKFU91VKoqcSLHYmGxPRVp",
  "key2": "4D8YBRLNnWAPcZxFjLZT24tLcrXQCxX4rsFS5X8c9LgfE8oVbrqfoBuqSxtEsYLJyxTYdc4Q3GY3hcRLXVRphgxQ",
  "key3": "45TkptSxKQdfrb2NsWhdSVhKf6AtG8mBh3QhcFG6P94AaK2t9XBM9u8C1C2FN18uUn9yqHfwiGUkw1gCqNZfXwx9",
  "key4": "4jDy5vZpk6TjPoSASgq1uKzFbGw9K5JmdiBspJiyRoMNfECSJ619jXGvVMkLRrSjF47SZ25vUyUENiDoemJEeDfG",
  "key5": "5zw9ce1CQbJ5hCp9avAvzh61qNaccoXtoiUB5W46fbfEMhC5H9Nh66wzcDDKNTixnB4HEaAARxBXDdRiU8xAy7TG",
  "key6": "3FaUNEHHQg8RjGfaEXvkaFHqK2aYBLf17rcRzpa4qMPE6A1Z6bgU9yt2bHk5FijMAQCKZzhdRXkCHqW6w9dd8sTc",
  "key7": "2V9DnqX6XSnfDvrGSkA9RsdqWBgUH7nKwVhsqgXYb9JHcqK4gVutcerZVETyEn8WDeEWptfDWXDPa6DGzo83YH6K",
  "key8": "3cQCUPuvUSj8ntNSSt1A5nzvrQh7hPpwA8UjCe28dqiecCxfdAdR6G49BL9HRGaiUZyjtvgrAyKPQby6sWCDiewD",
  "key9": "ZffprrpQaHzQZF7diyZgbwsyeshz9Vk8KZ9t4fSCmACcrv4jfHMnYwbhSyMsnod1LHuLsUe9kCkHwt5G5pncBzw",
  "key10": "4fficDscHP2gN3UvUaDmwvcVe3xGnxAa7N2F11YW7Y6eGvC6ChWk3cGt7PoDd1JpQ8VLqqEShB3oXJM7Cthuw8uh",
  "key11": "43gETUBCj9erBXuGsHPXa7NCPVfh2HaqKk16iPeVLjZLgTn4KDNRcnwdb8mKDQGP4PfV91fMbFZD4Zp7xASLZ6Rx",
  "key12": "4FW5tR8BwZigjoAEkVXQxNbVvkhTuCNUYwG9FWUFQLcXmBMXNLcwAgzp2vdaqAEHDQKm8z5G3sasPaLpBvJByaKg",
  "key13": "2osCaQjY7HKBDgdsDuJjNVhFqfvriUwYwnQ9DHMqxzyVbcyAK9ijSjm9GZc9Bsfe9DuQwfktFfkxCbGwPDwQDyGU",
  "key14": "47ohiHTnLSJjt4uoQ8Qh8MycK8JPLtJb8DYDf98eCmvRdi1JhhFtLhTdr4gcCEiwYfDiYxcsKoUQiDybCT4EBG1o",
  "key15": "47afHwN55cTyVCLDWNGaB4WKGy7BQUEGnjb1YNZ5V45XpoUJvitQGPWaU5DvxSauazBtfKnSkhhMu3CmNLmypzux",
  "key16": "DvaPhDWUh6bNR2JV412BUn5TcVFuW2edLiTLQRCePMczcj5yRL8cpCGXrgJah5pXqk3zvDvG1DhbjxhpgWZnGvF",
  "key17": "3g1Fph3t5xmE7mFXG8HsZeRRWRTeFtwo8PowAQ3Z6GGzYikyH1yxKn43pNz6zgJoHs2KX9EQS6jvPNwLsHT2Qy5H",
  "key18": "4gNZq7dRGo6BdiaJN4WvoN3yHUMEXwppdH4Yd3jiTqmYCSCoRdVX4F68Bm32swyJRWCZQaS6vRphNSu6nM9bKK31",
  "key19": "4xpMDzCwtRHXhCf9gRv5K12TVg2F3iUpMFXKLkHqhpjWwnZtY7pVeut7GQ4BP392inGr8KtvwxTYCDeAXpuyTPgy",
  "key20": "2gZFvmjndLE67iHfZPhffKYhnttHTviwcQER3WheUgmFce6geG8tzsfogt9Jay1mfTgNcc2pZkkoSkv43asYeoDZ",
  "key21": "5N2Bchj1enpuDpRffNb4DtQXJwdWeN8sgw85DaqLyC3uzy3tA8UKZNtQhbiKXLcErqHwCHCVg3pkMU5XgevhNhr3",
  "key22": "2PYkMJKU1Ebs8Gi8A9Yj8FddxVc6sZNN5CT1HkwSL1BMmaEkHGwXaMTVQp3Lz1UZybXoLEuKCneZWnCSKrHDJjbz",
  "key23": "J8UKWLaJiMk6tsv95XXUe3vFWzFRD2R3EgfPUvC7wCzLmGGsomiMyNmH2aiyC41RMS5JqNRmv4PrzS5FZwi3PkX",
  "key24": "4LASKEjzXBuTkciZH9X2iLWfKRStcWzKUkQmkT6R2UdouEZXi9GPBxtGVGQA6oQ2fecWtGiUyddzDDXdZkfXpxzr",
  "key25": "2dsPw8jJe2iYmNxC66k2PWABva5jTrUAQr5pPyeMgh1Zk5VU8Btf9uxRAW2taAnV3SG1seHzw8Krnf8cM9vg1rAB",
  "key26": "5VDWseX32QvG2hafBwojkjrh3QKMr7rcG91rM4ftwNy2xsbwipEEjSUnKNDJgAUkmhN3KrjUR68HbpJD8Cpd1FzT",
  "key27": "dQVJNWkJUKjeatbaHcLjJz7WwTUqUsDVsU8kPJRwt1dWCgUUtQTU9WMwEHRwrLQKARJ6RkSASvxcsC2E3g6JxoX",
  "key28": "65N5wPbKeTraAac6tXi8yYExrh8T86F27mJwmEu7n69vvWzDAENDBGug6yQUuMWEPHKPHJ2mCdR8ztQNupdkh2Nw",
  "key29": "GYRKgKgcd3kqTX5E5VSLyTxH7APJSLcNdDmKCD5b7iWDKq8qvyMsFGjceWszQr6WyjJarSW7foZz2qXPLiVQost",
  "key30": "72KC7fENk41DNWZVuwwqoxP16ZomM6fRLG3rALFAJ8oMoKduCoDBqqCaS8RHCxVQxBd9FCcRoxW4vnRsFHyTHcK",
  "key31": "3UdREXuJaqL8E3R3NYKjBAVE7X2qgR4jnBfLXMuZcLNab5TDtvbikBJ3DdPuQrjQaPkCb4nmBHgcHnKhBBKLuPfx",
  "key32": "67DAjzxUaSp6v5DamtyffE6kaagSqsLNdnYcNRxn21tHzRvc9stcgZhsWqGjd3cBGVqZnbzo3ggm6zVSDWZaDNZc",
  "key33": "krWCN7YraMzjPETHocj3nw67SXydZztssyDf9xMKd9dWWtx7Sr24Hcc6pp2ozQRDG9hCoC897M6mqryWoJ3VCTp",
  "key34": "21Uxj7MDAc7c6QgiJR2TsHHnZMYNsqEsX51j44AH8oG5MPfvbP3b2xWNWbcA8vtRZ5LJqZpbsw2Dt8i1FuG4RzGj",
  "key35": "218REgQJvk2rKMp3PGJEy4w7dpJeyyjMbuZjVFDeDJA3sDgHtj7dKgQZrA7tmPNdpDk4CRiL6UFcAn1VnZBdE7d5",
  "key36": "3yrshixGHqJPKnAEk8cfWqoXD2RERAQP61oiarcBDWxYF3bJ4eDqbxAQsP2WirWv78G25AiGqht2gsrypm4aZmJz",
  "key37": "34CgbJ4LJofByCPsjGB8cEuSEFq9TYLfk8epRYbSLGdwU5TRyyN2qmLU8idVFEm74GNq32QHzrs3KPhYBEDdK9eY",
  "key38": "RWtx3AFLtaURyawmqSNMANqgtTfVy2oyvuyeH8qR6r77DVgH1djGjZC7934dMnMepAYAdC17wpu5ojKGXvEy7qd",
  "key39": "5bmcfvnvrMT12SsKBMty2tFjGqbaYRGozZWtb4c2LwHti5nDeZspDecnqnX5rmAUT9J8xCCsDQnAazFb6gKuHeZm",
  "key40": "3WoPNRbbche7yuXAoYNFSJ7LoSW9KV6uWB2YqZeEKwntmYx5zRXeMVHYVsy2XioWDdKtupPi2g8w1HwAewgnG7ra",
  "key41": "2wXhEJAmmHSrQdtWSXQHqXMto7HEJy6yH9VNPZW3NU1MTstrryoL9ba7RsYvWJW8M3qfEmNQrmUAGsGXCsZw8GG3",
  "key42": "FiHv1sdf64qqepdXLWYqgYG1v3T7gdTrboodHKbHYbvx4aJ2mTyKowkn7yYE3ipHPucjzjrubvqdpry5TPhRyLp",
  "key43": "25PmSyJc2kEK83dWu8ow1VHFTE2T4xB2dM2ZhFbMbUWaneSqQZpqW9d3UQfm9wzbRnnK54Vrq3zKHgfZz9BGjL2J"
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
