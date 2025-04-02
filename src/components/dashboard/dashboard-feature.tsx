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
    "5EsadZhWKym1b348hMDD1WUQo1uZMssfabHtyVVwXjefaH4toY8sVjuNRbCKCgFs3Cxk5qjurajA4Q7AYC9yxDEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aDxcC5CtcadZ1PP6BvYQKZ3bZM3QAo49LBias1aQw7DjZCrnS4xJZhehcHMpeAmJi8wBHtS6MX26LMeDXyZsywi",
  "key1": "28GHnrqCR2ZDzNUc4Yi9fk5Pxrtip4W8KfGCbAKmbihFuz7nudaiSQYZzm5Wv3KDHazKSLD7gVDjkBNrLqYwuGoJ",
  "key2": "34W34s9WHqZbQ8DgP289Yh43azaVBMsApekiZk6JqJdUM2JtLQM1QiUVAkGVdYdab6gP39WqsRJk8jwzc6NPdyHe",
  "key3": "3kKoSyu5S37ggogs2hSSTw2LCfQWctaxApya7CbybiHPXAhvR4SfnDHyQY9Mvqx5uzNd52AhaQoMxtnjir5BvzbC",
  "key4": "22JEYMs3AMwoZ8aqwCXRcDsDpYYa5tJvAJ33KFyFSM3zHBYnyiRaJ4BAS9eGAkZ1gYzRicivrquwUxtgtU7sBb4b",
  "key5": "2GFe5iLbPEgxqUnE3YrnAXyHqK874oLQy6HX91safxUDAjgb5XeRuM64nccPGYfxNV295mesB51umQSTLaZrE7TH",
  "key6": "3YmMmMHsZK64Acq8Y7HT2iYmCiuw6vAAzPNHzwL92Ff4gqd2iNpFetgkypRxiQ9QYgkvf6qyeBNbWUKrHZa4EBwu",
  "key7": "5t1gvtj2Dz26jNNV3D45FpQnsTBBqoDLTY9AHyjdcCLccRicUqLoP7XPxrR6Es7pKYbCsKHU5g8ahr24fxcVDq7G",
  "key8": "5Ntv13Hd4VoSvmzGjBcJ6mUGmXbkScZSg8NYDsPRBSiS63hdyeBu3rbTWtFacJqMaCNosprjZ4knydnTgA7QDGTT",
  "key9": "35MJgipG2RKmLaLGm4oeSKeT5m7ea7cKsxGb22f7WSDBpEdd7sNGyTo8MWYBaquEqwGvg4FbagJgZhVBE1TuEFmM",
  "key10": "TkdKfHGCLMeivz16nTfs2kvanGm9eNczVZr9siyyZPV1ujub4mmFmYEJmNZa7oMTEawPiboy1tLzwFoY4fAymFZ",
  "key11": "2RQuVYnRiF6e9kku2PUmZEtZVvTEZLgzPqY8jM8bRmVTksjuqk97tSjpjLGGfA9BNY9DDj397Z7b9jtVNLUdX77r",
  "key12": "bktnhW4kWTV1LW3Zzti5TqFiV8znX7bT6a6HfpFfoJ4rtaJ97kYyg3Y5uTwpVCm9Ltrua4kTHV2oCWWjo9Psa2A",
  "key13": "6noMKPaj8hKo3YeqUtX7vX8SXbtkPQivp8N9yrwaQVQ2Ap87MWzyPYyXPzWKhaZW6NbyTKXTEMjzncaS9Gt6UTP",
  "key14": "3Hp3XiQyJagaN4v8bjTeKwWwPfDwpykUi8bgXrHos9uq1RgEgQiYz25uUVX1T3E7LtWxvhfaTYLTYB5gHqSyEbWZ",
  "key15": "3R6XCrxJsBf3oX8pwcPyPYwdz7FuGqwzmKH2m134Ai9VASh7SikLC9e5kaDzZkvKEWcZi9HiuiW7QK7nLmr2DKdb",
  "key16": "2YfZK8GByBFFWgzyDAQmm8iwVW3jsdSD3rXiRfZgv3JAaKTUZYE9a3LQkWBhqc6MvZdVet4rXWQwMFmxiMbNQ7eP",
  "key17": "qTFY4KY8wPVuyYSjknrqTnSZ8CdG9hKbmoZ29xYrev6XesSL9fbXzGww8Tg6BPWipWvHLpsD5xHgWQZ3eZ1SWnY",
  "key18": "2f9cPjhBwboQRxAVUWkKWx6KndjTVEEC2DBjhg1KTcft24edQUU25AaJ2Yk69N4FzYcUEZcXeUMRVPWDUgSiZqwa",
  "key19": "5ENfCerPKWoJ1ZyeaZvWDp5A36eywmtX3DWQwKWWyLiwEnbbA3nA8tAAwGPZx4GazVCoHAzCuzGLK53LTuvDszF3",
  "key20": "j1juTJwQPuvmgRSEAFYGXekeHPaAnye1ZP61gZbyx4dwhqecos6HPJvYTd3SYUTuCupQSUHEE4hgNeLam56dWqj",
  "key21": "4QqLgoyq3aPyQZa6bGxrfoipdjHDGp6zresSDFyDuRcEZDxUc1kvAjFL3vNmBF12UZtzKrmMbsqExjEgjYZGoQSh",
  "key22": "owPUXYioHFbc5pv2qaNtwtC1HguidJqhkaLvX6HocC41wNJL9EJqVfUiUomeT3CZPuKjwFecw1vroyKhi31HKcQ",
  "key23": "4g7a4PLD5nRDhA6DYpp8sWwKzeqNxbWGdm43VwxzMAG3k8FimKo9XQBFnLaZzCn6YNc256TPDH3edD5gsYfb7PcZ",
  "key24": "3QhwZs63rcfooAJFh9t2at69fMH4G2oyRbKsvqGoufMx2r6up8TAM7WJ13J9HwwbwbkgasrtrFc4gpGtKfPrzHPP",
  "key25": "2ne52PEvKBcZ3sGf63VS5MhqEBNMTWinMUPeiufpU7A4unz37JTTG4SvdtLdaZF1vPbrt5T5jGNocHRfL89Ay5ZV",
  "key26": "3N9oBsUduLU2jRrv2U5b5LqwKaE65LiSjhW3pzj8NAmffhKcK5uMFNra44joyTTm4Z5ijt12LzydoETHEEKnXTCF",
  "key27": "4oabYqnGChBxhTfJ4jqnw56jBeZtJWgTevKwmb1XZv6TxgnVX9BjzGaSk8FZg1M9JxzcSqRSyAWdQXSFtznLYNJv",
  "key28": "43kdTzdKGTn2HyqKZn54qaw4hAxHxEfkNxYdb8AiRREJpLCmhRJX6XEUSwYZPeQ3MWtgXneeS86N55sG59Bs3yT7",
  "key29": "3PZdSAzsaqhDRAc8SUuLnspvFVmU8pGPSnye7iUdmBkUrSEeWkKSXKcNHa9RYiGYM3DV645GG8q7hoQJWwRejb7C",
  "key30": "2btqn7iqVRCsCu2x8RjdGij5jGsGB88NSHM3kCcyGdTkvVw8mTJ5Sp5s2yAYzAfqj49aTiXb9wUe85jjwJwDLNQ7"
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
