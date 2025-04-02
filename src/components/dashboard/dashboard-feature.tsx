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
    "4npYoWfwBUJ5mJcoeFEE8SghB9sv43tppAcY4C6Jo3WWZy73amM683yK6KYMjvGVvnptXp7fTfNudQ1Dt7hoDBU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NSZGtmJN2GH8UebrSgy4Ti19swKQp7dRLo6jx2ZLeEQGG7m5wxRu59CRv46zTdBbhP3HdG7vvbGmSowSS64hDcc",
  "key1": "4Y1C9ebNBXuHGv4tW2kmRaKWcFajZoHmH4bWXoDjewYDc2Qf6V7iYxN52yrAfCzrWxdLkSMGXLtTrSvfMTbbkqgi",
  "key2": "4vPFT7nsHH58ZnoTcSeMPTptdP3B1Mt88v6kPmessbPxQ3Dbmk5mZxeXKo9f9oi8JXPFN4o6HN4DnVy8RwnicBaz",
  "key3": "4q9TS6mFkN64JYzE19f19RbDT2PssDZbuc8yWCfLjNYQuu9q6ZTNZgqcbsxht3SGXgfcAYrN1UB1fnS5tR1MmzTF",
  "key4": "31awr91DrPPdCTYWpQaHXEvPBWXxSLtUnDNdvSqsPcB99ePrFJSw1zTE2g7UbZJY1GSvujytvAUvyesNxqdUANVT",
  "key5": "5hU5TJPBWAZNUabtkxq7StpG2Rwtehq1VvZDiuJBmchNAi9RJbigXUSssBdFt2HkinuW39wd2P3ctrNq8z41uh2k",
  "key6": "5CM87aL3ayEucm5NfdFrKx5Xqo3TpCbfga3rX1p6eWYtgAA2vzwvL6XbmFUSoup8sCM528xE8dhKKxQWaNGGENLV",
  "key7": "5sZBcFwS2wEprbaytdkANwdHf6Csi5D7dDF791PNzvVKLxumwFFHVCKyxVru4dxijhMtjCsGJhsWuaQRKm8ub7B",
  "key8": "48k8KY2x4qK2MWp3yrTtNd4Y8gnf3fvjAcz2CMaaHmMyiVCzxCCjQTx8mrgdkN14qP6FvxbJXAjtNtbyLceALdKp",
  "key9": "5fdV2M5k99vZaR6QkaYVACWoeupuYsNpBrpFvaMpvACGKuEVoVuiNJMi2w2BybRdDqPWuQNyuBmqoriC9zpAF1Xb",
  "key10": "2MzdqrpGPBuntzXG6mzNrdVPPrbHyAohJXLBTABAnEdw49YRfQtE2H7QCEbtDcSiq9Z9FwMLqGWbKGAgQZoPkWBJ",
  "key11": "5PoHsQtMwzotifgLnh6gvavkPmS9padz9Rb2szT4t2KvYtVvRjmb6ezLCL6xCKnYp9QSDUEAvzSHTq2x9E5noV1p",
  "key12": "3xpyBTPiQ12qGTJ93ETmC1QkK7jwfTfSZFcHRQijnzZHJdFZTQAVMhPF9VMjV8SqmnHAKUfkUjuEpkKc9pWux3PD",
  "key13": "2dhvndAojt5kBZHEaf9YeZQAiKuXDYrby2iEerJJzFus6hzVX6oG9gD6p67RNemuEBQgeoduwax8uBxgS2NqTLL8",
  "key14": "Lr6hiBt6j8Xif2LirvKma8LjLQN4YdsmtfpR7bMjVGJsgP3Fv2XB4Bh1dqmXH1NyXUvDbXf7cDjfnKMurS93cWv",
  "key15": "rtSBa1DjHK94XYcB3v8YmRdCwnqzYF6x5xJwqSu5RjqRWCn4YbmBKuewzpQyUSYAhdAGBonandjrYahLjaLcyNJ",
  "key16": "989cxuXgaLJ98uUWS6Q3gKNwM2Rayb6f3YbKE8ymftN8XYvDVJM9A6H3EcgUhfB8gkC1UGfzw4GW7vySRbEfCx3",
  "key17": "4gMmThhZzoodVUHmFMPz4MfYiLCPHtfHCEe7khVaWnBu4voPL1yrZVHfE3zm9XkXXCassfpF1dfAUHDAHU2cUAwg",
  "key18": "ZL9DwdVy9hd8jthcJY6pyydc2rFv375XJVDn6w9EEpREt8L265SJPJidF9zWjnq9zxbdQUYHoqdz92fswScty5A",
  "key19": "21U3MCQNCN4UYoQGr9iG3U2vosTUgEYgmMiXhTSedfT12H8a4ZJLMykRXe7hwQCBRGHdWb4zbP9YhVTmj9qATN82",
  "key20": "2yfkcKPguxBsz8mJMdnRZcdbguLgyVHNnyrEVC3SsUHP4et6juoFeY4xEgSV8mKCt8mZcbfYLcYDfVhn3XzFWgVL",
  "key21": "2uy8zRuP9onG9YGgbWaXKrJhC4rHPdmSLXXd2czrTtFY5wcNvRDoAgRotewPb37XYiEyLr8ZoLcnovah1rftL3NH",
  "key22": "5aDVYEe5Vt2FUDdwm4ZGt4bkTPEQ8Sd2HhkiQiRYMNsaTEuwuJC4PBtR7FE4iKR9AAwDnWRitUxw4p5n12e3YNRB",
  "key23": "5hojX1SPHDye7o59LxTkAiB7yq4NJ9WUH7LqtqVBorqS6efLW7EZwfRnH9ByiNqTAqxgE3gSngNa42hJXP9MzKic",
  "key24": "43ZQkmMqDmgyMCp1B9XnmAC6so3Cr8gHmBt3sUduUrauhu8aFhM1YXuHe7pESLAw5oiQhupnCgG7odj234ryBZjm",
  "key25": "4hzcfCii2phuRB3kTRZ33NAj63Fxj56uoWMkhv1K94d7TrrpEJFYLTLDZXumChV9jqpHeAVjTnHGmARWy4FhsZjo",
  "key26": "5fL7JCk1Q7AqAL9weqFaED173aXJorVVWuWgafWjUqeicGcSmp2jUj7CnRtHhnFdfB4iQFN978fbDk8fbBB5chfn",
  "key27": "4dQ9fDfd6TWYvcQm4QQubfM9eBXkk2vrrdgNLzA4adfsVR4n7R4AoTrapRZQv2pXmVMp7pNWzzLFuzTtGqVXej1r",
  "key28": "64ayXwWB9P9w8mVTjLWpoazEzAoZu13uYnDGNokt7Xnqdkg3bdVVVdtQpfHnErLANFn5e2apXdcymAzfPbchRJ3u",
  "key29": "CteCUgGqhikDYbhcdPL51GG1cXsYQujDZRv8kzQymG2z9vJzLTGL3a9JvEy1BoYsHSXQPQz6dTu1uDfpdsd15yb",
  "key30": "ud2bPm1DfYVauB3uWgcN8EECss1mENzQLAqq4neCiM7q7YXowCt9DkEvipXB5wzt5VBGcfmELTwWBTAbx4dgzse"
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
