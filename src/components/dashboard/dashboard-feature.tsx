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
    "3pytYheXTXGrA3cQdDiJmqsrv9BYpfuPKmj7kr3ftETfTxSy8NGwWLM95yvZLgTEhw5p8JJ24AkoP52UKVGjYdpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R6DgHtrxj91p14fXjWKt4vgM11byRiAYnjAWqvxShhDhpEdicokYxYAqk7MZJpNizYFLfJebLPmXATJcy8XjxuW",
  "key1": "3q26MkdxcxwMfLL3zcE4fRqpkukZMwG3munz39f51QNvrB2jGymGc9Gj6TKEeDLp9hMJHDBoGg111A7d751376HD",
  "key2": "2Sk2d8QkW5hJHu62uMCjPjpAX2EVn6r2XsrC91L59HUBsfGBZpRrsgeA7eoS5qqjfuQypXSULq9BjvVygrH31iQp",
  "key3": "56z2EvzX7Uz1n1H7zzirfRcvVTYBUBydytQnRbz2GXYz4bzt112GMYSaPRgjXz8AatYXziVoKrYdY42vKshkUy9D",
  "key4": "23WRcp8SXSarkpSLDKkShvFzHxMrDoCwnjRdyYL2TQEZxgnFpxN1e3UT37UofVs6HAb6ewrCZBtt114nchzESKfY",
  "key5": "4yxriDYGSn4JDY9jasyMQoUPwLKE9Hf32hz9Bbh2WzvWGq2mQR9DiHdXhKnzqYp5cF9VAwYwReTCJsUYqWMLfzns",
  "key6": "3ruuNPxZgV2DG5SuqK7eGad3umZQwonH5VvoygHxcQB585EN53Auk5uXjqX8VKQEBHYQapo3QDCgTmPj94AKembg",
  "key7": "XhEpX5986DgjcupgK2SJJRq6E6AJTaM2ryXvzb6iXRFH3UWuas4Aja7ZqWmB93Y5sWsUhNejdQ2RGgkT9VFmdw9",
  "key8": "3wb3mr8uwhnZJ5pUiAXh8BCBTpNREd8synPjMJzZimjQhAtcUyz3ftQ8v9VdXFLMY8hpjiMLc8A1vAj5bbfPA2Au",
  "key9": "3s8CP5SD4SZ5akWReugqcV97oum88REjBQU1Taj923pQmNYLzXczD73Tde4DdGtv2Q3BgUu5tvDuJSBoGA4GTBtA",
  "key10": "2zuaQywvzgfMvvDUwRN2TJeWuNWZogFQrBoD1xH34TaMyP5UYmA1sMK1ENPPUAN3jNQyVgJj8Sys8qhMuKFRDepc",
  "key11": "5h2KjWiArTL5Ttw9ULdeucRtmQJzXdYHPZNtXN3VhLosRaEFB2BA7eeeAz8RXa1FijrQLrMaBTTtRQmgfgWWCP8L",
  "key12": "5c5gAGTMknjXWS99eX1MEZoDYCxyALtrNyQQaqQsmR9VqiR9aib9sAyhJbk44pgypS9aaQVWHn95nkgiy5nzkGu",
  "key13": "8eBr9hcog8Hg8DpKhmTTzR1Vim961MNE1vi6C6KZY7aVNvZdRV4ieYm5WEDXDv8TBuZLEAhiK8E7bcUD7YUT2h1",
  "key14": "EYBeZShR7tstqQZo6F2x6ebtpsx6KymB8EqUrFFLyFqmkwRc2rL9mtnsdf25UZpjLdQpWGWU9LeaACdvHrA7v6a",
  "key15": "3ztRyjY6KPcJmVprFBBzZ8t9XUdazZNXred9yjZ9o6pwY2SY7tKrG2h5bF8Us6dzaiyZ3MR4Ev9oKaFXdDA5CWkh",
  "key16": "2BBBrQ5vLtGf1ybUpP5VGFMWxS556gdtTpY86cNhT9YRMePPAmarb5Bf1kwHmy5pQfQKMAqjsWYhbxGbY15rV8je",
  "key17": "5UdrUpibXKD6qJMxbkAZ4PdwstKdq6uyo5DZN5G77yeY2nQcSewfdRamczbrPSU7eX7Kc7L9XXLPDnHkwG61QTtV",
  "key18": "4WeHNeedo9mCXC1vKhDKGLvtNr2g5vJGQHFTT3j6EQxcBBewUgy8Kdmc2exLA2dMePMBtN1L5iDR2FpXxhXjsdqe",
  "key19": "4exfYqtEHgKjtxGfFvGVz9Gjk163pPbckYg1L1hjNg3jg2JjFiRio1oYap9Z31BcQWP8dgRt2f4BLuCaPH9w3Uf9",
  "key20": "WqvhyEKTe4RMvFwEoymgTk94cfJAS1iriMneK4UsEHq7WcfwgodhFq1vhjDbfgbqWvxipNuBvVMwPhKDkGwjNrA",
  "key21": "4zuFDj6Ao5PYdhQHZpnfnNsGmAsyJKKddaAW3i5zQAkeyFBfj6hLdygczZ5PMvPRpc7HyeQf1Cro6AK3zU7LW4UD",
  "key22": "52NXYyWVGkSrK25PqtdxdrMgq8e2T7hNvbj4VtwJQ1arqactuBNzYXMumuEKDent5ETyVF2SKRVJomaumGwZzNBS",
  "key23": "3ZwiKM7Pi8NuKj8tSUYTyLz8ee8hZU3GRCrbiDnXwuWa8UZEWc1jxxM8mX4CkPP41iusf3atCMTzf1ArfiMDxNVj",
  "key24": "4MVWVTe1afi4Wiu1V6Hj5RJGUXUWnrzrJfzBtPvnMY6dB9LHuRW4mdq4LfhEjsd4oTxVquGEqswGnhEvXKrdyZVN",
  "key25": "5UK2ZohUBCntzP5GmTSTJkksPT5qaCVWZQ2392tbn3M8MEnWUn1YgEYB7B3M34hjsJoCjd7qp47gA1wBSoY1xNke",
  "key26": "2bgChXqQocbvaj2BAqT7aNQeVx6KDapmybKT1YDchYUsqfy1QzScuhMpY87sa8CuVCRPcrPm2QcuFscvTQGkBft3",
  "key27": "5S1FU6SqEgQzbBfmqWiHdxrHxJrx7tJKdDbV28VdNMzwr8WHAMHJw5BrrbSzFRvr7aCf2BRLPQwewpb5FtVDSwGM",
  "key28": "3UzFPcxJi4XSfy2Naq8GZjCutynp3Ccg3qMq1EFTCATpwL9NT77MzKyAWz6UoVLnMd9GThmLnaNLizZ4GQHSz6Q2",
  "key29": "3KHe1A8zrjXkbextTsBRzWJNk8Ah7Eezg8RHX5k5VDPUo3ERFUL5rEFLeeYsQeZkqTf5NnXV9YBRrVdjwehrxmec",
  "key30": "5AErCPh23d4i93oQX3rjx9aCmniqiXGEayBAMvTS6NQkHaWEFYNH9dC3nKVnp7V3RVFKTezBPwioTKqJrrhTsMGd",
  "key31": "LvLWmbsnxNhYz2yxAFdp5jFFvK5QMQ1bY992BFK6vWPJSKZtkixEw9uy9S8mTu5rttU3RayadLb8GpKcddA5dJc",
  "key32": "3nzW5EEaxSu8ieDv4jLqdF1VJstB72y4HeTv1P6CBk9UgSA7s2LB8xwAaaKZXTbBtuYsH5q3PYQ3XxNHQEwk9aab",
  "key33": "4zH85HP9WBc7uzAseogrDg4jhL68jQF9KQfAxz3WKduhd2imvoU3TKzypj8EoswUoxagfqmj56328Y6sTTx18Hor",
  "key34": "yPZmrmrKm8BNmTnnCKZMNmLmEBN5Hei358nKrYEZ951mKx7fMm4zFS3Lsarw2YMWKxBK9xV8j12fc11kxVEeTb5"
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
