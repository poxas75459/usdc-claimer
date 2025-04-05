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
    "66Gbrx5XbSLpWhMAwVpRSKqALNRXUKd5AciqYG1GAKE7aUjrMCvxVVukkZqTGXGT6NKipFM5jm17PA74ghQtg8su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qoFf8eJrvMSvDoA469bWcdBxgwTkZSup7LYSneWx4cHmXAxXt9qx4odvwWq5qQCWfmd78JbTtRX8wpoiUkh3wFA",
  "key1": "3Go7rn8htdpt9Nr4mM6L4De2c8tirRN1eqQ4oAGa24wjGmHZLaeo5CxAiJqdXAzM6ek1sZF7WRc9yVWTNtPu4BSz",
  "key2": "bfieQ3onM8e9HPKJuGKLbeyUcrK5cmdyVGFCHukekAU3m7fdsQewtrgfRYrt9jmpo5L9prKe9ikEY8HxxBz1MRe",
  "key3": "AGgX8TgpGQp5UhbPJKkRG9MiW5CC2ENisRKuNDLWFGVaM5wvVKjfsC5wwYEto2KvVyWm2hh7EQ9L5fgKQWZmJbt",
  "key4": "61D1x6QrcRvA4EdUwC6DxmrjvrcvEn48xyQJm6C3qjW56dCBLGhA5nYefrLx7SiGAiXzdmhYTdyUTiCNDfm34nqi",
  "key5": "3yrJ4XxhEaGYjWAp1uN8FfRLE3gcHQSuBDjHdub7R1sw3XEg1ZiL4yhWXrauymizdxZM79pbkPwDWDYsyT9bDd3x",
  "key6": "34f6wqRt8xUWbYPPgGZLx1Y2xfRsNhLnLivncJ1AaEAxuh28vE7zrabVz6hRRhKC4V1GNoZLcDWzBrT16yibeDc7",
  "key7": "gepQ7LHrqxyH4NvDZeptPcfzXKERdNaDgGuYMNKFVM6yDrS1qdrkhjjDQdRESJ41txGKmMxWnrCqEcGeT4UnTGo",
  "key8": "2DSjZZE34xGy6Vj5BM7xEXL8Xvm79nnBsZhMCYNeDBXsiTyJ36sr7r5CvZY6ZHPumMmmPJyriRbtDcUGm64db7ZR",
  "key9": "27qAPLmWN3x9zWvFWxEL3yvo9qUZMGCJSvAUNaiziJVDhKbFq4yDQqJ1frmv6wTErtrA1gvza8888KDwqu3AxCkm",
  "key10": "64PptoJmKmbxmKW7686cxixy5Totdm5yGowsTbtP89tdTQGTnLHyTww2E8mtk9eQsdHMp7EMAULXgVRtWkC4faW6",
  "key11": "5STfpJ7uzUa1oASdupsrKwTbPq9KdFgVJwdq5vKerMpLY3ATmrkFYBtLSLos5nnHu3r3V3mSq6EHDcN6PsBpbGyi",
  "key12": "3BWab9dNTwKbYd33iivLK3tUoSTsCvtatjFoioiKet7xfsFACWzDdXDR4Vh4f3Ueer1K9ixM7y7WA4XaZ1ynDWEe",
  "key13": "3fSXtT934Y8PawVRe5eXPz2CJJHRUTwfSJRap5eZtSZNEVpinMJDNafTUTD3TvcF3V7aGZiZtLGmTzZ9WAEFPnNL",
  "key14": "2vayXPh6SYZzj9QnY6MtnHscJpYXMimESAQoYWq38SJJV9aNu6k8fVNqFmd4pNUtd6VGbBPV5y7q4UGnRV69RTNo",
  "key15": "3yvrh3P5CuFAmPRrNRGNaab7dxRvyhZtAXgJTiKVyJxQHWe5dgRxJ29tkkWp5j1LMBj3D4ba9uebJnwwmRZdmjkp",
  "key16": "3GaAaFD5HHCgLXysToWBDGTfWdp93XTamyTRKpdKZc7mZvrc8j5iXxryK7N7k2o6SdVR6XW4EGakedWuDScZwNSf",
  "key17": "MjAZEpPzToWTVD4p1Lo9bSRiwWDh1KR8dgwfC9QHZXfJSJ8pPdsQAbkeCpjpUQ4p31bGTuaD9SbsfC5goEJP1oB",
  "key18": "3NGf4SWCnBcE61vNK2ASTAfgYVfcZr6afU8Lv7LwwvSedw2aiQAnj9SFN8HZ2bRiEW2TBB4dYwbDsmeSmoVp8JB6",
  "key19": "3kLghANYG4k44HwrsmKk1JKGYdE4nT8UTQ9jg3HDAkSFcmfVFw7ZG2mW8MhtMpsRsj9qJsXQ24oPb9KKDzG27HzU",
  "key20": "4CWDPXEVoqcWaZJs458oNzKXoeZC4A5LDTbVMint1fwTNnddWoPYKQLhtxK83sB4W5uryrULQTrnJ6LyPds2BgnV",
  "key21": "2WJz53x12STVrbcvvFyNTRmoGfERy9Z7zcNSLXt8p8ChqityGKZgbBytHwpFdZ4t6dZ1LZFu8y2DTVkbktsU6ZHc",
  "key22": "2Ge481Lw8orfN87BkkYM91Uaq85BVvEZcNJYsG5zfhzN2nqKej8K5acwyS5XUbz8H8hSWhDAm5smJQqmd5sBa7Jd",
  "key23": "3zUKNhsatDrEu1mPaWGo2B5TmhwyVNJCySoQH2mydZVNCn1DDdfz9YpVw4U9HMheZRTYtM9q6TsD55Cwcg6sBB7Y",
  "key24": "2yQPE5oFVFGm4meh7PaBVSEjpon2hhVAznC8mt6C4HuBM8GXrUXvejxcrHGEFHRPZXeT9GPSCZzAhMDPXpETHfVe",
  "key25": "2Uef2YwGW9igfaP84bNxP8xitneQirvXBKu29kukwHmLthdTF68rHMcNFfQ7YBcfxzAsFDuabFA7kaRcZNQK2LPZ",
  "key26": "23gpbHTt3RHLCX1JvChTRsN85zbrmyxzhJfV36XQmjBYtGYV9C9BxvKvCx1189jtkQoXyMxXfPL6TD4q67tV3wNK",
  "key27": "5mwAF2nwaRqtKGu7DZFp5gzvydsqD6DbgQZM2Y3E8CAYboaCa61a3G4RZg2GHw7fF3wxx4sNjhuHmTrHBAXJGNhu",
  "key28": "5q2mJhM8JMf3rwSwqbJSBJaM9VwhxNUnCyGfSARDhnoVS4GFUMyhvDKmaAFinTgbz75VjrwbdHcQAZVcqE4xyX8",
  "key29": "r16wscqJLVdmNAD7tHpFLr4DM3aQUszgNBvoYjkkJABnnjtVdcX7BTQ35LQTR5SABkKKqSVTfDuafp8hLFzv6u2",
  "key30": "3dGgsPjteDui318rH85EvTnA1uM39mt2VrpQ2dWb7yyq1BmShogmGvaZGXdcayeVFCMrof9NJYMCBAbSsPt4DV63",
  "key31": "4j6GdeUzHZ5X6Wof6yJmyXccxF75mPuTco9DgCXzsqQsBH9AXmU7qwz1ED2xoe8yp1tBxnhu8zXu55BV6YnGrDyt",
  "key32": "4CG9uc4TnEwVbSUnkLRgpK3TsTxPFdmDNaTCSLoZn4qJGxLrdHB4uDMx69d7gkZSVdafxzhBQj2RcZdmtMyHhHXG",
  "key33": "4Mq1qpGBnep7MQ2YTFZExVeuSSbVRy4zCAsWeRrxXBsYtvCJ9AwebFPU2hYoW5QSkq6yEiszr7WkfLswoEGkeNGn",
  "key34": "4YfWNWnCkNWQg4Xn8RhSWKZfhzyQtju1SSy24WqXKM6hqnrEF6gKidwxkzuwhesVAXMjHVxCWhLRpBR4hk4MgTLm",
  "key35": "v4c3WFHGhxdk36ci1JZAP5MvYZ9t1tLg73xP2qB1u7y53cNi8udeFv36mUiLACMMrezBsvqcNcp6VWPyQdtmgr9",
  "key36": "5UZ5HjaBGRW8HmUpVg1P1j4E6BheUukzXQ45WynrHHJVCuWvQt3iZE6ELEjVRUjeH5TCjPfxgcCAVVJRHbCZsTBF",
  "key37": "5KhPqFBx8U1ERbRs1cqswewbfb1P5GWYNXuApmzMEwkzP44asR5wEUyGK1o4eujmnniTpRttUK4qvbrtQhTHtxSy",
  "key38": "3fkWHcqr2grf1BqNEPV7HSAZUiKHT5rdhi9jXZa9HPr7A48AEa6ZxTGVhCqQCpi1HuXh7UoTuVgkTNbjEVhap7Pi",
  "key39": "3zHbdHCmiMzh8WxvHxsqqgP8yfhgHaXFSjeBdqvHjH6EmAnpFhj9sMrrWPTUVJA8bczAuzD9wDi7ZoaRF7jynR1D",
  "key40": "4SSk8r57CZZWukQbjVyfoU2o6XB8DHQky4sbhyZ7YdDhnRi2oRtntSH3pg78Q5RCesgqWYhzh1uUuiTrsHxTDXRF",
  "key41": "42D7zTBNrNtFdJqVv2CKQ7Lmysv1QHuarHpiZy2Z4yC5C3GKoEj4X76sYNN3ktU83e696tHjurio4bvBJQ9tB2zy",
  "key42": "xXdgGwnUtxRbzWQjoMB44LBYS7cxw71jpvoZ5XSWo4DNEHd95UqFSJ6m8ZhxeHyQ8vjTmzi7kFydgfSSrbyCWmE",
  "key43": "63RSmh8PegTADPahca4xg8ctMX7yigvLwk6DupDF35W6PNf5Dy2CfQRw6FQVDXLqixjqS6x3hxAVRe8EhcqE39Rc",
  "key44": "3tYKsQ2LHUUGD593cVXyax2nWNJSvsyCRgX6awZZrVA78EQ37mSKrMPizpSWMhvRgvUvpiN1DsusJz2jN5XCDyz3",
  "key45": "5JHiGuMCrNkC9UaonS4pRYh9G5qv7ipJFoPTM8ucH4FhssMvUxy3oe132XxpkBsxxEnBYKBD5keEPUiX2VnFNAKQ",
  "key46": "5UKU9Z6PSAJj3aHD8EWP8tPVprrwahQCSutNMpBr2cqJ8kBSRVhRWxmd5QYox52yWEE9dQ9nNZ317NhweZUoo3yn",
  "key47": "565v8pweMadPjR5TVqDyYbkJMoSbTR3kD3T82UCL8MSTEHKQXxqDerBZNuzLNypnBwvQ4ruMhfE6sdDcPNmWpFqq",
  "key48": "5xWXnUwMmQjHnNog5zuz8YHyZn9TtSS1m59xfKZs9YV4hh6LdWW1a2rzr2JaR3skus5Z1gpMYZ82kPBUHmjWbZxo"
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
