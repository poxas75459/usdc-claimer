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
    "3eoF4FvfhbLVFLVLPbPCMfB2gvjy15FNaoyZ1XbRijbNH5JtLHN9dpVU5NDYmMCnX9vHNF5mZZ738sVufGdPFcP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EEcWEk2FQdd1Gc2seyHdKWT4tarpJtHmW8ra4ocJVoKYHt9FRaBN6YX6zWD2sURAvgZPgUFGhARYyiXcMBWg8gj",
  "key1": "3AMTuUQyWrAAW1jw21hL7G8zvgJdMSikzqZ3Mrz7AxRBweBXduCk2BkDFvRKw9rCoewdujG9j8Ku3wab9ybikbAA",
  "key2": "2W3TQHsi663hiVKhnSj5G482Qv1bASYSbrcKmsiCAPUQobknQu5s27rJ2XUAyNaFc9jCeiWxNAqMZx6Vf1yNoV9u",
  "key3": "3kNA5LYrqfFhsmZ49DdEkSx9eSJpvPsdrv9UQYzJeXDY6TvnnrBA6CUhYxiMufgtvU6DtuLJtQNJJACoGp8qT8JB",
  "key4": "5vqY5UpdKT7n7V46TpDfftuNcaeLjUqvac6zKw9DbR3W79yDTM9uiwZyKpgbwuaE5cTB3bBw3jVboq65TpCuCTyW",
  "key5": "3bHaSWDdn5YJ1AQwiAPqScWNy5AnzXTf2HF23aJJGv3CcbgoASyvis1rX3FkXWEFpHhvJi6zCsJ5onLNt169yJKf",
  "key6": "2Mpf9YV74eX61W6LrTCW8rZSTFTsq6nTgPiPrsjXAi87G3AzRzfQ5vhVNuwSBWzkwzgWszjhcgtTyziKahh1rtYf",
  "key7": "5ZNjigC2i3XCRo9vpu43o1c9tmqv4JcVWazZGsLKPMPHZhNhYy5RzajNzqU6k59Lkr7NM6Z4F5F8awUvpiXuuqES",
  "key8": "JDxXh81wYGvaWLrTTEXCCqiPhyS5y1NNnz3M2EpkXnb58tLZoQWgxBGpB5ctiw4nepvF9afHAduPgNNuehc5c1c",
  "key9": "RyobrzJLMukAzryhZiSLyyGvSXmevVDB4LyoBmfN2XQMdwVWBeNGDma96vi3reHhqgG4n6sxGGH46YiPpTYfYbz",
  "key10": "2Rz3DnVYGT54jDoJkrosE7oBiRJstLqyCwjXX9n2ih9X5mJxQ2FkWSVHZouUDgi1A8kEUVyk51yAtoihhG5LKJfp",
  "key11": "dgQJvvT6kxfBEJ7o9wWbphpzn8W2ZF2MCJgHaHU1qDRCJUqs637SxL3n1ZQN4Uz3zeHTcrN83Y8nMKmaPhw4U61",
  "key12": "5dPoXsbuzhxZPXjkugUTh3hLuZA2U8TxRUwfDyf27CuWfc32j7kSnQZPehVX7Qx6wp8HrJJ2Gry7UGD61fDWYXxe",
  "key13": "22rRfK5vVAq5yB6A5WLarUo7AuWM6SKrhibSf3uDvs57VaKUGY9sgwehMmqjwZYkVZsxWasVihC5cxEkUsLmDoVg",
  "key14": "3xtTu5fEm7PgDdNbmp2cNggKL98dAfQyQTdH7zvc3PQAYZzGUqvTCahGxCCMsPLNrSU5VqAMChzx2o4heVmBj5bP",
  "key15": "625vpmKrJbwg3m5jui4dwRW39Lp8aSzmhuoCMrwigr2n2whsDWYwfPAt36wN5NP6oGhiN91iqxy5KggFAHw2RQc6",
  "key16": "2Jkz6jmDeJktrBrhkXMUAe2W2apT7VxVwUZ9qW7iMB7N3s56AKYsPYCqBK7c7gSmgaa5JorS6yrQPJsmeJEooFnb",
  "key17": "bp4xWyQmAaajUjn7EvNGBxjxic8LJBWFhmgu4btdNYuATshFaQ8uKajGgEduL26Tgx8YX5XtaUBTyqHVKx9JMUV",
  "key18": "4MsLxLvufABmuLpRNhhjCppcPVFYkXv9Znvuji7jDf6G9V2g7UAfqvWXYWgCwLQ94rUbPYEHA47mC9QezneVBQXu",
  "key19": "4nBXZMftHP2teKGq2EeqwQBsB3tw9ux8wmxUqp3pwnh6gnk5HQw3xX4zdh5Ffvjfcb2qjgg8SQnSnQCweX2H3nVF",
  "key20": "4mWSYuANEWCA84KtH3U4fCmkkrX8Cpwnccegay1gp5yZkhEEbpjMxVtJTdMayQeERiSiCpF14rN8DG61PMARvMq",
  "key21": "2pwk2xe6LnnK8o6eFniHX17Za4mbG2LNJp41Beha1wkSW79RbcmDkRvv7L8hAGc2Z71EVLR6WZcxzruaaS8meuXu",
  "key22": "5MCxSrM2a4R4cY1SK7dJTeTMN74CQHDh8LPmXmPjeEHUNQKUk9bco9htFvw8b37nFdmUy4iCRvQ26Uts7mdNrftD",
  "key23": "2Hq5GhbYSKSSvYCBEvMm3eoVPn5WPBVsq4nXJ2HaLaHKE2WPzerQtu3QUkdu7kNr1iL4syNf8YBg1dCR8QCKc2zk",
  "key24": "42qiERteyxu6ih3UXQZVNrshgzXiXwBgqS1kTVytaxTNsTp11ze9MeoM6Ezg7R8iePUPkQonHo4VCHQYFyZx7Tk7",
  "key25": "3S29HTT5kz6yfDAdqNAQBeThp19YRJs19cGEMGmLSKrurBsYoiEG1iriN9iCyMFsTCdiaLSQQqFeEkFh6EAPMeLW",
  "key26": "4DN31e1YG3YoyYZaztHi6648w5GJfJSMWi2EjtDAtXM9LvRuzBXqeiyQ48mYvRNwKr6c3FT1vm6b8XuVBLc5ozY3",
  "key27": "JwmxXJZu3kBXzr66cJ9tDkHoegfRZtyCgsXsBVDLtn88PuZ4N735BsNhZc376d1QS5Y1VyjWatShwiPbofFBXGj",
  "key28": "59F7E9R29KX7HAJCVAtowGfjYpCk8ztxVeTJoPksxptEvvefhMFxtgdiuXzpbaKWd3obeFpGtNScJu7ZyVaKdGMB",
  "key29": "MyYefprp6LRDD5iTZi3YZNxGvQKQ5fTgkwaDGTbzNzLH4FtF2W89kS81DwsyMzFCGMEEpxjyzrPX3idGQZ9r5Mx",
  "key30": "L7RCZU7K2PrBZAjxw5mhQX8oME2rDATKjq3pzeu6vPsT98njxQ8mBTdHb9EuQ5ZqsjXioyEqJwtH3NSCqLGN1Rw",
  "key31": "2dDtHrSa4bbda3h38mUyEaAYqox5kdrjYs6HsorYrPa7Hcn9DSC6qxCLUdDsmzyRNFuFNVnoAinoWySna4F8SzTV",
  "key32": "4oK2brHVizJseMsBpx9LtVA1riavDAxS6oaiJJawkR9HGQfAYemm6zf32Lmt2RVd3iZpj7d8ThXQbQXohL3rLHNn",
  "key33": "5Kjv4FEwLnteMx8xJNXt8mgMi82JHDSkrYkGvX9pnwrnv88fefNad9knjA29ZMvg7k9D2BWDHPQnY9NL3GvS8GT1",
  "key34": "3XcTd7xvbwFWjTL7m4maX35QCQgxf6kPxGG3wjzKy7mQE55kA6euBMggQCnFfk7ipUKFMhEtaZEMJ7zsbAbPQmVk",
  "key35": "2vSqMeiMyt4QMV3f2ESJBoHK3DZbZtjXKAT8KSqifZBD73TzBeNnYETNdrZPa3UmJxLhSE2tubmQhZx8aCHoqD48",
  "key36": "xXKwpATzSjPkpMRKXZpni2vTgw2y3HvbZtJZfMTjkUy7UqxGkH2cbLY4stq8NRJsKRpmqXUkPKMCLtG877vTWAt",
  "key37": "32YwcBrxanDdxNPXsNkAMDUM9jT8fmKcs5qxfJzFjE2DM5s8CnDfQWpRWgGHAagyn9zLcfCRtTPJHXDAARLu4QZN",
  "key38": "2j9yuQEPsMV3kSe44RZnebG5jEpXpUHpDx6x9kh5eVC7F6FUxjdLorBtXhk9WV9Ea6FHVuAafMKvDYLaA5rQsFd2",
  "key39": "5rNXSU9UdLWv35WT4ESiVzL9twSWFTdVgH7TWxKfGew2FRPyUrDC1e77vK9b6yg78aKeZrTauRMBfK21RDiYEDgg",
  "key40": "5dNRnUQSbUC5NmcfhYV7LrEqSk8ZQVV8RocZ5KTouhtSdgTGN87SF2BpUj4gFuEZMqUYGUDXFVzwh19VBBT9VQqh"
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
