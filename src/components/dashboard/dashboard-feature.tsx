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
    "5Y6WFXp3spQvqwhCGmN4yg4PZ4uWDp6dK4WRoP949FffPdiiWt49jDfMH5rxsEqxUbAVab9TV6uyzvZbkYg4a3zP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37SU5WBXUmvLabV8Esx7H8nVhPMddSxeRo6yEmfbh6gz5aVB8CwUbW2L8v8xjrrJuTHXxvj7pim2VyWGephC6Z5U",
  "key1": "3L5CfAxhNAo556Aop3Hpy9uak9WbYgd5cFPeXd78YtRHAv8VYdUFicrxR8GF1L3uAE8VGcgMmAVDP3JSYuXw7dMH",
  "key2": "5rHGAiVCcPWuRym9x57NSyJgwB8ZVGfvEXcJFUtAEA3tfP1nXefCRhR5fJ3f8NaGfht1m8HAJiXQKfeBcZrYUdaP",
  "key3": "FSQ3BWZvJE4TefMuvCW283dWgfiZSWqga32CahW4Zrw8ncdax3wZdPApD3n1WAzNnRPUqzgKLAAaK2TimCoHTMi",
  "key4": "56CF3FGGbAhcNZq84mzMjYysQV6EYJNvX9TbqzMdZipRjEtdFicfYV789tUE7TaPsngHGFfj4iR66cgXrvxaR9fR",
  "key5": "3no149hrF3pxzuVUk9Q2WnftLJTG8QB8rCHWzYyUqpHQmtkbxUQrMgqrAa13MMc4i5d62Wj3wj5Am6dw7rYsB45u",
  "key6": "39ziyXnBx4VbM151rGH6hcDJgq2wBLrLpAu1HwR8Ltiobu86qkJcbTfL2uBf7VeZeWx9bPLzAkuT9HTJF6CengkU",
  "key7": "5hkZKNkArQrQVkJSFj1NYcab6NKiCSDzFETw3GYDsh4TyT2kcpoFmWUWM67hJR8np2dh5DYeAHQh1PkoKqDc5BNe",
  "key8": "2waJDR3Qu6hARNk6gL5eAZs7X2JUCSqFfE1cdBqqTDY6E9LYpbwBowwUkP2QV6zRS1LcbZubcrSJiSHPgbUhdT51",
  "key9": "33b5exp7RyE933Bq35BAsAa4CdgK3aYutJj1PU3SePyHiyCi8rYC3qq2f1bJLKe7pcn2UQTez6HboEPjfTyChz4W",
  "key10": "makx2zVjHX4HgjXuVVha8iTCWPhcEA56p4bQqeYFY4fk7b6BPJuQzVwzvXQGQFxXXBx1TeabkCRsFbsT9y8tyGX",
  "key11": "3pAfYHYYizQ5jjQ3vjXBe71wtu7ocggNQLtdeA1bwDtD8trjmys1jx311Gmdvdbg1scfpuSDLDkhMoDE5oXqDkhH",
  "key12": "4rtLDyGiaD9WA4xoJnj4z5ipP97NCp1fJFuKmULTE6QRi6TqbQWVkSsciZnzSm8VBEKsAPrzgyfPpTpjfrRa1w8X",
  "key13": "4kJ35zAfWRZckwd4sv4XXm1j1iMxABpUiaDm8x7VEHhdh2fqM6fvpX3dB9akJRmCqaQB4a4AnyTYPTEGv6Q8QDRW",
  "key14": "4yj89RREoqybxKpNSGNxNBmhtEbbuaC8e2duEBH5AMeC8q43obsTL8f1dXJLMJRe7mHjHnX3zhbMFgffbiDePrV9",
  "key15": "vk4NkrQypnUJkbk6eaxwNdb9LcaR3RN2aAu2nPg3RRT1cbCaAhnf22pf6fsDusD47qyZTYzhseGAEk9PQKtd9U9",
  "key16": "649qhYeGXUA48f7XYzKpdfqaDGw2X98BwEeD83u1W9JrVPDbSkApPCQyPUCiQah59Cihjoifath4j85rJY5kp2dK",
  "key17": "4C252dSk3U6X6a4jcpgu5T3LjWHDx15ffpn3nyq29e3618BfH6QrAejhyk6CsxVTr1Kr7wrPLV8dEqkRvpDMhzXz",
  "key18": "5xGXMArzREVJnVaa49WJvibzn6qu8rcYymMrm7BHfxaGKabV44v2eJrjGqi8g6AdqvLug2gzTRdRrNZMbdf3qocr",
  "key19": "4iuywMtYA6qjVHnseTWzeEFrxRDXjS1W1HP2e1EnPQpUkRoksr4naLrreoRaMFzLwHXWeWSqCAT9bKSFEQqHhqLH",
  "key20": "4dd2HPT3B2g7HF7uDqN7duoA67kQMHPjYX8c9QqyXrTeBXEwA4AnMnc2HYpeY6ekhkmkHUmDceppC8vZ2J1STrob",
  "key21": "3WFmUuGDyoy3axnqF45RAJ9SvBdPWf4qXCN3rUk6TmsAG5DFQ6PSo3WpJw2YWNw1XNGRrCBRm3pWZ6Se17fdSf3P",
  "key22": "vCqguhaPdbck48Y1ykWkjmfq1tBoZ4Ug8cZzSLn7cpgCxwvgGHghatUHpRKCDDuxbvw7Bg6KnAc4jEn9TiGNSTZ",
  "key23": "55AWGAyG4HWtaMeQTnYAwXm4jVddjKKoNyvE3rDcAM7XDoBnPHEsSa3kqYwSc2STVc6qMdPKLhWU2oAKZpPqASvb",
  "key24": "4WLKgC1z2Axf6jA53bYZFPqSm7ysTm2bsxeFW5jWikJ3qiPCnaTw48zKcwae5xQPd1YwgwaJN5rM7qJfBiSXu2Mq",
  "key25": "ceJAfQ1fTzRinGnivnLggvJ4LodmRr4N5up6h3UCbdcLQzWF1NzGFnJRbzD5T2MzcvUQg9Str2Ev5ttwxfhFNS2",
  "key26": "651GDwvGC4EjqS9vS1rGCq2Su3JaNpCcjRPnvSBXbobTcwa6m8o4vWNbwxwaeFgVqbK8MsitBUPM5DxiNRyEhixJ",
  "key27": "2x2asumtSHqKv6hW6cjvX7SzB6WaKErpKwM3xUrdVMAASV8D2Z6pFNtFNj143vc2guFFAYzD5cWSJnPggvMdp38C",
  "key28": "2TtrzoEdfuE6pLfGxts1e5rra4pvdAe2kBLL25qNkaveMasX4j5XPbT5iQB2A1fcRxEaCq8EmSxkPWL63vWFfpCc",
  "key29": "LgNmJEcrdzS2NHhNjeK8SvuzzEc17QUS4oeSW8NYXKNiMjYJdiCNDcy5NZ3Equ6CHDjfQs5KCmJ7q25LTU8mQSs",
  "key30": "2tSfDdfZG2cnkYVoxESeBwZ2BZEBGQvwZo5HqhwVx7ZdH9ZpXn2s7PyzMFhB97T1pSaFDwTJvGYYe42wrdmozZ5W",
  "key31": "4vxSSo7YTtZqs53HofBU1ujfFp33m6GSviwS7XagnhTKA4Hgjrf9c86UTRBsy7rxF4fEhZH6bGhQtnp7Fnq8pQHT",
  "key32": "5YnAn33SUjtUFjoELC9qpUKHn2qMCF27iXYDdhBuUxVkh5RFH6diFYzGgno8UxKC2GrzYmb2ioXB6zPDtmRcKec5",
  "key33": "23hqfbR89sSEZwkA2up5kAKEWXaTPfz4SyCuHtWEWVGERWGgQfFba523BhLKYcea6gHtVTXLsHC2SMvfmF3VyBCY",
  "key34": "4yFnk9L98dSQA6QoeVKyfVJ8xkwiwhTZQXqXy37FkRu9dtZ58mHwwPASVQeprqq2V43VRXmXJLZgM8kFmQVwUTn1",
  "key35": "3AayFa2UT6rBshShDR7oGzSLwU2KmZhN96ncF3uehxjBRaaE1z1PzVh9VF9463muYykY5jk1EeYd4ag1ZeMqiW8j",
  "key36": "3cNxXfb7UdqERBQr3ZdYmSo2cZv5WzjKGtBETWSwsAFa6eZ1KcDJw3HLfuAjFLgzmYu5a3ekMTQ7NazosBAVtWtu",
  "key37": "2F1BJiXpwNS7NsYkkXKhEerwWXULu9fhJZoqhDrHqisiCxJEyRM6KhYYzpfBPBtixtmasvcg1rk8vkcBm3WqBPzg",
  "key38": "GPjneDt8WNjM7e6jzjucBvmq5gMVNUB5aUoE5wx53Q6QSeQCUpjZuoPLnwt7GZyD9WWq3ctADwucnk8YgRoohcA",
  "key39": "4f8KoDRtZzXNAyZEd89hcw4sai5erj5cqtpUbTkef1CKTdm7AuUeMRYw2hAMx7vstPdFEBHZ11yRh75Kf1MBAyrq",
  "key40": "31WTLgQM3ZUVM1qRvpNRKM35BD97wdheqTMGW2njkCcSuTYqr8oBzWVtNMXDDw24QhvVtcqxq9cY2Di1rPk1kDbP",
  "key41": "2p8GoLXyYns9bkHcMva1qkptBFHHrVRAeapvPEDp43GBRCuZNFUiozwhUfEgH5mXQNX73nHrbRUiQLer9NGYzgJh",
  "key42": "5F9FenmBenrqhjTu8JD3mXLnKigEne7XkMaxs6can4GW3AHQ2pDkzKfn9C3cix4L68JmExMgrmBggKtczkgsgvwo"
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
