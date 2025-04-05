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
    "52M297nRzn4KxfR65VM8SSBEdSkUyY4QB26e7xbcCWaDisYxpfUAxS9UakJEP1XhHC8kuwufv3SYhPgVPF51otNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1h56jhwjW1mgdsxpcFvG2fzCckHGWc8iJLniuQpZvj7zMN9jzGMjTNoADVn32Ukx5sp7PjQiSWu4HJ9gQt7rH4",
  "key1": "HFM2hQ6PGsS7AQPcTCenFHS2Npz37gsumnnRH8rUb9R37qNkiypMdHrkdo2KiTzjqX7xXwBUcJZncuyS2iD36qs",
  "key2": "65v9EPMY4ZdpoetVHSB4CYKW3xXjhxHAEiy2YBnpQk8jX2Zsm3rzX8kJ2vRn4f1RdGaA5vyehQz7iiWZffgWnoQs",
  "key3": "ahDQw8mYAocKkuQ3cwLmg6mebAx1krkC7Z38gnm3Fa3tDCKuzcP6VyH54YEcwcm5rBzR1zp4c42u3vKW9EDDrZN",
  "key4": "4LqVbc23opoY1P5UB4B7BBjf9UBMXPnubiM5UyiSL6cQVYJqc91xkDEtxj1i6x9By8LhHXejqEHfb9Df6p8zkGgq",
  "key5": "Z4jeTbRxfgcfeNq3BpesezRES7SZur7NFXckxBLJzpyv9mh84iV13qJ37VoJd2Z5hYsPSyXQznHh4kFRrLjiybA",
  "key6": "NpvZY5bpcAAU3ENMibueSWSx2h3dwh4hUjKB3aTA6Gvw3oiD4R8ur5mVDq3e9N4nCTov3dkayHmhdPnbMXuJzht",
  "key7": "2tpmFFTjPMhrvRYLxzaDTUpXQNv2umfQegSCoBFiKjsQLKzc29RABFvyycSdNeq85UqDLjbRKM4hh2XKehoW6R5z",
  "key8": "5HX4gBKw2iP1C3hVW51kgjq8eC1Cd3MavLRdqaFi69xTdrKNUxhdq26LypAtMpSY2fBhUu5bj8CWDhUCJW8hw1H5",
  "key9": "fjweQ8Y4eFSB9QyzfFc47945FPajJ7WCL7vD33XuSZ6Y3Jbyn7uf3oPnBeAPL92wvCUmbY757xcR4WeVFsQoXiy",
  "key10": "5hR8kJRTZ9Y53UfJcDC5M6LgVYiBY6sBWQzwnpWnmmpvjLgbvcBNeEBJmD3QAn75oPqRfoHGiFkEW2ckNv4Dbj51",
  "key11": "2h9925qddnLQUG7jahNux33np2Q6qSQVkLQjT9hW7hgZtn3FUeZ7kqSxtmXu23JTXgnvJeNyztQdXjoWURQwhgiY",
  "key12": "LdACpTUGUjUupyWJnyihggLbD9ktqk1YGyyAjkaYsp7DjkJdy39bTzAqJQFjWREJG2TXkVAD6YFNHu38NXptAf9",
  "key13": "2W2MKotvsE1SEA7Q7Sj98nHiwsTJhLR4hyK6x7zmHFbV7Dujz6ZUVBpwXfHerKe4eSMUBg4vafyU4BrmKzVTrH42",
  "key14": "285VLUgHoqKYCHxjfgqbq9EuHTHxctndejY8B3FfrphyB2AkqTGDMqdRTrM6ukdtLNsKvdgbtz3T9C5dEif9Vv2E",
  "key15": "5TNWhWHHaxxUoeexmLd9gqK6sefzmCg8zprs3BbAbEmZwfph4UNmsQ5zHUh6PCXtRsB4pgAL1vtmQKHU73xGg2yg",
  "key16": "2sS9JqY19sbFtL2AL9xNbze7py3XT25UafKMcR547APDDpbcspPJYZtUNqaHrWfsTffshjvq4A9NanBymRaob3nW",
  "key17": "4r5Dghk6XgxsMzmRZenNgScza7ntU9hAyeYUshizLjEnj4bKFh8zR1YkZjips2bC6E5vk7PQA7SEjrdXQbm5o2sw",
  "key18": "waCvvwWLr8fq6qZ2aJigCziU3LNmoDe6j9Q1e2m6cWgeLbXA8sSPiLBAhAoT9LqyuCz7Rbuq2FgVNN4Py5SXv3i",
  "key19": "5ZAUntnmxgSnYbpLmwzfp3yk9JTtxj5d7x5a3darNPa9jmu9AbUrm4cWmVhXsdcw5aUyBgSggP9Ca62JNFDrgkAd",
  "key20": "38rug2MFHaszJzvYWFkprUB9dzjWZZG5pKnWBqsH9BvBVDSaE4wdvoPjQKSKQYL6xj2emZcSrVwPRuRK8MXLVDc7",
  "key21": "5jHnJVPMtvXej7irNQj9HfWqkfWXWVdQnkNhTn8Fq22Jb3hxQ4QALmoPWrN53Mk7GZy9CSa98y1x82RfrmN8UUrR",
  "key22": "t5eDDcWAcCZCnvwK4jfqLDdGKUdp4x6pqKKsdomxKRjpAkYSsk13miZ6j47gkFqiUDVuxCkuGdFqySrjD9FTTXh",
  "key23": "4i2KxhZ3fntNFYuLXG8bzX7B2UX4cXNTrr2CTk82vbjnPdX53BzD2jUoN55b8Aj1jmVdYj5tRDzYgq5PCuiGzMqV",
  "key24": "5FnJ9gy2cyThxjvN5gmBk169wLima8MkqdqXkKoygLmrHJZsf3pf6PNG2zooJfGkKQvfVj91gqxYafxaNA4yNHPo",
  "key25": "4DVrSSqBRqR1Q1VwqDxH2vQJtXUckwj6MPhuDM4qBaf4zFxh8LsoKsb6LZ2DXTq3h6mKz8aC95cDahqzppGCgFE3",
  "key26": "2VG9jHCziUy9zdgunQvWjf1t9PzoYu3Dq52Yu47CwNu4M15cEcBbA9VAR1ppKFcWCfasvUXPY5vcTmn4TYAcyNUo",
  "key27": "5qsR61QnqonF9kYdBZqeYQkWqTkpyGhNBEN8cA4YuoL2tCz94MhkrWsttc9rXrrpdgMeZLRhNurs6SFuks57t8XB",
  "key28": "2rWZWMSJW8a5RLSbCaGzcsZmS2qZ9S3NuKjw5V9mwBj2B6F9Lf1DvdY36XPmbTSxXeqJGgJzRD9gCwJ2t9LWxZnK",
  "key29": "jkPqfkZ13bQxiokKYfYLe6AES3QMuCBtMwstuowTg8xqZrSUQDNPHc3iJ9Eeqo6TV8EGsQ8UEY3CaHYZPNFaGh1",
  "key30": "5rg8gGrTiSbR8tZigwC4cyyLh1RdfXPF3PsFqLYYeae86GKF1AFqJtgdtL5atMg3EXY9UYU8yjW3MBsUBEdFy8Uf",
  "key31": "P11EA3LtfCsKCxWGdbGf8Miw5Egz3ewG1tAiQFw9jDRSijbiZV7wMVnpTYo4HAQ7GnL8iEiy8Kr7HaAhnDsmiy6",
  "key32": "5yXq1XmTD5N64F4MYT7pXXDiRMeUkLDywW2Dkub3u5HsUxdWQuKfXJcu5pCBP7FfaTmmvCyvcf68DLNZHVVDu8iW",
  "key33": "2aML9pPrs9fS7cu56URzcyisqyMYBBy5hhzxJ3JXjW1pZ5ht18bLry6RYRDTZeSorrWU6CxQiuW7Dc82XifQFMtC",
  "key34": "4Dg9kdF1rfREFrqCAzXk8MFCit8WEkPqTq7H1aeiezmo5pt45FgMdtLBjuPZPrTbF45x33aBzgd3sZ7x2icdcRoh",
  "key35": "5MDZn2Wa9uwSgsCUbC2KjtKL3gj5JgbJZ2JK5UoqNumx3ipvfUZbaoEiMSgzC2hZvq8i7GjBLJvqHZMCRWrMiBEW",
  "key36": "4HtYsowpXgccGsUd8JNfPY3badrQBcMuJ7uD4pKtUfPGjQXSfF38EahJ26PiUeW8M5nQj1zDvFfhcAmjZuL81XMs",
  "key37": "4AeHM5RHncnf8wYD13NnfD4vwTnhU4KoJei4SEL359whHjhSTC4uCMwnBHsj6SAfmrWB1tsre6NyFZ1eNsoL7WE2",
  "key38": "9YKUywaPrbcXGqpvvFQW9Yq6V5yk2VSizD6aszKt87MUaDvJZDcrYMcg9X5xn3GxbtRttiqTP2DucoK5XocCPCy",
  "key39": "5HVeqoJWU3D9ryRdQeiHK9RCDkZd9EWWaxZweiqtjDRs4EVQLy53JdTXAinW9B3phtmEAAz3T6pT3HXu4Qpt2w73",
  "key40": "jPZ3q4QiBieYkrMtjWuyXvz5XzqugdVyyUo4yE3f33AaLAFhFfzbMLkaB4mJwAHpMhAmLv44iAHRaNyLs4f2waX",
  "key41": "4w9EKJkFfBGF9bYtjnadqwwZeLpQQqQD3pWrFHDzh7qJNYMxMPSXma3pZ8dzkxkDAaJ637YE3A1FDanPK6ntngUx",
  "key42": "3QpubBX9BQwTu3V2dgSsta3oH3W675X62xtXUEr8YzN6vaJnWekwezcEbYKgSZMfC4aucDFRP5kGhiaS1SzqWoaq",
  "key43": "5z4oxfCPXQtapWsaufbGEwobGaCqtfVukz1JWqjPhtXywdBnxEXK7p8FY7oAyjDcYsYL5ALvUAPgMRaBStwPkNHZ",
  "key44": "d6NXsU1e3i6grsqKpbGKwb7ydymcoa3hjppXeSo5e8Hab4fcT4K8L3ZsCnJ8hX744e3vEwGsNGeCApQe6pTXFBX",
  "key45": "ezg8vytgu3THAMgaWvikK1DDRTdCpQZG4i6sXs5EUf1mBzkoo4E7eacg86QTWmUzpmmSzUmoLHhGGrRjzvTH74Q",
  "key46": "5u9xhbg4kfayahoJK14Lx74VJskDrxwUYyW3F3QomZH7xYU4pGUSUScayRtgTymuCy8SQ1VNm6cEN7AbHu3ZTApv",
  "key47": "4XcxjmZSJuEktPq3Hf16MqsCX7pitXC9BQVHMiLmYBS3geKXdLVS3Wex7F9gMPsnLGAjcmWSYiHQgCdygVTu4mnA",
  "key48": "5rjYD7EMh4f58UUs6hhstrSMFNmW5PkF2vPdXXrybmfd7PA1rFw9D8e1YAPdu2wZxpWpkjadRPuzMy5YVq6cFGjq",
  "key49": "367pLxD24bXfMCdCcSAvMW2txa5Y4F2UhSUwE9pVXBg7NSYybe5dmCp3cqM6A1NVMV2cCmFNa8j6277GWYSabLDQ"
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
