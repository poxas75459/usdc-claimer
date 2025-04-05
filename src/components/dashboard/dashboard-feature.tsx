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
    "5P5D7Rk5X26i8dApKjaxCVRjj74exa928Q98VTdQtwWwSkNU4C14QU1ngtsCU7d34mQ3Pa6F18otmG4e2MKbF3q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2QfrkTn1JTQdVA3ABQ4wHTa6wYcJuZrz3j3VUxHxffij13bMRDteZUCxhe3nfw6GvtxPv1SHXBZ8GLXKn9cWmS",
  "key1": "4JpiqRbJ3XbNxLKWJmVuUrxBNyzbtYiDBnEhEuaQ1GEpZQAmTPhdegKJXnu3baMnjvUpAGnxfbPnCnXYVM5mQxLK",
  "key2": "2wgFeB283RwjmrDfhbZw9AKSVn3xzbYXUzz5h9TgRRw1vNrJVXRp9fk1WenpEsKzy5jtd9xDhmV8FDAFoncrWXzq",
  "key3": "SQ3vprvnuUEGnrkceiSvxhXuJRFgdoc2m9fjiLWnDQw5rvBnFqcAc88WBE88U9AtyUsxDwwG4TtkSJFHuUtrbed",
  "key4": "5f1B8qBg9ND9P1C6jkj8YtDVNh6JPdb33UxZsBxAy7juwKg6cPugvGcmisVqaaiUJWVnxegxKNC3x8UuRFznppcy",
  "key5": "3YvTsLUdj8sKeU8UH4VYtuLvSTHvz2tvsKGKWonsiU4FZLruvXVzCjdWxxL1Vo1jZUSZWmw4CnkbzHx7ES2udsU3",
  "key6": "2PknMinigC3mm8YJBzrmRCBjuavE5sxtsAb5ke3dD72BrntALhL7atdjH4bgsoBBVSCfvq4bMrULdxyE4yx94NGE",
  "key7": "vFcePG3yAnnjDrJqv9m3YprBc8VRBsp1iKVvqFi5UaUVTrs645MgNK2ngc1acX2m2gojjz9TSq6JJ2w7Fgsw9T3",
  "key8": "3P6DF4N82AYgt3YQ3F6zHjfukVms874KmvVQSdRx1F2XLyUH6yhffncr5SDLALSMrSQsxQJQqyaweo4g4b83CfL8",
  "key9": "52w2TjZSRgaxUN4W7UCskPX7yerxLiSYXH5Kd9gw18TgQKSkdVwxhzP8HStcDzZSNanorhCLc5kcb9Z5FPnfbvn6",
  "key10": "nZUFxBfaHeHm2wB1jrJ2hmZPaFALqTAiQVds29rEWMi3JyaJpRCxSRYvKSsZ9Eq4mrgxi316kjAmnEw8kQ3VJYV",
  "key11": "3dKVtQmCc3e3xGqjq9ojSi6467mUaoQmAs919gsoovZDuUtgyePfnyNvYvg6hMYBL7W739BfiookAGwz5YL3sVvd",
  "key12": "5btHdga2fTiRFSRq8yeAPMFXqc3bfxDFgGzVqx8apSeMVXCkJX9QSu8CBtFb6snrkNjNKcUjwuFrA3ybCjGk4RLz",
  "key13": "3D2cqpxt3x2g8w3Vh1BvXhHg3mZjmeijodKJMsxn1WN7V13zJ59wAkFch5k4ABNYWVmkzRHPrFF6L46LjMqUaYaR",
  "key14": "61YNLZvF4icDrmfYe5Pyo9fZd4m5hwkgcaM7AF2wM8AzfTcQwdQxrcwnpxWLsuSGsaW6xBvkKqSEp2Ue1Zj2wofx",
  "key15": "3Ud4EyXVpRCtuep6tUostTvUkhvygg7r7rcsk9sEWSUyy1hHzWXk9a52NWRGAwW6jjZaVE9f7G1eCiTrPyXHgExd",
  "key16": "3h6NE4BhpV64BZdAbZPi1zPfj47m3w9zZ2YJeKMckyrSzBRAdvHDdYi3skwz76jVj9jQVJ32BdQL6U67gXjq8iyu",
  "key17": "u576os3e8s2GfxCpXkSfSz5cFtndM3YqUkGL9PJkoMG2DA2WnhhgUJ936DnBooC2X4uan78a3tNFcYbZZWmnFWP",
  "key18": "4hYBQbzUZBapj7V5yco8Lo8sNWvB1xKhPpMngwvtveaEBm4DWmAjb1Y47LbdHzztHZmLFQDFaz2Rd6MCGXwm1b1e",
  "key19": "3drUjbSaohfttdGLCkXpkqghYDnSXz3JHzRHf2Pnynp1omTaPxWLPuWZwUYFU4xksyZ18Msb2Pj9zwrktVg3SFRD",
  "key20": "3TmK7WHPory3vjgfFuUZq6Vagj3viq6LvfGndB2vgfsx46dWMDxMejDaKVsU5ygq6Gjt4PnVmXVEDVE7GSdVDhr4",
  "key21": "5LCPQzXgRE8UgtKVEU1XXpjFMD6mNUYMvdiJP87T9Xv5Npf8BZUk1eA9wffQEDcmpVyCNP2CmjSXrQKy6erYm4YM",
  "key22": "2D5wmYZwUz42hGpYqvFrP6Vde9nkzfNwwewApfM3nztvSdygKqRVrr3CyrzKDrpfh19euwnPRFHJzY72hpyRr81g",
  "key23": "4Q54KcFcCvswYQiiEgMnGPRLFBcqD27vyj6VisUhK3dLp1RFHKdjqUgq6YukuusZmAjWuTgW15QWH5hgdi6jyGUf",
  "key24": "4LzeSUwCALFRy2mzXP7TQSGm2EQEDgPN4oWVg2emVGg6SHmW6k16jaUHZKXCfAuHHGUCHw4wiQoqSZsBrv2BK9Zh",
  "key25": "5CWiFheetcXWiyRrBrWstaTgdvJ92zdwVoAfqiVaviTfEoNGCv1EFKYM99rSMXdETn9WMij2uBXKDdqAcHZ7NQVJ",
  "key26": "4yJBA1oeAxHBCVqctfJMM97LwWVnajKrKGqxsCGWJ9f5CDtfJJr6kTnXPJkUX63qxMtfFotZRJJbpMB7pExLtMUP",
  "key27": "5vbPfheokdsBbtd8TZmDgyZGg7LyZoVVudhzdrjZnfTx8scuJDowUjv2sAGyEUFPAm3U1gAVJxofY9q9VFPYtw8r",
  "key28": "ZUuU4bRHfwQAtafStsHCsvXKrVjvweyeZHXpTC3dKRNTUZdt7xNPjZTTJRZ7dMXF5v7Xoar9MKW71TxXgQarzPR",
  "key29": "2CgUudNuZWoJVvvbgzRfE3CrbGAGFv5PrNT3fzGKv4AvntNVf2724qxgXdXWMhHnyb4eCnXjcBUA7Eqeavkam9jA"
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
