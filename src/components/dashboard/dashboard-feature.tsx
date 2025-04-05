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
    "2Z6qGZ7HZzYzRt9yAuvTbHzALxHLPWpkR4VHsXJtXiiJzB2YAhDosaCcjj1VawrjL78PXwk8YATcJCQ5bLGbL4Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ikSzNJs5S1ycXfh7SFiAfoPXiJj2aZ8yHecion2ddWMSRRe2Vpf6Fwe8oYppmbLkR7DLZbSGgiSTDcgkhFEKjTg",
  "key1": "5PovXxY4ir6428KGwyQtjney4rhXZUTZG8QGTAgpPSB7LoFgbi68xHJ44dgwpmtzC3j8jD411qxgZeZwWRp3qwKW",
  "key2": "2CGy7h1sqmbLQdtPW4dxEMmxwvnPUxgwA1cq8KGWbrwdpbhFYLdyLdgpxjG2xeFg3hWj95TcVYWbDVkUDLzDJBXA",
  "key3": "4CFL9k56Yo1vuCf8GTuYRtt9XEUYRm64hQzZgPGfkTDZPYzHBVnnVfdKY2XQPVyYhKJbyQed5uUnFWvk95jXf4sT",
  "key4": "5KRS5J3Tv31ScSRMnCTax75LQFihMVTzzVX65BXNVobKKVZt7oLgW84nD47S5zVyUJfoRJQxsWMQom3BE2YwgizS",
  "key5": "2ALY8xqLFGJir9wCXd7SQAAVwy4FwPhGWiRZhZZiTH6PvstFWdp2zeTqn7sG1SEJ4VD7SR4rtn9iCG6oXpn7Deb1",
  "key6": "2c9LYMyiQyX6syZA4AHRXS1KTmMdyjfVTSP9KJLWQu9e1yVUDMqZuux1NuzKty4r2NJ1RjcJVkyBBDqJckgVxsco",
  "key7": "56H1CZWNoxwJvTWiUJxFEM9fWnGPsughmtoRzWiBuBf5PFNbVCtqEDh6GUpMk7hoFyP9u4ECyGhA3STLhweGMNgW",
  "key8": "3kj69yx6bDuJqZQiHxDvPRYDoPXH3dxqEFkMjC61rDHWWC8UKYRtWq6k9ErqkQriYsbHGCveeUfmTJuUpn8JYas2",
  "key9": "25DsjHU9aehLFx52gcyKaBjE4TcHTDHpZovgfTQMS9MfS3nzsRNGN4DSGwJaiEKXrKhQ748Y4yn5DJnGtNqQcxuU",
  "key10": "uyvGUB4YU42WeAJVrR7bA1t5Wca989f762V172ng22HxqcUE1EtTPk936bLP6zi1VnJSnDj3XLBG12ujmLhqCK4",
  "key11": "xSJBwZAiHABUg8s5uHutHW3zUyUM4G5vLRK8rt191Rbu1hERz8rzuicDDqcSNggkGTcAKuezkkY35okxVeggrB8",
  "key12": "2RbGBq3vXXb8mPmg1MFXsb1ZBudefXECFfFK5TtT8NeQzPL9ooQCB8jTKMTJmirrjhuJnLjBuWXRbsdDeBa8YUcL",
  "key13": "3SgQEFWnKRSTkqf1cxZf6hFTt8QhcLUaV8MFSsQCxZQRwGiCPSWmjEjtwfT9PBQfzoTiRwSRNKMXsswN57L8BEv7",
  "key14": "omDqoNNP9Vw7dwSFCj7Zj2Zo43KyDkMzAgRHrvQFxqzQAkEDXEteNAEHKorwtrvL8hfQXxden4Mf4zrqYvJSb13",
  "key15": "3fhRLtH11SwhNiB71j9bsDSB4aBEQeW4CT6NeAb5ZbdtjBraWSD5JRVn1e5SwjfFWt6ti9K52ipDP7xbrA8FosaG",
  "key16": "3HkfmqvnnynhRddhHVT9uUxSjo76Ufd1RS7wJePZBxeyzUUCDS76fwEFfctMF2fxz6Ssqw3k5exUDY23XJMsAEaU",
  "key17": "4ny8hptu26vsHyFjKK9ywavmpXvuyMhmZLseqETC5W13dPtrs9JtoD1pqGu6J4CTTE7Hnmgkq98RjJDN1niWJtcE",
  "key18": "5YxNaLzAb2Dxt5k7RtH3e1vFir1ZgZYo2sS1UEcbiAVsqhY41kstdfeQaadhmhiMJMoNxDC3jionm5wkx3CLk3CU",
  "key19": "5cF1Zm1kKjMpcEQs4C6n5tLS2tNjHcV7vQrcXQGeJmUt4eZeJ8eqHTdfAhryWnisoTFZmvMNj7b9ECnhmVqjXx9z",
  "key20": "57kk2xUfXmZ2mfJBGKZf8BwFyvnTQk4uUJ3KeSYAu4nsE5Asa81Yh8wY7DT4ZG3TYTaRYdhMwgXye59WxMJVnxuu",
  "key21": "5bJo9BzHWxTAAPGjHccdSmxYWUt768sqAJcZP3EwjszgBSsg81yaCiqqPVqYYLcxZc6wVauXCE5qzEAYqsG6sGCR",
  "key22": "2y3mntjXwxQpKnnhu8MKc8KdnQcZ2yHDzkdHHAYv5XU8J2kXvyzygmZstS4ULhVLqmdjDxeBfbie1bTaCENznNaw",
  "key23": "28soP1QhnDK6ELioCuA9QwfyYHWCS8UgtJjWkZAyzSYaepqWoze5iZdYJ6P94spzkGZQBSXGg5dJWoyewt9SnPF4",
  "key24": "43TwTqicrCewBbfJiZfyArrpFq6z5fFrgQ3i9Eww3RLh7WSJ4UaWTMWxjwGzYw5xo6fQERyVejwBiEkWpgPCQgYL",
  "key25": "4wf4xgMsFftbQZJCHrgYCYjNhVUKXL1ZYf537LzMApQ1fNLhN6RXJTnNQdJ4LNRWU7JBzFrwHgCfDKQ8xg5xAu6P",
  "key26": "3BBfEjru4SUsmDo6RnnGaLmmmrb7mYx8bXHRxxWwMNMvx8jMEiC3HZEZcG9bMAPy1e5XGT2FmmZBjoWH2RJSp8Bq",
  "key27": "3fBsvYaSgKY7Ub1WDxVbGqM7QcRuqRgZiYRdc2s8xSnzcabPUE6ot41rvnKaU2Uaf38CRqJLNLrNjGfd1b3NRAYW",
  "key28": "5VCtL5AFRs8HyKobLKPF4XQatSCySgL3bL2cmFtMDf8eQeFFYThKtpVtiZtZGF96siGA225xPmjDUq7pWPsSos7U",
  "key29": "38twhHwrm4ytev6HbqT6b78b1GEMvdWWm5s5hcr7PbtNDWTwSbHycrS31Afvsp6aH1FhbbLrhsUBHh3zQTAq6HET",
  "key30": "2UxNiWt1uzREoVF1yUsZwHc3r9fSXviD4QR2bHQQ4Zawz8J6hSpnuPwbBJfdzuCQT1usuvfSCRYP6ze4YDLK4F6E",
  "key31": "4ddBiBuyEaKsDtr3kqRk5d4cWmuP7f7gY43EFWc8P2zJ54JEm63YPySV3pGS7eAZ4o38H7KmJXHdHY2CgKycVdDA",
  "key32": "4p37gfoqcTFA7KxrtXQ8MkJT7hrL5mCk2qxckQRTxFHe8FhJaoTQbxgZzKDTcx4WFT2j7dBDDooDvHfd7QaZ2mSu",
  "key33": "Y8uCtLjieFnQAbDwt5bD6pGULiRZ7VfRNjehzkw9vqN5nXmCLeppiVKn9ZxMwUv3B8F6nooki41PF8k7D8kxZv4",
  "key34": "n6pyAEKCVHWdYdFrcPmxFBKWAXYgFtD1LsnbsybpTBmEsJSCiY62bgbZzmrcamjeYjthYbWiFtMkd5tyCYQ7zcP",
  "key35": "3BoayYnSi6Rx7T7W29bB4qc3XhzcyuptnWftNy3oFnHVePpSbDk7GgvBpF7cjQtxdcTAkxjVtgQcYEXphzLX7JT3",
  "key36": "2yX88miRcJu6b16WGHsoth7zgZFwTymMEDesm8eb4UHq7Gg7nR3ZGEXMJrLRhB2DNPtnCjLtsyxec2WJQcSh3FBD",
  "key37": "tpN4E3uStvA6HWXgLY2QGSmWNfdfKrzbqRkyB4hxeJ3pYj4gH5Co9Zq6Ly7hVq6A8PDoS8MRPivKYr9BJVizR9M",
  "key38": "27DigEaPBJLN22rf6pKaLXqzLdmsH1zuPCfFvQBDBTtb6o24YLnpcVtzk4xD73HHzfmSprXPBAxX5CAhDWzX2zmh",
  "key39": "4jgnv6UQwoskddEsdTJovv4gn55GQzDZ7wJjyAcnM5eHwEjiUpzEFHM5QPHnGyhdVhKoe1GreoVwbNmLPfKSACQc",
  "key40": "iYincNgn1TNdXKVNHrwX99cHJ9Dd7tCmtQV3wBdR9192qUt5fHW2jeytr9wSSXQBm3YmVwpEvi3dz6GsdyEf3Cd",
  "key41": "R7h9Jk8e1WoGgaQJnczz1atAwPfuUWzizDPpSRXZ7aWfPRLz7QP8SXhNmg7dGrVznXURCtCZVPZC6stqVCaMfmE",
  "key42": "3rAMVJ9N24pdCErf9MTnDwQAptWEayBCRZLHBAvnnkdM8eDGedRsyG4nsLeGUcWYbK5nSdKhdAvdmDTTGMNdsN4V",
  "key43": "37hwg72ankJHWK82PQ63d35DEizAMnVFQZv7s2456bu4McumqTwUVEFsf2T3EFZeWr5244Cpd2Cimec9YnQQSX2N",
  "key44": "3pEXDyYXxJYXdxA1A5aMghhamjMGm7mC6jJix7Yeg7Lhbhba7WeMK9Z2Wui3MxE3QtYJU6DMx4HkeqSgp57ykQen",
  "key45": "4TYix4bzrt42Jh5ME2vhuFhihcwEgapFcKYq9QC1AdtAXMggYToe2pKcMY9PQiLR78tFtaeAVgkCahhDozTAF2pd",
  "key46": "uHxJNymVUUStyLr5UiyEWDGqaz3C8ARm27GHhC9fN5sevUsAnn8T92dWMuVnuh42kAErfh1fowKoE3sThNjidzH",
  "key47": "5HAb6DoWgdD9dTxRoTh9yv7iymQxP7agLc3XzzuRaRbFE8GSdrko5ze8zDKJNFD9nLESKx42J3ztrepJKsQc49gM",
  "key48": "59Rt4k7N85uoyAfUmFmPz24fWLh9Fy5Pyz9jZwEefBFkmYLiGbVHHT1m9X5DbdMWQVZjZLC1N6AKSh4DSPpKhsgx",
  "key49": "38kqFhfDLq5wKNf3379udcULHDxxSpZo3CRFRqZSENrNy9shRsZDsyoAGRLz1nsUz7oxBTdG65Q9wtFiWwoa1Tak"
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
