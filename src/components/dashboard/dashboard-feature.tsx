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
    "3fizHwA1on2sgq8MbLmAzcUeF4mp5aJR1FWUXahB4gbyMMmRUgxU6qFFgZUe3YRcZfPpTwaH4fzo7vcZah72SuxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MC2brh3rY4b2WC5AFyaBpcfqxwjjBjtvoeHew63kLkct9cjaX57yf2kEpb9SahiroYSehWczVERAPk4JqJsFwJN",
  "key1": "4r5fqsm9Mhg6NR3abMn8yu5kaL4L7E9Wme9HqdT5soQrWSDWvquyR1ULxjscWchtaDtZByBMjtj7RfRBqAAQJTfq",
  "key2": "4GiBJR6JFSAtrDntM3RV3Nxhuw2g2zUpWaqy4FgnXxXu38fQBsatGF6M7ZR5JrQoQ8UcRuD52arjKr4TB3tGvh6T",
  "key3": "398RDbzWTQNKXHDNfz5yhYGFbMwWsj8TikM1HxY2HsrERYD5FZ57A1SL95fPTBX44NAiCpktQfq9o9g31RgqqCbX",
  "key4": "3fZVVzE5fV9nvgFYkqfSQgz4WbchqnmPKoA9RwiXvkwBchRbpca3h13iFUmEJaq3nh7uXYQEYZ7s8ULUZhUQ63Ft",
  "key5": "o24ByjGEmnACE8GjMiBtuxTkgap7xmMrbWeDjeBHJyiFLgoEFunZA132aJamEuvFPN8rqqCRcDKWo1yX2mbfdJR",
  "key6": "3S8igWSxMP34B3SgqjAs6MuvTgqDbw2oqy9BBbEj7qupzs96hEQNQhPNd8uRdNK3pSx8TvTayRoRFd5toDgCReR5",
  "key7": "R7BMJmeAB8i9FxRqTimqbURjABQWhbHVKGPZrTjHVXpziFarY8bZrJN43PT139GtUVZzpcMYQncf9Xj9mecuzqb",
  "key8": "A4eJiVKW9NnUdWiJ6m3uHhi14HgnxwJ2Xakma6eXNAMCSYdHVHWtBD7S9KaiNXKou6jxkrX32LoweUkFZQUXQYg",
  "key9": "2oyVZHeiPUMJhJXqAL2uCaH97TyTq9wAFjNQUgnuQVwBUPp7xDQEhfHiLxTUFkFUaQEA4oFmBjhGqexYheACCQ4G",
  "key10": "5AtRi4krBB7oFUFy2do7YEzoE9AJTcyn2AcNLYoXaLabGCEPB1STto89dmpt3m8whid8ZgrgHVgAetiHDgPkdCRV",
  "key11": "95aENTpuMGH5nfFWAPpoi5AZ6uc6cb8Wd2JyU9NGJ9ob48ZKWXp7xWjXK3Dhm1rHXp2YdyFhoWp8CxBQVyAoopn",
  "key12": "45rqZEWcjCwXimzb925VqYJHFPz2x5dwLip2PfXqstpFQw8sGG9A8PAcGx7hT96kpZoXhPJLEajcrhykUDkZ1CgD",
  "key13": "2pDB2reS6dZYTsvwEWmXHkA5baQP6Au2qXe1Dgw6hTSxW3Cb914eEhbZWDZqQKjnBPEJZ2qTPx5WWtuRTEtmnKhS",
  "key14": "Ho2SSP1f25P3SuWeyotM5mVdgjgEUxYSdT6iuK1U5x921aZjEfxbygHhfFu91WS937s7hUEVpBjrUupuz1yz2WX",
  "key15": "59Wxeda7SLwwcxswBcoAfKzGcJufV8cvoamjnTp2K8CXugGQAKwVNHqSXXcDFmBvfAzzEXCr7cnUSxcvsemZvNWL",
  "key16": "4VUwtEcgnWe5p4BxnoaGcR4fVhG7MbbkmTgS6ytos9yMFUjh7dnFAvLrPUAj6t6HtL6xYfvNugwEr2wjKtmYE5sc",
  "key17": "5h9nmJZFx344f5RbV651QELfLFcktL9vY4ACrcj2BuFNnwqLHMBxzre2ecn2hF4BC1mWHHp1uTRpU2CfAjR5wgsq",
  "key18": "64MyYjNCJoQyMyz6UXxJrug9FiZyk6bf8WWXoxqe4JVyeQtHksjGpXGFshP7AjTT3AHhBpbeUdeo8MP1VsTWH4jd",
  "key19": "uuKNgNsuCrdET8a7dJuNTRX3D6rq6Ro4CsoxvTShNT5Q6uvW3yi3Y4wbJVjbsZbR7WeBBuhxCXZacqdHQRSW6qR",
  "key20": "4fSifxGR5LAzhFphAt7RnkzYPaEzRL6oLQ38kw6MLWWinYm1BMwZSD63B7HBJbHzTZzpPinNdiw9HcqrUiPkbBZJ",
  "key21": "2XSkR33TfvL6RL1jqWAfJyofKo1PC9HJQy39ujfcQzANcPGgVzYDXdKVZVvRtX3a6BB67EkQEcParxKdSGgd6Eh6",
  "key22": "2kP4e7BFekDia1DUQmQtRLuZ62pq7iE378tyHKSDfq5SMt1PAZ3wSZukqGGE95U6QSJDBjzbyYaakhWgAA5DVAXS",
  "key23": "4njSRamrFjhucMPNJdgfDt8AP4E1v2YZR3rDmCn76CuY8ByQcgKpkxaNPVDfunRNgibsY1qNWHhQA1YmCPx1aaaM",
  "key24": "27UzFav2TiACDmuVEgfzPG1cTDK94AyHVTrRNkjAcWZRNvFx5MagNs1wVUsBqgYGC3XAbBKfJHrYPkh8CamHgGTX",
  "key25": "28MCurzFZyN4AjdfyoFUfqix4jLeVnbDkfmXkpe5Bh269aceBFU6NaWrAUBmz9QAi18Mz1ZTLUAk1pKxFRuU8zfK",
  "key26": "3Lj7mvQDyF5ExELEXEB7iZYb1rATDSU1oBGmnEpHB6crdWPZhKBik3cJoFqCR3thD5QKDH4VjJe3JFwxFBmgs77w",
  "key27": "j95172YBhLMznThdGMkZJ4Z31Vmkj6XtiaQRRmZdN9Zsk7yCoiKkpXaScugDwxKAMV7fvxobssvfBHNjFqo9DJh",
  "key28": "bcdeamgc8SS8PdeDcGqghqpVMXzjmkEVj3HJngF7owhKSL8yvdsj71o4949oQYPBAGCT5KYDkxvePzg1vmaS21Z",
  "key29": "3W3B6VpHdEJae9zGCuEXnSShjQUVV3PWnEqFZpM83WmFHMSHpckhX8cDEhRGw69cZF3upkDxxpitFt7qfkyrHEWy",
  "key30": "3A2ANMshHS23yghm7q1sYde6aQe5Qn2iBVjYXSqnFzSFvN6XYUmFqZJks6eTHNwcRCQctJhquPbY5jam4z5MhRxc",
  "key31": "3ykjWu47oP8XFJTAXk7fyNygxZnw4xyvNhCiF3mFwJQqZPGbrCwxy6fKGNrvnNGGB5NWngdaSzqnqAT2R1R28mQf",
  "key32": "3bE43eiZZtXeq4zufneGhRqbtNk6YNr46UMdzZ5eKV5vac5zFDLEoE54Qr8rCSg2FqVTFevwrgan9R7pKuVvf87T",
  "key33": "5MzgDFsJqeEM7y91JP8pVeiUpt1U55XpnCLLprBxagFPSUi6eitGHR6SLaiQofKBeiJi8dq9pKLChdpnsFZdPgnu",
  "key34": "3XeaXEAwJWj8tzteBbavQ1ZjiG6o7dxXjbPSztVbbqgJY32a6C67F4BQS4Dp2rAtzEpSy2pSyZRMcX9BGKcsYLUR"
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
