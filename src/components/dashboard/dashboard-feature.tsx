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
    "5K4EbkoeT6h3KHmXiSdo5pth9DuXvodugh7bacDKStVc9vuC4N7U1xdMW69tQA9o33wVMocmtKhshiknGD1JwqAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5tKUiAY2rHwm2immLR7Fk2vTyzMBJyAL9kEapYNvUiPsMfHtEg3kB2AeDjxdiitHbxzwt6R6iit8xyzJ4p1NCk",
  "key1": "3qDZgyWAqjkSJPwpiGWjHAMEk1gj3ZrpwxRRyiWjv3PUXmC2qRQmbrY95iRrZvERF7Wbr8rb929UfCi7hUphRQAm",
  "key2": "62gNNKJqGh4SkH9p6B64QC4vxsCwbSDfnjxeoWmgvkFpruZ3HipyDqtUF5rY5PcLXi9vCuVArwCR6bietVV6Y3iL",
  "key3": "2xstCGsgNFjXZqi6SRvohYm4xCdwoPuBzDcQME3iswnoWwq1yARc65PA6gNrD3CZXS5jPj38AS1r5LAUrzGU2Psv",
  "key4": "4PDbt1WVAHGs2BG5eWd9914KdMQT6E6CJvpSRkFmcET6wTBG3XYVmth1aMNWWmv2GZK5T24qfSMosdWR3RkBqQov",
  "key5": "3tkXydyN2SMRZzszszB29wLZJayLMqrVjobkNkSQ7fre8vhSbMbYKRPuUT4YcyHozwXwL4XCmX2nMaTD9rJFNzVW",
  "key6": "5Jhi5T2zJwxx4KehRbwRakFRN6vPLjkqTDBY1TNLfJ777J2i27gabiZ7vXLYHMMg4Eas9LoTkGMerXNt83vj274J",
  "key7": "3nN3pCPAHnCc7D7tJVimu9Twdbv8rVmrpemkM1p9Tb256jcNPE3oVmS1FAL7ih2HzsytPxFhKBbKtp87fzkoozPp",
  "key8": "3aZ9cmbY8JCktHjchSU8NENx77E9ZcTQacJc4Srr48fut2qEbwcFYncXUCGQWBE9dz39jAQQGMepUyPsVYoe5rtb",
  "key9": "29YNKXXpg1485rFoeVjU7rpGk2CRBva4wAGqrayt5keiVHvPbrK7cdiAxqKu3rSqtrty2A96t6SEmxVg4zwLHN6W",
  "key10": "2BaQYB6bbi4982WW5TtLtV4dBNiTFeD5yx1bmEaJsW3o4gNh3aNyKXvwrkcrGStPVTRnSZbSvdgaxcqHpVZoQjrA",
  "key11": "vVJq3ZJFTsmM5Q6bUHgfHT2wTYUbG9c7TMNNgY957C6QXUqhLWTQMWrXw3U41UEazx6iSWiCHiqUSBU9vhdcd4e",
  "key12": "48hMSg8CpEPDxPysvzg4eskrWmgambt9m7DPKh9yJeBXDjt3j2L4DvH89RGrdyStxtstZUm6cXMv8Kbk4SnTmwgq",
  "key13": "6ouJ4p1p2jZhshPWKm9UWDWFPiD6jTnJTneA3z9C7hziUWPS9MNSqgFW4zi2qg2ogATAAYi2LQ9Ho42j8fcAU2G",
  "key14": "2MFHYC5bPvngizqtKVA1sA2NCyPtHJPEiF6xHR9ehrN1uf7oshK6cqejyY2HKUzAAhgMFeWJgpQKQDeXfsy2vDCx",
  "key15": "3iDuCRHAcgyCGmYv1M1p5J7bpeeKiNA6cfmQzaXuy2dzyCEN6kDTWf3G8ULe4tvM6BZwJAXm6A7va1CaHQshsDNa",
  "key16": "5SJC2a9C3s7EbLeZnDndnJ1hrjfChXyD39nZqwP9LwDvt7GMJG3se3DEkyLwQCNf9cmvWb6qnHYDGVzAomvCaf7T",
  "key17": "C8yJPaMyfn1a8WCLw3QbKKnFcS4xsrDqyJk2pZX8331wkYAbwW5sssNDQGiLTaG3DrwhWmYDytxyW2Z4bXJPds3",
  "key18": "BnspAgfUoVR6kbpGCmuLnn5UQrUjHef2CyAmZ73VDcgpSKejMwNv8gcBWWLNTJypGztpikWPAbbE573QEG7vHLV",
  "key19": "3u54UadVikYAnbhwvxBAanLZTDu9wxMPsHyAPWXQpEGcyt9daYsJxWbSEuE8yJAFJjDm5NR6cwsNPuwHYcTSuwJn",
  "key20": "4M47rwXzFri1sRgAjhvHJv1wSYxH2GzgP1gQQkvftHUz92tVrTE619VgHUCYT1DdyeeYPRuZ43dpynoX41tZk116",
  "key21": "2eQLT4jdnNdTLsqNhV5shEovB2RNXfYxVUHZfEEMDaXNSYjdU4BvoQ5NRREXX1nALzrRmfCNvuufq6fGhMMmedxw",
  "key22": "8Ji7rMR3LMUDnrXcJBZwmuAsrydExsu6Zwzn7CZC6Ny5reyAkLnJ8ZrKntKjQqr5wM4xcsgHWsax3dkmjtRhzo9",
  "key23": "4Br7ozAXXQa5oNNXkzBb8QMeTU8MuHNz5qXDxbhLsaCHGiV4PCDSdQKohhkr4FXagp83jgGAvxbwAPwWKTUKPsWV",
  "key24": "5ZVXybH7PNBs2vFWZ8k387ykdHHzoDpz3JeZJnxhASpmZJFNTrZHRm5krujBpqD3NYQxpwzeDsnYWnn1NRrPQMbt",
  "key25": "2S3JQezqiZ4pXw1ooYQP77av5cjQroPX9yPh5oNHZ3zwAap6VqCarmj3GcrhUXRz1oWJ8ptXJ3HCA4bpz2Yc9apZ",
  "key26": "5SAttZGS1ezGFbRYSoYYhPBU4nRaB1GFa4HTmh2XtxjbUCQeXjMAyhnwTS1KJmnsgNNc9LM7rvkbbbuto5DNrPuz",
  "key27": "22Z5mHiw49ZuU88xh1tZowzpKFvdDn8C2X8Nta4ma95Dw16fx141hkXNQHqCVDtrCDxE6smdJEZFCUKqjSE1NiEZ",
  "key28": "2YMnhqLHeRw1xi6g5Smr8uswF2ZXnvQtzCGqFwiY67T17usWV6GDS1Qe4hxxfboY4N27ByJi1Y1uo6jxztnox8Mk",
  "key29": "64snN6eYTTpGKMS6qiPXRjWsSH1ybHXQCpKYcGmyw1B2gB1VLmZoNufw9LR7Hs1HNrg1VT9KhKZkseP76VrLKqGq",
  "key30": "4NHmntd9ZyMS5h9JFGH1EzXgwncK1LGe926eDK1s6SWVKnXLKj5MGeAGf6rXo3Cv8m5KkPKN8sU39YK4hHkPbzrM",
  "key31": "5rYdZjMc33xyoevT9tiJwF3YkGAGtUkm9Kd2a5KQADN4p9TbunW1pydC8EzWuiCFoGtkmD6kJc4m6Phxp195buhu",
  "key32": "4hgj1b59fvsFBLx6dJdr98GCZEi8w4CDXcLP5JtyDMTknQNSDCHRaqtpQK81drAFUJW77h4TmU1b2gUQrhq7Amv3",
  "key33": "4AxK4Hi31suY52T5EmU1NDQPS1x3Ra32qqEjbewkE6ePiqSMaaDSjBxftYzZK929yh1U57QtJGnffbeMtHNcas4",
  "key34": "2SvAgNGSxdtoxa3E9MnayzUx2Byecw2fVWrqviXJ8LCy4ND6Uz46VJY5eYgsZb13JutJi8tjw1WFEvttHbbypanR",
  "key35": "3eQcfMHsFm44Bpjrb6TGrqqH8Xj2YiZrrADccRu2t844g6E5RWEtWLKmHXPuBADMtUEo7pwxJUtpmoXHugWtDY6n",
  "key36": "3xCDKmKrxBqTfJEwRJkRqBKcyRbzZyWpMoS6nrggXMKwTPt5quNRb3UfUs5a37pQnF22tfAvcTzxm8RJFdBVMPLr",
  "key37": "4p3dLj6W9hJ2iVSFNNi8wBQUnk3zErCsFBfvM1nYWft3Jja4e97G3vQ12kiTXZcCMAz1CQqdcTRkfkKDyH4gPxyN",
  "key38": "3DW7tBMhhZhRnFstk5TEntZd8vZsEVkxvd4mAvLihjWLpkKnj1X2nKFgcb3cmYqVdbH2o2eRikJXkE9Rv36sYLfd"
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
