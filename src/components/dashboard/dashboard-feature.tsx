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
    "5VSFdeTt5M2oHLcic4dMdssn8pW2V6VCJnv5P3PpRFNM4JVXbhprrdj2ucjqLcvKmsBToh7GjWqnaWo2dCBEjoq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HiUjeVteJNZpenRDwXQJN4yyuFoj4oRqByFX7JdEFFChasZPrCgKYw4uXi68jYgfknHNBQzvF8a7AZjdhkNeZZ",
  "key1": "2R1k8rAwVypdW1fAxkFoi9xMnHMMwKvVKiS573CwvGfpBKnEnrqwSsQtwGmGhufgpC86fuTs6Gc6F6Ug3U2iHBjH",
  "key2": "6Kpd1X9MRM1E7TaCDYeBotBVF4vgofBijUYbMRhejsS2ZRTKoRW4GUfgDmf7Cw5pbjpQ4eC144YFjYjx1XVpeka",
  "key3": "c7oyJ3oSE22opma1sM1N9vGeHZ45WbLJHhN8UdEojGY4fo19k1txV7TqnfyE6DtB5hR6YV8x2Hb65ASTVspRFNV",
  "key4": "kejMTRnLohLjYU8PfMLsV8ChszPdL7fy7iVJhBPtgsLZeWfEnAAhrh4Pbj88243B9vUKq5vXmDYm7ddrWPbJiZs",
  "key5": "5eiWFsZJED29LCdisDw974BW6i8UzaW4ga8Le5SYp6Mj89ioVmxgKELGpPTMEZGPp9sYv2yeHg2FUCVwvJYgBRjk",
  "key6": "2NMQXHeF78W4U49sxGFzdbktn4xZMmCk93HLB6ypcPtWUUtuQvMtNsbyrLiAbN3D6B7fBuNWgaR5VVazWX1dpGN8",
  "key7": "5c9Nsp1izxJr4wJNaj2gkuE9JVLcBNB5t7cmmi5MGjoTeZLdVFaFsHkQYKKZSTudQs8cd3DG2va2sAmViD6BY71W",
  "key8": "577QJ3pN2er5XevAKp7YNdxaCB1LPRw2BKN6jTJnhLEhdjfQGizosur4bARDAGcQm39JL1JvqFEE8mk64z8zeMz2",
  "key9": "256mbj9d1qW9o69GXZNrasuFsmYFeEop4cdLtmz43HPeJdVXuRUdJraZeW8mHNY7ir74EEhcKjvvCGdzuY6FymfH",
  "key10": "fd7BprBAUikH7qrHDNTTAx2yF7CYBQgJamSJ5vbWJX82q9doTWb5QqWYk1vw4Qc7bc1Daqf71FfSxiFdGAwbrit",
  "key11": "4Lxeos3WCZZCGzGHNNZd32EPkCqVqDAcrD8KboiBwLMbLWgZdui3eGTpPi4PQYpHpz2UY3DeAAphK9wtmJ8ouGt4",
  "key12": "4LVkreveb12y34dLxw3NaJSvu2FZhtCkH1cGH8gkedzxoNzh2L4wuvQgTkQpe2dmNkAxmiYHhgUPHibdPkwDGGEr",
  "key13": "5kT4XyBpQvWAZc96zkLBrdxir54EaZQsK3fk5feLht742Kya7ou2MsrZGeUyi62eFCQKnznvpA5TkMyzRCUXyKAe",
  "key14": "4hFaKZCdxqVYKYs7BLwUEShB1JxAQQGBRuuqkZLmoNVYYA74E5m6VVFPPAiH2d496Ezk1Qxf58fNKodm5MHeHJWK",
  "key15": "5JrK5RM8N6JWTsu1Gh8WeWBvv5T9XQcGrkEM6AKp6cxq76mjotfkvSfc21iG3b1Z5Fq7Atv9u7tskVtARr6vWG37",
  "key16": "3WQCBb84XprPCe5sYBWmd9Z9BN9KhvgcHX7ZzBREsH7MMnqfuC2CYCxpkSqYNngh6ntqepyPvULtu7BDgXeBu3v",
  "key17": "2T6tonQ2ifhaQK34Ztfc2anEBxpqsGawEiCLtZofAWmD8ZfdjxU5emuQuz5VtRUqdexMtSxf9iySkGdxZsMmNuKp",
  "key18": "5YkxoNvJ7jqcQ8dUgswdVS3Gg61HfKUcGYfqr47e9vjpiJSBeGrCQmF8VKwX6zVxHySrBzspqDgH9C4r8on6LfvG",
  "key19": "5SafxUUdXxAUdtZKRRhnHZ87ZC4VHHy9eyDrRxeTVJwYJM8PhxnfkipwH5a1ovEnGqyKXJ8by1zg3TcsGaeZaMRT",
  "key20": "NxoswmGNAun6o8a3bDy4pQSW21trJsw3h7MwZYgjkiAXQDYSjvk3N1NELnbCYYLwMwK6XmwdKbci2Ji676wowbo",
  "key21": "5vvk2jpWj5ZzthoHxPZ1LBj5vtR5NdbvH6pbEW2QHJ1tKd1b1z6sDWxZkGu6BFnEeGfivEdh85nXcq7ZiK83RZfS",
  "key22": "5tw3RZ2xDHtKBSf9zxbu2ymEWtkTcZFsL1dQfUAfQ1YFKpZhhV2wwNGq78FUqvdLJh1VVH1Jp5CE13YMCTdd2ipw",
  "key23": "5H78r8evRQSMhEZrYiVYUsNmnsjSTKZqFKAWvzJKEoN9KxqJsBJiFnNst6cfjpYJYftXtLLJNEeXAZRff7mMzajU",
  "key24": "xu77WUYqhNM8GVmFwfc6M5Q1kyN7EBn6kqJow4cegF9zm4rn48giGYxVATYH3pjrqj7VAFMJLe9dg8SkckzoRyJ",
  "key25": "3AkQhoQ4dL52nNBhHDwyNcudM6pbRFJvK4CtGQbLpm3juuAVqL6QNh7wMtnixWnD6WgpPNFYpLyVe2yoXoaowwDj",
  "key26": "42FdAENfwDqiqrrNBVtkVd9CFZFjaycKJziY8QRvmP586DGmgBBZzoWqw8vAfLzEPe3qm83vuNtBZWpJaUj1R4QW",
  "key27": "44kCVAFw1k4wVJRxbX55UEfHv3W7ncvn5NrHfgcPRJy8uGaYg8sP2HsBhuGP1wRTBFbu38pEynvv2cE6h95RjVDM",
  "key28": "SNAUPBnxMbmyYjJJ6KJz2Ym74YEN3xBzsCA7JJnaQh4unZoAXwswT3rpSuYgmr2zsT8ixbFSEuNk9u5ogEn6fpb",
  "key29": "3WdJg8j7hWcjPHrsexSsJcrgxNdXPZptpbYJiztZtXpQYrqu4z3praPtXrj5mxwRHSkShzhSnAFG3RXiUXWMyWkk",
  "key30": "322fV6ySm8sp3shD8SiL2Veg6kGVAXid4XEBmHNnmn3WZ7NHvaPdFbHJFSA3mQeEXngiGyJHgHvJgG37oyc7uBKh",
  "key31": "aALnoEpBZV336GD5PUQn5NSRXobTUNjJaKPfRgCT1V45nnVg6ZNgsFLSYJfweCVvAwnaEty9EtkYMG22cFDg3VG",
  "key32": "5eLGpeK1b6J4x8zRYS75Y8RzBgakxQ2A4tdQ31wNaJUmubKB3qM49cjepjd66g7ABmzoMqQj48XFfNCERYvNRJby",
  "key33": "41GeWmbMihx1hA46nCXE4Z3HuMjTUcmJ25eTfM9P1xyjkQMBCnNpzsQ8yXbnEDevgXaWtMzPoUtwd1soWgFjEC7c",
  "key34": "3VwKV3ub2QPEPnP4TPYnsKXxNCrQukaAcFBGJdpBS5FZmWeukRxSiYyhjwmtfsMQx8oou3rcZ3sUZ6PrL85q5zAL",
  "key35": "2YjN9oqMyXegr4BeUxqah7opY1cb2bmHh4MfCEYAF7qcip7v6vaUKPjMR9rJqo5dDLFc1VTmB84hjgqfcQi8BkXj",
  "key36": "dGZkd59djMncFujDj5XyhJkc8kvXuHfRiW7hgTmLQ4r9Y2YYEJioWNrmicXDA9uaZkoYCQMooJFPtuobvUConZs",
  "key37": "3xT3dQQgvVkLK8rAUpChZrzGFreK8d3XwC8ALRN5s49xrwL8GLaJYoL5GUaeR4j6vyT1qSYLyBzYXCpGi7pNzVCZ",
  "key38": "QNoC5QvVE8vLrVs8DhbMk78qCgG2Gi7xBv7eD7dMy6oxKSDfm96eaRYxYB4E2e2eUa61gCnHYHosAABcoTJsEF7",
  "key39": "Y58DRYr4ZRdVCgU5zK3aPMftHxmRFtzukwW9Y68oPC8sFtG8s7ynMSV7YLmhAGZyg6Vqhd7x55qZz3WhJRnscos",
  "key40": "4xgodLjSE1jgZ5FHF8J9KJEmqnoMs3KGkCyKZegpFhNE1E4zUPwhmasJiRcsGp9JbT8hFq6bvwkBg3JjKv1v5wjd",
  "key41": "3iuiJ1LpYJJnzNdFPJXeMgGv8w1QMDypz5wugFiny7fiWU2JwTC6w5D5Rame9kqR6f5ZvpetXEmybWTnoWX1uhqS"
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
