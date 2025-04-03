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
    "4iFE3WCQyCgQ7bMehdi61NV3pZrMqzAPUD8qzaqaF9pxvSJxq6P2beMVZnfP6bXgT8CHRYMKPVd7yCAqt75wrujD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Co13FhLLB6pGnDbvqwE5e9fb1BWnksc7we7qsFAWi15dgqSe3UF4qheinpA8CiK3gDCuyjJcbW9S4TrSazKKGqN",
  "key1": "2LvdnhsVCpt1ahUa1JxYqrKhf71cqgA2hQRNdYnfHsS3hSVTar8ETuCjdfuBd21RoDWHwtpDtftiaSq46mX2xDjV",
  "key2": "25FnM9PrmXddR5uhext6HUuTUyVAXDpAVzWq15QStv7RLRLrAJr7B7miT7spnRgtFXiJbGKp7vh6C3fJnPsKjM9A",
  "key3": "4sVWuX476GhAEjmhKYK6i17SbPMLK9kkm1YYFp2P1jcTY2oZA6fmDNN5tN7r24LPDaJE4BYo4y3QgHrmqTp11eaw",
  "key4": "4p7FDNsBumGrMe8U3ERyME77Qh8Utq6M81qLu5LvFsLVuEiKzaXCvtJX5RFw3uPnv4cYdShQeydibD5fk2A1UAWr",
  "key5": "43YVsepz9Hcp1NX3GxEcQkUAowNEziv9NTUdmPGkWZrTrtQZtfae4LHnjLgPYZgZyj2sYbggsDw7qn6nUi3QFg4z",
  "key6": "5uADT4PweV1NBc4YYBCWdxYmt4FywXLM39EZuN62TPkoxDeTMHktExr3mW1u3P9eZx62tmfoBkR9ehsYcoqxL76a",
  "key7": "4qimkRNoBGDNyVmVckAUvh9Cyp8JHBFvdWu3abjWV2pW9JKRnaNxki8mzRW8V61QTKgzq6rqSNSmVf9jfNXMBNN7",
  "key8": "4wqLhL7aLuFufRkd2HXs1Mns6gJTKKLyhuYYkV2HTy9GT2kGb8ETYrq4B1bqe2LXWSLbc2wrzLhDndA4Np4F8uCf",
  "key9": "5pNjPjMP2XShCBNHdFNr3iVDHd71BtnSnc7vbaYEjZHEZDBZvcXTTY4fEkSujUjurcXoBTPmZi37eg6sL2bcvn7a",
  "key10": "fHVgrdgd6dhQhy4DsdUTHE26H6Ew2kzYJhWxgYaGKzVqaeu1eJCVdXeikq7BqdReZc92Z7pAb1DYyLGfJxnVBat",
  "key11": "y1ExWMgKiZHZMmTMBYK3BUzZy5pGxvEazzMLYtPfsVACYBMXuaXGHrcCp7oNJxeAZLeJBKXw3ALrfwjdZc6zF9G",
  "key12": "4DNvuXfbiP2xH7bPRTvyEAbTwSBxTYfHUWdqgrSTUGKVbrJRGBLtyBCkWVokfGpdEFXKwCJghjBPGrPvSgSZmBms",
  "key13": "5H3hHMWTBrR7oujLmm7bGLEWdvJPi3J1MMBo7tikTSZd6fhtfLiQyL2GKj4fhRVwf95cB9A1mw6wAempZCp1DvUH",
  "key14": "5onMnLNV5LNfGdTSoR98guPBLuiUMBVNU9DFyrmfXV3PJ4VHp39wjYSw7PZkc2DPXn9TyNgYoecHJpbnvqcgvud7",
  "key15": "HUFEJMUf3AJ1Zw68mw9ZsSEP6tYAk3DZpQb7wostqP3ZUw9rHgKjA3FAqfHkpzvcF1nHNBX25Xg3dLkLEx3WQ5q",
  "key16": "3murLMcg2zWj9F9ZMWCXZmykc9QzUfWYabA5y8QH9n2qRSWr3s2aixEs4AZXLa69C7YDH3zYTuxqkpgFLSnvKr5C",
  "key17": "wXaF4oeRVwSbrsQMU4evFnFU7qQ8jGrEzaSV5AihxuX7UxZ1yahSnxcNjdcT5eYy5E7r4vfgpwMnzZPabU7vH3a",
  "key18": "5893M5cfDCsf9hp4V2hdwbn4CtAHsMu4XdMXnPAbyRbpwam7xk8FHsvedsJ67FcePZrkXmzs1qQ2AG9UVaLuwFTd",
  "key19": "475m8wG1oo1pRxCDxpYcEfR51UT16eYVzfUwZuoW2jz4FrWGwoMtVNLNBkgGGJa3Qw7YgDaB2yskpEUUB2sGRDBf",
  "key20": "4hpvanCi42kwjg23kkYxB8CTj4hx4KxJhzsEd7r5P2arN8RqPmoogSgvrvBGA4hw5d4jYmVZccJh8RvDpMPsLcbC",
  "key21": "5YEx14YeTfdCktjwWuPKxaQRQ3giupEQahEbqac39hS5Jv223PHswhmSqnD7pVTtKKFbYApsaXCJTA9V6jseoLoN",
  "key22": "2raykyL3siYE6pENoQKnQegEV9LSAcfkzNNR8xQa8G3k7PXGvbFcrrozdVrnyBM8fyxcPRVbSThAHnrXswoSDwnL",
  "key23": "4gs5PXpNRV4uxGTwxe1Y65NPhkQ6g1GZPJ6fZsvL8W7W7iNK456skFMwV2ByywN4jJkvEXDa3XPqoLEFBPKrbR6V",
  "key24": "2ZzCuKiN9BjJzXvXXHbqtTah9qazuUfsMFehcxTxsfUx63H6d6DnPa7WuVA8GhHLh6295VXk37v25De1APXE8qk5"
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
