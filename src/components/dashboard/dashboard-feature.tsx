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
    "3kX3znWeZWqniLQ5iKPbRh8kethzARcXt986gHkZgxXD5FTNr1sQ6s428NEjEmjarCLjoxUh9t7o2otnog4SSC1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BHzyDyESHWgwyqp4fRWsxup9gqgdVz6yTHFg6KY1RbaMDQ3Mn8rp7nqogrvB6hnh1Vax4LFYmjg3NZKtijZoyVE",
  "key1": "2Xza2N63MoFkHKQLqyuZDY8wQDNUPhwhxHPvELa1zNhGZEhJ2LNqgfvSwb9Jsn11ahoyEMMgkkT9kuZofbKV4bxQ",
  "key2": "BMZRM6RjQ1cH6XHHV4HyN4pysnwQmK8Z3Z62Gj93FVk85CiuqqwvPLwnM9DPMcUm1Vgr5aSotqhGkJbd7A2B7pN",
  "key3": "3fZ5vHZwdBT2bTgP1G2Gr7HNQ1r5uRcdwSpLfr1dA7fcVALa7AcxHPjj6irKxixqrH7LGVyV8E2dZ7J718UU8n8U",
  "key4": "2ZhudeKDuvq98CSbGuXsN48nBgTaWTJQFAMmp3tnBLqtSdPLVrHYQVsqnZtT4SFKQZyjyntFvfkwqXtn5JkqMgd5",
  "key5": "JT5SVSeH8gJKnC4ejpXoPhAiu2weN34A2w859EBBDy8Mhn57p6Ua3uBwxPwQ6H5x9zLZYhpCNjvkCx8PTJTefe5",
  "key6": "issjBRwvAo6zDMkZX39132ifs4LQk72DxT4iY4PMFgqqCgFWPUzRsLUJX1LiRSm1rxm4TbHCzL4NS5hQzi6xsDp",
  "key7": "4icCJox1kujay78fYxSrMqP3S4JRoPxZwZbjCBuEXovPc3BnLdaEXMAsZHmqSsuoxRb3Y5yNSsxKf32pY61s49b5",
  "key8": "L3VtMfyJ7SKMj38YEtHGRroh54qFcFX6aqxoBqA1JAxqmkhmEVnJGT7VD1vBZngN7a5Q9FnjHnjUDpKTtx9kXTR",
  "key9": "3xhz17JZQe636ZgpaK99C9f6fEbj99tmD7ZwyZo4FgPssee1wMmvitF6HSdnXK64x4zkX5h7tM3A6tsRF9gBRXH",
  "key10": "9wMQ8ZSeCz6JUYtUH1FsUqgefs2dnD63f5z23eTULwk2bdc3Au82iHZtarh2KrvvQ6cayuW2VnsNw2osKqC7Ku6",
  "key11": "2m3anqodMqwwTp3SwC5dE9x1xDo3NYdMtCJagUVsBZUJVpVkgM8ykdQEhtWEa8y1BWR9HDeLPHAv6ZjYxKdhpR2B",
  "key12": "2wyDjKD1eESkNPJPQj5qvs8HenPVXWQmQ41K1wcr1bGtZx1EWaUeTdfwAPwUnk2EL1qaRXxqBZ1YS5krG5q9iQZZ",
  "key13": "4DafHrAeECYJP8siQLoqBMScPxewBHQJU7xaECVVN1k1htZtvcUA1irHutt8vskEvVEiv4dXkY6i2zb1NfwufWLC",
  "key14": "3oQAATjyFzGRcFe1BgJz64cFPRKgzHf21oRU6c71rSQk5u6bnF9zqBYdfBVDi5f485mJjGeajwMSn1eq5xHcjs4A",
  "key15": "5n7jKhfYeAF4j9Fu5yMM7PPcqYc59Ux9XQn3RY2F5tZD2F3iej5CSss4vX6hF1qMk4wJVXxzrKQUVf1ZH2bGT8Qe",
  "key16": "5LMtKU5qyYn5i9MrPYVUL4tAF2XRCMYxkS9bk1qdRDJLNDdTvxseBXsJs6WWnjCiEtri8Z39JnaQAiKPiaXD9taP",
  "key17": "66jqc4q2wKFUwSrhLNwri3kGRQdsPKAWMrSNsFqzu9qkyCvsmxSj2hUcVXDgp5A6oa7CDfqJ1Tm64iAn4tNWNu9n",
  "key18": "4a6D1GScvwrgimuumh8eF4FfxnfYgHYc9UunCmvZUtb3eG7u6JHi8QGw49URKzSEr7yWYsnRmPP4CEFPDF4c6pdo",
  "key19": "3n8AcSBRfakHZswLpBhsjgFsA6wnzgsg4yLe3f5AUWGXHmi4AghPn1ARwmNVxBSU9eipbhNPgrG7JYKequw2fx5p",
  "key20": "3pM1xwFvz3hcsuMqPoH5rpNph62c3w1oxsL5R1S72avtA2bqVgjuuCDfmCY1PXnLrvv73VUaaeFFLdeXxiceCzxR",
  "key21": "3frmznHgfDnzmtyKowKgDFBjcXXzWLDpJensBxXrHa9ZsMSESByQxmzT62h3WFuAVDKRTj6ZaZb1ga3thVxBNRSR",
  "key22": "2QfSFDbdwg4qBHqkKVc3VhgR17B5w6fjKSzqXSKzxC3ng5jh7o9ML2SoinUga22XwEX5p6oRCFFu2yZBeJGedNms",
  "key23": "2hUE19dJB7f5g12enNU8Ee6tbQCcAZ3GtAgRJfcVVmC2avFJWqmkuAfGiMuqZo4okAp6GjFgTdyDV4prgVN64498",
  "key24": "2iCTBfp2BdPN5jBU7EWBbKTXoPuwNwZ3nJEEukEENmTPbp1HGFps3gL2QJLRKnXGwmVoUQtqC4a3PwsSNswg5fGS",
  "key25": "4EHD4eUsqP8wXq5tR9suNHE9tSdma31xko6QB3vwiAZKrRVSMH6eMuNdq3hP1a25CYLBi1Hh9gRpUcp7y6CEeMHJ",
  "key26": "2KZJ8iufxcYACr5tPhZZkVdeBNZvncgTiaGiCeS2rc1nLbU7V3hZB1ZwmKDyfPbdiTUBBe4Gs7M4Rfy8kdjqNbYf",
  "key27": "5kL2C1HHuSrVRX9fBrmHXwiPTokZeDEavQxgDY4SCKJB5RNawjJBtpGo1fMhMGYvXZJzcfoQMYqvCdMVaGWxXxWS",
  "key28": "2mKkkooCPVwf5iJpMvJjfwaGBmQT4FAUw29tbp23fS42BBXXFdPAAdiiM3K8Q8iGUCumHwRJDMqQ3QTiYLciEtbo",
  "key29": "2H6rK8Q8uZuHpKF23zVjY89eEyd7XEqc5HjuAvhH3ts1Z1N5L7rqLzmmMQPFZhzs4aG44xayp4SVgfoN4LAxcBN9"
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
