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
    "3sNzwo9tXedsMGmU4AVWR2ApXTWGVAtqmP58dMVp6wfREzKYvusv8aVEY27N5uZdsK8srdne4tTUgZbepFDVW2K5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rRKbQpyxsSg79AHgUaA7XFeytZGGv5dk1ZU72Xsf9YZQtj2CD2LvBcLVH2fEB1459U8oPqGBKXKC17PZXExBDe",
  "key1": "2dE1kiHiKWKnz6PYVmoCU25hQTsuWQ5xdmvuAtWHudbwL8Wr9AafcWLkoG2yb2tqNFyfD73KHQ841dspW8a2hMfC",
  "key2": "4wtChnZvkS9WG41h9viFjD43PyShkgTeDjhSoTkEiTtFPSkprEMNY3u6FkdQfYXTWdoJCgEvJNUDcM5QrfbaUSmc",
  "key3": "2aP888iPCkBsxVvjodxUhrWq6kHRRjSVHXs8kB1poohCY3DRSgVuugXE52Fm2XjvqSV5dX3EDFmhnvoeyoHtsvxS",
  "key4": "64G1szKrxTFicxEh9xwsRxmvEbMwcqejPRsGAd8v1x4PwFLMqSQwnaLzGhFgzwQEUKkzNjvMg2qJ3j4E5838oQEP",
  "key5": "WUeXoeYuKeW17WZzwDGnJHSGaTaKQJPXVRB4eu1DWmo46dg2BMutQrpuqJMRWGoN8vY3Z4voUERB2AQQePTNTQj",
  "key6": "3R1HEuVeGhbLs76ozY68SgMhqwbXSC4L9Ky3kYiZZWjPF1u4L5Sbrj7Wft7ne9oquB3QENKgsuev6bqmpcG6rdpy",
  "key7": "3T7SE6BLbDqyK7gpVPSY3x4cUJXQ9k9acj6SecE35QCwiRjqRQ9YXGjKgv9a6QFMx7SESxtyJNDe5eptdZ7PoUoR",
  "key8": "4fpZHmSvJ8HB15c4baXp7Riymmg6yyEXkSACMhWQyxaz8hmjg69uurxnkiiXt7yCsp8GZuNdbPC7XRgfn7XTnA6M",
  "key9": "2vUqFWdCf99UaoPx2NwJg2VWS62DwEY3dVsWEACYbpkV6hqHAgcpKaukDuSqkgufGqYTu7VypSPFU6hnFUY5QmPm",
  "key10": "3GEYKUCgmCnV7RDB9x6tJcVDigbTbaRJ2Zr5niGKzCGA8J7aFLzQCFk8NsutJBdmjijvMmtHwF4Kf9jwvwWPHHPk",
  "key11": "2vQB5QsaPp6ax6Ktuth2hns1hKKyKGDiKDDgYZCceGjffvC7EsoKN5BZDFnn7rxjrRjLwtzmZxYDMzHByzXsZeTf",
  "key12": "645mtPWWyKD3Y5EQ1KzLzNoESjujP5qHiQr5mjWtimNT2srS8xfMcS4hzVq3tmxtM6xS3BTGK77N7dTDYMf2vn13",
  "key13": "36Zx4unN7L6J4ydKt2Kt56bB4PL9HAc8QUf9UHvcHURnt2m5TxoUn3ySXw1nnffoUa4mSof6GoweK7pZjBx8GQCc",
  "key14": "3GwN2WZiqkgvjJGNZ9MWWmDEi65BvwLjTo3Vpu6nssyYKNwHAV9rJYtZvSavpowcu2U8KnfHhEbwzwtnpEwBQ8Ug",
  "key15": "2mvHY49FXyRTVuddsUv9ZMU1PPes7ewT27AFVvQP1Q4u9UT4jnMiMCRjcwurGkm2Ld3fvyiikpxpPFTSrKSgdPY8",
  "key16": "2jVtqod45bJ7SMzVWDy2Aa6WCCb7b1s3VSvfYV8CgpF8Nw2QQoMZeMhMdom7oUDPrWGxS1auxPH3FTv2sBEs6LWv",
  "key17": "412jnHzKpaGRPEfhCp54wiWNNAiayE6peiAQCz4M4t5rM7MXkUG3abkc1yxey8biKShoG4hztQTrTwZb98ZL4Gmd",
  "key18": "4Z134sui8ZgYxNVmP43k5pjw3vv3AbKVyEoT87kpDXLtoNbfRLi6GJXtq9KymLCAxBRUfPRYEsXLXaLfVBZp3Wra",
  "key19": "27BoscRbm8zpdUV6nCyRUuY6rGZMhswHnnz5VAjR85wpxU2sjYXWuVxFjdmCocg12xoAmhAFvkcHFNjxATEd3F8g",
  "key20": "5WW6AL8TBPRk8zKju2c76wWstvqwgNZVKHCNznPkJVzdNdzYdMaWawnQwhXo62T716C8ypNXefieGg7M6JREeBc7",
  "key21": "3ywRzaX9ge4Ls6mq9WagfysTaZkLkkG4UmCqfPnmD8DySSkbwhvcu4Bv7XGPQ3GitrUg9dABQmTj9Zz3p8DyFENF",
  "key22": "4YZuKCBxVwAT186fZbSUkmvhKA5adSqQbMmnDsZyqSgvqpmhi1f9rQ4Wxetocfb16hvUEwBKUkAeJT4ybJ82F2Cr",
  "key23": "4GBsyGyj74qmwVQxHrNbYRyjSRohs2RTyBbiFQiY3LfozgKbszZ8zkq73jcXZ5qcsAuqi7AzHbF1255tBisndnVV",
  "key24": "3yEV5CpHGvZXNW2PLJhdtSbNLPBQhUZ9UqSUL9CH8HC8wTMddtDDH4ZNtCsVhRaSZQbgGnsxvcgMvxGfQk53PW9H",
  "key25": "5zCQm127VJHQe8nhestuF3B4ATBEdKMpovpFwN9pjx4tk9j87TyhgyNLHLog7j8BSgVG1mLpBunMgBvR5JSRi68H",
  "key26": "V2sBWaUEZ85WjY84HYvcYznV7hcpWZuTfx2LCJgHPGBDsi7kWZhFQMhqatxSgcYXYKUQydMqsQQuTaiRMqvsPWd",
  "key27": "5fY5ZMnP4HdrjrnJMXtv2cCaGXSivQNeLgPEX3gP4nLevqbPFPC1rveKLq2TSEXxb591U27okbrTgK4HThjUA5aB",
  "key28": "35ivykx9eVkm24whw1S3sCoARjN5YUU7s2xGU3FL2fBF2PNhgvn4hzou2tFjRHMe4yDwY1qqswo3DEUjj1PpxUwY",
  "key29": "5e7esJm566Vu7DGgPCqJw7W2pdQAMbGTtYGNSCdx1pGkGgg1es9YGGa84p3x7Tbv73vs974RLjVPFyt6kwf8wyQj",
  "key30": "4eCdZZHQvsK1ZffVYDKBpHtkt5PWmmFwvqmVqJtY6GATG76cofQJVuHUWjMF8N9BC3DHCjdg2TdATHep6dBJACuM",
  "key31": "438wcQtNh7yunseQpUrrNNSLWxGTn9TxiqHkNmqjNtjWyz7qFxQrQcvB3iiNbnED9nao6wqdrFZtj44ZXPHUnpJ",
  "key32": "67doJsWiCbvd97WnvKZAugvJQixe2U6gPsukm17qKVsCAUUtJve5V9qLBPfhkSu2CzDmdL6psHZfdard3ZBp2sdi",
  "key33": "2SvLkYhLyfiWcJsuV697G3PQ6WhaSobJBvRKCc3eWSFPc4J6o28hfL7vjGY11jNxv2rsHG8KPDKXv952MKDcW4SS",
  "key34": "2soLGicbV6Efk2A83DszMZAvM87ZUENMnjT2BVoD1oPW8htk6fNxamy4GeLHkZrxYzMUVdcR5vUDwDL2bSzCeQf3",
  "key35": "453Uq2qurfZhLfasYcKWapzmU1xAutnKgJ26bCwq5jFQzTdAK8nDiDK5eZ9yBRc13jzY34coRMeKjZgNCyRjssHy",
  "key36": "XsE6XbjSLWrWAfTmQtohNSgn44Q4X4YQKAoiDrDxduoid5uiRU96FhwChffvTwY62XqKsGdS4Vp5YRCdszxZe1e",
  "key37": "3cx8sEJDvDtp7fVpVEXB1KeqZ8iqBef1D1HSYeVGWtCtCiJ7ozbdUgrFZQfgzyXEPFEBKed8C2dp8BdxSem21QJi",
  "key38": "5tXpEjDEwp2UTvU2jSZYpcwi7Xkrsj8AKZ929UGQ8rWeWsApf6mCVgnPG8Na4W13BetRrEx1Yz7HFhTPmhFVzTRB",
  "key39": "4q32hthvoGgKTEvJGb7F4jUDqDaLjhormTHduxRGvXqYop9eGC4n9x5hKky1SVzaS3MSPYGC6Ybmw53Z1di3cSgy",
  "key40": "43JWxtQ3L82Gumwq1roX7v8YQQHPPVSdxGQ7gZHKh1cA2Esv3YaofmAkiLtP5pMt46gmFdyunFYC8Fqc58Zd9pC7"
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
