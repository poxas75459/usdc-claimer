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
    "4MFuFxHu7gc54xeaVwka8jbeB5p98FiSZDjbMLBP2de4abV1qvxJMPX9QErUUipLscztktq1Swt2ebfLdbQDjtuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aRzY8temfg1pR4TeR9Lyt9f1ohmnBua3VHmbhd1oAwUS5ZdtRudbhD81uGys9ea6cBmafbKW8weEgpLew3S3hxB",
  "key1": "4MmMRy43v16kZAUuJaN2i2MUc1DyCtkUhkQBFDEU3opP5PrMTznHyxtUEtMf96tSzJhGCgLefQQjh41FKFWsx3MG",
  "key2": "4Bi2EqYW2sE8y39gMHuzjdC3RWBfFt3MuQwCaB8xb7Pf1Wz7YQMQNDYEDzCheqSrnokLUvTvBSuzKF1UPqHeEDpj",
  "key3": "SEEexzYNu4TD5wwVDLoEmr7pC2xcPrWd8Dh2SAMfxoopBL2KmaTp5PpMV8CuoNKcnPdYkWNinb4DiNQdgvvJH5P",
  "key4": "2SKPLS78PhqYzGcc9SgVwJtxZmEH7AvkFzKeGBeCcCGbJvoAkXrcJPEjMAkfx1yXRxCbg1bN3vzNAtxVrMGVnvNz",
  "key5": "5E782JNsorUR5oprsupRMBGQbjNJ2AH9nDAeSLhVUKHviTcpVh3noM2kB7eMR2net1Q41f8RP27wNNFGCYNh6vXy",
  "key6": "4jMDjRDuPbxFMPstp8fLRb6RpVgWXSkzo1W35ePM9xEQvHDzP3ZBv5BFrZU2Sb63eFqsvUWyFKvSTUS9hmbnacFk",
  "key7": "256cfHi1h5hkHwa22eJujtR8Ec68b3bxfN92jARsJpuXokXZqp4sp4z6qos6DiZCKe6ktPdhshLQGrHUZxnYdYNY",
  "key8": "2PMwURLdaNFTiqxyNzfox2eMNCUZLjkG9kei9VRnNTsL55RtqGGFdLSp3ZhG4gvBfG6wwh7K7LFBpAyQmbBNQJP6",
  "key9": "36yEGoS7qNNntTTj2aQ9T3sTTYKXwBxj1ULtEAnmeM8poLCJUp19PYUHu5rx7mSAsG7vEKqaN7LLjCqsiWjPXokR",
  "key10": "4nXN8zPAqm9tff9xwzTnzpPGY3nYk6xMCvBnN2gGFXwH8m6bSSWgsYrRof7wbWqQorYhxu7PQCaisTLPi1m5ifmW",
  "key11": "5uGGFpbqa39hLUqv19eemWupgPpUgJ3FcaVqQ24NqaNQKTM9McMhrWoENecji2REES5Qe1WyLZbnwPvMBfQGzffD",
  "key12": "XnUtEjTW2ZViUe1r2Kyryk8UKrQmaYV7JrG2d3sah9afAq6fueyXTA9qM2Z2zAy17FZMRFKTWo2Nh6PPQjnarPV",
  "key13": "5tdquLpPX5Cp6uciRxZkfg5kj3qN5tW844PEUtQynSgo2EyNU3eugtezoJcSvXkq6Ae3ps9cAVe9ArKQJRdLNDja",
  "key14": "5QvjzdGa4emjbjGeB6MNtMsa7CBDWJ6jyQ84o2pCzbQ6f6WtPy6eiGHg68jKvR6cmq3dnMNYoPXhChXfMAmB2yaH",
  "key15": "3jpqsZJAxZk3pto63asyDsRWsuMub729xrkgekcN2zdnaMuyJjMKPQSckvr34sKAJYE9HneAqUNYkN3RUhcrKLta",
  "key16": "KpR25AaqRXXSzWT7huZUiC2LTEuTywK9mTc3dX46amgLQGC34nWdkDJ22dpr85NReKGaY58i4wCRKz2wuL541sk",
  "key17": "58cyZerqGyA1EjPvu37CcFkPavMX3M7opNcxQbHHVxCGVnbGoCuxCiv6cGc2sJWukUeofQn5WUAoCC2pD27rSJsJ",
  "key18": "41WPd1xUaBvWx37tMc9AHyGsVLUzwE2PHQuztRp8RGfJfhxQbCfLZSDjcNWF3FJTKfbiicvpygj3xw94Npui9agG",
  "key19": "5gghAz9c2MZHVJiLkhGdpQMvknK6KigJxs3oxXEY9dAzQP7sFKeCfE4cXguWA6dEc79F7RsatBebGVFa6VbvHdmr",
  "key20": "3NTx5jT8sdERzY32kU1PsjmTNavueJVj9gA2vSfmajD7gssc4FcfGzC5wLM2t6JCp4uBcNn65ct4ufoCKhWLGmUZ",
  "key21": "2KWyVRWr6Fvv2E89qCCGDdCJwjQsHnMzGJ1BFGYzSoUYBHt4oDqJip1Fyn7qwzQYt3ugsFQu1wpQUTBLv9is92Gs",
  "key22": "3a4xguHjhPi5WnuMv5Et8pKi5RNdHffuPUhNJ5J7bdqnSJ8e8afh1RjfTq7Q1Q7A4HBDW6CLRLeF7TJpCbtBPAFq",
  "key23": "4FQPkrbzSzu9oBQsSCdicHx4Acc6ignHMg6Mz3hBb3U7XVS5jYWMmZmjETWCSmC7UNm6D9DKYMw67um5cjvGch9e",
  "key24": "2hcEW6uNmHMtQ1f3EtQxvYnZGVoNvfz7gZHSi3w8Ryy1P5Q1jvP1GrGn1QK54vuuz6CjkQHA2bYQS8cLxtZABPNP",
  "key25": "4UySxZHXV8iqQ6PbYDiYrrCFYCeaYdUeN2ERQaKHWSnKSNgEWrUSePjkVP3v4sQJXpa5T7pDHmBwjthdM1UC4FBD",
  "key26": "32KGX5f5Tz6azwFvEp5RQDYW3KmhJMX5NWVKEwW3ZNs4BmtMthQHwymHVLSYM1Ck9rbxJMMk2FZWMbuyeeKuYv3p",
  "key27": "2gaye5N5tgzZqbhAQ81sAEANS3k8xef35qGRLfpCZjMwe7XX32XGwbx2oY7dGVVHBQrYbcCLtwVjLrqxUz1AUoRa",
  "key28": "29t8BSgWQxXU7jjVfCpv5NZyNa6ZD7iaxqUJgE7pjrwM1UoCeD4Ni6YZy5B3U6JkmKCuuHD8f71sSByCztEWKeFE",
  "key29": "5LXSybqUjjEwCtgCqtn1dCrG7HXY7ftXooLQchTDA7a4XQUJyw4NBEJSSSGqA8ZzXLuv3xwFcSKi5Wd9asGWAuGg",
  "key30": "2wv38y9yD4ivveCFFCtJzLAo9T8RNwPJTuXwhE8Shk5vt1ngTZdUnQucYxkrs7FuDHyhnKq93wRvKrV77L2xg6T5",
  "key31": "5R6uMsbYSXo1cegRvvMfvqtE7koL4jMTpme3GYepMKmPy1HDEszxHzt6qwWmtWpVXMRWkyd1KuXxPUcFD1rVHYpY",
  "key32": "5bvggCcGfJRFk5CpkTwBR6ZSMbiaSb7cYanVJav6gHLXWEAZb4kgRsa5iLPGeV5yeGqhudgXvmVoNq7YjjaNF992",
  "key33": "29EhhAfzXwmh6cXJVSbgyvdes7szttxjt4gEFDFHXZyMUiB9fw2XRN85T9mWP1TBpK4SCtRcgZPTJWY9Cm4RJ8zq",
  "key34": "uJTJewe1r8UR1QPMmZDJzm4m4NpocBWv26SL6aKYRYAjXg6csnSnsGEbdRMJNoLGEGbKNTxgefagxTv2tjs3BQW",
  "key35": "3Pa15kp4sJWy6H4YiZvxu6Vu5sjKn4kk6FzHNSxPi2DtG2tq1w65vGT1ixkYe4cVM3UC9un768mmSztrJWEhGezU",
  "key36": "4jsd7tn7Sk4oPJ3ivkLb5jkG1Hq6MTCFHvc5zHProh59sTcqGNnrHs4ZKMrGo94tqu9wjNY5JPNLWjRtSqPyDpTF",
  "key37": "4PefYu7qFyASm44bH5c1fPqSdJgBDV2EC4bntWSnHKCy4wr7y7TX3QjrfyhSSoRzrj12PpPTSZHDAwGuGTCfGmn5",
  "key38": "3jebztC884qezFS4T3jEjxz3kwUh5aRLtZowBqHzpF5K3BBjwwoJXzJAmy5eMsULDgWpsNyQkHpt1hGpBZmqqrnx",
  "key39": "32VjBxrYB4LAZJaKbbLxCZBVZjg7C94xnduFv89w8b1j2Hoy9YKsBfBYqsSxob8c3QCkptJBQXA9thPA6uLMMMUY",
  "key40": "3F1rcmVVoaFH3sGHNEKuWA9W149w6V7vbJrZcNKiTjVvT1mSBxg1JkaNrdbr2PX6bRHTAAx9kCUkcKVBZobnfRBP",
  "key41": "XdVeRQJHNkBHeTk1krZrmRmQNuTzM7PALm2dtsCuvRHrhHghAaxn5rqp6vYD7sob31U3t1d9XS9h56Mk2kto4ov",
  "key42": "2watBLyT3HpcGPo6EttP3KX2q7QZAEGY9Kon8p173tBgr7mpxs1fDFY5qVG5Mf2mGQMuqv5gHMdKFbsHcmxTt4zi",
  "key43": "RYgomZAN8vEmcUF7HgGJzfp8f5SthF8DWDAWFnKuwpzBFRQFDUWvwebBpKeYqZZKnbTqJVV5hcXenCzsNgvgYaJ"
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
