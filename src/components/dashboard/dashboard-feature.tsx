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
    "4cRPNa7o1j6s19GKTXgCRPX5L9wgV6R7ZRAoUyGt1t6NZummnUSX1CCSeSQ6pDGkfFJQGehJyzb9D8XDvzK6rxRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6yJb6cuDVbieZGCw8cvrmK25gBK1h51KxcjhNjK228JTbPGZ7N7XUw7DVWpV3auNW2TcsK7q3VcePeC1BpMpsC",
  "key1": "2xxfWnbnYhTxJZCg95dhSQM3xAR1noGW364RfXpHyTFyXeuVrGD5rfGSJ57dhgxW5K7WPnUFxFsc6skPZMfV1Xgk",
  "key2": "3tqUQVvAtUjqVxpt7ujcLdP5WuHSmfoSi89TZGc6YyCSERABBdzcbByRRYSfcg9xfNdrG9gZ1YnpdM6Czn38fhvC",
  "key3": "1gxgkjQp6GvjcnMiRuoqUt3TxTMxudmzbF53QdvSmXQiDCsTDxR2KCk1SYVGiJq5hWLfTxFs3rYpM57hoBHuw4e",
  "key4": "4z73HbHffDiPqNFzAXrho4wc62RQbStgX6ooec8k6b9yhXi83zvRCzFe9UBBCLWhrpzEHCwPVAf7HnFqPbyNhBaD",
  "key5": "4NVvep6kwakbrHCw6StcjtXABkgwaSbioaY6SK5mhx7MbNT3j1xbjJFTWYFQPb5mP3158qZUA8gocPBv3c8K2j3W",
  "key6": "3m192jo3XKy9cXXd2vmnep7GhtqPSS5orQJRsP7WJx3ma6G1fdJkGvUZjPKALJrmoGjSSpoh7CgjhhEYTgxX48cX",
  "key7": "278VTY62XAgGmTUjFVgpXvdDNyZ1JkKVa6B5PDdArmwhpkCRe48fFpjjWCkBX41QFBTXxTWmrpCSX5wk2sFraNm5",
  "key8": "2SWe1zmSG2bXgCBvzQXrGLSevFJjfD4xGpypiWwYYtVBLWhTujANJeHyN5gndA5fMFHJNqUdT66upL6YxMikf7az",
  "key9": "66m3pTYQ22tyWu66eTTMQVMPgADSCeYKSHUygceYpvctx8DMERRtv5C7i4X3LKdtNkVzRLDbFDNWTLqEAf1Wrgdk",
  "key10": "2hfoFFKV2Lr65qobebtkUDcJYccVWfPMq6URkp2n2v6awGPU6qmVqJfeJd5WQ8y9MQmgS5pGNBbwfRCVpARvw5vF",
  "key11": "4wv58Fm3QZRmZTAa9aEqfhYyTt7sZGdNi5tZFGcQrtitnjDwYoFEYYN1DWinDo9SuRaJfXmbMTH1aK6RknSWU1Un",
  "key12": "ACjGW52oK1sHfW35Tc49n6SyPJu58tGmfdHZBrCWgi6fE1i4NVY1Bk51SBvB4cqQ1ws8YjxMsAYCsopnB58xLBQ",
  "key13": "3P6C33g7pEJVdAcNYML3Hiz2zrYESobMu776QxCggXsw8Dfc5pNoqsuwL4m4EcFgirqxEqvZvZjXtB4CnzwVoUJs",
  "key14": "Koj77V1FaWuXEUrx7Naq5SP6uN14qkkjBqyZvaWr1aNqKj6cgrR9RH4XKJDJcG57YrruxGN3Bz3dAsLh7jM83x3",
  "key15": "3BGGrXR1fRCPaUfhmBd5XtAU1w5HKunpUwiSr5oJwRqR1NrsxVZzYyU3CJqx463RAJJcUtwJaojK3QpGdkvQTQwt",
  "key16": "2NsyKAffZP3E4vAvVDbZwDVwNJSNYLGLJJxuj9sknESCUFedNWkbLnihN7CbEcgaHKY3G4yY2m46dss8kXB8LKRo",
  "key17": "DWV8DSNCGPGyMLXF8ZSyChbE3FYbJBVXDeSFU2jBY6VVfUBj6WUgkXzMsSSdpciZS3cYoTPyjmDY9UApHiZ6M6s",
  "key18": "ShZtpftTxaGVGMdczaizFsHBGWpTiq2LnzqKcyT2owceJ715YBmaz5fJURjpkLmAnuYtPZ4ixrEEcz9bbfgnbsS",
  "key19": "5gdKgvS9xi8pVpjmhiRudRYtsUGpz3uGNz7B7VgjSXhzqznocMWsK8uBd3eUehKn9bjtCtoT7hPD8dhePsSsQwAg",
  "key20": "2Xk7LbJr3n36MuK7Pn4CZdWYWtRxHNktfbSZsBxWWfJfMgXECfMW36HEtmNHNGRaYowynxiLgsKYK1Aarezp73NU",
  "key21": "AwWUpRhF5mJSiHGS6vaBuGsGsMpUUs74bVV1cerQbHiwWYmoJScQMupwsUHtfTfNRa1sfWDScXAWWXyupUbbPKY",
  "key22": "EXGiLRaKSUbeqWQdnbKovtDQYbhnK1KjAP3SxUQSVbr1frwK82WkcWCzaHL2kkBDZHFCcdi23kVk86Yc4SikWVD",
  "key23": "5kpFUKbkmTxFYyVyaUmFJ55USbMGt93fiBhTj8r8bLoFBDrg7bMde6RWnjwYiSZo6sLxZrth9ZKaskTWKDzjHAiF",
  "key24": "BzcVrLKZMoPyTLo5m1RX6KiCUSAYSNioU5HmcWvxNQidAEgccDUijUFfyLCcTseYyd5teCh5ZGKwgCLwpbGfPwb",
  "key25": "5hHELHeXdiTCW3cm7WjPkK2UMR3mki9o5ky2huhKmpKrSdJYTkhtvFaYtzMPsYXo9VdQLv4vKUpbRme9jQGM3igF",
  "key26": "UkiTTb9WXSLwSfUjVjWwBBAcB33HR5ETzgof6LiXNEBnPKc9zKzkcG9hS8WLNcVbwLKyWLDPArffAsG2qM7Gq1P",
  "key27": "5Zf7Y5fma16DppYdjM71QS7DidpEn1oQan7FJzvmx6bcELYvp2cXidEpEg5Goj2s9mxMXhDgZ1fGRuu47nHMUKw8",
  "key28": "5LH11E7TeNZV2ifwu2jYMkxqRJVHExpUSspNg9RYAUkjWmv5WSMRUPoWw9oJPuW1WVNTNZDMfNFx99aitkrgzumx",
  "key29": "4sCUw98n2inpKD3mijW1P5qqAiZpQ6zvqvBL7qYAixQu4ZNLXtEuwfdL3wJTh83tMtdAaY1bskjEJj2cyrXV1DuR",
  "key30": "5CX2YsK1KSfkF1zCLnYXxybvFjkat4vVHPDgui35pB8FE7Rcj8sqoBwmgF6FJYNptwoi7X7zrkKFoyqUCLkBQ8NE",
  "key31": "3EatwwwCHGzhG8J5SiMuZRZ9sfbLSiFGR2J5c22jdjecrMpCvcbHZcFrkf6iLPQhjLqhmB77d4FnE3FQhah8NJKw",
  "key32": "62s7sp8Gz98XsUTGU4pDrxaZN8kC7keMKdsyjDTNd7sKFq2mACNX8jiCySdmbutkosFFy77QGFgLwuYfhvvJKcZA",
  "key33": "vMtAPATikgbZNNthcQpG4ivGYK8NfHxEgkuBspZKkyJdfpidwAmCv7F882zrGLczDSXDddYdiZpvbzQTEQRJ4Fo",
  "key34": "5uEkW6aNxsYu4eJaqiuLEWw8fEDeKq7jqHxJzAmsbwQbwv44qv6GxFyC1ofMYd4GpDxnbcPBXj2pHwxxDyvN7qyM",
  "key35": "3M1jxR7swPdWeZQUfJ25YZw9G6V3BEkUknEwr43vuFnAazCxepuFaLSGfRHWrruXjuAmQUa6PJ7NkPnEs8WwB1xR",
  "key36": "4JcyNewdCUiYS4tBj6J5qYpSfKrHU1BCwxRozEAiuXjsupxz4AdLVDsnYqcxAgykcjWK7sz7BBtsjju8n8FDhsdc",
  "key37": "Vg8YWqvPWztrei7hfjG3sjohJyZxGXoLsayKHjoeyaSrp2JGrD9wZrXuE5NNxCJiuohaJDr8a4Zt5iJH2LXE3Ub",
  "key38": "c7K8GXo7XupHwzXPzeMCEgiiYbWBHgj7V4WUUCsVE39sRRhi359NZpScV1xCHYVMky1Q9G9g3vWzCgdEiTZKCJW",
  "key39": "52fLf341dQSpBk94CiP4E6dJihtxV16kVddEiAviMtbRfPnfL936NrPNLiahP8e3gBn66MZP4gU82ZFiK4VburHs"
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
