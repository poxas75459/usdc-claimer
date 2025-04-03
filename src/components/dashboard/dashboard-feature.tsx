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
    "4F1a1TSot8dG6en5QJYM4kDZaFZyFJv4JsBqSuq5aRUuGfs4Vr8xUBcFJiAaGgeLXs2QzsTbQxMXwT4gfjWibQ5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFAZSvEzPtYaU5EPFQW3w94enBHjUmiGasD68JduzadznrTCko6hdv2anM19VKZj7CgAbJfybanEmzrgaM83gVc",
  "key1": "5asvspnqvrv5Z7dFXcukCDT14rqgupnMQVUuQZ5zA39tZ9WrqprU7PesGqnZDzpm2HaqogfsXQbZXPMxwUrMbvvD",
  "key2": "3rvULEAjkaYVf9Ea2nicK8uduhXLKXRWr9175YUfPpJCjiLiJMTTejnz9A6T78bdbPvLUuo3EmHJjFnZk42xNsT5",
  "key3": "2esNCGVZEHFGx1hzxi3ya2pvZzLue4D2XjrW6nsLVMp7kSWWYvrM3gRC83YkmU2KAFSM1Jxukc9pqhCRvGVzSk7M",
  "key4": "5k6P1QhkJgBLcUrtr6guFJmCgJ6k1t6nFRqg8XZjbi4shViUaYm3u4kyCVaLWDd8YhopFmhHpfXsbT79kUZrHEpn",
  "key5": "4eK8Q65mdt2tCCz3wdKy5W5L2tgLdax56iABPqWJAKre7JcuaovHaqEz9G89bzfNuXYWnLrnFqgDzQ31oGi3TsgF",
  "key6": "39tzg3a2s738zw8D55E2aPgntHJP99B89xsARnrdn9krsfDYSFSSCdQntJRUSXPSJmvBwieGM67Dyd1MTAu1tXk1",
  "key7": "64xy6wL6V7tK1kwAzP5Qe46sueWLzCryM5oZBToABszmUXc8VPi1T151yxfQaL7VY31QGUCFW1manGYHkmM9kxSt",
  "key8": "LC4mLctHR2VbhNF4j9ai7Kh5FocfvJekof4yq7ebLerisUD3RUpmXHitekAqEnobn6EhQ3ynQq7JqRrVFM2GMUK",
  "key9": "3dsDLRhJRLgEjfaFc5B8mZdFfRSnQwF91UFBvew2oUyBZbmTYMcWzARmKFwaoXqfEb1vMgevDhhWioFV17peYeFn",
  "key10": "gMQmFskTU8vdPuU2Wc3NFKL86h36pJkqx52jYYZUi64ohCCKybqWVrbxBL7dFrvV7bgMdDyiBGJaJWWaGSyP4Dh",
  "key11": "62WtCVzBVUfPwh4Mh1WZQ8VUZNk1wiaJyWYmM9ThqpqRvDbSnSgt4a92ej27XXV1yhd655A8o8H8cC7vXbJ1kENy",
  "key12": "3yAkTAQWmLFv6HppiQ86WZBnmb1i5z21Z9nyNj8FAjbH2kdKN7tcYvMr1B6rW2fhG1K2CJJ92qC47T1La5ipyCRA",
  "key13": "5xjWvnidbYU5XkYmBjYTPxK1DdbxQNMep5ioFyF3S7TjZruqmbwR19N2ZyVHvw2d1dxNfuSo6L6Ds742G6frLYwv",
  "key14": "B2C3pTZyhv4LCSEBF6qd1RwGZ7yB68HyMVp5ZsEtC8Aph2Z2XytzSo4uBPQVCs1A752KLrXcgQHBD3dE3AwcjR5",
  "key15": "5WNE1iy5aMLFBuLXXKbJaU4vnrwpm92mcbTKukacnAPCdZL5hkTE18zya2sXJ97Kdmf68ZFD6ARhjeTbcpUELepd",
  "key16": "5Eq3MZkzwLwFrigRfxJx6upsJgs4hnoiPD3AC8SjAxixHzMcC8K4nL3WM4spVazcRpjnSMqvrawHudgz1ufwj11E",
  "key17": "29FVbZ5vMRm3t9LpKmxvLiywpMA4FQdZ9Mu5CuWDTXVkoFqZQgCeohoBc9YSrpLRnRqfzcx4nF7Qmi5wXUvWtCyg",
  "key18": "3h3bGV8RioReHv23Zzr4xaQHgrbUajPPkVJ99oEA6ZM2DoChfxLjtL3FX4uXYwAVWY8vCuvgEdcwBGvKB99jWFDX",
  "key19": "5horDJqp62sLf76wfSj5xm5gfp9iUPZsF412Praviw7t6Ho6vnjmoivDjJXfGsmJEVwjvXS1x7dD7VstoQVem53x",
  "key20": "51Bng7JjZeZcp5Mws7F9xohUnLfhDG5vJuM82LBFecZtbUZ8J4oLPLZM1Aus6h3AH4gX2Xm25632y8ox5rCPHzJa",
  "key21": "vCkCddxpwnExjzTniE4VPq2hGUkfXKf7v3Frsecen9hYuFgZ3t1e9W49PdRXccz8KkL8iyDpy5Fa8JY2PnmkBwL",
  "key22": "2XA9dmZZ3Sh8DYiUaNML94ETGS5PsR9oJy5Vso8ZxzA2gy4GueGC86dMoKrQTNzpBWdMryabVyPpi7qKEf2HdjCW",
  "key23": "LTsEJYNR7VNHVSkd5U3WPYyZk9y8zpodPCZdv7Zp29VcCKriAWmmwv5qrsFiyz8kS7EaSMjWKbL7jcbHccmTLfP",
  "key24": "gYWQPSAy2LB59TzUeeUbabQoQJnToVm6kpZ2WD6oUGb9MRxQK1vEt5LzN7JoodsmfM5UXCdNevDisKC9QScq7Lf",
  "key25": "2B1uJPkU2tBUhNmmZfqhFJyLfWumoZtE1RVrwrr8XPfU6ruSfAEyepDKUyCZzkmfEWafr1BgLxFvaT9ei54Rrfhj",
  "key26": "599yqu7jHyW7iKm3hVFajr7bt5p5LN1TSahDPEFnibaiZ8zuMKrV6tgsdq4ppXFdcEWoSmHcF62NT3f8KcNBoe9p",
  "key27": "5dS4QXRomdAR9vxbrNMo6n4H3fX1UJWpXfMux9wpZXqiypZ1A1uyaJZSSBdMQEejYEy63kdiG3Y4dLGLdJ1e8YWd",
  "key28": "D5gjjv4iL6k6kf72zKPuaVWqbws19Ze4qBK6uyPPdNjCamiQ3vWpRo41THKC8BfoKxt2suVnURWFEpLZAmPpbWa",
  "key29": "4XbqbMguYMUuyFFz9GZyhySNnhuPb9bD8QaJ3LVBn2TDZfLkLGMDecqGcN9PuQyWUSL9sN5ADrX9m8Qj8r3wrY69",
  "key30": "4fbZpj8GJnc2vrm6NH5XgEVmKhXRAKDSurs4fsGu7C8xatwStLZhcV586B2LBf1FWNo5HRHuKXHAo3YCfmDbMNaN",
  "key31": "3YQabAB92QzVF6d9KjxE4MX5ro9hb7qZ1xBgvrkF7TxHrSxg9zP2J6GWfu5pyXgTwzxv8PEAube5CKgNYKEAzLwc",
  "key32": "cCFWvfwBC4yGk7MtadUtPk1SXGmFe3ACZwQDAhmDxteAt9XVyV5QrgJDjhKrsxK7r2qX7Qmvp1Zt6LgunmV5Sj7",
  "key33": "4aboeroU5McEMRchvT6Q4DVBAjj4sndAL3SPf6f7oUXKBEfzi3TqFAaj9pBoQTTuUUPkRD33yYbPgzMtMaeC1vgN",
  "key34": "4PV3PCGCKiYt6FJb2aRBRwrXmQgHHQHnxxijsfj9XEw2Xs9qAmL8hJEQKdSz8t1YWEe5e52jLzKupKUf7g6iHZou",
  "key35": "E7YxZHHscJvG8ADhMEDD1raVsbqwBW53gN3RqGi8MnjmoBUd4v4th3UkoZ29xQiHqUdNiKRjBU3y6iX8jnF6sX1",
  "key36": "5wZmLG2uyUkXBFgZzFyPduF1SqAQZd5fV9fFtTX6Fgwts65p43fMSFbpJGe2rxPG1ZpowubZE3UYCVGuZBEdvUfm",
  "key37": "1zVzpNb9ozN31rZ8HVYCKGf9hVARsvtCkahjRLqhbvgC7E7RkPXx7Hz6czwAt5vQdNwXKDuhUwToC6G6viNLAMo"
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
