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
    "56UdnwtFT6Pvn6PFrnP25j6TAjyEDy1XMcwstEHushhXV2riKoUCqtx5CCAbEvZNf7vZvSFqLLjsKnYfyKgUgQ1b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42MQtDdwigyHPLUN8ycwFoieXfajTDFFpfSxMrkW5bFz9XARTxsJSEpzXgFGpTHMigkPbhrzyQKrSgCGwWLsBHM7",
  "key1": "2ScQiVKhcrsommxbLJAua9cZvGMDGQveDUYMUB5rkDxu2BwJ4zqTBKxsFNuroVEEDtPsZuLXx6HuKBuG8X67Nwz3",
  "key2": "2TXYCo7SytDEJ4wAG7WCWsBtP73JrYaLXJoLPJUV2w4KMp1tEjbjDPEvNp2CdKM5RwtFPE8B44AMH14UtNVnAvb3",
  "key3": "2eofS4hnGJEorJAqidh6UU4UfWdCSq7h6dTn6AUBwyntjhMucWXzvG1sNXSSAtvuqQyPg4ktf67p42ynisC42ygu",
  "key4": "5Zdq8mLQbTr8U5LznKp6TqtCPdW8mLTCjw6CM3VjYbBNq8ksiyYXtCoyQ6x1xgCVzhsEbAX1GLX9oRKo3CSa68S4",
  "key5": "TyGiNP7V77v42XzQmz6bE8DucKXA12jiVkKymB93HZEwYL9SHm9CaN2vsk44Evzq8kvR4jtnJqKpfG7Gkr6gMr6",
  "key6": "4MJre9SinWVFNGKZfD1iZE8wsTeUjRVH5seXQRWAZomJMDDqNQJen15bBjJgZYPq5W5KHsvRqZu62bQxvExasFNE",
  "key7": "2R9ZomXkgohGPCcoU4rF8rYKNt4gzm8yDxVpQoF3LkYX7UpEkhwiBeECEgaETM35xmEG7d2BNB8WjxqUhgG7GApn",
  "key8": "E58ULLFs9e4S4tbw45afKARbgBzFYx5tDhnGkhKtmVhurSTD86Ugcoej4uNwCth4yncR4AMAasCdMjr31R6oedS",
  "key9": "5byhZ5EZdCJArTkoGhpJj4QUeQ9bVNfkuxidjb88AWvkHdpbezkXo3JaExvZ1ukCe8C7YCntS5BaGajvR6YTXuJr",
  "key10": "z4zVBypNXQCmW3cDcPtqpdAUmyLW8f5WN8otYRSbFiNf8N1nn61xDecLJHSAu8rjJt1TfwcGXWohdyrDdEVk1zU",
  "key11": "3WNcT2YzE9o6rFEGjgCEWe6zxeXk7nBkC1GeyReuv3dZfmcXpT6nnSM1YoSxZ3Fu9v1VhrTNZ33BXu9vAHjeWKvn",
  "key12": "4oXRJxwDFEWCDpfVL6rs5BPLCPx2oWMom7Lm7Gxmbusw1GJPn9KNT5WHsGQT9acEptRUKWnKp4JwvTJqfxYEy36z",
  "key13": "Mm6ZwgtEL7J73KBNnuHXvFVKd1WfowJbhSFdDgGSNW9bFRWujrkMuwFLh2HF6f1LmcZaiDkuGNZMiEvZGMSXUEW",
  "key14": "5td2JfuaA9EYULtY4gByhEcGfb6ZaMGgDdbGzWSSS8LdwEAiNQjsNawd9sGcHMyHBfE7LCJRUAHBGXrbYE2KsZH5",
  "key15": "55rGSa2CQJy9Be9ge2x1thUyQDUzDL1EpDyf6fYpwjV24WqrPP2jUNaG9GgYUQfdEPNQ4AcyPvSGokGcBeY3VTdf",
  "key16": "zSbLw9NhraaNDKmuCRLjjtHRYzAEwVLv6jtx257HLq7Xihcd8sjxWTP2RDQcNtrAb6WzYGCUy2P68Ww6PQkhGY7",
  "key17": "3gX9CZQczLJtZ7LNdjjqokorwd4dCbP45XKBYNPhXxR24BavPW18dXVpGfXdmC5vzXTsJVP49iKnNjZCK76Lo3X6",
  "key18": "zEf811pXMkdzVjZs4Yr8EStg3rb7wXAiT9UhqS5C2KuMxYDzJCZfoJ66xiwLDQKadDtdUZQ5jfmhAEp9iVFKZzY",
  "key19": "4pqWd5HyY2JXyQRgDeap7avjxkFmicVQvNtDhGmJaFoXM7uupD4M9MmeBoTKpkKvg28gnNQV7mYQrGN8GzeXjvkt",
  "key20": "35hordv15jnpaUMcgPz8WRYyqTHzXgL8kbYyhLz8jH5953YKTfYDGu99BigbWuqRCj956whb41zJpbtTrPofQw9c",
  "key21": "3TZkYj78HnJzKmFx31frTqzoQPzECEjp2DZhXeiUDh5o1BQdSxpWjccNah33KV6D4HF2sn9JnpaAy6HS6knmY1wV",
  "key22": "3BMkpJesw9iWjJRQbK7nWJH59pAf7EJsZHQNVmq8qeJGQg5avmpm1NsyCbHGVtKH2SHzCV33aJHFnsFcT1uDXpHq",
  "key23": "4LY3e9jb4FRq69Z32w9fYXDy22ALoSDtW4sQiPo8MJBsNfGCxSPBM4q3SdDENRwuktFihjFs2oagwzXKjTKxLA8a",
  "key24": "2qQo23VsoT8oo3HGpYfN9XZEju7kcC6u7dFDtdrxYC49JtcYf6guyEKXR4bc56ZpoXMReABAvb7wo8uFqogfB6Vk",
  "key25": "4juKMKXiYEAgbkCqgpPpYjBkJYnfePscbrRGMSpjGiZaEqUfVnUM4dWkfDKsCViZPj2b6FpMyr59pdgU7qedKLzw",
  "key26": "YX79pcAmEYRTtutMcpJnzJuLLWCB1juyGx9tobNhQBCGXsWMtPKx5tdffukP1DaJdDvsvJaeNgxYKinVNu1SsHr",
  "key27": "4Lgzk7dzH4UbTqnKykcGnE3rMfDVRfgK7dSsDxtxRfhAaomgHQTx7oqAcK58AczZ97KudAA3xH1W5orqTyRxuLgb",
  "key28": "5B6AfH9EHTNfBE4GMPvQqrzjvLH1cq5qNzGKeRF7ur9KeE9pvKNRd7BZtc6XyY6icP5FyMnAWCVL93pF3NyGNsmt",
  "key29": "PoVj7ZktkhfwSfrX483LGGwijwmTwF54XKTKkcNMki8jJXCbQf5uLuFmXZd9mfhcEsouhiUrywMfLkrK6DeUAtQ",
  "key30": "3CcDVyDvCGRGU4YQBby6rppUUiX2XxYjqKbGq3LWoxtNv3XkWWSZr4ZGNUbeFwUNQuHvGSnu9KPhJibaXTkoA5JP",
  "key31": "CpuRvWU8RNDeW2eDif55xEzmxceg3tLDFERfoUGkLCgEmJrp88FNSLXyF9PBwnsr5Cf34J87KCxUYNADz82PASm",
  "key32": "3LULt9DKTR3JDC75HqkTQ8XH7jsP14Eq6hxqWz46pfjJrGXkNd3s6g7C1nPcZ17GE7tDjFWpkYkQKRZyxBsYjDjs",
  "key33": "4ZmhTAXutUzxT7WSx6opTWQkXiWHbQK6SPMRa9UGhuPz72qZf4xqYsPbLc5FkRhBqfLGk4zJJ5fUtW5SgdyEnM3a",
  "key34": "3YxbAM75E3753g5ebaMhYMXRXkJHzaYrtSZP8tBeMgdbXYMGebK4EAY89HAbofccUG1Acb3CMzSw5kLZymWuozEv",
  "key35": "3c3xC9zNbLcVDEYtBGuo35g846RPEyYX2XiaTSm2rtnDCRn1Lxyd7QRGVHtuvQF7E3qwGd2YMH3fk5AfZDY4xrG2",
  "key36": "5JpNixqmv1VzNRq2iTkqVs3oPMJwgpFdGXkxbW3Ru3AkHAeQjvoCCmAJ1dzySK35LoS8yKjbiJU1wr4KsgJhxu4E",
  "key37": "4dRGfF5iGs7frA6ira3LQe2mNDBPNgvUpnHNvNj5m4wfyLke9USwUaKvsj9VBbCABRibMBXmM4thXuXpLTy2Fqo2",
  "key38": "2LjvDJe7zmv8R2dngMdt3oSUh9Q6aRfJpSWiazmUmaxKnqgcLMoiTm3uQfDNVecZmLXYSCBkpFmRurMYCtokVXN1",
  "key39": "3ELATGf5ZQmBNUWgQrWrQcqkvvQWCJZ8qYFcWrhNg2X7iQ128XotsHMcrg23iz8bszueiJWitvTNDEWUWPkvDWvD",
  "key40": "3TDmqU75RYePyFQH8eqFjbVV98B6e5JH5Bh712rr2bSbAGUAAqPsqQ49JtminXDE5cFYapijqjAWtPoRdn9s4ZVB",
  "key41": "vUoewuNEaUnKJ39cWPttWmhpBaDdPMbkages127N2ACo68GKLe7DT6rGMLHNuc18KWTihKhD58wn2FRBJH65q31"
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
