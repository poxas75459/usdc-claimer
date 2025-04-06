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
    "xtFCShJE4BwsJA18MehJ7bsQdMT9BNtiAmSm1UXa6LGiKd41ApBSHKvrEE1DGUUkgLbQUKupu5AbnxX3TmZ7HQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7dQgCFwyJPg6GJ5ACmFQf4gdaDvh1P47tsnkvq58CTXU5PL6HfuaijDe3i5KBZNqfw7tFVHgXEvxELo5dWuuQJH",
  "key1": "2g1v6f7qayKa13WfACL741SnFRb9bJkCQ175kwS81D8SGtJaPhA6tmyzk9ePRFjByCvEv7Q9bZjeNrCh6td1QMhz",
  "key2": "Y6Jot8PvVdtmryQywTNaErQd865QGhzyEixpYifLUCmagi87CzDSVEfykttbyX4enigLq6gHafQBvU4EekWQDaC",
  "key3": "y6PfeNiXDgJif63GrgmMK8M8KHKaL6u9pFerASiGbbkejsVtqAaqhgo3QVDv7TEYK4B7ArTfsyekfDhvqseqyTU",
  "key4": "5nzFvCjLWybBvuUNVxt6FMaifMyxP5moBYDRfP3xKtb3XyUAy3YJ6CvL7sesQfM6Lodf7bnaE66pmmDWLVPkNyyT",
  "key5": "HokUhoJoK1ojmSU3FNHVYPgCgnAQk8B4B1NCq5B5QDvfjSkq3U5oKg4EE8SDnQFM2YuCyMe9PncEXC5Un82VzJV",
  "key6": "5zaA6DHhSsY8kSTY82zZy1XKXNcc7ETpci7tMF7VuAhAofr9HqhkY6jdTnMpcN5F9vHyX3pb1ha9HvohhUg1TJov",
  "key7": "2ASXi9UiEnywJJjwncNwWxgYUWc2uwiNaXuHBCmLvT8sotV4d6csLz5mn53YLB6yy4WNuaSEvo5c7Wc8rWfK5wmc",
  "key8": "DvBGyTRG3nvKjHEjVcKcYxnFq63sg3WER7t2zUaDybQo16NFSsmWCanPn5JBaS4y2WBLJ67TkZ8EJfXf5SY9ZgD",
  "key9": "3w2scQVQqXprzrsr3GVQnFErDYj6KHW5BgBcrYBSgiQFCnRZTD5y8EwwbWq4FTSJo7ZiDA1XzM6UBL7AybtoBG1q",
  "key10": "2y2wZbHstgYsK5NJznLpNbMmXLrWzH7S3gBPKTrcyGEHrYfqmtEsp6aaVxsziPGSqQFgiiCRnTMvkoPufRq5HS9N",
  "key11": "3MHf4RVMEh9yMYnRWvVK5N2MDjtyyH3rWNXQRHKKTA1hw4FKHbbqf2c25wzSchc2BxWmF2Uv1dEBrQ354FrZBay3",
  "key12": "4eiCMHTB2DcZZQoForiWR3iJFnfGz7inEnV5yrRzDTRi5XumrNFnirtzqim8pDscDCjabt5NFLwTNdZCTBc5QFwY",
  "key13": "2inNWGEgKK65rsE3XsWwcXzCGhe2oHJAm6P6UmeQj48AKPTPHgvFge75YNwf63W73mUJ6r6tXsRTJRNNa5NQGrUK",
  "key14": "44GADYDJg7ioRCsTnw94yLXyysPWJ41ucgQWexPWX28Lj5C4YDiPXDKX4WAZF9FvwhrGhWj6jXndPJBLfYDJhCyb",
  "key15": "38FfHeTY7XvWm1t1hCTeVts89j3yrjp74dLDGHzogBoYBS1k24QCk99p5d6qKF7WiYXsAhpEpSFD28q1wrfdoiTh",
  "key16": "2KLYtruMHr9r7vD27i81csyq97NRtHvWY5paTqsyysEMnrNNuG4g41nfcmPPyz8co1Q8jNLg2d1HxeHUYy3845UC",
  "key17": "2rgc7gSQnJrRrYMUUHYc7NEfB3ZgH141hps4H5vbdofGrj3RxsUuyE5SN7AxYyRrYUAXM7vRwdYzEuatKmAGwHrz",
  "key18": "2HwjHKqVkYVYYwAz5ERKLnEvtoxdZDjprJCRws1RVDt6b2XJegH6t5K7T5PkyPYc3WcbMUvvM3qLrb3ADw2FmuN5",
  "key19": "2b6ZzEFcgcoVY1B8GVXTehGobmbRCVUv2Wx9UDu3nhwFXhBcK4kc8bHVGHPSqug1FmcG5BQBsBo3aDJBSju3LtU6",
  "key20": "1pofjfXpd42bDUUBY1LYQ22rmN7Peec1XpZUHYKCZLFkdybm4j761vz4GzWogKAko4w5tjoxZ54faedGpT1PLS6",
  "key21": "2nKD65pEoD4Rzxgu9TTMhS8E3i39P93StQTxjnENdsUnGDqCnPofLQVpHAHyCtPoYNrhVwGm6vLEGn6PgVyADya1",
  "key22": "1SgSgjLHsZYzGABvyGCsZDkbXuwkVwzPtsijzTT1nfAC9ovjaFt9ummZcvT3rxWxPsiFbAAx8479JPbUvo5PMr4",
  "key23": "2oS9fm9djxUvkvSZA9TasZetnueXVfQMQATUXeQMXz96ydSKqfxt7s1T1Et82zoF6ZzuqhKQVVcgjRadkxb74Ev3",
  "key24": "5RYfJyTj7AAnmrim6vGsw8V2aR948hGJks4u7vvcr9gXuQ9w4GrBwEiEEivKUecGH7SEFNSFDerjfe1RLWmnXFWC",
  "key25": "4jpLKUc3J8pz3D7kpeXCy4Nrm7tsp6Sj3ew5EptHUJZ44nXn8GSE3z25a4HDpQL8hroU1pK1QE1kgMuRL9QRLzsJ",
  "key26": "3y8g2Mj4ph8x46jz4mjVsL4B7vvgVTzQvkxr4MLRrGTAwm6ABHcZ2QN1bxwaTau1K2jhW2CKKH6UhSLoP2tawWQL",
  "key27": "5S2SyGNZHsDYsMtNXQTfnRBJh1gi9j7o6sp5SoyeDVKoyJ7c65U6Nmcer96U6szyvXsBLtxtoe3Rz2MGkUfxqCf3",
  "key28": "5mLNYFqNQPVZ81FrW1HYgcN3efW5WHgn1AnBfB6MtFfKqmDSHbuZp4FjChLgA1bYArqtZ4vRsVAzYhmpZCyrSaLa",
  "key29": "5Q9nDsrpArTfzrr9DDTJfVkwjEboAp8ybfrXx7Y8LQ1umnB3aD2D1xHpmEr1eTZxFCxq2cmiJEcGaFAtJ3oKYPyk",
  "key30": "3QhPET8p5vLadAwxCFFypaLvKkUHLjWXm7y16ujgxN1UkHpEaW5oakAi11MxW3LUB7daPGGzzt5WE1FAiJccNMTu",
  "key31": "3o6TcmkeiNCnuKLUaVRBLZzeiNf1xpBWAFFQVTkU2kUmGUqcwDYn3Ct1ZcE5UUgHxSDBpqsWMrTTgpGhwte7EL1W",
  "key32": "4FKKe7wGzWXtE6SrSF5Yk36yVMEQ9GgCCNtM1wpKysXFoYCTwBG3Vwtv9b8jfn3NSGr7PtCumCdgft8aV6CCTiBX",
  "key33": "3y63AHEiGYVwz3uEsnQA6Wg3gJtkA1rrym2eQSXi1muvuW36TCk3HVWLDaByJb7ZBx1j4eqAJyCZxNoVWqSZGnDG",
  "key34": "61sDk8qxFVPxThn3LQHsgPnAAvZJSA8fdJYyLmae8y41ntvBDrXkEh9nWMWhhWsbQFkFmSNYXz6EyAuRaQcHXvQE",
  "key35": "518HLTDgbVkVqatC4HFq1LFR79Vn1WzAbvzmLep9pXmGTAX8JyRmRQHdpebj82m767VKZmuvp6jEniH8dvamCVwd",
  "key36": "4gpjBp7cGiJ7ASJXiAwD7nTxiJVHyj7zmTrcmSYBZXWHUVk8awVELKmVoZnT9UP7LPE7HDAWKgCEc1e2ys21i1GN",
  "key37": "2B4W2JsTmNaDQDBUDQg4x1TyTRQvSx8mdgHChiq3JdMgiANuBQPsWQ5iJzVVF4UqgBfdf6QYYA4RBxLb79uMenmW",
  "key38": "2maWJ5UTWJJcnJdQmTKX8Hsm6Gqi9KxFnw7wyZVCs78UJwrH98Jsduqm4PhMAA2ts9cbm1coJsTChLTZKJCG4GTd",
  "key39": "3A7Zkkq9QJmvwrVFfsgMWTQ75HECEKq2Q1Yq2qjDqBDs5KtE3NcdsiqJf8W6xgQmj1mC2E5d93MxxwrcBRuvAuD2",
  "key40": "9CCBq1SXiAjmzxDJrxf28RT96LevkJTJhzWdttosp4uPhPwdL4QA5N9m8CSqTDM2xRddveRNzEQvgGwMnQnvRHE",
  "key41": "2UdSjD6Vo2UFma2VT1dPQrndN9rV4vUuLyghgNxsXSKd84fs9i3TNbweKxnD5VUJvw7JnyUNiFo4w6hUshqtZxTV",
  "key42": "4KfThputnQimYUqW6dibwSuWewGt6vUa6E7Jk7BxAccQaV27oRt1ZRDSXpiFuKvcCkGVTLxg6SXSHuXLKbidfaNE",
  "key43": "3TWf48DHfUr7UGVzzoVKuWR9VijpfBPAXrA8zWJtL5Fb5K7BhVwcqxVUSs3xMSSmKXPwGHqZuTDgLDAdrHqhwk8e",
  "key44": "48cLZuiKvYqBcv5dWtKNjPYLW4xTwjwajBjYC56cG7cJ9iG1EsNUuoXPJtHArp71YPu1CzgerLMTYtY8tUi4ayYC",
  "key45": "TFqADJmnp283Te6D7MqKaogUUarUgBLNsgZ3H4GUdhaj5WHCsfiFiiCjGMeH8tU38fFTWJyrsZtVyaF4qXRDXPV",
  "key46": "2m3ZRobcSsWWF4XbzLFXQbWrZ6DTTnUj18HkyoFHWLG3shvHWNWVJVTbbqPmHxuepmjMrM3ygYULrwFF4zZQPH9z"
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
