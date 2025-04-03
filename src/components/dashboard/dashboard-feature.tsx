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
    "PDeLMsHHi8Bim3S9CyjAXzSWa4GXW2WVbzVdU2vkgArG9u26KGB4rUdhMht9g314mGLVEKe4FRVLN3qpCaChLKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWbYNK6jp146dSm4gHWv4xC8q5g4B6Q3FmCapSyXpgNN4p2UekHCTsp9NExd8QL3Jqi4nhqkZY8qRFc2w5MCCgL",
  "key1": "34fji9c3Z7DH9omcECLvTAPDnE9cfPNUKnFRfKVD6nPRCz653CdQJyhHXg1AuSBpxW9wPAjdKZY8aDHZV8FSRwkR",
  "key2": "53Ds4JsHYQ2kfEFTW48khVawJbTJANQ3QLxuTK9aaLdb8DFQegE1oTysqNJGoTZkciuS9MHmfkmPfytpnquSKNKJ",
  "key3": "4Mo2ds6ufYM5qSibqYsgiyJFMMAc98b4CCC4WYKfZwxntMWDXSuuF1mCbtpXiee87yvbB5RJCo1AxXrmifYqHprY",
  "key4": "62CrL8poXhsK1hPGPYF3tggoz1KU6z8LmTdMK58fh4UpZPXozbcfFCFjFJYc2wcbd4LYT3BciJ9uufRomcyUzpbo",
  "key5": "1BarDEYePiFdwKDPRjLaQHDvzP6qdfe3a6NCCi3585LgjagBxBEJVyUqYLreGycJzW82KE3PB2curgnx2CJf6r9",
  "key6": "2RuHh6Vq32xpTUz3R84wdoLQcRFzv8AbjwrbGE3nsEuQEwdNn9uHqEmuoZ8iCd4MVcipuo2D8HDPvsFdP47a7mSh",
  "key7": "nygT7mYd9Mct4j8kzVZvBTd1cZpTBS4wCMmbsBCTNHsK9GWJSCcxpzJZEZBMwxu8DDUZb3VKzTHFPrWUq5Y1goV",
  "key8": "3NYvZwX8RkvQH6ZMVCVwiPZZoogQUFTi7N5QY1KfiarGN6fiQQcQ1euV3JHgsWuzQUpn7aDttM331QEhYw2ncF1z",
  "key9": "3aUkNC1wEPNgNCjSh7iBpusqtaLjEAwU1f52Hh6eD5gPGCzVksb9CNCoB1i1rPt3u1zq3QT1JC42kQZ2gshiUa5R",
  "key10": "PAwjyPkVHNkMEzbaBPjUVFTopy6uNBvcEK4BSML7HAYzA1nM6ErBESSDoobi6LcaDWhBpbN5wUfK7iCfHdU7emM",
  "key11": "3kGaCRjY1m1ZqwVeYfnNPLHKjAqA2J2vwC6WBiqgv6Z31UXtohEXqxzRchtRM2cjv8uYz96gtytS3maWwsrkQqRe",
  "key12": "23ZQdnHsBq2sLNUVoXdp33hd8N4XuBgnTG662PgfRNZzG2kF9XraCAfbDA6Q7yH4TBsNAKpYFC2fCeqmf2BGaPsd",
  "key13": "2t7gRHHRewGU8MvwsM7MByx43D2mHEC2ZDWo5pkqVm2PmPMoy5XtcN275Nw3A7vnZRTefC3iT4AejPdbYjwnDYrs",
  "key14": "2yZqWjJ8D4iEUnyYmGjd6Rwm9NJVLrBbxWZxtmcB2e4mFJQ5rNNwKpj4Sa9B7QhraczRorPo9e96LFnoKspu8L3B",
  "key15": "48vqqJyiGmn2nr6kcQf8dBdLBeFAoje1sCVapbSUojc6XHzrocQnqjPeJKTHwiYe6ZFcWuJZ61EoFpBaWeJ2ZomZ",
  "key16": "2i72LgBmcrcK6k26BU5dYxuC639q8Fzr51bsYBU2XhJsuVMzoUxvrMu6YiTqTrLPwxZL4gNookrWfgEHmj3n99of",
  "key17": "4ND2r5YEoPK7jwV5FJA8A2MaRrAyhrBsWiCLdSMe2Kf59sq4D6aNnJTg3Pbg9Fny3YEbTYBQB1esUpiyxKmj1meb",
  "key18": "4skMw6htWJvY1H9ZSWcmvCD9jHJfKvuPaf3YipkMM6wP2eVoeAdiHmBFVb7qzwd63faaMqhnQ4gnjaj6NUVhzDsW",
  "key19": "4jqHbrNd8LZYWG2rs8r4kkkN9VgqZaLid7g2RFjxfFjtgZec6EiZ9hRbe7CrJUkndbwZ7KMnvD2Rd1R96PRZgRqr",
  "key20": "5JKJGLRkgy42bp6LiN9Y7bEr8MNrfgk4a54A367MZvschTPkHK39JMe6iMEFTMa2fjhdkSTGM935Utnvhmm4WTDf",
  "key21": "43QtTQTsxmebTCG7F9zoDkKNsY7gnGZEjPuSwmCeB62mEfopaezvMDN7AgMzm6zwRGsniPm1nxa9UUoEHhQwQ6U5",
  "key22": "E4EvdbNmkJwq4mSjotNuhByTwk3s3oPpMwuDphMhG4xofQRtnLx9CJ2wAaWBSyrETbhzXnEWzAd24cZsMmE54DQ",
  "key23": "5KkMwMdBFGLKaEFBVXnEx1M1M1GNqVs6x1GP3X34a174iqxudtaUSASaDd18W4sbqXmHGjMU21tr8Ju4rxdpjgfw",
  "key24": "5tdygGs6gMKevwrji5HorxJJLstcetvxhJmqqX5HaDxcVGSQaFLHNhVceGGSX64TWZDYiTDW8WGUJrGmWVCxSgsu",
  "key25": "3hRYvcg2zsggGJAdp2PTUBgnrcFWqoFeRpzshmJbTWEvbRAWiZYcVv9EiUXxb4v3jed8u3e8uqqrvRFudEwdmSfT",
  "key26": "5eEUjEamnAY4yecvb4Cj26SYE6LABndi5LdHzVvkH3EiTiGJPHPu6gGJyDM6q1ewZW4DcnDm7emvXWh5okXHHa5s",
  "key27": "2hTytTcBCDrKeY5WLG6LLBNbqGPUXyPsQRG3WbGzE78L8bmLG4ZyYXREG4GTgJopoP8z2mg1MpKTnxVzQe3gLqdy",
  "key28": "4AQYWpf3ZZTShYki5Wieh7Rd2QVE85iaYrgxj54puoHUbAG6p13CciowRT3UMWX1UGnHRV3fD689q7d8hTsTSux8",
  "key29": "39wU9Vb9MznWdDLDmWtpPQZdPFatBatBHtvvtGShkoTCYyLgY3h9UtCuxv3q7rpmSwGhA3p5mzrhFwqFFzxAyqL2",
  "key30": "5FwjYnrEVqHUdKCMugm6ckpVGg2QfLcKXwJmh7QsYnTFUu9F39gP6ScyLUAWM3NHD8nPtbha8ZSw4L1MCp8798JK",
  "key31": "4DaDoVp9yypaHX3szBREgrxzJbTtfbLiCMaLNmMmgTFiBGwuasjoHLdVyjKKR5xa3o5pFQoMBjGUB17hy69RLYti",
  "key32": "2kBrRdFViyHbb46d4C41V4fopSda4RVK2E2uDsu2BP9ohKp7YcC3GiNFRktmr8jNj7v62N18ertJVC8qRQKdNAMu",
  "key33": "5s9h1mVjACmgdDm5RFQbeadxQfFiSJykF72aHLQ6vK1hwcSPydaUHPqSq9gr42u6jPC6RnL5ew39xHYTeQxTzqPZ",
  "key34": "LUfa3GCvLS2ggw1Z3ADTrgyVYCJG5Jp8XZdGMHzG94ufnxa75mYJt6xoRYHqE1HZXkzCybMb1apXvcoqW4b6wud",
  "key35": "62HuwoRiUgM8ijNHdXufX3d5phmQWvdSV8wRne8Tu59dXBt97XUXn6oFt81Ap4vVo27WAGUfZQBjsfySUhv8AEtY",
  "key36": "5P4nTStk6qSZjrHgSaGqVXdVxBJcY6571r7VFX98mku3ad4DozpvrAMxAMgVVhBVsEkh1ghDZd26EHRkBeHLWYGA",
  "key37": "5ov589YGcuCSYrMsAmyBZtxdcL7LQ4S8KBGs1U8X5eq5DaREGeRfDv3mbhY6W3BV8NkSeMRfcstDALsREihwCpyx",
  "key38": "4ibqNeQh7VzmYjcXtjrXy8mtwXea3g9QumFJt1jrsQQEeAALcDcRo82q5fSx4VeSWgzP9BVxzeCWFdJ4YPZiNxPv",
  "key39": "4oVMtywGg1KybM4VU795ktUbVvWeWEtfWTBtiofgN3fRseu8HXs8hu1GaSNnxiA3Gqi8veBxcoP3ajsdmhDKQDCT",
  "key40": "5p93JGS3vV9wSZWgn7arCHv84TJcR42x86XyELjpNR9ktPF3pX8oAhdoMkrW9JPwUjDgtGWzYKso67JsHjLHQYSo",
  "key41": "47KAd2CCFYzZcDyAhszfoBvUApaAxyYE1kbe53nmXjoTGe5vAsjco2ASP3vGDDdKcEsGruV5thugX67zmtGVKr76",
  "key42": "26MJYWm9skHQRqvAhAAhANq2u3fbHXk8kf5TPf9Lp7sbD6oaXV6SRR4DVhbokZEvfhUuJbySXu284d4zMxy1Kjt8",
  "key43": "2eQDAKA85R1BaDk2ffDoxDptHtK3DUQdTLNLYqcGvrev71Uj7AgSniFCYK3dEjTyuvyicGdPpnGmRP9kD4kfAHuv",
  "key44": "22oz2Pqcskj6d13WKJ6k6wmgHH1D5d8nZZXao48a1E7kByn2AwhgGYQZaApSwvajpATJrCjyMdiTWoWrZMnWB9b2",
  "key45": "2yeNqAkcguXoyW8Lm5AB7wT1eNvj48T3Vbx3keYqTNF4jVoXMhwqrQA9cevxxMctBUZs5huUxYUkxwRGw378FaU2",
  "key46": "VQpMG99VufUVX2HkS9FG1zYYnbHsKDxPfZXBVVpQFLMBoKvtAtkXoC4xBJaxovy1bszQCzy7QHKUtVyqygxMNMA",
  "key47": "5vhYCQzR8zvcMCYhFyPe4Fah5EHDaLmtN1wzM8MR2x9ucd7MWAhGkR3wNTHDNHdZFAxBXPsGcxsnNEWb2jaRZzbA"
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
