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
    "4QchHdZFJpBFhj7uPwxcRGVCrGeoeaKkzoqbxktyGDz2y6i8YsUqbepw9weUxBjsyKXB19PLpC1WFBk9VHjMwL8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kf24Une1kEqN9QCtQLEy8GySHrcNwDibLXn4pyLoBPYWDWr4L9W74ks19gFQ8KiQH3aDim553Evw3vY34b1d1Js",
  "key1": "GU6Bre4eL9ZUr1GFHcC3WakdyM86TrTb6ArVENaYwmzZWBQVAPhxXu4ek4t1QFeFYNzMpA2fa5riZH6VzhSTx8o",
  "key2": "28Rbap9vx6Vzi7TbJQTkb21PHPL8AG4NUwFijdQrsfb7UD8QhCCdHM5MUDMtjoexkCHWBf9BELCL1m551rpj5EQu",
  "key3": "2qCbdg8v2cFNc4R3PGEkyVYyiM42S6AwXgd4oewLxJ3x3jFwx8Naaps9hqYy75e9T1x293RrBAw6NRDPB53xdksD",
  "key4": "3WwWvsd7mMCbWr3RdyU3ZaZcYqzksoPCvPzoN4wMCuUTg5qqcYmUshfhqsHPKc2WMQdLhBECvabt6BX7k4gwhuKQ",
  "key5": "5brZmcNL9NYZ1aajZdKRrXkYCKZZHeT4T8LyDFPcjSwaidHdkMQntz4BGYppGdDzafVyfoxRDPZo5i8wroyzjkWa",
  "key6": "r5bEG78uNcjeTQU6uqsDwUJ8Pf9JV4pkVJwYYvGft5p5uu9QXucGnPZhibjzZaECcSGffyRjAqhky1Y8excubQK",
  "key7": "4JPWoRV5EdmmVpcKDZ9r986tUTMiFMtAxDUw7ZvsaJoARVGus8ZhbxRt61qWtv4655ch3HZRzftb2vNsd6fjc8Hs",
  "key8": "2usjWh75f2kwJTYhkDZ9Jx2tagoEZHGPWRh2kZHrygwjwoF4GzeRSNbk2iKuvvDsmk2V3fbhcoXfzJL8tnminEZa",
  "key9": "3Rx2r9KkdSLXHF5Ed4K533QnMjjdr1BTZkDcnPjCnKUUw1oGjn53spzPCLNDcYcR5DzU5vFBHsbBQmR9fkvYVSDW",
  "key10": "2XPJwXAar2VF7MEe68kSwfUh6wgGLizsXFBu72wB2XbmmKFwygG2Y4kuCWwf1PqxRiG58aTpBKJ6FCeigGJnwiS4",
  "key11": "3Tt3hqjaqBgLjcgEGfPpHctPTbdowzFrskEHbSKfSeFJ5uHjxZM2Cwf7ipfvWRthDtmHb9NFeyQKqSwEKCsx2CJL",
  "key12": "5pJCWz5YymKdUkBrNNWbxYjC9Wv2rQyxLoJrVvPXwkXE3zCD16oCC9uUKnA56H6dD6dUWzfKyjApBRrDVq2gRvir",
  "key13": "5EF2q95drEjs5cp6NpaYnYLCgEaJjXUuXvM1L2hekfmBG9iQ6arydS713BqEwBZg1jErh9Rwa5j12L9GYJUsXbeZ",
  "key14": "3Mmez45fJD2HP82tQ36hg7pbNqjHRUEw5A7rMvvXq72gZDKLAALgStuCxYjJWGyGLWP3UAKfmqXAffXQwNSsHVoL",
  "key15": "N5HdxeMMiLu6C2vqMvPkvWrXzpqUXmL6UQSrPYJ9rn5X24cMHVWimKsgZt44REuE7ULN5jSkJKkuS1JWH5snYbU",
  "key16": "2ZMEqo1YSx1ZTQpbxkS4p34CexfEPa4UsfS23mycGsB3z55vMnSdvRk5vPSSmGjciVxs1WsM2DcKXYb4gXUS972V",
  "key17": "2Rwk7dszcCuw2228UARyicVgk6ekLSsboninYcGRaC4auPuTxzTKsPSbv9d3gPEywif1E1qiwQP1g6L4fPx362gM",
  "key18": "3PJZWCKjYmctqgNVoZAvtdHPk5H5f555GkPT1Q3kEHainzexryh4DKHfhtWuMLF4r2vmW8dJBkThYcwuKwL27WiQ",
  "key19": "7nn6E1FrkQhfSBLRGjzPy1KgSgDe3DYw3HwLBNw4W8FDCPzkD5pd1oEguKb4Mm2qVzp39yd9WkydH1vLGXy936S",
  "key20": "4Sf91xZpD6e2bXsSWS6oyFh7RzEAK6ekw1bFYGtB4ASN9WEvH43tvRtH6ZamdVLUjiMA5gwTtLQ8xGRWzrHWLhRd",
  "key21": "2W2unrXoyk8hL2aGLjqsjvwSpCLMw9NRP4zTa7pf4y1ZJLCRuwL4Y3AQWTk8ja5K6rG4z6BgVr7QvvxAX6kQjrdA",
  "key22": "42H3XsHr5iNy2Uxzsys7PWWPzJ2GtSiSKnjWrQ3S11cNRcaonAjKPoX6dBtkryfRYFtTWHS7T8Thi27quR6fDRox",
  "key23": "4jFe2UNLbKR118CWvGL5WkvB1T3LCYgyQsWVcavAkZtMKaAwV8hsAGH1FzMqEVCH6gydyWH1qXeYZ3w3EV2BH5tN",
  "key24": "3qaB9CQt69uWUu57Zq1foKJHGKg5V4UbrFP6Xhu188m5kHgyf9vFhE2JY9Nasf52hYNWF2a9zKXS9Q2zyRTTayAF",
  "key25": "r5NkQyQ1wGMf8ia5VDR5cpFy4zx71RcE7f88ZpGjTWtMe6PGf7PRESL5vE1fpomJ9L122saYoAwUHaCNEBrDZBh",
  "key26": "4MC6jy6aMSwrfNw7kZM4R9NAewCx1rmEUs9K1vi7iNEpKXLrNMks7nDK5LYKK1bv4v8Stn7WAt27JdPJaFDa94qh",
  "key27": "4GEJNi7voKTAB5VMXsovmpiZik2pB9pDidBW9aDt1ghftUNw3K1qcyPaug1SikfAbzro6Wps33JhqHmm8TVdr1yg",
  "key28": "56U7T93e5Ny5hUkw9MGoVAgYz6jwDQgr6a4KNcQ1pgdKaNbaUEv2PmverX4pd8ddEzeYBjYeKHMoD8z4c1H6RQ9t",
  "key29": "2t5ieREEqi1nuJMSTCDCJcZ19uaJ28AJqjtQCVEQJEBk7FVBwpLajFQN7n4ohfqYP9JxKksTbm5a9EKKzFhkmV9e",
  "key30": "5Ar5m2T1mHs9aZzMmUdSbLXXYceKLabCoz7N5RAGJDUH4YiTLnKhDyf8UbKxXWfQoeLgANbUaUA8hMNmxcnvbRoZ",
  "key31": "2XgcW6TDswntWyZVtdWkrTezW36USdQddPzUnSuGRYh9k3iUBb9f7bwZcG2AQWZhmhmGr7ExzxBcsLJscBQtfdX5",
  "key32": "4HJrUoXH26WZsq8JCJCEzXrMr96yntmQDpiksvL9Eb5g8Kzyy9FsnnSK2tTurwYvsAehbRRoNgUnokHczANpysUx",
  "key33": "5E2umL6uW4zPJV1Xo4EJSziuBD64JXy8zYXV7gochEvDEQHHFhFcTvFFVjYvi6ouve5cJ2Zr5C1UFRMwVs28Ak4j",
  "key34": "KZdyCKo1fmg1Tif35R3z3MzVtME62qXkxCLhdMLPwbiUMh4fmtWS25QnH8pCGZ4ZrGdZ5T9cThuXrokRMoFZDkC",
  "key35": "3puj8EvYL7Dnk2QHhKXYqYfzhseG6yhVAUidE7xR5NMCEPk1GyyzFnsNFyRRc18Y4SSKiH8SrqhVewuoFZW2TcVi"
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
