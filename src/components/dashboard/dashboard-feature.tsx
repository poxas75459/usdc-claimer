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
    "3gLM1UiAbbX5TmeYohTBa9cMwvMQRwbzKQ3sWPEjyA4BYDJvbz2Jh5Px8Mg7bqig4NyHomcdPHXQY84nv9PaAWN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lq7Db2xpYc6j4y2YDf7XLwrKv3dT9PZ6upAq2V2ciRyT9q47X7zDDDbGQxRxqJkJB2uqqay5cVcuySPXLy2wFyG",
  "key1": "4YECMgjiMLzFhFf3AhWDcM99fWpMm2R2wgRJRgXFRYD48zyf6LkEQA1AgvBYHgFC9t8MW7XTq5QztCTciNf7MXBx",
  "key2": "24zsgerfbiNxD5RQXhYPLLDBR7Hv6wJxX28EJXG1KrnaCTBaDGmnL84YCBrMt8K4hrWvwZSrtqzUtsnuproy37WD",
  "key3": "2nX67g5VzkoNmJdnpRrsx67T9r7RDuG7EEg7cimhwVvhYF9Hfm6tGjy3XQLU1uSzHhfprMnWbAEsHKGYfkvg1kAb",
  "key4": "2xgfEvYWtfj6piJRuPjyA3dZi51j4kAGR1zGE6Jw2psMCJXFXL6YMDDezGdhLhYgF8EUV287jheb9hHZrfptELUg",
  "key5": "5PQ95MrweckkvdGMR7SJeW59yLEVSZqLSqYaELkEjV6QLFteF5mufzTFEJsegftTtr2Zqp6x9SwhXpFbkwt9ZZqA",
  "key6": "4cuDJ771m2ssxjUAx6LdjHYFcPYykDMXdVY3FFmxuSeBxfXN7N68n7BTpcgKwuegdVRqqYQgeQpB7sjUx7YKuys7",
  "key7": "411jYr1HTw7TQpKcZqAEdixQTttNXA5mCogDL6rvNxuvjR3q73cdDH3S13nZPQ9jBFS8B2YuyysXBwSmmCqjQcNS",
  "key8": "5UxpqUXmdo6KFcAPKkYAVRh3xK2CdicnG1w1Xr21FY6qHGSZDkFqZ1Z4rFUWEGLSAGyDZbzxorbhtnN4pFoFrgnb",
  "key9": "2cmqHG4LgQdpLtF8sFtjBLyUFHPbjHdBT7tnEbkdPy2dV3cf8YjQEhbaSZXacq8tWQF5CWU365D19fQ1adsVPhkv",
  "key10": "2mpLugMyhrH4tNftnxYKx15y1VY42xM3RERM3NL5QDYH8Cv8nFJ4fxfXvMCY2uSx8dkU2bCj1eTAKaPhVmygaK5E",
  "key11": "2XrM3V3GnKLEQj5uchVQYvJcW5TTRD5TvGrKwZagtH9WuZeGYYiCN77vK1XFWHL7Bku59jxkvx1oB9ywGjZ6UAiG",
  "key12": "33J81v9Fyc9dotzxSUDu8fd39izFAcUDnvQ6jtCd6FCPTcTcqSwwQN7TMwKRC9UDb9zA4YjX6BPZjPvBmtq9g1X8",
  "key13": "2ASGJGAN1Am1QX4Fz8padqLk31bwjt34e6LF3gwiqXcJMAydn2rahRk6jN4a4pZx1bZRU4UqV7DVus2riRzUemTC",
  "key14": "3wKVtknJz1pXjntruyr3zsQ7H8q14LWcx2ExATf7jUN98UBg6zWpc6kie8HvuMDnEKYNzYUNwuxpQcTAseC8Wmvt",
  "key15": "3WR98WCi9X2mWVYffQ14E9k2yfqVDA2bP9eTNybERQN9DSjjpXHhEzwjqY27Cti276ykDS7ojKybvBkCt866bzN4",
  "key16": "49v78KVcQuCLUJky9SpFaK9oy6AUh5pzFbpRkpEawN6ranh47KdRLg46sbUcmh1KmJfTHgrz5vaPneX7HfNAPU9G",
  "key17": "65Esa9o9rVJ1t6qSELpuSLzrou7bFrhoNkH7e8xpda2VcR8nTxLJVgcqZXzWFUym4aZwfDzsNJJpikJ1g9hybqXP",
  "key18": "3PZNb8oZpDqJYAqGMdygFx726fcRBen59gNxdWiEz37Xw4856VBdDR9V6ZThibvTepkATPnBK798JpNkTzPihR3H",
  "key19": "3U2KSv4ppQr8hQguG7e2gWrQoh14XjgJzsftqVRPjrMAuj8okyoFLCWFwd6BLRHCiseLVHTjEQSZgHPoxZKU3wQY",
  "key20": "38TsBxHNcbo2VoxiDQF4ycNQiw519BpwE6Bj6uxNah8DbtAVRqZK1na8u8VozUErxt1nS2qn5z1AkQ5GTcg3DPTK",
  "key21": "2afKLc4B9kvjHjbcLs2bx2h8UA9cTp2P9ExoN8ySSJ8wQc9VCJZgYZFgmamZGVAnquE97aHcnpYFhLKWQ3PH1uit",
  "key22": "579EBQiLJZzAvZbYuqANWf4JAmahhbFcL9DzNE2hdyob2XK4F59V4xCXMUzggcJmVQfKHdrdw9G3Pe5PsCei5osh",
  "key23": "3RaHiUAQ5JXJui7iBMqSnaEu7g6pbUBuAccZppQY2wD4cVex6e8idnagvyWWk47nbWUbc1gNNAMm4erf1B7TAJa1",
  "key24": "434UN9oF5AsxzyZYvjXBsWhXx1tNnR5WakWKB2Jnw76BU1i4qqJCsFNPdcNiXGyvBvGfMhEu2ZRCeCVBLR7ZFYjC",
  "key25": "2ZZiv72FZ57ng6VLM6mpWfy7VGWHZ53QhkssqbFSuRpeP7biCNyU3MkYZnLs3Pr7BNY4c2aR4xKczVHUZWH7q7rh",
  "key26": "3LnCVyQv4xQYER3t1zmjZz6WfM7MLcQiFhN4Fz5crnMGPhWMtTKbyKmKk8zctAdPVSEFeyCUJD2sM2pb1Pi9rtnX",
  "key27": "5ZQDf3gsvE7afDD8EGhqEwJ9fidK1hefiQVLpW3MKyxtTSi8hPrNABgUYstZqKBs6k2jmniYWqNFhVRGUaj5hEAV",
  "key28": "2dqC4QH2GGxZD3KCRyXEJ6jwpYxYrvzjFnXHwNVrvbTj2cVhDjUTkVMHzipLa1S6yPYapyWcB8fTEU6fNGq12SaN",
  "key29": "ZcBkc1bNkCwYaP5iiwJngoGBTDXq5AEWkj19myYx3GPrRmLosTKUW2kZATCt8jZBz7x2iLJXGgyB3mKejNoguZH",
  "key30": "23CpG5Q7BDkX2Nd1iocSfdtTo2Cg3DeNGs9GD163pb2KT3LzcEvna6b8WGyT7HgYHFWE7ypyMycdLh3wLhPkEkqS",
  "key31": "2ZiJWnGFHCMTMrSEwnQ29ARdRFuzxwZgHuevk7Foiz6EeTYMVUVLDESdT6z2CAx9Pi4fLKhQP5xm732SkW79Ect2",
  "key32": "VeqZAoGNdyVLdCAVrJZCMbwtWQrRaWCkSPfEmhwyhNhEukPZDXhtrnYVp6vonHBxzimRgEz5T4oZkLN1HjHQzkD",
  "key33": "5AAjk9c7ywybyPTchLu2E1nkshm6FSvWBJBmLiXTbYohAi9uQPASEn6WrLtz2jWiiNzho475nKWZnzQeeQ3ybDrv",
  "key34": "29BfTZKkWLpZXCrJduusoYh7pW9MQeLwipJoqq8MPMCWDYtQ73HiNEfBRT2dfPXeK1wtsRzWDoU6pYRd2BrYPaSZ",
  "key35": "36nGkkdqELdYo8zHzHvoh48WwjJ6dqg9YCRSFvGmEVWvqQ6RBCoYdPr1NRDBJSbQdJJZxg8mpUcXZMJG61DRYzUH",
  "key36": "2GMMBuSvnBp44AS4kC7W4fu6KYRVheFz25r4QajhK8ionZU44m1Kuh9t1KeUgiQbXwLw5qBym3SCuGGV6bbx8x1n",
  "key37": "7PxMaA3Qeo73ZJvaN2ZQdLMGCgEwLazRJ2snhZLXJhT8Ljgxq71AsBHCg4UB2uG9faofMrrTYPT55PBxfKtvog3",
  "key38": "53vSHQitJ4GW7kADRthgGSh299avB2FvicMijMojV1REcYjgaRGU6rcyu81LiFswWVBpzHtyuUf2AUrjXDZA2ZqL"
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
