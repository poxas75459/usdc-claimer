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
    "iUBYA8vfbuV7QUP9cJ3sAZwMiGNzJdsAm3ATk36BMVDfnfufdmYJpGk8t2nwffqZYfQgRzELZyzM1mJiuUkX2vP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFWWscCQDS2kpVTySPkV46ZmKCRjPkC1JeaVhoRRwrdixkseotqWdhbJvYuJ8hfarFcShHvShwDPmicgLzpJa44",
  "key1": "2Mq9La3p1aqXei7aGbpGVtsrqSZt49XesYDxeKFqG3W9JX9huNaWiUVQowNLkcHwo39JUNZTCXXKosq6uqyx3Qie",
  "key2": "2PwcMNvZLWGuwXEomfttsu5pDLsApBupMqK8bRHUX6nwkuLVucu7r8pGTcuVB5q9fESGSbpkU8h43Nh7A7trHfep",
  "key3": "3Q1DwGZw7U4d2Du9XkG68XAZ3XxvBLVn81TRadcMtij8h2SV5nc2rhsKTXR1JVfDS55My8Lyc4iP69KKyTk3pHbq",
  "key4": "2CigL6aXgdPQPRJHCBZypZiF3rE5KR7rN2evKUdzLoqoczFyjNXMysbyr2kTAG4EQMSDR5tc1NPmjyzEqwA19iok",
  "key5": "49nh3X3f9ooWzgeAEX5wA2PEPx4fAq2cLRVznJ3CMifQjVTLKyBLPT2dSnLFK9xQq6qSvU5yf7XVF8tgBzYBwPCR",
  "key6": "45cZ3J9fXDyVdShHoryBb9WyN2oKiBkPmZ9vRrxv6rLvQJR6U5P2VmQub7NUK4aCqbQRXTVG9XKobF5BSNLP53Az",
  "key7": "2UURqSaDPN5k1RdyS4kAzKQv65hSY9YzJbg6EsU9fQwxFDNgqdwh978UotMb1ex1qQHta1vaRnVZmnmVcn4YbczC",
  "key8": "45PizjKCTokyu7D15usqk4UZ1y81ZYqcdMi6XdRuD6qBxgzQbxSUBhRQGFa9q527Uv2wfN2Ffuoa4bj5nJvhtddc",
  "key9": "24K2qPwuHDxvBQAoVUxS66hzT2evYBDub5BGPRqDsPY4Gqq1eWX86xnsPbWzHqgAgF4TGMYpdDvwJ9f2SnxTtEiG",
  "key10": "64VEsjbcm4roX3kdQKizdNTr3ZQzpsK9gZJ1qcy6moFv4Ma7rmdFSCBE6aEtHCUkdZUj4qBzFDXouGvy3szN6sFE",
  "key11": "26p2Shz5JHA4FjzjkfngCDso1SNgxqJT7WXQozpAcAPDZwM2VqyiAcoCf2RLGBwMXKoKPB8uSThYMeodePUsf8mc",
  "key12": "ZgGYExrVdM9ohKWrUaVGoM4pDuqTxPmpd5D2taXy6LBTYmUjGPBXYmz167dLJNTTzuEkMBacuWuRJTEiPMG3p1H",
  "key13": "3idBhxJWdni2WzKjFCAKagxee6rUiUD65tNyhWen4nu5J2bS4ZSrMZna4N8zAbunR5DsUaesLe6ghq6Y4bCGrFhP",
  "key14": "3ampHkMFKM8szcVxfVpAdkZEgS8fLT34nHjrVyuhrZqsFtwtFYAYUQGAyDQX4uxyprKYnnethV8oH6E3ugDZ8nzC",
  "key15": "3r5T5hkrf4DqL5AfwcNk5mx1Uv9jawRmpAbroT6bZuPn64nJJwNKJRgroA2pFLQuzn9AsuCsNFYJ9rayQ572dSds",
  "key16": "5mHdH9ootPgUvzco9wLqp61ZgWLLUu82ycgcAeHhEWarHTWeaC9KyP9ncdMX5LWUb52tPgzLHkZN5HBCC8LjhQEE",
  "key17": "z7TboL3zEVh7TDGeMtJhMRZmomoa8fbjqYd1UboeASB84wzR6rRurSED5TifmvjPJCzeXQLvnnG6WqAEiHdqbUj",
  "key18": "2JvW1cb555jPUU7uYiyWadDNHNLmhBHPhPfY27FcbWe9nT2vRKb7YajjSaVWLCJnd1BZsr87rn2UFVwee5tdMa8t",
  "key19": "5Hr6t17tT7wzdUrVFaL9wSv4uCJBA7JjN7QydwWQYDhhXtypTSj2bbyAyAfGmGpLb2LmamHvimrVjuznzteqyFoq",
  "key20": "2sTZUk4ffMDHTkuGYNgvceSKUZQpSxyR4bziYGGgA82JqnF78PvymvtdTimPqa7j26SF8MbAF8CMThmFnnLhxV8t",
  "key21": "62DPKna4uDrdk22emnJnYPugP8NdzjpvByGKMMRnP3Wh9wmSo25Wgz4zLyYeC5ymyYRm1xvguiFfVMQ1tzHPVhVV",
  "key22": "2bxjJRAyPx1hE3awx5DnFaMbE6CXSuZihtrHosfxEUNVHsa2WGwaMTCpjNne1NofbZoKJgsnZWwu86xhGd29CmWu",
  "key23": "qay2kz8sorD6oYujVZcHXAM2LMcjey2YKaevosgzhWPCXquVMSnabsq3pGGi236nGQ7DUD7bLBCRMPdtrnCM1yf",
  "key24": "GFLQrof5c9NhVwN8scyAbJLs8gjz8TFamihfeqB1y3Hh6PSUZVwLcaToebWBEz9E3VCivgXpzm45ABR9f1rjVMu",
  "key25": "4Kzw5kov5PpczJS5kqNv1tabXHqP4jNK8VY3WhNy32Uwdk8f7PzBSudRg9x7DHB51NARh6wVgkCnbTWzrjq8ADwX",
  "key26": "3JSybNqRXuErNuDw6maq1wDBFD2NcwVcCZ4qrcTVEKUAc31RSHSH7HXYsaDedBuHFWom4L3aywEdDBxzGQuGyhNp",
  "key27": "hGUigrWLrh37XRo2jn9sMzyGirA7bNrVGnmASCqDyWqaisDvQSYUekGLh4DGkmkfK71XgWKjix4Yf2fS9BbDheS",
  "key28": "2P49Te45jpgARwPxtrk74pvk93DUze5hDCv9HN8124w3QsRG2s5XSLJJC4nqaJ3PCAG4kM3KjDX2TEBeuGUsgnjM",
  "key29": "miVWXimP6KZu1tA6dZHBYvKSPn6wQkL6yJ18CHc4FEgtW87B8eQVJqnkcZ42BsTKoFfVpscU39KgQUWmq5cCh9X",
  "key30": "2E1oMB1oZdWyKb74v8gUxH6y7iNet3DkTNx8BTSAEYeh6TkccEbJsqWMuiUKG1oaJ4t4eQLADnKNbrhYVmrmvcDW",
  "key31": "2hZgaGEw5BrFiNTLBXk91a75xjkS66RSMb6t1tgN7PQofPNrrtbmF2cep3yDykxA4w6LneQ9EGisum1mNFHUQpTN",
  "key32": "4SHqKhSz4HAqP6pXUormo5uat5ohJpGrDXsuAtbeDfowh5hR6G7JYpNa1KoRaT6y9JzgwQ2Aca49Xt4TovZdX6z1",
  "key33": "35cXhQiiQTGEzk5qZyHU62qkZDWcytr9LtSBg4TisvtqoXzdtzVWzWWuJrMpA6poHXSeMP78MCchwK5or53ttJgH",
  "key34": "3hGSWmBU8j3bTinusvCBxnRfmkn1eBjiWDuiqpXQzTFRfJh6aeQVhrNzA3jbxC926vjwJawTkTwcj2cYCdzCAuPH",
  "key35": "5pmPBrEySTPzJDmgaXvTbow8PdQYupnquKoS7pYQxn48gNKXdbsQrzq2qpYFxpQdCaPBDhEF6QkahygmttKuX2n7",
  "key36": "DJq4WkpJmrUTB2gWqdrjxGKMSNFM7dmMLp7zyyTsyGL8v91KnWyk8gKezNmKUevcf8ncBx71miCd6a6VQJJ7QYU",
  "key37": "2vvDV85b1JSWckwFFib18cUeFsphZEaWSzqsQ6f9F5weuMx39KMo21qpmJnHNfEPvYXL1zAi8cG5DpFmBkJAerGP",
  "key38": "47RWRqzw3coHYwt9aKee9xPyEw6aBLR8aghJUzCnRWaRvAnTE8batSh1bsT8C3NV5G7ArYAqxJQVALJiEE1XH99B",
  "key39": "QvCrxruMKtM8nnmrPJ4QR5wkg4JmiSTtnQUzqqKAdFyCyur5acQF4ni28wcbhM7SVvhMoiz5Wz5kDnSrfLeoZER",
  "key40": "121miDA3AvXLf1JNNX9ugwcqCUAv1GWcH7dLSJco94fcsEpRhwWQH5o3TQAR63pavjUxTE4fZMDjBFmC1w7WVAkL",
  "key41": "4t7fujQqhobAeKkMNndBMSPsk7LYdGu1mayZrrYU83XajwAVgKUjSJr3vUs4LPWy94YwHZvbaAu8Zf45gmqLYwwU",
  "key42": "21Ue5U9cucMNfNBqXBfFCWWAa7efzUFprREnY3yHoJ6n2dyjEJbGFP4wqcdwgae9skTMbFXo8ZAzCJweukb4TbB2",
  "key43": "3qAAPjg2ih73R5Xqwq1Z8yXkopPJ2CZTsc4pAqodNn5f13EPRBdRphTcM18aSzoV7nSafNirFtV28iEYT4MCLHJ",
  "key44": "61Fb8Rmij1znZ4g9sa88ux1FMmdVqxS2uizaN3gYp3E67N4GgnhjgEHWAJGEuT8iEakegJAk4rqwNU7aCwrka4XJ"
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
