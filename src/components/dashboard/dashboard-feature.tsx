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
    "f32ENUAJWjedNJi17uzcFsYzDspRdEziU33pG1F1r4KASnJLGd7S1py94V9tfreDjXgQMmzywB4kLxATer6kzc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uewGDDf44SFFc86YkjnsbbZ7UAREqb4a7uGCg2SV8FeQj5AoAgMpdWUGDjwhGdhvD1zNYdAVgxU96EBYKYDkGwT",
  "key1": "3i6AmcfgfDudHsivqMmrRSVDNT1iUY4pGLJJryWZwHYZw7JvLLvxFz2EQUJVPh5fqWXKVhTVCyoFqiNrw16xk2AD",
  "key2": "4qYafFBR46siG1LJdP3UCGHkpqfHR1QyK5xgBTGm4szV2186XBTpu4GPHC9g4atEtq6febBZKXj8xxneuxnqDe7t",
  "key3": "2w4XTr283mx32uuoWp86DK9D8FvS9RYFcAqte3uPsiaMhfmS3yaxMrG2n94CchKwHhRzwCEvDW3gu6tjoBcedmgU",
  "key4": "4GnpTU8TksiBnTepwbScGR6dWbvimjFrKQCnfAb6325WB2bN16N5grYoo3BhbduLA5MmaQbZZnfGdrePzywGsgTD",
  "key5": "456hrD9dbKGHL2x6m8m1ZdHryM51RTvZCBZRJw79CkAyE3THkoRPEEobFsVyzgHJZzwyvZkjbn8SSvFn2ypJjHWF",
  "key6": "3cQFHoZxVBQvug2mCaetWq8oa2odyT2rUvMEMzqmB22nPp5PN5mDyWWVo3SGLwuetdiNe7gTxSYmHoMUw8ZkvrmJ",
  "key7": "3wA49rtDRsgh1zcotjWtaHyqpXKVvbXtEcge8xm4SPcoYa7GyhkDaK199T43G6BCUVxdMSjja7t2FuAVPiz5CBZ",
  "key8": "63KsuWQgXpYx6KU1sSFnVUsRcCBuTYsCpjNNjncLA6kKXLEbrDFmmzTqoCaBm8K4jKdeN8cT2LE1eXxgmX5FLx4P",
  "key9": "3ifvwwuW6W71TUkRtkHxosGMaz6AZ9NUTWSNBMPmAa2yycqttejJuHTDZbxHwrdY8RnNjUaiSWRYe8XtSnqa8BXB",
  "key10": "4AGd5q23yrbKAkb7ij4TQttqR2bqWsyEXTAHwG8svWJJxcGTBHpRa1wRJLunCZPgGMBRc6y77knVBBLbq1UkM5Fw",
  "key11": "3kWZ8khGb9MQchDorRigMbXoBV4TLz3gei2qF9SZfDRBDaFcV4vDHPEkaJxt8Qs8xyvxrMjfhbGTSBUKhKqLSdHC",
  "key12": "5SJCD621MHzPHseHcB412ih23DqJ7wYh3udyKkydghRm9rX6cjoEESL6B3iosnAYTDysqzvLh86P42a6U1cDJjQh",
  "key13": "2sYWt5MGsMZLsnabkuZR9D7HnnZmiqDyXYM5h5chguUqu44s3YwzPq9ZcZKsoD6uF8E44G2gCqiW2imRuuEn8fSC",
  "key14": "5biCfBYHde4qjCFNRcbseB2bebA8uYsdreoTETyLMca5Yi2eBzY6L2HuGm4nnDYrELxouwiEox5gvit5yes3NTwx",
  "key15": "LLLFUhNbU7xd53JNsAE7XogofYUJBkiUFaL6eTsfMyTzW9vU6n1r4V5BXEKD1g3qrq9UF6JBB8zGL9PsHe7bWXe",
  "key16": "124mNcLEXKs9FUhLh7AuRu5DPnMCed829wUfm5kv2jHtQ18xKEV5UJzB7EnUHCBXn5CCL4jDcLTkJmTxGKFih7EE",
  "key17": "3KwuMzBe8VgHWSVo8Ak8ee7GXv7GBfhrNnv8bxnyEiE9pYNwEhnXxMCQaFkaByqai92wGHaZYjWLsH55vfjo2U1r",
  "key18": "q1ARG1cMpAPfRsvunPy5QV3Mx3Ksx95YukKMZXB3JL5o6Vfwmp8ZMSAa3JKkGiZ8UBaUXfnis3Wy1B8nz4yENVp",
  "key19": "3HTjmnKJ2Bz6nJd2wrVqfaD83orcj3HXKWmLmDK9d8kxeRodvdnbFMBh3ksJa7fSdrcQNaMCxktiaTLGqCztFL9z",
  "key20": "5AqzC78PKFYBAV6JbkJ2Y62X1FzEidEtSWspSktSnhZVLrtAfCZYK2tv1j3zGqA3m15yTqGGgwPDbNdvoFy7tQL2",
  "key21": "26AxEkcnVyS92hdsDeGtrurhNTiw15mzUgcb8QCbt5yJGccAncLgZ3hTPDuiGWBFXLY5PL1SPnYQJgXkcrt5RvEY",
  "key22": "2ihTjsLepZGtCsGMTZEoiiFccjmd7RrZvfBBF3uqZX6cFzTqwPkZAMQ5jGhEPzQRW1GmxtrtA2kJ3SuqHduAP6vm",
  "key23": "5uy99u3E1V4UNMUe86LjcT8B4NfPLx3kCgTGrGWm61yGFXe24D4XNrP41KNjEhUKLwwY9SVhGeJ5b8A8oZba61N2",
  "key24": "56RL9cvL3iMsE84Nyz5dZA7CnAnDfyikvky781VSA6z2ea3z9MC1rsTHLeGE7iLjBiNS1QoH9Atkksb4FaZXZ5sm",
  "key25": "5cy6QYFRoTLMgaN3Vi5fovSN8VUYEYBDPzP1UVSx4w65JKkddfqZswooh5GtuVrJwZfEZHU3sx2ZuCS3bkEL1H7U",
  "key26": "23iGuTTuXLRFxbQEzWSaxaeSpCgkXbNN7RHgPBfbUZ7pxdNxrqq5iyiagmQiFuZjJX3tgXRy5Pj1Pe31vzNYJuRf",
  "key27": "3f9fZKGcktxfCweoZo4DvqvsqAQxbhNCR3dKWSHcu64kt2Wu6SHLB24VyP9PLQV4f34i9YKLXfwkX4pSUFLtZExT",
  "key28": "4NK8BawyuizHDrBmvC4BAQiEz4krxVxkabaRGPTBLV6bFWTR8QpR2qiLuLLxnX6JFyz4Aj78cr9Z4TLUnxXCFUJh",
  "key29": "3NPvMMzZrfu8g43x7kzQYahZWFQspziC9b8hh2Cd8WvH3CSdbdxY5zKCrPXstBBk8SEPb4L2U8cV2AKvnqD9Lto5",
  "key30": "2YDTERQnfyzNaeYvPJDYKtnH3mvHwDXRL4LxPn3uaUzfKNkLbiV8awv5JfxCMG2SxGrn59oUoywunHNc6kuzczht",
  "key31": "3x2Y4UnFZQky4HwhqxWCaLjrZkVwgceFnwrqMgihqLe6CzzdB9mg28RKDCRRTZmA5H5qJ4KpxmWK9KZGidGhiFPW",
  "key32": "2XWeyr1NJkDYNaftxmU1mdinBfJN2na25zS9dqNtQFZcUz4owZijmCBWqzCvxaYC1mAZ8PiPWhBk94vJj9u4f3Ai",
  "key33": "5s2YTsjeJofPTaPRpFc34CroH4KvokPYArsGvuPRDU7ubHhE7j6Aq5SXbHsxJQ4c2LPZJDWPhGT4AXWhtqDyMTTP",
  "key34": "K4qTL3iJYVBxKPHETNVANdMwoyFqyPJ1K75rfPUwztL55ddMqqCDq88U8QM4aoKit9GdDFBma69Mz3q7EmjEk83",
  "key35": "5rMAYXfW8uL9Wf14dz6cG5gAfHgePmgwSrDsJR2vd9bqpipS1Zp61awh5T1kq7dmdFL1yk49c56ezvJtp1EmEXNC",
  "key36": "54kYQ4wLC5QVbj1fU9dViNZk5CEoFUfqt4cxGzcCQakUSZpn9vgnwyF5gQsMwBGFCAmNbLNSHH4TZSXxRePyukyr",
  "key37": "4BXjpFrHLf14TUCc3uS3Tc2fGcLFTotS26vWEAyhGhcVstGJxsV1nQKZTvqihRcs984CNY8pCypMpVzszXs5SCaP",
  "key38": "3j2VrcVXfoUU39JXnUe6CypqE4Z6FbkJsKj2fQxMQpRYf7S45Ld1UvJJSsrfySgvQDxnSrcG7gMvFFRdGRhTWyNL",
  "key39": "227pdq1PEUHjQanbMktGoLoGM368hqT5iCTxPuXFsY7bsU9p9rKGqcCeqXJqAR8igcnWqkU5u33rnf5utZnshvsH",
  "key40": "4Ndid9DejuPKJpayUKhsighjZnZxZwnjeLnYp7Kuk3pGvpkPnvGWtiJ3sWe6VQvm9ozE8bShpZhXakjb7ofopEY1",
  "key41": "2P6t5NTrc4NfJ76TrbCKBCXUye1bSNk8G7f1UAzZkpCbZtmJoiTrea4Nbhz8EecPi6nw9TQeSZAyTrAuXbM38GaD",
  "key42": "4vyFqfur6w84V3DkqM83Z8Emb25Cbhsx8nBxdUE5XHshRqAbMEk3XWqEXWRNqwUe3G5nczLd7jgNaoFZcFH82ugY",
  "key43": "5QpjnwgjwAZj7ZqpN7KnQtvxEHaBTsrhVGyV4QD26UTyoStUxGTcwk49VPDMufJ2rDcfiWcDZZRnhj2XwKScBzjN",
  "key44": "32PUctGxSHPxQWRg4PM2vrF9S8SVDuYYD7mhfFi1SVPUEYXHwjKHrjvyoGNpaxwLHBMxcp75zfSbT234rwSkzRih",
  "key45": "2SbPFQW6vZFN2E5ae5hxiiML4Ku2NMW457P6mfCjjTQFmtjWSAwHPAQgmnpAHTsA13CRAmQy6BwNt6kF5FjN2ygy",
  "key46": "43eExXzBM61kTLXD3L41ymKXmvugt4yrSvBDgz9sKZLKAkwk1sZJpYDUGHQ3UHCLRd5KdjbmFjHovXrt17sZbazt",
  "key47": "QcFJqB5FE3kQBJPUgSzc4ESVaxUkgZDt2ETbksDtiCWTkgkxCgjJxePMM6pqxycnedTLxpEYWcUXBaGa3NJi8sT"
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
