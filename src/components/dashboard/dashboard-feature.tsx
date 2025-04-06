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
    "dxBAtF3EDPvuVUoFsQ4WC9up926SARopuLRkGNTc8EU5NP768TWhhhAugYNkFNBugTwW8zedwsDTfdQNQ1zSyua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vsdnndTkQXNLxxsJ7RDQzUXbWMKuvW6JeDhiRD3bqihWWVEybonw1CPbWWrXF6PmtVUs54vPzdq3tffkWE68Ttr",
  "key1": "4ivNnNEgpX9YAkNg1o4N2MLeeASkCHTYSsPdKPHwsw85tNqhotzZCezbwPUGsniLXSLBryahLg5ez7qWKfoaejzR",
  "key2": "3TPBF7pjwik8XFupVW3DGxqBDMky7JpvtFY4TADsC44BNWuuZP5oBYA9c51nhD6bcFqE71jLAdZCnK52h2RzWD5g",
  "key3": "3Vmenai2mhuva3vVMzU4NMsBkTXQyTYtkxbYowfBGZmUrL8z551uAb1BA25X24Kgex5Uaom5f52q5FD34mPLJBYk",
  "key4": "DYnHwbZcboCzHsasvaGri9LFZaU6F63ZHRj6UCEjV54RTyKHVan7s7TtwRqe7Au9CTL1Ts5xNXpT8bceFFiC6wY",
  "key5": "4BGNcxDCpnBEPJUXa7UtuUfJVWi5YsrBpbhnLVSeAg5Qi8jRBmLKbL9CCsGMi5TQLnzMrxQqD6zwYTWXwGPwfAvK",
  "key6": "424QT3aZk31Yb23J1kP7TZbtAeQtCACRsGTRtTHf5H82xkNfKZfMryxe42Fk8zvWrMwpdZEfLVo4wTJRiy9fsDrA",
  "key7": "2LiWzVwkvx6UsDnN5VdExyFHQkWRmvESed177n3AZCBhuqDqV8p5cJe58YZeF5ZuoBw9fGsxsfXgpPof4gEzJnCh",
  "key8": "6mWsYEAkKUBaaMeBwGzC9ZiUzdctLsM8rc99mCagbMcErWSHe4nurFEmr1zB8WVuBzGfvFNGKR4tFUyhwwd61qA",
  "key9": "57XdFWB4AmNekngLEma1sokY3HpM5UskBuyw4ZjHn5GfySoBUMyioXNAZFEVSPLeXwsfvfSRcBcKq8WghhvLNMUV",
  "key10": "AgpyALWCz6YPXPLkoQAL7tKTzsageHp6QA6Gs3ZrsUyXF3pGzecU6VdMNG2xhG7j48myyfTkKTKWmD8gYn3sC1L",
  "key11": "4EgMT1rmPn1dA7V8QzEux9JvpckFryJ4NXCQA5iktcDN6k2hNDmMC5pNeFkE4yp4XuJBXs44xo7NrL1t28sDSppv",
  "key12": "2nCtR8HHsa1eLrQQGu35xsgxD2zUxeh7tmfWjNXL516e36rrVp8HcUDGsXpFTDUpkQu9fAoB3xyMCRrhDoKMerbE",
  "key13": "3Aa82SzfDG4RjEBjsoEYeux5YNR4e7z4dh5n3SFjt5cyc4vGNAAwk8bhPLWZLR5eqZmZjZ42unHZfdePhnop1Q7a",
  "key14": "EVS7wxTHMg6ZH2oKW31K3kkuAfVB8p7pdDuixaQctzDx71vntyGcTADe3Rcf9fKKT2dH84B1frmyHM1MjMS2joL",
  "key15": "2cS3XSnM8M4F3jCT9QL9nqAshzqWDzk6HXUsusvC6xaVaxBzBPbhqSwyjHqsJN87dBDQnDCu7RwH2M7k6ABMStwp",
  "key16": "nSi2v3qMGP4pi4CFmm19pvHBy9rjXvZNtKHr4NJr1QgEvEkE6xBX6Es5VDKPhFnzQ9xYw69pZXuuLeVfZc2CC23",
  "key17": "3pe7ZCYKYBgnwmJr1UYU7J4vyqhsEZMrPp1UpeKR26FZHdktCXWg4Dq9Dc8zWHmxvD73JUoZd8wCSgb9av1HULch",
  "key18": "5HF4JveHQQxeD3jBraY2uoLSJDRHJTYnmxhbDv3dXfuzy1Ubq2T5HMbGJCDkg5RZS4MwfEmQbLhRYVqyD9ejXeC6",
  "key19": "3fLUpsoAZKUZ6q3udVJkcufeQBmGCuQdaVHnsTaYfXhowCJBUX4PgP2AidCHHi1ULLoB5bXN7gr7T5XaUEF4MEgi",
  "key20": "64NttazSN5JPtqQKHczst2nboviFKaHNAxrgea6Vr8taZJNHZ2JGpzLGZActwKsYRM94auoRbeRb1N36HrfH4CYN",
  "key21": "M48JtcfH6wPGXFfGkNa3VfbZje5UjzuDkCoFyZ8dtxC8ZvkTjxxCfoUVtRGCky8byqyFLuAgcqzW6GG97Fxpaee",
  "key22": "26ippuwx1eWbW6BTjtNxc8HCNcdqi5ivkSgTPcSYB9YwnT6J4AoPA9UxQN5bzSmBTGSVpzm8n4K9RF3yRKNc85vA",
  "key23": "54qhDZfvTHHw98P5ZY17WVuwS6UJWce4JVQ9x7Lvt9vjMPJSWRT9FCEKh6ydCs4x9ZoZ9WANVNC1DugkMQiaNKnp",
  "key24": "a1hzPPkYLvFrkxLavMWk1WH2bVDizYdW3AaVZkc4jtV2D7SFsXYb5NaiBKd5zHf96rhHPTRKxzbyff5diM5MMD8",
  "key25": "YTkvgimHgvk5HRsCFTdqV8SZvgDq6RKskSPA4u9cd7KNh2WPGNznvngxy8bcLswh7QUd4Fu3sD1SvUkmUXiirpD",
  "key26": "5J1jNVHorHtDQJh39PWA6jWvbgkQAKLPNKrjHnazLVs9KZcZ2jAviebzQeY3xXTvnvzuQMp2Mi9sswNadkTaZxyd",
  "key27": "2iVQsuV4GAfBtrisWZep2Vq9r6Ti2Yn217MMtvQUDQsk5FVCHdcNwyKjXPjvooGjoVPzrRUdAp9u6hBX8sNA7DNt",
  "key28": "G7TouVE3Xy4Ju8sihKZYE8gaca5kG7jZSm18FgdeDJhJwp6yceM39RsadA1ssezn9KJMu75DgEaTTEgKUQMpaVo"
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
