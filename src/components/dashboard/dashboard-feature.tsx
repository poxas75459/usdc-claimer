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
    "5Hp2QxPmSB2bE7nU5b6TiFxeC33eN78jNKdTGuJgJQHMMaqwFYN7RvkNAxkzfuWn1yvWndic1b74ae2NV7KhacoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwuKvnAMrUwSu14zgXV38ihdav7VP3Yxfa2ZNse3oDQcWAxcx9gRBgSC7AxYy27xNFehQeqk9HoC5X7gaKtAgdy",
  "key1": "46VHJg4ayHe3fKeNPK3ShYvq9u5obUUgn6h7xRSdWuRq2bdA6JF3GVga84xM7pgmTEJ1ReMpBYobivVMWZJoMXs",
  "key2": "4ENJjithS5mRJfXZfwVya2MU4ZkDixcmP91UaeFL4zo3zKDRmjHh3JVaHbscWwnsUT6sZZZHSz2E55L9ozmtwzbE",
  "key3": "tEmciFj75k7tkBBZh4fpMSZ2vH1ALLSyafiTM4d9wFJxWnkHtxZENPMCw46r6QMHCiMHAyDz5eqLtHwfPmdWhmf",
  "key4": "4S679aYiHk33Qo1mTdxzMwz38KCYi7rqkMTdPETkascs4hRvY5Z8ToL9BojDSrFh4ZYwSD2MJWAhjNLiFeRHDXTv",
  "key5": "3YVrBes1DHer5nhwCQeZbP3g5eX4eS7Kcte6NXyDfC2e7p5dwFh85y79bLf679cCA4KfnURphMicNwzwd38tC7VZ",
  "key6": "4nFfm6z6caXA5NESCXBkbLpoiCAuTivGXsLTj6MnHj7Nqg2fujWqocUpzsSYqBSGRDsjjPRpxRdmWzQ5vYakZ4Kq",
  "key7": "5tPaUnGrdKXUgN8yYYWvXjnFMkuWVoYJ97Jc9JS3qBuXB3ZsXWNmbUTDWfqPDnRtoXT1M7rknDCPoJtokxobygV7",
  "key8": "4sXWaoXE8EudvzwqWqLsbWa78zeVFVDgfigTkUXy9H2ci32ifogMo9aJHf41xuCpVWcPazAKvd3NLVEXjavs8pAf",
  "key9": "26vKQJCrp1dwzLhaijvKgYJFpLX9K12KNGfGaspUTD6avTt9Lj1bqnTYSe9AYq6dZmE1tf77cjjKdHCd6SaDyS41",
  "key10": "2M6vetmrSAL9b2vBvRNLPYFt3RRUiCUh8ViVdA6x8QkYEXyCJJ4dAhXxr24AoChX8fpWRpit4eD3VKckkbJhxkfJ",
  "key11": "29k8nG39ttVcbTeRE3Q79AtxgbRxKasVxS9UYyix93emMgVp5vQ3jJHKt57mwic9w8MCLiLqFDrEtqqcgva5PLvF",
  "key12": "3LzSchMUhbejrXiQNLp17xUZD5pKigfDN3MuqSDDZavF3aEfNkFD9rL46R7UURvqFcQGPWijuMyxeAM1J1XGFxDH",
  "key13": "2s3rhsZgPZdBYrCTaND5uVAzYRHBsEQY9mAEKa9xoXiKW1XfMF1tjwXgf6mqRFMoeYJLgAT5K1ctV5e4GYfae2sd",
  "key14": "hknQK4H7dVD2RevvLU9vEEJxZdwWSPJ5phvmRvnji21H2uYsNpQ6rNUaerdWedeMJLTmLmFUmkbjgytGuvYHS7M",
  "key15": "4ryij5nx8V5YabywChVX8KqLz6DJ1QmczYoKGvQdXpWHAXeiehSVDzgVKnJMRgPUqHXxVmP9vvDYkEToF1DeArpk",
  "key16": "3biJRz5r8dHPwM8e1xFbVpbLiRtPR6AANARLE2G4BKo8qyXwPNgPM9SUWhXeJ4o1FDLFbRTJ8LfFjyKGFH7Zem4R",
  "key17": "rU5VjwiGB5H55uuHMmf4mA7mSEpSYDtyMm1zwt7q1u8J95Dv2sq9jaSEDrhaToLvB7HodrXZX2D5whqSAKTUszY",
  "key18": "2coQr96sWTeEiKH3erFFrH9koQrbgeLpBxK2x57GXtmB5SBjtwpmiqv53ngweCQYpZox9dA7nzb3kq8AKM6FRj2Z",
  "key19": "2KbDDFYvu7ohZtiG7otTHRK4xLkGe34rP4zg8Pcv6yZb1BM8ZnLMVmXCExhKumH9scsJCsA3jv4xttAo1G274vvc",
  "key20": "4Q1yUAgMmXrdL18L6w8YvQjP6YS1v4d6HncMeuNzWTEvMtG9QGFVPM4V1K8QKDYAv3B34gaQEWoTQoyL4jwVYSJT",
  "key21": "29FmthReWAaTAgCho9ecTJnFNbNEno5aK3nMmBgJuiXaxXew5JfUbHvs3ZasNmt7GbpTu5EDRVywGqK86xWgSfWz",
  "key22": "3Ep37xk3AXf45Fu6jeoGYr1tzVyeoZg1apR8mYYhrtFabniNx5UfqFnqCnKFtmCCczYzvzJrCc2RKKZKMCiNV7zv",
  "key23": "5jAQLvXDY73MJHVbHEBugWZfpvgQes4hFer5opbgLEzFihixzX2hTMBzGSGvTPNuiiTVQ57KQaFPNLzwgebUx8f1",
  "key24": "hdfhAnLfwcEivBWjeMFHMqzTGpAqyygxs1k516H4mnuEhwu8p7X52fCnEffukzewYd4aCnNk1jr2vChyu1p9RZb",
  "key25": "2kG7Qi2LJSBZaL8GA123cq8aQiUSXcyATBwm27BoYFAapP41kPJdTwMk94s8tZamLpxZdvMZnnzBTAV1AuEMTdoR",
  "key26": "Da1gApoQNQh3Pp7EmLs4dU9C358nozc1G2KkveYcX7VX8oX6ZmjfB1PaYuurWZPvzi9FE47K8FW9Zhqtt3pvwzh",
  "key27": "2t7PVZB83SPsLTkGzEZ7wXc4vWGTQ2h3JFXGXQyi4mDJQESsByBhw63HAyEMkrAbNYBwATnZt4rxvVEVDq2Av82f",
  "key28": "38tbMxV6ZyJ6BNCqh9CdwLRBaeFqRis6ernffPQdwMSJpF3QZcsZx8ugUnbBqmSDpG5gqDEGgFDVpuW3Y7GZxw1N",
  "key29": "TgJT3LUmXCZvbVWcLXt7mq4gMvP47xHC2mtGsaWdZSC6uthmU4TcrE4cxpZAANQ7VJFZUaGRhrozxHhGah5iSVF",
  "key30": "EuWDJtiFx7n2L3RpjzKL42hKdGVxbGWAJyYWS75qAGNuBM3n6uSNYRPQcvSzaRDiXmZKHJhSZoA6gAZ5FtZfZ37",
  "key31": "2qeBurk7ptYXqYyz6VXEwCiTAaEcrXBSfNbraaC4pneE1L21D7YNh1SnCHXW9nZfg8UToAaAKHjNLhV574xRsu7o",
  "key32": "3A5on3K2qd38Vxu4KdRSaTuScdUnc3PK9F3q8Y9a6qFpJvE1bX4TP49PXTiojB4DdrnAGjseRBjsm5T1XbJn5bwn",
  "key33": "3Zmfn72sNKC8wYzDot9bkXVENF6uTLbnpoWdwwqdTT2whBmo1xvB4GnaUFuJiQTdBnSEkwj86F2PUsbWiVPiRimB",
  "key34": "5yyZAi6csg5ZLqUW85eyDd4wCANs3g9JCwGxjd15sHnX4tn4sUjqmkET3X8Z5fY922VKwhaMq8AVLMQjHC5xim8z",
  "key35": "5Ec81ArYRA1tBYfx1jv6kSVe3fR9jqa1sANkDi7ePaMytP7k9SPvRiAzHZDztMZEzfLD2X1WM4fGahYg9FbRXWMn",
  "key36": "4srYtYAMdm4PFJfGjcC4qzywJEaYZVrM76bZsQ1SYpugzhzE5MiyRYqfKAbLMNzy5PLYusVe5Gewf23R8MKjTLFS",
  "key37": "3zfUvM1qpQu52yz8nELqmAus6XVwxiBFZg2CmmVbPwQruWADBAeCKkXb162K54W9x6gGf2kjDBjENhZWgzvF3Nc8",
  "key38": "4MxjtAJsctVbVxuShKHUJr2kkGt8PfPgAfiumbPPwzH7DL5XPFd51vgj6h5as9bjmac1M7FjgUVEhj3WPXwmiCcV",
  "key39": "3FWqJMPCw8utvr6Pq1Vc8Anu2vnYiAoCdrcwm7VQRmZJbBXkHXbukwy1ZypsBPkPVJ4KpqFqZeq1jGxzsaX23iya"
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
