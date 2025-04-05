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
    "47VaqdKYbQAh8ADXSg4un5Lmzdxv68mcSicRjxJrdaDSNKCCcCXirv1raepk4Ppy8tujcKA7qjs3A6KXhnJ8D6K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJpMLjKEHLNRAbuc6diGXfxnFegHZmqGZRn3m3w9e24nC4npVkfmaEMr1uoCgzW1Pj23kKed4Aj2okDwGUjzcVx",
  "key1": "4LTVGBgmzwdzDP4sBMs2wdmXwbgUhQpv3XgGkVNUKH21N9tz2PoNwTXnYg48wahSt2v51iYqu94VakZ7As3MArq7",
  "key2": "3KkAtVDnTQjGtqN818brujxoQX9MQDHqyCZzku2omoE3PXzQh6FpTHk13hFB7thEKowCWhkCruPJkiBG2pDCTfFM",
  "key3": "46TXZnQ4BrLUB88pyJ3KodMwjFR45FM7M96BwjgWMjL7xEWGnLmvoKiTYM2M5q67hqU4kU7e6qdDYoNxcxQwAKA",
  "key4": "3YQ4H1GVE9t5YnquxTKvm7XFovTEMvm71gGfzpW3WqTcU6mruUvF9UcVnoRoJMo3zWR9NeN6Pr1AFiXyhpmTw1pZ",
  "key5": "4UGgETxkTGVRsA2dr711gWdopeckQsjJtbFZaLguST6NeyzPrLGiRfDUWfKQCznbhajyGCEhFKFko9eLh6HMEavE",
  "key6": "4RZc3aEkidvTxK9wE9oEznks8kRSMfEXPMvogPRiQeeSLtJJJZL1F9dvhBJUrDFzuatXwSkrEi7cmg5SMo6iwSWm",
  "key7": "24GVBvrmVNxJw4YfjP89vRXPj4xY1VDfrDQyk7oLDt4x3BSaw6P6MB1aMFtC149SWgK6BeWo2TtkGnwJPCC4GMdr",
  "key8": "4zkeqo7fYy7CmBowyEvaKCNBjEoQ71Mb7KDdUDQ7FR6Cz89E711Bq7T8zjdeAmkN2uAtyWatM7mCKKjhSWjYhYPV",
  "key9": "g9SQ5P4SVfuYnSJtdpHCSGw5t1yAk8aMpnqntKJYJXj1AnZvSQidtDi8cSgwXqt1SN8ahEBpZ2LsuY7tUPw3ahk",
  "key10": "4r7VsjDSNr9s9PJffwVLs1evaZQUDDqajqfRAJs5X9Jo5eE9jf8kVcdtWesAgrfgkuJH4KmCng6mbWR5gXQ2NbFa",
  "key11": "5N77FRC6mLDUxzMrPyDCFMCvLy3uarqZA8SxCtmfGUHAbEgydkhWH9kLQsjbTk3JWDiNyi2ag5xeVyrRyBT9pRQX",
  "key12": "51A7WygSygzDMiHMNS3Ps2483Q6YN2n33A3V4ybwjeYCbYCjzYafWV2aQi8FVcHYBRdZUaUUjRUNs1igFtpLNg1G",
  "key13": "2vghp38eFBa2Xn5RrdHUNedd9qKd2M2KsuauQafNYEQ8kGdxnEacTAVyLFCEd1Jo89qmB16iBTaJpdiATeU96ttv",
  "key14": "2TYxKzn5Tc6mHYS6PdogKwVuu2YB1SoSbbVxQjG8w64MsgUyXgJHTcnSCTN9WowFRJGFgVFyswM25cP685ZpUY9x",
  "key15": "76zAgxwz933HYFuZVkorE8LpdAP667qotvB4jZAPqUKYzZ8t2eeZDgAQxZCeL7m7Kwqm46GD5ddpALzQ9mHLSHD",
  "key16": "UtL3t6eBgvodbeWpZP1u5GzFMkKmTx7prZADppmx9ZKZjdxBiRFU1EbgfYh4ux2iPWBbAovgpom9Tazvf61qjLd",
  "key17": "3RBjAYNoeKh5ZNAJxCUEPnTyJoBnz7dDFRhPZgw7y1hvPFwH31kMh236ng7ZhhL5j9P9coKNC3o6t96bqAbnXTk6",
  "key18": "4TkwC9ZE6w97MRSYCbBdeV6SkaequBDU5fqAAdVBAtc3znQuxGxXJpF8KMUARmTXYXT6tLVgZMrmDwaAU1yzgCoY",
  "key19": "3CD1i2PM7NnTD253F5SWnbcHnusBFpgUUR39bYqdkRDvdohdGYZMrXFAmyKNyb9B4ZNVebp3iexnhKrp2hnAfDCB",
  "key20": "dvYvxfd2V3P5tN5ejFtUX9ft3C3qQqyCEhcg3RS2WLV2iZEqawfErRs4dvJdaitrt1NVJxxgAxjZBT8AfwoC4qf",
  "key21": "2eeJhgZsmCZg76y43wAd9fUUdHTNy1XXUVxPxgVmEPhMddtbkfX7TtsoBKgNA5PXtEJhdTaAAV53ZArPKQsxpTo4",
  "key22": "2jPNtBCc9cmZazLyThMKH5aWDGDfeSABQLzBvQzayuV91onkdPxxKukzVxKxawnzHhWazUm8VZpwxdPABQxXm6FM",
  "key23": "3NgDRrxWnRrWCbfs7kRPnTS3M2ySoi6S9PZPVaa7kBBWBvuPGtacpSvm2iCp2CNN5p1JmA5Wz4piQc5zsVoCavDY",
  "key24": "66vdQe4tCmbosv4jdf1cakgDR2ncNwYD2h8BtNter2N5yqVihPonuj4wcJ7LCiA8snLxsj1ALB2YXsa9j1f9CS2J",
  "key25": "3f4hzQLYUfBEbawCJE8sm9CXJGL7DFX141zxmxv7hDNiwQ4pAccb5afGub4ZS5Y21sGYcMD9mPJWQd5JAMkWXg2W",
  "key26": "4jErgoTwvDu6G4Lj1d6m1c44CDAXeJtCkeMaSrZyknjhr7t9oxYE76SRbTdFSdoLjkiLhWY8GniD5q9qPBd9AQXc",
  "key27": "5r5Zb8htq14PqaHENxU3hBVwiesz6ha68XtXEyjxTTFyDWFsJhV2SMtKk7PCuEVJCHBWxASNvSkVAAJAFuNcqQ1L",
  "key28": "4uZwAQwyJCtSZhupLUW5KFUn1FrnvnJcN1oQNnhUzhH9ZWpZ8GtXgypWLY9yfd7vubXVBgJnaVCZHJCzLsEgPQZb",
  "key29": "3izPTkGWjdXignBQu6HzWLbEoppsy9SLcEr2rBvPc57YWm6BKBGeHSTcHtLpZ6FriZruiL1ieqamZkUb59E8o2SD",
  "key30": "2wN4uGgQMuXzugWDdCeGwSK5McLkBWKhZJzLpSSLCkvtGJpsV8HX5ikHroCM356o5PY8wH2z3tPZ9kHxdsGA8DBT",
  "key31": "3jjBkT8nc4WzTJsPqgcD5NjmW9ccd7ybcDsx4bW5nqPLViqBPZ8PGSJud2F8RECU5wRTs3zqZjqJ8attxdkqi77N",
  "key32": "42RtXWqRQcmCtg4U6UpSX2EPhqBGF3k2SHswFE1wAT5PSdwaLzbUGiHf2qGkyVWGusDiT2SgeZjQsfpNMrJv8ZgE",
  "key33": "qga8NzUU1ZUfxZmHrnS76D7pjPiXdzuethVkaNUfvzgyJuUkgp9P8auENtp2jXHzhiUQCN2TTV4wg4TvqyzeUFf",
  "key34": "4yqq67uvsNHwT55dDgRQMnZREFacadhodtUcPUwCDDpVYTB6HeH2MdnRg7GyRXqWQAQLGyVAzkoLr8CyZy6r2Eds",
  "key35": "4QiDy4TYJ1hNnKwCb3U9RL4Zh7eCUUv74SYnpoQZ3gGfTyKqzkhfRLHMYhDXK3mQt9RGhRmH6sHScefLaz1dxRmv",
  "key36": "Y3ysEudc36ctN7Qz7cF1CkLdHnFbGQS3GczVbqEx5ECDznHLN49qRL8vtfYaQg8kzEU1i2H8j7SJp7J5XDbdxiP",
  "key37": "4FZofsx5Rue3HvPGJ5biNwXC8SzY6diDMmtK5BEykSE2S11eFwQ27hsd76cbJTHoFdtPWG7odoBvvVMgAgsh89VW",
  "key38": "32Wq5rLacQNC7BvsoQD7ze4YVJPhNrfcsMydwxSY8A16DbEQbVMyGGGS1BacpMQSgUyBS1TEuYPT7e3MQKr7bwS5",
  "key39": "2uRmrdimqwdfx8vHba635VbRF6zeBszuYm2xWjEwYu6JGKo4uRvcdca5RLRL1XHLAuwCV4hb1k5qC5mWaeLMsboW",
  "key40": "5k9pTkSpX6FPtifGWTCbcKEzNnp8EenTx7wNmhEZHYF4HQPVZJw12or7Guv3VirkaZGssatzY5JA2jrFLcgDZFfy",
  "key41": "24Cns1PWydYe2SuyFsBMgUr48ooN2gxrUkkLjVaNjjq3uapnA847QSsHUvpquMAa9g1vCBGUbtbXN3MBfywHFnyz",
  "key42": "5kcVm4jACwAczEUdh9E4sDDg4ZT9PrXLJA6geFNpUqhPAmEYBg2fS5Tg3DhskTS7TC5484pTYsEBfY7SjaXZsnnn",
  "key43": "sAqZB9oixtpjygyz2BPhzQWSrZ181J6kPvqqhUGqaJN3jjbpFC2VpGi2GqsKUYxfXRvRMoy1pW5PjQrvNjpwD1K",
  "key44": "2bzWRhySPkSdtSxaEcMyPFT9atuJZvCq71RXLcG2HwfQrpS89j6GExFzXTDSq5sheg3ZqVzzQAfKRu5BRm9ULTby",
  "key45": "5FAT8Uz3Q2rkkGPSfs6GFyHSmwxVCXoSJvCsCeETaup8qCnVsecoE1asikVgXRT27QzV9F3214g7HtVHpBVrVtkM",
  "key46": "5ZhreUrUr9GRKwKC9BjozEhTUrQ66cjkXgmCrBX8fYBo3gL813A2aUoFFvAsqGfWXvrUhV9SZcEPNMFbg2hbA9uo",
  "key47": "42pKAbYXRzsd4FjoWnMddZQi7CmUFkviD1fwYvXebFmB8RK5EBN3wyGDNbzSPRkzEUSCvS3VHbVGkvhX566aRmZq"
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
