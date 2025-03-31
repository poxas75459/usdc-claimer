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
    "DQAfShJD7EPQgSrcpB9Aob12ZYieXTCDxE5mbBDuvz6fiEN2jbNTn2ci6dGeip4f35ubmfnFyJMb3w4hzDLGhUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DJKHRhwSFPmR3wMPaSRTFHnaybR63iLvJuBcsguMBNvQUNbGMCeohCuTTHP5Q89jBBToLpRXsmV2gzZRsi5f5X",
  "key1": "5SAwWZo6MaRRyVuZLDtRhftUxLE5wamHW9XwFMwUSd8LZ1pNeNHNvdbnYR48eH8EzH5xY9ANnYPec9v1epqQKcxJ",
  "key2": "4knDbjsvMLzQ3e45wR2Q9AakXjVfKZQ4wV8mmstUT8ATn6Nwf1rgYfqqbm4yvyh2RNpbopmHYSy72vXBzxWBT6cY",
  "key3": "x9cAgqFFeCuw6y5fvS6zDJNrkFNEiG4HCapi5RpMe5AiuEw8sqxxFvVwRRK9TfjADFpfhGXpYLZRveFynMZbSGw",
  "key4": "5oF45em7qdXr3twgzrrDhLxfadim9cNY3DxviC9ikdA26HXcZPyudVHDMeqmjf9rVsDKdLX9fBCaP57o4QBv3dLG",
  "key5": "fn2kSB5Sx1FoLXscirov3xbFD7NN1Mry6DGSqBfE811PuPBGDvnpp9DYiCpgu5heBc5ZkejpYvqtdXnHSKaQYtw",
  "key6": "Hy1kgE2CbBGBn3DC629n1TaeYpNopv1eZHZTcyJhEcvpWfX8bJLVDRZXuuXtzawGJqPzUsJQ2ya539tLdULwS3y",
  "key7": "5Pe4F1q3r3Rg4StsEi3fCpt6C7dsQpZYEfWHxRxjF3AaXvxPmQVsHhuHu3QGTbHth9S7Zc1eQbA8ZNYw8KrkXQEC",
  "key8": "3xo9DU2z5A7Q5sKFSqy9gbbT1Z2UZUNyKt2HGz6MKKa1B9JqioYJBFJN37jEV6As9Nh4hmJeNuQ4FhrYzksVhPpm",
  "key9": "2rTKYvVAPHSYekyoiHnhP26xWCMmF6cod6gNhFy91LFRZ4jFpauD19JwBQ9kmbwSMG7R7SKiEwGYXMPHMsx459Cz",
  "key10": "2d1cb6aaRaTWaM2YF76ZAkWfnZsVaR356Q683N4jZjezxNb7VpFiAP6YtXtuVnAyL9qzaFWnhcXm1smNjUM4oyDQ",
  "key11": "YPqeByabCcKiz8pqaCsemh6Rki5YqCxs2m7tj4HLC7cMh2J41P67Z9VegA3KWAG1d9EXS3xa1rDCvnoSUVh4Phh",
  "key12": "5R4D8vAxzxqdP2pM7C72xkdaeAdYgnWxnkywV7KrCLnkoBCsk8dqw1S3XD9QTJmWAcnAJsXbbsLLuUHuLnTw4YuC",
  "key13": "5wPRLuEBj9jefzbKwgq2UfsHsfV1vEzRNp4aHkxDL6zXDNWSADg9sSGg9WrNmN7YnRjCmufgz7HwVFQNm7hQsRkh",
  "key14": "5MZLfjzV8fbeU5bskqX5rqwsGfCMew8m36uDvdLsqiUNKMsTZTZrooJhWBixYThPLkDtfA1Yv6JoyqsY9oqqmwev",
  "key15": "4jqtrfk9Wt2juzYnUeMkHmMKR1YGuGieckKo6y7eaHnYoXEcVe8ai61VgznHtuPEDSuKq9qiuraKx5RE1Jtkf3HY",
  "key16": "2ouqEa9LZTntuA5tZMT1cWeyfkVJ9vYupbqB4K23JHya6amF5kBLvEgfZbVYdcq2BXQuHjomTcK3LPUb4tndwALG",
  "key17": "3Gga3QVH8JeQBwa1atp9U7RgJiZAx6EgK7vpHHCvS5JKTVa9CXkYfy7jAUfpHXnvWbprpkQNZ8JNNqU7JaHG3iDy",
  "key18": "2xw8S3CJSYpkeH78rhAoGd7ao4Mq9CrYhLY3cTUF1BA5YGUvhqctzkA6jy595u6HMX8H6qrCpT8zrxke42aieiyw",
  "key19": "4hXKAnivQwh3KoeWEppLAVP7zLAe66F3g3dGVJwxg932u8PBUCiYruQjKUeWfiKYYRma79paxHexsibFf2uypvq4",
  "key20": "Asmn1VXKVJBmaX8xwgC2NPhfCJaVLXcvY6Asds1MvpSh9pfFDUoxvD3v2Uk8fPUDQFFEfVpLwvZTK9g1G8kkwHV",
  "key21": "4nxKtTPgr7h7HxMqzt9R4YRtNsiCPZ8tUXPjdHt91bHeuPiBVNYa6ypYgX47asX6WjGX6neNJattZEwKSn2aH2Up",
  "key22": "4Xz2LkBHQxv9RcCPQn4DshpstE9uFoMLscysh3qFRo1v9BrNMnusxXiHo4dbzEEyPxbAg3PrSBtKA7wZ5VDxtDTB",
  "key23": "3iepqEuzAYT2cFBxtrWxBXKoiEe6GM7ujsNtLANwRGGUKSsB6pk6E4xZMjJo6vmCpg8GqDrorQDj8HqU7DZq6pcD",
  "key24": "5vbj4KoEQqF2Jo3XmoRMpzikxLgZRNryjpb2mhcw1gzw8pz1xzPnZq61m7YqfHsdegzbC8KTb8jqsNieoQa4kJZC",
  "key25": "2XN3tyiU4r6uLixn3qBgVCQLc3fVv5gr4PNWaduqkbYr3DUEkKe1rPxZVs9uArj9AcFcynLWd8qroyNZLyuqMzwM",
  "key26": "3NcDWX5Uez7B9W2MwdGpmyL6DURaFHudy74VsYmkH356pTbuaznjQzjzEuCn3kiVWCcvtfZYBnTYQBnncyV1uYrK"
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
