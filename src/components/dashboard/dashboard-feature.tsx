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
    "zn18bL9gAG9zsc26U3x5PXxG4beuqAHWogvHqKfn2crp6rPQUhwVPX7zNuG2VjzFnUgA42Amrr5LesKMAiCSD6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocJ2sVDhKgAcp88hpVUCQCBdyyoArcroi9emAt9ik9zmiuEFhwxZSkTrrDbymho9696ndtkd8KoJu62BRSUyZgM",
  "key1": "3QJE2HjugX8h1nnaqmTj7BKzJUv7XCFE4pYRRA8yTu8pxtSNVqaneHmrfCsgwSLnkesfXVqBFdRpUgHCkSNgtoHk",
  "key2": "65SWreJNEzozuUHwaSzwmfLXNLr7ZFEEmRzCqFt93BLFb7nRbbDyiFiuJ5KLHnQZZJofA3fLZ5gmw1KaymFwsb7S",
  "key3": "42ZfqiijTBWeueAfQmNCxNMw5XN3rx443TW3Ze5SxgcYWHm19R3KaWCFcG88H1bVxuLvrV8DEb6tikxHA9L86tmr",
  "key4": "5KpkJDPxXMgkVWgamc8ifgWfvAejSijRPtvodWaHaLu3zCsw4shXCFKQs8EBEEcnzdhvHb9vtVS3gyPhcPBw1rCK",
  "key5": "bmaBs48xMDfdrJLnyx2wbSJaLRLs8ruVSosx3GKAve6A8Hs2gjvE7BZZn4vpy7pJjCZLYdcLxoFhFfTi15L5PGq",
  "key6": "5uJGArhcMu1et4eGKHkUvcAzc2NhTsrLM9XVQW3VtLtLinnHrHqNvtnuRKtxCYskaNqDfxLfoB5ehH9CW5WJCMwY",
  "key7": "AAsN2wUduHFn6GbM4gqSSkM7MJL2gkRas14rot8wKi9gMx7cSvLQPDVP2updGu1LePHQEZc5jjYXQELZNcSSZbc",
  "key8": "vkeNnJcnTiuhR5vSnUZi8pp8WAUbe77XD1v7Za5Z1zotV6FxxgPFdDpSeu9LV7ViB8Rary5DUMNPoDf6Vga6S2n",
  "key9": "a1PWyy6gDU6CuHiacijv1qaTG1RQDxqs9KhTAuykKDPKDgh4uEac6adYnUouHH7hifHgLSvow4jMaUAwLK9ViTo",
  "key10": "4Utou8jsEnqXN6Lz2eux3xgcJNqTDED7NhrEoBNjd5pWwV9m8cQi4mdppMbBmfcMdiXWQ7CN7GxKc5vsUnWEF4o1",
  "key11": "3XgJ5aQaM6fVFwN8er7S8yk2by2d3KJ7hHoBmgna2zAhrWYnzpv8c2jaBjygnbfhnw7kqhZKQBusTptnkjimCNLg",
  "key12": "5fRsrZPwCGhsYwxsuK9R1rLGXcjbrVgcDLyNgXH1GAsTbqSVhDWBMkZEmfUVhQBBps1M8iBrK9BBm4GXJZUmyhPL",
  "key13": "2uH6gc65UtbQkHNYRaaDYb2pTe6iTUpKBAinK7hi7oAU2Z3wwFN4wSotapxNEFar26wRj6ApkTPpdcYJ8GYm8rkS",
  "key14": "3DSLDJAmLTb3zc7jcDcDFLC1gdvphpQgCkxwNfrjPnu5D4dJni9JUbAotubqKQhmsygy23QDTcgws7zfAQLLLqaR",
  "key15": "3s6G3RxS7foTjd773aRqnkHwj1s2WSTs4mnWrt3qHj3qo6BLSbYpV4cAuqMACjuTRnkEyu4dri9bsDtzV7y8uzD3",
  "key16": "5sXDsoZs4KAvbggWdgM3LSjoDbKmCgY6f8zZxoj5KwjppkR32mQnabW8mc4Rbrew8btbVTrzeX5WzbhLg4vg1vt",
  "key17": "CM38nkAakG6qPNN4teqroiFgWqPy85MomvGLizvJrTrn7LytRbiwqeep1N9T4MzRr2ssfZ3kvV46gtRNt3qChYY",
  "key18": "4fDyE2UPLCHv7d6R9dYC7iDofqPPNbtkTpWhbMMrE7QDKrUWYkCmX1KDShwGgmZJWaCtxzpFe5PY5oopeYfyv4X2",
  "key19": "2BWhTY1jZppCYCcpuM8wGQ6ySg7xmwCYA544Fhi6qmAFU13CqjWXqwbJTpP4GXNDHZWc34yiWKL9UbgifU56Qtzt",
  "key20": "2cwrm7aiWJhiFT5vJnjEzvUXWicqxxfQD7RwEq1BZmxnzCRdacyzhp4d4XFkjpoPLtNL7oct7hWuYbXRv8m8kjkZ",
  "key21": "29wYA4uXfbtgpeqxuCqTu5C4SFfw6Wwb6TSqXTNoP1qj5aqJEvgvqKkm3eukA6b3JWQbbf4aLEp2QkQstzMYTquN",
  "key22": "39pXUWGi92zapgokK4Xfoty8FtGwp1RUgGDMNP14Bvc3Ztozuv9HysE3Bt5udgUhaJEqyaBhs7j4ornWghvykgWW",
  "key23": "2Fy1gcMq8RnkuHP8woeUv3xuk3pjuDEmY4kqxgeppcbJQSwwQUjBTH8XaWDB1KWCRbQUJdKXr4gZkQiGcT2axawu",
  "key24": "3ne7tZ9TrFPbamQ1dc4drEhwt24K6N3vfoToqg8XGS2ZwVDdSK2iZiRiXcoDZJ6gsLpCdmFjfoMFCUd4KHiuzq4j",
  "key25": "3ufpci7nCXUL5tyDgH42za3hXvjtu46zGiXX5fPpDDZPaBVE9qvsq5VitgFeVbs2WD7RKcWxJpcdpJR89ktX4WZE",
  "key26": "2DL2gKjn4SHP5QbsJ4PQNFGta4h9X6s1KLzPGitfRwcNc1osEYszGn5kFRZo8bitDa86Gi37XGgFFmjY6JeGEjpH",
  "key27": "5YDVX76eL2UA45grFg3nejqMvB6aGtepE9GY69V1EwFBy9Y28NYc3MV3MvFZu7QYyfoj3wEasiavecR9mab4YMcM",
  "key28": "MZ7UPjCuQzT6WMnLQoJDWLoRytFGtQDLWZF3MCFLpX526Y9hcAbhUe2rJt9KYtsRPPURTpt5BsgQiryx3QvC9EY",
  "key29": "49ktpZk3Cpvy8byV4bFB3wE2M52gFiDv52uCvCxLHuTwoG6NRjNdDRo4GWDChXrGe28tjmZsDHNBDZKb5pjgs58q",
  "key30": "4a3eYcLS9Zfi6eq2SZipdfNBEVJD4S3rsH1xjpZ6zrqr8PCQ3rMFHfRMvg2xu5bNecJh5R6idFjsCUD5gAfZodAr",
  "key31": "P1CswbjYgcoC7T82TYNafoDvEVrgSvkwarAE3ghsmxQ2iqo1suh8dAmNMEJSNSNf4sLvpboBJRqZjKqQWYNMn6x",
  "key32": "3fRNNpKGRBR8DPU8ys992GLF645vdmziVLfCWPcEJEiVYxDeA1otfzJxYq5Eoru95Du5kHMJgkkLkDQAzD9bWJto",
  "key33": "2yCGj8XybpCUns5GqZWrv3BLRAcW9HkHmtVBLkgsvytCp2ok8o5ibp3q4cxERijYDBkAD4TQofkxAZvLeNfXNRDA",
  "key34": "4V67V7xtveU2VYrVpw9g7a44F1NBeMy2adEZdGBg37gn5b2X8ADcgVCn64LP1CUvdQJhNBDaFTb25Xg451BaCQTi",
  "key35": "5jYDXBvQhhbeDoibGCdfxefcW3cE5PTvxpKDXUky22FksUbNCFBvEzV3oPQnUidjVfjrejPUE6gPRFLqV49Fkn8D",
  "key36": "522KXg6SPKGpWfxFCoYMqyZjyxBy8Pp3vCbfzGao1QLxeHESqwMuJpjJRRpmabeLgR4snkgbfMgMtLM7Tdkzx3Aw",
  "key37": "31NmZrzguDG2DHVUQb32dzoDakfv2N8GoUHbdH5LjoGUnqfxd64yk1MgVzTk3vaj5KHTuCvngtbyU4XwxMjC4c3M"
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
