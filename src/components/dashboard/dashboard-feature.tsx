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
    "e14h4ZfnYUhP2H8oEUYG9H7BTU6xXU57qKtWeRmHrQ8KdaoTQMhoBQSZEh7JefuoJR3CJ5Rjv97kNWUeuXpMq6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDgchuFXpoW8cVFv5f6uz9uCDhSifGRq1mmRJh3ZeJsYUCo5VDKQWn8pAzaMKs8p6QfU5ozgBNDLszA7iUpu2HW",
  "key1": "62cASksDUbsFoZbMYrzinAetbkQMaf7yjqeQf6XwR9VekWFA21YPgjHgMoN5s6JiB28eJg3RPd5BBtJQZJum77BP",
  "key2": "3kpUgnq1mQ7SHTaBmRYpkd5NCmNmu36sJviR7HGeCSY7M8wnS6UEBRh5G9PFA55bmE9oAqxdJdN2DrvgLEQSMgvh",
  "key3": "3K25ajBRrVSoBzxHzYb4zBhhgQZp2vFdntmQgFp43Tok66UUurJW1Z6zYz7isgTA2MJ4cfn7iKCiTyvsCZPB1NiG",
  "key4": "5oaCthncBg7GSUhU62nuBRpvVidgyJ4QCDXXZY3nD4Zoi51p8rALWJAHAvVLSPfo8y9aUnu2mU2iJWZaQQop8u4Z",
  "key5": "vUXEXSbutTJ49f7Z7SorHderjRn1HXDiq2ajJGnjpNdnyAQXkcHAXvnivE3JRFsoPb4ngEMYtNyYyGju65oYpk6",
  "key6": "6161qMjaW7NgiYkkfL3vXEEJ9e31LhvLbERxpWmVkHcdxPn2AfR6emLFXV6bAQLeUpLFJQB3L37djSwd8BYhe7dZ",
  "key7": "5SpymqYAKaMqdkJMYCy2a3S15QXfrgofs1gc1gFwc5zwCbZgpszERg8CvAbSB7fP8tqJEC6hicb4EUnVKo7L5ctF",
  "key8": "cAC87nv7A31ydibXhpiGJrvUeo6RCj3vKSqzQ7zzmMWRTRdA7TrwpJ89YKGcfy7Wg14bL3kJpNqZniPnCJdsxc4",
  "key9": "53PmRUQiC4DAKEC4SP9NVVc1sNYZUEikxbsZnTGjbFaxNfecJyahfHeH3UfypEmx6jj6KfUk3ze5ohTq4BpRgmVt",
  "key10": "2r8PKsU2cwnAWnz9giew19wYQvBTfrTAJGQ6sFoSnr4qMsM4WVGf2CBjo1FAwpbL1dNEnCsF8y3DHW5UN4U8hMJy",
  "key11": "4va6Wy5WJGFoFdmcQeR6NTJkzHHmBFuLNNXsdE63Q38Xn7SM2qCiTH5PfiAWqVQYr712hBbVH5wdxbSuhK4DF38X",
  "key12": "LuEPqZiy9UYc8JNWkdCnqR7BBwA94jFGTDAmb55FEAg6B7aVUFqqNoLkSHDMNsBW8m8fgiA3tFBqjyiAxSe87Zo",
  "key13": "2ByXvD9b6yZmkSfTxxJUeg5kzPRnSBDiXnSn72m3eqcXef3fKyoQbdxFRxpkoRHszQQWCRjwYJxsJ5xfQ34zvhNT",
  "key14": "124kCfMFrJNLA724qHjLWo6FXoZVo2SotGYPkxKD8C6VneAfCf51tmbipmpsCNumpF2XmW4MzSxUhNXr5qSSB3qo",
  "key15": "2qpPHUo3we6Se5DuVkr5ftky63kvcfBDSXtVxs2hB7EP4v2vBJE5Tk2a3SCS7pwuFGC2qaN9Kz16gTFfnWPxvB8f",
  "key16": "6PjYwfZwN92996rZVcE16zaMMa9oMgLYmKpQ6VdZT6zQcRgacp3cy47sbiPZgUeoiFvU7HE5Did6VB3dyVBqwrG",
  "key17": "2CR2uMcXnfuRT3jmdLBcZdVAe4hU7smfvBRrnc8XyTCmLsc8ZqTKSRwtcfurynyo74drRqbpgSQ8TZTQoqDSh4Z3",
  "key18": "37SJsFnehmKSdGoxusBphhDRVRTj1dFbuK3jfzuvyVAxkWy2iKVG6KYenVBRCeyMJcNG4mgCB3QaQPxZpqzDpXWo",
  "key19": "4p3mQU61kuca6piTdfeit7DTTa7Y65a2JqCzHDHNWanDqfLzdXKXKHyZY3SCuoMnKLcwR775gtcizMPWkpFR6Bta",
  "key20": "3cEXFwTdKrhTYmSUG9TWLTQzcNiHsWXL7TbWTJF2NwZgCDWD6yyy7U8GHYczrTeE6KPNxEZv3casfMDQfKEJZPvq",
  "key21": "4e7gtRrBndMCUjz4u3aCh7enEMNBvKV3Z5tZUdkHcy1jXqXdkJSrtTrSgVAvPWtDhHDPW95peUR1VGtToECcGz7U",
  "key22": "5XUjm9zbKhoB1evhAKxkVxuvSomsigpokZ72tVhvqQda2JmEAwx4Q5rm3PebqssEtTUWrvq7AjuFjYKRziVjTsVD",
  "key23": "3TBWheaXNbDxHdc2aMJLuuvAS6EPR3R173ZpCMb82NFL5pqmqiGWep7n2iKmEw8EZ3n3AM2M36ez64CgWDfbHWJh",
  "key24": "4jBGnX6hoVvRFaKz73baxMeQsCMS33M3d1noses3q7pDwnUFQYkNXxquWPzjCepLovLFzuZAWq7VGTM2H9yi14pi",
  "key25": "5VJuU8mRcTMtVYJSVhYGEKh5BVLr4kkmwWiZLt7A7eZadwGmFUS7hsGHbj9RgkSTAddpqVfaWJt8xs42wGGwB18s",
  "key26": "3GtmB4W38kGw19BH7frsw6343JWtB7t4beezqe8Hti6DMiot9uaGWR1TczZPpaqvoNaEn7QMLuVqWRz2jK9yCvgP",
  "key27": "2zBckfKGT4xEr534ZxGdbs5PXK8ZJYmw4MVsdxzZ39FqB7gw4mMFF24erm4CRAMKjpqTNXyXbBUHYoUqHwZSmDaT",
  "key28": "3ENnD3jnm2k3FYfEyUSmEETEtCLjYDGfEubzmzue9oVgDpFGTzmFxF36vUWvBbETadyR4RnLcXZvHgnPGxtmoqsR"
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
