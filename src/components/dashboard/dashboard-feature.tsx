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
    "2znhx1UyxLVqVkkZF3uQ1cqjw7MCUrqKNrN8j1hRngKNxAUkUg1h6iV3Hbzf1BkXjKMkxtdf7TAdXt3eUQCeSfLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gNcpBtcLYBqioQkPsESsAPRhZbNJ1FSfxKNEDWfLCA4PBLWZT5vS25vha8994amkxACyLbrd8qkim3SK7E7VUnm",
  "key1": "JoBBmYBJjnjjRNFNfQpGQiYhnBxUiHUkiNF1kzBELi6Q9Vqtmff2nJXNBUbR7rXv2Y7jBmY68bqDTHzkd4pegSC",
  "key2": "5rJSAwgzBj2ThfGs3sBNo3AjJitVEgS2F32v72M8MEJA3CWyEu1SFCMD9mjrvpbUxSFgpYcurhUbaHqDkv2Dvxdd",
  "key3": "2iDrSh7yHjYJMGGTw2rwiWiLGWD6Ko99VDuEPbF256XuPNUqDbBukG56RM3eofBNsgXcpW5yb4hXEgCucNzr3hzu",
  "key4": "5bdP9Dgm89LPbLFmRhGk911QN4XHtAmy8UjRs3E6Vkb5pq8gd3xh31tyHo2KCjGcYYxFZdfZTspo29da2DFjxnUn",
  "key5": "2kpyxkCTnsm24MVCMgE2d7xGKKGuGCRdxeGzpzT1z8MfCqmmQwg8r727XSsAGBc5QFzNkaiuMneF77GLXxwanNxr",
  "key6": "2G4eV7cuJrdmTi2A66PNg4FeA5XKxwaKeTue1anLGfJsYQSNXXhAbZJKPcY7hkmXjrDCBtfizh9y1ZhUoH3fzWbL",
  "key7": "5NvMnZyrTRKYxaFon3wriXWHx6eztxXufCJjcqGqY6Ksx9zUoPnboCfPxH8hwbL2mf4dpwmq2YDaQWyYqPVMZku3",
  "key8": "pVMVE2rBR2rTHbvXqym74zAJenvMnB9coiWcWisK8Cq7hhphtwVJ7yv2rwFyAPxwe2pBY9b5Z7H3fBGKMEpLBCi",
  "key9": "4wWrDLScWDsVznT6WcvpSwdhCyYA11L8D6teZAQfP4PL9UspN1LWVz5ijMthb1fWesCkm3545pyTZgrtqc7RJ7sE",
  "key10": "3sJBN93HLPK2CUUYQFqk9fmDaG3mQNLfXHhdf3afH4ZpXciSj4p3LveSqGNRt39apUuvoaqEe8UfGniMDRVm3XjB",
  "key11": "3N8Xc82dqBFPoG9SvyNyKYdQtqPimYqHbQZcpG5pvZnAveP5h1tWz158qo5FfmUtoygsA1DrNnqYTFZSMG5997k4",
  "key12": "2frMaeAryMzRHE7p9JW6cAZAURbtmPFdF4nkwusf5wP1zKst15rE66iQHPfxRBL1YeAzthSAh6pxu6MuBFWwH4F4",
  "key13": "44DpBz98QgJ5nt3as17uY9JhXcsXCwx5f2WBuiP1pJyftieVRzA5QqgNSwFFFn1mQxP6vA651DtkZQxZFdgUkcBN",
  "key14": "57eJ4eYPdBhXRC13EXYWrJ9AQzJnyRJPWPm5eppwVYemENg7R5u3yqqpH1hJtSbhiwWgrLXBjNYJXNrx84STLR4e",
  "key15": "5Git6kfC2VAE8BfRLLQMUaVDpYLYgLjFVhKNZookdgVr8LePZbaUgjBn6spcM2CyM89ZzViCviVQGBeDhnjjjCN1",
  "key16": "3opTfj5F8sHMj9K6nPzVrwtaRQsB4yGCgzAeh2wiwgroSqkFBgV3ah6tbexih9EKDUDgf4Qu3WJdH2XkkXZNAdNc",
  "key17": "2VmYkK54zCtgp6XzQ8TpXByhq2tiYNSoBSLpx2k4CQgbSQu3ibMCXpZWBaGDXdrst192zevtpQUQ7d8rfMMawYUF",
  "key18": "4YYappDLrAHbPdGZ88v54vcQJYqiccWJ1PkMcq3jYa6Rh4msFRa6PJ1LpjeQgrRo5ja4Lwd84tdV3TwNobXHqh3Q",
  "key19": "98ZY9ohSKrcM9Cyeb6xuUX53RuZh6cHRRpbnmnw523MABeVUcf36HjTiKFJhFqbCQVcLfLMUre3mokjEpE11wjS",
  "key20": "TNi2X4WgAdGgv5dtqpDSt8rQUs5VBjxG2PpZkBA3ynL4f1UbMzkQG8QiirotNpRog4Pmb5pDnV4Uw8QDUnss7eT",
  "key21": "5mt6nJqmisxZwxwE3bU3rEe9QZdtJzPmTJ7XpwTktREEPqhS9DPgCMLFqWqQ1ZJhLdr6xqV6M8BqLBaDTuGDypvf",
  "key22": "3FK9x4bqLpJkGsnSrJfQHRdwMdxiLd3SZ8rx2Sz9xiPYNK2NRsQtSPxunUGTW7DT6bFmwgEK3FDYU62yz7AjbmvH",
  "key23": "46DYxnqQzSvXYug1oDeTMi3XQ9kTyrBVJRL6MzHR5y1a8eixUoHG5v7gNL5zknd19rZDLA4avVFNcLcRpfLbqMK5",
  "key24": "4iWZgX6ssRwqdfbWGezBvQ7g2AtP4tyz4Rj1yQGWCyo7w8nrscnoWok8zFwZx9BHMFo5u4r1hznH3EYHTVEeYH5x",
  "key25": "23R6GMUETZfCvH145XHM1XebEnrWX2P4pE3gDgr7iWmYUeDJihcz1bmhfMXA9kTyFeaYyEPYJbj4gVTZ8ZK7mUTE"
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
