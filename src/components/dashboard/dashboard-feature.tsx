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
    "5kQncCwNQ2mUJK5cKzu96ErnZjXLseZKVPTz1U58pNvFJHsLktdkgNLpWhS8brNHSpmmaSBVSZ3HnoZfDJCjZsj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbsrLMiZd7JmD67J3ShUHUc3m9NNQcUGfnhPFfwcCzHF8WAim2KKrPvGkKnQ1GJMcJr1tcxMSNcWgUspzXvpZv6",
  "key1": "2mYCStKraJnzx42pPQPnUeTwbs8pm6qDt4V3UE455ch1Kzv6f66stFkLEsboZeFTT7XsSkLppFaVLNkWE3KkeAFz",
  "key2": "5xNzrjNaXu8GqumioWWgBcYHYBz9P4buZV7m2MBgZSzfJoQB18jT3Xj6sw4QdQTuhvNwuo6UeyTrSBvwdGYn63LT",
  "key3": "5xeKsBzEzJCFoBjgJfPgiUt17ZSFwxVi1P7kRsd9UKHUDpbgG4heEDKBCCqiBpag9urX7cCHx88QhQ9mJaaCjo4n",
  "key4": "5doxyL4Uw8BFPjuVoZCo7ySJYRUuSsM5fVX1jQEyE7LeMxq6YRruSSickczjTdZEcjRoxXbNq5mc6cKyFxaRNzLG",
  "key5": "2ZaCCeXRU7Xgx4ZbSRB5EnWpa8PsZgc1gknqsrGctnaYBiW4CV2A4VZaURbvDPkDb4xZmsU3pY8wV71NbAgZR7So",
  "key6": "4gYWPdP9vuQxR3o6RDiqaaRaDgTvo1ArEFgHPZjeUMo33dY7K6UQtBGEa3tKrmonFUenpNSs2cHj5odeJ7ci6Cr1",
  "key7": "58EzSFT47sjUzX2RuSUqnaKPYBpPNkNxydxo5zWsyQe4sCdMjw9q4VCEnL8EcQCwL8XYy5pbG92Nyv3zNTNNzAwM",
  "key8": "n2ysNqECHf9ttMVNLWL8qK7ySnYyD3Upfr5z7KVEarygMVZdLqpDZJXvxNqhE1vH8YHJhTjoSVjiwQPsnxsr9we",
  "key9": "46GEttsZA1ca9Xw8BvLhS9cSG6F9WckmqpdmVzo6NDVVuCLn9PD1piteNFnqGoyA3PqseVVB5SZxe1ohKDLwsifV",
  "key10": "2nEowA7m61MkK1skxhCe7TKMbf4XFUT3SZPrdDTxVRSu8kSKiUUS4it6qa2tWfL1qvZoGBGuUkfqMVT3PcvkgjKz",
  "key11": "4tUwa2o86p9qKuP6Zu7nkUMC5KkGXveMdaNctm5Qt4CLWfgWHivXJ2KSwVRhRnmuMQpE3f5Bzw9FuaVD1gMbnFsi",
  "key12": "GERYBX6C2tXgymN962yomiJz3evRvWbhTZW3swTE9xFZyEpZnYzqCxkHEibTieUMuFrc5e7FLEDgDcpXrwMyF5S",
  "key13": "3ZqgB5Tsp4Vkra3g74y6wAhhLgdmFzWTX9Vh6NUXvMeUrW2B45qmJBRTfibzFmytPCo6hPtkF6GokM8E7Dy4zJT8",
  "key14": "2D6KMCDKGDnVX5MfwgAZHZeXLG31wWWi7KRLhaK1QG5Zfasc4wVUtb9FCUJ4PXckNiqHzBj16Cs7UaZ8GVK6Rapm",
  "key15": "5VsL34m21xG93F2RQYuQsKHEa8qsZ7Mcz3kLzrZYWZL4J5PUJqedauihsoEN2ongxJ298AmAmBdpZuttb4FP47TG",
  "key16": "3qBvgZ4aSnHeT4h9m8fdcMQfdjD13eh9i4yB4acKvayYPm3xdAoq9F4HdvVEDu9SpgLkNfDXML1JDRL4fhmHLUME",
  "key17": "5aEgoMXxbAQBvDb5a4tkrKiSofuPonT8rAq4zGyMi5V9kvRq9JGSMxghqxcpyZ6c2Fnzr3d1PgceuaA1e7jbCeRL",
  "key18": "2VmXy1rtrcA6UsQSzwbGbF1qvdAQ4qz4S6A6GME5LbD7rYdmagikKoxn3T8q4z67ytAYu9H9f5Ssr1ByLudHaupF",
  "key19": "5XSa7piWB1mrukrGAsuWjEXQsktrVzgNXyTtduszb6ws2QpqDQ8kgWKtW7JJs9Jmery2d8zCB9SpUBk6iDoKFAa4",
  "key20": "2buiAibWNonqVi5f8KoD1E1EsP5FwQ3JVMFVBG9seFVXeRfZvzh82d5xirH6FW34KMCd93jZv8TNvEAYmmgagN6G",
  "key21": "3GynCHc1HTg4KpbgZzzhvefMesCpiaL5KzjEUgKv7Vcj9DHPR2ubPUsus6WZjC8M846ezw1UNLZm7jYwKYgqTqPu",
  "key22": "3WcH2QLG4UJhhBakz6GKcTfmWhtwmzWcrhQCoGU8EyMcB958MskAy8v3hvPpWgcfFkbUYsmPKNx7v4sfW9iDmkoX",
  "key23": "Cw9q2E9hacDc1Nm92MYNFBrTtupUUtdA1vvaagK2Z9uqp48Fzp5ko24xEBxkQGMZTzpDH3rigiUM7Fn1ywv8PrQ",
  "key24": "45XYw5XbiV2bumFmrqvne1n4BTXjbbg2MjT4ipB4vjC7CYaQKUWgUsTqT6r8CfnG1tTkzT36GoMD61uWqhJwSAMr",
  "key25": "3ABB5E2oGdNBZvqpeYRzd2eva49e8AGooHHi8quMCuW8qmposuQhLsffyw61gsGJgjpffk4iGADh5k77YHMnY4ut",
  "key26": "3wv7nfdW4u5t17cLViEuBfnnnhCTbTirie99AntkZnGkngdnU3WdEhhV8W8WFX5fDT1j5z9z5dUaCU4B879y14vr",
  "key27": "64cVqYSVd6bx5Besenf8k136stMwBjKeu5eZzZSzWfWQeVRe6xDBRT7SHwTpUs5NiGC6axVzRZRyRDNJNqa7nM2E",
  "key28": "4dNu8zV8rnLWmV29p5zuTADxWQ7EbbrLD9nNXdSKaQ5g7a5qVY7Fsft57A6GU6ehWsxC2wvecMaWKGPTUX6yBcob",
  "key29": "64bjVxAGxQTZ8AfGyLbHW7NdDHPRSqx5XJU2VdottAi4SVqutMLtZ1PNJweXtUT2BoaPu1eHMnkSxFqwPFxxmL4G",
  "key30": "65VGutjLMgJhCb9CJUtbWfm43L91q3dGBKzLHqcQCGv7SYztTVfeYii3Zgqbx6meTzgMtwCo5Ctrqd8pbPVxoMH",
  "key31": "9tQEeKUu8S9ZyJXUw5QabP6fKQsrpG4epaKq6if8TpQHrf1WpEX9K9RiFWdM88UnDt3QFVeUxxHGXTdH5LUsTAo",
  "key32": "3isQFDjPEpUFNvqLuvf6beHcFGSJiBEhwGLbnvdSh1cqksEtEYS178qz7h4S4JmfWkBBof4C7ko1D32HrfuBiA2r",
  "key33": "5PWBZFrce1BxHRruXZtPb7koCK6AoyC397hphZ91N98tfHY6ZUCb9rGmwsSYP4eSCeJxMCQjvaf8Sc12goen1tNJ",
  "key34": "2GTdfxTu493NsAuEnZfpm5BeEhPuxLcSskXS4xMeZFKtMfjqB6ybQmcyDxkr8KPYitxjPKvTXsJvshD3wqWGL86B",
  "key35": "5pR1HSH97LLjzHi9jhdQHgetwf6jR4FhkcdNJihuVMBaT5aPduQXcLKMeHtpBns5kcpUpHXCKZiqCwPgX7HVvuDe",
  "key36": "2NyPcX9NeR9k1BNcNUJu1KQk6kMe2VoxWGig73TvGQeZ33r9s1ex64zPM4whywdTTdFSCcNdLhhjJMbBjnynfpa9",
  "key37": "3zP4Aups4Ve62ezg4Eriy7r1YCEkSCYKJ2k6oEcSnVwbcCJ6KiiYJbxsCVPqxvnuhKy392DRUAwLHxRzSWPvg7vo"
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
