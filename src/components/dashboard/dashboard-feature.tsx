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
    "5PqpQx28cTM5X1Rdga92GiGU9TqgfFBawUi1zUTJSi4F2feYb5Me5GVfmA7p7iuYRrw7WC2kveKEvPx7G3tEF2ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hGRuL5Vp8qaksFbKr2P2gkvMSrbJUgTNHjzXMYxRsu5seMMn6Bm9FMCS8LZwibhC3AYJTKVUaNaH5qg6jx3mVtB",
  "key1": "7B4BLrKW3ScsA3gSgjrRuyVk1aAt1eSCXQRHcdXAmZeme4RPWLuuvUaXMC3UedL5wLhxn7HzFNNGqfkmkAvzJEL",
  "key2": "4GhpbGV2kF3Qg76bEbHgv9STqYey6gpqrn4b6iYJHoU8oSuGGMkFZkzNqKNA7ycxU8mBd7aj5v3DoFZGz2e1T6dF",
  "key3": "5xQh5rwH2Cetx1BJ6f5njcC8Q4yFeLx3NkP3zhPr1SodSyW21sZecu49E3aJH7mLWVZFmHNuWDFpMunAU4c5B1hi",
  "key4": "4kby5skHg42PjhLj7uYnSLXF69UXafWP1rQYnMEWsp7syRARGTmkFcXKJTgm9KwxwigxtfoZvbHMNZWLGJrZTTDk",
  "key5": "5T2wcQfaMY8Er7A5mUnbTWn7c45mLL6kBaWVYrsqJJhNfNarEkT35aH2y3EGEQ56gCdCiKABNvFDocosEqNLLX1J",
  "key6": "5C2ZrPDsB36BFKoBjEoY5X7rv1b2FetJ6ysd1twFN5FyZQ74E4B7YpjcGDyrPbbDgyNMkveNHWuGi8sTa8fvQKBe",
  "key7": "2Qde5nkrh6sERnYKejZ7YgxzNx9a5hZgkbbEKvcEKHBmivX2SrBF18wcYuXEqv2pK9pT6QCGSgRvk1KUWwWkNmzD",
  "key8": "vhD9wBAUmN4PwnpEo9LWKoMpJggxMk8g6LhNjAYAPQqRLbuNGx5GoWhhZ6bLpuYon8tJdG1Lk8ho2x76A1bGCWW",
  "key9": "2GarWX2RpZvkBMmeAcCGmXY8oLSmSgT7kzDijonj4wxBeAp1wWfABStk5AEJhD9rXmE3egEs6JqiGoKNz5kBE92K",
  "key10": "2WPhAWhVN2nrYgxq4p1eLthsdC8ZAk5yu3My69es2wLGvrdhj5No9t3MFUmdbKs6R29mNziNgyRqdi9BsAwT2EuS",
  "key11": "YqBiFhhGEbKuZkFMAmYruCeWoMycJUgHuGsFQ7WPxYjaCtwfUnUN8CzDYbE5YrjKZH2ZhMm3tkEhNo2Uns3dkNE",
  "key12": "4n7xmQkj6Zcg5tx3e3ezzvnrPmNcQXoMNW3EFBroSuXF8Kk4bL9MTjC87oj4GtXnZS7eJGrjYK7ZVVuqBeGmmb6V",
  "key13": "4fLPB6NeRdaa7tFfXJf17jpYEZCth2V5prm6UNQje3fVBbmVDJnS6CrM8CcRsvsFhm7RM7EGJpd8r49e4BLXeUkg",
  "key14": "2uTBrjJ91HHuE5g1HJR2RXiaQzthXDaw3SNxHyhR5fwAYfmLYezSZTjhpATSpXJHwqZj4zKBNMXZUR8L7JchRQeC",
  "key15": "4E9eJy8AiUrrG8C1iATippr5cXma7yA7LG7ii7fM2RuRV2en9tvKQY6bete5EgDi5qLHBARLwZYpGkfntaqpzxUr",
  "key16": "45x8CCsQREMFwEEhBMfKoYToCqe6fDurwvPMCYzxbkVyoDDj5MU9bs9RFG7JEKJWoyb9jUCiXvCL7yjyzzVMsJgG",
  "key17": "2pg2Q8y6c53V3Dzetads7S7o22qGHV7AoV7KUNTLcnrF9oS9FKUYX4KQGnSdz7fhbJQujUYviT5VgESqMKAEUdCY",
  "key18": "596RX77YknmAYr97JYBTssEgVac5rNHHyGSSE2TCzLj2NPnL2sSajF8kCPzuF5DHwiT2PG9G7GGuUM52K87TaLWY",
  "key19": "MYKWu1R5UkVpFKd2eQ4hizCJKzxgHK8ZJxnQvZq3T5zyMdYKiNTsVkekApw7eDeoa194YnbzQctsWZ5Tcw3PdML",
  "key20": "uavufHotPFjuACAz6wviqr3DTKwCPUWHV3A2aMEb8mNuqEBjf6LsfPXFJ5psKHQHC6KGitUUaVUS4vjzQXg8ege",
  "key21": "TAfmS5tYWnsJdfFopj49cZTCf8osoD9QtZddZgcFY8GRxEUWEP1sTxzZEG6QuQMTJH32YTMxSxShq2ayaCA86iZ",
  "key22": "5hqWDfG2uVc1d43AxbPHQJo7vgbDSGWN3ypa5m2T81GzoE9oUFXTRvebCDCzJJs8nwTVvMKNsYZdpWKg9hbK3S4m",
  "key23": "3VYCYm33JCYEtX9scWUSmy2StaeBsmkxt8YNCPZfUPJqERn9Jv1XXbgHzYdZiFE8M4gSPipPN6wjVm6aCY8Y3LtU",
  "key24": "pR4zQkYgBkwWbHLjdcAkEKzzSn6bNW4mM5gbW1eEsexMUaKh1Uo3sV9sbeuh9Lv6rJ1goe2dnQEXBi6amungBYF",
  "key25": "jRrYKo9mvJYKVbeEohPX8jBupNxB569vP4gZfDxZLH8hrxgBGYBJK1whS9AfcmKwodPxaPZDsooPjcqnvnHpFuH",
  "key26": "5YYBMwcmXwL6eSyooPZN9EUgBG9trksryGW2JpcmB337sJsZ8F1pCgPZojPLSz2tMTnbyNC4t4PNKQPRbztaZrLd"
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
