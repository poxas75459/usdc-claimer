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
    "377J7i8vuvJNHHnJbVCFtivLSzgfXpTDoAaeFqxWpS1ZhWB8sz6cBbU7eeXNaqVo3fDCTNctH3Lcsy1ePs2EmzfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8kTYPVnWGv57iLtiKRosnryDFxNaS5ZZQp79XdYxCrfaTnjo9NP21MhTh9cpjff1bBk47tdE56U1R4Cdq9CsVG",
  "key1": "4GQSK5wGqbTwFvVuWVcXdM1nHv9JuQaLMJzBaBXXnf5umfhC11dx2WMqVQQx7LQjicvmQVzNTXKqZmjTofCxMWNx",
  "key2": "3dNvT2trvvje5Ncy8NFHD14SUTQ9rubGDiePPispzxHfHFHQfS7T7Hv3ycSEEuq4aMiGUFdr92Q5pE4Az9oJTi4U",
  "key3": "2GrMwPEtUkTBoEQY3VWSQCi7uuzojvdkVFc6m52Fz3eWYFeRVu33wKYqiesfyw1Xwuos4em7xVntwfbFAcfxmwYw",
  "key4": "v1yTv5kPeCEnvYRSj8HoqESB123TThc5WPaeWyUKKMHQuhBk2Bz3u7KhABniAiEcq5t1GZgL3yHjRUwXr37PbpM",
  "key5": "4rBaFUSD6mLsYHX6HiiomhYbvXFnNMvkuhLrup6x8ekx8ji36FPNyBSbE2MCVfVsmFWQSEzL38Ds1QwPKBAC4QaH",
  "key6": "5rbnhmrrpEbJTRjhmDZQddC81E9zVneeMnNeL6uCLuNMBnvWVQ4irUxxZgT4mrZfGRd8GNNbz6UMzjiP6LoYaJcX",
  "key7": "2icyWKt8QwCtfwTfAhYm36LVHjdtjFPPMcwTLhq16fETNudRRJ3NZKBHFqSHU1hrsCPgvJriAP5xbVwxvPromQPG",
  "key8": "2qjyJ35ApPWXMzMrodtJhUP8FTtaC8nRXoEvGNrpX2wBck7rNgep43EvAqdEdPWCTM8uQAgYNnAGnJM8LT6tpLbU",
  "key9": "2ognSmMx1Hkm2VJVScTtnpAAXwbTtbKFHB4Pui8pe8PWDQpayXx9u4t6QdFPLHNoQvKPz1q8n7AJynrkWXc6Bmb",
  "key10": "rMm6g8i25MMZpav5yEdB2SVFmH5JJ7kEgi3RbwN5dTvfTTx2Bwkwd4pbUw1Aw5VkgdXgFRb7P7QTsAbaC8PvkEd",
  "key11": "2ZwexyB6KtiHdjBKibSz3g3tGe1PkmooogmjgaW3ar3QYNsPTJLm3XE5EqWmixfXq53y4fFiDX6HKUuePkKHfsZX",
  "key12": "2Z82wHwTnqrR5npHHdCTJL2W6qfTiz2gZtUmUC9yeLWLYHUXa9rdGRR7y6FhHkUTrdB8nt53352sSiyMosKA3NyC",
  "key13": "5sjZuuyCvixkzmmAcUMbWuNTv27B9bAjKKcPQJi5vS2rweefGQcfST3fZ3mUWwdLDpBZLJYo7fUBbzg9nk4JUUAT",
  "key14": "hSSgg85qE8sCy3bFSQ53bKBNWPneB4PdQYLB4Z9gdAWeweGzBwGgpTaMWhVzaCHgW25K4qEUgHAFArbr22bZ8Ai",
  "key15": "rDzQc5rii3ApSANi1pvS5C43oN9b7iy8qeL5dfLUbJuKQTRNPwpVH2waiQQ745HtwL55nWg5GYLmcsjvDj5br45",
  "key16": "2tcB7X1X6TfKM1SooBhF2CmVjDN5BVpSD33WiJEndnXwdQEhEPK4JZWs4XT3hKt7DJtEEiQckaz9jULencsSdoU5",
  "key17": "4s67swJuygYeU6xJGX5EnttUvrmT9pBYtmCgVb2oHjisPnGRBGSYduRPSpbq14WZyLpEhYUKRVLPV2ku1YvfqjMK",
  "key18": "4SSx2Mtw3ou9Wh8ZAbBAC1axXPvMyLrcfBX1oj9sw4f2ZtXkZFNJDk8ZRNop1v99Z73iGAtXCSfBzSf3VaXSXC12",
  "key19": "5TKHqVHkFffrz2kiaJp3ub4WU9p3wHGyUuVJFefVybbsqCGa3aoWDYSVXQq7MdMVCqpap47TQqvxvhn97kQdNWk7",
  "key20": "4ehrCC1ka3X8Foq5jRE2XN4k4hhvQC6HngNdz4AXqaSZtiA4C5EP4ZxieNUKyQLayieLkUqk359XF91XmzikAJ4n",
  "key21": "4rJaVmEhuJUMnvmoQmYEnSjm3Q87H69AsbMHwBzR19GZk6EgpEDaGjVcS816kwwacoG53X47iWM1VMZTeFi9yoHc",
  "key22": "5HcSUNcoGWxtF1wYG1E2HUMu9obykfWG7pc1wLUVoYpHxSkmKocW3dViYkVx3PbNtRUfVnTVDRPQaFJ6kWVyjmcA",
  "key23": "SxxWcDn2yciTBe88guLqvewRKRBhzVWw6iMr8M9eztxDxdnxaQjEhBFoUENmH1CnkLwcCERy6d4TBbCPMw58hSn",
  "key24": "4dBNkC5LuexAsoYB3FTYE6CRUmxsALEVVJsaMgp1rban7t9rGMNE8AFXsmEbpPiBSEUwv18TW1n3Ljx1crUapdvq",
  "key25": "4mqHbPbPX9pVxn3vQcY69wBgomihbeaSfCVf3KqfWinn2kRPKyqJ2kwQmd1wtxrFV5fVtmUXdQgeQc9jTK3fHems",
  "key26": "4VG3h24ctpnhXKqxz11Kqp5fRHdXaygPpEPew2u4FBCKWYA8jRdg9DYMtZ4uz89kVMzsbUFfadzFrFg4x4GHFGte",
  "key27": "2E7LaLCLXcdtBd13d9KQ9t11HRdD8Hqm9YenJyDJtD7QVpJrwV9P4eU1ybFwEXKQoMFTxuwny1a4fdGAW9WKmUBd",
  "key28": "2aMxpMStrvHmAhsNQHb7GfXBzsJAhadudKWbMUv7UEbUL6HsdGBWbYbhaR6csckiRxoBXrv41teiEqaXHqiLmoRs",
  "key29": "3LZQRxna1RSeWUZYduJ1KCGpCzKzsnfThFFzWDYoUxWJx3QYLJ4dNekPiYTQoCMxLftGJkuo8dC7sxqpETSfVhFg",
  "key30": "5US3fay5CyRpr8DLUQwazpwRBfzb5yFp1kubJEzbHegKBTApBVmxz7FSdSiNbXrTBwkVk2LoTpG865r4KJJ5HQxz",
  "key31": "3docJsZboVMCDSrS2oYRJaLrE61pwDjK4d1beK2dfBN968sT6EDjVH3Qg9VXJBZik6pZuAmXzJjCT84iNEQRVkEJ",
  "key32": "2twVhNsxgVLcw6CKuUNht5uC599Bt1hUxUMuFNwegyVm7FfiaZv4zhr2HjbvYct2d2HckCkjiicPAArN34E9HsGW",
  "key33": "4ixDUijnbbR49XaKZP3Bh4HmQRMnbwt2eWFSSFNnMFZPX7fZ1v2Nfbky4TMjPNGbfgzqwtybWjA8Abzw6k4d7iE2",
  "key34": "9TpwX3DJoxprdtr23ZiQcg3g6QAPuMHkUgPozTtoG6ew46Baizdeg4W5waRRif6wR37MpYyjRwKbLgvThF1acS2",
  "key35": "2zgEFGR96MSAu5A4qgDDz2ugjUsfTjbpqfJgHHZ7LWjkshTKnV8iUCaqJ364xF81hZr2GQwD7jJLohaPNhShT77c",
  "key36": "2UMv7ReEfdyE4C5LckM1EC8amw9hcWaJ8qiC93XreLMbb7KDPeEM5B9CUqG5v5r3qwsd6qfyBfUCnu25XxYb6mJu",
  "key37": "v1sfXvNWss3grEremeQw8Cuva2qo7VkQnx9PTxL5F3FBxKGP88g2PisGtjCbJ81PWB6Lb4UDraRgQ6F3Kna5fw8",
  "key38": "5U1Loja9rTdNvqZq1g5UkZX5M54Qnq5oQSRGymnKtjYqj5B8ncohhjXxm8nHhgCP1LuKSiJ17pPqcKbL7Kd4geud",
  "key39": "4agzTwbXz3ZK3Lc38XwDuRM9QYRzZKrZtFWUKa4p4vzRF3NCQvBv6peB4TvNbUTfXQYa2VpWkt2LsTfKoV1ibb34",
  "key40": "5tsPAaA7ovvSNCdhsg4KhfTXHNTRFbLfzJ5s9jcRCzZHjpaw361mDha5JqnGtmDhusXkwhot4XAu1H1NJtxwDCyQ",
  "key41": "5uA55JvRL4joMnUf1nsxcuQKvLVjz4HeBEKDX3S7cqP5qAewFRPJaYBzJ5pBnHbbaHHeptikry3R6SbPp5aVGbjL",
  "key42": "mhL2SJGcn3Atzuo8PZ5ZgSR4TC8hkvQFLuY1BEAsAj4eCx5PAcnMZoB6hFotrcZ6akVqmqo5PogUD2oPJDo6xWx"
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
