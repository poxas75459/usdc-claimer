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
    "4dtd1yyhp11NJWFAm7N3SQCMFh3gXbWjDAuYJwA5W6Var8hYS5CjGBVxpDHmsckfbRgSK5KbdVj1HAyuAx6mdDrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fYBxgeQCx7JoZqxJ7E4mvgtbqs1N9NBT7K4LC1CGUvKuzcAWCzGAWyWY572Dirxwgdo15uAN3JssBnbTnpxoEeF",
  "key1": "2dgCUgfgz9pMmmfUY9EG5CE2aPofcep6nhAMs6PLtRyNUrtGzYG9n2YEtSZX8cYxEg66DasYP5RLkbRwDixJBRet",
  "key2": "5HwT1L8gqAqepHPCVDMdeACUGUYZKb5eRiw8BSKe71dpeASD9LEkYVpGqWNkqsvi7QQXAvcYsGmgQw8BmF2fRJbo",
  "key3": "4myDCe8vAVVSs5i8UnYcf2aP42wpf2Drmv8GHR9QdgN7NgBwawS27jBPbekupJbWMwzAsuety1wjLtUJmCwPbiF5",
  "key4": "65d1cQsghU8H2rTEJLmzTtgUpopwm6Ykn3wK2cG64SqphUx1Ex8kif4HJw1z19yMernba6bC2AykA6kTKurLmN2A",
  "key5": "4MrbiFqLqy2K4m3P2BMTyVB9UJLJia3zJDwMEt8XXTeS8FafjQkaCFHDKXYcGfoFpUfMhFCYkcRL1xVkSkGWoC4j",
  "key6": "3zykWjuBBkWkYA3FbemNzv8MBTdiUXuD9d9jLR5fvAfQGJuHZRT3QDN7Ryzs4vXNom1FQ4DpHkKLHD9f53UfjLXj",
  "key7": "2aFoTDcmh7y2oFd2t4LE2FmuUG9e8nySV7GV3AgTcJto2DYMs47SyF9AYguWdSa3dt6ZZr3Sys6dZFuEywXpDUt8",
  "key8": "5mcdFMzL8U8qrQhdQgHmLjZVKjnJGHnBnhBXBZPQd63KD9mvZbj22YqcqCKn76qbSG8hjbh2ibr7YYZBJXveqnL9",
  "key9": "62oB7DFZ4K2sAFrEpnMTFCLK3vUs5GV8cWChKCdWPxFjdJ5YVZLeM6fxCGZLPk4Le84rpUaB4iKTQGjvyMmTEKCX",
  "key10": "4pgtub1ULDLwYmKDjpoo2VHkEJvu5fQAUuuh6NzqFirT7wEer6boGcNovwMCDNfAQDE6rk69iLtuUKEMSEG7vDCz",
  "key11": "uSKJKMfnJohD1CK8nRTrAAoUZ2dkk4NoCX64R6gPNTpjYu9haetEggzyDPs69mH4kHNxHk8n617NRMsGkENzmzB",
  "key12": "4b6a63njuBgEUprL6XAPfrEUYJpC2yDFH6FhsAgt5qFLvMP9Ssz93bKpyuHR9AYxXtbTRLBbSAPiDehBhHDtqt55",
  "key13": "4Nj2jfv2LEnZR9XrrpxzTrZeqSNExeFxg6d9rfn8EcPWCrZV6beMkixFn4FsdGuVvDSKqRmuzFrsBnWiRpBeLE44",
  "key14": "QBWfexrepEdidDtZ3caBWGhB24gfEJqNR5uqjBV159XnhZhhMFPq863KZbKJbVmRLjigJb8YpH422i4SW3BMnf1",
  "key15": "5W1THADtSh13FpukvncL8yCuAoppgr954VqsV54Z2Q5CYvar1LrT5baXTDMjfGdNyvYRpdKvJmudaSprP8MX2cfb",
  "key16": "59vGSmquANLubH2wyN82bvQA2ZgL5RhBbTgHT1GgbkCw5nXVB3Jij123NXPECTvsUmYAEYj1SPPVUB9JdzaDRkqo",
  "key17": "D3KqMxtATHT1hHeUSEeqK7TZ374TAab3ecBnusfcTHUFjyT2X2jh8LADSwL14JdfPw2ZqQPDzrGZVUUXnyybSsm",
  "key18": "5tGvMoxyckTEcjkgKXtGy4HSjNX75F1rU5ZaHCQAjkwWpNQkDW1vEGddGATkJcozversbk4XY8uQWeudCr4zfgDS",
  "key19": "cKe3HsCrFuua6kf7LsEyoLqrxy1PusuRSHr4p7oCMoXBX3KxkSwphWBqJMPUwyhphXxDwcX63K6bbTVxGPJwSnG",
  "key20": "4Y4zYkN6RcWmkRgC7MyubUoY5E8Wyv1YoNfB911TDTz8ZRn5zmeYDwwyf42XeFwAwuMxdSuTxDwGXmimTVnFfLcR",
  "key21": "2ydyz9aP14Jvs8VCnQarVHdVzwqWKXBYCVzVAAwrAqirtAXYSLx2GgGm7w33tPUpbFAVcL9BMvGCpZED5rrEPhDk",
  "key22": "VDt9PZnnRfDo5mpeq5UGJT3CMeMyZXwL6ohnFKK5hQdVTnzykjrdKYuQykcSieWQojTMUJkwVvyoRhZxcWg1Mdj",
  "key23": "3GmgzsDmQzfson8ui3JnqAaJwoQX4Mw9rkpW3e7MQDDrB2wCv73iB91cKThTQqDaQSUR1wmsPZXNGqhmYVP7DUkc",
  "key24": "3PKLMFQxy8qNK9ZheGu66gtRvQZ8kWmR6N9hqVZoZof5UYNVKDEn6hXjpBJHWDYUHnCjFDYbJH57HfsyWTiEA5Ek",
  "key25": "jVrcXij35oEL1dmaQzQMxowVKJbtrMkFGK77tiSZa2J1gKjGyrFRa2cNjezCHfJpNW25shTB2BXz9Vrn1JkhfBw",
  "key26": "3rMJT8TSS7xpqLSwqmTXpJbagmg7AwjBHb8s1o1RtzTBW4TtxuaR8m8i85AqecGQjLEppyiTkqmjFqFv6KgR8vRz",
  "key27": "5ZBLaRt9xxRAbUhEAcRA3nMHXpta94ze9bftBTAfbgR9SQMG8tFQkKHK6wJkPFtJK6shUfkggGn7USyVKJ1icnpP"
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
