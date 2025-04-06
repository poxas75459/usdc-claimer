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
    "2f2sbSQ1nx5ALjfeLzQxLWHvcYUrJRw8isWmEbrHL3sDb3kGoQowqC7etCFB5p9rBrFEMvw72yqUYX9GE7Kb3djr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYVzVvinJZzGht9cmvoV9eYSBSkf8aLskpiRUw4tdnpHhPv5zDPwe9Hfr1ZPvjBsvFWHS7uLRgiUmpzS4zFUhc5",
  "key1": "4deSU9pa9qoGasb8uMnZGWy9uiF1HFkxiL7YM6XohmQuFjTNNoxTxBTWNU7W4rabLfkRDsEzdjLAhULkHaWAb7BU",
  "key2": "3HmG7BfFA3zyypTQ4yHCsqtgzMjuFoGZgRGeXgRVQuMp36KGWxjgLRpyR53qTMVzpMVhthGdFAbqSXrj4tiSyHqR",
  "key3": "1STRuAnLpLNWPsNZ14rfKQvcfKSjUvRCaQ3ggw6gaEdZoRsLJqCje5TqoUGADHh7AdXmFfUqTmLU3h2anM2ujCW",
  "key4": "59e7NSKf3yHd86q1HMxQoELPtvDQS1mPiqN4uaFCC24Z5EciefbvpqedEnKQ3Q9YkPgbr5ZrqHB9huKLbznTD6UP",
  "key5": "2A6trjXSj9cceJtshTyKKQ8csjaqZzxETWRquQhHSNxEsLiwoTDokncz6h9uDPy6FehZr32KT3pF2BzNG4tvdPcE",
  "key6": "4rnQceftW1i496ovJK4FRGTTCmqhS9n9M1uKuuASHSyMoWpsEVaSKK1RMnceUBVVTe8vpFg3hg7kyC2gq8H4MUm7",
  "key7": "5itd1YNtPnFT9mBPCQMDfSvaSfmfVp6z5TqhWo4s3EvPBRiTAV9m3Ag2hGVxv1VZUcqoeqcYSP6S4Deenv9mdLjp",
  "key8": "2q5qpTsb5bsyqv8ZCFkJtfK4CFYNJ7AqsMTRM8GiTs2Hnnz4gCFp4aSmfkvXUYKpYzbsdpKdtJWoHJ7EDAB7bp4M",
  "key9": "29vi5aSodAM8KZA8teaiKx3T7LKeB7NgQoqzbd8U59zMQHwS6L3YuhZKUsbVNVoUbNBRjRTJcpeNwRX5WdZnBwJb",
  "key10": "H4an4kDcTy3x3xsffz1Tg2j9MJm2bJM1RAgXrzcg2odtQQvaWhoT12op7CVBxN8FxbftFjifvpj2ZfhdsUrxAWo",
  "key11": "JmiR5fYZWPRaXkupEUjYTH8SRPYyX4AfNLSxMdxhvd4LXFXpYKpo9AshpoZ8VcnKR5Zc4D8TzcRPBed8cnHgU2q",
  "key12": "5PmMpwRCPqTzvpV36N1yQdMG8zf6fV972mFVeVHEJCzuk3BvjqWshmYXF6jdKw3vQxosduwUxiYfwXWtovwrhHsc",
  "key13": "4BsHs7DP4ExP36g2zhai3KJWf8RMJa3zp6gEfjWNUrB7Btt8NUtMDKe1VxCY5YYMHbU1GJrNEGU9VdP858yTMdEr",
  "key14": "4efNwsCNWoXad2XeL92rZz8tQm9SJDFKuh4fd89DRcLuRhqnp741hEkCpySwxseVkArehupbsPQbyxJu2hyi7GFv",
  "key15": "2DxNe2fBQKtqqZZBshJZsRqmv92TinuUHoQWhwhjqd7KQkkPS3S1H9ssxSeyk8aAUmQEaeiUPfX19Sa8fGyJvK9A",
  "key16": "FZp4YK5eRSp32dbUckFkYqt9MdHL2whj7jCBMQ4CfphFoHoR898Y4ympsfDN8BPAw54kcNiqDJ4W4wAHontfXSq",
  "key17": "2nkgaa8LgvHnbcm5pKGWi3zgtskiDFG8sWod78ZmHvCP9ViRQhiVHJ9wViZzqeeFmcXgdCqnMJqr5YYqYXnnfcBr",
  "key18": "NJqnV8wsxiLWTnK2oxZAe5dUJUDVNP4BAg3G1irhDpQa27LEAHA9ve2QhZkFuJ9y8BAmF3JYptJ6grnosfdM9nu",
  "key19": "5UJtKhFYJiKKQLC9eEnaZiYqR4Vsy7BCg6ScKmC4VasMaU3vgstrvFNC8Kz1gfCr6g693Y3MKQALH1eViyyb2gFV",
  "key20": "3CheibzksJMyQqGcCLTjiKgAsVYTQoeqUpTNvsCzYZi4NFy2c8nFYN8atNPUVHCqZa8jYQs7txFtHNAWWf3qty8o",
  "key21": "3jddhigk72t6wBgTH6Kpb5dvRTvgcRa2EF2KCJXM94ktK6VGkbwPfN7K2uLNkg9mSs95XCnYruuCWiJr1MXbEPUg",
  "key22": "43CkG3pizLmuM26pre1T8XTBfZMna9sYdLcg6ZXjL3JETsftUBq4HWkW9fe2moQafo8RLb44oub5EJeBce18duo7",
  "key23": "5K5CLuwhdMd94afvVKGN5StLn9u6Qwt63tPwW9MLCiXvq8vun9r2W64xvihD35jPM71zGjcKRVAXCdHb3hUmtcTz",
  "key24": "4dhDvzMc2ELCqW2P49Ch6qEiHAgJjEoor7YQ7BFtunerTE9PT2xSiPR57JFx64KWkSDMfJGai5XcbELG7J2xkN3g",
  "key25": "snMMAsUvefHywrfZeJDLNnfjrisaJWYD97nAiA7F5xmaGbNhTyTZihErN9d6GCVUzUPCA8r3KSL92q96Y7Ep3Zu",
  "key26": "4uAxtvnLnpobRG3U4GKMDBBjWbWr2GhjnV9sQpKpcvFVZdKUPdiPb73MHDfQwYgdFYQZw6hxNQswpjdKm7rpfEYv",
  "key27": "2nEcfJF17Z73uW3UuAshX9FcuBBpuC7xZozNaNi721qwDuhL11eDUS93dnTJ4SHMXsGRddPywJyHXWGuUV531Rb",
  "key28": "B7jYiUPzar1AXLne7pKcDN8cBq9LyMoCfRHcPazfzwGSLvwm4bepKnAwh2TmkcdRgjb31GxxYrUvQAs3idQsVi8",
  "key29": "2if6CoTrxnbBUXQHE6kbVuX1TFVosZMRxojHK3xm1HaR5L6zDhigMicrykrAZ6vJ1JWAQzRK2keALZ8mDiSDerSP",
  "key30": "vNi6b7gmbvaYShSYJYpNXyEDFN9CXByTcz1h6qmmsFhb3w86xwAxqWfEUz9ZwfijDpsJrEVE4GhtrD6J9BdCnPd",
  "key31": "3tEqkrcQ6R7tmSC4ToTTUWsi6cfZNtzVpTN3KSP6HkFoRUbZ67WoiAcp8xhYb5ZjCC4D9TTqWhgg6xx5qQjoTFqK",
  "key32": "xMke8GWzqizt5Fme7AyvtwWNnnb4cbDfcrsLqyWfVckMtBmXcMF9LH59hsEDqGqiWzWysGH5kfBZWm16vJ5Gpqg",
  "key33": "4bqBfE71SnfcdDB8Zoyjf6fbRWPnTv8Nwinj14bJUJSuecz1deatpJhJtF9tbT3smijizVxzE8HwwvAUJn1A31ur",
  "key34": "64fP92TF7ioh16KtQS7E3eACHb4BKmbW7grSQ3skgVCLGcjRzWijwMAVA6oNP2x8Noko9B8iXmU5PiXcMEgwjFsP",
  "key35": "pYNzDBq3R7FfgGaYQfWbKPZ6kJhPwtYDsDyediDqVA4NZ7U1tfZRyYr9C3SVxxr1LZ5nVBKt8E1EKTWCnLhZ3os",
  "key36": "25JjAQxTYornxZkm5AhkX8Duqx5YeBmNXHRjwaSYY7dkLVjwj5fwtNRH2kxebtNbBk2wvK5QhAhNAoSBaBbRTdLk",
  "key37": "4GtmmkzFgp3v78XGDWwbRLSV9mRg4crGJssTUvEUAEjPanhBmnC7K46ne84Ktzj4RZne9Gd9geLekBAcdTAT4s3T",
  "key38": "49KQtg6sqxMu9rKCz9Ux3tbKF568nqzcZfZNTgVU8Z3iuKApzfkQniNQRAibEmue4RW8GAhLQ94WPgVyDdV3rsY3",
  "key39": "5wAXiqnbstB8BBDWqjV9LpMCsgqQqWMBD8xt2PaDk3z1dHz2UJfja9rMw2SoSARkU7VfZs7xXjLeofbKHHQQmFmi",
  "key40": "wZvUug6WSoATtKezBA6SfdaWNhzzTAAe451BWVQv7Rcz92EhFsuxtoEzMKYGe6RisMH1E8Jad1dkSv2Xgw2vxvz",
  "key41": "5YEtZG6BSDiefXjVsvDqesmekF1Fc2fjf4ypx3bARLo8WpTLZbd8TWy6zvZfR5ECtrzERrxxxx9JnzsGN6D44Hi3",
  "key42": "2NAsAMMJp88dVpTuMq7F1MdRUMhznewUa2nTWDuqYZ8PvM32WGfnFDUPtfQ6YwUHWAcnJBDBi6nK4GrUbc9YtmT4",
  "key43": "2nAoDZt9tmkE4jLLxvfh2DvyiffbRTZ7vJFPuyYx4kT3kwTmtdUSS72UeZoCiuoLrRKeU81beymsabp4sWP4Xwo6",
  "key44": "663LXavcdst4cBarPLQJzDH7xm835RUY7HMjPapLemhvDCNtcPkmhBvgDgsMqjecCD9bH245avMSkBojAR5TgQ2U"
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
