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
    "2omBDM3rT46jrpdVgYP2bDgwqTMdenKjy3jYd5inufTSQ9bC8moiV3d7XdEK58qiftkKG8R53YkjNroee4yAcdLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvULhX3R5sy4eABhCmoijH5mCJvA4WHQfy3tFajZmJp5Q1EbCzeWFRBkLSutgL66FiKFC2gv3jVpuaMts6UH8rA",
  "key1": "5aVG7kwYM9EwQynoegPxdi6Tcb9RBLJk8QDHoGLrWMjBXeitAWJHbwcsq8Hwwq4WLNPCJtAWKkvWvEZx8EZRYorM",
  "key2": "3wrGvB5Qs1RCbvQwYHJKFFL5MATWGgfdzurWdBKEqBzq9GxUc3SbheLXRL9uaRWWQ6AL49566eUHVUyeQZ9ne4Lb",
  "key3": "5yJxRBArW6zS3pVREPGzsqqqtKstv3PD5e4QnRZZtiB1dPjMEUSp8Sop38JyYdoK5Da3kuLXJ8oj72ptvgCUSBNh",
  "key4": "zJ9YR8K9iZeG4iqMYt66asVYycdPcwq12Q8cmPa5qDQutEN4ju9Ewo8JVjqL3RePQYzJUEm2JamQXyoMKYPE94F",
  "key5": "21eFT7z3ScmATGQWkZS1rPVbjSFZsMoZFPj3K4XkinEpt3uLbconF4peQr76td3AGk5w3MvxYgGDNZfDzLKPVtZ5",
  "key6": "55TfeCyTUKJKWrEwjmnUSay32oQh5wkij7WGNK9JphKVjR9wWeGmJLniU3FfvuMoFBtn2WJtdU3iPhbjtU48dQpu",
  "key7": "4tB7brrCqJQdbXZRXRn4k7vBQV8ZAAraMeDyT1X4mBRekwy1PUyDFvJAo93RcvwLv8MNXiGFCHyc83xaXk2aYMpX",
  "key8": "3JwvaAhnoKJhgXpiTBVM5MT9RTapfm4g5hB3UPhmUAbh9gr7aqQHYWEQ6VGbrKmqA7UKjwss59xgZ9N9FyS6aDGz",
  "key9": "4jgCbAksKc5zyYoaJgQdmheVNsm9bRiDyJvihdqw5RwKhJHgNpY4JBAUBGRQW7syJNay7JVHQq3VBVrMnWjYcp93",
  "key10": "USdQKXGXZhPRbPjhiBEMaNs7qhGu1nS7VbTVxnPbK984Mm9sG8fDw1NGUF7R1P9cMY3V3oTY9Qv7eXVcfXUQTBr",
  "key11": "4ci9i1BTRieqdKURsBkXqJ1W75ZQawWmPMdtCADgWbXAkTef3nyBMDt9NUqxgfkHJwkMFmjRX9Z43cDAafo1EN2X",
  "key12": "24fVhe44WZ3DcWUXmB8jijSKt2R3TtX4MoEGe1NzJW79Br8i7ZozYmeXsZLjpDMT5cZ3ncgCcQT43BXVt5xDphfv",
  "key13": "5CBfBCrRbPzFstfPeFZ7hVjZzrePZS6As2DsQS4fyLMpGjvqxw7QZmfMkEr9nc79Xui9uA2WkMZwMeBFSjffyVE6",
  "key14": "4UY2EHiWeRcGBdQJHhLE8kjYKYP4n5FhTLCTozEWWAeiuwwLWF9U7UmHLVrWYqauVRkMLibs17jiDgPhRL4eCkYN",
  "key15": "4PAEQMHV4DmEE94c8e4gbBQrbTYdMUtArLTgWsSX1qSjAcUZMEcMnVAJ3EepvpaGeUGy4MT3PZfJBQPD4TKCgsvE",
  "key16": "3iYvHDC3FW64DNHPzR858bovvvTJ5csM75EAQKBuPeRYLXr2DN58H1YLrneRz6HNyVtcQvu7ULwTmR2nkf4KPWBC",
  "key17": "4BF7J5TiKuymZd8Zps84ChUswgqzE3mWZaw45UfPf8tFVweYh5iCh8KZgtjQc7JnFZx8sEaka8fQBjvUwvNhU23r",
  "key18": "ZB8LiCAjgxdGH5Q6PysQXqHk4uciHVxBLxCZVC2PFcN4a18mZNFNDcHteuuPDH8gS2zLKJRH4wMu8jk7FQGhurf",
  "key19": "4eVUuiuFVNCR1xm5ZsiNSCcKxjzsiYt6n6hVPxZkyDA34gWFVnb4Aw4cLBq8DUadKQg3iV8gA3Nscoj6kENGaHCe",
  "key20": "PJbMcdxDHT8r8vxsJvRSmbL1uV3zjNMWUiV8qJqn1K9jjBiACDT51jtZg3W2PE5w49dbhQwAuDqqpSvTkgdsCCF",
  "key21": "4XB8EhUYSiCNkbyGm9Wd8Udq8UN55XZwwywDMLPXuJ3HRVrJbuo2w4fvrNGaFAnJ5WRfke3vdyiGgckgEo8Cv9F1",
  "key22": "dWehPAoo7RNRrh3VDGNuyRzGnwDDnimsZKn42mkPkmhkUeSYTKU1f4umdY5zs3o8iTPmDJmEsdMrZ79Zm8poNHj",
  "key23": "4FgxyGzmTKRrNUguasWgAXmTvyPyMTqa4R678Js8CrTy49ZZLS8pTuT9U5dWT4zpHyfxrfmjpw6am9aTJG5FJ313",
  "key24": "GdskBNyiCAbiaBVdW3VdhnJ4AebHXbbCa7QHxn1EH5X2etYfZaRLgrsiZXAw4NedDckNgBSvshGcea22rBNTXGq",
  "key25": "3dvQw57BmkfU5E9PRbVptMMsNk9DtfiFWGVo31GpZBKcN2GHqPKtsJ8BCtPtkh3QRuJ6T4v1crTVNhdCv2guNJ1Z",
  "key26": "55bdykYjXTAeJhRRDKXUsJHURg1beKmEv6pKpXjDw6tWZ5q2k5nAhocoJdHFEhe6oefqFEiHUup9EURWD7uPeQzf",
  "key27": "2py5GiWEKVjjwwUiP8N9xt7HABcSKmsKWiQzbxUbMvAPv5BPdgF7DMBWRTKCj8G4JRRBUYBmxd2Bhu379cs26GBT",
  "key28": "4g2RG3uU6Sbe5YP4fiDwLa5GJA1GRXKJyco9mA2ZGn1KmS5xW9KqqXZHN7ka95JE9bgimD4T88ReBGQxecyifkAc",
  "key29": "m2LQ8zsR8kdxAMMLx5dxxHRmrvKvm7tTBrwg83bD4hBNV3kKHLDxdjVYHHTHXDjSvrbBxgBDjpQs63Mu2skynu3",
  "key30": "2arbqnEMydXSRPcvdjkC58kBRmba2ppyAHF2YNU8TuJjbxFC3DHozKCe7mp44WDdQmUZubjFKZzBrTDMtXfwGVVZ",
  "key31": "5TynPS5x3R6PfS2JU83gpCgvSufUJQo53cAEjUh7Fz1VgRespgoe1xRmybnqGAezHLUN1v4BeMDjq7w4TPq2gKm1",
  "key32": "5uMvVX2gh62psTUq9pwZoatkPRyn18ogq3xy3P3WuYkXMrVSoG4NCLMVNNiUn1hrLP4uxthBvjeu3AZfht6wduE5",
  "key33": "2ktk4bPMvuccPRfLeyALcbHEmegxRTPfNUub36dLKCJ9ESTVSKsTLeHGytEMTrXn2ZZcJywWVnMjWDSjxqaRXAA",
  "key34": "PvEsfiktVbTPNQbFvwTSQ3vo5MzZuZPzh3ihS9t6pbHAU6QgttGUvUb18MzV7L5Sp46uPe8S87XRdSG348HoKi8",
  "key35": "4c8G2L4ro8eCGarRNKNCHtU3FfpWAJVkvk4QtNrK2X1i7Fx4REKB4bd6NKBGBckCzryFfrtMNvjYDdEMCNWzNoY1",
  "key36": "28D7yWNq1LNozyWQ6ugCMEWcX4jXwbF5sztyJep2wGfrqUKKockvSysFLcz7KiTjsGxvY4MVEg1zE2PVAA73S9xJ",
  "key37": "4UWHknrGfCqBDk5WLcqEwt5WR2iB9tAXErSxxoD1voC84GTCmsGM5qndZXoAy8uPw7hw9ZznQCNWdt7LDkS4QPjN",
  "key38": "3rxUsvNRyJDu9tx2zTNCtYkiam1ynZUsuXpQDtBVXsnnzxFwYyyGpKgEQX2aPGm3uxkEFnSiTc9ezJEhFhYDJLGo",
  "key39": "3bTb1p9LYYu1HVwesMH9QRVpWwEUpky2oJ9EGWCMhQR8Us4FkLb3mc3EwP63D8sWawhc8xjooZ9p8RjdYHXj81HT",
  "key40": "2CH1ZNwyAUXoTdsybtic7vfHJ2zZd9GkRBPgeL1aLHynMW2DBxYAAg5dM2i4aTCimc7bn87NFnTjBTXrEuBnbujL"
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
