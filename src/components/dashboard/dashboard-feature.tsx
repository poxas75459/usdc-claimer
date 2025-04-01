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
    "2SYC42htaeb7t484HhvTLxxY9xKZRjxhoLuvNHmV8SFLWLHTfuYW6j8y6KopN4EQ3ubcExdGRDKAECtksm1TedYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xyr6AuVCUk6j4RLV2CVeTPJbCB8BNx6cxPk2FMYb7WVFXj7GFgNHBawc3uJPpLmuDrJkHdTfQrPauCNrGgrCZWc",
  "key1": "38JX7q4PEH487LqPE6NPY3sWCw1yEXD7Uc1bHK4eFVhPbfWYikfddpLjaxq2MdcqF7ksHzbKVM21T6W2BPJreYND",
  "key2": "uegJysvJvhhb953x2975RWUpKDbF7VkRrW8RXJWTWVsQjQVn4HG3xsFyLusHXy2dzqi9unGgTfNcAH79gDjs5Ld",
  "key3": "4gcSXwADSRmVbvByxTHKsg2XNTa9zPiq3n6d6DU3PmEC28Zy3MjyfaMGAjKTTc4QA3S1Rt4Mm9Rp8sGErG97oApM",
  "key4": "2aF1F7jx8DiyuXUSmj38m5bPGdzfND5Nqm3RLmHYpQQdrkfstaYfMwGMnkTPT5mYmyKRhuFZNWn6EQ7vsA9TawUZ",
  "key5": "34e8gRQYKRf7gDTkUzHCBSeTP4iAHqQqm3RuDcKabmjTkMmA52oT4VsE1gVx3vqbt2mPEm2ksS5YrTVHwLRBW7jC",
  "key6": "4R9WsZ511Rh4hJbP8xWS4iyToy9wjY62tt4QsxvDHcUTfg1ixhfQSgENcqfrvCZhwtoEw8RdKaDdSXZ2kW4MPDah",
  "key7": "3QFAzzk8DsJJSCHhoVRUuu866RGV75Ss7MPpHUSJWbKamBgkmCPtWULLpngeF821q5b1m1QiFQVAPN84zifL47kq",
  "key8": "3qB7s7wLvyTZ7S8DKZNzMzVhEKPmEoPD7PSP6gpyS7ouhXF9CmYNSonkbS71kPEqGtgqjg1roxSHWv4r3Rq3uUa6",
  "key9": "4DNibeu2DsoxhPX9tQochK1S4o4BNPDueRiaJpH71XjEC86Wxy2Qe9L4TVcnC4KFudHWsJ29hTkuWxVjiwj9puX2",
  "key10": "3SXMpeFYLoeGUfbKdnYbEfpsPcV1ptxFF1bWsvSxcaQw5iiQmDJjiworJJkUwfPWsDMEVwoKi7L1UkwpVvsZSy5x",
  "key11": "3FXwhme8hXvioLeskKyhSBikVKcSmjWSi974qrkimsbzzenmjkNDihH1nhmzLLV8L5gPPwxckCgV8uPSKBYkuoc1",
  "key12": "3YhjXoVG8iVnjR7Gp4UQhcKvr6ee4ew685VcK5dmS9ReYx7t47kcd66Peo7LyzS3bZUzawik95jwgwjEuPtdcu2d",
  "key13": "66WrR9U6GQjnHN3XLrFFyYQKJJJVkNwF6CbPr24YtyjW4omtcmTdKN8bXs6qEJd8NwcHFqNtJdVFXZR3y8e4yPyM",
  "key14": "27HKgD6YFWimd3nTobPaDZ34p2kVYMXeq1SffuxsAFL29shYTwoNuoVxG8r5MzHZSQM9bwfiwLWXBZ1kYcqxLhnz",
  "key15": "4qjB6CiqYPqerUWjU1Tmy5z2SBCDF9kS6U3QUhbYh6Uz28RnQ9n2TFMpTUmMdw13bUtWZtwJCw9VoaGk2SPK9mvD",
  "key16": "3RW95H5rxudfrBn1VEhHUAqN8xUziyGgivajTRPuVcHvKdy5rg4Yk2SkUV9YcNAtGH2Pc8vxH9FkgLJKhqub2Q1Q",
  "key17": "E34yQ2MvnUrvSKZGHjPnPvFhkwjb4n8gkoSDFNws3HpD3kJPQ3Sis4MBtE6bzswDRw5wH8V6PT6wNTiBbRZCazG",
  "key18": "5XFzuQ3WGBsSaCxfhBZV2n5YZkSWYH6QdmrBCEsDzSnLjD4PKo64VJB6bKoQ7jV8QjGYcSdw7M2qahcxk2gNfYuK",
  "key19": "5jDdfcFfeuL8n8CbWYvZSFSjAEiXGXV8LSMzBMaP6p8KpJJ7qrNefJBiKMTSNXafbCUsgcno7XoNSf6bqfkC6TKT",
  "key20": "FVcXMmnUF4Mc3EnYutEiYmBx7feGrxUXhPyjAX4SqsEJ6hBKHvn1Aw7TCQ7TKNT69k7kUowuBfSA33RtJf16BEC",
  "key21": "5bSXpaZ8zuawSMKyRmDQupMneHTJi3w5GbkiNwguGhjm6RPfrKDVBwnzMAyJqe451vjssTL1KQe1XpoXK3YjebPp",
  "key22": "4Rcze1EEgt1v5iSLfrMvrkv4epHk9Ccw7YXcTfJfnBajBSGf4DtqDtCqARkLUP1igahhNFceHccx3PcQWkNcyWKu",
  "key23": "5LPGdueGkS9RXxiwtBQjNCQavFEgDfSYqAMxD96CJ5ofUUk9RVfD4B2U8C7jTi299DbCzJmvYhazXkdMRt2gts6u",
  "key24": "YeFAQathdP7d6inbkgE9L7q9FTuo5PSVwmPz8pESNVs9CdAv7GcCnGuiWXufVuBunMgjmTognfngugrmrPMNcJU",
  "key25": "n4PKMxMeBa4QotmAmo7PY9XYdTpyDuuZ4eadPJyEfb9cE3474gvjs85f5WNddj3JFaaD1FYr1BUaV2ef7De1geh",
  "key26": "NkTwP5aZH4fGQeTMNSPQUV9mHEWBenqTZFneQLUWw8x1vQbimjsTefdpjFQjxLF9ce73C4fvfujv1NSFdUWQGKK",
  "key27": "2LrkpGzb2nDb51a8iFvp5YpESLzdNDWDFwdGSmxSPc4cwvre8q5VxEWu1SAbh1MjDJKPeS4rpSGVKJTZRXr5cNYK",
  "key28": "2hJyvBN8SeXS2cJ9AxroC9D3A5aemLizxTQy9ahowqMrw2779cMC1quBS3f6kVPPwixL6fHmWyC1JmzeQ7uz8YmU",
  "key29": "PpgqnFZJN46etg6imgXPDQ1pkZxoU3uR34TMdWR78k7RebiwLmaXozmDYVUtFNbzLQLFwGmyBQiuKvvRD9tEBTT",
  "key30": "sc739PpMuJEVjeAet7ji2pt1XWMCATLsnejGtG3emtA5mxJJNMuurFCPkvYFYByGUZUfmq7UJujWcewNJALV6KP",
  "key31": "LR3ayhZYCeXWNRxsrNjQgdJReBCwrj5KMyA44XrjtC7UJW7uo5SYnKjfuga6a8G6uRs5tM2isQ5XbejFfGmFaZm",
  "key32": "fu73upbBJ4S3dYGN4c9BJdd23CnHHuCnydYByRW7UJQ8vFvHuRXuzoLFaBbNR9MqtdZcSfnGVMxvRxkvqirdVUb",
  "key33": "4bpj6nNqTAmj88aXB8oncuVBnVfhnf7AvykDB5FhKHZYJCvBAHXdEYSA1i2UUdf7QmbeaFbNufDwCSTbDFv1b2cj",
  "key34": "4wZ8JXZLURHbuh7ppD7jTmCraS6T3RktkBKRsbCyzDn16V1G2bA1iFCYdCmaRgmMRKHCADMvPw3EZEVRLrXft3pv",
  "key35": "2y3t7TjVZ5g3ofrMWKAz5RRKX5JwsUkoC4WC5UmaNZc9kiwUUgPiDLppkwGjUGUkZUjYbYKnuo7uC3A3SGwfnMXA",
  "key36": "4TP6Ab13FcACZWK7knCYLb6uLdzjNup1LMEp1zDKWrvi5QNEaFd2wXncgdfG9iJb3iBXt8GxjQmozS1wEMEhLmL9",
  "key37": "64KcNz95fTDBC8m5Nqp8NYtp9uqxaZTL1aWn4u7gpAWTJmKze5vcdY994D2ULgmVpWqwWVxTTgiKQ2ZdqMzLH4Q4",
  "key38": "4bboKFzGiHrKAmQHKbQKKZJjMhcjBCGk6qcW4xZFLkqhxZk7QmnrQjWnPM1cXdS55MVxTDtbGFcewg9qK4yt6cET",
  "key39": "KgTgfqy2MhwDZgjuU8qtTMbPB2RPe9HdKxZXYDa5o6S6W3hw6bJYZD7FoxoJi5CyLDW5tVkH1eh8DPqXVVecQEC",
  "key40": "57BEHS4LPGWGdA9Hh1m14gUowfqdFa9QbmBqVVHP6NzB6CVAsLGbZKBQdQpw7bHFcApHg7U7SureLViAKGhxRvjw",
  "key41": "MAK588Wo1HxLGZ6fKSyavzyNwRTjpFNZfv9G2hqjRSmjs3WQmkb3ChB7YiCNwsewuaBLuq4uJ5812S6EJ1KRFnf",
  "key42": "3E3m7P5nbHEjXDHBwo9gF4c9GQ3saWkaerxp3Hpue1v98QA9yBkBzd2sahqVjfwnXStsN66iMALtt7GtURAFFKDo",
  "key43": "4mHDQLeeMwUPmzY9A7KBf4z3CtZHhfEMSccRKtjUVCoNaViNUJNB1D6YzHKK5j93XuPzk78RnEUdpcXDo6uuGeeo"
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
