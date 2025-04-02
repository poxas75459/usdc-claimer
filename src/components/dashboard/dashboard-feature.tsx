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
    "2ur7QypoSjnXWJog946SpTysogwJ1RkjHHdReQgFg6TMkUkD4o7wTgLT95nPC9eEBaLLzFhm3cL8rpjrUhxWm6iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JgJMV8g5TTPaKH9MgvYsoB9GG3SBJSwdGFeS9yVUonBCAbsLeB2Z5CyGhxcLAPHWFjAtqhw8nWLUutmBDXacJbP",
  "key1": "2cXgf9FPPFiGYtavV5DDHSGsFLEUnuVfPYzbJSNxycfJUe3oc1wizbc8j8QHXuWSYjiMLzS2TPLJroD7Afowmmoz",
  "key2": "2id6eyiQc1d3nB6JDKccwzMzoFGWAc8d6bfaGKQFsijjGPFQxsV8Ex2KADEEHrMyhCQxh2ZNYJeV1zBDVw52cfnD",
  "key3": "P6Vpn3gWaDLQhZpFK3BkKrufEL2obsmZAXPhjdmMUpgYf16xXWD4ktprqAPTrhf1Lpx8gJgtgUQ1DaLP3i5bHPS",
  "key4": "2ni6AheCP8pdiqxnggzUPPZSmkndG5fqsR2HWv2msQdukQQ1CoAqf3iKPBTLd9DWApGWoPnmhEdJzvLydXLeZcvx",
  "key5": "5EmpxWKPv4ZJM4TxR3M62gY2zkoRraGLjGb5CfY8dR8wuuS9JgTQwwp8tsq3drukK38G42DbsmCoZTurE7De69PC",
  "key6": "35byxZRrXaScEt6buaMCH7aYmz8vrA9d6pQshnvPQjqE4WPqqnmezHKQaLjkhdqnyW6VuHtnVUz73reuronzTUCK",
  "key7": "4juKKsgWYFHEqPctZETYZsLCZDzouvv9WXHL7tLnLRseNbLQjV6eBfjxuT2pZLuVNmBPN1f4s9NpdzDkFXSi7vKS",
  "key8": "SV8Q3RqqiTLDm5yBBxVT1YTcjJrYhdpLpQiNjtuAG3zEZEraLBvbPS1M95i6APgw5LtPsdmXZikhYLXHezuFZJ3",
  "key9": "3ykYjheJxGUPdkqwQeixwp8k4ooPRizB11ki1TYRQqFMPowR5sPhuE9pxGTKNswupXw3ojSmBAUHUard8CYSfshn",
  "key10": "4MApdrfGcsqZ9aJySK4hoFMAuYhNWVbT46QuzFLVkH9zMAcJD1QMgvZbWA1cdVjNXELjaBzmAYgjy714itehKDCy",
  "key11": "3rbSWa4dKYgm9ggLZMKaDoD9p9ymSSs8TKVCw2ZxBsVFjwN2vdPFXhoRfsBSdkWMNYRkXE1yA5odSERFmjpacwHe",
  "key12": "2Ay6jsy7reUUyXEqGbLE2FoxnaAeYGmKz1BTFr2BfYcNf4juRLyUKZR1QdWzawdXa5pL3TvaqHiusxFCjx29KX82",
  "key13": "4d8PLsz4GKEXxB281GWD3GsGPo5hiQr6JkVLy6cHD7y6iJBmWrBRTZS4LNuoMBCKsUzReT6xZnLyT9fyhmXcmTbj",
  "key14": "23WT8pKPqbM4Ev88GFHgavHaw1G2pS3TN8XU5GbD1DXSFKEXkPfvGRfUV3d2t1KhRzHji9RSDyqGNpzT4q8AFEyY",
  "key15": "2fEiXZ1NSKKzaq8SkTwKXCkhCKkydLBYVUWnhb2BX4sUTzs7pLMyZNGYncy5iE8BoQ8bUej8dPiKsgmKVacjdcmM",
  "key16": "2mtHXtW1y7tSAGph5W7C2YZkNuhaco3peE5E4RrvRY1QJfCbTZPjRFrmQNKaAUZF3kJ1rRjQkzXVK5YcnJv71sYX",
  "key17": "5QRU7QachvfMU7c1m4bn1zg7zr67FQ7uMVizpM6KC4GB7UgcYCLNYS26ZwZhcF1hH1tPYSmHCrbGTSrPxxeTFWZb",
  "key18": "2hhh4YfBckxtJUEKPdwXuQV1zc6ZrhnHLZCoULzvM6WZDqP9mcWy17JvEQBpCJpAmwWAyVZ2Jemg3xDVSD5GKjt7",
  "key19": "5MsAQ2Zu3sKmYnvcQWigtcUXnNCAUDgB2pWpPzi2zKLN1sEZ5nkFo3mBtvB5qjPTS2oJLqtw4rTiM6D7ovvLX9Zq",
  "key20": "2hKAqDLdYfqXrja9yZHAYdGCqkV1jidaBDtyNfdEFS3RwEpEgXBYXDYmpJywRsWDbiwLMyFsPb6ZajCfK4Wj7dmh",
  "key21": "3AoAF5n8vSRVPpVEA9V262sZ8ej3kNSFkytpfhsTtQ4dn8jd3HBqyyRuxKPjhHnfrr6MqYYCHaPPzENHwrJvdhLM",
  "key22": "5XWbtj8a1b2zgjakHHavWk6Av5Kj311P32cZd4DtMQZT7mwdmMd1JLmx1ZPpbfFLnegYMAZKPnJL7zzdZ7SmMAsU",
  "key23": "2f5TjPteXLzNqxt3hgvpGjxgA4DCe3F9fMq99evLX74v8excUZUNnTv1Ezjx3uQD1zEzykHrwhSZhEpXX4Ygck6G",
  "key24": "47MhifC8i9KAenp1aL6jyg8zsmMXYWQ6xXyf9z2U89oDpqWC6QQqKfBhfR98DsK1ne4Qwpa2ZWfn4FAa6vQpQBSg",
  "key25": "4FcNeNXmt5Hvv2bdqTxktqQZnofyYgWQJds69QxLiZRL41xJRsyVH3gc2XwhdNV7f2ayiR4SL1fkLEAbuwot4imc",
  "key26": "2BtTCNkacNnDZdpMan9ACPAaLNkVCf8BKVt9jmpqWRLVm6R4kYL3oYwcR3Hgn8ZDpmNjUXNQ1Bx5Ren8jmT4EkP3",
  "key27": "5pXd22r9dYcnCQG7J1jPrHaxmRbvEsX3pEMvvXFodtNw2Fj3rdQQFwkz49Q7dYcPZ6A8i54ri4bXsEjKmaaPqe6M",
  "key28": "UTgzPS4w4axh8SEQXGTKPPoM47PahfZ4EF1G8Lq3Q3GaTdxWKhKZLVR44podk9TADJkf786VsauCg12ewobafar",
  "key29": "y2Zdxm726K7xyn95bm6Yu8XhV32akY4LbDTa55LrptVoWyuqhT5CTwypU9Wchg4cBjEdkMQABYBsULbzyEJSqcV",
  "key30": "4pTMBWhY2BugDAHTAB3dDwsYL2TksN1U4b9o73aRJVEoxKipe86NxvVvfzLvpJsobyiyPHN77xFvjiEub9wc86y4",
  "key31": "4Z8wJEbsVShquUE3MhxjtewRZARnQ7Z8rcdEkr3n56nuTSvjium7JdLrESsdVPV4nV3ELAp66RspZFNJHgthCwhh",
  "key32": "2nDmzk9kL9JtcFTQtmZiDFoPy3zSbAshskDDYQd5c1i3cNwJ2pxpYHpYJsbKZhH89tUAsu627PnQcYYiRHbvMmJb",
  "key33": "65XPj7KRtj6SmPn3ahsUTY2HCuziRctDSjVMAzD8h8YLppDTTaktjdtNWf4yWTW5aUTHsNCqEa2q7awVttocoPrB",
  "key34": "ZmnMsWQ7gySCb1TMzpFWUY2v4EU7zJWzVDqqwFwja5wuGBeGX1QAWyVf1oMUTUhnhDt2SEkkYYkvLX55FTJ61JU",
  "key35": "3Nec6qJV3dXBGLNf8oLMmE6NwoM7njoAT48F3SztqbJeP7pJWmyyUEpDuUybUdyMrZ2XEzxsHKxDLJhXY26pELxA",
  "key36": "rdRfrG8fDefWrMkLJdqGdXkfC7NHcdCD5ZWXUc4UZR1vLzHfu7QnmMHR3hG6vLcPDwyBJbCvJ12HYHC15bMnWd8",
  "key37": "3mFu3JKkTSjVye4f4GcMoDgVLwGY5VkkwAb7NwzyJTkXPjwEBt3twXzdRA1tNivAzkzp1scxgQXWVYZqbNfL8qK1",
  "key38": "5TAxam1E8KzfYcc13RaVWxhyEqxfCYnMLtk7T9TLGgNTgnxcWZPT994daBvZjGba8eRoQqm1B9kix8RXmZ4DAdqg",
  "key39": "2tfLfMjHq2TP4ZsuJEtq7HzT58wegAL1tE8tnmvciuHRspiotPzAg1Wfej3Ka8Ht8B5KZnEguPAj2NpPG3LrZ2Z2",
  "key40": "3ykQ7weTSzz5YiqdpeHCyBuQbPZRQKfxSVys2Dm9vNyxxuFKvKQigUb8N8d4nAP5MRZktcXA2qxfxFZG12AHUTjv",
  "key41": "BS5KSSfP4WfrdX2zT5wnzS5FKkraP7mtJW7opTPK59dBRXa8CoeFsx42UExkzX4FThWxSvmxGtZzMYWuFRfQa2f"
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
