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
    "PMRPy1bagH4P6VCWS5MUeEvx8qvJ3bVRqpwJjgPUZZNY7fNstxka3PJKbxQhDSYF1VHoDzBX2AmnQUx95WkmDij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cv4WJm1ocbgWmEzcZ1AWduJhJ8JaBzCqGbUSVHiFay53gb1UhJKNx4vKFDcg3oAZU3CN1NofL9SXZtneKnCRhbC",
  "key1": "dMAS6NiGmucXAapxydaS5LTaG9knfMFAFqYvTd4Nu9vGfhYjjJkNAs357dfkLAiBJmWXsBuN5D2FpBhNeXQ3YwV",
  "key2": "5rGPe32Bhn1TFbUAPJujVnzdiMVganmWPUbq61fgNs9GFUJGT7M8UDGkBSoZgJ1Az5BFRDKaf5KBXiziFGfVhU4s",
  "key3": "5np6zZbt2M3QPvVr2GABAPQL3VVpwpR4wieLLsfeAqTnbbMgUbG1KL1PYMnjDF7XyzZrohpDxHzSfVF58BNod3wp",
  "key4": "2Hw9SHxbVVdxhZY8xo2CcctsbdEnMC58Ffd1QLtgLWDBQ4TnzoPXuYtbKRmjFHoExEaqL9iAjyUEbJPeGZexMng9",
  "key5": "2kfjMCxV57BceqPihhf96u1667gFwhZX7dBECix5qenfzr1xQR8SaMXePTsidpgh4SEwfPzk9Rndov35sAzzqpKf",
  "key6": "2Pn1YLniPApBty7G5cV9GWeXv4HhfxguASX6yrwFrTXcueow8ceDUQZLrfUrbaNLUCLqGtCZGbZjUeRcotbYfjoR",
  "key7": "FUPhYzL3DnUpX7L2CoUfQTdwuGR7L5FvQZmfxq2FYh9pz7bGbP4CLConX2ExXnB993bBX4td2uNLwe8cM4s13FM",
  "key8": "3MGtoRjqLiLHfsnX6fMHFxHrscVJNkCQXUquFy41JigaSJv1xJU24o2a7KVP4Zxx3sVWbauGvraqNL39ypQydewS",
  "key9": "t58kJoZQ5MzUxSMDdhZFVsDtEHpfW1cQY3PYLDD54E1P8PjRPUjAgD8iGpoWL9DtJuAwRN724bujz8GYC6WYxjo",
  "key10": "3G2DnGNFfpWqkFmt9bzDJ5wWeEhZvSWqBjVGdZ4gzQFu3Rrt9wusBLV9MCFUd834usDuodaHLNp1CmrpU1Lf5WxE",
  "key11": "4BDdec2ksrGzqPBoZEmV7xdCBfsjFBSKLirA5DX26cW1q7jPKKhwr56LQpgwiLieUuvZC1HAmytySHGKdtoNvgof",
  "key12": "3ge24NYfGJS9yTwjyzjY8EVYX5xKvCs8GHumiwEtBqa8HvGTLvc67exKKpyh8SDut7Kr9XA7t3DUx3vixfmbTPLo",
  "key13": "3a2VAT3jURuntxBNbnKeRjw7KQKAfQSQBxCYfcuorXi3oM8pMKvmn5RmEa4gWVSeTSjhQPwiSpgpqGBGetHXVu4Y",
  "key14": "5iSzyhnqeN8hVm6TZMqjzGkAuDyvHdEKiJEfSiExK9f3x2w6iqmeRX1v6eLE2NBN1STjR1QJoobpS3Jso9pLisr",
  "key15": "gjMamuGhPdNnmVHw1ymVhMERzbMAm9CDp79rcw5sWH9KmxqCwMdfwpkfbzjpCWoidewakNy2TVxg38xVezx4KdL",
  "key16": "2LmzWnyfzdG8pzchoRGUa9z1MSceEGo3PLHqqWBWnjMQ4hKGfQidv7ttdLWhYtkvDfqTrLsW1WSi9daQC1k7amR1",
  "key17": "2EcyV845oBEGKv7M45rrHLLs19QhdisFxbQ7Xf3TxPr4uT1zdyXCxqYYhGCt5HuYT4ZJKEewZP5Pc6cF8fFT4mjP",
  "key18": "67m5sHiUZNnFuN1Ay8KjfcvKv8PKjYpfNLyph6493yZYer2UGJeGEFfGQjB49FYPpxoWQTgiewieBaezmM8p6fdw",
  "key19": "MRVuSJBRTzcv69DbCvNkNxWFNASjytXdrw8Me2eaDXF7ScEDSfQWbzrUmYqwtjGg5u4YTRDosQbgce83J5hZ3qN",
  "key20": "GVf9xPvKvQ3hqxkq2v77s9VsJE81aHHFLJhKDQce5vCpXNtKQan7WXXyQStVgHnijEh2zEQuRy5frodSQPipujw",
  "key21": "4mYi9qnWXNjeuQD6wH4TDmWc8Hz7a5YEw9jfR38VPjZfAhQipaeReaoQfzGCKgKQ7CPYRR7UKcDMdnbiMFUwNLde",
  "key22": "3vczWhnzwZnz9XTQbFbRNwxKHwbaNJAgWo2gzrmr4k7ibqxryPDBYqeL2ZW63EmjMjaTHA4EUhCJWnWiFxczXREb",
  "key23": "C8Md4TQE1iDBdrxZsWFByyfZLukDXeiHv4KvSKiL9xsHCmDZ3rowifaL4uWmj8Szqn19verig1oR4kNZVZv7JcM",
  "key24": "NBidprcTwyVKBiCuEUoT4dVeLuLE3WF1ufPTWDbDmeVquyek4Qub7gz6sWnBa1dcTThbJL5xGVwagT4qEaMR3im",
  "key25": "3uGh7A7ZtiRUC6ag49M7TjBaTSfpzYWJTLnNuhRmPDqjGZB5WtuCbvzT8GLJEmqGHChUABeBFR3yxKJQYsbKFyqR",
  "key26": "28ZQBeebhurHAqy4eMwjtDbrLL5NJwqiTe4rhRxEE1JXYj6AaQsVC5C51L4mkogZBUzFSR1FV7Bobo7fqhEUUfmR",
  "key27": "35wnzDt8NMdUZNLKXwMWX1JMH4sbPcuyfcqaCZoe4BRiF8rc3Dp3sg9GHsvh9rEYrgqV6ycj8KKeDVZ99NtCi9aW",
  "key28": "6RmH16ke9GRFpDC4SJdEmmrGh5pWnkhp3fpzLwhKXUv8RZrhuNxuAokTvpUsHWkVoecmNLUpk4Z1jLAe3QWP9bT",
  "key29": "4xWE5BiFFJ6UJ4fRBhbKLwj5oXsiWgs3MTmHLs1ZCsHSBUV17AFoLxYruvLyWahdZNphzQik5PviQqru6Tt27axc",
  "key30": "4zhVKFNAXJGu2qScoZAYeebBYMKM6Ps7kcoqhfLzb4T39HbuxrW6E46NJw5vxpUYwmXodBZPxdhCGiowkYVdhVY1",
  "key31": "4rgBq1DpXrju4fyAgtNsoZWAqD2QtjQxW5pwetNyk5LsNghS4Pso8Kt4qG3QoZcCuJdHFnefyboW7rBTHcHPXQGg",
  "key32": "5twUqxrpD46xaiPJrW3nJrUYqxYWm3ich1Q1WF9cqUsYzp3MYa3cjC6Fk8xCCCcnp9gUFJ3FXLqJQi3nzqxeJxwK",
  "key33": "4CUQbeyVR4K8EiMYL2r1Gnc3uAgkVWpEQcPeiNVhZLgAuyZyveTSaaniCG1yhc9ZrYh9YZao3fkfR3iP8BRxPndA",
  "key34": "3DuywCxye6WD9UQHczgx492iZPLdfR7GqssoDUyAw1sP5ZifB3VKWHNDAioxwC995Vzrda7fJUnV8xWNrtFYaN2F",
  "key35": "2L51LjChaThUpBoiP6C1eT1pA5iqE36XdSryQxiJuZHG9dVpkodtuM4p756ZMvBz8hr36nk7awV79cAjFR9avd7r",
  "key36": "5K8mX5WERoCXWgiCEgkqNUi8uZnoHrGwwFpyBaM8szsbtBbJoxfd3XjfBHGHPbouBuagHYZ82xAVH1ujucoJdJ8L",
  "key37": "JY3UfK7vKNr4sbauuD8KqMmnGTzJE79TWZiMCeQDiWGF9LK4dM26hKFizm2PktNckEQMF6X7JPA1NpzjiPxXLfc",
  "key38": "5XyZtJKuLE7zWP6q6hJfd2xYEAnNGFQBhSRjUkph7tjjVfpkRTXpnDiACR8knBSMJjXW9ww4E591DqUZhKQLuBzR",
  "key39": "5Y54K8GVcLUrGoggTvUTDetoSz7jgdQVmKqKmkq8qohMTt6shm6kR8pJ8GQ5o7GXjDsfY3FZbJRDZ6EWAg3JJHGR",
  "key40": "3bGcKogRBdkovt7axBWcBdacUPtmCn3DRcWDPMKVjxqoLb7dfFYUQU2CZuiixLwTvmQQ9Gqx7uGkyWe4JJLivtNY",
  "key41": "3wDxmr7tyKfpVmXdP44iFaRhygE1mURV5EMDTX2PUmE9cRQpxZnktZLoDMrEVu9iDv9MyentK5oK8iqhta2AVDuZ",
  "key42": "SynASB7yoA8vx764PsZCnKkW5szSyzuC9sUuoS9nJvTPc1ozSLJ336syaT9MVth5sg2aKa9KEdL5LPVi4zKdRQa",
  "key43": "5RShjS3NwMu6XdgxzYnFurcKm22dmtZVtuMdN3TxQNJyoqB4Ph9kML1cdiq2XoVP1DELfuKLuFtUwecW7kUJGKCU",
  "key44": "2K2uxtqpj7jmHYoGPc4Y3uzxvfGFRLurtNVd1Mm4Rh3aiwUL4LZ1TyctaTDVn96hJtpLu8TVfvuo8g1YhiUE2mrA",
  "key45": "5bP3Y3ffvjcRcaYrSoquEUAG5N1Bc4FuJTGnZbtJRKRTt11nQkpRZ3VcKp1sRtGeQ6mJdQtaAU8Mw9bwytWA4aY2",
  "key46": "2fxNHPq5FyaCLdeZbNz6c5stxkGrrSFS4QHx7A7Tw9YvSEYxYBBkR2QFEeJuHAMox82xuxCwop97qTmYW1363KJV"
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
