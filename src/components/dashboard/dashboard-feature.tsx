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
    "57gSAEL7TrTbqFDrTzcKMkz7zUeWuEJc1CMjg1bpph9ytTWbFVDs3F1ZGHvQDskKRdfeUEKVDchr1tPbtwfiN5Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kPVyMcirPZrCArDJpChZuysTKBJF5jWpFBG72CQnnTefB7TYZwju89AkwW9ttkMoD3G6pjJe7RPJ1bC8F36oRWE",
  "key1": "5FxL9vjp5m1zjFzopGVAvCde8Un5iSHmzSdteHAvbFf35ArJwCttTxkpjQroozcjWeRsWZ2JpuBmHHRKfTkJvDym",
  "key2": "yjhp7pNb3u7fphKMZi8X3je8F323Bd6eRyM76xhKFeyfrQ1veCQX4ALUYG42Ndcn8gx6bkwCiAfgyV4fM157eP1",
  "key3": "5DEpjWWoTVjtv8mVMngUs3MPRyWszonL6j2oG5J3H9KqEnTyfWmgMgJJMcadmkE1SCYE5tfQoSgWS8nCVFTxide4",
  "key4": "54ghGwmdYGasSviUScDFEFvWcsiXRVemFickAzJhaUXgP4ihEwbdPDVYZpev9PPQFELa44CzRhabGQwVNmsYDtAA",
  "key5": "3MKSwHFvpEwquVTAyDnznqGNMT4krCfdALc9Zs4qdgPTRR6PchhKkmJffP4ysRNNcyC9VoieqbHqpTYPbpaB4Bze",
  "key6": "2AkGj2R6FwfixVMExx3g1W2tLmZfbwDzRVwNpvaBjztLSpR6LXcBmNEEZ69h3Q3JhLHC8DmMi2wgSqdHhifxz2rm",
  "key7": "4f3eBYJQTGsDUyJH5BkvXh4TvjavfKFj7MCzh5YhuJMPVhJWjsBtpVjxkKmsFjGY3ofTWX7vcgACS9zVxwEy9Xm7",
  "key8": "oCtr1yavVMAgxFzKqMWKDpnSLiP9hmwVNPRDky7v77GxFS8M7GwqYX5yAdh4mSNi8V4G4k82Tgmqsp4skKZZEKp",
  "key9": "YWoNmM3XAkf5crYaTpgnWcMSHaatTwKT2VcPSAhRLHupqbiMVJ5dKwe8Vm7ZFiJmHsRabXH9psvtrczZ1cAVinX",
  "key10": "5yUJHZ8KKp81d4qsXqzzU7ixYKTEvCzorT2JgNyBnrnD5KKmSBmLcCuA9K8rvwxomqtPPmLztbW2u8qejSNiaC56",
  "key11": "yzqfKb2Kz7DtSMNEXFfhohwVBL1aapwZ3gzHHrxKEf8DDFCqd9ANSAfTjfFLzU1aHBp3iGLKWW7zSR4sbgdQhnH",
  "key12": "4Mw4Etbg9o7pvDTLymUtadsxy2hxgDRtSwheEXgxwna6tVeFjWzKn794RjUENTy9AmTraTxA8oZ84bW1YBVLu5cz",
  "key13": "3xUBibKUksRbs7JiECkySdDQtV7Pmq3Jzqtzqx6tkQqAsqsExwSAtEgY5rgjBhZVavFJh8DGQPBfQn8mvXXu7ckv",
  "key14": "2zZhrhwRFvwaBFjrQR8J8Vb7BPDfdkhHRb27fuB3xiZPfw7d4aruiddb6chAxiqpECWuJxmkrpzuTcUK5hXuunvv",
  "key15": "51EgZLRZbw8HYvjjPZgF4vYKa4ee7ghW33JMgnRjDZ1R7byF9SU1GX1HUnsxCKWqct7rLDwqN2ojXK7yJ5NNypVi",
  "key16": "UM1AE5kGBzN2Y62RvmTBaUahfUn6n5WFiBCPhu1oRSsB6NqtZDQAHzXMUQtL75f6PhBHV8hhh3MXvBpBUBpjPje",
  "key17": "24yNjJc325SXjXG35DY5GXcRiNymmQgbEyNvoowKaRZqVeUe4jqJAfmeHH4e2CkKG558Bz8HZ3nNwq7oZz5BVbaE",
  "key18": "4JsuQVgVdE9oFPup4ovsmc7uWJi19pes1AE8JvKXdXdPm36YkxQC3CUkh4q8Tuha1nw7gNd3Yd6DRDiyjUSeSasE",
  "key19": "5fJFsSMNagpboyS6dBL27GQirhSQNcZC7hQeK12Ar9rw6bDR8w4eW3eaMuPKKrp2Fwqp5VKbotEaW5HbGbSmMvC2",
  "key20": "5Rj4W9LUaACmbDGgryRHrtBQgnL2nfmR9uAzj7QyuVJzxg6vwk3RBF5tMHHX8vQKpvQve9bByTPZkdeobPHxBERb",
  "key21": "4aaBrYu8TGxshwYvKiH7E8v3tzJyeBTmxKGCoVuuC4A6ZBjHX7ydvV3sLXXh5Rju6bxdnWzAaBibiTj4JkXTwMTc",
  "key22": "3ksAoE7Dvd9RmPoN3M4z83rm99yHYc9sdGsdd9p4xtReaHrZEXZC2BaKqN77enY2ZBkmDH1jKWFK54zLw3z3ae9a",
  "key23": "5cJhR9vaATW4sTkXM8Jp5JcSiCCYgPGtDZEJkwjsbLDPzJ1UZhrYxS7nYrBbT5Ypbu841qm5ufo8zDCY4K8H1p51",
  "key24": "4jaMvy2sKNGTRxKy8n1PjhUCgvSP7gCZKay7J8u4zvLAmDv7ecaokW4aAemDFrUWdxF4XCd3BPsYCNsf3K7sxcoQ",
  "key25": "5ddiNe4rYiq9DSfu2G3sYLQS8zL3dpSY291zXrxKgsd3NHURwpANyX92Z9Zgw4S4jU2Cwoj1HkrVkjcsT5W1GSGJ",
  "key26": "3cmSrapPGDYvXtp19w9Zqx4s4TcRcuwpti8dz4Gqg3r9PxKcxeCjxMw77q9T9jALg8cSosHji98o4ZznTeRw1kqk",
  "key27": "5uVuM1MnKWtMS3csCtq6Fgkaeni3oPAX1RFTYo7Zdmx7D2A3CirfAJAXJaq4AvY38amJC6ee8HVdkBqcNUCaicL4",
  "key28": "4JqrNSpHctf8MsuWP96LftK79VvMbyLixazTHAiGS6r7b5gwWLxAkR3ucQ7b9aZMU9FXsnTgX8S6Y6AyqAAKpkjr",
  "key29": "5ByASZPhsqLsv5aMzbhvQswJqzm5itM9ZoQG9KLoy2R3fpSNGaL4rCVdvRGynX9wguGuQ9mVqeW829vJJuJayYbq",
  "key30": "5pLBmMhEwMbyjQoNgSZyTiHdAh988XJ2A3fLfds5GSPhWocUwNUPWKLqSpfGnMnak5yFoqsm3SRHTvKRmDGASktQ",
  "key31": "336zJdgmExHCy8mZuTrNywBDMqPwMAYZhkGkzUsaSGYos45gcbVhF731iQC5WMgQgScTHgW1nAi4VCRof82JSVaS",
  "key32": "2DegSFZvwhjXgLPdR8sBtto7NqRzQUczGMt57gouMgS3WSBEzk58ZGZKRT8WBqggNMDSmfNfbad7gdYnYYb35Wxk",
  "key33": "5GRGCxf8QRc5Y6KqANArNoRLvRCJk1NpT9wkEJtCrtbrCR6HXEuNzynkrsHWAg6LKoi3B618aRXJMyLDZEA3y8KG",
  "key34": "64MCtmVoDPbvgiRfZosveidXC2nyEyQHWmHkpQGQk92Xu3T2vzj5wwxJafEAxQMCGWcgobaRZ3eyVVAdAvVCjFj5",
  "key35": "BJum9yP5nxFkMSbcBNXwmxi72oQ1PRihTCgnYKnSBnypQu4ZvozEPFsMFDuK6Z1SLVMJKpwD5Sjf6G4iPfzAGBd",
  "key36": "38CuGELvp4psEHsn4iEMAY7NkmAuEG5N2Zg8FtBB7L7VWrbCSpvAk31Yp7m6yWXrLw1h6mp4Pt1DDhPUU2bhz9aQ"
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
