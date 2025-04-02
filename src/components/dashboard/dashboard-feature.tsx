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
    "5gMSANatCsLgiA8Mvr2mtEXmGyrqVGqZBUDD6LevFstPUMvNnHFgWDcSWAFTGdtmgRKU7rR21DhRJeR5e12QAZqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BmfhV4Rm6fAFFAGzdMSSWARAB2pwaELATdFF11hf4kzHh8xtvf6bAUeSKFVmk4c7K8kNN2gsd6PjjT3UK7aDYFu",
  "key1": "375pnrbjS6fzzkD247dEyuJXHuCTKjdQjtyrVJf6UFGd8ix7sVVXX8Td5pS7iQw5Z9fbnMmA5gTrYizftYUYyCfn",
  "key2": "JcmSABHSXnA2Ru3Gf3qFhnLzYiMHyQYFAfYg8iNgFe57E8ArPBvYxrqBjVD69qh3Mwhz9VLkYK1zigurGz1eQPg",
  "key3": "2pjXuDVBMYwwujKfkUtpwNAjcNdKAEbP5mxUq1v1A6NU8MPqA98JBHNdAyVdbs8zK3q1nfTrwt2sbXURabiq8dnC",
  "key4": "3o2fUfL5ZMHGHd7KNBv4THg16DERssmQiSstfBVdDzt58GKYjPqGUcevQwa23rprnUowNMMUm4xSc91fzmeGsZ6u",
  "key5": "2GKhvVU8CxMF2AU7PapJQFtZ9uAzoKM86EGKsnRMgVt5E9g8vSmo3BEqcL6mCigFtLNGrfei1s6JmSie8q1zLhxE",
  "key6": "KN1H5afZ96qgG5bDnXfvVHegfptmDNdMGgvQg8ZXyFPEdwkt8GdGvfcx6VtaySGFz5fgbjfbioBAbxnbGvU6qQG",
  "key7": "58MrA4FsAv3MDjimyErLcHhbKBgs9gMTbm82pNg5y2nXS4cPqvuKBStCeVniAyeYNEVUVpeREB2RCSh6AZtkrEm4",
  "key8": "jgZSBVXcrDBun4TbpTPxUGFtfE5U7Tssxiz2v3NtqKtdC9YidNxUraQe3ab1fQbALpsznEeRNy7H6vuVW6eDgLX",
  "key9": "63KChu5EdZU6pBuAuLgCoAcSTTborytSy4MoaKDtg8LeLtnxg63imoM9nXn3jsoU5GADurHJqnrSjPnhguNsq9pV",
  "key10": "26bEJBBqpPkN2vMGbYEsdqwiMFMFAjW1X1zn6nPcGiVPewfQFAwZYdXrHen2bnK8ujAf6HBLJeYtDesdfmKXFYRM",
  "key11": "3vH2Wu42XB9k1isC29vwEHAuUU5gj9F9WkwR9ZATy6oAzGDkLH6kAEB3HgbQgvHiA5Ha9DeG9jxNgBP3NeeD27Vp",
  "key12": "cEXfXjnFwQUDXtv917gJaDmsHE4B7tudAeoPCGhbkvc6p2YcGJsLxUBCV52snhKwsrt2Dwgh9SeYZavrxepqXw6",
  "key13": "3crnzJ4NKSvAXBNBEUf69Z6S5UJJzbMZrwFDNSdLWHxX4nmCXCVDhZW4pXdeCHdPnTy3cwkNHp6mZ4SuevXzr7LN",
  "key14": "4AAkB6ooAmsZp4zEbeUXNzE2Db8AuLU2bA8qV4ASL2rFLy3hZ12kqNE1zH4MqQmv2tWpGSB4WCh8QoMR7bAMt6sA",
  "key15": "4qYiRRNrTsxpD3Jopoyak4d5sqdQP27NZBaQDCxPibXZ2MNoHGUFnQkVYro2n4TFEBtJXYX1kieM6GzRAcs7Gs2Q",
  "key16": "3UuoVEa6cJrVzG1ja6KnVrpjRWE3dUbWndoAcNMoYyAw32AUpT8fiJnSg9TdsEX7DLGBxwsBchDAP5SWCpLjV7Pb",
  "key17": "4MUsxhkmdQ2bnVyXwzMz1tZd5gBSc97L9TxhwB6Pm7AWH2aBrm6MtnTR7LYLoBKy58JRKw7KLQVBS44NkCDk4xrY",
  "key18": "Z2nJbBqsWMfRaYgg5ymheK2yn1AwvDZeUj3Zbn8kPS2GaKhv1Lcs6deSvXXWhPLcRCVFBPjJ8JPHeDdf2e2PrSb",
  "key19": "Bp182MYw2cKtatg4YToBxYjQTTwrMyZhRZrCgRFCwrNxHZaLX8mKUs45uK7NRAmwxx7PyzQ4tkg3tUb3bb6Zn9Q",
  "key20": "eW28wghATrAY1qm92d6d28LXUDQMHfiHLMnz2UMpPwpU3xTErJbnPQRkpqXNZ5SoLRrAXW44DviAXwfVBYMXqpH",
  "key21": "5wYAjBAq2uGPxY1sczD8cuqdjWun64ACCTRrEXyh76RCBjGe78eJpoQvC4uM8MV9bP93zg4TV9T2FxexzkSQEwdQ",
  "key22": "VTfZWUUM5wcxqgtYt8bEAGj8YeWWMyAspxBJRjQkdZ8KrL9wF5H2QxjkGUaXA2t8PWbTjxesw1LXTPeWPWssayU",
  "key23": "5NrmDBnVrQYRVk8jcaoBrBUw95o43FQBfsncr3jLXvTo8ks65DopMj5vwW6ao6rw5CjftADgifTYgKavhFMg6nsv",
  "key24": "2kniEkxfTkxYbJjEepP4jg9JBwu5wSzumTvbgoufFVqm4gVhHjh4NmxmzdVCNhbQxh8qGqUwm7YcPQSfWBtL9Jrc",
  "key25": "4L9BKCwq2rGf88uKTFg1X6FFReSVh9hfzNkyvyfMGMdxyKCDBxe77kCewPvJymDg8WuwEHKd8EkT5eqpYM68PQcR",
  "key26": "3CMsi56JzBXa4YXn1hwnR11SFdRe8BMfHWMM1eSWtVPFRd8RQ9DQNJGRhtTZff9zougiiSg6Z2cRhxKydkAegRCq",
  "key27": "37KWW28Kms9gbaFTkDUhNg6FzjiELLJGDqZdWwZTonj8RHVYkBvbwvqzarCgjJSoL3T1dVmaLN1cNDNCUTo91JPr",
  "key28": "2tKs5gwPC5GqdrCqHvuDp4pabw82Pixb8hPg4dXMaKpxrXYTpdfxboiCiLLSieouzXA1jGVzdFimNeKPugevK9jh",
  "key29": "31jGsthjMfogRoN3U2ef23o2GtQeoigdBgxCUPMktcg7CQkrpuqhWVHgDDELd5Xp96R13LLH7kbfCCYjcKXSqC3W",
  "key30": "2zbkwFzi6bqPoi6yRuLDSeoJJ1RfdjQP2tgTk2wd7Skj8Qn74728hhWj4rQnfKEmWExavUS2eeN26goZtCAfj7PZ",
  "key31": "4vH9MXHEUY718QPzDsKnHrnJiVBfNZZXQorYdVsuf5XfBubAvY7P4CKNdqEJBcU32YvFu9Hn8uWSNnU4XYDUuQjK",
  "key32": "2MUPBBm9ccvRyP1hrGSCwRd3keuKJMvoZKGAJn1QwhaxHj4FB1GSTQ9wdJZEp6AsaK7Dduzi9DnQmSupi1S4zFUi",
  "key33": "zALfWhK33VBqcSjEN2Bg5TN18iw93sSVgTLQbHNkZtj6T7XF5BdbgUs4H3ofZHz2vKebEggvww9zabFvqJKBvhk",
  "key34": "m9MCbGmHBbfZvfXDrYPWgcqZDU2X8BBHM28caa4uTeGNjBWTLfFdSgfB1JEkEncNgkafZyvygrAszQKNna3iB4V",
  "key35": "3fZUTunvTtzPzEUYGmoqif4Bu52LRx2oah3gkTjftLfezQ1fke3FwPR41hiH6zGzhnjpb4YHCAK3WAhoARx21cVV"
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
