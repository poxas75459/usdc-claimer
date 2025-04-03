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
    "2rB5Zj2JR1PtsJQiiQRePUsUnS4XxC6fzkkLXEZYsZzUDs38gY8rcf18ivU8merdzxSYuD5MmtGymYzcxuQQQP56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bf9f9AoTEkQ7rN2jPp4typbZqLGFEgRMbBB8JU4V7VC83sXFpzFyGcu634MyquaHNinmDTnmzoskbt7XqrvRviU",
  "key1": "nXiiT6pewVR49P4htnBbECD7KRFRbSv9ww8F1qSchsiGZ92JzSL4wFYU1eTUpprvjPxth6yEjhpprcjM7Lz1RAA",
  "key2": "4sy1pF51hQPbzDDQpXL3HhXLTV2ZEA4XjxAdF9sSp8m8Y2r2Sjhd25pJcfo7fkH7tw8yydGJ6LVaXRupctALwi5Y",
  "key3": "33DcNhkoP58HhvJWgMUNPJWRPeTdU9XPQ7SC6V91VgzDRUQyhRuxa3d2tPt6GyQ6jSpb8WF4CNq8KaGDcW4ZBkPW",
  "key4": "ojvw3ZDfz47N9njyRH41VHY2KgcvEh22AmQjNyMXrtCZdTERQdzyVWuQ6EC2wzDjF1g9BqngeC5G33vAntbgzHu",
  "key5": "36aB3xvmjW6BJA1PAcMVnKwUtvfd2diDczDtKLz8S6Bne1XPMiPvNV9MZbWJXgwzbXvqKAmuNVWUy2BPHAPi9KH1",
  "key6": "5zxZuos2M7AwpwjuLpJm788hPn41ww3tmeGvLxV1eqV7AY6djTJsc87XxnXoStVx9bZaePbDzmrnFa7WATVZ9Wpf",
  "key7": "RZyxDfAupgFsv7JpHkDvLnWd2qn5oC9DscJp6nvASgonEJKUA59Y75QMPkTFn8mPeeop1a4Za97QBSUQxLeDJQ1",
  "key8": "4sNBSV4HMBYtNYyiS2mNPZTea7pXdz2PemyJcBxBccx45b9eKspRAJ3BWCMLtwkAVhkkvU2yRoAuV2oNPKbBk88d",
  "key9": "2FU55TKE4GP7n4kLkVbJXXzhf8rmfdKcyj6DKRUWuRbavaJo2oS39HK7fGH9TFrwbVBt7QCit7DtSdwCxa7i3K2z",
  "key10": "5k8chRQkvCaqPBThUnLNKxc6eV66uNsXpmFx3tVpr6CgUGy2L8SgZq2BcPUDJUGRg8L7oLnqoB1Bi55tM9yoAHBv",
  "key11": "44mRHuA3oj25M57DztJUMQfVZkz92Kk7pia2Lw7rczP9MgsbE5qUtBQ8p7SmfWwcCHErhM3b6UNWgWdj1Yx61au8",
  "key12": "AKjHLFRuDH5zEmy13LgDAwWT7NfwFTada4MbUxvTCxdteFrHJ88NVs57dHqfU9RBf1rGCCLJygWE7unUcU2LGTA",
  "key13": "3rk6nEhLnAPMMzMqNzL1LpAdvE38c6sqHp3PQXvtgRVzChAm4ZgAdC8Ea4dut78Qv5dGybTFFg98eBXzuTH7mTbG",
  "key14": "2Czu69zWVR8eZaBsyn16oHCWBUQmSYZABT3W5iTKhSSsBRNSELxjXuDUSvcavzfT5Q9J5KL75gRTVnyPxuD8Wbdn",
  "key15": "tsQqw8VNVhvVyJZev4dqiRKtqxHAsZHS9oqkLfrr3pBAtWw9PpSf7NkCUfM6kAGnBNgcBwKL3KnizhPBskdQ4fN",
  "key16": "3xzEYxDVcYDuRNCLps3p55XC4RbBZS7NHDKhueF43JtxzVAPAiPv1S8mFxEGZ6TYvWMdL2eXvD5rXxgKT5xFv5oK",
  "key17": "4vYtu5vHgihwhF7RjWBdB1ATTezYCgAMwEttbhD5RmWMQJQJoHSoTVRaCkpUxJP7U44ufLk1zxEKfMiWncqZSJCp",
  "key18": "4fsU1EzzCfZDbHm4t9eCebCUmyoCvajtgq9nAdv4EmFxFJvu9SGc1omYraMkuvrrLkbY9wCtX9b9TrdmQKKHGLej",
  "key19": "4To4xiE1XfpwsMrgdTxX9BsweMBPJ7FoHzySTLJ1uV5iSQrKSc4jpfDKx8hMLgAFzAhmGFRE3pTBxsnyvkp4sWZ8",
  "key20": "nDWmEkX9puyDQB5bdVih5DygoSescx5Es3u67aNuz4dUbGp6iv6HTY5kAW5zxSViVNKibNGup7ngtXwDVy33hFQ",
  "key21": "24h3tqTkxKpCicWJvw3QQsWL381C4C93FCbE7rRuJcmkWfGYYTZQY25FSXXbjvUvQHqAwkUMGh9HnB3jQMSxQEqH",
  "key22": "2Pui7bA7tHdcJggnRoKcCCnPi3Pkv9AtgkcdztWmzc9EP3uoHbTVuGcFJbQwDcX71oirGVkgaKPnMN2U686YAqdg",
  "key23": "gQDaHZnTvRuS8JdT191NX5SGTpizHFaBQX59TpnsJm3dP4x3a5aN3mkeVVK5XJgdMDarwEGv87pEHwXg9LMFGBa",
  "key24": "2niDCoAak5vLXQMFe4coUeQxKKdpJQ9aM9BfU2MhWQWBB18Db3rDRWvMJquirUnW53vV9GTfjb2398UtFhKEEnpP",
  "key25": "2ZRCrAhZ23etqpREws2kye272A1xnGDsJnQ9ReSehcGEidWUa5cACcYKnb5cPBvU9DJ3HPj2fGKJkqnM5HoMPc9N",
  "key26": "3qrg55vz8vNcvsuzcoJ9JS4Hx5rQJw5NLXfc9MZ2sKropqF7EbApDhhjTZLJzkThs4132PWPzU4kUbUgp8akpTuH",
  "key27": "3gnoZ5TtZG9y5yLsxZkkFuu6RbvfkxBC2YQym8LL3xkfayXvE3maixPMPzQ1NQzvHCW3KSgWSViT5C3eHAu2UaQa",
  "key28": "2o35T7GwcaFC8JqiebaFNuUMKUYQan5UHDcK3ndL1RKikcUaPPMCq5sK9mEjdJ6xKuo8qBpgcRigARzKE6nzmUWY",
  "key29": "65b6Si4iNRNUtzc8H2AJbFTAQbqpp3ypythFkThFqwnhAh99AsgGAQ2pA86nEvv9WbofJa4NobWxj69V1GMnohGV",
  "key30": "4qpz5zfpryqhFcEkdDTKrTL3BXJ9CK6G4MR2ca8rEuNahK5eppANXsFGqBusnWJhQvV6u8GuWv7BsJu31gs4YPG9",
  "key31": "5MS73FGQjP8kv7qXM8QBqsPuvzeLCJD585kviAE3qvkx268hi793pyQMq1YkvnXm4hcQ2DuZN3ECeJYnivoPjfJL",
  "key32": "53jGWd2TorUNpcSV7QTWSni7PyqL3QzSHxwP5Tvkv1h4CNXm28xPXgsss5roVCnkGURsFkKrkibvrda214mbaXtR",
  "key33": "VwjxL5tebwBP1bKviod9w6otchPtN9NUHukAoiDp9tqV55twfJeBu8fNgZdYN5JRMkiR24pz6eLdnrGLRNasbHk",
  "key34": "5BYkPZxsYvbiCsXZnyRNj8mCtBfkseuyHvJyDgs2FqAxpupH2PVGRg4JfNYUTBuYUsRkWtrU7VckvriYCMXtmgNd",
  "key35": "3xafqUsPkXaRCpQoYhi5EYDG6TSW1xji9uZtAd6WrPHFsAG4ntQ1igXauXgb1v48WrRhhxbQYp8sUx4Qa8yjX2Nb",
  "key36": "3ysHd5M5SkyL7keAV81LDRPn9K4N7xaCaonp1SgpU84AjzentqJPgQdsi7uxZafo4CuuGEPawpZtoapCXL9x89F2"
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
