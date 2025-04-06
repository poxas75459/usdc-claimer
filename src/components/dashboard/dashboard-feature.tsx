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
    "4oKoKsgg8F7mQUz9fkz1jjxxSKWXw8asPuCvSayuTknN3xXmvQNGnCL4gYo3CephEK88Cu84N9x1K65GpHXJmJnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X5wsVPvePiDNLWLDVjBc4TfHXVyZUU14bMTCbkJSeXRxN2Xk6ay5AHBPRU5vkL6UNy2NjpeC4xMv59cC95CKDMA",
  "key1": "2gwDgvGaR9VboxsYe8fTLAE2JfyYfWsLoP4ggnYEghpnQ41xLGoJfJvaL27kr2St3xtjc5ZbyoMuYdbK25kyQAms",
  "key2": "DZ184cVqgWnpyFEyzJeWW5MK8RTtmKBrCf8N1VQFpq4sy8636R5HWKYZvUNEFMCfc9bZ4iGsL14jni8kmMbRUyb",
  "key3": "3ZzcZGUgeX4EA1F87YGiGha8Db7RNLuokTKoNuFGkZ6r4WFMywznv5LJxhKHTT4UZ7wuBsVa2PMp4WfyFu124eEg",
  "key4": "55N261jr8FhU6uCij8R53o5i7Ma64QnZVckfv541vTcNgw88BLD2mHH64n2556pUvk1sgpbiNKdqizDFgX3GHthd",
  "key5": "2x9rfme9hPUKLfdDBGEegWXT4zgy2A4wyRBh8929ekT89pE7LbU9CZtu2fQw7KppiVSjXyU9cujV8KzrUSiVpKUz",
  "key6": "5j665nhk56Y3AwFrvNEssuDA4aTcDvGQ83k9xp6KTYZeK2mKpFFZqi2CcZbxMHuEPuTe55expHXf7eLeMgsn4X8A",
  "key7": "4oHvkVxDPoFutcREb9z9V4FwQNjg3qU7XRf7tGTC3zUwmYNg539S6F2BsspjN2VhK6K42rkgACedmdfRqoake9XS",
  "key8": "5DAjCFGVmdcMMz6CLqb4wm48i7LM3jydM7JH8VLDjoyU8BvQJfiuJxnr2z9NyYCUhQyxejFVQkPvxRNrLfqs6rKY",
  "key9": "4gzpfagEZogVMuX3rBh3Ubga1z62jQ8LXceFeVBpRmsSbe6xk5DXTHz21DMTapKrpzFtFKqQhHTvhRod5cyLuzf8",
  "key10": "3ASMFbSeB8DKgDUgdAnZjcC9XLrbPK7f6GLqLAEAhdiRRmyhrBM8WneWGKXygHM2isBiHuhUDMhxEKW2oTdQDCkL",
  "key11": "3x12XQTBXU3uB6aHh9aWCWH31cN8vXQy8Xj2PxsygXKQvDsHRs51bTJ7mvCrJJLnYmjzCWDUNGFNJajHcfAhVYgi",
  "key12": "2vXEVsf5xCst89VLbtynxt6rdevV9aCzfCxGsiePNEBdpijwoRXM43xrPzu1jbd4urU97vNapiGDNCd9mjQhsubD",
  "key13": "3yxwdCjemVoHBbMhbDrDtSFRFv71eYdRpR6rndWX1KLWFGwDXtJ8AtAEH47fgDQwbURgQMWZ5sfNXwY5YyhCcyyP",
  "key14": "jggYZtUEVnLQE9omdWdST4NhXHZE6KLGGuxAGNsuoLbt31Kjd8RARTSoYQYtFNZ4PoUtKtYdYu3Ec6Pk1yKdTZd",
  "key15": "4cQGNXXEF8TpTqWJU6wNKSehXueetXtz6jwFyK5gzbJEETb8QZmPmrgTZ5YhH9SBSv5dnLvYxNS3ywtPtwLJqiG8",
  "key16": "Qgw9VCf8jehnjsGkHGUg742arNqCKJyBcvqWGuXkG34MTLb8qyKnRPxnz6X4qUMxmjeHLkkrm9JzhWr4g7SipQb",
  "key17": "2pohE9YZjigRxfsZ6yhYXejjcEjzNQ9StgAWoeynHPEvRnhDuSTeXgJh8Tw7BVXp3fYWuKdSPPsekXNeo77sKUxs",
  "key18": "2YewV98oz7rPWyLHtMZdB5GDahtEKrYkn8uWeTMjQa1fcqYQu1LjMvdDMZ8QbusNL4AgpVC22dAGKmMg26zseczX",
  "key19": "4ThwKeGoYmE7cJi8Qy17aqUA2899tGMSqoM1SZbpT4RvgDB6JUbhbrzRkDe3q82Mdjnuowu8c36LRg1joomj7QHo",
  "key20": "KUjLjdRfCyoW38r155HU7CDXpd65suivxa3pHAnRSqG59M5kvmAiDafKEdoRprYKk1aMCbmJRYArM5MdrvC6cjp",
  "key21": "m4ioF9HuVmaa9VGXQCGpMDntNCbMFKuy8C79bU2uYrmiRhzEy1rAPiNsDzcMLbuyYWsPdAb5ZsoxpWGR9MeoMwZ",
  "key22": "5PvPxewipaqzD9tca9p2jdBXMhGL4c41HBG7HinN9TQVd2EWMNjy14tyQUaqi4MmpYpdyNemYx3fb43TwJENCTHt",
  "key23": "bgCaQonDmDCbYRsyvSbv3RGMUbFiBDU15BiFPDS6bz3g4muew3YKVNEL3gLwsw8w4akF2tXspRTesmjg6jDKGpB",
  "key24": "2P62Cq7jZ2UPCAuWkQuNTZWsH7mBuEaRNU1M3924bjKNW9Gz62v9DtBUtPMAW1rVdRqBWXapfBRMBLPEH4DNVcKg",
  "key25": "2WDXHoEuDUGzCTfGJDcEKWcsohv84ibeVxJacio86uAVQZ2GfqDt5dwWFoBmyRqJYZTgdcThQveBhYv9ZoyD2wqP",
  "key26": "5LYdqRCw7Xs7nb6M2GaEXFCdtkuCw75nbiRninqU3Sta6RpA4a8vHupFce8NVykqbbdiDqHC5QCFfqUHUnjh5uR6",
  "key27": "367G6VZP32Gjaf1yo6vWy6neGPPAAFfS2UoMtdQUBMAbupH8NqxZeuuyj9GacWxbZGAmEbicAiYFHiLRJoQs3unA",
  "key28": "3KErvyZMhNXVSFxdgYETLeJoYcgH2RVhyrb8ciWAWrGJcr1MKxSTrRrX5EJMiDyfeJWFEtNQEaLJhmBrBw79UnKi",
  "key29": "57QnbTNKCw8A8wxHYi6Swv4wtPdfxDNAY3xhiZkFFCR351r2ReN7Yheuhnfm1TTCL1QxJ3SrYpnrKG6ZgXX97Ush",
  "key30": "3bwSuqQn7y49wD5SVUe56jwekptcUYpqaJkbkvooD7PrMmXHSaYZKbr3PozqPZBUgLtJHVW7svPkwC7WHuGz87R2",
  "key31": "25gRXFiSxwNWnyFcGrQJCifzBTr1VZ1QVqe4AnwVp1UFYueWekigVtui9LWAV6JyYsNNjcsz8h3aRe94W37b5uPX",
  "key32": "28z5Kuzu4zg46osZAVyaNLQ21virZYvH9e3bNX1eJ9SunpEkv9QUeVUCTPzBMP8TKnpp5kuSUzFNdjn6U9q9ZMCz",
  "key33": "25aGc1LSvuUfYWGm2JGgAsJ1kUDXHwoJ67brxdAUV95oV3E2BTJPnuKw544ndZdajeVNhB3YmaGEmNhFvVT371Ha",
  "key34": "4DuA5qNpYwF3Av66upPpibDCemFG6cfxGv38XTwaACCS7nf4rNwsm5AcrFcbmX7CTn2aEA5D4CCoNvF79aqf9qv5",
  "key35": "3pPc6ACx8uG59pjnUcC15RTnGrq2LwRMJ6r4DAmgY6PdxoWJvuamvw9xLpwd53FYM76yztqy6z5BvME6M1gt5Poh",
  "key36": "5pFNuZTNQFuQrma3g5iK8cvVzpVNgtXQsPQTzHMNQsF3DojhtdeHDZatDtjRiDGpqfXg4kQQEQjZ5eGu3cYAdpno",
  "key37": "5AwytRfmokmfXLheYsnAi2BZKUMTGPCN7mwMwmDk52J8rymnYSrKFDQ1gE9ATxMnpQU2NQGiNpyuPD1jPLU22UFM",
  "key38": "3oEvtLQsNQnWKFt5o7ifieeTpistX61etBFq56N7xSwRPcJwoSCU9Ln6rdDW6JBjn2vrDvm9YhJCB9PVMQnBJif2",
  "key39": "WoXHM3aRC9Z8XHDFQzDT8SHW4fbGfUHq5jUpqRAtvycnkAnGVTYaioEgQM4nKccGv2zxEU8YrAee3Rod1Z9ho4V",
  "key40": "2wxKYyVNTaQXN4Ex2XKK6UP6Xp32y5mGY6ppGL21r8w9CCgg3AJtkV9A2i4JpuXwXippgwsqhSbTqFdmXGLBsSFB",
  "key41": "3QzQHdjqCoS33GtDMSC1dPcgtbpVmg9rSgjZAj7N9M7ZiiSz1QdEsLN1nXWpXuCEMnwHMFgb1WxmbLgGfdnEnbWh",
  "key42": "QiQV7KupMevCmJXaVVsTC51KF6bmPFSKN9rmm1Mt7dZ6RryE7MhTzdcUjfh57YFYNmwMWBPArds18hNJeEzq2GQ",
  "key43": "5nvDdcsXizGDs64zNxowXBNpBoBVPUGDLQqdDrwie2iRK5SKh3dySCVwJbzLNuD2egeV3pFuAaMnadm85FM3dBKP"
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
