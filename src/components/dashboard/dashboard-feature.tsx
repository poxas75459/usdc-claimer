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
    "CG4YHRF6kCzLHMDQLx1AwU6ABpeC5janMXitSzhdcyksXW2nd2izGCtTTJD1DAQBUYsdmd5fTGemWvNjRrgcTUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejQigphoYPmKWvVTMCwpqZFVgPdWMxsADGsTPW9h3XvCfRxsF7nRVoTYx8TCiLhRrbFscKvGr3xQzhSyYcJ3r6M",
  "key1": "21ScyAUHu9dMfMyFLBUc4hNV1HCMiBv7TamVr5SrAkaHkSu19Y6dmpfCQY9EAAVoNxto5jv2nDc3GprFbbaZ9Rjk",
  "key2": "2eneYBgKy43yxQ9K3aqHAWQw9ZFJoRN3EntV7WKCz59RXvP5fgzLqRRbULjeDTmsLxfB3qdo4rsaWChBtWnSGHq1",
  "key3": "245Tmk566u6VhW6hAdm5CPhuMyhaGULoSJeJhUHiYsNctSRygWvYvBx6WGuwDV4GvaFkUR6N6F1xQeF4ceTEvHFg",
  "key4": "S5XCj7ZWo9E6QDpovpQjc8Vj9rY9Wwx2yuWiH74qHsYyaM7NrqFypPTcE2BRy5W18R3uWYLUWibR2bdPmnhHrN1",
  "key5": "3wLkNVD7VqH5tiXYVc1dFKbc5DJeeXKu9g5NCoYKhNU63T8PpAAfv4NdAPwQLLxct7nn9RVrd2SU4DtnjmUHZgHA",
  "key6": "4k2bP7zJi7N1Mob5ocUF294TN8Ns9bwaQpJL1SJixS4T9tKx5B41MjGnSGZpQP7bY7gFFD9rikJsayzcNwPEatS2",
  "key7": "4hsKd7v6uZCo6myehdoUhjkYsHiZLgY3tSjbnrvQ5fnk2KUjUr2QW6iehFqtkM3ZhsgZGCbzqLHP4u4xFAWyyatf",
  "key8": "2yhpgntDNAsvSzexHGEia9b5J3MyH1dS1Qa1dmZCXEsssZ5ohA9CzMvsEdyKmcXf4gi98QnrnkhtLxsjfmnMyRw4",
  "key9": "2g18cAvyq8pGWmMuBhCx1PZcrmcwVA5cx86PZMUWAxvdEA7hoMHn5hoNqWWsksdGFfq2pYpU1y6adYnUtWDJEAZ5",
  "key10": "2daKXvbwpPzap7VHAMWX59q999PEf2nqNDM2AzLygDt9CyMGqjgRgbZYBThJum5EzyfqbqNwb8WZtkaFbb6y5gEA",
  "key11": "3jyytm5kGJ2dgz97tqbeAQPQdq7iM47uhhyX8rNJUpaq471okvsXhbKrkfhbxQ6KB6sNdsLhieTVx6qxvFi2HwG3",
  "key12": "CVPF4Qa2NnSWmHUHhKpYAG4VQ7ydhu6CHZAfkEJT39Fr3dxXSNQGgXqRc96e2ohm9XRXeUnx2z8GUxdFRbAxTnH",
  "key13": "idiFwNBR1syAqvehT2UHq6C4i9bqbLZaWbEeUcLAXwZvPFXrK9VEyg6HA4hwMZWQvJA38CyzJSZa7bJQoRTpd3d",
  "key14": "4VtymVHGH3Xutw1BztrNnFZp7HEQYNbGh4JxgEdDqqtHNdefDkN8fe4VtYLNPLGJKrhz7mm66RysZJNHxerMXBVz",
  "key15": "DhKZeobwMj4pv5PQF5GebtYvfjZpV55puZQDHQGLw8EJb2cvgJymRgGQCWU6Lpk1PqV1CqjmYWkVuUeybXi73od",
  "key16": "erGWoBqqRh8wtn3J9QHXGsiR1uU7CnrHLAtkj41KWN9vt9M2WWfj4fuUH5gsotEBVVRwYD9AbibQdyfapBzvXSz",
  "key17": "4p1AFYYWjiHr1hciR1u8e3NixFJbbgWMNUFjm7LxwkZ6STkcCuefDLU7wSJd6Vjm8v17vvxrVQTYLuQTMi7GdP17",
  "key18": "3oi3W6LK7TY8wY9f1Dkiw82Rg53PzyRM9sjMBW2tWnMdLCMXkJjfg7FW1wr6VFBXbfMYpAQaAbrqz8WjEy4QV8Ah",
  "key19": "42XnkXQabgYyJ4UhWRog5CqvaSvZgBHvyjmh4ff2H71y5kowDSJZaecQXo5V543rqYXfRNgCCAXNdF7W7UiFVTBT",
  "key20": "5ynRaiCBBCNDBkCV8YB3jrU12hSGLWfaCE3JBvLcndEnaoyFHRJfDgu4C8AGhSay5v4jH4L5xPMk5afcWt3h4Meo",
  "key21": "3D9NWiC7nkpQjbasutSTz3JNYQtdejRQCQo6piRWhsxQcvjaQCXkSxFvNCVn96rsB3BgiV8LZjTA2KhEnRz9Cvpp",
  "key22": "5fKYsoth3WW5VjFB8YxL5KoGgRuNognXHubKkj8gjgams5ssCKWR2aPnHqJZegyyvN5Ws4hKZLYkrqzq9xXcX55m",
  "key23": "2sUmkS63GDQeL5BVSAjHKmwCJHXvKKC5YeobguRtFfTa6mxLEvgsCUoBew6mBGYABDPLcYRmbmxnchx3NLGHzxhL",
  "key24": "44fqU8DVFEzBdtENQTRAjYV5CuudigTEGdRVx7zo9LR2sikkcXhzuGPD9Ae6VpRXA86eT6meM7cooqTV7UGKvtoM",
  "key25": "5tSDk2FvwW6WTPjU5NAtu4QHiBBpcJ5sqHooEFdrSTqDgUVPMAjfNVWG6te723F6nMdXmKBTg7vXoNP2zfX9JqUs",
  "key26": "5CDYjVD7NiUr46YATrohM7t8v2GmFCrrBGNAQoiM6uyoftPjf3qS2oqx5jNEvmE6ZBdustT3YCgP9cFFb5fbGSm6",
  "key27": "2bxBMKY4gnPVLRfDepRo7gRsqmHEurdUe95S3E7nU2mkWZLDzcfNEPFzkWZSy3MafAhcgYfRo5rPsHexSxacAx5i",
  "key28": "3CuGRquv7ZGrCWGMX1VWXp1EBuPqe5qiN7FAmbTCCzZDMq1eKFAXf9x87ebeVMKNQ4gTmzv3dNQV5WLqcgy2auBW",
  "key29": "q1UVuaYntzRGVXD695h92YAMMYTfpDd53BeLh8Snt571Q1ULkE6QVwPgzcQgqsRHU5oZwpm8LpTNAp34MAiKqUL",
  "key30": "59BUUK45Hfy5eSb8bTRvb1dk2wqWNmULHopv1Jg4f3q9jBjinNbY8Mb8wJDBgeSoZe2rs1X1zFVjjiFh8Lnf4oC7",
  "key31": "hXheh1YFMPVBUqv5j4j3SWWRjhFMhbzbGfebmLVjyiNTngkBCvcifmUqKHxW3PHuGrtVppfLtbxpQPJxsc8ZUAq",
  "key32": "3WemurATqe8amtAYAFjL1aHNMGxL9nyf4hbR88g5pqvaU4EGxZvr7S1F2ZLFQcnRyPbiHr4iGH7Qwh4x1zYirGrF",
  "key33": "DPdM3Afo8U9SxnNw9AUngEdwF95SvrYkHNdJiE5sWtd77xSq4vjszcDT2w3FJQS1HA1oh5bCN81o8M9bA2KKXdj"
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
