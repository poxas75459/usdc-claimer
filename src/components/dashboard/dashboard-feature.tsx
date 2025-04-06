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
    "yVQLZxf8w8eEhH9zuvkyxnASZwwmGvUr4j7sbqi63jP3pXbNWZVDZoyU1RwtiiBcMNxNAGTQ2DTrCTRp3M7H54q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56XWzjf4n6v6B9YpPE3v8TwFxoaMwwQ1ixH58JCJJdJAXznyqZWDPZs6Eh1HenPEjngQQqByKAjVrFaYi1XeRftU",
  "key1": "2TJX4NvyXPbp3G8LyzcDb76WkAMPb9wS1NBdZrJfrh4uLikx1DAtKEFvgrz5scoV83USwqndzgT3SYyxBdMaRs4y",
  "key2": "4CPuRdYNLD25cgdEARfAaD7vbKqbRDRXn4nvpgNJLnLZb1hKDBSHzarLr2cm3mFugJBmxWHDxSPsKMsbZ2a1o4FV",
  "key3": "53frugLW9USa4ukhueMzSXxRzWm8yXFZa7fKcn46PwD1HqLT3WDUL8FSpYNN1pXGHW4JDti9W39p8DUechMHWVwt",
  "key4": "2QsEDrEaKNRPmaW5fTDoC91YkpmNyoHzisb4F3kyTdPQ3c6yNfbBmt7B68phLSQSiiaRmspvbUgpWKc9JCQPer3C",
  "key5": "4rnbBtxt6P8WVauDrUiZwJmMAqvqHZmMQv3jQHqGfty1jiJggwZ4fsxvLbQktyCCZM3FjB3wxK5DLsdgrfmcng6g",
  "key6": "qmoiG5mEDPUt3ucS5P6KEeUM1uo9gT6WzqEemD4vnvQJYpWrndvSJ4ZHLEf33ajg97B3XXXjE6nqNLz37SD1z6R",
  "key7": "BXm1sFyhFxxViJB2BVGivhaH9UajTrQK48gD9EpLRPjQo5BbyecQRA2mkaAxmCYvYoy4f9hWNxkwXJdgdz6kiLf",
  "key8": "CQ4T7Zg2iwcyXmZzmvBWa9uZ2N2NTLNLWXFyAKZsaBtAzyeb4utanG768CrG7eeBBCC9UTfsNk9PrMSHm7mdbm8",
  "key9": "My2buPhSWQ1caUwuez6weAYdpuYDsoRdvXPNwTtVTckDHc84Mn6oHbXE25BrCZZ1UiTz1HBLgoE7RiQ1j4JRwAF",
  "key10": "vJrWDPvvawuaAujUyvUS6nDbmarHNPH1cSTtYsQZB48WBi4kh9kbCQHkax7wBq1Mnja2eZM7cvQGDYSjsWh6hTA",
  "key11": "2W4SBy9jXc3tbfyQRUm3MsJyXJUrA3oSFBDjoPFqx8bgzbXULvHBeuBMNU8Metn797hzsNPJNHTgLMHZC6ASv2Mg",
  "key12": "23HJJtrW52GcZYPwrzCnF5x85w14BLW67Kns2gYHsZjA1V6frR7pVuEmL2BmAjpyfSHNhhyvNQzZcA5ygQW59MYL",
  "key13": "3Q9cT98tyBTiCTbWx17ZybuA5nL1buALhLs6UyQTyqD1TwYBz525RBe8FWof6yten9mVr5aSDKNJJxAfS4QuGksW",
  "key14": "3ptgTdi5QmMgTyDsJZxKVd4gWMQzN4moenokd42HcNZ9xCsyR9RwE4noChbdSGCdsSPWhKbVLfuZRYU2DpDkAxss",
  "key15": "3j5gcW6TViVDArMQpJ2ezGYURsBJZJaiXPq6eBWMJuxasF3gYWP79kCgy2Ynpc3mL7NRCQr9GYxYhRWqqKGCoHJe",
  "key16": "4Miu6n2C1XdtEivPuhAAdgCoQxCqMtzEtMC9hJKN3NRxmTuBTDUvPmmcMWmrskNTty4KyVfsg2971rCcsojaYmxR",
  "key17": "32ChSLRsgoD9tu62EDyuaAN6KQcF42w6frpeNADr9Ku5MZ5TnfHRvu4WZj98gAac4kiPxrPw8LWopLtW3And9b2H",
  "key18": "5UpWi7ENv7WBLs7PujAJm2aqMJUy9eNsan67WJBoWBP5J9a7RSEqLYWusUjDMCrgNS3gLkVShDZiyUwLXqPqmLiD",
  "key19": "3QVJi2p9sYwZVFzDqXNAgxK3tbkUjMXSFQtokfJuXSGJxtGxRJaCuArCQuiREPXx5qjz5gLtEfJhfwa6xhRNv4Yx",
  "key20": "4vnoEP54xXEzkyN4qV77SfPu2BJr27LdRKb6LXvNVy6tYXvrxatwkQkpQx2Wf8LKLwaF4PX4fhsk1iowD8PkmVaH",
  "key21": "31VfixJKuMtpdxLyATJnT7yPmwSpc9AVKC5hbt3f4tKAjsdtHG2z3YzhxrSt2tWqz4eDkYT97wyLMHpja2Pc43Tr",
  "key22": "5jdRGbeND5uHQR7HvZegyF4rmxj7WzZFVLrPW76A1ZtYzyhkuVrgs6itfptk6TBZ3C5HY3eMc4x9sSQ3po9yti7v",
  "key23": "2qnzKC81xTBLMkKxD3RfAHdsJAGrXUyDoKEmFearUmBymzUXgw8JFQqSF93tsif6nr7xxKzUydiLYun3FSwusXi8",
  "key24": "3szkDEwYHfmzAqcTdsy4FFtRBA1A43TWtLUcpSrZ25uf1FzyahZSaa7mXjNah4NAowMsnCUuDXAzsxkRCNY9H7Nx",
  "key25": "3r6HKx1DLeEx5TMBqgGzYCmiYvHEdu8zDcp6jAKqd4E8Po2gBvLZfWvYroBkhpEtpzjcfJyd1YLy6kYTwLjNGWMy",
  "key26": "3Y3itnGXmocAM3MdNSJ8iVjuXSKnaXNhRehynyci4sUG7zGquqHfTSVeKq6LZ5zaVYDxLpD5rWfNvqbx2EXTX8Vm",
  "key27": "4TqsjyjMijp4a2423ZDEsXm2zq8RSZAdGE1wBPK9BAbZs2GdX7zHRkCqE7Yf31DZjqEnKA2nQp3PGBj5fxfEpzMZ",
  "key28": "2ePLs5NSFFx658CqnqP4jynuAJDqweLCmjEDdBrCTawgTwN8EBUoTWKe3kC7DHYGwmxspDEFv1c8jBT9CxNhw8hf",
  "key29": "5X1FXXRrxAVYUXYr1aJBZBh2WjS2Q4V9vBKKDHeNcZ7oAJ42SfWBQ275HZvjkBMLztVEtFbQEhZr7CWEU5Ub8Esi",
  "key30": "3sTWMt9RynT5inDDQ5v47vkABvodoDVZBE9vNXjTmCR93rN9Y7dwwXBh1h2n5Yih75MJQdkgNh7e7ZyeeVMC4XBA",
  "key31": "29QEzLkAQGkQZxcyBEADVJbKNaW6dg5HBbfU8kEC1zPxHrZPk2DfXm4xRJi14RL5b4L15w8cW9jcHETBn7c3WEKe",
  "key32": "wfxosBqTc1hcuryconzGA4chdB29HKpPHiTHLosTYDv74xm8hTo5bZQ3rTz2197FEcddwR2LjF9Ak1q42Z7qbDe",
  "key33": "63bAsdYRptCxjySoSruE2uf2W77sYz5B6GLTg6hkyN6L6imTxHriwe627qtwgjALUA8NNniKXVuWdDyBoE9pMkBw",
  "key34": "2LQYZWyttpPb1WsJ52tJcrvDburgCfSm6WGsRDvELGuQqFyiwJBqRS9ZS4kXrU9HUB4KCRU3eTzZwkHzH393E7Jd",
  "key35": "2DJMhhTDvUdxdsSXpUsjw8VPhGaMhQumsK5EdSbrSAd2nrikBAcXbHquq1TkcgBd2d95YsX9cbak1rZFWY1XMsWx",
  "key36": "5CB2pWMkcegbFGgmYiAy9M9dHRvTaohwzrQnNn6o77CENYhJUK3uLtLJRJi82RjU2iBytVZxV144eBNeiKzZMknC",
  "key37": "1XLtv6BYhGXQhd992cDpdri1pCCSh6qGDjjkGbZ3WqL7Zi54NQjmSX4VWTSL212cW23qyeFqfuWUNvRJKzC6ZKE",
  "key38": "28VKzfeKRKBjFZfE6R4Uf3RDtiZ6uFWmVjceZGtfd8kn7kVcGeV33XKwcNXddNVDZMY5nJko2UnjPQBXjRDu6Vpx",
  "key39": "5Dkos4Mh4R9Np6v4mxpRqoFXUNJFYaVnanqNWrCHioKh29xNzGySwdnuABNrqFjaJp6npZEtDEQ8ZCwMa21URXCs",
  "key40": "5vQf8kgB1tygbEyyqhrcJeAuXx7abKETJ3tp77XGed1aUR6yD4P44mfZF2XJE2erqcJvj2T3P3yJeie79NGe21MW",
  "key41": "4w2vyo7sG6QbSGwDz5MJbUeQ6wS93e7eEVdRV4A5W2dLFwhhJokwNYmMP35xiMwLW4tvLfE98Xm7pFbPuiPPHMg6",
  "key42": "3V8p6jjmj18f8yMph5m6DMQN9qy2Hx75r5EHrgD4RAKG27Rc11EPjbNFLucAseLr77PoMeZNfGSvw7pYLWoGkcXo",
  "key43": "57eFPhXdMeHG2F5wQgtktWXTJNp7m3wwueN3YHvQKz3QNnr1DPC4aywKjrAxRebkp7H4V6D4B7YyRR79abr1HFpP",
  "key44": "4H8xw7BA3Lk9EY9rqJmmAyqrDu7KPFkJyuRGrhXJ7cwFhmce2xG4de8oggqNxPfufei7VZuVzZENay6U9Xsw2Cuv",
  "key45": "3XFe2DphBe8C8a1mv3zA2cvL83GkF8AnHJaM8Q4imYkWsW4ruwE4Zn1iE4fsMfk3unW2Sb3sbnTD4ABPRPLioXNp"
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
