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
    "5ipmMT3Ewo41aL6HrkTK5yLVyeWjfMeff8v1XVvFcwaeyRggYWsKL5hoBYbCeaaCXKt5xhuuDEZY68Pz7PVXjWh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wisJ8SwpGWZbKgpoP81HWPUwNwbDPx1UtodntRkFspUzbBXdsxTk9M5FeNGynjG44veHKEJmGafnLJzmtZAUFG",
  "key1": "2zsdhL2wHNWCQJVZA4otVmp72rXGpHUyN5xD539KfX7KDgt7pJc93xhhkzkwtKpR24ZUX6yuQchDensvrLRvxAa9",
  "key2": "3CJrFu7pgiZWWs8yo9VxgTCNq77e5YGsHQ764ExicSU81yrHjMwLtvgeqroKfXeF4rH2cBSefJPWPuCEHXZDnGYe",
  "key3": "2jZxbB1fRP7no23jTVbGLzb9diAmYfPLwvqNyj7wy9PiQBRHbpWrijgaCy8z3SXJMBBVL822Q5Ud1Uo6ouoCnP4G",
  "key4": "2peXwtza44myzfeLpdQM55toBFM4PzJPvMMPp5pmM4ejDNFw87XyAY8EYhkcV5NKFc8MDD3674iLPZGEpbSZ4Vmw",
  "key5": "3p7zJZBX4uasLoLgBza1CSojQJs73hSLgPmqBCiKG4qj7NYyjXEPM3gf92jfWrPMTyLU5HdMPj8bbMfeP3149rBx",
  "key6": "2hVo7SgUTed9xhcDjuykFnNC5MvvVW2yFZqgVKskbYsTdHHqNJnKYkqctmfVhFEVT7yDDHmDVvf2WCEpDgQNenTP",
  "key7": "DduvL7PHEj1njuBAZ8VnUqvT16LN7CmXfKWRd9BdVVrE4Xauaxo6b2WztRsmhzU7bXh95PpDc11Mpe3VoJFfgLJ",
  "key8": "2ScLyZUPaQ3Jtue59vevHDdjzF4uUhBwPmXf3M6SzRAqZxXzLmjbhrqg2Vu3Jo77fqXgKR9HTSTEvp5djtzerLmW",
  "key9": "2MRDnwjHEx6yQEcuNYiVEzo2ap74oBFUyYnBHymN9oZjUYqz47TXQk8tKHzZahwhBHoH4LjYWHuU1Fc4SRWtWF5k",
  "key10": "4r1pEJu98ZsHSbaXXb5tKsAaCfgvGupEtVNpgxYvoPJBABLLBGtBKTMPsxJ72WAWU3Ck3y1q4ihQ1SQsSzoVmVWE",
  "key11": "2vWXFhqjvBgC4F1GFDVkfgAF8zVFDFQhTHZv5uZCAwSuasZJqz8LkqDyMrTjwZ5xzcJdTta4uphewCwXn8bUtLFi",
  "key12": "4YVxyMcnBe1irJKoxZmJCLkaHUYKUaHnnTjJ4pd2jk4WD6WXYWt1UpuHwKoYD8FXAmNc4Eo5HgwkCEzELm9igfZE",
  "key13": "2uPLGsC8TYKTgoVbFSwzMUxy66TSHuWN3Cn9sCQzpnK1d1vVvzzi3RNFvpFm3U3docueu5JbEwBQdYRXj8gDNGaN",
  "key14": "5ZJtkUbJou94uJSncKKWHMTCjRibDArNyQJbAa55qjGYK1CDscfqs6LwueXtL7iKUXeSWc6YD4kC9WYwCNWNgsqt",
  "key15": "4vMefrU9j7u5rWDFLatXjy5UvL8J6dQkETtRbpUraHqRAqZph6FkJkBSheZ8cHr7cmGeYF1hc5WJsEQzQU9HEfu4",
  "key16": "hz5Ke5c3SBAFgopjamXan7FmpnrvvygGcNLP5fLEfqK5jFvJo6eg7qSpTtoKWsgvdepuwQTQKzdAYe7BVJEsJmY",
  "key17": "2u74jD1HsVdHEKenhWLpc4Wjprw4QMRgiuZp6wPRPJpAxf54N5p3yNzc6hGo4m86NhzaWU4qrYYXMeq55Axpukuf",
  "key18": "4zZaZE64Y275HBSumeWhUT4x3jgJCX1zX1wxWsmDDqGr9pKqJruSRVzNmRA9XSTDbQLSwnxKgyqDWB6P2gYVEtXP",
  "key19": "53jQL3GX3LbLtcFj6mLqbNNKkLHv6wPEjfXcJTGUGTcL2Ngy7FxnHpZz7mmFzEJGdw2KnECTGJVhnKVSCXHHLPee",
  "key20": "2dCPaAV39dLAhgGigJMMZzu144D8pMS5zqrm23AzEXiycP7e1Qf1LkUYd4XSvoCoqE32Roj3dpNb8XpT85iiYZ3k",
  "key21": "5c8VQqVv4fug4hL5YjJQbynUERyf9GjkMBXEQfrSqHtzisjgDFbHbaEygQkeoWLxLyZzaJY8JAkx1xzVmq5enM3N",
  "key22": "3utyBhUjh54ntgQQviWt8ekUo6YgKDZWxQTPunydUpZgvJmaadjUh1xmZ3rWg9havC3kJUS3DbaZ87k9pSr2bV28",
  "key23": "3cTksVc2wEwRycBXgsecq1HKL9VZj7UURv4kiZ8oXsoYyiHpUfkyyuJ95WHkPGwCVx5qMoXvfXbnvVHpdT5BBRCs",
  "key24": "4d7CZFU3U56s5MiEyFuz7VVvjDCMHrcjNeWDS8sb1Dk4MfRMCdAxANLTAGWtCbFY69jRCzvxcyvRQwSDzJSwMY5v",
  "key25": "nXk4qMfn1ehpE13LcvoyXGyWYjKtWzvdnTTTeAmpvHQ2DEoDQJnVQpdQmfrg5qQJVnPcWrhgopTSQE4sZm1ZXoF",
  "key26": "5JcVRzxECXhCoUYUaxmTiRUqaZckoywogf54RCaKDfvRW6fK4qJcmCofVEQrSK2ChbGtgUAXPH7QqMZY6CMvqges",
  "key27": "3VsXwHn5eoduobytz4WBwrYCz7X1YfREnrTZTtuYgaGN1SpvFsN8VscEDSVXFJyAQ9nu86LWuQKbHWtdvSDVHcxk",
  "key28": "F5X9NS1Q5GpZy8QH2oH8pMD1bjbCxMJcVRMuDFT3hcbmPQ9bTjawxBwtA14kVaFgcDUx7XWZ2syES2UYuNZjQp3",
  "key29": "12A7SrLhwLC2Jeoe46JF5X9RLQcVj2JH5BHL5pawAjq7cMsFV4pFSKUa2M4mLFLTbEr5eGFEqGd4JetfHw8gU7yZ",
  "key30": "4uNgmL3h3jdTf3SqfPvbw32DBju6vQnuNCmdM57GTpCAEARbhaSQNDgkRpyrST5t3JDk7uyvcXs1AfkFjRa4ahZ1",
  "key31": "KFMdifLYMk7GN3MDeNejowUa8kZKRTpopsSPUE5ssAkyWKFwE3fx9mH2xfu7uRnZurpt3ZgjF3nmGKgnottnWfm",
  "key32": "3uxeRjKbTJdyGohz3c8u8d1hCiAYx6wFGAXE7CQrWihYqiH5hZzysRp6L2ApyUxPUZ7kbrsCQmp6PumtvxmHzQrM",
  "key33": "fCsr5GBNGU67L5vXjQFBhDhpJ7hn37GoVSH3W54ruSnfk7fnzSjeD3p1fdrMa3N8mfPaGL3M3GPsU8KvM4BWwmG",
  "key34": "5ZJ8HTDB1uXxkQrmzGSPX5iQZrdbnDwh1wuxcWkFrzL9YiXUv5X4hpbeCmpozYyxhrzWCJ7EmFrpqJT54dJTQtzk",
  "key35": "HG6EXQqac8Tujuk2eoSQS1eYHw6aPAQQ5eiip6yZdrYk16EX3PeWJUEJVzS8FaAB2LvcC7dPorGLWmLhUPMXhr8",
  "key36": "4jHxeWrorPGFcXdn1QPeggMnQGbVEan6nwpqC6JoRFwTuxWgUwQawPtxNYcYa4rzVSa4T7iPmjVQcLko2vQbQGzz",
  "key37": "EtomM3fVaU4EHanik7yWEQMiuGcen8bFCt3pdHe9RcuXznEKsnMaKwpq3S5XB7uSmUuGXtHWfsiMTQCAyeRztjC",
  "key38": "4b71x4ChfWWAosNhqT1tF6BtJcrE1rsfuJGsSAUmDb2t9xZPfw2JQFSVFFsz2rXD7BX63mNYixSK2P7it4A1sVUt",
  "key39": "4H5hvrB4k9Mi3RaQ5WEHYhLaqwLa3Ce2BzQG7TnKprZXAuowMXaPUxQqJRnTzdCo9fnw5odRyY3hkosYFgXBhT9L"
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
