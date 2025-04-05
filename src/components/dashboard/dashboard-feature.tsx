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
    "657vUrudUitqZ3VWPBqMyyccL1uy6Ys1TfXftpoiVcxx9be4rae5FcDz2PzfrgvAtmECe9sBrKt1Ze1nDyDDnYZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mH3ogkCrdAwWh4eg1vQYBgjDmB4nBrjLZQhveSQEgrWPfUnNJkY71dYaYDN2nxnr6CoQEnXLM8MufgGrwpJmcRh",
  "key1": "3epczER8egd3kJyaebyYhZF5cnZPUdjhg5Ds6YoSCtdf8enKunEL7YWMdCuGgcmhDryFrD3nJSCHExkUs5xFN2Wk",
  "key2": "2byfjBRiCLa6Jh5KKV1cXHePejyNMz8mw641obGGGoY3xdTJTQ8fYCffYtiHyeGtDN3WfydSpe1YA4uksBmrMi1f",
  "key3": "5b1oAHbMesNddF9pPmaXSCPdYihks7eurwVu9qkeCzJS4fhmdasrpc1AdpvTaiEkkjHwL25JfqExt97KscqEtxNG",
  "key4": "3pnt8jGxyt6VHZ1Lad3wcKBtxzmgN8L44iGgAGF6PLCNV5tbPY1uJSb6SRdMbMWwVr29E4FGkiEvbrKzYJ1rwqJr",
  "key5": "54Xkn7gyNCg4MtSAXe74ChyD276dp2zZvwTwHXkqCzyw9hyE6H1KiJzFFYqmPpBRmA2FpLopBpWKcWijoXDZSTnH",
  "key6": "3JMEQKWRtAGiddMYcVuAs7pg4MaCqgmghDazyt3VoCCY7MXXow9mdTpXBGdp6kxptUSyEYmKkLg9axEHqFnzC4LN",
  "key7": "LR57CLivSAcHxMJzz8bGNb4uYvjBKsJtZUXTT326rFdCsezKprkun6ybfsYVp2iKWncwLgBPpvV5CggvrhDHEJY",
  "key8": "2LnV3465pi5eZ5rJAaudLqa4XgZLcMhwKus3x7FnyUMe4eFNi8PnWMF4xE8tJ1U7mFfZ8zU8aRg77xt6qbkJ7dq2",
  "key9": "4vi9gRMXtd6u48q1wwTq1WkLrPdsZy82ohpUVPgmD92eHrEUBfysV9GeRtttiaeFA7qU6ewKPNRGXaFfDh6EY7Xq",
  "key10": "NhWZSfpDELAkao93UWGvtKmEKgcQhQHKf1xojtVLK1iCw2DozQtxrJ1R6JDTL22St4zSoiueMcyPjswN62514fR",
  "key11": "41e1Dcq3Qdx8fJhgckgssCuYRdnBZLK8dBimJVKuPmrfHhkwPBArecgi4LSugRMUXEuh9xVniNtksTJR9aKw6oyB",
  "key12": "4EgHzoxugwUYfAjB721jYFLAYMDKDFmJrmphkfm1zkoWXTFW9YhQJtfnrEx7FYdRYqsN8m7q25jCQj1NCH5fnzM9",
  "key13": "2zSXUfxf2nBtea7EjizjyFpxqhpAaxZm1qDcGzerT3GXqAgPxTb593VLVecNWevBkzbvv2dTF5yFrWm7YMQ9HutE",
  "key14": "5NgqwH1CfhMjSw6ZVvudQojQBehvPaimSYk64QvuKxoNnGfdfz73yvLQ4j383JCUshnp45k6oYEe3tSMYYHEEdys",
  "key15": "3d9FpV34fuyiYXJ57Gm7n8zSW4mTpxHK3eH8sWuf7rZtVDgyrsHbRa2vfzLUCCEXytorYZbGg8fX9DEbt4oEL1L4",
  "key16": "DQ3XKXGv7fs32dJaeKRBDETeyjgUWFjhzCRhy14EXRA8JJ4ZVrQSEHCKaTQkNpXxHctapsDSMRPKyXgUu1n43NN",
  "key17": "p74uQpHAo7S6kdFLbxbFiiZSAfTAzT8L27j793wwBNRUUrnL4NA2L7peTL66MTkhyszPy7N3HmKzU81BqM1XcAt",
  "key18": "5kVCv7s82WdWX1fG9C3M3EetmSGvFy8nouAEtPjcGZpabjfsPBKQdZtCmf4qpz5r7vPpYt3GxQFP6KjsTMXRynrG",
  "key19": "39wMBjViu1S5HE8bGpNGypN986SjYFbviPM4LVCNTn7V8ctQRskxG8QcxqEMCom6NkLAteh5YnKh1cxWNdZ7ZhiV",
  "key20": "kq5XDKx9scf5j4JiH5D4iKiYgdVDnW8dtcpR2Ux9BqBBwQHBW7pj5BjJ1KqompdLdigVACQU2btg4jj8t9VQSyQ",
  "key21": "2eMzRQusD8EPE6Yq7b8toJLGeGfwMSHhPgoVysiK4yvfq8jucNJscEjjtT6WarjkthdGxcN1hZVkNANcbA19rs68",
  "key22": "dH5QpHQnEZGGU5nDwzDpuST2BGJratbsE2maqhk3cQu2cmJpoHTm3RGZ36nvJ27aQZShoZvWFJgntdpZRaLZGxv",
  "key23": "2U3U4QG2XWzaufLU4mgwvFxzbfP9cfH7XyATRGMBP2RVfHFgrNiDVL8rAgG363r8o7S9oQTPKArV6oc42Vso2jKC",
  "key24": "3D7p9PEsHd71Cb6JjVTbdVojxJjJurCFkAaa2XkihVNV7mzre5RB2HZX6WGmzBhmept6eWyPZKRV7rTYcQziBXEM",
  "key25": "2i7BPKf35ioz53Zo9kKRvNm1epzWaB6ezBj3wD27gCyroFsJ68whJ84m8YC1S9Ruv4Lp7tZDrp5Rh6qz5q9CK8cT",
  "key26": "4WZeCPzRgep4k1XFDgJztTCdjrmVNwzFMCNb8NzB61RGgqwux1JzQMWSSGaBeJXXK4SHWCptws4jNRQYHdw8ZbX",
  "key27": "4cMBYmfDwNWwshJ6NwsGNT45cGxjwHEctmdsGM9EbXBkXih7V4vbdnqTHHLPLhkuXTWrrMzHrXNTuECLKb9JCuSB",
  "key28": "3nE7eHBiMPMPZihmjYiEa1GJ8qF6rEzeEDhLM3TxuHqxi8LJT7VWLM8Yz1QysEXhRdXVL46WUyWkv3SBTcjYf7so",
  "key29": "4a5k89cf8eC9x3AFwotWbaWs7chbNK5jHkzVsSTeFTWNLb8xxtzohC1PmZ5viMHB4GiVtp2YgTLHDFHj6ghnf5aF",
  "key30": "5AhRKpT3F3nJwaw2M3z3mW5sK17vJ74CanyM5T4wpKx9qRDBihewcxYgwPTh6qzfgkfdKbNsKHBrHbLsDLNVcgJE",
  "key31": "3prrFhAkUg7DFbstwPMWouw55FqTpa5pbYDL8RZf9L1CQFpPZP5pxtP2FahB8r1fW2mUoE82RpWngBQmk24ntdE9",
  "key32": "2cmm3SXY5LffxqqvPU1XfHUXs5ypVstvAFKTPaqrAK6UKBXRMN6KBDtrdjwmQiJ7UYXa5dKyj7KHnNi3EDv1AsVQ",
  "key33": "4SKDNnuhnwQYRSqpR8iQi96VAxcJiLkKccgq53s44LVX7eBNZnJUfLUqXUAbBV9VGJBmQ1iyWzC8dT3zRQXwuD2U",
  "key34": "2p9yMStSZs438psNCR1j37iRJ795obTAtd7zFCGH6zqSoWzVgp1chmdDcU2oaHvamy3dK1tqG5NRZfefkN4PuT5",
  "key35": "3kgjP2bhXKHFhBvz41ob6UYT3dcAqCPZ2cGKveG1FX6X5oQjaAaF5iTbz86aZFsm1FZ7SXsPBkRRWNPfxm6CcQfV",
  "key36": "57sHKVspexRzTkJVQyvQgFBf1sUA2Dcr2161t9hHTQJCrEXU6WH38zwsRi1LMfsy8pjcYZyp919x5Q54rUB5rW9U",
  "key37": "4XsX2CdP1TH1yrYZNyqMUCMr9GpABEKpEEAgxnSgpgpw86x7KvaYVHJLisVaiPkLniGbfQTDUiPrSDLN2Vpz7tgC",
  "key38": "2nCtX5RWbCT1CL5hCDixV6PoDqQ5RtRxaP8ppxF6bMMNo1Bpa4GahpoZQNUv27fjqdRZZqN5sbdsywSVxg6wzeyJ",
  "key39": "2HmzeBfHqaDe9simRNoKqovoHmNUwcHGY89cF7t1sixup6YmwptySfSEpHu1rdsJX8SPxrrLTZ5T7GLXDvLcQBxa",
  "key40": "2kqS2a3X2Sy6DWQvrbapDmLbmCTbQxL7mF4B11NNDXem8B3ZaqQfNKiyj8GAa8LvumtoTXfWGhcvGA9SF5yNh7gB",
  "key41": "5YYHMpaqeJXKyLAMcY3udXnXGrfJqm6N1mQ9Rw7fv6B1wHxywL6B5bLKSmyXYeAe7WjGpvqBFL2gVVkxSgLVFbtJ",
  "key42": "4mAewz6tBFBepRoqY2kHQ2DXh3pmEETDmiFDhXKmX9VS35MUw9aP3seayvX3kYUoUkBhN3bMP8x5u5Ymwc5CdBgT"
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
