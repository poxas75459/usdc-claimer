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
    "5NWQdc4dP41DctAmwzWs4Loc2P8jP6nxKspDr9acjrRDzbSkvtvkLS1Fi4T3FdkxGNqwRrGj1sxJBot6V2rQPS3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dvRwGXFR1Fx533qKwUmBE7tsvZfWBRNnYfjChZRJBkbdkBmAs1cbnmT8BBnzKBUkCuAYhtjBCx2NxxoLTGDV36A",
  "key1": "3Zv2qy5zCiv2HLP8UxXS2AFtbmCZv1a6xuGSuVmn85LJtSwtJDqkGhwCgWNwRWywzXLfd9pRtf91Q2EDMubRkspH",
  "key2": "4WqJaqLG7a27AhZvK4aB2XuawhVRy5aDsgAZeYCR88yNVjmKP7TRi4FcfGqRQDCVbLGEvCcuaNUsCQJbK5dtWYBM",
  "key3": "3bX6Ma9iNYhvpXLGVKQ1kwWj3k34PbAvd2MbMfuDjLJp2GuvsFK8bDeLrn8mEtzidje5WQQ5ob3rsaVnqukwPNDF",
  "key4": "5tTWpPdS7PfCp2iXwdMdnYHam1owa54nRXZZCRbo9mwJEredwpcfbX4DivNC7ZjYE5udmncMzWXaSWGAU7Wk5dtq",
  "key5": "3Y8bvHMXggpiMyF7frLF7XhemFWxBnXteeoTz5Zna8Yye8JdgGetGQFC9gyexJm9Lj45L8yBdZaDCm9PKDYE3aut",
  "key6": "36XfyPNzRjXoM2ohQxAvwG64NJVxhLABXoehwU6sNyk8sQVUUnpag7EZPZTCwnXVFFjTg2uKDNcCda6TgPsQwHLq",
  "key7": "2U2ymrXQta2HE3aCykmoWwWdV5CiwKJ1DZQrLoFAgBw8Nkq77sKz4sNaodbD6sJGbJkScdbEmHZBUww4b8fzfg5j",
  "key8": "2M9vr9DHUVtx1Y3LuffSCg3oMdm2E5v9nFLkdQqhVXhon2kkQRjEhi1TTfn5WaTEpzKDqTbdJh4MwaMb4LvSsDug",
  "key9": "5XMHq63iSZF23BobjoRr6y4RcQH7n8xZxrCh4KvgkyAxM9J12jHE9kGZ6wEEMuLCaW6xesiyUPpZFTzz1XPJGC2R",
  "key10": "4GKDypiehqhuWdnizgwL9qRoUo4zGME4h9fHAheKQmjdxmpVVU9cAMbzyT6NEwgJHxxDJCofxWCZmTvaCYfrtPJ3",
  "key11": "5UG6FwxBJQQeXLH5pPau5tasN6Evpw5xUoyCWzJqDvnoF1QQg1nyGVtKhbuQPiNy22Ve54PRi1UYK18JaEwLa1VQ",
  "key12": "38mzii2DvFFEXRM4wCe2F5Ehk4e5JtrQHJffwJ9qLzyPD7LZXFqRkR6DgNsJesUGPqQ41GYYvi3GFJRQW87qumDM",
  "key13": "3Pv3ENxg9MpWauqZP7pQAcgeYuhHjCPdXSK5ErGoFjYYMWwCMb2tArMe9dva4AFBStZNVKBajTVq9BXnL9Dn6Px6",
  "key14": "2mjTKyF8evpbtkDB3vBBzR51eVJs1HBgFUeRkJ2GPRBPtLBPsESE9qHrnK2rivtGfntZz8dyTUHASEwK9SqgDejK",
  "key15": "5HSS8kpWR9dun3oLz3dTnev6C4aPG2R8xJYSUVC3ERHnCu7Z5piHQ1W1QeqqvQWf4SGMCQ9gwebX3SyUWV85xNQj",
  "key16": "2EuAXuh3YoZ1dg5aZnyg1CfQbkr9byAW2QMubm4QJi1T6fge2JWTnFFc2wGq8LUAvt1VTE9nvxiMiwNzgGNPp1en",
  "key17": "2rkNDunsqsaHh9T6Ha5kYs7aWKee88fGSpRWBNJFyrtTkky4ynYcTnjUqZQs5vjdv6GfmjajcmbYMBMxm2cSnDbG",
  "key18": "42CGznrdmvFeEgkPeFJUWEDFwpeVKFHwz53wnFTUzidFkr6W5hJvFpVEfvbcjsucmarpELtcMMKsaVzXWohLp1GE",
  "key19": "54WPmLGcTfrhUFy4m6h75D19aX7padF7iaVtWRgXNoHZ2dFmYkLd79nLqnc9eW4yVeU2LZFpnPrjRaLhzPoxwvQQ",
  "key20": "5LpCpBs4v3tHA3WwoyZaGSnJMnseGVVuCJgsmwKxsetZQmjZoYj2od7oFbtmGNpnY5AwyrTjqe5AjCXrWDvxdyMA",
  "key21": "5ehj2n6JqRhMphHKxEpJ3xiRR26G8ZgYJVYEpJGqMNA9ZZdHGD3L9G91isJHGGTYe82z7yJo58my1MTD4UPz1TFU",
  "key22": "5iAPqkUv7zfvKCR3ZS4d97C947Pb18bWSnfXEVG46WYHjntihDqcYy9r7MU76QQDggLwhX9FV1ibeQBez23AFY44",
  "key23": "2zeFYuE5TosCKUePvHvx9Fb2fuLEZ8aWdqFr66JuKAoJCbH1TrDf1MDbHGXX6ao7CPLeq6Wntj8tofEDQK974jFA",
  "key24": "C9A9h5zYsYe5pjkD6kweewFqw8Bz7eeqVKqJHYhzGff8byQwLfZLLhKV4sMQ5HZctDTrETQPZCF31gqc8ceQFzs",
  "key25": "5EYpQtR7Eo3zkkutm5TcEmD4QKw7CvHENrRuUZQbRXtGTuw1gTRi9BsA2JtdGtDE5xrcWWG9tYtLnxkxcet7xEHu"
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
