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
    "ucB5xEWpqBkUd3AYUk3EVqTDNEYe1SptLxt2Rnd1Eo8h2Qw2sCCLXtRvu8XmuTYRKfSuPpsnzHCmeqBXAVLKa8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZZzxfzYXRouVeAAKf1ZqgG9z747h5zbna86hcduNrT86bvtRtfjCjTQELbc6LPMtS6RuRh82t6CCRWcc7bFp3yw",
  "key1": "2cwzR3Qobm3nevGLWM66BFhEde4XfYxpnoJzhoDU54QDtQrXQRJCY4HXVQScfZtvxCSArbCHUG2owdQH5wcoV9aV",
  "key2": "YXtQwJG4VXeg9P4e1ctFG7LWvSrchMV6m2a5RqHEte6GP5LbuqsaybAZbcRA3v5tVXkcqBVDHa2aNtRp2YC5EtL",
  "key3": "4wWzKphpqQsK1FkaBYZipL4j9GEZB19KwEPnvqezA8aniPZG9zDWEKxmrjtRwCHaHqaB4wgGmE7PwRoyA7eWLLPJ",
  "key4": "2Mbi7HDw4zU6kTrdW4YRU35iiy2ftGA3H1HNfEHzc6H5km8BnQTuPAkHCwmUe4fFaD5YueCa3nHSE1MBh7AxE9HD",
  "key5": "62Vb8i2Xm8nHU3A3fRPqijeM2wg8B3mU7fpTPsbXmwkYqx9rJmZ9QhUR8tXB6YxHhmmyCcFaipD8DFuituC3xiUZ",
  "key6": "2NdfgvE9DqgdYaggTCqKgyYANJY68v5JKLBHcdZWCxgN1JFn9CKmmeh7fesrSGtEWQQwkrxS4G82zrKqgdocTa3P",
  "key7": "39YN8prgCKKVLMS5zbGcBBzBGaK9LUC3L3uwruVUgBMbvkMqmxZRLyBidULQwKZiKrcyJYquD98yHPEJybGqhXGm",
  "key8": "haFZ8WRUnRvci8AjmZZyc4zzp8CGkrNutE3KgXUteLJ7ABKH19N6zMHNbcs7UXDKJJnudrAaxHEwAPqbiya4ZqW",
  "key9": "3yHyKjvG8NQgJpXdzVNm3VYT5Pd1QAYBZ5i1V4egednaThouXzUi1R1meBF644EP7r8rBDtFo2NgRTsoGmpPdHKB",
  "key10": "5mJbb9AL3aYsSbfk645BbTCHXVBBTZy1XB8vq63Wmfuc7NscKCq7VS6rxJkFfFWMt9DZ8ZEqRwFpVQ4sH3sccNEs",
  "key11": "5FRicPedtZQWhfn7X3rXGkjBNhczP5pym67pU71fqtKaqh5VYdBLKd6ydw6URbvGhaLGAnatHztJ6SfZ6AexVh1k",
  "key12": "4wqiiRH1VNbdfKjRWKbNjHehKg9FyUbAzdcb6GJqTsHuNkxwNEStu1EFFWuH2tLo3UQUbKKtoG3Y5XF8P11bgSzL",
  "key13": "5GXNJVkQLHRWfyiNhBxCFRoBnbhRs5e4KgkpQ46mUUGozcyZnC9hvWRkDrUcxhmW9TWgX6FL9AqNtqBrS35pvF7Q",
  "key14": "4EDdVH7NLTwBFnxVRYuEfJrNUrxew54hyNGxtSjBuJZArc2oHQefQEGz8sn3nTy12FMek8n2P4C3xBrQZwrrFie4",
  "key15": "q8AoTbHwFQqnHJ1fHqriwDD9obFfohxnxkUR6EUw4ntCPjq2L5M2xuW1qJSHybnfGWm2esKyRMsDEsPSJa2DEfc",
  "key16": "422PdvR9P9p6DCTxRmMnJDtrypUyAzyXgVAtM4HpUawAqrjVxcjwjMPB7CVVG7qf3V5VFnU1F5E2EDjvGDubZowb",
  "key17": "4k8owHVbR3BYK24t2NoFjJ9QsTK5gzAq36D1iaxeTDrSTdKw8TGTKtVXZ9QGsfgqvnALZ354aPfYkwDAQ8KKkkWN",
  "key18": "2pNwAyGR7Dp84GPtvkiRpHN1DB3GKMnEs6ttTZ4m3VUHRcVu2CsrMsxpgP6HuGnyvTCc7GyvsnyrVohFSgT5vemj",
  "key19": "4ApYPhuYS25eVUMM4Uy6pzYCaiJaYuTZtPFSyhvx24kD7qnnhqcDLnEYfBhSecoVQGvGX2YAszhLwYDUcxB16kwU",
  "key20": "37ipXT2p3dmXLU2CWbZYEaBR5v448yri5GYo7GGWEc9BZGhm6J1PVsoe9sieofSc7ucsEZSkhmKr5UKxhBuSQC3J",
  "key21": "WQu544y1n19wp7ZdLxj9AnCEyDtTvFhBKSqaQtF1HRMemBuFMXjjmTqVYUqydUD83596Nn17Q3dfnGuCC35Vg7p",
  "key22": "kArL9KcEHHqAwTpPj4agn6NXghRtYxozYwQa39wKfFcFnw4h6MCpke86R5AkZ3Drp26UVA4Sj6ZArAydABYV7ah",
  "key23": "3LFnVt3g3PZY8PYcL4eXkJhpFCoRfKoM9EfGZdhqwxNVhDfwLXJFvDnSStETiuQwHz2s4Knh4CgyKasqsbS7syhJ",
  "key24": "sm75JUvkLf8eK2HEzyzD12B9Zdz5xB6JvjX7nG6fxego8gZUPwdutacmdF2gotXDZTuvQBkBSEb7V2S1cJvVUbT",
  "key25": "23T73AoLXq3fg16tbXTNVwvuWiV4nCUc4yodXrQz4k3a4UyHFuj9uC4hYm24PMt2fNuGiTQDf4a3e4d2TEUoKM9i",
  "key26": "5H2omYTbqqqLfH3UU5QXqQM1171j8GpwzKtzsMh1WMTYppvxkm8HaB84f1nUahSrs5zyL3XcUDFDpPNckzZc2jbT",
  "key27": "4UtVPC2KZDAgELmSY9GiKo8PPMMFwHXabgBAuTv7VaVKogyrUGiEBNtgPbs1Y5rEW4Qc4DEgV67nHvJhZ9gHsKMg",
  "key28": "eG48mCsgTu8gZAa4Rs4AWAoqLSFMgFCETQYWbWBiYREWBDh9rZHpPe68DSGzrEp69iMrj4ezFjPgzhzfhkBQx28",
  "key29": "2zBa658YiGh7FMyRDnmcKjqp81W44PF4btg7dnou3oBxCwXGVfo48vtKxzfEN3j4xFF93rmSqXZaFC66By6GnRsa",
  "key30": "5SbsvjcYpNngR21oHpRgufgorbyWW9XDvEsaeorztabnAzndpopgk7wKTimMPKQDvvWpr7HwSQWreivY3N52irsV",
  "key31": "2KaNSmocGGdkf4ZMZjzjEmwwvs9ZWnaFZEKbEsPGq3qXDqa73dqZmwi8eQPtwTd8hjUB5LnbKXNFM1FEvt4MswP5",
  "key32": "4Pzoo6zTt5iCZDpRon4u6BjgjfarCtZK3pocSZJvVDJm54y5KjULicGR9epu31EgeDX5LoqMbTcoxVsNH5GzRWAK",
  "key33": "3jJmzqTfBT3ziQCxeS4wyXhGzHu5o3rgoyD8UNL1WTjEmAyMMWVNFFvHGZbiWaxZMzvqNG2e13cJCTkgDtX3Ybt3",
  "key34": "KA2Djh7rS32R7ZyRXd4Nv39kC1XpG2HM3xRizvCMLeVahcqrYPn1tbzSZuDRnnAFaHvZwpEtsMkYCpYFmq3fL2e",
  "key35": "2UsYgLrfUmMbZC2C4MatDCMFZr3bki6BfZ1xDXwBEanVswiAKHGcqBWLwGqmwPv3KAgH28xSkWSTKPMpCLb2jFg4",
  "key36": "28429ejbHXpsBWhfVQiTD2Gr8Qsyprf5aUjMUVgQuRy69Aa8xqmGxmiX4mvnHAeCCUhSJkSuZYFM6WNmXU6nMdqr",
  "key37": "3cFzpYrRnnBKKEvHp9DJaFcAcRRmeFCrdUvbEdVZxL7FNZhmwP7DqgmrDGDovxX1w3JJdiw62WUXBFSEpDP8XLht",
  "key38": "2XFaawiCz9h1Apjx7sSLTyu3QupJPdmkpu1kYvgu1xa7kiZuo79UcLawyYAsELhETkF7WyykWfmbwjFPtZpbD7ms",
  "key39": "5LKnMwo7P5N9q57o79EuvDFtTmjLDdzsd515M1NHBjJjBmtbrbwEwymfteUCNk1zw4kAwSvhJq6zeAkNkazfXerN",
  "key40": "3MeYegWCGJWVBuiRcfzAh8kiATe3R4pUiqYmjrcmRepsFyHW3Z39KkQYnJEzUBZYHoePQsX1p3svcVbAeqyD2V3k",
  "key41": "FBwnFui99ZQGsPo4LCz3QPN6Zj88h34UriN8GDVJJJuMgniJbeSuZmjNAC356wtmCdKz9k9EVV7eoAR3KsV8vHj",
  "key42": "2PsygA1cRLeFRkXHYo9ndkdsXwNW4yu4nEVnkj36zET3mQcnw5ubCq3Xdhtq7SmVGp9XgLzNksC2cqhnZ9UWGPgR",
  "key43": "fxQAvkAQ5nPxjrV3xzyUxKkToawXPySRGJyeevu7Cfaab8tTskSeCQ6Nf8nL9xZvx6j7ReaxxL4T1aHMhc667Di",
  "key44": "33DwahdknbGWgFT3XXjNkyNcqdvP5EuDpKHQCPzxuJXHmJy3SQWuNeytvJ2EsjPgMyDbbkMMpHoRGKz2JGAFXDn1",
  "key45": "3fnMhq7CGNgG7ZWTAKoFvAcYJViwAGQ1y8RMucqWoghni6CGWkbDnHgrgUNAEKtdx4FznZPnvp2X5hhnn86mZ7Jq",
  "key46": "24t2yfi9Y8wS256f9r44tK6Ag4N1dVskjUuPGhMQhGHLm6iLX3JAnvUFHbokjBb1d91MENW4mWge5eHuwBWXHAKa",
  "key47": "2kXqCaTvsUGiTiBgn3yp3wuwuNrzBA42zEafL8WFwY7bqqhaDEqSGZCavD4uqbz3tVNoU54dARr59Ly9vUEhDW2K",
  "key48": "4TaycjgAhbg36KWNqpv4CxsS4E7pXoTbK57ABaMgorD6TW5P23rGTXwznbYPBVVhmCAjq6SdnVLKMgptjSJafyeb"
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
