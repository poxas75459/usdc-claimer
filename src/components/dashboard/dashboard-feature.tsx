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
    "37BitAJS9BngPvW3NG2ydZ5avwrFBKmqrhvSnELHxGsUZEqHbMKNwzDYsnLi3F48eWrzXG21WnKjSz5ohsShQ3nx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vx1finMW4wDTiiR6mfQQeS8nDnwiAo6QAmqKA2Nf755XTVrBGy8MN1yTg38WC6TXfSjg6v7qgkqVnQUvXtdbYM2",
  "key1": "5oNKM9aG5QWf2ziBwG4XL1fFvxgcuzbnWVLFR7AjGCCFwfPz272rWLhtyQDZBFC4Gp41q2zmUHd3L5FL9yypJfAx",
  "key2": "HViP46C9kmQgxphRj5vzvqyQLtVCB5xvVx1FBHBLCn16ejF5WjGnWJmtqZHbGyHweegpuHaPZXngLZMvvsKrzwJ",
  "key3": "3yTRxGDdk2yg9GbQtY5RQEvaLC9xBey28FmkUgu6DGLsoWenXi2YYneLHdRTUWgJoqqdDojv5xU1c3ta6dxzVkbW",
  "key4": "29t91FQsTdSjrzjSxf22PEzPFDX1vCUfAecxLAoramK55VLC3M9p7dqsGPWVNMxEQqugefv2zfdc3oGmWRsAYxpf",
  "key5": "24rrU8bmSu8zTtxz3xhFVLHwhsgZD6K1YCWjpt9yvucCHDRs2pukk7YLPQbQfzVFVrzaFQK1guCGPMSAfdXnjrKs",
  "key6": "4sNXLhz1FNvDJJSVTEuHCxcbkqmoG6DFG6TRa6wqtkhf4fYektMhJcfxXMUQmSRbrU5RbUEqFJoXaKEBqzfs13ZV",
  "key7": "5jRswYxonjQUJNNsZTak8oHFHxeyT1kX5RPq22y8qbDkURjb9Ubshupt16poEHSKKrKJFf5JVs8SAz5gqBynW95r",
  "key8": "5SxJcznCgXmkHrt6PC9g43GpRqn5wuqh4x4Gbdwb2amyv8eByMKCAuehbv2xgTwZG15UyA1bC5Rp2smtrxNCz81",
  "key9": "515TCRSaFXjty5JjpqM3AqeAqSboTYaHrwfWkF32AHGjHUicR8XqMxQo4vrfZTYE8T4kHimGzbSGwJbSmM9UgRqB",
  "key10": "4w3jnqpMJ1JyW25XVTQSDSFCjJKJKX8Mr9hM2M3jFNF15TMpM3mqdFnzRC8qC8fbdu445NXXC7GfmsD4A4Giq5Wb",
  "key11": "5d63iA7f6JDoitmyyFCia6uciGYp6U87cxmAnoczFWgj5F6e4UYSSQ4fJpboQ1E6zDT8SBBkM1KrXRAJVEQppzoY",
  "key12": "5QKfLtjHUWQXAFUFDubznjEL1nZJysWn1D7T1fur9oV6kJUKV3vUDFxYmwF3PSntdnrSwJpuxgcw811EU1jFim5W",
  "key13": "JeTrgq6hR6WcWqmF7kNNn9tM2wENFDoPCY79VS1n5LkXxArMiExWuu41kgwY3tKe8pX8kdfPhyXebPRxpsBqGzm",
  "key14": "43B5ST1DvRHBcGmWraNrLRWfDohMcPCqKAPiQuZtXHUVeG3BbxgAJKmzTdtWMnFR389T7L9Z1rodUBp7VVQFCcsY",
  "key15": "43nqYB2iU5xrsue5CVFwvnGyeVjXSeJrkPQja14uUBGj4Sxt7TpE8Z4WMzGVEopxc5r61w6pCXiADBgNiTUGx8Wr",
  "key16": "5Rtd699DzW832Yd8GbaJkfwt3n8nWCeKnauNQqtsXWaPm5PUwLHMyCPFrU2MPfno7degosffVYHfXGi8dbZVYzTF",
  "key17": "YBicxTaxTu4CSV7pM93Kgv9AuMsEYvVSTayKRSZdaP27qmyvhHKMsVVZEgXp8r5d52WeTpJgp6s7PdczqNV1xue",
  "key18": "2N3dkKQFrcj8xnCFaUrQNUy5Riikh1CYYrrjtjE9d7vDx1mehdSB9p7pFuSokb8rZuYkk3YXMNMh9onBFYrpZqmx",
  "key19": "4fVM8fs7T4LiEsLtkspWJeZvNmPiaFW2piij8TmPLPzgRWSvn17CH1CbAcn9qkZMmdfvV44n3HPCjnvGdDRAtjGR",
  "key20": "4PSMKEAmK1RYBgBreVo69kdDMsQ7S8QyTywzXQFkgPmqF67Ga7fwufZB3Af7CwnwzRwBLyPT6DFaRXW6VvzJVevX",
  "key21": "oBjjiEef5AAL41uJSYQPG44wj3LP6ma2NLr675yHQ9aAQ6C36ExHy4CyTRWFp2hsz7QKthdgQ1cgz88hBDyCgyN",
  "key22": "Khn6Sdo3gP6GqsRJxTebuKe3Z4FXtZRby9gqurmXTuph8fQaRoY3h1Pu5WhXajGgWMwV9B1ZB5Ycb46QFPaBZ1D",
  "key23": "3k9ybnQUnFFrguX9MQGDMdRAYJdPXjSRAdHH97TmnP3jjkwBhTwQnd5JK8YSX3d9GaiZqQrekJeT4djdYutoMBk6",
  "key24": "2N4KjoQPGsTZW7TUA5ofFCMqzkzjUjmsBecBkqqcU1FKGiJcfEWmV8maS4B4j9ZYaNo8yPqn4x3hjmuzkKgVLbe5",
  "key25": "5jcJV96hUaswuzkrcoXgbKaSogRUyKTNAtJS8N1rtREYauiNkao4SHX5Gx8E1p5iukwY1FPpvPeyer5nmQYNNuBQ",
  "key26": "sQonkbqKTzMhURCyHV1A7tqcpQqhE2bivyYThVYw6v3Rfzrw5xRed5EiTxC61HsVDKmpGUREt7ysU23CCdec8Mb",
  "key27": "241x1m1wQ7dSPMHdNjga4oxMebMCHXWEgu3SvEW43H9AMdFSRtWxTSj8tTuM3qd1T8Rze5FmMvy6HmPPY76xvVq2",
  "key28": "61QmEBM4hvmgPoc9MbkKbsSmeiGrqV98QLNYvxxkNyZepq1hnWkVEn4MMBbrTv6dpCxn31udu8QEPpfEi4M4sN7Q",
  "key29": "5muQ8ibUjWGcmBrBZVx8tgMnmxzDbdMYGYjWR2w6hc5tr4RR9DxmFpRD37FPuUWaNEq9xbU7eXtpoxchGHenvYM5",
  "key30": "412RQXiKgJphkWNzFTSiCYV2SdEgFfdFWxYa4vSfZ319yqguKykkezFhoNNzUsqPzXPNB44mtLzp39VmhLjasqyf",
  "key31": "5UoysFhTvJw8KDRbWMxPeDs69nrZvdVRxfXzxeaKcQgbPRTV3DigWWhgBVg6MJPrUoMdC9XRW5m3ur1gPkFvVKrn",
  "key32": "5sMRdkPxejhTsMuLze9vwFHxoxukQSVW2qjXr3RYy796L3AZUe7LWniErCMfkEstJp11vkBcPm9abk5GSRuwTGTP",
  "key33": "HLZtFx23Xgo93GQUEY1WDKnkQU4XzXnCJPTx51abhfAKnXSnMzi2UXq9CceaDiFJQ62Ko9TdyusgyEKjBCHQDNJ",
  "key34": "4v2BJ1BzUAVSnxnrieHFBNXkqMRAUqyraM2nc3PkT2UwHWCBzXwWL7AV79rmJsfiLuwK2g2n1NkSczVu2vHM773",
  "key35": "24Rvvqjp3BCr3q2uQZB5GV35Xd3TFRWJZyy88AqzG5DxqvwK3vSW8KvtZWzD1QRXCtKYmCJXcGDTWKmeuSJ7BYm1",
  "key36": "4tpUR8e9jVWboEGWaseA3KLQiQuNsXKLNxJjM6KAKZLBqkdUxtjzSjAMyvQW8nr59VLrwZErc8otQfAujitqsdNW",
  "key37": "4W7Vit6dGKUYg2zbHaEVWfGiBy6oNMsynhVmRCVkEqd1wvdkiqWiSQJyMYTv2XgSrXwnS8rCtmBFnhwNTcNiQ5nK",
  "key38": "5sgsQcC3JFWvUn7c8zxnR6JtNRucaUqHWZzTDFMj3x9D4MSERdnTWTnWxKQjPK1zUrMmsNcQwLMYAJ2nLEfGSrmC",
  "key39": "4woeho6oBR7LBZG41kLpvvijVewgAqZdHBjxwRkmgM15JmBQLsW32Y2fTcapAFLjwpxCqUNKyMe79ugPJFkAZ1Gz",
  "key40": "35DAEJGgt2jPrJTShigqrUCfD7QUN5VsQG841PkpsJhX39JpiJ1L3uY5Fny4uj4ak82PKkhnsGefxsGm3FDhgUmR",
  "key41": "2xn1UX9f9mMsfrQLcWPnxgeL3PFPa5KCVbciaJwp88jt1Nu6qeQiCFaRvKtNWPqciLnTcc9dq52zsJMAsi2MeQ5p",
  "key42": "4uyqfKrBis5vYKvbxZoCwpTqVd3pDXeoLQJSEguYE435ECDBM78jUBSxWLZdUaawNEQuZjg8wG6gUT9DP6iLQBwm",
  "key43": "2ZKv3dAEpoXVxiePEP4T9ZbeeYpUsgBS7XFY5Cs4E5Erp9sKnRMrxJkUqYpt9PLm51n6eE6FYuWhhzuB6p4c7km4",
  "key44": "2x4B59t8UmPKWLJXQRRBSJxgA9vhGRBsMDkkCFDJrEq4bzoLU2KB6DnGdFrBfqPRcHHxQpbYip3348Kc8Woeovty",
  "key45": "3XhHfTr4r7pmkDz4gwAjStSPCzGiDFrNJxLCFdSmJXkzHJ64mUAHnhBvpukALfk8pZFZ43LC4bKhZ1nikf8ZEayR"
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
