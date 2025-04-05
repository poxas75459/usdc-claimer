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
    "2EYb71ZykJb5xTgPctfStDSXY2Y2mX9AprjT8YrGyTED16F5ALppbvoKNPc7TNd9whWgw8vbQQx181AcdZQisxCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkhCTN2tmkYL8s9qKypZZKdUeTbNNyBJEWG4zkH7sQYC2tY9ugix1HscwGoH275q2Sv3N8cRXc2LgwwNeCgmd33",
  "key1": "3f5e6pQxDb4ajmzf8MhZmLjaf5bAEGScUJSoeJ3dA4Q8GemUA8ZtHqB1vkWszTjBbHt6SuswTKEWZyuFBRMnuJEg",
  "key2": "5fofmmBzMjX2Qs365UYHUooi1W5UuC7v1aeP3XTXAiD15eRYSRcC5gY6ivCnsnaJgHSXmvknDRMBefM6FNoidWGu",
  "key3": "4wnsHp5eavc84npZCfoN4pyrTipZMVVEwxYbP3tm7qnu4oA7GLrb6jZreBADsJ52LEDwwcAgLaMqwm8PJMhbCLgA",
  "key4": "4Y2kgakYnWGuxjjKL8TmaQkgZz2bAcFUj2UgFmzCjDkZhos6rRhP5CdPxafPXdP79BbYfCNebEQx1qymMN7b9Xt4",
  "key5": "3niVa1oadfXL634tr9TgbbrXRnmD16EgHdzFETYpxjHq1tkrDTMXbbbup5eQDkNNw4AdLzMCwakwM9qST6pBGqhv",
  "key6": "4WsHDb7K2LZmdBjcJrndHrruoTcW7ULjnvjZWBmCQSwzseQNBLFwRnVE1upGdkJHsWeqM3bFoJMU3kPZdHCkPo5r",
  "key7": "oigzUBQiP8NY4akmzyS5v2AXFU9rLicByAD5fzB9EyzzFUinYYzLticURatiYpBHs31XzVs3yNKBzmaCbaSKyU4",
  "key8": "rLLJpTfmQs3xRVWMHipkaw7GTHqiarXm8WWc6ebev1udNGQ6ULPs3Cp7o1HixbrDRyM4o5zsAvmFqXXcid6AUX6",
  "key9": "5RbQr1g8TbocmtvS1s8uKFGrqjxKFqLTwXYHWhEJ2SmHxXEKHm9LssFwDE2oo5hcYXe4WSGw8FtZCcNwpE6cVecG",
  "key10": "3CcufCW1v18Sh4MYhfhoz5CnFycUQRREExETXPkeprGK6sZ8p4U67sUvy8qHnJ4YYDXNm6GkafJm7pyLsFydQsQ2",
  "key11": "5WVUf17i6nJRFQG6jjVLfwyVySBEkVmEabAk9RCvj3dov7uf9yDA2ehRCVzJJqaA1bNSMLWbnFnQr3pBTcHBFm7F",
  "key12": "5HYkGHcsrMjY8Vudy4jG6UKy3LfnFQ7X6WYSSuEY9PnfGqaR1nRM33Xjzz29mXvQW47nUfXy7zY3cRKac74tDxqh",
  "key13": "Ckpmxdw22LwtQugVRpXJodHn8EZvdkyETGsjdN8R4N53MwKRvpTimsCCAnS8CAfLD4xjsXXX6Qn8VfWAup5uyFj",
  "key14": "5jM37mZDj8vvSmXFu4QkxZ6MnXxCf5bngxvyLZW2RcDWHB4SKNZR7LYssNVSjNfjyznCWbqtNrc2haCFN1AjAPrq",
  "key15": "4V5vFFW5df2yuCusR5573fv3iDxY3bzMi35Yzv6gCbxT8NJAEyUZzwsBXnJXxypYmx7zQmuGNT7MjCEbhnxpfhVR",
  "key16": "3VvmLBSTKtCzZG7WCqwTteVXZtLRuKv1r2xE8CxQbLc1DthMsVwvkmnoYxTfLAvaYRyWhG3FV5bsiYmwkoPvRLaU",
  "key17": "31tq5TsA3Qh9xfd4YJ7i1XTUkDW7XC4TwBVXjE6c5MKGdB6eM2A1fimA5heku7wn9REpybiA1ocuH2ihJt63sB6T",
  "key18": "34NWVLNw6QJSai1abJoDrrtAmRgiK6tsC4xr5rXapjkN2BGSCbRztb6nEZH9aMmZuRddp5vV8kFuQ1m18uMyaNUv",
  "key19": "42PR8xjBUjM9vvj8Yr5VvKnhr9gaJbJJp3edupEE6821ptV2SjozazNqCXu4EeCnhGd6pEtxAizqGZ1NUzEa6DFx",
  "key20": "5dobpPh81aiiTveQE37xPwmFTacz4C7GzLSJyg4JrragSo9ThNRVZHU7QQxNTVo3PjWheMfK4ngB2y42EwgaHWeW",
  "key21": "cUuujzTAMskCfij5WCDAPwasDhueohgNAcfzJ1f3uTow9T61eEopuNHcEQeCSqZvXQGADwkKRH7SGRQEUuKqSiw",
  "key22": "5kZY6SkNCA4a2JziWSovPqv1QJo9j2Wrv2PVhQCntmTShBfL4kb3gtVtmfwdE6KEQ8wKDnxtyvhsSwjyA5Amr7sY",
  "key23": "5KCvHxLL9trKuXDedWaU45XRebcaXXi7DU33QaybkRXs5KTE7dFu2a29RL3dreWVF62noP9kPtYPWWUbyc8j98rk",
  "key24": "4AkUc4PFVFJu5pdPQH64jAbMKFYjJMmTpCLGpFQHoKYRhUyv13WjraiDR5ZPg9aEm7APazEsmdzmb4CCrCWXCBUn",
  "key25": "2YxXxp5JxyyCUGHzTk1NHsXSLKuiJN3mvuQc6FokVabhryyBvGqXmNArxwjdW19ayCyGPMDuyWt8kezafSFfmWE",
  "key26": "64n7tSK4brgeYvPZcKWz7r4eF7tsUCZx1Sm4WvsFGCef6sqhqTpH8hVqMkrBsgKy4e1rhAzDhBH7hwyDE62z46az",
  "key27": "2J8acaomCdCrUGNkYqU4RMQUp5jUjUfft5Zq4rwxhkr3Yy1vxFZk7pUjV9coAASoRQGJZfBNkkUCJty2WpxeAPnH",
  "key28": "4W7trZM8YicbNL1EjiuXmtpcUosb8Viw3Wjuik33tfFxYgSqqeJQjMtxALg8daWsWPPwQYm2gaPapsLegiyvKhoG",
  "key29": "5G82YTYvoH3hpbQ9jCPPpHU3wk4XUaY8eyjbgmZo49Y31KsWs2pxqceN2Xu1LrCzYv4rEC9NTEyS8xFnyUndYkA1",
  "key30": "3huZeAo6Z7HLbfYbfnC8VR1QCkJBwCMDH8Xy6C9ZNrAsSU5ToX9yeGB7nsYfuSiN3C4Qe4xHvn1bD8Xck8uVnFUB",
  "key31": "4vCMiDFfufd9LFa5mgCoswndKfFJCtd1ad2u7Z4tdMx5C2oqT1po7jJbNS2CGb4ZdmACggWUnPaQu3QsmiTS1pCw",
  "key32": "5Zj9dhNHpZdrctrwHfTkTtvymmWUebgejTYmQzxNA27aZUSMjcV59LJqU1gLxxzpGwFtyxVAvW1Mi2nDbmFJR2go",
  "key33": "42My5QsZ9x7ZaX9JDRyobXTLdhgm6soKc8NDjidsSuuLwp18b2sT4oMmeiab14VGGVD1vBW144AfQ1oWojg6gFmo",
  "key34": "413jvkULR4CmNUsd4W34wcc7ZuJabyy4BbaB27omueWCTg59GQJHWMLNbVLgnmUmQDF1vJcgFRHZ4EmCwuCoC1M8",
  "key35": "nhtrQ7gXsrVChezZoxVHk8bjShsWwesLsuLqHHFNDkQ8UKy1WieQrfEmDtatUUggJwjXxcCfY1ox6x2n22NqE2K",
  "key36": "5kXsaAuZs3hG5HXRSw25RdDQMBRmVnAgy1MV7ZkaNHCzDykof8wJzkT8gC98J4prSGffpHikdEuQ1LzvkMXG3TTX"
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
