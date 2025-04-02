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
    "3yq2fYcGvHtUH8x2YeeipS3rxqXH2976mMHTZUhWSb6t7qDRbZuXcLe7nDTuCuyp1V26XSMHdBDDPgLKN5EGCYrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BwkkxbAtLbM71N6e6h842CaiCD95F91QbP5sf16tvXwQqRiiG69mjpKKy2QGYwmhGTv6EuvVyfK5Y3Lo2EbhhcD",
  "key1": "5fqvueVPV6Dgf83icJwutMKEZXxxcCWgarE7DqfVrTpS4HdX54EjsfSm8j9S4CdZFaGgnYSMwrkTrQH174Q19zBX",
  "key2": "5Yk3XeAfLzKfgjrQ9kpQ8Y9VzWZpWPPssCJwzuBee27Jg7nNPuEnJuy937wa1MxaRHYLBq6WNvSy7XAXvmS3Mqvt",
  "key3": "38YwavP2u1K8DDnwLJEfJV4NGb24U6TD6n8KxEmjcc5E2Vnv5kAYY6Ru4mdMzssa9kJy9GU97FmXcWoFBZrMHAAt",
  "key4": "2sZVg76RE2iBxJZazRhMHewaSvzpUu3rHKYNDdsr28LWG4Cfb311LtkZPbkPEwRismV4vsuZ9nWkq9MYMyNq8sKz",
  "key5": "4xW1PtQF78xW8MWwAfQJccFp7HuPAdJZib3qPBthZ4BHFYkSJRKoxiWahaeELFMNBhD3YoU8Ap6cMbrtxmUcddmD",
  "key6": "3uHqqi7PdqGm1fm9PZnovYCNahPeBpxsZx9tu3XZkh1byd3eXaUuznifex9ARTzFeBpmPQvd1d17C3b9bqgaDLCf",
  "key7": "4EyfZMmL2J9tNZ43ZeirZZBJPkeJcadXY7wK5t7yYFbabKCSNd4xEfucqwyxPBvu7eD2c5peqwuMbXY6rbNN8bm6",
  "key8": "3uwTqZBZkws2GNVSxNm5MTXbd4hWkpnMGxfJKwKKwiYb59m8fNcu7hBfBCFR9N7HE4a6HVuxks6uE5g33vLkgWES",
  "key9": "3pdkPvJreXgztjZe2ACrGGkM9LSQ2nZe4gxCojKjRRFXnYZTEEvPMotgNHfZjU5d1zxizj9vPJ7FJ9BZhogdmMGU",
  "key10": "8Ga7dbNTF3SqUeYvt7smuKRFkoiLodWp2u4KfjMAn6vpUzguUpdAjRCWFYtbMSiP1G3fC5ziJSUoVDMUBb8v9E2",
  "key11": "2JZfiPuTPEhY61JpnRsA5g4gKEGc78v4dmPfR2KQbct7XjvtHzmo9EZP7XghSQVcatmzaoz3Yv5Ns54CSnjSLEjh",
  "key12": "2bychWYSUQuf73KSVUKB6A4V37jcZghff3irNnztn9TRVw79rkf8EoS7EDrhRPGs7aq9pAGCS416jSGksg8cwrYH",
  "key13": "61nhtP6LYTEWMm33yYWicZ3QaKABjTKT6hoKfCJVbAV8kpkcUqjahhk1LLyEfLxWrtNYGAzH5xKpQnJhtUyJSpES",
  "key14": "5bmHBonbESPT5eVDnDhZr2u4GJDEVkJuCW4LUShNftP8idvGFbXnWdutKd8CPM9S39ehTi249sFK77qzikcqqTEU",
  "key15": "34aP3zshPW8qqDCUV4tutF1xT11Jup7Sd33znQmaLzT13a12ch5rEjzKqQAoaCSBYWWEsh23eiaj8C3NLQwdZLLe",
  "key16": "3EqMAJ3aY7TSc7zteSNqba9XpnMYgSgBTRJwAhS8EjB3L3CXxwrNePYjknLNPX1CWYqPZT14vxiDgCa6z4gz4Z9d",
  "key17": "5hA4hw5mwBFxNSvjyp7tS2ABTCGAiSjFjVFED2nk4SYRCu2oVrtvvXf7Q5zdXnr98TdAXNYSLESYQyuwDVnYjxih",
  "key18": "5PX9KRSAyMAqQfixtqjFxtazLskem9owDAcfH2bUZc7gFYs9SoK4ThLzv5ar2dAt78LoL1nTRQtx94f7zBtxKzDN",
  "key19": "37br9zJh212JJFPX7n9VK48o6UMMadUCJLtUKrbFgvJcUYwxpUQL2GRgTUeVAh6UvnN9ZCVJvpDkUSDBBfWNtG7j",
  "key20": "2Y5YrC9cbGoUsKxCe1DUh1Wp58tynwBbkyN1fEasuQ8rQVfX2uH67KFTid2Mbmv2ebHWXxNpSzMJ4CbRVM4pVQjP",
  "key21": "4pfiAR5jdcKXmpTqT6sEc4CesH2uSLTvfCDTmzxyqR3tUrZBJSwYGkZS4LLh8D8ytWSv6GjbLsSKLjxJKeZ7L8kL",
  "key22": "4kUEDUdPEPqS7nw7LUR2ft5s6cYuwG5xedmnUp7otH9iiQRmA3ZSUy3mjECLwMtcbHALwo527bF42rjNeYQ2i2yk",
  "key23": "ze3BE6m1kNXxEQ3m1JWZUNMpeyB4A1uLrSSAZFQWC3CjkYg1DejpcXuJaQ3toKkHFmguPjVZAGUki9yb14wEx3b",
  "key24": "vT2vzAWD4S6YofckKxyZEfeJpwzXXiXwEWNmRfsqekkNotypG1ad5PSZz82QmHZDS4qqpsW8Zff2P9eNLwW5ZKh",
  "key25": "644hnvtKRa8FsyrkSJdT76N7gq1jP47W6mANUfNjaBQqAcMCXPizox5zbcQsduiyrhi5wwzDae5vWvu3e1eXscJx",
  "key26": "4X9Xr2EUZoAyJdru7gF7PT1KRAdDMJ8a7T7dGBrYvFQxFnpijdAuqaGCcndvEmtRS2MMuorJo7yMXao9ja9HvXrg",
  "key27": "4mHAYHf3ggx6o8JVZWyEqBzEtStRriWxWQedU5bSiZGYsMPvxM776pnVKcrTAgqsxNAVEnR3fu6eFZ3EPpKx7Lab",
  "key28": "4nit2HjApJKCZwLUBnGwCUoSZMucnvdfWsebUi6He18DMJWd5w55SywMFHNTHCi6SJyDKhp4STwdrxGVDahEZ7wY",
  "key29": "4x587CRbYcR6qav7inq89mSvMABJcoYHfW4sQnFMNhL4xE3yPu5ZZfaqt6meLxneazP62USRoqyREkePxQTHfXBU",
  "key30": "5Yi9vRsMh2nvgJZbfZQ9P3ec1rYrrvgU5iNf9d7QMiiF4he3dHqf5kjbez7revpZLLbBUH5C6WyvGnXsfPzRkRUR",
  "key31": "2sxSVTBk5R4yHFnBvxvMxroD9ipTWj3jiHUcC2f5F8G677PBVjoDnZ2GvkjpCFynTLfirpQp4FHfo2REGckgqmHJ"
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
