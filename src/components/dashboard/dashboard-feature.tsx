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
    "217em8ynkA6K1n1GXFmvRhTFs4GF5PENuvbivZjfMhGYqDuHGSbnE5xuGxBSifPPqr5AVz98qreWw4GBovxeB4W2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3XaK1TsaALkyjTyXU55XTZt5i6TvNLz8ohVGFHTzwnpMid3C26kG9w8BnEEeuGuAUVVV3wBcggAisPMNB1Dz6F",
  "key1": "45NkNyvtMBhxCSJ1joBhNNMbw9oM4jUdQ2aNTfAeeHMvggazmaekF9ntauXTRtaPq7UrJhsBaNfjpvAWr5YWByac",
  "key2": "2G7SHLy7x5AH5B4UoyodtM4gPRdi3SjRHEeiEGhgCYAFHaZ6f7GUew2SCwgXR2a1jYUCDGyrD4Wd1DkxaDNmZNWV",
  "key3": "4tGS3LiP4WNnQn5tX8yt7bWrKRh2ukFvC1ar6dKnFQjirQCFh7Rd23GjMjqq81ytiXdxV7Q6BiAvUiiVNxM6fMHY",
  "key4": "4Ga5W47RBhzzJCTss2udQb6rS1db579EH9ygkuGjgAJzJxuypDeL2SEzU3aQEegbTyXsiAKmHumCs4e6yZ2CHS2",
  "key5": "4n7KJTvKUUHwMS4FkNKcnb6KwcC8Ctbx5E63tK4zNcawakbdbaWmtgGeTEaaDAnxCYcd9ERnLorAbNZUhi3TpG9u",
  "key6": "9dP1dJYS6N3U7N6EYcpcNuBN6TAeWrzqFuoX5R5XPauF55ASk1MNy85SSNqfAEw3Gw1pWAgMRUyD23hXhoaYVUK",
  "key7": "2dk5v9WLk8DbeNus9iZ22RZpJVrqzV9cZowsAz2f6XrrLg5f8Fs1Wm38Y5zrwrSEP7fgChLZj3Mju3UvJqAiLm7s",
  "key8": "2DDLEeCzCjEfiyLuayAZNXTWLkQXuk1TmBCvXu9K9gwKdLKPVP7RV1y9HhtF9fzKmoNajmTjoDsY1Pz1dKaM2Wk1",
  "key9": "wksqP9acKLxx2jUGtE9YCCEdvbSTSTP6ANTJ2STuPXBEwnGPjMYbkfTVZiG1z2Y9FioXWXansCzCBd49TnnvFYW",
  "key10": "wAtTteVv41J91cA7x5xxb7kcEKUn9yfTEaHgfMRJT5dEmZdvoqHAiFXAwj7Lxpq2ftDCaoYuE8GwxcMUthuHHsE",
  "key11": "3zaGo5GxMoA1YXRJMkcnbaFz8eZbiydTKx6p48cDE5tHtaKwuzTBj8cKuAzBzcQFoVgH1J9dTX6WBwDUzsu1zUkb",
  "key12": "5k4mcrfxvr3gSaAth91G5VXGQTDGjm2qH1yLWB4iA15NyX1LpkqYaoAJGcNE5tYyZ7ix4QeFieAAzf9YrR274xqP",
  "key13": "28tVQkEyUWg8A3QFEqCcFrd79icrSizRRQ6nKsYGynugsNW8G6QR6n8eQb7H8frt8WbPnMM3RBaoFQDuj49695sd",
  "key14": "4KrpQ8poToUp33mtkZn2C2sC3C6fjqhLds4UrGqbwWVRta3Ksn7g9PKs8kxu7ESgiotcWmq2Tfp5peB8HXqAFS1k",
  "key15": "2DkDTwu1Feh3u5QshExbzmyBJ4ZBqzzUgjobL74h8sRoG4texKUr8FXRAEoqvD5SKFNCwQwXaXR15jiCZcipnTmE",
  "key16": "oMPTrBxRkENouwivrbSEjSUqspMcMCJoXZeGRF4bCR95ZjTbDSxGvJ7d1rKhmGXj59rUf4YnivugDhk8wrQbS8f",
  "key17": "4M5qDcJ2iatUb6UYkj24zyqtkzERJvCGRVFoUjTYhErgHDxhriCgAoPp1wSiMhWD5qepNj89MouKuDJXXTVAKLNQ",
  "key18": "4tXjffm1UYvkJFWC1wcxh1nKSPC4GjtNtw6X5D9wAtZD1vUCSpP4LaqPazuYEPSFS8YcjrF79MFnmdARJJdoY6K8",
  "key19": "45aDu83Qi9Er3tLjRiwjBqRv4AqVAmEWtdyXFTcteFKdoGMK1r1CVeAp5ok8aYM4LevV2QqP2k2ZfLpYU7ah74XB",
  "key20": "47c6m5eTR7vwQY1y4G9rXCXnVQPSnMXNsboQR8hABjFyZdgAXeMGh8xXZGxB2YWKDgz9D17VkGTYBmk8e71UKx5A",
  "key21": "24yiWGkhn7FUfjz33jDguvjeF5siFfPMghXgVMp8UQcxCk1piXcsTmT2Amd1xAugdU792rDVBzXG5uZFZALeBCQK",
  "key22": "WSsi6phiNDZP95S6SrY7ALLZxtc9VfGzAy5kdsVx6obJW6CWgyWCQ4JqceuJQ6i1Den89zpfixYbLFtCQdibfMK",
  "key23": "6sE1SAbSpiKrJELg5XVTvvRPRG41ojWxs6sKcifXM4qujaszKkA2bbh6LXX4qitLc5xEXHXT6YhwABbiyj375uT",
  "key24": "43qSf1g4WqfPyEYdRkBCrJdpjV7JeEZ2QPupPfyF3dgvfJsDR1gRbKD7QHU2DXoAvZYP9Z4opbj6zbsJKPj7BBUn",
  "key25": "3z2QBR47Mc42GRXZ5vEZnfbq6XuTBqL8s7xjzjjovb1GBxtzzy3G3QJDmNV8vminnsnMqCp2NCNJ4RYEZgzu75Dd",
  "key26": "3TnyCL94VGVS3nRnEVQBM8GnRsanbNWVGdaV3nY1y1wcpDGmSTUe2UdbBZ7V1U7fN6Gtvx2thScCj7cDLtJxCfp8",
  "key27": "2FwbTW5y1xrGagVZN5RqzumgJSZgzRtKR19cF152hVsnB5uEnTcwZLeorZ4k56QEDxnrmxKpGVvweAhFRpw38stF",
  "key28": "3V3xSBWfjZgJZCkXu4v3nZ1BoDehCJCTsae4jsxgXoeSQESBydFzqmxCLGwbV2n4sQTLP4Myvh279aYDvgbat4Kx",
  "key29": "5ebTCNYRkwT63WXyQJHoTJ4DzZMVteXS1da8yMBpYrHMUGVfWvXYTyW5ijFtXE4kWLKq19y9xD6Zt5aTMjf7HTTu",
  "key30": "rzPHDSoZyirGisuCnkr94JR5Tka1CmLZrNVri7aA1YQ2VGCz9bNKPanqheLufiRV6DZMd4vFzUyKvHZCHubi82D",
  "key31": "21R4piQstG7UyTTwVn7LAkRMpPASzTwHyB4cJ4CdKUXAC5rCSkav2S48r6nyM2PJ5DMmYo3VugMppLqH52octHGC",
  "key32": "4TxcwR2sRvT3jwvnG3kFwYFjiXFww4pVhLSDFxpNgtpMQTPud6cWxtcYniSfZ3hzYaHF9Rt626AQFQ3dwNHc8jXH",
  "key33": "2uQdT6i239zXBmQJwUX7w7qDeYsr8R4cSczaPU1Acjp2UYoKiEiwDSFVuBC1bWJ81cnmRroT2DqocLNwrQgTfkmQ",
  "key34": "45jUAMyiRkkPAoBQTz3QSrcoLfioxWdYoVNgy5Zt3TjkpgAoFTnD1e2qobwM8j2BkutBo73MWN6pihJ7wHNCwiKm",
  "key35": "WnoVJ8AZ1AzQ4XzBqqRy1ZGV9fREWfzj8EAikBg1GFEr9rN857kiF9wbgfof6yQnDeEk6848yZ8mr8ew1rQiT3P",
  "key36": "jdWsBQDfhnL2j83cpNuGcoJYy8bM9CiufY8qfN8UHKLjqMN6kMUfXdLaAS6mtLzTnHixYu9s36GG1CPSKHbniRA",
  "key37": "4iTcycUrrEc7p3kYALnx3FHsDY92XULnNHRjZKvQvwuH8Ti5jnfyjeCvrxT7Wa5Q7qhNcbvHQnCR34hJVYrdfSmf",
  "key38": "2TKrACm3m68i2LhTGPcZLfzHG2q3ZYh9adccfmDsC2vYt5gjqB6iW73w7qVaHGJnNLdvGXnYdYEWqAi9bGYzTXa4",
  "key39": "3YEAigVR58yD98bRtKZ1HhHGbiwFDYX2k542u2gcp2Xc9UX6bD33KvbaC5NrQ3mQLhicGLVuek6VSrVyUYx1G9ya",
  "key40": "5Ucj85ErzEqXK8aC673fVPRXjf1EPjans451LaEbHLUk4BjoZL4PvY9NN74JjsvXggMNQxzocPsTdVU558k33XgB",
  "key41": "61vJwBTMkRGAtjhtE3BqtFEXwR5CE7AwEvV7k5JveCqxxoaKFy96iE91mGpNhQuurRp5iJtLBS3AZUX61QYiSSpN",
  "key42": "3uxrH5uKUbc8zR6E8MF4Xzgif6xxkQ6NbNbs1CqbkKg9hCQaWKjFK3ZHWHaJAQAXd6Gvq5sxSQT5SipRQWCLpeLN",
  "key43": "5pM8JantcpP9ULghS9AgJJt5YLo3dGHhA5hCieztxU3HK6tHS3YjusCFnfwYuRVDYgRF9wVybJE9yukutkeSGiCA",
  "key44": "3HuQoJsmeJUzvHKMC2jg3NrJ473Kyn5ZBjzPA2jCzgzfUMeCCdJxLrycbBHSrLfjDtuJFPzNjybSNuQCUGvAzueJ",
  "key45": "4BdoEmGVVQm4X82cNWriA1zqQAfbSzbmc9vdMEJr2qppULua8fxKM9v1E21cfmNWAfesF5mQqKDFnX2estTJKgTp"
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
