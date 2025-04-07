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
    "5zasYKSz6QkFd4myqJpj8oNv2DwEt5sZvccEVvZ9dFzdgYwxostNtiBwrjW9AZdqsH3RzmT5egyr7aKNX6ANsLV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TGzPaccKWnFW5Wyw6k83osWVq5vQBXySDX2EzFdUvGG3Nu8t2Sk4yCDCPTPj4kWAQvG337k3eodipoxUwVr1KHY",
  "key1": "4mQUA1QBZbMfSAL5Ecgt854Cyxbos6bBQjDRGNrfG6qxwWesMWsfZJT5amLP3UGqw1xqa18F2mXPE6G9d3xwnH7B",
  "key2": "2TSS2ASLekXMdkPtdonuP7VoyVFwFExWXorRNwy66rawQE4qRBg5S412DnMsDcNxbVufQRNtt8SpzEPuCVLnTqqV",
  "key3": "LxWE6P6t2YjaeADH1Tc6XsPx9tTieH18zjUnvQEeiapJh5rXXBsoZMWUaHvXfQupudW3yMDGcCzjbwcJ7c9UFfp",
  "key4": "3DHA1Z6FnadwC4aZ6CmciYR6zW26nWeAUtQyPrMEeozLm9HVMD37DWHMfhjwYTAHbuHFXUGS8Pb9Pob4T8oyw5uA",
  "key5": "49g3U5BcQz54m1pRcuKGqxPAGdQNJV7JwEMofr85ufNhTQCRKd2xazfM6sN4FjnWJwJzo1xvhSFcRsA1AEeasudz",
  "key6": "fvCLFkKyLJJR2wReDbwzJe1kf86S6pckQxPGyXkLw5JXbfkT1rTWjEfQgHYixyqk51vCXp6oFRadWHzVenYafLj",
  "key7": "KczFXniwJu1febWi7HjHgXCTGj33CNpvAtJTTzgYppYgmCwP6vCtxzNx5NHV2DqSXH542AD8FRGawUC2S7BDXDv",
  "key8": "3iXYmxGDD8PwBkFEtzXYDUCuoYoNeuUn6XetnnynHSQpzt6y7Dd8amAHeX89phuTvP7aFKpZXzoiGnziWh3FsNnM",
  "key9": "SsVTDRoqwU61Ca68bYwinku8YaLFEakRh6AH9DpTS44ghW9VwdRiNnJStsW3vMNJM3iGszuNVfzRMU72kBHGJxJ",
  "key10": "54hDKJpapULpoXLiQNJWMbXzd1AsDfvhhb5U8gNf7hr1hWxrAHhMKSxC8CaBdXKn9w4D2y6iZUZP6jyhMQzig7Vj",
  "key11": "26kXnjSjx1oy3h7X8f5AmKrAmsxeRyAcZNZyaozhC1ptPgfA6zbqABLVU1WaxH7Hq2vvGwdrjFXig5eB3mKFdana",
  "key12": "4EZRYvkTX4MiPg77fZtY9iX7zLYUQw62f4jVakC3rffVD6EfrkcYRSiRafPsATY6e86ChS4ageDbG6zmCQ5fL3mc",
  "key13": "31mdk27AEJvkEteWwgxnKiHLNj12Cm1SRiJgFyknPZS5Z5jDUs9X93yPGMHpVvEWPNapN88Nd5EPLtik2H7Dn7P6",
  "key14": "5GmtyvC4fna8fsGryhjMkqJa277BzLiw1rHeJEFmdW5H8TNbsQCFf3LX1t1wXos1CuJDLe1ArsY4yBTTq5PAFYHW",
  "key15": "XDfJLLLkiHtz16F6HU6YMXG1TGCAocmfsnEgWQvKBfum5mcuMhbtaVSzHj2x1JWvkmE4b5mHwmMx44KC8NbWkLz",
  "key16": "2Urx6TuLz2Ugf9QrQRByJUYoDZp6N3Kb4VApKaX2SxRdSxaTYWQBXpQTpQZGZDxdMxdg4NZYmaXrFv6V2knfkkRm",
  "key17": "62CYpLZmUgERWcLTUy2vpiyS6enH2cmp1AUiA39AN1Q6ZQgeiiHySMBzcymDs91wYWnvs4A84xjAHEEn6soQmQq6",
  "key18": "kNn2wBiwqSkEnTrckaAqhZXXKQZ2kN8EHxSS8RvcNpgnWFnBD8Arr5wQx32TuBZd3v3XJbTsFrXxr9BKV3rzBqj",
  "key19": "5SyzKerbyKR6svBDVKwUvRstU4D8dawshoVdzhD2pw6nVSQbQfJQR27NA7rX1K4ojeEnc4Bos2wBFciq35htrTm8",
  "key20": "9DDLVKRii7ye7LF9j5NNcfTG4nsUpL7QyGgPFJ3dC72MZYQoqPpvCH7jLF95YSahrhaPke5jTGpLFA98bHjwNRf",
  "key21": "3H21tsKLFBLsoSufyKig3a7QLLipiGpVMKwuV97rNfDp21mooQKnXcrSG5YNaYDbxzcLjtG66f9iERtimgCy5SaR",
  "key22": "3S67dWGjpxG4c5MKZgTHasUyp5o1Z6ndf4sX4fARGD61Quoarq7Vdwmykw8pk2WMF78bLSefYUW2MtS6iagXVaix",
  "key23": "Dvbvyz4PFoAMnHAwSg3r8J8PBVzKGxuT8q6wRUxWdUrjXsr1zatyhCUHgTmHD9BfNXp2jyr9hgV4sivMKVbhKUx",
  "key24": "3jo9mfHxg7bmge3b912JnR3Kky5kF9QQShcWQ5UFMaMVpqQTAZF3JH6bC3tawWLJoXQXdybkUT8KGYym1pZbChL6",
  "key25": "3dr7xZateERpRBkqAi1QsZ2W2Z1HU9UJaHfwiKqZDLzBa5W8NZCSuvrXvQGTw3jWtFxuKdNBxmSTUroYV4xkCCKj",
  "key26": "277NTCdtAZDp8M9gAM2B1MVU93JuaFUYPrERVHo1iKJ98hDeqRvqWZcQHkSvYG97CfFFSAiTHNT7Fuh7DQfraEzi",
  "key27": "5eVqc2EaMZra4pKRmmKGcqXU2ixXP65BBL6ptvbiEnMayU5VZbF8GjiKbe2aE8yfeghiPUZg9DNLxvzTJXmngJvP",
  "key28": "3zgf9kjkZg7xPcbiNHScSc6BeVjqU2jVQmq4Y9bK3NmzCMch8itetXxDo3szkeqbwjiFiZ6zvAnSzqUtiH4X4KxD",
  "key29": "3sruYaMURFrGnGet47GXkJKCxP7GHNaveMj1XzgzmjbLiHA4UfMRHU7GuiLs8gA6ihhKHUFzvktBpAbavSSSH3y9",
  "key30": "5xSwHPtSNFsvykEpRJo12ftqAC5CjS5pRxSqWnPAWT67YhXrA3mpjpwDCS2L9FvwmBUsosGN8cxsvVJHftAeZpD5",
  "key31": "4rhKQRrZCmCpBU9YcrjomutFCSsuzc2QtM3tzVfGoMvcFhePwpvhQe8XgYJm9JwVth77kpGTficbzT6b9Xxki28p",
  "key32": "5ccMoQKTtvCD39TSU53UYktcQ4JpigP2HVkRVev9EVbnMn4G9SAEDRYDs2uHYgAkg2CSWmXB913XFwT5ZmkKUj1A",
  "key33": "5LsED11chCR5WMGJ3Td8FHJfzDuqyPV64EWhAsmcazNtuzkuUjJeuhvN2DD698MFeWrsi2MQGwUhpF1eL2SR3zoj",
  "key34": "4hioJG2V1ekqBbdmUuaWexgq5m3rHkmW3bJt6rfXwRq5rTUXTfGU1gr23SDfh4JB73PjC7dAa3KPqzrTECtvKxA8",
  "key35": "51RPHLkFPG1qHoJvKihCidVibQTcpfvK2qMJzJjWEP2KGWQVg6t51kdxpAQhvoSCEkJoP2DS94vhjbrgAWQ3qw8E",
  "key36": "4SaZ3kZPb9Ug4NQNCgpwMq1jYGKCHoAgwvbCRCejoh9WcwyJfNrcmNwxPcDCMeLn1ravVtxMQ1VYtA1ZreFCtYLZ",
  "key37": "5Cj2N62aVRtfaduu1tuMiZ8UwLQEt6upNejh8qN3eQejGHXVfWkccxK4FAcW9anr9ShPzVDTXvrwgrv98FEvRqKk",
  "key38": "3PoVh7QoBFQbBAisVmmmzeQAAn9YvnbZFK5aGLSPxgBXTpR9rXr25YqZ9oDnMzSWJcCaxUCoUB6p5F9mGPB2uojk",
  "key39": "5tUC7exhhuJZ8bLHcweHr6yGdgtnr6szd32NKjA2soMt5bT3yCzUkz7RHKJN3HbKJ78T9CX6S9mPi1dZugzrQXaF",
  "key40": "3BbAGKBw6WCTmQG3HaQfQfJYSs6XDoU6LSzHgpJcdaMDRYAZXXNcAmZvetpyY1c9SKarSfVj1UpKcNHA2P9oUUF1",
  "key41": "4U9ZHjgZkYiVbupDqHqi5cBCUEjQdVDTpkB4YoZtyfHjfbBEpQ9jxQTqGWzqFutRQjz8kyz3DkhGh5SCJh8oimDH",
  "key42": "3oeneCxRuvwDXwV5cRahHSzCTA5QjgKi69gD2h5sNmNytEk4ezQKE2GrrPiEvWqbXkK7oprTzuaP8accyjrk1Ptr",
  "key43": "Fu87fGur3eFjYSeXiC7bPVNco2kYBCDw8x9EwUWfe9mFx7eZtxeBiRADcgbhaBRVzERBG2vWrehQr13Pgtbw6f9"
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
