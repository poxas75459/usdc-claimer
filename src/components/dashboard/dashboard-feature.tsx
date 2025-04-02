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
    "2KU3zx1URDpjVuJAgSXrSPRhHzn6p5xV9GtSKZbtcpVqDMJhJPi6KZEu4qceZg8ZxYmq44YyanMwkvkctpJCCCLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uppHNifCDzHXtjQtUG3iGgM94gjaCCDg1doL6WBChjt2pCpofW46smk4qHujsVfoygL35PR2yRKDwgxxTWKtdHS",
  "key1": "43q2Fgsc7csXgNMkaSeeVG1HNjn4zHP2MrtDhUKb1rEjLyiE9NAs7G5WFmkVkm5EbzgzbSsAgxdwzT7Ys7Noqhud",
  "key2": "5HN1NkyEThp4TJv2XocASVNvHwgCf1TEoznNi6nTkpdrXqYFpVYYdPQNrhDiqCTe1wzfc2E6B5bcPeTh2yv3E67b",
  "key3": "5YzVFjZrgTkMbn8Q1NGVEj5AeFrpRF4jfTh844JsL1qQ5hwBq6BMvcwteJ1jQohaNhMXBubQXC7D5E67hSUbDtMa",
  "key4": "3i7TPKsYpnvuWr9tP8rhPwKntpfsqSyQqhXHZwMWQp4KfAcvJyd7AfjH9hPcAvVwMt7tdX5zk1VDThdQzrBN1TWV",
  "key5": "4EVEm9o3yZncwAnx4WKKU7MKR9cNBUGn3tykL6eQvnFVUGN5X1w9tWjWQMnu6Y7gQhkMkAkpG2mGTvevHv84wzar",
  "key6": "4F589WiFtkjoycr3LWKk8XzDyBmRS54yVKkPbzDFPw2DtU4yvrBuV5r84kHhFYS8wNXzJukTYQHK3CBL9qtyp2zg",
  "key7": "5bLWw6go2qaasGZeKpbyDP8iLDwrWLjEucjJ9GACajfZjxeFbic16WXg2oyfwLegVY6JVotNyWg1zuLE2Nf2NCbq",
  "key8": "5eZjXXXxxugNk6rGyTttaAbkL651PdUh7W6E84i8cZz6xF5wPvxp7Cpuk9SUwLzyNvWo1Wwpqq4NcspaYrDa4nVe",
  "key9": "5efhjz83XsQfsMTUsTfVBJizsTQ4jSkkDPAC9X2RzH56rRW4AGPK68j1nne1XAtnRyvEhT3hFWvHsGFxcko1F34o",
  "key10": "35Cdc8WZ3cuyBrbZUE8yKLo4XCPsWKomzbhNkUVyxHJRQjRAC4R95UEaha1DvVBGYnmKt8EnhVTCCQBwuMRWJfSi",
  "key11": "5sj8EHwDn4We8yf2YjF4afg23dzVWBarTpdbLTNH79msyaXcRGiwistYjsbFVU74njPgVYd4UGDYo7kkyQ24uAuM",
  "key12": "5iLafkdjrD9bPV9ywYGe5QjmQ8juVA6yCRH4wYuAKEBMpnsMqzRNcgHHP8kZvjWdD8oiey8aYbnXLqtJphNs7t7P",
  "key13": "35ZSZA1kkugwo31nvTkuK4bNxuN9RyQox8K3tdjsGKmiGXbSJD2WzT5pJZNDg9Wmgye8TrRUC4J1qg5daUaDJm3A",
  "key14": "2DXGWRXmXBUprVWGUX4wu5s5srkAuAZ8PSvFS5fgmxuDeq1ykpfxyHkbPEoSrQgRtAtZGBamMj4tvEoRb5SUs76B",
  "key15": "2SaT4RyPKvebW321xVF52BPbGSRgYRRX4bFgnfb5YKETUSnTmCmzmYPPSdSbiNWWK67H1GkkMkyzedoEkYR1DrxC",
  "key16": "3zV2fTACvJ8f4QPF5iGcdotKzj76h7srLMQTEcGKFgjc9Y14jJwYVbfbJ7T6vk5UJSuL2AT6BhCoXFtNkKX4tFVM",
  "key17": "4XYvuBXZLoBBBMhdp48s85kYPveoTHYwnaW9dJcRPjkkTpdNr4pnZQDbgXGzFw3nesLHeG2sPkHUk1RJ1iUVPTeg",
  "key18": "54BSmCPtqXV26ymwjPWeSpBHuPBttgw69Z7kFyUdyBhDaLXkosV2QWTmU5ajTdWLiNxVWdPeXJmTjboGAbcrZ5Z9",
  "key19": "39rsHppgy3JuRjFpwSy3uhsU2e827TqHbjSgXGUNzgLExV1nZvASVWfTk5k6oy3KVo3ajvzjPTFEQs3YbmgQLZuY",
  "key20": "JMwgw4SBWcui9bGwDXiWaD5QFcCUoUh4trEd1qoq8BoDRrfM29poJHuKNmARARAYaftANC1r75Rk2DXUxQntLw5",
  "key21": "242Ux94EzESXTh46sRTpWYvAuEmJUywoijDwv9XymdCr9GGpzm7RCFiczpDNRFMgSvaFm1E2HTJZKtH1ACn8X2VR",
  "key22": "592Wt2p1wjpPa3DcLp7duCkTJ8NMXtbMFYdJH1hmi4iRSAg4zUkXZkUw9JuqLvg6posoHSU6p6f92Pq8tBYjJMfp",
  "key23": "2nucijJiNdsvi6eiWnZ4VGfW8tbVHHqQDcSAFJvLR83iAbX23xaNJgHyxvFceJ7vLLkTLmL36MtGVrzKGohnM9oZ",
  "key24": "5BqGcQ8bWreZiNdDjo9c4ZfbmPP1cam4ZFNTCBwsvCyyR9QJZDbc6vDWsSWJF4VqRCt4FDcZJumKZ5bfd79tZTyK",
  "key25": "3iRtUbgCuv1TN5f23nvx5D3wEssxcPo2GMgj4qG5S8AVC7HdUZiooo72RYQcjSLjaFkhoy79AkUJzs2brzasnwai",
  "key26": "4xr13AYmyMQL7aiSYTKMWBa92CjfVDtroYPCN3m153NfBcWNNEjqw8u2ESbaBmTncanoRPK3Kf8bFUViTnxvg28B",
  "key27": "5XeuYynxBWpSJpRrR2BbAMEawAFbnrco6Y6bVNbfyXGbuo6eYUt29EwqGiC9QsnSLEXbFCE5HYVhLZj8VYaqWVxb",
  "key28": "3T7nt6QkEkbp93Xv6EmboZ3CywbYktz9jHwrhBAkNdeR4ADDDaS5oCPjiauqGrXhoVGtMna6aPZBs5ZdEhNnb5cv",
  "key29": "2E2jPEqEQMydC1si36fNLCP78LXEYGLEuaK7mQdUdSeBsMM1zm3zu1PExX8WAyuqe4DSyPZ6zYweuswGYsLXxuTk",
  "key30": "pDucYsRoHG1oQX3i5NDF8cxiSKVUmE7eCCTMXWvMzVtmhEK9zctWEV4CyaAWZJfGcpPSjXjQDZkGYpBDRF3ihEq",
  "key31": "66Qr3GPdPx4d1Wz7j6rjonSNaDi1uUzTVsiQQH7J5PztsFQW9ekxRGoc8iwwXwP6vTfKALTH6iqxb4gpgc8FL4qM",
  "key32": "3pCurS1WSYN9t6b9gvqfsEMYQS98sHtcqMUMtJviF4ZixGqKxdnaxPYfTc7rHgQfcr1YbN3MZz4rpiAST6Fb5Bi7",
  "key33": "5PAHoavsiuGZmGtu3BAmZVVLGpRRBLrDhvZhFEwpevHKbwXv59KtPDJSrYMG3nJ6JDkRQS2Zacrnyip8Z2b4m5Hm",
  "key34": "33zrff4L387MsBc4Q6gfrboQpEGpkVzPaqfn9PTpHv4aBxQjLeGTHdXTWsu4mY2jkmyhJApuCBH6KdtWDvMUYUW1",
  "key35": "2sNZXBwiVkrkP9eJP8dnq7yvLLExV9cxFQHatytS5eQHV13ZxKWPVduasBM7suSZMDMNSBUa1hnA7G5RgQMkyqxd",
  "key36": "5HoXTgas3By9iud7JuR65LY23wtdDHdAQNvKxtVbkdyVcxx1uyFtYeSpLEca78AsSAFAne5EreYhwJDDokCQbSyu",
  "key37": "26N7HaUQPPLKYNMCjAXkAQAgaQJqc14vhJbZSiSQp1K1nZGUWGWXjxGcHh1jx1RKzTk7UtiBLD9rBnkRdKCY9R6P",
  "key38": "5FDzwLq9Dvrno6x3vRKr6zXUYZMyVageoPuV7FBtwwB3KK6axpQPZBKFYkEo9Mqbhx7HbT46kdScfUyhKc27msSE",
  "key39": "p8zGcdN3HdamyPWyUfrjb5GnBnWaRtKzduzU8WTTGFTLcSaVgSVyLaTgyMc2rFY7wbirXp7fsgu1jkbmoMZRVxc",
  "key40": "c1nBDmrPwRtMj99nHdj4w5RZbXq5DmhxjJcpQTJgba9wVVSPaJvgmq6EdpLQ4JTqCHYwGDLyx4zRpGcud71vLB9",
  "key41": "2xq8nkhwRHEEHLM8rtCCeZgAMXZfAmU2Qjxf6DE4u3xYLRwiiJr9rQKXfHKfEDuGUeccVqVrpewCcanHYDQPq5mC"
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
