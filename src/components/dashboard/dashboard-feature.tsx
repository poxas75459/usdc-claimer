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
    "4DcWXKT4eF2YhdGZnfCLdq5MqpTEihH74zLiHinSWmrLB2vkzFp4HRUpKUr1zYswXX3Qpw7xERLf9AxFBfcFqymK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ucjo7gKF5q4zPhXfRVPJW1MQsvMiYMBp92oM4MDTQ7wPaeRc7AgbzT4kr8k5YPU8obdPeUQ2xvKWxQPT414cpsy",
  "key1": "3zgXmRKp8G3MfCPwZXwYvh7UAzbDms4xzLeMF7MuwejEkum5idhhYyDgP3pCwwNQQhmZfUoW317y4oxLS3uJjzsJ",
  "key2": "fXRkp1KxkJNEDf7Ee7LXfJZsjTEYSTJbrutH3MEMD1ZTVMYkTQaKBf8V5J6GmXh4RsGdFa34U2PRrFd8qWKgdxq",
  "key3": "2XiZH91YR1rLXBVi8hUJEH7hjEW646hJwXhiBdY1Yk62TWqJR9morLjUXoTYhrFen8BmWeXAqtbVT4SrexjUYgXn",
  "key4": "5G61JwEGoPtbPi9NqPYjWt2wpP82pm9Ja9jCDVQEVvrcKrrWbpQ7Mh8pLxf1ARNbeArN9tBu42Gr7dYyiqgetBmQ",
  "key5": "3oVLaP8uTKK6M5wb6L2StrXSJxTTSP7eGbNBmC12DVhN1pYjcmxh7yraCnHn3mSnqZMWiXKiK1RD8VGYPDzPXfV4",
  "key6": "57xP5549hUhxFYGom6m4Z7Z4zT1cWqYgdHSWdszdXvDQULRvFybXYkHgYoybCRFHnkPnfzRBXGfGdLih2HCtbfdP",
  "key7": "4g1GmTwgLi2FuZc8W2eTDjH6xZdBAotJBHqpy9kSEe4z8VK3sR7X98AhP3RPCaHX5PdUUuCXBi6Yji9LSwhCau9y",
  "key8": "5mhP6iiLeAbrvQXNeLfessDechTijq8VebeodBQQ6fFAkFMeS7WnptGSYRxoLJpxC45heKDzV8nxWRt4RYwzQLG6",
  "key9": "4tdyhs9hypPCrnvrmKWTn6eBcderseRTvxUtxJyBjCQQbg7A9zsQMEHyJ5L52G7aV9cw2wwJpcVamAuMDuKD4GcD",
  "key10": "2MfW9294Cp64H5t4PRh3pM6c1EUUKiBDPeUWfN1m2cpqZP8b9Eme3TN4X15tMaTDvHehci28Jq1fSYfpoitD7SzP",
  "key11": "5jqBgtUZC5khHzX9zT5t7RBB1J7hzFyE9JQzbqDfFz4WcfxG7meh3bMAS6JDqDvrrRE3Yp888mgZ2iGtZb25aMsv",
  "key12": "3V5scxA9DX5jomzz6rf3drV6rucSMkqzzwoiHzNGuohFvXEps6auZjfzZeXgj9r2dCEmZkx7ZNzBkyY48tWha8tp",
  "key13": "2QzMeN4wrZRr6ari3HWt2k7T6ZoZg9JcaK8rVgWd2BW7cYVcRT66Ze4iRErqVbrJSTUw5cgvHKdGWeRV6Fox23W8",
  "key14": "5AFSL1gfUNHqtSHnWsTF4fHUgB1STcTFKZ7ABSUGgLoxR2MKAKteHwR49UQ7eFr82erWSeo2jcu22wLDPBb4aVKe",
  "key15": "45Vx1FU31zHUGYxEhkMrFuw6e2W86HzrqWyE63PQYJPqytZYwjga7iExyi3nh1HZ62ueFSiCD7MK5vrDUfncx6Xs",
  "key16": "3zigSzQjVKUZy4mHV7cZk3F792rVbcj82nGqPiqD77iJKWWuHVcaWgm7yJFgLttopXMQYrQnUAPpnPi7U2gtgMQH",
  "key17": "eYTY6ic5cdGaQnWd9Lpn71gHy6iTYJWLfWxXikg2GAQDZvYDsHDojDp9goBfi8s2VZZq2N5NiDEc29tHzhGNH5g",
  "key18": "5aMkRZz1FbWijZ1JPbdrbaksbtCUM11MVJ9mP32VD876jz1HBgS3swRvtsvXDmtQNpw4m5MvZ268FV2HUCvd6rVi",
  "key19": "2SXqHitwuM6Bj9YhEZp8JGEosgRCw5338wtZHB1o9KjC7MXJozQVNw3JYNi7mF88fgSTn3iNiddfN7LijNHL4Mxp",
  "key20": "2SQxZnerbiyfk9z5qQpEBgv6dmZHEEWy1R2QQEhGAHoUw8BgGiXk5Fixf5w1HbovXWaWgF8r8zcUGQz1dFokFqpG",
  "key21": "5WxSTDxNbCVtMPKKzCcG2AxDWYp5L7JzKhKHB2ft2ZA9tywhBttzZJ9biPHxVEHBHTeh2fqkvekdWCJPNzwxyANT",
  "key22": "5wqdR2QNnrGYnYWcUfEfme8eGFU5kikVp5oA6m6cmHJmkctw4VoauuS6R8259Khjkx8fz73eT81RZcSjXTHgP8X2",
  "key23": "3eg463eMwZmH9Zyeh6q7B994LmjoSXxGg5Mx6d8vP39EgTkXmFZegSAayBe49h41fJzxBoBJpvMWS42iHV1QQunB",
  "key24": "3hLWrGrGYgaXnpJ9ZY49LJGBNN5vTeZRub5m47Hyx2yJ83vH8NPE7mPAbXWsKx36yTt6ecHVgg7jW1gFpJ9sHy9K",
  "key25": "2JKcbSJFMfnqtAWjEFMe4gCvPgLcMpmvxiKFN1KNKTqjM6bsdscZ3bN7hrroQRurCoPVgWkmnesrE9c3HYTY7aPD",
  "key26": "3hE3jrAmQKrZ4ZB1QXuZtwJPcMHqpMsewKW21uZfXJjZsPdoZh11wcyRmHDhe3i9qiUr7SHD5ew8mmSW1zxGZLLY",
  "key27": "3pD2WefgB27gSjgXEK6iiPbwzJQMxoW7UDYdfXvgeKGj6xhVmrRsZSGPSuK6s6PA9s2K5CEs5ieC9ik387ma4Qth",
  "key28": "3iNfNHrp2vmmJQpAqrcU79qF6NwnL5owzezpmkzAhCwduuzTmwiCBfEK4LT7NiugYh9SLkHjvbfq7Vu6vUZgLrV3",
  "key29": "4rZWUL3SB7b3Yz9wpZsUubDtiFyre2TZ11k8Jakg8QyZSuS7vHh12GatY2jDsyCdtEKkTNLh83yPb8Li1GaSkUBj",
  "key30": "FCsB9xcisNPLvjtQnVVN79czezBv7ydHF1zpjMRRRSRtmhPi5ZdLMQitNuL2aBCuChkDQ5KWrqYkW31SY7c3z29",
  "key31": "2LfZyXBzJ5gntwDweBVY8tK67sTM8nsjaeCRH26D6A5dFnHCc315SArtH9hzwz7X1UCTa4D8KRiLrmxSUvKLj6Gh"
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
