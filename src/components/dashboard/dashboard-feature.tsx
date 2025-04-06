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
    "2e8SCXop63zMSuoCYRzVFQao6WPhU6WVcWm3Mrr5raeiHULFJARKzMsGPyGnRGsfYCHma7JJ6sMjJ37tbf71D9vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MQSsvehn5M4y8ZoRe31zKFooc4kEYPnnreuhbVaiBP7u29gPqwxWxw2G6Aw8rpko2RX6cvLWLWwEWFgkCZAp3FZ",
  "key1": "63XsiUcwcNUus1qtTqDcEevjGy21BC4tLWpuBy6m2JZskAta332rYvg7WGLU3N36B7JcnaXrXW1JyRzdccfrhozA",
  "key2": "5VFPrS1q1jtxM8Umg81kg9pWWaQjTpZV9uczb3dYZgSC8q9pHQDhJeygdVyt4Nnao6foBb7TQJbtEw8Kc4XzFYmb",
  "key3": "6xTvTXgPrbm1pNiy3VJ3jen9yxWLeuatjEbQpJPisoiWHNzMgTWvF9pr4o5DdULp2kevHaL1UgoiFxwMeTmQuF9",
  "key4": "228CooycYvpNJvPKCKb4U5yTezjyDRJSYv2Uy8BK8SqUvcJip7kie1U1fD7wSPGVrFA5xDGrME8kfyoRV4eZ7Wf8",
  "key5": "2MU1iGKVaeD6tKmgebPuq3Jf9nx3uZwUn7uEpWzEtUiSSLKUPyyzQPxfHpcXPXcgTqaj6MxkD46paNz78HjoSVnA",
  "key6": "5AShc3FvZxHLox4e6NhFvD69ZLVfLEGFRjrQnFZpSBMf86nDzFUv5dwGUtJAngHP8xK8uqJtRqPpjLyfjMiNeTQH",
  "key7": "w9Dv9QHngbYnvT7bhyFZkkXm6GdpCfj24u4VBcKqW5Dacis2rS3nsXnhBcEE54gRyPYKwr4KGRLtkt4m176A5qs",
  "key8": "3XEoPQCoZWNHmJskMg7Z4mHLBfVnzyztBiHU3gegdATtbfmXP6SrGgLCFLcXtssoKGtdXJ6Pg3hjRMcwM4VxkCrx",
  "key9": "Qxu1bv9rJCVWRPspTjFNJT2eaDXUexzLj4qAcNmTEgWWFfdKaWhzoSt1PaJ1wmgPYuiLdaCArXQq8ySEYrFBKyq",
  "key10": "4wkhwChL7D3xqjmH5yTSCS4Sg2BiWxG8Ty3KRDByP1EHid3mhH4duMb7i3PYXouePj3XxPrXqJQsxnVwM5HewhwV",
  "key11": "6AGbcqCXYYVSKveHyUiJbTtQQMZgmCudAEbKQCNyUbeYfFBwCLaCcdwm6nCKChzhkisMFHWkWSbTmMUCjXfzpYT",
  "key12": "5Ev6qvQvMoGM7SBdebUf1zR8jTqKm5xumJ9GMV28WwzogtE64VYRYuAUm62XWjhgG7zD3eaDHsQXd9SPFkQ5VAR",
  "key13": "2fzxfP6Srsw79RPTAznU3seiGsDU5UtDUEsc4NG1PAu3B3WtosXJJ4Jkxc8fR349fYnwteMmaxAJ6Up71dXrUje",
  "key14": "kzGYvm1k6fhctYvQcVmAFwbvZCVAJuq3L2ZC4S45RBUMXVMiS4LYs8Vzarztqs2ynUgraC9W8fKq8jr6JXSbhD8",
  "key15": "3WPVF3zE42ygBXcHoYajKDN4pFc1Pf8wMbmGpsNisUZkERggdxnHVuGZEqDwZdraSN4t1kiinA1ZhbabACNPJw78",
  "key16": "3jFaLBisuDifH9Wky4AGCJqmG8inCL5MGSwotuq6uGh5AcRBkY3wLFFit9smDdcJpfnu139ngeu25t2uxzbm9Sa4",
  "key17": "3TQy1mujjouUnLiMUv14ahwSWH3AmdfwmkPDzQfkT2WVithakXu4ph1wPESt1bhcF1YKMaG1aLRmRK8a1P4BCHMp",
  "key18": "5F9jePCUuBuZFTATXRfPBxXqF1BRLXXwV4ugkgeXG1A2esAou36vwbEJELGaWwD4mxNrSULmBg1CUUriDJY1ugbj",
  "key19": "5UhSEpRzMy8p6sTfh5fyxYK8Jc8v69x5bK9RikGp597DqecvjPcfgnjirYXKC3adrM9Mbsa6FqhQioJ356m4SN65",
  "key20": "4nc8m5GpomfeB637yWWEUjfvFKVVQhueXesvQL3KhJUmNb4HTefhALf4tytpjDbecAWt6zhzZ3bsL6RWSR9KdXQN",
  "key21": "43n349YEWqQvEzRpQRNgRwgzVi5NcyYnzuovpMoAdWmSFs7AYiiTs39eZRcnEJV7L3zaB3m9wxH9sMZFDKYNXdV5",
  "key22": "5dFQy53rTyitAdj9XefFF16mXNnBUjgptCiDDtac1m2YVuwjQSSoF2DWoNcaB6MnGVFvFnsGje82hW7hHZx3aq52",
  "key23": "4Vayh3Ny9wooTMkt9XnXBEVrcs639csqYtrz8dKo5b3offhg6KZ7hp6kenTYy4gS46dnyyt6xvFAemt8iu8w9VMP",
  "key24": "3DJp3xKM22HUZFkRHKFLD74Nw3CBPusLLJG6BCGYJmDTRarzgsx57ZjycKA1S4cqvAqoVrSfHBndKmA2XNGjmAwd",
  "key25": "5cn3FNYPYDE4JNzAksdux2DkAtY2sDCubbo2pp13hWDDpxQMdgjwj2DcCbqtC6V5GrCDGMhXLtsLBzXoBRu9mdMa",
  "key26": "3zwWqZQmcPnKyaLi2AiWGRigrQW2dkH9k8nNTroC2eRLrNsdyWsHzCXH3MKFKx9C3xBdnRBXmu5NKDF7Fw76RjSF",
  "key27": "3Nqsp4APT6mD7xQt6GugGeDc3rGvQBarezGJ9TJH85jfXsapdJHyd37Kq1CC48rfXupV7mR1zvQhb6LoFQvfJq53",
  "key28": "3a9nfkabCBnihY2kLLGYirVx3cm7ajWn4ZoLfxuQ84PbSQXcyC3hKEvjbhXdynSBXgff3XqB8vGkFKpeUuJfwhvK",
  "key29": "G48ADfC81vK11JZYAgEeVSyHe3YUVfiSqtJpT2ay6iPPzYyNuHHYzZCJtQ3ThhTyeX8dhDSoRtBeEiqxw21xXZU",
  "key30": "5ngFCEXQ1CzCTFgwQpuXsqypRXdeYn17UJYrQh4jguk6SGBRdCs2EtreSGasgXo5sTHANxP9iQwxDF7jU9N9jae5",
  "key31": "2fNiWia9CrGDr7PSRS7Y483j21UhEVktK5oo3YmTR75ZjAj6HVvTt2jzu6sVU1zKeFLBg8yhTAJ2kqa8UHhCgd8w",
  "key32": "5XTdzHqztUqimnbVhUaGPD6UDLhTGj8gT1EhQgY6gu9UpV5kV2VihDUk8c1oQ8hzMcxKYwAnjY8j5EfvWzbe3hXQ",
  "key33": "4XTwV4HRnY2qajBQQs1L8EvNocpSpcDpkTyZq3RpfwggQTjLcf8jobSPEKptNYQhjoB6NFqzpC1PMqLuHTqY52Uo",
  "key34": "bw7yC9NKnpoiPJAZ9aeLYMoVWMGVNxZiHvbKrxWJ8BGtzwGKwF5iBKVZYPYSXUu88dAG5exAYiBUyHrQwDq17jb",
  "key35": "2gEJFzAZxLrW912vhnNwjmgZBHjt8vh2wKBQKbAFSz1ejkqG9wf75Jz3wjh8PieMBqgirvTigV8hCVkBJSzH9Zqk",
  "key36": "58pJ8rdpbZkXhjpTeLAvM36L7S85wtsX1UVcjFkdDzxKxM5hj6uqKfGWdvmPBYuHu9rpAk6atnNTK6r118fWWZwE",
  "key37": "5tQbPQg2CuJZ7bKWkwQCQWS2LJtn4TYdVmDQadQxcvEufzxCyFN27FfDr2MJc1bUECqHc2bXRiqVSUnv4QTcjgaW",
  "key38": "2B5utfjkhYh34eakppttUEfWYA8BjWLw656qiyz9hQmjZiWFYExbF9UWE4GqEuCkbpPdt37un9pHD4it4gv7f8CZ",
  "key39": "5RxRcT4pRkncMq1y649FoEidAGVL4qCxjnv9QCTfWahzjsbr1xw7v948NaTd2GzieapxEw6GbN6EsYQxoU5xjY2N",
  "key40": "4piTKWsfmbiWjWtUuMHwrcV88ASWkJwn1vAoaAcv9XfjdjgjVxRSthjdiBaFTgQ7UR47ySa2m2nTr2op58GmeiaV"
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
