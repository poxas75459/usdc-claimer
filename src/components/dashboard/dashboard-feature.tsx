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
    "4ie4XuZsqRVPdVB8yLQJsQaRTfV4PcSpRwixHhPa3s4Bv6UEhiYdBEVxpCskRcKXJG4zNvaSg1ehKSkYdFdpPpgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LoGqjkXK6jgp6ZK2FGGFnLSAzc4cAMDDNyR5r5WsHjL5d8U2BQwL6c8uWyse9VWvc6g5AqSths5z32rpdtchrBw",
  "key1": "6ZZVUgajh3AdhnkQ1ZMaxGxdnSiiw5edjeUqfUfPqBi1JysaKJtfxQ9Cz3QFEykJ5LtsSvnA2ZVTfbvArWHhcXq",
  "key2": "KppsrEwHWWr6PRzu7bZeTbMC5W7NEM4J9wMfoNhpc31d5N2vxwCs9B2JpaX43TXmmL5z3hb1erBrUqb85zVPeky",
  "key3": "xzTwWcxbT75Et8rHyKv6LBuSsFaiY3fSPbu1FMg9VEZqCiBh6zbcL7tz5bfZuPafQebT8uwcNF49ahXW7iguacJ",
  "key4": "3ue3UZ6ZThSrhGWi441Go39nMA4wsDMTHhoZ1uKTVFx8iRyMtnwXbn2Wkh1Etcs19XgWX1L3AiAMt2c5aC33pQuB",
  "key5": "25119UYMf8kP3zjfc2RbqxuHCDLW6HtKGe3vKJtSyWkfA89tZtymHPqipJAfWY3gFxEjhScLVmBfSWYfBY1drHEB",
  "key6": "583jWNetJAn8UJMJBJx5s6kYf3JqmcBbWDkrQQyJPebPbJ9a89KuFkbbwQRRMKDruWMrxqnhNeDYNNFtpAEa71bp",
  "key7": "em9pK5rm68tksnFmvkpxC3oeepAXWrnfdCmwFhdR4qnKSm9NjMXtcx16LnnXnHM9qL9tsACke6gu46FqhcAwBv9",
  "key8": "2YRmBk69hF7P9FoqQomrEq3RbL4XH8LD9gSMvVmrVXBZJ2T9n79Dj7np7DG7mTAmqeMRSn5ChrTH57W6gU3QN1Fd",
  "key9": "2wovvFhQBtUkvaB7KMKE6Afkbbz3fWGL2eXTwrVA2fBLDkKwS2wUwtWPgd3do4t8LAmuCeUxGiLMGo51PksKKNw6",
  "key10": "38nHbvmNz7TGEabCqcKqi3MDr1QU7t2NNe4LUgMzxoC7qTyjkRdKaZmJJRPXN6RxFDLacXRhMNrTtuKf6TH3kcb",
  "key11": "2CXmC6kXFBG9KiWhW4J5fWs4aTT4dbM7bgrdEjWuAgAd2NTSinWWeFz9HHH4cgy6qxiMqbrFN5xY8fihb83tZYa",
  "key12": "2prhvNMjUEqDvAM29QbDWw5iKdk3YvYKGcyTJekVNn4KPQ9YMr7sH4tbcZZvugXKSWxtfH74cEGPrVoGd2GRxDBr",
  "key13": "4QY7bSRtJTqkNNxxZ8dCGK2RALeLz1mM2ta1qiwx8komdCGGYB2B4YPHQArpzVA5yJSSchis2j24S6wfNQRQx7uj",
  "key14": "LbQVdDMqcmYtA5FHXAVYh4gn22ZWQh1sFUZwjM9wK3vFkp3CFLcC1zGMyg3ZabrJcThVGa2Gd11Ruf41doVmCdS",
  "key15": "5ZbNV65BuHeg2G1aqS6eHqS8oHdJngJR576YaMcUAnBXG1kw9CqTSHSzHH6rBLWniMKW4prf6mtYiqpGtJo7qpu6",
  "key16": "eBvhVqYdoNpTjveCvTpVw1qxoKTy4gcgQRgrUNYJFdKYkiViWEFyFu1pjfsBFQfbdjHKHcfgDKmQuZZgEdWVNFw",
  "key17": "5PnU4YTLzGCxR5wQqosWPBLJWFd3jETVgsKrLwbguX3sP2cQ9uGPCcihLQiQAUBeQ49BFvTigGAPHcVNiDJ2dz4f",
  "key18": "5gijbz1KTU7PLmURNjEza7QkPWh8t7qPr8VAVuRHfXUNJAx1ceTpJyDQD24Vy8mWsW56xfWbgg5KvWLtLKFicAzt",
  "key19": "48fur9LkT1eRhPePboa9uLYRQGzxb5aZJmVcu1PVYDmx37Q46JXounkEHzfd5Tx1gdQ3AxqNuX8zSeFc34rarri2",
  "key20": "2e4kVxNYVTNYP9zT8Ld1YaDPuBABeAFMk9Rf3Fpgi6QEA6nEhAKjezqaRzTNwfL8yExQvxMKRD2YXpUgWcjVcXxu",
  "key21": "3X53ChQVjMaeumL9ik5DsB1abZZRegCRJeeDRQfCksHFWYHncZgrkptgUEhjmrHa6aGedfiHm1nzvALoWP9Hsyfk",
  "key22": "2YoJHoKeGNZL1kBRjmYg6fGLCRet1J1yCBYGSsjsxTneUuYXk9i7AEnCo26z6ivfJJk179ycB8jk5g8uH7uY4iWn",
  "key23": "5NaPwNTETbA25dQP9QUTxM9k5ucGnm9raSRDWh4N2w39AjCnczo26vFPeanrrj7B4E3f7o7JuP5MbMQG7Up6TgRr",
  "key24": "4K3G4ayobpTfchy4K2Q3iHSt29UxYB9YQirLCkxK692ATPWjCapWcbjqxEmsSyicqkJdE5zhdhcxhXjLkmSizYiu",
  "key25": "4GWTstrZ8FkGKN8eMtL62YX2f7LwvTzLwfR6ydZjUZRpmiXgJiWvrMdWHEVJnZU85t3Sq98uQNdakb4mNo8Vq2de",
  "key26": "LmgifVqBxSmeu6K6YrXHAfYAWHr9RH43AhKUhnEQ6XHyfJf6P4Gu9qpne4Z1G9KDAJPECHQbQ4jvgA9RbvDmioY",
  "key27": "4ArWA14LAQNCwYvjeoKvh5nF7jY3wNAN8Bh1BAhW3xHXJtgDHc376uzi5Cjq7FXKCMK6TVvuCDBehyLkV6BVq1hp",
  "key28": "3AjjV2YVczbSirwznUZHfZfgEpE3siAN54jfhu51bzavtiz9Jz9TY2GTUyCZRBAiBySi8R5teVp3zgBWdcFoCzh7",
  "key29": "45evRNjC9AvXYEQuK9MMrB3ufjhotBMnfRNqZCY5VSrHstiXMQgVp96FUrUFGBQSupnvamP8hKHn2ekdPSWMVPLs",
  "key30": "37c1j3ygqsABykzQPcn49Pgk5odwJt9556Qwxw5DqvSH9aYGy77k1vMw4VjYyXr8phKhEawV2scBxy6mqvddRAee",
  "key31": "U25tujMobBfxbekVYBxomFF1GGyRoCVE12gRuqYregKhR5Hk1dX1iKjh7XwgSPbV1E49824CiXqEznMJyM3ZN51",
  "key32": "3s8uc9SQrHJgGNkuGwrcujX5cvXY6rrBNKG6jB2p9Ahd4iH6iVu1H3KTKLwvg9z37aFV4mjh2F1QMjejEAcqERRX",
  "key33": "4DmaxKBA47jPpX87Jz6gxBLJ4ARD4dQPaKP2nNE82gPYT1DX6UsXucQKsScTGW6TH4jnSqr74qyjP8LT2q48QDXh",
  "key34": "55zKY4a35WTuEptvQd9Xg2oHtdTL31aeuV9PuxDac5QMTCi7j1JQWXdsULSHUoKS6e24c6YxjKTh4guqdCJjnqko",
  "key35": "2BMu6MHgqDPuYSwgCXrb7xCpryc2m1LazLymccQK8RVzJASVbHgU684Ct1JVDCbRT5Q1LENTLMrNyHNkm3MH81YR",
  "key36": "4mLXXSwQ2aKz13ER3uT378JwtAGtu2E8bqyzocVquNFGAmf9kEdHDZNFYdAVZUTHjHgYB9Aj9rkA8c5eBRGjxHn3",
  "key37": "5NPP5eRfRmyHtMRCtbnfSZpcPrYRhd9ik2oarh3Bng21pSyqdg95hQGyvr7xPbzLzYLyWdvVj8K4PgQXYS747BDC",
  "key38": "4BYMX1foavtWJuEDcfLM9wHbwVmgKrVAcge1qDNxUPifvFLstjFoH2qrbjncQeSske1GW7N8xTDGhYro1RcFf73c",
  "key39": "4JZoV3JvqsxpiR6Sy4nKrmhonsFB2RQiK7bRw23n1JW7Btn3tnuoP543FKBhjpELUiiisAmp8zWsq58kTRjERU4s",
  "key40": "5DFqRhjk8DvskVr5JabeDGGT39RcJVDLTcTAzAL1BrAj8LfAzKcLMCy5CpnZGiwtnJa2B8pv4LcaSMuGeHaaML1o",
  "key41": "5L7wHyxz2zEFc1QyebQSUccZXaUGXKg1REDFyLVgXxjwnohGBKiA9i7gPce6ASLCm6sUvPZBzWEfxaCe6a4Bqp3L",
  "key42": "3ezXQuX8Uy5GvdNm1ijjU6J4Kwp8qXf5jUfkVq6RqKUcVAdHCZXziqhJ2nV7J22V1A9uqjz2x2FHi2bd6SQAY747",
  "key43": "3XZKoSGk9LqQrmDbqubGA8JSU89uPSwXyctM6vkuk7cQCp7UYpULgzPYcJ6qGzUBFE3hBFJhCEpRvtnHK33X1pwM",
  "key44": "2iDQL7zmiVc7p8tLbc2EeAb6NyR1itbz8sXsa7QVmtVMNrze1WKnFTBSwCwVqXvEBR37AfCthhSiaD5ocYcnpKPb",
  "key45": "fXeNxFr9NDJtJQFB1wnJ3H4gfqf8He2QzEQtH7m28PUGUGcU1YaU4QYrZgMR8sEt6UVhKsWWQcseaUcb2t4HCVn",
  "key46": "5Rgn916KBfLhi4Hda6ZspN3tipDShCChEWBFS3WFep6JnBFbi8mJsfSrtqay97pMyk4i4YHKRbQuWY8q55ezqNpy",
  "key47": "5TAy8M62qL2tX4FF1L2KsyS8kuHkmpXy17c9hJgb3bJpExyQnvgCw6mEFTAn6JG2GWHhYW5SzdwMBHuYWx99GmCR"
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
