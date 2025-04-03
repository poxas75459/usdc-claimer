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
    "3NsL9MwgnVc6yi9jfo4qnZwmCoXmWAiJ1Nn8haTcXe6SREZ2PHfo74V91BjnxJxoV7JxEppMFdLpGVENmfyPVMjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59MCZvQuhizgp2U5fYKQyMfN9A9BEMceNRNXMAALVGfwk5poTYGcJLHp2fntw64wyin3vCEDYsgVHsqyNbS1J7ha",
  "key1": "3ZxWWP9XyM4ovpwqcctFH4anWWBjmjt5tgbuwhMTrrfPaQnpyh3sSEWNWKbuYChhBLp7wha7dUnACRdSzkXZZpcz",
  "key2": "3zaW4dvuUNSyLdQ5KEiP5Frk1BAvE6UWmdDprCvB71bSDnadCaZgWiPfVopM3LN2sk4zr9PL1rnHWXkP62AcYaCB",
  "key3": "3iSn849DxNnNcFrJGkJXDVVuAbkyqWrc5Zw7EXLAeqQ8cPBb9AAWVqpmvNLFm8Z7fRoY4UEvsCH8mu2aoi6tHFdH",
  "key4": "ukpFSoDjnsT5H259mzowpNyZKiQ8jSqNtPGtoP5ZHJsC5RqofvsiiJZ4CEMWq49xdKGz3ynqR6D2y3o4PeLtrfv",
  "key5": "4ySpGDcoCXmV9wANf4bJ9yDbqpACmUWMndqUWhdrFUB3scx1r2z3LLqimGz35MMa8vMbEysb1AYBT159775rfVsB",
  "key6": "2WnRHMKn7RMpvjeV7Rp7qvY8EopwGZmKdGYFUF6t9S7SCquRn9bykns9QJxTs66phanNXhGKT7LVgjXGHwGGka9",
  "key7": "3U82FksfkBEMcKAqmNZ7Kt79CCM6v2MqEN84YqxecpmiBMRscFNydSLspzLqVe66eAJxivEwCGapSKDd1usQRFVj",
  "key8": "2N7tFvyJT7egA8TDxsp7EBMwCSXPB8nWx59QRmkAVHKxuDZU6waP2GYQp53WaaecbwuqNvGETfDrTUbDrctfuDB6",
  "key9": "rFEp5bYLZH93p7BaESshEUTT8cfo4gDx19gS5PoR7wgfisHbbD49gyqM3t4Uo4qCizZDaQ7CwpmpfXitAFcQqGs",
  "key10": "4Qf67xMXqe5ZfTMeU48sgkKin3dqTq47e4JyQxKMaT58T7uN1Lqkv9RXuLoKjWRmScLRyhAY2mSfbnRQSygjZBKY",
  "key11": "4CtNBHDvG6UMfiShdyR9LMfcGyEorNhRfa8mZG7VahqZh3qFjrLnWsBJxDvZp9V3w1vNk38pAAhYZzTEKK6gWV8L",
  "key12": "4t1TtDkTXhKgZRU2Lq3trieqBuQMKv1eocnuRw5VSmta6chzThcvWdtu6p6k9jNvSKaKb2erMsFnQEeLb2Pe8pVk",
  "key13": "5WB9gyKhesaSKb7EAbava12ozvv7EXbzjtjNhXfXSenE9wvNACkN9idQSztfRuQ2N8Awpzk8gVX9TxreAEbTUXJu",
  "key14": "3KT76VPAnbKtvX6QU4rd3Hy9ewZCXXH8ooKvuqjfbDRZJunutMeVwtZMzJb7EES3LGjBS4QX2dy2u1JYdp6ihRq7",
  "key15": "4DHFDytmxGidvYwpCZVCb9hW61nLJ8Ceojksk7ySNmcTsDR4rWTGLoeqqoJZs3Vj96NMdJymvUCG47sqPcbqXg9p",
  "key16": "2hbCU6TXYuGDyJyYMZMrxgAidjkJ863tEPDwuAfvhiRi61hw4myaGHw4rFVJVzh4UhVwNXCCQGSr6dzcwfvd2UN8",
  "key17": "3jQZLP7PFeQkQMJXBaEUyPqpeEAFZQeWAc2tnU17guYXA5pDaaw421AeFvNWGQnADJCKUoFt1pw2esvSLHnATEPr",
  "key18": "359PTnDR68SVKJj5EF7wtyCgysLwQycXXkrBAK6UrLLYJNLcvv2RXFz9nEgvDrHpTbu22K38FvXjqrNmk8G15c94",
  "key19": "auK21eKrAQmPBXWciqx5KuM8zZ9nCXTGGX1wutPfCFwaqVYC947hrfVpsDt9oegrtsuWQRRi8pC77ynFoAYZQRJ",
  "key20": "4KeAsxkQ5LPzaa2n3VqhmVf4rrsXaGzRqHfTk8rDGQoL6G4YtVJBWbsH7SU1DTpBdqwXMS6Gq1csV2zZfNvUz5uN",
  "key21": "67Yj8iteZRGQ7iqn5E4maQEGF3y6ZCgVe1h7QfjNYqWfsnN1kYVBVSFdrDXWajr3mNd1zn8QxRS8sErhDPW9rRtx",
  "key22": "28ob83fp1kk2XFFEFsJbtfsvsW8bTE5ijrQGK4WR6TScgp2mpQpJvxn9KNCzVbf5joaxWTuPAh1L48jQPPRDDpgz",
  "key23": "5A9pQgfCVz9Wjv7svGMw8VqCaPXbJD55KWJzwkXW7D8U3HfVhvyBQeYzEZvWyRoDwULGECekvSThLLcXQYRNii1c",
  "key24": "4Bc9rLDyVeYWQes6cRT6FsxVAEtY9nsXzq2VXPviCVEjYNBEBKTXNb5qA4oHfgi7GyXiGD5DiyuZQcG3TTht2YhE",
  "key25": "336fMTCJAE8RpQ6NtRE4RT325qNvmnHZhbD13LBP1mf4EWp1hjx7ULijTDt3e8gDEegEHHhETak8qG2TYSQ6H247",
  "key26": "5W13emHEmVJbSzmtWPqBq4NPVg9azC4BwnoU4151amdW1hg9kbd4wa7LWUNy6JtuRsNcKWX2U2dQUzFEUJYYiuLq"
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
