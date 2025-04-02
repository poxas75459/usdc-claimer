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
    "4XTqQAgLqeqiWRapb9Q7sQzfBWXnUuJQYoJciWLMjWyXsj7pEBNSKgpceN2miCtiPhPMdk8JztAYM68q1PeGC6xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EG4o36dGaFd7HQhkgNtiyPfbdaypmTK9Co8Jh37nM9QoQomcLshf5XkCheLBbXVkQ19vphJLYJ8Ho3KJgdSzav9",
  "key1": "5Pga8HyAuyHTxUeWy78HYWggZFdeqy8UU2ubERmxA2SCH5R7XHs6GwmWYJoXmZ2nnYHpQ1yN5KFcFW6fCQXseiwA",
  "key2": "5KxgnL7SJcQZzBs78ArYdAPcrFMZWiXBAsBymVqchU8hhZPTGX2Q8FyUeEgxGAdYJjnVuMkfcr4eqG7B5Zgkh1y3",
  "key3": "5QYeY87mjS2HzzXP3jtfnog1of7uktqRFSyFx7JfhPtazkHKKrXs7H9fX4NBW1w1M6TBGZbizLt3jgngQeuxf7X8",
  "key4": "N5gRo1a5vqq88kinYFFiVDBztQA8owKnYUBGv9LmgryZ3nTjpLyBkUu8zfvArWQZBXfmRp6u1fkrRUSqJkDrnJ8",
  "key5": "3y7iSUhdudikV3253FRWDYKGqGMDruiRyssLvnnSQwY7vg4a2RxfEGB6c7ZJsVX5HaHmqFX5gxYinXm3Lp3oyVmG",
  "key6": "4TFd9mQVt9SdvZ5SB91fGs5msmqd4FLsGuFyFjzVZbnXTKCuMJmzz96uxJLBxHHMkQrKauR12S5hVQ5b2xUH8eLC",
  "key7": "37HxXNWjMq3eduee7ntDAEmPZ331mCANSnnLh9rzxhhR6LApH7uu4bav7Lq894ZFNCAkc7GGQojxoSADPwSSJL3f",
  "key8": "gGWjaYWcpE6bekZgdkdZDWVpUbDoLQANgtEg6SuD8og3U9UZpdbH4nx4MA9oAPvihmfZDpmHY77gEyqszrHvjHz",
  "key9": "5p4jv9LPaa8DEXxAr78gb67zNW137vCXKQhJoMhRawMhavoZqnP3ZCUaah1TWmBJY2e6yuS9WkuH8atbqNDU4bw2",
  "key10": "4GTT3j3S6hRwX12B8RMMnjbhzfHdrW9z4A73pteiTGnYRVKpYR1Ecv82rqNJx79nDnNnAaxZovHn6ZWogKSCCRbJ",
  "key11": "5pqn7yGgfWZFE6Qzrh2X56okEVVYMaHdnfgDVwfVF2Fpq5eRqTJfw41euC6uyZwm7br8uHeaZXVD68gKXhugZMkN",
  "key12": "5CUfZPpw8oFhvyFPV1Lie4ZYc9HhM3YQNGk7YvbED3MrvxoMPNukDk63hLZguzZpqZxi2yqCRaUazwKzR5Sz1L4",
  "key13": "2BFgHoJSVrNDYFu8scq4gET9NwEW6YyuVjoLvd3ANyhNG8TPTR3AyrmNWq3Y5tinnosTMzai6aNRq3cnv67uZYxB",
  "key14": "3UFtzvkNHuTSf3HDGpu3AXhdfkudY1qpUN6XP31tc5NWu1WMji1ahEtZeg9NGW3cR1Ppid1qWPnbz1acLbcwuDUF",
  "key15": "3GgMjhBR1r7AfuYqJCn6jFd8EC5d5cCAfv2adrA7arptBgqpevxTEiU9ZrLkEYLhd1hjfdknVtQ8SApqMxYcCArW",
  "key16": "3Cd71i3AUcBhnJhWW8Ck2iPAzoEZUXqbRcShD4o68H2nnEiSFkmfasS4PFmFgzRECnRWVQR9zQqRDC2PMe1LWtKH",
  "key17": "dQeC2q7uPichLazezGuBuqVi7aEyV6hX6UGVmAYucbEHfpwerDWHqcvdNHRBLDsq95h4ZjsEEeqnzVwGcHzgJBy",
  "key18": "5a1PUZyaim5RRPRrG5ATA6rBph7QSsJ8KdjRp3dEJD1UsafJLHGmVkdgHFEJkgHthWupX4mzt9792xYUsheqDqrd",
  "key19": "4r9Md8eyFvfcBccCwroT68dnYxPggyNk2Gtr9N61ArbkTcUR6egjH9WkUiJZ5JjJjwHAm9cHsScXfivr6pGKzXHZ",
  "key20": "473h95NKYEms3nM5AN2Ycr1b4bPVVvoynj7XkgzLHew3RL5UpsYoeDkDyXyB1ESJxWab5Q1uLw5x68HJtpNNNW8Z",
  "key21": "AeBVH6o3EvszdZLUFB4GFASnSMYgno2ybjq8rNcusEqhyvSunZ7B2jRk5Biaha5CmGXnmABnVAw7GrhMvD8Yq9Q",
  "key22": "61eUXPkqdzUYU4CPztvqkHqNGAgSR28t39eMvpdHuLVhc72yJEhWk8sWE3dfMwBG5aCZiTVEwXqtEr72YFbDPALs",
  "key23": "2tqqnkesCwXpJieAzTMjLaLrPtDSKFjBwxuohQX388NEndmCw152vakAwzpi88phmKgLHjrGmyP6GhdLn6smbvGR",
  "key24": "3MZ8b5dsyKgyGSKJRr3VZfU7gXkjYPbYYMhZ3wfV2wm958cyQGokW5k3peJfAeFCRTmiF6U4u8qk8khGa2VzT4v5",
  "key25": "4WiE5pg611kfuEfsbppVAhouZRTsTbearg6s1xacTBSP8BkZC4NVphxVzAHR1fDTxgeRvRhWJFrhncv85Y7r5D2F",
  "key26": "mguV5Ai4bVG1s5qvF5dYe174rtbxtkx2ct7d8ZJwG5H55R39NeXFziMYrRr6bEBrDbPW2aTLXqr3bKzdtt3VcnM",
  "key27": "42y6DWS8w4M9csHLR7g5RonY6dPdur1XcaksxaKgPf3cviXjYzvBEsPe2emavNQJqbWpv9ZYGKhYRjfUKC79umJc",
  "key28": "4REXnzmdVCRFd2NvYTAhCZN2nBvUN9Hrkj7CHn4bBTAeacJAHTH5WtWWkWsG3jyieMXbw13Wax5HP5RxiAHt4QUu",
  "key29": "3dqTX6ygWnXi56Bs2GHgkF6P2bHMoTo56NwANqfSwbVDXxZcDL3DJVEwM1siVq71oVcaohooMEXhy8qsYS2eyoHn",
  "key30": "2WEpcL7Pr5VFVsq3REQa53wDsdywLeb8N1txeSqkhbfqMZJWgyw4ipB2rcHe5CTuR7JJJJv4PJj7hJbf9zmzMk2J",
  "key31": "3Bii7Nz5zZHXEpx36cS3V3N8x9o6ZUURGgbRAvPA7em36jTpP7TEwmJR2x6BpFAP5DNdJwuFhC1Hq6CZ37C2LKZC",
  "key32": "47JsFwKStbVjDVDXjGG1kmJoZKYRzLLoabxznyiRSXYtFXcSHVPhaCXbZqo4Stg8mSGiUVA3iMDx5mQGnh5bPnnb",
  "key33": "3B7Saaxv1SUaE8PN5s3V7hfRMsQfG7W24uBGUGepaUqhgPQ7EQarYPND1AwximwcLSEPVEpYH2SjSTUKibpqZLQf",
  "key34": "3EfxQWPeinQDANSAfEg2LDfzK1wjeQKX9dxUWbBApuzFoJdDZX4qQ5QBjAkZNvpcP8sS8hU7mD6mGhKCZbLsFHjc",
  "key35": "1zmDu5TpT7Vi3MaTn21iNTdqwFEv6MBHFn6GKezEUNLnudAfXVhZrQrfm6hxeMX5gESm8eDKsUFu3TMTdzmW4Pa",
  "key36": "G4X439cM5jpXQXyZ3amJ3NJwH9sYULPwANi69CmonF8WVCrVPaS5mU7VDNaDTGAsKSauLYioT3XoKaaVKLNbP3u",
  "key37": "w8Zz9LHjv8eBQ71q5JAmmWPd7iCxt8voxXYVDYjeExqDKNYRekBSoaj2QhwxLbd2hmqFdPA9QEvxPM6Gqi1a2Vm",
  "key38": "3aQSSmaMAWb6i9XwmdKGqjmsKt5nvitq2hMLs8JCwJi336SVF49YoT9hA1o8eWK3A8JPGwRHqN6nU6VVGGhvu62v",
  "key39": "G5gRUBBYshxUXhQuWr9BFuRjA4mC1pxxDLaA29w186mbcwFQ7uodVLSkz9uE86pAF3KHPo2iGpn719qS1pyBJ7i",
  "key40": "5cXdB1etmZC6ym9kWd1KVTLxzYU6aQNUjLSwXecg4vRTe1TLcaDZ5rriSadTngL5EnQcLzV2CAjtPFsPjaot9KGP",
  "key41": "4RsdDpc79vSYsU93p6paJm8qesqEQt35NsB4GHVpWk1t6Lha5tEboDrBwRmc8CYpzqydo2ys9xsWUdp9SbG8g7W8"
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
