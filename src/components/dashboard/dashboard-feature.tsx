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
    "2yoFZF8TN1DC3sgs4tZuoSJUt1SKBVT9BTHUZp9drDgtXgeC8VBdhMw6L3WaPgi5CzqLXXcx3sYx6jn565MqRqcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rLhMTH9dceJtzAapFwAJCnqnTVJfygqFaDFR345ZGZpwv97tFTmyopD9V7nipMgukMUvEM1Xc58xg9Cog6B7mtn",
  "key1": "5K6JTaWbECQSSAuEjAaSJ4RSzoZ9s5tqD7cQjSVV4nvd2kKZmF4UoFjMa5SnkAVQm5d6ENT7jpg3GbJAJwgfFJam",
  "key2": "4zUJfR4xHZhUVY9TRtSAPKEw6QrsJ6v2B4fhEuzXVmJU95krTWfr3kp2LTEAsJoFE6kG8vRnG55yx1E4X9hSkjWi",
  "key3": "qgtNJzjEqHAp7EQfzzPixSVrPDwyTo4SEBC427CfoMrQYtAsZ6xbMkBkDXT794un5RrzYRbdCG7A3fuVCMMT1Qk",
  "key4": "3PhBEwA41Fnfz5gGskf8rjYjmHdKznYo5u7AfLv4JfjazWqMjEDfaJFeJEtb71FC5zDVTzdTJVZdUukArZKdwhma",
  "key5": "2uwuco3s1EL4pYNPrPbhQP2QYp4wt1E4HqRWvvwL3yhVF8d9DUiaov4XhLUbwkHtZ27LMCGCqF6gn4LxVoaponqn",
  "key6": "4Vqe4H1VsQcVyVNq2RMdn9xicRqZLrqjmW6t8mXBpuchvYXiZ5sTegYZEH2i1B4BaE1d8RSDH8t7iGRkSMxdKXZ8",
  "key7": "5RoWpV6nmkjwaGVo7tUxNh7yGpQZVTchUKPA3wzSrRvTt5zg1YhdZirNKnHDvHR979g4YVGij5kwS2MES8wwfG4F",
  "key8": "4D1uV8MDKLeEdyetp4cdBvmPJuzTc2UukUh1a1UgjdiqWcTjxnurCKph3euYV9bUCkRFyErXtcKbBfAVVfZrp7sY",
  "key9": "2j9RMwwRioSxoG6kvDm9c8K65LXKNwCqpFi3G6UoUPdgzDuQGw8VdTmdVLcPBKeQPvyqWFPtUJRGatSQPbQR1W7M",
  "key10": "4TYABdCaVknLaCChrCutMvms4XydxX7j548EJgWXpBf9NM5HHhtWePppn1LJ5K7KDE55YvkednUrhXknhdeseuVr",
  "key11": "3rzbuxhqNiQbNPVssQLAMSqfNotVQcjQ7twPArEDzdwaXcg1Whnq42enAPTEEVGsyo7JrfXJWQBAzqBWKn3ewryc",
  "key12": "4tM9zqDBGBV3Hqydjv7ThJjhuYySFLmHfbAV33wCH9w38yjDhVPeqdRtNEXn9haNyEbDkmXPYF4TjmcWZshdKJzP",
  "key13": "42FqXFzd8mQvstjqSicjn4ZCkuVM72Kj2biL1XBpwguoZHFEYjLSynHa89wZaAcyF7yKpHaHFmzrXvWrmcPLhXHS",
  "key14": "5VqkYtHiphMn91Tp1v17FZ3ok5gPuuE9gjUyHMkgM9XpgXHq3ApRmV8TVGqiZb3D7BBT6RpaRkwTmT3Yyttg4VYs",
  "key15": "v3A75tVDvJMbxV9Ue4aRa4tJeMERYLZ3gYaenieComppwBh4UmEdNiFiT9CeFMkyByPZmc7xq8oVueELjc3CePM",
  "key16": "2xL4Gxq1RNMUg7jtMymw9jJAeuno8Atfd4g5LHGyinJEg79cdQ6kMRR4DJXar3QYFrcALWAER43PcXk7X3gVvANv",
  "key17": "59od5CZwxxb8jZvWbjfJT33cbXjfGv2WCvjUc4LcWyiaqvGEWejePvtFxKanpoXLWakEpxkQ3DZshZP6fBMMvH6s",
  "key18": "57j2t6wX2Rxuwk8DwsMAP7EKXkqE99KGi1feiM9ehzjG7Fnz3taEcGYaQizV4w4coc2LrqF18AezeYQ1nhbNBJ5f",
  "key19": "3F4bJ61dkJoceYc6sduy3wzv6mRVsN5kvTjLBVECrWRhLuxsrduxUwYodz3ujN9xrpkRspNeKRw8JX135WhkDWM7",
  "key20": "3VqCKc83YfgaStQNnKmcNAMJAWH6zEw9EEePzugvmyYz71KkaivSzJBaEMzhD7LuA4sDra6ksE89BQmRmmRpVB3c",
  "key21": "2qDmLJK7SF7UQKRBauUo9PpYJts5nY7uQZowWcQ4yH74WYW1VfBs72JXKfHA7nKM7V6vmSRoeyzwqnwzmGQ3Sg7B",
  "key22": "5jerYhPtggGfEENB85tEvPNgsqiJdWMth1oyYjS7k4jM4ELUiDw9xwxBYNpSij8A5GWgKkQ3m4Fg4whW26S4y564",
  "key23": "5QKnPmekhS6Cugou4ZiWnxuNyufUWPaupmV5TF2RiEhCvH7nuf9PETWhote1L6FJEtBNEadrquuhaEf4uG5zybyN",
  "key24": "2Lid8fuc1isHkfwHSzQjVWZqxu8k6TbcDZMYLgL41z7Tp5pRSxpR1vvcgXgXH1vXZnHvZcTeChHQEzjqyQe9ojLL",
  "key25": "VdUTWe3HDvCq1R8xmM74LEwouMseqSn4u2bPcCYWKRMnugzR7kVkcNa7XzqKW4QwbtXLmQQQJLVyPCiM4U7JqA1",
  "key26": "4ksEfBnMymUwxHY3isKwP96muk7XXtEFkFC6SCv6pgDkthC3tnT2ekVa1ZSSfJA3wFy5eV1Qw2EoC9QvFKxNWnfM",
  "key27": "6GmJn3TkW8DqmMHcYSRC5rkmF7E4iJubnCrByb3SgRpbJUSt2uQJPreDxUSLx2NPuwU7BF2XZYGHCs5UcyPy9hJ"
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
