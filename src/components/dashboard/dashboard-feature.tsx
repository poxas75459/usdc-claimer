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
    "53eqfsdickaKmZ4kGKtZgj9Hp1Pb9jkFMKnEFBRWHgXaw8Jnu3SSYVSYDJbJcYWzAjGxPn9yntCUTXXFmcSRwrjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uGKDciCqvu45CMHXVAwUrSZ4t9fewuH2ojeY6UmcNPvsLNTghDa8ehQAd4CqCMJqCMqJamJFj1v9X55ybdMF7r7",
  "key1": "4HZmy9e84v3vEHGQARYsGYDJgHuyJmGfvL6bH4qLPxizEc8XQ1jGJH8FLtbLTRwM2M1jQtLw1CzMvsYR2nhG3ESU",
  "key2": "4ZWifuAca34v8HPXkbUq3FdEAsrfu11HJfwa3hMF2tXtbFW74skxmPgNHxbnSXKnUZoAy9hRMZR2Q4yvYh2Aa9Ao",
  "key3": "32u8Ursg2o9GPbJ9ABPTduWRQmbfakxrZQNuxR9g7BAU5Yo9p7o55sJ2Qu4Byjg3gT8zxR8xeK7uYVSGNcHoXBC8",
  "key4": "517DCUvLEwYC85tFs2fiSfav1K6N5kQz1yHUyRX58L2DWLsoxXLTqgpM5hu5FXKsddmCq8Qy4B56rnQGBZN5rZRq",
  "key5": "4q6qJAM4X55CnYJRo5M9EthhQoDzumpcKDbrqPjuTic3dz4jG1tQ46CvzzPnkiUzeqfLoqH9hB9Zy975ie5AzoEp",
  "key6": "4x1JA3W5uKHzGqCMfuLHPsoD3T1qA86xNTJxP8i3XphwQVUfwgeQGG3TiWUU11kTmeVxiRm6UQmR5iWeskwmi6Dm",
  "key7": "2scgSdgLf8WaAcaFCVqovN84ZMTJEzwStDyN34XRw8E3Y9r9gfPyaEujmkVDobBnEtgy4r7E23hcT26ykpLxDTLG",
  "key8": "4trY7xUxe4ufnpM5MR7A2v29KLydBeQH6uwsyVE3gduFmMfr3m4uvY9ZM2YkajZhp16gzpbigDsmkChbCFkpSf3K",
  "key9": "VhGNeJb9ftsN1NceND41a7dTuWAgkr1KztU7UGyvxALMyqGm9XUdY7kH7hPwDeTXB5G9fWnkjxNm4nxgQk92mJj",
  "key10": "KEqJrWMcouvUhqTmvfycCsxCG7Ho7HhUEgUwprhJdZVqQA2p8Atmpu15Jpr9JiFJ2ThVAPm16DGxK9MpdSKbaUm",
  "key11": "2aUx85oNnUcHJgQiKwBGcVokH2JPLb145hes7bP7FhqHuCGBbCssRpQzi8To4cjqeMANSKgiVpSM7sLFZACkhEgk",
  "key12": "3PB6q9nE148G6aG1oU1na9cC2j8TrJXHHeh8S4wASB98jaFBvPs6VBpr41SepyjhhJT112S566myTuurjf7LBiJ1",
  "key13": "2HrDy8oMKRn8AXr565yfBrUtQaAEJwxg1gUZi4NF5zS4yxfQaY5Qdcy9ECQgrN6eT5o2x9sDLM663p2BugKJBxgX",
  "key14": "5sRABNknBMH4bJhMkzQSAqHCeFcVq6YhXk6P1FuBxHadM5wC2APcvWeeY7zWZwhLSno1jTzK52eQ4L4bUezk2YdS",
  "key15": "4RnBocVhzCEHiffnYag3izt3deU7pzch66Da3fEphwTyNL5LYvZbG1tTH38odCwQdd24uUQ2LUah1PQdunj78z6Y",
  "key16": "2QDTprer1M7gaj8K7ikQN4eMnfRmyJgKKgxfu5g4iYNPa7RQpK9Yz6JZph3t9J9BZNejwJURqD7fkecxNKUqgEtp",
  "key17": "WgxooyfCww6hBKi4jqFzEKHPTcCCT5nULcw6gMkfsC9yfJz7mLQt64fHudYtC9eDba3sJJ5nfpdDFRH52ma3qjh",
  "key18": "4W2egHqTV4GBMcwAr4cnWe6DngFY18EQoBDLSGoz1kRAKkzLDhpAsHicQWAK99VYZUVJJHvZzfeJMdG23NiNXhy6",
  "key19": "25U9A3vBFJTXddsqmc9ZmT1W9X3egRcn4URyRZAQ1GpEfdo78jJqMst4WfjoZwWNwkCMKiKxcxodZZ3XmppQ1r1r",
  "key20": "4WdGKyd37FpLdEFgAsLKHHHK3or8GqChpifmBjzPHiNiHyVKPwzXvCo2DmE8jNyAVfWrGoBXDi566SNWzsH9S6eP",
  "key21": "2XW5dkNATZrLsakLgreNPWQYuoTzyJeaPKwinrBB1ZaMHWYpFGixRKkb7fVpyQ9cnVWViZ6bSeM9yKEkmcgqvfoU",
  "key22": "2MM3NtBci4JgAB9ENFm8tGDPfaPXbXW6aVq3em2Hpk64NKSLB4yDpph77GuyeFpsLBSUKp9Gy2BJaMfncfFCBUso",
  "key23": "58Qrt2kc6RXFrt4HaaK6fiXPmCaoW9VMombBHkrMhnh1iTW7v6JfFqbyLfN96MWAJngkKtSJmWmyvtmVCHQHKEwq",
  "key24": "5YCgAqKFPp5qzQjf3ENQQmdoEykYRsShnBUUEGPv8p3f66F6AnGXooQGxn865UTCspF4kq3w84BCti6bPCFNXHNc",
  "key25": "5Yr4YuMMcxeZcwppzrdneUpeEsL9nhGQnaNQhEpXUEXsUVpbnUYPV25NZxnTi9PvhPNZhjj16fSiDCVJVYDzA6Up",
  "key26": "F5uHoj4grJnSFM8Daes4bdHSaSG3uUKUL93CoLS4aJiCP64weimxpmkB3wKrBdjf3JBMtSVyqR5SboQ3vHNx9PL",
  "key27": "48pp2ukuKeMHp9A7g6oSf5avKGFCUBoH44cTB6tZ9q4GC4aSQGcDGo7NPkFRp9zYBJJB8jp6PgGRGUQNmFMuMFah",
  "key28": "hFDSTPqtsndMPfLftjtu3mTMRne1WQa5c1rJRYvmzV8aAZE3mXV7qEKpP3bx4fiWt713naPuYD1sWSyGVZtJreo",
  "key29": "2b56ta6oTAB1kRP8N5gwFqzVgxcbW9VvEAwRBxXHKKZ69oXeqqrmm3VSx4VbEJkd2NHrFk8Qh5vnzRr9Pa8dfAfv"
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
