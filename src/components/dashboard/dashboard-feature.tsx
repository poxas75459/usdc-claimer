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
    "5QRWoNBWMWxERAsp9kfWi6gSUMLmVcsQx6553p4Sg6HH9cpmRjC4BjTDkAMj2J6vH9Fcb44eErDtmaVJ3xtaq5zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23yFy7UjyDLCMBUEFHq2qKfgT7MKsaAtFSqNWEeSiRrfb31aMMsVxTQRBbPjj5gqtmAHYQMtWGyPHFMB4VqNHQQG",
  "key1": "48oQ7R2Sp1Ww4VyuqdLgUCX4jmqfTMk8zK6uNN8VYL9SNZBv8N9cJzCRBzKqu1sFo9f6N6UmVDMSFRTFuTYArYSB",
  "key2": "664VenBGZhWV5KoENNjyppDXgsvM3YCT94sFXL5bi6fiDamvyhPM773LKS1KydTTuEgW9quWhW3QwmvvCpLtVDpi",
  "key3": "3eZ1N1L37YHbKK5oBbdX3aEdjoiBwKz9TMbqnobh8FAeAm6NJCwbMKrL9G1sQdg32BLv3wa2Bc7Vf9VmwXaX1zNq",
  "key4": "wanGBY94KqRrHajNuaqZkUffSgexj852AZTDQTxTftesVtpLpmAGHd5cTtwSXLU4PP3ACqBCUzTsFRUrRj68HRW",
  "key5": "464pW8sf65YipKzURrc1kSZaMGRW16ekzXMx7QvjdXvJkahQGGZ3bpMPUj7TQSmM1L7C1xW17EetCCbjj1ZHcR52",
  "key6": "4u4w7RgNUfFdN3XQKM3fra2E6Fe2w4Nm4oL5yi25iwK2wgYcf3vSRok2QTNfxBEBGTcPp1DX2rY3sKBfQGnDhZ4B",
  "key7": "Goj9zX6Y9efzV51KgcNxxoidxdHrn7BaDdgvHHw8vk6ChSaYLPrUbYDSGQ1W4Fknudkr33HYRxoS37QET6q3SR7",
  "key8": "3n5L6bKvc3iBdatCcgNmjyx6ywf66P1ZTFU1F2vKaMgopPbjKM4WRa6H1cTcZjhAB8GczkL9MNoUoBHCFCrkaryN",
  "key9": "5QGmxGU8FdS3N6W6z3STSFjUbFnRKUtoouH6qw477BsauemfDyXfdbtLkMtbBaCKGPKzK6TLJHcyknisjDVRaDVr",
  "key10": "5LW42fgQoXrhEYX9r2WaDRjJxc6DLXku8YZwzZqkjq9GXc4ScvZohYjruKUWeD4xVmop5DUZm6TwjdKr5ZVNSfN6",
  "key11": "5dNX4vTBBHKLLa63UczdQUxWn4PsxZhnSYXLGL7rwPsPYoqoU3zqcbcK9TGPQA5vYVuaMSnvsLuBep5bz6dNpPwT",
  "key12": "52nUquendgzQdqWHxg2os4yztT8LBBKKpqKy5cSE2tCQBjL9htrUJ9v3aivyhexGiJ8QZS925c9382jcqJBnu7Km",
  "key13": "SyVYeD61yfCbf74CypJyqsaanBUbTgWMgrDcmhx9JgScjmRSLgJLQzED1K4CCP2s8sL3VXp2hujAb9WzyoBn7zm",
  "key14": "61ZTprFmF6oBcGgsbXtzmY9t2uV5quKGVEevVhuAPespgsTf75e471hvRv4n9mTHmepHnvjth5bUovUBseicSmXh",
  "key15": "5qBDEPA2mCnNDrnYRQBqYCF6ySy7TdjoQkh8xic7kVysjoBF3PNHbqWUV1ZhmbS1w2Y2JMgsmG853Kxh6wy6i3WD",
  "key16": "3y6ikhSQC6ADMzfsF6DkAeptkJqrrZxGRXA5g4emmqdJx9js7WaP7KueAusuSxcUV6kmenyxQBaHXybt1DViG6ix",
  "key17": "3qeqYUnKPnhDXvgZPwK7ty1cER83Raiw8366wwZ8kzMto3aFvmiQVZBDyC6LGeExZoCprhpDvdFvtsgz7bw3mHNS",
  "key18": "31sDhFU3QJSDCBvnU9XUA9Vw3oJfY2YndexusTXnT4cUqkQWpEUExPpTBQEZGgvy8xPv4qMqEaUhGiq2HnKCR9x3",
  "key19": "3H3MGbgNEUhYCEaxnszS3nxuvE1w7FGHtEsUKCUzFtJeLtdLgk2sg71dhZ25fBrZwKUjuALWXjC3Gr3kQZc2XcoQ",
  "key20": "65Fr8eiiRZh8svoRZJCk6LaZiNUP9J6m5HSENJzwE4GcrnaJy1mT39Q5aZsbKoN5wNcrDB6hnjjseRvNWiqUT9X4",
  "key21": "42wJMVWEw8Ar25Gs5PWc4T2YCaUUA1yEohVjUx1hfKPY5Y77uYBwZVskqssLynSKGTGfH5ZAmaQua3uZtFcQ96Vc",
  "key22": "hDiNP8gbPf5q6XP1x4MwmFmERR6E8ZEphSdK8Ay2Sm64Vxf3u2xS3eCRHpRE7xdPK6pMsW753ag1GrvKBGruPzS",
  "key23": "yHSgfGyUaGimSUzPCD2TY3WxFKprPiYFkTjW36HaXjT8CB9kFrjQNDyGKAYKRu5CaWz6nkUAmqgVJC3cS79H9Cp",
  "key24": "5qwarGoZ3zQSUrfPnfJpxUMwrCA5ZrKbVz3EsSN27CdP8nDEndLAmm7tftZUcNtTfReZihkNPiwGHjPEAvFLEkUn",
  "key25": "5BwEVgsrRAModCDD2FKxcJHXLUNESozr3G93zuiEuZHdsPeuWAoM8BFAJAuvHigRwU1iAVUQXsPou47gERBD4X1S",
  "key26": "2JYqDtmRTCvq9pQAj7rJK62xA5Bhz8run4LQJyfTcbbFT8kJTGC25utB8gQ6YMFeviK3jV2ksEwja4MrTHbJS4Pn",
  "key27": "5UYEhRXtg5rszqPTrcEZ9z2F6h31CRs56A85AfvSRLB8Ccwjc1VdpAcMfQdAbPvMaxoq5mFgfeRe1umhL333tHSr",
  "key28": "5vofESYeYVHdc5CmhKP8ccf8YkJiBfsYHAAcAeoNxiSeXMPisdb6VTAxaNnJrfSi19cewKD8pKw5s4poxckwJVUU",
  "key29": "3teszPPtVk8FcMH6nQDSC87ixf4wVjM1JVLC1SBx38WmJEKY4wG9YTdSd4QeHtqZsTNtPn7KBUdLuS1kdhHztyLW",
  "key30": "4tuLmY6E9vuWxXRUj9xYxZn5bViVAbMgyGZLVzMSBNRq9dDAUtethF8cYpHiUXjgJNpTk72FBr9ah2R3GXifgrUV",
  "key31": "3DdeumL8cD2RJWZieFVzG5TpzmUpumphpmuGQhSFX2eYABPK6icbGft51xqxZ1uDJyPfcNyFqiMT4MM5Bp652pQ1",
  "key32": "4MdKUBbHBfkfKm6mFNZwBfftKYhJ5ez4vNYEQ45RgvcZ3uKt9LpyFvbFEmi7hEKRfLQn4NfwvWMJxhvmhvztx1kd",
  "key33": "qfH4PZYCqV6ChEribaVFV9Yg7yebZBJECZ5TwaPH3CZZSZbkFJStc6pSo9zrE5i325sn6duSXhPdsWNCiQQAu78",
  "key34": "3SBi3Ss3EaFPekRRQb1SqrCW6CfkN9WzTHoVgQZhxwVqnjCDVXhUquUiRuPifA9LuyCuoH1mpWBL3BhVJjjP6iWs",
  "key35": "5iTSJ745D5LVpsj23uyZz3EUVTQ2ues3p29H1JNmLGJgjyp8bYVTKk6sMdTN2wvevbuebNgtqCXKVt9T54AYj1hJ",
  "key36": "5Acmpvx67eZ4ogQ4ay4zZkafL2j7VDBWvYY5kXUPUfcqb1ZApcGa4Gkr96jabPGiygzNYcjGjkJm2tHarVgbYonU",
  "key37": "4cNzbMHRSM5Sgftz5c7v8jMERVfSr333QiqqWjCC6ynd2jkYkx5BgtG1MJP1MJZeBpNb6AY2ze1hhd1Add5DFvPK",
  "key38": "5mdurUyR5bHT2YYCKJWa8Nsr5HMdc7bGzci8TRNr9uQiFXYFsoS8ZmJXs776xCke31bTysAKGpKptRK824jrTdtd",
  "key39": "559W3PGLfD2fb2WYPMfdwe43VePD9AiwWVgauaoY7znvzZzhzBsUBLNeQPNMAP6ueSgJztS3G1GmeBQdUs1JdAam",
  "key40": "dEUPWoPkEpfSJwv7hdkfeAdc7uJtjDHyXChQbyxicfkh2yto3MBPhX5QGPDBhHHBcoXcDyatrmjxjHMx4tyj4bj",
  "key41": "5hdN7fpcSugYqcBJfbpgVMr1wWdB8wQ9ofTHddU9cxc3qRwAP4FLgkaM8RkTHS2o2GEZX16YPXqTwLzjV1qnrbnu",
  "key42": "5NTjHKLsW9MrjD466y8QvKKs6gjj5aFHpBR6Ku9xbKX3DiiqG48Z3bpuCmydRQehKxJC9R2Yzbrw17q3qvwvjiB7",
  "key43": "48CuCqnr9jYaxAxKRqTVJGMR4zDXEyBw7wDsDA8xszPJckr4s78CJhfSYDXo3ZDhDgo1tBLJakgbHweacmponEpB",
  "key44": "m9n4ceoGrZf8xaa7e8kFrsHDkuADxzvudaEic6hK3SbosGhePbtdMjcDCkEBayj9dLQAq8KtJ8Ld9yjcP5VWUeE",
  "key45": "8FsZTfPrS2sLgRDoaHBy5ybdiQEfZrXSnYcmT6Dfey8DKEvuSsuKbwAMSx7bxysNCStWQy6xWnhMTVkr98QVLVy",
  "key46": "3AbkhSx37N7ZD2ykCYJNE9RHPSrbYLuCQTeXySR9iR8nrfzbcJdEx5SgKP3XcV1737ZmWMDFwHz541uu8h6f9VV1",
  "key47": "3yQFuYtLi9wTvCd1SShBW4QDvMneomCUGPG7hm143Nmrwu1UVpfrWEkrr9gsY1k9HsKPNJBELRHHZNgydtQLvGpw"
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
