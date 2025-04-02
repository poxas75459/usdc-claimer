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
    "2K7mMmoTwhJwrXEnMBC33htgbjqRitSNiknQyb5DWxzM2uWsg8QZTbGWs2duq3FgGLeaRCeQUVg1wzHASz4dnguT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A2PQnkKvxgA3yur9BM1FxsQXYeQhAFn9t88f6tfsxDTWzy3jpZ7yNkAfMrUVNCMqRPzPQSxvtJ9qHBiRwMi7NLc",
  "key1": "2HhrjWEGRUu8DeNVxmDRi5AK82Xm25R55BdCenX5GfJk9ugTznNc6GfDP9zKo7j573AtX4DgifWGfy7qQNEq9sLC",
  "key2": "jf712xzG9h9eZf99cMdCTwEoBxppkShyKmL6wFCEWYKuk6c5oMv3nBndvKghuegbygBXGesajZN79gfQAqA3DUg",
  "key3": "2YNy9vV1C3z8WXoVN3WSifYnPKDdb53WEuHWJuvqFDPABQhdG2QAVVoHkv1urJrXsxk6XcmCPngtmRsARD7p79u2",
  "key4": "3cUdebz8bpLXdUk5wvD1X6Mf7EBBgJhrabnR9DMPXkD4R3caT4qH2kL2CUvUrFcsuKp3Jksa7DQ3a31GR8CMUGtc",
  "key5": "4i3ajGhyGuJzNik99QGJbmcYh48odETY8UPJjYnceq8CJSAbiR1hcajt2ocjk1h38T26m7qeNhzv2kYE45drWuAc",
  "key6": "TRsQ3UnTCqjPn9T6fkNUxG8StTmQ7yWnJVrwKxJHcM26Lb4jv46N2xPL9BiQp1VQwGfiURUkvUksXma2YpryZmi",
  "key7": "4V6ubCGWbw3Eo9qKhTnVk2ArFhMWyw6Es3GBqtGWKYmY4c3Yka2AfNsf3NaYr221RWJoQ8cLnsF3FmVq69Q56TgZ",
  "key8": "5GsyFdjgLrDQg42WzZgWpGhkw5jrsD52K9NB6PGxp7eGYD3QUoz7at2z9d1r9DR3T6r69mCVSPBAqqCHzcU3UxTk",
  "key9": "3g3Js7G4PxgRRhL9PsZhg6gMgHbrj6namUucVUwpMPnDM4Y7m85o3e6dLV8RZY78pZ4XxFKmgEBYxHJXYuUAyM7i",
  "key10": "3rdbpSNNVfdjmrwLG1C62hbB4u741PJs9EWkhrfyBEd2CYLJvUWvCAx4EBJXesVfaPZKuRFy5M726xSjPWv6PShR",
  "key11": "2jmssV3oXn7K5G5djKrjk9zYTU5z1HKSLnccR6nX2r6D9HJZ8WGJAGGndioF8H6jqZGyx1zmySE7hdFMSyQeZVdq",
  "key12": "4tu8S4b5NcaxEAGn2gERS9iLKKu8fMufUSt4VLEzgYux41cqTcFixcnGRZCU7eDrVjp23Jkrk1oBzXLsPdy86z6q",
  "key13": "5W48pGSu4VLJxwVhufCWMnYWrwdd12ZhBtfLP7eyjx2rn4DvjfWyMWWQjBixG3diSX3yPTKVE3eidrn4CeFik18v",
  "key14": "2mPAifVvDmEytJy46SqGVv3tPpx9pWnb7WW8WuMNTAiYCoDmndWdAazSKwayetYRsdS3YAcvfDfgyzsjSvkyrxmn",
  "key15": "414TZsZUS9x1hdMfzWWjmjCuYYCDGegsPcj9VXCDstGpnF6fFWLUCQ38HztgTL4XTyS1mWP8crAweLAFfxqUQnrS",
  "key16": "uBvfDaPC75Wyw8jUAxsmhyAx3r3veVBMAyXy1L2Aayza8bTDJA2S9y88K6kCYTpEqLMbR83CvKvwU8566qfJ4Aj",
  "key17": "4syY9dfLePLvtwAbW1FnpTdqA7yzBN2paZQB9nrT8vJe7PBmxGf8YZfLGDN986yboonqbNRy4SY1AYDwuiee8DKD",
  "key18": "3pbP1yfssbyTghNcNZHc8Cs2GtpkEW81GLJwuKEZ4nYamocyk8eLNekcSUhfscSFSxnWGKbtsvCzitbCJf2BCpbf",
  "key19": "2ddgSzM3Mm7hh1G1KU71FrHFt4fEoZqnUc5MNC26hHA3Z6Q5FvshMHBLfjDeG9s2C6d6rCBjL9tJviXkF2CxFsvn",
  "key20": "4HXZzmyNsaEwjH6sQDY9noSFmLYbKBXUcnjECkFxeLkFbsGM7hz9XxCAkME4BPMTJAUWWx4teoF7DrfhsxXA5bPJ",
  "key21": "3L2YK8h3veX6T5th6zB2ay27p1x6JSNk4oY7B1YmxsXDkMYAT3GbFGdhid8XrackFBXymRrk7KxafYY5WFxoyKLi",
  "key22": "5Kv4DWT4caGo2FD3fFPoqPqqmjSXNeS2xcYRbDDAQYBEKQVCy49i9yoes4prCL8oquhVDfUJd4dunSVjitkfTHZo",
  "key23": "2MJK53VTRWm81x9LVtPiUfwxRZqdeXbiDaZD9vA5tyj8NVGS2LH1HwVqumJNwc7Tk6mAHBaAD7HQMBvART83C3jU",
  "key24": "5eGvQJcET6n6KoqDYhNHBWWWfkD6VMMvHbESH8WZtFCJ21Y6StHmCDSRDrP41UCSoDR6wnbnaw5XGfKjcZtmZ2jm",
  "key25": "34iMGnU368GSeCZt27UEDqk15XH6v15YkGJe4FMNV2VcfNYu8mQgVQNco81NhFzYV22HhB5zqYQCg2i3dTovWfv5",
  "key26": "3AhDXBB3a3u1kt5v34Ev5pLyAXhDnoEWeBRWRtm6dWxyTBND35d8T2YbAXHnScGX1PPyYTN9d9GhTvLCacmqHboD",
  "key27": "5xV6GJJisFoNBXTDmJhzLKDNE7T8mrcqDSj8g48bzZH9RSfRnQLGKq3ZUJNV3L5cPi1x6amVF4DuvFcDoHWzGVbL",
  "key28": "5ASZ74m5cMXZg4vCUa4vqTS2KuDqC4kQPSkrngNxksFxAG47AbPT25zk6JDqqbPFohicyCkJM2DyY4fAE31cuW4P",
  "key29": "5f25NqHZWsBoSp9uNDFjyXXnDrpmZ1J5hGNmXgkK7H8Yxt4K6xMp1uHaaL5qD31otSafjvKA1FJoXmpDvfGVAWHJ",
  "key30": "2cAkXnkQ5XaFGquSY9osXJc18bojnCAFwMDp3SuQNZiYEWR2DZcyWSd3MWMv46ruNkiXSXgjSttJVcKhvbzm3qs2",
  "key31": "5yJTJnt7bTqgBPdqnoGrfYtaGHAL8PTeHxyqg6rYaVk4SXi6qMuxYa3k1MdPax8aVcgtkydCjnBkdxQrGbxn1Nmi",
  "key32": "cjZnsGTAUrTHt6AttPYxYM3CDU4seBdtgvvMewiauwWev16W1xZvFJioxTHrAJEq5AMW5CcWew1dps5uREhLQzX",
  "key33": "2WRvAW24uhTGUUxNtCAqUKo2uodhvtNWkHB2MdY2kNLMTsH5LTvHV959nRbixFQnB6ex1wSZ6XuDsAMHYFrUHEFi",
  "key34": "5y2RGXaL1TDTjjPdYu6GBdawu37GWZf76JxdAnoK8y2hcvEtaNATahVoPKhm2dexYCoBk3qVG8v26WeBJSaevvoN",
  "key35": "5EqRxuRcXouXCx9ZpoKAdYYjMsyGd2Ue3T3KJQpZTiESgXRUG2DYpfQGq3XnhbX4fywvUrJNozhT5TF7WB9hrurd",
  "key36": "4Mwbuft5L7fdcs8Z5qsKySh5gNdgptrstASFx4re3RnnMke8EsEJq2GB9HgsLiodEfcscMZBKRCTE327kUddog5g",
  "key37": "3tcF6ozAksQ5B2LbrmksEibMo4ZphLT6bQq8ACe4X4yp2qi4UvsEpcJ1egwKdA8j4VEfBVjCw87Joyrp8hdS4yJB",
  "key38": "3CFpJunSx6inzTtzsy23dVtwrd39LmjhMz4GNaZq7iJDeeXGpAiL4tzGgNgP8Nw8QeacXtESAYtsyx6hxwYWZpsi",
  "key39": "3TD6LSgaEnQvWinFQrysY8VYT5iDmJ9gAcHYPpy8tEPo8nAcCMmXFcnmzfDnmRJnV9xjBy9TYVvStya8Wn36FVXA",
  "key40": "3mdiHZqvSbsVVvZbtqGkHhyzXkyhiQ85THX78EaoYQ2MKcRh7ARx4dA2FmCk3qoTJBJkeqXX8mCFmfDkhp9oYAwh",
  "key41": "FzGsf6DCEZczJm8W3bzn8PCCdyX2ex76EH5qSr6mNxxyQmnycqPDKeumDhCz5mgVuSdpZ1hQbA4qeA959WN7RyF",
  "key42": "4hmZqF18P9yHfqDkAp1ka4krEooLQMw4A8DVALjQ8YunQPkRCTyexEpmxVPu3Y3uJUVWR8jiWVDCdMYq14MTV6jQ",
  "key43": "ntvYkYD1ZqrqsdbzQHUb86xH5A8yjwpL9MMd2putsM8kVhJEVhEUMDB9sFgoZf6q7zBJbqANadpyrki6zcZBBpX",
  "key44": "2cSHMq8AHsJLQUYZN3GqD7K2Gw3c3mEDFTRq76GNsWnLss8cDTPoxbeLbAEsFVL7ZcmqS2h8hKLGwPB7zNTjqJPF",
  "key45": "44ahdtnMAfF7se9yUKz8AGeJFN2jTNqEQdQQxuazj3AFdWJgAujqhwKR7C5vEC8SEYrBMDaKcsUAENKQ6pTn7rdm",
  "key46": "4DZ1zxGHPfc3Nmw3Yv5AWaWgrtFrzGnULWxApyJZHfHY3edXydkuNUpD2HY2kzr55xMhGhHfGFBSWeoR3mjd1HwM",
  "key47": "4ZTBJHKpJYZBGeiYLqYhQvCJrkCoP5MvJb6zvLM1fvv8vFHpEsgLQZBYqv5ijjx5jQtwf666EBzz3ct28DSsYMQS",
  "key48": "4EtpbXuZQEFsEHoB7AeoiFUPijsDYcUF53ECm61cEs1J8yGr3stVviXAbQqUsiwFkXX9ko3UzFrQ4UTu6fEQVnRk"
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
