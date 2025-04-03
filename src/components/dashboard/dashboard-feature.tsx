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
    "4fihajNiFy8UPxtjwjJjkFVoYtGdcP35GCp2vznFPWnMddsHwgx9JqVDURG4CBdQm1wCXeQng3fhemDCxQLonPFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gfHB8xVxiaTqpm1g8ekMwKaQ2GsyzFQDGNKaLmbTEomCSynFPidw8wvxAXshGGJ6BmLLCn2gWkxntUZ7oYYZVw8",
  "key1": "5oQsD3RRVBZaXxmhKB5gxBGMB7zTMkUJjMNADRkLFScgPyPGEQzJw3aCz3B4xPembPB1BZciGZ7UsXDm5znzuEoT",
  "key2": "5ivhE4sUCcehEJhEdoVFyjMTefHn54mmiEXJTk1R4gxk7Za1M9saf7kxJw21CsLRX8xTYq5kS3Tdv2dwT75yKMt3",
  "key3": "5rgqa9siAtfvWnhGtd4uZXsaadbkCLUmPRkT4mwCUuUfZ5Tdbqb1ZwrYV11Q57L1ovojdsfJLZyTaUZDZwmoCRXr",
  "key4": "3QdEqmRkJR2YWd9HCayuL74A3B6E3XA375oqEDyj7hRezY7Z5PWj5Ncn5ZY8hhSZtQg7ndBoYzedvWuiUhKPYUXU",
  "key5": "3E1TYG4yncig47paHpDbR1pLxpwHPPcTeYREH9P8aRdfQCAxfWbWGbkgAdqQah7tWSryNNtRwY1AzGuw4s4CFMu",
  "key6": "4uG2BfBYSG2Y9yDUv7iymXYkjhABD3RTfTYdd3kezRvzqf7PxkEHJFbP7aGw1Vv9x9jJaUX5MemeCbVV3sk7sV5o",
  "key7": "3FyVeefunzAoLAApYEgpEuLws1aBmEKZVFuD9Jg9aBmAL9o8gY9JMXHjncweZvm8btA1TSSsTj2gXBAyuUqrQ5hX",
  "key8": "3muFKJNB628i9Cd1W8fXsYFgNHMa9zbVQQZxidcQ8R8xgvJj2vWmZ86J1taK4meuSHFNGXwpRERhB3ELLxR6aYnX",
  "key9": "44SXgHo8AoRtqaKF3YNharbaYMPGtAAKyBBgJkK4dnKHGHmyfhA7tZR33qWPzc9yoJJEyuDqqMnqk9PSxMC35hL3",
  "key10": "3Nt11Xua3grwvntySCqwXRybUriFbzJ4tCiXCSGHny4AYJw8XSTDPQFdZN4KgWmxcWY7YqQ2rfYe6umWnVhdZwwq",
  "key11": "52eLQmmsyfCZriYfUV8KizGibnCesDeTWaEwn1zFbqypNeR77rFmz9TEvHWQCMgGZ4wYgJ2MFxocqB32XFdGuEfy",
  "key12": "5H9SqLC5ewbV2pgmG41XXWMoA6FKZhU877298nUBrSVS2KmaShwFFqSYEdLM8uJCbsHEbkvDf3qo83UVHHsbA5gK",
  "key13": "32XjoWAWVio95DyHE1ndkdYWRWpS9D2UUAumz5UDZMWVFhXRSogF3pYHC3aPaefCZnu3exYrbwccHtfLtfQ9UPDK",
  "key14": "5LBW3rHRhzPsfZLWH9CozopkZ7RZmnmJmqoDT8oK2Hs2XuFCGtnE5bGrHKGCaqvzXFAFCrEKpsYs1HWEPLDSsKXG",
  "key15": "5TbWLP4eZfWRMHE1N2Wuzkoe6yNvgTBWm7BJd5aw7VWkGYC1HeLVZwNYmAHMjqP8Do6gxSytYgaQtJ2kGzeJGCXS",
  "key16": "2qCJGobLg9LTajdspibRcSJ9HFiiFXKyXUHPV2r8jJMM4UPg3M9ZT2N99q1JELUUKKPKqN5wemWkLVM8QNeehcAP",
  "key17": "3iusU6WmJXrC5ftMuVBFZCuwGUhpV5RGgPnk6eaAT7JgDYoxkuCjhdtiNs5BCeeFmxQRoUdMNiJpXntHZs96f8Wz",
  "key18": "3KkZDJD1Aa3ap6DKBrJC53gn8FKaLZUPGa5Zga34kbZiCCPJnQ8U85i3VdimCmC8rPkvLw36QPa77rKRGvJEiN3R",
  "key19": "2UnAEZc9z8EAkVsENWxYKwfp3rq9tsHYz4XU6jmDokcDNGLZ9sQT1s2eWw2ouzio2Qpefu2L5oxqYCNAbcJciL2r",
  "key20": "4ij9JegmPFHuiAwEvK1dxe1Kp2T9ESGHa5LJSsYB6SYDtgfwsPBRr4GDyLAXFrTasUtVA4BW7hGhrdDa5Vudeczt",
  "key21": "3YzpcvazqMMj2R9o85Ht8rMy4PGj4jp6FGbCzwzfoV8NmkdTm4EdJKRNrqSCqDvz4BxSDUp4hF5595Jx9n4Ky1K8",
  "key22": "3Hp5VH6ccRBHuxyWTjGYXEFWTWHuq29VTtPkAKwCPYvX1B5Y5yJpxUVDduXXeF9RKSHGSn3nz6BMJpKJKikc6bZM",
  "key23": "8PbeD2n5a1bhBMwu3bgZV1CtiD8up4e363j6q9cPJjbLxpofie5UVj6urk552VqmmS4UWYKmhSCwRz1aSnM35kM",
  "key24": "7kKhBb2caJbBammLoCjpkmgPaEMXgtdRrGbzZJwUafZmXrTPm7ew5uVSxnsW7N92ZBn5FHpVEnYXuarCLDQo26J",
  "key25": "2bQb6wKWRi63tYgQGA4bDCrYms3J6iLdgMVbNJfCxivNuKHiS9ehC9Tk5p7YZUA6PM1wyBsfzJ2mbBwmDdxxrhnE",
  "key26": "36XBkWVLAgsoRJrKvUHtqwWDRfKoiLYaTehmnJnXYxQoh8rK1ULUhqy3tPo2YJ9Q9pGb35mNd3mBYuWYS36AMkVW",
  "key27": "k1sEbZ1ZYRL7NccKBdk2GiEJhWw2afENuVz3MA4mSB7EgNcK18h8fgw4oqN54w66soist5Dh51iynMs3joLhxpV",
  "key28": "4TbnVs4xHapAT4NPsjFekLvLSKRrdd4KJNg7FoutDxNuxGHH16fbNMx5pT53qwC5pLEj6J8U3BSn4zQD9uVGNcXV",
  "key29": "37YXLrXbffLSeuacWUD9K6Ajas7iCUHS8ULAD37m5Wnav8UgpwtYAZewR9xcjQS6JrPucLsZUtoyzy6wVFnsepxL",
  "key30": "kkKsbqNM84Z7MYc7swe8LYiwtcuqCAMABX14MhP353SEqV7pjzJVZxnvKThYK3Fddqx7pGUMsejtPutEpMWECof",
  "key31": "33N9GPnZ9PEgsbqRmf8Gjz6EavG9GoTNtspYxy8VuAQqyBKsX7ZDezPTZfPQfsgkmPHM2nH4hj792waJEZxZghnk",
  "key32": "4siWPVmboaNoJft3qnYLLR1dA9ekNs14jkfTabEuEEKMZJWSZ8om8Z8WitYMMhG2JVP549d73P8uZAugeBMzQU4Z",
  "key33": "EqPWBwuYEEWgfZJpkib6HL153cRPsyPdLM9d4d6N6br9cRiQ6a22DRnc4iHDUrxQ3NL68ne4CFPNWPJbxVqQYA6",
  "key34": "2ztykRq1tohyMktkDNuaxAzc4K23PwncaGEg87F5ykjRN6uSxn32sjYD5w6EBozF5Wicp6u1P5MWca4YdzuhVW1G",
  "key35": "5c9iZawu5sqSA6tXyJGNFzKRkYop14xbQKYizqpXD9G7oVL48SdCwgQQomEveg6y1iMburbg9dnLrQRoYTeTEnfG",
  "key36": "3ViQVTdqqjrcBLvmwgiPJji6MF7SenEduGQfQfLQCTUwZouBNUJHUBXjke5FCdSH54nFJ7yiVux4vffAujmtczZP",
  "key37": "4LLXsBupCczq8VhHePzH318CZTXvoVj1Bj4MKEQjVfRyENbWcKVq8KrzaqC8VYZiXogns3LEsNupJPL33X6cgNL9"
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
