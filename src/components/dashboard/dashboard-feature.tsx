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
    "4h8MzAkk6knQ2eRoFgkysHQp4kk4pwgfLbK5XR9sGEvXHEnVSKJFQj4RLMXWQmiueUzxPsNsqkjQmyM4QpBt9xoF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QC8JkNgt8j7BU7bRoasNaok7udfsysb5rhyR63DbNRy2nZziJutHwCDPrPmPds9TdebRfHXftq34UtSeookt767",
  "key1": "3gxLbKAcibnKLrtrP6NUyRpLXfHa3AQd76DSXvhBWFDeFVg4zH2JMAiX3dg1vn2N2GcruqhJwBxMB3U4cpXoJJh3",
  "key2": "3nNf3LCa8kemQ13TvJ2TuMjfPGp783N6icXs9WbZ91cGbTNoQcJJHAzFEyRXrZFnDd6MMhjTnsDQfLoSRRPtfqE6",
  "key3": "4Np18JHGQw95dzxmnaEJQZh1TaBP4cScCWXZZ8R7dqUtiPVcPL5oxWN4cLKVcgkt6LYZjk5oX8rtDao3fFPJUM9f",
  "key4": "5odgo1u5RV5TBXpN9LhdbvqqNeKtF3ozdJeH5P23o9QFytgQiSQL6gioNrUKhRgoF7qgMznmcLymCwivtAUUpcB7",
  "key5": "2gwVm228r7ZgbY71aVMrEWbPAZvmcH2py2FYNXZ4XjKxDC994pH8an33jcG1hU5AsxjYxJrSK2D9iE8vg94kSRxV",
  "key6": "4btrvWdTjYDeMGyJ8dWnTTVQ3oJ6vKbQxgqEVTj75CvTUTFL6ACA4QyRi4ZStVz72rZmqEDaUpWG5payQJwtidx",
  "key7": "Jg2rpm2j1RVPaY49jdp2STrZ8YMFXK8K4UaoBjGYgUyoYBet55bx9PwXGY2L6Spt7sssn5qoQ3HcfdyWWEQSkvV",
  "key8": "578XesDrkTYHrRkNfB5Lx6vTJhFMc9u7SEGNfWbzP3uM7oBUEYP2vsqD4A9mmY1FbgV8ciKTWawJJKTDLUR1sb27",
  "key9": "2E5P7qph4iWd278qX5zWzC54mCPwR3QJ6ai5KSjJSfjAcN73caHnkDfNB8MPMuzH72GmT2wTpxDWVgreyzCiPbhg",
  "key10": "tVoUb7XrhmTKMxLdC234dV4wDkxXrz8vdhfHYh2zV3HaYGsxPvEKJWh7pqgpwXFix59btkPFjpqZfkZYN3DzLmp",
  "key11": "2TZVbF5EeB22FxtkagLgpaLVnYFuLZKFVUsCoN9cGMc3d15bkwnSsv6sC7FgzYnn34qJdKFHY7vbfnhKzESqyNfV",
  "key12": "5CHaa1DoUsQNE5L1qxT6f7Aon3LWFCFXqEdT1kRECzcibgeyswtqk3YjbxV5oHc49a8jVpLcUQVxrJSv8GHbpBFi",
  "key13": "4ECkVKJ3icTTbLqkNe8XMZkMBYwQdTCdY4Fp99Qwi8ZkW9WcaMFtfJBWxC3puL3ekostMBCET5DGFuFRMjWL7V7n",
  "key14": "2p6sybDixYA6NB2tvu7zHW1aDqG68DgdSFaFpVtcVvautCV6xasFh5SwQjYb21S9eSDu2QauSX4yKx9THumfAHNA",
  "key15": "51cUeQj2krR8Hj45pADZQPKtSXbF38HkKQDFiMYtzspN1ExYnkkVTsmGX6YmmJUQwnovpTcXW7RS2ojHdY9oApSe",
  "key16": "2AVYDdVCJELALCGwbWSdbaHgC7Fs5vBSWmLs62eovZA34Fe6JyXNKUbQxo7njns2PA8x8d58NdzxFmDWSw8qgdKa",
  "key17": "339anHBkkGr9WErWQi4ZWyaRfXdGMzspj27VLhdodqxjNdjFh2neBqgrddi6skTA3nZEyfuM6enTCzG2L58gAesX",
  "key18": "4yDdXriwU2mffCJqSAz1tFRC4iW8bEKbfdVoTZJsdyNMYsTbX2ftjDqT8WkzooU5LFo27w7a734oJ6WnCaf9UnDY",
  "key19": "55jtKFpfiBD9DwnJrFU1HgGFzSkyxSGaAreja9fW5utDpqwDZiHsBPg3Ucpw6Mgz4Jv4UPXBG5nd7Ccq6qyTrgFu",
  "key20": "4rzkKUAmCTfmnApLE6FCMHB569VhP8L8jEQGYjrTWN63xooxN8U41aLHHAhsH5XwTkEQFewvmuksdBGeJKt3NCMs",
  "key21": "24CcxEzJx63skMgX732fJZ7nsfrVECtfHx5BEqHfqdRorEENwJb6N4eM8gC2P8VzscvaJbKNDdEJV9DzkXfj2DnH",
  "key22": "4HZLfeh6CvogGeQMwJvayR2DLbW5gmugCxKPyzUghFYgHxwVfCUK8vVierJWyNU8oWrWggv95DkrRwuPrdxAFqrA",
  "key23": "2PzNUYB6dwfeBwKvPuAcGV5ZpWzFiePz8vcdGj4oBwbN1Yr5QWLznD3z4wdYAECHZfM6hDN4gzX4L7S9voc9jwmC",
  "key24": "22WLChqXGtmR5kEhXjZdeFdP6HrMimH31Lzt93e317BUtRStd6BryMSUUcC3h4GzqeG5h9YdG4VMYvpQm3NgMfjZ",
  "key25": "4brj261vhg7SJN8ikUiRGB2y5K1AGpTZ3ZKyy89kMi1nZDZMNaVpVkzTk8QFTVwkHBrfZCf7GWzwE4X6qPyHUwbu",
  "key26": "45doNKMzoALqapefZkqpAjs8uU1wAgpshFW1Dt7YvAypWMZPFPfH8JFcSUSUH18g7m96omU1cyderu1MXvGZWjcq",
  "key27": "5rDSQh1sWECQcV6QBWavC8axmWWaN1GbhHFRgJosEUvgkA122MfMH4xik1zyDyHuBGoZxq6eQkfNJviG8uEN8Sgd",
  "key28": "5dDWPuNgoFmpdvCwp13YqqwqVXSCuk2PdE6g98HzpvZsJzW3vaNP323Cwn5i1RHfXmNB6DnyoG7LHFJFR1g4vTVY",
  "key29": "3vVqjeZt1MbzpRwPu8dgnZcMnqzX4xVkTSiLUhqWD2E9HXuJp4ScsDsps8yejiSzKiZMDwTmfPFseKdMshmduxiG",
  "key30": "3DFHkHa8dnuUYvS1Qb3dTiKLLGTwYtrb1e2bp38xnbnz9EabuLUqH1rCHS3Sd76oZxUkwynEtj43LHUTdGCux93u",
  "key31": "2AawjcevRKXccP3E22zVvmGZQvxNqQHGp4PsycVH1RwFsANpz5v3A3cg6FUzpNXcovAjnrR1HWXtzAPSzZLnmZPe",
  "key32": "4Yz6DJ2SJQV79pgKju2b62f2iqJg1QC7qn57SAKPQdh1DNteUUps92DM1RQagH3EHxvnjyzTjPdpDuAwxDqx1XvQ",
  "key33": "5RDeStv1CxmxpYfupTzFvED8k12YUhgkPhf1ARf5bfZWgSD9CQqwYDppKMfh9MPpAbx39PNTrAwwYbCUztfnDfhK",
  "key34": "29DSDecNQL11sSB4Gd1D989RjCjm1hbjwWEiCPbfB1d1qUG2ZVFxtxDYXrX5MVVjjpqjuLd6vjvbpgFPvQF7HrMw",
  "key35": "jmjuYvvkbZwPG2SE4MSiF5r5XpNmHDrdbsLxkAEKjydwYEfSGdpN3MtjF1V9M7PEACqg7B68czxyRfVMA9iYoxy",
  "key36": "3y1gWNsvuVwEJPDjwme2Y5pt2LuyeDhckMRn2hhEbtLFh5QSzhXevSx27yjYpFhZnNqD9ckRbQVzee6p6ubzADVe",
  "key37": "2FHM72qkzURXxTosoacRwThRjaN42BcU6ErsghVmRxuuwZcds2M8QyLp3KLymtxVy98wsX9r8MHzfu77pvVtzeYe",
  "key38": "2uJfm9yv1xhGAxrKp2CLuz6yWoP2GeTmHFspGw7ggTKMppdJdfGtEfxY3Wstf8VRNHc6cgNggyaKhr2Y1htnYF69",
  "key39": "3UpM5yn4BYmXQrujtHfxJxqi6zyc2DMKXRYsuDD3DZBxeB4BXubWJZxsE7MY7CvD1vpFDQ7McMKnHD53YhzVgmtT",
  "key40": "HXrGvdqUKm4YB5iNSofE5VyDqRW9NSPXtoQ5YK1gPobstfNfW9cw7rYm8XxZ1f5eaPGbzn33FP8ryJhXHLeVoo6",
  "key41": "5wUFEnWCMGGSLvJe4HsxxrE8hqCGG5gWxmacfwPUDQozsaLTqKqhVa6Fdr8RwJrVhEFe3fjWx4jti6HqZUrqhEMk",
  "key42": "4KQDawSHxfn8nhbjVU1PUKbPDbeH1CxWRsubrZ45mavCumUzhRq4Agx4FyQ82sQMKVkbNDceJ1GmYUUUWnyFohPR",
  "key43": "2gcH9k3gEVm6xdDJghrgcUGUNCUoWDnEenuamDTFvQvVdQwgSSQ5sZrfrdLJsx4J6H8WUPdpTj3u2SSoB6tQfvLY",
  "key44": "fyiFxsX6nMoshJTCB6AqED6oPm2Nz943qFcMc6ERu8Pp44FE7gKJfkvRxNdB1q27DdGX2EUD6wMhtRdHES6tD82",
  "key45": "2sZmfTeoZXbPGsKaCJM3VDGYsh3MWozFkUGKDibSpz4oW29V5zPrZUWNF3iKWDYKwxHLspiceMhLVvwEtpog4RWW",
  "key46": "e3X5XYD3szsvuAv3Hdpa2PqzETBkiHRZnkHu4G1h3JKgU2CcA9pqPiPTHiL6K3Y99ym3oMnAr2qEuLjnbUX4wNC",
  "key47": "5TfErdrtKJcta74xx3zm3zFkN4zdmt6yZ8EEtbVfaqodCPS2YtURLH4x7aZiUwuMPgoPqg9dQjJnA2iMBfHCzHTC",
  "key48": "FzL3fuJR8ctoBkjSNinWRvr2Q3n4AHmG67HGFTcHJ7US3rEv4P5cXrn4xjjfYeWD7mDCWJTVfVQx7mUXKinjy6K",
  "key49": "VdjrJTWwgshKctenFxWUugw8cMWA4hrymF3t7jd3SsRn3RzbrcnJiZgDtQH4Q9kpkUg1oTbRi4viTWq8FtgeAWA"
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
