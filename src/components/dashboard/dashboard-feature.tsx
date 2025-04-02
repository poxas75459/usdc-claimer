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
    "4QhUG8wdMSaYHVmiahWUd9Az6iqWJtM7bYDYRpte3VnQtoc1P3LpYVnUvkAre1P8vjd371iNovzoENmejDQxeCeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHVuUbL6y5Q2f2ud8L7g9Tj9VZ1gVABZs8s6wE9q93J6NDRuKSo2FFYGjnnXYUo8JXkXVA1RnokVJQQrJe2dzVJ",
  "key1": "5Zfg6PtYAMwnJpEp9gyMjhiLHn2TGZ4rWMbkGpgDs7wxTeQcjJYQdhgRTmdMu3eStcZmJYCBjy6nHkBPgRdtC3hk",
  "key2": "3tdrNAACPN2KUtu2ZKeEz4vd3T2zUgAFE2qYWEbyPgSmTgeNB3wCLt7D2fQJNk9bT6i5rGg4mz6RgwysTiygmTHF",
  "key3": "2RAyr1QLbtoDCJMZkPjS2aHUY5ScUfRtjH61ad65WztkTeBP5VgrUdujyYuSx3uL9UabWqt949K8VkAGBj2iPKZM",
  "key4": "Jx12ubXAtGavAj1uwSUcq9BhqEgaxR6WtELNmzNT3RaUmsBdJ1rF5fgFSf67nE4TALcdoLUHGq2Ytt8AAGTMPLV",
  "key5": "5darCHW9QFEqDpSFoQQ2YigCLQFEHFMCJC4HbUsbVgWuSNtz8zbVU4WXvkd6QUouaNNoVv9Gwj75NvXWYobETwPg",
  "key6": "5Hb5xpyiGUpDTbvQ7eRUWmChybF6qRRzTFg8pFT4T3CzJryTgaidTK1f9QVZ99qBm6GrRV6Dp17WU4BkPVgy4wgw",
  "key7": "2duEm9nR4c7D77TmFT7zRfg5fBF18U92wWyVqMcupPYpEShf89A5yhNcqER9YW8F27kgqZdru6qWc52KYpixMBhP",
  "key8": "3hyxDmczroo44mKMVAdGAAq2izumKq1beFptXzxqf7yCfGLPnZvReK4Rjw2J7wZvft2DKfDQR69RBJCopiWtHik9",
  "key9": "5o3Mv3vpEBq8UWAaApu1daKTPE5HyZSYp2jpdiFZMBgGNxAnTF2YNq1z533ndtpqiUzzjj3LngfGWx6iqcM1YRYT",
  "key10": "2eTMDGHC2zZjrw6zJQYRXjyvDsWaFa7AeP46PWrN8kMutXhNmzCfJ5wam72hJanCteiyJQ4nYeRF68YBYVsDL2wr",
  "key11": "5omLRKShBd4zXwbPh4xkHWaFoKxnoRQJQjamhJYPFRZHzzQ2VKu7sRvXFfE9LsW23ftYQ6qK41Ge1Z4W3YTMXeQ5",
  "key12": "4qKBrWfseEbHtbkFTBcTBouJiA5vY396hn84qusC2Jpu3yMe14XChp1VaFdGsCVk5nHE1D3EjmPsx1qUoUYSkM3m",
  "key13": "57C7DDTANg6PqapQxqcibD5vtfCmxTP49gvt6jqDTXfTqJmtGKjbCRGBM7q3cc9JyqGScFUceVFn6AWSDBYuAkDh",
  "key14": "5yBGkj4CKqJLuzKrMEpU54Ya4ruTwabNmnXJubFm8MdDuVboU9X5aLVWZC9SK255TV54jTQoEXsj1yBw6E1cL8Co",
  "key15": "9qTsLD3PMkeRUkghPXXEhPWPkrUpEdWmBPrJQyZr4MGeunHHJaSJq7uyZ3s1Czjb5NEsUQnhFccPPPiAXRTFQFW",
  "key16": "61MbSbMpvB1rksqRSxAJ7zPFWkQEwTMSJYcuMrgzBRBNGBSyKTEEfDTzuQnhp19vgZ1mWCsmBBqg9B7W43M4XCzU",
  "key17": "2TrP3PuBvL5e465ivoNPzooC76xoyEENdvnWsaWqtRbxxBE8bUXPmLtwCkn9yjvhen7Pha49ybXSEc3bwZY1jKBa",
  "key18": "FR9H5T9bYBRRc8Mvr18QZLZL6c77YJmMWp8LjbHr5wHJvbrRNEVN851DkuYJrtTXfd5oLEK6xagXm8kJ5LJPidm",
  "key19": "427GLsShbK5gKH9ca2hTQTqM7nm6toM7xXD15CadMW74HGnvoncH3SSi6QSCZokfU87gx5WRczC2fCR9NLqZyupL",
  "key20": "5vHtwpC28nrcCPgsGQsZYZVuhM4seioAvdK7PNMvBvYeWMfPvmi6khJHWcfiyUcd82AxZCWmPEMmvFX3AtKUMCaW",
  "key21": "5vSEzvSf9J6ZxXsf73ATCAG43VvQLMVMFFFfqacgyaWV4Qfica8mkkaFwuXJDE9pGcUsuZV8C3pFz5eyY4wcdoEJ",
  "key22": "2ExA299zZeYKW2Pg1KZMsGz7LYHGUmKnQJRtZ3YmeS27PVitvSTUL4ee7vNCPtZF2USuxTFZBoL8uvAqtpvPZmyN",
  "key23": "5pZqCEuLSCj8fi8eRVBZ4KqyqcATJSb1wANssF981ceSGrze8Bm722CVyH8ZgEEJzJJ58H9ZmkCj4XPBphzV8tSY",
  "key24": "5QRwR8zWumu1UXizQhH1GkUTwwsherbry8VigmtgDHmNeV6cwrjMCQpCm6dSpAFdWE8j6ArQnKErDcX9wv9a7iJm",
  "key25": "5X6CEtXZCuc7CRue3eYoAQSfwLhgEasgi6hxwUtBeCoFmY38A4Zs2Bc4Tp2JyfTW5ddVAmxXHD9PDqDvKPTWnDuE",
  "key26": "4hY6JzSsdByUHuU1qYQu58xa86WKepHTse3T8TymMVBgZCAAggSTsYJy9UTRd4ntjM6oGGzjxXwz8Zek3LF1BQ2Q",
  "key27": "VbhMpPfYN2kSwEiQR4bpfExhfG8cbDkXkUXQxCKtDqNuqFnC72hVhYq2QdiRRJPY7RujKbuJ6xwnEyyTBt2UP3g",
  "key28": "MtsRC1vxJhgxXajPYytpM5dJsuRMXjQMuEopiwJMuqvxikSRTH2kiLoQwG87N6nTccodozJdKiwfhYZzQpkEh4H",
  "key29": "51pLv5m4mV5UxnAtGA9TQ8JgLEk9cywLhGqb5RcL3exMtUruNS33yT3Vp8HKCZVAmLD3a5kemWWoaP1nG27jvs1M",
  "key30": "2NKRtX8id5grBhhRHZuEKQPuyh4uanXGToUywE9iP3s6Gm3qRZwSewh3XYYYCar9Jn8sx77KKK53bcCzh8fRmK8M",
  "key31": "PMNxaiMAYHj6phtXCQ2QyaqRKZuSem82erGDowomJPqfZtDpuMs9jKWbXBieHepCajKo1fogVF5ewgzq4mBFdSe",
  "key32": "4C4A8vJgBTH6ExjT6eCZjTwgaW1KAmRURN4GMD3x5NRTKHXMz2PrbQyvV5uFXbTjEY9NdEQqSDQsqpdhPgv1c3tx",
  "key33": "4RBaufZc2T2TvvEzdXsc1JedQjPa78sB83pnt4tBXsbVXpc3hKRsgm64kz2AnHVdyBAZPxSbtzTJvhJ5ytphhjKP",
  "key34": "61b4hTYofVo1AmdpT9KApBDCPrs2FCN4isEFTEbkDFFy7QXCB4NytverBAvLSKfZhAKXeHu9BXpvARuQBYRHMU8S",
  "key35": "muMuVeu9PiiXUmrB52EuWpz77dCBv5svGS4PkSR1CYvBL2p1W4YPDc5J2mDBdt4ZNV1TS5SkGCvJnUqvHGoyb8H",
  "key36": "4vmDJxWdB4rnjx9qKXz2BDwLFc1K3DrAZX5oGEfysp556f238hmXAe49AtWw1VMtVDLhy5WJrusa7zNqJVQpQCaX",
  "key37": "4HPjSd7XmkitNeETjHMZewRZwbxcHTNDKwSRHMbdjmecWWSmRHtwBqKH9bvDTmABpMY3LNJbRRPSXgjJF8VMP6ym",
  "key38": "5D3gZb4AXTY6sjGNxwoKDkEiC1gLX6jX7B4QTMCxkdGdRtAXmt9Sf29WtNRDZRA8v4kUwoHKmgawpCuWc9TVoiVG"
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
