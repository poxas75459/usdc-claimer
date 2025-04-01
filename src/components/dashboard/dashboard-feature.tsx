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
    "51eH7ce2e3PKJMozgimBu9Y7cZL4M2UVegYzVShKuNn2c33ZSjsrxPiLxdVeZD3h5xfzDoE91VEguoaY9AxpWjJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tTr975mXZDF7kwqPDYExZjDMjgx9zbCV41kEcLfDVPjg5csa4THk3WiyJfwPx5tTYySWddQQJmZK8onALVA6Bnd",
  "key1": "2PnnYvjJQJybrMG4EwLWp9DTALKcfC8bM7R4Rk8waF18nEYjggtQkkcD7uucPhY6E1ZGhGuTU3j7rvpvShakvDYJ",
  "key2": "5aLVzXN3v5GoejcmbwTAfHAUAU6YxCBxaR9BW7kjbrJDFRqRF2HCZqYqfLk16owQ7U7h2PmTJVAkE45iUM8nmXy2",
  "key3": "2dMViTFNETRN1JxgpPSm7TrBtXpXuEagDF7uKzsRsRFzbuLUQnwnz8ob8hB3gqYeTdBmTMvgo5xQEWQBVZo1G3Mu",
  "key4": "49om5M3Gw4YyKCz2Em8Qvahwh7sHK6TCbgRGUB8XqTbUyLYo36edg8eftSrW9iUmkqZWzuGoy143pPGQE6rZxij3",
  "key5": "37QxueaubWVmxpnMSw33YGyZPuxBHpurHbPdkeMDvaS4inocCyCPvJdQnKXh1zj4TyAVy25bfBn7ebMkZP7vtUvW",
  "key6": "MBS5rxQSSApQ1TVFDNkRMfw9eJnSz8zDe4BbbwxJtmm5ti4Wgn4aSgq1BAZcS5H6DXF6Dpj81NCdkhtkgrJtmUs",
  "key7": "4iUrdbF4GpznDQgXPptPCT1LCrALeR16J3eJCKyo2XjWPVAy7YmY5Ws3tWUni9yfmyhhwu3cMNSbjDfJ9n5EUitQ",
  "key8": "5fsxRWYYVojNebHt1eXxw7nNDiZgXfLystB8WqC59orpmkEnMoBz4TdMdkoxkqqz8SNkLXve66UaTKBcct88MkbS",
  "key9": "4KZTrwckNjpAgLfH24QykqQ7NVK6V555FqHpAwWyd3bMjGwST4Dx2Jz78WzQcoLM2omBxGJF8xZXF1yfhNR2g3CH",
  "key10": "4TP4xA9kCdh5hjLqJ1ctviECdNPr6g6fie6bUJZrMsf1oAbTs6ycya16XNcCnqwpzE7AZEeUHF6J8e5zSdQEHqh8",
  "key11": "5RR2QeuSEnAv2E3tEUcr8G3tsdHidotb6bZqiSCp3ZgXXeUoQaZ85YCATa546ezp3HVPZzEtjWt6Wyf2E1G2iqsW",
  "key12": "3xKRYvDjndYfJfTiNktNLBSJ5HA5XgJL7KyVU1H8vd1m59Go8cwswJrP3i5ABB4kiHGEHv7tgVEtvCDjBXGz8JYL",
  "key13": "Fk7G2utW4fbxC6zUxBc7niGBm9QLsFJUiowK4kFn9yq5knGwAjEVWbdC4E979DHsVN9scQsqEWAKcGGjuYmhQVg",
  "key14": "3BydSWj3JenPja4R7UsWXKprQB9VCbbFvtKU8oZqu5qMiUuCnA9WpPDph15Ebkbsi3ToAqTSN6W2s5fen1x6QEKP",
  "key15": "tomw73RsEac26mJz9xQoMF5V5u5zRGLTkZGhjh7iimQiE43LEEm1x2cKVPeh5vgMxbfvExF4ieTtzyTKvNWQGjY",
  "key16": "3TAg46u7Ptv6BkGGSx8FmmvpRJ3RpTLmViWdoXJEfX9aWMZUjvTbhyP3GCTZwCojvw8HQpT8DuUNYRk2561wgtEz",
  "key17": "gKRZQ6qXeLKcvxkJfrj6zGSjAsfhGXq63Mz4pv4sagtLXwUmyYt4LVJh3AjrWJoL2Gvb96yHboRq6LsekLhAjzm",
  "key18": "3dqWkCtGzcgRsZJxq8ffpMSVWVgYBV547R3jgK1oErwq9PEKPuouzUjaKKc27CcCddp4QVxbZA26yz6rd36xbmTb",
  "key19": "3tQq3KNtUbwCBMjnJPw2M9WWXe4MfDaYJ3EGRLfZ6vWVUAAmv2nAKoBYCk7MmDtzse5X9n51rdWEXURp5VbozvX3",
  "key20": "3DSXsvSZZSUmoFwvYUNMfWbqzZkeMitL2ZJZjAMgrMugSEiXbaTbdDKyc3uaiGNY6th8kTduCULsEEXYgN3bg26P",
  "key21": "Mrz5urtefEKWsGWiVLFQajfLHzUuecW5hVeRRN5rKmgBiZDzcdikTKzyh9xmHWmPS8CSKKtZgYc6QPC7hXnhaqH",
  "key22": "4vNC6uWJFJudSRHM9BsmcAqz8StE62xgrnkJPTsad8QEYyNUJYBdfTVoMhcpo1d6c64F7dTjC9o4segG2o5cR3uN",
  "key23": "2YtGaeeqLfVL3KfJmkXxh926sUvVKc3QXe8U7Aom5yDaAuZ5H7qLq2P3HPyL7nnooM7ig7z5dkpoTnSp7QGhn6ud",
  "key24": "wAqf8D7LKxEJFDSYYd4RjG5fh5vsn58FsxR7gTizVBPYjjvwhhDLkb56fY9S6JxZ71fuEi9ZMBMR2HahanbMTAd",
  "key25": "2vmSXvD1E4HMM3bvsw4oKxXp38CaKTAGfw4RUu9t6Ctppx17aj9Hmjm5o1KRWF8jvQRnZEonAREtQ7dpqS9ZJRVH",
  "key26": "HJ3CqBNMm3AUVjpLP5AHm2mRZXSEeKzb7bp4wQDJU3pnYtgSTyB871tAdeG8Tc4CjiBdYr38TcuHi2rQyG7KzTB",
  "key27": "3p3EGKsHTb242cgiBgU5iQNTstfXFQ9WJmuiEPZWxmCeGXE5ngpe16UBsVzgYQEiAmiHZqCjPWfdDTxyhiTXNKWz",
  "key28": "ps6eZbGt7xRc49g7BZXPd3NzFF4hRSHEcWEiniky99p3PixH9APB34GM2TweLEJ3XGcYnHBFuAsjzAbhPzdkTH9",
  "key29": "5y41oCbbiDz8M7ir6R3j5EJz3MTw8yaF5voiaJ3S2QM6DDRQUH6HScRE5hd3p9cbQNsWx9U63NHhUZnhN3e54HbX",
  "key30": "kt8a7DLLdJGkM6o2dGK273rTkueAF3pVThGWpVqFNzcr2Fj4RfzHQVBKc1M8N8q4vqQNthcWA9BgSusqgyEXBL1",
  "key31": "DjdczQbyLZoX4g2LGQ2PBnJScEryobCXE5dm82VqSqtGzVHr3FTbNgVP7tZYM8B7J4BTgMRzCzZbipXDPaxjM4T",
  "key32": "3D8xGUCJSGDrrbR6yT1hx9Eeg2suQweXu9SYuhDKJuXg1NwNuzaWchZcFb4rd17oHw5i1r9PG8S2k9ookmjvXvXA",
  "key33": "4nau3wrV7BrHT4a848uzoFc8yB5ARSX9Pmx6foWjgXsMdDwKKWAkVWu5mq3aHiyphDdHz1deEQgAy8yxnZbgk3kx",
  "key34": "5uApU8NM8oRAxv8MZLt4aZf5xPeNSGp46h1CdRQqCivUSfrcba4wsDp9vCxR1R3ddbpdYJF3dSK1ajL5qZ842Y98",
  "key35": "39rNGvTHZUoek1SjNQeToyysfLFnP4Wxm7H1T2nLisDEyx9N7Dp8EHZcAmqZvymtfF31EmTUnkZE8ZCfK7uFZvg6",
  "key36": "2vxh2qpwUABMCwCzPhsUWRYyCqEUV64VXfb6tDp2c75ZkALWbZzr3GfAtxGtCeUniQHT2YiPpfkKPNTQe2e5GTvH",
  "key37": "64Y3ZkBqx8nsjaSLw4c4Do4DMLNEDvLodNmBwNTfDFhC3QaADd1FyTjmzXhq1YBDZWw8mpqupnrCWEnThdgU1yuK"
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
