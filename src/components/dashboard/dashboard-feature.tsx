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
    "5aKUj9E24bdrRM8if9AEaEhJKoc3gB8ydchC7Y8Y1v28hcwXzPgq1VZkQVx1FJFrwKs7CFWRPeEswWfTNK9tVx6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKgFk7F8ErFh6uPpgVMrUBDhRFwrqxrJFfndm6rckoBsL3c8mpc4fUq1Loq61BCs2WHSotiqicdLSjJHmEmvPx7",
  "key1": "3Q2jDLEufr1iF8MyeHTsiCxjjiThwSxXFrY44enqXZVHnPRTfs9aWBSaZA7kracsxwt7XZiUy8c1RaZAvFq85FNg",
  "key2": "63CMS8Ww8czf3P4pen3qoyy1UXHQXK37oso9XcCGQYLimDmWbmjZW7c2Z5QC3EQ2mr9L33oPGNQGgcn6dorkx3uw",
  "key3": "4wyoyugJGMjSY4rzFg2cVZvuY56UueFtn83z4PT8aeG6bJSbUPDGJqpGcxo5xNBRQmChhbkz5fPojSqqjdDBonda",
  "key4": "3H1GGZ33nUt67dQdabMQ1ZKSvwLBtRJbK8N2UahfjYdyKKaJTAQkMUNWjG1e2JwvnHWnN2cHFT7tYgrwH72aEwRC",
  "key5": "7Z4qTk8GBqLgoXRpatrQ8Ne84YB3c6UGTYKpDsZBZwhnCq7QdrCcTKQSjbmeHa2wwQpCwnvj74BmBDQT2EVZoV9",
  "key6": "4yaWkvcBtrFsbxffm2Np61hKsZZVWT5BEcNmY7qgR5kQE7CKw2wHzW2jXyy6zJpww6qhKq3PxxGWuXEdLRMvJEXR",
  "key7": "3SdRcRwj1uTZeQxuztU4MddWrYegmg5kNK5feLk9gQzQ9DkHBNinPW6RZPdvc5Mq1D851GwYWqjyhJLrj8wHHXid",
  "key8": "64ixyyWhbksxF5ophaQuG3Kipe4EbS65jr4LbXYWcDHYe28BL7AARtY8K7YHcahgJ3ReWidaYJTzSta6ffV1ztLK",
  "key9": "CCHrbfyh4zhcQSbV1eHX3MBgsTu3gsCcznmWDQtUE6M4vw98Np6QL2HSPe6PxR5hkr2SCtHqZR8fFoNt38ZwFBB",
  "key10": "2H6rG2FZPozfGJ3BGuoWDs5fmmS4hPdzyZaLoAdxNDBHE9iNDu16ttq92TvBay7QEBjiw9ENcYupscv63aAxwAeh",
  "key11": "nHSfWGE1u7F5PmapnRGqTdano89R2jUp4TMFRmrYAeZDyaHgL2gsPbEEVxzUNQKHgxLsRpkM5JyxdhZVqBMdWvB",
  "key12": "NtbikAK3V6MEjzVeorFsHjEZJYnQCnHnHakGNkrczmJznrE14VRo8wogVqm39HbNDR38mYkrpEbKbFdRyD6NLu7",
  "key13": "2b69DeJfiFK9Vvue3SSZRH3RcchpUB9nwg9pTPfzP8Ht7KFtUa1K2VgvpUF15e367CDemnz38qcrtbFQCy5K48XG",
  "key14": "5mXuiWUV12FL5rMevPaLC2vYkwAjXyK4Uc7WHjmjNLJxXfFDni3SiNUwmJ34YFJkRs2uKeuMXwFufUfu9A58rmsS",
  "key15": "4rfsowkd4VWhZ6qsWrJbURvkDuT6nPP4eavjNgCarAW5Hb6MqNPXgCw6UnA7H9wNdFJ6k1c4WxNoT7ekcECFFKjU",
  "key16": "T8YpXboj68v3fFqcRh52SL3z1Jp7MicXJa9HT7AXjUxBm12A8PWfYLk3JBRYWHJWksuVcTJdYdtjZWiP7CyFc7q",
  "key17": "2Eo1W9VGjkThipQh9N4P9vFLfZgvEMDurpdzFfKCz7kbxBt2grRXwVbbvKj7pFFdJzgVqVu9woMNLeyFr7JqDWbH",
  "key18": "2DbSgvk3tAjJuPL1ubqy12enwMuZP5c8M1oRhuiAeeaXNvhykVjvbSzArbwbcTsrqV2nDjgHYHmyLET14SLoRCZ4",
  "key19": "62Vx34kdf1NUT35pZDzULHtbvn4vWf5JqgR8o7qUfbg1oLmFgrZFyqNaFVXKP12iowVTpbn5J1n8vVxam7hZPftx",
  "key20": "2Pw9dZ5tsDwBybr652vZkxJowDFLa44CXEDkYPM47dCjf1edGZcU1on8FckmWqZKeQXMDquhPqw9G6wBhGDmxczR",
  "key21": "3tWdjYTn2AKyF3zc2mu7iW7H3aMkowxuHvmNwEgiYjgnbYojN5eXVyTdrRuDRN7KhXJSw58TLpAoHch1tTPhDmYG",
  "key22": "Yb5uSuHXzwsYm6JHgynDyvdaSYtoqxNS97YUC2VpxBZ9PVC2poZBah6PhzkEg2RsYc9D71uQTEiGswKXNTas7kc",
  "key23": "43CxW3oEaLMkNMkzuCSuNVmedwxGw3jL464ZZzzFJGtFMt8A4pjbVY95ZXGj6xCTbF3PFuKXXx2vYSKDwJGgW4xg",
  "key24": "4iK4fF1JVcmWRkEt12PTQ91upDuMsWkFNiQevigMuBDp2JxxZ3Rfb4G4JtetA7oUAupwB5VQa9qGxoy4efaYr2h7",
  "key25": "3uyTSL8tixp6oB64gwQPf98tTsdoF4A6xfcXyWfWNgKt5mBNx9zvhEx6UkPjxvSgd12A4xRakaEkZdSRkru1xDJo",
  "key26": "4k5FN6GM92G4S5BrGMsf6p6Ao4RjEwy8PgkbTRSrnM1KMHKkG3ryvMjYkocGwKbboNL6My2J8nvaFiuF8iSx9d6g"
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
