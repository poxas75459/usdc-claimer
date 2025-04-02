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
    "3StZ3gGpjstFB7rQ9km3JDqYeCiAaHo5SVytgCGnEMkNvh1iBN1SXGrCA86iVxELziJErW9uqy1d8Pa5H7qAeYQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58TErzn1QsBsaW2tEcDTQ71RBFWBCovGmnqnfQjUqab3DiCtDTAgyu6ohg5SywjQ83i6HoyURoisopEfmAcDPJ8A",
  "key1": "7SHV9mdCzrtYuJHoTgb58knpJJJFtKYa1wUXFHY2PasWYtgEr53yV5i3YXjksjRg1SPWMt1pnSjdB8sEmzn5BVz",
  "key2": "3CwV1eH53wCqnNrXvXhctjyKxPKN8e4c8YtTQ6gyHCGKijt3ua5T8GKeKkDVHVh8DN74obARCSDHojz9vC67jP1k",
  "key3": "4akC22VdfLwz664h7n6PR4S6xLEL64rkSbUZTRa1JsmUZPVBYiiE1e2t7tLgD5UwkzgwJRTrFERe8nufVBnUdFGy",
  "key4": "dPr2d8b8Pjf3EyCuUuANkpaEXG17SAbEUmyRwpiNHx1XW73G2q7sKr9FbHBHJj6vcq8vphGYMG2PwXGyxoqMUva",
  "key5": "3odmuQ5DBMTRRDPxcWyTi6tMyfK4ipVYuuT2MCFNVWknstjNauhGMPjLrS4mXTX7qtUSURDjn4irxQqrTPhWbSt9",
  "key6": "33yNtmqNydE7aUJKa9iqqxQfvpVZi59qtqob7xuoXFGCo5WQyZU3VDEck1EtsWfcPBziRFMdJtufurxQqm9adfvb",
  "key7": "42rcVKthwwhfPHqW3nbXDDma23tEdUXoBniRop98Bhkj4QCZm2sBATMDz1hwdmzjMvAnHhywrCZ53VzgAqyGFETY",
  "key8": "3WeLVcz4canhi52YK677tGnfb9nuwoRYFLxA46hMa7fcdHWMpqGnGLDSrUSkqU8gKCcCm7CY8Lvtyd3QhdADfStb",
  "key9": "2tkrSE1ZkjLib7gE93cw4uG7PvHMZEpC2cJtLZTgTibDo15P6GGwBhXLmENzfhPXo13jP2aNamwnPTJzra5KHSDL",
  "key10": "4CxeXw5K7NTzfM4tqeHu1JvRMEH8p1J3p4rx5V4Soug2nzXpmHp7Te4FAm3Efs3G2vq9yz6n2FMk2BQrVEJ7rLui",
  "key11": "rYequBUCZ1LqMpT2baoQijNT16GAWDrTPwf5WG6UwaESVJxHzApYe4ogS59KrXEacPpzzcQYCm9FgequzUTH3kK",
  "key12": "3XvmbrqjnHUqMwUBWk6iEfnXV2U9beewUUdxFcauasT27ESTchgAZ4FiziWjYecevRPvztKUnF7rRRtJBQcX8aKw",
  "key13": "25cj8jm7xhEfsKzAqnu9iFyRRaXDJz1PqBwZkGPB2betGTcs3zSQLeHbuCPvt8pqJwiXMAr6CyziyGL2HKowbe4u",
  "key14": "EetVNW6bHUL2dDhMuvCaAiswUKUtagAeN8BCSWwMHYifsTdJnLG1a1HqSobVbxX2y2bpCvJi3tkDQ3mFZx2qgSx",
  "key15": "3PFZx5LthGnLrSqskt6ugB5T19tcvkm6monnXDY6AYSKHucwMaJuVscoJ9K6vCtk4gLtsntZvBRmdsFeg2S87JPy",
  "key16": "sKSHq1iNrXfERfDZV1g5Bq4ZEmQ8nZA3SNWob2n1HprVyMdCX6Y2UD4WfkRUErKHRmfizNQ4GKSUdZdPqCUVkxM",
  "key17": "4h44jJUvP4msGSLr3VRTCD9P8zZSX4wD6WQ2MPg6vMkccdgW5sanfQjVHoVePASW8dNgc7zqkHJvDEQZbVqndZjP",
  "key18": "QpovgsuZwJNfcu7MPJLtUCNBNRPaxaND7NgXjsh6LhoZwaerUNVX6bAkbFYqo9qUwDAucspD9YLseuxynHcRALj",
  "key19": "3MdEvsfhFfigcGY1Ti1FjiJYzTbudAymDkE9aKVDcwt9M9jCavmxd4BsEi1KwaUc3G3XS7Ca3bvscb5qKaf341gX",
  "key20": "4skKpNzShWYL9V197uRgzBQpiozVsAuBfdBigYt216Pyfd6tbfZZ6ne15JHHw2j8CcAyQSk3a8j9nM3ZfezRMPkV",
  "key21": "37bd3bQNobcRuwtphBZw43cBVEFGpCg7kdJyuZg4tycXFgxk7YadMCEfKEMUQE2vMWCGBuF4iCxyHpJ8J7QtNG2r",
  "key22": "SihByR3XPERnWuBEPP6dxKYHv9JDtbBMJgHpP5oSZpxiEAes7uKwfRLLjABUW4mBN5jTYrqDqATmNqHpSfkPFmB",
  "key23": "5sjFnJpsgNYJfbr9C3hVnvE4a2eyipthqkfyPX5URzbWTzYRCnk2rnQ3FotXjd4DzPGheQDjfs6qpmpZQqNYfpZR",
  "key24": "2t3D893uh5NHBFLzcZNNb7Pf67YtzbuYHou8QErikq5o7XWCFSrVPaydtwNjRb2omr1zSPR3ELcK23z3C9WbLD2p",
  "key25": "4z9fAUiHnJ5beG46QJ6HCNMKi1RVNssfDiPqbw39b9dep1x2QEbb3o5FWX5kDi9xup61LMpvjeiwFt2raNbdNGnQ",
  "key26": "5Kt6xa6Uzgj6ps2c729L5t251yVF3BhdUCANkeoGrKNGxjw89MKHeLKrtqMfUBgTJ74BNbBy82XK29W1x1iXYnrC",
  "key27": "2To1wkP957Ah3j4hQkixiHMrXX4H8Hh3iHABLippN2CMRdp2kU4UQ88irMFYwadXuj1QD23ZXmcz5cFnQyXur5sA",
  "key28": "4NX36qRxxepejtvs7envbYNmjL3ejheUwPrrRvmZVwuiY1UQctQbFwxnNB3MS4MEFhgtWGmrPnxvGMQGThJM5sWm",
  "key29": "5tUiKvEGLTdsWSA8AYMN7BcWTX87b87KWkgYgWwj1uHwL6GCzocg7V5PhfSm4kaBhZFTAJhcfLzPhE6xM7cbhpjR",
  "key30": "2N5svfTgLUzVa3vThNLNJ6gA6XScWmW4aRFqmef4k6G1PgGVh4JHwgyViatvbt3naGpXUkSCQ3wQaVJJuGqBVUL3"
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
