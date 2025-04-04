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
    "mxD9pbrWoCZdZxgJhdRxhHQc4xStusH5KSvyMYVhQQiZ4TRvtfeLREVctr5juMdW7N82PCF2i31km6fJ2Vhx7BZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dBo3zZ3RFygSHdVvQKScnmLCTE4sA4swd3X3BJqs8CPV5AAB372feA9C6GDRJcyX4RDTSHQt5K5s2Jgr6H2YXi",
  "key1": "hLJoBEmkefaf3hU2GiqfYET5pUXbYzfFpewAW4hRPJvzuFv649gHvUEnzEqdZsQgGbYSzT4PGUa8kqzysF9R5Q9",
  "key2": "4L6pYFXX2umQQiw6km8xpuoR6GnezFk1DcTo8LdP7SVCagyfNZxKTJxjf1E4ZnMyxQRP51u8HXJimWakrTSB5LoZ",
  "key3": "uTPGjTF1cyDTe9ArEgUTZpwH6NgEaTQGxpx5mqM5JXsEQsfgc3XJtdbMYC592Db4XxwhfSDzR84HQyDcMKQm7x6",
  "key4": "axDNMYb8M9HU7h3Xhc9tFT3WNPurceCHwVo13GwCFJgARLa7ZrgyvCzRfdnn2DN3kMT7YcwgUdjXmxCE8KHLLR7",
  "key5": "mSWrZWKU9VVrnYof1WGGLUk3fuwxv9xZbhVbf56woQqeXP2uPabaPW5rcdQ6YBPc5U9o5ER9hEd3nJr5nCfF4pK",
  "key6": "5XF6wGtxK9NwVSyxEny4Sjk3QDQXpgYQXpJrsqRm3GubfA2fGzQQ1bU2NFgujN1BWtX1NuMYh2JQA94Rw6ExhK3Z",
  "key7": "3DHhnH69n14nx7V1YSqrEnEGxWVWdhhzLgPgqpLokXKJ9XQZYx2PYQGAJCyi5kvJr5qnNFLJNfzGy9A29frhnTLh",
  "key8": "3pBTSQWphJkn6KKSUPVbnSwbpQJzk1JUYSgmn1UaHW3NK66ZsN4Ri9cuztdWomt7uLychi2mpHExReHuaiDtdeiJ",
  "key9": "5dddZghWi6e6Amkp6rpGZEp7sLPzfwvpH5YCHChKiSUpPTCiBvAAzCaG4Heb315oXpiJk4SMYfjbLwW9JH2VZmXT",
  "key10": "H2c5wf4AhLnSboyJH21Aq5qTKjoR5byV61SYBn6eQ6QkzYiGxzqoQoS7np6dxPVR9oDT2e6qtH7AMSUgzp7PjH1",
  "key11": "5sAu3PL5D2GumrPjMahsUdyXbqWaiCJ8Y4P9jbief7Rcco8bEwLQLvWzUp2DPE4YdvqSY9vg9VpNJzmL2jja1Qhm",
  "key12": "4GkrM1ugjKW4WevVkVaVwWHMXgNzX8f7T9PHHbxZTT3PigpA2XVTzd3FUV9M5ppeXm7EeFYauNNazaWN8EpLSWe6",
  "key13": "2ZHNwgt1WH1eRDB45SXomDG5fo9fNacqoPWnaCWAPvoUcT2EsGHELzFwwyngb87JGN6RRaNeAX3xP3mLWRvUG9H2",
  "key14": "2pLJBeN7JAHNFZac1GqjpJxFcjGsfdN3Ujd6Z1kZe81T46S66cvrSKv8LCzYHHLf5ZrGneEXhP31Vez9WMQeXqaQ",
  "key15": "25TMiiudXTB8FtezHWoYs4DVdqftn7T48WPegcpHTbtjMJBCbJ3MSvR6p9QSsy2xJCULPPUhBT66KGf8ZzKUachT",
  "key16": "cpK1MHx4qba2yrF8XYmmHLYroaZpWA5H27LQV7Pa112Vct3bX56PVXugJKhCj1k7BAsxvpdrKnkRreJLnQ59MQi",
  "key17": "EQuBdDh278T7Ri8uBtEU46AosdVV1Dg56wv3ozTVuyivGC5bNqTYust1s6ePYzPNJp1YtRVBtzhHSWferG6LDLy",
  "key18": "3iUQbveGSTQTJc33V4jfgaLuK2dT3qRAcwBoC2zdM3q3UULrrG8Grfd2oqkEFkUApmKd1kKpJsZcDGiu8G3VxGd8",
  "key19": "3rWeNwRKeeLYGLebm3UT2SPq5iJzktRgePVASLegwkJL5vCGRW6yFjWWUk9Dxfa6oBKpxdRVQi8vZsQqUymQL8UG",
  "key20": "3F3WzmBhwwKkkTChZg6jeS7uyE7RmMoeDGzujo7jqTJkfsGixXc7K2puRFxahG61uJHqn5eitbDAuTdpudguisQa",
  "key21": "29tWBWf9pFHcbcMS76rfh2NZTYAMWxwCVCFPoMgEouS9AZS8gWUnbx38pPtLgrXNvZvAaBASD37HwPGScEhsK82J",
  "key22": "5jSCJCjT2eDjP7HZc2Tuv3GvT4HSWdrKGoC3TUYsRFTRBFXQHXnRVJVbHFQ96xQUtTe9uTdPt7BkLUVU7JCZaXiR",
  "key23": "3K4FLUcoMb4JMD3HoRvRxmgPFRoftE7cwxY6KorAZmq3jgRkwqkXnKvjNBi1EUyLUtKPLvvLSTu6PEzEAUuHvdni",
  "key24": "4qpTfS5uiNtMzom3eSf2JezSjB18WVsLJjrHr9B2bRJa9vNfpaXpD25sLaQTpQtQKUBZo3jGv3xgPLji4vAzU8C3",
  "key25": "5uMHwv4nYxEoWi4Pkvnp5nK1BwvvLgcw66TP84QCZGNj4bVhUs1VHsD1UVGYedQ8cS863bodu9HNvJryYueo7Naa",
  "key26": "3211nCpRyF4xKHhLjP6Strb8Z6Y8ZHn6tkHLh6aj8uDcKzJoP877n5Jka4q9aGbQC4Ge2aDtuhZUD47hwqPLsSnP",
  "key27": "3ePsGTMo2w4UWkch6Z3CFByoWxaYhwcDqMXxZd7GJVUtEmmd9wVmDx1imSnrAsqWnJR1tZVYkz1SpqDip3ZB4CzP",
  "key28": "vPz5r9ULbWpHh9k1LdtCy5pVtcU8snXuAdpnRNTHNYcgRSfxWjR7GFquDr6WqDZyH3QwmjHisWAwW6v22EgUpXv",
  "key29": "2Uf5uUe8bnb1XxFvLiBnRb2xxDdm73mQjbU6saYo64X5bHwegTuSmgDvYB3RZgGCVADWScjnxLBBkbugV3TpbrXX",
  "key30": "5nZNLY4b3Rw4ydAjmyjAeEmuWDX198ENTeoSfsuo4NEmQpqBX4UzNi99iiyRX5EZst9aBxJRfFBXsCtgxHeab1YK",
  "key31": "3eGvCjmaofG6rCVd2KN6Z9kRNzZfZZDK1a8H1eU6RxA7P8N8Ts3rXqCKi5MzWNYeWKGdqRv1bvLyMdM76DKHe6MV",
  "key32": "2xPyxK8qbWUprRqT42mnaR2rHv45iGyuZdWDmUEeLiRieC7Eg4Eg8v1ciWGZYij9weTdcPyRGCLWDf77tMFDKMX1",
  "key33": "25Ud86qRgkHnTaFdEMXM1t423eEyjikDANN9cProuXWUbuHCQvna4k9cBdWVVnnMNTHkDFEFvZaqxe27f6avujTd",
  "key34": "3Rf5G7LHAtCx483aRmAVGkkVjCCSU5nEjtqECYnGasAeGzmjn4nugKFJVfKk7cqkRppQitYuK2wAufFzdBnTPQbs",
  "key35": "4Fu5kMhgJS1xzPdnzZbR3j7n8GsWeSY7fUGJYNSg4LxwcqYAvoYJpSWsxjTpQVtfRZb7mqf8Mhq7VFW17dNcpx97",
  "key36": "4qLDXfFX8scyyuCJaidws4vH4t88Ydktq2zKA84JQbr7DswyWpwGq5nUBbfjsCBDVaTiXDu6336aKzGDWa2k8gyA",
  "key37": "4cBwXB5GsCJPqYB8XzymLvyJ3fQixLkCpgiv1Dv4pVfRBz4wPrxFMXjxVi5ZuYLbRqLFJvNJfWrhg1ZkN3FKagSb",
  "key38": "65Ms8mst6fStjAfK8nuS9yCQ9wBRz5y7mz3xDhYDkqxxqa9A12bqcz8nVh3fqGFCGtPZys5C4pL4UZTyfhEgM2yF",
  "key39": "5ULnJFJ83FWqCZv97JP2MjVnFNtcGL7WMZjAUetXtYLqESwprfWeHLeV9K62aKvQ7vDyW6iUrUz7o4mzbcQUpDQq",
  "key40": "CpyyzqTuKAU4a9V6dkWKydXDziMLnfw3bfypvUAw5utEtJNjpV47GNfJbsDiHiwJ1VPB7PX3n9Bemgk2ks4WKzw",
  "key41": "5Tw4Jfh7jvcawyS1rYQbGfBvHXzYQ3rWfZwA669xFtFcXuuZbF8gjELw9L7riLuERwVnWsHd1cHjJwXJEF3s9v5t",
  "key42": "5kUgQ7jMS6udjrADhL6h6JjzEeUs3KpjzywENznSuVXPUtdLgv8v3unx9x2JKJ7eWxS1VfoHbYoZi3La1wWnNJJ4",
  "key43": "4A9D9dNDiUYsx2J7AW127DBhhsEyQc6objdfpARQyAvw7ed1uk6pkWLVFYSjKhXh8MddxDjZAZgxpdrPg9cksNXv",
  "key44": "5aEF2uX4oqQTLnxadJH8B3SD71mRFVg7iAd7B5sPLWifpNvMzx9jantXJqN12KLYLSPPFPHSVHd9XXjNgfXnsud7",
  "key45": "5nWaRPX12bihEakaQSEEGK4FCAPRy7HDwouwsWHCrgwJLnfcZVfkbhyK9wVEKMg8VSHa7LqET7fdSPdGBkP4Yun2"
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
