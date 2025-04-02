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
    "4YwqKW6rUE8omekdGnBSG7ujUai9EKbBaQbQ5ECc61drs9znhCdC4CvEJSzRVoQaLaRornNjQD27g4rswbQrYKus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UeL11c8zsc6F2vWeAzZ8eGTADzkL5hym2qBPdftq4jzCAfAJojTMLZDm5xb7LfSCWhBhLwTuspzVR1xgN5MeERj",
  "key1": "3P1hwHkQ3GGmBURwPCoHkxNaU7VpfgnBTBv6Kogkv7jEum5cmVgGu8GC9LgcKBqvekRVFw893hejunMQ2Ue9gp8a",
  "key2": "kwoxWTGAukyjMepA2J6awVpN19DuCpwLzA98KN5ZKyXjAxAuHbfFxkKiktooE9fBrrUE2p4TGZnfPVPThjQW9yS",
  "key3": "4KbM5e39MM2Y1v8Ff162LpQdQDSnyuMm8NZZrf7EZ6XPP3RZeZKaAXzZnwAnjHMABpX3jx6tuW24UsuwgQ9XKmUP",
  "key4": "4iHS9NHtsppGUyWFGpJa99GBuZjxJbvfeQJguta3fetHMq1GfFzeyyJixxpv9bpnYS8xrZR9ndF1FioLe95PJWKv",
  "key5": "mnBjAnHZQdVD5zmfjjzdoWCJ5jRxRQr9yvwXTnK44ovPxgPH3nT1dZVmDFDeAxnFrxx2a2NetdQTUeNpfCd4cTB",
  "key6": "X5Ja7VPnWgVgPKgy3pCwhpTvcaZTzgSAv38yAAr4cLq5D5JNBRmJG7ujVGNojncZe9Hpd3FgfDYDho99kYA4dgD",
  "key7": "34ab2NUANfaZDchp1MgE4jX2QK4TTUcXMQriv1KRNxHHx5NT9qpA2VUbAs4NaKcJTSJDXMXUqh5vCDBvfariCXTN",
  "key8": "5bwjedxMyGwf8eNNeiihE2kTiieccq87jQVBeJVfcCSo5kCdU2xETkBkW7ZNv5sdZyoi7TN8LqG5fxQWP5nwWpEu",
  "key9": "4DN9sYERbbXmQ9RSu4nfBQXuSsbukRYBUve6NF5RZJCDt5EL3HrCt7SnjqdYpZjtpcGkx51HnsFCK31KEFMHsYkb",
  "key10": "J9sUTCmvSkugXM5VRZMn4madNDZzbLb1srhVqJpChAhWNwperEYAqusBSnKHLFV7jwXxdVtNH5zpUkxCxFoZZ8F",
  "key11": "3YtntPUF3LeUFrHXeSgVtVKpY53GRtEXHN3U9mBmXSTBEGydTYEAyFCTdKu6tSuhDPsVAvMHhGooh1iQ9C1s4Tsv",
  "key12": "67bCjkfzjiFBcebzvTMUV2jvCwGVK4U63VTYQ2uBrk6YcznLnChjmWLbFWk6Tb11uP7S8ioRviEZ7znUELDrm1yp",
  "key13": "3kezpR3xotRRL9oRmjjUKsiMBwhkBpubddU1QDwjbpJSKbASMeJ4TLxye73LtJPu8BwL5McP939B3XxDwYKqS2qz",
  "key14": "64r1Agg2F9koqE1NxDM2P6fFjRPtYubmMXH6t6zGMsq94GjBZd4usWGSaKcZhXEEuRLDDzNbDck7E5kEmshhmMU7",
  "key15": "67esYQuuMQsyzZCDht8gA9Rn7fQMmYX2cB3nFcjaBMPPRrWGGE6kw2qUwMejYryuWUSvYwhUoogG9MAEw5KHAJmi",
  "key16": "376JSPT2VhGz6Nemed6Q5LqYf1kriyiDS2KpgYSB8geMWDAfqFp7B9CUusTdPu1JUSHKD26jvqP9qy96dxsw7ieX",
  "key17": "5EDRqabSr9hooBtJYMvKeXVutoTG9yNuytf1PDmqZCuquF6LfPPmcFG7z6JM1a8mcixQnpaWwK5BLur63eUmoo6T",
  "key18": "AETW3Hjdqocq3GVBJv7ZCyxFoEVYpKmuzByt96Dx8DNa42toaJE5yLHq9adoVWWmAyeGdKmAePA5NLrCPLjThVX",
  "key19": "5SfPWzom194KxvhBNqUtoNtKrZVgisg6SMHFC3LhezABHqWVVgeU8L7bk9gqqMKEvLVR831seYnYnweRpn3dXe4C",
  "key20": "5oUF7XP1B5YFWhgVDPDVjk5dtmfkZxpTcFgTP7XM8BfsiQVj5EWZsn8yv2uf2bF6Uzs1vBLBenSTh79J4N18PFNV",
  "key21": "16XZZ7c5j1utyMMusV8Dp2bi7kNF7u9miNX95szh1i3zXBQdd4QLG3ZfpSFFgaRLAR7afphYyLN7KebSCYDsY6a",
  "key22": "Zgejd69XZkZmvXUFwCeHF9wZgZ18VXFb4Vmsb81WnoJ2FMNP9P5fmiZnmjuPqdcRevT4wV93SbFLQXtdzQmyv7S",
  "key23": "YH73nkTECureC4vwS9Gixod1Z34UEgY2T6B8mGRKxwQFa7WANJmHrZtdjjpUPJByN6Ku2r1SNx41CA8wbfyZBM9",
  "key24": "NM6cPSFF9iyW579F6oGXu5pEcSZ61xLQppnueJpJA3QYMmNGVfhkTWBYGLZzySQYSp3BSEorfbGEc8GYgfnGDnL",
  "key25": "36PddxMdySCNKW7mSDq6SRm1MCxUxMg3wsqQcDNMubfFuyuMqRWFuz8sPZGRfiJYAuW6pnUf2SaWB7zzaJ8ngrtV",
  "key26": "36g1eSddDvkd3LEfF2iQDJDCqoJppYxyAMFrThYCYr26adyHSGnjd8pv5Gy7YuZvjHjKcNdgph2UjVUTR8PMVvHM",
  "key27": "5HSamPapJpu3TYrsiGfDimgpp7kJryRqwCeVj5u9yGBHfeza2LChCCgSPuxtSUjhYxmwa6DhEaSdUDubca7pPQT8",
  "key28": "5yVVGkYjEUG6znhuUFCRFkmZM4s4deaLALppUb1wHECigj3kNSYhx9izCx23FUCQedpMqXYoDRbdJMWLQpiRj4CS"
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
