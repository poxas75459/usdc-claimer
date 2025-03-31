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
    "5YVUCKTWrCYXzbfXrZiycEYcb3P96QKvCLxkvcTXxHsZfRAzNN6X1FzSGXW2f6ZXhpu2pyveeZQuXqFUfXJstcVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NaN352PDJFrZc3wMKv8gAW5m86sacTrMETtktXEiEaEJYpEAzqR8Y8wj1tx5R3613CAoqyaMUsWx9UsrVNC81eA",
  "key1": "2b8Bg5ZUy6nihW4wRHsrs1xKf6APktmerXgVMid99uSRX1D5k52Q9xvpSPQkD2XHsp6uB3RqAirr6pUrD1dwY9qq",
  "key2": "2kePvqctzNDnWaz9enFteBwAf51jVFCqveF8QA6iPAGUawwiWffEFwdLZ5cWoo34kHkRK14Sofr1MWtBPG3QumFf",
  "key3": "2b8K921K41BAsY2eFL6GZ1cPPdtAfNhvj9TTW3QxPx2haLwrmixeKQ1r9LhWqxn1UZQ5p2HEzZBz5VuEFDhFToRu",
  "key4": "5KNbsuZmAprGWdPcontYxKDK8SdWTgnmWMM3NfqRaFvFnsmLbnZ3kntGVD6dbauB9QiAWVT9xnWAxVBt1zonpthQ",
  "key5": "4AEX9MZk9hrRoAexjv6PkYjxnVb39LM5i5Zs5ZPSxxrNwprJyQHx88TgigqZZVx2QgmNkkZjPQZ2Nrivtx7RNDoH",
  "key6": "jUnyj8YF5vM1jGB2duQnif2cog8i3U2ZqCooqm22mZ9KBmD3FjXNUBvRKZ7BRWqsmD3JrZbZrP3U2ZK6mbmnv4E",
  "key7": "GKsBKrAds4S8RdqSMxzbTmAbHM787WuCLyCxTQJ1NnEaKqerUQpUtz4y7PGWh4GCrHiBQ9ZQZ78RHCBFzHUtLrx",
  "key8": "3sU9p3ufaA9x3ZobdFyrkugGfjqUupZzUqvUg98odt6Scmk34zqXwi9miPAAA7t9boyZVvGLZGWYuSCeB2VogvHC",
  "key9": "29jbfiWGkS3EHou8BkoAXhwLQyRBfEWjkskLYVbFJwLbtKkUMRzr7d6ZNV7K9jWuSjwwguHS4WutTjJoYoV5VsP4",
  "key10": "4owL7kB3WfWB5tJKYUnh3Gc3xQZTcayM7raHhqejSrMA4JVNfwoBKbfpj4aTAJW8zpzCrg1u5yoQWc1cmhDESEeA",
  "key11": "Ybx6sjC6UrCeG5C9mvdJEZzk7rwmPK6hwfuJgTLUUcZtZ3iZpBux2QDfHc2qkJKGrfX9g8wMhyC1USWhzrWpBJK",
  "key12": "PTNJWSfuieZUxN4w8YV5oxefyvwZVnfbpgArE3Bko3h5xhLwT4T8nPkFpzTZLwyW5ujZZ5szNLdVrLTppQ26w3p",
  "key13": "2ufV38kCzKR3ehW23bKLFUPdACtsm2gc9gi7qqPpwbR7E2utuH1vyYkVeEWaH8zfkcEWKFwSxuYqhs3EirM7uU8d",
  "key14": "aHpryqxZJ68aqwfR3T2x3YGQYDFdm9nGH3qYoHFDDA1e863agGxWh8pqyWKh76QDXStiSfvoQoKeDeHTjHopYjf",
  "key15": "3Fmdj2wdmdPBx2YJ2DKymzsDPYhf1gbVSXopoW2Z4YnwpPw1p7teGu6yJd9iBLk4g3VmuQ4rZuNifbrMDM4HMw4d",
  "key16": "2UbFvsTRh2qPN2THi6MCqtPjiqNWE7dhArSyhEUpWN9Pe2yjfTZtisQisrKxAkBnUcf3a2obhSZjuecViUMsx4Gz",
  "key17": "3hN8wtduxNLjFCDSW9Zd2JVutevZ1MS1hcB8wuMbQtENL5XR4whke5jJo9zghSV1fJv77Zk3UyMu7UN2Gn3x6ybg",
  "key18": "2Acu4HJ1ULL4NfHXXsdfwdJpFk9vWarD65NUvAHPvbzvMjBKdZoF65byXVpHceKLtLYdvAUXCzPU3gP2ra17NsMM",
  "key19": "hv8vJR5bEHTq73AXHbx82KYhL7R3QrDnhMzdXNmrtaLkPBhyS4rT8d2x7vy7UsU7eCfPgN337okFwC5R6rg2jKp",
  "key20": "66fPmumj5nKtTkRQNaC4PECvGk1iyrHuNjivv9z6NFr1F65hN8bo3WGsGZcoRjqzpUNEaCQz1sZfRSHPS4eGWccR",
  "key21": "Bg2sBkUzUyRKQv3fUGrzb33oo6HGN3Gi1HcQbusHZhAV2rgSjLwzttbJAzN8GpssEW5Bbxn3J8Nh8FPZLjzDuUG",
  "key22": "59hj3snPQvwpYLnETBZjSJMa8GFxqehzfeKa5rCWAGPGAJaK5ZERd6H6qB2gsxKKg3MsDYG7YbEsmueh4gzPBm2F",
  "key23": "5zzXwWybb6JrH99JR8qmWmgPm4LbvGQW7UbDafY61G3ut71QZ7nBNWWz7YtRUYV17ayB7EAesckSHmD53D3FnyDs",
  "key24": "4W4LW1TrYhSNVK15Nih4d2RQZFEovpzsMHV4Xw62YCzfs7UM9xJQppmnf7KCH9vDVjMJFAXNiUqTkQnacqtvzrGM",
  "key25": "6SeFMnidgBCC59dqutZqY5RpVuH1FvqMbsZQgdhaCdkBPYZw1Y5YhJL9WCV49G8TJE33ByJkCDHmfMzJKCuFXS2",
  "key26": "41HgDvWvh78ooBk9Gt1J6a54Nmm5Xv66wvggW2oNtS39kt5RddTRboM4aWgKY4WQSVAsyHvRDAeQdCJTqSsADkxN",
  "key27": "5H74z6tgZh8a93BGayPqjgesqkcZXuZeU3QUpUzN78vPZKafnMAGtudiV3nM5Q9jk6MiT4Lq44zDLNjdiNrfQHHn",
  "key28": "43r6Xg5eQ8F9nVHVFvca4F6BPoMmNrj4WUe2WvZ7XuDX4caCnAAGTKBpLRH5jtu9Z3RHxPjmzankeHy6jLUssH3r",
  "key29": "315h6WckMPxkRvLbkMeJJdbbxh5GGb4BmGp9PJ9bVJtsVxNfHxQU8425zkzJX2XK4UKNELcHsJXmxndKAnAf4VUv",
  "key30": "WHTVH1ktKkoS5S3bsWMVTSn6xFatdTtE5qH4TLTwvhxxqJ3nJCJYpTiVU5FdUYfxZyQfpoiB4YZoyW5apDjT2U2",
  "key31": "Nx4gMYskVpLUCnw9JcNe9b9WZVNHjj84A9sxjLcn5ypfmCdKTwEBTX9N6ZY6yRWezSRpwrimw1xwekFPbHQEC9e",
  "key32": "5bZnbLnTWBiTX8k3EgQ8m1Dpqjn1dd4zpaaCVuoQBFF8EsTCpgXdSm84iVrKR4RgK54t7iJ3aEa9v5RhTwTre7K1",
  "key33": "JSYX4fDC7hYba1RJvMj8Skh5ZasWm9T1LaoAKCGMEWuykKFKo2dNX4UjauUbkD3m2gqmAngBDTxXL8hYMbJZT1Y",
  "key34": "aBWE3rHAsUDbq2FFSMKV8HLK2bw26hnxkSzkQM9mHLgbuHuF4bVirQD2pCqCnfbJnvJ9BQhHYL1piwzZKyPN1NY",
  "key35": "5ewhBkvgqmDSmV4Eksw7Cxo6y57RVHQcWcTgZWu7e2rQhmfdFZQ75p61iuusnbsvY6Jjd5HRk5Z4x1jJLWNkdQ7N",
  "key36": "626hfc1W2qyHhG5frVR3FGiReXNFGXXZ4eibJswzkXsEpR1VRebKouyUfmRzfWZHF2uwTJSfehQfmBNatgiQmrxy",
  "key37": "2CaebqZp3TqR2hXpzFXFTgaW8kjpteMc8omRoVpY34AMumtynR3Tf4qe9Wmi7oSzMZfPQASCyv41nqZ3vYMHdDwb",
  "key38": "4L9DdNLe2i1xQNxc27Ni5a9Xh2CaCYmZ2ikm9qFesmAN8ggpZTRGn2S4puvvrNzW6wRHhY2fWpDznBs9QzV3Zqwf",
  "key39": "27FiD8cTxNXLPqQFfPvPGEiUoWpRXBqq2carDEqsxCMTsQcgqVkxzPb63jGHWzBGcKK8kn6PbFsk25CoWBWAki6Y",
  "key40": "spoU4bG7iFtL9uhw7pzLLQ3QV8tntzcPjbGzmDUTF1ftngK6aHUo1U3fBEDbGd55fLXghqQrPRqbNa3eJddzmX3",
  "key41": "LvL74rWZX39faRPpqyheQjFjitfWpuN81eCb9KB9upGCTdNE7zKTMmEtedtSohUQUM6zuBuUfBSqEpuqaArxTBr",
  "key42": "22WzCj11fkeu3T8sZnzA2Ka6B3b6bHYw4SNkFN9fn1t2uNuFAMPtVaZ4gWRnFztdG3qYsSMXTHYj4scwdRAGDbyj",
  "key43": "24rej7J5vaiKRd1Y2qt876cUF1ufUvFQZkqtEPmqS5DmnpDAmSyMGcJR6K3SL2q2P1LCrHYoAKqjSYrBvVrnFfC4",
  "key44": "37q8FTBFLjWMkUg6UyhwFRDAwnpKYDfNGzTKdsTqSJBTxk6dV6PkmAr7p6SWUS8mnkaS1mLtKPxVLKavG5JUMMKz",
  "key45": "51FkWRiG37XMMkn3aLPVCfECYH5ydQNw2cjJThpk8KDc3ZW6nNX1WiDqYFWsz8ad7ZfaR6ZnrYLqtkuKwzM8xx76",
  "key46": "3ndvmwWr5V4C7JjZDpg67iu3xrrf3daKNX14eQV5b7WBbNdKaANCXe9ehT9PKwzHs5UwtXwa4iCusRNFnApreTQu"
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
