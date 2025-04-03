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
    "5nJBxq5kXkMPCaFSXGkD6hzAotiSN2FzxDuCMxACeE5b6aV5HrBTNe9psrGkcbvgimkP681BurECp4dVHDmQ4W3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phNCRV67iwx846uJnuKpYMGaL54BiUfetSdx4TLRLdn7GKgifJvsRJpzuB7yfLwJxxXmdJ6KgN3cEnvNMmajr1F",
  "key1": "2G6mxb7Ccde2Lz2UayMNyenHRJUDecWyq3Q9WTT9d2iYBt3KwVJ2252RWFUuDHXPWr3yMRgrU3xD5UNdMjPjvvEX",
  "key2": "5sBYe1RTSEfQYKewHL2M2oDACJ3BGhBLWDb4GtzAK2z3KqLWF4SXYxKzr7U8gdtADVjNuneXe5uUaJQERZky4GVh",
  "key3": "5CuMnQEQ6Y1EgicaEFrNVg2e6NYcGGCZYgUZYCpXX6yS7hFMFWGRGZjbnVqcbCu5QSvH1CTgNhHpsQ1SkRat5SGS",
  "key4": "4e2L3pLqaoRFULYzJ2Wj8QJTA8M4RCzENVfYFoqFPMDtuV8uFt4C6BVLgE7xy7T51mv3Hw6tRxAi3PcZBz38HBga",
  "key5": "A9nCJpV7Lzyve6Gie5nu2q9P8h89c1F43cpAgF1hAyNKKZ62Lv95Ydndt2hQGr1qnQvrqER7fPj3eG7qk6Mbob7",
  "key6": "2US4VdzNGZxYnCAE2fVMcv89Aqv6kLjKSmM7vF5e3r9CcrG5A5RgXY1F7qKdyDiH9jRrMwjm6f1T6f1Sam6x72Zy",
  "key7": "3WEgpTKygAjjme8Rn1QnWtb2PZeJ42L71Un195cmz9y3DBSg9qoerKq1zWTaCJ8a1jd8QmrYMUPqYnE1REeQoxnv",
  "key8": "3SCt2iPYWZeTCChrRZAtBbvELejb4T4CTPiEboxjuVDqBHSXS7fKMpsd2F8d5SWut77hDjn85KEGqSEv1WwnLPVM",
  "key9": "JNdwLY2U6vRxKxdpXqfxdotn54raJ67yrkTTj3Gybo2v13ckbi8LRxgTcK6z8LigbJgfxuihyrRgQPZCgyE7waA",
  "key10": "5HQFTKiHorhVTHQQAURRs2drXruFHQ4KvB4FtJxvLaYdLvqr5wKnRPUmkMAYRbQX375BZVEhcRMrmRrLPCuHaM62",
  "key11": "4h4HVvDqMyA4WA4FJdbGb14XBtq4GoQf18knrwdsSpMbx1yeTTVaVVyjnaQMa6TrFRPnu3khnALbS9S6fUjKPEBo",
  "key12": "2NwPxfXu9AiirRenfJoZVtXgDnZpcAqFRXd4z4VyKa8LVfXqCdKbwpgRkZPhm4EeP5csHSvAaTEikN5bapB9RGmj",
  "key13": "2SGPMeifhqvQkWwvNSQkqWgRkwzNc43p9AA6a3asRdC2jww76ZLjn6jEH36ARSqctTZppsKMiGtetdjK7b7t3sXm",
  "key14": "5VcasKAD68ZdjecHJqod21kFiDduZ2hKDmZwfSsy2GKDHGwznnpdU6btNq8AHSUxDEXey46YdqgJRn5Y95zteM6N",
  "key15": "3Ywsku3P2ucnv9nhXuhEyGsLQw6QtGVB2X8ZodxwkrUg7grxYk2FArvcxiWy4vE51sgGtYbQKmMxbtpkQjSSeeUX",
  "key16": "Yd3DSFt5xDTYF85x6rGvtKxqoqmS74cv76JNMvLeJRHXtByA5XhQDcEx342SEnH9fsmaxmRhmBGRvc1WusQyqxW",
  "key17": "3D5S3Riue3eZAmEd79RAwvkGYaFBBqAtsbo6Fs5NQdeXn9PvtLefP4eZJ277sWHfBRk5iuTWU2yRMZ1XRiBpig9p",
  "key18": "2nctbfAru43KBRpme1cwwcbbZFB5b8pQ3y9FyNQW51PWXSf4HB1C9o6hF5uU2Hi7onFAzy6Pq1W31XB4YT7jssrv",
  "key19": "xcBqaP1LSH9eHD39vy4oY47W2S4W5D3qMJmWMJToxo5ShASBG56vVdj5j9YwfCccRLcN5fDpmJX954pHKucKwHU",
  "key20": "cFA2qs8BGALaM7bWJx4n8dXycz6rmCpxx58cx1QYr5tRgNC5S7STGtNCbGixHaHBe4QSTBp5reK6W4mePxcJvpS",
  "key21": "2Aapbkf4TJQjyMUjLtVmxBvDfta9pj1zM5cf3J7La99XvbSyPiD4jB6eL87U6dHjAesb2ZHHBbs4KMB6JkTrqkBH",
  "key22": "2MGVkpqs8Lo1KCKFNBiN1zQCSwLXj7kPLEBjbEYREUKbcWPnaUCK5foeojHa9EgHQ6smkRAp6Pfxuum97sNv1sgc",
  "key23": "UaqmcNPFwnnBBzKW4uHFmftDwr8f1z6CU7hwVLyhgcWFuwpUSY8hvbVF8jij3aXRqfTnrnifgn3wut4zMfio5C4",
  "key24": "4p15KYVfnpkbZxVkNiPW2YwuNJaUyk2kM9feHFyTG4ttJ3i6N61oU2vrnoH267zbvsMHyPqL8eGaLTMW1faN1sKY",
  "key25": "438S6RKxBM5L4aYxhgJengsTxFUna4mdEnhnTGznMP1qUTvtoR6CA4PL8knxbpLDXZW6x3Krsrf6fwzvLepiDt5N",
  "key26": "66htf86gER4T3iXma7447kMqNpEYzBoj2NsBsHwnHDZYksunsnDm2sr5DU2QGSZbF1fRdNST99ySNs8rYY1Z3ywn",
  "key27": "4eR9a2gjrYAHVmqvVTjV3TRuK5DxQV7ciyCjaSbb2Crpyj3V67t1NsDAEhPQSnbLS98De9GrNZCsJYHjezpge2uh",
  "key28": "3hrdAQHPv7TPXuYHQRouxhu97fA3FpcWYqKoh9VF5qfKsV1DGpUUtVB5ZL48auRUV2gRgV32TvNqCeqF41GtpQg5",
  "key29": "3Q2RBmpS3kfKRKfZVgZupdq9r5CBdXsuzJbLJBuJ7SVHB6o7d1dEUoPmh6DEoit5d7Lg1cGwDKsK8VBpLa4ou8GF",
  "key30": "4J2iMGdgcauggdGGsRtrNodnLYfVZ6J8C6xxxaAGLcebYBkVdB3iSwBLXG7U4HgQkhcxtDPJpHeEAycJ5Y5znW7d",
  "key31": "3ngs2wAJWrco6KUT2JYcRWbm56tEa2ymXdza8tgzUs2UYzBxcbyatbDreJyyZfZdjvqGTsLKaaLotNvXoo8viTRr",
  "key32": "4cc1pgAAxn7BgCabGmjbvLfeiFnvZwfDeCezDNDhQ6BvayMvMmNUyx8yxLg6fTdNvMMvGLJH1jLJjpvk7FKyiSK4",
  "key33": "5rhConhsEEZA1HH7NGhrHQpcVayK2oj4nFSYHZLvctUsoTMM1H54H9bWe8WBMfdTxS2ZvCFPsqaH8YXc2KcuDnEZ",
  "key34": "aUBwKHfRaNR3G5uTAdxb1RChLjjEwca75czqVWLFJ9HpXAdYSEMGiVyyjgfoKt5ycfHLSurikpwF4zq4E5PyZXU",
  "key35": "4hqEiqkfZrNyy8meuNVtHVaj1JJpdRgX86UkmxBr2KcS6auMQi9uskz4fZhw5oCPJ5ba8qoBKPYPe8yTJYZLEMBF",
  "key36": "27wqnKXR7HRjrH42gpnRnAhXjyDa2zKKMrcGhuQd5BhCNFhL6VoQemErEGQTtw9wmu6iPD59MhYwHACZmJ5a4MBw",
  "key37": "4k9khjZ9KRYCdcELkqVFac2PphL8T8SWz5UuDZJzNvu1jbjhcvVy6wXLi6XM5URJ4tjcSakxyfPUN7kiGGPuhm9g",
  "key38": "4jeo11PCoVnHgS6yitNRZjf4xeAcPsoox3dy6beWnWc2XriGspU7W2GBA3pbV49EsvDZkmPurumFHtjsbBfLc4Vg",
  "key39": "MxSAtwSNJHqyhLFEppVXZ4oJKDV1ur7UkPt7nX3KULWAZ3bDcuqCn1jwUADdQ1Stbq6LXSMGQmezdJvxWLgazxX",
  "key40": "3L9hPvgBn9NhUeJiAW8RnbG9k5Tx1qiBkUrXXucyNvfrCtfUUooJCRTvDR4avgSHuih1ZanZeC3PZ6pT7Wm8at35",
  "key41": "2zbKMw7xWV6sY4AEPqiLAoYpPUyXG7azVbTTnVQPBRcEsxWGNGkkHViwR8NLVm731gccmwDTzqFTahocB77GjzhQ",
  "key42": "3EgYMfNSkSiqz5cv1Qf1X8osij559hjHZzag1R2guAJmnYC8Z4FGxLk1TiS9v2xEfMaSqX47Tj5oQRm3FKF8aE3w",
  "key43": "49LLjBD6H8a1YDB6BDWX1rb5LuFmk7pPZAo4JN7N1gnYHoA17oAjRyksXQFpykTpKssjkvqubgHH8Xmi2YyuWa8L",
  "key44": "5psTwKw9Qq5Kma4vygULAiFVCUnu9E8RZCaqNiPdp2ynC57dw7up9eSPAa7Zv4RtZuHmG27TMyCAWto8MjwC2MXr",
  "key45": "FFmzKCcskZjbCuE9b8e2xmUUZ24B7qPkfMFBbz4cNaZQtQN94oY3i2S8eScjMxe1XvLFy3PUmoQLr6oaY6zFWis",
  "key46": "4FzcfdGMYvcsPTx9ecYsKVCseNsvBVirha9cAY4JrNyphniLWWE3sMBvWa4V8p25KD32XW5pny6GuFznMF7vqx2A"
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
