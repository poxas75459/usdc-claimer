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
    "KLhJ1yBqJR6e52zN9tuquxGQYZ4txavkPJn5vG8AVTukW9W4g6RxRzzMiWKhkzSCrVCBHmq2f5TQZr1NHc5d5m9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xSf4xervM7neJDSgXiW1AHX8FsDYgYh18w16F1nGGA1QQST1fpDrJrrbR5c7wnzKXpfxmwcm6UM2KRKQ8sPfrhz",
  "key1": "ZD5DF1LjsBLkRmFuQyFnar8UUmeBx4mRWPJZGZUN9jmaNbefX4tzpw2RbJ2hhdpvNrYJGuuZ1xbG9Tuw7P8CVHb",
  "key2": "2uqLpZZPddQpxKYSiYLTnKDPTAjtamVo1YrQFbvqcy7yAzBvXcrVKNaujR9fMzt3JFYrx89noFxpwsPTgr2w9Ck",
  "key3": "5PnPx2KFGg6ZeySyg4qsa1FemJevArmRixFfHzZbHmATnta8wbqPJ85Hj9KRWFz9RzWygrxxuuXFgN9QH6szjtGm",
  "key4": "3S2egmigBMhsqGHZr3BwQUevv7ZqwXcTyatci3P3w9CEQwyYNPFfjXXVSHhFp8bKAY2V5pr18pibFeEPSbwRZ3jc",
  "key5": "2nAArZAnccmUAhy71WRMPdFWMNQa4vM9gDVo1qQDM4Sdf4QQReo362f6JZczLeDR4BsVMiKkidRQVqyWAc2uVMv7",
  "key6": "4SJstdJVzfgPJFPCPmkimyAndRauio6Yq4rsD9zguqDLD8hPGTCmfDWJFPNNqrrKh9kshN3MpyipQ5Zvdw13ema6",
  "key7": "4PYbhJuatKZPpGhUT2D7arZj6qo5VyST2cf8Z3mczHBU4n2ugfqAb3P9Ff16PqNzK5QWafkZTW9LvwgMftoxcUMt",
  "key8": "5269UWtf5MPNdfaQH7oNFFYVpkBcZKw7zSMWL3ReTvomTgwF5T6PBEg1EmnjqXtM7bYCFK4S4E6jcb9XLeQ1QXsf",
  "key9": "2YaR8A97WVG9UggTnxAcDjwc6jJdk6Sj2sufzzxn5KJvETjKUMpGQDw9wt1U4HnV5C5tqMBiq573cvJyjC64vZnn",
  "key10": "HP6Wk3LWN29m6wvT5XB3gBpWsJ37tUbczFxuoGdFs1SxUqMdXEr7qVB2j7n912S34ysKxxGTKMopqDhmTkGm3t5",
  "key11": "5Kt8EGUzsgF5vSFhQLTfWooxoVaKazKxhJfEZzY2p2G5ch1dD5deaZLjGyvRA2YwNBN29ogF642k5mKftQB669J7",
  "key12": "ZMu1Jmpo6U3JuvWvCVFxgTFZbtnPnHaH28KB1ghh6yeeouCW1wugUaF8gPb2Nqj2oRqxXo3mBSjC4CTtF9xtzuR",
  "key13": "3JtSVMMfBwyBkLE1S1CpnR8ThzMLpbd75pbKxWVhFTq6mcUxof8XHCSvaTxZsGV3nVJ5UNMMU52osE2qREPd9LPy",
  "key14": "vy3nxcxyiqoapeNxEvUx81azeVh6AXcgrvgmWkG3t1Te3aFyeziiJrR7nsQrJBMcuWb7M5zn6emTYxEkkBtSqZ5",
  "key15": "4kxN2qVxfUvuqiFmQzM8ARQzFdnkbnbx2jQvjPwP6K4GaC3y7XvE1J1KAbi8ZfywDb8xaZArneDHyK8BgfP1D2f2",
  "key16": "2Tt87vapDUSzkPetDEP2aoLUQgtXQfAPJDKcaxpALZkqjgVqJZvaYwyJrN5AyMAT39CMbTx7LQksviTB84yjA9Yi",
  "key17": "5paoxkAS3PaEAJb2kQ1LKepXUvgWq4gRPTvXJvEE6TYHX4PTHqKddBGoPuCCPcpLGqudib9fp1twVdftE1X9PHgw",
  "key18": "jbcjSxz3QCuSCo6nwXc5hX5qaAznezeT8ZMQz7NDdccXKBdLxghKo3QQeuVDCkH3oWHXLzk838NFJsaRe6CENg6",
  "key19": "2bDdgusZFDwmdSPrGkgwYdgRL8X14WKGSZTPrUUUSn5mREqRPamqCQFwrgNvWipzZP85EAStttMiU5mTqDyQcBCN",
  "key20": "4MibryVp4z16WhTFJhKtdFybpaoSFMYCtq4ELr1xMPNMPgvQzgzPtsFS9b9Wbrm6aC8BAi8xptoQzkEWWNJgvmjG",
  "key21": "3UAF7kTRQdteNyCKGxMFJ8Vj2SuT6vSe86Vtf7uWZhG3FwXNxSzGopLBhige3xAtivdatUsa2xzi9YL3Pb2yVA94",
  "key22": "5ckd3kCZyzGdhPDPMMvxEw4pLhbUSZ91Magso4q6xymE223N1W4bNM215LrowCzYbHEWc1HTkoKfLkZe6kvpPbfQ",
  "key23": "2SBsMHn1u76Ci2PS3Y8BAVh4W9f1n39wvMJAfABgSPHhsyp8CTc6CBQzdYcK81S1eRiomi4Y5vKGcVBifiiAv6kM",
  "key24": "59ELAd2TMJnE5gBjVbpE8jxW6pBNxZ1rB7731NtjpVHBS2KEGcB6MMWdvgE53y326XMqbFx8VhSa9s5vv69SnBY3",
  "key25": "4cJxn6V2cYLk8ce9Vdp6oRzttLGuXuNoNqH3fCkxAMCfDxRSFmHGwvLQSkxzewbABPj7qC7pdyULLztwv9QzXY4y",
  "key26": "3mPGo7aFNXoPPokQ3kFb6tQvBPBAgfz9jdt4trHHLSZW77LmFznrqutgYWVFGd67TnFJLSAKF6i8UZPDhSq19ahm",
  "key27": "f9ekn3JHS8eLGcouS3BqR3JSZAYHQ857VbYNRHNWgWpVE4MGesJcMt5EZsMU9W2gaLbrVWF5koLuYWtHw35Mzrs",
  "key28": "33qNtxG7Dpzy4uzhFkX319MZri1qUfPKXh1gcbY9qVV9LJGUQ73qSjM6oGx44CsfZYGdcSMrwsGs7dsQc9LgdNxw",
  "key29": "2D2dE2ziMn28ZsQ7ErT1v2jcX22pPJvLPfv3VzqMZAgUYTs5bwjUArxK3JhECAPdDbbWSMoe1uU3QWwkgCjbUYuF",
  "key30": "QSVGrYojCv2ePbdERCMMrJBshLMUhcUgreDvzfoU3UQnsAp9s6x7WeaVTu1Bvx7VwRtTzX2ZR41CMmZ4ZQr89MZ",
  "key31": "4NhHjSUMKLDhyPjqvZ2aArWc7LvtrJhmD29uWDAbHfNfLyrhyYiribyetNyyCHUoKyhFgH5TsKxxfKwKjEnuofs7",
  "key32": "tLRN6F5eAJSgx7V6p9vaPeqTJa3MJXuoeZcUZrScjg6kS54gefektvuNfTxcLst27Fg4z1VpB5jubrRAp4X1AqD",
  "key33": "3pwCXPE2FEAMhThdqUVMCwuTNrNDAFGm9zEnGc6e9dAnMcqzVmgcnjvu3q6XaqGXA7K8fNdTJmdJvCTyFqZWJZGK",
  "key34": "aegSZomsPHq3iKJ3uAmtoCev5GNkfugEXRBx4S8Comv6a6i1broHr9esNiXss4uYXkV1kUBFfAdyPFH3Nn1vF3h",
  "key35": "4MKp2voti8uqnXKPrddbX6KL9gTJJoPqoaSxEAne1SRrdSQYNiQfwTKFSZi7MJCTKy61FtpVxbDpLB6A3iYiCZ5d",
  "key36": "5PkvfN5Nr2Pj1Frx8hEzpwc8Zh9zFBkUBqwqcMK7osA2QnPnSmsVsge3DbGdLWnrjtxz1A5BTAegX776hFi7v1XU",
  "key37": "2Cd61TrLME9jsWAyFvnjrHhKHzN5SRuTQnq24HeY94UQRNJsit5DvQKVSYonUPwszmoXeiKTSJZWJ5SzMqqjnCdm",
  "key38": "pTNypeRVa11abs5u2HBrWYdVqj5NvSMekaH9DoF4MS9baBXem1MfErT5PSiBgEfgoV2z7H2roLvUHZ3UcN1pdwD",
  "key39": "4xLWfuQHvQkCYBXXWDKfjwU4x2s6G8UJee1Qa7Q9Smb57JgKqiUwKbg8ojJi9u7gGEM4Tocc4WhADxDccznxMntd",
  "key40": "5qiEABpaGm5P7KYz5R6JDDge6WB2DKeGXC2Jo2jxwyMFPJzeEtDs4XTwAqqQzdTGXB4gMGtFyXdBrNM8xWR7gikz",
  "key41": "UWPnx1K7BuV11t8w1g11rbwJUX8kXwuA898ZfnrsSU8eWbh5cQFjoUnmJdREWn2JbdDeGAE1MVEBVsN4YaA9hLY",
  "key42": "2areS6TdGoXaNRcEQ3NzxnnjEQW4w7mdZSpgUKabRUrRdwJbpCRd84NinY6tXeJDkK2ZMHxFRKNMP8rKJFQXMMd2",
  "key43": "4agPQRCxSjHFFgjUUhev9gVboKz6DaEXkfXVkjLDSZNcibqQ8Xd9Bc25LCoUsmnziEhyK9u5fxRBLdg1qTY58THG",
  "key44": "3WMLs2a549zPcRvAFgEW1RrsEc11pR7bXXvAqpFGXXP5f2SzJUtQHYKLEqa4gs8HFyH6jUP5ZnRX2TbujiFW5Jde"
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
