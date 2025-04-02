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
    "4MyfjJ3iimQ1ZSNi6S1FBMfknhTT3A8U6QqtzjbwmX5MnqsoSShNKHuCuNj4GLRrBZXdM5C8LU78Knyx8UxfPqkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2puajqPbV964tUmxm5f9uBxyU6nm21NJ7wYUqtE4C5m5dJH81zqWpGD4q9Pb2WiRrujV3v1waoPCFtTpNyWeXkkd",
  "key1": "RHJPPVYM2RdVZJWroJHS3V94QtBBYeT7keMrHrKxTKBWB4BKEDnbEwrGQhUzUF1AymZTSbpUULkxJvCKF1GUGVN",
  "key2": "3cMbPd7onTBJ3dKvrrxuVy9uFnetHB8sJ2qRPD5mV1jJ1veGZWLXxwvy6dAxuTVfAWJ9S4APmkEoxKRBkZa3YShW",
  "key3": "eoGnjRe84RNuC4RPbgVrQE5zWuWQ5h5qar6AhKSMWkJF3CuwhDHAbkjkTFBJg6BCBhC2kavyvdxJcSBJRX3eh6p",
  "key4": "23VGMvnwdaNots7DSgm6zj6oc2mATNjVyHTn5wwnPtdo3aZw1gR1Tx9XRg8KXb92rL2r8fNvpJAiJy5jG4VJRg6Q",
  "key5": "4CYr52shrJdjn2xUUfU1sNPXh1uQRxSWJPuAfWCJJ83jEdBBgVubw3QKkKcjiADAf8LXuqL8ba45BREjkgE1VDjc",
  "key6": "eFCaDvef6i1TSqz2TtqptxENrudTNYhrvtM8bXxZqpVd7zcdUiEdFyvK6Yiikw7HTKroDFU7y654wDkgnyjyYvM",
  "key7": "2EXNoe9Gw86TZD3Eu6k2qsWvAoyuPk2Rn6p5EB3NgsnXJyLq9GVRXf4dtmEkzNdRmZrjBxBRqbnhKH8QywigPWaF",
  "key8": "55NRF8GYXVVnMivkaGtuPdBha8PoShjSawpnJpxh144LtpD81JXR5RnCxPew2naeH6Tqv9SrTvtnohi4FG3J6bHM",
  "key9": "54JymLGiUUbNTW7cyEhLDCJnbfEMpSCBbG9jeJAuzKFnEjny32KeTTWQDkr4Yckq7mAxWBQx7e1LxbyqUXkEkyQ7",
  "key10": "5F7VPr5NE6z9Dxm1111D73Ayd1YeFA15ZXsMexjN5tmiuM7ouDybCKosRTVd3mCeoN5MT6avx85h5QQAw8M3uPAe",
  "key11": "4ZuyCgBrr5AEGEeoMgD14qaSzaY6gyHhwxxUbgn4TdXm5ukQYvMPP7BgZRFTwfC9NhAe5KSfKY8THwxD7hxxB9fk",
  "key12": "P5AQutdWyw9zJVaSryQpXrXDC5vrs6f2RC4z6SAPHRoqw5k5Xdyxo3TNTyRfGemK6isf93hrgEUy9RvjhXtCGmw",
  "key13": "5xrinMcy8rHPYtKzo8UUfn4ueKyvEApLtQNwnzXVyPUWVjzcJW5caiMzs3qJxqLZTsPpBUVjnTBDn4scCNKpL9YH",
  "key14": "3cY8XfpQsmYRzj5duCReDi7c78RCn7dNQs7o35NHgtgGKRLKZQGeNaomH535GDAN63Gpx9qWzVHDUjkg25T5RSQJ",
  "key15": "qVPPvK717WKaQmcGfjBbXvyJuZ4U7tRfYQGapYtygrjj5AsfTLrSxqGzQhexdR5SwZmzD1beHZ9YJe6UArijxLt",
  "key16": "62e2UrBfxg2CUYd4Cdn5VBehX3cr6hgDSJLjdFTkxaaYfjci2cfJZuZicqgfxu1tAaMN1bc6aPntHGfvDssQ6cbh",
  "key17": "2H4QJVgBx5ZbW3UuGBdqLE8ow1PFQLzdJMtyfCAUaUd1j5ZeTxSySm5bTcnxbMESG3wKUMovApZuabqjVk4quAqZ",
  "key18": "2h7FX5Mu432vLioDgRnXkEvLasagLhPePmg9cPtpgGJfeEmpdAnUkysZRHma4BUFSdAXm379BQ8aSpreQvpDQL4P",
  "key19": "3Do5DZmhQrJ3gz4xauxNoWLm37jnY7zn9xixctaBoeoA5Quux81Z4tT7d8prrXesyZQzvuc7PRiLUpZ1RczPEUUM",
  "key20": "587hHfM4zZXZivxVjDZkXSJVWFerGZ94qGdERwmtNvv9RNm3C837tiTGhu1Pd9ooKYEJNHUyhzV27HjQ7cNhk6nk",
  "key21": "tqtMRXXeJuiCrY7V1u325bPRkRMk9NaCQRoLuDYiCVHZ4W9fXiR5uVxoujJct5c19DHFPAR713P6hSycRoRn5tT",
  "key22": "4uku9k7vUmtDNj8zHfRgSnMwyrvb2WN92AXe91w8x8Uji3oKH2PEkUWndX3w6pYoyUPxuKz2qn71PQ1t2AAUcDcG",
  "key23": "4gUzwUjo1qzq3y5jkRerZSjgQdLaiJoa2UyDijhsSMWC5tEaWECH7JdjogZscL8PXi81jhFoPw6a5V4Ra8cgpECn",
  "key24": "9HmWNLePfd6t9JKZAZguCvndW1LEYkLFpqTt6QSkAdHENTATHx6aD31yvQtGKWAnnJogqewKHush5KF2peTx54o",
  "key25": "2Hh1zqmtHWPY6jwqaGK1R99yb3Xuoe3BtsFwsK8PvMCMz8tV8jFS9224e3Nqk9osB5XhFuKUsNSTjhMrAjUiST1U",
  "key26": "5CBHibPX93vYfHhy96B336YRyUqKTKRDxMMZM6pjHJAB66M6DhpL4axXsGVpJDh6bCFjK1gQaE3LMEHt2cejnKQ8",
  "key27": "4p6SgPiHjZUdcSeCkZd3y9ixR2rbr8za3vLzKEVcD5pYyeGfpEDFZvgUg9TpCHD5LSpb9mRuczcxXqQtbKitsLMK",
  "key28": "3JS5pz27QAjQ9R7Rt1bcDy2peb1zuV69Ne7kgywE67W5yh4oU8M4656F1dcujGfKnwxKhaayvyQFn5vPgL2PHfSa",
  "key29": "k31ySqfUgrapxQSx69jmEV7qytDuyzPg3LTSL2hGH8ht9g7Tiw7BfQouy8GtsVnAymtvu8v9buT6SALZYu8g3RC",
  "key30": "3scZEHTinrcEgPpsHKNqTo2XUiJyRq2as7g86N8AFNPZHUjMiVUyXvCYtv5sz7pnMEgk8bkfds3fUiPfsCXu6Epj",
  "key31": "4rL6rryHZwJ6NF7WuopCmfT9LhckETWvkRPEVmB9hCzo1pN1FKtkcHttXi4ntctb3kgHpPrmjjBpJumgTyFhLWqS",
  "key32": "2VewEBZQKW3kByqvzQJYEj3QLmmqyWBgWUtK369FL7AG1odiofSDvSDwGU7WKy15ZSQU6q7nwzHtHkDqxnnFzpWD",
  "key33": "ZKAK49q5EuAQkgHagcR8PUGmGUhXx5AQDHXDSNMKxUMngfp1VEFjTxsxrWEpgXcvWCXHYbL27JXZ8dA4HmBagjv",
  "key34": "3YNT1ao9Rs925YvNkLprVbFUH6KoBeWae7guKunKDPDQrg5SuAqyz3V5vdQrXvCHmPTW2uUyjq4tSrgFjbCnLAJG",
  "key35": "3kBNvcnGriWgWDJG6sqkv8eez2zn5DzGhd5TV5vVzjm7YXXQBhN7FNfNbKCqMrwBKe1v6wnnwZTqCQmgZqFXDA7j",
  "key36": "fNqxMsgZZqQLjpS6jdpC6FhJcAWAkhrNtvWPZ8emKXisyZE4Lp9evdzqM2aX546DxAyv62CgNAF78eZjen7ZDty",
  "key37": "8LK2MJFSvhXKj9c9q8CuHHUQzR9LKm6hWkBw43ShXqrmBvksHGDMkUTLBLsKhem5UK2osEnaKqWCcySD5sa22gj",
  "key38": "2ix8BRHRcGnivjo5aDjsHutBA1F44a5S1TXxfAFux391vvAnxxU4s4vGow48rMV5tH2LtbfkRJnLxGFs6G6c8LU5",
  "key39": "5bDf71rnoZ3umruWSs9evh7ujABmyYyxVBdDpHgYQvzvhx3BT7ak5DJZPzov6tghwrAHFkqLortxSsLYM9nYzKvv",
  "key40": "3Jp1qsCLMsWyv4e6Z8wym9GZxphZJExBzta3f4UK9U9Yt8NdWwdzfyZi7xEX8u9d97WXARAAcLMFfb5cbsUwCvdj",
  "key41": "2NAanTPQg6YQsQfvHQKMCPJQPVMktwe3rEVxBzYahT347BiAKAyzJ4VHohgNBXbBjptqsdbcGgbvPG7FhzSa3S1n"
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
