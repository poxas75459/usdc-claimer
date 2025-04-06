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
    "2szBmv489phf4uB4ELHUND3Y8qY7AsgYosnXCFsJBiJbf5Rr55T9JdBFYsNUt7FJqm1XfZKQdUjrqzmoMw2tLWVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MgSUC4qMvwQKzbKNr7Cpqs4UfGReovWgpbZwbeqRZsFGuRVF5mZyK4V4j4nnGiHznTMN3yskSJ7pictC1K3qmBo",
  "key1": "4weKfzG3hf9RApzF55keZYVTQVoFMEvoqp5pwab1XBHmDS1rk1EvA3H3sEzfpBviovhRufJgydCsW88g9nmhykNU",
  "key2": "4xRTawB13a6gV2Zaua3Kmje5p24nTgYmjzcFAw1Cwp8KoCbZ7dNhGhZC5HwFxvKBKvo9YqBimDKi3LCk9XQBqriQ",
  "key3": "5vuTnqePjPVsVatAo596jVU89zM8bENo3NtZM6FWVag5frXySWw2UEsez5pULsh9jv8n7NP6rVeowzDHD6mf2cDs",
  "key4": "4bWMoJUc8WRKZxNX9C2EfRj794QtmAJuauYZhjTMMwm6uAQodLER1uSRdWU4DGqrbkYzA2GPgxSf1aGysqw9x7kN",
  "key5": "2q2DTfi4ZBJ5YYhfLqzcNhDCH17LazymWKgjGWWMVAi3EbWAxWGHMWdz4f7dNBN5HNqLMdHtas9zXE8wSnM1xk9B",
  "key6": "4Eo2aiK3ywAL2cZVQFgwqKDRqkW5VNzeZibqzrrNdJs8kRhGztiAXig7CjvyM7ZykGbex3ce6m2T32yE2oiUFXd6",
  "key7": "msnvsgZ6YUv2GdxUJ9nUwjwB6unSZ15aESzMk6JskQyvnwBgJsnfT8gDRc5C836iea5CaHSYHzXEUJtenYsJ1ar",
  "key8": "5NfgsmxnrAKbSsG5c6kzkShXEn2pj3uGTvk8hgppWodaWtacCd23N4rUwUZnFpTRM7r8eH3BSPv6wsSEkWtqTngj",
  "key9": "iaNkHrNa9EthfZmTpT3zRwiZdEys99UikUErtV6fuBfWzjYu2dYab5bSr97zTmwWGGNMgsdz5UetaLv9t8S6adV",
  "key10": "5wvgxANqrVoGsCpKKuimhkUCC1iDzt8HkLC9SzUiUnJ8KvoXyPEtAExrqvcSQCHpTsV7mvs6eSBeqynw8qLsz5xe",
  "key11": "5L6sFhpzsj5ecVM6hkpQPT8jii9tYdNtN5Mo8gygzm33j86t5p7fvP3u9fNjk3VWsXSKUmuCECiEuqruc4CDkruG",
  "key12": "2r9CX3uUgkYkwumkNM3NJTKD8JmZPXqqV8rYuAk6xiMLYTtVMi8TnX2zwbJEgeodVs1X6ZpDHWwudUo8qv2vMyGt",
  "key13": "4LDnU5SV7FJN3P9ZcQYocxsbVA1Yshzo3xrg7EGTPaeWXpf4sKgZauyLDi3dQAupHgN4PbnGALd9bo2uoyFFYwTi",
  "key14": "3dmYfEQij8qYyb9G44XMirNT6ttHVH4Rybm7JkDms8qyuAubJaKhJJ6K7e7voYg37tLhXEiFQUKKw9KdTZE77Sxw",
  "key15": "4esF8fDFKGhYfKmwqwS2qFSHzmD9tx5b9Lxso4ff1dz18y1knJR3zyYKFggNvDBHJH1U6Qv5w8Vpv6x7ezc9tVQn",
  "key16": "fAnGQusE8vDMWSB26jbb79Pkdxy7oodQvb9kGBdRHLicYU5cuGnkVVDUwrhTxScHEuZFEZKNcxXDXLpeC1r18pA",
  "key17": "nPJgmd1qX65AfBosjg55D7T5nJ5iGPre8YTcpJVKjTL1DuJd5RubALtfLZYbR7U1uSvDq4xAWAtvmUjsedzsA5x",
  "key18": "5fWGKjY2tbtxpxLrREibCwEz2ZSqRQgpeNx6Bk6opJXT3t9w7n4dvb4bGPMVnrwLzE6Yiz4fUoEeb4zKDhnph2ZL",
  "key19": "4XAaRjAte5KBWf8SiChuAcqYXMthp6PjXKbY61j2VkEsENbPxXgZvd3EnWgVfkeAfNzRFnTfk3ZdZcvqjjSoHtVM",
  "key20": "5PPnBitiA6M13fdTUPNuGPNKWtJFyeFqMLxFPvZ3zNitAWpJfS5fTifi4ByLJYBuWWF5xkzc3fpVrmsu66jB98U7",
  "key21": "5qMXDWxZ511H25XLhmrzMx4M48VgRpFrNpwnGePN9u4A1SM8nombxJfqJBiukZzXsL7F8fuJrXgCSZMp8PQpbHL3",
  "key22": "29ovVK2QP8cezroqxLMkY51bNGu6AMnCX4eCjrkDNbH9SsDRs5sPkTGhPAEZ5CCoAGKXyxbUE8mmYsDCWXG2qKf4",
  "key23": "3bKxdFR8YfRWiatawJsvUh6RQ2pnywrg93Qt7GY6Bp9c3icNvD4PmKxsaCv1h6q63KmBLMgdEosvi4TW5Bp6o6QV",
  "key24": "47q1ifCD82kUhtdX2b2Ags1WZ1Se3AiqrUBXTuuFWtRWDhkxj6RE6CZsWF1GoYwvcXnDj4p4Rg5ex9XWkF6WhXDV",
  "key25": "jRR9S26QugVE5nyLXMkWMyFDPiUdFxcKYG7hobUXwA1hLrteyA77RZ6TkzRHxafsgsgVTMKdPyWRTH4mGV84Vze",
  "key26": "3MuUzpmBCkFTDZBzeCrhKzXckJkE7Gw2urbcGUAxg5pXNk5negz6hRf9iVWquXyvuir8yzSZgGQCu3An5Qk1RrkE",
  "key27": "3aNFTM5C4JbVKshuuVq8Q8f8ZZLY1dAydXHvdVVPt5Qtgg6CPwghaxcMJWunx6nxbcJuLmFgd2Nrrz7XanithDeh",
  "key28": "3u2juFMPL8zAmibkFZoL7ZfJC3yzXenNz7owzkdsxw5pcrNaVP138N1N2FAcZVK3vcPLkK7dnMWxcUJdNDdd3NLJ",
  "key29": "4UitJQTZLxJSu7FBbwCgfEHpKGYPkFZRRNiYvWx9fgDsVxgQMV9g93Fh1Xe3Bj7iMNNUzueTcVh3p8vQCBvFQSp6",
  "key30": "4cJzuzF5X8Mwtmx8mh1rwtWahamBEmaMXNqL1RM1FbioWEyWEGMUMiFcSpPL7aHm3iKpShjDJyNYQ8V595CgqTTD",
  "key31": "fi64kkAugrd5VpTqage1UHjFXSV8fTxL4ZphQwJqHkHe3R6Vee6SbcKkgQBAZAjKcB6XxzUHWe536uZT5wNfrcq",
  "key32": "oLzgMxMt3uLh6gjqxN7xgXHdYbwkFVrES4DhHes6oTAMQXdeZme9U4Lpq8RdbGXctXPcXLCXJro8WA8gE9t758w",
  "key33": "4xo2vkc4eqg8eX2eBbWhLLBneiXKTHa2q76zXRE27wRADFYD6Zdss1aC7JaKb818iL4WudcAgBd4EFLirdnnNayF",
  "key34": "2f5N37wQLVqP2uX6FqstTaPj7MewtUHimcyuzbMxxEZXZkipVn7bAVgaMswaSipydApfhw6KCY6zQbwUH9wES39H",
  "key35": "3pJP7NsR46Lw8Z31uw2UpuWagRsyvsKcGjtACvY1Zb82NNo8Q6ukffJEJwncAMox91jcMx78eEFYxKcppemzpcBt",
  "key36": "43zXRZPtuhi3v9VMTWhcp2LGPURcb8bx1x8TWqD82z4kJ66h8SUoCLt4o7gtjkyhHaS6thozBgAZpxNNB26NMrpt",
  "key37": "3LowPwfYDKTLtBC3Xs3N32t1d8tDjWhRbFDvGD6kCAfu7YU5ZhbsApS8mPx5HgBS94vj7Jg6qNXDPNsejsLEwJ1H",
  "key38": "2ZrAxigMjQ1mJfEyznmFRndnJyrXXPxWa5UDcnaLg3mTdi8w8AeTBfKdBGWuvXbJ2PGVWQaLkBWaeEhKtpwKzWv8"
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
