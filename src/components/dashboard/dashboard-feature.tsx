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
    "2oB4Go2G2S2NeffUyJkhXWkdGAsopB649xR13P49oGtJAfoDHbrf3f2uxYiMNs6Lz6VaiUZPa7jxcjvE3HexvLxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i4wpbvYwPgb16RgZgxeJggXJ4L9jHiNWsQqa6rvWvhfZHZcQH9w7MA76PHYHGuSZ5mDKcbvVtfuGsK9vquE8ejr",
  "key1": "5XmjMa2uTqxhMXwpWwCm9ncWajH6MHgpW2FWYqWibZkChgCBu9pEUdZrrfR3eA1xisJZpbhYqkakuidp8qYwUzm9",
  "key2": "312VnoysbGKAm3KtYCxk2c7g6r9DSwDzDB96AfCZGEptFcfetUQaYGkbyavZZV3JUrzQbNMfK8RczSzkoKY8Uvxk",
  "key3": "3eVP1AArH6jieyc7bfrSHiEgjjLAtrXZUidG7JeqxGkrFCABQ33n6EsXzaQB5XxGSSFU8Rx5V6dKW2gSPhRYtJsy",
  "key4": "LS65HAd5JXYbr9vkA9sEpkp6AjbgW9uqgUNdKb724oGbYKpV3HXhHhY46KhPSEAPxyPVjPCSRFKntbB7EBWahha",
  "key5": "4e5kYaJgmFExhYyVHLMFDYGYhPBG3d1zdYNjiMQnkAFxRoKY9WybMgKpQHrj5GEaSWGgTctyEStCNvdmy6pypavY",
  "key6": "49PYEjTwbKf1SCsq9begi4Je1ocsUfGZ3SxJnEKDhu6eXQTXejnMhi6UU7vpT7mdAu3MYN4CtBXVNY49UuKEzyKx",
  "key7": "2ibyUDUtKjGbDkNTpegs74ajZ5njp5BJGi2pbDj2nvdbqPEe141AFEJDb8yeEqbhdsRqLjRvRDjhNbyExKrm3NXY",
  "key8": "3882UF3fQBeVJXqG8jbWfGx7Ke7SeRufmwemNxx2ZBZg5A84LT9TeqGFPGhwChrypsMnAzibrWz69j3jRTqp7KEj",
  "key9": "2Cf51C3qYiq9Nzcr8Lvd66XRZByKFnyhvPASoG4smykowRwEh4g7KFgV63fu2T2HxcLEkQWmCDBF541PbmF3YZak",
  "key10": "2NVX6ekdqKnpErcEximfNDJXqLKXWhTcaS3dQtG7tkc6CuwotDJXWmPniEvMZxLVa3ZxPdDYuyqghSAJWuvH5SCR",
  "key11": "4YHBcD4KyjWoLkKo9HHKBEYGSrt6n2nNHkDBkoT8zGXgi9fhxdKScgQAbfj1txtq3TSthgZiFj2tZANLGwCgF7CS",
  "key12": "2qWD5C6AuEZVkm2yhbU2JKhfbhxQTBimVgj99WikqHVr37CfUp3Bt87GNsB6Axnk39Mza6BKYhedNb4vgKN1KuwZ",
  "key13": "QhhqerpQ6ZJrvEDyGjs2yKuzjanvzGZwo9zveDroabMsq46Pg9KCsbuqxPwnydM3ZCeSDbyWx3WevJ9zi6a46cr",
  "key14": "4e8pNHWdcLn1R4nLpkKhsX1R139R6xBhvow3EPsNhz7B2u9TF8GzpJdmAvVqMN9B99hNcFZNUW8dx77fHeJq2mdx",
  "key15": "4yMRsJm5EfhQrmiaD1bQnAaRABEAFVBWPSkSmxxLevTiRqmY4bnZit1SfaumV7QERGPGzCgf5jR7kPY4N5r3CQD3",
  "key16": "4MVTHrtUdbPQeYvxdML7kw12kh7GC1Eg7NS6k1YvFHkLUDoqCaMJGrkhTcp4yeQsCFYompDqEbDTEuW9pHzwJNFT",
  "key17": "3TUdueFYZjD7uz3wMuMhdwdBXJM5m1zxL2EEhvVf24zanoW2tMHTCHWjt6UddkWTaKgEiNgKYp5TphWrkTCcUovk",
  "key18": "4vSU8CGQCvpBLxBCacVgCM6VJWWQvfEHCpoW1EbnWtVKgh9wJtTR4vnXjGSYz1QWQoDFTXf5JywCqC1gPV1kiaTn",
  "key19": "FEtHLGbKCwwkPoCE8sgr8RMHQKBoFKHVx5AJd1FjbyaBaVC6Bmf4r1sdeMEdHNxKPEc4yFL9mL4fUVBi3sNwCCt",
  "key20": "4LGPn3KRRbPkKQiorjBkmLbQonxoo9K29QkZHfnQZ33mZ5YtjNqEbqwPZbpdzQkSpv5DBw6hx22fHaWxCWuNa4Tq",
  "key21": "2geCNjfLdmPW3UDkU6tPdeWMWBN71jD5wKXKySebwppNRw2ZPtMSVUE1bbEcUsLCPrqK7ZSWePz4TKNcB6AG3ypx",
  "key22": "yTgZnAXmiM9bJNU563zZFPBV222dxfUqucHWtRt5Tzm5WN3FveHQYDmDVcvQyKapx7pwuDsujY4RKMPSQx889RX",
  "key23": "4CDoorZTYEd2AXagEs2ggb84i4QrvZs3yhQUTwKPCqLRc1ubVPEg5PQyPZDas4J5PjSV111YdeXYq8CgK3Y86VN2",
  "key24": "gzEEWToh1AXnSQdubEiWkySVcwvLvYcoMU2dpFxrymYUZTAigVurJJB1CNAnGkSMQdCdtPW5QnwYzdzx6pRJHRz",
  "key25": "3Pw2h8rWBV4uvSPbjcpcM7N5rxZjbtf5jKu99b4U1Zk7ByqNPAZSnY6tdB3CYekEomWUdDuno1jqkPH7fUckEsdX",
  "key26": "8uiPQmaLTsVZVjYwBiGigGcJHcxZEiX1p4HanuVGzfUrVosm8KYGWS12pWZDcSAmAiKg8gjiso2z3PCJiz8Utbp",
  "key27": "5txZGfxbMFHZxTz8LKNuLeAZ144YRWcxS2G9sv4HeANHHkKVQrHpAvARu49Kr1nRjMdpZUFm6xF9piKy3t1SkBkn",
  "key28": "QSPWoMy8HoayM5NrbETqHxNCDeiuXpsqYhEtJnTyeZipx1gQRtsRDqGxh3aRfxWALgRrUMNiv1iYQwUJW4jyGFC",
  "key29": "5Wye6baPGKYrsBxwNLM55rd2DrGKdb67nWyzG2SsodLdAimywzpa2UfEjxcQQtwQ4WhSGR8kDEoSb2kBMEcFQzG6",
  "key30": "4J1NCASuMc42fiKRvhQubBnLgjQriPsT9THGW8iipA9qybGjvBCScCh9HA16YfZPCwjoxbGvFwtr9UmLoCGXUQdV",
  "key31": "2LmqCrbhEwnA94ptdb9oGLNf2BxL8gLMMn8EXrWkmiDBNL7pk5NXJS1BDKQgrHgvHoYDmg9jpq6u5Sg11REdqiE3"
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
