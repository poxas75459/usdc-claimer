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
    "5GVPJf6UrEJ5w4eYFvmsLSHeWfDiuyqNzFTf9QUSZBTAcs1bXLd2sqDGUtpYwyCrkmw7YF5YSnDKCJM4HkSvqNeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHbPkGvs93EEX51otvuAGRrtbiRCJ4GpbxwmyeW4GSUVk2AMGty85hd5jQXa4Z1PS89sfeCXoYerhswewfYyXxS",
  "key1": "3SvBATncPoeb8qoQT1SQrbtvrbGhpZV6qLK9z27e7e2xzHqjEftCqZ6mPq1GAEXKjJR4PMkFJBnB3KpnfCedSXQE",
  "key2": "3TdC63G5FGXBM9jpoYw89geMi1g4SwSHfQwV1EmVM7B9Do99ZvZCFG5M6DRzLn1RkyM3Ed3Gt7hdcsMjfyawQeJE",
  "key3": "5bjjM8ZyEZr2gSavw5fzT7NrvUcWF75ioCcKV7ShM4RcfyZzMfYawdJHKhTB6CqKN52z2LQoNVDSaEiL1tygxQXA",
  "key4": "eeNSDt7tztswG8VjFqudL8vGaBtbU3cQHjDSnSjup35BfTkWmoDHDSt4ru9w9j8nRJN6xdEw96MyFtZi2r4zhKL",
  "key5": "5eT2u5ZPKVE8wmgNghRDimaVpVjz6j37f3TmFWxyfhKDz2ThYx8N1i9d5LThCpXFLht3CabYJPZL6kKQFV8v4f3n",
  "key6": "bvqbdZEURv4qafwAWEUP7x8fxQCM5DYq3iC455y7d75twxsjBK6y8dWd6MUc4KGVhDQBvKB8goaW4tLea3sijbL",
  "key7": "67WnTrRAMVQhw4oeaNe7s8vFkuGjiQhwrUzWEhLEz6Urszq7zoAZtNJbGkQQ1nU6y8wbp7bweqkSHqyyJpCLF5TH",
  "key8": "mSgDz2c5mUVcLcgVWVAC7kJSoa4eMR98T8PgyXiMT7VnxCejY9bhFx4sS7DikY4C9asRsXsCLhBw9QQKPYdmaiQ",
  "key9": "4fjpnDF6PamGqzBUN3JLRTtkooFqvJu1Tdg6unAaaGBhuk2GFCZgabSZhhC35VVJRmSSDvRwPNsUCxYV3H2ZpbQ",
  "key10": "3Ke1TcC956dNdP3pb93NkQUWkkFJQAfE2qDZaATesGk1CyyMfnkhEBKbgZqfS1cSjJ7ZbpEq8cyRxKE5zW1Fmhbg",
  "key11": "5HasTohiedCVhBze7CfMAq8P1r26aRP8VVkGreTZAhA8LZhq41db39VxHTUsAR7MefbhhREJ4n3gGh925tdBXUCp",
  "key12": "3LuKjy5E7aPpKZcij1HZ5hEkkDegeMc8MwebHSsyAUodw1a7vW3WDRLQWKJB2doohXDTp9YduhwaawtrvpQCGM9o",
  "key13": "XfbRxxiyKxwjh2zdCqutcpKuy6DAFFAVYQHvZRSjJtM9Gtg7NZ11Sn7L4NxAbdJgQBgUKghA8UEDXs5jV3q6un4",
  "key14": "4w7eCTZwoecgme5n3nytfEyxvC89QqTy2q769t3s8oZtTb5Uak34gYjgYLZ2hzJQat13JcJ3Zqa43h5GQGnmS6ps",
  "key15": "5YVdyZLmDsyvuBjLSiiZYTY6mRMrTriCfoEASW8Vy8huudD1KK9pNJykdxmZXvsANTgK5mxKSxBNTCATZfi5q849",
  "key16": "heLKifLMjdM9uJAhCMwxQWCLj7L3E98KX68bJ3vY1meCqnwZgJFDv2Pii9zHCnGBt3F4x4jCaV1cBDB2wz66nCJ",
  "key17": "5ojRBjYf64MtCvAujQ2ZpmWCRZwR3Mu5tqafFW1ELaSimgQ9c5xaMEQyLAAS3maFfrAWoVaY3iNCQ7c1JreiWZX1",
  "key18": "NsSQMgTbqT5JjY9KaWdnLt1iagds6emP9zEtHSJQsLk5rgAsBi9HXwyxxhQYD5nJJwBjFTysZs5eSqMDfgK97YZ",
  "key19": "5tfkThynd1KUYSwJwdxdoHyFPQccdHtggGoQ3zEBLYvsKUSkT46ebwyUuMjL8Cb9iv8v1CZXVPVsaXVTDeSq1xqh",
  "key20": "3LqDQNhD9amHJ9GtnVbJuvXwpkxfJh164RmmQ7Fs568L2meLLx4h8BeffFVsj7unfQkA2zVAkhakXpEwKsTzCm7h",
  "key21": "2y6pavDNWQWUmqUcpy3BMBCMpC7ipGk3tLDE7mLjBLy5PBmjJg6kTDHXPsj1PxYEr2yy45Q8SHZhFJRA7NhVA7dp",
  "key22": "2mbQv1kzULKgw9aSsA2YmCPMZJPHTh8KYMBwDivvHXerruuvrccf4Z1zibTgVpq54SoaksS4pGNtvH12dGUEvtKa",
  "key23": "2uzGzCy8ECYgKZBBeqBnzFvQ9LRixpkJwrBj8KMqH9dKdtK8vhr5wrBsc5feUoqgszfBC48cP4ow9Gqo1qENvgru",
  "key24": "pZj62PG6GzoB6nsdnRVKAh67BcHwt6KUnrRvbngiMsPLWgtFCBUDGkVbLCM6fhuHYMzP522z9b7k9yrSdc68AdH"
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
