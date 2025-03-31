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
    "5ozoZcEdYDrNh5UFbJ1A1ikkqtB4F5wbp24PeRUc3GS69tXE62nV1wyASd2JoHhAPoLDsn7eQGR7XNgehAp7WAtU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yh3FZXb1cUy61pTFwZsvujgyZ9VxFTQpzsfdFZwUf7Brcv5qBXePNwqMkV3Mapjd8qoQtyq86myDFzA57fKZZmP",
  "key1": "2dr6WosiSBRyATPREuKTQMMCLS6GrHyu3obdxVPHMUidkembk4Gjq8asxa4SPtZgkYY5ErNdiVosvJQMDoqPStGF",
  "key2": "3fQJgNZsR1FKeVEyjZBqecikLdqdPDwfWt3rS44VavqNcXSX2MEJT3QFQcBYxGsox6y8sgiymvmtsenUhcvkGj7u",
  "key3": "RSfQdrNqpa9xqkNjmsXQ3gKcbsqjQMSgK3Mu3U4fg9vw9V9dU5QJH5j4QgxccPrU2hzMDFQq7GPYc4GsLjmC1Xn",
  "key4": "3oQHkzShVPpahFSfG633jJmqxEqR7cbX94bpB37abexwtsghcmueS1EPr14RWhRmcZ9Powxn1HFbVi3ooRPNZQ6b",
  "key5": "4e58Ws4mC1FHm6qCkoeKSYfrCcU6wXHcw6uoLCGAP6vSAxfpDDiBAs4Azxmus1EJuY1HDf2dpM8ifrGEAw2Tjhv8",
  "key6": "3CfRMWwzk8z4JeabDfbjgwH3on6E8AVAnvABnoSQsGtVowUobrjBBEjSUv3nx4PMHhiBEMqoUmrgYmcNDZvVS4uR",
  "key7": "5mYTSweoPfcy2SYeuFJcqAnKHS5XZ4xfN8DNnf87Q2X1sX3j6hXyd9431bxiCAjfUd7r2TZ6LMzkSxbpMop4AXo",
  "key8": "CSw6RJvPhXUFcMsaAUU7GbybMwEGSmRq9SpL1thDYvJWR935HBThYjghpsvroHJJK55iq3Qjx5Wz984Jf9EBCef",
  "key9": "WhUV34ZVYHCqw4N4TkRLgvw1ANaUpdyFctmvs597Xxp1YFdYa9zwNTkmwFG7kzhxwjcZbM4E7EoTANpnRUzBGUW",
  "key10": "4XN9ju7V3j96QXpZ5suaw3qUozWPmc1De5zdtGSdQGS1hzozFxHte3CUmQCFeTnYBoGzFd3w7CPEP1LPJyL9Vh4E",
  "key11": "ZJ8v7MjepF3yEUDqgNkk5yMZ72cTbwEMkrx3YWXwsthyfGnryiS9wwR6gzyv2eHBSCzEBvrh87PJJbd8nSFq4js",
  "key12": "wbUJFSz7CZwSdjPgp9rgW7HsZaY6MyCTJzrJ1jK4DAbxXS2xVS7YWiCWvM2719fUU6thokEe7AVPAKSmBNfNPuz",
  "key13": "4jb17G19kP9hWVoGm3HC2GLje24cAh1NjeSspH7nNiEpGd8NkCtMHz3wzBVGrbP93NEhUkHF1FFBS47MjddabzgR",
  "key14": "2dCfNUepXgS4bWEgPELSQ2BRmJjYpjbQmG9HvzkfRptoogeE2vubsfVHYBwdJUpMMqkrFWgYnMLxpTCXS8v3ZUWq",
  "key15": "54oCTaMTfJ5f1MPAoSctUkHYXE8uoN5bBnxtqrPPqnjbgUgKRpYd3V9Aj1xPagYmTp7fUn47VSwJERhCVMPLhrHJ",
  "key16": "yX3PHLrytHXju9rQG4ga2tCyHVHfaLpp261GSLCAw91GfFT2fNpqhLuYEk5BDdPPD2nMMCRTe9LEMp68hgDiGMb",
  "key17": "46PnAEgwEXFiAYZheZVMzU1thsQhdeUkJN7Bpvng8DN12psSKRpPE9LY6vR3tNBPAEKEUFDdnzpFyRrbA2ivW7tA",
  "key18": "23iQFsGXySF3Dus7pK6kn9rZTWuZw59UgkiyiP2SVVnRn1TZRdERiFjM6bQW7sM529qEViETgPWe7LtgzNBTCDmc",
  "key19": "2epQwwmgFCKXi6TvTjfBtXktkygSApsyPsiGNe1BiPDwiMFntu89brf71ES7NXqeLfizugeyjHnD6SFu3QJPdQC2",
  "key20": "Dc9sGSJ6ixNFMMZV8snoxe7fhscX6q1jP2icNnJikLHwbyTRXBTgvvRZr788qYD2hbtYu7k4c4NTX4vmFCAqFTS",
  "key21": "2JUN3RPRSxtEjhspV4YETGUjyceNzu3gRPghT9NkQbNPP2Wcw3iBnYhSgq3LhPVPWBqqyBxLcpm1HN8FSHxKnTfs",
  "key22": "2WQG5JMdfgkGqKBT7n7t3BKJxH2rnjbkGceMQDh3H7h1TUf5F22SVBdJhursEwyB1MRH16HFi1wecXyv1JdMtzaz",
  "key23": "582VMLsbwq961FmWP3LKq3pUjM6FyDK1DQkZmmZx7ALL9KJw53Z4AD6mJFrAchv7YKJEH594nhtCxTgXXPSFoRhu",
  "key24": "28d4Ufomiu8G2BpzfhWpvrQ2hdXWVgxQZJKfBqMQn5ujZFfwCTgxCbQ3knxyjb7FQNCixXu22GvSxfcH8auRsMb4",
  "key25": "4tED2chFYDfmJTtqRkQPyUVuQLgt2Dz1zAnceMpPgVgbEEtq87Pig147TNXEexDuok2sBxChg7Y9HAodEqxCoix2",
  "key26": "4VJQydv8ThHVejzQAHu6gN3JtqawmpmnVP1bF73aj31ohvkuDakEMw3YGGkTfkbNWBfYFhciu6iSFBvMcVV34py7",
  "key27": "4Zfb5CJSUmRpA65DMuJQFz6ELRPoN9Z72aS1GehierfACfhdEUYEHKRN1wnEmPak68MUJqRb675Sk3AKBjk79PBq",
  "key28": "5iK3cQjAcHc5P6LXWv2bk6UJDgJw6zJuTFGYc21z9QttS6uWThWX2dW6bVqVLCWfDwbXBaPB9c1qKqm1z71v4JT9",
  "key29": "29Q4epJTzk21tKB32LBsBDwTJVAi3zaQHx3C9oY1L3trgeyQPCxAhuLjF2W4brW84uYEFdapx54EBEhgreKZCbdJ",
  "key30": "3Lr3g6nKtdUU3SANn5ZBUnS8ySfVyXQyurnqc2zLoGpTf4eqVapwfRKwFeYs4sLLrSHm9VEC1YLc56LiA17ZQByY"
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
