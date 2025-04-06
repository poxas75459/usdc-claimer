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
    "4YdrhpjCCb5arMcaHYDXFkZnjuUfzzKEMBqkFmUCkDsXrfgbaaQMUNoPoUzq2HhtRup1beEkyAov49RFWQQYd62E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XrdWbxHZLzgx171bdiCMKU5cnPyvDaGMZ2qjg6hQEv3cTp2Jyrt6xtDRHwLjxEwg8n1hst4psWPhjB4ZTZWB9UF",
  "key1": "2ZtT3Z1KBSPaDyJKeHTLuzakzhmHtEcfURxMpaEXSiYEi8aF9j8xuB5LXua9aTEZjhrhEfGciJaGXsetG2RJnbyp",
  "key2": "26Nifx3R4TBGXG3KWbDZGhKgVXG5BvQSbbFbWUt7N5we1cgjDWpGsWqGJbnjLeMEp6HA4ahqiFHv29h4GJsHBKih",
  "key3": "2LTNdoaoBmdNn7FPpAQVKZN8zmPY2WAgVhcTzhEWj544RP5ysziqJjjEJy2tHuLZAxTaBMtaTSYBqXzTb7krNjG4",
  "key4": "Aj2yfAGiiWv91ukKfVMFxDqodXNsY299Xe7Ls4SVe7hmbsVE9NQtpnxmb2J47WfsyBFVhH85NEcqF98sgEZD2cF",
  "key5": "3EeKYfuw2qbapTEZ7MZyjsr4SWjGQd7VXbrWnzLpkSgtVdZcTdBAxiFpxQ2MfyBZiMFecEJHfiKwZVc3YfJLUhzv",
  "key6": "4pW8SZB83CaPmSqe3jmcFckDy56TGL36AM1qFyfnXZXgFh9rSfgjeFrWvHKL2CSqC6JV18YhXsHZxBFSkQnEqxXE",
  "key7": "2gSaKCyQ1kfuwKdV3LWXtB4RPsaNeMKPUFbZYdobquLXiCELUZgbMoNh6mL5FYzDkJteXojMpjsDpGD3hKhKyHQ1",
  "key8": "EjZUqCyuwBVryryrcd5YUZbkKMe7srFvecFNYhUm7Xtn7g2m1FppSX6sGUvkHrCaM7hnZcBsH8aznAfQUCYysfr",
  "key9": "31FNiC1JZNa3QiJ9B7bjNYygMaa9h3DHzBiwGEoTxim4LshDvwsTT8f35pmqpv2CocbsJE54xvUTcoNB7K3cciMv",
  "key10": "5TbRKvxtz4k3N6mZwXrqo5EsgjVxrebu4GPnJykSvbCMPa4MxUHd8wZ9pf1ijptS9pRadCnhAAQ9nngFtHuWLktD",
  "key11": "5HyMUqJKXHsaduipnff6EzsFYMGvK17geT6odERiMiUbBtXJfUxPL9vVCzUA6AFpbwQdbDa9uLXKCY7Xyyec1Nbh",
  "key12": "3ARh2VrNh9c5dS6ZW6sB7BjSNFQQVzNenNfyD4p6AfoKF231sstxftqiGTa2yakkssfSxevLea2vu8LiJWM4iGi1",
  "key13": "5BmuYca74e3Q2CQznnCG7g8rcSfhEcSadNeAUH1CVoVkbLnEbdCPvgR6oVVQ93MvfpJfk2uGETgnXctHNRwQ6suU",
  "key14": "4CdkPjEyo7ums1SDf92fn9JqAqx7zz4VwW5po8biyCa3p1n2QY4h2XdnpcgAEyNWd9cfbAzAt233xrnTcESREhG6",
  "key15": "4kmPYBZA1CjsoRCT42QkSsnpmzhGZL9k7AofKpxcSe8dbycozs45jgQjm1TF5Ra5B498LAbD1oa5udjtaK3HeUgZ",
  "key16": "2NwtmoDyERAiUzY1UDzK9THoUSXLhvp1EXneEnRmvLEvtgMNKCTjWLTzzdVcbXeVhG8qSrpBC2GsjmTnTbyYMnkN",
  "key17": "5Wv7pNFrwD69spS8RzQKLxurhLxXd4aCQGYLeYy875dnY672G1HgywDLDLvKbE9ZtHzCe4oJLfjvNkDmbCEtZgCk",
  "key18": "2S5jph2qL5pJKTaKQDZWivQzQ7rm2Nzf34vwHqcbq16zc7QUN9QbXNvGq9JWrNJoTSSUNa5aWk8abT2ReW3vPE1S",
  "key19": "J7eU6KrQqyQxRyt4Po5fd3nxBmZEMwwD8vCdUNYGSXkCej3pZTkBS4RLHuCMtfJTxbCmh4aDcvtXJAUKkZnCW8d",
  "key20": "5UUvSxZCxkDb1ZghoGojDsYrTt9LJXjgXbYVzGiG2544duaLTqNRNJm3Po7i3YRNpE1CW2gPSqBbBtTjgc18P4jQ",
  "key21": "rsVtU72WFS5YbRao61wU1e8eJSs4hgYmcbRhyKPema11jXP5cFrEgskU58onDTonJ8kj3enXcUXj17Rq21uGN1F",
  "key22": "3uHvg6fah1hasEu5fiY6AFsJgVACboKhy9WTZh3i7NtU5RCyWREaAD1FJM3CByJcriQ1SyYkqQzaZDcL7rZuG51Z",
  "key23": "tdA4SfQtNQ5L6gEjWNtgzYzUTkspE2h8Qqt4drxpDT1VHZR4M9sULBrJD4f8jBDmCbkN66xb8oA1QFRuuHDNdSF",
  "key24": "4X3Bp88LGAe9VwjKM3KCDFf41MhYEVeWEFR5pxL6G7vRVz3zGduQy2csTgbZpPod4CKJSjJ9LN61eUtgX4vLSXPZ",
  "key25": "43GaTvDepiJwxrpzJyRgyF1Luc3eyYWaSvbMQWbx1XnVo9uc2kt233Cvii42Qq3w4Veh9FaPngkTa7UELTVnVtin",
  "key26": "2QeiCUz9tFZwG5rnW4JfFnwhBgheLoVZAKxoeYmr7oMEwJUwUZwVdS6NmmK57QcjWGCQNna98MhhbmAZ9ku3oNP4",
  "key27": "2jjc39FojR8MeNMicJGiazZiDx7wz6nsLjcniveig9Z9mCY6PfT3s3akEY3nndSJUvrG6dHkeUybd8yDvznoUd9c",
  "key28": "35LH9HcEwDH1zxuqTkM4SVN1kknpt3J3Jdghxm26AcKAyWWnzfvwV4NY7is2Qkjt6n5WPSggMo62M1gzA5V6m9iD",
  "key29": "5z3s8is6YqnKFB8X6Z1kY6jJxXEdFBrx2unmzEVxG6i5Y2Jt7i7bYk8PsSXpPumyVXfqWXmgM1ESbqhgRz4mzW8a",
  "key30": "4Fq3cjtub2nWA2YMUAZevrejgBEwF5KcWRYkKJGDkhp5xNdNWd2ddQ754pLPbhBpaaDuoDePZ7dipzZYY4Y4yP51",
  "key31": "5JcX4ceBy7eCq8qTRggGvXhx38Ein2B1k3mrt57hdyuNsq7HoowWyHxuKEhbk4kzLSyLcxpQFD3VCrLJ6wgzjLEw",
  "key32": "48t7q6k3KH1ZajfwtUrbZxgXPrhb7hcVrVgWkDBQYR6hyRRkRcPuppTspxYfRdvtvR81mXUdh1WSgN5X99Ph3FD4",
  "key33": "4ca9xan2xKTPJYsGH72hGdaMgzJkVh8CPj5eXgk1wqjtT3VWKbT86QYJGYA8124nPePF9npSHqQnPV67oAsjPvQN",
  "key34": "41UzHACMsiusjwCRWExUffU2p2V7GHcfZUzhqBXtCJSrqzbttLvCJsik9Eyx9gUJoQiuFvVhP7bFewbgugM3ejoH",
  "key35": "3kXkvwWaHH2hx6WyUfuzQim6vZtnhFwuhd5B4XAncm5yxWevHUR5pACN5GndJkYS3pYfpgH1aU8phxm2q56AaGmG",
  "key36": "5WQzdhGVaGGKg2jJz97i6GFcK673kTDxqn3dJHdqYK2UgwJWk3HeLs2RPFMqfcUAJ4GBqQStfxqLaQTRoGSQiypz",
  "key37": "3TaJP8b29CK4RcmpJRBfdujqd7bCJezb42e7ngANy56szbJr4s1oN5yrhA21vWkH6XeJZ9bcfN4tHU4Jh3AKDRtr",
  "key38": "62ZHyGdSJntJK8AEswAfMTFELiLtizqz4Pj8vMyd5ZXXzzchFxMqjDdXCYNWY7oQA2RFnzXzPR5P6Mwr1Y5SM59t",
  "key39": "4eHawfCx45hSa1c1bwTtu1mV5uKEbusPnjk3ARBJ3JmAVH72U9Ut4jvyNzXKfAw3dmvqLnFxwg9cY6LTshvh1xV5",
  "key40": "439mDcTgx98qEz8uHGo6qpoCAzMV2CrSK7MswZS69ztRqDycTQgRHkeU9SCdVo9oDTsVewLPFGyivw2LPUx2SyYj",
  "key41": "5owcCbV8q7isR6Peeo9Xnb4rrBuJs9n7mb2r4QLWPV9AwhDVa1fkqAzM8PhDR8ZjjhZzQL16gfvhwCxvfwJqditt"
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
