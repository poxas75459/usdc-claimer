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
    "4Gd6MrbgJMHsExLF9wFoJ8wYdXEzZgYHeBzZJiJeTB2kPeBwPvoMQbdvz3i9JKUsR5Pd5EKpNtUobu6qgPdVB45u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pLbKxakvt4fiq1BLo4XW9gtAc8AC1DwkTfmMNE6iQSXJ4Y1jHpU7hcRYJE2eE1qr1j3qWJi9gxE7EKLR1WA2WvV",
  "key1": "3Uf8SyGdKjUFvZAsWcKQS7VwWRmb356hXMc9T6a6AUVDex2Mkh1ztQ9j5TRn6wFTH1Ff6hKGDSu5dzLTBoHCQ3Q6",
  "key2": "2StxsU3EdAjz4H4Jsq62WBzGuT1c285tcq8urMdwM1UkdpYZ15v9Kkaquw6HVSNZvRrACufE5AJWvXepDPDYwpVA",
  "key3": "4yRh2uhD35FViXcVryySwwhmSVW7fg8UzCEgojLSEMMCwizP2eg7TwVp2ndBY5iCKGFKNTuaSYrtLR5iXcqEQdPy",
  "key4": "2ivJH7nwZMWwafnDzz2ULdWv7sAsaPnfE1j9R4sMfoJyHwgxKhfbmkU7nBiVpomDwCpK6puprRzZwr373V7bSQZu",
  "key5": "3rVtKg2YzGdiadZVog4akTxCpzsxLoaTZ8ZRnk1fH2tuFXDq7aF3KyaNeUeNtdPJYd2NFWvzzTdjNxGKQpsXRo7p",
  "key6": "KCoa5oHxpyQW47unChVebKF4YgNJRYVNC5namWG2DrianiNaTYxum1T53eu5dNJ5hk7Tokmg9UDn2VW9kyh991u",
  "key7": "5aobkbpeYgBayyBbzUxG2M5C4Su5gwxVe7Ly9crBMK6RMJBDwebaaZdMJV3ns3zdT6vk8JDfD9z7RyAZENP7p8xt",
  "key8": "4fqpNaKcv8PajThzGSca1fibh6GkQ8AgN9ZiwLY3z3T6M7JZ1JwQpkpGjvp3okqq7u6tNMEeKWAkpFo1Cq6bQgAe",
  "key9": "2uLMQuGugZLEtdpVqqjbty6dNX24d4j4KUYu7rFpA54rbxVohJkqRsrhMuUxUFK2NawXfzD7tmxBRDD95aRRMixe",
  "key10": "5GPeL9ukNWZkhyAaks6GpvNds9hjQGJ4UNV3ZhAksqFZxepEpfLmK8DKkXMuVNUJGBBV8d4bdiKwt1dGuQEgC8op",
  "key11": "4uQipF7uXWGYojChZNmpMPwvmSiKjYiymRg62WzzSxRgbqziSStwKHivhDm9VWoVEwi6YMg2gd6jP2fGo1CfZTqs",
  "key12": "3owZvYYpF9seQw5zMzBgvHxzYhWHUmyRcapHoPuMkvzJyBXgfcHduMNTN4ZXcD8rRuXhL1SSbzWgxSm9C28WeMet",
  "key13": "2UGEG5HWP9iKt3bJimm5jHEA3nKx726MUDAhPbKCN4KL4JS68PSiKYk9RRd3cyj2m5DqRRyCbd2rpJZpLd49zgEV",
  "key14": "rRMd7ja3S42HUqXA9FmhUdxXUCaMm7VuDd1yc8bnTVMBVe3RbtgPgVTmWHMDRvq953V7MhkCkUczTmbBtmtx63W",
  "key15": "5J6JwR6xNpGnmc2TZUtkE76PEbmKAFCFfECH3Nq4v4YAQB4hNC4RM3dmEJDCHMApP3QqyQa6Psp4uzhicuwdFmfE",
  "key16": "5q3bWC1hQ9fR5DqNhoAD4grb615bQYE7jArwxYzawutd5H8u1Nzi4zDUA5rzv5CzvL6dopArhfNe9cZZ6n91pMaY",
  "key17": "5uf93aWH3G7QNPZcFZzVbocrBVbbdKSkMssNyTiouaEzA5wC7AJWS3Lu3FT7A8SHPS78fMVuA5qHrki6pah2ANTz",
  "key18": "xTJpWqyxv1iQXEjmr6kfhjRWtmF9S1QfUMRpoiPgysoUG5yUJ3E4AqEd3659CdvAvHwTDrhb8KqPqXJ4BzZN2Zh",
  "key19": "2DodJd4LHbMtDqf76cqTigWshTJXdSsMoYwmXhtrrQDBE8YZWXHr7fJBGqSehN3WTHM8ob9oxSTqafCMa7aVx7Ly",
  "key20": "3Tqg7gGvE57dqwCPC51KE3tiTpXYmVYKuW75YGWKpKiEZrrjXsfmU8W5hc4rKiuErT8Nr9c33WfUe1VStzMDx6XP",
  "key21": "4yM7LCn3isEQyEfpT4RTJhM9ZU7nZNhKqu99b4PJu2KzGUyzpvXxKfcG33DEqfZANmHozX2AaGDuxB8BKdPCTuab",
  "key22": "62f2NWAKBgAqymrzHLPFqCeVV2bRpgq8pUnFS8h93hAPcoPg6pNBudAhTFTBUVhuU66S7PzeciFAcALqnjVnDFe4",
  "key23": "27vCdJkMTQfB1EzLfstnCH3aTswKGCiduFuXpxupL5J2waJy419zdTZ1S2hpByVGimjKUVFSC3wzVFF2mG7Nm4Xp",
  "key24": "5kQdwh8im5scvUHxWz89GaYxwq7XScebyAftWVmX3gTS3JXBcHFdtGWsFQepgYVgbrqvuVumNydFrxnpsyFhFEuV",
  "key25": "2cGWZFv8CvQyqnTGS3kDcs3AMerU6yGgt8S4A88DKAgRGh2TAH8amV5NRzhf29t9MFgiawZPzuyK3CX2CNQTVEdU",
  "key26": "5oHW9j7UcuSRWxaYS2bwWbDznYUrswecWiwVgb79c5fmJJeXPB4yGZgkwHi3kNrLrpsEaPLrcpkmrrf3EXCkPN3J",
  "key27": "58UtEmxtkSLjVqo3f1tyjVbqgMNMUpmxb8yqStgBBFUTWHJBtDjB4hEmishs1ZUqxagjKJhErLDHkLYUqGcCMehn",
  "key28": "4HX393joYb8mJraU1mmndqcTTXbNjHEoEQyi32MhsQVa9eaGnuFwDpBqhg6hJELzyxf1VWokXjwnJzp7k5hG5LBf",
  "key29": "46BdtkprM2oeK7GfvHwUPWivKfiaSYQE8iPhVEqLCvynWiqQHPWriVFSqB3422nwFaox61pSkcMzM4BiioUqCuSg",
  "key30": "3gPcfjCMAMd3gZeR65VoDvxMsTjS6NokzcB48uqvWEJ3VpnMwkypAdA8mwibLDBiy6Z6eXVTwBu4dybZUAZbRAFe",
  "key31": "27DcMVfZd3awo6t3KZi9fyoCB4GQVuYK4Sg9qZtuv1G35CVm24cNM7ZqPnZKVnzbsk3ggT8xfTidfFaVYVkX54TD",
  "key32": "3rpWuJjgvVEWpBbBbrgX4tbBUDPqHz4PJmxG2dHwB6GEABL1NDPX737wwL6JtqKdibUJ9tNi1gxdtEznwMWzZfHo",
  "key33": "3ymhVmavTY2wNjezt1WFYNSgLSQ2yXNcA7z8C7RV8LPR53BER5SjCCSPB5YTuZfsu26dpJJwWUr3rP1J8mZqMWUR",
  "key34": "4rjFyCMfAmQcTLZQML5ZERn39Gj2aiq4HNxKydSM5oRNj9FKugY2Mm8N9K2ud3bEUuHJzcoGQUnob332fgpXLHfX",
  "key35": "28CJwUy41HEyV9LCHAcUdBhe2Z8n1366V56rBWHLF6NfPFjxAa755Xc8SAGesmtZnAHvBqrtCJTKKkRMgDPT38Gy",
  "key36": "2qo7gbMy131uCpEZVtXmg5asaTgFNLftrDvnnmkE1cr3KZXqsfW8R1fCk3GCeZiEP2WG2wDzDzhefc5JXTyPYqtM",
  "key37": "3cpVnjuYFmxgVw1276V7XS4Mbpcrwz2JbRzUM9ibsCA2DGmAvSDNTjc1xJU3dzdXnGPv9spMqjoL5sabNsnFppUP",
  "key38": "2yYomZBuzraJ5ud54ffQpgQYPjqwm3pq44iX5VWGkfF1CrBQs3637HNDLLc7M6fskT3DRqi31e73sCmQTq9AYYxo"
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
