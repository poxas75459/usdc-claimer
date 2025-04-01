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
    "4SiSfeMuVXzg9radfjiTohBBa2jxzcHnirLmesFEiK7DrafNDz8KESFiXsagZ2rQsWzhAUrbP5bqkbb5gJjQg5QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4raUGmVULLnDTQUh4aD3QDruZFVdHQ1CT8D7h8jv9JVgenLJEnFqXKXgRBvP7MWwVcj5nHoRMLQqP1SWriY7e6Pf",
  "key1": "2uHGxhBaLoJj9443F4FcFegmw6DhBGwNNbPz5KQc9fHiwzedkXa5EhK8NnKbArWEyDTCZJHmsxzYVgFMQGbUVwtj",
  "key2": "5jfhPheKSZ762SXoXFf2K9GaBRGwHKqBvVueWZyAuXkMMU8Z8Jb7DtVBx7aS6mhdbmEqCcSL9Pm1AvD3yn5aRiv8",
  "key3": "4yjVGCRirg4NTj3or3PuBYv9PcuhXayRmyKkBPqoqsWXAYWdNXfHaxD5Qg3QVzi3pDnPL2r6c4gTyiKTXEU2B6gL",
  "key4": "YChS91aAbBVAeKyeb7k5ctQdd5vYL6Ri7vVLKu23NEXunGHJSrrJJQDHmQoBU8Aom6BQzWWaS4dg8nMssDQ3Vqw",
  "key5": "2v3AGMMBCghKN4p3c47JQuxULQCBaTGQHFfieRJZdizoBPuKqjtPew64ivpzuVZtfmhZqVhR4a9G4KyzzVt9HZ25",
  "key6": "5oLMEDVxNRRACTW26iUwhRPHHeGxcW1XwHRygzJ5FASTeCd51A7htcaHMziPiCeMnWXNo7uKzfDsauumRkMBvAjN",
  "key7": "2ARKd8peV4vonidKz1MxgRvjfFx8UZde1FKap3joBmSsJZy1epYNJhg3VnNAnH1SsJUAnwMLt7XYzKe1idyrqV9P",
  "key8": "5J3wgSV8tR9bcVewHgDbbskoFCCH8UL1b98gEYbc2jwkknzn5jUZrv9ofB5p9JPV8t4z7vmidF95spk4WueGEh5V",
  "key9": "3ERMEFDnpV54fsKv52cRC69WewKBfRKEgiKKCFk6XPu1DyVmjWvm2NiER5XEaFC4GAq5oLzyVdNJsM2V2Cjy6B3j",
  "key10": "47FErN9i6vfadrpkPScRC9cZ41Tb24QLzDxHnxcL7eETg5Rb5YFeZtYRic51sVwH52sP4w6dPKMnnS7oK9hssNio",
  "key11": "3AAp9ZC6ES89zpYVj54gvb6ksZGaud6kTWCBahR8ZXJDPZrnbYeFU3aBjsVqjveHopigCjn3qNRpHH5b3dBovFyX",
  "key12": "3GH5GRgusQxGgFFVyTytTRq5hg1AnBCSSX1ptBxkJ81uTjLZN8QWG437HfV5tNChUnJz3r7DdwTSArFTPkEEs8gZ",
  "key13": "4SZV1mfpNWghaD1PKWdnspJTqCT8u9ym6WcuvnmazfkF7jgXYfomHRkgAj9V4vdYBEUhYxB6ZYNCtcsw67r9LJBY",
  "key14": "46R2KSQuSQ1aqT34pNLSM7Fo5dp6cDn7BKK97KmJBV8H7zwFssbHgzRiYxyDNacumufw2FTRVcdDj1B36BcU2zr",
  "key15": "35nvM8wakwv271TKVupBrt2FA1KDU61V6rSeySJYsu8C8pgP2q1DWVD3ZSm6RYEFeWrmojEEcemTBUj8GQx9L239",
  "key16": "sXyc3pBjWo5HuSWhtQsi7oCjcohcwyYsxqBU2K3x4qa5DhkJw6xk8VjmGYvZzeWRgpGkQXjmRd1ASojVtMaQ36e",
  "key17": "2LMcMBXDgUVrsv8GzEmVos5kmzShE7PyknXZajuPQYb6FGcg21xmSxh5vv2kg5ZEWtRvg37cyNXiBmF2SFVuAbdR",
  "key18": "5stdfsbbwaQ9eQQvb1WU7vQvNx1zfFa816eoFAwAAcphbG3DVjLjhHTKbVMBGZFk9uGsnnUwS5bXWwkrK8BWU3qW",
  "key19": "4GRG3gnDEnnk59ZXo9Dp94binupGNBFDoiSJThPX3HamhqN4iPNoB2jHB6rVv6EsZnKVeW3s7DkWgbjQ9Qhk7XFU",
  "key20": "eC3PLepuwNt3zLBWUT9Pg4cQHBgyFCztXWt1vVNqjpvSK8teGNfdHWXsPLUbUxZe4mtTkKE43XaDUXbqdkwApcp",
  "key21": "2xdzQXwZDEMEU3VYqXrsjowF7LgK8QjdThM1EQiJwtsaXTFdMkWVfXpTtpFhCAGhK6BtmLqVPHAGwMWoh4i2EHU2",
  "key22": "5st4p3aFvcLYnb9wA3RBHcB6nPHoVycHeYeGiLapEaPyY2exG6hhYe8QJdnNk95BQSJ2a8BQZm1jiTHBGnYkf8VC",
  "key23": "5Ya5FnxKw1HXSNapZ4ZsxuRnF1VJRYYP83YURo6bnjezi3ohCq1shHmpm43eTUCRbYWMnjtzrESsCJ6ELYKwREwj",
  "key24": "rxpuu5M2uHcTaY8cSmfj9jn1smNAQarb5PQK8e44ragogs6zME1oYuE7wcKcaz3hL4N3zByTJa1u2LPXa22XoDa",
  "key25": "4KYESB5rVeYZxb7Lp1TuX2GdUu8Z44u6XUXQQndnVt42NJ2zRev7SHwiLaStANokbQoXWSmM3hc8T1nWJCBBdqa9",
  "key26": "BxDKbZcc7vpndFLMVmWXENLR4V71Xdac1v6s74GkGGvEfUrUBZq6Ck5CNfr6y9CFeGrBpwvMB1s5X5swN5qpPpj",
  "key27": "4LqZ1do4AqYkSWy8riji2yUMcL6DgtRApoiBAGWdJCg8HP39Z9czqE5CqKAhGnY6gtH7Ct5BMqafGzCq3TyLGuo9",
  "key28": "4qMLv3F96wfNQjnxtYknEvcoCxwmUn3HJXM2Ss81wzsG4FGmSH5fdRZiaJVS8kL7WN85LhnAA83sU1VWFcwWP8QG",
  "key29": "3ZhZLzMJUwgSSPjxvRWoLCMQtoM4Sk7dKEW2eNgyyUg2w2UsgkBzQwWRnk7pcZTDRSnADwdx7jcbCrwPCMrw1KoX",
  "key30": "3KkgKSkEAgQk47D6jG5nPiiiRp9eUETKVhUNnHy2W6t8Ct438vg9JNzrRfzhCdWUEnh63A9pXutzmR4HaGWEr9vH",
  "key31": "4u42EqREZ5sD9pGBaN6ZxboKZXqjPkHq49KkcbgK9oHa839EnLc4jPKSi2t26tKDZpDHjVmKCChKFM5torKE2Vsa",
  "key32": "4AkcA7tqncJt2W2hQEgCeJfapSAUntGmqGGatKZrim23pL6CpEqu9JQtHJ6sHTES7g1ALSDBsSatt5hVmfLBqyMd",
  "key33": "4UkjAstBNxRW79y836yUEzw3cbn16LrSKrQPfrGePDw2tfmg8LuF4DSgGbTHGENfKTq8fREoQwZ8WcfMTsxY1PRy",
  "key34": "4wQhf1d3wv5KC7pz2Ga5NqvbBncQvhnaLvme16irX8187q2BGVVrizBm3EcyxHvDPJzevEJn8S5U13q7y7QPXfj2",
  "key35": "5qutjfUgaRLFhFpq3td7xqwgJgppsL8CeKkj9bvAJLurRnuvQ8bhHQ3UZsiAYbwyL1ByVzrRmzxqjS5queerDa4y",
  "key36": "6j78rj7FYauupcEQ6APdbGXQtx4YK22MLoNGscpvPcdnDALuEFXG8aH863qPv9RSrXuG6iEpzxLh7zbTmfW7UH3",
  "key37": "4M3wM3RL3EmkR6wFb3SSs6tvRcyWXAb5EoFesQ6R5HpLK3tLo7FXWbgd9aRhqEU88vkrekXHkxVAmRZ2BvQk7cPo",
  "key38": "5bCVoWZJ5ccdzUXXvCHvB81KZmyyo5PAc9sPEnvz1zDJjKJxsVYBrEihTcDAJSzejh7C9ePPgxF6hCgmWPuAE2f6",
  "key39": "3mRCC8GQLhMgY9bT9MNAAZnyo1gejEZhYSuKm7LmedqFCpDgodCG7JNUbcbK6eq1HhVUF9sAA7GEAA6h4acRDhLa",
  "key40": "2Zfmmmo5J6YeGYvYbtcsc1XxDpV9fD13gjbkMqZqnhSuDJF6pBjvXkmHHk2mZa8hyjVTp5qeytLdF5CbP7xkRLaT"
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
