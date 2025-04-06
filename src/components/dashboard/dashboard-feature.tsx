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
    "4g3o3BQPLecvYEixgmNZrPD1kpcLFBKKH7u3qLy6Hgswa95PhGo244zYBYLW1c6KmEaqihVSqoGwnMVpDpmpdiPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SSbEkQdzgTVeryJ2ve8rbjpwC2BPBvUAi9z2gs8THn8txhTFLHZdWwxTREsLFUdmH13MZn6C5wC4AndwUxKjbrw",
  "key1": "4AitJqfkhVw1HmLq1ANYaJPcNh8yA3na7DeyzZ1kHixAh9mpyC1wj11azeobzo3KXZQ7VzZCHgSm8Yh4rFVzXNZj",
  "key2": "3bnMjWLqYtAkpgcW5bFLL23CDqYJXMvDCuSHQfmURm6c4a6joFvV56RFT4C1SjAFTfL6eJXyfodrEB88uEihZZgU",
  "key3": "4jf5QEgf7Yahq8wzKh3MyYchExtSGBzqD1dBrGHFMijqU3uRczf42WKU4X77huQbniWdFZkeGdymMkafSeyLXspW",
  "key4": "4bSfjAUGHdj7Aso89n6WfYCeivEjfE9DTU4UTgL5D5SjLc6DKUGspcmXj8Ki19mF9ySA1wivectUDbE2UjZiSfZ6",
  "key5": "2Ftkjq7td2wTAdYfTA7gTHf1GueyoFeccrUsMuA39DfMqmRXmWhNonBnNDZ6VNBRhmbNpr8c6QSqG8f36h38gXci",
  "key6": "3XgWFPoksYdJJLhegwTnbQKL39SM87HhW8GmgFaZUoXAT2gPNVMmybMVHnwkgZsc1sWZMZHgYohP3GkxLR4AxfiA",
  "key7": "3JHZL9sNyzji7i1fz3oFe7jguaXMXiRF95tLqcLZnjmwez5VXuizfnMg9eA7M6BT4umfcDEbHqYXLxjwyuuK2TKE",
  "key8": "2jW433xNeDMWo3KoRV5CMrAtUFUUh657Kv9Exyf2EWJMxD6i9w4BmsxxPReoKSdX466xDdwqQ4JEDqYhTFEjHC44",
  "key9": "3Bv4EnhX9pXBPu6EYZUNmjd4SP18s7VN1ZBc43wqKyc6zjVPWSfZAqPfQQeuRarr9HLwTg2iiK47w72dvWiJXrwR",
  "key10": "4gQ48AQ9ndp7NbjZBDxpyEU4JWy3eeUtbwcV1Sey3ESJVmwAEjqSdnt6XmiVzES8GoGiKKjY3oSciPiDG4JvQ7bj",
  "key11": "3GZ9bap6JS4kukX1WNAxX2BWGcLMLdS4r4WFDTiA4yS5kVf7QJfhLLzBEvEWZis6d7eQJVGRACzwjDJ757wfkMgy",
  "key12": "4Bno5kHs2LESk3vxzLRUPgNiXA7NUydt8FohzhtpRKXecBcrrajvM9Rt8ZiGoCBQd8ocao35JHSKs4A49Tfbtvci",
  "key13": "24Gze3fY7NRYeCNoYscvKhfH36gYaGeyprPtA3nZQMLWzQiczDhc72qNnfxw91NNs7JUWMeTcBAiDcsmFiDkRCZK",
  "key14": "VkzC7egLshWEGDfJheTjMBpkF8qAW6uUTaDkVDksci2ZvrDM8kuw48FxBfopPiXgrnbBMpUv4uEnbRNozWYAqaG",
  "key15": "41gDEw82yrZE67HYCVSaR9A1VxFSerbZx5BBX37dzgweLk7dFwrY12VkXezBkxy5nFHLCzvz91Hf5SJcfGJ7XGtN",
  "key16": "5ooHuqph5PPRjkBXcs699iB3PeCuFU5sKJiKJqPHTo5PPyFvo1SM18K5fXNNAxNwxSaNUmSsfDUMmGZAstxs7GBA",
  "key17": "3Hn11iS3D1k8LM4NBn6pfN3VHDokmhNu1pR3m6e58HmAtdhY2Kjgre4UQkiBGsSZkxXJgmjrD71r8dShsGbokBrP",
  "key18": "4mnffKxdWqoSiBW4tgjt1aSG9owQUgbKtiEonUrogFKTpckbNvBgYBF7JRjfvHTuh8eRkEJPhjot5GeGqQyRi8uA",
  "key19": "4VuvW6mEqktiPB7CgcqqT9aMiYdsJcYUF29MZF8BZfv1XTMggYUTUi9Sj8fiowD7DdfJWkkHTNjg5rj5H8zoWcew",
  "key20": "J54F7F7YPM7MukimHerppvALgkL2YVXv1SnE1QtM7QbEdkJ7esTetJYKQYZNZ8fVUCXG3MuCL1CxgaiLaTtf8HE",
  "key21": "4NeEBUqraZsNuLNRGYEwv47k1m9yH7bEQT6jxNg5FPK9h7G14hEEwn3zNy3eLivL118oQtPthphVzpdrJRBSLuij",
  "key22": "5nPtz7WiHn8mxUMWZ1sMYMpqdKNJSaWJHZMgrPqWjrSgrDGLfckFhijdVK3CsbwvztJdejGnFWWvkiSvXWXSGMfF",
  "key23": "aaSWeEme8ihjZnRQZ1TkaesnC6QYXxaXoiR73AhK3BvTo2poK84hdXYmPEwxBvasdaFT5o4s6QeVxjQB88DrnvE",
  "key24": "3ikarmwXL5gRqN3VwDCV8a6ebtoqfNT9gXefiQV87fGJ2RcQ4UJRR2MQqkQhWTAv12tSQzZ8JhYR1Bnvhb2CQ7C1",
  "key25": "53n3fW4yUCPKqtfYoP2kUZFWrQZvEwjPYD3H7WNcwiLWGoNfhZTzBYPpjLsMNXnrRRYRi2wiEzg7W6dPunAtkiyt",
  "key26": "2uPSjLCHPstxhTjrvkEFKgNRL658UKJUKnminTgHRgbwtT4RVKnTgtMDsrGmaXWuGwhi7gQEurwivtAwnnfwkc6X",
  "key27": "TTDQxSNQ1awtu2wQnn1a3d4vwS4ogdtMpXBE3RLKFCJxsWSUWVHjJy3jpzrLEAeYavLf348MtaqvznER22E6Zbe",
  "key28": "59BSPnX6RS2CvUvqKtT6mQhfCDyEET4Z1HMfRs8ee7bYeUDjS5GFRmoHktUuqL2KwH6JjHjkm54DHCMFRbLDqz3B",
  "key29": "xXZWC4D3cR5bPRFY3w8sQY3zZYVGwafTDZ4Bom3uMsrqyTCv2AV1aVc3PFe9d3zoJZH6AowmDRszMzM1bWvMp5N",
  "key30": "3bGLb9aT7iaNbRwNMZAKHtznC8JsTxReytDY9x8e5VpzmdaPivKpz3gxPFgMJk8zK8NE5yzF5bZDoS9vXAJGGjY4",
  "key31": "3H2FjU9ca4BXNjTToNZNLhocAQSsLFfFvf6BaSN7TgeVuiN4ETfkxRFMSZLwJNipzhcQZj2AguwsY4D34pRqhkLM",
  "key32": "4AzdcqNLYvjbKVCwDU1GpwvpiNJiTFSuF4ssexgki6gfcnPD5qbBrmwayvRKonHYZ6HkkNUcPVvCsGwnQHYFM1Bo",
  "key33": "6uUJKQWwk1EkQ8rHRn2iSHJb2CvSiYQgjnBAU5RECTSkSpXJNUk31apK7Sy3FeMmkAYVaNB6SWTdpTZtwHJhDFT",
  "key34": "wZ8cJpNobcLYvyQAfX7bRVAX9ZYZFKKYcoeomBq4hqEZ4yWshso3kuMQBaiBKt36Da8PqyzqSmKQWrGgxp3jdP6",
  "key35": "2vnbtfo48zr1rDpJaE2sChUvnjSBSxwsSwHuj3vKpL1kqCE8n3GQCYPnJpkfe1bkQJ6QdvpNYvhyM4ueVKNhoYZ4",
  "key36": "3SvD9gwj9TE3pq3a6WSi2LY9KjbJAsm5d61hdkP8dWmCy6FtQrPb1xzKnJrfsK8mauZyPar4R4o5RapdZqDuoqc5"
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
