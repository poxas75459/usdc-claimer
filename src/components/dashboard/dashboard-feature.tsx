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
    "2ARXcLFuaTdRMuuMSZkn9jVbfKspWwMDuRHPktup4ii5E6moQhPkDC5qGEzZgsYybi7YjmHYLpwbzTg1gffsn8Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fS1zgp1Cep7vgQbB1is99hPmdCMeVmxCffLrDo6Jn7ejNgqu6Br4hDePMANFcgot5vYHKUv8UtmgQh6T4dNHWdp",
  "key1": "5qEpk5KMA4d1LfcbUbrXdcbiy3Ae2NPTto93mc6bBP2DfnGZ2pcuuiXaW6dzygZzMyzWzoW9vdX4SM4vvCvdBA4n",
  "key2": "5NXxLBAUWw5UwabxVVyCXtQQayac9ZiDbLe8Y3TupcThzzmYVgjKd99gr1aoKK63MixnPmCcLYWKa21aYovLofSR",
  "key3": "4bfssXs8KudUXGednayGzwJVepgM8k2Wi6w8kKc5S2Xxgaps36kfzXLD1r41JBERvbjir3J7NdXQQTZmcbBaT9rX",
  "key4": "3sCJQ7nWscSezmFYoqghQ5eAA478LWM4trf8qvgDeE6az3wBY8gWJ8ZPWsgGj53hQVjmAof4naUdoGbx8NwHkepw",
  "key5": "2eyST4sYY2hkFPBHon5GuGw5L57cJAGC8ZJCtqaxNwzJyUg3grQk1QbkJezmRATh6xqcX6gpR4Y8RMb8n6gBZMhJ",
  "key6": "Ut97p7QkWbYU7aiPyfP8MhvyEVdgp54L2kC8vqcYwgU7UvbEymrGRrys3KAmdxNouDQehYtJ5J475Q88wgMqMBU",
  "key7": "2GipDaghChcS1mLjoept9vGgjsc5BAPNK7UpkJUKUbMsZrYtAi14N58MTtuS3N54VsTqToxXzLxUkHAhTRDE7Q7u",
  "key8": "3hrd9SZFog319q7vw5qJdwwu7BAe7e6UaXFPyLFrnr7AWMWwgpJT7PfRXQfTS58vvkxL65S9jR3rmrQGri14vFCH",
  "key9": "3ySLXR7ZSx4AketugLAzkiP44b2pLtzehrjuURK9xtYx6KuMfJmhPFN2dqEM6KW4b6pL6KQ48odpV68phPR7L6QN",
  "key10": "3DHahmN8sot96KyMi5j9wLxhyymLsGenRi7U1UXTRb1sLNyL6kDpDUtE8BdQGdjGWBY76hMtar4wF5S1pMyjZTBT",
  "key11": "PQ6rQi7ns3itbbGaju5Fu7VSCybsHtuTfAgVM8vZXvcSDzws5rnv6q2Fo4rkpxvMiDFZhhSw5nKZ9Gt1PhiEPRf",
  "key12": "2U4jUjDzcQ4tRFfUFMBkZgQccGkRRYSbzzGmVaf9FDJwSmHiAYbfRQJ54JKXg8ELJnv1KaozYV5jpaCqqK86siBk",
  "key13": "5uxj1Pp82MKLzW3RmqytN1mgarz4L5eTVu4G4P6cgUhKvJx6AfmnoFmq1WNQuRwAVRdcYcphTYhhAciiVfYRozHC",
  "key14": "5CbmmKQHwJeVf1gaFwSQjkXAjSmY5dXZ3YinsuB65bEYC7JU6BptjW9FwYWMM8Fa7jNu7hNgoC6AXTB7Wzx21m3t",
  "key15": "4xYVbke8UcFmQgz2F1yjR5qxaV9UH6bfm9Qpc6FSrGTSgpi8w25LmYnHo5b6nG4L1iqQ4oTfMFqvzti5aXFRjS5s",
  "key16": "5XFi4QrTcnF1BgokyHjCQ4H1EARx39Tb9EhdEqy8zZV5JXJWTv31UewhXyABFQScg28JXoSftGmLLCsXBfharSGa",
  "key17": "3ht1UYNx6YaoaqQkwU6BdSS1ANiJGi8WMmox9ieyuLYA5rLryQFf8LfDh6dTeYTfnjRFJAvJt1ckgghKrb8gdp2V",
  "key18": "4gEhwxgRnYpaeGFJrq8SsQTbgHrbDhHx2tvdLvNwhf7PSqHeob3U4ZkceN53khzAN1BAyT5SVY61QnVcQ9r8J8a5",
  "key19": "3egK9DmjAbyKDwSzYakysBatogA8Tg8LTGp9Cj24GksVhzXh8jAFZSeXX7nPJdAQ2wdmpA9MFY3HpkG4PAQYcEr1",
  "key20": "4sx4FVBZRMQQhjdZuqFwe32hYZC1AUPEjfkqJehtkKZzZacvBgvxVpX4PfU3Vj6NjAPnNte8NBpd1UAtdXcBr71o",
  "key21": "3MTEJiH9j4eaCoTr5eA8RimJL7aTS1Qvh5RpxKcZN5ojoCGF5X5avo2KQL6sVcbwRUSxazhRGgyt6LMUwjKhrnzM",
  "key22": "5hhMS1ksCaRdzNUMagwmtkagANS9n3VYiH6HxU1sWZwFjgnxpMG9Ji2foSAFbvWaL376BUZGvAky6L3datUUr1HP",
  "key23": "TKYGUHCk4uabpmSLt6EkA753nVdQh78fcNrxRpjVfeUkUHo66MZ8SBRoQPdgUbfyQNPsCkj6BcYdpfBqMZxDz5r",
  "key24": "m2RQq5ShbyVnZ64sV6bWhQh8HfLMLyN26NWTGBE7HmiVZxQ6V6Ch6RbZHDxvJaSvpSHii1tKc7cw5M9XkbvufAC",
  "key25": "47rsosZewkE4GtmTn4V52XTu5drZMqJWWrodLsPpZtoLvCJ3TdTMHyitG1sk6ih2uTJFqbdNzgy9y6PdoP7F34EU",
  "key26": "9a3K1NYtBAPDV9nJu6cD5r4Q8moZDi2GachBhrTAQkceaaK8KJE7i3687Ydme9m9pk3Q5ndkR5fw8Jy8nVpeHaQ",
  "key27": "2ZGbRtR7owcnucgzHRoVgzPBHD6geXPCZzMkEWjUzHjkTEpThBDgeZybwy86mbd5wAg5EGQoWi4wqzeVjVhp3XyS"
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
