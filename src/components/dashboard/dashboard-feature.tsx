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
    "fdir2mDdy5Gy3667NLX6H8ccrVn1vcXAq22eg9pxUWvRoQJhtuWSWDyAsz2YZajtMW2pD6jzrez3AbyZhFpbn57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhK9aHihegvC8e2zGrYb6SXeYbZs2smnFi3TfC99QRepyvKvPiwQJbxJ4K75d6viFRJ7hsWiLg2mmc7P2UgweXn",
  "key1": "65iNP1xtdEHFBt5jqerJoLgAqWjzKyBjSMPoNXo547UKr5zxe9YAEyH3Z5ohH5Ebk75ExdxEupG1CVcfus8VdEhb",
  "key2": "5GKvbTwS4SKL8FffP1W6WSjaVJkrRdhPJcSWK8v9gVVRMauLJ3tefBYsAJn5pgd9vznLHb64nBwAxGwNjEc7wfK8",
  "key3": "2JWGTQbHANR9xCYWq9YULSuEVXThhqvwYnUoVGsuUN3ZvYhZ2CC3q5zeqVAfgHVr6Y3zhcXZd7EeXWBr1yMnLBdU",
  "key4": "5b4VxFZrt9LH9W9EFA9XtoPvh3YvoHk2dZxWX2XYHQvjbBKDzqv8x3YyXv4XJoggJKDgd1LvhqgbtshHEjb5SJn5",
  "key5": "4PUMABQ1LPB1CssQqhZmvMgdc3Nkv2f37yMjR9cC8iKYUzjwoFTyG2GZbZ39MYv2aCCF4Zr2CvY9RzkrNgaZzjdz",
  "key6": "2SCZK7ASN2mrNr71qcBMGH4APTLN3QbCD3gKUthiCw6FySSo9k179MWMZqk4R5BEey88oaHDzUc6oQ69X7QhcFQU",
  "key7": "29Hf441ukaobrSGE7p1EpwkgQtbih9AoemGsJQTYFh7HAuoVXhHc6xsGAUuSc2Lz4Wgqp88XPkYmD6EGEsm7oQ5J",
  "key8": "65Nesj1z75rvXmEtXiXGbPri4i8zfjeWRcbp4sg9zbSeQBLRDrkPmy3ZiiGorzp5h7Nw49tuMP8UHsEDtwsksib",
  "key9": "36Nv9FYpMN3EGEfETcJBJ3S8xNCfjibYny4W6uaPFPQpDizLQbb6qVEs953Eb9eaBPXHVdeF5tHtNeSgf3xFmfzm",
  "key10": "5HePeGih9JUN5YjYWm5Dd6qBmRfsBhRFNFWXv6qw8Sg3HwNophTs1NFNAKGqPYVvyB486kdT7jhZgcyXfig8wPX2",
  "key11": "4SjNeQmGTh6yTz5NYGLsiNdiUvHbXSERZH6G16RWa1SAZXeVF7APfh9MHBEYNB76qfj3diWPfbnSj8HDSs5NTwTy",
  "key12": "3VzwUg46Gte2tPoRVKoTps78fSm6gPdzFCpozwnXt2JHFNQor8aQY8oRtepsahG162F3Fk4srKUz2PWPi6ubPmq",
  "key13": "3TeNb8KmVSYFNfPczZfivqHw3fq5UdZrgN8vsULPEqrfk3ySGYSaC7Cj4xqfEdjxtbg8wBw3jvVD1UGYWW56Tj6s",
  "key14": "2WejrNjApGPPXX2rhTowbyehXYMUYT1wenAixneZ3v5E8qiNTeSJTyi3W3Jwi2n9XhMia4gy3UbQFD2NKrZu3f1m",
  "key15": "3ah7i6QP2q6fiubSVea58eaZJ36BXaWZiV5EpjpZnwKUSx98nxJwtmASA9V45XWyutiTqCSNcFnJiXrobUwo3E7A",
  "key16": "5BCUAHgebBUx2HqyeDAREK8RRQTNywM53scZHYvT2f7jYKvZF4WtVKqjw2MvumRZve9fRxCzVe1iZGhquxKF3Ydg",
  "key17": "4hLG3URGz5qnskCEambQECQqtXfQRrkXFfzfjEeLzcGBpJZVafa9NwV4EQSwGoWUAvmmRLqHJUtaujpEDZkm8jSh",
  "key18": "5KZW3RAN6qThgpcVfQT8UVKmHUa1wgfYALr6RT2rf2bgKG9MbZ6EN1g8c1NBkcepiDJ6LyijjScFjgKbVXRZuta6",
  "key19": "4yLoDFVno5dCa2k5z2kEg8sQXfciqxaHcnVzsfW21U8WjMmNBpd4N7FH5CmhtPLec8UC2zPfXgvbzoT6xQoJXiHi",
  "key20": "3kjTtUfxWbdXE4AVqityvxPaDaRKzTSfpP81SKHsSbpd642Mv7ZS5brnvGRdpUSQw4d3KKezVsrvtXrKigs3ddJe",
  "key21": "3ugorhf8K9VLHik42sR9c9QAo6W65XVyh7HW7E6cVyjDCnRZz1JMvmt5jX2XUyBFhSS1VjZfiPjsz6WR4cnGFqFx",
  "key22": "4D5UjE1fpbteMB4DzJU4KoLRea8muJUS33PqGjHHS6rfPABYaJAZJfuWmzeAP13oQzRgVUQ7Fr1ugkSH3qkBg5he",
  "key23": "3mytXBwYqsuFr7Q3gKpYjDehcLjm8KBB4Ques1uxr41SvtcWqTwnKzTbXbNy67pLezcfJz1PnXToYj5YZEaYK1iu",
  "key24": "3SibvFTFriwovj4prntXeGg4PPtRZLcVedNcTW1h5aTmymptGJfWvh27GLYak31gvidJpDgVjTH7P9Mpvx6JdaJi",
  "key25": "4MyLfKcGrFEBL74wF1TF3VFgce7bRVPLB8Kr4vrA28DMtwngxgZ31CGUV7HUZ7v9pbZCLwyZB3XP8rahpcedyL6m",
  "key26": "5hePP83j7hMtQKTCRdK6wN7Lu5Jt7dvoazJojFUXLPXxdttDPDuq7YxX9t6sbBLL5Xwi9Mc5E15H4zffwW5fPXwc",
  "key27": "Ro6wbAyxBM3hNLYZfPv5Rdzv2tirLVPLd3gA2KTLaLfrrxT9u9Gh5mNsk4emnWVVWm9hjc5kgzvJmFANrv9mzSo",
  "key28": "5vGWCV3fFGEkpohy7KjcKpVfDc5Pmm7Hoef6ouWKzGvDytevKHf8d8oq2XbpdonRAaEAXYX9kbZ7q9ZSqJrk5sPH",
  "key29": "4QhYQXpq1WPY4VcELGYJnjsa6J8TtYWoPtDGq74TpU3sLQvJcyUaBDBxfPApJz6XDvssVxHRm6VMbjmWb2dnHHcL",
  "key30": "4SxDAWNtuJQK9mo469gEh4p89MdoUtt4LwoKbwujqgwMjZAGCpCUWCrwej7Y62ZNrsjFYj1cdaY65JmiSYMraiBZ",
  "key31": "537fr3DPWRzjg7eYpZfjZ9BAW9M8ADMgJWhZSVA1tvx5Fz6nS7WtAXfLef3gydeVAeMJM4cLdn7AFKdcPzYgEEbh",
  "key32": "3XB3dVdMEm5GEJx2zUTC7isHg7rLBYfm62r1tPHmBiz9QhkEhLaSRLYzeqHHuyS4swbJTaofa4eLVCT4aPx53Lfm",
  "key33": "4yKBbhKFeh37oZTzqjdYjgLjQfEcRDteJuQ5FWoizVfSFXMJiq38fSaCwYWubgpT8xPvuZMiTuyqKav79Ktywq8s",
  "key34": "3goX5C3hpMS3JHshjRqi6PFHsCqsc1kXjSagnrEYX9rvLmrHukkqqnvMvRnakC1UcuuKMxsRNG67YuWPctwRNwar",
  "key35": "49br1rNGmVg6RMQBnD7uR1FdUPm3BiE74guvd2z8fcGtGtuB6GSnWMd46VvxzNj2UmMUGgPoJDfjy7BDfqwQtX6V",
  "key36": "5YLL5Pf7A2NxPZZ6sKrUNj1xj7YnTCnoRa6sz5A9Ky9KgUrFqhT2nKcXdTVD4GMF3gD6GPHXC4dTQng1s1fNFeWa",
  "key37": "3UT2Ayttxzj8RpDgrZBW1cCkWnQjriRrCBpFFG88GtCQAYdRs1cgiH12BS369Do2pMAqJRLtqdxubuDNXBm2L8jK",
  "key38": "3iwwyZYKsLWSSc2QPHoPMauU31CXqcNbd8BPsaHtw3L5dXVyBm837Y52VxNv3fosVcojJk7w3LDBFFK8Pe6yWyeS",
  "key39": "3YpJNg3L9a8mvHoX3p7xLRytn7nsc8uvFZR8if2BJKwUCz1kGc9GmsToxAauMafurdV5QsRDCWtDwQTm8cXnuDmU",
  "key40": "RAmYSxCsA6YmzSTd8J2gWRKMAz2eWtYCwPugVvqtxAAik9vNaPm2aSshb3Xaer2MKw7xrBU8LkBuR8C79q24qAb",
  "key41": "51ZN8y5jzL7xn2CQ8yC4kin2yBYCFJ6t626rYbjiw4tg7XkXzjDG1KpZy6JUDAH9BNuUaiRDn4ENCRscwfpWiqhP",
  "key42": "5BzZMUX5cm6yupMpmjfNtrvjE4moMHBxuo63yHcKY3A2x28Qg9dU3Ynn1RBbSBQUsdtJkqX8VARJezXaj5ooU8Tn",
  "key43": "3arFRsCZekpAwmiq2KJ9wQ6Unj3hifBaXghGQB4G762Bti2cmV2stJR7CnS9XFfMrMw24dwSWdNgfcdeU3Wro8tK"
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
