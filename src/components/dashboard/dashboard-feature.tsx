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
    "25YipRTm9ZBJk4UScCCyZcLNr9MdkSaAxLG8PUHAPqkK21sXxmF5JFQsztvoxrE15CHBy2us9wUu9Kmt6aDGnjyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TBpJoszbkftq2vFFTVAjb91L4qnXDn6uPHqnWG571jWcda8fpLHazYH5EwX1M2f7CqQLMzxmHjKTCavG2SsXsKJ",
  "key1": "2kSjbLGJnL6mymcWqTmrTQzBpxhDKnc89kT2kJDSene9TC9EuMhaqkS81oZ9xfoLK1b4sBvWekesZo1ejZzz4G7V",
  "key2": "5rCCgpCnQTiXso9TENY6ZYjacgVJoV8PU31gNAwg8FJPtnSUREw9C1E52YauVaZyDjiYdWos1DiMqdvrj5jRmAHx",
  "key3": "A5WbdHJpw8En9ynj3NvsbBTgPGGrPcn2ABGkdvDEcTwR7WvnYuPd5yGRx3CxgcFW1QwV4PHzFWMb9spxUJ9cvaM",
  "key4": "t6ghNWgESmQoSPPTwvB7qRsZKdwj2xY7sscUVpp2smkUoMgyZLpsFTiUmtnMU1jfBr3EssqXM3mUeMJ61Ht2wvS",
  "key5": "d6noL8sRHa8t6wke3Cd5wYk3UeePw4MwbM63oYRCxSHWC8FPqRZG53Xe4JnUaqPfX3nEEmHFKY59iw4PywVb75T",
  "key6": "2y4RF1r1d2xsx1yRxJqLLbyvHKfFsLpBhyxWH3rYdnJmt4JytMjoPdndMzKZyfTeP33HmT8meZ7zwzyPYeEdE9Se",
  "key7": "3qQyGXt4nxsSg29kfZKjh7e3DDcnHMzDk4qhaR5DADyXiphbX48p48quqc8YmSiemRjUhn82y5vxY8fe8jvrL4UL",
  "key8": "31ZWKWkZuTHc3yiC9DL6WHkifx2xjEgGDESp5nsoujYfQDzW1v4tqbtBrV7PVwRfRihxXp5XKGw52Mv9FZHEnm18",
  "key9": "5zT7TZpafN4dzyMd6MJyHchMEEQDbmgvMhzUz2c8RM9smq2GcuGmuEPg9rLHXk1nAui59nDGrpAR6vHU66dDNm4U",
  "key10": "5iMSMsvqhFwXYo2TGyHcARs96R2sSTPd5Lu75vZSmbn5MGZTHVrimRPnVJc1NvtpAK6AFnwgZ9gE39Sq1jakEanN",
  "key11": "4PyfnantnEng8aoss5LXdaAZcTeUMgS4tqpcDkEirDCwgKD2JRYxkKaHk1uUvUEkSiBuENWkGWaXv9i2F51tMUSQ",
  "key12": "xFBTALFKPe98U6ZYtkjp8uSPeqveqtUdqcqov3E1pnwHmE3dRKMNZ3VFvVpLAU2TV1b3iuVNxvxRja9rgG48vvR",
  "key13": "31fy4ztHzLrcRn5WmAJsosSvwdQgR5Yh1m7uMxVEZPba42X87TB5asBGGniFZLFaLKMmcWBcpUMkke8DTPLyU7Qh",
  "key14": "iLuLSUbefo3yhNfuCr6STNL6iyEtG8pDDvGKLgZSiY8zVkXH8BkgRbU4rZraon6SM8msh4XJ8spRVF9VQSiKkXo",
  "key15": "5o7giAmipmMh5XT54z3nxFeSpmQKUohcz7HY33p6vsq3tCNnN9fBopbAj6j3cjgukpGUKsMrYwjVNnYD4Wz6NgBF",
  "key16": "28dipdMWQHtxqQdXj33fq4KkYVUmvtFcXtUFfMtbmwu9tvXGrYcD7sjDENBjJxDXi7ffs4dzxGVxtsPD9iHFo4L3",
  "key17": "qpKV4mdTbQJsmZRvB2UdjyXyMpYRuQ3dZJkYte787oakgw2SKJUopzeYXeppok76k3jYpmj75YbByTfPE9xaisU",
  "key18": "3sPHQU9wNHmcwuSP7LxaZi7YRa7gswzt1ACd4oRaySRhkYxPVqcQHTVgHK8vBzSK2h7JVpBErLBHqZnse7obqwpU",
  "key19": "3xjXooDuWiVhGQWWoTq87JZcmcWbypqMetjNrxRvKYyuEUvLcK8LHtFGuDAyfjUGKE48stkNRPHinQpraTHtbQV4",
  "key20": "4svyPLbHyuQZcx4ZxdJ1WQiuF3MYNcab8Cz1L3X1yQbAdHZb7R8exfoS4tvhKcDwipfiHQLem7ewn57wcfWT1aNb",
  "key21": "5MHKCnxKt2bnje7BCp5SZfTjmoWmuzv5TdpF4Hg6PgKf14AkSH3bNhEfM38tTkZZR3gYp1DeN6Zfm7UxCXvXVTKh",
  "key22": "4Kvtgy7uimv1FPQBXrEfZVdV2v71vKcfnipKDEPxGrNM1kadc8jp6Zi3A6s7FrYe5xwB6aJKrW53bVZJQRfdnkAb",
  "key23": "32eoB1VLVrouJZ3rsbpfc6N25zmiQA2bzWCFb27d7AnaXn8qTQcdw1LEQR2epYS6QWsHFiNpzgxuL9gLRJ4omJXX",
  "key24": "3FuXqpSHEUQ3g5Ev4XTieE7Mhs914wb1DcX1iiiv8k4HNbzqhqTaQ3hyozcSPBa2bDQPrQXKXj22nWsNUPm6EQvc",
  "key25": "4jbQN1kc5Aj85x58pCRa1bgwDH7GD8NhfKCBCJAm7wadmg5v9TZbSNhNpuq3jP6wdesn3dWuc1NzE4KtKiQhuZNC",
  "key26": "2E5fzCjgq2Q9wqAacPowaXKzx4wvTR3i7rbzFC3B3f8CVH4UShZ1bsFKaHZTNCMQ15EHSyEagp5jNvZjieaZGic8",
  "key27": "4kMCDpx2LKoe537bF3jxwLpMzEBbJ9fh6HYqPL7ZcnXKMHYBUmMu7JmJRHudu9WXAZ2fXSBywJzMVa4N6GijDKkM",
  "key28": "tdtjxDxeZ6JAz3T7BtA91BLSLKcavNuBDoMWJGJzFgiYzQ2RputnGWCbjakoZafht4cSCJk8qkd2wjoGwUtsUoy",
  "key29": "3JYjK7WTkEXG9NDZK3adxxRxe4jbsq1V9uQC4hJAJEJUBGAFnN3KrcatDbcSmiVgQVJ2armaWaWU3fvX6x8RVyQQ",
  "key30": "2zXRykkTgfAcygZ73dCmX4aw8n1cYG5cusHi4BasSBzrm1Azcw1wiAsjkdiuPoFyg6ydR23x3Ay1s1B9Rq57bXn1",
  "key31": "3TnD2HbgpzNM7uBKW4aro2684AF7L16Y6eD71hCAP6bB4umNEBL42CKWaY7JeLuDNjPswBxqPGso4FZwLNeVw5NY",
  "key32": "596cv4FTMiL8L2RB4SM46U78anVgKRGfL6jy1hmXgpWShNr2NkYDQ6WkMPTv7EJXZagrNNL9ZDjoW9SgqCcmX8NZ",
  "key33": "2Mn5QgLKjJoMGbn779byqaJhvt5kbsNcWRcYLowaPa2kz16NCVeHGxhAQj7WdtLCTPTy1BDEF7FCXnwKzC2jJyZN",
  "key34": "3Vs6462EKBidioGwPBMFSN5Le9QQEVwjwFATxv4uC36qrvShAbVe56Waep6ioDCxgExViaA22daY9cj7Husc9j4Q",
  "key35": "4tDkXRVdKpCHA7UK6C1B3ZVPTNbUmhqqhKUFMb27hy64LBEBRDG8CZ5wcULD8dYm5ooxCSXoAjTUennpZU8woNSJ",
  "key36": "41iLQPGyHonC1o9wJmNbC4DjeqmQgE5DReYRLw6e4pzNES1SpmBLfGwKY1ckbpaSvcwEeMZRy8iXkwM9S4MENWs9",
  "key37": "2QeuWozdp2rw5vwAGpncgJvYgy9QuTogCeJiATp1DAfUxrrGc4Zr4MqNiTPZ5dek2Mw5pTbVLQL1iSuaHv3kz3zL",
  "key38": "ynvdNu5kgq9dkj3R44Vm86g5jSZLV7zXtTk5s9BiyyV7YGceZ5rnreSk71QvwKXaPaP98v5wSjdTJ74hSXVzM4B",
  "key39": "4ZhXuEZ2VDmjAsJBKLRdxKPsM6P2KDCJhedAAdPV34hAC7uVjij2rAcvEkRYJvTEAmPxJP5DfSrYe3nzYXYUhxQN",
  "key40": "29p8e2yPCw96rEm7SRBB47Ne9j7pFRxBXLxZAwzXurr6zuJqbztaymCKSdHvsmMEmZQKpWFJVyfpWfy8YgKfk8JM",
  "key41": "2EhU32cNiLpweeAYaD1XG1S9yC6yNHCPuNG4USPsFrbBf5cVkoLRK5H9FJ86PU95Lsk2eWYac3u9pV2nMwzfViEX",
  "key42": "CgjcNou3cDzBQxEiKYw6CCESJ7apLeTTzsQdPYakL2sfq9vtYwBbbPABf5vgkxK7RHkp4QvNUEAZ26eaEQxwzRL"
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
