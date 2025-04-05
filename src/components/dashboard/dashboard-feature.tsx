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
    "38KMhtiMUFrLr962aaSqE5sJSg9QCGp8MTkRWdC5Y7cc5gq74Hg74tTo7JP6sSNvS7Z5JYTxbKaKjaWZg7uv19hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23XmV1wthpJRgAfCkQ1jthG6s3c7LFxygEVWs1F4Q5e6CEGEorrNZrsYXytMMPRgXxpdVrFEYdSVRATj4Dcqg9So",
  "key1": "NxeX99ueUe3cSTzhbHNmQCdK65YovGSav4spwCE6ou76TvGP69tbvquc3DLKQW9y64nfr3BfVhbbY1NDihXbcNq",
  "key2": "3Hsa2UzYCVCL6KjAVAMmPYPUpZiJe7Lo4tT61723KLCVU5jmSuxqNn9vLsnphF6hEiT1cWE2mLHcnjzZN3xad3Xq",
  "key3": "539ZmzwBw3HHLvLmcSJciqumHArEN43NLx2GzQdjY9iNHPaVRAAoaGgLxbHvd8S8rHA4RQSobqR5oc9vHaoFXSj",
  "key4": "5GgWb9PyfWV5LQWvVvK5nfi7bPFwjQDfd3RZy97N4dUj4rxGk4ZKs7jeYdvzuZ5cqoV4xbN7Gr9NyuSEt8fnP1DY",
  "key5": "mPFZtPrvFde3ruKT3CCDdbq3zgfSDd4cvZ9paJQNFuEsHwtZZywmzQxmYLX5542cC17jBV1KtqrDRZhnx3bj9LP",
  "key6": "2rrmBUFCeAB37VmAGidpaaDheZfiR7CrU6MKbdQQDKE36veqZFAgG8hJopfFZKf6YwmM51aJFNmFUcdHnrL1AcTY",
  "key7": "36eVTSs1PGk4qHJoyxatSS82UuZ2jonD6eCBzDrA9GxPwGLBV6UUVfRg8gAxsfiupEz3SZAZC3ybPK3D8tMDYDGK",
  "key8": "2Y5FnDT1g9fFrwva34ZzVxHDnuFuW9tiQLt6GeiUxQvdG6vKALDJ5idBqDkd8nBmyLNAw8VuKCyu9ngAVxJ7Vuy2",
  "key9": "5TdodXXBbsr3riGZaw2HNoG7XTbzT2ZcuW6qyTbRdkPyWHqZGmk3Nt5FTAzj3fBhFQ7NrTw8d5f7t6siuuguXyCv",
  "key10": "63ksp3zEYrifHZmBD3dJ3iP3oQgC983kjnhuPowesMDti52xbxNQcnAn6cfx6d6S87yw5MZyaKxRL4PreqEWHV6C",
  "key11": "3Aey9byqnKWeSmVDAKSBqw9pmUzvnVPEmghiHgXx47rwpsRSXeKKaUC96ovna8XmJ2dS2pPHGS3NRbd1MHikDV37",
  "key12": "rotb1iL3UMMybFGF1j8dvZEef8JnKjrPHNmfx5LaEdwXmi4z9iUYSfrpSvK7yhLzfRqKhP5YGBKciXCoumRddXN",
  "key13": "2zHWi1DfBJKd2DX94BpxYxN3r9EHqWnXDnUKTP4QMWUf7J2sXbZEMRt8FZn1qN4dgwC4Lv2cHJZ2QZiGaUrKffbr",
  "key14": "mLUfAYgEAGWnU9UT627r5EgqsyYFw1DMPkQv1nEjtKWYeoGkZQMk8qDySzpUfLdMszxnuHT7PaYgDmWCHkxzERj",
  "key15": "3BQe5fP4BcftrykHmoT35qUHDH8Biz5R9QQDFVwiDa6KQiVoVGZAANeoQPU9UVdBk7qdDESUZRoQ8yHS6ehZUJ56",
  "key16": "2QN3LKbcpGqndnsabp2vpdLvmuu6GUkEHpG3Z5PhhLoJb4bP63vfmWNiJJbecJkfMN6t6zfmMCT6DaEC7JEcuecv",
  "key17": "48NoUfUTKP5wYqh2WRP1vsWRK5B3GfKL36kU9mVGnLnw6VME2syMAG5FTtzTw55JR5xR228oRHjBnHDmQXPLoKeJ",
  "key18": "3tMtF3Dm8yvMgxxfp6Mc3TqmxGbQYuuvQfiyngwnrCnSMGtMxF9NEEWmfUimRSoyskwpvAuVt9hnKyR857aTLggW",
  "key19": "4fnAYGiytVuyVhQRBxEuX1RTb9jMxnFMgatfvF42FCf6mqarFkX4zQ4gde9ZaN9xk2AXxjuHjWZUMkoNunR7qprj",
  "key20": "3A7sksuP8sdRAyh2wiqD9JhShVN5PqczWxaNzhzTqBESVDbpRSZB49E9isREiYTMndeog2eGUpK9JyneM35ADFCN",
  "key21": "wvREvbFjvQfAEi3DmBdY3QjEY2V1wkpibj5tbT513v2ARrnJ4p9MnVUE6n7T7JBqWPaBPKMNdork4cPEjW5BuTz",
  "key22": "4TpqvGSmHqeuKgVD3ERhkTrczGSBty5B2SJW9DaosqkCJ2s6XFvDu55w55zCZpX1DzADBEYTqic3kfzCjKBLv3m1",
  "key23": "22H6rjr2zURdgAjKKe4KCCGzaYafefcAJ6rpdQd7oQZQAe3UJdVvJaeMk64oPmcF3FhiYT5M4JunpRpXiKUMcibA",
  "key24": "4WR5YCm7jrYJ5tqZTrqrpmgt8uurWoS5zRfduxV2u2r7uXYFCHSTZgQDxejaT68muJxYwoGGQ3sjpzzjTJ5HAEGb",
  "key25": "6xm2E38mgVbfrcxF3rqTgMxy1ao8A4dYB8hYpG5gNGrwXr9HS1SaS2yrPbZW51Pdcq3ij9bJPMt18wcYxknvsUs",
  "key26": "67F8Fvvtm6d6JoGyFtRSCkeYEFbvSLL6fFSgAREVVpYvz51L7Ypr3xrnXm3y1TufVCUksLtGoG88ZD4Ju2tpq58f",
  "key27": "4Y2NertUrb9S3CsTGT8G6rWzNVvUVeSq6nFEur7i4DBPc317tjEpdZe8ZuVZqV3N8ebtZiGJvbWsBVfxY6SB5E7d",
  "key28": "4AKJnfU2ZKc77HBz4t6XCyV3XUmsgsgoVZKcL8QDZQTpyet6KpnTkGmcXS49zeV4bJ9agJWGFxNgR6RjUgBs55wR",
  "key29": "3H2mJ2A3ta2XZA2wgREbmfbbkdFzxnHq3JP34MPH2Shgd2iGxYF9PxwkiBfK9YqrHwDPrPpvRtFZdsLBY2F631q5",
  "key30": "2mQX25MXrDT3UDUBhi9stvZAf2CsfTpqaShkTihWeZGkFEEQtPm3c63Cfwcyf56yyANBnLib7ecEtV6yjjHTp8uv"
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
