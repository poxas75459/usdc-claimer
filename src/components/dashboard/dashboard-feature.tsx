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
    "4Bn6kqed9CmGy13xMm3drbSu7ViqfEDoXgiiFyyGQQ2gJGGHidqA6Pzu7zJTFLQ925FLEnGW9QKdBR1811E6Wkmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjttyX6tjumDGmZRov8samP8z96SskMgzwbKsep257cRWgYn8ZLCGWew4NdJLvtjCxG6bsedXbYU33hRrhtSupx",
  "key1": "5JUZom5sAyGBekmaVvixEcAZjSDzbCmdh2z1gjg8Y5mfNKXPCyqkijFnypeZGC51iofAuLHGFrk7BqtrG1kJm93Y",
  "key2": "25AVsVAeoqE2rp7P6R5WjabNjYwMYPQJg3Peqqxe2Vx4iWS77nbeHt7qqUX8vURE6moSqnNi6rVjyehNrnrgzx7z",
  "key3": "3FB2ACmjPqdR8mEYk6VSDXQTxAeXH3MNEYb8gmJj1xREgNCMQLmxGmnYCmn3UTreTKqrvTaqSUKdHrTSrUaTQsKW",
  "key4": "44BGNyZNZsLApAktSUK3MscFpd7Rq7Q3QZ7hf7vGD6EJ7xhVQoRnyasjW31ndE6Pv8KfNnQD8wb5t4RtZH3mn3dh",
  "key5": "5GhqBVJEYi2Z6BXSBaQ87w4dT7eaHz8r3PE4Yo6EPYG2oYkzsUAjT21tSEeePKoo6wbs9eMfTTjPQxTWfgoiK7sd",
  "key6": "4MYiq4wgcmwyBS2jLM1sE8QpKw278EbBuqiMSxThezjVq3ZBFgwdWVi4cKKkWRE9svHpoErT3fh3VsPn8EnbQ2n8",
  "key7": "2MbuQFSkLH9e3m5JWmh8o7sBJKqyosRCjsUVUvemUDxg4oWE4eJZX9fPb8gXMwHRfWYeZ9jdSLV5hVTPbnyBb3Sw",
  "key8": "SN7CaDavFsLG3iLfveS4BM2pEo3kNBZVWNSyVAieDp5XdRLAZ9uNhXpBW1uGCK4GejioiTg9hz94LLeutYtrdHw",
  "key9": "s9d4UBMYtqsQjp6GhKxtAfbkH4JFByGSBMg4qCnqhy2eBjCyBx4VWUot8fusFVLaTBZ8CdS6UopdLC1rgaBUASq",
  "key10": "4og2pQP2h5Ew4xCNXM37NRLuVjByxhR1pm1BsqFJxMrh2TrCgiwbujzMwT5VGJ5AW1LH4HLqDpPwbCPkC4NrCr7y",
  "key11": "3yvNsaaUPDvtck2uMVy3FvE63Ua23qSsZJGqNhWCHn639S83WkxX7wivvVyedk5ewY27JZe4LLQS712wNeefJzzV",
  "key12": "2Qog1GgG8rxR8qcJe7rwcj3caKvrisWW24CuPR16Y1aoF6gzTzbp3kuWy36wgta1SEYyLEbSfdwxhcTN9qESBneH",
  "key13": "56xtcBBjt8vYmQBE2eVXvk22kfPSsPU3TGytjEbvMtcovWVkQD98rkLCb3dPFpVbhpuGZeGXvXDTy6zdcCVFaweA",
  "key14": "4U7Bwr1SBuHYJP4PBGuHDso19fLbCa1GRRkR6RtmFBa1GtDrZ2pwaPiABEsYLJWWuuLbEuZTsmEe5FureaaVzeKF",
  "key15": "yWYSdFJfkUvbJxzHVvDTvUXfMzzeihaDURjmPnb8uxUH18WRLGiHZ2eUiiWeDK3u5tKHYNzavupghW39UbMinQP",
  "key16": "38TcrjQBdwwSZGe2WtTaUB322S3P2K9AfmvVtqdyq2YVUU1Y1A333D83uysrDGeBXxQjRZQoDFmN8GfbzP3pY6rG",
  "key17": "KrtxXMV5AJfVUNkZAfJmwsuEjYoyc1Qdry5rPTWarwgPUbYMVcqwnzL678tLXcAmf7c9fzXhS1kdcnzrcRUJG99",
  "key18": "37nrKU9mzWYG6EiyhoygfsPH3TyVpNgzzxXwdDN9PGCgYvKeM9XWCcMiWC5n8JhAb4iWFyg9K52Gwmfd2DPyqs8E",
  "key19": "59KUjmPTxLUVkYHxbV9PsY62Ry1bQkwCu9wrG9oxUTndZp8c3UKtvgunxLGvi7t7yiCmGawXD4HxnduZuRcrnceG",
  "key20": "3AyQqvRLdwF9fvTPKeqfUPudhMY67chnoy8iNPS3VYLsAmySUdy4pmwaGxwoYgMuGWMQNYzuvAX6QtPw8WbbcQCs",
  "key21": "L2TcinxdbMo73nbx4jcQd2WwSTSyJf1GeiKKYy16jZyAeBbFFHPG6hK3GLVrrpj1pFbMKPaHhi4n4CSoGUgp68j",
  "key22": "3oSGe6tXHHRtK2iQ3RCVg4ZsPoqJyPvam6Hm3jwYtCjKYenD619BvdBysVSkv5q1shFjD7csFZGxvowXMREE3GFw",
  "key23": "RKWFY9kUiZWdfEkpje6Qk4XcVjXbCvir8sFjzzPXK9mvxgu899rqGH56ej2gKtckMFKu5xrCyNoqVVRZbJzwDbx",
  "key24": "3nTvPet1z2dP3NTqaqVatUdZ6bMVXfbYhJ9LRUB9JHSLco7GHB6jJJqYWVaQCcZNZZQDNn7LV673sZJQxEqtQZPw",
  "key25": "5iENWXr7mG1VkQyW55PUgBf2qpnQrKWjRzBGTURqnur6CdMLKiiVRrnivMormqoD6m5SpQXzPgVC5fopvWVGSgj1",
  "key26": "5QyUdzqgBq8odnEbVS5aZaW42yiMoXZVTo6DUoBi9EjtNWwhzHyrMDLd8KVd17AcsDH1gfzdY9zKANbWi4RxDxSr",
  "key27": "2WzP6K7BbBq8gs7C6j7chdstV34CYfaAUBgJVPC4XJs8dv6AYQxLcduYE9HesDVrBiafQbSa7ZBs1MNvdXQuaTEr",
  "key28": "2qJruWQGsQGV426oQV32Npm9xHLVKGSWW7Kqn2zYaKQuNptKQGicF3bz3yzHBTbezQAxFBGNmw3xrXvCkcpXd1rD",
  "key29": "3n9dpHWKygpqUuhg9GiBkGzu2WXmzDTEhtwtc5gGa4syYpPurgW2gdzszaeL8z6Vm9Sjo7SXK6UQj5FUmYM1ffoT",
  "key30": "28794KedyxhwF4sMjaXUBjiAakhUWvwUhUxj8VSdwARLGeFDpkBjV9fMGWjiTHoodhXnxgjDFVuxRzxqPZGENxZ6",
  "key31": "3FV3M8HAZnbXr7Xa8tx6kDfr79CE6oZT85hkJ3ZkbNd8zr5NeRHVa6ZuzHkauVyNbMFRV5Zwn4XvD7pEWyqWxwh9",
  "key32": "3CWifxWdfNu2Yji39oRF5iBw3H2YK3m9GW7e34aeFV877HCKCCDPVBAzBVoy8TCbFJLnYNCGkmxteTu4SUsukcLm",
  "key33": "4LpTL9BY7Z1ZD4N3BGrvjQUmTjHSyLLJJqeiuAVkbbN7kK33tdBLKwEayP8wLUKYmhYXHNpwoZVjyFuKs5DSHVbd",
  "key34": "4N5mTVX2YGR1D5cKkKerhfFVGJLutqjFYpqkh3p7oLpsTq3mGUnUrsFheFAnk7TSbq7jVJ3zgqE2JTNMfUufLEpF",
  "key35": "4eFPEmuRbyJy7c3WQrSV8V7XLrrmvEDPFauqpCVVuRot8UDRymMhYU9MZVEzdN1ZqMAMCQwTzA9vMp7kwqyQTHbT",
  "key36": "3Nm1pomkyFvva9DeEhBBtXRRKrPuV9oSyKWb5VYcKCLatkJhJU8kgUKiMUYioi3DH2ZgPxQmtSXw4QrS72J69xor"
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
