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
    "4yq8jXy5J4FXWqG4PMnY36X1SRSM8KCkde3X9QCifJcRDDsrtJpKUJQfUawEAB7gKWW1NFPhKaswUi9EcRtu8Czs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ASZW7Hek2smw8drxyCLxr4nmjNg1aZA8i6pTJC54jQRji483CPoRPVE1kw1YYSgLkpma2oaeigMYUggB5L9PB4K",
  "key1": "2ZX8thTAYDgcWDGHxaUw2LoyPud1Zf9PY3Nu2HsxAsKVe7x6ShBgsFXeydgJm9fX9eZF8F9jvvdMejd3DcHdxcdJ",
  "key2": "4NTR2PCKK75FKCv6bnxgmg7HYGNGH8VrkPa7j4jB18S15Uz1mCvNVKXUJtUgE9wVxGg4sbuD7WbPSikZTHj2chiX",
  "key3": "eCDAiYMGPPbuKHHzzNNaWxCeQ9dXUPVjhczyeskYPZHqN7nhsW1Z5Qyxd745tjL5gx7XAAEvoraRwp9tGv2zan1",
  "key4": "5zkswoxDbsq5SbjGrCES5hyi4x45fSCHQokFkegyKq217rEXcpVCU4yBmdQZiK6AdFSf66a5ySAV1wM8CgrnWp8W",
  "key5": "wSLjq5RQAsZkoh9fsmoAdo8ASjD4tsXDSNEyZHT8WsuSWuZ9DJb9GyHXXieAS5XXAa3Ge5gCGifvuoEuXRB9FdS",
  "key6": "3DApcmVgsASgeXzaFFmKwqKyGNnWtdvFVe5ModUULL4hJkcJ6tsSLHAVqqRRy5Uruid38NnyTsX8mhywe65yRLX1",
  "key7": "2ZHeyXsFvZdEfRd5csht6gMDCw9DyGPc5ADDq2hZuT7JVe1mb9yCWQXFmVfnUZ1wRtW4LTZWjcji4pFdQxcgURkj",
  "key8": "5a5RB3AQsSxi1gbm1YdoKyRBghHGdnvcfb82iGUYPsdsYjEeAqPs5nMprNvcRM3inhYpyVUL6LbWf2XEBK1jBwvC",
  "key9": "3ceszKkJys3axUWQNRJ4bv94JT1n4WNMvhh5DKK7gqXEdPF4eWezc6h466T4jPQNeGExXgTJVinmR4Ep2yVGx5yq",
  "key10": "3BN3amJXdeeKJXsDUcyK9BRsh8Sv356ZMTCtrKp6mQ4tUejpj1PFqJybmGNhkKDXH2YdF41Yu74mFmT4yUmXJRva",
  "key11": "2dZvNGhd6QNPknaPX1Qhwy7rMJRawLak7rABMGoR2gTtuXJbRVSvNDJQMuKsKDVXdT8dLFk4iMTKscPZNZjT2Gvf",
  "key12": "3u2ieXMEC7F1DZaLxm2znyjsc7gSpc6L3dn3RobhwTgB3jcAdx5SQPmQTddzsrT5irioSfrp2GeB6P6AMSGTb9Kw",
  "key13": "3WQHt3MRjkn9E1d79EQGrUvpuQFackRzfNTMkQ9tBdoLeUMPP96WX4g7edDKo7s64z1uSgd5M6qTTNDKLoaJ1pjk",
  "key14": "2UVCFnRGpfWrCBxiqtYz6EREcs1RRkKsmcZ1Xo3bQURx2dcNe3xP2t6r5wRnbk8uy9uuwGD3RpZxziAVwiNMnJK5",
  "key15": "3cXCdYu58iKKD8DZPhFNMcpqUsKRH6GqkDNuRFDs31cxfT2n2f5itFDhWzszUrB6U4YpmUa8Qdy4VT4dNs9jrpUv",
  "key16": "4hPJa371PTBTzD6AB36aaWBDtPhNq9CHwjm44n8hEZWGhuxyjdAMmXyyGuavuob54bPewC5YEuue9JZgFXsi9Nsa",
  "key17": "uhSWLjJsrEg55vWzXQhm7yCMDUHMJQ4i2q4JXtCciZZEffcef4x1x7CwuLaLHRrdQSSw6Vx6djfkZQrVp9j3s6T",
  "key18": "2JyVwc3hpKj9VtDUJaAtFZUYAaUgybSaQoa9dSQLKdQLPU7LhfaFq7W4kWw2Att7o2eFyS4k8pQGR5g4hB8xJqKj",
  "key19": "4s1wkE62Luf7VgoRx7fTiteozYVo8ZSJ3qYL3zT4ZeXf9mbBrZHfiCdCrP5GsK3GdfUxEtxn8PpSrcRnyZqaraF",
  "key20": "522DrnxffjF3FLhhNnJxioT84zdmPzM7sLSx8Ab7vFFboimMWi4qexyTPH9eGVkPoueo1hat3pMrtFibpHnfjXJd",
  "key21": "63UV2ANmV8v7MnzwXCrdPXuRaYiM8UhaWJxb2uuZyaC3JW9jXV6CuBh6wA5tQBTMPgB7MixFixkuQoqCCmA5rxqg",
  "key22": "49QKFKauHtQhL7CNRJUofdpWBjmU3z6BYqrLNfz72Wzbku5dDrwMKHk8coewwSXbNGfMdkaxMbLn25k9qC6n5YJA",
  "key23": "4d4cPw8QLfEmGFtvynXGsTzPv7QAMttME2fp9GkE3mZeBa86rC6LHCkR6uPbm2jezzEHxQ8vvH2qWC9XXVCuAeaB",
  "key24": "2RMXqQVHX357fGZczmdLkmYMim4Wv9pwr6x7PoDRJezqBEgVNF7UGdMgjB69epLFNuKE8j1xyymdBdyfc6LY13Q1",
  "key25": "2PjZpzDsjpGUj8GirLHDGQqmpYKVroRRELxKPCnN5jQcVCkMVFJE39cAfbdkZxvfMScDx2jUpsous9XhnMGAoZA3",
  "key26": "3WYiwbYKzGT81u8VK7urx1w8nWjyJp6TMaQSE4DydJVsFQhdtAStSa4VuUa4iLbrS6x8iU4DSKfNjhrTrF4rwaZa",
  "key27": "76dmH6NQezrRSSjydvFodNYoJvCguC9zqruCocZLEB83Rb2JS5WL8ecEX3tkuVD2s1Rz8rtbfgwu7zx2jp5eP3z",
  "key28": "2xnWhzJsaigC67zxgmurP5F1whbBSALz2hqutGhMqHMexAM1LsNBBnFnKUxuvbnB7giTQXsHJpyZWuX12wtGx6a7",
  "key29": "4ZCUW9ppAZMwVgfvCm6YeS9CXyy4AbzC9gBTLfYVwVrPdkB6sJuRssC627CPtt3CJNUFKUzjmMGMURrKq7q7aqB1",
  "key30": "4hBwsd7U7jRxsaUciWDJQs9iammDeGPXC8m7co87mfYuXTxs91MEcy98y4WBeJjGniHDNGVZS3ArycsuMSeNxCVx",
  "key31": "xouKacdYn36jTeaqqrC4iYbECBZ2QFyZP8Z62x8AFJ7uKdUHcS5ttbcrRv1ZbWoBKr2FZGLWU9Tj2jW6gkE9zaW",
  "key32": "2JHe8CtNRwPAh64FzkrsoQ4uGWWgGm34pSRT6oHY9KVcSJJf767EjMsV4zXpErGtMBTiT2iteHd7sduziDmrEgan",
  "key33": "3GHYm7Z8dEmP7D1jv34a1Tccux3owNz1gCDmsH4ewLMejBm6MNZrqnHHDtxFssoK8TBcNyATuaCV6Z5KjmSwDw18",
  "key34": "4ZnHKBJueRNa4ffeT8DqVpUiPGSzMeR4aFk7NUdcLNWWjbXRGZ3fcz6dYFVK5yrc7sRopBdqFMvihKFbAGeU72ZJ",
  "key35": "2kgiT2HTGRU97Y6o16fpY3ficXBkcwKu38XP8qfanB3RBghC63pwnM6ES3M1Wcp6TMnkiqyaoaVCZh8QNzVDYtxs",
  "key36": "4Jxi4Drr6CN1TPVHb1o44N8LS5bMCtdx9tAEYcyqCJLwb8XqH3vxi9ffffUQqRK5HbMP5LLWDdJbBk6xVsFjEzo7"
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
