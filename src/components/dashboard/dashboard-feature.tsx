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
    "5eCRy4ZGBEPK3aPLUwmKYnGHwYnF3iWZgdipoupZTfiz5NJr9WtWKYwCUthZtQVq25ZvFCAmSZ33P5dEmJ4nF3vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UyMUryErh5HGEYTpWNt2pXQNwQgoVQPzWs8AdGS9F7mxKQTEsxUHwrr1WN5HhFiyNMp2Vb4pJZLqPrCU4ULBwUV",
  "key1": "5bnNhk3CrF6Np43vmh83Q2LDv1KxNdhRgSrxRJ1HbURWYky9kKfTKMHcea8edhF9v34dhMvy2U5btRj1JK6BBDKy",
  "key2": "5MwjqU5xKZSDCjvgLMBVjbjbj8bH5WSnbZsSLnQWCxGFGzZ36KGyeas4BS4tV8CUd7Y8uaE9zRWpR7fUcjwFxBg",
  "key3": "344BChM275jrB5TqhDgaGMie5ezBZj2fenpnCDRvS4Hg1NPssoUHUBqJ821XKDSZJHACPVoAfdbBu9sWfX2ftGWa",
  "key4": "3w1wYByi4CM4j8UVYWuVp5JpCZZED6QpmpyXqsbXcCU7hErBPL7dAAUaLed92RAJYosqM3qf579uwnr7RLWz1RS8",
  "key5": "5XjEM9r7ZaBkJdkXXuF1HdzmG59ji5QrKZVjLEcdtVfERCKKMheJuVzZgN5MFvThAzpV2EFAmfUUdPzzSebBPiFX",
  "key6": "5i35pq9MxpwPDwnQVEmDL1iTLF3g4mCfuKzVkRSWKDTE9WKbw7NMkNhntk77Z7L4KTEuMfY5g6oGi6qNDzi3hhvr",
  "key7": "2X9m3ShgGeCAsmxJs2Ly3JcFvGjnc3qBRFeV7tARKiWyzC4mg1mpND4bT5rkr8no97decA9TtHCeF6VPV2WwXCda",
  "key8": "35WGQoQ8HAW4SLu3FqokVt8THcwk7QhvhfSVG6aGcWXJxQq1ehQ4mxW23FGuPbDmazPihCQ2Ti3ayaimpFNS8dsY",
  "key9": "37ZxA8vN9pDFZH1qjH5AWL5LS3i5vQ59XQ7RbK7xUmbQDuy2ceKAuPqQFwmu1B7QJ9CGY3opRZfUWpUTytGs6n2i",
  "key10": "556WDMP1EpbHsXQfFp9UyhR59pDvXY3NCZYUDTsbuMEKAnXRKcvyGhrbBY9PucGEFxPRabfBrp6xXLBB75m7Fgpe",
  "key11": "5XRnG7zp3CAoeAoQK9GjdB3bH6cQ35rXwz8jzxcCMNu7vYS8bS88kmpg5LCPnbCm3vb2MgYAbfirPXtZc8ntXVBN",
  "key12": "4JLJjoFw5sbyVa8zKWcdsFNsw1vDWvG1yGcb69eFzPYaXvi1s2LmR71Vsy33biNCfVxQhrHAHH6YtLyr4Z1ZGzcW",
  "key13": "2A5nU9w5BynanuvYhbHui2Up67rqkARob6M6NuGTd9nK2ngY7wMJSF9PvK4ptaLBYgz9q3ake5BtbMK5hya4gQti",
  "key14": "4eKw2i2FgdPryu8L4F57X8Lz6Dt1BzHj2S4Ua6RGDUmK1znaTvVzHNwLZAut3HDLZGK8F73PqnbkuqVVYc9rQu69",
  "key15": "2JeQATLb5JKgAHhFqLmjLYakg7zSySs92wFi9CSCAgbcpfe8YMNhh5RqFdszie85Z35GM7yDrxcuiQQbvE9ibQy2",
  "key16": "65hYDuyifZzG57AbSJQv3VGxi5zSzbbj3q4SkspMFRzN7afByvz6WFWdbgPSKGdPvmP7uToxbKRW6Yqc15bSgfKF",
  "key17": "2cvQyBjsr59NiDUuaECXFmSDpPM2Maoy2VvcU7sKv8y8mszmeDVt2ywkusb8jruU919qjFXrvGSdwuXkWCPZZgDs",
  "key18": "5rh7Tu8LNJqZNFv6RWQavKoMbvuHq1t1vihAWvMWeEn3PD2ta32ZGhMmcMhMcR5gbirTPm6KS7b3k2gomUk4reBh",
  "key19": "535qSWLcGwfhFogc3uxP1wcyQMFTHzLbZ98ChkLghPLmok1PFGSJDBxM9urskAtiK3KEuoSZJfSRPYVz7tZzACM1",
  "key20": "LUYsuBWPxm3oB4zzCCbAmNdavthSkq5yGsec7tzQPHcw3PBTL91NC38T4ZWX4ruzY1ubuoQPfgffqBL4P986YdX",
  "key21": "5PqU2L4zTWpdouFG3JQEngBv9RGeLZEQnyxXJvXJieot2KCN9GUG5BrgAnb1fG3n61sMauWChy4VvcmePAfkUHgH",
  "key22": "2HwMDLXtRXyeCSoXpLEqUvraTHuNxZSkvankm4xaWBcYYhj4BHHbZRBZHQd679FkayUnpGMfr8kpW5nNZigy8qJ",
  "key23": "2k66rykEjVAShryo5Qb6cwBqh3K98UD8GQuR1Ej9Ta7UuBoKzLig2mBNWw4qnAmLRUQLewdmit6ZhqjojjK6c5yy",
  "key24": "3PHvuNHqaJsGaJJzwSKsHnqno8E3NThxA7R1XgjC3JrCimHdmrRQYp6sKHpqHQSsGc6afZyrYGEr1DTCBg37CGQq",
  "key25": "3NnY732TUHpiQvWswdFjLRmRbrWrt3LCaX3RzCS13acC6VDRJqZy5Y21VbbRPBPU4rwSGL6SoWSJAEX98LNQzKhB",
  "key26": "4M3Pj166osJyuPob8Fm4VgLvK5CLHvgju5GAuH3tNW3ThTdpvkkRMLYweNBpSnGcmFMkEugbwcazJnnV8eh5kKby",
  "key27": "64bRYXQLLv9hSJ1c4co3PN79QVjX3ZUsqDvR5WWMk6Nqo1i3bU6HCv7dA1Sd64D6S1soYyVrjZebi9EqQXM2kbHv",
  "key28": "62Bh2bHuK2CP58oXDVXFL98eboW9ky7LkyAL2KUdUP681W7Gazi3wMsWRHQDeWF4CVoFAnsy8p3bejUwM36i1uTS",
  "key29": "5uLWzLZjDBJekTgvcBDLV12CrB2MW3JctcVrCX6V1uPjhFYb5w2moS9JicvfqGMAU11dxKTH7UchuKmoiTch31bP",
  "key30": "3tmdA8avmJH2qxAqMZm5iRuKHwQYCnKpdZfsdetg8XKrPXxW2fKRP3SGamvqzWWhwFR1SPKhu7F2VogNbBfi8abh",
  "key31": "34iG7YR4DkJKtKMReWHHgTXmJyDH2hNTjguVW25qGMeWcxeFn6BQV3ZDmPpJQnqphWi19z5Ts4P8t6MgQHghEcHy",
  "key32": "GEHqZy1Tux2z7q9LNrjycatrqp4rFzgpZywLQWXgouvRNZCTP4T3NzLH6hfD1Su6ik2Ep2ASJLsyycRLB7ciHEW",
  "key33": "3eriUViAk49yL7v1wJo2hC1swBHiPHv2jiRQ9a3oiGXmBNGWd2Hw7mLMH8WXmWLzVdGxsgGX1phqBABRwfruJLv2",
  "key34": "33M2zPpreTz3mzLrAetUVcuzQ77yYT9JE3goZbhx1711gFS6sZTn8ydPDEbAa4vrqebe7rU1uL5hFcD2NE2fqUS",
  "key35": "4zqkZLsCvFCxAAwWvoaDya9sfhHphTnZrkyF77msa5epTmg2tZRnLKUfAFy8qc4HzafKFKGvq5HsfkGVk8bodB2o",
  "key36": "DRVcqM7F35EiEZqpsWf6ZhUVFW5gvJGEESK5V9KSBdGKPtv2QYGxEpxdr2NWNFAyg4KaMd7UtJTEN8MLASsvHaj",
  "key37": "1yrEYb28pFwPXEmv3onYN1WV7M8U5zUVzxxKPG9VYpZ1awkPNXyq4jdhcpCSx7suSGfwNiYwGH8NW2qJxJfUob6"
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
