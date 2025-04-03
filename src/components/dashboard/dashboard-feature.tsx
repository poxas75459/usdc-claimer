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
    "4BQcw4wsL9DwxY6whMZAUNhFQXKyL9aSZZCghHJ2tQyoV1ex7FrB4eYRDgFZZNQNNXJ1anxhMPpMpgPnLYnwqmFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2ZKzUAfRQAMywnXSmjq5vb78eRkU7CwcdhmHqDNCozKqydarvK8pjMRGkQzAezUrzvcru1n1vf8PfxAwcgfRTa",
  "key1": "2oKwkHC79BGqvsNEZ8sJ9dDsNNoTk8jPesyX9d2527SAqAXrJYMnV814fuurFtyNwfnVqT3tHTKC2HK1Pzq2JdSd",
  "key2": "41XUMHokAHYQd5M4NrL7jGXF6GX2D2tD9Wx8DPgp5BN9mb2eB7cBenLHTygM5FThrhaHdrD3VthphGRC7FrMzSoA",
  "key3": "3nh45sUdaWqiw2WeqCg6MYwvLADLMyiNuPzr5JoDzVfmZCZMfyKv2S2VZ7u5r3JhaoqhdPJtZgegicVTXRuKFNq",
  "key4": "4jYLnP7aQ4wxE1fA6RE69KZUvWAHR5BrUCXp4JXNcQvC3yV65f7f2TU3tMpssMWzu9vk6eNkFshv2QwkKw6Sz2g5",
  "key5": "H6EuVBxUt8fNiEu4Yni3Y9SDx8ZWcZDD3ePDyRJfg7zrLbLY13a4xCp2ME9vjGRe3cCq5vny1ufbxWW9KYaZZr4",
  "key6": "jQorQq2sgb4A2sYFRtx1JpHSmoKwnZxko2ETzkEm5Vp1dJ6QY974YM4WCGiFqxr9t6ZEDtoZ6Ub1bRyHa8aottf",
  "key7": "2UQCa2Qe9LQwb5W3UiV99fvNJ2tigpLy2XiTRcs1xvxMmZdTHF55GkGazTzGrcuzKwjUEXSar8dttY6Ata4rWE48",
  "key8": "2oe6tyNFfjaq7MFa9fmt4YggV1KWt5gyqVwRotYdqwi8itTicA43UW3jnbY9VGyhB5kQjA2ZT4t5hDWmywaTt9Ai",
  "key9": "GPpmwE2NFAqDFUzpTUVnSfG1nigPgQczMGHM8nz8HEZDuHpcdAMhdWjcfj1bui5ySqhL2kSQYKGotfG7f3ukSCT",
  "key10": "5GmxJyK8zYwFwoqNHyigyuouSFtQ5bENrDJYpKG2wyxzkGeUFQdEura7LeopXNrXSWct5if7qY9QEA6UgauYz7ae",
  "key11": "xeCm6LvSd74oVMkPktS37Ez9WEqVD3PPjFn2jnyraT8jc7NdJGb7mAKTD2kKg25q7ocVG4XoWTUeFerPPvsQxVk",
  "key12": "5UvRjGBdM7kQFVhvY89ToQYQezrgZDaWEfZZW4hKxxcDFuiGuarFVvjPzRBxt87YmbLUc86yZ3dgsfCBcsGsqrfR",
  "key13": "2AQNTYwXYt8QbbG9WhkQsirrUW4sNqirhwirZDhqNVWBSMFpo4THtRtq4Epvq5pnNNgyV1XwDdBtHgUxJzobQpPH",
  "key14": "3StkmVv8umikHafHd4YWBzaLzCMrrrNiAQdKTpCPtkEJCcTYbdYqPkSXxuQyzKgeEAQWwUuQyK84jUFipPD8RYNJ",
  "key15": "W1zNWFerDGKRhAdC9N3j1qjMzi32B9c3Qdm7rJM8RSiB2W3wLvaAZvaT2djFQgEqbMdP7brQtLaz1MTc7vNqmRN",
  "key16": "3R4fjShzEz8pjtLJRztCYKuWFp775L4xtzwAhL226No5g7Bp9YRLwwUQw59cUX5PtNBuv9s3RYjhpdBaGeDUdFSx",
  "key17": "5wx6fS1vk3A7YxzNSbwZqu6gbM9D113f4mrnRZUWNAiLfSEcPQQwCkDSMneDtFHDire1qtu3wNXcuGajGAurnLmN",
  "key18": "fZutxVJjc9zpQbRmkcG7RS7RnsiXyj27AXRu4idVz6x8mEynFcjTf6JpbKXMPqPHbLaYtR87crXfxhJERVZ8Lkg",
  "key19": "4jrbtqcShu2ouRT2CbJkZXe4txLrUK2d7YX73uSZhxW8XHEEE5z4GZT55UiEA1JENGV3CqiWaFBk36V1ZmHUSvoi",
  "key20": "4faTLHG6S12dBEBwCpo1TyQAmqpLs6jLQHS5f1miWqzctJHXmHb6UoXfbjc8bmppcvmreTTCtfazfpuSFCPc3Yig",
  "key21": "2jHoDxtX8E44vHKbse2JwXwenFd54k6CkgVxmdZd3ZA9eYaD8sijhKeD6NpbFtXVpXz1A9m44Q5W2AjM98drEb31",
  "key22": "3emNrh9pmbtdkw1FGy5zHCxXVLNaBdgtqxoTR6knsd1BVJgVhqJTtb8sWeeGFnp1viEKLTxvaSbJdBDVKw27T7oF",
  "key23": "4WzJYi98YN4KSe3x37M1CCxYKvW6kHKM9zyhTmFugfUGtLLJngmz3hzLZcrMBYRiDQhgnnB5q1S4NdYbEoSdD2GC",
  "key24": "4bv35SxKx4A2C69ktSkD9jMsaiVtJoVMDHJZ5YKyDEQs8qFTtHRpT9RXRZ8huTgajPktZC86tXucER7dxSMWBq3E",
  "key25": "X2kAobRjxA58ATvDCRpboWjJQA9ZLPBvqnHUarcZozGJfi9QNhMRLKCtzYtgE7L48ZT9kbQBXXc8gBSwed4rvuB",
  "key26": "CBAXqmATSo6Kc8Bewv3aPk4WbR8xiGorhuQKiXpLgy7jjWuwBhKJBdfEUjkh3M8HLS7J7ApmQZGXVVN72AWHQWR",
  "key27": "27yk2HWRJLcjotKTBK6G1koCPmXYHvRHXCL9nHCpK9HP8it5CA9CDX9VLT2Y4KssuEdRS8YefcZe5qhbaoiHxcUx",
  "key28": "5vVKU6bxnfx2kNpv3utyyvQBTLwytA8pnfecm2a61A7GxDHqMoo2aygSaq2XbhrXPfVGUZnaom6zaXhnFzPUrLw6",
  "key29": "2vuyvt4rMijSit8GnDiEbFo1sU7eYiViGuCA5TS8hZ2qijByjzAPQjZozZCqxBYGM6H6evBaoCCTXCatzcBngnWU"
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
