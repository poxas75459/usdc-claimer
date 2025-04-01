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
    "5cCbVRL56Lb7THeM8QViZuwdmurhzn5PdqbwPBkKT2F2a93ZEFF2eSbgWsHkeWgEnRSdF7tpbsQLTZ86AHyKCPdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tjWJdrz8LjgkAz7JsBMkqrQKVB9VXsoG1bVQPbUvdkN36JNthK9DyAJq1Mg9cpyPhTrQVA6yYgVEgfTukn95MDR",
  "key1": "4kSARFWRZ48wmovdm55hkbkiBsECVE82gLjfUYV5VNQgyVtpLLLBLZS3H8DFgLyibRFzyGs1zYhLUCNtYAfHVQ5P",
  "key2": "mSXktQ1D83MjHAn1QVuuQWf6ZLetUfczRPtdNPj8ZmQM7xX1huDJu1R4262F2Ye2Pb1jhWnJJCNXLYNsKzVU1zt",
  "key3": "5ncNnv1GDEDVeJPwYcgurFNpPSXh1U8BTz5WPfJVQEJ7hE5t2r9pV1DfErtZdnoWsUHzpehQK1vnriAgwbdxd3qg",
  "key4": "3RZoxJxRNthyMDgo2MGxrQyAFYt176aDJVYvRafb1ykTN6R9T42FymNqCGzF8B4WTt8gCq8BkLLywvTQHg7b4JX",
  "key5": "dMrRbAvuwZmSFrq1bf5fuBrEi7AR2P7BEsVLQLjwP5JMPpWCZfr4DBMkGuWvARwz1Z1knAKNP8WxcQCFEtBsEsq",
  "key6": "3Mur4LgmUJQ6Dect84rcgz2VVTBm18gdAZNJjYy5oT4qEghCidXheFNNygzHjXps2DhaTs7AfdUPQA4vZsxQBf4A",
  "key7": "3wJA9SPCnvtcdy8Db8AhsUqVuSkSTs5q2Zyrot11pwWcjzw9FNfTMvqgVJEzfjgtxHE7SfxNZEcpAt1NyuR5PZU2",
  "key8": "31H8jBsNAPdafvLGN2hMgQWzjFAr49v1T6uLuti4HqDGykY1kePAZdWSFCUsLsRySbvKsj6PD5hz6EtdazJZX6fj",
  "key9": "5xUNatxGQzxMBwj6duzVzBwionrFzPLHXhy3m7dRnNi6ZFgVt8idpc2VXfaoiztVXmG8TjCFtPjmcSKCkdSqqhVZ",
  "key10": "4kMtH9eNEZRj8UTWZ2FfA2LXWF3vyiA8fhNB1NjxhijuCzxYMxzNSs4m54sSBddJHzhmErj5xFTT9pKbi1nrbsSC",
  "key11": "2ae1zTsUt77sDbb2W3KZG5VEehNH2HNbpXgW16ekxPw33s8mYgV9z9Z3FbwekJRakhwZvTawo9EnVZXtg95YStNV",
  "key12": "dCxU6JYQjLvkVA9avaB6rQdRtuoJYegF7RF3N9xza9PScVkNhLN24B6iRHMWGBQKcaW9oczKKxps2oFBA5VMxwQ",
  "key13": "5BuYh6RxzuccY1EJYy2HiXqd9H3exKGJiGASjdZSxGB31YXZpPVFubzH6LiUkXBNFdz6MCwyXfcys3m4pBupEBTy",
  "key14": "2ZCccrrkxK6hQBfHfAxDPDpekf3y3sgB2eqF92CdcXwhTG2RgWYn9EEoAuT9KnTeE7kx1BY9eCMPXSGfQSncsQNy",
  "key15": "NrFRW3ca6PPZVdBqUNjRk2PYNQ5BfA2Afen3vnNXu3Baemi8WeEJQnGdCoB5nLZtHdm3aqw42fjaQ1zZ7w5Lu58",
  "key16": "37tJTrB91b292RpfEkHR44op3ZTnL1EnYpNaEvhs38cSr7GNQVpahPcSySKt5R3xqXUxrsuNAZy8CzAqJhZN2LvV",
  "key17": "5pHfG9LF4vZCryBFDBbKAKVruBj6duRXRrXoPHmWB3ApQ3GzPKG4awPsokfX1XdiUbGykp7h573XgSubERpHQSs",
  "key18": "s2mWxpVqBRNwUDf6gkjS3hrp3iX3WQoLZqTvfTYEicUtViVHcrsEh2195M5bE8L1vJhEBfrxyQY8Y19TWyM1gfk",
  "key19": "3YaxiVuSXeRQAtm65SJt8mMi7oxj39eCC9Y6PXbjYL7d8w2D6hyXECJZTMqsgN33RTkca5KRYW4U42iQ4oc3JBCt",
  "key20": "541rUd27nYKafgMp3stG3h5BT8dhYriHnAXdvn2eSmdxNuRyb32d1CDeCU38uNWdFGKdMBbzoZtRoKtkvUqQ3eFX",
  "key21": "3Guty9eZTuhoYUHZQKQAF921R8BKPpYh9CPXBsWgFCPvGDZLrfkHu1ZXKkWCwp4pBYXY4K18r6TjRNvdJV9eJHC6",
  "key22": "5ahLauoKxoRpqdSFrDuEmcEQ6FzikdxBYUnaXpmKPZMGjWMX7wJJB7ckgTrmqcvTv9y5sM4PzEU4DtpcchMvub3s",
  "key23": "58e6foB3fznFz6oEhvtH5jf57STXsvuhyMPqtnTPjrEMei7QDMhbNsnwv1wfZ8Zp27fAUMUW4wK39ofHAi4sajEM",
  "key24": "5ytqkHpqPnBVoopZEqwcBXZPDigJGkd6DRA5jCL4z8XEjN2CDvZ4kY54qJoYRqgzuBf1gbC65DPj46bBJSHYLKZ4",
  "key25": "3NpoqDVHKa4JUNhAtyogtposeTUnicajcZN72bvFJ34TthcHZkHj8U1ttSsqe6hLxYGDqWGREWwrHcr8GSXq2Kin",
  "key26": "125V4QyfeFLer3roP3YokvXebkLqjySeRRLC2Eg2FJkFjwQH7tk15uwrAtPTuqUjpBRSRdSuRsimtvcAtTs6QVK2",
  "key27": "2Ytw5hz5TcXbKBLtS3Jf9XseVS5oQ4z7eEXecpvv7bhmmm2Qwr13TCi85BufhAmUaqezdEx4xBtWpq5xA3p1WbeW",
  "key28": "cMDskbeUb468eNxu2eXhDPsVquDixUgxs2kfp5YTs8Fs9PKNW87yVZFWzdjXiECBgLDmUMKjmAu1bgKxnHNY81r",
  "key29": "2PXfo99oSNNvdExTAb6GkaToj43ZL7JXFkLBLy2RfAt2TBV66VPFFuzyRh7unb5tGH6dyJFHok2BVGQezjM4br5e",
  "key30": "66GbuNNWiWWnfXiyb7yKP8UrBs3Pfe49Z4i8yFkcRTEts4tVZZVoofpEGFjcq46DszELCxWnNsHriGLECzGEZaV5",
  "key31": "7aNP8GRKQDcw9UhuqgUeejb25c9rWHxY8fubibsZi6sQhykXbM9gHFL4aAPrUAbU6mjA96QL8jY7ZUbdukhmdz9",
  "key32": "3oQuQsf9bmoP1QEpk9AQmHUH37WqD7qc4uhyyn7Gpxsu9ef5Y6DRhvL9RnkKu9x6YkiNTZWz1Hv1HH1SG5Rd9McK",
  "key33": "4dT3e5trGyjgkZYVQe4kDNRasgNqYCwrYMfczXiAAPSNowj134EkK9TnHaab8ZKAiS9FrEgmkhChgdny1vwEj7AJ",
  "key34": "4SGRCJGUjPfZjnzomiTNzdR7odf7aVnjjCbbzRGecixxa9wQW3VG9CA5tTbvenqn8Awt2m8Q6WPKp528iunoexa4",
  "key35": "57yhN3WKJd4ebxLSkGafPTsVJ4JKStDHNPJjNuqzKSVETvaEGL5vER7P25KzcJ8hWShMKpQuQcdTayVi4nn3Wo9Y",
  "key36": "3MAVbJtrkahoihnsEyL7K6K45JXHpGZvJhx2BfdLJWAW98xKAfvuq5LQeCa4qRDfPeKGnRK1WqvGZKuCEvWTMdVe",
  "key37": "2vwe24AdJ3bAdU68a4tyj7bJuFHJQtHrE2cVFWF4G9MczJUgrZ9ZXcyhBcGKpATrXETAJNjn3syv5t4yutYNwJCG",
  "key38": "Xctj46Rk7bYYMqeGXiqx199vdPcbnfLY14WbGCPADuCt9qhfGqgqvNCiWKwKKsiKrfNxvHuAkAaDx8YyYG9mvdu",
  "key39": "jF5EcWebyUK4Lg4RVPhwrGhTZQYSe4g17SdSAzud4zqv2wiQhJw28JBQ1Z2S385i3UEtymGiGZmsYjoFRm2xZuZ",
  "key40": "4gqpU1qMiVC8QH53Xt24NsCoVKWA8Knm7tM8AxSKWWGktjfURMwwgzACfPFoPYZL5QD5yM6J95wspcDKdqn6abbr",
  "key41": "fuhPMcsp3cCzByUnhLdHzz9L5BsJm7oyS2nDvcwkZbTP2khs7Rf2kVgAF83BW4dNiX5adqMwsqe6b77eXt7oddT",
  "key42": "4bBJ8DeiuCjYXdFA84WtNUjk9wi9DW6ks8oJUbWMEUeb8BPQTpWHmaPUdPUPkp2Na57UdZkibydf6ZqRRgwDS96E",
  "key43": "2p2SXrMfg4S8stvLYRtZd7Ww2wzgE9DLoWeAnrJKwsHoc2Wbpy1K41awmdcD3yw8TPveftSd2KpUcgqAk7utnmsa",
  "key44": "2H1FeUYtu2FbC1Yx2ACXFaMdUuQxaWgs4D7vJrKK5SkVseQeNaFB29oKmWNZ3mnoN7EKwbN5DpiauTWJnYvCuECw",
  "key45": "3Vfqw8FSC17E5FgBvBrTKcwwfAq1CbPuhD5oaNNKW4VuQu7z8ZsYbb5raBDyXXcGqaoPqbQw19mjCDkoXV5Vm3c2",
  "key46": "4mPAQUTHjnMM4pXErmxwVcs2kVX7uKKPHB5ZUFqMXFavf3SZiqpLTchS2FBk1tEgj8rHymkafegEBPXmpeucNVCq",
  "key47": "4u2adZChsC7v5Z5Yqh7sCyWXu8KsvDeoc4H1NoEeUssicHrQFk7MG9ykXeHDMcM5sEG2vXmK39uMpvz2ChUs2ucU"
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
