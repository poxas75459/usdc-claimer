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
    "WwAkEsRibxMd8syRxndcZpZqo2kLaGjrDBZLdNcNnrdrqeVYr1jdsZJjQCAwLYSgAnhVzfaUrj12wACS3Pza6dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnLcCs66E2ZSnmSUx8YZhhxf8M6QfsYhAekDKJGeJk2tgsyvexRxaNjwekGrAarHnVgWXzjccdpn7UrVnPXiJY9",
  "key1": "4VYieBiyGPzjJnQXoXJwLdq5RkfBDB6tMRNXyQ9ZYG4iHMuYkBcZiRKPu3KnFJTjRpvWdHdddvqoASuu6aiuBkBo",
  "key2": "5pZFRpExmrYKMrQfpoxS68AFJMJAXHpk3UuSqXyfAiD4nwcS8yhGTK9Y3q29UiMB5Rmnv3ZzSGfFvhVLHkedK9T5",
  "key3": "arq6jacS3SzKEqrsG4QuXdwsWt7vPLd2uJZxgGzmrpPMvKDvTdoHQ6BxbtJ7C3HrDLvAxs7YfcHaEz44Y1igpkw",
  "key4": "3nxHthvCK4WPEQTzhgxHMRxnoq2rUqm1kY8tT3Wj7DGUihoxJu4sCYmXduycBMgL7Tu3VuiM4rvHeZP7zVotrZcA",
  "key5": "2bD4Tus6SPE1oVSMLSEKUNkfcZtzgQQE289MbgDZpfjkUgr8b8uocmtSYSU3t4miKCFupQdQwPQKkUN3LS1maLFw",
  "key6": "29jwE726caKBGEm9jKJbWNLDrnxa7Uk6wx8tytpn2ngxRR3UDqXLBSZfzihnhdCUERQXNwmF9YCCGemB2QB6tgaP",
  "key7": "2waXMYFh1juYsZJgWzG7T4yM13QAe5BzJ5mcWDUUVhSP83w1YMWQjEK83Udbsv4hM4cnJQJ6Xyr4PpmJ4umA7Ema",
  "key8": "4S7ZHxbi9bb3zSrxSA9MKuiQPVT5CfiDBefrjpY69nnaMkz8JhZvHCynTccTwmRwyauSFanmLjWoSbAXwg6ZQjLh",
  "key9": "2mTFhZYkzyogszv281hFaN9iWMKsXdSzgj6DoAkJGuHee959PSe5mYMdH7KkKHHdGJA5CwLr9LLhpAKiuT23SpZh",
  "key10": "B7cQ7DcPoASD8gStmTVesF3rC5onFnSgSYRLupcV3k8RrrGjPTao2zEhq7UCLaxFmFpcZqGMX4b6mD4a3uy3U37",
  "key11": "53TiPLbNt5gk9NpxLu8PgT6YosrA4aUBufVGK1ZgMBYjPQd6LSiDKewcByEsCWx7TMab6vpQ5p9NqKgUut5SgAkY",
  "key12": "2V6H8a5zjRYP6fM6mUUEeK3jD2aBqhPuSVX7NYWBPekcZQvdC8ckT6Ufe78v5we65jEtdjdfjgaxV5eoAZVqvikE",
  "key13": "42cyWdtADRT5Fj2P5xjDouezPAuY4Y7t1hiwiohcj25Z6S5F83RmQx55NrrQXHfRmaWQdDsjLbiD7BZzGv9UTea4",
  "key14": "LhADM4xAWeUkmg4YSeLyEos2greXfTZPdMoEcqEeFbfFrzaRuZAGdoryqwDDUncPiJvGuiXnansKSP3vWNmvQMs",
  "key15": "43whpX2N71UX9b7Z2NsELzvWne7y4vc9ezxUShRfkwZnnQDhbEDrXHRkHY7zKqUMdJEaEDUEtMrGYq2ija9PAQb8",
  "key16": "4xZ9QhpQ1F4xjpMeb1gwAScwkQSKHjhng757BF7iRvZqpizWV21BC6qYyoyuvDbM9MPYidSTwFKAg3fhzuKGbK8h",
  "key17": "ecXF2ukZ6r1ReFbiU1iZPz3NNogX4NeS18ZF6HPmfekAwTHQniVhrJX9i3VkfMDuUa5fvXLhFqgNz6VQZQsUqnC",
  "key18": "64rnYh6z8gn6YkBAbJhnwNiUrbA7oBj1bjLJkCcs8koVk1EBwzm9bpsEeNkSGnuyW5hMQ9MFSm7naFjzPqWgDwTA",
  "key19": "23uCmBAgeXFt2kRQ2RTxfSk8Fx8jnqBnZ8pf31npgrfF1kB6cuEP5beTJkfsXX5d5PTWY86TgK6x8apgqqvmf8aT",
  "key20": "4DqGA1V8F2iGXq4EatJdVjyhi3jX3U4YdKGp3V68grWRb44bLbuF8EFAydvawwuQM5AeL1hHGLCcxvAKdkoYek8",
  "key21": "5CRDH2p6Tuqw2UhZ8gGWdY5LxHeCuHJJ92h1VjsWG7qfFn9BctJey5eG9EnoUsuD9mgQGpFA8ySV42CPkUwfV865",
  "key22": "2SfPM5eChxfM2rYrTU1yb9NhPiiSsSHrfHihta6vUBmsAXdwvDUDhGV4c3ZncW4MnMtgNMhq2WgK7qrQnRcChi89",
  "key23": "2qETRv4hNCKtFWtFjfG4HxKddJuYCWbVGsGhUoEWJP2YWHpi71WDbgrABfjuxVYJMwHVKLuHEPnUQtDDt64G14Gm",
  "key24": "4esbM7U3ybCsZbFR3Wfqcxkq3Dk5rGXnSupfxGfj77xvk4Ngh9afrSWVwHdtnZjatBk35cxzuJPdFarNnTNUeu2m",
  "key25": "4o79Ly1aCLjetkD22aJHAc9H33rHGDutWSZJNQPzQ5tWSxMd8hhsNnD8ei4i2MfgyTwvBqeJhirUame44hCLGTGh",
  "key26": "2B7t1BVsy6gUtTcCmHntQA6Q4tkH6s9x74PwnYJTk1mDd549ENSkHwnw27T8YDN6vvDCA6rimULjWuNnuKSgC69B"
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
