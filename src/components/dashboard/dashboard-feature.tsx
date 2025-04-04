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
    "BnwfpmZakrHHrARpnVFBWAzuummoXPcUVsuhsdh6C4CLFZP295Z6pFmRWgCfyQ2ZiyHL9C5YKbo9Zc8WUFsQsEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qirAMLecPSydv3foBddqxqQAUyqUsozU4PNV1yRpag5evWTkCB8G3mLYA2qHj8HrFdEB9KHKN8vJpu3XHjUj5jz",
  "key1": "2EGr43etRTpF6HYvgrf5EgugwaVTVRbvauLNs97uWKXDSEGhwbm2zjJ99uxuBS3XsmoxxDNom79dyDiGrsiPWVXA",
  "key2": "3DikrkvTGBv125ZM5JjE7fBSA6tp1yGMTtzUanzZQ5apUEg4CA9e2knkGprFfLQz34T31XzcugnFeBtv5oKUcvNw",
  "key3": "dnx6ihoRVHsDHCA2rRbibhbehgsYeqgVLiL1j4L6JNyB6mygkfZCPhNAgLg45d2sG6CFmMzSqTgCWErU4fRKNKD",
  "key4": "5zdZiCqoTs3iKdF35rhwxTwGxm5HgSk4NMaQrFrrLjp7HCWeaC47jpmFtgXkdVuzh2EVgnbMBqt1fbBvYauN2xRR",
  "key5": "5z3YmdvdPbroj7gqUSm7aeDMFXCM8phYTMaMuEHindjPrxZmXeJA1FiqRettf85kVkmxketnpCNFZrnbbKKS9sRk",
  "key6": "2KUnLoLgye7DYSkxsfFbrap9HiWaJpBKKMZ2dvGZp6ayi1yg5nWTxE82fL126vBQ9aNj75WSvyR7hfet6S3jur5T",
  "key7": "54kwpz7A893cCBNtZxbzGuwy36ssmGbJw5vxTK7HHNodURLRsD4qrhiWs9dCJk4fvhVwa6PXYWtwc1UxZSM2QLFU",
  "key8": "5BXLVVipq4AaBYCHEw47cxAfZvkmJ7R5hJnjvYs1N6JVpS8fhBE3eHYFNbXuGXeZjEJG3XKmuBJA5ayH45TMUawt",
  "key9": "kwc5LWTEEW4dyLhVQi5mw9NuFCxMh1ESVPWbAyLrRMj76vUMy7jrQ4FvVzojbCBHNhSwWLEgaGjrbKYapJpeNgf",
  "key10": "3mNzHgtRk9a7hxLx2PdKpXzMa75BkUGb4PMSFjHQfMwM1z3vZCP7scd4vMdQiMHgAVBYpbkYdLJFNPWHMmmmqqHg",
  "key11": "27ff8fpzNUSjJWjarJgVYidQsc4JNie28d7pfPVX1s5oqRzvnq9TjxY7nq1CGKDQnvwrsoUaJYaaQkg3AxSB7CpH",
  "key12": "4GhomRqEGGhLNRdNpuJQjZ5zKfHNWmkEWFsLJCHr94jrGsxohKqmoihstAxPT6LwHJLviXFERTNdtrStcvgvF59p",
  "key13": "gpkHtucz2a9p446FHmybKZq9mnzWDdHH2LzLr8KQWTonditeD8RTjV6saU4hn6NET1diAv4pSAJZMwCLV7JSVWH",
  "key14": "4QmBAoV8aGEFme4geo1WorS9b1rtf143qZb887uYiDfQbXM2ibn5VVGHkL3iy61vnye9CarwDm15CLfzzjyCQFHi",
  "key15": "4GUBxirQskqJLqPdN9uMG6vJx6ttatw9uURmkZxhGe6GLZfmszTHjNYLpBmzvVCB3NqLs7t7J1EUho9Es5d6h4G4",
  "key16": "3twqpGM7Nf4gYEs1W38UziL1rBnjuDanJ8GmnuqFU8EiBA2x73gpeWmu9gn8Vs1QjZcpBJZoYBMFALLzzn6pW3pm",
  "key17": "mwX8x1h9YuJw1nuZj5huzXSv8RAW2a8hrGoUrNYGp3Y3yqELrHfDFEvoc9kCQASoS9iPo5a8uGSr4xvpApxvi6p",
  "key18": "hHpfuChnUqZSB28eZojoM3fCWhjhLpE3wVfARWrq4v6dHf6CqztkUXGJm3rJorCs3BwSXDa8yTE5c52674DW3VM",
  "key19": "3FgFM7VfbaqjWvi8J2r9wy2weBBq5xzbi6qCmtBPb4Tu9AB8zsqjGFwb7KPMRdvUci37aFdaSE5xxg1K4m73EE3x",
  "key20": "62WbEFRcqkG62Wh3WD6qFZfJvoY8rVioqEcEeDg1cebnnQT21KgrXtuNWYR1toUtt4MKXUd7fkSzVjNrUWFbPjSs",
  "key21": "45x3WqJdKSonw52AqBbYPRd4Sk1uXyuYDQB9SQubLSxCmLnu2SZc4A4YHAHeXaJyQoewuFBp92fDV3XFxtGJQWhz",
  "key22": "QN4Csvzq4tfLtM2iNuBtxMzcvSp8iYUMHHrtfGyW4PboftagVunMoHx5kG2qgAVFwCD4iKmUC8WxADLRPpBDAu4",
  "key23": "qULfcZmVNzjFFhMViNVmSZZbSLEw9fNaeCTMHSEBAHCDaX7QMxsyiaMoSJ2NW3waU9bxKRmourWkxAnNaDsWShM",
  "key24": "4GodsM7nRvivqQRNYHa65sRFwARgJDpCGWFAzc8AjPab8hih1YjmPywyyC6ZbHajbC3cpo3ctpiGkW8GdSUSqc44",
  "key25": "2Rbziuiqa1ypTmcDWyxKFnUMVWi21DREASk4h9APTwaX2WTuw9ZBHexSv4eF3jD6hJXizcbZe5fyQBEp1TdgQ7Yg",
  "key26": "2ufPruV2215y9iyfDVR4KALQK3Sh7DLBXZjgufxB6RoFq88Zpg4f3jjKJHNV2F2qTkkGxzQ2nsDaaPRQ1qqSjr9T",
  "key27": "VMcX3iyMDYtLdQ5cHGtX88HFrKAh5yHFioNj1sXnJprJ2h5UfQQ4upC93LaT7hjNQ9SJ4R25Wc67dGwwAsyw4Gn",
  "key28": "8EVjZu84uuHwAB58ScEo7ngFH48NyGFGtW3V8ow8mcFu1FYyZVPv9MfwZgoTQ6j7e1WZJxTGMmv4hBu2eGM9EhT",
  "key29": "yc4bmPZzr5VB75h7NY9VtsxcV8tgNtfnvzd4KYnXVWk9cAeTPufugCL48YPPmvFY6DV2U7kSbw5Koop5kvbr2Xa",
  "key30": "414WCrDiecuPLexF9sEHza6HrrqzM2MuB59ycaMrfkEMwSZrgMV6bzpSP55GyLweXqBuAMmMqMtxWFBguCK5641t",
  "key31": "fXN7ozgyNT87fMZybjcr7UGrNzrsMzoeD7qDv5hgvWp2Y4qQb2FGG4YibsBcBRc53xRx1jw9kZTQEitsb9psP1J",
  "key32": "4u5Sjtm6drjAfPtJaeu3EcCpvFzsYKgSM7ncFCazGtDAKy1j5EA5egrazciEatkfT7FFiHo88RKpy7tvdoWzawyN",
  "key33": "CoL5hLiXn2xZjdtWLXbn5giQnXcP182ra9aJK7b97KBnRAuPxrSa7ohKkS7eoNoe7BbzxtZsCE2YbN2YHZbkavA",
  "key34": "2f58htNxEKwtfvHVFXKQKAhMzmyGGQ2KXPgJYW2cSbzFAAQ43b3a1YuPtdHbPosSzMY9Eu6f5KVxgPUdCVnLn13j",
  "key35": "4DWZFmxtQ3qpgqFyykvrWhnPGezmRpcgtipW2rR3htPKxqVpHGBaGPMMgodU89QkmwS54QSXNpHC5jftSRMJrsZ5"
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
