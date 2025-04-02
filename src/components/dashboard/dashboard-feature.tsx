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
    "ip81D4xnCinRjJQgx1oUBjcfswRbvoamL3FoZBqCGJUyA8UtAeRUueABDgnEE9veYQaAxXX1hgDCMorkkufCtWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DDLZuo4c6XobTTbQPB9jte5X6Zhq3GX1pTWNR4zTJdwKiJnJR7kr7JQsuoUBCZWSXDJP3HKe4jqirvPRHTLWMvH",
  "key1": "569XJj3V9ELidzkZ8vXpGxrthxeeR1wVzDKrtwzeu4XNV1UWZcNsBrn2Nfe2kxWwgZ53hJ5SXT6uBGsvJnQEPEMZ",
  "key2": "2f6hex3Hk1Pg2TPSKepnj93JbNyMuaDNaHcE9Jwe2ekcgMLrYo2GHsZzqhVZzo4DxfFsWFbtJ71Da5w3ZD2LPph3",
  "key3": "479p4V5ayjgM4VoE8Vhhr3YWAcART4M4Ea1LVenWpBinyggtkgerA2r8A9E2GF7gEMYKjxa3feFUVr2rPRTxYDtf",
  "key4": "5YLy1q2z4VpwAV54KdScyXMF4y1Gwh6hmSLnYeemLsscgAz9RDMwgr4Z3BU2cuwLHVs2XC4vFGTFxEZBCXEYBVZm",
  "key5": "2XhLqR5RcbRZsmU6kwBicVnmJsSPPoyWtRB5xmL3zYbRVmkZBW9CzEUawxu3Fz5Bn25xFG9GX6wvPWtvs7AJYgdp",
  "key6": "oV6dXbeR9YgVgLxhzYfU9v4Tyrc3VJ3UhVHSdSHYj1AAjNfNzTEBb5dVBMQcG737Q6ZFRAk1DQn5aacS37MJspV",
  "key7": "2recuQaK44SP91CBFBue9qbozeb9KadQXHbqUvkwoq5A4xhmWTrY5aS4MZnqKTWB1tyVt87RWJmLricXzin6GNyP",
  "key8": "45puJxA64UKNonpu8q2Qs7ds9g8sT1m6ncfH4fmchUDJFvFLxWcbniuCvXhA9DMK6gZcnHaAwhwnB58JCZyobtRA",
  "key9": "45Z5PZMTNhP49z483fFwfMzdBCAzbr5m5CfxsnSdiH5m1CsrsWLMniQ8f1HqKUfunF3Z8DF2r1pZbLyWbn9kCC5H",
  "key10": "57RkNjvCE4skXKB5VxHnikkszoCrkYQGhJC9kPKqzhhDTZzUGmdCbZqv8aP87rfpYa3be57Z18mnFQAJsgbiA46v",
  "key11": "g24eS42WcTqtYBj5nWbcFtGeL1fRs1GavGm4ivU5J4LbDetPyNxT6qnAvoCRQQRu7kVwTtKk8ezu2QYM7YAdaev",
  "key12": "3HpESuhtR2HL3F2DMQ4GQ4EHQgaPDaRWp8FxbdnHf6QFAt9QERfsqKTsZfHmoDfw7PF8PLFKgfs4tGPD6uMLG28A",
  "key13": "282wSvfL52e5A5tUNN32didCgm61U8zkAS2qfR4SYvVjZys5qSEqNQdXchLNW2tuNoewGBww4QxyKz1wSbZXDDU1",
  "key14": "RnVYm89nSLbdwpb3Lt1m8qowrEDKtdibjJbkpFYkAbrSoC3AoD9xvvs4XdxaS9HH4XWPYBYDS8ZGgqCGqdZpsbi",
  "key15": "vxLzb7mg5T4hjWj4xNpSLLFBSwwM6mAFcC5pg8BUBfTgZSPa2mr9URP6sCRyieN3YLj94PRVvLEDUgBfbfT2SjY",
  "key16": "5uLDKf1qMT9YUq1x6LfSemgzjyGkke27NaVPANmqoXPccmDAb5CR8o2ZvKpqvBw6AoLhjLBwaBMVGBrS8djfS3E1",
  "key17": "5yi4ssWgHNGbBXzNr8dibcGR9f6i3ezMZBozkN3Fjky153freLuqLLLF1H2CSKGb1Nr4eeM9WafFdF9jBgrdvZ6B",
  "key18": "33LRf5zXCt85bkUWoTJgwsTZyM1deqiKW53A7KU2b1e48N7J5PE7gEsDsTgJiYHuvESHhUbhRZJEyovHSSLj7JRS",
  "key19": "5UrwVBNmx9nHtTg4h9WUAdD61twFr5RUMaj624DFin8Lz5chkcKddYQ26D7zt12aWHSBj7jhtihkiNKfDBKyagrH",
  "key20": "y21he6J7tCvKDKki5EUM9cR19iFZxbnHdYuTYKECcnPbkDNpfJ4vj3SN7e8dWeBfpDskEVt2BGRSFt3wkxNrMUt",
  "key21": "2VyN6PeLYJobDqNbHaHHejzdskwsveXSCcykk5b1co34UzD7dJBefkxWWX5fMYsmYzRKj4BXvKM93MepS5MHJ2yZ",
  "key22": "opvkkcmTP8XTx79mvN7vQKfvhfa9G9aYQNFEAs2DZxMMhtqsLznC4ZuVMV9UAyK3jLjw9ryAnizUvr6SwokxMsr",
  "key23": "61CJ9JHi2fw1o3FQuhcq5b6vE5QFhMAZFxRyw4gcfDKkPmWTYshKNxnSyN9YkCETu5CFiJPV1UXGvzhDVaogD2qe",
  "key24": "4Vi5h23srw3hVvPMiHmfzcUyBXz3RfZoCL898HZva8b9E6879ecpGF7qapQnGJFp7gJTwmPZRTZfnoy1o9Agd6PL",
  "key25": "2qy1e3gfL7sr8im3oR51KwAgawKWAAomka3CQd9WLcdb95iW75cfNRX4qjAqu6NbfeCdwUd9cUKjKrNPWUMmdEPz",
  "key26": "4HjEECcKMnPmtFauhcCs1rexvnPPmP8pdmXZ6NZcRSLpcGNwdpn9qK3peiLZHvJiz49ftmErGRZshXWeio4vDYuc",
  "key27": "3F8oK4eVRTkX1Vwdw6A7DqX6mnavMbKB5Z4xT1PYbrvpEXg9d4uBqpWK4FkRcF5kr3E7rhNyrLJGWnbKhxA26rRK",
  "key28": "5T4PmFGR5XHVgvyzST9hrpYUBV6sovaocSsySTtegvy3ao6sMpotrWLSe5FsCeV8UcVedkYHZU55frYypaCkRLvp",
  "key29": "2RnNuDp2sPpWJJZktxQ3rTQ7YpdUWm6Eg9UAg8xViqM647oHoocSsmWiQtKpK4fGh243QEKSpB1A8nZmgE2Ph2Rd",
  "key30": "CUyTJ9J4Xii4tL4QZFUH779mXMSwBmxwzfoGdkDqUgSXhHA5xGrypRCoCRtfcHYuwgKBUnAa3TtRuFx9tF2GUwg",
  "key31": "5iVwBbXKUd7dMDiqp7vMUiPndyLGL5ohqYjAvsKTiJeKXSMXxLuXnZ4p7Uk8dixVyopZW6e4hj2dpUyaunZPsNz5",
  "key32": "5TAJ6cPKhBt1Vuxxebwkzw3sgiJ9teDoFup1fSRUXrB1mFK8QAG2VRJzsbeTKfTFA2D1BMM4ZBZq7yPN5eKRzLj3",
  "key33": "3AiRbV2mFojKoZKkjDuwL3jVZwyLEiQXkjWPcMf4T32wFRX9UaAZWqFQeJFCpCY9vAsD9bN7XsiTH2EPYGhK5FiM",
  "key34": "eAB8GMZPrE7qLSV6pwjF6FbXofYBVxvrM2WrScifQDFwinp3r5WuBhqqsi8t1iLZy6qoL5eXFxydTvRrh5kcwTP",
  "key35": "4B5tV5WSPuoGoXXt1BZBezpE5v8vdZnsw6LVosjsUPLxWd9uL475VZGxiFbqhvURpAW7GN8mwN5fBdKSbC1p5ZU9",
  "key36": "HyESi9XVMKxzsoXk1qnHC52dSF9hvTYBgryDi6rBAY9xACvBs1iYxqSTR2toNSFvyoTA9vKP9H76Qj64snLXibL",
  "key37": "2P2q9LUKakqvr4ucFQgN84LqzpEzJYvFVLMekuQPPCmADgHRJN6UQjxguP2qkahQMDBVWZ4Est81f4im8Td3RJ4",
  "key38": "41GouRcC2Z6XGqm8Lns2hPJGbYMAUEFcTzQdAZ7rBZrh3DX5KCn6vDnkexwP1StueZYe89ATYkCwrgtWLfWYDsob",
  "key39": "4vjNVu4TgtDrLc82EYYtvKH2fZcE8MPu7ULpCdjuqquqFYqjGCxAzfc58kFpzc7chSxB22KhB8suHqz2r54ktRcD",
  "key40": "2TEhYTjSdP54AuC3NoQyU7tg1Bm78PBHgpnVk2K9fE1gtkeqCGmpT8va2kUCJ7PhzNwv8atCJ47DpNUpWDxF2zDJ",
  "key41": "3EzNQLVr7rRFJW4ZJHWUPda5RcijDpm3tHxoFxngAaCSK8LoQ1zQLZARQ7V399Qp3Pnkx8QQ2Mj2DLmXSZPYrrhg",
  "key42": "24efpg5eHgYGHP7vNiAh1TVoX5ZiEPqd3x9tNH4fnibp4UAsL6XnkXhyBtXw6mFB7XrzkmuuGFG9pbwcaarg4oQb"
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
