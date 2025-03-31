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
    "2prQjjYCNdoH1tHFJwNGzDRjE37dYskvd4Zq3gPr1KvpJTWfmX57hzJNhLZS9WgFmpsaCM6hLicrNWFqDdcGDVT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bH295Udy5G49D7uffsn3r3XvECqnPG8FCfAgnxn9Kb3hfyM7XMjij2hFYyT9jU8gWMvmHih6upTDGxrMYZkqkU",
  "key1": "4BS7Mai5VBma5nkYou4U2YXugi5NQHGnjdwCEVGv4FX612KjEjTBGYMk5ABCdxok2N6n7rYAiY8F3p8fpa4Jd8sA",
  "key2": "126Spmgm2JffrafK3tHBtH4dc7XSg9kTsz9KAYTWYomLWYNAXmZ63bq5jrF1siiKk75ty5iKzzvjwAehbnXv1rWa",
  "key3": "4Cegr2xrdzneDnCn1rRVm3phPx4fDcLvEJ9wQNFDkgRTjmQ34Ntei4ZoqaRbAMJUZwF9FFKVFVHKEaagEmFmtLJ9",
  "key4": "28rZ4viryECc8Ubketq87HBVP2LKFSLKCnemmMs2TvjwNKzuZ1r1mW7E4N5S9CCWcVSN8vX263VPi56aWBwg7atw",
  "key5": "DFp6p25kRETH4B3XxycuFnqKx2a3ig9Rnh5xoVFmk2pA8rjGmDFTTWceTFTXe7H7SEPZt71SxUKCVEh3MUqUuzQ",
  "key6": "4QDws9xBMS9d62rZCpmYdfF2JQSGtpXFKb7jNFNovcFoBRVQvnmzv92j3D1ebcjxRNfQwbSDrSpu5L5p8jVTmuPg",
  "key7": "3by19SD6XPY9othDrTPnTrQENCxGzrDojxLBZQyWD2Tb7ptrhFnuafC4jMonmcj9qopWkJhP2XaRGp2aTdniUevU",
  "key8": "4M42TGjhFXAgymQzNLsZAcTtCAwm45oLC52jD1GJ6V3hXECawzYysQBB2ucQuMybA87MGpGKG2jVTyXth2YYEUN7",
  "key9": "5AJFvLmQ3yvQGLd3VNasCdFXvdsz5e74SKZKijReE68h3HUJKu7uzT4adNM5C29SwFaiLruxqhGX4XKHTJ2Sqwb5",
  "key10": "3qYz4fnXaQjTgQUbBunV7mtsgtRTRR6UBDCy8juJUA2sKaFi6MUcqUn5CW2qrWAJZRGGpJeBDPbfU3fHgmxvnWhb",
  "key11": "FrxPPuXjDWY3UNLVBH4UU3Jw6SSRVp558ukVSj1KLvzDPLiiPE79xJVyx2Wn6tiWdFhBVxDg7Zy9BZkB7PaNk2e",
  "key12": "x14L1W2HjQJDepSb23SPRuWbwjUNZmS7CpRp1pdxAitCuxc4ifWoSZV6pAqcUsbvxPXcAYgMuh8bA4LxLcGLnTq",
  "key13": "3fTYQnrZqroyzaKpWcCtvrfLXLETR5yRrf6tAKXWbukWPQLjCviVaqoWAdUHJQQUt6kuDRcinKqVneA5FTpL3fKw",
  "key14": "4eawB5WRqkKBnfHSornCokFJ5hosdKoje5CwwZh1ZCMd2YL4C971tP25ga6SxSF6avo6HiM2cDk6WgsoNmtKe2bN",
  "key15": "2iKZZ98uae3QLcfPnMunFU1NymMr5SRACxhSv6qcuZRQW3DGpy6tTKMENPeSxe72BkZFKBVYSkgxuMUoPpLyZfxh",
  "key16": "2L1ARiJknhQGAWPWgfEwik6vkT8hdZAFLFWq75wyxqSu72kYuvMeDkRSVwuyaHvS1q3pRpTaj5VJLBAHuWZzfSEQ",
  "key17": "NdL2MkgUzNeU8NYPTU11HNqzNnuN8q4QsNh9GRCi1kvfCKvaY5Q7E6NYvPijvxieB7LxbJqz7PiwGePCv3XRfm8",
  "key18": "4WPUmgYB99xTfGUcvnnuARZ8f8HMKmHJMgsU4v7Sma6zLSc72cgHdvnTbjyxXm3Po9uD2RB5Y43bSCSV4Riwx2iu",
  "key19": "E6QnV8XxBLrpD7Zh1DubR1jfR3dUhAwkorhE6S3XbX6vna5iEwLMbKBo8fAnyRZ7ChY7vuKktFCpTWbci6QWdY9",
  "key20": "3LYEtqhRUvfExpqzh5Jn5YuVh1abkEMaGTjQwnMxiTzwkY2qDGuqD6rnrZnQzFhSsjnowUherWKsJez9HZjEyeBC",
  "key21": "49cipuVej4gjaiHyHEXrFsCrdFsALEpSyM6YDBsNSJQeqDc5ENxHv6kth9CLx7CjwSoYWHvs6g1ySJ6pQaVGmcdy",
  "key22": "3zoV6jEjKkiL6D9ysHfjkgeif2VJPmNYcJinNqPVxQEP19NS9UPFBkQaWV7gYeLTWRdCtFAAATefiuCosQt41sMZ",
  "key23": "3o7o8N25Wsh1CAprPPHxbePna9VV6FFjc8WRjMYE4bfGpodFb7yZQ1uqKhooduSHA7WxrMgCTxYc75TopthZLm8t",
  "key24": "5KDLc4Em4EKYBZ5pKifWvgLXiyzRZG9xD2ms7JS9dpC8pn3mUE5Xir9pnxbbfR9HyFsvTkQiabTyd7BFKQq6eRHH",
  "key25": "2ZmYDJmNDYvbyKyLRQSER83BvCvv1NwUH5jTGk9DTyhKAnXe9HRk8xX6ypPgvNZiCBVaHqbXLB7hUSfXWhzuSUSc",
  "key26": "AFaKHSJrBWyDV5fk2EsLVWyW6hzbd4eUjfXYZoxj8qGsPv68ZJA4L36TVonNgjvUjDkPL9U4GUSNerMeC9qVYiT",
  "key27": "5KoAuaqvoSa6asycmTtn3EpN4DPo1JeTkAbz8B86yt2PV1d8Z1vtCS8HQfMMNGtzFteFbZVKaAWwr5hMA2uSnVbD",
  "key28": "3MYXKP3y4Q2Cuu7R1HxUMwpk15wfvkSX8R8evQTCxn2jkCMQ8HnKndhYsoEqT5t9gcMB4xCY2XcCqRjV27u1kWr7",
  "key29": "2eqr6KVCQyhcjdYPw9UfxXgVMohqs6y6hARuft15KZnKjH8B24WfFXZKnC5yMXC74c9kJ2Kb16iL83TCk7s9vSQS"
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
