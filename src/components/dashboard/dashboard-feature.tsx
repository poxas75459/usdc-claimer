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
    "5fUWzMkJ6nEsUk3gTgsXTaeyGTyLJ14CK3aTrXx65uGgrKmsX3sZALUMTFfTEqQaCQoTQgrr8fAsMiToV5KKtmUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "utXxXq7q7AVpEM9gprKuvVYRwssNiu2xzYVDeoB4djEoBLFpLXvbojRxeRSQFLXccbTzyM9V4baqTkudAMdfswt",
  "key1": "56Adt98Z5F4o2Uv4GKDcCBxzD3S79SBQTkT98MjbT7dxwiKQoaUDENGk2M7seKMGwvjTD8cvxz1wn5uN5TDXp2D4",
  "key2": "2sMSLs3xupzftsKdn6XcghLxob81UkKXhzDxUMRbfoHZGxjp6hmpHjvzcsD6zvf3mLJJMEe8sK5X462fvkKgYuY",
  "key3": "39rphjK5Q7LFjtCZrpa1qxBzr9u9M1CKtCB49SRTSXh3XvmLDDbGXbxMmWTKGfK38hVSJcDopNzC8oqJQqUwMJWZ",
  "key4": "2dUVQNy8C3kTN52F6CsjhY87zh1zoRXoqT6mcoCuQahZF5NaQRDYPx5861Ugt27qMhRbEPChDWVnJUWsryPRo8Yk",
  "key5": "2sZjkXczViHbydvjgPM1yQBe5eySNLFdQztNiNwKFqQBFRZ19ZiDp7MXukbNVFYhGmRSvTpw3Pv4u12o2otXd3Lf",
  "key6": "4KSGM9bHbwhqU6uZqCrRBtkk3kfmjPvqp7iDz98rcqmXXKA3C5yUP3KizJQWzrs5mL1vodqE1b4PHEr3ZsWorJpZ",
  "key7": "P8A5Z2TaVvRdKroS3LmnRdscvVRuk5KpAuX2m8CH97L8iiksH6MC6S7W3MUXrjoV8GkqnpBY4BxpcejC56mzzf3",
  "key8": "5brH6KKk4FAud9qf4ArTix3SWM8pf4TK6oVJqxBJyYsi64GjLxY1wdAAjpoCP4gbVd5rW8VLugZU2kkyLhMygHxa",
  "key9": "4pZUhZ8ppRYA2795RDASkgcbxHMeFFXMkoK55vLwcYKurVvGke1LUXnzLGQcxJuCJDF1qYWrcjbfLHf7xESFGsko",
  "key10": "23XwK5vDAMx5TJRAxXBXPX1TPASUAFj6VWLTWp3feCpdHnLodH82ah3EHmZ6yqMzbwC5qCeiNsdMqgaWeesLVeuE",
  "key11": "5Et2VSiCwr6E8bXqjJv7itfh1wzgMm3ksgqficBjigikmFPgS3ceqV4tHE7bADg76J1KL6GSLgQLXB4GHq1SqC2o",
  "key12": "3YbfcRbfPmpSxmuGhX7YC1KhRiozqQhAsWkZKFJnPpUErMCKrVu1aw7xynaQdyeMu4TK698G5MguPVy8BgB7ZXgQ",
  "key13": "2rtmpYDMmE4y9Xi79vd5XHNdRLtFaYQe5puq41weSRE7n3N6UmUevQBbK7pkaJ3LMiKisS7kupPkgAnhsHxoouiZ",
  "key14": "2ccqbYPVc3fEmLoeetDH5viBdSSzjta43PKSSvfTDCS8d7LYJf5UXhPxXDCFb2eAhWJLC9MCkEmAqG1c8YYQky2f",
  "key15": "F3ADyjZx7xiju4MTjhmmiZLKtsVC1uMurJgEJy1MrZwPrYmwpbyq8ydTgBS6nve2aDeFpmjgTwXMygiuVcG7Fx5",
  "key16": "2hH82tKqmNKYv81EJMUbX4ija4hbjn3E114KnW4nMr44Snpz15Le7wmq2uuzBRvxW3agcWfubo96pFPFuPVHCV1E",
  "key17": "2Sr7XGH6yDitfGRaDZn7dAXyr9awjEx1zeCLGncXytnz5ByjB1LwveSopy1KNX88Fqjq7YsyiwbAADXmJBzuz4Zm",
  "key18": "44Ckf1ijsRCsiJZLmegfTesCENKUnCYXqQf8gmyKJqgN6u5h4rXD4FU6fGugtbzdZFrfcX5FKMYsfAeURACrLzk2",
  "key19": "2DcuJ2MDeq4e4KjXvmsAxG48R1ptd85kj925aDrDhKC69qBnZuteP7KYKh2GFpPfoHxjTNXJRD76QeGb8LgvB6KM",
  "key20": "34Jtqb9k7tHLHcQmLi4VAB8isKgnKawKhFfvkjFitNbfMxSVCh82Fz6wLrPdwqRXAyWPmF6WenUxZbrW5RnFCFcR",
  "key21": "nyx3NsNKb13GoJkbtXVvXXH7qUrK3H7qTgK54Jg2wwzmJhEb24RvVSb4cJdTryExTTUbU4hbKiyHKQHGWuMVJh7",
  "key22": "FbwoJ6ei9crHuwhEZLJtQ64DU9U3Dvg1nzT6Yu2hjcLYrjsi6McYEMVYn22NVVfZi2QxhxJHfD7gSrZw1wgTBch",
  "key23": "3y3AuKhQg2X5W1c4DKngUeJPbHGn98E2CWxF5WN3zrFvbnyvs5svobB2qLUhNvCNr3XPw3sDjeqRU1Wc7PxUjzue",
  "key24": "2kgss243CZKmq5oeHVAK6R3Sn8eurFdihkiS1otryKtF2RZPawcVx7wTj4XcC7i1Jxq5FyhVkuks2FdAqVyq8pFQ",
  "key25": "4LPSqnmPizqEip3H1ag7APDCbH85BsBKJUpKhLDU4pHLii4RJ7rv5gAjZ47j9L7mzgEwyNwgbJhEaQZsErjCoVTb"
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
