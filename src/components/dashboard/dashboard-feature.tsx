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
    "2t2pk7frR4dfNrEwNEvjogqqeoL8Xnu92qzyadgddgP5tgTxVVaHWn3cpoNACuZVHYJTiDiVyUkEagmPKFmkMrch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JjhLqPbuXbhMJkzoYFj1VBYrnXCkz4vQswkVLXfLXEehFYJVfBnu6mtUMt2NWFW8XU7SsTLdF4EohNDThNVMim2",
  "key1": "t3NGAxeTxmoCWzdYuSiZYNH8cWbnfVi49N4f7NxbXE798WcDMQtd517Um4KCKg3msA4HiGxhJyr99dXY5Jf5w3F",
  "key2": "4seXGK84dv1iNdH9cm3LdBJu4kfnreXFgNb8Hye75a8pf7Uo9XXbtbsZN7BbSw1YMvtFSNzguF1cCWkDFFR621dz",
  "key3": "5o177toYJzBEoJeRGo8ySfRrepNdpfh4yapvGdcgFT8EsXZAoLLpFJFPVkZ2xTFtmnH9EHWNJcjyW7tDf9pVfKXh",
  "key4": "2k6wNzSU1b2XGpJXnYo5PGhe5DjnB1fcqpbZq4zmaLfggdBz5EV8o58YpE7taSbRKAPv4mQ6F1qFHdd8gKxsdHrj",
  "key5": "4Bbm2V9rrWPaFCy4F6dMeuZtLuB26TErNoYoTThribqJiwMw2PqzwtP3XMhBuVA1yyfEhF5k1fmTT3ooJ2NpLGj5",
  "key6": "4PYo7S1Ls21vmomdk1YfuQ234oUFy7Z9xxcsetXGzh9MWEkkQW9bkf9RXkpEcRNrMuxzt96Kf5CjCf5WWhRJxa4D",
  "key7": "3TeiHkjeBYywLtXHktCDEUtCGujBVF6A9bK1f61wwMeG6u8g44cvU36Eq3qvpjpgRFRhcjhmvpHenSJCaj4BH9qz",
  "key8": "4x2ugv5pNrxspSNpRChFprxdq49tFJbEtAWiwYuA2cCtkYeCjg9PT9vcgyggY6XcLya3nFTDokEZ3pvg348Xbb4",
  "key9": "nS7EKE83pM8ubVS9TeWrYwQWFAUzDDgBo95Evne75tpZTSjJDD3rLFHj7NDjKgk9FxJNbFe7sxhuA5xb82SFQSp",
  "key10": "3csxMDXSfnghczHZLASUhBnviLaJWTDneXXvu4A7FfUeoFt5jm5DpBHo2UdW5fbYLvewNuGHU392G6HgzqtKPRnK",
  "key11": "jr65kdSMbYuUb1VuDHE3r5UKep7qmKaf5dRULJDDLiw3M4XTHVbCcH7rNokX9fy15psA9uVQh885n8SDusP5rGY",
  "key12": "23RvEodeHoXeEKRQ7geJbw9cBakpzJBmFDktWPfUiMf7wCkDwTYdXZuZAE5RHky1XdaWJ9889vPtGXMweTM3uRnq",
  "key13": "4msKMsUPDAWf1NLFEEdDH7i1tm1JswYCzd9PxRC59EQhsPXma9t7CT9UkuDWbaSecyC7NNA89vBd6hwLrW1Z8FmY",
  "key14": "2HiCC3EDdZcQxmJJoVPzr1XFFu1oq6i7dwAqVw3zGTEa6srVk4o81nhoRBZP2HaKFu5B93j6WR2evDAUiwgGj3Hu",
  "key15": "3U6BcwJFLbShotugBLvgRZQQYU5WzZgdk3PvLNidkgPraEsnDjHV2hGQytdUdVN3C331JJbXWA51mhYVDiuP42eN",
  "key16": "eE6QhjM1XQa8VxFjcfFFrSHeuC4SY83TeBmXrm1DhWViCx5Wr2oi772NM38qq6dws8YePRWwXtUCQpZWJkrZWBe",
  "key17": "5b2U1F5HfxiC7EKYXCHnFbzWHZGjKc5H18jBnnXyfZpDWfaQRZMFZMMcv1dC2VELgDGUNuhxThJ7xiGsYzNkh9MD",
  "key18": "29aHiVjSomUKxXZrC1L3tof9zJ7tL3BwfubWWGSoXnrzY4RHjfL4VkYURH5aRevRWUp69LxxmgH4d3R85yNc8nCa",
  "key19": "5dhJnLSsdYLNAPCPgUP27JCxnJ3u9GarVrwF4p7LnNQqTzdhbG1m5YtqqEoVdKjNoYzj5h8PvsEQtksaPsnTRug1",
  "key20": "2F1cAS1GPhZ27nWGY2uLwgUBYVund3MJFtshvFa9AAuRyeMafDPqvt3JgHADkW7cP82NiZuLvZVMmiSQheHikuLZ",
  "key21": "5h85FqNMjYtE5S9Lywfi3R657zb9qGTkmKYreHnH6DiYXwsbiqJmjAZShyFvHVT5urvy7hZQe5zNy5t5FufuaedJ",
  "key22": "cFCY6QAv9TCtyZ1KHivcdrCGGKH2K7dE2gEajs8gJq8Zm395PvStTdh7YZX7azo83RcGp68jkADr4yh1AYWHiKn",
  "key23": "HheCEx7i5N14345t8U8EmX2uqTsXy9bsSvrYmhdCDoxyQuEGpbtptRySJ9uFfYjVL6NnreRPEWTvgWRDWA8xMrk",
  "key24": "22aX1f8QArWPr6TLgBL3m8dzZtuGu3y1rh4kvW3tfGCoP8Kop2BxcZn3zCyfEhyah4M3gbSNEc7xW6G4SLMKQsao",
  "key25": "5T17XgAJjQcYahdNYBYpk29pqJJ4XpjDvd6NJHmK8sMwBStFQxVqW3NW5CqJq29nrH1uNBgChK3hvF2ku6Fir2hF",
  "key26": "2eWpjRVYP1DUMj2iVzzLVvmpeX73b6akNR3duoPGQtoZT7FCSkLUgEYMQErWqci2obVnVWJ68ZzZELci2t6U5gtj",
  "key27": "5LFD9hC6ZQC8xHYd4sheSSAtV7b6eSdKxFGd8AZi8U7XMkxjr6ZMNWufiQpkA48HMG6MUn74337L9Cc8wwsVWih4",
  "key28": "3HJiHtHYUfygQ7CpfkVpHkvMYG3nYprAdgq2L4P5dwg2eThhi5mmP3qwTPC6vZQR4nEz5yfqWtHvJeu3aFQGcDw9",
  "key29": "4rWqCkTgufa7KDMfb3HWthcuW3NHaaCgLtkoXDGAGQGzdL2ne37qVBszyVZRzLv1waZjt2dD1RnxrsY5S4xNMQpa",
  "key30": "yhzPqHrgCQFdvpAWrwipswn7ax3cDd1qNStQUCz1bSFbKGNKov5hDAGX9XR5qUnrP32P3miBruogC9RQ9pHfwPG",
  "key31": "Gfi5yu2q5x9pnnYg6wjKBh7dHBCfSEt3JTdoWeZJroXdq4sw3nxAQ5i2fCiWppRgS2pXCifoH3mAJeLoMyUpyWd",
  "key32": "3xkmKzKAFgWZ1mo5kYtiRv2kFwZiJd43Y94KzHm2syAJkqUaLkCJHvCBrbHmGkbuivGnQitd6cmwhFrZPMJLLdbj",
  "key33": "4xETYUcucWA8QMAovbJqfxccfxPuFhYcdxYd8vNmcSTHk5byQpC91MT5hzSWjnGLBG7PJYyPbjRoaGV7j7nQSm95",
  "key34": "5APNtBDbXhqcZ3gjJmgZJVZezRMz9KA4KnRdUMqyu2bU6EEk3Eff5MUmaFhdvGJ8xnxqPnzjDnSHjceteZTcjWWJ",
  "key35": "GNbMziSU8yvXqBvGT4rZHTtYJXbab6Y6VcUAMuyPzHWLH4G8Q2RgFzQCD7scjk8hsDPtPQ6f49qW3oGDB6cx4tQ"
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
