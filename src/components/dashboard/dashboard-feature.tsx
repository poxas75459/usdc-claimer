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
    "3ywtGsSfYwjCCqbqNW5rW977uZ2eH6J6eJRo5Pgxp8SwmZ8CViZ2evWZSn6T3rmXvESuLX73EVkdjTW2Gm3XrupQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2doAtoRx2mRnN1J8h5F3MNk6wYpKzW8dDtfiw4cELrcoRLPGWJP1P2W3fGqL2qwT6qAXCNntYCzeToff4Sus2r74",
  "key1": "2T42RQL2EKvCcnbGd2DkVvWnfmrTBduwdbpQ8UDPYANgH5rfijjtweiTMcQTPv2sLCNBVhy6TUQTBubVYCLZ5Ljq",
  "key2": "5dEjd5PsYbCRPmU1vzqMKeUC4wukWfZfchxZXhf97pqjGkW1SAaNUk1XSD4i4ZB2grdhwct7zgi2VGLsFSKB4Erk",
  "key3": "22ccBjuM5F3kb1pKEApcCgb1VPqXNrDRUB9VvUKbtpfMV1F3nLzmSjeoG9rdgyUvXHkyeBNjNXAXo7rG2T95CfPR",
  "key4": "4DHcitAfkjHdPpHKp5Rk7xu7egsA6kq5KMq8AgFEhmfZa98bb9tzR38M4j1kXsNvvrafDu68u9KKFTjfKafXbEBa",
  "key5": "4JhdCVcUJ1NZRoEVBTSHjTHdCbf2KZWgyU2EBMxc6ortEvDKP4cBeeH4YdSgaMUJPSsZ4BvqMMNhmMXXjm1BJ8Z7",
  "key6": "3CPSy89eZH8e3xNxKeNKxJ6ATX2Jc2DB5wECNTu2TfBdygSKbTPbMo6hmWuVZy48hKhmzrDURzfy7qGg7TNKYroF",
  "key7": "51598fbTVvRXd7g8KmPnyEyTtebEyd49V6B9Crjkci5tMSzZb5VXjp1hcBzHeZjVQBXoDBNvpwui1hbbpHthz5xb",
  "key8": "556MiLevDzpzHxd5urdwwS5EvSC23qynAJtEuffS3f1S7Nvi2ADccrr8b6kDhwWZnCU5TxSiunauSPyryh8NyyuK",
  "key9": "335zy1gNVtGmGvTQtxjFcr8HzXr7ZDeSzZKR4YmuYzQFMi3MVy8y1aoVuc2kWK2ZgHEv1vrmEYcSg4tbdbj8Z86k",
  "key10": "5V8oBvHW3yynfCM6DF9zDw2EaZTNPALo9o6hd9a7R11zPiNN3QvjMuhcfhzxLQPREo8bWxUZ9b74bcUBYPWSGNyf",
  "key11": "yGyM22pFaCDCrMX5f5Ps4gVrsi1bVLY6AFZoP6YuxoTgAm7hhJjytKg5Hwfw9hQr1dmncwQcURvA3eywMsEHgEy",
  "key12": "3YfKAYz1QjrHB9GwRhQGTrAMMNZ6xf5Gxqz98cnNGS9na31goiituRHLMQVNRSogapUGZPcFtCmtnowQZz26gaFv",
  "key13": "32rXnyeGXZEzPErpiW6XNcrb5MYHAD3RhXytaQzrhG5EEfjbKE6bjsfiPbrfaM3VidMeMt8iLWEMm4cu31WLc8zj",
  "key14": "5h5PQboNMPix4TzoXxHfm9VTJSojPeev97GYY5uQzMqBPNvtzpYKF17xdh5Ks11u8w4oh9TXGBEvwUf7J9WBwyoQ",
  "key15": "4Br8pTHi8cCrD3Au2uy1JDqiSyQ13cw5EAcavb6aCwNZjHZFudmzWcQycpny4wpgr71z6gt9FPWRbe6giBHRFw9M",
  "key16": "5ajfAbbdfZELmNT7YwHu5v9JL6Ex7trf9SVgvK6xGPRbfmRHX8AKmpdf3TqYNtNg8XVVREVeAUDJoVrBgnvDHXQP",
  "key17": "2HwK1kfaWvPotK2yY9srT1UbkgHB7BaZeai1Q6fXXNFxsUiVybGgs6WdH1eqVcRF8dtw1NvFiXH8CVmMmXr8Tvde",
  "key18": "cSv6RGtC2ajkQRuJEPYCGrFGsZ521aUZHZHz9remxqZz6J8m5Us3SVURyfBXuRWA83nmT6weFzMrdCmcrgVng9Y",
  "key19": "4sk1SVhbByP4gpxij9tmCesmV5jjMPzxym1WGzm4q1EY4h4MX4RSFHUvFACh2H11LtghU4SM3naFdUUZb6Rxzvz3",
  "key20": "hZXRKVMiwMin7BypksG8xuFdV1gevRqvaYFDkvSmrfA4NJ774PtFv1CM2MxoVMJyShYn4fieaXA9A7V9bvoW6U8",
  "key21": "ixCCUQiPXHHiteSgZFbVUhmwTsnCb3ecuXJaxMAPidUmp7DWd6YRyPV56Nai4QUJ5pxqF58PpBDvBRPWAY1ghcq",
  "key22": "2eW3gWqaJWrJrwuEQiuW7ybWGKUnHQgjs7yYaYw1627ruSfv6fjzZAfJyNMAjgreFT1EEuzVhdePdNv92bsonvq3",
  "key23": "4briFw85hEmtBA5j89km1Lby1bd8RvyHw4fYohwMjn4zENRQmBcqoUiV273iMk7PQgV5aunGWJwRWtVBRgsdJDQJ",
  "key24": "3hB2EKtzhnu12G8UvDVVr4JzZp3bKUy57pALmZJ1n4yQ57poENDGmMVz3VjmgC8ymTF5WaCjJUAHnufMh4Fggpzx",
  "key25": "jRmNNQEgT2j9kBr9fm7v7kyCUu3XW7JGHsZtKZUfBUUwyZhWpGhebtoDjDvBcEHhizhXNiQWc9dQAZY7wahs7VX",
  "key26": "66bTxpVnbcSNLNo51Wt5x8nTMG5NjSxAoinyjtgeSvxWFVv3dDSaemdTtVZaoduWawGjQFnrAF4bHS7sUDARcLjv",
  "key27": "2i7Juckczcn62jXzaMLA7bo1kMSypeHy6s61u7bWVRP342wA8E5hE2Z5WbbhBbpNMYj7zg7qWQVhwba9pE5jvVn7",
  "key28": "sM3Jft1foazM5mHFdMRNqnHakRbTR59Rv7vgMN1NJagpgQ6eg1Nsja3UGUA4QLazqphDj67jH6psKAAJKnf5tqJ",
  "key29": "3X66qSLNBghoG9Kvf4QorjxPFvyiBa4ZgXYKGfz5nZBBVczNWCerMr3twAdF88qoEmATdDk9Ph8zF2DiVXv2ugpB",
  "key30": "2Cw5VjWCgKafzs2Xhizdw8RB6jccWTd96xWo3NtBoWTvpRPSPuBLZX9MmQJYh7ua5c3oY2AnFQBQr98NE3rqbsAt",
  "key31": "314fKNNQyAdyFrjJBDhNPGZ1WynbomRjeHB22B78X9VnixkWC5WS8N1iqSapXwSMTakCgZ6rEs6aARcYEC2FKQaw",
  "key32": "3o1vLQ7fWmn9eXVSPTiH6r2TYDL7YpQcuwtE26sS8JZMJFRRT4qs6oTQ2HtphbKYG5Mjb5KnHWjFK3Y85MBcwHBk",
  "key33": "2DFsnssR2WoBvmoBZ5aHtvYSqgXBC5vz3PvMHpfY4d7qL7aKi4mzewvGGeBvZQzomKoHEuk24vVj1Nohz9TRtr8b",
  "key34": "4omjpFPeUzqC67ArGuNYrhtAqrAs5AZTGK6XuDoRmzXNPQjZpu3NwWncCzB5RKF1rXxPagrVhgYYe2jrz6iE6s69",
  "key35": "4XNBxz921uH6yizzWi6jpTSahWJjWEAsh9FpPACNrKThTHGYUEriC7UsRADm4SNuN37XSpW6B7KakdCeHNa58Mwm",
  "key36": "5HkXDq5THFAfMjPxR7XbGN6gKxavXbpA1Jh3LTRyjFmJqqQrmJS6tJVG2YL8bESPdxRZPJ6nFUwde9ih5HWPQuRx",
  "key37": "4tD2eiKkg79D1nhd6VuLrrCfxPZQnaPpFFmiH2pbLu5QMUQiC4hX5V3dJ7ffdPqpT7ysNwQM9KgCGycShRWsfCDu",
  "key38": "3BnhUu4keUqkydEZWfkMzjEhe8S6PRiQATtapze3fjpaV7BdzcgvPAstgeMdRWE8FmoSWpmrhGKchNr7KYUHzB5M",
  "key39": "2Tx3ZhN2VzaY1Zc1zP3DNgbygmp4LNyA7K7nYefw4cNJ392TgakqPMygQdZzm3Dsqiwz5fJbZVzC8Y9eviLgFrCZ",
  "key40": "4uyQmAJVDif9gD4YoDoxFy6iFubQDodZL8mQjUZE93Y4aPw4fnkEnEzedETzHe6uyhMqCEhzAoifEH148MFscxd9",
  "key41": "4DJ1GT24txJTrtwMeHmvTRCQrmiZ1pfMrAr9XMZCseo49dPM6AUxXoiA9HgQBtsVkwzMp9fKXtLs7dx163QTgeqR",
  "key42": "3KyjYqpMWf74CpdCidjd1AA35WAwwzmfgYqsimWNGiAaYi5quJRQTFJxjSXqwbECsevzVHC44CLbSiJxHCpEo2Vf",
  "key43": "3M1tsD3fNL51fME9PQrbb6QMhYB8dux3vb4vLpvvfAuag2H1ksDXJ5zvdruvVTC7dySj5oEpWrwHV4BMcFSYLF2R",
  "key44": "RWbaus1UR9zn5PfAWvHpRqyXoSrgXV6rNtgTmaSerH2daEVDnw3h9zQ4fA2m3FRUkyEdCbCcAFLnNVhXr2iUYmv",
  "key45": "49nUHi5xdMKVsTDsQuMWV22ceAiSVJpiscvP1o4oxKjyenyhbiZPY6MCzUbVNhW4x8689WkCUfQ3hrwyzYqcMc2G",
  "key46": "2xLjytjjinURYn6mmXweTSu2FgttECyrScEJQ42CdSJUsvot2dz662wU1EpLnQUZPHnk9zKfAD9Qw6rMM4b346E6",
  "key47": "W9FvtdKFWo65a5HfTkiMQRp2pwazky3vNFkGV1UhwRYrxCVazRW2rLKW3RpSnoQJYJZFiigZ2wyRjno5JN5N2XZ",
  "key48": "4he8RqtrGAAePZvBwD2r55AQ56Z7SA6oAL8fp8wo7TmfYmbremje9fJdEtfG9M8Q3yJiLv25nLbmpS3HadLRyKh"
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
