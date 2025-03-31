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
    "5ELJMLeFTcgMvWB44nWXFV2NJawahavB7rfMjhLka7Fb82oNWUPg13s6z6gzxLwnvzytyazFd4iV52M2SqgdefpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVRaJECY642CokzZ4yTAgC4QzwDvEnUedH3jJaAScavshtuYqEA9ns2q45UiP6G7Wp518uZguDEDoQFxpL5oU6B",
  "key1": "2Me3NWi8mQzVAQyu6LTgqUN8mtqr1QM5APJdAY7JTZ59zUAL5NfUdEbN5cE9SBFmQ41xoXoSm3QMECa1iYep7z9P",
  "key2": "5skzzhHibRiJ7JGjCcJ71Ec5w3HWZvY1z5RXYMotKuVzhnJD5yq7Mi9TocY9s6VbABpUGiGkwb6HBBdb5YLogiw",
  "key3": "vzQ96W9s4XR4vPqKHL47jJ6yK3BFXBj9YRXVbkdk76tsBT3fMbQZ9KNoNmbo9ydtHAhVSgmLQohHxzBSiCsdHed",
  "key4": "3WD219WptG21xVH82GvYcP9xeHyXb8PRwmuteVXMYrGnJMKx9CV7WVHAmFCfazxsENgFdUF68TkD7Bn26M69tzoC",
  "key5": "61Ur87gxPNidLCdaL2LqTjmdBYA726zx5EsHZF7cHmAjsJUVrewSosMFTxQCxhcjCtY7c22MMy91meR76U3CfmMm",
  "key6": "662uVCRskFynZo1FXvNL4vMoM7xG3YoQZEui31vtDqXHvugFgmMEH2qCPkaTTFCtGxUphcdXS4cmV7Xs7ZnjPpFd",
  "key7": "P6J8ibWgiLdAAZdHDbiM22PdrqAiqDC5h8jPk3ggESNKUmzmZnR3H7z5vSorHh2EjAc7bVTAUGp4Hg5aBm4cEpr",
  "key8": "28UXvYn4MwWWy5eRPhR2Kht4W1p1pEvpHEJWqPFXSNxqpxfJ9cRGkcu7ejF6KeisrdUQN2iPy439wyBuBdwZ9LCx",
  "key9": "2khCLJdohHAusMnrNxRLnxJtYyn43hHeJ5GhbxDLAaRyf7mz6ZBtbrhiDJaKkazw5AfsXEDt6SRmzPoNQDYzJYGk",
  "key10": "r5AVkBmSD5wZTnsHaWBMh5XgxNaG2xrXJVE92nswcEFwfgHNNyzM6T1dBZr6KAzUEkE2iERFWjx2k2wuG7UxqDR",
  "key11": "VdFR5SUNCs7u8UD8TWe4zfuwrZJHPmDnoXT85qUXBuJFcjVic5Z429Mhgkdm5tquGNhi4tfoSGBQ2pTNLT4utYW",
  "key12": "9FfACbELLLKQzwoQTExZ6tL87myJSRt6sAHqwHFiAMhZ7y8Y2NxTRWwbQpcTSZ5h5CCRdfnC7WLx2WgWsvu2GYE",
  "key13": "2k6tDXEMPnx4NtXpdeYSRta9GomnroMeYHPRHNmpEvWKCpdnvCHFhfuntVW8LRH12AZDVcvBBa2CiCo3PX3BBQ9q",
  "key14": "2hzB52NwSi3NkJiF3CXQbYmiDdmbcDLf4U5x1YZujPPKczECqa1wmHrYP7tGhY7A5CwTpYmHAyVARnfGoh4Day3F",
  "key15": "5RFJ184sdicdnQs2s4HimGku5LeBYWaEfupJT8k9mjWuR2etuGiG4rcKpHDjMX8SeFeTcpe3ZXHnEDfD3Vm2Lx2B",
  "key16": "4phyQU2ak97ixXYtcBPZXEXUsUc3BMUtFs7nYXfXkQ9zkdTeiR3xw3F3uPJiJm9QWBM28YBPU3coJVwDnztNdjvP",
  "key17": "2LGtBDVqctTZTLCUfEntXs38ttcBQq311LxJHqWb5sxEbpFJxb1ectwyAXqACpbctNREzt1XycVEraCJiBwepKjM",
  "key18": "2P41AiEhB5b9zapNJNSE17UsUMAcRXGZuv8QMuHfdqztQRjdATivvwY7BDGzZBNubNnZ9qKbxDJK4kkyJRQ82gZN",
  "key19": "429UkwBAuUK83LVBeFm9jUnkLxPsnUZdSmWkWWjsTn39rKxvHMRh6yZuyAmRbxveKwJ9EKwY5dzih4ojAtcT5Enc",
  "key20": "Y1WBX5Vdy9JPiynRGQtVHHxN3tJo6kh1j4CjMo3QivX7QL8TVtXKveoB1YuXsKiTPvcPjKwwNgM7XvctpbKGmE7",
  "key21": "JYq5Vk4saQRBEVntPZMLWgRgu4Ucwk2dmxiwJBRiXwVPr3Vr5rQDqAfy626LextwRwt25u3ggmCn3AYxBS9GQfw",
  "key22": "5G7yJW3JVLAk33fFaxB5dDSpYrntpJ37JTm6txsVAZ86cUfP867shvC8NjD2UvD6BxGVF3xSraGYgePKcesRmijT",
  "key23": "31hfSnJPNUDqX1prTLnvByRexAbZgEEL3dNPkvrtZGy1gjzFK3uXRcubsdjjkNDHEyxPVUu5eRBjLxQ6scgJv2Np",
  "key24": "4J7EXUeBLvPyDqAo8MZC1WVaCGhgzM7LN6QnHnsGQDT9kHcMMHd8FpDPsaNyBhaBiSw716vcKiNV7xhj2ed1Fkam",
  "key25": "5oYjjPMmEbHTCUC4qXPSnwbXRdC9TBEG6bwzigC4cMujv7fd48ebU88xcJAdkSfSQivJFZfnyWVpm9Wrn7dYCh3x",
  "key26": "2RZahm3KnoEyxnFENUqbRyv2Zuff3xWZCu6PR1ZDKeJuo4n83kbDwi1tDqP3cDtmVhQWPcmsRdziBTUZZBMnPZRM",
  "key27": "3nTRwYvHyhsJ11Qmce9dmQdn1scFd9DZTGJWPUKWkToBurfzJzUfjLxLM1kgGXuaWizrEJfEyyaEJ5b7RnBqSqWr",
  "key28": "41wu7uM12ienPM4X2DTuuq8cKLhAh8nYn8wfqdmhypmzu7YUQ1V53g6qjwNetmJopPyCarmxpD8Zxh8rhBFnfarK",
  "key29": "mRZL6dS4S5BUK51ECjvMt9tbzGtevg95dCkzRQQCpLjowTK6BGMAiwuoozCmapt5CRyWkRViSBFgx9b1pjsuyaX",
  "key30": "2oX3kQXKyUm9z2Npqiz8tarGv8o5yB189gYo2v4eodXwdwZfnZMt1t27DXE1djCDdo9S1ZAR1GRVedPgScf8zCRc",
  "key31": "3uAkUnDTCGniPNUB7Et1DwWGKkkRPX6jzvHgRkCUdYRaPy1NauUph9SQX1EFevKMGh7wTzbMA13z2i3VhKUvjDXh",
  "key32": "4P2k5qCAchB9S9FQQxTmYNLYjeSNX2p9jURJak5yzfBQ75QvmnXWx3FB6YPLgKSFwjmQDwBySeJnYfLUsqzC6wht",
  "key33": "3ejJFmyZ7vgCvCNkDWQVvb6feg1kP7xxykZRCv7zaC4HiEdTbQHokgTPa6R8JDePeA8tcDAjXhzHHtK967iTzAVE",
  "key34": "5D6ySvB2JjV9kEG3ogB4qTxKNkE41dEzerCjUKmu93hG7gHHZPr8CZA2EJF5qRxaBsvBfemMufSwkEYhC83EHxfr",
  "key35": "23CkiW91UngJ7Zqiey3Kpsdg5PACRXcJsafW8euaWHH6uTeqPLZpVqRLL4QbX9jgMNBboHv7oJqLYcFWm1iRkMJm",
  "key36": "XJ31C9mRNa9uWohm8GAvgJBK37CGmbQ81EdpjtYsp1Hmo4CzZYK9QUWULMYFJaUTKu3xBUEzrbb24ASo7mtqR43",
  "key37": "5bXxuDuaE2Pvj5w2d3TMfuL9GiZ9LoJcPZ1NusqCbR5T3jQA9hyaz9xc8mhyecnvAJjbAxdzLRf1k9hSfqp4Zs2s",
  "key38": "55EoDiUo4dwqjEm87ZXo2zmCj2rCHQ915m2HgiNA3MP1J36ZWfvtiTiXBWM7f5fCH4eBNKdviEasYChocvjuFkAT",
  "key39": "2amVM6eUpsv4V7sG87EmXCY2QXMCo6FYdBKrS8s33MSr8pcK4UYNfXxNrrKJDZVujnuqieYtAqHo9hVMYKE23mEo",
  "key40": "tpSgB7CDePHZQHvBwKVmbtsdsY6W5Vf5njwT69e21oRCZRtwzQmoQx3z5BLKwcpUufDEGTQfh6j9WC7E6trgV4p",
  "key41": "2haF61irBqFrZjp8QHkXzDg83F74wMz9YeS3pYg6R36ccDpZpFYAkA9yrDoae94yotuAzpFu3swjXJmUNZvApC4B"
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
