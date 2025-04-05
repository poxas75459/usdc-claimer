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
    "4We2j6yyQbJUxPnBpdKT2cz8b4cqLB1LzzwmsGtoHbvvMhvGvsUfiNXVu9dFPKzpzCL3abr3dSQdtEJqiNar8yHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NMV9Adr4ft4voX2ENTYK8oS2kfw1MTtrndJZHXVbJQ8hsY9FsfEscaxZAZV9XVBY5oM3uXHznKkCzBXQBWpbfXA",
  "key1": "3aHRAJFjsuGzkGKH3U23Ko3jXjAVVc2yz54bHCiB3Xbn9pDjnH5FG7o2stMQDCQQLNYkihiXqJuUbpHjbhE6nPMA",
  "key2": "2VY7bLf8ZXnZwpTTypdgVnZJ7U8pvcQRkPYcoMB1BsWuXPUtg1zQMNYm7gBToVeTn6QtfjG8KK1uy3uXT518i7Eo",
  "key3": "2hU3xKAkw3Zf4P9uzNrLK6KTkd6vw8QjGruQZvzgdq6CA2MQpWqsWD9zQSDMbDkkFshVQ4DkqkYNTU1iRDScvz8P",
  "key4": "4VKKhcrvtnQsxLDV1U4Md46WS8fJKXaS2NJMt4EtmQKjgsKKznqKEtvGS6nqT56xkGDwP9jQzdYu2WXH7dK2AhqE",
  "key5": "3t5Yb8YessDRcpeq5nKEuEuNNCQtu4wfSKRK1R1CfLdBkN1YLWwMxQoaFRckni5M1PNGCh38sCYSwj4HUoZRPwfS",
  "key6": "2YRKRW1aL3LFzULNZgxTKpQDvNnKkyeDUaDTMdK48D4MrY2sMfKdd1nxhVWhJdqSxS4gE48v4bo8mAsVPC5By8Fg",
  "key7": "5YfCnfRFew2moLAKr26jxAbKfr9LBhKW1oufhTf1x3zFSuy1eddgziLKG1tSCYjvDfjoV4miQdeBLVmLfciDjq1n",
  "key8": "71AndS8shz89W69SzDGgb7tsG3WTEaxfAAns5ntv5PmFTtcx5DjYUM2E5nmmQ5iWHYUPoT9hv6DnXMTM651paeh",
  "key9": "CNcZyZFY1J54Y1xpHfqWditqEkGSNytGkQfa9bciMriVVwF7QaZLYbCZDLmNRHMcJpGuavM7tBKkDFStwC5HinS",
  "key10": "54gBtL7QWH85BD1jja1AZ8j97mzjAtW2HATiLygJJovs9zX4dqjA9W4UZJHeoscwG9YczyLnuXmqAbCZNkYe7mrA",
  "key11": "5LFhAShrQgqjQ8RTGye23YDHrX5jmzqdWDNYXAEutZp8eXXFE3VeMbrnPiGQuqaBWzuVWqj97XuEVtJC9oVcRGEn",
  "key12": "5RAHiy7K1pUxJ81ENYTtPnhTYjDtE2oXVK1R4n2K4Uc5W1PWYVR6H5aFPQ3vC1M2W6pwGJSkWCjvgTRLw6yhW1YX",
  "key13": "2PgmLuyk74GniuwRWq9evpMKtDvFSCDW2emDnzUNb33J9P5XLvnFLDWsDgSs1dTmckr7Fd64yqqgKHr9JdypW12s",
  "key14": "tpr7bGNuGBzGD6H395xyCrQf2E2JX5yP3TVex9PjuLG7xtCem6g4R9tPdBEtEnG8PrQPoavE7ktr65mJcGPKv26",
  "key15": "5ft6uCapTeQ6jcscQdckqB62s7EB9hBiTWwUj1HGYwZppza4yhAE8zYkeRVGLapcf8V7wmmyeDTEbRAkwdd33tqL",
  "key16": "5ZgVHggSzkQr3AtdVo8h7K6KWR3csUBpxiAw7JLtdKvf8cUmKjMRG6wzmjmiHXKCb5ZWfH31YJ7tfQghFpzKsFki",
  "key17": "uuqEgLkSrhYZq61cPPwjiX7ha3RfUuK3gvw3VrKQeJq5eZzuYFQJVbegycEqMGHKmKVkBfe74oWjjpSgHRs4qCP",
  "key18": "3fW48vfxQunFiEzMYwkMnW7A78KxedvgBUB6kaLfip4HHtHkidE6GgJcv8w2fSayaq7kN4KFThPihmc9CKLHTLdY",
  "key19": "3rMAmQsqXoE5oWKbPYW5hLYKGpPMGpuY48eDuUtFv9AeUM6QdJndaprx1oK69GqkYPDBTDc5co7mj4V8wXS2Hxyy",
  "key20": "3DRV61YV5bcpjkxZBMb8yV1FtR78d5Q61SzFwAgbPF8s7BCtPocZSxV8T8wqdTnrZhxBBhf6ysrScS4MYE6qvNg9",
  "key21": "3fuZ7UhvLBupSYQwz3ncd5TL28LDd5AJBGDDjarFgwwPcso6J5faSfL72EbhaLX4HCQZtcgVA4iCX8bmCwTEEjG1",
  "key22": "5fDj4HcqQbMaKdXGgTAynMfFwwvWUe9aur8Ve6xbmY1Vg5H2iamY9rqv6jgqkFLWaL33p5hBsUvzeFxWanpcg5iS",
  "key23": "oUfBAReWcPULNwZ7kVLowXwwguyVhf5h3Y8FjhEyJxqTQGQ6tLxcuxn8tGThFcHi6bYyuB5vZiDMm4XFTU8y7pb",
  "key24": "4kBDfvQb3en7HKNCZBmyGKm4nxKNh2Aumr7oSSVcCLUHpgVUv8dTMsHqHmisBt6dmY1eUkuGFEenrUkCmNywRqGx",
  "key25": "4b9uhRuYrsr6wQEzvHYMkqpvxbgMBnWuNpZBXKTd8KaPhsKZ1HwG6aHGaXPF72NW7fLP1we3qwbD7BfSXKDrPqpQ",
  "key26": "544tWjQznWkyhEHcdpTM8fiDkJpGH3gG8syecJFssb8TzEakB3go321YWBx2PScPw4quwXVNJdADHSqZfWWDTigj",
  "key27": "4sxk1bvaYXhJ7KETJx8A8UhshNbvYSbtYuopaEXkbR6icE9MmoB66ELeJ3tP682GhpmBNip58PNbnvNyA2NrybGW",
  "key28": "2D3txnUo5ztsM2jmGPNGc2tTNC3QGwmwWA43GtKLNjNyJvoTzvNjq6Uq7HEY3pJPXxjkESatY6YadAtCbX9ybk4f",
  "key29": "5BeJdDacSp2pCrAid4SK3NBZhysiuo8x5grT4WnzYqo5CdpuVh4vn5cd4SZt4YPR3EwDAbeym7EfHMx7VGnJw2tk",
  "key30": "5ccCW92qWGVLwZWJC5PttfmK2khRkrEvtBC1S8QtC7PkJeaXSJ6Q24Qk8R4B74TT12qC1UTEjG48MpVSwsJR4C93",
  "key31": "3G8448ic5aNkJqDnXsQxnBbhQDbtuUdshMqRmSWngkBvyy2F2eHUA8o4194ppkNmkjzwhRGgYMQhg4uEo8Y8dGm6",
  "key32": "5AS3Q6fphYG49RMXXgHTct1Zsx9qpHpevNz5VU84sZggRB31wMJmvEM2DjzNhuXaL4m19ZtHRuU47xTL4GbR8gGh",
  "key33": "5dpmXBA9MRZTaNNXirxCZdy1q3cnay5JHeeTHrsJLeG6LeRtCb91GKVaBSXwgDfHomAwoMWC9hwn1uKcKifKUzS8",
  "key34": "A3dQs2cmiZbWtgdmbhmmiBBsKwGjrAfakwnVQJqwrrqaVoyffzdVSwXB6gJim89qRmzPCNM2DXT8q4aQNxmc9rp",
  "key35": "2Kdf6PDkWzhH3f5Tn6UqLfPMzDWAskj68Dps2GNEMcEQYid2KKhMbpTBagma4tx5xSjnvDMvXE5Q2CstdhdffQm6",
  "key36": "3AYHWCX9gkj1nmGmr39vsD26XmXSBuf1kfE121ApnpQMcpVd7e9DKswETkmUeycjBWt3L1g5GMzXPmtztT74HzNM",
  "key37": "5aYky2YJXP25Rk68Tyt3eK6MiADagkr1H6gB1SFDFZnv5J66oDLKwiLh5qeu2FFn2zjhpevNheqpQYHukdBSG2KW",
  "key38": "2v2apjWnjgv9mUAMsK7RZcGRdhRdqmqcPFkLgSxTMNy9qL4a6ZJxuSHuhZRLqjkFjpLQ5bC8ZUDk6Kj6DYCNMBJM",
  "key39": "UrzTmpBoN8XSqsEeBqZXXYiAZWyWAnpDgiXyXuGJg2McvE11xt3LcQiqYhZtv2xHh75gmZ9JgisTPoL54TCsKyn",
  "key40": "5Rjgs5qbtnHFhBJJqpMQd5CPgLuuo1xP1kw885zw8cPGykUz5Camiwn6Limi6r2CivQawnSdLkUgs81Gp7i9vYKL",
  "key41": "5daai7azznKCEZDyiGAAhNAUWMUSWb8DnzN9JqzTqeeEo8EoYx92LNyRCu7A7WSvHwkY115ejxEgMnthWc5ch4Q4"
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
