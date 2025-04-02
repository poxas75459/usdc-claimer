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
    "5yHmSQp68iKxzNtSxzwXwGyFcVMjLYiHG2GMrrZXhSCTmHkUeP3mw1fDEqrfuoHnPRuVCHW1YjN5sWrMdamJVLo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "472cK7bppyKaPDFM9XP8JRZhS2VRbaMikTq2pP7DBZaxC1zVBijvRFBn6FZfsPkhbYTCRXqK3BupQ65LzZkjMXBE",
  "key1": "4jbusDbUmhk2wikFbGdWrxsd3Pw4XigpHqDa21ZES9qiQrP4Zmojom5ZE9GqNVbUa1XYqubKhsttxzHdW7Pa2Utq",
  "key2": "5XnsDBLRy5YU4CwZahKBo6xxTiXfRHLr4xLhnpYu9r2VxATwLBvX9GV4iXYcTX3AsXUE3nqXj5thQjmYeywDwzJu",
  "key3": "L6cexxvTTyRhjdG9LafzVmeWwFi6uzD1k7wpb1yzzwvEUnfK1sxZxMAgdUDgvPR45TQPTVaBqoCfcdTovRJwEhT",
  "key4": "nx2sHa3ZjS4nXhmYNjJpn6A5bqpBBg3kqMg4diyUU8uXfBdYqiRXyPBPcA9He48WAZRHDnZiVMfEf6vFFURgGnM",
  "key5": "5DV6aBp9uBEvZAq9TzEUsRN6kf1XPkb4M369AH2kTJkGxKYrNWpHanEjwk9ZRNj4KZegydLkAyNTnwkaySenLJ83",
  "key6": "3fKxHcUZJM12mchJsferR7DUjGwke2PVUTtmh5PX1L5koWyg6oWdQXRqjEo8aWcrnFZ1UmJVoXwjkY1J6i8yX7W4",
  "key7": "33duLhLhao7ifAWHaeZ7HkvUuQVSM6pw46e5VyqTnBMq7bahN9Liv5pTUZLfacpCYnYdZnv8EGtBxmEULC6czgtt",
  "key8": "2KCSWEZTxsah6xKH39E7M4b634GcQzTyrjbt8m77YfitBezZNuicDbshCWZNo4rqoyqrErhwgVCnYEw6UBpNR6S2",
  "key9": "2vLNAgQZSQLBJPHRWus6gaduqZctofWfjK3wJkUeNn9dgYc2C2vdcUVSGfMCe9z4iWUZAj6Fez8wKTkkK5gKye3j",
  "key10": "3miXaa37GmFJVdorhmy1hDqZrQHQrRmTtvqhjChxMRw2SvNSBqkuZpiDAxM158Bdw6KrR6vrBV241uUJCt2QZhW2",
  "key11": "3HoVYCDSGwkPZ2hmUN3aYeDRUW6URWpBW8iCavtr87m7qCN4Z86tsrtyhmxcK97KwJTyMTyY1jcKTVynh1oAdU6Z",
  "key12": "23vaN4DUhfX988RLiezrRtHhkGDS2QUw14qPVtUvprBEVM6jsT9STtcAhZp4baZw8zcqCmoV7eA63ndiTTyuVjhr",
  "key13": "4ncfTeTbsRMM9aUwWCcHSANAX6jkrjPo3gJpxpaYe1sYhZqwMpJHYeiwqv9Gmkq3efh752NC5429vwuZwNAsgLtJ",
  "key14": "37Xsxo39k6PuHT1CDZM4Lsfnhgv8eJ5Eb1Axq2UiaYxtctYq1jp3S31LrU1ognsjiB3CyL9hrHmnY1CC6TuLVgLS",
  "key15": "5qFq5DARjP6ikZMRYA4ktrQpgxGWWg6YaxCM6Ph4PhHDxW6T3Dd7oMJ9wqAmTAdJ2vMQg4gKqjJhX8BCbzUucwXg",
  "key16": "4jUKXf8fZEevGsZUu38jakm1SxHib9KNDCpW5nkno7RuT1vUrHyy5qW6BNkzuoKmrm2pWyZEVAxRxCW81SMfvcz2",
  "key17": "43EJbaJMTvEfnzBxE462bz1zhTuk7Ne2qfgK9NPqYnN2u1yHx54fQJcC3CMZ99cix2XNtcaBmUb3kijcSfBsaZ8A",
  "key18": "5jZY6i8jHyW5gaSSL417rqg5Sv34Q4Y24iRvQv7xjCbzZFEUKnN7h2AmxKBhroyidRjqzMkWPbS6YjPyAZAMjmri",
  "key19": "3jUpyd8QBs1U8sttHkP9kA43YMfGMUX8xT5TH3p3RcFeYTUs4JWA8266zJbhkYmHHAY1GBqDnjfFVqshBfUFCGLX",
  "key20": "4knNtzVei4AdMkPnyYjPLmTKiF1Zyv7RCseLGcbkJ5MpEoRMSUrkXFc5uwwzBLnVBMsAvPJv4Xhsz5SXgE1fDnzJ",
  "key21": "4SVSiagJC5o2Mvfw7k1mfWZ31SgdTKp9XajGrTaDxRbE5comEyJ1Lo1UJrHY6sBbhenPSPfmrBMLZskWymj1ydfo",
  "key22": "YsNFwLcspwdhV51S1oEF34iS5Eu4ESoeYKSpRYJsAALxJRGSvDH7PymeQdyx2aYiJgF96bFz4Qbg7efbFAtwP5V",
  "key23": "4K9zJWorRGdNGNfqJFyxhsxs2kEYU4GtzMqyfogJbXicGo7LiaUtgXyhVkcDaMWQWeraGwZhje68D3kvHKebJk1P",
  "key24": "67keAA1TaYSHWMruZ1VPpyvGmAGjMahyWbZN7DbdcSNnfrPS2UZRL3CKJAYpkGMaqsTFdNDsdqYSq3YU6itwP41T",
  "key25": "3QprMw6CMF6GTGTvcCrXyTqnvWDBcW5bPZAt4nSfDifhLoMqZLD29WX2ySUnDfPt5ekPnpMs1He9XYX5JGQaiDk7",
  "key26": "4dUkWjB9Ft86aHu4BeRzJuRuHma8fpCFZiPYe9iLJGtMFpf8A24b8vDfeXoXmhJ9WohA2Zi2wtZcJook5eG211YM",
  "key27": "3EkSzWoZgVqh7d2p1iP6xVQQftdZt4prDjvndRGmvTCs4FJBvEFzJyTZfnYZgp86chjz6J2zwy2TtJnvBanyk46x",
  "key28": "5P2GgHAHWJyH4Cx3zECcmaDuAQxrANmdbypHS4rLtnYz88jPASujMrYkJ7q5qMszM5TCeVPxGq68KZcKCnDKy8px",
  "key29": "CHb6ZB4MsWd9kn2V7Aifz94Wt3mSwJR26Q4qzSVVAq9Sew6CXiysBAZVU5zRAzq4ZjcQXaPCtm7CeQ978A958Pp",
  "key30": "5kfZxqQbBNpWiTBzSAWQDEU6AZUsbRND34pdPfCPmnTQwbbM6xAGaPripXQuu8k8mfr1kxPxkG2Xz7M5zTn6ZhA1",
  "key31": "ydXu2kpNhd7BsyuPiPXipAWueYjUSefsWEA1P5YAVbopNQnVc3DdqKsYjNC8wxrR7TdgfLPks41drWXkPp1TiM1",
  "key32": "3hLgovoVx1ZuwrH4NDtsRJ9TnjhnACMQtxnkABD2dmabkZYEXd1WY4dHYyunFvEogfuQrS1gReYTzhEV8kveDpTT",
  "key33": "5rtoidCmjnD6qpyj2k85QaujUnJ75pfQrC7ED7sfMEQbbaUytkbpMWdzpsHQLd7teC6yU5SwjgmF3trdKsFXvSvS",
  "key34": "2zwz9fjHPmZGF8E7ZhUD7qFuhFPK5W5e1rnVqu2ymjh1cYHpK9YHueJFjxNb2vYBzi2uKvKc5bkGa6sfaHugcQ48",
  "key35": "5sAFLiBzCqJuNunWAdnJnzk3ujD2wm657yp4fPbdp7vryCe9wExoAusoo6tN5SkYTnSQ66ZRQvHaahApWfsAod7G",
  "key36": "5d2Pkqxc4aXmJ7QxnViBcjEsyjnRmoGKRZUoou72t5iU7KpVYttH5VAU5pueTL3wgcnqT4aSiTAEyBrdGiSqzSrU",
  "key37": "221HJ4qVJvHNUVLuBkPXprFza1PPLMhpgKhUrV5Q7k7WxdH7HmxNBb6rfp9GZMLveUEgNz9T58ytqrwWAxHSHyyg",
  "key38": "4SFcaatwyuuyf3w3ztf68dKJ5MWsgbvUgZ29NNyyjikjbRCwyCCRzHGmCQbhMKW5B1yAYPwyDEwzvBTmU4ENokCS",
  "key39": "4AsFXmaQFpRAx9BarJgvu5bwgbmGsmhZ4txpEqzEy4UQ3drjjwqjngcm7oDRFB4yUJp91SmG1HJ5kDLKBi3Fx7nJ",
  "key40": "5GMoX3NWaS4Nm4CMzG5Upc1ySyXW57EQnEmRXyTPMnJZ6czX9jFF971mHKjf7iJADPax7YRqn6PsPsdmsfSHeZj",
  "key41": "4xk1my3Pj5Yj7sMQR8hFqnZ63bxycvFuSUeMgpR9NEiR77xWX7nXEBjJ8DE679XoPbTnLtPzC3eer41VTyPwK2Tr",
  "key42": "5RzdDV1guRvRVVRutw2ZZu1WvMTot1ggyBW3f3U9W5EHYiTcaVzBQ7rZeFJdcRgkLu5XYBkTfiymVUV9oN5iEed"
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
