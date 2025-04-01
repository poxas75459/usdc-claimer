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
    "2Wj79ZjLc3N7UTz1gaUGAB4rY5QpKofb656Z6q9fjLGrE6cFsA9cx9Tp8mrQZoreaVMXq7HxLhTc3T4FNFbS73P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGWsqhGnMggPrhPQTfmgJBBmzikkc8FzduwMKTDU3vgUYTtsjicoE2NmjezxzjTqXvgk8nvANTiwPHRCH1rDf4w",
  "key1": "232yT13PuW4pcg6DfLCrCh2PbxHNwnvWQRYndn5duLrN2Mhn1FvFdXuRXCurPWCP2nSW9UGcNuELZTJfAV4iwPaT",
  "key2": "5Yoy6vZQMid8pudGKYusK7iuj6TNvszMu1YBpbii4GXcxb5aaxX7VDnHb5zmy9xS1h2QHsdupas9CtxpdSa1j3rt",
  "key3": "61oLeqhATfFAQxDmMSoT9uqAishpGGaftXbBU8ajMwVQEroKaf6b6EVQM6cQbSECDo3jw4D3ctBTqzT847XG7QWt",
  "key4": "2KBn6qjciTNPZqv39oegA7j9hH3GMxP96fvqrWBJNYGcq6Yub4ZXoGKEtYvR16JAnZfSNPzz8BkAMphGZtnv4gij",
  "key5": "2JjcsfnLeghETnMggQuRcnZj8dk7c9s3cUy1QtfkNnswhNAU5PmmHCfhTLbxkcBXTY7ziLBi9yPpontmqYKJmnX2",
  "key6": "4xu8TJ8mtAegeoMoRbpQ88B1aYCyvTsZRZL3q4ECzvgvqNERfqGk4JJ4KWUV75AQZsR662FvNSL3SPEsCQW6yNpe",
  "key7": "2rfWSBtTWuSnn8moHyAjezZG2HhWUvCSgbZPfqXCZFPTL3CxYHay2WRH4waX4sjkYHtJvbqDmmoe3KX9k1qtqF5s",
  "key8": "2gR7RZ7iRjKgVNNzFWG3M5Z3wmdwBNPYVEHKVYM4dNhqWKABG3uDx8gvSKJ48rRR28pZ6Za2sbQ3qRGBtaB4ssYk",
  "key9": "3sJEaYJ2E4qxn9ZqKySERbDKBPC3EmcfJwDFL1v6q2V4b56GoHh8FaYA6GastZjkiUvWdeoYFLLa8JkYXjyfKqja",
  "key10": "2qDReSZM6jdufrpGNqgSzNeQRaqQZvywFrdUWPCgTrR5qHBmqyvwP1TWwQd5kR2pXxLZWjNEHxVbcAcZykkoudfL",
  "key11": "2ESWi2HwDg9PoVvj8P4eTcZ4P7YFEvpFVdhptaELtFewgmmQCXBhgMVR1V23QsWNbXEQVGtTq43KYJFvirLwtGj3",
  "key12": "2URkg6qmU4gES7MMjo9gJBAYMGXkjDgyiPff8jFLG43MrcBGjWqP4qtbvvj1AXwjZgqmqA8audTJKYaac4C9k11W",
  "key13": "57hqoq7gSzUq11h7Lnwhn34rr34bUHaAfVCbZstXT3zDFGyei9tcaGYNDZNCoK6wTozCqA5yV3He8DD7qQ4sdA5v",
  "key14": "wbKU4A2Nd4NZUm1crhvReu1bPTNddDFsSsvwPQx9WiDJEe37PAeP1n53uzp76NwGoUvj4P7Nk3QoqxKu88DsKZz",
  "key15": "4T8C6uFhNokzJvWu3vdcNdDw6UR4ggpcbLQuuSfG4iw7g4D3UN1SK1xzSNubWBZhtM45Q7BSAwyDft2pf4xbQdPX",
  "key16": "5CVvnumsjTRTYjhzeyuk28ZJQmJoG5iQZipn2xttbWWzqYpeKoUEJX9QUAgGApiGc4oxcxNWcEcNpz5Y3PAnZHtk",
  "key17": "2RYg287p791CbsgdvBgA7EUJKCQQtQFDhiVjAbbBn1wp4VM2yzRsTXCNkVCrok8zkxJfAUKEBNoupGPYqZN4qMo2",
  "key18": "25fiusVM9FoJUxZMoSUFNjFbY8dGhk8yFxCDN4EjwR9oC3HXPzRz2kfpvXpAzNDgbL6GYyXnAeRhfNqhotVgJ21j",
  "key19": "2H57tvCQ6T3BbYLqKKVnMMbhabWf96MfuU8WhUwREh3NW11wq4Qgz9tYSQjaQaGEoAqTHht2D3WdKzuo18MdBKFR",
  "key20": "3Qf9iL9noCKTxa8DWcRaQZzJF2DrP8usbwqWBo2jK9GabkruQtCAQTt54dZdJihU3dAchxCEmkzpHTxzApptRKBc",
  "key21": "5aeWQWRNcCmgkuxHga6D5BwTGYdsoHGSsoWpy8Ud5vrFHb2CPwh39CotmUBDoWXJcjywGcTfsbq13c3oXKxjS3YV",
  "key22": "2MBd3kJg2rF83DRMUKEzSerm9i8YEeLfixQnqQyHFBPRKGxMCFycniQB3xsxxanHX4FxZnkMySHG2RiLYdQzYwkY",
  "key23": "JQPBZgR3yEwvU8u3G86PgYVAdGqt37E1Kk6R22uBMMMASgY6Bj362f6DQEx43BtdLyWh8tgFYrU4aq7pULT3MLM",
  "key24": "3nRy4TY37mxQ44ssmKYQobsNLqdu2JpHd95GYD7RkpSGr5F7tApyLgCb6fdut2EgEvKNvuYdNaG3L2PqsR1pHtR6",
  "key25": "2AxZMCAn9UEPW3yZdqgk56KNQGYxD4Gpn4gD3YKGSVvu7tnhUPNReiej7fN2jbQNATccqQfraiYHDic3ECZoSSr6",
  "key26": "3ZjpWJV82Xynp6tGpbxuWrDJ4wwKyANY3SpGAUgq3pkjwCmn69HH7QM4K3oidRFDDqgXCTV1R5KRM57Usq24T1Pj",
  "key27": "5DbFDfHoXjoxuaoVMvM8YKcujXnJKVq4Rr1oRGQt2pwxrmz9pcj9xqbT3zGvjbCBMyvBbVCak3U9umwkteQiUBby",
  "key28": "3gEaHMuvXSt7HMhkepVVpfN9wRQfRj7xXF5vrgmQ25CPMRcMumyjgP8YEygurSJMJUPKZ9xS2KvEFCuUFs7UwSqP",
  "key29": "2qQe5TYzh4cReGNwoi7vhpSsfWJor5e5yaUmd4VCGC77tnKb9te2AMHer5CxPpPQXQgAgE8M7rK5Cv8ZoBK4qkUG",
  "key30": "5ZNTUB1tCrL2wTpa9LEFHL5JD2GKxbDL2U9zeD1YjLxY9uWPWUJrEerBycn4i9Hj4ujyZzMBmDFLr2E9Zmw6HAPR"
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
