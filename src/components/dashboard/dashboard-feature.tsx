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
    "5DtoLNjQYrRXsCzeGsrCqM27fkX5EMwXcrnkqqp7H31yZPQFuF3mWfqsta3msCT4Qk2DiQQPWvT23jySH4SRbLen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61cyqvw4oyW8tJyDJdW4MZELt3FpkUeG1uTrm4AqgJUP7ouoBxcC5Kqyz7HJ9Dn8h96b6TJLAt6NsFYNuykdN2kE",
  "key1": "2bVysRi95QMuNV5T5HLi1Lngbuoma9MB4xgr7DGpppZBdx3sdYMYiZDbxUZT669VeCPYx54AQCjQ1GS2SH6oX8xC",
  "key2": "2Ds3691RjJEqi3oYCLRmaTuJiJHpc2AtHdcVaShmiWx3FRoUsdLJcDiY9K7ZdQNwoZjod7m5QF3EEZevduXEV4Wb",
  "key3": "2Y7L2aNRDc7bGzkHXqavoUYsPwHy8fmL6n13ZNdyScGVW7F2bxTLVA4ZgfTvZSKR6siQWHRD8ep6TLBQdX3Hn8s5",
  "key4": "ATcH3zpsM5nPFp2upm7Uzsi6V89QvChiPVqmC8whEN4gmq6Mmxq9v5A8igTFfifTHndW3etpPBJkzLzTZPre3bj",
  "key5": "2VeAwCVcN6SqMPTc7LseJBxLVVwdN228MP3kKYFt36WuRME9wGNJWEkFyxCZMpSnfj3DkjtuujirtBLkrSHYpXwj",
  "key6": "5JqQohszYgAmXds2Mwuu2gtQ2fHKHcU8as7prRzfTYa2JAbQDrMqRo6hfs8jDZoWMfkooUGtoVQb3Tebe3v3veNw",
  "key7": "VHUpxgwZCoEdGkTG4Fv1HBJrNTk7eNricQjmX8AyRUA8mM3JPh5JUgyV117kDZikizCBSMefd49Ks9kgXrKUUmB",
  "key8": "5y8JG892mvt1x8jQSyHtSgA1R9dZT8Tmtckcw3D7tEvUCidgMiKxoqRbkndju4NRPZNdi416xzykACk7oHkdfjVu",
  "key9": "dzyphX32XbcMPPLhmUv4vbKsbyRwsVg5Fjw738zJs7Vy6rJfzkgKV2ozDb7HesGssf8AZWPLPmvTRBpkFAQRjig",
  "key10": "3ahoM8qTTUDwoUh6rZyc9EY6MjC1ZEnDEeuLMzbaFMFLS1YTUJ5PiQSb6b7XEUMwovja9ogdGVAtWc3CdiUqH9PR",
  "key11": "3mMVjyJwH7SgN4YTTrrGpgfS7CDcnoKgjakYYkq5rJLzBa8T8wSJJn5aa6B2ihn2D35wF49MW3TFGh3MopKZR6Lz",
  "key12": "4JV5Ap3dZpZLSEiMTkQPhVnY6eJuKmYyBubCD9scJTYiVhTh3s8YGq6cFu8BmdBzEySQteGZY9SWPRnFozh64VAT",
  "key13": "2YzxC3EZRSzSnKKQq9yz2Vpu6bkj1ff5f5RWvRsKmgFQapddizY6wdzdf6Rfj3qiMwAQHYe9Mg5nLMUvduBzfrZ7",
  "key14": "4UCPbQmmEhQpLeZuVmDTXpzPeKytxxxKPohc6PNdRpxaTP6bmnw4GhCV18fecKRP4WvjdNYBUGP4ed12e8zGAQyy",
  "key15": "2aXvXv3W9uVX6Kw5mZcdgZCofixPbgpzGYgz9rPA75KVkruraVWxcwvY92edwBPDMe4APgJLTiQC97uQUUYsX2t9",
  "key16": "4vBfqSU8VmfPVeYmEdH1G6pPNMXQPZK1WhKnZywsRBNUpqYyaXcWq6eEH74fxCiYgJvzzRweMngDfjxqMjtYWX8x",
  "key17": "3d8i6RJFgi6HuLB59YVDwpvVRTyd6Mh9WiysibGhEJ2R5DqP8L32qdx3R7HjmZUeY846A4T6kFm9GZ9Wf45jCtJB",
  "key18": "5vbwWxdnzHhRDz3WkcaTdaauhg2VUxperTgtbSdsQd4BLR6Wcjx553Wa9jyev8QZ4nb2UeU5aeCw3pgsUy3jDwB3",
  "key19": "2Y44KvGNz6NHXAU4wksn6Wcehfx5r6qpSX3t524ME5hZBBFpwskDW9VmBRtfBmXvGfErnoYWLeyGVDSB5tf82grY",
  "key20": "3nr869UG5jkUz4bmb3aVWX7h9gxJ3Dc5nBcr6mMruXUcNngPZzNcLCqohdz9nxTJ5AfhJk9HmEq9PjVvBdk24xRL",
  "key21": "5aB3iUv6nj4dbrGMJnguERQrMBJRVU61RAm7APR6Va2BszkCkMnJSuLrFTY6AebC3uk8kS8R4jNR3mDnHcaJBYKb",
  "key22": "3K6S2gLgzrnMRdGy1JedeXuxVFgSiyoUdF7LvuYhvmGoWL6XAfZfRxXZkGS9SkSqYH6h4ey83Btpb9hzinFTk5CA",
  "key23": "4vNiQZUkJnbErrzVxY7osgfDTyeCX3hLHSWkyrTFovg2pfcEhzR14eNUCZDpMWzfSgbfkkho9wrETsH5qmwwzeFW",
  "key24": "3e2smyyctBJNt144vTgr5FAPy7YaWzRdngK99PHqLfwR9sSB7gKAqaf586BiykxSKUJ9cm5vgq7Et9UYJBePk72G"
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
