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
    "3mq5fQFzNEmSyEDfKPqtdZPkeghsvaHZaDJs2eydoQsvunsaU4ZPWjyAQNCeZXssJNyMwEwqdE4b3zCaWjQM7ULk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16NG7a78PnTXArvARGnUsF4VRagGujrWcY2PXdjTnngRDpuNzRRRxn1nBDGyrnJDknD6EsVvw7Zf5hPxHyi183y",
  "key1": "26CYWR5qXiA1MDoaTACKjtfeEdBLcs7kfnaJ5wLgSdYDxvHApMQvADauf7kU9cRfpKcB5rV4L3uLAaDbh8YpkXM5",
  "key2": "5vqvM1rGREfe3PEzJxPHPV4ZuUC89KNF7jbnzeV642RDqPSanU477ULN3zvod986x3nex8qDvS5JRVN7rUczLWkw",
  "key3": "FZ27qnsxcEiPZqHesNn9hnvNXzMMdH1qcu5MnZ3WEoYdNrnQqPDwRGLXqcLv1KSVngbRFR6WeBGNyJ4BaCrjmpG",
  "key4": "39Z1kFQ4rLLxGqsVugpfuGd8nToNJSVyEqBALXQeGM4NSNzRJDAnPbRh5kCtk7CNRbYcMWX3f87Azsm6qrW71ejk",
  "key5": "54SDJde73x172ggFT9hrkChGPWCUXYpgYS3Yd6BFJvLkaCMjiqcYiYhYmEaNu6XDQKaf5imKVPZyKZZzxviiyM5p",
  "key6": "5mhpV5JmWVbYen9Cc5waUm27R7AHJBdn7vqQTb4F3JbEYZ94Qvr7R3pGt2c9KSqeHqMeQSZ2FSKzEecsktfANshD",
  "key7": "43VayK9gNeziC6rmvFniti7tskpuiiFidSmCEJzbeDH9RzRAUNrGDjQCsdpWEoaXKytYMCYthmaFSdG76gDyEFkW",
  "key8": "42soCQ8zvhP5MtZYtJNmkSMMeikUgNi3zvmbNy3gEvtTCgJyB4BauNaCBhZpuBGXX1WQyJBQmFuXZRwK8VbrE8Po",
  "key9": "3bArsxJPtwcK96jokvgbDDXUBtr1D76j7iiGyVex5uZGXNQi4ZcC58KuWNyvHX2UK6MWuGJX75fZV8oJE5nHA1e4",
  "key10": "61zXv497AGNQFo2T9c1tHgV9hWeKrekT5XMe3YwLqEEwqt9syeBSM4Fmuy25fb7X6m2fJwMTerHHV8N8s2jc2FiK",
  "key11": "3ib1mugoQgHtFKKcVXZ8qB954zYUcteT4RBixdDZc2Ld7LZH1XLiLA3s6eshB5zfPRvuC9Jp6HMgCxpbG7e6ZCb3",
  "key12": "5jDAcBV99GxzdrVo4ENyp9PMKvdGTabbQ6pxdBUxMF1MpQK9cztVRscJaQceSENGjsV2pR85qyhcES5sryZ4tmdL",
  "key13": "5Uj7DAN1ReCYPykVfvsAz5dbfaS2s9t6j7Pfobc3niMoAxVaNSXpAg6n8WpSzRcx84iVojBkouH2pq9ha252woDK",
  "key14": "3MAJjtTd8Xr2DJ3rtmLzfinqZUsvgih4vu6iC9E7KVdUabXTEZHJXPZrWCJPQit2DBGC5eDuvjWH8P5fCZiYYdjD",
  "key15": "3kdG4n6bEbJnn71b6xFxesHpfVKpXeKHu6FiZRVmHT1k7Ed8hphExJkUpuKXnEJNVua7BRqtvx7VyfZxNk5NGaEk",
  "key16": "3AK2mpqzo857H5DVeUwbb1y38WnCDmj8Hg7yhCDEbmjk5Tk4qmPWPCX4kSNaDCR6fLJZNxycCAY1crPRBgNejUn7",
  "key17": "3cmE3toaj61a1fnpCdZgv5kt6kaJw8iU5szgtJnLAg82v4ibWJQmpVJReTFNfgY22xRPmquer395EznvHDf7ngoE",
  "key18": "LotnyTi8swmmv3v4XrNBgWtHhpyk3t25AC8eKwWRHbAVJKwA1TrTBPNuiBCpKzmnQyp3uwzZDhtWhaFrYk2CQFy",
  "key19": "4Cx8xgZP32m6js9xm6Eg9PN7bxCHvgRGkrhUb5VdEzRrbQatuEdSvEEzc2cnr3XfbxkDauZ3AqGuHY8FJKfCjmLR",
  "key20": "2kHoUS5HxJYCuVnb32jxSXn5jWf71MFwXBeUrvUS2trsSdHQsuzFa3frxi3erprw8S8ojh3C3iDuotkoQqNMW8Qu",
  "key21": "3zmLL9PJ4qHv2XUTdHvEbBpLbRoAMmY7DHtoHbhuUXwPVwmyQAUCb6c6gyGKLqU6XXav2FspFxzugKqRkFdw8QUK",
  "key22": "25bgW9SuFQBZDovSbeqUQqEN6K1LUMCNVgwGLchwBQWw5F3AamqEq8gAVqSMC8cGrKvbhEKYsfqMvYzQjLcprNU1",
  "key23": "5k5VvXGxn8pj4o18e3wZVFrNAzinoth6iXbfoXwWF5YhnyGARYy1kKcF1keh82iA2Rs2evgZfVUTN61rVZBnpHhi",
  "key24": "2NEK2Eh1Dxmv5XKXpihfHe2q8mpseh3xqfJaVeqmoimLwyPCh4y8KZx3vxE2MciWr9YswhjfjCJzyHqAwpDyDbHN",
  "key25": "3Csp9fDHgbCvyg8NGKUduyL3xUoKDix1BArMK2pQvbwsk4SJ3dkPFa8a3L9Pa5JXze97MXrnQmhKgoJ6UcgsN1V4",
  "key26": "3szVX7BbAxRN2amivZAF98mnixmQZLYeGSktnNKCaJTYYg1fkmDZatx16zfCeQZS4btj8Eg8UAdYAfJKw1Y1i6Vh",
  "key27": "4rDXxZEEaDkn3vKJcEGjGXJmiYzNNj6buvDgBPzQbuCiXuXgNh7QVCzD1XHWPmp3aQEwx9EvRbz6226fENmkKCFf",
  "key28": "2AEfzsjrfkWvQtbcYcGNeatVVE3jbyXCFcho4CmosAVxbioM3xndY9FLkFAm5FCLkMDQ56WfBic1DsPJQGdEcBoa",
  "key29": "5ZLzPdkBJCevXyAFp8Ciii7b5G6nZQuuaG6ZfuXd5NLP3nVXMWUtmPVePb1ME7GRpjM5qHzneppZsFUfR2rVAA1E",
  "key30": "4ddazcq84DCMjZAcMRFKWd5AZ96vccUoF9ZKL3uYZBGQjeoVA8LntztFBqWmkooyTvPehVGug1t12sg7kFUbjgYE",
  "key31": "5EmWDbvwNhKG2Joeo3bkSDKxoQedZbZnZKepBNzh3QZQim1eKT35NzVQadaQVHhgYEpR4GF5Y7SiAoKnAwiDydG7",
  "key32": "2M1txEb25rA8ZGLN29FtJi9Z1noFTVZZMPHD3nFiq4MdQDea2wuqUnGjmwHMNTfF5dusBNTkLHDx6f65i46mr38k",
  "key33": "525WPW16cCkALnVbnUdJfTYgMjgkcrEXUUsrn51vVhhuW63YLcuXFVLBywJ9FG3fC26yPNRU3tq5yayemCFWgK4H",
  "key34": "56qeGkSF68omqhEFXU5kuaenA7rq4HxNQi5SqQStjrNEoypHwF1bm3E9KzHiT4Xo7jRpyyTuwZuLWtNdAwjiNwt8",
  "key35": "3bjkTzcrLSJGgj2dBqWyVMdyMAYHBUgo9oERSUuDoMh6iiMsyBXJSwr1DByAd26a5CMSiEaBNdycNahcGEYDFX1R",
  "key36": "38LxKmFaJ7uHCyWxSyMWjyvSTEseSQ54r532ZUVckfYyDBrx4LcL7m1oXx4wXb7FnNe43qd3dn5JPrWsQr9JsRRH",
  "key37": "3r3ghJmUzt7cEF8UEfqV5g7LSS7Xpi46YFkDTyyZs2GEGLhzjiR2hs9MHUBiHBmx3Q6JwRxhGoFwjeMCbcFg11E7",
  "key38": "2eCZ5ByrpskaVTrP9XKdHZE1gZjQZ5kFDPcoboK3ucjwtSXin2a9EaWYhBYwxTnJLCEwcVR42xDrAFg7EaQb3L93",
  "key39": "4dhC6LPXCMGoe63TeNcK4gBvXNuw9xkPQehhmkuMV8R6KQVdiAactzREqspQ9ByAdQhHp71AQ8wLhirEkndUfn8u",
  "key40": "Wq3E8g8DsF3JtdayAtoE7WEy5GezE924D3AvWJgiuWqFuDqNVv3YXWLbxpDjfLJBjr65zgdDiApoDd8SotDt57g",
  "key41": "2gQRRZFPDnvuKH8MXw5WWU6NuUwdRu1Qa81EhD98CYw4NffTAJKkgZ9FFhf91EBx5A7YyoEuXUXaphQ4HzQ2JfcP",
  "key42": "5L3axeA3nFZrztSQWkd1Sg9tWA1aCoSYNyqovkSdb7NCWUHpzRAgXNgGRUHknQW3u59e9XZnyCcGpGGb7WBiTA5B",
  "key43": "gmrG4LRCibCeEJwn5gvSwYRfbX5uJrNyrmRpb2vet3nhWxZ89k986SkLpBLU5rE2VWJZmyX4FXPpkp5AhtqaD4H",
  "key44": "3f2qFpVEimeHXE4bDUP5m3GNa6qLsiC6QZf4L38AhbLDLS95KQqsiEffbHxguW7jY71awtWywoGmT7f379LG27na",
  "key45": "Bcg3YyFLGMTuAuY218mKpJhmbTDNyV5UP2JvP8prKYwupGSynjJWAAkAvYwZqzEqE77w6ECB4b6QZNp1UYtfdFG",
  "key46": "2bzUKd2nWtfVc66CDEWeDYDF7zy5gsh7cTWczWGVZgVSQaZaSY3v2J6dpX5ohWWZnYGiEh9JXUBypawJeRz1HbH4"
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
