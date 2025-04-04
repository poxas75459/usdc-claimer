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
    "27Cj6nkYMHbjiGeDCRbBK4XeUn8ww5WZ3hvkYwNPqBvZPQQnQz4EZDsyMhKYZ7q8XuuUEG3V4qWdxJGXcvfh17jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e1afbCfZFUkjpD3nL42yJphteZan7axVNJmEjLG2JsjTcRPEFFRdgyHVF9Ue6BkiY5D1y615asQVmuKkASWtXF8",
  "key1": "5NSjBzLddqTvsyzQ2tML5p3x3q5s3ZDpE23JGZP4YA2f5XNaaZ4JSh8XNJE8RY6RdNpg6ymZidMqnU9ZhYbyd82c",
  "key2": "5ZmFcXsLDkT1bSYbbM6cX8BXfYvSimDQtQxJhgFLZEmcTZ4tJwvf4arsLkxcwcNXRk8ZKCw7XgQ3Arb9Y3tv3YLx",
  "key3": "3cfsQXVVxzdfYTvqeR7tXN2tEwNZ63uzG7SMHNFxp5N1oW6RBpuU62YLNjAeEQdv4HbdgiR7eU31PxHSzRhFB156",
  "key4": "3zDf2yVTZoAj72TgJ6efPB3dK1h8RiPHoSkqao8uLzuPDTY3kxRNt5XX64mxb7XNnWqN6ksyjDDXMTdW49Aokpsc",
  "key5": "T9RjeNsVtQvoMVibDWFV2cFAvbFuwcwjwATkfp29ZfNZs4LGByG2cSLSXM2BHsFA7DoZS7z5Q4FrQNbnZV5bRLM",
  "key6": "2wKsQDiVUQjnydVZvUtxvqLhkHJk74HEq5bAGfVZZxKMsUaDXMukyN5Y52jQogezCgk7uP93zkRf7KG26y4rqiXJ",
  "key7": "4Pg2MMWM5Usd65mtptB3uxQkoWE3N85h5YXbWDbi3zHzprYJ6bnAnD8pPkATiVHevaT7B8t4vXXtTUDfShM19Vcm",
  "key8": "5eWtEvjjeaspAeBosaPzmsCrh3PU1VhhBM8wTNfehLMSn2jRFmY4xPugtnARq1C21XEJopPSt8HTAW8H7qNf5Xzq",
  "key9": "3vcJnqNtUGirBfYLGKG8cbyAHGye6gJXiQvctWXnMgUnK2VLfiipK1dG9MbeWi4LATnBBCQLuzYutsF5SLxbjNb",
  "key10": "5YEqUQX2Lc91uou6MHd6g34Zr1YdGiSx41K5iLBPQ6wSTeM2SGfGRrjmfPMmq7rCDwuts6jcJkni3LL7mrouDHV9",
  "key11": "5s5byM7SC9p4W2nyroF6oetpBg6tFmDjx1HA9vUJTtgkJFikNpcyL8mnTV4zgPZcxxKsNuihFraRf9L5DeCBpnAX",
  "key12": "3oCdbwAYVbsUDri6f7cXGNVS1Jx1jHQz7hTnXfBZ9EHEq9AgZvbmkJfJz4FyCi7jQYSreGbP13ac13JnXRuKoCXR",
  "key13": "3dvoQry9duwFxxQCs7jeJah2soecq2YHZdA9nRrxfrdXBtRhZ9a8LqZjQNeoY484EUvhTyGReZs12PJCN9xXw8NG",
  "key14": "2ox3kotowPpUVteiNdcFF9SEsaWqLi81MX9A8EfwUKKo8TaW8wRPD1zxkRqJHVGRDMFDGVifKeyCvuNDFqNR97hE",
  "key15": "5EX42rwbg7KeYRRHQLi9L6LisvkJqzJ8msKutc1mBwRq3rCjKEZoCLivjfsQKmgT8Bh7K8bEhkpuNTJru3g8s2uq",
  "key16": "4onZQSnjWgiCavmbBcSduHg6yRGi5qtwaJVnqce2AT188AAcmbxUpDerzYF5FocMpfbnsSsrpGxr1ZCztthSehJi",
  "key17": "3NgXQnnnb7CuenEkVhFmS7gqKBYDgKeMWt64zavUybNGE46jTC7XnUYZiKXoVwksDFTTyLBFYh27Z4n1675cf3f7",
  "key18": "3rvJYyKJkqRLh9euR5C7c8GN2exhdD44F5krwWW1p5HUSiPT3bjnjAURrsmGXHV5XsyUPrvnqKNhBykgxUTPnmSZ",
  "key19": "5seHDFPYoL7XcYBiJwzwBpKXZJWQy4TUyHn56osFynoUDZi2Lr7PP2H6eLrfsT7zHegwTp1TjAgwAD7xGPGPMC2K",
  "key20": "4fRrZWZFqFoSchzsDN4R61Aeiwdq46pLDYfiyE12ATWLNwGqq2dLpSBCSn63Q2rxhV7PbyibUUyziipBhzzU2SfC",
  "key21": "7xdfh4v86xg2H6srQzMNcA9zG3q72HSH1GLBxFuBpyBykYFpatWL4RwSKVuBrpEm4gq3oTJVXbNLowzcE7HfejE",
  "key22": "3eT5xV6k3bBPFsgnFVqZGjJTHunEoMUjT8xvHjpMfx5Xhah4Cu2ExtR3fXtFEiW3eb59vfptkz4y72QXCVRofNAt",
  "key23": "2Mt9rDDjVHBjLF18gtwPdt8F22caReAF7E1wLr6mkCpkKQTrWMTJuEuByevn7WeCPqEPB8VzsZSwo9gbxYjNzxRp",
  "key24": "3HYChWmuaiZHDHddYBANfB6qKsfJoWvxV36p7mUZoEQpZW49JiuDV2LHC2ab51mU24opCozkiPQn5W1FyK58nknA",
  "key25": "5r8JmcMKrdEsPb7ga3KD3Y1LQcdt6nTQhNzNuAebhFvqut2Eum59XirKADQxLoM6kJaVtTqryEbWFJeigB4gHLkN",
  "key26": "4kppxoVdQkq6zDTb2gRcN8F7JYXpzJwBAahJEjGEkczgQnpoRJSZ2J9zeNkroLrRsVTnXvxWkoyaS4TKWdK5TubR",
  "key27": "3vyXuou2H8dA1UfNUN8dhCvgKdgcNsGYwr1pMwaiEtLHziKhiEvvk8acakW9P8jPhTPh3EenEUDrapj3YSw3Fooo",
  "key28": "4E7GsGNa9YHZdN83mQtT2Mfo87wejiXbkxMfMrkSFPGivTRwcNpVPLD7xBjJWwEBYpEYBNLEHNR9nxKVsUzMkZzt",
  "key29": "N7axUd9ibxq4YsybZjw22mEiSZ6cZVrhMd21VtqBN337jkitS3sKVq2LsG2ut2JPrUthW2GjYANUay8Zc3W5Qv8",
  "key30": "3uhMMoDCDFCUn4rgVeL4sr3HVHqUbDkdNLa6g5sGX34nh1A56SbpmTCfET9UJrrFXR2gGJvPKoZ5ReUiXkRm9SzA",
  "key31": "2ppaopcrz4xhHXPPHbgU3HZM8fqqgC3mAVVZg8Htw5jSsPZTHDt6v4R19Z43ipVgQd1gWdVc7GHzDypt23xSPTHD",
  "key32": "XYDRnDPBoFaKsYqqM1bSFbbESKZnasxTBeQLTaoVm6ESyybgC3bnwZQSWoscJYvP5i95MviTGHTeFhtfdKdKzCX",
  "key33": "3PpQ4bxHTvha5xG9Ehh9YYFxianUcifdeFGWiEJWPZngBuGeg5ZUBStpKicd6REQj3YidqzKwNdDG7BpNWDDQ1Dt",
  "key34": "4k7Eu64ubMhxN3ZmC1Vf46vV5o9mMYXQkYNigA1bY4RL2hawXhiuqrRaNnpKg19rNErgLQoGHbN1aruDcbXzFmcC",
  "key35": "2KzReeaWaDavEK1kreaVd95krpdZ4n7sr16ZB2hwio6P615KYfxBA9L1LoXVkGYv9bJ9aqqrybYZx2yqbbUUKZLR",
  "key36": "s5y1dkvT2JCmghP2FSXN18wsUzF2e85Dxs4HcnPqmAT6oc43vhLqpj4YyNUkJkUC71ZUCNqgoV9VGQUQxB6q5UC",
  "key37": "2wYJWf5oAzA8bdFxyx6vaXptPDVAgJfCTbt3BKDJvBjftL8uEfYv8hN1jfERgqZ2wSYbd3r4G8E98xgeQiFq3WNj",
  "key38": "fr5bC4j5JfNgJDNs63tNkbWY1rQwMFjvttSmrDcHTniNxvJQqkMxgnDHK9yi7bK4RjTX4CquZpdsdMAmijASdhX",
  "key39": "3E963W1XBKFcckHmkETFnp38dKL9xJFofKMecwbrcssrnP28BT9pfiV8tCcoThh6NuLrzzmvn7qsdoJ1xSu2BXJ1",
  "key40": "4AMMhTMPkvzEeSdVb9o4XVpYUUq4Sw8Chihy9zUirSfKHZNzSz2tkN88rpMsStAcuyegQjsg4RQyL6RgPcSzbJwb",
  "key41": "3TZRNQghujzCHcHRAg6LEwxkBpfERo2285zLGs6pVTkKRMXmk2xtNWXQv5RXpyHUWN7ynXT2M2YMhAKVj1NpZJcp",
  "key42": "WcfNZTL1ansdDMVuppa5AqA8wdx12xdekbMWzEorkWEYuYQZtBPrc7NXY98sgiVUpPWMHCQQzT8kMzi1kmQqEhv",
  "key43": "62toK9mDdnwUEqTRW7QZ9MAM1ny8jKdZmeBRoLuWmz8i9b4q4B4Q9biQDqn5EfJekoPW6gtmqCZY7BdLSKVo28yp"
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
