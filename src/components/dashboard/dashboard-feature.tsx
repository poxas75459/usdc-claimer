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
    "49pH8ZFt13HD3qUTgXVMUNepwgN9sTXcE31UYFxpZ1QjiFiiZeJmEjMUCYjASzSseRfjrF9VyNWFHtLEwujuKJQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qU6xBTAVtky51f6NV8KZPCRwYdT7HFU39bzvEgv24DdZRWNg2qLytxzkKtEZCoMsyAJBebMp8EVbvAWa2A53PPA",
  "key1": "4UELRYJK7Fmngi1XEcDadytcGTmUPibH8iHHQ85jiZWhs1Zjg7Unz8AFubPQHoXwHVPFofBvXE8JL9YzURsZtp9N",
  "key2": "2e7ksDn61rwMnYwCV5MyJG2G1gqrNiwLiwDB9guJKX1MWEgPNLs7SUXJ6kKQqpgF7otaYoHpee6s5SUqoZ9qicf1",
  "key3": "31mNy2zMLFhM81kZbQCEkw5SJpNmo1YBZVwZGqpPNGZ7GJNXJnj9jWeAvEyvuyLJQgSqG6g1MtkmQSJncQyh57fK",
  "key4": "37nut5Jibf2Jp2kdvEJQMcSooreD1DvbarhTJ5EsK3qmtbku9ZFFNXTBKcxyKF6HzLMTzWAjmMWiixQJjvUSCixE",
  "key5": "egvJsrhqBNyJowS9QbZT9oYYR8CdZwAtzdweBvfbUVDXeWDVob4ewZ4aw3jETAN2vpnrDM9XDja4PAxRoDqsxWb",
  "key6": "4VDNxE4YM4Pejdqrx1UARRDnptHDpKAmkSb1PjEv1yGfWxMrsJdkgqPDMHtBrUXKt4dgiFtNnvpJX6A1bYFjm6tX",
  "key7": "Ry49fKnLQYm2orjRHiWbiEAHMXqv2hnRg88by6hsZMSz92pKrZBv5ScPYLafKuJqwMHt3FqKEREHyUuS9if3vhF",
  "key8": "RoYCKJGVeUwNvY2Siv4qdpqq2qXoJSv6rQUsVofvSBEngMcECNPo5wXCzuJEc6v8j4GL9GBw3G4J2nBCBmUhYz4",
  "key9": "2hiAqNCrjUt3WRf2eph99wzihxGqbqRx3LrXKspubwc1itoi2GAQAnhuk8hhvUFysCfvdMg837EWerEbQR61aaT",
  "key10": "53spm4t3ti3H7gwKb7ANZwJoWohVm7n7VgxEAcwRnAYfppxtKA2q275Tu9wBsUB8zqLcU9ucU7iKJwoekwPkgHkX",
  "key11": "2uRHYNiLXu1kKRdpAbFhC91ggPb7aaTPn76VeciPUyrweHsW6GRnGpcJ4gvhwAozb9aBHXNv6Z2j7NSWaeXM6r5V",
  "key12": "8nKZRMbt6FRkaJWttNwUxU8kFim7DxHYFJs8mbdwzxjR1s8ve4da3PpWCMC59aoEJ9PXhuhSjHufUdwzCTRxvdE",
  "key13": "4i4YZw6sAgw4urRyfk79Kft1rr3ZY7QP11SDEh2j7AbZjrYZbGXbRc5DWAGyByy8jpMibADm7CULmV6QwDwbQtNn",
  "key14": "3tbLyy3Gyt3rg2goCrxVx46ak2H3qr69DRe6HGJE5wyUFVp7QzrabEEuKHjKf1xbRtK5qb2yLBGCdcFpTuKf1WBJ",
  "key15": "2aue2SobULc8g3jYtmPR3VqsMHamXHfKmQ4gxhCaa51JXPubveHcaVBk4cPyJ8v6KHWwCNpGhSA5P7Mpa9tGJaGV",
  "key16": "4kPTAjdXbVyYSqCxpJekJUtyTUJ7EbZZ1JXumki1EGD19U8puvFjvucNWQ5HAQgbUG4VLZZE2JmMkEzSKgc2eRhJ",
  "key17": "5wCHQ18YxojoDDDuqp9RGyQ4wfs27axJmsyw2nRrKxSrHBUJdxTm4gp1H6xgQGAYDsC14wdfnvsQHQZg413SHtV9",
  "key18": "66MKV2ryccyZoyiJ81qVVYUCy1trASwKzwZbQLPmhnhsCwkfpLsJXjLb7Ddd3mtgujms75XV6KxND8p5KkWqJ32x",
  "key19": "5XdLjgr6aEU9ohp8896h85Pstopin9kWcUkgqGZxgEnFtvT4xWq4hp6qGnqwN11yheEnBik9hz5oFYHu1aAHT6Cn",
  "key20": "4t2b5zuBMgXBFYwCjsjA7gM8dCEfGRYwXmvecNQSrgAtQfqpRYrhyC1GstyCuLmZXUgW1bmSyJFgVYyfoDAuUJJR",
  "key21": "3Z72VmbjdE4cfoZQd2a8E29QwME3rdAqiCPjrm4M9zT8TPEwk2FYNKgapQe7HuEyscW5hjUbGE6FjZqsvBTr75GS",
  "key22": "5uAiTE9kJqEi3a9HxjhbhXCP6rYiuEUGfJuZQwBdS63cEhtA13AKBwMQbpfUyJPWGe1XQBLDkaoNHWbrGmFQmvKY",
  "key23": "DhTNGP1qBQYYcg7JYy4xrtAFoNucYxBgYxpVzvEvC8VSw5FQrQXpwMRQPLM9ia9voS7vLPTbbLr2V4kZKASkkGr",
  "key24": "4dNy9dfDJDSgLme8nYnL5gQKCsjL7SM4iueNeD1JputZSgU8kZwJN1t6pjXQz7aHKWiYADN1QAwxA9UZf2rR6wNm",
  "key25": "FgAedYdfvWE6GdgbMi54UjVawgYEhLY5gAGoqE2GfZwFonxv3NUuaRwwLjFgEw7P8dU8dVebCz3FVtUEEkLVCey",
  "key26": "2WqX1r4TzWMtTAs2SEEp2VQ4Bi6cjiJzsAqBcJkZ6y6fxZUzkUA1moJD89tMXrDrHE7Y8dU6g5joFzaoyktux4Nj",
  "key27": "4KdwwMmAZY6CYJZ2vnFeTCuxe1dcg7u8PiS6mC4NXN3v8S7gK3aMq69y8c2nqE9y3PBJPBcS71N9z8zLarBQ6TSu",
  "key28": "5Wzb9xGtc7NeyxeHtdFkjRfLD4jKenkKbEFs7XWZhETyqVhiWa1wEtiXxSSQdodbnaCv6qdt8vmqRoqHKd1UNu6V",
  "key29": "2QeVDDfBcY9zTY6CGmT53YsubJ4VTV3qmu4jcqrikWk6d317yE7cMP9JtTzU8iDkShtZnQQVskbfyM76VJZct5vV",
  "key30": "2vdqxBeMosS9JkMh6QgkTSEQteuuYP3VGZqob7ADVV4NJnMSJ9nUcmXKDGSTeNc5Hk7wm5E8N1vTTKFBRbmUPoT9",
  "key31": "4LHMcTVZeBRZZyNSWcc7qNbupjJtFkmoWpJuhnvjCXdQXyAZmxYsAisigujSkHRbQaZaDYmQHM9jxZX43miQUjwd",
  "key32": "22fRCWcJ9zrGFbwm9cHhjUz9LMY9GxZ9JoH4z1D94iR8TLtuYaFjp4j1rM1P2nEtBZUT19q4Vvm5CdmHQNTCqedV",
  "key33": "3SpW65qCNUhMGnyQ9T9T9F9Z4DLdhL3tbE36MXx1xDX4ckBbfkjD4moDdwrfFE1PWEMQr6paG21gjqSXpc4bh495",
  "key34": "2kzt7oeFo7a6DJmSZo4HzXH4ETVJgFwPsG8ob7TTjfvZcKuHLkvMzexLHCQSkHSs4DywvT1XpL3aSAVNssaEqVKd",
  "key35": "4VFUZCh559gpnCdgd7cB1g8nMLkiuchQ5oTNnXfRGymLoUHGo6QkuwuERzynUYZfpLJWfuCCFKUirRQrZzjypZeX"
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
