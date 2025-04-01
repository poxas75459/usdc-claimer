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
    "2EdpnY4sgdmmjC14VqWP2BQoi4J2Bz5pFfv6kuj1eofyEaseGND8UxrTpWUaN8tRyixC1EEoEUaoeDNGzBvJAjC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TMeYe5WajaVaYfeh6moUnU9CQNHsLkh5xVftooT6GwBh78icv5p7NhCpkEWaoFB8u6zusD1gMxhPcmsNmsF2bk6",
  "key1": "2xEdmtLNk6XXYqzEg8GmBAGrG3yqcqtjz9GqKyDPMLu9WVgiZNesMX26dwQb5pGZzHcB5G8BxNkJaJBpBGw3ufBf",
  "key2": "541aPT3s2EvzF5YsdxdUXmWFVGSuFbfcfj444v34asna8GEFUBnbrqbCeSLtKKsWz8kffNYdUhx9kpL5e9u8oQnd",
  "key3": "LgJZYABcVDaTvRm65U4pMcLC91XtYrXPJzYEEb2yMAxue7BtDoGqz9unmicb2cgGFwiRhiU2N9ctNxDhAs4J47R",
  "key4": "KrrYmD6hw24tScogpym3moVKpTmoWEfaC2AyXvqzkAVm9uLTtJWd81n9pTfzg9QmkzgrioNeFchLignRNdkNA5F",
  "key5": "5BhzqDVwuzYZCUL1WsHUmanz5DWtAUdhZekZV5AcjuSNHE9Hq93MQSo9A9J3ZXEjdUvdX4uCjfikL8oabdpgQwZ2",
  "key6": "33at3aZsbypo3CEa8JaYDxKogzNfs1AQ2u95veys5emPmBop49JjFBJJ6KLtZ5kmUbcep1MvUkpQ12cmtSEJVCqt",
  "key7": "vs6vSsvfGHLChRD4oXTA5U7GfF8rkkukhXhhGp11JJxFWsnCqHc99ysDF4PaxznpYDwkMqaWcxpEvphXx71rzrr",
  "key8": "5Uhzh1JT9sFPY6jKtV7B2SrY8UGPqZrYfpYSQXri7T2jNgVncVgKAmQiAUocjSR1AjTMocP7BCASWRZRMAJwrgJ6",
  "key9": "2pP5GJFCSJdDAA9bV64Y7YHAoroiZ33kSBeHdvZmAf6Ggm3QXc3ij216fKJLmtW8cXU6SoDRKLrECS2HkMFLKCSa",
  "key10": "4rEr3ENQMZZ4sf8UdEJGAkMqfBcMFoFoSiu14pqqDecqMQhs3qsEN67FdUKiEe5vAd8AaTPs3fnobsdMSPJmFatL",
  "key11": "4aZhanKZ5msQxQVo8dtHShd8zXeyCvJHUiVA9ppMsakZwt7RRerUxUoWyk9fLrHZkna17Wm1RghRzoEiXF8x3xLy",
  "key12": "2mhDcxTE1SycFZ48icRKTsGAK7bFRj2xiaPTYvfeqJd2vB26t3qsQTgFQmcAUyxWDn9EAokAEwV8T4Knbrigwckm",
  "key13": "3K49kdim8S78mxpk2XTQ3W81GVE4p4YdfCUgpq9xxtf9cXsR2yP1f6vHdEdM5GTk5TapBJkSaGhz8uhYXv8QTEhN",
  "key14": "2F1pSgekg5e16Y53RoJeUTcix3cHHhsFMdyE7PrVoVmCTwcdQAwHcLGxZBVjmSK9dDdZZvimV4jNArWH6gZDNdGu",
  "key15": "36a6BUQxjNREQ8zadr25d8bVWnacdhP1ZpdJAndvqwCQVrtSnJyT21HjCU1jo59D93J7wT3T4KGbbtBkiPrgeGk",
  "key16": "5QNFWiJBBRAZark2yPZKroEE2QnXnFJTztsMsDj26A1x754UoKvNVvutCuhJkREP9EXtxXqWQPWHR6sB44qeEopw",
  "key17": "4dSe3ccSZRYQsprGx3K8pcUcKmeSzB93o6s2Hz4U5q9SfjugDhrbsJ6Tf4JdcvMkKcSDMczx9WoDLZycG8FyhPxv",
  "key18": "5yPdjLF1xM64T6n6ZfGoBbN2qh32vqs8KT1DVAucDv1sHzCfZzUHFqhXgbRz2pwcWngG28Zb2FSoPhH8ybNC33Ju",
  "key19": "2xCjEQs6okkHmB1oeN5qKrwjAhtgbqc6LrDtXJBtJXQWAcDVgcrj3YBpRaR6yr2PKmodtAfJeFifqxhBRupxGaa1",
  "key20": "3cztbhvovMt9UosGiegZZWNodQhfrW5EgxYeeBbeZ1YGHMistDLLRnu76MfScdmWTWyDxygQBo4YbdRp1qbucZkG",
  "key21": "4h7ad3FZ7eLhT3NYd4RZQcqSqeh1QZYSYnsnhNi3TbTno85FuLQURvWP7TAGmQeqJRjmnYqXYranuU8hqM7ndtsM",
  "key22": "FXpZKmNkMt4LNTJRPYBB6DxR72eqn7vjPXMTdvZFVPcShMqnWJj1s4MjBRhpbHcfZys6XvXcRaoXQPkozBgods7",
  "key23": "4XUcyKLcMGPn52wr59REMMRcWoBGqn1bdvdQYuEunR4TBdAJcqhejvaF4HjjwcHB6iH29q4UVS3hhnRBVurWyfb5",
  "key24": "53H9hJrymWZYQMQMtoQS2cc58YYDvVb4fV7sX2xsY3yFGWQeXu7hTuPM33QfTPRigGo55oQj6vw6sb3bm8bFY4rK",
  "key25": "4KoQb5hYAMKJywE9ineeJZfKUxVqHFip33XnkRdHb55S5EX4kE44Y2r1jRBnr1osFmRTQimL7dgcZdFDHFmd1Yd3",
  "key26": "5QiBFgz1AnG8webaoZywM9tNCU74aEekAkFQHk8nDYhGyrMb8qieFfSAB5E5fqu637Z6EYjLTEKTYvA3Cy7ACvx9",
  "key27": "45HziwxYAs9mbmHsugVtQDDe1uxTSkgCveyB38oD7Bx6vZhDum3D2W3yr4ESJsKdmNHp42yQw7EsBGtQhU4xHMPH",
  "key28": "4L1K8dLDRhuS9eToGnEmBHNzLjmQMB4YruaGsCAYaBQwZvEEZzNo1CsdEsD8J7Rtj3Q8udPuWSQEhFjRa7dBEdjs",
  "key29": "34MNB81hrzPjGvD2a4JAwocVAi6wfuVgX9Hfsy6dxnHAcSopJiXyqbgwJjT3Gb5Bwe9gfPqdRCbUCi2sGXCvociP",
  "key30": "3rCt6wWpkgdzAU7btFe6iwf5q4ygbe5SouUn2a3oQrGrEfKZ441C7EbLv6Ht2iZFfapkXHH6XcvP7VEjuTpzMA58",
  "key31": "2c2CTSM7VWzTA9gEpMT5m6z1qjyJeLzzLaZJezjJHxuCBMPZUCcaWDgjdCxXZsYV4FRMJY6Wgt13PXqoLraDopVZ",
  "key32": "2ZamfFkiPfRZmJX2v4aNYEE3AtLiAuFCtxDJnnEANqkwwxUi8MFVUTUeSMLvPCYgau8WEnZNqTBow22F1QYW8HNe",
  "key33": "2EFgX6Jc7f4fzJHW6pBsA8PyCvxidwRiNvGp9jwrZFXVYqxyb8CckQiW3TbmFaP1kxYWLToC5RqpAL4wiYTEuVvA",
  "key34": "4zFiCoc1LPw6RPZWMspwZbY3iE1VGQMwGEpzJjQqWGTeGPExr3y2W4tctTT9NqgibFGpCuX3RhQd7q26eWidWVuf"
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
