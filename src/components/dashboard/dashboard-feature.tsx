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
    "hLbyTYi7rfWKWhmJ81yWuZZKhu6KbVTatKGaD84z88ADkXg7F9XHzjx3TXB1eoAa2dpZtQP2FxsiceJB8g1Lrm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUxT5rcagGAu9dZYCFGa4AJKyJvCiXYU67YSLeL63HodMT9F6zNS8KnzkEweA5zHMH4ZWZZjs1J13VN4Tw9anXZ",
  "key1": "2RgunofeuDdWqi54p3dBLvqvHuBvxxfuYdcwQLTnXFpuWsGZDcPfhjxHKgry9NP69B8V25LqwxVtWdAU5KTSuNxz",
  "key2": "5zRkM8aiSwts1yJXPuiMPHCh3cR3DS1WufEEueGizH2gprS2SSXoxpYasnEAfz2a81KaNc5rHJ19earqAkjcphVA",
  "key3": "2dAc5kTYRHBzEpUSVqquXDFDYihRYfUau3kfJkhYHhePZvjtfZtwwYcfZpSmoR89UZ6ztJ5teLwLjaGSsZsPMPGK",
  "key4": "4tytffS9cG6HXbpfBeub2rcDnyJezbZV6X5msLyXsUdVovwb3VpRBPh6Ei9VPZEhzb6JC5sNnrZZzGHrtXTimpfG",
  "key5": "3AMPKJcTzwe6W4TMHEpogjBdyfMXuydsWW9MUcRWZyADePdLuoSN6dA864NXZjR4bTCCNkEfkjb2KAPprdLYeqVD",
  "key6": "4bChaCcKAJeeWveQzxYw33sBZUpvVhEVRV8MBZP885PewDAZfMhp1zSDGYf7cMynA8dCDxwCofHDhBcXCRG69NDZ",
  "key7": "5aRqL1sEjQc9SSBU2XCAWdrSkxirn6hv34g6hghcuUBGnUEqZfsyZWH8eqzJJFC14fK7G6LbegH748uN8LfDxoFz",
  "key8": "2bY5uWhExpT4KwNhs4rBXnTrqveTRWjJG9tYswS4CuLhZHb9a7wxpCEgqhmHunTa9woaBkLBtXMV8AMspAUCjP7y",
  "key9": "4sFNkkMcW6FXjC8Ms3j5jNhR8VKzVHxL7m4yCntftmwAGDfzSSxmA4yaLGbZX7mamRmdoD2d1KuwymCkFD9jTenb",
  "key10": "3fDULLm73GpU4NrTKtmweyP1fo9y9NXTySB6f1CVoVMnoWN9o5actVxXXo5xt3NRTCaeDEfYmomdmeWLkr2Mqt3Y",
  "key11": "3hmpAPnUMbdsdgLGfvQRqoVz91BiekJS7ub8k3YNZ2PDMdPbxm1xrjcQj1A149vL6ZDhQMU5K4oRbARYHBE2hETT",
  "key12": "2WLnWodi9My5uZVBGkXyuMq7FJfHBResuFdr27KZww3zwHCcPMbggFJXa4ZAWJAE6PZrouhRr75bYFg9JaoEpJnV",
  "key13": "2aicm9QYLHptt7nfvvJNVtwPq1zvpFMJcJzSGCqR3VQ6fS6kv9F7Emf1RWfB9etFF8RytVJcKC7CvsyBEP33tSxZ",
  "key14": "4ptLBLdVA5v6uym6mvRrQcDVzZNmEaZYoyFZZpB8hn4CJuGwUEwwW78ymnfXpz19Hr9fQvD2NC2MMWk9zrF39HJ8",
  "key15": "DtB5BjAndc42xJXo4sSnJXcabqAWAkePbieAEfxHZqeM5CP7fRL5vmhmKinqUefx7AEUb4BPgPHGV29BQPigXSm",
  "key16": "4Lg8Rh64fta8w4eEJnkBB6G2yE5gxSPWo4QFA3gBF9b1aGe3n8Mcqs884BRXw5Z5SZJR6hh92rxpWq3ZQSi1mBfs",
  "key17": "2khUbQ5P9tJtgpQbfWc7y3SVRGW5cyTU9gKUEDhSMZro34dCUD6y87nJ9ZLtp2mTy8C28Kjv8Nor9mLLKxh6LABv",
  "key18": "3xDv6EZFMkeYdFg8XVBkWgdKgMFCqgYLbXy2w3TNWr4XhPV9STBzrwAyr5qUqBSVtAXvcDx75BSurponzeEAuJfh",
  "key19": "4LHf4JJ1DyoYpdtMJcA3bDhkhYit6efydSzgXCZpYiL4NokNbLxaDCcFYtbahwPnxrPZEBEirHdz3tMNfLw83zwi",
  "key20": "3941LVe89p4ArRxBFxiostgexGARD2Qwnx1yg3apBEFq2qnDtwXC2YGyxB1gSJsmsP5tSdLxrLgWJ6vTNP7ypxbm",
  "key21": "2HGnSYxgGj77xPYESMS7MXhJWF1mqT1yDNDXswzbMb2TZQEK57LUuBuhayRtjfoSG53S3fWxD7EQfSBQPNPFr1L9",
  "key22": "2J6jhXkX9EM9rvMCkmYWyAeaii7WZfBXCTobB5rJPjfD7QuvKUGwerkUXF2H1NX3MEWp7xkyZgbf3yad8MivLLgr",
  "key23": "4yyThSEyAbnELYy1QAs5LbdG2V3687KvWeMb6jWYJXkP83mRD7bSG3gVTCADerX9xWvQ6RTe8waDpYaBP3BjQTWo",
  "key24": "4D4fqNbfYi5TcfRsByMCB5JF1X1VYQaaFeSmJWKMS4EiKjMjYrznHQ91phTZ7VNu5gZ9vSyuMpLumK6F3LnWv45k",
  "key25": "w9z6RMTJn7tH2FH3NGQExeMtYr4dhNtky4QYsn5JadbuBi9RZApRhQW8XcDQKXRpjur1hR9SPjMA9jcS8m9r2G8",
  "key26": "2X2nzZkBFgYNc81uqTkWYB1jk442gafHfZEMnFam1gfVBZs9evjdZwh6n9vKLnq6hesmcGyDBmQtjgtbrY8TPGNr",
  "key27": "3f8xUVyZiaxnbE3bnDg5cZMpyDMHKde19y7LTRhqBowKfmhSqrsQM7LWazPEwckXpcr34V7fpxvBniiWYeVkMUaC"
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
