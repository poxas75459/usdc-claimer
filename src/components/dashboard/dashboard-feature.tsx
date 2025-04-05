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
    "3if7zmzVecfTAqT9k3Dg6QCoxnbVBPcZDXdcySRKSfANW3jrsxhQGLkojPNw6q4yVYpTBFnWDoPgVg6uCkECvQnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zhm41iR17dJL1Ht2frWWsLbaBe79he6eZs4daPg9DKnTHf6ryS7kQbmYZDoz9WC5V1K3XNtxyKK9qGfajkovnbR",
  "key1": "3LsF9Ehh4GmHsaqgqnWkJTMAbZU5Tp9cVpPSd19EqmZX7CEjR1wwp5YW5GakZmhfJxJmeND3nWrp6uZBKp4vLPFo",
  "key2": "5Q487gNLNjWYTkJdtpSGxNyLRDBw2ooVA1ZKhtiGsxnuDqH4eGcCDoWC2HEiajGB5M6jZUoGo9TW5ontwumV6UPu",
  "key3": "5vdZfvNzuJmk4AznG1pkHW69MBRHU4X9ypcgyG7eKcgeQhR1VzeXHiCAsE5ZA5tLPxuwTnQ5Pa8LHx1T9MCYYA92",
  "key4": "2EFn168WWsE7eJai1JVZXWzFYshJDD1p6dDZmQFJzY2wjuFjrq2CBa7dzPwwQb566NJEGbX4Kt4AGnwivgntYneR",
  "key5": "4MNYPpEXGuak6MypxF9NguFup4DPydcocv5x9LsWcP1LscRwmS89z1usUh9m7w3KwC5r27ZJYeALW4FyvqEUxWKi",
  "key6": "2aRJqAJZaijSkhjQzuFnBi2yoi1rKYAMZxh91jehsY78TXJsDGs3Wcnks9QgNcNzAVJoiCMRxXbwo3ehB6UoSBXM",
  "key7": "5AzHpHRje4bQAarwS6W5LpsbtEc9wCN8SPyLUnjbMjSyTWuELUTAgXe4xqy5wdACzKr4143cVHFefztoCrVRdCwA",
  "key8": "3ofkvyr89emaGQ8TgnS9Ktc8JcTAe34qNqyoAGtLo6qTENr76gzmyZyU19WAUAGMLpNym95KYnTqoAH9vabeVrZg",
  "key9": "2Ri1LBsN2hJkArcXSj3ABi5G7uyBfVTnhozgyabKeB35UhkkZtoWPFqeHaBNSFqtPMtceWvVfgb6CSLk6E71nN2v",
  "key10": "2T2aYr2uJSeHq5j9biiquyV9CnncYorfwCyg1WYpKy8utKqhcKxHGKDmnrZRazNQw5KXB9DGVYRPhz9CkTE1QJAZ",
  "key11": "35BZkevsRAh5cYGePDDBgALaSRaV7cECW5DhTN8WHXvf7QCqjtp1ZTZnuMeub8MXQcTqswGhLEoRcMgvHNUemKgM",
  "key12": "3NP9jiuU2G6ZdbZoRUBTPZLJmDCCrM9khCFEkSGnJjDD7fV4or7eSv2cfGgwJ2722bZ4xYyVHeVsWSfJyYQxtsdN",
  "key13": "2zYkxSn3qNPYVPe4eZxF3vcCVHGM84RsEVNpD1oaWtkBW1a9RbYSwomP4b3BfPiy8iZrqj4CwS5GaXJajeYw6UHz",
  "key14": "2nYs6r5kGmwvuNpd1i6gNnsuJN9G8U4RDXqSdgXwUTgjdSXoetC9Svj3uwCo32fDxkYLduiy3CoALJ5tfwXRZLRv",
  "key15": "4MCSz51wbhfmimzZuvSZ8c1LbzXSmtYyfLJAsZDwLtwzeitHDKUhiWPM45pbZBdMwsQnREQ8XRzP1oyirYakkrfq",
  "key16": "5wi1HASe6FXhmnqL9FRrMF2WWg1HCpLKCDo3KGPSkNHkZyX7u3Tj1EW8RQvszAip3jw5kF5zgozFumDmBd7e7wi3",
  "key17": "VBdF8UycpG6eYSD4ouT4ndSP3yzDsvbPEDcYckby72PzjAh2hFMi3gva8CnSLVJxKrbPfnZEy6ZdtT2dkCMXhi3",
  "key18": "27eD29yJzR4HN1mkDW6M43VKwipNQofY5rkhePz4c32Gv6tK9Gijz1gB5AoWnjCxnHaT1rKpGEz448C9VhucJSKb",
  "key19": "2dZzzcgZE7Cr55p8URRCrq1nVefSSeM9SzbLoQ2N6dBtF3aPHfXkNRUoqWu85UoQmVdvSQCgBW58Q7AaQns5XYod",
  "key20": "5MbGyuvaJQLFTaXaAayP6hb1yepPXHY1shdrZX2qquX7yyR8axM44fftUCDSPzdf9wC2fTBXK6jQDhH4QuFqipfY",
  "key21": "NA8KXZmWjCUm9bVmVE4gQbHpQcS39xNU4LKskv16sNoHLdUMQG9DvgCCuTRtzdn8pQ8EEPCTfFpSYA9gVrgPk1W",
  "key22": "5AmeFbtbMQEhZxensLiAnhXu1ex5RQKCDk1xuuuGJ4b5V787AmVkuCLVaGeoZjnXPFDTqxs3E1AszZqDnufDEes1",
  "key23": "4iv4vjQk4VUfhNaby4YmQdouYHzdGVqeX9jR9cZE5Bij2qoidqSN2pEx6Jy26QgoVKeJMozP3pekQwZmRk75FG8w",
  "key24": "31LqpnVeUVaD4LvyZTpfzHK8ZD425U6WrUzqXN3FQLqSPGBa7X47HPa5QnTWBzBnrkqrkiTouC4NqNaNYMYXvv1n",
  "key25": "4EfHJKf4seU4HsJ4M97yPZCLrpWsoJ7kTbe2EJauGGYghFiR4xX7TpRkDe1hFmgombBi2saqtVkdHS54fjpqwsGY",
  "key26": "3JcaQVKMyzxTF5LB2jrRUncncv6UVPRaMc31LGcr2dYUoHQqNkwFrAg2o4jKEMqKArF9ChTHmgBFwf6PPJgftfL2",
  "key27": "5r9i2TBW6sZ6Txq9NJHBSUDpUAKryUNtv4veJDCFUNVcfyvqRar89cqS5fxPnpfJFHK3XNGXbzbvQoUrJKxWmRvb",
  "key28": "3gJgrax5Kzn1HBVkHdtzBVo4yvEjYhbzqTMCqjXw8a27VvATf3rpgmPwfmKYr4RS6y2SAKmi8Tm5WGv6LKFo3QbS",
  "key29": "5Vmte5e6XuUoh3DSiZ315ngWhzk4tiu1b61FaFNgyF4L1fx6xwNH6b2CxYnyAc3VWo1NgqUBerzWQqx6P1BYaHuT"
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
