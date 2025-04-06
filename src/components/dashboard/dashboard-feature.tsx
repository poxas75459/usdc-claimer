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
    "5NKWhgxLwVhbHa4Dc3dvjDyAL24pXjJTvuQ1JiBEwgzBwyDJgurW5muwL44Gpri3nvE1KEQheaExk3ak9yizYN5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BC7XE6mLewMpaE5rVB3TmvLGAN3aoxjJrxedftzgoH1MWYhEPxcXGoWaEJz8DgQmQ35yG5YsKwGWxLsRbf4W3vA",
  "key1": "4mF832AWUkdWSxpaevWvtvohwj8QU1ZWxLsSbJLsyEk2jxywgokqBKeNZRJNtHHGiGggKnMBCJprruMRPCjgZuQZ",
  "key2": "pPH6XxHxiyWMNa7XvtV5MtezMgNLsQi2wwrFeaDnr7WkwK828CTWFUifSViDLVy8jTAvVX2iRFXSZZYUdx9NSo3",
  "key3": "vnmKE6C8CX5fdKkWbujZBpcNUVhKytcjggANKZey6YVfzhJSRYXFdeMuUg32wR9TAckbWUnbS16znCvicASULvY",
  "key4": "WiX59VpmfVUZv3PGiiL7ChRoKfYx7jsE3yvxrGV3gykBKrtM7ykHUk8ZFgo2pZaNKEb2MXiS6squDiFg6vxdgQE",
  "key5": "4x7T4WWHTQpPAS1Z5smQygfycfceabw98ra555ZBBZoxZKsQZt8kmtJ82WCy2Eu5ZCRFAaFrsA3psDE2Y1QwwFLM",
  "key6": "5cUxwQ24NBG6p6gJ9iHhYpuykss144ayDdbhCqwMJv8PCgNcUDsutqgnkqHuXrdvgSXnL47pfmD7u41grRwMuNgq",
  "key7": "3YhyqTxc4c1VLB7oKogcbiDyUYM3jeeqXAEGpkoVTYfnFsQHjV4z119YifNgtLaQo2yEjvmA1qXUKCSvHupTQ4x9",
  "key8": "3XwtuepgfYfdd4gEPuqcoXG2wNnKXj2c3rDJ1fBAZ31innmxxXPsEQQU72p9msUCnjHsNNejNBVcF35p6p7gfNWj",
  "key9": "5LSVjX7FA7aWruNWFEDV2eYB8aemPANsvxdXRkeVsvJtuQdhgKp9KN1uXMBNADApWH998vUXSDUrtP429mtgmPfN",
  "key10": "4rLH6ULo556hjokt8Z51bxcFSTBcEZgMHxB8jGDkSws3qHBdugDV8SoMRKPyZmtAVf5x4CABiSBiyBGZaNNjc6yD",
  "key11": "2cDZf7sgLMBLmAmXETazfNk3f3Cy994eJM75T1oH8LKp4ARbwNGdkkQvTRPJmGd6t85w445kKmZvmwYZyhFbwgjc",
  "key12": "2cvsD76eX2hkaG4eLwQ5h5qBpWwN4oqsMbDedn6b3unXKSVZ6LM4QprrJhFkPqNt25G2wVKx9exzfE7ZF6t5B4xN",
  "key13": "2SFn9NcJWzr1sMqpbYjXym6tXefZpNMqcM2gAfK22bZaQXetcdfrrmeBm5zYh8wdcviUgyXZkp6jtJAtq5qQiDMd",
  "key14": "jpq7fq5D9z3HaTp7vxd2CKiBL4nZpmTdXSGq2uHdFqatGBexviRpzGmRE4YdLiUxHMBZn9Abm1mPeCoJSCgHCmS",
  "key15": "pkJCMvUmkTxGXsAyogMiWHAPXxSsCiEajcwVGbaUsKfibaQwwr3FBsMcRuy5pcdVU9uvZKiraVPFbjjZUpz2dK2",
  "key16": "4w3HH9mtvmRzCABDhsWgmqE4UmrofgUJdyodcADCH4k5zeuHTJWnxoLdEGm4HK1X45JPpvoGpKD8FHdKnELAYGG8",
  "key17": "3Gx9MAE5YrxJcFr1SwYL8MfFegbkJiEr9WKyqgBvX1Z1co1HkdoWd9oDfpaSczMcdpbpz37vCHMHJiAYn7wemc15",
  "key18": "3X1sEQsz6okSEfsH6eFxf1Bk21gNXmJ4eJ9bnqXSHQGZr1y2aa5Gpmy4b4r3DQTqmzFoWEM4rwB1rW7PWSbLPe9a",
  "key19": "4qpTUyRGj68ejKqUyHyzBxpsP8omdmjSWc5au5ZhXaf99H3LmYGajHa8opqYkVYpzFMYSdNSGLy9rDXfcgUAo9i9",
  "key20": "3VwJsZMY4Gtd8YxzPBFa8s2L7f4wTUkf8NB8ruTngbaNmQkEihyqKeFC6hkh5sPpq6u7iqw92uyWnDtZZVU7h3sH",
  "key21": "3RHWC6E5R843q8NbypRxv8Sgp1SFZwZEktfcB2dH7Wd1Am3ZGPZvgd3BvFrWopKsGvDg6LG5kWzZ3nAEifZ18Y93",
  "key22": "3XvbtvLBbzhB65zKHvgvs2s7gZD779mC8gvZq1yjBHfhBk9i29cnjUgezULZhm8uV535e5rqWPvzVQB9wKwuTfWe",
  "key23": "5hEXJjb1JY4KtWYRKAXGMo9gGupxL4sxNzG3npyyaGaxgeuZXczA8zowkU7ga2TUDTTXNNBLyTsDBVtKQ4Y8YqED",
  "key24": "5eMLVvKYe5bDavZaKJ18AFGjang6qE1TApY1o1rvcsMNW73pKK4qksruWKsBFqxDbiDGH5xeQK24xi4AabwbLMJR",
  "key25": "UW42te6XJHUKvGyCDJvEnBQLKSfYhJaPb4PC9CD1n6CeVyy4NrEHygABC4ik9trEJGYa43FiSBdQnCda5qntxMs",
  "key26": "2Wi9zXFQshChXmJhhuWAyjopR9EXVAEttKsrn6YWryqvoDKuBPhgY935pUjSsHDeAddJT6GP8e79erFdsxNa6CFa",
  "key27": "3WPzh3Fi5sx5FtkiNYD9Tjg2VzE7TzpvkQHFxfMNpVgtKnEucgYFXidEWNqwQs1bQrUxAyf5NMq78FHdyK3BDBBh",
  "key28": "22qhtAxYs5E6KEJfUM2bNh2J5uSXv395pJmTijbatuLMUKTRBGVMVZnFDpXxSS8f2EizkWszB2buzt5dcovDYUUh",
  "key29": "59pgsbSnhWkXNyhkaUQSyhnPhQzrNE2QQ3SUyF4kqw7VwewrQPFqAZwjj6uejhdNMXva84sregwaaLZQTPAkkCJB",
  "key30": "ggQgUJgYpR5GoE7HRAu51SJwzn9Xsn6HFsPMw1auhsrGRGi7XBFLuenYAVMHyPTLxw7SbBaMrQcB6RhGtAEnhfs",
  "key31": "5aHj8NaJ7rBC5jB9rtvHLB6Kj5n6Zx7sZxWgS5eVBV3icbVJ9yEW8xGi5hVE4V5Uy33HvJK9fQd5CaxGSfUCYvyS",
  "key32": "3P25sVzTmGi56Z2a9wS4D5W15AQb519qpDySCv7FrbXSrFMyVU3GSNGVeJc6LBAwE2p18P55SgKe3depTf17tdbE"
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
