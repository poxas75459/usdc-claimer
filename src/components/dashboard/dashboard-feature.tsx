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
    "4CaC4MNHumXH1B2iKg5zcxKkmBeMvbrPSiryf7nKSmVndYdvjRiwjxXyjnUponVjCbYozXobbwJ2DNVYnjHW7exT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1Ye8bBFoL4qaMpjdcdQLMdsLjkYN8jJgsyRb59ehR9XW9zJocWjSnrpzBAT9EiR51sQk99SACS8zFNPvoRCTd6",
  "key1": "3dNPxquAgWiQ16n7PFzw4NYexcef9jmZnUDVPn4n37DoQ4dYvBGAYiyTUjF4GbqbmNEcC76THWaKq4Cg5pHX2cp2",
  "key2": "2vDXhBqyVi3tRqRfnuEfDRgfmt9mGwNeCjSe5c4MgJSHxTmv5sSUDTBBAwP9qPBxBbb4qhY7dqSMvon2VUTrrxK6",
  "key3": "3q3wddan4wb3tSobqXmuRkJLbf338VhCwVEaUttLwyhdiatSkh2sorsJDEe5P2dsrfb7TNXQderrH1u68BCdpkYg",
  "key4": "5q2Ckc2gfExQgA1PzUAiqfC9nuAq8vZo2Ls3npRcHuYV9HfkWjRJiEZ7eXr2oNd6DoPQstj211NzV3Z7vZVzeV6V",
  "key5": "5gbhnPL8fq3tYmRQJZ7LpT7hZUJdVWYziAoV9m9pNYyMRypW2eBn468ECRutQVckB6dUdQC2MN416q2SUqU3PMSB",
  "key6": "2UW2Euq2VZkiPUUGBLUyyWHEiKzXszkLt3fmAF9UjKaapNhJwME7pUqwZfBqukcyqaTRaApSu4x86Hs1pzj44Kqv",
  "key7": "2DyHce8H4nmqvxwVbQGpsrHavfasoRnUf9tw8YH27cxX4U7sSGWdDEuf2fWN5gS4Pitx54YubC84CitWKCsNGybR",
  "key8": "wZXe13FFppksEYxRsCdKLXogMpCJNwVAcYWdiL4tACCr5AoWwkvoE3fX5qboBDZYt684oEmEiKnUf1D2dUUYksa",
  "key9": "2vr8umV5PW7jqMoyHSacXKMatZ7BUVGnPt4ASDqcWLbMpxkotLwrRfVPQseQezEJghBE1cRKFPHRT2rY3A8qHHMM",
  "key10": "3LtJnp94bnznpLQTuAP6SQ7rrADCvCQ3pk7SMrsFCp7wKKPTwdNdVdna7xP25T4pMN9E12BDQk4armH58JFp6KGD",
  "key11": "4GjFZvHVjGMdyPziGUpAzTE8TGVBKqK9GayfieMGVsrcMUbRbGpeaLWQT32gYtr9UFD6oJKS1cpx2fCwjzAzEY5n",
  "key12": "545BkxQkBujSeB6MFQ6UVbvGj4vWTcgpbEWsDw4FNn7SdQHxaiQtqTJUMrnzM3kQnkZbU37nCi9LCCXT4GmWLPm3",
  "key13": "jryV4xqy3ecLzSdxFw4n3h48SCDvwT5fY87yX28ewNE45gpyWFeVQyrNYBrvdc7emGtfnJftZF5ztMcmxpnWRYp",
  "key14": "2nQrPLAPgK5V4Ny37yNHEqBUKkyWBxTVSQ92ycbRrUYQ93Yem4RHyw8Jh7RvtX1eNSHGCG4bMGh6dhcSNFqdKJGZ",
  "key15": "4RUzKjE6ygMXEB87qbmfs9iscTyfHFjgUnNhFkcxXZUh3VNJTkMndrrJjRKazYBq2hAbnL5NvVKszhXY6G1BiMg3",
  "key16": "NZuH1PRMTsaw6SkAXzWicm8SzzU4rt9UdoTkxmLew5MtqXfCwe9ZWiUXFHZH22briuWB6iecySt6br1sEfsdZnm",
  "key17": "5gPkSP1hLAqoXjxdjGi8Ci72yPvBs8digCXZCX4gXN4AoPUkkkz5FzKTDGqLnqSJaCrPBUDyAe5w2ouGLN8N1oBs",
  "key18": "5Gbzyef1WXd5ByudLAGXGRQ2te2ftBjjVdNd4fe42fzo2Pof4Wm2FLstxWyhio5beVF9CxD71aPLKXWwL2xXmqfx",
  "key19": "5DgyPHbs1nUtFg6Yv2FYFBj3dwSdAZBPManoxNueakPDCYSNiwdcLjXFsqDgTndkXcNzKUPnrnUf6kEwLUstWS7X",
  "key20": "3DGF6oE9AwX7a1NkwvftGbXhH6pdnWie4tr3mbRJcjBjoB9azpFdrLEZbZeQcsLTtdmv7R7aj3nCfBhw2iKM9WXU",
  "key21": "9h7ZymeutKPxWzE39uHnv7nthF8Qj6q9PTKmXQRxte8cxXgVs77wjVrGhZBLXjhciPir9YgScWoXJSs8Z4TJTgq",
  "key22": "2exoGzDUszyr6CqpSa7G5rj2UNkQBM6pQPY9JPD5yToqdqsVz3RHdLTGGfhfhRKMpp1v7cZNEA9U2AZqgh2aNJGB",
  "key23": "2j4XA92YgsbsRaGnbWVWRwLEU93ooL1eDN4JZM9tvvTG7MRgiHiD7RtztrpHtGJYH29H81YqnBcM13wRmxQuy2Up",
  "key24": "5wLFy9putVmyD64gGJzzhSSp8dvTWnoV1tH6eSn3r4dEnqZeeWz3o4qyVEs4wrxdSzu4FAtojoFaMGJRzmgfqaDJ",
  "key25": "3uaPY82jvX3aJfQR6k6dXddUa6GMhLjYMazDE3HBDHqnhEKMXdeeUsHyGQSetEDyFYjDfWrdsryANsw6VQms3Yej",
  "key26": "4MCXX1p77vZLZt4nPxzk18h1pkr9B7NCX5KTGBF6k3jfWjLJCHJtcNrqCU6QRsZuFnrCTGEk4BKsGQbRCfw9mTkN",
  "key27": "52acGyB5NZwPyBhkxe3HfwoaX99aK7wQQiwxLDPcp3a5xDoAB2AFXiHUsu1kPzA2bKSsGNS7upH7Ev6suQ5YbtT",
  "key28": "42rbjgWtKvRZQnZnJM3iSEV4qv3R42uZYyRE7mo1Un5MLsNwzvsBRQZKLB8WA68axCVuzCWBfEdympMPxC6eAuZy",
  "key29": "4sHtcEfv4UA5auk9A1KjZ5XMGtzRMhZdkWzu7jWNxreeRNYuSi48HokfWG1RdZiAmbqh3zVc5hmPywEuQofJk4V7",
  "key30": "iJ1TrdWws12bMHDaVuBER1jywxvGnvComtJwnEMt5nCNjGk3ckABxSEK9cPEzpsgKFoE9tMVhaxPKoX2orC73Fw",
  "key31": "3o6C1YMwKyHFwZDpqXtkTdEQ5FR4NrMqHsbJkJzADNURPiwScyDBxT8VZgUpUFipYfdwKrQ4wc3Kp95tu1muCdRg",
  "key32": "2JwJW3YKCCrpM8qMjepmq7TDoub2637atc92sv7KjgiFSFirE7Y4T2hoqjxwTiodFN4qWTna12cF1oeooxWLjenf",
  "key33": "49KidhYhbctH15UJDdmFFZSnvxi2UnnnSwQVzwJNDsc6RBK3aWS4pJe4JZS8Y2wUKNp7eHmYXS6uhtjL44vx7gsb",
  "key34": "wMAjTrAUxbzgHVeqnW1cMBLCYZhdsiAbVerChXBRckWG7Mch69dmrMfciRGcYmmsawAwoyWAMzDjgtb2Znyo7R5",
  "key35": "2SLckovBe9vddYqp4rX1naNcYxZNQf4LjmMvfgkHcZEuubrnddctNvoRUN14XLqwH6ohu66Erdhq1CXTVcWw3Y4u",
  "key36": "xgS2UB54NWdgkpD4F2GFTdLYpqhY6wJ5M4MvRiqHfnRSmv99M9V29LiacZJnhSp5ykPZMZhBiPojXvYhP6sp3Vu",
  "key37": "WcDcEJ15C1zMcBS93xPDXNh3GE7MTgHJie4uoZ9Rz3Hkug98wJ1Z5VnpY8AW9eMagdmnHaZviRuuqabwA4XBF7R",
  "key38": "4js2ZL2tv6C5pDXCrqDkHhpL1r2fY24VEw7ipUoY9GxzfMYa3irMfKKaiF18pTzzK1xywGaMa9B7YTr9BqWpMsEy",
  "key39": "3uM37tMwWRYN4zSxFuMWNci9K5yyHPQgS8YiMWriKA8sBF4xgQEqTSTTsznjoDGY52CeXzhMYxkk42zaxEYJjPCE",
  "key40": "4mj78SnM1rQgZFq1Rw34cTQ9X4BeWrbDYab11mogQhFajZq9afrxGts6TP5boP4nzHe6NUrgD86ACk8oWEiZMrVk"
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
