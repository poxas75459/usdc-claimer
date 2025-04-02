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
    "5Z5kFgqc1Stvz5QUXGAk1D8AQW6mzDC9Lsa7EjMbDJTXNsykeE1BXPnZRCYepsWva96CbJK1CPchw8pkq7tCfz2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51XNvzUZHwcy8Ff4VKcXG1SN59YkfeVaGyfqsp6yRtQxuFMJMVFZcA1KnQcK87BE9rfyxnLhwXBAZhdg7GR8om2v",
  "key1": "2Wvzt4MEopAZCSxWCzYP1FVjrNucVvLnjzCysjnkLFzkSVhKnXxnWeqvPqAvYZjbEtTV2NrEbrVbieHJRa74QHVu",
  "key2": "4uCJtwVCWQpF7RMnfHitk5V8S7DNzrHR5WXh7emm3ZkeHRSAZfU2tptFv6LkP5HPUSvYnT3Fn5cwffCQcxVn7Dcu",
  "key3": "3MSNNXsm9BLLMRM37JkdC361KBiXMFjFBuJm6or4rSV1TSv7FCKDpScRQ9fxJyZsF2eks7tvn1A7vVBNXxwMRTtq",
  "key4": "5sFc6i39UQA3egFWzQLp7cEyc5A1w6DyknunkwMmu7Xtj6ZcyUk4JkpKSRcv17Q4LnvR5SUCrLgL6v5X7Z7nmy1s",
  "key5": "2xQNjDgkf3CpN4GzwGX2HdfsGqFmvRPmkMb96tF8xQosRL1QqD3XL2QShMGjd5EwkEP6ZL5QXK4QV1Euejm8Bxca",
  "key6": "gU2XJrnS9KHPWJsbBMM4PtKKfQPjhWd69zp7UjSCKG3tu6MydHHpQvgewGkByp5LkHcjn9aDZJJSZmGLSY7FffP",
  "key7": "TCJ3oCNoiFjn9mzuc5Vk5NRiEjYB4dFFxThUUtxFtWe3px44Az6THurQT3T8f8Luupexsdi1uUrqT7eWMaLRuRt",
  "key8": "wnQ5fQVZZVmV5qin8rAp2QpgbCpX6DbtdzEuMqY8vy8tfGFxRTBTeX8ReR8d5PZTGhEfkpcWWX2wLFfpigj5RGL",
  "key9": "hCXDzKY8dNoAe1oWyQiw4ahuJZh7tztiBb4xTsbBugBCjh8pkUqdRWawFU35RnK2Fc5sBQkRLYQhRD3QKo5LEYq",
  "key10": "AF1XPqQ1mPmBaLQ43Lja5KYscw7aRNfaY4F3AXNKCRs1RTezxue7T5YrsWZ2fEgHwgYmtV1fpPf3T9fAPnc714C",
  "key11": "3zgsPisMF22PwqrviyiwWVFusKbvk1zCVfXy8haiYutD4Aea6pdWSRqkTA3poFX1aC7UNbkkVce6qi6M8wmZKNJN",
  "key12": "5KP5K1LAiA1QNkTGhz449gDqDeWMmh4CQxYBDiHXUf6LcV9bcVNniGGo3LZGcbjhKepdfKwKgQ4trgbw28vJDF1z",
  "key13": "5ssDMxQn9ffhQ8ejcJovAgz3sXEJDxmb5KFG1g6UUa1dCgtgJshR1xuey4mY6wL2dyMPGt4jKAgL3uPeMWLrZT3X",
  "key14": "2pPvpvb3R9N4nfKKFDEPpaAKKyCEBsmAFUZMbYu41d97BP9McFPCuHKpFxsBaiXgAYNVHadetGPiD17fy3tF5b9a",
  "key15": "2VmNxqoTDSij7oKyq7Xwk5rwFiLzUVP23JE1AwuTPYVXAPzVKggZHZR9k1Nz8Kk4NdPmPf7cKHFqSvfUPbocx3qG",
  "key16": "5BMoCDMnALpET5rpnUbbmh5H7sxVLPdXRqj45Ad6bQRB5pAzCTRJ8UjEhRDxyMZ8MHJUAVC5A4HSET1bNyjJV2NE",
  "key17": "3cUGev1riL4iiVPfRcCzezMykJdFcpzQXsRqK2hZrtBt1MRdypMrZ7M41bJb7VFDh3qVQG9AJWBy4fwiUXfx7svL",
  "key18": "4uu5Q22AmKSGcUy9wHS3My8S2tNb1RYmkVgbmN6tsphPFj5hHxgu9ehrbFqrAStLgqx87VgiEmjRAvpSdX5DcBrY",
  "key19": "3vv7DS4gjpsc9SG6ymZEqhU5DNUwXrQtQyCmq6v2Ztdos4ccdbzshhXHVTET6ab8qGbaf6DjBhnLm4WpWEGGm7jP",
  "key20": "4oswmYWan68dDPreGeG9hWaniBKezwcjwyUGFfL4dAN3MU7JoY8mmWKowCCUZK5bFnyQB3haUxwiENfehEDXZTgU",
  "key21": "2cKQoErCG3Dhk63SuPTThhKGYbUD9gtMo3Px21iW8BHQggnzx6cnnppPrAzA9zAwxno4FYw5So1qqVFLYzN3FkFG",
  "key22": "21QJxqZ7Dutc2W3r48cmgEFvQGooPPpHiZP2wqw4gCKZq5RTYHaqyFcwTgH7WEwf3yi8Zkf3XKYWGjoEHGy9d84b",
  "key23": "29dSZ3ajwjaKnC7d9511kwMcNignCxtUyByjLzkLKuQeTm2mzQzNKNqMHMxk8HCNMJc1L93mFjXwJ67G9hYYHQam",
  "key24": "3BfZnsV8nzinU1FYMJfo8h35t8e24fUeVREVb2YYtLK7cYUoqAEytKTkNGeFtX33PhN94Hn13dkHDG52yi9xSHB6",
  "key25": "4ADvJiYJmKnVVHgG4wa2h6bmZL4AiGi9T2TwdajY7dYEfW813E4wtrh4AKanyb1PPsK6k4VcA3mMkTRWTq7bEgDv",
  "key26": "4rahMGSfsyvaudZXc9SZRiZQSWRHtkrykNSQ1coS3cNnwQRuqS16sgFN4REsVzyqBQayFQnYSUYZY5fNf86c5RuB",
  "key27": "3Wd4e6Ry2tRmjfWZttH2171BAaofZ112geRNiSG1EguGWAbHBxNq43gUHzZzfrMaEzLthk7QrteW4hkjTQ5vxev4",
  "key28": "2pyxS4Rhg4ZgfrhJSJ7YhqPfgZYLq5S5Fmv86HJfbrR4QR9d9GbAEE6okVcxSMxzzAKn3aqebvVRURbXe9nPQnXb",
  "key29": "2B4jQewgv6PmDXLzFjDpdELpgdM19AnFPntUPvXZtobBZ9GomVRmT9Wt3coRCVBGnDCdzxDuZxr2uuQHVs7RJ3rY",
  "key30": "4spmEkigbzhu18t5Lwm9NeKWyVvBKfAnFwNNPt8uSnKQG8VQcwoc1kmNaULvyNy2Zh4HjvhJ1NNsRnLWNet3ApkT",
  "key31": "4WbznD8J3DeWCAoEJPdbeUqzitwdcdVGpFEn1sWZb7TW31kidKB9Kty6RjEm6qqPZZ4g6PaRTgCsBEd92Pbw1Bn9",
  "key32": "5d7E6K1xqbryCFCA2DBwL4NywFVB5URrn3D2F3GKdiWFjAmXxv8nVB3bjrimbz2iXP5PdcJGo2ic2VWkoNXSUpaM",
  "key33": "3qMFYUtQaXEcAgucuuBkzAVQC6TJxHkEyNfgdQDitMxUYq7oBRFhKxkb78p3mnrCA1ZqemQxghqGXLXCAVXRrK7S",
  "key34": "4sWD4R1dsjinmtbj7vjTzLzs6wu5KCTjDdYHSMPPEti1vrKuujhNoPSxEE2YVSHfWTWugad1o7p7BfLk6Anam6Pn",
  "key35": "5MXFaCpHX8ZyMza2HsGp8oYfNm7v1jzsFfNqXtxWSv8mCuQrtqmqrdZy5zoDR9wE3LXbWDtCWYbCdZgTH8zpjjsW",
  "key36": "5VABKYSHmeq1wwWEqMUJ62fvcxVeD8TQDLgGH89qD7z1sc8cCXmz5Fz6fy2DKe2DNmZMBsDQuk8TS329pbdVewPt",
  "key37": "2ehdjcaYWhDGs1pzAMgYUMDHh9HS6spfnSVTDf6cq7dxtzXcqX7DuvTopK2fJTbwLbgQCaypM5rkwQAU6tH4nSDE",
  "key38": "3NSXkxXEGrcqYkhVfLjQtpm8o99XCa3YjEHxHjZdDE48BejWGNdxRUePYXoJuGLDr3Zs6xfRUWdYtQ4zTisiPhk4",
  "key39": "2yJertPqT9KURJrZuL8ptoJAn9PHgzG9BMcBE6bVksiEufLg6fdW1xb186XEnXpQ95vaeRgFYs9WAdTduJGwcuim"
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
