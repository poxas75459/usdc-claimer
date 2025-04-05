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
    "2kjgaeWvNWBDkkXqZkykquMGNTc4mN9ckQwYyHAuYMLjgyHrGMi2jeRLmXW9pyfNhsNc1wyENB4rSSE7qGhmVhHy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2knE7oRTxXbsQhiUudrEqL2iQB3RUoAwXtrvaRaL1kRVAmuhDejeusyUy66GEiHMahQuWsUdWDvExWFwmxvUmAyQ",
  "key1": "58icZwSpDfqftQZqyK97FAtxSuLyCoRTewywzjjx1WSi6i8YX49tHqAUEifvoHPc1MYiqQRnKCKf7eshsc4ukWVm",
  "key2": "yKhwNsrRwYgqTdzccWu9A4Piajs22wdNi3rMeNypKX4HXvSZBPvPEA6MVTQ7y7C3FrChufgykucNMrGyUNr8QUY",
  "key3": "2LfnsHCjv2dH7gJkK8yNc4Cr9Tt3e9kGFRQt3McGEGHYJibFARLL6zHvFdeZCBLwTVu1R2vD9s5ziqsso6Y6MXWz",
  "key4": "3CHwaCtgXnmdw4BKhgR3VEfg4QRvxUsE7Tey4yx4AWzXmySFfans89ngSrhMczjDxUbSTWzCT3JGEGtoV5uq96SV",
  "key5": "3BzmpXho3VX8ryFSBvKDcnkvZkmRpT544yqpkcEdK1WNZTcJZrgyUdxNWk4GbrYuyekP45poXhr1DhbDAFaoKrQd",
  "key6": "3YDCNr2N6dkh4DX4Grjy1M1jtADAvc3ksuAbXGfFyiaB9ufd79K62PoCh3UUL3e8ihXYBtxdgzxuk7JpWsJ1zYpf",
  "key7": "AMJKvR9Ns9LgotqR93gjM3SmbY9cQk3kAN6j51zaaw45eUTfPaLkSVomqpRenYiH69K55rRjsPLFFHUTGwi4jYR",
  "key8": "A83Y3HWHa29UA36Ej39fzxfZkj85Pfr6nGjSFWQKEE5v7gmZ1BBAVwWMQYR8ExnbwFCGxTX6joNT7keKFun4ENg",
  "key9": "2LKgeps1ix8st9BFntYjueNw5Yz9fG426ea1wawmi3fxibYwSzkH7eSAjV9Pez3k6XPj4ZLa9noFXqTGYcMy6XS2",
  "key10": "9tQLuqsf3vXNAjEsFcdRxWuiaAXECE1vYHA713z3pxCa9VDNAK2wQBbkwrgCtN7naBWMpDGYqYvSRQ6qVaLrdQq",
  "key11": "4kVphuN1aGG7nwP37wSwvvdgff2TScZqBvwCyvniP8mGogtuDELMMSDZZ1zNvW966zZ8AThdMXHEkcRV49VatsqK",
  "key12": "5CNw4uerYLihcsG5SVShS6uGeAsDMK47ihseYeNCkp3JEVx35ity4M4buyBDDum6eMrRTiKfCGLmfUF4BFXbAdNg",
  "key13": "2QTPoop2s1Ks162zzEwGYKeRRRquoSHgwcydat9ZTmE7LpUuSWyqMiaqjS71rvjadXDtN5qiKr2CCtY3hNf2A3XG",
  "key14": "Q6U1MbP3FfY1iZAgjCtzaKzZYgXuSiNqitdjwcexjBiWHGcBzN6RUCgagEGBcGwpeFMb5R9hjc9qXY59FFPEmzh",
  "key15": "5Gf2NSbtLF9G79ZTB9aff5V739HQh2oYjrkK6syDCBHT2dW5AaAzVXRZoLGQrJhqJz4JNoLbKEqhoKrc2zrzKDq7",
  "key16": "2a6rCq8vvQH23TJYZT3m9zWBPYN1zCTYptg1MKUK4x5ZVaZ2oz8Q1uXEQJH4LDjn8cjU4jbBqhhg4zKKgXCMy5ik",
  "key17": "4RgW7mtDz2FGTDJydSCs46MH4A5gH7CvvyQP1V7jDVHSvm1w7BxFXjdbUsNqQJgYw8efSnmvs7go9A5vCqKE7cx2",
  "key18": "3ofd3Yoaj1tww1Ym9BP9Jd8UuPMa8HhVRqqDbgnKMGk8wwe64oRCb8ETmki6BMMvy83nnQudRUXzCk1UAGYy9wtF",
  "key19": "2N282JQ55ewxQH2qmHqXYqwGq9CmZPYY84dDwRVRzueZRdunKHHSL6uRECBjyWGveuubac4Er6SJpcWhhSVzNFYg",
  "key20": "38AFKJg1fxsQbwfMYYrxNCCNNcirm8DAg6N5eD1F2c5VWyDxjS6yrjrrMucBHf5K5msenkMCy8yBsxLLo3m5jLLQ",
  "key21": "2WYhhVkyBUY3iGF9tmZdqcdBXW7qpwvqT5MkByoCHRXc9DzXgDRMyq9xEVeK3DWdPjpCRARwEoxkMCWHuMNRqETs",
  "key22": "5tMgwRaKfPU48bBhPiYxiPbwiW5yq49KmbjyqX6DGki6dTgvfAhD4xyib3MwNR7YTKdZ19NroVRetHqWghoA2g3",
  "key23": "29GKejU3Pipf518gQ2gXb3V9FAB5AoxdvJrEvEAZhWNzUQBJPCHjn6FxQ92zUTiSdQEfxx8tSVUM2uH9wGzL3LCo",
  "key24": "3HU2QWwjgwS2mdPUpkR8Qj9fZpsEG9A48JpTS2zSivLhH5vha6bHKBGQ47fKxii6yCCNGeX4mpFwa3fSqpJdpoaV",
  "key25": "45nc6oeca26THrM9VdWYB1HcT4HxwUFLhuc1PDP9uJ49whsrHzJydiFAxXJeVbWy9n4ofCSMC4rQDoe77mx6MaL2",
  "key26": "KP2Rq4XjDfCuNZ99M2xn1MbVA2rSer692GFdUt5jEuqyRe365ZbXcQNr42V7Q9joFfcZR87oCHYsiLF26qfFb6g",
  "key27": "4msRbeLSef5qTg4SAdbg2Ez2c7tXMqopiwWXA7CTXwZ6U9hSvp1iRocB3RUG1438aoacoUXL2aRaNjNcfUxQfPiu",
  "key28": "D5QyhpxDMEkEz1HRcFLMHyCAtb5siu5yu9qh3pfaCMokYSu8hcMLHnPBRHxp9Huf4bJ5oj6LSUKSfuBZrSxweUb",
  "key29": "56j4tEw3GT6nww82LWpUrvjNxKaxwReDcYdiE6omLvzzdkiH5jC7BpuRMzgsqtP9iUyFHdTx6RKPnJqVKGYHTnus",
  "key30": "45iNgNhNhhcUFBBLs7jjjrHFtR9y7QEZ9M9PB2yVVA1FSDYDYdFfbKZRXpQmNbmJXJ3zE3ra2DTRPWh5DxY8RxGV",
  "key31": "4JvCSqSmuLqhFJTqcxmUFtA16zNYo4s3QRLhoJtWoeLfiR3dXTYRNVzcnLNyLNouwmkN1adt4iURmhBWj4XmR1CE",
  "key32": "zMUUL76ruu8iMeRqeojYyawNNx1FFxexhanki3Z86jVpw37NTCS8kopL21gohJ1EdBR8JuGLrdexHGSnvDq3MsQ",
  "key33": "4rWSv3TDs2FZjSxunxdR9PuNMoLzmGiCgRZ6bqEpfYy6cZ3RAVoriyV8WZqd5Yv3NSiCfncNpoRm57EHkqze1c6n",
  "key34": "31H6Pihp5SB7MYGxPP2QQHpJFxz8Gnv7MvFLyFVW149gnUFYqNF9EwaJc8GGAiLY5kjSc3xrxBgD7QVznqwtZmZv",
  "key35": "4N1BMmeSic3MB82wBsn9NJmJcj5pZ3YrWFLFCmwNKfko3435jviqLBFeHZo51wH6kYyXo7wGdirRcUvprDRtLxq4",
  "key36": "5RYwJTd129ZTbPR7146vgyFqtFDFZQ6uEbgxzx1ruVnonFtLdWPNNG3dW7u7Hx9SGvKEK3gzNSPVCLPyzAmhTEcB",
  "key37": "56TrgVqzn92vAQxAPgN89VGnNm8ZGBNGdS6jwbXv1NAfPgk2wevGVtrQSocBpzhqGiH2RpFp6DM53nsoBJ95qnjJ",
  "key38": "45As9W7xsaU7eVJCq9Gz7ZoEqjgP8urSufkx67eRneCmTkHyHtDAz4rLhRmN4z6SR1dEMTb3TDMWDouyVTyeBpGK",
  "key39": "2vfpAjMoZexS8vp5DGWuxoFRcFbFehyQ65SgUY9Gw5Qk1cLYLpNwrtTrzLtqkuVWXPTPjQvFgh8gqKEVPUeTJNqV"
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
