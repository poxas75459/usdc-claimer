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
    "2wLorBBWYZCtDJoTWjF2zA197BMorDqcV25eYZY1WBGb5AcPfBbwhW89qy2BbsG9yw3rq4ibv9Gx5frjvScxT6vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wLgvjzhxXTDtArVK9ZKL1tUyM4PY3ppaezkG9aEtup4GV9nsS6pqFR2Jf9JPw53t1Wz3ZxrbcfSWt6ifsQuJd9B",
  "key1": "5dZm683KJgpA7G1NUdZyMDrFUVdNXDKum29tzLgF5r38A9KEjN8b6mnVdvQ1Bg2kfUpucjV9q8GNT8qn4opQ495p",
  "key2": "4Z3kCUkrmWrFWYcxUdLmwPoYMZ4oVWwNaD3JhBxADdTv4Dq4bf2itr1xmHFmwBHkNNsbQnNja2VDKJEFos7cwHb7",
  "key3": "cC1WEL1SqRhDt3EcPDP8XPE4FxN7ooNtFR7Mo6YUUvXrUNXJHtHLadYD6ptg54KZ4PXSfZx8Mk54cCX6XKciZ1S",
  "key4": "GmUtdGZY6LXXruqG4wJgpxdvjn6heG51pRp4Q5UUWvGentiQbbNJ4LpeF52axKvazbUMJTGUyAyAJCdH5a8GCZn",
  "key5": "iLLxtLgPkSTWUeH2EWF76sxL4D9wifMqKXAmW6X7dimUm45LDBdqBrR5ijSh24w6pmGVTZhSTi2Z4sLmkPV7HZH",
  "key6": "5oBLgRmZtma5TRx7TfNKSjAYdpeR2emnTgDDgPkvijAFvHBRY1wgnpFgCPsKrhfdYnaeAiFgRvLpjLhY7QWiBitG",
  "key7": "wvUZfCzKm29tpSFRXpLdXLMsgeRgYGjMAYZEaW4EN32A8R158p59XJrPFafpzFe6KrLpmcY8JiUjzyFjj6yNAgT",
  "key8": "2mYpRWG9hQeuLL83WwyemYKNQPJCpVt79conW3idEvdqVMdV5ibjazyAH2gfso5xtDAtqPY6CEmnn7aQtBthVTvc",
  "key9": "2i7kymsVXyzJ1cSfUN9rrUS7nzdYBuiCzb9mGmK1UwiSakH7tAVohT12N3Q8xmBy1gzPqEqtDboVVT3YNHLqsUJz",
  "key10": "2eMZwRiDNMWv8eYA7jQWay9miKUuXUT8EzKVsAR595rnDd4C62qqSdzcdzWP1Byvdixsrp8XRBK2xJHGgvmEs6yQ",
  "key11": "24kEMpaEhDuXtSkrNE8fDnG1nmAFjPUSujpr7Fj3T843bckBzU4tDpW3KHHPYcyKYrCe3pEdqcePba2DFeBVvRLf",
  "key12": "5k1XDq3m77pkz3q3LpgxmxNvoQtf9veSfbFxkCVdGeRRYDYD2qywJwST81tLtEpW6UrXqHdDrWWUM3GjwgCboGXp",
  "key13": "3EyFAiJfcK2jPjo6mmMbVtp2cBH4RosiYCiizqHFAQLhya15zRoW7GPoEJBS6q17nEuKJt8XiAk7MBE7V7ioMrtZ",
  "key14": "2Xnmw5HLozoNCuZ8v2rRbuNqEo9qX8oDchE6mr7RpfTELVJtKUZueM7f6DZwKxreQzenQj2SN8Xr2JfjArm7Adqg",
  "key15": "39vupW9e1fk3U4NYupEcZ2dxUcwv2kpGBJEMPcjbrow7r8UUepYzChx9gVjyRH2QdpV8Ubvef41HnUqhnK77skJK",
  "key16": "5GmtTVoR44UhrQgg2UQppmGZzndYVqT96vAXbUh1hhmPMCjWRNGRsGGiJwZxSuq6oF7sXX4rXrvvTcpJsnkSVr4U",
  "key17": "2yZ2Sxq83rfQ97rwN2LkCP4uRFeCtFe75hUosrx95D81wQf7cqWfV4UHrrbq6rXd4CUkw4Bnw847AqAFNvWzqd2H",
  "key18": "64SN68Pza7yoZwWCaGkY5LPArs8yJpX6KD3o8WCsmUrHdeHPhsJQYw1vATmyCXEDasohnEKJ6GGAzuGQfhpFGY1t",
  "key19": "uuBHNjoaEyBgKdTeUpLPtyFewmRA1uga38uEEHHQUDTGosidTbHfTjGHrKW6fi5Es9uPisQFbBq7ShhBmn8iY3K",
  "key20": "3TW2ETpr6HmsNJrwX2dLTShbYA9ow6gjGFLRFP7AjCVu6BApqJmX8JY7k1h81yCQFdFxEkh27k58yBg7Jzymixmr",
  "key21": "2Heci6eLiSQdJ46ie7xvHfaHAL2hZzU47KGrYwhAaJsm1ivVAuBeqUNPA5xiJy118qoGpErY3Hr8CKCu6Bav38ZF",
  "key22": "2kUY2QonPwgjAmAay6Mxj3CFcBYYPW8V6aGMwGJ3GpW38WjqRq25kjzZFVcxMKozJz65ENtfKU7h9Hg1B8W51Bq9",
  "key23": "3NX3QLUBcs3FAwsjS4BnZLxPVnyMVAT4g7zUF6Vre83SqUUrGwQXkwfAZAk1BXXuYBbZhjJBHGKuSzMeWuECf5sL",
  "key24": "3yf6gFDqYFVnHimLiu3VCycN4XFsLQ2D5mZYHdrg28UhW7k7KP4qq9mTX2rFyZXBBDKmj41w4tKficws2NdYMVtg",
  "key25": "4Jyz9zFGs2VZVR3YTLBMCgFW2a9v1BMz9n9CYJpKHbGaVW1XPFVHukuuT8PmZG5nSNrbnkm4T99dJdg66FqfrwzN",
  "key26": "3GYS9xBFsnBKLXYgYHCtJwxyfT8n93GmZ3ht917TFDhknNrdtZb2rZ2mm7veXvoGJpmsYEvEZ757KaiwiVrFUsCz",
  "key27": "4FvDKm9gDsWkseKYFgFYzLh7xmCc92Ga7yVrnht9QC7nyuTh8d7zXzwuxyit3bTUvcYcgnoHqShDjo3PcZR1Ppzj",
  "key28": "2LnD2RXmBrdMJCYRUE19ug5x2QYEp6Rg3pH3XHNHXPXTpURTFLwZwhTTxX3y8z3sop1H67HFK9PSynRGeEEUgpRE",
  "key29": "2R7NAwhahGoZEUuHiUJNCd5J8tSjp3Wftho9EQhkAnJvDdda3YnNcqj9TLg5Sc74feqATquUXSGAYKUSTQ7HttoH",
  "key30": "2Hb8mYTNq3kcqYKThzdgTEwuZSMFQaeMQe72fYvmndpYnNStc98zJtqwKheWazxw3QNLpDJEuN8nLsAobvihxD5X",
  "key31": "3NbVvKWztdQuwB3WRtZbYzMsaw5DST6YVEX3qDTCWD1Zu2WuJwjtewdNW83yCKAPVQZEX9VvJCYTuUS6TwJzxN1D",
  "key32": "2utq5GsUGrKdXPnYwgnPRdipd3RxidRy4EpMVqWuU5c16fm3tX1H75y6QBvUHh4kFg7YcxJFbUsw2UVsYBEn638w",
  "key33": "5Ls5fTnb9pKo1dYzBXmrpNxdc2FVx8ANV9uRyo5uw7w4yUMChhCaMt7D67gxHL5XhG7aMx7ce87ZTAwHBHdoewi9",
  "key34": "3AhKwMsTXDqE5eCgr57jQJUhotfjXdb8u6oPj1VbS3LGT1eSzzUWUGf1dYy1yV82Gw1eb8JFqY9FTxMUX7vkj9m5",
  "key35": "4fhp7s6gvaWDHLUuUF1NQaizRsDhxbvax5mRDGoQC1hBhkJ4A5eMZyrg1X3dtNwApKr88XxrLWSKi8htBhV9rNSe",
  "key36": "453JBCoSAmDCgUnR9DaTK47KV7HNQU9qnr34P2zqMnmuMTWuVYNHgj9QY2xYRGR7M4jNJCPgHhimsxVnRco7W57C",
  "key37": "3ELVdq2n8DVmcSur9ENKYEY7m2SBXJdT8RawByh1gd6ABgtDmSjh2TNauHmr4qnj3w2g6Rj46wFSq5SBDsyBz6UC",
  "key38": "5zXsGsHk95RnfqdYDkKPekM6C8rg1AMmiMEGgeH4uDdfKfK9Zee3DA1rojeunjhLt58wzDcrbBY6X7tVfrqAtNxo",
  "key39": "5dvx8rKYWENqthCbaAVfDdGvGioeBX9JzhnS5kxmm4i9UizeU574zENncCKCxxW6N3S5DmFG6eBC8ANH7GZCAQ6z",
  "key40": "296gQwNscb5MmyYt4nqCKAytD33qDk4U1wAX8DGjDhs2mLBd9FQek3BqdNxRBomUGChx9BaMgbUguVcMWShHK8zC"
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
