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
    "YFAwNH1rVUAdy4jdDULDwiH3UeKJMyAtiNmeQJNHNCq3kpUa6f1tQudCcyoxEwvStmvJfr8u2x3J6ytBjNbn9c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NLSXVPEmmrAtqxLV4Udsa1JGYsxxZUX2Ug292z9CCRTxfFhRmNpLsqpsJP4AyY9824ZunyKVcpSjpgQiA8JMhn",
  "key1": "62yuG9MVERJeUiNTp8KRp1zA3WUc5jJvwRfuLwW7VXKAnyqZfhouVthyatkT8LFpXheX5vynfiCU1LsHvfp3LBh9",
  "key2": "5jfjTfyELSmHgYdbWWBC3xgYEpi5tKmJCWFGiUAVdZ9H77aAR5XESV4bzQjQSCjqsC2y49sJ9DttwELJd19skQdJ",
  "key3": "yJor5qo1HV7th9Jx8FeTnHJzzgjFHELqph9i6TXDyx8eXT7K4s6ryCTM2wSqtGkKx1e4AgfZAVy68gNqsZWDSiU",
  "key4": "46YZuwbFDm2tejZQfVDkwKMBSvXLM2u6GRaufsyq1UgLdGLgN4AEhhqwCBrM1rvmmHLayN96R3B9zzdqYYvo8pfv",
  "key5": "5dKF1yRKCoxji9wVKr5BRg3wUBEUeQxNwuyT72sxxSikecigST9Dg8qd53uLCe2vrvHVFqm1LsFbPQkdD27zMPxa",
  "key6": "5xq7Sj1mJWNcb19pZiBPbmznxKXai2AUvxaQ3tn65mequhFgEY7Yq5BedbYJE9xMKxNjqpApHQdPwMuHYem3BULH",
  "key7": "2sZvFF9jakgQ7QmDGaXs7oUckjemMf293jcSdC4JtSAFCAuBdi6PpnkzuZRVjWjBWtiYJSR6N6ZTMg4XXaM6gU5f",
  "key8": "4HUALjGGJniDwoHbWcTMp1vLnQd8RXpgAufxmjhu2gCk8zBvX6qnLyPFfKMpefA2AW2hjsDZQ2DvUEzVNo2FXqsd",
  "key9": "3dcQQVqPeKnLGCjekyhVhsytMzywbqEnHr6UUvbXG2BJaaj4iZ8bVks5JXin8d9aw1CeS2PDv2Ya2mT94DgaKnAy",
  "key10": "5ee7FzqrstZCKo8cHzhrPYoZQx7rLbj1mzYgJSfCP2XHLs2KDXahwi2smVNNA8EoPTiUfDYWsnmWPTvEqqoy5V2M",
  "key11": "4LZa9VQsYCZ3cn4jqdvKnwCGQ43TGiBhpaZS7oKHvM8Mcrvw7BBrMZqcynjLxcdg7qfawDSqsmwmyU7iXfsNRcDy",
  "key12": "bExFMNQNk7T6EU3qkqipHaxRTyCVUL3ACD7Wg2Bxe46udkKTQQdyA3cPopvThE2vyiUjPySv6FBgZ1ZfKkc8mrD",
  "key13": "3ggms4d75PmC3D6uD9tNBwSFYBXY679xwDwqsyzxYmD4CQXRy9C83d8aLmHPvKQnFkps31vj8vjyUaCwZ83uDJfA",
  "key14": "5e2WzKeo8nimtZB7mVVLZ29f9XEJupV2J1CEXZuLhH1DKCL3DU7zWaQnGzhBEVAbpJ7dCqMgTCu4M4F2XpqB4PFr",
  "key15": "3XYqWmi6Esr9m4hrArZMcW7W3gg5jzHSbRv4huMxWCuFzBznCTSoa2uyPm6UiruFBNJiS3ix1tPKXiCZvxtJC8Ub",
  "key16": "4YmzrjZLR3dzcohPc7jEU2qjUHrLuR4mVTLxdF2M9MfVQJgbhCJpDtpQauhtrjJkbyPnYC49TXbXAEfDTx31Xbxi",
  "key17": "4mEMYnpLCbxUMbXBNGFfE75oeYknSq5qohM78wjvMdJr4wLR39pw116SzyfDxzxv1KiiW7RUEF3PuaKrGSvU4m3X",
  "key18": "29nH7HkzDTf4KJs7XzuEUdAAvsqyH9vhLHHyFQh73j5qtAJE93qy2bJDPU9p3fRSDqYq3uwfBfugCL4A5TdGGMAG",
  "key19": "57ipbKDPtYuThzYkxwFYNoZkMjd3HPeee93YgSQ4rg7SnJiBJNWMY8NiBX5M4bwqyRBzES7866dh6uedCK4D1ak8",
  "key20": "3hLKYA866FHkG9j6fttDaNLkonThTuZAchbxpJgrWE99VVN9RrzJxAmUU7GxEshm9edyVn9sVUmNBSMFaVcdjeEb",
  "key21": "pRaE9ZRBpQijYU9ftx7WpzfMABW4Mb5DLZvkQgqjWRLLtu6k9qjtN825xxoHhWsAH1KVW7ThdwqC4ExK7nPfro8",
  "key22": "3Edk7x2HVuKhH5yTyYnsYgSggUwxhfSRgdqiEDtzbb8HjQ61745zMWYHGjm6rmR4dE6ak3LmQfP8SWj7oz9pE8Tt",
  "key23": "2Axt7kwiojZjsNkehULtLTMd4A2mZgNVocrKAsLnMnFXmE85ak1CyqAWULvHFSFxRVp5PQsUktw6hCn1kxdwF6T3",
  "key24": "4hq3P957uvjhRTQ9G9pN3aNjGFEprfGbt7Rdtseqbqo446gfYiDCQw9bLTXPwUv6kP3n3dzSDvn1t7eydKXPM6Qp",
  "key25": "MydpBm9sZNZ31yJ7SoDX3Hm5zs67qBedxLQdTnZvVpkfW9msLL3u8e9ydMVeVw9tv8JE5XBqfofXYgi7jdHP6bD",
  "key26": "4CZv4ZroVWG7xf5r7JUnR8DpqpAX8skJYH5iozUcMFQWq23Qj3WSbKLkdUNziAiWv1pYC7qAn8yht9QF5RzBDPgr",
  "key27": "5Rs2sSynagYDaEFVHsL15ymM2GRwuekmmjcxhfv4X7Y5m4Yb27jxHWJSXQST1BfzcFuf1h2bdGLb1fPwbaFu4YfR",
  "key28": "4QXvDA5EM2dNbfjZk3pAXueKAyN84kX1amzaGuVfWvhAboTRXN9PGKEfrHHTCrxDGMfRqKANH2EXKxf6XzaC9h5L",
  "key29": "33BDqeumd7WCiveTHBUWHg5D6NToVaE6T7TpzdQT3UQZdFVkrjWNCqoXj6JNYEdN7duMpe9bgztjKXUcMu7jMiCf",
  "key30": "5KS9L72kQ2nSLcPrbpnpFX57RFEaUtXKfjvMRvG4DiUoGBKbzf6bPmxrd25oy33Pi39fm48KdFxcG9ZJVaqc3G8G",
  "key31": "3VyPY3WpwwBxjvuRGvMp18vCM13Bf4UPEuiEy7kznPu8Q4aYJiDh8CeM7vGaVcYwbYxpj6K44f7wpLVex9qvke96",
  "key32": "4mSmtr3GQnEZnc6Z8kpMFS8XHdZKDKLYJJszYMRLGNBBhK9HNECQxcJiy3qfswscrGvqzr1YxXQ9UYhiWtPRmob9",
  "key33": "2R2NZu8L3ksSqNnxmYyQwqV5h6bWpjGzYDUz2te3bvFmV35oueus9ePeHXBKNnSMUVWUYXFhwADbJ721WnjZJVy1",
  "key34": "5VrAEanCBbN1rrqvcef9AnRBpNuFqUzJEu3DqyHvkJDqRnH6B92BLyZsyAh8WNtU2pL9AJbUbfSHgg4kVwmRhbVG",
  "key35": "3yqCq1x7WCHtyvbTdCkiwV4PYK3xqXtK4MhUwKTR1ALTh2ctj43uZEqXiFnDtrKQuiCfEqyjjYafsLzSBjNiSusg",
  "key36": "4U2Do1KYDfr5JY8BZBtFL837t4ZFiBHeKhMnQFBDSQMvr1aGTFZdcKyKEhus9FrPr4AcxMCLgNYMMt1aNA8f4jUL",
  "key37": "DHQ99E6VKkLzrUm9N485VFjvwhXEpdkmQvVZWgjFzCgtZyBgjW76v2GF9BaUANo3h6xGzGTKPbhtZjrXB5s5S6A",
  "key38": "bswRuHNvdUCg57NCFekiEpPYixK497Uvwz5kQVGV4NDYUWjSTf5U4a6yrfGD9Mw6QAWLuy13f4jugqTtP6EGpgB",
  "key39": "4eijNrDLFjmVMBzpeCxQSe56gprgKXjw7wZrLSh9Cc3GG7n8mL1RxrTvDTEDiVRKsxY962TJ332o3pmLs2of2NUY",
  "key40": "4otkwDWpQjoodpaJ2Lv3xxGFHQfZJC7K9aVz1YU3RmUZSpP8k8pr4WC9XPhjrHUEuZMZTnEnjuXsXuYh87MuXEHX",
  "key41": "5MVvZxdDsd6SN6Leuv4Mqaee94c5mpHxKcZ85758SLpicDtD3YKzA7cTSEeAhZZHTe5Ew6f7CGjxoArpcztSsHvt",
  "key42": "57B5WVNvutaNvaADEtpmWE5Sy5nYW4fpVFimJRL2aqFqseimVCSx5ZYXMcqNyfWfBDACNJoAMcZUMGFWADua4LE3",
  "key43": "65ZMdKxcdgBN4NLXs9fWSKtSM44kz87YJDMPpuR9S8Pfmykok4hmy1t4YbAEjmmppmhCvZCwT1af4Xn75U1sapBN",
  "key44": "4GNwd8wwkmt4rWQwcNrrLeVcugWro12QQqRDHnBo5en7tF8vdt8gjeyDMHtfYZETesENq7CBU5i3o54RHJwh1edf",
  "key45": "3aWSfsSSeV86GwGrFV4GZfG57CyD7ernXHzokLcjYNSyi4DSueFDkLEq7SY2KCoPqNmk6jvCr2dzprTf5CPTLeLU"
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
