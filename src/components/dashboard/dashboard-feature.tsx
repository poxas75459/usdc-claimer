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
    "3bRmADskegLExAbs9hhZPmRPBVLq9ds8vxfZK3Jj92VtPjcyUPe8PgD2bjPZSYDYr2ikiXu1TxWH2i8t5Kyef74F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46akTf2tfySxPy8fLf1ypHK6mZ4Ra2X8Zf3oVeQWYaim19hXdUTDjBTs2ggYUC787ThJVSmBCPUEg6YJjSPHsTMw",
  "key1": "621EvkhcVGhvwWfLdmXhyVQFcUPewkntAsiHkfBNcLmjzUHBZvHi1oKd6eBjGXqATdjj15gKprDeerG2ZDBqFfMi",
  "key2": "3pXnRY7wa4zSNq1ShpDJaWZXpZ3ux2PHiSG5WPboYciBt1XbP6TdiUNtw8CwjUaScm1qj2ud6vSUToDAFzPPVqhA",
  "key3": "5LnU3XzoU1jLromqFuEHrEk5eWtqLiPggCxfYLggc5ZyphHW3gSULqt4qtNeLXsYztg8QicTWrASYcb15Ukph4JY",
  "key4": "DZWKEhAqd1X2rg9Rtz59bDeA4Fwvr12t1xAhcVtDgkxuhCz2ZV3qfn2YHbV2TYv8Nmn8UTCwHthJo7YEENyzswj",
  "key5": "5HyTvuQSSKkqGoiLEShu4c8DdoyVTwnoPKfeQkpXc9DjF5qHMiQFHhrexJiWG8ourd9oDtygxJJaXBUoY5PQo5ct",
  "key6": "4eQUqE5UGLDZzrGEZq9GUS4RW223zoWGmkKMG795rfbg5cReHbWNeYbZv1JkKq9wf4sxrQYUruRvz2AFhF4NrLbJ",
  "key7": "4cmCBYCVBFQb3wwLYnwcwHXecLjbnJUPgmLW83oYHFkQFXZH56v1VKA2oeuc5fZ5xsU9Wng4YRsAoF9Bq5cR2MGK",
  "key8": "Egd1qeh69zSfPpsKZkhsMVvvk7GEkxBJj3VYUUj2jDNdqu4RhnMX579pcxkxqutwBuGAh6V3TjGVrhGpezNa6Gj",
  "key9": "4UXr4CVdwoz3gk7LbW3jKnsv4WYWARb9oM3nXkjzMSa7o8nCx8BgzvZRyTprTHnvcpXptWPkqKTwEYBMQWFQUZiT",
  "key10": "kuyioAMYYHhYoF5jFiUEEmmMgY16Qz5AX3ubzesmGfV15PZkDkhydLtQgE5cEgqe55L7cedASFLh16VFzikvvDa",
  "key11": "3KeT4sLXpUDSUTEJn5igG6yFhahj8phv3LA7AyngXdnDSj3RA4ixySLHYXV753uKmjRu4jVxUdc8sSTf66eQZejv",
  "key12": "2rQv5NTHLNJb7PckiNuFbidaZNrRUT4iUiYgpPqHGQJoPwz7RBJeHs68vapTufPmpBpvqeWGxeg89EuUAcqsW1C",
  "key13": "3BNJcUMpH7bfdkitDnEvv686tg5eujUyLYwu91wdBGawnixzMra3JSi41SRyxzRKJGdkCFXrvLLPKsCNhPHMPBgf",
  "key14": "4yF7MvQhXvSHLz1s8FgMRBLGQpA3q95AqzHJdXd8rSQHh7yNAHhBzd1yxhf5EAAh34spQ3dPJGzGd3W8ZaiCGqnf",
  "key15": "2uCTtxm6jiN2pqNwEuK6RKpzeZHfHsuaeBrhqZCDZjBdTMBLYuXbyQxxgSsw7581tL1ehWK3AjGwVsdPAJyKJH5a",
  "key16": "2RzyDMY2Bt6genuYHcNYhSX7HWwpCrDboPBTSPPvSVgRLmxdyPgnM3QX5trDC6AoyKBGFviXgS81Sz4fPid1p4tX",
  "key17": "rVcFxgSDe3BBRtKB4TybDDdL8K6pJDNitX8dte8d6Kw5yxGyAq5tH7EP86CAP69ZpFM95xouxpGy3AcphrVgEkB",
  "key18": "5YEhjoqjVuoc1e1yDmPHTtLr4kKNCPRfJmyqnmZ5FKTDN2L4azoVmAKf8wHJJbeD13Q1zta1JTVPppomPysgFtDu",
  "key19": "4ur7fuULh8csCkTZ8JXRFZnsqgU79x1rMsCp6ZrP8RsSXvP5LMDBaCwyPuq7eyCa1KqDrDsJDTgeWGB28zPiy1bY",
  "key20": "5GHR1GToVTRbxPXH8nKUUKztugJTQXZVjK1DHtLqVGFhbiouNMD2cKnuf4tX4ZF4uS5pdzyk9KiHErkczqX7FJqn",
  "key21": "3t9WcQ5X2qAHDTY9nVdyy2jDEvdkM9QSCoknwpfXQnTG8gRjandN92xV5RLWHCxMr4yjQSzN4Dfb8um4gWqArp18",
  "key22": "4qHmeUe9iHGQ7ZR1SpSKTuSyNEbFKUBaQ8KPgDeJjv56biaU4RRkN4VFhsCLtRWn22zujXiD5mUpfycNpDyaQaAn",
  "key23": "51eh6EPHazBZ4Jn5EjHB8uxyGbEo1fbCmeHVS7wb4FtMfr6uVVsyZk8743W6SQf6V1aMrbpZntdeWLKTha7yAydY",
  "key24": "4shVeEvqaaqwqhhPfVB8MEPyvZWpcdwjYoV5nacdnHmkq2wKSvcWYHeD4stPvZkm1kfcCsoHf7mZccJ72jTeJ251",
  "key25": "4q4RdFZn3ZiR6ZpqnSttRQjarybq2gy2ifVLRUeGAMq9vXdJCM7YLkx7WQzBd2tCmrGbKC4vtiXx4fU28LtCVgud",
  "key26": "4Wmr4igCH4vN1Hw7xhYznFVpuS6ZLjjio92Vaut3MAY3d9kUZRJ8LwRctEkvbqgoyetuCzAHLmeazoZ5tcuiyS9J",
  "key27": "3ErfAMyVP6kuSicdJZZFr6JeUCz8JRDD5WaQWCnTtyogtzVD5fdZFwUHaHsMVothG54Wgc2qKuuvpNgkDCzGH8Y8",
  "key28": "3281cUZqygPrmJvS1AemV48SbZwydzNHFPnNQWqb9Jhnj2ibuNCA7BT8Mm3Xvb1FtsfFiyXutv9bGSJ9UgA6pMEP",
  "key29": "2CmfB9vDiYUdKWQfM8hbaFqZ9mqL69jMBi8ktnHDt33sarFQJ7d82NR1JajFxkFcXhYVfoCaTygW3QqFCcdspuuf",
  "key30": "3dPE7E35cv7RhaHtEziy2n4SJYnSbCCL24WPCL4Y6dphNCGqn6hxXy7LaxhsweQZoyoLtL8g3L2Wjy4tZX8aKBUL",
  "key31": "2TD4ojRhPQaoxkEzfEmEj2izeYQYKwFJmHUfoj9x6fJAXrBpvyEndo5hDg1nwnQSWuNRj7KXAfxGScbYwLfhLwEd",
  "key32": "2SQyTSVy65G4W39jyEC7xGvdUtXgyHEsQbBbk1r7RgdMthekaY5F8baMKbmTLzsipTVWg4HzsjfCWJ7za8x22DEU",
  "key33": "3q4AXpMqQD4kPNEwHq9qetHr5E1C3y8VQxye6epiWQStBCvt64hnV3LJYg4UkPtD1ptVYziMfVpNTAU19EY4KcMN",
  "key34": "4WobAmsPFnfAYTvvrSyTmK3NMbSYb9JNgX9EM8s6i9MgugAVmrPSko6RzHEDEijP59BXKzPwvaz61rKqaRDNSmgP",
  "key35": "3qQPT2BhSkUxaMxb6dEu9cDRQyxSR5n2VoXyKJcqDoqb5jMmVhoSPsoTdAuf5aLtvEyN7BfUH1UEQGBuRwq7AKUE",
  "key36": "1ga2TvDM27RkqPFhWAwK5QHkdm28LfzRC8XBTZ9yQ266GhdmvTWsnR6fi1ahzQXZkyDMtKqVYS2SnwK9vpECQDH",
  "key37": "5AijF1Ja9fbRdg6tW6g2sqNKUmT3o8EhFFsZwUpbivumUNjzmiheCP2TszCXD4KS3krWqn294hNALPiuabpuXTyk",
  "key38": "5oC5nkrUFPu3YxAnDF5hwryfYucpaT9y2YfckUyoGEFcm8iPv6oTdQ6BkBkPafQvvHR3nCBYvx73zKM2FQdUdBjr",
  "key39": "3dcP2ebWD69W4wQ4ta1qPWXaiMBYj3dFwtzHtDpegjp2hkpYF8n5CucdJ1w6tpYtXrWQh51DLwpKMj9HPijWqgwH",
  "key40": "GiWFDXJxxB6HB7PTyjTV4eY1mjVLynwx9hQBJH46RJCbqVi4fi1ZaKvSgKtHG8wtGUMSjizS6wpzgj5CrwqnXJM"
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
