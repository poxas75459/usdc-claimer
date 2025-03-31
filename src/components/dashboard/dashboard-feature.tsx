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
    "3sE6DM2oWTPEcRnCRbW6T68cmheoE5RRhQwimweX7GVw7nbaUv4uahZUmMXCHBwvfbzK3nRSxjmdoy7oXChLBrfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yq6Eat8UiPUyktmPSE6bswJa1HkjedPnrmR3XZ8uk1CPLguLEr7wo7xboP4HU8jF7Bg16cJ3jHKxdA4RrYuXs44",
  "key1": "4nCVjrs2iGuiGQ5mGBafXwXPVNXDynSqSgPJ7e8KhdYhjXKKFVztqCs4k3M8w7rjUNWPyEHLpoSs2eWAkDp7jprm",
  "key2": "51HDM8CUTkUeS8yph9ZnnkNZpH7cNwB6f9JKWha5EVsYQhWjUuUaTTYekXz3JcB2obKM52bYHLjEVJYSHcucrtWV",
  "key3": "45qnYmdZtGwxWQaFkJPNztXJp1ux73a53qtv5yMzSRAW9HdaGd1V4iVJxUih2gPRjCJxwm6SpPFAQEyoH7AAPcAy",
  "key4": "3jU2rE9e9pLjrdCWmedeXFXYFcNtQ8c5wvwHfEQm5wdLibkFjJ787ADMfigz6KH7715AFs2MmY3LSM4smp8ujUs2",
  "key5": "2y1PfWn4az9M4g4F7oonFfX5R3PDq6Uzh24uPNN5r8Us2K3k3qonoqJoHCDMNUhS41C6njKinoCgg3bHFhEF6fkf",
  "key6": "HAYnqxZX1Nr9tiPGFKaoSELxBpjzztAaPGNgrqecfRzkpuP7vmyoaDe5qWyfcCT1Usghie13bAd7jK4FhfTbFA8",
  "key7": "yar6NgoPnDjdjcqBkm6h9GdfAHgbhNx4QE65af6FnCdrjscoQ9PxS2fPE8m2nWeJMkA8puEJujQRLDghi9FYZCd",
  "key8": "64SJrUNz2PoC7vyaVmEgXU9G2f7qSfDKCzZS4fyth3SkXvmf2H35TEFx9XEYBLoejzomTb7YBRBaWarhrHUkUMxQ",
  "key9": "3hrRgWRbyhCS83esa34zvV9fouhcg9XLGwCxou2J7HUzzBjKptMnJ5erFh4KZGQsokaiedjUPA6peHsHLjLc5Apu",
  "key10": "58Bsiect24x7F1NH1w5bvzptPYjegbj62dK7uYu1MuoquUaNiXUq9L1TqxSWr684G6AgVsPvS6EU8P5hVCShikN8",
  "key11": "t74hdPhjcSVxbeLUbCDRf9No7XrawgQTmT2YbxerP8Fxp6QgswjzmMsYKVhVSRbHnVRbvEoBgN7SzZgJHztyF9g",
  "key12": "5xFKJbZTT98FkqXR1nBoW2zY4SxHMzikDhozBoAWWd3EJ9Yx6PhA3EJb5ZQh57a9oj7JzXRMHgXbaSDftDXrK9kd",
  "key13": "2Lmc3xuLiRYLZKFiwtvnmUjy2DsDtWXXdbFhyqcmwPi1VsDoDJ4Au8ZkcdkWmh1LERXwkorjarxb14VuWMxJeSmN",
  "key14": "EFFxnXXCWDtdNMizrmxA1SJMM3oL8ngCmczKwvur75GJEN6AsZ4CtU29AipEz9tPkiSdHP4Xv7ggyXC5dnPBokF",
  "key15": "4ZJKTjfmdqMKmPmLm6SNQBXWjh8mAZiBbsBKDGE2vJBS5NyiKo6vSzCZtzUMRqmW829amyzeXgbD4Zy8NeK6oGvR",
  "key16": "2j9WEzT7CTek8KuBfQngTbwUsujPCXkgJZtDmgSZ3iFXGGt6hvBDPVZuQYadnLSApUNosiz9PMXnJXPAm8wbpEBR",
  "key17": "4e9xYz6NMG7d6TqGioq8iVwDqTqoW8fYECmXNWt1eptFT5rGWXK4n88p9LGciodou2uTxfLGotYjsrEb8VAam2km",
  "key18": "43K6gY8sq15786oSF1pMJPy3e3YntYPnSZfdTwzDzVFx7RiYyDBrxToGo5MyQpLLWDJAqjeooaTTN7VExb9kziQQ",
  "key19": "5wSUgGNGGTYA2QUa9AKCpGG294GUDjyg9JsSuv1T3G4zn965u5p2YqSMUYsyuGzNs2nbtVadMVz7bGz12ZPWVr7N",
  "key20": "kv1YsAbjEZTkQwecfs98yPHbm5327RDCEqLhxedpGA2ij6EcKEqqwLkf1RRhHYV55QfEE8kY55bT4RSGJZ43onF",
  "key21": "331qUwnmzw8b7G6sybxM4NkmCGjcFsMxfMXBVLdx7z9s632Qi4fpDEjXjvgw76NtimfDgz4xMKkrbgHXj7P1Qu2g",
  "key22": "YoSDN1oRDn3CA7PnFBSxNu83T4LDbhkPJYiirqwfgEps9yZMLusfSZfbcfNDM2zM1drNATkT3EJS1CWVoMDDALu",
  "key23": "4GFTAJaTJneB6nVfKCTJ5Y6WRoTf7GuYxBwnkFAvizjaEp1tpzc45rDhkUUEGTm6FipjxAsk5hQSLQ8rg5xm6RTQ",
  "key24": "MUu4x292k8yu5tH675B78g8oyDDtxYU2xX4hoQy4TAYxu9FKtXBmVumT7jLW317PGcXi7ZeV7fxawV2uNzcxPiB",
  "key25": "24cWz88Ncp2H47odHgkAQ3y21CesTu9aM7Wm5WS9HkLWk4DRnKkfdZciL56yJe1N2LLm2cHsYhoh35acQdvR83s1",
  "key26": "4ySUboV6xZMdymD93VgupW6irkxs5CGESnWaTaeH1HziSykstUBZmbwzGsGmarZRXKfe33PxuAipkKCLLnXGUfCm",
  "key27": "5twfMagQP74rN2djCwJR1GZfFFsDt6FrKVPfo9fwToYEeuM9bqgKrFDPkorGB1AWMaYcDLJhTTaTJ2bSs5miiutA",
  "key28": "NeKeiqHLPw8yhFvgLzUFS8JPLPp6NhYEPNvKu8kHakowdRYtGLiS3dm3MM9qv9gnHQDMdXTiQa8gSUUpoWhCN6F",
  "key29": "4fDUVxJyLU843uW4venAcFGYbGPJUhXCqtZM58AZperj9JTHhpJFUn2xz2qLaj6GZNrPhFmdj1FKToZTo1jKyJsL",
  "key30": "eU7YG4abi5ogHHHEJMfBomYtuEtcr53V58UH6tpnq1aBbvks3w43owYccekJbgitrhT6mQudJZyv88wx9am9tjJ",
  "key31": "55G3kAfDFbXHXPayb5pzAQQx5aMP97VLzYd8kiHfM3djDJJuXzHYnyCrV4sVp822cb9SzMWz3yv1fKzMLHhzH7nk",
  "key32": "CEgTrpHGpr4BAK3kUa2ELCVcTAtCoxYNwMDsmUXVDaBiRX7bM5euC5skDhfo8kZyRZVTp496uwTybJQhaFVcH6t",
  "key33": "5jmR5m7wb1VohJ6pNWdduY3gWV7DAUCTNjzn3tXrJnWge5bbqpJYYu2V8qfgXh831ptH4uo2BrvXjydxWHKWVbeT",
  "key34": "4k2Z2tErE52gjNh5FMLxXnToqk3uN6uGJFUcC99xndxtUxXNGhwMN7UTFbEpH6v8RLUmjzurPdEhVHFRR9j1yTsn"
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
