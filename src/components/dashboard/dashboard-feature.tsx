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
    "2UKPTVXxjr3DDAV9hb6YtsJdi7kwryGrXEdkTNxgmaGT5eN89MLWodPkbPn12kKcC7EUHjhWoEao5tz2fViAZFbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FUWMJne4wjrqswWeq8hoMsDsXmWXRSZitsuLrh2ojWqaqQDpERqKrEY37Yvjuep6zhUR3h9jFWz71Wn6nV6c28G",
  "key1": "4xhwVbiwyRc942ABXWj1cSDiLgWCtwkBcCatwKKGVbLfe22HLiU8ZATK61zNVSLUJgYjcvtVDSSpZxzJt6thkGBV",
  "key2": "irEGdc2a3oTjW6qpebzAfuuVCNK9hM1Sa3LjGskC9YBDYbZf5ARRKcm7ZYJ88EK9Ta28C3yCTHZ8FXMTrXyRprT",
  "key3": "4nWJWTLFDbiYWajo213qveHi68kAWi9dCQFEzKX2fUkwmefJyWxWf5HYkwZWXYUTcgRvcUKJbZpSyNcsMyXv1Gk8",
  "key4": "AZkaYBwJ5Ha3yUoE5DQ6Pc7Fuk5agbACTJLXoPPUcB1LHJf9z1tWeXhiesycd2WYavnefd7BAVcZJmKdsNMRM1T",
  "key5": "4xhH5Lch3JWvhcrWp1kfhZPZE3F2gGjzUtxvWFBmhVokq24t1to6Y3pB42xAGF1ojctW1fVEfaG9gD5eEic4P7eg",
  "key6": "3pXoo5vriLkzt4AwnLJqtcGHBkgygcToXGpexf88QRCeUevPMUcm1dmVRU73C3gCXLUL1fRLjTxeWfrTFBAJYZ3D",
  "key7": "2gYqJhDjE25VfX8pcm1rJUCFWwMHNUcKBKmy6paoKWDMydyeAfLj571YWf4udxA4sj1jHxY5ptjt8sXAJj6ypJkz",
  "key8": "3aop4asvfPm2kyYQnqR6t8bSWGUaoRuESarzHS6L1mAmfVQt8UkXwLEMn2yQFJJW9TNGkktL4C7D1RLjvPpShSdW",
  "key9": "5uWMVMeRXx2uLuiuxbX1hoT5J9orgdx586KAWNkhrnbbWy2k6tHFZro4fGRh973X2zRW4MusQZudE7w5cGD6r1Ni",
  "key10": "xVPq6xt6jcH9qc24Hqw7iXrqLcUrNqQ2icsujqEhscJS5FK3dNDzJz4yGw7KiA8yrki3Q2ye8WYttAnczu1u1E9",
  "key11": "5QNyAzuEDHq5GdhYNLqgvz6kw95eFeLidxGrAqqh4R61bqPSyhuoG5fzCfTZxD1zqsZQX3bibck2jwn63nsxuEhC",
  "key12": "48JwpZ1GroJvKQDtqTdheewGsVP7BStL6GdjqUMn5iz9SVafiTq2g9SMqNFfLx6uyuj6pmGnjRVjZdxDAc1SYeu7",
  "key13": "3irYkt3cjifXMXzAE2EGqLDJ8C3uhBuKXLuzXdMB3NqPmsG9ZY3KPzDeQnb1PcupqsRgzNLAM7Lm7Wh6SPMSqX4n",
  "key14": "2CCM3DbABeBpW3iMtm1WqYFXFxm9c2rxvaJhn4bLstBgKeztKn8xZDohW4xMfMA7o6FzNfZNBgJDKTw2xSmyAN5N",
  "key15": "3i8e4j3VrxhKipgcMEkWB9k13MmkNQKSW7uSohZsv7LZs9QEhaDhMhj8xYxnUEqH4Np9CHqy153swB7ASjhyU2c7",
  "key16": "3y1sdU7va9B7ryPeccw8oW9qY4LfD55MshKrgGGU4AT9GzknDJtziAh3LGnMY9mQbNw5CgdQ2dZj9PHBjkpRLjqy",
  "key17": "4f8yts2XrTrYa61cDHWhgtbEv2VtyeXzQCYTBD6Mqmf1aKCKWn583zU57wSHWZ9xGYyjv1W9qrodgna6c4YAxATX",
  "key18": "xD5j5B8gHmrg5HnfN2cJshPTfSHd48Ys5mopuKLUEgLs4gmF16osx7d9YtUXXnaWWCWCWWqYqixv9N36fom4Cwf",
  "key19": "e8a1uZRFZ26SKsRU4TVp5xewyHaXqBJCeYuRoPU9foxuYoXxmoSZManmmZcSmZ4o5595n3UGCNpCr8EwLDfaHMY",
  "key20": "3kApjXeG268hDL48JADQ9yeACtNGCHC9Ke5CG9CpRnjSeKxhdNaNzs77pWi3HkkKy9zMBd7UipY3xjEZRFMAj4vG",
  "key21": "5yadZjdzFMzg37bYPWVhpiMRwMrqkn77hdK1thiNxtQk9vgxXTv4LxXQjYdLUjX4RSLCpTpQxd9v9d5mrGXcGHqC",
  "key22": "2tCbnimjZ8qWLffdVXv58MGW1GFnH3rKzE4ZbmETwQTNE4RcjuzaHqKdwEPs16woqRTcBQkyYNeXuPM5x9KPQeZf",
  "key23": "4fvtyk4WZC9HvMY9BDHMwC7bvYvhyNBKSvjfEzv8bqyaFEkKN9oadCFFDKFcXqAA318WTc1kBa9AsXkakZAUoPbZ",
  "key24": "33xzxRPykhSPcg9BBGY9sfZKfCGWowtwuQtjptwYEyqBrbdENqw8TyLsJ2v3aTKyPuEi5z6EsXsSP5UwF3LSYKmK",
  "key25": "cY8DifXYqDof4xtgH6SpsGfMoMHWnSwmhjL1GVg9BLqFwygeH6KyidQbdj9pG6KvJXjVdfY5AFCccNjAFT6WkGV"
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
