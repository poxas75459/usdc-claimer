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
    "37W11gmSDfTg2muFTezcHrBV4Q4jnApUf1mEzjZdcSggdPZLNK6xNh9jeHc5QHzSvYDitJ9PCZATas8JRq1SdwPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U9VDFzoKzU9uLufK3VkbN4DLQ5pGCwk7tKWEkstBjbcCDANxnx3SkEJ8XDJ1STNFWjuFjN2M5bKD42QgbfViPQH",
  "key1": "5KRs8oh93ux3tjAcqDbaCFsQJC37qLA2b7bi7RiDHpwY7n4xMvc1ovDrKGr5jh7x6xMJsAtos8gNutwF8oCtiEAJ",
  "key2": "3xdKfhEfMRSAqK9BpQPwJw7awTFsHjV4LnQK9iuZTSjzj4WoA1bM6YH5w8Sit2gsUQf8VJbRzQamfAFwAwoXLUs7",
  "key3": "5LmSDqNnCxm23em6vwxKNLzL6hsdgMGw1s1E4qpXedTU2khVXwoLbSd5P9epDuVpdn5fJyHLndyzFMFSs3Wn2HLi",
  "key4": "qNmkQLokpWr36VxwW79sXwQS5k5fpsJvZyjjhb4peasipUShdjzQvyxUEr7yVK7dKJfdWCkdJc1TRWNbGcyKnCo",
  "key5": "5JMqm2wuBtufbCZ7XYyd6MLV3mb9pAmvsP2hpYzxHP5qBtYjarCSmb1NGYWUG5i8CpfGaZ94a8tkRqrUhqUUG2ef",
  "key6": "5DM1NiFK5zQCc3m6HqZ8RmAGV3S9g8s2aJBQwi6XQ5GbDVZqg8yx6sxjXyyLJo4eVjFvh3B62cqddsFpoXNJYbjZ",
  "key7": "3oLHRvLDdDGEhEntZ7n1CQW7YoZyBxDqjKyeFW2T3SbrxFVS8wQHpgdG8feeqcfGZANthXzGk8qzADC6YMNoLbKj",
  "key8": "5EcNf5hZqGYK7xw3bRkceLkh7sd37ZVwtVXN93wLD2nV28CSHVYQXPMLGV2wveZ1prv7ZkMAGazovSz9tDL2GRZB",
  "key9": "3vuPZyWFKhb3i2ZHuXHJnXWaMzyAVW7BzLPAg3ec4YPf4pnafGgRYfby3cRX5P8AZapvuvE4Xav87wPZogPYxXrt",
  "key10": "UprhTsYsjMCrb7CZQzctmtTYZzb1qtfeEEE7BDMLJsNYQrMUThS3eC3De1AZUVuS8a48unrznjxBBhhPmrKyhAs",
  "key11": "4eoFcpcCCN8eVis6qKnAiJF9AWJmtFpD4R9QxPYGmPMa5gmSHVJQ5uXG5t2Y5Vqu1MZhbGuK9igdAP8yCTG1RaZ9",
  "key12": "2n5mgw2e8o3qPz8rR9oZJ5VxU1nq75qjGkDsbdQGuMkK34C4rSMMeUEzF1Q3bjRLEGyuiELhBRxoagsjy7JKWXbA",
  "key13": "uf3DsZAzkuXsfWp1dttxV4h3VzZL1ePK1jkLRy8oNDCAaS61VYEzEU9jmzGRvAfa6ponZeMjj8F2aVQxyH5Y1oo",
  "key14": "4ZcTJuAGgfAijpxsEPQeuaktMHAtS1J3yRGMiXiyPX3cnCerMAF78n6eDgHnoP26bwG3BLECHJBbR5VuSPuV42Gx",
  "key15": "2hA9jVsJa3xJ4LaVBFoTD5q9JyZ3rFgapWTgAg5abrSDUTYA3Vr9ibb4kiZtBJfbh2X3bjHXc2Lo3QNUSmHyrPY6",
  "key16": "TpqzrC8whgsUr2MNUat4mhvKe7iE27GARy7n9TrB9ZcYCVENDaiXP8hpnd7x2V7HKeCK43cbKXon768wjuNPFkq",
  "key17": "2oHchKUEPAKXviUX4WrFGGLDgiYut12HhWrv8qJmFQLaQMEwTW8z2QMTeV6spizc4tA3TF3FjzJkKMTin9cdoRHy",
  "key18": "3syYeDCk9pY3YAe9btzc56xbBXfkLRa82b3fjnqgTyTGc8BjdYpb1UR6J2QBK3hnpDCSPJdvbzVuAFNmJmdqYCqV",
  "key19": "3MEZEtK2bzLGmxVpUZ92MTTQMy6YwRcsQj6nRaFgQbAnhcjC3wc8cVfkoC3SrvBJaX9SAae4HBxmzTJL5waw7WDe",
  "key20": "42hDQEbm6AbFzh5eG759LtG8kfti8jHNinrNoiKkcERsyFPYJbTExHAa4DbTjtHfGUA6XpvaCZrBmbVwCz4gm9LK",
  "key21": "1jEQQf5eUm1kfRV43bW9vdsrxGd3dmJcGyQsPiayYvzy8WCzrEVeTVxFqn6h5Vzyj9ZheaPhhrZFbLgEptjbyM2",
  "key22": "4iHXXGZsLhuivVgumojRdtuHX6jaQNdrbkbvonsYCAuyibCdTUYxV6Rkyk2RHdiunjRkLib7DEZTsWzvnUn5Grp9",
  "key23": "5jbytN51KczqzDsNtiNMyXiUXCrwDDdwkDh8VeQprjHLdGiwnhsWjv9TLEzuM7pba22ccGVaEGgcG4WXMdHTJaWE",
  "key24": "u942vRuk4uS3q4YxntVL7KbDpK9uLAygKJ34GrKXV2q6GVsEtNVRBtbKDeHbJ74DKHgp4aGrcYnRwCUpV12bai4",
  "key25": "2rf9eCP2DEpfGQ5pJrGKzdrRPJk6wwFpNqaWbQxXeJBsqnkaxW5Yqg5H4nNgTSkaW5hUMJH4bneoXQP7PUKyLoDR",
  "key26": "FAesdT4hEub7dEWqYW1qnH6GFqAgAbS4Wdp57rUt7KGKpC4HouwUrMgoNXpoaBUHU3z1N6kQVxyYCVcGq96YAsy",
  "key27": "3y1f8NFbf47LZqXHdwDJxLULxLJNx5iDajKzFz2o4cwuwvm733dkoiikzQZLoxmgvgqNDkP5RSmzC31Nva9FFmAt",
  "key28": "3kmkHupE9PC6zzpSgB3ec1yaiCMWAkf4r2GEnkWZnXP3et2zoQLHP7vE6p5rD4HCPqYbokiM6wFSSb8HjUbjgXFU",
  "key29": "5jttt2sT4tTyjGZmU6PT4NtZkTVsf5LVH63VymdK4N6GF3szYTP1i1kdGfKuT7hQ3L5iNADXtLkhYPazRhNsCKEc",
  "key30": "36JHh4oTw7pYefwKhFJhkERBsrkYoS3cgTWN7mREFBh6xtLXgfiFTuMEFyU6pHBxEVv6qt4ZAMdp2QsnDX7zp9KC",
  "key31": "5JR1yB5AqwizDamP6aTLbma7rDj1KW72u5oUaLqYtfMWcAXMvUb4CPpxvxqPHjFVEFa75mT5QUftoxJwPwgBEDYJ",
  "key32": "5oBBcyJN7ybcfbecv6SDmAazRetbqgUiPr7d3pCboc5qqEEEMJjRtU48MuVyVUosXq358665Z4PU5KKona69VhKc",
  "key33": "aAiCcCnACadrjkZLMUWJFaeA67PM8Fwq8qwB9DUK9eFTueu5bZ5SeQdzAayttSuQSM5aTDed6XWp5v9GtD4Dbuy",
  "key34": "585ciSkkjcSpStZpCfZ1ce8kCUYB9JkvKufHHND4XSkA5wKR31Ks8o2vR71zxFPcCPQkatH8zt8mvTtrjStTHok4",
  "key35": "4bH3g8CdeQauwq9u55svGfFChVcmErWt985568zCve4KaC2eVvSbbr1K5ok2ok9fPaH5zFB7m51kANKDh6rXN3mc",
  "key36": "5KhiJHrjTtg6w2LXrzNqv9qFbfz8unWNNYU5mEYPWnnqExwoSR3ZP27dr28oRvSqSWgWH4ugYzSdYJFyMsFhuWrb",
  "key37": "vKKFsYCP26CTTKa47t4nrcGN4wdk9Lca7QssuzPHQxxtDnxDG3XyPJv1buT4DypKtbBRH3PCMBuZhYDSqtSfDuW",
  "key38": "3n7uUvGKgUcTKgQtKqxenxLqhr9rMtZzkFySasHyBtC3VH1R9CwQD8B5gnpeLadQqdS6pq2hjqR7d8W8FLtckeKx",
  "key39": "p3KoHgjUpwt6StSj44iL3bTZoYcYtJELqUKLG6Kc2AaQfGrnfuqL2N2DUqtF8NPmWXESf6AB1DDsRw66EWtjQfj",
  "key40": "3SqforY1AZNSSyAriL4c6bQRd9U6jNfkfqjz9Vq792tJD7K2Qbjy5JkQjPfbaFCz9dicHtinZc7W4eGvU2dQoh3d",
  "key41": "5A3PuaFcbGogUFe1bZt4PRe9CFeXjDXtziwJX4XSXoCQac7YpssQJNSJyoVgSkQiB5uVDsREGMWsVf5RFxaUFsjU",
  "key42": "2ZuNZkYQJfVjESzZmCP3sEGUSV8XmT7ZfXVTFT9Hrr4uXSTn4nAzFjceQXCnAvrN1VkBhXpzcrQdtDX11x3oDThh"
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
