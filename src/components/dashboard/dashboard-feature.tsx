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
    "4GDxVBHfWr4damHAsAE9JF6SdDo3nA1SKqQMHQoqVAwZoL3dXVHvwseevjpPRAT68oZg9pLjDFhu4EsQFf5DpfxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z8ZByw7K8UXURveNQttHj3hQtQEhjvMZCtXCbUvE34JgU1KazUdSxeK1jLsDzBiV3BhuYnJ16kkVargTFoa4P2o",
  "key1": "2kg87uSafDj4a7wu9PHiWWUw7FYtisnCozMzqxWSCDz3t6a857j5KQXA9ntttDbZv8GShMmzkW7r4xTQCqgf9W2G",
  "key2": "2o9HyBGaUWrP892Z1UHREubDDfA6pptioFrWeyYWZZdME9CrQVWFH3t8DsKw8sK7vp3JDsyAEL6QEL2JyBAF7aQz",
  "key3": "3huPQj3CUMxKAbm8b3KLQekZ3wFfju2aSyeLX9gaUkjkgKqBhky3U4g4XQKFcAvm2U7KtgitAgEMDVm2ZvxuE6bv",
  "key4": "2twzZ6JijB5WQ4gwwEMPwRjwzDWVYe4HSGiR5QvMRSsbkdHFgBcSG5iPx6haCpHF6zkrvjr8YhT49nSvF6eAScSF",
  "key5": "RFwgwfbRGiHArTFLQtYnkqtKzPkQg4SiQaQPBEse6PxRmv4iesMfEWUxY5CgPaUd1objYZBXJWGFuCkdqPfEbN2",
  "key6": "2L3uo679Umf182dntEUAPT9bDQeyMfdwby7wWytiKFDZL3xomcJ5GHHKJj4npV4WhaXCVsLDWco71n1jm9ZSjFnN",
  "key7": "wWRPjTWwSqNX2LVwsVJ3YFqzxU6KKWXWvnPqcVaKex5xupwAn8Rr8EMy23fuMXSPNnishgC2ADAbnG53y3nvpey",
  "key8": "NkjC7FGfcJvGz4Z1o9D1eka3vyQY73LXN15LGkqaMgghVxKZuN7HYGwjLBCzHo2wyj9XQ2LJ4Eef75nTDA3nAkn",
  "key9": "5M5Mqa7ESvYPa3dTUyWCWZvaVPkuEut5ha6f1RtJGtgAJXGVcuWcx5DkEZLEvbN65igiNx9tP634GQGyJAtu3mA6",
  "key10": "3rcPTrKTsrfUoMVrrzEfWd3BkJeQrARTGsTHZiwtXGWWkUNxw46fN7eSuCodZbHq3Sz1jrq2D84cdQr1B5oZ2rZz",
  "key11": "4ATZi4U49ovHjA3HXtCeRHrVMMWjefpmqK7qPMoRMCUjtsiL2Evbwy3EBgSgPFFM5SckqVaxn33vdBTKQhSjqN4r",
  "key12": "aWfNXYcGkw2YDHgvLLY1d5ayHZTSdboBW2dJb8vReeStx4U6EDkW9HvRrNLF1sXAFhUP7WZY29KDjGZkEVocabn",
  "key13": "54vz12hZnZ9WjK28jVqN1vAtYJRxDDWMaMuk3mcHrRRV3qriE4SNi4VGkaHm7Mg9rLpoCwnSaGa9XutfVKqgne7U",
  "key14": "4jajtud681fQ8iYwhXo8KWAVFNPRYoEVLuPxocjfjxwyAuhwQ2K8JoV1isAK1N2URtAefN6m6y491GRVtQkbMC91",
  "key15": "3o5TtRssvbzgu9AHWYqh4zbNJqPYGVpSRex7BhjZjxNGQadB1LuoCjUPfauHG8TvBs97127GdE8q8KDw2EVRZqEx",
  "key16": "3n57H3Ady4YzaKbwHs7H81KekENTBeEhfx7f33XrLpDwNTaSYxuS3XG9qQTQpb7LKZyxWSimhP4ZCBsPXeyiD4tt",
  "key17": "5iv7Vnndeg3cPoZTf8X8SCSP1SWz5krZF3qEmwitWJv3o32tvumgJafmsY3rQzFK3SSk8CF1fFumi3geRhpydfAP",
  "key18": "5ENBYVPgUGxv35iLm16mDc9Gm92rP4LtyXbqMhmJXPSajwRqD4qtKF7Ud8SE7e5yV74H3zJYsexCGswMZ5PmE9xC",
  "key19": "5gXWyoTS9wz3CfJFSbhYJGCTPyYHwJAPg7o79qM4skQ2Fb7TRkTsRAVMKkPRNFgufGURhguHqAt67ifCXnohqPFR",
  "key20": "3PnAsHJs8cH6Jjac4Ah2LHZJhveSfRMhegS6PZvro6MeFiLY6oQPcNNmKy1y4GtuNu8pxQoWgNBkjWqyiZ3ED4E5",
  "key21": "4jMU5r6JdHyKBUTYouvjmJbW4bbePceroBhWpSjGrFRhSn2m1NtzFvZjhaNVo6RHWxZyXJhwbShsCmCT1HYzmW5F",
  "key22": "4UasLZ3Nb5sxKcM7MRofUq2Gbu3cfiFJppfUfsQ53o7p9ZssYiPmA6fK7aFoEMnXw8Z5coBMp8sYBetFCgiJqFGE",
  "key23": "4hU7znydjc7nRYU4Lkod2NyxGYznLY8rtsPuMv6N8LZrnkJbfqwthWV4yYTCrDg4RJcYmq4dHfbHj16YttQx4Vzk",
  "key24": "4NemhM1PWmX5vFGcu6n7twgBCA8kp3rTPJ9jLuuGoQq17w2uZxPNSWaEdk2YBwXBAyy6Ki65xYTKNbPChNpCBGgp",
  "key25": "5iEvVFoEj7d98xXExBxbu6emo9geYen4HDmz3T7beDWwXGt52JjF7MczBrfbx5NfDUsRnMRZXY3P6FnYVsdiX5FR",
  "key26": "RVArmbNW6KtPGTn9oYjPMh4sSWEfkQRgs9wWGy7MEX6Kiu7J9BYaGcmLrqMa1zAtQaEVwvkRfyg6SRSui2FPkwu",
  "key27": "ShyyBgGvT2N47Dhc1KwuYEDqHe51QSkN5dUgPuTx9bJH3e19HN47DEiNCCsUMTBhZyqWqog1TNFHjiSm2mcEwCV",
  "key28": "3wzUBLsQafNYtfZ48Zc1uWkkg35U5PnatHCmQ3K9VERHEXPPJB5gst7yQomR7v7W1sHtGQJbHZstTKbgMLUB5387",
  "key29": "4FTFAzpirDoip1Fwn3BDja4HYDcSCBFdUuVZoY8YSq1myVc1ghLoXkdD5zBiUW8CUCJrza1EeA33ymkHE39zQzyN",
  "key30": "24eksLyTSMkMQLkJisVv5ta9eLBFtsyS8Ushq7r75cDcD5X6NQws4rNYYhTzRUh7BdCX8v2BWqsEVHXehUVdF2Me",
  "key31": "2cf5qfMyWYiV7ousvg4ntUr7Dp8P3XLnuQ5hYdzqrVuK87WKyaTR34Fk35N2kZaaV9qEymMLu4AEk3kTxvSmegad",
  "key32": "4dLGv5cTxJoehvgSnjbYt5wtFNhARKvrhuUB4D22a9utJiwyM8xa1Y8xwQ9UkFiTRbBmrjHEKLVbpzrLqNtLNWuE",
  "key33": "4WtBchLHUpMDurwZLavBQ7TnmKdQaaV2Q5JnJ6TAjUZGZdhAM8mmKhKrLhqGKMjGznYcVP2AEi2QsLAp28SkXiyb",
  "key34": "63dDcoXZ3dfvu392fRUQAhzs3tHG6V2MjTCQ2HbVF1RCeA3EBnktXuck5wRrZrLrpDJR95VFWFd9bCLe2QFoYctv",
  "key35": "3dSTqHe6TjpjRUdRXgq8G6DppQXrUaUrdms9yiucMJGvy3YGaPUnotuPM4y29rcJg8WwrgCqT9YpTCBwT7Rjr9iV",
  "key36": "3VAPy1tSUYJbx2TGXZJhLqG1eGZjdV6UfwKqc7MHD5vKgRvYDxMHSNw2HM7uscgFf4JhTW2JmnL3G2DGKq7H6vKw",
  "key37": "4RxsesXrUEvHgFmYTxkjSBhF7q7ibuEeSH1d6semNjwB4hM9vMX8eN11uPWRo2dVyeqA86ct84CRoXzqG4hPnjGF",
  "key38": "3fx5TNYv7sQzwr5bmipz2k33PZNEKu6qE2ZS1DqtYTgVYUw7Kr7YE1MkgmfTU1ouzLc2r7t3K7YLony2JkSgdNsz",
  "key39": "4SYgXbN55BvSaaveaEQaUiS7HSgaeGD2HJo4Tz8wetwqAQr3iNF8msyo79AYVk7XECtoNT9EvZEmwHpSrz7jz5NC",
  "key40": "2sxoJ1vQZNusFYcUiMUGXRk8ix1bVshmB1Q4AEAZqhnqLW7P5DkRZBEtCMV6J27qYdkHwXF8S1nQYQiHMSbZoC9c"
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
