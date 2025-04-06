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
    "51bUjBZqbb2uGDZpsyYk4Q23PywLTJkj3bDjCNhDEUUR9Spo9akcFyZJ7VEe5EWi3fzcLfHDaqWor1uAwnBRWNtd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mTWGQufSRghsEFM7sLucmFWUgE3WhHZTpmzypBfL7VQyW8whHzon81tvjgEEjCvjh5PTvcLGD7Er1roGko9P7Fs",
  "key1": "35STncbRk3gtDGxiSKXQJHYNPJ37ppjooUSshiP4LojNfo7AcuysSwV1aQ1BBWRmmBWia351wQNFCpQi3NNJa4LJ",
  "key2": "32gLtUDZcgEKLR99XDNfKzCrgbKEjD9EaYquXz7vkKxPEkUFksbqacXx7oKDQswumwpirXBrpHFxUeVN35BW2WU1",
  "key3": "4EhdwRpPT4vBvY1x6hDaZthUP1vBLj6KhqAzRC22mCUBRC77vPYyctKxyE1XXiuDEakD6G1A4fQC1YuEMsdb2Pbk",
  "key4": "MYV3JhRNP4ScJ2BnScn53FmfjbUY96eZSvchif4tygN5rxuLZ8UZ1xocFenFoF8jCRNFVQBTyFd41UaLWMLdfbW",
  "key5": "4HJmskkvYEhba1B6w9mdaCx2JzRdPC8vzaK3aTznYjLgXcakr7k8FPQqJHnHAkTwpLcwtSXB1Z6sGijjand6nnMY",
  "key6": "2XbHHyYXhfQWkYcqL27xzs465oVQEazAYgBjM7JeShPXA9S9G9x4decuVSce7PqvBRLzDyjDJ1cWaxormAT2mbKu",
  "key7": "5WYCw6YLhxqEU52CkCHrHV38yPcNE8v3434vdMa8RFyzX5XYQsk3M2eD7YpwMXWr8PoKUECYQG8emMVsDMw7UvyE",
  "key8": "5ELnF9G6vUvApap3dT3kMPdiSGhV4Psh6zDsoEWM7oxQPjA7vE168xdUpNBEAW7y5LXXznybvrUndjSkAMtc3jak",
  "key9": "Zebt3LragMVfm7H1bnYVR3XaGBfEWuKmC3KDQuGiPuzFiQcN311dSe3pgxGqMJ91Uz1uR9qLFxe9prfps2RDT2H",
  "key10": "3C8WW7pqTAsd8BPUe9kHfwjFiNs2yv1GMk2dnmEiJmXUbB6oAzC1xND6EuoWYpozvDs5p4FiBwhJr2d9QvV8TMkx",
  "key11": "2pBmGHuyoFzai1deQxqGkKAcCV9ZXs7LAtdQWSeiMu3en7zi5FhgbJvtYGLtNaEK1aov2fLxELzMPgzMwRYvYFEz",
  "key12": "47LW34Dbos1U6Jh6Y2nbSJpy7v8dZtuPhjEBF1dp9Rk9AcgByGWsfDn7duZhcBC8REoVUtETW66w1tkym6LoRRvK",
  "key13": "4xMP3Po7QEaTaPJ53jyH3Xovfvv6yincWg62N69eHKDV3UKZJeP1esQRQRwkASdVtVifAaUPbfN6hbsaAhvCFqFk",
  "key14": "5FisDTqyywe6sWfWeeg7XrrdSQkXnwTAtY4HHxmHYD5kYtBLQwci92CyyHnEtU22aD8CdCA829bDerqGxHiEmnqK",
  "key15": "4gqAhSCsXQUymbbqxJUicrGPkcgoEgow9uDX3FwSY5uRHKih42kLHLrvRtZo8GH7yjV6H9M5N8NpbmtsERmgCz5N",
  "key16": "3CPswnAQU3XxMyhLiqn8nDkXQc3fve1RcamvdGwXqoDJed8Tb3EGeHe9WpmhtGod7fSp6QYdMbBNcarH1r9HtL5e",
  "key17": "oCmQSSFmMMgNQect7zVXV9vty79u4BZwhxB47p6DBCTQVuHNTV4nQFbt1LJehj48JyypWdsCsXXRiKcnRPHmsGG",
  "key18": "4NDjvRJ15apfvpxM32Wf94YaNpNf2Qvb2i5bjtasthAfeDnGvwsyVw62J7Rs4FYwgo9b1kChGnZEBTZQE5XnyrYP",
  "key19": "5gYBdj3xHKBTAN1vwqP6Rq6CscpyqFuRgYqCAzVi1pEUtTJZPUxWPggPtmCpVv1DNXdJmXSNvJMQv3ZpzFEZDM57",
  "key20": "2Yi2fLpQ3cWAVCmg8P9u8a7SndbQFDn4i9ETieLyPHYjGGSNCefof2iW2KiLJUxUWKHWakDPhkDkw3aNQVZ9GPMo",
  "key21": "2nZkxfkn7w77Hp1zyzxnBXthMkrn7jKfnvoF1dMcuUsmHoEyUC3AooubynH9Pe2iTQE4KSutDY8M4BVn6tvHCK7H",
  "key22": "5WCHg2cjY3Ems7Sg9x547B7qtE8h9L34Z5CfZXXH2qfQxgAd22ZatnXf2LTDXGb7pGCGE9upgsYktv2f95M6sZbT",
  "key23": "2afuks71tz3zitjfrczdjLwG4q5jhLaEPji4EPJ4uXWqBg1ZYUXPsb2XJzv48R7atuacr2cq5FxWxcSacELQVPYq",
  "key24": "4srSWSNCWjgs7xNjb1BxRiWSQFYzcQynKwR3AfCyBvR4w9DqWGN8tFjCadrNn96VVH7G651Yi3xXaTY4W7zBQm1K",
  "key25": "5wqubApFbsaQxcMGf5BmDrwjvuKPkjtMx9SibrADgXNshue3o5zyuZK4FVaPrxqSHRgnHQu23JdidYPKppP753XU"
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
