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
    "2kuxPGtZ6dHvLdseSic8uD8KzsgRw7joa7p4feY9vHQVu1eK4bzDbfk2ZsHrabB6DXHk2PbkR2iv6JWfuxHphumL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a7c4eVxZEKQXuNKSKU5Q9byHseUAa9F258DsTjkwfmcMMXFuiwBxn3yk3iKDUcWUCpFaYgkTxmywWexKDECPYHC",
  "key1": "5sXALDmy52Zmz5jUH9tArW4XJHDtVQ1DZ2pSmNhzG5kEJEqGQpwx4bVCANW94CLwg7t23QvfYWuku5XPH6tpqjkb",
  "key2": "45YBCA2imymwAYvSioHhozyVC9erwffd55cQqS48As9YgiHEyUAJA8Cn7Mx2DSZ3j3Zd3KowZa5q5dyA5oQNP2To",
  "key3": "gTUetqs3EzVEvJUHceZiMhyMqwHUytCcjLJZdtcXd2FgFUijLF54gVPq3r9cbwbXkoa65yWRj7EBPrTgNNRVX54",
  "key4": "5ZVEabCPDykY3Tx4i2ZjAXgEBsJPwKFFPU19P5MYw6kvXtEHmPygajHuxmKJsEd4BBPYPAncnTDC2FxLqfuoZwez",
  "key5": "DnZdUMXjYfnABbu3isV9DTQvZAZwyARL9SKzDy2jCbr6SHzEDeDHbXxiAiLa9EnVyg59jE3hfZRSZ2C9bMg9azd",
  "key6": "5uQqQGAnAhsg1QsVZQY3mTxRR6UKKa7nBi1A7gycj1oqmFECmvd1BErtNvBdXGY9DFCBLEnUqtj44BN44gVorVuq",
  "key7": "j9QpChFeYBRT3a97FietaRdnx369V8511y2ztdNm3Rvy2W1Lv7yxR7UyaJFHpHAVTdGYfUgfVnyAmrRdzsbvkVu",
  "key8": "3nMWULQJ1opsmFXZfayoWPK4EAUuSehMk6y4wXgei2kYnYHtgaBbMqRkmoiA9PNfUHduJrNcX1YbfpeV3unPLry7",
  "key9": "x84BhTW7ucvEBbSZxk2kSureYm7RJn3pwh6rBetbck7aZke2NJv4ceVHhiqe3MYLA9JbchiHnHU3wWTK5PJQxND",
  "key10": "oJWMY5accgxTb7rRmBfB29NVpCeq3PQy3hNttf9yFA3LAAxf5KdccznEheZsMMg4LvAkLfxKrgvPW4a7SQTWswB",
  "key11": "2focJvAuxNBdfJYSsxf9QzM2MtPC7ZEL7FWgPTWYqwuyDGaixTeirrW4QXkSHqepszuNqJoCGfWwH6vD4VgRsVg6",
  "key12": "5siLA47n7iP7zc68ywb8w6kNHgamQjEV8AeP3qTHxPbFdBLXJ79RTEW43bkQfNguzNdsmZG43Z3fVKbkWheYuX6c",
  "key13": "4DnnmgqnYch4DaKUSvYDDW6GNJ5xuudA2UwNQtyUirNaNtyGu8RJr3z13eFrc8tuAuiz5Lc2q9Ytpms3zETqcNSF",
  "key14": "2fa3vom1yPcy6Dt7S5op4vitioKgXw7AVTgZ6B4ri5o6gCbSMR1zFm26vaQXq1uPV6RhWCVD1A5Jo2GSBiZPXUD3",
  "key15": "4SQmRwmkeUT1fyqdptQ28TKxEAYZceiwt4w75CAXY3UMFjGJagALKgApTE9FQuqGLTboc5rcofSxWG6cpBdZ3G93",
  "key16": "QSSaHQU6tDZUoFAQMGP8ajNtBKohrBxLNEurWCACyNUqy9cXQC7MUpaEEjECDfN7Wb3dTWbx2rTA4hc6jpFGsz7",
  "key17": "3xqjkPAJ1UmxpftQF5SA8fqTzshWqWGuHD5J25nsjSZnBdSHvXdtGVHHq1mGtGwUMNPqQ2HoMYZhVHRarbVvj61J",
  "key18": "3HfLdkh8QD6Zk5yUh9cryKdkMdM25bC5vLNR4LESSgwejiY8tTcN8rVVF3MSffe62La6hcVJ5NP2v2NNa277hjWh",
  "key19": "3NcMvt5uiha86FE2GiAkEX2PQJaQxHgtr7SNhGpn6w9xmoWLTd8bZwsefXzChhUE9uMwm6QxXyxtUB4NyLm2UGK7",
  "key20": "ypoTtFq6kr2zXWm6Eyg442uZ9d5S7ac8FiHBQid1ScRW6nJPRgb3czH7rV17zgwQtz29Wg1AEgLgmwhBpAYQhmd",
  "key21": "zbq4E8Xtu3Qb4oeTp67ydTKsANLJ1DS14MitXVXognx8PbTGxJH3GanNdLvdCCx6okqQnambzBJG1ksfBpKrWnQ",
  "key22": "2E9g6Sc9YtGn3UD5HyqCBuPrGZYxv3SwhgEMMDxasLY6bXSC9d7MzjCjnMo1Qww3uaCUGqJX4eRFutKEmVSDqx8N",
  "key23": "51Ehoqw8GqhNkipun4ggjsHymU7iSqCg36nUrAyEhoMRM1SQZWLkKNdwZbiSHpi8j9X7Y9TxCT2JSwuT8BH7Sahx",
  "key24": "3mUxvUPaj3YK74m6aszKEg3SbGFXQ4XEKaPFTweV5Fj72xrvmbFoCWE38toy6kEoJfQ1vAnq4VosdRbYbGiQvhbu",
  "key25": "3b29LXy9ZHCJwW67bV4LE9pUKb1y9zuv6Td2g8ARwPRdP2zhfdLWWSGcPDmZzqouSvpwqfqnaVzYRwEPsbSRNmQb",
  "key26": "WNDNPoMbxtjQ3WgTF4u6VLEcRdDBNUmpzY3ERfZmuPnWNnHJdG2ESN6vti7UrpFGUDNmvTjjbdnjC167nCa6vAD"
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
