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
    "wy3z2mVTywdAZMpirCRzFPsuDde8CgJm4t9aYmEFh1chrJWoZ1Z6jsyrpetgCxs2ycs84TxWR4viy5vF1h2KERM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aAEtNYarJteYFStChiQb2LtPbNMtRLSoWL1JuqLQ6Lr5kXYxjQ75pNftxTpz1JpnSkx4Lc8Qf37NZ1sxRTNthuQ",
  "key1": "48XPJLiJTmcWnCVqprrUVdiGs2ZFUWBuuP5rA43E3yeVdMeYrZrv6UHbYqvXwAL3dwnoh3WZMiu9vSXqyyMTyTkc",
  "key2": "2CYwdya4XjunCVqFctZ9PnwPgjLdVARP1seCeKbfZ9NTJF2h1NfppMPkGhsSASm34ZtEy9pouetUZqVug23vGyog",
  "key3": "3PtkBHTszxwWoVF4TNRbqfjtczESYteCjrHn8BMkceyMqBk1WtnLaNzDJr5k8bMCznwBiPgTdc6cCE4k2mqcNUhj",
  "key4": "5FhDXGMVBxHnUMRRchxUTSxrnP1bZmMyoqeemzst5mAQEEKbze6xJa41xMuUPNXBUGtjPmRrmLxbGHhFf46Cbvvg",
  "key5": "4wvio4CbiF6vwPZzpg4pTyHYCYa4QUQNY9GGXMsMAwuFqTKo1CUjyooBD5g1C3upUnvjKLdJqdgbR48rvaLG6eb6",
  "key6": "36hVN6BBdfEUuQED6KxbEzeip4AZ2L6qYvk6HShFHuVsQJsQ4JU9t7zkwCDFbm8XYUJizUK43JsZ4yPsQo3xMqYT",
  "key7": "2sc6zQXVeudH6bntK77o6x1hg2663MxEyXCaPsnvGafCpzPkBP5dFYoSSybiYGvpKEXWMRHrFvLLEqLG1ExtUV8x",
  "key8": "3vGNGtSX8tvfMvDbqNPodGCvhWpoWKbnH53QB9wSGgBnwvcJhJ6sELskSmkxRzX9y2trdG4xgJpYKUiKtNJSMXW1",
  "key9": "52fQxwyGktJNvZFqniQvRCmhtsrMx3S8xMHWZi1FRFNCXC9LtnJPmD3D38y3dbTjcLJ4wEcb5FUZnWYZoubsqZtg",
  "key10": "v7xejagS8psVLyswisGLt7cYyeX6nxhF89BquPK7N9qkgEDFTsq5dTPJaKVR6uEBD39TUCsqXG8zuWip7LtaFHT",
  "key11": "2p2AGvqPmXyFiarXb3K65uG5ovKEXDrpFPsuwe7QTYc1qgJ2DnfwSrQdUtXmB7Jmkr2xjCqdz93aRW6K9iZD516i",
  "key12": "3kqXRZoGwQBn6oX88Vi2jDK95xWodu3Y7FyPabgnbDixkwBWZW49r97A8vYGbK8gb79hSneJxKhP4daYjvsszueq",
  "key13": "ecxy9Ubbh4uqnxyhoTsVPuoMxq3TVGcsEvprLzSW62qTSkhJt3u41iXAAxHVgZnipbQHJCUPc7oSSxuGJruzMgP",
  "key14": "3mrU13EyE8YY46RFcvNmRpTMkocdX1afSb4W3q88akDTvvKiULwqB5SJXHumXZ7ATr3PKyGqJ5zfWjeuGEiyVyMa",
  "key15": "2nJVpUkdQjrB4Y97pLJ332WPxv5R9YZJspcWU7z4fHAkcczvf5JoKsFYz1nGuGyC9GLnzT1dtXPFwa3VzNpXeske",
  "key16": "2EwYmMS3uxLK1PPr83LyuAkg4qChYZHZY1frutZDwEmVnNqwxZnm4ajACMRcUAGhVK4oqbKrc2DH1c2R1vGZDgnQ",
  "key17": "3wavgXLtKtieLMj1LnPvBN6iJbkZxaFjEdeh49VCGAEaTroo8sgqwEVdPZZtSX7pkgq4NGYJ4XeUBn3pYz6crm2R",
  "key18": "2d4vy3tEovgu9y9wZbWAxs8ymc9dWKEEJ3fdRoDzUhMgspwjFT27kvBoMoC6LAbeFQen528p4ZHGfvuoDSeFNQKU",
  "key19": "5MVBgfqSGXs13cL88qsNGiSjAYfo85usVfwUJpSb9JM5kShE755iTLQEKk4UauRVfLBMvjsQUjJoqha4zQW2qEo4",
  "key20": "2WXgwivJzsRr883xTdqB1gFFyrFfXHJXXdvjJhW1yqh4XmwmbnuTjX2DJHFQ8xHff11GYiXxSgaCHCQPX59SYsHY",
  "key21": "42P5Q6sNYxeihRWuRMm4MicedXzybCL1ZuFXCqhJBdnLCeqmaqajsstry6aSK12xvFZejA6JVnSS9P7aq8Ggpa43",
  "key22": "4TAGVMVL5CCmphZB84BUjCewYPCEvgyk8ucn6U7UC8UPuQEFhDPpN6CxSKwYRsTaQc6ztHtc4xR5CSFZf6R1p6Kq",
  "key23": "E7SzmEfCQmUpK1hWH1Y6LAao8GjyK4oi6J6V8wLCGxva7EXupQddTAY8iXuQLqL2gWXRSZfHEBNxFy9FcUaWf9f",
  "key24": "4qdccgJa3YzM4guC3AUHisWyjTQ4aYwdz5p3EvFZubcAwMvP2Utit1oaNUDgAgi9bNwyonxgGWP1Q8tbUZoGWw3Q",
  "key25": "4q9HXmJHPnt3fjRLtxFkVgAte37NSHuPe3BPb4FoDfLEdxPW46MzgA9ZZ1Ar71fTu2HJoo5Jnj4JrQAc7CFGno72",
  "key26": "3y9MFJJMVyXUtTgWauxWXnFwnPAh6fXbQk7xSYhWpaa6E5GxeA3DxTjoswa3upfiVmdvTMobskC47v1f6JVBCn9R",
  "key27": "66Mzhf3HAeMC4vEX1qxWA3E7We8smmUyreCP3YTLeJfWr4L7FzPEn5QYVZkGgSDkgvf6gixhmgcKyw5NTeCrCSnB",
  "key28": "553pbM1fpCCN2pC1suxAK9qeWoCR6sxYrRjk5PZLEP9MayKEmAGXko2ZGGysSobKpb38pnUW5gT4wPHxdeHD4kU9",
  "key29": "4KKe1ETFMpNEC3xTvzi8BvNVw7oHZZ8JUQgZH2eYcX1A18fcx9eYgwnE8H7sXNnZsmGkD98q1MGj7BXH6jTtktJw"
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
