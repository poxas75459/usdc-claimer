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
    "WADEdx1yfuz4FP3d6DKt7qMFf2r1oJzknSBocPLaCjBoPqxxDGLszP3LwpiyCs9EixR4cVA482Di8My7Ncng6w4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UowgtFGxmMZNNpK9yWHFMVpg1epMoK82Nq7FGqbhJXUzwxbyC9d38688QBUUvxKgABqe68eMyLZ8LTDWL59cWd2",
  "key1": "5D9HbeCCSgC57po2kBKci9EEG46sJabQtky7AnLiz3h7k15RjWtBFCPY3UCBktqMAGZeNkuEbZA57jvCJmTnhKMA",
  "key2": "4L9sB6XZQiauw867Sowsnk8i4jmRmmXsiEmNTrXMu2oL1Uoxu8aftWDFu8VuQQfemyM5VRXaSZ3Xp8doxA8PT9nM",
  "key3": "2vFoL7npFp3G2ZoRiv1GWbdkCNyJA7S6GGJDjiJhcSJ4xnD4afi9nWDmf9hmvwdXve4k3DWRbve3SGEY9ZtGg1F5",
  "key4": "5Fbjj8Y9bLbmM2DvDWEsGfLJfbihgftYNa8UR4H4aiMGFKH6tgoctPt2hL1hQkUPDLDP7DBXNU2GN4tXpUZDi36j",
  "key5": "5chMwaRNt9GrvTAAyycVSLJPuzHrmEPS9FX9NhxCs4NLEh2npEoA9ntecQxCKd7fXdi83VipzGHsNS2t5zTwzCRy",
  "key6": "2pPbRymqEEpWFxXGWm1x6XdE1UcSCPW1EyPwjXQ47aDQEGPfdD6foAKLfxF4n9gZELLeDFbzYqj9LEX7pUrve88x",
  "key7": "55hhE5uce4HDt54tDSsy2iuu3skNAGuNdR6PbeB4fKsBxxtpzbWpzdLpKc1yuNWnXWU7JtJS4hhhfBc864sJPRvd",
  "key8": "58LrqM3Xkmgo21PFs6gTmgXr2BJZb2KVf78cXrhJwA1cJ1vDU7oD9HLUY1gqUoMZEXBDc7L9M31KpeFzyZ8xvfko",
  "key9": "3nqGmeSGE7TXLN1nswQ44R1w6HFvKX6xFL8sonnT8g9zvZZMA3uu3iXf1jp9ZQBr92Tt9n7yxthuT8d3JTY7VDjd",
  "key10": "2wo5BuJu8HRt8A11JPu94r3oDB4jX4JuLyh8BYHBBmduT319at8EXpdgB4huYENRZM2H2CrPQQ71KNTk8zuzsxxP",
  "key11": "5jHvLbxLYeWNnwbbyqsVgvp4vEXeqU5Y1czSdJE6cduX175GDn7QHQtZAAJaffNynjbcFgVPGGANSebm8u1GVJFR",
  "key12": "4So2Hrv9Sg4kjdhym26xAUkpy7skcuFBwXenr84qg5VQEaR7otW5MVkx92NKtjEZ3nEpt28Lj6ot9Gj25Ssk8aze",
  "key13": "4FumttAb3XpAPGRYBfp5gwhAojSH1toQ5wg36P865wcF7moZ49DgHLxneijZANKcwMzDoLj5ehrg4TChDGGwLPNx",
  "key14": "4gKEeBdSw3jEiZTT6LS35xBcQHBoPLmJh77cBZkofvzNDXDWMK24Gv9u8VY7iPdeeGQtAUkEoqjnJTbGd3fZQwFg",
  "key15": "4DvTPh9Qhzuf5msWQ6JmezX67Y7KpngFcgqPRVtRWgHZg6UAo5fQQRVkchpUD6s618juUP378x2Gp91sW8oyXv65",
  "key16": "2PEfGu26uWMzeHd5yGgrwz6dfeZF6mq7txTr1LhK6R7rckoVYouw3UAyrK2BbXDgaWggJ9GbJoEVH5ChYyJvA2Hd",
  "key17": "MrCTcrHsAHfn8EKJE95roEyb4DAAwconGTWLd59EKSw2Yp7FDntYcR2gvTNuPwFjSHYx5Mr7uJA6S7yMxf2PTwo",
  "key18": "4zTtzN6Cb8SZVKRZr1K4PDG8i7jm7Zb4wKiaRZgLvZpxtjCkL59i2Pxm9L3AG7E9NAFED5YkyzdYotJgqJqwwxoy",
  "key19": "3s83HJqdz6XRMTEbtCvVEWZ4DXvwbZp79SutboZNeXS4ydotdorPecxTkwEijdPGJrHxJMdipEoGPYZEHpBAtujy",
  "key20": "2nViVdkjyRxDmDSLZAtrGrmF8sdn9tP2q4hMe5a44DE5mHPdADX5wgxFTNv4UWQTrcQzho4MeHV5RzjsTaoxVN6c",
  "key21": "567kkQHyQqkSYPETCJs8Pcxad95fCGU9sggWAb9CJtrA7U7D6dhvBZorZ6nWf8za8biG44bFoVfHNjiGm1GpMk6C",
  "key22": "2Z8jRacogGRVWSigh6BTjfXWKphH5EaLVzZVtQ8wzeiRPY8ZPMmPMJFEJ3yn7HR4sxHKoB4joz4LWiqjKE5F5ip3",
  "key23": "3scsWFgW5DGEeKQC8D8PjjmKeE3FPLrvtufH78ATXkQamNgChAPfs7A9Tq7UqxdvLCvia99fhEgqRdCcjj2hjLmD",
  "key24": "4fTTtXuYeAHE5E8TNdCL1fC3DSGtJ5bvmZtLFQkKAjQrgefTcWf1M9Z8vN36pzHccN7VWB1wMFTumpHenKQcTqSC",
  "key25": "27VSdnnUp8TSp9gaJDEnUrUYFUAcErDeXHt3bd7Y3TtC4WXEerSkvpJz7PVwjsWPeAuWHsdpzWLx5nWiixXXoCh9",
  "key26": "5m4q6f4HG6gx7M1Adh2WJuDvH8973KPxVfqq3uaHBSZApcEJbUnt3hN7vMCpRi9ydZg1aNQijC3F4aZL2tDyMx2Y",
  "key27": "P8ssfrvEWQsyqXhwqStW2BAqGFBVSnDAnq6WxMnFwJP8kRx4sqTQ98KzqRsVovQeDkT5tDg7Nyzp6iDN2vuucw1",
  "key28": "2wYKUni5Qi4fhd1HpCniMqqJTgDgTAfB8QCK68rqSA15EtEpyKZs693nhUjXP7LrbU3w3dpjSjxNyDuR3EdJsrhb",
  "key29": "4SnpYrRYPczkE28LEPgj3Q1rAiGBYADnXm92QW9tsea1EMrMPj5et6s58jMZLf2wzvBMukEdUZdnXwYp8KRjJq4H",
  "key30": "3XPQJWmyfWEfHFCAuCGT8xK7Fh1CE29hmDTR7ikRxqfVq6zCTUdXPZkrmhULX4gD9udJWi5HGNUaD2gJ1697gwqy",
  "key31": "5pkjWDcYoBjQY7FeX71gEgh1JAwbXXinxKMJ2vT9sSjx231Aba8FaNxSZeiMg9SsPvphGaaB2YmoqKyBe71wqHRh",
  "key32": "4EVKMi43rhxkSTcQcWtt5Xx92odEoEVULEGPdzd6NdcqC1pJ7EkaZVVxrj2roupVxd58gNTfMtdtbxqN6JM6WAVP",
  "key33": "53627o4DudTSTR7iQ3CSzvy7d7P1EBPYWv1ZJhhBECUZLaU5aJHruwt5G3B25i41jik92DP5Wr9tGRzwoa4sysG2",
  "key34": "2k4AQ88kuMJWLn5FU5MbmQ9oGoiW8sejw79yZh3bZM59qPnMpJfRBuha1sRSZTjgBxDnRcLc4krcXcvb4BGSwMHa",
  "key35": "5rqmz1HJa97TPVTBBnAPFHGhT9dK2kdYLrzcXVdnHNK7mwFzhw1giaHvNnwLLTbHcsm6Tw8Z4GKhcoar7FVi72Wy",
  "key36": "3b8rwByRyvDfiAeA7R6zpzmcsgpvTq36SaGdLrTa8f68RN6k8yGSYnWjBuH8t8QeFEpR2fCLPwTUjRvLffD9hUj3",
  "key37": "3mBYDk3GNP1qbS7B2xL7T8gNTwpkfY3iKcS2SKWUS9tGscMRpZBqeVQzyfywQLKE79DXyde6Sz5PDHijCPpXbD76"
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
