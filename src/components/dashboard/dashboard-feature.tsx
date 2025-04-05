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
    "4Nat4FaGv84f9EwyoYdaQUhNLWFyukDnqsqh14aLRHZNyoMPWa3yycGJoubqhvU9rNdzSgmZcCGrFGAU9uzSW6FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3CBFfnb9gCuLoLFyPv2k5mRpTH2uKTJLbfL6Y8dL72nGv8zMtXTeUH6DvBVbKqQFYCXWGBd1moQCmQFHkpUQq7",
  "key1": "3avDgrZcDQqyL614GAjwKS9ZdM9SHCNfgKhUUaRuE1GXVkTjamytG3vngDRvtgtYuGuXoaH41Zpw6my6zHXQ5mvA",
  "key2": "2ZbwdXdapCuqYjA4sawNJTFN2SA2jKGLeuDM9vGkRnnVv9njGw723h2XAoNLm7EScF2f7GNaHptjxRsFPW3psvTG",
  "key3": "2asadiwmrqC9vSUJJP3g7k2Am6d9y7WY9d7b5hYabKskHXMPh5zajvsqCbuatBMmDowmdcjKd5kLnHSPGtNbSSdM",
  "key4": "3xa2GzKgEK27BmoWyhTqYwsvGAReiHwB7fN11mt8sRPhbAsxAC5BCvHTzPZPAgtcvRoQs955WXt6KxHCdh53GJDX",
  "key5": "4ym22so2GfKKSTjxTkgBSe2nVRr6ri8N2zPPfpiitD1azMZg9gACxeVDBN9kbLSHUPpdYW3UgxEZ1MHg8AHv9kqG",
  "key6": "2yzHCW9UcvG7hGmsfkdrCxm933Xo3XEwSz9GNFFPmxhDxpMJoJxiWtQYwHbbCj2YM4YCc6XWx96UQqQc6FdaFsUE",
  "key7": "46gmJH5Am7hrG65WJFTUYZDb8nvzxfKAbvjs8vqy9V82m42RGrB7233dapG7aViZTrm1P1TZGtVyD5rCPjfK35qM",
  "key8": "3rcCcECSqb61huFJZSWuP6Z4LQc3c8KcPQrCMNJYcqbsxgCLiznNknc15YpE3L8Wpy8jfLt3YvedWdzbabddN48Q",
  "key9": "3ZZkhxkM1WBPTvY2uJPFuHdKS7vhFv3EvGfvBvKjyreJxFxxjQHpVFWXdnrYeuznM8jhv43gFwwCtbeFvwJHBCKB",
  "key10": "fZuJWnEKWSer3dFqB7ZsNo1HtKYj7dTFCynJT9eP4sXbGYHPKKXNyp8cS12nGx34j7BaBusCoYSfYKCnjUim4mD",
  "key11": "5pZrUFbFX39YuwX4q6YULg4C6VvX4nDGVTxzTMvQR2xNTmLjhf9TZuiHqxPn4uvvfXkSMx2dLnbiY9uo6tDGjKNP",
  "key12": "5rA1UF5fhS2LuzPVaY2ih6uovq2gCJLd48SDdtxjMmfwE8vLXspCua5iG9WqFwK4PNq8hRxrsGxa1GBW3PK9L1mH",
  "key13": "5k2nEvWL1y4Hvex154a4B52i2VLjYtS8C38aMg3CTdUqTfan9FPFgSvngXU5UP2oAanxf3hKfRewrc8xiaJEEk7f",
  "key14": "5vz5f7RRqiFDXffuNw67HJjMwkw3ZKLJM56Z9Ld53P8DTnTh6DSCcQSoHrArZrCQRtfrLPMmnMjiXyAPyFFh1YFJ",
  "key15": "4iyaLNiTD7oax3SfzUmeF7PzfjW5MF9tc3wGH6KknMJFM2xYbNpB49NDbXuj57Je433CwgXUrxNbnMye5Uh8gepm",
  "key16": "4WAxjRDSLR24Vho39U6SRUFiTnm98w9XcZnEoLyQPLhEqVwjdJ34btiHwgDuTFMHjNft4EovGWZNFUq5NrFsUTaT",
  "key17": "5HVfCWbSNwzs6THji9KJDqq3NV5L9qBXZNreQ1r9tSiD2ZXedvYNBPZ42krsVfCpM8XzuBYMrfaJRYNyiCcAW1F9",
  "key18": "31yhnmGV2mZYnZ7vr7vf3gKDfgsk9aCU8keuYr7xp61HWo2wHhVv5736fHBLDarxxmBShpw7H2ghLPwLmhRqngs8",
  "key19": "2K6sqv2CJkHH4edtSgKCqmFXqs7ZVHdkdciH8wchV4raEBzVFrmBZsVX76Pp5t2Smbut8uvct3xSnWaiEUhPUVVi",
  "key20": "dreAEcwY1FthAMYd6NFN4BJ8dZEgukViX74UHKbsGpoomC7iNUMy2vXN9uvnN7RMkiRg4mWGzjQLRasuMZkHiZj",
  "key21": "5TLBHB4nHZzvrEhxMUm3a5d65XcpgkfVfU823UtcGQEzfdj9riTiGCRhqJjJj7YuGfbMemdVkd3VHhgTYPDReq4U",
  "key22": "43gtaMU7mGDdBUJKTDZUqi1oWYJVGCBHRZCWYZ7dumRARLSqvh6cxnurmFc8rBiUSj4armiTxoJRvmYt1gAsjrYx",
  "key23": "5xVZ9f6tdHc19Fv4t5CQBEmwrmHMRfSRdYGFCAgx9tXZjzyJDXGunm4nxYYEj3xtx4PbaWEvTw9LCtFreN9E6wrY",
  "key24": "5vZcEk2SAJ44equ9ZXTYu9VHTXJ4rLhdvdxGJ8wcNSR4ARuAjBLMxXe5ib17VkkHJpC7foHdNhWEz1PnMa48qCaq"
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
