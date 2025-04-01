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
    "3kRNjY9a72C7b5xnovRoTo7J17Hwxuo6F1rYdJ9Hit4K2zEaoYk1GshU9ke6uQZwQYiYCeoMMX5eHWnnmLW5rzXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k97rCcUoAUMW31q6DdB7CPMtXWpyEtRPAjwW3pdXybLvJQkvb3rorVeHzFAMJ4LPRThWU2EZoYf2i413mFLhXD2",
  "key1": "VLvx2cCb7Nn7SboMCE9Hzu6U2q7mTz2matLR8TeabjkMLytd5wLsDHwU1JPByPu54TRcA5juQAb7g2MT4eTGMEx",
  "key2": "47HJoQM3kxvjVQ7ZEm89kWXGbeZsPtisVbtuYgV6Xi8kuFniSFfRRDQz6bdF3qwDG491y3VjKeR8k88bbTr5xZzN",
  "key3": "xNhVPkygo5io29HgD11aDfruj9ZdsR3zfdmR6WmhUmohbb5NBLBW1BfzAuKhGeCMAMXyCc5dYTNhmTWzhEcDj6D",
  "key4": "3FSiHCiK9bByewXVBjeb4TkpWW4oaG2QuGKxTmzNUQwNQLKm6PZHEHdrwtwba66g7bXFpDVXGXQj77U3N7XF8hWJ",
  "key5": "5TwoUtxPzTqPaaWV5BT2L7uSom5hCw3RCM3JtKgtLGAqvnAWYKqJVXYxJhPcAgNKWbBCdGkAWPeurqDqLRKTQWjN",
  "key6": "2WHJLgU2iSeG5rNRp66d44jqhpi1Pp7xphZMR93XsN2FoUZhpMqrDEo2guZdMK1VRYihNfYZNJ7t6CPKKQQAitpy",
  "key7": "43ps4kdr2G1X6fr7uhGQxxiKxU74eZL6eypGNDZFCzmQyjGBtGXPgKGeYfa6BQbACKfiSeCCoaSWzGrrwPQNfoJM",
  "key8": "3FhNsquKCt2nNEdF9pQtrEEkSj4oANciP1iVJBQjBFLU5j92NiqAX83FBdAko1AnLxcFoww6xnHK184covcBpJi4",
  "key9": "ZvfiNzx7WHwt8WS2zLKzotcB1vEz71FyKqWr4JDBBUuzzUUcZBzoKst3trBWTQGYRRxTVVcgCMZbWqeWeVuDzxq",
  "key10": "4XVcxn2ajkf6kgemJLkCG2Vmv2AQx4xeNB6ZQ9dipSEFzp4jLaabh7dJdxsyfi4mASEJNoksjq6iSE3usjuSazKW",
  "key11": "3Q5x5wPiqDZFyj2U32dpg58fTBr8hpq16DYVNiSp6j4qFegJJjjpf3df7r3u4F75JA2R8hDzSBUPibAsrCcmvsX2",
  "key12": "4a6dM7bwsBRQ7EuaiH7cf91XWJdyLMkbHUoXLMFFRMDSXxCFBzyFq5djQkyzai6Cn8EQ5fzpZJTGxkwTu4V7oRr9",
  "key13": "5BYuP7TJjyEvdXRtYqqNaPE3ipFb8ZUSvaBmv1qiwNvLxyACrUCfDyZiD9pkQxdZsKDB1kDkVKztfic1qDNN5CGU",
  "key14": "5NPkAEzfH245rEXKn4i976hk971fknQ3WV9FeZKb8fqqGANcsgdEKhmMYtyTK97sdwZ71gQLnnTT63BTc9G4C2a",
  "key15": "M9sjARfve83DJALYHeYikC5mnsHGjzN75DebnyTjkgcQP9uyfrUkKkwJ5W3F1ZY5CTq1WoUrkMJAPSiEjgqSZiB",
  "key16": "4kHA7ZN4BTofFvDYtwsoutNspAT7YTLJVG7t4qeDWdJfqYF7kqsgEk3a3etzjguBhqAPqNggMkq36LoLFWEGS1Cd",
  "key17": "3XpBmTdLkaNFbXD3vdXFGVHb3iwrcWaEhYEPDVmcWKzUkdACDySuvWSjj2177Gk8Aa9gHxrYfFVaTcLqnyijfrmz",
  "key18": "4nQzMFcmeVezsE4kvLvJPfaKM6UR8jcWVT2acXpPLFsS1vYK92x57S1UdSGmDXgFs2SQEPc3byHrzDfVudhwpfNY",
  "key19": "57uPqem2HoakwvdrTS3CekfRdtoSM422TPT9ueSJpvxnsxRfAUKz9Ct7sixtx9mQU5smPQp1M6Whr9wYUXR9u97t",
  "key20": "YuVYCEDxMwsTMe6xQuZQQwBZ8fCaKSmamaUeEmmauvLoocU9AYRpbgh4ucAn5xrDNu4EUgnMrxwyHwsVK52T7Zp",
  "key21": "2FUfyzLALcpRBrVzojWNMxJppUp44QASwt9Byt5HW6PsLXaDfCHg9kWaHbYARPb5qVmmFXacE5ujSJJJ1RgviCCC",
  "key22": "GcKUa8YNFZiHJCc1P9C4jLAqXq6prbinHocH2WH4W3KK1V7EraptomiNAF9GhE8URastfkmde6GRcXEHsS7M1Yf",
  "key23": "2RuG4vUtfUi88rUmGkpmppRtgJmKDbeW3Wu24JE69xGRiyC87dAAX998y7mZgDnchkMhkzrsAKABYk2nmRoyhXne",
  "key24": "3oy2bqgcUzCrreFrMgwKJ2n8F1vcp7144Y5HXnfdJGciQaMXnNmwy7L6pnXEqeL9mcEXN5GmCJGhXAJypbXoPuoX",
  "key25": "5U3Y7TR9FEwhT7BToqmHxtEcKzEp4VWs6BCKnpw6z6e7kLXwwNxXQiCjMmos854HJy86KvZGX1Ur75W4s4b4K5Jo",
  "key26": "4Dsyx9Hm8SFMNRMnD3XrvUQhoGV2W9dQcZtemiavZcR5kPEryESBV3Ym6o1asiHeLTaMGAcio7eAPou1i8YUw9ZF",
  "key27": "5yDDTTStQYk2yzHEGgpuvU2etTTk7mAEZYns3uajpNagokhoam1zFYEFj2RMR1KRU6YJkftLRB5ZVt49Vs3DfEtB",
  "key28": "agEqrfvkAJP2uM5cnmMwo6EZcLVtSShP3ewRr8a3wp2cRBHZK6nkPVFG5heN7DEeacuDmM5z8x8HXCnxpm4H1dQ"
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
