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
    "4dHxy1DaKVCowEynDSottYwVV4DTNydTU9UUNKctcvgDjdVwNpcavFyPD9f1xPFiSrf6dHhq2TVYy6NbZhpoAJvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SB7qHYznwzMu1t2eEW9uMJ7urGEmuj8ca3HrUKFWCck4JAxZWn4h13hXf48wE32UwysLPdwHWunH9cfoJxdaW8V",
  "key1": "3pRyzmuCDKAhF4r14YJXgfAz7HmZotmcq5Gt3jSAtTLRoLWo17HZAwr1GWsyWQqrPuVXo1NKFQ5ReYQ6Yf5tGgW9",
  "key2": "4SnmmEFx5E3wkR3mbVyFuEHM4znX17Esd4bjY9N6aX7PKoVJfX7cj9SHuqseWNsRpnBGNNijX29G8JmV2SWe8rJg",
  "key3": "2TkiKcW77Z3H6jTcH674KinwohhcfVKMuT8i5aUXwMzZhnmVUh8gj9xQuhhfKSwJdRrNYFsAsVKwAvvyq2xiuELL",
  "key4": "3KZPLeACMAB5pyAHLHHnuN6UMUDmVYuzguWTyQDhKGvfCnPFkymwk4puDv2Q2jS6ieEzFhmoTDMKVNRY3hPcdnBi",
  "key5": "57pD9KZxyHZBykJFrQZoMbkVDnaHdDGqJj4qLwXrLM6gi9cbtnPQaPQ1dWL9MRx4wrj3RXApuAj2seLxepq3Tem9",
  "key6": "7jAPoLyFN1XWm8D1RUXsBu6EcsFTdSMiocUn1noY4YFvLtet1rRkDf2ipWdvEJxXxPTTLbR3supncxYKfzTC5TC",
  "key7": "8jCMxF7DNMTkRj1jBgSTwV5J3hpE7fWC3JvAzZyFANBWpRviwr7XNxP5dtkeaAqzMzg2f5X4s8D8LynnavrhhqQ",
  "key8": "49Zh6urTGYUSebQRczMJaFN4pnwdBM1fh1Q6vs9qF5mQ6LgNt7hh5tHPqGz5dp7VSYjAp8uVKkDAyhMgGjMvUtdr",
  "key9": "KMHd1hjry8WrCoykhiDSxjVooRK9pKuigGYdJmu9Khm91zPcQAe3c8iuzyjXMZwRLYW5uzfr83MCPLMQz2fSTMR",
  "key10": "SKm6GW6K3fJ297QitKjUoD6mGURuYzTcxzP1VEcPWGdH2Wnk8baLbtDNqRXmLgeHDDZbJcoVcHjtTUijunBapmh",
  "key11": "vqE749gN4Rjaxur7kxA45mUxF8ZxGhD2BBUHGHPzhEkLLu9B3Wc6MoMnAX6McdB8GE7zryLQvPZG4hFUssa7TZD",
  "key12": "4xeXx9xQEuV8oMjXfBS2yjh1EziSGXXoahRXuKQwd6EbQjn5PMjKB4JUCMGzay1QAnDSPctrJmeAxvMvYF1XXZL5",
  "key13": "3g9PCN5afPMm2jNkeg95pshzBFeXKLccZBKh91CVWhhdXE4ktkiJdLDqS3gcdS85wiP4vhXHBuks8ntKHM8EQuL2",
  "key14": "4QDZsBYYV14Pjt9o3yLUwzkW6yMSZuCsniWG98XFYjx5QgV5xvTZAToT6Gdts3C92jx6Gc87ei6vxwiJLsZbyd6K",
  "key15": "5N9g4N88mfioWRPtAbGHwzt8h39VX3F7uEYVWsq7zDTgym95dPjoZLFR8hpHWjWxa6rTwpKN6w8gLwSAn2JrjBuC",
  "key16": "4DPhThc34CF8ux8Uy9xFXZTLbHaMMYtxGD3PWZtBqpP2jpbHoeZzBQTTpab42MqzLs28K2KT9ZNGmtcAjatAESUi",
  "key17": "62Psfn7ghG8bmRjjv6PUiBjWVhrV78EMYaTnGTa8k2Rvjtba7EzEqCnKEq7jsC73zgB7p5az3qp6EZCCAsx5escx",
  "key18": "5ozPTMd4paMFF2GmtQ3KtcLNqLRcssmVpu71UcGLNCjWLT62PbRxvWLYeSaEiJY5B9toTW3JT3ovPZWLsizwAtD",
  "key19": "2QqhSLkf1TFmVtCQZSwpViJqsXwE5Qt3V7gZwaDAoHQj2w4Qxm8kJoM6FZhocqYkHZv6zsoBsLMbjqi5yJNFfWiy",
  "key20": "4kVpN34cxNFju6PQXUjBk8ASFxmPUwQcmkAbPhrn8D3H1ntxj4Gh5b84iGW15c9tvqeYyj3YY4JsdfuPvCG5g8KL",
  "key21": "37MoAfT91YNvC4zuvT7PHWN7XBq9WppbRzdVUviNHPuPTTTD39cipQ146fz7xTN3dt2u2RDEzYbvFvq7BmWE552C",
  "key22": "Y7DZKVi7cG69iLykM5JU8aA4hhRVepPsshz6Cxqe2G6MdMLLw2aQB4qZaBPueS5HFUvpJfJrcMxGfDuFfGkHYWA",
  "key23": "ozPXgJTJKpciNB5KGvQSCnQZuPUkq4fmgug7LkxxzAH1yJSX7Bk5mgqnESM7CiyUyueEZeK57p8eGjtssUzHXWu",
  "key24": "iXoNhHXV1gWYnzfnCbBKHwAFk47XrFcx5Fx9fm2iiprWFJPiLjkdVuNTVEF4od6B1a1CQfNqHy4rbGHNfEtxyc4",
  "key25": "2h9z8NiZoeVUs857VEVeNkW1XuKCHYu2mVbWAsquYcJayrq9qJZStNiJYsarx4zD6rPBw3isJL9YQSEuWSm9gU7x",
  "key26": "4wz6548rJrY1LenuKxucpUtt7LVk99epCR7H7t1AT52CmsVECASaV5SdQoiD1Y9sL9HKuYxNLDSj4DGp268o61ia",
  "key27": "21JhpFAZaveuLX1CUe4MPu7pYBcZr5YyVh7PACGWtKeYKgiUK6UbpKFYohNVnqdxbiYFqdmwXp5372W7iNWrrHcC",
  "key28": "4sbc2NVnnEUcLEeDxMP9TyuFE631Safnmy8ZHL1JxksJX7HfAkwkDaD8kJvZH2GvNG91ZaTZVtk38b6u7ErpBSeW",
  "key29": "QVnRzTeuEZe37oaAjuMm5mhpqqYTQKs4YxZQGF46hgwrczMzLXfBBBCNDFfh2x1Sdd6tZQcgJzgNf3s6SYvWx3x",
  "key30": "4i67dL76y5JYeDki1VedzKDT3FnTqRyi7dLmQQ1A7EBm7NfyQot4eNh2arrWEUZR3kRRRKpuAvyw7s2pnXCKgdqy",
  "key31": "2SJMQFgDpfGcLRtRQwu8VQzJH3jhWeK3NmVNi5W2MKesi8ptpJhUSuAk8mzxpocMLT9b9J6C6M2ui9ZmRbkzneVo",
  "key32": "5JfKs7bbSpft13mmnE54HWTS86EHCsd3PALkm16HwTv6fgksoXhUGBgVy3oG9qGFyhth1ABWLxawsf4J5U91A75g",
  "key33": "4qHogEo94whijdiDzi6iDidLHpnCENydHuhi4icgFFwrw1bWc4XxLve4a7dBFj7aQYTHjccciPrCaS9H6esqUNc2",
  "key34": "35Ez3h2Leri8R2mZ8vMkJZNQAYJ4dm6VGe12mi4pfixJdbsrfeVjaYm9i2sZ3X8k5z2wbZATPJuqUrUFv99Ap6mB",
  "key35": "F9yjjSaoqAuMt1h4Xy1E6bmbgbWwyuRqDEZ27sGJDosmq5KEd7NiJ1VZcs49rpkRtoATPxxzyicrhfVrbYQNdEk",
  "key36": "3RuKqCouCRoKEMhiJBou1dxDXXoRZVNbmsCuXsiirZzhjqu5Z2mP8mbZpC6zUwKqGmX2TdaqfVTgEM8GZvZ9VrUL",
  "key37": "ekZKJgwp1ZMDo7Jc68NvRhTmScynkNUkrrzovGPUxvTMNNh4ecPWQjEB1VsQHdsQf4mWU6N2tVWp8euKNLHnM6a",
  "key38": "2E6LaKgbbMcGdg3K9fn7QgWakqTN2qDcjZ5q9HkbRSyqueSJoNyuRVv3RcFsU8jaovvLFN86JtioL6WrGycfDaDj",
  "key39": "3cZsj7DbL7gWSYUJ51bnvVCzSZeUqQN8Sjp5wKQQ1dd7zK6akhtfenNKbQ14KkJfWfSeTEaxLMF76nomuSH5rVGG"
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
