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
    "4QPqSE8uhFxKzcGCShiut4P27ymDkw8bsx3k9tmGScko7DVArzXGHawYYcDXuSt9frzSai7Y1qubxkPpZ9fjLK7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EXhCuMLktmZj5M52oz5pjAmdg2QJR4SKCaAVkL1h3NQRK7hJxSjCeCZ47PYpqGTMNzuVCTPZESCUmoANNhjXoMN",
  "key1": "4RwLd6LfhpmxKLmvuK5ALneKKWWYN5ej3XUJFyjFKn72uwoLpmFNHyABM3JMVAu5NqdYSPPtFLGA4cqo49n6tdTY",
  "key2": "4SnGzj7FggQzxTZmfbdDtWx8fRV3ScwaMUW34jtcaKNoVvLqvuxAs9UR464iZDT8oruJmW62MS5NRPaG2fPzqu9z",
  "key3": "53knPtZ7dNyaEYvm2vNncf2qnexMevcgbqf9nXYrrSDMbpna5niGJeL8a2hk8k4sddT1WJTkMdQjfRa6nohntj2b",
  "key4": "4cFrydYTDprn4zhX6SQR7vwfh68s4YgVwR7VfHd2YTrHq2Do4P74oQdQyL6m4mYhCTGy5NYnPythZF2VvMPvJj7S",
  "key5": "447v4QYKRMat2XbhVsWmr4dXstY872QmF4keNRfscD5rNxqiKhJxEm1aPTtgSoaGqkrzCvSMWAQxpm9rK4pY3U3P",
  "key6": "3BFhMDzzyHzNDJHP6FpntpKakC4kmG4iBnJXW85E3M2sj437frYexKWPJSnkdpqANRCtDcDZP2RfDZSE2Eui4APM",
  "key7": "55TwHgaLQa94Qaz5CbaJz2fxUFu1bAHaR53oEErwvrW8YBSSMWEAS63QmXFr3oycdebEd6qSmKpEJ2QHoGwnz46Y",
  "key8": "tAXYu6a833PuNgaKNWJSaWMd5U3PwEZvTwWgGSCgT1YQLsAU8ksuBiifrmJw3omPmgYE38C4NLQNThC4rwyyert",
  "key9": "yWN7fbRxw1HMWeJnajypJb7m3bYPy4uCv5YMDTQtNfsqSBDCeE8bcwAb5tjiZqta5TKJCjjCKMR4QyiRmaQ2hkp",
  "key10": "3uDXib2tkStswqFqbHz717NfYVpYbcqgaTwo3qWv9Zv6m4RCXCWVxdnQwj15338NCapFJEF1VbJpiu3CLXo5jGqJ",
  "key11": "39i2Z1dA2n7fNkDjW92Xq8HdmFHcBrBnEEemfSepEKWNmH6TXBPEfn8Lw4v1HgWiThUcfgizgvdJebt5H5r5SZkk",
  "key12": "5g6jAMhNZTDUrGKoVWxzEKAF2215kRkMxqKY2LoKPGmCtTzFqmpfEXS8doARQdStm9KNZfvXMkiu4sQmSUa5JsFX",
  "key13": "5y8xjm5cLEfvQScakownWeymgppP4aM7LMasc6Y453WWx7CYruYx2HrgcftP15ddYeVSPmR5EiWyBx99csschtrs",
  "key14": "3TkisxEfsSThfLetPw31y3AAvTr4SzfAqAWUGhpCgyGHaMP8FALrQkHCjhfgT9t3pi4pCxS6GBmH5d1obfWXj5d4",
  "key15": "mHodtNYGKz4xCjcaHTU2Av42yHjxtaN4nhFUqnAJueLoZqgkMePvWLnzdDYkYFY2XiwUPe12rBLjgMGrWwfGU66",
  "key16": "qtX7aaXvnCH9zyoR3MSNt6sBsmFi15YPaWZr7ANii8nHtRitZnMWdxgpUqizaWyqw6ojR9J476hzXptUztBYVg1",
  "key17": "3MBp6hqgshPLZce5bQpXPhdjU3s15DCsLDHHZf1Ynu9RkHSmHnhrLEcJVZMEaeftr5rJ3o8zntg3E8RqVHzc3uwG",
  "key18": "2t6RCQ97dXRURtUcSJuiLd8eA5yru1YgNYceCasxvUi8135GopC7yHN9KDyJGkuGxvX4PXnG25Ab3Q5HrmMJmKnn",
  "key19": "WdnS3A7JwvZpMpedBy7R3XF1oUivLsbozBh5353uZasP53vX1ZMwWDx2923xLqyG4eJyB8AdXWd96MrSdKTBFw2",
  "key20": "k3QXQ72AN1uKT5a4CRYqHzAesWzDTuF91Mp6WvChzvpvmQ3B7tJkYTXaEfNLhx2z2Mz8dQdF2p1hKezwcEuGns5",
  "key21": "3mGDH9U7ihxvH6qbMwY5ZPSeGg8KGQfesheqegutjaz98eYQ18yrfzhPvL3Yx5a8cA6ybNDQBXD62834QjpVt1Dz",
  "key22": "4zeoWfTVcubr9F1TFnTJX3BkewYVjQssk2GVsiyPe1ioThyjQkffoLfjMCPpSb5akC3GSvgTjBwSTs4KmfPiYzgZ",
  "key23": "3k8yNWG8AR7Q1vsBoRpDtX5KfsqxpaWKdN7hpqbrNkc4w4PvhbYBR4mdzDMSeAWs7KjWmQ1of9qDGSdoBTJbgZc7",
  "key24": "21t3E67wCPG1MqYDNNAgyh4CqschJpLKMcVtyMKxEJk1u3j8vT3PgdomxisLGVk6SccB676AvGWDCrZ81hzcgLqV",
  "key25": "2J3VMRuM1DqZy3So5iReGX4J634T71yf8vHBX2xpZJGn5McSaDhPwve7Ap99M1BJq9MMQqPAtPpVV5fbJViSzm2K",
  "key26": "WZ9fQkKTGmr6MoRCx62Fx5rPYFfsv6WBBEn7aGfvD6gtceFTUw74A8FPAogy1yJwUAx4Go2hJuPJUZ3vkRzXPCF",
  "key27": "32adfbzEZaeWLXCcXGEvUQr5U9zX8BUSvn83YV1vjLtgvzgqz5LrtLQ4r67uDBz9dMfJeXrh7yQsLDcC7yDDZZbc",
  "key28": "2aqGXAF1Jir5YERFex5xu1jDM367fS12pVqBZvTUebfhZPaUcFtDyajMpMtNDvzUCE6Az5AVPUxPVd4sFfBPD1iq",
  "key29": "5yCU4Pw2gbbJ1Qd2MjWCpQX3yh9XBnvX2v3zrnu2q66v4TQvWzW3TCZUhJyq7eChJYDVpQPkW13TbWWjyHZU2h7K",
  "key30": "2qAFb7kkHHFfhgHL8Kr7TikqTSXxGatkWJeJwhQaqvpFsCKcTfVCY3hUgdQ6JtY4egtqLSycDXB8prJWZx7WuvQp"
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
