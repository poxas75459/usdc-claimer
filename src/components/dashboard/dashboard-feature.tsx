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
    "kE3PWCeok55JXXs6zAXJEur6KZExyeGaKg4WvzywEVR1kPBk1B7X8VWeCbBRMT7Lh15vDYnGkXKkn1hwu3AVbHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zuHGJjpypZxbSWJbdwawBto9VcqjLVLXwYSUk7124quYsv8haoZ5VuSfZdai2QET1j86R1FxHTMsFBGwUFW2Kt4",
  "key1": "2ANwj1ngQqwLb5RF1rEQgZE1t165EQU219ZQidk7MPFFQejT7V2SauoUFk2asaFxT1v9swqzoMMV8ACMfAMeBXH5",
  "key2": "5ygpQqgQrVCd9AbbyNaLXNLrcCtokVrqjsp4a5pLBCDNqe6VPVk4ZaW3V4Qf84twsTX6fWiGtD7jh5WPrfD2JUjT",
  "key3": "3BpNDpvsRAhzEfXZWKAZwp1dmhTqrE5bewtkdLXY6Sjd1NGybdEuJyyGHVDEtvkrRfAsz2W1mgaDa85PeGTYZZhZ",
  "key4": "2XeN3maYR1bmYurozyEp5Fuer4WFTzkgr5yPuUSrSdVf2CURN1ysPwg9RtZJdyEHE7vRdgGWRvbbcucp4iQQHf8s",
  "key5": "5LmzNb5BrRZPku9nXMbEofYFpbM3hvYkjrwJmBRpV6ig1xWQfFDy2A6okKZJSshMpjdW84L87KqA6x5R9zsaxqmL",
  "key6": "3vNuWiENrh8czN8YLfNkZ4BQXFjHEA9ACB3D2pXzZkaJcjRVZodNGZ372mN9gPu5MGvPrbHDx5kBmrXRm7wBDAdG",
  "key7": "5twhTZdKitRGAsvPMFjUYaeeHyNKM8M8S6VsXpxiWksQhpwmZFLXErg7mHFEDkiTBSFLnGN32DenNhfFxnQDvaQf",
  "key8": "66fFHfeebVXXWLo3VgxLYBYfPZWrrd7HfG9LGVSmXaTV7TFPDnm63oAsYszP6f5mes2Fc7F2MM4pgZT6Xf91zbnJ",
  "key9": "3WsgC8tr4fgYip6A5ChyCKYc75kGFoduT4N4xUXxfjccrDEQB1yT5bteXvbiXYBj8XxrJQJCo1uZ8bubx8m5aWgw",
  "key10": "sGNLKgkT62qdUKhu2bDjP7YRvPYWB8VMhZKAAA5QfsbvEV4gbo1BZAdvTYRcF1XdhH9sHbngppqZGzvNzapzSVc",
  "key11": "V1GyNwsJz1LLsz9UZWTU6VdevbpspJt7t54aVc1retszxrQy9ztu1hdsKQnXAnN9vZLLe7nCmjPv1jSzHebtXFX",
  "key12": "66HzSbds2VGXYRPXMiL8eW4pvpsTiJPsFA8X2cR2DCA7dsb6PSeVHL17CM3acQXikkJG5ysZtGPoByw1YhNBqDJH",
  "key13": "xoWdQZQj4M5pibi4UKtvyQDDQ3zyGZKmMcZpAnhvt4md9bxTe1JW7Nrp3cHTaqanG3pj4UNPz4Aqy86hkP5kBxE",
  "key14": "hyfw7qLuJEk44v2hTnL4EHtrAftwxrQUY4FE7SVgYNEdUaBF3v4juGXZPXpLfajCbu4frcRyQRx2CSjgNRBCnjH",
  "key15": "4wM7CjWNCTL5rWoeTjYRRLYVUnZFZxecQDCjyEY3yqMydPUxu4xiSqCDvfLEm4b6FrKDnFwSbKXGLfZLrEn6AuC8",
  "key16": "2RLPRRBF83C1pPokhLXvpFPUK57ucLFVEwJWgdsaAS7dXtobXKntjaAPdLjrPhrPkqkPNLZhJVMfZg3dVoqVzgUM",
  "key17": "3ZhwLWtN6MtBLW77hndzdVSn7nB51Degr7LmdZm4wgVgEhzGSu9p2LxYe6V2zcYysMSC9Lm3rQWuYeg9qxcJ5Xk8",
  "key18": "56ZKqtHZkhqZbbctBL5HFMaGXrbBVFmeFWoAbWCa1K99PAv9QF5U77JwBQuhyJpb796pnShsVuTnMBLCNXzWA2ss",
  "key19": "37BKM9JbYtnb7GPRo8MajFDkELq8Tffu3KJAL9uQULz1LtXkUA2vzEWpHBv392pgoAkY1Zjp2fjDRJwXkBW1VfRn",
  "key20": "4f5FK8LjAAn1xrbWhohqsqf72MacDmqVu57JxZePaKf49Zj6HRYxNW6dGqJaJ5R82GttZVcMoyhBJBuzgEm1nkWu",
  "key21": "LzWDfvSwtLNaBrQcprAiu6MXodYx1KQDLRBh8w2wxJGAsRa8CWD9AaCmYF6hUBqiY9iov7Pw9gGNQLfYqt14ZAb",
  "key22": "wwQ29UrdGtbqEoSNxddc19PwMf5goM1V57Cd6oS3j9KPRR7c1ehLUxMmkVES53T3Nb2jhz6Y6FVm3g6jb8wJhSG",
  "key23": "2shKXhwBDqnX8mPYKQDKP41Cd7SU14PkAEMLHN1K9Rdzok5zg44VFwA5yqZkcL9NyByKZnXkBmV2Er6V1DUYHixF",
  "key24": "2KmrmisDRcxoFNsPn6c7tXp3X8M7oihv7Fb1AHoR5F3Twr9iWKatKkiEhPQrryQTZNBcVs18BdRsSy4PfTdEEa5t",
  "key25": "4EfFgEC4cjFdr1v6HGnUTFXNEjdqvX4Mz3qAr1M8KhiRXZMtvwTiV1fG6xCE7MZxXecER41MR33GPW4VFfcMB1Qw",
  "key26": "2Nd9ra8oCSHJ4ySi9DZrqNzaZLYasb7RCHLbkUGSAXZEqCABvdUSSQfGjHosqYh2YnV3Brq5xYrmnQLnMcoud2AY",
  "key27": "4DXiCxsVSH8q5CApSkGdVXDhu6wi1UmwJNv7f5ohz9hHFLWbrECjVK9YGvrZyoNEzf6dFXtvJt3ofwTN9J75kWUV",
  "key28": "3X1RC9YjeDJLuPvLVxDCfUwV1qskiJvi38N4CwQgYFWPU1PbiaWoW6FEwAmNy6GTEXradzzeFBwndfwW2ZaxtdgB",
  "key29": "61nt8GwwRAGD7aVXSVPuedQPbsYparawPTdeR2hcJcd6QZNHvgG1Q9tkCVYGN9UXZPGSMatRu9G4o2TvxSDrDY8e",
  "key30": "2fuV4jknxZC9i4PxJYADRi8R4jrB2VcszBNDYqthftQcSCPrdpQf8DzkTcxSLmdjTR4WNNTSjcPMRYE1pPW3RCp7",
  "key31": "2jxthAKZwuw6wqaBjzaSipkR4habrJMue4wLvuEQtSQGq5tVBTyPwBCxkgHuiHdLV6WnYc2TKuCf3648hYtgcoB9",
  "key32": "358DdiEy5dyHJSiyTKD57knLxNcyAXj3K8ybmKVLaGjZZonnezBMUqPt1ifDGBoXTtqA357fEhYPh4TXqF9k8Drg",
  "key33": "2BdmKbxCCx636YqYzuriDQV6mmVwsodarXBzsCqnrwJbbReyW91NhVGHWxtafo5dcRLfstQ6DMpeivBBYG6axdNK",
  "key34": "3Qhe3CjTB711vgymjH5QbRoCbzLvS5SW1FMTNTp6G5P44AWNFpcqdxFGnNCy6tUrz5nE6omMXX1byFUHeDDymSsf",
  "key35": "3UU5eX6662CCTDMGvD6qe2NxBZZUDpvTiwNoRu8MZaQ8gQrUgpKFXGJQSfSHt7TerkVHQsgXPCjJwf9y6iQeKTMH"
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
