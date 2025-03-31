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
    "2i3HUbQBA1TxUrrkwwKHFERcTSSiSG6ZD6oVKYwqmWxDfxVv2T2HMiMB5NuFZZRjrgv6Yh9RzzmuLa2dH4TTgrUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nVNjR8qdx2rfjkNjZBHbPgEQyTfhGSHzwKs5TKgumd7pPsPFYCMSN9Nb8fZGG4dBocKadKtTXnDWWzQrQsXtbyo",
  "key1": "4wuF14Dn94wPTLe9KVD3rCAAgx8snEfSvuqXyoHPJw9NYydB8r3PHhrk1qrEKZEweTUBa98dqVXLT9HqgqxoN2L5",
  "key2": "DxQSoRyqaTfCjwdmfz1CRiXiwxWw9HPAhrGQ1CMv9v2AkAvqwu513wEHRnodusVqCkNSREYLG9EhtbA2Yxyp2rp",
  "key3": "iNVsZFmwPoqnB7nmXi1GTcJoq67gCKfzFSQSjJeqowTHdtTpU1XQb7DsoE4GPRxXtSpdE8odbxcqmmidMVVgeD1",
  "key4": "37BgboZMAXmLEER5M9N9VmFtovSuZEZCzBMWr4nVb4PzxqpSnAfSY9c3KzykYp9DAuStLFN5JcYKk7MXFVwgkKtj",
  "key5": "xCF987s5a3eWbu77cPStMzGnCSZroSBshvBprW9m316Z3MQumMXxXYL6N5A5JKCoe5K4jpEMWGgEFfwv1KQBTxa",
  "key6": "52KvcvE2XSRvy7dNb1iimk8HrUq8Gkt2qBNsNoUZMhJYwtExjRTVbcJ4NoG9yD6Y1B5h4AvaDqPN8QHU75E3p22y",
  "key7": "3p6me7ie4wXDNm3LuR3f7DPMJCAysNomb8ktPyAMiWEQtB7mja6hX7Bxhqx32NVANyow6a3cpmGGdHPhFqAQUqjB",
  "key8": "52UeLTRpYWV5jRD2J95ZHNDcHBbPhbqMtKc6Ko9nXRKpYkTStVd1Pxdxi73j88ok9D5tUV7cyfgjqoNKFpUS84iL",
  "key9": "3eqvYVhBHXoFEgV82jwz5w1kzjqoPuRkbEihUoBRjFNarqGzyGh6qsFhczMUptof8wcqZ5hdeD2iML1viK8g9nho",
  "key10": "2J1q5W79p1iJS1bKtaAcPyWqDp9cSPo3WTYNuwH1UoYP6dLR17ARPmJPvPLU9Mj6UiPRECV3HY65SZLx7rYduY48",
  "key11": "4oPbGUCkxUmXnwJxuHWVx9Qk9uaoXai17yvVCdZK7JkAoZmMjxFAzz6HrzXur58tjmNPFPkZdfwjq4afVyacsFL2",
  "key12": "2eDyyXSPmLv8eABz97BdSKm2dyza9XRUugVq6sKa9opeu8QnpdzoHNJfD1eRVerQJFEgXJzyjYwYLEWVn2mCob1E",
  "key13": "2svCksPAcXbVezSrSyQmEnw5QcRHcLrGuwNDgrB6CUVfxbU5HEVRzTqrFnuVnB9ogLMCmsrYVegAM6NaaDgM78Zi",
  "key14": "42PpBCaMVFkSwtHf2tsaT1iW66PnyYmVSzKTSDW5p6cc7NBzRvz8YZ2tnZcP4zikktSJfba3P27a8UiigkKfysKZ",
  "key15": "4oFNJBzSMDhMPij2yQTNrNTu4w9w9tRfNTU5NW7wwBJ6oUA8SrbRVj1L8FsDc3mRnbJM6GTZEWeLKvJKUdKvKQxu",
  "key16": "2kbMgktXLYq3ueTBEe2ywqHbq3AugvhDfqHeCL2G6jTWi5HVWtnr5F12y325jcxMSA4zg8ubRnWMB9fznbeuTnq3",
  "key17": "fCyx4a4oGFUoTGp8DnXwSYYsZGBYke6fAKiXUB74RYgBMXSXQippP7t9Daf7EJXMWTcsv9sVemcdmPZZKmqjYoe",
  "key18": "cuuGUYQXWHxyAoKDBNZ34v6pY8fiSSoL7VsgyJYHFzYTnH74rnkrxmPCtPArHkZHsWbYQHBhNcAVxnYvzJrkvDG",
  "key19": "3EAh4bE4aEUrzzSVtZZSoCJC3KaV6mwiWhCasvcjYfGqcEhrGWjRvF1kD6SLbubP6F3GZZZuAGK8LUAutCcUXhKk",
  "key20": "2SFML1nHLu1C4dAAPFa9ZVxTaRNUrwBiMW887rjuKbYbrUUfrZ5CbPoAkj9CsSwjMJ2jWUfELqnKg55Vi8JXaBfg",
  "key21": "wi55HFncQJiaW9c3fQ9xXt8bzg2nJ9jdm24575pY862mJWDH2BmWfJRSWLLLnmSrdNnPtvMo8EuK6WZXNqBSc6W",
  "key22": "5ZA7UgAoTogw5yPcRZb8avPiMbATgGaKfW5XfzhFu3os4Ck2U257EozUTThe6G9gg5eBmabBXwmitv6QJ53KGcfh",
  "key23": "3ttd6t8CgW9wkt3zj3FiW9gM629Mzcok6nLiDkqSiLZ1FG9jo4rwVQ1NrrBbJunYNA5pmTPJSANFgSzkRLrekdQe",
  "key24": "23PVzB2axTf22QRvQ5dTjGix6XQJ6BXtPjyxvQ4Jkc5xFbmooX94g6hxDx4ArnGZqksA3ycC4zW1avwUWFvHmALz",
  "key25": "qbBAw5hqJg8dB2Px96uCoXJgxVBDpT697HKCFqMGbhkaddmcWoVK7kLpshHSxyNvLVZsZN444TM3FZZnJ3m5y12",
  "key26": "4UvfdoWP3t9okiftzUH4YjnWUuStjwBmMt3SZK4y5Eaikr6VpkTzPSi6GfG1Rp1uJYXZNVaVAQvSRHdLFbVo8H2y",
  "key27": "6xUaMwn9eS78xqGt5cwzUm9N7v21Qwz5Nmb2Me6EyBu31MRjJVLxQzf6uXfe1KMkQSwoCBHeRtrzjzPDgWTuAdx",
  "key28": "5Wd4QFeZkQrEmqKc46E1vgCTHxaeSztZor2vGk6ReHFMErYWD2JtW1JngDFoEuShLsEPDcjkYXxTz1LUCsdCmBY1"
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
