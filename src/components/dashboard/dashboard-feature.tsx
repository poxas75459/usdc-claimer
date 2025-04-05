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
    "VBuKvxtxwvbofKJM8yLRteRvAZt7oB15sgiEYPhQzxF5KakUK3eTLGWS7YgXwuCBg4xFRu8WRtYBG288kHn1LG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HYBqPH318R6i6KVD4c3tzCpJZYG51sd4odKf4v21xWDYSemtWhgXVPmg5LjgPFxJfRRpohQ3gv1trRLGy8Pbmfi",
  "key1": "4ienwrzkxRTA7qtTCqZxWnvdFNwoAEkyRuKKLsMjWFXTiQ8j1WW6igP1FA89PNuZU7EmwZNk651vspoZAsaygQWB",
  "key2": "4cuFrdUud3ncun3ppEmFu3MhrxH8U9sH5jabSN375a5iwT6radNhZjoRDwHjjRrwfHD1nNU6d7LJQQiuH3xaHTEL",
  "key3": "5MAnrjUSXA9TW6ao54kHZUZZEto5M1LP9JamZ31inwQQf7pMxdXrtSZBUeHn3MGAb4zKUCUhKqqfo7TxEPRhMfP6",
  "key4": "5NPsUbtewugvF18ieVDjYdWM7zd6V3WEMQ2oPdLRNahCbfTqiUerxf498ZZSh8vNZF7w1EdSKgAMnGhGTVX2V3iY",
  "key5": "31zFwAQ8tAu3wkMH5LQAQgBdAxB5TKFPr5DVyyY1Reuk8rocF55bTGrVkhMxWnbVYk6y9924rKW3bcKzW3B7jNXp",
  "key6": "4zR84YbE3AeMLQQ7cvvJuZv7HEH5men2ZSNQqW1r8PGcY9jrtPptGxpy8g5orGTVN66jPiM85XW4p73RKjEFZKe7",
  "key7": "KP9qbQeWWD4CGZy3rBM8iXZnvA3DMNFhMmKUeWmwzivbJXdavszj1MmtXs5u2Mm2zhVHcDoKoHRFEndCfu4CEPk",
  "key8": "5RYYtt3gMy7M6WYY1ZCZeQWecfZzzG1RSybRehFXkaB4ZEexLhbcurxgeTbnvhoATacRkBoiej7q4RNXKCKYYr9h",
  "key9": "b79pjUT5Xz2JR897fb38dFMVbYJzPXJGATpATBPkGJ1TwZfRkb9kmee7uJpM6fySG4i8UsEgs8bubnx7F9ca8Uw",
  "key10": "5S9KMVHaSXUJ2QiEtX6E3SQrdGYnzvYXExAjppusx1tBpgJ4ZcUGxShsJkKMeoeinLp4stGHP6PpU4SLRtP8oWYv",
  "key11": "4Xm3o4mUMYWQbNqSJX8BZranQyJBCWK4W6RoXndStj84Jj9BhUvXfcfQz6DUT3gXikS4SN4Wo8utWAnmsURdTd3r",
  "key12": "4rLGMtxxg84ScMSoVAbzjJEV8njWz8Rnp9tW98rNmpdt6eF5hs7EQbaMFcmoAwxczyeXuuQTnMs12bqDy9Bd281d",
  "key13": "62UEMbchLNqgUKcMnmgWHecZi48ERVWDjNiPaTahK8yWauYqEewBuNsBmiDmret1KWak5atNrDYb73TudA58BJJH",
  "key14": "QBZJRabdMjHfaMWRFBa8oqec8tgKUVj7WdiAKAqfTLtEa28ckjLqTz6kUFgdQ5iy29GB7HNWdQSGza2PfznP9Tp",
  "key15": "5ttLj8wzVJvSfR8LXiGshD2Ffs3VNZaNzG9TB2Pnzm6wWjqHmKaveSheXxXA87ZK72NDuVB9h9LpQmzxAPPVztU5",
  "key16": "ga8NnbZLx4ZRToTGDgfY8JbuEeibyxwauEFLSnrbdwfms12g4xg9mGbMgm6tLd2STkZA2y9iibd7VXZAHB7HSeE",
  "key17": "AY7G71pSSUvC1ZXbjbRNjV5yPd6cUQBoiWms6ybDAUZ6k7fhAKC5hFmXLm7SkwBEJQWP8Gzsxd3iUVnFEwFyxmp",
  "key18": "39moqauSrgkWnVvdBXF4RFcd2G9rTbYt2Kn8gASCrzH6Rk9b97GF34Gvn1s3GY7oW6aSXrXBtntX64T17aQc75d1",
  "key19": "2x1xP8R3H77wgJBLHH3iPPS4jNuFJv4uuXFk8mbNNdCCT9KaREMqq58nDGy9mkdE382pNr8R7HuEtKNAYsS9ehmF",
  "key20": "K4vpb9qgpw3K1p2nNR3QBcS9tQGa8h5gVNcGdS6GjUK34NXVyQCVg8ypTcJdpuGAEfakZMQFuQUR8dvkB3Tz8PQ",
  "key21": "5yD8oSeqWpTinyASNRMiVSaXdfX6LyFYGJUysEYQcEpBq9D4VvRfuiWvY4URUx8Rdp7MCHPRUvDbtW3MZbncF7BW",
  "key22": "4BghfYnvmtjCi81cP3jMLdVFgB2LNeQBiv8dZVx3sVo6yZuaaBkoQEwKhNtKn5Wjm9whPPRtzAER1LKY9yYwizc3",
  "key23": "3713ttkrrvPEgSYLTWfmTAm8p6gCaQcXpMiowB2FTn7MJss3LyZ5MLkzjLCNd9kwJoRNE674xURCwZpwkD6iGisZ",
  "key24": "48kCdU1P8tEz4SiMxvJmq3bHB5jFXbn84gBzaXafSvhFXWk5M5WXo1DdsX7AUkLYWV9nAVBqrJtpYzSAqZygpsLC",
  "key25": "59tKgd4ZESCFaDMWbqpMmosEfEbETYPj5xJjvRXp911JywVJDFyZcqNZBrWEoN78eUexsqwNiFJe9e2tuwys9GVS",
  "key26": "5KUAzFYJwLF4BJkbY93vWdYL45QxA6ycvddtw7faWJcEwW7vd54dTkkcdPTEFRP1ndW6cbGHNafXZ6si1LeM2pYq",
  "key27": "3ouWfzk33gTm39ukvu5MDkPtYiWi84cSraBsoEHjyow4jyY3oZuXSGBmM8RsqcZmwTPCzqcDni5F25qgi8QyxudD",
  "key28": "ku2k4LHvLS2w5FGHpJ8C3QaaFtAmdQf4qPQbCJWHV7syxn7rxJRwCmsjCou6Y2xpm8YLKMpYDkzN451g52JMk9o",
  "key29": "i13BfNFMT3vrXJmGFzCPXEbPuRWNTvsRXbtuLujU2ZKF9mcKPEqrE7zEGFzdK6aQPJWmDyJ8ett7BPnsdVpGyZD",
  "key30": "3SHQsDY6xcdnkRDeazkqdWe6YzKV8oQPDps6yE1yoSpyFtjBJQcNGDzqutgm8fogavvT3JgkpApdbxfF2ParM6Yd",
  "key31": "5zkvtDAqnUcpzg4Ns8QzY7K321f3KmxcrYZPHEP65KJ4z7yfunwwobMvUMp9rjViZMa5MNGFVC4JH9Lz2G9YEBUi",
  "key32": "3i6uYMtyCjcp3QVb4oyPxDFLVwPzFndXpf9TnTAn8usC5YHW8T3jcT4AXP7fhx3b5u4VfL2MPfRK9SJe81c9HeTs",
  "key33": "4jQPtshmb2DbuMkrpW5QEa9r2dvq38kA3CpXMcRt3DHPxRDD4BXSCPZ9ebZY7tyJmnJKCGdnbBgWHKoY1XgKqN2P"
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
