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
    "5c3wrJXUG3j1uqLWZg5TQC6zgAYqgQsNca8RdraUdvP73gCwq8obVXfyKpEtDSb7dgRpbDCtEsY7Lhz2P62YRnpv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rndmTJt2Lr47yzNG4VCA8Lh7XyKm9rUVgGy4aFpw6QZLZrshXEsv7AGSGBooSji2Gvr36PTBPacAM3PNPBwWBdm",
  "key1": "McRzUvLHCPDqqxvpbhsuPUb5xWU7FrFnCChusagLX5ET4kPN9CzEtVnWZNDNS9SPdm4f2cSQhsYNooNgqTLQQFa",
  "key2": "B8w44CvmshJrRUQ4o4uXGy3YLwgSwGdQRyy84ViLeWoqJWbh87fwimJx8nbFDNxecdTRY8g6L41HTtJtcHkh9KE",
  "key3": "oqHmjAUvmo29Cu3v9AYvNVMtxqyrH7N9MUR8tAC5EBNRX7b3gZ5NKoQk464nKzA5L7igpujqecZoGuhPaFg8Hhf",
  "key4": "4UAZ5nTkdeaYRtsi8mpZhGbJjcao6hirEKTk2scx4Nxf4umUwnQdu8UFsoFr2G4bT9LnM8DWowcEo8rEpA2U7fGt",
  "key5": "2aLAJMzysXNSDzNWzafaGtzzpnmRAMPHgvQ3ezb43Miztyou9aX4mbTCxNmQeKZaAGv8d89d9H2cSkibuf6fYkpy",
  "key6": "3vJTccBu3wiUDnb9VMHbvosRZG78AgzCZCft6vWEDDpKezgJKdZErk5emEqDEKgMFWnk9ZFd2Jdg95jyj1soFac5",
  "key7": "2rvii1cvEtqrGV3ECKkN6rQnZhB17Tt6JHq8kQpVdBvp79JuT8zg7zv9P3T8ahmb8a4XCBRdaLFXwSWaBSPLeKaF",
  "key8": "48J1SvpR5eC6WNMUgFRdVbo5DQeYgQWpguWYE4iEMNS2PaZpMTMoCxmbvLbs45MT5kHiWCnb2H1wMvzdgVbrAVGe",
  "key9": "3jTT8xZc5TEkPjnm8QCVEwGoQfitoDHQVXM9vZQJdU8KzWgnHfb31aZCEA1doNephRX5VKwMupgeAYFQntpqxsNA",
  "key10": "37a4yqipqgWy3FjoRaxAVFKCj4UoRx8UEjhnKxCnb7bRCgm7Uy4SWmESyH5ukrEVDzhPHzAgmqisQwKbaEYBrJ8R",
  "key11": "4MFgeJWEscBgK9Y9oFgxU5Q5DiHTy3c1Tzp2vgoZEvK9mTdAA2hQURswAf1Xs1N77x5QsLDzc6BGrt9fcC2nePqT",
  "key12": "5GdFE9mKtZeENQb1SjGKBkH6D5EV9sqnZDo8FGFumcbr8qWADSfGVcn9iDNDUJaxYLTBM4gXXr4BNsgdyf6j7Ms7",
  "key13": "4ySYiAcRnjUzNtnyvdDEjC1EvAFmcvUVgRSY47d3k62C9g8D6iRgUcuooRLQhoDHHDtCdwQCfs6kF5CkMWb8xohX",
  "key14": "FkJrNdCRvfoj1sPqSpe1mgLxntm4MFk92tr7T92R3RwnyxMoAj856cC2Xgb3pPB98XHjLikbU789jyS4LWWooCW",
  "key15": "5R91H5tY6NN4mekaR8vEDAJJn5yeA2EqhSFANY755Xj2cCvyEzLFgcgfbV3NT6Zxid2SQ6JiPe2V7rHxdzGg3LMi",
  "key16": "BMMawKxRtP1o2NqTzT51vHkrdWhJU5pNDovL5vbfXG5SVjBMhai7NZndK9y6BK5mTpseECAN9uwZjT15WZdjyjQ",
  "key17": "3rfTqtDTzcXHD9tRReUwWbbV6S4KKePDeGZya9XF8NicjfRQJJLvvY5ZsbmJ4pvQLvd3yZ9qsUromKbYFqaATnyZ",
  "key18": "4ZxnH7SAhtqUVEpCSwJeGnCbXxxnPZdPmNqnHRd6hkN4iKQTGJiZwMf9sPE6JHFtQ4PJMxbMQSo4xPMi3CaS6qfK",
  "key19": "3YoWUbLadpt771psj1bEoKWSEbZbyGWB2kNXNuqKa7H8MAgC4C7vC6TMU46cnBi5qDsCMnHRWTewvn63EP37hnhz",
  "key20": "4zsFZUE37AFyaVcRK8x4YdmCMQvgXTNA8ttvxNPorfzvWBG5nUz7NMsxNbzk6o9f9ttEBmN3SJM372W5euvtatjw",
  "key21": "521crCfddy7cmsH4U7zfd4QqLsdLhKJbNoqZv1uqUzs5L6jevqY2SiUb3eTVuRvdN6z88UEa4HytiM5JV95aafPA",
  "key22": "QxT6wzR6rZDKv62aJQ2iDNgoSYKopPtexFK3yPUjnwrqSJmBb5hYU5wXCU5vC1QRWYiSZ5vhW9aG6rNzNJfN1zi",
  "key23": "mu4Fse3qk2BoTUaFrBUFqVQAiKb398ndsaPXgeew1C2EvHnTQC7y5FsNQDorGsFcWc9m4ZBf3Dps4m4e6n5qBnt",
  "key24": "kbNqkQPLVUqFZtMQETdsPnxLjBG8uFgDVVzT1w1EMf5fqnLdBp3qJJ9e1BuDMB1eG5MTrNca96aWqhYdjdXaHVq",
  "key25": "5gVFs7ZcQS654tfFUwvaE7yhgQZ4DwwWJbVUJMd1f9UptfjkHnyrPqphua2wmN79eudbqXUHCQp7RZcjA6j6LxDY",
  "key26": "5dvadEnTr6mWK2z33SttQq6GS85gGm1Rpg3vfcDpwYBzKp7TsXbRms6PJGHayo2yRBnRkU7rAgW6Dajob3veffSH",
  "key27": "WEEKf7TfaVivcz75h8TASNz139sfPsLob2xzFSJ6sm7e3Z4QhuXmRXsjUTBh5dAPdz3R71J9wVT1n3FLTzZfsvG",
  "key28": "61zodVxX7eovBqJjvameQ93sL8e4TEdxxjNWWmbNSDv9uMjAqJtRVcDAdMXMAazFX3RB6nkZR4pRFMBwoVkubype",
  "key29": "4WxAy5us6gVoRnT5vu5M4hBKo5MaGRCwWr6TYDkzuG2x11Hmmvuf8uNE5Mzmx2x4frLNzb2Xg49s5uhPhtpZsAED",
  "key30": "4FXWTkeMZUC1SBS5VgQ7nSTqmUR5CKYV7195zSfvHRnNRxpFsqeZ9nNYRMR6frDgQM23JVCrpDfVbX83Hvk6dQ9u",
  "key31": "dndQHUP74ySf9PVmqjfgEtn76mLmbW9YkUXKsNbrKd18Hh5VbobACCZyRuMtLuF9dwTSFkZohRgaY9zHUKbmLSm",
  "key32": "29bwki5yefD7C8Vo7ssZ8LVhaFyzJHhgHVMPvsWNEWJvr1cbTQqYkcVqw5YEtNDPQYjXXfhtQ75sKMKZocMb5nkG",
  "key33": "5LnvAPKfaVzDJx89SjZUQ3xDk7ukwEFGKW2Ppkrqj1AJCrR7kSzhA1LrwDvSwDqBXEmj9MbuumLgGq83MJSzxeXb",
  "key34": "4Pazhd9Rnrov4QEaLwJ82WEQFaQmvJ6TmUBqNF8iY9xVrSMD8aiRoNFD8zkh4jW4bEqTot8qEfnF7q97dCGZGiuQ",
  "key35": "2oJvwmBHCEsgiufX8BgadGupa3XthhaQYshZTK2LsCeyutejnCNz16McVSkqnVWQAFqaYTzg85yaff7PmAfzegUa",
  "key36": "4carz35LWUw8V3xru3KZW42b9SsfnGwRkMua6ZNtYnD7ZfudzGZvRfdKpJURzv3o9XaEQf46XPJ78DzVqoZWEb25",
  "key37": "2oGJTZ5A5YnPEcC1GTF742zqjMCfYGjTaFH6yLznkuA8Kq9PGiH4Kszi6e4UDsSugtC7pCkwtR4cvKSf6AETENkT",
  "key38": "25rC9FbUu6CCdgkZnGTf7Hr9eAfnnuwwzWT39auD6DwheUweBixzdLpmkYKHpW9a4gBpMK7ybFi56MjrvWzYfCZZ",
  "key39": "31Aq7o3uppR1sYac3MwU3cJaziH5VPZEfzfnkKrKMnsBA8hNmd8emuWBL62WpF63Df4jBnNzheFRu8jfK2yyNttd",
  "key40": "Y7rY6dNXw3f9CkZbuxFq1NaURENzX9vUX1g5sc4Z3td4SCqRErZrX2X5YnoWZ4G2ApzbH8v9XVqbKRaGhY6mKs4",
  "key41": "XXP8pvuAGyegWp6Ajwu2vAZp1TZgVuAHASrw85BB2weyKomHj5m28XAM2hxNm22eD2XgK7ahyzRQzFW367Tr5Eb"
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
