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
    "VARuTAu6RNP4q7ZfsaUTQEi5J61YFno33jn1A52GBPdDqovuKZ98scUQEcDi2XkBcAf2mSPaPJu4FFmD4GXa8wC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L6ttPdjSs75ep9vWJT5in4cLApXMNSMJyTcjL1UigEdxDybF7wCFRthocxME2jg1ZJ7Wfnfqdev6usThNr2GNFK",
  "key1": "5XCjfGHMVdbFoTXAjH1z98NeedL5g4dNRLrZPD97FxUAoYaG835886DACWMcmnNe1JVtMVsZGGoaRrEXeAPogDgH",
  "key2": "3mKeqoHgrJAAZjKMTWSNW2kxXpJYukkaSGdiGQSdHa8es6JVbE47s11G5T3uxjbXMzBYXeamS4RiZ1zhNNog3D1u",
  "key3": "5cGXNGRTJbYKGcxtupNY8A6i7mksDVUAYucPX4KYhNd4V8Nc1BJfWHwMGwjh48y67CGBVg3DrC4wJGqKmAzxgaVw",
  "key4": "LkwGyrdo3gxFhY52qLRtz4ArBf8mRZDEQdLGfnriC9SYeirfq9KQybn3BmJQecfgrdU9Uy81NU9JeB868AARPHx",
  "key5": "5MJxWFQoS6HbbLhz1L7sE7k6FcePwj3Vom5xkMgC9yr4dKiqk5XKYZYP9ibx1VRAWGoyif6ggapoCVtHuPctqfmr",
  "key6": "3S8wU4t2sQZDsw4hHZMoaxESEmUqWbzjWYd8KTH761Mxn7MK2o7eBet7A4wJm1TFq11ryuCm7ZAz4bewo6RXCRYJ",
  "key7": "25ZwS5uXaEqqmJP6VQzHYnFXjcP3Lwf5GHCLCesLzVyD8ZEjJhdn17ucDQqG9NXvJs5kK5LmnyJA4cKHmVjrggk6",
  "key8": "35NTPLHC681P6JN6kgqkurxDZ5M2HsptkcSXxrTVC9T1dz7ufqaVAxPcKQpaNEqsMsDw3RqXcJhsmD1awfv41Nqu",
  "key9": "2XDyzHnwfmNB2k5un6zfDagqwYPdRhgk5X5DPhSHKQiZwDwdkbunuVU8XzPu4qrgnWCK6gz5hdmdTcWKDP4eZNWk",
  "key10": "3sUVk9qhscAbJDhv3bmGevxFjGepn1EqJGDJRphhWXvMRE7jVgSFE5uER55VQ5EJnG9xGkhbQSETZxKszxQkGuTK",
  "key11": "4ysk5m3hoFpksXAhQ1TLCA2SX9bAR6gjCSkvVFr5aQerqfkzZcKZigtF8cj7o7pCBVc6Mk8FDf8PFMxYtn2kF6eL",
  "key12": "4MQUSz3tuTmK544Gcm46Qrs7mV8U5ESaqjytbeoCP6oRJ3r4tfC7eskU6JzQJoviYzbHg5R4qWxs4b4ga21ejVtc",
  "key13": "35RkJpYu4puYVtmRCCRpGPfLrGSRdvhSnQnuQGE39ihRHrhkfDtvAGfbJsBpx4yVXBtguMAufTtAazAoxxKGDFHR",
  "key14": "XypQBu9GyF6kpGVJP7rnBEDuWRMVa8UZh1DuzFDCSH4LSgfPC9MgvMW2siAs3A3dUgSXxpTqQnfHJYeQh1WhcD8",
  "key15": "ZEvixpkm3i613s2gLFmpRANeqzvKHqda8Rq4hpix5qnHYjYuUWRDQfhQvybG1e5KvgnZTJvtynVqfDMhFQVhwLD",
  "key16": "5hGYL5byyMsPsUzagK4vsYgWM4SVsH5ocAFtQxoH7LwLk2oeafyzy618yqHQHk6aQmYbzGCxoqGwny6Xq2tERKB8",
  "key17": "5YmWFbLt89wbNeDhFAZKWoV3QgqC1aA7KLJrB2Saa7DyJ9psRcFVPuyrySgBh9fjAmPoBAjS8MsLXNmvBh3LLaJv",
  "key18": "4BhjjqfhRktabGdbf5Yf6UtEjXQ2exFGTSiss33zdbQTG1Rj1LyWDzr6JSBpyrXRPvnpGAPMGscGBuhXmHGx2CNs",
  "key19": "4CZz9ihZgoJQPsMWa8nu5f9mxaTn1ZHuvscipcA7k8VJrmB99awZKd8b8o2iX3hFkbXWZd7ANuVESreAdQLUgCD6",
  "key20": "5cDUSFpYJRcPedNjrMwStA23wVx543HWPkxXfDFp2ybZDq4qfL4uPMjpKcPU5hu9dg33aBdSQ2eMdxudNwzeNif2",
  "key21": "5SmYdq3gYMvu9rxPts218HSSwkK1GJF7HbAGz5qYadEC1CxxYwabWKZGbcCvGmf4qrL9bJhc4xAFPnDGEQQ7p6ef",
  "key22": "41o3fvs1b7omYfJCYe4MghWk9BNqZZGfwgzLobAFD7rpyhyYXmcVR7R2stENEGnKGK5aS3qh7BPZ6V6pPxvS91tv",
  "key23": "3HjQ94ktsSmrbbeNsHmYVFxYQLTxiTLVLYrMUXWUdytiRuAjiB8Z4qpBmzfJEzyNA5JpaL2nW7jzmSWGU86Qakee",
  "key24": "4CwVyC7LakiujbEyNxj3UitsVJZMeuW9z3z6JpWkvezXZfZGRoXxPEJgD4F5V3TJbEGaMg5SpiE7KYmxUCsXfcYp",
  "key25": "FUTAHDYmv38ffLFPutkJgTF3kWAbpLew55Ag1tv89DdTMCFMUCwhqPKTDr7ZWuEnt1DkE8AtdcDwyUMhZz541jx",
  "key26": "3TytUvuP6Fdyb5dy4coZy1VA7wTw3r934m4HdiTBXeNMR448tZ7HkzYuUw5g6nVssCjV2F9CNehnNryknL7bKGsT",
  "key27": "5Tko7KAP28fm6LAzWKvbnxTErAfDhzYJgcZb8QH2YHQNNTUg9eMRjZqgE9q8LL9SMrhh1C593Y9aoi5agVH1jD5N",
  "key28": "3pZsPLhTUeEWP4RMCtAdLBzhH2fRgsTYSbbCmyXmhom6VtBbgKE36ND47gTdZPnqvVvrQvnyRcjaUF7w3amoHjCh",
  "key29": "3kFuZvW49LJJW3URF4uEi4iRhRSjnVHybgksaimbcY6fYDLmpwN6GeVdfC9UnZkxDEh4ZsFz5Zd7dvGq9A7G3c6Z",
  "key30": "2KbQBLw4iiTcFZ2d1uDQZkF1dqJBonWbDz57YEqxPSWmK4nmjEsgnvmXmQr6KLp1d1QFxTxiHH5aRXr665BGraMF",
  "key31": "pKvPwm7xYoqigXYWzKK173P7XJ1nvrFxjhnFibPDXW3cmTpYWF6NTbJAwx1vMKWEAB4kstkZoVHrG7CTbfr5vUE",
  "key32": "YJ631SHVDVgkWDSBMufxuRgPbCWtr3atdJ9xkd1JxuznBta9wAjY8RhKy6BthyBn45Z5XZWzh8pzSWguw6PUWnS",
  "key33": "379xTuHWgw6fP7Fg1At3FrfzV6fVQtx3cW8YKnrYjSap4D9CpHaYBDL1if4zAJJETuD2UUY6wS4AoskDNFUZ4JMr",
  "key34": "2YvaofGCazBZEn8Vuwop6na1gHYyXAb5T318K7b2vSxJ7Wz93MRar6im4UDuuH5a5Acrr8DPaYafK1oj9KZzh54B",
  "key35": "5PzSJ3jHEd95qPstLNM6hRxB28W4mUjeZME4yx5FztuKBs6nWjA6P1J51rkJnoLyV9wJQrkrsL1BHguvQRa5ZBCs",
  "key36": "hsPuZ2XV3LwbWe9p9CzCWpp9W6CzXtaX3Z61LeDY4TdYszJo3zuKCfCyqjQHPpogamw6VKDL1etPQUJmbFUhxHw",
  "key37": "2oJzwF3jQCVqVy72VUMmjq4AWeDTSCoQmYT7NGyN3YQYiCAiJdfDSuwxHkvfqBdFZmgAbCVr8BiGejw5WUYTLBRk",
  "key38": "2Apuh2dSSwbhyyn1YSjzL3VBhWgHvVwfusauwP9t1R6GQ8F27JjrudH21sChk9dWPEpdTtgwosnCP9vtbmf6nF9G",
  "key39": "2LjvpXK5okonM4awG9XfcRHNYJBdHjNER2uu92tLuSZjvMU4CyW7Gu1ApLER65zYnTHH63MR5T3jvmZFiB2qLPGM",
  "key40": "4e32utbTqD5PUfiCsnqFzZGhhPboJCbq6gNRGehak2WmMPEdHYwJv59wexpFDZUewVVGkbZNAr52n2EgvAT6cKmT",
  "key41": "2DD8dF7wLiYQ3pNrHJ68WYz4K7TnDUTB81b2ch4KqQLLK9eHVeNeRa6DW6yoGpVKAPiG6F6xxMcCy6RYebX7D5EN",
  "key42": "3wFVAmD3g4LUzmMY3UemfbVtEbgyLAUd3vmGkAS2MPEH2vTUWZqtJ8oZxQFLpPanaWczDSJz5FQcXS3y8foc9H5j"
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
