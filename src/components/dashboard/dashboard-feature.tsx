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
    "42dKWg1pFS5NRJAAhNrkQdTybhy4wikqJuEHDjGBqyJ76ct7uuZsYdVrELwiBZhW73y5rsUE58qd6jFq7UzZwky4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4XaznPuDm7qTgYZKJY6AmLcs1GBtRH47oVk7tuBzfVUrxEWkTED5J7wRgoUuGUYjYf8sNjyej2tR18kV9BWEKW",
  "key1": "3UWyjtrUAmfz5TQAQ4vL6A43acRNzuRYAzqa94mf1vDPqkoYTnV4sVCbjYZ6h2neozAE5j8hAt13awEHga7PZ8ot",
  "key2": "avTmoAwp4SGRrxa8ZzkhLb3ooKgUFETzvVLuS9m4M3umQm1RyNhjpN7PdjZrqLYZLXeDAzJNtLfcbq9imPBMw6M",
  "key3": "5WWCKag2Sp1bW59Fzc8ncCkV3brEt43HFfdyzQiY1hc6cbBxWe6GcfsxbQjhrPtASqMMEGvC1dZhnDNAWSiAQA3X",
  "key4": "2MMvVukhuBSNDbuLHB6uHkmXrYx6s8XTnP2uRY3YkRE5ziThnru5HSM5JsxgDwPuDD3AE6wPxFd3J4vpqbUmt19Y",
  "key5": "3Newy688NxWLJUqmKbnWodLHypPqfYSkKhFyhzCfGYMFRE1BSFsMP6Z5dsToJjBUYNnYAzVvtu1nVK3B2yiaYFmk",
  "key6": "5yY3Qo7uT9ftj14CC6576E8RAqPBVoZsv7YxhyqKLf1RHGVtkka4bFeaxtajBUY3xnJymdynoF15i2D3S9vWncJ",
  "key7": "qpbRdQ57pXZbedcGb6s15J36JQp4qNdrVcJWSkYSurqn8FnBNrDm7kAayxJzgXqoAxfuWpDfDANUhUWcDuXHJZE",
  "key8": "zGbXcJ94SRfmBDB4sFnvWyPxDS363qBSVA1CdNbJ4fJZkhNoETf5QnNKded4Tc89HQSvP5dWBmLLx3dsPDE7v1z",
  "key9": "38KkzYxUgebUF27J24Ajti7X6TGbb4ZarYtQJubFkyqiSgLoV6kcRzTMXDxvaTWy84QDaC7XDongShXdLwBq8MJW",
  "key10": "3PU8eMoEuHU2XoywepyVKmwfVTfCqA8vAH8L8CrcKDrskD4Y2gRdresMDd8dQrsuyQbAQWR5eGJZx2RWmNP3acFN",
  "key11": "3o873DojTeNq3eNy7YTW88RQoCsAB2c9fmAADGBNRQqVmKEdahX8zbMYs3H6yrfSsfW33hckPEnVV75Vgese3xZB",
  "key12": "5SoZFdq8H57xRqXSPMn9SZuEKY9WRqDanorL9ZzdHBMbq9faJYetWVF5sj8QLD5mj1PbhLJSsjCP2TCDpYwNvtdx",
  "key13": "3WYi2mCNoytvjTkTuQxs6jWF9x7Jfkiy4mhwutB3uEFfwrcNdRiLMQfJtRy8zYXR1DjJqmm2DbbSND8h1j4bTX81",
  "key14": "4zELqzeZpEQpGNejNKnbn7VS91X9y2xvuPKCt2SmxizS1WcgLxPMFuRPZVag3FJp6MLZWtxdmY2FM9dL2HZeYR1r",
  "key15": "3MqUs2PJeFHiEYA5svXbUTp2w91BivnWK7B3GQkLZ5VxEJqHFurzGBanxLiC4e3ePaPYMijZCWhV21rcDb7DL7Mx",
  "key16": "4vKZNcokVyXCYwx4sCyCVxw3YzYh1D9WLJfRWL1hBKKAXX5D318mTd9WLepdewD1TqTCpqp4HndoVixnnqJbEnqg",
  "key17": "2LHBRcwW75Lqy8Q9H88HHxVSYUoLG8Jyd6HuaQL9DkRmTYU8hpffVRjDDaqWVaa39SJ83G8oYDFUikSBvR98vi6c",
  "key18": "5yDTtco3LA5iSTeWs3veK9ausgNTfthENf4jtNWJbqKMmmGcCfUgDGhwAZfWBnHEfeb3kphW8gCqxZ7HdD3ozMd6",
  "key19": "65dYQCi8RveMvujHFKf5QcCx4ySB4dW8gJVGpkNtuh2ZAHn4AzyPcu5GyVowdc4LhtQkd6d1pDNwFcqGbKqh6nah",
  "key20": "3KLpWqs3iUhtPHjGP62crJW7ieNxD4tAohJVydP94MtPNar43T7BgrksumBRLHy4rxMPzzTvjT1sJqJt4oKhHHHZ",
  "key21": "5f7TBCHgdtueNN3jFfK42Cm96Rp8MMf3CS1kHvusPykVyjCjehbWLb744SbDaFaGPCJjUmvbbzxXS6v2MrK8qfrM",
  "key22": "4eKKyhF3Uek5MT9j47kwC4hikpX7fTmMXUvt4xEzunfYJ4CCnZH2KkKHm6Vibw4yRA9CX6kTJq3ob5pxNKDiyuPr",
  "key23": "2YSBD4pDRYGdAiXKpKM5EGpnAik4rCsbQ5EP4vUKm87XdD37iiUjb7AKvMKfnT6EZ4WKYf5GJQTn3PpiYMbw5Nqi",
  "key24": "5JmvF5GCfhqaFT5B5kjjhCLRWkcPpaGvNDeKsFcq8N3j5Jy5nWdbm5zeKbwmNkwK2gHnmrDNuFwQ6nBAj8vrAdZc",
  "key25": "49nktCBp6hF7b2RgZXxu9ca7Ur4H5QwmyNuG26vM8nU1hZWbJ5qba2wDSBQcD4NFBduQoDNDLeTUXtCbDyPy7PTD",
  "key26": "3QUo7gBZePGaNfgdRhhT7RxdxyVRhFFbyPMXpCDRHj296r3geGsx4uMzYoU3skKWHRXKcXQ8BAwkbXvXzQaGhmnE",
  "key27": "2enNqkJ6K58TkYpXpeJrE4DnDM5iwdxraXAecS153bKrSe1ztqKMY68Qa72PhnthQQAbpm84DsriY5htc6TdpQiW",
  "key28": "5jQ2Niz2yYumFUbDDUvCfty57DUf9dsDQDSaSMA3CMrXNaS1HE77j7A8Z23FWpERqKkEWqssbwWa5dW2bbi64B5f",
  "key29": "4cULtbm3rRoRBTEB72miXw1d2qb9d5VzHVtQGGX2JR8RWPvrpA77pPXtafy6tViaZcXfq3Vdj2sqGxkj6ji7i9v1"
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
