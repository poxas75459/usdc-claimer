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
    "MvCNeJU6R2ExfYH5tR9tYDfKBwRkHbR5Qgxr7Epn5B9DVGukGVct1TTnJacFrG9S9mRUTEicQ4QP3V8pY1NDjZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TEELb93CuDaWhDX9eQzgXkgPPJsmQHzzTFD3tUj7bXqo8p1cCNPH23xeuK9xivSaBnBw55Ann7v9m3uYz1aJYxi",
  "key1": "3o1PiWVs9wm1bMp2eMJEqvFnh7mMbVXdP5eqkEhTVCGW1GmXn8B7MmEUxWnoJQ8g2jjbRuhL4ksAmgER6UK7iU2J",
  "key2": "3E8GiYFyNVk26exeDXybE5usfhezpzZ7MUuxuFz4NBahnspKQgXpAYrJaSyMLAMyaH4cdiagUnCKdZfheugPhEAe",
  "key3": "3jSvM17w3jA4Nw56X77eH5aG3LGwhdAmTaJ9RqpnDPUkv1o95cgiRk2L42Wz6adVFuGDh5QKLMzWgfNJhhMDTKTY",
  "key4": "3NjGmPMirbQPH54YZjSBYPmKW8w92vUJK3fkaRqcV2CHSkv5tYKrRZL17DYTK24qTKyfQ1hfqqJjDmyfDkHGAqnd",
  "key5": "49W3ryvLkFSM7g8jPR5fcoBYfhm3V8mvt3rwh1JgPq18kQVdokKamRzJ83EfpuvoVSGE52GwUBRLbwbqU7hbNgoB",
  "key6": "pZcAEjWcZgG8fyYfsMSiBeEqZJC8PRj4K8yLcWpVPSMfKNG4fc7iJHxNFYexaEKrBoRdU9qVaLyEUoRnPU8nY2h",
  "key7": "ZPfJMgdyBzdfDCUWkbTEifMDCfqwrCHkWULG8Cy5ofZR6LrrB63f4vtZxFCsoC8KvELUABpX666P8vUpugcZhYt",
  "key8": "5AtRo6RQDXD8HYPaGZpEqBkmRVnVP1AM2WjtK3vaRwMdHKFi2TzUUWZhtAgPkb1NVimPkgD6mZKxBzwd38Q4UCjL",
  "key9": "3rLieLWo8Tw3U8RKjtst89FNQmhVLG2SYYS1qCBwwK2VK3FqC41pqCvZsiaCEQoELwJAdRbV9hQZv5tFcohWvvV8",
  "key10": "5kChbUqAHbYvWzJdoGDQLG1sLTZ4We8iZD1xDUJhQneW8Q56Z6hj7KZLUkwpoarY1TB5o3d65GprjYT9bDQEqwSV",
  "key11": "4zSo2V6GhqB8fo4PXizEskNzY5mMDQZhyneavWxoP6m5ftNmceYV7ZY7wXu3dzYEWGwQK8bebuJdJ46HrSfJajvN",
  "key12": "oGmpLK6nFZAhcM4oz7GGcvucjomEnZBXKnyUxxwZHnQGDxFWWme2QGKwHTMQHRCoo5NgBMAW9gC9sPAucqCpbMP",
  "key13": "4zhTDm88Rid9G36oYSkByhpKrdzNt4dtwURiAdoWsYyThw7kDDi6zuA5MN1uctgyK7c99mHSogKJ2FahqvkFFgSG",
  "key14": "3CCfbQSZWAuyaoYcXZsFG5M1maNf6NStgXgFgkhYUXYuyg8UTgvtxJVgAwQiBHS94FsKX9WurUWZAkueuxMXuesJ",
  "key15": "2LE5jKtCpCuGtSwV6KbQgfW7yw1EeKi8sgSM8LYDBtHpzmsxMx29QdjAiMUSzvxnGi7epym8titT1Uaegi5eDqhn",
  "key16": "27z94aUJSXYBSEnTJa1h2fsdRrDpih1f8NyVNrDCSZFd46kcfJq2HVXXFQPA41FxVdG734TspSoawZsvnL7AG7GY",
  "key17": "4dG63kYdaR2Kg9PoeTLFGFwZ8JQExfCJUpiSeEK7ioJX6dcNenvwh9WGkhbnXu2AnxCoupgYMuAZNNvfaMDcJjS2",
  "key18": "5DBaz2V6eeR22xxzDhfRVDZGMcaErtLtbXPwvL7yE8exQaBSPzgk8tjWkEzpYyMCvBkn5iR9QELJ9wehJrhjggQt",
  "key19": "3PhvZWkRxuUeAMmZGCKbUTpUyUk6wQCsrURyimrPbn17iUELcvjFRPju9VoimgxA7qSQFe2yPyKGNSFTz6NVeKHk",
  "key20": "2L38R54LRsavtuj8ARwWdewbVnpY6d9YyupD6dsevvKoFh4tf2pA6AwWUE54xQUfUUtoCdghuYTEPDsWDAnpbwWq",
  "key21": "5FoXHtgZW4c3S9QVdik46zurzheAthmfJJu2QfqDj7Ke3gSSXycaQ1jYgTLbTseNDZ3DQkatgx7ya18Qyw2KkrFY",
  "key22": "39YVy73pUDgZNe8addZ1KUrC5ZE7pq6YMYZonx8vJdPeJrSuS3vqyJKQ134tjhcGeHGFqZWe3kifTxCncb2DyFAs",
  "key23": "5ZuN7cbPN21pYz3zYr8AvTy55h2v1M5cCP3b3MLNQ2xSS62p2Mxx776hk8e6NYzZnWcwg7fQCJY4bK3zw7rMmYdq",
  "key24": "2UJN4BriyKQ6HqV1FN52cC9XZJtMExZpaCeUs46R7156Sj8aq7SzAmbV5GQYDa1vvfn4VCXGT6o5EufvTUQtPQZv",
  "key25": "5QDXqWq5AsKtiR8CVLNLBcvgde6VRhNh3U9GoH6JWR1gmukoV9KmnDUMY56qu3yni4mYC6AjDXuWbq2nqvuHv21g",
  "key26": "2hUYm9LHiKq2Bsztf5STU1hR2sfR4rcYh7HockDf5yfzzpftdNo5bimJBHdNyvgcy4B8ShTywirtsLZHqaR3gsmW",
  "key27": "3QLSKghtGjChkFfSKZkJ4ffwHWfuRJvF5gXFpw2v8J2ExU9eQDpa6nTjRa2KhwgUqxg3MG2tzUzsR9dhdTR2Hzbe",
  "key28": "2jcXd5oK8TSSwWLB9g9LZ51RaeE8d2wB2hbXN5wrvDvuziRUREwtQ1FSuPAHhiir28hxA4LDoW69DCbLinkNBpER",
  "key29": "3pmE2q7WQY5nytsszjtHM3DQYX9Jjv9APKks2m2FVMmT9KpLt9bG5YU74VmqYLkYvUJLkQSt3mxTc8njbLhY11Vh",
  "key30": "4nyYfpv1Q9XNvAkQGQKhbNLtuCPYf2Xe9xnzFNXvsNDXkXeg83e4hh41M8K7PEddnyDtAADgPZjZeYU4qkukVy2B",
  "key31": "2oVHsEVTZ3hK1DK9Yks7D3fMFVGSDcqnVX6JNLCMwa4faBMEhFiMXPQdNzARKPCrypYqXPiWQumbtjJZJWzWickH",
  "key32": "26utLye9tXwRh4PXknn2vmshiNkBCc4GPZg6muSQV8CTfFRLV6XB8FjbiXTArT9wi1hs8oJQ6265YTLGUj6rZ4PS"
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
