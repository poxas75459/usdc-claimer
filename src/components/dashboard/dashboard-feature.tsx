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
    "2ciQJfuQTHdXriEyfoL9k48tdAUVxJLxznvK5XsLzyAP635SxXDeDfCxf7D72XrH1enUpF4hqcRPUHQe5Mj7erfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y2KetjeJ41mUeN7VA3EE5GmwSj4nxgFSzvXyHiyTCWtjDy7U8cX7QdS5Dfy8Pkpun7Rs9LPGNwMEa199N51V2k8",
  "key1": "32LkgCyadadB5HVW1YWALEv8yb8me6cSi6eTaU3Dsw2ZmhGCXnsNUchrAhNbf7rpSVARmUjbnMfgYCEpcnMqa8YC",
  "key2": "4qFeLbqvXn68SUUvjwDr13uP8bUjmK9fqAAdYufbvJGEwXBiCE7uzVSBpqwZ9G3ffSzoMNBDzTbx3Rre96gw2Ez4",
  "key3": "5HfcBGLCxJL3m5MwcTKTE6qmDxmonCo8LbZoZK9uqj4Bw9qeztTaw1o2enZdAMDCKQdm1B4NeLjvLsJWShvr33bb",
  "key4": "345xwqq6Nu3bFgknHuDjskcH8j5khCJfgNFKVMDYbF3868TAszp1B5kJzrNqsQDtCnCWo3U3Vr4ZaHuZb6ow6c5E",
  "key5": "4CFeVp9mzmW1YXeYvHyTnzpi8ZysVP4oVgPic8YoDKH5YmArVZJaGNvD7xDKwxCWV9kWMdDuxqct4oPYLFdVjjq6",
  "key6": "VyFchNBnKLYigsLitwPAs46bSniasusHZ8R7ixtnEaNDvwzmgq5turPTvKa3pF2EXfYASXZ3q9Jr5g1B96UUa9X",
  "key7": "4WPbArYtMWwKd8Yh3nQBJBimmi3vDtECqayxM225J21wjQ8MzeQo8X3DZC68xdWVxKggcZzbxpUqonL9X5gBizJF",
  "key8": "U92Zp4PgqHsJvud8Z35UXzuzS4eMdUdG2KLo8Zz8CBGygw6PBU9QnZQWcEoDEV45m7fLkM6mrSY3Tc7nqSzSQDL",
  "key9": "4GabQEipdbQfpkTX6CBcpQQMrz1yPC72JwCQEmuy8dN57bbyatUrrdz7EyDLKeeeyp9uRbaC2aJ1YyaNnkxap7v7",
  "key10": "ZLwTaiHZUBKs5bgaHAjXyqRfWV8sFe18TvqozBrnVGHChGLhppWYDmF3oXp5RwvJSW7ewuKsDhfzCqNRH8R6Uoc",
  "key11": "4bvEFUQmGyFwEhyW5T2y5sEU47X7rFtPfLWPE59ZfEttYBoEmGtfkYLNhvQ8kf9zTHXtvDinouGX5hk6cQQQjxBT",
  "key12": "2AKk9EnehGS6eQWuhQtVAn7SWGoAXxAtnwu9mRC1pujkHRzGdJzE2qGUKhLwzbzUCVPx8gn76koqUM9KxrS5BhAh",
  "key13": "586dfRGAaoGSNB3GQJ7Bqr9ECqKExRWuwXkC3767xLXHtRsrLqPzdm3rbdPterHGH7o8FpfvGgPpB6YBoBzWjL5Y",
  "key14": "3VDA9RLCeqnijawbudry8C5DgxzTTharPsbKDcjHkSNsWLzsThWiki2TVaPKzeYTVW7SjhqnfyP6eDzkcxgeHqWn",
  "key15": "GAPfh1S3tfjJtxHJ7Dtpkxm65HJPuaUVubByBSTXjfsWSHcR7zit2T7du3EuUMP31nSs8n3Z2XSG42h3snjKdoZ",
  "key16": "4JuuXmRUzMXuyCYWpc3XBUC7YMDtzQpBMbGPPJxYGnjXGcZqknoHf4CvR9qi7yVYiQJL5q666PkduPZfKTimWxG2",
  "key17": "2svwZ6J4LyLHtwBpXD31ZJbjdF4zaCKCesvf2ovaBETheXmAXjPuc3o7Urobbqz1PtS3h2qTRd1efe4vvxBZDGCQ",
  "key18": "4ZWYvPsC91rSEmT1GST2LwmPjmQSenG1y884JKSVz2WYjsRnRdK46KGTBePpbecHR5XMa6aMTo8A1QBraVGNXDpE",
  "key19": "4G74HJNPVvWVpjqcCo1DU9umKjcXs7uagwXPVep3TNo5smFMRoEC3xMGzDGgM482AXhQ5TK46MHpRLLU4BnW74gs",
  "key20": "4wxQJgQYUtbcRiAYmtXMDRLzWZEEmvmBWzFEHcP6fXRt4sN3CaUYPJsePvtB6ceCZy3oq81xPNgvfhtGhPQHvczE",
  "key21": "2R6k8duWFaGRjNxVNnkkdHuwnm2XQHvCALAfqLfy3D3KTfhYSzkAHFytuX5ZT1RBNoxsgGgURdH3HRRP5zeGnBUu",
  "key22": "5FoFTaknfyv8NLyByBbPYDNFAp7hy7J8RsSs2Nt7VhZBaFHGxmnP14DmNR3Y1BteHuCtYTNZb6UuoAQ1XrqxkGdK",
  "key23": "3JoaXfVy3oC4mCdws5mbBeuShQXh5yfpamvDZ9MHHTyZ3GWCNUfoh6FYVtMZCqp5S9xpdJPYBb7pZVQ5ymqzyMPV",
  "key24": "4gsdguLyFvSJXXzponjk1GwVB6X4X75jdqhvgppvNdqqoQp2v1oHeWstDUn4Wbn5XxXp5PyjErpWBMYHHhSb69BV",
  "key25": "mDPMKhj7nLSQ9v9upWdq4H5Fdch2ra5tR1TM9E6TKe8VuhhXHWrPDnqmLb9Mx9diyZbZaUbjoBKmCsmRkmZ1FRX",
  "key26": "3wEjBbUGvv55J6o3xp6TgaKcuuZAhofm21zs3aVLozXaQ8GJoLqhtoX5bpig6hSjo6pHjULGrXYM9bBA3xVJMsDp",
  "key27": "5j8JpAFw8ktq3TabCFvY2cqLUa7XeGdTcAjd5wDCHpMycZLVc6Ej5ZzbgpAyvpQinAqGVe27DmVwtQ6DweGpfEwj",
  "key28": "39ZqcHJkjZHW7RP1oNCypWhzoRr5S4jSdeTbPUCHq8sMs78upxM1zQUYob7GqUAGpdLDCnGNAqgJgeVQH9w57cYa",
  "key29": "2dpXoc3pRbnHNYcTrfV9XyaUm7XV8k9ETfRP2zXAMrzNB4KPAVzVWUgCQmC9cbKJPpgmPCPwe87TFPpSJ5G6bEvZ",
  "key30": "friFozfvSLzyJ8WpKxG41ystk2R1kmB3eRB6zqgNau8yka3nK6Lp1yJtmHdjKDZK7mq61CndVHiXGMER7dR1swc",
  "key31": "jYGk96mkEt4MUNH57SR1ei488FqJ134U616weetMgYVL3gBHF39sqLUgstyeB5ZRxDWa6A9DVWByrBhfiY5KneP",
  "key32": "hxgkAxYmtkAUsshAFh2JCmNeQjWkd8jF7Vbu6RK1pZAtK9J4dHmGKfcmtY4b4hHGsRU6bjXrnYXyv7q7eyuVGkg",
  "key33": "4j81JQ93odMACHisz6jaNNd4ee9KRGTwQSsuUJRr6cGERNr7ajnUAbtZ3Y8xoX4iD3cL8G921XBQYbbUGaau4H3m",
  "key34": "3FM4nmmHSwqG75w8dXQqtFwRPCqy9x1VLKmrgoi4DbDcpnt6tbjigc9zug2B6c4MiWHfGUymaBs8XJQeGUoSvWgW",
  "key35": "4nJ8j6ZcrmKaBRH4DSSXq1gAMbjn37pxJTvsEjy7eR5QSzkJHkLc2MGRKPK2TcyuH7HJYQHs36iPDkUv5Et624R4",
  "key36": "2oJ4FBtnyf17jccmDU4p2t2P3g5mWLsE6dVkgKgCm8mvB4dS8qgouF5zTJXfUUTvaMVojoncJpWYmRfPeR7Rxiq8",
  "key37": "2W78Tv2Tn2VmCUgLdEXRAYrfL4vxCDRQszFQH25Wb61gpdkFckMVvybbVLrqXMPmWvQGsdgfTQXHuz3PH37N3EQg",
  "key38": "NSXrqsf8vdjU1GmEdaRcFwBjxb6R5e8ETW3C9rjE4pRXLPcNT1cCLUpzXGwH6F7TSM6z4D3FY4KYZKT7T2pZWMu",
  "key39": "5Tr8kZyRY9EDNnmJG4efcPoDkKa7U8GpmBc8kbTsB4DvC2L3koVyKNJrzFjkemv7oexC3wMmvWnTrHaxewC6y2YA"
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
