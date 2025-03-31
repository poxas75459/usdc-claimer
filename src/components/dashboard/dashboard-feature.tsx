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
    "4rCz7qUSVS5aPkqDDMzTZR8TzwQKed41AUAW9Py78YAkWWs2Yj3bpK8LDn7kk2wdzLPaRR1z27vNDEotoWhsbzX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rf9seZk9ckP638YofzVnhvCMKMp3WjcnjfBuhrMDGA7xEWqZnhzkPnZmBK1n9nXLYaSZmzd666ZEaEDpTvTCqKZ",
  "key1": "3idTLq4rDx1gfBnYs2nzw33h2JmCMqyH6nNqtKPiWKNc4zw8EVcoLyf8FpVo7T1xyxkp1BeG7DPkWQ6RFAzJicq6",
  "key2": "ccSrQPim25WSBitU6tdtnvStDeKSFJgL7XbDdJUFose9uvdg8c8o8nUdW4kMfRWbftUfTWnTGs3dTA9xSjkaN6J",
  "key3": "66PFVsnoE5mucW7cgq5YYwYB1DQv795o25SWsyRgsFg7ySMfRvh4akxo26JTdQcV1t9tcByMBrCXz3EZcKbhU6Eg",
  "key4": "NucGkPSNqCCcG1tTu1EKUfTCB36oRALBCtHRCtfoGy1xFKJYFEFsArBe7Akita1iVbEkKnRmVvESRRhET3xo95F",
  "key5": "5VXAXEoQ1gke2Wjb4Uwt6S52VTxNjBqUNdt5C7dKkdTr8awowWwRrnrNHCFFh1TMFyoPv7f8XXVahL8cGe6ArDxH",
  "key6": "5m7GJKupLDYJssjpwGTtr6Qyc1AuqstkrwQ3CE13nQi7DTE1b5WLY539pc1DFUZg2F51Qe3Q8wZkj3DJqwFDR4aa",
  "key7": "36PTvN8xCTSHQF6VQ9Hfyo5qj2NAJAYiiTCkHetGMznynKGLFpu8tfD9cMn2SAqJ5UxxwqPuGqCdH8k7UD9pmNLr",
  "key8": "2db1ZiUXH6JMnYTHD7YfsGRg7R6Djx5rSaqYpyBZD1bV9rwHUxVSQMsREUcNF5iGw5zrkizty8yiTyjAzWju5fPz",
  "key9": "5dSFUk1LDJmkF5Auxy5vpB9ZTcuSJd5zXfk7PFUfFaujjCcSnNThff3shhEXP5aduu9tqcCY1CBVMe8CRDhShZK9",
  "key10": "3rT3QydUyTtoLjxzGx8jZrepYLcF7aR2UA5YZV1DmBaJerF9fpvHSXnuEx1HzWnsKuRzFVbiMQ1gKEcNkmPGyrKg",
  "key11": "2RT1FSASLRayCRubz2FrA3ZK8bxUmoNYKThVcRb4xCmXajwwyayKT6dzX8X3cd5cMjPMWHDEjQepmHkDNJP9Jqpv",
  "key12": "3MnFsJgi5Gx1GgBr8spL3qNnAB1Ls4XLYHZbetGVHHK2kt7Mtvw1q2Thd8rEN2ELKyafSSUz8xiD8adT2JhJkD9q",
  "key13": "564qBFa3aqp4hSsaJUfuFsVkmyez5D5n2qFKc4sHb6DHTvTW8gs8bjMDDdyLaGLStSqrq7UADFkknurRKh7Nix5m",
  "key14": "3czhwzJf7bHinqoJnETjBVjYfhHQW5uHi1timtP1o3wnzfZzbuQDTmdhrN5hGN9v9w5NQ6R8aD6j9BAzh1CHZUdL",
  "key15": "oUuZfxh3FkqQkYNRE6FBBwxSJ97a4VKB2mC4wUrDoa5oE2ka2UDAJbDn2MCgyP6yLV7MWS3GMFDB8i3y725M1hE",
  "key16": "4cH55ap2EC3VcerTpN87wzvqnTi3LmgaaoxhQ6B98neosbSc2UjbeZPoFURngPRshCxEc5EQfQCBr75ZkNphwj6s",
  "key17": "5NDT8sG7gLcNv32UzEVLHE4qu1zH8ShaU5nsE9di5WMGuQTGhZ4ai1Ny6TvAHFnQJQrbJE8npRb62Bb5T9gfKdfB",
  "key18": "2iKFxLf6NkvR8exDMtziMfev4L3siZu2jZdAcCjH9qMazuwMfhnJSwoUkD4rudHCNKzUC8s5N1JvZkQkxAyeyVqk",
  "key19": "3XWq22LfgzgXGKe11fHSM6L8sBXvs7xo2sKfGHd5VGk7ucwhGQgLRDi56a2WE4wSTv4U9xgboQQUduzi7xhsPDEk",
  "key20": "4ofQxYTamaGXQow2DFRFgXXVyDXVYM91zLFidhY9NEV8TkMjqc3KymGEjcQhsKov67fi3cvNCe8pd6PLTZaH812Z",
  "key21": "wX9n5D43TcZVJoWUHE3w8oe2KcJbgxD4mW91HiuDkiKQ6KS5TgA2cqiyURmfTb1sqcxPGShYM5J4Vuh3h7o3iT9",
  "key22": "PZ6DTZU4WzoCHzyBANZWag8NP5fdhQ9hLWNCiVy4hSVmM8mtu2SVmudB4SA64kQ2N9e9tcVfQnvyUHtmAkNbuV2",
  "key23": "4WDL7xmi441dk3Ty4a7t4jvVrRsPNJcd8mG9vZypeJVYmF4m1AYzcYi9kRe3Do8B95JLs11EaWMUBamquKU5szzt",
  "key24": "63YJFijE2uxBqDPa8VuCupUgTZZ6ob2HHw9SfaMRtfw2ujKqk1F8Uu7ebU3NQfXx1PKLM21Ko6oJFV8YHPWJv9m9",
  "key25": "4aqGzi7NfxwitbkkHMYkKW466RbaVj5atc9BGCV3mzm7FreFmuX2e1SqKuEkK2jyNPgykXSseyKdDUHAQZv4srjb",
  "key26": "4KfxCm9mcvNFsqd8UT8jEk4zyRU1ahK33ssE4T6mHR6WSqGjkoNbp7JiRaHn48MRsfFW1faU8CahdRxyFfqk5UVD",
  "key27": "3hsURHuJDV1V8GKKe3JEyij5K9ouVjgD4PkKTwXMBUzBMUZecc5D84SPqvL9pAJUntEMHte5e4PQV69YiarjpBDp",
  "key28": "41hu1NjmDmVCmjfsoJyrxMCshGtTkGbS5XJRdAtV8Jf8WQwvmhfb28TUhhfExZiMxSZyN1AuvXUfPwdkdeoHWkij",
  "key29": "4fXtPu9iZh4od3LRNAAySZysVCoEg3LwjnQigSYgCDXUYHGCKjctbftViam6Bk3pW3L4TepcYE3N3kLCG3njoNLn",
  "key30": "pgab2U7WJv4Kxwx5qcQxmN84jbjxYsKNSBAXywQHC7WUJtG9FuSDED1rg4rGoXFh3Ce7bYFa22677Hx1eGqPA1K",
  "key31": "5XM6omaiurVZuMytiSTVLPaxGapp7xM6A4j93LBaw3bWt7ZFehGEZLQmBc83p3JeExq6XiUMEdY8Cbz1eHFzmnjz",
  "key32": "4QPqkxLKx4cGhWaHD6sAeZ9NJ5tHbSZxMZmdR6LzFLeQ4v85Aj3sZKMTVf611dcDnHCiggBLCUQ9t4tU7qy7wKvF",
  "key33": "4SPmZaUAk35HWMGGNAQmG9fiVrAV3Byp8L6SzKDjjAcbFB7sCt2Sjh77gBMeBHyC1KmiAuwYyk4c4sRw2jW857St",
  "key34": "525mZ5t62UL8qyyMmkJnjA6mD5tEQwWZHLNdqrUBgjAeBtTQbb4UiakZJToPx8bVs7MyQHRbtBh45jbmLDg9Vtso",
  "key35": "4CeopEACqv7Chu4mxhCkFU3gmEhsfRrstAxEkbsBkMrne1T9iMLK1jsqGMrqQAYbz4h6r358nvoDQgkaWYPsMDLb",
  "key36": "21PLPHPhuY6xxnBeCx62KL2o2no8E5yXjL4tTuSXJFNWC9jkZKxLajUo4uaVLf5UViDNZWUbvVZfGN1mPH86vf3W",
  "key37": "5cQYXiU6M8zkxJu6b9Lzze1LDU5K3gb83aUGvgJ3U7EJV7ZCsXPVXqZBCBN5gaQGdJaAL4iF8cSRH6i9LR2DsXyb"
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
