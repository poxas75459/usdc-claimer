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
    "3tMU6rggdJVdHXdGVcBu8J2UQA7JoCk4a5pFtZnUv4jQez363hhRsLMrYCNLPyA4tGPx8RSfMM4ruqX8MAk9UJk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usagYVRgt58ZVokmGE6Yo4y7uFoWX7XvUYE4V3DKdD7S43zqcA2obqt5Xna2SmakkusFTXZ3iJFZULkzwEZW49u",
  "key1": "UJZGycQoiUq1YgtTTWERgRTDJTgYbeLVYPwHnuRaeYmWYPEP45DZvrFFajANRQ3AJTupa4ihw8TAGXMyJ9joKrg",
  "key2": "35AEhn2Fj6yd8c6V8iA1PvqEHf4BX528jc3zWNKM4vhSvV7Doi2kQoBzB8uRWaHsDChwTdSvbZJk5htDLctkoV7y",
  "key3": "42EqEJ6RwJSL2B4DjrwsNwbCXJM8NVVz3uw1H2QVgKSQjSUZgT59qysmTYrbqCoJKPfMYQnj3oiudRt5xkVzKTHr",
  "key4": "5F2CjJAjzHsFbcYT8heYyitUCL8imPcrrhPDmK2gbHqfyEbHY4ZSfkSwDWFMzk38MuXWkDZxXntgrqjpUSi5Y3aR",
  "key5": "334xeryhpgxrYoz16BFfnU2uVXXNMKhutED2wA2npUG47tyUwahs93v93KE9vDWW6tTa3sWb5c4t1QoNsyfaaZaQ",
  "key6": "dE4MtmQAKf3WMEHXEDcqLKReAQDSXMEF7nhamLFW6NAfwVu3mm6YxkLkuve5PganzmXKnrTH7YZqirC1vYy9yDp",
  "key7": "4hzLmzWATymaofRKDRssStHdVBMhN4JhK6KH6Wywj2DFmPuZGXodGzyFqHM67uoCEBKiDwKKJnyHk82tj78SN5Be",
  "key8": "Q2yyArTgoSkCDzjQ2ePbFxZZABuDv41EFA33Bw9EwT9xXCAPRF4i4MLjLs65tqW9ECC42pCpLwHiujQWKMzvCsa",
  "key9": "52BA2eJi8yaXHtLJTdG7V6QEvdiZFhT5p2fWzvSTJtNJyVtC6eUu6RYMT4tGyiAcaCoefc92EjYUjRAtt7xZFFLc",
  "key10": "jdbWwAGTNhphs4yQdA8A8rqoT4pVbiNiUvBxz4rapxFGqgUpBu4gUu12vrbedyp1TnPAygkQE3Dmg4U9WQT1pN5",
  "key11": "3NpLadyirENRzUmHamxFcy99htR7tfTKsNi4CnAJ9W5XjcZG3XrCXU8NsJc1WpE4s7XS9JpKjHmo9B1ZPcqsZcvX",
  "key12": "2gLTstPEcfnmAvmbwV9XUceapc1GH353CjmT7FR25qmbqGiQwMJevdPxRs5LcMXn6rWL5piYLdifmyN8MTW3pTYy",
  "key13": "62qooFGxV8LyVuZHqRmBLofFZUrdb4oHdw2jjas7jUQaQrf2JapyHe8EwKbirNqYLM6vEt3Sx9fEL6XeVj674n5W",
  "key14": "4v3r2RbZSgsDuGPYjUMe8ycssopsSGD9jJy26MQZUz1p9yp4vkr2N79oDXMDYZxVC65Q4jELodDGuj5CG9RNJQsC",
  "key15": "5jYdy2QqdsWuDdF2BJkeHUy7xTK6nAjtt7jr5wZT5eW49ueAZtMGLQtooKWpfa7pAJLZXbipfZYVgTKiww3gbGcY",
  "key16": "22PrgZN1X4Y8Ws6LXQ1piVKvvc8zqcz8wAtHJyh8cVby2bNasz5Qc73i8tYAEzSi7FB4xpAfcPbE6CT7bUsMiioM",
  "key17": "2AHiUQvUVxExNQSdET6QsM3ptipRhnzVA1P8bvWwvgcJtEPqrm1z9r6mV9wyScZT1jZdJS6L2dCUrwAWr8SYKFAd",
  "key18": "3hGsvzs6Q2SYfHrCCvWdG5U1QaR6LhKkkR9vAskVSFAocoZ4a8MfNfSQs1QfhMH7BaoG1X6Fk4egzxPGwfTgX9zq",
  "key19": "5KTeTp3PDmbXUVBuGosFhcfxTEn6Hdgbg2mtNuNJfztJgYCwasm3XP9YMet1DKwBLfLSSfzJsqUyWr51TgV3M9iq",
  "key20": "2YasXYFX83MiP1Ki1PdyG87brRWp37RVbxA1a2intqi4mH9tz7wGjqFH9fudXMhx1MKQHaURPDQgRUBaE6Lxbz8t",
  "key21": "5N4b6k3JCwfYFA6vBmiQkhRsBeCW8sKv9rtmzUXzjderLNrSaxysSSE6tjFT8NQVmyiX3yjWXQFkzU9HPk9KTYzC",
  "key22": "5mFgE1UdtdM2s5gxSD24GMTbg3uZfpusxTDsGgPaoQEuhET9T2BL4kJxZj4exUTvt4HrixRatDuvJqEb52qEKLkA",
  "key23": "49G1N7q7J4TxBs71KvX5Rb5MYXHeCaJ1MWDMesz45o6YT4rde6fvEij5agVC6g8r3mh2RiXYLfqx1psaiTpj2pju",
  "key24": "5VBRZG9CGpcuqZmYcjDJCaQbEgr1yrnBE27LJrarTQayt8LPgnZ8eQDJr4rb2uHJC2A9fZX9LotoSeVEjE6mLkqh",
  "key25": "toJ1ip2dhWd3ut462HWt3GnE7soAs3WR4KfVqvGZHFink5DPsqeka6FtrJVn6x8BfuzmU4MZNS3MWz9Miirjsoo",
  "key26": "W6L1bAx6vqK4E5xQJT1LM4SPDgMStuoSicCbDuQCZUWNG743pbVWAQQoJWjXsVzfnPCC51DuYB73NfnU8ujqE6e",
  "key27": "Ub9gwq36h43ZpXXYjSRMD1q5nHxWATqZ7BemxFgEsdozGBqJDnedWCKiJiz6GXJEB67GpeuB4wM2YbhJeZoKofJ",
  "key28": "WruPiTkEeMQYqFznJBsx33DeFfc4FTZgWZnpJG69ZGZySWutjfUXj6cqrmUwRFnfoMU79Z4UNTJJ6VEh43t8Ek3",
  "key29": "4KrmZ41VsFjLcvhy6BvAcKVoKWrSHLgKWzH7bvBYJiHE72QWXXGpB9wbcD7e86vD4pP9UZg5xf4Xqa5URMvz3CuN",
  "key30": "3pgLuBqF6cfV9E1Bq5tRsD1bpFnY29mQZBKaeKERdyADCrWa5sokpsLCFQmLbf21B5W1Byeeq1oJbM3uDWA1x71x",
  "key31": "ghnjNR8pPc5A63CVW3NnbNtHif6LpsVWBdtnXoawsLJ6LEwVKELA4iXkiMmFU7qcKD9L9FQCJYx1t3nS8F7ymVx",
  "key32": "29MDp2133dyLxVKbTzz4nEGyLNaNYGQTBQYhbRYUJNkzizD1k2ES1xjHK253M64F2e7WmuuTLbufHDiJW8JtY6Ly",
  "key33": "85nCnPH7Gpxww9ChTkDLPi9wkctPJX8xxBXVwKwyKmCogpKzFameKiWdJXjp6K9zawa4JRXWbWbcH592hawozP8",
  "key34": "3uhD5RHdJpSDjdFefWBEPojkRBsGZDF5L2758NGDFEzKLykSebzTDxtQXLYmzZfZaFrek2qdfex8cfsFfBZ6gpSA",
  "key35": "2vre9RPcYrnFwviDjbCNWdY6eRB4MJDHg3YHXKYnLHcPZN85tUpqeQXA121PEC554jDLjE1nA3AW2DNgnpdKvgHM",
  "key36": "4v9MesfL1fyctx8kKPVZ2UNYNVQzf9gbZDuvTrGgyw76rZ63AqXQiLe11FZdXHwjSKEMWwbk5F1dK5WDMTZVwbKQ",
  "key37": "SRfq5JEVx4DFiUV7hkgjUsR8oVwAs3nePfhtzVhk9vy9A9uXErr9ozHpYkX57zkZjn5devBvvNWA5FzC8Cz7M5c",
  "key38": "2hSMZfU9uwAU5aweafsu88Cm71BzFzUYoSeT9kCs6XyamtLJ9zYo8xi6MYMr6LG6U5UoNReMZgutWoQvbJtbChDX",
  "key39": "sYPxcNwXP8V3YFRc9nHakNbeKQtNfcweRY7vSvPiPZ6s1X4mYiECtk5FT1QGGSNSq8h5YY7rVBPBSzjW5twaRQQ",
  "key40": "tnd4FQSLQZ8XJrTrut8QP87PF3UWpRxHSw68dFV6ZiHRAb7mAop6eCj5nV5grvqhsMWn6GT1Svpr1s4jUbn1jVE",
  "key41": "Pe1YDibkVio5h3bQwyotUnbFBrnfGUWPyfdbaKhXaTmnfc8kjApyNPRn3ZN8nm2DRspeCKCX4WZh7c4H6G35hG4",
  "key42": "3Ca6X8qkJ3L6RkDDqKdCFCmSJJ7fYPevqL5VgMtko66uJCWz1vRxxDrQWsbBesyooSmwqq3KojWeapDHiqHBrxX3",
  "key43": "2C8mAf1AMbGd3nkoHz9vbMxAkATMDy7umxYBykk4PCNpKABmG1U4HQ19g8hWd1urrXrDQS3XcUDv9ajfaSbRVtb8",
  "key44": "3dhjjXPjK9M5sM8erykigtFdagjStjpUyqezKSLbsy2mEWdXEahQYmSGsYDeWfU6JtFaZJkrqF792ynW7hus5D9q",
  "key45": "36Rd77vouFZNSL4tJbMS36AdrKSgMgPhSw2vXnVegmDfTYM8N4GDwhCs8gp5oRwVqZfFUngEayPDiu6Wm3NAbwRg",
  "key46": "5TddmwqQhd8uKnFtgBVLx7WT17G9vTb47jokEMwekxfcFkkGTbNYHkfa226JPQ2FMrTLG9Jc1gHHXP3tvcqo2f2p"
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
