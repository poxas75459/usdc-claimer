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
    "4MWwSFhRh9T5FBKHpbmjfFPWE7ycJjTcB7tSDu4yNQD1xeMcvYtdSMX4PEbsmazzz6UrPVDi2wQ9PENdcSJSvSbp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25c8T8aLkiSV5RJAajz1r2PARBzKbp6TvvJaEUS7waQgnodJb9fNAUq2ACep2BiH2GG1nnmrBFPCkQivTdFTM1xN",
  "key1": "4im8o1UwRsGFeuvVNtxUUmVXS4Vva3Kd2WHccJtGorDRCaMHDW2hRFST4bKkDtAW1PaEAb7RhgUa7hZSJmrQt1ft",
  "key2": "5Y33Am5yk57eaFWRR5LPvn8ypN5rSPzVXxXaDmE8HH35YiztKq6Qkcj1y3Ems7qL8s6kA22ozQSi6jifFTKYxPTL",
  "key3": "2BYDcbKdwbXgjJ4xRN9LoSUPVGFxMVpihjP16WMXiEdNykQLJ6dJz2fGtKWDk2qQavRKie8vwZC5bevPJNJbXwBP",
  "key4": "65EsfvnHgpy5L7XGWEU6ESvoxqdt5iatKUrGq7wGhLr7jSNZCiifttNA2eQwEss3ytKZe9PPjxixtXWRUFUwDZWY",
  "key5": "3GkeNfscBR2r4teKPqx5JBdhipJJGcVPu6cdd3sbnY6RjNJQej6u4gy3X73a9rdutfcBZpufYkTUTC1V8isLyvJg",
  "key6": "wmCE84BrJAKpq1eU539x8BbPKzEfinNdGauTCUZB1qmHbPqDQrQmbXSotmYfFyxkpCQHapUguJTSJukkErbmp4o",
  "key7": "3R5bvLFMx8VMh5rBZkNWu465LCo7cG55RcFTUH14uHkJvgAWRvqTnSNBAHYbhv99MQeoXtcrMQuUS2Yj6cTdNR37",
  "key8": "2bDJFpJUueVPFbVWAJg2aLxKMVz4TXCQUiFCV4djBBwvdHgzh2SNkYvjYeSNLkatU5oe3No1XCkNczCyV98P4dfp",
  "key9": "3hvM9NjVWKotvC5EWSxBZyrGSqWfopCXKmp1UNiB1NYv5zVpnywhB6d95NjahVY9V7sndpffRG3RQQNWjgHNGETb",
  "key10": "5K2wVR9AW8nJyvcHk32A1QZ2MhaXt88Nn1ipZTYE4G2Egsd2bLxBcHjiFPkskozE11Lj4vCyuqBk4GjPYvk42rba",
  "key11": "pcYn2HJWU1XQZ1TQBeWHtzhVauN3KRpQaUKnfv6nNmykQDLCGE9sDAnsMNEYsn5YgzXEZfJgg5cCCoZrcQYHyyS",
  "key12": "5mdurEaPF9PT6iddKxdfiURPK5N7YPfKwHv55Fw2MRVRUyLRCBNUmFQUcG2P8BKbGKxzVg5NmvL9Uj5tpwvwo4fb",
  "key13": "38KN9bjbJQrLYdjnJWZwXwT2t3xBr1JxdXbuYsmSVExaKsV4S4BhmuXndAqNReKhDrwsQmzW4wuUuAHNwfa3Ezai",
  "key14": "4fcJrsYRaeraYAoEMFBn8qkvGQ7Hjs98u3SWRvHkBaDzSEagtrKyGpajXoUUWNrPFbysgVVdnQatok2cbjXkj49q",
  "key15": "4WwYSE7QBJKZ5RrHxgjaCi6R1ffHQW5jd2tbHmHiCWkj51J6xfyADGoaRTrfonTYHKiz6hvcrjL9AasfYGko9Zo3",
  "key16": "2sdoqSM1TaZ3kqHmQQae7BCA2erX9zU398U7keygxyzvGoPPKRBdn69zTqp5QoC45T35bCS7esmShL6uActR98gA",
  "key17": "5rrCgbmMRqy2yToDXjjGJsR2Jz3Aeo9CPWpojEokqjzfx7QRFpZ3XU8UcNYpFtvPRHydGnwxiffpGHqSVLk43XSc",
  "key18": "2ssJCqnd1JdoRfy85tfxG6b9w7F8JxNQS5tuNR4js4u3jae2vuwWE7QQrFGz3ydu38J3sBCMhUgwcMBtzpUoWkp2",
  "key19": "3XGusqTH8nQgFq1GU93qSEKHcpRsYkGvYDF5zr5YgPb5Dp2iYmJgVjgCZepWP4bc3yGBZjHKuYGLq47FPoxSNsZH",
  "key20": "3LMwapVAXAd3J5ofybHkfMm8vGwUsnvhpu69Xs6FTCtxK1SaR1689bZoC9nuUUp3KTiXBodLbwewhkMhbeA5rerL",
  "key21": "2SSVtTemRoaD3jZY67UqQ87MtmDxCyNztfu8SfwrXyCw7RPRH6X5G7Sqy4nkQzqSsxYJc3TiXxr2vGXpXTfR6k7u",
  "key22": "3xF7VTZzLUAWffgPQY4Te3abxEkkDgAAmGC3yoXvZ4Vgsht5JJRYCPr9BrpnnSeLpE8jCvdvZdSBwoX2bd6FL4i9",
  "key23": "2LR1TvXqKnBdFEUZXCdP2htzeBF5kuTFbSboJahQYRmLUQc3EFQDGULTdrqYxoLK42mTRYBBt6ikEbWty1XqyqrZ",
  "key24": "4boNSjfTQqYXvDBrfPDfLN4NvfFP4sDHAcFbrWoeSLE7gFPB3Sh4vQ8MmWU5DwC41n5N3psqDeP87FmzyopyFHRU",
  "key25": "26E2F5gQ4bnJfvmhc6mF5mKXxC73nYCK4hyJQA34DGkmvUmoaPscsHpeeCVbENme5ov5Nb4hTbUuuW86LAHPvjgT",
  "key26": "2pYFNW3pqSKLiadBmLDcYx5STaDRjjqSYGQUf5qs22n4pHGad7LXU8ToMbdaxYZ8N9uabotjmG9gSChbijJ4qZMd",
  "key27": "4EKHrgLED3bBzjFqxVAF9XSF2GWikuiK4B7zJ96Sh2PG1umu6poakeFsKmbckw6TxmexezGK3pxSmzZfiKfyF4ip",
  "key28": "2QHdBAEaaXkSoBxDgw1TqZujaRBGxudXC59NjS5Sf6kU8qTiuquyW9LTjmsX2H7v3ARt5mDPzRvBBYipMkZzbDu8",
  "key29": "4qdu2t8fsa6qGEmop9SdumhaJdhw3vgcUCSDXSYSDnq64yqZdeBusDZ2P29MhUf5GbQbv4DcrtY51ej75dvUsEun",
  "key30": "3AEmEnXA8GpTTjeTAzPsTyqngzzrGJLVGyjiJtPtZDzzJ6L8RDPFZxAqbzjn7rbjKC3EibpkX69g6wvwyUpXA7WV",
  "key31": "sDsN3qN9rsQJhN6gfeg6aapaFtPP2X16tCc7niprLLydNrFDp79HdKpivFFMCSwBorUckAos5qbj6r227TkdSZ1"
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
