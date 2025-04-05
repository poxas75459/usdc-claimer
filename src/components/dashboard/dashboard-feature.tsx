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
    "47HnjF43nzZND5gLqr3kroLARrE588kEmyWETtaJSg5C21cg1Cj62VjeoPBd6TkXtPab6r6VMBfCvMiW4bHrgEHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G9nvSwM4nvfSCAtu1PvBtZqedgnvuGMehRcokN5zQ6tp7FpAD9sPMWWBB5LUpRu5j2SRFwgyojzuvwSVoX9KknC",
  "key1": "4M5FtsJ3iSxSZow66auF42wZQsqdVz3YngJjUUNyeLJS6Q495ykRTV5AgQrC9ommiUTr2wzsA7sXpvGHQdwCG7aQ",
  "key2": "2k6ou8qNEj2Msn5fmFM7a3q4SQFDumEcZxQ3ZGTpJbKKV3BGS85JLauJCb3NJi6rBEHbga4XFjRKoRiRCUnWjgjD",
  "key3": "26aQgUX9eF4VmZUnkWSEueSBFxcqnLn6qJhfePJQxGmB3btLTvBvRNE1NtcPz7PkmUX4xXU3UWTjVZ2wx8C7hYQX",
  "key4": "Cm1tdv18mZxX6iYEaVkeYVgRNNNcaBmEufUt6LQjqLHSLLpgsrVdjigefcghbEJ4rrrGLzzzXnhHUkuzK9qtTQF",
  "key5": "2Gfxyb96beRRBCyiTW1rHUzbzqxLKhyUijPyjk2iqd7Wk8w7DEWCoEcoD1CjtRnUaTPPmPs8UFzJ6prsbeNu344n",
  "key6": "3bZVtGRmcNvd3xg8m61cc4dziV1u5pijgVvg6YFgeQbYG8LxzJZ1sLmi81rgmwpMUzgEBDFjm1hg95HxeJYj2Paz",
  "key7": "2mrSAiiDaU55U9ow3HECrEqq1CMFj6XvCJgzp66PfRB5bsP1CCXKude4GdSsWNDv1mTdaP4psjT4ZzMP4SkpsFqH",
  "key8": "5roMbQBEa66n4sJy4oHVzJ2xNCSU8o9M32SEZctZBzHu2Ld79x5484JR1KiGUtUwCiaJNonYSkvtLsf5jXk2AL1V",
  "key9": "mLZLBXMthn9xjmEsNqMhifUTtt6ReDtTMtUedCJyw1mFkgU5fGZm4USGS9as3xFgPLCrPWrXJrjc7NfETRBVwou",
  "key10": "38u4eTKkz6CWTup2D3DKNyQv5jiBFsNkqSqrtsnFSrRqrFTeWjQS34YC4Tyf8KKpNneuhvk2f6uUigtbHhP1rBAs",
  "key11": "AbkLMQbVfJBSQZgb3EBihVu8Ae2buUBoBfMLjHesdUwqn5SVqrSka3JkTTJzWh1M6pWTegfeKN4UFANf29eQRbB",
  "key12": "51ZKXASnepxy8H61pkSMxr2f9ijNUiBe4Qfwz7sxgMLDJZ2qVn4fve4S4Tc7bYvVgRFpnrUeuN2JX8qNuh6NqHkm",
  "key13": "RDS2YqVEqi6Wj4RoaT5KtNDxZF25j2uouu1EzzPrEHfX6smRbMCz25j4grNKxsWHeZdZoka44FQJ4DuZfiViedM",
  "key14": "3VRupRCRRgApJLFidpWjHPx1NovHvBVBCQgBm3BWr2PjfCApc8p7eoK4Wtc2DWLrxokK7wftSZ6PSf6TgKrX8kvS",
  "key15": "2AerU6AmMfxHeUSFDwsqyCkY1GQN79svHaLvf7NZ8iDFa47jYDetcaEd5yfCBtJXkdRwGY3RASnC5p7A4zhbx79T",
  "key16": "4qojBjbhiKCt1dJ555Pmg7yKn9Maonmnr7Dma9brENWRxxoQkJG1QAof4u9kKt41K42hJroCndQwj6R8J7SPrbyA",
  "key17": "5jrATsYxdQYomWgHoYAjWZxaeDZHowLNVmYSC6XrkWn61P7GYenNsnQha11DVFKV7R4aPBzNT7dWTe13yscSRTCG",
  "key18": "2cbYwysNEWs36DUtTnCbykAjUp88jvJqWVtQGgNiddr1YpxC8x6iHozV3XT8g1spoWAuUhvve4hP3HV2hWCb74eC",
  "key19": "4Ng8NMMHuQs9iC9BPLwg1o93aUtVG4YV9DULgXvQEQfYvSQHJg4ACgd8SuwnPUTQngyszG7NMqGiEm9fr3zChERe",
  "key20": "2BcaptL39a4TS787yHHhMkBpvnQC1syFko481keh5Qnhq8wj71NKAjMcMw3LF5HKyqoBzo3Ex5UgpYuey83Ycqwk",
  "key21": "4scA7Bc69V3AL2AQH5HQrFbsoLXS3cubWguTP1hcq5syMbZPReUxduvAewHmEuDDfaqkqMfiRqaASQzak6o7G3Qa",
  "key22": "4LXX5y5vQfJqTu7qzAZAvquBpiGtbLW7KUZovu4xTS8zuw5CYSU2JKdsfktCagZs8aACRJYvq2AZjvthTNBC6Wn2",
  "key23": "2aamQsKpaVk35RoCAkRpoN7woznPtyAJBb5mD1jJ6DehABYRNrZmJFT67orQe7hqgK1zZzkVdMimBzb6EjURoW55",
  "key24": "WKXKLHL9HTGp2t7nQgG6UzHEiBxcdxoJx3QonFxfsycCFgn8hYKbmnNXDZqbuvAXERRk9twSTBh15UdeXmPnkZx",
  "key25": "5VAW2TUup2YvEv88Rx52AyssDqz8nJqwawnoKQz4arQEqnuGnsmPDorrkB1LpRzx6hj3wiigJiz5djtxVtUWjxpt",
  "key26": "3KBAqcQxybCDyDkuhEb9gspL8i4BPhp31UgDwjmu2E1GN4Z3s9juAYmmA2Nhwi5tRxHwvqnd9JGgamRPGRvYuA2Z",
  "key27": "3BaT2PgTxq6Fbxv8NUVTgePRwfd2UrMLwcyZ4ub9i8PzBwE4oUNhhGexh5aoKdqr72HYuL7UZJpVex94uLfqdPWx",
  "key28": "5SpkPYnFnWg8LpZSfAmxTpeg3w8gaEgN4W6ja6kCtQ1a469Lnb1Fy4bwucyDof1TXFo5L6g2zJ3hbFt3QTdVaVHb",
  "key29": "649dWBRRCk4t5qsUgqRCS1EJfg37sxCfpGVSfDUAfJAs7yq3hLx1m7DoxrTC6pCEet1AYST94sGxvU9sznx3SUvN",
  "key30": "1VGKxcUbxkspnB31su6tmqpuyqe7mjwn3NpLx2LUTRUZDNbdP5zq9jA58uYPDB8gSz6qhTDDNTkaqDa7ZpjzyK",
  "key31": "nkkt2N4k8sACpGWLEhkZSuhbhJA1YycbPoHTs142FzKfuM8NQTrbf732pqpbupFSyr1ZwFhf9hPbrc7xHvvsvV5",
  "key32": "3t6B6inXNVyonbppm3d28wyStEbFMYKq7yf4tA9VRjh2PLkQVTs5PYoXzm28gUe8PcnT5nGpMnXjLUG8zwJrSLit"
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
