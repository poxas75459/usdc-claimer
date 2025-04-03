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
    "2xrYDszY2ZwUX5BBmzSeMvU3oJoJt6aoy31oEDK5WHGJBUFrdtCuqSRvDLv6BDvQ7UFDkdeSDWUB4FZWLapYwygF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HupbeXT8Lr8HoFe9QwLL9nuLQNWARDou28jqPrzT5nrQPkrfVEnqc3mBPU543GCMhTsFBvRLRmQ4SkGex1Hb31E",
  "key1": "4osRhJqkhX3oYCUST2pfEoDTjJPRAwyRSVdTo5zZw5TSwoKrWPhtHDA27F9PE61kUsZqTntszKQ3QEa1kthZAhkM",
  "key2": "4hDdWmzzLjYkkVvqdaa6p5ikekfnegY6zbWZ9d1g2QWYcPJ3jhFF33GNfAesPsU77z94qUUKYi6P7SjFu1cLh7vc",
  "key3": "43UtturLmaSbGWmGNUDKUtjLoULzRje9NwAjX32kEeuBCHAgahEfHTcbjFGzoZ5z7nr3kMwcmd6ZMBJ6we8yHpT6",
  "key4": "2vrXfnHHjuVZ4HrsQ9Ym1LiPPgTHwT4VuixLUWL3e4XvcRrjrhQkz75hwQV7zjEV5Tv5eaRiBVBC5VN4VLifhFFG",
  "key5": "5ZLziMA6PGdjKAMijpBqbK9yQ47nwuNvayReShrEQ6AgcwBjbDVDvNsQzY5EosxNqcA7XfVeF7n8Va83S8L69NXT",
  "key6": "34DLtBfd7xz3QpFNvqooCe4m8yk5ztdc3Ztz68q3sKrb2K6eGzjYHzpVp8vs9QxW5viE5CbBPSQzJYQsgRMSk8JH",
  "key7": "26wT6kPp99QywPZmBZFRBe369dtv2j8JQLuURjLVi1eQAk259tdh4dAqARbQMQqFkDwDL8ESCZNZQhEUt96UDjZv",
  "key8": "4aRGvu8z1bDGTFrJQ1CexxEhzr2wBsxSPpkVSemhiqnUaWhUL61BkwdksFEbA8hBU2yhJbj21hnqM7WtNXxoS2F3",
  "key9": "3PwnVXqUAXKDM3keakoGxcbHHi9wnRVUMSDAiPTMs8UfdadABFEcxvawTLwQWcWfswwcYix4s7oiY5vmHmCXh91i",
  "key10": "4KGghTrkAcn18uAPvvCsU8P1HzDWoXdWeNxdgknMhPMJCYXz9SVVCKppqE8mFwMvVyMMCCjwB5qd7b4Nr4c271yz",
  "key11": "tMio4NaLR9bG8dznuVQv5proYzayo5vsRQrHbffV3eLumn2yw3XJcTiu2QuC4LPwn3TB7FGg3ftsbCiAfWXoZD8",
  "key12": "4dRahvDs3Eck4CJ7iV4NMLdUbsV2kAC1EWM7xLz79hCa7ibBBVRFdZo4fb2Dn6hV7K2tgPrA9up9MVEySG7NLg3B",
  "key13": "3ZXYZEHPsxM2F22qh27VgNGfcCNzSJxMuETnu1rFfAWPuJy5er5ozrDhaceSrsvMCbscwEQv51Hj46vrw2vzJHfT",
  "key14": "sxPV3c21BsvpcLh6LexKsL8EKQKfYkbL8uvE5gKMWbkqYked2Aou7kyBbSgWbcmzW7rmgqxwLCb1ZQoRjgCMC95",
  "key15": "5956Sbs2XDTCRKkDwnqwvv9SgG82dT6dWuTNgg3QkA1Q4y7r3yEmh8HhkEwLse37ce3bPUJfGH8ckePwQPFgnrAN",
  "key16": "2a8LAcQEj48sHNr9mgY32TDksSMstvbAoPeyN8NvWMicQEjKN6mUXfTSyjicgQSBUy1uvPw9LuDcVqRBtVCKS7rk",
  "key17": "5wH99eE5U2Wd1mc5b5PW3tERMcQBjmF6Tujc13Y9Fd6r83p3sakRdZo833TT85hTCYQDwfEDtZ8wiN1m38WKybCh",
  "key18": "66ex6SwREH1hf42BA4XFBqV7yox5UF9mqS28MyzuhXvN293mXE2SXyDkq2W5BbiJVwXyqXzp1ReWYABKSTpjdDKy",
  "key19": "4jyZRKt4C9kZLR44an4F1fh9WZkvCQ5w7x8XcynWzhhQJkME3bYxabUGEF4qksPx25ypWNeyJzuLFNHP1an9kn93",
  "key20": "2Z1b1DJxKXdhtNFCT9vSmgkXFVxG1GdnKxn8B4gr9tdwkMNNNqRiksDqyAfsrfpmp3zNFankTJpL8RnBM6189Sq7",
  "key21": "2ihqRUWZTypbQZAxBFVABarA4LuXSWN1gNgF43SkH6Lw57NX9Z5Um4KBeYmKSXeL3Dowq9KJkDFJ4EC3VWmSJGZv",
  "key22": "5pm69PUjGHP4qWN6NjBZddXCZzMqd5SXZMJCfwo7HSAB4yo9ofeFm1foqBaJjwHjLYYKTsVq6mWgvFSrQdiP853h",
  "key23": "4hwc1WSEpP7g8i7ncLJ2pdKfoZjqAt8r4hYyWrsovKCJDVMpbCJUsox44uj5MwusuMyw8jyadqfaRg1shDjQKLoJ",
  "key24": "55Lv7t1KvYeX1fjuUFWak1dd3uPtgKjxhBgBXW8M8cnSkNkBs71X8BvyNXgbiSujZ6Cr2hQ65XaF4JB6BywTJm5k",
  "key25": "5z9aRkSgr7Uq8ZzgrGtEP3zqu3bzHzyJaUAskQQCHduvu27jM7xGtarSZZ2fJQWoLP3uff3tiVvzoeTcoYgKgWS8",
  "key26": "v522mXtJT5Vzfd3T8t6fnYkikfUm5gpEaizvK3x464pYx3HM13rAu6jvzenfyiqhrXAGCAV59pi96jGhLE6CAsy",
  "key27": "4aKyoSwUnJJkTTCf6joT4KedrvEbYUkAq6dGNHtxLYjKUAzC9o5HMxgQ8vY6xeUdsS23K1XZES9mPdhBjLBzf12Y",
  "key28": "4fQcUA92Sv1edE1GCF4qd5XnaAmEkRfdroEsCLf973KzC4GjzrUfsC2nR1pEfKRRn5sSxjfv5KS4eP3NqvaA5JyU",
  "key29": "4jwH9LB3h8KKq6pWKjVutoGqyrjF5YvCv8g3duodqm6VaB9Ea2AJ9Zf1RTeBHECLKK3ND31dvwSsxamGE4Art56s",
  "key30": "5ZKSBzrfwb4ePv6PR3qJVwjtF9gB3FJ99EZTQASo7Xrh2U1PqbVdq1ykXnjTZbUvNBTGNdmztH5ZtYapXVH7e8Gy",
  "key31": "5xKcQML8hm1jD7pxrpYdFQDncwD3aqnK5eCsMZa1Gq4MKrhaHvL4tsdGBzDySdfMrg6px49UC2HmEHCsBhiEnCCj",
  "key32": "5Z818QM3zqQx5YJ9vQcsj9KnDfJv671JTFYzd3atMvDZxEYcjMCJvNZvJTDZGKmaYLSUriFCPUEHPXABgMAmD1Rg",
  "key33": "41uyTUtapfyXbvisBvts1T1HHxe7itmBtbLtPfqKG5F11qfwdQuSDHYKvnW9AUTzgX8qixCYrhAPpZzTttUmuF4q",
  "key34": "3TEQGKURonPjnqFJQn1E3meUGvSh3MfCUFmj37qpBbUZMAB4ALc2HXaWwSEyY3rEsvRLaNUc4Jnd4iz4YYY4maHK",
  "key35": "5QUnJVtwC2uxRRbDP4KsMd2DeYYkK1f94cSEH9g4CHQBaEWgjcthQ3Swb5vmsfF2BDjN1XymxavRVUxFqS8Y7cZn",
  "key36": "4BpYrhaZ9U2pxVppfEj22FDEwTBW8iTz6sip6HWBdvbHHex7WBa6ak6zbw1FpdctYZXis5Kw88a5Zr2udm61iyb",
  "key37": "2YGUZRYY96W893gW4Jr4pvAmsB7W25xuHph5nsrSpmCuwEm5nVRLw2m2oxeeEVLvH7EJJfWG8dCTSH7jV9r9D8EX",
  "key38": "2yDrz4kJscy4eZk5xApWbrYCK3pmjRrvWwFtTF7CUDxbDchF7RzkabozipFXPEyR4uUKVQ2KJbYDDc1swRSi8h8H",
  "key39": "4HWB4r3U3BeHKngrvDME2PjjURu2LT7jBobNiY4TssJdTT2qeCrHpWPVFVU6ZuJ4pCGHeaXM9TZKMkwR4HCw8Tz4",
  "key40": "3A1cr4sMNtXyEQPQdNRKR3dLc5gjQR4TVvkYtu7KuZJa2GHaQ8qkrTFLSE3Rvf1FSz133FxZS4ig5rcCjr74qjqw",
  "key41": "5twephZofUtzxoWbbfsRXfm36jHr1ez3ThLJPm9FeL2We2cyGvHu43qDVJ5fvnWgFgnyvzUsqSZjkbJrnodogmDD",
  "key42": "2Jt5qrRs7C28gx4C75UBbdsSCvMCvYnQx5QosceJcxxjhi11TNy2NVtSQ5zWjDGGR6hztbSCggm7KB6WmgFAAd8i",
  "key43": "ns4j9Q4fNUkpK8zcGNwrJQoGbpnqakbUUDLMKGuJ9aVeTrSzcRLVb9SG4cEbBwnoT5wHpbCFLaXSY8SPWyVLZFj",
  "key44": "66JFeLVkECtsdAq8NTmPwdRJzCQmZis9A5yrPC4fGK6AsYJUW1a1Rk4mZ2Zv2vBwqeyPqpre33Dw5KtLQu2ZiNYq",
  "key45": "2Dof3XhwURdQfKER2zBGBLM7j7W5gGyRjFqje1rBGFdTpXiGjKH2iESmezWrDx39mCrnR1GUWXdc3BS5YvDcs1uJ",
  "key46": "2TjkXRUEctQrMLxYuCrzz15rhdH8E4JZYQy2B1XT5u9uY7KmAjj8uMwpqnRyCpS4N8wSWXvEMUq15Ms216dSVwxD",
  "key47": "2M513kESmWuGKD2SimpBDYd5BFHy8mvKP6DBiB7Z2F5zG99mdPFin657QVoqqVoGPX6xJuAgFAiARXUn2GqGMcW6"
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
