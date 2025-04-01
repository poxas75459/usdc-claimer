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
    "2QdgKwfHYdxV34J2yZYCbmf7zyPP1kNT8pTzSzApmq8DEoxgi2A6rrhJyECZJo7iG8QqraLqpVP9dgdAEJuB9ePS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kvNVhwx5ugm2h5NbsFZhHYf5ePbYgt52F2bHL6RGoiRpy9JHXcYGKNeFnh4apXxCzqEACH8kWA2tMPYeiFjvmRB",
  "key1": "3XNYaCwJZWegqhTAsXwXPnRosQgF16T725uASKK1D5Nu5YWFLD3LArS2WcFVkzMqxd7fx1vG3jc7if2q6m8sKJhM",
  "key2": "2V1QAH44mGYjwQmLBvUJ234a5117g3Dz74QX8H99ezumcHKgMLY32kE69P7E5k9rSrAFMc6uCP7sWZJFq84EgBeP",
  "key3": "zSXWzRgxnTLrXbQfgZjiaAwfNzGk8F3HHNDfKXtMwwdSgdkTQM9d8W8nJv2LNEpfYnrxSzBfns9ktkPrdVdoEJb",
  "key4": "VK5Q6XTifyRbtihSsgiPQcuxKaiCDdftNpyxQJQqFYa1JP6M1RFnwqZCUxm7qPGWJCNCmn854FuTKD7Akw1bm3Y",
  "key5": "YjBKJ28chVrXVZntCBkHe6FagF3n2MMjnBXy7S5oxoqsR4nzbp4GVck9eVPzCXALBZa9HqDhPnVeiJNxM2Sj4ih",
  "key6": "2ddqybp34h39c9qhW8R5FB83JxjdStAXxqJsNUyaWPJMuo7pZ19ppVk8X9iYB4y5exVTVjmAn4PzEDNc7C5aJ41",
  "key7": "2KUwy7eozMDCQUp1mmk8Vkfd6TLRiN4413sE7SfKofPKwDincLefXD79ySDKhXEZov7dzdYR1bLaSmoDB1yxkju",
  "key8": "HkpgwcjUesjhLzrhVd1xq96D5W67ehcVTnwrKk5PLqc8o1QxxnRy31mSREuMVvtwpsi7Uxq8hvY8X1yAXWWsWHR",
  "key9": "5KeRu6Sbr4cDp8tg3CZtftn5euju1npjGrtYoEatx9LLYJhoivAMC6cKknohUn3fVmgQeJv3AuuCvDgjo5Zb54nn",
  "key10": "4Vxgr8kcJqeLUyzcuFEbgcuhQyffuMvam2v6EFKoPnGLRQoJ3MzGNWkvpCF83DB4gLHx3FcqcZw3Zzt6hA8cGFug",
  "key11": "3TBdBHcyzYcxRC8t5GGgwE4AHSk9g5Mq3DcLiDhgBtmDg1LF5wdiEm4RnqsodzzujoRnL8BWHxKCyJi5uyy1Qtaa",
  "key12": "5wB125qzyMnwHZuRRQpcst3FDHBPoKZdjuNtxNCwDT32sdAeLNXiY93sQjM4FoqG3Q9UMyoCMA77AGuhk6574Ep1",
  "key13": "7RUKpEeyiQf6HpTThdDwqiBGuv5Kn9pYjfr2c2ms4qpxUGFZ3htPrqiHyAyK5sRpUBGMgKfPj7atKt27tdAaDgi",
  "key14": "3pcVLQLiCapV7aeNxxbiRUG3aZX6KBfV6SXagVqvbn9SyeBJhYn6kKqEd87J8kczp5rdQWyW8WYUMwyTFESddjpA",
  "key15": "5hT9FkbFwxG7T3zXmadcHGhrUUZHekDef7aqEEdR5ZBXG25uc5ZjpBiPYUNjbh1rKhD2RieLVXE5wcREAUWCSKFK",
  "key16": "4xm21qa4ynFus6xXYGdazf6hYdfJ41kWFk1XQ9imUTyr2JzAErY9uDs1XcXsX9yM77nKRiXiXxJEj7hGXmAmE5Ci",
  "key17": "3fvtuU4T4uWgdwCMJAHq7R5PAGrAwBQkTDCE3kCqWbchwSmuYWyUFLYi8RJbp25YVAb1cn2W6jckw39L2Z6f6pax",
  "key18": "2SWQh9Zb8hL8XmRtM2WAASXY2oNhcHi1DtuTcUWXHdtwDc7ddjsJAwufLNEY1h1s96ikd8AvBskcwQBwAbuiDS8i",
  "key19": "3fPsHJpfKzksbWFmRimkTQHsWiZ6hekJf9fk9qyhWfBbBSSSsgocp56JTQ9BGW1xPcxyXTVREEQKQpovXJuJNSDM",
  "key20": "2hRkPyRfqDyZiTcVAq3ccRKfBn12hxm8kHPgZDbmTw4Y7uJU9uLNdGpek7sZSMrK6gt6pi3qp8L4V5pi2tDthMhZ",
  "key21": "LxtntKPqpj1h25dDabQw1WnajUpwir6nox58JLawgTjG6aFqf2hx4aZH4vPbwn2heSDVcE2sPeMPrxvTWcF8GyJ",
  "key22": "366WQtNAeTvv7mtxvn57C3azfXonwvHWQy2h2WA9iDPBN67LBMKZeaXwSjoEFR6yPQkEzN5HuVAcTWHn7gjyi7nF",
  "key23": "23MgnHKrke3iUq7GzzkTktC7Hp5AFHevFzEdiXbRFJEF5y1q6ysy4etYZSW2kojwyveSqDUYHBV24VwbxM2hiGYd",
  "key24": "ZMCxbcWKq3doaaztQrJkShddrmYS8r7YNn9G7rEWfpNYzR7izZH2LrTgao9ogZK14CusCjCbqvNFghbUpFEGBwv",
  "key25": "5N33fVz8bgZU1dhTn4Y5w8ugkRUh3d99gHVqLuXTrasM6RZD6BJ2s7eEWnArK5mbcCTuSTwCNwXX7KmnuTQFkp6e",
  "key26": "fbtr4AJQLSjeqS5u4DxNCdSNdynAyUcqY155qyJNHNDtHrBLJrgj6H7ctgLxNQ6Hj8Ka445aAGRHvagibQbrNQt",
  "key27": "3ztnwxLYBubhNpprJfScZBccaAL3Hu4Uqe9Uo1Cfzt9GStuGsGL9ofTTdthd3vfpveFfyGkLTA7wuYS55rFs1W8v",
  "key28": "3XwdR9KUoES3DfHaWFujmwiRRNSbNpjvYA3miJVa9bHdngaubZaSu5Z2eUQJMRfT1CmGje8weE6bX5qssDHqtxha",
  "key29": "5ihophh1i971URj7rNdPeAkqTTLDiCDt2wdBvkNgRDj3ZM2rhH4mXU92bv3nDsA1owXmyGv4Frr77nzTN5B4kPkn",
  "key30": "5EuR2hD8ZDAkUK1H8Rkn76hFpdU8DoSZcM7H14vAqnkwuTLwngnmKfQ11K2xama5xwErpCVYmRiTegAxFT6AA6cd",
  "key31": "zvewkwY3PuWbWcn4E7i6hjbTMctV6ew2XgzCc6iX1cBzeYyTgo6MHQz7WTLjevGir5CqjDPVzrXswCDX9Ab1Yqz",
  "key32": "4cER1RBvhD38jt5n2DDtBYjUTq8mNm2pBK5URB3yrK5QDVpPQZfcPMh9fsEcymkeRkRJvsaK1npn4eeQRVnaXJBr",
  "key33": "21VS2KhC1zhtRc2cFubdML6UpGTp9pqpwoSBwt3hqNm793JnZCe6AgYi3Vrg8txJZG7q5C8h1fE9oedFSpJkzZCK",
  "key34": "3c4gSfF8ULLb4ay7i544hdAdYx8PRUtPv87PZTYFs3155NtbGeyraFqcCTHVFvk4RyqVhChn1TQfHVZKovui7iX6",
  "key35": "5NWjUvfJg3HTtKh5FbBKqEgMTdxFKSd6JLw1Y59jXxHj5VRjqfWzegwobH1Ryi2x4Xk2MMjYG5FmqNCrk5deeu1x",
  "key36": "32emVVwzYDszYzwm4CeS64kJJfqE8SuC2g7qSMDak65fbLrwnNTwbHcf2Ltzimxh4P4a2Ws9z7udL2WC9YsKVamq",
  "key37": "2LSv9empvhL9cE9xaDqk7Zxmmmms5Tz7NX4UDhjYN5bf7yTJMUM88GvW5m4hJyfyyToFGrSEDfWoxpeLuivtNnQc",
  "key38": "2vpg63uwgpUFokRAbUgcBhDSbtREz14tBY5NmKzR9YJTq9nawtB1TjzFi2yaW1FT5rUruerJREMT8iMoaECvamF4",
  "key39": "o1puZPrnfJd6JDdMGLRT5wVmSdi98rbgfasYdM5cr3UBn8RN2U6dKSW6qe3Qc4QrC8TZvecX4ReDw1CbdwLmT7x",
  "key40": "2PmQjoofEiWAo3MbSbPGKnmV4eLetHjQL9NRaWyWgR7sebfZzXcEpjtscAkiJbgFwX5XF37rj4HfLrebVcH2pQAT",
  "key41": "BG77ySdyaCWJaM6FhoT4PX7op7WUjfBoHNSc9E1WQhhbdwLx6Mss1D4BX6rF1TSzBkatAPRJML3at99mZvZiL4A",
  "key42": "45k1xuHNH7T9DK54GwQfniwU5wUYqBTzbyGefRFkETyhnbvADn4GfThib6JqhxfKumz4EH5Gh79yvR7tG9fLx86R",
  "key43": "ztRaPfxkXM4vA3bhfFHfhv1RDHKPazZkU1uNe3oiJwKNi83HvndKJbeCE9SpcDaAKxkBmzHqyTuv4DkF3v4C9L9"
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
