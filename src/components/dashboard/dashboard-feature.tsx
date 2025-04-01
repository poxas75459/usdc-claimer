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
    "3wrfraPQZ84G3W7Bp7q9dLqNGZy7BjmVYzfKtk8stMQ2F3aa2YD998vKpLUvkQ7p51WZxabNNQx5bqzMwTRDARqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofdFpRnhStuoNeNSohRFzCLHR3jDkL4ZTtDuKbmwqi6PSr7xxSa1jmvYWALbZQGo8HdaqZjoQHLcp517qYvuDvJ",
  "key1": "5XxSJxB2gqxeaaxzoQfEWoJpL5sXsLWnkCtXMMc8F79tgpiq478HxhmiGsKZ8XBsNSRYEnVxVHDZd8HDhHPfa7BH",
  "key2": "3u7aGP21g3rjMWz74gpi72JCd4M7tyLPTcXxeFyVubzSz3hSMGYvLDyTSk5PotnbbL1tEFxf59sEvgHDDB9d7dGE",
  "key3": "4fBBJVBSWHfx4Q8sgSMLkA9LE54XJDSaqRZUYZyaf4WHTKkCvHTrfj7caLpjqwpiR4jkgJVg8jiSDVBExt3aUE7f",
  "key4": "nLanDPwU5YmQzQYBqR43KMmzpUfbYb3d9nKLm7boRcH8Z7yZQzS9B6BHXZWmRFhBLieaKmd9epbWRtXKJBBBkmu",
  "key5": "4GB32K3beZdX3XtfiKcSjqhJAeKDiA1ZfBdVvWEp6UxZ2LfsSidHKEzxSvgygpbPLTVagfHji7yAPzBZfNAfkJcN",
  "key6": "4kjrWE4MZQz6B8fpLae4yWZq5uwAgYZCitm6AoBrSLXNraqfyrVYctcjVtt3q2t3UFZMLZfrDJfE9Rr5Gx2WKz9",
  "key7": "2kS84L3yGqmodPKfoj5UwwQ9DspHvQLqNQ5mRs9srcMJyR9bqqH8gk817oVDF8tnTesSVxzTmadon84xWChcqWMY",
  "key8": "5YTXUj34P1MaiM3qUXU6KwwEBFcCMzn2AR57iUGGVeR3rTPYdy9JcyEcN9Cn1SoGeZtL1iYU31DbW6waEyD4Vqti",
  "key9": "3wARKy19DxKyCmXtATRdjreFMvR5Wa9iDLaGL5D2iL7EqwRHcxMeCQKB8s67nPhm2jiWBJw8QBwbVAG43VM5VmaZ",
  "key10": "5TPvjSqrvxqNzrxYY57sc9To4yhffbsYqKbZabGy5vgvhP7cyjPnZLad42kchFEfUJ3s1JBKa699wtDDecxYCtyw",
  "key11": "5s2bLZ8YDVF72SekUZLc2XQyt6UoG7wwb48gGYrPwVf23XqDZokXjYiCTobUoyxJkSvE5DaWrfsi4GQYTR5NVbGh",
  "key12": "2f7DhpGJHy9iVKjQeJ2Zb1U1Qc1Xwu5PXobKona17RqJxEvWaA4edL5R8yq4uuZeYCWnqjnnSFJ4DmgeCyvCsbhT",
  "key13": "4Rgw9TCvd26Mu4QyMJZBL9cM68VpP5aWjZsDni3brYTrwRGVF73ABS9nvPtj3nyY9afXWoJmUiKpyKqhnT1o5vFg",
  "key14": "49TtPiJr7KdZgLcKozvgvnr8GDEWYVX5JZEcMWGvX6f9ULKxekMuULLAEhZQbHbtAWaE15sX4pNVRsEDMFYQwPVj",
  "key15": "46eyciWNHMPKBWkLrhZhMj4s2Femko88Yw6pEQjSgDWgE6rfqjnnNZnL9XkzS2gPjgWgfNbinGomhG9dUqZpNkyC",
  "key16": "4vpKaSLKhT2GUEVvF5LtWX5BLy86Lrps1rUvXuedueABa4BH5kt7qtwgHaxPzV1iXuHGSVwBCNvQo6Hzc98ypxWk",
  "key17": "2QtEgHsPB9muJYpS2DLWXE2xHvSCWkRqf8w77TGNA3dLh8NEMjWscR1zZafd4uAqSfsqJ4AJvxCfP2Z4axGhxVzZ",
  "key18": "5ztP5GjGT7nTjq3hfaUcm4toDfJca5VkWHgeJJTxfxDzFQVk4DHwTJReNQvvGKuAsEWhRN7Gzc3j6XZBjFUvwF6Q",
  "key19": "4VwUgr7qVUetmfMz2Qv9hbV65j67sZh5xYUzfYBk5gTsYc6wAM3CRSYiyi5jZ91L5AzrWukWeFXDGaqukQiF9VEq",
  "key20": "2bHrbaRw1XPKSUjUXid2pPUun7Rpb8hTcMcUeqqHUvxke5MVReArFPkMdHG2Hqqu9itCWtJKxggoeRuooUemioGa",
  "key21": "K2Hy2dyy3svGp2z2DXHB4nTaiuAeLB5kfEdMb9RV8NMMJ9Gbz6ccRvS44G9um2YsJBzpA5tmhEHWvQNzMeC3Byq",
  "key22": "3p89kiZb9J2cuBKwM21nCrjLBkyZoq8xUDbGYxju6uHUPmA5x15vTQ4LsBUZvZXBRM7ywdUc69NGQxVjHdFWNTsW",
  "key23": "3fxPPfx95zPaXf37qXNehwc4qL39FBATLUK5HyUGsaPPSy9o4kLQCGH62Hen2UbfbXY1G5UoNTrrLHmPXXhXSgpa",
  "key24": "27gNJoRz6HKvo5nz1DuFK5j7SoK21hametgNSqZ3uxZS5rcUwctQbYK74nSHWbTVZBsywtv1ZnTktKFcaFGU1H5j",
  "key25": "23D8FscsNTNi8oLZzbvC9f85rUgXx47jAFcbVsgLkSmbAhPuVBKcrxMfoztGwNXxGfMsuWgEVy97HUK3JZTBm43v",
  "key26": "2Z7YkX6zRFvVKzvJKJKbcZGisXtEHFYAKgZKnZ3GsUG681u8DHgPC3gGrSBMnifmVURSHyUhXVU9rTsk8SWYRfTz",
  "key27": "28xTkNJE3ReFR791ZjNuqZCo4jQJyJzQ9sudfcV14kxwuEGUkewH5aorebAfkeSiY82brEsv3sXKjxqdgKSKjHwC",
  "key28": "66am41ZBrAarH3dBSNAy7WpcQdchw8uZeg64jbZVNW6diNMFn4FprBxkcZ92djpxE6imvALbJowQkUrG7tvpKno4",
  "key29": "4mYA1W18CxkqSXqLuZnU8uHLWs1AFm7V6FRBgMAjrdG5R2kEG7wNfcDs9S7Vp4zpqds3kVExji7o366PcKBHis2W",
  "key30": "61wKYfeiustfq9S7xFTNykfxVACme76HzJuc3N7AE1WA4MtZftz4iV6NEEFYGbfMSTdRiQ6o2VsCtNmxMWjCQL6M",
  "key31": "5tgAkFaJQtmf1MLQE4pZVnQYe2HR1QoSnS5XM151Q5eiEjgMzxXzyAE4yW4QS5W2LF8kBWBQDwKWL51PXb6ysH7N",
  "key32": "5ghhWub1eWa3bNYq33GYB1bFZfPCNxuqLzxCKkhFz1ftFe1SoZG6S1vt8SgGTvLmeLh6FwwMAR1JRRWZj2Un6typ",
  "key33": "3DpF2GS4sw6cTd7SJWJ1BfTXhJMGei1x9bHNXkBEGPS3rirZTi1DDmGnyMWDJFEuiEt2NHHeNC6c7GsvcWVRpJF",
  "key34": "5P7SVY7H3BPWNwH37UX2hxSDubzzDrFVZquFbVwGpUKr5VMvKCNwMzfWV5edSvG5aEWas6zrvD6wj4FL36yDgT3Z",
  "key35": "2xsxfiwNkLEUkivo4upd7pu7hNqTu3rSWgL5RmTWRVVcMqmgPfCC4L3NRC7JFnpo4moe9u1YTqQtt27AsDFGkNgC",
  "key36": "5FB19qZRR66d7fRvKqScW2sDq9EhpahfmBVei5EVsdtLaJcR57uR4LdV7gP6t9PVok9xu1JHYBDeMUiUtea96Fu2",
  "key37": "4KFJTxQtXWUTMb867aWVPxtG26BiyzXTfR9k7XUHWbU5ebZ861cBYzT8B3u8LGAvrdr3atqrf6tXaxQb74Jwoeqd",
  "key38": "EF2sNKWNK7vPLtLKZgfGENkqJUBT4GYk6ArempVU9y8BUh5JttTA6fevCEE9ZWPtwffnaL92dFxKtonyyQFvA8k"
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
