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
    "3G98PtW6gCdjarDVurtcUHUv8Vk9W8sr2K9QxRqv5DAQk9o2REdRkr3UywQEzeNAgwxjG7WhhHt5CNktaDGjpBK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "476Dxo6TM1LQzrdY2LQBVtDTb4D7DLCYHpWD8yNNzHtEbehNhUSS7xZKDitfyJzCbNeKGMQwciYkYyzYrXZe5qDk",
  "key1": "4jqn6ZTknJmRrwVzNZfhcXXQ3dBtEH6nxQGUE3w2ggpRYrcocrmiF6MDzzKCcQe5nyLDPUQquFMx8QLNjiubMZVp",
  "key2": "2YUECwg2Nh9ocbnoLzvfU5iiAS8Cb3ijAuwKdmvADcBVmLSWn3LA3grthZnpNLUFgz7hCKppLSPqrd2xeeaJMegq",
  "key3": "4E6JHL3akmPRsZDna4ePLX8HTGd3ynpkHdE4abLDjeFh7GhgioavjmAmYXfgG6aPWTjrVWcUnpWQRtCf9hxqHX86",
  "key4": "2aqt49CbvjhVZP4oPqJwJN2knhZ1Ug2eKJs8DXFfohH5h4rWryvequZhVqCcQX2Dxsh7ssZKxNgJ5PjHa1gW3GZC",
  "key5": "3e25jNzi1iYpJQSMzdqvqhDg2sdxpfx7R8QX4Z5QK8Eq3H6MZKMYnd3hCGZiEGAtqnsRhNMReWfC3vgBCa3GQXMB",
  "key6": "4RBey76wqK8WdkKwpohGMnPqZW7SPhofq7wjefoHjf6UFoqRJYHWwSR9mZ4ejp2fy8K7ij2sKHxfiFoTjz51puJW",
  "key7": "33EUSrRpNgVC83AEzDHZWFnr3stnzfw61or3of4iEbXiBoqFK2QRK1s74aFuhieCWXcsbHNEKfmiQ9S6CR4TFBdk",
  "key8": "vhZdf6a88hMWZsAt6Ct7KFW3DcVfty2HcRastCcADe6hjn5qtx4vPCouu4FxUg3rCd7VCHLs6ZaMbcNvozJfv89",
  "key9": "4KXtdaxFj8QDkWNfi5psaVqRdgd35xNtbSFKTe7caiB8o92LJJ4YVpWkYiDdWA1oFyTkFFU9VnXs76NHWHwXeW6o",
  "key10": "3XjhLHpMotQazeAVvXQjBfWZyVydXiLkqberEEpsGfH6sr3kMS7TFMNjsmdAcPsgXFGqhiYNnL3AhTxgXQ1d7EQa",
  "key11": "2bHFXnhzMBKiQXXK7xG5An6DxTxVHtiugJWyEET5qorzNVjREF3t94AJmMYVz8UQyidL5XSX7vu1j7pN5ebvFAti",
  "key12": "tqKD9VEGPtdDEVZzWgkS8nY4SHafmYsDkKv847xKrPkNB56VcMnP5mNkRsoxaDTSE8qsMC4GDWtMFminmqzCbEp",
  "key13": "37fD5qk7XU837BjQ4h7eA1Ya54aJCQe9eVFUdaUAZkb3ABs2WLC17k3NCSAp4Q9do8xqYGbrmJcD8R2esCzoWj8P",
  "key14": "2kjCuVqMgzxYrtCLuEB8NCSXwpT8Js8pWwEoTJQmat7Nt4CD4GFug7NxkPWcNLVSvLHd5Fyh9WNJd2qYVxaZZk6f",
  "key15": "nXEN4ARtj44krxmFPfFVmfwiZEvEdmuvwp5BdwaAWNB1J9y3Bfw467Ad1RQKqNCUVnnHLXT4cwVQqL9AAv4cnUJ",
  "key16": "5S8Do46RA6A8k9Te7kpHRg9nufjFEByADzw37W7Von8p2LLkrYWGSC3MEp5a6FDjHVy2agvi5a2U91LkXpLTpUpN",
  "key17": "3zWNdH7wMdE4PiNPgddUKo9RX26EGAbzF9Aw7M94VA2R5UotN9TRa2cC7LSuvSoinZRfyMawahZfG7S3NgQAGpWX",
  "key18": "55akCz5bNCBNs1WcEMjsH5WqTgP5X6pXv84DFUaThopmMx43evfGU255fTxQF274EoeZPXTszzu2idP8U5EBGtKx",
  "key19": "35eMYi6pvprwejVoexppEowJjVbneHYpzPJ7Sw6vbDf9EoWGbNzes2R6aSN6oxzrpA2Y1x3tct4F5NcM8ULLqpmb",
  "key20": "tWunKDXW67C7kT4Hg3Gy2c8BsoFPoYNfsmArBrgJYSmJyPPCntHnB1gZt652mDgd8YkHJinFznjQHsFoyQPZiAS",
  "key21": "3T6mSCeMdRVGhF4sU6MLuHrVfwwf23gtSVwkdTSe9mV4mkUBpdWaJEngLtN8NAnZEaT3aHyi1TVsbgYYafy7kSmR",
  "key22": "2L4WQgAJDKLc8m3bhF32LGuoZ41v2KxhAADFoHUF6LixJif8diTQnuqUQv4vFnXy46kfFa4rHcYWpPNnEqYj5D7Y",
  "key23": "38apQD5nUj5MEr4r2mBqM8vLRAPCiqp11fHyBaTDJ7p1ZNLb3agTcADeMTXLxUHQvBv65pqzdisaipWUKvr1ExJW",
  "key24": "51u1eyezxsdTdDHYMvkGmgAwwScjwDwD3w2FrXwnfyV1P5H1HSMYEbajtLC561BAfc84zzHPntToZkeyuuXndaH",
  "key25": "pfTVRQLCrVQoNrdxLtSXDx7rzovHJWxcirT21xqiEz37SchpWECBTVHNcLWqpjMmwZsZqTgkasCgyAEZ9QHVRwZ",
  "key26": "2Ssfpt8py7LAGdU6A2dNnvwAEMGJ3X4pZzaB6qoNq3P5skDZ6n7XUdAonTiwNB4uh6UGJiUBUXBAh4DY6jeRJWUz",
  "key27": "k9DwnN2iuPG8i16hC4zXAnKYDdXiZJjAe5tuzq2qQwMKNvp5VfZRijGd8hfQZsQFf8eg73qZz7Jx1AJTSBnscQJ"
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
