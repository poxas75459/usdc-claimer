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
    "KvJy2ovHjHyqLx3NASMZSVvzthUGBXCsnHnhNjLRQPZxKX9H2nSDXrEqo2XGyNt1j93VEoVAabU1URKfhuyswX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDfwv8xn5iR8x4ZVzg6ih7Aa4TXsiivKeN3Xa16BjRCzmhPeQxHqF6w9ZEV9CqAUWs5VCaBajx2LPkcchRHXuMi",
  "key1": "2zb13cNxkHRgD1Kw2FYQ2YrKSkDpBKUd69R9GQSZbjeTHGsK6CfuVm7S3TFQqmTFPJGhXSe2D7MPK3WsJSjfr9ac",
  "key2": "3tmSAZCdoGnUC8D3n6y9ddRsWiYWZw3vFcEm6ALrCwvFHNBoUavzNiQX6cnyYuA4nLmKdqEC9sjgmLMKxdUgtDk9",
  "key3": "zNVdM89oRhAvNy4n57nTdN5NRVNo4Z2DxYfSBwvxx1mjphuttAgxBSUEdCW8v2GgBFL8GJ7CScP15zWGnQumDrX",
  "key4": "4Em4A1y3Q72gTRaJUaozXXyM9wtQYRqDVtHBn2jt7748Ce3x4PbKp14ixFVbh6TLgCVnbHfu3eBhy2Spuqt6vxcm",
  "key5": "4oHGYDTW6rYVqSWSGv837wFeMJz751sbpvpwCXf1MD6CugdXKLhDMa3bqaEeViA7KcwDmFbFWqSCSHNQWHVKi9EN",
  "key6": "3SMyZADjEettcxE6QVcb6g1u63yGwzQvMe4uy5BrxxcBkVyyBe6ENDfdmBf6mtx3tuUYYtBoPmPLRSTG1bz1Cqkt",
  "key7": "2BRWf3khgCWqvjjsCR5aKNhRidEGk9ndXoPDUB7ujSm3ZZf8sT8Lm3qWK1QPV8fKKMhRZFd6nnoDX8qGprjeN7h6",
  "key8": "4xzCCyomS5bTmS9SEXmGYyppivtHZT1joribThSBhQTDFHmfEcX9CUeg9Nwswc6PDzSymLuvEBaN3UoYVcm6Fxuy",
  "key9": "35XGskkBkTWHaTbGTMikYXP3TXcXH1tVYYmqNSaVSgBWzHGJwHEtLXW3TskVvZ4zfixQ6iqVPqf4uuDhhZAu3b3M",
  "key10": "5uz2wKGXuV6FU9XVc7o9bp9aTxxFT42CgDyuZqNYZCLJoYsSyC8Y2sKMkESws19BcQpgNMekYg2AewS2h3C2TKCF",
  "key11": "3uX7RdRav3fNU8nD3Er5P7eJtEAA67S9YvZsgQTrYANJ1M6JYsy24hbiBBeGtKJhgcWkkpNeD6tBQ6TmPsc5PsbN",
  "key12": "7NitkXDb61kfXmt13RAsqrp3YKAL28kk3CXq1CM4WbHmztFvQ5onikvbhG5G2i7YicQqjET9dRsskTLY42wq7bz",
  "key13": "4z27SXnTsc9hsBCCfcvZWfxXjgq1xAU6PPyzntWGmozYZCDd6S25gCaFCkmPZbycXnb8rqFVCkBKCQnZBsetwULE",
  "key14": "vQWoXqZpSUZZLqmgt5fyDWQhgzT2hypzxpKrRf2h8qmQpA68JSuc8zXXL13UbXZrzgHarE5f6htznaqsgkvwSpQ",
  "key15": "2fGkc4Uw2JfbWR7tbQunRRzqTA2yu7vRGs81Xoz2T7V31ngQ2zZ6j7XanwnKGDkfybcUGedUzAFYy6R6Lt3cj7HS",
  "key16": "4hvwfSpeFnQB2933NZMXsfLPuzf2XzLpG3AyycHCak7rbsuu5igVSZBDJDqcjXsNsQrDcLhT8PJ4V9JCK3nZNXkd",
  "key17": "hwvKS729fxRRnKrRQEJQbNBSjb7RZVkcFdii95XXeKPmyMdk8M5hgg8VTNGpyefyZsiUEc66NBPCrkCm6VrFfw6",
  "key18": "3NySmXeRW9D2pgFHSB8oGXqDz9Zf4qJD7JXwab8EMcEsdYjVt4aRB53BqgkQgwcAq55iAipthdjqq7HLB43rNAaA",
  "key19": "2GoBLseMKjbfHKLgbzLe887MtEuzgLTNToRs4qq9m1rECEm6uRAHdeCGrhUaTVwmFU7bobAb6VAbjZdTWFqRyHLq",
  "key20": "2UHwqCeXFGHb6A1dSqHXhzMigYzhk2cNH3wcRWyJP9J77sFf8Yf74Ur4SyUPyHZHKYJVfDxByZraTudepswozEtt",
  "key21": "RBhtqgjEbtvcApWSwpkdJEB3XWQ5Mixp2tGKS9hyQEfi1dupNizQFBwAMk9mjEm3AzLohYzy7m34HVY89yxjbtp",
  "key22": "24sHKrS5Lk5o3Dvt2Q1xLAk8XH9rpdXCuFCGtSXccjkcAPzZFAd8WSWo13LeZtRzahBeKS6vmxrQNLdkhTF4apU1",
  "key23": "38Mugt3U9VMDMKcRgTmJss1kJocCXeMiWXUZDgDuE7ESnR5ccHvTkPmsxBEpTJXNUEZSbui3VwDJDJAqwjC4tiiR",
  "key24": "5T3TMb9XUxcQibSaMRyMZU9REpZDdzrHMv7RqyCo2ZWRRLgcehBGQoLwK39twq6Vqb5ifRutGtVpjLjx8UcoWEVM",
  "key25": "3WZ2MCfPKn6ypGJgqx26xk2uuv1hbLVTM1dguCrDbbnoYWpSLHedyeiNoNTcLXVpdyvrFwAHRt8v4XABM3LNS5ma",
  "key26": "5teGubp2TY3HZjw99d1wyy9PXMrCTCT8DZA1qeBej29MZtc2ytmKWEdU7SNbBKP1vntccV4DBNdkC2ZhAvdUUyFN",
  "key27": "Bpeb8KWm8dER3auBgBwVhmo9LgUQrtyfR9qB7Y3Cr1DP5qcaFMNKKKwQAkuxgV9CLRskPTYuuKZABzcqy5X42GW",
  "key28": "3FVsjPGRzjg29E6niR2yXkmBavvKfs422Zer8jD4K5jVMmKAtXRaCBeZV6os9wwgSwRnuFf3UNGHkHvSTUMNjsNn",
  "key29": "5F5XW4QFq3Me9eRepmVECNPnGP2uzDHXxz5RZNBuwq8iGZzvCR7h68BWzAJcQxoNRjfj53q19YefoJxEUtcNQ1Hz",
  "key30": "5muuzLPeUC3KMxgupJfrXCAhC88v4JtGdxym6K8wN8obRDKqYWVXGzhEPYyxhpmKMwywxfYRFYra31d9y9BTfwga",
  "key31": "3mqqnoXjCmykoDB61by25V7XZ2sCkuAwewQbC9ySbSGr8xbWHZYDxy5hKt6e5V8zFqVtYw5tQYajut1dxG9CnHgM",
  "key32": "5GvCa6qfXumRqGRNjEb22Kc8FgAfV2a6kVww57HEvL2JbXYqkmXnZ7XYrhB4tHcCvfZPc3bbPKcdB9dtqmu9TSUm",
  "key33": "2JnKvGo2gbTic3Gut3eetJBGbyUaxt9UcHQcTK1oSvrey3WLZv2TxhWuVx7Vg8zoKZf8GNFG8uX6R627HtqLKaKX",
  "key34": "5esY67gQ4KKWaXPwKmhedmwgSGkARqXrQBJ1Wid3BD6CW37XtfZn4aZ5eJjuFSozw1qsmSRgZWV9uGxAvGRMKkJd",
  "key35": "4SkEGpjxeWLMvSAPhM1zRLqhoNDaVBchmKRo8Qqx6VR4uQa8YDRfgvdkUjRQHBGJugBWpeUKHAcEXjiYWskALDFa",
  "key36": "E3wCS6aoVSJ5vWJXeeXiVWf52owcmVZdUJPx7bkYLdksFbZittuuZ37mnmzj2Lwc95ojzeUia9LMpkKD12Lw5Jj",
  "key37": "5Tks9nkCBgbWTw6M977cji6xzChubDZaNNM33hubhmKPYYTbDQc8no39qJN1iZhACEGcRFeXeXNY58G6d5dfSiJR",
  "key38": "4qG8U6TenW3iKHTUNjjprF75jmV8FMn42LwSjsiHT5hTCG737T6znWx6UA3moSEBnzdsYAtcRqVMVvvucdVd4NKG",
  "key39": "QLXGroG8iyHyrE9vpTBjR81NmZf2MQQJa3nRYMR6NnorTU6j988wv1JHf34MEXPzhcskvj2i1brdszwzerNqm3k",
  "key40": "5tfPGKkBptXBt72YJygQ9fxzmBJr2nUxGBDxw6sMk1DGF15gs4ajb2G7PqmaZ5ft8KvCs6A5BTuJuoasWWAx9viB",
  "key41": "2Jz7PLU8UeqgXrAFdomgJPuqHj4rynrcX6izZdy9tQgYqoRFU1hKS49D1JHyEb1tmeNt4vByiqwZHCfap3dkgp8S",
  "key42": "4MiXxNLrUbWupAhtMT2kjKGjnnTMEChS3kWH4HCvkCPPBQvfhPrrqqBiJuVZyrVb3CRZQ8Xmqa4jcsCdkgMGDmqv",
  "key43": "4h8oWSoRmNWhti842Zv4ZvWwrWeAVJhB9GDonjzeerVk1DLe1t7akanzyFvZozjh3fvThBGUqhojQZPhm3MJqsqu"
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
