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
    "3PG49Sp8NuWmxbXazTA7uuhfkXyhy6jMejXkJ5HeZ5uWqFzbYT2bb4NUxG3rAjnxwYvtGEcNQ1HmwbWWRHwuf2wA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AndTJXry6UdjYFWn75Se3AMniinGoFyj6jXF7bK1dMaKfkyYj8QTp2hckqhNjidJTBpR4xx7PqVBMCjWatvAvEW",
  "key1": "2giuaDwigMnibjAPgLdu8RqKD1SrnStuLiGeDwLeDR4Zw1pgNKruahAqNfr8yGYxnNigeHK8W9yvbvivA1bL7B4y",
  "key2": "2X3yPCeP6EEPNWEQG7sciRBovsRy3fbdrZBCNUEoe6TPWDPvh3RWsf5m8cfArWgxU4YknGRHzV2Qmh2rAgHtusb5",
  "key3": "3M7haPSsBTTwSN9XyGHh2HACJ12B6NYC1JfijhGJFi5Z6kRWK5JHZ4ue1qink3AJrBYHCqsbAkhicnaQwQLqVhNW",
  "key4": "2dnZaFqTMGF8cSP2BcP8AXpkGpL79VfmP1NNUuA82uq5CFFPJsrkPEaVwrwNQfT445zY9pvAkAkHbuFoFjrw5iwg",
  "key5": "2SceKytnBgLQnZBukhu7MrKcQGajMAFP3hafiWR4hx8SHKtTmwNGATX34J9eyZP6f9189NatVXdfAoEwnXMZorqM",
  "key6": "2Adz8fGPophkoszWpcE76yUYY3vkKvr2FLKbxNieYsgb2kXjzxsPzu9kaYK6PReuLMFbRNJDBeQTUBbw1ChvSeKd",
  "key7": "5y11xLQ1tC9Wqn4R9ATV1LGmipGLwZ2WpE5yxc1YdqHmhGZYQLtUiiRtSzmB57MuCeGzr4hnhabZ1ESS3b3jS7rY",
  "key8": "65ivko5capk1tE78rSk8UwSVQzNKixs3SfZTtjp7LYPFM1zYy24FBoPbpKimk7br4qcahuQ3CKkqxQg7dcEumNSX",
  "key9": "2gEqqoNKuTpxXi29LyPAbFdiEs2mK34GJbs5SFmC28zKCF1RTCG7Emu3DNtNKTnoTXEMtrGi2FWg23KuncNtbs7t",
  "key10": "2TRiQoQFo5g6Ei1DZ6JVbK2ZbSGmV3nR3Z6FBiw44FPMyjkg1qRFThd1A5z62Knw8EwLrUt4e3VZzyGoTkT9D1kD",
  "key11": "4muRuzBrZfeKiaygZ64HWwErtgqmAnr9L5pcuaWczSL15RYcMDgKGiH2tFa5tH8JEQymqra7efJfs85YYUVbMuEp",
  "key12": "2KiC7HNRAtrhnH7fJCRpvqSgBgPnanLcaRWF57JomSsSfV7Dratzq7Fk8senDhPtE9H4JJ7diAn5xCShrYH1SK64",
  "key13": "5NLd47u9WXM64xEnw5y4RNuwgBBM1VcgxTphcz4xYYWwkXw949fFGRMShKgbmdnm9wcVEi1bCGSuJuvWgjaWpFMn",
  "key14": "WgzLZgZsBmJqzuMva7fkHe182eThumbpxe1tHutKsvE2V9bzNxzFZYcfNYdGMqtEAxMzY4Dfn6FYXLfZktfX4iV",
  "key15": "59FX82fyubpdfhLMrvpynQnHRyzW34BEvyjziHpMEHceqdebvq4qYTZVquwn82XvBYJXpSxn2fC7qy3BucAaHRtq",
  "key16": "5FBENXS5tWSezjwTTxsCRtyrQtSVfV3fKmiSJ1RGo8cv4vYmzLvgUBKYWK9kC5WsNzXrzUBsnxcyysEsc8SxAfRB",
  "key17": "45RWDdsHbx18zeBFizyni926WRUbw7sp3Ww5ykwWBxA9939RA3bUrdHv11M8DHt2TFi564q6vtnq3yPFupNUrhrQ",
  "key18": "45Q8ZeWxGZorbUt1tzmppbT7mYTT12q4EN6b89eXxTfiGJcCAgi7yzGoiRVeYCV4XNGRvSrrrUBSK2bPvNBUWiwc",
  "key19": "3VG33BUHwLmFqbAgsEyaTJ8wHroY15W5mEtbNHEqWGoSFmDxmMowHYx9ZFA3ag8EQHQqf5LxMt3ZSUa5kVc4c5UU",
  "key20": "2btqbtTSR6pMWLJRSRgehZ4EyAjV2E9EGPyt5qSo8nqBfSBDU4ySZpbz2QwixXWkcE2oMEzmxujbgDKsANEPkta2",
  "key21": "5iwGBigceLxnxu1VvZ1R53TL6C2Wqqp6kreuW3oh9ZgRSGheK3xTnY4HYPs74tgx1r6WTQcLUVovJQLd8ZubpazZ",
  "key22": "5nJwc5nPQLGWpLr5aNgxZ1Nm5NTBDAgyWsxSdccgvFnJm14vvXK4K3M4cjdQcVdc7p3KtMMvHVWNWutr9KZZgyyA",
  "key23": "5wXjx5rNMrwHJfbgPF3C4odpEoZXkC8qBFtcPTBbNoTN5cKpjbYYfdWxxjyLrnowRqG74dWkZnuSBMmNp6WHyjgM",
  "key24": "3KLsrUe2YzNV2XhtPg2ZqqDPnMSPSycZaa9V57sChSMja1xhkvtk5JZsB79jCTa7SgSoEK7LfYH6H7q2kQTLLaAB",
  "key25": "9u2E24e5X95AYGJWxQRGYSaJyJ8rDt1RD4N57NW4YphZDp4d14ZQSfDrB1mtYqduU13sXxxRRFLucWkov6Ef2gj",
  "key26": "57YLe7wNNRksZmptRyv4BuY8CdkSP1rVRV3SDAsX94Gio6N23XwbhZV8pZrNVCQAzNAwhCisEu8bSFsARiEdui7U",
  "key27": "2UAyZVdnDSvA6NDyD8eJ88jqngPn1MZZgMTV4rLUmB15fAh5GCouaf1eLpGBoMmVRMu76RGKaD384v1f4qTckvt1",
  "key28": "mhmsXdsuazXzGjka9yJqPfbaJt28u8eELoFktKsmBVSiNJgQtLPkMvmpWXUYxw8QuXECTyCNQLEzrf4Dn9wwGVy",
  "key29": "5irS5LBKxumr1Xn6vDNTukwg3TwUW2WNFFLMfRenGD74h2hDc2MCURHytG19AKZgYo8JRHQAjUkD2scGpM9p5kw",
  "key30": "5n4DkCn2rzQoKVRFFRjnc9Ncs5CXToW1CQjrZbeWGMCxmRcS2Q4maMKQHyzwdSiHLiodvtyoLFN1msxyAAeGwPZu",
  "key31": "3UFqMgz62qm2mFzGVqez7eXqBmx2ofTAeRDAKN3t5sBzyGbP6mZrQXb9yiF8zNWaGmNFzEL2JVH31YaHNUNqgCa2",
  "key32": "3B2EM4jG4WNLgRz7QQBvisLvi7apvoidZGUMy1gvDNRzFm2Xc7rkpRqvyutpWPmHwZHTyyCeVdY4E7sMzbjNdRQP",
  "key33": "3nnjqLX2pT6LyACNkbcJrMGyghZ868sPGKRSEtQPDDadnvTRQduKXsvFmPGPo7rXdXpj6BPvS4ez3Df8ATVWxnrY",
  "key34": "2tBh1oLvYXzgqSsj2rM3DfhptwXG6uvTPhKByfYpvDbV1kdtF3hhJLZWDFs6S2DVP44T5NzJiGo7XHZZetoHo3DU",
  "key35": "5t3FWsL4BkkPXgjDvX4mcwnbg5zdsp9hDR7VLe74bEJEUPbZCaS3UdQBz8cVik5afQ54T2jURkLEQKzJqLMAm7JR",
  "key36": "4TYFPtSBuPgRyDjimb7jiphk6x3doMd453Se9sCU3HwswkbRW37gmCywXAMTPxySwiB2P7ZGHG6TMDFyfusRnNR2",
  "key37": "2h81EZJcU22v646c2sejh2knaC7yx8EzsFsXrybQ8pzqCNjKnEnXG59PXyM8AJ3LSXZDbGfeaj7u7jEqx2rZwqPd",
  "key38": "knHuoaMGt6FhjQ4ajFhAGTKbjYDjaP4dWfdMXPy6pttF5zf7PyUQ1U44U8HHnihbsP6VqmKoG2iZir4xBJgFS5F",
  "key39": "5vPoLa2FbEdY6JeAC5rxT9k8yzBMEtvaaJCbtQrtms2YniQjvzpYD1jUuuEocNTFQd6irqxRzR8wDvUsLhNiy7qr"
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
