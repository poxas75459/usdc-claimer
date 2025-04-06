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
    "wgW48Sf3BmJ8Px7GC33evAbrjCsU4xALYiTz8sWwLFcw6w9taAeSYsKzw33Z5UXZpX7FDMPqT37hhns2gtg3pE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzs5mHvhFGsKYX6wcLcqL2mzWK4oHaUZHYk3jS3wvwdNQNVYGUAp5wPnYY7UozzWVJT1Q1Hsu2fZPohGTEoEhxH",
  "key1": "2xXYo6uxqJHxudVTCGC8UQhTSL2i3Mkda9gxXiQoiwD9sumkupPX2Jfj7aUv77a8QFeesB8pyFi7fYvrpEwJkUWB",
  "key2": "4bxWcCoFTPVhhzjCLyGt6UWR8mvmLjCznbovKT5zVcgdQQM84Rvd3kWDWBBax1EDS5bz8hnTVv7xHAikkyguqHeG",
  "key3": "2T1dPpx85DFF3PHkBw9u5LcBKZ5UTEV6xzGnvxJkLTYDjFpiuRVFUaL3zmH3kiQhifdRXwdpzUu1ycYtq13x2iTs",
  "key4": "2UfuWAvn2pwysW4ZGoWsnqHcEu4bvVxGXSp1oN5cgmRZT6N3s1yrQQFhhRSKY7Nh2Uz1KTEjr2cEcohXHGTffvh2",
  "key5": "4avqnX4b6B7rzJUbntCvhK3unT9AvdaCoBpjfQTnjqszEjW87JFo3Kd5svMv1D1KN4GXdKRcSk6Tb3dGQz9u8Gfj",
  "key6": "26k35vTTvGp3FeKGU4899kFb8dgELVRYNck6DNm6ZiAGL3EeF8zZkc46ZGZ9pvK6sigeKBFut21PhCKWT9wAQ5bM",
  "key7": "2hWjP4nbkXD9m7b74AALhDpYKUc2Tkj9Vgbk8zWYaovhQBT7q8TD36LPvNyw7eeNfUBjwpFjeh6BH2rrCenzmGHW",
  "key8": "2C4QbiM2FQFCrSawRsUFaWsQNKb7sUnNQZygxLbaFcpqgnh9pKpQV4BjrhwJF5MMWN3Njhs74noiASTe8mZEGsfV",
  "key9": "5wtHy8gDEpRVAZGX3oo5wDeyYzAXSasSQXSK4HtFz1o9FDjJKhmrskBLdU2Bnxkz3ZvHcnV1KCcqGfRF1E4NxxTy",
  "key10": "WCuwen78fE21vDyPV29x1kisrjEAs93KMD7RM1Py7V6jBerTin5YZFxpUK4kWjiov4viwD6sKydEopGwFRmqjWp",
  "key11": "47bHYkNN9CiQdEJVqj3Fmkrif6PUGtd2LF9Xo1NKHHuJmdeQpzgD8GGRYdVrB2QP6sHXP1R4ZU5mDqAH9xpSzLtM",
  "key12": "24VHwpqWBNuVM2f13RC4sRDrJcbudv1nzSPLve2qdNwyV2Cy2zgLYJTZhm97ERd6qzCjpVXhjMx4agsTm2DcHtuZ",
  "key13": "2Yk1GyYYcBYwxWjBAAK6z7rcsveyZfxzYH66cgVdFRn8EDfTvaNRav9VPxY8pxp5GNnTCDhSvjawnLwSRuowg2Fy",
  "key14": "2EmmvSQ3wZMpmPv3uUmtibnZ4HnLaPJoJAtNAaL9cghEDTLKdnqUmQH9E76jRXXMWdsUnYnCdtX37mTyHJu44avN",
  "key15": "28Ks4jsZwqoi1j8YhY5KTN4nHW4AaHej1MWDJ9eKNFBAMvdHUSZedXa67m5uZjMT9c9bErNXSoMpCg5JX5uxCXJb",
  "key16": "3wAJbQKE3VCSMyGeErc3hzU77s3zzS1wYX6EvPQpRybA8V8NgpKUbdX3q4b1hhZVt3Xy9rPTZu9fm9VPmJJ52Aqk",
  "key17": "65fxu2FSFyuNFqtGJaZimGNuwQHXEJBanpP5iBowgAk4yGaG9kTN5GTmpvsmxYwFks2LExHsbGCW2NG3EkoLMeJd",
  "key18": "3FkpkFh6GsD3cjA5us2nmPz31iu42Ww3bYXq3HwnuFA44w8rSbpsR6M62Xs7JdoTdisRatixoBeFHwejNuGKhjpw",
  "key19": "2dJ18sJbYXzKd4jPjGZwxfbXQS8y7bAG9ejQCPSku76k8tZHGWv1UV6RcGmNoWFQhWwdiXno5QdcvZUWump738Gh",
  "key20": "4NMFh3gQmg6boC6K6Ysc46NFELDs7TNx3PaVTSqMgrhRsY1ndTmvWUxszyGdw8rWYeKmqkwvECHea8rZJydtcVcu",
  "key21": "5WEq1p1rWqpwwNeEygUA3CpjNFVBKncuqKrJ6XuVqc7eEMT7mxgKVU2kJNvQHadiVyEtY2JNqNZ52p6JnmSqPxDW",
  "key22": "5gyFHAPzBS2d5fZ77gq8R7kk2jmz7pd9Dvw4ch85UR56p8RpNF45CtiG1WYefVHYvsGFy6vLuFUAUD97Fmn4G3Cr",
  "key23": "2WdCxRfzoC2FC1Q2Xe3UFFuvKtLURzzrUUx1nAuEB7btETT45iFRCvpZvGJ6ZN3AN7DLcjo4jxsmskbHsQkPAsAt",
  "key24": "ZvSikQzpVjGW6mD2NdkqjKP2jMoVCG8ZYfgQnnURwdR9e4aYPeuy4kjC3TaoxxFFvzFnyp2tqUaEAcxjbNRudHY",
  "key25": "4hDLYALSuRptxg8vKfaBhPPJPU5fgUcwNCrsVR93huRbRyrYPAwee8thFSUnYCJkNq14oXvbh7P9a2cFrTZg2oJ1",
  "key26": "5WKUogWX5nkPTdzagMGEGiSyh36WBQhnz4V7fUTLZis1MGno5E7kBP8bs7kSj6jT4YVUBuSPCRUBKDZgEuYAYtDu",
  "key27": "3hguPh2jdJgFBW1kFc27hBAmvyQBcAnjdWCYRF8wD9G8au2WpeBAq3fJgu7W9ktBJZWDddMgZLgVN9a5y71kmVvz",
  "key28": "3M9CgYCWA6oNdZYks1Ke9LgsqcEfirJ9GjyyYsJZq6x9fN61b7EjHpBm3Md1poPbbPsmfyeijG5QUU7Z9k836kKJ",
  "key29": "5yd9gfETY8VYQYEz4ynR8zWQ4pxgUki69kpdSn8RGYVrNdkRuVm4weYMxXjSpeht73iCAbHC2BnXyyk8GxAwsBUH",
  "key30": "58J37AQVRwrge1KDQwmVFnx4fampLox16YcbW1EXKorSb72imH8Buqdmh4QquT58eUHekEYoRrW7nc6xuiptsySA",
  "key31": "d9oNzrAA9WA4Po7wEsWPoviPRUYm4NxQhLGp9RGkFxNw3JnFhQzXfzsRuWJtTV4Vm7P1LFxZ5j5m3oLuctbZ2Jf",
  "key32": "4LW9zq1KFET9YFH51XNfktdXvo6AFWdyt96cfxHShixWA1UwqwcSqZ7nGSUUwxnzk8yE28EShrJSqFcGXx4QfNbu",
  "key33": "4qFfC1TJXBbhHbVy5HGXwTkXQcbWPq4yP2XMuwv5B4jarFrpe63G1LBYzKw6XzqzRu35BU23SgLq1QTMBTio4vw9",
  "key34": "4aKesQR6D265zic84qYMMtYF6bU5YihBdZHAip5iPp6drWe6mqAVMX1q1MzabVjzBvquY7nz9CNDEWn95fZExgh6",
  "key35": "dmpC6rgwgArYM4CHVuNoEoZnYMtsqeExaac5SBD1NfXjxJ4AYGNSrZnieDzQKjC2ssd1PaHaTZEeYHbg3vJbXNi",
  "key36": "4KFpDo2XaVMuHF374Vcv6FCgqznYWELNF2Nm7hSa5vqvQgPVGEdG91LJ84X1iWDoo1DnKbDD4nCUcHf7PFURKs4M"
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
