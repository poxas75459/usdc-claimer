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
    "3vcgDtaWSNpQcEZk4hbTNMpcXxavK9UyB7DMhsvctnRSdgXQiuwauidecSBpiBvThTQQMfDgx4igAmwHitUQ7pYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyCiDgFXYrQLMiLdfdABQT9NrHATDj58p4UZ2uZtYk5XzJn4zAqvoYJ6ca5kAseKdpbxBjWunmd7qqm8zxisDix",
  "key1": "3m35j2DRyNWR5F4bBEGFt34vTKnoPUXpKcsNVppSKCF5TWYs52hWT94JGjci5owkqvniV3vMBQw6ECCGJNBEgXBp",
  "key2": "4vr9QUQ5ifTs1v1ouRf3vH52jvjwVQKgBukDn6fH7kmqz2gkLN9vcHfsi8ikRdWuTexxj8hpxSAMVDxHheDdJJ6y",
  "key3": "8gdoUiuiZZkY2QbPimeJn7C6L73Sm6wGUVGiW46qAWfjreXx6uvcFLMaVRGxCkX27cXqkYEH4Wgh19He7uXRbJw",
  "key4": "4iaY1MJewSiyREkZFCXX93bHNvZ2LCmDjkmGrAtHCQaoYurija7rmgSEe4WH8PadSqQTK3pWsHcZcnAd7TSp3nDH",
  "key5": "4sgH8bVpRCWG8wbigxBRkZBnc5iHWh3hcv2fLmDxB6oh1mzFLRsQwGZwVthbgqTW7GxrB2kHJT2zKGsFp2UGLudL",
  "key6": "EvdC4XttgA1KMSQB35krMYvBybnNxmkBPo7eyPVViPbsKDzmNe6SZiRkVJ4sYV1DvRAo31Fs9zJMrKbAmEYoDNA",
  "key7": "3H6qBt3GMUWhV8yDV3VuQAhm1JQNPVsFPCThf9PCPFbJLSVsyeEqhEbddNwrukLnyf2wa2FcK436x3Xh7qVK8CT9",
  "key8": "28Y6eskbvkA3pJxn8ynWkqPLxs25aHzwX9VYD2gAyNPrkVkKmTYVrR6hQeysEbDUsgGX5gH4CVpfcHG86ds7GBGT",
  "key9": "5Wom83xQQqqEFj7AmUDCdqMPPqitXMgxTnNq4mz43pa4sKyzUpD7fwoQhbHAeJ1QuHDD64ET8SKjm3k1EY4VYZDp",
  "key10": "2a32tw7mDgDha6T8pbvYMVKMPjTgMBPzkK5Jjrub8FuZVSafJ9jgQucSjy95Lvg9LR1meUGjeCKmT43PAm553cZh",
  "key11": "67FeEBszRuHSG2Ku6qsaiDu4r4FfpeNQuZ9jUwbZWmFM8PUBVsfYN8oH8ZrLgq6bjMR71bak75EeXQAhARhmZSzV",
  "key12": "2wCJomYDqeEsHo1ngmnEEA62G3w75y22SaczfmgQDpNVsd384S2a7TFrUJnUtRC9BjukVfhwswQpMWxj5q5QmNQ7",
  "key13": "4HxxUB6CNcjDJQ2KKZwaSiJwkHSr644fJkQGF3vRgPQdNerrrGm7AwZmm53fAyRs9sFTqFkw4piPyBEzQU54Kz9v",
  "key14": "49BtvKkJ5YiYsRcJCZy4tZKgi588tjq83CxVaxM5WDnfNH3qDzGiahqw82N6KAAPRVDcSR6DQ1CrfuXmi9pudrPv",
  "key15": "5J3QFgEkBtAiUGQXsP4gNNBTfJ1Hv6Doek95Zs9XX1FfGSaJbgn7EvAoUrpAGmAFxS1dUZtmqpx8WJzPkW72DL9V",
  "key16": "zAktK5DSFu3EqswkLqPUAnkhm5y5R8A44oxqj558ZB3ZqQszAjZdDauJ1PjYeCYahRdQXSFZbV1tDdmbdRUbyES",
  "key17": "5513tuskHPBsu6jjqrXMjD6wtiNET6GSQSJNg4i7EJ2YLD6GNvP45dbCuFgnCy2QKL47cjSMgURC4mP4HVgccXjv",
  "key18": "61LEXTD21A8g7LprjQMDPo2C7r8YsgFsKeFAeXksC7JoF8SrE4z71tbWo5JbCTPkWKn96Hcfz7ZTpe2HnxCRF1ws",
  "key19": "5zo64Gk76xSkSN8JuqMru3YgL7FzGuLq3awFZUBama88wEfftYpBm3bJfYcUuUuqbMPNmVGrWHwvTBTepjcPXisH",
  "key20": "3jzjwDN8pgUxDgCZ7rNL8i6r2JUh1gHn5vbYdgTDQhts5Tgeyo4ZVipov4JZtdBYmopmeCCwqXGHWnACsFiArgfM",
  "key21": "3JGjwgJJbH23aSP1iX4F9L228SUxMGCxngR1EghJWkLomVvMDUyPEycYi4DTFKjtB5PwyAZNnSnAo1rrN3xZnhge",
  "key22": "2waxozJ9wc6nShRXjokLV33J8apLm4M56Yj3HhV1yL5eragejxYLxnwJ8tNJg2poWUPTzK57kfBsFc8fda8jeBfr",
  "key23": "3Do7enMe81JN51o1urbMsGGv2qx76xm9atYNT8JMfCMVJfbvEdrE4svbUy5G4huV8PuCT1CNcUQRwrsEFQrbtJ1Y",
  "key24": "2E5AvCzp1UL1VayVWU5kiaHiismvmmq61t5Kqphjc3Az9a11DwwVpzimzYJTCY8mJNbgDZ52nxFc8CPwpgsxhLBv",
  "key25": "54vhL4AHca7hXsjJuw4Tg4jHK5jTP7QbdCgHGt45BxzaXFNRzL2e2oJBhEkhgcYgPoqLxCVHXXaMFB7VKgE6EfoG",
  "key26": "3efzic8isu7SfGLj6vTsm1f5HNsUvwPB2Fn2JBj6RUuvwKpEpSTkMtE6YeVkYP6ZFhPwMrBXTnBdiW9M9MmgV4Jp",
  "key27": "3VZTj1YREnDWcwa9VfG9zStuVvAMSvPoMn1sPHkcDmSke7yFBG1TSzpwSJkvKUZCLry8V8Wm3kDpYABQB1giBhZX",
  "key28": "3cWeBV6dHfvuSUhQR4yyYZJUS2yikG9hWodYwH8bTuhrBKpk2YuRgH5mjMUzfiPHbmBzjPwZkBRHFtK7o5FUmBQa"
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
