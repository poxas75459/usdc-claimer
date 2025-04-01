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
    "2fCVsuRb5GAMQp4mzoDbBNE1Z48CjuEa69ZUAUhsYiPFDBTvH9z6Vg7h4kR3yoqzKpBLKwLgttgEwuL71nhZ2PQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k623gBW8dekaDQYx2AK4ioP54boF9NMF6F7PFXBLwqP47M8xr6h1LKyJJp4LJgQw2i7eM64uBPdW69UqSEEK3To",
  "key1": "2F1HM2Ha7Y7XaCWKiCB2k2CpX2iqbG9etC8hFeZ8YXEich4Crc3bLj1Y1PrFSh61hHT4U8ZeBKtPzgMhMEtPYzsx",
  "key2": "66KS3pgmNus1dbTVK19zqxbwAT588uFuwwuyU1SWAu1T7atD7NgSYkrcEAztErYy2gi5M1o55bfZGpjdhoKmRWB5",
  "key3": "2bMn6Eb7As7Q5m92mZjB4qXb7VFjD9xQM1qqzt5uvaaM6jSY9A8bVjBYtbhTwszVx7uNo5pLK2dJUkEyTWE4dwGf",
  "key4": "jFiHeKs3A3y4k9ZLqJqaUg1QZof3LztQDmkndpivHhi5nwuSvu5qkGDoDxMDdSsJrjxmtxc3G61KgvkXWiNtqmh",
  "key5": "4Qf16aoWqBUeG6peyNkWJu5kjHZi3wX2ZQGSrK6sA62bwKWHUbN9XUZu4Yevb9KFLwQDDtEwNVk3XRUpkK3xHzFg",
  "key6": "4qYvgBLKskr2shUTmRAdVhBT84ZKk7Fipc9ok3NKvCUfvgFDNwxTvm7QyE2htB5RL6L4AgiZUsYSRGd39d4Ws7JL",
  "key7": "DZgHcQy8Xe9b2DwHdbKhLqQ18ajY6rNz526yp8Pru3PbaEi37dJYJPEfa9oR24KYiYScjE57Vm6LsdtjDT7tyd1",
  "key8": "24m9edSGQHcg923hDSn256x1HVug5ALY1xqMAtHkQEq37tyFMbY8jXYe8qQANZE1rJbC54FQGCzXxCudEPzg2YPY",
  "key9": "5uHr56YbMXbhvuKRwDKWzLsuT2Kko3pFQ4Jo54PXn5J1u5c2h5cAAqw3KtfwUH4RHTLnTWVhGH7814jMQpsuyLTF",
  "key10": "z3LmFqaou2ZXhwBBLDbCQ2M7QkWWqi3YazsBpLbC5ZJrnF8XigEpppCAcJ1RLtksyGyikVgd6QHX9JwmTLP1bRe",
  "key11": "2j8NDXbNMMFudgEXugauyGsx8Xc4RBxLGroC3uPSKP9wdFqejnTAHSGVPsFmBM1EcJ4ThHrkNRWRmab8kw9yvbYT",
  "key12": "5Zghi7e7NhPjcfJswV43ZdYaXq6ftYsKtnzXPMVe2xKwfJZfkg6xEw81BEiGJCyix8fmLaTgVba8dBc2dwEnBNEK",
  "key13": "4pQLxDJJ6aATgtbCF5B7WUg9gKd3vFusDxXUi2cCMUw5J6PRv4Zx89i82RddmBYXGjBvzjtb7GoVq8b2TGZjGvug",
  "key14": "4WfrdsiVgDefV6MTGTydTd82BVJD9DvJYHZyFVxw6SKVvgyDtUFidHrQtpF54VgKFQQaeN4L2GF5Qkv7QspnqHK8",
  "key15": "2HDHgvFu8er8vTEmD8GRyy6TLpniK1MLvxSW8deQybXLW2MKbFRwa4XjnRKt7f3kypWe9tiTp2XMg3spZouyHTmh",
  "key16": "2gchMupcWhTvEbhEVc4yMo12y6dsHwkAxT1oG4T9RTHC1eUgRfEmDkaK5Gn7r97ESxBzcTR9gzQKo5ScuvCUFhxf",
  "key17": "57yuSECTan19G64eXgzj5Ux8mfiYKxcrgCAbukQXTTgBmomUsf1uGBuN2mHiFWhQWwGSMkF8HcdGkeWad7wy3Zwn",
  "key18": "c8PV1DJz1PLTuJ43iuMTfBh1x7dktwk96W3fbqkfFXhnvqn5hm5dPdpFaoqYCbqWi7R6GTrrwEmApQ73Z7PURLG",
  "key19": "5QHzSUDzpJCPiDVNiRzrzKkRrCwNRo49fyCiLqpsYdy6c2ZDw1mhC1orV5LnTu3agVC1SeKAHL2BcrUQZyLCV91y",
  "key20": "2KPDPw1ed9DbowmBHBoXBLU1JamFpoaPQ9ZdY7csbTH5RP4giFMNZy64dcXWVawvbYfgGxKamFrBb3vPYQyzy4KC",
  "key21": "4u1XQodCGhxSsWWwS4EqHYvMBzm73PN75wn5vjAzy3uUdPnXxxcGonetjxUGm9XBB8AKxUVn2HTNJiHHbBZacFnx",
  "key22": "7HzXMD4YqMkyLteiwBB8uyZSpQyEzcnLPmewEmKSdpj8MKPoWESUG7mhqmqBoa3sJ48zRGYwa1S3SAFff5bCzu9",
  "key23": "GWKEDbN8GnBQN2U2c1Rt6jaMwi51KfLL8CzUVbhdSKvuR8vw3891pb4PAZv3EWqbyHXL4RNZYLj6rVZpZje74GJ",
  "key24": "4iMfUtfpqa2gnSVQaGwoD8uE4awTpmu6CxnUnafnhA5jZ2wHijp49RbwKyAE6CHYQ7FXZTWkewF2MRT4xqeUpnpd",
  "key25": "2MnuDj1Qh9YtvYJBLTzqC1Po3hnWGtivdwvCKY3eMTCABVhqF8h3ujQkncvUucRr3HXj3Waa2GwbXEvANMMt2vEV",
  "key26": "2335N4TD1KgMf1Tx5NvgawCUEqsCkEH6XzDB9DFRSnToBpxfv9Ko9fJw5aLebXMaNsG2iT2TuaUpQEFNAYcZGJG5",
  "key27": "MSeuY7YXeQaEPxNBHnC3jhA8LbbbhPvtEVt7s7MZ9mrm8ZknxvDMEELXjbdgrThyBBipE69KETrA7hnLd48wc3E",
  "key28": "63iNGRDFAupNzPq1p1EQufPR2512PXqK2oWujAezSEtjhqe5NWJoqP2B47y6ajG4khqsVZCDe6LRocf3hcaYo1io"
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
