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
    "2KXWPKz6cmVa9k21jNSadDffYQhp8dcfTPEUUHtwV4jQkkVoKYtqhswzPLStgtytUpKadFv8UjZW18qBduAswQ2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LRCyJU57sg3oNEAkWPFD17Eg6A6EZMy8cGZpkUNhbfNoggbqVQqvtvBNEJFKVSPULk637wYLTKEWqEuUB3CN977",
  "key1": "4cqrXDKHbqXLiLjosiGxpiesAgSAjaSKLQuAMQhDYikFZZuBTUqVx9jBpKUPdGUAS8dRx13rnyKHmeQUnVQkVNEU",
  "key2": "4WPo6KyZCeRvQ4cHvCBULjnuPbak1FBFQgrRHZgmHvR443jHbrVsVeg8eMrUneFcbUp6hTQUJ7huHrnxn1ahZ5tm",
  "key3": "3oQbeuoAL92uJSCcNiGeFEnFC3XqZtSZEou9KGfdBqk4VHPpPgseYy9dMZ5QTwtsN8sP6bHAWiHaqVCFzErjDwfZ",
  "key4": "5UXbQMsoQDudA8FEXmMfUEqFNhjjmbyy8FoLHaJae21aJCYYf8iP7pUcPXxUHR4bmgW93Vpb9HVCde5P3oZDE8dv",
  "key5": "JapiMhHFb56PqA3aRgfCz2wfkerLZdhMnpk3xKb8jUVe79M44mDrS7ECMRi27pyh2NwWkPVChao7F9DCBnLdLhw",
  "key6": "44eGk6VMMC1eKjNwy8f72LckXyNV1JhU6mAapxyVYwzCCC6u2dRJ2no5Sjmqytq3oUv9tgJp9FrKYpRtiZTXgann",
  "key7": "3m5JSyTCPc3ijfdzq543c3sJiaCLYkgni5iMjTZ7Aot9Aa1Vy1aYBPpCUmSeaigXm5kg75nknUBFxmuYasq72sjs",
  "key8": "5sQGyCeexUS3W5NF4fosVjQVCe4okhJok3GTAmuT9yFnXkh2A36zEyinZ9S1WLwBJ3bfjYkE965sNHAQ88zqEyK4",
  "key9": "bjUG5RMmqtDcmNmvN9QAdsBCNJVfDzrc53G4YPB76LuVHH1xTojKieEn6PgCHM2vdcJZZC8VZomNMjqdoF6MFqn",
  "key10": "3KjtXFTmNCwMXfJ3ZBSkb7EBNTHS3Tw424p8hguDggnRrtnZCDtiW2hDHnBxXCmDwdiXFzT83Th3As3gsiT7Njex",
  "key11": "4ccqHSQv15xzkJcQ13cniU4YRWjd1jfguqntDyQRAWrHPQUWpbifiY5j4odSnHYWKSpdDeMWARYFgF8SV4aWuQL3",
  "key12": "4Ko6xMTRpyA8zaw8Kgb3CHp4vbpm2eVHWdoGMeWnXssYWRAXsQkqdy5yiFVTvgzPCembJhmP6p8dvNiEnfXPhtKh",
  "key13": "2gDEEyBTUEAZpyYkx72731c2BjB77MT7JUFkCGz2hFp2vEhpB3jDWvLSbdfwwqKRS1VaMeZZjuuzWjNAsQ2GyZjW",
  "key14": "54q6tZT7c7qeoM7wfFmh6yzGhGwa7JWLxn1gmoiR8FfyN1BJmYhJUMgKg9A1hiWHdTgqeRL3ZErydffghwWYQbhC",
  "key15": "5NgBTgZt4pRa3bvJcfNcgoUKgmceE5no6VyAjfbgUtVvsfo4qgkfBXMSzyosd8JTWUc5TR7fAEGHLMTCGGwgCMtZ",
  "key16": "25fuohx6XnbFHzHHUcmthu6JAvwR8MSz2D2uDxvMK1GXXm1mJ4s13eLk8CwCfr3anokfj51zMz2nnmodgxAy3y78",
  "key17": "CwYuAZRkAVc5bRRUfh62f2kVbUwD39kpZn7CunVV6u26jzGLMgwm9hqkN7LsXj8k3ZEJfBsUefrFzGzckyZbY1s",
  "key18": "3QKs7E2GzJDm6Tt33VYasTTVsM5nZUS1nvKr3ZHfSMHngb8Y6mK96iUgGZdjxWfXLq5UCYDh4tXST5v4RQZL9DMq",
  "key19": "2fKNHRjQbv7a6uFQFbkdb1ipKJJ4Tjtz6rPvYJPhbW9hHVZt1F1U2DFQpp2PbRvrkL5vsDSRPjMrsKfEzmame1tf",
  "key20": "4jaxg8sGRdZGwg4tECLF4YhHkNqPNdJKNNC6twULJLfURw3UN9SFMwGnpr4pNJ6eH3cjGzdHex3hPqLindPP8tLx",
  "key21": "64vwAusqXnChyD6nHgcw2Hyis28RZt6kJkT7syCt3wJ1yPFyEaHproJz2SwvvfnK3KxwvPmp99zmDFfQwLG2Xagn",
  "key22": "3hPmwsMwEKzRoYmzfFiRsaorSN8kBLCDYU4eY8FuQH9z7aj47pVh8iK5D8nZSQEKVtQvrKA9QS6XVtHnoVCLNrph",
  "key23": "4Y46VRscztCQ4ehFbwMiwY2yv6YkckVgWCynwJ4wg2vtE57FZm5ZSG4h5Myktz88R3KUG52Sv97JS28psY1uPzEF",
  "key24": "3zhSnjJ2iqCQGY8kVMzj66SdE1fEnomU1NdqNNapDupRBkCPmPSNEiSst4HTh49BopHhMn12LmxEZmYGHw2eoYnK",
  "key25": "2kMf9SJvMxEU1Fv3T4fCGz8nMykyT2qBvCJZYpXR68yPNjVWG4wy9Wxv5uEmuNo1ZsFrM6wtF9jSUuveHbkob15F",
  "key26": "3ukdc9GKQ3jzD91yjXbgbk8V7ow8QnCLCFoxJHpDWdzQciFSLgcWR9pQXWdYBTBReah5XJPz9AurStrM1u8hXzix",
  "key27": "3VLbQpQSDj2EiimQLQnSNrSWycLGqS8gCwuQextmsp3ZgCxNeFxbRdEXZc2K5XJ2SjjTPvCHAeEZBD3VBa1jQqEz",
  "key28": "5BAbAywBATFCk4NJ97JQQAru9WZ4jDeZpnmFGAgW5SJrH7mBvrbKcPKRFNQFJSP7pBDRrJQtVmKm2maqGSapbeXy",
  "key29": "3zExXzwYtjnACDE5P2gYvhbxE5NBu2JSt4vhhFeBpTSGXiyVEzj41qP7dRoP2yeWkV8mSXGS8m4W1kV4g7biHoGC",
  "key30": "67orwLdasvvCgh5vy5SZ9dZFXoFjJzfPaRGjVCi53sCweKxznKdAQKSETzX5mFQasW1dwXdsnXddBvKfsHJyS9Bs",
  "key31": "3LJGSLvWDQmTtLfwUqnNnm7guUgETDcDa16oFvenxRLCR63ETcWr5diSnqAP52n2dySVzbAK6JTAo8xK1ECo2Hi4",
  "key32": "4EkEfuHFcFgJ7QcQLHjEGP53Kd6eKwWa87h3EcVdRkmyNj9oiKuzY11QKw6yzmMimnikB2T8Myid2YqyppvQRs2C",
  "key33": "zmZfrvGve2Ertdoj7amFTu8bwQfrbfyMt5kF7RmGYm3dPdXTWbv6pd3LD7qYo761XM2ExQrdy3H8Khuq7Y68TCs",
  "key34": "2HL9DhzXBMzonxcLtqZhLaGJmhNQCuuLPZh6KnqtEJokjK7YNT9uH8jqdQxjzUPifqQdcXdyi9Pd45y7QE5e1fvJ",
  "key35": "2Rb73tk1zJ6SZkPxhQv5jkNK6tMWwWDqdqP3uZCoXpBaqQTu36RNGVYfX8BjbmZXrGjECEL9WsT7k9haZQHZJag8",
  "key36": "2HsA7KLhQyQAqP5rhtNQ3vY47bjGhnWKUXYTapX3WSmMvbAmFNrVUCC74m39yhq4CuZo4rRHxtRcgnWNUsuJeKZF",
  "key37": "4SkhL5edTmCMg1c7hKHVjFfCH14q1fWEY1CRoNfBCMx2hWpEkBPNFKfsSFqnBDhucbV7rpPRmSFvdG9vxV8gKiUQ",
  "key38": "4tw8KMryBiUoyjs68C6W62Mgcrdau19eDGUBABMn5RStgaZhXeFjSGjhWjntTDg1XdGHqWWEamT5xorDRYVqfN3K"
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
