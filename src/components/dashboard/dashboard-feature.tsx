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
    "3qgx7YhYnDApb4RL4QvQcJcwPisr8QAVfkht9dvT2ncTvkoJgEk9EcssLLeb9ur45auMvwnbj23LHYvcvb68ec3n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AEW1VwtM3E6vvxnfunmayQHw2seX2ndMD76m8N7Z6H5bCNbU9PduCaLkBsJgSWZ3znhtFjeMFkrRqtBUkxvHQ6G",
  "key1": "4Gm7KnqVstBzZQofRHV2J1K7Dyn6iGenPqBax8nphrfKHMpboXR8hqptxWtja1xs2PgbmHrtb1r9XWtGFkGvZtnK",
  "key2": "3RwVuATcCXXHPyP42ksNE29P9BNXsCHJ2V19h2sPFro35V5nTa8cRUMzpicSQG8YWB3YWVspi1uevok1agYJfrgc",
  "key3": "5R4HtmQcWDCEXqUvNyfYj2r3LtRA5oy978z5bEy8PhQtbaPDGzCZkG8TuwFiXvZCY6g78My1VhFhH4tzKNigXzwD",
  "key4": "2cDzCUnzvsPsCXSthZUFeVE2QLAgeBNhcXqa1uGJvUchW1H4qSr6qyH5piG9oTJ85RpfuJRzLYzZ1UN9qgaZmcFt",
  "key5": "4xCCRmxoVjazGrfj9aokfaZCL5m7vmFoVMgJNNyijiX3Harx23qR5xMUsZY91CtTKEJ3bi8b4fYPTBK9gpmxSVCA",
  "key6": "4jxABSgLtVKXyGtjCdhkjE6K9sHcq6vmSifY1zS9n7UuybNEZsjDQpLQzwcxvfCVxd1N7tZDPKstpqqPcesm48Wd",
  "key7": "4mJW5gXKTs3SiSsoiVnFDqhDtua9qhktrgFiHLVxjxiobtmNha3QwZYKhL9sJe9oR4yshTBEAHyuooXje5DiWGEm",
  "key8": "4LbRzrGCtqQa131KCMcxu7o7EaptZbCJAkZP8jrcff4EWCPPLdZGswzobcasGUxdsm6iEbSDTJKBYRxhy5qn3V2M",
  "key9": "5fzFsAh3uNyNaLknCS148BvxJgdDVVpQFwMHoACd7MBmnwHjtXzA5q55iRMqTM3sVBQZDx6tFNi79Qv3ZyGAq1ro",
  "key10": "5bbwUgEyKJ4rD9gHrTxiC4KSHUmbRP9YMPRogoBsXhbEFB4ickPsQox7tgwBuVcJFh2JcHLNfsdbU5AEhpK6qzLi",
  "key11": "2nxSheF4mXRG64wJcmdSZ6Lqs1b9NtRuRDsrqWAHvkNFeJKhVkgB3cW92m11atv3dAXGkm46L54uUKjqeJa6LhZm",
  "key12": "4SuiX5zagj5sjwCm6q6yWpF2C5PhPikKXpf1Jgfnhj7zkwapXqDk2QwZoTgyKo7XNbT2M8xYxTt8qMnx7YoErhZ5",
  "key13": "2yuVHLrUeXJ5tzTbZfpRuZ1tDZyT7Wfqmx1WksQGtGUsEZD6io7P3wJAGVEJvGLZcRy4iJDCJVN2jnUSbgjt2Qfs",
  "key14": "145hXYWa6marBja5ixcWEY8kReDD2UYJg5PHQvVbPeo1KxQqaVvFU6pyqhkA3ZQunUqNiHptEZuU6NaBHied1j9",
  "key15": "dwGQamvLJxDV9q4L7YJcY2ovpm6JAucXPJHzetnAAfyEiG4P723XY5SofgFHJHBQy7pe4mQxdekiuxchejPrp2U",
  "key16": "WF4GHNtEQvs8SzdzfNFqGVQC649riFFw6dBDiZbyCZ7obvaB2uGNLtk52dSc9G8EUDmNJnvfBhBKacKWofY4Qx6",
  "key17": "gQKd6E618TDUwhNjHSt3cusbttFT1DcqaEeSvfEbcCVmEHSfWko2dvbRtWkkYvBXpbWVcBjnjSx1cxxrUPswpSG",
  "key18": "3NrVaoAPPCHedt7uJ4TM2PCgkonfiyt23o1aqGQm5AifSZxJyaGy2KudrM7pvXPuQrCAkMEmzhzZrzYkhaUM22fu",
  "key19": "4Tr2wcNHXmEUKTLz83yhZuCx8VUqEzF9eoNQAHLXYaMoZjDSimLxoSUUQmdQuhiKC1zi6JhV92BGjKL5eK5xk1G5",
  "key20": "67r3oeEnhYAfSwm4gzqmATUYGYYkfCwo1acPhaWfFBdtF97RRyGe4N5D1JCfPRYNuSaMzLLr1gyKe6EA3qn8Nn4Y",
  "key21": "28v5CygC4tnQJrrvkXqrHs76trF5smezsMBSE5LhLRh4furxuMYVxQiDbYP9cCQoBVETxV49urqEo6LcYwKCDvyg",
  "key22": "3DVqEBy2dCaexnhYQMAkWHXgs85BR9cvKgHY4iJ9RLwE9jr8kcF5q7yfSTnQRPWwmZakDaxYvJ9jPvLivdUZ7ZrL",
  "key23": "3mCGxRCXWJ7hBHRt2bvaXRteGvZd97CJP9aRtjpaoXHo7Tzc2wcftYV3z8RMxPLowFYfrHAsayDEeJoQy7tQPkRP",
  "key24": "p8XHLEu8fofqGk7yafDti3ZSK2FuqJDcAMvvJsm5GrGbm24xQSpzM12XH1G2JLUBThpyr6r32UysyWnWDgKt1yG",
  "key25": "2BNC1Vn3vD7TL9xqoUuqsEFKaFJqYgecdFJ33oz8jCQZebnzjRNAfUnY4MSh2MxDVGo8fR52JjfEpBZPReARi5Mn",
  "key26": "2L89uHkKv6GyuhFVqVedsDLnZqRfWJsN3CeU5vpd5Xb5UpJa1ns878FzRbaSBxFnvtUTjrTQJmKCSt9q47ia6Ris",
  "key27": "PkchDdKu1FWr3tAdnRXMDwywmMrYwEe4BKhgJ2zQqjYshyDJuqfWFa3sSrhwBzXypuisd5CvCn7VHUpLo8erkpe",
  "key28": "Wyg1t2Kd6bATVxma9Z8UZEXNzYm4ZrLXsF8dZ8Y23QhiJn3Eju9z9FUvKzVrMSQdwexmZHoHtSKxBieHnQwNDER",
  "key29": "56RXpL2RNuCJLcmsceknki3yMnPJLyuM9PPrCKnNLQY1Bx4wHk4NqC8kSbvebjdLgEAWrx98vXBDLCj4X5YcHwyU",
  "key30": "RrAXsfeDrpQdN4yBqfmVVosiNAVGKzSqAo8dkUM6yAW4vyLfgu4zBu9P59ptNw8zYTvJqFW2uJyZfjHPpsKbH7t",
  "key31": "gbg7PbcJkdAFX8gb7ErC2YnPrrq4kMYXWsxYJgFjK3q6LmaERaiYtfbYoKo8NTnWu8mugmL61aBA4vDAb11msuu",
  "key32": "2ksNnoXSUVwcBVr12WmuzYhHpPTZd9L5akQJpw87YNgNVa67bGpx5jVskMDsKqQoL7Q39xanP3yztpPiLdJeBEWe",
  "key33": "479ksq1no7nTMKf3pVhamZdPvrNcx3TvCvBUESVLgHQSVPVkW6Ca4PgpVaUvv3N5HiNWzpuzgfHjz3Ytd9wRBxEv",
  "key34": "3GrT8dpyS1DVnAJF2CaTBds7XukApXqnDadiwzgwBGAdx9kCTJWxsQ6QRehr5WZZXJEw7dj2x3BuThwnKkdq8TvC",
  "key35": "XQnt3MKfwuWSKeJUkLerungWjirnpc8cLjm8oemJbZPJnUPMAGuxehr9NmM7hrvCgm8kocnzLCtGqypMi5pGEgj",
  "key36": "573a4Hpo48MDkZ9ct1SLK1Y7nnKifHZJfCHbt5gAvq5wRh9m6TWoAbRvRVV9wBaghiMfoUfdwhexxZjscdvgonfp",
  "key37": "2ZoAXh7VYTg8937p98awGpeh82r1jgZkEC1KhyrRbC4bYWGwELiFnwZbGSfJkH5QgjAaMHbzE3iPrZe4C9HPLaHY",
  "key38": "2wDPbLjfY3NWXdWQvVdMFXBM7JnwQjzfDdJxcjKfbC2aiNnC7H22bTFAjSw9pHEYTKrVQQ9NZWzzWjLytXiMgSUR",
  "key39": "2iari39Eys8q6xcbr93bSSKVFvqrgz6YKqS1LCDZyTVcqfFUQH1DkqeoZ7D3EUZbAGiA1z6egShRGnjN39HSUwhp",
  "key40": "4pptrCdEFgYAhnaoToGFwKXvpubJUvhHTnbfAtfNats1oTHDcFsMbD7oBY7mjrXR4BCNCJnJTWuSAEcL17FeaChw",
  "key41": "KEWt5476ftYzjh2JMJLNj5CQMgmTwQXjwspwTaBrZkH6ujLxXKAa4QXyCbxBMGK7ApbvDkBU9fpcndS5ojk9B3V",
  "key42": "5dttBBnV21jRThuNKdgRsVjL4H2RDkbzxH6aJXGjnZKHNggBxtJn6NHi7RNy5XDFbNFgvrLLesetEFF6qMB7aJgb",
  "key43": "3VnvYzf9Se53wBG4WKQ62ePz8ufRHxU4o7SRNs337Xo1tkqXkpGJ1E1hykDiVs6muNC9HWJCdCeM7kJCGXZENyUd",
  "key44": "314WZHcZu7cdNS5GNc1iZxhjGnZH52aoQpTh2YS5AgQDBNryVH8U83DLgTuX7R3KG4V5oJV225JGpYQmDRGutg7E",
  "key45": "VgEhmiLRQb5qjDJZYbaq9VTBtgBoEjxkWVPG77eg2ZmU4hgri9rBnk7Yr6cHH9fpKcb9JAR779wiUeyTZMjkBqk",
  "key46": "2kGxMgdh2JBmYcpu1hChVvhbVyC5WXWSFJMpRDcxkijrG3aLx1mFiPADNgzWVfAQPpN5BAGb9ffw5NFXjpCZYPjN"
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
