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
    "4WjRF2ZLv942dHarpbF6xtJxGM9uAc3eiZafmdDsnd2wip3o5gpmdUbGnD2kqBqdqzdTGLT4EVC2qhkrJZraAzk6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3urDVrdzXGZBrqkUf1GT5aY5gUvvCn9XJNzr65PjjKVL1LdeFXBFbgwotr79619L2c2TtySt23KfWTUoUiYZX38R",
  "key1": "24oYdQ6XqcYWTAF4gbSFbhREoonvbkGLUi5oxDyvAvbW4vjEnb6qGaycpK1aKoz4XFbib5YgciZWuFyK95YZ4eLt",
  "key2": "GHzHgQeFKVNiZj9HLHpSQuAT7uYNHLiQrySjbGgCKiZQkpaZXyK3c4jX8N8jHi99ipxGap3ZjxTbX94JqsHw6an",
  "key3": "2ck3Ev59BfeK2QZfNChnfZZKwqQASJL1pXnRWyDjkoRgugdGpfKBiuHV3dBpg6Gxb8qWNTj56zDZGJB6CbbNZ5cW",
  "key4": "Kcty2sn4qYqiAStrhTNBrNQwbwarJExkzabuAyp5zs2sUhZx2NSjCGcDTEfNg6nMc6JWMea9qNJgtNGEAU35Bfo",
  "key5": "Q9dy51gvz8ETf1EhjyyLrPebxdA2HHiXiNzm7vY3WQszDSJoUaNK4PYkNzvjmcYLqoUmFsZhexayxbKtD2h2bM2",
  "key6": "4qaJUHitCEd6etrg1y3wJyfJhj3VadybKiVrSbztPBWk7LmQqHvncG9gvCvQA8rMHd1oMxLhMAgp7z5ggnniMpNy",
  "key7": "5BghkEVxGXUEE5kT8JndY3YYzASegAQ4WoTbdRMNuGP4t2pMciWFobrmA36hGhKsH2CTYZTBZYHNtNEL8vSd7i2b",
  "key8": "4147R5d3ufADR8ZuuKPqshMu6LWT6siNzcXR1J3eBfUJm4Qc698SjUureFtMCvRNzb7Hstksexv9tEn1P2WEhmBg",
  "key9": "3NEcyGMMApQWXDE5vZkSJPVGQJ2WADBTyQomUMoHMvUdFYJTsbWoYQZeU3mqv7GJEqPxJCLbrtGigKoxpyytPXeg",
  "key10": "3sZQsPhfd19Uni817tfL6NBoSzGFa5cByhj2sPxvnRMZFyQNf9ebcDnaRGJWQg7QLK9VF8MGibodByh34eFsxnwo",
  "key11": "4aZS4zbjytZfzPfSasCchzQojrKBQ2ivVF1zELzqVhCE9uBuWuse4j8j1ssv1A2Kb4Y4cEudhjygLB9Fvya4A3Ak",
  "key12": "2eMj4cpFq1fPHzC4Fy6XfCqF7raxebwFUS3jWQhHmzuzedBHyJJYZKEagHc56VpbnpFmYkZs4dkUxLCrhWwVV54o",
  "key13": "58RaSY5yXvFpdCdcghFyk1EQD9wNjcpJ74iPfcURPwWmTRt4EaSPfAVJsJ1YJBJYWkPDR2EMmi5rG6NkmG7D4eeG",
  "key14": "5z2m8hAo9AyeHby8baLmy3wjKrQK2G6xa1LgfDMfBeLmDuwViVNAj4o7egke6XLBKKyPaJwFdornY7EjfwkTPioc",
  "key15": "8nqrm9vhcTdr56i8NcNQXNVdk3Wi5sADy8D41FdxWuNcQmBHEh5opjvgKzaJWn3PRYaFyELnUsUN8jKHBZAyzre",
  "key16": "2S3cgYwKNP5BzZc7iFX7Q5kPCVUZcBukMxQz7BkhMYgVNMUPWFoo5Ct5j2vPStBGGH9pbEEVMMxmik4cPjkh49jo",
  "key17": "5wnNzu23EhnbA8DsJ6T4GCP1zGtwcULgQ83w1pnG8qYx9wvLqCMuzBvDZN3janX55QUcAb3RBbSLRQJgwLgUqmh5",
  "key18": "333Yv8wD8rJyy1qJsbYa5Qa3M7Nst6K5x1CHe9v5LPuZqrX61YA18iaqdGSQUB17Pyv1sNt4Byt782qQ18kC14ib",
  "key19": "36npjDn4jZ6fsbSfYGv2gwo4NxKq31ecutSHNqn7qyTEufJwYELTbNFUQmRu56vL1VU3L2rxZyVkHbsqb5kq2JKN",
  "key20": "2D6SJw9c7vr4fYYmArHxzPRDHcttZfkHRBmRRi57t8umQqzoZBam3Lka42NKtxBeTdzbv4HLtwgMg29ewMRsK6sb",
  "key21": "3zuCPD4KLK1pku5Ey75kbErbnxKhfQXFRmbPbsZwbfKmT3pRqGDBv6jkDCE3WT1KjYzaX5fS31PcurKyp32iJszq",
  "key22": "wD3NTr2NPesUDnnTBsVv3BAB8Hc3WPtyaagyGhVSU3PCuysrQ8x4x9eSAEwU1Dv7dapeKv3re7T5t7VEYKAyVL2",
  "key23": "iFuL8n8HnfpfEXroYBbm2G7vQ3nz9Dx2KayXhvEgwAjAc1VdByNgVDHpqeHSnvx7ZaV4snPcRX9g5uD7KXZ4tVv",
  "key24": "nicsX2THFmBFK2GEJLfJc6ytXngDsdvJAzADtytsEgkybWE3eiaxjsYDoHzwKU5Q6xcTVmUycS8a786RbPx3qTm",
  "key25": "2HsEdvq2KH7ALBvMR5qJE7g48paQLF5qYfCPvX64tmzKsyN5ZJXREHkWEn8PRbYkxs21NVyZgAP9JLXMG14BcF8L",
  "key26": "532vJTEnRcuVzHJFe2GsEgPsz9y5dCxezoC56PPkw44jo3FEYeG4iLsufe1jRULDes5czGj4NtSE5SHT66srGHcf",
  "key27": "2SempBEg7RHdKwNHKKJPbZjs1iQZsd51dpZty2xY76pNKVDRU6eDxgxkk5Ldc7yW2UgyZZMFdMLKYEzFA3EuDpZP",
  "key28": "4h1vCUYM4gPtywunVVsixUh4G3u7cFLLBhhFLgSgjhw2xXW5GcKy7sCt8zCjpMQAxedsRbACYtxDR7VU1sZs4r8V",
  "key29": "3LkTFSKML4twM6vKMSwjhxXAHFU7vm2agD5TcLRwmhg39ZQ9uGHkJSUizSJT2mNhN32MhoRoTZiyyVciP7usg15w",
  "key30": "jwaj1AvWeziQb2Q9Mp3c6ELuArKfHk26oXimAfQhhxHBHm4RNNKsm3yXL76mfGdtkdzPpDfAVfcL8xCFRRRa2h1",
  "key31": "rs5HvMquam1abXgU2Mj6KLTVGjaUQqbj6wKEUeW6qgW969iqnnC6cBDyXZWkJmusFbEDmSXA34qYCSFG3FZqaW4",
  "key32": "5uyQJsKpuMo7BcmSSWnQKPwL6tMM5ZBx5b4SUi1tHuudB5H5cwkhyEcVDNCJQ4MbU8jdFtxqGpmN1ZpHNq2sw2qo",
  "key33": "3bYQydP6pwwpiGwYPvmbTGh6ALaAYLZrxJZxpnf9e7cEfvDagu6fLHqwQHvWUnjCcH4RgD6mFQD4kbMp8Y5GvES5"
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
