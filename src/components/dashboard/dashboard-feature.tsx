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
    "5jCh8rKdexZnMsFdPLRC7N1NRS3w67RF2BL1RnYw35ZWtRNcJciHXeVLMDkUgnMJvRMUQFYpFUdMEb8j1ijZMj2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n7iRxNBrtUCiS4ceVKrRsVYtusVzVZmZHbZ796Kq1tf3ArbKt5WUvv9zH2GsE8Lte4h2pvf7ReXBEHXnRcybtk7",
  "key1": "5cbXTwfCr3NsY7REfb223tkrN8zfHZHWicvo3sAM6oPsuYHdd9kWUMJMkFgoQtp8odf8KMCGsAxeU3usDFh9z4L4",
  "key2": "2TmZZYdmPqvjXX6m5tvxtvgdLUVEZ8H3cbAgBuk5oq5TKDmLYRndqBKBG6GsTeLb8o38q9Ap98L6ymxXS95fxeuE",
  "key3": "fQaYf6PYoEL6UJN37UADgcnqwv6nRXU5hxM5AMwwyNqkZp8mJKZNQ2nPBPm7uP51ThkvQicWHURTSx7JTwTTw1H",
  "key4": "67o9UcakFPXNuYHPNu6psUQSjELb75o5ZoDd6nJbU4H6D1qfFkqbfwUAmtJaEvhmvFn63JRZiT14etewwSyCmF7M",
  "key5": "3kp7DHX79Wjz1hf7F8sQhxPDukEbQz4khGZxefpVZuTqQDijErxAd29H9b7AtVaPU7dAsHgwRf4ovQhkGnAXHDJJ",
  "key6": "2BeamcT99Ame7jnLkq5CVXjCQQGa8bCRkeuxtieYQpZqwTERzdNXYLdeit9t6bJeFQS8omgDTxG8YWLRGChrJdou",
  "key7": "5Y9NuWnHPwHe7FrrYDzzYGk7gwNzx153e4epUNjLzD2uz6fWNbwWX6T5m8MvRkSH9aXiomCXoHVT8u13EzN4rXQP",
  "key8": "CF7GAUx7EG9hUq3ZFTQ4aaR8c9WWo6NbBpYuuk24ppKUDf8TjtRPTARp51isvw9f5ejm3Uayh21vLbnrgSPAJUw",
  "key9": "2RcHNnRYcETBAq8tX6tEvzkvAmNFNV2Lavin7kHTeD2CHz3uLL1kU31swAs3PCVQXhqhfkK4H4kTDckeZrQ4F2bF",
  "key10": "32b1iN9q2H9fh3ZvJSeQrADpByeHs3r5N6v8TFWujNVXrzb92hpqQ4a7D5yVtXzjvbd4sQB2kQXrxR8gN3KeQzKr",
  "key11": "39MQvh2M6jCHaj25ixRgbdwk6dfp4oRFMqAFf7B5P3TfdmnZVq1VimFJ59y2ArALjNUBiphpzGHnLo9FsNDbK4Y2",
  "key12": "435fwD2PHTGpcp6MZMxyhxLQUqwyyeyZam6p2kXbqr7Rv2RcPqeagGkJrXXrLDXTN2FbPq2k3iAUeaXKGmKe6Vmd",
  "key13": "4HUg8FhauaoRVGyKTCqANriQCSS8X6vKetMksnRQPmVoSdz4zd8XhQFE9NBsWD5YY64sXbjSVFccXzqkEUFibx7N",
  "key14": "mRDMoE9uE4m1oZQtubC3KdKhE8Smg2pK5aGaNDeuPbKFWnbN9d2UiVL6tXVmm29VdDde72YeyDWPGjPnxZq5sRw",
  "key15": "3KRJH8VZQchnnvPXy4JXF75qKM2X51RPvHn5j2PXUYiaNuvPu3n6CiBSYYVGr9NofviKvyz3wYnjzb2WTsETEm28",
  "key16": "3LMYXwRwM2k4YSJCn4oABpVz5A9Cs4zmX9Nmpj85qGMuN5EZ61Pbf69LzrpV4EXkT6aFuCRQvqhu9JDmd8E8BmLV",
  "key17": "3cbMXzy2Fr2RUZZnE8xAjo218osQstTc5gqMeGaW1y6LEPZGSQqLh92R4BEZdSsnN8bLFxEsvfdKsnQKioro39kC",
  "key18": "2xv48T61Ez5k4aBHnWVDMaYVrHPF35o4JSEd4bpziRiQRsGmewWKyRcLCEGFRCKYFuakQaCs1eQMb87ytChCfNyL",
  "key19": "3KAuoWiUxQzL6UdokD2Ny8GGxj2tqGsJa42HLu865522kEqREzcSCJiDXReQzm4o1a3on1dZRmoM72J2yLoxRhq1",
  "key20": "5N2m25DWegTKBEYP2N87ExKHeG7eKBSErTYdTmExJsAauqSjPtzuTFaNPVVA4dnpLPGJkhw67PcfxGV8wKTjgzEH",
  "key21": "4cNEwZ5FD15PcULFNbTgXbBLx5YjwWwJj3EES8CGxvrZvuLDp7HuDmdPf4LSZf7rHuoN2fxX6Rph7DtBvMUz2kBa",
  "key22": "3MY8Cgai2HzchDd7Vxz76uEUng4r2e528cEYTb9DzHWVR3tSFvGU1wB7eZR1scR1Z5fzvsdD4WS2rj93R635w4mm",
  "key23": "67gnKsVEDoDuaNubjW5T3oq3dToEFfgB2qEWZ7g3jg2zpnZ3SwrccoB5w47XwyqMQaHWESZDsKX1X3nBbk2puvGX",
  "key24": "4X3qYXAWomCDhsAaQF68vqTStRfmq4K2qxiAksSDBzZpTGmxtXtA3hhtjt8zp8feJ8phzvHXeHm3grtzEFNVJTrn",
  "key25": "3x4tfj1Y53pZxCn5Azf6GTjSaeC7K4A8iv2fQ8RujLJWjsVnWzDKTd7DYbXqhrnQRNA2NnyZ1SphF8XPfFdDJYGg",
  "key26": "CH9VHqsUvj9KAHehRY65BGH59iCnLPk83RELsw6umdJ1m87W9qTeugZDm8J3PNuqEt8EJswEoFbYuLSA8PA2qaR",
  "key27": "vs3SWF9mogYdYdNsqc5YsbKKg4V3UfkPbJT194fKw8CKmb8Wm7MAJXiW8TUxa6RuZMzjwUcEMfMCzWVFJegeVkn",
  "key28": "4hyRt4P52poGjYhFjNChWMLW6qArvHmx5VmLLzTayrLqZ9QaK68iUj6eJvESnbdWMHiTtFFr3Pv5qTTuSju9E4PR",
  "key29": "5Mk2xDZczfvCXvY8GPDK1R1fB3TAgHNmcSPxpQDF7iiBdi8nd6AoR6HN7cDURm9Bcd7sdEkhou9qV6QMJJpqbueN",
  "key30": "29WEqXpYrihsPmATeSKCHKHy8yRH2GdVxWpUsgHa8mUJywWCu1F4bXKhJYq6z9V5TduxH23shZXpfhxwhTUvi2mg",
  "key31": "5SmHrwHuHxe9Wv9fQcKP1AN2wCLom9BnJNkj5oWsezgm9Yz1sPEPWZjSsLcocJMuXNH27i6knxoeY4SUDJ9aUdqg",
  "key32": "45EU5XWARzrKV41zTWsz533fXzyHbVtQFnVCXkoozgEZUBqiHsZuEeA8kUTKFyuVgVq6PamZKbhXfyxQHgybbFSn",
  "key33": "2SRiEfYTZ7JAYh4dHQvVrBT4CgQMnFsfEFY7oFASD7wENjpNNmoeSXsooAWqDT2YRn6sWtt3fdLCHnXBFtY8jPn3",
  "key34": "M9sqSJY9YPsTq4xmGij2Pcda8xhXVRnvzEw7ffQFWyJi7JcFwi4Q5QUK3WdmKuxjnoiMaS9swcDbaCDaaWYfjN4",
  "key35": "q9DoNeP95YRE9ASj7jMqsJzkoQsbHE85C5yNKJjQt1afs94bk7RRRxUVqq9RYKm5s4ygcCyKkLrBpePyR5Xxe4U",
  "key36": "59GvS8mRiw8EqpfCCcaxksWaK8Fnr6x6u7qLLquhe6n9rrqKavjssGtwnCWe5PYBATGaFEnA8DcTHs42fYvikYuU",
  "key37": "2dKUvDCDP4tyvApfLdDDq71tag9jdnXJnSMoiY6rLPaZSMcZEra2SweRj18TrP99NsAnJAKjCjGhQB6Dc44bXJjF",
  "key38": "4EU395foQkVf9xwsjEQZHvgTCWX1Vt5qRoPD14HGr9cRLgk54kn5qZqbM4Pc5KZnKXJmmEGTNGBnKq5AffddRXEe",
  "key39": "v6bMg8yyrf4w5oQXbbqpmxUsVsK5ubKCkR6wuLA1RJs65vga7onU2XBCXxr6DoaidXmtC4jAMYejj5k647mLUEJ",
  "key40": "5WXY11SWPPSxEH3Sw3hm8MZkGg8RaTcjAE9jKLpK3UihGRJSQSYwpMJxKg19NpxWCXw9tggzHrm4XehaNBV1vEwf",
  "key41": "5inVBfW2m1Yw3dfLKytzYox5mKaxmA3JTwsc5uYzBtXDqTgFaNnuAhc764gLXvZthLoSJc4xigRT8d3gK6YoLHBP",
  "key42": "LwL75SMgHb5WgFF3tE83NgKDjbkxXqXk2btFa5DpmfTd7f1ARtk8DoREhRikA1atvjjHV2gDUqM74Muu8jphhUA",
  "key43": "4qooNFFrekG4PCT5iDfpV7RK449GLKTzmJv6Kz735bvs6AbUb9Vzc9Te5QKwcJUSL2FBLMY3uzhvJRUchNnrYH4V",
  "key44": "2yNXsXU6mJreYxYQrTECZQjjWGPAuU9ugEkLhKZHDyep3QFaP9Hk4tN3qzXtVKGRjTTs1RdxAgB14W3fNvbyjEMQ",
  "key45": "3aEVAGDMgEyHbJKGfWU7C9dwmQjfwJVKyTS4TQg2xj5fstSVTdmYYcAJZVjmAZwyC6PpWKQJLa6QfUE9YTTLdYLt"
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
