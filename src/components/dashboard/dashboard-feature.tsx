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
    "39QDqx2epHjZwYteXCVnVSLitxBL13P7P74UrKzghiWZ4kYXKiPULNYNEirfgnPniD47WorcppGN3Gvsp1JhRSeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXE5qqwkMDK9ALquEbUpdWQc4QgQ8btifSyeasgyViixNMyq3xcHzCY7ZXfKfjoZXasiowqo8XJSvPHAnmxTCyx",
  "key1": "2ArQzH53K4qAn3pENqyC8sDbKLCL46WzrW4zN6m8nQv78J8tEFkF7odk1gWMTTFrdvxFTBxwnsCJkUYJRtL3iRoh",
  "key2": "2enmKvm6A6C11UYxLDNNaiig3jWfpPAUMHbB5zJh8W5dVbsSMsLarnPFjsckVDPHmESvkpz6uBR5TvFqDXeDL4Zx",
  "key3": "2eGGptJVwvVa83tZzcQPqTMHpHVjbQH7kpNDJfuNkoQXFKZHfvRSTemnFn136UJkLQ1VmNmTtSe2AGCaSm7NzbGx",
  "key4": "64KdpJicoRjxNsVtmQ7bQxcnMpJaK6s7Sjj7KFH94MRQ3figKc5TxPW3cPP42QJ8ckryQUs2j867fZ224QJGivyg",
  "key5": "2FitM1jZQAvbk7dQebSSbYre6KYxLWS12ckLHi6NqEpDcfjfUx56EDy5jboXGNcjzyf4RE4cuBAquUq7dK72teSd",
  "key6": "4irz4PkczKzP14PcMaFoBkzxz4ZtdJnLuhyDhyw75hriGVNcjQbpHq2Y4XJcRHwP1AM1TQv8kEftbuDY1j5LjpUq",
  "key7": "3b5VoaKFoTbgdAhhyHSVi6N3oJmSbWZoXZkbwnjZKjsTeELZKKXx5tZVPugcB5DFU9tHnth2vRDqupR8vChUk6Jd",
  "key8": "4AGNz5WyGntCqv8tzNTg2mYJyHwCPX3TN9xge21b6heNErCZ1Yuvc37dQg8pkwkRpNFMEKZvVZQ418GhtL7FYcb1",
  "key9": "3js7ZadMLGqAYYfUD2mjpYB9yb2j5Lf6nY6yqPynokXhaZydCtExCZytMDRKwsu9dKT3hBcSohgC4m5BZLLvMh9G",
  "key10": "5ug6CRx6k5Gx6MbtpMiJdBrgwQd7qrpwQQytwTFZRaBX8gDkyyEPx4cuBq6bSwbVR2D2W1RAhExm9nA18sNh88hg",
  "key11": "2hs4jfzHDaBNXnWKV1pohZagYuoy4LwQ9c4U73qFYZqzXsa9EHMm4kHzS3Eao6MtzoH3qj4z3B4nwHfocSKRrtzK",
  "key12": "3bWVGwfi6Qy6n9jQkWxfq9ooynWds9GLt4UUyruUK93KzXnp6LDB5x976MDZrsGZDfB3k9V3nNLxrHQ3vChSaE7s",
  "key13": "2VP6Dkg91CVm1RprDU3VYVpZ7mpHsnvLTLwL3rbQqTo97pY7nb2g1poDA9SpxLva61Zk8RVR8rDUFXcQqcYDdsLX",
  "key14": "67jJBoZzVeNQRfbcXqATNwoHKYEJme6G5ueuiwpScg4pGrAj5v6JALuNizbisinkhgD9jTZ1bPaXYeX1zJhLyVBj",
  "key15": "4Y67j6fox84Qeje4m8zA87VWCDLWS4kmJf14aGoQrm28jnbio6GdiFoWdXJokC7qpvanzrrDz3WZaZCBjssCFR8W",
  "key16": "3BJkAzyV5Z5sPFsc9jGPnNWcMLhzAXuc8NP1synawpuBLW9sheybCyfRzqZh4XtUuYRDPm27id4MfQXmcxMtSyND",
  "key17": "34VEprsHGV9mEePkKWhNEULTKCH9Y8mqsGec3KA5yvo15dbMMqdH9sx3dFamkBs6NMgTs1zk13Mf5z9iVjaMyoxb",
  "key18": "3SmCbW8qrhsTqWV3atGNWej56xRMGm5TFfY2Yc1Px5UHN4XodqwbUDvk4g9x7cXvdZbPi42zPunaZRP7ZamBA7Bc",
  "key19": "4azs9ho8wXXYocYhgww7zBWqhPpZNPRYZLahTeqQXZSo2zBfVW71WewLJanrrJWz7LCTicyuPw4AAUc7TJyYEten",
  "key20": "YE7cwHUvFoMxCN28EpyhwHSJLRZp5LhZ6vbTu2y4aSPeMXzD1kCLJ5P8jP7FDxye2N32Hhvp7uy8p2ak8rDayw9",
  "key21": "ZgZ8BhGrHWrV2nbx5kHtPwRp17ByrbEBZDMd6gB2bMMvmLc21kUcxEGmxQHiqqFreEpvnrVF8EaLdqHBrawSqWh",
  "key22": "2wbwMWjcDXCaFQPpgSt4YtiTpZmMVg5ciDeBPQ6rZF2Y5vyoCJqvuTrfbbr5t3zbAq4MBqyGhzx1oToWSeDWfw37",
  "key23": "5HDe7cc8BnxDntRiuhsjnEUaKiPmJyfj9Qzn6oyDj9XMrgZU8p1GtzjK1WyP4BpMkcqMYX7QCbNEgqb572HCpF78",
  "key24": "GveYwU3g4rsZ7p1izNUR7QV87aWpbgsLnrCFdhToqFQnECzpTHrcSUTwfSCwWrfUCaXVvAT3Yd4ygSKhjDsBFAV",
  "key25": "nLxutugMtC2eL1ez3SXR3TuN5nXJ5PSuD9EoKmmsBB8CqqfwaQ9TTqjbQzC7xBYbtjPq5bzMB87M7LUYNDLz57h",
  "key26": "24cmfAbniLuR2YMrrLu9AtXYK3Zq6vDqpgCmQEvTVEWXcfB5qRYLtqxPKSta8w93bSN5Uv4n556JtjcaXjTwucxE",
  "key27": "2NeUj6fxjgdTUUKqjty4YHY26mREbyWr8i4VYJtCnCfpC23aKPveriYzj4GtoKwgVkNxv4SYuYguDNBRqGvFgp3E",
  "key28": "2dcocWSgo51AXjQ1ydsRtTqZ38Pg7rZTo8RVnYWK3dJw8xmp95M6LQdTirp5ewt5HWpqnfYNQKZEFev67ErkxbQz",
  "key29": "5bJF8LFvMrVWHFUCYSeavK5EFH2QcnqKwR5BM94uY645zX9zx6CYFcTnAHc6wFBRBw3hSnvLGrokdoJAJyFpGTwf",
  "key30": "2ovmWphAUZEqrvEVrQfDCHRs3CqDf8CHbFMpEQ3gWexfr6uPWgQymvXrhxcJKRKkkqSLKexgsnbfvSoyw2QqC6Fg",
  "key31": "5eY3vJqLGdE4ji3Jqdz21YHPkUFmgjdxqLcbm5owgkVrhZGPwzY5Ap2LE6Ys2UkV5Ue7uT88sqhRN657cKgXvx3r",
  "key32": "2RrB5Pk5TaDvmmkqDaEGEniHVAxg5itwKZ324od6rgcZWqzLGhF9ppxhry9oN2q6WcycExVsn19yxk2UArGHoV1g",
  "key33": "49YAg3AtZ1jo1vnWbSP5WfJEa56Vw4DAwuaTQJ8yhrpv79M6D7WBznxxDtQnPX2RU6fXchyVqeGgPLSn4qpVkUjk",
  "key34": "42NTup4z64aUa62BL361v8GaDf6GU4QMJL4g7BM7zf8eKmPJVGcMcB5X3V51X7r6D54WGyXCmnwcXihhn7gNh8Y9",
  "key35": "5Z21jWWZFTJcAsKBgopiLhpMwnAggREurZJ97r2PyDb9n373aTHUXinfgMx4sTrGwevWiZFS4DGFZ5gRdCEahW6Y",
  "key36": "yXFUKS9C5xFy6nf9e1apJSc33ENGsbPXTTFaYtkTuBf8ykEan9xhnBG65uNcoq9gFMrN6LueoKqvyf2VDkKuwqt",
  "key37": "21pQxdso1yCDSBKXG6RXodC28xjzayn5KY3hRjnU6XF7vyE1W8SzPuE2XV19bwex7rD1GXBiE2mYHxmH5KQ9eMU2",
  "key38": "3QvfyENYAGFhi23QwsuodxJgR3WHe6cZVsTkveESvFoUecbd8BQUmxfB3eBrU1jqgRqSnGDVc97naaT6uArhZ6Sw",
  "key39": "DigCDruFRxJxeD7Rzdsaeusgp2Kw3Wc5zXPvFh1GRvvk4ya5MY6cfqKEZSRXQmc9bmjxzPMnDKgDWnwkfTG8yoT"
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
