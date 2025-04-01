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
    "47c18182H45QP37iyojvmnVTobB2HFvhsh1vJLk4dP9qiSJsywjTvBuHu94DExCBFq7P9fL4nak1j9ujF3wzsrv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xXgeawAyc9EByQmmpX9463uZYXayxtH9YZmCTZRkbMD5bDXxipb4ixDhtL2qTFekXzcPV9owWkF2K2yD537WrD7",
  "key1": "575xBuLaqndoYEepCN1YxmWwbFZL84WBfHbHsK7e9Qs8CpHU9jqE1DHTDyz3jg66aGykiNibdQSrSsDsPmTaMSY7",
  "key2": "5niuENHUZ6ZxShHBzX5DmeR3mNRrdTddu1pDFPdzULcBPJAMXtmnTD81NsnFhgjZvEioLGAJbExz5uc4deNkR46f",
  "key3": "4Wm9XGyfc222F5ZGEouwrLFCGirt73kFoiwURB7RKKWqBFy6T1yt9A3FFyNG3tUHajbNvSWQf59B9wzmVn4ibiw3",
  "key4": "ZVKrTk1zZCaHp9ffNvNb4QZJj2b3iMeVR7w4xSn7o9UrBgfYHGh5hFtYijfWEkaHcPv7PQ722TgtDfjtUCDEqtP",
  "key5": "TnM5rVgu6BMLhamq3gNC2ZvAQ1eV4bFKxMYiWhoWX4D8mXYKMYVukJ4HKdgbsaVqUxKcoYJuyUXwXjQSPi9HsrS",
  "key6": "5Gi98ZgKdW6jXGVj6TG75xL9R45t4fRXQGbbycztxBSZqybdd6ZTa4xvQKjxALwENnFaceDymS6cgwL73YurP3zc",
  "key7": "3EJWdr6JrQBeJRv1HfcrqCUYorGJdf3kfGpCy2hviuKn3MxoR1iWBzcUDLf42aCHHEeEps4fY5xqDY1DDUsq6MYz",
  "key8": "pegizYWmgcyVDBCYejPr8ehRdLUETq4vg3N2RJKAuSwem2eBHXH3RattfaJriqwBLskUeJo5uMcALSuMCuvCbJv",
  "key9": "3fkPUkDKGgxxFdBApHZr8fqVYJhcLT8A2FbsUqP7o2pKU2StuCTvkXDEd8thL5pbVJTg44i9orGCKdBV2HPBgNLC",
  "key10": "JP75qBoG48az3ZM77EL5ZVj33jGiUtrYhyZQMmKS55xvJH4AMrtnhnEEuffPv1LAjZr2cm3FujUZwrJLY2WATcw",
  "key11": "4MDcV7D76iuAtzeiPpv3Vd7DCAsJYPRrtay8UqFcARRnkhhd5MUqn7bDEJ2W8FqiQoE7CVpM3tnBj9K3nUho89cC",
  "key12": "2dcB224TE1WuxLrePYj66oUeHQ8GBSamGAomfQ9YC4Fy46iqY1M8YMbdEDdtpWEhWwvMmAePXapeAR25iZcsTveE",
  "key13": "337mdu6Yk2Wmgn7U9HsKq1qhbdxmft414GVvjKpE4K6KNXNNKYKgzoMPsfcwpZyVKaSc7WtpPKo87c4dXdgVcg4w",
  "key14": "4peY5izCcwWsjJooHX9mrNvL9Tkz6inzFWmYWcfCDtZpwCkxkVKpJTjbBeofDXpwaBaY9imdNeYmhYMRbT5LxCiv",
  "key15": "zPDsunWDM2k8dRnenF2JqTUcrvNrEhXij89t85fot8HrDvEkKo16Mj5bXZHL6Yk7qTxNUokq4vF34za5k7q8Pif",
  "key16": "3L9cfLLLLDiXWwzYVyxbBBVvcUm22f3YYQG69hGz65cSegdHyZYmjNRmZG1EDLYr6YGZM3itxJf2t7jxLVmkm3HC",
  "key17": "2zmDPgi33s2ZUpingmUBsjhQinKmD9gnsHjwr7Q3b7PTSQ8g1dNfL82E32MqxZs9RL8CuntwA9yHFWcVBUP2iTCR",
  "key18": "XQNQMs1AqhPEtQMFxWiN6kfFBkwyr2ZeYnEZpSmBLwShPC7HiSeppTf3c1QexMUqmTkAtUoPUtWh7JgcNKdjrZD",
  "key19": "izRJ8iWCTFgK8YaVXHLNjbdUgXTEPKx1xUeojsRaAZ9td21QuPcu68yzwnKctbL8nBtay5JPBHZ65BiuechDwfx",
  "key20": "toSwohwG9YcNLqMEafbb5eZztHZjZLWKTHNV5SRTjq37wwfph4ifzqRNfrp52iSquVogoSdyHYgXaf5VTsTCtu5",
  "key21": "LhVN3QoAzBwMfWgEaRC47PGEQkn2MSowP1teq4dpaMuYpQE5rLRwcBvDPuq6a2xVnCajGhm7Ge5meeS422dwPWm",
  "key22": "57Yj2RaPBfKEKC5mekkepqfbq6zsXohpzLYS7JoAXyMccY6pvNMzgxwMMxo89reNjvqH2MEY5u1z7cTq6pfNmFxD",
  "key23": "HvpVmogjih5caFfMCxETbgbvFG3AYBWhuR6632oHkGDEtkKaupPj8Q2UWe8sz4e2v6rZ1f4WzmjXwfV4Dvxed7f",
  "key24": "26wsHtCmFPcFYGzBdbKMq4h7DEqXvgKZLBc2DktcxRuDCc9JFzgFxnULyHjLMWRQjsmm8rCXgAi1JqxSsgRENh5u",
  "key25": "QVtGBpAMEgvMC2nzYSnKNynytPF2WZ1WCGmovAuNgCfeAr6hD6WUqsWJuoCTCXyNWU2hbhCGFPFetbhgwsa33He",
  "key26": "4qeAQBysQ7wBo5nsrLY2cJdKNRJr2Ttm833Gf43Qmv2pbJT4vuoFng4xzJxHtDinttio6gXk6rXP6HGo5zVkhRbZ",
  "key27": "5VMdYSWhAk6qnEWAkLAzajaWXh76D1u52keetfb9dfxhTvkMQseRDuvuHCqPEibmYtENkCWkJ3jcdFML9AGAWGq2",
  "key28": "4Rw5fSiPRrgCd8Z73xAn24HsuGJkU9nG1zEHi6mN3fUHijrJdeHVv3ofheF7wjSz4YaACF2E9Cku7pKa7M9Xz692",
  "key29": "34NSUzFNypo74hPLdMa15PVuksYF5dFh6zvgfvBdrvkHeU52dmbukY6c5ygQD4FFQXznxiFFv2cRDaVrmAE79fLp",
  "key30": "bfGK4cJkWf1G6d78ct8Fzpfs5sw1fmtqVEAowhx5PG6M4zGc4oJkcQvfF3oRTTq5ckBwGne4kfhDEjQTpbYGL6J",
  "key31": "5HTTAujmhPGazH8TVRF7c7WNWMe9CdBL4ND9YocGGKarS3ydXLzZqfmV1oFCmGUakNa8Czq5HTsq1sTwe6PodXMk",
  "key32": "4K9NKDzhCHKaU5NYcev1QFfGwZma4aESBfbDvGtNvRhWkGW2UABatR4zoPZvHkKdDaTpF3r9LRZ3XejoBNoAE8By",
  "key33": "4KwRJkjo1vXe7qF6YHbzNiPe5Bw6KZBM83ZsCAksbKPkyDD2aiMUNKA1R3L6UCLcLgYksm31oSoxQvBSXHJe4EUw",
  "key34": "4wCvGS3wvYZBMcGerRpWskDWvq5UzDeHhZqAKxjc1MzPt3EbVFph4bcqo1Bay8y9gXuaBhvzRiq7JDJQTwgwW8Wy",
  "key35": "4VaQxzpaDAo5wjgXEJsszgae4Eozp9VG59g33U34saQaTZALnpSdFvrWS84pfNXtPbgJnyXeiT6HtzvumCTjktr2",
  "key36": "4chpcctDuPiCD4xnthuBW82W21BvCWpipvWE1SnipHXHH8V21yq61cjbSQGbguD6sNk6ZJ6yNu8i4ktjyngfKard",
  "key37": "2CBzDzYCiWPuFj77tsjFLr9aqy1HL6uCcedczS7gJuw3hekZfrEiXCgL1DTsch1stb9BMdXTidLFTdpKLCbP9Jh6",
  "key38": "2g8RPQfFS2ZqXsBUriaJjtiT9g5DvAoTvTCG43ttsyaYYZhzWMtvcxie6GNRUcPwZJkn3AszX51rToFJdwBNLaHb",
  "key39": "55MZoHxKJooHw5bcYhqwWbxL6r4MHAoXZsApNLw8VtJrWoonzgsEaN3rxURhgvePqxwVSdnqeXWxrWWsVaYs9grK",
  "key40": "2PHjGv4guy7sMkzKZC7tsFmSJn7FYYmdV8exA5dJLCX5NcQTdmYPaoxPKb65WSVMaZ48iRiHWV471jQwfhKCF2zb",
  "key41": "5LKtbTRJYp8ZYSApRPYdFARh9hvoKSfNUkAtGrZEk6p1vvVFheVHaX26dKkz2k6NKZSSh5ho8Sz1vKSgGB26VX6a",
  "key42": "5y8Xhz2rtcT35JYfDARtkkLXuWagtrarmeapC7aTafmtPboACERdAoA5RNQwcKuocM5tyywxHqASYw9iwHiJRK7J"
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
