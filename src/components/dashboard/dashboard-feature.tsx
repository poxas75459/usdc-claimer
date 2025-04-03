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
    "2L8Ax1cXHZJeRrMmqwDA1fmbpQDpVYiG3WHJWJgSVJJ7rXNzU9vfuimRn9FGoRuGGXgV8C61hJX2LqD9xMJqHeFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ss9vpnVDkt3QVPYfJGGUS6vNCi4yap311wwJSTruqjbTTfg5V9bsvqjNw6hRkEFB7CQ6t5g7mg2YkgBEAddzFJ",
  "key1": "5dYjaDovXHB1c5vhfk1DSjJsr7DqokCdEAVJNjxvSEtqZAZRLzNYDgfmN8BFRD5TZXZGeUZohS3wW9rws2bnMQcG",
  "key2": "4wwFe864fe1KC8yvP7XzF4qoSS7jd58iff3o4FdbxmQJ7LkUFaoCoMAvT8nn3S38T5f3FmxqK7oMvML7tqudzG9",
  "key3": "3FJS3kR1zigx4A46w7QcEJJHW1b2KcVfwDjjdBg2KGVqph8rtKSNFY8nAm3vmPsi23BN2JxK4ejQdvRbZCgxDTYM",
  "key4": "t7RKCpcbNgp5R64o9fsR4NL41sswLVEPpgD253gmtnKVmV7ecvwrBTbToGJArq1pGVqMFq9AeUHok3W9KfAiy3k",
  "key5": "5iqawhNh5fvotMhSCKBBc1xARaeayp4iWjEWZ3AJJBfiLiRX1X8vaAKGhMy1AA856uqw1Tbgy9gvN9q7WVVmutS6",
  "key6": "3TuGXfRXxxY1pGxMHtwZeYSgMf5AzDrwremSDw2sxv63dtFzjTDr1mDVLtbRXSNTbTGfLLD79SnSM3ENwb2RctKi",
  "key7": "5Co7T6eXzqzKWv4iN6pxgE8Zdtpt5HcinGR3fYbMB3VGc8UCjvK1EKz67xqM69EDPPo9LnQ3Xg5RoqE3XDGTGqHv",
  "key8": "4TNYJhdLxvustj5VVAreSWunqmaS16sh1JdUKcDTgw5yBoPJFEjR1eKQX5N9jvjL9jK25QhW2qTsrKg1t6fdHndY",
  "key9": "4mqetRGFywZdAjsrw8kyC8rPZEmmaLY6gXZAsoSi2GVVhUwzv9HfUrhSHhLzuvWNR7BNM9DUJUzQRJdFnzcDSNVv",
  "key10": "tLSWjuH6sYEAf47VbdWVTqGz3qXGf2LwBBJMAfpgd2pQ9iCz9z9538Qdz3EABWpDr2Gtj2EhNc6Xhc8zvJVbj4U",
  "key11": "4bu1TdgdpXbDKahQaZXCVCVbpmX8qgejgGgLirxH2qpFGN4XVTiUBM2P9vmfpqavy8KNVkrwNi1rwZbN4ixoLQBW",
  "key12": "6VGZp3iLUF1hQuYwmaQ5nGAkPsk6GL4svAbAjgqsvatNx42gStE9njyq3h7CSpvnS7Y2jJ24D8Q8hTqRiuQkLDB",
  "key13": "BNRqEbYDqteNx6pKxecDEfVEJ8eAxANwGwyo8NwPcsv89mePuVoDKySsgxuRGj7D2sWzU9ZNixEfk9v3vSnfr8H",
  "key14": "5rUYSjwfxgK4ekZvoG4hqP5b2XtsFXH7o6wKDYsnMcHRkUXaLppWfuwbG1YRoX57cDAjckYVittfj24hVb3RVX6N",
  "key15": "5dzszK2yz2PcnH6E3ntT6y8tHNPEZ4C9UaHS8qYPSyavR2R7JHZrJR4XNiCtJkMKEpcdEZV4Daw1ZUd1MJjCzupf",
  "key16": "274e2en246SYupPc4s66zSgw12ZY8jfrGA1VVCNZjwPfb1wFtJRYF9t3oSsLoVEHMG5cERyLxXFCZGDasH2uRUwT",
  "key17": "5zhbC6gtR5hufMmxv1xPDYSqX49Q27b2BVUBqebcjWZ8Srsx1VGbSfAHg1wrhnFRdQKQkofUy1SnvWznHiYwomYr",
  "key18": "4pmwaoNjE2E55SgvwDjD7uNBv9gMEHw2AL7g5Ggvr3xyi37ZfComwDrvFqhCUEAtotyqXT3uvrSA96R63MUaSKxU",
  "key19": "2fZsWxarQAoKG3qsxJnZLE4K7GBB12TNrSz9FGTYRkjXawWxsK6ttcff2qFwYCnCrPcumQBq8atQccCMJhAExqjD",
  "key20": "3HPV9BE2v6h5PGzwhqi1mYjXoCnviegQfvRFBZ4z8Gbxv9Ci9UXJ653FGgzx3pp9q9gnmWt1rBp3BN7ABBAnLfr9",
  "key21": "4yxgji48G3GKonpqj2YKCwBxHLt1TGDzat7G425qLbTKDHvagnFvzvHTDUinVK6sRmgCuKPMCd8xciuYKKbH475W",
  "key22": "55RBD1iuFqSgpWPzbCRHs2zZnJjfYoXF9V35ynucVF3HpByKdYJFLNBMcnkJtAcBNBZLCqLmttLB5gW92EwiPRcd",
  "key23": "3Ev57pMqgQpoEX1af3zGGnstT5WsCxfcHjNV8HQxk5sp9YR1jKSL1BKuWJxe8KbvNckvaQbJdbmTnGRRJH8BEtGp",
  "key24": "iL2rsdA216eE94kzERx3CDCHdogRCm4QnPwD22ARrLJCF5Wq9Yswnhpg3NAGMJ7DNm6UpHfRgf5pmd15BHjhAsg",
  "key25": "bZpHg58g7vBGDwca3m9UsyKuoumzeVQW5RLYwF3qPH7KrMYLjRrNjosds2AitDik4uma64espHVzdUkfCUthkib",
  "key26": "46T4ffNq6SwxAeJ2ftAYsM8HcqwkUDNVmzkb3zVWMcGX4RhdcPra2M7AKZuQwr67HTwaZYvGkin2pBgykjWM9Kuz"
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
