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
    "4NXeKgEDWXesY5gmrBziWzGVkdmRn3AdVjuYbaw4Vz9ugVfGR4gxoK6Pzb8xqZWdaAmWakMvHzC6PuT9DDa1DiAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wq9KvUFXDpy2Jpsbx9tJsSfUfinqEU3K46Vf3YaE1VWX4VEjML7EpznitKN1Kpi8G9Bst2nkj4nTrzB1J58Bwn7",
  "key1": "5RD3DnXzHAnHJqqq9hhp3c34rrzvyWgwXQCSo7nVSuufYz3YrfDv9P1cq71HzLC7CNH9R9dAGsayd3KxUGWvgVUQ",
  "key2": "5AfECQhYv1NrQCrptWAcdK31ucSmbYwxe5Wb2o24es7pbURDXvvgrdZGLb529rxUcaeQNnX6dGMk5kBGVBVLBb8t",
  "key3": "TEQrT63yWVBRxzkrkWUSq2gXfKYJcgHjXi3HRygUtaoWP6UrAQTRAXv7zpUX7ZmrEQ4NXcqGTUYRBrdmbCGLvM4",
  "key4": "2uZyD5ufRY8jpukNCpYcBK7Lz6jfdZKKoikDRUh92WYBeptm4gXnUs5Y2uRG1nZRkBjVVFSQD3yGPue76v82ZbjG",
  "key5": "24GCDBMDVgWDymysFGwZKwE4CURYnpevwQantD4CgSk4LhmAAAdhieT3aaU4LoifQi6ZQoV7CarDzuJy26RNjccB",
  "key6": "2WEANUPuVwXzHLuNZCdYz4hJDHJg3ReutpY7UTXFQeGR1xWoKaATCRzxBvxZx1G5vCtDeg9LtJyEDKHmLbiCRfjs",
  "key7": "7ZAo3SW55zCcMHi3LjsLWbkvuA6TiLH36GTAgx8bfyXzW9gdbfhjKn2TkZMS64obNjgYFPgyZkR9RmvoUDzVhoR",
  "key8": "5DjMPxYMXVtz8Fgu1s11TEamfT49Eichx8uLeWvM26rRotZzLJrQmuNUAnVuCCh2pnn2k24ak5Nd9mvx5ttzWRFP",
  "key9": "M6HQZg5bGCaodHNTtGYiGvzcCibZMSKHEG6XddSYAagxArp4hhrjJmfPL7admcvb2JohLYoLQeqEfZKAwdtQUwd",
  "key10": "21Ggz9vgL3HSoYRk4xnj4gXdM3U8AHho1XXTKVo2ML7ZYv5imtZEWFxe1GvQWZ4DQ9VduZDtihyt9UYGt5bbWqZ1",
  "key11": "66MGu8XJcutx2BdNk6bNxU73G8VywuK99MdEvuKZ9YNb7bLjpNTscuznej1UboJwXc4hG1w97n3sWC5uAMT8DGGx",
  "key12": "48PVU1LkTdf5G65QWEY1RzxnVccism4uwbMXT1GNjmYYfypCxYMSGvva2W1ZTxQz1jW8KbCxoNEimUeYxLrBrbz6",
  "key13": "5JBMKGRUidvcupgmCfhsxhzB53uVbdUdDsLh3yZcgdr1qqSWWYqpWPvyhpGjGh83ZJdJRcj3qvKMr4EU4XEXRHdF",
  "key14": "JHGhUXMZZvr2iaK3WmdWYnjDUhJQftm5gu9A111vpanCBadE1zpsSHoeUq5dzuNrRnQFv5r7Gdh8qTyFPgrXG1U",
  "key15": "4g2KdfdtTe4XDCXW35QbQSjmXAe6yLEWmx6JgmNB4C9L4MdUpnh5S3KUrbectASXVk4M6uiKyGzpMNX729n2JmVk",
  "key16": "5B7obPT3GDghu7fcQzjLAf3Z9836D8fCdPYYarxDiFGAZAoCgzgzynCBcJoM8Zd7orctwyxPfFTbVVTmkm2VMUSE",
  "key17": "44u1AEJEhX8Mukdh7nzDSbTavM3wENqfDdGV2KhYZGzEcexVL5XqAic9Foq8RjVfRhfcWyqyCk6MQxBoAuxzSRxJ",
  "key18": "3gbXn5nikksrn2rqUod9gBCre5w4GSda1svQ7bzNNg4c7GgSPJvCt59N2zPSxob3rMuEupnUzKijE6BCVg9bnwoa",
  "key19": "zbXg4P3cXcUhVAUPbJNqCa7QC3uCTCKEEMTaHzLVm1Fv8NfKuUQPy7BEABUA1MKoWm9kw58Sc59KRHvX1GsqYrw",
  "key20": "4vLueGB3CPqrKZxajhEjyUussZdTK82L8c9URcxydYpfRxayhEkq2Curno5Ki6aBM1GD7yhBFCBp5A2UG7Nztv28",
  "key21": "35KZh8E2KLe1m2RztH48D9KPzpWFzMgqYwWQxRDUHoWeZmNXhjjMHd9jY4tD9sAGajCz7G3tFYjkb5Pka5FcoJzL",
  "key22": "5Xmzxgz95BoxTSWzLKPiSwFxCosfheGHKYhp94U7sCz7q2snBZgkmuvJHBq9T7CHHmRtVccPMmvV2HPGegPmmuVA",
  "key23": "4rJuXtBcELXvfQwgS6AVFK1Rqg7jk5eXQJhSCqtyZs91rxjFBDMUdwsvViZjs8oBUymFcEfWifmZ7V2xWsVhhwCS",
  "key24": "2RoFYyVs32KFNQAh2j7R3UA1Em2GN5VmfgQSVhvgyzUJHJTfAu3B9p3RCiwRFbZXoSYB4giPNiCsEhXJHXpstK1K",
  "key25": "5mdU5veNiQTQV2rvTiLwvYUDUDkUCnyEqCi71d1jmUw6SHLUV8Fg2dsHRch8cS88Sce9JmaRw6xv3UY3SY2baWHN",
  "key26": "zZzPanbiye6E9j771GhL11fUSz7hG7kmE9mpESw5pjjTgfF3Ppr845KnjGTWE7LGrfRKz1hhrU4wm41R3irPeUt",
  "key27": "4cYALRuAB8RwkKxVH2ut26ydaUdhQTfa1NVCY6puDobCTJ678d2sUgX4vUGG7ejCSUHMfPp6paVqXx2Qy1jHhkU1",
  "key28": "64BjHQY4GGhjy6CePxjTwhD9wxoWTL3rBLJTrjVkdYec8BDvEsARMGrTUjSdp3yohhSoqJMjgPxnhTLTu4GzzxnJ",
  "key29": "5ussZLrzD6sgg3f2BQaYnLmfmf7JtccQdHv7mt8VPsLoKXm6ZixWs6YJxXP3sMRL2YFHA6yVYHRqPwrzur7n4g6S",
  "key30": "3NrjjGQa7NmBS66bN2tNJYefC3XVGp8xD1txS19CHbq3mr8G9n1Wyy1FkjbzRzHjTKgw1BjvEnEorBuEqZw9ziTC",
  "key31": "xapFC5qRFk8AjWoMGemB2sDW35zXLtSL7vKaZV585jkxreHRpxsZGk47e2QegrDrYtr4BAvPfdakg4Lj2iyEGnF",
  "key32": "43Hz26GYoHKJFT5bvTHw5J2E9rNjmrtrWJKakP8VcetDUMrggkuozU4iyh7W9K2gwrKZQ9WAN5xHp638VQoSE9ZQ",
  "key33": "4oAtjvibJGDAqg8YFYjSLSb1dCYQmofxykdfypRPcMdmdJpbUTnbr3e2KyiMtzaWtSqziQ9reeibhDCPX1BcXzLs",
  "key34": "3w8pTygCK6TBjy7cEwrMvguNjoc3Q2cqWs1wqpnr53Avn4iWK3WeCVamCq6qZPQ1CzoUqoZLDTpg2RJpAvta4iSG",
  "key35": "3CjZ8g3DxpXXQVEN3T5WH2zRE4xZrpBaNC3SaanVcAYh3hbBynoA9CmzNEuw5zfXPo7vbFp44dsr125N3QxGyExD",
  "key36": "27WN87MBbpxmqJV7tNfQ7p31yAg2F43LW51ghGxNJHDrpeNhsW78cZPEbHLY6JzTMHQkAH5JXJZS6GiA6ErZt6M3",
  "key37": "2XgmeDLApjBfnosRx6zE4W7g99XBg5htn39UhjVEpU52wwH2HWvCWQHRmZznn1NxT2VT5EkjxS7EC9Rzo6qtDSu7",
  "key38": "2ABzMQCgZYVGX2LXowqWe75GHLCsTcw3Ekx6R68W3WKEs2P4srf9GBLkqfgPid8RJDRVcVvKgvvHc4tAGjWA3Gd6"
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
