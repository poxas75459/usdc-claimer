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
    "HxNvaMj9Jo1MbZPhprYt9qVi46KZ4L565CQjbiWuDdMLBYEzhRhgiMtVAz8K1SrM7s2XNvpdB1eSFr82Aio9CTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjnh1nQvfscHmYDc5sRQ3WvNwi73oRKV4MqcmDy25MCTxxxBfz1UJzNosFevMZtKhwLi4zTHdwo9nH6SVXjy2Gt",
  "key1": "4Dppn7pRDD4Q1S5P7EA3JB3HL44ebwPf7wsdhfwu4QeneyfCgZbaeorymgpcuw6PEvgAFv4X3YeBoXJqn5JG2iMm",
  "key2": "jKJtpUd4VwhtUT6sS6MuUNAUWpUTo6RwWiFCFM8wjyuoe3g9DYEKZa6j6PDsHtDDqN9pioQ7GDTsnpwDWojcaDW",
  "key3": "5RSxyFYMAQJwt8nh4f1xCoEmdmtyhEajw81VwyAzcTZ9mvNn42qkdSpL1BQZKigLpERSn1cm7rX9Xu2ADfyL3CXE",
  "key4": "3QMJMCxtwz4Jp4doEWAm4xjBNiWSLXVVMtrjuykk9oybL9tegucHqCZU4XWLGWQ5aoiWA8HfxztKs35uVeqBNF9k",
  "key5": "3ZbBmbZ4shxDWHv5FPg3krx6pkiWmrKGDgK4xe1WHVx3im3EQeGbnEQ6ycfCDBTK5aJ91bkd8ESxu3pNV5DmnEEb",
  "key6": "3P8dG1nq9t5rLPR7FCSS7XpVStJ3TVTMkAPbNooQexCVHVPm6mFnHh1TkPwYH9GpJti9hETDkWEuGptaGuvFmtvG",
  "key7": "2RAKYtkvxxcXcUhk1qkPbywMKA4FHC2aCryzbJQyiposVvQYuYgKxD23XNa65zdBXbguW9eQndd4bvxVkLNTPYMk",
  "key8": "22eCAXUAeSMnDjbLtBYfTfDehLkqzBHEKSLsuatjasLNCwVQDD4G7A5ZDXKYBQeA2u6m4My66XTCXTd6aTBVf1DT",
  "key9": "3pzmZkXhxHnG5BGbWpcYGWfmkNXLHq4HZj2cCtH7cFy6FzhzYhYjByjHDsktUbkHcB2fKsfTkXhJV6H9JDp4P6ze",
  "key10": "3iEQ1bRf73B782REYXRxP8s5XWaKqby3ncpiaH7LRhja47ecyh76WDcCqD9sUhiG7zLeUdWEejGjNQi5eM3WthPA",
  "key11": "4o4QWz3HJq4zGZMqoB6iKCVWgfVbLDB5vPU3eQrBUBV6KHQ8ge69YJn2zd8tnmaGkYsqnRMX9sp4How8qG9Mpk4W",
  "key12": "2XtabbZDbKB2KBDWHWC3TKg5vo82xSwaRJSumjzS4Cf3dYrMVTej7gRufm4BJ44FQPWm2NatiWt5Gjt69jPLFekY",
  "key13": "21HiwBWAoDAysh58U67QvBP2rwHjkhHFNZtf211cXU2n139reH1M8gL4izzBLELnPY22fs6JqsBjMa16A1yamaXa",
  "key14": "37tob5QJNh3fkHiYM4Mcv46ha9WKuZwDLepC54KLJERN8VvUw3GoCqQJSjwxiQnuMfqR7QmGf2MJN6fojpknJeeM",
  "key15": "wroe7w8MtLZ8LhQzLrEJKp9bJd7LvjDvWN1XwTf1XMFmHgtsADFYxM4ScvSLxga3neUBm5JHjAQNgj2owf7MNR4",
  "key16": "3rL66KJ1ffYWx32Y5FTNsZq5R3svDH7nd8qsfAgnrwuATykcQwy6qQvvyRC1Ji3JjzeLwsLeS9gEM2TcE9kp4EYp",
  "key17": "oPK8dJnEUU1sFYnqZ5ZMXtHgP1tmb2J1VS1quzjbiSQrRRMj8amxhWaKWecRmmHikxBKd4jmt9C4f5fZQs8kCiw",
  "key18": "3D7CY7Q5FrXELQex2QZtpYj7jhggsgyk4QVMixYX2dKzW2Jd7BuupJaHfL6g8NgsmpgSYPAXKayCqBACYfnAWXnw",
  "key19": "2Tw9Zaw3YfxGZUfDxVLi54hppig1LDnFq2v2dupwWZwXwVZ2nrRxbVTinU4CEUJnbyR84s4PjSX7wpUAYoqqJ7TS",
  "key20": "4SXhCpV17F9KzCeEHVTxHkWZrZaBcaDC32iUBd9qBBuFhA41ov9ZBUbiPnHtwnLb23S2bLy9VjHbkm4PiHhPZLkr",
  "key21": "33e2yhyR12tSNi1irM3YuKE2AcakBR14KkfXXpU5PwWBH9KE5teQWKonTM6fPbHnySkHoXxA6X8GCSpqjhMRMz9b",
  "key22": "5aoN5D9paBks4GDEfxZALGmejrZ77VvA46XwLc5SkBweD8eutr6kgLNGVU1jAAxkFE5hmZYuXFJxsydeJVuNC6ND",
  "key23": "w1z3bTy9jDseJzBKJ26n98Vvng5N4WobGvbb4xGUrmWoc2RCRQXSTxa685Gf2YMq7SxpVc2w4iiYjmLDXKrdKNC",
  "key24": "4jfSpUEEedyAshwGg8st8CaAnYbL6AGXuTM23UXzdgnqeHWy5qUdJKtUXAZ3zCVfAvVCmffZiyDcSNJQGnkCFNT4",
  "key25": "2bpyoWXjTPJxqAxizhmu1hZinc1LfGUQCLj2iGfHMMQ2ddzavorEZyaTdEY2UdDs1RbL6VHEH2e4yD1gSkAKhwLM",
  "key26": "5vKLrbXGRi62MpPocBX5axWCB5vni8HpUahgYTwowSQ9sHsP99igpbA4oFgzbFz7RwFTsV4yuYSFZkdVA3in1RiT",
  "key27": "2UCRjoXa4XTvBeDhKgBWRAq7EvVNNLpKC7Fy2qtTdHdwb1mpiJzCH9h5Kca617N4bsdntftW7e1bTiQJ9BtJxAjW",
  "key28": "ftviqZJCtDKamYfjCjtnNiX8aoDSwSfk9YP1oSiEKQ2onpZenUeVrcnyGt5S1Bjug8Zuw6uhximysRfRD4uELY2"
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
