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
    "2cja7qawseK1u95qm5bJZ6ELMkhNAPuzibJ5PdRamwyrjbZJ6cDEAYb7jm7WaUSBkam6iEWGZd4tMrs8FSkqsUGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWGqVDpD5aXoXxUQWS7uTUe932CEgCbMSATe1qsPFhKzKTiyYKtbiUQChEhdHtH68du1q9GLySZrpj6jp4iYauD",
  "key1": "3wWUG1YDvwyYQvP6BQJuSkrXzNF27JujpcGAccBdwZsDbZdLhJeQfevm1rxHJkLt4Bhv94B4ukJ9TuQBvSM3TYBg",
  "key2": "23vPMQnMrgJ9MS7cSy5D3qtua3zjfrzfiBtCE8hQyA7eqWuo4RB3tix8TZ2wN8ZTuKH4mxDNibMVAHqQimPWFozA",
  "key3": "4gidjzTDTWu1oKg2hNcJNDw7b1FWWWeyr519Xd3UkaiZaLe4RVpPEGk6X7M61MTny6Bmqi2oWAGcBQK8KLgeFgjF",
  "key4": "28V5vBqGGkjhXN6EZA9QsCXb3Y3GrQ9nTJMzDkL1s8x27QHuWddYnRgSVSnfPPMkJhSaQzPXNtcFYz1MxmHLNo7u",
  "key5": "2vuDMtw2Y3hGRqp2cdCHDrQq5T5ciCybtCNfYL8thr6CDaFaY7a2javPXk6tMP9bxw4BJbJQJC6KxPKkxNyexKA8",
  "key6": "58whvbJSpFH5j2iKKURVNjQ1Xp46ekYyNZ9Tg3VSToetQ4QPuurN9Mf4YYUk9sbxahWcS5NdZweFoqQr2vChiwAN",
  "key7": "qKsFXkUBjQKr2gegdKzdvJkNwhRhkSqzaWkaJNrFEh4B3F2Bxfk2opHFH24sf3nHgBdPGXu6DUkuStdW1PKUB1n",
  "key8": "4k1mD9g2Xiw99nbsMvDSSznE2raaAG4esCLjngSxXNwV7wqVcuomhp9P5N2QyEHEHrdzrjy68oWxgH9bT5w2BNGF",
  "key9": "5WZzm6LUQnVSE1toBZm3AmRyXbwEMcrx7EFmbhboHCdoz5kaKSBVxF3ckfvAFcH6HTvzWn28W8GkMYFWkjvRZ8Rw",
  "key10": "4eGZgPmqMXuwYXKJmYFc3CDApSaEbo6WFvUPLPmZWmjVosgVDehS8RyJawbjEJBrR3hJc6dia5gDHUBzBkmKM9G1",
  "key11": "29vSL8w933KsUfuwL4Nob7tkmZY6Juj1yAmBALVjZJUrbGwL5PfZZbaDDkDY1Rt4Eu98wyRyWKWctieSJDUYmnG2",
  "key12": "2k2mhBpKXf18EaoMLFMjZGXY5wBrVtcfhQbn2RsZSxhinfYrmLh7iUwbkdwk1R8KrF5S4fjSdafzUMYC8K8yhm7q",
  "key13": "59aefG1jh7DENoZc6VxS2CTrKGrbnFM829BrGH9YChPsjeD5cPcJKtQV69Kt1bqMctaMZNXLNrVQV5PgzYLZ9vBV",
  "key14": "3mCv3BxPJcHTNQUPhpBcGRkpxL5r2H6Nc11RU5Ju9euc5SfuYtNn22fYEbzNkD5NnNLjgvi6GELHK3LtcmfGAebB",
  "key15": "4J7WJYzWiHh93jV7DvZuhLUwhnukBvnekXMFv7uDtywKEB4AGpthgFVkHG8Qfo4VDsXkX4o6CimX1YS6UFBsg7YJ",
  "key16": "5hLmGL53QfFM8rnkV6rYvfZqFToh84PgbPqNpqfGUSVX5rvUrAXBzyg1VtUYRyG1xL17fPxRwTWHs6YSHGw3LSAy",
  "key17": "2fUWVSqaZuMz5hH8PK9xuUkRgWrRx4yDBdctM8LGJ1jgVoH9Pu5LabQJxf4uBvYS8fWFmmcXkS7KxYjd6JvAL2iZ",
  "key18": "5jo9VDa2w3KLMoMb5xH2HruMvwWYYMYE5n3nN7D4zjG18afgPNZj3DMRXodcnMc36wn7NhezTvMtyr5aUqRvVLZn",
  "key19": "5EG1eBDBeLn5hTw4ttTZGUdtAAGsgopbCoapfMCBv1J7MNLrxHeiN5LfjEy6gUFiNZBp5rZDpekChyc8emenPsCd",
  "key20": "4kMpoSsfRh5LRkjJ9spbPiNafidcVW2MKK6qf1J1sA514ui9EzQ1scFk8jJHyac8ernHfnMn6Utrk9M3Fkpfhfgd",
  "key21": "3x3oJm5CoVdS3mVfAKuSuN17PD8zZ379r3rAC2VCZxYSCPthW8xLg3kvqiR9vmq9Wvcibm1JngEHrE4EjmhHzmeH",
  "key22": "4jWp2dePLTZvtxASbFMaPwHJwsJ4rL4uf6gmSU2mzUbq7JoY7s5k3TjHUmDSEf7mdKntafukb9uEc8M3ctfManhY",
  "key23": "4EvxcteTVcSw8se8zz8ngVqRfkPKMMbwZRCSPsN6ZXs2PWpLMnkWrbSXNA9NsxLa8z5pmT56JHVT3fWwfYkv3pjV",
  "key24": "4s3oDNdLpXFXncypJeZsWRTyhiVStM1QLxpDw1kparh2BcXSRq8dYMYckNnR9dECQbPcxbviwYUg2bGVdoP7g9pp",
  "key25": "4v56tXPqfv8EJuyVoPscUETjWnud5ivumY85ayyVTvyV5Qd33KX8cvWKMu7Wdf9vhYcCuDrZjT7WgstQ9yA9oiRF",
  "key26": "4LKAERgjH8UkXezBXsQTq7PEBJhKv3pkyM88mdTzystN1pFJTDWxdfZToi2hxBixC4QukkvymnAZTLGZkhjSGrKS",
  "key27": "23WANvDKHv19BDsX5sVgiwdWRMbr7hHhHvmpHTRDxLHy5EbFEc1ujuVuYno3nveoDquRvD8n6nhs9kfKyjZf1Ztg",
  "key28": "5JMwG8Qb2qSWGATCNtcE9ojNxjvqPUusE9txwdRU8PV8qHvNsp8oSWJcis37Dwrp6SfMP7ReGv6RcahmmJDMVqaM",
  "key29": "35DP6PRTybhaSxMYhFf2oPjJyamb3gP2MQJYo7XytAk7TMvVfxjQkmM461qgZeKiB8uN31aapccAhMGhNakdBrC2",
  "key30": "arYxRMox7HQmYG9xi1u3oUj6qhLueJ3ke42kdZ7vzH94f9GCWPWHiFa8qoSYuC74PZ1hkZLvwpDWoZ2oSdDrwVc",
  "key31": "2ibguyJEbEb7LCjVjmnfrvgk7dZzESjiweXVYHsnrV39AogYExhxEJ9S1GsaNy5CYMM72QszgWTsHBJUYcW3KYV3",
  "key32": "34vVcLAomGdFqT7edVnjuFsZbHHG74tpkbXop3YLA1aG1fTh9eBjhLtL37Sf6maQ9NW8AoYp4nB8ds9KdxnYzdgk",
  "key33": "28o2GyhFWJWmnX7n134YfLLJsMqnsJ9yrhccPX4NU22piuE6gwBFquZSJb9PsKaybG8htF6vxdio6UDv7wSNMuWj",
  "key34": "2T9Q3h5Kdj6HCmjqX5CUs4yvsageWvdbo5L42TPceHeZFUC1UhheUMo6B338vYycWzzs3adsUMwjjvMM3iCdoNCh",
  "key35": "2DAG8pgqYmG9Pa65yaSq4QHEJp5rB6E3aTZB9aN64mEgPgDMGwtCRPfXEhjYRCdGeQF79aiT91CfdKkEYEoer5rX",
  "key36": "5LMqwciNjYnXimxNqv21vGnTVtscdJCPiqLEznrqWyCybi3jjL978AhKxSp61XbmzLQCFT7WgeKNDSvgvdQMC2tQ",
  "key37": "5p1f2bGze6YRnDEhP9wzSquSfTKuC5g3A8NFdjCmeiom26FxqrZx8wLHZzde4ktDnpdGcxfUhQmF6gU9SZ25YqcC",
  "key38": "65F7eEx59GVdaLkvL6McNoHssrFov6J8uGMFt1s4BE2ykEj8cQpicEP7rcvE8u4U6K6X2vxxBE1ERrKG8dVUp3vt",
  "key39": "5FE4ivvbpQTv3Zn9oQt466fWfDCVPQPgLbbBDcEE4W1e1xgpqZogPekqhhycmNQK61NcwassnjXAeFhG6gwYPewh",
  "key40": "5F5V4iv6gvdgfKMDrtho6d74J7HftpjNPmDiw7Xpmn71QtakATXgdntvvmGvjEeoDWXjXj1WA4j25HKrDZcvrrbr",
  "key41": "XEmtQeg3HUSkkQEi1pJesr1XCjfQp8PUUekHyEMhvEW6K4n67p2AZq8d1CmbpucvjZUzvTUEgAeo3yWXr7nJaVY",
  "key42": "5UrXhHbNqzVQ2T7HYiwu2DDAvsmQj8dnH2iZL9UCDywx9NGkeUeTC34XrTnpwQnhSKQKmhLs6rXd5VKRAz9FLxvE",
  "key43": "5VYamk2j6zh5QrSyBVeSgHzv9s4qoHyFjssXGuJtDJvf74Wr9mnhb7FtJyfToe7C12TCquu8ZWsR67kHPdDmmJa5",
  "key44": "4Dz5nibrs8Rknymxk588fJcagcSxXKaLoDtPVb64vNmZRcd4mChcnNwABTfc2USM1VeZVahpESyim43oAoqdZuvc"
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
