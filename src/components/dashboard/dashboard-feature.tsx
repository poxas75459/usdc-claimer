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
    "3JEiZjKZMpsVfQNgYi7FVDdrAGaWQG7yC4vcqHbKaZRCBKEKgjAFk1fUayBtfFcsh6JNEWvbFB64VB7D9cX8A9xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycUKrWDC68Noc8uYQJgUiFK92Bi5j1477aoGKXamWEsB7wwKd5JRdEf9R7L38hTQxKFGTiSdLuPhdDtJrcQEku6",
  "key1": "65Y3J1NAwQ4HPjiyiHXWCVDdYCcyPn6qCaugXGxv1tVwQLWFeeyvWSMeFSCvSKPHUf1EKxQJu464aVa33tbkdpPV",
  "key2": "3BYW5cqaC4z5qmpsm1dUfXjWkrM1j9NvYax3VfFzPGbBiVJY1YGeVtNwtBDNduwPBAEbGjFYF5L37n5TSoHVR3fa",
  "key3": "3g754yMaKuSjPC53kKqMAnnPjzR6EUck9yW6yz9hoE6Mg1aavvuz97TmjcmCnzRu5oaaVvp4ou7zYd5p9B3Gv2a2",
  "key4": "2FMezmRecPRYt2WcZwq3iWi4N4D6FACBURMt56SU4SKdrLP3HT2WreheLkAME8vrUjkgNDUYwS7U8nL9qpenx5Xo",
  "key5": "QgqvfoZnw5Yw8QBegiqXUcHCopPwYXngtr1zksNrPWZ2oX1og2aF98UD84MBnPpnWAVJcoDfFDsrgjLEq4btdJT",
  "key6": "r3tZ25NbAp3jeoyVjwQUQtEPXC5qrbD5RHqXXFGEPC1TU9dHg56LiufmQc5z7gbxbkThyK1pXqP41UUruw1PrWf",
  "key7": "38aoUffQLik9728n77Q3dnHQJkLRHqdryh36ciLBVSEQ3dP9A5yL2UbizqMrEz6jFsxVpj4UEUpLuXoDt67Csiih",
  "key8": "2nWV5fwfTkbPt1ymHfPyAiHrFU9wN1Zqn9vwsA4UXF66fAmgMtRzz4JUJtGpJKEMzdxNZa1JnGgF1TkVj9SRfanv",
  "key9": "4jymMY5yPCHZRfGpgiz7EZqXgp4gWfFTNGzccoMH3R3HMnTPJzwGoiuNQFoe8ysPfWcDDGChAtGyxa6B8hLDfJEN",
  "key10": "wHamtJoAeyw7AVpmRkSxaJ9KHmmL1PX7QFyTkj9P69fFL8ftehfiY8VwqkpiAG7sMZ7AHgn3SVkbwXUJDwBepgp",
  "key11": "44F7NSkpLeVaPP4tHiToH2MnCweeuyrFoWpVk7DwfVZ3rgwc5TAV5TCjyfPE1b5uX5hGWLLsR5z1YYmu3N2B7tVw",
  "key12": "5eGKi1BarpKzW7dGViL3gkvyNbkyokaXxCEj2o283pjU55sFt6kdn6WttHUQ8f9n6h5gycegyu8knVSzJwektcPS",
  "key13": "3t1Cf3H1tS12N5eEibrqAsB9x4rceqJUs4WSJEGAXzhUWCQLZMrZhgTrs7eHH3LipCm2KDmDAKHY6HKLTBQKpKnD",
  "key14": "4Q9UrsdYja3fJuffrgkJVpYoDq9UTV8QTjWtqmWVUfBExUwRxYidQXz6APfkrnMJkGaxBNum4KFch8NmtCyR4UVE",
  "key15": "5ZhMJ1G5Sqm5gpGeiqu25oyrGYsXbzhxSs1qnckfGHL4kFP3r5b6GK3YHTKoJNKssSuKwhu5ZEG6sbDXYr8eyjMn",
  "key16": "5h12UGfP5ZcvhRwViDcHEAJDma48hGnesQTz6tMt7YUPRJDzU7q7zJvAnTrFZUcDt24Hj4FprVtEjrqcByGUZWbX",
  "key17": "4ZRCaFosNAJvw6b52TmuHDmScH2tk3J42fPpv6iKREKL6xpLhkGS3KoN1tJCBCMkVePsRP2XeJVcKpCJRr3dbZen",
  "key18": "33K7AUpUQsSbZuTtHjQvybUa8oXN8p6WQU1B8u8odZUhg4UihrWydB965By5DwBP9etCTCEoNFWZnyJB7XU2p568",
  "key19": "3NRo741BgXK3BwNYziQngmNmFSHQgywQ9ZwBywWH5zQkund6mdZectQGLdefj3dvfodJoVRQpKADrL5acFp9VsrQ",
  "key20": "2dUL9Si9d8xWnSHbaAzUBm8bFbDVXNmJTsR4RaKd7PVCeiFJLr2oJEYopaHUzss6CTn152AmmNdHob4hKFHYifyL",
  "key21": "3tYLD6dEWMVkvuU2bC6A6AKPAVM2jA681p4wqfQxVS8Sr5aBfKjVHjoWPsLjFL1eGX4ttAbbjm1CHhikDnuqp4ey",
  "key22": "2pjpYzDZRfu3W4szLF3zy4kBGukmHkGou3nC7gRgBfuyAM1HCRy6zxLS7TSQrNRspPH9NmPFwkRooH3KSxdhvP2u",
  "key23": "4LrcdoqWehV3TczJwG7nb86ArLvzZph13eS93RoWzjQ2zv6dEPtUD1YZjfyhzgFqkqYrCmjfdYD1XEDznc5ivXkY",
  "key24": "5yRDQpZbfp6tLM9QqNYGzfi66k8Td8Uy3JPj2FxwieKc5Ewz7oKBsSX7K5quE2viToEdrLaCVKKCQW1vxo2UZE4f",
  "key25": "272vYWzrCdyGJQnVycXJczu2mg7YiYVQyEqLq8dxQ1bzzE3ibXpb26yhEN1spGX2Xumi6FHdQT5thMHPNTmDQFNR",
  "key26": "468fQ89Yjm6QQK5vmExsfYdDxGY63YKZKvmUaWVMd8fyD7VXw3PJyDm5XYfvDELy1BJHBhRupjFE6JLMrbJXHb3V",
  "key27": "4p8yMFqwm3b6BgLZZQ5gyG3hrjPQxVJU8dwqTAat2nZSgY9ugm5UCANYwkHUqm2m39w6CFjGhNM73PA5CDUfGyjf",
  "key28": "2zggUD8xX6PgyJdc4bZfAuaTdfY3z8pufLZwfmT9FB4CBK31BZs3j1q7zua5XcjEHSg99W2rVGrVNW69xMnsFMon",
  "key29": "66pKWMaBakSmaJaVVZBY6eC5PRuyrHE8s259EgfZDHC6M85XrJYk8wHSA76BckNdPLbrWjaHmYRvGVUWU5XdkkJJ",
  "key30": "5ohQnUoPraWdNzzAXafgeEmLXayDhu84KDn62Euo88MBP6tLdDp5efs897pDDTn44KKhowWMZiPjz6bq7cXFrFZo",
  "key31": "RTkeM2MfdzxQqa1TDPzHkzJGj1XEJ9hBijgXSTCSzB2BD3rXi68fuz18SDHiwu16th99A4qY5qixfZrmCg1c9HS",
  "key32": "4ksxyHebYhkUkZEeFbo86qhhEkaDEratETHaxtwF1Zg5iUoinqiLWnA5pcah4fdyg4Us5MTtNWYSiodbrQX1E4eK",
  "key33": "66mMYLLSTwHPYNTMQf1q2vdCUA27DLFvE6aFdMxrUVFxPzVF3inFrP3H1dMJMsCeeTyFWApXuFNgsHmATEZu1o8G",
  "key34": "2qPgdLfbxUydMzbaqMy3ejiG2UMosRTPXmto5WRJkwMctx3gXSkTHUdQXUTfqsYy4JE8dpULUXaCGJuThpaZMKrr",
  "key35": "yWhKU9onk5pQyap9szyvf2rL2mhw7hnkY9gj4Uk5DRVRzun5twEVtSQMK9EjFbBxXJk6GfGKPkBaWNBNcBhQQnz",
  "key36": "3WzZ7Kp6QjnwJB4GZrwMTahPuAi6kGaYRRouHHVxny4oKWiG4JTaVCuSRsfZ8gaou74YiQVRGCxhAf9MinQDAchK",
  "key37": "4TDr6gbWkmfGJmpVaehnkde8LmeS1VN4nSogjQ3jRoNQS2NwERCyXwz7mMkpXifmNAp6XD3YSZ1awEuJryMqRttV",
  "key38": "3ZgbnnMQdEduvwMEuSRTyk3HydZwZhQmoUVe6sYydDxdCdWq1NcJExs7H4PqaGhF5CvnknLctKtPEmkYLQxcMGMC",
  "key39": "4kwV6XBnFHerqJUHozpHAk45mGsL5vUjKMoCULUqQBzc9ace2UUx85g4CQppBShjMNTG62ke97UZwrwDb5V3bso4",
  "key40": "3B5uAWY5uC4NmqqwJhatQ5pwureifz6rpsRQZ5aCPufT8tnydH3eoAgSnephonrhWmNWGsNXvNnV1Myfy66jT9Z8",
  "key41": "42yRTSntsEDtcbWWqDvLFxn3tsUuntp8D3pxY6DJavYuqQ33mGPthuGVW7jUKStbFWQNkhacQD827tWUoB7d6X3W",
  "key42": "2tS6M9WYnZQaShffZaxRaMSNJEmWTvwTemo1wMgADH6BFzFKB3mkVPnbfyvhDfmVRHZ9jS7v9kKDiWhXasAmm7VW",
  "key43": "2TaFmirJYhJygLPn7xWawaXoE9JWsR45TyYbACzuEPRVa3DRBKTUe6fCMnTtXQnr4LKZo8vu9rUhzEuouohvHofH",
  "key44": "5yQUxkHcSzEWMyntuBc8gYnTVzXxG1WRDmYikJ3x7u9qhptNXgoRVVYAf6heNikc83Yx7QpyXmGU2bPUmZiQ9iv3"
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
