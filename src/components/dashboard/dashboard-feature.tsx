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
    "WjC75X8MESLd8qM6NDzssSkn3xYRZ8iSMA3wN54G5WwUTtgu7WRL2gq46BT1aRCkorpcxzVFdpVfPeNS2jBZ5Py"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uSkEjurpMQVFvpwmtrdcNaN82zhCfkFnomfAgnPqCZVqsvJ32WSyZkHnHe89ud14uT3obW4p4N8CLUQZDVsGS2V",
  "key1": "5MGVFcoCeLgRCTwpvyxCxoFBVdNbm64D7cTBPSvjKQUyL3KtZWr36TBfqeezokwgChRdX2y3aGMXwrYPkqBGAj23",
  "key2": "eem9PKcDvrLjnHVjNuYCAMh7a5Rkh5VA8p7VqtjnMZaJHtDjoXum2HvKEDTAJMj3CGjBNbF53BPk3HEKsEtevP5",
  "key3": "5v2VFWudK5ftDBRySjQzYEXrgeRw3N9TY9zErSC5rHLcdvcto9bGW3TYte8C24ZzbN2Vj7Uh9v95U5uPg72RoR3J",
  "key4": "2LthpYe5u9i5c6rpt9Xr8wMThnBvyWDyDUyPB7ii51XQa6FCwoUP1JLiMDeS93XKWshnD8XzSepyDQ332K3PCCcs",
  "key5": "RYzpvG5EWj2HmCUtaKfWJiN2ReWsaXmVeKEpHhdPzVr8fi87qausexpGyLjB8SczccsWCz1Z7YspQmCYVAMxtrM",
  "key6": "2RUMZwat1Z9xJiRgvsHqwvMFeRRApSKzo139AUiy3Sw2h648qiLmZqcory7zVJPS5ev8ig7fAGUgkYxnpoRpFqWB",
  "key7": "393oTVPyiXX3XUk7xo23FnFYv6hXJDxneN8x5euUi1mjFAY5RKy696qpnudLT3eWL7rSjvS9xhhD6CiHRSxgzcQ9",
  "key8": "4df2BQPyQQy5ktithZZEGNHrfR3vRBP5uKE2btpuJQifRMQHuMSJTDNkdjh495qXPc2yG82LJA2WmHAy83AbuLQL",
  "key9": "2WqdCeKpBKB1wArqYLFm9o5Lp1jZH5B9SFcS2BsxzHcakR99K2VukPzu7aMQ2329pN4AdRgBJeGp7AtvjsAht6yK",
  "key10": "UmC12TD3hy2siAmN4T9iQG3SPgTnjFnbCQmiE4WawcLXR8z8wQ7JejT2ZQt41xQhYaL99KobPpY1JBFWH6qFbyM",
  "key11": "5YpsEN7Y3wt2TfBUGPVBKassKaVQ2WypVSGV387L94NwGGuGg78qyujG42o5MiyDCboj12QxLgfrjjZJNC3uhsse",
  "key12": "5THyscmzwRtEyrtbJXYrruwdq3XhmsnAfFGFJTegetEdFgmhkzoGrdLU5DTWkAkSm3GzWKVc6hpH5Rfrs13m4rsM",
  "key13": "49nHbjtUSaWn9W1EjB5PByVqXR5YqCZiQSyN6pU1BbFJBtGj4JLxMx9XuGFfrhEHkbKiGxKtDZDTwDVbeAh8m4kU",
  "key14": "2AbjiCjwsuJ2w8n5dF5LA4XBm1D7QTn7C9YF2yiTmiR4TnXqDVhNNaUpnaUuwe93C5TUUVjTkf9c3QoT91g5jfpS",
  "key15": "54GMAtreH7mMiyhLkUxvTscsUZf5GszxN1tCzXeaTUNUyDk7yF3N9tr8NaEwqFMR96K2nKq673oYyXCprNM7PBNd",
  "key16": "3MhDGeQ4hN6tausW5BY8Ck4Di96CZsmDQ7vb3jSE9RvtcagwLj9zK1gADBaSD97FheGoVSH4UYcAztvWNYRNMiaK",
  "key17": "4uWQZgGncD3iwLYaX6Ad5Rs61UctWEZ5KERYgHYuF2Kj9ZzwzmeBU9eXcZgv1Uysvh9BGZjATMHd1sWYxKQpBD3x",
  "key18": "5cMjE9juZRsqgQ2UoS7Y33PfGXQ3zfikDapYA8gRNrog4Twnx7z1mY6qDsM6EES7tAjhb7stC94rzqVmqCzj991k",
  "key19": "bqkxjoNMUVXcbND3kdN6TRXRHr9UnJSXWYAW725S1PWLE1MVAVYF7hPJLvuzhVFGYg2RNRoZ4AtrXegQepTAt77",
  "key20": "5WojzA5r577jtpr5fWuasEtwjeg25ytzHQ3wKCuQtj2PAhNYbFvCoEeUazikPfPjoLWuRLTUPjYYboTibnSStd8d",
  "key21": "2hrW3x6Ype8ZFS1egwhHPGRDmbFvP338smrEaHkD3mBzFHL9ELXXVDmTPzynm4NJKocxXGfrMCfZ5ZtQL8D9miLa",
  "key22": "2FqfrDYMqqdD1NpZCp8WuXGbdH2rAK4nitiZ15ejtpBPFrChtJ9RKgoMP9R7W81g3LjGcnuFaYTzx4WL4q4xxTa6",
  "key23": "9QGcr1ke3kTwwpQFjp8Lf6xemtxEq1yvoiX5RhQSWJxnW81Fz5b2fmnMmv7o3X8GrzCbgxy1qfSPMTuwWJ6vbGj",
  "key24": "2f2yLbmGLzi2itSdDnEr4sSnxGkK5CKTNQf4Z9tDL4N7Jjg39nW8AxpbAvqqwcDnf6hnxLLdAozy8BTAQnpoqusc",
  "key25": "4H7hLfcxzHr1UgnzB8bAdtSUdypxGLbta1nG3XjwNDdmGpg6AGPcQPmCBFuvW6jfLDuM3PnH3phQAW1NTCWW6A6k",
  "key26": "t6DiwgwFyzc1qWCGn5weSn4qQMDJCpRZxuEwtjzZAFtg21uxPtQLfptDhHgpuy7ZW2zFfdJhLtEUL45m1oEA29h",
  "key27": "4Ea2o7LfczVxCGQDJLvgQiWPwzE5U4USQJoPoXsWezVuXonbkpm7KMSLu9beVLHEVj8iCEGfpT7x8yARAr5jN3qQ",
  "key28": "3LJ76a8nxhoGMcM3H5ufUygCjYNcUjsByd8PyZ5z8FHUz2cfjSBas7nbgAGXHLBrjPqUqHKdBf1cNJPg9YFbffns",
  "key29": "2tcf6qheFhqYgzyb2CKX3YeKe8M6gknkawWL33y5HLiiMmCryQLhT3r2www9wgqVgajEjfQi1T6bx3tX54Js2EA4",
  "key30": "3MfipL7rQmPKBzs5JqKxgEHvkjDkgPzxUYeWt6aRpkQJCqQtNQATtXg5pjsacvtPePcgNKzeSPyNzdY7EZP6CMi8",
  "key31": "5CzWizBcRdMoEAdyeubJ9tCiwYE6vp37kbPTujj9h7dym5tBXzw3rxihH44rpmDCkMkemwafUSSuUNt7s1jgyEWx",
  "key32": "61Azp1rPgcbssokLZNSGVDBV6jjb3VD3x44kyt5mzGjZrwdDxksv23aY1fr4czjXGUmsoQqKJxGUuU7dvuhAxeHF",
  "key33": "RXBRHi6BhNk3husGGX85jHHYKqQsGqe3vBq1UZmxwMHC8b34tSvcd5pRuJ5qHRXJEvWYAr3Ccs6YUfdu6iezi7a",
  "key34": "2f3gvAWHCvuBS3R7bBtbnsEd1rsCLy36zi9zHyM544U8XSfe6qMUqScDrckDSRKydqU7arULLtxwXeNg6WXM8n7o",
  "key35": "4MenJH2APkE3rVA63Cg7EDWxXDbaUPW3JzVms7V16RiaeP14T4mmaDoaWn7Zeyx9ZRC2r79MtgbCSqeEkRLug97z",
  "key36": "45Q54VogDZc4MZX93MyRnfwgcvxtTySqzDPzhTLxXqhq8yWJtTfnTdUBAvsMXiMFzCKGL9ix25Jg14jY4MV8nnWK",
  "key37": "4ciAJLg7gUatQ7QnD85pqFxnZVY1jGvG9WffCp8rsZytEkU2mY6gkTbY7pGzda2UzCRAqNsUds4iQbDcZdwV6z8p",
  "key38": "2uyUQGiQK5h33TCoqpZQicLxd1fUS4bgFdEgtRhWeJSfQcnzXxnJpwJ2UwWSp5yF4cUgwwZSYCgfjZHkBktSv5jB",
  "key39": "4inhU2mVfGpjj8DBFj5Y8XGZcJfuo8iQjJY2Vtzt8y46rmLcEGq29XnkbBi9oN3itGTxBK7XX2zHo9SFgqQyWVig",
  "key40": "4BL5GE9mYUiMVN8pThaAsZJCdKEy8QKx8ANoWGyx5hXrnfpHSnhkQdTNHvqMqirXkLW2qrSbTgSX4Deop2nmp2mQ",
  "key41": "TYGF8TASbbJt9WF3qUANxx7b3zWnL5WqfZwinSKnr792ZxB6UWaHYEfEvSHL41CNMzVZEKdxXgsBLcGV6QiCNon",
  "key42": "4g8aXQuXvAY3jDcEaDHajkEk5YC8CRaHz4Y61RMDSKZNMzEXMAm4FFpSV4MzdfaJNS4Gnk2Gjje5KKcAfBmkiNYc"
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
