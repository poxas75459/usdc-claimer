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
    "5xv1CQ1XCZJJHVncfkFkEszJdJFg4JTyMdcYTbpfzsLXX47CUeQ8KPRfmQk2DsALtz4Z2Xn73556KHwcUY2ygCar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w4y35pKkH4qSnNzgS2braY8jWeC89JFt6FE3JcTBEikXAssD3uDHomWwa6RXqu5bvXNLti6PrArbEecoBMPxcYx",
  "key1": "35AoMrcJLmpcJyWR7sdEfpX43HadRgmyB7qvZQLTkdbev42rRajvUP53qzFcdeuKDsu1hR2qDh8Gbh6Qp5HbAoro",
  "key2": "NPeRwvoCxWrFJbTEzJknr4LhQJk3eKWEpQeJNWpeU9f3vkrg9t8Yh6KEETDtTchZyNQT9nV2z57JkckDMfh9VjJ",
  "key3": "4cbWj3zcmvHwZH4DkhDHtg4fWAL8ypwMwbJmTHxPWv16uBScpojgaW9P1ffJYdv5mvCRfZr5Z6uVRFKLV1aTmEcm",
  "key4": "2AT4E9wVYJB93X4VYGffbcDwZijAmgT6eGAjHWsc3uZzMufSCM7Bb3pWczs5P64rbmWPadNgh1Qt2JU5TEH4fRRq",
  "key5": "2u7yfaVgNuXSTARfa7wnwJvJQ21L99Rd2ZAQFNQ7hqzrU1ctF6iK1VSs3xEApfsFfh5A36fYuvA5JFu2cNsBbxaY",
  "key6": "kq7sHvkGFq7GsfPeEcuftHNYmvaBmUxE2siY8fpy6jBGGz9jmzbUT95WCnAQy9jqR3QH4QH64AtmdnZXJ9qBi8M",
  "key7": "3whc9bs8xSqg6i7Q45XrrUPkcbX8Lww9T3yMEWsHpprvay6hB3224WFhfwxH6CVSAeJFdD7C28db18hJjjJAMoZS",
  "key8": "mFoZ3Z8XnXeVbSmLEaFTVds5Ve3KhCZDevuqGWn2YvfvicuARHsbHFjo7661wvXLYrbEtLJvwg87NCJsVsr6vpo",
  "key9": "3HxAhZ9zb7iBHCycf56a9XthR8Eho3ejvaBeM3WwGJmKtqnRhbaRh41vaSoXANNAw1qycSyxxYQy8L9soVcwwfXh",
  "key10": "2hpVh4EDHVuBkmMVx5rGeSuVfj6Y8npCnN3UZwST4y5eKoh52cKT9DKTCtUgSbQ4mAqVM7sU5HuoqdTZa8aGdGxj",
  "key11": "fnPCTC8cUSeuE1zf781mxiyE4zppmAzGt6KtRZbJJjMt2xcwQeK6spMZ7tUb95E5m2ZxbxFQBwMJLuCwLgko9fJ",
  "key12": "zWCFknmpaqh4nH3CFzPnHdGQ3VXcSmcgZ4nBccoGVAGx8pXmX1MWf1kgQVtQ695Yiuf68bKs5zgkmCSZRoXdehD",
  "key13": "4LAhYKiqwqkhJ8kxPg8XeSve8cUJ2UqyCWXvZ55imqWdnKgVM2HhS6uFNGddUuFo6NSTUXyLm1PS3rh8sAwx4yBy",
  "key14": "3yDGDbQDrg63KwDPxn57Rd9yS7b8kp81vcN1eChZ6bkPkrpSn4BBpGUXvgNEEsaYJaqqhriZGM2wv2o1Hy826NGS",
  "key15": "26YGffheFNWyjS9DAq8SuMUnW1R2V6WLib8Tk1gvACzrsZmSmNK8LT7uCZVz3ygN71oZyUj1GDNt1c6b88as7wPy",
  "key16": "4Hr9rmVhL783p8sFXpha7WqGgioeyvuA4CwLU3pWSbjnFzrTojoDa9f9P4FVyCMpP72Q2cTy9VMqLtm4QQxQnZg3",
  "key17": "619oFwTZ1YHNxeyWyeTD3zPChHYRi4phxENrk7hg6vh1Q5UFjjusypQPjuEAy1Ud3wPXY9X2f86L1spsbASd2gur",
  "key18": "gXtSVi67WSF93gQi2Z1X9iVps3msN1RzxRJ7Su3q1qEowrGPrqknvnAqj26udPDnb1x2EhnSgqvX3LBpqNFsTgo",
  "key19": "D7yvqXjDDTcqpBGzRzTDCGq8VvFLyFd2Rog1bQXTAZeumsyaJuEYJCvMNLTzNfV5gKay5NUeJUdxCNtfvPdE1vH",
  "key20": "2MG1NDWytcB1jA8Y9BxV9DKSdTs7qf7sVXHErhMekbVhTyssXeSabFU3yEQx6HwJtvyxFBeEwpgLGLSSvU5KEu1t",
  "key21": "4hg73H2CerNAREAriAC4nXcDjGGankfqdbe4kRQoRerZtVpWAJkZTutZYg7v9ZZXTTqa3eFTq3GSWGwSqSRBNPnN",
  "key22": "y13NzJ2tuX3PzHZrApbQwv47KRxLTER4o3QoUWhki69G2Da317owtoBbDSizpLsKqjEyytUAnwbhoLRGsbLex4Y",
  "key23": "2HK6FXsQtjrmzwqjs7yDYdidy169fyBMUBLc4CM9iGFGXbNoBZGEXi63g6ZicqjVSACzqo6zEXe3N5aevForsGWS",
  "key24": "4L6hPH45GPhgPRNHC9GjfzJ6Fz3xH6oDycgo9NNVQTzMrZJPHRmdj2ecSCWpk2b9KNKdWLtoGEnEabodpNggvQFX",
  "key25": "3ercFVyRbvfkSPdhT48oyJCZnvReUeLNFHMz7aB8S6fmj1n7YtrDFXraiQfoj2spX61iaeKBuNiGNh8ZPaQyXNZQ",
  "key26": "3SKWWdY5pdYPek4Sg14ZWL8grZULPU6Bvzugn4oKV4YQV8N2YTb2TPELyHDkbgBrdondrrf5QjwWHnhqfu9EdjAs",
  "key27": "5pQqBFRqx5XyhCg48DEVpEY5Zg2kEhFdAYmrRG47uiaBB5ZEj3v8iyhZDYUGaZTqSKC1xbBf8xzvGF1xQNpZYLvC",
  "key28": "MBSJmUnoqVTWbp1j8S1SNySoVEdzzm1s4m6iNAQTBtLpDJzvqTe58ZYMnB57RmNi2qEZoi3toEDoUMXNkNdAUJB",
  "key29": "taePgCywsQCkrXSgX2eVzyEqhPfWN47xVs2yXa9atQTsMnjjUKnfScUeWX358SkHq7Bs3DcibZJc7JCHkv76Hdh",
  "key30": "pumr6RBh52AiWCQs9RL3QBXaAqTJQYNYK63dPWtzx6PtFLcGA4wPwsUnBvKQVPRWy3N4Ah35BchV3Yz3DLFaqSN",
  "key31": "2iDkv8aK4UBGRfeH4r87Um1sZtRqYSDpjZvXfYi672HY4vqcv4dTj4LxCASGedCyfQadEv5ePgZ4TYDSiGNqXnGV",
  "key32": "2SAHcFmC1SJ1cTxgExSGN1Ab8UCMvEse8yBnBPrRvSZ2JRD529kwECWjnSr8keUkVyUmvdGW8NR5QZqkzgXP8DoS",
  "key33": "2Nx9DZXPsQWQfxgv23FJLD7B93CaPmmkwJWz7hVFDEvi44fkYBGGpKShB9Z3SNdMSAQQAVk1PNZusAjQ7J4QMyHG",
  "key34": "2QLBqmmPPS7HRKkUPvDBuw3M9ZBGc4Qqk7Z5HHybzMB1k11yF6GkudXWq8pKY3Pt9WRoHe5iBXfRHVLw5S9rQA4i",
  "key35": "4t4AeNwA5z2CUJnf7fF5QKUt9NhheDVTDtkoWE3f4SLjTGLhvHA4PMDnzYKJAqjbqL2vLJxopbCgHvxkuo683k2q",
  "key36": "1NnQ7gnnDsk92FmPjmYWMSkrEEsjvG4HLgiUYZL2UCnFyZho3ZjzSmkyKMbt7tLWQ1fi8mDeSsJbsTLk4YPQ9CC",
  "key37": "3hwB68qzQt3RmzLhQdUkCLuLf6fa9Shva1AKXHxJYfWw4mF3YhPmUWw4WBwFcEVCYq62vGnV562xBpkgTtjhpm15",
  "key38": "283veZNBg6dDJ2vW5LvmPxDj51LqDJNLJNDzb98rPdhERw4YuZJVyBZeELEDKV74kcvKtsJw7o17M1PqXWhJAPMw",
  "key39": "4nGP6e5AhzBvvp5rBATA4gEzUuVH8G8DdQkyTmgcWfVFySHrwAUL2CdU9VGR6ePQru4knLuyvjLSkqu88XnDPpmr",
  "key40": "QuH3SRkaTRw7sz2acJJJUayQJhsjB6PqPwDSWfafE48pJGpaaeCeBFGAqfQzfQubKLpppEDFSijoJeggTGFMb1C",
  "key41": "2qNJj4L93ymhHsmZUVmtR9Pd4BAGo1wagi3Uc9AnjbKjbG94kataMPxRMnfaaPqYmcFqsHiDXs2R5ZiBKrSK6ogc",
  "key42": "2BzuvjMJYAL6aofXcsrUBPgjvuGF2Db6Wd2Sb71oi5YSct9tzBCWafFfJ5v9En9CamgFzAUSEiFfa1mPNuVfveUi",
  "key43": "4gYGf8zmwe2U9gR3B9pqyoRPxSaWzjgRXfk2UdtjjkyC4GoSqJmiQaqti6w9HKTrdUKBN6iKDp8ufR42uUXTXS9g",
  "key44": "5d9px3toyfbmBkU8RVGifnagTorTXR61QoMWaNWKJCGrqa8f3GqVGWbu2PmvF3pbA7k31DxTGcgee5un2PBGy4ok",
  "key45": "4dhqiU3WdMfiwyC4MthFfJ6fozsn2zdp5poFZY3NBTskBxjNJDvhwwLM2i2WU1rdxVgpym9FM27et4EZydTpWAWC",
  "key46": "5UFxePUkimX9UjrX2AtZJRHi3fF64JV4jGRssvj25otpfdhzAQokC1g2JJzozPKff9vAwmsyrXcxNYjxFbAfq7tV",
  "key47": "5WqTuyMCawA4XivwTp8DPQuKBaqb9hhcnp8oonKe3yXgqk6evzsxPxhaYPCPuqDs8RX6ToKvNLN3BjLWWCTpQgFT"
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
