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
    "5uT9ZV4BYh5gvhG6i9VinX95Q2du6xKRDRgwR3HemtPyKpJ1TZrp7jeppdtkxe8mqNkSrGbUB7mvACE3HVSyXL9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SaiH6AzCszRdcdgmjUJWYGhHusvoZVJKSrUNcJtz8wp7Vy1CqDUeH4Xv4sUn4VfsP9j8xiAxx3c6j2wYoqvuJ3G",
  "key1": "wHwLZdGBxYjyuiFDkEb1c6u8njn8DLamgCDMBqzSTAWc5S26Vcb1adhAnonFopoFbagPc6J4mboZb2826eoF41x",
  "key2": "38vUtvcNKW7pDzhePNC5kRbkn1CGa1waTjwCyZ3nRDAWYujuLBa3mkftVkvD2dfhAXvJQpre6A5wVPzw5JJL4XC",
  "key3": "QEAb9P2z4AN2GKBVRuNfwYiuDqSpT2zKKrMStz6GVKShWz3TDmTXJ4GvCuH8uZV6yuL7xQ83WjiokfAtYctGdpc",
  "key4": "5bUxmifcoJEJLcK49EUx6paCMy7zEup1U73jorV4mHKXscxwENnUFhNKaaB6XLvPbC6P75hayxfkKgGYEVFaTBq8",
  "key5": "5d5BLXFtgttAUsHxNyx2a6PRdRPNbecZZEQsAbxPNJmsZck4qSQsPfz8j78DppT3DmTfYQEriWWhXsdcW8QAhfXY",
  "key6": "5FEo8AGkTrJQHtkPFhaN2ygfwTdCXBCUR9sRF86xLiW32MW8TFjkXH8KxvB2xBFDy2ooX7XtZwGCZ3xg4edpEMUS",
  "key7": "646yjhowToGkYMn9nP6aqmszA6W9yZvjf3xZKbc999A2tp1Kv1VUXPwMivS9mAi4vCm4mXHxMFevy5grLwYoDFee",
  "key8": "2quGgoucB785LdhTW3EH4TLLUj2rT8uLFBjXLVdsNdcgp9CWjfh4dXEiPHiZjW26AR3ugp94jnpivUBekyd9RqK5",
  "key9": "5xx7tb8sdaV5stZrhnKvAp7tVtJuvLqZg2L7yHzSoXgbwomAtbQAH5YP4jkhaorh14Jzfk26s8jih4B6jmPEku57",
  "key10": "4po9i2PxAY2g7uH4nTsdz6gtcKbFbAN1KM4NrNQyR2dn7L6QJ8rDdorSVvvYt5hgUzCb9JAm7gF4xXgxchVLZXXv",
  "key11": "3v3jjkMcjVVmPMGUukMms1CbrmtxeBMBphnj6Yt9Uavd8i3B6pk6JKD7VP9xiHEVRA2TgiauUyENbht5JvraA1ZQ",
  "key12": "5hrn7vRU9LcPnuAp3DbzpgdjuNEzsEpkvorSUCWr18EWP6rx6PQndZuKvLLJEKuqUMdHX9gib19vUnL2vJvt1dwh",
  "key13": "3pzaCHcGep2d8K2ZRfCPfyXR4X5MuUMUP2YPGNSgDFnv6TQR6FJgfjsQZ5F3JSC6TnCYNeTMRjvdq3HVcezZRf3a",
  "key14": "46H5vdL33n8nbVFCAFoetox7GwoUCrWp6qvcADjmCGzf4PQE7FqpmLar9BqHvDiuvJQogCjy1oiB7udx44VL7zeM",
  "key15": "2zbH7J6LAHaf8kq9QooHxkngTXCfZW6BL5BBtXvnE2XbhvDAHecYV4P9wysZpW6JFL7XyZCdPSE4bpuKjUe1w5Lc",
  "key16": "v8koP9myzQ4qjUqgfB6c4WzeAXbDCaH4TFzAxNpnYNYPK3G6hr5LzUaskzh7P4xTa88NpAXm6LB62WDeo8H7TEw",
  "key17": "2pNo8ir7W6eCe4TvwNqiafDMPRU2KfMjViPfeGsXAJ1Nwf8g9Tjfd5XaqJLS9AYwFbZ8dGv9nkZeB3t3Ap2GN4Qb",
  "key18": "5Ss1sue5KaT7sPAbTLhoD3szAeJnahux9DDnzTmL2xYT6KzBU7acQzCrgF8qAxXyoUbj8aqATznrBTBiyd7KibY",
  "key19": "M5Fh52NP7JbQ5V9SyjKAetJxxz9PFpDcVe27GXsu2KPnzRg2Ljdnc6nme2jL1nMWXBU4Aqn7oZ2zVavxrYkfFw9",
  "key20": "j1LfuCoAAu8gXDxv8tv6AxPXLvrgd12Be1rHy3G2BPP8ByLSyvMGyunwqCmhLRYoAWJNqnS5ZuNhVQPizeNW5JF",
  "key21": "2YeD1rzR3kYAENcBjVXaKhRPQw2mcvMGtD4gpgUwWxEtGhtGofVAcbsgfTant9DhNxTRPXC28HsbqwCrTNjah3Fe",
  "key22": "346waR9fj5H4ATUnLu2xeeYLajVhQzZCKz4c5nd5W4tdrMzGoXAjQXxmHA5hXJ5Lou8QAgL5cF7m2D8yekxh4cmw",
  "key23": "3sbU6uSr4jqkwv3L1dWdUoj9taHh2jd72B13nRBEG1m2t4R2FtCHHXe9mHAkhz2KeJQtToGAXpb2ik6ygBzaz2D8",
  "key24": "2ZYekRw7o8r13PbTxQtdHoPoYfng3snn91Mu3MPooBhh1dnyFPSA3LW4tkgGyuvRJSTdehyjUjG4CzkREL4DHJ1G",
  "key25": "uvNhPSR29rbaxGSy9h3oXaPEZo7DxbqZxkoC6hcp8eQcnnCZwgeGjevZ4o3FmZQUpyP65y8syBzQFXoSuzTz8Fz",
  "key26": "264LwgoMYgpfvGmkERDmmY55kfBfTzhDJbU4XZ6r66bSytQfJQKPkXXpRrZDps2U9259qPf1B4d3bivh1f36K9CK",
  "key27": "5PQmWTQfisSA1ekQ2ctYdvSw4bCoT4tgi7gt29WBkBQF88z7ZSWdLPj72gV4pBv2oUg1U4uDSnyCsBCoGBV9s89X"
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
