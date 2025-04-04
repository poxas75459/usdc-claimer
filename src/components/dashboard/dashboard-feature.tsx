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
    "5tcs5niEGwVHhy58KEiikkb9TdsLVGteLyagPAPcwwfwvaXhX74aWgXMtWcc6C2cCguQiqAPA4xtN7hgRy7rpU38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ahVgX9FDmeiRVgsDYr1Uv1T6f6t3tX1qTmVvf8aNE3KS54m2FzvQ5YSpDnkYP96EJsqwB7cYr7aLJhYcmwmW1o",
  "key1": "48fSGFNh4apnDE11yFP9wx9cyzgWQPTTRu3Hn2HTZtMsurKEBKEYQMoU3GV8HvxjtfL2c9BCB1fnedsdFVLtHNaU",
  "key2": "SDwNoLuE7wLm3x21SkSYMFeVkMDGGKT6HTdvsamqqBfu6qB7MmDffenagoYdGBCDD3qDMqUQ4RhNULS9iEvf4Xh",
  "key3": "5n6sTwMUKKKwDMM8NrF2VY7HZnsNwgYtkPcnghqdGBptewAj7U715hug91pRxqXJHYVbuNg6fnqkijspP53e3YFK",
  "key4": "5o5oKgs5FHRt2NVH7PhEwrgYQ1Z2CoNnueJ1KaiiGHT57EjXqXywxfaUHJNKUSy92xx6svfWG74AQBgXNzNZi98P",
  "key5": "RwpiDdUxAkHNGeeW4Saf19Qj1ntUZWeVSq7rERWMqW6CEkymwPDujkMGQNsLtbWvahrp72yYNbT3Qxg7TrvwFmg",
  "key6": "4DLu3oyaKT7kiDNsD369xT2d1BaRa5tVb5HtUzR6vqZSySqdqg7Hk5JSYr4vEyTekYgtt88oHUSSE8w8zRa6SxNY",
  "key7": "4rv7nNEtG5X6mBCuUPKFYGWg9rn6VJDsYD5hyLaYZ4tpaciTj1YidWHmQehE6HrxPMQDSzFfoRLuHg3k146wdHje",
  "key8": "5G4vuTJJg7HxaP24GvGq4zvtdSa7Qb1o4sDW5HrLy1ay7p4B1wFymoh68L8Y1UowqRmVLYWyN873KTms8R86jwnK",
  "key9": "2BKfYwfttGpAH6uAzJHz71ARFzU6D4QHnmFMcxweNG42P3irXvfs9cTfifBNd6J3rDRD7emP2jB22kTXezkcCQVB",
  "key10": "nYKkdjZroEnnjDGfQwPqyzU24z95UA88EDsFN267ZFWB7mc29xMfhsyJmtLfkLMr27HpnWENm1ZyknaoCfWnJyu",
  "key11": "5JUPwgTTB6Ui8cBFQ28fRiNthewnZifYdejc6qS4Z1d47fTZk9UyfRgku8rCSRWrpDwfriQ4onsa9VURM7VTnerA",
  "key12": "3bc6SMJhRtv3hP81rLjRE83EHPWtNDvUGDyv16uJidq3MoAg5z1gXe5vTYieWsDMFZ5NmaHo3svg1vwuSmD1N76i",
  "key13": "2TvE5g18iQ38FVYMkcubykz63MNjy62TuPoT5HnGv4C1vjYRtjkZVubC9A17X5L6dd7LEoAZvGVZSfRxhsxuGHgb",
  "key14": "5jawFdcym6BLpcs9imQ9QWKNgafsC5NNNS2yrNjtXRyjaLAW7aW9cD1VNVrHBTik2UdSwssz5SQRQY2Gg2XmpkFe",
  "key15": "2c5rrtshtN5728Ffi6LV9unCUVAJ7CyupJmM3eTzUwU4zo85pwFNu6zAYKhevv3Uekjs4nuMzpsDzqmX24ETg6B4",
  "key16": "2VSNxoGU9oYXdfY1hiweJeq1vaYoFwSBL2WQ2FNShYEAdaDhEspmReVbC2mrxHCrbsMwukrsDCCiAyMvwwrih7ud",
  "key17": "2NC231KY9LYMED38YvuQSVuBh7C9nwxzMAYWshuwAxFVuFmmqfggQR5jPq3K7wgXhv3GE8cpq8DC2Wkqxijj1MJE",
  "key18": "2ECuFBPwqQFvLZKQcLfXBFVFPetH1ZRFV1s5S1LfpT75mmyThX2qSyW9CbFTqwetex5PFRUua95bjSZxVqEpaS79",
  "key19": "2rprFrD1UK3h6k2ZwSfViLncm6npqS1Cue8wzfhqskNHXeUkLMRXjeYrNdadUGPXjA9ggzhJL2s5KbeFPDXSQmnk",
  "key20": "5d2YKmjEGy6euvLfy1PKpfYZ5Ce2qVgWCUBtip7zv6fB46MHwhCbzfpG3tThFg1xCWpaBukRC3XV9JPGBMAFc8xK",
  "key21": "3ByLpusxhQunwj24hoPwE2Z4J8zRURkjtZj8JG3b5nSjSsZLrMZR8K5Y1LeqTSHEuHmh5m5iNme6qo6xewZtH46c",
  "key22": "mKDB9ePv7ahnuCqzAD78EgHcRR2weAVDNa4UsMRGCiGrV1CMoB1v8BML5s7ZagbTTsySibi3zMnAsfFyiUHbWAp",
  "key23": "3QpkRakpYxGkGTS6kNTzcodmWuH8Nbi7H2HcWmfyf6rKFnXWAoPgTR4ednao9J7NoSzPCyTcT8jhchghC3T4WULT",
  "key24": "4iUznd7E6MLx2Vm116749QRiaDr8sx4UVKzhphWrfyyAUoknbsbUFucbtPs2iPkPWxPbmcvqFDymVLUVFcwxfwTH",
  "key25": "45YuikAoKGzenv5yge5YQAeVWhKJqFecwXnnS55fUBghP7NYocXwuEnb4z82nWPLJWgTGS6d2FpBJCxLWcLS43YJ"
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
