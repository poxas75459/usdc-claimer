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
    "5kj73wf68QkRwUiArjycxi7fdEQuqhZRnKCGQorHfwY19ZcfkTXMtrSmMPWM9YgUgbEGU92AcwtDwKsrsB9fZf6i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AhgLpNbPqNWj21mXJoogWYMawzcCzu1gqfDxbjkPJDHBZfypqsvdfUQXAKEAqN5acGfh46KX9hzDNH49XdKmS5m",
  "key1": "5kVhkjnjYMg3BmN4znkJA1SjHsB6kWT62BCtECdWYpGKk4Y7BfMP7krsNzyNoeo3Edwz2rTPocXxdzZ91LKyr4zx",
  "key2": "3urfhLVsoVsdTAgJrSNdUwv8dQrfkwr1PvPGkQdySVxU22XfhcBULMjTbeFMu1RWeZubAgKC8CnPnKrqj58cNUgY",
  "key3": "4CkZGNQfq1NDUMG6QggDaqNDQ2Mu2YKDxTNC1FhLHcwuEPDgBaivjFAsxz6F8UprPQJ8taKuiSLGK4P3CzKtg15W",
  "key4": "5hT2rPe2xJUH6d7oZKGy54GJ3MzCLU46ATVPzfAKc4RtHPZZuQenijeo3bxqH8eDjXMzNXDu6hNfnJ4AiXVn6z4G",
  "key5": "2eqzDW5s38hCbD4GWe1nBTQYaJDhcPAiFNoYgmKzqCoyz9yjRtYiHj6EDiyyzA3GFSz8honzokERd9rs4DMpGQ6q",
  "key6": "4SrZvMRVJ9Ys289wNexCMvGaRgqc5ycUjm272J5VKZx9yTXm3LEpnchQLm7ZANBWV1oqu5jfczsDX8jqyHX9bu2a",
  "key7": "4oC2KEsqpY2r9vRXQzj4BVSck2uojq8mWbuiXg4bCUP8xmnx2caJQyhVbES3FbBfjru9jHAykp4VF9KVYCqZzxJs",
  "key8": "3UmSipo6zgjdS7uVqA8ogdvLGRibKYVptYcBp4xRQBtB5soRymyET4xH46UTY387qZQfsq9SErbsywfRJNh3ak68",
  "key9": "2ZC1Nqenm1zk6Lg8cHGMK8JLGMmme1jjmhbwoHvGDXXvp6nX9U36N3HVEL33r5rZqwvXo1Tst5KCbL1L78ALF7d8",
  "key10": "3QDx83d4yR6CG4Uta3zXU12deYhfL1BH5eWxUd6rcNwmbEEWt2qTd2xFEaRUVgbseAuGij5otPNr461nM9nrswoE",
  "key11": "39z5yTAdC51NceZjWu46nrDhjqxhdVUTdtqYAPuzKDVVDUoHET7oiPgWd3v5zmQWnA36mhqL9njwcesjo6JRamde",
  "key12": "xzQdvSvEnccRaNh9c4me6Rgdhzea8f5Mx5yLSffuqJ674Fgbzmybb4JFACQLffa1JQbtzg3rsxMb8n9McgteU95",
  "key13": "APkuFmbsoXyJMZQtmHeYYAEeMSyL1f1X7zSHxRTa6oEpDzk7EuNT5qU8y5vMaBKBnNv9T6VxhduvGy5Y8dvzXsB",
  "key14": "4qbZAgPkAxetJDxQgVXrSboGih8SL9mUuWo6hAqyDPANvxabkDHS6bkbc3RK9HttfHfof2sVu36wNP9pKMF6FB4F",
  "key15": "24K7bomMHEtqNKKwAvGrafhJ4tsyMjZWHZ6sLtnqJUL6c9GvmYV3B6USFoqtJdd3BBNG18Qyfh6BxeruEhHzCwpp",
  "key16": "66ghwpaDSYSp9M9wDPWT3vpp9RzMDhKWtfx8Q2wKpNVXiUJggChP3Bz9rtyfWLMG7NJMLFjDpNRnp4jpeJTU4pY5",
  "key17": "4euEtcMW7b3viHVPeS3Mcqsc2NPa4B7n6hu7J9S4QXcqnT3njmmvY5x9WrPWTJ69eZXEjkb7dupEMUDxjCFofrPC",
  "key18": "2QcpDhwoAa7XFXxjQYKUNntLGWYauQw1pwtd5abKpJNTUFYQgDDBL3vHUVPJDMrXivBVgTXArMjPvnZvhwRmPDP",
  "key19": "rHmueh58cdw56bcR7my16g4SZrQdXBrRengKnHq94CxywXAea1itQd1RJS3ii9mAHXxRqCQVzvNqcdKw8z6Quzp",
  "key20": "57RdUuyGcm25ovWMkQg57WSwnPhWfa2NRoupewWhmFLVRAwgkAECjEoqtk6jHr35WKkk62BNKVFm32fr8KeyrpxG",
  "key21": "2pYJx5ZejijbHFiqYCdoPHm1ReXYojq172rE14K9WvsiB3eUzmUhiCFwAxWWT83ceW8sXAjuUsvTrDPbvHdEoph9",
  "key22": "5iqTUj5DM8QoxxjF8mEsawLEqt6iSaPei6RMwBBqKDWU29skeHJeieRmcdy9zCbePAAaWNxQjEc6cNt65tayrRhA",
  "key23": "43neYFBynmkMhNUqjZD8LGBeEzpXjdkosXxicAeg63KSrM7wThm4r65T2GySVuJ1pTggmkgGKtCmCE9zbApkJBxd",
  "key24": "3Y9BhjbQKo3qCBsuWXtpB7JTUfR6Xn9NMdY4Ups3JBCWKhjwYUk8yBTs33nVo1XoEAfe3VpDBt1WRwqczg26Hdi3",
  "key25": "5NmnUra88b6htm4bJ81Lp5S6FyCrSyA2x5cihWWTPM54sg3iS59rCSHWvQyU51uHbzFPww8tp8WPrsudeBn5i8Wd",
  "key26": "M5uCEgkpQSpFXgysvMnKLGo9qc6K9rsmxyroeamKQUciN5R9BcCh4kz1QL7fjt27quHX8WXmyqHkLFsJ45RRXzL",
  "key27": "3pxCfCza4P87RymEJebp2gDSnxaMh5cT8nqtR25nJGf5JKK8PrP1DhstoERPvLmfLUN4VpRKTFC95vRK2hrjkkSX",
  "key28": "t8zuxT8Bcc57QyyrZRgKpZg7paLhFmJyALFRyG9MofcfaBREkvzy9E8ZsPnJ9Q3imL82hboADeTbkT34oi1uHu1",
  "key29": "4XtqQt5LF3VCwBFT3VjdiEYe6rFdg54ip2aM4zTN3TFUT3ocgY8sFsxuqFw5xceR8pxxCVAhaHHZQPBW4FVTkwS3",
  "key30": "3pByZzbtCmdGznQThva7iucyyCWGgtkWWgMxLkrCswbYGHqiz8EL4pCcvLJhbNiy8bRGxwmNWsLzdzUAP1ZJ4Gzt",
  "key31": "3qYnsAEt5uTRYRzAVvGaSUhAn6fajw9ygfZKW58YqsZohVzCuCcCRLGkMp7wPjaj47iMWVzvTsNsyD6P8aMNnnfK"
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
