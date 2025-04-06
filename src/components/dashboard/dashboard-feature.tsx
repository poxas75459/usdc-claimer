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
    "2yn3WVnntPpg5vWc9y46dQKuhqedbZDzkRsPRytZTBwyfde4KdP75TppdwkdgZeTTg7pxwWrdsAb6Ak9aTTEkAYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RAA4FnmxWxnk1xWEwHu3mt1CPHvhZNLHTM1ST2hWoycBVGTfZ83sMyddQuqwr6f8cJwyMdmpNVv5y1WS4MfHUS",
  "key1": "2RHKprn5jH4UTTN4GD9pRau6JCj4W2xrg5u1LVBfm5xbt8o6QqGKo8UHmNcMXhaF18b6Ws9r56qSGxiGEiR2cB7F",
  "key2": "3G1Hq3PrJ3W9a69CJPT5W45ykKx78iYeKugHAUTRZWVhjDgsushZ38Hy69UwaGByfx8MEpLsuDbQPN2fJ35pYc8X",
  "key3": "4L5J6r3d9AFPhdUEMdyZ3RDTc2RnJiKa6UmwtdgAb8uMAiGxWpZcGv5JYMc1w5twEMiggRRywQP3ZbJKZUyMgwK3",
  "key4": "62gpW9chDgTFpBhMWLcjjLFKaRpMhjAmZWCe2352fizBd2apCU3S3emuqnyGi7ji5ZgtB3HAY4gvNqaJt3zX13qJ",
  "key5": "51efWRonaffTJtnxY5bu5EKeRRVYZ3JrweSa5Lbn2W3iHWrLkD4ZjHrkT7biexuP7SRB3MQRmEhndT8AbojgQMtL",
  "key6": "48NRyWokTM2Mu3FVmUKB7Cf1TY9N4m2jiqF16o1V9YPTCzyXsuhFdS2J34TBgaLRoe7zRmaprirDDrhZGkZR6QZw",
  "key7": "2PuPSHarpLtgBZFeUHy8UdFQbi7KAkbkkBtyXmixovPwHZH9BCcnTaiNfsNYkenTbChcpboibWy5LQLXRCMyPSRD",
  "key8": "5HLGPyZPk2ddNrsw9rv6fDY4wfwnGFwKb2nKCs5aW7SZZEjpuCJM4vKBrv7VfPYbWQofnRPPeSFjXHT6eBeutT3A",
  "key9": "5QzkTiMsVE3wn7BF5trdyVKXrL8jREhfRWgyV9aPmbS7vsm4DHLV2Mh4qXqBaEFq6AfrapLL8rhSSHuHiTx19kyE",
  "key10": "5kwqpUXi6buAEA9vRVirmBW9kA1GcF83wBeTwxZemhf5AsEyo1k3NsDtTCMcA7myt18yKWJ4PxQjLAcYiEHEEfcP",
  "key11": "2edQHFmH4omuKykYXKZ61Rqwsr5oEjFfBALTuBxnT5RDjbqFxAq3pYzqqHcSy6A6EnM2BvejRZ6RjVjiMV35LqYb",
  "key12": "xrfsUZtMP5K2UvjeaHQyUAo2fqJQdePtfDbofcg1YerFzMjx5BpKvbd81fDfyo2LuN8GjCh6coGa1Q262ZVW1Wo",
  "key13": "Pztvjnyng42gJazLUcpMCNChcvB7NZcsCqkhBb8iywACnbp7qfjwJEqT2zEAagvHB5ASETDkp7o2aBcSexCedw7",
  "key14": "4VfDexs3Ye2ojsnbJZjvHSZ7MNhf8fYX5k4G6t3BFF2a4ehcFcLgav8BSQGECXbTmjt7nh4onRywPae4E9UkVm7K",
  "key15": "5q1298Bjs4MARCYpX85r1EEKvSRpwrgDHFBAp1YrikWinvVHN4ayzcHWtg4jYY7DHpn4XNHT3Quc9LCidXkiAJwH",
  "key16": "gjfX8SLpr3sKxhfbxS5JqWYnNUbz6X2cBHU48aaX1KuKeCCyRK6nDC7jEu3igw6KyMAJXCo238P7uTtjkvyQAC7",
  "key17": "2VsaRUQrDEF6FBree8CyMJxyUdNw4tF7nHFtK5Fxcbj91ZyeWoofoP7MPjhbaciYqfGVr1gD7j7EJFqU9c9K1z47",
  "key18": "4ZBZqEpnZ8NnfQAXmspsXBDYzm6samj6Nb5Rhwnosu8fgi1KSu6vtGaaT3kMaALvjQ9vrvNRs2cgiqxPPPFvZwWt",
  "key19": "3drJ8ipBh9BwrKuTwdUj6JEDmstWkaUgEJ9dreGwnTVwHSMHQo9XBjNybxE4hjZxnyapJaR1Xio1nabuRBsYps9m",
  "key20": "237ByY7B1oN7Hf31ztQHDmL8XhHutzMc8qq1vcD8bM6VxXdPCd43PykXhrdqN4zaohPyg8H9STey2CC4qTCBM5ZT",
  "key21": "5zBYKQLSQRvUo43bAVptiYef2yVSm5Runrzc45CLMwaJJVzuYkk4iP7BWvAsLZzWpr6sS6Qcyedt7PGyyPgLgfGp",
  "key22": "61bbRTArXGN6PD8azvtVUNE1b5bkqthUYaBfWsg6S6ptPA3hzp4u78tMCFLqBqg3xq1WhbYuSVKkRUrvbfVo4MA1",
  "key23": "5b5kXqeycbD5zapP8gEbEZr5h55V38a5hcNRLGgadGUCwt5LppS3VvAB49ZyqvALzuFP65JMnhVU7gAwhfzpWVtk",
  "key24": "5K6cNDAQcCaFjTu8uN7MdcgDpbBcu4EKZwHmcmYoscX1bZ5aHgvAkYmN9kdmNUKmLAiV1Gs7Jk3jsjvJBJfcqw7V",
  "key25": "fcEzxQctF6uotv7RVnoZsSB8MQNSJ53r17jjsK1NKegjH3qPjVAie6xidKt1FDtADdfks4xNCrMPUoBx9Ei1br8",
  "key26": "3xTYrUf4T8YFKk6hjEypyQ8pcAwVRAWDUA5sVfHSSZz8xL3wqurfw2Bs2bPpSmhJ5apxHHXNAi1KwGjrxG8pbQAH",
  "key27": "3nHNookaiFWneC2MYaUfXvvKFdS96yfwY47eQ8UmQCEzfzFrNC5X64H29Qbopt9PNvnF5unMcDC1d1Uuf1mvtWz3",
  "key28": "4vpNxQcvCCVS8cdChEr11idvvFUax1qYNHATNhjg1Yv73uJB9ovjYAuErRymYp2h1ubyVgK8mAv4EANUZ7B1MLAw",
  "key29": "4xabqbiZcuHkuT1Qb5V2ckmTvt9XuZCQgpKyFJriMvNsm8UWHV7xkb6WG1qQzbcUG1t5vZfj4fwg2jzmVo1YnXf4"
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
