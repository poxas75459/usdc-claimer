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
    "2cPXs9fW5BZU6RUvWytQR8GcWH1Avv3sL35NvzhxkYQyMDFFR2FoZ2no8mJVUfEbhLUXFhTrdcuEz88wpcCL4LDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qF64CTwgEZt2KfaiF1b6AMeKs5StJCDHDMLNpm38hepLW4qAkbkqXhtYk9dg7cieQwxGvbwTcYNpFxuJVkZWhq8",
  "key1": "3XzfH1AHTzUT32fu3fTEsGUyLzapxExepxSea7hBHnC76UoH3hb7VPR4VeFkZLDUTPcE9feo5ep1DzUtAkEaALnf",
  "key2": "q9dpPSovDWpgLZ1Up1TVd6GKcXciGpaPfhnfLkCzf6Cm4kviY4Wq5FmAzTCK64o8cASgR4CzGKqBMJ8WG31Nwcy",
  "key3": "3X5sv69i4MEVxpoio3X6JWiisoetbvQDNN6CA41mEqWh1aQATZqMoZtYqYi84HviDGeHCz56mP9NVT8DkeUo1udx",
  "key4": "6yjf8WgDdxg8FnrZWyFEFRPA4t3VZudqXEakna6fTBSuBWFoeuqZ41u4aWnk8DVPYLJeifXQJVm2Mvixt4r8s87",
  "key5": "3QeMksALEn6aiex2rENYQf6uedCuUBK2KmVMfAAnAF2qsVUPntKL9x9CCYEEDwMZcP6yK83NeWwYJPEUBrWLconE",
  "key6": "2SdGqdTP9dsrLWJZWXJXbU4ARBFUoCxy5mAcoS4RCnKt6JiwydFhWFu4WKJP6bH8ge8ooTsAyuWueHQyRra6DsKn",
  "key7": "3kLh2bwPuJBKby4hkDXAfqQVS4m8d7iW6mexpsU5ujGZ3b6uoGjNQMwSKxqpy7EAEt1FLbNqrnoC9UwSH4qE6LPb",
  "key8": "he6geT24dcdDfFuZxeLfgxEYn17LVsWDudof1YtsEztaVrPRkTygPuZGfsdJgC7NXqQ3NhMBEhYWemgzg6AuGrW",
  "key9": "2Pr6n7sjJhyAdZt9nkVm8MUkkm7jBRYR2zkX5kKqNijvCKxzkXpXu1hBPKaTUMNXPAo98hPx2NtS5sgBUeVBiKx9",
  "key10": "4k67EwTz1br7WF9sjyXAD7rkzW4DKVPYgaqzx2y79wF4CKuTvAy2uWai5wp1Rb2kPA5mwYLdc9FCoY7tYQQFyu97",
  "key11": "2ndNGQfif9zF842BcEzjNX7CNdNHGerw8GVqHYA14zAfhLSJ8hECAREUS3xNWnc4FUXmsgzXmTpXhMUqsQ2eWVAf",
  "key12": "4NcD8ikWRZmh2gPSju6475p6AQgk4AFvxwMvvPVCGjp4fzebWvW7qDXkvxbWaundP84pZ5ZPYQgdrRU1THem1WoX",
  "key13": "5STGXUHnsR6S2nEKu8RFhEHy5KP7b3gj5xZnM8Rq2RgKXeRjgxJQLx4YM3MJ48F1zDrcLAKnz5BVDVKwDZcuUQxi",
  "key14": "5F1E1dKVFycUtCc2231WCJfCVXySvfbEzRgoXMXJCHLZMUGhqfH71Nr4yEQMRTiKDDYNNXcxym6HDySA8x3YK6k1",
  "key15": "66yZvE2KNEUt1JyJPLuXvNKsMgvQEqfaw4x53Dm8pJqRNg8XPeTgAJaS2x28YN4crBv5PbkkMeN1SLNRpxVUnsfr",
  "key16": "4t32h4UveJ2Q5VXXKwCqysnJJ8fX8oscUMRxs9YDAyKeWTyMAYfmDHXKQNsQmwLr98q561j9Lnc4FGAfx4XiSEWF",
  "key17": "18hGGJ7nknoZDo2bP7KAspu5a94Xcwo5KWAcQBeCZecgujpbbNU1nhvc9nrkZcch9twbLaC54s1ZJ6HrJUcwmhG",
  "key18": "3CQpMLbbh4DAAkZKrwK7cTmAT3U9knNkQ1h4pfCJy7ySabHmcAYF6L6g1Waz7ki4eAj9jwmSAZBRDFHCmhQho6dn",
  "key19": "5k9kQHapLBsf2uRFT2EGuxcch9bH5nPishmdi9RcZrrGBw8QkkuZqxVcNB7zCpX6LEv2vXexjserFVx4bQpwdXx2",
  "key20": "4qm6Tj7MdRae329CTajSnQ5oPBMUWkfADxXj8fuVYPCNVh4GPo7V3r6Ar5MGdW47Eku8D8Nt9X2duPLJBwr1sjRB",
  "key21": "4cfyFU5mB7rmBSx4VSEp6M62iLmUDkeBQXJamob9QssFh481vXm9JYj1iS1aDB5vJJHb2BqQ7uhLPVmzapvmVkW3",
  "key22": "2zxCfdgeQbM9WWBusEfQ7EV9YyoewtLggMYpn6bmRuqZPzynoMFn2GJX4f8E4XQLqGTLp4sa5VEiUav9gnHGn5er",
  "key23": "62wrUEVYRy1kmViiXpNPEdVCpe45A43bZjgCS9DX7LDgu3ykD3T3UFNR6V9BGCFJqw1bE2DnqpBYimYoZmzLEa6W",
  "key24": "4AvesFyHBA4yMTKJMrPp5ePXe7grudyJZgbpmFB5RyDXgsJdHdhwA7oUiwjeK6fEVqcZ99o2JbH3EkGfi9picpdD",
  "key25": "4NYVhoj2KDDvCp9UL9eiyk6YgEw5NygpNAp9ZrC772YYfb5h4RPF793ovhsVBpMqJVk5rGsQqfMdYhKTD6s2PUGJ",
  "key26": "5dupTZJDZShntfwXQDnM5zqrDNUBzUR8vZYTgYJS9xRE6V1rzRqxQr8B2RhtTzodVcqkYoh2yRHqjzw5mkbDyauu",
  "key27": "5oJrzo9Bj5rvqEHte27JWxsjsLVFyob54vtTwf6JioSwqg32CaCPsEduF36FGxdCJo7vhWyGwMiaBtjcDW7NX21Y",
  "key28": "HAt7sxX1M2XpLAEuFZj65dCnHU72pnGbfMLfsq9G3bMbUhAJehRA4bDN7eKt4muWQUtfSPEyBtCSYQJU1Vx9vcQ",
  "key29": "CHiNH8W9TcdCk4744ufArUGTmxWz5V4HoNbkpzrkVQHo7HbTgAbVXDqLPEqqcCMS6RBBv1ZZULCKfjdCSh866gT"
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
