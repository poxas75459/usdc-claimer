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
    "2bMwa1QjiJ2nx55T3vxGFhciBr7pk1arJDFiL2nYCSrPD7tcdRPjXa542NFb1SrXfqXo1CRiw4u4d5fpHrsSP58j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eerKDKvqoqnqvfU8FFKgn7ZuYVRDbpJKptdYCagT12Mq6aQLCaDu7G547YGiDDfZrnm4Vcrad8n58p4ncqePS4A",
  "key1": "3QJbaaTWJTCBw9BGUDVPsPFtwRX6KpW6wUvVC5Z76ksBoBaz1FnRgzSSBsEjcVPj3Zf1Rbj3tHrJjskrUfbgBsg5",
  "key2": "4DVaoSCxtVhLFjGMpvzt13KdhJLeTVAXhxM6fqTmS54N3TUHfxRg18Ed8ZL8H3mGRBkGJz69naCUYTMJ662pu43y",
  "key3": "PkwpE6cCsfLfAegnhitRPtDN9N1ZBUdqdVnmLHF6WMnrapA6FPLmoR6afxd8E3TvGergn6sSTSU7KJ3y79wJbF7",
  "key4": "31bU153qg7q76shKiLNHwtVWL53rRT5AYFmeyEMAT7gKXqcm1N3FCkKbvuGT7pXViWbBPFr1aviS2aWcorT6WtdG",
  "key5": "25pgpJxKWEYrTZq2tpRgmJtTgXtnCeuthYzWNNpGMM6iXTMUKLufgwg1jAeqcHgzm1Ha1L8kJH2Q7f97SsP68UFP",
  "key6": "3WZ65t2LvDMHbrxPcKKkNDpTRMbLtdmTeZzD9uH2zXm68rjexKqN22iuwC6aoQp1hYzNMHmY51QrnPj6dSSngGxN",
  "key7": "4dCF5cCY58rRR8dNR5kLKZzhr8j8arviX17TZwxCFGHBwqTMhAp2nbLnufNmpV8h9mgYYdzxuM9UE76fyq8yKeJF",
  "key8": "4mLCRpkqpu6mWDnnG8pvdaKd2C3rtgzTLS7J9HfutLbXd3ZenXJmPHZXwuXcYEXkLQPDjUwDct31hJmE7ua2n3cm",
  "key9": "W5vmtcYdFpB9GhazdcLT9mKWc6Gg39aMMruMtMyMXdqiA9dzEkvDd7iAMtPqHQVZvLYkJ6z1cESeW9uefkPdebL",
  "key10": "4L4Hzix8jSm9hgieNV8dr5Z7byVgUyMABLHTfp56ZgXebKrE2hJGeTECbtvnfK9uerM3SFWmj48vvjySRU1uu38k",
  "key11": "uxqT24isHjCVfhnKWdAnDxVK21ZE9cqkWZV6Xd4Gwg8h5HqQ2iAgAt1fTYcxQUPJyYoeqktv9ACnFoPim8Ebz9m",
  "key12": "Jddfk9vKNLwqoWBtrt1nsrZGpfGD91yvVzEUDJdM69d4u5uSMeErFa4ADjB75SAv3uVc5H1vWwo3XvEtbfwTErr",
  "key13": "xxjin2P6PsGiWHKuwvvYC3p4fxDgspz2Pz3tEqoTpeNZzJmjw1STixoNRXM7qMVZVrrQPHD6RV7AExJdE4qiGwZ",
  "key14": "5Qn3Hx5CSdjcuE3gsheiB7KycrLCNFuonHCS7Wqeqxxs69mnRhRSBUN1RAPkUb9et6X254zoeDxpQ62gQ15CBrQ3",
  "key15": "5oUC2LdNy2b7k3LYQcNVmb6U8seyTjFyKhT23fzW7eZrY85rghRnVm2W3EJTViUVJ599AXmfe8pjhEDbYbrmkqEU",
  "key16": "3vvDiHBdqmLdbCJwXQEweKYLypc8hrwBxP8cgXLPQZEwJTPW6EXXm6jkkun6c2vpavJT8KgJv4JqNwvzmmLyCoPH",
  "key17": "4c5T7eaJqXFEhkP72tWDrVBL2XbGDENndpiJtd7Vu2o7TvcSsVzaDM1xGaQ2diX1WTAuAvWXEoyd67z1Kty5FhBJ",
  "key18": "5zEoY219d2J315WL5HuaCRDECYYPxGQ5sqW8VFbPXP9Q73P4spfLxZ4ABDjXbuoQ4WZJxL5CbxvSaVeNsSvYxRZz",
  "key19": "567Rmmw7hfTVufDyjjUuaR6dQHQ6KkhfQyc8CG2CmyCbyHVRfjzAKgHaUQRQpAz9Ve49kcpfAsfadZ4jrZQ5iPFF",
  "key20": "4Qe4C1T45nYgi2BwAoi3AJw5CgnLnyKQyYbqk76VBk3zikrHTgLtW3aUGxrKvQXeBMxVrDNi9WEp2T9LzdH5JYFD",
  "key21": "3L7ugCT2sh8gU756wmC6D9HXMveVHiKPKeYDUWQW9DJzNXurrqdHYsCuuaQ3EpQSPQ86JGQgZjobAED44uGGaCSx",
  "key22": "4kQoti4eXgrWLwwHqEWpyUtF5yKtQDYvd5PLrms7sFx3efteSsNJBQSFZLxUtstgYJ5S7phU32dPEk3u3ZrYHgfk",
  "key23": "kFvheoFFCpMHm6oFtYTHY6yFMXkz3KanjcAZr3xnpYni6o5P7ZUZMmmLuVg7simSQAdG3w5TxhHdRDejAjELeZr",
  "key24": "3SrpsaC2tHRjtEh8HeY9tND1h3k3gMqkFSZ3xrxkyMagnKAU4mCsQ57v8U8Gs2DcqeUzejs8LkjXaXX7YnArpEdG",
  "key25": "2BVGF4F2zgvSNNPdG5APNqaknxhvKWTvAdR4Lpr3JKcRwkYLGgbnpeLGvrhT8r8xBwKjQWQnvU3m3pNXmhQtwFws",
  "key26": "5vDEHiGSMVoPHAwt6soQ2HuPnLvxzT482nymERLphNGL719gYcoHf714F69cgVggLagMk9EU1WVLDaMsAujQtRz7",
  "key27": "4eDhk8GjDYHKuNHenH9EzNfsfyuseycwbiSp8XsE6DXXjmrCwZXNEEYMLM2AbZMXRjHUJB9wNhcZ6nGJCvGLxQQG",
  "key28": "5VuV3bkwLWfYNZtfUY1o2sFM1RUzLQmetHsSWTEK2JEMTc3akz3xUwRBTjGc9avGySTjia2NatcCKf7zckrkqehg",
  "key29": "26h5tX1ZTK84N9dapnT31pFz9mbaG7gmpovQMSM34d9nJ6hBVP5j24uutUX12WBQ8oeio5BLwuhYochEW9awrkbj",
  "key30": "5tvppwCPWfgq8p52kSUSL9iCGyxSo342Fn6q3NbA13r7pk7L5GWp3bG1mv28Qt8myL9ZV9hpqH1t6xA1x5QNiLeR",
  "key31": "3WB4PMoi1W4nCBVN6SQjTQV7a8ksPP3E3nhsmm7b4sAVj7WJv1hhemmRVfLaGgV69eFXj2QwgLD17nh1bTM293dH",
  "key32": "3SaeNzKrS9baFkbFTwxfmhz2GAccKAt9kFwBZNnL993L8KcjGjSCiJoXKWZvjiuAbAwxZnQZWrkyvyPybMKC14uR",
  "key33": "3EKnhxtxofuXBNcNeB5sXJSkPnVjXc15am9PuT6uGTkcWwgkrMakcPyxH3K74zNRMjA3ycF6M2LeKNJPsUJ68h3z",
  "key34": "21f9B9KxcTzN3k6oLuSFJ5r4HTK6e7JFrkxFj5uChrB6vyvBLGTBGEgmygvStmWv4JWnw6enqNfPN9zuLwPkNfjU",
  "key35": "2ez6in7fs6K4WDimNd5eowy6oiYPtWqBERHYJNaGn5ewJUgohhg8jXn1HQJFqLDv99XJURTGVJRnqxWJXbbNe6NK",
  "key36": "4znoNGXbhSgXtmsiGLXFzjgUatptZTLKbB2SQsuPnT3akC6eu2waVartonGSMCJJi7C4DimfWu8dsFSU5xXEtDYD",
  "key37": "GnNBiG5mGKmBuo7zc7cu3NPg84FhwEroMBQkGWLPscLJ2LjMqiVb9TXGzd1zuicB8FvaQ73LmCW6XgEnWYHGezn",
  "key38": "4ACgS6zawLkGuZujX3DBgU3XYYKRiBjSL8EbkAPhQ2KeBzC1VvVrwD46e6GkDFDVJH5kL3kA8zvTRyGyUjPDs5xH",
  "key39": "5cpQFyy6ALC5FdfuYudkBsQiDuZ98Jyhq6h3bxMYHfDXgTkReEGmpaFdUgw7nU7mxi1Fj4H3vRs5B8LU5QJYD9Fi",
  "key40": "mmrnfjmuSdWMQbXjq91FduShz8MpVpDZdagB4mJHNwnYM8PqPp8wSwcxMfjtgrouXEvhNwvcupvRgWKtUF7r4YH",
  "key41": "5HcGMqHonz3UbDfhbUm9Rk6SE464mzTh6gbRinKFNr5kLT8QRiNdh6FLhdYEC3a11Xxiv5PptYYGjoNDur2rVc71",
  "key42": "4JpEjxf5RrD7v9EfgNyiPsyd51NLTjf3FiUpwxgiWdMHBYHtSsHqPidSGfcTqTRN1mfeSUzLETuTknxkVhcoLLtH",
  "key43": "5sfruB2TUGuV93VofMMri5QrR6pSs6LCLfcCzkUCfNaa4GjBCceSk2iUDiz5yD7sLFUVBqYa5m7UTDCum1LTJw25",
  "key44": "2YCbw2eaB4fAmx7WPBd8BiaXwRPEShryCFMtxk39pXnKWcf5QekJ5ZSjK6hPNeEscoeLj8bMCq8F9TFAr44eydZ4",
  "key45": "2DwD4za2GrDe135BduLAz1yS5ohscwMfyuk5JaiwDbKAxY1egEMeUKy83Vc9FgW2VykmUYaQMmYGmDG3UUSpd3BK",
  "key46": "5LdQzVjCT36fCCtUHZ5Snrgctz7M1k5ncLqAwyYFpLtQf5xginNRTMAixsYds7dN57HgbnihtrbgpAHP5ydEUkVv"
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
