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
    "2hcj3XqMwXL3NdVY4SSWr6zNBfwmXYnaiUqB5EJNrXohcwrn7z1dKAa6VrsMUWsmDYbWncndwCD9z1qUwdpTs83q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oT9niogri3pdYJdfjxU4FM5fqUEZe9wE9CNtT8t8VNhRdYq4xz3sxMzeeyG87uoXUcj7R62K69jcvPWmUXqeCLe",
  "key1": "5bqUe9sWugcCXGzVd98MuFDMPpKZgNqCFZZBwYUXwQPdYf8mk5iNeaQ4ytkYSdzm7ooYk8F4YEABpmQGmgxtUCiZ",
  "key2": "4MWPCst7TXuYr7MNLMhQgSEnKF5ovPXRP6puivkMbDYC8c8AehxHVHBsTYVDjKn4ez4FTXoBmjMAgDUu1qbJMr1d",
  "key3": "56bcf39XqiWxsVusn6kZkM2zFcWXHZiik68G8CtUFjYomQnQLvBZsVqKmvZLfWZum87bRjRUqdXtu2HvkgKAyXKm",
  "key4": "2BKAYVLCJ17moBGfGeoTg8mAWNEfmJtK3VDmRLCTiVjgZiXQgbbSLDaeKsG3Ak68ALez36xNbtTBiWtBRrcqMQrk",
  "key5": "559gSGpLSDvGt7DTrVjkSKrf7DNXDytMhHphAAfPkZzwvNWuf8PWUoG22CpUSBPtP4BDfKEUpKokCd9MR1XKJRV3",
  "key6": "4AcPjBkaZWpe7X6bAdUArsknPCXq9wDjEjBPgNqMU6R4RsL4hu8jTdEApArDi4PANj4MmGHAjA3o6kAgFVyYtcNB",
  "key7": "3uNkdpyWuYaEBijgxPHqwGfaTGmazwoAHPHP7MD7c1qegb67zj92JhMtQES3WtRDt6fLgp8LJZpL3eAeANHnAqb9",
  "key8": "3Q6qyG2cUvf84nsAyn29cBDLBL7YQdBiL5SoQne9XtiqqRnJJFuH6hPvij51mFBEKh1Ws219egZ2Mz9G9buYUXQJ",
  "key9": "5ZvVqgNUJ9e3fE5SKH54hQPSD34RG66QRwCJJVEJgTMw8qUvH46BYnpR4sajkQx9awvcDRW9VFbuXc5WnY9Epp9z",
  "key10": "4adf6qZAdntuhx6CAZQwaUmjBTn1zgZBidvY2z3zX5KHcPe8wr5941zk9TM42iqrq1S5cdhUYixpF8Jynjbd2J5U",
  "key11": "5cfefapG6dCna5s7mdhSY8snbc3C8fUuNVzR963PxBcJ85CJCZ6HXWUwN6DmawEaZCZfGRofEvUnGhz2joPFLNyc",
  "key12": "37pjdWUypPQByhT85Sr9g9GFGCgH6QhMMTbA9yXVhdJkqUjBEHP7DLZ4qNwxpKsjLMz2ZkjPt2ZiHdyvdy27rSmn",
  "key13": "2byHv55cHuSbts8Y8NPUg5wixJUiE1GZwXwywF5UBb2CKaQtA3xYfdkHZxQZ62rYhzNRZZsWRdcf5obVkvCEghF7",
  "key14": "2G6HspWQ1TCnb2nZ7eBP1mEW9kqZFkJNJPMCeoUQMqnBr2ixFNPn5rapJXCL2oeZiKTpxfYwyjb1NLNWTubyVbax",
  "key15": "2txq6itgroMDezuP6mDGrGaHCogR7Vr4tFeFDNdxxpKSQBS68yaLXsFsF89H2U9RMhP48pnS5VdNZ27dScz62RPm",
  "key16": "45z8pYFZTpnpgXhvcouYmjuDDHcmYZAffBgv4dGCA7w8sgafT51Gfp3PUFULtABJufbKuDyNCAbWHyez7C3yotav",
  "key17": "2yzoggvTzCxAuzt5p8rX4MDjP8X5a2ktUWwkisCh6NB2gHJCjRyCkC4U7FJdE9Snjs6qMab4uk1BE1zE55nQa9WW",
  "key18": "349QStTEeUMEwcQR5F8GyfvBwUUF6YHbHWwsgPpeWb3B5FUKrLcVkxWkLM2jH72ga95TM7gjQ83UU77hzXtDHziT",
  "key19": "4sYJ1qFqDMZuSioCbCn3XBWXQgwEbmpVgmX2uFyqcMGEcH4FwCoPnWFuQSR7rAPX4i6eq1tLvZajReuPTCXoj6Y2",
  "key20": "4Mn63T22koFiQGfoheiR5kYzcHWfZpxPKGXQX7vf3MSyyPiLCKNYfiP1tnvgjsXKHhgVrE9kA61NFcW3PJPGKaof",
  "key21": "Hd5CnKFtifUzabDM8C2srW2ThkSEiCbpYfeP2dKnsVcwET2VgCoHt8B3FAfGDna3MxnUWbTx47ThjATdEjRSuhE",
  "key22": "gfh1G6Rwtt3AZjhwSBvufwmJVAEMDdTqnthYXvUBcTa1YPas4hx5th88g1YNtVVQp1e2mnjgmEzR58qpRHWA4bh",
  "key23": "4GeKDE9aRqAx6EpYJvnQsgyHxW86gpVeUjbUs9UjT76mDc6XxjJhEsfCCEfvkgck2J38faYGTNBmHPbhHdE86xR3",
  "key24": "4HrS1L5kkKm5Dmh3DfT82tB8vefGKcsQYCQsWkZcW4yUAUafABfFczxN1cBCYuGPoEqPq8eC7KrLWE2xBHFcfsB6",
  "key25": "3dAvNRU3L57Fj7WfpFuRrzRahgpt2cg8K34UxuP4SiC2C73fNV6Vpahn7XKQxHfE87mDAizwrP18YJ8Xci2zNG8U",
  "key26": "3REwcaBVmNv1jS4EewzTi5U1CbhYp7XrPuPSDx1LtP1SekEJhN7djwkG95GYnpACbKnCGtd3NBqr8ZWtHMF2j4xC"
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
