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
    "4y8mYEhXfbSd7zitQXLy9ZPqG9WormWZCXRB4DwLp6QqBVK5U87yF4MfDf9SBj9cGhfJW5Ev121EDhAoWLbj4ca8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5KnfXHgdcScNb3CawY4zeoPJnQanpWTZmxAfdHd197NNpAg6YewAo7vCh9wjNfmitSxTyzMKuBJy1AWzTtjZ2D",
  "key1": "2ahi6bKq6gJFWmB18saJH3ZcfGFAmWW9L1hxFUGw5Q456WuKh8Gt4BCV224tz5zF77VYGbeW3a7QvZLMixaAWkrb",
  "key2": "StEsM7icQUr1uxr2coVnCeeMLELZuhiELyRBzdJGVLp27Tm8gfgFR4t9ZWJQkpfA71Yb6G6ncBgrt5BPknA985Q",
  "key3": "3hXTdPm2D5rzSLxzvj1PKvDDpjfFWgotXvuPZ1Wm7SmpbSaSoUCfyWb1m7cfcTG9E1d6k2uhCbMySsCrtt5QJeao",
  "key4": "5v3R1QDVWEfYBkD6MkUzYHm3aTWVdgh7wyZmbQBJCABhe77ZsMc4UK8HonimgCK9VZW4pSNcW1JGxuAMHNGn6U69",
  "key5": "zDNhiYM1K8b7axV8BuYZrtCRToT8hRQf4tioWij1SqmaxoQ2NqSzEV6Q7pBhndcciXTJ7JQR2Lmo8zs8oEYobCD",
  "key6": "25sKeUBxcSkjPdGE6GaGFJs7qjcF7kEPT476eeWXTbC5hpvwxTYc5Cwqygf1GcK15Y9RvrqyeK4B9fWFv9FdfT1K",
  "key7": "2XgJF3edoAGoCAsD6ynFbqFh6aA1wYXCcMMuCBD6rbackmT8oSdfvK5CajMyoAP4G5eruoJMZBv9MHkHZjY46n9S",
  "key8": "2fjZe3pqGeGBZkUvR3frsF8nsn1HraGvzxvAxwfeR53CmyPM7N48B8k6fT8bNi2NfiMdgf9kokyVxiPEkpDnS7Em",
  "key9": "5yNBLtsWttae25WBcVgLo5qvdNCd7Zh4tTSaciBeQGstvfBJ2Vmh26WFDMLUavmCcKoBtdAgRgBVT32N88fQqMGU",
  "key10": "4wd42VwSrrZhhvmYqexhdJSpSeF5tokP4ypXWki9wJMBEpMooctVrqgadMNrGJLndzRZZjiyuo1uUR5m64u886ty",
  "key11": "2zDpEgtgugPDu21FxoPN9bmA1it2cFqQqeaTXjaxcMGUUQqsamuUyHaC5dB1CVjdj2n68yMzqneekH5LP7WXbr1P",
  "key12": "4yMZTD44iriGFCooXgvC51jNLdrDe2dtBkVEG5VVxzEY5B3eRXipi28Jg3gYHDeusLwVeBcQuWb2odAT4YFvQTT6",
  "key13": "4kB8zGGiSbqTWvdWrwQNJkfnLzBPr9MSZwquUCk5ng7JXZ7Tr3MGqNPaBHTtBbCvghQw33KZkR23YBT5fvZTvnpR",
  "key14": "4FZVete9Re94PPwMXQC5prdg922JrKfptBLFNanneV5NbpC4A6FpYpwYHEknvdPR5guMsDtB4zEnAUEond9dSnVG",
  "key15": "4csSdVP492fYbSnambQgrfE2vJnvu2Vfabvuk7kokQzjiudw62JYxE2edz8KSefma9TJo3e2Q1Lr6Q292Jrj9Qid",
  "key16": "2sDkm9UpwYHdLG6a1Aosv8NhsR1AcoyG7CsSWs4i8tFcx2xUZAMGLxnkkTmbBq7iWPcbBo29ZdGNjT4beebEUEXy",
  "key17": "4eyUGLYfr31nH8H2YAjk7yWXow2FoGgBiJ9H3tsZJ41qpMVeFpAocwTAAA3FTNtgHRR3D9T5WDnTovJi1RHsWgX3",
  "key18": "2XfQiAPEkTz9ryzHA9ovtLji7uK9XMdxiU9RBtWcTDXm79XREmxwVcofy7yxtYmpgK5iwBRKuwFVZ2b8Vq2bgB22",
  "key19": "4c7vDnMuP75rg7PAihmCm6FvEPqkFpc6QpanSUZ9JEbFrXmsevDQjKztrhxen9BvfGnZZZjtgZBWjAc9dBVHrgb7",
  "key20": "4RZ52DcvgboooEwuhPQoW4pm7RKmTyjggcWL98Yntijyu5cKCbdwRKQXono3PWQMP1LJcXwRwJVZhnhremG8squg",
  "key21": "4Vu4TfQWcqMSfhmRT7GGDpjzxBrtPEsKefyJbRY3nC4wrhcNDPx3zicryhtYSsrGp7o1Qo5gNaphB12Xz7wnzkK1",
  "key22": "281F9guAUSrFScKAxCTCkZDY71TUvbhxQ4CxCotRkmgCYjnczwUVrZd5jddnbePkcNeFQcf45U1oUDXA1vgTXxBA",
  "key23": "3TsfBHbmb6dFqddN2GYWBqxoq7CoozrBx7ZaR9nio6FP5mXvDcHjbq8SF4mkVVRLdi1VGQGWNeJkUEtBTTsxe6Dq",
  "key24": "CXNehhipS7M4L4ceDnj8xib1KzquA2m5WmePFuqwNP84eWe2LPJWzuyveLChi5trg5hX3njuNdJY7MGh3a1gtZW",
  "key25": "2ns2e7fDJn5a4VhoqWdBJs1Yztx3bB5KFE4FiEjhpSsbQssvan9GYwbxfLEVzBpGd1gsH7uwyxRPsUaEfm5zRgej",
  "key26": "3VRgUUg14zwRQbKnAjj3knCg7Pf9hpbATftcdbN4tZGE2AC3ZfpdeSLdM2x2BA7aXGSSMY3S7M6t25tBNTYJK6EV",
  "key27": "31NDiy5AZzcAHYcKGasCojRTwcWd7RXYhaeqQbWvannjLL2TBx8v9cwDWF3txoPDxKytmPcmP2dAwip7KtcKWr4"
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
