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
    "3YTEt7QJ6z2ZWCtDV88LThokrue2mDwLErs7FTrqhsJU9rhxsbPeiPjeVwiTGr5BoHqAZBntvpw8E7a2AVDdtUW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "on89f1o1SxRqW4o9SuM732MDCRbBqyZbL9KSGidn9vecTpp4G8aMnT1Q2hWtLN5awcmz2k89PLGYgXXyydjZP63",
  "key1": "3121AoivSbBPHFtTR9D8HtMG6kW4Tuy9pqpBjAJ6RVHTiRkZEDx6GhWC7brPDPK8J2isUcUkctysYTCyBz7Jcp2Q",
  "key2": "5nrHv7vDr2yLa4NH3Esb2gDfw9wnMwhNhbFpTAzL8FBU8SsxhgGMPciHnVwMTU4N7bMaWB7awX8EiAeGLKJSnisA",
  "key3": "511yoHzKwJxT39M88LfsAtXn4gswGt2sAuBzz5r9Mo5V8LUAPVSZPrUcDf22MeAKZBoAnHnNdKquCKAB6mHN66gB",
  "key4": "3dsCRXZRcq93xH7UDcHcmP1VwtfhrTdcFWVyR55xFeMs4VtcLpDtHDywr2QGxCBgQeNMG78fJpQLnJ5do9VMepWV",
  "key5": "235FyxPASSoAzpfC1bs4nD4pjcWtnYQU1vEFGsQx9v4Qcvr4LL4o2XLx5jeSdTxkuErJAVSeFovGizGuseAS4hVe",
  "key6": "31BviMcFfFMw8dGfzxUbDciFuiutWT8zrx5QNDKQUSRA8eghkzouy8wD2YUjpFKMbov9AV9dxSzPoZKmwS7i155Q",
  "key7": "51ZH1iPFdquYWcccSGpaZhzZUmguLw2HZDZL8f3Kn5EqAYMTcjZk9ayzYxjBNPE4m2smd6vS8oNjx5YNrkF6BNUj",
  "key8": "5mjMYZyHf1zmXMrnjfDfewxprv7N7CWBenFyN3rU7KSNvoKnP5fU4ZVEF76qAuX5UyWS5qs41vL1BfVMc3EuYk3Z",
  "key9": "SGRAk78tC1wkSemWYg7AbKpGsQc4w23Fr3B4RELdVxQZWhiKhg76tLYaYz5tCxnvbHADxhdw9Z4WujG7LDCJkHy",
  "key10": "5vKoP7DFYU1d7mqyfuhk7FsK4NaYGw2AfxWGBFrcwWzAb9HrA7LhfyjyrZopREyHr8xsN47gxkxYRPY2ht1PExLz",
  "key11": "3oSHtBweCwHzjP5HfCtZbJVafmREPPiWGdd7f43votHtsvs9SjprLiCNKYugrpSmaeuBemthyQyUZkcp1Qx7NcEF",
  "key12": "4nzeDsojXht4VV82UPwH8K2Np7kBMhSJiJ47fpiJ29VHgaDujAAHeGbzg8TDhnXx5vgocsh5MDqgXfYedKbZSk8j",
  "key13": "5jFnCKBoEsyM6ctLxayttMgprtBFefY3U94RyWWWL26eDtaKH9GUweUGm1X43bjsoqvyvr5LFjQ53R4gqvNqT2Li",
  "key14": "4V5jp7AsiNy2ocSAK6egceqxXmHkXAKswhtXjMVFkY9fxbbQmz72zsVENJMejwnQGDwjz54vVrXDs2Y2wR7ts3f1",
  "key15": "4DQbErhVsowkbYHvZ1DostotQrPJJGeVNn4ZPAXi21byRjvQkBJMttYZ7EY9Qvin8oRJHfasmr7FV4pngjBcozQG",
  "key16": "5TuoD2KRdF88SChQrh77Vdb2rvG5eTXM3qYcv1u7bwv8i5U1qumZaXuUQuyfD5N7cSutnHVZS3c6r5t6W6bC7BUA",
  "key17": "NE8yCkDWzewKceussNWDoYvNAYwKSJ3Jb3WA7WK6GnGBYhC734WLKJk5UPLsGiHAWDizEPxfk6BKopFwqpYzRK9",
  "key18": "6Rr5PXKELjpeVfLrq2FdSPXTeFa8R7gVskeciRoqd1EyChxy9iXW4bKAN6UXp6wbhKV6QToYix6CD487qGCA4Wk",
  "key19": "4PEVeEAe36qpqvcjqFXJXFtYNPkqJ9u2txKBHeUYpw4NigHYmC5mNoGaMwUhTX55SohYdM6dL3t6gCL7q9JFrbLM",
  "key20": "3pos9e9qzg8jb1buqmQ5q7YX31Gevarj95PhZzqKjVr3u9cKjay24ejBZbK8SfU7srVpPS5Tqw6NwMf6yd5PhSUQ",
  "key21": "2ADCHRK1HV5EQDGMa3z8GEcTcJUa5QhLN2ZrCdDrBUXC3QXUcVj34zttWj6WGGk2RhNFozDCrvJptFjx2rzhCvE1",
  "key22": "3MDZeSBqCzowjgAuRbRkqriTHeVWkL4YRE8nJRbfEyJcj1dpveV6SaPHR8SpNAMzXwmxALht1YA2QipWRgNJCQJ2",
  "key23": "tK4TvGTav8qaQkLZhkS6wPJdNaVTCwQvrCqusGaZVxCm86MzBnoncyU2N4EtUAzt2bbdTc6EgzwazF4HjfiwQBH",
  "key24": "4c5CyYdreZGJLcpXWzTZZWsiA3KAfvujvbzxWAhh66RsBsvVwSCHbc4MiVgh6nbQ4wbevpvXrcHHdkpsJ9b5TZGe",
  "key25": "3RHauBPzbCgYEVYcuWoXVqsN23npsuPRMAUxBuNMY6wqbFyEaMFsUum9NcfEq97riG4eqmfwnLmZdxeujCJ7W6Bw",
  "key26": "3gW2xcyCw4TJXmYEtjJCjZweR5KbKgxSCFWSELfAk1EtwPhvSpMrrMkeQmdX579FVuwuZZwvoVVZgDUAuMHavymY",
  "key27": "3pz9hQLZ3e9pggBrTh9w1JHjhoLDUhpKfHSkdiuV6BTtSfkmCGtmB7osZxfr9poerL2i3JshwLmrhektQJghnLms",
  "key28": "QBHsxFFXHxw4UQ1GgEFCX99T33sJEoKC4m2DJ7niqVw7rdTm3wNyhbkGbE1Y6FKCraP9HMsmR3fmmrGJcy7nqf2",
  "key29": "4XPzo3tUDnR5zgwVkwDZQvJRbeTkpPcHAtcoEH4hRxzQTSKmBTPR7sA6Wyx8w2EQqv5A7WhMQeE4Vr9Wr2nn8vj3",
  "key30": "4wxtQRcyMsPLnnq3PCKqTQejq5EbuHj9cBbAXmMYjaPpLXuvmyViajryPfbE8iDJH8mmZ3cGyQAeQfLm25KdLoXB",
  "key31": "3MwTKSdoRBNAhJtQBvBVY9a1CFKPnB7WrNyFTx5i75ABQWCsCo7kNcP4SRAvxFa9tk6PfnU8oZEBCHtZ1boM244g",
  "key32": "4z1jMuwm9xxEz2Fnx9rb8ox5Xe4rxVprD4RNvgfMJ2XPkFm8yy2bueTSuDiZy3VQJpzPUTq7LXP8kNdp1fb3BwQ8",
  "key33": "3iA3f3p9HMBWCfrWqwaKwqQqfKHzBvTNMHLK1NS2KY7kt1ZSyGfDtAMMPrByy46EXdyZCkQjjNkCjo48mix9FH45",
  "key34": "4hzY5XSpYusXT2mvuDSGLSBKoSDaD9VfZTdijvVaZwrqHMW7sS15wYeJNURpvmTbmpb229dSBy2FrjpELTTTXSVK",
  "key35": "2RAeTqoErsXsQ6XpZcCwrvC3FD1LsVk4cxEUmFZ1c5N1SePTQP9HLvWnBSfZErauXgxeUcrqLCjRGay6Zumr1i9u",
  "key36": "5yrYfrqFfUHMQh4AjJ1Q1r78CsBzXKeTXtgouv2vmSGeQr4mef4NzB3pG9v1sM2NeTdqsEq1bBaHNSfqTjmd2pqQ",
  "key37": "2ru6LsvDUw4qjZzcKWSNwUtJqcuSaaPPmcqxsV1dLgVVyAKQAaaEWDqFhazV5ET8HjhJpEFJNxqjbUtSicbxJ2Rg",
  "key38": "5QxhTNyRsgUh27UisHHANtWp38BpNEiMqRvuBRJkJjMGCGj7A7LGrg6BSEusZ2F2UJEvKnZpkCMQHi7c6oFbaXQs"
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
