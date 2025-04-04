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
    "5BqFqBegPqjwm4pQkyFrZTFgpSUUPfwt9jh4uJRwHdYE1EKQE2ABcCeCJB6gE9wKX8dYPiF2oaHYEUovhtiLedQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HvQ5YWb9oz64xixi1AGKKn3husb8WGAB8NJnQ9nmogefu3WGFymzYey6tAwM3Gs4yNcuPhuGPV9d3Q27Kwt2k3z",
  "key1": "64aq1RU1rsm9xYXD3eBoVaNYkg5tdLZPUaWuojvTqb1F932GZaD9My1qkx9wfxMrXjfZ67dFgvtfnCKujfwu4sbd",
  "key2": "67LrGuBsadk6FWRjwaAUyw5ddvF4XoWN7oiXUN2PhhF4wa6X5iU3iYR2bv1m6T96TavCpfjqUwL7H4GFgu7JmpYt",
  "key3": "4DRABZM6GHLqLhFdgHD547aECnqjiCM9znWZEUsiHGgHyfZ6sE8HdhXnAzsj1FFNSseXV1qQCcpD6mLMcjLDMdbu",
  "key4": "2w5FQxEyMcYsU4UHnWbzv7JdM2Yg8GY8gTvqXQeQbd9jmrwPPqkJNZ8BMs7vd99uiVM5UrdRadS9UxfGJpsUctck",
  "key5": "5pt4R3K4pAqeV72LvYUxU2o1DYeqBJMDYNGDutn34wmZJdQ5uZH7rAvNGs8V64rZXm6pGnpuHcwcSBzwjhrTssb1",
  "key6": "2SHhPdzzhPFiNmQHSgPYzfFnnoD7C6dGh2cV6KQSo9cHRdfbQxdyUaEyVxVvFobouErwYgWY1Q1Nrmdvy1iPhcBD",
  "key7": "3XYVxVY2E9cdicThiX6QRjVypCc1DZ5d5tNGHcaYFicFLGM6eheKNr79TnpRzY4uXVcxoisFUnC58tYgMzjsCV4h",
  "key8": "coyebXvQvg8AP7bYKXTT1hjpbnHXRtLYFDbpzLQsJgSAmZtfLAfeoyG4wrMJjEMHvkSj5DUx7W7mmgN5QJW3GiY",
  "key9": "5ctcrWUoFPT9Xx6XQH4qgbaNiqzJUnfiHveiQrkBHHDP55fKKFaLEgYvsBZ83dXkUzmeFNshQTt1ZFQ29fY9BvbZ",
  "key10": "3cAQdKw57nvfHEbZZqSXoHmHfGVAoyu2sbwbWPDBJ8no9ZhmbaNQznoqHivYs9LjxctrEqb3xW78HpSBucYXpCNW",
  "key11": "51GreHueGrqYUP2uidvhtYgJFJurR4fchz1ReMs99mtBRtZGYv5uqt5ESCqYpaLx1Y9einLhHSQBj4GrcCWTb8Mu",
  "key12": "2ETpMPiP4jvYaZSwqnRLqw1SVwEKHHget4J9Yvdkg8pXKrzuQoYjjaC2VVxJH7V2Ty98v2F5M7fUu78DH7MdWWjo",
  "key13": "7pFwAYrkQTTDPnCJreDYF4JLhtbtM5bELHAUDbLKZ34pyxuMnou5tfSZE145a7ra6xvob84o4kLXYnmYHVmd9nb",
  "key14": "p2Q7gbwhu4LYFdpL1GcrtuoqGB6kTP28Fs1YcprXqBufGhYCx4pGFqL1ib2FGNAUNSXg4N4oTG1LuMUpKeL479P",
  "key15": "2vEmFECTsoEZdj7ntcG9qELgf7H3YXzEBvMwj6hVvedVz1NUBsTTPwgihGcLpN4APjGZTvuh1q92K4Kg5J17NkVG",
  "key16": "5GUzLsFyexDtyuC7e6B3gpAz2jrKeCy9vkUtmWFDjPRtutWgpad9gi56ghnSGqe9z2y5Urgd9MNodFCSUsjqocwd",
  "key17": "4nGTDVCVEzNm1BfggaRyQPoPU2WjdJisczdX4ccM4eaEdyS7FtiwoxgsVUK2a8NeLeHfSLBZBJaYP4jQiyg7qvLx",
  "key18": "3QKckhjDEh2keqoQWfu5XsS8GSqrsosxP4fTKwsHpeBZQrMfferY37jDgnwjZkoDDj9xshAnx7bVotSCwLaEZGwE",
  "key19": "5AYr3FV6WiyPLFdSfDuYFZWgzCbQ5B3esmZj3Zr5YNDvbmCyGaEmsW79cwe1iorZzBBwBUza5txQn6PCciAWWGRp",
  "key20": "3WRY1Xe5SC49SqG1EtZV77PBp1hFy3u6cAuRMFYibuym2aoF1omqYGSh3vToSjwXpaoDsimgoj76H1iZBZynkKTp",
  "key21": "2uHUm5EseDiL6ir5pDzk3qLoRbDRTaBMzwDx9hfxj3igsMRnnL2rF4URJLy5HpgLw5k8c4pHF5cpuytDoaj7kTm7",
  "key22": "5zjp8cC3asGigZno3qe41fU6yEm8gR69yXaFdAiLLnimRzZGk2uoqasLm8u1aFmrLGziuYsUpLMVyxt1sSVzyBAb",
  "key23": "2A4cL8ZMy7FS4yStBnvygJaA1Q6itcKcJNMohRY8EwTLkLPctrEbLwqpPv5AnSdHn8oUhUbWFKGQ9FtKXKknrzVZ",
  "key24": "QULQpFV5WooDgsgdijWRjKSKPPiSmJHLh6t8UMLYLBocvHw4jYqWQH4TbtQoiE9c6kZHyt7AYxwtTmeVJKHHXWP",
  "key25": "tuW8p8GvASbfbmxrH2zxk3SxETvBWFKyUe6oVD1fiEd2y7CPXucVTsbg1kmAf7UR9LNzgmz531y3LBWy715MP7A"
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
