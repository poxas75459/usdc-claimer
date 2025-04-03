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
    "4DCdgoK9ttpsmohcEDDJCYGFsXSjXmungApm1mzJ9MH83s4KHwMsJ9gL1KF52J5bYXNAmJ6j7mC33eanruQtZ62y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LykUeTJrKHeLX7WZEdXPtYFZChKTyq663xUnog7Hc4DeLtDWZpn3wT7Mpab3q1DampSSQcUC3zNfY1LvLWtc6w",
  "key1": "Ai2UavnsDqyrnur7ZPjvj99iLofuDEgZBuvuQUeUaFsHoq6qx8pYpoK7Lwd39pbTGRHpB7d1qvuy9511REGM6GT",
  "key2": "3HJcpM6c3BkT8rYcYXFu2BSwcPJS86w1DDbBhnNT9KYN4onCRtBfoA4NrGnzXVcvV1VGLY8ZmVAhbX11rfit7Tjq",
  "key3": "5pDJR3sJSsb8ZbC6hLSCeCWunoFtRkrMB7AiXxNVS2HS8xVjg3vbmCoLeE5XVk44nciPyjkBrKL8i7dRR9sSVJTa",
  "key4": "N6da2GBsQ1c4hbgqPhTqTwjpXB83LZAQTfbJeqKopcSQCwWRBztxBwYSV2gUCaTRBLZGJYRNZaraQhJ8GKjSnWo",
  "key5": "4w9PcYvANbefUWCtU9oYXdQbfLhhzw2z4VS76APQjogNa5VZFHX6ffzBa5J4i99dt4A6sJuRtbFFEwbf2haH49EF",
  "key6": "5dP22qwF2RVbRMBzEzJ7hirRbvoQ6FFJzZ4eYkL9EQmesN3zGBtewJmc4w3Lb6eGDurGjm6Vw9nSFF5SUvdTr6R4",
  "key7": "5UJtUatztKkQAsNi56ftGNaL56v6aSNpY8uNrQcXFTAdWkUUZBPuhAGyptayyduam6b87G36AszMVcvN4ZrJfwd2",
  "key8": "4u4MhfLo9ix1AU543evTZeX6hz6VUJbidS3h7zDZJQ37oJHbNU1ZojvCHNqiCt2n77rDLnXDqGBer1FVXVjdyFe2",
  "key9": "2SALy6aN3jZpLSR4f7TtL276HB5qTP48cJT3FQWRdSn7Ct1FUxRgq5bPTom2BvfAhq5AbJJXNCV6g7R6Kb4EzbvV",
  "key10": "2sWfjF1daf9iT7eFctSFeA7Goi9Ue8VjibLQSXKhK6uWmAqdJeH3xMmpfm4yoaCB6PxouVW13c5Er8y9bHYZwF6s",
  "key11": "3FWT6wHJhq16NzB6yYKAsM7hbvw92aFWhfetBKLXQJE8w1hXcXDH6m4VrDcorSjJtZRoZ4fwJjT4VipZF7V3HVTe",
  "key12": "56M6hUsAiezkixgtqbgDSmjGEdyb59SsD5DxbURibeD9EZWVqShxngamxhGsPWS9ZHLr66PebVNAHit1DxtMiD3r",
  "key13": "35vymceFTJvHoPuJ7i7Bvcqg6EPvM4ew4Yuzs6KvRh3vKyNEFzMpCo93VnFUexqwqNcuuGA1FwywCZW1XAtXkpbD",
  "key14": "5ZqgWxj1B9Ai8iRSfSncwVG4xqzxdh3Zn1Xi7b6dcjhjjJkWmo8LUhuWBazUDc2ifA7nowSMHMjZK6PjDWtYRxpZ",
  "key15": "65caehqNce6zwp8DJgHxRdvZMKXyCn3fnbS1c2TJAoRoMd9myYz3yi89Sc8su6szzrnWwg1xKwPYSZJZNqtRLaZm",
  "key16": "2D6wQNHNCvTXZLFSmigTk7YeVRgtGWaiKQPv2uz7zDKfwpNZP5ryd11Ap98n2wdAmXbSbGZfT6NTapNniS7dY7C5",
  "key17": "fSBbSuzAQwXauY5dgCTXVayhguYn7g4z327p9whw4v6WAY7cAFYGPCX9Ve6UErPZk3g7EhfjxH1dx97ucCXvpdB",
  "key18": "24e8LcoP6mKf7HTYkcFM5PAr3sCiPjmN4LVPRvdf53cxWpqq1syhqUUNzcSbMfkGQHjj57ER2RAMoeYENyyZgh6J",
  "key19": "3Zk3tt5M8rJv9eHABkKwMiRcTMjBWzXPdzCQTJufQMDM5KWDZwBPXYeip4ihyN9YGS1Xb14K2euKad5eer6rHjxx",
  "key20": "5SEETpTHCgdnFieWiCit12SN9NMufbHte9sG82drwbALBZ9ptXzmkHwVuhJSw74dbiJGZz95zwfM4LtsdyvGmfBH",
  "key21": "5o39A39tSukpfMYzx2FGG4y9rkvmYukDDrsTZgMasaGn3fGDbAMvfEizn6eoi1rseF17gbfdYGdbrDg4dmSWkBsg",
  "key22": "N1qKA8TvYLPiB6x7w2s4WX4gNCSiREL7jnVxhjSpbvecMZB9xXYbjSuXsR31HUYaAkZsA1de5VqfE6UHcDD5oAs",
  "key23": "4nGFJ55Tdkwsqj4J5WT4uSbLJPHTKUzrrXEvdsCnkLc1sHS8VubqAJXBF8ydDRcsJYr9LqRavauwpWHuHdYWa3gt",
  "key24": "9zwLkeovMNQQi6BMDFQs339eF3ZwngFKEWqgN6u8QpwcDnUwFJyvheNCAH5GQJ5gEhwzjJkTXxF99Rbbw5xsUEk",
  "key25": "askhqp99ext6mZEvo223FYjQBYkKNJjV7xsJk6aiPQK1MmgqgJeZnXLaE1APfEvvBXrfeexxfKvEDHA7iMebKyN",
  "key26": "gTRfpxRxd8rAr7RZHvXz1gCuYSp5qs6LLHXpUBXFPaA8Zfik4S8M6xMJbB6QqMHTSCQ8JWrQTs1Ei8YKGRZRtSn",
  "key27": "ZJhqxrxdTnoycHW2H5X4AfbcdsgBXL7eTyHhKFRneKd6MS8Z1CYz32XtMWVFmXkPZmnfH9YzV5geN8NhzsSBz5U",
  "key28": "5gcdEpdbDxvK2MENm3KpxF5v4JWzy8G2hvF2mAZq9fwhyd4yhVQ4oDn95aKDRLYQGwB82tUq1HU6MEC2BfbGVWgy"
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
