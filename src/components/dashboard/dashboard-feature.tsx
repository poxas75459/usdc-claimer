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
    "35VJhQQSBVmKL6Nm413BA4ZxnjqVaXAmbz47NLKwfuR8GDrx49x3GPJf1q9dGsWuoUbtbVvP1rcjAuDZ5oFkTUft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qpxxkH28EsR5WK8edjFvwCSVRidLAWuDGt1M576hQD4pJec578LhqzeNo4yY67eVhkj6dkssm94CMbCh1o5H1MU",
  "key1": "4tRbNgAqH8DgqzxwpprZt39UDA6YKw5QQBcd4CSuTybzZuFavFid9vR6DTJTksEvGau4CixMFgfpHGRhFihPPQzA",
  "key2": "3TZ4YutNBwDBzhNtLwyDeGycgWZsVarKqCcJDaUCfp2fKz9nhHtAD6fAvZVFiR5tNKX7yKzMafDA67kSnmRrvy9x",
  "key3": "2zkP7TkPWd4RMAo8QxDQzckJF17ZRLaWh7FTEJBVPS6Jjsu3P5omsCoeouReAwHisghGFvK6PF7t6w4Fp1ha78Xw",
  "key4": "3w9crhfLinxGXjAFJrDkm9M6BJXR5j9LLDpRh1x9ez29fWpVzuwDHRgKsWD6wyBrjb1i4MEvqYEopysM2qoCaTKG",
  "key5": "1kpot2kXmQGyX1nSYKRNuvf1LKSyjMKDstzUGFQfviZaiykYin2T4weQf8As9Q2D2wg4A9cx57A75M6wLAJJxrR",
  "key6": "2BFVZ77jRvG2nicmCKvAt1jVaPbMRChu28X8GsvoVGFZQD75DGKA5v8xWHEH6ddDatHL3PtwPSB1jXcGCYXSXE3z",
  "key7": "3HbL4WPrvRoWZjXmyU3zBmxhAt8mVQtiiwaq4X2NaXMDy75Xe4jWzxBZ2TXhfkPrMCbkJrBLC1vVoequZrFMK6at",
  "key8": "3WGL8GK3TBKaPBcBCugTFdb32FZuNC58CQ3CkT817HkjFyLzEMNXKLSVrTUoeyxUQ5zJHVyHj96wNZgMoNNTc1TX",
  "key9": "2XWSppNV62bDw63vnF36WtSWmMA2kyGCRe5nPEc2A1366Mj7gVoZNekXVcrF5se3cX4ryQUfkpBTuFkB5pmhY9kA",
  "key10": "4hodXwCyoGs2mW9nifuBktjNiiUJsciMhHz5pC5WPtdBmNzhjoBxpntjJa2urH3b3wVxVUySD4H1cuQMMhJBtiJu",
  "key11": "Rs5yXEgoUQN9LDy5HNDW5Thbo72XkfFFnYrXLBxEewsrHVV8pc1L8Bfe5v6SMjZRgLsw9mWyrXnohoTT6KXTqA7",
  "key12": "5PNZRVzWv5BxuxFFcVXhkcX9bxboZQAs9HBUiAjgDTbuaTdL94vvzQ4Uh1UPBWYkQbd2ECHNuGocmLxtwpCizqxM",
  "key13": "32S2CXdU521k9rCBiC54RUDVHD8sMMxCFAzjjtdwi3gckJyKL2yKKZwk4b9LL47xY22JtCdkxrhgK3Q8pcNCD2uW",
  "key14": "3iLeBrmMcWJtCF4U6fvFeZQhS5mBn8dW8KJbkSgnZX8k2HJ3R8cngJ5KoFBV8TQ6dywFCqZMKS5rCvg6op2mjZSg",
  "key15": "5ndBuV7dvYPnoPqqx516UTvgbCHk6kgGmQHEM7ERWaTdwVNw2tSgoTeWgptrMgGr26k6k35PmCECnBTyAzdy4WPb",
  "key16": "49cY2nNoKKkXzr6BXuUUJz6D3WjbCEqBc9TsAha71bS39J564pspePA52xgHVAY8KYrCySjGjdsAVtgXRZnUpP3",
  "key17": "3HMkiQdAXvVA1NCWs5d6NaNoWkcChaTsBUx9MSJ65hH47h9rgt5ZoEnoTzBEFh3sWyc4KVf25QWmDPK4wdRuWREW",
  "key18": "3hy4gxsw5AiUDJrT2qCG6SnJxARKzLPq1HdXRhDgetHku2XzgACwZaqPU6sTMLWw3KiWJfe6FfW5ZGSXufRMKXBc",
  "key19": "a9NzHBE4qHXgfP5W5xZZpXTV2bxeifAoJyunCi5bTcuar6MkxnbF7hHN1axqdPqRE4zxW1Y4P8gK1HzkMWH8Mrg",
  "key20": "4V9A7a4HLAwuVFZ6A1EKBUKcytxb2QdGoVoRio11bfyamqRAQ18DepU1JnoCCCJsNDsXwu8NvJTWbKi3YTgtFjyP",
  "key21": "4LjperuAYJPzjpWu7Zcpf5Xm4gBvrbSnThqoiYcCZzDjtxMdpiASQM25S12K7yLgKLwwgnrGbknS7qhyV7n7ArLo",
  "key22": "2QnGcXpPki9GymuTKDmdkZjAzEYq6hWqiJZEza59a2LRrfmkPX6RLtxkwiiTH5EsNoqL98M88BypHj9sqpzBPTyQ",
  "key23": "64eTrV3yUNyYjpfbBtFg967mHyGyNLk7LtYbc3MUSYjGtnaUFqB3SxS5wmSrGht2zDWV9NYGV8eH2baVYnV4MYYt",
  "key24": "2vkBUPH1SZUDZwYmiSDyrbx3kpL35Ledy1C3ZCoZ9fUK5oRUnUQpoMr8GfzDUtK8FWxvpzA6eqa5GBSZtDSAyQo9"
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
