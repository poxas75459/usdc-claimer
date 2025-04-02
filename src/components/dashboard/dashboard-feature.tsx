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
    "37jtzqASGqnsahTimZhm4sP3A7zxPxWH2FAwdxZ2z44aVXWNVAN1wj4BeuiUBifVwgoqZA21gh7B2XdFus8pA4uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4rPP4wyHT9mx9hwmJaH9iZJdqE735xrjpne8G9m5FQzjQcDXFuJQRBbKcKiVafBwr2mbN7Gub4zcAcUQ9GoszS",
  "key1": "4w5gwMpLo49BV9nry1FnToLFNaA2Usgp4k3oKjump3AvM7p44MZty5SapuQMS12baUgpsDNv38w75enRPkhJgWbm",
  "key2": "5ptoDFdZzie8hJEjo3xyAgKXxXqt27P9tG3MBX5yWTVwKBgndxDFgXZSFErRE4CfU6tPvkFX5UBtXjz1PTF6Akuo",
  "key3": "2nvZ1Duk6GtQ39QGeHTrqgH15LGDpmA26L6S4VeTmyeP3HLt1puqUhL1qEXViPQ1SyAPbQyb5kY8rpTLprieccD",
  "key4": "5E1bXrXk5x4V9NFFitScpxcTSGefNuCygsDqLSMZ51zYsGsZVH1AeHwPZmmdr8Whe3ApFgS9Vawq7wqNGBTEEnRz",
  "key5": "2xnWsEHymuD4fMsLeXLNH7nf1kMP6L41sWCY4iXq7poATqewaJH6wseiLQ9GiBrpXc1H835QrbMas6DYSMNJJo6q",
  "key6": "52vCkYJBqaiTLqny3dhGs2x7jgQ5p3Z26pYVz2WdyzGr4gyUGdVfubuagJm4jKr8noosN1mhBGhDy2WevLfqwdLo",
  "key7": "3tbC3y2BpZTvHYiyUEKGG8eX8MXENpYbSBQmx4UoXiznqF1369mocSvN3hUZeVwwcUrGcM9p51hFjD7kKi3DgrPu",
  "key8": "4DXSaG8FTZnZXEBzLBNDLsmm38gYzcypuUrLWh2HssY8EsT4wev2aj6cvKfYLc3BbtA1LdH9br821QM6zxXJkaiv",
  "key9": "5q55Rzr3hukvqQ6zMZkreyQL9DXy5B2A3RYbWMDdVmCNSsRaRdySmvoKZF8KQqyiZn5fmbvmYF6zsVPCRgdSW7vk",
  "key10": "2uK2qvZ9nqe1kTYGTMuxxh1MAEs6oBfYpFF5W8todj2scH9pBZVWsHnrbpmXc3KsXSbY95JMK7UAx6xBPH6LEkvQ",
  "key11": "2CbSAPoyZum8gR7ckYQ1ZH9DAbaz4MGbBG1tr6fcDmbkMpkbSokJNcQopsidnortdRNYz3cUHiNm1gTb8hHrVNq2",
  "key12": "62ZoDnpwAQBCtpV4d68e9gLF6awf2HFQBQZuWPRYEr7Q3iTjFJxNc8xHMVLbiCkreDYauorDGhnsSJCRsQMbp9Zh",
  "key13": "2CYMwuQNNEovjvYz5LAwy3V4Ba8ZPZs8SdkgHsZ2eUcC23wBfsyBWR4ZcvaYw2C1YQ4PJcbDsgoH5rJQkSNr1cVW",
  "key14": "ZvZ4CaG96AJWbXvknLnU4kRU5kxFUZKAkDcsL4CHmxCiwn4Fqs6TKzzMP2WMCcLmmxXSiqHK3f5552DJKDyQ1YT",
  "key15": "2XR7XfMjNxnDMz6oenFsLgVsqQkhr6dyDY8FgNmRc4AiDkh1DHPbLQNr3UstA3sk3sDwt5CkKUSuzQF1eoo6tpZU",
  "key16": "5AKQhtHzGmB3hLtbhTW5o7xtZeVwYHeNRfkjkveQWVzpy5qjHsPjvBdhmmfDHrzFyHqPPW3i7z2GvPQBwgxrSpYa",
  "key17": "LNsQTbrgTC6oSxUKXYM5WwsDBSt9KEAreqLfxDVa9xbgWcZVfpjSJTzpRREmFwVa42GSDvXjsAqu5zgJ2TpNVS1",
  "key18": "2uE667WgzVFMSbu6Kfeqcf6ugEvHi5NL7e6BBe9ivGQHzcQeXQ3KavC4iRLch1CB3LcYe12Etp5DwZmav4dJc2wK",
  "key19": "2HeX6w8oFfuhUq4defXFCNnwCMYnTiqDjgsMu5JLkAX62WTr3MENh9bx4sqqo7pbgS6DeYgDe49piUh8ZDjbX3Kx",
  "key20": "Py4ygNWRACYFU2WjCJoXfNYBRDoxVniuVCGpDCy8Ta44qg8EcNN46uNyBBx51pZgqM1aWnqW3kPAWYaWDu1XyYt",
  "key21": "5Y2dzYXopgEKSSy9QjHdvekT9E2sB3xuTXbMKHozkA9ZCZxYNRmfuoCWWmntygLAEiXqzyCjYzNrzVma9L6SHxoV",
  "key22": "2zKGEUbmByqB9G6MP3gAmD7tfUZdTXvQ9vAuHTa3ERHZYakoS4mGbSXQ1bqobP1pmqBLZ7i1W3t3r8DHHj8KzLVN",
  "key23": "4QBgyaPotitWMJLSUkBeFMtA8rJieAAZC8oChwT9kHWNpmLe1H5p7y8g6ZnPBHhNo7y413ACgKjRGwrUF1xCt38j",
  "key24": "2qWx9fyZsuPJLdPnyXjbrJEV5iZCWaZJUJEAhaXxxovyywHiXqajF2MVjJCyBi3DtoVQUp57JHfpnCiP5yENTqHD",
  "key25": "52y7gHJs9F35FXZ1FFq9VdG29Eo3cbbiWJt1U22FsknSwRCS1ZVq1JHyqUWRidQm3wnDzAduHak5FXtZkTmVgrnh",
  "key26": "LTqt4sN7ufVECcMj6dumPRTmUW6LWx45XBaBX47QwcPnQbGHtJxA2UAJUYzgfjwLJfKtJwtoi7rf2S9jb4wxd6E",
  "key27": "67Wmju5mSdSfgpQpJVJE3938vkcXhHtg7itnnHK43ALfdptVeJ6F1w6cLSBcH8dgoM9GtLSQcbjuGjudEkDqf3hZ",
  "key28": "24XoJiRwKgSJ1GeSS5MAECp1qGUzN3WLk2tRxVmmCDgmWUju92TtvRegvtgsvkymd4LLiaxHiLu3dYPj8u4cUrEu",
  "key29": "5ScwjoQtKhahiLYMqFDRbURJeSaJbMzKGvh6fyiJtTZFMq3pmZ2JgAN2xErqfgC3qvP4zHeJT7VnqbYPAhEKjpdK",
  "key30": "3sFpyEnRz3aTmWRjctniFEzWD5rSHAce99DMn26skgetzNSBW1MdiBYyibYwwRux6Jq3EMbL9K5wTDJDM4hYRgVy",
  "key31": "4cm5v7YtSHMmcJqN3eMUxNWtnSCi5tZrYZcwqkQ5wDQqQsysfqTDjAhVr8BHbsBBt9FutcCE16KyHc9Ft5DzQZCg",
  "key32": "21n8QxpM5urW44W97k6VtgEjEWkY4CRNtaPoYp2Ym1MtMz7vUq5ckWY1G9tdYjaRV6bPYPTCQPbqp6gmW4obzYpH",
  "key33": "3Jz5otGK9LqXVkz544ftE7JFPVNyr3bQL2B3gaSz8wt5FxGCsoEaeR3Tk8p31YeqDwAPzi3fAzVmwnmW91J7pnwZ",
  "key34": "3cUeiMiD2t9854yR62vJm7PrxSRZ7Ypv3zE2rt8Lnp1GkfHxf2YaM5GxpwFAcBfcEubnaZCChUWAJTwyhencGQCf",
  "key35": "AgniHqx3FenmL2LdWgroEajxzTVXvvN5HCg5nHtVnhY6ipmdn8HvNPPzdzZiUQZvkBhJeTMUCbubrfiqJRyMT75"
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
