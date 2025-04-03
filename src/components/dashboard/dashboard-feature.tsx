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
    "4JRmt4XU8diYN31uwz7wx2kv6J4VwTSPsjbk6D4ubwY3zZJDidiKjmoLMGQ32qLtWnrRrP59qAKip42RQPVB34wR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPxtLgf4fGrVYD7tpwDd34WkpnffdFv6EJRAjkurp8sw1qiyg1D7xycoNNsmHf5NEhaTNt56VbtYo4mRz1GEe1r",
  "key1": "5BwoB4z9FNe54aD7TK2VReioRvi82bGBYaLDPNqTdm7Xbtog9Bp8pKkhVXuYYmJBeRmVcTZkdVrcjavApHEpQw7i",
  "key2": "5WVwyMcycqdEdePTuUByKLdEgrTNp8h75YYbAfLR58TUBoPJqWU5qHEWmh94NZmM7WLEj7w1LXXh41ECr67CMZU3",
  "key3": "5wyqmQbzv4FARpffFwkPuZdg329EGbeL6jku6HK6A6HQKJB3VcMxLF7rG49YcToP39N8GmRxKuBaq28LHWyFebL2",
  "key4": "aUctUsG8xsRRb3J4ZUqX19mbv3rYQD62P8gNNPNZzb5mPST9nBKWSLzp5PEAGp2osrFqHyZUW2xQoMGj7JLzK5F",
  "key5": "4tmhR2PKfNQWFTCrhY1J9niiFL6gwEpHw3PJjjzA6jo1Y4rNpg4zG7NjQcGSBQzJ2w4PTfJgdbB7xFL7SwLkmjYn",
  "key6": "CD8Mj3Z1j325qCw3Fjt4Veb44GrxHsMqdBdiA9LpJTBYNnxhmNQitp6UxjM3ixVpXKzxYyEZbjnEdvKuPb3DNbw",
  "key7": "2wrgrugAddzqHAuQgouPRd4JRzaHDf9zWUEnJqNQDHfUkf2TgpRMRamwRHAgC1WstNo7WujE8YoAnUeuxFZo4Akd",
  "key8": "5wKeTAw17CjhARFKoCHsXpRphZexLCQ9PNu2N711vbFYrBKwKXunaW1m7qXTSBFRRx7TrkQVnj5jj2BDckDshpJR",
  "key9": "2X6tWjULyowp6m35RKvKnJQM7gM4f323LkWW5UXxgu33H5sCeHWNRxtS92urBEoGTu8wZYtxpBQxrCM1GX1eZW1D",
  "key10": "2cGvBgVr7P1j7mFSVrLxfBeZx8a7iGUt7XcaQZo9me1oMEs5pWnfX39L5hAtfXyEe1imZN3JgipcsGT9jL6vLyYk",
  "key11": "33mgSujtGcxqK5dTuc9cBfHGFEyJSxehAznsFctR9npTdWCvuyPYoJQCqkEiKDJj7bR1poGHAsP87Zv5gTfe2GUe",
  "key12": "2DVfbe6AwksMR2TFCD6AVT4eYSBs9wgXCEmjuqgT9yMq2KuvdyV4B7Gy7MwM5vNDLswM1ezf548uPbFVNNLtUmaT",
  "key13": "4SMyaG3wzgK6svKdEvKRMTNU6wecudm3RrBqk8hVoJkGbngh7c8fQn3562N94VktoDJmSr5EpAEGndFtrac7RnrS",
  "key14": "hck6Z6Jp8VvDSJr7ptZBHQ893Vuy8UH1Nfbesj6HBUnwcjHGAZs22gjuz1qUczXmrXUL2CVmMs1HnUuxhiRGeqp",
  "key15": "Ag7QqJHzkLDee5WssyELfrgwHw3ur7Vvu8hVx6qE3Ar3nzUT93eJCpWsxhUzMWfgW2oWwDzs352FTN1kkgbVY17",
  "key16": "2ipDyCDVu9ruWKyynnDkfi6WxhTLFiHUHFHrzUmHsUYdHDCtLqcPio7ZGSCbxVyAMjUuKaiN7NhwEbivToEcYCHy",
  "key17": "5H3RjVqjh1pBqBa5LTvfwPxXzY9op47TSr2pFCjQQeZVeY7e8cqmh2dsUPAwoL1WokDyKP83Kenipu7neeoGqpPF",
  "key18": "3ta3Moxp84SqEMmu9wwtza1UFfjGB9JK8JKNZ6ALXQxFoMHwXMyehBeKrSqrhFpZBbzF4H2tS34wF8Y33ZoJxLdw",
  "key19": "5dGGUZfNVmvc5yduXEknpWGvUQmNJwbF9gkS3NFojYUYyKKTWBov1uAuEaGbTHBcMvKmmVtFz2TntENshfTwEkQK",
  "key20": "3qVSmnsUK5zuTa9uEiEWrzwHcivHaMibzLiCXBwP6gTFUWWeYykDK5r2zzdPUwbKYk84oKK9mnsUiR5Wx7SK43ti",
  "key21": "4NWHWESGTinf1Qsg5JmioFEFS3CA649vynNEa4zu55rG2tcLV8h4Dbq7tQbENxH8xsE9JcHtfJ1z6X1UjhPxZFW2",
  "key22": "2tEe2jcMtti4FGMxcr7qPPGpiE85Lw6xULXbDk1gDuy5yNW48wjQoXzV72CYUaoeVd8UtSNLA8XChPSr9RgoR5vS",
  "key23": "VHyYwZJWv75HJBDpjWzVFXRwUYpWWobaXBKB5uKQDo9R5335LygPA22hEcHkz4un12AQuFqzHKUGxEX4XJ9FTRn",
  "key24": "4td7qBCvUwvmyL8oYhTH3SdrpZinVbxxNxKG9d6X1BoBn6DSs86PZFf8CR2S1HEc5CYPnBXgAu7Qk7a5AAMfVzNr",
  "key25": "BDaEqCWYPYTt9JJAwbYd6ksj1DEEfC54KUVtcPSfq4H75auANoJhyT3JkusBYVEUUKdUhgdh2hRAUw6dej2YtNp",
  "key26": "4ftm4vkK6ZLUebWtsUo6sKr3tc2XmYnMjVnG3wYxuE2fwoZf6GFSZjG2dnENH39BEt57c3UBsDecX8JdTgX7Yhrb",
  "key27": "56t3yRkbs33hrK6JuJSs764tpwQWdorKCdWsg1aBY4uXSYcyFiZWid4wvNgspAKPC9j1iE4ApQfs3BSrUon5bMFd",
  "key28": "3VsP83e1mnvs9FLWvJwb11Jvf7nKT4a8pi2jvTiuoTBaMTcEs3D1AQcMP777tTxhGHEHsYsJbVdq5SW6RUWsaquW",
  "key29": "4TGTS3RSjyLjDV9APuv6PBqZ5bGuCdcgYpfHg9CHPkSBEBzptsLV54fTkUd95DmMVJNWL8jHXgd5CAXNb6Vfawor",
  "key30": "3yQ3vKxX1qvPDLLN8kqGJQTWPUghbqhNSpyC6MR4LdUdYPx1Gz2bdZgtpHTCU8iEeMqhPEhpwTpgcJsvbEsjZcGL",
  "key31": "5C5wUbY63kf4WeSb5uKdTj3jKzm4ZnX11QaS9GgvY41YPfxeenEWBXEPRUEkWs632nHERDzZTaziKCNG5LhnnqXg",
  "key32": "4ifNfykYVnVpBmcmoZaLkQKbQFvae5g2ZoVcyk4ZeU8qWKXAHFVSn2GyYrLFbSBUKxC45MPJMFbLcDhJyk1ArLAf",
  "key33": "5qzsUScQv8uzoXAvm4Job6qGp2XKEvvuLgK8T9viPziZpvDgpXUqHCEeCiV1s2PK7mpRh6vvuawYT5MRjHu5sJrH",
  "key34": "5MBYbKFqx2XYuPn8TR4QgsiSqSX8xqD3mP2s8jhTK8qgNN857mV6MJtP2eQCKe6ZzX5TqMVfBQwgexXjogCjqg4e",
  "key35": "5xxidjRPHa41VDuc8xTthkZACfx1Vd2dAvgSTKxoWXmpK5DwPWVWfhReMFMwnr3BHjd7NMqWXARs8myTzpi2buXb",
  "key36": "tfCnib3FLEFv4nrJTyv1osk8fbdD4zcHSsACrTBiRCCAepKQDUjRNn8Nbz2DnnxzB1A1BkpgssaVUyXvz3cKhzw",
  "key37": "aG5HtNe1HvWcLNvFbzKgwvHcNnJNyra1qSWTW7NJH1rBqpPb1iQmt1sjFZGFgTGWLtuMwmji6NgsWVDAvVsUvQv",
  "key38": "4PFMinTqqGwpUaKKBKqRCoAGPkKyb6sRyiuJuXWg8aBLBwbyAmLBUo2rzN8ik6GaC7HcZx7Wr2VpJzSZXnzzT884",
  "key39": "3L9uECNUgMrrvn8ah154PgV3RefM53bMW698yg4YHvW9gxob2J4esmmzFD2aY9ca4yWwJ7s9ALaVsFoGAYidG2Xp",
  "key40": "bYR4UYvY52PvEGHrU7em3buH3oZ9Yz8LpCtmC4BAy1grzJ2qyuZb9oBxrMQCMn3WFbZvdyoSBKdPQJJtpS4aJjf",
  "key41": "615WNfqWde3QSpk1FbrSUd5X1NqqwsfwKMLgjMotryUMCE6YXuowRM41FnAdPErfSddsukmAYbYVFcGGWELxpz6E",
  "key42": "2ShDe1YDui9tagQUQqUpxKRShNP23MrJeK133DHexGuQ8xTkrrQ2KzDZSysjJpodWewoKumVoRcwvSfs7bESBTgJ",
  "key43": "2JCCeGkTeN7ZojEsw5wTJEVFPDG3EtVh31FcRCv8PWUatvXzeAbEbKDAphQoNf1iG6y4XP9eeF2Cmw7KC1VQfkRd",
  "key44": "27NYUij8yaS4eq822WQnnfLMvNtdunSPZnxY72CMhfAsZK7kGpcUXNpT3osrC7bQF5YQvtaBebSGKucwmzPmViSf",
  "key45": "ftn8mgeQCiwdWEjLo7SUwmdt57W97te6vt5LWKg1oDwqeSin7pwLWavfFXj4zDzCfiGvQNKrxfwuNqMtGTP4nDP",
  "key46": "2RpJQbNWzS3pevgjDt6GgcpK3GdeVfqqALk4Ftka4GKHPHMreNtPRTUYs6HsW3TBUpFdk5vC2uXE9Kh6guP5QnhH",
  "key47": "4qNuMNQpxKhs2x2muNNF4JTo1rzysB92yebLmpCvov66n9pJrGyaxCrSPbV8oGjL7wJQ22FgPG7eoht55tcxTPjn",
  "key48": "5JYNJzt7e3edRLTmrNmzpYXeiRRpb2kGiTXdCQJ2AHNx4qCAUhT328SRLfxNgn8YX1CrRYq9vThxbhuoKRD8Lsdt",
  "key49": "3mEWT9Aud2ZzWD7j4hypJ7YecviEoViM6do7poRBmVE2RgRVGagqRYNo7DQVAw2DznAkosF8A2sNje83WTTbKtUT"
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
