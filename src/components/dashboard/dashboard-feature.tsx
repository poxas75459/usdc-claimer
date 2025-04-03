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
    "3zfJ6RM5BVQ8zcAeWriQUDzh35tT6jrh7LpT7TN5iLx1v2PB4cPQQggGsfumY4sx4V7NHmgZi9DnZSV4trN1gkpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27f3V2ijKmG8sM6L4PV7GFv3xHcgaesbv2U34k8E5tapKyuQ4FWvRcj12Hn3f6gL7fYkWANZKMeCtP9jMHe4NvXd",
  "key1": "4AYfNX1tDacdndZW9trfWipNTCyt7VCroAM5MgdJJJFNJXcz8vKFb4jssVHUGpmHBReXwBttRcjis23NZvqD3DSk",
  "key2": "4qCQnCjR1LoE2BhcshPfEYR7GKevgqUJLc4ka9win9hHpDtr9xRMLVdXz9u8EguvyXaVwxoP2RW1eyyAZKmEesfQ",
  "key3": "RtxBxN9z8hTfoQmzPKDchV3Bwk8Vh5E1yVawwW54BYBcKgD8jvgxPu77cuBaRWB7FMTfpkwKWHAXye3EschxYNE",
  "key4": "5fUVp8tGpW6J3rA3ZQgYanvNMpUETrSY4JLmtjiRd8weAeukSZ2BBauqVuNhRDGJqRSU1t4kMymYvmgs2AU6nr7X",
  "key5": "sAjNWdWyo5GC8EfWMpo9jVyDDuBCsLhDJqnzDp3xPJQCJVoJuXsZA31Sgem3k5BQCF9xb3p5ySx9Z8JbW65T37H",
  "key6": "qFHXBFtt9p9fZM4HGRdzv7d14U2eRb3HTuaXUuYw7xDASicugGpyGXsm4vSo2QbBo68mfHzj4Va2Pq6gx4pbEqq",
  "key7": "4htB5Uu8bXzS64dcuSg3bueWoAoEm7jwvgLrQtohScyDwYMY85fqDzaSLefDr1csujki9BCfbi1Mf8Fj7c7YtcA2",
  "key8": "ABGQPbLLGCG8FmfQri6cjWfsVZWgHFXs5WFDRmcd3Ry5DK3ice57AEsueMvvKjHwQwpyNxX5XMoQX6rFz2KbhTo",
  "key9": "42nZN9qjcvWkH42621Vrz27XoV8t5F8WaQF47uQjHMxdGMzLFkHu2j8ZeHHh5wm6cdXn62qqKGeNnzwaRrWqeMvC",
  "key10": "2rar325Rq4PK2VDajjGCvZeMc2PBiyS7arbtcvkhy8NECc9hT68zFssfQbhsjBTJ3ftkt3FQouUke8afgKyLgoEP",
  "key11": "3oRyxRTR33KJKiN6XiF2QEUbbA6tSy5CA7ejoEgWuqN1AFzWSKSzedfFr8dHB4PYe4gHy43jJwycfMTjzCHSaX8f",
  "key12": "42ChNs1TCqUBkLQCGGJqqxchTmGYwMqGBbBry3CcYo6TJNrKLffkTZVug2fxKYJMjJ4U5a6tiKJcWeSVPX7f6epL",
  "key13": "3e5EjC5bdrhR2yAsRiBf2qfsW9LVqSYT1g7p8CJnV3MjNddj2TH2RGPnWm34PjQqyth9BKMVxNGZHZ97Eb4wN4mm",
  "key14": "ccs3ACranY1St88ER7nngpE612tdDJaJ5AsMSFjgUktGrRAiYDBiN4MAPjDb72uXKhEbXCHRFYGgtKbR3CGEtBX",
  "key15": "31x3QPMZcLPvQH1b6U684S3TFUNMb5pJYEX3S7avr3iqurguTdq2LNeAedTxAVGahJkjXrSs178yvPKWuKruBBaY",
  "key16": "2WjR4aqHijmWLdK6fJKCTG6sXsrZw2y2ewMasuyp1QoD4pjnNj5EUxioRPUbRYvXCK77vYnjDu8MwW8AAjarfKx8",
  "key17": "AeVhrSXS5AQX6WwQmQyjmMHu16kFJhBYSiibpCtnbfavWZcmqzbjzcxQbUvvVA2mpG2vbay7ZLMzopwsgmHhNLe",
  "key18": "qd6PbJyj8yKdxEU66w36DJrEGY9YzFVUiHUeFTawgfoce5tmBqcpnro8kLfgmr5WNzFQTGMr7ihSHt9B8CQ1kPE",
  "key19": "5VNXURNSTjfjhFwwpnBQugcZV44eereYXQtFiH7a3WgLMQA9qDcVUrLtH3o5NDbcdXY6xHDQbAqXsxvPSW7YK8SQ",
  "key20": "2NhuwuwmtyjcjkMbJ46xnpqaw5r4EpPKjLYJX6dV4wRxKewTtnwjNxBmQdvfptsueM12HoLfWj9frUHaETMnVAke",
  "key21": "3FZK9UrPvVrsXqze7Bs8dQcwat2dsXEGCXquC3met4PzJEyCTtJNjFHeUNRtEcKbaZzCNoyKQNMVy5Qe1b5mvaia",
  "key22": "c7hfn75bKmNLrjTZNsGDhTqASK5ifmoRpT3oPgU52HWagsSxZNq4Eyo9HTARABuo7PRHMsdruwPK9qChoGzjfVs",
  "key23": "45kcDKKsWxcHPdyb7NMjkXWQR6gkPQRNpsMP6vGuyhRfTaV7F8HaQj7SBgvh3ZYwya2hiin66kNFiAzUrHAh1cG3",
  "key24": "pByyXGX6m5p8Fvg5iAqTsup5FLTQoAfznHkcZEX5Fq9vR6wb5W2XShB8W8L8ujFvym4DGHBS8ybyjKzeyrtKP69",
  "key25": "3VHFJXvJbrYkzz1Qs1thZkYQSaJbyEP47gvsd2Mu6rNaEam113m5WURTh4BJ6LrYMeio2LGYJFDGfBFdxFM6Vrm9",
  "key26": "2nJjqQbWgrMEnkJPGYdL93xKgBdYxGczKfPk1oBr23ZZGPnAEXUGW7G7PEmWRqWSiYYB5B62uSTkD4WwFANVs557",
  "key27": "667QGgeBr49ZSwJeHviovPNEmyaW9BnQiZSwa2w1CvwFFYQ9H5tmovvLtPfGYvo1sp9zpqhym6qRBe3dgTS52SGK",
  "key28": "3YVXSXinEWJPnCg76QxzBZ8yEzz4QEb9bcpRLL549NvvW6EYDc7JDJ8URVxpLMpYGTjaAk9x1yPb56xYWaNB4npV",
  "key29": "4poc1uezYxBJARtqDCXecyGyShLEUofza5i96t8FN9Sm6136NcQMY1HTXk98DZfhtQF5MW2rMEMpX7dr77CmhEQy",
  "key30": "6MVMd9ejPFpExQQcTaevPYnjFLCSrhxsmrjBb73mMt4C3y21i8JvYAUnreaSUzjm3GDR4T6d53V2fNtBDm62ktv",
  "key31": "9Gju6MhGJGYCWjLTqUroisZH8kMfH8upQxqN2F4EGVCDf9MtmMVmEgYarvPmPrPf1RiDE2erWQBdWSBT9zWVD9c",
  "key32": "38UkWjFAj3SzqURckdw3gurUpegszHgnnU6eK8fZkH9EEoDWsRRR5wKv4MC1uhTo6MSTddyE7muoNZZ6sesGVdG8",
  "key33": "4KWEzFRPHi2xy7MHY8tchYNsDXNDDvLhR5ifzbZ7eMDFxMQDkjyqes4FGfauLQhS2PH3hpz36AncoGSTHq4w1bNL"
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
