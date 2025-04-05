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
    "5QpeHMZpRSz8y31R5mBgwiQWyTRECvp5RJ3xyZqhXHX7WePudWYpVZuJGUhDgVmRpLDcfhLLn7f4GJB6hrRtuHCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWjY5xcUJhs5UEjhLR3vGPMNLXipanktUkdFcKiRHPhAeRXLxyvTUd4ZrEBygEJ9YNQBJY2FxpCf9o4dUfrJvhR",
  "key1": "5PJfeXL2mcNnXhYJ6Qcj6XQcHsFqVBKLdnnqVREoYRUTKmNb6oHdoJMcJDqhKryGnMsDzzhNDLkNhE9g6ZyWcjYM",
  "key2": "4HBvouAjskV7rqPARKqmqsSeeCMPGTkPRfVUYq9S4vnGbia1a8cmagcxwQvCoXrAQfBLeNdBevNk5yP6A89yVnxh",
  "key3": "2q9mhFGWyVQiVPETMT2cDkyzYoduPqKESko9VcUqBEC4PLyUDyfLxLJfvQJpmiX6FsneLUiEsh8fqBeA8SSSMVBh",
  "key4": "4Mm3WpT7FEmvvNStLPeoDzqYNHAaqt3EFGYeEWZvwRBY6nAm5DSuE8yT94k7xhbt1Fnkr29X5Q8VLUdnVRDVu7P2",
  "key5": "4Q4FBMqwwYK4i9Ae4E63h3MCy8ZAJxo5tUVZPS1toqzJnJMeAHoM8SstwKB5KD4tU8T5TUg5uc55KoGiqTXVG6yy",
  "key6": "5s42vt7DoVSVhUk1HBZjfE4XqapDNuxKGczbPFRdwsZXB16Jxc6QdQZ3tFoDntJYksj8h7FeDVFSwAVRg7bf9ry8",
  "key7": "4XXohpDWEsfUaupwqrxzJDquCAxYs34pfMSowMCP6CWm8wXZeNGTLDJ36Q9yfLQER47QueKXrRnTpvTZTDbczrc5",
  "key8": "4Z95hWUwLDU24NhKmfvPB9Qrr69GqmF3sRiaCGn5Nj1H9fNZzzebWSC3rx7edfvp9aMrbPptDJqeHkS9RLdjKiE9",
  "key9": "5afwY6dkxgHRDDMGKUtkyx5dtdAcgfB4opuSKCo9j8aNqpmiWEVU3TD726jXUDBSe1GKhkQx4y7YVbQLYs359sX2",
  "key10": "o6dW1mxnJhoZCeAZSFiAAh94RApY9Ly1c5VrUaPUXCQ9cV6jqi32bcmTgM1MhHLpjHqcovYAwNArUAc4Tg3P9C4",
  "key11": "419rrvLjZ3VLdmgtSdFUHqmo4q92dtUV89biDmeNj3sB4eJ2HRDgzh5YJub8KN9FumFv4wYhnrL7urQiZyHNdbVT",
  "key12": "4tpTZwF3NKq86PPzedQpj8pAaLrFPy17pNurYKamaM9qpnG4YnvfiUyyBoPcwN9QvGbYViATW3TXoznwrubvynSt",
  "key13": "eb2JPMACFXgb4E5XKs84t8AXrwh2cLEdWpyRUZuaZaZAHkfGtDESAo1xDjQSyKHf59WDc1xTWATZ87JyU2A1Gou",
  "key14": "xZdUySY63wVCauvMFc3VEHU1maEiH8SPqr3Lr51VkjnyEaKaixVNjc74eejd2GXUjVnpuTczmwiPcwdQgn6Ap39",
  "key15": "R9ewMxPi7XeYxJ5nke6YqLRQXf2rnzDfvVvKCuGy5utfP8mAwcfvfSokLRkB6V7rULqF2tuA5unQUjRQoEWXTB1",
  "key16": "43RgZHNr1BEyrF5U31MzGkXg8f2dC3giz7GxNUfwNJ4iJ2JyPauGVoCPuLYjwksQ9DVskRT2y8usubpkicnU5DQB",
  "key17": "gmrDwqV8XX6p9bmUhDwvVbmCiKd9BzcYWE69aFmviM5KTgTu498q9zG7ixYYoh5TVoMFDpZydJwfAdyuGELemEN",
  "key18": "5RwiSQZp5SRuGMH8W4sQbzefNN4EvhrYVvDBX2bumLYHT4x94WDMCyJ8iLKq847Et4gZ9JyXnY1i2c7ZF8uJJWUt",
  "key19": "Brvf6AjvzsgiDRHi5aR5VQFFwDeXmDp3YTscm2E98DKUycZPPGi5WVnwuXwkwVHUV3EVcTTYWYF8xa7vvsA191r",
  "key20": "4YxGuurb8W9QUXW7gH2C295MGShQdyxNcymLKEWDvtp3avkMsFnS5btXYJq4R86sgPG1FJRpqJxiqYeDPRcQQJeb",
  "key21": "3Z34ejVDQz5VUaGXfpaU1CUZoLE8fDGjK92ess7ZtwAEEK74Up8567TvepzNBCMXzTZqtTEsXrWHZNmZmknbzZAF",
  "key22": "ELG1Jbh3rMAMeTDfmFgFYvgTK6qHSHW2WCWjdtRaEfrpRg8EPbRz2jcCNBzrrHfN8k6z3FNt76yYYSSKrREtvJA",
  "key23": "5wMDLiwQVXBoFQESt8NPSjrGeZV3pFUZyYr8QzQZTLxRLvNebdvFQZfFCyDRWXVqU2LKwMEEqPshjsysm4Lhs7x9",
  "key24": "5wHtsZ7GYMC72p9cfKJrTBjmQpiYKXEZQn7WeSH6xafYQKorDWAWi4Qzkc96gmbFhQPcAusqZPpP9onxuxHJaSM5",
  "key25": "kQDs7dCEHcBNR1fv4sQJK5kF7zp3pnRYv37b2Ekh9vtiH8dKKtZSTJ2cJtATD1cCZL2FRcKaC9wTNKtiTnfjL8R",
  "key26": "2M7NtKp848YMTs3hCu4injcYZLwxqs4U6bub12E5dcKMopKaNnVobs5pAbUq7C7Z1vj9SR964FcJZP91JK8neNda",
  "key27": "2rfYYkEU8whD9pa6xTPRZaAEQEnZtrdc8d7vLAsb92MEepYT4dNn9pBYiiVoUo1rVQKjgDrZ9zqaQeKyrgmrDW7W",
  "key28": "2Fa7pA6QvphUHwKwVB5RTosbvzsxo9YfE4LtVtYxhtP3QMTfnQQzumVkUr4yeULVGUwkuLgiXnDG2qKwozqUnQKu",
  "key29": "5iDvQp68yKDsTHd2TJj1cTuAZxkfYFyJ4BuhbTAxZoBjrBEpRt88V9FZ75QcDkPmJV4tt3YJReyYiSD7M1RxWYRr",
  "key30": "5eup8nCvLUC8CwPm92X77WZznewDwsWH9soTDHhfJaFbPbEFsy74k3ajKxtswTM42H1vjcRr7GQjfdejXeKRQaui",
  "key31": "2owsDiFktH4CJKhxCRmzfMTtpUPNevDCfsXrZDd4MS4EuyWX4bZjUckS8dYfSR24GHUckJMchYzc13QPyey37qDR",
  "key32": "2sJGTnV5Yd2JJtU9Y6YhNx7dnzJE2FEERJZs8h5WeFbqv7tbEJH1gGm2fWoPFXkY3zbmST8EtoWw5LpGbD7AWAkC",
  "key33": "5B66JG3sqaCkCs7SWraec1SuTcYZ4MrEUgjhd4F3rn6cFWgtpTFq6AWavVHsK4v7xxCrJX8QaCuJcivFLb5Rgfwq",
  "key34": "2MtoK2JSbBtoVQKThJYSLrL2UdEN2EpT3Afvf2oBAZUB3A8mvQi3PWudmehDztK9SUzigNPd3pKdJbasjByUjGso",
  "key35": "5Pt2n46r3Eo1tvVi5JQUqAPnqCrVyMRoiMqqLQDK22BwkyF5oRBMpzAcxtZXu3quEgdsPp27Y9SXJuxTRBdhoS5Z",
  "key36": "3CF2XPbhdjJQQAHeYHP6JZGfMCgDv7KhninxQVkYGqgH7EZWpkDMd51agJc3x5PpQJpkjkWjEAiYm26QSe14vokj"
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
