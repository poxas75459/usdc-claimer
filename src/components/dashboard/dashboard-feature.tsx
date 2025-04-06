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
    "MPZTxUQVjWzgRMhvUjSzpB3QyjXf2hZgShjnfKa7JGtVHGcz6A62fCqtdAi1UqEpdDccTsCk8GEj3nrADmWCgpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLiEyTJrQUxQJz8KZqci9pKoZmVwBKoX2NrRRxi2ipEiw7DVkTXwxg7zafnt5E2stHLfErEHxcMJLny6GwUv7vv",
  "key1": "mNkJYW4X7QbDqYc5T8tNVUUFRvMWCznMksk4N4zHMhZAJfbZhwToDSKpqbfpHqT38zPWxns6emSe3vCSojHcSWD",
  "key2": "3BVxZNAgZFfoEcLfQA5BGcgLKapWM4JEvFeNu6xgHeYVPTXurEJcAgu97afbNWge6UYTem9CQg8FnVWGQKRPefFU",
  "key3": "63fCnRZKCTvGQjfDbLAX1xRa7tH5Hjhau39otPzNZcKk7UpV2geGqo7ZSVURtPJfMLGy4K5ZGUmy6K7atnE6s3hr",
  "key4": "5hs1WMskkSPZJ1pQoP5mFsNzyn1SoFCRi5MyNA6B8uXhWWWxcnPyNRyMNLebt9M4ksmcugq42gXtAvDgEWKx5yVb",
  "key5": "AqwLyy2eA7Rwh2YRGAdtvgMRLR2m3UjXYWGt3nCqTDjYrBUCpGA8nkjXnfZn5aEJU3teZ31YWFdEu7aq4va2suy",
  "key6": "2kbFw99kiPz5o55GEkHiVCoy46KNGJ4MRDLDhMKSGWTBVoU9aJaj5nXPP2nnav7EHVDedD3VKAbQYbuJERGMx7jU",
  "key7": "5VjzjqYbxa49gBYztHv3sXnnxdBeXTjpqS2qTSFaiRBHNcBcF5AGRYxgoC9tTMYrGp1dYCxYf1CgrNHYXHmkDqeb",
  "key8": "3SXez3zpzXwdD5zHmBc3MvSLGj6H7BrzQBw4BChqeFcd1q8jpWRgeEPoa23tWuQoxrAxAyGeDD9rAwzcU5QpAHbu",
  "key9": "46iVp6aBW5RdQotFTmpPiBev8rwyYdZaTJ7SwGiVcNAZvhvJmZwCwSEY9ZbCGdo7PtwT9jGMsESvDfx7X6GPx5fF",
  "key10": "2d2GSqT2rhMrnJDDNRU9HxKKeqgRq4BVWVPcT29VR6uT43vwdGVAsjmtcPFuAgtsPBsQybZsRuALS4uf7Gp87G1C",
  "key11": "37oVJq2M9aEv7h6Jvjo2a1ZaMuSmyy6mLvqac7vDtoGWNEP8SDe4s3CS6qxAVsbkWgGpjpqNRWSYLqYok8r1hFVY",
  "key12": "5f6KmGko6aeyrZ3tFPW3mjHEEFtdcurrJZshiZ2z2M1uYJhMWj8Z7tvxr6NxoaJHfrZHxtEVQv1mCXiNzt7dmQHK",
  "key13": "2QBE64US3mda2x8jdXt1khVTbEpxmoDeWoQngFrFbeUKrMeQ1nUuc3EJrAhJ71g2AseKmdckZNJQHrVMJtwT5RQk",
  "key14": "7nsMGXasikgPRZjXQwGWFTBaD7xefob4LQEgJkiFe2Mp3RP6RKtLW94fWQtv4NFsdKu8w7W3LhE1EpvwFZJsdLJ",
  "key15": "3EQmdnRG25rCUNEZpYTsJrmdVGa2z7PB8bwnebo94wMqFedajpQaDWHuVqbVe2ESU4sVuKq8tXHp41atKTJMn1wb",
  "key16": "2v6zPbBX8z9MCX9QjokybLsQnbAKGWKFBLx7HA9rg1AN3gkFeL39mJdbFFcwWAPk35b9amCzSuvDR2aroaZ4Bx6Y",
  "key17": "qRD3dq2xGK1gWHoZFQL2zhhZCsaAbqukjCwWwx41jmNQXhG3JoDpr2ZPG5AqUckh2Z4u7UJMZs8d8sgr9WU1fk8",
  "key18": "2ZtRkoDPNPvFmgzHgT9gujAssfW7GWkKZLZxZbhmo2XhiydCLcGh224ZASsTfcxysXiYyHthuCJtgDww52Ev7GVs",
  "key19": "4jNJ65BbgzNqFrBA7TiyLPLsjtLm27LEnGGZqgKukYTMVzVTZAP1igFrbcuUcAtsuQyJe7Z7NwjfDppddo5hCb38",
  "key20": "2wMmdxBVoVvx3tuhi5mjsuYqfBHVyrGAcksgtayPUTAP7zub9oUFo3jx3LUrqGmPyqXGtsBAV4wa47voWMPsYgT9",
  "key21": "2ernTqrMRsinC9LpMtgJo5RH5Wye8btuvakVgefUdiY9e1BAjcd6MXYKJDZxSwHuA55HgJcLzAXeiF5WCuSr11zu",
  "key22": "7M8bc2LSTbzVEDsDVJ9p7sg1XpfdY3S9r9sjYEkJ4xdcE7XfSVZonSkREjMM8wDpSYkfARZHh8texi1cqrLXcXo",
  "key23": "2957ih1wmv9NT8B8CYdW1QcCGWYcA5KYeopbKK6ufriQ3sjxXB4LPD4yBgbHJdwSt57j2SQasTr7srjDQWZbhYSu",
  "key24": "2H295Hz2z4EtmS2Zm5DbKzWqvpVi1vAKWHAswLZkxhUEnMi4NdkLreJtRAZGxour7fzpSwXGm6zEdjmmhBHpPRqC",
  "key25": "5FiX2Khu5tajLcHyYvhGf8qfSftb8XjCbNJZPnts3nsosHYKGh3tdsRma7i8d4c4huY1uWsxqpkbUr7k2D4w3HYk",
  "key26": "2uz3AQaVCpNWGspUzcBeLe93yLxMYRVg7Cwm7kqu2rGeGe9UeP6ze6oVDufbX7zxNVCroi3JFkam5q13ZLHiXXWp",
  "key27": "5F1jL14qVGU7oHSx4kgPyTNWSPaZPWQP5KPSPmoZppFjbWAEvw6inii2dvosBdCroDrdq1PbrjhWxX2zYkvwhKNb",
  "key28": "46hTomBAU9q22au8KkpZbtNFnszhaWcJpquAM9FxbDTCinPKcZFEf5QVWUo7u5bQZyj6dREsE2KMauXUPLQ9BaqY",
  "key29": "6CwuhQMzRSQ1A2bxHizuS1zfuoYTNiiAKThDLv8g5AMvujRrfkQGtFLesV7GEXf2djnQivbq29rk5MgQDKbQw5y",
  "key30": "4pzAqpTJgWiGCYQx6sb66FE34bK9N4N8xWsRAHfrQ3g4UoeuX5U7DtDeEQtdomtD7mhb4UEHmCMhjvkWwWhUCyP1",
  "key31": "gg2oeJ2nXcSccHKfox7oLaFjxkJVtcK8LgGyu1S4TYgZJwmQWX5QSuzM81qDbjyQEb3hPHrFp7xfjNsi8Z5zPAa",
  "key32": "2TtV5sGHDCduEMxhAf95zext2xtA71eT7V5eY59p4ZLvUSFR6H1ESCQ7zqW2DNr5DSY5WKeSFwgCye5Xik5ma1AQ",
  "key33": "2BfSTwDEdpEhjJGDBznXHYTK3t8DCFNpSAZ3UjktdfB3oep5HcN8EYzrjFE22wkGt9k8UmiD7kALrQKPVZDZ9NXX",
  "key34": "w4eCLVvyX3uEuvp3PnW59KjjBoBeiyqo1t4dRHAcmUf5utDUZTZDxABrkruaEyq8DrQYzqndGarf98dgQG4vcrf"
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
