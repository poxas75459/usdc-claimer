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
    "365b2wkgTUCg9Jo7ufY4yHgHt7WLDwKNm9SgbpZGdxyHsR6eoETyZHwvwe52KdfdqJKGtC6wuhCzU9MzacxNJCVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWsKmrWxKj6j2ZyVeRy9tWG4cAos3QHT3C26sV7GJPSXJfjRF2FXb1zrYFqqguAwshTJuBK5pENyuYSzZ8shWML",
  "key1": "4ybzpPLSLkM36ZJF8hHEnmFcGvqWHiLokQfct5TsfbgCDVXexXwAuUiq6qCk3X2X7hcrfysZjJ5XdhaZHEcEqcgo",
  "key2": "5P4zQdPidrRQJWVmGKJKV7ejbjjZiMoCLH5vhR4z2RUM85tcin934fnQMrwGtU3pBue7v56eLHdU74NVqRfyBu8b",
  "key3": "31hT6gUfmeQ4fVV7eptHQcR5ir7xZUJLRCwgMhU19xR7cBLCym34HdevitRw7ALdtFR8tKj6foP6pU2ZbmyxLTR9",
  "key4": "4YoG4Sc6LsKmqoKGnLgnjH54RuKsSHyUcw5yhCTeCgC9gEnBpcDLGWoU4G3GYsW5va6sdSizWCqYxJs3WvmJH3FJ",
  "key5": "4bb9gbHHwYmuw5addYwzPAUNK3VAzHJ9tDYFui6gXjoVKZYgdGok8BUFs6x3JoDsRZNT7Q5khuQRDuw58TH478YH",
  "key6": "5yrH7598XHrBkhWb6VJJcBgTyCmsFVQkx9Mm5WUYat9PeRdcqoDHE3N1e3E5rMBAoDp2xaXjMpUATunSKtpxpyVy",
  "key7": "4ag3ybdpnxbSVww9sqeNNUmkvpdG82gYWLsBLQviFimJfb24yTPRCGs9Cx9RsfkkB5puEm7YN9H14FMfhCQTyhxT",
  "key8": "trjkLtJsz6nVDjaJE6BRPUuisUBzh8FhPmvpXq7zf4MSGk2c1DJopyie4xkUD7JPLzcqxN4FY5rZKYSTp41GAGK",
  "key9": "3w5deAQULY2t8h9k1cELTt4zUN2vyg8UfPg2Pyp2kG3JgGtdLUQ5ogXuDT4iA7PnqfQhjwKz5iPAzhoDgQD8YvME",
  "key10": "GX8rzBNBpRR1vecaFSm6LXuhYHQEr2MAKjnnHHyXmnLfDy4Trd1XVP11KkuXZ8b1aNoxy8j8q74YH7pQwXdnCsT",
  "key11": "4YM5r9K8n899Rp45tZSNGEvCx8GAhmpBW7PTT7CRQXSafWG4Gr2YHFhTZTww7AqE5tRBcG6fkWMvxuMxvNZMmpEq",
  "key12": "56t6xVJeQnN9tGkkhVhZ74mVjxKAXVY7wzSMjB95XDagpLZFWANg7aQdzqghQcQzgLU6iNg1RDX71Rc7vYBLmdaZ",
  "key13": "49ZcPChSE2icBVCfHNXkFmR8KW6g63qWhFFJKPHXfLBH9s9pzdMio2HafdhVqcscWMFLY2V1vaPtmC3BT82oS2Jw",
  "key14": "37MpRcEkWv1wqJX6XygQoxk8PNws7b3sNQiz2dcWz7WDWXZZoJY61uoa3SbDQ3oktAtkAK5eNREi3mJiRNm36ArF",
  "key15": "4rzX1sPETECti5LJzFzGDcmwrGt993Yx6CHngse4WejAqBs8Ya9WzjpUUPgo2ZVwUoaFbrQD7wTBPMEVYkDap1vo",
  "key16": "2DW4mJSgbbs5Ezp8bb76bS3456u4eodhbzpQ7LWgz4b2FjbYPbofcjPssX46bXinZ81YKDEM8pK1h3pvEm57MbK8",
  "key17": "8M6HxM3RhuBxR3kTrEq64gbEGqiEvRwb6kSH8sinXHdyVoWhLsWCNTCkJQpHimv1uVpPKDTmRcEkANkKbJyw8LX",
  "key18": "3RYejHgXNwaY1vB17U62VWLGXWHsmoEuPUiBDmY1cyffVmc6dCtN1skCP77uCDTWgnR1Ps6UxFg4yq76ky2pRva3",
  "key19": "fptSXiUgtohyFGeqHUCc7R6gmoUv8MhM8Lsdg1Y6abKc1AwUtQu3Lxy9FvQHaDiuXvJ8WMg7BqppAwKwQWM2xF1",
  "key20": "2VDuX7iV7m1G1j6LodUwd7M6roezZgx3oqg3U9HACL7qoKWcL7WxQcNzRcLipLvwZtGmchTvfxKAUiKE2dm1fJe4",
  "key21": "3JsJmBeuvSyzj3xkdTKqKTyHWUYSQdbiu2jefwFHzTjibUW6uEGSyRNAPf8PczpSV4JsWViKAcsTrDr1W4LsWoqV",
  "key22": "5jzRNnMJL8G6nhHXZDEZ5TjWFjSFWVGty1qpaZxks6C5p5xE9dYABrVdbz9WnkgeeEjpLYf4pabdDtt2ZhVWDvGj",
  "key23": "3BPHNkkbrPVMuvCBkz4mmYyPUkoaRHYJ61oG6dGGZ1P6qpXSrAsdt3rTC2Y4c7VWLgrBKT1WGw7qWmjUo6vVcreG",
  "key24": "48KdTYBM5fEtwZtpKUXaAexzerXUyWjDaYJxnSdtLEBq1TaEu9zRgtwBYxohRt1LWJ4XHbwbMBRncZ5jVmnhosAi",
  "key25": "61rWfZCCmYxDhdMxqspSCxEfkukm9zGN4xcszPCFiCMpER23vGZ9vkVQbDbVMwYrNUVqoi9nMR7W9FvhaCxSg36C",
  "key26": "3ZB7orsm9vWZX1R7LczH1NT53r53VgP6fBCMKGWgiiNBp14k7tDdPvStk9vzidJk2brFrm5161Gfnkwk9ScYMb2u",
  "key27": "4HkbZhvJJ7MC4hs9xbddKsGtr7afvQSi5A6M8J962Fs1sR9Cm5Lj55vGzggdu2jftM3CZaJwHvUnHqDBSVFb7w6m",
  "key28": "5VyvkbrHFe4G7N5VyK6ZaWsqnZxJVbtB6yj61XCGQANJqd2qB2mTFUVAyYntySvqy1Puk1nYT6uHCkGM9kGnTv4h",
  "key29": "3ETsdbT6M73YxhdZ6JdKdkKJVa31uDMUc6oZYcspmYpQwAugsJHRRG9oN3xpyAsRfCjVXixYeAGmhPvyz92GmP9P",
  "key30": "5qPHaaxUcgNtjNXYVMjCbYk3qMQXx8EWeak2vjMcGcjQZfDp3ksKzMASSAipQBNtCrwdMdvVCLepWjzUpjobuJDo",
  "key31": "2xkUnqBy3r2J4ZWipqURtPaqQCwu3wXGrnWk7Xz9hQ69v3bEJ9Px9YAJJpENer8VUmkgroTtoveLx7zBGLkRTzhs",
  "key32": "3zMVrjfpJ75Q9jDBzjvzF2M74kccqarQHNJQHnmcnMwZVtojtXoRrAtnurm7HvSBEJT8p3fHSHLuTQFsxyHE9RZk",
  "key33": "5kyUzm3oAXxhhM8bVC4Ra733EnWdM6M9WqACcJjQnHJwbKoAasBscDh9Ptiuq2EmiXuBTpB3xEbADojvPHGbbXX5",
  "key34": "5mTaPvixWEK2GUavYWwjr1K8YC5AbEBZEay2sjdModm7QzQQoYGdthzehBXaky9mrFQ6qmpoTC76MBtfeqc4oqFq",
  "key35": "4t1Qtwft6wLdQAQprDeuRh7TMNkMuTfnRT1ULJSzSrWXVqSC9EjRZ6t4q7e8Sa4Ta4sRUqCuKu5d2bFe2tQ9ujd1",
  "key36": "cUQSFQk5BFANueP575AkZXgtgF2DuuN88GjMU1n3qggiXAQLd5jkxQU3F1vSHSFg41C5pyDJbxHD4jXtifNAbnF",
  "key37": "TScZA9AuHPu4tVXFRfgujENX5f7txg94D4YJAVmCvA3ek2PYq8bG23hnyUkFvrt4bjr8WioE8TM3bBg31Rdi5aP",
  "key38": "QoreuPfoApD6F9vWM3Xz1S2RumskgfKWRp5VBBHhB9GmGUuuGX8bYf4GngQm67eNzQXSPiVhkg7kihcCNEM6u9W",
  "key39": "4Ur1PyAjnJN5Ycchyuve98eMAand9pYo2enq97qdRNaoTpyAk7hvQ3EHQARiyupUrAb6weHQd8zLZ9QbMG9dQB15",
  "key40": "5NtqgqkSDBCgWZ8s8z79X3RxSW8WLsrjm5BaEKEMVyFxsUSnthhKUAnEiCtg2fmJRwJtPvApXLy5Nj8ZmJSiHvbX",
  "key41": "4xsotsmicRjLEGYkDAcbecZ1qx17yH4vyNQ8snMwKk4Zc6ztsirFSLC748DZ6Nos6hHRx4S9tizgWsSMCxkFTKWR"
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
