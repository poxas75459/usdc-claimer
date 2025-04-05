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
    "3gpJFfmnBmm4H1jFkJYvaAUKoCjRFrTjp2U2LtrMBjPZ28VCdwvZGwRj21Qdi1LnCorYrU7La8QtLzJffTgbB4Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lxcasi9WM1g7gwhqRDsGLFqLSwPsqSq9DUo3iXdVk4veuDPpVd1EGrMaQSXyA7gDgzvru5EHSB5bvkkGLh9Z9EV",
  "key1": "5awNs8k86GYRfqfdD9Qt1mJjVbZ2ZJiJpSVXKFoD1wTKgcaAo9sGTKiH8e6DhY6rQDUBLN3pmdQCZzN967o5q8QT",
  "key2": "mrUCNz327A66HeAxW6GaMyUaXf18T3hPnyhGap34ziXNH2SGCHoyeMiT7VFYSnRZAjHuTeLBKkaY7X7yx9C8oQ9",
  "key3": "2EEbLFJvkAYsZgoC2QjqvEZt2Stmks4AmtGuQgvDVCrE73T65k4KcExk9szb49ks1X6Xz8HSw7dYi4x22d5ca7uw",
  "key4": "3Zvhi6QBaDdmspNA6MtkwW5KLAn4wiKq6xGwGU1mcS3yCPu14ewmQpZUaaA5LspApngiENWUfk7mYFqhEGwjnThy",
  "key5": "53v2Hie1Be3566Z1Tr8XnTyAFr1dbzK12DvCMrRrRKAyAmqFW2T6c3qn5Cebch2HbFnrhGB65aunqs3V7AFcH4Lw",
  "key6": "2aiycrjig8vDHATypaJYU3fUvYJaan3kqU3vBgRPZ2UJubjTDAG6MSNscPiYu2AiwUGWKoWZkdf22AT7wi6YF1QR",
  "key7": "4V9Ps5EXKEE7PdmkktXf3nyoNLQnJtiRKH8eaHUk9peuCGuzSLWx6bgvwU7Q8Ti1oja6pEpzxLbeo1ev7TJVcrYM",
  "key8": "5mv99Xc9vUBTyEgo4iq2pwC15ci8wazeTRdEJbnfxnzGdCMzQgGicTJCXs1ZskXmpVipikkhSCi9vpC5gEVvQJyC",
  "key9": "scFnBtUA43EfaVPRLRTqvTfpHWkZU1GxVMjQ3wdWohZ41qP6MNw2yQXDdzU5hW1RgKnaWuxw1cbpE77gkYUZaRh",
  "key10": "65gm3uQWsFGL4mVV47gz37pN2v88CgMkMLBBkmCRsGy3qXCf7dphn1aMTACwUqk9CYnLwUA571ekMxRL2Lev9pHE",
  "key11": "61QhtwsEm2ZApdQtHdrnSy79P5HQYsSDLc91FMsLMWuthdgxZAQkFTw3WKRMdMvxNfrE3gkRQwPewpwaEkXDLovf",
  "key12": "5vTx48QE8xALpCnDf26GgdmjwzS5NKMuenRpKDgrgbv68R5V4Fojh7BcbfLKAsKscAZc4UoFGQp5mVbta5ZRCqZ5",
  "key13": "4ja3bW4Sv9TEAQ1hZoCwkNaNWka1urveEsw9vExwZiiinUqcDnNt7payBy3kY8CADKp8MRFBYXEDVhT6eV71Q1e1",
  "key14": "5ViH1xezkKJ8AvnEf4FX5dkFCLLNrRi1xMtjNgsYzn2m7xXGBCfXufZx1kVx7NjPiGSYe22qR8DWG8BnNJeQ74KS",
  "key15": "2yKYSaWkkjsCKeNccNSFxWDd8c3o3Y7BzbkZvqV3aHKv7aUkbuc5jEnLvfKjcV54KWCFLcR7n7tZzb7ush3y8UPw",
  "key16": "4ewKR2GAUDUtPaEoQ7YX8QgKsRiXw6mtEf1qAZYaXxE4114oMEae89PLeUAbdRnzcYrfPF8MNjVyteuQhTgXqZfe",
  "key17": "4tSd4Z5CR91vE4rVZtY8jdnPFH1fKiB7rSrGxwhodDQwXYyduP66K2qaAgqGp6aSfv4Gopiwe4o8TwexQSuxexBa",
  "key18": "4WcgNAQYiz3YStGmvtELT3HPt1GVtnfrywKuYFkSdiv26V42iv8AFsqpFqfHQiDD6tuV56XWwojHEH6KJFwgnMEC",
  "key19": "3XX7DrZQkHAkJSYN1tZixf2z9p6xspNZbaP1UNcQtdwyJrSz8DZm671FZnX9szubUsk7nBcidrH6gUXYYt8M8Qmr",
  "key20": "5CUkEErAxWGVa7EhRAyXevFUqq9y36oZUAQLKqJNBYCgsp5KSVEiZia4JEJ1mditToyoYHRwjkwp1DJyzCMiyUsn",
  "key21": "3QXav2nMmq2DHz8ZfQ14CyKxpjRf7kknwsw4DXsqjXFgM9J7zkcEnH41UkyM1AAYp34WfZ6CyjdtLhUuFoG8gfw7",
  "key22": "39X5r4zWoNF8mL22sZUDPrcMW11AHLAyGy6ZbyNy139zzLsuz5M7FtoWnedNgrDqpV9gWpiRbFoB5S83BzR5gDkQ",
  "key23": "3iDnBTZrj67JXP1kPQMjBnfoSGJ1t8Abz1Nh52R7BWUiezsdxmctDJHMXRTDpiuCGkkJetWfEWAUQzgNwxUnMq4M",
  "key24": "2hDG6BjcjWjaLpHX2w7VjZS6ZZ9R16RQB57w7ZYBQfpPVaC1a54FCJv5ku3sUfSoyJS7RtY8xJCi74NvV5xAqjur",
  "key25": "5WaH1VUkCkJcEzhJCyp9NZhuzMQjuxmmTJy9U2k2u6Qene3ojYR6iX2zNTgpsmDwHHL7r5AemeUdcWFiCcMTYWgA",
  "key26": "5sFJPRt7D7XnXRfnV1qqaGeMnA5KtK87BhUnXCM1HbMYg7eFuUP1gjk5Bhbaaxa8XMYYJzsHogGvJfwgyKGnPmfr",
  "key27": "3SL8RVdV56FxWkckpoL9EH1Ce32TnW7NSWCEBDQH323FUAD1WvFH9uD6mZg2d8sRp4U1KoVJ8RLTdXdDygN6dEyf",
  "key28": "59uzJ8wSdT3tKWQTMmJitxix823QKdFe1WUsw8NoXvRevYP25Ss95cQgWSeYDh2rMApxKd6uRNVcZAaFXTUxf2iB",
  "key29": "36FjbmQiVTcWe4fZAuiTACkcbzmQPbXZqhfQgt8qGR8NRMCbjydkUG6TAS8GdKnrhBkL4WHsg7JK2PczaaadT52j",
  "key30": "bnvS8FGEp8pAeMvZNgXbmAUGz8o4UYgmNFrVoUUd1qMYvuiBpWaQKBpuu7pEhWcFxAv3izrNzBrZahsyzgNRZto",
  "key31": "DXiDV9qnWuzQfkyzvMV51Ap4Pdy6hKXUsdXx8bEi7D2fGPUE2LKy9akz7y6U9gV2YKKj8ZFusqkZpu8jj2DK2ir",
  "key32": "3EizoAP6Db3Zt2sMDjMFTMdgWe7pTKWb6hFLEdKHVHTPQZhbsK8ZuzecYat8M31UjjZXqzWwjUXDPyWXmf4QGapk",
  "key33": "22h7nKg6h8whv5bpoqQ67a8j61m2Wo8paxMKLtj2qwY68vJAizCzRbjVqSFLpitR3GKq3HiUQEt292Sm1fHeQeGV",
  "key34": "21onoZan4jAAmwq8YJozxN3UQ8A97Le5j8CXjv1JR43HCihqAp4UkBoBecdH1uzQNuEJKSA14SepmcHTxJp3G4bR",
  "key35": "3EZ9TV3gFgUmb5fLg3BRsV4EL52FPVK1XBCtqYPsgBhoiYAvTpTaJyK6cYeFHDD7yUQfqBh5UkCcb14hi7EbqZTU",
  "key36": "3JYgGoNW4fRhLzXHvm5nULqVzwCjfD7PXyYc2mwUkkvixFRERFfpbBJhRUxY65QqZ6wnAa5gMRFY7FNpFeEFsxvx",
  "key37": "5VDghkSJBioVxsi1htpznnCg49eKoBd2tQ39vDN5CPM4MZQ7EvzuvqMbyaVVSbrkCggrC52c5hdH8BKoFTWvjoWF",
  "key38": "Ug7pQdpfZ5bubJjeUPUAuL4DeL96TBYcCK8BLiwr9wA5DynZ2bPZb851PKGWawRA6d5N12AS1XqhZvCoCq2voLA",
  "key39": "4PxXGQkJ5NWCitnGdSg3gPfbmifnsRk2B9ZWvT7p6iJQSGo9Jo3nYJWx7V6RLT2BUnLKRtjemJGAGrDkeYUCDdgg",
  "key40": "3CEv6hjK4XhWFRa3fiyc3MPWe27FWs8C9JBghEjYkoZ2sFGJvFBZFhDTxDkob89veRpyGVbBbZBxmY3LTdSDEamL",
  "key41": "S5YbJjMUGqNEminPJh74FZF43HNkisTW2xwC8DFT53PsDCkmY9qwTv6H6dFBRF6XfCtYZXXUDqRmz6ofyYLwCMp",
  "key42": "5j6tJQwsR3LCrnVBD1rmy7sxEpQYjNGYtDvqgbWZ1xqbmXL9cxaT1pY8QrDE4dkRW5JCQgE6EQCCkb5LFWqPbTZ5"
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
