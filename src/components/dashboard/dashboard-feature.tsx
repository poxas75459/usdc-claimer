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
    "4kGrCQBpT1bDUS7aGgwVvYvKnTdzqjLhWa2yheBynE1n9j3NXZ2trJLwpaAKs2GjWU8wHaYVJcED7sByZ7A1CgLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GYbVaGcoBJENkkNuPkuyL134ALd8AX3aDEKVqC9dm9wG3Uq9FSzqfuYBLdqmq9y3F46JgkNpNd65SvLdsKsQCpx",
  "key1": "64zB2EPVqKkJBSYPqzbt7ws9fmeVQ7TKKgo38xtwQM7EvhRum8VAb1BEo9EGgaaAqPu2NBa55NLhKmYdCB5Pt436",
  "key2": "JmwAooMaHfKF5hWxSFdDRJH16n6Kdn13kXothSNogEy9JeFzEGKtjp2vspuc3Y3UcL6ggK3Z9S8kANBU3Kr3aNY",
  "key3": "3c6krZa72EFcyhHtFBEbrvrPWkF2bbSAFdh5N65L4UQ1V5kArgHMJXngJ1qrPwEdyhFyF9NYj4LRevPnf6bsY2oB",
  "key4": "5Q2KEqJUkEssDY7rpwEtTEzgG394D5yME8KmkbmQXQZqj1QQzWLQMmb1XU74zpvxgWKz5B78kZmJtX11RqXdaXA4",
  "key5": "3HNXfQHgQLxyLSytRW58KcxQbpKomrUKBpY6UKJdJAYty9xFnoUCL1sWsvFFBViMbcE8KU2mDzNNUHEcKQCQYKnm",
  "key6": "5aRg8Yu7d3g9tYDUw9wzPDJggHaWqR3MJivZ7cNdTEyrn93UKeTLYXcVuCUGK7f2LrfNVYHC2vdDZbKrCxBQK6VM",
  "key7": "45MeQncckLvLTgdxXbjf5h8Mhf615WDagjTio3p8F4vmDaYUxfdqmdSJTofJGbPytqFjrokEmq9sn9T9VJfrkrXy",
  "key8": "r9Yacgdu1bJnEBWqsRjqVkebbtpgP4Mp3Kj1LcDYtuySRfUiFqgXgrqvpmVfKy6r7uNb4pPzK9U65U465AL6y56",
  "key9": "4E5fU37MFKqiNmPFKzZrmFEHzkLBrK6TYp6ZjJDFqjF2aiLWQBvrBVachNZDpoxDMvsCXuHVdQqW5WoXDLaG4Hr5",
  "key10": "2pwL2gkK2DYcmBK2Bqppk2rTuMmUV7r2Y4ieefc1bmrtSKbNGTvTtSrAki9E4TYAhaC381DuojrHjVCCvaxb2vHW",
  "key11": "3JQKNaizAQBxb1mf59zt9wmKUMi6aezczDsfBYpzYGCLqTS7azL3M2y9qSJkp37tJBant4XQEcZA73on8nopDqa2",
  "key12": "4awKvdAwRQbtVkvsphhfaXEpUBpZ1uFQVWDdhsAdfEm8w4W3aVKJqXaYApTJ9XbnSSNBk5iMgMufThV1yY1DphGc",
  "key13": "5N52jf1xgfkFFpYTr33DRvXKKpVyVPGR2ievsAZehioMWXaPbPNkPqPjXcqxbEMfdvCy4cdWDa6TcLK7T3wfaNhT",
  "key14": "3mAPaER89dz369SkTSH2TuQ6pBDK4ijwTKyLfER8pa4LGPwb4uCn6ESzmKq4wfdWaWWpAGnZfdUeoey6DPX9zHGy",
  "key15": "4gxVKkpqHr5f56nqWseSJ7NxpszcPmEuMXEnJj1qVgQvEtWkLziSXYEgz8DvH49HJmb4QiCfEHrtimh9GZKzcUD3",
  "key16": "52Hn8twuBcHNWRFf1hDdHKTpafeLT2zQ6mWMmauXi1N7idHRjEbnPAHsd3mrwuuEpExrr1ocCmFhNQCqRiiphz4a",
  "key17": "4piS16oxCitz41Hci9zxmbZHKD7JkxpbJcmdEFfKbHQv2uSe9gTavrm3S9B61BTJ6VeVgnc5ezWPt2dU5Pqq6gHW",
  "key18": "MxmdAztC8TCRs6N7ULM6nnXhNW59mx61MgcaNuQjh21onjDYYfGPUzAy6pzUaLGRvWtjiZWwX4C17KptUcvCoZ8",
  "key19": "4nTxjmrSRE8BuXa1EUxvxJ9BsWFUTc3cW5YRBN24qNWzt9kfrCY43fHMrUfPVn5xCWF5aqCufNaAhiT4UYzoy3QH",
  "key20": "5qT3PqaBTY49M1JdQVrBuuQYZ8XNRDK4nYp6viERKPUxciayHtFb4EJ7bo1sexD7c9iHKCaLC4baKBCFtZKdTbW9",
  "key21": "2awdKnbHSXFHUFLVfh7oezCty47LA7uhVBoJFiotMB1i3RHgivYsn2mTs2ePwc8hkh78wAZyxerV3tm4zXmbqGPp",
  "key22": "SVh5vGTXRPwxe3fB8GvTUxXNR8qLWDsUR5ruEKG22FheGJFir2C5DWy2Wk4ZqtXTTVwDh5CUcfThbBxZNHMEpAt",
  "key23": "5uRXyhsyvRBpzpvjN2F5u5Eyzowxius264vWgu2hfr3rtMETU2crZKUrZiJqBBLNQAoXWFV4MrJLswfmd85sVpUY",
  "key24": "39TtYddRiJJoJimuBiAhkVeCPi7W4q4SyUvHyfpnpvA3B9wbxtzMnSzsBZdKJFpa3hehBym3zb1E1b6zX8opPQoM",
  "key25": "4Ur8fYFY9CXRWgMmVAs5QowAjozqo2wohpVDHaAdhbyAD78PHhYvidrCtXamoGhhjTea3abqBCQLWqcjitWmvKkC",
  "key26": "4yQiT18YdGQa6ve3zxvghjA64RbArXc9twWa8R5DekSXKdHuFUYb9WuS2oaTaJjTts34TD2uddXx6x7sC2BtFMmV",
  "key27": "5H2Z1nhyfpeB5Py7H8ufVjXtgWszmg3YAz2fshbp9quG1RDE5jc8byD31aYKoPDaDFvgdqrRKssRGTEr5kW1LSDx",
  "key28": "5iSjH7wqcjNiHVjdAezqnHEVXGXyHp4z4Ee7FhAexJK8kq8DsdW9Saaa7f9w7MMapTFURQy89Jb5bRjFLxphMRMR",
  "key29": "544zUeqKaFgZ9TL9aeLTE3nbjrFWFEAshJ8bu6NkGi5SQZBRLR2gLS1uPS4m5KPDVArNbQxXh76hWY719E5aVc4m",
  "key30": "4cEUzK6BEe5PQ1ZSJ8g8znDNTpfxVeFe4QvKbTHt9tVMvjzttVsT7BexVmDYKMG5j84zgRXnF99iQVyWf2vemRTJ",
  "key31": "4qZFUorCXSJFDakSemio3LpnZ2C8nimkyThKjwqBPgAYc3g3VnaSDrJiafXZdqF5gEmbrjzXBxJ6LoVnGfeAjf9s",
  "key32": "3Qi5gsRnJ1Arku6amWcDUcxSwHdPzJtmyaBiQgrhCqmrEfyXiPoLH9ou1PhPAXUzdNmfH6YMxevxLnJmvybsEJ67"
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
