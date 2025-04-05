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
    "4VNAwtbvFa7uvkYWDKbX1g2QBkRmCsRTTqWiX72339XXcu7cj1apc6r1fadxiMtQKHqBP8paUVGhrkJryHHj18kB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1SpHecPDXWHwiofzjczgQdDiC4xa7cDdDiBsx2PR4J66j7WZmnRiRvjnTzJstnAgVLZz3UWFtvAMkK2BX4oqBYb",
  "key1": "7fRRnJNsQZGwwxXpxo8kuNzzVncK4jywcS5QDyJhrNeUdRsG2Xbv9xsFMzY4iwwQZtftTAPMUuF56VctmqKRUwP",
  "key2": "3T2WydbZKNXHR3j2HuDidAqSj57BhwLCSkzJ5NkKXfCrSWptuGTrtrBrDDyz2nJBmyNAzNVshTSXrtxyqsUtrPqG",
  "key3": "2TU8kAocMpw8agRVWohnf3HspWG4tQ7vTWGckQna9CEQELTqYno1fwJVicqQLc3kHJQVHGkW6561tUpWxByLuyAq",
  "key4": "rGvxggVsLVmxTB8bFZ5xVBcJuLQL4vHtLEwyqXnj5ddySowRo3HBVpi5FTsSG8Puj3NZim8iQAYXyJaK4xhHHUS",
  "key5": "oSqPSaxJwjUbpUQjbiyBCPZEp7Ywr9ryFgEqkv58FcgNxHYYLfh7AcN3gYQMiVAQaodxD5D5GGd5VQDvRHATAZA",
  "key6": "2HpMJKebW1sMWJBxPg6q2Y8gUtkDUm4YmyrB5sMJVgAWoBNWppgUj7UKLRKKbX4qpA2QxHLNfrFTGCoqi4DPPts5",
  "key7": "2tjJetVoWUC7hyTQ7yU3SxZqMA3g3ZshmbRL4XuyFzBpMLu9JabQU5ebgjfPyY9eKL6WmcD83tmBVwrwcT955MyH",
  "key8": "3Am978TXjtxq1tT6vb5FwKEjhyQtgCjBgXEqZYqPBAiSxKMX554Bm5bpLzapm3WN8kZDYjMX4SsxwrNX5j9Kyv8R",
  "key9": "4VNuKVfyhWSF4D7oqSFxJdqukVXC9Af7ShR3Msy7abyDo99Y9EEqyi1URcrNUqeMdiEgym5GTsRUN3prS4k1sUGQ",
  "key10": "fkcNnPapqiD42s5JJuNckN7TTNq1wKAu1ae2da3YRrniFNYpyFham1CZusHP4jaaCD4dZ7v5CxzEGUg9VBasZ36",
  "key11": "2FXXh82Smc2mYf6MMYQT5uQ5tTgUJhbsRk34zX25Yt8pUF6wQtvhmCvMEWKdYneQ1wG1LVxavQ1NeCQMryLd6DzU",
  "key12": "2ppne9Zz3nzVF79c9vMPtnjAP93V9SU7tritXNNEJWJzEbEmXfjDLayuVLxVtm16iX2Q4qcvaGoCeaKkgDnNu9Kp",
  "key13": "5x9oTpoXjW9sUaDBzyZHijwfihuV7tuowhm3t1Ed54uQSFBm3ZG3JmcRGzayL5bFkEL3S3VJCwajnemJ4Mk7vhJD",
  "key14": "4SvQwhYMnJ26UYi1jy1pwNzx2sw27k9uoQsVZJVQSsRh4kaKGUFsQx31XVnEceiPsm9doinqdPdqK1irZjcQJS1w",
  "key15": "2E8E8yJxesxrbE3RToqC7QfGE7LAgsGXr3uG7z4E8jhDFmxTpcCgQJUcmw5b8UUAPyDJuvM8Eugt23te5n6eeVD8",
  "key16": "5Lh24cuSLs1i58eJmhUBPARZK9ZBC5G5x9f3W9B6F2Rz2sWXtviLyofy3R7Yih89KWPtcKE4jw3num55guDVpQv2",
  "key17": "2xZw4FtN8CyUZmCRsrQ3hBtTTcP61MirVvBm7ucDVDDeZ13eXTmp72koBwY1c51vv8Ae343bnCh5Cba6KELoMiee",
  "key18": "4TV9YJ9XyKnhsHc9Q7nxmwPUSJnbQPwNNPcQXXoXSfYGmiSChRf7juYY91iY4djku5bZ9dEvvHVCVrtcTT7Lr9La",
  "key19": "2Rwut8aQc78fX9E1iL3JEs1jSF6qVR1FgHTdDS8CpXKcYTbo3aF73PPwdgJWepbwcJDUWnnUvJAj7rZniCsVAFKf",
  "key20": "4btR5Audau94PJpS9p5cVHVwjw6hbS48aJhYa8ehszw8vMsqzqfxW7kncpgdKEXa5gCpN93DzFHYGWL9GdW3BXL5",
  "key21": "2bGwTMZk6fs85pxhUX6G2vbVnJVLmwpxq2EyGDQVKwhXSEZbuH5AixER8fSqiKL4ptXiBtF5Ai6HUj1bMJrE1jVJ",
  "key22": "3TZwinJxSCVNJgWp1rWN6XSXgjvBG2ZGMuy3HxMCBeHZNwmj3a8pTBFi5MxUaK4VQbpyS8b3hfE5dRoHx8A8fNCY",
  "key23": "5C1xzqtCyxr5Jk69pf6Phhx9JeEfLdgmektEFgdedE3jbMU77SCryGEKSYFzNbw7KgNVsJUgipXfDvqPsuZAzsDR",
  "key24": "5Eh7FPPsbuHnjQxkMi7hYUZVfZegH2Vdc57aMeLa66rr4WNvkzjKrAd6r5omvcvPrdpdiLxYDHpXZqthdTuWWbDp",
  "key25": "3i2wh32Q3o23nFV4TBgm1fKu1pvA4hkGjheavpCz1sQYLwJc9FocExkyo14tTQNYRAZy4w3Tk4scKe2pKwQhFdVQ",
  "key26": "2QMhFuw7CXW3uAsVdMgGDE3iMLuJRmGFgfab9GKFx2G1r4brztgwPSbKqQe7ZMTYeWsegDdo1ZUBxrMGwag3HBuA",
  "key27": "4W8wt1u3egNHKyBSfivF8S6uriweaGiF76PZkWQs95Unj43RqfmxFi8WjnfgkCGBD1FSYYSKijoAqME2WiXTVdyc",
  "key28": "4UJ2eNn4A9R397Gym5936MkDib1ZryXjzkiwLB2pSTue6WECVBqHXphPWPQGiq4qd3LM1jCUptsjNPrX3Nz283F2"
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
