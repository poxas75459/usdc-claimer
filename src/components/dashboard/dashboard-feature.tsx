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
    "i2r5V43Y9VdgP9haoXyGLLij65SGFvnymKGyzMSsiKUVTgCVLdA7E3v28nFGrKCxizVx4aHVnb1LawW38X4TRcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T1TmpwLHn7yrrhkdSDDTdk57jjjtub7gGsmk6Z434Zj15mnff8sWiT8dYwRU6S37DUTuoMoR48U6ChrSVW34CvN",
  "key1": "42MrioDZ3Mp1ZrTKmnhcwXH9MTCPHVVn92G8hWwrU7SHG17NJiRHQeCqYe5sY42fdVV9b7mSm4v4TsGwMgaourJd",
  "key2": "5KwK5wo1e6iEykb7DZBFGufY1vWq7Ya19v41L8NG7kmmc9p2SqNtekumfwnQZHRSW6jKMuKXB86m4yo6eY34Raeh",
  "key3": "rU6KSG9pDwVVgDPA6GkQgPcNtFSPcKVFGcNqKAxVzvhhNQqQRb1Shsf8rGo9JxZktZUq8dZhy75vmqTyEajc4aA",
  "key4": "57mZEqp8BVSsds4V8JPC3NQZfqzvKWHHzfk5Q263U8XK1tLCgSqeQPo8depYXPgiuARtHK9ZPASuqa2MFg37ejTb",
  "key5": "2FVhAe9kCfvDGeGXmmWyt6XWp6ED4eKpHBUbBcbNkkcr9ytRTszXvc4Gcg29Fs36TkE4zEH2j2mQrw1AyCTnhKdt",
  "key6": "67MKLZ6SUumoGCfM9VY4Fb2oA7C6f8zqFhPSWPdgwaKkhbZ4qbgfGdsUfzdvWTNjRfC5KsMHfTFVU9bMsqyGpnHZ",
  "key7": "4XAsnswyG2RTcMYvmztzk1dea8YWJ71rS37kffg2MWDvPtwjYB7YnMy3e1F9DNy578q25iirzaChtaesN9sysmBc",
  "key8": "318pd66xFFxR5f7PepjzgyuXoBysksojhC6RFCSTWfS254nXwJgfVgRDnr9W3nrp4squ6MPNvcGsX6hWgQDmesS7",
  "key9": "2KSVBF3bfsRFtnk28iNDWWtwuXviBS7cRPhpdyuDkJ1BsoGuYJdi2DQzq1tRCD33JTatpVyDjLeaqG9BtsogQM5o",
  "key10": "4GXnJaqGiHAnUUmDpZBSzNMJ7jGMNqZ9dqxmMh13zHh4mAUw6UhKN95vqJ3Mn8SbCnZDcRD1hc7e2mNsqHyc63qC",
  "key11": "2J1xzCyztjRCr4Lgg7nEMe4NJCjGbzwwZiAfimJwdZWEMdVxyGAWhZCR2vaheW1iQe7WfjT1XL1tdB2mCyLiJiNm",
  "key12": "5U6Xzku4zBj3mCSgEzCDQGChEcNsY3ZAeUH2Q7uPUnppoo3ybUPHMvKHebSfsqbnz2FpJLXxqxGzP11Sq3bS321J",
  "key13": "yjfVkBafutfWDu8XcZhjzZzHddrfPXo3WpwZjUSJtZjVJrj8r4hyexHgE6zARdRAhDJi6ZSvRN857mjfq93FBfw",
  "key14": "5y4TFBJ4dYUZqSvnrcsCsGBZiFvUcaC3RFa343953cpTTmap8B1qFXUiE3aiDeoGTwNRhSbXpFE4JHsztY3cmxQs",
  "key15": "2PZgfvaNMtvU6JLcJ4z1p1KuwQjbT2kDAitb7PL44SiZg9Zeog4H7AtBmrNPYbUhmncEjyW39uDQLeTJsyWUzk4Q",
  "key16": "3pabFrTNDnd8XJD3wWRCcoK9BEDR29GxP9dgzLd9TaoZUoW3zxMKBs2terFjQ175wFiGN1mwRJfUaf4jzZBEefdh",
  "key17": "etjpTEgCerFor3ZGd9YERgLngmrGhY8Ndy8kJV6FM4VKWdBfvPzcU3BXjQGQS2x97DnZnwrr6uNznBjF8iJqy6t",
  "key18": "iJpbUgnrtyUwSMd1FEJWSLzqvPKftGLDcRskjUgNkBmDVEBsNHxas55e5umPM1eaK5C9JT8aRw8nZz7MCoAmd7q",
  "key19": "yfqqRK8SMHBk5shZGQBAazYqw34Wn22TA6Z57qW7C5igNvy5Du1Sa8q1kEAQt3dHtCwbd1asaNE9mRYb1Kszif6",
  "key20": "qn8KYy2L6i7piNWLZ7kaJnkkPgsBc6MdPhn7vNKm9ikBmqREsu7mgoEGGay3u3rnhAHx9X77MNwgxTWhiRUNV1s",
  "key21": "4gUS5pQ5yYakjaigt9mjkGkzg9dKuU9XUHtLBjTyemq5H5Q7dCbEXipJBjLxSRCkXk17YcupB3XLKU8zZfYLrNTQ",
  "key22": "pu2PLZXmGg9HascW81K9Nj5VEmn1TVxNfbUUhiZUgve9nipqAgcY5Kr5nRBPg7c6t18Ls9AjHeN7FQmwcMjJJgD",
  "key23": "4kXAZU66YtJjbywpgZrpickzhsPK2M6M4uKYssCp6tMfgBpuhj2zkDSP8q8LZtDn9KXiKeBi6LSBq9hRxVeVh3Zp",
  "key24": "4V2GrDJ6zDk8n2PZ46LQEpffQ56nNWrbJ7mBssu39LKahdRV5fEFmmHJfQvGDHrR9pLwRcJjRf3mofnLcsWHqtP7",
  "key25": "5VerxiptQ9ouMpEHGPLCBdGCsdNgW2AoDPc4cm5pjEvYBoGRoUMqua92yapVq4zVMcMvDf6Y1Yww6UaNg3h98Ne9",
  "key26": "4xvZgVDB4LVqspvsgzYQeaY3k6QCZVfkCUS2dAV6Eg5Lte6rAG7ceHomfNNKQLJeyasEAkHodC75TRpAdHX1Zyvu",
  "key27": "2gkoaV7mvNCGPfvG46UbKuzRKjb6i9cJkSXJuQyq4SZZZgWshHrMkjtKTbKB263f6rz21k5bcQh2vR3JzX8DfBXs",
  "key28": "3mB2TR5kHAx9z5aA8AyjUaJaQ9opxn4NRy7sDN7wBcdqfWovotepY4nvzv9LttAUUCt5gMrbvzgCU9E8EgNmkkcW",
  "key29": "2GBuNbMcv5Pu2YwnuMAGBGjTDcncCmDXyPKdcqYgBkqvaYnRLKAPqLdbo7NAvP4Mbs9hY2KLY5q84b9PStHmJv5L",
  "key30": "4AzSwpnZNWh9Mfst4qoJohwK4buzk8ortfKn8eD46NyRMpnk5W938NKEaRvwDbZ9enoYmU2pYw47YGxVjjwMe9dp",
  "key31": "2PGH84JMPq8pigWk9BqDoKsv11swSH72DXayKDqCwKcxnAXjCrv5U5FvrHrii8ZgiLUzMccPuinu6PiEKo4veHVy",
  "key32": "3F6SvLwQKpkodtSeKgPpFj4repEPb2t87E4u6P68ygYNBYbuzJwzEhigwyP8949k8MzLGtCJaqwX57LkCChmVGVt",
  "key33": "5GKvFrChi39dGm4CHAP5aa1vtUg5pSKMmtw9nmMCjJCiy8Suc1Eo31eCZoLCHppymFdmRgGfoV5K9EdvzzVdKC3r",
  "key34": "3vzuSxw1X9skUfL57nAPWYSv9hvEZHk6GKTi6erXKVqrsbRCpR2otSfYxXLazY3NQjfkgbqotxzJYHUADjULiZLm",
  "key35": "2wSh8fZ7Kcd4sJy8BD6qVDsUtChaFnvNWQ1Mab7oZiJBqVqtLZaGZDX1ghSa5FSEtRQr5aPVALd6jrZUnUn798fY",
  "key36": "5eh8jfWpT8B2AErBE2U5uM9pNrQ5kQyGPCPiYeAq2Ni3ZkUtnCucFqdyCBTaf2TvzSjwx2ZssuKgMDV6dzfGbinj",
  "key37": "5GB37SysfhK2WovWuBD4h7iq18fm97YPUNebWkNLyZ9ecRQDoBimpRrApUquB7L5qtnnevte72pApr2At5jyQFWB",
  "key38": "45PAzVcuW8Xe9FV311zVQJuAexPmYUQtfkNgeozDy1ZVpV3sf5YLrNSqBJ9yPM1SoD9E6wa2ezzc1D47DoYUpCEP",
  "key39": "2EpHqYvLJCxNjiCTkfddvfM7x8AZCxu2b67VbwYJFZEtWHZU1ZdzXHakkMeAtnsXq9hY1bdzhwEB2TiivXZTxpvw",
  "key40": "3dNvp9An2m9N2U93CrY1Sd5v6ZBV3FBEGUovMHm6fUdYamEYAGPKpfD5FAPyZWbpwVG32o5vTWowDLoqV8QvLAtQ",
  "key41": "5bzaMQsNAYK1GUXbfVALzZcR1iLy5LtEcvvXTfYAvyESYEDXG8AeEwYceeXJR98LXkH1RLmtAbsDLMx2atTPzjrV",
  "key42": "4wnvTSozgRWQwiAGtv1LZ3yh6efc7uePLUY4rDoBGnQAdfGWQCHxR51xNqCGHTap2LZh4ouVPwB8LMnkPYNKG4e2",
  "key43": "25ctNHvVV9gtp1sZpC4H3qpk6zYiqAw7uWnM7mWpnSdcsp3KA5q7YHU5nkBUQhBkFz31WVjNJoKymwkyJFbNssxs",
  "key44": "4ejdwL4SkBtSdLog6oqGV92iinLNtF7Hae9Zbt5nbkGFWLBPvyHhpyDMr7ohwRqAQvrXbcc7MCh695URYNc5LtNc",
  "key45": "5R7o5LpsrKUcFwYwuWeK1hhQ3Guahme21A558DUzKJUBLUVF2s4eXnXvcxCWd5NcoBdNzxVK4vXS1A4RYQ9JDj61",
  "key46": "4ZmQp4GQ7A4adntpghV9S5ciK7Rfgp91uoMS6sjVY6hZqse9MGwhixDGaVLU4hYbu1Vb47ZRGa8YeKCe33UFiFpF",
  "key47": "34PGMhWeFc2XA3Z5rbA1Dfru3vqKgSFvHoJA9c5naBXdHLfXZ8dyEZz3aqkg97vYqWup4PKfLsEDigqawJLJhkJf",
  "key48": "255cTLgV1FpMkXNXo7c8KZtdUok5dnN9CoaUmYRZp6gHqSrgmgHUS8wpnxFTbYbRu56FyzKzPHJwwSS7VYMdNzmK",
  "key49": "3ECk8N5Jr3kgzAjpydfVGs9KZzfwTe7JbPe1PrbR1G1XGxzu9sFetbKoLi3eUfopiwVDZmccWUhhX8zBPRKCRZ8N"
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
