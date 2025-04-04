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
    "2xWGcvc13SwkNrYP2guz6GZSNxfTZViL19w5ViuQCJPVFSPy2bV9GjettKpQ98q9AsokRqLFTgLWMsrg4hjKnUUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WK3a3zRLn3cCBWyzWcsCqPV9aJjPcNAmPhhWsp6kxsRSfYMrrEAxK4cLDN8umZzacZo3jLoKbdxX3MB5RGv6huT",
  "key1": "3KbyzJW85NW7MLE8mFKPLJFJi8EGaPkjYN4FZJW5APGo2qD8sTLx9mKUgGcCp9mGym95pAd5TJ4rEAfj1KzcWrb4",
  "key2": "5ztsyh5RDyZKFnYWkHfrcJzx9zUpe5jdXpaBteYBcqG6eF5DUqQd4NqyEYyUJt9CKexDB3oBKh1Ci9BgHWB1dXtX",
  "key3": "3ckewkzzayUaqr4TYK5vao1sdnsbhKYVLRK8Ty8ATD5w2nRcMfbApkTSua4cZNqhpk8w6jNcZfRznhx3MUgKTf5T",
  "key4": "2MfDKtyozmwxCM8VjdFy9zhzub32xRHXWYt1Xqw15wb8txeR4PCYbYi4QFLmajkmHYfcYSHBHaU2HvvpMiS42hDJ",
  "key5": "5NfBQ2XgBu9kZyDUesuyLYEtREntJyicsqs233F9qGyS31DJnhzRphqJW7nkEsisr5pUGiYp7MTeXX4zp3QmjL3i",
  "key6": "Lw7XtqypjiZBVUdzxw9WuQP6KnMmy9KMAeLF5vzDpfpudQcDZygUH11m1J8ZrGhz87EtdtdNYxwgH2TUkCKdC1x",
  "key7": "3djxpR7WyP4xtG82FfyL1GCUv6Q4PWJwtHxxJDRBaoebbhsMCzDGGxHnuycgD5JQb5LvZZQynwGTeWtYWHyJNkVw",
  "key8": "3Ttsg7Yzjc6Tjx8VFdXqeNdBGdazKExv5EdRgvbG67rTfBksShiT3QzLzCCDbDBUU9W78keJ4K5LN7ZmLk1ho3C6",
  "key9": "4eX1Y4ApRJCQDk8trojNNjmUC2Gmk7WeJCUUQLiTzTsNBz1WyNj5Fpntj6Qfd33NXxByyCaLKNTXAhjyeJ6xQXws",
  "key10": "5GHuu6nNh2TLCbyonn6modqjDFEprHuHYfHBCaJ2jCdqiCHQD7ooJnEf2shXJYXz8kDaxd4Ws2CQBaYYyhyzGSb9",
  "key11": "TMysd57fAgX7MuDFeeJbhLkpfq6ztp4MXdtHo5ZPp7YC9KHAnTh7J4cfyY4F27viXHoqhXz4zMPpsbz1Bqwdkye",
  "key12": "2JQ9nRJtDzaAxC2hBKqtp64WUqx198eRDkihbffG3PJ42NuUrqHCUV2GMBccED9qtAzbRHZKP2CQfwRf8sgMgVR6",
  "key13": "5iEtXjDDoqL8xf66ubLxZ6Mf9UCeRYtoT76eHHppEkm7hXSiEH8xfuiT9XFDAS6VE97Qa96Tkfi3Rpydh9p64sfD",
  "key14": "5j6QpTM1syGm9ToMyVqEh1zET6fKX2VZhjUUJ86yMu2Sah2a1G7cxTZjsaNfP2FWYXY9Uod6RmXT9PEWwiugPCxM",
  "key15": "3fNkJXFaFUTptchgznGFxt7rpD3EJAzAUE2TYBkvXtNx1dbb8EJcpHrddmwkC2ADihXX1pKqfBcGLnf2j9UNMzgF",
  "key16": "UK2xYpAkk4m7ea5cipz9KnBRz1oH5kmbyDkmVLtZYNJow7T5HiaqnE9xjiWNFSS5LSfaw7M4CFeSZmgFKSHaPgd",
  "key17": "35pYydGFFtYLqAJhjhojgimz76fie2av5ecgZqt7fMHfSQL4w9u93ATUc83XieRk2kmLrbmzUwNL6SL91L5czimm",
  "key18": "5eC7Xj8HKNHb34gnhNNmCCd9XFwXzEPHY3ovRMF2WjgBXNAW9fpKr9qSaiPW9CLadWrh6fqM5kxyDsDzC8r5tg4t",
  "key19": "5p6bWsPeBMju4VTfMdk6Cr5CbZBtptkACs594trmcEJyrab9rNVVK4YaqHoXJc8zL43Ez6bVDCLncFevof77PYD2",
  "key20": "KceTTykcH2DqRkxkmoCabnkMrEwHj5V7btJi5KZx25yNwkF4jGKyuiM4KhzZ71HQkE9qQx2aR9mHGywnPaP8Rny",
  "key21": "5mXx13sZngNZwtMoq35xvvaXAS2bvK9nDsnoyhzYrpVkXdeHVWBEh7GXuCRdChvjxsdxaFn33cCRuug8v5MUJdYy",
  "key22": "46ztbXVyhWmf883DtzR7qJKrDa52ueRKgxu7anuwqjABP2iBsEbU7qUmKSwYJ4bY8QH5BNuunDtG4jBgfz4bTato",
  "key23": "5yfpZn5qe2HwXUXLS6DLUMEkA8Pygq68obhBwtqk9csL4AUSbcCRnngQ8bb1Fk8GmC6wDVETga1wBJg2N8cNGVho",
  "key24": "YQjySmErYfTru686kTR9DJpmAoVCPReJdYBBWdZHrQZYmj9FsqNVzH5xvvXPQxDyYYMrPpprhxdXeMSRPakwqXK",
  "key25": "3xQb1129pfGPEZfo4jvAqTU3sSjur82vE4jLjGvY8WEPDvFVhjnBSnQ5Dtc6f8Mbpb3eJvyvT7hGktpDoHEkuK7u",
  "key26": "3m8SWpqgxxZxm95Csv1ySN8thvkJg7q7wE41JseYEjftUfi5i7tsxbstBfqGWnG38ukvEendj9aqN4PbN1msvmRn",
  "key27": "5vZaczD3vvKtmw9Sod8ZsRQ7ASYdXmNRAizpreESVqLHoyGs55tb7hc5BF9TiUbR84hDuXpYHxUcK7eCKruowzNY",
  "key28": "29ssvPkqXaqK6KCaPiM85nApwWZWSaznrKC7bNpAAKGGjghRiZ26t3wvKJ9ysWqmNwhfU7MKE785ZxFZZqvgNLem",
  "key29": "521F3iHUeePvnffn2BNgKR1R77oEUqJgJ7j5Zbd7SdFxkyNcYcNDBev1kKBYGSG18HboH8ntwC7AdHsvzpsnD18E",
  "key30": "2caJxdEkpDcTB4jMtjYGk1KsNnGJTPWJE9Ynp2mPbx6oDYBiCYN8T7qmauPsuCeZppKEsWLpCXHEWeRi1HFF84xW",
  "key31": "3UWfwpJiMob2eCmFjrnUTErhcP1BzK6E6bTE5K7Xbn4E1eZkWE79ECX4jh21cSgRJb3vumth6qpGRkCtC7szBbWj",
  "key32": "4ZqjN9scYD4teRyEjHVKipMFBroKvF46cxxtBpwZMWauyvdZE3munBQcFCNytCiMsDo21Rm8Wwacyw6V4mEhGFjU",
  "key33": "4fu41b9eR18NEcFg4KJvfVUtoCmPXArMnqUeuJgQsu5HdgryMSLE8G5c1AjDYuTHEFeJmiNED61mfmQWjLEf8Tqu",
  "key34": "5yF6MUZvGjcJo9vyU7Tdn6DD3EXpCzbjRtcvWCGWTV68nc6xMKxJVtMkygEMGn664F3LpFQeNDFz7R8T9WrrWLqw",
  "key35": "3BLAgixE25iLj2ktp3CrutD6nydLm87GqiKYcY2DfqQphm3x4t4J2JVcukYzJmnNeAgqj1y1K5xVXDPopzYecRKo",
  "key36": "3g7RjP6m1oELunugtnczSd6Rc25xJHytuC1SnsHMFr5snnXXpsoxM3aHs3rrDV1J1UpMhWhLCTdAQ1bSX35wybQw",
  "key37": "4Mz4ntCeTukF5qGQf3PVZc8pasQ2bhpqcV8fLEasnE6o22JHKfqurPJpLEWxBvASNquG75LfXzZAyPNFynG53K3K",
  "key38": "2Hjxkhhkt4UTiGWKEDWmoiXHV4NzQ4GgFmGcyZEyBwNpQmNdhaXAoD8f22SZ687a5YQ1M4Hr1mgJDSo6VKuvYMAB",
  "key39": "2vWd4Dk9ouEKL5k2dyd8AfAnGXnrcdKBK8zfYtsGPFZ13By5Giw4hSk3taKEL7o9vxqpNstsFbj6aapinJUgDVZ8"
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
