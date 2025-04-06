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
    "2YTQyLy5YsVHuLyLNrTez6Q2ggZXNnJHnKqqCzeZbKVY2arxsec8Xt8zbMKkqi8o3eQBEdgTdH8T1zwB9tHcm41F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zDCrW6HaPUQbUbAJZAchQHg8jnfn8BXCQrutYoHaXJmwdDeKgq4mBHg8FBhDs8W87WjWdeHeBWN8RNqwLuXMSNb",
  "key1": "3saSveFREkmFh6CQ5JDvLqu97LnPQHcJ45JR81cpXtxqaRG6juRNp6qUFWZY7p8EdnsGSRgq8Xg2K2YxnXxH9YJE",
  "key2": "3o4RJgVpVmaDE32USZPdRqwbLn5RFq9b8yq6CchwhwWJdvGeMugkDEvYUjTABnGT3ECanw7GeDcG5pBqQzj3KRzr",
  "key3": "5fyKSTmkDPuU8X8SYV4YFsRoJHAbm6tG3CPaUhK9fRRkJ8Fsh7gtn9yecSbjYk53PozNJPmWbr9YbY5kGXwaqQom",
  "key4": "2mUcGNC857deTyWgfM9JUFK8QJnM9k6bp4aKo9zRmmyEdBwkokkQT9QyUNBy6YH5gB3YX8Ju1MBRet9nyMQckJZ8",
  "key5": "5aUHCYBoo72iAkRCyPsGhKmcddXqVagz9rwHGizvq6VtRenu818BCpCESFV4BuBXZnEK7PBKJYKxASn9CHsBBo6J",
  "key6": "3u6UMCeqyJ4HLD2GXPCUFPVM5om263bHCRYCdBgy7PsU4fddqTad4ajctGvkF5Pg6SHYGtTPb3LPkNLR5UCnXXd",
  "key7": "4jPxL6FrSTYmJ2rDieLC4at259EyePUf2HYrv7hB2Hq5z6KkGT4yu1Jbx7uh5LtfNVfHYyLkuRwpTMosSfjD8nEz",
  "key8": "2cVT8ix84v5ZoxJQDaHro6iG5p8dMUAgbiouwVi26xnhZMKpLxGXpEh1asB93CmVnAm7tuY6RZdwgE2AmysWWo46",
  "key9": "4segeuGg97KdqJFrjtHu13TGv39aZrg3aN3R4ADwSfGrxG96dyXAYjbP3a7H5b9nzm2kdU3yRd1bP9gBP7VfVgkr",
  "key10": "3TnHZ44jFXak7N7nP8JqmnegJohAc5QSFhkpjwT8hnBBx62qNJGHkiwejixhn2uHbmq8w61rwf9r3SYjuM3mUtay",
  "key11": "5rb8PFSH2mUUvSZP1Ry4a6jp1EbuXWgHTyevYCbhjJ1UgARVhbNsJMtoMnzrJPCAweRLxfyXCQWbm7JCZChbucvi",
  "key12": "5vuQdLSsLnonwuZ7aiwSRR1rhQCEkSq1sjSG8fhTctTqmu5D4y23dYPiyqvrYhEPjM9scuDBXxjt5itiLzS3PKox",
  "key13": "QceqUceM2P2tSujjjHb3m8dajs5tBj2UEGM4A6mAwFdDKjLEvzRBMJs4c5khajaREmpxTxatTsTvyDjTMs2wL16",
  "key14": "2qDGTtfkF4MoGVouCzYsV1NnJAGe8D74DYAFqtycm2XA2EXQ6sz2LVRqQNKh7MkDSp9cSCeK1LExo44B81nPuG33",
  "key15": "4NiVP3q1dUKKQdmwW76rhxMC8XfiPipGLKJKHfffQdbixnpkwSEo5ohkdWnpNxTfVKDEQbUtWL5JkhqH9tXDWkrS",
  "key16": "2yCKFDVv8GidKtdH9LNhvxfnQBJjKT94UGzBTP9rSXbgv6C8nwnc62egiympZWsWhZvhQFniQPc7FRCLG8SMu2T3",
  "key17": "67WZoJ516ArCR4cdTVaQu6c7sTgc72YxDuLkrSHpqaMea2xMcRWSkcSvnmkbM4CxCJSrQ2M1acHzLz8SFUyMdv5F",
  "key18": "5koqCj5XadT1hmjA1JcAzPJoRg3r9MnnAJEaF3AogPVAJymsZgKrUMfNFRMFUFF8VLuPyre3WQ5wMicBpGjXNt29",
  "key19": "4KfRuU68JNZrtdATTGABnouvmf44k993wnnHEWWUWxYgCTtZwydJHN5ahmzkE1JSWEJeMd5Eg9nFUYkcn6tTkptK",
  "key20": "3s8qiCFejzkUJotWDvNKb4HvXv9bYtextwGYWvfQ9k3kHgPCV7dREjLLM7gsnmFeMHS91gik1CELWUtyTQpga92N",
  "key21": "oqMmERRxRDAm8z93rZkahpYcCcdsjA33YyEpbG5YGffLoUUyN6Q2j6coR5tTNovVBkyd5JiPNEgRa8GpLWuQNBV",
  "key22": "1p14ftyDqCdYEA5v3nDasXRfDGqg8S2DxB8MyxTG4bafBLL1ByRWdibVMf5h23BQCZY5yYHLAKQemJYWwj3Hj81",
  "key23": "44hFB2nJ66XEb2GEmB4jauchTJRbYNJD5p1PGALTPpad6YSgJZgNpLu8gwFgCKmEHoLjjvK8EbRC9cRh5NchJDw1",
  "key24": "4VrTozP94X78K68ougZWefi8n6L4er2sLzUd3qsXtTtYMrdd1HrNYWNX7y6skuvLW2zdsQ5VfYm5qVHbH2cYe5nt",
  "key25": "3tH21jNyywDpBJvpV6UgUx2QTCdptg6VpoPRSkWk8v133ycTJJrUconWZ8uw47dWkgHN4w7wbrd7mmFSA5SQGXAY",
  "key26": "55ASrKaz7byZa6SGB7ub8QW5BSV3QxrnQADZ6HaEczfmzsJCCMQuUpGanQ5Dt3rsXjV3V3e9NGqXnzf9BwtkBfuA",
  "key27": "284ca4KWjDzaZvV9h9zc1Rwc2mJbEpuDNMamByP7yxhkYmdAH4bnJKcm9qpu1G3hyyLhC7g5F2sFMsTNfuHLVpCr",
  "key28": "FkroCEgCpQ1KGKDpdXf2DQT39GkgbCLov1ZkFNxyg1F5UV46PuEozV2zkR5JhjTG1mCT4XyuwpAVu2rRWEW7PWw",
  "key29": "LGwU6PZtoTWC1QSqqefjRiD16kx5cjupWGPvyZBggbRiadjrhWCVpfYfD8ijGAADaNztyCb7Hd4qc5v275S2jD4",
  "key30": "cKwKUAoaqk5YGg2cEj1XS1rW2AKWvKqtkKfJNyiwrKvtPyESHwvGAudw9FtXHEDv87vCwSNpTXbprkfwktg1CHg",
  "key31": "3Q7ofDFFD6oRVF3sjvdppqb3SkX8p278Yv1geC6HSr2cjXUbiWj7LxcTKZZv2bV3Xg7kXzCqhwszK2U7YmFhUywx",
  "key32": "4xGnBwtpGK9oZpCEVhpSyBypEgNTUkMQx2QsURq8ukGhjxc1ZR6owKoD2bWrupnpMh7XEyGdb9CGsyaE2ph6Qxrz",
  "key33": "3w1RYJBVkDvfD1HuSTxNpCRwgpvJnsWb5cxqAarKhKZ6AsAUwtaY53sEYToLgSTUP5yN1PnBiPCEMVwdBqTK6bP3",
  "key34": "4yZJk5NCgTz7K3XCa2URLFwxRFcRq9V8nsSCiYBiQDnGhNBab7VVr3c5VtdSWb8vRFfuYcdCKhbZmP7RnRngQ8WA",
  "key35": "34sNn9zLFkhhwrtjXhtbdBScvCV5RmtAy67tMtEC1mgYpaS5Mjw3UZcFUvKwZjkW6Gf3sk6kLo2LS629BX879C7H",
  "key36": "3DY2Svjhbdn57n1VRXYE9JTHNt4Mq96fA2ZM42SRL4cjnNY159e8woS5hbPWMdKYCwXH2NU9DSvWyQ1mGyMmKFFL",
  "key37": "3uEom2NLhgs7nLByCQLHxLaXqZRbPBpgmgDXyEEiyKRjwwGMq7vqw4LyftsLu9QfSgMbjQ3momYToMfV1s422fCw",
  "key38": "2s4TGyVTWj14j6oVvWYfB7XESQ69ZVccCu5HC22h9VEvRGJugDvq34aq4HFukyvWZiRVcCxz76b37Bo4EctjhC9n",
  "key39": "PD3pqC3cYTjCjzaVHR17Y7nnKUmT6WPFF7NtMzaaRu24QLi2rqrRocKprNiuGJ6scz8N829541muvd1JgeVbnfB"
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
