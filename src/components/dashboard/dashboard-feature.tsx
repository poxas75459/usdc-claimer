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
    "4UGcrEPab6SxhmKX184hReyqrsDNibpMBAc1647HQQD1reoJvEyT4AwXM4mmF9fAxcZhFFceKsUeeAHgtJyVGw2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiiTFFJgdUJfTSmfpwQxb9UqppvrbzKa84BZwDqjN7xSHwVsuMrc2fWEjLvWJ8wJ6sWYTtKVybSfzy1godtuvoR",
  "key1": "2NaSdKF2UUQtCPKnw2rYCp9UTqJYtj54pYeGLW4CVgAQVtUkLWPAY2Ac7NBtE6SRUKkR1tZCfjqgkrwERoW328it",
  "key2": "a1EGTSnW654uhajbmixkosiHEi1CXvqaRymNmsrVb3RLEqfVsKTH8SGsHADUtmNPUDN4EvTwJwN5ivbYHYJTT3i",
  "key3": "vWKbDPKmqCvhn9todb8SmBd2ZAfvcbPpJTV1t938SR1tRKtjHL2t813QizvLWkJhChPFJHRz1tqqfKz3FLzMAHx",
  "key4": "PSUwc15jb3UJou1yaVYHJ95fFk9ZFPjBpzgNdKn6kowmrVFCdbBoctjEweAHnKkuemfZ4bSh79Q2bdok5cmEHHg",
  "key5": "NG6ct6LBhxMSmj4parppX7rrkzeWYAoEtp4PCLniUUbWBvZu2MAD6GmyEanZty8Zu8EnxrmcHavDvEfbqSMPn2K",
  "key6": "338LRXpMWNGys4PM4ASPY9ELema3msxseAHQEeTojHepJDeL3HhRchrZPN2WDAKCT8GEKiSnvnK1xqSK99Qfc1xG",
  "key7": "3PCKTpZoVkUYCPtR3o44kRbywAMrJLvQQr9Y8YsYh72aDahHf4ADAhqGiopyFMuibjFfRvnrBQfJCArMhHFSkZpW",
  "key8": "5zEcnWHUkNvwhL7XfzZ6nb9JT85fPWLpG7QkWy9GffXSVYPqujdnpAiFDLcWX2WrV7E3kMrADSFGtKGbLDH9qe9P",
  "key9": "N8JT9bHUQnpcLpea2Nsxc6MTjSeiQLm6rF35Qrb27KXf9Ps5C358oowwuLqc4vyDEzRRosrszD6uwAGezdshffB",
  "key10": "d5pgkfZhajtixuGQkwibXpw4WXPZ9y23u8wRcT3irP7EyDPVaNZtu6WntGn1ivyzEEqt1fKB3GLLbq6wMrWy2g9",
  "key11": "3YF8Ungknzo4zc8BcF4Rid3X33atwfjusWYSd146xsmVgXEtsvchoYSx7aU9x4v8pX9MvccDE7h5HLzLf2gtW8iP",
  "key12": "2afWGbwacEWZWNuyz49iL73s8UFvy14mhMoXnCHKAAjMPKgXu6aR8rh6rhVSqk4Nc45uDwxbsSQVGbVyMXZscVPw",
  "key13": "4BfnkHoPKN8hHwimAeZckLVjUYa9RvHcGhvfZyFtCnVN4raoKak99CvDcVF7m2YAomj99oyC33sD6ZgqhkATjHzh",
  "key14": "5693JJ9XXoZ4s9J5M9u3w4cQtbBhY44VcMoeoY6itrg8WLqMhps5pwYTQjukNSmb3pv8KrauBohJo7TsEZSowNyM",
  "key15": "4s53zyfs5WZ98QsPYTj8CqCPJQ4grjkAq9RXYS7JWYyXinxEwsU3cPNvtabbKHEmnpfR8FSwnR1TamK18C6YSzjZ",
  "key16": "25zydBGpxRYvUSH2nLKncCGc5kEApSZejohE35yPF2kr7jzRMSH8uQPSLjkd2wihCuZjUJNsaiTQZBm84mWci2bw",
  "key17": "5wXnwidq3W5T5o5JWa21XXw39o59H26X9qb7zJvNFKTu8AMuodySnH73vvgh1uiRKeNyEMgsrJQBRtvX2KUhig3b",
  "key18": "656Fdy4XqeQe5ibhsjzsbNiN8gZX9Ado8UZwYnK9V3dvq3L5ERWCtnNcoAoHh1gp9JmjZjYygfsSgk64woGfa1Yx",
  "key19": "3Qu2PdApovHt6aPGapUGqtVQpTPxoctkFoVJrBp4TSBkNsJmAjTAsYvvqYYJq3iJ6oRSdNYE4YfEQCTnNZsvyrhr",
  "key20": "2v9oEvuiBZDLr2ry8iw8XLGzQw5jCAN4J5ZHnAbQWbEmKcFyL5PDk37MenqybP8xNd5hYvJZh7hpZWYnNDUgQKSj",
  "key21": "2xK7ebb4Y6N6E58E8WLZ1K4MRSRbgbxraZFu9dDGhimCN6ifZobQnSt6T7AwhUprKExFddecS41D4CZNPmbpKAmo",
  "key22": "5tG2c7CsNWricMyww9CmS6Lht1cp8W5wDJx92SLRE3hECNrCVkpz2CLpg17CoobMAkczcJuBgxFhJr93SbmJ4Tyj",
  "key23": "4wTZA3P1KY642JsuJXAF8YN9gu1TvKusXwtPmQZK3nWjTx2Cab3ZMwrEfkJgLodnKog9YuadFr4kq1N744G9JsZw",
  "key24": "5bBFET5TkAQHRnDtARH3eqUBhhSdLFwakwK87cYvDyygjG9Hj2KibFEFKmZFcejgfv4YSqB3LBLM1W7SEpJFDQWD",
  "key25": "5pJthAscsftyFYBoK5m1rwivjkcFmMtDhtYr2ZvqxFHFyHo47uewcLMDmZ6Kj9epoomy2jaWN7ruJ48weu8RF1HY",
  "key26": "5DPrkEgpHYYauf4tujYBA4LPGJ1biYgdLmfW2uu5MBHdTZvPambqHciZr4MFUcfWt3HujscVsn8CtQzfT5wE53pp",
  "key27": "3kNqCANoL9psezhaZDNnGCxJxZVTSG7SxQhcoKX7Aq158BBgYE1TaYGKmJtHRXJVdnDrrHLTVo8aj1W4nKSQP29J",
  "key28": "3iCoju5sCac2TfFqgVongTuHaGikseH44aXSuJsdnDuXJnH65UCbvMjUKShJs7QZfzGREw2mPSX4ntZ2pqRJ7LCJ",
  "key29": "4yApTxDHeh9uDcWsuBhPtefwJZG3BkfcrtqrPCkadse3yYNxhsp6dAi2EPCSh5pPENn9cN6v8D2tdB2qtGTRuQEx",
  "key30": "3tArLigcdzd5inJvBkXC2MqZSkMbtaeU3Uh23Qm6Q9LCSzU7NVzqh33XBhAMamwUsRA15U5G3FsVxVdsaiWAccGE",
  "key31": "pTNnMG4tCRNcwp563FunFgpQi5kX7SVKsLWCgd6XCB2pDdPEfdWA6N365xTGP9ZcExbZxfbwDnp4Mue9sEFkvED",
  "key32": "4yF54vVXQwFY566vUY7rsTii1DwY1THjCPJBWw5vwA7fSuRx4KLhQ3hvNtFzyQJL1edGXFdpqfixEnkb9qnfrLMm",
  "key33": "4R5ZmQnYL8DRUTut4f3n7YdXYTJHi5jMVMavKGRRH6kF7qmJePsvmRaemDgDLFJvnyFMkG4JU6gR7eEdE5r8ceRH",
  "key34": "2WNwJUbo2aCSokxxPCvZ9Y15dPTL5LgkesWjdT89iRgYUMKqFLzAsNbwC4jp2AFga3NYa6noHX9Qh5HcmnSv57Gc",
  "key35": "4H6NLSkT7u1dgLL87jJwaJgkenLRWVJrrmWHDUH54iYNhWbhAZAV2t57aLG1icZ7EuNNvobbNo62mJqN2Re5iaSG",
  "key36": "5rdvuzyRGcpVfnZMk56pz2LYY6DmVrnN9REm3dDGrqRoRTGMdS5JFqp1dBCLGoqNiY71tmN8TDenf5NktnUqm7dM",
  "key37": "4k1Jm2PV1oQD8A33zEvE1ZK8C6EUbtcW3hWCEbpKrqtw9zwWPuUZktsJeu7uhL8ZmNpVSQofFgZx5nEibCtV1fse",
  "key38": "2cLnNug5ELAqr7AEkSZxYJmh6Gg1bFCPn6mQgurbVpRV5WRjjEwZo15WqSpxttwMdM6VM2dRm1RDUeAPUtoWwgAn",
  "key39": "4r13S3kX1Q5PMkLxYDNxAT8SvB9wgx2vJyxnkVLKGHjLDB47Dp31oS95KaRtWu6pFdKKSZPeTp2nmEbzDsZM8qSj",
  "key40": "399TrbALA5dy2vrAEqQBNTeurNHkBt6cRDwfUgFxihS9mrArrcEAcip6ee4axcMQZ7QCWeaba87omBY8zWXS3Jr6",
  "key41": "4yKQZS2pqs6LcDvtSFMVEq1g56bjWKKRaNfTvoUfE7FDbMEQNq14boBANdvgvHzbzwsR52AbJFNPymBgMSpYtEzh",
  "key42": "2wYvSUPaCPWLAeTioTKvRwP5555iaXR6UCK6yyprGAcBmwZWQmvnbtms2KaBABgo5mdzkXcBMJfBx3nGhFyY4jUN",
  "key43": "4QNz6UAhasidquwPtGhJCrB6PkVuV93TFEBZLkHv1fnWbpZDSz1uhCdDYRNzeXNMePC1A9FLQtwLqfaRXr33Mmec",
  "key44": "348MfCMA35LNKjzEoHXXVasNXsWvG2RLMydz4j3UCdVmNyw47nrtRWnSkKdHB21vr1jZoPxGfe3V7nzdm9mfAcSK"
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
