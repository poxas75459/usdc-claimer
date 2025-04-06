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
    "4d8482LL4bsq6rkXwXG9EgdZftA2tdWmT6wgK2wgfxwkL8Bh51eBmigqzPvA1vEhxJkN2QG537YPaespqQKjh7n5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zE68ko3jurtgR9Mfh2N6z1m1WVXuBHzkNSsKfooycUCFqxhe3PHJy6mcEe3dDRqjg1ow6gv2inEMSMLX3jNU1cb",
  "key1": "3M5bM5AwqyLSEmop1VqQF5jWtzJ1ufh2Z3U4FmRCZ7P3U8rhJFeT4toNxXtaMzvZmR2HGV5hLCCEpAqLXRBJs4tX",
  "key2": "4zBieNbE7VAdny7HLBsW1VHKzarvTkH25SnTtsMbHbC55detNy7w2g47bKphrXV6FGoTTHD7x4TJ3ejifRcqRczh",
  "key3": "5nrJdKDT1LQxbit1xogMyrvvbPFe84doJsJMJHd2XZ4FCtn5mELFGkHUag8AeSTrEcFCPbVhWRa9JkeArVWC5bk4",
  "key4": "4yFNgu182pdXfeXWfoDCj5Qdr91NgasN2KbaeVKDzvwo3iM3MkvocakMraKVGdooEnNZvAche7zKejVC5hdYX88R",
  "key5": "3iFDqw25rAZJhd13pPCppoAnEBs32yMv12xAsACDWAH8eJ4BU9XJXVeRmiF3Lme3HCUYwqYYrx3QyjELRH35p3co",
  "key6": "5fu7ULMyK3LV1iMp6TBgbXxLQuFAVWQZyaPtKwj8MfRuw6r2xak9kwwXNvYZ4XFMMd7nWpUP1pBPp6mpbcnxMeh8",
  "key7": "2wAGPHdsvUQVDJhMG8zTm97hfTsgLDj62NNuEBNbMLjiQE5KHxwtEzrhwipF97pJSX3ZBpbG46tcsBaFJERh1VjB",
  "key8": "eDTr8Vi26kbqsod2BEasx5UrejhwWynEXVJ46Ef9QuebPmeDWdgoVFHd9seRpaqpoZQfmG1uHgSaiAHdiL5PjtE",
  "key9": "4Zx8Sr2GqtPMqtziTNPh2SEsnfk1YUTUecxRKWvRbx3MUpX462aChxePCdsjPKz2dbxQg2LdFxVZEf9mqCzaW2B8",
  "key10": "3K6Xj8c3X6SNGwDy94x9jAYQhZHJ8hevEaDhV2TAhCVPAHxVz1qCgJsGTaFcuV72RM4nb2Z3xyJETtvfyqvveZqL",
  "key11": "5ywJYnhKVV7iWaSd5igHRkfEU8EHaxKRQYXZxBMHr5ZbKEFcxG1D4sEM2XAZpSTVJEHcs68wxC6Fsh9Br7U5mPcg",
  "key12": "3sdGyRmJyEARUMU62XbuzzGhw1kfoKAfXnya4uuHMtKYC5H5VjZEbj2iEvFM81TBgjcfpoUB3AdwinE8576z28So",
  "key13": "5yivYMo2JDcCQc4AoRdUwQc54mXaysqtRfCB3BRNpFeDeEDGdAr9Xzsy1Km1yyqbqv65oqdxDwuFjnTWc9xBTSHA",
  "key14": "5cxeWgRSFREsCEFAiv6suMciVkphJDDtZf31H6bp76CNWsZAak5GdToeresWzqd89qsdw9pn4w2YGdXqfEwEHWoF",
  "key15": "NJkxGqfZMFchQQAD88p9DBHG5h6fgzD8Y7Ci8RxPHDDbcLia8Rm1dkbHJHqhyhg3V1BeopSfu7vqbinP8dLRJUV",
  "key16": "5H3EQFqxs8ZBdoBvQXcP5qAfbhbzq9AbgqtcXWjAEbWKjBZcCUhB8aNJE9BW4TAt7HtZoc7iXXqTvL2Z64bwtAbK",
  "key17": "4VBFd3a6rcX6u4jsJNG2P82Gg5bPtSZ3K45xZq5qjHoGuhpoaGonjBwNj532EhTaCrfazK3bLT8CZWi71jzLxgBL",
  "key18": "5Lk6i15TJeq8SgFTD2z5NnXfbbdycEHnknPESrkfoPvEPqHELyaPy2U1mSyCZwjnJ4MxTXgfKqE1KMuHQ1kiUSRC",
  "key19": "5h9Uf9v8Qh8nhnBYNfoHEBh2gwUsGyNsNiQAVUpBJdAs9YRDskdvP96xfWViLoPbwhk8xTwFHhPnTJh4Dnw6iYpB",
  "key20": "53v8G9YXYn5A6fJ7JWyUx7jiULesHrGtZqgCa8uirEjgxFRw3R8eJzwkjSTtYvrJgyuwrU3NrA8CWcsGgJpdiVMf",
  "key21": "25r1L7QGoUTidrGZitWx1jZgV4pxkvL7iRZX9f34rmcTRFJa1iBSkmQBkr71zCCBFqEodTDukHEx4rGA3BpWurRG",
  "key22": "4jaCBJ8ZcXGWZUuLt86ydqYfU9cXY1PKrDeYRMsYHF5TwyLcVXRxFUHBHPVa1G8GAMAvBFv3aeKyJR9NKFJwKEgb",
  "key23": "cWVdJWsMbMCtuVpTf2CELebgqC9U4yZ8HYvCmgq6frcaugGu4iqNMSh4FdVUyTussvZpdhDW8Weu4sESR6ZuuDk",
  "key24": "4N7ojiZjPjLiRKgaTXwoFBRcNmA5uwUEejysVZ2ip7NE1k7fb5uqiRa9CAWt1HeAQRySnAbKQMQff3sXuKm2qcCR",
  "key25": "2qSr9EUbvLw9998Rkdx7B4DRZG1WSqN2KCFnkLZzQJ5REeM1EdLyK1Yb3ngGVgnbEadmn8oC96RJBoC493HxijUV",
  "key26": "3s5sriMCKmKi6UPmp4nvDB7TJZK2A1SnS1diFq5mXuFznDisEZ6j8VVxJjkaXCUyyDPXEfymxndsyjaF4AiEojj3",
  "key27": "3ayF1NHSLtxMJQtcHeEMLvjN8esPQKDhVXtNf8tt4HFHSMWpyfGf7GBpt1D4hX4KctTkfpwEXpM3ewxMFSYKb9iW",
  "key28": "5hcnnPpjHBUFVAYGnypJd7vUiigGj2WpKfWC4Ktqm3qPm3g76xHiMpaFK9n87tFiFccXFN3wzphiuiPRbuCMRosx",
  "key29": "4cbhk6XUhzuxYK6uYMovDXfcxcQVrJcqnMh4WJLmx6uh95WpB7NMVJE8sXufRqGFhvXDnFY8T6cK7emZuEphpiZb",
  "key30": "3nbpdAMWvyQewqbsgsB1dyRBzhhF8gviscXnJvapqwmbxAaKRv7H2WimNdUdvd5BCJDhha857qVzqdjRuJxakGBu",
  "key31": "2ZpdvfmxRF6ZF6Ngb5sC3sAmm5DjZfonhx9sm2bcE27ECfSwJ2c39MRNYYUGavwt61d7hsaVuFjJmLq63FPvwbBK",
  "key32": "HAds9i1SiNeBR5Rrp7Ttuta9AVs2fycFuypiPqi13ZPsMfNHzCNh2QGkZvH99nJ1M1Ky2wRGw5Gtnovk7875uV4",
  "key33": "HcnHWavS6jEwgVGoj544SYPNqfziehmhjLRsL9uoB8f6xUwMdoPc1Xpi59cr1cHC3UsCTqJp1DxCeHDo7f9AcZN",
  "key34": "3osRr3bVh5Ph33QC3vrkud9vw8jMq4g8QZtdAtthUXUw1U9DZd9Pustsn55QajbARKexA5fkiw1vCZsaKoyC2L6m",
  "key35": "2L7B1KuFixd3PiACWQ4R4jy1t6QH8Nidvnxanho3FfL7JUzXPDexRX1E5T8MUzpL44cUVNmXyFP1ByP3AXCVbTn5",
  "key36": "5hy9n7Gr2LHBCtoMHaFC7d4Pgf2bgtiW243a65mHQBBY45EKHCG29tziySmGkXBSgaehchDt8b8Jn4juyUQqxXdb",
  "key37": "VAdqwMPoK5nvLL5AQrMjvSWtvqhS4Xb3af3nzHLEm6YSo2uggPy9D3iLXm9L7veTXtDBw5WJYwoSfhZpBnbgPb5"
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
