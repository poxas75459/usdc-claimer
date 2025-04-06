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
    "5JrfusShCdnGrS5C4uFbiKeww6ofCV5NuqW2NgER7XLu5cZ3fXoGcQDdF43stf7zsyEon4JJNmhZ8gbYHehMvKjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TkoncSuTsbKxSBQc756Fyfmd4CVNDJA3iENVK7wAdgx1FZs1kDmE1smyy3KZ4q3vZ7gb9WWegKdyL3QXXbq2FGS",
  "key1": "262Bm6Q5YvjpR19YicfWCfrkonQPPLNQkKyVZgiE6oc6589byXvWkmYUwNvgRqx2jMqPneKiR4AipjpGVrtg4E8z",
  "key2": "61kYRSjVsmcTxcc8B7WMzZ8dMWqJAgETUt7JTLJtq4V9LFwBfRPAXAAwfxni6hwH8HH5NxJ2gQZLF3sNv55vHCre",
  "key3": "5DD6RBG5oAYfuyPTxbpyoGCNnWgGt1F5RMNUpxCVuK7Rj3PMW3dMGrpY2CRY8EE4njf5AwMCDRi4BHdbyJpPCsGY",
  "key4": "4a6ny116wf3q8HUrNvSh3Ruwbk8WfCmxoNjuWkaBzez5favw7cGDGRLjyy8HtkREJoJeHN2RoDccv7d85GnHuhrK",
  "key5": "2S9qAsvCTwwUNjFoxuamQcGPcHpCViBPn6BrxMSLr9aQ5TqT61tcQpxuJNvPMFx53FkNhRRs45JZhqgDPqi2ypHD",
  "key6": "DCfXHvvAauZ5144Cq4xqRDQbnRfHeqjFFc6VyWcDZzympUWuXG8QZmvbKi3rexA4foyYiSPqVnkvAi7RB4KpT1m",
  "key7": "hzisXqhsiCjStLF6PsQ74LgPzG6WkuHHC83Yt15PKYKwc4gSBAr7LQtsccEN8rWJPWa3Zm5rqatJHhEzcxFRaEN",
  "key8": "58jh6tHm3eXnCLR1aMUKrDC3KtuqzYH8fESeB9wbPGK7WBXzHDNBdsFaX1sy2Ak2AbH7Uvv3m8C1tb74oGcESZi2",
  "key9": "4ErwRVPJDVQXERE8bxqxXah7AXvUnsGYEQigfgjesA2DpPzzWG9pYbc8Y3bpcywtPmLukfmRZRLccreUSAWQTdv3",
  "key10": "3U7yncsqN6AUGNobjdw5JFw8YStKgVZp8af7aqqDB7VP6qUWj2DraioKbCG8ErDaKFXZPAwJ99jcc4Kjei3FfRfC",
  "key11": "5yASKmNA6fF6BecF9AQyhHguE93scd5uHcoi7r9GDvyB2q4qDXp8JSzYWX5KQv4zZ34q2FkR293PViaAaTvUCMme",
  "key12": "55GJa6124CsHg1vCAWnZGBWsN9kzHd9fER1u5nBy3KxzYFEVGuUFKHoxuER16WzAwvDmTZ5WGoR6w7iQXTtGQM8D",
  "key13": "45MGdJ1g2rpqaGLvPgr6GdbAkYF39zxUTcx2QqHfaQ1Pahosk78j2M74QfZV7WS3gxaAWbEzNPciDQXhFaWhP7D4",
  "key14": "Se6om1SDPi7HHFUrumXfFxtGk3F9juuoSfJo5eQBrcCJuP3W2zvKrZpWZJxLUPccoU3B76HHpumTcfTqKmjhWnc",
  "key15": "3rXrxkHqZgAGFLug8AjCefAcf3dFoFE3nSNWhddsF93U4kpzNhHdQitAqQZNq9CRaBcR6oZStXc2GX24PYCNN4sf",
  "key16": "4XWRjHPmPVDh8gKS1kHWhXRkF58mEYpcrQ5hMecPwyteaPPafUy726pVcywFHTHACweu76rwctEmrQ2jgsFaPtuS",
  "key17": "66WbtQasGPLM85piPzo1tVicnWBBu7BmwuYhvpHnBMmSuPet1xdUHb9dNXvywN2XVvYi8daFTLZBvBee5i675aCu",
  "key18": "5BhZh9YNNZ8z88sLn1jLwRY7FMnj7X8eqGhapZHFm3cimjpGri5sw2cDKBgWU2WvJiFNqfAmhiPka1Mf59Xfp9xW",
  "key19": "3sGcBYfwyxNLKVoG27NvbBiCuZMRqrEW5fWm4xT87LdKZRAVzyqPG8CSvWupXYqBESgLzJJK4VPphdsgH6ubeEBL",
  "key20": "3GjMbmCdGpHSU1WoJ5356kkCRAwkrxVYNu9Q3BfYFuTw54d4dfMmjtD5PBL3AwviKwfYPV9ccPpTaGTBucEkPMYx",
  "key21": "2XvevtRXk8Pb9vZ6b8x7uAGNh4VLepqMf8Z9R147Epo8sxdS3A4jeJEsJwEdkMizcbFBQ5KfHKrPjQ2ugUTxFXtD",
  "key22": "546grPWZKCLTd7vqyonnzdkPRfwXxJzBjTVTUSprSK9o6vRabSGZPcRafYXxCtygrNMr3Dh7F786cNcwU5da4LVF",
  "key23": "2q3GBxNkAYowXbiXBMmkkrUf3xA55zS2dYsgUdxqCe9gtabgnV7AgR2vGno3rn8bNkXhCsm2h3ZbuaobDecrotJj",
  "key24": "3z3ZyPpMVr7VsddZQaowE8rKDu3kQJdTr7KorEwzP1Dqj9ZXdxiQWkCc276FBoGDc5r9ZfP7teB5VruAUL3kr2hW",
  "key25": "3fR1FGEHVM6399CzKJ6meuaSvH4Z6YzY6oxjG5oqfbmGzArjdt6b3CEJADo6emFN444BBtykSkwoK5FoSqZp9rwe",
  "key26": "2Zgae9dZoV9uMSW3xDxZbj3J8ySuX9fAJESBGHh18sVjjB4qE15Y5v8XVGYZVRBn2vuPWwxSdGhujreGHA6KsSLj"
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
