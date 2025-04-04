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
    "3V7837WMZsrCejzEz2DYpzFKJCwcZYCJE2Pm77CAJDBAdLnhDp4e897oR44LcdcSD8tUiqFtgDL1F1hTKWV8E9x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pychcWTZuvKmqZTdmE2iJR7kGJEwK4X8DorL93Z2azCwDa1TNyXZHz2LUnjNTsM7aTdHPTAxwsxwmoi9Kb7BAzW",
  "key1": "3do5KW65JUGeycsJfHLqPTjacx3pxgBzh7Q85QkBd6H2CwtSAKmfydnVEx7mMKQhdVdtiBRK4CiFAVMr3m58jdyx",
  "key2": "4fpLS459iKFt7jrSwMCgaiAFjJAD67RCFZwZePqDeUfjppYKhvptfTFUTaphmRjJteKA4wMF7wP5GcSnRok6HKjH",
  "key3": "3VpRqyEJHGh1LVgt1XCsU7QWuKeZpjNJPaswVffoLQ1KYKkVHEJnkTSATZDvqnCaFXFcoLaqxLn77w9CiMBuVtQm",
  "key4": "W9FXKxWogBt54b8ZHJFJmCdhPEQFPnfoJkFVcKPfLTXoeVTqWMBJPcqSp5QRe6DMYxwviYqo3surRjQzGdMw3y7",
  "key5": "5dsZZMrQZnMKYUVfiCNV8yzzHmZEpeVUaa1nZAiqwFu9k7u41T3wtTzV3cXCwyvnEAKGb9juDti7x5AMWqZMiSfZ",
  "key6": "3xAgThZSSaNpWwnF1Wg95BvHha8seLvtPdGPxfm2BzPRvhYucheXCeasFR5ndhJ3kRD3NwbSqDRFrGey4zYEzPHX",
  "key7": "5567M7BkPhtFCfFzHNg6CRDo4PVnLoDeJ8iNrXQWuxpXTUr8RmJmWoLPokJS4ehb4t8gDr5MNoFsT5zS5XcGj7bK",
  "key8": "4fDBfdBHHG5bF9MtE8cJBkGVa3nimXTkpKkXLHCECJVacs9MwP9pu12AdvwCVtVJ1KSb17Smhvpidpcddru7kAYL",
  "key9": "5C6DTHC9hAThLGGm51VoWpUk37mDqBAqawqFKWHz8P4qjPbV8RTEmStH5L68o3JiUohmH73ETp59CEzcU1CHHzmi",
  "key10": "2oFLuJrUBwYixeS5csF2zJk9E6rYFZXJveKKh6jmkRdVDQK2vPeWEndTeNsAuCABa9RT8YGFn9gHR8ZwSrXk7kiP",
  "key11": "AMKGvhDosRDQnHt8mwP4BZTTpm1bR9tjh6ErV1xGGqmrTvqqGR98LJZXwFknY2UrYXvsfRBRHPfJ1Cj3C2FvDpX",
  "key12": "4sSV2v4zxm69YxyfBPNsbmbjoSqPwf25Hob8f75tqEogYmhqvvtReXoF9rgx6JbstM6xPeQXNdCGyAm8s96cK5xJ",
  "key13": "2BNd2c4Ckv3EMjD5qwao81XoqdPa2PEZXTsyjrmDATSF3bPWaUPhoDiafikZGZbFBjDMmEEYywoJMtSEuD1LrJsm",
  "key14": "4A2ZDvThwMxPg4Vkr4PtBFw39sEpQTMqM3AafMptVgSPc7Y9UmFgZREakhoa29ftgcWyrhKkWiBkg5VQAqWr7knQ",
  "key15": "353WhGwPttRfzKdrnzEBG96YytEvMGZFkvtJ4ayqi6QhJ8qWLNvZ6WVCgWyoDB7ZHF63oEbGvKh9yoUwt7jyKriZ",
  "key16": "2oZKBG3J83yY9w8i1ZpWK9DkysN9QhCDDCanMzK8TfPZ3DQUkw2pjExTk55s5GH1cqdF6mksfMgtU6YKMgQjCjXi",
  "key17": "3xV19FSfrcZN8XSwktERaMohzaAr13ezQW8AdSiwT5rmYdL5WvQ6tAr2AST2MPBBzdLhjm4PGxeEfVKKRdq4tDfQ",
  "key18": "39ziUV9fRjiw3eHJHxvGoms7t7XnBoy2Fpz3VGrvPZreP8yoLjZ3NECBnGW8qsREX8ish6tUPGjXd2A1z3ydy4La",
  "key19": "568HAN1SG4SQgXV7aeg6fmVyA8gG8JYkHduRkCr1QAkRUAmKMD6oL1sjJ2ywFpv5uRkhatnDTJfDcYejtx82GvF3",
  "key20": "sA3HsYXqR6U9LftxSoZHRSda6PZbpwwdnHXCmACq1Z66YJ2sgfHNPHbeqh9toDJ5Vbn25M3vpWqSWwwxjjtfXin",
  "key21": "c46HpcqySkRE41kikUUvVTDLQd5boZcz32WJoUK37vu6qS4BjLtnVMaGszAtKfLs365SDE7xuJMN1tgHGx68gZ4",
  "key22": "5kU9igVVHiPDZsQAAincoBUMsvrEkjqyKVLXLJVLELa3Pqur2TaHUbUrghUv6t21iBUrTbyoyp6vXNcay4vgB87K",
  "key23": "4DeBMU9UccFcD78t6uKNUk6hpA8Mx6TTscdnwebYkqZzrLrXMtjykgqRxirowfkLhyC3pZUrQrhfn2xZNsKFWA7i",
  "key24": "5x516GmCyBisLoHFqdU55SibxrpjG2yhcQEwNEABLG153BdbwXSpSF4zewpW6KeknL5AYzf6NX1pbF2PR7hS7UzZ",
  "key25": "2nKHHCRJ6UWU6Gh2Kw7tuk9irARVdwaGt9ivwbFymUXSmZL2RzKDGAEQ2u53tFp1qDZzyGVdtdCm1Wmt4av7KLn7",
  "key26": "4toaGQfUjLdPyHspWpyAMTcm58u9tYPUCVTrXWnUjB77PxXeN3byNyiudjDDi6Xwszu9dLdZ9LK7ujiji3iZnqkG",
  "key27": "UYFr68vbkwQrGLuLqTuQQXv7ve5GxWZxHGDw18Yfi8tgoJJMXkGCrQfjDPpZQbm7Ef2CHk3XnDNr22Vsky7NjsG",
  "key28": "Damr1Zyaesz749ucLGNTfh4eHnFuaBD3uvii8pY27d87oTwH3VKF4No6tnyoRf64PTdKLdbU7k5eiJpDB7AWAFD"
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
