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
    "3qNbTzBr5X6DakdbQ77dgMXbQpvS5gj4T3FKiyMtJ9CAHykjziDM576AKs9Hwe7BTk7P447wh6SP4MyyXm6ctYZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eAkwKPeYiQKFoLb77981ZWkSq9JJBXghCPjqV4yjMbkqS2uwRM3TcjUNKRcKg3fHQ1vnzMWuoUpvSVsHxE8rkvs",
  "key1": "48tc2b8Bn2WwHUWAeezqoiVSet2Jvux7rAba6ew36kVXBYBBapEaEC3rRnMhCfLaQsZuPiEgFoWvVhoDwyphsTk3",
  "key2": "4AJBJd9shmUicm2RBATQWmJDwUVsZBH1RcRWzeeibdJw9UEFgNKXUzCjqMi1EPitXiY4gsq1YEMpPYX7MKtfRtQx",
  "key3": "4JsUtYWJCgRgP2dMANx3dmR1rUBbaBPW61uLpu3Hd66SVeB9nZMB8QTvnK2jZZ3hWdeHvbBU225q8BUd2rgrutyp",
  "key4": "5BHzn8SM2DpSeBmHknAvMjXUzR47jg8vroD4e5CdYMMerYy9snCXQoozFrM7Ru7KqTSEZLytid8oR5ZXrybxrmYf",
  "key5": "4pXAGX6oVXdxpRFufXsCLR5g7JBGge8RnRJGs7riEzghxEzd8v7FJbu7sNYTfTnJRUyAXQFbjaDtohCVUiKnyRu7",
  "key6": "61X9pfZHEDu3CattPJC8VBBsxwVVp4z9VyDRXvywmxrMFMJjoAtSMP4Fawg5GLGZp3Vvgdu1RsDCvnmicSWnkLuD",
  "key7": "4RZG6PpcrfSgMj6en6vb9D7mkVHeGKHEBbGQDJQ8Q8LybZpj4i3jxxptm6g4B5qkyZBJVzRLBisyecWWyXSDccbe",
  "key8": "3pX68WbWnxRnMwaxGCo6y5PSJaSGdDBs57cJhg3JfhBPmyHMvboGvLUXFSpBApLNLXHuBHP2bRcL96q71bFwYbk1",
  "key9": "5G9ZpXEthn7ZdQ3dPjSn9ySZ8DYgh6quhLwYFL2cCz9KBTZ3ZtVwGRwodT7SKUWVMt1D48dNcmH8mogQmJYMddo6",
  "key10": "58Ur5ouFZNJrR6enZfYeNenjLY1ALMGpYXmVv8YHtmgrPH7e6jsofpRZivwDoBhLHUBUSDiaVBw9FRzNbJrCDF3",
  "key11": "2rVJvXZCWyzjpdLjiQUNNDJyPMuyfUipx45p9t4bw2HXGAXjzqLmFuJAAba1QASJ583rzw5m2DweEeJqPFDLgYM1",
  "key12": "Yv8upYeiRJb8hv9npzwXhqfh5xHAvK2KDYNLY7sTPXiriMjPay3ad5HgtowccCqD4y8uEMi6mPanNLExkMAKvQk",
  "key13": "33khqXuKkq27NCRVsPZPyXY7wDVYEZQx4ugAsBDqLx5Q7jLTKx8o5yxuMpqiaECXmdATyNcsPkV6ysHsyZ9Qu8zm",
  "key14": "39LAp3qng1GLzddYbKjtx7R1YnTVpNef5iWpeUQ1W2cCKVcwNRkekhsKJjWKT7QZP59b2DigBeFarQQ7NUFssUP6",
  "key15": "61yaA3Hip1AQfMQvvAwfvctiTC7RTSDa3CRi78uj6NgaWJZhzjQu3NGMEiPus8GXvb8NBfMftCRdE7RaLQff6xMo",
  "key16": "45YFWFMNng6YBV3yGxXBkv7jFaiG5niXAvF4yZU6qsGFoCp1WWNHHaKZKPHvsXZ2jwNJEavqYeCZJwaKkuWppLR1",
  "key17": "4zXk6Kw67hHfkt9pKpVp5Vr2q4MX97NBZ8KNDfA4u7KzCfFr8rAc8XUxQqGyddtAmsmHhGPfa4Dp2y2dwZci11DT",
  "key18": "2ud8QjHposcCz873mtq57h1KBXoHyGoucZf5CqK9eh69h6C53k9p2QNABfqZYt5y62vDkFfu8batmhKpQywk6J1b",
  "key19": "j3TqstfkuW56R12DSX5eaNGAyHRNEgf453b2rNASEz6sBmCT3zF9nH4W3rQasXA8TS7b5Nx6t5cGySHepJNhxsp",
  "key20": "3SQwL7NKjEbNkucpWZAm3zgBr1qwp2hw46LNM5mh5vhXfg3vrbf8NHfMGi215ZZ8m8iarfwQGsYLtumsHUW7x75d",
  "key21": "PNNvty3GVZ4jLByeY7KcXjwrSRC6w5ynjNswLuALXsMphsk4GnmLBYGg3tAMAkGJZ3wbcUoso6Tr6LXgYte5UjT",
  "key22": "3kAfm4AYcNpzaRogNPWpfm7vMBvHBvaQ22gi2UcpcayELx2sM6TkuqZT6TScudw2ycCURDBcuLjB4FSRZ3b2bT9z",
  "key23": "2vvJaChjyRbLPPZ9M1gTALjwWGwXYtPvfV6h7wDh8qC79GL3kAZqXqK68hWnw7KQP9FtZ6iRDtt6QbPyrARNcQVD",
  "key24": "31qtbGCqh3ds4oFwvEyPymmdFzmcVzoVt7gBW41qtXYgNAgfeGYTdDNvovbnJgg2feazMKuxcj17VVDHEWZrhoCQ",
  "key25": "3VV3k3B6VtLwCgVtZU7QjeFtxJFBPFyNKd6E9uwQZUWcfqsgjunmGR6xtEVWNZb7cQTwXngmCoUkFLA9qNbSvMCG",
  "key26": "5PyymmCnq7vekj2VDuaq3i8WKM5HUxXFYcwXCSvsb2p2t48i4CzacrDXrm6op8CfPBVdkPY4hZLcUm3MGz1DjkJb",
  "key27": "43oQ6nhCaz8Zt5o4DT4quLxsktjePaK1uVcmv16Ws7PxVE8py32zPJVhSrho6iw2jTKFwvFCsvf6gyRs6SJqJQap",
  "key28": "bFWD5UeTbixm54gNYYcTTPnWTcq9N9XeZiusaUME9z4sgtoxoMiUP7RJahcbAsG8MsigoE1mecJmC2XUZra1teG",
  "key29": "28EBkVfrUztjyZ2mvtGXeouS32MXxtJGbwvky3drZ8YrrzuybxdM1RbkRQ7N5WTX1TMD4zgp9Qq59iJtP4mKAdXF",
  "key30": "2nhDU2bkhqrwExXS4KCESRLT4NcYrbMLdibQLbnk8nURcTaE9zAper9FKNTeyj7Lj41VfcPyupcignkATsUuaFFd",
  "key31": "3krN5bRCTCxiox4Vu4EwtXhtaqev6dYd3ct3kim4s4u15FHNfoMVz5ZdQ4oCXG6JQGKpoaT1cxzmGTTb3Atg8zv2",
  "key32": "5bgY49L3aknrX8xKHsuHG887MM5bUfefYef362YcWm3h2CuU1WQKRxVZhE7p9b8myBUkMQYACeKw5bqgXSLv9wEL",
  "key33": "4KzU51n63QioLbZfLaFSXzDG11rgD6jLoShjhRgCTX9xDF3GLetTLoxKEqjE1gRyzbApZBrp8jfLCphUsXdAY1K4",
  "key34": "5Z2j8D9tT8a221D4pctRiPDn4kZPfu3xQH2XfmHYwzYPS3JhXhPy6Cr9TcKu6SDen7LeWoWFUZuGRZwEn7gWtdns",
  "key35": "2WCADLNfvJXBDkh5yseSinrrvzrjywP9RM8cKJoc3JVbZVdbzyfJ8a3h5ektisqGL7QmAtEsC3pS169jyAEZwiF",
  "key36": "38L3uKs3mrQ15tjMaAkmzmvFNKdPz2pqaUnxbK5UTnPNTWA5bLyS5TFJ8ARy8wEge9bGxVCpX59rgyYBJHw9UouL",
  "key37": "5S7sNuHJ2Nbn1ZCYkaL18o6EqUibVwC7W5h8huxXgDP5GEfcQNXktWrbcUBnXrkkG2afFtMrMvPHRTVz2ijT3S5j",
  "key38": "4ZiYavvuykr8ufnAxocNR1cPS9HCYTLwXYaGCaruh2XwXgSfazt2UpcTaCEQRXFJX2nY2HSaepK5vBNJJgrX2kYh",
  "key39": "33ccQoe1xWc9qe1M8Rx2sATDNC8UBckY2QGn2j9hRUirWWmde9oKnrYXyTa9D2a5MKZ65zXvdqHxBQ2SYwhtQSjr",
  "key40": "4rcQ59F82aSGSmA4JEFyhckEMdQ9wPpVQnwgvvXkQiyutwAGssovzVBEkFRub5UK5mrkdXgcvxvwweaVkVwrRBQk",
  "key41": "4c2nev1Yak17KnUYk8EihowvrdUZjK81ETL2k6JxPYGvi9foVxggqqFfUQXX2GM3sRoWC3DwNnhmaSihCD8tyXJ7",
  "key42": "3seR2PfPSvU8onWQKDKTBziDrHednH1Ag418ctyuDbCT8L8TTH3coTWdYRPkGBZTJut5nQLchyDTBw1RjPjAgT9P",
  "key43": "5ZLA9SwMP5EUKfv56HcwiD71KSWkjPSDYKNQx5CN8TBVkTTnbZ46rmmYfXQbGMj7nRjUTB51XzuVhF4vqRGWhwk8",
  "key44": "5awrf31jyLc12fYHt7PzbsWdYuh1LrznJ6YeUEse9BG171R755yzWqgFYjKXXgpT1QLnBCnvAFzUVxCa13Mi1n59",
  "key45": "4zLupBJYwqUJmPoDVWPrvx43r61HTqJBnt8iJd46dAr7sxAFv6sQVAnAzj6yJsUympC2KaGTcj6YHgNzJPJ5jHxy",
  "key46": "2fSMKRZMcRgfWcBd5r7NqXjDsxQcSmAFBuSJag1Ph2HjcUSvZ3AsWstzvkAt4dcqJveqxbPzsdQmyaHaFydMAq5r",
  "key47": "273Hb6BGiGVyeFGq5KAeKDNtDiBob7u8G94KgRo7An2AKeLQwvADfSjguVnfvGdDkLspkz8kPjUckRQQtPXZ2ijk",
  "key48": "5N6wRt6mikMZaCVVin9JsNxaswQ5F96kGxYmrosf8SQpBGhyDPmWx2KtJvwRSPXmNGuHEvNVUDmofFM27da5VE1W"
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
