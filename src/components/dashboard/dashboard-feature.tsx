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
    "5F6oTyDdaqkTP5fHsfzv3rMkGaBqcpc8h8BHSutByczQk3dU4DZyBL3AUZLuTYzAQYVSt8R7fmWnBN5CNnYYxTaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uixMpsyfHWuLgyoCWtLXZXRyMWKqn97NdyJEJgEccpGgxHPQAkD7RjcsYMpQbUuWgwQE55SrUX7nehcgQDZqTxv",
  "key1": "1Ca2rgP3nZxQbEPzj2cYF2DemVVPqWn8V5zZjUVECHv3UwZHPeewFH4asXDX5C2dJb7hackZytkJFCbGXgY7kSx",
  "key2": "3Sc29WWDwKqyBYpcYS5NsFEDBiABLMHBTfxR9ExCfz9wQgJjt14FpurAK6pJUBDYSd1iqmKRBbXnBuw5e2eXgVos",
  "key3": "3XMcZdrGDP1ktX1kYo4VVCnGVvqZ2DDgiKFeFRwDRuByaMzUAEAzCDyNiMMZeeHNAXuN9iJAsN4cPSfyFKxuh8gF",
  "key4": "wto6K76C2WapKUBavJnmHk5Scz71X1ETNjcSh1eotQcHPScvs2bfo3U6hfL6tjfj5gRjjTjt9p6Dw35EaUUY34t",
  "key5": "2cghnNoxtkMq9uiX4QmDQjfyosKbb1iwpQzw8S1c5nFFCjmY4CGThHSw8wyN4E21mt3bRSQ7BVryEHxUkZEXR6mQ",
  "key6": "2T1s6kBMy6sHMpYjKN5qE7FTV2KioBFVHEV5QxzWB7RGqRsw9aJjb3GRUrprKEP8VCDk5FVbAL1au2KzBpLeaF2G",
  "key7": "ZXt912VDhBjF2omoL5cPTgvgqg857YNSZLhJmU62NsA1JgBpnKEPbYzwmQ4fTexEhN6jaw6cPwdyKPFUSoHwzDu",
  "key8": "2srQyvmMDhSXytjyUhJZkKumQvdrDCgijFCDWFhK4byriFphpzm3iMez3Ldvb9AqQa3UuPNwnFfaihjUQo7hGy1S",
  "key9": "1ktte2Bfm7vfNzFfyyy67nfqHzNHjhQNBc9CRFiFUmE5ysxYsXW3JMhjKqEuvco8yUMQSqVGZtsDWfqLWpyZ47Z",
  "key10": "2TZyrKRYgN4Dz9hwXZrrorMoabrY47Brdd2nK2aa1g4XsuSghsNrKtA2xGpKY8s6Jo5XMZXNA96WGR3aVYUxEqFz",
  "key11": "63TN9pkx4f3pqwuBU9RYhR91RTFeQwyZorRFyT6Bbfejwdbao57VkTkvEt3458vm6YHsruMVDX4mGFt2V3CXP5mR",
  "key12": "26Djyg1F3vqE67gsaRFb49ugx8v2h8r928oKfk4YaXFsk6UXN7FUr1P2eofMUN3w4V8cLfFCoSBHyC3Fn6m4HZQ8",
  "key13": "2uKRGpgh9TKXLovsLpP6i4fPdXgEB2rRfZ2SjgkC9x3CS5n8RwRegVx3QqHtSkcBSCY9b7YURjE2jdBU8GNs2CHH",
  "key14": "41gNhfCZTKWA7MzvtzyE7yHmVXKjpYFPUfUpC97WMbEyQP3WChA5QMuEYn5r7zccq9ZpXAY8APbc6FgsrvLrMZeS",
  "key15": "4MyAoi9uuThihxv1B2G8JbAdMXqZup7QkKPDKBt1WnyE6Qam2x5b9vgv3KGXUgFYvkEesZhnL6gQn82oPgzpVrBy",
  "key16": "4q4nQYbE6rKTFrKeFbo4FRoGrh5eAXdTFf3PuGtzoWoWmLT43MnMa8XoCdj5rV9xKg9ew2JHJxmepETrSXqyNK59",
  "key17": "4PATxSN2F3xDrN9YUrecXjEUFdMd56ahi6jfsMDiKcM1joS4hhxCeoW1oGhq21QNb8F8CNvwhRJNcZsmcaBGn4Hj",
  "key18": "5rXMo6DsYMqCyvwByH8eG58vfWJJtQZAnZxdkF4XeVJm8k9XjRqdt9E4ifyRsmxmcHBV5A97orDGScrfK8gC9buN",
  "key19": "5pohPKADRj3MaPuNBe3GoFhwUBn153YzHp672uSzaTnbsZGV3dVhCrqVihULJJFN7EGguQSs3PxBihYTGiV6CEqQ",
  "key20": "3dnQKZi8uV3aKa8xs8Qq5xScR7naVnuQR14JS1dvK3hq2YpBeoX9ToChtP3c8NXxi3me726ry6vQ27RJTeC9MzD7",
  "key21": "4pnZsEAwQucMKgA5G4hhNnZNZjYGaaunHq6jHzDj8SBzQNDJp8aD5C6Syw3TecDytgu916W3zBpUkmFu7pZAtkqK",
  "key22": "2VYD9wVNAmYnhCfxhzZFtMThaL36h8bZsowGwjWmBeRNRqUw7ntGYuKwB2FVyNSA5uzSkyNQ9PLGmGoweY1YmmDp",
  "key23": "52dLnKzttWE3WvSKJsQKUaaHo7XRvvtSbT76de8kzNqsDcwXDNibBHpW4aHEHLSJSPFznZMgzAsvLsJ8MYupNr4V",
  "key24": "5ucBkvYFyAtb82fDP6TQWVq1HEzd8bECq7PXB5fFdkHR2hS9KZeHhfkYUFZa9xFxQEiqA7deEoo2qC1BP6sa7owM",
  "key25": "5hPJAm21CryZrh6FyZzeUVDMJP6U3EzERivwbYiUc3SuSx1zYfQzzeC5GWhP9kkSdJwvfxRLkJY43zBaSSFT2BYn",
  "key26": "8A1eih6XVZADPFC5waqvDcALX4WmG5QqoajoCAgA5Yqg5wzc7NShGUY7tgCwdTMa7r5tM4HXu4Zi8KpCiFxGYh3",
  "key27": "4B7a5Q3wsFaN19pVtmbwS5udio1BospME226HFXbNEqiGqeZKbuewRYajHvezaLdTi2msYTRXhmJqN24nFMfN5tw",
  "key28": "A5bDSbYRceRQNrGKKR7MJMLSRaNCYgGsTTj1GmBZ1eHm13dhZuF2v9ntR3wnP61V9SihM5nBx6h3qMZehQfTRg7",
  "key29": "bL6Nq4ZgaCSWV2LKoao6ysWm37jWHrbmEbH3jt6ZM33Y8rNwKqHRKmtGg2VufbbJUchTpWyNwb55ZczP7iDCNZA",
  "key30": "5HMNXdKayEUrMkLtgzZXY69vQwbKLH6SEhpt6ssq7UvP4MiAL5jjnhjvR9rtSP1y4vZaGY6Xp6ZVyvPmeZ2mrgGs",
  "key31": "45nrikSfAQwdaJkU5VA3GBC1pJ5ARmwfhzaRd1W67Np4dCm98oQTzkx5fysKRHb1Qp8P2NhiAuqCqxfkbYTSrQho",
  "key32": "2Z9nogtrqWAJPTBdSdDWymqUaUGcLu6j9BVBX5A5kGPYc1j4eNWp7QYwxtv4oAAapH5qdWEkbtYjse78XYCX9fei",
  "key33": "65kmPnYCHEUsEms3gQfs6j19KGS3aaWHYPhMqsUeU7BPrAjRoHu3mFcajBtRYbMnQRKub6uaS62GZGssdFza5YjR",
  "key34": "4CxgUtTW7jN7g27nNzVRUsnd13TJyTtdW64pLrcAW77UptKYiD4vvKv5FEUTxd1MRjhKaq3JgaqiQMqwmqc71YG7",
  "key35": "zcGn3E7vcE3hdxEYFvt7fRwzktB1SjgknxH194aBTGaP2xzyJ9aQHFxJezqxv7X8Vt71FQ7uriro5Sg61i7JaSU",
  "key36": "2mqfQvMMtSPcAEX5uRCs5u2s2N3xQ7PsrM7KG1h3NyLxh2NmQVzfyTtsPD6SgbQaHxkcBpo1SiKhpqxwBsDczGQL"
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
