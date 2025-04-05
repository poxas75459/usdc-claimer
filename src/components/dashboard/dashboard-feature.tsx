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
    "3SWaV44bzgbGDiya42GevJKch2PH9eCskRBiXTKLoayr1ps9yjjHTq83FGHYhTeGcTvrnSHekKJy4YDaKvDq7DnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9hG1cCVq16vN2p7AbnFbkFB58AWWBVKL4qwfNcZYsS9pY2XNbWajWxztxT2vJ6D1cKxRBY7Nxag7VPX6UNdnzi",
  "key1": "4biPfxGH2BrrpmU2b2GHB9GwhgtMCBkRP3xas6jLJgsHhsJmuvHNtau71pQTu8Tf2TfaFcBVyoyvyennFQMV2a8o",
  "key2": "2YW2LwXjTdVHCYYroHcTG38Tfebnvnze4hr2io8Eim3QQ6NhbTgYnbExbtdaJyFqLZwqfPtx224XGPYrjXpeuNa9",
  "key3": "5JJtf7HDPzgyzL9zGMc4cKMCERRASMbg5VYUZjmw2JHVQjiviwRBptrkqL8T5sw4Rw7nMnRsk3tgTBSN4Ypmi3tb",
  "key4": "4sDzaegFDeYPrepnMycArKHNRFSw9hMgGH9ie9vcrQWE2m1swCMWytGgQ26sFWSfVjw42VhizPxinAdqGboUy6JH",
  "key5": "64XpLpbKSyVDWBS5sdF17EsHLKdku9ffRMLH1n1SsdZWgVppVpDN7qJ1kq1MNsRWeHefJtTPDoVC95Rs18p47aL6",
  "key6": "5xVoAwMzQT5JTwqAdKxuW4WBU4mwec6eWWzV6rctWbhpxqGcaxCyBkiis3zMzriZ85rgGex1y8faqzXpQn2GgiK1",
  "key7": "51hpVJWAhNg5ZZTcnJSw6Z9FRgMRbCm2ifapoQdXuKku4ATFQ5wd5cD4LUj42Z8dyE78UApARZJE5EaB6cQvCyo1",
  "key8": "53p9MGFTGrkCoAWH8xP6JiB3Vdoor19HYbudVMdJMLdUTRDJJqCc5jZPmazAtTSJsBySXanTiTGM1dru49XxJ9QJ",
  "key9": "5X6davs16xyGrW8n3uPwis1xXqrSycNsW8jUyyierRV6qCJn99HkHtJgZQxn65JFefp28umizXfVkYu9zpASEkEB",
  "key10": "2fkMZYYHXr5xP2eRzfSwL6sMiW2kjGNaJ13uxx1Zr1n88HqqZahWvoESTBb2ynEv8zQPKLjLXPCQpD47CQjBBM9h",
  "key11": "4Ve2umjxQc7E4b7ANHQRD4DZ72mZqmicNEZjMKkPtWkiGMjXntiWVSaYEXUeThjZ1G2cQTtekMTLwm8oj5dfy5E7",
  "key12": "iJPqprgQL2P1aufRkQgr1rpj6XxmNWZ6wLZqAciziVNR8Tn9yvZjjeTiQFFWWhHss4H8PFzuBjefNnqY1xWJDvF",
  "key13": "3ikvwWoZUggCwhuTpaMmmpyAcMHXqsNeD974ZYoqKRSBdgWaema92VwKL5K54Vb8TtouxcNTGCqeaqXwtxi1JGLz",
  "key14": "39QXsoQwrDFHJTnRMjQFCx61PaeW5Gvsa25Hedie41c5YtTvE1RcsrNzRhVdP1NtJM9wzJTLYv8P92QVe94jD6aG",
  "key15": "473AFa3zi2PY9U7mAGCNKbGNduXnzJqcPPN8u9CGRRQowbRXA7uKN9odUGgEVTKTAGDRKUfU9MoAGaZeSQBCBJe2",
  "key16": "5AXT4uUwVuBzDpuVqg9MhGHNUHXdrx3bLJWrU2xWheo2kcQ6NFFgpzpNGMEvwPcwzUyKWw5AhiMtZVztvjpsRMF",
  "key17": "5QTgoE9inVgSUZxb1A1cPe1xY1tteSDKwzdomLgFavS8metgXHYxQZGbnSdQDRkXbtRsF4vN1NSVh6vjMU3uT7wv",
  "key18": "m9Q8TZ4RQbZXsepoiB8U2qpR4bWPmJnNTrH8NL278A2i25Fjz9gQdHk1kvwxmSj3Ep5PaUCkecNudkLaHdiU5Av",
  "key19": "4NyZZ8ztu7HcgDRu96HB4xRWJM9CbP3jH4dnW4eBCDxTGuMdfWLvmPAKRxfPjvEb9EJfmHHqMLpaowzwApYJ2jvN",
  "key20": "29SJAj6gTHR9FeNGTUrwyU1YKhTf2FMoHaPtraDLKMPzj9hzXwbBgaXnCwcksX1LAiArMnGNkSQNLHb78QfMHTBv",
  "key21": "kCTPjvPtxGGZukCuRF7AWCqdVTYT2b7wbPqnof19a4VqT6Exm3menDZqH8Z9FRVqSSkare2tmreKXU92meGZoza",
  "key22": "F6MmHKjzcGPxoe2tPXZy75ghn85DDzeWp5oFDZPhS3e9XjeSfnX6WLNjbMCdmPh41zdvRJ3KyBeozCf1zcm2dmh",
  "key23": "2B96cFgnSBgjyYbEt3ybzgQvYdHfkp92GRPNGQQEGpxi2QSqLnXV9opKN7WP2Wnyd6yJ4qdXBdXgedQEouDCk9Cw",
  "key24": "2CfU5Fgqy43xeyTSMhguYNKGGhExcS3aAGio7c3u1YiA2aXu4jFxWv5gWmE1HYvC4XF3aBeuPsXHiWQkT9nN5Gq3",
  "key25": "38yG59oCjDwnhzbpN7FPkbqAv5XebYrLa5GpVd7J1fuHWShfqcusRemHer87EhbLGNuvBwW3cJueMo5mJZ2reVfN",
  "key26": "dnumT2wGDxkhu5cjAeMKdoYWS5wwaf8hmXurXF2ieYuri2umZW4FdUPbGHhZs4kUmbzX4cfx8EXyYMfSKTqvvzh",
  "key27": "3X4mEyazThdUZjtg7bEtHhYvvKBHkr92bXvr8AzSzk6dPcUkigpq2WpHSxSRF3g9xdWPsvCDCaf3KBGVqGGmLwBP",
  "key28": "44Y152L8o8yHVnrCDtV4vY4GPpd3gN9vBajqRi929dGPKb2ymoguGok64JD4MptBsx7HhSwnq4ruVqLrhdYXohb6",
  "key29": "38q7Q8Trs7CxtWLxYk9dBuF24SgkpaYVy686gpA4Ch9PcoUBivBXHSA1uRdN331hj2nG7eauNpG6Mcc7MxptC9hq",
  "key30": "AK2Mm4X4crXAqhCuuiiXdi6EwFxsUpzZRD16siQKNRKe7auzsT6R2yGHGknecCUXHTnXsPaYaf6WXY4CnJGfZj6",
  "key31": "4x8xwqeNHzgKfHMZkJUjz1bwmZLQNaQUPMoBXLKZskRhs642PChJSHXcMoXFQDFxboYgeH3NcqmubQHZVLoMHmri",
  "key32": "3FGAoKyfzbA42vo5iHHwmnqQYCqDdMh81otPC4EWDGfZUweZkw89RghaLPotcrEDpccgbbWboyyR8vct77FaAfqe",
  "key33": "45usZKiUtxx6PKzjuuo4gqRPi91cbbnCrQhAR1LLMMDM5dSJBjQPgSwyj9UrLvnRc7ZssH3SsDiqHdTKNEcX1B7j",
  "key34": "5nrPDcEH19kAYCsZSfmPgfq6aDpHX8ci1WwKSSm2Nxxv3Vmmb2yFyWnWGLZudM88VLFB748iYhDByKDPN5fcuAdL",
  "key35": "2XcG3mRvnP6HFvqVZzjRDUMMMRvxbddzmnU5muKv3qNRYxA52kCUhysrau8DV9wmvzwTkSMNoXXDebEmNiyMzvEw",
  "key36": "5tPCq9Xe37EtXZywVkhYiiLLPRkeKCS6m14Qdt8Z8swJXBoS6pArkHtZmgUdC7BGvRKoFU8pGDnmNv3bQaksjLRv",
  "key37": "5bKrZrWgM6kyRkemMnnsH34UNq2okNuQVw8eFcy7isTEvXAYYTZ5BaNg6ooGKmg272FrKJvUcESHUnQCFr4wkN6a",
  "key38": "2bUmLqaw8vgiheMEjiGaU1UsmfwnNpBL4AcWAtjLc8eXBkg55q9975MqEVUy6Nxj27KHZSMoiZFR2ozMdbkwexEQ",
  "key39": "3hMxDK1Mzy4hJoaf157o2cjjET7PC8tXdBodHZvAgwtvpGd4opZkS6NmndbudnuFfuir2hi2Uv3kQW2AiiMpqtxL",
  "key40": "31js5geGUE22eS5bXJxe3eXtCyFZnB7LViSkuU6pZG7xYWu34gzGDZEWyeEUtCwvgUcWiUTXW8t9FKwDmz44cVro",
  "key41": "4FpT9zfsMsLQrrLvxHMft5C1RD7B23M9J8b3GiDnJheQ68b2kmyYYC2UfZrPytejhe4vysaY4R1G3CoY5JggSGFe",
  "key42": "hugnCPiDXp1E31QxPfUhQecgaT4Nn67ym7vb6X9BFSWMKnkPspK9oR48NEfPRMiuxJ2jPHWQ9pQg6wjPF6oCxmd",
  "key43": "ZymfAPP8srukzmACQDdvkRV9fL2EtpmkWkM1NaYQefPoDKvoHsgqqyBkcfi1T82JXyfL5cCxFYnrzN9j6Y1X4fu",
  "key44": "26XSihKWqoML9tQuD2KCHLgNTgLpYWbauVReDdZDuFfq8PBaSkGwGoXJqtNY81C3e8VQECSD5MTeCDfSPFvEwH9p",
  "key45": "4STFVMogUryZoX4xKwpD8krriwYFD1w8Eu4E94nsKpBPXKqC2icM6XyA8pbQBbA7HhyidCmnvebM9AVjefCo23yb",
  "key46": "4NLRjyg3xvp9JwbWEMyhAhqBC5HpFKoox4KyFUiqWW64JxJMLoJtRqZotqZyqFJQkeQmTm6pHR6QgwbJxjiCPwiv",
  "key47": "2UWYzf7NpMFgHCcWX6VD6ABmMrW2Gce26Ts4a3rrudAzTQbYdcgCKX7wNy4xXc2Fww1TepNT47CnhjeXMgCQ5G16",
  "key48": "3sZJrsUCKPfFhFe1xFFgEr6ZHbrXLYB2TKsD9jypVW1H4TdCBw24i59q2m4NgBXjChiE4bWpWZAPJpcPccXCad3h"
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
