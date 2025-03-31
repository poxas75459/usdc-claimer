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
    "5uSF84FwqjMopkdWywsZtr8DM1JCveJGvpmhX3BRZTLnK4TYgHAYikPVR7cvGregEQrRhxSKvXmHBZ4h225SVPfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CeBdZS6tLsxk3pp9hhesQvKdMDVz4r1CeUjqv1CJoB5Lg7hQA68AMH1pbJwFBFZKqFmN7CEo1JBrMs4TDw19gLV",
  "key1": "ztkkxqJbMx7nL7wBAFAmxpRvHzexiScVRK8bkshZ2Zh5tgbvrcBhHz7STxUW1wiTTSv42LPUAqGFauxwsrm3mSM",
  "key2": "4zjsQzdc1JvL5efZegg32E9dzrTwzoFDVyjEEBRFECx3GeTUKwZp8S5XdEGtQaepvPFVqoCJBCi4yR7oVgHcqdSr",
  "key3": "2XJkiW4m1ezdSCaujmAC7CapEAD4g6vMmtzW8ixxGRrEriqSWixTVvuF1362ryqTt6ksFqdqeLV4zoApRguH5DqN",
  "key4": "zuGU8aDR5EjqDuTUdV8Neff5W2s6ufnQaYkorxJPDLYftsEpADtg5aPMRfSoMvrQaSqCWSxZyXDcmCaoGF8RAEJ",
  "key5": "3Giazybia6ZxJWm4G8cGeu8wzfaXP2aCxCDhVTu9bbzAhDwnP5ZensTwwbs7cQQbXmow2A2H7cag6xzKS1R6c5XG",
  "key6": "3vihj9QQX8Vh14MQvGoSFwLu6y5Nmh2n8Vrd5VLta37dxa4kUMSk8PEEaQnEEmRHmDkEepVoVYXYnpiiVQEhnPjw",
  "key7": "2DX31Sw6EY2SVbabevQJSw9yqFsR3ECNbeKxaGXdwnjdxdcUKu8s6nTxQ87nT3fbEty8EkqFC24GhunfoX5P6yPc",
  "key8": "3R5crtW56h3aSQcyRf37MgBAE1NyHMdqCyDBb55QndeoCGrPHibLMEjgHy5oW8MS6YbZwSsp1UR1q1gAoUEVniw2",
  "key9": "3zVBBBQ8wrrN6yhME5JpKQ7Nv7fHmVC1UkLgVL5HBYshGspiaNWZG188nCso88wnNsMgcMQVv2xPtVvEbCR7dwMW",
  "key10": "62tHHVvPLRoz8AVPVTNRdkTfPrMxSrXLn3TGbvuiGvwoe4b3P9PmWCUZecifqzJCCukQot4ngGSA1x1VM2tgZATK",
  "key11": "4wh3FKh9EhP9ML21WRdkHLprVB7SnbAEdUz1J3x6bVvs3g1TT5aUmjzddpXEURdsAcDcYdBBbCjCvauemo5zhPs8",
  "key12": "35hKUtCu7NYN28CFbtkn54zemVAZodQcCkvXmd3GDjMaWFf1bDRDM9MxugFuYRx2tkXB6AuvWnEXKQZPCKZ1LfTR",
  "key13": "BeuKb3x3VqRk6g4ZBX4nDgbP9nSJ8A9SQTibT3yTnAAUtPDLKfFBRGRqK34kDJ6Tjj4V68JDo4gqdXUExapqraJ",
  "key14": "PhNJRBiAUkiJ9jAWZWBv282CYpAn4wcxCkZQUTjGc9pe88pExjsv8maA8nDnZEfm95M1XkYQwGUsu8XVzKJCwhd",
  "key15": "4VmV6DFWW82DRSvJsBZSgRimdGf2wksuo3odkTAW39azGipcU68Rm9ivP8yDKtiSbkVoNgaUNqYdBvZT47UZiRxc",
  "key16": "2grxY3eJUKKiSGdScQEfMb2sBVWbJijQSMACsMxaS5iq8583nDj4gAvAtNamsXHyVxTL1qMDiF55VPWzvdCJwZVr",
  "key17": "31wi2q9LzN6TtY6ivVgqwT4kdD9eB9e9DT4zE6BGHVPBgqiJ4bLZ2VtSMK9fJXT6bZzAh3FDxZAyDzzBEM9ZVYBX",
  "key18": "35qXNYYBT1zopDkDzZwQG6Gb6y96YP6gUiRb9mmPh8VwDPL9G2VJ4J8A8r3a9r9GoZo8tkKYpgPZuma8v1k9BfX1",
  "key19": "3mocqb367dPRMdaugsP4Q6mA5Y79gguZY24Mugm4b2XXpCsguFtKxV9cPeE19v6XRCjyv1LTckkTZN3zUn59JGzd",
  "key20": "3ty5egKxk3oKQk315dsjruR8PJLbhFFnzbnQDXKdZxskgZYMWfVtXK1TT6JUQV6obdkRVSMhvYStfaDUdnYiqtow",
  "key21": "47EuQ4sWd15tbQQ1WY4mVYMeq2WE8MCikYMSQLAJvK2kpsLgbgXhnd1DRd9i5bkuzgaFMHzFhLunXQv8RWgyvbWD",
  "key22": "2mq29pmomxhM6WHDRruhh2ajpVKEYT8QB4coMkKmRihxSqXQTFeUSH9ZnUUTxbzhBtKbpbTq2DpzmUNfJXoDHDTA",
  "key23": "3sthDSKCSQMzhjNbu8JWpntkZputEgb2J4qKsTuxH9ncJRrgmKhYcuz29rKcjoPdScmsXGw4TSWwaDzWDjr1kmsz",
  "key24": "2jSqz4D4xLv7WksyjKYV5rp6L9AWazpKJu342vu1juFbuUEciK7kyLA79BR8MrvPYx6JsR8gJiSqaWzSU4Di617u",
  "key25": "3myfq8CAq6NL1bHuXdGBMH6dbs3QvhsWm5asezSWsfs28dR8BM8kTkVseEeGC7iqiQcytWRybYwNmHWfpGBVhKZq",
  "key26": "5Y6tCM1PibnghHtYrMfkNZwXQ8Jkvz7hjxj5EJMJoknoXrAPuibSZS62cXW4SaF7JpGL48BfFUVE9JoY7yEopN4z",
  "key27": "XzzKwfqFUKab5gGQ4fJCB3QVHdEWQ1YXwhBsr68eczfbg6GoZjwaBLLVRZUM1RNUF8F9hfvFrZBQLE88fX77hnb",
  "key28": "5ZqC1GLkaJ5j8DRpiNH45rMfN4dUnGSyqxNzfP7awqsWSRTCdCdG9Vbz6jWJ5pzeyYNhqmpo69nfPuUPJQiKygye",
  "key29": "58Lh5xJa8SWGUx76z5E5SUbiQiQUyquGEfdn8MPoUsGCpTpGouQf75bwGtVtuxDpYGY6DbTb4GZQaWi8NPAvqdWH",
  "key30": "5K7SHoZk2u55MbWzvpz1GMztK7AZbL1bAn81NqQFem995gn9YhVpggWVHXhkK9CrkDaHdzsdQ4S8sERjJ44GbSJ7",
  "key31": "2a7ky3ZifnNU4MGKv5YUSyHDwZNwCZ5XxAnYZ7X28J7AKPv8wRwpPZ5SzH2TP4npDPDyuNJQYAbzRCBrx6jyzfyv",
  "key32": "57spri7p5s33dT2Mxjas5a1CKU9GGYQwKFCfCCPgYY4ozpGPFFgtaPosxcvkTyk6ganScYENHGUcLcKGK3q8aPdt",
  "key33": "2dUNMT4fQnr1EEKdHWswUwCvfifppiNKnykS15VrH6c8x35DfccBydvJfWQGtY7CZk88NuemePVEQSPpXHYy6aWo",
  "key34": "4uyYEJcaSCqQ2TU7zHHpPkKmC6N6yBSFDcmhCpjZWFeAAqzCaLnatyC37L8Mv884td7BtkHMVVCXQduEJ6uqijwx",
  "key35": "4PfGPcE3uLuqDKzVGgaaC62sgNKv8c3XMQmiSXhR7vxfW7ET6TKfonro8EzmLB6vjPXFCQpR4Ys52CnPb5suaNTd",
  "key36": "dnq8AEixBmrhnLFGQ1MigJhAgBhiaiBSv9w3PyxBPenR1RRLD1XF2JtJJ2cSwUDm37obEe73RffY7HQkAdf3bKA",
  "key37": "5cbBcehFQ782KmiGAzevwDZV9HAxvRLApxCdVcm31WYDEMXaMUoEW1LzDapqUnKHNPn6KAeDJJMwiuYX6c4T3qAM",
  "key38": "2gcJn8Ae3EMTdvDMoLgaGmSARLZrcs8xuTLMbgJ5XKw97348ykxEHQXtqK7Wc52JsCqc45hpeEXd77iRHhYztcii",
  "key39": "35BBytGPk22dyj6wuN8wa2obhK9HqHmfybQq3mJFZdZJ5QvDhZE3MPHzzeQhAx4kj6kCacqLetp8BFSyJLCQUjT6",
  "key40": "2wauXmDQjQw6BqJPcYnHo2SVJ6Qr44BhxQY8NSSW8rtc2KaQGehNXfACu8MFmHNz5vo9vWcAb29qKCBWTi7eezW2",
  "key41": "2Pi35dGD5UGRPyQt8MpQbnscJhFEwhwAqa49fEP6r79Ca8HJonfjBkQCgh5Jn8W5jQ1NxvbmE1XQXac46iLEbHPC",
  "key42": "5GzgBKQbycXiu5sWRDaTK86EfBzSsuvoxU8i2WY6P9KNDYpo7BTmpCnm93WFRUqKjURmjuY25sYAsCpum5sNjNgQ",
  "key43": "t1jRQWDrvbj3KCDm7HTvzi4TM9umtAHHjCs4r2Xa5oU76hsaPbiD3dEa7V1gmBXtcEAnWfEQQMSNDZkxCw7DB4k",
  "key44": "5VXMgUmm9Vc8f1MayH76Cfs1ABfQezVL7ygQHh4qPu5pGArxWpkPEAoptQgHWZ4RAHdfrDsGiGaiQgi4dzT1JnFE",
  "key45": "4gDPnaTtSCbthqQhJDvhkwfcnpSNo8LYRkFTZ3BowsCcCZ6u2H4npcMKvGMasKftzizeHFHjFdzjybuCsMMo2aVN",
  "key46": "5yFN7boDsE6FnUeFHfZgWLMVdrqcRrm6foTzfJNHftQqg6C1LYZQA8mBkKapiejoTcL1GExW2RNQBnR6bvyPztfj",
  "key47": "XrEun1dybHeow5JLrEGCSyXRs9SyHrV31hoNKSy1L2E9XSmkTxdSp2XD9eD7FN6pqf2pD9Er3evAodVDCv5pnhh"
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
