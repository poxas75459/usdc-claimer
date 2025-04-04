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
    "2ceexmYb2roxAQWbot5QGjGjxi2JLhaCTdiCGJFaEXPhviEjA7UKsZ9J7mueQs4kfHsXJCwhKWYJzYpciufAViWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SHvNywsuuxBFSPwYrVciCg58K2ogU9HPr76Nt47mWG2TSbnMLc6KJ3RkqWZPeBGgZpipRB5nAUMNfDBT5aEnihG",
  "key1": "5HmAWXBrhDLt4JPUweVcMX1jPmGVxo4QzuaD1ww9nZ6fYL2gKaiwqG8WyJUHcvrVetQNjsNJUduK1HYmoDbdyVKa",
  "key2": "3vgygxFQGFZdRMFaytw5aKRW9eizrqfYyAF4QM56ESkUZGBY4BWbs4GtVh8p3pAZjyist2Tbm4iL9UJqMnqvK8Lo",
  "key3": "4knHJNCdh1T88Dinst2dAQScici2dsfdae7bqecTcNPsfF4MeSS1p646bwgkVWJyYPXQjp4c3opCMCAyL1gL6aqc",
  "key4": "3Xn8NYAa8PFvuDfm1ynyYGB5rxtgeLgRJ6fbjpntrhczubrpZQdETfS7Ba7tTBQxkaCr38m5739CGGRFaEkRtaXR",
  "key5": "3VreWBUGNp4rDrehAbxqWZ5SQr9tvwTwfFUrkzrqrN9UybSvyxppZXanj1dEUEZoDn8VC1ujHpgRnkWrA5swRsXp",
  "key6": "2jMHqM9AMpY85FQwTseFd5vU7XUbfgqXYiMjftdE6PXQ972yK3vVhJczQaMbU5v7sVD2EsRxJ4tTtVNzA9cdV44w",
  "key7": "3RNWjQnzGdNNLTQNNQkLb11ss3k2VCJc1sM9poF53JW6rTsFgSE6hDKn6iWHBd4E6qqkipaqGh6syCEo5rA3hBDf",
  "key8": "4VeNuNbkEizVzp74N5gj4kobhikUDND81CGzQGDRda6yL6AtxgZo9mbVr36t5oseCaRD8cEZ23LsmwYz2r76Kskx",
  "key9": "5Rttc6Rcc44qvjV5Nq7xqQg9siGJL8DcD8Dj8DHFBUT29e7YwZkAaWanr5pAG1dendzqydGLCvJTg1Z8EyGjogTw",
  "key10": "56E5ctyZcziGChfZdT7Tms7JnuKdxKhQERuPPrBfWsmEqqd2gm4cpXFz9LZSD3JZaL38m6Qb9TVKxSegBo9o9Y5N",
  "key11": "5Jj1zQMG4AkBgankvJJHupRieRA3mT1bvnBP675CEsaRMPmyM5Vrsdrakv57qBw5gmj5PHBAhjMbQUnJgu86NNW1",
  "key12": "xnjQsNYfcn5vteZfMSa7rfH3psdT1e1dPHuszY1hnz7CZ89mPGKr1pX73RGLQx8Rc52ZFe33L9XXY16DB2Vfpya",
  "key13": "65aFssQ1uGNKQVgeS5xH8qhHZPxJSMraphxAz2x69AwR14js3fBPJXYbt3HPARQesdDmWVoJKe388wWw7YoLLUnz",
  "key14": "o5RPxtnir7bvejEbHy7MjwednaxaSkiE2QmvHxGmCkxzB4H8PyhHt4RHM7pXAzvGLe2RdxJ8Lx6Vsq4J46Cx1iH",
  "key15": "YgwvkxXE7unDJW2WVoNFdZW74tpBLuFpB4bHGtC72mbxt9kMrvXk8EU8rzbXo5WMxTp7qdZy4w1ZLsg6soRhCJK",
  "key16": "4dXUAQveQuEKSfSGk9e4UUqiSJsCB1spoZMrQBW9zmEgJCSS51mbc1RQDwnhsTUVsK5MqEVBznqGR7qYg7o2pyRb",
  "key17": "26Qe6PtJLHKHMEynJTDvGryHRXqeNvvnn8eUsVuSdd3wTd1gtLzGfActxVDk7LLc7LxD49sLzy5a45wFQW2XLNuY",
  "key18": "5at2BvNP92YFfaFGWcJBes6anm6S8f8XqRiaZ45GTqmsYnawZxXiEWRz53fyWDNMqvgDXpwL7kUZrVMrj5U9yCeK",
  "key19": "5PsetaLyhEYLTczerTZYYRSQcQnod2FnD4A6vRzvTkpERFbN8JVnMTcQknwi9GzZNHU5tvnZga6XC8sqMxTvgkq5",
  "key20": "JFqrYHhdcmYVkNnt3z871SoY9v8Znw51pxEBVHiKtT3m3Rv5GywinbFMysCToSQv2zQ19n8vR1sejJHSn7h9jpb",
  "key21": "3ToHJ5fC9iEANsoo9Pime5kfwsXbBzyDqShuUcfdq4wPthbaNmhxK8mqDZwQbrLACoSawrzLUDc3vRu4RX2CLmEd",
  "key22": "4zGjG9GsCwWdTmgFbNHmxdKsfkdCFF3YUeXKi9tZnpZZJ2c3QDKmWCYCaiaX7ttGvRqoSy52XhVaoXytAASYLq9m",
  "key23": "5piEDtEEGwsK6RyCLNWH1TGsUDCGBC8fZwFFfsr45uK3KmMD161X6ACnmLsdo6xAApbqNgFVCdcWUz18FWLZm3J4",
  "key24": "3LyHoKJusRaHKDUUsvHToXoM85zBgQ7qknfUjkeqjNijXTw6PcqUexy1UFneKNB3UN3bjhFsFz7uu2Hn5boK675o",
  "key25": "2FPKMygBmEdo4DZdAGo2mRECuRncfswmiUZbjQBAGy8BkRvsi2v26L4Ppq7ffYBxHi63u8LPtXwYcopTyHxJdxm1",
  "key26": "5D26WhmyfW4VH22hFKuDMwqL2L8uegtUq194b4rf1Vo8M6APQ4iHNHHP72Vnmt6Z7Wd5juiizdwnfWZnQHwXva8V",
  "key27": "xwQ8t3DgpFavXRDWPJMmWm4QzfHPQaHPeum6QcdSR91khTTSdbxU1MqkZzt3ySXq94oph4fwVPAPhv6sQk2wxQm",
  "key28": "2Q41NtjE4eHFvmpdM6kDjiHF6Y27Wa4irXxqdXrRxNti1L6goQ4ywGSK6JX9txpYHja9goeLPdyqJT9uMAucoqCL",
  "key29": "5reVoaXjcJpjnC2RyjRKqX79JHV6YxoJY3cHiSfSpeKBCnme4LTCGgqrDyn6Pj5Adqgqdj9eA777BVJ6EKqh7VDd",
  "key30": "5MyasTynizrwrjPPPjsf2XFki5nEWusaAwjpz7x9KPx8wVcQkXpktxqh4xNarTn1HJvHmkdDNxrbW5p11ZtYdkfC",
  "key31": "2m4poSXBZR7kkcoVyerMRVAKyWvMq9X1f1ZrTbemmzTBsH4knr8iRj7A2BsPktKWr7mQ23xBA8yYtov78Ko2EcfN",
  "key32": "5ybhvpzEXH2qWBvSiaAgRwUwGDEgsZPHneGDysSvxcWzTkAwMZdij2rZSV5gBw19VEgRmpMEDpLMBqT6E657iu95",
  "key33": "37Pc3w7DXZygwrAaGQkzJjpBB5kXKXhq8Nojz779Yc2mqMsTxzEz6sqsLVcxqpSnxx3LxgnLdQmPuxh26p1sU2Cw"
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
