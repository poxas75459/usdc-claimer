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
    "2gxWMpETJxa6kspMSpM1FNPdjfdEftd5z31jLESmFbrhksHWF1YZq2JFP3rXUaCXdkCrWhperrx721mrsed2BRjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeGVvEXiW6rDvwAF5uXLdLkoCihwm4aQ8RZVteBd6ANQnUVACkZ1XAvc6VVvfZYSmc65ASZFNza7j8W9RNx9Q6z",
  "key1": "3RCqZywzjjZ3bpqFSybJo7JaJvtFEqTPG3NheLtBKtskk3qS8eg9TeKdnXzEMyuBnL6rKe51x2JCLgLP3YLkk3dp",
  "key2": "3gBXyGBLwa22j5yq1X9LWzB6mP9emcw3YctTu5tZz5eoF9GVn893EjPin8sptpTU2gALsJcbydLQ37NYJ1ac8wjq",
  "key3": "52yG122Uefco6C9xCKDdUZnkZJtxYftWKC3g6kGJa2e9Ub3LBdSRTcHtRkkikHSjBPi5dcxDWRBSqRKygeFxpP3T",
  "key4": "2Tjh1TkHcxCFfJxHVk35QQDqbnAEAYCyba5f8PJwtuG2EFFDbAzaVfKHTnsjQN8MqGkFpsrn1w3AqUN7vVjrCXYG",
  "key5": "5XVkVMz9N4svjnRwZQBQ4DgKguB1owcXLbLA94TZUZ7todga1CvH9AWMkVY9bfY8cEnk58sqoyGLzTpmdjG8NvHS",
  "key6": "2RUr1WrM4aEtNbsvFyU2SPeZCaUT7siiSYgnuDTHSEE4Qnjma1F3n8QKJ3uTFn6xKYTfs8J85BgctXqrAV3B7xth",
  "key7": "4fJhzEr7j3T4ub3pYFncpcpQNgiB2ML1UWvKYi4pyirJejTH8o2gQQdjSRoA1vGs6v3PnfGnXgiY8ffYw29oAqxp",
  "key8": "uk8XYDjAQ6c8tP5vyy9vDYijswoLyTVGyvMqeSLpCTR5L7N3VEEVXPeDbbhHEwyA3SzxDdDJTD9gEoCGB8XtZBc",
  "key9": "2bxvy2bgHTNer8cdDbiZVp3oM1hcJ2LxMMTASySLvgBV7g62RvAk1zAaJbcp6hHpCsV9PxGK9JBdZz2jZgATfEKw",
  "key10": "5PkUeXi3rqzQG5n2QsBnc2AKoTkcH1D9w3MTN8LrFsukcr4Gy8LX3cqHceRm3Rupf7FQbXjgVvxGLcJ81Dqz3is7",
  "key11": "4P2dNe4jT7wymG7fHhorgWAbfx4P4Je9MyiUfhNiM3sEiaqi8EjcXiT2Ff9dzYkro8v8UToHL9Nv5Q3mPEV5U3qP",
  "key12": "2xmm2TBrKJWJjmsnqjR4uTSW6TcFP5hnwiRYRCP7HG9uwPDb6rubKaDjEjnqSmq8PJLcLZtZTtMQZm3jTuUZvhp7",
  "key13": "2gCDY1X2A1B97NDyECBu1VNTHoficcAMNRkUPgcRP8ZoYa3jRJvwpgzzKnuF6UiZANW6s6mT9zDwKw14L9fhnUWy",
  "key14": "P5DMNXwiQr3fBGbiJpFfoFMsWu9fXs4rmLrQq4oKtQXMPjB9uN3NUH52P1HsFh9zarjSHStL9Pup6FAkvGCsPNc",
  "key15": "3SGGrEQEsSuTV2PKJLNYiZSMw4ArXJBTJHruYAi4Z13RqJU5R5v9PDVnqAmnQx2xwigQdYUVUMLKJh7voZDQ5v53",
  "key16": "MZbxh39pCHGJh4N9z6kCxNuo1jrWiGzyxutejbUEP4qiGEFLUXvMy6w69odTjNi6Wht2JoMY2n2w3Ewg4oNsRrk",
  "key17": "NEHFiGXe6FSR6bAtf1hAHcNq8mrwY98AwmJueKgvd9r7oMyKadFggTvyrUa737zT55KqPbFcHmu8PfciwhJ3piy",
  "key18": "LBNygMBbZtrXEe4r7jYjnJRzb2Dbvyuj7beUqAoF692upAbTqHZ2mXdoyNtqbZonAGbcCEFZU5v7SpxcPBcveVE",
  "key19": "3BKXF5uVK7twvJwQjfDrBnBM7hftkgpK58MxrSY7gi9dWTtq8ETDBRawsfmxuXtYQaCm8oioWeykcCtsSW2kTFmX",
  "key20": "VCrGAhTdkicDnQ5kyednqpjyj2NCWiAaegsRrNWJHobLU9S2vdAn2tdJJBQcG2YDC9nSQo6araTP8q5FTaovdA7",
  "key21": "2oxfR45WudnLpf9pNa76kP3DU13Wv4aykVFoTEwpYxnhbxBKd4hp9gu1v7xsgPw8yzd5JNJK3WGdhJAwm9fSRRSX",
  "key22": "3u26g5CzVKKyKqwhjPLCrZWr2B1WGyD7fxbvYWLBfkeV5VUxE1xdQdh5GS7GjiprxwhiyeaNCykPCjEyi9ca6Qim",
  "key23": "2hhdpt599T2WthEE2td1Z7Rw7SGwkUAgFcueg7cUsP7PEjaiJMHnd8GTyTKJpPQw8TUyLmeHHNzXkYbgB1BN8RdL",
  "key24": "44VxQ6aLcj8VEWK2Wy488J9hbRmHNbzVSRDwZkYxXkDte4ZqYQ6oMenuQAAV3e4YmZNZ4XHqk7ab7HAdpmqMkR9k",
  "key25": "3GTEQje1DqX9nspnFuidYaEBrw54eiqHf5xuswrtCQKscaB6U76SD7uBUnECzHBfpoDmSzMVnZ9qduvvpzmEY46Q",
  "key26": "66uhE34KJra7SXxpKyK9F7hrkdTKTycxcaSCGmupzkm8F1FdWSuwUDeftPNNcaKn7JAfYNdRCvndswdASYd316sQ",
  "key27": "5by1r38QddzNKo8rF2RUQXNyZGduG23KY47hzJkLPjmwZaod5TJ3xAKXVWdiRPA2Ff4vKzq7DRDW8hycHiUNDPJB"
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
