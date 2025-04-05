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
    "jiEXyd7BuVxHzfCRXG5T7VjZuJA9hVFUyn5orA1tw9Vy9eHLVQEVAwruwPzHX5yd4wZRremaTJLFYZeu3Kt5Qe3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDoo44FQC65nUDVbXMhPYoffPzapadYgiYwZJGATzU1hXkFf33438hZcBXyAUXfPpiFWzB4e2epqPpL4GabbCmQ",
  "key1": "4L5rpDXwHkZJEdtduStXAiRF6zkQs4Ft9VTaLufdq1SkPPUdJTdGKkmDpEfKqPe7QPD5eoUpmjhV8NJoBGXa8Q9H",
  "key2": "2V92esBYJgz9m3VCk6e9XvPvLw7S2qWFgcQQgoTiSanbxwsUgf8PFXty7dy3YUzErGCmiZWv3WvSAFdGGBjUJ11H",
  "key3": "3ciGw4ZwazhMEebGyTkg2xiuGo2tRbpM6CDZbXfxoRT3t3bkZaJfaGuoFejT7iqH6R9yEQukGz5UHaw7xPe4zA36",
  "key4": "FEMV7hdAuHULLxVgGMwUhVkeJLDcqA4FiQTu2N2wNgxF95UYv8DusFZB526v5JTan8jeNdcCJ4iCyZ85FMeZ3NT",
  "key5": "PuRDviwG76PWWhR8JHz1zpDY6JYXDA4f5qmbHo94N4jkc7651Zpq6MrzKWNwfdZmBR3QcgA9CyxaprrhugJ4bSf",
  "key6": "2NxBffsNsaAxCVSAcubLdEYHgjUDwDovZAV7dxK4sWXzejUtqk6XSN4dfgFYAC7gptm2PxBYzRjVWoAsvMTfwCmq",
  "key7": "2rDgfcUm2LjAXWVwbe4PbVxuES7VmdzBQxPBrFAZntSFoqN1n3v2pFiCY4oMjCPPPzhNcVXWc1kXzckv2QDptRd8",
  "key8": "xPUx4cdky3C9sZi38c13aU9DKuLaiKNJtQXXJLed3V37UGf68TYZAmjFiubBv7B8ZxjGi2XLBY6bEk9AYv8V55j",
  "key9": "H4RSf9xB5qUP6Y4F8ihiVg1BMDsLDiMVv4pvtGwiaG4U3E9gPUxBYSyjySFJTxkzqF5JEjS9CdRTBFpYpaEpdCY",
  "key10": "WnTNavekQu4kKx17dniJtXwExm7tMaaYnEt8SxzzPvUzc92SX1JFsVdUBvzt1UaZLRr85tpjTTZZNN7UuFnAxF5",
  "key11": "5kq3ZSebr15ixQe5Y8Pb9qKowHY3C2Cs4sRYmCss32VVUYKcWJymmngycvZnEuAB6tSqFsCz44qP54R1u2PJUd8Q",
  "key12": "2Y44yiAyCH2DmxzxD1XraVPKfHMMs73S3aczZiJ8DnBznrSLqd4C77pXchjEkk12Ac67kWfiymrrVQHd7j9TJjkH",
  "key13": "2ST9H26XxwG7jsud12CuQNiws4w8PgCvaw3Cb4mVQWhZzPYhKiQeRMujM2CruHXVWweisq9HqbZBiMJ5omKayTx6",
  "key14": "32rpxYapafWipWmS659Vr5gDPHtny6t5gfqr2DKiisYYjLfnaqvqW94q3Jeyez4d7MxSPGYQGfAfQuDtuF7hcWyD",
  "key15": "4abdDva33xp2B1EjKaXLsYmRwvjWRTy17UTHQGdN5aeJ6vvWNbg7PTMh6cukxUrJpDEYL7rV3ZYxmsw7nFu1v4ya",
  "key16": "5ZS6FGZHDwYCw9434EQaeQYeNuUJZfBfoiuJLfWjNiC5UeYNDSKm5dtJfybVP9uMw8k3Yq28XAJEy7EQ1YCp3Jed",
  "key17": "4ryR1N2n3a74ZdUGXapLzTePY73FKrHyPtLGttEyHkRTEsfcZoJSho2wGx3USPhnoHXgr9NPedxk1EDzB6tCRAKj",
  "key18": "49Y3KeDsRTbkTDxxj8hUyyfPBibWH1gVLbu8zBANheAf9ryijCYevXjBf6KGia1v3ex23RQB6RmFTMhJwcKatTjy",
  "key19": "4PjVGPf47EPLxiyWYbDrBfXVhy6sJydPVLgNBics6teibHgMXZUnJTT3YXo8YCQJuX6gPkst7N2z3C99BuCXxpBV",
  "key20": "TEVFtCav5RFWF9W1QAokYWYqz2zo8496stnA14KkLoA7vprc9KS95SfyRnGboiaJBeQXpw5r4cy6VbiHuCdUSpw",
  "key21": "3mbyXj1pJDu9JQA6a57RgkrKGBGGLJW4JrZHSV3AnZcQ6p6cmtnbwq5sxYjmHbT7UcC66FyuKhR3Tu84Tiwoa1z8",
  "key22": "5AsZwVhDayqVcSWPPKi6ubxch3WEnPqZHG1RuwspD2U1mspUhpyvvwscrYRAb2tZDvZGPwQTxQSbF8xjKNn7wSw7",
  "key23": "5YDZCHm3AUfnTJdD9JprQX8ALbXxJKZNk6SA5RNBu1ynQ7pY6TdWuefiGMVxiivN8jfT86cZ265W9JKRtTiShTcq",
  "key24": "5R56iFdYBZTdSRS6TiCxDtzqy3PGooW4SRW2kSHwEc18UzFpDJgD2Rzuiz9mhahRTK6rctdu1Qq8iUb6ZdX1MyU9",
  "key25": "23ooun9adZAgzUjtNn8uxXjpe8NAuksv9EUfrSYGbVA7aFGjALTzQJnUPyYLQQx96Dh7U8k5jys6W5bqyyhveu9U",
  "key26": "8LWc5ueDuHcMnC73EuR4pMo4FY1kyhFdTB3npfXmTLn1mmNskKeuf4NqG8aTjN9FFUmj3FJpn2y64qansd785dm",
  "key27": "2nS1Nzo6sy7x6V9AMUN8hCYjA5KeNeA3AvmdWnSadTDB8fwbLxdPXbbqwAkPeH6oiEfrgKU8NpKYefeaTo7HNt24",
  "key28": "CzdszrvnzL5KvGrynwMgPzuh5CqbjvD1tfFoJAvS1zJiGrPCKDpRec7C5LPuVxDL4qBHShsRaow9eFrjuPb6AAs",
  "key29": "478CNFLbBEoQ8gZntK1tSiG4Nar8jffq8rncBRhLHUWiYxC2RQQKTEeQ6QSLS4XuVe33c9x6tyr59d3PK3z616di",
  "key30": "5xBEMS59wN9uKicZc1wJEeZfs1ouA4cDoXX8WDD8jt8wgTKFkb2o7NhNSDdmPfZLjV6AomT582dxoBDeDboMy3Yg",
  "key31": "56eztq3joC9o5ZcxKAvhXgwbPq8Ec4U3WeKEVEHKPTrWjN8gtmZniMACfgFZADrCvzbY6MGAbtpaESeeTXD6pV2Z",
  "key32": "3QSB6YKEGTXCjEss4KL3hagWXqwdRQro4f1oyeCJjNMkARjBgjiCTFoP2HC52U7xsxdiSQEkAqFNA2UMNAoNMXys",
  "key33": "5nbLJ6oPgbDsVacbCGnrDdMQNEgouhJNh4MBUXBb124LiPdmGbNcsq3Jr8nCEWh1zxNfXkWWfw9mGSmEZvqm6mHz",
  "key34": "4iix7a7qoMxbCzaxtTNk4GMmHGEZXv34jVsWJCUagPZX1b7Q1AmGfM49rzwkPW8w2BtCc6dZQUPrUMPjm8gijkuw",
  "key35": "2AWaEfoq8EF6RgYrDQZnwbdfS7ayiYjorPkMMEUN7KFiZah6asNt72yEcZjKwUA2xWUcyGe2XLJj2tTGE8Gzz4R9",
  "key36": "35USzLqiSuB13wm3MdcA7cWXz9Tam6aqxrzXF7hwpdhQNc2pkueVSEZYKHyQYQUTLTPJCVsPsi8epzffqcvkfSSj",
  "key37": "3fsdf9ASR7ftYRBTFAQKFHVCWNQzgN5b69E2zGiPFuRPp6A3MCk4xppLSbbHU1eCn1agTaNDkJKo5R7eFWRnBED1",
  "key38": "41THrFJnfQAVQPk6pw3yemYcgHyvWshLS5kH2oAV4QpnoLyLzJXMVgxkGMQfGfNwF1NpJZk6rhJpxu9MKXCu8wD6",
  "key39": "4sL1819fzyb7RDtFQU8PFgYDspvXsEPyh8xEdeqAkWuSs2jDvd2agakFDQL1wJH4qQhvQAKQULXk4tRR7CPiQdfn"
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
