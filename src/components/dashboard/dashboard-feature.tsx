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
    "3xhKJjBU6AsUyEVhAFszE7kz8UM5Ftmia2bqwteT4TyJxv2Nn1R3ipxebvK8srdRqYmN4XEtnRSipKzAHp3KbnNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35K2U8NYSrcPyB9UbopUf498Wjpup58PRTqp3gi61iRGE1q2WA2V62yrCpWHnvYYq4vdAPX2GojdmJSTQcYNjVrc",
  "key1": "2ojXcENPRyzYKF2RrXbzavwJUZsa3Ce1HtR4A7EWMES2HA2m83SxjwPYQd7c7Lh5TP41Phif5vGhgLJN1Ypxx49W",
  "key2": "5LGS2PKEyhZDoRQfCDauamGdAEygcu4ZNA2GqaXu81YoQq3kE6x6fBqSnRJRp1sGYuGcCPCr2xQWDEsYkJAo37ww",
  "key3": "3DADRqLMwx7pggB5cKEsNzuPwPeAUY1ku2y6r6Cagvkm3MFitmb8Dwt9pCPzbuYfBQB5HhUHWduMxQEDzMuzypA4",
  "key4": "42syG7mQ5wffn8WQo8AYbCuaDMGxFUH3CtFMouCfcbdCoGh5cUqNTH5FNczHD84W24xhudDtzw3yZeKFssgdVK3S",
  "key5": "2jQxpXHhuLE6tCg4FwDMxbqZViVXm9ZU99yYyCMF2BVKyV2YU85jQRpefKUxSdi1Gdv2SW16qSdswX4pCGMhP5Ub",
  "key6": "45QarkjGunsyQScD131zWzVVw4nRHJQBTSPSFtvkSkiiFDskijYnay8FcGJU7MtU1vxbNEoMMQW3M61DazTBiyeM",
  "key7": "5zdr79SScgDREVt4BFmbDTJPcuNCYRhWfE2YtucTZHRxUsP5kKJyyRVRX4oqd84TqgRVCp7GRMWfoP2CsZiB8YPK",
  "key8": "4rJwJ5663CToFXKZZtZnxBgGoNoueMZo85UxwUCsWtkxjBkC1C3fivshSyG4BrFh2DtxheZwz5WTV2WEWxRfajr5",
  "key9": "4LK31RZMWMS2ESX5VoVsb7VQnNAammDh3XWrQMA2tvfbGLEX3XSgFFwtAhnp1E1www5BnGFN4d6yqeYGTGvvefgx",
  "key10": "2nJzb49Ndf5yRTq8YoiFvQsAPmHT4KsHWd9keyAr6MwvniebofBzGoSr7pYBnT7RcEdB8goiAjVdug5yFb3CdpoR",
  "key11": "4LwwzBFzWDykD5G38dqxzSatHik3eWqQ9SdqAgcRJpJALYMHSbSssG3yc4RLz479pdsFX4TFf4qV3gZpiMj1DwX1",
  "key12": "2nK95JhcUBAZcZr62bMtXVhkjyRNnCgLEtXiJbguZs52esufCNvThMMbgL4TBi7WrSv6M7nVJ2LK4Yzxk4qT13Jt",
  "key13": "3rL3hZHcwDn43YuDwuvNVPu18WtZzte2EckTa7tkabpqnKEBMEZfM5QsMX7QesQjavDEWQRhfv7TxPUBH3bw5Ho3",
  "key14": "3v2W9DR3WiU7DDx2Emod8dhxGDt8ETdV5cuqvUqgc1GVhsXQAyYqg9ZAxTKjeMvhVV61gAckefFfpiF2DSzMnJ5D",
  "key15": "4xfScodQiQnCGeRQrtEWWo6tbc8SiB1D8QDpxVTRZrBoutYqn2PC4oAJWdSKLaxHjxTBiUoBYMzXqMmWfaMR8jqw",
  "key16": "5qBNtPUDiRPV6vgAmh7dt17onHizCKaqfeudFjhjX8JSbYZouoYtXpPXbeeRV2hgm483itZYB8oNaYJ17k3LpqZb",
  "key17": "8Z8hVzsn7yYswaR1y7VLNa1tLDuTwRQgbcNpZLjBDztkDiThoTMcBCL9TZ9QXSyD4j1KAaooihoXheXjUbkeQwS",
  "key18": "KvDc5z3ex9Sht6wbM8X6oarrYye6vXwL8rZgxGEpKvSvFHXg8EwNrHNxiPtyHodxLMrGaQtPTWbGjZpEXvvKBbN",
  "key19": "1vKYrbpAJJXrm8UQmy3GVUqUQwNcKT8KvDVMr8S1eCaH46cYaBamEp5JgNDJjv7z4yKPhvGnHGvMmY1DnmVR4iR",
  "key20": "4mUsMMfkPPC7TAVX2cdE2M15CpzNq22oyCvXaLMz11X2EWHJ2B3vMJzLGVYVqND5aNBj2FBCQLoB7S93HTaNa7MB",
  "key21": "4DY5M2aKF9gqWnuvfGEr2YM7NJLrFMVfDcRCaQrK6nH7AmeEFoYET5w9WJyq3iJ7zrm2zqJg81UcCWoFHU2k9prq",
  "key22": "54jGbShs6hwwGuPNoVeLfAF4mSnx4zuigYnnYqEL3FNf8QhmB8Ebc1jH7CcLc69SENzMP1RU5kehTYZs1ZSbdMw7",
  "key23": "aLcQpuKfGzq3uRhcXVAFkJ6BcNQeMHgbg12PwtiJSFhr1djMoHf3YTkTbT64zdffzsBPdADhh9XNBTEJUnKH8UD",
  "key24": "37ikXXn5AP2zzK1RZLr5uiMoQmEcCCW9nVJqsC32Zc2o1uuTxsZXuF9jfBtekPeAroL9FM9UJ33CQJ4bnYKg9LoE",
  "key25": "mvdha2fPnaQnxC2A5vvamqQJczAM3pcMQZEczTCYLK16fe3ANbgKEF4NemPaiQAbmCV32fHqNWzfU1i8pDBGFes"
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
