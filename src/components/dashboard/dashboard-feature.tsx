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
    "3C5RWCyzRhRRv5HatsFoePizZZsZEwdihJuZ3oW2VpGMdz961r9hvyCB9h8dQWUnB66ka3HwqNZhvQo2JqsLq7Qi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NyKkqWwd9hmrdoy2UACaYE1U4GGv639LMern7g6BT2aSjjxSVkfMJYMZ23LmDiDdUqBAgBqsiGhjGXy3XweaEfF",
  "key1": "58rdTge2PrKNKX7BnbAHTeMtTcqTSeFfk749ZzR2Em2daUkb1WGZmPXMxEGShhULmUhq8JkZhgKoUSL79JkYwtoi",
  "key2": "4rgCGt3h79JV3SRT3yDu9LVkVyrePZCbCSveryoQi6s6FjHVEbQnfTmMzfJc7YocCcP4oZAyv3DnKfzs47ftSh5E",
  "key3": "3CgszsfDNrrfVXKs4RG2iH6AGdEg8GRHeWUvX9HJbfrDCo64iKgFvaQDPXNULgwNSNLj2VRMHPXPTR1FPxJ1to2u",
  "key4": "JrPpc6s8dJsqpFYTJYqM47jzqwju66z9G79TvzEKFXJfypF2Zyb78DorBrwjbQtwvLX9LRXuCn6UZwHPLaY9GPc",
  "key5": "5DvjHeLw4W4Aruc5kj8cPBhAYKQ3dva7muCDXQ8xkumrftBSBWZsLDMZ4AD5UQZECRA8K72CAMm4u5SPUycFe1Xy",
  "key6": "57dBZtwKLWFE3JR4FEkHd1R1525oLACkBy9wpCE7JNGcpeBatEitvUbYocYSxk97eisYVN7bT7uzB7awUGz1eofC",
  "key7": "44PnpDeoBjskFzE8Pgsfz3xKGtYRzFwo9QxF9fu7HwnH8AbQHyozABHqW4RwMsF12EjEGRdo7o2wLLHeYH8tJUia",
  "key8": "5rreGUm8ELZWyUqSGcJtdFqbpNdgfpJDsYe4MWrpnFegc1sXonUyoH8dRVMFbYtDgTanZmt2Urrn4x9Uhj1EiUuo",
  "key9": "4B6S3YaoJoqvpZvst5jyw6G9s1Arn7y5goXe4Ba5BD2bXT1q67j8HxwxmYYnTcoBo2QCvSsGuaG5bbD9mFcZ9vyB",
  "key10": "BWKL3ELzvpEH37XENhHGsUc19rbspXdE3ZbpRzPz1zJaqrESPE31WiiqVZwvXyxt9cqWvZufDD57k3h1VWyiPdh",
  "key11": "LrH5tfMpAijumX6vBGTSxj8ogggiYM7wPvegdw8tQBaccMPSmeihXzyfERpPTYsA3ek5iYLhMuBFqN2HKKFZXFi",
  "key12": "3FmMX9aUnCe5HXXnxCHpGXf7WeKRneXQkoohfzAgYg8wzFr9T3pnzmXT358oZF2pQcat5hrWK67vwpzqZnaAkFyC",
  "key13": "38fGNGXRNoHsbAgxkokdt2ykZYRiCKePCZyyo94bsVw9VKtKCuSQogvry1ihoL9tq9z5Maxzi3jyuhnmBTBG7axw",
  "key14": "5Yz4CYdVAdVKtuxGWaNktnGphq9B1WkM5PrKyVFR41TyZBh8cbqKtYfgjbgdqiqTzYxMDwNAdEtnJ7eUU4nyH2vz",
  "key15": "5p3nPkSjchKWL8RDpgBmFFG1Dfn7ppBZ7v7zVSDKfiZfWKWaTzbVZAE1oYmH7qHRb2KS2xFGHq4KGd6vVV4i82Rp",
  "key16": "bqpZMWqkaFCRtc8vHUzpr5NCHqn8vRnmAWUGJv4PgbUpbN2wKTXGhd4LFXhHiFHgX1HRZP5yvU7uDxZzdY8A1N2",
  "key17": "5VUbpvUCdpkdmKXFLGDrVBsvVoJgvqHykwV12Z39891Vh1Deehpg7yKUSPC4RUzQuAoUDs2AZ1WbxTL3hANMrB23",
  "key18": "W8Hfoz8gU8TvGfj2SPcX1dHKFqSzY5PWAZro6YjVTZwup47AVxjxaaFU86GJHH4hHSKE11HKiif2gtNbdN3JECs",
  "key19": "5n9Ue85AhCNEQPtj4vDn8fibetEs1icPUTH1UaAxMqJsmMmo6ZMv6JcLQgReb1EmQY1yCpVtmmU3GHjH461prgLW",
  "key20": "51hc79R6q1n3wcEz9aMpvgNGQEGfPoaw8esEEPcQTnKSY5SMhXMnwLxe72qe7oc7cBdspVXcu6JZq727BSHVYZFJ",
  "key21": "4xG7d5Btad3VVGcysWVPnuPjYXe2A6qjXyx3s7hT5Q2jPd1EB958qP7c9DHnSHjtDEmadKNNeHDC8NgTkLGevfwZ",
  "key22": "3GKALajskHLcwne5CrfbQ6W7RBkZuaMH85Sok2vPULpJL5JTS19H1yDysZRdue1yAdq1ijjP3vvqvfiJ8p3SH3n3",
  "key23": "G6GpeZJJT4kfgLFLDxPurbbLwpKfCDGbpBZmrecS2oxQm59WU33cSGrUsd51nMfrdHvYWWLr4VYcQd2m35LPaqu",
  "key24": "4wKFhqA8XXhq9zypU5sTNThwoEu1KyqSL51m9LYBoauhKrbJhSd7hVFocEyyUDhPQdbs1ZfhY5jA5o4m3GMZCVGT",
  "key25": "5Qd2CWAsE3w3Rpq3JXU9e3ECgcibDnp9TCGT2uNSQAXfjGVu16T4NbdZNZBDuSddFPrKTXoBFQhq8oLCpjFjx6ZF",
  "key26": "2qSfkX6hHRYqejgTFTbus885tKYPm1NCeBtfKYqrZfmjABMsSHT2VatLQDjttXkSSRL6PEtdTgSBH6i1wbLkEf5f",
  "key27": "4zdcZgV7pcV7cvE7woSpuxXH2N3TbFKNvJU8YXbtAeQDoQeNrpoEbiDnUi981cTknHA5TMN9mjfsh8vY6Jc81AgV",
  "key28": "4zcoSXnv1bdxNe9FuEY8JNtw1k3Fdim4UbwWSxdjVRcVxUkj338Hsw8TVD9EXF3d5aASNcBgNke1ufK1VFF7qADQ",
  "key29": "4R4K1M5hYZprCqnM6AqhpP44Z2ZeDRfxJbnh6trNFMAw7B72tjCo4SbXYHwZErhTniGzoSEafUkpEuL76Ros8GTX",
  "key30": "3sciviYeMeiiubKK81seefLWAaEeyPVbLD5L8GJ8LBbQ3mVq48Spf4DzGE1pTVzYqhwJGT3RZmwTbJQ2X6oBuc3u",
  "key31": "2nUTJEkYBQJZUynH7b8beNaYRzmGouVwJ8UiB6GijVAdYTjPZh4i3aCVWZhMpuwMXR8wja1tN1WH4FTkbjC8dWho",
  "key32": "wuJc6oKWfwuFiv68Cr7CxWSjNrFebq2wLvHeipQFTmzD5M7LxoqJWPTegXAHcJfgxVshEpBaieRk5jSHXaSopSg",
  "key33": "5E2eKeE5Yzi6qzgHh4vShnoFBy4F4pFApWv5uxiJZSD8DAWvWdCmZcqPrN8gBnV77YjexDz8NxB6Tfhs5eHqYjXg",
  "key34": "5H1esALioxQvJAGtFVhZmzyYqjLAnmDcLGF4afCkdpHSDj5ampeF2S9tRgpxAQGj6AmhptUsHYMMdgFdYuQGiG8w",
  "key35": "3dG7xS4QXuSUL9uHb1Bs2y2dEt9opop7tEjfNwLYe1UKr5tLoSvrJSiqScujNcpG7b9Xd7hMkdR19toMHsVghfrd",
  "key36": "55JNtbFGyqAFkRrPamvdaYNPykRit4dGuoxLLzaW22GHesDUeEZFuLztJ19Fq9ZMX856YeKFKCFy1DcfMVi5KjBC",
  "key37": "5bZsbF4dmn8MMomJ6ufVQDSwi5haw1GYtk4Tv6DHfCJnJFMzacAxVc2BTzibhcyTR7AVr5SMemKbRDeJ54UfDX7v",
  "key38": "5ANdN21wAz4Vha7bzwwhkbuqRdV1koH9nRvncXuYpkCEgg8gNRLDaH5gAXKkeN4rtLaAiqChBnzZnY175JCDDdMz",
  "key39": "2BfRKM3rCgLrk5N7gS7BqDHsP8VYNLgLeAnt8vdK8yssZc1d2huCzfXTTfLpfuzcVNjdEZ2ABxQ39HETfbhUA5t8",
  "key40": "zCr8eMjCh8xusBM5JJoPGkHrj1RHJQntmczpwu71ycnjZdZctHJJiiEnu4qGcAcbX9JPM2uKe7vcULs9M2Aznt3",
  "key41": "3V3Ud6tqfduzJXVTVzAVFf4eEhXyShdYrfv4hhuUFduXx8rTAvkzwCL2nyN3ruhgbxuLjoqaGWFAZKVspdFxkKZN",
  "key42": "LxCGxtLdDfzD6BZTA14wZDFU5YLCmJ8BdnYNZc9foyF8B3rGfygLEjcoQ7eK1G8Lo4t8gFANr1VSxnHrvqjvYhF",
  "key43": "XjLksv8w9kN5MeDQKTiXVV6pECP3gsCjCh1jaqroXVjTUmnDYqD7tdKRHpM61wnzWDLykoH9x6RpfQTHgUMkVb5",
  "key44": "5iquskqWkLk5D8c13A3b3qkQBiGfNHnexebnbNwDC7vxRaHjmPz1fHsqhPFVGmnrS6Hw9YEB6egzM9aPVRR7LT1u"
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
