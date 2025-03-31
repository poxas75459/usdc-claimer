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
    "2MuybdVNSdwFkoc2oZhNZoxzw8wpJ1h2QpomQx8kdmPCdHGdQUGoEnX9tyuthg9Y4cyXgEc1isF8JFzUj8dB9EFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqRkkWEqNcdk9VWHwYsunMFhPPEvBXWi1eGgbSmGUnY3goMCgiKmYtXvPNzZ77HzArKQeTyRyk7gFxvXPbKSZ6N",
  "key1": "9t8oxrFoSxjhEkVEqjqc15YW8DtJzRH3vAqd6dGxD3po9JEpFeTov7iX3YRD1hdGdi9KyYk3mzfZdToXPcMZJYu",
  "key2": "3SW43Gz4BJ2fSqQX8xwiPeBHBAneqEbnK2HFkWA9xJZdmVX8QhDKA1VuAPngPSfug4CjP9G9YzNptfykb7kufCuA",
  "key3": "3jCKXHb4S1ryWRAfkppvzefLj3RsHZSUjPuZ96fQkbdQTYu5VWcajonpLAAym2HqjDdCYKbcizcSDKd6jCdvt6qw",
  "key4": "5PFucp8x7iPCMAUghgkyU8D5viTHFZi6hiB9V3Z8JS2EXZaj4ckMrXueQp36jR4QHgK5kY5LusbmxgbK3EcjqdP4",
  "key5": "2LFjvPsDkYHXGxkmNoJJE9zV1JuKY63tccfUkcK51TSjr2BH5nNCqhqcUk9gy9dEPPZq3U4dLrtcjTv34c4sZg2Y",
  "key6": "KwmoakyvMh5ZsA2tZhMhByzrcRK5vUEc3LWnrHU8Mj2GbqgNxwQDcyhQztB5hnXRt7JA8Ks9rgEBNFMALrjJ7gs",
  "key7": "28sbFCfDrtoP8NuyHdgs77Uq6UzietTteyDnS7R2x4kPT5weXj4vdpzTQD4VZ74ZV5hGQi93SBRirnMQDc9QFt89",
  "key8": "3dRHWN5HKZ9BXZ9Ui7kFxC1DVR9ygy9Zdcwf862aFgx4fiZ12CPbhk699ap8vtAYWLuT8AXNjW7QkHXG2t45a74p",
  "key9": "3n2Wci8kuceH4qYt7FHPgaGrQfzSTgSxqGSQdi7taHKWuNn3PQrskTHxbsfphJwY6RAsEtrKst2YKTjjbNULRTGK",
  "key10": "3im1sRCVQocUmvDyPwNj3AvK9xwtAWEmUaW7m7qQymA44GvL9zkaRonqpX8rPpreLLz7QhptCjihb28GDjFsXuYv",
  "key11": "4ySTLFPprLdvf5LFNnyJS6phJrfoeGWayNeNwjrUeAhRiwakJPaLG3jibJwe8zoKUFe45soC4CpvrxAwb1XzZJAE",
  "key12": "5moZ6Wd3cMRdEFhS7qsNSxHr3wdMDYbudY9hvidNQgzXZa8JhsG8iA7ELCjuKASao7HN9adcQ2PN4ipXj9cgpfPT",
  "key13": "5VJpsFCAEiYD3P96z4UyLSNf8q6yzRhdbopt88mw2onL8S6hk83iFYdjKUFuFhMwZG4uea9q4EBM9JB8vTEPjcNC",
  "key14": "53ceYo5qAU82rVJc6JYWes7TqoqTrBwfvbKDmUETZodZ1BtEsahYzKkVeB4watnHc68HFU6qvGY2DySdWVjaLGcz",
  "key15": "ufrzBuANgtDJBzYGQb5Nz7qEsGAsGAR1bbudCdYqthcCYbM2gNBmXC7D7vp994Q4KMK4y9b8NAxC6wjDdKEc3mJ",
  "key16": "2yp7YN9mgkkMMkxLNdBuzGope89zeG5CnXCxZAxmQBZQBXuK3JBPWijYQCUXCa5YPj5putawuQySwhcuAJMQANiU",
  "key17": "5fw6DwrthAnKyazZKiZKXsyb3hV1X2FxSesxZqEFVqkPwvdip2ij2RnCWKDB9Y34cPTS4oz4QtS6eafKbtR6pafr",
  "key18": "LYRK7tBiZEYuHFuZLqBTLrX6M15Dqw5cYy7Q3H6MXq7a3fWNTumwdcagsi4RaaFspRL9u8Py5Zr9TNArqf4Jn91",
  "key19": "5U8hJDnLhLNACA7c2mQB7Sn5KJ2ye8YZxbmRoVWaa1gaJ4VYYH4zJxBAiEYizAJv2xKdKVX1n3mqtxs9da6RgPmY",
  "key20": "4rkQdYXFrfLu5nqAEMtNacWwtDHt7RncCfVgwhmnz3CFCxDgEA7YuoodJM3iG4bxG6yuy7ySBDUpTSe466Nkz3bv",
  "key21": "5UuMXebdVA3emL3ECiCJMewBxU1hSqB9FxdsZYaqx8DFeGWsXZDjKH6rMUQtzDcqVeEchwvdh3vr5PkzJTMnqpLb",
  "key22": "2yZVXX2j9fGkmSM78WcmonWHJU8qdKBA1i4ZCkQLhX3PExFqaH4La442htoAJLhtVpMgYwafz49CeVGQWTPqssxg",
  "key23": "2XjUePtKtZW9rD7qYFMMh7fqHcTycybnXBQ76CCYZvmbtEh6kngfKFFM3fzvd3M4jbY4hhrnEmaKKYdWycumutmm",
  "key24": "4fL3VcEqvD6QrLiEFDzsc71LAxEuEKPdry4kMFBDeWsnDacXAArV3Kkw9D63v9s5gcmUppX3r6gHw3rhBhEVgEZ4",
  "key25": "5rzc1G4WKXsizWuFm439QJKV3DdmHY6tnwabsr7TjWSeWFgXMwppSn11X1J32bgT8zhfwPCKvUAG3ygAKKRhEm1w",
  "key26": "3VpbuM3NgZQtKyKNrZuzctErnXxRQVzgLtU6ZB38Y61XhzMHv6oZ8tihAxumAWxQMnRQAQzaNAfXmcqyEXNLYBxF",
  "key27": "KsysZrdy6Nw9fECi3THLAjL8KjsMHWmWw1bfVdnc74WY9RBuqgfdsy38GTpo1RVWhqdiCJrhgQS6SvwaYVkTpYX",
  "key28": "3RoZErHw8B1SewJKrkq7BEM4169TJvcARyQYx82V4HhvAsaG8ZoJFv28JJ9H8bVmUJk29E771Rhyq7p5aXnkoYi5",
  "key29": "5UzDhTKH371FqDRXe2QjRpgACwepWK4W84RF9jcMaLjkYxzg9wXZ5i3kP46wJGmGb7hBp7SGjuQXqDEJDLWXCqRc",
  "key30": "54aYmaegRH62NL8ggcDpM89UFeQVeKJXH4vx6FQqNS342G3haXcZZDbYe8uqwHFUqizs5BoAg91DM549dHg8oYQQ",
  "key31": "4C4YHpfK7t3GXmz6i3TbTCXP8H1stiQye3wSK82hV4tfKEYVnfQ2D38WFEgzURnB7i4yiRovrNTwE3ikEA1h4egK",
  "key32": "23vBqtF5jjNksyRNGAmPPQqVxDvq2xKbE3cx51qEKDHeHaMQeTb5TPDJpAQ1ycWhLh4NorErbVJDCPgBGWNwDyq4"
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
