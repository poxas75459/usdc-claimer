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
    "2HjDaRGAFdywDkJYZLvMuR9n6piwkAVXpviJumBG35HbGUM2tLFgcwAA44obZr5vywefhjCVzasbA5TVuziVQai4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqkRVcZ1b2PoMukrCe1jkx7sHFfPe1g1quf4AxoXYYmSNgBAMrqdsdLfMPagsZhEmcZoqLBxxfVffz1Kva1TWeN",
  "key1": "4PAWj6LCsoHqigp7MMDuvrskivnMyq6AUBExhKCLBu8DnCCBT1oqUf14i3hvXJWMRuv21VY9ryEGyn8HYSZsjx48",
  "key2": "5LiLDpKKCpx4RzvfpeVvZBSLFLRUHiYZzvTUtDWqqTMbMFrahTDnpVJvHz6VCf7JPkbifskpLvo8EHyGi7CNzWZQ",
  "key3": "3Zf9b7rLQ5tDzpta7B9eRqKHyKE7URFXbyXTEQ4cMiD5XFkD43xqpRKCtqzCTRPkdddeAae6S3fZyNxiqikfrZdh",
  "key4": "3cEAGqxkPMtwgMeY7qD3R5F4AnrLUqx5vqGo5ZWsoz6NKWAk2zqBFEQG2wYvTfSowBs6rZK6VgsTyMuLkCLKBEWn",
  "key5": "3FNTQogMb6bUZ7XrSL3Eh8Ymkh8sG3bdj1Uj6mj49SXT977TH1mmSMZ2DztLjKgqpJQAUVMBf7btFxu3ZoExh4NS",
  "key6": "3w8hdQQucAByBwwMZqFcHJc86ddQ5ZdhHZMxiYrmbCep8idjUSncQM5FqNNvTzdxSyAz1ZsEoqMRYxJeiebyUeUX",
  "key7": "4J7paKbqwK53qShyPRe4P3ZfXDbHJwmhmM3J5nGtCfKus8RqANt5iXqxY9vgnLMzcweh37NhsHRjC5X4qGDtUMCZ",
  "key8": "3S49yHr9yjBF5y5XFm1JaPmrBwjx4o4iEdQGBypKANMhho5pJyd3WEqvWJJ9AUc8NxreqfTo6SUAhZTLx88GmZNz",
  "key9": "5tVvSxeBPSVfRiREKEWQFbHwGPoDsV4HwdmUdHRfCBg2gKvR6VDcXXdGSjwUKSHYUibMMbr5q4W8BBX64yeWSUMX",
  "key10": "2D7G4YFz1MmVQxdQvAPJb39ysWiRTVAHC8Nyhev1kQo3FRgeTzzU4gWjLoDsTGPEF7ovjGtZ7EwpcBVJJccb7kfx",
  "key11": "3gZJXiRYTjZNqexKhGtmKHgtL5GLDTBnL9oFyRuRkJu2ovfcWGyUe4hoLArCKR9TMscpwbhLBSuSZqw7DyiPoCcS",
  "key12": "U8VrNC18UP58x8aK7j5iwejmjrzVxwv6sTpKi66yx1c26pN1y4bJrXWPBifa6widJ4LTJ6hPgTaCM7DikC9gs6Z",
  "key13": "2JdTPs5qh2LBw5EUVZo16Vw11GEZzjQAxLSP1QXQqDt3HAFktGoDFrUV7HDh29TM68ouVtUEXyu7nVc7uJgyZ7R2",
  "key14": "613MU1F6TLtFJago85TtoBkMTb6FL3gojGzvBgNkxVQ8AiCDXFDCakzWjo19HndP4DDTQ1ws2KZJy1vbsWLVpKxe",
  "key15": "2L1UYL8p6Wbp9o7DppDRdSmTdebYTvmrujns1K8uMgn3MiJ2FTM8mPG61wDn1GWuukZL1GzJCWieWQa7URSp8Bb7",
  "key16": "ue3pQRP6StnzVfVfKeDSLUTncRSStJqctG86wXqFnT9manctwgeUjYCCAR2gCdJ8CBYxv1U4JLKVttUxfCh67L3",
  "key17": "5YUcNFmUQs41QJQ9JWzN2UryNPqMhTVRJbovKe1Tn333yS64WwqRW61iVi45ZfC1j6FQdTxxhcdrHgqHiRRjwF54",
  "key18": "5XoPGyzvRj1CohsjEz6vBMoKXEuXRg8wUAwxJ4wdmWsqGbL1tfAv3q9yg3gSaXMKeHDkEqriTHVVL3Wr88ueDgE6",
  "key19": "2ja1v3pYctDB6SoDDix3zv8SnsWRQsU2XZu4BcoveN9sZ8LJjJd41BnYQAWxnKYbM3yoTcKixpxCwjKFdKWKy4UQ",
  "key20": "3mqe5gzZkU1LyPfeS1ncrcskcb1KXkYWr7oWtnKftDcjVupUDkxYwCQ9C39eZRZfqg3VGCV6vYJ7NX5vfGB8Zz1Q",
  "key21": "674zpkAGwqjsmJLrVJsH5L4nR6FGXzUMCGVyftFdjeuwig9nrCwUFGUnjqQJHMkvSVA5jBBY5MohFWDrPazf77iK",
  "key22": "CZAwXCNLybL1KLVKb5ucsqkSRxSqNXRteh7cKHwTKbncsz9dYNqEWEtaw65LhX88ShurNdxky13fawY5ecysD6g",
  "key23": "61SnJZCTbMu3tJbNx1R5jHy5EjgNUiGqk7rJxvpoZTh2RgVx9UPS2cPpKZ3Z9vkhuCUtpS3ATJQ9Xuav1jLH27Aq",
  "key24": "dcYYUJRFGRfVT3JwmXiCwuz9mZrdHZSDY3dJ8fX1RPeWkgyZe8MuPSZqECV9ULZQrubh33Lc8rEAEr1bcB8i136",
  "key25": "5cTYKMG7GEhRgUC3dxvxs1yXrgEyspvXLgBdZ2Xmnm6RECB99sS11GMpnrgeQ3vscse18Zfpx5TsZF5HjNQLPwo4",
  "key26": "5F9ZJt37GxeX9RxYnd2MF6AnscA7shqRzgvhZaPaRHobVt1d5Rue2fpivAxvSNnQ4yUGNrnP4E2zzVSkYcJJF2KP",
  "key27": "5tddvc9QUhLJSzzGf3w8PJsTRoHp93wCoJoE3D7JbLTxF41vBhJsNaLsXJeyCaNJa92KGf9YBi68vDUPyWVvP5px",
  "key28": "2n9XVfKGs9aeEk7tkLURoYLrP9B5XG35TZzPtH5pfpejZ4A1rCSxwNuWZZU6YMD8NSax3t9gGbNmxStpzGbvhPdn"
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
