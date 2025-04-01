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
    "3z1eHeAtrPpx9ELjaZiy1GQmaGxViAs6VLcML2vY51FiTeQ23JveaR893oEZroKR2rC7pHxhzyimtu4jCNRGAxCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bLWZ2cCTQzwQhXdYjYgUEVqQN7g3m4q6prpHrLo7sQWMMYHZvezPqoEBXv2Lz24nzHPj84naQ9ReDd4JDJRPNyk",
  "key1": "jJWqSUYbc4cRFrUNepWzFJJcicpSoDTULvP2jdXxqYFQgYNrcf1AYSzuzbfmMbefsiAtddviaukyidiUCHwU272",
  "key2": "5HjW1DquTjgHCAvHjn9nLyHLKimf4Wqccy3HbJFsVuEfhwp3GSJScqvfHiudYRkgbBxNEjZpLKTK34JQH7YDQJQD",
  "key3": "CBZXEDc78e3eN4L6gXMjeBbWrRoJNV1rkFzxyLgDdJnaPsdo8GoaM4dBEzLnqGQDqg8hF1CMcBQpEqFMiPtnQcj",
  "key4": "NuS2krzJ92AFed1cy51FQ1toteyTM8FCCBVQunUNWUcQGKhbnSbiaPTnB6r1cgMJzsvd2cyBy8ta8qvDW4PkuGh",
  "key5": "2NzYGSPaUgboPQuCgWiXwvgnN6s6CMvVBDYJvBS4bQAPeKgisD1WJLG9Mv6SYkhrof5asZJaA5BHeWqdS6TupJAm",
  "key6": "5KXUtYbaqzbrg4nwtkBcsFZMKFv5XZyAHfQpMr9Wwgww5AXw8UeSUunNnKgDsW6hxKbfiHFdnfQAZPFDCLqqMTKs",
  "key7": "3wmzBSVSqSShknTJwBDbweRAAqG4TajXmjcdqMQ1Buj5mXMCVCrcfC7wt1hqZeVJhUVjiVmoa8cdsV1G2AwGRigN",
  "key8": "VAykcS554ADz9VJzJYiq6xaivACzA8zZVkD7ZExkrQCbu9MN1VdR4cB9MtjqhYWEsxw7V8xr64jurKpKUocPvxs",
  "key9": "5CekWX4jSw3i8JYwHuiZhWfKQ46LqGqAYK7Fp8nsrpt91hXxaX6Hd1St1Y2ykfSFD3nKsAvCTR3XdjRCsoG6Eqbf",
  "key10": "4e8MQdEEYQiJZEAUudqDzcAKQaQicvSoKDSLba4svxPkgTfVEvM9wHQdiXaPPvCiYqcJxk6njT3JaorvartA1eXm",
  "key11": "43XxTieZpFRE6rBPB5XTcsvbMxpqj4tLm3SqKJ6QqXAiFK3R1PVd4itsuHrjqETGyGwhM9VmhUZvguPSR4L2iNQo",
  "key12": "8FJPTYy1a7UkZYLTp67b1RLq7sCvVYZRdbuibsZJPJUuB67NhaD89DE79zzNfMTEKL6XsTEGyz3brCJP9BDdaF9",
  "key13": "5ai8Mbe1XuzrPznNxfL14Ryb9q6ybVbQHGPSisuQMiqrZbU1E293iM8YD5fiNtz7GaYGztb9YZYjGADdKL1JQapy",
  "key14": "4Sva86rDVXmvd2qwZNgi91N23wuHsSqPqLNqagMNNyov3TXGY7GzRQJVWaSU11efK7B5tDi3TmAF3aGKj737pkjv",
  "key15": "67NhHDn6fNftCjx5KxXm1vzQjwMJ9uKxQhNdVZA8aBp9YBzjGsbKUKSfBrmhUBbR2sXkSroE8SmD3XntNsxCqZ4w",
  "key16": "4wCW11oRjF8yzbuEJthzidMDDFVNbjMuAaBPYteeQQukBRxt1MWU2GLRfDoLVBpHq5TB6akkpeKmZh3zNYDeWDWS",
  "key17": "4QSCqnq3q1aAY9vCCad1j6he7ia8p2u4mddqJk2GBvDSPDLhX36vAoaVScdN37DATzcgkRcQtz7fqrF7sdZwo2qP",
  "key18": "R2vtpeDZhBR7LRDoWWUV4zp58qayyYqb1iqytczLsdvBVBbW32VGd91SxfwVogr8BndFvgisJoK7hHYcsPL4KCD",
  "key19": "65yhd2gy9EHBSGabX8NhVgkJiafcTFED686ksa9MZgFyQ3NpgRTNyn4VvKottxAYtbAd6dRd6qahPFUnbeGY4R75",
  "key20": "5mX7bzCHKoaFhZvGEU4bSfyF4H7zty2mRWrXDuDqkbkFawY9GAXdXf87aMHpqDG2FMtTJwyhGAKJ714UAyfA1D1T",
  "key21": "4bpxFVcZHdTeSwQKVdYpgL1gqtjU5iKAF9FpzamXrhoT4zYj3TebhWWKEBdMa8YGtDeyoGFmj3gC69QYtVWgQwnd",
  "key22": "6UXasktSMjug5p6mw4bZFs6Y4beAnaMHiVm4JtAnQttXy6HEwVK5n3aBTFeidDrfwvLUgaNAWRByM3X8SKLaeao",
  "key23": "2uRZhnHKnzL2BjGrkKZN6kRhu4L7EoSVyvCgg8LhuV5cZc4WcPysFvD7uVCVxiQh8UMj9aUifkNbhvxQvTk8X2VL",
  "key24": "5NUexSY76tNa1dyTZVYduGp8AxvyQapsjgJvkVWMWL2Nk2WTQWztRfoPNxXQ8mVceVGmWfAJgnjQcB41NEtSVwbq",
  "key25": "5q6HaFsb73DFwXyHDM8MCF9dyiXDfUj8mJ2EQJ52SqAe3i9g9sok1ygFvNtsukqoDKCz9vrJ4sAcGPKsWYgfhoCW",
  "key26": "3pmbgJEDtsxhhcsWhErZ4BaekNJafpT4XNAqMsfUqPF9ZGHbHjQBk1ybJprGmX6exnSiJsAyNhP8YvXXu9MabBmH",
  "key27": "2g9CqM1PdEa7SZBohUxBbcfzWcWaqLZag11is4zXYW85rz27LjRP95XqWAaDHPtdQvUuHQcwUHGGa15DiruTvnVw",
  "key28": "4YuJH8BoAjT8a5MGjAeGNN4haBCb35dPfhMuJK4kp8FkUbSA7rG2ovGBgdsHacoAnhCXTjuUwXTgismceimNX73c",
  "key29": "4hT96MV3FgkU1xJzAQUnZf9heqq3EhGnXt8juihC6UsAgfqkaTb9sWxY3U2edXf5JNJcC9HamugRdZBCVUy6Rjfo",
  "key30": "5BgzWCWFTjwwEfb7h7emvQViTfi3hD8viH8o2nV49XLbRiSBCRapDhPqJtrPH1vaC5EJt9TVaK1vDDWj9xAcm7Ae",
  "key31": "5UsA3zPAvDwRdozRZUwJVJvqeSRbV5j5BJyoN7KMoZPT8h6eJuevMZjAVDqiZjg3d9LgKahputG5ZyQk7u7qgnbG",
  "key32": "3bgDUFWwJFv3WhiZij7wosKYDPJP7XSh558wpZN2RdaXCkewLWPtDD6TARZUXuKQir5UCDkNC3iR5pZACuwwYiZQ",
  "key33": "4W6DDTfpMgsuWQqJeVm2BVwqdMfEAVoRMxDHgYG3h7tf5DdJQotAKSV9jXL1dzBDykUgxRhDoCqu8SwdcAGfQ3qS",
  "key34": "35AKSiqvuNyuXtkdMc4a8EtzetfttUHLBf2DMwKADR7B3qF9Gc1WucSETYNYcUrWQcxdArLveeWRkzTQPkNcT1xn",
  "key35": "2Q8dPhWavdJK7YgMueXDqEkkraxhjTZW6Tw6yqeTR4VUhCgXexG6sLUcP9pLYeGQSRbEihWFFDYwadMHtMWUPjHg",
  "key36": "4hcXpG4G3RJDV7LZxKoSAVwxn5zJozuTvv3UTQU6cH6kWc5tpuRGBofzh5Y5CkynVJi7s1aJDBkHvNHREXQzoa9F",
  "key37": "2mH5LAPrFyKqADaZVJWasZwzTMHzNEZYhPKScqorCxfTFJmvYgC85GGxvQhLkjf1aDcXBZ6vEZFxUAXwYuERRoTm"
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
