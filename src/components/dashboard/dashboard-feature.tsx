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
    "4G7Bg3UCYzfeh1bwXJC4LA7w5Vauh4ngATujs6W4vGNPwFcNp22VUeMavQvVbcAH9TfJZmn6ZRcWMzysormRDGAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qCgjKFebZsULN3LtC2U78M9eg89ymcKyZTZqq3uV2DVPeGA4CJ95g5DzcZtZZVZPcxTMjGG5jo32QS8WtnxwCFH",
  "key1": "2MfC3v74myfAK1thStLC9dkQEt5fgm4oft5C6a8HcrQ3VMhX2HYpb5T7VrXFidtMgdp896eHQanXQSNCCFgFkvJr",
  "key2": "4heEDP8V5DVuAYW58fGqwRNj8ooUBZ2DegHzyg2pGmvsMwDtFmxy2HKpvoZv7aeCFNiD1L7m1yexR172gjxxYYT7",
  "key3": "51Bsqw2u3yXNQyauFmykdts9LnfUFg58yHRhN1CptFipY2CNSD5ePDSqRPsn2uwEy6khVmzgLpdSuzUmLMJH1SKp",
  "key4": "2eNz2EmVsfxqS34NNG1MSBZbKtod5JAVgbt6TBMsZRdKVyPJ6Xcgj4ipAz61S6LThL6p3BXBiJM6X6jaGQv65wwc",
  "key5": "56ofVk2M2HbbiaSd9ixvseNWKqCywmbrZvfUD33FXkqno7r9P592M8f44cE7JaU4SCQowNnMzWHzXKXngsfzB5Yu",
  "key6": "2ymrJ75TfWhz4F3t9UGWPKNs9XU4m6eVWza4N5L6w6ZC4DToEoYihd1EBGQzTsa6YzM2VxBBgcHzEWhFzm7Wm3nD",
  "key7": "45bKW5pysgKBpyA7s2V3jYxCVxpiFNcwWK8BDnMVsFwSAsW7xBYQrqGBpwDE76AEJLg1fgntXVBkcAp8JW9Bi5i6",
  "key8": "2aY8FFkS6jpviVxH4tztNfzT74bvn1MDqHgfrsjiKejaXUTbv2onR6FbcyFNM2QDW9uf5DkE4CnPdtBbME6Je3Rm",
  "key9": "2hDs2fWUnFU7jxsqSBoUtHSqpuR8tUrDwLSRM2QcRMdvMPnhUW8U27VvAws7CrvTixv5Visj7j5Q5vS72Trnjxre",
  "key10": "3fgn3q9ZcKscSvePtqU9ZMX6Y2wtBfcBfHqkRobzAXmxgVLujGpU4ikdTojdaG3R4PJJs4Lr1aRPcoJLYn3LLqNT",
  "key11": "5oc3LNud58N6rUszWJeZt3fHv4wJw17szapTEiSc32zXL5bpzCs4pKSXUPzau6u62mPhyx386aschWUJ76Q4HUxU",
  "key12": "4TahhCCFckM7ft32XYde4mvSco1JUyazyaq49zSFLAgV96oX9TjxDSxNYBjM4zxviyn1sVGVCcdCjEtMxuYjXy98",
  "key13": "4Gr6JZFo8e9VRZvu3xSzzNQBqFPwcqixewh7cAHkZSYUtyD3ZU5x3y5qZxB9sXZJratc71B9CMChnzUuopGz4UtJ",
  "key14": "3odgZ46AdogbxKgUVGv1L4KXKSSwrW3zbPH1ejB6xDbHEjyv5YZYqXcXyB2zFjgd9kQMP24B4fRLKMzLe6eZqrUK",
  "key15": "5dmBwBbbvwL21avRcGL8ycYiYLm5mjiqixN9vgCoroWkiKwea6uJ7Voo1vhK85DFHj57TfErZDX49EryAQfhNHt",
  "key16": "2q5VXqfBK4pdbZwRenimmwC7CPXac7UXMrHqeN6JQJGbAMKgjNXfonn1sXvipVE2z3cDK9ft4ErQNrWd96R9pvpY",
  "key17": "2chn2xNvYYimu62ugycNB812EmcEU6UTVEcDrep5wmHNXi1iv4P19TjDvwbvBcnxgAeP93KieYcPB7QNHNCPwdcQ",
  "key18": "5eAoqzn54MjqZozW3W6on6fUbG67MtR71sEyfiCnkE6nJuKhYgJEL4s7Qx6gtdbWiW9AJRdAokiQvKgn4bVDXbQa",
  "key19": "2WvAT82SwwzxDyYgdecXaktpKdox2wnWhHcNQ9pLDKCRcyN1hYZDtH7qUAya3vRenPHUFNTS8AZEnjXZgHK8Qpub",
  "key20": "3cAjGU5AvYkzzae5VUCZuHyZE8RXacsNCsZyGo1eCBSAvpd2mSjc8Wus9FKa3c5E284nqJjTeQKBvt9j4gmzeiZX",
  "key21": "o9Cxvznbm21phjWj5QMk1sXDVZwhJJFApeMus8vHSrwKFiLsRK1F9Q2NF6Ujjk6FPBQze76cLnHdjRAujfg5duS",
  "key22": "5DppdjRwmhQQq4sipuRLhfzv6N561M2gjvg4h4h9LMKjC9KCMT1rtzqhkXWf6S5vq4PSp23XJb3xSyrGPrTvZHJ",
  "key23": "3BQYTsXeSQ98euC7NShNCFAdzMfbxCzYJihFcfRPv1fe8j2q4XeAFnQD4YE8SHREuogwuwaGvSWKF8qVp815vm5u",
  "key24": "2TqWFmznGRhiyBqcX9BK99P8p2fUazV7zJQAC8vYiNbeExkBGdnTXrUrsSYcr3cmcnFvmfv9HN8Ya4tXDeDoYyCH",
  "key25": "5e2wDpRiVkR2vxbRmZQaLEvKt61SSWercQegQ6c56TcsGHfNT1UGzZqksKy6qGqR2LSn1jbuX1TdBLWjMGqAiMXz",
  "key26": "5VCeZ3PuZgjMWoV53sJF2xHJg7esgVj2aGr3KAU5oCu77PRNqs9xcBVCRVkim9UXFXJjsHKb28X6hq9Ce3MhzXgr",
  "key27": "3NzrijRni9PBHhtyp6NPfryv2MuJ8w4yskVz5H9PCFRmiqAqaQ5YiQUBpL61KbqGeYbVvLFVdsGMu8kqa9FanoFM",
  "key28": "3XwzQD51XDWrgaZPkQTZdwJEkqzArXNyJugfneDza2NUonn3avVa6iB7eAJ2TzbVi88WwZPzuN8jxLbaFQKTtUto",
  "key29": "67ooRj7AnsiTfuTqnRvpLKF83u83LyqjAD8R6r2XpzhV8wRBhuNggRqfYxQfVSj1JapL4WcC1z5QCUepfwgYFGug",
  "key30": "4BS8rDzdNhbMXPVqUyqfmjWFioyD8Yi2exQaoJ7bMYfqGFS33ZxQVBZGVCKDG11w1KhywLJBCLe8jdAma9VbwDDz",
  "key31": "5xR37vUdTMprwXVbCuXzisUx5ELfoN7FJ3iVXTypHJCNfDGLPM9B6t6mq4D8zSDRnb8PefArcY94kirHvm3HY7Cc",
  "key32": "5yA6iqiHnQ5SA94TzMWqCMRGLf6rhgtUDmj7Z8zP4YzRoxqM2VQpMrjyRbPtUxDpTGkcxpdeS5eodRkmpkxfCEQ6",
  "key33": "5zuiSJovdhUdLrpn6HWQ8pvjyBitry6dMR4K7T6w1s8RaCyEUuWspgU4GXaFtaZBLNxKbHSYhV9aX8h7Vi1Jonf9",
  "key34": "3QpojQaec8Bv2dLhWgzUN3oZqyiAXJXfCy8FhsWeNhEgNiMhEFX1BDyLLDo4emYEkiiQQtJqk42C7YYYD3uwnJJ8",
  "key35": "4ouBcDwCWLHH4bnLAdisEFPsgEZH7KgCRGjTRT5a4AkRZD2x2Ef5C5MYLsiYYbVFKdELSYRSk4WYBLSPLmgBYXAG",
  "key36": "yGwqgUGimrzJrdy7RVKxR1niwsuoLPKaKaMhndf3UvVfJ44oWFTyLd3ewXMtBUP9YLk3H4hqcbNLY3dgJFmUNy8",
  "key37": "4zWMt4evPAsqT5xzFU9SqVu6Vu1xsGojJrMbHLpoAdhCSSY4SYoKEDhNW7AHMBiMknYi5VNSYZsKskit8RRfcvWU",
  "key38": "5apN7ghEYUsGAHYiyFvi7wpZ5j744JGHceVRey2AHB7urPSKRSEww6S9AvJmdyAVVspfPSJnWc2TtChVR2WwJ9e"
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
