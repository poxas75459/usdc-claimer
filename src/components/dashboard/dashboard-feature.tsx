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
    "4AdvKHqK5JV8JxXzRZVC24hLW5b8cR7gvNoPU5StxBWHTxr7tjPU5qrLGLrdhA24K5VNJagELYmeUnDwGwRjsDPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c9YZ3xhMtdnPgTaAAyRwoAyZ441UVy87ynNyKbmgHxE6t6jikN6bZCxttuPyG5PchZBAPfkV9fSKyLoTJGmA9eP",
  "key1": "4QJxFFTK1dW9kK8g82b5h44j6k1ENCVhquYwnkYWefyicpw1poqV1F8SbhKHdHWnr559wQWwA6PSz6Ntm9rRZSdS",
  "key2": "56pWBYSLW4oEz7n4bWVUK5Wey2G8hWRU3yZ82d6x1hXAEEKy8aaszYcVzV66gx4fhGHXcx5gbqadBG7GCJVjnvkg",
  "key3": "ps3KdvYgjAXwQcmyQgy4USEUxRTscbtGQ5EUyfXPbgXpvybmxhACcKyu7wSYzrwgEzmnsuVmHPYGRLRSaRDckdX",
  "key4": "5kZ3cGvgjdbfLRi8hFMWx5ANpErpZ52R6wHmEkNAK5oJZAj6QL4sRtr72Enf1HJ4pHpch4h3u7WRk4Np3mfDLt63",
  "key5": "s2T4QVPEkQ6gbC4FBBrAPHGkB74D3KRGg1uM44oLjQYWMEpMccxJrqnDbp7FrJFa15MEzeSk5uuvkuHA9ZFnXBm",
  "key6": "5mXPuuF64YtW9u6rBDBjwpqDsoJJyY54DQF4RMJG3LWVqheX1TRxx9iszVWts7vFLnbKuVFGTd3NJj3NYTrYwmmL",
  "key7": "3J7gfzTZoZiPbbTULSTvyGmPNZ23aY65Wx3T5AFZZXAHEqSZRJdHVPp5gMwW6f3qmRxxWNGcF67iESZQhGTTFGUh",
  "key8": "aYYHdPBEqpJJ7LdTmhX4z9gpJRv4E4tTQS2DhekxbFhePUkvRJVHrbwyo7Sz4YR352AxJTwMwa2VygVMD8emr11",
  "key9": "xY2j7zUsRmcW9VEbh8RC2dCynMRN5bWaqVFhhGnH7h26w3r16xFAh1RSCuAvdVvwLb9EioLN2NfRHsNpQX7dDaQ",
  "key10": "5DKEJDUmSrUNL3qU31f7XNsAZ3JqLAxunEcJ8nAxfsGp2AegxaetzsTKowUsgdGLD3bhXPwVBuaxmb1oTc2mzgqy",
  "key11": "7hU1v26xZnyAszNxm77BkMUj17FChESPwwfNwPnPaAGD7XTqNoXUjwPTF7y2PHyxdsmVqLzWVVUt9P32FbuCiRX",
  "key12": "3vmKVj5i4VszMiosxYAfjAafjbS5HVmPqC2vpJvR1tVj7mxCUFNsFUgvpPRu3X86T29v8E7CBKWR46222cbXsHRM",
  "key13": "dsLjGBSrwXxVMmLeyirvLK9RZfFbUCbVG6q9CutaweyssuuAcjmZ9ULrfnefc2NBDwuVStwTDnZVu56gDJhFYUj",
  "key14": "4yDjyRSzDDmoggYAuzFxh9HSkis8s3pG8znhXN3Tt36uUkXjwSjwHUuDKCXJZP7K19NAGCLgtbn4ka6rM6mFxPAr",
  "key15": "56AdN3bgJnKxEdtardt6TfecUkTMSWbPJHRYJkTcq6RzH48xr6DLr3nKXwvxpjfBYTBAvDzy1UF7Ac4kAFfinrbo",
  "key16": "2RCDCvfrFfDyZ8EuHjZCmGAmxxiG57PFAQQEvnyhDBDvr1r5NvtnNs1fDTkzxcQMP3shcoU8PFZLJqXo1LQV8TBS",
  "key17": "2XxGLoTD283rmguYka8TS51asW1QBuHDsZpjjw7y1fse4WdTfrCYyn7c1qvm8QsPeUDcvvCeejbukkM1tYdcvJi8",
  "key18": "5kMAZBENCCVxPBMPn78WNVrHiyiinTc2vhRGhEDWP3X78wYtWbwTrNCixXbwtzYnBggnZRXa7Y7hVEQ8yLfe82q6",
  "key19": "5on74sYMRgMLKKe1KiCiPipdZEgKBntBjskh5pqCxsV4VJ21EyPoPw42PKPtQcrL689AeRPmnBVpL1awNVMUqopx",
  "key20": "4gVdetYo2aGUv6Kp2jQipub743AcoCjzs84NeVmL1jWvDcddRjWKteUUSdrqR8nCPxgWnVsLpqEU1PPxxmXvubT",
  "key21": "3tpC9is92nkxcZ5gsqSrYPoCD7Lo7vuknseT6bdd8pbXfVJjdcDMvZDTDasXqFDBQAcwkdnXnbmR1KoTnQYZFz3",
  "key22": "2Gy92VK7SMk1hL6wiNFiA44zsQ1zHdSXqkvBy2ChxoN17ZfUKPPctgyHz67nksR9hXwFB9xsmQuWqa7V7d5WTMcC",
  "key23": "4UnNPVH7sMFLUwhCq7ZUQKSZc4vSNV68b4J8o2B22eWXeShmfKxGQK19pq1NsDyu3BkWK122eznWBhhtuEptnXCw",
  "key24": "3ZSpbgN4G3pEBVq83XXqRhSd1bbR5FWbizAeCzJtwpfTvCxXTFpPLm6jxZ1ZZ8deU2psP3yPu6JYShwAWxS4ZFFk",
  "key25": "2qbBnQf8JhmVmq78RRA7cU6GQGHrFRhkvjCRBiWytunmBcLtWJ3Zh9a1b7ARWyYxA6447qGDVfeCAfBLJZYTkwUb"
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
