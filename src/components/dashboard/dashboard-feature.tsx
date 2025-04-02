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
    "3j5CBkZ37EmFfvSvt2N5YNPMMtSZDBuTyDagurZSHLtBTNTnxig73KDXzs4mi1hYrWLRndGRhj5KB233wtkkhimN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p3tnZDnE3VxYP9KV8BboiZ7JjLRJRpsHo66Vmc4YQkoaZJbG4ofeWWjcTbqakgfrHBUSgsUKspzebmKw53jNaLt",
  "key1": "127EaEahSTgHANWKr2krUacfGV4LeG4wTHJPEfLbtUrir2JfbKa4CCj5sgKWd6H1zw46Lyj9mkKZs7JYW3mYTALh",
  "key2": "2o5ZX6HEeubepVxAvQrZ8uPGYPoa4SmzAzRt1RtG8vGzqLymqzULCfh4N8z59RmH3KhiUfCarefEU7aHH8Vdez1P",
  "key3": "29z7T2trtv5QguQHpapTeXSgBNCyGvsitMg3duXB4CZNmWfjc3AFDTRDVHAubzperMS1hDBya1DWPLkR7ZRY9ZPY",
  "key4": "2uav8FNMhoRBAJyd4fByCZj2YPDgw8dGhnXna1TT471KvHgBXqhmsVzdmHSh8vrd2ZCCjdriFYhg5Ta7uw5ivMD8",
  "key5": "53C61ABEuSXsrKMYnzD1t1A2yvXRKtKNFMRSXUMx4foJauYFvpJiwb2dHmujQqSPdbXX4ymDkrCWgRx7febMkkeM",
  "key6": "3ftBZwNnSko9hCrkKqXtPqNjUTUvE19ADQ7bfGv6mKnjwNdC97LL4mBLqo8rUr8SwR7D8kvAUQYRJTZ4DFgyN342",
  "key7": "2uDKjBKqyxXt68UteYtzrjiAUu9oKp8QSVfwR2JV4L3WZN7MxPv5Z8aMcz7B1XhTtV1xvABy8ZQc29jh7dGYYDXT",
  "key8": "3ExNzpkYVjeBYFPUYEM8YapTUJJhoCA4ygRgLJ1dNXjABWSfVHYcMCShr5Zy1bVSU2MVHnCofBirdaF7mqU2hpCi",
  "key9": "3joCjDw5E5bWgiAbswwcE9Af2vLAxBxLweQCtSz76V2p86EdbZ8VwAHUrRBY998AytK9cYsLk6VkNCHFyJMpLhbN",
  "key10": "45C7tj8XhcR9PzrMQ58gkhRzvvmgM769fr5wDS6ND8BfS7sDqENaYmBTFAfY7NyWtptVk77eZSuZqBSHxXK3xpnp",
  "key11": "4iTmor3nFrsuFQUSzonMDHeGF1Mf9oWbjgjecv1KHWmsmgNY1nTQ6orwSDdTrU5VPqEr8v9ShuKArzkqDF7aNpRU",
  "key12": "46sXPijv8es38damxxxcWYFQANF5gS9aV1U7RaWHz7iXVMskDcaTyrSkUUC2aT2nCsjHLgxUgohvweAGCQmre3qb",
  "key13": "2bGdgLFFqvfWVPDu2A4RtxmyZ36rVdvgkVdhHjuijDM4WPmEWCG56YiU8VZq87faGJmpmwfc93Hs7Ph5QkE59mS5",
  "key14": "2JQkUyozXoUJrVfG8LWSkh7evS2gYUpNpejEfSbWYCBTXpomKvijznVgDW13WuAsTVzXGW3MdWdDjzk2xpsdup8v",
  "key15": "5viK5rKCPKX9kRaBGYvNG7M5LCPHkUzxxvQ77zvQEGA4ZPQxB3T9rvN948d3e9VXUYu9CE3zYfrmGuHmdKSsZGeZ",
  "key16": "63iuyoNwfbF9x63ieHuAz8eygedSx7yTsbTzTCtDNdgzpC6bRhpZtwdozr2cpX7TfjT6kKz4gPoT8ZWTC9JRNqqA",
  "key17": "25mN1SXrzwp94Un2BvAsctE4MR4VUBuKjTdesJBGA22ZGyB8CmMKMjrdXZkEY3ziuveeWR1gL5SXjLbwbCWkWcLP",
  "key18": "2yYU3CWNxz7WwK8p16ybM17Lx63r7TUeZD1d42mA8WHFByqtTd5SaHjCaz3mXVVNeyAVJyYMjwbSmYGtKvCnAoRv",
  "key19": "5qhfEdhhiGqcjduw6Q6wWvLw4AwvyL4pajYrZCDRMikrKTVtmmpBVaykkUcMY8MRm1JeHzzMpCoAX5wF5KcvL8qS",
  "key20": "2omR7XLQN4sf5h9THXamyB6kBZpo4FtoNYhNFq7KvnNjWrfghYke5F6EBHUEDGS8LLVovEf5ojCKWeokB8FFpqT3",
  "key21": "1WnXAgX8pFuzSoXs6juMz8rdckTTNbjjWeTzj7VNNBrpsWoyhvt5o8qXy5FqKFW82e5vAXYSGGeBebRMtGXt4yx",
  "key22": "3Fqb4oiaohA89TbrY1Wz4EHQ6b6vmXRHCEaw9igS755XZJVfWgcdFeWaBdecWeSMVNqEJ83fytq33QamAtjx67hh",
  "key23": "5dy54uKvXn4S2jwy47gWJFQzKWMnd6YyH7ejPqWd1mmqmrvxM8AdoQs33YoyU7VLB917AWS3vD7aqnPHLC6T9kHK",
  "key24": "35wRCSjjhdqKcFZssctXQssPFoJipqheGXZKYnG1NJCbPiUn581dc1SkC1UsbpADLFhCFni7vxnfGDo1KsHMeTQT",
  "key25": "2fvCusJ8QaXuxAXLmzWwnybVzGhiycZrxPHeBEiva7BKUkvRtqm9JaLx8My5i81AyRvYfsJsHsaG5Jxv1gvRW7kN",
  "key26": "2hy96cCHXLb8Wj1vyVR8AHTZ1d8Jw2YCzMc9jhqNgrRthDWCaaoAtr2oWRj7afVbx8myHca3ekugW935Ht4gqckP",
  "key27": "5GmKTsEYZZQn1o5Yg8GHDJTSKqfwhFys7Mz3KHhg9KFpgL5WmZASbhUE3XikxXR9RdAwQxexxM59tGrpBL3enSqE",
  "key28": "BBMs8YqpD9Xxw5C6i7VoGnmQ689MsHLvxe2hLkvDmgqLqcnbmZznMckuj98sD6fpcpq3BDwc3zKP89QxLx9hWGG",
  "key29": "d616GHqtAdWnzxi8M3uWr9uCrbPFomMVYxLexKPKG6yygGUkUNLLjGbUtdrhSvmd8zyZC5a3S4pHeu4esRmEF9u",
  "key30": "WrK36UsqSmCTpjHPbJ3igb5ffqofxkCXggGQ2FBcAWVG5GssiDL7Uez3B3beM7ecPhqxBbqGLUT6SKTiQWkLaos",
  "key31": "4XxG6wtghN34U6drUYV2a2xSLgd4YYGHqVXXUW3GMReRMEaiZRArHoNd6u4oN395XZaBQQ5n7wi6yhfeetvXAWvK",
  "key32": "GAASfXNv54c3L1bLuWa6wM9eGXNiAtRiiBA9nNFtPLd3E6YfwiKxNMtLaAbhAvbBges19ZG2mdjgNxVZ25yccT8",
  "key33": "5mrUWYmALAjbnDGCTkDRzsiUbBghyroP3LpP7qoRxYivtzTwb6UJZXwew4zxCmXnWDMAB3MKr1YBrVy2LuupMDhf",
  "key34": "56h5jiGYezEDtQS7J4umdJD4yzxtpyEBNAe3wFiostxtCuKGJWk2YXbMovKhbHSyUf6FsdY7ihSGDqaoQjv9GaSH",
  "key35": "2LHChAaQm1CxqUsKqiUjT6CQ1pVDdU8jAadS8H5PbiaJdMMGxpxnQunTsnu2DVWSFNfkqpypvkQGLQwV4B5p9frG",
  "key36": "5Ezbr3oHFQQq4Wc1ZetBKM1y7ANe2qmFuxLNp2oymdfq4Kd1u7jzCayAw2ZLbHqGcxpAhdQHvG6pLdaMteHdpJ7Z",
  "key37": "4W4G8EwabMZLJd5KUMUtzcg5CKnmpKHM78LAr9noWswppj6QFXsg1Ljw7PCi3j75wceH6X7XdEh9RTLvmzTLyit1",
  "key38": "3KtN8Upis7Ub2Xp5zBXnEemVWqFWN8uric5kceiN1xGcJNH8LfD3eQSveceQKmXeJ44dTXfBvDLsVvj9n6LzRZLv",
  "key39": "3zUpJDFhoi1t8MhqQXiXzsYPh1cVY8sjcBocwWaUvLoahjZQWp4QMj67CSS7YvCK3KbGKM5enn46CwjuN8Z3mKVK"
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
