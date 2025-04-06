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
    "5DL9uiWjGuy6iib7K95bDbppGSvCSTsyWqpDeW6VuSajcFLGsEBga79My8bRw2Xo2Bz2SRPEtNupEBf5firmY2bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tvrGFwPX3k9AGhuNYvKTcm5ShNJu2pJdvXPJnkFbj4vMatrLP6YVyhnnMK2WHbNfDTmLQKiv68UYxJ4kJ1EojCY",
  "key1": "EWQKzqCKkGDksZ4uejQmVfUAuCk1whdtBiya6kEcuMFb4FAYJ5ZfqepFFD2Hj3hH4jLSP9Y6Jb9GQBN3c4tce5y",
  "key2": "vWcxRnUDTVDR3jvHVYhQP6PFGHB7xmGZU8DNxHd2HqrZDLrzCZERFCDzhdUwzwGzS4bR2RfEvx5M271PnA5zpHj",
  "key3": "5NQeAreVTVGZvi8SYPvC2Ke7tc9DVFddzfyndGUTUqjrMeGCg1c3PfhyRG4ZSgBViJZbY7JBJtRGDn5EHNc2uvjf",
  "key4": "ihsUKXDiYbEEfKNEPVSbiXKpenSwLDt5zdNjSPiSieaLAVVXzvbkfmEt4KodV4b5XbjL9egXfns1Jj9D4AiJRK5",
  "key5": "41dsprC7DpkQFYbGMPmm2obfQJDc3kLnyum3BWWY2MuX4F3bh57fRzrjSu45JCumN6B4i3KsXgEPcjiVbSNc7cyH",
  "key6": "4kYhwytkVMSvcSGamEGmEJbbPb3fX4Ye28PyZJc39MgfxL2CXdgt4VdLVDtTzFmBaCpAuvn61Vz4wrJo2C3rrBNy",
  "key7": "5ZtC21Dgxm14MHRfUfogtWWPL1CReX8V6YSijCBv2fFZdcn8wXa3E5itUuUTM5psmUd6DsummBsH4EsteYCfkV4K",
  "key8": "4FUPfuJnBCS68WPo3A59Fd8m43uazAWp9BSrMpDVdAjuu6iQWTGik8FhSzbsgu4xZBv4DeJqshnkzYFFW6mC2bGv",
  "key9": "4GaeMh3w5V6u9hvDgcdS825oQZTMQLchwZZTfhWdCifubhvMBZQUzcC6MLNyiqYMwWnPGXJfknPkhaqfpLdAJno8",
  "key10": "3zs8KTwECg39wwjy4M1pRtusuNNPZro2QDjE76QgQWKitiYL6ZLXwo8REUhjWoWBqtHWEvNyQWS4MvLBUcLE6UHp",
  "key11": "4euUuLFcmR4wxmEAmJdJWmFXWMhMaHk1MG19tV3Ek4L4VEpeuYbfvk74rDDKTk53TPZWBsrhZyeYHjtJv9JTQnma",
  "key12": "2gB7A8SDgGnyrvZCY95huVPGNLzQsaV66zY3vNA6YPGj2cSrk4ES9nSwuz8TUY7XE22mzTK5Dtbx1EiGt7SANtS6",
  "key13": "WCsAJTzR1RYvqEc1o3iBTYMaxcd1V3kQ8sNNNUgnQwGqVX36kVm6e9joAAwgMRpF6ZEML5rsyqqYmDqXYNXgYw4",
  "key14": "2KTq23eQ1DhVGfhf4CPmJcEuoLQPraTPuns6stbiu4TBoHqGPGmWJEtjk9ZJKta7wFzyexY6yKY2eQE2h1tkXr5W",
  "key15": "2gLUXWMnKsge1YmpWBVzXrGJrjSXexXeknPGEZmbFHncY97WBPXyWgFmwQNzJQWSR2q6m7J5fRN7bvDV14F2b3No",
  "key16": "3n7NR3W4MocofbpSvdqNrPrJfPXcsQR6wyqfFEYEvgX5v3HyZcCHk56H7s5XYpZb3x1ggBsVY2Tqz3HeZmxwcTLb",
  "key17": "2xzGAdjQeEitsnVRdD4qjE7MXGLpZTJacEKNfBKwWSAdRrdDH3zZgQ5RJNZBnZ43aqU6n5mo925uWXkFKb5YW5BP",
  "key18": "372fg81yxAfRhbpH3ptARtwUq83W2nm6gGDd3M6N9mHkrEdi8UaYLGr2FqDUnjkMGDd97L56RZrCh68Akf2HczXz",
  "key19": "5bKqHf7jVZ58QF2AdB9pxQcs2BafJEnNr429HWQ1oUKbBBHECAE5Yd4NyTEFm5e59BkAJ1SBk35BMBR7kX9uCBN5",
  "key20": "66bKQvUfsEJiRSktRLNxBf3FH3BowPhHYCcWjnmLwb22aMX1jtJ13qQtYKLLbCV4jxf5HZaM4L9UqefCZ8pT6w5M",
  "key21": "4HKcyHcK4jE9x2XeqhZe6kCAe2BqjLM5rZkdKujCzbGp6kcPRBiiVt3Mijby9KnPZ3CXk5795jrv19mfaycMFX32",
  "key22": "39KTRKdHM6pBR8iaN7o2yaqjmtGT4Cj7SCyGfiVaAqXX7qXFRPRyLcJu6V1YTTGBzeD3Zv8MTVETpo7Wb2FmnvTR",
  "key23": "3EwaCE2FYyqe3ZWnkZZkiw41t6CmiEV23RMKAFFdmEkbf1pKGUJpXPH2QutwzEBv6KzNJpfmKrB25AKvzd1dJ1Pj",
  "key24": "3soCB7A1SB52f9qMxuQtqRarg8BpnhLK5hoNoNgXGM732zAS8wKiDygZF2XDnv45Y5LoDZc4RjFP13YGNJidk53H",
  "key25": "YGgpFDusMT6P3uCGH81fkvSpfmidXJDyDx6Z7MTyZ7tyGtiS9J5i3tcY6KMCkHHUJyhWkJUphQMJ5PrxzsjYqjL",
  "key26": "529Ffa6DfPojgRpfX2TqjCAooSAonuSs5Md4JLsQFFcVik4EV5rTfrqnsMuVZfS5YBnsLQaGzko3aTUYHFPHgHAD",
  "key27": "2TYe9V3dAXuTtXGMxKjnziGp884cnYNHejChT8PX2tLa78RxTCpiQuY2bECFbB6YmtjN6noaLxepjMrCZQzi6AV3",
  "key28": "jjRdyd2rdsb8coe4SRuxdyLoYJWGoDVmDe63pwnWx8X8ssaZ9DPcGV625nnrzE7jzhi8sipRQZGnFt3RVKUqfUA",
  "key29": "BFQHsx2kqYZPV9ghH57xwV3dr8vGqJcKwWLSaY1NqcEcWf8kopY2Fd8TJYmUcUuvHS1SK38G6fqUJSMmasJ6har",
  "key30": "5gMXo5aPN6JEKqrRiHyTwR1gKmF65qoXfcTjpRhmG8teWbV8MYEVwVWEGaBRjR1Ffp4QvnWkurNr34xhS6tu3gRC",
  "key31": "5Bsx7dU8gQVGPtpTst5HWp2L2qaY8mprzrxpuxEwGF3jpa6xjWDzUhefXZeS4dXx14ikuaMHRBEknkEJRXCGZB6v",
  "key32": "2uBNKR4tkA3b3ko5JUteCFjAjnQvdYwQv5Zh1jmdn2nkDrihW6toAgJCH2MyYPXqWmuLDJjaoL3EgmyPA9RDCmr4",
  "key33": "Gqss5R54wVxJxk6h5wzJMf92gm8k5YjnM5tzkYjaafvjgQxBXBonk4qwdNfaPjjbi9g8YjLfPWMZDxBQQHtTs2P",
  "key34": "3ZV2e6FcJaXm6r5VxhvZKvb8Myt4WrDVmixZ37dtvPvopwWKyupYnrNeN9htgeQpXVewyVyr8TbeLZF5u6y29FF9",
  "key35": "3nxNNTLHRqpBiumpsQgunsFwTLGNhYGHJatoYiaaH4zqd7gdFgVm27o3Y5n14wRj4xUeR2Gqm7DRKWeBFqdaJW5e",
  "key36": "sFkWaq2Qc37VDarDayPqf2596C9eDz8XZa4Ni1zBwaGNLjiQZWNTycdZCRWdksVmXs7f1bxDaswoD5iiZYq1Dp6",
  "key37": "h6RrDkarD47GjQewEP2uo3ok5rEcoYsmffpzJWGYwBmaskEHXh96gQ6QVva9a81fXUQGu9xtc9G7cFPEpBYt7NU",
  "key38": "4XLnNH6LeFArwXfiqkztENt8ZHqwLZixnYKgqzcuiWvFUeT6A5dHkRMiJfkdHJH6iK8jWTvMQYchvFbweDzyGop9",
  "key39": "26Q6utqSdoMnX6sbZdkvpTDmpyWeS98zoFZhzHys81BuVmfrbFxfYTstWhu5vSAmjQhGsJf4jVYroTFBsqepwbM4"
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
