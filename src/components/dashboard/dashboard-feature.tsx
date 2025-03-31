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
    "32TpZ5CMS2WwdU9BpTXAYfBUNyLcyo4p2Khtr9XV5obsJGyNXowddGvE9uc4yDHWDkhHnLJnQxgaVyp68rVyFC1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDJJjugfxcSgbq7oeuwX23tN86t2S8ghpjkACm5L6iidN4hVP3DZcicDqmf6Vvn2EyXc4QC8rCdQXABwttbJXNw",
  "key1": "3Pyfexe4dA1iZ6GgYYpJnBz3Ei3Q865L33A3pLAGdVZPf1EvFxgSxo7TUHeSmHSySRnX7xax5N4LbKveFgPTNQKD",
  "key2": "5gGGC61iFv1CcmTAYcThbJYhm37wbRHFq1v9GHJFjZ8BhdE5PPuZobwuJ4f4p26VxL4Hhw6X5DfBAWTtajGNZ3bZ",
  "key3": "3SBLmdvMkkWfjypkj4aoKpTV7cBk6Y8i4JUH1JSVK2NH9wTuTsUEQbM7TjQzUgXXKfAvQk7fh2BMkQ4m31TS5BAD",
  "key4": "55EV1YrnVTMack8fiCadar3vhjpg1yPvg4UVkAZfatjPNmYtrgWT5XHNp9Ec5zAeB1MrgCvZL5JdWvbUBzvMgJB9",
  "key5": "3CprnaGQhQVbC7twagHpYD4SzMb2HbXgKxGPn2V3xm3dABF19YxoK6kQvfVPGkZ4UMcY3hV2A4AKcHGAvjCmNU2K",
  "key6": "2DauGWratgSkZQLQ45531uFDLji5a7zcLKSxFKpTQidBkEZRRk3QEmTzTaX5Njqv57Xn6zyot59c2bS2Zks3tXhS",
  "key7": "ue2fEPdZnrKQGXX7iezg8xVLz7jVdjkqFfPfAX5SixxpVftT9pSotBa1szC9tL93HYLXgTe3Lieyr2R4KJjrfPK",
  "key8": "WjUexBWBVe9cpxJcXj69s3w3qzUCuYsZPLs4ADEtUni1Xv4ACphD9Mvw1NmPqsXcFXbqgDH9CaAPcFme63VFFUu",
  "key9": "5TaqBXeyDcpb2xk3Ne3WWwxPXZJwSjyNtXeK6bJREnjZGT9iLfdhigSvsL4pjtMFoB3oNXecFP8LXhGsUqbUxYnK",
  "key10": "PDkfuXiiBSfRZv7WUTBxPdB9kb5KHfCFbMj4YHvnjNec3Kq8BsQPtHmvXqPzPcU31RHmFCphMZVhSBPdJm1tqcQ",
  "key11": "4zkRM58qAk4CkztnwZ852ojktX5pC14RspeYdjyXw73CcnrMphnSGnjmmZF4BvbVx2P9LTha7exueQ6knjJ1zyEn",
  "key12": "2xEqASJVyv4DY8dTsusKqSqzbqcViyhxDrteMYwWwrrvmWYdNTKMRnUL73kyG3GmmCsE4gJY7FW8ZXsxJQh7WiHV",
  "key13": "3pDhQ9xH6Mv9kvF7QbyoydwFZfnaUYboBCXWUK87GHhXnvvTC34THLTM5Qqxyj8EJj9Ph3Lsw5zh9pJswarf2xKX",
  "key14": "5AWwAaHKdSYRua7jbjNC8aZPd1A5tQYa4LpQfceP5zGD9xzrUNrcjtTUrbhbLj61wTuxVzoqeAcb8oZy5RMxaiqv",
  "key15": "3gXjv9jQrFjYC2VfYutGdvcWCbJWa3hCg7NcCTrCKQVn2JtfpMieSPtPq7VtZ5CmTwbVh1tezMfZ6Zv9gupd9ai",
  "key16": "3avpwu4XV7iUffUq483LTHXFE4v65JjzL4azbeYH15pcEgBoQXfrQR7KYYxC98kH7jApJTn1jGwEceB1PuDsMjmz",
  "key17": "78QoyrYE9EfC5bNm2dN2ZnBhi1abZQs6pkiUFBDEZbhAdikeXXTtnGmbodVb282dLv4sjV3WSQ2gzAhAHLZDrS1",
  "key18": "5BRDz4Z2kS2ruGbMsjD5WwTiMxhBVGTUWpbKSNa8WrfWRRZLPjwGfh6R7ePvsBBeeNMCpGMmaDV2ddBu3fpJ1e4e",
  "key19": "4Lc1mbbfXkniHKQSrR9cHfcr5ozqmULqjXRaqYw34cA5BC21Y9WgTqWgKA2vZp61QQpLaomYBhj4EPnyuBP9Wrhc",
  "key20": "5gwFhixb3fpK7pJGhjYkq9NZpNQ8vbkKEs4mYaq6iNA3eRGXdVKgqRakh7YKJ6n282xj2cz23dapSmEZAGJoFsWu",
  "key21": "2BpoX19HqpfbaYicc5aJGNdKZH9iqhAFWm28JqkWbCQr16hUS2K8W7FFj2sjSScPPDvwWTkhHHQLnHwMVg1gKSQM",
  "key22": "2ahiBeRojJEqAKQ5tbY7RN5UFE92VkWGdXrAgU3ZRXRNMCV48D7W6QXqvfV8dKfgtBGuCUZZmZkMJptnV1b1sXbo",
  "key23": "63nVb8iEXrAMEbHG2GErtEcVsMSzffiLr8yheCYDgVXCwD1yq8Kp1zDLUEuBaBLiWVdBsDwKKgZRfQPVfdtAwpgp",
  "key24": "LiAAnpEkrFyTWnPrxCtNoKhQ29x34GdxcT8RPiqGr29oexiJ6uBDwrgdKMUjnB51RAaqb5aCWZZu3pekU7yjqoU",
  "key25": "2F9hJCAU6gXSKoZWh4zKiidyhJibCg92tdH1tYXnxiQVzMrfKu31Y19agFQsVgvtMkVPXviFfjmAZYMedr2UT5qC",
  "key26": "2UaFrRuPsSvv2CEoFYSkj9sM5hXq7mATGML71vjsxauf5EQ7XJVhGREafrJiVuY2FFyjidRP8LyEWp5Dontesa3j",
  "key27": "AHtyUsc9bMwKSkjZZqhyRmvdHzTtqtnqSjqeZosBJZSkwJcVCKr8wDM3daN6BDSSxcmEdR2VMSMWKdxwxYntyWF",
  "key28": "4rkwfcxn7BnRyDhP6RH3YfiiaAXN7choKhELNhjtWYXBKqAjxM7FYAy8Vkm3x3Ue9RTeV9K4o35kxpJqYRFF7b9P",
  "key29": "2ejb9JiRSQo5i1499EaMqq3pucKJnEexzyVEKwCHmvKjukZaRyMvurX3NpPPvuWAqrn6v7rbTJTodSWij5V3oGyE",
  "key30": "4h8bGMmyjE4VRdrM3TxsCeykLwcVvGwwXsjToi9RLECkbnVpQLipKXyPdWDzEVJiGexKiCbTqs4gd4qUVVZix3KA",
  "key31": "3ER3L934GapUdMX5xqLeXaJm6ByfLGDpzwkB51Rvgac3ennb1ZZdByeeZ8ihxfrkbtVZiPKMxPQwiKaMLQoQTLdt",
  "key32": "4Z9yLVzoRvAud8NGaKvUmrawyXRBTb47S4teRwRP8sy6iiA353GSWk7LTciijzvBDNDwsZBm6x6QvmSzHGT5qzBo",
  "key33": "29ixsrmsBeJQEtQv1ZaPf13EJwKz75dpnJnjCcVdg8VHLKLRd9ZhLJbi14zjMGAhAEhJdid1FTrzWbY6Zqnoy8dZ",
  "key34": "3aZ1hfi67TLaz5qQXc8X17An3Qkr2NB6cGG7X5vLTyVLbsjwXYCVkvp77veFEvpeHXaaPvRFSNBqeLRRtz8oxyqL",
  "key35": "5vsNTsEpk3tUTijKadTXCy9d75WmF5s4YpN6fj75XJKYABGjshtcGZWMi3frNcLpszbiiyk3ipTciceW6JBYBuYG",
  "key36": "WMtmPdTgfn46pTApcmDC3yeEF9nEau1qJ1fWKWAXU3Sn7rFQ5D3LcQJfgWqbCqcbk5F2ChBGtMZ1L1qAAod7QuA",
  "key37": "5uaoyveUetKHRZcDRiSQTNTWBMvsFp7ygqWmGnsEWKuvUXFh8y6Bpsb8HtBTKqU9NmYJpELeRp78YYpX9vgdUgJc",
  "key38": "5jgap8fdNsdZtSRx6Pz3eg1dTQ6DqUzZRyASXzzgBFsc1nqHrkwf7KrbWmuDpYTzoYLt9qATpFesZZQMxsmjEZxs",
  "key39": "4TjP4VUFA4dHnxHsbTd3kCKJEzRcKBA7rpvTXjsj3t9sQHdAxRhb2D14YWLC9ifqPRTBwqfizuvF2fVUg6NPfj6p",
  "key40": "2UBbfa4iSKCaEbLUymq294vLjUAoLcb1WdMWP6HcHRfMvsbTwawkse29c6tCvtuhnj4n5usbEugLaCjyPhiBi4Ay",
  "key41": "5o3szyN4PU27AxYWnSWpUdtYDMuTnu9q79fakGtc2fumm5dA9RnmZKxQdBEpJLkhTqev5ztztwJPyjrZbHL5zgJi",
  "key42": "Evok9up2dcWaY23iK2A8WAZ69DybmPQNoX3PZz4CwesaCFJk3JRxmUgRDZenQdhMVZiwRmgaY9YMyHEb66bkLMD",
  "key43": "3PJwK4w8N8F1bpzce3HCQHaJo4sf1f87wpC8xbQJUvF1XjR3KkMZeGuJMqVTAJecw41M7txTm7YwdFQTfUdYcJDK"
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
