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
    "5M37bjs5Go8D7CuyF8B94ZFsrU6JmZsXDgxhkPjuVcBMkB4HD37wQvkYAm7BEyk5sk3jgKYfWYx1E5PVrFZTBE7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgYe5wJMQBJMt4AfsLTRu84UUJohWwgrcExobD8ZH9Q3yo6TfVgqxvcLErAagEsBKkDKGbei5sTUa5UppfTk8Hz",
  "key1": "66yu35EwwQkfbTqEKWk8jZ4oCAigjrpDdULEqg9GQfDHMU3ovY1Qxqp5ihGAYPgpJqUXB62Se2Rg7ueuXzriTaF7",
  "key2": "3vVx6q469FKRqLTGjLXZs8mZ5vaHroJzKdFux8QCwJPfsd9KmfMpzQLuskVh7SPqKn51vNPVynovA7N43WmioL8U",
  "key3": "3WekFkWJnkZJA5pekHB5CrWojPuaJUyuDgTHtDJjjHSJHud3TyDzo149t3y4j6oJEDPPToWurXYE2njHAKhoQzwq",
  "key4": "5nXrW2J55Uv1qicdoAgTeJbXnysLDxQB8AgG788J2R8hj7ZUpnkKbxUuWUJHZ49RRYNQjSuUfQtNrpSvXb78HRWj",
  "key5": "4keKADCj74RC6t22kSeDko2TPFETo3HVqyteKjH31nrvkNU2poujJ3NKPEYzkjazmnDyTL4qNEQsU5QPwjT2zhWb",
  "key6": "3v3QZPdXYtSyNWLDmoJ5XW6bhMEuBxKVm3YtckHHjHXqa2nDgHTNDEjN2DSZQMaSpgVj3dQLjz38jxKTXkqhWzop",
  "key7": "3AGdWcsUAD2HTbEdL9vdJK3x8VV7S8gBaVd8ihifebcg7rK1jabLsMHfKbzha5JJCr534M8dmHpcRSL5tZCSY4LJ",
  "key8": "3VEnyw1ou49aoANUWNjwmFhXVEUtQAYoTE2D1FefFChvFEU3FQRPaQa6ZYmhBkRECLQZ1xd3if6c6xhGk1oeRaPy",
  "key9": "2SxrFQd3QXqDkRitXo5K2Po2Ab1gd7wkthtqc2dKNjmjGf6iZ7BJAfReDuRUYewTrP5beAd3iSRLNi1tcX1jT9WC",
  "key10": "E5JKRMDt6ECRf7iNoc7JK4hCw5sAawMoqj5mnyivprNJu4Bi4C8bjHQYcJRstVvBTmm1yMZnnEb9F5iKMxJ4Djw",
  "key11": "3yosCEw6rFC6XMW8dcMtob3zVFp5eKLyMNfhvQgBFW1TN4HNGQASsvDF21AP2wCKZwusALuNJBtnbUjsVbQeg6Gs",
  "key12": "5avvBKyXnKUwRzT9z8BhKErT1dUdEQSQuVpj3igh6nU71wbiUQU9dGUHX7XGCbDVynZYNTfb2aaxrKRLVxT3xAAp",
  "key13": "4rDNSbDVx9Tsb7FwvyW9AkxfFPHjbMqkVfWnyPpTrh2py1LWVvsCnTWyKbDpJraidVuJr9H6XtD7fJudNBoXhbnu",
  "key14": "3Q1YPgb3bmEUPYD91PtRBgHxz2SzdjYij5XB6C9Mrn7hWyavUySKcsrXdJ8vMhqPmfWVhzUT2V9emZs63i7CHDGb",
  "key15": "3gYY8amfeBeq5hxC7WNv9nKXSbLLQTbtg4osMmAcUfRTCdRfNKigMsmRyg5CeAefn98L8GoKZDn9792axNxrCjdg",
  "key16": "2eshtEgZVLhfTb9g4vrrxv24f9wN8PgFwbx435j7b849vVvR1bCwpWCVQ2yCo2V8fBdtqPeuninV7f5NJq9s5x3y",
  "key17": "4BrBNvXJ8cbMnL1hSqwWoKWtNe6d93p1bfSzNpdsRmC6UiJchPDze6WNBuVTjCA4z14h1yCqM5R372pPbVCqRjvo",
  "key18": "2j9aipPGAYnZbh52g2sd4BuRsEHfeWh5KrNmztqkbM1xyCgZnvyHFfzNeNCLqb5sH39isQosFFFQnfNi9bNgdbeZ",
  "key19": "6bkJJkDk1GUNkg846wovsgiFbwoLJrQYvGR5U4iunA829L9HETxuxVVtmCvxxgAJ1ZqHy9SGvoLjeD2xEofw7YX",
  "key20": "64vSHc2wseMty39ozM1GYf5oJEaaUqUTZr2pGQv3GkqJsuDrbHiqZ9UjkWuGvF6RpQFATm2ChxBCXLQLgMeNgXHe",
  "key21": "2sgDrorR1Y2ekwHpenskoBqsjMta2ou965eamXb4WcKv3c5xhowWXeq6TXGxXcCu724r5osPWCKFGtk1R9RFsqyH",
  "key22": "5zgGDkp4Tnyn9Fjn4iGLJ2y1FbWPhS3gU5YzRmr12AKekXTSqFj4YoYPjaj1BRqGquwrZWrk1pZQ2rL2ukx3cSAf",
  "key23": "2QKHzKXFKRWohpByt8LpAfeZLxHH3VwR4L9JbgGfnx8KbpvKHndHN67UWktSGCfcQs2rexW7Q2Tubc8Fh3TYLHSt",
  "key24": "3Xe5XDNHZtyKL42FYqCK6wHcTdtR8YfirPUizUYrkQeAYMQd4sLvKSbYfcsdRMxti6p7aNu2bfomDcKQZHZd455v",
  "key25": "4xLntcj8FVQhAxyYVoCouFi4t68NgWx87FH2nhZJAdXmBoZ4YnALW3pisySj1fM97gHZJE6kVPeH9WCgC6SxztYt",
  "key26": "2CdYZh4VpsUsz7NA7uRPA5q74LM7MMUS7D9t1hawLAcoGtfhmTF2FN6Stw2jVk4iPn9D7SWpLMLGtN998HqmKDMZ",
  "key27": "ESBgjDhKSYqa61Sg8xWriHiy5XBy9Q1i8KDm19vAxVz243cy2SzcrJh8RF9pG8pNbD9qLzwZmkor2EtAD3s4tbj",
  "key28": "4Ei1aZVfwYZmDycmF98dSvrnANsYUjD14rtyjVEbbSjdr6gnC1SRK3DQp5F58WgaMwyKfNfjbh1hw1RVf93cNi3D"
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
