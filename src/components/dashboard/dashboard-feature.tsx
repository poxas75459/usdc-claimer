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
    "5jJXRAd3ag7XdWy1NBQTyVHRVZcs76NkQQz2VL9UFvvYZtEhX1nr2Pgm7q1MxzPT5LEnDHnUAo85FTNzYJxJTn8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3boTuH2ttuAf1GPQTL4UnpT6cfcDfBKyGwxabYYSFud3Q9rkJ4nLPM9rFUTzQ5ThZwybeQSDrCw5z1mwWrqJsHYV",
  "key1": "27FdZwqdXUNGDaj4zjPy4cF5tSoyF9j5KQ2XpTRUQioUcfw6ZZqSiBfNgsom4VAMJemFQf65cfKXVJs7GMn3ctZe",
  "key2": "NSRBRjxJ9kZvjp8BwRRQsLNnAj1ttqFhhSw66fXk3aWw7TfWmir74LySCrABTyDUEFh3Cvej7zxFPGGcCE8PKA4",
  "key3": "4FDsjecU9UZ6StWUcEHX5eknKiLje1pSf1Ys5tPQz9425zfYgbxDCuQDUsiTRxsV5CuYNtAQReos6qLgDDQ7RZDn",
  "key4": "49Mo8DHGLJPBHtu2YSqJpVXifmgCwPLD4dSkSycEBKYkvUsR9YvXQzCcab8ZdGreKhweexy7RxKDyUw26srpMSgj",
  "key5": "35Xc3tj3bPTcDi4oWdKdxrvWW1RDnmeon2ykfxufS6o5rVzja8smj1sySSWSSHzj2ekrWVnE5fZ1X5Qw5FQeDUZq",
  "key6": "ucaYRppcpoUHxF3c6R6kPXp6hhvqAjQW5Kocy8A2FDX8fXQJhyHACzxn5Y4PGACKwiBaGcWenefcthUDVW9Zcrk",
  "key7": "5VSd11zYdvx15DKEL2Fiprv8hZrF8Lp7PBA8XjWyQ27XTZMgFSQmXov7aBK1eZDipx7DFneVzGbXcQQNjg9oiYLs",
  "key8": "BaLbL4Bxd8NQwvsH1JT3YPw3HgmKxAjPrDF3KfRbWJioqRvA5se8RrqWAQE5yeBySJjLr8Gb6NuZefFyiefzUXu",
  "key9": "3DmddvzcS9uHkMCwuY3xDp1RjaFVJ9BqffQSSW5QH5MsTiZqh895DvNcMNKB1H9wjJMEAnJfLJaFT5JSD3eJjRG3",
  "key10": "3E6t6CScS2VFqoa6NMcouvvXfWpsohLUeS3bAfmYqHrNo5gHMfCqegE4yevnBqEuUpuk39jpQuhqVqucivjw8FXh",
  "key11": "2g8h3LQU5gcKAPMCW5CAmuCawN6eJLa6Vp1SUnq2GGVadTADmPtK9fDRFiqurhbAMqZYf5okVpVqhEZrScPbjpxF",
  "key12": "5cHZyp15LdLSNEQWPhAsxVrwEiPoRtRHfZAFqgaVuL1joU3m4shgVLczjyqbkUr8S9Y8NCK2aTo89MneUXJbmZod",
  "key13": "53arEki7P68aDzxd4inTQfZCJHCT775MLBhnbb8rV3dhppbMMmqQwbnZZZSfC1AQwDF9Ac5uscySkLPxSZEjggBP",
  "key14": "48jxR6zUhiBcjxNyFXVVFsXe6FnSVWEyNaLzSBjH8EpVDXcXCJLuRUgFcC1Zdwtg2XUMeegrbhGdNgJdJodTmAtA",
  "key15": "3jYv17n6MP5fZa4C4ezg8ENRUwsQXgWXBpeabvNdQtj7FvfNRLZ8RisMQeXZrLNiH3X83FfrfTnj6kRqgM7k9KV7",
  "key16": "3D6N4qamZLBd5NXdxbbNqkAkvchpCLBvjmkooxGtLse16NkqGPo8TKknUfvPUf32yDD5xiPUp9fQzjuhvvXzmJTn",
  "key17": "2WGTou5neVyidmpk2MbWvrr2YDyXNvfdzw7N4hPcGE36JfFrjFeGT1UaHBQtBPfTbcApottMEPAGix78sM8SkfgC",
  "key18": "3JoMsk3hT3GE2vMmJm9Z62PbcnFzydagfjrULRXaPMhT9vtgsWLbaMaqCkgg2jRuKgvaQ6v71hcrcijn5dMtKV6T",
  "key19": "3PAt7ZWVJgHEKxJ2hceSD6g9XrgsfnwbMwvuffrTVG7V2mDPkAPocxYUzDbhSrAbXW89CHf77LcQGDKwcEjsnJg",
  "key20": "3HGk9j4LFS6o6Gb1GpaAGo7LxGpnQ8TBX97nwcnqgJgjnz9CKX4xH9j386ojYB3mobVmsF8vjxNiLhQhR1ciiU1J",
  "key21": "3s22AfGe1NQwSQWiw7CC9R2pxtMfNrCEXg21cpQxJH55L3zvftfXTBbbKkPiAWS42awhKBb2WwFo943Wu9BmJYCF",
  "key22": "5jmduz1iiRRmg5VtPCAm9vPLSutkygHVZgKudzJNZm6siACw47VsL4msB391hUbReSYbpL3DwKZCHU5CAxPE8iEm",
  "key23": "5MAngGBUS4zD37JupWFKJjHyrQ1URWwdkxyPxb2Re4hYC6hrhfJptRbLysz1XbVB9UEhfZd8LojG8rjfS5Lj7sic",
  "key24": "Vow3m3AjJnXwxHc1297C57st5Bh7X1qrfU53QMxJ2EyEY6KT2SK1u3JwAjVnf46eYUDpWaW4mpDCsX2g3pP2mmQ",
  "key25": "5qC3NUSqAA26UVQpfdBAp4Lx249u6dYYcASsY1FtqeaKh7GG9sB9mpKXoLFpyDxKuViTPdomfQQGHpHYec4HtxoW",
  "key26": "tiKP2UYwocDFCvQzQybdv2jGKnRpui1vJwRRVeGthWX71PFSi4izuJVuJDijzW26YHy8AGTyZdnrbMe7fkAbBjK",
  "key27": "2XwrPwsGB8JWJjv2ir75nfvAFVD1gdWpniXbEoHSnfizCH6rQFaDWe4FvJntmTm7i86AG76Gayq6Y4BoLUurWfMY",
  "key28": "38AC2pPvHq7nRDcZuGpLHzngX1sHNGhctoytvRgHpgqCquuFqfhjMvm85o9iJa3KBdZXs9dhfT6tCWf8uHPGPNVd",
  "key29": "3fKevfxQ2Qy3VEztwktQmCWcFhkez6KFURnCCMpTrD1A7Ebe4DdG3Du19CiiCbQQ3SSjyNEiZ3f1BVSooGvuD3iG",
  "key30": "5jWjDg5DbyJbPdmNJrb5MCBaQ1dBRpooYMqc361apoJrcnbi3w1usMCWQm9FbRxE5LxBi1LYBjvThFfLMkkyf2KM",
  "key31": "5QnBUbSVvueo3NhKYS3p7MHxanasL1CwNVSWLcUL54oPiU2UuKw1c75a7p5TqbUiyhvX3sMVqLeaWiHsfXUsjake",
  "key32": "5V93wGquyDKmAqS83PXjrEBsNWwpJ8VegktwgJKFFVcizQX6BcRBcx16jJdY64UpLFK5pJvhgc3EoadWSvRy4ikm",
  "key33": "cRzLzJ3CWvjGYQxKytjfnPhHCQT9Tw3ahxpKzG1Xf1fwwUVv3zUoTcskHXGQY8DMuzmMcVLPndnJ7cNKQHUfciY",
  "key34": "5o19E7aff5sgun3gz6h9Nypb4eY9xkQbX47vp3VcNQcF9N4MJQ3oPPxijcH8qVtRSR1FxrP1DE6iAf1fcp5hxakj",
  "key35": "5GeTJiaWFzdzFKT6BdgjaM2sT4v486e1CKnNVgtFYV9Zwf2TdGwCxrigZjXUe5ohStw5SzqnanQKKzrBT1i198aA",
  "key36": "FiehfYmV6Z2NhXi1HxgDrPAHhyoxFbkaZReSv5fQY41zNLfzogLCc4SAmAganT7awfmC5Be7FfdpQGFG5TYkoHU"
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
