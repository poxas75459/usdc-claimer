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
    "4nKC3eRVj2o2HShQtwH1B25jwp1KMgZFYkX6Md9UzLYf2Va6tcefgmtuAsTZtMRZ5uMwrzGXy7xrFNTtrL7ayg5T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8emExsLuApPPGASBBMeWxv9sdpWPV2jhuUpKTCJRQZuTjPJtzwVLxpHMr2FrxeKUnJoZQUJ7SNCBjPvo8A1eiD",
  "key1": "3pKCSL1RjS3Au6wwwEjDMiUcQwEKraEdDGH7N3F9xcEj6KpJfY2bHizpaBdDtzGvSTkvmSAEHC7DdH1Jd7sqzDZz",
  "key2": "41jKFKPRMRyfjkf1XouR9FoNRumijVsqCStz8ougY8tiNBjRUDPrTFCknN8b2H5evGwkoqhjkaHNjbNNgADGoCws",
  "key3": "4ED9baQ2Yo1HYG7cLDqTZzK4XpB3TaaPXoJvSraM6CiFUmfMFdyhd1bTBBKhEvqdHoi4KyLDqJDLJqqwiiBBLATY",
  "key4": "5Skd9ZmtoykJnqsdenUDFeW8W468Hpd2n6nRVNXMTq1LVMSXNPHNNbuCWdefFBj7kBj5jYTYFmUX3TZhD9xqx5q8",
  "key5": "3CXvXa5DChwPNAZ4crGfzbpRaBbTf2v8jiBjR4xYS6essUcFypgGKQgbdgP1sGRW3p3GU3gMLiwhJA7f4WmMvmp2",
  "key6": "7Gd66QFYWsA5y35Z8hzxWRmBUG6Y4SviWPPuRiUa5iiZYXv3cyhuGN9B2AwdenM3RWwK3WMNmrASa6mQYFtLEpo",
  "key7": "5Wg5LtcJaB2zaVqjDfjp6Bg2md5NhuEKnD2HffZd4zDozhDrTag3EDRKB6FFtmro4zyhWFFauPHm1pNHWKXZgtJm",
  "key8": "Ygn6eDaHcDzkapc6hyS9YNF1yc3nVTRifezZkyspwHeCBXskhNyS1B2X7g22veiQyuasa6TYZYXsYWbFvfWKr6w",
  "key9": "3TWvab5WknGvg914twfFTXkyPDzBnF7aJmZfqPiHDAd7kxBXc4nCbzvvWRWD5D46BmB6FdPjwiN5X7eprdLaqKt2",
  "key10": "5JKJjmY44HsZN4vt2XcQGaeHdzEhUjSggD4jr1JaQqPKoTYjbVDFgmPSH9PZhyBqZcbCBh3voeAX4wzX6fuH6gTc",
  "key11": "2PmjvWHQitnr8mk7Ueb23tXtRTtS8vCEYj1GKmRJBt67KtQxFN7F3L9Ef9XkKd24vQxvhmtanhzXByvy7y4n5b6m",
  "key12": "3JgCwd9ei3y8yPLPar6fLTtrLh3Lo1QLv9LYKy1bPEfM9Yp8N7Kax6XE1hzUGwh5uhBGXFVg535nCqmA33WuCf8",
  "key13": "5Tg3dsRUaPMxcxo3n7mRFt3Bk5rPvvyexg37uxioGwWoHjLCEF2p2P6TFv3DApRR2XHARY4AZ7VJ8n2xFZgCA2TC",
  "key14": "2bRVggaUiyX8PzUT8Qf634Bv6hxKhb5kW7i61aWEk7egDLwgSX3d41sc5yg51NwFxfX24ciNCeVbNvEBFP4YbBtW",
  "key15": "2GZdTyMpDBUGCoZ63Eyx3SP3ZTJ1SeYjCeaD6HGvXykLK2G4J15BPSh6EBE4hENKybQYGVVNFnFjjCn7aUehkpBG",
  "key16": "2Qjh1iP7jkG92iXWR9o2BGiNWUht91M2bnAuHmnvjWfrMxSRNNnsZRzti43LoXPD2i1UGuSHaCw4VJaXdWpxT4Yb",
  "key17": "5RdkiZWUYMj8bC7L393QD9AdgRhR8SYc8RvZ2h4d53VD3CpZNcUy2RPgiRX8J25BbALM9SdLBdDfrsTfXcqdhVTK",
  "key18": "5ShyjQkx2adMZBRmiYGfiEhM2btM29RVLoeZDM37KzBALwpK8hVGSBC4N5zqCAvTr9LCw1bcuQdU7oUgndqEbnnh",
  "key19": "4WB5fi2364WfU1oueRZZXUknmfRbTtEEcVLWnzTGrDy5fz6KaZXUZF9c8N9kHsjw6MSnxnxKQqoszmgmHhP9tWq",
  "key20": "4Af8pxMgQK77vRQbx6qEUKedDm3n6aHewuzuTBFSPLwLSWLk5vTEUCtHkbsXTqsRbmtFay5Roe6yH1Lqf97gabUG",
  "key21": "3Wnjd4SZw7G2maMrRpFmsYNrgai7qXWnDWZXMoDJnPjNaxY65CPpzDo8hTenoJvbCFGgH3qn6ZeitaMTEYJhRhFB",
  "key22": "4sNa6s8fYN5gj4u72Qbqi113EANTbncvPinztu7Z7TJes8iojR4VMxmVaxcJRshQgNbXTW7cPru4mxCVEoB6vLZe",
  "key23": "4dqEmJ18Z3g2UjSzjcugJFbUMnTCqUxmcFQv1DGPooxwzXDX4dhSMtUYyArHa6AmHVAoNtzFGzzsFX3naiYKURpz",
  "key24": "4R5zN1LaYCGXNPrnGVgYEBquLAHFeAdHRpHkfSFh28GAhXrQz6rpAxu5KAWJZz5N7ZmrmUGVWtMxMt13M1NRLTAp",
  "key25": "3Ptm7NB9YsVtMu6vdBRGL8G5pfFgp5Q7Ws5e6rxpnphx81XG6tq1r4ZqCcp6tz9EMmUJHF57DawXgx8gxdQzjDh9",
  "key26": "4gJG4es23XMdhoRpaWecMWEUJnXbcYMDqStQZ1uyVhRRbnWHhF7wKFw9oZckUQAioZAYxzmt8afET4yKz4ypEqpk",
  "key27": "53nDSx9zSyW1FdCKq6nV5NzqDuVz8GTUrUPQNne1nn8Ti6yFTKChi5K8gU74CPravNJHtDQrGc9smyKMZpCsJBjk",
  "key28": "3p4N2NjxaA4rnytYq1zzi4WV6mdSKg1AKZ6AvfQdWRXa36413eHs8oD4m6sptgXKqevkQxAzzd6a5EembSfiabgt",
  "key29": "55G8xnC1HTeeDmUK7vegfnFamHATjoVT3mK9Zt9dWm1gDxzBafH4TotA9aUDoHnVJtSZhpqZtsrm8hKLoYyeiERy",
  "key30": "3t4hC8jyR3tstzCtoNMGAL7FJNQe2Mqhn8eykBUCCrKvaEAcTzwiupGGBSKU5yK7MTDTzrCh1RbgMgGJW7nrokCx",
  "key31": "4Ys1pBPo2F5qxTYtaoor4NBe6sDBAdmvVZvddTubZQHBP31eZiqk7fs8yMHpAtMHmk7tFjfdnJnv9pkCtSFThFUB",
  "key32": "2wiECYdSRS2CcHwJpyAeqVDkFspX8mDxq1pTQdn5tGXuBLLaovCb9QeX5mWHbViSCBdDjcVPHNUnsBG6MS1JvtF",
  "key33": "5SVLjpPoRZrgodW7v4b5MMgsEedbZueW7vxXJg17SQS9CnDgLKC7786jAZuiUXMDsppkPHyBsq6FkNMgF4dys9SW",
  "key34": "5Derf57YUYsSuYRTasgjok6xYPE9vDTUN5ECZJ8N9nNrg7x17gWv21EqngESFJxtwBXX7vVa5JdtKddeEfxYxPmt",
  "key35": "32ruxDtLR92xqV7scAKL7ztFS7bZsR7nRhbhx3e2VbCXDG3k8kvwPfrG2wrk9BijQaAJd4DQFuMcmWDYvAhv6RTB",
  "key36": "2L5MxEuXns4V2iXjx1v2EQkkUiYGt7ZYNrKDwE9vsQYs496ESpBt18VPLToApPy6C7fSR7TfsqJoLqMXcFJWfQ2a"
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
