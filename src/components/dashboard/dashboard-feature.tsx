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
    "2ouJrjWweGL7Q7SByegtmFeib289QnBrLXDzY1BJQWuLSk3VnvTHTPZCyvs8Mw77bg81dxMenmuwgywntZMhVgyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsMV7NEf2vM4ApEGqZgTtajzGHMVq5x9ZcaVkGFoi7T6dqsAXr6DUhgjyx8xUdRe1GMGVBV3soYQGQsWtGFhAHB",
  "key1": "UbdGd78AubHNezDbiLPBz1vmghkG7HNZarv5VYJqnQsjHKzzuE3VawwtA5tXjnMBWUxWAPBM7kwmie2DznfxvFd",
  "key2": "4zrmiTCN2uYhgELSzDcd3d6rfev5uksRyxo4zFQ1zBmMZTxu9ah11xMR1eZKAPNVzip7Qo61FjbVQPSj6kAn6BhW",
  "key3": "4MVYoMZXeKRJfWW5pfrMyN3FMGDCkv6cgUEDkoateSQXzWoEqevMn45w3jdVLhxNZrD7S6d7EAUNNc7cccDQNsQt",
  "key4": "4rAxnaZFDd9bsko3zmrPPDcTnzXWFuWmeyxNWLipoX867ejZesWmLCGUMVwQWEabUWmWJqXd2qwRrNhFZUA8G6tE",
  "key5": "2mMZ9gsDkwRuvcQXx8qTrramMCnco8KJkQyXr42Sxtndb2tRLGyxrWr4SkEQeRECPkW98i6oDHUFU869TxyLiLRh",
  "key6": "3s998gA9abLnDumsxnfZVe7F2NoupZpv1TZzA5u3DxTTRnL97ahNUJxtERY3TrNf3ncZD5VdRS8GchyfzqkXriNc",
  "key7": "3rSwXTZXtWXZ8soNknZoW8KgXA9zgMWWt38ti8Xaczd2AjCu5hPxkHfVbykkygboesA1Gig4icx2WgYQYpRExzwo",
  "key8": "P1CqxCKnDB3yksEZTP6SXNxiAKWQ9YrMAFXDkb9BnVssPRh9h1ZZpBzASabd4igVTxK8veYz3PAJ2oEGEWvM89Y",
  "key9": "2XyQTXAGEsNU73CyYCNaiNFPLe4E7UK6TMSUMdNCKUTEmivpnHTUVhgT3CzuyDcjCdHapxAmjA9RSELC6BM2kipM",
  "key10": "3ztwXpEyzPvpHqDQYYS683KkLnUJvuMshgwX3TArF39TY21xsibCxFqzrLbsd764iJqdhw3tDaRKobZJaWjwC8tZ",
  "key11": "kFTUGWM8Q7s21ivGTQkN38Mepi9MUWsxxg72rKPjjGTs5Eko6uUWn3DVdq21LjkpuuQzB8ijdtCP4wh5S97RUNg",
  "key12": "3XxLfx3ba4Ev1vnbeXPfPcTEhQaWoKVHPpFpy5gGW7RNSGHK79Tq1S9MebmGq663kDUEPzBwxYMsbL5rW3678tcp",
  "key13": "ysCoykZ9esQBeN6TiG5h5ePwdvfEXcZi7L8Emmi8F4maAjfmVQJHfQzFjxBM4KWNgQrDTzWuvueyGvhcZQcncYx",
  "key14": "2pK64hUfcUh6cw3o2dy4YpeFWqPm4jnkk26ZGGRmDAXDqL1eAQCMA17rUZTnMF4dNqnDxG7pKQE88m7SsjZRDpbd",
  "key15": "gXetA2ybX8Kye6oZ5uQ1xUMkj1eDbDwqR9Y5DLg5q6LVMpMqP6n7GSZXAxPDBQ88voBgL9XYX7q6Q1TACjXg6pL",
  "key16": "Zw9Lvb2btPCveEiGKDgsncRV9UwXEEonbezsJQWPXPeerYGmyuJcBteF5yTN5Q1dFzSRYcmb5AGacE6m3xtULJq",
  "key17": "21t5EFpPrzQbAMCagyEq4TWphZejjKATwoL5t3VBsi9nFd4DJPNjkHopGGh4aQcRBALuSHr6GehEfmyWR79nN4ay",
  "key18": "4QbYyhSExjsfD4h9oCYNf874REJZxbYfDfa8wHywY3zEFs4Hn2C1CzUKA6xHGBp1tBXXPs1mS8eSJUA5s8btP8ok",
  "key19": "3zXKJjUQJf1293QYfVM9cNxYqStoHpdVcCih7owoR3ero11UZJnb4ZUdzUMXEj24Z8JdbSRtaS6GDkrPxPU6jCBv",
  "key20": "F88ucJQJ522kyMzSbFSsNsRDZFF1MqnHoPmh4szJXHB92VCmSXoh9QjwMABNDSfqgh8dwh2EGqaXHBtSzsJje8t",
  "key21": "4b45QBHHbYi3vtBy5LMJQbyrcXaTscy7Jb89o31WhSEnT3bwmizu58PYEtT25EtKmGRWwbwxqTitg7YcxfqCiHyK",
  "key22": "3CY7Fi5SEySaMwtfnkyWAPbRSTtY1wZ7sJgXpRqVQj5cenp6Q7L2dmPWnX5MNyjr7nwB1XCGQck8gcMS8dGJrmi5",
  "key23": "4oahvEohcRpuQJVnHD8WooBF4QVxnzr7rQZcRyzg7MiqZzy2o6AjkHLuce6HAdPTX88GQbxsXWBSArib3WcnDJxu",
  "key24": "5rnz26VM2dFYheiK2uzGjEBpZjNWGwMXLmY3CkHEkes9VZkrbuZAfgZTonvmnqAwPLeQH6nM4igcXeVaCDNPDZ7t",
  "key25": "5SvCb8TxhDzXgnKcLZBjNQfoFcAd2fJ8PFa4ZCDh6188cmbjhT99tQAySHDvaAg37rfmYSRDvBLrth1CjMr2WzFS",
  "key26": "2sxNxnZ1Hihk6MdJmqSgvfjPsbY9ixKgTvjeWnD38rdyEYR2HCiZKUwgKhH7YjEkxreuh42n1ywtjBhGET2CLznC",
  "key27": "5k7wgoff6F9T2EpVGapmqfyX2n9Di43TKSz2wjmKgLzQv9keM2FbSe4ve71rwaatg9o8gmubmhmPJEJzMHz5hDqm",
  "key28": "5UVpX892F6saGvzxrMVkNTdfHX9LJahxjhAvzZwotARGr42QdRnkvQJHKQYMnmya4UAqMCSDKGZSe7wZfKLs9Poe",
  "key29": "2JXvUw7Np6CyzXrPnLkBAFkJkpeMHUmYVfmq5SCHSB7ErS1WHEohrbhzs7NhusGPRrHHBqcdeWQNdpSzUoAC8mcs",
  "key30": "4Q1byYk4FHFWA8PsB1PAbvWt4pZbdm2jte12N54aspZRbmFtksMLpXMUU9jmwReVRsZCKrwMGEb93JhMKTqgpwLa",
  "key31": "4L772nVkn9GwCVqM66u4cLTcWFJWenUPfjb8zni3E5AStiEJDD3HnPCYjAUUsoXXjxKyjwzkVv8VFzHpjLMvimNH",
  "key32": "5n5m1R2tmtwxYFXZnMRG8uMKx1mSJoyZ2DrmB56CQqTrQGQkEQ3uTSTiuaWpYbmxr6kWJ3YGbjhBhXkVsgTX6VU",
  "key33": "4qKAJF4MWXAXTV8LmmGf8VUBtGUYznh2G6oBRjCGjU12wZr3Q6vJPZGu2oLJsJ6saSpBCNP6g9R2jWziRZEakeKZ",
  "key34": "2kdoNxzsxKGTckP13VAycnqe1RMecXDXPshmfPcdTNoCsC1PMhLPxZrjLBBSxSh3vPJCmH2edeufwwF9ZeRpmAqE",
  "key35": "YzPSWDqZVFVL2MCw3e6kmXEWCafzDMunbDXQFLVMbYAnvi9D5SsXybWS4PUEG8fvkv2nWaYzYAm4BW5vB4g2tTK",
  "key36": "RDWbjRpCk4W5svg9P3hmjiSAhGMADqohtbxWNxJohnJRXXZs7qFoPKB7tnx6G7tpRzgbqyWYAYf87PndXZQYZTX",
  "key37": "33RWuqHwJrfJzZ47aN61eVXXZJgcwzKk8AYVHveRjtV2eWmTbu9A9Tgau1iV6MdGfKacrCrf1ced7BMM9Egset9c",
  "key38": "3o6CQPSN2wdTLwp9BKx7ay2oSGh5CdEQdKg41ijbjnh6rZR1pYcusjM2Hr7CR4YJTnGo5DavWn1h3Kes8oyGXGcD",
  "key39": "2EXaEyKCF15zYFh63LViFVF67qXx2ZweaSr7yzefUzLfAcKyVNcPa6SvoV17DCrPWaoARr9LrnbaRTtxjAAKsk6A",
  "key40": "4bmhPG8pY3QAYQaNebkk22iZehB4DfUhgBaiaTqiehDeTo8rmUNUNgEzBvesnA1cBmxerbNVuZcHEe3xoNohtmiT",
  "key41": "5Mq1dr2mPvKbNneGkbzUfSZdrqqdDMPD7CuUk1KdnbM185HBz97pwHn2p4u7ybSKNBfWQMPMoibkQ3RZZPK8HZue",
  "key42": "4rq7m8NG4C8MhzvJDLZvpHAqqdFGrgoh32i2cW66iFJNaKM4HTK4YdvTX7LwdCDx8BB1PCzejquSuarsuRkvDHtV",
  "key43": "4VG3c6VKdeWAzqgW3cvURFEkRbymruQoEfTHo7s5FqrPfukGUFm8qhg4c4Vd2hYP66MyCFhuwqWPoHP19df2jdc3",
  "key44": "4NJoJwjmYr8EVjQYZDgQ7ujz2q8zDHPzdh2ReK5NqXJ6A3xq8sgpL5rzBy8f5GC9sGWBsxnXX5CZo42AzVFUWB5z",
  "key45": "51kJa6gnmWBvW77Btpxz2nEw5iHsrDz3jHzqpuSE5Jn4YeDLM1JawSvbBvpHoAyg3L3t4cU8LMEKvfkUfLueegd9",
  "key46": "5dXwfpFiH7U84H8g7aRdaKPpo5V6sM37pSrtiReGVpB88Gou9Gq4E7uYqEnr6K1JfqMSFakAAVatjqRQoaJTZRYq",
  "key47": "4x8qYRD46ZkBHJjV7JiQeXnrvwrn9SsdMNYJdLZSFeHKM1dGWwbBnKJcE5tBLyHfHoegr96Xue8Po763QQh2eUqE",
  "key48": "47KUu1QDnumq5QXCYvJevWxP6vn7Wy6GpP4vQR5NNa2oxCF3UEKJ6ivkJVy9yH3XpWuo9JxX8ADevFb7eekEP3Zo"
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
