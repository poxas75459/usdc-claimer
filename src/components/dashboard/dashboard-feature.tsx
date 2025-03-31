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
    "tkgbTU2otE9pFiifGSUZnNF5zitHJ5KKjhfr6XaMNcNzphytSTU1K2mrd7GUKYTKAkZ18rGTjXmNDewxEsq8JKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZA43auXzSP7M9zcQi1q6Pk2nt9KeuTvAiEH9pK7hfo7jW5bUBNqPNkrNhjPuqgDhTLToanSzQsTuxUtZa8LFoUp",
  "key1": "2NFH9hS39Xptzda4MajcPu3Hd52QxSbgnEaq6huEZEbHFDmCzqX5mCbLUukxaUGnZAzLURHdZ3dx9S8Qc7uCZWLf",
  "key2": "3r3GvN34GsofKBLdFKkVNc42LQZYnBqtMfck6z4fHezWqq3LGPv7MvmmMRwSgQMxPjxeZhWFzCnjAWBGcqRXnQZK",
  "key3": "4vu2W6iX7WtXnREy1nx4UubYiZdG4ja3EGbH8yUWNbgFKrwWuHYZcMiJwyezqW5oDJ9m31TZsgDBCptcFWFtFuY5",
  "key4": "4L9baX5RvUurYW2gUP8fyYhgJAd89CcNFSy6Gpc4NwZ4cWpHWtVRxz9AazQam8dhfoV7EvZfdpQbqmBLWkChDzGC",
  "key5": "4A4GLU8JhGT3KPeWo4dfbarRZY2DLyHnXhz4xPKHkRLgh2duMWPtC1mxPEgf8wBZeLTRBjTmynS6PtNZnVU91Mb8",
  "key6": "5mmopDWVMX2TN2kVVQrxipuzL6Ge1yVRWwk1V49mNVA8FtFb9gmU1EQDkuAFatfZ5LGkCzJpKuQHuYRvK3ERjq8c",
  "key7": "4uUs51nLhWsLimM6BHMBuAj36hqcyAhZ68Zw7RtP9i2uAeyjrcJ2gHho22rThXwjioR3TSgYbqAPbMStikgLqL98",
  "key8": "5vyadqECUvnZ6sK8n3jHz9HaYz5tLHHVW66EHTZHJaeeXHGNeK1T4Na7PgGmei2VaWmLgSzpfMLRrX2jAvrjUanj",
  "key9": "66Vu6pWgvkoQYwY7vnGyW2tCxFa1Ncso2SpVCzSWcPopWWCJ5F2tgwxUDypToaFGUiJT2297YphCnyaMzcHPKcmS",
  "key10": "2BwJSKR54x7qXNF87GSdpdCpiizevnqFd8AGJhno443QmSb4BodF7FCkAwxS3othxSX4PTy5DaV1beAGgUAwZ3rh",
  "key11": "4gR9u9sxga4xsFDwiPAKJeWBVSuPxbJkJZPpUsoMEkq5WBFu7BEHmM4Etvc13RLnnTjkuuubcdzh2U7U2rFcmuQ",
  "key12": "2JkB9AvoQEJzzVJuCCyuzp5wSw46DJWQqZkhunftSsxqXLLsZGTHWMmAcargfJEpjKFsXi1DTesDSM9D65j1Ukj7",
  "key13": "2UoSVHefvAYzxrvSoJ82vJ8M4gBE5eVGypQLScQTjZgkU1WLfHKg37qD6rRrFLff7J5V88yM5J5AS7pSELWbu6e3",
  "key14": "9uawq8PTScJ1bdd3EU1RrurGF1XrkbEMWYFhY9aRbpGHBQzb3Usqpob21ZNAnYL7X7DJzMwPdyHAHafWBR9qibZ",
  "key15": "2iXrUfh3yGhKRe8KNgXFUiYdVeuRKoD2beT5xm2rdTLTf2Rux8jKJ8dbdYTV8ebLYq583373ShSaWpe1AXeVwYJK",
  "key16": "Cym134W3husZRxB4BjKSWznsngZ9BSfDRLBMHM514dkCDCV2DGibt1UXedWHcty2SxceXfncKj3GPc5xxARUUpt",
  "key17": "4K1u2eP2kF8JFbGrwmrx5RMo6MhJwUm8JsQsrgBCVhGhv7Rj7ZuEcxvRq37SuMitcRJNx3Gc93TikHx4kGcdpR4g",
  "key18": "4FbRGJ7fQK5nNF1b4EqveXfPzUiPbUns6A3r5b6W3qt5fLwf4j5n5n4SkVeUDnq3J1A9usyo9uQsXgDGknrcjz3y",
  "key19": "3uRWQUWzFWmugYdWW6CeSEtM8V1W3XNda4visChZyfNUG4GqvtEXQaoevMuuuYqQVBxogoTLmDvckSP3DhS6s1Au",
  "key20": "3S8siM4xqzJfFtYBBu7VNBaCMQejpUek6rivXenLuc89xwqFiaeaE3VXVmSXGGvEMnksT6nDF4pc3T4akicEVtPa",
  "key21": "5hFKsTJSZi1rgiP72QXphPkKFU8trrsx28japAdouFpwRX2Gaq72R22E18MhCJkhFi6mWJHS9J11EvngZWjzAvPM",
  "key22": "4pvPGvuttQuwk71gTNigyVciYxk4EhX8dRjMTBAj4ggEV6QB7XptnA7r8N4zv8xzgLehrpMHkT3o86btN2WNSZdK",
  "key23": "2Qtxjq48SDryxGGtjY5cyss2gnYrwF6ZbnzgFhMctW9JqSWfy4gpfYrN5DUYFDU2beLxAKZ3cTnwJVHfkViYqe7Y",
  "key24": "2x3XfSf7PrJfSKoJEmCFA9L3pPJLqQ1UNPBxJA8t3w3dWM51cSDxj6qirMkifqT1zjmEv8qf976tsrHUUUcfqvQJ",
  "key25": "qFESezKvgenTQBf1CHL8denrUBswDJZAFjWZzJhhFyeisQSohA7aXjLNYtJXxbDah85ksCs8HWJiEfr6aHL6qEk",
  "key26": "3Y788bXhDJfjWeZKtwxSRxD4JS2iko31b5VFwNiNs3fPtcffZNZJKLqd2K8qVioYbpN2d9AHHFbwL65y2UMAZzLV",
  "key27": "4n5yciFGXxV2sUKU6wCPP72MG1ncjLSGTZz3AzJEfgocJJPT2Us8zePz32tUFAFaqnJxV9kZiavRFrtpP5MVgnUr",
  "key28": "2VqwEjbdnMBzxC1aDQkjeLNh5aQCi51CqaXwwAz6ubcKtz43x4Nix3yHThwJKwpjpGs5oGqra5x5X1ty3wCb4pfa",
  "key29": "2tZHHEtRZJ4JWehjAWYHyx8qQGvoeSwwZ2iyGbfnwv5fdT1iuGUDUNfGnE2F3nAHcdimUb63CJYZNmFQ44otRr7E",
  "key30": "2pC9FL6H6zkozaUzWReWhVG2NGiXtiZSgM2VKh47xPqETcPbrV8GVPAvBF5wsiwXg1CUtdicAe176AFwcVxgx8c7",
  "key31": "4uQjXCox8Gj2rGoNKYXnLppvzgAbsW3nSa7HZfSssj6vVEwMheipREU5SixczUDKfK1tz6Wnz3bzc7JGLwr46jm8",
  "key32": "3rk9nzgnhYggDCV4pfRYCzgFwXFYTA5DgJWKddToULrA44hXkhxgg55MjWr7SjEbFAB6FXUz8Brn6ojdj7nbG4oz",
  "key33": "4Q6jJUE5FpzCB5bXRrt48PcQkaUsPSdmYzd13vSw34Uh9FZdc19sMmGr14k67TP5Dv6SkXbU4ureUYcit3HPggVv",
  "key34": "5Pw7y1Edjp5uHWcLNj9MB1utEsuSBCXctkP1DQ2Bhe2yi5rrNVYyNqcCcnDKpyFdpoVPFac5fwZ4VYBTRbrokcHm",
  "key35": "3dDgsi8WJPKBiNzjLir1vRdF3kALF3A7AhMBSK5gSgh7sPJUDuDLdJwz9CAZ8WwMQMAVrm8z6PfYXTovy6LCsyci",
  "key36": "5dvo1KWTa7Pjyd3H9zHyzpbkf35j2ynaAozH6ed3FkyM5JGVWLWc9qpr41XmHHCbmHHNUdxYeyLtsnku1if4QonY",
  "key37": "2DFPaCCoSwKZrN9njnqxEhAaFHqwJjnTAqxnfw9bLQWeEuV1od7XQmeirdDz5s7Qc9cCLbggmwKHjXPkHUoTfsXY",
  "key38": "3e7bgeDZ3PknwHmzXP1EiKTj6VaQbSuLdhnqBRM1hwB7PpMc3uBjGGvDfv9SnFyMMfZiJAAH3JSfZYGrKrntpyo5",
  "key39": "39nUWsAtGDmkiFSgJaJSSaNN6uHd3zyrsX7WCP3ZHkaHqkaaackRk1HMz47uxuao3rbFFPYq1siipjGCaNQ1WLjs",
  "key40": "3279HoNxNN8PXKRviaeRj9UGKBFjGdpuX6vYHaJ9FLn3ZeuRAKWddyUUWzbjwSRhJjSGECRRqXCcDdHqZwJbJEUA"
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
