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
    "3Rvz6gFFAsi6W7dJ9hpN4JwoC97RPfQXMQNCd81zPw37b9n9XAmcaLU83eEbTcS1FuYG7a1UfdHjYBr9qkVAoRun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7XZEoTt2xmuXCG8tUavV1C8gbZjjSjmwtP3iUCZU3CQcohM3athSshXcuSoAibg6b2gfnxvSQKwnAQVBfxTWYW",
  "key1": "KyANK5nXB4W87Fa5DeSrYCqGCH4roWCZ3eGQ4pCNEfPNfLsJiN4NGo5uP8hFELHF8xAT3xNRxKzTfJH557ZcMAn",
  "key2": "5hJKzHgUE32DF5boSFCryYnqLxwKRMNehKrbJa2iiPBemsKZk2UqkxZB3cjye8mmCZ1wiB4v7ik1BnrmfEBSJ6uM",
  "key3": "4cdEYow76xLY7uhYUqWfj4fL6JiPgSKqmJY6MkLgDfDGYaVdzH9xo2rbXWZDtGPjknSQa4gGaSxwfxxstkFYU1bV",
  "key4": "3m8sjsTfEWXZp8Vv4kAkUnURQPCKTnoUhSAC8PXHjrrdh8BNxsbZeFRrrT9SKwpa3epgsSTjR9k9eCvczL9RtvHi",
  "key5": "23CitqawUkvbAEFyXc81YYZymC2DRed51CXds9mGbgn2gEbXmhXCPFrECHM3zb8LuGsGRMs4hzEc8BSAXwTAs9b6",
  "key6": "5fboCrMtzF6Y7duBmZf29npQU4puRyfsW7gYzTHHS1CJbJ6PLbpS7aeG6Ymo5MdZA1J6f6UukgEHAE8yUxUnDMFD",
  "key7": "3uW4jzrBfoxTrbWdHa5oBBa5WFicaDo3ViRRNBK6QtMTdP73Lwtrh2CszNUmh5RMGo5GDYtQQgWjqFHZBsf7FhVE",
  "key8": "4AjuqSw1Wboy1ABxdtbJ92zUYoeY7uBjYHSewe11315a1eBqEWWC9ehstGM9DeaUsa65cjYkswemUAPGVDK1Ag8f",
  "key9": "nZXZ36fYyCgzfWA2tQXWq7K9us2w1NNDf7NZ2ZJrfVSPqaaP89AuwBB6kqCydRDB28tFqS6LiPpcisZsF3Fsxx6",
  "key10": "3g3TcGTPexxukg1UARKSvR1knbH2S5spy1JoWJL417uT7vsHmVGPmpMEBMim32bJz7BpxbH6n1nAJoiNBbz2gZdj",
  "key11": "5JoqHANpzE8z2rMzM8NCyrWvYVdzsoqejTPZb1z3UxdL3yYmtcLSV7FQpwuecD9LZmn9cD4z4UZbkhWMdz59V1Mi",
  "key12": "4G9CDZDSX33Uv64AnGguJSmuRr5awUd9RzQopDQvnCjRWKN1Y6tHj1nfqUxNwodBqLuGcPjfDvo4XqtQ9i7VJiTK",
  "key13": "4bp1LwyXdXzzat9hMq7CQ9FKj8cDiNxfMRBdL15jmAPPrC6TaVfPAHq4f5aJi3U6rtuY9CJqfzPWwL3Z5rhbj2Lp",
  "key14": "1AQKoz67baKFFnDq3xiiDyZWG4JkEwNRcnptG3jMNAQDNouHkTTgmaov6RGtb6wWi6p1W7scwsLRMQHqgDpRpum",
  "key15": "ndAmifBtg3PazykwvAoja1Knw9G7b4Gfaogk9GtfWzmt1L6bgs8BPFDykYTfrekbwBeJKGMnHme5g2LLz1fnmNH",
  "key16": "5JNfEENCsWvwhVvi7Ls9n36hUvunXuGeTZpTo8EynFNkNTVkNUvBQLFrFdT5ZifNHBQwBYNks2EGNHs9XExPQ1MH",
  "key17": "5dSnaen6Cu8d2LSycdLZa2tiysakaNrakKsMzstXfMoHT83aAFMiBc4K4VtGTVTwKmAVEU6V9ED54rmcatxuiK9n",
  "key18": "22fFZS2ZXvf7Cej8J7hvpugPQY3ERUDpASsWBWbi4LLgW5dYeTX7Avvu6EY1cS4nkfi9HQJM52GQWFuywu8qdMw7",
  "key19": "3TnMEvnsmHYZYCvVWb2RfV2cRJX1265WCYDZcYitJF498VGEjqiPrZBF77ZoFP4hFEqtBfRJaatSaSs2LYQKmE5v",
  "key20": "4WeA38WQrzWKDBiop6HLanR5hqNtpxDh4V94jjcMPvFfsaVNbGdAVSzvWnyRtoibmzswtWVjLwUHddChjf4auTNc",
  "key21": "3u2fJxqSedg5bW51Qtsep4jxwG6qzUEU7iDsqNhQ7vbrtAXW4BTnX8B2ZeUMmubQ3ntSV2NTjzEJNrzLQe55HJzZ",
  "key22": "SdfSjFMDczgfxvCG4FJs1QHMHFoyJxWsJ9ZR1EyHuHgZg1BE6a91DUnRvwvSgk3tcFjaRJ4ZfUkYKNSfdwNX8Rx",
  "key23": "3K3ZjmunsFyyCes7ThXWJFaZCVrHSHyRVE2FKWrNMGAAWGkQURrCZzXgQfrmNzN53mBZJg4fL4jzGYM69fBa4v9V",
  "key24": "rHLyJSaFBnzANzDwcLJnNruxUqcU7BnofCV9BHLLv2rKrktUCjM9AEof7PLo2edVLHAgzpdm1K82dbQdXSuyZ3M",
  "key25": "323DtHN14c9ih5kWfYznpVMdernMYui1eYmSMCquvBgUPeKSYxGgWudprGoQRZCHnTQoVy51RQvom7UXwo1sHWZc",
  "key26": "yd8dfEWbYaagRYiT2a7119aJQ7xcsHpoAgGgbuVVpkQf7Drc3vQTJswdU26SbS7jULg7fLyKiHWwYnPUSEo7vEA",
  "key27": "2xvSG6r893ndQy2b7YR2UYvecyPhzsLQRwSG3TBpLERQuhPcPyxoWsDF9R1MHdbA3RqMwWJYH7cR38uKxZz2zwGL",
  "key28": "3n8Yka6TLj4D4FWKxS8ret5uXsmxjMV7hqEFymmAUp24mbbqhfJ2Bqtd1vkV7gD5K5WzMg2y1hfp3rkkRsP1vDJJ",
  "key29": "3hgYxYhTdYskXiGyLL9cfWtJArxiahzRzdR6XEZf7bcehPiAAC8d5G77cEoEXt5EaPdhPK55YaRHmKpgcbp5pbeW",
  "key30": "4yD2s9dAwcGgyX51LX3XpDLxuUJJ4VJ2yi1p6zKJHEW8tpjgJmBQdxY2AWc34iaznP3qERK7tZGkf6ma9f7thEf4",
  "key31": "5ef5fv8T9VWxkMxnuUfZEmnN3BZrUaEhdBCKvZk3Hx8FzL3RRx1Sk3AujL2ET9CuZdjMWtFBjunpW9JCPbg4ggb8"
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
