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
    "42cAoAowJVYKFigbY7gueSEc4e1JLyHMV33JUGWGHibsLnMSrUyhqeHupiYLJr9jrmKtMMnnZCD1SBBwqhPphN2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MbM4KzhQRXj8JX6DU5PCHodhmGGdwtwtQGq5drq6osMEhs8eX1DBpo3pZFis1H3uN29H5T9L9s3qE76BNBbXq9Q",
  "key1": "3bzekoWQKeuyxCQfRDPSU1wjCAjVGMtsWMSUCm8fuBLohmn3V5UqzdFGT9x2HGaMvwq5iA1Fr78LMfgnobMAzvwJ",
  "key2": "3fN7xc7ZmtJ2qLiArL2TVigbVtTQHpCsHFwUhizjVwR1mx9dbFq376frzQniMRinLYzQkgBKLbCenPJsBvnJ2pp2",
  "key3": "2VQYjpVGGQH5J93CYw3fRz1aL44XQ1wvqQzd54GpCSqADRL3iNmgxZXbeiiuhMYJNYoJyq53pQUVpenMVgh1zZQK",
  "key4": "5hP3Xi5H4XLfpUWNe7gKPihJUqD9EbqGJ4Xz99zDcF4GCkp8VfDFUbAGWvg6sky8kJnLt3pb7nXiKKRGVNtvF6yo",
  "key5": "2wgxtSfAY3GwoPEEskPbzugc7ySwwGiB1mFpPKu7A4gJ1uE8yrJ4d9F8sNEuegT9vTQbWp3KMJQWQH2cbdcib7hk",
  "key6": "QN5PAPRuVSNBwyUmfmMRDaGiMwsY28vfJL4Y7ZP1oqxtEgMKz2FwE3YjKzXj5c1EoKCLA2EcnvGqbBBKs27Gn6z",
  "key7": "67qKndsjz56GgQCMadvEL534sSrokuoMxn9ZpTkkx8eMpvmRfn4tc5qs5k1M1M7gs2Sec3f3xmbxrrofcXqRjExW",
  "key8": "2QMktafK6Ks8SpEUo478bQFd6DPVv5vDMbA5tozmHEcDnBjFeMb2rMCnKkvwXtNdMBaarnaW7CHD9KkNTBA3fE5k",
  "key9": "TQqoBxV7jXgC1goywmDTeJjAkEpHfgMm781mGcHTxUeEGA48JTeTwbWXk1bPAngLJ7nVQdw9sG1aaUKyQ5kXrNK",
  "key10": "ZK9HQcxX2o7TbWLRmytBKvZawBWg1d6Gwwt4FVGm5HscpDRsKV6wJxevF4CyUcB9ThADJFVQFxZqx1A3JHxQd9r",
  "key11": "2Zbzdjk7bx8P8LT5F3KMTnGFcX3JkNZeBevoeFtM8S84TXDEssCPuDtsXWgStoWu1bMN1enMHnCiJb1C5DJq7KRF",
  "key12": "NRiGeFHqHAHFtd9h4D1Up4h4bLFuS9qbrNvLQ1cQZGWWKLQ82VEUUvdEniGQrZ635EnYsDgcKrvnjEYQhxRK1XX",
  "key13": "LzYJ4ffHyBz588gF8S33fweKdb65xDGaNkgN78Jrr4ox1p3t4vj7rn3yUnj6BJ2stNDeXdC4FE6WiVFvy4TNDgo",
  "key14": "2PpAdwAYDTnBGVmGpPRJAPWJnWXTY4gMsopRzEZSxmBiVzc21N58ynS7uc5fxXvgtWiftZrbNUQfd5JAeaS4hwb2",
  "key15": "2RqvrwAr9E6rveRsKFSLDDHzvGnTvwsrR9HHbBZvwzK7ZzBwfo6Y1BAdLDMh8PJNxHqDsEfHZy56NFMQBGjyuY8D",
  "key16": "uUTsrjrBzRLB1XewumyuWRecipbJEGc3pHPdqAgcjersSmaoR1mpWtVwMh46QtEKEiTRm1jLSq4fHBhXs7pNenr",
  "key17": "3mMNBWPUxDrZqTkm9k9Ak3mpFJGHEKLf62nBSJKcsjLfne1mffKwS4C5KJyoPvoKSHH2A2494yfBaVH35fvQtBvB",
  "key18": "33MCP4CKz5Wp8ZuU2VYypeWqjQMMPWPvGyj4hVPexagM1bDS7UeGV2uoMWQCuWPehwDZM4TijsHKstn9aaK9Rkyn",
  "key19": "2CvU8Ni7xvRS3n3khkT9r6fMz6LEm4UPnsgG28GXR3isNGwqnBGBYBmmuDD6Rxcdmn5GGTnCpPU8NQXaPhF8R7tc",
  "key20": "3NCor2PV4HFXWNTbtTvxjruhk8BPb8jtetg1bZriXGgHcjJHdXJtkH8LSFoogA7RWJqfjEND3HoCnpCXSeZRMfN8",
  "key21": "4umpjX68Jrqt2puosu58iXGjbU3F61KCrexKB1nrNMgk9p8usskMpD4nB8M4SEWxG48E2xbd2HS4C2JvrD2CTpS",
  "key22": "35fzwrkkuoFgaz5SgG8QNCLM8QVCq45TEx6DnQRgyuPeQUYbt4hMWaJshbnsz9pwoqv25nZUb3ERBW6j6yL6XP2V",
  "key23": "4r9bRrG4GfR4U8GPK5iVqY6xSgRQX8NvLqHiyX7gGvEUSbeC2MWUjvXjmt5TzjGyJoHstszeRB3RVfwoGnNhFa7F",
  "key24": "5WHiQAiZ5UxZ7X2Cmg3KZShcN6ct4NqCvdkwqD2A45CLV3BatVPHqjCpeCzULNFNTM6zuXPqqsz9dsf518Y5abs7"
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
