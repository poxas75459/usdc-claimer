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
    "2z1zfrh5afSFKHc8SYyJ8WMdBw44neUPqssnRnwTXWjN3hEwGSuCGT1KxhJRMj6qMdSMaGstToqbYHNgaw1DTN3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zPkc8GHrkAZ2tfKpD75pZqEQaL27eJ6K7u21ttmDeMSid8Y852goVs2BSL3cNb3iXB23z2RdBr5LMcPDTbxHHW",
  "key1": "5m4dKsQuJ2LW7aW4PefcHBUar2LhmJaYwz8a4e7yFhRwf8spQdFApy6Djjy8iGvg7iEszYgaBVtDBUASv4SHF6eK",
  "key2": "3Pzq6oqwLBtni7oaqr98Tqj8Ns8yn2tGc2viPoghUHezszE3gipeyNjptcptWLrDCQhjLoL8kaPaYecMgzqUVEte",
  "key3": "3vMvGTcUQeCVAemkDBHFCu7UHiLzVnvzSa5an9cNuMSK53NB8sVj1zWEf1gH6ZzcteetgM9MUvjVtrfRwnuYKuA8",
  "key4": "2rLMf4RHUsqwGeWxNGTocNJEN3CNwX7zrJvUpxdu6JRxsQgPPuMZRbZjx5Fg3Br1YyKKkUXuoXzwMtwG1CrbedhV",
  "key5": "4ekz6KZS4BUd7k552afiLr4MQ9Sb4NhkS3AZ9wWvcSoNm73z4xbudCPCBDJCVBPh9Ak2cPwXN4BYPDMXoSJM5afR",
  "key6": "4UbQTHSRQyMpg3GfxyeZB56Wi1DFQVqtVMMjRYmDfrdbueyvqhJ7d76iW1dmeRw5WtKC532rFz8o4cKq84wxXb9u",
  "key7": "5RHsYT69uZnnsuMJF5eeGHcnaSdos7BzyQsmbJQHn1NqTUbqLEVw1u4gY8f4tyBMdLh33yB5QrEtAFdRes8Eo42",
  "key8": "UdcrVD28bXSs5o8uCRArc2ToQXvVraySPb9yz3sRfnbPXpV1QcTfmbhxSGXkAAP6NToTyoGgZYGH32yNA4Xy4Z9",
  "key9": "3PtjwDVaf3D3ebyLVyvq1gqGaGiEQBbbpi7SGg5L3dyFXzwpqW5pgK8Qn19tLsVUQFj7xw7oXzJ3MW34hUEHcktg",
  "key10": "2vSECcPkDSZCE52vmVtQfeCe548HCYGWMKSY4yFrafFyUeZn1CTcPeXMnV7UdohvnFfuduhHYj4Lbv2NccNMWi1D",
  "key11": "4DBnKpCEo8b98FzEy4AvtVhq4DbMwQUdu44iUGW9GTf5AAqRfHkbpNqS5vadwP8567u1DjEKhcxZt7ABprquXcw9",
  "key12": "4Y4oNYHLRYiFuvVBS3673tkdYwpWX3sov4En2nT3Q8TujbBJpN2G2PMLd9BPmfqQ44otWQN23kQVj7js9eBJ41Hu",
  "key13": "5SZXKdrvNQLv46ZV7GY8Fa9aWVWmu4Z9bFt9eNtEVhi6HdWeUdPTsXfEmkKmhZMCkDD5v8P13nugz1ZUHAv1rEqj",
  "key14": "2gpWtowSs2qraJ8SmL8XNSkj8EQtsh7L9uYkxtMfaWTgJyfTGTcif8FBpZfMvy6VARnuXHVUnPSjRwEkXZgPpnG3",
  "key15": "2MSj3osVv7kivHJ9hSvioX3bTZQ8LK1R8yefL4xEaprm5PHtuJSMTZrUZEUJVYrhwjd8PaL4CZm4JZVtHJYCignE",
  "key16": "3Y6F6iNk3yttd1jN8PGYkkpyoULyGK7Xqq3i7mRWYfGygCdCPWjzLVbJahFBG9UHit95J4TkELH57dFEpMYvUg6b",
  "key17": "f43oMWxkHhxkFhtSSyhohjao6VxwHQkLyjPQPjdEMuHsRRB1RgnWKV9WkkXTpgy2cLW45vd6Exu1MehKLRRGKzY",
  "key18": "cXL4DGUq36cqMp6QCPaSGoGWdwfuXN6YL9FbzFNox3oQ86g6T6AeuZ5ruQYXgqjwgusArExoBVJgSGxUQZvxeog",
  "key19": "rqzGb3eSkfJgWYkbvi7eV3ZkVoptQTBuuxTDREVJR1hXRsqpy6JzqifHie1MtXnL4ZRM4zUoyLQ3wRVoZ3XqjTv",
  "key20": "5ZJ3x6fFfNEktLfyyavtTZw7R9nN9dfeY6kS6cxq75ExoqctA9FgDbhbiEP5HWAiRqZ31ETVQrAkJjFFR4uo51jN",
  "key21": "5U62iVTf2VdKu8mWt7J7E5XEfhh3KNde2yuzV9cneRWuofy3jNb4GnNmq6HRQ7bR5DhnbaSJirDsfnyYS8iTHi89",
  "key22": "3HfKr6eMqXQNyGK54w5tBowJzum88vyGLLfgoFnQ3XRZU1Lpfb8m2juMmJ8gxXuQc5sWhTvdU8y59frQcm6EgQQU",
  "key23": "2RpeZsMBBJdBqZgwkGZAYNfNp2J316i1CmGYN5X5Z6kwEsKLzTzjbJ6AX5Q7oij7zAFNR2NpYMf3nuv1DFsRY3sh",
  "key24": "2ip7voSKWjqRkwugrVWqQegYQ3fT8BxoJNwY76cXUb8pMEC7VA8j8yMU8prpD4mwmQUcejiBchVCxggK5ACmxgzJ",
  "key25": "4uMdC9H8uCS542oBJDRGP7kVzLCDtxTyZEqGEMt55GvgiWphkFXctx6rck8kFWkAngem8f51Hk6Bv2MYP8kE9Ydk"
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
