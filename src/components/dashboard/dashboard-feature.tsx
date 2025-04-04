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
    "5SenPhnLdvGMy4H2ezv6PyjLnfgAUo7mPgvRcjBhYNRmCxNhfR1LCtbXY6AQtzEfo2y8V29Y5DVxdq3CXpzFZePU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eg3mATaEBFxZ63iMd3kfXks6ZqDYxfQDXbGbaFBCZpFFsQc4oesxQE3wJ5a2GSS8YhvxPfWz4kiZHPchu1h2212",
  "key1": "4jbVVMuMjNbmFnh33CR1kDxpSjGrAhFkixDgeF8g1So96KD4Jdzv11Ck5xAAZNjzkGwYBSmZeZMx9Zvd2GqKRF1d",
  "key2": "5sr3Zt4puLMhE9mnF1xsNFax457WWhkRd9gpfeE8cFc8khjpEgpeY8NrfzvCRTSZzdTpt2TWpX2uUoX4p9JMYemd",
  "key3": "3G39vQF2MV9YdDdTXjmRoHoJ7pP88dKzW2WpQseMEnSLHbYGpJfLpBYGTTLswWtAuaUTLCtCp1RgkMKL6sCuVHN",
  "key4": "4L8iP9BN4XJZcv2eHMrv5JLwGRwVDajaT1ZYtGiiE6iAwBvjf1ryy8ftVqU5fEG5omPJYrAkJaT23oZzC1RnvQkN",
  "key5": "5rfHhoM1rH71TmyyAXwXxHYMtrKKk6AKmpBrcqGPsT1hquhGEsJFp2ozTXW4TfGiw9r8tMejPtnC8CZGwttU75WS",
  "key6": "3x1FtrgJinDqbck6JCQXebWJzzzWrGgtA4T4g4iXty3j8SeCt5gW39GfT9BpPJf4zbVssW6AG7anPZ5H45zTRceE",
  "key7": "5bZhwz6qtyFDzq6fzK7grkEVSZyLCa6mYFouaZiNWdZkUsmbAp7nH6x4x5vemUnmyfX2umJYhMut1o3Yxpoh8K87",
  "key8": "GpQiTYMTsw7qsjoMXFhCyDN6vT7vNMMtmNYzn9dqVN6hu6hSYv73CVnJfdLhkEg2ANrKbPj94n8JXwVfDmqoDuA",
  "key9": "4x8TAmtUoRLj5pLaK3GxzGFh8x1BhvfhvbFiV2y5aNWbhvsb5erM1dzvNMgEmkirrKaKVnwrsBToq9AQWVq8oewL",
  "key10": "3vGRMiETCpQYXu7uGqDYuw14PQL2QdXx2BFRWYoLCzfjXRQ2SPpc5fATQg5qfGE9wpY8KGiscs3skRHmCYo4k1Kb",
  "key11": "2yJ3iUgJgg2Y4dU5kZe4y8PHsv8UpHrmNP9Esr1J3z55hGJwAV1D7EuHX2Quk86E1hjBZoajrPTvFnZkkNSHoDbM",
  "key12": "6554ND4To4mUAy87AYGyHsjw3UHdeirWbr4gS7FH2sDBPekQPxjEQZw5VtzmQZUgdcnQVEZqegEUg8jAVRPTYpgH",
  "key13": "4NLUdGZ4TkpxtUs76oD3RFfMyYHycd86wPh4TuCL3PpuHKs6QgwyzjPt4Lvw7kEHScjXjwSAE1rUiRXfQzTTneW1",
  "key14": "4MoJccBF2Az3axNMmgzhEwAkqswNJxswfHMptQoV4UHjBXgUAJzatpsFDt3RXAoPz4fXUUVWsAx5gnMtrrpAvLE4",
  "key15": "2zFezYSnWGv5nPwoG7hUMqiA8n2vHVCVGVvsdcfKJHZkSt2kwVwx8FExaKJutRE6zWhPA9V8Yhy2WZoDB5mrTEiN",
  "key16": "4PefFEgn6NidahBsm4itSvfnSLNSvXrFcptC7J4C35GsyzvZTfPuZgEBCohjn5DRSYYPBfnwzommmE72z7FpRwok",
  "key17": "LGFCAPZTFBhTrXqFKR8ypoS69qAM1xRsWM7tdzakKRn352Kf77GuwxJDKnRbBzLhjTvqfuo5KDLjQQu5Da7kAZ3",
  "key18": "3ML6aK6z35WAPQrasjXMQe7QnG3kLUugMxteHQzVqbEQjB8tv7XVEcyyBzX6B9Z6zDcZhb4SyTBgTdpniVv2BJSc",
  "key19": "3mNehFVEUWALYYLBrqNcNBCJKkWd7rrr8znv89NHiCDckRNtJdqGwH39NcuNjaho17aWYCpJrbiT2aWgGtUGnBP8",
  "key20": "23ASCYQyiawwJpea6Z4fAFKN1urWfZUcvNuwKp3NUgUgpgNby6X5KgbYCdLdj1PPmhgZdCiLD25fDnJQC2WTAQYC",
  "key21": "baobWYfVq8oCu8zMnzyDLJYJmd2oBb4bkjRqZfn2AAosS8tgjFX3eT8dX3jgJayaiMFsEzmN4qALcZQYkQjgNda",
  "key22": "5HwnTiTdyaqWuHtDDpKQ6k388pfK5N3PXqfczy8ii81xWMMzTBusF6UUqEqhXbus8fJf8bwRnHevLztJAPsyJnpA",
  "key23": "3HDA2BMWM17yp5FSr7m1jUYLW7m7ZnWpETMwLPWLJbZkZK9nnbbNh3GhfRq9HH4FnmHL17S1sNR1tqFo45Eiorg8",
  "key24": "3rQU38CoE6kS55bSk6jK1yCCQsqChscr465FLUXt8eXXUB4dmMTEitm3uynjYCWuhcPzhY5qKkN7eWGVwzJXhYrs",
  "key25": "58jHrmWSZipJBF8aAWbeePD2Sh63KGr8zWFXBruNKYHh8gMmK1zq8yuCFKefcaoz97wo91zaJH1TLEybuS2Fjoyz",
  "key26": "5Hs8aKjn1VfvUw1KHw93bY3MJ7rW7LwCPGA5XTGF5LKE78wRvuSqoVkub5r7cpHUZCcC1w66YYRy6gsGXQd9mxp9",
  "key27": "3HRFingER1Y5q7NWz67nUB3wQaJeWEE1uWAVhdBP2AwvqWqXv6DaCfKaw6i5kf9R6TpynSKwcH416637gr6JRrzQ",
  "key28": "5S8vJcXwpvNi4tKugvGwFDo7huSerLH612dW8f9D5j29f1PMGff6Ef5mYh9sAT4b9nAoKCiribh5evBR32bKv3fj",
  "key29": "aTbBtcSc3YWw873FnpVDp4qHEQeRzcxM98MtWQRPtKiWE8v6WxFbiUJZe2PmY7SXqP9jYfyjV4GDWk6vcnUBV2B",
  "key30": "2BvHXEq9YJMg6zUFtN6fhqSWd3DrsWChe5bWka42Tp9AKSbMANRo7BJSaM52xmXZNH5jyrh86K1YgoxpZt6YjJxy",
  "key31": "3Sqitm8QiH1m3bXWoG1v5kFv5egTtdDQumsNf19rQzXz1Rgh36NksAzpV269fzU2xWJ1E7P8iJJXa1u1TrabSFcq",
  "key32": "2ePEXQ6AFPgpr4rv1nkxVuY14zAECT3tGWQDfyKsBHCjZsaB8MWy4VTEZBytAhMuqGDf94ayScoCdhVdNgyQZSBN",
  "key33": "4VtEMFi5s5XQsqFwBdV6NHNizuJxq9VdgJ2s3aT4GXyS3B1tx2FkZDJac2RvQqTP8m8AgC4ZBRWu4xFFuY7n3q4D",
  "key34": "2T5Ug4mJCvR548dDQka9AW9wEDSLeNMHCdtUXEFsvC3C7A3wjrZd1FWJA5Gdyp5BbC57tsYqWs9Nx8m5VwY1nQtV",
  "key35": "e3qw23VkkngRud22PYkmSZHPPVQ2LZcn91WshPj4R39Zh9zeiQQzgJ966HK1ZTKzyAYeyhRspdgtBFFpi8zziMF",
  "key36": "2RRJcdbF7X5CzaX2BznLL21H1Yx93hkXrJR3pktkcQSwcEgmbkbvwssEXNrpC1m5F4EQ7NvjvmaxPp9bBszSBZH1",
  "key37": "3CBXbvNyCJuuoajuYzEUknftGqCcEur1Ckm5uYTHPeDMhq31YzYcXGuDBqSBYJWv39RaYqzNs2f4NegbC9saBepM",
  "key38": "3tL2j8JPyaL3AmB4cCYSagwi4etaasTGdFtFWmvqW4DYBmzEkNhJf3k7ouuTmKmRFb8gKCBtw4gtLp5ZJtP3icX5",
  "key39": "5P5VMvY6pN7KC3PzEzDqH92Np1f8E6XtM7DbopEgNy7ohd6PKjBrvtfZB5Qq51E6zEYQz1Pkx5nMzAtNQvRiTy7p"
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
