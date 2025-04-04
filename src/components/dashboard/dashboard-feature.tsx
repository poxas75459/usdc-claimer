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
    "5zgaTQWLgUmLdyFU8Xm43bBiPK2KBvHJrUBGT2aLr7vFNEDAYWcqZxnBfY7QN5Mf8Z7Wzbz1nDbUXzydeKAWSByU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YzyJD471E4sBnLv1t1HaoUgEMKdg1rzwJ1CkibUH8LWYsq7SbPRdchBgw2J7evYW7EKYxpU63a8Laxv3v8tgvQu",
  "key1": "2pYdJE5j7epUgSY7wHh5vTQocHG2A61ZBTNpUwMiDucwDB9WK21WdpxH5J9vZ7nK9LrTMHpSreMLD7h6YKmjnQGP",
  "key2": "5FXvJxLJDrrCDptJwFNc89ENMw9juYUqi8QUT5UZnmBu8W6SPhaAARLT7Bhy13WVxGnTCzT1xEP9TK2zR79omDtr",
  "key3": "F7eSvms8UF9JfvFrXFDZx3ShA8Nqkf5LLexhPsuVwnsmYQgg2UDPzoXaXjqPvsfrrZGdTeQPrEfaVAmc56niNB8",
  "key4": "4d4sD7YVdRMTsHybyVSmMWy7w9BNRsYLEHRprmp9rb6AXqiihojdi2Tun39N9ng3VgRbbCaqogNxvUfLnVvhpTZz",
  "key5": "4zm2YWVtzXzcQTysV6gbiuzB9A4KUyJGsnBHLeg5s1s36z5kxHNgPGr7e2nBzYEmxPyqiMGBXDSgL67ym9yZb4jv",
  "key6": "2wAJrA7kKN6PY81QF1wqmRht3FAZ9fLm3mskvLnLrWVxGSynfnXJwM2CUEk2PGAPrQ59PJkRZ1kZ6tYnU5fJwp4x",
  "key7": "4aj2bWyUZpkqJRNSudtedsXoFaZAHXgXCHnivA6ozCBEcdjM24Dm7rUsXHzHoK1NHdubVmaPuKQeGStx2mZuHsyB",
  "key8": "4SLbPuZWUSyXi8jBFzgqGXTqoaqaygeekmCQ8wt41bG5M2qu57ysDaYiF1DL5evDb8XFTiph6vrf6coc9iJ3jZWU",
  "key9": "H5FEbU1kRxVf8shAaFxF3yb2Jaubjb26NGYfUCnBFPQSSE5LwtxrnZHsVsTMMgc74DhzzT9sq2TuqiD1H75nPgd",
  "key10": "5Bitc9EMks5k2nZThf5VgvUnfXyRiVgWPtovwuhZNccyNpoAJiVsVup9oSUi8z8yXquLfiXjZf5NnxEm28mheQh9",
  "key11": "4GVnVY8y6sEF5MU5rLWdyPdBCCeFWakHdcpaiavzMk3ZZowW99NMU7U7ryfv6DjiCcjdwFCWKspkLz2bpp7CSvf1",
  "key12": "5wrTu9GFPixVEF52yBkpLbMK3fWFuDL9YRfQfBuzWQ1PYzE349vYTmEVwd58fHDmpxebToUQwiUPXhprfUfbiECw",
  "key13": "4PE44oHbajccL5Sa2jGZDFRpNUT591Zn6brFXN2GrFwnwTjBV2XnZ2CYSZp6NirVH8HLJv1WNiMYYsPuNnYhPswa",
  "key14": "2d4Z7rggzpFxNfSwUxRKPaMaEB7RXKotxfGKTuEfz87HEYQWCUNXUY8Yu5PQZzVdnbGQhVUxKNjHRBG9tEhB3tA3",
  "key15": "WKqYedzc2Q1w6VEdjHacCM54qVFJhKfffiquQPQCKwuhZe6LZZuMucSM7JagotjtKUyktQVDh8nEHjHm9zaWuFB",
  "key16": "68WnLRK75J3AGm9gNpeXnyKo4zLAD6dUvrJsfWkmQG2xJLjfLss17HRB9JFQPKHqbX6pzwttZdA5Bu8oDvRsyTx",
  "key17": "2sDEE2bHtgW5SGKpoawyqQkZ37N8VWhY3cnsbu6LWpAG4WVk4dDszFPzCKN8vcQwmh44ziD7xGa6vzmh9yQWqiAa",
  "key18": "xvJGMF9WHVJ2qwrJKs6tp1HUakzZZHw98d7ERhXvX8G87h8nc4k9xYmtG465W8frzPV7UrTQMMKHeTUjH1D3L6V",
  "key19": "4N2EdKEe4TSsrnu7YKJ9H2b8rkpLYfcLs2bJBRtn7ywqrzSngrtKCy7ZPzJWJV8rgDwS6zTAQwRPt39ACjG9Jred",
  "key20": "2o4hETqEYY4SSr1KdWVQ31HPBRfqNhwtRt5KeSmh7n3L5Xa9Qm944tuyfr7T1nG8gUf9NYcgCyxXWoyCbvnQ2akK",
  "key21": "2Ptbgm4AFxUeLxBJWWMV2eGuJBbVmNJFZDk578PTGBvukjbarfbv2hGL2HGEUJNBjThX99dyoWMg7o35mKpoTL7F",
  "key22": "cvbMH2uXgAafUMRKo6nxoRmGoZxGzUSNgWVDzvMJeq1X2my7s8SNaDqkBfjTN2it2uddoKK77DzjEesnVgs9uoC",
  "key23": "5JneiomExR4BakLcLgptTPBmbipXubLkM8Dq5dUqNfA8ioDFgpgKnvETURc9uKjKm8egZ1nTKgt7TQM4ApptJQZn",
  "key24": "4mvD4WLaGGs9syd4vXiNGoYYysCKFB4owX3xnRbxsLcESQ3LdZWDyQQNyjXGKNcpUT7BPU9VKumMDpueKJ8FoxaW",
  "key25": "cJfbVvkU4JyD3c1CZFjyD3EtdLxDSMrsRCwLkEwPX5UoUxLaX18amk7LNRkRiuHW6CCvU5SfYpEQePwg8jAuXXR",
  "key26": "5etCM3kt2GMVefFy4db4ENkubdVybxJpvp6Y5wMnzKgRw4GeypM7qZgfSufvonYU5zi7uR5wv4ohbziTDFq5H3vp",
  "key27": "vobiztoN9d9yTrHyy5dvAQmtDWaN14dCCayqhx6P7LA9kaDbMhB3VnVQHg6thnzePj1zjjWH5SVXM46mPvPESzY",
  "key28": "4y2HE6BdmC6GnCkoigpumfTaT5CpGuzAiDaY7rwuGGTb7VeXr472QgRdtG5jv8XqAdhv7G2kiHLuXrtGxeCwKH2C",
  "key29": "3VTKecz7SCg9YmHw7v5HfRbkm4Xw9yShY81UX5AHNkKSX7qDdK8PQhFF7bjG2TkL1BocsZACe4HiEGHWgADjX98B",
  "key30": "RxvZUFZCb9y3yUuAYXsSmhfpqMvYsKRi97yE4FpKRKGLkqgMZqfNKpR6r6q1QJLxvYKT7gKmuU6W4UUDsGbYTVH",
  "key31": "2nfZXF6tFgj7yeBWFX2jT7XhhCrNVgCEDx1dwtA5Z3twkn9gXyCm7tg2TimuPDRny63vb1w7MuSS2e4rEGMjRem",
  "key32": "4kjp4H4yDEQV45EGaQ5YxsehpUB7ppaYgzsJuLuxWgg8VjFDwKwwXhzVhCJjDZpcopmP8Rzzb4iFKEoAcGkU65jo",
  "key33": "iizFDCqR3a4E9EXgbRxrJbZFFy6UzcKjdz6gZxWknRgJSn6mqPwkAo3xoo4Pn4xXfepgPu6CT6wBWjfiGZ8WSBL",
  "key34": "5LHuVjsKJAv8ZWFzNPP5hMHsdiyWvsGeyoxsEVWFs4usQSvREQkGJBrFv1D9u38upo3NqqGnK2k9fvuoXfSv4WtG",
  "key35": "36hJVPUAuKxZj9ugrmar2zEfW22aWeMEHH6paMDhu8nZBQj3KDZe77fqkNHBPFyyVqR4FBoj4EycSXMJMDZoLNgu",
  "key36": "2v6oBFd12govnVt7a1ar7eEEzGJzXdKKyPfsbB8LthXtSZQjXugd6BuabCB2fHRU3oiiFX8JefHvoqGC62LHmcJj"
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
