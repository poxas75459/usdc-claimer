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
    "3FLGwfP73SBLh5J9LUJsLhq2TKRxfBEaRF6AxtNhN3NrfSDAxAjkMgHUMM8Spi87Jg1Qo3XbXsJrgC6itqXDe8qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMbZXTSfjWZ9bhMYs2KJCe3m6KsUHafgY8ssBacV1JeEkm3XekHReDZ5uYcDQuakfdJAfkqLUcYsuUPUToQkJ5C",
  "key1": "672q6ugtRFfrmd4qKnBXqJgRdQYfXhv5rwz8uUuFJLjAtuxXZw7nWhbsJjot4464EpmtLUje1uApQbadiHPKCDSf",
  "key2": "2bM38T9q6y9sHnNFA4oaGkW8fd4Tu2gVcCQeqvs1QMFtuLrd3DvDaHeseku17aorD8Ggbg3Tn6ftNAA8SxxKwxQT",
  "key3": "EpEAtkPxAjazbYQ5tzjoRtT6w5qhopiWMCwFVEZN7ay5qvNMFpaFRqTjR2tpYZUXD7V2MYSfafbvyv23xweLcgj",
  "key4": "3nxv7XXsdAbMiaw8RApFLB63dvynHWZDJhmsZowx6tfdFvzjgmmKxdnthXsAshUEj4vQyUFDWK2itV49p2CLweuH",
  "key5": "5RQD2MgmprwW2qW5MYgFp9iuqdQkd2UroKNiRgM4ZFNaBQnk2LJSCVjEBqcYSGWoZQmf1SK2g5JDP6KSLKyBmu85",
  "key6": "4Xw2rvsUv9Ht6veubRWu9TWjeQoBTEnxy5qDBZfP4HHDEMhJZFFsLnQHqVjNYBYXx8uHwGAzNkGXuaAUqXi6kTVo",
  "key7": "3pM4YrmrN2fcM5mAifB7Hfguq92S3UPj2PZwdMEACDAuvc84S5Sk8JWByZxh74ZbZBrC1SjKyuXjzVU9vMmgBD7w",
  "key8": "3dvsDM7jq4cTacLcPAJRoQYmPfjDSHHSWXWchXwh9gws1wrAwj7xV3soAUrTwhm82awLuUsY6MjFTZ5NbCpN5YP9",
  "key9": "2PqjpwyYLyVi5NpWdQTBKrProWepovuvWN5Qb5GogMxonXvQReSwKyYenJNAsGLiG9QNNicGtnuSfcH9BKm9Mxtk",
  "key10": "2oCxh2erp4CyJS2jE8fmEPCtAWHWP6eNc7hvBxZ1P47Gdf2S7KZdwYLxNphPbNk4bFysW4F5WjSZaac61sWJVJ7x",
  "key11": "2A3yoSVJ9HLNvv5KRHuQvV7pTefcbmvFGnvyy3SrVimRqjsxYeVLxM9mM3QuAVHYcSqUx4JMpnMXG3dYdryoLVTK",
  "key12": "2pYcxktVwpvSTx8rHe1HbbnvVqxT8HkVV7dZTHNEd64d2QdY4grroAVNpCvusCK23dyQjqLjZfjjnLi6TojJquRg",
  "key13": "3F1U5j9MCQvYr2dajHisz8kr4dJx6dMvtgqfKqt1nkhqkA4xoefaTW7DHop2x2eB8w9LiBrPrxguvAzuLqqR1GSc",
  "key14": "46kX163Eo3TBjaraBKFPxQ7D3pfqyPEdkPKY4yw8LwnqsMUaAtn7cEPD38pCykQDdKiL1oMVsWeDRuaGoBPy6WRm",
  "key15": "gWUm4Bqh2mSnziyCDb9DyohYU7pgU9fQLotoQStekMUARZtGD8hC6w6w2J19LWNSnFepPVgDkNoeKpSkgU44s5j",
  "key16": "yWnDTfcjLjHo9iMucy94zHBs6ay3de8MYZ9G49NCumi4sR3qGjwjT2uaKGV2MmwE1JUXN2pZAkmXXVWkQf3eGkX",
  "key17": "2pJWfbvgQAZaez3JRyLzx2pakouCootPnRcvDbgA9q48yQ81nFWnBdu9Hq4bpM1VPd3YsQgdpXtvcpqfLXaXjM6x",
  "key18": "izx7K5UFycKh4u3AY5fmZ9v822YvtJHBtyYBNGKJJXcE4X15Xc7n5frV1tMPnW2LeJWNCi8vCapVLARQSg4sJK1",
  "key19": "FTfCZSbQmFbRtkJAHwHPtrnvsHpEwy4busy7m4Xs3ZFoqFZ7wqzGfxDcBtneGquBr2aXjGjsZpGv6k5S5HmasWw",
  "key20": "4P3szvwMXcVQ8a2jNuPMnau31F2e6KGH2TiKsQYm53gjHAJH3ek7nNLYeVDSXgPyPHdDJzvHM3oE3XkFPmRhgX8P",
  "key21": "2ZYumUTDgzqn5f8Jv8qMuEKbYnbkYHNxemYmqx4eD4oo4bcHJstveJhF76fqZNAHrtpZ4zqt9wokbz7hi9MRdZQB",
  "key22": "3CKNcmdwjgEV9dspFj1ATPdL1yCGHr9GGp1U33sUoHoZFFXXQLiFpgiopumkAs9KmzfqgS2F8RBscnLjrDS2o8o9",
  "key23": "2DJpUXSJ2yfyrgJVTKMm4j926nLUFhSmAMiLZLuiAMpYKYxC86DmioySjS7JyL4F7ruKCtqhvHZdYHKoNfD5ixzP",
  "key24": "42TPzw2GgimtLpu5TUtZVqpVk26xZSZY8VUwRQHWmZk8yiqmmPnuFFcDimEALytSPq6NAJ8T2tGrpiujuSarWPg9",
  "key25": "4TCcT79TUBkk55EH1W9mX89Bp1kpEoRaA9Ex68CC7ksEKuGUywNDPD7VNZe6JysbMuLziywttshZzGoPo2Kj16G9",
  "key26": "5krUr8d4iSjhfP4LhG7PLSoeXnfbcvVFYifaMwsx1fsy4LB2rNrY1L4Ph3aKyDohDrKPUhSzSrJ9zk3mUX18s9w6"
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
