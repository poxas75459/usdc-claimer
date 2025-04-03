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
    "5mt7q8KUyQ4SWW9xPCkhNKpgxzNT3esermduc57ruwb2FMQWseqjn5wDWdhryBQZgFPJp1pedQZLH9qBMMzY6gN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gagABzqBWLX8zgiYzm7Njw2aPnEF3aji4HqocZzRwrmgfttGcYZe4YmadPMHFSK2hsQZYKgdL2asZuyW8HgoJ4m",
  "key1": "62HXk5y6sGkca2CqrrPZWjgWMNtB8RZhpWnXmQRrkLypBRYuJkEZNAUs9RjFUzZJfe8Yv329VZbrJhdi1HToCGL1",
  "key2": "CZkFTKfxdvsyhXPXsmVFaxztw4nRxZX5XVWNgQZ98z4MdVkcoSwG7r6xH8bZU8MXMPDDQnoySjPWSzJ8QQBDG4G",
  "key3": "8EQnLC1YXFTYhe12dEGnXvw4K37GDteTmr7KGnHGfAcP546rcmBAe8GS7Lbamuo4Fc7LHGA62YKmnQtZpPaHbyr",
  "key4": "4Gf4SfxHZQnHGVBDewMU1aRY3Q8sm7tdp71vgNJeDEsYS8C9rbUg9WZhCygbV1oRWiXxSmkXMRXWE6vrycgtoQYn",
  "key5": "4vA75CEJcimcKzbWc1zK8ZWAdJiCcKkz1r1KtvESjyfQJVpyKKykYzN2x69B4XepXPHAEpoGFu17F1dZHosLN4wf",
  "key6": "1XpSQkj4ADQ5McgRa2tjyxAJqcay1Rfb3hrTwcyJcrbd4A39AB6WXTANvMLoL9CzDnWsvzsTp1Fikph1s8DQnHc",
  "key7": "pULKk5dQtoyhYP6wWDUQu8rweaX73Dc6q9wVvM98VTsYVbEhcmXxX7p5X4qZbS3hvn3k3SFQSPKtUprmsi9424D",
  "key8": "5xHaW5uta5etvcJK4ymdL1aGUhrqUqrTMjwENcNtczpcHPG5hAdSCJzLU8sPRZTsRutLHTSndufnQ8jgKfZ7grBK",
  "key9": "2Xhk43RfmsCkgiGohYnAQdp8isHP7Awk4jTNWJsHYer3XzsVqEepHJdQtVAiCA1bnmzmoCgRyhhFVBvDfrHdG4UY",
  "key10": "517UMjNAQSE4eUhNjQxZ2fTrgGgjpyxyKYXrieCxw84gdceYaynYyLENT25kG7w72yQUGDc3qxZM78SzkzpF53dU",
  "key11": "5Dzu7ht8V6Gh6pWbKXV5bmmyuSn7ggXcYwShdMHYCC488Rf8SYBjBznyNUFsNK564tMmU3ykswFs96Kk9e7xbA1L",
  "key12": "AeFrES4Qo4R59s3Q51Zb8QYwFPQGRK9qEB3TSm6eE3d9mdEpNw3KJbj8BViDni7Q8cyydJ6HNE2XCZebFJ9Dysh",
  "key13": "2HmeUJ99FKq4XvPbTNMdAV3eAGqQtQL1kZgpZQrr9JMNTCkfNZ7NEmYa8meADeyH1afuTpR1h6hqFiB3umLpgG1T",
  "key14": "3DTA8uawZhf6nPVEoagCGaz8zx9JUf9VUMi9D2ZTdB2BqNf4icd6toutxgEcooygMjAtrRPxMujApnV3GDtQ8cch",
  "key15": "HAniDXEsnjt5hUDKzo6SAUYoi4Y3G36MLA7ZWhsyz8JsfYkH3ZVszDGxPetdbesyqTsVwcqroMDEqtVAhNmo1by",
  "key16": "2NmSHzNpTXSXL4d4XoSDC83uBesEWCyEyps26Y8rheTGVymBBWWe6oZq2s9ErLGzDwKfxXacyBfGpbwfzXxKuZDY",
  "key17": "5JnziV8Dadg4RqrJzc1Y9FhXuJzTVifFtzHcoe6uUCYsBiiot5X9k9dZQ1EXpfJYh2RDsBsDkm8M6h8AhERW8F5s",
  "key18": "vdMFW8ZdJDVZVRXwh1siudJTvccDjGhkZjE1QYBzgjSJYsqaS3c9gXsqxBHGoTviQDs85HN3KfpDGdPj5Vvi3Qv",
  "key19": "3AgmfYRpqCVFHZ6TfmCGJD4fjhHdWvXWW827HbP5Wb4bdzAo42h2XC1UBz8Nb5CAJpQikQAu8S3sf27Fmog9R2k3",
  "key20": "3EHSw7RxQoB3KqvbT4had3RMWqF1RMqsdnZhwPJVqQJ1C3pfbZTtYfmqE4CFCgNX2QLgnw1MhueLGFs1V1b6VnuC",
  "key21": "49dzfxw2VtZjnActjfxBF4XszeeyCnWhkkRFnzAkCw6fr3V7hSrzKCSAzCdMPZNmt64dPefvtLeS7JvPVfjR8SzN",
  "key22": "62jEWwrxbHVf8d8bNgGtRZZGUoUqwUUUBZyTTfBGaKsa76MSwiyHHw5hgLpWwfHFTWmjyoVWqcJ8P5Nw9cS2gX2Y",
  "key23": "2iJxKru9pXuywfRPZp6C4ZpXTyYSDeEiLSQGiNEfJZcYUonQwTDJdvJ6hL6Y2aqHy5FRJVgxDc7Zi3hhfbnmpAGh",
  "key24": "2LN4sUVvaHgJ98BqfgT5nKPf3nvV4oYvMMRSTLh8vRgAb9guV9CKX9RKY4zNwWgiCzJdzdKrMifdJtDQQ2AjcF7a",
  "key25": "d8QriKAp569NVpyRvug9F9qQRF9eeeQR6krt4Q1jBHevDFjvx3JzhdMjKVKjrFvtT7QiRjdwUGYxg1PzLfuLjQr",
  "key26": "4a1CmD2vikxumCXxQfy6zBWCgpBpoWSiyLzo5HFrpyKoP3uwgnh3FTVgAXS6aQ7iLkmQjefrGfL53cnRxAo3g53E",
  "key27": "27EBbCpKx3Za9k4t23P6SS61xi9gJjwDxnWAvK65MttVnRE3P8UE5bDhHd68sNzc8fyfa4URPzYqS9Zj97GhJVJR",
  "key28": "AB8e28W73zQpKajRgJZ7Vf7LGDGvoQnxEPSTYiT3MzzFQc2RYC4FjrHt7NJy4SWPJaTM4YrZqBAoFHfUeq4ECN6",
  "key29": "5sJbxaoqr69WVeLEpd5ZJExP1uUGsoqkaDf5H9WwcvVEM5hXiQn9z1b6kbm6UMMqcCRqGU72vJziqXcrAQ78uNXq",
  "key30": "4HqQz4RGHThrertMmVSBPQguoowpn1Zka8Tm8LGBSonQjnYY6xDxv95dxEwyKiybKqZygGXWYXDNv4Pi6rLFi6E",
  "key31": "5D9p4p78ekp4YRMkHogF2hP2KqgpvpmjMTg4S1VEhN6Tx6Y8AL9Q7pWCWBx4UAC87BgWXQxGwh3uitNh8qqb4xok",
  "key32": "35h1MjhXc8hsoWCjFLmmTR8HTm92RYxDHoacWzRbMxu4xmPj7KtiGj7j2NvbrJym66Tsi9DxQLkettgk82CxpGfL",
  "key33": "zKrst8YVmFC5bGV2uFHvNjp6xtGFhPqCpnHGjhTuUqTm22PGPoX4AA7jPr1jK5uvK3hHn4qrBMG856R6NYw4Rr4",
  "key34": "ojAqfDpW8GEbWQtFVgYssaaSbQwkYTwmc8E9T4HjQ7ajGmP1U8rzYsWXUZwxGz4cEvGYnY8fa8uQ99Wt1Coae9X",
  "key35": "5HBwpoWGmMcfSeJvMdw3rzoZG3SMdC2tNthGjSb9WrZxY2Sq6rnCKXyMCDrCkJCXrP32X7RDZgAdXDLPcScCiCBL",
  "key36": "3Do6ZhxdoFmggviENMLcGF4if2X68VCaJZMbSFmiM9KBLfuv4UjW65Grrs99PYSakhHmrqNXwJUf4iAXF66ozwX6",
  "key37": "4JDNRcXSuwqtnX8FpH1iB64qMFLBbXMZT1YRSFV7XT3MHjn6XeBsmovpSKH8pPhM4sEWB4CB7khjxWQS9Fh1dXTf",
  "key38": "5dWuWcEFrL7q4vgXpufs7GJRJrLZdLNcteL6xX7iBUZor6NhYsZNdnFoHFRLeFuUKqodM6iBMGFZ5JEqPY6Y5qhb",
  "key39": "24HLKqSGS4cnAhcQtYETja3yho1VL6YMZhGBXPyqwNuZn41rHjhXmtBpCtHV7NfbiBrS46G4ZpQ8xStue6voEG5P",
  "key40": "2UnYSN4RSmcdBFrgkRGtxGRxuWntQ7zWGsVi3H42v7nnT6hAHxE4Zu2KqgCuEgWjhqVBo34zRnQSFaoEeV8fvxq7",
  "key41": "44FFAV8TsJt9LUoY3ig2hoC8yMAkU5khKEnuxwTQSX7njF54FdHPrAEhsQ4tVzp65jjn2XVL2gBFJkJTGLWLMNHv",
  "key42": "55LJCioUQDXRccmp7BiubGV5nQP5PiPcRieRhazzubEZHsTwuxgooZreHe9deYc6HhMDzZoRzRmKmYZhxDAMqAAf",
  "key43": "2kDkHEZUJgwM3gbn4e5Qy88SJH27wbRAMjTXCqDvBzwmjK1Q17a8KMtXrdkmTqTbBVGimuN3i15DCJJ32fRoPaYq",
  "key44": "waz2caetzsbTc2YxT8TZLM24dS4HUH7D4wY5PLEgSexNbAXnhTYSMGTXPcbrRAydJrUWhCQnPxEsPBeHi7H29LB",
  "key45": "36eEBbWCzkdoCvHDhg5T329NZdqkr5JX3dHS4fwbG6igNhZsJ9qB4UDUB9Sz3RUbc1Vc9yVyRJicP7Wb5izfke2N",
  "key46": "2yCzYZ7SaMY9Xj1C3a9Biuw9WowyaehfdfR7EB6FhJzgr1AqGCzmg9Rqz4VbeN3spmwvqrU3pgQciXgdYmAPrcQV",
  "key47": "3x5RJenD93jxaNzJ7WBP9tVLq7MJcFVkYWFrz6uzLeNY5VGLDeh4f15jLanDRkpXgN3b5prGLSE6Vn2hdAcT7Dw1",
  "key48": "J2pGo3bmG8UNAyiKCfoWeqygXbs5D4ZnRBffC8m1Kmd6JNvBwtgQcP97tsAW5yt39KzeioYHiM6y7YZigiKec17",
  "key49": "5WqtgWpsrGhRWmR3j2eGxGDv7d9fWcgBk6MrGXGXsR5HCGxmKJ4bn5KqRLRP7FsbNzHk9wufsKPHmoAwPes8FSQc"
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
