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
    "5gLxqfwu9PLkPiVRrn8YMmiMHXxohsC3226VWuPtQt7KCkyYjJfRfcbUVa5UgEcFRWhMYUpj5uZ8DbLPKM8maB3Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fHUiMq5QcLugzKXEM4Nd2ZDRKD6LFd6Ae6PzfzdxRk7kidT28A8ix481qzimSK7H8xeJv7xPZpDejZ4Tjk4nvRe",
  "key1": "4hEsNmVTk78U3uRZ44CDt3qk1WCfgKrBZQiRctTgRnkkSpv8fCUjLuz3gYhKB8fgC8Rms4xPQ5KRi5EKs7ZKLmVa",
  "key2": "2yx4PQaUCroS3Nmyk4ThzMXjAp7ViV32dVHUn5nK96eGQq42fBrFbnFvud4XJ4dCAj4UaeUfAJLHycEES4iowiAw",
  "key3": "4rjVUnGeauyzdZBNCJuhvfAs8bwDd3JYUkY9aPLZqvUxSvvNg3JzoW8kKsZeaSXknSC5NyH3zaguEz3YR1FatyTr",
  "key4": "2DKQhW4SRdP5nYxsuDTaLxPY51dQrKjQAYbRNAz57n9Cya9essuPs81MuR3hQZ2B9a376vmu1c62ztSCUsekjKpU",
  "key5": "5k2LqbCDJRworPkHXGUAC2UQrHXvc6588rWSyPkSv4Z749bgVZNkic1ZshCFBKSGqcVmQQnYaWLdsfENHS7GRARe",
  "key6": "5mvAfnEFchhDcfLv4xTUCJD7L2mCYENvh8J9kksVK6KCW64vdPAoRHj3W5vnupT2dDfAKino1P9DoBGFyHPfjmvQ",
  "key7": "38mzTpCWUF9ZdR5TZ6UAzARGqS4AsqNVCUX5cVfNwuz2VcNNeXPWNCfa9fbLawYHwQXWPvcec9Ygp96oW793JjGa",
  "key8": "2d8YWRGMn5bdtVZMDSvPegnQezoQcGcWmzZn9Kodqik5d7z6dxXgtReS2XqtA3XNQJWxWP2tGXCfGGjbuYGY3YaX",
  "key9": "2rgNn7KEFxNBKwScGtCtzbxt9tbtcckMo9S5JWp3aPJUPhAjm1sQnqpk7rxtg12wUitvuGsPK1N7nsEHdJ79c8h3",
  "key10": "2Gwo41UyzDTMf34S9eECkCkYZFbkYdLLni3khuGHDWu18hCS4PVs2QetaXRo7mr94Lp2kzNLfkBFtbxp6K9Zu9DU",
  "key11": "4ZdXAzvyZQaPcCwiQrbEqxqgn3dSrCWSE3jK3wxni2DXh1pyPBS8ZtFR3VtrT3bFwLKKyd2jfwcbjCUVta413Tus",
  "key12": "2QHpaqCQFP8ur5fXPdn7Njt3dWybhbr8naYsv3T45ZHF1bETszdn3UoCfk8Tk4wjaPhvxEhp1e7TNQYS2ksnG5jq",
  "key13": "2anNFUNknXxZjWgUen6PusnmBBkHy4SoUKXdvP7vZVC6qBdEddXjNGHgYxdM1ivkuirBcnyYZNetnLS3F3wKW8wb",
  "key14": "xdzjHCqU2ewMDxzLghGUbMfNaCed9ZQ55WJNqraYzd3gGBEtMSwPJ94PqJcEs2qwgEZLKQdaZscAt7f9Ubyjq6u",
  "key15": "2K4KuBvcSpEU6uS6BJyZPFzi6Q4CxoqM4TG2gtQqSiGVEewE5jHziKDQEe3358hz96q7Wg1riSxzDQPzXvq41kdr",
  "key16": "4TeakJgdJFoPjDnAu6CXRuEdqFQjyERXQ19eKjixnCAeuK1MafKe6pGFoA4bNCTg6HZtXf18rB4VQWBfR6iKgV8A",
  "key17": "2FQmBgXRaDcx5ZtB86MGD9bsDEYuit5kA3UQdwq2gkajWBZWUHPqpSbkx1b7foiarNFo4WHzu6rYSGAuZED3PTUJ",
  "key18": "31bBTK8nH1FwrxvDa4gFNHj8XmneFAVh2QhxPiCMc785wu9vwemVd8rrmdP9uukCDFyiQuMiCp8twHdn635hP48T",
  "key19": "2nFrJEWXi1QiNmsTE45Xu6WUc4Dtm1S84yhpYDcTr8LupX9a7J59TV6KoWo41yUqG2ECwaq7EBM6PoubEVPYoAoV",
  "key20": "5GUDjcS6cdZM1RJdtc8e7MysXssYpXpQRS7HFGFBcAq1yZ5sQddbDJcsyZe5HCmmCU68KaLfLVMwh4UBvkMRE8hd",
  "key21": "2hvohn4WLByVLtxQGkFXtjX1AmLyAi6yToVtt42GdhG4FDieKXyrseYAWBiUW6E21UrmWHHasad1VtfYWm2KT8eR",
  "key22": "5KHtjLj1RgLqWmgMB2Qm6dR52xwsJurMqjKuzfKRRUzxUURzR3eDbBWd3jm9o29KeeYFK2tDVVcsq2p1VPjiQtGC",
  "key23": "2rXCZtg5mQQdGHF4iVZTqcSBw1FvDhAvX1SQ8yaiaNzARTTNUwgLBobqNPgq2YkNVcHARgT2XLAuYXHeYR4LjJmg",
  "key24": "gWaYkPp3gAEp2HL5uxsiq6FbPeCg2Y4KybrDiQBspx48Xk5FpSVLGfC4yjDbp6Rp6WDAaS5T5jxXcH8BjGZV5nR",
  "key25": "3i3WdreztGJigs4CoQf6LVi8MUjMbf877nogetwTL2X8ymJk182qbXCexRJnCp4vUc8cgkoJHJ3UnLQF6xp2g83W",
  "key26": "3VpA3YchsUsGH3TZfqZuBb2fWWbYPakHH9Hqn4QiSjfNmWn6exhPb7M7pX82htKho5Jy4xRTsEwSHpzcL6f86H6j",
  "key27": "2Lpqo8iQBXF9X7b9jySyYcZyHPsvVeGBaynuKpii57YzyrycfAmG1RV97nMjosPQULqE4GRZxwyykNc5G3HucRwr",
  "key28": "2Q4MLLbML7C55Bjns6yFaHV9QgXYCSig9EfDbFZsayVTh6q8uEwCevpHxj2byExFPgAkWuqCN8dqUpRWwDb1cfM4",
  "key29": "3mBARUbMYNWxA2cuPZWk617djdC5vMEVx4roFvKKE6eJqVocvvbz48nFtaSft5pceuZ8QU9ffXnjLTyMLmfMeKsw",
  "key30": "d7AfS4JQZcqw6XENBjTyY4wR4Bsz8anfNwJ79zjJPNJtaN72WpFqUmobfjiJG567ebDNAoAAGZSbNEv8oZ36fpG",
  "key31": "ADKPnxpbzjysDTevjKidu7tn82mfZzNz5oY7eZNjVYazmjjoP4Xq8Hd4UmJZFCTSwiBdWBBBfvX64Tf9kfs9e37",
  "key32": "4vJXdEQWUp1R7KKgGMBU1uNhV7j1CZRhAZypNkrQZ8sRHMVoYWU6RDfQQXBK4TCbTAPQnVqP92YM8dpiopxEuiRh",
  "key33": "4VXPgcUdZtZhzMoKBSsWwM6Pan2yJwujmxR8JBEt7HEKpK3xq1iMZq7uRPGEe5amALP1MdT4tKDLpas3YdkNZpdX",
  "key34": "9GbaMoTs4YqYqU2EAKCY4eG9V6Kumk4YEyFEiJtTkFWBz9cHsvodn4xFwLMF8k2P4vacx3eZpyfvpG1ScRFkYZS",
  "key35": "X3Tg2GeJwnZ6bs2FJfccTYH7kT6hWk8mh4wPcBREgfcosrr6yz85EsY4AjpPJ4Z5th8iv8HoQFkGHGef6Dgc2yb"
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
