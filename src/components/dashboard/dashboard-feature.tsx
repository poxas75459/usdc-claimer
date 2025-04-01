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
    "5zfthjSzw8KchkA3P3Z1bXJPfNpPt5y2yK8RL6aGZrfpZM8jv6wKgHCe1pDbZHMQHefY6bmqLhAexJXkHCrVemQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z5sHHFENJ2UK3Xq3LqJ1Nz5U8eJZYMoeuX793uA1b3ukfuvUDKm5M748rrVLSn88hfB75RGPQ7R197YzLTB3tJq",
  "key1": "4G1VUs6Uh4HLCpHKhjWi36shMC197r9XArD7pSARt1dnX4sNgCbLGTY23RqsNjg8QDqHvbSaX2g5v4BraXpkcbFi",
  "key2": "4xHms6rsxfazCVV9XBqdAAFUZes6w9itLXTYMcycmpBL3FWEvhqtqjhJse5c4kMsG5AVPJoMUHRpBhFM1xdxwCp7",
  "key3": "EeCL1uHZw95V5vjkiXgr4rvcxmwAPcMXtRbuLBjbKxiWP6ersoL9hmLRMpQMdXu7t8BjZttyfY9Bb2PBDqcWUKb",
  "key4": "2apW4s4eFVNU3D8JwsCwacqasPo5LVd7V4MTniGRtQ72LzZkhzGpz1m8jyNMJzo7b4DxPcQTNwbbx4CgJmsUsh5r",
  "key5": "5sAZBvD846R6CUEQXdeuakr9tnMZPiYDsUPRAbB3aLkF2ShGtJ8VfkLjf4WJ1vPCuh7z8AdMwn934F6oz5b8be8A",
  "key6": "4vHmWEZszToYiuu4drrxH5CnZdXPMy187yFwoywEFTn1yVTmseP2zvTRRHaG6ZNXFTRwipLzgPXZDMtpMR7iQTfW",
  "key7": "5zkLgVzM3sohVTHbX6hWmK67zvZLz4U5Zis1jUUsSNJYUv83MaHb3ShsRiN7ejFjRQohNLsQWoNNSpsZB3nRRB14",
  "key8": "58M9EZxWcuwR2YPVm5xij74iaGqixAkyg9Ht1hETHqfs9DaseRrVCGbJBqZkaZ2MA2qhG7CpEAa5mSFFT4Py1S8T",
  "key9": "4o8w4vzNfjitWsX3fPsvMW8bvBSxnfJHxxzat6LXEC9umd1SC3pvVi4oKMxVBVNpt2ErLtT6unKmuTRN9ZMK9z2b",
  "key10": "2NaxTju6ZgAnPPYkcmmbVv5yCAWmAVzXyw6Z8emxJsSq46DGcQFav7a4bPvWHzoJLBfu8Dqem55oF8BqqD7JJ4ZB",
  "key11": "4MhocHMJkQwoARtfGyDyhYR4oNPLbvsgqPaox5SdZFWx3WDLe5W1w9PqVitKQ424VWKGTZjyGfN4ndao7CpyYYU3",
  "key12": "Ktm3wLRxzLAco6BsPKVkivhTnXWsuYsiUYqeVQRpcJWpCrFw9XcEE28hrPZ1ZCXsqWMQ4vjWSf2Rpgx1VDGnS1i",
  "key13": "4ViCKFyu6NSEpB1CaBB7bhshtNEXCgkv25z2X76ZPn41cmnZFoyubMtSzdGnf7Jg74rB5ALexn9aKCrNitKR6Sqz",
  "key14": "DWwu163A5mSbDZREwj5b8LhZhEp7CgcK2F4e91JAvd7er7wUWsQzxX9V9g7fpNDCJr42cd2JUScLn4uq1FKURBb",
  "key15": "2RUf1GFHcQd6NoDWsLktv8MaW4t1CRvYEThm2vnYE6Vmg1rf1Gc8YjdwJh6ixk8rHntSZF1G6o8ghpcjgXj7uDPN",
  "key16": "4ETn8kuWUKLGSQejtk4ZVhmFHRas9ur63Y6Nsdz7mcdb1r5V9ZCu626GNobXk4K9uya6UxHqTKNJtuCDfPhnTrw8",
  "key17": "dfwmBNyV5qckaag7B4eYzsLVFd261M5PaKefvaprqxQ97eXmGv8nNvHRqGC9GpG5fXmQVg6Ghiwb6bDnLR7yRdW",
  "key18": "4EeEtmtZLjEmiNm6yPkXVppdjN1JUZP82gRtVC2v9NLMyftiJr73J3PRiYRfvqVMkiAYvWfJh43suUkfM7SQGwyk",
  "key19": "4mAs9XTYXm2EpZSgiFH2K7LpjxXzrMEsWdvALELsqz8tg5PnujjCPGebEbR1TpSwnXsfybHzpDTBxH5roPFDPKUB",
  "key20": "267gfgAYvnoqwjbPEY1MDPbH1iEFCqHP3ZrX41voALafqdPRTucTjrE48WZe1peFsaeb5fqJisFEoxjictBaESfH",
  "key21": "arqnNfRk5kw1aue1fzarK3xvtAFCio5Q69PXrB4zZjrLn8A7pSq5wCdULaJaGPXfvYsNiErrkTcfERDSq7vvL5A",
  "key22": "2geMjYPJ68kKT7qEV8gQRBqfBSTNnXpoWfBiVU7ApfPGM4z7eK3M6BbqzbsaUpndU5S3omqxiF3VxUMgDSec4Xw9",
  "key23": "3zoyqAKSb3AhmXT23TjKe8ExJ36ucV439aGFFi3yJp6vj6u2dZ922Q8PaGSQmo3sAxgp5CW12DS7mmGpB8YcywD1",
  "key24": "46HC4p2pf5RgFGbsALkPjbakz9sFMJ9XjYKPXMQ3usGw5sF58zw6Gn4Srd2k9EA9pZUDCWRZPRSioj4dcCxWnuRy",
  "key25": "3z5webRXAZ7YzazLkLSzBUa7S6sqXs3iUaQQb96QPWt1M2jXScoMXdibNAqVSABviz4c7B49j7sN6YXA4pRWJd8j",
  "key26": "jgrN7oVvfLHL7eveCvjbXjgAYxqJThsvRTScMYUjd5cB5Csoa7RxyRoEqpe1A9NqGJMYkju9JWjNUG3U2ghFD7h",
  "key27": "2Wo7UvvruPpEBPMC5a5N31917E5ZdbZKiAuU1KCjR2vU1gNL7XxSRwhevwejjWakQM7rdwUg3m3MMJ3JMV6i4Xu9",
  "key28": "53xZGWAFkqvJCShQrSw75Zvotc6WdzMWE8L2YhGCmyDzChYAp6KpNiPVvUtsS286x7UB7mofTmSAmF5Mffkg7n6z",
  "key29": "34Y2pojTkXfi3bFrXnqoy3c2CUgDtyYY74feHzMiVLBKbtbQrHiBx6q3kb7qbtgwLvfiCmi3EZE9TAFhjRScUoFx",
  "key30": "2sKy2bYiAcw8oBPcjPrzB7ANCNsVEEeXah4ZSMHxfTwjZtc3bmvnwyn1z33U4GeotNNBiaXSbd4WWQjaFjuJtweB",
  "key31": "3pa55PQ66fBomMtxPoyxyQWGxJSsScUghee9pqdRqHJCnYptzn9EUpsT2V5TnooRaYTa9s4w5ytssdYRoxvfkuGa",
  "key32": "gwgoK6aY85dY2qPjgo41JQhhpqHbfhFBjC17hzCAbd6vA5X4yErGtSi7yfG7UfVgTQbM1hDuM83aXdVvK4Vx5XP",
  "key33": "4XbLyPuQVg3SpcheUrMVEnzikD5PDbYmiX8DMwZnZzjFyHWdtz3fmBU5QnAT9PaYCyAAgE6VbopNxBRzkr7rfd7U",
  "key34": "4SXistZekavEJSVfokKxmb299zd2K8BKQ2Cg3LwKDgTN7pHqA6XC4akPCM3waUprCp964J1Jh9RyY3oazMQ8hoMs",
  "key35": "4cTVbhiRR4G3GNyyDxEPDkKXRZgGpetrf3wSP68SwmnJZNKmg8C1MbYoQWi7XT6RRZjXbsPEgCoJSxj5Ljk9mLFs",
  "key36": "2iXdmmgbjJQznRf8ewNDF3uzUDjGkJ8D92HPEqfjYqY2wmoPS5spKpmNeS2C979xR99hUErxoiPqCcnkDKYMSBrg"
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
