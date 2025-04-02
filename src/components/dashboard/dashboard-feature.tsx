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
    "5m6fLpEgRgnAutvbD7Jsi3XLaBsQJq3ExEDeTTPBSiuR6nksAXgiVC2pC2vacqWNAoAtcyaMXyZGjuFNX4rWjyUT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JMAEi94aTPgXehEg9ScsV8H274xrq3z8jpcaCUst5Ha4uvNdZQ3zxhAbSqVoGiLTJtavzSXCL2aLwoXqR682BtH",
  "key1": "4xbcQai7wZKPos41zpVCfUb69kq2RpjaDR1Si2hfqne1P3QvoDkJpdfbN66tP8yZAsmSnLhzXDJfTSNcpgJx5YCS",
  "key2": "4iH53zVrYWrs8VNEN8PAzutQoTx9eDYYkheKUJqrWG5VeJWhVcBtJYNcPQ3yx6KhSC2nxdgjo422GkcKHQyb2G9r",
  "key3": "3CfqfHAVULjU94cFMcBtgfKZbXhEJLmUsRExWomFCUengBEx1W1MsFdPbTfgbU2zKZjHGe5uTnaKqAUczyAMcqr1",
  "key4": "5Ho75mtQu5Re7khcLimsJCzVMxBGagzgbdrpRKGxh18eGbgGBK6L98zGHc2hCGTEkYoTjsE4wfENoY9JLPsShbzL",
  "key5": "61e9UTixBxK5YXd2LiC9zkn976x7PqQAgwY3BSVnqJGdT1g9XFPZxAQ4EV5YYMhZdpTSuDYuaqdbAFayLuqxMtDr",
  "key6": "2BwJnfeu5JzREyQReGWhvu6oqfY8tj5XTJnN9Bv4mhTZJ71DfQtqpnKVtWKYJFGZJQkYJX7pfRoqh7dZWsyLTs5G",
  "key7": "4P9Qy1a9Bjyknv59vGngZ7mbjgDCb9DnDsXvvjM9MiY1cLDzFKhKLpnrZTki6s7TBu6UzaVfJYjvxJ5nbypmq7W7",
  "key8": "5vkmPH291NuM7pLa4a9tRVRHu6NbaoqGj51UanH7wnAsjYmL7YFFWfP4vbdF3khxBpw9L5YePVUKpXAoD7mB6shL",
  "key9": "3DpDZVw69ERzwiCG4aig3qhUfNrzVqZZ8W78PoZesj5M82X8S6ng5rivKKH7iCztNuT4Ks1trAdwiZR3HAL8Qhqy",
  "key10": "6D3S16MmzqiEL2saP1fghC59PFav6kdVPRs9XbWm5p7k2hB7AsgFtWD1oSPGo69Hfv9eoHUKcuT9KD6YV33G45R",
  "key11": "cS4MGNAWMywKaxSWZ44JjwwQjczZCsqwxDku2oLXLd1CQYKCiavcXovHcn3YxYTU6aKXmWNUkcFZ58XprK6tDwh",
  "key12": "4u9msDQGUQ2N6oA9FaGehV3RCPWRiCpx645VZu4D39aZ221vFpxSTqnzjMvepy8c2HK4vyEz9fJCF32Zk1G4zC2K",
  "key13": "5wNnrySAw2pEfPdyZ5Gmps1nX8aFYek4heLXd4WGNwHDfSNfLiC4n1svRSiFmZzFvNQsAVwrqgoanxkNCgvBmLVg",
  "key14": "3QFXstQXJG4XZ9ZEuagAjVzHRA2qYjxyuNc6vkdLzkTqmo5TZwM2JwDW1SYCtQZoHmxE25MkuDS5khq8NtyfrTYm",
  "key15": "k8cFvk1aieeNPSNQbSBwBQmAo8mGdd5Ui8j88KuYoYqx3aPwshWGTLD4YDLxUzNJzhnN9aW9rcmkWtPmPGSiK6m",
  "key16": "3R2T7pSUuCCZfXWsFsGfUDZQyVaXhgQ9nrmE71KjnxjqYeSDW5pQ7bzB5DquWHZN5XBrmQYmt6QF1greo52qdv4H",
  "key17": "5CUVkHLBayfJsBZsUASHicZABNykBtrmFUVThBQfn9mhm3EnrtA4kVosDyCeQVkSn6LRNHFP6PBY7VuQbdUFtubP",
  "key18": "4CUZnf2qim7VKixd9A5gg1z9iBwegBiremAF29NLy549j3yF1GFAcHGTimJXqvRZ3qhfNB9VUcKr7n7HcA6QuwWx",
  "key19": "3UhrnjkUDW8VM8evgihyvg2ngWBXKnMKyVRtH8uEfL2FZph3Xt7ZoNYLMDS7sEkjqokSnhicG77BuwyNSjjyspty",
  "key20": "5zGWrjYNPnwWZSfDuPfQip54i4pHCYwPhp25Uu37nNuZYi5Ar7RcjTamCet8BArGzZS8f6mVBpZD9NeMA3WfvNjG",
  "key21": "4vRGmfd3YVGL5zg1xtWLcccSkxscATQzuSeffYU8RPM2oTHYZ8gVbQGACZmBG1mFA2huAuNASu593vUbeRohNRW1",
  "key22": "599eyG6pngPEu9bvDoTDT3vTameumq4HFgDukCdJpP3reEUZ3teb8cp8xxYqmv7GSTAxKfvBMB1BADhXZpxKqYua",
  "key23": "5RRpoF5CbHyi4c2XWZHJ6Kk5Qqv3s7CU3ScwNywsXE4VgioGKoMoAWMafMBa8Xsus8gFBTgWr9Ai9CGuUdQu8NqF",
  "key24": "5mf1puxx4e9qVeDeD7JMHeqiA3JU2kPzDLebhy8gjLksGpJMgnG6iCAg9e9CQJy69z1m85xDDnrA1ZB4KKDGwq7d",
  "key25": "4BBDWxdj5dvY19aeQaoMVqDghsKebM26cUnXXBFutvcLsdo4WRYbNbxaYtcv1TZ5DReN7JDcZrgxmh21VppMJro5",
  "key26": "43fWoLJorxAKPu84x2SoSgPSYdTMsS5WHUgLHL5GmeKgyrWzeWNsuhYxjiEMDMDriXEePug6JPNo6kUh55iM8fxY",
  "key27": "2Rawip6tUj7N7pNc24DGzxYGxkf3TM9Wi1LNUaMtJcS7ZxQ9ECeryduDTjFaP8tW3fj9mFP1RqPtP5UP4zBFFVSE",
  "key28": "3GYiiF52n1MgyTkzzNgY3zXRWjRdrUFEV1HU6g9aKQAey7vs2yDw98MATXB9CFpHMWRNc5SKLckCJJ1s5BCGdrgt",
  "key29": "64Yx8h7sCMSoK61sXBVnatXLD1DFBRwQYgopD4BnBzXW6Qyf9mTTkSjdwQDS4faN4n2xScHSHpyYsqgFf9H4AUxh",
  "key30": "3PSehuTStgfBufnDfGmZVFktrCy66M3MKJ7b16GQTCJkQHsYVjsPAVVXaCB6jQ4F1SHjjAYkGhfjPuXme7db7Rjk",
  "key31": "5HNMox6ee1EboaafZWegkM3kuuhEwB5dgSxbZF6kveyTKbRbJFLpdisPgcnsgoiARx3qG7Kg5P8fU3auiiC8E7pg",
  "key32": "2xy32FfAo1GpCgmaCY3B4JF1bx4K4DQgMBBQqGA5e6mVxyrMPDViN1tiFEywTD1Ae5fj3DMMZryCqtDtuDMAYkVT",
  "key33": "436fNwdDdQUpcfmhLCBfK2KnsRSFRisG3gPMktTthLXyEeqgE4PQxjBWkVwGtX26EUwzzyXYoUe5BrQ3UkPLiW2r",
  "key34": "5EWz35bv5YASComQRARAXw99GMZ55Zg1c175JmpmMBJUVaKWzrX3TtLArhw4kRGLQRsZJkk1AXUKTPGW5AQAtZRg",
  "key35": "5h8M2se6xhUJdXXNty6VjN4Hw2WeYzNdm2T8fArMTGUDEgD3RonHmbCXabpVfuSw3gthbipifsLQogSupYyDGeYn",
  "key36": "7KLTvsGezEetoo7RT171j1uzfJgVRX7SHMFeFCkBqN6FVeBf6cFwEmjf7ex8JJXzw3TCc9WuB1owURrhLF7yTpH",
  "key37": "iuCXSyrdQzXVdMrYyF8fgmP7m2jhQ2tqxFeBfrEfSdo4fBtKFq3i2uh7pc7VyNW5bWKMxRpayzfNrapBosoP6LW",
  "key38": "42sRE5SErDWYLdx4zRL9PpQEAVddrxofzSXxevJV5LHA85SU2WECbCFYEEZSthD7L9QSb1zLWjPQpjGA2gpxB8Ek",
  "key39": "4wjTJccp3V57preyLNUznLY9pQSkjxP1WmqjAbTZxmccg9uhB73GuUhz7a4nVnmqsQDPUFyscTeyCrai3HCHmzjA",
  "key40": "2hPrwiknCQk65LkgBhEbKZnVPB9Q4adugwUSomS7AWNzU8NVHAJcaYU1XbS1Y94hjvpZ5QpySDA7sKBSCR6ZaBqo",
  "key41": "4i2EXsHbx3DXosS8z4rRTPqPjd9dKmVM9pHazH8PLJXUt8aJPH2yDMBLNHJihp6X2muF7u3FndkanCEg643G7LTB",
  "key42": "3jzu6oNjgvGgdXFj3mVWAEPTW72XKyMwjuFnwNCymAm39QAFBYeNKRnSDud3btGFigxvkBD32wgu5GsnyvqXuYEb",
  "key43": "5PS8ZQpG3Vo84XhGR7aHb2o1d9bpJ5MQDHFzSc6pntDMAgbw3hxbcMpaWihYWyRPe79UUeF4A16w534HdWVp22hZ",
  "key44": "4fW1ZcKBHKeLQfvqHj7vaVaq9FQEti9wHQuDzXddW8NDbwrpgi8V4EAq9ydHM2c2uffFyYUciZrWvvGDkqjaMmQL"
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
