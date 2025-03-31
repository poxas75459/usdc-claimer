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
    "2utJfRVo3x6Uo2pFPPM5aVNYJgGtkEnu7YPtLQ5jU1g2qqLWYwHsYBbACSJRGBiE82yhVtGWieW4rBXAmJKhNo9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjY7txGxDQ2oArCmjyWCHSMrpNpEJzMWJR8ipmpEvBmcBaU8XNsx3qSGXYHJT29omgFkY7ZEh6sRhq3gpThCQWL",
  "key1": "4CjRcPQkYyDvvjuzsADHE3qChbisetPVsPvwBtF9YDG5e1PC8CgeBzCczyYstZnpC6ZhP5AP5gsi6ZPfMtfLYoUr",
  "key2": "5R4LtPu3QxhNbXga413Pawua4Fhp6C7ck9WUTGV97bXekuBZ6wtTz2oLvgqDjy48yuiv6b42kHb6DsHnqjzgmDoP",
  "key3": "kXWmsTcAE94pM8aeyJ8QGxQ9ndwXmtuNj1HBB9h2DDuqrR7GLaL4AwKUi7Vdjbs98fcvPNt2AV1mrdzxEteLev3",
  "key4": "4kgpDBJCfLRaP3Gdur56LTCcykV1igcMHzFewgjzzeGTpe93U3bc5WdTKd9zqyZT8eg7gadDUoKc7DmhKKcaXND6",
  "key5": "2eauvcQ2cXU8xcvrrEUsZvFTYL8c7hsHV1iLNzSkQh9JQy8aws3he6hcy55uTrGcTqRpP4dAsK124JohZn9KihEy",
  "key6": "2xiZ82GewcWLyzxUvD7oNXrFQZS9BtMpFY7pgrxjtEwbACQSTR1ZkuF1EfJR6FTyZ9rftr8M91gzaZg73jQFdAvU",
  "key7": "3ggpFJ5L37Rh4MPzNEXod4fV3CTCV8gKYpDNiqQTvEwFNyxJVHYJ8pZNr5YmSLDzwrJESMqLK9nYh7MBDLs8kF4U",
  "key8": "2JFcwqVjvA9GmW37HhLAvEMtDr1XikhteMHKm8LjWPtWnZfxgnaNsfEcMVkPNputRjv8U2xY2mst3hYioe2bZyMh",
  "key9": "5XnRCBjFd8ZAJBPHLRNXipNKnkkdnsNKSup6xNic4sj1joxp9SLsFFN1WqwY9yWwPweHbedbenwAapLBCjXTAXJ2",
  "key10": "f9spfP7csAtZRAEmTb5tVjrAnRzsh7S6uyUBWsiLPo3Gne9AqfXT7pt5yxbk4ZpNxebC46rZBKaebDp9efiqSMN",
  "key11": "2mHa38skvvjY8FzLaBTGodTSycriG5Ep1LsHudJe7hXVcELo7S6fBznDiT9Dma69BVT3uRitPHs9Vqdn86vqfmLC",
  "key12": "2drin4yg4YeEghcLM5z9ECBhteU49jHwJkxFfUwzT93nFfwJtakJDcRVCuMKeyUVaefVWaF9UsLwoCFzVFQiGtUo",
  "key13": "2dVNFKEZc9ydqU6Dio2D4UgSNgwjmRdHumMvdfjEGfCe7rvJGeGKTWUN7yapH75RKxmMVzcdwec2rg7JBuhaGJXA",
  "key14": "3f2gHz7hwFvZ7T2hUFdd3e1SDUqTpbyr1B6TAW3kLBLb67Kp8xJxdtDgaZMJA7QQxRgMv7UUxvVRKx1NLe3Z9ARz",
  "key15": "4c5uzaAkaGSEjXTVnXZAufSCi9UJAfiPdvGugtGHoCBct2EiwPspsqDFU97J3PS5dLkiwHbaaf9FTAhmiSFKAyaj",
  "key16": "BDZpjiREoK3nEd9bKZ5vBmifwYAnD5gckhW9emrRcLcTu4qtZJYh3oaJxAn1FKJHLJ7mc5ptA3f226d8vYhGwfZ",
  "key17": "2XB1oAQPcw82QeG7V61EEhR9339mNb4sSvVHwRDyEbCE7sUqcgKDoxRTKuFTBdGtGGoJatdefyYauNExwT3RRn5j",
  "key18": "5VyaExg6pWpCwZLNEhzUGCszL9zjv2Zm7V1QmLsPehNPGuEnurfvd6z7dkdq135eUp7tvNbndsajw1PCQaxvhHKp",
  "key19": "5jg7S2F4AoXNAvzxEQtaC6WFes3UYuHYm668Bdp3zsQRu3cTbhnuVRD49B6tduMpD2qVT4ar2vdAk7K3hXuCce6W",
  "key20": "5DHXAGvMJREJYxGm6KZtcZRbs88LQ11vcCztv6T13PWYDaUGwaKUBYiEo96E86xaF8PNU2c5agodrMppchFtAeuq",
  "key21": "215D23EyczypEJivqNUQAAH9zHteocpK1Pqpi2Ydin9y9zD2xb97gLu2UR3sYCrk8DehLrujV1GKySAx1qitwTMC",
  "key22": "5MTMBYW7EuSy1sKQrfxbnvuxZ5GysqR2EX8JbTiKgXuWHZjFpxwfekxWJbNDCTe3j51hUpR7J6ip31HLY3J5f8Pz",
  "key23": "dveojAEycnR763ccyUKCTR2vU1iintbXboWJiJ7zfqKbVsJyCTSGAgcvVrAtTPN9XZEVZWyFbGmt3hZXzjaQdVG",
  "key24": "3hFXkTJYYfa9NRx2FA3bxAEFwVXbg7pi6xwTpQmfc469ygMkFUe8xkFCmr5bFvNPz7pXUw3HuYgnTtEShtkW64z6",
  "key25": "QjwrA4VgrVUx58fAHCH3Vs8jVR9wjZAsvGmc4wDPUAd9QFmpupYihGonzr2iDZJk2yh38ZvTdUArWAEn5b9XcJR",
  "key26": "4XJsv9uXC9hbUCzA2qmsqfneJLe1s5eWboyV9x6U3b3xy7y692zkuTXvz6bYAdqr1GjWqLgt225EJCtkg88gCFX7",
  "key27": "XpDpzWyDbyiKmCgabRcq77SDbKhQm6C9ckx1KGEu2KJgisiqedjsCLVy449vmS5ddifUVF5otQFPYWRGQyKokr2",
  "key28": "26NqNp65yf3m3cyfHRCkGWDa9ZugAqfF8bgr2QzTnoVCbJB4M2PwuxpceBRu8AmuUKUfRnEyLGKnmKuU1BggMKqL",
  "key29": "6DRsTJkonP8vRqQLtrTA6dq9hmrZVyo1U6wTi8yBz1uXuRQ2vvgs2z3v4TUkBrQrSRBPPtnMCHXE71jUkftMWc9",
  "key30": "3HQbi5SBX7yZNPndnCTqua8hhp9Wzn94gAm8XMLKwEgxEq3BLypvYwgN8eF8Z9BLDsFGD6zMP5YwbHrbXAXroK8U",
  "key31": "YZ9TrC7CGZLKowgvBVcgQuE6TfETYeuv2317x6NcfRbw3PUujArdwZPRRqcr9q2XU9fthY3qx52WPkvPQdnD7gT",
  "key32": "9WeHTRSb9QNX4hTxtxAHZuQjAmo4o6qnaQyHV5Yth4iuPvY3n6NRsZz6Vfg1CKoHi57uSGLLczPJbyz9mkFwjaf",
  "key33": "5yvnF5Ni5TkbV2rdaatbwNot8ZHfHiCxcUQpCoCgd2axr2qXz9Fny7KJbwXrNsh5L9HQNfh5BC9gTtpMa2nN9v1F",
  "key34": "4APebT7hyf5wzSyMZmVFkJPNgRKuNHK2VSQu49A7mgXEBFdEkedD7cJW4EN93jNqYecp4W9H26dnut9wECG3NAD1",
  "key35": "JgJuXRuFtxQBVj1SYoNodGiHjyJs5VNd6utKP7jbm2C6WhkAbJS9eVucTyN5UwZYDj6XR7VAhshLin79hzRaaYg",
  "key36": "2MkVEBuR8thCNKmdeBAEVXHgMo4E8EXW1kxfg6CaV6zRQAEh8kB3e3UHG3nvJHxjT84AjK8NcU8vXXjuPJmGft14"
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
