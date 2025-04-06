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
    "5beq6CcMmd2T3vkKQth3APiZDgVtiWZjMsbyK3KPtkaFiUaVKaje5dofjbqkhCwZYEPmwyYcCH6wdQPx36L3ycj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEw87u7fHSYXZC7ds9Q5TRU9anaiBNZPJ5NDfZG1CRum5GMzVbbedFSExwt44v3hPgqkwXVjhBFyNSzxAwyCPaR",
  "key1": "ifCjehSXemYbqQQBUNnwLx3RaMWCZ7mxn5nDsU3voDap2wQzrAryKp7SkyP1fu1WaZ1AzayLVtuvkLu7fEWe2Sq",
  "key2": "3LUhBPa4XCLYXnJqp15DU5dTQgocdfUmYCtuHkJ9BLHRUkKBf6SMn6NB6HvqDf5XCPWByBjXhTYaHMD9uEcJH23y",
  "key3": "GCr5m1W62pDZdPKJ4fQ7VtRW4GgPyLmhpk6GJqDNLXYQfkBMd6vS9BgjAK2MquiaSG7Fy4wJMqoJLkD62phJYxc",
  "key4": "5ZRsD8CvQHP5BsVqWsA1iqbHpTrS1zPSMt8dZkgr4NbATonXn26uigxJ2qjVE1mkaChfokqFeaGuzVmAMt3krPuh",
  "key5": "4hLoqvM9aH1nZrxoTM7acF4MRqMgCYx9pVUKxUx89D2XNtJjK7cxR66Tvm7EJA3V8khvsBxa9XhMJgDZi4BhbacR",
  "key6": "2BT3Kmq7nfNv7U7RDWgwHRareCP3mumXYzgQNcesdBuJXVsnFyojVPcKRcJW56FLPtG1VpB2xkbeyTkJsgbBGTjk",
  "key7": "2T33UrHetoYBQwd9L99m9WdmYbGNiUorEUwN7m9c3P5xKt5fHgBEPvvzstaQbHnE1c4W17pxaoeSKWopBo44LYuP",
  "key8": "3KyN7jVVFXDphLMvg5RE9jDzUGittLf8wz91vNKrJpk2PsELLEZe91bQ294zG7V4CszwBZxmvtnLGYKSMdq3VzA1",
  "key9": "2RsUB351HaARjfVkFvLP3x3iqpcW9ghToEoHHWvhhdHgJCKEoSkYjGLMPwnau1NyxP55pivD7Y1sR7jizodJnbUZ",
  "key10": "24Jh7crerE3yUmANp9Ha4V4jaV7Xmx59me3H6Z5osRWPHEjioGQoXuz4crgqNCuQLTx6wcJhMD4mx6jWP2jcrZ8W",
  "key11": "kw3USAnzTP5ynRB71LSX1va5hoyCJJiXCL5QUA7L9M9WStYD4y47MN8rYP7FK7hFmzMHZCJkePigc2d5tvi1u8j",
  "key12": "qeZ27Pd5EJvJfdBRpkWiLHoiREiAsuqM5DgQJr1ZrkgmVsus78c9gVELoQPNXpjzFe3phuQV1KQXYrvo2Yr2EAp",
  "key13": "32sZigPwboYNVLHkkBezfa7NxL7dzJdFFnPHECZLfK2J1zoHSBKeFJHxwQw8ejvu5nmeyubymFDCsf9DCdYa5TJy",
  "key14": "2DboJPduo3QWwae1TQQH4Kpw5qvLjvQPyonmKGjxrJDpzMRYDRFRfn4rDzQHQfjz9LJBUS2qAeRjX5hmXYnTJcYt",
  "key15": "5uhmJvCqffpKVxcXypo5488BWEEoZbTHqVeWrF2fxFDbrC7qzBqmnQjTX7D8aTUYNFjPzRYPgmmBSx1xHqtLsT2Z",
  "key16": "3dM7PrcdKwSvdytpnFptPARqpzJJ94rP26Ybv9Wv9PK7BRL7SJEzD4VTjY3gbaqi9jKWRUAJTL7FmCKAGGTG9aqx",
  "key17": "43jr2jC3ZLzTZsBbbCUHQsKDAWSPycbaxZmFFSJchoMvdTD3geP8aj9qHTSn7R4pMq9SfMWMTVce1kwd75oWLQdf",
  "key18": "yAvtLzh3yfTV6LurPpjHYngA4UakUucSgAprDc6FtoJkQQCGHhvbKDfvpCSvrGJLsn5iPVhETqVyBg7meoReBYi",
  "key19": "67nYAz2iqci75abdEAR6RzNCFykFTdtvtXkhQZunmQ2WDfAv5fjgdsuANExanqobQMxiJzc3iEH7ydNPmQghxuf8",
  "key20": "5TSJEEQreBCCEQLQv2BGcquxvf2fWwyZEJX3P85DRqyp6amWmT1GdGGwQyd3xHzSAQYbw4mWM6yRDxFp1t2gPQxF",
  "key21": "5VVhNck9VSqydDZhKfXyByKa7LiHDf5bHBN124vbrmwG3dRrFErMYzedZwE99o3G9pmFb97JdSbXMYm1pgVD1RJF",
  "key22": "3rzzBt8fPJVjLzpwHHCkHKeEg1HEGskbzSJWB3QuJrhVjknZcVdxo1KNVRG7MKRiYZRBodAW4yhcgbHTVCZjEkhL",
  "key23": "2k2DogMpRQJjjUgxLHHoPdL7kJsRqmE5gFyyg5oVBAUh2TAkkDrE7gV2EHDUqo9RDGBDgH19UuNj9tdDuwun93kR",
  "key24": "3qoEVZJsAGczxxs4cicac6M2R3VevWQNNbjbjE1PWPvF1SwbuEmoehPZdtvpeU3FLaeaFSkKQeo3HzkfuH9HVgsZ",
  "key25": "4ZJuEpZmWbDRUS7LUvT7ozsLqgddnqMCuaEuKGM9M2sx8aqsCcVykTKSDnPbRBa6GCY3x72mwg9VNgfqPV87Stek",
  "key26": "9nEH1nam7AsdBd1rbyK8hb8Ncv8W2bVbaXa3NhanqK4KR3F1KEJgKwUTTydbUfwBj4Lb6J855TRssJzWxLcPV8q",
  "key27": "5f1xo5XSyz6kHaCmhvcMH9DV83AQ8BLwgiFTAS7NrCt7ch2yYDKWXZQqDfYqow8Map8d8mHej5epR8Sr4hAUbGLt",
  "key28": "3XvQZRgBfoUGdWLKqNDhSNBFMENcbVn1JKf5Y6fK1BCrxTQ7WfVpUKiy7H5M9WRb8MGD7HeFdSVdDwLecTL8umkj",
  "key29": "5M2PYdftyRmrSAJcbtToXsYRyQ9Q98AiGMhnuM2DEjaYvwRzFhrTZ68xQzbVfuGu7WHKqvoVK6UqYSx9G1oRqb5r",
  "key30": "4dtdHjZYYumeY5dfpPHUiLEAw3UEGBp99SomvyHWTH2aNZqWh4ykTvbHs3zjUkeLBZsLt2fKraKCv5SEAMx1LUVT",
  "key31": "kZXr3fRAYQMGYCq39PzJf7S4gEKSCzoJBk6mnAemtWoNZHVpAvGmhAiLHChJBE6xjT2eepWT3kxra4qYi8w1fXL",
  "key32": "HRK6qdFiTm5VWcD5A3T6qMtv5yuDExP7DQyg9A8CPLwZsyzyyfqXwFYRZrtMabGb92HCXKy7fEucJc4GV7ws3Qt",
  "key33": "5A2SFFcjn9zk2hhz3fqxGPHGrgnvUfSA2P2ghix4cGZHVxXbCMKpqcDguCTQwQ9ofGwhKbGynzSUViUz8JYiWgCU",
  "key34": "s8X1e5CjZhgn6TWzYgs2nPNpuYkAWXywmYDhSb1SjJtTeX2U2e5ZPsgCv82GaYC3jRx9banHmFks6xg1BtDcKto",
  "key35": "kGimuaxhS8dX8VTX7fgZAX5STn2mTjoMJs2ADgZjhFYUGH1bAmqjVNw5nEPTMSSmENzZurgWhLGVCESuHHT4mk6",
  "key36": "KAwnrs49JVyAeZVBfsddA4HJDcnJGvnxNgMX51jYE9UUu527QFMFerjn6UfAwqm1DCiWofmPvtyLoPXUJpmxvho",
  "key37": "286PnG69SjVqVSYT3s4RespB9HNFSfyhDivZwGURjQGJtU81xtgYdiMrJNoeK1FR8W7tK4AuhVTtCTbL1LTL9KAh",
  "key38": "ePND913xaGo441cD5PVPEuUPE2C5L2H956RhoCUi9mfipSRPuGP2jvoRwJ46GdwyjZQG1Z6j8VfgyK4a4LboWNZ",
  "key39": "5gVanKtDb6yAw3uLwqrP97dUUqt5wHxZerG1eBMxcna57bGD1q5pCzuFyowk1yYV3oeSc2ZGKM4cAdtnwqfe5Tjw",
  "key40": "3PHqzqtNCS1ghFciPv6VNH1huYSEioRMF3Fjv3uPN7Y8TGCi4QUcF4vDDXzUNRHcDd8E3aQmELEQrFYbqEZcrWex",
  "key41": "5uUz26YFXHzhDpTqsNhqTeTrHCsGUqPXPLF8gsgd9gh2aoBwtPYXXCAGiKmBFQJNrBHSFLSuPedLP7mcrPes5XNJ"
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
