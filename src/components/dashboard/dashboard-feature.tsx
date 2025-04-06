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
    "4WTBGEJcDUbv7Ti2YMXWijoyS9vz2WaruDj2keUqg1kCyYx4ZyRZXhyUV1scgf3Mfw9dA5qubgPzMx3YkQYsnm5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bTM5cFHUt5S5QUPAnSeXp5zNEvDYr7bGtHskin3sv62QGDQ4E9AGi41ajJN525GxS8L6tkUNC2jWhL7X6mMqoYD",
  "key1": "2PEHGNR4wRdg5pDvEJeTUopYbsrUeWun9dc5LrYZGTr6m1B4aENq9x5v4yVaETbsP97c4bZKbkQNPndkzVHc4eb7",
  "key2": "2uMHNGofGjfSprL7AknVaM1PTkHbTKv8n2jRaYggWeaLofAt1LUY5PRWRn4cQQmHzDqbwgUYsktR18JbHK6sPCEv",
  "key3": "2Xvg7WKxQqxteNYwoYKbdaFq1czhCFAKPH4arRTNxsqfg1e4dQCzUL6Whhwbw3smbKp7ctYWJwrG1UjdjkecYxjf",
  "key4": "zaogALyMa5Wt8yjY4vkpFiPU4624Mwcc3JKutzu2vQdC2GuCda2jowFueojmVMNFFgzGaJqEADPzEE7SNjQC3z2",
  "key5": "47aycpdycCiFfBRmgi7AuDLazWuShrtdF1ypZfzJi9C9yT95E7yKGcGSn4EJWPFVMmGjCDMT3XV8R3t66umTkWQH",
  "key6": "2LfskaBxekcD1CrBd2VHXFh793h5DF7BREQfyGAHUtGax9azoPK8MmcaP7WPUwxcWD1rhvPuX1MamCxq1iGKW7QZ",
  "key7": "2q2oTrqowiBQft8pCdK9bGotBdMWF6ani5RaTie4CpQLWJw42sam6PExijyJmG3aSoAg968NzyeCyNYC4VrbmzPY",
  "key8": "57zPNqs5pF4j6mrV9sSFAtU1z4VuUwcTfgrGdNVUL6xNhksQBogab2NJ6devUpH7GuLmDn6Da1q75QU6BzC57HAT",
  "key9": "AaE44KGD1KTGAGL6wMrXm3aRE26wxm5oyWribSXsg3TDXwRZ7t5rLHiqbV1qNsdZegJVa2GmLiwbJA7Df5iQKTm",
  "key10": "H7JH73KGJFfaf3MVNK2mfzqS8uwZ74F1xaor9iHLLLt7fnyad57haoWJR1YrDuzjMbDy3MKFovyf2PhFaQnsdnq",
  "key11": "2jYsQzz4uSVDqubqcF6cn3uXNcPmKEohwq5mUULucr8QESCCJ6Aq9d7a8sWzNCQzPAGN1Ktuu3oNBCnTWBQ71TiW",
  "key12": "22WNjSvQPn9abuCd7oGDxwyze6wDo9QmKp37kNPCWn2R4ofMZhRywVWX6qk9yQ8pHP1T6jrdANC65RNnzmvX9GMg",
  "key13": "36CUegJtdu1Ba9Lu1SdVAY1MqWXXGvXmMjjD2LenErEXKm9gLD5ar51tUeG18ajtf4bYbiF3uphG4rYq7Wx6kTxn",
  "key14": "cpxu8AfcSNWjW3VwbpA2TPLQ2gGFR9DdqNoKx4ymq1U9jhcgidozvRcKf3sPncf6Z74oFdxdqHUUEwcMgxDJu6g",
  "key15": "4yduhEWJTzsLi6xhyXcxZVA5fYnUFtbgi6UdgYZLwWoWJeywXzThpFWUSA9qVmCK1H1e5Zcgds4MZpUXLFRLtUh3",
  "key16": "5mMundGS2mFGNQempQ9e2YTNVfYF4tGXpjMnjyCKxGCa5FhwqibGFk2KkkNXLFefmftatZMT5z54t85jX9UXHvEZ",
  "key17": "5E4LqdwDNYkPDAAsjDseQbXm1EtarD4NNHvgGwnd7aVPNRDPYTEBynsCxHXAdZy7VjgHQwJFqYV7cwm1M3U5u3k2",
  "key18": "5E1X8fv4JKkGyDjBMsNj3yyNd6r7bb1WJb6ou5M2Y64o2iZz5J3ykg3fCA576fCSRxUPgHSonSnsBwgsemgWdvas",
  "key19": "3CqX7xA2n2xQUCcix8Srg6YW6aCyffXHebZeuwGqguppb9uAh3KPvyMBpEgKpqdZxZfVY48pRyAtQd9Ty11p2kmH",
  "key20": "2gqcG8nBEEY2UkxTrUF8VD4T4QLikgbPKAjSJUh8xKMenXZHaKq5QF51KWXGY5x89RNUbgAc2YRwaMykVYYeVTMD",
  "key21": "5S2oNHZcRyeByfNmsLPDhUbo334fVq8Gu7JYk9REKLqmNiyPEJZBTnrwHpDuaNEGiQQh4Sr32hF4uiJE56ZrQLeq",
  "key22": "4c6soMxoM9qRY5yaeRw7irPXEd1AeARZUMGTsBh53DLsi8jQNCADMEn4W2c2fAHqFXFKSaUkgyng3xAvFNmQQv9z",
  "key23": "2W3Cv6HaoYe4USLaf6bps9dCYL4YmRBfKabavwVdt8mQnZ1ZrQVTF86TRt5cDa8mnoVyQMQTWN3d5MuGB4Fn4PAj",
  "key24": "oR2kq7kRU7GfQE3w3pmfx79Y1VUijbJxyYcWXjouiPM9D8iYWVTJYADunuvseMc79nyrGDv5KDTtmAv4CSohXNZ",
  "key25": "aHnioAaHfCRs4tix8eaj8PBERNgsP7oPi5MMZ4LuT55684VnFTdk1VUV5C5vCfG6Hv1EvuPKe84sxoLu5w9fRdZ",
  "key26": "4WWDyVA9u5EanobBzDXg2xnEvMonBFRaNju5cr6xZrqQG2v9ZR6Jiy98ko1NFK2j5mtSvL9igVXSjNFsbXQ8FrKo",
  "key27": "eMdGw3z2X9U17ZYE948xcuXQVrA9vTL4P4FnYg1RRgAoaSYuhcV2JTUmRMt6CJ6AadfT5bpz4ruD7TwB4XD4ioA",
  "key28": "4TGzZKfrataGMeVC21J51MGzXU1PEvCpHg6eTL3h9rsRkK8bgubFULY2mCJBtZyjw6qutmRr9ZoWU6dRAiLv1WfC",
  "key29": "4bjBJVF5ybnja5RVH2QF7z5WaiHFmANGj3wGecSpstWTRojB4QQUGAkkKPMPRSHTJXqpJrQzcEMWy8Uq22bM3LgD",
  "key30": "2Acsm8jApY8KwKuK7bDMmfqMVkDDNXZvUcJ8LwSpDSFy8UmQjQNu3zesrjCuBgkMo8hZ9SrvpDn5C5Nbo35bkv1Q",
  "key31": "4vBpNBXhRyady5M4AJN1BXVQr2DBAmooKBjhSxZiRPGC8MNSfrTr6M7CwmUUrwWCpKShn9ysimkkAFHbc6ssar62",
  "key32": "268XgogDewaeaqjUJkhwYveyzU4xamYz71Dj3ghQNdLtdnrQgtuReAf78poTTngsvvi6H4mbUMyYbw95sykCPG2W",
  "key33": "4JpXUDSqtdr4LfAEWvwwHM7CjiG2wRE8VFHvsJeLLKJGnXFBYhPyEGsg4mtiTeA5LCSeSCkAZZbsVww1qqyzs3qo"
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
