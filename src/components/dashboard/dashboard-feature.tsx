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
    "2a9q1NZc6M146riVCiczXr3foqKdwFzwSky9C38tLu3DvdXuruhTtGpJ2u4fNJ4BEGj5ERbfftxWURi3X1JH4baN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32rU42vWi6Skw7gNsXoad1cn98wxWnuy5bu1sGajGiZCFGBVw9yeGmixwmneFap9qvv47RfcooBmFKEzE92BKt1c",
  "key1": "5UAnDuTaow4jCeFMbNY77rCwFMJZwzyi37Fie6DuS6wJ9JBz3PvHany4FLT93S5HBBpFR52wiVaRemM1kd2G9heX",
  "key2": "46Nmxws2a5eanFZaUsd8cRLNG5PcZMdJA5uW4r19vsgqqtWcMqzgbRigYRdjaZxYXT6R8i9eKvj7sjZ9TTgCxL1W",
  "key3": "59THX61RzuWUT1UT5HGacdwev93XfRf7JSosRj7Y9eYDQq3F4XPkReKPzfoXo2D691khPTRW4wrurZ92N3dzQUWu",
  "key4": "27kCkcWL2NJCVMAXE13yghXdih7Dcdbac7RS1oaxtT4i3NUNpM9ArdbBuobncTEx46MQVVzFxCig6kTqwg8YrVUV",
  "key5": "58PbLit3EpM6hGjfyc5ryFuqP1jjnr4K3RsH9smKUBZ21XB8PBKNoKV1ZAxVX1MBWAZvhxfFZT9H2TtHtHLD1nRW",
  "key6": "3QJKRtfZmwf6f6UNtiQ94VavyzXmDCDxL5PdebpB9rwq5jcqtP2PGkhZBFzz4KswcXPrZBz2baPCxoGaNKahYa8J",
  "key7": "43XQHfEfgzxa2aqzXvK4ARQgj3Wr8Wxi7nKaUj3HqiqmGuQa9tkGbCtHNTtgHo2zdNYeNs6tPZb2vpbk3juhBhKF",
  "key8": "tVzHzyQfaYmgwp33HyqMqeBWbLRck8UERM8QrAxReBjN4kFRvroitH4sfqZpwJnTzZdtKfqVz5woQs8en8FRzGR",
  "key9": "35FAvFUND8Esxc3nQtXN4a6Reft7omyZGVUDRNoSPGF8RpvMoFJhd3hix5W9449GgdAC1cr6USZKRaWjdtXnJd3d",
  "key10": "4vFneTYW6HJ9gtNV5ZxhPif3wLzEKCJn552bsUVbVfL9ZnXyud3SMremkJxzkzsS8feMUEw5oNoAz3PcGBkAacvV",
  "key11": "rDn8LMZpFZw7F74v4fqUkctUSYDAnVs784AguRY1iEJznYGEaXojCnzwm4vPu752C1RZoob4amAE5qHccaHnNpS",
  "key12": "2TDayEDcpA1SBsLFnGC1V2qkDcizWJ6hL74p8Cu4E1DPsGP2A33xPptHDbGioVytJEZAQrPcMW9yAGGjNZp7TvsV",
  "key13": "47epASwbeBjXj5m8vDnPr8rMX7y9H56K5BvPiaNhknt2teWHoVP2uM1y4M35q37pBGxq8Rt9DLkEov5pMqnhTy4P",
  "key14": "3DaNpZJbpTrfNmdgu3r2yD25i1eMv6YT8yNtHu3tNFddrgmJbKfrs1fPAgdR52cNu3dMY8tr5oDxZmwPfrkqQGyL",
  "key15": "LMgcVgcDTJL1Lcb83htNbiiVtz1SA3fn2BvPeg1rASoweGX7RXiXfMKxSNXTuLqNnhw1i2Ny4x6zwjjGMzQoT9H",
  "key16": "2mTkytmUFEmTzFvZVvGPjJFFYAzjUuN4DU7LAPFNHnUVLHLksq5wNQG9xCF5KDsmLESc7oTSrjSwqnogpaVcfLWf",
  "key17": "6WvmjHVdvRSBFiVqND2pEyrautPuUyiGM5BPzuBHV2y7wz9m2e4qhZ21D68o85BPi1PQ4B1N5xAz3LXXrDegmZr",
  "key18": "PX7ZLzgGZnXqj4rj6Wfn6iXrZD65Skj2BFGyDW82VXG2vH2NATEE1GWVkWZha1gxQH2VULsumCQZz6Qz6ZnUGtF",
  "key19": "2CzKqotcs1VjUWRfxyFHXmkrpkfwS52cwkCBjtWebnP6uXq5bXEbou6V1NAtkmfqF3esr9DcFH6zDocVsVTqhKgW",
  "key20": "4sArykg4vpJTNAUfmy8uhyE8WADS4tMaHkbkwGihaMPyPNXizzXLRcr5SHgjUqHVrHmoWgP6nDVLXvxdJQGv173b",
  "key21": "2yE97LxxYzzitqDkytDjMxYRdhaTcXV4roJQHhrCubGwKrpAVR6opwbMNGf81pztnycmYadswZGHomyqGcgaQXWK",
  "key22": "2okkmt8WzA7Yurz2WSzyAW1WxiMXnAssg45PnotJs4Bn5YTDfNc17KEM6d5vdpnvjVkRDCZHV4EWL1jfTsh7X2do",
  "key23": "4AN3M9gr7q2BZUjciriNKZw3qY5Pw8XgB93rznzsRxnBDkXrzVi7FjvzMGMUyzpbFVqtCgaE2EtS8XS7dUoTA2ni",
  "key24": "4rdv1vqxibH4UhdLPpU9hL8NiAvsPQaEgHnKdL2LTGPpMVw7Kw9CXbpJw7SVhMtrTEhVe7vkGRgL7oqfwGyToAaG",
  "key25": "3rBQ7CE64bkfi9jEGKbXX3WsXyw9BzDHtfF9dXATBT45hwDqkwpLiUnH3j9s2vGMHYxkvoJ3NhZ4mbZTvZBq67tf",
  "key26": "3p9FnhvAEevgfXxTDydAAHQ5srybbDXUi14gZjLNFjyoqzw1r7qELCSXdi3BCzpg5CrTgeWpZ6nwn6UemdysLdae"
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
