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
    "3XwTF2vYUDJMr7rKw8UWfmryrC3nXAWxL8QKuvcT38PjyYsAoDUaihBPyfZ7UReqbs5Mr63AnCwMaDwUvMUrVCJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Z34WPEyc1Awro671Cqhvqt5PBLxcsJpS8J5WWom7s3yjhgAUNhB6pPfciPsuNwnDUYqNeHh98FPLDDMtGg2oB7",
  "key1": "2fnGzDMpMekaoQed6QJwMWp5qR97G2CiXcZBayNgui7Lccrp7aG9n5WmrfgnP8aWEujgpoGDgm398sFDQ5HmssK1",
  "key2": "5UT18CksWnuT5p6bAZPBiDJHpVg2j6syLyyBd57HZPnGeUE6njo9YaLn6M3r7fGNyjpggouUkNWXLfyrrbasLtnd",
  "key3": "5A9nQ6UsYT4EfrjJPoDLCZjGBNhwwEgZqBn6ivjpK9M7crQ62pzCj8PZWHb3yCWueFDypBRq3zCHvGJpCwywqHzv",
  "key4": "5KNAWuzH9f2r2VcWdTPgSypsiNXLVSB7kEwQmuu7BWh4dTawZoy6FSWCtmmsJo6y62dL2fWg3y6VSLogVN6zJyyf",
  "key5": "5nWkNPGw8m8Sgc93EBR1t56ozNN6z1xBcUMMkoLC9nC6mTSsmSy5umcpmqGMGdrvToEJ164dm1Wgj1h3uAT6vwvW",
  "key6": "3ojxxnCMPGtMnZXXSk65a4mMsrkeWxL2bkAw747LBCc2SxkZNU45QXJsNCR6Pp133NMQEWKbhXpGFZuJqeFM6ynF",
  "key7": "3w6DzpwwQbW34cC5qbGciovrhDhDBVcCNTC7zFk27KUkg5sahyxpCeXBRee5j5EMwxKbGa69yVBHDtpP8GgEhsax",
  "key8": "2A1E3aXLXMVGd2dkhTNEbiSBJbhunUvHJLtnFBjc4tTovWE156XpHLRGVn5LWnCqaL9NVw4BuJJpfXkNQQKsiTdM",
  "key9": "3Y7hnEXbjJTnbgvq7KXaAhuWz6MAdoBqxZ7zdFHbg4VHCVBidB9WsM9NU6GEnnAtomy1P8PswFjjEGrBbcUkQeW2",
  "key10": "36We5tx1oGEN2WSgKkrF1qae6xRgnsDBHRKbnLeZcYEtajyqsgtdUy3P6rZS8TjHgxfk7vK4EXSAf7vKFUQAdo1i",
  "key11": "2Uf6EphhVi7KDWarbRBCmkMqDTBChLdZs4vGmWb1KbMVoZ5gJw7RkcSDoLCn9TH71bPH6UF5qADywCARGZGHKjtK",
  "key12": "2KHZMdi7n3xLaMJQhp52JgTupGVEcooNEc8748BLNWCZd61nm5ovk2wwq5UAcMdH1PwexUWo5pezVyU8iVSRzM3v",
  "key13": "4uEz6hVmcir1fyCVeiKxAaniqB2uEfUANf2hF8YPWyoeqzmqmydpWXEic2xJV1fwQgtctKF67K6zPvBa8GJjx5qz",
  "key14": "3VwKVasgiKaAUE2eeNCLWhGpDFrzdSZU8n8nsZKQ6coi6isPHQDsZuasBzobu3yLTobVTn4V9VemqryhhSv2qQ3J",
  "key15": "i22hLTanQcEiYaVuZ4L5tRJfDHrQ7QwKrvgrjsY4TJtvjokc2hS8Z2bwzsVwnxhXTztgmYUvefD7S6npALqxNCF",
  "key16": "4t4ZLqDyY2DLje1CFtft9X6BBL2SybwXn8SwfNDXDoAynz7i7SewiN27v8AycSXnFcrwNM8Aa1GDQi5CoKhgruap",
  "key17": "3kcUfFwEDXgeiYtr53CCWvmj65unkmBGr2wNmdcc4kS2n6mDYECkJhwBQENtZigtHWZtySohTjyR4C7y7sDGaXqK",
  "key18": "5eeVm8YAGMB1xwZmUfCRaKK9eDvfUNReAWWD3gRV5YfY9uz1n8wvaCWUfiDo74TtAXTCUYbb7XdFsFRU9VcXokjy",
  "key19": "zX3LZnpRV5XjhqUUFnGU9ML88FXtYWQp7x83pQfED2MxawRo8e22Ng87VZuSZrRXHAdsmt4t2nxvzUz3jNGa3Dn",
  "key20": "41wopKdUvgxteZRJvaV7HJq6MhuEkkxjiQq1at2Qcu5akyTc2EfZG6xhyZwj7txr2eJJEZg1redQHEnV9as9C4SS",
  "key21": "dKpxDifDEkwQJa8AbemeAmn5rKovve9dzZDBxUYzCV9ZwVhbkxsoAYFKkkrHhXTDwwB9mYxuKcmqpM3k77G4koJ",
  "key22": "5utgTxWnVve4dPzQ5BsZDV2xmYmihj8rQgpPmLwzcotk8pNwrP84BMNjaaMNxgg2QBJdsjhQGEzTeqqCXndmMS9R",
  "key23": "3fAyGoHpTYpurwRHxURNm6tz6wi1BcvBpHzQMNXzL2YRKKJqWbD6pqG1MWmWgLioAtMkcytGfo3eu97rV9UtS573",
  "key24": "3ZENE64aV6FE3tDH3tKg5XEiQemkirPg79nXCQXuBnTkJL285qhyLk3YE6unxqbwrYPenZdDduAYAsyA1p3Jqz7G",
  "key25": "4RyfduQEK7RKumPTEYK2StgxGeVoebov5LQFY6ZbDa1tVqGJwXQwvgYnoJRMkKGiEvc74eQEaJ6uLic3oqqfvGoU",
  "key26": "5zZCLakb5xfzu63NLVvtDFbrWdYiYePPAFWf1sgJQRrMzbpQyeXysKNJtWFUc1SZkJmde18d5EBKyWVWoUP5ZscH",
  "key27": "5Br8NZBsSF98rRNj6ChZUjcQnAV1u5VZu1KQUX5owgAjB6rDNtaHm7mKBVXx8zgTCnYqwFNDqPGxyVk4egmA5Q2f",
  "key28": "2YgJu82Hd6v7KBufWwm1xqQtQxUuJusGNom8ieYmAhsukDyoJrjsq1EVS85YCpyXNLutaTFAQGFqJ6fAQk9H3uCb",
  "key29": "KozH3T1xKpNfR43Kp6EkgNU37R3gXkYpKKgmvoCKsi6rT7GLCGWHcT94UPUMisK4xEAQzT8fPijzxSALsJdLhaE",
  "key30": "158HT5yVtYmqGBmJhjeWYB6V3SxQ4bKcScrkSvmAZ9A9LL4A7TqMHyqDB5XUW8PqG2pZfdh1Zkc4cgsPQFFKKjN",
  "key31": "613edLyVyCuxcK3zAYqrbwyuE6Pa6dtfyRh1Jdj2BQuuWB4k77mX6JXHthHKoQ7a2CeBucFQ4PGWb1qHhH2gNp1a",
  "key32": "5CC28rooqFeyJByDcvjU2ndv6L7CQfaTyGXzPhmRGEmeGR5HwEeniebfKahciAoGxSNFRido9Vua3twG1txuC1tM",
  "key33": "3eVjL9HVekFeuXjZf637kc9rTSKJtidppqbss3zeYeUjf71xez1Z9kSQtooRv8HkrTVzPxBHx3nGFMcTdiYLKFoL",
  "key34": "SA2LMPSrrHJVhqhwDEvwUnfLqewFxfruMkdbyN1WQHGQjGXTpEH3PRvyrUabTcKhPyeqShvjyHKqmijZZEfs1sB",
  "key35": "2WGpa4AeC4H9EkRS5BN7j7pZGpQrd5Rsq2YsQgyCfGYW3UgMHw4CccfTVMqmvYn7cboyMM4DnPCUUd6ZK7XBoxpz",
  "key36": "55GnchGiAKPmp3KsGwKPv7U9oBQQLMF3chUbpscfjitj4p1kyEttJNQE7xkZ38xaRobbZ43zLd3XUieebFGZn7BV",
  "key37": "4rtJiZsi1dqQw8xxnJ8XBLgn2bGDcJkBtFn6ae1yoZhweHs9HgovS76Rpnij5H226A3rr5si5pAWuu5wNDQSPbpy",
  "key38": "3FQqc9LtzQCEtPK5ocbBwC7aTH7aJKteCSDXdK5aL4VcS8r82DHmUdbtrcCtqYWAxU5JvHa4xoQuGFPfRaprtNbx",
  "key39": "5sSeNQ55nUhcQZiMn2px4Guffm9dLBgXzSB6jcipgU183uPduq17QzbWPMrGXXSkycrC3K3PwzfeKRMtfMWCfJ8y",
  "key40": "2hEEwacVwkRC49A3htpr9sYfCnhocitPegL4XTSRhb8eyii3XZPYSRwBqKTScYYVKMzvBcWHwDLETjCwt42BJRen",
  "key41": "29Un5dwTjMQ2pHrRbEe9bBeddAPvkcvQNjhzPDaycUfSev1wdzod9jNFVZCztof9QFCntWSdJtpsRgp8ZBYsV9dX"
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
