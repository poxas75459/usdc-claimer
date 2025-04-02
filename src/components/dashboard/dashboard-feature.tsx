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
    "5WjrnAubb9jiRY8fjnsyLf1DnaU4dFAptXSUaCuvCXPvF6V494CWv74RSSPwXMGbdYmaX46wDb2o5VHDPvQvpfdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49SkojiuSCNaEz4gj6nchFD8ZXkq4tJxKrTNHAdfxq3zE95pUGyZ4x6R49DTa92pLgdibnwCFD75qZQqwUn6BWoX",
  "key1": "5xS8gZGa7DzruJyTJa9FjXV6rrgeLGYB8zMHemj2fCSNsSDSuFraycP3AWq6HC4T3TiEPtoWirZMAmyCQHLV9hNH",
  "key2": "5t7Ymq68A45rRzAYRiMt6EUc2YYig4vRYFGDc8zT12DBnbBqB5jnYCVE3YMDbjPmzAtuRquGYauqewj2AMZ4mun",
  "key3": "bDRF1yE5LWTNfzFWCS1RzA9jXQ2pmQgM4VKnuXKWNaD5tJQqdvehdwG1Grsk5S2fNNQ1ziigEEF4q2qYFqZbRfa",
  "key4": "mrrBm8PcsZCWMd3Cbn9oLjoMiNSgMH9Z86wxgcRnZHysdcz1uYhsAdpJifGSMSP8cmkc4jA3MsgwZ4qCiHnJagA",
  "key5": "5gH1R2JLxSZesw24GUh9BSz8E9nUJMv5egmkBGBfP5KTQCxKfCtdopwgQBU8WkEu33gz4SuBTBDwTJLUJFTAAmG6",
  "key6": "4fqSotk3WS1yAkC9LXPqUaKTeUKegJrBrZ6yTcEMARwYNDyXpXZeWMRxNS5DZGpfDBEU3jV2A82ADJbpZutnjfEh",
  "key7": "3Z2tas6A2MAfq3MC1naDVRsXuptd3QakiEwa8VHqU1xTN1zRDjzhoHTQc9AWEqN7zQMWMJsLTqjWetCEqHcjYUGK",
  "key8": "3YHP22Gxd8sWQ1jHbdyzVcxNGbzd7gnovYe6cUjiAwhR2Ax7L3S86aDU8WykPLnwBN8mpPhpx3mpEXS8WuoqY2Vp",
  "key9": "5hMy5TdCB7KQb1YTxRi8yzz7JderrJNjof6k29osBofp69EpbTZ6UQb827NV5xii6A2BGgnD3mAM2TrK7oXGfGwP",
  "key10": "5S7JaXR8h4qxSppX9DgS3wYSY3qsogUEf2X8WHr4uJHY5J89mdyHfDPAywnzFtkZNeNixk2JFkdbXLQJFAu7G1xq",
  "key11": "2Jt32UaGBLwW2vBJ6RNajLN1uvecTexbmFD8CdGwEXLPLQTwtdLRni5Aj98TykCRNPk1St6whdM7oay2otqrkmZq",
  "key12": "34d6Z94At161Ls8u2or9as2SoR2zY49CfB17EuxEhzvqq4cNntWSoMmXd4JPAhgrucDEccsQXrPhASXHKFM9pmAY",
  "key13": "2uuHvBpitQB4wioTbvGvDxqj514Zv3G9zroPjTNYr2671N4Z2NojzRfUjGvk9g9YfLTHZEbJc8iyzzdQqe2YoQMG",
  "key14": "2fJsUBS9hW4LLV34s41Zu5N9FWetwtoL2fEkzjhVEtF5KGDvh3vHQNHvxZiivdSbGPzwU5hBpK8J7dg5RqpBjE5X",
  "key15": "2WiebhkwSRkykjXaf7emdbs4dUvwWBngDMbT48epeR7LeoBTR8mwAyBDCVpd4vo3Y9hAYgV6DqHwbnqfiD6jx5GH",
  "key16": "5RPRhNyU8rMbcPnxdMWLGzR94zUipED81eoNV3TCzwkLKzSA3fdMymxTYJ9J1bDob6HBJ4BRQzGfdytGdv1iwFF8",
  "key17": "2eTKsDEW65oo5Tfk4XTuA3FtoaXcU8QDp7LTCyPeq9vQJ5YrLGi2CHNyeKjZN9TwhUcTeFhaSAexxTvPV739PJ9A",
  "key18": "3ZKTsUnGsuqyRMCfgWiPaguGUZmJSjQPicxJNi8RsewrWqqVPfN3Cny7DrEheEnZX3awxHGvLKZrUwBZmdsjzRob",
  "key19": "2z3DoUNTeaJ7xMyY6umDQPkAtN9k3wFX1SWNVcEhNvYizQUSK2vkY549fPK82QpQemAKxRujzbRaXogPdxaA2JRA",
  "key20": "4R4xK9HCwELweUFqfZjXeZ4pduWWS5pJm3fppZcgshhSets9h4NHLbMTMUrJdbGx6D97sDLjhpF31X4Hm25SUtYN",
  "key21": "57iwY5kvSTf5LpCxy1z8qnAUz1v3wq8pasYLxfJmnuoaj2WyXBXfBjGLrv5NBcF5fdTsVAEVG7CPLfrJCoGMcdCf",
  "key22": "2rT34bhd8d6Z8P7mdZHmwPsvbfgjRoSqjpkkVaCMw9VjYWGjjK6ioBe2W41M7Pi74u3HQEqaCi8kzUjVCTTVBWc3",
  "key23": "3ps9VT7pDNMMY96zESX6xzBPgm7FALw8AWBr1uKxg2ZYddD5UMKL5LLxjefvM89kKUk72q5JEZReSUFWAWFLYe2L",
  "key24": "RhzmEmXprucYEnQv1ELjXdZRbTmjsKcFPGNcUxrDpiEYhTm7YhQByFja58gAkNEH2VeQu5BsNHVRPiznkYPe934",
  "key25": "4fd3ANUyYhyoVKPXCzJLRLcZPScSWgdDYTs5kdMKfhDEpeyUJY1TNZYLe1vX5QLf5vxPfk8avUgGVnqFyTYA9wvk",
  "key26": "66UESpJxRNg7gwTK6VeY7aWAYxs6eAAwU6XAzmFXyWNt812Nk7SP2WVsNS1tprEPbcqYKudB1XfqLHpeS3Xt8bLw",
  "key27": "344VoCkcME6EHhtKtX5Fcmh58JwPJ7spGYyGyKzBLCpviXvYuSFmKQJA2BQ4SXaTzQ8YN6J9WN4BLpnchYEbANyC",
  "key28": "5hmzFrvTPiK7RryTgvsRGNSSCaqbgMaZmvKfG5fM4HvQQndpEB7yHZ67WTrmwRrKAMWoS6QRde8BFpfy8zckcH1V",
  "key29": "CbpVvMoKMNUAyv53Avu6sAemchdh6Me2DFnuw2BB5ZbdzquuqYeg8k8CPLTY18SK3xAfSWEUK6cNTHqXEmiXqWo",
  "key30": "LEjstA4zuVxJQRHH9op7KgYG1HbRWBx1YyREp5D48tYFj2ZwhLrkV5Y476TevXEAx4hy8nQsNaCPu6mKa4i6M9y",
  "key31": "FnkgrL2GU6KPnugyE9HnN6amYFS7Cx4m1gB1mcgjY4Mew3G3xeP4Q4JuptfyJJP15Fj1DbiNzhjU1TiBBvwCQtF",
  "key32": "5W9upu9bzrnhfU4G6XfWheYGf9o7BkGvuuGVZB3u88bD66h1E6WhnCFiZc4HvY5VcodNw8UNGewTM1MDsmv7iUgQ",
  "key33": "3QNdeXXTuEeqVYL8Q39oEocW3jL93aki9LaBavvMKzFb54sadbknJSYZYwxgXfwuW34LcncgVM8ssMhmNR62Q7b7",
  "key34": "2ZrFiKUHEeFQ61CzG16be4shuUYfuxmr9jo7QuWDBQeB9YpXcb7WyknD1R6YkdCrmRN1aEthHYsHy7o5ZNzFM5mx",
  "key35": "29TFyNbGMAFiukg6G887kKQdgSMv4fBn3NodF8qmXS3QyYSioDWt5zqJUD4Wn6Weox8gSfFp1V4GkuRsSbpcSJCc",
  "key36": "4CNVSKjwJnKSRm5sDsC5Psp4Ymdh2QK8yBREWR1aaobZmEgEyBgNHKcVwTEQzdEgJqxKGQbgvKgu2A6uDnZV3uet",
  "key37": "62ieTpyiVQRuAo7ZybJR2JS8AAPuQpzGgSjxHE2bXCv7juW1WLd1uhXHPoQ42ejwwwp9aoAhjUS6gzNVpcJbjnXg",
  "key38": "pmN4jGE9vmuMFwM2Kyew1jNdSUpq6axoW1PXWugCih8s2fvcTTKHMaiBzEWrYbgEA6XHEVHm8r7ULZA6ECu4NTz",
  "key39": "2V3rizXhmtsDZY54CwjJuVFFGB5W1BZMGwDcXvQ1q8EjKeuDccQ6CoCqDdYe3pppY4L5EU2xi5wUJ1hu64yBuP7m",
  "key40": "yAkFPfAnZPkSsYTFeRGdUsZnhmUGatgntR1wcpB4Yeu4WPhEhH1w6E7LcaamvfTL7H3LLDzD2uWDQz3JJfGnjWX",
  "key41": "JYFpXXpDF6gyFSgihrnwYYoRW4HmqB3P2DrdMY1uvUmwK6YXqvRhZcRAonkn4kZdKZVRwmuMhHyki8mRf38634X"
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
