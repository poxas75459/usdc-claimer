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
    "58xmmuRPCpCVSC7svqLmhP61V4vdqMSaEdtqDjVBZdD1hrLzdCxxd7XF9BzFBW8V7LGGR15GhEijHxKGU3V45DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xKXhwySDXvVLuBZmZos4a4y7CuJU5AdTJUUurEaArabPS4ELUP12iHv1Bcf874wT3Ee9EqgJib1JneeS6YfyRcm",
  "key1": "5j3KAyKxvn2Go3xfrr2mTLDgmWcR1yUz4gVnkcZhNtGfWh4oZcmB5MFrr8pyKmiB8vC2Ga3dFQSNJQkhNbqLiMFi",
  "key2": "4MY4frjKJiMxMNwZvjhSdeLYrDveWfpLXWxFLm56KD6xVNp36N7dMSoCzF6EqC242ZpEfnTu4npxxDEu2fKted4J",
  "key3": "FEMc4T8ZigneuVJM7pHfP8xthxMAHEcF24JLyaQrrXsmWeuNdSrGN5Yg7NPxYxEEFchYMy6DG8JCniNyn1JhDoo",
  "key4": "4PSM78ix9cAaHPaUXYcHjhdazYN6bVsCh7Fqqdqvp99P5sAG3RDLRmcgoZRKWXNaUzXUHSgQLtXVfDouEATv9sFz",
  "key5": "3N9X3esbQvcXMvFAJiKYU2WB9j3PErK6ccKynYqqemAzdF7x6PafiFvTxbWMkitqv5ccU4Vi21zKSQSgib7u7Z5J",
  "key6": "9QFP6Dai5FHUQz6srUKcDivTB8iZZVcX1ZHwzGTGW66pKxwMkg6KyNX6euNfNyUGiBXpMEp3oMjpySrZ61YLcJf",
  "key7": "HsuqUxjtGsTUy42VwkrBxmu6rF9NYm6otMdMvGAqrSmkrdSgN9JA8AScqhhBZE82VYuunW8QSJNGa5wrnXg6fvG",
  "key8": "3vPBebRQXATgzTKncjUi3fYoZRzZ7bWqSVTM8G8KC3Fu5knveYGJQMYGYdABsSv985vBW2tkwXMEFawfGM3wfap3",
  "key9": "FADoWaCotH9u9p2PC6Svk4N6wSj8EmYQuDvBXLLDrnNSyWTxNhFNNpEkGquh8xyP2rxrfMrTR6xZgmGRKV7Asxn",
  "key10": "3qQo2msWqn2fUaGHYh4Sr2v3onYbHRNiiTpu2N4WVyMxPCKSnuegDkHDgsc9ETVyc1ZiFqJrDRDdMbQJtVBYX78E",
  "key11": "SUFu4u94e9KwdJbqGzPBSZt5ogjSwTeauG3PWphDWc4Qzm3zEEjnkHcs73yE5bMuMyZtummfCFAxdC7c4MoUWLE",
  "key12": "qLoMK4wFqnGXAKBW1AD4fgY1vQogfymZoi7ByZ3kqizG1QaCSsKrdVZhraFNnu8zA9iZqpcxZ2wW8oeheBwAYE1",
  "key13": "3RA2k7Mw7BXAxKBJZXBgqRQqQniphGfDTJPTpkGTebHZtAADmcPNqRkD6ct7y7taU4HjQBrfYRchaLr2xR3uf4f4",
  "key14": "53zY1v9RP6HDHwFn5dN7oyD4ToooDVtQV57ESyk2BVJAivcwX2FbhF67cS6VyFt7yEAyhV9o3BPf2Ymj8aTUik3E",
  "key15": "492HjEwue27xLXwFxoqEzkWjB62JnHJUeSSzmTTuYBmZB9iFpcwiMY2D5NPSan2rx19Y8fAq3fLGeGi1wDCuBV8S",
  "key16": "2gvumwtj1Ej6pq7uQPDkvNsn2ECPpiBcfpGmRAhTk4VZCHY6HqqDY4rZJm9EFD4hX81vVzT9ex2qVqjKR6kusy7i",
  "key17": "3fkbPp3xAgHa7WjdHP5xK7qySW5KExXiV5xrKu7mx2mVPLJL6DLvYsCrGJ6jT2joN5ctXY7avzaN2L3zLVLYPRes",
  "key18": "49tnjUPVPJ85KDUFZPzeXsqBKyqt3YXHx3Ppn58EYoR5VL4HoUiznjJe7Ba6zoiFsWmQFZCBNRagRPW9vYeFEuHo",
  "key19": "3z5oajwE3uNxKQNbYhzMBBStrcDxajksKZWi2DKykTXr93MCQRkVNBTDX17M2dH3vkrTQfaZNLEK1sjkqfS1ZXAY",
  "key20": "3QSpiHGYrZJ8H9Pwh8mRUoYCGzdtBrpiQpabhtqw6Z6hQhsMfnB36PWAo6p71jbbSRtako8MeuW9VyH6X5p8cGms",
  "key21": "4yxjj4shKLaNzjp71qdMDxRGsBypB37kXgjXtB5bZpsf3p2QxBCo3hiqbM4cDwmzjmJ6bQ9zByZZRGH1g53V6uRX",
  "key22": "2P4RapvaLDGP1rtGbhMTfzD3podWpS8cefAisuux22qw4kmaNrpMF5oHGy6wG3iPYmzn5cejodwHHUpdNKVaZsaK",
  "key23": "dmEymj3StU36XFXWpvfqmdBXQryM5Mi9GTphqesj4ECp4X1nnPhATDSszcRpTgzTs49CMzNHjvwGCCgmzezo5o4",
  "key24": "2fTj9ESw9PhtDv9EAZiXMyaUzqp6rH9Wmra7hvHkFvNu169RaE6hBT3edWQbrmnJeZXt1jP4zzmuV5JNkmJRrddN",
  "key25": "5ZmAyBRKWwMceeLezYmBoB8KemR3mjBzHW2noK51nDDt2u9QwTrBLbMMUoSXoHXwmgVJjSxZpVXY4gVqf7VwXnt6",
  "key26": "3e5w6HKrkLtUFE7zgKBhjHyRPrMeBeZ1nLn5yPH9e5EgPMVNdUyvNtRBt3urMUqbCZXgJdrBjdyWCt5prMz2FDec",
  "key27": "5tRJaVEnPYZFGcW9X9o3NY68XbVMY8hSmceJqmYSUzMpt677YPsF2dkdKr7JH8d2eLVjvW7zj1nWfLgtzQ3MoSXZ",
  "key28": "4kXsk2UCfvY8fBGLPSBCiyn8d2Q1QQJ2QfwW9pCZ7vYsU1DoeBciYrZUFHc8efraWE5MwvtRwZ7Ur6NZ1Vi3tm42",
  "key29": "fmLk6mRfza1uu8UYoyT63u48z6Lvo447LitFAsUAqsoxrw78HyQR7E6NPGtb3DdBGfRNqnrGerPzQBMoZvevACS",
  "key30": "5DX2vMXHjrvqsRc99MvRCZy88ZsqWVfQheX64A3SuQrMS2XSWT2CvQT9CM1mccVJ66z35zDoZhhbMCmh3A4JsTku"
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
