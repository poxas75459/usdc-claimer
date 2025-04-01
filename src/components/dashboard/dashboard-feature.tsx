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
    "5uN8ajfM692LZVDmCXZ4JS4LSHLCyeb9XpJ64TAiUTrG4bVttz4dvJXRUL9tBTftQdNuvdS2gbG7mpBSCa4M14Ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ppmFSuK2NLhcLB2VodAcfLPxAbijRPyYBi5drq164CEK27oWWeDB1eR7CFsDrEjv9F3LPnocUmuyX3JkAxJ6Dey",
  "key1": "2C6gPCkqGZhs6DC67ceSZZzmHWE2WjYciDaGUa8D1anwwajQfE1eVhwP5mf61By6jyozVuKi9nynaSZ3769T4dZp",
  "key2": "N8CayEr111bCmdpgEWKZNgrwfVdrSzaXo2th55C1ZAz7FoR6DQiU11TrjoToXJ8pAZLwQeURMQ6CWa25V429nWP",
  "key3": "5P1Nt1jEbQzFRgCxWwGq9t9WVfzoAYZqvpYyy8QyyJGV9TEjY9y4otU7fiJSk3922B4XFhf7BGZMHbqAk5HZuK9L",
  "key4": "2N9sXB8tsShi7wuNBUv4gsLUqqYhCPe5P2rvNnxiMZguMoLnL44d67gUYUb3EkK71wb1qbfkBt34pEGbKen28t54",
  "key5": "2PxXVS2PN9nLyupdBjjnm97vMX3RbiYoqLFff7TvJdjHoJA1qcG4YmqgZpwaaXPqwe8z95EWmWmvetMtR9KwK9yV",
  "key6": "5KEiBQ6XAqQxbzPv8nGAZ4xpkdHxYUP8LVUjywbcbt4iMX8ETz92WuXEnaggN7Yab3vMrxHVC1MVCd6tY84ZddZK",
  "key7": "LbCMmVTnnEBvWAAF7d65cKsMn9Z8V6yZ8kp2N4i9vuNmoA2tVyyNx5hNShpbYnz9DJtsFq1HNifNG4MsEbQQZk6",
  "key8": "5eazA7L6fAwbEB6nNiCXm2shjGHHHhehtc13NEhK9hAzCeivx6mCEtNuC9MKDpjJ7qk4qNTLj57MpvqyKhhgRRQB",
  "key9": "5GVgGdmMbE33bD9cGGgxUTa8AQ6gnDitGxZVXVnq8TQKm11hr3NsD5Eh7W43WXXev32y58ZQcgWiPzidzpAV2V1B",
  "key10": "3jJ9SDNnZXESdHGcg9ZsCMyhWQUbLGqGN8Y59BShWsL5MAHvj5j1Z3jXMxtoR1nYxDvDq5UwuGsXF5HuLkcYBw45",
  "key11": "YWDGCuZ1KbhRnPuxGsN5wXt5zh7psVsUv1cTao2EAjytZ8miMiUYfYogzDiXzgGjMKGkUtT1Jqx1b6ZM7Qejp4f",
  "key12": "4DHb7G1mPH62cLTFH5Vf8x7iPciqohdDpgYN59pTG1mqBBL53h5ewh7GdMGYhpZCtQXE1mguuaXcd5iTHPfbnJ3",
  "key13": "5e2vBofn4angeY9ys3ARezHn3f4V1ZanqjV3mCDA9fwTBiAue1uuEyTHRHZjqASx5zcczDtC6SyoZ8UzE2UXvtKD",
  "key14": "4CtvPQgje1RZ6NshnEYDwATmFzHgNk5MUt3NQBi1v3zGR8QpkrFxpL4LYzinDxVEMs2iP5PjVG31dEgKqc9quH4R",
  "key15": "4B1jNFbqPPrH25nPvzKVKZdtyRv6ZVPMUAQVrnmvQrFEj1Zno2RC5ETEdhR2bWiDGwxDaeb4McXfq1FGUxx5iWjZ",
  "key16": "5WTaqvAW6TKsjwhD9tfRJsFSxxnzLbo8TKUY375J8tKk6gbPzSPWcUiaxxvjj9y3S2qaR1SYUNiwaTbbMLNVLvU8",
  "key17": "XYHaygdu3UqCAWc4kbZrBk4gj4YoJ7FoCn8z4J6xzZroudQk2BLMznKXEdxqxDTYc4ZTGPF64YY9BUuRNidFegg",
  "key18": "qDCFxSRKB9L2JkiVL6hEwAcoNHmsGqar4RVEHNJXE6DHFbn2F2mx6RutEcXGFC2D5pkd7v6csUKstAXwA77A9HR",
  "key19": "291EfmSn5stoR5a8FW46M9nVKRcVmMKEt9p8iwiEAEAALSgxFmm4pdduB6mvQ1JFmon8M3u2n5T1q3EeA7KrAjLs",
  "key20": "wyRyDr5Kgs7G6xtybRE9QvAEzHPqqoBBLSLEF6jZ2hrzExYxn1Q9FRxYoxT2Bb1pZofksNGjiCFtEv3HTZjhCUZ",
  "key21": "L87pDHCBtxY2NDYiBysEpjZvyyze55LZAZjQ2ZHb7nPYshL8XmTUCQa4wA2VADw6uuLw7PEFCvK7TxjiqW4xCeF",
  "key22": "3RKDYfkGMT8FZfzg2Gnge5T4sjLRCEdpYEhYoSQYFiA345A7i26r9dTfj6ULRyUJBZ7f2je1UeTs3SPHgf7J6fVn",
  "key23": "2S5qtb7rZ8YF945PbS5Y2SZ24SAQZ6HLZZzURjPYyW4BpcSZVTjFmNL7ZN8d3mFrZxKxzNEM98fS3hxYGVA7dg3W",
  "key24": "2NhFdXTcG4ma3EAYBDoSN7TVEf9CmtXuUiTeunRLwFCtXEEAxZKf2YCBRD1XyHHuK1wX9F1YmDHMDq5FPpZguE9s",
  "key25": "3C3opm4s2bQTHndVjyWPyHq7TRvaCrFqEqVVJmLbmxaqAQDfMYoAmYLZduSDKWBSHDSfvb8iod3wPeQtqffLYPbj",
  "key26": "45LiQr2GdTVAhGyzKHdSuxJzhmoAgNuKv6KnQY2V4wfPgJQqVQVd3agRpjJhDvkaG6ftoHeBhKmTi8x3So4pcdfa",
  "key27": "4J3yT5iaitEXeuMFtXmL9jeS7NPnDkPT42NNQhMkVEVPPNE5pquakqS4M2nwmpoSXrK8kJVfqJzhenuZ3mQTseNN",
  "key28": "3ZYStJcvk67ddqh3TxcyHFXezQrqr1Ad79GEgMyB3M2vYS9RH3wJfHbtjPsRqQ9D6LGpzX95o3e2k2XdAxFWH7To",
  "key29": "5mMkPyQEQZcTScrXUiGEaQs4BdS1yndSaz4txSaE5AHDrNBp62J25c3sYZKhSbQJUXE7s8NLEeJEKzKeF2zpSkbg",
  "key30": "8sW4RGPhZbcDDj599URXqkFStWZU9xtyCywUVxZ2nxh3FsaPpNbkRw6ASHMkMrtD9s3SYe8yx4qLnTQ48w7RR4n",
  "key31": "g4nVbjVaAy8HwRWXgc1UAU9ppKaF3LyxkRLgURqQLE2Wu2b2xK5E6NKPkhShJ28ZCvUZXfRGdgXp6JsnTRGMwjS",
  "key32": "VGFchuEpbXJMgKbUnpHFju3h7LGRgGmuAo9YHgrDHt389WXMaLGSQJDV2VmNAV3NRL763qXiBaanEMtHkQr6ygu",
  "key33": "4qQWudbjwwy1evc2hiaQ9HHPr4EuzTLSMmgYQJXNmxBNScUA4u8e7jZ8jnHdRuEzGE1DWBBBvszJ1u33qNGLLPJZ",
  "key34": "5RuCdmc51EqoeKtUqB5fw25J9wPEGr44UTZcVx71tL47pmohZpGQCcUupfGxDfjjWqkVLxXznrqNoixJhXLD9x4h",
  "key35": "5wDDBD1i7W5tGZMiPce9rnyWRobfe5EhCQsafAFdFiebyyhoTY4RRfBCNRTPFTGbEdFbEZM4ZizdSrHjDyiQjfc8",
  "key36": "32rJjUzFeqyYm6bDWSLvrvdjsTUgAtyNELEKn7zFATZgJQCeocwyska2mFtUmct9wzi6N2rErgS6rmdpYHWaWeab",
  "key37": "qPtfbw3BrPbRJFtjuQDoinjgkZCh71jKPwh2vYxE8JB5KRaqHhPbzbv9hHuBKXbRkQ2p8yczAi7i6NJDk6Zp1ed",
  "key38": "2kL7ZaByvp69P7rsD5Fsk5HXUGtnQbWfY1VWPmEwkosfkpGARvp4to9UNJNAajiNXFhKBWjRcpUGTNZnhsCvGaPa",
  "key39": "5wwB9MYfRWHGPx41ciKsYq1Dq5Bryima1kcDmSZypnDKHugEeMwyPLsr9NXBkitjnDTEnrwi8tHhxy1Xn5EQPiFx",
  "key40": "4x7pstUQZKEimvwuu5PYQ4MJTzGqDvGXHs9XKFmqaUzNhPhFan8chVFfQbUF51CxwEXWB2reSmfBR3nxpqUf6HyD",
  "key41": "2LGAsMukc2r4UJ2bruSiGgwRVsgb9bYbT1oC5tMz61dXBXsxqmECnLAH5rHG6uVdUpuGARAyfiji6J2ZPkKLXBTr",
  "key42": "5XNFbf7kTJ67akfJDxMbnMDCU4dKzsMud2ssMDhdCz83uies8TMeEjAi8mmR7oawrjtz2MGMTJaJnbtrkPeXH28b",
  "key43": "rEt7tqhPiCvyowyGYJR1tCkU3iLp4th37DW7GUsj2j8vMtXCMU3Weo6XheJ4Q9UoJyMbgzYDogaDc72STVtdaUG",
  "key44": "HMknj9eXscm2oBZJvPqpw4XGbRzAgNuAjFefAHc6hYd3JYNCN34kAnEsH24xi7Zq2tzkb5kqFAYJD4n5yVXF9pF"
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
