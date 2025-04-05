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
    "y6ohSrHZx6nxcCWqU9qJD43GXgm9HFLXdQ9V4cZ2PVCWKhoxrNajNDaujK4G6uLSygbXgMqVyrAUXPf8gYg3Edc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rxc77P1UcobPAsqbVD7nbmgdhNv4THEs8PbWw9yCeqX4rSHCFB3T4wqBxhkzLXZaGWMeDhxAbFc2hZMpoM2UGsr",
  "key1": "j1psYS5xdj8z9pK6DYm9DSWBjCwFoz3zApTXqSXoFyWTjhJ2475nVXdndRo8PAe8Soy6sHuVe6M5cuLVVMVyuzW",
  "key2": "4UtasjiDbNs9MozzD9CqPjqLLSPhttCmWD93bwwPswqyXMmvKHLZAmJyRLjDmRfwwRCpGmnzLyokqwa6EMC56uvm",
  "key3": "4YXRu44zCYVzh2BKoKbGc9tzXuwnGvsFyxYxFwvkc826QcFgkwT6emY7ALDXEXFUo4hRPhgerMGJgiQ9wRVnhnw",
  "key4": "4W3iwvKBqu2rf9VvoCe1f2jW1dNpDghCUAjTEKULd85eFMYh95rrjHguhV2iRtwQh9LjoGYRpTtp4DudEMAnNp3H",
  "key5": "4idU9P66jZXPDVuoZQ4d7YtK8T6NCiWvWyrugPFBMCuxrwuH97MMZMmtWeHMCLTGfHnDWxgAPUvb2P8GMwm1uQNL",
  "key6": "YTwDVGT9HYySSHRHJHhCg8YZxsUL4D3hmhPudFa4d4ipnrX3c3pjveZFazNgJema6qPhUvCZYZ7otKiHbGYNKQu",
  "key7": "4Rvsefg7z6nVc6FtFEKcRRac3GcY63bhD4kNLB2TePSMuyt6GVQiFYAoL9qgzGjZMNPMkdMdH3W2cPh5S2ByfcjA",
  "key8": "2cvE4K7acnMpWVEdSj7H96RuGbPhvqQHQ7HK8Mwk5NzqfNHZfaz4GeG5gSiCEJuHUEd9UEqbC7SE4F18bAsWTUBw",
  "key9": "613Uvdwz71CWEphRyNdXx5CL9NNnF9yWqiwMx3YRDzju3aprgjQehDNJAZ9SuSohBGwoRXtHwnMnLi6CAJF5KrGE",
  "key10": "4pSQTw5MwWDTN276tLfwDiBjXwU3LswCA5uYsasmPLjhQUtS5hFSjfNCioub1JGCvhCGkEJpCgF5FMbu95NMSJ2C",
  "key11": "4NoWk1v9rkvhwHUhwiAUcMR4n5yN1niFQ2zGfJ5xtRHLgeqiRSSLiExy5rjXpm2UHfkweahRKLDvAqyWDnU6U13A",
  "key12": "5vKTCECBziPTxhwnCcE1SE3ou7kd6HA9qpF8qD5Ca5ys5qYY5swLi8BWbPDLDYkBTFQCQMemFMK1iDK5iE9GQk7F",
  "key13": "2HtQZwbitNKCfsJeKVyLtiXT9CEdi3x6ktkRYxjkiaYXJXwH8jT2DpcwfqrBefHzBjwAhGr5ZuFCc1rhJwyGXD1Q",
  "key14": "3GWFqMebEuysY2dfZ4H8sQPbxWDDfifCN5NTDWWmtF3o5AsP8ZPf3c72BVooVkGHGhaDc65xKEiraMqsKhkn92Pk",
  "key15": "5zA7h1zvhQq5EQtpwdafzwbKLzgX7HC2H9z9p2dhTpkxnBk53bCw3zUXhvwJrwujqEiAwTp6kggXJiDuVf8o9PNn",
  "key16": "3CXAZWfRLAZ7LQNqA7NiCqsrDsFyfDdJpYHQkfYcmedyveNLo8MoJ9u634FXG3mbo4BePpAkm4Hyti34aFBiPPjJ",
  "key17": "3yiAuzRtLNyqAsPuehcuncVta5GhD3EuBza2FaDi3x2H7iWDT375at19xnYT48PQdEVzRN7MhLfaMnuBnmukmEX9",
  "key18": "2S4FCEjq7jDR75WjRRPhJngAF8oKZ6Q6393EuJdsGLnBNVmjVSkbCiwZGi7xd6GYkTU1R6fBWQMNGzbpNCiK7wN8",
  "key19": "5zB4s1K4Bh1Ru43KrLdhhwM7gTyCMEcpxDzedF7DaX1zWBVHSmZBuLooX57ZW117SuPofDtpJYwNtV88d5JS2deJ",
  "key20": "aJMg7LjxCtsBzcMNmBKe3NdEFG2E48irWbsDzrZjqAAXwfj6nBATjrQ4F8AUYko8ZFxA8rphjvFDG3HamJHQC4m",
  "key21": "5XsXGWzEdRoEuncgjbkk8TVrbaH5SN6t2iVk6F4NqHEdAbiUvu14YYfDbF1xF82hVifWdnxhR92RhgoP2iD4PiL8",
  "key22": "2o2F4KDiA1m7GUs64gejM8wqCdUmFiAHiLcUPHUoR3ifFL5hA7UCo4ou5NZi6XKTmNEAqZiHwgoTpWb3ykvWfPme",
  "key23": "3apbrYTwcGqyWecjBxvXMQDQajqBR4uyvaukrrTNACGvZERPbZPDt8Hw4gq9FoTWeBYCgBfv1bnqfj6J5F5eC6i9",
  "key24": "3KtGFQj4kK75bNRTvTnm92fjHv9PshJWi9Jy6ZASA7NNuHsoGA2ZACTm6A4ttRQD4VdPRNXRdhNQmum2ynhGMyku",
  "key25": "k8BXFwejCUnhALXUsHxxvZszbYGAahH8dwmL9G734SbHwDuXUYursF4CcoAXBL8a8G4kLtr76MCPCgJ6ydLoQ6u",
  "key26": "GW4prP4CNrgUK2vLEFcTTF95Wy83tQyp2U7daPXFPRt1r6uUzYJ4vBNvKocD3La4SFDAeEbkag9tNC82XMGWZWn",
  "key27": "5dxjENq8AVGjtrhpikoad6275XFGV75rkE7zJhyUoLYrELZ6HxHFRANNR2TJCe9CUuhQaPuLyz5MafGHWuFG9jag",
  "key28": "3RsX7vePPur1BrJknS3vYWXmD6F9hYfuoDW1yZWQ5p7qUmhLKUAhTLNZBRgevRMVnkTtcb74jNC3cJUMzg9Dvqm",
  "key29": "4xgmoUdvMs996JP9yHfePrX4xQ6AohFT5Sws8W2KTV1Gv1UmCw4rBX9byDM49g1VhhnsJGkvbqCj6n9CHFyADvKD",
  "key30": "f7SDR7HuKuEYXyrbSKfNfdUwkAGBKVzZmc65vwXSLnSb6jSLxH5B3h6F1TEs1czKepBGB6GTbJCkEmhdgVTtDJj",
  "key31": "4vWn1WJnQLnnTgWJEvm1WjS6L5mH1UMvo6eparPsHCqgVtFDwSTVdCc6heZf5BVX9DGTCrvBWhtFMTb4LPtMcNmE"
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
