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
    "2gTw28tAPVzh4BnqHgv8hj3uaEB7Y95D7Z8tnNgp5pUFBokvbYZzhUVMATdPFthRLRvvFbaCQUxNWULHpp6UZ6Bc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qoyid7uaSGTf2vhphQYzm82n2QuD2YWx1f1NbaJfNgN7uw6nXnH9FuzqNNCg5oqsUH5K7bGmwBAscQAwWyKe1rJ",
  "key1": "3ru4pXVSBBG9xobDZS8VcrekvYXBvHVDi22so5P1J92qJaufDzMyN67ot9Pg934Z4che3ACkAGfZAHurgnzSy6qQ",
  "key2": "4gnibwtR6jQiP4x16wVtdugejRFEBUXJMW6995swnc1pmJze64T6rS6DpN8LTQztTTiBe9KNRJfybriXkcrnKb7C",
  "key3": "E7G46jdYD4Ra3DdXj1zhTajAdR6Mq8ii87RPGijBePMAZtsguJyfyST4vLHNrXSggA9FP7mdvrAWMStygpwnNzs",
  "key4": "3AMeDd96EqkFUF2zFVWjEjvkK42AD6bBWoAKotJbD3Xk7nu2w9gHNKQz3M5sEooWhQ6dfYSXuEakwVzHj7MrEwnw",
  "key5": "3pfRSCWNwscdqueYwdSaYSYdHSNR8unnQSFHh7mHBh7ZJAMxndFxAFZn7B2MTDaPoCpe1Cd6K43z72ePi2bVN5cp",
  "key6": "2qBdUD4JaNmxXwiqQTm1iuGvrJzZV4DE3C2Hk6inNemjTinnPJqY6UzGwDQDYqYon3rRUWpReCYXPUNfjCkPzAhj",
  "key7": "4DCCtvyquwrPQbgsMbKk2rHrEQAQ1AQTkGz5JTGEQ3jUSXQmRBU1o4uLJQvyUSMFiWojxuyPNZp4Fg3CgAUKn8XN",
  "key8": "5FNCxim7ndjBunWjFid1rL4G5nDbuATcLVcoMYD9ss93HPouhunpPy9pTkvr5L9Y3Nju5chSWFHrpnwvuESjhWyc",
  "key9": "2VGxztutiTCGBcJuvnoeBwNkmmSkFXxcKVzo3rZvGrbus7gcevyn52q2fr6PsoYZ7tGqYHFt8qcEPjFQFW8hPffS",
  "key10": "4wNtjD19KvLhfr4S8QVUYJ4HJ21b9gYtsz1XpLAuBWauG7zPVcKwJQKcSdoU6KSSoQuRvXpUDeZQvR7W3J7amLtU",
  "key11": "5uRYRpxwtNjYMr5rrgKQrGsQ8XWf8GtHAYUfvyiYiXLNK1tzdnCmJgUv7znHdYdMcW2gvyVYZedWrWDixaVe8d7S",
  "key12": "KQ958ovWMVzPFDsXBEe3o2MZrmikfVaHCsuPuFQxGtDq96heVDrZksUfmBYKepzfypUPWPNz9DLC2oKR7iqTCMm",
  "key13": "43aHqKoRB6EMgMH3imMes2jatH3a1jz7FjUywgHzQgZCUErg8jUhiSUceAqe6uiDtCdh42CxrdbY9VcbCjBnkEXr",
  "key14": "3RJLFXQoDi8XbPHaQFtRmWqzeuV4HFT5UJELfU7gJE9gV683waQ1fMp9tZdLMurLjbKLUSEgGBndRK6X88kBHg7V",
  "key15": "3U9RagwiPLGaj15GLYY9cxwZoeEKBSs5JaPAqhZK8ecHvRgfNgjgNULY76UZAvuzbQ1pCzSjYAeAjPUq1sRhhXcw",
  "key16": "2rzQrd9eQHa5GVAzm6w9UVerPvfn5hnr6ZzLZBZAHjaUdG3SsimhpyXjDjqMwuG4txBUQ2SAqhU21xhP9ymJ8Yru",
  "key17": "5xVosNXDrMFFQi4SFyGpR1YUWdtwkPSbbcyVzAgeJW7JjEEizkgvJETLPP9JiKxQmeg7asV1h6sEfFUUsCAcrSiH",
  "key18": "2qfHa8SMg6jnuvpx4MUji4uv3VWfwx4CjHnpQgdwcRVz1xV4f2CoD1uhLP2ngMDqsFHgMxFwiX3cir9zg68sc2wj",
  "key19": "4o4rxpnskRvA2pGSjDYuZ5cCH1xZuYBmqo6Gtekv5tPu92sUb9yF3qtqBMagifTaTPmFtCePFf4Nu6wdJvnvk4Us",
  "key20": "5RCa9akkjvb8C9ErXcbbxVzARKP6iWvkCuXfAGiZTaG2UmUSatEaoNxrTDYQuG7uvHrKjZyEerRr6QrWJ78CCRxz",
  "key21": "4Yt2bdcxZsh3viMQYAaWfjcPXuz48jxEQxkuJhTkPnwBvjxEeMZF1eAgomAzTEdSExaKzwz9y8CCymHiBr2DJndy",
  "key22": "2S7FV9MaLUBTcV9pr4PYswxSAKdMFZsvxx5nzcMaLGWH61HQ3pjp8rSZ9DaQbsAsgf45BXy4Es91U28V2VQ3UJVo",
  "key23": "2ZJZzaYJDWnGCNmPMEk18Wxhu1qyAGh8VRhx8wFhag9VDaBirMuatHn2ArpxsC3kmihsw118d9MDAqqTaywLidWV",
  "key24": "5Urgmzqch93F3AZNaDyYEbUiqLHmBAoMUe2CWegARRAuntUPdqz4PJin4mQuTu1MFmv5mGgUtFf93L8eAium4zPa",
  "key25": "Y4PALCsqYngWB54XgK9tNEnejpGu4miYLf532xK23aZVhG7rV2j8pRtfPo94tGPCH5LDDYr8SvZKLhQGZ57368q",
  "key26": "PAyepWyuAuJ4it54K3BuVTux6kErKynnnxuooV9exqCPuUL7xu34ZykW5nDnnzhtjewqgrNZEjnmXNq78wCMYm4",
  "key27": "4VJHtbwVaBRQcY64fyrzoX2nxvV6VhAqgSwuWoeMZjig3WGukihEwvyr4Vb7NULqotQc6YvnzgezSEhkJeX5U8v5",
  "key28": "ouzpD7j8cHxeN9kTCXC6LYW4p9qdJC2ddmC5cUAP68jMFNUj1ce82oXmKpuxNoBfjpuWHLjKSSrLawL4hPiC66N",
  "key29": "54MemXkrNmEM9JVsD433QitPHsi8UgRpw6a54TTKDSqqtH4dR4gBzFvUZby8EXyAiaYPy3jVfm4iEZ3ajJAzsf6N",
  "key30": "7dvJnRzXP6LvKna3hWYbddCTp7kyBFhMv6df4ocCd3RDionnH4VVWEX54coZ7aLvLHJqjcZNgtVGhtwBrai6Mqa",
  "key31": "2t4DtQ722QiBmHqYo7U64Dumw2bmY6ByYHAg3MwY3RrfWfVPeZgQUQQ7nQ7yjLi83FTBucN3jyUUXmGzTC26vGxc",
  "key32": "27Z33hQdFa9ei1VdnVaHSAPhkyN52adqYbefmDUAejVxjzmdSdffeFjdhFrNy5HzDFGGCNTya55uMdTf1GJdJ46B",
  "key33": "zMgCw8pife56ofWhvK6waEiap4kNKiQaoDA8UwdkjNhZi95T7M9KSTNy3Ao2n2gnG2exfrqgYJuWqyQKUtUBvsZ",
  "key34": "4A8VusLcaBQEJVdHmFGD5xvw2nfKypdihY4KzNeXutx2cX5m4H3fNEjB8D7fHFhrCnS7UbCmPeqSQ1bTAKyHdzq8",
  "key35": "4d1Ddk5z6XWNJjYnFcBvAijt5dHyGa1sWSQeZj4QbbigfzhWN53nNmrz1wK1mcxnKg99gpwPySZrHq9wMu3LSsnt",
  "key36": "66UMakJ77QuSPnpGQxPRuHkWp11CG3k5TMrB11i9rn3VQHNJRn2FqtSvT1gAukEkVtm6pNyWvEd4U7Kpt8ebchoB",
  "key37": "4dzroJxLFXNXyewDyAx2NTHrviDJZcwEwPcF8hSRJcAb6Y9R9BpJfJje9pEShaBuS7z9Ffzd2vFTQSDYn8zoqFAi",
  "key38": "67f6KUzEBZdZqpGL3S67UVDekAcrGq837Ju1UjSj6KJEpRaKKJNEEdum3BKDR364Ugno2p9bCLpogWjkupZc299u",
  "key39": "HvHpHzPLRKnKvCJskjbYXeRWLL7CtL2isrwybYBKQvEHnnk6hQQab4xQnMLFJ6sTM9LXahkrudM4VY96wBzHXbv",
  "key40": "5iRXGdK9J4Ag2DPcPWJMMrrxFGLcdHB5qT6H6jtWLHQZquMf2tT8BLCfnb33urK2EihKqop9Q41VV6Lrp15Yf1FX",
  "key41": "5EkPFdwQFzWuoSac2wPWnFiLvzNWVQykGQoPv7W13gaQTSfkKNXUwfcHsv61PeGzHkDSVY3cKUGxMuqzyyv8VMtz",
  "key42": "41LmsS51LJV2PAsoqUB9BKMZz4xK9qMeupbUQiUgV7oWEBptCKtn1SZ5S8z8BzqRJsiTkgmFkv7e5LzByzBazbRv",
  "key43": "aVntD1kV7XqiLfuSdKeLwZCDfDuVCsPabGyWeFG3Zy7VZwX8vvwaXrc91DKErQibj6USX1dLeFcZ6TabM9Kaz86",
  "key44": "3ZtNLTosoJpSJ2EgSX2heQJqYJjaE3294c8xyVbo2RLnrZm1dNACvtE4fz84guNxaxRFjayKpbjJ5FELpV7XByDz"
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
