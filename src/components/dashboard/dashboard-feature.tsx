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
    "2Yz7U1vrP1uwW9pRQFNTCCwwiejGLo1pcSXvmTV2mBt3tf2rw9SkSsUGaQqHkeLp5ux2THLEQBF4ir4i2Hf9Am4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JpCBT8sohG5MDxuEoLgFHbPAANvCgZxkFtoG5jAReySrpJqBiBguj2BBrjenVwfRMeQAE6YGBh55nHqbU2q1Mvb",
  "key1": "jMphg9sfQHug71o32EKPHZ4kiA5MqLuBYfbt5TcnSo9T1mfmU9Z2f1maSUEpEHRg35qs65fSbX3n8vaeSuJYn32",
  "key2": "5FhUA4jadPPWJ1nLDCan2PpUJsB1cuib47CepzXVKJFfVM6prXM73o1ysmFRZMzH5xvh5fYewgY72daRvuEgdbK1",
  "key3": "2yRgd9buBYgwAeA4RKAPaZnyWrXMedAcByS4Qs4YUa6hGDSodwZGYMLW5eevA6vffKNnpWxSQgNAm14y8q1mLdgV",
  "key4": "4SjEopUuby5AtgCncgkKLs9ZgtPRtBVdZxUsieGBvcbDrMHYJEyB4rC5cUQv6nG3sMKzr6r4JhAfsTkE4RSWud3V",
  "key5": "4h2uZwBWnBvmq1e22q3vX2N5kU3mUqNpZ9TiM9Vd4ow4EyhvELUp2EqbGVHHtxq9LVFtMtY9t7TrPv2b8x4gdm2f",
  "key6": "3CruVpUVD3Qr5E5JLfvaUNe7zDE32mRxpTT2tDaEv8QS5k4dQ5A2GdWe1AVtpt7yTF8m5EZbSiXnkiK1FoWyFsnB",
  "key7": "3RDjLz5h5mVwJh3WFYbekjXvA4xGegGmt6A7dC6s9HzoKUc3NBkMYZ8m9mQNHm8BetVHVZDAW4udxCNqgHpYNPbC",
  "key8": "fEYhFZiML6EnXtxxYQftVubn4RhFxGrEYNyKjcZNqTHbVgRWakyP4nen7FfrbtZH7Ctk8twtcq3MkXeqZZS1Wd1",
  "key9": "3kcuxPv5xupdTZFc2ES786L4thcaaSgEuAsHrhvctkoCX6ruNcCKtsuPqMbAJa1P6zvFB335uJXPb5oeYT8wVHvM",
  "key10": "4RNDoqgUa1GuMw3rpGY1BLhCsTfKx5VMahVXbuwBppaTxhFqKPmGWwbXgU8y8ymgirjqKKVPFMrvSGG5H5wwvirX",
  "key11": "4nAn4AsMcj1FZgAV4TVXkzRNXeVWsz8Znpa19ePug5zoWvMNtSxYEuboqWfzhRvjLvLQsw43GATEDnkJBwHuGkKD",
  "key12": "2b5d22Pr5rJjZZPxStYpCA54iLe8Z6sqR4X2JceaqpsN5vJJWjcrK8obwuFTvKUjSAqyebw9qMQfqb1KNBqJRXWq",
  "key13": "3hk2HubkMi84SXuQd2jNp7FTKx6BPAq3mKMTaWUarjYSkX6Vux6Nu6v2Ljfz95jvuk9agbY6hTQXVSrj31MQDfTK",
  "key14": "3U7qgspHbm1vobsAvbUNDh3dLfP4B2FsTvaRLoq1EZfp1HgqVwdEB8jb38FnjGBRVztNT8H2xLJUQfNVX9X6yWrq",
  "key15": "4JEvC7v4Vv2Xk111zyhzWMJpM3hrbHyK3KfdeoJvGx9wfjXMnzjzqSARyCPXhsTVCcfT63419jFs31mW5ZBZv48B",
  "key16": "5JSQmLV2WtFReKrSS4mrB5UsMMqqrurLxmpL2dhTUttazYDFePMtJ8c3DSNopJzs9ZBDyZ94u7sVFm1vtEftszMi",
  "key17": "63R9Vw194bHo2d9ZyYmwKgvUQckdrgtgyrhNK1gBhdnqeLy3r3qJ2csHETtDHjRQZS3pS2v2u8H8VouRRYoXRWyp",
  "key18": "3wixK9cf2tbEG3o5u3cphV8DbAyQdyBFCaGbgHLhQvfknfvhrjLgGqn8e6qwQJE6uTesskAbzZXAfXijNzXivGUF",
  "key19": "6XpgY4hLBS1L4zs72HF8nQJvM3x9ufoxRnm6FCfe5k2sADw5nPijGVMUnNwFSZnZj298JmxNnRbFDNhm45dSn6Q",
  "key20": "2xYY97nUnV5FsJyQZmYmyCVHppfdEH3qhh3yVaUwyuUp8edspGbkTCxAbtomwQgyitLUXPF9jfwjRRChw3MCJRYU",
  "key21": "4EbfAK233Dn7KVEMn67zAD9esDxf9dznWj25L7d8f8xjvEXmonhjQ9mQt942Kk8z611AsKD69YTxceYmwjauUpKc",
  "key22": "5bbi1FCpUhmqo9CbdCuRegpptnnNB5Lmo4urrw4q1ppEmnkAJo4sxLg7QecgjqtWNs25J8pmUefoV4yBaKQvs7FH",
  "key23": "2j2wUparBj22SS4ZjwDRyLZrknHaQW1vysgLcVGdGwZH2GzuTWkzLFe5gv2GSSiF4jfgjH1SZXC1Uaj4J6B56PVG",
  "key24": "9pBba3Q6pyRtpEk5pMxHRRoiGyMMzdHZw42zZgnY8JjqhdjM6tkosJqdVr7tekpjpbEQU2itHx6cfS52SyBW6QX",
  "key25": "4SPMhKcpjhMRzARXmUbanrEohNfU9WJNPgzhS6HDooATm2JiBqyb1RsvT129ALP1AXVD6KFJirTgdg4YaWPjiaNE",
  "key26": "2x629WMXrUqgwSWhHYXzKs1PShUWexiZuW2beoyG7PCFaZnjRc5sxmena943NdNT4vgLUDCfgByHdzN55kWCWUf6",
  "key27": "28xAb1tg9RX3cXo1DhHYM53W9A4VXDueMoGQ8rAJ3CJ75R5q2fFfP9xqXGSvyWu4YSnZansqHzuRxkW4kasuwBMA",
  "key28": "tZxESNA4tMCyPM5qhXW2CjQHsVsfErowcy9JLaH3Rity13ULSUjoE3Dz6rvwuB5LA7J1H1GnApDkAFs81mHsdZS",
  "key29": "3wuAtdeh4H19A4PZwByCS1aPbNqahtK9i1prusmfw5Hhjk2RAcTHfAjAJWYJQC39M2PRsovRGuLnjz4LvjAgw3sd",
  "key30": "3Mf6wqNGTgQHpRxjmguncb8Ma2Nhrif87msTUakMC3HFNb222BbwL127ynxauhWphZN9DCSmAwi2asNrnyQBfmgK",
  "key31": "7uBTLNAN86oZ1BUXPZPZdoFktSS7EgL7PGuGCq8TNSw63xiATkf7GdbBkYDShGPaFZ3p1s9iYQgv8Li7gjLcwGY",
  "key32": "65Yhp6HYQqGsA9wGJ2SBcQbahCGD8rsvzA6zAfYtYLxpL2XSNsapBEmivsLGqGHpADwmDmKC8oL37EjzqoLsgtF7",
  "key33": "5Att12mizSNR1mJ1Hd4CTwe567VeV1r2UGBcEGxUn3AEstQX6ZfoqPPT3kHc7w4XfKEqWmRcvkLc9oXCcjAh2Uzn",
  "key34": "3GrPTaJywg6StKRWRhMH5fdux3kV5TXhgb2uw7ABN82mVHMw4S7GN9rZiVFDtzzpDPVhh9fFixy7v7Qrzcy8Jsd1"
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
