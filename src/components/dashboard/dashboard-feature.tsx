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
    "4EX3kgFREwBZ5vWeC2gqt1xXHpzkWhgh2dNsdLafWYtbw5t9VXfERAiSnquJQguGVsMkdHkGdxVYvPgjcM3Mv8QV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bo3QZxBJuwkpm6kTjP5akbFZ7HVVXj9U6cDU6zH9KHbTojWt2vjTCrYnbnWoophmudfWG6TrcqzCgCPRps3QYz2",
  "key1": "3YZ6ocBsmqnLCBy29UdsFeNoE25Zuamj4aTuoTEopvQgqRZSuR6P1bmrAYrSNekQyk8i4PmkMbvcCrmdpuevn6uj",
  "key2": "24HiBWNTV9ckd9xLqHrm8huF3waLbu8Hhjde7shNpq8gXCdYmVxi7Siaw1GD5f5pBH5hs4VfxCPdN6tM1gMhbRuy",
  "key3": "5bwpp3ANAiQYNmYagRYozZREmxEWA2qRHtGLih2KWneTFCFYd6trG9aoQRpaYa5nJuY9w3mZgW1YUwcZccbfCyD7",
  "key4": "2UkaAfZY7UmWMgHzBiUEsKRw1Yvak9dGMaRghPZFaiJPFqqRxhDaMfwuaUSax9XQTG5Y8UAn6qrWnbwgUJbfC2xB",
  "key5": "38kcsr1fPeiSk8aQatd6jKhTghH3d6EfZL4Bd1hqSHJ3MTZ9fg6NFyptYKDAW1vSGGrjFNW3X5WJGAxwUE2Z5ANo",
  "key6": "5k2PtJ4BwwrmhpxFadXv9kG3tKXqVaDtDNYZZkZ1EN4nsREpVmMzm9Pn5bmJuRY5ExcpfB6PCR5taGZnocGqWtKa",
  "key7": "5yUW7E6a6LG8Pt1DwcNdy8qgo4pZGuopj1tLg6xLkReYRd2Q2GyqWgbKbg85uq8b8rdj7cXQz6QKAh18iGtz2N1b",
  "key8": "5xT3qVbUa53T8rLtrVwoWyC8GRgL9UgsN8Ckoc9mQocJXVSfik1jVPRbxXpUExGWf4GcSBiJdEvADzmEPRqJ7W9G",
  "key9": "2BdUbRCDNAA8PkkqBmWSRBu5RKpifQzYUE3BJHyDYRDzLvywZXT3RW18yhxUvvzk6euJWYEM7EJK2CiMuv88Vomu",
  "key10": "exBMMpKyBHwNF5H5MDqgRSeorXbmX6aaXfk87WtTChv1ZbjmZ41refpg7A5zPPwKfUJMdQBFiu15YiXMqNDfcrH",
  "key11": "2jA71kDUNGuYAjPaTCXUPs8FeQ5upTtgxQ17LJMh37QtAc5JgdABFCAL1uG28hzJjZVTMpN9NNKnrDtTVyVDU9Mu",
  "key12": "DywTAVwv76aPcpg3irvAjzhKzDEC6Yjaa8MS6iwFSDL1oruSG1zAnMzE8PABMVM46vJPuUBCkiJ5GPVjEUAprEP",
  "key13": "2HUC2xTYA6LWQwfJe5QEQy6YPNSBKP9JRcDhAXrXYM9j1FFB7bUutXqrLYiyFTf7puAmU4Nix8ZiGf73yyPzMk57",
  "key14": "5BtsACHebz7eGKPr5Lp5GjQDVsx7GLGJayASdLgkD1y2aP1XwL1GU7D4iHQgLVGJKGVDtd5FAcqPWHRUTbkdyA6z",
  "key15": "2SkDagtaKgpPL1eg22FdbxdUizhsq8oHpgY4wTmQjGCZ4u53AJhGe4tedFEB1WAamNeSUEHEu87a2f2MACGjtULA",
  "key16": "2T9VofC8ibeDSp9DYxo7SoGj5YPXNG3JKyXZ4kGngCBd1MbuUD4ccsjLpoXx97LqxoAdbJFJcxisHp17jq3k2jgN",
  "key17": "34U2UQuzdNWUmiC1zNXTSeEjvPaqqyK691jhFetAAbFu14Gk3JsqeVsjQmDyrgcZfgwUat8yLugzJDqfqUeCJ83z",
  "key18": "2aBtkcreYxT67ZAGw2L9bYncSq9qEqDjRwzJ7vYms9RV48eAwJRKzRt6mAxpDtEykxBYaHxgTZTYgw5UFtcNmpEj",
  "key19": "2TThgY9aTxcrBkFBmW36ovDzdHZaxmjHMZ6c3xhFv4N8yKKkSn64Mbv8wTom6E1gkmyGHyS5DGfXHm4gQCHm6Wka",
  "key20": "5ECcjz9nK3coePcgbf144kXQE3J3vvTZiKZgVVrdofB1wnG6C4mvJT9uJ3TbXN9K5kJYbhP5fbWFJ2aMsrAA8Y4H",
  "key21": "2ZkogMeqbT2TTipHXoUXwHehnNbKEMBuJ6PE4ki1Bh7TXHZZKBe9Hov2vv6KtJJuZszvc3eWf4iErygjG32KaR9M",
  "key22": "4YnSzicudca7SL1vXS3d7qj5PV9rWVvjzxne7oWBaaaRQnYxYd1WRUJfhDp5NMzuXqyyXBwbrTshvNahT62DJpuN",
  "key23": "25gZ5nukT7tLomZhpbVS78RGC5DCoJiCEahL48K5xtpH7KVF3gmULGbaNiPnCvbKNjHmRUyW3ACnE9zzTv2BhE5Z",
  "key24": "aFRfBWcTzxF4kdTz3brwgxaNR3rpJuK86ir1VnVx5mt2k9dCA4Mc88ofWAeWBj4ZRiQaQwSywpf2bLntwrcH3PD",
  "key25": "4fFFyKaL9ugvGaLPLDcRMY5VkdFMDazJ1y5KeTwRm6e6yTnMzPo1s6dF3rYNc9JfGzdHjZ7T9xzq6pq9SSKP4ud3",
  "key26": "3qJWFAqLcLXgeZPeWB6dkSj4Q5RdX7LmtbfBBu2Fn8g9TURGCYcNEgyhS2CksCx8B7kBCZQerN7A5DqFJ1ogPyC9",
  "key27": "56XuXq3yBfhERgny78q24Mm66nxMhV7YZSAPnWrh6mgPSzh8QBr1cyGXH4UyotYwXVoH5CEQf2xdiM3TVw7iehSg",
  "key28": "2AtkQ8MNZPt99Hu3dT4h3ardSNS6G4JpDxbKiz6EFtaGBdUhnm3RPAxX3UmsTk3SMu7fxozAuqofG1cGGMoVdSq7"
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
