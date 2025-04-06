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
    "4pQWyNPv9Jvz5BpFVxzvDTpUEvPo4P85FwDK2MRTDFdXSTFn8Cd2F3SDMZcTvyJf18nAziN7YzKEwzC9UtW1PfMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ntZN7ApiGmaWMq6X1VbMAK2ihtzpQ8xtaD5VdTS8qrvBszNPfnveTH4qpF5Vvk4xv9cryhDyxcQiaXxRm9UYhYY",
  "key1": "4Xw1dbkuo3E2841RdDdRxLyt9PxWfkdqqyYnBekbbtkvhStiUYSyDuuy1t95XfnKAJHGhryQMN7mx9KHEJ4c4rjb",
  "key2": "pJrswBonZVovqxE6KxPybZAvkvQqAxAdBffKck888uDu1MFVHo6W9ntWhF1UQmTtM6FosjmHB64bkkxAgkbjmzh",
  "key3": "22uHHj72BD5Vx5K2YPda8BBmDbiLQyNujH3zBUX87RntmJaXMqrxvEKGt3DkxJk9Y5cJyKKosmKKGCBji46pNiH6",
  "key4": "22e3SQ47fdPpDrnLGARiFh9ScbKq86DBfRLzchoMZF3GoUD82h34KSNvnFsKewpoJaPWCnkExAYLuB97foamTPAh",
  "key5": "3knrK5eyxtve2ZEyz54hWnyAkuNyFJU9Eeo91wot9k4pFMVkfsGTiPb9kvAzjq1qzbVfbiK43cLMzsg5478cmjPK",
  "key6": "59RWESQCNik1RhkSEwUZFnon245n6jGAUnPqg5UPV1Un3AePmWtWnxjXHN6qft9n2HkteRfdMXJZ6ppddDEyChu8",
  "key7": "4xmHo3u8uXLW4KsrcgAZMUR2HbtrUhHLVGsFq4L5Pok8ruiKXGMKqqcaur2maAXE7VBjzeTxg73xXqpurcqd4qCV",
  "key8": "5jzT2hgYXLpcGgxaqy7szS3rQyoXdqumLQXLwhxTJZecqNNASK4DL4mwvZskhfeqJi1AmFxs5BtJwbJALwkiibAu",
  "key9": "WFiyEoUbJLiyWgE2Ps7DuZfuDDnavKfxuQxvNy9FYJWJ979Yd1gresy6bKk44KRvKjJRHzMNyR6DLXrN2qn74Up",
  "key10": "3yGZRHqWBpfeziSk2v7QaF1zfkALRCUDNpZComznocLGKhh2iZ4Ff9JZijZTvsahdxuMUEh1SXz5GBMuA6JWJ7Bv",
  "key11": "onYVScT7uyJFBGEG935mxN2ETqU62RpKDb3HKVMApJqNdtqpWyyBT6hyHT1sZg3gpGSvq1Wo59LHvQELaTrPj1q",
  "key12": "4SYyCNRLdHzLeC3VcMCLb9gvFzFVN9Vs6LV7HwtntSNsf7sppzd7NvsB54rDRV9w2unH2g5rRrXKNabQbvCLKRj7",
  "key13": "3z241N5PF5pjb4n2MBqZ96mpCfdsLUJkWtbXh9rqwbQsBnVuKxVHYxWPv42NQ2MLXf7huX5JgNqSsPfvzu1nsSrM",
  "key14": "3HrHvGKeSXu6xcyn6Yd65CRnfGiZ7TEMBQr4JszXgvnpjKU75ZQZAkEazWCq95Ppwohu6nKtnzaKTUPx4nUh7bwC",
  "key15": "2xGQmpeWdauaZBsfjimH2CjW5hypKfzM3TdVgqtqDWZPeQdzUz1hzXRkcURQLy8GorzRDXaB5Cj6BQv9TWwRKuvj",
  "key16": "2FiadYZjcENnwp9Q56jc2iN7BXF8pNwdBSgqKFFTygtQc3MfFWMQZwDP7dxaH2ELJWqTZmfSyYEEfdYyVCWfT4BJ",
  "key17": "Ma6yyC5R9kXHZu92yMHYgTKaTSGEw9DaCTuHWM97GcU1fJz1ZYiHPwWbRxCLaVYmJZLQxT7iGuJeXiAHGS7TdmE",
  "key18": "4TGUkAEUikrPQyBsrUyT72zEsbUw5oBt8njs7SeKeMjaT9hXL9onnYSLuVaf8uicJYPUmMGTggP4YoRJDk37Nq4R",
  "key19": "5YiUn7m6JMTq8H4DYJ3amSMeU44TKRWmhLsrD7esLiUqZtBtwwP2aS5qVk2SXRVPLYNW8Pp3tHyocj6XgegNmBoU",
  "key20": "3qWU783Q17hWZ2KxPLkzuNUmnP8MQZptW7Dqmj1WXTsh8XHXt8jm3w1hafFtMm6etwTW629eBoXKhiGf6Xsyj7Mv",
  "key21": "8aexFDkzvuw8h3rWTeGKUbu8z9DgjYYobfv3hwvbcjV5hNjL1QMnaVByfCRMcxhz5mhNfT7KeFst8fCGpcUtqBZ",
  "key22": "5wiShGZq1nHgRFQeLyCnNShkNSAHRjPf1EKBdfo43H97zH1mJkVmQemkuhj9zbUMmJoCfkS8hGWf1SzbNHAJYtGC",
  "key23": "RYq8AhbSiEKmRySqnrFKjsCs7KezgTdeEGi5WRnXvUjKzuK2aL9iUGKPyfeGyqTSz8MC9ckej12xLULYque7uAb",
  "key24": "3tn2mHFYTcTKu9cxGAv9X5a1hVa9tWzfgJVEXLmHaFWxspKXhDhih4NMmTGpvJAAhUCxYQpxGp5NUYrNqaKuhZaw",
  "key25": "2oB8YYTFKAACwhSFFZyqttKJQx7UY7FTouJR7yciqLUY7jFaGEbhiQa2jRBFmRKoyaHFnwmawWkn7RFJTkE15uMV",
  "key26": "54MM9WtHanM4eWLEC7PMETTwrY95dfx9N3RUvtL7kMj6W8Nw3xjiPvKMjM9qoTHvAW3vQJjQm9by5Mw3kerFcCGx",
  "key27": "3NNJxv3fCnVNpzns8Jin9xUtJGZS5adE1KbfcdSaKiBJjWw9CFxhSwc8Cm4xotwaukD4Xuqwquh1oGgvFyu7GR2y",
  "key28": "58gmCZR31DhmTDFoh3ex45VkcbArSkB7MNJiPRpc2a7zGAJ91z88S3hsKmJEDi1s8L8BpUG23L755YZYPYRjiPJt",
  "key29": "4iQAuvXvKK2pKFF3g3onTu83PsvHn63rxTKMaX1Z2kJcr4nXKjHkjHGMRoCAvkQLd7Je3oGGS3Vo4TdnGH1N4Lsn",
  "key30": "2nWFhhzcoLcgS4pWQfytWcrBrLbiokkxb8U43UywssRTsBv1LC8thHowRm4hCaVFcAtwdqGTuFQKtNSun1uNY9bx",
  "key31": "uJziz7uF8FqwRaRGU9HT4kQynK3JCQCZzNscHmnKH6xukiqHBJNGMgvEDgHcbRwFHAfnzjDUkTq6vqdVnjoRHJa",
  "key32": "eX9XdAXmN1Hm8ipjdbrSpEzUUmM5cLh46LMjEDPen7iRfsEGms3Dh5rKmBYtQTpWSyZQqjcE1w9rjR6Mytdh8z8",
  "key33": "54AyA355QAHdd2epv38duADzxVesvQvYTcvQjUtrMSA2EMK9VSayBtxfV4BQhxnT8qx7hbCpbmM9tjWAa2UDZaMy",
  "key34": "3azg1hVjWJiZie73pmF6j1LoT3PC5eM99xu5NhXsV6mTwZGvdEQYwLggZKvkguzzJfUJR46Sj8KhvDFijachpWMy",
  "key35": "4cvP7BboaDJbsXvDWdGK9UFjPFHazBBSn4qJZJwndnHhsKeVbReBA2bddbrXGmCoXCZ8FCdpv1fgFJi375r5niZ1",
  "key36": "4TimRtFNxgybCnr6u1ifGqXGAUZrZ4SfE6vhhEMK1epB8N7x8Vmn6L5KhQ3Uv3ZKM1q49uDaH83GbFVtwihjRa64",
  "key37": "5ybmTGVuz6g6DaLaV4RfQXiXsiFr8Je3CqkHA3WKQFytkQpbsvq9ocxS9zZT85k9KVvAB6WqFgNvUMBe3erC62CW",
  "key38": "5w7E25E8RKDcx4F8T87DboZAdpzZPv5bi5wHS94EbUvMZnqp4j9jVCNYNfMLnv6FcN2p8ZHKALxwdUR9aj9RxRb8",
  "key39": "9qTvjueAbTvG8cvHQT7Usx4MbaEvGTdssfmYQFsTYbN7dcjDu3eyrLfgiBGQzmAgTakaJaQgVXqqd6C2q8MkkxH",
  "key40": "3eJ2pqFpgjbLnCftpzb8W18ninFe3wW8eJH1cva6PmquN6bfvUPA2SdM9gY3Ckj7XX22xjuP8SqgjkRfZyscFBrK",
  "key41": "5kexnioYwQcgLDnC5kecST51LSTC8UBJstr6xA1JVpjcW1PfGxdPYq2FnP3FBrqwvpQAHmmqSe8yja95fWG1Gm5H",
  "key42": "2NrDRWSbxBWYuKoAJQKf4y1Pu18D9knRRzQ5Egi7L9wEpBgzyzMwDpuvSVDfhFUqRrtpAUUtE9eWnrhJav9PDF9k",
  "key43": "4DXh5RX6PgrUFKySHwGrabQQrDC9b2EznQw6dmwFU6t6PhixLU3E8yitrNyjkPP5HZyTxUJTG9aQerGLoFE4LNE8",
  "key44": "LnfduAUxF8zz7nJyUJxJnNQcVgBMogyCSfwEXL8Cftea1X546Eu2pAoXnZDRziSB6Z6D4opHNmorZ5EJ2qfZhWs",
  "key45": "4E3LXmak115oKbUPTpRUaiktC9v5NWYmFSJ9QA5LqsxaYFzSvN6LEu9snhUWam3m5mZRqtjFyHb1HqQjXoZz1U4W",
  "key46": "5Wrs7MvuEg1pwUXQKSDa6hiW4fNqNDKLQcveigs57u924sGH7qu1S4UNw4FywwTAN8iGfy1Gn3AZU4jHv2ibdbCf",
  "key47": "5LA9dKJsynvhfnW38scu8S2ziTgwq7XtpikP6WhcJeQwC461X3MkC9HSpULFbaNm4RHTPWCpiB91xs6CaGvtinrn"
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
