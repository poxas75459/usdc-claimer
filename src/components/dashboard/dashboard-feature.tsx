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
    "5RPdKFWmJdfwaP4L3oNkam1AAyBdhWF4erShYNPRoRH19e6qvBnVQcvTZzWWZqJtivNzTVbtfE3tgPoeuq3SFUwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k9rLYkf5q2k2qyFMQLycb9YnKfzSxuATphodJoLuKKRRu9XwXEfBbopKzY16ud6dTKsVX1TjaaX6LPJEmJABWnF",
  "key1": "g2GWF74daAVwKD1ZQxVVAyCLWJkGsmre3uso2r4fQ8mPjEEQ4w6q89dUA9BAwaNTPWXvi84dioGjLTQ866xtGTj",
  "key2": "4ks7BHu1CDrco6wYPL7CDrVmVcBksfCWogmj6gKH1mfBN64CSZCgVShNb9ghYVgwwjq8iTGwhqWAytDeBy43xrBf",
  "key3": "Xu2BeK8gAedgN44VYQSDS2geP1UQBMdYYaEuPnMB1xoTJGUiZthmnk3bfamT6LdNHphd7HRrX8XDHehW6RyzvPe",
  "key4": "4Ghk9Dd2TsXVoyms2mYP8AXd2RYgXFt46HrvZU4LK4yMzh6rgHPEnGk8B6Bug8RuHxs9AYqVTykTAQD5D4mo6P5w",
  "key5": "3YMFJMctnEDoUaTqLErdFu4eZR3nj7HmYikabPthheRhRikc4UJs93Pxdb35TrebD1NqbyEhnrMjPZ577WEcJM8W",
  "key6": "JjhaQFiT6xCEDnr6sM8NZp8U7b384xokWxT6s4GjYdrh5SoaLqxadhZhpFtebRe8oW7nyd4XGYjQGddZL33th33",
  "key7": "3eRgN37R8Jo27vjGtP6V6t2ju43ixRYBVG9HyG7gjhwTXWMqvEtE6dFtqyRuJyyLz3SC9711uznb94zeXemcJb8S",
  "key8": "5qVDGnCwhRCK4M7Kk9xMpSZsfL6RLTJr9VELDKLx14MqxJMxxGYHrq6vgPzNMhCJt4rfCGjCzX7RyqWHUsRRK7YG",
  "key9": "3r2SnRnmqBhG2U9dnamU7EwYMBYmUtjKwTBYe3a8usngjfdt7QD17dYrDaqkASpobPVPZQE1v6ABHRgFSb2wNgk1",
  "key10": "4f1NLUYmZXaNAz3ZQa2Gvx984fBEXqApYdryMhFvMfCDgmeX7JXEfDDTZgnabpwYz1pnucz23q4uUxgbj4DNoaHQ",
  "key11": "2b1yWZb3yNmXg73oZoEg56pPJnGnfocAXMJG9V4DF5xFB3Y5vY5e2md5iXRGPeUjHsZYn2NTAXv2upE44L3CCz3U",
  "key12": "3fJSN867y3ELuM9YoPxqYLzvj2KtUqYtzeCY5syo2uPXsPmewf8TzqTbe8hXNaFTB9VfU1Dw8ix7rYG1EsrTkYPy",
  "key13": "4Kgf219tLuNDNYMue1SqW29WMivsoBKNUQm8Gs4rF4sqJcYcThAUmQbX92y3qaTnTDsRQQwg9YW2JJCkJRgKxfq1",
  "key14": "bnkTpJEJ7e5dWMwjdjrjLenBhA8k9EK2tuBvkDq3C3uggr2qUsPXE2aaZVeEFq9RJrZVXS6szwK2MPfRsFc2qKv",
  "key15": "2ofiqRRaU36N2DS4jSvM1nur9NshAGziSuh3k3sjjv1KeZqVoP6KTnK5LGPJPT7Y17h24X4JmhVKNaMDztRjX4no",
  "key16": "5fdTJQBcv47wTvAaCvuprk1MhD99iUjRYnALa3hdFLD4t6KT7BcZMHXRECNvMbJAhFiePtu7yznAu1dja2XpPVWZ",
  "key17": "33DJt2R5JKLvR77MM8UPMcjGVMXsE9pZLvk192adFLe6DLPA7y76CfUM4wqWrbZAoksjmJ95EhZsg2FXcUrN7pYn",
  "key18": "2DHUqyseG1sabLN3fy7s7q8VTd8g6Adkpkw8aAWrmyhdoBDGvajSaYodFFxLtrmN7saazVBTfZxmdBeuAVpsnn3n",
  "key19": "5Y5kxg7bLnZjXDpcozkg9wbnnFKaGiUiwtUWSVxNJhUA8ysYVsTBMq1iDu8CTAfoNY2wQHwUHgVQV9BuXdp6RgB4",
  "key20": "4gx9YG2gFR7vtCaL6VveYcai2PKifut5b4ebwVryromC9yREMCY76qG4A1Mhsfr7j3oJ5vzzU49H9dWgLjfn4Bmp",
  "key21": "GpiKzvKWXN45NmKtGtodtJxHisbwBrqYxwZB3Gyzi6trNn22sVQaLWPwLPpbNCZFPnXHua1Vz651ErBjJU6B3dd",
  "key22": "4fTHjKgXHpcQScocSQHoKtW5NuXbQHXz86KBMXwxvUN3NZGmP3TK1LfMZMfmK6NA8cBBcMwPpobWrpZxzLdwjnRu",
  "key23": "2acVXSsJxvVkhQaWeA33A5vsjfniVkqwnZXWCYpU8A2JiEozRiyPgunBusRu3maSFmV8L3evkPnq2184LhrexpCh",
  "key24": "et96itxaCazmuentr568ZfX8baa84f6LmtFz8z2FXTi1ntktbTAannVHr7hyQHmtvo78xCst9NyWMUajevASZTs",
  "key25": "4iVuBPyEMrwEs6V741om61Rkx9sSRayr66xacNdTkCmBBDQfShFdL1t5Sd2rRGway9NPwg3KXLDVNUd8vhKqD4kv",
  "key26": "2Vywfwyt9TwBmSfZvr3ZpRY8rfWpNbBaf9mddu6Uj4qZP5ehrCkP9TgtVV6ZLqui5QBPYAvVCRdhuixRCCGK4eVL",
  "key27": "5E7WBABv6RxWR8daGvEcbLCToA5maHkiz2pUAnaLrU1T6dcvq9sNpWSjw6wD5G9NGcMtS1mg5FwSW1Gy8N9o9NAc",
  "key28": "4Wt2W1jvQrNqc23NCaQUG7XU52dnx3uHKFATRe4JzeXnWq3cnykZiFKnRhYWUSoGLCxf4Lp5Hs17Cqk1THoyqMiA",
  "key29": "3PqNJ1PyFqnMmo4KEursnvCMiustqsEDP9y42dgrsNJJSi4FmvWMNdNjen5yGJwGQTNaV6wHpgU3hrfH18TDLR3Z",
  "key30": "4uWqoBHZatSjULYezdRHPCAhiSfJRjyXyGPandetYZ6KAB6nvoxeFVLQRdTTWiDrHvijmNgQdRH3Unz5F3bXBKdP",
  "key31": "cXMAxi5dRxt5oEMuigX2sCxW3BZLMkf9UJPsjPi9CBK3eve1RrbKzugBXRUoHdSw5t2hgjba8JSdavq5r6v7wk1",
  "key32": "5uaJ9QFvZACM7okEhMf62bHRHWFZXcziZxhx6Zd3DDbLTVMeSHjphPi4rrc87Qonmt64M1m1XkhQZcDCuCWMQbgW",
  "key33": "3941zg2MWRysVQVA9fG46Bk3uPp2o6FQTCkftRa5w4tCexYMMNjjkrQF27cw7MYtYv2QNWyb83j1fDKkHSygKKux",
  "key34": "3vwktDPrGsWYmnwM84yF37snZ5Nnhb4z7Q7xpB4ueykTKx1xGhhxVVK7uT5QyergKepQZDd4x5nPqEvhSE2tKyT3",
  "key35": "2LMp1iVWEXSM2XGbCJAVFh6mcVDYzNfHGGsU1nBcPWWkpt24DFhCd3fHrycQwy6ycuwNEmY56BXZtiReQMHBjQYB",
  "key36": "RmGyUrjdwacPsPnkTFzQwDnTUYfcCG1JQxYMWBpC22zmLQB1xwSLszNN97a8DFZipMaHcABYG5SBUzdoJzPyyXn",
  "key37": "4WmAfqkixt2fmZhTiGPG2g5FVAqE3EQoviqoc3Ub1YoLdAoBWZYu5ksdETakLpDiHVPqypacR4zTFQgJhBV9q9a1"
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
