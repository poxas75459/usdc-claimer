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
    "22jsmyqz6Q3y4SYtiezMWdn551gnGSpHwzi8aSKUhMHSv5wcv2PUpk6Z5DMYcc4p3TyFLwxGSBgJ9hycVVYPfJKF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CrGYyRD9D6jgnZFZBj3dfcr3tNpP5L4pG6Gqko2pFHKSNrmGJEpcCZVWaMsuDrdcDsXf7y7eCyFPKQZsV6V239R",
  "key1": "5cQmRH9VFsdPSx85yUK3MhaQ6gRe9PUHMRfSMrmuQLTjLhAa5nDzD68HTdGPp1MPucdeS1nGMgbVanSf5UyfCn5S",
  "key2": "2ZWtMVzpoTPtb2XdQSZPG86ZFjNNbuNgMvLt7DrVD76YzgCuvi8pXErnGKAFDKYN8drYcyKGoTDWUeZ5eWQc7VKD",
  "key3": "5d31KQgmGtVNZoLeuSfkqPXUnY8KbfoRFxCWjXnmzNPp6upieTGZnriHeLjKTs33zyZFbRHE6e9CavrV2eebfzQr",
  "key4": "3RZkEKGaUAuQsmiVNSwo2bEAmEQEVr56qfaToWsJTUUda7xzpYHorX3YtrHNsYuXoGht6LaDLgwu8w8KbgZoGQm6",
  "key5": "9W79J8gCRWSAoRyiPEkexxFiMeyrU2PEYBsniBFpkdfpbH1R4ioudpvwvU9JMjfvezXNg1JdSkqcQ7Sou9KfxvA",
  "key6": "2BDCoJr3NqMqiXyHejGVecaFwEfko79aE8LZFbpPV7su3FH4qwma8RxQRGDpXkcSWD5D9ax41rV3np3EdkMzrE59",
  "key7": "2zjqY2zZQnWqCgXYNxbKBXksB3Sg246PRQRgMZPedWazFeWfAN8GsuAnujAkHcvx4FnrBE5CbXMPjLR6GgCvkRnn",
  "key8": "5z8cPTj7PqPPffG94CUtn4XTpM7EvscdJ4Utyn6AiK8YMDEbaA3PSRGvDYA4Me5Tp8EgSLEdgoNi7RC8uYrmxCdU",
  "key9": "EVn6v52xLs5916NpnoctStYAYqyxUFsBjQ7ZtCuRvVNcJc779j6xDRraN7hCKvdA9AWv2B3Ha6ybrPhgHc4y8xQ",
  "key10": "4vSKKj2oqUufUcpDqsUBxHWmiuKPMvNXRdy4qj4aL2F5NYf6UU4XLKAZLFaZUyfHLw4Z7neD31Gzn4BkmG8KQsTq",
  "key11": "r313DsQeYxu7w4gVAdh5SXSRJaefcEKZQVASEBmZYji2w5KbhjTW8nATbGL7EgXu5r7aezeNGu4F75Pwvo9MTzm",
  "key12": "3efUKtqr2faSKDqNh9qR2hSRBtpKMQWH7fkcwCqceZ62ZWEhTow9B7tzzNQCKWjTxSkfPdMcVsPi5GdV5jw4Zz76",
  "key13": "2ccv6LRccXYCuotTW7H5dgumoQYLTqYHmPQfnTCZcyGYK8PxkG8z77WKSc3dHEhK8xMMQT1wkmdu9gu2D9r8YSPm",
  "key14": "572bTirQLYVETtL24V49oZHeiwK9unKjzDeZ1o8NWjYeTWmfgHTrQ6PsYPewiemV8za5Vf8x44o4WRwfE7yNQMtb",
  "key15": "3C14bQK3YYRMsukCRD13CcpqEqo59uA3QHJTdCDvi8Mb5gL2ahqv5ka6cz2HDNzyYBwabiWMjMsH4bro1tHsdCGn",
  "key16": "dFmZzggftdfS6gpXY3wZJu4Pk4vRE4JaxpGF7RQyYgZrgDNNjZJSM23BMAp6sYNvfnLD3ggKVZvDgSJvcrmhjBK",
  "key17": "4gWBh8wd7qbrTJMH3aTihaRTRN9XCfSm4LdoePs5JKp4dwYTi4xLmVTfqWWfNx3wDHdR5b2zZKz1FkSpSv2UU9rf",
  "key18": "2BJVdkhnUEQUMPrdbH7GXu1pGKe9XqUxTQxpdvoetnn1FCaC9cRRbzP6sBfnQgRkMzHeAu9K9k3QBUPGHrW2uh8e",
  "key19": "46tYZWe7iDcp8DdwTFDVQgJw9SzRS3JaoUZffqELkRhfcaWZMSUft8wij8AfnPLggqmFjiGASzsibWJj19MECKjc",
  "key20": "ZQDTZWw9VT4qEdxWfH1my97G8mgy5USXaSFSQnwjKgRtu1AV7GZWFWrAQfuviAdXfqzwQgTuQTguuuXPEVfCgD2",
  "key21": "4DRLZkJinui92zQ7EmkDZbZ18Q9enycEPambLUVBqikSaoE73T1sq5mDVhFS2YYTKDif2wFNYaw77wwRE5B49wpH",
  "key22": "623YzzNQqbP2pLRjJJJR5fzzUguXFfX72x17p6sLce5b1UnyA3VVYbvW3Ws26asZt7FZ2rymeAzbQ9ZjFhWdzLEV",
  "key23": "667hZhEvxBmHjwVLqv9ri3Wy2DE36fvyHGPXUmrVuMyNTkKW4zuPtGoPimacqavPmCHNuLA9C9s8DgpBAAag14Z",
  "key24": "4qacjkFuhEk8J57SK24UZWBt7f5D7YZqshGK7qysmj2NCQwruArTcPf1BP9THSJHEka8r5in3hvstsLSDWysWW9H",
  "key25": "5tNG8BtQunyeet4ovicSWHWvvBtyKjLkBZNmxxvJGR6t4B75CEkaAqakqe7Y4egTCQ64NEtDabvupZgWh1Qvavnm",
  "key26": "2t9hsGbFL5HseozPHFRUTVHmiRa1e4NCu7FSTtkFrQ2dGzef5xnytYTqxkuXy3vaZ5GtKQKGJPmJ8e568gffYX9j",
  "key27": "2G8SkhRpRuVBuVT2jjoLuhXPPatf4x2wrBCWPmGkAaPnh3LRKj1G7chiinJASi7JaY1G2yWdy3N39CNgMfziwsy8",
  "key28": "3vkycuZiYrVT386appUQ2TEeEpCPHz6ESMM82hnWRJKpKQVzZ4w7yfYveowJJA5p8LSFJjoVBz2VrbnorZgvn42M",
  "key29": "4Lmry7PywZ1EY4Sw41DBAZ8f2yZ63q1ePWKMTNZviyrCHqooBSX4Mx8zFEhEFQP8iuKe74Si4ZYnBGVytoVVbmXk",
  "key30": "4cnEURiZRBgP4PDz21CQjUbEcoRDQzFNGw7zyb17MBnP7qLbANpjoD9k5wUJo8VyhjtSbddBwQ8Kt6dYdJFhDXg2",
  "key31": "4qoYCYrysRmnejqfTykWpDys1gZUGpehVmqBotbDMYa2BtCeb16EhLuwTigudBRfYQDez9arqWB3CubSmqmwiuDn",
  "key32": "3BcKhTQMn8CzK4BzPyAeJsdyG8JwrwXmVvPRBPjPMiVV41g5H8xYrMGg8SC4K3NDvzBcS4RPdRsT7aMuftUQ7vsq",
  "key33": "23rusiAYyYyi3BYR4dHXehBGMxQkyWWJaoXb2a4roDv5KmZppoDQRj9pVFiyZCaqau1ZaEaUZRGELnUdQy6a4sLB"
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
