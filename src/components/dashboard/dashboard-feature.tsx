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
    "2xWLT5fiZvMxMCsRfk18NZxo4iUe8YmY91Wf9qoYya954pQH6tbrGN7fYb999db9uRX9HUkAMH5XCbZmMRsYy8Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4omtPfpD3MTM6XeYkWT5B1mWNLCj7x2gteRgN1wSxZoqR4PHTijfc8DSyL2DZULjztXoJtahFPJWQFkGxZAFxSiL",
  "key1": "2ErGb4FHXyQM7cmJRoZUjENbBJh5G7Gz5S3D5RynbSRUcACBT51hSCjCuDnpJmkCnLYd9y5Dt2KjmEv3TF9vSVVL",
  "key2": "5S6nMgL83ttg2AtGBj5b1saQKEmaP8Nnaz9czV5Pe8QvuvyHg5qedVx6sYFwYrrGtAc4ySdwoKADdxu5gZqJPRAc",
  "key3": "39fhjj5t2XoAKdjbzad6s8FHVCQt8RE6QMhjrqSdhwzfvtCok4R35drL95VaABCwLeccbbMHw8QEbyrzVN9asw7B",
  "key4": "5ynWysyVJJte6QgPjQqnDTdVP4wEq3A3Mybb1CfaqJSQPUE7YGUgPgzZLg5V4Xa17Djt1k9dKKMFXCmu6kDyunXy",
  "key5": "4dNbmwf6SQNovXXTo7PEjykV41ZznbwxywaDFmNY8ZCyS1cN7Xac3sKPJJpyB1pJe16g8jueW81c3mn481X19iny",
  "key6": "2JdrSBa87GUtL9ELk5YKpYKurv8kwsQLkiSPXP3aHRXURpV1vUb8DgLVfFvJDHwKAmA3Kb6jPzvcxJaNCVfFMF88",
  "key7": "5zsanzhH2RjkgiSVrXTUJC1FF3qrpgF13bMffwsUNzshGpkZ37WNPqxrAhJepRNwcvy3M3f66LtxAgkhbYpp9Y1H",
  "key8": "59JoXJi9MDHLTXLw1TBmnsoVLdE2vFaf696dyJRF5nZsaRYBqomqZYkAgmnXd1tzjCqfGR5tdtpPdRbmFYvmkuR9",
  "key9": "5LN9pc4kCiyQPJTEbXPE9qu6Rjs8rzNKTrs3NfRSgnbeB3Z8LeycDnsbsxd6NQWP8faGnj67QEiAywwsGcqQ9CHz",
  "key10": "aVpmQydKdKTe91dX5wS4JuVXkcziucGeJrKGbZ1FsoThJMBw8mtoXykRKrt6mUxUCByB29SGSrWRGdYkaP6xPQK",
  "key11": "6442oCk9Ff9EEcf2LdaTK2RsH1uH7niCoUTFaP4fHigYF23x8b86d1rdPoJLQdod6dV9isMa9fZ2nTQgMJmGwpD2",
  "key12": "TYDCzDonXdg4pg18BtZ9pXQsm1MWGzcyJ2dj4VQC9gbfoUvpiaUMyNmxRBNcCVYDS5YfLMHAZCHGZ1p18mYe6cz",
  "key13": "o2HWwQEjCHbqJfRr4RyfjDnTL9fD7W84Q1QhGv9siWMyoajmLV2Fy91pSXvaeheJDHfTzYH3MgQyZtz5xiWdNrd",
  "key14": "4kT6CjbKzRmL6GJXVwS39ib8y6rW9c65aGKSbiEEcmoZYHcRpZLotrEcjrMXiEQwcweHWvwbo84zsBxyxuTjgPfp",
  "key15": "4cUyxxV8EdX9DAdeavrjtQf61kgEY2mubGegU1goSV6ZuFudTn1wgPhn73bvdUcbtttRQj5aDUbMEAwaqLStoHxC",
  "key16": "3hkxYPmUbd3aPxo7eam5LMnSpcnCfTtKoz9UyAAcaWuy6uZcJGVA4M42WdQ3w9kvRkCBsWDH2VFASmL7Szd24Ee7",
  "key17": "2vHbnYbGkWFgKRBXNAB2TZ3ujNcgpnd1LTcHmKEUAojcSAdHMg3KvKjjFnw5TMRkwv3cX3WoUQe5e2v9TR5qmx1c",
  "key18": "Kh29Hm2gkHXUgthf3nuBHzrPRj1k7JKPXV8dvskGtiPCPWhvRGVzvVqBwaiWNaeo1dmpkbT5do2SZQpsukypPaM",
  "key19": "PMZooyXuw2MhRFvnhMv7u93s7rEo2sYX6H9KxH17DupVWhT9kjTm8LXgTsHPALnaxMckXXKZHnP2AdXRswGJSrV",
  "key20": "2K78Xb8kGcmbf4N1yvycANaNxn2ifg77iBpcc5UctjJstywrVio1U7QKoXMG3kdqTK9e3faovfiHDEA2KtA2iUeH",
  "key21": "4Emj84BYEYCcJtcca12Nr5QtRVMLhv1DRxCRE2GZEPnPNFCEEijWzt6QXqJgUMLpz4iUBiXt7oGUeiofxYRG3voe",
  "key22": "2h1qvNTk3wRmLaTyaLV8vno3k3sUrWfnXEBJugXLKBAJnYgE1eizo4nTNKY4vZPRp5U9hFQBD396haiMrRCNKzeN",
  "key23": "51CAW59pWof7mFpLcF1Yjew6MtTDfJw2P4MFD7Zf8KFZEyyhPsnZjz6CAyrPq2UTchjVgqXcVvejpcZ195MQcvue",
  "key24": "2NJN4LMjhM2PUrmjxxtca7Z5Qi4EngFmzNHkpD12ZjeUukQDuYX9i5FJkpXfqTGkrDrXTA8hVV48DeSbbPem1N6w",
  "key25": "4nQrGyYH6DoXMbEXnzHT1XuDHKkDsb2ZXVLW3pW4emNhxmKvNTLk3JC7HSMjKNWpyjhcV8sY6fkBGzMRXjq6ZCJV",
  "key26": "3rEN11KSzFYYbRjrRrgzjqnZEiA4nfbAvwiBJ4CLuyZocXTpDf3spBBsu9J2hGRbRzcZVbxw1n5UxmpAiw6qoJJW",
  "key27": "U9195hYDAwNjitAcKYs1zpc2XHLXperVZBuXgYo8GycF9jQq1ba6W3t8LT19RLtptCwEKzeHor1yaMPmV7YVaQW",
  "key28": "25ZZvmjv8Xo3CfhK6SD8Wd4GFkyUmenFsWJeJcoe9fVxPC7ge7rbZsJVFrYq5BawhBXjPYYaHTrme7otTLS3uqeB",
  "key29": "iqXaSYEpDNJ3dpBSY29jdEN3Z4PibydRjaW8oamxrHqDJbTX2AwbZDY6cvguSXeuJ7BsWbcArCBghcJtT5hcrdy",
  "key30": "YVBttpnabim9ZN6mUbNjCvTyaXe1oEzUGDSN4XFusUBTCtBzFSHn7DfnjtaPaSfzEeH9ayLtBuNYWaYpYbStGQm",
  "key31": "5NwX77iUgMFDwhmmkioXhJekzRqSVKMDAryV8RobTX7w8CF3UuN74yoZPri7j16fARewxxpSA5Dj21bLzEdhHE6N",
  "key32": "S3HiZ1cc2mcsmHJyp3KCojSzX9ZRgg4J55PRYPTafhQgKKqnr9XW8sK6GMGqhjLTifVZUsbKfAhCnvXd1qZhq9Q",
  "key33": "29KumaMzRiQT1weycsxhVcZgchbfwDdj5cgadCophR21qFG2JenjedFn6JM75aRVkZ43TF6oSxaR2sorcCuJVpy9",
  "key34": "1mKj8t1LUSqqrEer8RA3rowcCN9nUa3nsikGWRL9W4C9qASazACfwLuEb2DqECPmU3WWj3h9f1TJsmkK8qsEngf",
  "key35": "wrbhFhLxHt7pvMtGfNs5LUz6waE9hEdoTbrsUAm4XtnddUi6fVDKCq91516AwrtZtzTGVG9LKzTX6W2KHb5ekmB",
  "key36": "654JpGQhX7fgVPCJCzRCeFEAeyMohWLFjJ7HMjr3yW9E32hzht27nPuCDsUtmqo3YnETp9GjdiCEnNDfvyakBZbt",
  "key37": "5bmZ1qfmdqmuZFdDA1js62a4ABarVcQyWr1aqo9QVMQvJRVFosNhGNXsGgyC3aVBQFupt6JvdoytJszQ5rDKvf93"
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
