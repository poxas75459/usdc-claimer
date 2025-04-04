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
    "3eCESTw62HyhKuxnMJ2nzL6S55GbjqdDmFVRmm14uHkS1LkZR9VCkogdEHnRD2sZ77Aji5PBzhg8zymet6DQ23GT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X56gizUpdS1wajoDRepKSEFGmdr9thuiMpBCA9braBwugMzrU1LVEZtRgTWcJaNGxePZjid1FPzWd6WcWots7Qs",
  "key1": "5dZz94427JoAJ85QvfdrF9KnAez1NAkwkyKkfoiQD51dehYZ6RSeRHN2HXYJvqbHjhcSnER5ZHop2JQdfSd4J9J5",
  "key2": "2BAuARKnRFCceWvsSiaYTHNguvAomyUDSXw1NLCGg1nioc2RFofF2rcemnR5qh8CWkb3V6bc9KLHauF7eNvthwBh",
  "key3": "5hp2bj1U7hyQWaAADu1c2v9y7G6zQ1Z9SKAufL2sJZg9bzfZefYcshNRZNdDChVwoUBGV4iy1tjtdczg1cS1Vo4i",
  "key4": "4bWNMVLse3V7HrJv6nGJvGR7cxLrrEzs6z4PJoZAxKZNJY6gSeJ8q84D9sj2BCLTbSXxZSUHokbrJw1zqVN8rzyg",
  "key5": "2CorPQF8a11NdCUa5ysFZyzg7UE5TnsBEZLM2oHrJeheKzZV23B4eTfiyhHGB8nv6bRPeBav5UwsiN7Bp3A4tUPT",
  "key6": "2NJvpUSsMwMcaRhBsWY5AKe66FAmEfnXVg98MHUXaZmXmo1GdtFEryiR2cq4Q1ZaXB92323xoVwb6fZ3x3C2r5ZX",
  "key7": "2FxEDD7nU6hEFiKtYdJGkyTgquw4BPfGC6AYUsTri2hWAKzKRohoh57jo5k8xUrLooF1EUbxnAD5S7c7wbRT3SHk",
  "key8": "3EMsDCz85Wjm8ztrX66sUN8XgPqVAK6zyPX5bdMdA54jNrxcSQ78HtWnFtZAYAZuCFynDL2SnWYNEJv3LXJ9ngbb",
  "key9": "TjP1oAY98B2NnQiiaGtxZW9Mga7QrD8GUsuCLxwXbMRjnUZMDGGyfJ2NSER6mpQ5mJ7XEPhgVb84PMo9HYdUfet",
  "key10": "5PLHDeMr67v1phGnrhjR87mhDjryu4f7hBRrE83xiSK68jZGuy6ib3K6P3DDG9GMcHjnNhLyhu8PsuAyVN9hR9ro",
  "key11": "5RgA1WLMwEoDG1Bstd2dcW6SFvYF7vrVHkAJ6sSDxeZvQ6hgzVRjRRNrMXjPmxLsDS684mhEcxZJk1CUNcHkYFVH",
  "key12": "53r63QxJqasp7LkM4eptgqX96Lda92Z9R2xdSpwUx3k7v4W85YdZnpuWBwXkRx5CvHyJuASiShbEwp7DhmJymG16",
  "key13": "4PU8fPbVe14iLmNS3YjVx48LSEwHq9ZvAxs9rPfg3W2uVYfXeMbCaFtfcYEJYQyotBrETsKCK544c9SJ1Qd36834",
  "key14": "3VszmtTxcKf79wL3jSnaYftJTUfx9oeuHG7pLcCQnAtXytMDjpU5e6vhyynq5Pu16nYkkKrT5wB5keFYq3g3hYh1",
  "key15": "9gPayzR6xx87DgjftZVSZgJd3oUXM1g27M1uqU6AH99nWXrCZFMFW2keWibZD9fUkeUjqxH1pNj1bfjApYXQLQR",
  "key16": "dcmRURyiusv83GECzvtG6Lvf8rZXuciZNwCpUuwVQQZLWBnvakUiX4fseyhQJYhFvQE3njQJ4UMoKmBodM3Rd3V",
  "key17": "2CbxMacghVusE1mgGDDXHawujndgH865n2YnzWWjF7tDFhKjeHXNSCnjpDYU2bUM34y4nmeSECVUz19u8yWLoKBL",
  "key18": "4VC7t2w6chV1F8nFrAfhw7kyYohBa6vSPyDS2CPWZ7ukFSZHj19gK1vGkY6NtjfRkKMCofM2BGBNAp5vaf5PJRF9",
  "key19": "5qYJk3A43zokr991thPgP7sARrSJeYW8UbzoLun5Lh65zou6BKP5oTHRzsd9mZds9jtAa8RdUaNKPpGFz5oYocn7",
  "key20": "3nVaD6Ln8M8R7QA38gUSckfNfLmLwnq8SRebkZ5HARN1cwyJD7swEEheAg4VD8j5mXcat3fQyW8TCrnAfMnKydoD",
  "key21": "2ZfB9m5idfeSkfmSaFk8yT2yRwecJbufjxLdAozBdN2pFAhwkjWTkScF2NfR9hDMDm2FfSv7B5DYVn5mnMgSCUZ",
  "key22": "2RMxoAimqH2YLFXxv5DSPAi77VAb8Gt4TR84EzjUfBXQdNt3fw88KTyDCRrdPFrKR5XW62BSZi5jncVUGeyBYKZR",
  "key23": "5cDQr9szRGzik4C5h4WejXqYcB16RTMSP85eiYoPpMN1neXyPodGZXMzaGgxaN48JhrTRZPk2yRzxft6rmWKqtaS",
  "key24": "Daav5Y1u9nrNKTej9Tfvw5xjRzEGWKjzBiENPazLtWeLyrBvnXCgg6A3uVDgYenZCf6eaJDv1ujAoH6eHpVodno",
  "key25": "3ZMRB1LJ2GQDv2kH65pNFTzsyPnPmHFnAtmyp9WMvjN4e8Hgd4L3TpezFrW33PsUgJor3ermWQJ1MHgrUVisNh3c",
  "key26": "4TvFMtiTg8X21s2ZkpFKSKLUTWBABHMRvowosayPTp23BHHZaFWsT3x6ZG8ffmWkYD7Yde6rFUQq9fH2voRhpom4",
  "key27": "1ZjQKU7BxHg6ypbm6pCavEZj6zmWFvp4aAK2jpUZcFvZ3eJCVXXC487xCHJeuHX9Ej5jcPA3TZw16twiJWmsaMe"
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
