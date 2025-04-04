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
    "2UpCkj68CPamz4KRipFngSeHmc6BbTiUQeRuRiJLTKbYYuNnsYK1mYEJh9XCwjVEctrkGQaFERkdC8o5U29uWczg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wmqVUhNEdCGF1wXhxhfSmzzFpcEEpyU9YWMbYzapUWQKirSeKnVPfuQR9p1CQEmnirbaR2j4GEB9WUK4ocDnxX7",
  "key1": "MuXpZva5xqnQPnrKrHzey2Ee2f1WU9cuoaaszEzMZ1uP1mEYno27cgqtJTHjYegHoZZGGNnmxRCMZ23AEw838fD",
  "key2": "2dTFN25F3Kc953wd9ZrYzgPbXG85MMUHqTcKeCufBbZMD7tovwJfKZPHv13vBzdwGd16fBsNxUQYBZE7V2PcRiXt",
  "key3": "53v5jEsrWR5uu24Y5MPgjaNN6DurDqQiphS46NFjvnjVSbfgztQ7X1EKLYNi4iL3mC3jTrqjCtGoCCNhv5LyvReu",
  "key4": "3qNRpp5jm2UcLTpEextsHybF1gQLAPymQuc5u6sFGvNYocadCuSXrNBsCpVa99pjoNpZnkxzwc6gKkmB7PidLY3g",
  "key5": "2s4k6wrf5rRuiNq1iWWuEK4ceLZRxAELR85mdXguhVmMFQUKeiMU2jBaFsGYWMcAKuD5FEPp56fKPMEcNDVHwVtn",
  "key6": "33Q43CccSXfm3StGj8DQZGAbJfNMfXrwLXBGUqRujHL5N4yHZDzCzyqcBhrGQ1uDV2bz6dd1juutz37L6dirppcT",
  "key7": "5hB9vUQoQoMEg5qyJ22wa4YjUHK3qz9uxPGTXGmz4Jt9nm4kCgCzsBEyb7mthXcTa8vyNyupWphx3q7fNkYrCbzn",
  "key8": "3B7BBEmsmmRGAHvErPGG4hXu2nTFn1tFgeytegixFqmsUwNBUmGcwbTe7Z5atXVei4BBAEcyuiSbvwvozPvEr7tK",
  "key9": "3N6CxPAHovRkbsURkNQXyq4cFgWoz9uFrSVJiQLKaGGbyk7gacCE637L7626nx85qSnBhjzMAf6dSEwL2P1qAWKa",
  "key10": "4TUhs3E4mKkgFdFWLvSjwMesKEMT1bxCXYnKMTLwASzFbae2wzDUGX4WEpHWcQBWuLgQDQfBH1kZAkq4gC7HC9wo",
  "key11": "3E4Fgkbjj5SWp9NFEyu4G6DA4Gdrk3xq4GMXfCdYkg4xieYeibTXNtrrj2SyXq1RDWqa1qqfbMGJVXdz9S7DJUri",
  "key12": "4mFQbUH335QL3CTQ6Lsc2QmFqMSmQj5ZngaGBAidnrrkPUzueimBfjWKFVPvqhRPPb7FfnHpNetMHLYZoRVBdF2V",
  "key13": "iL1ZwTvjM58wn8AbyhbVxrVJ8XyeUaiSqVGBcUfHqKmrZty8AvfMfwKNUu2fTs6vHkn39XoDNe9JZiPfJLiEZcK",
  "key14": "u5XQB4mhSWnBJccDx5poaR7AtcNJAGar65Ff4fKJCF2ZHK4YASHSzgC3Jsa1XGJVoh7ezEzS4rWMdVqYEXdJJsw",
  "key15": "ZEuNrWQPGrSr3T3pW2JCFHriTW4P52kPukY8J16cFUGsFtUbf9eSJgm7cohLSmXCHSboeEUNhX7pNMrHujpEUWY",
  "key16": "49oxCqJTWYxMnY7FFEDvzLihEid42CLYTRLn3e38gJ8WtmqGz5jLyfS898ropgvaN5X9cNhzBzTL21MQsHJYvcKG",
  "key17": "5Mt3AjyandVEKtq8LG88GLKXdbQe2Swp51TFSpwjTCPhfEe8AfC7uZzRTa6VUL5TbVpni1qfguCG7FZiwebgxQKd",
  "key18": "3Kobxwe13cWD6pF8cYuy5JUxkEtJsyUgmRx9eqML4At71NMFRW33H4qL1i8Ex4AGiTWJtR7LMKYs9Q9hzEktrQst",
  "key19": "ipdFr4W1cPWHum7YSsc5LJevdD89k14jdznZXnXc3LFrj8ocw7NvdvzQQbjamvNkJbi811QxuZsvUSmGNGDdsAi",
  "key20": "4oS6hYqyzhS2pEC6Gqdgbb2rCGKjetuauXZnYs3DaMpdKZxLoDjWzDESWQGHJ7xKpek48LdPHFra4dXCuar1HcWH",
  "key21": "5md1iYTEYbHzmJPNT59ihck5Virzarkhf6JSzzVB5wM7uV92hj1SKucFc9wtaJRhbRsvWWag736mTxphUSuwpdeS",
  "key22": "1kJKkS44MKu9o5WwAN9Y9s5hGYNbjRPiYejqR36VVzbxB5f3g9Qi7Wog9EXDYG8AWorbu2u41tQQb9q6Nt9BVq6",
  "key23": "2zQWiqtf1RsWBUHjSMmhtkzHyUNNLWJd77ZJmw6qwC4U6GfyKZsNf2vTDo9Z3xvLST135baiAnjod8AeXhJBdPEP",
  "key24": "4QpscQSXVCbo1Yqxdo1zcAKZju5HVE9ME4XPTdJL5Jug27KB7qVna9JedFN9MbByMRqnyhWsmRnNUcPtr9S2S2PQ",
  "key25": "334CCJVZKADNQUSeceyBJcVBFuPVbY1pFhgijbrW53vPgeb4Yuq9iccTyF2at7M7A58uVXSU9zRN7A92M93QUhDS",
  "key26": "4QLaGiLNfvySoxVHNtsnRVZ3tFNnP8TJ6DG72TXG7ohAmBPwc1in2EAcKEkuZ8emvYTiQQahC6thgL5H6igcz16P",
  "key27": "dWvQ1NZxPmj6JoW5NMNBAsUdijigTLsYDnXowXUzJKRA8jCujejoU4NivTKtTyPUesiB7LMo5yRhUnTZzTgfnBw",
  "key28": "225V9WTStEvnJ6WML8poRnQ4efxcwvDDsxetfqPxXUUZgESUSDSzfjwN6XXtEMWpF2g45tu1drxK6UCXeMaPTBsA",
  "key29": "2E5JJcinarUZyeizR4tKNKXUq1SqEv5T7vi1ha1M2dQiipJHPUpicLCopkVQjXEHfvmGbBqMhAaCQq3skRKKCWap",
  "key30": "37K9GiFiS4JksNqFAQ2tAHZizgpWMhdEAVGirAJx1dTzeu779xnpcXjKjBoUrS7zQ95d5fUzb8afVjc4UiVybh9J",
  "key31": "3uVrTqaSBibibggBALcXXFdWzjSQeYhJNJF9ndTZoJpjvGdKTmz6vdVj5c79M3hRV6VgVEgoiXPQYgWrkMmKJT5L",
  "key32": "4qmmoxzczvfxV6wVJLJc2SZEEYg75nuEajURZwMrCquhNhBnYnySmAZQomQBJchCKkbyF65HLxKM6P5F8zv8UjxZ",
  "key33": "5C5WmKHoHCZeRELC5iB3qtrQ2NWjWQoF6JsazKJiyRcCuk4P2iute68E8G1xWSqh7we4o6RFQssQwkFTSCUT2Ces",
  "key34": "3JrZR1KcUA8R9KAxzJYXPHBm17ZEakPKcxz6gTivp5NpRLNNLUdxKB15tbDfwDS9LdVU7dRW1btsYWf1AfQCp8KQ",
  "key35": "4SfvtNfjb9utUJZyskG3tH6HKGMwwacbg2ehrjwaPdwbrVao86H8FBQCfLcDpaYUTA98Xx9MpSZUmjUpD191PKSq",
  "key36": "63ZBDDbSvnwdNKrSdDM2CvTrf4BknwFawY6m49rwW4GURVUvHbs9c9Z3pUpD45epAbnuMoiy1vpToujLSbPDjh7N",
  "key37": "A8wD4sBVhHCpymb3XKPbuvt9evdrEGigeF48UEXbAhRNMLVHzaLx8VcB4HzuTPSc9XH8JKNZ5r6ag5GJDyV3eco",
  "key38": "2CPktxamt5sGiE1efurymqckfG3jNbPpzetVcYHGQHo4dQ6ybARMuYEz1JjQciqYDv7oPupP8N5VQtFBUBUi49rt",
  "key39": "4sbcdYCxwZcfabMa6SPteusGMsYsHd6kTfcYHqucq1QrpcsKF4DpyihWjZ5nGR67dDH4Es7taCLsq29hZJ4vHT1E"
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
