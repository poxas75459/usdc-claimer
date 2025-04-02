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
    "5985aAdpFN2a4diqzSbacidTmP1kbtUESw7C4gxpgdj23q2Dnrdymvf4VL7bmoubwmq63rrnREjNFrHSa96bATGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpisR6Bc2sJfbEDFHZKbFU8BowgbJFZLcaa1759cTskc13bshZYKz1krnzUn2kSwEXq2d9g7TvxqrNXuzuJnNXK",
  "key1": "b29VaJK1BRyzjSzh7TFq1CC6EhNPy3DaVyVg8BTAyXGbtsRr4xKvuD6tRahqYsVnbC96ufwgZixFEi6uh4tjSds",
  "key2": "ZSyJE1w31yDGbdqwpX41A6AspWi3DSpZWXoty4RPUMWADvsxtrPePV82ThMExrJcQXhsT1DCtxnbe1yPzkcnoy8",
  "key3": "5odp1bvywMhpRu4HPhvx5GQWTkxRSawBRDzzetyEnnv6MsHpjHSc3ydQsSWETnFVrZe9ubteP3u9bypu4Hz3G7rT",
  "key4": "2hi21hHTSrmu4AaYBrVYuEtjus8vrUKPYGupj6DdeLAT3f7YSCuCcfRSeW3Be9tDNobjHkENNWxTpLZBxpYvhFnh",
  "key5": "38bEk4qat75C4TGWShBsuy62vXhP8zzRNfPGpDS5xW4TVnAeCw1CT6o67GrNkfW6CMR5YZxwoYnTwkCZaDWYXkBu",
  "key6": "5dbFHdShEbfaz3Ypsrxxgj4fqtpH89FZU4W8aaZ7pK2CiiQDKfaYRx1WP2zMqJvFihtiCP8T8SGhkCQyJzdmtcvi",
  "key7": "3pU4Qa8aEg3naECaJhqafNhqavTxvk4cywbRQSQ3fWM2ApdFxSLd2FA4psBWAqUCWDwqskNPWMwwgmuPbvKZQAi9",
  "key8": "5eibULsZfgurt9gYcjmwyrZnjjBdh5dgT9F4p91HnPmEtJatADFUYSvBHAe7uiv9LCSuPsTfVmpMdTCpaLV2R3Do",
  "key9": "5mRbYBme2ZAMPU7HPuKwbeGsQzv2bSeyxQ6GAcWBj2tL3tRvMrQoNBn4V4hqkdUHmiRPsSrFt6BFJooP4BQfG3Cp",
  "key10": "4GMA3UTLsQwDLZEUaUJ6CUs2htcF6rraaWJfgPufpsF4cfzYEnoYacjP6JbepLQaPWdjWbSJbTMUhYc3wHJcJvK",
  "key11": "Y8C3uG6AGDbHXwdQ1b1LR48F9pQJzJWoLqsfKAe1XJcZoytv5q5CGQ88ChyASomGquNRLijsqAGzHEZV8MBvZFa",
  "key12": "4mKzvqAcNeH4Um2RmqNmnUyGTHhMUnhcQQTryyWKpLggTmfuYh6GkTNsmmT5SPwqdqhX3gKuTKbCsckQsFLS84Xo",
  "key13": "5RfzNDfCpKbEXSh2jTG5SSZjkcyypyzamyqinc5oY7sMY7cUpndFcqMREXBsH6ePjpENdkTYLtTWTV3shpyf6TtC",
  "key14": "2gzpr6P4Rp4S18qH5eFTG2ZFxx3cAFRyHPRXYPMNxj1npLY266ZcAfCHvz2PJrTaTNDH187MrV6gonTgPtr4pskc",
  "key15": "32Wrna1ft3WzLUrnzxEdbrHv1C4Q1NQHD4rXx1wQGda2wFPHwHYrQNq3QoCu39ZDCmZFAVtLBDhPfAsXKoMNaycS",
  "key16": "2LiTiu3ZU6JfLeQSHMceLRKxPTaDNfzdcrdFNSCEetvW2oW8jddJgHLazVL1Y4XL8NNR1VWqo2jRnn9xfpAKWc2A",
  "key17": "5g5U2MH5jCQaSXbVE5N5wRP3ZEcWdv8SnwhyGaVBYUskAGviBxcCjqCPgXwaYH2nCUJB6rDavCqpBThU5hzLaxMX",
  "key18": "2wBzzLE9WjaS7EVnu2EFzsWKbWizFumwFoBdmb765EaXNXgJJx7gg31mUqgrvfZPCNQFyrDy7cMRPqR2CL7h5Zhj",
  "key19": "4trWe4BfND761P4HauCnHjK6Lnk32hgpEhNGK1UUbiYAs7EEi2kuNyQADXS5FK2oW9DCDX9N3qB1Cgkb1JFrwoA1",
  "key20": "26XXGwdud4TG4wAw7JXPo7nynt6fru3W3TuzJK3Jg2DvUXGgVPqhPp9r2xQDkENMw9FVL2kzzS2p5WfkQuU1o8iw",
  "key21": "4LQhHtTTzoF6KQ7SjL2ukynsmNcW1JnFcB7zJKM7VQGCBNa5YWsrUv4nj7UhxhRwctE15aeRm225kQLKpRkXdKv4",
  "key22": "5KxkE4rUF7dt4grpWGTep2Re4XdSMUe1MEnQwFPAaEndLTHuej5L3JQjtPLcJx6H9NDztifd9QB237UQ3kYnowVb",
  "key23": "2ZLH3srvd9fxbpCNzvGQQ9iRju4e13esA3gzeNVK3bVNQfDfbSj2PBzCZdt1jgpABk3pcNEzGYvPw6DzY252yBZU",
  "key24": "2f8uFBS4C98YFfcGMqYRtMFwzGccmW29bBUwz91JoMoDGFRtA4skqegz9Wnrz77ujpQaKTQAHWLhdaQRJBci3Er9",
  "key25": "2rmiV6UkxxoFmeeMMkKBgLCRUnnpAv2nW9ias4CuPJNQFB8PDZyBdzrJwaNPyP9XxMAqdmTH3QhXkGnZF3hNJrX7",
  "key26": "374SnXg24xJQAKH3axf76gfRtRCfg5SzvKr1QwBM3PLaiRq2JykTEvk6kJJ4Y9HLLpM5RAb8m4AeGE43hr66vkcN",
  "key27": "5dwYFHiMmT8wDZSYYRNphDQLvmo2voDxVRgwjYYaKEnipwNPZZsNTWYLriVNcfV9ftjsKEZe58LBpia1U2SRxmVU",
  "key28": "6niJ5kYrQRDe2qA7q1c5N94MuLj2zgwe5TTAZDZ17AemawQJPi1bE415t4yTvrSvekkEjReDySNd6gHqgyeAawP",
  "key29": "49A1AJyXPHevfPZ2fuPW8hoPPzhvsFmmNuLDgpbiPdN1wBv355F3bWXFwXzLcqkehFwzKyKrFauzy4HgBmtbq9K",
  "key30": "461rZKUQuvbarDFfP3XZwwmZabaZMJn67MT4saxJQ9VKy6xaaJoMnaFs9twAkHHvZt5aXhEcWBF9eeB2STJGyLTS",
  "key31": "8zyi6HR51Fm8XTq7GVxM6UaWFqd1rB8AMoyNF9apshAirUbVXwksDJ9dBthoTRK2oa5kQ6EyFt52F7LV86FGSN4",
  "key32": "67RsLVTgcvvCZX7nPQ2Sf493AoiPYJe4pnGd1nZUj6oroMHRhf322uxBJNHqMtXQ1yUgyUitqtGNq8hy35RzJbe4",
  "key33": "Bq6aiRDRk8RVTgGmh7UViNbEnLtXrTZDwE6fsYQFoUELGWF5VasAHAmKfAYNEjo56Go6NLwffsJEG7ranarkr16",
  "key34": "SXXvEBRPSTbZNgAFsAA7YHLmQvVpN4Gec2BGkkef7PuvY6YZuvGGW2Ziihtyshs9x3B2VJ3LRS5V3TzeoWdhHfy",
  "key35": "41UQrd34x6RisaVRvqwNznMjL1ANkRYBCUGTMywiC4zZjzz1RR9buSxCe926Sk9fMsinxT3h7aRJ4PRG7vKBaxBZ",
  "key36": "3ZScJ7iWVJMyCFQ18CqxLwTdkVWretpTA6uHM9bidaSoo2q3N6LTz66EEqitAQrf3YLj1iAaRNFA44Ey3Nd2oeJW",
  "key37": "4xqAS2mnVXiYKasuEg6kzjH6hxFUKJZhpN9w6DKu9rDtVXPJXoUtPKK7wFA2cZtDNM5aSgaYWPD5titVHZ9vsjS3",
  "key38": "5kp6uHiuCKtJzXUocM6LLovqvUcmLsTvFAkgT7SJCGAQEMVvBftykXNuyqt4D4VtaYYLstPVHhs9mAAuYEjbjcvj",
  "key39": "ALWNCs7NpYRA4DetTtjjfMUYgSsM1TT5i9mVi1tZ82AQgsr23po3SpLuU4kjwM5qsKnudVEY4UwuReMHpGjAF6p",
  "key40": "5HZJqLE4yBLDxXoxSePjiMFUK1frHcnvmiK3Cgg7f4JaSuw1C1oAwsNLCEnNWGAabcTtpQDuK7dxG4zYfeEGthhd",
  "key41": "5RvwyVCYhcRGVTfuc4QzaFVwB5PTrBYGuDxpY7xduVTGuNJATpLbcAZat23CWcQuxDy1EAVDNjBwKyzcupKVdaYh",
  "key42": "Pm2gZhH5tJR9BjKvG6pvZvmzwou7cq15s2p6yUe1oprVf1w2XzyBVj4hoPpqFmdiL1ZQHV6tQgrrizrGTG2LsDG",
  "key43": "4P4XCBd9izfnhan2eyomBSK1FzqYwJMsBkLujc9ZC9QAWUtcEWMKmyFvMByEi8DzyugweMsvmhAg8JbynGUB5bcN",
  "key44": "3Sf3esRy8R4yR3rcVWFEquHwqAHyQt7f5SAapDvorfaGaM4o68TABQB8G5HUQu41gV7XGhTtY9eA6uo1qx15gfij",
  "key45": "2LAQ1wAJrTYzjjsMrc5D2AHxBLqBwhcxgcFoGRBZo2AkYAFsEfiNxTKwMzkaU9Y4eVZpXS3TpbTTMhuVmakk9xMD",
  "key46": "4vie6ACYBJvSFRw5JhoQLJwKnmFi44nKGmA3hkA1vCjjfyHJRvdTnhXj3Z3doaVtNMApU7qRrihSKqKAVVRJE5ta",
  "key47": "59Uaemwetm6GM9Rr6xnJZiZ4GxHjnfQdnFyDpeH3E37yb41muqZ7qXB6HxBuDZkBW4QseYTz6pRhqERn1pLfrwcM"
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
