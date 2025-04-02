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
    "3463LEdPhVtZ15zH5kMQ5GKMRRuaMxhec7h78g8UEAwu8QXi2tMKKvYm9iwMZbdZoR64TqtpNovEDiS5q2j1sXsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yRBJ4pNtQnQo1S8v24icaFMmghXLLiTnzhYMc9vKGyNNYxuaHmxDT7p5BimbzKbX2W65wbMgc3JNgocbHwiSnA",
  "key1": "5UKL9xkwbvXok1kwCXjtYVkNaNkBqYD9FQKnZUQGy33DqP4yvfmf7VsBv51Vw6vzUqVU3CbqstvSWrMVKf5dzo44",
  "key2": "4pAJjBbdQj1kqDVL8nRsxkCSZzRbxxm63UanXkTtNGEui8perzwq3iycJiRVhq7CBphgA9poM89HqLfbMe3nef7o",
  "key3": "ZdZy1R4yrCSTkDu573F7JoQufeJjGppSWeGSrFsUtyqQiTe9nSTrx7HGGW4w89UxEEvoWQuCebeocwTA7yJ7qyx",
  "key4": "4xVxpgGLBFR3JQXCMs6acaqNapaN4TLxUsXtJ2j1ZNGgEjHJnPSibdgohHRmSYjL1caguZC6iKvyVrSzv92g67bN",
  "key5": "37LhgTRVhdRDspWyGXFoaGJeDu2AqvGWXpRM5xeWijS4kRn4Bxx6SMikyziChBf6T9CZAy8trFqdo2XwL45GUxAj",
  "key6": "2jYKymki2VwtQiS29cJKvAPP4G2B28gtkSaaQqV5JfjbiojbVXL73PNvQiR9kq5a3mAAwc3GLwUSCFDsKMvnr7QB",
  "key7": "qzQXv6Mh6KxVCoux4oszV3cUfC4spSNt6q5bfRebXiw8ZTDstXymCYVBTr8YZBYvUH3mfCKTx2xVxRweX6PCCER",
  "key8": "5LWHqtwkfZMbtYFadVFG3BrEwSB7PafNMw86VYJLMgSM3ohYwAeCzzB68HAm5kJAgNpueozCcjpj3YojfryX2A3r",
  "key9": "61cHNswZ9EJNizGs7UKWV6Tu2z4V3tEfcTasyQAohMVc6WBSatoA151m3mv1ZL3ws1rgicC2HdzxSGfpaVPFhkEd",
  "key10": "3yQpGjdCQKr4QHLzbYZx7TfPgMBwpS9obwZwceHKPnwLjbu113GSXgiJYm92KbwztnEVteHaPLaL3Go5X6NB7Q6k",
  "key11": "5aSrQKHCsR4pV12vpBvSWWiJW4YCTbowdv82bjh8cQYszJtjf5xgxmAHMuw6CnAgYpHsJiGjerivPGQvDxhbUfaY",
  "key12": "2Rrq7447EJGUccQQGYYCCVnBiySxnGj5mdYxqSyLmqErutVfFo9XxUVjDrwdPFaeyFvMcmtYZ2PqPcSeZRSzQU6E",
  "key13": "4DV79fx1aoGvH1kTe1X5dvV8SXdtKjrFT143XHSyxrHZcHwoMJJGPD85xA7DQckJr693H3WYuTWYyjPhMH9jaiQo",
  "key14": "3N7vDnFLD1Bo8Ln5mjaZuvs2eF6ZPyMo6X6K5Ui2SUvVzSWq93AYyckvN7mT9jBxj64mkpHFNYDRMiycWEqPEiG6",
  "key15": "oRFBDGkEHCKJj1iPouPZMEQ3LbZtVkgYkJwhG2pA7RooaC4bNxdwQaYBZzGNATq3PVAJdGt2VJjtctubAbidtek",
  "key16": "fPP9C2ViStutDAjgyvWH65EYNAqBhNp8iKrHf4umEr8Z3E35Cx792bEgkHUXXPpNvEmahESqwEXDBELaMZkc38H",
  "key17": "uMv9jNor3tHpRGpL5PRJQmhzZXm6JGRAcH52rEDUmDKP4MpKu3QWN78jqoFzDEdkT2oxBBztg5fpk6zBce4eQhJ",
  "key18": "4Fm3QDGs9cuPv3jN8KxpTf35ocQj6CpBq7X6Rue4MFmshs77peVcNkv96hjUH68S6kkCMg7hxQcNyNZazY8wDkqG",
  "key19": "58erbG47auDoy1zSYwmpjrcLgYHr5fmBvWVJ7EgUU2meQwskpcAzXFvbVU9XRzpAED1REGajAjwESeRUGdENzMZK",
  "key20": "3WWBgKP4RpVdB58CpXAD5wq9f6bC1HgmnQMWQbFhdWTwWY8d3E6NCbUaMN1Jg55bXuHKkJdMaL3sWyYF4UqnVsLV",
  "key21": "5gVMohHJVt4acCPB5ctCBPMpjbtgyY82DD3dBkEB4yPBfp7EfX2eyb6KGhr1AgathCRNZoVix6rYm5GAwMKU4fTg",
  "key22": "3DtRyeceaWhVy5XKKnQtT5Zji8yuLmZwF3UUytYnucmEmvifVG5Uv6nBFuEFZQ56gpha4TqQbpSrUBfaz8g2qLDs",
  "key23": "3qNAnUKS2xfCcWpJK4brLNXSfynhMcnq3UjrhvQnosfWDwnKpfws16kJ58hmAa7JUf97tisxJDuAo6Hyd4TQmQvW",
  "key24": "2W1RD4jHyMGBXtKjgW2ixM9kWdcS4YnG5qTL6L5YkTnPWpGNNragkidcr95YKERawREbHY7BEYk2wHoYWi5NeT1X",
  "key25": "heZMgjPvAnf97xW17v4do74AnZhuvocKGagU5SwBoabiLXceLep3SVUCaU9QWio7neux3YD3yRBsWx6JMm1Pkao",
  "key26": "9crx4KbaT7auSY5c9SPq48FCPiPQte2vdgvQR4G6t1nGNeZANwqAxBmn1fCCRCwy8uKJEtT5CCWS1HiEMSn8Knk",
  "key27": "4CWKqwACb1ZPKaQP3vgFRfVyHRQ1xzfYt8zo6EoCss5JLFcYnTurSiW2jv6gNEwydt5PH5m92tZ2euam4KZrsWtD",
  "key28": "N5npdFmd64c1XhuP7FkJvK6TFFuAEDgLmMQBovYHoWs6SLt2wHe9Maj8F6ad5r47iRSWKL4WZGeKe9j334w1kWb",
  "key29": "2tGfDC6AhUezT7FrpmqkocEXMFZK2dZbPPg1Yxjy8hLfL6uWtTmRvGReuYSp7Gz9NCHrA6Rp9iXLZtWoaff1CNTW",
  "key30": "3CFniNfMkCCCvSHBr7vTygGXuCfSymzo3UcwKXzvdut53uutTWiAvfyv2zHyJ92SP7Y8aTeMZm3LKFTQH6oTxxLY",
  "key31": "3iTnFv1NoRdsGtGzmYKyzPMHsvWwwQChMXKJzywKSty2KrVwCtikdNkJ8GDjQzsoTUrd5dC1KGq973WMHNXxHrKX",
  "key32": "61pkCSj8rmtFHk5AwYMczrBdQjSVF9afSR1bMUmjMtNfnsMy3BVZhacFjEbUG48teCUFgn2oZgAeb1aHV9CKYPao",
  "key33": "4MG7RoxWHPP6VrpNKYgTVPPSS1qmcctwrLBDNBTbNq5Nq9tMUG73vzrC6Qze323ptv85atK1VGoogi4DmWy4k1f2",
  "key34": "zpTnG2q9xRyt78mpHR3CSHdmP9A4bKNH8DbrMG4YmNfmVoWU7QWbakvg6QEZk5LsnMtxUgkLNwtMKHqmhai2br6",
  "key35": "oDkdfWcvgocLnb8tDop35ayKJHggyhHe24v1TyjCTVN7gmQnPkAybTqEQAxQ7eQnReRV41V8pb7VxQ3HZ9KBXiR",
  "key36": "4Vmg2uWdjVQhZV5gXvVkdUPV4b2GVTeEg1ZQfejreRXVQFfQtzxZKRzuifcZpkFVvQ6P7CEwPzpie6Ky5FRaDT7x",
  "key37": "37MSj9zZHs6jTdZ1f5m3etWPWPMKhojQuQ4vJpyf1xe5he3PD6EApEJi6BAmQcPxkWA4HZAEZNkFui6tc7VhPtN",
  "key38": "uLDDEVk1Xq4kfVAjVoFQJ8pcQeyMtCJsgmKztPrJejhAHiPtJLwq1JPXvpfzpr3FvA4c4iwTy3xC4Hmwy6kGekz",
  "key39": "34SbozDLsKXXX7W61LpUD5fBzXaYZxQVaLKKb3wdvyTz6AmVQW4uVHA9XyjtmHzn1rtsibr3ok3v4zryeWHUNT9J",
  "key40": "2PH4oCeigLuVgoQcUwvVFjQ7DZjEfpC8VSwJvTAABynFzkF328aSQim5LcV3JmWS86oVxPhaQ6pn8wRhfpbsPRHS",
  "key41": "2Ssw1xHsMNTKpwxtaESLugUSgjDdZ5m4wH8fsfoF75h98xP5Kx2isCkciAJCVcUUiD3j656Eix7MyAzhLDXMx9BZ",
  "key42": "2NanvuveFgYqxgKsjhgQmPKCwtvb2EQ4ZMJxwJpCL6W3oFCj5fbohte8R23yuZgtCwV4hFca5BSenak2w4bHLTPG",
  "key43": "CW2NKxqWnJ7jakdgZJKH5G1PLEMYLXs3XXUdn7m17BYNJ4rbghKCcK3gWW272HA42uVJ9wjBqRGUpK9fdZQZxV1",
  "key44": "S9xE8P92HtsFYvFs8t7FeY9sw67LyBmLtssGa62KLZfD8TuFWjaqt6JpLb5neB4W2mkex8z6X5VsE1gBZYNnEaJ",
  "key45": "35msNVAwDFuJQxtwA3YFCpJpMhtpqcEkqabvxz94B9M3jm2k4TDVAYkeLHRAmdkLDSKGmqUz4193wA2i8pYMrGPo",
  "key46": "2EX22RPDois5gavBs7inD7UghTYTjaonoUHCmGyhhLtBjDSpG7zyJ74Lpp6C3CSHqjPdM9YXt54Qro9gK85e9dPK",
  "key47": "3xnvwm72Xvc6jyfc9D2c3MHTKS9c9oq3fdNNhYRU5NitkxZRVmDpQzdGKpQiPkSvSvMeZnCVAS3dyhXKqLHdbxfG",
  "key48": "3pQ6KHYkaxH5Qtk5aYwuJ1cFh79epUyqrFG79MQKH1VBkA5w1QfvQRDTbVg362E5DvhM5q7KCzRfZJrdPvyXGawW",
  "key49": "9SWcb5x7S7v5x1GGdtAdRW27wbhxYwim191F3Bppfh2MCM1GAgKbAdJB3f7bgqkuuxnXsUucaP3kGum2HGwUXEx"
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
