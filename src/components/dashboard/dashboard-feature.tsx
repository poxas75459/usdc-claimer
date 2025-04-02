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
    "DyTazWpmN761cRk6jdeTv4VyeRQA8BVBZ4QuzG4j5B2FHwMYHUDKk8W9fnUV5wEqAVpuAdz76PHdHVpZPo78dep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61y8W2RKg4PbWKXhhBY7mvUZjPgKSVfd9NBakG1tKnrQEJJEaJ3rg47jWE7exeCQtbgVv47kEAy4SvY6wcRT9tUJ",
  "key1": "3JymrBJ8KnCFwxMooQL1LWwtakpGMhDZkhmJ1skkF45jQZwAtgMUqHWS5ynDaFqRspVojjkHkZ8WpNmDEkXahZMa",
  "key2": "3VxR1HQB4kXak4gzFrUDDPR1vnYh1kkzfWsmXMcKmPenSMWisFWdovQ6f4w8AZdVGXApHd5q83uenvQqBAQjkRfh",
  "key3": "5cvhdWYLwqk7wMxVCvjqHLEz29tg8iwBSLLDPgJg5Z8KzLbkzr6GZ4j5qNp3w9YG6qouCBVMd9mVDV7ckpmmPZ8n",
  "key4": "66N4tCa8kdDFX3Qcb32ndPp3VFZrguzeCxR2gMuoWMCd5wQSzGmhn9456JRYVfoeMXeDtLAWYFdfjTVqnzEtegTJ",
  "key5": "5L9cj2YTBsbKL7LxsRSz5kQiWN13FgQqAoLctoiGBG2s56P79RaQHhjBT9n4ZFGdbCMCquDCsaBnY2wkrXActKPe",
  "key6": "2qrvqkD89XhHciC7ResfegqqvmNhhpULzDxyXLmWweZ1tx4mvf9JUj1MBuAcwyHAv5JfrrYzJztwDAJK3w8MZ1b2",
  "key7": "5tB2yUYpnDHt57EqcZSWUBTgM42yMNhDGt5a1kT3Nu8VPQxpmxp528EvgPXm9sZh13kuYVd4xjww4gvr9mryncS5",
  "key8": "3PwvYkW3RRvzRC1fhzZLgqYVukcWBom3KYrs8K6dhTJvYXq39CH7MYDQkE4S6KuCV3XoTsvN5VDD5ZW15hqPhQcG",
  "key9": "eexTx218pKgixhfXqBmJpTQFQUNcJKgF1CpZSNvQjTKoeSPjYWskYhnYQZoLTsQ3RtSHSjxNumRvzCdTUNZ7D7L",
  "key10": "5w3yfxBtW5fuepXYtTRwdWpfmPgw4vi5LmaUCGoos1sojNW3HjbQzktgpTMX9jdvbQ4DzxmENTpzeYo65uHkSHun",
  "key11": "4HqUCxK8WvhJBjovm245RiEmDuHgaXi6vpS1Do6v3oSoexbY7inR1uLAn71QVvoDWTSm2T3rUKDtDJJxDUW756tX",
  "key12": "xfskdKgPjSP39ecVN2Eyg5HfEqy84bfmX1vNbrG19hcWHpYnhrQa3yWG2G2FVwTiGhznuEs3yU2bHMLMR4vCb8m",
  "key13": "33AmL92nrK99aJZY4bDtr6wbU1RYpi2H4oSSpMK8HgWoLy1fdE7hiERTzyVJGkStsAYTK96rMa2xrkUGN3LuGXjv",
  "key14": "255CnPpweCmNgLjLyrkk5z4kwMvJLYsAGWqwaLE1eyhNueUHrLkQn4a5F8Bp1JGVPLBjbRcEArP6VZFDNZXhGGGy",
  "key15": "2Uk7EHjwMzfTjkPMypqgaom6w9HyxEBsC6HS3gqUTh8Bz8XFbxmWSpnoC2eZf2cCaCXb7T1J8n7oY1Cax7EQWxNB",
  "key16": "28kwwuNSGA4UgHR699mij7eEx8YWiAvtDZhUFXcb7RPL7kGKxEcE24Y2JQJJsxbJMQTP2VaWsX4WPo65qbbf6MWn",
  "key17": "Zn5BivwFgXzfBFcwcTyfkpUwcdbUdtXDe6wq6oa8JpksS9CVDkSPQCCHRyLsqwJvTYKTuU5BrFQbrMxdNCbAhjg",
  "key18": "2Gx8YCToSy9PuhPUpr2wS7tJWrZUGVVqsSDanUsE1DVff17PUxgx5ssSBZWUmkvL4MM1Nkoet8XQKUuu6HhC8nbP",
  "key19": "NmgHepsQeHcmBdtxe6KYMZvnRoSDWm6LNuzR6QWcKFtM5q1JF8tTXSY56zQuJ25qjVcvALnA1oXoGG2xqjjLiBH",
  "key20": "2RQL3Mz45h4zbnitUE5Ti3CDdH6hjgaQPykX97peWBPQouumULcgG14sygmx8ncyAV97cQg9D5ehkC1UbwA1NoXu",
  "key21": "2uDrBkTbKW5xgtCxemERtzbvEtUsSpmAv8e4qbBhU7xgXsYDjxRxyohw8CBeF3szcE3SWMUmqezbyvqMuRoiGnBA",
  "key22": "2mRCbo6Cof7RiizkMPZMi6K2C3E2dyKuVVbUifzSdCj5AvDdHudQox3g7d2PPfy87eA6dHEAKpYJwsPwL8t9ufpN",
  "key23": "4n5955MkPETXd6sT6gyyCPw2pV1Z3EbExittUKTAHLvsVyd8PjzB7en9tkyff1SgdMxkwBnCPPk69JpTK5LhkSZs",
  "key24": "66hG8jEDVyq79hEMcxcMWanemBWT9JrwLg21peWB1tk5hKFa6KtjmqDGEtsWehZjCRcBfUBPSJ8H8PNLiraDpaX",
  "key25": "2R1ZJ7oYPVEyqJKpwSNZaj7Bns4xHMpeM5k1XqzfHreNyKNCngaeL3sbpgAzZyBtusM35W4yv6JN1zL16hMbSCSF",
  "key26": "3n5mMnvSuweu79fLCPnURQDD2TCJ8FqrRYj1nXo753PYZv4BGs7fDMnMNXgSgXNN5s5Cu44D355a2aqWUdcPeAJ9",
  "key27": "3g9axkiFhXP3YejLReekgJYCxX4yahpDLUtKBnT9esk1gJYT2WQENmW79vfdcAw7GZyiP6XQkaaaWFCiYZXSs1e3",
  "key28": "3MdczM4KhnfsuFuvcMfscoQQb31JFFNBvFnN8JLXAsLL9wZuDfCmdMsMCxkYMhY63oBhWBUbE1KbQ2X4zGgWgD8x",
  "key29": "55wLSXPqJaWUPMZe7yBGr5URwmMXQP3JM86fpvrKbm71q4QSgK5bX8tgPF18vF9D44zPu1wLD8wM9sZ3hqcVYC7o",
  "key30": "5fSVFMPcN2thgZaiuZaeCwD1im6TGUGqV5LLKgGs5MuuVCyGMf84AVi3K9fgWuDdxDNgTAUG19SFBjJNEKCzywcz",
  "key31": "5JBxJ9Zmu2G18ysBmDdCFa4U4KFnnqNTURjG8RX333VoE561mjDri72TUbaZpcaGjhXm6mUXjTvx19s749Q4K2PN",
  "key32": "3A7b9BaFzmPopNu4TmwNHtxZY8ubcVZVRM3nhQrdtB1KHsQobE7BQK26fHFYguZn8jpRc5kjpwKXb21ofLpwRNhK",
  "key33": "yYKY2MB2A7ULrdBdrHKcsfWpwZ1pnVJ2C6N57CGfUufoMS5atWmSiaoNtqjiEKH61BZr2KZvCg5TZSgikd1DVRZ",
  "key34": "uoMgTeruWJoS1HyZ6muCAHWkTDSJozMPpWpthLg2Wczea22W3YxEeHbw9HcKQXCehnHcpcggxjp867goTZaC2qU",
  "key35": "5iQQ65toK3cMfQ3UjoKp9mUctxaVVWWGZAP2xViJGpCPpS6CMjtw74TXi1D6PoH3N9HquUeYbZABUiaYMAa86hm5",
  "key36": "4X5tvv3Y3CM7yYMxZbbXc8D6Y1Tqze5DVkjaFG2Fv9mXwkhzHFUGEGfg5vU4L84dQ5vK28ZUpEfyucFCa2LMtyYF",
  "key37": "2EtquMjxZcNX42vAhNtHt5CH32j1dNQhA5pVzHVNs3Bydz4qYgpk3Jgk5fpvMGtEjxj85XiDmtW8PLAug2RxJTG5",
  "key38": "3AroFjZMbuCBpUp24PqfJFDAhCBy2kMT9YytgcbqjPHBxS7eHwtUc77b9ukqngYXwaoAHQ2u4VwDdoQiiBAj2y2R",
  "key39": "2sxwWz9pukCdbaBeKL7x7eEZTPq8EuQg4qutadBDf2Cn7QrsQtirWGkJDZtdrvv4YTtVeEJsdXkcCb4mvDEHnyTy",
  "key40": "5h6gL3c9tHNQbp5w4mQupDEWLusxrfJNqDnjcQKCtbWgQs8G1zuE4cZxeeUfwJj5DXWypXqbLqR2CgEQ81WDxKtx",
  "key41": "281hveSq3p9PhBfPcMv3iqFHSm9ibWd4DFib6316gkqNG9YkdEMXqLYa3czCTXU7qWisUYNyLLdMxgNZsqBA91aH"
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
