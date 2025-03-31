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
    "64nPtQ6N5vmPpHMjCAnEcRUC8CXfwVr4MfvTjzQJ85UrQtv6ioxNbP13dX6SqWo92z7co6L9b34L65U3AJWHWtk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W9JPcobGnE9gmcR2arMxFKQywoReB6kaA92VY7C29XjaJVFVStcGvjprFjraqFgkVRkHFoiJaPjkqd3YmFjcaWD",
  "key1": "KtKnu8QP5x8mhyrNm13Gt5pS9yQRkeWqoke2hzbdChaYiSiSTNN7XGF9uVoXPyNsTcpMf7WRY8WGqW7jFCbarjB",
  "key2": "2SYW4TFrmWE7fsfaYDLDb9DAUCbB7iT1qBJe5uMBgkU1E9FQvW3chYfzWazXZ1UVtH53ZatLsqddAcNC1aiwyqs5",
  "key3": "41F3awErwZPJHStNhvT2eBiHGTvqqsiY1aV9tNBEzpSKgTGC6HxQEXU4Qa7f3YQ3dcMJiZovLi8gW6zNwmfKUZzv",
  "key4": "4kyCQEDAKvgt1Dpzt2r8csfciDfTQbtpE1hwFnTew7ZRFfRKaDiXBR6Jqdgphx4voHKCPjeFVM2JkPyS2QtaksEZ",
  "key5": "xr7ay2KwXT7oR9Yh2sQZz1iR34uMfCMQLUmBHDNXWon6M2M6f1CBXd1HwX3GPh5k7HiVgYLxNFaiKEvbMFcCkwk",
  "key6": "i7Q1EkXVKEpQdmn6qDPixtpqRunqD4c3Thxdn5BRezGmGZN3AtgLKx3wTjMtpuxjyoJwJ1V8w5FfedDpNTaJFqY",
  "key7": "32DZNse4Li3mq18oBoMj3CmoUFC7uUKZangP5CaPTqpJaui2Tzx2bQ7q64ufxVFYPVUqcpxQZby7WC6KPY4hLykp",
  "key8": "3ZN7ECMPCJhmayRSN2XAXqnSTLP34yxsaJ6GMAfR42fXGV9MHiX9KfR1QCWUNKRCFzjd4EgFszbhqjY6hoytbWNV",
  "key9": "3YrWuu9DevX38GJYQ2ciy1MDA51VzT4QVWfNW9gz43J48RuDCYxMBmXBnSPJGHQJMdJNwa3DqLDdtY6aHJnJhFJC",
  "key10": "42MNnE39uYYrnPy1D6m3MvQp67zimsRDf6WZaKCWH4D3eipUbPb93amBV2A8fjz8vUSYo1FJe4F3mRLU6MmYqDY",
  "key11": "WRvkcfrUn6cvHR82MyjJhWktbTM4Zz4ZtyZX5k9baMeTEKrzkVd2nbhxDwBxKZn5WcLZQ7CkLi5zvG3JcZRZmnd",
  "key12": "52R8ysUoK5bbaa6XLvRQ3Kojibsg2NDa5YGdgKN7x11W8kBhAXtBeky8TgxSWuke3TehK9p8KA7WScHYQs2ApbDH",
  "key13": "4hUnyUpYV6XdU88hjMxqTeGLb2gTLXCuwYr5zJV6b6LqfVGhxM7QQ3SKAxnRLaWh5UfdXBFhz4WEHCkb6hEvE1vn",
  "key14": "3N1c1nb3Yjk6uVcvbukEaq4BLox5ibyqhXCJYyNBndPi887ctshCLH1pUQjnW1fTCW96qjwZ1dDfydAdxdWVnpLD",
  "key15": "2XQQjksKwd7q8EjGLrnsms5mEDEEVCBb4HpAXJKoa118zc7zbUi2tKLLfPXuf2mRQJtf9AAotYgWxGhmqto6XxqP",
  "key16": "3xJS8Ygmh1YvARoJ3G92M5xHDieZWzhCWf3zZ2vKmBe8etQatBMjJP4sbk8DLJCz9tu6xbWZC2rXYnqy7t3wbcgG",
  "key17": "4uwrpFQvcEtbpWX32Xo2iWUmUhoz787wJqLn4j5vAfzBA6JAHRdojSVoxLY4anGFnEbo9C8HAbDTxeXULrKwYdNQ",
  "key18": "3jDtQHLLDFwc3D9b82ohE43MDfGeN1h2nxwDKPAZPLh4oJFpfb6w5eb9TkXABX2VHBVDmLMiJK3scrKAhnF8HfrJ",
  "key19": "wkvQ46sWya9t8FmWJGH9Eb8H1gE96UmxDD6ebXymXHs17VrXfrSN8ddF6JnFMrXCo766Ui1KbQ8bt1GCjtJa1h5",
  "key20": "3V2ajEvq8xmmcnnr8fhG4QEZgPMYSfhYZ24HnURpaun3giaPqAMjRTiuXKnAQUpJ6ArieCbWLvJy2ZXmoh7YS1pn",
  "key21": "3eCUZwvr9qR1PNKX6kLHJ9G2nFsZq6zjGQyjaJGdNY4WcAS1cL3vW21FJBQ2vAND4EFSqcX3iHEYCGYbR9LUefuo",
  "key22": "xyzwmtWTGKWyLmo8DmdF96ZQ4KQyss4J93AsUkBBh7seUzYn367jc1HkdtukUUpLcM9mDdjaL5A5VjX8Ra8AQCW",
  "key23": "219pTw4afi7zudCa7dmA9QdX9DjSHoDFGzEqAwTZSzwyLECbg6rYqCxv95GvneCiy3wEjmbJowWaEuisQmHLmAqQ",
  "key24": "96GdEEXQomHjEMyB4g3yr3rwVWHKTdq2EejqwxXycayp8Pmr2f4t8nM5DJS8ENAT6pywkN8C86Aa6Nvv9zoMgXT",
  "key25": "4tjnvtk7sAGU7PrFbKmZKxe1Qm4yUCH2xdqagzmuPjfRvJUcrBicH7kxynN2Nc2CRH56a1HBDXqXWGwKgyuDa7Y",
  "key26": "4Bx1aHZw66poesZfso9A2RgrHpbwUyAKDFr4kEmADW1YLQgAdgrycN8MK7oRGyuzo61Mq3gtNbx1tEBRfFJxAYzD",
  "key27": "3wzTBMPfJEAa9ncVETcxK5fX1WBQdcRgqYD7jiecv3Jbtm6Js9Ep9X9YxtCsjQcLENxhz3VuKpkAML562S3dKaCX",
  "key28": "evrWCvB38WWpC9dJnuj8cZRCnhQh9wj8vWHobLgNhM3ajbHtY58EUjtCn7oMj7pFK4rvk7TsSCiCYY6JjRAxW6d"
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
