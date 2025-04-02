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
    "2X6f7yaNdhufAJEiBC9a92iYY88wQHk78r8zGD5REMeKNYWf2QsXpAbUiGK11EN96tqjSoRbM7y3AynW6j1uuZkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bdm1pvgvanPgEsoH2ncKPuouTtHrzhmCreHWXqvPxzU5EZ7hES8FW8psSzLE3764Yq5cm7XU5FYqPFY3M89jZku",
  "key1": "2BCWhbmnjywQUHUenaz9nkcLceKV64zouumJ1iadHHma2muoeAZE3Y1SUp3Yi5Puw5r7zkVRtx8orRsXACYjQPJY",
  "key2": "5eKNupdrH3vNTB9qyGxrbaBqkR9avkAYDCkxECU2uE7EWqwLrNU9J7M2dCnv5ccYqq7o7kph5Nb41bYJdoHrV3hp",
  "key3": "4FZzX1RTbUzWzAy9jqQbpB4nUNkXGTDosS8k4izcAZtgcDxPLATm83Cebjy6YvYPArMqavqnQQ23dLjKCwwQnF56",
  "key4": "35mnh1wr7w58WCBKnjACSrg7gvUQZrLr4796LEojx91KFrq1TfseXaZCr23p5EfyzPj6M5C4PUovfxU9m8ej9jDc",
  "key5": "jEoBqv15ynd5R2vqFrWCnLytQu5i7YHyXN4tJYMjvBKDqv3bKvGqg5N5wP4kfA8yL2nUdEJsyq5b6514JBm5GVW",
  "key6": "ciLvGMYKiS7gGrTyD6pqvn8dqaSNHVATGpt97hGgPVSDY4esd4RB1dfFFyNRV1u1f9Qzd9QmueF94bs6yN5pvzL",
  "key7": "21WCgebWk2hN26HHxjZkP3Bryftqf1WN5V76NRCYQDHD3ZcB6wP9398L3CDSdTmsH1SmnL7z1R9bD8RCzCL7HD79",
  "key8": "2vp8XXmaTMzHxSoMn4Rmg4R283BNcLyoQ3h1xK9U1eAny9Uy8ZCt6GVk9dtPyLogKrwugPVKspwQnBog44mgycgZ",
  "key9": "5xxfoNxdDy5co3upgLQ4rdSW4gkp8Ppai2nqeUwfuDWaTfMLpjxW7xQe8cfWrr4y2maQ74sYvBeoRHTrTjoR65Vi",
  "key10": "4kheTXwFSxsUwCYz4f14Q48hwh1GLsuwKg9UzzV99HZvDZSEusBxy4EHDMhU6sJScdHjZpETzvUcx7oPjBUAksgp",
  "key11": "4SP5nemc4GB3RxhY2uZZe6uB2jRu8tSJi76tf358nx5nkwZztEtTdyXDxfWYaxRTkxT93GVwN5ombGVGh7w4xsq8",
  "key12": "4SEM8ouD2hL4bsFjgkPppHMLKAaaUGaAbccTnKZdbHKsnZUFpxHNk8hgj7afAy8Wkrk5px3sdcAwNam6fvdXXdyE",
  "key13": "5sS8EC6dvQUjzquhF1QFv4JtRktVnLcVxrofWHRdUPpWQt4cNvjdu3yJaQFHiQAvkEFKsFWk1quBnCSrTbuFKk5U",
  "key14": "qqFLRUkmboqMMho9kGX1YGPGcxGXK2eHtLSetAPoGQsnHCiUvbGwFWS18nrCEJupwtrTVUJRk4gwdV3ipVjgpLz",
  "key15": "5QPBrViBm5TnJXsSp4gu2mimPWUma6LTN8c7XWiS5pPCerQ4cY497KHwpVm5vHsYT4oNhzxhWpBgHDFMUF2RpN8R",
  "key16": "4Q4zZFgYu7gEW77ve9sYKUZyPj3Q17G9LXdR1ms7eE6pC3bWujnwRH8ME5dgqkDh6yQywRFF8N3vsuM5MTszfBGX",
  "key17": "5Y4ME8qyGabiqDUeHVmvXC74gZy4H1asgYNycPVuwVVnuFhCvfnh1EDCRzG5vvYrByg8Nfp71n5Jt8RqbsPAxoup",
  "key18": "V4WjohKN7JzbKa38ozwnUgikxKfW9g51vTQuL4EfUrdumb7oZ6CPF64QLStKDcssDcb3wV7SJv182ADxM8k3s1L",
  "key19": "48v49GBgfNXVkBJpQV1RkBDSJ3SbPsjeyE1LGsRFF2Gr2Vi7CQfYU35pELoBPmXQrzjPs7NFchLMw8k7JNctTKA2",
  "key20": "3bDxdDVvoEbyoK2Eff7RXGZSwSmNutc3JDJNA5SwryEw8xkvYCpCya1TY1DY11ghuAQ5y3KsK5aQXdB6jVwXgLJg",
  "key21": "2EM2Ah8MxhHqve9W5uUtFa5eYyFP7okD3JCxudjB75LynkqxjM1TBdPY7XME8yt3xJbkNzXfi57yS31UNidnvsw8",
  "key22": "64ykXSS3NJjHn8kR28zofSwfhUL3wREPxqrKzBsaM29obLMTzbnDBG8BaHYfza7hQpi5miBwf8CmiGwDSVnyG35Y",
  "key23": "4bxgnDK2ziszfVEMKfW6vxVVH6TFBM6RasN5XKh8E1VoPqj2BcF8CxfmGKAjXxq1dpFpQcXkyEq7hb6ih6VJhwA2",
  "key24": "4ZMWBrQFQaVg7wtiHPFm5uTSWUUFnWXPpsePnq5D1oFRsLD74VZNgQZQHbAgifk6sctD86jegy8nsLSMrMNZJ1u2",
  "key25": "h1qTHYwPJaJgKD39kqdvgGhFPukA6DZMoVtvUKF993CAjyhEfLVhfAtgSDehJikTjC2prNWj9ca9VFo1WRC4ZWe",
  "key26": "4zx73kHqVUiusKVtigoNt8Y2MSiLVVjBn9MQ4oHJuJGehu63oXxL6DhFg3sG9Vetq3rtb8ZgVke4hoRtW689LmBj",
  "key27": "4eDvsWgG7nwqEkrai2z5FFkDJb4ZaQnaRVEvMjHdBKQR1bqgcvgqoHJst2CYHnK4QL9qs1AfGt6DU2ktbjR6Ea5A",
  "key28": "2B3MdFDCh6NnEvtb7tJY98sbeyC1RCcMdCHt8sY1wgWtVzPVZZ2oSnpKXr6hmJaRFL5tST81X4k9az7QAyMHVT7k",
  "key29": "2ixAsogrqEheES24Wv7wYgLLeYf8YypRDjqKUW96BcGrbyJYjdeZc9SJ5zafsRXE83PHAegUbqpawdnpbAnyvLzF",
  "key30": "PN4brUZLdNboZTCsNStquQmLc96NDjbFWx37Cbnfvy4eDHx1yvcZCgQE1zvK9XHfCxSZvGVP1gg4dr9Y1b8Den4",
  "key31": "2PJMeEz3oR7FZs5MWx4Mk8QanNtpWUAGNSqZTSxpV875bxksgNMb6kikNbDDBo6U5PXMzFXyzJV1nmQz2zb52PoA",
  "key32": "2PicVUE7kpRuCuhp2k37nRTGbzRJX9KRrWhp9BiQyGPiq837zZTBiKQdBqLx4TCVG1Le7i76UQUa4zr8UprQfH6X",
  "key33": "3mvfBJudvVcWrG9DC5ig2JUiMM9UKJ6uyzcdD9X1dE278LXxahWXZYhT82AMVEjaij4Kp6Tnf6bpRKu7oG4HkjsC",
  "key34": "3qSM4GLWF1JCFGP2A6VocMN6TNJ32qZ1o2oRdECmjmGZihAJ4LUTfr3AtmafQmbVxR7efGVi7spSkQBh9Wn3ub4m",
  "key35": "2vrmHDMrDReSgwpMkp8jbf7btuxSreBYjUv2BDWxpio9xwRjLJfNquBANjeHN2cZSHempC2Vi9ZbxeSGVi7Uy4iM",
  "key36": "5y55KyfiyAqie1DJeeLsbAMGRKsVGhGHKmNtvWvS2NTSzWF9DuLNeKCeRzSrPLzyUERjmmLHicqodGYRMnorKnE5"
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
