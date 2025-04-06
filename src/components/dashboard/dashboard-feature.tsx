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
    "4UvKdW4V6mu1Yp9SjKHXBGwmENbJdQVGD3MH98aNP1eUg6cKqrkXinHrWjV2PrXCVjvwtJkcR8ZKi8ypn5ok34uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eZGgxjig6EcgG29puS3eR9ZVE92jwxYb7A34grVGQFsRLUa9fyyswLHRUramDAiT95FCVXN6t863DXYHyz1omxx",
  "key1": "2c9v4GhiEBdwu2fEAxeMWhzRT29JGPJHV1FuJfaoS9MvQGQL9Kj3izd6AQJFzQVaJ9r7QJoZPrAEUaTzcfQKt9v5",
  "key2": "57k3L5Jp8oUkKMSJLcGjmek3Uc1teA4PnZqx2KcrXhi8tiKNcPXs5pjvMXhPpsSvVsugwHebusG9NktQfKbJYmKe",
  "key3": "8Y8Di3hLe8jLCT9FpfzSiJRMc7zSK198f3gZGFFuviqkGShYvAnQU59n4w2GWvGzeA3F5cbQJpVHw6qyvy85mMj",
  "key4": "2XynHXxRJnprZrh9oyXU9D7P3XiLhYXwGw9Ft2RToz9XD7dA68FUdZjdws2d6odCKq9kVeJyJjMogcE5oxVFBodb",
  "key5": "57kEjfrbWEnfwXxj5pwpXSncrSQiLmaQrqCQ9Wwta2JhspZ8vzZy59YfHViSYQd1Y2GLzmqE9H1tj4X4kSwMXoSq",
  "key6": "24WP4ppafVrbWEzrgsxAsGp3aWdAuiJ18e2pwkxFYJsdk7wRjrGCMWbCnEiPmaKK83a5ANMvd9UnyjE91euB452K",
  "key7": "5sCTw1p728dLgztNLv4uawbZUBeH7HJQWvj289qm6NaxbZqSg1rzM53mX5TwiZQj5NHmFBG2epM8XUgdd2goWpGZ",
  "key8": "5URBE76HW3nLdp4ZzFDiUo9SSJfV2cDQd1tbnfdPoJAMkrWj37deCPygpvCctfjkGCtQ7kVBvoAKmMEWFondsqEE",
  "key9": "3J8C45wLwxK9GXtybfoNytYeXbL3zsfEsPojZXB8gq1ti2s8pyF5TbSpyHwB2jiJUtvu55DjLRtxGUQxMJZZLiuV",
  "key10": "4qr1fKtfNbsddgDMeVVS2DSb9ZVwGNg2Zrxj5H8Rjxkz9eiqzKFK1L5NJWFLVm8wvkkaCTatMcMhKqwxA7BejDPK",
  "key11": "5MhLiXtGWgerQDpW6C2gEWSSci3fjHWjNXm9HacfBpPdB1pXBnbUCiU7cd5KTgv8vsaXuFs8cRYqhixXBxheCXXR",
  "key12": "46SWVAnUF5SxTVNMzxLb6DehphthPurcTxhHU1Bn8YUocrBJ1bXY2n58rYJA5YSaGeC6XbBnbCVYyo589pgDNsPA",
  "key13": "2rpQB8SqnaD1fjxHM6gUcBLE6YZx8iXmBw4GC7EfRrJvA9LzXjcvzygnCPq2nzKh8tQCE9z4cR1Loj2k4Mniepy9",
  "key14": "2bARqJgP2G77HeBVZvbdTzad5mNY3mx7J7e1gJ1Vcbs1xgfkMw1iuVQ2a3pFpqvkQgFzJwtft5iM7ekt7kiWXejg",
  "key15": "VNeMC3obaCW5YZZDgLTMUmS3CLTW32qAmS2xMEkxD7bX3j1D84BvePGEWgei1BLgT3njVZPbfoGLBc9qaFxTTWH",
  "key16": "4hi91nF8jdPZwwkxYeFAyr4Njipz6poYRr86Y9tPLHyytrDzd1DNA8sxUb2BRT2p2e5NG1MkYZCk3U45LYDsR6cV",
  "key17": "24eGbLvPfUg37DaxX6tWk6E69BDBzht6fKWoJEBLjmnFMwyeaw4CZcpomoLM5BCNnLrvXHNWvgnttaBXtTbfuVYq",
  "key18": "3jqvYYaLz8vMUwkwtmDWSGnJ2vrMeR9UswaUMZ9GDgdJ2dJU6jDWujjn34XAUy45h1v6QY8R7D1r5QQQDeB6gf3W",
  "key19": "4ZRym5P6EBERq1CdVtYTfpm9r6T6aEZbArRdfXXQWKp9C9jiTtceS4TUAeyMMGaHWQR8d9BVLyw82gXSBhnvnT4e",
  "key20": "5FT7CstBNRGSy6h8BbKbpNtpoFdENjDndvJU34BVMsz58vnsakJLUh2okNZWNTdqUo8xsJt7gRueBMbEY34YagkC",
  "key21": "5tG5MN7iqgT4Y7W8cYcqyKWVuZXAJ7FG6Q8YtFwNyF4ZNCVb8fyJ46Jku8oEowMgxCqq14mDfxkUAERi7fXeR5yH",
  "key22": "3y5D8WsEaMuvvNrxvDxNBCBx3zyVQ8j8RsHMSSRDZ7CCMppvgC9vZJPM1LS2nn36Tx8tb25SNfeZDX2VVEMZakA5",
  "key23": "WfAZK6UvJ8BiRSuPyYtkj6R9JhyNEfRfTp5W3gn7wqx4KvCydodMnazUKw81bwFwLPcz3cQ6KZZ5heXNnDRFJ54",
  "key24": "2b5eEK18oZAjFYSCghaZAdXb5L1bYAEHJ4VBg5eHLg93aFqDgVDJRkJHurCEkbtFJFKZce1TmAr2NTuvpiviEyH5",
  "key25": "Ts37CcobmiesEXyeQdTXadufzDuQRh91mibAPHBNsNhvW7LUYdjNtPoM6EHLSHGKsXNv4RMEoBWvJgL9xQWTfXn",
  "key26": "5mJBSDjKSPNJNCTeBjX5hiT7fCSNXyzSs41LLMH8npgQoM8f4PAgMJv4ZAcSggR4qF2YMTzLiyXRmRGVaWrFUj8D",
  "key27": "5GcTg7b9CXixnG7tkQRBLr1D7vxnDy79RHuSkw47hkzqZ6Y2ZKEC9F36E93Cx2CSM5CXxQc5RGZwU6MZ4FDPNzHw",
  "key28": "4ijxgNYhbKdDzgBLC4u1FJePhD1HCdQStaCCm7PDKo9tLFkX2KPUXiXoFDEdgtQX1WhhkgYwLmi3ZB3vprfuVgmt",
  "key29": "yLTTMjDctFafXUQVj2trZxBPNeBwnSxFAnM8KNw5eLjRM6Qd22RwCQR5fevYRupbhnkuqWFvbmqSxmCAhbLD3ds",
  "key30": "2rRzxd28wy9CmQnHPt47ip17GRHfZLajyy7WXjs2Mj6eB3wYskUcAX9zFFn4Tf43C6roiVgcaXxCNALGRp7RXjhZ",
  "key31": "4pb6PHwWcLkqCpUvJhKp3yse8Prqr622pp2HU1g39NLgeG5HnB3gtq2quJ5PEytu3ryufXifzhRV4GHFVgV76DRx",
  "key32": "2vtCJi6jc8Qig8gwh4WJgDhkhFzQDnL2vZNygrum2J6jXcDAVHeeCC425WvZ98LvmbwAeziyjX152Uh8fftghgNj",
  "key33": "6zskMjM2UkjyKEYNwrhLGnwsJ9Zd8oNBxRjqDLJoyFAoh3FuzHC6zVtrs2aZZsyHqRYk8gzD4TCpXv196Jyz1HZ",
  "key34": "5krEA2rGWrX1TQTcGcrpv7xVpRCWTK4iE32ZvNBmYDTBE1jB2s2xrzVZ9VhGGD2VGWRoeBYttj96LwZKdf7kYMk9",
  "key35": "3YuPVVKDDWszWF5j3P4CHQjWhS7w8FtkdT4Nc2isoFTUHMoxtXUzUBpN7DywkdjbzCntM64wABpck5b9vyQgxFsf",
  "key36": "5kJ6hfaGDHWiP5mMvNPPEeEDVd9PEZmYKG6uiDhGDx8u9ut4MHY5Zr6d6GzJF8KWavfTnHHu5YCiZkBBtm1mweuL",
  "key37": "3D9gS6atGr68bsMao1Lhz7UtMCsg6g2WCXKPe9hLywwtaYDAKhrP4TAAU3SEfBat6FdUHgepzYqEiXfg3erQMUab",
  "key38": "53Cek7jhXSe2xnsRQFUef6L7BuLGBxEJg7qNrKcZ8389PETGrbVA4Bty4ikvjhCjkKzDjZCVtsDvYLLyTLD8Ks7D",
  "key39": "3mFS6nz1bnsD5zAAV4ecMRrnHxenTq5v3mdorDxqHnGiiN45gyrQpoW6k8oeMjLF1jkuW1sQLzZ4ebBVzkdNKvnv",
  "key40": "MnwtzXxbZ7NWFkjm75JxEwPn1GRjR7o8vgRjvDPgfpLeGnkL4Q2Ue2E4ifQk9RMc7UEXtLX9DtiBVVJivsCXQo6",
  "key41": "4WYMr8s3KCRVmyyBsTdVNL3sGHpRwcHpejZxom2YDQc7pwyARNf6Zj6UvQ9bnNPhPoFNsNZYFazeitc9y4dob9Vv"
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
