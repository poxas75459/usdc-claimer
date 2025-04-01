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
    "3GLG7QFdN8CiEgYS5gY1Q21kHr6EkMpiBSHAUwv2FVyascQ2niukBZKiYR4WZRNSpyQYNfYzQ7xN3huuVtxDPdGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p23sLUaC5gQuQDap4Gf8BumwFUiq7GHNQdjREFRkMuCDeKCXXtHJL81N9X23WrqDuc9iqSL39UCRjff8DWC3j1o",
  "key1": "48i5nZNm4DVQQzDcQqjeEhyk1XCfEU7WtJLn9fF9XeKe4gdeoEdYY9czuyFziWKpkmNyvmaPmqbCZnwtU3DiKahU",
  "key2": "3aWpjQptL2TV2xJTtUhS8EaPVMCdJ335JqRJduPHqMptjMyC7iEiQ1sJsj7Mh8sTPy8281NCuaVm4zSf1zRFsSxs",
  "key3": "2UmDpYXgxyLwcfYTAik4Uyt6hBFmESSZcHdD2HvA6wjJ9UFVBzsNgqrMnxN7sDVuCoTAThuvNPhDrNF4HmAsKqPn",
  "key4": "2RnXFFTr3Vij3NoDLq48pPj1cXqwTRLizw7wpAcfgofNWcGr8vu4CkoAw55AnNTgaYAR2GUGBiDoV6KrLPh8y6WJ",
  "key5": "4Bxq22LeyUTAkF9NgEojgCWRnA95m7prn8vyenw675mi7YmZPzU9GUhAgcmHvc5Q9bCaga7hxZ46TrdQyYrsxMob",
  "key6": "4Ks4n9bpScAep4kxXaxuSAwnipnePF3bFRfFxFjuLwcrrTe5EnFQemyrvfRkg3owCVoaooGz1vX4oh4xBWSJ1FSj",
  "key7": "3iy6wP5xBtao7F1qgM8wQA2cgvHHzwb5aYrYCHaK3xDqDqFXSKUAe6Eb8X2Z2YKRZzbBnuYMNP3iPXSCqcpkdYsA",
  "key8": "2yaEE3xHSVMgajKeVwgWHk6T89tzJBemazhiquKtCAnx8jSzmcaJSox4wAEwAWkxdy7QqpsssKTJztJfo3H25Pf",
  "key9": "37AQSDxFPwHbEFL7uF1YUxMUv7P5YmqXUMCrvN6XeeWQQTwuHmEFXAAwWeU4U1EtWxARChwpfnqWTUXWfAFtbe4L",
  "key10": "5v72FnfaBRw8MZ1s1yGrDyVT91FxhtxhszsXeMwEANtWQr3mfUDeQZkRACkX3joAQ28i6SmGVzBL39QLobqkUXT1",
  "key11": "47DNLbRVAJ6vutq1H3t5RX4EHDwvmPkS7KiB4YytSQcef8LKBMtg6wFx15doCy1tztMPiwB7ve7k4VjvGFbd7WtG",
  "key12": "57J6CrBmcRFjUDMqmMppVL9RkweJQFfZYuFPy47v8XgfDwzvZML7oTxhqxRQLx3JrJyWeQxRCBe5WuRbtG5hprCc",
  "key13": "jK6u9QNdmYYH9BChCtjGwFbem5CQJVwLh2ppZL53NauoekRUUZjVZpgwY5FtNZ6ztVWfTKdAwHGGQ8XiwBk6PgM",
  "key14": "3sNQmdQrfPCzjN3s8dYz34UPzMH5KfnEjowxzMCPy5viDuZrxhTjR5rsJzSKz2w3dxRn5pJ8FMJsiyBqBXDZzK6v",
  "key15": "5irACs6oHgUszpNtvyKviEsfahwzJQk5dSaQ8ZJ2xnen5gbFjUqhsMroBdgEwPnGN7YpsyoXTVkJYz3z85FnjxCY",
  "key16": "3mBAMvS5qyrMNifgkjj7R9xsqWGZGtLcRZba1pTREsqFxxAwwuvL4125FSs1MjRAxGxgstcoqSQSt3x4q4KT6Lyp",
  "key17": "2EALPk29CTgwPfiaQrTThPoLJYAtNYQfrvw9TWbtk4pyEThG35ecGtX7YqYLKd5BRES3gCdoHtf986FQP3DnHshK",
  "key18": "5RCZ6fDj6KLrSbbzfuJzSbLTBqRdx4e2SXw4BSTGeCR8eSX4knfTU8Fy3jZcVACJMFDdcPqGXcuf6aNYaNBbscYh",
  "key19": "523DBzHy8iysFR2yLdNyR7tcXQ4AjTtdiAUPXiNxcWJAXSK3MHdYGKedbaoDHsLbNQptiAtsgsUFTJht1AZUWfGz",
  "key20": "4mijuSugwNoNepvpnuajKQizMXuGtXN4sinK6zaNUqoCHbFhyF3VE9UVzHAkDUrfT5hVvd6CynYqrCo8NGjQZWZi",
  "key21": "3nxv4az7m8r2k5Ri6yE21a3KFbDo25ccSyzJXKr7Gw34HfW1SidcrbsSJ6Ka84snjkchGrJU1hwV4cZwVWGyNQDU",
  "key22": "5ygQjF4eioFG6Afr9axBSrZfBbVGGitKtvcnQ169djnWiXBsuyVqCeBrBGtpKT8WmnkoPi4epPCeXsbdVgBHCaeF",
  "key23": "4GbNMKjw1faoASRQGVH7B8tBuwRuy4vzqw5yqLgk2unKuiuiRnoZX2rgtSiZKPmrhbdsojQ27hVU4DtDXnerNvKo",
  "key24": "AkZ6nYHripi947CF9Vw9Rr2YBrwajDZeSw9vdFPCfS7yofLJ44SJWmi3q6ZyU3ZVZBgd4w9rJdKyLsYqUtVCG4Z",
  "key25": "3cb4oytRtdEpSWuvjcMPFNLjQBZfVj6yAwSJ13K7xzQcepyYFFCA9mZ2wYYSZQyJ4KwfVUzn5uYxRLLJKVKxPbjk",
  "key26": "nhx4UJXHc77gLu55KJz8Yfj1S9Qn6TttN4AGhAimxKLDJ3JSQxBbDHSgtZa3skasrk88w2PcYzhT2W8YdwjuSiA",
  "key27": "3acua2efbWW6ShFYiSV8CAUN7L2QU4y7TpDr7Pru4bcs9xHi4FhwAzApx1wxP17JYL5wLXS3yDZRgXereFMW3vKK",
  "key28": "2NWFYnzkmdh7PJcKPMbEy6GNi63uCssam4qBwCxLR9KE3Yhk54PSuq1SmYjLKkynqsAMx8mrDmm3sMHQJLh28skU",
  "key29": "2eXAwpMg1suRp1PVNKrYwv4oqPUWTxV3DJFtAdip1sSfSaqgMw5nXhyPTpFVzAz1XzLQQKGjRH1ab2Jc88zM7J7t",
  "key30": "4Ppne3gLPAfcG4QXAhuJYsQHyHx2rTT7tF2HmPkhPmwEnph3u5V963Y2b3jWorTXpDEtkbTtkaNnWbiVqP6AjMtX",
  "key31": "2WbfWHoZAFrwq5fZMmkoYwwMx4Qz3eHajtci7Hme69echYy3HvckmMHpw8kvNGrKhPqxRfa7F1EAZKcJLuzQ9bvs",
  "key32": "42mRDqQBxJsXZFNcWcC1tPb47LXvxRFP4gAPCGQeC9f88TTNRcWTEoRsmRx9eNjkHiYio33joNqaoP2GQVU3My25",
  "key33": "3TweYBLKD98bSo3ZXV5ek6BGX7j93ACkmb8HKXJtF7mF493esPJ1phrLSwTjd4gFHrjm1q73gawtVK1hKJ2syX6s",
  "key34": "4bX69dDbnKXF7FAEnWbQbjFz93vEsgWrysTkbsVkEQXoccZEVqq9nBNiWSJbj3GiLo5863vaTDmyqdhFuPXsHR1h",
  "key35": "58mmLdjhAPWnL2yfStJWV35YomkzrRmGn1c5YwoDRbp3e9UVARUNYKq6rdXyWZ2NGk2RkGRuFs1KBdbkNFGagn8k",
  "key36": "2FJJLbBcbTQ7JGpKH4UJntziXr3HjPhpgEdk6fHd7EzJzAhmpe2qVbj2Mi9ThZYCryASSwKmrz6NZd5vngtFJajq",
  "key37": "2spJycdGGv1aNAgJkM1pobSyLgqujxeSpJGzPk72dAA92uPfeXL3fX2gZEJ9L3Y7Bk7JQFjh8vkqWHQGhotp6mXR",
  "key38": "3UzzVEgtSg951LRSpcoC7kF59cSQ15hjqJkVqSTi8XZTMpt21NPo5m3Azfoafg6RGcj7FbD2NJ6rW1X3Boccx2fJ",
  "key39": "3fBtrHrRdUorm2r2D6sUCDWKFByczKzGEGjsaknVKCVn9J3gkMccrinWCy1hxiYBYCc9CywsHFLEXziokuSfBCF3",
  "key40": "3qRKu9tmoo8DJpbzk2hzAeo7N4nHDXEArg4kD7pBwNpXMqn29vU3Kfc6Ti4QmgMzaWReuhbHGFG1scu5CpxsK7eF",
  "key41": "4Xiu4pkBPrLrFPQB9mnBkxdatiYg25rEmwMTRbZb87KFaWfv5Uvr4GTsbCbR7DjWTvFh1RXigCt48HtEMzm5knDn",
  "key42": "4kmhL1Ausy9hTFMm7garPPh3sGrAoYngDZ9WviVFb3YamQjxPiuYt3epMRzGrfptDn36v9qM8o7Za6a66P37SSpY",
  "key43": "248S2gHpK3ZYp1ArDWF6vQJQyoDqQL4xpsBmkdhUuAfoarAY988YkNPjLZtNSngnK5L7t3R1R8uUEyfnJtnhFf7t",
  "key44": "4WKFHbXTA968NfUFwvedDGTG7Enc52v3LPp49tQPazMyymfnUwMPBtsEsu7Gi2HvT1ZsXnZPapV7RdZszZpUqiDW",
  "key45": "5p9Z868EYGQn2EPRi9d2ed14YSGhd3mrpvaDEQVyqGB8KyizvkeLdV1nBvVn4ph8VrMxUUuQwPr3tcoEfzcGdapJ",
  "key46": "42eu2MKeKBQQk51ZrS9bQc8tVoRDAUmmymjf2NHKzcyfrXwmRnEx7GysM5yzX7Ka41AxCkCtEYgr6BXmjHz9CaW2",
  "key47": "31Z4VA6GMW4FYQ8JiuPYAE99NhXzQ1zTTvNHF7o9GN1ZA5Taa3Y74Ag8cQdUM7MRuDhjrkNFMwTTcMLzgDHt2nGz",
  "key48": "53r3Fs1Z1qRwshbzUQGL7fFTasWEj9TwBwLvPbNdB7ccm8tEedoFJ48tDLNLd4XMbS8DKuKnebaTQBA5YFhe9LXZ",
  "key49": "3T6jkaYFmDhYySBaXTsXMvSBCydneQCoHfxy2GmV5uFvwAq9hxyyqy38fikxHTatdHuPQXbpBNsYfHffJTAZGRiG"
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
