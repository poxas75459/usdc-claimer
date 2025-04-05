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
    "4fFPSLLkagAcV4kjJfxXAJHtJ9Bwz7oacEHnQumkbgSj6Swnf38z6gWpwv3uFJXGpjmjF4c7t3tftxvPBe5FbHKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vcazvuGMtUbburfEvC9TgJ2eH8Jp1oK9LpdFki65GzqVBpL2gj1P3tgC5HPRPTPR2EPJdiYZVM1wSCmmYYMLeKN",
  "key1": "4cfnUaarFS51cw1ZiR8C39CstJYFpvEaDECPBe1kKkGmVKmw11MYSbaswPF6t8ri45HD1vrGMWzZgbyFLTqMpJoa",
  "key2": "41kmM4Z5edNdYGERojuwKgwQM5g3U7zLWXbByYVRD3iejEuQLavGrrSyxdFGCemQpQm94ZEnxcmFJ7AzWuKZJ9Fw",
  "key3": "3RGekjqP9TLgTCSt8ZxboXWx9tRyy28U9uWp2HVQcqUYb28QsTrF6fccN8gFnFi6UCs1cW2EXyAcX7FWY37bncg9",
  "key4": "5XYAjvD9zFtjeaAqUSKVzsZHsCLqdbePe7wQV4DrC7mobG8n9AUuDJwGDh86dMcNUTv2PSKYky34SNekp3w285E5",
  "key5": "24kp1FL7L7iQutoupQ5A7rqbKfbgawj9ViK5uVg2guf8Zw2WThy9yEdZEYv6yqBdLxRzX5CZfNUN92aPwLVai9L5",
  "key6": "3QyXgvwQuAFHGahRSaPsqcgGS4P8oY7C8ZGh2kacysYqNQ8izdoDRiYh1YeNnGtmEdVXQVRnd2uFGrYqXx4RYP22",
  "key7": "3S4T25PQDUaimo5HoN6jJiDr15dYSwNzx3d9VGJ9PyjXEjxvz8S1z8cY39ZUpwa8TSqD3QmBkfRj5uD5fxrZyNtR",
  "key8": "23MN6CtVjC34E16NmWREjTvMrn6s8RSkXB14kepjumxdnWSmdoAt5YLFVAgB8DqQApGFhaoWbjSHUg2aGt3GW6k8",
  "key9": "3WSZ7pAmCzfcNX29CTyWk4J8kjtqRBNU1Hb1x5w2RSrtXfT31o4yukYwfpRhV3TAcuWuVitJgjBoYnftwZYUGy8j",
  "key10": "2f9v7EYUiTqoWVumbfgSPoYCoGjb2cmDBMioLQLKyS4UnGUYPwjD4A3rNEMFycUSkEUrgSGNGqGYKfkgchjsgEav",
  "key11": "4zkUuHjZHbq9HYj1hBKomY4JUuo7dbzkPFLYCgvWb7yrPvX6feGVB6N8pvnGcLHco31yogJHxzbJ53ve5GpSGs4r",
  "key12": "2mk7SzZ54TdHXSTLmQ8hQRv1k4ce2JnYzm3PaY3Fy9KbM8dXXAd5T9BhqToYUMwfvY68bzDzDqciuRmgii7pm4ue",
  "key13": "56vGwGHqcbqtE4MLCAa8RmAPbd6roiS8XgZMVA3x6Y2jJQrk2DJpJWQt1dGv3qvz2nPRUN9cHNTqNTCSyMuiHZij",
  "key14": "3yUuNSkFQCKHR8YXPru9KNJdi4DY48A57MZsfymyBei9fLEB3Qs8JFZyzu12Q2pL9ZuJadmUzTKkfYoWVoHvjiSR",
  "key15": "2sobKbgDd5nkjLqTUcwksekgRciNHER7o5ugouSr6BZb3ogEz9fwhAjfmyr2v66iJLVeqPB1eXR3sq877JDny2gL",
  "key16": "2cc6u1JfZXVDActzMWnKVHyLhFCdCm9CVfbeeXSThFRyUCoXApZiuFTR4nZduJeCNedPzPWtdpFkPjuJ8u551B4P",
  "key17": "5skpDo5PWKGQ4Jj35GibNpnSsLg1nhmhqJLZB3gZpVPiim9XpirJRbpF5DCaYkvdg3MYNNWPSrCF7GYMwMzT7Zfh",
  "key18": "5rtB3ZwdZ682TWNyG11PKFDbajvvHpkNDmZpo3b7JAG5dP8FZKDWA8jjjGK6CJe8TbMA6W2dUyDcjwysqRM6eQuZ",
  "key19": "5yMA21pcQqqw9UDt3oPSvMkhU5dKQjKUyjnpcrxFzJhAzNvq7xyzKEPvmYwnwvpWDRmuRwqY34Bg6go3Q5P4oWon",
  "key20": "3N7Zq3SEGpoDwjCvZwZrByDkmjNSypZNpu4ybiFVBsmqrQy9vniE414CMcRCgwhwV8kur2SHzH3rvMiiiGX2x7Cc",
  "key21": "3KKbA1JAhP43vUZxUWMYiJshvDktJJ3Ew5BvrqAnUEP8928zGrGMEDnhQ5s9rMtKYiSY4iQhmSpT2AEUje83uajA",
  "key22": "h19Zh6rEqvWnAGWLKw9R2BHXH4BQjZRZyNP6mJgTDXnatDMkaSedReyQjYSTtrWPXhvSxPDvyHQQwaXojdGC9Xf",
  "key23": "288arLGhFgJxzsNbuf4ASwuA6cBRWvV3Cz4G2dB3hjvh6HYgiXv37mDjYUh34GCwDmCyNQrGA2dpNeUG3gtPL67Z",
  "key24": "5aLfFovx1PKDJJa4Qg4HoUiCMMVnH2gREUqFW6jBr9fVovTm1emFStdWm1qAxqWwMm2BrkE1HpStbRXmtfZLj3mc",
  "key25": "4KTHdKDDqd6PSpX8w3BbxsPAToapZkiVXqWV7eXNJ8ur6C6boVG8RumrhoRHTYNKyHKehVax7RvEYD2V33X18fmA",
  "key26": "5TVPuQDN53xPemyoZQ2SmKfXn34f4eo5GfXhZ61E2Hcmrh3h9o7NEz7faZddQMgztAGjuYCnpSq1qZhigfkeH45x",
  "key27": "kePsDc7JnFMvXFdVEepo5KxEnBU1gXch1YnAiq3ghUpNGs248Csh5Tr2xeBB1oDFsfU9Z49saQiPUmWu4aREL5j",
  "key28": "2e1s4h4ajWEJ4a2rVssob3xwyzJVBkG9NWGuRWJGG9rTtVLQ96SURUQsN6bhXXPeGxoMNgE1JLfDRkcgaRrc8uwC",
  "key29": "3mjzLYaW6ebU36bWia8vzb6Xn21ZUDkgdd9xAHkYpStay2Ag65UjjK4oqSB1PMk1EQFgEQiqwLjKrckQJkd9Bh8k",
  "key30": "KPr3tc8wEFfcQEWtcJWqUXGSPJPWQ9WrNiHiPmEE4XGHj6pLUtp1M14XSa11hzeokaSXg8RGban318hHEFnaryh",
  "key31": "48UYuHzDBpYb9uVgZEymRQQBXNcp6FFwdQ4FixkapB7WHEt8AUsmoy8TthAjbXb3mrLBY7BrET7KnHQnqR4CwARy",
  "key32": "2jR7oH85RXtC43K23JMGBZuSeebiShzccAcoVsVdCJyvhcJvJMkDGLMvoa5xsbKPcDREsQKz9iS1qRSL4gaDa2fQ",
  "key33": "3ZJhtBSP9dstjjnVLo49Y7JAuo68JcqeGJNyJixad1SjqdYHxGZs5DJbxg4WGGBw3WWFELJNM8GeAGj5T7nDcaUE",
  "key34": "3vPuJjjwtrgdrUdKvoqno98qkz3DtwANW7hiueaaVEKeBjskFRtsu7AgXfUjHp56orKDHCV5H97Rt3h489Zozrhb",
  "key35": "4z8G11pFpL6vD2Vw9bjwMQTBRvW6oe7HisS6PNWigL4kVyVEtTKdpgJqLZQbSBRfC4WM5uvMSJapnUUfRj1P33uD",
  "key36": "5y73M23o5dMkavHYZA6YMKmQxZaEfmCe7p832LyxkZqvNDsgC9fPfuWE728JvLbypxksDTWsLR2zZDWWR2m2EpRB",
  "key37": "4YEX7pG8Fa7Ynrkc62mLSpSGugsBMGrndXryUr9yszUgQ16yhzudZwZ1QacYKCgG1DxS3sMspbkMmb775xngWskt",
  "key38": "3bqvUXqf5u3QBo6KPb6KhYJdvQKhhSCvJFFaQiWsmrtrz8FyN7zn4d4hTWSdQKkC8t4ZAvPqA2bwirmz9ofMzfoK"
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
