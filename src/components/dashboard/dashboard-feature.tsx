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
    "2kHr3U8KXHTK9NYxLpeLofGN7oWSqTLm5KkmmXkKk724kh5FfbiWj9wYZuJekAYzzB5o9m43V3FP1nZLurYJSQ14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BPk17UrjxAXTskvBZiUQEXRoUenB82iNj9ebyRgq48714T1oSvEDffYwPLEya5747ynPiHpDjWPDS8XxDijQCmD",
  "key1": "38w85FRn8EAF1cQSCoqXx7C9g9NwEGnCXUeYNbAjWWGAMzYA5umDPvBwyipDRUyQ3Mtei5GJYaHHKoucULzw853G",
  "key2": "1Jdfi57gaNjZRTDhbt4Z5f5apD9MBX6uswrTQst26uqzWbLRARRkv2n7aUKFA3Kc5RJTpLctHgbGUvjwFyP1hDX",
  "key3": "4AixADjkgrHEzc7GXtUWg3chJPWompE6JnDTAcbsvU3Afax73iJF3kubZqZv5GCcQy7ezpyuYMoDRT8bHqoYCGCq",
  "key4": "f2zrErWccUFnYhQ8MWMFoihco6mkzcBJ8x9ZMwt1KaRrDUoebBKdjAVJggmKrD7C3URyYAVuGsB6ah7kRmbdxTP",
  "key5": "3rYD6uFYKyXTjmbKfKE6rRKwFFwEzE5U4A8KVob2WKggp5GCr2vwZVy4NwdwDWTTMeMNunYuaZfR2B9pZvz54gL2",
  "key6": "eCUiK82bNQpDNSzdgHwt1sLmxtsmEvxdxNNtNP5HoCprBrdhokKG9rkKX5foxMNSV9W8AKz9H7GWeDXSdnbvxEK",
  "key7": "5rGoqLshtLx999J6zeEDPxarSUCH66qMpd1DvBFA8zSmqVZZfd549MH4GfQPQGpdJ8MR9Nt6SQQyBbSf8qhaebtn",
  "key8": "A8t81oeZifbvVLVfnukZa9fWZNevGcGVNwPy66FSaasbtQYQj713xxGGtzg6owgd82pHM7AqASENRxwSfVP4CbV",
  "key9": "4qW9gx9vKgYjPcSPDAL6duTozt5LVbbimJuxUsiFVHujbELPiRRJDTgAXErzuVFwu6JYZAW9igNMmD3WqQkCBwq8",
  "key10": "6e5bAYUJdXD4GVXtbpQ2zDFK3M7Qp33Jiszbizv8imP2JTwYJjr1bfoBPvBdx7aexgLVaerHsK1yv2fdYBSNx5Y",
  "key11": "2vN3QBkE5nykmwkhFuqGxpPyHeiXjPezmY27WXfFF3uB2GsRuqLHxeH6Df2VrJkHgH7SFbisusovSurKaJqwZVRZ",
  "key12": "5BYzxBDB1S3zeTwCoyMXfQTTnoyfLFESMrG3DwUh8G2r2jSCwQcTfyV4FzJCRGBT8DiER8v3GF1kozU76dbyhsxU",
  "key13": "38kWnKGKZgqsqPgHhv4uuESbXSmXYMe26kGAsDnaJRySYLmbQqG79RpDYxYnkCTQ6955QorH3RCbjcwxsqVKF363",
  "key14": "dVdSsXZfwYWz4XrbesY5GMzNY2XZK35B7CpCMQTX8mu63FqQHpJz7JHNtXUjM7HaRDiDGzqc9E6Wad1UUNzSijC",
  "key15": "4JL7x4bsSVRDsWieKh8nvTBY9r1jnSdSSVjuVToEmoJvnWgxqRdwjbK5Bmr7A6wTBPSj2KneQpwfSumuXLaJKw9b",
  "key16": "XrRMn2qoi67hXKVBFehpSisXnGEFWHn6zxXuinqpVvAAUney99HKKQffpbf5oAUYEvYGU7YAYAzwZMRU8aTRKar",
  "key17": "2LFsJkzLTQtG9cNDsbmy5wsTmPQeT1muS4oeLAPkY6qTCZrpzm4ciYce8mPLWhH3FsqdH9eJappnAFzmk3NVrfJL",
  "key18": "mPuzNJP6FneJ9HuSqYcAXqfGfjk9eYDGpYSCSRUZtKoYT1G26qTkgZuXL77PaTvDT7ZNENYkxJodtRohUgw3hPv",
  "key19": "3f7N7jFAWcqAYJRSEDsohDkKxRVczX3qLD1TeBSuKzYJvhbwVTNLUbqSkjhm75fyZ7meYFVkjANYmuYUZwGWqkkn",
  "key20": "ihx66VARMS6pUCWfpNbBbLEwd9s44o68JRbDtxBTWvk4qfKi7FQCXFQisSEEKWhpH3HLhQ693XrNL4Su41YThnf",
  "key21": "2mZtMNjLnX636pDsTMjbmcDW3rstjMtqEQdiV3y6JyUPcFeQ2SPKH6H5BFYTiwiXDjivu1A9G2LVriGjtZFU2K8j",
  "key22": "rUhLRMRHP3EdZyadtEjQs7ueqPDkhUkuVsuASyGFur1HgpBjj8W65vi3h4YDfcyR6F8BiN4kKrw44C2dJByStUd",
  "key23": "5TDQJdbsa5VRfF4XUxGB1rvQABxDqfeNHxGLPsdzU23UCXSMH6mkUr9rPgpMwmVeXmbiobFAEHAx4599xG4NVW6U",
  "key24": "2TKT1G74upxSWrmLMRu2dV5s2k6Pi9i8ZjWtGgXXMuHHCPSFzyN7MEC8Gmj1DWMqV5ZdpZo4ndFv3MgAdLEKEvJF",
  "key25": "5JDwxpP52getNwKXT5P7UD49YKutVY4CPmrsR2XGGKYogV7KeajmLrr8xKzBpqoZtgVy1312KCNqaGdtdKe9AeZV",
  "key26": "EwHiD5JsSnoS9Wk4S84EMRjBnQUyRqXtFQnXGVFdtXgsoTWTEwLawzTq8cenbE6FQj2K9JjHDC1gQ7hv5JGPb6i",
  "key27": "4PR8HugdD4mFFt8SG9NcuWb3ENUU68f3sFyogzqUePVKXnNnRDakPj9czmXtQr2hQSVW6JM9Ayoj3QQoYMf5TFHi",
  "key28": "4bdsV2ExxLktmg9TXoBHWq1D8AcHZ4h6otkwxiwHbN5hVZgEc9rpkkxrHwsrCDvoxAhx4axvPXpawGjMcmbC9yTp",
  "key29": "5i3y5QcMNFRyCuvUGCdDd5MzqGemUa1ubjKWJaQSRmadnU2mdv11UShtiB6qeqed6UAWdRXqb8sVXYGFGGqRSW8M",
  "key30": "zg1bAoaVqGxjNotjge9sM83oiWvYu9LQBHEMvYqhL2PQsWmEg5xQEfsuRsXXmBX31NAzGzLQaSu4hrUMPbwgkC5",
  "key31": "7yfji5XPsNZyndZXejYeXMFBm7jYhXxZza8rwMmgUpfByz5mmkGcZdjPpeaxAfP3xoMpCf9FpdTvbejRzJwvzf2",
  "key32": "5QsvMZUKCg7cYimibhERJnxtjU5evy8GjZVT1c3Lccux6Df1NTCGFQLAA3SRPn2Gb4obvA1fq6CpUT8LwyjfUBPa",
  "key33": "483JeZccqCZ7fGeMSKHJvkaDjzmegw7MpoSU47FN7RJwycSUACyh4EnrtHzhDD6HcaVigzosHKXLQg8hGQSzeSNj"
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
