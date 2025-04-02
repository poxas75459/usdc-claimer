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
    "4QzDrtMi7gPVw6qoaCafftgfW9HbXcXriKdMAkz3muXTaSK3QFt5xiVST9KY3A3H1gFXSxrreLFsYct9bQ9Na8TZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GASFdxMMxyL9Vzzvoy43RdV6svjZxxQrRUz7KhUxo3em3isjJCSzauHphgw8xwhGXWxqZpTC1V2xBJCWMffirjd",
  "key1": "2WAU946m5rwfSMbaWsVDU98owd8qFNoTJLbc6dArwrQanAaXkaVhuv3Gqivf6Q2VdUVKniFFgkS4zFivWZtCJfoy",
  "key2": "3KNz42aSh8Hz5cQ1CXm5hB6E8ZEFT4guDZmQ51QNmsnXgwTP97Ef3FoT91VUA1kZtuqJ7jCLEBqCdGnmrjF5KC1L",
  "key3": "qiGAbgCbp1q9RVquj39oiT4GE6vJfP43jUbR8xR5VWzE9KA1kiJhvvcrpdLVor97W75YkZ41yZtg8cETWBJLyV3",
  "key4": "3stMnbWW4MorwNAC5PzzWxaEj47vZq1g8ivsddKVjUySR32wHiKWanp7aE5wmbtQJNwBqj5qVTN6SNsyTpLEC3af",
  "key5": "fHLwsVp767qBafEhDd2mnoGatiMY4GrKX4EBUuwHET82BBh9aCVCo7WuMxPZ2n2oDipmVhURQM4kHq5hppD62zy",
  "key6": "55R3F9kfGUteqF2Bs6hXmCbuk32dbeKeDSPvusikPhVL33XEyNfGexvvqwMvpSfF7ZjkF5UdRqybY9Dz2uDHHiJx",
  "key7": "4JhfUKtSvSCdG65pwHgLCZN3WuaQ1cQHWVLNk5giSq6yVHs5AJAvktCUa1TrSSkBRyLm259f9irB8S4hLNGJF8mZ",
  "key8": "3Q8vt3Cno6GgZSEgXYeEkH1JcRJh454GEenSgARgCGDLs53AF3tam9Dx283A67ARoBbT2rWqybWiouzqgcoZTXaK",
  "key9": "qiNp1cXxtsDkPqnSCFyuebosTJ17PHXxtCuy7hGKQn2Muez2oGzxNtSpFZ6j9cdVRgcc3jgBUhk8tSuu6a1QBwg",
  "key10": "4ZwK8VgQZEKvGHcdB7a1kpeumebvJ8EX83mz2ayEDXJBAJafpY819j4CwRGPw467E49HBWqXtETzdB8KpVRzkWFc",
  "key11": "p1ZvurzQuXc6yywoq2Xdbs3XC9gCpe4o8ty8tBt3cEn2V3mBYXEQZGcvVadNThx4UGZaSAD6ymaU3RAQCygck1i",
  "key12": "2wYoc85ND6Cdy43bfe6yNg38ti9vQybDe8zRHpeuhABpYbAH1xrQaZHRF5cYAhYih5hBWtJHSddGHvjP2dpSkrgY",
  "key13": "2hKLMQgM3ymDz6KvSv64bcJUPhBUc1yHEmm2xjNGAdKAeAPGqgP3P2pRVvw4ZhMxJfc9UKAiXPe4P7v9WnwHx2Lg",
  "key14": "3CdVNTkv3TB91CdnR6pLLPonZnDnkgAortLXkqeWcoWEDTzqiyR2aCEgYWX7WTWDe7AVxKhXxKPNN9Yzf18qBtko",
  "key15": "2d4BUQr2Em8fjiJJHMAZ8gun9HAAnqaXDhAhSLdZ9jYvs2A9rsdv9rqhPtmEtDEnhBGwqjCDKqwX1qswhyEGdGnw",
  "key16": "2SdiPKkAGXVhLqDvVd9YaGWSY4GZwwLpM7yKmuZrBXtAmTyBG1oGHCGGjNjZPA7M54ok77RkKxp65TNmQeYvkeAX",
  "key17": "WUTTJVY2AcpL2ffvv8LNrTU86AQD85LK74xn6PveCW4sZ2f39Tx4PXu31jJQJ76hwa1EC66KMHFaBKDta2zcAwQ",
  "key18": "5A31P333ihcG8K699s5wkJAwyCM6NMMKEd9cUrMGnPHPmEPEFfahX1PF5yEhcH2CVhpjJJ1T4e8ePMrtYTknRYb4",
  "key19": "NLiPHJHM13EHggFyy7WSYxz7sHzYVyUGmuGMUikhaYUMGMhQsm9xpneAS8rNxdNcCJ2p3raERJdHscdyqf3rvnc",
  "key20": "32zX6KaZaV23u7RfpvfEnAm1bvpQWVzFnJb7fCDYZCBGgmk6raCuUawgBgVjHhT3jL3iDqUFV1P9pBeeQxYqUE8A",
  "key21": "L6bz1e4onnSkTmVtL3izRKLyd19X7Dc1p6farv1B2Qq3Gvh6x2UtzJ2UhSv5CC691STCDTsGLgwKfvCgpbrrduV",
  "key22": "2Tgtn2XoBQpMKu9HgHo6cErxVfyKrECsgtmw2HNWgm4a9XAjBeBozd9ytq3fPNkrFTSc49FwU93qrhBcMNs7M51t",
  "key23": "coMe9Mes73srvs1dEnnoWpxYJ3yCCvsdYVbVmhmXi6Y9Gfagq8xKj5W6nXiJhwDiJ9FNruqwYqWtbND3AHwMXz7",
  "key24": "2bCqh5jPyAFsiT2nVg3QbHKL9JE5AhxgWuLBaVUyDuD8yUssrEFWSCyriHkf9q8mJH8zaoFAR94T1X8JkZkwX4Y3",
  "key25": "UB2KzfA5ravvNK2ffzbsL6y7rG9NAuQskQk2ZDXtXF9xnufjDzgx29NsibcMu2FpW1byAaFpALW6fuxtZM2xzMJ",
  "key26": "X3Yf4GdCNWkNYtqkT6KVm2iAdEHRcd4fWz6ChwCrQubYsr12AUM8RdYfLByiAPZGsRskCc86f7fWuE6jip6AQ6d",
  "key27": "2ujWR9NuQh4P7Rnt7pkeXv5cFP4GLokzQAywiRd42SPZbh4vsuBtEVCJxGSmLPJUSnFXGskXpNkgQ99MEUNZ3uEo",
  "key28": "41qYt69RYXZEPVVUYZHxanA1Wtft63yv32WLu65A7ExHKPPDQyGg3e2Fus9wkrhKSnu5TFTdbNCiEu6sdXHtr2Fv",
  "key29": "2Mw274KFuj8A2e1Qc5m3JiN5emuLxfDHvaVif8isfJ8VPy2RdTBf3q1rzdrtEjnopQP4K1SW33Mpowd9f8oyAaUT",
  "key30": "4jq3byLReWrvd7ztg5jVju6JeYUg67CdrQoB9t79Ado8YYC1QQehaPNTGYd6eKAToaWFUa4Stv4ZyoquwBFHdRFG",
  "key31": "2qyd3oE1V4QFoW3SR5LzbBRHabMSp74TLTdhhgchCdoNusarrWcHTxKLDU7p6iYHJB2dFgpMmXfHmF1qLXvps3Ya",
  "key32": "2PjbmbUc5UahivMvBMLaoZH4KFZJavPgW5rEeGwyHyhN4VoMogYyrCmAWGuC4hL7sG3oVE3yvEcNQqgy4t2hvWDL",
  "key33": "4ocNsHC2XCJtvyDJf9NyAMZeYTcQbQzaLkDDC3u3gFeXedWwtb3vM7qGfNYR9UCS3hxwV9BF6sjNU5bAsXECWnnF",
  "key34": "2NBkCh5aDPunRSH2zfDXKAn6YkfbTyyXA1aPw8dXTaNC9W27eeq5wctbz7ak1JkNbMSLhAvSMTcs73RuKqptAYnk",
  "key35": "33Hfn2UxVBu1kQi7oapTffs8CjTwF1hp7tMVxdWE2zStd43K6ZV3T2VbAwQ2AhU4K523oPjiDHPvU29amzu1piWY"
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
