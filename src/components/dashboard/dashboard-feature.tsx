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
    "T2Er94A5ogQNeNPc64tR9sspKeWJi2UiZUsA55hTg8coz5nGiFxF9gPJbM8pK18vdoQU8gAXDfoX5kk1D4n7VMy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25codT7aNLQoxBN9RL7phC1yHjSr8CqF1zjQ83NhwxjxHiWqxpkcrmrAmBSUmxsdMX4fw8T29tzQhqjzztXSAuoa",
  "key1": "5p6zEBXY9vaUAdVMqwFdzZeBfqMme77fSALMJXmxZVebz3iSrdqFVnQcvXf5JjfFiAi5j9f9fGPyA5mZEbaKpQDb",
  "key2": "5psFsacJJHn51cKK1NGSVvLDcExRakJkAogPLGtNi6NpM3dZU36hauvWj6PDL4cGAn1yhzC4j7CEgV2SS7EF7Ppg",
  "key3": "3gJPzU3jnwqEciPbFtmbKEG8mwBUspCPneicyuCvJfcSvnWZYCEA8ZNpMrGDKoCnrSgcgByw5vVz65S4SvwLPCs9",
  "key4": "5tC27xygri8nhoZxMqwtDdAyM3u1CnFApCetpT3Bx9643bhndAWztnGerDyLE7mMt6S7G3JBZdeHVZXq4oiywG4B",
  "key5": "a3z2aY8HoKxMNe2dYAUaFZhenVg9w2nV1wBPLBMqpXpSCeYkZMS7RXmuhL7h1oA6uPJp4jLsmw1LYzK6mG9V4aV",
  "key6": "4FiwhPZ413cNzoAowWQfKipMiU2CHz35mufXicj29X4oZcFzRkVwysKt9QUofCHdW6HsoFyQcp9JWvMLDsD5iZdj",
  "key7": "zefc7jemfrt4ze94f8gHZWuztK8CaFhVKHwVRGYhSJPbZpPiPJLjHM6hkkQzU9uzaH7Nszn9thWAegdKExwgEFt",
  "key8": "uGpbru9V5AFP329wjQLesoWjJAchsaiLmi4WT4sS6wW3z3XN1kE7BBM7MYm8MPo1dPymVhzV1YEro69CFnVYHHU",
  "key9": "XVwgKZ7nG2ASyXHKqUpyAoey5dQ9kHy7k5BdtSd6khnybdTUSPbebQeDpRxnpHht35pyMVMDHgueqBfHHT6izfr",
  "key10": "4AbXGNL1LygEGL77zkK2qEhPX8oB5JevRsHJYmK9mBKRsMTx8RjgqQhyWdN1kUvzgLKdDEcJ3DtmKajW2Mhv3RCr",
  "key11": "52QxQvufjwdMA8Xbt36Tbswmuhox4DC5xV6bR6Ko1NUA3hR7pKxfkSB5CgEdnf3Qz2y3jNR6vnvLfT4ka4sxgFoa",
  "key12": "3AeMjqDtr9aG4zmZVfqyHHHfHmLUBMwqVefRSa47kX5pY1qd4GZL9jBoc8ovCTTjKYmcPBC2QZBaFf6QsFRcS9Pv",
  "key13": "2s3nMGLtHzjVLACvUVN1kKzLoJQXxkEA1cUEgURQAHTjMHBteFkWA3SagKBchu7JiHwE5UC3nyQScN621MrRTmCc",
  "key14": "jkPtGUMSpCYWhvtzQ8jyoCghzgjBB8MxeAy9rqwvThi7Y9uGHhgx6jdpCEUGUWTdkCm3rS6PqC512oRgSjyKwRJ",
  "key15": "5n6KiGE23wgNsQhWze4U26pP7vFG6vVhfSRtz4jEFqnCsopmfDubDXMF7thVQP9dPqJThWHjupvBWSppC71YaZWZ",
  "key16": "k88p5PnSb6eqTcXPbnb5iS25pmAnUNnBwv7cjm8QBtkv8Q4shTkBWdcUw7YkSbNL7LpHq4oNNFTiFXVdKRZTCCm",
  "key17": "2PtjDNUecxqdkkrxaDkd4NqxYhtbFbmfNPaW5q5ZghiPHmzMeDerF6LmzpszRGyrmctTho2vXxgKQorX8T9DeNyP",
  "key18": "2RwUiNtFBdXDP4FG8oKD3yB4Bos68EE4AKenXZxdS75WxaX9Loos1MK3c6TPnV4U33vaJp9c3sZpM6tuRU6VzzzD",
  "key19": "2tgEXgxos8rCodRffoxJiufX7Kai4DFhPDtc6PqPNL6m6bHFRvPdnVpnJ4c91rv5SjxEgRmKzB4PVyVGFUSDBkKP",
  "key20": "3TVdW8hNUNZxBrPud143JJVwJPzrXoJB8PnLjb47eVmFbxYxiJ87Qhkr3cZbCSr9JvBrJgim8F8wduSEvf83c5mn",
  "key21": "KzDAng9BoZBMiAJBWkpQRggeCfiRNrb1Q8i9GyJ6p4bLEsLKEJmH19GkEAxecSXuU7cK97ZcKq7tVZUMKAN2HuH",
  "key22": "5JE3PATv2ZyEa6ZJRbuvBUaDJNue98zfmLvqCgbQ1Y6qaAp2YGVp23o5trKEKZzJMK14cQv7fgcAKt4KyLNYUuc5",
  "key23": "5rH21qbBFwNy76sZfiHsTeEyPo7tZZDeeGYgsk35Hc7BMTzP87BYgfpQA9h9by4eY2fVz92QmYF5A1bq2jGTT23U",
  "key24": "JCNPEXBzz8aPfHhQ1jxg4JqVoP9CbjcaeJJPzvh39Gu93K1UJFWz5RSvmGnkGJsTqfxqHXkWsxdYWwpXdLichcm",
  "key25": "nb22nwS7ADEzAsBKCQ1qHrFKtJYkG7e9KybVPJXksuMCStzrS3yV14HrnyQq9jWyeuFHhh1ss7F5NrbFZn5JLPB",
  "key26": "ofPjmWFZYevkv4M6zW6rYQTULGmkgjUfLiJR4bUtJ4uXV7qMAuH2mW5wbRQHTvQAbJp1L6p2wPVr5xWgmj1eH18",
  "key27": "2MagNVzJffqRaaVQt1hw6eqCPMcp72GhSXu8ESZebzArDdJzjfW9kT6icJF2WKeseUnWUhCo8JdU1g4X6M3Lrtr",
  "key28": "4E8v92cgU7ovSD1Tt6Znk3jxUWNRkgQjTUL9QNA9ErU1TXXQ7KMJqmAfRpjH8tKXbhDCcYJ4KS2JPS8iLMmw7u8K",
  "key29": "2cQfBnzNb2xDktSQb2j3nNc4QojH5h3UgMaKNiSXWG7WRk8Dk1ceZqsSJatmR5cLzcgQGShh1hDtDujhjdM78Yc",
  "key30": "44NwoEWvE9rQNRUR6DmpGmX4KqZoEcYqQQVXNM1asEYUtYT13BGNdtK2DrPd72D8pvcYcMKJYvvg7QK8DDcPc9DG",
  "key31": "3Z2E6DkZrdEiKdgS8AJM1cgHphHnzG9NRBTJr84SaHAdkY2zRTZbn53jnuUcu8wLuNLSzAPHj1cvwhPHDarZQBo8",
  "key32": "8jVSX5sZK48Qe9qbV4GnnfvUnAJsn6nfjTPr3HvomH8tZL81xEgHfF7KFd3UwK9i5ZKXoMMvi2yYAYbZxtdu4hK",
  "key33": "4UNB9cNgDgfaE2G8enXRU5QMzxVPvX2B6yRnKptqSk4xm9TvHU7SffuiZvKaCwqD7uNtc8DKGbyzbKFnj5YPeUWN",
  "key34": "55SjXvUk7NhQosFiCgGCRDAsemYRNbNyTm33HnGbZbBBMkcDAKLdYWhZwLmGmEivsQhrhHiCqirGGa3AH8kTmXED"
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
