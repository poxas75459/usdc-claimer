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
    "55USn1R4S1DmFZyoJnGmitFftijtPDNU1n56KKNJouSb9kKcSAeCPjBVUsY98Phco6aKwtfY44NxRufXDczQawRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ln3bh414damaw92cwuGQNopijC4Ubf5HgSAziCpvMZxWDJ7hjZRradhwwfCj1duGrTTRMQUFDp3tD7H7TvZ3NwN",
  "key1": "55d8XR9vyRF2pSNcrPx2fq3rGw4AzU71b71RXca1C8RgeKFgEBNou3iSQfWp5mkvCpgtT9pybviucjeTVz2nhBy6",
  "key2": "2ThLLXBxDW92wEgeavYsnYvrj6h45613YhZjvrcW2dRJ1vPssAFbHDsDvucjNQPQzQPtdH68FvLBUkafCCtC8Ycd",
  "key3": "8qbct4a9ZEcG4epXvbTFR3ZhnRy5qvLYGnzYarim3uLqSwUWzPaLLTWUhdaCxak5fbfV1gKEMsNRzpr6wmczEbM",
  "key4": "26xygHWduiF9US4m3NkYHRVVR3EV5H8trizrwaxsrC5w64R7gRvWUmYJeCKGcMEyNWDTVXxaCrBaZdQUK5bGraaP",
  "key5": "4UWxe8q3Gzucr27aVQyDftqYzFnyTBfz76ZreaD3Y9oWpbw44wU3QbEMXWWHBHdygfWM6oWUcvEvpnHUruhEjBGw",
  "key6": "5Ss6LLtjznmRAeGA3HazFmD6z7XkPghswpj4XmvfZeZQYq2Wbrd41A219PLdfSgPWHKMc5KgTuXFT5dxndafNEJo",
  "key7": "3BKXc9jMEycNDETDdM8ZGCicZDeTMFitpBUAH4pzP7FyqZZTeGvNpJXRvmvUZNSRgDnb9DfqMDzZmvPcUYH1dTc2",
  "key8": "kHAkv27Tn9WpidKPEij878Yxwh1mWbVLC3CuY3SuJUJTs8g4nryKqddVCHzbCikoBDFZXyQdG7Zx1G7E8E8TvkW",
  "key9": "594qJfoAmC7vVWGVP9irgYgwVtAa4MSNerFhT1RmSCSXUoqpJcH8ZekP2x6g4xt9H5SRLMXUtpr3wkAWCGKes9NP",
  "key10": "reA1Bd1nfBBxMp7zMNwG39EVRWypzi3HA6cEx9xri6hH2Ne5bWVPcxxwdhn3ufmJm9bPJDbRbk6RjWX996bcQmm",
  "key11": "5qvyXfhUzqXFNhZj2eFMzc2NmsAsaJpMELXSFPrXhUJ98eEL4tc4RKEkoQPbpgsvvJgxUCHpU4rcb984LfvkpF2F",
  "key12": "22kLLcPL4uksyVdV29TEyAun9KWKu6bq2CbBY4VdP5FTD3AXXuhxD21KQEVJ9NLPzW6wVTncShtW4ammQbGkE1J4",
  "key13": "4M3kHAzKpanoCyqaFAgZg1mG5EThAYcCpRXaTEk3qBK9aujf18dX1n79HAExHhPzPWgvkJKMqoK5nHHZmcxLNREC",
  "key14": "3owuTx2PWrUqvVQvkJKjABJcG1WQQCcUz7rAuEoQ5BAkEHj9qEbiN7EuBuUugBHUvsZb5fdFJvGTeTtz5Lg89T4Y",
  "key15": "2UfKCuePUMbLoVP9KihZMsiRRPPmrbVgNd9RYaqZs4xpQs1HhqL8FxS2SAdfsVSBro7nzEQJnNX8B5dy2HNPbsUC",
  "key16": "66S3RCVpJd9u7Mc3AyENbkhsk3BoMAN93DvEKvnmn5wf5rPReCoSULHmz4g1fYPHEpmhmhaN42EGv3QQcrLtn7vQ",
  "key17": "46XXhCque1nGE4Xfj8ENd3ybRZGEAD1X6JTeRtQDMHB6vjaXJH9JDfVHPKcjBdUV5TcUKrW5S9gtz1m5mry84CTd",
  "key18": "2PZsGqps23NWx2GQv489HAXwwiWfgbfz4JWTLKPi7ggZ7y7yAKuQfdniadcowQZj1KtjfdLURa6AiLJDbrj39Kab",
  "key19": "DEanby56c4JisXDLbEvkNwHRapKZfKcZ1ZxoNisJe4MRS66XnCmE2PShhnrYKsnYC1hokBXxrsEZaEJe5vFvyNt",
  "key20": "kK2rHVTNiMP8hcpGtBy6ueNX1v2pm57WReVWdDKECF5QJ3wbi4GD7EhiEzfAZMjAM8VLHxDME5Ch5QUkp2SMar6",
  "key21": "5pekcU3UWY47yXxoXtEk1Po8nnDkUFtUCki4RfCU5LQCGczQvvPPuHR9U5jK4b9MNYvgz1XLngwgZBHhjAdudPoH",
  "key22": "2gQ6gCxpsLCV993EoN1eqqJ3uSp6UMi77rDeZgaEQJQtLQj7kYjuFSFKtJnjcAiuYQEYxELs3pYD7Nexq3duqMmP",
  "key23": "5cm7pWERmkz4b6bJNAhTaDdNoS3HKgf9SnX8jrWtesKmzzmDcSN1vs63eSdYNo7YHx6V4x6PaE2U868wLwPFFf1n",
  "key24": "2yjeCzusHLJTonsz9D6Jch5HgixMmWrkVXDnR7f3ZBUDRBmShypW1XBVdYhhne4ewNuYtcUh1FSX2oUaDFoRrJ4L",
  "key25": "2ZWDELZLPc3bmB3jJuJY7WP8fnMtY191PEsegDHYXQoZKtaEboqkYi82oasbkPqajuXoo8T3QTEiGDmCBqW1ddpB",
  "key26": "46zzN1CErP5jzWS9n4nekZ21EbxNnFhQxofhgC9KxHyRFe2zBdwoHQ9gZC6i7PAuhA5etbeBFsCczs9v1nuY53ku",
  "key27": "2JsvwAwbbuBRQQvZJeNt1xHZz67KQD3gRckzt5XG3WGF4pmbK6sBatopx4QTKxdkfu8u5pcJQMF3Xg2M96Edp1CU",
  "key28": "Ln8KFUrrDMBxu2i3vDLaqvYTF73VuEHUD78sVG9nQ4jWNGyGdCn8tr7h2eVdKxnJ6F5XUxKEBmDFBsppPeLagPz",
  "key29": "5MkPPpCT9nFo7wkCQ79DMsE12gqPaK2yEnJUjzRXmwKy3aCA71WzJzDByxuNnj3k5UYuzpkXoK6SjZeTDTKaj4px",
  "key30": "2ob4mkmUhpZqdniaG3Cs8ia8HV7qf72mrusEbtanoKsnUj3hsjfXyY7TVhK91VYX3BYj1BspS2LJtnF2rPcoz3Ng",
  "key31": "5ovXrNvppfTaRcipaRk5SnproXVRshHuGvNRoVZzfWX7XmcxaByi4hUaipG7MRaxY3MR3CsuHqZzieu7WP7JV1iQ",
  "key32": "4XZeNNgnin2ipH5fv7MPNYdYohGyVfMsk76ehD6ecnmMuK5M2PnvF5Tvf9rLt1NMoAxzjB2vsjzvRjsPfQegEkRK",
  "key33": "2NqFaivHVfXsmkjDpa6A6ca82VST4D84eemJaq61uqMnewc9s62yQxaqRf5XoS2n2kfuD5koZU6Vu1Yv4Gd5pGpy",
  "key34": "9kJyLS1t8SJkqSLoQH7QdDs3LLTY5xDLaiuEUXrUgZFAjp67p3fyCZHtzUxFxjPXvpN1cUAMKkuFNNgdhe7AeXe",
  "key35": "3RCWtdNeiA6ktxY5JcBthdfyFr88Jwtr39Fdp8K8fyWu5LNepCEKTQir27k5EQzFxDdcxeQkVmTRcSaL5n8jVrUK",
  "key36": "mmC3ofXxNUABEo1dWkVaPUC1FkmUshhRRZGteWRyfpUEKTUL1Y7iiMBD6xfuXtb8G4smss8QGPJJNJ52nYnVdAz",
  "key37": "4PZwoMDdtfa6FLTtHT1AWTQEtaFN1TDkbQZNtgQDPPeKdJ9uYs7PqaRnVxh63NM2XM4agjSTcqtfsA2dDTRrAAUv",
  "key38": "4Wa3acYWyNk1PtDJF8e3Q98HbM15sWKuoBWa3sKKpoDEGPR91q5x9UCyLHyLnwhsQGC94QJH9jNkWUwvy8r4nFNe",
  "key39": "4HZCrSvDbaRU1WUJkgeH5VoLvdWdKoSw9mT9aG2zrQqYEmHzkeGMQcXePFY2SbSNnahLuja4ynEWhm4UtyKLfEwG",
  "key40": "4edhkFp2zfYDayw2oudmGjSzEoTtRPNt2Zn7uZjeK2bQooxqJMYmnaZ1n6jNCwuaxbh2QKANyxgtLtrKmBRP48d5",
  "key41": "5ynSrvH81dFo9M1UDbzDUWkf3SbvJBRx7gEJgNpkWzo48v4MCp2ZDeee8n7iaWAA1opPwDMBR37PsfzAFdR4da7i",
  "key42": "2wiUXqbstnZFwixqtkuZXZf1enR471vzZRGukGgdxdbMsa1eD2xYQ2E7KvemVAaiJuWoz5tERyBbk4zcCdXTyxnN",
  "key43": "2tdtHhmPaM1pmrzVTfvPSniWbZjjJ4L319LE1gRuaS4xXc1V83Rexidtmm71PkZJtaBZ5dZLrrWpYLo1dsUFk5oU",
  "key44": "54WbrT1p1nMSt9jgcFXgbvEBQkLbgtRDi2BgcNhGiS5waSSCjZxv84jJxS2E2X79odH16kwaWeuYBFenLEBLWzU2",
  "key45": "5pRcAHgNBY3MVKuaaKJzGDBoA6N6X4Xcqj6qY9tkPLxKGbkwfUtTTxUfMm3LXonSoQuPDBZHxabprSYuAavaMJLn",
  "key46": "5uv5NFygJx8Zxq53hd6b7eSpLu7sksJVEThxcHTZPT7hTSd1gVD5UMaxYFyzo8J1cjppzCoLTwA26FBNZp2HNmCG",
  "key47": "38rkbHLW77Q5rocEgDHCQSzhH6Vy4XMYqEJxtj88o4YUaczD3PSjBAgY8g9XfsCTRq888YnUqoUD8kLJdZSWsfMS"
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
