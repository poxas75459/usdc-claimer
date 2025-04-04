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
    "3GF2JQ2RNzKD2Pwgd6nTTPZoLD9GDGn8UYmy4fGa4N1BzUbXKUsn2F6qhJSXmMJ8heYmpoy86vRjvSZzvYvpW4qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyzHg2FWeNtjRsgzCbHjDcnUGXBKbmLBGt65GgLQWRwYooL7F8XSqAeGaA7W2DG9pqncyG2XVjCMRRo1UeEnSUk",
  "key1": "23ExFxuAMLmTxZc1CZJCC2ExQ7umvfJEuHowcCg2UQsQ4Xo8hHUJeJacwU86iRUHxYjR4SzB2uncvnLq5fhfbsVm",
  "key2": "5SegqmXmcjYhSmz5Q4t8SpTFsxHFdwjxvrfPvkaNoUFDKUwzTcXKPCZgggC7iYEdxfstHPP2k2gJFXXZyVGkUd9U",
  "key3": "65knyS8VUSfgRoJBgxxbvdAAGxJW6A2MEzN1HqdFffFpMhUJs84DsP6tTG9CaLLBhJtn62pbgCigm2RzqZnMnMQb",
  "key4": "49xrtqs1vaWm3hzEojjooL6XUYP1233jTp7ogpN83Jj8NWLy3z6kfczb2bmXUY5odjx8n6D662Yas2HdJje5XhU2",
  "key5": "3RYZczq9R8PPqUhhkkh7XHQovXB2yWS2PQbWQFQGxwxZkYtNg62MPPrr5sJADTi9Vnqpn7pHEvYAMAku1G1nEooo",
  "key6": "3oTVnJZdFxWecqkr9Aj5VKE9tGCj4F2UVoW6jRd3mKyBhuKoPFmm45duJ9D8t1czTiQS6bDN1S18cZLnv1bC9T4J",
  "key7": "3U1T7E5jiY8JzxF9ikxGDKSGLS7yo2vW7Bm9JBXmZKJo3RbuVWSkhPaxqzcMjzzFuf4Kn69V3fPfbY6bvmU6hLLA",
  "key8": "fsjKTTtZ1ALQ8Zw1ywGt3X5mH5qqhLboF9gY1Ua9YnQNQJyhW6FEg89ErrTozVRas3eGn8caeAmyEj76Ke4G8i9",
  "key9": "4B9rodwVByAKc8kxnWAny97nki8kEkEXZV6YnUWbfksjVYQxFdzbA9gHDP8TC1HPERRcdpRNAuXtofQVMbGz2jAv",
  "key10": "2eDhtywp9sQXNLrsZybs4QV7tsiwKyVhBsS8GMLVFMLpfny3c4XyvEui6MmU2mrnangghuCdGrbS5pNejpx13R81",
  "key11": "4FgnrS9VseRV7AHiZFpBrGA1jx26mxYxJTrvLeJAHEh1QnzZ2caxPo7FdQj8fj9bx6ubcvoZSUt3J9GraUmo7bPD",
  "key12": "3zEKsj2pt2UjgDet7LWStTi932xpgVCP3FWbZiBps2x5FR8bXfFvibuZpF9qsRrzdp2tc6zEYR3xLzPtSNmvXZid",
  "key13": "6Q627c2cdkRurrfh2nhd1zhKLN7NZfwFtJrac5TTAN5b1w431hVnkBtsgcpVYNyKtbEg5a3PogxwzT5hgY9mKdf",
  "key14": "3wQ6RSWJgykuwzfsVS8t1UtvD3kZopsR8Uwn3qZZ1od7ZsnRdnx96dUeCiSe8T8iKYFt646Daisvkz1VZEMeRYZK",
  "key15": "8E2amNvRSgxwXrjCvZkLVPvJcbQKdiYNNJmyCQjb8rKfu4oSP7KLy5o3YUi3vJExhTKtSxAv1qK4WTxMPWPYru6",
  "key16": "2hWQn95ZveENgyFaJQFuJuateAPf3j3Z6QZ59oy2C6WYbdEyLAPVoQa6p5fGhgBSBqC9onK3Rm8zdxTebMyvyNoS",
  "key17": "5wWfm6bhddP2jYkZm4idxdRNN4frKAsF7b5YhPnLMqG1KQEoJKcyHkhrZn7xnzFvNebhgQ2VNMpSLvUVgkoeuNih",
  "key18": "5tcRjHJ1so8PjCbr859e26tVLmYEnMwHLTB2U7aQBgpdtJEwnFPvJKdmPz4AkfeRhGJx6MQLFnBeYFPRjUijzqy9",
  "key19": "5EhYMViMdFTuzGuraVvnmm3KG2QnM7KSr17ixpsEXNDeiisBxeDBA14PTLPuqqBPLxiDNAqqVVSHinQbQcVP22uu",
  "key20": "29RSFwq3cFpNpyXJQu74pmCqmjAah8uccQigsfXNSiBk6GDk1xcHUzWeqKGjkHWcUFw1bVfcmSj1ngHQi6kqDQr1",
  "key21": "4BTsSBkB56rgSzhs32QwWkKFMejWM3AvEEebiDhj3R72vfU8gDrVerpku9DvNCmPWMmqjy4ewbesfaKxwNLy9TAF",
  "key22": "2ifv8rQCQNk9NQ1vaK84tmQQiGmaCdEbLqcmCWGmVpjKAL2Eg92STxS72P5NDKPEW7JWX536yfhBYLzzqxgJZq5T",
  "key23": "gcWBhQYy9o7f1hiWCweSDLmFk7TSTHFo5vPheAgjHLhTbp4m1mJM2j8Xu45d4BhcedD614Rhi2jcsvGHYt8w91A",
  "key24": "4PP8hLzbXtnBCpszXT8rd9PsPybuJzg43fMnETCrWuPLhohL2M7ukjokg85TDaWeWRMUU1sMbcjFxVvMTNHyRNU3",
  "key25": "5HRQ1Ejn3UWHgpsg767uxjcD1BpKQMUUbtQUmnuWV18FZ7ZuAiPRPZA7aL9FhsLFKQiTQYA3DSMKwfEtXf7Z2f8",
  "key26": "667cmnLivQkKnLLdbP7EWN8KXvAnNAbC6thgijs3wiZx94uwBhYRfApWQLDoaVHT6rpcLcNQ85hbbip9cpA54QJ4",
  "key27": "4NKRw1cem7555zLZXtCpKtxVZb4VS1fQJTmy7HPKxqAjukPxnnrVV7Mhfr98hCdTSxpQohtnoZ4kCC6th2Ro3NKj",
  "key28": "3N3YnvPzJxj7geuNGca19z3UYDLREohVTvbAeR2kHkEsKJzzypQCXiKDUnwUfTdx5igjxznyLuitDKPh1g6AvR6u",
  "key29": "5crNLpzyuqrW37yz67AqXJfimLRLi8nyYmt67Eb1xMgq2aiJ9XLud4TtPFrb5srRexEucekaEo1ccvvzMYKZLj5c",
  "key30": "3Hy1ctRy6FBr2BtC24HJBkCAxPHVZaURCrZh26mkvQCAh6vX4fDo8CPpW8CuF7GGqR7UjM1uGubFNqNW8ipqs2Hc",
  "key31": "3Adri1kaGLhor1awzRJyzaoj5HkHKtk2vtqaFgPpCDxQ7GFoT7TiHJEGj5c6fVxVVHKp17cU9JKkGR3vcCK6Yhb4",
  "key32": "4uaaYe87V1UubbH1MH3TfsWJxbtnM3wQAfnZxLDYD8hNXHPbbBUHk7W7fZ7Ab565ERaFE5HNEGwYhaLv63Rm1yPz",
  "key33": "5ZvadU3VRmGfkhYHXR7jrWQxjk1RPM9wKxi8RvHHSnjW7GVyq4smXWpT1VxQgCqcNZbDPsPjzAkyMZBaiHn2DQbA",
  "key34": "2LRChCVMUwge79zr5pKCyMVDVGxkAum1b1CEh7CJ985W4v26KbjQwW6Hi4hZsgmfYwRYjzXkwhm6Mkz3WpaZ3y8C",
  "key35": "4u1d6wVkWjzAKnvUBt5JwBDgPh79ZyqJdfbLbSNK7c5icsw3VmeF4uycScFfxxQfstRm7LUGPYEqxSGE4NjBaYjP",
  "key36": "2dPhGxSMitAuqiwpcfZqU7SmKd7ZjqdyjZGCRoyrw7ii8xBvyEi4ufaYdNHEYzGorYBm1t7rBwZ2yUxyAFxDyxPL",
  "key37": "wY4srjkSNviiq6DeE7b7vyiNBFB8sSyQiv5ck1ZiGvDQJxojZBEpBEQrDG9WyKkHehSAL1QxitQUedaezEMBtmR",
  "key38": "2b47hxuJ6P4BiL1tx1C9yLhq2vDYsUaULyyXqcL87VndrjHkJ2uAXaVdX5DpoadUz4uxU5FAzuMLPofBPznDLh6M",
  "key39": "tXvrjFtKkES3CaF7HCKjynKpA8NxYF8WYqccubeACVYVQRCGVAE84yWCgrgbrduy6jFEMkh6BCcneoF1bZbe5Eq",
  "key40": "5YVy8X9837v4xxmYqM7tz13WFZcgnHbUciq4RSv9iPaNkv7kW9jzF4HE5io4iToj567c61nHtpykK3kCDDQBQWpi",
  "key41": "okzhB2iyn5dmZyL1muaLP6GbTCcg25VzoiL6mMaswC9qDypVUpD44DnnA5zidLnbC9acVdT3FWDJVAzPYHrrj56",
  "key42": "62GWM8SqVU3WF5FbKFrcZ5p5hAViWb5CC1UytYBMrUFthUYB8g7qggKS8u13JCbs9BpNYLbvpKmKH9HAyJuwe35d",
  "key43": "5sU5A8EfUGHhmLmiG2Eaf6GzZEwSB1mH23fPengMRvfBpNMcLXQov3d4gvTwbA1zcWGz1wEr9apnrRC7xyGiJHq5",
  "key44": "QbJEDS3uMkn6G745n2tLUcLqfynf8MYTSEyV4FzVQVPkzXNXEra93LiDUcusa1gf4sXvrHuWHZ1GbUw2RoXkME5",
  "key45": "4q1MVb9o7ph5CdbiMs31QXPzTudR18TDUqUQ8SbMLfdTmY777gdPCbnXPjcJnuUuixY8EqahexaEXdL9UpnKmVnp",
  "key46": "4aH1J7ooTVjj3ryTvcS5FYFhukhMmXFKwreqZdfokuTma1wSc1hY2wUNE7KKQmvMaMxgd1SytiNWmo1YEXqGqcvh"
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
