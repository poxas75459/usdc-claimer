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
    "4K5XWgB3oahpv1AMv7uAQoQCHaKTEAj9thsfX7m26Sr8eNiCLjrUZ7UPMTueHcRbV6Dr4DqHy6eVV3WEf3HGZvyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VyPwFCLARzSMJacgYw7MELokv1rkJgWyuRuVHup6MqeB5wdKU83QhutY9bHMxFZ28H9T6PTMPVEaVtEhTgJKMMn",
  "key1": "3pCW1xTJFPq2ojzSDAh43bQZZZBAQbWD2Dgz8QeEsewBPtbuH4ZwYFaVRbrnMaVuwNSFcRcAxKsLc8czKA633Qq",
  "key2": "4GmeEkSeNnKJCeF5FEcbAFaT9juqwUNngZR6EzHNGoSqWkhv2gijiLbVa2u2tAkn1UcgepJxAf9WU1x9Aqyhj9wq",
  "key3": "3ogVqZ1JnaXWFf2jTXwpDZ3Va29vZ6VS4yMALwHsXm8A7dWgZUoovWonffY99v9jABvc5SdtSedqHHy4LNrzTVDy",
  "key4": "oiXok53udk6dVdUTRMhwFgbMHpPjzkkxGynvsATHQgrzrNdxhzVybLjxraJGaS8Nqudmy1cUHnLysGvS3fZpVyW",
  "key5": "4t5nf13aGhcnbwdQd9Nba8G35bg1bCBcSJjiDuGRGn8erGshm84jWiNxeGCGye3CuYUvr4na4aJ2yPq6kBqhAd4H",
  "key6": "5MSA63k1ko6j2EccM9aw546b1HbsdieAeSFPrL1EJw4XQY5f9bNDRZKyUyR8pjMJdmYvYPc1He54Xd55gBFZABS4",
  "key7": "3UBynjfkAY3ErncbtUqH3Su11z9SEqeXJ65ZaSwtGTLegyHvxphATbcer6Kb5cp61mtZu8sfsPc4FNUC14JuiYBw",
  "key8": "5D1imEJpzHSQ2YiV55i2udjdCvnmyMV1CSuuE8chkNHfX4G5caAjsZCtgN6gFZc6VivWp2BWwqf3Aj476aC1gBzr",
  "key9": "bCz2Ywp3fZ9icY4NCDfdmikMeZ5HU1UmSykfgJK4aFguyWW7vWzhgruA41SaPzbwenJ3EQrNYBvTWXmxfybobfJ",
  "key10": "2tWStPAoAjdsGuF7t8JCfHf8tTrQXRvD4fGYcxCJh8i6SpJgn6tZTBoJzbHAn3Fx2xFNfgCPe9gxJm9SLN26c9z6",
  "key11": "5SpFbjHB979frfCC8hAz25MGZdTHtHJpQhkXQz5VZSCiAf5Di7QbEpMsWNxvWzyQC3KLHnRPnbpNrdJbxW3zTaY8",
  "key12": "255n3NpEaUNqX1phwFjHhMU5DprnUzR5GX2tYJdGE4wUckzPidpCcrXVHBWxsoWEsLC2eD4G48whGsmN23jn5aCg",
  "key13": "3Us6MUGkhq97VN5sggJFo7XHJTTjoNcTLTt88KBgD4Dvdoi9Z6PSMZpPDMwptW9vtos42M4k6mr63QbhEhFpmro4",
  "key14": "47WUcGWkBQEZDuEAKNh4yW8pDWVP2VsxjxjbFkMhopu3VcPQjtbLtJtJMwcdYodK7WEDt7i4ETTtHSBrrHSQHMcH",
  "key15": "3SsDQmm1KM6iY3dBScRH85NNarAtaucanefTCxd8sKv4uHnpaiRgpSrtXEQqavvVyJ6GjahrxY2x9EiJsyXrKQmN",
  "key16": "5qQvu715bqTCirvAUP8UZR9pLJVhjpfwJxP2LHtGUNupe2f4i3qs21bweBxvdUVX3ywJYyRQo4Nax1wwLAvR9Lru",
  "key17": "2S73XKFV4m9aLv2sbSEpX7yYeVHaPHPg4kpmaJka6bwxFxWyD1dsVbRQ8DykAiyomZrGDQVbc9zdvgibmhV6dKum",
  "key18": "FKUtGqcH6csZUH3CxY4bfFJaXtdtJ7LpVDwSJZKfytU2Tycv3UAEazco1EgeZfUWE3LJ9DR4gMMf6KZLESKP5A9",
  "key19": "546NupNtejGCd3uzHzmGKkEihd8AsGgLuELMBi7sen2btZbMFvg4p7D4oN1o1h2M6RqLZ5jJTBRHH531GL8isfSg",
  "key20": "53PfuzXHjLD9iT51YpoP3F1LBczhSzy36t5X3jv8SQkTc5TsEXGm9gdGbP5eThcYqeHvjvabAjgZHuhpeiwNV4CY",
  "key21": "49TY5BmBkrcrbcYcSgGUnvYffqzUykfM3Hh5nGXefTQm5tvWzbKNtNe5auPfB6oe4GAzp28RVZWkNmFpZSEr3oTD",
  "key22": "2WZbyEhZShvPFTdTijqHqRQbfojGX52pLsan4BKHVDyeDZ4FYDFEkHM4wPgxgcMNwDTx44jraCydP7L2qXSQ3Y9M",
  "key23": "MVQtecTn6npSAjEUusJ4fAegyk4ogkdXvotttjoru3U5eMFt4vJgoCvmMYghrVEhWQedgKY5mooorpfUXuvHZs2",
  "key24": "3c9rhS7aLui9TqA7Lpo2KC3DwFa9yCWedhFwu8hs6vL8jn226JCTB8HqQTW4dCJL8phd9BY6Q3UDqXEqCWL392fp",
  "key25": "4H2Ho5VUQ48KDUXjUZEatSHSReXqSuE2eUrpT7mXEa8SKjhhdbHZXimSWj3cX2JpKYVa7sFjVprpz3pcZprvvGLX",
  "key26": "4MayDfMKyVDHQPd63NYBWNLiqjj6StKz4csGyziJKt4oFDpKVZJfoofeSpr5RhAW8htkjSAmpvAqC1nxdcpqZ5Sq",
  "key27": "MJVnmRWAYzED4sE2YLmrTRBkZPgpqfpPfhTCaChDh1xetacYxvA6VSXCBoyFCzYpJEAQTEXFyRQr7GCQS2rTxpa",
  "key28": "5tCRfTCmhvJyzGWjgYXXpwCdubtwm81QtrEN1XFjZV6d5bKbzHCHix9LR2c7MsxjfxfPLsNBJuvEqd3e6BirqTSK",
  "key29": "3S9hsFpoayAw8dMKw279m3gD874pExn3MukDZo2ptfaDcbeL3Kwug8mqWSRwQHEb1aoauxRJZysCxbLHBXH9ZKfP",
  "key30": "DSXvV32an2xhK2mzaoFHrnNH64bLSp9rmXzUtjdS6x8aVHRiaxvr9UyJj33yoQ7zJNujTnue1fLZkJVEVGzPgZZ",
  "key31": "2bjM9JoywKcrxQ8tBNuiWxfGR4JGgoFkaN1E3w6aL8Um35RSYEY9KaDDpPDVJKvRSVCk8w8JaMRcUWgcEPnxm74H",
  "key32": "3Gx8XBo9RF6KuegWooTwy7eBpxG2214sVhLes2i3QQkwnz5qigVYJhVoYvvqmxBBsoY2iK8RuBU9rp3CMW2BdS3g",
  "key33": "4DPMKpEvJMNzr6YahxwNGMxnYvZdh2Gr1edjfvSRGDctjaiDHFWzbWAKMMtWHsRAfqBX9Hx9XjNTgjW7JbGcM1EE",
  "key34": "5r2Pg1WM2218veUUmQNh31KfvfgQrFdeT2xeXzrRA4fTZ7tzDWrx1VMJ6s2NJBUfN2Kpj3JmHmCuJrfNHjesm8zZ",
  "key35": "4Ek95bUkzFsvJ4RPboSBQVGVJ1roLP5wpsmyGZgzti1qkxCsPK5rbj45jztUUqnFDNWouU4DQpsxJY9e9aU2ovWa",
  "key36": "kwoqv7bJYMzSr1YNnRDDQqWsKjCLG6ngFoGZmP1F2VyyKM8FPoUsJvz1HW8XTFy7DVVfL7fkyvN9kyjwmtpX4BD",
  "key37": "51dK71vcQF92QFXUz3pRfrtYH5qqSs5svW4H33ioBigkpLYj1jBsR8L54wQSqey3nZDgqHoyjh9144xW32NwpmyJ",
  "key38": "5nP9nEmRrkmfBWCuqyL4g93NiXoLpTidvCrcNfgm2FVwvi7v8rZhyRzbJu2Qcz76r2yNWdQ8ecLYwvgbrF1fFQa4",
  "key39": "4YENQFRy9z3Wi1yNpXLrbkUzuLjNpXXnEpsr4SsHmXgbYcMWaegAm8At292g3eBzSPTyMRFarDSwrMQL2HpM9gpd",
  "key40": "v9a3Z6cSc1s3y5V7MJ7pj5q3hDbp8EhUjYREF2KrrWUcczTT17fu23kqkXcY2zpbqZaE49hsANWcmC523hqdsZb",
  "key41": "3vFG1pYaoQoK5W1mc2ZHo1DHwzrC2MSKJNccXEfwi8CuRzJjb77NnKhVBFuiqnJ7G7hLGiDrvYcru6xubRCRyXS5",
  "key42": "4Cok1jLCaK1Rx1DY8sGW1UQXP3q2fadQd4fQtkEuTtyZuKSamtAzMFGdcH9xSUKDV1mE7nm9bts9wzc7NCDJUizG"
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
