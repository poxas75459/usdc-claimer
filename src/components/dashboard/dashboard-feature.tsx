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
    "vmKJXuFGXrQB7Sos1cRTKZub5tT2qvo9SGqYW6pU1iaJmjbvBLrnzLrEzaZSadcy2Bx3PQvZbUAJG333nYNd3oR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39j7NWGS5MYpLAzoeQDbBkpcWoyHMFKq11fMhGtGz7wqpVK7c7jAZpUrf3yw9wfh3uaVsvgFjwYk3evFBtYDtMGK",
  "key1": "4knTaNfrbB3TNaEhSVyUX76QJedTx4JhR1R2ZGSWud3Dxfp5Qm5NohDiVrsWYHb4jKWZdRTt5Zp6XDLHAQWL28My",
  "key2": "64NMAg4zWSLG55UvWGJUX94hjYutKvccGiKcgKvmtNE3vjjBffoqWKYqEtnWTPVUoCDmTjQ3rqwcMfccptKYg4jD",
  "key3": "2sjjdLfwjeCtUqn1XYrz664W4PwbXViFEGu68hq4sLN2yYEsLFZchZXammPW7wRyqvVxat4m5j4tQGfXLrcJc9GN",
  "key4": "4rE84MawH28cu7s7vf1Rt5vXPm9jTh5eAvNUnFyY6mL7tDyaSNwRESdBs9PqRspR58dBca3FkmfmwHjD8zvqtR6U",
  "key5": "43oCCkBotVAyDZ5YVy1Zhbajz4aAHYUKkiDavxPXJQiahiS1HZLmhNqobcMBHAsmnowBLrfLEjSjqFwCY9U5qc4p",
  "key6": "47xSXzEeTziEN48P2graMzyN9rZoqQgeQGt37QsKatbrd5MyRU58ZFnRarjE3NajgHwCoZiEtjx88cjW8HcJCq83",
  "key7": "2rtZo4kuu29p1hvnLhtTAzM32aXHvDMyxtTZqVouTAUbJmfQMWTA4TKEBntRWrR1VzfBotDY6paAqbAi7pgoHfJd",
  "key8": "5ArFq9GFAwx3JqfnhYxuarV5mGhMmycjEGYeVa1kSpdFo932TfVBLvfVpoXzsvYaGGUf7tdCNunTspSZAF9LHFUL",
  "key9": "5gzDWYfmXCC7iXC75huUxgbLLcfT16UXSHXWWnbPrgiFdtM7zLdPvX3EhTTN6DNwhBmUKFizSMqJXtksAa9C2d6o",
  "key10": "2bdsKwvXxAxbAe1TKReWNiMVbfi29azen2ZBmEJMJPaHVaYBm2gqhky8prxfTkUC9bWXn4PdWAg9zuRXzRDqyLCN",
  "key11": "4WqhJWbNoW2NXr79dAcQUqsu4thJKYYj3gzhLaWFsT6WJFvNcdeTEHmuvmX9VStD8jAoTV3ScRuuFfij4A1DqxkV",
  "key12": "3JLgsdKdXYHnKmXF1Uk6zXgt9LZAqTjs8rsFx7GNT8KoSsiEqnfTMjdbmiN2LdN9ScvgDZ7QqRTdRUtkLq1Kgmat",
  "key13": "2X79Fq4BYbCD1qKc8ZCjWUcHQCRBqfMeZn8Gf2gLXXmE3KLtbuCyohjRqtddkquKexuaoeJ7mVm1fa4Vfy67KkQ1",
  "key14": "4Emk5tARBmWNXZUNuxoEbNMD1t8mdSaynJyPtn4SriT7jQvj83jZcr1iqrFmA7RgBJmHULMokeyuuQPep66Qg6TV",
  "key15": "2uxertbKFKK6u2JXFQHTyeCnCLwgBGoWUdmWjbXdaLX8xQHfM7Y35TmGtGgi2b8M4FYsWZKjA3XJy5rpbVDLWgqp",
  "key16": "367JwDRvJb1Aw13b2QW4nxYw1nWgJ4ReaSvaEPRmAZC5ftmkCFa3M1Q2SdMAnHMTyUxzBJmPnCv5DJXWigpFkLou",
  "key17": "ZUor9UnUXhqXkN1JstSEPn6QsUCNENkRnsUHsx5QjtDirGxFJeEzsdcZn6a3dgD2miycfVQVNY5kS7jviQaD68B",
  "key18": "5NpsT21h16A1sajzsFtkynMS81TpSuLWS5MXk1YMkDLUAJ1L9WZ1j2uTUmd8u5MHEEixmCb4v19p1dxpSJguKLBH",
  "key19": "2KZCgxnGQAnrs7yKTgeCST5CxFwU4mudzE2TN6NNVycLbkoJFZiCB5RuW3vBtPBZ6tBiXUUS4CSBUiBp2Dc5y97M",
  "key20": "34Aaz1YCwBBDpoSfdxB1NQ8C6Qn1PCkD9YaotYW48azPKeRaJ6WqiNuVnJK2EHfPfpcodXFUjjFCoAr8cxZu4251",
  "key21": "35XEnxdaFUBbqgMz86LequpHJwmXCJAfWdZjKV7NRphToPtA3sXRCDaMgVfxoUGdrFB9fYMgDrYpd1VaczzC9fu9",
  "key22": "4t2MMQwoP2gX3rXWx2feEXinv5pEcTMAJUixMkb5d9SRkEyMSjgbHUi2Lveur8UDdcN2NBtk2Whgj37QjNCgrEko",
  "key23": "2yF8QQd2Ap9dMGZhw61P8tCMPdmnjKQs9xtq6heaQgcAssPqPF641nT9qmqm5eGuaTRQVX6Nu1xaDoJcpBhtgpqn",
  "key24": "3LeR6Z8TS5njtjJmkisxaCjbEnvdPpxQqFqwpZA6kPStDfEaqovEvn6TrmNu9MJNknTNiZ6LGALLnKZU7qNNTEam",
  "key25": "2cudo4CeUSXG3Pi2uVHFmnuN6ferYsynJUKG5xzCbRe44KK12TEJ4DkCCgUiB7m1LWQKyuSxSo88u38KMJnnqxRE",
  "key26": "49yAmuFjtLoZA455WwzXu18uQ6s5JMNva9xd1n2QU5fUXoVzuthqMz3UELVE7TJbhcxgHAyeHRSywr3yDRyACT5B",
  "key27": "7MpYbU9a77cNrCKDneoUSW5UBrDBMFkVotdU4fY7qmMkKLUkuxD9ZVAMjYR4hUj1wkBirUehn7we4yL541gCEM2",
  "key28": "47X4UXHqrBJc1zezRUT8rYSrhUzDauPNsYGMMJixAnCVxmahxA1WXPxmUmWFYJCEvjZF5yGWwThSyAMDiQ4NzzoE",
  "key29": "4wL21WftgwRaaQbKYzGAetssAkRarBWRmY3yoZCothFPPkgqBdRPfGQfPyKDHvaVMPwidJuPkAS7xRW8iuxeNt8U",
  "key30": "4QRfkpaaC2KoDjED2nhyozKEDg52BJBpH4khDHNnpSsfhsukWnNEvMppDAfdmME12Y5J21W6BoEhuF86MwtSikdB",
  "key31": "3aKwuTjTRp9tn3GBRbqBkKTuSrZYvdaapzo5Jj2HsHcgJtH19enWMk8acEzaniiczkxnqi6y2XjRTFD1GVYDjDxE",
  "key32": "4gC2TSRXtncnBoVC6HYQSvT5p739pTDFHtpF6XzXKqyztgzUtSSbn7UNwPy5zdok6HyzxUkv65HnAbAkkykKj4H2",
  "key33": "5EbQ3TxtoTt6BX9MwRpG4srV5gYzo1oAdvXUYLGLfC6ufSRiJnqM8pruRJDhHYCrzsxnVD4fv1cq88ydzZBGLTgy",
  "key34": "5ANKiwevd9HUrPdsA1Tctt5jzcEbFEd1244ySWFC57mJBkvvNUAptvS2aX1KKD5xHJucs43HSVptpLSrR6EiMqie",
  "key35": "5pSJg7hvj5efNgCqf2kuxwbkPA1rUaeK2tpfZS9QpMzdkAa1TibY65x27NFs3JjdsFhKXKZikiTXmmdT6SY73Hsj",
  "key36": "4Cm5WztQA2bnVxYpad2Z5mDFKSiyGYQ8FbhDfX9okoJtkTEbJA7TzS5eeHwf6xMDNCXHPdWBWqSNB465nQaaQUuQ",
  "key37": "3jhtsEYKZKzcCySP5ZfDZkX6E7XweUqkr3zKYVdXDHFLXEzpavoETCW2NMZToC8PrBYhLFYu2hGyVJrQuimvoBC4",
  "key38": "3gXevA8ApbCDaWvChPYf6e9LvS2CewkU5G5gbzmC6MWNJvLwUABsRsatJuT32bcsZCsgbxJVxqUfRDorVbFkxQDJ",
  "key39": "3X2GYYYBP6k7ad2x1j2Ftutpk34JxuQaQC4DgXyuM7Knaxv2DvYGGdfoxEZFY5SD5G3jPHYAjR4tDAtcPNw6JVoA",
  "key40": "4R9PR3jvvv9aCASSuP8dVDYUstKrtf2Ti8wn2vJvPj7rEGZTuCDfk29qDLqyfXYvj4hUSwYY6admDmdBcWa1d8hM",
  "key41": "pyejJi81CJRcNxsAVZ5StzLq7AdqH3z1Fi6tgzcMyzPRsb2qpQQugzkbvURDA7TC5w6bui1FHsZqu2jW3vBjA76"
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
