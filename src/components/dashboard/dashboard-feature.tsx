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
    "5axdgYhgk9qMZjTMYQLytGme28R7rsyY5PEybg9J7tho54yaXg8j15McPLgBPRJ9K4NvYWooYkDs8rY4oiLj3FQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ffjyUXZ45Y4E5DiveUipSQZjdPE8LuJ4aVuks2oWJD55D7jiztEep89NL365PuT82JXx1XgZP2xTMwqEDFU29t",
  "key1": "3XyCgU9FjCXQ2EggaszCw9jm7A9ZwGNPV9GQwUALXdTa915UHWxmhPB1RNRxqKr4oG8fjC8iTALgUFrTRZKR8Eav",
  "key2": "3fvQ8npo1udTcbo718PwhKS5DxJtauUH6GNoxbg6uJ6uW2C7hFXRnD8uq3meybjMwcxTj3wgXck3ngpwkeF8RHTe",
  "key3": "52JCVa6TFDYqvA4kXDagVntkpMnDQca41eFouxejKkZJBM7mELLZBFKWPb32opUsmPQbjHphTT9uxCJjSHBJDoi2",
  "key4": "5d92AWsec4n9CpU2mTNHdKdoZQKTvQQdFMZAdHkSqpABRZ9uxuMWKh73aKzyDEt2Y9KGJPqGcJxxECgWvP67ittm",
  "key5": "3iWjawU4mZ8wapj6F3W5xMcqYyrHdD3tkfpZvNc2Np4zGswtmdg7HJjKH9KXR7HLQfhiXKEz5yk5riWU7b7gQfXY",
  "key6": "2VLdXjwhVdXzHaQnwmMVE4KytuQrNWSZyPzsWM7jjFG4ekEqJRMpnSSznihaDvECZ3uznitNzpuDNLLMH5L49XrA",
  "key7": "dhTCAtiUyvjVV425MxQS1492ZUsuW65NkhtrBJqxmtMR5URBaekGrd7bzaSg5obyM6mXibq1JtuUo5bydk5MvkY",
  "key8": "3TyUFCunQWHpxX91XBKS7AbFtxqdWUuy5z9d4m9aqv18rLZSS7ssr4nAc3AN1XhBX3zDov6rLxKB53cukVfmGeZK",
  "key9": "2KbNWqLWPNEY5MLDxjxSsVzG579quhVBA2DPFgxKydNV4EroHqsmoqAS9yFdbiJUCSzr622MqxCcqrse39mAGA5M",
  "key10": "5Si9n1UCaQz958Lp77XjBS4XfZsHbA4Kfhu7xPeUsvZe8yZuiBGb8WxrFBfuwZEWR12njKjWZ3f8C9rM5VQTeGXy",
  "key11": "tfBVYfJ6XLDWp7sRa3CBpD9LcHdY3VSDf4MSDQ5G2UqTS2e49gP4tuNay4GizCYcwNhRoeqsXDWS9zH4JnYF7r9",
  "key12": "4pFs4vAKuQ7jP8iAxB9SABCLQczgmEYxo9KWVLsvM7PKCNHLwg7Wk5q3f6NAsqtC8RppDia8acyxUqXiexyePJeb",
  "key13": "3U2Gps1dTRkuZAusvBdf1Aci2cp8MbYKSDsouCo3Eo2VWMt8chQR6CvhobFaU3TtPu3fPtN7bwqyMQtBC42UcRSw",
  "key14": "2rRvRPpJHaFhKtrMLTcY7w9CBASDaLgoDxA9F99BqLgpugDbDeUYVYJhWmSmmNPCQHhmuGKaDsc5jAroXuBAMyq9",
  "key15": "5BwZZha7ijbw2wotDLygpew7o68BYW5We7YrTkrVfhWZ4MNc5L8jUxUw6LCY7S1tiagWaEzfHBKedRt8dTVQrhcs",
  "key16": "3GNaDt8u6V68ajWUST6FQcQrikfzUe16cbYg7rQRjXiSb5ETuU1dT5xwgqL3dXqNcE8SY9F9DcYSgih6ggdAwVAX",
  "key17": "2NFQESxURG4At1yRQuHKbkDBS5eEnTvjGFRchfcXo1U8BmfU5d518ZJCuwh7eQgc8P6FtTjHJHNrU55Li38Tfe11",
  "key18": "5zyRDqwFJS2BMxhYDEPTFdaoSUa3D1huyamtNaRmAY4AZLqn765U8cCnkPwE2C4vYBJWg61X9K2WvKYGAmGsMTai",
  "key19": "5GRy9kGXgCuon2BeBFygCU5f2PMGZcai8wxPU9DjWZeDQWXYpQ6VVvFC5hDtp7u8GHn5TTHTdF3z9qZuDYMJJ8SF",
  "key20": "2sgRyeUh3znMSYSU2RgPJ79NXppEvtwRH19EgFEFJCx7x1BdRMwUoSbcqvnZJMp3RseCbFuwc5JqSu5C4b4RHovm",
  "key21": "2PHsuUaqwW5ANMxEimW3BatHTCcdP7tnvjRhnwFfuSq1GeTBggVEfDNmoKqh2ZtQyxNgZm75oxTwwgECV8QxMJBz",
  "key22": "3LHsfbV6QdzPBs1t6BjEpRe38zriFCMjAjENu4oMgiMuE1M4L49Rout5ModviD4NzS5ntTtD9vexmPwpY9Xb7fws",
  "key23": "3tJ1P1B7cVACsmki12C69CwUcFM2h5dqaZovkCYw9mXm3sSqmzdnHvtHb7XUPNVgPwSo5tGbyGaDJxp75niYiUuN",
  "key24": "5JoNukPqcyMZpfAR3xMwznfzfTTrRwnmgUfNtmu4Dg5iWutghCUGXB4AYvUjLQ5ZArgDf2qt7R7dpANka8Xvp19P",
  "key25": "4NdWNUQSd7768ecMb8BLr3J4BivLggr6KGrsKF9BdGipRWi5nuFa2iu1XJhT54cZezbZk9s9hoJMHU18tk1eSCGf",
  "key26": "3zP7ozVGyBSMZ5Qqc8A4gKALochtTNXCtSH2ZWgJG71HtToQYBrP41ZYMa7Q5tS5TaAxxm2f9vGia7sXZWqDg6aB",
  "key27": "3xz6mXKwAzJNMEU5vUJ5AStcUQ9cxHfwUt1qAxkZ7Wi9nM4P3NsVRpAmKZiE1Jk35x8G2Xkvu822CDUhADj9V12n",
  "key28": "3axUEZLEPUeDBB963PoVWr7YRskun1x1gBxerugG4R3SftFubA8eAxLjYMDMJ6j4i2PFesuP8Fo4P31t1SERnBYg"
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
