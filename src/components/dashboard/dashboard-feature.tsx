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
    "3KoimFHCVG8kmCjvBELEiDTfeoa5nwBWjAMjbxTdqSMP2rrJKJacXGKqdpyQv9SbCqYpFiVtcFSPb7a82pPj9nuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PdBYSERNQj4JmfKRVN7PCPd5SqLSZjRKCufsez5Wr8UrB6gwNurSUKUXJSAFG5HJSs7hkcvK4j2Vnhk12NVKnXF",
  "key1": "5FHc4x9sDa77bbmxnF4UXg8jssHYma8BVwBcWS3VX3a9fCg7dtWiS9wFtXe75N6adLhYKbj7pcysEjfEQ6xwD4Sk",
  "key2": "hQm5xk7xadGxxnhE4GXNAcVHWyo7tFdDG4xazxMVAvGJrdMAsrmWQiodZiECQ99PgUeGoKmFN7aZ8sjxMeT8erb",
  "key3": "57J9CW7Vehdq3XKUxMrKJvf7dhDpC4UGhP25xLZP91necRjy4pSKckR1gNV1XPw4ZNfttSfsdUPQ3EjQNYrfHn33",
  "key4": "4mnkG5tKw421QwmG2ACDvfQMqvvq8Q9ispU3Q5QV86zC85zYYLKQxGiaBr8kyRS4V64H7AeCLTYEB5kqzbVVqEpY",
  "key5": "4xauMrQfr7wEfTLmCpiAALzR6XJRni1oA4mj9i3hHfBxbKJuAbqtZiDVj8mLfc4e6LL7ordxUN5qTzmtyKHTMfUw",
  "key6": "3S2D5bvN5i6ifWNqpVBp6HxzBXN78PaskAHS4WxWibPVdmuBXdvL6HWwVgopetdh7EemqUScudQQbGtBNYenjApE",
  "key7": "4JFhUg5N18AFZ1pTHg7WUFquXsRRrHGvS9bg6vM4bZwuRioY34Ge6WFrvDFE96ZEmmMn8iuH6eZ5tBxb6Wzp84s5",
  "key8": "2K7gwepkFR9QQvm5QcBUYF3vi6ecrsCenEVhaFDEAA8uYxE2FNkC7N9We1t5bTcH3yxyqEZGqvooTfA6Yr6Yf8Ju",
  "key9": "5YqpdSdeHxtKqHw84kPFBLLWNL4WXAzt4yXucR3SvoiFcR6KoqJuUcVAqUVJViFsRrmCFrbazq8vkV2tQRG7VGk6",
  "key10": "33Xg75dNaX8LP7tzaThYnw1NA9R9KsTKLFwyGVfCV4G6LAbs6vB1hRfczXrPXTJZRVFzfNkKCbxvhHoYhS4QuHvu",
  "key11": "2bGKSeV9A5yqqPcAiV6XaWb9pkHu4s4azoLfCr5Rmwd3K4RN1K6qAGvkj8ghK8TNVGzhDY7kkb7rMUNFhynUDcyA",
  "key12": "48dDvoU4LEyT4maExJB1q27MDf1mrswNypZidWHV7QcqYtVfc8uLgEts7fBsyiMTgEsjvgofCySbAN83fRtAovi7",
  "key13": "67bAi3E1euACexrmtZEcRMN5AKbpYAHdAQJMeBBzjfphb6GNrp5cySX8GhG3AaHKG5XFHZPyzWbRP1kYRfTVaNaW",
  "key14": "3BGYwuJv1fLLJtVwDeTVWfZJrZ8coQee4S4Xo5iuve88RFE6MxNkc1AbNDa3bmidbBNKTMp1SCURrqYP6x9vqmck",
  "key15": "64BPLC4M1j3GfvDS5aa21K1wqRGPs6YNbJ9Qwk9JwvLqx9QuQMPJETn6BkST3Ego9N24L38TCSQj8CeSsRrPNFB8",
  "key16": "24xazktakqvQR9oqnZ1gRUXV7X1hfVFENJDTVvrmMbLk3H93QSYbUG49tcg1hQ1hnS5xvwytDSQ6yZK9Gt1M5bwZ",
  "key17": "3A9w1HLU9aV5kiQqPtzwXLPf5R4UfQ9FTuiHFJHcG4Bp9aeaFDtogbExirompjeMU48nEXVmUhnXB9C46JB7hpqw",
  "key18": "MRRxvb3VfMs23THt7DcTWT1UgXpteKofwkyarR6pHYx4jrZjLncDuGtbeiLVaNefHZwDwz63RKGGaMqKQehk9Wz",
  "key19": "4ViAiRbpCQEbsB6jXJr2RCaJjFJLWYkRJM8WwisZVSxVLNv5AEAMkZPrMkpRqohRrUxrNcBM6gwHB4iwSovvPyeJ",
  "key20": "41fmrfxE8h8VVa9iJqehe8sckRQ9RCuA8RAYXVjNVo6Ex6D9J833YsbTTThtwxTy2M4ARroaL31MGQg8s9qRJX3U",
  "key21": "v4zuQ3qtVpGJ4vVcLXGR74vSkDjzMBwQBxjJkzFeJmCqmooaDbSXVZsi7ECatv52ZuCRcrD9B2JKQoVyBgpv2Zy",
  "key22": "22XVkMBCrLM1UoY5G6ZMNf2Q2Wft9JquKWBFK6kJRvM9WdDxyuqJk9wCyhsqBbi9n3g5R4McUorZXXrpsiADsTrF",
  "key23": "2Z7KQ2Mhaz2G7RmnfdKfETfm9Kd9nrrigpJsPk13tK7KB2EMT6UNVLGQDWt2u5ezzhEa6FL5PLpzru3rzsTxVvAm",
  "key24": "4PkfuSaBoBDsAn6MsDuJdZCT7YmMm2i2tuYnQzhFpWG9THE7eF6PefcTArdp7RaHVDhAXLbVuXdYpcPqSYu9ueLY",
  "key25": "3Ff4XYJUDGqamuAkhXapwtxLoCMAZTowAova4NeoyW8E6vj2TT7beaa7ipwKxzGLMVHBLjXYrQgaGfv6at5VzGQs",
  "key26": "nt5Jf7H3ELTqKS1Tntfkbidd3cn3WqtGYojBcCFi2bNB9bbm242MHfXkZBzrAmdMSt5xhRiyGdhbFXGCdY6Rz2y",
  "key27": "2gjPmoJ7LECtqJhtK2prJ535snTc12ASaRY85taVbPyCM1faxx2L9LFq1kb6wRV3s7oDb6igNGr7X7L5FbjKZNN3",
  "key28": "59PxXLYVBLyNeexcLHMdAMtRD5LM8H61oCoQ4Pc81bYm7tyfG9YKeYmux1tc95qtD1PyvRQyn5j2rqsQAsHKs344",
  "key29": "2V7tzAxygFegDMkewAQF51aiRsJVFADRRWd1gojrfV7M94zezFSRK7MWWvPSN2fKK5dgeie8WG3RRY1iMrv2hXjc",
  "key30": "QZrn6UnhBeqoRB26JKLtQNbrCMgJZC9zTcFAPQRP7m2dqGBZ2qGHLN4nvjAaanPWsKcdE6YEuncuLj6CHdmkvvm",
  "key31": "3Wic4oKTJryJm7yWLERxKR8TXAPHxK8BgskLQ9grMVvNYTrR8Btnj7uBdcNkEam5YXa6yFeC2tSu1qDfZuYAeAuB",
  "key32": "5D7sq77uQV4wxziV5d7gKVur713FBD1uRdfCyi5K5g2XH49vvNy7PUawwCVd4j5pcVHz3UTUVJP6xHPCWJ3ZnwUk",
  "key33": "K7CMD5CFRCn2jVL2qALBFrtNQ9DTnkRr6qsZaD7Esv65c5ceLJBGMqLX3c6zjRgh5bYfSHo37DAcPtDziVbobyH",
  "key34": "2cJx8Ey3riYNkb7qBJ91uTbdF2p15Zz9nTMkBCdtmFPArkPa6KaZepqAxYPhQyQCL2bnAmNweAzSrhmNC4q7Ft1w"
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
