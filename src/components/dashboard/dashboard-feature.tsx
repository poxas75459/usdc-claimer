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
    "76f2HpernPhzBZmnPgbWyHgWNF29aG4tNyPCM1jJvN7zDcSdTeoJbvUjXXVuve3tRVAzmMt381VmngrtrRtAF6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3smbJiT3H9ueVbCfGVfV95hHDyo55oBFhBK6xL6ots6smHGnyAWcQPDXmzGSEBERCxyhWj7Z2XqyRDZJbMXxfeWN",
  "key1": "5dPa8unxsumWMAhoJQXHYtUS7LL456S5bi13Zmf6kXsuAcoTVjW3ob5bDqbjjSz58io7R6JpzGA9kHGXKt8Kmaz6",
  "key2": "4XjCD28DZsuqGZwSXopArKrSF45CmNFRtRwP7YRwEEMSUar8FFNiCUsPdjPZoJTRkjMuL2avNRsW2UsdA3U5WmmJ",
  "key3": "4PwXstcuAAEXnu1Uqrkwo8fNd9Bqebj47FMfygZM3GECiV3zXWVDQPGN22SB7bL9VAaukSJiggi9FSZGt51gDQgD",
  "key4": "zdj9TmqJDdSdE7MUT5EmRtD6U8eNnreMpko9ddY3mmQjvyCxpLTT9hqoRWP8AurKGvJhGT9xSXyo7KFoEVnkDNA",
  "key5": "4vibNsPfLEfytrT42jxRJ7DckqymFTQVY3Qk8YP11isXq7FHur5aHeRWy8vhbJ8bJ6cnmAgKGaRtF9QJonBDYJbv",
  "key6": "4HWSDbgpLx9SqnGV49TXhL2dsixaoVgheLdjk5ZphMas1uqup57pEfV6EU3VfCTtY9FSsT1Egi3u2XVF1wVFMkVm",
  "key7": "5APFRJky2uUpFwzmHvAj2D41Staue8neu2KbsKrn3dX4BMU8Ky1oUxjX8ZMixLtsHBMEczeTbWnXUDpLu15pRcm",
  "key8": "gqGR5xfjVhJWfxdrYftSabi6TxjpRng31MAozCGusB8fspLZBBLFEvn7RnffbASNemUARXu3j2Yubnb3rjCbe7b",
  "key9": "FmGiEkxTSjonWsBwuvWHh4rNfSqYKcXFrtjwFP1Au5WT9fwSkRfiop1YiM6SuVADFqpi6yP2gd3Vr28Fair8HXt",
  "key10": "544uYJoFCimQUK7V658NjBvAHhRMh3myxMkEvpBLdCDfpYYJ6prBMLVcNTFWXACkBwTmED4Lg4ZcN9ie8utjKUNT",
  "key11": "VrmixWkVMGZVEgV7tMk1oZ6TocdQ6ujRnqpzLaFxiTMDyDM9SmS2H4iidRQRwTLTFsZuxteCoKb6v2UWyr1J1Xz",
  "key12": "rPTCarEUMcYiskFd44cD8RR44k4EwJpNVCLNVMGm1v4ZjzPrZExMGSRAuJFZAqHwpPqA7isHWZyWMA5tCaZz95V",
  "key13": "bCD4ULXh86prd6rQ9HBjD74hbqKH5GqmY3mZxrW2RYzcZ4yrkMiAPuDwKa876gQ97JCMJH4xLvKvnaWRMcrWfrh",
  "key14": "5opaKYTcXfMaTypXEqzEU2uN66LciHWjXpPHdujR5PtmFwAM3NRzFtjFcuzNtdLKYEytRQpaP13VEwu9kuhcDnYD",
  "key15": "2AKi3KdnNSWAkMFSDT582aaF4MtYa9JPpJRsDY1DfRLYhZyz1rZZTmANXWB22cwVbkejuVojdsTwgBwR12sagc9c",
  "key16": "5njgU7B8tNXtG3j1rGNceQW5spmvfdd1C4sejtJy6S9z12x4fFta1qWFJLuFf8rPbvbZ6aTQSdgsw8eN9gEwXH27",
  "key17": "5Kjusw7N4YTj7fnWrHFvNRsDPdyEt8BH2p25gr7QDm2PvKRPVhKCLfcAxLi6S9k5EHCNMijHvKFnwegQFNUgWGbz",
  "key18": "Wyk4FDGDvT1DWtsnvrDtJ3KoxXBHShridnWsKXRDG6d6nxHRF3Cm3iofRPd6Sr9VHBSDtspp8ishmGUY5AuTqjT",
  "key19": "SXX4fAhwWnUqsG1GK56RU7n1mX8MNu6JnfHNQxTHVQyRdPmTtom969BU7BqsbVe3s59eLtsFrLK71wFD4tUQhBU",
  "key20": "3qpoC5gcUcRP1dDeVqBUSG4CeesbTkpTBxY9o7honiHnqsigLuxGU4ZxCgwvShjUufNZwhL4gi5WCT8RcMwStMtQ",
  "key21": "2fhCHc92Dtu4HopfAAfpw4QWbNEq5ZPV1tv8nDwHvTgdU6Uq5p59iWPaRdsTek6xExeChuwft1aL4gYj9cd8iX1q",
  "key22": "3Pns52EkhdFFdFsqYH8GwAy7crMxVc1ufEg9RLcM88qcKs13BM2SMg7hixV83ckB9R3SWbGTP395auWXVcz3oqDK",
  "key23": "2WGMGV53JNFCS7q5RrCtUjf1KErBJ2dxhb89Gwh5EXHrvZ7tCyKqncVP1kJPxA4mmQfEzUhjKz7KPpUgA8MPoQqz",
  "key24": "38MLh4Uq4vCEBTvBEJ5et1NQS7q6kQwTsjTS8R5Ujh4cJ8xmLeybhmj5aFGMyz8ecDrvigYwYrUtffTSWevGi3t1",
  "key25": "5ifwo2EQNJmwocDvxaRiV1CtjhJVDCXFnoqodXsdPT8NmZLwLvNZ2LAG3Vut2J1Xg97574JH7M8coLGtYPEe4zgV",
  "key26": "5oG5XFWNBG46tnb3BU66SWVaWQHKBAVw7jt48qqPacMjZ8fYipbHx9rN8j64wUS3sFwkEfp7WY8WRRGuBgpYphgB",
  "key27": "4BDgGXd3jAgoAYJt1U9dc1GrJH5wfazQ2BBtZfHyZQpCfcxk7nKH4MwCBSEdALyiqN9DE6dimuNU97bmhcMQnRV6",
  "key28": "55fsjjrSqMNPNp9vtofuQWYn9XgkDB91fduXqJb1K1DKCJpd5z5E3GBqZtLqCHRzA9ANZmQb99VhJ7Ct3o4L2D49",
  "key29": "uPG3pPaJRBUbSDtPW4uWjb9bYCdGgqKSbE8HstMKigr48syXK8JBUeG2EgcSKdmCgLtZVawreGPBXrRUy4jB444",
  "key30": "4tFCLfNUu2xiNKxjqkX2RRCNGYLTxtDB4Cgmzhi1r4KuWq3GxnWFuzpQ8advFPpGtFHaDGUvCFkkKB2iHdu5EidP",
  "key31": "3BAgwpaQoEuj5QNDTnGQXr1mjSPmN95z9AjxMZ5eXsRu2c9jgtdf7xrYinJ8EeWjUwRPamjhzK5UBVhPcEenZvWv",
  "key32": "3gorDcia6cfPA34gcGLMqJ6TmUhHoRbJJdD8KQ555QiQAjHvb4ujZmQvgY3rvnFC77nmXPCvkVXybXxAm3asZsmC",
  "key33": "3YapMqarSJtEFiGWmkhvkZouguZ4j8MzHUN1qj2kGy3K1uXv9jXCFfmDMF5jJhAZc23ZHQobBBesLdYiswdH78zR",
  "key34": "4fwXfPVDpKaqiUrp8kcmighurCps6gNy2DALGgUu3PYmghcD4nyHH2dJAykW2KKrp29pByXgVZVK5CR1qCLB3B1R",
  "key35": "ieDZUqzapw811Ne6UfKKK47RZZysMyxEqTwJgvcqTWb11pB7gWZPh4T7F7pXe3RYZVpVWvZSgQuJkPds4eokbhV",
  "key36": "4MyfPhbog8odHhsfiMRzdcRWp4U3texhVTrJzCaXUNTYhqB5iqZ96VkabbgpfdSrCpqWW52oacUjvNsjoDHJqW9T",
  "key37": "4mDESRpJWgYcoYnVrZhGJ4drZwTUe3T95L5Ap4NuVRDT86APpQLSnWh7cPmLvy4z8Hyo51graboS2fDqZh954FJh",
  "key38": "unpRmiZQNiquV2czpGrxRHML8FYDoH7icVtAycvBrpvohNHnkbYYbB3t7sdYxLuGdzqfyZk3ytcuz6komhvq5bf",
  "key39": "5P2g6dDsAXpShLGcNzvog1fEnAwK1XCPvroeTrWRukuQpVts7zMUAVGjcg4mMuHJZpj74zy62bh9DLuELCxveMf7"
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
