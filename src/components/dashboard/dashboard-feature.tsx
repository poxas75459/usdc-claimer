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
    "43ouTqxJekyQw8AqbhiE1e6YhgeYJcptYTwckcwvdZVNFysK5PNxQkLEJo6sxDnJmZskSbFYsG4B3hvxLKxYD3q7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o8mZKE5Fvf2CR8sF91gjYXKnf76aqSfAynvzRdkEUhgnmfRbyFwZfE2WWfiigjYA4hJaEyKN5T23mpEMBDWSGbh",
  "key1": "65bXZcMYsXJ46nDUqkYT2BZjDiJhdiF6g2PUEH2egvafrYALeMWX2ZDvwnc4GCLxdQp3hUN6PZS56ihtCe7hXW3v",
  "key2": "5fsmKGJ1F8SCeGF3U1FKCkqQPQAHBB28PYhuyQ94htmqSBotM8SKg4jdEoXftdASJjbE14N5VNSZZ5uXLtCLUv5W",
  "key3": "3esditmpdfRCMFG558hPNoAUCrmySHrqttVWbrnDmiyFYRS3J1Wv4X8bE6yVhr1ux4FtZrsSBhscpt9tnXge2biU",
  "key4": "2E8h8nizmgmHrQd9mxTYLPVH9tPrvby1maZ1bQNqvRSLm44TZ5fB7HdKV6NW6RSQzhtBxFbKjXpmugZLiPG4K64i",
  "key5": "5wNsu6Qx4hBJ57rGuycmprQhQG1t92o4vybYJk3UgrXRPA2ab9cieRWj6v9Ckfc8YCX9qdwrTipJ7thVZgjwq7bk",
  "key6": "3w7hyJ4D5gmBMK98PG7AyxQfUsKmJXLop7rWBvp4vDfVciND64gUCQvP1QZgGXqcPqE1raQ9K8VRPeWYNpsKHAsT",
  "key7": "EQMDEBH3Ym2QkAa2uruCxsHLgDxrWhywsFWPFEM1h5iBdi7BX3PMufaSe654BZcyUHHc7bFWCk6DXqx5rygxakV",
  "key8": "2bZYtB6iSugGcEh3fGDgj34kxJtf5SnNtvk7ggUGT3898S4RHntKjKjohCxUBrQsgFmbL4o4YZjby5yh6AiYLhhJ",
  "key9": "FU1xNKWVzjbfLeWxtt4pC5V2hSjguZHEsbjJJUNenV5AiMNCb4qGTnXKTejKbPnPmdt5jN3VQ7evCrxq2BFHrJX",
  "key10": "R6ExLTvxcjyTb8Nwvq7AXthXmSGunZ6NSmQCG8SvoXB5w9H7jpf8DiHCSwgkggu9HHdDRTSyaTahHvXLegRYckn",
  "key11": "3d8gqacdK9yAYXUkgQ6PpHfEaZCes2B6xvkwxozogugrfwYf5UZKQTWBDBXqdEkF7VG89T3x426WH4BhNSCj9moY",
  "key12": "3GJ2Rcr4rBE1fJ46CFGYnJ5HKyJzgLQ2sJxwj7rdxAjxriaP8ejDZePgxtgghkw8QoABR5szqNP5LhsiuNh5wRMY",
  "key13": "5i7Pa57qx9Gx9zv5UpDm4EpFUKMGsRmVxjfyxTKWoyfGxcq8UxHQVJ2ru7aiQjx8YowjNGcfsZmdw7KHAQ7hTNT6",
  "key14": "DVGEGGed1htgS84WbTgM9R4eTth2CKfBfpx74bnGgiESaiuCjkumkZMDae51PkSp1A62D3hTVd8JYnJSgiMpEoM",
  "key15": "3b2AeNyRgsGcNaayDvsqitHqUKjqgTru8rjnsXGCZfbKLoy5ct3gBNH3cpRyMBEBJNE5u9YFV33GxEo477oU8Jp",
  "key16": "49DF6q8cjES4Ag7qMoj5NKc4DZCG52oEWET7gqejmD71SNrpDaApPYKj2JAgbUeYL4uQfWLoae3GMw972HeeokYz",
  "key17": "4QMz6rkACDWxAPWkLDJskpke7T6HMXJiUuJfiMmgzkwJqCsPJYYzDtULzjMCGYxpDaF7TBCqLCnWUBcsrncUw386",
  "key18": "5JFGF42DTmUmELHFgY9fG11vgXRNQnGCtrvr54ntjSf8uz797ZtfAZ6cEiXGbVFQey5KhG8gwsApCgTRni1nrhwi",
  "key19": "518tAnBjHGU9z5ked6z19JZysDaD4n5Nx26xo1YNSch2ze2epTjnDziFzGC9wv65JbfNKxfeMqj5bX8WhedF2dWR",
  "key20": "587iKeYJ3t27KwTE3h7XH6c3p3BH4yLU6mTtgqmpzcHZzLtkBDAnQNa38a2KvaiaGhZx9X8J7xEbNzj84EG4gqcb",
  "key21": "3Rn418njsxEAHjkUpBs5FtBGT3D1ZZYXKtDr3pFL1YsvmHCM4KTiM9JdkeZ1vMUQbnYpU21Yani3i1ymC6s1a46n",
  "key22": "3u6ustYFn7mz99W71xVFsmF6Nr5171L25ButNDVAXbTf3MZ4HyFtn6UjZmnHrEZqdB87y17n4bpm3egHksjsrpfA",
  "key23": "tyDBcQH645N7XJ2Ai7uKBH3vMEHxCKonsZ86EvZf6rp6YVDiHGYYQkKUVthh3FwQ2ghuYLcxdvz4TaeMMTDP7yf",
  "key24": "2QbwnuyxdX5aRESAFnouYLyDH8yw65wKv6TybBvRiJpCSHmX7RdPvBSAFCiKLRo1B8B9e2ukfgTvmUAR9RHC5ijT",
  "key25": "5K3Q6MjGSt9cEzh2s3UUfEkvdfFNqDH3YAzQFnL9xALA33P18sapyH6rUExZ2y2Q4bQrEzji7KkZs9QiHRz6UGVL",
  "key26": "5jRUhLpC69iSpfJpSg3PTEkhfbNkXvK1z6dP8Fd3y34ECVzJhHqZ2c5hmDUXnQk943XDNqss2AWzGe9FHzES7dwa",
  "key27": "4XMr6gx6jiwusec6HJYbeUjU8YbbyDYuvXsarLCZvsTuefeACbdpYLdNkgNWZChjqKZEARbhnmjyP2oJ2Vdmwra9",
  "key28": "62W5za1caLLo46RJ8M4PQgSY1GQwosP8vvxebUssHhGzsxnEsgxF3BCzk6vfwbNnVgWbEQaEjfSZpApmMRHEG7Xd",
  "key29": "dLTsLpYrKqLK3kk4aeMs39HhVc3TBU8D3ryvXEVUbavojPZnhx27uDcAQJiJmsgQCyTivwTjXHqNL3YyiuxenFs",
  "key30": "5h6UUXftms53G7d9GEVAMoq1pnVWiwm7vcnbSqSMTqXAg6EUFTakvsLet7rTiYCdcHtFMrFDFDUAUMKHbULhL6cX"
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
