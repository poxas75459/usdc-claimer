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
    "4rGZbjeCPqYcjKzdiRpRb4CAPQwzgEAfJ9va4tT4KvcNESgKksmbY8BifFSHSsXYV2dGETLGuE8qYSmG7anyVirE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wdJRLps9wcfDkYQiM9TasmQobakpcXf7W7MG4XStVBBcaMsKNtZBGcHmt4H9G9uyhveUgzNeRWc2a1wLxeY1ja1",
  "key1": "2yMiXPvDwTE3v1Amq5eDaQNVdz9TcqudgH8yHpHN39E7KHNN1s4k3PrJm58Hoa4AkLErQFE7QCcL5W9goWa5s8GX",
  "key2": "4ntvHfYWZ1XH1UqufVZHvNW6KsFAUH9LHXJshVTNyycGJmbWM2q54aTeLekkPQUD3ezakczq6wXfcymZBZWW3hVh",
  "key3": "4kjpnVN1VG2VgmxUzusTtTk9M8y3Xy8AAy2H1ioATVkLZJLShZhj97RUbWmXm43LbXvRjEKv3cTYM3N5D91JTGeV",
  "key4": "grQdSfvzgj5mnEZfj3EjbdDyyCptkgK1QJqNBTUdKe13iYEP2c2oqQF2dZkAMn4mdZ3zLpXSrFm7SL8iH6KiFcV",
  "key5": "5pzBRpMumL5SZUjJBLmAiaWuQx6ZoQJKqwcs728nitKnyXQN24xcXScRQKhXbgnnSm1R9N1fkWn9fD9LyiFcxJfr",
  "key6": "45UK2Q3Qwi2jhhrNa3h25JHdEC2Hxz96GBdAbKHXhfoKysWNm7MbGyZCRApXxP3egoxfZg3kq4Qiw3q4iPwdwufx",
  "key7": "3Rvm4i7yPdom4cCdcAsjng5CuED5pCtakBLVFKgjh7kxBLN2z8he3AJADS8GijbXAYWwW5VJdaicryWRsTErn3Uh",
  "key8": "4LvpYMznfaWW9j6f6SASYbwMHDPrMyxBj6BRe4zXrNvWe3Gv3zMD7PoRd9sw1BfhPHbhppJpuG4UTN17PtG8njnr",
  "key9": "Ns7ozVHaLYvKL9eBjAhqWg7ee19HaPgzPwyr5j1s8uyfXxgmuq7JroHEuW2TuJYwzvMBso4zhSqDW5yxG7Dq9dQ",
  "key10": "5Wo2ZhfH4BDepvJvQWxtxZcFSogjDqzZCKfw3CuCn5QKEK1EZPeycQ7YAru2to1UwomcTt5VWotZQ4TEdUQQn9Fb",
  "key11": "gzQSTUypdcVvpoS8C8DLoSEUCAo6cyNZe4K6q25HcAhUkRgm5oSk9TWvuireiEdZBmY8JjZnj6rM7K3WeLTC6d8",
  "key12": "3cCiSE2cPVwaSk5GAw5CsRB4y9X8fUFDj4SwuWsdGorA8VNkimu2RZjThCxFdjz7VuqSCqUSq4tRfeHWY8YrJMZK",
  "key13": "38GhK7w7tWUzZHxPCy8rhtHAvg1Qig7UVrqhrTsQiRwdby7pT79PEAZJYNgePRpuq5SZzynQ5QZiFZ4of3MttZW5",
  "key14": "2JbBKgJ5KXVvhsvZJQFjJPPh3NFd37Mmxnemk6Q852Wv686KQCgRDrbkCLHEsu57utWL4WFxfkSUJmh52dQyXVfi",
  "key15": "2HDy6bB7eLvQS4V654PJSNt3dTrQB9G8JLsYJ1awokAKff6PDxcFtUdbUZU7Vti8XtYtx785VpjQpJ9T2jUasziS",
  "key16": "3zfuX7AJsTXkmEiNhU3wTGEgUwhTPY6h7jdQNy13UvZfJbbUxmoH7ZdZn9gW8xP3UEhqCtJu9EPHGfANLnAXfwYx",
  "key17": "22pPEnYefhm7bvLf3E1t8duCncFkDbJyCuC5AyasXhyurig9cugZBv4nrTX1p2DXS5PogdnxZrCjTCEbzVdxmwcG",
  "key18": "2K61hVbFVGHonfM2UfMhgRMoBWozmTr8NzuBpXvWsjBPkcMZ3rWwAfDG36a69UwYV9CxYJkEvPCZd2CuzpMtvPWj",
  "key19": "5oqsxJFZuG9oKGyiQkV1ZVP4fu8bmVTd1MF6A7abczRWLM9YTnsqAQd8Up3afwuYPPf4rJiwn4GL2WxDgmjYyMdD",
  "key20": "5E5GpL5VbTzt8zY1kMJDJr1Vy4uFnpM3yAYMp5nPoQ1koeHiRPfViKm3g5coudKSZwp3mSWxB6xJEdFCQK3Y9eiM",
  "key21": "3tTTxiZACo1do3wwdZa3E4iyL3jtLh51e8hW7b8GJHZrpeEEJ8XZBmSzvczxsqzZ5jhE5SWK2gHCsBLhEYm25yr5",
  "key22": "3Xjm6SFytCSqX5bPP6vZuRLbNpY2UVaguR6PHfdJK66vduK8LeCAqfHcPGeL9Mo8Fcc6cc87YcLNyFQ2dNwgAnQT",
  "key23": "4CsvNnL23BKdgnEyfExtyGQ69cEDCT5fQVtbN338BcSWq72EwUMeRMdvX1yCMXgGYFAvSJXvHfSup3QHJfkmZTg8",
  "key24": "35PNxSts1RQkE9F7mV1wg8aSyVRkjmwVVDGEWNJQHNC1pTNrRDv9ZhsQM3uBd2UaWpGXTAtsCuAdHw6TVCq1uvpC",
  "key25": "2jiZAVRKqyMTibTF3YD8Tzn1d1eoebvy7jur7WfpQmmcD97LGsjZgYXg9DgT6dvcEhUng4Dg5JGAWX2RwLnC27XU",
  "key26": "4suXWTqnDDMTFd6khsoRLPZCj4G11fPWXh8VzQkC25VtKNYoZSeGB2W6GvR73U4Wk7QDyUmEFibVMw1dgJjDEPYQ",
  "key27": "9Kaf6h8T2vJgDNC8fYiFPLtnava7C44qmjJ4B3yHKBKN6UP7h4EAsBqRZsreiKsSFEFhfKuhrYerUenKtiTVxXw",
  "key28": "2czLN441W9HrTDmDzQqqvatEBePZiQBVPVUxJQs3DAxAgGDgXATPYUoYqeESTFp1rEgpxCQQaR23HBN4benyx7Xj",
  "key29": "43cmxpvDVjK3SxgreTy7QMhbobPZFtxUvFjxhB689pbboLid1cmwPg7RLSSE2yCKW8HJg5EB3r4ng8AWXme8c4Hs",
  "key30": "3cT116jyc3dU6RumjDdSciqYu8mtpzHvAKZhzjCffD95E2gg2HeAMCJVsa9otsB9iJ5V4pA4hFgvKLFGKtG9oYts",
  "key31": "2eGwx9FWwwEn9DKdkDTeXajPK2RUsWYdbz4CJGjQWVKwhxx9EVs6ZdpNpzF2Z8gGg459EFtnYvna6V49yKKtXGNB",
  "key32": "49uVHETTfgecnKMSgrX2dXUR9zMv2VMvsCXAqqVq3P9Lz9mHJMMm7ng5y7TuuDcgQq6gNCCgV8eQMDLLxT4YKw3",
  "key33": "5voXZdS99WiQBfH4w2AwZ2sopNuMSotmDc5kqrYEJRcdsfE3w9nrBWtcq6cH4SunaxseCvfMpAFgt8jKBxCkKLgU",
  "key34": "6Nrua8NRDTmtEHAtcVDpokueBfWQinMdFdMPRXKDYViB39GZTkJzJi6N3k5ZpZc4Jaa2GcnLi2s2sBxN2GieqeR",
  "key35": "3DBWs75Tag1mvKqq7dmF9v9AYHKBuzRiZ5Mjre5c2ogzZ5x8TM2Qjc9mhWeMv1TW8FSnwgQaMmBrbRnS3e2nYTVq",
  "key36": "4JqgGTQHmpRT7vbHbsjV7dqqN7ne1VytBoHqUkJMDtdHb4Whe65Yb3ZDYgnsSSBa9sPo6wViDQbRSfFbfk4UbSMR",
  "key37": "4DA8zhJm71HoJ5oEF68RqnT4ZUqKiGu9wWyTKsLQG5vVbp2rUTZSyLjcWXwxZi15M8A9YdSL8zqRdmo1fNaduw4A",
  "key38": "owzDggY3VuWRUzZPqFyDeG2JfzvnDVDdkC392iZUhnVJW2CdHaV1yCGTwQCpaNpEn4ZGwTLdLNJZtvtj4nqkukS",
  "key39": "2tYJgzEjnDTmsCq4ddxF9e8He1N1H8kaxPMxWJTC2zYcTYdWEffAHGuKz8r8czHxFe9EZPhn1sNa3qgjrn5Qonqw",
  "key40": "3xq1pPiao6qiSA7e2isatmgNoNqQBTVniTvUaCCUAC1VwedLLYNehSrGXBY6ywmYdS5sCJLiMUXwTihfbwb6xV9d",
  "key41": "4bENJEz8pvQK3R2wKx9asPKhCQ7U2r7TJuwwhKRg1SeubyAPcp2qbGi3tDxK9Rwh8H9qH2hZ59G9paaQAYnWGSSq",
  "key42": "3cnHh1vWhfztZAnYbGAB3PUnaeXhduVpH4vNMS3ES8yrX9ytr3uBrbu6wdZ6sQYGuwT1nrxHXFXbX73hYoprbyYL",
  "key43": "qW2j1CyFxprk1CpCM8P6E9fsZDYdi1CjdYNgttzrUT7hBocrgWdNfWTJUyNgMkk8d6MnC4EmWbcfr6zUCB7SPxg",
  "key44": "3rDPcroNCUhFRqKUznG56YjsE39puiu6PB34q3Cf6BYxUXyeNBWJixUNWG9ZszuzcQiYYyJP8M3jjyiTjeZW6dgb"
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
