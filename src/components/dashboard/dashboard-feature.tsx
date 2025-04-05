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
    "4mEzoRzApJXynwynUjCvHv4ZxLTeVcwXQMmvHFabgLbDwnrt4gbCFBVeCbTn4tw9tiuwzsEbGKbnmksD36GjRZjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i82uQGDViaeXetBz7yVRM5Zd2jyc26zcVkyJsF2DSEDH9PwUXYHGAEbAyQFaxyZhkccpxu2TpXThDTo1CrsXvFg",
  "key1": "3dswUPuDy7iqV4qZXeKUPaMWXzBj5DmekWSxDcpVQaLTWXujX2R18inQEUXbVKKr9JMEc4GADGXXaGP62L1zpspZ",
  "key2": "3m6Sja5er4g4EXGzTd9ThtxgiVVDDXJb18Bnod81CMXvB76Yzg3oWRRWQBPx8BGJ2xqjvnbRe7Am3Hw94fFeWgwV",
  "key3": "2BH5DDgQrtYGBPXqN2X47HcU1FYrQAN6zMr7rh7oUf3YVHRuRskrAXnMrCxJxoqDcpsjgXkVpYQWNP5yNFiKL4hZ",
  "key4": "4gTnY9EYpmoBmzxkoSaekrucaxeeAimsWJc5iK3Tgf22Y15L1Pr9dV4cKDJyMibLBwCRzUgao1A9kWz14CEgd4ZE",
  "key5": "wPwZUL7y4WCQbAdYnYnn7UpoN6bGCXEU7kFSkxGK7TMAoqVKcknHpJCMa5hoVhATDoLqfjGTBVmLyeJwdmrNq9p",
  "key6": "3fLPpxhTnDEJ6f2yvoH8SmVUJXh4hyT26CSJp7mssrZkb48Hhe8ahwPGAaEu136hN6DqMAgmihgmoM4iAxTKJRQ2",
  "key7": "5qW2m1wn24BZh89yQh4mHQeNLCrZjidN25VhL7352EY4xuXio4wiYHpBpwY9ZnwwuVJbKToHapUAA6NYoYp1YAxA",
  "key8": "nBHEMc5JC1LezspsDZJezbeJGtkRTau6BuK2hyr3p5ZdAwnp2VgxdoA2f1FM7BL2JdWNT1M8F73hWfSwQYaAZw6",
  "key9": "5fqN5xMYunYgcstREPbB1fB4c7EJwVa8BceJwCDYsutXc6Lhbdu9pUSqeWCZMRcViFptxqiBABVq2QEQCyQgKTYa",
  "key10": "5gbGqDpZDJ3yTJDZVFJ3ZuBwnqAADDW7H1R4KoqJzr3VtdvzPQQAM7drjqSy92YX1wSSo6uDtXF1jZ6cpP4zrQcX",
  "key11": "2cWzBhXgkv15FnAA5rXLfh245bXjxXNwN5KG7wYnb7P6FHEvkve6BJutmzXhD3Fa5bZeHfb4m72aPBzHdeh1KZT2",
  "key12": "2YsFhQqerNZNpRSUP7KkQdqTgHHCfj7n8hmLBrockbzwPwbunhAEzbqHbTCWFs1nkkeF3gYnb7M1iBmG1LevSTjJ",
  "key13": "3Wr35nYTMsKqta8iQY6ncSPWXvHexvfz6MkBVsREb6dhyydTX7JeZSuEsYMo1enkyxtqUCheFA4u293zJ17iTWPC",
  "key14": "2g8pHdUEgJWGpPua3MAMDMBSgejXausKPSc6hk2RSaUZTn6ya3EievdFkb9JVEy6B3z2pCgy35HqCR8jBpkwwakf",
  "key15": "2GrE2NHFz7f1DYRKRLxCQYQgDPZSDvWA9b5MyRnRdXPtErFrZCMVwiop3vc9zty9yppibwN3tN7ccUhvuZm6Rq81",
  "key16": "3SdnL6wx981Wr4xP3ShpQ3AokQ5uSrXWEzVK7TVeTPu8cdAq5gWKW5fpumnFGzaDBtsrykSf564Ly89Sg388ABo2",
  "key17": "5RZyqQrMuFZFDsZp3n5ktKrBEisrzfZuGDgTGefAbY5m2YTnAcYzSPDRezvAdJLkTnqZwnWWESfuJu97jJ8rRJbV",
  "key18": "tHUEaKdWpx9xNZsRNDFNG3oEDGkHz4VffXfSyLYAyb3613S3Vx9bDZmMxK7yr9LRqUy7J7BELKdWkxmgcW9K9Px",
  "key19": "3APiUGVC2x7hnUutrqvE96xexzLZn8yZJu6dssieyNidtoD95MAXWTjfkHCLSYt1Rve4MPvoVRoHkq2KQCXJk5EV",
  "key20": "PrvYpNKn5LEetexKGo8UBQxXhpWULG5wgaJtS5aBsArHCJvSbsW1JTbbirPLg1YHYKnCJpwjoDXU6v2Wwm3cap4",
  "key21": "zjqBHKvd4DQmYXXJEznc2sPZ3njkCchFULuuMbTumsyZJA9udFn6g8sBn5Tsp2rWuPNWAtaYaEex8SdErDqKUc2",
  "key22": "2kJK8HtP8MSxGLxWTzhgq1S23hgLuESYiAomoWSjMi23SuV1S5mufFHLuErQCCvVm8hL3ifML8hi6KmD8R6CuRCh",
  "key23": "66wfok4qezbAmdW3fmigWP4DbdVD3hmLwn29dRHm93DQTAhkdAQGxtLfuyUUzduATPf7iYAaGmVkRrgVk86ncUvw",
  "key24": "Ryfeq54qz8xFeiXzcx4Lv3dBsYSr2b87DZYZqpNfkezEVFD6XiqzH3ZZEJafyLRFH5hHrqgkr6r9deeUyXts8Lk",
  "key25": "rkSbtsxZcxvn3b3waL9HjkGnXr6nqwxxVf5pV1DvhFd2pSyLEfkzSsq6R8J1YLJiUZ2wWm6QeuNYMuoTzeKjsXW"
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
