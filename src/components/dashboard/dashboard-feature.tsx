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
    "3zufwWKdhBdpmf4ZESSfoPgbX4az3UqGA2dbrbjSd9q21SEjqQHq47yTq9yFiZmnw7KXyizW8nWMpUsqvMPrKu6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqSYqburRPVvpQZTxFcnZNq3tJehReQtJB5xSx2WgTpg7StC88SYqKu2XTGiKRhJSm61CsC5uw9LZovouRRAApe",
  "key1": "pFNNbAfnMETSm8TYoEzMbfzyJ6Q6oAchyppCutyTLo7wAFysNpEectLC8z6M2BHGbpWCNzUH5hQf8yWK1RPTJZP",
  "key2": "62DtASzLvwWUNH2DdJ5NN264vvstZoZwVcu8GNTCfo9iaBCWoVWVZ4c4zkT1CbDMPA3Q6Te3TuFKvfom8HXgXnA3",
  "key3": "59yvV6asa6Wub5Hg9RFp3Nu1Nu3LYQCgALEAKjcnmGZwMgRAqX4hgzKKFChaMjcmysgDZkgpPjGa93WEjTfVY9Db",
  "key4": "5KMwPzMm5YTvwQMm5DuzU1nYcDrn36jL5qL21s7RHThPj4SrmVVj2PBjJfKTpexPdajrdhGhk5z9ySUcairQQ6MQ",
  "key5": "4RexjG46BA3jpXaH7X3hWc9htz2L2WVUooBnR5h3HxfpRHEYyMqYVoqASQBEUgUYbJ8iQfQDwuapkV1jetUPLfY",
  "key6": "ubtUzuVTNWLkJ6aNfNPsXhyQ24S8kNfMbSSwUSVTYkXEBtq8SWo1cWSz269jmSpQneVibyc8dq1r5kaZFzovV2S",
  "key7": "4zmygdk236ard3UuMWTGp8p41EC7BWGbYXejCbLV2Xz55TUCaN3e8QKpdpJp6drQUzDuYv3CGb8kQ29HNUwMcMK6",
  "key8": "37tbczCva9J7HnXewbkAQ2HCeWfyET3siR88gPimoVmT13CNvQ4fcuYfodNxAhZGg9GjTjBZcauw3xe8NvVrfVg7",
  "key9": "HhfaVM1LcfoVrVCMD28TZ22XVmDGYi7hMaGLgjAK4iaHFfJfTepx99Lov57YJuYDHbaD2aohvv4NxgNfgHJbxn7",
  "key10": "5tXRj3fwixN1jHBiSMw2L1rMNSX6AQuNTcv8tmEU5F2cpWYtWEPrJYcPucmHwxCEmMwMzLVvSRSksrq8ca7nmP55",
  "key11": "LVhGSNFo5nN5BCgvdWyP6idXqa9VBkNZVidHd6USBZXS73UAmEpxn9dzMSd5EiER2nb5NApTCqMYEbUTVD4jW8v",
  "key12": "45rrKXTdkU4U6quZiEhKBGhCGcoPwo57xKirrGeMLB5JVfjUpg8T1BVsstsyXc8a96exPsHi4Tko1ffqQ2zrJLQf",
  "key13": "21WULqo9i95ZSv5dwcwarJ2Zx84nQn3r4CQG5t2pgqMpuCweqYwbND31p7eXV9SjGUhprX8CciUan5kD7SckmAdr",
  "key14": "ZWV69uWrx9sZLb5VV4jZvHBubGekQq4MFY9pBhYejmiZzgCkh4x7Co1KFGQr5EbZhsDJvRLFPvfMCLfSbStBSgP",
  "key15": "3BaRP2Myk7wzuWLAyqsdXKgLdPfRtmYPbk6Jo7iKW8w6u4JbsYQwuZjZP7kvwZPun7r5pBXFQas7Ewbwo8eD5S76",
  "key16": "3Nd7AQjhFhx6PMp6oz9pES4cPirBeagHKxi5wQJ3jvujiqNuXZAubH9HBUJ7wDyrSk9Ss5pw57oRB8PZpfMuzH6Y",
  "key17": "3kSGUTLYQ2evJ8hPJJsUwF3Q8tzroRu1jc58TbBE2WD45srsqt86rq6P8jtPUtcyF4hZeyJcqpHrbqizdmAnuKNJ",
  "key18": "b3AYb8De2nbYr6Vfgy1sVz1kueY9bg6fjgDzegjnLjkFHPNJA66aa3B4Xq7AyJUFHsu6d9JH4uuFUtgrTbsrmdo",
  "key19": "5oJMjMdzY5hA3acsuMWQaQmRMmDT2a6NSmgnVqDPiDhsdE7R9XzQpgt3o4fdiTiirsq4N5xsxE6XVLo2Za8J1mLA",
  "key20": "2XbRMb7mqFa1tbrmbbdH6meZDUwngAgU5LofByDGmEJB6ZgkCZqyPbyG76gNgCZBmWsHCD8VwJs1nsycKpmvux6N",
  "key21": "WeBLtxQJ1i1pPH8fv5sLag52fFGszWCTi8sFrmnMS8wJBiJdAabZtUnNxgUvAH3pxfaqkSthGjAEG1KavyuAXKQ",
  "key22": "2X8rX5nyVAKVNC6ieR4zz62MU8Kes9FAiggFk7kcGZC3DHBo4gbW9PdGhhXKEqCNsFe32T2f78wtcCh6BKNkoySL",
  "key23": "4VmHKMgsi2m9DTBftHEFoHqAj78sFe4dPTEuP1dWihHSgXHrP5YfMiAJym8fMyY4s76AscefPt7rJnSsv1SDRY8g",
  "key24": "5yLLzpyU8ySxT1i7s3e2pZVug8Cse892NtwHid5fopRc5qJGNsr6UJuwoUTioDk1htHdQVtrJhsDnayZVrgXgf5t",
  "key25": "3SZxjejqULLSAQzEXG89matnisp9SupfCSHuQ23fu2Z8NixEY5pWncxwBhch4nFZmrATCAWzuLGNzsKeWCxRMfz5",
  "key26": "adP1MZ8wpCvoh99bi7fUyPDGkQsYyXUkprKVdjv3D5MGv5DxeAhit9KMmmoYAgNt4mY8qxxGqz4rLk1AykU6Afi",
  "key27": "5MHnB5FHrqfXA7xkBotxN9Yusi3p8pqmgTApzcEkJ4bhrbX3CRjjqnknwnTRibxs9TZQhKa35cfV73M2NKPmtn3D",
  "key28": "5qX4quYJ288hQuur4bExpvY9hbeqFuZqZ3vN1NfUQhH6QuHRdqBC5gLPEQDrgY8DrtGbDWEjkzNkFW6mLivnR1uR",
  "key29": "2ETMxCpWs5nzf5iY6QB54SSsdL1vDfJnTzC8xsGeeXfGUFD7ZUyLfW68ATkYRRgmLyByqmwEo7jcz59F65yEFdFo",
  "key30": "4YHm9eAGwWcjQj2q5HmtTnFqF3MNuNvjFeEsD3sp96QQCM2xZiSWx2Sjq2KbebxzuRWGd31x8L8x2zHEQJDrRBtn"
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
