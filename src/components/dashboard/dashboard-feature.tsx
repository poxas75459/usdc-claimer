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
    "2a8nC8bGayK5Yicp2NmAKobYru7MR36q1LhqxuArYybUqnsP2PLypMewZSUg587P1wwQxcfpfSTrMU4GAKDHv79X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BDpJMFMwQxraoNrjj3p5wMe4WBmiXA23e181zxa8awUFTjTEDxDL9tktZFu1DkLGWuVJN7kQrzpdMp1kJbixrQA",
  "key1": "38r43C8GRcMuxUf2VEnGey9eRUszdmkcs4jvwehzbuCctyJWkg7cbZoWBgbYoZK9Gk7dW29U5JmLUNSY1cjjCMNw",
  "key2": "jtcCkD8trFVZsKt8N6CaukxDea5oYL9v1nY8R8S3hTV1vbWJQRjLbAQMCofitDoMXVnDDD6ozTrT9CtmKaBcCyE",
  "key3": "2qpDpGgoyfzp4ygY5bB7cnwQhds7GfZrEgJiKLee6wK35ydi75tBXdCgBiH4AgUAqXyHbBXUThhTcDDSPmpHWRkt",
  "key4": "59XXcYphVkyS371KVDkAAAL5p3MSSQhoxy1KbdehBL6jyhyexHiC6n1fHjHxh3oBvp5N7NnKfFhRagRwwgG2axFc",
  "key5": "4gX9U6q6ewvTVGpmo3KcrR48NAbwyVw2vPbuP3c55781F6muvLf7Qu8ZxdW47VMJCb1CW6LqTTy3QvXTufX9RbYN",
  "key6": "4RwE3M6kdRFXGQstWBy4Anpmfr2qQbUvBpx5KnTbqtv5d4MH6HxsvWKcnS3pxCco13PMgRFmWXfW42jqLyJxQ9Um",
  "key7": "sdSNgtonTxXVgWSaxoMmNoE31HAwWZ7SsLnvGYDM13FMkrF1aUFshgdmrnXuhcBAyzJKMs5zP6u4zV5A8beB39P",
  "key8": "223kghN4hzqGf1WAFnk1YBG9u6ksFnSFbbzQxE3xFLJD1gx8WLWTmEKDpY8w2gb8QV6hhW9zeS1iWErNUun9h9G1",
  "key9": "3AEGom74UMm8UUyQKqqjSTMGThRHSVzqePxTESVq144CAxnxMzcBuPQv42BoqEq2no2E6CaSLtMpn71XN12BVSQ6",
  "key10": "jRiF9N7RoyegPLmRDJe9h6NomhcrA57RPQsa9T7bmBbmLAVhCnZ9DtjNzr7hV89FWLkKybU7kLKw2Pk6oHVk38W",
  "key11": "4S9LtSJK1YLtFosEQWhuE1qXwEQrpXV1aFZWDSSx9U9U4rU6qGWjhQZQ4WZ9y5SCmZXnQvPXpqA4Fk4bqdc5A11b",
  "key12": "4BxQt4w6drZ2Lo91w971RM4MJaQLPi6MqsLoJxwyLDZPtsgewakNNKxR9VAoRZpmyBZiN8aEn1FQQLTAw4kzn9yF",
  "key13": "2p2gNnFX2URChj3WVADG7kQcJsfeSviCSD4wMnBJ2XvfdMmBSvqdQJsX82PU8Bu9FNA8ZKicQ9e5QkyzzcvUzLRr",
  "key14": "2RUy9a3zPPMqWiZXwmVSHdiUhcTtPJqXhrJAzKtYk3dwUg1zn1R8M7vnSeZD4o9Ca6fJNzxmLPivnWESSPVXYnwS",
  "key15": "5iEMpaTFLwzerdaeRntqecpjkWxuzz6gPWXwAQ39efyahyTcBMt5epsYbxJ3dwR4CzHM3MPTY3RtrPvDgEX5ivpd",
  "key16": "3SWxpGguqiYNMPNz5eKmz1KYijsraBARAsHkanua2mtzY4AkBQLkhWQLiQ8KrRW6z13bT7KHwkKVnAmWPtiA9gMJ",
  "key17": "4ASXojaxDMsWw8F7jqTkay9Gm3XjFxy1QgGvWVvHnBc4ra5uRDRqe8BiNFX8zuAK6im1fRKy3ZahAicKsPZMJ3nN",
  "key18": "yUg4bFBirqdCnTjkhgpXmPoCDCB6ouBV68fiSwFqust5coNuawywdHtFV2nQNbJ43pwsP7dukoreu6bVs8gc3ea",
  "key19": "2F92rr9eyMCAoceD5BbQD7itucxgeQo9tKMBZKf3s5AzGk6dMASb3LFnfE4a3UiukJs8CuTxeyQsii8DHNXv4QF7",
  "key20": "3M5KpMTUC1PMXb3D9GBS2KHPaY2w1J3F8x9SbLsMaRN9Z4f9XbKqQ4mkEamMQpNjG8jpig9obVidcQ1FnzvH6Yp6",
  "key21": "2Ky29GP9Ebs27vqgTCbZqM6oupaP8F5SkaNLyDQSsMRDFyRNVBwfgYwY8rXwkVGwYjM5PGWNUfLAvtMnxewfiZ4K",
  "key22": "5HwnTkhURpDoWDnuAuswNjRMgvDWfmc6Ppw3Zi7BHM2zh5e7dzwmntZsEypDHJZ1h6WBqUaRejjo6UMbTf8JasA6",
  "key23": "3T5XnA3ZGsHqgn2PLtf3wwpcikd4ATsRgvv1rgDyMEvFw1UZGLDiTDjPPaG3iQwsS22PFUnBQoNg3UELUMkHJoVx",
  "key24": "2R9eT591kt77tTPdKAUHN5J4BN4SsYzU73pV8KorPH7atThEMpAQZw2PKe1ZqtQV5CzMSJa5K99t2kzGjFn4eNhv",
  "key25": "4gsLi2NrmzrQUkmPsxUcVRqQ3AkTNJfRkNeuRw7H1P4zKCFzHEeREWiQPMpUMNWHsPdrtycTsvKi8BhvUz3oJp8Z",
  "key26": "4fkjjDGb8JzBKDJQVxBtE7HKSkUenKfUUugeyxdcPL8W4U23ygM1rUNxr746cht9Ty94brdDr3jCESeJXhgvF61t",
  "key27": "2FmKqA6VyPhMCTyMNr33a1KNCo6cmWQPkZnCMdoRxFyDg9AUopznu8QyLcMrzArDZ1Twxeo9Tee2nmoNXNDGbfMA",
  "key28": "2WSq41WvzZHSx7UbA6VvCq4gHZ4pNToPQc4qSGsbYx2a9xG9wrwm5NJsgx1Ae9AnahHCn7ULGrSWqRxib3pTenZi",
  "key29": "yPgtPsgJQCHqV9NXX21Xf9WS7sTqwURb7Euk38kZtxBdLaEgEKGQHiduEGb6pEgFVNbKcPjSaMfCzGRJuX31Ca3",
  "key30": "3jqXmAYZwELbBQAJwzoViVa7eovnbRnMMXZnXF2WutqC24rMqwe8X2tSknKTpppWwyqbBiQ8caXsJYmudEDpytfV",
  "key31": "iU2MdZVSeup5UFmnLbYiiT1XW35DQnS7MpmvqaeKtg7ydSxwuziCEFnHtsst3jcUBt27xpdgBGB87HQBdxYSVYe",
  "key32": "21r5sA19xWpcFkMafPi9MNKNrVHzgHvTbGGq16sjTanA9iWJSh9N8YSFqNoQ8oWe6cupu8B9C2x5L9oR47ayQsKb",
  "key33": "4GNVzkEcKTQxra8vgRn3LpQmqeeQ7Bk6faBrPUvrn1BTo2qnn1d9A9yJHaGgjE3hL9ehD5X8kp6yHw5NuGrcXJU2",
  "key34": "5TsnXdRHxAJZZGJm7kPjrJkgLbECcqwBDzyS5Y8LwJU9xf5oscaBFoUpzhLhv4WRmjQ3BZ81qNpk7yDL9a2zMCWv",
  "key35": "5s5sRGnuMJaJ7bqXL1nikyxxDziut5bZhmnYyGZjXmWvC3xRfrXBai4UhsTyBqVYvSsm2oNyBNv2jg6qGq84ngeD",
  "key36": "67BHc8EEZB3bNfvyeuXn8fnrc7BjaMi3uusQHW13CiF7sbNmiEEauKMGw4VaPbRTPtAApQVU985kfhBcaZsnSZft",
  "key37": "HFA6iK7zZmpfqvKw4enHkmUjE9QPtGwCwtuAotnr1waovKUfYNYvT1t8KFuLimpEK3M7hC1thtKGWDQ8srH2G3W",
  "key38": "5DFxTf3tR4gdYKnkYwejfNu2FEk6vhxkTduDPFn1DWGaXCwBLuXSSUs5JyXFqGW6D4XfREJ2TTtCJ6iHk53MhPDW",
  "key39": "5NKsrAgqntg4xKLMv67aQEAtmQrZQbNMofG7r4gZzahCdmffm37TAS9ao16jxvRCUUY8gwNh2m5jhmQ6TYEWEXpT",
  "key40": "2spEqW7m6iGrko2LMLEBEEswHRHirQgGq4tqDaqj1YDMJ5hwzP5TwvVTt3Db6qPCPfWpPV2UiLGCZ1tJ1TYnyky9",
  "key41": "37TieC6tMbUXDwEV4HjfNu5HY77GiNQEUoD6PNu42WAS9uDjruxYAJyd1jLXonhKFhqdPYS9iKfHXdBZGLum3X7i",
  "key42": "2tUy5pZpraVYwWeGjzKDZpgYSsqBksV44sPdqKNKEfTeFujRr3JfYvQ8aJqZi5tHGEDZSBcG4vgnxyWzVZ5WpqTk"
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
