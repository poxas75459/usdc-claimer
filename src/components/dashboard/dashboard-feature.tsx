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
    "AkmxfL9CGmFsGrGaJqqJdwGYjbdpBhAqwUpSCZyZnLtpwkgPCa8LTBC1s6YkmKwuQT4okYmmF43CmaUGz4WzkNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RKB8UuaCxmjo2UXS5MXn9kYedbwejPmzivd1PRPjVmMGWqJZAP1Us3kdLf2sG2BbybzD4rS6vgzP3Et2Jdp6nih",
  "key1": "2gbLwmYMseecRwZRBDSuKg3FzmdHp6sP6CZfuY49qZQGqEPNPNvEyzC8R7QHzpcfPHpTZifgg2t2uCftjwporfWZ",
  "key2": "5pivD8o6HM8AvL7m3n5SyakRhGbea66VeyaSi6ZEgtspWKmBeo444BZfk4mz8zPasdvisXx2Kyau81TAHgs32KnA",
  "key3": "9YivRN5KtnaooWSXxKPQukjtmuDGNuhexKQRgnT5HfgvLwqR3ThW5yfFqrNxxG8rBVuPxNETifbMvKJ92QnUSKj",
  "key4": "4cepiWNhkCSZ3GgmNbvhdPSCwLZNcaWVmB1yojvo4PMnBgHn6g64TJuYHpm53PFUBxxqfKha4tXTLPdXoTQp9Y6D",
  "key5": "cxtZRWnaYZXaZxKaG54A6pMU6fuE4sJfJ17CCQkbWKifArxuUkorXryF4gMSngbjGuxjLyKKyxxZv69TsZXnVK7",
  "key6": "kuQNYvvm9oqPV4UKJjeZzCrtPmt8HgeUPERAVwB1gzS9XVhCdjwAwHYRWDD7ESxXNtJQPmnXYHHfpfZFv7m33PF",
  "key7": "631hdTHz5SyxK9AtefmJUu2ugSnKS4mpMBXGaGASo4HVZE8zPjs8rebgfDi1HFG8cMmGdhperf8o7d1J6x8wDKaQ",
  "key8": "3PTDRXJ8kPo5gxetutfQXywbeN4fD4tqQy3tYL86NwQtJGJm9KVc2eUHFA3zHMEXtnbFqcBss9kUpkqMLsZ7zHrS",
  "key9": "3Db56FjvAhnG2YgCZPE7NsC2ZUVmoaDZ1FMvo7tHYV6KTFD7R8zpjRMrf3y4wPKT67oRbjJw8Zw6W3UFXKjSMnoe",
  "key10": "5qGeE5quLpzzK7P8kYaLbQDFXXCgoyqZeaD3N7U3XBS8a3f6j8MikaV6yjbyU8C8mSW2DFCEj74TFb5LkFWdkFQq",
  "key11": "2GsDPRfNN2nipindjCaULXahaepAczhcLufZ5YjtY3PWtb5MonYahMzLf3AfbJs1jnXMpGDsMQqb8QwmFRFxF4HK",
  "key12": "zPUR2XjYvP9LsWy34e6PWajsZHrwuqvQZApQxtaxTFMaGDR8ksWQqct1ccxkDJhYangRhCio9wic2VxaEdTQcaN",
  "key13": "5cmfT8iVCLmosrWekvTwJfkRmpGAjpt9tu9PpT9teuUWamfnGhyHAukpC23sVp3Bbur2qPkwkHGz45YfbDgHiBQR",
  "key14": "39zvbxTuyGYybH1SBovPkerMx6vacYp49Xq17wp3iWrQLqo6L4XYjBQsAgJmyBjWcydxiyDPocTHs2BYU6hUyh5w",
  "key15": "3SLKppUXb3Dq5TPuoipeuP2DWomKfeYMC3cP2cnQbcvpfwH877wEDxTyTX2wtSrWo9ZwoVQ7vAZyrpgTygtERP9f",
  "key16": "n5eoo4yrWoGEJoZDKJrho4xZaKc3yNvcPBW9uAEj4gaCLLu3rP4ghSov1Q9XZTAwhx32NWzws67vwugpUAAp4A3",
  "key17": "59RooYoxifQ79FF2hSCvKL1x4hxSsmAfTsfGVTFj57nn5nb7B5EAuKacECFwQSQtXPNVRm2X3JqRWPchksdXnmfZ",
  "key18": "5ByR2KykJentGJLewTvrg7ky9junCgiruUXenF1YRYEu6q2D1C6xsF4mev6QpuY3pYdDw7uYkkmFiM2E24Qq7YZJ",
  "key19": "5666ygzA2NMPbukh38PCEpWmAqKzQPB2DV2xAq1f32YGPTLUBYBG2kxFFePzc39YcK5dg51PspqcSUdMQMxuMQ73",
  "key20": "5psoBjuixf3qQpE4z38Zd2tUCh57BdBkz767EcyAXQLgzdEJvpJyH4hMsoBz1hgz5qK6dvihfGkCQG5zpzCHckV6",
  "key21": "4xGPg6fRBv2sZA6jTMJvoUcMjmEaZxo4KpyATb8quVkmbfYyU6L8mLcBMTnWqCr3ns6Jzt7xBvWn9CMfs2fAp9D",
  "key22": "8RLyFVYnWD6WCA2aTeSK96Puc7rGs2MUQaqXtqQAtq5Awg3ryFABLCuv8AwVosfUKXFMojrR4fsaLZLUETMqiK3",
  "key23": "2o7PtkLUDtdvSbSwMNyDr7tHGPwsH9c4dU7qPvz4A51KaSL8VS6Q1XpL9LqGiMMnixrVmSEA5ABwnG43VPCHbXpj",
  "key24": "4Xf9SorUnrY5hkNKzXT8m92F2pcdzKkGhg6M4Lat9bjDLLUvx81vS7tkH54FHbCCAnEXZYPjz65SmeuEdvU1yP9D",
  "key25": "4uzbjjXHgLDksChXkK89iL2Tv4PwNzQ7C49Lz39KFuX4KjNCpeJBrc3EfQp54Njdoeaz18SEvyjfdi2QArFCfuJA",
  "key26": "46NSgjJbpdiegej4Cxy8xpJf5tGpwigZ1nAevV1vkKTLCNtZWsf9usNGBm2zGsEcudtrtntwLtsXqmGxrwLDc4xq",
  "key27": "3PZ9NKq61hDsEkDh9uM2nLwyPZehMUuZx38oKYBWwJ2GeKJZLT3MXpYKR6cRj4duFJM1xkViMix6ETwNyVTLGZ8w",
  "key28": "LbTyQHVwvaUWt9ruPC1irQa1CQNsUHkrzT4ntHpRR8kEzobzy9BAE5WJvgnUqSqBsfjnhLiFX9V8TPYQZ6GZgvM",
  "key29": "C9z3WA2Acy3ZBxueYwz155PVTjx8oPU47NjeSQc5BU3mZkn1X5nXR8Duv6rdjRiADKLD4HTovUELMX9trjqxkjn",
  "key30": "4wvkkojQFfQ6xBR2JRdJNUW79ndVwGFnPjsRjEKGACuKyk3i2gRZ56WnrxVsZffDAcZz5d5NRuQ6ahb9WhNRShUm",
  "key31": "V3SNk9PZVUrJbt1AngHdJoLjwd3hReRkYwnLzQGYJh2r9tcVLzAa6Ga1wWsMJGm5B5Tv9xNQf5R62F1XQ4j4u6T",
  "key32": "DEJgB5thggQwyHX3TMpwfmgZFbTzkJZGqzjTWqRnLn11C838srupaQ4hUXkXsxax2E6rue397pWvCxyWzUkAENN",
  "key33": "DD6a2RTTkqp2U9VcM3PZecb52wbE8rqpMRKsrLRJbh16e98di8Y49tSfbMLBKqjwbRJK7DM3VJ9ryoHCtBCUwzA",
  "key34": "ghCdZxnbNSYmqzffNkbYLfF2QU4YXohiEAYg5Gdss8tUCoJ7umhbY5Xr6CGttMrs5RsdPMSWLfUrQQdWNSzv7fM",
  "key35": "2oa324LM89Mnb4XR4fDq9Jd5MjMAep56X4JYrHUvoY2Ewa94zF6fHEVJQ8j1xRioRK7jFdjGTcveazAVmPDqSPE6",
  "key36": "3ELYcNv4yWodY6vEkKZEsXgXPf4WPwJ3iNxdAxpeTbfUkmM87sADXxcvycwBxJAzzhm399fETHECrSWr5JcqErQd",
  "key37": "9z9LEpK237DyWxuj9eagSS8VpzHztav34dbdozYaNiEML1QjJn3yWFoWoNmK6nwSgvwv58H7foY8awmSUf8LGsm",
  "key38": "2vQ8QUHXHKbuFuG3t3LcysXQsayiNfpB26goJKReaLz7KoHQjGUjcaMznqyoUWbFMAQ3CAfmtch84NEQvFrYg58B",
  "key39": "2NfunRnceMR7p8hxLMCEjT3QM8AgSEU3Aw3JhMcyZkfLSWGZFbm4TZrFm5vjmTQKUCfnNFYXA2cP8KiEcCHF9q2R",
  "key40": "4PURMCgEscdt7iJ1LWThsHGAMPGHDsx6LFB6ATUhTXTJzVvHxDSh2nUbPX9oGDMPKwUJGhdUesiZHxVs7t4bLgsm",
  "key41": "3oRA3oHYQb7oG3gdhqfyZke1Zgyioj2kYuem56fDKLTznrNx32z2PNJzjkDRPBwNuacsQ5tUMpamgc4BkutGubyA",
  "key42": "3N6RiNarugk2bznqkE58GuzjgqT9ZchK8Dprw8N3cqXGRy1EE5brGGar3zRzC4qCjBGsZHTYcshHcxJXa285CMyX",
  "key43": "obfC7svDtgo9L4CYzHHNoCLxNc7yE6nT1RAggJ8HKRB2EChwAqZjC3qCuDKURdqywzpiEtSdgGvNKWcvaAM1cSr",
  "key44": "2iRPPui4yMVpnV5iz155uuo2HJhVSyQqUdYmz76VRfBmd9RcaMTNzx2ha5QgLUVAa2kzS9Qhh2MycJVpJyGyEUFC",
  "key45": "22Fg6nNCyj2z4Z7XoyKFz476dcCSpjBhMUhqNfCHdtj2SGceDsH8awTdD2zcJ5Pzpq4RG3Fcc2qtmFb8JLx84PFP",
  "key46": "5MFUzJaAeZba1PbW2cQ44VEQnvRWYtzyq6WN7diLXFum5zg8d5ZyRChtAERwDvkMQ8n4F6tdmoVnjjzTkRwozrjA",
  "key47": "4hZmQDbfQxiUHV8X4wZJRS1oLE5q4nffouBuzkJyyuww9sEft8NGxYBJMHsB9aLSdexZHRSi3YHGvEjuKenCCSe9"
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
