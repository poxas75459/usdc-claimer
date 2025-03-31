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
    "26gtmigBiAxVu7GZs7CT6YLJx5qbKFtBSSpPAyzEbX5amr6dJBgeYHNUYLcCPAsoA4zihZWkYgW8k9Ng6JdchKRc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QZbBk8qHQ32gEHH9HvBGGDjizagd9Z15UvX8G2UQL68yqb4PGqVCQrWHNDTV2PAWaPRdKn2N9XRkQfwTGa3A8Rs",
  "key1": "5WhtmLsoG4MmyBEWKfeFQpvVquQnR8c1WcBKy4vpxFBTSGfkJTfgdJNQyVDy14DZTVEdnzL1gkyg2wSc7TMhd2VP",
  "key2": "2sMUqVNnUWH54LByLVysqdts6GBm3SPWZZvZpho6JtRqokiuFLVTm8NR9Chso8sr9Ps2DnYvr46dWQzb2Mx4AYTs",
  "key3": "chUHZs5TeteCkNEG6gxQi5iaMfrGH54bArEYVRn2TbYU6P8Xs3VHFwXgBnjTwNsxnRwnr1mVXVR1JmRf4NoQ5fa",
  "key4": "65jU9CCerxNAPNUpcmVomNhSRZ5mpi6FCQJuyhUg135Yk63z3q9A3fq1oD3Rme5tJBxbxh86vcUfcdHk96czm9JZ",
  "key5": "53wqZHCArWe6TVV6hpHmqTSzEHvaLULx7q3mjUTFPQDCbxud36gGrgdjBvYAwvbtJPby47qF7VJ9Fp7okr6Ndh21",
  "key6": "5RdTwtWi1jVZZBxugrGFKSjKA71rLdhbqXr2EbExKhrq7AVxnG7YmRev5RaZ4Gf8v29d8zUQfDMFrUB5sEU45kKw",
  "key7": "ho8m9XEC81gqsGvYNo4PF9aKiJ4dzJ29ZqFPQ4ZkexuoALxG7NHHJnT1Auu3TjqaepX9qFSreS1NdJU9LFBuPoX",
  "key8": "uCDF8B116WJhduEFfaX8Y5eTVqJT4CeV5gcUVopebVPiBpDXb5aKRUTBLxGqjFZBeo9Ro495y94D3RzW2M9Jde7",
  "key9": "EDT5jyARYVGQ6UDaQXDwd3QUXsuRZcmL9gdhahxcLRT9AVrYNBv7RVT19cTi3YJLFZsXPRCfCUaMUseL84TZ7HL",
  "key10": "5JFdHgksTRtq1Xe6DTRdQGkircpHYFCZ6rqVUa2w55gNAirpeNwbPksrcRkds5GAQRaAAaCZg2JJNwGEu6wyV1s9",
  "key11": "qEX5YzGF3F8PAGyQN99T7Nkno6u6qmrJ74gt34EPqoEryftq6ZT7uNrRaqdzeHvFMW6GV4QLn7bn4wgnTqCTDXg",
  "key12": "4p39q9bDcUb4WQ4jgYGB72tf91pL97ijW4pgdr2EZnN9DNzxYwSbbZzZwfRFHiC9V7yPBWLZ3FFF4VY3DhuYMSpb",
  "key13": "zhcWEgEmtBAhtEMn4JExYaEufsEUoiob9VV2inAQCq3d9F8SsPxJ2xt9Mwcv8AwBv2LhWCEX4rQdoYh61St7pTJ",
  "key14": "MGjSe8jnMWYkukw574hY3XC6u2PBYVYA9TLQW6GU1m64AEqbPBZJFdGBECrN5YuQpMtcsZhmQB3hHunPPXkw7Gb",
  "key15": "5Q1aqX9ZosLbESsGMnqRXNPQKzFnLj48UZgmQSUWUAs2bJ2DMH7fMjGo59KocnxpycbWHQwrxTEi4niKVmj8qVKk",
  "key16": "ujt5A8aEY8X25rCC5QwGtj5beBBNEUfQyESPx31ENQEtz5wnKmzuiG2rowTGa4C9kuvTT8ZSPouyGZSEMoSAe8a",
  "key17": "5o3LkYP1cyDPKZe7AhroYmTpiNx7eSZkG5w5ZTYdQSFf5JMbxGc9VDJvkgdUSV7VLqWfuwfnfXwufvBbKT9r8UYM",
  "key18": "gEB826sZJGU8x8b4GUkoJcp1wR2NvXakeMFsn3WMWcNu3cjZm8YWDj1g8dqCx96JBA2psPbz1w8YJifpdfoaCW2",
  "key19": "4wP8U9RUM7ktAWfXMEFXHtDB2jDKfkatJWs7MwVyWuj3YSjhqHjb9X6c2HtxHYUyS11Y9J4yW6SZDymTi4J1RGGn",
  "key20": "5z1Vw4DyUfdhC5CxJxvWK4EC7vCpKFFFjYtM9r7GRJc2XArbcPEFcuRjoLJ77zuwVyayym34RaTUYC5HU9AmXHLq",
  "key21": "FhVvuBqsTAfFdhtzEPCCxZM6w9mcU7S1CpQ9fGbftAuFe5TfpRPhtQv6FDksGH6dbKzs7gX9jGn4ifFzA6L4b3v",
  "key22": "55aWyBa4zkWp7pPUo5GvD8dTxkvKLEh1UnoMpfy84eybjh6VcpxTYaCU84UJp5kyADLmZJRN5sW8otDhRE8iXA8k",
  "key23": "5NnqyoQSwtjnRkRHNoRTSJUoVZhdtVJrtCTcqBJpBvd53kWE86H57ottsP3jdTETxJpAmGcqxecG9agRcU96CEU2",
  "key24": "J1ETjwttN126c46TZAhSFGCttSWWx9Pod72mX6yCx9AXpmVPJMTy5C9tP4pbQVvQw2kJ8QCBXhB4uoQbNkTV4WE",
  "key25": "3EiNmwPG1NmBT5wcBpFZEYfsYh9nK6cwNHxu48PyMqroMUsaMtNFskuyNkf4RAjhTAAZKGBo51dR4QzU8kv7d54E",
  "key26": "3CbsKUEfy6RjU8WQYbVv1hEgTJLwP5ek6HbVN5CF8RBe81RrcyGGBsUyYMUb4NPzqyv3Jc8Gacgbyno1be8D8RUB",
  "key27": "2LjCUoaqaqiQFgPy4ednZcYUUnxvPbnGafQ8efGh4ySCZSzoEsrTmwckhiLtiKmoCdMUfgBRhzd6iMRULKVVxTeu",
  "key28": "4bMHM4w52DATbs38rUf7KHgfcTfbyoxbiwhJbHBaQKouA9M4dhiKtx2rEb3V8SDEfzx8MSLz8CEYha2Cdi7TKVVm",
  "key29": "2fLjiWZRyH4WmcbXB6ufB6XRst4bvUsWygroYKiCfUSUKv5W5Lxi2Y3KkzpXkE64igHktQgrT2qD5nwxEXVFotXT",
  "key30": "YmCEDkrdoBxcXrjzouV7QfzK4fYmq6xMA8VQtwBqWKcHUkUzmKASS9aGQoNYaArcWFm1pdon7VVP1Kf3eknJZ9o",
  "key31": "4K8iv8gPqrT68s7LRrPfakQghc9xJJJcLymvUFVW3BFM6z94U6hRgPK8mu5CMvKcNgdUYeYn551zXRKNg7yvUCab",
  "key32": "h65UX2mKzfK4r9rSVYZ912j9G9bszMimwbdzArYGGoYh7vQnSsc7T3ch1T3ySGaw5BEDpDCvfDNpTx4WcYykGJN",
  "key33": "xf2AHamNNBLxBE46uxEiAAk31JErx6HFejhqnQ6nP1SKFRFuWYp8gzL7ziWLxs6zHXePHprf6ieWptayMRdLutM",
  "key34": "5wHD89SBL7nszTQBUBoNkVQLuDwmnx7YDD7CQXyhDbGjhG7RPo8TVdac6cyRZZff3zdzY4rMGib98zj85kVHJnrj",
  "key35": "VsTeEwTV8DP4Fa4tcGXnocTnYDKgBgVRXUw9n7kBAE8WqCt5DR1UrvEcyLE4T6xtcLGQqEQMMJiiB6Uuc4RaYvs",
  "key36": "REZP4AgjZpbCJwrzvVQsf57hUrb3qq9aeCZ66swiDiE2ZjivKvma7QvgDXcAYJgkaxx3hCHDDp6Hy2s1QcDtqhx",
  "key37": "Du23ydP3MnCJtffejCb52h4GkE4BwpJz6S9T8HbcUHznaG5P6UXPFpBKyW5ybCpo6oF2uJXvefeAEud3USC5N1R",
  "key38": "24LhbhuTXz1cfc387fK7S9ncb2mEWAjYF637GJrPe2bmvxNZBCGGBV76WFNXm8qTjd3x4uyFBKUtiwnZfrtMYsV4",
  "key39": "3JnczkYjJUHBkjRbDPH1Nr7UhR4pb6wzyQAgUbvvxKjJe7uBXNUi73ocbXN2uRJkUK5VZrnR8tCTAac3f2EysoAA"
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
