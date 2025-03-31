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
    "41smPLYemgQicTU1p41sqKnrU5rtnf2oX872xsnSHoGTjqZNu2hybqHZjNeikx3nBNLcZke5ZCwRDqAFE1EeSqWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PMNErbBkydJkhpQ3jcPBXEKgq3K8uhzMfGHc96ZZC9MTjA6di9nC7moBdEVrT2p7CG8XaJeRH1p6bzSHG5yV2v",
  "key1": "5jq1DnDsEJZqYMHbr6sXtnjUcuSUeb62paSVThF6dhFDQ97tRFzaz1NY1UKHSBQzAkrL1tbSjnNpuofDuMhT1Bxb",
  "key2": "5jbH4k9wjn9Eqyb85QwVrBtoXCjZMHUaSsVvKQBvj5LpUNMVrsrd1NNubZbsJ1TwbGUyFRipoyCDAfPZE2b5fofW",
  "key3": "3HyXHrnTGp7HjgJJ1RP2Y4rxm9grR9TVkVdq7hQFQRcHASsw6xcjXJGD1GDMU42McLP5edgs84CL96s3QoPPXPpC",
  "key4": "4CFsUPqSmVJVUdDe4eqQx3oUrn8QoUZZic85XeosKHhWk5CjaHs7fqHzxhrAfbwb2qFVutR83qUEkPcbAdy5JKUh",
  "key5": "2EBEeVPRtQGwDNdj8iXrGCTjYTyYYWSF3uYzBB48YiMcz6BBWiPnQVib7pJcrNCWVU8ArbXNqNpGkkL9DSCJzUFz",
  "key6": "2chgdP1YgqKpmDvwaxhUZyHePcnnpDkETkAUUCeY3LhpWpSL5QDi8UDrmFe5nEStsFhP5MjauVEnvsKdq9x4MK1z",
  "key7": "3FmZsu7msQhJw8Y2PHfQ4MjFJmW5eJjRx36RNPTmHjGTLsxZdwqxYp1cBLcWyzuJM3UZVvWw29tbx2guc7pvaerb",
  "key8": "4uB2DP8hgJspTq6RUv54WmNREUtHZT2zZqJTe8SEzzocyUT697XQqrwB5aohHgz3pojUGKPVKa26JM8aMhULsV4w",
  "key9": "33RoHAncbgvt9aogvSZuQFM3xPLfT74QyNkfcouno2oG8raYDEGKVUJro7uNaWD8KnJuQAsBP7gPesgZEJWqbhUT",
  "key10": "4eeagW7iKSNkkSFwYFnnGP4oqoF9TuSRWMtd9RdENYgA1cWZ4kdmNJPSXGs82btQNQNxGjnq3AUddP8w1suX4XPR",
  "key11": "3x2PNdqpnPyVbsRszk9FpYMJtKkPstULvmpXHZyKickxMmELqbENMZbiPjBsLtxmESRhciAGfE599TcawW3WyKEW",
  "key12": "53gt9b2hfBMo4xkSjYvXaEYqFYGhPCfHGp8HDuB3Qt5B6RVHcq9Gq5mbJHbT7WrEu5tCXv2YcJP83G8TKsEyCiLJ",
  "key13": "DVvgufQmiqX4rfEEKZmaZBTrSTatuEoxyKJVHm5dBGipq8S4ThvCMw1RkwH5DnEpTRTomKx3mQXAtVDXs2U5vHC",
  "key14": "2i9ayqz9z4So5bTJT7Cgi8iQ7SPikFV91maDTJzP8xZKc2PtJ9o8PG4SF1vmKsrTku9GjKipf3XatcN8HRoHNcZP",
  "key15": "zFrB4FoPUfmCcQeUkY2GbQdPFSmA7117stdKcyZ6sukmzM391Ea3NsWydL2ViectaBG4e2236rq5udEBWwSe4hZ",
  "key16": "4EqvESWS8XqrvKZy9YSKY4WsAhGBi2S2VQHdAmnvHi1quavM7vH9SLHsisLwNR1rh75PCVdFxFw1stF8sdDZncQa",
  "key17": "5S8sbUeHGm1MrQ5eCvMyMy2giYQBTKNiNDF3j9gpBFLocngK1s9QJ8dxD29NvWiUrJ6i13ttJXtXVQvPrFYsbxEQ",
  "key18": "5mLiijJhux1dPU1jVUQL4cs7hjYaktjGu3yKkk71qKK2grm3TpCWjNQciqX6X2fVZsXxujEY95G1jsWYKCzU7md9",
  "key19": "DNxBz1iuAHL8kzHY15RK5misYzVUYdFcpNDsJa8vw485sH7VfxgsnXuyBAzm8CH2CjXXtfbLX3oLJazXMYXgDDV",
  "key20": "5wYTo2sj5gB7yqMFJYzmkmZRyUVtWhUEFavdpqTfDhiVUdEji72aTVS6oNnXvZjSW4V3FUA5jNoJsAFHqvELZmdD",
  "key21": "4EWMU1JvwfLwW9gPkmbTuotBFctj8x9sXfoLhTwGGqyocETcBsmUMpx4NdHtP5Do9GiwPSVshxmVsMLvUm7Pg7Ud",
  "key22": "wQEm2DhouEMwuWM6Vyz9REkUPxi5LvWQBQkMiazdAXM23BwzzSoqVdtQykUw7UP5SmgfWm3voSS8xTT5ATkViou",
  "key23": "2y3QpkXtYbGTfwpC3sLkFaz1CoxRWGvdjJ55w4AxWaUVSYdaVx5df3X1n3qWqWt6eN2JJUZkgd5uD499bTRQjLRT",
  "key24": "5LwdVgrrYaw5ctBngZ2RMUgEoJBKK96Y7YagCibJHsferaRSANPRarwUJUYHZ9hqAgAFsYBhuaYeEbvRfThtD51W",
  "key25": "2AzXXNbmx3ugJpix1CRd4Jf7z8MmvyzrbyMTY1AiSsTqVjNdWcSZmqps3SzVE12Sw6V4TeUdehUwM1C5cXSifr7s",
  "key26": "4GVDwPxPgEHzwXwKHYNxmCyyZB6nd46mA98BEmgPK3A2fkNJQKEUJ1hPg2ykJbi1TGPgHrpC9ZJ4LjEoUVqQTnLn",
  "key27": "3penUZVtSpe7ibB6gneNZ5v9Jo9HnWz2mLeEUFUjP7ctPUDhVM3BfE6nHJVYhHqCXTR5TB3NWQ5LwhDjHRNZidWW",
  "key28": "53UTKLESMYEXkxCvZqsPmX3zCoinrC5tBtvJoXcdUevWr5ctxhWaerfZWk9NJKcgvwevMQywby4NPDsDZZKv7kxu",
  "key29": "2vaJm9SDj8UFQKJqE7eeEk9EtFwBEn4ARf8gmvbc8727QztwWup2TPuFX9NKJzCB5iaTFUTqt6LH8GV6qEvHTSjL",
  "key30": "5N7JJjxgzFFU6SjruGxtpKA5tfwyAGxF1U1jSwArzxkrzTNSpKim4Wvo5eAzUUBedKFXuDdPLJRn1eVnMDtN998m",
  "key31": "5eXZBmeP5Smbtxg6BLQRRgiemzb8HGG3P8DE9CRNSpSc6vMwPxwv95Tz3zPk2cuiKUhmSuJPywbibiV3ihRXXNzz",
  "key32": "5T7o7gtcjNed9JKrW7aYKbWprrN4EVGCpKCmwJ6MRDDwmx9URYC2VLDFKV71c2cbGmFgVH3doXd6SPXLXw4YDfWL",
  "key33": "NaUhDcnbNtB7SfqmcCdGCR5YpdftvbVGDTM5B6qH9GW2impJufBUjZb69DwXuAPfzew27Fp6xpf3GvP7xbLg7cn",
  "key34": "3eTQiVMv8b8W6iaYsvJNisv1qCuaeUP689XzYarKhsHS4PmB9A8Kt6faaEfQPyU4HGmccaecjiu1zUN6uUbEEBy9",
  "key35": "DVvDPE5ykRo7f2dVNhSDNTTMKweJMeaWNePNj9hJDXJ6gTpM4sAFMLcmA4DCLj7fkxzaTiZa61Nn9q6nCdi7S3s",
  "key36": "r24k9uHki5FtBPM3DFVhJvd64wKjRczkYZsSUz4yY6oA8zLvXxf4oLYLPZXqd7iczw2pWj9zfasHQq94HQA1WWg",
  "key37": "49niYzEy9hE5oKFbC9BhSTzAPHkGr2zycPDSiuiFw6VTAJ6sfQ68Szcd8Md58W9ZaKgjwNCYFs1GLVEpbZm5FUQD",
  "key38": "4aAfRbQg5KGNu5DWFX4KQunHMCBeVfWQkaZpSKGTPDsJ5hybqmSetTF6uhU86cXKFxkDBH2FymGcxwUV227JZBWD",
  "key39": "2xS3fixFHbZuo7ULtrsARN6ng6CFYrurxaNGc7E6S64MZMpVNJL15t5TeW5XzPA66avFyEQ66zwnidn79gSmwLGv"
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
