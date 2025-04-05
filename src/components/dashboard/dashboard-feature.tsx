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
    "2bsmKkHPG97R6LcrXQ8cS3pDTXkZEWnKA9jFBdoLRj4ug2DXBA63pk3Kf9AEhhejcY98hjpzxfrZ1Phs92tjQ2oF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxwXWjna3UkJrgF2DrtoRf99W7C6DcC2VPccFKjQXVksT4TfXJNYBCBYhVed6cjCDw3RUYiEqGDuvM3mvGMMTpc",
  "key1": "vPnNg2m4tyS7rSD1vmrBDWCHLSC6vS9nmGxLun9kHRBKyM9S3a8nDa5ijbnkZZTisZgEc6XrPdRLvQVVkpbspJq",
  "key2": "33ZbPEKbp1npHFBnBkP2Rx6GRNeSzqHREWoHGaDQWNkurS6nmHGQLFmXnxNfmkFvQCw2qDzR3HYSWz7iSSh4oe7A",
  "key3": "4ssTBBYRHRivPrdq3VtUP9zRKveFbD8cVLkgJf56mGg8UPQRPvUrYRy47HsV9ywxuUZgV5qNDqYFDurgzzkGUhrf",
  "key4": "29xkWusuFmhpLpgBvPZbwzPkCnETjW34pSqfcoTAKVn4LXB4eaxVp1Ggz2NAKUaxd7N7i5ZHLw1A44AVgHY2XHir",
  "key5": "599nmXSZoKgJX9LVqYwYw3dJD5hB8dKDRSBLqDEDVQsgcpDC6MgkVZaPspAp4eKe4c41rYrMx38HBsEoC5qfctP4",
  "key6": "5DLxn8G8q7KLZYXtwBLqhoy9rLzMMWBoTEY2Pj7z8DwLEUbEuWH96Q8fX45B7PVWX7Nt5xGKdoSYqkVuD7JVvM9U",
  "key7": "NkJejGad7EmPx8nBBT8ub48xAXVHxFE1BR9CQDsM36TvZwzNFmNeTH4W56jf5LZ5XUYu7iNWq9K8ji2LMLr545W",
  "key8": "36JvdPcG8Z9kfJUzjTe66AArBRSRBe44aG6S5mprDU3UgPP8veGx5aZ77bF3qS724GPeDf8t9zHmZYyXTQYc65f6",
  "key9": "ywDLzWvXfiFGdMh1a9iB8Jpp7gguX4WUz2B8UvTdfS7mdbxGTccGEJogvKqY7JbwgT653SXoUKXMLuz9XE3sjVr",
  "key10": "4u7nRiDpRsaizr6VgF2NdoPjqutR2LQ1LX9zEVSzwzasYuFv5hKRsCUB6pNb1NMN72FwGukqTD7cVP76ZcdnDFu7",
  "key11": "5d7cb2fitCPYfWorspPYoJoqpNBjUTuaa1t2xnVti2wy17gc5dJUzK4UUDWTyWEm2v646n749gT33j7DKjLndAfS",
  "key12": "994zUrMHeGzpVbqPwPon8idpFtY2LviaWz6yHFLC5V33jihwD5y6ctnjdzrggawTHAbPbZeqmMTgNTZ5ZNcFB5C",
  "key13": "3i66KbRHfHJE4ETxeufaDYZqqt1L4XR5Nyxt5reTttNZfbxhGh5tjXtD8BAWNzab43MHrfSdxYbj8G4FN9TeR49s",
  "key14": "CbExPNG759bKtbpzsQhr25Pj7Dc1yUejAHLQhd9srcxsJJQxSKRLyt683N1hdUj6VCCsazNKhRwgjugFby61egW",
  "key15": "3QSUbUaruYHQHGVqx6fezonGGp1Cu1h9YmfpWEgXoNm9Wr1hFTkAUF9X9aTW3jz33XH7TJb6SFQ6F272ZuBxwRHs",
  "key16": "4vTc9NRcDuxK9Nt6L6n1Y7c2XsXLujkrvFWXj63feytVvZLv3xzoBz6tJXVQzZhf8nNU8cmjjXur7vkLMdJneMdg",
  "key17": "2kGStK1vTcBfU2uJ5BpRsujkqKUpy56z3LrhnyBtiHmTqJXv1PRxjM8qSG7Xfg9Gng3hyPuDvqTZ1FzSB7rPjg5M",
  "key18": "3PKJv9SgxYh4haQzhkepx9Bn3q3vHZqkbNDa8r9FWcMgEYQEFB9Bs8SrAdZPg35NgWHFd1FeCF1NFtUtYjNzbEoE",
  "key19": "2gvob5JzAeyfuDCKbgjg8vHsgC7wmwkjZnWtHm3s6cgt3tLucoHEWCaA9a2nvKNmUxqpfTcVemNaSueHvtmpoKd7",
  "key20": "4PPwi5qNizxJTMMv4pbiw5h2N5D9iUx2bvDgXFLh9TZTLvcSjEHCDU2qVpMZVKd6h8nXvFX76MnxyRVvfzWiyK22",
  "key21": "62vKS14f4nP9w27mEDZz5nJ2xVLjoWkVWeJ24FVyoyo8ZoFazTkv8kRT81V4FJ2gCexUsieM8uBNUV4ryXXdyuJm",
  "key22": "4P9NZsi1yiE5v3j6dypPRfDmEcAbRCZiTdLdjm8sxoLSfZHHd4y1zk8oq33BjHKzHEJh2k9v19WiJdKTGGWPDVRB",
  "key23": "21eWjYnBw8GhZaiqrWTmbXu5UoDyEVE315TVL2g65D3tGMR4oxmv4Zdd7p35iPkcctcczQaGWMz3u2CWiebjYzbB",
  "key24": "53ZH5vq1yi6DPbwWgc8dSfAaAvcKqaT9RXQ9vZrBHAChFS17q5pwwtwdbqkyAr15CBsidzJ7SKissaVunjMb6GQU",
  "key25": "2chDHQ5G7fpERfuHvinuiGEwcGWFZWz8NWRL9H8Ea8jo36wAPpYoRBX1vRUckmZ6ZJoo26KTm7D6msLHeGfyFea9",
  "key26": "4WkCJrxcUo8Ap77XRqiVWGcpeqKW8AvNNST79TPz5maqknZMPS7aKcYqTvifgnMWkYDCrk2Cm5qn6VNYj4bUvB7i",
  "key27": "3NXFvcj6orxnoeZkPuaQB64Fj25JcXcGVSx9u2hADerhxwQYtTsCELxZY3qhrP93jxofCWZNRERg9UKVKU75Lmbb",
  "key28": "8vyQXZQvvBECMTg8DJ9vUSE79qK9XzMCmdVR1WiKD8PaWrRrpYY4NkmSkFBBX9qbQ8rjQQNZQBL9ziDqYfvmsW4",
  "key29": "2LUN9t5htdZpLcx198QzcAu1aKrKJ2LEufmacMQ4THrQLj9fHhLpEtb1eHE9tYZjcvgTjLcH8eBajj9yqC2XqVsp",
  "key30": "3HVzTcyf5WP5HNjPXs5VVKRFDTwZiPhQN1dVCfzTkjyQv35mnXJup2N5XVrEExV39yHij5rcdFeJ3Pn1rsaHEvX",
  "key31": "cUNZQQM4g1ATKsN7buv5fyNKhVXynuj4NgzfMNGLj6cPEVQxRM6aNmtg5CeHt7gRkKADPUZUwjMeuZGLiW7mgAU",
  "key32": "3vpDeiP7gv4Edysvy7vT9QTgKRkTUkT76VBLVjiN7qez2vrCfjrov1Ru7h8o7EKvvLjWewviMktfM2My2fCZb59h",
  "key33": "skBwA7Emh6eJYkkoPMG8FqAsNkmbN9iWyFvRgVeFqywxejH9FQmeAmCsDkSUrhWZTC9PYdVeEhop3WALmijEBua",
  "key34": "3pW4xwdfs2iHLj35npbH5gegBiCZLnFCamkkuG4TygXKztpQSF5jhZPrcB723eWS39pCLUn9bTnknN5mK7rvFb5z",
  "key35": "pV7UqSQijLpmbPUuhuAc7dBTyMuuz1cEvCDUR1Z5VRKwm6AcmLMGrVdKMhyYsGMKh5cwVmhdBPxpmnD8yLmKqkb",
  "key36": "4ZkWXuzRAbKvPmvpQqLDhXdfdQuxoFxHcfcyJvwGrPfA4mgki6h8Cut9RFqMvefyF1kyVeMtomAEwBiwMjbPk74S",
  "key37": "2AjgbAdG762RhrUKE4ViNHRAgfuMEiSDmxi52HDbaduSVMbtYnBJjkq4JgYKy9Z5uFD5qbLW7dxUvdhEVo6v5fvN",
  "key38": "4gScKBHJrF1WELUgC2TNgZg5pWRwYPbjjwjRZMNnf5y5TiGy5CGeZLuGAa5XQHCCn763cdxMsXphY3LzJRxqd1Zh",
  "key39": "46CHWM7JioxDwoGgE5sPbpUH117x7vBtXRBbFoUdNJ2BazH3pmkkngDpz9453J1Q3QTLampeM3UY66tfY6fub4Jc",
  "key40": "4ZSVxU1rCskXsQK1FLfjBBGc22rsFN6HLERFoar78R7ibckjgrxvsr6YhpRcwiNNhKUnspuF3Z2TshQgphxZc83m"
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
