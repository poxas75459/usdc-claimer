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
    "2nZPxR4wREKC2KwvMU3nzzz654srFBypTG8cB3pSYJ2NjcKBSySop6mcfnzy7McFzmi2edpBgRXKyTE5sZuMCbaK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27ma38J6mAPzWYXaSabxwDCGmHWiT3jc2dxpzuzkEKsJm3uDxArneqRNSSv26TqNatPnARVV24dnd54EXgZR6s7d",
  "key1": "3yxxGXr8oGAQ3NYii5PmNwA4bDWx4VRcoc1w9JHF64oUcRzsckeSWeiRSYsKaL8j6mqJgcio9Gae7cXrus7AjRK",
  "key2": "3RYyrEw3Ffbh3JeMAQhQBiqAzHzeiuMbespPW9hBLzWaV2jiNK9HquxCe5szQp5H8gW58byGFE5ALdwQ6AXt1suq",
  "key3": "5vAw883mSL7fWxm2H1RNQW5hqhLjB5jLZw7nkSmem5xuYrm9MYtpidNYh5HC9efibHqriX9bnq7Pa4L7JhDFRdwj",
  "key4": "3mUJEX9RKDasPZHfBXfYF5mD5dfD6VxrYnWNrKicmncVWJkBZp8988J8xZ8j8dqHneRdBjz38NCcHMGiSZeMKAry",
  "key5": "km9UdeVHP8VwYJRRX3kAVqdnPdxTits8tCbpBEFLSCJfG5ztM6MDv8ToFpzSuReGUqceQS8VVv57Wyy3ezvhCiq",
  "key6": "38zSnGz8hsA9t6pFerWwyU5ZUD45GX7AvD1LhHRoAdMwaGF16cBcJK24uGZHtw5SaiuRccaShkfn3VdXQfSJ7Au4",
  "key7": "2tA14AzUcBQCgFBQjj9hFwG9UrHMgVz2C3DqBrctfM3BYMTCyE9yGKhpjjFj9kW1d642Vov1y2tCan4oMbU26Qmk",
  "key8": "2JLBd6xfVJq1whMNJWmejHn9hGjo2hqGeQPk1qFWGfJuQ2uR5w3ahLAwAyeW3K6HuXazft5ug98B5MBCCo9FAZcN",
  "key9": "4S2Nv9NkNt68QrMuSrDPQ4C3CbTNEzbMEvYM7neqxGTGG2h3owCKzGMFYdynR6aT8U2phT6C4JKJKsLWXB8B4bv9",
  "key10": "aDGYwWJsM29pMxp4FJfmvB6ZvpFnP5Zdh7LjbYHJ35ktXaN1RpBgaTyHEzpiinFdhW7vVmsxXKXFXhwNSXBVKZb",
  "key11": "26zdzvGp4ywVJBWUAFsGyNbfq5NWwYkYJWeRLRhPdNEGdLWs54EXondmq35bpWYWLgvVJ18LUpApBNPnhKV6r2vK",
  "key12": "37Zwq5fVsrQTBDTf5zf63wkoVbSP5P8pRt4xmnZrU7qDBAmRzQSJW815TMGZTWRHVc3VEgtFmq1gtbNTzBnHATJW",
  "key13": "V1y7gMHB2mqZ3b6TuwJuc7EQQhrNS8dU2Udov3GygVQDqnH3WCitjPx3bRxNAyWxoVqZJWLiNdAaXyL7JMKDGyP",
  "key14": "5ubxMmemqXbPeFv8LJCL2obvz4yH1bM9YA6DGKERDtQ9kKXU3dPSHmnd7eEXwE9i3t35FwduYiSQt5k1r3DNCc5S",
  "key15": "iYT1Uba4HkMc1y6d9jvWgi9tQA3pzGcZqZzXmcxxxiQrwTX6awnvr5UT9cp11AP65yTGG5Q3RpFGQRxXysTiC8K",
  "key16": "ZzhxWLjpg66WL7zeeEt9QhaDnQBK41TqtcsgJSeLGytcB3KMLcgdSUTmUUFGpCPsyaZELa31vg3mxQMqhozEK8F",
  "key17": "4Ne7H1CfB4pKkLQw1HkgUFi6B455gQeiwHvDRCWD95RuVfcNEfzqWzRFQVQhp2p635LEadXgRLnGGB1dwVkKsUmd",
  "key18": "5FNvDEDjdhTGUPCFSSQVDqEwDu7sG6SFyEfiAfHXc3v7Kx4yCcyjiGKvkkj1skrQDouDPcrcGYBcEJJu3jLwaAMS",
  "key19": "313M6vPiz39vgruhR7dYB6k3Qp3maUpRSu86QJFUdLK3nihMuXx8WnD2jnNJWc1Zdx38u69uNi54pnLs37RHLGhC",
  "key20": "2JcYka7dZmVoXsBzehXwhhjnNo35Lt4qYybKwLP1xhCJjRY8f59TUT5uSkTafRKuBHPADGvDCtA9LNmiTrQdL3gy",
  "key21": "5RTgJB8CaJDod9tufK1Ug9RmM3cXAJ7NUCBmw2QpDgp12NXkBnSTGL4jcL8ALi8bTwDesowsr4xewzeyFCKcx3Fs",
  "key22": "3hCkWPDoXtS4JfzWfqJ6DjgC7KfJ9uYVcYqunmRQkPCqfqd8wyZXXSAJjnweMNkZh7Cxh3JhACWKLekT7erZtrw5",
  "key23": "44xApqYiYqaVRFotzDebnAkUfifmyzQ45VVqpEh8ZeZxxeBBp6DqFjMedhTYFuV1LSwSNNV7e4juZbA4KYEsM48R",
  "key24": "4wbjm5z3ueMHuf2bEG9Ya3LajGfpv1uvDGsNDqAoh2PbYBChkGYPSEoR6MBTrKBhurSjQX6YXZ2Ca9UgTq1KR4Ff",
  "key25": "X3aWeCfDBjomWdCtp9HBLe8VqsE2fAyyu2RMwkMgc6i14Fofwc3gTC6RdWxqvP7KdznrrUhKVSFREddCvmxwqxa",
  "key26": "4JNxEfa6FpzcmVKdiUwzpuNb6u8G3SjNyLiUtwyiQbs8zXxauSLWfiDZ1JeLyU7jHJaDntzBfbr3JjHddJuguU7G",
  "key27": "2hkiv51bztfrtSND8p4LtQKv3wb2H8jV1NKpSVw9Mwxn9qRg2sE6amfoab4ysJHCWQ9b9mJDC2TuNgB9P7UAHs1g",
  "key28": "4ZwfcmeMYpBzQKYCBGRcNS5BzWUdsryfDEjgUdHUfQKojadXEuErrtj7ViB4RSdWbp4kmCwNfGZY6FzDfnU3KVxD",
  "key29": "3MQaWo2voXCc61FDSbvHFNz4nYW7YWaujXCd9Wt8kGmcrQTdEYXcXwCNjuaTRZmeqYgUrvqetW3GZ3vLTs2yMcan",
  "key30": "3fWQydbAnFexTjw9oGk4uhH1wVWLyjdiC63o71efvBj6ySnQ1jS1avijKrhJNwHHHTGD59Gvr8e3z6R6zcU89aC5",
  "key31": "9uCdC9U8LCdfriYbJpCuP9U9DQFj7YsufUa5w9rwh16sCCjsuNKJovbxV23qPnsR6Su77xc8hJcqZvtUcxf3mhs",
  "key32": "3sh36mfSVXiGPKq4wucYmnTLxYLeVMXrXVFok4mqgqgRa4fEdtraEhezCLWyEDA4a811vtoah8LJb9mMfYjzufzz",
  "key33": "3dHGr1FVEp5JqhfJhgeq8ukjZa3evGvYUtExdbadZHrqKd4zPLF4sWdkTwrC8ihkypXZ4EMjTgSmFqB5EEnFMCi6",
  "key34": "5eME6qiUgQCtT23r5MW1M8sGufy5gbxiMEcZn15LB182KJLsTHGhmQfN9FjojGxkc1DxamqU9CzusPp2H3qeQ5Ny",
  "key35": "2fKveKVaW4qbHaS9C6266wHAKb16zuJwE2redsjjcSZfrULDfyyvbpDx7WLrc3ZNCT8BHV78BUqPmZSB29cfoKaf",
  "key36": "64QrxR9h55CUyihDg3qDZE8zmPPoFygokWC6sqxgxgwPiTibPpmM9fpPEvsGFP7Xh2xHwbKJaMzqPr1SVNqxdb1g",
  "key37": "wackbr4WN1P9k4wN2bYdScuuiLaWb7Cp7NnceT7BszM3wgyEUAuR7oKGnQJktYp4NH35zPKGKLPbD2x1kBMyxkQ",
  "key38": "2WtMPWqtVmoskJGoyH5B1X9VuvzeynweSSrjUBg6TjTUW7qeZ8QBiVVkoN7iQbdCBfRFBEQETFComfSBwPdbZUJj",
  "key39": "4x6d7c2eKJANTMuG8eZrshux4gPfGqtZr7XMakBbQKSSt9M3ZCooqwHqbof9D5fazSttP9C276JjfWJD3pUC5FFw",
  "key40": "42gj3jh4LHcmdgnhVSd37CepPUcNei4E3oXrhHNtpq4bkrwmr27RiETB8uaUrxAnyUFfffKjMmFyj1Sn3LwwwWfT",
  "key41": "2h6PvF2vjVP5BFM1aN35KCgVjuzFPTFufLPjpKJutHt2DCbBhJR4SPgZ4szhzMpDVefwTSu7j2k7krP33z13RdXi",
  "key42": "5zZgbkrGhebE2MSFsMNA2rQ8pSmnCzc6SGNMLiXk6NBSdV4KApoLwuuH7n7oSj8L76rFH47tTz5WKjvRRfaLG978",
  "key43": "4BcnfCCoydWpsrMUWYj4dLjAbRfu6DxLnKDMBxsqFyvRHWz2y7kxAWYiuQ3D1tPRkiABBuGtWFDpL9WCK4WxcREi",
  "key44": "4fbhxQwsQRMuUPJ3K4VNJg9aGHovta4x9VhmCPTtVABX1YASHz4KuPxQZH4PdQwxah6L24LTXFCqxgVXVhyPvBgu"
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
