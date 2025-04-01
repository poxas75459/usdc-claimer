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
    "5PMjhPwsZUcbPBDcnK9BobcH2uv3Kd9fj4SXRPMqnUgs56wHmxwiMd6KMUJAUNNvM4pEzt6N8d6wtDWzCddcibRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amZiBVjuDbHFefJWu8ZghxcxJETVKBtFVrKW9QZ1SwAWoH4mdTkYDSuoa1sXeCqeHMFCNp3JgktmMPZXaCuhrY7",
  "key1": "2xEQq1aEf1iLWvDDMwrjF8J6yKWSttzZf3DMiriVxLK9G2wnNchUbx5S2HmJHwRgvLFyVb4t8NWzkg2NSdks6QNd",
  "key2": "3hW3CceCFKfgH46vDwqWLfYuXEqyKrcKcVMdmY3JkmpkJsD9bgsZEWgXNnv4qNKsX9ujZBZMdDW391C7MP8Pqg2E",
  "key3": "3RSewAs9NbjG1VpEEQYd8JqXacMqenRfdeLXAATZpM3BiTvZSPJ6bHMsY7DEZiKBELkf7ZhEMTiTXH2hwz7ZRpw5",
  "key4": "5EpHY3ptZWB9G1hT1RCtUEpUccXNGUkHvaWUGk3TqxqcyquAhUM6EV9rW8HhWqk8KFpQjPb6yH5851qojTTDfwhP",
  "key5": "54Ei7eLqui2W6cxKYULQVnNFdkcWxGr4muJgQScBtpnyoUSMHEXvGoQnt5Eqwwkr1VXod8i3AFNYKdEwQRQQqabk",
  "key6": "4CAm4H2XZCGZx9R9W4go24rgPFTLyUjncC1qWBxgfyvYWn6LiXqgZdeoCEwt7RFbguj4ZMKzZNH6dgriySt6CW7J",
  "key7": "3X26TMmUQJjPUVCyXW66jpdxWQpPoCDK46fgJBjjAfSoc29j6ELXoqPrXQcEUWV5rtNeb6oaLLZo7LeKEoKypkzt",
  "key8": "3XLvoyorfcD8THD52h8hoSs3goBm1Ud4BAu3TCxhX1rnToxQ48d14V3cedC9pzenkSojMmwL4u4iDASte9gBn5L8",
  "key9": "3TwxcnggDtdxdWNh2J3z1XJetAFV4fSxfiJ88DYJgLvWjYQeDPsACow7p9murF8rEcsqo8eiPLJSYEApRjHQbJkS",
  "key10": "3oJxbWEKQiyqroHi7T2CJrRKyPiZBExiBqGDJou5zw7cGhYQTtMQoAbtaVGPbkvN1DZ9YLmx3anzmmWWt66GMT5b",
  "key11": "3r1tR296c5zLipfkRA2tzoCQuViYVX7tbfrvXTUCDe6Pukv6BL4Vw65FbJ1gAKZnBSSMsziutThLNXB8FgwEVofX",
  "key12": "2seKsTaA3pRVsrEUaDoigemsaZ3Dj5rJY2CMhAFYm3FAgVwkEJKm5q8CsVTpW7sUwGM53hgMwLPGgEjRvumQ5mmM",
  "key13": "5R82T6L9hoe7Vkhbo5M8teR3juzRrpmkAjo7vnL5n56XPYP5L8r8vSiQ1nGWs5qoMemr615VK8E1EkDgYPo3UJ9W",
  "key14": "3tN3kpxMZMrpTq5hK6CkqTiaKUzsVJmRJdYQ3w1R3cqhDipMSPUR57AQin74RRUJ8Zg7veXm9HpSFzCsHw5pJjGU",
  "key15": "2nrJZWKmEkrtLtaNxvFjC83Ma5MwuvD7ZQ4KRrQheqUpP5swTEcyq4sakfECWVjjzYLZ7xw3Dt2Ex7UDLgA3M2Xf",
  "key16": "5zdNAMq86EGKZZrfLCu3Q5Aak9sRaP7bt1rkgQddEkHKkvvt8tAxx3qbGqx7i9UvU3Qjm8oZHELNhKjexBxwnZB5",
  "key17": "PVNag3h2kRP4KmSvi2iZJKcJMqxfvJRQgxip1BJAi3pmSczzrPFFrDWrV58xcPmxTciGwv7d9MAAWttaAEwBq7L",
  "key18": "45AEUysCn2bjC19yMJY8oPV99TUjfFt6rgWym2rNZLXt34BAzhNvas4HA578Y6NHwvzcSDKZ7DJTWojkQF1G7NRB",
  "key19": "TM9PvbhLL5aMzDk11MFFzetsYoryL78sbKhG2sw7trzy1Vqm4CbjeEpB6t18MocQ94Jh6Efx8WUqdiAhyczXJXD",
  "key20": "t6yXMaTjLGuYj3da2VBAAaURwWwyaB2vpCFXNbXxBhkA5zghJh3ieC75W13nNBYPwT36bwXkcUAyuY8YKxUvbPs",
  "key21": "5XXGQ3MzPNgL8TuvJ8DgwKPtNTnbBxeETLUDkxwnoyn5AFcTwQhzEf8tFr8PujzxJeYcnXE5SBARkQiJfhE8NRxk",
  "key22": "5jDvaUtdJENXLcsYfXz5a3c65SY6svgzkNNtnr47NMtoMLXLvY8pPjQrGfZYC3v8KW2cgPKj1i3fg3NeWrGCoWAa",
  "key23": "5V5iH9EJaiAC9FTM71HikbzjtFBZG78ynKAeShvDUf7JkG4HofA6r5KHxdB4mEZiDtQknwmhSmkd5fEpjJbmKqiw",
  "key24": "5xTY9dYzdsZPndwDHY8Y8Ch6LC9xBzmYSRf7xQnP6wvLY3NzM8sF8bFKDVwr3wE71uM12WoCuqF49EhcpTcdqwma",
  "key25": "Lu3yk1iFvh1XKKp95nhjgwzwJTMi23b3WeehEAcBxYAUXqnmE9h87u6jXG7tYu2SgcukDr1uryCJhYdqMhV9FFz",
  "key26": "3su1Cj7ibeirgRuEJp3qUKaouPi5QKx7q7yAHywNTgphSWiofPtHNa4SNKYCnWcAktqfkJ4dnmfp7KcXQZ5abEYY",
  "key27": "58HE4t8T9F11TcTvqou9SUdDfVVfBCKvVushkDbkSqqKQwTVSUo9nQV14KMWZZkkBJ2ZuWgdcrToezAg2FnqSVxF",
  "key28": "59BNgABbBZAQarC8vYEm6w5HQzc3tqGhrnRmFYHFnUCk2W2hgMHi4hyRNLLBxBLdYjNMFYJYao2RrYFnCdiijZr7",
  "key29": "3HmKftJDa3EZnLqD6y5CSSa53Wijmdw8xkLbseaLqVjY25iDWQHnZPQKQrt9FqmE4aSk8dhfWmSw371rRZBa4159",
  "key30": "5vLZXcYrvhJvqA2T59FX4y6aUH4GWdN9pppq3AmyYt9j1EFfRe3g5h1X2UUYogqhjxMZB4TptNsGQUuiVvMMjWdF",
  "key31": "3GPokYZUiuGow7q9hvKr4P2tqVeoNmfeMaXjpurQvXDaofubt4wfjXKfuQ7CY528ZXvNR1LzmKNyVRkv5eeiBz6w",
  "key32": "4it6GShA8yBuehDVef12dXqsRg2CUNydEgqCwEdHuo2dbGiVP6eYGVxwf1KrdUCLxT2ZnaagUsoaHpxj5EYieRhZ",
  "key33": "2RnjiBEDmUQRepBSFNE44apy1XuDpLbX1wBTpxkrw8tfuGgeLfhJfqLCwFCxo9kmxVdABXVZE2sEAx1nRt9ydomR",
  "key34": "4ukZBRky3UHTdS7XFoeSruJtL7E8yELT5jb3FqvLX4hU36YkifC2AJLB6LWPGHm8BaV64ompDkTxov3DagnXmQEF",
  "key35": "2q5uzufKLMWgFxLK9eLgp57mNsT9Jv12fCHXP1GnZyizhEzwjaYrVcvMncHKs5NnFB2YtqM3azzeRvdjTy2fU2KK",
  "key36": "4M9VMraBqeKvemeZbxaiSN2R6oR819vStKz5BWFkz4ovRSikRggCwivpgniQZyHpJoUejEzHhcMRxcTqhB3EX388",
  "key37": "34gFfZpeuQnvtt35syEcFZXiGvxDik91Qt2R6Gmj7nJaZJGxcy4sHoD7N9KywEAU1D3BftFrEwZqLRxqZriVA2uU",
  "key38": "4BSnnXbjDDPpfFQxv7b1qkRChHhA3ESbju4mY74935TvpBCzxQa74cZdzG7GiCK4P7oeDKHXSnrr5eLLic8Q1PNb",
  "key39": "sGvgSVVYYXknm6Z35TDqa3UEhMecya9sEAgpgPQMHYjKhRNa6D3pmP3o2bzmsuFBnmqoxtdTpwDJi6ZUDRA2Bqt",
  "key40": "3MTC6Wsq7oPvS8EGt12Mv6i2rMcEU66sMKqvtiSSbNMdpDnvVnFwPSMdgzcLHo3whQsHXcu9AQNS5d73BEpHzi1F",
  "key41": "3Am1KCP4Zdb96oJQbQCT2wAMzjLaHvCCY1JS76ti3iUtK9638nEepJC37TmU7TaavfjWhfY7YaonMdnpQZFhJga9",
  "key42": "3sfupNCtdGYQpQdse1WqPtkds25hevXK8zjK3RWDm5JXseMFpP57dkUtA2iwsUJBUK959zRNNQM7Qsd965zKWgb4",
  "key43": "5P2u1EEpcBh46XEZWeDQE5xEStmxFUkCWCzMhph5N3LuPdmURyvTu1y3pWfYM9SKSxWiLNGjjsFhGri4vjSMMbRM",
  "key44": "VYo3QZ8ZNxNhQ41GcgqP8fX4eHEnGpkDfphxV7nfHeooXd3oC8WFzFrmbLpoWKQRbykbkCqnseAxyQmdCzGqReS",
  "key45": "3sWviE3GuEHtCVLczM8k4ABK8HVjTAKMZJCmoFqpMtuB7KasRMrzdWQot1bjNTiVWpQAG61yNKickBD8GyuTMGAU"
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
