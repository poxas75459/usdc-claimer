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
    "2nFgWZ1D1AR5TwByVJrbgy2wdrhwEqtuTM16J6cRwAhJwsG6k6raHGjUEaAX9j6R9hTBgtFmP77WNNMVtw9RDfEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YMHRaYo5dLcT2A6dCaTqxi8CZUC5RHMyu7KdhUyauSQDBcXvtNyw85MHCQjqexEPwjnYUueLP9kx9Z7Q6qN1Pvi",
  "key1": "4ZVkGebgD7hWnRNNYZ4WCkbmRGRCJ6tqQ5JXASKY1Dac6cQ57MtCivJ1bNdKXLiynTG571riK5eJ7Cmhef64kvSA",
  "key2": "4jfuw7EmAkzKGta2Vvxte4vZSqJTQ2wQwUfqBhSKZGgA9xLYyTrTkfwtCYfmVtUMFznaCB6NNMm9ZE5gsX1tMoUp",
  "key3": "5Zk1Um5Evqjh1UPoLUYgC3n1dQ6jNXcUiZQ5BHPWS3gPB45Tx55MN7bL72zhC9fzSjjcFNcP141YYw8XkTNER9vL",
  "key4": "3YATfRFoiS1e5ZejYxqwkzs1dT2P5XtyDMjnVtkr5s8TcUnxZzVKCiNxivya66ZwUqXKvg1JKigTEYtRsLnhkej8",
  "key5": "3mgBpWyxaGvKgJJjVeLKrAJsskFMBuFv61sqnAU3xMT6reYcvjV8NASCDownc6XjcJGNpB2QkfPNMafE9dMneNSy",
  "key6": "2W77W9GFr4t1b3fBWGTpkjuyXnEi4BYsprrTjmMPXh7HgjzCyG57LSXrmd7CSyD6SKNx52mLmK4Nxoh355DKVe7r",
  "key7": "66p58kEenmwjtL4SgSYX1A1psHRS5hAmdSXgmKheNVqXsuK84Y5jpSYbcmu8oMbeCakiNKGxg4eQuP984fFXC7qe",
  "key8": "2ueNxFtF4z8vABaAGGiASdCe3FqGsA8ZmVdopy8bAm6XQxjzaDhg6vAPLymm3YEEjhkjsWSvZHNfYT17gH6sdoBt",
  "key9": "3i376bfjEfVF51y6QHd66M6wk2qX8WnYxsMXQGqWizaUb8G3gbDV6tNniD6oB7FMEVVeD3cRfzGQKLswYzH65rgz",
  "key10": "3VagjrA7iisHbEqTPNJxJ2HyYKTXMaERYrQbyQfT2Vbxue4QZhKGRqqTqe7Je52v9LMDfsegU6qUYohzyU81RCVh",
  "key11": "5MTyan58NWbN67woaDyx4oZ7eL7UJDhEgGff1qvuAcNaDdtvHsZAyNAoyWVVZaN5dXzzPWXpFTA6FKCDT4711NZQ",
  "key12": "4JkGPb44oJa7e47f97ggmww48pqQs2GcVkUY5ScDt8ZXqDY5WCaAY74wyJqapg5fKYhWSoxHco5Fg5zuYwBi1E3u",
  "key13": "3CyEXVsRdPzzWPyrambck8hRzvxPMEaPJ6F9DXgM1a5h3PeAqeV9rsuyGZe5xyvWXoTsY93Tq9XtTSCH6PqdPR6M",
  "key14": "2CbyjqJSpGoMxA9bVf4RowjXaRsZ9CLpBxnkedeyU5JTb9HzaAjEfMPsRmaeR6kDcSUZtr3Cqso6x4Vk5ZMefanz",
  "key15": "cWm4wAC9S8uzCPR439dwEtHm5jBAUjXKDCbZGeyeAfUV7SLfoUT1VXdfr9sRL7mrhCXNRBowEeVWyYFfAqU6tPD",
  "key16": "4byEDxpkijb8HzupgA7dDpE5frCUc7vUQmJZVmb1jxmPmzmQVL7qf678oCDrA49kuBmzJUGHpnr6cWxEh1BtZf8S",
  "key17": "4NrUBjVJ6fqZHqgnNWCe7SJAp4HejVU1cr1EErUJuMrtGp5ihTERsBvz6qDobCSZpZi6VkjMsfj1DZrFdnWAVkFn",
  "key18": "5T798vdTw1hDWzecMz3uTFRXTpbUuJ5bytynj3teHUcTztjXfHr8nSgo5Pemt75DoPsMJqpDSnfsanCLfhWKZVrj",
  "key19": "2uwUSst52xrioeHHhVth2dCR3AZyKweQdB186wmQoBH54N5Bet8ura4jC3SVhk5jt3s7bobHDvXkeuUotTTrqGUE",
  "key20": "k9QtcHUShhgSLA2MmgRbiFwNECAZJX8QWURpaPe2cheuk4YmjMhW9CnCnoKqHzp6gXttxR8a8ttAy4FerFopK7v",
  "key21": "3Gx4G95GB6BdpZ3p5DE4RAu65oRvJcbzzmuDVizhBwiNwt8LGZZgSBRrMpH69rj1crAGHvSztfxYsaoGRgv9MXMB",
  "key22": "2WuFGkC6cA2vq1i5u6dVF1cDXPNTb3LvkpTGkQTpbDTizAQHmbkN2oDAhMk6XNcYgcfw45oQCbqibTkB9HMNKrun",
  "key23": "2c1R3soeUmC6MdbcqSamb7dRQmwMoEdLrf8bTy5KdwMraWuTSJeTm99MixBktBezLKX9nKGA77ouigNXz1G1YovP",
  "key24": "626vdJpmnEm6WnEwcw8z52yYVCoSeKkCZ4nucrtD9jv7H5sCuoEzWtQcNP6hpeTdhK3XdNQF2dwvkuAXMJNWSYWj",
  "key25": "YA4LLba9WZY3pseMTsmSe2UALmqTnfEENGTMhDJnt6APUNPr6EHQQNFrjjshKvMEtgiF4RgLgbdvbvoVJpbnPW1",
  "key26": "adXy4mhWBtDEy4Bobc4RsZW3T914reZJdZb42jvXShA3WZjmHywG694wEZ7Tnv7rrbrzgv5byTWbs3CEcqqLLpA"
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
