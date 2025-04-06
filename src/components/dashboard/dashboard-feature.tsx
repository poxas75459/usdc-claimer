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
    "nS6uLMuAmfJtGWqQjB4VYVKRrc6REPL2B6cwFdhxLRETuNxCUcjccuE4fAM6oAvCqe8PYJjnPkMdxMP8jHDZo5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S5JLAx7A7aUq8KvTjyZAYchntbsg8GqKSwsE7pcX8j5tkiE47q4pp1WQWnqSAbXcmsEyn6jphXaCk1RpdykYp5E",
  "key1": "5mgapFwsP33fcnuwq86YU5KxHWYsZ6ZL48mcLjinpuvV3Yq8ZSPUuDk8eYMxfagSnuBL5Nnw8ZoS2gg1JYomW67L",
  "key2": "5KFzmyaNCrePsbR9W6CRy7FC2dfsp3sewtSnoWWF9cmhL9BfaJnDFX9Gq2DwvaAGp1qb5ARJQbXZV2br9CCyGBt3",
  "key3": "348cybvopWLptmP9D4VbDQzwQjcrNWoXttnUaoygSkpvxXAcTThNSeZoiqQN1Gx5sXtnfVMTgsrk28BnGkusBu26",
  "key4": "3iHvzKqqYaiSPz88aLs2NDAoNS5fF5R4cMtmALR4f9aVMZhaHPWFCMjmEZLfGbY3goGjidzuEuXFif1zUxVqL66F",
  "key5": "VNGpXCyzt9w3d1HX6vZLYDhhLGLmLdRrwxuK3BBJoNUC9VFvH8Sj5UrQoFFaEQurd81UKkFs2tiTycBpXj63SV5",
  "key6": "5wLjijzwyu7hNwTkVbeomJ1DiKbQm6tgJhMvSogS5DgXyRq8vheiUhvQE2Ht6XbQCeeMHZwxMSge7WBp75kVssh2",
  "key7": "TLYoZdmh3UBDUGQPbKKzF2tQM2wbbVQk9Sjced7xoPjBSLcin7EyrVHw5Z56zBpBn4ZGgPDKH57pv4qDrYc6WqU",
  "key8": "5KUHcKxVHn4kZrdAVgBe3TZc1oA3DAJy1pYVpcca3bwfZSc9UDUPJ6wbd5KrVnjPJzr4mt16rYHpCENGCwAMVPzW",
  "key9": "3hVXYdeJnythHDp6CRWFbEfoa3JsXmdQ8TdxyL8WQrSQHBxoCuhePf5PXPmbyhXPoXZipfCg3WHYJtVK25iRYUdy",
  "key10": "3dRfjN5pp4t6ANUkWrNsH7KDZRn8BHrWEJzKoHqZgVYm5LdcRhHcQoqatmyAHLCcYjMZcvN6Jd8nQgos4CgUwwMe",
  "key11": "5fsSCSyeEzbkMpo6cpZmN8BWWpxvEuBHdrvf8cPNLi6RPF898o2kxjDqdu7ytj3op62QaoN8ByeU2xTNWkHyZuNz",
  "key12": "3BnqMPzvTGMZKHnJuQpyWBhhda8jYwZ3hutdr5sTaaVGWGdRhk8AQaqt2tisZMoBunUrKGvcWX5oKZsgVMnsyHJN",
  "key13": "518gJE1o3TPcVzNzWhYhnUEYXn6jMPsPiZtCqfsgpwydSfV53SWtu3Un7ThMYGiQh45BDHykqtt5k2t1fNxJR5LY",
  "key14": "3JgKJWNw6JxbBT2E7afg8YnJL78Wzz3L3p7eeXQEzEYiqx3KZfFRkz9aU62KpB5E4rm3VT5iM9onhWyVXJ7uisuK",
  "key15": "4MUeq6MxdQxied7Xesgm7q3VKbbgYfrfEFJWuTjy9JM9J7fFXGU7QTcAEphYwMX6g45V6KT5Pw7sqEuRXbG6xiFA",
  "key16": "3G7jFJpHNRJnLyXYgss9JfVpKEWmJP4cFX8BiQFdtCGXmkPjno5PQnEPyJiQTZek2QZt6vRN52wRd5Y5t5qDbmj9",
  "key17": "quD7EbqFtfUs1YKZ3FYEpC2CZ8jKunrJ5W49LwAdK2ZV3wYWJSnXvW3WhRAKxpkWEi93dKmANAPpGYm5aCcFpvr",
  "key18": "4s2nBsJ4naMTizMrjmTAFu7uemgTf2jtrKyvQyubUtdw4VXVq5aPKFMREibiNC2dbkRmAVNzh7xgTi1okebg8Qd",
  "key19": "2uyBnn41yE52oxU1Z3gT3ZKLHHrLoxK6jVwaHtLHDFEKQ2GmtmU7DDUgXumuJNCp3Gc5zRX6yqzgVmFotfJprafD",
  "key20": "Kdb5touQezn7KA5tBrrnZJVwPbnfrFAbJ3XDFLpsgadF5qo2JE5s8vsorABKJbZr7ds2eUGSh4voz7BqvFCTuao",
  "key21": "53yXcjKGESd5tm1H7h3fn3uFvykTqKEbWYrPtdXTs3aV5rwKQfUtBQgAVTfCWr5eBTreH7CBep7tVkAKR1fMEin2",
  "key22": "VY4U6jjRTcysyu58p3gCdLGT9VH3LwAwJG5jR5KBr9W7EKgLBgg1V8L52Cv9baWfB6YggdLueaFXgMK7ff4GZ7q",
  "key23": "4Mhc7udQ3XjsxoX5aUuwWiucvJyvyCFTJ7wa4TmWnBaQpyq92Lqq4x6WgTKK2fYMW7hCwMSDNgQ9Qfqn4RQLwA8a",
  "key24": "2C4w9jRScPcC4d5PsrQnTAd76Y1K6S5Cv3WrmsQvsKiLnw8qVPi4h8RJ8kdb5DNavzEAoCNQ9dQNz6U4QQrBwFxw",
  "key25": "2jJbnc7UfzX2e6pQBSQ5b9MCQHshRhKax5PYU587CsaaPYTnvwgRa1ohkEmaP24oJyNTBvto4m22wpRfsAa1ckaC",
  "key26": "2qaawQjWvUpMvwqcZzNwr8ND2kWz474oSBBxgCtvBd5cV5ujwrkisJZDHaPbCZFs1v98izYBvaj77RFecXNPFoWE",
  "key27": "2FMA85TMrR26mYnwhqGraUKA4GqqQNJ9fdgT3x1fVFemuKmnkMTRqmEz6X3yqfqB2rv7Q9iLhM5i8nyqGmNpnXn5",
  "key28": "2P9CZ2vxePs7BZ4Spc5NN5DWVMVRQ8gFWmjBdwM1YDz8qyYdSKPpEEgwCK4FQT2R85LZHoqSCKsRyqG85Hs38S5L",
  "key29": "2B4MhyHNd43UzgxYXrPKs5GUty2PJ2qNm5ADPuy9rNaNV21iEmwjtsPvtQe54cX6UsaRhZdrjYZgdiEtGtACMTLr",
  "key30": "dFnqUaPfbk2Z3rbB5BFcVAcvBhi66uBZXBMwWR1ZqC1ZCDoewQyKvQb4ACCXVoqgjgUzkM5J5rkHsFQzoJhDbhS",
  "key31": "5to1NkkpvbHmc9uAauoFLDUGabNbPSBtog25B7sxkKFNSd1mnZPezSvESDZdxB9fmS6yVfrd2M5NxtZsb7tHwiLf",
  "key32": "sVVNxmJZTMyYpZXqn8mCScSEVvPURH3vusiiG4ShkVRdNLi8GqQFsMMhtnR3KVxVJworjjzVysesGigyv9X1M9G",
  "key33": "3RpyWMe98dii55ZqGkSAupRAwTRG9gZN5r3GaFNtkYWHkNTPNFSeoLspoD1sun2vExUyWG7kEPdrq5DN4ofSjGm9",
  "key34": "2M6E1cKDiN9STCnTFy49H43wZjTH9qEq5KEhR5UktSH1JmTE7o7SsoB4ijWVwprjYrdbbaYgRv2YwPm2pMWzeczL",
  "key35": "GiD2oPjMwuK6vdAxRVgLsFzs1RvXyWkMmmUXDMnvXU1GHDnBfcuYjcciQjdYR4BxPLU8bZv86ntCva2MbPgziZe",
  "key36": "5XcXVzcW96h5WBq66Z75rFXTHanfVDeMLBPKDDswKKUmaEDRq1PtwKFxrUtJ7va8KYzngGvfFvaQsh4bxXQzjH2U",
  "key37": "41VpjHXX19sS7NTPwTdZEkTYTi2y6iTe6yhzDZ8n2XrtEZFDJyWVLpNLPfpQZbp3ZouHQ3WxUxprAZ2jWxRzYNmh",
  "key38": "2BeBXnLWXeDPk5AXYUGLruLdqGp9tiUgusZmJMx6FDSHijRGNPUP3Wt1FdzqeGbyyhpFbrsajntsSExfsa3rvMoe",
  "key39": "41WEg2M6kSfoAF2vs8JLetBZQYjPLPLxtmFotudQgfq3XzmjQCUv4FjyS8LnyybC2utHGWD5Cq1knPoVomkRXLVB",
  "key40": "4CuJA6V5zRP27dD2CaGZ4mN9Toi1cDMAi1myzQJouq4kiEaz5Rs3UzrfCRe7roTQ5izZeqtwxuqhVQsdf4waGktm",
  "key41": "3fXygoXr1qLD8Kq2PESMHD85AJNcbhz6fU9K5iks9XKYW1Ur3toVKJN3vs7tbwmVPwE7gMgoUtAMkHou42SQJysq",
  "key42": "39NANFWQokjYuktHLo5pyCpywgJVV5nYmaFLPA9Ziv5o5gCqTsj9mcjNThVFL8w91ppBGyuGwkC6iAijEJqpLE5Q"
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
