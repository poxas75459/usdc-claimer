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
    "2YNgjxmwNDawzTZdJ8PTP3ryJdjsBUdusBWaUsRDBmbnaAFVVGHowJudQU7DEhJPaqmC3gLoHdjd3eH1K7Z1uSYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQCR9Cz5zexpR9ZXkngS6z15x57Ps4wUECWn3n92N9rBoTmXW1Sad7ZbewfVX7BLXTQiU9V4dFyppKEschBe2Et",
  "key1": "4J5qpVYiUBn5BGacmBAJxqUhaMqUFgeTC7ttoHcjQTfdje5rXNuKFj3p9tqeqQcz7Kc5RdCfDqNKNEaCS8NybYwk",
  "key2": "mepPxMUbnBpXqJBqDH7SrAmM78xtoferoeErt1gUCMzVPtnF57QGbxAkFEUU7xJxhEspBkrkhruAAg5fin6qG7B",
  "key3": "3LDUsR4BRao8b7rtNF1aM6U5bBFu2EBNLwvwE1G5J3H41itBksjrTkYF8ba5nNovkMs5ExDQCqJQPbbNChNd57ys",
  "key4": "2pcjJVko1qntW3ooorLPSwYXV9gVd9Se5y4ZTTC2WirDSdSco3mFYo2dPpH6cnALqQMhnr9U538LGQU6m8n3V2bk",
  "key5": "4V6YpscyFVZStRzcXRoTPod3PPePagYgYN9hQRm7dEH6LBtdpj8ohApFdC4gLAsvGVSeMhbpzb9WSDWrUt1FpQm7",
  "key6": "3jUXYdZQzoETzH2w6MJMMtJSJFBNQ28Kjiu1n3FzSWorMXwDsnKaqjS41P4uDrTQt5ZMnKdya6URqUWkYy9vZR8r",
  "key7": "4chw921Zgn1xbJsFTXx8oD9nvy3qQjUeMPKA16RnR6K339tq34eqEwXQqaPi6x97UewuEt4aRbospyLMuQ7aXmtu",
  "key8": "3Jb9Q3CBqYt73Vz4BNHJRUQneXrVBiqxLD267g9kKdpPi1CqAxHD5BKFAQkvoegMtdsoB2An4RZ2vWFQHG3PK8HV",
  "key9": "22wR2hqVf9jMwKcdJzBNsHqmVAX7Cv6uncM1j9MHipsNVXTeurXVPczF53R2sar96gECxJvsk3zASqn3rek5rqsh",
  "key10": "2FWg3KG6mHfTKVYbdRG5zew9P7q76DMkLYTKVpzFMKXdVHwUj6kLkH2ZHmx8YAvZjxHP6mJhRW1ziBoRtjpZ6B8J",
  "key11": "4r2smL546HDDsZbZdLV5GcGDaxDoagTy8DoC1GwfGNZBT5QaRTEeLsikFEpoxQTrzCfGcWb3tdrft7vPb66ZrpHE",
  "key12": "2X5FD1qYpRLfM4fr1gtMjrESZ9375EN1MYiowHcBA3cwFnyn2UmY3EGWnKqGN6DPirJPKDJAjDjhw3RfMPTsTwfQ",
  "key13": "2MKBAbijGJukXpNQjUzarpEibqsSaSxP7Y99K3n46kJxGTiYNJYZTp2cBXMfYEiiv8MWToRsFKPjEK7qXoBuZNXM",
  "key14": "5687G8S8fZv6GFeEjDcr458sPrW8tg4H4nbSMG8VeQ3X6MHRomTY9NDgr3pHjwuvdaDDDrTtACtNHfFD3zQfFYVE",
  "key15": "3FhUSMk2umWohGpD2ZHtaA69Q6Xe5EBJzbSqxy5bNfrpvTGCgkgT2mrURr47kjm1NFDj3QS3GL8pKNMnu6qsKcR",
  "key16": "64wB1HLPZKZskVhMnqrqVjBwX6ckABpj2a2rjGTJ7W8m3dwfUSJRDsWQRQXbjWw48MURuGRzazGRJ2PSBgQJrC9A",
  "key17": "2FfzRyPuRTpEiJuhjC9fZkD5wwzzgemX9mPbH3WYEqU9fgqeaF9yZJWRErKgUSe1ZgZrkCy9X9FmPzBs81NoiBSc",
  "key18": "3b4TjcwMgn9jzNB7apc6XrRQmLjNFm2EYx41HYXDFy6dJw8oQRNYCaYZgvgFKJ1FAnPCHAkgMR6CXj1SduD9KwMs",
  "key19": "3ZAbp6etyJTo8CcfFWQ85XUJV6A5miUEkFK5XS2m6Gdoin2rksKDgWEnn9vUCy7hsVTtCSe9rL6JoaxtoBjXXfAp",
  "key20": "34FggDRJxtPeiELGGpEyNVQp7SX7Tm8D9FDujUddguDs2LmbJtgNfMvCr2tF4yY571Gt3ikh5ApU1XdActGSAp2G",
  "key21": "i2AXJZR1PkAeTGVsfTSDgUs8AjojDbJoDpwEtnC9yg8Mby1Q6XRpzwQKuTzEGmHD4mWA1yexAwZx6nc9fPVujCx",
  "key22": "4tTrwBWogKzc2VTgopXJ8Y84t9ALLMZSCVbns5ae2jzZpmWQxE6xQkaLde9sExpx9B8sAbssAD5qwAccQ8VjUs3J",
  "key23": "3wz42c8tVzi9iSY5GYRARRd5J5hsJPqnFjGcjpYQ1X2fMX9AE5pP6L9GLEGUm86c6LmKoqAEgp8LrFNaioTuj7Hv",
  "key24": "5dPKUgMSbgWu8hTLiMjzWqey57rVm8svtceR8DYPRBsL3SpkTSe5MccjaVnxARcumzAgAAw9ivVF4H2sswYhhr2g",
  "key25": "5ARthAy68JuKG7c5HWZ5tNEckCo6Qi3589GfccMwPV6DVVpUug5fgXEWuSeojRshmhDy1MzLTSS68EHqhFqySGtN",
  "key26": "4eCyWxPR4oruLWWA5CV3PhhqVpep7u3FBDd4gg3AP61R3CA6pv5PoZTUyohChVSPN1gQnc3YogEPbFBnfi3BmGWi",
  "key27": "4iKn45wqpcuHLgPN7Eyhv2TteT8tj3q6ZmETZzh6FtNBb9GR8ohc9DA9uQ1SHXzbv1wJrifhVHX125F8czjCeycy",
  "key28": "mPvozVjadN7YCk9itW26sTfu2uyB5uVRg9e4o4ioBpNq8tgwxVWFnxmURso66JK1CKMdqmFe1AYkKCyCR16QMgF",
  "key29": "4AUMYfoKumnPEeHNh1wxijVXwFS3sTywVtTnK1ce5cGFgvFCvX8Q3ndeBBmWAtDsVpiejEwn2qSiZ6RTc5TTMAVS",
  "key30": "4GbR75T8fGZEqcEpaFQ4uVTMuG2c98av6pwmKHhwrJx8QWMVsMeUmbAsyu6N2g8xeiAobqscgEwmeM37YLWCmNwL",
  "key31": "2Qf5Bff6egMqzNnGj3enWzv19aPw7tb9rv9ma9aikLcmTzQ4x7oBTMcVZpCg5nwVWUpDkAvyUmGTFk6jXbVacTq6",
  "key32": "3pQwsCGsa21c1heBQZSuWApCWKcgxgc1rq58CtT6EhvfBmufheNHbnzpJUHEiBqMxzE2n9E9o6SACP2hqzJvE6iP",
  "key33": "3EwwJFNKmNLm32FDjmNMQPSuZqERegfRgTrtoQGAq418rbQaZk11eNJZ9THVPzMHA12r2NYUj3s6DaQw9qAKnNE4",
  "key34": "2pBoDmLJwycWd4am1s5ySiZT5d5HoQ91YMc49ULeVczFBxKMXwb9iDC62sFuwum4ryb1ASyfodc1wrJBH7TmkotW",
  "key35": "WJWT34qPzfj6CvWayJ2tX7xnAYp2ceM2BK2szSioNn5JtFjJzujeD9Yp8GkgMdh6AMjJ77Vu1kxPqR9TYJxUv9d",
  "key36": "2etEstKdCL3YBEJzvTH5idXDHEMucyGa3spVS7atqAuWLGdXuU3XgMAz6GKC3zg5Z2A4tdzBAMEpbSnAizZ4z6HL",
  "key37": "55GYwuuUJ3LMqfegboawH1FLssZf2DRkSoY7HB47dzetitUhAXfRcxi58vdf96KgvZpDBbLWuzL6Re7KosCg4xRS",
  "key38": "2pn4GhaRkGCB4JE1BcwwfWxXRfXtuwiDD4eLgsKQZLwk7mJEyQc677F9vpBweYza54SzEi26NaDLdKFTKMWdn5VS",
  "key39": "392aCbZhTpQe98PBSKFwM2Z5JMzFx2DxmVx81EGVeamtWFGrA9kvfjp5D6rCswhL1NPzKBvmCeLhwY8QBS9Nbd4q",
  "key40": "4QYyd8E6TW6rFqfs9hNwLxMdSX8tABekej7AQmdR8RkPtsfmJ1VWBoScZMLBVDWxw4afqpgUPT2roaj8kqDognDi",
  "key41": "4XLSSpMJKhgWn5XeZQUabVayprBRse67gQayMQuQTWFgcLWJzyHWUkwn1HJ1DRsXEb8WsjxyWhhsuXi3ALwLTv4D",
  "key42": "45qPX6UysmRNZaetBKCnj9YRBTdAEWfkHPmy2jyMXFmd5RNBq3fvcCN79eaU1XLycMwY1QrD1uFVvu1ZGftRqhVj",
  "key43": "5SNPbzVgYLgzWEJHWupo7KtJgsvyrq4Zes7YU98Qf7M3vn6kko5jGa3RwgcHAA7PTgKcZhTm1YQMS3AfCqg3xiTV",
  "key44": "5oyHMoY6rFwCPbxDQmgShztqsQ4cYsR9FuUGQNJpQcTVpamYq6bWXennTDKKjRCiFPLA18RVe3zbmXwzX6fQYM5i"
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
