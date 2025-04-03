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
    "4myBJq1ukkhH3k5pctr64iHm6wx6TjYUXSy1TyY7g8VxN8K4CRM4V1vuaxyRFkr58mTCgWqZCG3WMsb1Jgpw9N7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK3pmfJr2GpYbyWyJJQ1L7ALwCXUXhbzj4yYcVtoPoLCxBpP1gZMpBr5eNoUgwxuL5cH6YCFABDdzWkhhdfd2Ez",
  "key1": "3XEDjMi6rJV5yeGtNRn2ffe6EL3YZhQniyjBPpeRNEpH1ajaby9ue2SY2gEBCakP52cGJ13yqU6DDKVJfwr7G6qW",
  "key2": "56K98pYSooLMpqazACHK3PFMaT1uWMi2CWNhaYm9z3bTLznR9foKS4KQ9aAJB9Q5M6sh3y96KBgkspMVXt1zWdYB",
  "key3": "5snN8gBMkTfczsjk3R8TgJaT4LsdDvai2P2a9VACu1pbCEDZKrPkqUP2Ga6cGnjoJg5GGWykZKT5U7tuZYxqQ9GX",
  "key4": "33zh95pqQ7XL374vMpqVtqpW7TmPWWdBzy7K3pT77JkuNZSRmfrwujic7Jr2KyiR8kbgsAGTcz5w2LbFZbhDvTGJ",
  "key5": "3Spdq4TKXnkBAoK9HSfYgjEPPuuGM8dHDPcY9UUnKh7t5oyEoTofKn7WhPU55XvngQGeKzYbxkzpUuQiAkpbPGnJ",
  "key6": "4kYWdsw34mqvn7B7tDvndJcbgSPqCiEWK8u37cN9ushvWNSBVZQh1PSSMJ33xuRoN3KL4P5vpTvuSEx8MjqVp2XE",
  "key7": "3f5QrghM1CfAGHCRfuFX4L8KNZZyU5u5tG9AY9SYxSfrTkwczaLJ56QafNBHwUTTtVZy5ZP3yagXNPZPc3fwyGef",
  "key8": "5ksn8hNvNvEkP2QkMHp3Xh5utbb8Hv3Xxsf3jh4u5NaCvdZZ2mMjqRAYcKP9qNggavmsv3GrBERG7sx1aiK9oQqv",
  "key9": "4ZptjRkfD6nuEaHzThqMwuEtLmu4jvL19Xm1AykDPqBqQ3TMxRn4Cs9vp9GDQ1CY9w1NTSKfFzYwyAMWmmbitVGX",
  "key10": "4t9CmW2GH4MZraeo2gbX4uQQZ83LrxfY4q44RiBGhvxXLrLJSzC9PWCmVb2x5rt9BTAVB1b565uSwDTuEPJ56anZ",
  "key11": "2YRPwFP72aTXMwrjFT8voD5uMC94wMzuJPhTBgXHaSSX9AMfxheGAwqm4WP7UdhZHWXEYUugoAhPiq5VZFx1xfYg",
  "key12": "vCgyx4RxJyoxGCr6TsaMNuFhfzx9yV9Rci4iY7AyGdRfYg2hAvXnNqigZyqMm9XFaBUvvfGpigWXwPcGGgtvVqz",
  "key13": "3dBfiFrUKDqGb7h2HqHdqpTiCGDhqvS1V23wgaXPtYeCUKwdhKKPQsELoqBNFH29DqqN1iRY8M4BGsnmAqpfV9Zg",
  "key14": "5JiYLFbqyHBc1JszMD3HHJuwg9Ky7hjQmUH8ZzLwVmWCtj9jEuNVx7Hw8wksrkm3kvP6qLjzPwZzPRxmJQBfWnxN",
  "key15": "4KVphVhnvrhihdF5j9A42mUfb1yi7CmTwBpWFnqc3G9j4fzKASNtJCf5gB3m2Fj1h3snwfM9rJrqxvmXz1s7D23V",
  "key16": "4NCYhTwFkjzyezhXAD1Pprm97MtRDGw5hNioPBfwYXzLzYEnGvVhsgvCV7fCFgSBYX2uyM61ozCQNuZaLmCTXHu8",
  "key17": "2HNtXCwsNEyzo3zU28yYgsig2NeQv5MWknjYzCK6KY3GC2Jh8KnJUcDpSu8SgZHbufC29YAiXzm7u346XHi57sED",
  "key18": "4TieuSHzYceNY4XiuS535cfqRvKH4zxxXNucakEkbXaUZE367rq6DLjN9QFgW1Ks31ARL9nWXs4mekCFLeHVPCCG",
  "key19": "5F8ygeYKEAkSdYnsKC1z33WCGTgUAHMwxPJ4bpYqGtLppDAb3iwstSb9MLubo93W28WmsNZMJh5wvvuDR2oi9NMR",
  "key20": "rpHSmCbgvZt3FwpwW5NagJe9qmLxYeGqJoWmgb4goZuhu7FLGu56GTKHhoT1E6HA7RPW7w1G9B8uyNubjEkrAbX",
  "key21": "VohetoXdYq5Y5zY9XwbNeX8puFjLxZVyBPMHnCg7MmmHt9iybLNfnHynT7u6yhTiaHnrNAvMvnbAozRsVLAQtzL",
  "key22": "sJSkuETCzrxw46bduqNcG4BacFHs5mFFXGzc9jLaCJtNd6GYxQuRxizUgoQEPoK4fEYb3zcW5B6pkPVpw4GaLvY",
  "key23": "5J2wCdTBVNGqbipoxrDymTM1jdD65VwFm4aeZoN4yorUj7dUva696c9B1vdkmJrPBhsSNieFYUAFpxwUPeC1gLDw",
  "key24": "5gZTpVUwQDNupmJozP7HR7JBgDE3Qm2wStEDEY2psCw8en47hiFYBeJivFyJ3VgSHq2DYTcY3qK8FpyLNjHadHGb",
  "key25": "5b56HLhuKwZuK55WZPjgrCmNN9yfgsYLTjfWRCx4VttntEVi2sPqohdt5vQVcPcutotyPbfe1JfZzTsebx1KGmQx",
  "key26": "2Jvgbcuzte3Jq9NnndxgmNTcdKSZyajYa1AgBTwnRr6vphkN4B6G3z2HpJ4CC7Qq7j9sfsR1zo4qCQBpxCbTgAic",
  "key27": "32iUC9m1SBtmhGAZTzqQbdMnFieCPaWVXTzHaANrkZiNxLJRvqccxe92XZoGYSihSVrRLWkxJ9s8FpeLPMHnbpMC",
  "key28": "5xetdHfoMim4g6CjpKCV3PqwRrrtFgSnH7hNL28BFNU2fipCaK9vubx9gYrbys3uoCZiuQXecChJgALJv47XxRS9",
  "key29": "nsZELZDUZMqkaBuDok8Gzrswr9E6nfs4q5oSukQbjsVRA9NGkBtZVYkKQVmXpPopHSnS52QW4PSXVDF2wpiFWqC",
  "key30": "5qQ5rqX81e9ny2bdYZSA83aZKAUFBX5pubswbgGyPhtU8So2ZR3KbxesRDzvk6MFtL4xrvF1AwZiNwWBU2Xv55F5",
  "key31": "5fwLup5WbEyaMTBpEHmYSsKPnp664sWeFBBgjtMk2cC1nqbLZ44FG9sLEMEdswmQNMPNzLMXEKyHguu6MsuoUhhP"
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
