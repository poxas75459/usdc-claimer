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
    "5ktWzdeniMf7SGGQt4574Z8NzZEwBgwatGKFkFAMZEwduYo1XcrU8LmLQth7sq97mYhDa7UFkPd2rVvk4nGcKBNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EWTWNrxgpoiLFQ2nUeU32DBDwjoSZt71kvdVJ3nP1Ru2e9YoqMGLuWkXXyv88nFuCRrpcTyNmWDE5AHbsJUeHBt",
  "key1": "5kncoHqt8PAinWGPJmsSVX6GmvGDmP3iEj5LW3uR1k2b9oH9rhdauXiYh4vuoBn9Kzzye4MJXND4iY79kEJBZ5bq",
  "key2": "2h3CSwdKP5G2cxBD3W8nzy9tJNZnxPdp1W5MNQ2LSX51Pjqr3o7u57imarUnBvwj9eneacyZE8eLVLVe1zE532Lv",
  "key3": "3txVXaXFjkj45D4Tw1ygxyNi6vzmTyGy3QvMNvdpamoNoWoPtHKhimmfftYoJHch1dCZHACH3GnfLK4XjUNasok8",
  "key4": "YCCGkNENFbNRcLMQwoxwsdWYF76ttbQGU7p3vxKxK6xTC34QbNccDfcKHwvgpDiqTismsqyTNh4ud9M8P5cwXPv",
  "key5": "wdmNG6sX76tHcw999z8CKTH7eYQ9z5M6XFLVDNJFTcqQQ96EUb5kssJzWhSBASii4ibLYweYsQFdxEBwMZciGKP",
  "key6": "29MyQXC4DybWoGUfirCT6XTQ4Qm4x8FPW3i9sHk66QYfDBM3tre36mNxg5oKcR6crNyapL4Z5eVd7ZSGrKTz55rE",
  "key7": "3o1pomLzT6MA5BdN7af5ccKPC68JxyQmhuB7Evso7AWWJ4s9gyUq4gDdB1SjAvZGVZ7KXopfSqE7q2W9T58XDkpu",
  "key8": "2oCwE4AUwNSUk2AqicK3ZV3bMABjx1AEd3ATQU9pHR4mX6QNAjB19KTZe7fhE6Aey6Ynuq7to5iYB7HjDDCR9h72",
  "key9": "3c3CMPfQeQEmmj2wn9JbSBxkKzLAwsEJGKFRZW99fo7JbPSajkhPysKtmXruoCxZwnkWX9dtg4WrYQSNsWugBVCE",
  "key10": "2DyrXqdXTqw5cwm9azwpbcZ5Pz893SLG1Mxfe1nFvTTTyiyAMEeRNvV6N25JL5rn6xXaLPp77CXPZvALAsxwdAmf",
  "key11": "5ZLnz3LDFMHYD1u2NtYBd6z5qfxvB3zwS8CifnojtWsmkmoiD4TKBxz5r7k5aJP8JMyFfaKWhdxKhmSoR6sro7ok",
  "key12": "4wezJS1Q1u3cCsCa8Rac6RKN3VGTLajyfwM2ZLT4zaUh5755f2GvQq2Hwbfqe9cmQZvMtBWJQKEKJzaw2Eqs9Vru",
  "key13": "5TgR8oQ2CYaKC18v1FejGBpHDipfafZmSkpJ5PjMRFPyVtL7mJLkzsYcL3mRVdejDRkiGRSJ6U4dYut1or5hYi8v",
  "key14": "28FTr9cEh17kzQXtrGJvgLv6tFsyKWEwetU9aoDBRpteA1eGzQtDQVPbewZEqdwVkUS93LxXVEjUzMHZvCEfiYfw",
  "key15": "54jf3dBfiUricY1DnPyWNSLweHcrJPZtbZxGX246ZnixAjTRXkDJm2zeLAbRtJ3vzRZ7zQyFH4hhkHBiSXxNQvQD",
  "key16": "2wmBDtuyngssoUyo6mR6k7oSxjGLwxW4jA98MqsQqazHLg2wUmhA3mtjkuUtwXWNdRmncrL7c42wYHCw3S6bqobt",
  "key17": "23juFVuE9sBUKsCJV2eCpayn9agk7yZhYgxAt8w8EKfLZg55MT3yZU2ykHqbgK9uKBK7Gh8BohANpXBcRBoQDxAt",
  "key18": "559CzaVnzvpD27D6VjPBo9mKmqNGkFk1sR2vdqX54dMdrwaTpWhuiZr1DPb1mEe1HuLunZtv62avXHHhfssvc6sY",
  "key19": "3yWnwzmTTTLnoU76Mjq6Y6pbBzUZUFeMseWXd4ZMpKpDuWXFppg7nEU8tXKZTdMftM4q1yGvKh2CQgs2kjVShZcH",
  "key20": "2vCDJ176PEo8rDdT9wU8VzEQUa3b89k9fHJ2NStYTii5eMpwKrhmkwVgtN6srHzv64fGqxJ9drLPv5GAAjxMyHy5",
  "key21": "4vyBbm3LoH1xPr7uYsE4Nn7ib42z663Ft3zVcoU4RK7w8ixZ8b78Y4QjehBWvnb9tBmuC6e5yG82RZ6wsukr74w9",
  "key22": "55dbMiaiG2scCqaci6EhWgFwnZusBUxaXGL6gqdgj4fxviDd8yGCPyo8HNkrDsnJ4KdRZ13BfYKLVqEzjpsZ4fBq",
  "key23": "5PUyHpKCvRuw9YfGYfZd4QpVn32VHwPsyuCqy3nU7nJQdbFAq9JLkk7zwqvRbeucigwy3JSd5MFvUenKr8J5Mbx9",
  "key24": "3EKccddbeAJGw5wwHMe6hTrJH1XeCBHVcLSX8KzFEt91RRJ4ektR9qwDh3HdHSFQXwv43FS7ZhUUMNPSqfqTM6mG",
  "key25": "5F2A86kAoxJ6UaHxQmbMayQ7c7nCf8miy2iRKmQpHtgxJsaPoeTHc1CGDQhoJNZ24GjhhdHc4s4pdYc3HkvJTNHF",
  "key26": "2UXb7Ncw4TvmN8r7vqZ4aBnhwsXNxnkJonFie8QHrSPqM6ZwhrET3rqXBhcHvPqRBEwKrJkM3UpbmGY2TbUSY8Ve",
  "key27": "pWL6rnk9tSFimNifYtV994EauEtNoA6XeAzie5XHat54BPa7J13ZdPZDBvnxgNSLyn9vzhmHgvs8yBEbxVb99j5",
  "key28": "5iF9XyPHm6R8BxRJSa83daSezHETFbTEcAnawxaL1FCpLrWoK39FdKU8xgBmRUJjGtMdFCUoEH4aYk2R1aiavNAG",
  "key29": "4TCjpYGi56565jFJN96kGafwhXxmKJ4E1Xn1WLEpWuUyAJeHYmJC6e9dpHfanFxRBGwDfq3X3sjL3T8oLqYmwgFf",
  "key30": "xjnrv43vBCBmDjuSgGRni9SZD93gYmCtvkNwxp7zQth94oEiWmyuuq9mZmeTucKyfsg4gHdUbRyHox6C44dmnXt",
  "key31": "5p1czWYvNs1pPpy3hmLhj268oYzj27Q4RMkNa1Y77vaNZNHyajxzjFMr5M6jswnvKfMm9ky6BKQmZXqfAiic5JLw",
  "key32": "5eFM7CCPk3mMk4CE7146wEqM7XWrxxFZKFMhwkPtva3gHsj5aLyAy8tyQuQvYurwv1kgLJ88DTCYpmyWknsjMFdU",
  "key33": "2Jkia6tF8GidH1F1zsAsrFQsry3oe1Z8PpDS5mgzxJWaNKXwmLZare9sdXnydk8mYNpQYmfFuZLXxc8EQ6R9dNLL",
  "key34": "rnUHEaYnmssbX6eBeh9MrwRkDKpi8erYeekoKWTMmDx4E6ce9CApWqc8eHhNyZJJh2NNmtKNSDixA3rmK4AXjTo",
  "key35": "4Bj5WmesmifwwkiDKhyPWQ6kB2jtu3SbZB3FJq9BcNz2My5mjF7yJEzgvf7FMAaHwaz7mYoAfufNBFbEeR2r1jgM",
  "key36": "EXm6eMb8SQFrGoxJLxApEXVSpCcUC9ov6BwjMTKs3W8icab8rYxhPww3Cd1RBKJuwRRg43Ei4GVFtcU8jRvANGG",
  "key37": "3jFnhG1NNpQbhxavo89z6WjSn5QoW7skC2phpw7Uj6HrKwshc8hSrNu9U5m2QjyWFBMGoT3hUwwZfKZ3y4h5HHrL",
  "key38": "3o9gVVySbyt7G4VRzrKBrTNH4A3J2t9jfa5Q9jCCmhyXk41E1DBHDY2GXE2mQYwjBjzdKxr7bM4crDcEtaeaFCgX",
  "key39": "3q3mnyeMNYKsEAz8fPemDAtRabvGHQwmepPDRrxgM9yLjzPZYSR5YNv9BgM3BjCqKnBZReC4UaLiaqcoc3KZayvr",
  "key40": "3Ksa8jCCjAnMNJ1h9aKrZVWsGz18RY7asL6V5JJTiMqqgVWYZyqAAeJZhND1KbuxT69cCbUnqjyME2CVGfpHBPXp"
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
