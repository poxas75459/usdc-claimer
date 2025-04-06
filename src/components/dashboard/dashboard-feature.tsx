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
    "8jBQ6vN6HT9nXnqTVDBQTdq6XN1WarmTjCWCZjL7E2DrLbk78KBoz7S5M4Y813HKA5YxAgtwARbeBpWmreDWWMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XugpP6Dv91tD2dN5vBcVFXhQjek69M8AohTeJpNhyWoHDAwYFvjP75oaMvs1mapYSZKMDziVFrzyPkPifvkMNgN",
  "key1": "3ZpGyBvaozyL7yan5bik1SbiCGmTYZXdi1uCNTFw8rHaTHZueShQ32dNnvKMTFnr21oZejBtUBzvhiGs4CtbR9VL",
  "key2": "5LvASvEWqjFs8bkT1h1VRcDezfbpjv4YhMDgpgbcGXUoPsFkDNpz6UDEtPztzhAmpoQGpsaTp7F5zEHCg44evVHu",
  "key3": "5Fbpr3WWHZGWKFRzoNtCtFvpmJYy9SwWEpYdimzgVZQoyimxoZKdnEEXpoc73KTKPEVsHSyjN3oPcu8FGT1Bhetg",
  "key4": "JvLgMr1rcXd6vaaT35THLz1mkkXfBfgkzz63PUpJKrNEUD6vxdfHXhEFjbtDYgXVEd8dbGvo1pWAF9Rmtexj9pz",
  "key5": "3SkPcS7hixRxWSgiuCd9dkURmygxNgRUf98ksn27sqZv7rdQucTZwLyza18t2TYrUjpAiYoKwkbLrAheJdyTxSxQ",
  "key6": "5MaozwFm9diGJDCSG5Z7Bq6XSo16MmBCfn84jHctj4En3RaHnpFxVyPzis92Nn5R9NgtLgCb69Ek5mpnebC3R6hZ",
  "key7": "3RfaysiQc7w5Xocn5eWo5VRyj72A4C9GR6jfFnnsVWkdw65bp4e2JPYnad9LKZSU2h6f341KdYTao5yR3EwCHTJi",
  "key8": "2Xj7VLtsj1WB3sPyyEENFXwNAg5CvhQQHRf9fJB35W36u7qmw1cPXGckQHfUjqLouXKXkUv9tPCXMUMBzT9oT497",
  "key9": "467cGTfm7JhoMe2ScFnYGCFoLAAM2a5KBHqnHdKAasFy1sXSame8mnhVDHeX7c44KXa1e7cFusz13csbejn8giRY",
  "key10": "2mgPP8LZqpuLWQTBNyhEpvnBxA8rRzqscotUZwtwJtYZWs9J9r4LBZZ2YWAfPRTagXYaiDrjpzsRQoGYEU7doArU",
  "key11": "5xEaudo8f8X6NN6XHs3bZC1FdvftbY1tmTP8ajRehTZ3b1orcaQYHfpud8aMPZYTKcw6WfmdZS4yW7hEZt3cZ2gy",
  "key12": "WcjG9hyY527bxbogEJnHAgFXMEu98DQY3c2q7SSiMcAP3MVr6tiEWz1LPNhNvASKWJNsco4G8obcgnRgZ8LCmvi",
  "key13": "4HeTCg59ohXXGG5tSgd3H5tLgF1TqHvb4dn4ApyWJYEfsz3syczrWRWkStHRBXrHLStpqvFeKWjy7wLjU5a6Z1b9",
  "key14": "55GK4bFgqreC2tXXgKtuVB8r18SZiuR2Wg2EuyEpfvoEwVVnKbJhQdgoMYVXr2X8jGiEkyfiFdGGcWs1SGsRvDE6",
  "key15": "2du23GDhcNkxrmMGmeLAUPK1eRWEBMQPB8A6vdDpCDU9czwATeBazPkV6mBXhxvxLWbtkKti4bzQrQNdVZzG3SEg",
  "key16": "P2kh5iB1paUhvzKesXPXRtFqcu7ATe4zF8UiMWqSGk3JFmgW8sLyXVEgd8SCA2MQ8CXhJupKQ7Lat6UB3sd6tTu",
  "key17": "4uNbVL5dv6RrBWY3vu6dC6AFFJo4Hg4puCh52Zqk9hP9Dh2UAy9uhpQGQ1oMVtxN3Er8pJv3nsQKUT3thwmeaYPj",
  "key18": "5MVWQDVnsNF1NMegnsZ5A7RPZgSqfSDqaM1TqDCMNhZECU4sq3zWjCVNd3J2HyFHMB7Ge1mZS21n5W5i5fDNoLpb",
  "key19": "4MP6ZAfSsLnq3cUdCVtHipCcJjFYVz3SeLbXSapcaQjK4DgNZQac2Wq4RX8ERFWadJvx3TfmkuBuyQhvLNULxWYb",
  "key20": "jZzhZcX9AooiMTuPZbtGeMcLtczzc44n7FQzikqgQYXohAMgZ6WR5SBZbqBsgagSqLNZK5EffBZtA2dMep9ng8x",
  "key21": "siYcQ6TDcpE8m4FuzMUtebX4PxoCPMJtKqG4MdK7h8QTfsJ6h4ZEKN58LA8QZLcKv5Aec1k3M5GG7Sq5BQ5vmvg",
  "key22": "3QNtgpaToZZMZrJ2twNgJoPN2FjUb3PLcKqb1aEZc2wiszhZspjAAweUsQfRvctiuYcDEvdvKFHJ8ziyEBFNgH1D",
  "key23": "HrcPb12hjMvL6LwKD5qKp2m9uGWeAGYKyqMMcxs3huaBjaReybkmygERbTSHBzmTWxQkkwTMgidZZ8TRTWby16b",
  "key24": "Djers3fTnD7fyNU4U6tnU8YXgnx1r4EMWRZ6kFauirWmU8W69LjB7Q91KyfaTAgXKY8ZB7Ag1x3r1dF7Krv7RK2",
  "key25": "3TYfAKAS3MLU4YmhuttcH27zkPqo2b3eEL9asz8KYeJWmWCX9o3QqLwWVpVPQZtzndh4b2Gsc7ao6GzBJdAPb1sZ",
  "key26": "3ALQU8MmVChuEg2ek4GjQyqfYmwZAVSvSnpW5APEsBntc7Xbs3LCZh8fibLqnx1dm15sUfX3JT7ZJNUX9Cg5h6Rj",
  "key27": "5a3A5dewsxeoPm3HyiCo3mCipqC9Qynz4Lyu7iYgcqESbt9RvA6yCnwNKhrPo3guaFgWy3cU6vPhESKmiiAipXy1",
  "key28": "2KWgzyAsp5DUYSMdhyReZQzrpiyuP4M9XJ7uExPChiw7Epk2FHhwrBCVZC6dxhaHTLy7qe9ejfKGJbXn1wYhF1EM",
  "key29": "5qJYMvTj8sCTsWjpeyBBMyt9F4qQrpupjio4sttQTkwDCfAnefj3uWkx96F1LQogEBmvypoXYUq5HptPxNGJBQY8",
  "key30": "3sbkARugxWvJQdSXuemNhgh54eWBJ2n1Gj6NArixQPaapg4qeYMehJnQKdqYW1yTN92zZ5icPTq1ujJxbnoZzuxz",
  "key31": "28PUmU7LFsEBJamN3yJzY7opsHWy6deUn4TRoqYzfmnWJ8uVJev32jgrjkfFN7Y9x6CLhbpkinjLPbbe9sFXkGwJ",
  "key32": "5c8sp7k5FsEKQFRPpqg9yUHgJeEWsmakPZE5KpVny54WDZxCMgZgBakwC899bM2YUAiA8q3JhQKzwJ3Wgws8L28",
  "key33": "3j4gRwrs9wDW96pXE4XTz1ht1BDHeFrzTN2P3UXmeoy9Ud8sF5idh3PDs2L6TMp3HGbzoxe8XksoYbNvzXwcRDKo",
  "key34": "qRKn8uT1rupE4xEjxxgsDdnzMmgAkvyaDde75ypYFsuZjcW8DZM1pAJfkZpe9uQtFTh1brXof88ajyeePWYDPW1",
  "key35": "pDTLvCCq148Tcr7HiP9tqq7CzrgrD79i8ubYL7bLHYK6SmD574LATpfbGUqBX8e5jLc4jwbAMeniDjCJvV4WnAA",
  "key36": "G2w1cRF5AbeJhKFmaFHc3nAiFp165bL8c9LtxPjeNiM7g9byCxxotgmbwxBfh2sDYBY9QhJgYeBhPwjWz1ZNTgg",
  "key37": "3HtSEutpoHREj8B7FCdaEu7ZZgmANfuEdwMDqJc8o2wxHkQKjsmPYRrmJtXhGogrpxf7WJngSSnSWJhdSknr4eME",
  "key38": "5qgsdCeSbBeb3mgnLikSM5NWdYoB1k9ytdtHfEZwSU67QC6XBCoKkhv7FcJerLfqGU7NAivzjN59TQJFKG9jJLWB",
  "key39": "58STorhUhtPt6dwnTzQfZZ1LPkimyQdDB4iUhdE61xGQR2Tg2mtz9QrnWSGZHGTFFjiyp4cYGfB4w2seN7GDXXcZ",
  "key40": "3BHCm9ezxuKGBGhTxxCBmuzi69imaQyHqj1eM1YqPDdnjp5R1NkQxBZjsh3kAfjzjtAw8qVPk6apXVxXskEK3aRy",
  "key41": "eZX3JsufjVjtwMqEYuKpb2oRZCFxrEX1c4aWZdZjM52JXV4U3s6Y3DJZFvFBtQHJknCwXHH3kmT4VqcueSFYNLv",
  "key42": "cGpESsKXRk4vDtLaccJ1EmMso2aGm27w1jqfZCP7zQMYwtmVibT5hAFyTEsUwRh5bF1aZrwqVentEsQyKiyDt2b",
  "key43": "3TYygpVUppjSoXXPjtKNBD94BPuoLiUfzjVQFPY7w1EXbcw8Bg1ezMEf9d3emRSa9KhNEpRBkHvKRVjMfoqu4iXi",
  "key44": "4LAxrDy28SMtRfbjXdYfhZjT2suTm5V3zocA4UszmJHDCJykbVhUT7MyKi6du1gN5CLXKjceU9wqy39cSSc7upzh",
  "key45": "5bMjPE9WGPtfqreXGdVZYW9LMLky41MLbxSpvWrc2k9HFkiPNjNNg5uYWLX2uyzDQZBRcxBDsNzmRNLGPjJ8aBT6"
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
