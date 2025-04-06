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
    "2mGQGdChWC5vryGzLPD1pQPv9vmr15p1kX2aMtDrUZwAdMxK9k5UJHy5koQoGVUmkL4fdNDScPXKnC9ip2haaR5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BAc1VAKWqKi4fnCHfh2wHmHBeg8hJW42hot6prFiXf62AS8jio8MAMEmUE7JJha2jHZfoJG3rB2K5D56Ry2YZEk",
  "key1": "4jLtPJuNGMgfvmGurG3hpMsmnCbqexnc79RDAiDQ5mcjfxUDHnHkkotJGCsNMtQ8eVnfwZoJMj4bvHzoVSAw1ift",
  "key2": "4TNVpDG9W5bpVfQ1Qwnri3Rd5dDkkeN3Lh9pCXiQNF96P1yiNNeGNDbagye5MdSx68HBRj6w4MdbGMUDF6rKvGyD",
  "key3": "67rk9sjkAtRrv2vxvQYDzseX19sZL3iwc8T5xEpLktEXDqouFdTsTT34F7QPuPe4aNT5L3oPgErgYGpnxPsH7HBv",
  "key4": "2UuCz8VCYyhDLfVina9rH1d1mzt7DTkrrTGJZFtWpwHYTZD6k8fPcPJFYYpBiS6xV1yqFcXier8rsdieB2rJVH4z",
  "key5": "57Vabro8FpzszmmPqY28oohfbLQZV3GrnrpGgM5JMarjoV1o3vYKiWVpWvwvPtsX2D2iQR22F13bsL3L2aX1xRo2",
  "key6": "4FdZ1rp5Y7Zir28HsiLVKUQ1Qa7WzZALfqJZDZovFUocTQy2S7G7tAuLaNfAH5KrS4y7qffPB2hv7s6PmwNdnFDF",
  "key7": "2aX3J4acmAthNbL66EUrtvHkdNZQLbpiGp4hm2BsBtNQdPtpUGrgbfBTwetDdSA7eAvLTGySgQt5Bm7GBkz4Dzyn",
  "key8": "5CL1t2adorAsTkph2rcjwNEXXW8qmgybj9cKbSxV13hag4NXYNtGMp7p1BCfjawKX4P7JXNiUsw1YRKRTp238SYj",
  "key9": "3zP8nNaCh2kuRdPxyyMJQc6YjDeqUWsi84qRWs4CPxjm1F9K6erJo7XWDT9Uv9Ls1FG97F2gnLK5AKkqCVkyF3Su",
  "key10": "VqgrDKX6918g8FARnNr7d7UNqF6HZMf2QyHev8u82S741NGVdyasQn6THomWq75pkhg5tkL78FDSyN8CgYVxUQy",
  "key11": "5AYVSScVTiSAZ9LZfyjZMAQhXcGX3a7pX9av72VumYLJX59AWpT6opZcQdgFAX11tSL7rtHDSgb4UhDX5ugP5ZGg",
  "key12": "4f3hQtLkFv82znaRn5TGNtbLKaaNXnrihbekGp9HqTVuWQQtEcmMSRffq4zCKgqGoA7NHECvjAU2CwDND1CLP9bj",
  "key13": "5BJ51MVthXo316tCPUs1jEN2ZV9HHNDADPQRZEn2X9dnbCTdmKY56pTLBECjoGu5shTeg4rwucpgfUX3hvsHdyE3",
  "key14": "3ggeVKEATsF5CqzCMKbhgUKuADfeUo8gUTY74KrpHvLif5pQjtmzBea38eQnmREWcuSgQexwRCNfqoJP2YMkiPgq",
  "key15": "4R7CwZanbsoRPt1uUBCeGnL86yeV2QFtkzGuAvc3j1uBqRt3DNGQ9YD8yhkdyNSojoyCBVM62SCNbgYyDQRooTXZ",
  "key16": "LHh9QVMzZducQEnX52YmYZZebR9fwpJH34iyYwGKgWbQvcUjX1fWRWPP5ZgStGrZnoYwVnb9VEz2xePr7c6wuSL",
  "key17": "4Yuo7QkY27i3vM6f2Y1NnXT7AQWSm9WdRvy6h267YBxx7pqrCwYghmv6B6PzZ1AVi2Qwie2vHs7ypTpKo6nktmTk",
  "key18": "unjQZ71HWaLPBG9bM6oN5Zve3Q2vS86724xfQ3cqeAhfrhTkLwAaRvTX7sgyxVUPxnVVyFpBqsQYYVyFaFgWRZu",
  "key19": "5J9L6ov1FkP2ZF6GDikovsNcsyMUamney8Rt7oCSVJBRKeXwLPh7QhrsnBJ4SktuXTBpSjXJsLisgPuwwB2K2MtX",
  "key20": "3ooPiz92YcnhjKuXeTNfugtZMTm8dM9KNr4QCALjn1krLXNjDN6LojCHjcMDdnFpW436a3vjqcx7FtPcMAGy9tWq",
  "key21": "2B4VCYKZmikecS4qRk31mBEbtFbJAt99mpAnMfkNV1FPoV22CurUyXAXPwoisV7KKeJt8mvohpspygoLDjTGgMkC",
  "key22": "8YFfHRRfXrAhhid2kFazdyjYbWkMo81o6emVEcF6NqFeqJQx4fYCCmu8s1ShCXbhD21K3eyzwuGNQEJYwEVeH2g",
  "key23": "5mdJQaN21nPsCMWMzTw5nRAHVs8oYhAbb5BD6853WpK4gEW2ikC7gnaPea7ruMsY4cFFWog2qvodaUD6veTKHk4F",
  "key24": "3BP4BTY8WQxGLgcEJMQVUpaZbijGKxFJmXbkd3LAwVqy7iA1CWiwARvPAQVowGHd7Lu6eUGfzdDb9Tw9BhErHdQs",
  "key25": "26VzCoBdUMsN79H1rs9B3skfekgGvDX73AJhADf7MVkUrB74Jv9uRWKbnLrQ4UPmxiikwTrg56HSioroKUYB5KHR",
  "key26": "38FTYDVenfGFHphazbVbqp8SmPW3FsAaNtsTFhME6nXNs4x2qA1YL6DZGFbMJupxCx1AJD3uSBdJG9ZY1CoLTv2J",
  "key27": "2jQSaXEpamAJBLFygCvf4VHHAqeuPrQgaBD4aPDTPiFCQ883dgiSZGNpSKfEGyPBhvQmmb42zZ7vLoTvyPErQzj3",
  "key28": "677VPdtQtn4WsFLQLn1JxTPwdWHodENr5iisGtVcH1ATSaedpYdLhu5wCRD6yekw6uGMX5fCcdeqGYoMEZUatsV",
  "key29": "4p6QiJNxVptm11mtFrUDKr1SbEa9bSPMcpVcTq4Z9HUu7KCXkkmBtRTiCQ59dgVRygxbRZx4oKk5WHfXsJrdnSdB",
  "key30": "2QDmdJgrF7NKsHF8pykFt3hEGhTPAnh613dpv7sDRz4YDvMZZeygSfJMsxYqjQKdqc9s7PtMHRFv4tSGoUno8GmX",
  "key31": "7qYxCa4VVyCYJxFC2Y5WLxwKN9jKNPkrQCHk1KS3hHLYpRfZqnNknjy1uD1AdqTez68NyqHsbdzKoYPi1Jy1VEN",
  "key32": "279d5T3bo1Esuqq2vdVj7j89Pczmq6ED5KwqLZD5kwyHQDPTzU8CgKqzLEyZRaFhyzUWaJ3u1XpAp6nCDNTKZGHa"
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
