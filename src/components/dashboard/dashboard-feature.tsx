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
    "3H8DZqVRBBr5DujZY8Qu2jLus9JYfn6zSTgJgramMa2AoTucPNGpMWB98jQZNvkP5eNm1v9682bWeMgNXaEXk6z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XnahGp8fSCoSTraLCpWvbfQf7up1f5Rf3dKbabz4PgbPnojNWT3kiRbWj67kbhuRbut1W64hsBxyPMY8qqXSaaA",
  "key1": "25B2ZxM8WdbjWgqmbE5ENeBAzDiyA9rv4Sxi3QkEU4fxVbzNmkvSwAejdtnbkNXc7BGzhtGJSJhpxac1mfcQG3iB",
  "key2": "x8K9AukaLsrHnEAFdXxGSpi8Abqs73SCMCVDGT9gKac7AVQGsT8FcGsG38Yq8pKBUmVeMnZn9Dv8aHfhDPyvPUv",
  "key3": "UWfTq5XHSjLhJmQNjdYi2FudFDtqeBq6x3f4KHr3avixNxs5rU9kMhQwkXFMmLV4uvDR8pJuWphdAVL2sG2m9Y6",
  "key4": "2yhuGzxow19cohfKHVhcNx6qVBhUEuTzhEtbEs4w9yyDbmFPxtDVNa63n6D3mEDFjc35fBwh3HzohLt7mZHYjnv8",
  "key5": "3rgeBpx96sPeaMZkXAgn4aCCTWruhAEY1H3E3zcCdH2UzggUrKQJaiXK67KrQgvLbV7Vb6T3kTVg4qapvCDzqvxL",
  "key6": "5E4Witp5D8XUtNhv2L22t972wyDbfHr1ED79ABU2FrTRTxoz3VW9jJaVCPy8hXbzxb6feW9YdC7dz2zNMeosgscx",
  "key7": "3Aq6cieWakb9FvHf3Y6qsBY1kd2n8Drz8oSkNPEwHuWfJ37HBZy7VAV8ZmKGxqTNWCwEmT4KJNEBQE4EztBUXifE",
  "key8": "2pSr42VACHk8o5dKzrgk4D1oj23XZ96bBw2fuscEwhxi4Q1mdWoPz59raHzYLub3JrtgrMGD3t3AQHK9yuNPtFGC",
  "key9": "WytMwfgnA5iQXF8PyYbxEW3iKdPjaPApDkaqtoU2quGgWimcz5pKEQuWJua27MgzZ33TKVrSijcdDwY3CUmFcNu",
  "key10": "2pwWF3oqAEWKDvPf81vQyEHxSN6rW2h3cowmpZQnhCBoKS7J4HGNbZNvnNJqhdbvdZZu2g6ALWQvUivMLtxD1T2Q",
  "key11": "E5Jx6XrVki8yM2sjKKrQQjkNgCRwFw57HAvPFaKtW9Yv9u5YqKrftLZVzYvUBVnk49hjLsuaKTxjiCpiW5ksys1",
  "key12": "F3cKiEuZdBUmESbpBKvSZVosVXSCDojGGqRCbLMKmFZYkFZfU7wyqYwdS7XKt1zFVV9TRgQfs1f3GoJnYSixGS9",
  "key13": "3CxUammAMZuqYuywfy2VG9C911igYjqK5R5qeDGkyMWmR3D1bxQrj17PEaKd139kdVnrnFHSamd47N2WEY3AazPz",
  "key14": "4dX2ZbySSY3b2qfzJSNwgWgewmAJtGWz1RrAdVQE3gUyW9TyBrReUCb3NANSFkzSDQModrKkLA2gomLgDKsqchwV",
  "key15": "5UXnaXsZjhAY87HbNAmLmtnpWgsTPHjVSFhtKriNUtSMGnZ18fMytmEa6wQ1MMsDjcPmtz37UoZkLEkMZq35XFZD",
  "key16": "272pdk5M9tsoKmHb8F7jgJNzuHrNUfDDiKCNxvYJFbM16QPpYmtJLLLKyMBsZEEPcYpUJgkZpynB1UihcdVY45SQ",
  "key17": "4fNq79pcLFoCTWQVQ7bMGCdq18qpNWVjJPi9Zgm2X7FpKja36Ww7Twq56gUAXPJXDNHzedUE9kQR99zHKboSYxSq",
  "key18": "3DYikckM5BNXRo6TgeGs9NpiQmDPUNrtf6hcakbW6d7sEkzSehfGPxag1syeLZ4RRB7r1pgoSRkoeEdapua2hV5Y",
  "key19": "dTLv7snFwt4cwyarR8gFMhMTRMuR4fviP2j2ftJn8sAE2bvWwNpT8qpkVbQkNEHb1qC8bXwNsRyAXJ9dMqxDZ2Q",
  "key20": "ZgYBpK2hunKYYKkRBDuX1ZtRyMoU8fp55tWhUmgyQ15ma9sbY8eHF2tY2fSU5sWLEEmniTgPwQMXzhyKPFpKbwQ",
  "key21": "5TFJA3Kwk8yWrfr9mYLUK6qwvofPirG4GeAGaFSDxWP7EfT5nBD36BsuUQUJbJkKb9DX6XkzymGbgsTQewt8fCwx",
  "key22": "3pmrNJssowuW13NWnwF7JD8etfdWBPJVVpkgkWszJ9XS4mYCy4yW1iWkcCzBQHpT7unvt1AvboNhnXN1Dhb8VXLa",
  "key23": "5yerNpHP8gPMcboCrm9E2bzVZwEUxqkPWfm4tXW9wzpd6RhNtnEH6UFFcS17xD97EcDPuYatgxksR3V8hikRU1kh",
  "key24": "3e8hhVxhGuAfXWCAzvw8SLmtyT64T4mHeMndhgJurCjfUA3TLP3qp8E5ZWudUQF5rG785KvjAvrWqAK3b3zBUegG",
  "key25": "2SoQQeag8tdswtqFP3ukg9yV6TWopFsSFpt9M9utv74u3snXe9V6uZ3ycQEKYvJSzcxWFAhtzWXxmTqukStUYr5T",
  "key26": "4wNrWq1G3xe6Gb1ZMDkmh8BwqDwz1dSiXFSFNwEJzY4CoxAwVfpdnX87zsNnhBKF7j9SVmh68TtHyCUwNerX3WzA",
  "key27": "2RXsR99LdAkg393ALWZUVmzXNZ99UaL6YdQeJrncmJYkcj3z18vLG5ibA21GjS41qVzckHRcqNPNP5qkx9pSGcre",
  "key28": "2YPDJBzoacGLcouFcJFbLoDnvxuC86QJfBYZ5jk8MpcdqHHJHPWnzJz3hcXFXEntfaFo37M4pakshGH4moHDvyud",
  "key29": "2LVUDinPbyMqEkt3RzPEaNstfKeyxT9HXyUa1qduQjznwjbGSVHJg8sdnAjafsoKJZR7iTrw3ZD4VTZxVYvnWZVH",
  "key30": "46ZK1zbFNYtvJP7RQxSaYcPcCbMhYt63HUhWthQujduC2T23JPrw9J9KxHa8UhH4KKzaoMM5c4r6vcN6yenVDiZF",
  "key31": "QnCf87XoE64eos4uyFntV3szz7Fs1TTruV85FMKGsVyUZ2jzRCW7reQj6ivkBL1jhGLF1ymN8Q3WE4TNAwDET6A",
  "key32": "k53krVvBbrbbFD5twm33XFjX9JA3aQtszMp1akAkDGFb48NHWYoic3HjgbpyH5ZLSJTXcusQ2knTUJLjfvPCXdv",
  "key33": "qkWHST6RNSKU5EXhdSwqDUzSxwLYCwY1NVYnqfA5i8Rc2wq7MsbNi2ExamqAnbZRHZ58kjHhYmooUtqy9zCm2FJ",
  "key34": "3duQcMJgo5oUmQqLbq4zYmPq5DUYza5pUAYNtNa2Nt7gNPKn2jGLVPHtXYkMLazmjLaTRneHrbRZ998tcccjYazo",
  "key35": "AhTjRCsq5wRewJ1U4YR8ZPqj6BLe39TJdfSHysKoVcZ82w7sQjgNeS7M6ERTBpbub6SZRT7Pt5Mq4KKTkSZ3yCa",
  "key36": "2MrfVkvYN2CMMspfAUHVtUjLRtAYpPo4dbXTdXgTkchDLoH81baoKxcWm7wWrtapFqRrz1yhqVFSryPNyaLQUbNo",
  "key37": "5kFbrzo7KqRBsjd38ZiMpM7tcboyEca5p8e5eApTbhVUMAV3K9JWMDs1RECBBCmE74VUWgvfecy1NurwbwX6wssg"
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
