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
    "2n1hqi7zxAYHXejVp2tzLLdu5Wp6Shgp5GSGUqX9QDAyZtyMBQJG5ixFQZ3wLoTLEQV1gCLDmce5vEEoVcUvENsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JfcYQktez15F24XZGrvQe2U9tsZ1Xct99aeWZTyg4M8ddMnkuDnaoYVavMFJ6qTFPsXaKK4Fex2ckJ6az931yaP",
  "key1": "2V9hcqJ91jsHUMyj2qZEJxVxeeEano4BaJuuDrWWM8Vr4CCaSSxtPC9wHFFNW6ChCyPrkocxqd45PjWh4AYktNXd",
  "key2": "2nXE1Mix9RGD29ufNrxBZkzLjYwzWuqnqUkxwpQrDybhBmE2dBSkNTp6jX8jroRUDxv4bq9v26jSbuMWTCTQWtWT",
  "key3": "4UBcRjdwLoqw5VzWbVQd3JHowX2APDjsXa1Zs1yVCWrEovtxhQzXiyhPtnyynLx2tk8MVrKC8uCYMHf3X6AEg64V",
  "key4": "31YTMhxjS1dVdJuJfxsHtn5wK6kLwjEVYza35RcvYKt9hkG4YVUNWgxFwjJq1ZLPi1LUujD5inb6VR9TuXyzRkF7",
  "key5": "2NU4R7wPN6VBva7ELazVREkmuY1jSvR71ikrpGiic4fjy9QV7bbfD8vRzPgd6MB1iDTZjKw3ojZJea379oS7trpy",
  "key6": "NkE6DMAFeEEQt1GAXYSDVgHGXXkModVG2k1ENX7RqpbSwHZdArgaUTJbqkXdSREioxEBEXvz7WqjrcnWaJmMrrA",
  "key7": "2tGgXaGeHCtkVgRxG4tp4jZfY46mupXEmXrC9jMrAwLPjJJr6rTEz8XWJAdvrbJxpFNNenRE5uLYDfbf6iJ2jL1h",
  "key8": "5zsFy2osyrLh5o52WDdo7tktKWyUQCFDFk2CtzcnBqXbe1e7VHRnMwGVnoNo13AW4vuNso8VDn1cu3NTUEWjj7s",
  "key9": "5uGh98Y2MaFdTxfNeUBUdF4DmdZCFWqj79BgH3SjnQzCHXKVhfyMqCDini2MzcRRuUoxeL3LnciKFhehcUE86Dk8",
  "key10": "59kmDjCZWMBhwwLj9jbbdEE2MSnnavvngjtbokXFMXSjMtNXMLrkLToWzsuaFgdJhDJH1LXTym6h5tSdBHummEWX",
  "key11": "XpWGe3uYXfpHMAcsKz5FQ4gRfeDboiiqPYvhLfPEX7jxJ5yQZG5x64fjvXaHpsS5XxE5ww9T3CixzAC8AoqJSTR",
  "key12": "57q7gZxENFfJCtbHbE14nB5rT57AFSaVB44UAy3s1NvyQi2yPKkfsKM25KxXXGV6xJYQGmueRFtb5ztEXMcrtbA5",
  "key13": "3sMoArJ3PdpguL7foAa78K4GqgWTG9ca4wiLYtUwvcYHhEz7LrR5Vrh8ntg5kvurhPYpXVxGorD87krUXSDjd8fW",
  "key14": "52ioLsi7ir8vGEEtuAfhhHfGereF3PBhyMucDg7dyFAbsggSWkYsehLFJ9TJksGR2tJjX2PG2jcVzGiGL97Qpy8N",
  "key15": "2oBkffPX5s75G5fMrdTfXLMUcWz5swzVruKLa13kNHvEJmUkTMUe3Y3q5YN9kY1v1tVZUpUZFqbXQqApN7YJ5Lgf",
  "key16": "39GuAHuSysGfUF3GEx7wFWG49XhX3KxPJRp3sHBn5yYoLZDkDXWtomCqWVvndDUS3aYVJPrURKgY7F1rq9ot9YPQ",
  "key17": "2H93XhC9xirH1BjQ3pGV18C6tti8UALGB3Qhfh1AyVhtP1ZyhHYVaW7hkvvBnxfQqgfH31kvPjADTYEWiugCoGoC",
  "key18": "64hPnovXeCQj3bWiD4XhrTrherrDwRGWYpB7LWzKXdZNbvHJpVbS3VsRBYf96fX8MRKMQt9YSHYvHJD3HWJ6eBfG",
  "key19": "2yj323ZSAdWvBuh1SFQiakWG4WWe8UnRxrcMr7LgNmCdTrJzPFmAMzMzZVy48yJXxfPHsZQGBKx6qRzkbewfDp42",
  "key20": "2Ljcn3z64BWEYvkGFVJyogxH9piBxS5Hd9ZcHMxLdKFhDqjkZi9QAPgDQr3oUYCdTnFWaPULqZPhseSCsq6QycKC",
  "key21": "41fu2shjV5M1axuqeZk8oYYUC9dViDtMWEeve76TecwuNgTSFo2StNVMDi6vuJXDnhrbrWkwDGJXmqyahax2LpQ2",
  "key22": "4TPdNsLy5UXSjLBWbLctJYJm8gsTvJcbzZXRe6DHBU3MFo1naGxBaaJyCZg6XV7bikxDyR34UuEY4TcoTxqUYSwE",
  "key23": "5QaCSG9Ng7eEMJmNcxnLcXTNsmmSJE7gvG9Z1ZSMVqzCgUpZXFjSyg7jXR6wAhJQki9rzLMeAR4eqZcgTcVnEePD",
  "key24": "5JsVCCrBfeaQg41CkDLcbo3WwUX6SrPysatjezKzsd2ZWZKFhpNmVuK15Qkm61BgD4S9wTfhhAQHC55tTwsvrUvi",
  "key25": "5BiCURBgW1E4y8WKs3ribswoz5m9jqn1gbKRgPJLvz6X8MUJeX2Qany5R3XU7ycQTugjpHvxDjXuQrHEDVTvZKDV",
  "key26": "4dzozNxwPDV55yqcGExC2ebYxJfU48M4PUtJ7HYiGceqD9KVZFT44mJTV2Y7BzAXVvUoEZVMUsZhsZpLxcLd7ESF",
  "key27": "23KX3AKmNG5kSxqSs3WPggYEBPypcjAqXtCv5pU761JW2JRSH8QfHu7R7ytK9r7XgynETKbTQgmtgQtufLvrJPwv",
  "key28": "5BtGP59ZNGHwh7qLVAfNcqSkF5XirZZxVhq7so6SUpDHDw1PA9cZXwe2vpx2CrCwFAuAQkPBLzG6uZDRLaY6ZmQE",
  "key29": "2cfbz5efzK4AE4bf1kKZiHnhnz9GMo4MvgJ8gE48cNZjaVJdxifSLXy1zRuD7YRZJVAZeAKtKkJvevNMCyaLP8Va",
  "key30": "4dcfDuRpdHzCrz58mQuQsgvMMFoLkqUJVzW3Hkjxv2ExuUw2WhCGjNLSNrgk1FR64LWeMjetVAh2PeWTGQPcQyQX",
  "key31": "3w7kpaMSMwZeCm9o4Vp46bMocsv9evDsRmyUtNPxifq1QVKJc6sN2GiiKEXLT3bGqMriskf7K1ySZ3Vontm5GQYg",
  "key32": "4DPpCTmaBSrxy3r1tkoQWtM5h2iF1zBjZmCzcdTHzMTB7C5bae9M9oTEedbD16JCrkAnw8cZoQybfvvcSLCLpwdo",
  "key33": "Uk5TGLqP4oS2dirqo4xqJxHBrHCyXwaAmyAXoJmbUuNWsBcZikqtv2j59thMrChZmG1er2KGDLrPKthpvWCDrvE",
  "key34": "5JArBdeVkCShQ52TGxCQx4JBTaA5eKMzJ77HwbzBsLBYL6zbM6PRAmabPQWCPQjfWmuyBWA7euAhNpso2noZhksC",
  "key35": "2N9XY6XsnNMa2qhzbsgafaB34NAZGLfeJfP52CeP5rbNJJU4CiQxH4A5j1iLw9fHme3wJ2oid31VU2WrkxS588PD"
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
