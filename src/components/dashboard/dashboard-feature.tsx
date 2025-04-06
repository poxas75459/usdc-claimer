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
    "5M94fBqpcdu9Ww1KqrNzjrya4VUUYdgWqV6tHx5gpW5XxLCYGYGZDnWprF4KoEhuoGZ6FXehzznjbNuRWLTkYUcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f5rYBwRPHgSE16usevQgzcmwKPexMe5P2MECtyeEyWKHMUFMiJtuCWnUgeQJQSiv4TVk6roxDRYW6wVfuQ983qo",
  "key1": "3rwSt9uK18G73cNPt1TNCM7m9Fjx3Jo2oL8yPPeN5NsYG7yA5iUCe61REhWuV5pchjVJuEuGQLFuzMSxGTwpwu9Q",
  "key2": "2bga5fVeiHqWX18cUHHk3u4g8Rk46Zm5aNEsy6HjYguvvheAesmUJHZoJ8u2AMvEzoP1riDt3TvzESDCaRwDZr6k",
  "key3": "55ThjfnmYTgJC5CWKfn2JdN1tUprxdRG2BvPxi2fXYqRQxPf473fdMKhxkPM3nJEAjgpuNvfg1o2W9q6QLKYojy8",
  "key4": "3a1Aa7sz4oxFyU2dgFBrvrD3Ke2TPj4AU7fNHSHG1tpnmfCvyqUpPXvwCurAAnD2gQFmtfReV6kqAaJ3E13bGHqn",
  "key5": "5dzaU56PSPb6h9JvUU8j5XwJ4fCBRxYaXYkUBPbCtm1XKiZ7eKt3HpsUt5pUYQRpNJj5SYtMk2rGGyxayfzx9Xb8",
  "key6": "49x4xFVQB6cHFsVVikqyeDrDRPLym2pXuK28dGkETZ29yjdQRorXYeiMCo321He3zJTAy3VcgfdD9Q9pbng6xEXj",
  "key7": "2zrrv5xui9gRkCNu8WHwva31s1NiZK93po3pycEJ339eqZ4NkQ1cd7DcTMvmfNshH821xsQPUwqQGdri33pqrcsh",
  "key8": "mB64JFs515r1WQKFZMpTzsM5Mo3vhdbSkJMjKpdB4UrEnCfuPrVda4sHddfPiRy8YMEzYTTYVk7rCacodAjpUyr",
  "key9": "2MMhcbjVJ5QpzJEEFizpC3AQuFTSUWNNagXFYW87dVMg9QAH9TGTy2mxjEnQa93fSiH79PHpwaX92csHmLhSr1FG",
  "key10": "362yQwkpQqwiixnZdVa8TjAXZwoBMb3Ey3xyyoqKRZ8qNFk2rNv5vNC9oT6a8RV92souKrLBo41yiCXWdAQz1Q7y",
  "key11": "5rnesYjNXr26P6M6hLRobPmNHp1EzqeR34PqMsMvAzEGgLFkCVkh7KWUN6FCkVn4CjCnyyZJSJRehHyWyeWHS3mb",
  "key12": "4smCUNyWDRWx47erZcvxUuyYdBJdQGbUAkYTbUY4QBgHB8uwuNYcwVXF8GQ2ZW7xPQKQVWYgaXfQFXWg8ibadLSF",
  "key13": "2TcbofkH8hEkoRcjMJMKb2ECfiXMwuihhfYcUzq5zGfjLus4zhUnBqGkKn8eYJSt1WAmELFEfQG1wvSa7HyVTUnh",
  "key14": "3pbzcumv12vUaAXUnjA3G2fWxfzgu9SZZYJ3qVZHQqVbDaY5Zpifvs4qahXZfCUEio3cCs6iXS91Ts3LBKkaQiLS",
  "key15": "4boeveBq2prdjzeapr9Ro1yVZWXRtcxxfUU3rGDCK1gTtovXZdME84eQYV9HREcHaA2F5dNvjQ5pbVtJHu5PR63V",
  "key16": "5WkmBkiby5xHii4Bk7JrxF7HjZt6J2Tm7JR5WXUoLn6CdxEPPv82Y8PECgYzjELn6xQJWopqCDmML3V5yxWJUvPY",
  "key17": "4dpUbpFZeAdTHWPKsNuzVQ4J2Tc8BV8r85a3gaC2bNAbghSCkHrpYcdZ4HH6dFvHnGDuEWYxpPNN2mYj3dYZR9ne",
  "key18": "u9Cr4UZULFJP3aGb1tSnwdZTueR7PWfm4yY2hjvtKyVpF7VrJVrE1BBRv4GNdQM1ie3JDmU8UuCqTSYqZXudBBj",
  "key19": "5i5GVjcGJn8fqxqTchou4T7dmqKkwckKx37gUfxCtbNoCyK2J9q5js7672dFUahWpNfRg9uL5mBvcu49J2hD36hj",
  "key20": "43pfguBMSh3gNLLC5DsuJ31DMAbKL9HpM4dn8vqdH8fFQspVhvx2cLeA4G2Loy4at1WBDz38JeCTZCGvKNrWZJdy",
  "key21": "1kTHRBZcArjktsxLdq38PuSsMTGr5g5F1HZkBRfJqSyA9RErCnwzXQYsPXdRJ9aUw7yaga34YHTVGNChq71Ggqu",
  "key22": "oKskmC4o41fHFBcbXijqdL6Ks9UV6gSvVZ1fKgCaM3bMJAgSzHGKbgGyfipKZz5r7cWq6qKuFQ5bLSKKFFW3CVx",
  "key23": "4ZAUTLuD8zAgWmff2esybuoVVAG2MyyGp8XcBuo3e9JAGHZxUuYoLqVa8KRPRoahMoqk7H5cMPhJZvNt8PwCDdtk",
  "key24": "4W3iQNQ6kvPCPJc6eDLpW9n6Cu565wbsjzHujNxJtsvpazk15jVsZfFrSGeYDyVtdVnjYeGUWQYLSxewZptwec5v",
  "key25": "23ivmFKDdknuft8VeeH79z145saUFS6rPEb9bxMVB296nBA4QXFEEMwu1LLYS2ZVLswSNtQzdiBvchSNzXBYxGSD",
  "key26": "3M3MXtmVT6Bj6SQBBhBnxdY4y15yU1sKcpLUfvthaY7czLzKowdM3F77xfpVt4e5yEMYFFXcqdh7b8PGE24DUx5j"
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
