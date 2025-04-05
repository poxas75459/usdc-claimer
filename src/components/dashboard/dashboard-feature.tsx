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
    "NAouQcozrSZuQufBtW2WQonUfLZFz6ak9ZfgQoRrdw8BzeqyQsAgxTfVXh8REdFFwhviTPWJ3kHMZBt5zN3FN8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dBGw5jG3n7PRuEFkKkNXuXQKCDs9krF1LNxi2amk9GdkK6wZMMt7XHeescoi5yjRrPUAmnQMpRabc4c9j4wdSLG",
  "key1": "3BAYMB7fMLgScaSJ5Fb6VBrjGFskWjfZYsfwFaaMQoxsQCnuA6qNQdmVDkjnyxQFyMu5rEEovMXiiQ3eknbwb5Aq",
  "key2": "U4FBM9XXJ4RVhb7XpM5RFQddCBLt9csAeNUbCqLoZGJKSfiLR6E5WWCogNNbGcX5R1odwqPnDBDmb2gTKnhPF1n",
  "key3": "5EcRASmFNjnzBYgUgKNx3jiqP4QYy5M1ubk42QDv3WqijakFn3E36Hy7SJpbbc4XnuHDKBiUAgPJFp7jVYYFS48c",
  "key4": "4HpBgyJ78m69LAh3KGyxnX3decsoxPtDoKzMzT9HwFMM3FHL1ds3b5pGrVGwxB3c6J1hTRsnDjkrAE3XgDowADVg",
  "key5": "3E4W9nHDdarcGW61NV2Uiwvq39kv5caxpAqyGoXkVLPA1U27SzBQvDbq9wYyRCNdzVGrG9Ym6KQnvja2NHc4B1jT",
  "key6": "5Gei1BWiqS1sA27SNfYFEahCEVhKed6xywKLdR9VjSRb1DHmYzyzskCiMRcTSaJRWaqxbPdp1BNb8s2VfZeDY6KR",
  "key7": "2oJ4PWijNErNuBUrc8ZmBbCTNvf7y3SxyeGCUkTBB8KetCR4gYwN2F6sJ5wqf9Dr1rH9QqkhvSPnHnxqScFTFFMX",
  "key8": "38nrjqR4ANGSTQZqquV6h3T1y9L9Bhf7EH7eVvn383cCmPbicvLBGpJKSiT9Mj32rBwYcXhapmpUn7BMszhkTbKX",
  "key9": "2fjEc4D2MhvzHHMqoReF2VWEUZmQ53JHeRD1MEsQ4pH4GAKvR16Y9Tep6Wgad8qGBEkgd9NpdoJFGqGARNRSqAur",
  "key10": "66rL8Gng45C8CqzHBy7SYHUPB7Sy8UCTey8FQkMFrjaC4rxjnKEJnjVJBHF3jiWSkiRw4G8tHoGXRMTwupuV6JME",
  "key11": "39hYGEqKKfY3JS1P3fAnrBrJ64gH6tCFacSFwtFBJCoW1MhxRGBwtZWWshvNczi26K7r3AeQmom5sKmVqeNvTmYG",
  "key12": "nNd8Dsh3YFLkxok1Djsd1onQrWj9VAyr2ApqUE7DFAxQFQcMBGmChvLJu6ThwT13LTqY3r5hxp64jANmBEDj4oU",
  "key13": "2LHaLQT5jnjg4yhovfddrQVK8Di7FoRw4F2Pc7Ke3pyozcaDkSrNdz2nsos9REMdK71ZbD7mQWCSsSYmmfaVMZHp",
  "key14": "8ki4i6a6tRFejJRuDG7Gvqn5ne2n4bUGLsCub6P93L5aP6rshuKZaQ7zgfQk7mmpp9wKL4askd6XCXfrGC124FJ",
  "key15": "24pfXPztj834CiEVfBzzkSmpVmZWUZxEmuxXhHB4PxyuB9vTvWKY369Dd9aJ13KdZRRX7Zev1qA77opURgd1XhsB",
  "key16": "5Z7xNcYf8w2aWdYTC5hHx9F4KZZ9DNGct5o8gcDv7unN9x2pxKbHHqiGn5pnvkfd9fkS7HRvmzMcL6vtEbkeN4Km",
  "key17": "2DyKgAMzQ7j7mJm9iX9Lq5PxpRRb3PB8GYHHyKheq2hubTjcpUNojjC3FSAYSRRqMEtu4YPKEuF99ZXuJe65jgyC",
  "key18": "3x8xabDf6xJ7D4cYmcS3HtTbKpzEZrRsoG2MGZQivD7Cctryv914THweEN3rFkUBr2ZSYShmTsRJkTKg4X9U9uUd",
  "key19": "5LzoeT58jJdAfArR89pdTGTe7rFeWzkVX2ndrKVCQH7xYLSZYVxzLTeNQEwUi9cbgmrPrVPHk5Tt2gyKYnL9v36b",
  "key20": "5VBenfbQri8pzRE4FfM1BWmNw4bW7oAEimEbbJtLQVwQJHSdrvSpYtcE3amb8YAZ19NFbTXgPmii8MzjChfPdZaK",
  "key21": "RetWjWqhiXqKMPdSxUbTGwoxYJ2B1N9YyHMUdhji3hAsQH2ZQ41wtFfUMMwQoZKga9hRxMxyHEdPdpj2PcLNQtQ",
  "key22": "4sSWvdSweFJBx7vDE1BQMnibFa2eLGV6zAKvDNUYWMbnZcg9w897Pb2NYkQSgNwXRLQ6utoWoMrwBuott2g5DvnE",
  "key23": "3ACfn46CVYWBqj8SiiDAg6NAoFfWaCCAEKxpVa8bkmiaTnxUZK4G7VYS1PuBm3yBERqthLZJ5rbjzMsJEExZZJy1",
  "key24": "5b1Sxj319Kd8h6Tuj1zCSgfsWS4T9Tt7XUCrEk6MZB34a3rfmH1dVn3Lu9oFbubyyhvp4fzi3d69LBZEi5ReBQur",
  "key25": "3vq3xPzJTUfz5TFqzt9wwUdjSJrKiBUnpZd3uzdRhBUK7e6r4KcH7rKMa8sfTDFFoV25z9AwDJVnM9Q9r7Zeizuo",
  "key26": "2jC1QeKC13XfipezpKZYNMKMRVS4RB1n8DPG23pDeoA3Hp3xWLP5chwHkXf96iVFYsKi1g9wLsPmCxULNrF7s4mC",
  "key27": "3UauPnLzABd4KWtv1xPPqfqXkScaMFcPU87L14zsGyqHd5De8bPm7Kxu6gHJFXVskgTw5YR6UJLLmcKoi2jUeqCe",
  "key28": "vspAPMmvTYKRMTQdn2T3Nv3rcreUUGKHiewi8nJp1vrtjq2iXUAfivHxGvgLARom6EZB5pydK35Q3FRMbDKz8F8",
  "key29": "3YpeF4m2SK3CxXzpUMYvztpK2uQwHfp9J39Q18RwAWLdEqpzUowk3ooDh3nyarRNiShPpCXi1C1ZjLe3XBKD5dqB",
  "key30": "3nEpxd4JKkCQd2SFiJG71EBcAazmYjDVb6RQeCSRo376CqQAzs7bGVL2Zdm7vHcC21NYGgdc4CNLShBdFTLp49tj",
  "key31": "55PiwDcgWtGXPX81B2LpPuJtXTHbr5XpV6ZDTvdC6zAZ7C9DRTAqrAdTLF8KnFT4aUyT8s6RrHvmQbxLdn3z7Wzf",
  "key32": "36JuaoX3aRTwX8Aq3mswNS7AyYqMApmugsmySYQz5wdrDxLepBSFKSatqzYR6ibrHtRFdUtVZadHfVoYshQjkw7B",
  "key33": "4tmNKqUyA9Nsq2WHg3ypL7XB7nZvTiyjN13mUTu3Fu17yaJDf5Sf4g8FzEz2qXTsJNtw5n4NH3Sc221aBHKGkiyP",
  "key34": "4eeuHWP5LvsjYRxtzo2TAmBkGv6Yd2tbK9UntMuzxNAzQbs2AqE5PQnABm2bdrti4KkmwrTrmJanMj6Uyc2rk9gs",
  "key35": "3ZjJvpZ47YdcF2UxYSfKStZdZZDULnLXBSimKev2TZhFd1ut7jwV7Mc3tTgtRqHGoqFokEuQWwVgtWrHQx1suWfA",
  "key36": "4kPJm4jKVnV2JXWyo1c8itve2eGyjAXJjpE8RD7vgFcPgZGyTYiJerU4dddMAyA5erffWZNT1Ww5YfP22S7PdTCx",
  "key37": "RR3LGWris4zTkmAAJeET7oy1GbB1XQUHzB6K8maT5UYVE7vY9Fah552CJXkSEqACGTMEqdbFB4ha6gaFa9TKVb5",
  "key38": "3tNHAqrfYZDTeR4sSupq9kGKGWJ8QmUPunHsnGddE3a9LhvtJnspqyy12B8T1SCesGSVdU3aXbMnwJT3W892oeMa",
  "key39": "2WFrMJZ4U1G3xyX5YQBGFXGF2SvC1B5u6ftr1CH6rkL2PqnJRsJT98xge4FeLUtWj9Yx3W7a4qtJTjjsWjCLGSYm",
  "key40": "37TzsJ3ioi2Ykj8huMHw8cg1b2Lg5WkoKLy8i4E5XMEKG56rs7LWZr6y3PM8qwAkQwxRZ1VEfSpDUw5LBbcSwZ82",
  "key41": "2mZiRPA9fiAFTANyfCRvbeewuun3oac4UqjjdqsRMnvxhUrpzW1j6E9PEc5fVFt6p1Lmb83eM28Nrwjs6CwRhBbP",
  "key42": "htRwoyTkW3ucyxBACHi2cdDaVJ6tRkddVAQi2SSCp2Gz4761q6d75wyW4okpoZbGEm4PoppQ3yT8NC4dPr3HJee",
  "key43": "eKYXdurkgfb3rgXW11r8wgAnaRR1tjQcX268LxuWnMGDsVMVUDPUPtR94WCbH2pZBwHg6uVC5suDWYbabQjtdAF",
  "key44": "42wt7qoL8CW7aPXDjccWbMEwqNy4rs4iEFGxCSA55ZcYK8NDKjEXQwT1xyFUQ3SuxeoNvgvow6iMA5izdDnjCeaL",
  "key45": "5gAFG59byt7aDxUi8tGTjxkV4MgL2rAbyQv37JQJ4R5LoqYMZF9C3jRUeWXDjQHMm49GQWSk6jYw84aPoXxp16DS",
  "key46": "3nPgac2uQfWa2Xkod29Ph9AwbfnvBsYxhed9cRLn6cNokP19HBEKjrp7KF22JqdRYnAreB23oLcCFPMdxGrYz6SR",
  "key47": "4zPeDSGNXL7QPpjda98CpTAgCJ3HgyaafjyKjb2apj8ArUdUfCm1hzgcvdD2ALMAaGX4DZNCE8R86Wi18YUSt9rU"
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
