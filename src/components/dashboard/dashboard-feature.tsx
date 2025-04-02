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
    "RPW8VptJLWt52cTf4pRkTGF8Djix8CpC7GMiw64QHHkAEWqdC7c6rLoricRQF3b2pQg9tvmQCbG7ZUNdZKhjY7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58CTp5W4E8fwTz6tkEvYTjmPy6RM28ZEqTHRLtmLk7fHY48P2H2UJsSaRpq8oasyBVZiNUshMpSgVwoqig1YPkWZ",
  "key1": "2MDTyAQfZ6D83xCXL4FW2JCAsUZ1adXF6T1iuL5siGE1SduZB7ZgviHg9tS5sLtuwtF1qbg2wT5yvXbjADZe8eVM",
  "key2": "5bfmSm3mweitWb6CtxMEMCUARw2SYtdrsE9gVgbUu6kUTcYArRmKGvFXaJXLzcQci1vVKuhqHnGMjULCTMgjA4nk",
  "key3": "4L6hG32htGgWqDwV9wPTQ4TfU7hUPWQcwpp3KZpDYb9Mkrmb92Zbp3987xJvMtscxpRrcfGAzR1WQsQ8FUWQ5xFv",
  "key4": "2n1327nhjDhbi2HSxsJ85Huq1S38yHqVUNfz3x29NUHEDwf3DwMTRbTeDGP3neQN7To1GwcVrvhR4QKRgjYv7ykh",
  "key5": "5A4r1NE4YoMczbwRr4SwiUoVDK1nb2CEbu1BQofGF4Geov75E16oQePzpyiCPiQV5AiBSa8Z9GVdkXG6ZRdLMhbm",
  "key6": "5VdnSUkgYTjnXULqeSh5CxU7BgKhmZZY1UgTbnPErkmKUf9TraiT9vMW64TDDuTcvhkG19sUuxMRkehFDtDuTBwh",
  "key7": "35Cm5BcsxcDVj374Yksf26xHd2q1Wg56dk9WuZ35oNA3UktwipFH51uT7K6CY1eyCfEYE9W199FyRYx1qVqhHymZ",
  "key8": "2uw9HguVgfhEdmKraKaB14KEucE4PsiCxCZjUAJA5VbN4nwUab14MDXn8jnnQHRZfNZq848hJrFUAodWt2nTkwoK",
  "key9": "36ffP9Esincr1sXc47FpheQRXPtd65rYSvoAc4HLn4BzWccLaZRrwYBx9xtMbRKkumvPvYrzb94qtFVxQqEKJ3rL",
  "key10": "26gjFB88Prc7FSeyzBDBHhy76GCvzR9MfijwsdnMn4UYiYLyuQPUgT18tcdTDLhH43rLT3qyPevSvmf9w2M649Md",
  "key11": "2YzHSEAafpxUH2PxoPhBi4C8b2RUeGAPj1HmsboAi5bEcxC8QUPcMe7S9WQ2TuQtV9KBMBSkESWJMEYEDPn6DSKP",
  "key12": "oBBSmdJAPJucpz7oLfhWaNaxSnVNb3G4yUCEwN5WMqzHhzufXudEbaLVww3FBCNB3BhtueHAgALdPNVZawiHHHx",
  "key13": "39iwgUHXfBsR9UQhVbnvh97PMKk7R1o9BHuQtPjdMr7UVYmTknxazoAMYN5cZBAKjX99wY74rrVhydFCQP5AmZ9Y",
  "key14": "2hstJNpGPk9PK4zVZz8ZtmGqadYWP14Zac6zG53W8L15ha6z6XznPBmB3uvpRhfa7oFfSPJVdsodFtwMH3prDXB",
  "key15": "4gEVSNNjRZJSDaSzae9DWHeNW4hQnbNjuaA2hiWQnPT9hdSt6awUNmGgbiunUaYZQiBtjMqLtJNdKbqxFV8Bd6HU",
  "key16": "iHgsxCk8FpBPFKYE2sxUjy1MVriBYfp2zyGNbhb2yAKHXJEccvugncveduFM5aJyT2FbBS7a1y92WCNLec7drQQ",
  "key17": "3MN58vEqH5r1d11eEsvsHiGhWBvEzcuiHwFMYc9QkPqfc6MAf1cgqzQKtP3fLeGifJ24JGYNtUa5ruwmyBQweoSu",
  "key18": "3LbuwRbBSSZZzJW6D26bm85jdGicCpMByCsmSGKa6nNxWkcgVdtD3TnZYBJpSkCwrYVCwKz6pkTBEBx38PEWdurq",
  "key19": "5UsH1YeynpbTwpwJfCDw89pAFoXJzxnJwVooZauiwdMgGRnmxLqXijTribc9hEPKAqFXCqK5SC91ka1hpiVdZQYA",
  "key20": "52Y6GJiXxskgsE4tMAHJJfuvgvBtkyv9FmXufcVrJCPups6cw5xeeGHwPPjNnAeumtWdTkTec9jbAi3NVwH5Q6Jj",
  "key21": "4B7X88fCG27YHTVi2gdJ5ia3myKwaQEFwz2xMiSotsixuXnuGB9e4cUsYB22PZpRTJFr1gDqAJTEcJKK4NdUSqbi",
  "key22": "37mZwspVssewsDSE52cgKV5vNmF86tSMixmGHVqwsjFef15R3Zj5saLmvSUmcSL1X1vhD8wJSucFxnrvzhDFTon1",
  "key23": "5dsuoABMiawAPFt7yZjdhXKw5MF4dzrCxifnseHENCh2v2cf8QdQnghTeG8Qa1Bb9mBwoVXqZYraKattzjizfa6s",
  "key24": "5puP2bMdqAjbVt8aWraGyRCTfKF1FPk1kmy3zPEiMmqe4vqcNmavLh4BLtepJbeaco15bzRuTKqGmhcPregMyRoh",
  "key25": "5h51yB6VwGd1Ax4eNFQ3xiCb79MugrUsCHbEThcjcQgpMhhszLst5CdGBd2MdndF5ohdrV6nFN2BkVFpEcVz5dZs",
  "key26": "3RkuxQqmgUUCdgtenhm6jmXy5r4YjdSzBFCzqah857KKFZSv6zeDr7rYHwGt362Ea7nQfWCTERCyvwZM54Ze8jqf",
  "key27": "6168uKgaVCt8D53fL7w41CL7uENYR1m4pCjsQWtMRbonUC9i2F2YMAHbRmbwKmWshtzxq7HxnPTauDjkcTuQBMDo",
  "key28": "3axMvR7pQ8aQzo2U4SsxndwvPYc5LsYkzfhXQ2KcDZE39mRFupVjcKtrGC9bxjZ87r1Wr9bWRTpcptevUjMcDGra"
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
