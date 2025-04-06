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
    "RvSgKK7k2vePXbXsDdtqNUYCjHx6Kw5Uv81UmcHjrYgdgtm45eaNbViFDRFgqUyvnsZJTVTWX7MCEi8Ud1YDp3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "126hV9Ci1G5DjaExBEoDzyPdUAJ8TVmHBY1y5Fwnv32p3VRbeSNmkfcLhmxGWrZ7Wd55woJLXxD53D5r4ZqySnDQ",
  "key1": "2zq4tKgHVYNyihQRjqbG5Hf2zpCRV1dVHwUAY994vrwq9E7kQadBngFu7dpqWXVzjFkJYu3uaUrRX4QnGfiMbetN",
  "key2": "4yYFGzx8oJJuL8oWTWXR3a3S73spVzZ8Fo4h7NZVS6dG7LKePatM6ATZp6ioYZzZdqACrofb9MHcV9YTgTj1qqEF",
  "key3": "5prg6SJpBTsZRq3L2K5hyz8utKfVmKbyW6xYDwtJKRyNTinoC6PmicRzEsMyMEXS2cMLMvGd426inLbeewvTrWET",
  "key4": "3KAnLhAWeP28Cd8MCCDU2yuYbb7hcekx8EPV5qLkP4eAcgPYc3u5QUWkBN3xWmf3tfUV5hF589hadYMft8wPnK8C",
  "key5": "4g1NQ5nWEy9nYRVPa6cMTSgaAQbARxZp8JCjWbnNtGjoBAiMYNT6bVkJo3N4bwgSDYBHKGbmnvXQ7g1aRfCJ6UUB",
  "key6": "3EFfDpVKjxeAHfruAwvAHrgK5yVgxUduhK2LQrLgmnZ63nmLn8aAkLGQCm4duEMn82BSKbzEpTD45WdiwJdBaBGz",
  "key7": "3fDvsqd6UpaCghKXn2RruvJzaugBvZN4GQxi1iGYRUBwoRJibKyhnPgQA187UfvnU4DDXNhatC4a81zaFLotMe6V",
  "key8": "4wQGzBp4KQ2eCKi7dxPbeteurqDUR7d1u76Qr9Gw5X6Nt2bNhMEpyCMJFbmhA4PN73XGUxnxS6hSSdaD5ZwM6h5g",
  "key9": "365oh61cv14reKWJtRUpJtyvt5bRYxe6xH2RY989h72dVEfvQb9LEkPtCCJ25JQsaDZsJhrcBXWbdRJCJpCfZW1R",
  "key10": "4FjWjaGaHZyHdsK7Rtd9m9v23cJ96gbQmS27BfGMievFbjeEtSnGk9x2S3MvrpZ2yaLCrfc6rHpDqZV5gTaEsPa4",
  "key11": "4xzeb6GruwvZ7yTbgY9egrMPtGPLYNEnhGbcDsEKTwvs9TDWTjZ4Cg2rmGyrqzXhEqQjMwsccRzPKiQEXA8mqACM",
  "key12": "2bN5T489183TrK6BxxE3fhL8V5tm5T8XW4SmigouEromasVKY6MSjGGSpZwZiZ9hyrzj8nLufTRCyDeo3jn9vFiH",
  "key13": "498o8t8DZAAuNdWJBkg5SmVggH31FgYNCSew6TLZPHzhbZYRco9jGmEFtfrPVXnrKjn23fm3EaCAcm37JMTjXb17",
  "key14": "Bj3p3xEFz1s6sSmxSgxM4o5dm9GJinEmBd5sqGFGjiHTuL1LhFpnxRyG37Ufeh74vNrLay6Zp5bfQNYSDuLpiEh",
  "key15": "51qDzZEjyMb8BNGpNBBdvRWv6DQ5MsE6aVimESowvdR6Km28NoxL7mr67xUNsJkhw2ECp4sbX7ngh3iHM1g3fBSy",
  "key16": "5WgbMccwsTzu9xgnJgrXSdKXfCg1jewaKCVTkvkdHGy1cQdN2jMtdHiKZw7mZo1rTZ1S6T6EgvtCJqPhXk1WNQap",
  "key17": "5TFRYymqzwykNBcicDr19rfRatbPabQmzawFHEQW2W7s3iPqqzkcQAk6g3TbFNUwM1W91rRxXu6WW4dK4UHiQENG",
  "key18": "2xvmBKhkVP2vjqDjyG2zbuPZDBW4da9gK8FahVaq5N5uGgo5BdMt5am7w7B2V9E1ou5SGsnpdz9yMyPM9BmfGUWy",
  "key19": "2ePYJEu6xq4ahoxCjWvfnXdnjrpPiSxaDQfxQW42YnauSA3cVbVJJrdCmTfYP9QKQRgAVbduMdduTQgPjvsqUgh3",
  "key20": "2HgZqqKUUHBXoi7dqn8fKQAAy6aPCebEfazUWkVrAGaebUeTvv7KWU4RTtkq7jU5ZU1aVdcNjbLrcWuMPozGEt2d",
  "key21": "34UPa3hgeeM8zsEtjP7aF6cnTCeQTgiP4QnAbNqeGucFwEasm9Ejs3E7ueZEv2p3K3pZKDtnRrXVW8WZLVxEzxyZ",
  "key22": "LbZiSYqWsKDRdzt2GPWgbnyN9YmrPsgcQ6uBTJPMMtp1HLbNmQ1cH3CVBeEY7surogYg634kHYwiFEd4McyuXZS",
  "key23": "37CpFPNukxitinoctxSnmyMCghxeqibf2KVuzoZQT1T64ywR2PypTYdJ9WQ6J1x6np4dc8rQqxjrZ9tPKD2PaxK4",
  "key24": "5myv9XP4UD959pLKq7qdCd7LQv16ipZzqVXSr6E1ipSEcZMLRwvZdotVAcsrRwkTn7QrbKCCFfz8fnQ56jtVZdqi"
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
