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
    "2XBf3gwvv7pjTUTrnZgBPZMKgYZeprwxBkN8MyHT3uYVaQvnfjHcs1pD73vfyEfABbPNpT2a8hdVdcDJcHJg3svm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "74dF58eDqemfjVPu9yz3fh7ntRu3LCLM5th1qDQbgXLtYuze2qUrZWvUie37ibgy5TdUC2YDQ1Yk6qAvC84ML3s",
  "key1": "3tMHikxFVg3ViRBWfsapaTBtixhruM9U1tbzng2iw6HbrPUc1NRHbmhsNMzwGfz4X5RqqgBYpTvJHL4zXN4eDEL1",
  "key2": "4gQo9RGBnyhzU5rRAP12j2LRuUG2oHA7GxWwZzzRZkm9wWEiKDfb7ebcpRLST7X2QP8mzPJySAqQTikFXTRehCWy",
  "key3": "mCe4mZyzt6AeMK4qHFHpTNMDPQUKSCPUg4rnpb2mNJ2a98WrABLh6VyX2CZQ31yLTqTDpaeAas8GorivV97EiD9",
  "key4": "4vw5hcXisWieHd43oLURWqY8zc1MSh7R25FBvJzV92LaiG4X3135uuTi4zUfAQoEhTMJj6hn2ETTMZWz2KSN8KTV",
  "key5": "2bttsQ3F36ZWnfmwczxjcgcshVVwwvq3GaAnFjpFZGJgFFNSbfT8oEuGSsN8oxpXGroieLxKtRwRZrQ89guthQej",
  "key6": "39AKAP4SR1e9bQf2mr48ApEMur29hsE3qokYzXhVe6jQJafe19475nsMZsQVsAF4jUhDmQiMKvxTDgnqztSSgHyH",
  "key7": "4ExhME9x3aDwnhDaNUdXqnLgUv73szNaWYf3gyJtCdUeCZH14qg8cJNiHMoBjf8SzDcW4PiY59oik2EVqkCqYhR8",
  "key8": "2RsgpJsqVK9KcAySjAFFZWXrEHuCLwt52mzoAGt45qJuyfSEp9qME5PeTdjyjYJ2JwxihrVgD5k9bz7g34f8SykT",
  "key9": "5mbtwGhyC2zmyo2us2AuH7PJL96o13TfBf5SqQNZuQwwGN38eF72nj9mTKkSSvtSgoMbYfJFXW1JHxKbWodQ1Hav",
  "key10": "2xS1dAh5neqvPn7Q961tWrWCBerhFbFCxRsQ4n8UKSYMC9Vea3YB8QBxRnuoKXTqJZiuE8eKwbJryQNWoi9mJeHp",
  "key11": "5oZ2WzxPVBcQg7WR9N9HQMEbYX23A6jTf8JwScAqsvdVFEq9fb5KvNUFcqGUGMWdSsCfMn2mb8aDHXBh3r5h5dtS",
  "key12": "5PifaFYo7RB6WFvUXfo6GYywpiCfoyUKD7MftpaLJdnZerpBFWMwPmmJjEXPD8VMDrqvT3CxQiQLzoEnyvY1s1gn",
  "key13": "4NhNHpofHwKUWn3Av4PNqiNFcTz3WyUxAcSz3ecLyrhpLUGKZYh6wAAnHkG7W5w6tVq7oEn66jxUtKXdXTSJRDcs",
  "key14": "4B8cXF9ednkyvXXVchbE9nXGDcypaeChDWnbzanf2wNEEojgguufJ5pfEsvLi9wLxGyfwgHouRk6scsHBz4cuiRs",
  "key15": "4Dowsyzdu2y4Fj7GHDygJoCpKoxx4FpecNpFWN3oRiPmi3Cyb3YgebyLQXLFRiscLMpGgzjVYegtraQhpbmG77fG",
  "key16": "2xAGQk2aYHLesXZrQr3sD72zoUZSXKEHAAZFbbQtP64VNW9aAWA9tyKQ7uBPQWbu1AnvfiQsLB55k9sAegfaahT3",
  "key17": "2gEaE88nrJ1GZnts7f8B7vWJJ2xTE1B91EBMgz58B44VwY7SyU3ifRTxPQfy5TrwE8imFieFkQz2E8SyFmMgEjxV",
  "key18": "5t3tZ6m2PtjNdE2SS5FwCuH49cbdEf6f99vW9bL8nUAQ6xhXJpoyayCfJGP38H25uBHpt6qT3tZxF521Ji2DfgNJ",
  "key19": "3erf2TUVANjzGdVHord2uNDERFbGZC2pxxrWy7vpq1HFeHLeJjUM6uSTwzNeHceZVXM3YyRpHSc1Bj15HLyQ5VmN",
  "key20": "4KBj8NzojfHVRGphCptQe1FuQi4sVtASkpK9q1uz1wqFfi5ojfU4hPRCqErEEoC1Df9ejLJ5JhceieShZWudmwAE",
  "key21": "3mSMSxpwd2eVoKf1gHbLouckA8frxvFcPNw13CKrx8cNaUXACEM4brxqEQ3CAEyVL7ZntgysZhuHSqcnmM3pH6y2",
  "key22": "t5qUnEz4GCXM3MUCABD3mAEoYmUS9F5brfRDWpUqvLkpPLUV2rGbXmQLQN17NS2t7c1vUpKN4ZBF8tVKvJB8egs",
  "key23": "4J72CXMgoSNvDJ64MCHuTAnXZqVwdi8T5noy4hQ1EcpEK7yZneEbUnGESULEzJjJvHy555fDYsy6gb9uG8SGL1fC",
  "key24": "544FnNTzeBqowradsMVC7fKdm9WLg5Da5wcKv9918xMVmPdTPmtrXF2icBW27zQNWX3xPQKVE7ZqSk19k1caN63g",
  "key25": "5D8gFrYtxaxKg8B873J4ejVZrVyp2HWmBcVdiy3auYc6im57YC6TP4R8KnsmuPoTuGwwTD2fyti6jdXNkfyhfEd4",
  "key26": "3A2L92WyxBxvx8o3KnBDqR9rVNDnSC8fHmCz9fZ6v5UcyEPjDBqjxgEPgbJpr3U587AyLnKuidExxu4Aokkr9LSn",
  "key27": "5TKwnBjZXtDgACoVBcB3CcFYDV9VLGsEHJpJfr8upEYtKeXXxsTtk14N7fXLVdUkkxKQvTebC5QCLoVnjDyrCChh",
  "key28": "xYP3X5vRnZ4ZTNH755TWuWCUZpAvWG3aQKEUVdW772bZ4WqLPbmUJwWrV7vi2akXipYLvfKSRhkY22fSg7rUGWS",
  "key29": "3N5wS2TNrgNZhrXuvGumk5LXtvb6wqFvAuBhPmmoBfbXhZwYFit5wSfhRXUeEzCJPgeQGQUsGXrND9T9CPm2vurT",
  "key30": "5RjwoDBCQebSiKyoN7LZGpNFFMHab4DRu74Wb7adA5qvZUT9sM9RKbLEhDsdRDPs7jv8YVDDN74tUdgzvsaew2Qf",
  "key31": "2cMU26HciuUt9dJsfX9KxMmoi8Ym143M8MrX3u6fQGcrWvf6kvzy79821r8rZAH4AuwyyD32YpoAirFZpaWbts14",
  "key32": "2WaogAKZtQHdHDssyTTWLYjjDbLgU2YWRVySBuSfv4M5eahTWpRKHqrPuDxd4iKx6L8aF85RYcVwHm6N5uf8LEBM",
  "key33": "3pbmUXwqyC25aeBqP4ruFRe81sKeAk9wnWPUW63HmGSxMQS7QZXz6X7pmxFpnPFn9rLzhahfAs6q9fCtech1ujeB",
  "key34": "4A9KaQLBBDLqUVdzZ8mYWBcVALR6wqcDgB3ygTRrmArTo8k2KRLThSKHS3PvNMKQP8tvzy4MLrtrWaMB76LmJNZN",
  "key35": "4YvYTvofjwuQrLe828q6Rq9YmCHHLA4T6rUCh6yap3Vf7fg9TsxPjyMTf1n5VpDWABn2SNh6Waro5XVKJW3b5R6J",
  "key36": "k9ZmgL2N3nGyfN9wXiZYGw78fcY5oRCN675cKxZJ9kKNwwRx7pvFKn3QMkSZ8f61z57Lx4EJFJFiYy83m8jcdSj",
  "key37": "4H7T64QkRfYhUfHZnp5VPQt3SmyQkg1zSdjKsrxbmJ73AspU9h2zVQMGo9URGfqKyent6cQSFzhFX4XmrxkRQkX6",
  "key38": "29vDPxKxpFpA8A4U1AWR98zKKGGCigC7hzW6ufYjKttd6QbGXx47EXnMpm8xdVSZsYXsryxsv9ex1GU8VEZUb3h6",
  "key39": "4RPmE2SVqkv6CeHDd7HDHiZykNGmjdQouqedYX5DoZZw2zjP1Vnmvx1tjDAh9uRAfYAz3NRUXjDRdT6Wfsm4n7vv",
  "key40": "3MGuARF15AkfZLo74GBsiQQCVe3fMgduHihLrrjyYwEcBdxG5y7A54YhHKm2NXss1LRgVU1BVZQUcfU8FGw1LMiZ",
  "key41": "2KnaUcLFEqCRDS6RhYTrZhQXiZSoFb7nKwjuWB1DaTdSdBaDs3LcQHhCzJCygAC7c5thFQu5LG2qwui1Xp4gBXcw"
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
