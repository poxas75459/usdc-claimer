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
    "4aQA7LYuZRjDdxnfoExV7DFBbHhqCg8UCZogxRtTbYNuemqwZtNRjZhYwRSbq97Pv6WK9VzB83G4ctyabD9BLDyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AJiUZPqLqoYzEjFLQUZMDk8Y9vV9kmKMRCv8RNY9pSKt3F2dEYEjdJCy8gYPTcptEvobMiuS2tt3DqAjabKLLvL",
  "key1": "3MfAztW5i84NQpvpwFqwzAAAWaY8Emi47K4nVUTiNwsyfn1SqZRfUJfDwYekEE3acxbb7Ju7NDPDxtj9xqpx4yga",
  "key2": "2jTePwT23oAoSFycmzQ4xwPJc9qMKiEXhv7JSjoD7rRE5em4ffSZTAvpMkutRDnBwmub4se7dbL4CmsQxZpQaH3Y",
  "key3": "25KbTN69PR5CP1BcMU1SiKbxZjyXHydEw1ocByNt14A2zcmWFCUf2N2BviRBiwAJSfpgz4zaHoZCKS6KXzT4hwsV",
  "key4": "28fKvRdppPzf4XJi6Kh73wZRKvV58foHvr1V2ZyCQE5Uh5mgwz68xR1Xabivzp3SGie5QvDq3pjN3GBTBVahhbq2",
  "key5": "49cUtCj5HC9pGRqPRFpADJ12yh9rVDVvSjokZu1wFvRWyQwvgdbw4r7CMdBYUeQZeGzadRLiSDKMnDHysmSYNSLA",
  "key6": "44MSDFZ6jL29KTTECGVQEXhMcov4bpvU8G6RmGeS94Yqtsnn8RWn8GAsKFomp4USGQkc7iwfUYxhigxJDup34SRq",
  "key7": "4rRtFCGvhLRRx8RvMAFeyVkAGDjdiasH8CGjABVAgaExPXfnvA1JJqHFvQQ59MGunnvcKh6pTv1nrPGfcYa78d1F",
  "key8": "mQwGMg5nQAK7ffdxSo7SinQjBw57mifPay9ptouwK7vixHMWQGnQRYWdCuaxXvKeeMfa7XT2wwCmi4iELjF7FV2",
  "key9": "5JaL6ZkFV9B7SG1nAVNzX14YTx9hXynZZnWEBeAitjt63LUrbyeApX1d8CaYiDb1c3W1fWY3pPtCYsneQxM6g1J",
  "key10": "HNCEnvzqhnziHNVn6wc6kvySaxDaoKUaTRdDeA8MS1EeJZKtCwGLRLM8uxpjn8en7z6eUCgvfscTYmu95qCkRnc",
  "key11": "29L91Xa1JQLVEYTP48CCRudzVo2gCzbMPCqnoGygZv8uxrgwiMStUrAQsjEBDi8EZmyZAQWz9rvggZT8cvmR3M9D",
  "key12": "2K569JLnaYTUUXsTaq6JtfGhzHKLFVbmN5FibkUP2jn82ermdCb3x6eV5o7CcqWqb9i7ueh1KH4XbLGXM2CpUCfo",
  "key13": "4bg1JNTzRqsRgUL6aMvPckTduEVNdbFcEZ9Mr2g6TBP1RvmAUfJ5Bys3kMUYJtusv1MM9Ff4fT6uw2jAoKMhcCa2",
  "key14": "57iCsk2QaFXqikC7ycQF64cpa9UzhMdQzd2fKTnAC3Prsd9ACrsgFd3Cq6ZzuZTevXrLTUWNGok7zui1nGQ12Ctb",
  "key15": "4WwyKGu8juUcxELJdBi9Hgyto8qxzknbmxdsfeXnDVCm3poNpH57NEU15obiPJGa2cpiAA4QvvCTQwffMKBGm5D9",
  "key16": "5tm7TBGe8w7AQ1pqgAAqHgBtzH7eqLNmE3cZjfzUkRP3JyWMdMBXJeFbCQbenaqgc6Ue6kqUyyXGatg43idvMjKd",
  "key17": "3JcqPtvYXywH5dqq3jHccM2K4F42rcC5XvA89gdd7dDeUdNyzGKwMxY3XDUreovSqq5LKdAXdzAoXacb3ae8xyL9",
  "key18": "65QkcGDT2YMCQdSNEsadHW8xusH12kZkZceJ21dQDTZuZscjjsCu6KxyDhGfxEaaiw74HoUq7xbZ6wLbfEQpXfih",
  "key19": "44rorBpCnKD8oZEDMfKTQi8qH7rJUA2UKsLBsGa975rByMMVfZ28fqZNB3JbWeCCKbQYsHivrSxr3E9sbEj3VaSB",
  "key20": "P5wBDL2qhamQdLEbvvPD3Hz9rih6krRWXayUNPVHU1ep95EGGAWgoCrd8AV3zj8M7iVmxbY8iYy1UBZdSiKqmds",
  "key21": "5zqFxziNPojtWMyAV3S3ezwDC3qTtzCT6NSkC4pyNrx2EsY2sA96PRYYSajc4Ht6QYV4drWNxeUKD2kqCkKtLkC7",
  "key22": "48oqVD25RiXtzNnvPse5fYmcfb1yF7jrD5HM1xkceMsyUFYf9yn18Bp134XnUm7dLrgmMxYe84kbkQdto26aNnaP",
  "key23": "5rFP21D4s8EsQR62NhpU17EYMgNrp3BtkmbX3qj4eUqfb3XfPwRgkhLVifiJDUC2XwGFPvBobdi6qdie87NE19at",
  "key24": "4MaWmn1rtwowb2BRLvTE5tX6QmcxXpRBFrRQvXFrVvESKrcpVMP6Mt3M33FbXDj7iXZup2bRhb8toSTp7RDPrRLC"
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
