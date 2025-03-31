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
    "446R8BfksXHrM1SuAWu3ze1tNKnWbvGGDVF6hJSwmuwKNwCPjcPRJa1kuSk7hdfH3LGhmEYRbFFPijGXCktAtyhV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hk8VsLLhUUmyLX9yrf71NXJTX9PmWKe5GGEPA8b8hw6nYNMK3qS4H6MF9zpJNrzv1SiAsVrXxuoDJ5XzmYtPqYW",
  "key1": "5MggUVLbBuwQTGJ8pMjyXQRZJu4Ga3A8ux7FxLFC5fAhx96EddouFgFfg5MFRDAduwmyAVYJ1FTZGrki7MbRb9pi",
  "key2": "2ah7DxJirE79xMd97zzH1MsyqKgHdyKbgh7oT47PP7c2hcjmH1xL8ciVVriANZYansbXUqf39ztDUk5pKZmMYwbT",
  "key3": "5H6zmYyNZw57VvMufSeNkCoWGnpYEGprNknG55iDK8Nx4HtXZ97yFzoonN9QVVYxSqovq2fcCqwgqz4tWtHqgERQ",
  "key4": "2GXnfN1zDskpnsHk8Dt4Xjimauhtu3i3uSoSJbFJonrkFttJfkn65ZVWX7be1yxeEzQX4XVKsR41pZyGFt1z8pbS",
  "key5": "3UPXTKzfTn81MqWT9RQXQGtVeUhruoJwvFas6gfXhEfoySxXCNFhNkyqTpcww5wEc3y3qKddjMr3Fu9kjkbRjhWH",
  "key6": "2V7JmNqMaxRq7C1cNjqMKaaVqvBj7haneKbiQxAoUX77pichbtLT4qPx5q6HaW2KuhRPFsVnn5WEJ85wprjNhGFe",
  "key7": "24vqdmQv5njhFjmUM6xjtBpwXoczsgWHhZY2k2WAMscqWeeaLHa5w6ZrB81iafeKeyg2TctKLiEeFZVkArE5nhsR",
  "key8": "4wr8fVp8owJ7R9ZcDRhhpUT7BGv57nr88RmZhK5ukZnseobcjUvbuoYjYdmLkctyRdf8CSKVfUkzfA3j76Jw7uxj",
  "key9": "3azWG1cNmS4XjQMJF237CsnRgKUGee76nSYoo6rJ73xeQFKXpueAj49dFhDDsJ9e4a7DaThHjMwNkevW58LppRi5",
  "key10": "2v2z9KSco43TSRkeG1Qht2TTpT8JEbHesjQBefMpE5MiYhzDNUFHCv4F9amFciWsEeznAh8BTdr7F52iRRN9Y5hK",
  "key11": "vKDrkMN2qgRtN2UZGhm6JqFWruqAojVcA4LyfLcha38uJDFPKBZe8tMSzu3Sk2JRFJA6HgtVDSTRVHACkwjBubF",
  "key12": "487dF3xE1SFwocepka6sjF4LN1CVETny62iCC1BFrwQS2SLL91W5WJWQ2QvixrZ3dLdayrLAWn1jhssMwTrNrY4a",
  "key13": "3VBeDgC8UABes1V2p4swvvD3as96R4MoeSkZq8475u5FEVKYGFiEhWRzUNhaeTfLoTa7i96mHhu6GUpamjuJtyPH",
  "key14": "5RrLKvijEn6XMgmfnr9MKtHZ6dE5zAMzNyZ7mYCNr29wW2HfuspDjF14UeZZE3mBunJrkwkc7aRch5Ezu2vkMxw8",
  "key15": "2b2e1MQB8sL8UHo5k51vAEjiAz49dkqfUsJfZSYWNbQqsUjyDva3TKnwm2B2u6RTPvqwTxk5x5qu6ogxzmNi4XhF",
  "key16": "5nb6b7dg4ArdR5DUB21sxsn3dLqmmpLyWiqjuAtQyg2dqUr3EbUhUPYFVWuys98Xt4M7ehfF25znJN24DAjYyUpq",
  "key17": "2cf55NMR6gEz1yiq35BDgEYCXButJTmcTC6gpNWnZCM61qC5fxD3SZVKr2xFszh3ETGYTPsV5dBaX7ULKpU1Voc6",
  "key18": "4wA9Dda5WrenLfqx6WK1Js8ts2uaeR8mgSLMA8nTRYSfAHYtsxumtBnCrs4XcbHcwvPnAM3KC7hoQYHaxhAbYXnb",
  "key19": "D4b9QW98H33tZHbVSLcWe96BLC5FdBudn6D4SpAn9TjVuRqKy1LBXW6DnAheoqX6yAaDNmLzLiHxPaGPQnSERz9",
  "key20": "5vabNe8anJnwZd7CgECyn6B3H6tbN8nvryhcMxX6A2pLK8NS1RGYkGvcLaaLZZBH7UWy4g3rv33gaCHHFhy5fMxT",
  "key21": "qR7EtbLAAAV7jKNespEcmBVz4w3viAUfQMboS7ZuU97VvrzHLQ4rbNUQVUsNwTu6ybdr6jVtF9ioJ423pKEZ2po",
  "key22": "4LtJtG7ZzcJsgJo6Crt7H9jzRVzBjD8j9HobCtWn1X8HDyRevPQm2vo5PTCAJ85PRrb7rqX6CgQd2JAy9CPPpTEw",
  "key23": "3QsVezV5yGVQp77rZ7a4NNWLpKudv3CkyGNbwfK6J5uE8jT3o6TqqFarZT2ULdCgtcsKqiB2D4Fq5sJ1bHVHTAsB",
  "key24": "3G9KFYnm872YoHsdW4ut4gz8SoTVCjBg5MAVuKazz8UZ1Y1mBDPSyRNnpgG8xGzmppSDnuBYfJhZwN5JotRgsaEd",
  "key25": "4mVZvAAPKAY63zSXUEPh62BxZzF7dgP9Um8Xcp3dC1M51Hj2eqjeJNKQpoTnRdLhJpWVzGAnW1bDqRgECU4TSjMj",
  "key26": "2KuGn5sM8uJsBKqtBg3hHdbeP4XkqwXF9GWTa4WGdMtZxvVwAmNAbCfb348Acf2QtFsFWjbaVwLfDpr9WnKquoyD",
  "key27": "4bRYcDyi4R8NPaFtcFprbvdiSf1GAsUbGPS1NWMQsRNqmC7sKKFTMfGizEjnrQGj5CVaF7WtBfkzzwukaDougtyK",
  "key28": "2Z2EvHNMgwmQHMTvHz7jku2GQXka7riAjYdPmUkHLaUqJkc7Wn1GAbpW7m3SxGrPqiVR17EF3t868j5Uo9Yb2jTz",
  "key29": "aoNh3jygVSaiaB6ZpE9F6nmap9ba4ExJTd3Amru3GcbipHf1mTmrn2LPfbsqHnq6mt7aTJZzVskoWY4xSrA8bhd",
  "key30": "4SNXyaX3Mco2uHmMpEYDv5EvByXrEPvengnsTtMSv2ZutWvszWHffGKr28ndwRAV6JrmDqziNL1dLt22wX5WBrTE",
  "key31": "4Pjb9Pdbj7s9TJk5GBKSnDYAqoUzd5Pnq1KFmYnZz1FmCgHyuQZKBEneWpqD5fSp5UsLyyWrucpALUNkuS2hEFz",
  "key32": "NVXudBf7wQq9rTVEqMqmrAx2qs3KixRiQEugeMkGiHVkoUdRT8ZWvCgN19BTJmAbXL6VLaVu9d9w8NJLxGQjXcJ",
  "key33": "4Zyk4N4MUia2ws1ygP27y4TEfTv1tiJkgZ5TtutYCThVN5gS5jFTFDTEFaJw8wX2pAX3S3Hi5Ks91Ze5zpCxVrZV",
  "key34": "2cSmo1doCSEsyc5CQyuD8uHi5uDJu7dukESoXo1Mt928UFnheRWXXirXgCmFMEbvU71pJd4KCottf9eu2i9s6Urs",
  "key35": "3LboRdDwJzNpcA1SCkrvf4in8Hmcf5Lzq3eb2ErqwrG51QDJWBCPbQbcUGBZE9P3Hk8iWmEMsibNVcCM17ivc51P",
  "key36": "4TzKXcv8ATC7eTHRnquSuZhRRDFjQ12RBeW7Sqdt5BaMQRR2HUey73Y9XoxHQQvUQHUUMfuW1rRsK19KNJwYFx6j",
  "key37": "4gr8fofv9MMyq5EDPsary1HhqFD1vC8FwDwDhvN7sC45HAsRjcRVDdxe1hu98MLfJA9vzXogsHdjLC7wvTUm6xBc",
  "key38": "2Q17Rf8VZ4HGZ4HC5v8m8uZWfqyDsarQHCVmQwDdxeGo7rQALUQQX1caZxQpz48MPFEN2hpDpFeabXFrL14xbx2S",
  "key39": "wT42raoznfdLYvta675aYpMq2NgWo17TUgNWjwrBYjjiswTiWqfC1hN1cfPZEAUb13jEa3dQAHmyTGxt2iiwiTG"
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
