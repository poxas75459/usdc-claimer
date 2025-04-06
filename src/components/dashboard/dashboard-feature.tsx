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
    "5MrVJtpBWGXkUdnKjv36iFHon5KhdEXMkL8uMtPdqbgzsAbcyqix1kysXZuHxw17HR7KwSFzFEf862Pve7bCTZ7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqpeamX3KuXBsSwktHMAov1Dsh6r5YkS5yVWFTL77i4N51eFf4pFg8yQFuoewNSsus2aeUfUC9vkeyBQeDrrjsz",
  "key1": "2unCaKqojupikYLouK8oHq1sXLCrUmHi9WKxxTWP74SRbzSREaLoMGGzzDeCjaZFhJndpePhHCkhyLsmx5MosWS8",
  "key2": "4xZg9pkLVCJWPHGXaFLZwSuohitHQLu9LajUdMnaAbo2ZwuVSwHwWHGKfkNpTqdRo2ritC2oQ7aRrWXr2jFGpn96",
  "key3": "hod6PqdeoDLGuBReFezEN1nbV9dn4f5LachKZd3wfwBpuoWRyJxscRSF9vrXPaiBn7nZx1Zwgi1cPC7DvgxVpam",
  "key4": "5pkLLSPU7qGgcJxLQJDbzbWsazmSDs1NLxTg6nLLYyUsnw72AKbrc1pz5QirJkwewBdZ2cUe7zeEjc8wqkVE95re",
  "key5": "2zDxBHVMki3Q1sGNLGeABMbaffSJZqunSAnYiQP86A8S1evdWXuxUJhwWdX41ZH5dpuHsd1tkPoTFQYLM2gUtHDQ",
  "key6": "3LmLGhvx17YbMakQs3xZfgYm78A9FmaCQAciVBoqXMggTMReuFE4T7B3yiWmkptXAw3AxXj9BHLLebAvjdMx53KK",
  "key7": "2qLtPZhLRTgXA3bAjacFTyHaAv3z33kAKubAzzanYxBmRTkA144snUC1fPJj2BzCRPZNsU2nhDpkRHN6hB3EXto4",
  "key8": "5CRYzJgwpz75dX8zhRAwKfsAg9FR5KwTC1UU6ngS6gzAA6LQcq1mRM2vfv9czUYfjxxEWkoFojmS58WBFYAz3s3f",
  "key9": "2Rif7KSUKZVWYsdJfTMsjMdhL5BkbCti6DyF4ckdZjrUweig9AoqbfPTv1QJzWGkxftqLcFUARVDLL9A174xSAjY",
  "key10": "4jCoHkfRPua7Lx1Uag4oZ8fJp9mYsWFPQGTqCNuU6RnrMVzGvYDPJbZCRT3rqQNKX6Q9QKdCvM455caocFKHWRND",
  "key11": "4k3PrsPTYgpoz9rnj6JQDVfKtzEJnRYXuhBshR5hqQbLMmtHVVmFqrtbZoh3nzDiC2mojwntLtRwHsys8tYtVx5E",
  "key12": "wSCfBncc8K4EGDjgNGwF8brrLqoWMCYXrZek4kBKkzNtHaTQat5amrx6pYwkWfJf3p7FohLN6TmreNBn8anzBMU",
  "key13": "58QpH5opCAwQVdZnHTBn3guu2CttRswTrXLtcfGN1YRvsi89p1ZfMgAwarzbRrk2BJoYvHQQdfEw9QFodcTAeNff",
  "key14": "2enRxyh8geitE3MckC7ANmnLmkQfmEam3DfaX1rBWMg2rEVsQSmwW8WnLgzSKTGYQfpzYgoj8DytjMWSiNqbQT5S",
  "key15": "5mCN1HbSaEYR7AQ8RvpWbxwDnEbhhvqAYcLjagYLRRe1riDVa5Gvw5nW1NsYiAo6U5VAFnPgzeE7aisMTJWrmsjd",
  "key16": "3gRrQRfo2jcCZQAiJoTn7NpW943Dzrjhg2RNHq3NBuT3um4mcbqgaSxfJPmPCpX6riyW92W29ZiKm7tqnbVGW5jc",
  "key17": "2d4jLTu8BtqVcJedihjeTtC3M7gGUpSBxp6kFxWFYHnSuyM8fYJGYtxa5Ku73YjJjGsznJiCxk4cUReCXwdSJtvn",
  "key18": "P6ZTeeBw6BUsv97rSnJXkCGDfZofZ4oX1fx82mNFiRvLXjmqPt9QiFmAHABrL7PGZPy7BAkog8fEY6PxvzokiPp",
  "key19": "2km9KCphpQW8KniDNMsDuNnE2MWiAS3sh8JYMo4x3eSKRNgmAUpsxeC9Po9ZbKfenzFywyBsrmj8q3oivBT8nBFv",
  "key20": "bXjfcNWRBKDVuHP7eVPkao9cYSRtYa8a3aeqJBkQ3zTy49xDc934ta6tAxYpy6P2DENSJiL2cpaCaCGPvrrqrfc",
  "key21": "3jjo2PEJGEb8JLWTLXfp7CDYdJ4QULZyh5xpTzKd1cxdbEb9sU3bwHfGdNTVGncdeJwRQUdz1vLecmXDcw9CKgx9",
  "key22": "3isvLvXemnYWrw2K5Yv7d7MqrTfbtYWNrF9L7Z1ug34bjgTCU9swsLDirMALmLxjh1LUctT4FXNDjeX1gFdD8FMq",
  "key23": "5p3kdWMGfw2EaQdMYcGnBA7FZL85jaA9mUzmrtKZyy6YaLrVhPjp51k6D2ktDkwgmHcjJGQsqDqgfnobD92vBbdU",
  "key24": "Czq5rjgHb1LAvocF4LZSeR5MND624auQisK63KTrxDTyxWzFhvZTbPPw6eLBSKNbRg9oEALDTBBcj8v9hyJD4Cs",
  "key25": "2JYgZkfk82qV7SuxmLgBtCTo1rH94uWr1kQ3sh13nBuucqVMKyuFhigWqo7ZtEXGjpaHsJwfFgbhcTQD1QJaFbia",
  "key26": "5L5mtGMy8VxRZpk2Jcz3aqkeBW4fn7jmkF73jKMyFMXrUVJnbV98y8NNp7G2jwKua9drjxVU3k47MExR1UtK2pTV",
  "key27": "5dqryL2nZqVygknkvnqzf6wExeJMMxKiCtdYiFJGvxec8qKTNuvkbPTLB6FhDRkGFiaCMa1Xc7mcRVBJMDN2GGYP",
  "key28": "39ZaUmtdff6hTzCi58JaRBZpQUzf14x2dZ4tdpFsaLgcpT8bspyXWbZNh2y3c79Biy4XjjV2TRUowH3idzyqYbKW",
  "key29": "4yytcpvSEAd2R1WbtU1WpxyRG2d22N9DNraAsyfDnY4dQXksLNCvkvPaLhXYeVXwf6tDe8ZHzDxfvP39tQ9gCFYU",
  "key30": "5bLUKzeYkr7wYef2ZheW3rcAyqd8So5HC6aAxny7PC8pXAkgpfoNtmo7UShWumQWQUDSvdr3xBvYgw314JYLNAiq",
  "key31": "5aNxrzdEJMUh47V7cirrWLcT46LXtz14KCiiSBS6VsHSgPoAqqd1vNetZGTz8XaAYSRHqiDB2KKzmHtAHdNWS5ys",
  "key32": "51p7LXbTVBJ12v5c4XAiXpa8uZudo4jLozh4Ui45NojjW4b2k3mkdskWTV9p5mofuQR48f77H2cDxXedcv9nxMUQ",
  "key33": "61u41Z5BhBNfq7jfHgmaChFYw7gj4v385aNYJcubJ3GwkK4BEUUV2KK1jxiPrGMdAg3UJZp1YWoHoF4y3n3Wmyrd",
  "key34": "3MPJ3XkYfkisGjEq7hAWabLjb35rgnh7x2LVRngKb2izho6owcA78sjWUDpNuALLUsXZWetgSjZ9aBRWb6uS6dtr",
  "key35": "3Ya6AwbxWQ8aeU3Csf2EidDGvKzkZ7Gb1ugShjaktEEzm4KYYLTzQvzbwbH8bfk6Ujn4R2Ek6CcMARD2gygrL1N1",
  "key36": "22zqpfM3LqGeF7GHqFMDidGcnhgYWmhUBVVxF4NSL9C8LHZyjboxqTLsjhaggQyD6eJpAFMv1tqk4NKouJBn13u2",
  "key37": "39QJz1SCqa3EHwLH3DVAnxQ3GPZtm6CQAHxJjuvTq6NY36H8NJsa7WK7ypHYJNn6FGDcm78fRKaeReu7eencGWgV",
  "key38": "3TjBQTUGtnX81VqE3YRUEtkgMAsMZUKc4M5esKJvgAPvEuJChuwdQcbiAyqnaz6WrVjYzXSqMbNuVYhiDCE2znYo",
  "key39": "2EuiJY7gFmGUn9sXEPFHcr8accZAuKczoobwyCSixMjhxT6xcqtaVsFq5qjvXwjKV7B9c6aKdfDD4GjtgFSpyapp",
  "key40": "3w3h3gY1mdQbRaeNWa1u1QYmKVn47SNEAwTuucup9YyDqKvBUnz1qiXMkNrYu7URm4ujkQ1aUHe2g5Rz8ZodYWY1"
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
