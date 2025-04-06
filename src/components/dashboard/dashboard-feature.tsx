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
    "2Abt2wMwhjPm6bWbQ5ifHKQWZyYAXjAYUSupxu1XdcJNUzWnacHoSzqmkyP9ciYNJiRi4wLrgfCnjQTz9eL6nzD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Apm9UcN9yRfcPBdvkgSoQtWtnXHc9eyEj9hXGBpDKg14KWQVWAX5oB413cRogwuLowCbf9Ao9d2R52YE1zwMWm4",
  "key1": "5UMx4g6i96MA8U2uqjF8236jMc8cmTNQGH9BrfSaGviLWmBCqVJQbx6oxQ7KfNUMmo1HsGD77QW1CsiBTiUeb1A9",
  "key2": "2mvar5YT3pLcpeeJhhjEgCb4gvo16VeAE6jhf9gz5ADH9S2HQ1c6U2LTyXoPt8pRQkNBUU43ys174JY9njFMVuge",
  "key3": "4wZ2R9f4wbRHVsJwZVKmzrfiNGGR4iHKQqHsayqLDWM6Rxw6czw1BdWo16NAHYJDNrpi2VKaPKpdz9rQWRuYEvqB",
  "key4": "5AKiyQNxTpEfj66ZBzrLB1w2eMPN7gKzci5qJ6CUMXVp5NaH4G4QendT7A2oAMBcH1zPfLeCkQbBvSyrhBNZJc9v",
  "key5": "3nECPDV7EPCtdgi3othni9pnjkctjw8qn7gE1PPMNPYrauG4zXPbBbsLaEZ1ngURxjzgdYTpapzkTAPVG1cu3mKT",
  "key6": "4hWzRspHSMj7uyWTw92scf88VfG53RqjXoNGVwRqsLuUTkUc1tNse9AHx7CYMqqsrFb4G4Mv9ek36u78Vg9Pi7XP",
  "key7": "27YKFVPihP8CkTYhMzMKfFTApvVQCrx2cVJs6Pv636x3NYHF4yHsE7x1tawJFzN85jSLfBtPjqi6jsk5ptGprDan",
  "key8": "wi4Aqayq77332yqySRrYCVoZ7aaFzZMxeisNCX2hJ9MXFPAhx1PH22uU46xM9s2PRSQSUE6NAmHmMrM9HwqqfhW",
  "key9": "Y28h13ma9vG514VR9EACp9fYee5Y9QPB9AmP9HHo4C6Ri1jAaeDbQmXmXSR6SQJdAS34o2o5EDUfp1ppMUv3KzQ",
  "key10": "34sSm7K1gRsTwTt1cpsFcCveByqEw2HF6tGmtkeRrXMHEbKDM7at4bbfPqLDEtm2ekHNZjPzEZVMbMPSh6s1RkUq",
  "key11": "wrynYiFEK9Vz34q98FLsG5wQKZ4Z43hGvL7nMo8H4QwrNgt6eEqqFMej3iUCYhDZLr76MtTpRJYALiRSctauqag",
  "key12": "2Gu8b21PWEWcUobcbBrEFgEdqP9iG3S4WTHj6ydSjMtXDtiKTnt1AKib9nWweF4aVdAxPNciWc77FenYD1jVdbnQ",
  "key13": "2BpUsEaGwzoznYgY27hej1o736svGRF7YJZeiF7g9po6ngidtRxdXKaL3d51jX9Hso5ZfkDFLJWfbtntNgfbx8kn",
  "key14": "29U2NqSiMamin3gYk5mQV2B2AVkm9JfZ75iEoaabL9MdFeayRo3CdRtxn15NhL16PKFLr45dyJKsPhBaYCxKoLkH",
  "key15": "x89BJqHXs38MLGqkaotS3ihjPNLnk9y7yczgy6h5xwucwgGkmKbnpWXEd4U34zKTHNyiTPU4zSEv1fWEZbZWHC8",
  "key16": "4hjyixYQ4AET1Bsyer6RFCCBZWjwsnyFGjyrA7BmwurC6ECftJX2KN15u1y5bf2UgWsmDVUkZknviAF3cw88WnNV",
  "key17": "zkZ9scXmRhK4EPc4NqAwqiykN5mZDZVinLNkkTvxuDsr6qndGi9gBUtEs65k8moQcNTDk3u567bvLyLZtno6RUz",
  "key18": "WWUNKqwTNx9bveg4ToJgPbRPNuUAvdgweicp568sYWGZe5N3m4RqzTqdjHCtvUEXq4ba9banKur6Eg6C268Ntyd",
  "key19": "3qttxwjDPSujUSkJQxjrvsonWgBSjYUvyTBDaKDUG5Zrz22UEQ7GjhqJWit3w6zTTKecSvfZU2GwWzbddmg8wBqg",
  "key20": "3v2m1dqNH22js89H4p6GrHL6MDUtVQNdE9RJVaqeZoauxzWLz46yk5W5p3hsbvuJfucWtunwTpc6TXDm1eVZboTp",
  "key21": "2k9q37vFAy8iyCw8pGqmHK9WnKjR86QFweb4RmCx7FERgv467vEfF6bYV2rcz8Hg1tkd8BSTj1bB4ShgeTwggWUs",
  "key22": "2tL9dVdpZLahmMtPosKcLi2qt85SH438547w8KThngcDCCh4X64h2kvsG9brtgm1rK7TiF9UP9b2dhnGRL6fYGqk",
  "key23": "4vjguDjHVAffxfbnBfJqwLETNjqknnJC2FiboEvXhYFSrzqZ1ZQx3NSjAfNfuPDaGrG23jRbkbRwACtqKkdKX4ar",
  "key24": "4ayzSmhtsijGt7P6f2W6B2Kb5Jrn2wEBLmnh1eahFco4qtLQ26SgyXKic5wYHsayDRuoHCvB5HMHU2u8TG5Jmq1Y",
  "key25": "3hUrfUjqRwDRnRdHyJ6KRnxhNady9C2zM8fhbdY1Qm9krYLz9BnmQyKju5CWf5aY53VTs4XgfWuY17eoZBxuJyyh",
  "key26": "3wM1Tt17Sj94sEWA5WrCHxpeckYQFiWw8WdBSeZhLuMmbKYmtXASbBkaJnWSBfUJmAq4PzNydSGLZY4pZg25DYPK",
  "key27": "3shnqAofdDvt446G9AexDhELAsQqjJFdY3TySc6eAcFfWoyMVVTjD6ppGAKgiJShDx2zZeK4vcGf4qqT5cF4bEHt",
  "key28": "373NTis36oe1wo9p9ww8FnDoVXu7e4KWketUVPJS7rTcaVSbd9AEjdwXAttu4dUxpsS17nKyUYuDmuSxznPhU564",
  "key29": "4yv95vYtgH5owJFiaynVFnYviE1y4W4i2G16q6RFQtpy9eAh67HRTn6RLXRbCuAGREZM1iW2M32vwkc3P5h1dqy4",
  "key30": "5ELpgpdiU2S7xBWpJnES9pkCjQrZXXnmyCNZNL661CmKAGUxzqAA8hvLiB5qr1cG3LxLRUWg6E6WQ3BYK5ZWnjoD",
  "key31": "41DgwCkqhnvQUqg789iucErmPxu5ndDphHXbK8dCLHTWiaGRNhzzqF4JaduJqhuyirpRxiN9dxT5pcLPSCYQBHN",
  "key32": "56ocBVV2rKYKTPEKfBtCAFJSdEGrEBR6RpEp3UD69TSWfGWMJUEzRGxftFcvSjgLUcSCKhq6x58MqhvSV11Yme9S",
  "key33": "4NTTyQss7RGtDiU8wQLdcfgju7z2zHX2UNs2JFPjjsn5a9Ja484NrJrGjNzGe3MxS8VVhgExHRHVd57jCRAW3vi4",
  "key34": "46ycnVve4dZqunYCBS8p3dKAjanK8YNUv9FH1xYMS2jULjeToaNATfxJyZfN7WbPjmijjhNeY5Qq7eHgprP6Hcce",
  "key35": "3B6ntRtrmWiR2sehoeaaVGXRzQwZBUqtSFXTfYC9K8C2Gma2KiQ7sAoU3ahUkYjSvdL6FdMf7H6xAC717cWyHhFC",
  "key36": "8PjkEx4VNYK8EyzqKB2MZh1wDLZEdJXXHvRg1XtFuxCv9A5xvqBRrpm9WpAVUcpFK8nXu5kGVKTZrKjiGTG2JWG",
  "key37": "3M3YU489nCnqFLY2goRWLD2JuLxPnniVndwX57pS3kyWSeKhtj1ku1SJhMobCdkwFiqadFqgmXhC8JxJC1oVJBDZ",
  "key38": "37Hh5aivCv51g7zQFCy9QHUk2xy968qGUD9oPsQSoTbN7zwat15K7eh3vWX3ephxPL2EwQoSpDZPpPPbHLQqe7Mw",
  "key39": "c7JhCMyzK7nqkLwHviysaepURrVDEKro5ZASE1nTkd62aboUrhSD7hjQx8eg2gfxxuZR17sLHY2abap1av1FnZ5",
  "key40": "2cybMkKa4iDVeTYchBmGfhjyhyoXHE3mVgzqQmYiG6bCoD2JcAGRw3vNxuR2LfnKmjXJT9ksSErjVhBLV8ibUZL6",
  "key41": "4DgBqMHw1y3zXmaqqyVsWknxeMvFkywDs6FMgPGT1VDhJvtN1AmgKoi9GBrvGNFmTs4Q47pUyveQ7vCy6mZCNfVC",
  "key42": "47NRCBvBW6ieSVbouwjo4oPs8M3pGEPmrwTqzTGZ1Hvhba4SamFVVp29WUtThiKMGxm8nyugbwgLUTEpdoQFSe9P",
  "key43": "4ozUMNpELPWfV584JU7xSvr3QxrGYsmgMEUXkxgVXAx6e3z3MUHuYKQJjSt9LS73WxmQEzLYDPkEq3PKRAZxcwhw",
  "key44": "5G2oYk1LbT5MVoTHNMpsENsNqfm3vwvt23wxcDBNNWoTAZiWhe9rz8gLVRfihxix7rV228GDXQsSJMrm7bKNudDt",
  "key45": "4EAAvLVoJG1VeSf3XvRcFoMEiCfqr4s38VuZppB6vy3NwYBenzh175Grwf9BFEB5khyR33ioTqwJs52fnNi7ojXL",
  "key46": "4bAg6GgG3rVRd6xzf82NpRyTrPjHrTNNWSmrDn1E6B3LrmtkhEZedZ1YkEPACZsQXjxyWGWQbaFK1FJnP2RiN46A",
  "key47": "3fLDtEemrGAPAc31m7xEgdmawweZH3AWCr5cS6xz77ryGTVuUUPXyVXKTgF3EfN5g3asnZ8NVkKkRsRS74BLb12M",
  "key48": "5e5j1DQcpTF7YnEkwMWEixkuBCwXYkdnJSoXdtdLA4abQMuuDnF4ccvJCzYpkDs87e9LuEzjBAGDomKD4aamrx3K",
  "key49": "5ca3BV1yQSjQfPPGUgJvKFot4stVCjaycpvPYCTcmKjMV4WGp7XNj7HdpChKNN6NZt2XdErZTHUfWuVeFogBZPVH"
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
