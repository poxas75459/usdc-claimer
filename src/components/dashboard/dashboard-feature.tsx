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
    "3Ugm3ANmjbkqsrtfRkMd2pU7hY4AuEfhoXEm2haMDZmq1XcKTYYEHqtHKRcVoKRBqG1h2HcCY2Cv5keunepPmgjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BfTBdLZUezz5wsdaC27j3xKkKDfKf99QXP1d97BueHNvoRoSfWF2d6RAm1Za3B5LsTXNbZRKAdpQiBcQp6t9EjQ",
  "key1": "MBy4r7jfLrczqBPgaVzBtNYqgw6Q5w3Lo7aFGr71Ly6NnEEi7tKxGFSY8qSVUm4hHacEsuLkNcRdopR1hQ5GBxi",
  "key2": "459oxHxpvFHnWaLg55V9wT6xCFhdcyYjnmdwyJuSC9vCQs4Ucvn7Uar1dMFAynvwbvndKrfLuAzrvBsQeUJzCoLn",
  "key3": "412xEGT1YnxPvyJZUMEzEamiQpx2fwCXCLMbmTHbWzosWrmpZTVMd5jkXSwCzJ7kYqnyntX2JEKWPGY4reunvZ9Y",
  "key4": "5vhthhJoYVTAicGA29G8ZF58VYnsZdNF7d5quq5YWTWH1e953gqz7UsDn8Vd5SBx2m1AfrxKbBTgcFtfF7XpzEQE",
  "key5": "2JGwnyt9DjPxRqRUYZWwGwBBbhRqdGM4CeWiXUeNc42cDVonMrhxcxdvLR5SWpGfAUN6vMJ88iNFzB26kogood8x",
  "key6": "8eH95FfiqZRt3WtMetpQuSd7XYRqw8jbfc4e61KkoYuUvL2CBE5oq9aDrFujG4vUTV5wr5kPSGAQRFBe28RUJ35",
  "key7": "4EZaGmqQTYBNaBhLfGGbuH2WwuUqsdnuRMu5vTxypHHgojkn9WFGsaQrSkXsEMxp2GUKKMwqhXmZercQvEVGwFpy",
  "key8": "w9QivHjjTnE26YNa3c9m5ja62W11QnvLY6BgkuznX6YosfhSWo15AGAyovLTd4VZgS38pfB36JHGcjs4QgB7h2B",
  "key9": "2zESwf7PFag2opKZPAZEpD5VXvUEmjir65yvrQx8iTR6VbxssXmLhTHqQhWdpxPMr1aNN56LcCycMxJLT5ubbVwh",
  "key10": "2yv1kqNDRut9rdSQV2hYKzVqDX94GvEazAkbNdi8Ey1oaEZMoqrG2pcUQBWSC86FVP4V5nTDK6Lu6y2e3sXD6axb",
  "key11": "22ATYxP69d71vxfTUNcUm8mwYerVdET3gitf12wiRokwMTFyLLSdWhNxVqEav8eTzviJ3iNLfnMfb8CmSJt1p3m3",
  "key12": "5tABfLrGpfgcTix4EdLo7ePZVGuLor6ac8aDcboH8PZeMJKVyy8RQmFoHG5CYygEmf9vpGu9ynFsQVsQiayznzyK",
  "key13": "LU2HSzujS6jzk8QALR9WLkgUpi6CBqkvBMho4aCfjzYscUdgNYLLeaN1UTVNt73ZKfXVgujiNVUqg8i8WNhFbVe",
  "key14": "9keZQ7FWeXnmdthgc3FxFNU7wBxhYpM1BmwpZ5QMNr2zi4hQHtDMAmEvNrP8iYST4RjS5BPUikpC7xGm28KgziB",
  "key15": "3hJSKozuJTT8dSWdyBehRuiLc4vQYumcDwyUJECNFiYsg4bZBofb3aJZHyPdji8dtm1zJNwgFfTxgoatZQH5xkVH",
  "key16": "i4Yna9kRvxk3GnS74CTSBaqv4UTunmtDJ6SkyDLwVSnukbibhx4cuPYnELjagBhrz9mN9fHhrjwJuasusCsn1j6",
  "key17": "2CkAiBoQKsKxTKuxfWnWAk21FQbG5oaj8v2yoKJvnMjCNzE3xPEiSx6ri68WM3fDyq3a9pBAfQDgeXsfJP2WvSk8",
  "key18": "582dyUqQDwiQ1KTN6tmAxAuz6PG3WtSWpbWAmydcWoXfF9sN6Vm5xhrwxt8rgv99PwxYsakRPUmhDmzLbxt4DRxU",
  "key19": "5rgqqTCqKnLwy4hunt4SmcFxHMPRDvWDvZb9wFN6FnSeF2uEGvsFXmpn7fEh2NHaDaMw5kQKUSjGHyKLAPFZKsKi",
  "key20": "iCQCYDnQpcsrVaj8x7h5WNJpT6oRTdq95EcLZPcKTM8oHtUe7iSFTQtZQFazRWS1LeuGb51UKsLuuST5xRfzPT6",
  "key21": "R9Z5vy8DAF5CSEwBHKjKuJXi8T6WUD59rCnfD9zCBf1MVKL4Q73w6mKnuUUaBVtsw5Hg51TxRamcJU3eEUKUPhF",
  "key22": "5ZQuSYgohVtjkJuQeq44snTG5BENReyWqYeYCvTBgD7KidCvSPCRfntN2cJ61JyzAX7vQhidHMiXbMoKM8UFKNK2",
  "key23": "2pxdxpma13Rowutswrq9C2uD1R8xSYQEoJWerdmPYrcRitxMkXHSgEK7nuy4qcSfGf7wycnwDpMSaMVS9fYZCKg8",
  "key24": "2uV6jkk5LC71mHvK9QzjMMqE7fYDhB1rzggtUusrPrRguNAimJk7JJimbEeNzq2qMDJ43xoY8gE5XkhzdwXcbjqu",
  "key25": "5kYrGsTHcBfPPyY5yeKZpdK1FKzJjbq1chsgrQuNTTVZMnog1WdacCAatgs5i5VMzSauExc5RZmJ5eUXVRnjJakq",
  "key26": "2x6PgaxCsawrHdmoQRFPYXP81NBkbs8qXPwZ8eC6s4kroQnXguM44wf999Qaf3XpVNtTeK6xDReMUeContp93QB8",
  "key27": "5Van47Zy8WffjYE5xE1kAWorBCGPZUrzVTjtgSsanAihHfW37HgUUxrrGnd7nThRRifgdVkFEL6KdSPSVRoRDyn9",
  "key28": "47cQXFxrwvbkVKFZekxcy99r1tEjQXpwEZwihSNeCFv1WH51cdVEM42UHHeQWfZetzoVRywNQHEGgYX9z493r64P",
  "key29": "2WzYLSYsC6dTVmtxhSK8YZwzA9dyk9XDMWw77uFhhhYvtnD83NotNUBywC9HGdWvwHxA9ERABKYnK8TkHE2gVfrh",
  "key30": "2UZd72bHqHcYa5fAPw5XPDAvPC661BXbgyjontihVT7yPRJFWK935drCHeRDnN5oKwrq8iySFF8Hb3pb73nfQSxS",
  "key31": "5zuPWkm2EJqh68im2LXXPGt6o85HCon5Y6QQoUghpsLQiEZyyMGMZenqxjvdWhYU2CQwtUoBMUb9tbf2Q3muHD8U"
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
