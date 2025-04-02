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
    "4uDRDAqk3uvCz4cJYRcyjtuJva9XDUhSp79m38K94MoKcMCLGnkAYP4cRdYiqyM1uxcAvaZfdxaJ5aR4dvnFtMf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nkg3jPwCbP47tK6PKK9RPhLuxBypQZ2rs54cNkHg8Ym1QFVHCbefD9rJNxXEfDguY29aKZK8r7DSd95Cj4qDzrR",
  "key1": "3GNPX43kcH86cyqDaLP8QtwwqaURiRgKsw3vCKvSsUijYLRQmzQjVCit23NpkZAyDVU6KrhfdgV4wsFW9va7Co2P",
  "key2": "E6sfYh9NohHqwwHiQapdoZUqmZ8N15UcFoACkySdicKjFY91ZCjxtuuqkzJWWh5z488xcaXuwKYesZmK45zRmf3",
  "key3": "4K5X4Xxhju5VAYF7bbTktvZ2Y7FkL4BpiHYP2q1GPtw319AqX8mWBqaydtd5VvBy4mVYwQgWcyFEXQEm4Vp326rd",
  "key4": "2mtrrsvLmYDwKjAY3NHAybuFcZcyCJeawn9rQ52VRhCkfXyyhMTaVBjYJ51JVknG7Fn47LEWqBL8LET67qBxRTDh",
  "key5": "5zPoTN9Qk8ntT16KLo5oX4mqk9nEDDTk3bgCcxwKRDaGatZuLGnZkqNvZ5c13DKATi3z2be1yqw4Yt5GvBYWTc3q",
  "key6": "58feY6C97ig4C4GjXaEcAoybn9rjHZDQ6bt4p3uw14TGCEYBTbXLZ3ZyUPha9smSFYBFR4MaHWenH849gFQ4xfM2",
  "key7": "5MmjZrmy2dHVQ8iav3X7AfaRNBWCHNJpaiDmQBpdDkxM2tp1DBYbUeLL4jjXK6Kxe1VRzm1SAiuZY41Bp2aUs5e7",
  "key8": "4A98CfgDuSDnE47gMXf5RWasWsugniME3Q2vvipvHDekuDdfjnvg7EJHnjTEfXVqy3Y8qkAQFXXEUtd7EdtNpjFf",
  "key9": "hFkrY8sVyLady6MFsb6RB5TweQADkdpCTndcEusGh35MEzeAoRh5mAMeiMhV4BLpH6FL6GNa2xtEfN8skaLLGBQ",
  "key10": "4mrDEpSr1obYCJFsJSxuzJqDWYdTViibB28EBaDVd1c7j1jqMutYhVSkdFHwxYfSRoya9gjXRfJNswrGLUBivD9G",
  "key11": "2wH8gHBNjdXr9jnCdVfqfULqYveXvuUiWrmor9BWC5TiHWUE2XcLDFKgvPewEZduzpejBiRGyu5XUCaMLtXh6hKU",
  "key12": "3jMsSfojgoxottMQg27kmfu8sV3aPUVcAhH3Pns4MkeW84ydBFuoFAnXWEKqPr1uqj4UaicfxuFmsCdbKw2AVF6Z",
  "key13": "3uNZER3pZVif62YWPd2uPa1VNfYpGFY74A7WDE4pgd5mgStqrSs3puBLVFcRygvnofaDQJEJxbSwonQZyA81zSDa",
  "key14": "2pd5rVXMqhfTNtAitsje5myJ6BymHEwSpzieDD3rrPVytLGQx2vBNEUFhCCUPLv9k1h2auHRSzD93CPkRX2SFPTk",
  "key15": "2zqGMFPGicxpsTyxAK8fjvvM7rnXcPUeJRFBqDrhA1V21qDVVLKaajP2e7DP2EHvMJxQiy1MNcCJ1K1LxsAHwGre",
  "key16": "3NyxreSVmGWfw1MsneFXVYdxszyNiK45H4nvwmH4sZo8U8BD7V6SWds3LAfJbfVUfNnpX64dvRrWECrpYZsrXPsX",
  "key17": "3yu2mcUT5QpR3f8AgenJDWCe8fsMzWCtvyXZKsbCkidaG1yeW8ZvJdaFUQL4yp1KggJuiDx6rMj18jWhC29B3g49",
  "key18": "5twB3kALFoxnNkWyz2W3tnUY6bRX3Yt3oob5VoBziK6rNDQuzciZa4YZ5nffA4LVyy2j4C5do5dVzHxsUxG8xm6Y",
  "key19": "4n6UHZh6C3uMdyvyJsKCJKKEew3EkGi34XxJYKXed2LqhU2jRNxhr5F7DKAK5xiWpZq1q47XR42zRQRUK2D2UKXH",
  "key20": "3nnTgUNcSNLDdDfdoU7rij1vRD9BTysLyKnzwmotzLsKb5mTeiPfR95ZBbdnSBmNgyPzrmPzgpoCXnALQBrX8giP",
  "key21": "3tWpWjRP99xpyGLvoDNk2wmThs7EsJsNABUXb1RZzeaQ4KDycXwMiFrpgzVzy2eE2MweHZGiFenePB36ag6DAFtk",
  "key22": "3NjQzT2jV3e4usN5WSVbCxTqBWzx3TVjoJYew2L8rS8jbAsX8FFz7nS5yrkAwhKBYgjzYAYzavhQSf2oaH7Y2MZJ",
  "key23": "2pumgHe8oCjidWUdc7myG898jw7md9p24nYJdsaG98Rcz4L4bDRXjMt7dCNPnfNNJMnbytS8xmdF33BRYKbiaw8Z",
  "key24": "FE63Y19jwN5FvaqY6YiWyD3t4ELHtCcTKeQqVyWNJPu4tjZzaBPwZCe1yJarb2grmWv4sWAc2jH8L3hTQcABBfx",
  "key25": "ijcVentpVzxLmMd7Mg8gQGVYcqQGPgv5LPHfgXSWbwzdQUD3fZxhhXWDGzKrWmMJn3SmVJGW3Yh3pMjDRRnygB4",
  "key26": "64c6DNj6XV4cvrSffX3gC2ci9oYpXMga85eVqYqBVsATPzC4fpPzRb7HYqQSdL5KHDHuub5J6mbyoeZyWobvjoW",
  "key27": "54XR21xXZXMvMTb1WbB3uPKZKdhXiVU63SVXsUxVWtJDu2PmFKvR1tFfsq5tfQewe2AJhRjb6nQjsncuimwqpJgn",
  "key28": "wN7Z9GJUzgQxZWQ6h7oNM7q4h793kVGnw9ErvsjRXPbS4FbfigJ4Y4TkyZNKFgv8VVGyoEkeq19tG2jXg2Sqkfm",
  "key29": "3e8eFUS5uMezaSVDEJ3Qcvy4PF3XgA3ykjtziD8Gp6onhGN2g89VDL7cdVq4bY3yZtH1K5UXC5TSLeb9BRtHtGbM",
  "key30": "55ksYvejM89R98pYDPiod36ucGoFH7ovJ2gW2tN5RGxPV3AM6P8zkSTbcztkKyHkD1GPBUiCpA5wu2n1GSbrkFJd",
  "key31": "2jPjf876FZnjN4KugUcRgZeBSqPuAFQpFHwc8TpfBdn34TQz4DfK4dujDYUGmwuhCfCCj2jPcSWnRXijUroH4rVa",
  "key32": "UEHRK6snV1m8PLJvib9cSf5SVAc6hjzCGmE172nkp7kiMMtUY7STa9W2LchqnxDnGGEe7j7PxZdtUzkLa1DDhjn",
  "key33": "d1ehpH5fBHqvggVguVtLEEVM9c1hwFPHLaJsZCXYv2D4PtibS1dyvSq7MckSXEtuSkiZkyRDophR5G3GYT5Zisp",
  "key34": "26KuYpVDADLdBigVqTkfTHSmFBWd1PsAoraG2sqSXFQXVW9W3Dc7C6HsLq9JkWb6NqY73gzn7XYmodNyVSdDXzcE",
  "key35": "guaNxpyDuibkGvxQDVDUbuMLCzGJF17yY2yG5tY1JkoWapuf9nV3AWE9rvATaVP9ZgU6ETXvqUaYAN8AsbrZYoH",
  "key36": "3Fgghp9HHcPhnHi2LsGK6HqfHRczKjgTS1dDUNmy7HuFcDAXaMHVz2uZYHqNW8Udf26x6SJeLUeJMpAMd2YrvRwc",
  "key37": "4o6U8aV2jviraTTkGWj8XHdiQoPV8iaRZNaGHkrbivjREVeAK92dchxP4d1jP5Bj7BnaacGFe69iCtuBwxKpaEa",
  "key38": "mNNaPET4E7BDCammo3rHTtEnaV3UzgFkfn1au4pAc8fb6q83k8y3Btypgu9AdtjppPyf9Ka9B38DQEwxF4mwoyJ"
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
