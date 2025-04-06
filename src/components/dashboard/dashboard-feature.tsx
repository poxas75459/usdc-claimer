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
    "2JR9A9YvANBRS5MFpd2hRy1wkDLkf9cPipZ9XCzNrCjnaqt4iv1u4GkNx2223V58a1T5JifWSvAhCJkPxzNqH9GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zMpNc4N594fBhGGHKMQ8GxFLkCVL626XQPsfyw5MYKyGvaWuSCFeHHzEutWWfGZSVQ73XJSVa3GB4qHGyU2V2c",
  "key1": "5vTAg3he12GeMzHs8h5Qbk6anzGypLejoTmum31vTKvKuVwQxva4m77FDipYv2r4yxHDt6zKMrpTkuzoHUbgYt1F",
  "key2": "2PW46KbjSdsdwBUvMz5YFdd31p9iAVeh3g2PZDbSU7ZmEyyrwpAzV1NTc8sLKwyThwNuRfhn97D5NKRQEkCUGHHn",
  "key3": "5o6Lyqt21t8G9DFYyqnNqs5YnVxrLVoYRLPW2CYEEx1S2U86vuXstMJmGwCdS92MAAEntYMiTXMrDh4w5ar6W3TT",
  "key4": "4RhhoVMPa5AQgt2AVxkc1JVZSJ2V1iSXsqUMpmQrUEah9UYiPxyXg3xKkaE8j6u5U1nwWGgbd2eD5WxSuMByLExo",
  "key5": "4YB5U7HbmdHYjKGxkyR8U2ULA6L5WqsN2BDwmKA5qBNdvhDUFQZoPoTiEZwr4xdB8wzxFBVNCXTYNUtUunxaTvUx",
  "key6": "5KtZxagnkLQvZUJYayGFHfRLgicwGwFR626NTPzMyUhT1nG9Y6zAqJRjEKDwgdm6xhjDBbRopyAmMwoRtMLfNVae",
  "key7": "4ZriqxNpgV9mhcTm81GzCBY8fNxxCtAmKQ175pGNSBkwPC9R4x8YNcSFwCkuQbAqz1sZX6Yq5ihvf7zC98uxmb5S",
  "key8": "4DH7xUgWewvNVRmFmZxnGRAGZbmihg8KzeYtffT8oXjzEKgeXqsJHv5jxjzp5gyd7TFHroxGnhxSJ7bhrwznHHSV",
  "key9": "49NZPUh8Fs2w2wVt8jswMCpsJeHF7p4kX8wZ5b1UGAuxBtM6bs9oc9YE6KBuy85YKGrVVoagVUrpRbke1Www7QhU",
  "key10": "5hAicgDqtR6TMwrco8XC46SMngZfJwHQeHVV9exKnnZBBpY32M2swuHQhHaGK8SJgBNsL5u6bVhACWMbWMcr2Cbf",
  "key11": "RsLBnsSD4fKWJmFDeQ5P4UVZpVeaCcKWZpPPK4k9PgWY5QziAPTVW1pHED4PQGXjVU6iLB3ShkAyorNdKnNDnY6",
  "key12": "3AVdiKkfJ7zKukC5cvTrQZJznXDcggM8sdRp8uTHpCJcMCqKfvzEm8wddT7v458J9PpBoNZmTSTqn9DvH6n23cie",
  "key13": "2vFGu5wy4FKGvhcA576FzaZwc22rK8oTVt11edUT6xqZsa7a1ybg1Z39L5tBXMwVH7arM3wwMnB1L6NYmrvxCAR",
  "key14": "3jG6baKbGTDtHFfLumkTBTxAaXjyzZ3BKePfPYixEWfBzU5QAesKPee5PKGewY6w96DYcfzKMpBhYXrc6drguWqs",
  "key15": "51g2G3EGd2rMhFHqt3oUMX5PuV8GuKf7TL6nMbh17sMRSJZH99Pc9bd9zvPV1q1GrmaGGVbbfbUMFRhFksNWuD46",
  "key16": "ZXk8i48DnXLJwUqnoB5GTPiUqbdkhXr5N7iz4EjrXmozqtQhGvBvrcfTQ8N7D4dG58v8ZDcUx5ngjeF4QohSJ3k",
  "key17": "3SB4tDPCKBjURGYseJY1TgDHoAhsioax36feqTQQiLRu188GjWCyA7K4XAcjavi9XSFY6apajmUeTFu2NuogEChk",
  "key18": "5KiQa66JctG1dqTFb1BED1i9SxhYUUKpFWb5cTUH35nNqmVnoCPaZjZbKFKbJKpUqXwBLjvGtVcwcupR1PfKfisk",
  "key19": "vijpaF7D2E9CPKYej83e93quvw6Ayh6coMqmuMZvGfwWM2csp22d4Yc7uJdiuEM6LpaTjtE9qsj3Sa7U5tKi3wE",
  "key20": "HtmUdn6q4oioFksuHVrjbZkLE2DYsBsE6HUKdKNMDSaHf2EaE3XEEkHkyd5KJjFce6To3hUJFeLJYGWz7j5bK7v",
  "key21": "3sqnjLfunM4qmmgY54oy8JmDiq3yEzr6EcfuJGL3u2pLr3sYFNH3bLHxovY8i4AxcN1zLLG5x9QPNExq2vG1roB9",
  "key22": "1o9o6ABTsJhWFPXnew3ak7BmLK3FtFoUoUBuEuisxU1uK4MuHYUqrFykkStoqMaevXzWQRHrck9A4jWUyagg87k",
  "key23": "4Q49AK4tHPPWqnJCDY595dC3db6H55fAoBGupwwqvd2LeYVGFM9q9SmDGUGBPvWV7DQxTEFXQhtCv4dxzuSNcCc9",
  "key24": "58SWzEbaMi7VDriCMKuZfANgXXDyLtbknMSs6Vqx3yc1mvDQUwNKD6Tj5erU4FyNHUrFxY96fEJHYPvwYsqxEzpR",
  "key25": "4p6ztswoDxNUiVLRXuuEChUdJ9cQQNwGjK2uqKyXJqRCLrEUf1q5sEKYXDh8vbLGTcL7iZMQfsmSJCfaygCLd172",
  "key26": "2ko9CzFQQucF195Rxm1KvykV2RgVsPD3NVnavNUBeJucDu1FRK9tmYYnG5jZMA7gK8VPAoj16yTS7UMJTzYmGtEK",
  "key27": "2QjbabCziKPcUHv9tidpyY8dF43isVuCNf9tW1UKpzJrVAf6S5NQAR1DqeMgmWeghCmPnQ6nfaY26gvynhE9nRbZ",
  "key28": "C2Camh3jSjkhaxUPsVjmd32qecCjEzCW4HtHM6v7EgXKcqwLFW3umdj72psu749rjxKmJspTWRrGsSVSxoq7skN",
  "key29": "3U7NEZx4ABzByQAWzqvgzmqMmKuZ5uY2dkzKVFbj3s1yBvuzUnEiMC8dhRG28hQrhEhnvqzsHtrafVSxNjW8XzTU",
  "key30": "5Cuki8uWuqYA2zRns4LLojjo8B1Toy6YEPYBJw4swWrTkRtyNsfomoRqxXU4HUtD5ZuVJoV6U995HyhhnDTWN8VD",
  "key31": "aqC1nxNgtr8cJFGxzPrigzGwJFtWqX9HuVEr1u1tiFdks9nQ86cEo349AXwFaVb3wjCzjfeR1pvsufQ1WPvSBHM",
  "key32": "4ZniSkBqwa6FRQouFJkqREhkjqb5mUzSvHRQsgywsRV1ZXTjRTkzNhPz9313fgS8y3HvKvubDYWKo6WJtYhswX5y",
  "key33": "5qMRezd7KekX9Z52jLdPxf3Q341Z2vfVPsd1YXYSsUMqg9S3SSuVMrLFjhZyEdAf1rQp7NFD2ctZapqSP2g8Usnz",
  "key34": "4DCu2JRB3Xs3AQPC4ZeZyUwMLXsiJ5mkKexewhNVFF6Kietr9a8zUvyvsYoWgb8kT8s2vhpg2JYbDMsYQMA7e3W7",
  "key35": "2MiELnvC7gEirxcJnXh8559bbHDk2veZZiaRxufVQYeDnJA23VBHSmBzyGmMuX9AXDGy5YiFYEdorqCuA8ydLQBc",
  "key36": "43gE8hkDLwNcPXRRaFzLKE18qUgk8vgkjeaftFPHhbaCDQ5TqBvzi34RDqS14utN5cELjZDvHkAmJGjDA5qqCjvt",
  "key37": "3VnuoUVAyfkeD4jWTJ4B936jCgMYQ5R848upt3zEpyste43QNMGTnm9oUWfYyqYUkrTdgegbrod3kB5s6ZcFWiYQ",
  "key38": "3TVi15r9TizFHPuBy5AkrhKXSBGLR41uDR885VWeA4ah27ED54hD7KDF8ZDmdmpKJCnwa7j9YsZJRVgGdxtPdhRR",
  "key39": "xVb712wbUyG2t1EpVb2UXhD2sYWLCoLD3xfEcx63C4RnNS6B1ZFZw5cV6d3qV5HYtXwWK1yiHeR6wafYnyEgmuT",
  "key40": "3J3AujhUy72hRricy4iEqoVkXJxeaNaf2ayuZew9nWuUojdCge7PKnEBeZkkdjjZZgzUKEutzmVhaV4KEDjNzrnL",
  "key41": "5PrDg6eCsMFQtJqm8a6bNdoEgUar5URY1y8nKcPw9bK64TAsHRtXerxgM6VgdExFB1j59YRbacMZhqk9HnbHZtEp",
  "key42": "46PS7xyYN9yVD7YGGrCv3qxqzy2bhy8qBvU7Ba5V2eT4ad9sPoRZACpjUhfUgGeCh2yeLSsstY9tdMmrht9bs31q",
  "key43": "pUfnEF54HvjN6gB9XZcyAUrqcJzF8X9M1qwoKAsKNwcdDoy5wDvceo51FnMENhzzyeqSjYSNhpWVuofmQHwP8wQ",
  "key44": "xbvey9M3ySaBUZzC494bhCvPdPAWomtcswiYdLek6tatW6csXpK9XFdUR7x16xFiTTtTdYBb7pLJsQbwsekDaur"
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
