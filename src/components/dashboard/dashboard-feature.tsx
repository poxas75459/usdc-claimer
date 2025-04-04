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
    "51nC5E8cWovDobT84sxqfV8TeaiinBYmEbHo1C7M3niqfsJwSqSutkde6HLTPKJ3BmB4wLRoAwXRfKVJvzVyoKPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGAigGSY1v1YJ8aT7PoJ8Mj16xFHZkqfL7KFZVXQUShxG8rZteubNytFZjHQzAMsPKMwmJMHXfDMoJgZ3ieJKA6",
  "key1": "3UEhuDEVCBYT3CkJhKTiuL98T3RiKdKeBQuip7ojwP2q3788oBZaFPHdnUNh8N4JqGqyGA1TdLeZ4GaHzY5e5idN",
  "key2": "3MduX6TSVJkXqPLxp1MGMbnejnKo2roj2XxuWf1NzLi1vM9LNPryTp3sDcYuKUHyMdGrfTN1iT3SZk5LKS42J8w9",
  "key3": "n6Xdp2nBRhqEDPaM939UZUip7UG6Z2cL5Hwk3y1XbQbputFCFXdMMd4DpuBnGxjPLUgpcZyphf1qJ4XpynxguFX",
  "key4": "4wVLFhW18girwTWypoapdYe1VQzJeC1gd3RrbVwZJHu3U7xa7RdBJ4af5V95NeJkzxTN1ZfJa6hxF6zw5sxZiU2S",
  "key5": "4yBM7AxqTqwgiDyaFeRUs2miF1wE7QMzS2uWyp7r4A3F6qNVGSfrQNSdMdeYhUfXm1BQNt3YPodpPyT75hua3qfw",
  "key6": "8aPZmn2MK1Ur71BrSukFj4m1DHohVarhZBxsX6QV5xGMweJMsm71Q4pwpQdPrsXTFJU2yPcq4yHaAsoqT6m9FAd",
  "key7": "58DyHUrAcqosWSnFgkReL9zpVBMYRDYfwLYueKxnUbw675KBxsNL8XExe5N7HEc3y2HvN2MRdpHF6U9B96xDhw95",
  "key8": "58DKSbxXo9u8gYzXd3tWkqsFQs1dCvyTbDYzBg34riCyUEB6bGhZ3j5yo69K9jccjAaGbQGZL9JJJsuVR1BLuqgE",
  "key9": "3FGh3Xh6bAXbuXrhSsWWuKJrm1CFSt62QzZnRjMu1eLYBouN5pAibBR6ApTjquJtyUuHViZ7892KQKbe3tmsT41E",
  "key10": "2ZaajdCndty4xo2FhycuCtRNm1xUv2Pk1irExC1L4HGTju5CKJRSPJqyT4pSpNBuU14HpbdCZtvTs7ZvKkcArrtR",
  "key11": "2W2ppb6V9GebisL7U7zXVhGdSamb1Dv5PrCpgXFmiu4brxPC6DyksAMJeaPnVM97HYzbFQPMXs8DbHZj7NJmf6Vi",
  "key12": "4hEdU86saH2R8N6KCg7Do8iAX32QHnjdxRHJ7H2sqATdsFgL8WjQCakEiUBed2ePvH8FLAcSDNtLV8qRuFHAzDyS",
  "key13": "2Ahkpkcza4nZaXzngCx3BRmxUPBLFgDzCFTfai1EwDhBPeuFQRnTLgQYNejzG1e23t49FCkdXCeCz7z6WvSwF8ez",
  "key14": "3aSV3nK6LQZwMPgyTwcAmrMnfosEk37DrTQouVTwgkqSRntYKd1VzbZUiUvEdTKpDWJEwgqgVneiQMfyV2CkFQTo",
  "key15": "1KwiSDnGttpAPZzXmF4Qx2Er5URwRjfiGrVesxp1UwC9h6MZtrTczZGaGRL1MKuTaU4wWpYQUMBmYUqumnrEfDY",
  "key16": "5ieDQMBB4LmzbcJrKcEnyrTUQdFrkGVrTsa4MGrzyXVkApmDoDpT7DirB5bx5Y9wwEZTM8whhkggftJBihiCewHn",
  "key17": "4cSDwEVKuxxv1La4TtEhQs7NMM5ANzfvdgUAZBWuZ5TvA7LWeno6NL8HY53XjFHaQtgdLimc7cbPCevCpCPco1wH",
  "key18": "1BbR5HVE4nQ7JuELdYu1bSv16GYNKAkSvnpAiHbaSRv1sSFD3KEF7uHRLS8iypSsbzVQS722WRQQBxPG7r6CrvD",
  "key19": "5SApXp9rs2eWRT6MYFKpH9rDwiT9YyBMq5ZSKvhm79UL8PQWxfT2mnMxUoa5auAuf8QoKcPCsz6QABZmvoKHduPU",
  "key20": "3yN72DcHujPX8D5xCmJYBBWyhoQk9X61RvwUM3K65E3PvNdfXWzHiJFEYF4xhB7aFpEJmHTujDoAjBz6MDNWwQTs",
  "key21": "stF9nB4ASVQMz7eoVHkL7CNPEgX6uT45XmykBsCTuptQbK2CPifSHurkoNKRGNXeAKzGKSgTKrXsZjPvc7LxkTe",
  "key22": "5QCJooV9hWC2t43oFtegSfJWdYWRNeBxNUYMZtHwY8QyegJfYmuqkMjU8mjNNogkgSp4Aw73huLK7WTwJS1PKFLc",
  "key23": "5vxNFM55oY64Yk1enK924foNiXxuK9F6n6vbKAPKXYovEE7NERKP5jdxPX1W37NJHadopEvR3zFn8Q1zGCYX4tQK",
  "key24": "2xFUa9motTv1TtdepnhnWucvv79SEroJXzQeXEH2odrY5jtzDmhJNw6jFRvpQNAbMY5i2bUKXNCafR5uVvM698JZ",
  "key25": "5M2zic3gXTKCrfgnjKPvVQAtZi2b3MYu39dwApqpju35whYccVhHTjCSv8st6teTFmYMxU4scpD69S7yFzvv8oV3"
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
