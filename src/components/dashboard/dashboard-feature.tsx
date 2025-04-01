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
    "4puHM8itafxvepajLyuPfAtXhhcj7nthMnQr1TWjmLFsUBhQebLK6Lhv9sCVBNBukELUivZcQRCdun8Ay9hMPfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vNuFsHTprXfeatTdg5QwgxycxaaV9MjdNecgi7UyNDFgvnhL681itixRvHDK6EXxTbarWeWSob8YhSpDXDjUHso",
  "key1": "3rqD5Lx1vHtQskaCV7rXB9q29PJbftyx7AFC6qNkmX1BnMBoypCmGwzgPiqBhVUzNBDm1RexWRbkoqCcWorrXhnD",
  "key2": "2gYgtG3e2HNX3L1g1pKnF7DNAXzcxyxMcfYrhedF81oKyRHSsyH6W9is4c5EpJaCB85wR66wt3uVHok41JgryVDZ",
  "key3": "4gn8HHnoTfytxPThnA8sdMu92PCH6doVYU8CbJBjEN7tEKxEoUMJaNsS5kA7NdCL3vd2uezd96SK8VkQyKFf73wK",
  "key4": "kja4WgvVRa4K7ZJszwotZ7ckAXd4RJcCxV19CqYqFbicQnWZMJ2Rnu5ZP2EVLsV7ncBvJwvDdjPVKjGrrsZMrsn",
  "key5": "4oFXkaYkJsja8bKGKS9mJE2JsuvGacEqLC1u65Edannp5aivdWEeP4Pt5HQiShnKTH4jxn8vRMb68mF43fUcEZiw",
  "key6": "3PtHYgCM98dNfiC11w8nsFiyNZeGUQAwKEVKP3LjSqpeMhW3GZDYZpJxqeMpzBitRKnW5K83YT2tCPmkHCfNdvtG",
  "key7": "b9g1q3cxDZoK85auevL3ki598Q1yyGDMLSi4KzWRGqYYopizrhLqNjLLhm3ytpdVD7J9dojGVWpEk64tDfQ5PzU",
  "key8": "3dxHN1cxA7ae7CGVLWcY1HqJjCQAJ7eqy9DCvw9wfr3FwJiJFQZ6RecaF6pHa2ZeNcQ9wVFpmhBMPsVH2sSERNAY",
  "key9": "43cfosnqDU8irH55XCivh9GsUiMCMM64vRAzzbR7GVmNxnZZwBd39ouzv8XvMKZGa5ZsSLPrrfS6GsFaJGx3f7KA",
  "key10": "4fV1FWjSxcEhP19Yyd9ckDf5DfvF8aNjqAyJueUtSWS87rcsTSfMVw7wpCMJ81ttNZDLfiWaH8ZN5uiTWgp72Eet",
  "key11": "2s3uLRQ4VEByxBWXrDfhVwNXxkhsN6gQfD2USLGUdzXxBvJq7Dc8AV6yVvn9z1bWYU7cyUarCVadizqPqAyjmARg",
  "key12": "4Pb1Ewmw4M5awxwGTd4tJ7CZA75q8jCp5qBhyL6KvzhU8jfV4FT2Quo1JdjLCKwSSDyzWpRvbrVdBjAXTYNiZ9S9",
  "key13": "2bVDxNY87VmZ9QwTj8HVe2LqWVSXALdxWHwJyYwV3h11ejrfUNJC4BnBhCdyXC4LvbCEiZ2ySTnba7fn9WnR9xU1",
  "key14": "56E7uxwVBj5fjSnLRErXcQNKNYvwA7Gjd6uXFwTjA5fMmr8b7MyjSAM35ZKod8ZLoyFWfDEiZTgYE6YQVMCGNvCg",
  "key15": "5kWvDdcSBXmZs5WgYKTcWziGKwmdfcqfnNZWRovfJeCFqNscWTXAz75FNMF6vz76pwHvrGkCPLgGwm6ahDLW6fSd",
  "key16": "2GEhE9QKKBUT3Eszt5gKXvWKMg3c5e7isfRMaEaACNCKfwLBbo4Awe2PkKG6XmcsoBT7wjeHs6aWoyyD32g13bbF",
  "key17": "igwyA9B893zJzG5fiRVQrTRHCWWReGaQeMAjoLuQCKRhb24V3ZdpBFCxdxiC7SNghsqaGVNE1w7veMbF2Qz3oFo",
  "key18": "66WeiEvy69yBnPiyZrTCR4x1AXW8ANtwzdf3y9XVHHf8i6Xhc2SP3kfyzS6zq21YWTH98EUMJAJBsQ8erSrD4Xna",
  "key19": "3nY9afhwcE1FZanBpwFYZq3X5r6szizGzmmCqqTx7p9QBj3oujmSNEjFuACeCsPqnY6SH7GvBgHWSinoWhRVWm9Q",
  "key20": "UrZ8AMbxK4RGA4DbYdwvdb4PY6tc5vTqiepNawF6y7AFpsUBsDCyeZutfTF1ZARhr1nZrZ6x3mXtv3DDhP5hA3W",
  "key21": "3rfHPSDMvoMAjZWDgqnH43BB49K4hqH9Fq1QtwNS5YQU6HzNHYuLskrUym4ufQuiFmTpQ9C57cKN3BtexLkpEYrn",
  "key22": "48AffKJPiYYVM3PoMATD9NjgqTDfSxHt2qWLK7bVshRfixQMenj4J3pmD5LBYF3du4PBCbhAcCY32sYYrqhVDJyp",
  "key23": "3b4Xd5doaPyPKk5z2GL6gZzFL4XB2kH1D62KhJDwe6nfYsQddcKM4eG3tk63WqeUt2nyKecTrjBDcmvasQjxpLRc",
  "key24": "5qSed7KCBkxLqXvv1yY6YoRYeuL86JHCJGFxCG3MWLUvNfUfCwDHRo4B8TrMMFujodLxm9itiY8TZeNZcZxxRCgD",
  "key25": "oTvnLVWHi2qLks9MJRjTtRMMsw4f4hXKbNENxqD9GZyS2mGu8ewXx7VDGtBwvFsCWJGShCg3brNkVYgUmm9EqYy",
  "key26": "64bKjttgmTV2jfLaV9wbC3GRpvN9MD88UaGf23v5r7hG2CBcFDFmmXbpKQ3CZbKgxYUDwyKbdkQXwiwsaxaNzegh",
  "key27": "3hGUgwiKcqJKGn57sT7JTh6rCDxkB7Qvjoxpioi63eeXKeQNdaq1hZibx3PPRfA9J5oY1AZMydJkygv1j5SZbmUy",
  "key28": "5FZxZdKUHqQ4UESUaYjgAiNAQAvdCovC8oeLVEXcfPB7vYVuwstqf66bq6P67RG24cosePcGnLtvv24sABnuGb91",
  "key29": "2QF9BbuWZb9s1txcfNgSzv3pfnQBZH9pZRDpajUA9aFv2eVXQPeALrTrK2xRakemvdfvX7VJeZyCk1K5u5KgPfR2",
  "key30": "4cdtYTjShyLs6mt3tGNcoL6MCMpf2sXEcggKTUwfJLyZgjGbBXKt7fRgbKGoAnHLsPR17Ki3bZDuyZREiqmgHUL3",
  "key31": "95dvTLBujxobd4DRxB2mZ1BzTYfaKtZB5w2yWzCWfzogwc9cjPr1FAUUgVskE3SPGTFQq8Mx2Z6Vu5wQbFT7DQD",
  "key32": "5WdMyEJyWp5Qs7iuEiNG6vWeLEhXcBvCmN2arNyVbrAuyZjnJnRtZrGjXZMnoHd9LU5EYxafWJ1MKSYjTnLjWxGU",
  "key33": "3YFjBn9mhaK5QKez33qqQy4r57BCyQp17EAgvwhW1wvh4cQhFF8fZyYNZzE4XLnS7SH2oK2iQtvTq11rwogHMte5",
  "key34": "3BUNw4GJRvPfuMtNu8jxfrF48mzF4SyDvDDsTWdXUA1wFVFZTM7yEQCfAjbXgBPH3LD63TyBfNU4wzCcFfvkY91L",
  "key35": "4EcfbrjFGxZjpZn1d5YzHvBPSQbsLKPH5Lb3yc5dowe5d1oNaNURvfunT2iZJbe3jG3ARRyjW1FC534HvmWsv8qV",
  "key36": "HdQPVHFrsxLdUFrNiKMoqEGfEoJwkV2gigjStAkpozv3RfCLt1Rb5oEXARsL3kSZYeR9tWkBMn2ymgG6S1oDXKk",
  "key37": "3kKgDX6kTLMPmeehB9qUs7iBW84dBDRR63duGE3o4FExZv7g9tGhRk2FogdP5Zy2ekrSRnvp9vXGaN3hHqhnFmnf",
  "key38": "372pg5BxCAifwtx8qGbk2oVoMmZ53HE4LG3u3RCYUncxSLB4eh9FeWgFnajxMciJtJn28mfghVsL2qMdGM9sq2EM",
  "key39": "4zb2xXkeQByMJECZ3DC48WXdY8PSBs2mBb4WVviN8Wxi4MfE6wsokY7mqPdujJcJXaukPhZ3cPnFVfKp6rupHkJ4",
  "key40": "HC6uNcXzsprpS6oQCqS3vf618hotVgz2AmbReq1FQtqwfgNo3YePm5NDka4Tco7NjJ6MAyUvTETSZ7i77JJbNNw"
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
