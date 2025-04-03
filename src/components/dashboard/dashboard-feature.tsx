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
    "3yuBQgd1cv2h2256NMSkwP1JuL17fk3Xq4BpZ43say7QhDFC8sUgcXv41PqRhZd6KHjTDhyJ65AfUBeRPHYMAPxd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xweSUnzcQfLBFdWjX9q6URN4QRQkRdtpgpKw7dxkLRpkarTEBLjktgzQuS5f8zsJ5RyDains6eyWHL7ugDvD6rM",
  "key1": "6p8XpxeeEwbQbin7ZLjXH8nPW6GagEJLkv9JQiNrHQZfgmt6fC3DzTjbNS5eceA9izgAeWNeKqwWMeGStmLVAnh",
  "key2": "3QzQbM6KfefoGARXQf3X78Mb3sBCpX6npwpv3ZwYjwRJBvxjkAWrXZQLVa3x56Cdpr1vSFp4XMCrF9eMsjDAx2WV",
  "key3": "32nfGRgdVAdFDP2Jrw3VAZPS7ZKtsJYsMxgfdHXtKKmEpGxJwhsYoqEM2yxrMqt62U7Q9meZw47nxSwkPwjsupXd",
  "key4": "2RmN5jAnbdHhcVmfjK6MHtdzMtcNYi4QBJhbHiDrcnnvtbeu1CTG3y6iVsB1s37AdGQhuUnuAzeF3Q2TgJWJCqNt",
  "key5": "XJPDD28w2ZYk9AgmKGygzttQVUEQ9SGrpw9otHEhqJwVSY5KKfj1jLrnbPuA2wTcbvr5GHFA3KGibM4oAEFBUnL",
  "key6": "4wDjZ5WZgUAxFkDK3i1kpXWmN97Gqt39XtQLKBiaoo1WKZq86utTFJzM4XR8agbB5WHacMJG7SSFRzqThfaWVAUp",
  "key7": "2Fv3uByjox28SNrDdQhELjcRdZJDMQPoftnwhopjkhUMKNHxgTGTh3tiUTMppqaK71TY3XkhUJdwKCP1Hk6HwWfM",
  "key8": "67DMmdWTWzs7ogu2LHTpdxPpQwgEPoUcrkqEbf3Pe44U8ju5A2PbrAj4Jk7oTZmn1tdJokunZx5Td4d8QyNkyxS9",
  "key9": "66Qe8hmZGHUHX4DsWTa2uXmxSpUTCCuZH9Y2wk3u14WK6WWoJ3GhfesEf3D8enacNHCzbShgdxak3MDcCTBAKBqP",
  "key10": "5AapsyeBaZficGvY2P1au6bKvr4Dc6igVesJU1aaxE9udTRrb1xLdWPDJD23Uz4q3gtuYWnmB7UBkgdcDP1jkwWm",
  "key11": "5m6EXbQqXgwcR6gpnmihYEsjj5ZD2ScYApUwmoecJxLpHH2m3Z5HdiT6ybxew3bNAXadDWdtqxsPKMx3HJwuPjKr",
  "key12": "3sUeyuXMkeHmwRndXMG2xVtncGPELDuL7Adtw2u36X6GEQKyTYZsS8Jn21AnHZxRFgexkZ2qc7UbvkQ4bsoqgVFn",
  "key13": "2ffxnSShi76qkxx1ipUwarj8jBiALJeqk6KLg2VrCg2jLN4FFPQkujr96zrh5xrfWPQBi8FHSus85bLj9fuApc51",
  "key14": "4GjZkfFzk2398EH8fau1f9PNgafFMZqoEWMovb9kiRwVNqnocWPjPGjKKsXieUSzTxyE4154VJpanUp7aKQL7FKS",
  "key15": "5yQGF6LbJLTjLXyhQ86ddjo91sNKxegfTRGJyg4F3DoJDFq7bypb5Mez1j77yY595qMdAsix69xuPe1UDSUXUQ6d",
  "key16": "5BwBLr2HTgcaZrVbXxc1ZdnPe6afiqGDsvFoSMqarx743KzEpMWjB8CMDBX4AN7jGJJzkywiC7TLUPWpxRGPRuXw",
  "key17": "2jpe8Ug8Mde1tL714Y6s9BvJCEHBTLCNMLRfccGhTiEHPnG8vZmGGLELAt7Mp6rry3ivaMvXxJCuPWY5s3HevYZC",
  "key18": "3vimPyqXLwSPbXQUEAQm5WR1xT6F9XLZtHSJGQdwbViHt3chEShZMhBVcNrh8ZWhb3J9LZMLk8f7Ja6xrFvPfjoX",
  "key19": "25hd1rkVVjEVbdndHCxdKpgenG2fEnZ4Mux9fNTAmJeyjV55sie3sEjTRMJ7vAge3Dmbvygy7jreKrXY3Wq9gb9G",
  "key20": "4dnz1KDH5q2jWsiuSBWNRJFKUkJzN7gk9QpLnfUgrDpytHRR8cwfLsLXVB2Q6yRLpgQyV3H4zsbCsqwv6DdruX3Z",
  "key21": "2WgJ1KWZACKcvpBnjjRNbBkBJkbThyXCgTPoKE9tJ7SmqgrM5ZvvdPS8JYGGCvKgNyHJzNX3F54xUJsTKRP83vKv",
  "key22": "2jo8E5CDLr9uUAoq67q6Y8yGA6bXcQkmiErUcsjrR5fDFbiDuiP61veSFCq6Fkfq7uH5mGMxWmiMPJ4Tw8SkSb2s",
  "key23": "2FeTdCBSsuDZKW8r52sENnpmyBBnLZkGxB8C8jNqu9TeETuvoEaizWxgnkggRMNk854my98UX9gVAfpaW1N93yX1",
  "key24": "5nQbX2DDRcocxyR3j6n2Adt8VkKP1jdMuPmWdXvP3fZY7kTJMNc5EBUru4dSi3sx4agLSytC5WYY7N8okfV83EYE",
  "key25": "44jgMs46RYcQkJZMRmzUibRMbRdyUYSuDGGgrdA9LVm2N7cXvjkgx8RocQBUVsRPBo1YXnvCdnprNkzhKkSGLfke",
  "key26": "2TSpjuWcoFEj1sNv88dasjxgcBgCBYoEGzzfHxPExEKToDLbdUDyNFAmj1WbpdDNbzbuX8Ybom7F1PuFPiWmx8xJ",
  "key27": "63XMZy8ijQFhonm9R4zeRDZsfsJtQRg57TYpHkHamxFVtC8feeqHqm5g78iwncEdmtSecw4HkEH3aJMPoPGY4Bd7",
  "key28": "hEZPm6sM9NZtMBVqvQ34NzS5SWE2W77havmfJrtzXLkrJtBAzePMptyiGu73TTfq7sqsVast7dUNZvqKfr8Azsv",
  "key29": "66HXTa5biMbCppVT3F3WcWFtWo25EbtYjgFNjdfkeNPVNknXpoSRNxTjr3gBFYY1XBSVwucebpUi2XT3T2YjRSVY",
  "key30": "2GdTHEDq9Nvsn2yBr41pzT8s3pKkSEGQva82DFgACbpkFfMiNAVHhJStvG6mSQKq8QfK7gQfYDfhXFsWaSQ8PhD1",
  "key31": "46R8zYjy8PtDxZhmYbt3B7DL6gAeB59pjo6y3c96AcwoR6qXkRkmC85VyufPRSMhTpg5YDTrtigCTiEMSZH2Mcfd",
  "key32": "4EiY1L4SUQvDGG6kcYY2ZK9GQboKpNBGG2yyrFZyfJR4f2Ektvr3vJC1W6Gm3tL2WfdoAe3igKj5ARxzmp9noU2v",
  "key33": "gZ6jt7cj7r7u368CoQLnBHEPrzkEPEU7eoACfNhpi5XQANxyg5XKaH2xWYoHu4ScqMczYZCa7tQAjkUDcGULsmc",
  "key34": "4z3d4hs5dgk3ucsbhuARBVQb5Gku8FpHV4LEJyNMqoHzx1ANhYs5QK93HdcQma7fbxPq1AHd1MaWLcvY4jh7sQm8",
  "key35": "3oP7p9WPcZhGBTtvsf2o2MAaZLTeU6HQXFUfPFF1k4QqjbxL4ZtQJCNRC3HNvTEMm33BZRcadJ45Cc5Lshj7vEbb",
  "key36": "m6SywLc3P2FZLtSiBSWZEd1tyYujfzBg8eD3viA151fJpTwtrVWQVKkg25GBWpCQUqNfg4Mw6W8D5LSfRntDxF1",
  "key37": "5icGKQkQNH1anpikjfaUqHd8P7PCgMRBiiLCmF2LUmzy8XkQ2psAbujkKxZ9yiUbMWGJEE1k29yaPPyEXU6ou2ZA"
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
