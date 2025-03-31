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
    "3aEGwCqkmUyARtW7EKLtpbzeg8YRUoHLiSBgJJgE1epMN69tqsvqDtmNCv7eGgCGuTXiMA28EQUammWJSFL4Fry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YnKtAQELBV2wxKrVnVMbyP8Mm6GzTd7JTHx2tU28RwJfRSMDWrZ48JahPbScWGRUeRv26eRZyaaYPhY7jdjXjjr",
  "key1": "4Wzvc49dgStzkCRPVMpt6cuaEAMGk1svsZCEKBPo6KBz35CFrhexeBRt7GcEAYZv84NPrKNq3eWvmZE5meNWp45E",
  "key2": "64tBgJsL4Utt2oioW1dpms3Ha7YCjecQaeFt6dYGxzvVwAMLXuzvYf16WXPD3yZ19rywRa3QTJHo7kXFQijBYD3J",
  "key3": "57oYvh13uEBqC7FRU2fyCCkGrz6iPMCDmHSbjCaBKLVzGw57utJ1cfBcLBrG29s1MpRFamQkxpN6sDwLSWaHibMW",
  "key4": "TaT2pSd3sthcmXHQsdaK48vK25hQbYkVHoBCcBdPAKJfLVFaVAiqeHmqm7EWonAXZjGTek1XXMepx4Bv15JzRxc",
  "key5": "3FL3id6cUFrpKgwAPg5uGRvbYMwND1LGn12VkTNCErXLEEShRWaqf2oQY7KMh4TeLVZ5sfv3aauxjCgNGDmhVtop",
  "key6": "5PoGePXSi4wX6xS3jPcc3oXESVeb4LagaAJwLhDwVr5fG2A67d4K29j5oVuPSckSQRAXKm56NcpMPSTpaunYtDx6",
  "key7": "xEDCdgCnjmSveuwLZEcQbE6hTrDcKjTmNJ11iaTvzLgb7uWk1CRSVgBzBbx36Pg67ZYmQyacbwcASbf8JjTRdvB",
  "key8": "4ny3UipPL2LWyKMypprNNaTd8xnnhtrZMMn5gzagudpsTWJCYuSgW6XWF62L11ZGXc4RJLbPzVrDa8gXRQrciRqt",
  "key9": "3TFEMha4isXiKGVkpKHpwDGRduGw5uf8Wwv2XNGpNSM27vMsqoe48xvgYpyYFu5qzGfJe2EvY7rPwyVj92af5jBU",
  "key10": "2eieq3yDGfp73HyMoiykrXZwSFSqPgzxogxhvyvdVGBzovHE2TSQFWCoL4iZBjKJS9iw18uFis7pFqhpXEMzZqg3",
  "key11": "4u2puWxGzmjhDkXPjcJukog3NqY67JbdPpMA9XSA1aUNRE9FGQLsy5jPpMH7h5Hx7QyJWV2xpLLZ2p7oEs97rPgt",
  "key12": "2QmX4TCoMbGsdKbvGwGdpamGC2mrWh4wiYBgB1mQ7HZ1v3oHDjeund1Vb2tc4RzQ6EQ7BvtYmXept38p66veF5Uo",
  "key13": "399zyQkaVVqKtwwi5GhV6kDCZeafdgYDyQjL7KRpngFRqyZr8AxX1R5o5htMJBX2z7bseNERvex6gRZ58QAXJsZN",
  "key14": "2CqdTXxGxDGiUE7iMXicHrGgqp3wWBNfW5Pz81YrYvTWqqxT1DEDuStwLZuYWvYZn4xpjHwbmn1qg16nkZh4vWdx",
  "key15": "3zBvwzQSiN27GbDDjcfWeaHRHJ14FFxwt6UFKgfiJY8DLQrFWsQLisQNd4UC6RGVGKQzuHxem57VpeFSJy2hj98q",
  "key16": "5x5juvUJuhix7WtsMNSG25E8JruoZ2w89Q65A4ye4amvY6aqzdDNBD5XHpHoeMoUwQvCChWFn3xkA25nveaN6YhA",
  "key17": "4DMgK1vwkNtrTiYUKStn3pj2LnyCyK8yue4BbaUsgkDyeyi5VEQgtPGvrXk1DLZ1N8gD5XZ3qbPtU7MC4pXSdRSw",
  "key18": "3ZfMGokYXzsAJsA1ZpeBYbaBCETV1367X8aoUSzgRWXqXHEpf6C7wXm3GVZQatuFn8Knt5mBytceuKyjZtGYsnX8",
  "key19": "hA2ZBH15fWASSCZ3QKb2RqEDq4ieAuZ91WK4eEVmjSodwVBEM5PVaM8mRLmcuDY657sdE3ZhrdXAei4UYqZKPKv",
  "key20": "4EHGmecvH8WUJLzJmodCGMg3GdUGs4mYeYsJktmyChTWQfuzN1ohFkf8D8JFtb4GRH8Z4bhgLrx7prkHjFnMDnX9",
  "key21": "iqAodpiSHFAfaSF1myTFFCZcxBuFKQvfSxiXV5LVHDb5baGtppCYRpY9691SeUygC4VTjgX76ExadDYhRB5msCj",
  "key22": "57TAdZXdbM7sggkdPyEZALoSLWAKZB9AryTQ1HNS3ynfGfb4DsJsLFPNRrd2KDjBPncrKF8HG886aX6vGzphGmBa",
  "key23": "jQDNJnKogJteuuc1PM9m3k7KYFnW78sBUqHYsR5k1yCLqvYVJ2HyE2pLDfxutdHAEFDtsjbfNk6oXMiUvB36XdA",
  "key24": "538bF4tMevaYvhQTCSNTeMMjCicg6RyhaRuKCCvCKTuCLyN7mVcSEZcZm1WFaXTMDZsgGw1xrwaxspJ2tiu2bNe5",
  "key25": "YqSz9Vr1EzqhUggqU1uxSNUHF3k3zUPRtYjsc99tGA1Rm19a1GCyTW4dus1FxmJF9xcR13H7h8fMALRPRA9pmz2",
  "key26": "2Q1vj1pdftCsbpb1LRr6NuZSxwEW3RJbVQmqivy9hw99Do6VuKNF91AGzFEZdcfBY8JiHBQH5pCqM7pCngV4PNPT",
  "key27": "61HQQiyAMfZwRSN8McceDh2E4Dkwc7WhXmrrNVH6TjTKjyi8p87hqPWBpHPd3dKYZUGSqJMgY5wyWvrtoxuhgway",
  "key28": "25ctyFfWt6tRTpsfo8g2v6P17LYcgkFD8bo22TtkoB4HAnMyqJZR3K8SNv7SEDD4iv789u4hivMoqK88t1YxLGdx",
  "key29": "5Aju8okjx4bNXT7X2BFSZvhVt5wiUscudbdau5wCKgGWyked52uHFQAprzi2rQKbrqHEKYKU8cGzsnEoWgyx6X88",
  "key30": "5d2PRh2ecFBPCwo14rUcxCfm6tiLE8UCdJS3RC9MRoxD6CfuwziAM5VY8sgsVNPHFoVvoCBrwHYw9oTWuZqL5Xrv",
  "key31": "2Wk2QQytCjsg7UmUU38SfmEZbr6WeDC32YGHM7Ug4SqQezesAcGFE1PdfWECT6cXnRgT8sjH6XJ5MVq3xFVwPcEF",
  "key32": "61t484rinMf428oXheN1Fj547FLjubEVBRkaeLc5chRhJR3jPpfrstsfDuvMjwYFbn1kUbj2vpGbH7itkN1b27tu",
  "key33": "4KuxeHmtKjxL76hqotKoaKQYbKWAr9PbcGv3QGB7YJaqWbHCR3oM3KiSyDP8DSqayzTgPk6UMhagpJo4mCRR4KPj",
  "key34": "5oso9iAhpszhs7yG5uL1eYNhThDGvBQJkXz9DJPqVf6Z82qTgjxNyRvrsVwKWjXxtkQtbZt7tadkhC8FpEQsCWHW",
  "key35": "66se5xkmefm5cNweTLmkKQLeuUUGXdwZTRUb3BN5gVWGLyxagF2s1gqS5mn1BBSNe2aSY9CiNYYs84Takr4H8Vih",
  "key36": "4ki1zJgt4xFHebDMwtfFmUoucCDV1eU6DtjTUCZqFHfQey95KR7RVqKtdADTAupT6NUNNqVgYdb78n2ZyvregN2S",
  "key37": "126Gce7NNnqJoairv4Kp6zDQCw9KQZpo7PxLRpwjDwL1vXBvx1zX9c3mLqdX9P8faeY93RbNKXHa1otkxHsoVEay",
  "key38": "uwswNh6TxXYM1LnsvLf2UZMGZumAJsYe9kzikWU946x1R6WjLZYUrEkeXVojuYPuXXi3eV1QWTvgoE9AzdYuVA9",
  "key39": "2rvX1myZpUp6W9uTBJoeP1o2qKLgirCYE9DsNdC5tuTFoKSmjeLnDLwctVwiFtHnvKrqUP8SFihHp5L9nm6ZJvdA",
  "key40": "2KZuD3YSsgfxxRBycb1Huwazdc1HmEYQKng9192Qn7Lp8sbf2FG6D6PHRtW9fF3CCF9G641ozbDkC3czpw8cXUSY"
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
