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
    "2cvpRZKfSUKsZkBwASvwiBPxzTmRGEMPd39qggzBQBUeEBAJuEcLojgWX5ks8DTaSyjzX8tdjsCWNy3ihLG8k4FU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6gYAzKucdE56YTvfJrAjvjANkraNp3yoJsJDWNrM1TDiC9kEsX1d73MHbemQ2qFtra72SBGZuJaNWq8LNvBuaV",
  "key1": "v28yQwF5EwaUaatZHjunzz2vQgqrLAyMhzqd8eKtGHSEtWWsR1q2zmHU326xk7t2BoajgKMYVvxAu9EyqWmDAqJ",
  "key2": "z7zjQwRzBHRxiWuvGPeWjNy6aKZU5gXAjW3rR5Qrzccao4VdodwN6Wuh2cN4mRGFrnFxmKPBtZHA1PLYqyNRhnp",
  "key3": "673waTpU2YUbyM2sT6SQnxusA3hJrzXRhKW3JQEKnj6NhY5A3ecTBkUcFyntwW6pidHnXQWRM8kkym5rPQZacmnF",
  "key4": "39pM5LqZW2snTQ36F7QQwy88Eh42ojq66RYY4dS4LpaSX3MesKgQ6Hf8257BeAxrnDya8noRbvoSJAVfhnpjyhGN",
  "key5": "5b56Ykej37xLnfTkqqzd5GUxZDCQeFP3a2hqU7GooEJUvsLGUU5fpT91M9MVRDYZ1NW2TDMUQ8GXJ8QbHLFEVyhz",
  "key6": "3PcYwY9PK6Tgc2MB2NWPYRENPgWo8Vg7dU25RqeQh6arLbrpQprGBM2QcmURH4jgGgMELQ2EbGNQEPQkV9ksj7g9",
  "key7": "23ekPFFSp2Ug7hy9pXaQFSQVE5jiski2UnwXwZHdJPFn4f4kLjcaBX7ZvkpRFjAmsA6NJASdJ67zXjormXvW6KHw",
  "key8": "2N94f8NDCgSGqYnxETP8EZ6i2UWTCUpHWHtMPo8dcXn6wB2gEsWUNAg3ckk1HoW2cbtnhcvRHWDDf9v24uBQzuZ5",
  "key9": "8AUYEPczjjehkD6RBSkYaWDAMxUY5A9RB4y327PiHQHsFnguBJngVwCybEWZVHaPL9zdZCPDADi1KKyVUuGbrJi",
  "key10": "2tdti66Xx9VGtvbeh9YZW4fiWBHJB8EBtVg4N83WYxn3JGdfPyBGewSwpDGQX5NJ7JW5CWNjSFLATHhRbcUtoS31",
  "key11": "4kEXutF2CbL7dCoo48umRQgLet2Q5zEQuusKnLaPAGVDYfe6vv3Lrm5FTuBLneBwC39cL9ZDKR6CzYFzjK1bCYXe",
  "key12": "2MK9iLdwDjPVWqTKvBqZvMwQEgyYrCWTdYKcodtsXLVdap9KKrVGeQfNhAkAU23yyQjwdVTjFWgwUBsKSj9BPuwD",
  "key13": "KHijZ7BYwgMAGPhvL4LjSm6XDqFgJKBSQDMQAteuVZGkAsZYzhb1HLNkP7mBoXDNCTSwtG1rNeWys8fqRZAiqT2",
  "key14": "64T5rTxLVhrvQks6rG1Wn2EhdXMThWyBvawSqGskJQZA5mBNp5iudeNjgoqXeqmPnjQP7xmJqDb71f2yjKK7p4UZ",
  "key15": "4L9CAg9KQkeNhERUubRKAZrXrb6vG4QM7P331oDzHMbExvrU9Ar6FpCBsxoxzZAJoTaidCbHSA6QGr4Q1Xa1jyJR",
  "key16": "2bncA7zE8H5tFPTxUmtvBKownxyHnPFKDTpLYRvFDASPS7sLB66j45VtTmPCdMSemBJ9hz5yGFD3YPJpjVbDtyb9",
  "key17": "4zovSij4DH4fM8o9izhPrZ8FNK3DXDPZbq5HZWBjWQTZ4JccFXUwAwWrewC4xpbe9bbfXjkquz57AquzjVYWsWQq",
  "key18": "2Gzmwsm8wq9XqBfS1cfBPkdRbCE41CZtbpWzdhGD8XDiAzLWJMka9Df5ej9eHpddnu95w5N1HzsEtSyPx8SkxozY",
  "key19": "RRTt74RoCqtmK9WLE5RTGSzvcHZr71ydLwABbQEmhV3FY6VbyaNAvntSErTh12D3EC9sFS8v9GgyKHPysraueKZ",
  "key20": "3MHZSgQuv6FVwsXvbvPRpY2nQJWEZ8rQtRcL3s2cMMESHL8s15mrpJVXPXAP2pbbcozZ3AbnqcRb7fb8M4q6C1Nh",
  "key21": "2NznyZnAs1qzuEPRqmPX1vWLTTN3DjqFydgT9FDJrZqdQPdazzXjwpm3awLm3Jxh6VsXSqe3y8W1EqSCTudTUD1i",
  "key22": "557dwXv4S8cvUj9fP18orErX9jHLeDzZMPjwQ6spGc5Gyejxc9uMbmk37YdSrDCxBcH7bhDBgwExvvQkioX5bS5C",
  "key23": "3z8xL1nX7GijPmdKSXv3d3DvtjdJHdRE3GBmkpujHaHwnX7KLyzXJ4ikAtEWvDsKkTRQU2DihYCzEpYjmG4TrgF6",
  "key24": "5aimJU1Vwg1c8FqAa1FCQBLQnG8mbGY1MzcuBwUGzy2hvnQ33LFtm8DeLpVH7Lfrk4WjPpk6fvCy9REPycfdVydj",
  "key25": "2GcGVsqBgu7hm2Rda6Yv12TczLPXtWnoi5SqdLB9WB7C4JBDcLqyXCHXZuEsxiwUrEzNiJLPTGoPYm5fzsSEaFdK",
  "key26": "5JZrVGAs4PTeKiysyCdbYAU7TpQvzZaKPG1vX39dtgdLVqvizuDgfHA4fMrCV5rTPiov7HxhoDLZVKFGMe5a8KU8",
  "key27": "3HLPLncghDKEXt3YZ5MNEczbcvEAfWwU6fHirFPLNMnYScA3SwjXL3zY5hBiqWmsiVEKu6zL6ZWmtmHwffwX6RJH",
  "key28": "3tvRiEvroXfUbHumUjeeN72UV9t4EQ1KzRmYWFHApctwidy6dMRsXxHZK2DeKpB7FkCgyKYF8Rjzm1PQZdUZ84xG",
  "key29": "5FduQWs2HrUuhgpCBc6C8ssGAm3FnuYykKjA22RWz92qzMXJRNmXSrpReLQzHPzHqdQbAH4VhFJ6ckngYYEfQpWD",
  "key30": "4G3htsHZcWpBUzxRmcsqdxgJSp74NtKqbCJSURZDERb9hdp83qBEStXHcDWYvDwYJYNaRuRjUxhmrirBQ9rHpQoP",
  "key31": "3iscwaAdBsXYmMYrZuvN8M8f6GyemUN1AopK76vVNKMNDdNg1VGYo95LLsyvJAk7ZA2xEVTatacfDetqVqH89ZkG",
  "key32": "4imofGsYwQxDrDGcG5jtjtPVgwmhHyq9FRov8QLGfHxNz9hZdvG57LvWmg3ZzGEqn4KPKcXkUa1GNfP2KYy7puom",
  "key33": "44NLRW7AtTLq1S6gwdYraDMAPCDX6yi4UgGcR74zkqFTvBhKQWj16VGZZP96knqLujvUgeAYFescBFbr61uD6vYQ",
  "key34": "4nRe4UuJQ5R4PwqC9Zs39So1AZmt1ak1Pf7RKu4TmtAkeFjz325QSw3XAL8f2CGhtngEjVDTcQGfre3imRfNFNDQ",
  "key35": "4hWRhY1FKspahPy6RxpQkZrnBhqPh6rJyykbKiKGSJ87xfBT8YZzqqqstFmxT2dhRSm1jRp1tmPLBAPY47LoKbsR",
  "key36": "5pNjbejoPcLEazKUckukEkeT3VoFV2Zyyws2WucvADfD31XpBrArjN9DKrk4DL4frXnavRy7d5Wd9nXoScycQYLA",
  "key37": "2k9ufNgz3soKV44rWUcFAh27HnvhULp4gRJtptwe9mRdibZC1uEbaAUziEB3CjaDwuZcBTBkcJieF4wYEYF6JpxC",
  "key38": "4dFrr6qaPnX8CB6LSCgjYgqNSkVSWycpVcjrCBDYZ5Sbeb9Y1wVc9zcVfx1KQGde2D9TNkCN5utZioWtaq3eJuYu",
  "key39": "49mUJ5CksMyoJjgpcmmGQh6B6Lj3KUMThSKaWotENFodSFB7nLLToayZeCo5KpVagfA6RqRizmCruK1xfxrHc7QJ",
  "key40": "5JT3ttMNLn1xbuckkEQJCTsqBEXqa6844vXoQbBRPNtykH7kBnAL3QkpfrYmacGrkPitkoqAMLFhgLAjFy2fPQ2Q",
  "key41": "44a5pyWx2ZhieF7kXN3NY3S8mSGV7Z9wZEsn9TzqZn76X5zk89Qcvg3xGyTwvFjfbKbk3hLteoxnXcS57f6FEERg",
  "key42": "2qUSHYMWVndVvMe8YpqxacsTtafJHRGh4YMHzCDnuJw1kXBwV6g53dX6Sj4xaAC5K27cFzxVdhKfwhDvSFSPcYeR"
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
