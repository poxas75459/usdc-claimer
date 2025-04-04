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
    "2RZSGsznAppRut3Z4JiNdGZsXHTcYQjrNejWvT9YkiJEdngST8LbWFLw54dQuvWugu93zdZbMjZvrTfAtmDGLCcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "622AvRpRxb71dBVtAsbVr91jHG71HYnGKmzMV5EpWTa9oQFypi5oDxUE9DmgRtpz1Dqc7LfWvrt8pUR4M8yDpGK7",
  "key1": "3ENqv3qgEeUy8JejY3hRsCJvk6rRtwjktTY6TCdGYkfSyUwGvkN54adSTVmzW7sntYsp1GTbjCrKJUwt4VWhdUuS",
  "key2": "7czFc2daruqBJbwW15Sz6LHH1onr6Bg3a4GsA4sAywK7gcxcTceLZohxXpaSNmqeUrNSvzkMGHzHCETcE1uTetb",
  "key3": "2b58UVgYLvszcDUps6j5Z9BA1R6uYhGndK2NpdkApfp3CoNLjZK1sxWajbUWquhymxAQEnWwEQ2z3VeCaLQpw5Ro",
  "key4": "41ZgBWtUFQSNhRmYPC2baAYMLd3PrrtbQoFseQfP11W2mFoiF3Bm6DcuRib6bvH6cVcTAkWsyqeZQcZoh2DhU2CK",
  "key5": "4RzzU62mUszufPYwBWeTAW7T2dtunqWKxTFVADxAWfATFXQcyoZny3pGrdrNZJr4J8aaCgBe1dios85Rb2nPApx2",
  "key6": "456bD7kjQxryLCZmv6K8SRYmtMFfPMoP8Tcv99xDJrc3rU4u3eUyBnBf6UV8zcDMJ911N82pjKuKKHD2onsMoyP5",
  "key7": "3usjh5zmJpSDW55L1nqSERVvURaQYGX1UrYfYitmX7MxCRKYxJqunvcbcK6TsFMeas36QugE2nXsp7dpYaaVsaD",
  "key8": "4a513iqCa9EGC56RWFzZZV8n834LXuoDDeVr9boF6d3wswevktGgEcopY33PECDnv9f76U9Gw9s3thmtV6PS4SsA",
  "key9": "3KHsEQzFyKaPGq3iMYiVEfBBSjursLErxbB5weJB2UvbiEzWZ7NnoFVXwqeqmTkwLNR9WBobxcVVK17WvJRJozEQ",
  "key10": "4QCRp6zVvLWJfi1mABTSHS5Gmh2DF4Jybj3bMKZKPdH2rzmTAxaCsrwyGNaYDCT8qXZYDizZkBrLYCXHwCi2z75s",
  "key11": "3ue7hSAYzJCBBDPEHDW5xYxTyk7BFPrwDYZ3Jou4KshWD4HvCDc1ZFGMsitW652CXYpauqgNX7ZRu7NfcQhmgwg",
  "key12": "2dDErStU2oXFmgUYVUSvtb2iNik3HqqquKEj8HnY8eAiz5v5rBh4BakBiNxbxk51DXx1f6BpAPGvYkitNfNdf59X",
  "key13": "4DJfryqX7v3vvaM9cTobDLUPXbrHuVmT7oked5JCjtFmeLHov9CM4t7hTKNiQqcm9MkzypD34XLopdVwmL1SA7N3",
  "key14": "hdYCL7AgrqjvneCLVbqh9eLjd1EET7yZwyX3vQREemLepiLYxbm1owc9K1WDRhviKadiQGckNNuNNTudz57vs3N",
  "key15": "3thrGCdqc23f4dVYDTkfP3CVDxC6zg3DLxJPj2pfjsUHjhkHoKU7MoS8YUNZBqvQnXnWpHY4HUSeA6eEEEBhXYms",
  "key16": "4jahachERwTsyoGDx6NjRqweEaXyeVcniBh8DBS55DxqiDuCJMLqSTnoaLjhurPJFTwtK9tGm4GPsf4g1NYYsJr4",
  "key17": "2B9N8NjGYSRsfAe6bJMzwQAQJ8TjWgjmtT6yBozBJT7uPiwUA3sWNLmvcWJyQTSr4Y1ukkp8cx54Pob52JiRpwj2",
  "key18": "2aXUA34igpan8efcaz384LJV6MiUV2ozVW1izUWDbNdiMTuMQMkBdWa8AXgeN2zoNHhTCfn9d1TtcrCoThaVw97i",
  "key19": "5FTZoHfg1zAZ7VABFXyxzZCm6hxe6S8UwBMSLTpohaHPvNNcuGe68GYxbTWPjhTdYpyctC6ywWNtt38bRgej3x41",
  "key20": "2NbdrTRrrtxJRLcAmhZhu9VWDHEjTWa4eRnaAgAjSEy2mF3izmF8fH6R8TsMNZKsDTy22BeC89kALWkqmWm1x1zp",
  "key21": "5gAuiy17ADifpuJC2T7Xn1yLXABhzH9LFibfDdW3mT1synVgqkFRG9U83m1RfUk9mSLo1tj8pMwb6LUQr1gWWjfv",
  "key22": "NdSDK8A5mGtRQnymV3Znf7sRuuMmutZ2e6hdLXqbFjPzNjHBvwiv3Vh3B3vGqYPqJkQqn7qBmXWE3V9Ftpde4zU",
  "key23": "2rjFk76m6e58BGNvcT2t1VLQ2xNMTwfKr5mpLRF3Qcrw9AQrEJu4d9X2FVSAUyHSHRnGt5cdMQvhemRQR1joTSLA",
  "key24": "4swTupCzn3uEX62RxFkFA9qUJBpcwaE7czziacREraeAsGM6mRD5VYCuqS4KyUHugj1jzhffY29xxdjEjLzgRNQB",
  "key25": "29rPEhpAKUPenEghTMtq5GFVmevNcczd8twPhCogRVydRt7DFNchn2NLkKGEFNgpxQPj4r9EtFP5mebHrB5masLT",
  "key26": "42wYp91u48YDeTVfJfykeCFxvNcs4FXXEvQFR6N2WvWDCx8ihEfHcz2hXFC679Ht17n5mKQH7D8CfLfhTki1QAGz",
  "key27": "5LkpD3kCHVAfx68aXdwTLQDZKoTxgV1PU4S9rzaHg7CeJhG3PoR7EJyxERuE7tqBA5eiWmATthoNQ2Af1dRoSwMH",
  "key28": "4efNJWbNLx1csFDMdfaSXS5rg8zRqGkVmpQ6YChi7hSAdeya3xGGaTQh6Dk3wuhrzRbLUJVbxrQ7qv3E9bxrRqds",
  "key29": "519H4fA58J63yv7Fddz4u9MFBL7NLMv4fFFkRVVdakoELVMnb5rUg1dzzVdcufZeZs9WWr5YpnXwn3Ty4momgJty",
  "key30": "65DmjiL7M7Qhf5cD9LRKQYoHh87UfgtkPqngoPdCoXVerZ12Dd5cJQmM5CUAuCwGD3XYRDDYVN8GKitxy8p735KA"
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
