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
    "29VwTnVzDq2GQt1aYyt1iLkNayGprLFTFNvvJQ7Sn3jRwEP3TNxSFgtY7kWPvEzsXSLtSjmidAjuncAx8FR93aWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41pSkTNZxhzGWxxXpSn4ZQPvKYhyJbagGNaEYzYfwwkCdHp8PsXBQTxihCvTQu8gHcsKtoyuFAXP2VMwcDeb56No",
  "key1": "61zazPdgVE6WZVRQg1BPhzX6vjnrYQE3CWACJKQTpXkKD55WojfWGnhyV1kJG7GSH6EuX857Py1w41Bh1JFQ62F3",
  "key2": "2NamHPrip8urwADXW7c2RdZu43DSs36dyCugDfzmQHRK7jNyun9WK8Mupfi5wTQAbX7L44P2Bc61p4aGKaSVxiJx",
  "key3": "aDF54dcBymzcPv5HmEdhhDMhnXKDiFmL9dghBXpiACCZZGLDtEAmo5iNZcYdzf3qZtW54r3KdiJdANWCPp7Pw9j",
  "key4": "4q7VDP6UWUS3f4tf3LScinAUDnsS6WBgDSduXYKw24KTP7UzzuspeJjR2f4q7E74RokimoJMUYPTw4uMVR4goFh7",
  "key5": "3wd5wL5dX4oZnZpdjhuMuR5x8EEDeTB7DHgu2xYscSVuFRdkCZooSTiFUYsoHeTyYkn3nkcXfmTFtMwMjVNw2wyF",
  "key6": "3o6DbpMC9W42nNCWW3uzbMg3BxoMGhBnY6wcgoNDosR612YCuvavirbw3cSVLzauXKA5jGxi9eg4QdRiPpH32HfS",
  "key7": "hvGwUgDEFGTJPJzVB9p3DecN5bQYZJ4PfXzwP4Z8qKcJbWD1MQ6zTmgkbaDxqimHLA6G9EaHhwviLMyTkqPD4YQ",
  "key8": "3XUNkq53onr9o4WpnSCxGnZfYEUfPd78nHFtvBTUUoEKjaagUddqRKGEsCQNWpQg1b8cYqtEXoYQUvmSA5M3bUtQ",
  "key9": "4psZ52HUWUxasQbQSPi7MfsMiKmzLRmvtM5DMfmfGYoFbeLA2YaWsScozoprr7ZCPDvCsNmbJEiwfiAT5p2yTgki",
  "key10": "FvcEsELAQvp6vPKVVNyeo2neJJGpzgQm1tNoLA5T3P87HA2YaBunALypRkGiHYVaSABroJaTYzKtTuajiQjejNq",
  "key11": "3qMbEqou6xZwGa3a56Mb76Tjcy7o8ugiuCk7fsx8BETRxdqWpMj4DNVuQ9a6bABdtbeZn8688ZADYqhJu4Xrg13z",
  "key12": "4rTH12a2quFFc7pTHYtj2KNB8Q5XKpEjcQVbWHWuJvv7vwfKDP5etEfTEWYbRKs1XS369nAJSkZbxmHBFDKVnCyH",
  "key13": "3kXEpECqkZa8tRtc8cJsQ8xZ3MYMCNyghLHDLX9QgBdsAwxQsVjkHAKN5pCDS3WRGFFtYdowJdvg5z11txWr5rBF",
  "key14": "22mpr39pFQYFffi6gU2MgXnn3c26NS36uZ82v2ToNUBAvMxd18oGCaehBYK3tN7J5ti7Qwvf3redS4auyZkgDKeh",
  "key15": "fEp188RzQ6n474Y2jgE98Hm2fxZ2UAqXjzVjANLfncZHFyexMXm5Woh9k9Fm1eDMHBkvBDD38xgsmtHBU7mhKoF",
  "key16": "3rYLVGxMskb28ddtbB81FVk7GxwoTfYboLpTrbze2X1mQuHCf6WqpV67srKffjTEumbwh5Qn237HvucEJvJ9VYB5",
  "key17": "3oki6eXEvFWEQ1vRx7YFn6CW7hx8mjo1UF9qn3BrjwceNhmvvLwAAyXwoy4dG14JHoVC7yLHX6HCszLSXcsBNVzx",
  "key18": "4SrkMBg2CZmRKcKAA5zvEPoPBrkJadiikjNUpDAkXPsG5jXLkmf1NL6rfJhcC21CNe2NQSjNoiLdqXRVzxVpKPes",
  "key19": "2eebvmAcBUSpqPare5CCi41YnK1t4fsKGGEUq5Y8AFiY1FzgS13N7spo6nQy8nWfZu55CRiF128M8sWTo3JNMWyp",
  "key20": "4b6V2HsJ8zLwH2wJJJzVBsg71XCYidqKW2jtdpTkB6CqHwzy32uYuUnsnEMagZXg5UWkMQxt9WTXojFcCTJbRkv7",
  "key21": "G5i9iMnRSeqzByAmXRC7hYnqAZCdMETaAi4UR9tW5CVnPrn26eG6xuLWFuq4zd4bfFKQKpNjuSGaJjmE8nQ2qe5",
  "key22": "HeEMcEBz4jjpMjPAvENhv11CBhornqW5YXDd4aWVkrRqzZWqe2scBNHTuUd5jXLeZcbQjFvDw2nA57qY8wjrj7t",
  "key23": "jXtA3Gj8LGTuQy9U19A3eFVxUUvvDqmDkpU4KxeiQvSV6pDcu7194jAzvb2g4QMfnwoPW6XkWNxEXiXfXZS3hvh",
  "key24": "4Cha9MMGdrPydUzFKkuxxtwRHgAozXuzTdzsyqAh5Nzj4Q1LHpEjWK9SNzN6DNPMimhpYqwLH1sLnLnskisLVwbM",
  "key25": "5yHYsfSA3qaBjtJudX1CuxJ1tFUVTNnw7HgDcSrTnFj6SALbxTMtDQDsGDoaUh8jeAkFkSk8FpusnAJzNmLnEWLv",
  "key26": "57VsJK2UswyLRVkEdmUXYhdknJNqk1nS19dn8KSEB5pPkGG6AeTqNp4xeAbRTkMEZA7WPtUcb7dpdc3vGfvqUVJZ",
  "key27": "5af3sS8Ac8gK8m91JkiYN7xWgitWiG76B995mkWhNYDi5smYyVFyKWz57CmQDS57vA53cZLtDCeDGNrqNrQ8v31C",
  "key28": "3KVmLPvfuk1V37ZKR7HJ89bLfXrVnW8ApXg4BiwwdL3xU92UszxAjwyTkdAmoPNUmxfxcpzThmMF2eo66FvurGwT",
  "key29": "25fKbMvJnxVB9w4P48DimkvMMXa2fK12ucsj97YczUWiSg3G2ULUxBdsJTPz6p1VvDFz4fctMebzz7hYqTTsiNfa",
  "key30": "2jDkUjkR7grAswf15Wnm4n2FRxzq1qDVyNgdoEggRFmnp1BuKXFNKh2LxNjMJhcLh8LrNugb246PXaQHKhZeUBLP",
  "key31": "2n5HvFkJ7K1otnksEK6tfQ6prJRmF9mrg7WQJxSJXN2nGB9cG6vCrtYXVLeMyCRzUK2WD6DoGY964oCQABYjLKbW",
  "key32": "ByBMFRvJ1AgxafKZUUDQfuXgNWrDXafrD3QrxyAY9C2wehSSQ82QZyNNjfpYWAu87VZJgzXx3ghaz11TpLQuWQp",
  "key33": "5itpEjmezm7JVe6zSJYPAtjLLEJKryTnie7kXah6FzJEe6o84ds8nzc5D3uUF5ZQjzKBKSVZPLSkLbqTDLLqa8er",
  "key34": "5pveiiKyNc6agJ5WZb5E6weMs2QYGNPN7zaKsucb4RRdpPuZfyMuac4vkGokCe8Aubaq6WGTTXyrWa2hDuWtK7yq",
  "key35": "5N8aY4TcyATjpp5fCuVUu8vuaNRTPw2o1jN8fegED8FfCPM6yURC7BCdkcyJqg6NQtEyjShfPJMNopjHfzpK2ihu",
  "key36": "MPgSAj4CykF6vMjksvS1aqwBDuizhRB4vZjggCnBEb2X6z9h1SzBV4cSyGFzAS7NtvhaGiQwpGSScccBnTjWsZn",
  "key37": "2EXGRwreFq6binviUFrhnmU54ffGo54ZZjowVL4CisZ5rupy4Pfqi11AtNV7JxH9HQYDmA5A7dJU6T7zqZCe8PzE",
  "key38": "2NSVaWnEXB3Dsk2XgHpSMU1htqBVvY3XkPnng1Mnpz5gzcpqHku83ZmEgwFgk8rVYzW4f4W3gqpXAERYbHS7fxyM",
  "key39": "6795Zk4JqS6f4y6uHV8xvF4RG8NoQypR6Jjjo9j7soaGEcsFyUJXF8bt2NGd9QEhSzY7M834pX737DLnnZr7pfdE",
  "key40": "4G3Hd7Y2pscvJ4GrekcyA43nXZAnyM2ywhY9QQNUmcK56MeVRc6rt4mi99PAo5B1hwj6CTFpmHKdPqkMznBKfcJg",
  "key41": "3BrqmvgJPo5q8FxaqPdgkDCHkmEv5J5UYaVw3K6TxVKtCExRq2tvmet7ft7kphUncyaaMr17Bw9CQW8BH4TMMRNT",
  "key42": "J4tjLMvg3TWBwb7pDgDQKQh5GAeFNgTSzmWGu7Z4qDPk5CiXQqQDWNqUBM8HJ8RWWhA9PkZaS2riazcoat1deVf",
  "key43": "4pSrLXTNFyAZ7fgyQ1cKxwEbHMaawb3ohnQ6nPHaLwCH8mwMxBNNG3bNEfeak1eT1i3hMmakpNHH3DybUVoX68WE"
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
