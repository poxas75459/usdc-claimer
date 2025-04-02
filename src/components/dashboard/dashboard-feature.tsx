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
    "2GsGBci3TDVmWyj9h91fxMLXWzMxZi3fybo7XkuGzeWGRf3EDNq3Q7N1JdARneioDaApyNd9RP74FktadJJijA7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r2Wy5DtiXC4cECc4ZjhNkmGTPYkUqamnPZvY3Ljy17Uh99tF4T88VP4vaTV8sbQuZREnEFRj1Rg9i7igRnaY341",
  "key1": "4wU7X4XQdN3a4biiUdf1rtAB2S9x8Jq2G9n9cqWHsxEfW4QyS5g6dnRLJxHkCEtEgJWcfVDFdaW2VPZ32MyWobyg",
  "key2": "5LVFajKgJH5fd2vGnKYATRYB2e9Bjn4R6DdcERU6DCnDPM3YMWFwsF2AwPeoBL8rkW7W7mzTE3Z3BxvnwnJT3ec4",
  "key3": "5ZXbMA1NsxHzc2xTU41x2oTppoXgQP49kC8sSFtTbhDBgjz8PVyFfjXNASWi7LLzWPtTTkmmcJbPDRNpkPeRY1Th",
  "key4": "3Zr1M1yDE5xWXd7cfhndaKLjbam8pUVUu7oWhKsq3MPUnfajjJpBoZM5TdzESFg2WighuLLGYHDVM5uaDCoJ6eMz",
  "key5": "24r7u5k99JaoeYE7nhuRsN7QZmEretFu2Dy6dHUqogYd1RoudJYCEG41wubXsoLDovBLRvN9givMNdXaS86wg6Td",
  "key6": "X7UdYdSvmMd5aVWYikkZrqh4YfF23PMttCVTG67kLmfCt8L63u2Fi2kKY6QbFUeZtupfd8A5cBRwFWkLH1tx76s",
  "key7": "XiU5LGQWXWk59uYNh2KyHwPTfKAxyiRHN4am96ZC2efBPq1NcUK8wt9cA2f8KduPkkKXiBN4chJnnBEtYkzhxEM",
  "key8": "5a8zs4KdxsZDsaZMmmTYCEeLDP74sPoJsnRo5Ha4QGHKKbQrjAGyRCf8HXeW9KGgUUj2gSNDs1GZ9qVFYg7wnQB5",
  "key9": "4NPHButz8YTQaFMw9RPapoDNkkdpvPQAYLixujn6BDfwFpoW5ET2CmfEtYs44J8CxaimVLnVzzrpsE9JYsjxZu6s",
  "key10": "2Mdxov9YSMdCwcbNvNDkEBNj7nEAJm5FwWfrN8mLRpRbnk8gzQpDdRQUg1fBBBD2J4ZjsH6dBXz962skTrBvo1b5",
  "key11": "3gSmYrZaHsfLWTuxncQ7xJrwgLjLqBcDsdpxf2PM32zVnPZj6d4U7wKh7zfF8gxh1e1h5w4b7tDhCqBwaEu4yj9i",
  "key12": "ZQ75yrpJB3H1qPEi3NjkjxFzgDWfRNTH46hCzX1bbsDK5UJfSpkibUfNm7ooyy7H8rWMNBrMAsuiWJ5xrh5yTfW",
  "key13": "5Jfbii7yPsag7mRCYuDAH2K6JBZDa8RLFAdGo6E3qE6LF4pd4mzwjrhFtxRNXu2WSfYno1t2H1qf8uumCgrhvap7",
  "key14": "2QJRimrHd7tmMw44Fyko3JR8u7sbWNgTMFeH8aJHRCukE63WKaRCwK7gnj9L3wZ2rjUvAdgKavkMH3pdxp5fYttU",
  "key15": "2d9sRKpczyumh4MYjFPt1LrBcGZTxHAegap9gCAKEpXys43db4uKbyQ8JwBq9Sxm1YP1n6fsBe4NY1LaCLcP7FPW",
  "key16": "61MiRg3wpudtbbQ1gkx9kcqVDveLf3ygbQCcWvCamCpos4QgtdcKjJDALYGzVHMUdTG8dyymuvPt6p3bWPN2f4Wr",
  "key17": "2M4ezHtQsgewAcPVB5fNR3PNSb62xKgj8RupA2xJNUcSN6XLjdgyhvCSDY1G5nvzWW6Yt58HNPPSs1rLM1tf6ARz",
  "key18": "4R6vb155iyUWpp2AGAZFiSQkLeb52ZT4EN2BNv64M1tRUKrw9214UFnqm33mqM7MDwPo71Shu9pKSA59xfrNqvqn",
  "key19": "43QEHxrpiTmmChvXMDHLA1QmPZmBJxs48xSVzgou9p4qgxaQtj7c7A1WDhxkbjggqeDasFRNhWU4hcX1HHACgj1N",
  "key20": "518AsgoyKogrqdDgwQk1CkDK3BpqFseN7NNbv4f8hPxHuvsHndHTG33LDn6BzfexX9LWhM1X1AdfPBWV6VSCqJ3n",
  "key21": "4ZjCDBL2six7JBKuqLLbcmtYFkZxYcwGQd1NZqt3R9yNodqkt9FdeTX8iCoDf4yfNxAgDTwJikEG9KuvcnqxUFcq",
  "key22": "2vA5Rr7Mhm2hkx91zQyQZrMZg9uFGa7G4sFMgPoYvQeQTqJGs42hrUdhPaZ3m89ro7x9f3XT9tPyJXUbmyxq2CHn",
  "key23": "2aZSCYt3fQhTBgELwhNctjKYXkgqx89b7837RH8hCK3ruMBLugcVCSFEN6K6bW9d6jEAB8Qc1NRjTnEwNNsDjQNT",
  "key24": "3A8YVgzNVGoAQqPYikdsfhN2ZgpSXvCsoYLKVWWqHS1RJYYJRpX3JhJrHnGQ36Gwa4tzZpY88Xxhmgw6nhMZEFjS",
  "key25": "pi6g2MFyBDLzmnXP2FP6qe83kyy4MyNXEmyPJBuUW4U4g2fHe9KbTxdjvUDDG9AvU6Mj1GtaAKFvf6RWr9ryLok",
  "key26": "5HDKizLJtq7ng5pL9saYhvSmW18yvr5AjFKQnoxkdcrdt5L37HQEdCRaCpnLyLKSfbTNS5pQwXLW1Sm5hr56qTdy",
  "key27": "4rx7KCMyH76NXetpGixxH6bicjiaTbMxvGYi395AsVZZ6r3J7dwW7N2NTi2fX1CwN7ArLdnQ19CECH4EsRpxXs2z",
  "key28": "3KXRQLDj8Q2wtyPWNbPmQ1BYSZ41xtf3bfVRR6pFG5hPb9dkKG1YhktyoAnd9nuAASQuZoq9FEEFryMBUsqt5PX2",
  "key29": "35N3BJHWna15TuJGmQwNyqqU9Kfxypde2ZU5bRWvbvCi9iNJj6ouz5vvDTxFUGML1sGmiRcL1uE2NgeawsC9ZMMU",
  "key30": "4Yr5ZgnGTLXaRHNCLTGpMFL1SFxwas4omm4F1ony32AiJPg9poxqAyFAKTcRrJd7SZKf9wpeCYCphWj8B7KN1buG",
  "key31": "5v3PqeQYvjLrEsRy2z6ncffEZFWRJsM2KNs9TWj9kD1wfmY2iBAhuuUMP1Sk6U7KfLkTaXSYyQDhAKBRx6iQKVph",
  "key32": "4mVkcicho9YbwQ1sXrzfh9pyGCko2YjAfTwSP2nenQKgbxjZZeSQ4DbkB53pLA7ELbjLW3gCCtywbCT2yucgAqxN",
  "key33": "2PkBgwLQDbHhZTSCK4EZjJUMhqWWUgoSfa2WPUzBcuobLZm6EJp9987MR2JKs34zjTd9iB9dwrWYNoeTXT7VSMn2",
  "key34": "5eSTaVp67ZAVQvipCpLcYK8jeqHejWbym1Vtocca7v6tdJqTfHuyioCgN3BibGg7EMRDHG7D6o2FhhExydefTgq4",
  "key35": "374BXNm2BqfCeanfzBcpqYbKXeeHJdv1EyJYuxUPQpmNwzw2Tp9jPyvUTsEbeHAyBjqrR8jqZYHMZoTN7QtSFt3w"
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
