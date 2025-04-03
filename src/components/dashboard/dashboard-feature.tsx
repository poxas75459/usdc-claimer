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
    "4SWeK7k9Lcvo62edibxdj6DvmEKqYnJnpLakhEmfRVwfxqF1Z3cF36niQfGATCoEpetpdG1u91dfRxhC3dVxAgFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WB2gWezYqdLkXnPNg5qcvs2bCArGvjJjaSN6dba2RkDyTvWYLaRB7nZH5Lxy73g7KX1jp1GqbcnuuhGvAQ5cTyN",
  "key1": "35sSHt3qEAyfkoaegkBZRKCvJEpmMnjsgSZjP1mGybcDLuJgR9fHiSFSFMp6w8bmFbhBqDGUaGRxnp46wbbWmR1u",
  "key2": "3JFEoXcnEeCRXNcqAns9VZxo9wWpTc1qtgd74AyLD4jERpy45UFQBBhp9on8TYhaenZWm45TrCNtqPb8xc8SpLut",
  "key3": "2BmouyLjoX4t1brQjfJj61BmgRBBdgzZXJ8RFm3Rx4qUGy6WUcmi86bKPcR18jonvcoKXJAhrXM8tJH8BHUFkBVC",
  "key4": "5uEyu6FanzAkH3hVsyTxp6GwLjEWzmLggwBnhmdC1F2HUGrFPEse5jgNmx6xrwQwwWe4fKwvo7kdN4PBnKxLFyfK",
  "key5": "4zqPXRnHGmxQHHEnqNUMQsSqCu6kndB5vzDXc4o3ADbinfm6o4N6jtyjKomt3uHbQLfBCTgfB9czKzS3kQQv9Hqf",
  "key6": "2Xrvow6o2rS621JRiPHUjdtLq23N35k5bDPUCgZLbkMNC2gKGjxUz7Y8yX7w1ZfpdQzLfRDwnbxSAe78EH8cwhSC",
  "key7": "5dQewunHCgTkrmRycpw2gSQf3PujQVrgWE8gVgFqTERJK447CkGRsUGTFa4pmnXwExg8dqP1QsWY1tVrH8hmr4BM",
  "key8": "4WNCxmkoofA9PkyBTnHL3AAPWwAnUmAd8ncsETtkae5kcgKspwnwawCRbWVu1WZRgJ6m7W7xfa713VEGvEHysD38",
  "key9": "2kF3q296HRS8DWTaifpZpddvgXx9LKSiKARfS3RcGfdQQFk6dEUVCUxxJ3tHkrdJ6AxKqEihfSM4Mw7Dfdg4thb",
  "key10": "3dGUz6mRJL2UNyQDREGfvwFXS9qhy3Mb3ntEUtrybzYktx8jLLNDboEEyYCmURRLpxVFwhQ7ErHm9rDteAvYp6Fw",
  "key11": "2HNTipjuVL3e7DimLvu1MZ3poEXuLKp17xXo7SnPGaePRNFu7NoHSo4ujEXiXdQKfSTRNinckVPc1d3J9hxpcHEJ",
  "key12": "4niUJDifNvz9Vdnf7TauXJScfrSeW7nnEwkUXSc93pYzo3uL666DNCDLBFFwWqmvf9cdtrqdLLMuntsWQykaffz6",
  "key13": "kHQt4VzNdLKfRVxAspjt2LJX7DDsRtjFS2nDxywU4NPHAi6otV1SJbnVu6J99Ja5E69p3HHK5qLUyLEAG8DMdW2",
  "key14": "DH6St3eSwzQXcojQkfi9iqf14KXTQ2P5B3qkV9VsprC31FmYzPJuhi2tzPUPiNT9jgV85As7UUcQjWpMx2qMeef",
  "key15": "3RPnWMXKK93SNDyfs5zAATExyPiWCF7Jjf9S1XdAzVKFrRcHfdETfxoWdDzSzCaKk42e6kZvjf62BDukwwLj5G3b",
  "key16": "3ZY75zcPSchcARkofrxvi7kXZvv73BXEF256KYigk9fGXG8nmKPpg77QMTuqbttEzdAEjvJwAF3xCTLUNPziDcek",
  "key17": "2396LqCZ7oKfMMvDDZxnZjpx96i61oXhiewNuHn1qLdsU6Z6ZcDybVk1TfXYxaSQHQtcGZZBJUTDxNdSQL4gESPX",
  "key18": "4HLAKVEvHRYxVZxpyLSkKQR1HGdmonEJPKj34BySKtTVsFwkGQTYYWztV6iKR3GF6RwQyroWM4YRktJpQKnVTnvm",
  "key19": "3Nj9kK2ES1emTMy5KwR5tAaRRACe8osoMTNBF9bYUD4nPhSHsw4xcFkxjwDwoqT1pD7nahm4v1ALvZ4WqqYsBrE",
  "key20": "56tHT1YDnko6wWkds6mjxdcMqkSAfMqGboJQTadNE48PiVyeLBbz7gQ4bqzj7U5jJJa8bXZBCU6DaTK9veSEeHcX",
  "key21": "273EXEgmsddJGY2bhePo5DLrnAAsRNJ9n5ydrnSQXyTXpXN3eFeFakxhUbgwK3cpXMk5aYUohf4NqQyojoAkVPQ9",
  "key22": "4GLB8TGG5fos8saWKrnf51j9KvLM5cVgmhtyEsrRT8RK4bua9fbpTPr7nAX5o9TZeSyZ1qKhdSMVDcC4sciNapdB",
  "key23": "5fdQvJj4zKmGquEXtEHVf93t6byRPcPXVFhBpRe38angFZAp5PJbt2SBm1FqQeEdHfHtu94BYhgZUV8Ud2wgj2g",
  "key24": "5nucaRgNnfmrbRodQKbx3WSypPwGyWHEV9R4cGLXWZFnmUDdWy35kF2dkCDtj8WyjMBbNqCWRjVScAtsYXLHubW5",
  "key25": "5YfEp1vBFomvkvBYbG7i5KWxPsDp6pCD5CCSvT2GHGFvUA78HdCkaCcUTuM88hSv6bWr41sAee9sthGvCg3km5sK",
  "key26": "2f99L3uaYBoppd3rAW81QCwmy3qfvw8pM18iB1yUWRgvLisBmSmpFPjJwtGUWD36cTxCEwSYH1BrMZreZ2cpYqf5",
  "key27": "53fxeAADAmccc98RHCNLkuwmcx8zReFv5K6AiTqvu7yNmA21zMv53LoyM9oYPo1juuH2xH37iRytWRA4cxFzmTNV",
  "key28": "tiSpenpscp8uMMcP2QpJeQryCQoUt26fXYfoVXv8noXKPVaFrX193ozxZNAbr7cP1Jnax1CXrzcgg8DV8qW11Xb",
  "key29": "2eybRVQdYd4uxPMQC293ZdsJzzohZR4mwxWfXdofvNRQSDEaFSnaFXKP23bUp3fLbpFZcEmBQhNZcsCpSipdNEH3",
  "key30": "4so6FSEn36pjFcwiYqZCmmNVX1mnW66xcxH82GRnXkEiFW9U3JuFZhagJQ1Awmsqv2kNVWvvRVMeK9Z4xvGN7Hr",
  "key31": "vtMQxLXv3X4i1jBi9uQGsHjco9ep6MSizuYc5LxsEfMh3M2EpZ4xtrQMQmTFyZfJhhti535XDSrrZAhZsZVp8Cs",
  "key32": "61i1SEtxk73YL7xq7FMRfGN3Qk5ckn9aD4jP3fm13521uYSH5PBfYoRuLxQNYHha8ycBHjuuee6BqnJthJgA1gkv",
  "key33": "2ktNNazVBZspv3fbDkdeDr4TKDULPjCN3eyfZps1WTbrkn1utn2cXAjoqRpvcR3zbXJFvzZHi2eYeW1nnQfivyak",
  "key34": "39MsQ6orq2CkThZkfyPJwD1NGQYbMqbU5qqkXCUu3zXB8pHFae2HT51mkUp3REQ9XJmWwj8zeBKcyACQQ3M4Q934",
  "key35": "2nTuGwhKKkRZE38Nr5GXL8p5Y3FH3ruds2QbxhmMbpvtCcoVtt6brjEfHrQsdYwj8zcCotU15ZPEPNcgCokHcaap"
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
