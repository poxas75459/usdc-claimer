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
    "3pPMjcr8vhV3GQS4ewu9TbAp1H9R93ZVHCAPyzGsJMYMJPYKnVRZS1bcseMz3WGQ8ddoLgHoqAqDFmiYR6h3y1Qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iohMxhfWZgNtbbkovb3rpNRdMb2S8fmJGHQ1SSzqmhua2h5bHjkByaqCp1f9eT3EjGt2HsvczdsdLpX24sXWMW2",
  "key1": "5PaBCGKtZms9aX7cEuXv6DZwJGm6wJcQYwqYYajPD1ewpoJitmN8Q8LS6HZSrFWLtmM5Aw4wBLEAfw1Jffh8yff1",
  "key2": "48zm9CzCmK1zNb6ixhtNcxRJgE3ESsk3ta4hRrzMeRAKetvEwjLMNh4t2RqpSpjJxejorsGedFeEf5Dm8mfrxhRL",
  "key3": "2CHxwmdwVicj1XP6QMYjYLZx3yMMa8Qnjcd1hC2QvsaEEGGVwftfmtDAjbZEszy5trVZd4qCJ9hcRYU4DDcjgqof",
  "key4": "58jwaxohSEMohE7FEZAasZEXNvFS6EkXv5kU342kE4oBvm4rwT82rWh6MppWenVhgheLSnTVnUx7KG7pdKi1Jow3",
  "key5": "4BcXujk47PN1M16dfAU8m5wwX7sX3gc7vSSno9CGfJJytZuTihfVGVQ1jXKWq8aitBGvJwiNzfimLEVXusXc4fbz",
  "key6": "3Thueip9GNAFKVNwN4W5sLZc7gc9yzHMVa81arnJU3a7bmsHsir3AN59KAFekTRbdbwubXjoqBtXyN8WSyiWju9Q",
  "key7": "2gLdrvA6xgQP9HkfZxiUjNabxoDamrvf4jK3ekm65xDEp85dF7vqBAjeTTMRWizu5u9Qee5mhpTLwJu1EE39mezy",
  "key8": "ghjLkzfy95BpmEnhKjVC6mUD5EkjijSdC2Rnk78Duw4EPi5f2UadUARNWPdnzYVfYjBqGj31KAPj1L5AFECMoVP",
  "key9": "mUN6ooVysDhYqEetpB6DJxgMpyVsXBefYtFFMRxynaUJvADgt2RagFZzYy1PG1chN8HxaficaZesPM6EuZZiJg5",
  "key10": "xSPQnhwx4F7c3tfrajmr7LE11Fu5vLE7sYNh8MB4hBKuug17xuLAT57E6i7rvHhq8u5nedjvyfsHuYfUJj6XaUk",
  "key11": "4BJVvewwWFUgy6aAkcGYvaCoV5yF9Zuy4nCXaR7juZ7SVrtZBoq5AyhB5UcCYJHiU9ieLFCxAipjwQxbTyntNvDU",
  "key12": "5Xya5hE5e51kVZVKAuQG7HFcP9MVGcLCwjVB6HSUd4dbjegLQRyEFnMtpygCZttk4oEXhiMd1aiocwKDkNAp87oN",
  "key13": "3yQ3PLVxDPDVJTkjxT79TvxBCzzxgd7xk7LHTLSwW2zBqkDoomVnAxgMEps4mimHqo58iHL1rsZj523pG5GLBrZs",
  "key14": "23KpGyY8jWNeZVJdQbW7GxV44s8pivp2DfcdwcpNaguJ3ybC3iEjuX3HT7bLCmJMH1wGnxTvHdRxZL645GBUqJBs",
  "key15": "49dYvgKnfhAgJLX1fAL2ca3Ws1qAuBTPQgoZFck797aRFSmKe5qdjk2vByBfFv3yDimhhvHkCGxc7mMBSc6ZzFPa",
  "key16": "2B5Q1zohk1NmJmhasKMxJqbtpr6uaAd8tHovUujJDrFbbDm3Jkk27aCnrd7oEcopKBU8U4H4tzvs1aPKWPEsdWAF",
  "key17": "4XVQxFjZuTRMFRPAoBHuYde8yEfWjMfffCi3m8vbNws1cJXYhDQ6j5bvdXjqdxFTrm9hvnk2s95udru7yRdLbGEg",
  "key18": "JsV9HnkgziNzNseRRdFVDWFXHpsL8uBnK65og72TM59GxY9Xo1KuAssXKhZrtQc2ftBL3n7R65xWz8dSfH69AAy",
  "key19": "3VWPoaapppoxKNzGQVtUsjoMCFHU2NZBfUAFkRShmEzqQBFMbsLFUAouomeuUS4zprCcuQu34inHAFS81jKcmNx7",
  "key20": "4QeT7Nivqp1GuzdPvs8zXTahoNuR12mzSyn8qPUMmRRTAkSeQViM8dQAtwRYJJhAjrpTjSiMFS2qu2DkPgYJtVuY",
  "key21": "3YuqscNvwFu1yfgk2K4S59cXgMb6FMnjeu7CZUJHt9ZBDMaUgqn17W2oRjyEuzVpNNZwYcodr4euT4CBzSeNmMik",
  "key22": "36SrQtTdMeXWShxKVW4YKepgzsXpCP8KnMZ3gejjL8TgEczYtJPP8BeueoqP3ee3bqFTeULaYQzDUDr2BF7G6RJM",
  "key23": "4oGi5tPMNfwvPPdmvcCbeGiPb3UpVf2PecDtZkeLmega4oaXJkaBseRwCWNvpXBuanU9SDLtAs1rtaznoUHUggGW",
  "key24": "aG9AiMn3bksaGycVJA5FTw3MEyiXu54T2rF8NkoL4Ma4QSvcYKnsmK8CAc1cYn5S3MUC7MgrnoqQXfRFDkig5RY",
  "key25": "5hndq47tLxC3aPBeUxj7WdSd4zJEXCbAUj5zwsB8iC9m8Eka1H5GYPdTtTKH9WvB36EczobGBR56BvudxZNAvMdS",
  "key26": "4vTKRJbBzSTX6nQXPo6Q4PAnch4f4qayvgJi6VUWYY3EQU9GA7Rv4i87net6PELEE3MZZHBddFmXQefLJ5D2Dp9j",
  "key27": "29eP99b88h6sWL9B1ndtyJFLqwBQ7nf78kXBCjnLg5AtbPw7oHHqxmuwpFgemBiprneZ4UvSqdAjwpjJmirUBf6S",
  "key28": "3NpJ8dxboRo2E3nueNJH83vP1iKQrxTmEyH9Ndwn5fay6C2PCpCZgkhs1X4dJ4L3pSbtsE7LAhhUeX7QhkMaJhxY",
  "key29": "38A4nqxyvkFgzRobJ12etUAGQY9RsAZZWgexGw9PuEkLRsVuwbYN96S4HTA9A2zhhGMHrVt44FseyMr2e2LyfBmT",
  "key30": "2YBgGD1ptwsqHjJo5SZW7dCM9opgqmw5HXHH5khD8KMoE2yvRrSmrsTt6N8iZnuvJRCWPBi6e72VNDscBFoYmSfR",
  "key31": "5KwzL9E9K1zcsVPkcxr5D528RcHkLNnhHy6Ka987DYn9tAJxmw6exFdk4Z7wMx4NKeUyUmgAxgLm7hcUNUKF9MtM",
  "key32": "26V41aWmHXxzdwN458xAJUtwfJjoXAauJyvBnGVm8xHxKEKdioUG7PBFRqiLTR4DUjNx5LeyUcMBitf2ZiYcCFBf",
  "key33": "5V1UPXCry8aohAy4XwxrqH5iQ9J3LsbCWUGzg2SgaDVp1tE836b515iWa2iM1zuup3QWeqidrfNhqTrxCDTWbvb1",
  "key34": "2Qeekne8MqGHfnCDsKn4qgWFnUHQGEVYohKvDFpMrxUcoDcXgZR6hqPd3Z8jn4cUjm3CebZiGGdvNMEfN1LLfdph"
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
