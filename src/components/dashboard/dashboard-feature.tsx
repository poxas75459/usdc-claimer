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
    "TQpbbKVVi1uM9U2G3DdSmkQJbYwPQ9RYTyANufGowfajNSLdSK2vhrRVUpnu8VEA14LnZK63QPsutgS2QXgLXEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bEUqHrKpGbsg3DbFaYDa6E9Zf68rGuPuMCBxJdJmyoT1FZq6cEGK4eLSfp8mmKxx3AWnjopDaqYGLbNQ6pLH4Yf",
  "key1": "3vcDUPpCgyEn2mV2U22KUzzCXYvJe76P1uFaopQzFmtxxLLCSKiQoznjZZqZsoPReAiNXJUodQ2ZH4ksgvEHzPse",
  "key2": "2Wvsx1sHyxHg71Ns76g6xNqn7eQc3YCMnmXxN8Z6YZBvee9v5gPaHLsnzNAr8V2oNQiqEL46c5TBGJ8x5wGGD841",
  "key3": "5S8Z4ii2rbzSqyWgsD31QcuKRQYTVbyB8uqeEs1aj9emwsSByqSd5nZ5E9SvCHh83kBN6oUBUms7BVNqK9QUTQmz",
  "key4": "37gxkzwiLECHtmge1iGF7rD2Gq2NukDwFXoeezrFvDBRdvMXsRXiuH13Ej7v6JF84pwpbznqGVb9nHmcdWatPzRp",
  "key5": "4M2g8tUpPv8ZUiQWKCUcwD7i3XAYKcMbPDveLnvrMG3sUqfn6RQRKUw3jxAnXmpES8e6Satxc7ZbKawQhw3GqBFD",
  "key6": "2XXgALcFF3p282ppxHDkhwqjnbW1GNeH8wnu1U1YcdFVumF6nQVcn4TynZ9wR5S1SqobpfECXd4FxGqWHuyPQoqX",
  "key7": "3mQvvVpoCwCqyQ2Jy1uDQbQjCUFk7GJa4zS4hfDTEFAbxH6572XxYCq2LkwDQUZ1MVyfWWozjZS3LAQDbqhtxWTs",
  "key8": "4FjP6pTA3maREL8WFCe2JdEKCtqTsy478xAsdEeBJqrZ11WNu8NKso9L6ut8EXTkMVrTskz6ezwo9PjGcP3LPJjE",
  "key9": "2NEi76ZL3DxvPydSTkQ6Z3kSqnYQg8h6PzBf5fnTA9T8YG4ypwyLkPrBhFxcsSvKrBuVmSzbowHtLfkdwyTCE8eM",
  "key10": "64jRbmxrBQXHYaaMd6FRoB3YBfnmyPp2RWuskMbr8PkgL3rn7gnKmMSWbSbQraT4GHUSWq28DTCcz6ZqFjkgBBZ4",
  "key11": "2P82cV6xt4CMEgpDCgfv944sekQEuCwLzDq3KpJKPV9cCqb2JxE7inoBVQbP5GkvyY6rJ6qnHYvHFgsnqcxu4PK8",
  "key12": "4gYbadjMucGVeWMH337dP9ApMVDWryowufUa7gXUJRJnHtqoKWivYZ45jHoP3gGohr2Yrdcrz1tbaoriGUQmi49i",
  "key13": "22PSG5Drw6ADWiqdFswWP9zExV9oHyZmGxxj3pvxG2EtPvKdb1vH31Jk237AQHjTvbHBT1NDL1ijjJDFXvQSnRss",
  "key14": "4eLQT2m7S7kZDmMxqXTBt35FGxqJStxTD6fMv2pZyVHJ9PNJxAYf9CxiEeao5kYdfqASmYhHzwUjj5VtD7v2PmND",
  "key15": "3vfbZLhTeyjPsSUbFCkaEKV2offHyWKxz7k9c9VQXfQGo4jRJVrpAHJ4SjhBdMkurje4EzkN1E2WszkkU7M8Nwzs",
  "key16": "5ehL2ucoRxHQAK4kRQ4GZu84yLpjz11TpmJKzvf8GJgeGut8vbgb6oXxDp9efD2iPCM8FNLFgkGYHo8Rkf3PJq3T",
  "key17": "3z18ctgVwt87k9KVpzYjWeRQSrfnNuMwzacreZN2fppKhEJz6f6qkSrtNcCGQTVmFKEaBRZ7E7ktyLeF34WSJfXr",
  "key18": "2GpJjXffNsoFrN2W6Wca32TnMvbpr7uPUjk1MK1WdvGDs8AekMECN6UoY91i1qZ5XWYzn3KGHBXwMNniba3Bp88x",
  "key19": "213FDG4nNqt4UsUJJaQxJ8KuJcS9EYYcNP6RbD9yWVEFwhtrcU8XMJfTouZsowimjC7D1jLiHg628Baezr2onsFH",
  "key20": "5qTut3JXWhpCUYaxeoDNVintHXRNmC8SuQj3oiUv72wpeh4nfz86e1e1YDcfHYFaMRao4T8YtfAxTSvMg3Ht7acp",
  "key21": "4VB1du5zU4BTZAHUXGJLHF63gMdnc8kiin1Rx9pP6MS7PmodzWz9V58iYpVn7PjiQfDUijjaJDwiXjjCm34zKTs1",
  "key22": "VYjS7XcZpX4pNyCRypQMf1o3Ka6neYGB44dv5iq1n83SYZRcUEUpdcoTwE3JSJZfk1jbb3ajCzejiftQQt4mn5w",
  "key23": "3a5fC5J657WhZRTp6aKaJsf5LBYLywy9figaWrQE3LKdNqiL1S2srckRA87B2eCyP6zyH6i7RRqLreqDPiu9jH5p",
  "key24": "2d83iem1ovgMGnVW8Eu2NBRDf1TKRoMk16nKPNWXU6WeaCbB67C7syh2rXKrsEQdMJppUG838FKg1phoMRaYUvXL",
  "key25": "3vRUYGJEnKeqe1ccnBvKEDb6JXD7VtvvuTHK9pBc3nRj2fNj1KqkFgezeQRZGR7aRTMFJZxjRfPKTJSrq2HqAaHP",
  "key26": "ocbQ4i4vkqfs7jgYTLXMG4vGzqF5Zfi1xXLjh1xiUQtTmAF6YNXVmnfq3RSRCTRX4mVPYT8mc1bsYfYf99AqWkH",
  "key27": "DB4oVLKhWJqbJRj3VxTRhB8CnWQbbBbLcnUzfN57dpF4eXekeM6kYKmGKhKgYcHnhYzFHgL4fTvxDouN6hA3md5",
  "key28": "NV1z9TUjCJ8YDx8Pq8KpguuPzt98V2qdy1AaTuiBghZM7UDTGwVn7ac2VW1QYdZWSjDdCDNCqpHWTAxX9yixmnG",
  "key29": "AMKFYZfYmKjkL3GUBPWvtzRsYLiwA8h1NrDhzNhAXowukrvN3cMPmxejiQBh8coGe3BJFMG6UUSiLR2YMNZwTL8",
  "key30": "WdDdd6Q3TPrhM4mQiKP6VFhLoDjenBc3nUWgywJvnaGwybi5kZS3MdffhbYtYsUWtHXjbjWB53Kw4FbWbuS6icc",
  "key31": "SjE4y4vPGM43uHRYe59iJgxC4ZJY77chxSzVdyeEYuAZnSVoWHhLmRSbKpUj61CF8N1q6wZ8NYENZMy26u9zaLb"
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
