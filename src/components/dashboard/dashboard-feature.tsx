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
    "2vP8YPrgaTZczfzCafzehYPWM52K7PGFfCDTVu3QWjeH5EUXa8wtv3rARYQNSxbDcVYMX6KFe4ymjfsKA9MZ8Nh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yCyBsGazqWkfTLjTXt6xUqZrhiV96xHcvkNNgTnAtVw9cek1k11KJjqs8EqErQ9C9qXnFpWNNX8nAVFAuEDiUFe",
  "key1": "4nrMR1gjLF9UDmbzWTo3jX71Z9f94Fu5ZCysBXex5HR7tXuphnQWewFRrP6cE9zuBqVUTWKxQNzvc6RYKMhKGbZ3",
  "key2": "uiR3TyQZDFZagyoCStJePujWT58vYypFVSKetEJ1ScJe8cQg6BkC2uVUqNpdVABMuibF3Z69UKa1Xf89GAjGysf",
  "key3": "2oc4RsZapJsyGHLEPswnY6W4RcRPGs6KqSYL24nggdYu7zbycpActpEz2LYGK2ErbHfmu3qNnkfxjwpPjtQaAn6U",
  "key4": "3VtZGiua1yasymaMEYoP8uWShV8bNkjzSAvmkRcH6sc2gaXmJuCakVFAVydE6Z2EFxS8jRc6V53M3JJ24Hmb15D6",
  "key5": "2Q3Pvsc5Gi2SpR2cQSNVN6Zgf1GMg62AD5wboK7FvXmV4gt5L5qUP8m7z3JkadScLs9HQa6o6grtH4hGMG6Ps7g2",
  "key6": "3nMVCd9WwPEG4LrwWAgLr4i5rLeh8JvoebvXjyvzZWb7SMKQjDpYpXvqxwwGT2PLZsovaiyxd9iTdW9Aksm12eYC",
  "key7": "4NbGavRKFGsEpbcAhRFCk1DCzzRDHj2beCQj4M3QEDvXZ3vD7yunxjuwS8EUc9wizvTX36SCTiwyv3Y1pd2wcUb5",
  "key8": "Ra1QvWf7Ei17H7s2kvqrczEnRXaUVM6gpNooCdgjLxtSWqjGSQvtrvX6nmKcZ5V42uEWg1zmByh8nWz7H4LgZRf",
  "key9": "4pDF7kFWPEfc6J8C81doP1ej4BYXuegZe9gMacnxFLHC1Pth4EWYsqErPTqGZthpMzuHDn93LgAN9zBkukZY6iqL",
  "key10": "UbeTgZfy1z4pLAtoNYMnfa37x8YN6E8u3LnFHxuNbwgaunKox6P7kp7VVm44jaatRuRPzFGcZLhaSaMLuR1f1CJ",
  "key11": "5tToNCyeJrx5MUnYPBvc58VXomjqb1UtbY7kpLb519A6ThtgHd3RGWdz2EUriDwCH6SvMwmuRRWxZEYebevEDUay",
  "key12": "8GtRo9wYTUXoNDmiz5EmRPJmuKMRBBgpy3wPustaEJfAf1XCrPnv9YXFL7dEiuKBVAnLq77GXrtNBRnLasJBtrB",
  "key13": "2zk9U2Zv4LpAEQoXGcg2KL8dqPmTjmrWyAAUc6PQusk29PM9nUt8atpxBzjmfe722cKyRXcrY98hUvz8ULUEYU42",
  "key14": "5uu12r89yR3pcnWD4BCd6BD1PRithvX39EgWxvh7kfHVG1kyDSM3ej87RiGRgem5qvBHcR5cJisHZHeELLRKzexp",
  "key15": "5UEZayLWQXVBMGLfzzpYUaH7SBLHQkzhPjpF1mc9qL8JgvX7aV8spB76vWpuPQ7tg2TUaML7RhSpCzvdnNbaPmBQ",
  "key16": "3Vp8siqxaRm1WJEj18eFZjds56FFkp56CfyiE6heeecnxSDGcPy7zTRkLFvaD4V4DNU1ckKiWUZLsPeMDR2zwXZw",
  "key17": "4L6XnprhoS9u7uhhiMG8FQniBuD52NMpJcXqreMvFsu8kA3tXMCuHzmmjRXDW78qqd8hSqiz9QDh53xZ5Xjt1MhM",
  "key18": "KZewPAJT4DAD8nzSHHihgufb7D16GSS3tBRNYAtJuMeUxSXKDufo4SenhxaZDq7Dmmjrxnci7bWdUMXEB2jGrwL",
  "key19": "64ggbnk1GNVYikApc9o2PywmpDbxwGNM98Y7qKVxStstdvmLhUYywRWseTkR5tmhoAZEQo83C7HkAhyQ1w5EGLoE",
  "key20": "2LkcVqQXBQjbLiJcqoCGhNGKuzhGSsyz9N8KfNitS5sXohqrVkWrKmbtPKjcgVFvEaHC8TETtyRNMzNyZyS5snLy",
  "key21": "2su1i2ddFGqodPiPPSpZHPyBK99XhuJdZbFWb5w5C2LYQB757h6CSqJsp2VFSLdwgRRgL494mGpoB8kwCPzsgRkq",
  "key22": "2jztuzb2rwiDBFwroUMbABVVtXtrqdV7NxiamK87HZDUwAmguaA6nrTMdSojQ3tS6z9aKDXoG4xrG3GMaKRMoRoP",
  "key23": "2XQuaMcTYwomv5oryjWQHtsz1bf4WdthFoYKER1kv4FektET9N7ugnqug6hZs7H57591Kzz4K92Ya5DycW58xzZA",
  "key24": "5QbJHXczq5CNgVn6ao9SBaQPz7FSpRtkpf5eXR5hdvSfoq7CyDjmEunFYER3UKMmBd3hdNAtr4AjaPDcSXUoeLiP",
  "key25": "317NcPvmk5M2PNZs7QBTkkdpgDDzsv3F3Q4Q3M1Rn8jPzGtcxffuSDoTzma3c2iKhVdcHphpff7KmUwG6WwJQAL2",
  "key26": "4hXZNWDubPCJfEZtbivbizLS9fHXUVmhkSdBaCC79Mkke7ycW9EWKk7Bcd2HNP9yKSHWfo748DwwHoQM46uD1YFb",
  "key27": "5wSK9RDEzmcnBYtRR3hCLhGMCVWqbrEPCDzh5QocHZBH9P1JHpFPmGRbe2gFQs1QG5cPpZcge7357GW6cppoMTk4",
  "key28": "42qfKjCoQ4G9yaHjrXwPRvfY39fpGGzZFGFUuk7bTo4m7E3bVXztq49MVxtXUFzCmmVFEPKwaxTpyRonmdRuiUnx",
  "key29": "4otEwXVALWYRRcjQyhnnP6GsCN4FBzmEYc9aznwrv8uh7m1f842SKxfhpogdpMZFaKVrKDL9RKzSTADNmutPmEfS",
  "key30": "23j8ttM1U6iWbiyeA8w77Z7X2BYwfLXcDWuXEoMvVDWQX9q29XkiBsscmFzRxzHgVGDWoWtkKGv7tzzjEnzCb5RS",
  "key31": "XHwpSSg4pKKaewLTgCz5kcAKvA1Uj7P2gpPjtJ4Mjy1LSuEgyZwN4JiB1YPT9UUSWjivHfxePzMj6A9NRbU44Pn",
  "key32": "5A3ySWFh2ASPnzfbzdLDitw5cM122snzZBGTeLSYpiLk9M41XcVrgevUNJBiHEvsf7r2Hu3fm3at5MgAFYtoHPNz",
  "key33": "465X4RrZMa9Beg2C4HYX25wqQgoFtoPXGHPrKjC7FaMTTSwXJ3P1HxwSttsm67hNFpNAezLVhYwWbvtH3L72UE8K",
  "key34": "45eyiPHzCHBMMEW67tRPREq2wgoDd6Gq92sQkJ6rTmPHDWExTQW2wUATrAibD6EJAipproDLvyMKdctbhS3rjbDt",
  "key35": "3MB7AGhMW9ALMsVyagBnJP8WUbcdQYvchgqb8zj7jobBGkXQixQiBygmZTJghq22xSobLiAQwkPb5RpFoe1taP4r",
  "key36": "2iGDzNYHJywXKeL9rdqQAs9b7tvLrYqPAnZuA5YRa5oRrYpTQpm4jK54XfLHxs1a2QfDD13qMErLM2QU64jscPmF",
  "key37": "3aCM2Wi3mZdLa1ce6sBnyXXYMmAXafmFEpj5tLjYzpuchwp7zuVRNinVYDqUESxzfsYNH77W2r5PvSsfC27aXiTR",
  "key38": "4827SprHDq9aDcvaLfEBZumqGbHDodDSNTRL43xv1ADWpkQA7owd2GqtznpeNDLnNo7mUYoTH7fYPDCKexcMpmu1",
  "key39": "4De5SNyzyi1rDjJVYf2CbaUwRVw9akTGCf3k3BdFPnxrcnDBdThhQSFsdT6fq9W9HHpWAwGhMp2QD7i9ZYFp58cz",
  "key40": "5973KMnfsSSg7rtvmjCso36XjBWNZi5ipvNeaMtzrM3MRXQxEoik4Y7RnRTQReE9G1Ya3Ww5n7tYcHxHv5UqQoD7",
  "key41": "Gug6EgvZQSknFxwgvLopQaeUmngQqERQ3SfCZfY1BjyqcNdjh8qxiynmm2nXJVFCZRsngqZn7QhWr6YmjoZJtpk",
  "key42": "3TLe9BhaW74BPzDtq599nQs94AYnRXaMLWz7bEVU3XWHv8nC6q5w3j13c44t4D3EX6rdE5WxK2PVZMxSbRWGCpaf",
  "key43": "CaAA4HHLSG3g18DMfdchZnjKezpr68EF2yAFdVAv5ukfzjQLm6Huf7Tnz9LQoPu6Us4Z1guyNR2VFQiLK6KZikp",
  "key44": "2xa6FDSsXLjJ5AeTTriNEAB4NuJfuwtVhRACz7CTCJEXmxN9mXYAMg859LsTrV2D9jqeNhKuwNDpbrH3SssXJctM",
  "key45": "5N4ACPTxLEQmxWZN55k4ZA2nsvwzbqbpQ7x6srL3zsCgNmwoJ4YgorECd8yLvujjVtoh4wdwgD2GQdptTc4WdNan",
  "key46": "5rXxcMG2rJotMxa4BMndqnXCUL8QR3twGFkNPA5Gt6XLHdmBco8BL9sEusoDtLiTJkxqQu1p9gSrr9azsPtjR5s6"
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
