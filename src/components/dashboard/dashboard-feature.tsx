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
    "32dhJ6HSfpXr7Wcf5JZa6dea91HZcMqyPtnNbG3jRnyQk9GKMFJfEwh6gDHTaaCaSaPWEsE4EyQXzcGvHhCTcR2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sc87AssD3TYiFiCkvNdc8o5pmXPUfPC3qwu3vdo1BFhYN4LKnScK66h59aKzRkMedXGDKzbwSGx6mNMVEaPAW7g",
  "key1": "iL44C3fHTdDETpb1w4UqvzFtWqWMSjEebRJ4AWpsGRkhGfu2jhRpNuRjeqbh7vLXNJv6sZTcUkYWJuMt8wNY8PL",
  "key2": "5QKVcdxbgYCGM9Td8ULX6rUVYDLnFRYYvfSYb57kfvUhEeMVuBy8ZDgsfG3ossVcAvg3RoshcxHQRBzC75iz2yc1",
  "key3": "5b5xN6dbQUYKgRz46DCiGPxVpm8YFWG2nVjFnKLqNiYBhS2NDBfeHo999BzR5nYEKVYsYpzw925GWUQNovjayyqU",
  "key4": "57AssYHLmG2ajFzmuhnuLewFJHnqgYhniSo6g1WdK9ni4C8wPHbQgDuf3vHDnf4MzHkP1LQMJ6qJdtU6UdYT7wTD",
  "key5": "5iXaPCTPwrGggxEto5JZQMt51BDqftM93VNrVEPa21uGZk3riQKwb8tWSySm7JBCEyCEeUkYM5xMceZ6R4wgU22E",
  "key6": "3j2pqWcZgUEgy9kRYHapJLrjKAQGCsE8Vof9MvZbvX6o5dTUGrYcFB8hH3L73xGeKtXR1FTk8PMb7DP6s9NaEGPQ",
  "key7": "upZpF6zc3cyJTS1fEtVg7WDdc5CXZwSoVs4hD5UWJuYrBqpAyteo7NTA3BNyc9SXQE5sz54S5M2UQFG1BLPQqKD",
  "key8": "4hiYNz7c15M4wCuYxRfpGUwQAWAeNipy8fXZN8hsPDBvDLVnMifeWuvFKTqKB134FM6Vo9556wgzy9WDGFXvZk4S",
  "key9": "3mDYDvQGtkrBLbqw6fS7Teanos6C1erQYS2idNs7RjzJDsfTCoCdKzFMmpp2B7KKysKVkXjyN1sB4A3c29e9R9Cb",
  "key10": "39KaR774y3YqR8arLCkYb85FP9hDW3kqWWopPXcc3D1mZ8YKqEJgwZe2e8X8ukEVgr1SUeDYh23LiRiqE6FtStib",
  "key11": "3ZLfd2gopMugSKDnjd9hiFwPYkvMuVj8XyBSXoVdE8a7dxSdD1K75KXXsH5uXe6zAZzQBLfdPULqFtaGi96Uuy4b",
  "key12": "4JcSFCYCFJGtjZaLiHT4G3vLfpYqBYxK3FSxdHMDsjgM1NYRXMgUf7dWocPr4k3EtRZAqoDK5LGjJ3TYXfLZhMwR",
  "key13": "4PKv9zkcp2Pr2DbASmACvrSuz5YwVrsG3pZaywvLEV9i1mpP1FJR9m5QKoksEudR44cT2NrFZ83bA3CmDeSJ2PQ5",
  "key14": "pbpbcUqnCpzTudDRtTYBGxVCXh7TsJ2Ggc1RT1hRaKeAwugmDuFYY3VBxoT6hRD18pjNsGMT75f1yQZg8719wwR",
  "key15": "xHNxKLtMbedRf21XM3eKBuLofXAT2AWD48UvPgreXKF8md3tjpRwRqM7XpMy7HVGPMyQeE4AQeWFntDy58bWY9G",
  "key16": "2ckD88w3JP9zWxfDvwee9Kz1zo7yCYZXgu4EAWGt8YrXgWL1d5oASvhWMsuVdXctbQsGZq3qDWPm77P9LmihDxzT",
  "key17": "5iaHB6rW422c7Pq8bNSBfvrojXFUQVZ9oBVbBCDW8TeHABTNoWAN5t9VQaPymvW51jgW36jzF6uynRG6sqXp63zu",
  "key18": "FuyzAHKELecFhjEghbATKazEprVsjDVMuypU83X2MaMFQgxXWUwPRpmsFgVB3KttqSZW1kXgCnt9a7RhhkufPSH",
  "key19": "3vsanqftdMzbJRCaJbGFU7ucpwNgra1WZ4XddAmzvfja8RcvKozdYcGAFc3958FaffHDDCCEBE24xKpfWMxG1Tft",
  "key20": "5KsrNvK48jNVjhR4QGPpdnSeDkvS38nMT4Ytzq8d9mk9g6wysiDdeKbAE9R7cZYozbPXeNZoZ7vBHAnvKvk21u1M",
  "key21": "2EHzxiZV9TgzQRpQMaFgxHBiBYeBDqV6a14rL65DF2JAqh7nEC7uwPKVbMQArbkjTaFoFECyaN6MH2zMNcEo1KGw",
  "key22": "a4LtYJFW5C6waCuDrwBAhXGDLe5QupSWA8voULb8RcztbCcQuUniFm1gByV3eFVr75kNhY8aDuHZeUbEn2ttsXG",
  "key23": "56xe56M3cJ4c98peNfdxgDKvYBXUGSHvtR5n6dNcE4CDXVUSDza94wvNc77DjkkvdPHRdgrGdLZiFq5jr3qCy7i2",
  "key24": "ssiFByiAMKxLqo9WhyvXS63wKkksrMbLFHSz5RdtT7icfDMdAftpoqoCgendw3i61LsyMx2MvtVmp5q4ZqWA9iC",
  "key25": "tAZSN61S6CRigtwKiKBhWcXAeP52c8waDmwb1dYRLHoypadwoSP8VcXoZnsE5NW9eLQgKExsUmmb4ZF2kCgVyuL",
  "key26": "3eQzYRozLTwguLSbNtTHz9jMbyLiuktSk6reiwcS6DvwGBkvd4PC8sgYMwXP5RqVb934NUDhwX3nrdi7WJzc6RWB",
  "key27": "3CuzHjGFAz2kbJ6krScW7E9FxzXxCKA2u7zJgEQLXqM3Ksquu7qKvUQYuFcjJuYJqayCJX9hLpqFaprVqreWghaJ",
  "key28": "3rS8WZo3KXuKX2hjd1mU2GghZnWQz89pW1q867UTWj38xUghHfuAPgdZyKRhh9RsVbyn68jn77VDY3PDf1fMq1AL",
  "key29": "2EnX6PevasKGsQAzywNDmn5XrUHXL6uZguzZWpMmH1nQVUhzz5tSRJL99yZW4aFrg19DhZDyxc9EThav2T4V26vk",
  "key30": "4eGqc1JfhMBWxeTbBDaUSRA3rqFf1SetSpwk8BRXybqq4cQgJrs4YjQ9zWHcYjRJaK18Gcgo7DYMzjbCrgfKup4p",
  "key31": "5Cx4ktckrNox1NssCMg7EoGdyLZcREJjewfJQjVpsGUegDScAZvR4rEhvyBLmAEb8q5aJsJoBXgGoMhWe6RXYaS6",
  "key32": "pdX8xnYJuL5SL7nhtKn4gx43QhAhFE3FJ9rS6LLiXKUFhP8cDNpAuuUtHFSk6PS5cY1u4QzxcZ3yAcHaYEAagmS",
  "key33": "5Y47y68LkRJSGushfo6S9CGVKUET1nqZx3xrzRYSELHQHbcATNXKdiHeDsN3EGGNmu4PVn7JRgvCDkrBK11yKh1X",
  "key34": "4mDvWeLegcC8fPuy6PcL9PffRjDdsj3r5yMiFPbo5CyAk1Db1ZtFQRAHqDSkVmP99T2SrpamHBVeYaqvmmsdLbzg",
  "key35": "29KWwDNwQn2aEJyzL4VoJd2HTsaEzLZPZkbDFrsZZGP3rcTpxrTWxr95D4SxbCYDkb8qFrjQCSWMkpgqWgf3UCjE",
  "key36": "SgfWnU9B5umxGrJQk62QDKN7txZyXTMa4HjT52vPePZaTEFpUqtH9FzHi41TzxcY8zANPZhpc3aEFEKcR7LdE7k",
  "key37": "4moESVVwzWBabS1gY7CBTt3cpFjexQ8Xocj451TqWgrDUGMviwskbimNxyfU9tsryA6eSa9SY3FFMYCBuYsQdmvt",
  "key38": "2WJFQ2kak8PeCBJ8UbnH7s39J32xj3sFbeeXcxUTY1eD3zVWKbzWJnfKJGiKWijW4tzgmSsRwSLtpCQKF6xAQnQk",
  "key39": "2XL4Y4VcRbDPzCCSwgL1F1vgksUpZo9mTypNupNktTUWN2CWoe4YkFVMypFBPC3F45FqaHokUNijAz5KxDdSg5ze",
  "key40": "41kEGZEb4WhUVXeMhXaibcoipKP1F64WCMfB4hZ73YzcTuEYkj9i8J9JayUMfF5obSthvrLieq9TFfSA9phv2UaK",
  "key41": "5c5V3fYQsx2dZqr5XfuiXt3Ew2xYK2MYPm7zc5tHProahBaa8bjDoGZDfcMJXhRKUFn1fs7KZqM2myX7W1i8D22k"
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
