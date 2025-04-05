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
    "21x8ctUiZjWZBdpJjhSX7JoxTb8Uvm3ZfRRdvMy4CoirhnfNSKNFVzHnGVd4Wv6Pv2vBC2h5FZjaLS8dxKw2H1dz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RiUTJVtPgiJPdRvsdP56TkXwVVCozBfYV1k19zcqzh2VyNN3VAWTPhR7XnTLszncy7LcqYJRn4usLjX484TbZ4M",
  "key1": "147ip1EDMmufNeA6Qgzhv2oADpH9qZzdPRuj2yCV9iTBE6V4K6HavhJa9VXuZM6VFvvjUTPpnndai7jB4uwE9q2",
  "key2": "4LtMjbxf1hYy6Bf2PGFjmT8cQgJqy3hQiS4qhXPup3c6eXmQLiytR2FzC5LBQugGik3tcPQgnw2XNcxEAvURRsma",
  "key3": "5nhok6iD1ttFp5GTMwjA3gSUsn1xVkfNmSXYUaea9QgaCJ6VhqKsTg35zrV7byEUm6qgzeuu4FxLefhryzjuFiw6",
  "key4": "465o27eUbPu5hC1w6uBhyDBGwmDBF5iQJtRAQuTrRgaLyT3uKPiL5tVn7j2PZXoyAro1A4DfUFvbhFFh9WvnXdKW",
  "key5": "5Phhdjv8z1Pzd31DQ1vGss2bLTiokzdK46eQiSQa4JEPte7XAdoRjMj6f995232pgXbMAymq4zbMX6u2eZJXHdC1",
  "key6": "3V6b9jGv8CDsM983TnqRohRXsV48jMJLdQxJzTVs5g2rDqYtTMRTjQJj5Gow4YH2csALjT5bakEptnqKvvW4645p",
  "key7": "3DZkirV26JTpK7fXtRFTu9mo2UASaya8nMAQpg8bUUW4ao6AcAwVLNFKnGFKoKndMeD62q7PCx8hg223scKgZXrz",
  "key8": "2aMPZamw5XDxtW1u1AM77VdBUfkgKqLMJ5M18r2EGVSsgFE8pC6sQEqgHCycAebPVHZRfSYwfTqSt3SBXHVgGE4Q",
  "key9": "2cR5quqbox4Ns5FyKKAEp5MN5EfMsUeNnH94y2TArJC6waNSmR3Qo4oFFqhioM6EL5w4WH5RvqFvk72s4g3TxGdC",
  "key10": "34kABe6K2qa4FoCwC5QWQBdfHaAwdaqU2QWGX4SskW2tqbU6Qc53Sf4EHLCM4uA2iZveYuLhqi1ckBeBtn7hJHWh",
  "key11": "mC9976BjVbokALAQkVsihF7Q8dTb1rnV7Ni3qK3vP5UAveq5kmpgFt72jpBnRKH1JtytcqHDD25MUbtc3nfLyuJ",
  "key12": "2YH1qJQqceGYkNjB5xJsjJDiVEEqyyhLmJ4McaxLbsxhw1kVXUx8UCvz5mGAYiKFVZzvBwv9F3xBGQpSNp22tWn8",
  "key13": "5kK8nuLR7Vs78bGkgVqxmFngHeSxpujxK5jGBbEnAm7cwuarTx4H1kMnnzetTRZV4FzbkCMcqn6nzQkQiB7USauZ",
  "key14": "3B5kQtd7XknHowDCrUhrZHkfzXQsueu17M8naYo6GTSjE38n8YbQ9aAnULyc422zyx3nCMT4Xa9Sj7ZpUrJnprR7",
  "key15": "37khojwMpCaNem7GFH2ZffiFk23mntnYN6JZkB1pikDoiPTxrQtPeLmtgpsNKAZatrXZ54spCHjnEB9VBircuNQ1",
  "key16": "4mH1hwgVvFQ7rxLMF91GtsuHWwob1GazEP2xkTgTM7NiYtnekdbpC8Swrb2ZFsXZ8jSFk2PtpnJVedJMabHqu5w8",
  "key17": "Bi6nmFfbvSCd4yj3u9pAL1hcwQEpox5Z4kpoM7MnHAusLTUdrHF9rLKRGjuiALiRhqa2sAqXgrZFxawAb689MGg",
  "key18": "5VzVfoKXX27cGJU3hjkPkuyRwgQRM483zWrMrYkYv8MXdmMrUzaq7y7nykNyXRrWLRFdwZtPHq79TfNfm9pyx2g",
  "key19": "2o31cjg3PaKfAeCPKZQahHocKzBcPtP1wXY9JvQRWfvKiNTAjEWW5JD34vG3B9QHEjXcvUmYnBXg9eHUpW2dnbc4",
  "key20": "4aKpMKFTjdTJabgeJ97pEBgLK4grpBzRNtZ6DYw5SjrxEujbyuinRx8foM5ofzsGue2tcyAf6Vnnm6Ptv74NB91d",
  "key21": "2CVsaLiw6Z8uGR7jTdAxqzddfUp2GJpbvZnnHCYnu7gkP4RCbJCAfVLtCrUC2B3T6Ra2qAsdDVjxv88KX1sNW7v7",
  "key22": "5oVRJaweEtpuQsDZpT5XyNZXLdSp9y1gjUhjDgtmCEf3RfjmPhy5f765xdCrL5FwdMn5EyoN2Wjzv3CQPCYuJ63J",
  "key23": "9oVEyyqFB7DuMm3SkgCFEKFhgCS41U2rmi78vNC7K5v3bemsr3fDLas44NZ2MLdcdbbdkiGmfsq8RhNcM4YChzh",
  "key24": "31FoSWmtuUMsMg4jU1k6EPgpa4GdueVAB1SoLN9ksMpBt6S4gioFUuLLivW6TmPfhUahsKobJ6cfoTRRBWNHe8J2",
  "key25": "4Bu1y9at6stES7SJeqpNzA4FuipPw2ja5vkJfHpDmU53egayJV3iTn1w3qZ4KkmQevoDyB8PLFHWVbmFgNykipLn",
  "key26": "4aBBerTtJPUosbZM4BXstZymduzgj9sudJkT5LrzUJu68p57evD5BgWAdw5deiyTcYWoQ78DRuMux7mqz1ZaKd2x",
  "key27": "5etVvUcKNa7kHowQft2f5fzBGvc5yUqfDkocQq5wyFMibki1zzekpNZAR9cypRwFtk3rBUwL8njmqdSFuBEFU7iA",
  "key28": "32Z9S3A6hP6JfKfjC1NxsxmVxp6TW1iGGqihyj7Gngvyd3nQ9HpUtxf7kkgsFRxP33JsWRtJPCDyseU8g2KDCHqL",
  "key29": "3kjMmoNjYxvazZwzd9LQdZsKDrwymuUemKFxdPxXPbrvdYx92nfPAaD9Bm1dVnReQu5j9fgH3dTZcNsWZpQpRLnV",
  "key30": "3kZKMNwjWiGbNh49vwzTgRwdrd7MSTWKUKki5EzBM972Z3gFB5ha16Yf3BQPgpKBwHviqjgkZY6pKj1So2HvHBbf",
  "key31": "4JGLJCovqjjqLufkGVEuDm2tDNiBH3TY8tSEqE2ynW2mMWLi5sMG8P9rgvELdgcEYV4g1gRwawUs7nyoVdxS7HAq",
  "key32": "uMrBX4Q3n6GWQFkN9NKfSaLfdiVS7aP1fRzBKvWdKRjNJEhZEKfa6SgTUb2XvNzgDUZVxazD24wxhwqrybkFNxg",
  "key33": "kfbgKvH941Yz1CQakRqzKTrTPKMPBLuEvc1fAhrp24k9rf1WtoS6SwpfdvPHFSzknxj55vDdptaWC1hswvxVhVd",
  "key34": "239E9NBkk2uqxrqd4qgoYmv8HPj3AeGZAtqqTHbBSmz7LbRdotEvjjR5X9U5dz2cVzZ6UQ1pf16PFBAX1fAy747C",
  "key35": "2vnZtQzoXbViN2guNSCorjKpWejpaYG5Q7iVp5xMNUWyCSjNu9z9f5YBzmRkQyaERJi6aFo4CkhHPRxYvVFYtJQS",
  "key36": "44dMpsBRq2TfnYXDtUdSwgnhm7cBe4uVhsUDdp8TXDAsgt8HyABwrVBwhed3UBA9QK62Nn9DMpdpmp6Fu7wmsXQj",
  "key37": "5tCNPFFdRxxu1wVGGW8y3XLaYauGLiVW2dD8Srbz1JRjVJQbsVLPVwQFQ4u2zWHRXXtVNVXydSX8taJVvmY3yCpi",
  "key38": "3CoKnJy3Nf5oYQd2nn5fvSz7UWXfMJRDzW2wGEMcq3ntEsgtu4W9CQHEWYbeKX25NArsM681h3z6UBB53N3ARyjW",
  "key39": "8XDVzVbhtQeNDbQco5GnGV7ZQqA6Q83pavAWtW4xdx71xME6Hs84Xw2HK95MN1zZdSgCpRwZCfppe4t4sjYEQ6n",
  "key40": "3gihFbHVigkkxhXTHvZiH7CXHP8UhfnHvDNKTD86oRLMCoBWGySTqVoQMfhZKCMJSS25REz4iLe6ciwSm9bHDjZZ",
  "key41": "49Sfx7gg8wBVCQPMc9iTu2e8V3THvmP4eKpcCgfg3o43uEyCNEovHuqTKDhHFTd4MYMWdHiFfwoTEUMW6y6t9RX9",
  "key42": "2qEPfvd6dcRxT79zVMR778EBqDzXvDypekvz5KUMZgyPJV2HxvBtPekJny89BagXpAVntX1qi7YJ8Jwo4fFJhnxa",
  "key43": "27jqhY7UWEZdDCAMdxbuh7AiZqao3kQWg6y3j9fnuQwK8tBhwLoB5beYop8b4x8xtTXJPkEDkcz3bUhLX67Pb6Pp",
  "key44": "2X3LpDXf6S8yVJQR4EFAuqenKkduWMa8YBqSAPNNxg2kpN74Wf8JFdrpkCy7Dp4pzHLzr4ED9r5BQfQdBTqjFpZV",
  "key45": "465tJW7tmW8uJmYVnqGNLQEcm1deWpMnAA2cQhdidyPtf6TXQ9KNSVunNDiHpmpSrvdQsXKgVPKu5wY3voPyBeNR",
  "key46": "3HS5q5Ee9yBEZPmqWfcx5k2C6H2fyFiBphaqaPncrFFzdqu1aBZtxV2DtFToNDaBm11iG3faVmky1muTMBEC5NvG"
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
