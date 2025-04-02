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
    "2CRb4k8MLGbaqgvN3EC5esxnnEnoSCEeL9ox7fLwb9qviocU4NLFBtppkCjTLGCZsthf8EdyyiBDaEYJgKYqyc1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sumrybv2ffwcSon2DGoP8zwiZDtZfpnpTwPTEQRzyfJBHPQkp5uBCSTgj6GpkpZLFZmGXPc6M8hBoF8X4NUpfvR",
  "key1": "3VdXW58CiFnnR3PH4uEV5UbE56Swk2mpA5bynq8qSyZTrtbhPMSp9cXp19jVdYaZkM7CRkQPsRqYUjWVW7ijhPVh",
  "key2": "2ncVxEtcaJpgtjmKY4JxJxXnkZyyPXhGnLmYc4xk7MY49W1Ctipi4KuPnPhUPifQqgoGo2aiZGZoHpxJHBpaMLyV",
  "key3": "42jNVEmWjKKmixbq9fWW9va3xuFgGovjebwQkmSZtNK5kqzkstZJwZkK9XioVc29QdaGvce5CtkEKZ6WdqjXSvpo",
  "key4": "3iuh5Dw3EooCpDT6bTTRzEFD8MuFC33aYBTB92vVAzikc38Lj7uVpCoeZVmc8Ep6cYmKpkcY4HQqzbseCENFPc6J",
  "key5": "5q3TMm5SP2CxoyKctMHLCDtE2f8eJyF8PH5Nc4ZNTAj57FaswdD8hmA8Lh1U3BSRjQVCqXcaXh6p9Vfp5on8WqmD",
  "key6": "4SRp9jwPsH9XzQ4xGjwC1B7xGKu96GZbFXP3Czb8DeavxSXaga7RuSHuyNYuxQqNiWLyHoHGRcUfGQQC99bYoBzg",
  "key7": "4qNi9LZajnnom2SKg5aACNFB7nHZzuKAKM3Rdr6EtphrSUT743WuHNUWQ5JBFEYy94tKMMnebxAzYUi3zZXTSpoY",
  "key8": "3DTu8etu1zQdJB8MrQzqFAXBfTHicHPzgRiorn2VY9Kypm8h9WhmjHXQ5bP5UXTMhtBBjxFJBdonj4RmduE3PuYX",
  "key9": "yEM48rNFaTTEMRz83yLWh8RUCn2sCEcgS2aFTc9q8ixmTmhr43emcMwfp1XH4mZu9MDb2GY1S7MQM5SHXPbRGim",
  "key10": "374WK4MTi2o5bTMixvFBLMwFzkLka6sBjgZquMWG5MHuBf73kNxZmwVXg8Jj4oSWNFWJZ3pddFHt5QjCkKA6KzoW",
  "key11": "rqgkiqoqQ2KEgYoVRV6fhRMnRcrkCurxsPCKu5fsGEndsfjhfS6DC6ihGQVYxLM9pdWnVBEpcRa6zgEMuXvQ9rB",
  "key12": "4bNwgGPuczQTMfmS8jxZA6kdj9QYEBBjkswGpFL6sxVigrFZgVV4mQfeYz3TnAWrDKHU1omt3QovDiyUXRYiL8Hz",
  "key13": "2tmjMJtZqnJDf1jCeZexRg3dpLArk1gXcuzcgsCH7mHzJZKdrTyw42WzRmvDHr1GTZLGopeN7pmxYcPWbNKoGsom",
  "key14": "2ebFMTVP9Z2L2LsrcSG7bf8uGBciJgpd5RzG55dfVArUnra28D2wUN5uXqS8Duve5xeprKZAuN6UF4NFQTHSnrQV",
  "key15": "5iyxJBTenZLoZTfgmPcGQ17c7bbMCMxazEurmeYKrUz7tJMqrSx4TsZbFgr9uhcR9gretm9ZptzcZhYL3iRiDLKH",
  "key16": "5ksD4x7LVqXpe1znxBMwh9qQb3ZKEa7UK9DCUgdBosYYxbfmdbKuW7pbrjKGntZYNTa8LXSAqhHT7JYGvU5BwcYq",
  "key17": "41avdyFArN9m1r7wrRDxWNLp6rgcfFUiu84KVxZ4FiKRGYqJTMurRG9FibyW2JAiyZiouW2zysvUGwxajjnNCNdm",
  "key18": "3d1Lj1zkKupQaM6JeRWicFeUF4oRAcuhdQkaUpNJhBVLGGJJBFgCcP7cgnh5ZBdSdhZSKsqpeWyUDXwCAoqKbUpq",
  "key19": "4XxX7Yyzek1Hmo2UkLvR3teDvVcYsAA3JsctLXbpU472jZXUex6vdtRmBp9jyuFNtKqVXVZk6YGPRVsFEXFgCpkP",
  "key20": "2CDsYBTDMPNRkR8L8JUMeqJgVzmyeYZ9toHCbSjL81dbSypzytUPxWaDo473Z7rnkT729yr4TcTjsMszQaVQfUA8",
  "key21": "5UDjv2ZC56mNn6t4Hx6gdSVgQodR28tPmJRstse9G1HxFqGj7ZHbbz8itW2bmmSrY8fSHqB9rkSfxFg8QoCvHd7Y",
  "key22": "5z25ucqFNSDVmgGQHp4bJZQfUDwRm8tiwB8i9RMmyzjpJTeRYp9i7eiAsUixUPZCamM3xgVbqorFdSwuFx4wPu1g",
  "key23": "2FjSXsN1XCFgQriiqFGx2kZXFB5wwkrVvHTkAesg4AHhmFGmYDV7S7stSqkMVh8xvLzdMazHUkVmQexxy3xgPWv7",
  "key24": "36hGPRWVzie8NmCvLHKvY91Zxv3C6njhrbSwLYx542nBSd81Whm3VU6UHCT78UGiD7FuKon1Tna1zwvYM1o9C2Tg",
  "key25": "4rnzFnrTUiBzQmNr6uhDDJWUxW6W33vwUsaYJRTUXJvJ5SB1TNyufGHBuGwx3GSs5T4dq4QZt6qgbWGqge4Feq9L",
  "key26": "2ve535BoxkHr4b8BbaafjthJUN9kDYnzUsUtJFGWQeoR91CkQzphKsBKHYgP4cjUHVNHtkdpVgzd66f7xayZK3JS",
  "key27": "dJ16FEbmSqSFLZ5qQmi6mfJ9nyvtXidn5HBiAtShTziqjWaB9xBfie2h2YmnJHySBJmaUgSiucWc47difUhtFjZ",
  "key28": "5MhbKf5EBaYJ88j2KLyG67FLdkUKPrfbSKY49J6iEAjYeCShwBVrbt9DV1tqxZVfJXNmCNJtEP3YykwWSieVnd1h",
  "key29": "3nkWWp8G2VERZ6nzorSUWyniegtZbfZLyCDLmGFCo9m6i6UZ4RAaopXfcXtnYm2vNvFJQwFKbGwn7sYdiKZSozD7",
  "key30": "4Jy1sJCZPQTfX36shtX4AHfAhXJ4Q7wPqoFTvS1ZYtCU8PdSYAwb31dEVMLmtrFujRB4ThYZZJTJW2LyM2Vs6AsP"
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
