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
    "5tvfKmqffnu7Ccja6khGy5kot9ysX3qr5ZVb7mxAXLoCYSB3deaKSVfDvhag6sN3pjrhHcv7XXbikErUxj9N43o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C3dcZuLEv1WK4mRFy5fEwsMPzZyqmMuV1E1YJ9M36EUAebJCHY56d5dxxfLn6QygYRJeb3XXnuVqj72t9NVJjtZ",
  "key1": "2Kk46Dcmv5UcTeypipPHjFGXhPoCMzL1SN5r1h66t7ZuL5xhePYSYgLZ9kjhk9Gh7GwAzzEpeS1jhpZz1aDKMy66",
  "key2": "36H51VLxVv5q2EiCqD2LLu69uSaeKqEX5vULHFRYze3aiZyJJ2TLhpyaanCJnNpsBdyGpSfPdhJ86Zh5HrEZV5vH",
  "key3": "2gdsGcBY3syDfc3U9cGafBFFcMM6MJzFaLfhuamHCDGr1Z1gUqbNRhT4MFAVdpDw86NYYzCfJoGdA1ASzDufutUM",
  "key4": "s2hmWipGgmehHHypef3y4pBrCp745qaDvtxgZxFn4RzRbf8cbF2ig2n85p32ikA9NdCwh1qCYfvrQRikKMECdzG",
  "key5": "41HyEK3fkYdEwyLnKbDAV5eALNTch5QkYqF7gcH3NkRyaAXSSRfbu9DPMvMKhwUTGSJY7oZKim4VY7yQeW6RbPWc",
  "key6": "662VWnchjxiaDkc7KN241zrMEjf3kXUJrsrKuwY6YFWaf3bbQ6RBMKY6w4KuFPXHiZ468Jp3SBSMrowPxsc6bnJw",
  "key7": "63TnMQHzdnMvUrmJBVNqFNKhcgMG7T5TRgcD4LpTc6VJ9cwkSy8qoRtX8rqLFB1gLPqMtotijcWRVXmwe9bteaSq",
  "key8": "2GJC53UkV7j5GF7cwMShLHdVu1cFrkf7Q5cNr8g16zh9pSLVoa8VPqHnxeG2GotAVYzkzT95Qe7CXdEiXYEag2Hk",
  "key9": "5wPUwLT45f82WzkCSsvpqnv5TiM7busNRMV2VuUagdz1Pk7oY2b2KQbYiPNevL6zXu6REvys5SFnCJhDhfRutVKw",
  "key10": "5Lkbut2h689cCVedrveWfMi1SKHwzaEEnoM4iHBzmqoxtfnboLkku86eSBPStx15SfLRLnJN6aMvZEfNpmavR6Fv",
  "key11": "4NNuAirHRJt1cU2h8hyJKhb6iv1qhF34FHmiChxHxsL5mDrvXKpBUqmYpzA1Fzr334JwRfCFsJdRzpexZQNmhuh3",
  "key12": "3xHKhoaQDwrvREEBmrhYmYnLNcg5U9MFuNoo4zfBVYke6ii6UCqXsJxKwxTTvU7EF3QmkpS7XJ36s9AWnQ4oLMvg",
  "key13": "4xkgjSgANn6RRgPyMj7uDoSXVDpuWNafK6VyPrJB8mW3RayzWhkaQzYecKzh9AwF57LT5yKWBnGZAWVHaUnJm8d7",
  "key14": "2cNx89wC8RDJE1bErPszFjk9ZTKEkqfPRzULNXqc1kPzhCfpdkiryc1UkiLdTfAVgmKkv7bxFcSsb4cGxw5oYc9J",
  "key15": "3UDVMrwCC9QYCgTkC128qqYVn7yydBCHRD4B66RHCRYxj3ZfVrNThbYTMnzCdD7bLm5ipiAXkLBnVGLgVEe4tV3p",
  "key16": "4LQNTfx9br6vBcy2iatp8praEv3uUPTu3rgffEXWwc5Ut7RpXpfN8Hr2hph4tMQbKduCeutjcK54HQN6Lw9Vs2pX",
  "key17": "4fNJvn57xMcXuVEJ8V7AAfRejsXmS33mLCaFC8BtdqVY7nhbDAtJ7UpQ164ERS1scKgA5QcJMQzzAPM6at8wDpco",
  "key18": "3Y6T74KFtYV39FVfm8LuCCYAmiJoLzQHRC8sGdb2wEvEhtnecCtK9LMoPzwtox632LYPzDFhMwY6XjfmJmmx8wMC",
  "key19": "X7zT3z9rP4K8tPaLbPEi3nc1qqYSqLbqGKYG2mR7Jjb2htvgZYXohbSNjVHnAoQqivx1xZwtiXe28jRLpBjuEtf",
  "key20": "ngyx7Cpz2VhKZGmGxTnmqUFY28gxCcgEVHjZ4jFZHcsv4L9Vbfowc71mriSKDgw88kwUmusVmQpUx3FuxiD9Dzx",
  "key21": "5PKhGihsstHjagzvMifss2YP34ZMZo9KmRhoxh5nQNNUWL5jpw3PT2p7QfkQ5ky9JdcfqGa8vs6VwrXubz47DoVo",
  "key22": "33kULSaU2hBjFGqGTWNUL4cLNxGhAj5Jj9quyojrJJhU3thbhqEkHBtVWUQyJDHdMz9K8ay1oViVWh2gjtKksEpp",
  "key23": "5jK5gBxnnh6hJvCbfFL51E9djSH6DtGUUGPzF6z2iccAEDPd3T5sQKnSVqcEaLV3AjmLYZpA1PGXMeSo9UNx3ddz",
  "key24": "3CRCc6am4qFbskiczsJJXFtRKTuMFiVoD4PMRkCcJiEP1UnyUL4L11p9ZHUdXkzmFuUEhPXBksShszUKZmtbkgbQ",
  "key25": "4HTWHC7a6eqyBYVTxftF38ToRqut1zYq66fPEtWVPHcTtAuPRqjzcvvvypYjzMfsB58Q4y6oxRH5sCeuchB6uzNx",
  "key26": "3rGiibgv3bKg31xck1GgfJdB4iZ6L8NpSc24h4KwNcV2bq2yWwwkBoLS2UWhhsEoEWb9EV4J8CMqys4p46dqUchj",
  "key27": "2CKk4rsrAKhE6KntZsHniqbrXCjRa2cqqo5GJKGcgEFXwZXgR7NssNeCSeKYLJgAW1VJs964gvJdzPWzsEMvp7yx",
  "key28": "s7jV7fPxeXDVsHvHrUCq8BfsSRg1LgdcGCNboX2xC7U7jHxx4W6DydvZ49crenzu2RtRNrdxU13itudB7t13uHx",
  "key29": "5EEMyHuqUtQZyyW1o9qCX4geeqiixasFKSE7n4YWvpMX2ym3NyDAE9fkbf2hZUNxnPWyg3Tyj7t7gn9voJwE4oXG",
  "key30": "waXZKTdKpbi7bMx2RbXqYC72XWgdFjS2xxdfC3G7QDSxuS2czM7rUQ2m7jibdCP3Tiizpmiq1Gu9ER6uHiRjJW2",
  "key31": "4D9fWeTT19KtxYff3bguigUxkFqND6BtbKo73PEGhXBJwpi54VsTmXMjHAzQRykYxXwsViitMuFmHBVaepXcLFPE",
  "key32": "5qThPbuDmxgs3gFtv3hKeAkzcdd55GL5okCNQbcRMs9snzzv9gVBRugpMLK6ByvpbRXfz8DiQKHAcPbUP6GaidZ6",
  "key33": "4rbQTXXCdh7KgpGa5tVfNEEGASBHN914d55hvH5SMm4kr3L2zP3ekcbfHib5TwasGridiiUaV9faVddwauUwGUxk",
  "key34": "3JNmvfWgHYeUz2JP8xH7BwL94enKdqF45sPj9YK3ArBZscDMWec8tpvNVGxBA54AkGBDnrcvdz3WMyN8qg1Kg2wx",
  "key35": "5FrzuhhH8SeTTyanMLjoyoALF3qqY3VXp7JSEtrynu6cYMTyGfrtJAq43XPzimaHB7jZw9T528f1R8xgS6DMJEt4",
  "key36": "677zvBJvntPrEGKVmHPinHA3iy3VWc7CE8BopJbkqasA7GxPGJjhJAMTJQEovCHC6GHPeQQJbykPv2Qw5k3MZhkA",
  "key37": "4JGpekhgxtVzUKMdzxS6iDtGpRZXR1ggZjmV1w83qbymjzq35wgHDErmPaxFzVoPZpfCxvPTwnVWHcwiiy6fyNB9",
  "key38": "55cjJYxAWdG2VynDDJx8TSdw9DvbFRnMztej6RBTu5QtTqARCp3UR1GSGApf3Vy7tEbyZB9mMPtXCfUu1PosU52o",
  "key39": "5U99YbxrtLpukmVwtSGhQNDAjiAF21CC4Yp8vZZZ8yRmz7MeqscGvNeBZQ8rArNWYGRyJRc8EERs2EUc8QFTBa3X",
  "key40": "2pxpDthzN3m6Ga2AaEAwFL77fNYwChjb1bL7qVHwfcGRGpxpKSHEgPfiMeZubeWbxn8KnXDHvwmzjENzxYd5rh5L"
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
