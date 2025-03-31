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
    "5C7fy9958egsES13qdMNUnyRHPkdBKw4y3YZgnjYQBzawzXKytpL33FsDTJg7PArq9ufHtGoD6XX3ntzDqRUKce7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HJQU8yAuoKvQAf9LgtULUzevk6vcVAnzC8AcGidM3w172ctDSsdKgQ5LJHhVDvhnjHsdhDg9mKEaFQyF4w6rwVL",
  "key1": "2PdoaXMuArkzuSu8Qtk8Zn7XuoGfRJqumQcMPfRyKpu4m524Jw4Rp8BRypZ33WXmqdSSbu5X8jcyDwkaXVvrmfpV",
  "key2": "AHVwvF2GGGqQaTpimn64zo6Ss2HCAj6WQbKb8SZbYGFrQpRJzJ2QU35ymVdeKZEPFL9vDE3bZ8xdzGKy43ctBci",
  "key3": "4yFrLfBw9iGE3RouDn7Ns9gbdW9UX8bDaGRUnM8x7qVNBcnn4f6x3ieRctmo6sJvs3HBHWLPFacBM5UD56X2wBiW",
  "key4": "2DkbutkPpBGZwEBtXLgTRMrYzZrErfPUz8rzZuEXuHMdVxcXtTNnWaG8ocT3ksXoFni4f18VZLuPQiDCgJorWzAy",
  "key5": "4ZF6sPVmyeFGjk3x2CMKkjNAVphxT41fhwo3u4brBXZJqfuwc4GjuKFN6ZonNgteG3CTdfjxQ5Veg4CuovCgi2mT",
  "key6": "2niyHJssANWGLnm4TUGKdacxDbSEjV4EiFndasfJNqFEwtV2u4LKFkRYRK9bmb3WASSSWHPx722nTqTzjDQBXkAe",
  "key7": "5cR9FkshyhYy9yVJC2FizBuxzt28bSETY4Kcx4QFREmUE7vnz51hgegxP2ZP3Ctc4XkV1qMzsEHDgeqkHsBwDqWt",
  "key8": "4HKu1n86i4NtyAsr5jGS4icV17L3nZhHsbRkeHzUNQyfNKKnTbHxuM84qGZXu4ibGZxWPTMdR7NkyZveCU5YEbAs",
  "key9": "US9Jz5SYfjSu8oGqRRHdn3Dzk6CCeX55jceaDRkKYXjqRJ5NBbAHdMB9AZ7vgpstLqVjBmzHi7LYbpHcspQu1N2",
  "key10": "5RyZvtbSDRY5ZtJmYWMHr4kRpkLpvqn2hx1M9gW68g6rTb9ZoHBoxns9W1LXD76nNcddBu7KFLdFRiLxafXmtQ2D",
  "key11": "5voSoYcvhVGzECws3LHVSHiUoWLFPoaV2qt2dcBbms2v9tByTuyUp6Pt2RpS5wynGxgRB2hnFTBFLBnum9eS4QPr",
  "key12": "2mXbhSLPzgY4mE1ZYUptKFvV28pvrzx3RmPpZFVUKnpQjuj5FmCXJVLNa9cqP9vKeXXaLu7t5m9DsoMhTVhb6TXr",
  "key13": "3cBHHMNQCHN87s6na3zbscDWHKB38tan9nfQZLuJSjZPbkq1vNtakJR5U3zsjLumW5wvznRT9uhWHMXhiKy2hrSp",
  "key14": "Z5Eva1CQ3a1ARyGPur2ZtPtYnV7JeLNcaGWW8tx2PJyWzP8ksRmuVWQEJoSaNKHSb3tnakYWFyG3S4D55RPKBQz",
  "key15": "2t33xdicmkMgGzjxuzDpWm4vcAHEGS5bsoM7cPc8F9mzr8KdxLihP2mYwyVNnoZg4DiXVY4PSBCwV8vFeNLtnjs6",
  "key16": "4fv2Kte5jcnstJakUvhkvzRUPz6En1K8RkzuSt5SV1aYXJmweGs83FrbTkKuVKwgfCEZ6gRH9prTgqQXuUY1zH7w",
  "key17": "49HXWVNwBVWHj27Gzs4t4r3RJEjpELwSwQHnUjxj82VnLVVE4XrHgTtVbFbe1twT9XK79m67q44m2DMwJfN8EWJi",
  "key18": "4FZwzW69qdmwCxCoy2oycJ23bxy4c5XhnFsFjutGCic17gB6MKNS1Lrdd9LeUuwdevbrLubHkXGWGzRtQEtdQ1tZ",
  "key19": "6DgNLZdunSQ41XhEH3KWP1dHqZjztAN1Ee8vprMUixwnxsTY8jhgBA2s2wjTt5NNKAcd2LEDcTe8JnibsuR3mHi",
  "key20": "2tdhXuBxvb88SHaMN1gX2iufKN4ZXrNzJm5vgFjnKharg8XRaFz2SFZuHXgyMMYWPm4iJ9wpAG2jgm1Payt8jCQQ",
  "key21": "2oDAmmjPZTPeySzs3d3zvxTvoMeZuSw8ZJkoP3QeJGUgD3TP5BrRDEyxEdzcSr1xBuz9vC22woY989b7r3HymNM",
  "key22": "NsZchcxfr3mBDikFgBaLHi4sX9UztNDMV2PkdFgPf2tWmAQoVVrYfbMiEdHfjRmC7rQT5iTJgL72TTuzzNw4Hjd",
  "key23": "2o5ApH2jn38WZa96HaiWf542TeDcXVMmLeY7xGkZnu3ENpeSN5WQuVFWx6Bgdsfj8Z971age89zUyoDkdZZzEqL8",
  "key24": "2jfyTv2XHid4mp2ZHtusMYdkczGjzSBTgNc7Msre3CsfWdT9fZ7LP4trUwf3fTZCKUzLGnk9gtVMVycEVzu6DBUE",
  "key25": "2emzpPQX4cvK63UcBBgT3qwogECwqK3wSfAkTini2xvU11JNf1tt5KKtf2hHFVarLuBVAUVECaJNZvvRUeH59vKv",
  "key26": "TmuH26VAnFCKE12ucK5R5kW4DF9pFDhkpWi33gdED4Mr5gCZkd5dakZ4b8Fndo9uu16XCU9YpfvkGKitec98rs6",
  "key27": "664MzpTdjUPAojGsM5dVorJ1CvGsKs8tTr7imuqnrMtMj4G4P6pUP4PARgtgiCZRUePWQ8gJ89vYD4oA46zG4Ntb",
  "key28": "5FteTUEvcXyjX1DCfVd7rWKAvQ8B5NkD5zJGuqWsXTGgUoa4fxyw8DpXdfgXcukkUNxm2yCtDBsxexa2k5PT3hq6",
  "key29": "3TZPTSZpiFUwTgU483RPzyFsKGhgcNhYt5SHFoKFdACAwUsXMbeSwDJJmMCovhZKe9dvHq6JmRk1cvJPCC1r5AJx",
  "key30": "5joxwLRfHUoQxqsSsdtNgfuoVBJuKe6z5C99aeY1ebFzMVjKffAKJmzq1tDDZUYbNbf7MRxf1Phr7jqYvcNR9yoo",
  "key31": "8GMtVyKpiGYwsoAhJxu9CpYr5VdDDAjDPWN96KjJjXqrd1xgWipxpGVotEh6a29JP3LsPTKwF2P21kdCUEbkaDD",
  "key32": "4YE8GkafiXBPJkwrtXFemaQP1FyP5DydujDfrGdEn1B3AFtqs8pGCY5E6CE9WXGjCoBeiZgmnaj8MPJRB2F1VV39",
  "key33": "5XBUR2G3sfBE9huQdLUB1ncxF3BvKdQT2RAW2TJreaBixvEFs6HAxLUgiyT8CKYiurBBjqL1EuTeudq9KWLqSF7x",
  "key34": "3ehK4KAHEtKsrDSJJtHhEtwcQ5LqC7hxiMPSBEyirXoX62zFLcS8BtrJ28S93PJvB59hm13pgw2LypxDCAQeuCFe",
  "key35": "3GdCqAfJ4HxXEoNnfCxgyvGpPDxZyD11vhPVQNZDfc3eqLKK93owgGvxYrR2z28s3EiihwUeYfUZzN9tx3A3kFQB",
  "key36": "5MN3DNqDu9dJ7Msca5s2CLVLVDb1EgMZS4o1fQTyeSvnLrfzNwrFEqisZDp9cpuGMs4sjwotiGrZ5wsWYMcpdxAZ",
  "key37": "4oGAzgocN1zmQkSt3GN9eY3H3ztNKEudpk32KgYEj65Ckft4sXEWeVByQo6hXSbnyLkH7RTB7r14pnYDpaJbBTsN",
  "key38": "2mx3tbA3viF3WPF5kRCvnrJJVQHbiUC4ETSTxRtRVxF7JWGKiP2FvmNBi1LBuS9DFbFcrpWqDkpBSuMWeEjG6EYs"
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
