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
    "5oJy9nwsy4xuUpJKMqsLQ6tvLKGA9CDokqrhr7JNGVDPKZ9994iRvpxmUgeoUtWMAFtBky6JqBMKe5MC5N3fXdJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1tF3wmccm55GzMM7MyvbSbeFRWXS5TCYQ5UiKmjCvS1qW6inRDDCMukVJA4wLB5aJcPhsbVMKXXyTyAKLkfDzT",
  "key1": "3E3CAdkByi9SFGhjMT5saejrxo2S9A59QcYzhJmFae786uK5FebvpV8K2UzcKLawz2GxV1F1tB1edmfGQA2cArKv",
  "key2": "3jAErBhP8yEtKNaV3sdzxqjBKLz4eMCMF2oWfrxVCqjhARYoBgK6KfYFogjdNTEs1otkKjbwLmGuQLPeXqeEcD5d",
  "key3": "3cE7Cy6Yb9LGBy6QFkXmMA52ApByttos7VTzciNATh41wjxEvPe7RbUWrR7DAVe425RvhsVzBcCLhxswAPTfRaKJ",
  "key4": "5DPRDT6JD2dqoygLoGEQ9aXADLCozrMj6rP13GkUXUcZBGry24LvG55DKEFL29v3ZXjmmTqDsiVXkVajqHX2JHAG",
  "key5": "4VURKHXGmUUweyXS98bw5JqVx2TK7tC3W3bANd6EgpEPfjhETFgNg2MTboQth5WWfHoE9sxWrjPPfLrdszkrGmBW",
  "key6": "3bJCH6EfkMxuDcSFEPJaiMhVr8h8vxaxCMLgFkxVTNUmY1ADEQiSUmrCEbYfoCMYsgNM596goXs6ZopUZZFvR31C",
  "key7": "2pygJAdYGFbPaWun1vqxTio7KcFdf4vVjAZJ9noFf3awZxxt5BWJ24Qr2P75TpkRaieFWpnvRyh9V2FkRdBbxYj",
  "key8": "5trBksonnfpzYL3LimNPPmB7pSj38mU4vBfkRrZtXQEXLU64ciybFzbAutJCQADjcSf2xSv444w2ednhDChbSFhx",
  "key9": "itkXkHHbdvCmQaNA6WMSiJQTadTCiateEvPMcyfoohPyj1hGt7wNoZkuE9cn4eyZfK7HMauQYrJLgBFKSvckPN5",
  "key10": "3xVyBdtjrL52ExA4L2rxyE8sggcen4B9eYyzsY3J4A3CZ4guf3sAE18sHQXbXcSQJDjVy8ys2TwXtDfnEmsWN4WK",
  "key11": "w8y198gGSMR5AEtbW4X8PSBxNkWm1EedMPZmTfZFKz5Y3uamAVNXAQSK1HU89vrJyzbP1wJgKpaDnGS7XDmCbme",
  "key12": "3KUiCx1ovfvhkWTFytPbMNciYtb86r63GVfBtQQyX1uNHiNuJ699VMcStZvPqt6gn51ihbWPUwMEnxwYeAMwjwHj",
  "key13": "4ULzrXjLigCchpqf3bZtptvon5STL2FiKjjDpKgznWGhZTsWGa93C3ZxcJF9wE1Hr5gyauBkiij58HEsGxfwMSiJ",
  "key14": "3SeoWyBtW7qCoHuKoQ56uc5ZwLafbNqCPGZ4BnuLpTZQBVkw9aqrtv4WBfNM33GtMP5JTp7oyBpL9DCQErEzNGBy",
  "key15": "3YMCxJRoAYNZisbuUC7pVNnJ45HdqeTzkJ51BetaQT7DdTbaZETGErbYxtRh7t4zZe6AKMdCre11XwtfU18fSdBd",
  "key16": "3YUk5WqQHdwa78bTnVog4ZMyHs2nkzNNKPVLvL2kRMsH8knqvYSm7zrSKY5X6wt3n8gC8yKqowdF9soNjsVGFVZP",
  "key17": "5ee5KZ4kMkHY4i2Jf3wU87KRBUJa2iQWvx4wZi4TvB3x28Yptc69mRwsGdmkpgWe8Nw2foVZBHFFbGTiSXMfSjgC",
  "key18": "5cMcazBRkH7sbCRGwfD84ECTCtcF5kZKeEQ9JEmtmsEPrS9bikE9GDnaAekD9QPVr5Zh4VSCDx5C6N3bqoCXJ3v8",
  "key19": "3Z8RGeshqka2EZTRFFa6qP5AF1NyFfaRrWC6U7Mxam3rN2s2f3iQtA1a6iwMUvy3TJgwhGcJSy2q3uJ8AnHmUFCj",
  "key20": "2HtHmEk2uFM2hgCunH5pcnhQFQy4yaGCQ2A22z8NHQgSq8YShCHTrNyLfwYa6Maivat9jvaBDiYNCLcnshKf67Ze",
  "key21": "4kXcM6BzLShukfZqisYc4W1C7iYTmaDntYSC3sVkVqpi3W24nAgtvvbCToBLvN9Dopw9v2QVXpsv1MhENtGNYgsd",
  "key22": "2V1qEbACKLd2BHscjun3uPUb9QjrZKWxNq3p8UuyRsUhyc24pqPG1VoDsVHdKCddrjP8nv4cE4NmnJaLUQQyWeDm",
  "key23": "3UQUTkNVbEZLR9omRDDmaceeHuHbvQ9houWLr7LuLvJhXJh819ofiXbX2GfbaKWURYwAf7Vstc1fN75Uzu5c62AP",
  "key24": "5HArn19UE17qVtwMvHgN1C4MAacDUQncJqhLGtxjJ6ow21V7tk28jfjMtymTpeoPojSnArMosrZL6UG4saREr4GN",
  "key25": "ewFcPrAHrYqUTm4jikJJZzbLDJxFcsxTEhTQry4aH23YpYwgUw3N9m7GjZSMHF5EUrr1NxiWirmaDgcqTufuaZi",
  "key26": "3aHKbK8XKYKiYVuTekhnDkAGYNF2gNqRJLUa8N81137wZwXG1WwEfbqD48fD2Ba5z4hdgJFho12bsphgdWGdtxoS"
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
