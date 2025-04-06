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
    "3HqxUQZwrydLzGfzEWJwvfujrS2mcAh6ZJ6tXsn87Qqs5DfHJ1gFfUrGkbrM4hUn744EQrTJDzuWRmPByKWxkXd4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46ySCP3qvqjKijea6EjqCcBBHPqBYuARdMBoP4srmt1w3upLLyweGYNwHzdbbukyGQx9TvTa1bB1jtX4uYgkQNv8",
  "key1": "AUzzhdJ2WQbWMo5ku2bsVt7McBBCknjuKXk2z8bZEcmur8k9d2tZmgDHpRaMgnmAECNtxZEPD3W73kmGDK69Kv5",
  "key2": "4RMajFJQ7MWi8kDhd387jTjEXx4UHN33eHMq2SM9Z2j5vJ8iaLR3CRZsdZR9jAB5CGXP9SKef4nUpRSwn6881HEb",
  "key3": "3DJaVHWnwU8UpPceiZq8p1Gb1GEndXoSpmWXNAYDephBqxq5K2Jy4XWDX4fNiL9LTV4feN9KjxPRPJKsrQvDYxEV",
  "key4": "3c7cc3a1Fuyy5ZvoX6zDRSWHbuLvxZWEd6XNpWRfrEDrhNRd3EEBqsCJSxYJm7ZNDSgXEbDtWWVuDimGs9PvaGaD",
  "key5": "45wPG5vnysr7rMT5HZMWmin4zthPhKW9Kg5mJcwj4Kd3NzpyfJ4h1v9K24cejgeRTUMwGXNkWUvPzX4RWADMXYfs",
  "key6": "4sW6dWf2LsYHtUXWb9kxR9kXqVfR9ZU2REnKbUEC5hcfF8dq5uSMvsqMK1nW8yaEFWjg7RkRt5uRvSdhomUJmbET",
  "key7": "45HBmRXXsn2P1yQvr2MCrhXdrHsiGJ2d7P3taQmxrxaU4huGtN44R46RT69fqekKZUoX8ADaC3FmbcyB68zS6QgX",
  "key8": "23KRBEoVhGDgWYFzWBgfMvypoSBGYF9ck7bMdTZaAbSviQt2Fx2iNoz9FyjTLksaXQr34e5aMAyxrGATF72vP73z",
  "key9": "4UdX1CV2RRK9dvjCowVW4iaUXk7RPMqioYBvg2yJsLvxESeyoCaWNEPdfgTAkfFkn8d3FS66yQq28RCJmZg2v5Ef",
  "key10": "vRerTdoEk2wDabSyMLyvYSvomnc34orduiJ3UxZrzMjwUWd1negvSqVhmguRUnARmHgawEMYJfB7NLBqnoFxysw",
  "key11": "2GnYwFY5oE83eHWNadsvJSu7Zmis5dsWnTRaJxdoedhGuEzSFkhvaPBx7HmsBPcyYmmLzcHG73Rv6TEjZwZoWb5v",
  "key12": "5wLJkArWTfLkgKv5wrhseDWZbbQknEk6p3Yni41x7K6yA47fy5sGaZAFqegRWgavWu6owMTaJwTganVSVr5Dt6US",
  "key13": "54tFPjXhYChFZSZ8AX7QVwC2tQCCPnniziHcRE1W3yuNwXBAefkh8YpmnXTGbogHYV12WuG6FsxHQDQixET5dcnC",
  "key14": "4JB6QoADn1eZg21QBGy75vXcG9eHBzzBkqiAZpe2wmvbFaoM3piBWtobyP8AG7e7nhqckQe9CVXtAGkEctUupHx4",
  "key15": "5G8JUe12hrtfH82ohQQbZPBtmE4Yc8SJLcaVpzJwUzzCXK4k3JDGk1j5LAVFhPuZvxS5s1Y2BAW3adNoBFPY6Hgj",
  "key16": "1ggvGSMMYuq2ZwMkgerbzhj8PYH4KMdMhV9rWzvkPaHb9C2t6wGeaCaAvy9Et3x5NAwcKY82UGXTbKN8SJR7vhd",
  "key17": "2KKMo7awzm8HS9gHuoXrW4hK7hXLRGvz9yTwDzsYEXfxPPafTQYAncz1kc7ozwQMs3qKrwqM2RdT47PgrtsiUFnA",
  "key18": "3hSTbe85M4w8JCsECMMKSNhhygbVust9muB8gr2YYzWxXvvRzjLtozP16PKXqRReNBvW15vrLanpeGvoJnz7CHw1",
  "key19": "3pzBpwArsx7USme2Fp7ERDVVQdz2a9PQsPuaC7mCJzPGbgYgwj2CgUkwzVbfV3ufJGVMhQDxbMg4cMmubQpehbSe",
  "key20": "4XJTRaPrT93CT7xwVCi7fcG8cNADWe9mQ233dZmanmwh1fd3GnW6F3rWG3jWzkBT5Cdym5eNbow3gg1ZJBAfH8Zf",
  "key21": "Cc1K2zTSLscmZd3yqYABZUFm1NaoLD5Q5isfyBVzJapf8Y7K5ULQnNuRn7QFRc1YbfGA9SUKa4gDwcEMY9mJaTQ",
  "key22": "5RL7zU7sgpeCudADm44VsjvHwXPQfeu6K6QGdDDKuWogTTn5aaTL97bZDsbdMQm4uEDVTqHX4cXKgubRX2421kzm",
  "key23": "5LnGA5wPRpHAAM1LFDYxfvDfkGNAeYwuKaZmU4YVDfZR6YFyz3GUUyYeMZr2QK2ENLLXJiX9ShgvqwHWmq2mvAq",
  "key24": "2wxvSyTcssYVnzDT1EjS4bSxbjXjwpWENaUtgDMyN7unqigYcSpJ5ESREis8YaCE9JydrfHa39CBu8TyVqwUnF7u",
  "key25": "3w6CDzD93ZYi1ZopAkpqCDdXzhpgiHtn5mXegomXDdThNNTcvgGNvG25xXopVh76pqzZZYeMwchucbykToKfyWx4",
  "key26": "3ueZV9kuvYBjKH5fFuefpERh32ixUWT3UHp2zPit2tBhjHSU9S19RPhvPBou8VfzVVHkuyJyTFVKrefsEwkTgifY",
  "key27": "qgFM4ZBDusAedQTFaz326bwF9YWmVkc6YJuU7JEwCV8Ff9hVSGKyuvFHaUuz26qDRJqop5v88yo55rkSzwjZPJj",
  "key28": "4JpHyzfLMynHuyVCSuUKWh9a84QmkJMjpHF9CP6zbKHov3WxQ6TDPdUEzNshypXbBL4wtUbqk9KBdF5YuU7iNgPL",
  "key29": "3zW6L43sxQA5zRPu8vjmj81y576h8Fa9eUvynu7WzjLAbYvtYrRnufnWEUyfsvUF475N61C9M2E8WTBpv5QtvhVM",
  "key30": "4rHWWLbb3CfvrvEjqkYuPyJwKyquD4i7ajiuAsUjH7k7YWs1nmtRWK2ET2fcnZ8oeSx5r4UbMrGPeYqUb25zBFk6",
  "key31": "5Ab7Be4aH9Ns7AM3Yt3joMpUd1g9nmgGsUaz8NRNcgq3FtXdXPoU9ydYPfy9rvaJP576TYZnNYPV49PcZhPLvJZr",
  "key32": "5xouzzZhpawG5SFe1pD6m4y3izcqUjvo71ku9iUkQhyzv66fymDJRTnXz1KKKBZrpX7rPRXJRM6Aw1NrhqVRbYgs",
  "key33": "47VURn2hjnQ6Bss7mPnD1FDc3sBj7x6qMwwgaWu5gmNdjqpcq5AqdHKjyGgvoszULiS2ECDQndtRSkjJ9kcKaapt",
  "key34": "2W4p1SsDaX5E9uT4xrw32QKBtVuZpZ3JT8FowSoYHbmHmSt45esp7y88hZp95PDLh9idhVA7TevDdcTyuhwyh5Eq",
  "key35": "65iSTuGFE5UTywENzknXt6RVKEkWdgKCjJNbmmsTnnn4i5ARCwveJqJWwXBAZx9uNsmJkho9ir5BJfDSwBCBPHxV",
  "key36": "3684xXqmfVbCr8iUgLKNqFZjukoPBHoBjPKtXsu6jCfvZsK1YpgJjoPzFvVeX3JBPJrshTsBXYsAPUFZfThezDnh",
  "key37": "c22F4keDJbgTf4T8YxiGjmfU2YPo8tDfvcg7gQp8jhaUCNEojUiQ6hxymChzBPV3Do1UiV6kKbvsm6NGU12eeTL"
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
