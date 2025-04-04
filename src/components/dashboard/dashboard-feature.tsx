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
    "2Nn47GCpdP8KW3ZqW2LZkGSmNjVZtdCRDN6SD8FSdPkbwEVzoBiSBKKWMvmhiVkTfuzE1uYwDH56E287UCtKfVMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HGX93uPomPkzu9nh3hdYas4JYg5oNMFMAEwqiHqqXjfMe2291QqoeW859LCviQwEwrdoLo71tc8EVbth4Kxvfos",
  "key1": "3eesT7gNPcoMwDcss4YVwjwEHnGba4XfvPWTWe2FDSTiphkjgXkJbxTpiDmymv3MP1iRM2Dr8Him5HDs32Y68sTK",
  "key2": "4VhLRg5KYSYzK4kofBceLMade5ivtdfh12c3hX56iy6rBQx3tpzpVa5vw5LiRfdQtDerBL8gkwqqQLWUvKQTvVYS",
  "key3": "4FLmEiPgMzwUkj5xNKcrhv9Cdp145G5ccPYfPaADE22Jr7mn92diiZNQPPdh8LSd7RnxRJXu37bQm6AYziKJoshk",
  "key4": "66iNtXcqR1St6GNqMsVwAhLyAb3krazMvHzBwCGXuqHg2Kr3iUsaNSipbpnLovsHprpRDrqapAceuRVBTnf3DJAm",
  "key5": "1Bbc2mVSD1PpbN4iYg7DMrJjMuaBNkYtXNyJCn3TmtoUH3RT5CCmLGXXPSZbuen67KyAcWR6JpZCzjibEUxm6oG",
  "key6": "N8NjMwz2L3eLdCPjgPubnR6MZ6vRntxK65wfiotPUy4dtPAT79CiHUFRtmXxYgEWFmuvzynJ2FZC4Rhztnm5Bur",
  "key7": "aSeRm5AS8GhX7AGyamWVyNrZA4NLwdSjrFE2tE16v1i7Fyy3qdxxqLZMd6823Yw3xvPAmNDWEu2qdkuhjSFVajE",
  "key8": "5ZWmbfRA1XPLxYhQawh7dhg9RiNBDCgB5BfF29uzU9Wtmqi5jNBdye6mFke5aHvCeo3P6NZ5TgzZGHwRCM16s2p3",
  "key9": "5Ju2HzZhMZNEUTpM87qCefn7Sd88f4SAkzKxPaqxTJGzGDJv3jMBB26GmpRn2DxQSFMUZ1JeGWCuMERHY9X1Nfsg",
  "key10": "62voazvV96Gcos2XpTUpaUhypHSBiBeGxNFR3GHnpQG1GsUGo5iokcaPg4WAh81uMJqFqDTG6RymDkcaEYowwt5i",
  "key11": "4PofuVwuMrMcEey6RwdudMtD3YJP7kXC2eKfVwkah6HqSF5khsL11QZvbMGBeResjBeNpzudEHSqRXjFaiK83rSK",
  "key12": "3ioL4XGLmWgZ19mtHLt5nf6joML7KNSJFaqwjXt7jdq28AAq8NYUAZ4oMn7HUDj48gti5RByqsoCajSRQoGvEu6Z",
  "key13": "iPM1QVSTCH9WrfvhEqfCKE2MAVmvoCw32NWYjeksHCAATkjo47814D8tvowqhBxKXgTWi8GRKo2eZsFjVMxo12P",
  "key14": "2aKPqp2LU7FaFcsAfuZJttAGAParrfQUH2KGUxKCWgMg3cmnUqCE7ZCJwyES1pQV4PKv1pQrvFtLLtJchdacmHy5",
  "key15": "3oGbCjVB9EQyxBYJdmhRpAh27BUdbiA4PFkqYDUxqmCqD5cFrzbrxqrXFhpKD7ptJZ4BUp9YMirGaZ9n9t6TVHk8",
  "key16": "3BTRhA2CKf4MBuKKUzXLrBa5WYvndgPxCQxcjdRgXCriy1D8kb3uK7ftU5eeEVYX3SiyiyCUNu7dwBiQ4e9Vn152",
  "key17": "66pr23X8TUATbwjonNnCKavNXzYYaHAqrSKFzDg3f2kTa1FXxrJ3z8mKKmw3KmStXmsuPWZaSJg2vveAdxfhw8D4",
  "key18": "5e3xaR34K7eNYFVczBy73FGF2jivXFKVEvMiPWNohVDMC14c5X2aD2zaLceCdke6gyNajCWQu6WGk82KqFL6oKis",
  "key19": "4ZCnC4L1aNgUTpAJ7jYds69VNd4yQC1popGUoQtRewUMS4MNskzFz1Z6eLTvNH52ut52wN9TT4zk52e176Uq7qg",
  "key20": "4csgzPP1MdQGYafNyqvvfk8gxe5faLgZpdtegYkDajsQNoHGY7hVdAR7eHdmi6odvzLYFoXvM3AJiJm1P6EzU7tp",
  "key21": "37ZwNchauorpR877eYKwDnfwL36uijTPZdh2wb9kz3k9SpoUzSwAmDAnU23i3bXKV8SxADBQdJiDSBaWSMHomJne",
  "key22": "3cDe1nYwoPCjfcmGy9yMQTcR6SFixq9nkTDvL2gbT7bTHQjLTiTtT8bUN4KUQU67hffTgDttfobB6jQAp5RbgzhN",
  "key23": "4NSkuSDeAD71pwt6ys4ML1rhkZKDQbqrfGNhLQaHw1PKmVjGYw5jyvtNXJ13FtmMrqJCaMDWx9jxyrJMDEwxUiwL",
  "key24": "3Qpv9Dbkfa96MaFD7pucLP42yNANaU1C8KYhLGjEsVEdTpSY8Bha4eu1b8fhFTMuSySp6B231zE25gsSKQzDKqut",
  "key25": "nwBgjPNxrWAk4XsxGmoGyh4eB7tjPVKdmTnLCeThRjsZmjoeGARyVmx5vbx7oQv6T5vJjnM5mBaH9w5fmZa4fh5",
  "key26": "2EKj3UCktG5P2ZUaWhRLHqSB1kYo6W8q1ZRjfn3uhTumM1nyUSsq1TBosxH26L5E8fteveXkzazTo41WasgAvPWf",
  "key27": "5ufAvhGuQ5Drvi6xHnGvVu8xtfvTmaYL2KvB8ysWtKJv6AWTJkmASBLSuGtCJdWWDQimkBHYCi3nxbGcybcmM2oY",
  "key28": "2trVVrEKgk8QkjpShYyTUJ9nfDDj6Rc9LX1N9V1HxJ6BHSCqusFuqKYzXXB7FyL1qh9FtxXr3FmzvBLM1VQk9tiS",
  "key29": "5LrTyoo9feRSMVFaPVt7Gbj2peuaCVpHtWj4uevGJudUQZGpUVfPRCdCkun89NeXiR4fNSTk2Jz5qVvh3wmDYXm2",
  "key30": "2Qq7MQqqGLVUBJ8jZuWA4Zhatqq8i7REz9vGuWEQDM8YyRaWuSDuEd8rkiPapPTC4ZMvRs48hobvF3Nkd76rZYrQ",
  "key31": "eJ641iWh2BT78bteBE3zX71YvomZc24bYeXKyCja61ErZtEEQvuWgnAz5FtTPsSxQ5D18a3k41ncmkYVe77jgCN",
  "key32": "5YnJZ2JvWfixdkie8BCsWPJk8N9DNC2LooWVQQh6DraDPHwz2PVKLgcgGL2Cw7WjcQbiWonPbf64cH5btM2Npm5r",
  "key33": "2cjScPdTD9UqZq9ewmVkdtGXFnhsohFE2CBBAmHSraxtQAiNCMN8gPKBnpNNV6pdn18XZvEaVCBDeKQqmWG38W3r",
  "key34": "2yZ7YjkJ6cyv59DVgug6wA97ppPRAjj79jtt54QpuCTMB8XFpuvXRntDqadQbNeLZy6rVhgFyABNgcV3EikGVUj2",
  "key35": "rmVWQJX8dSUUgveD59TsycioiTwGxjAMkihKXviqu9BNW3vFFXawTQG65x1MgAa7dMzwkQ99vs8g8BHVoDXigEz",
  "key36": "5CcpFsLZmNpuiPxbh4nSWqVSCUFYRrHdzSauwDq6M2ehP4K2LsGuJ1UuZrLi7mWFpsUAPfvGyzL11vzHd8M9cSX5"
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
