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
    "5RnjZG8KHcaXnzHhg8fRgYxZ11j8Wr4YiyN7Le8dHFwEjyYrTVFiC1vGkigCmCfsBCtdkPjs2T7gPsTshD2GUvAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rWH8M1GAKyUkC5YAe75xCw17g6rmhWemXYD7r8JPDiLcLjqFVDuMB1Vz4oXkh9HKRNkQup2PDo6Ds6AxWW6m3FW",
  "key1": "4mVTk2HFacW3fUQRWABkMNW9mJiUdXrtC69H83czwz67E2nP5dMGHrqSZQtGNRY1PNKRvikdrJEiC99H4gGQsvR8",
  "key2": "yu685DLWywxgwsnzxtfQSt8DGAaHB7SXhQF1NtnSZwXP2egy1uTNfQG7XztU8Y6QtBw7uZcujUCzkP4R99Z3YxA",
  "key3": "4mrwg5tBuSiHhfy1KmtTCeD47tnjKHFqE4WGmpsNEXgSDunqvLp1H9Q77DPqbqizux5eHBfaE8XSnvymS9P8mSrN",
  "key4": "4qw1yJnMXz3fYRn2wHi3jAaSXZNGZhDF39LU4JGBqjks1oMNn8ajWpWCv3LcQQBs4CRBoBxj8eBECAxFj2Zg8L61",
  "key5": "4jSNGrY3D7wU5p3cxz6gZRjc3b72HfCGxsixf5tmAkixmPwxm5qgddhGfeksauyYgZusGSYRPP9a9sY5CBpdyzup",
  "key6": "4FUuSYZGpde1iD5cQFHxio5euRT5QfHB7tExxKYQWxpJvoai5meehyNfB4oWFMZBVTASwLG9fzfoK2fVo94VbqL8",
  "key7": "64Gc1Ytp28T7wkejbUxaFtQ1T4QXR9t4t8VadUSAcnFhucpM3NpBrbRACCUeUz4z6EeqUT9nbUJZoh2cQp3PFciz",
  "key8": "R2nqf4yxsz8zSXU4M1pK3u6z2GrJpJqnRJJ9L4DvSsrHqYmGaawwDmqfX9oDtHq2BE7un6qDWFrPLFiGipJDGGS",
  "key9": "3TS5yXmMQpKMKZRYFNxfDkqUBvWva91hmiiSgcj9oAV8q7tF4ZNYoHdUurJKxHzathUbiaSRWzhV54xWVZnji5fc",
  "key10": "2swZETaL1qzotzvjPwbwfEYJMECLPzko6VfiCMdrhqZHzJFCVHo8uwrpLauh1ZoqYPB4T2daP4Kh9ZaRBQgcN4g3",
  "key11": "55hYKK8r5XhnLxgChuvAWiwaGu5Dd1CFjKZ48wt2bpjNJFcpVYtFaZgjwQedjBjCZQq2Qn2ihKPgbEqMG6kVR9e1",
  "key12": "5h3NUMVhRN3335LJyA3cJecc6yg7p3hU5dwZt2rvsioe7t4cRR2RTVrEhgbrF2RabiMziqMUSa8FhqabgUBNASSs",
  "key13": "4Mw4SenPGxH3WeK7NcEjYE9Lom3WEs9pP7xH5r5DFxpxtsKgUj1jBTsm3or2AyuX79z5gt6YxMLTAmjBm4jMdcF6",
  "key14": "awhXzbkyq15GCqWeqbZ6zfY9exmQxwGmFCyHVkHj5fSevQetQB3JSyiWc1PgyywD7NSYz6tsmMoe2hNhoXQSXNw",
  "key15": "615Zpc2oSvu4Ws6aci2Tz3wcpVDzf4nTVxR9YYRoANCTqjrRyGgfabuXpMf5hG5figxCTugKpZ4bwb5XjQLpCUrf",
  "key16": "5fo2aFXYjVqhzdbngTsCk78nrtUwacnTHxCfvKPymNKmaXx2mwypfb7NyfPpk6jE6q3gtZMdobJoPr5byDTqKegs",
  "key17": "4FeukAMMuAGTEQ1DT2BUSjbswqHdvjjcAt5ymagZt3GVoDwK3qVQMJFzrD3dxtgoSfx3DUsFrHzEBTteNGoCu9ew",
  "key18": "ft1HCzctSTKPk9vK7M18v8H8PWqzkru9SdcZydCLhqznnFStx3MkyfgwvgV2Ug7M88JY7UQdvpuh4x5cRFxYbj8",
  "key19": "3YdVzyvVUomf4UDP6heo2Ldo12qcPfyU6uBW4fdYPNHGyi3jZzeijHvottL7srojfDoRgHzAWNqEhnu465CUefNa",
  "key20": "3DYZUzYsXzcayWKgEEGGrEjaZWUzXzPMDUR82vRNJd9pMsaUT8HxPEb48KGNFpav8GFdZJJPhDyznngVim9v7aAw",
  "key21": "TGD1SRNTbdgQVc7suX7sGbBNQGFGs8fWW6BndqY8NGH1CHMX7EEFrhq7G3jLgYCsSamyJeznLzUz8JSf4UGaNfY",
  "key22": "2gghBUJZLRNKS9fhwy9L8PbYFLdxWGMtqN4vpfmQ3L9V641EHknUqXfjBKfUbjnQphiJrQECELy9u8FU1TziSSuP",
  "key23": "2s9DLNCvuwxU8tV44X5gZQMzMPQZVZN5uafUcnrSG4ANSjujFJfktcg5Fos2auwut4ht3tfrDbiu1q3gV1jruBV5",
  "key24": "39iH4d8BZkEzVTMR53ubfe8mq2L7EgbvAfT5hoRJsYR1ZbCSqDit3TENRG6P1QtfPvCebHj5BeAPh7zwQak82qJJ",
  "key25": "2HBGkxoD1gAJ3z4yCuGX82NqKUEpJp38mYymk4PXU3eEuPfVFByz3VAb1PmMYhC5kLtPE5YefhWxPvXSfNp6caGU",
  "key26": "4FkaLMN42anDGqZeiPNNXnZ4psG1RYarLWNWASx9eADVmsn6gL1SNF6zHvNKDCDzP5Eo6trnrVhdScFdcYdzL2nQ",
  "key27": "3AFvc5bjxi3P2yd7caeDv2G3BXeVFnqhPE124EBgbKVbPYJM5HBGz8MyKLxyBwV11BSEZ7x2y9t1WBBwRn8V77Gg",
  "key28": "5eBahMVKHSKDN8gyt6zVuP1yKkq7BWmQpNj389vn16ARajJWBL1e3JfqRdBakrCtV5Xh6t9PUoqpQnyG7QBcdoNU",
  "key29": "3xjyk6YW4jdAHoFZB1jUnm6XgsDUxZqiHYpFnZBPvYXdPFVaL23BNqFSgaaccqKjtXbYeHbsjS6EPfxXvanqPTLT"
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
