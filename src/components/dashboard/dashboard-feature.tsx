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
    "5RBtScASjo1R9ZNcjP9a7tkV2hpuVtBN1gcNiBXGhznm2GSMAD5SGqVuTZxFFNMhJ3Dox1zKcfoeL5iSDxS17TdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nobU1wnFi6vNqrTLWYCaWoLpeU68Ybhon1UP51CYwTJmDt1cDiMM52zAJcPm3GtcLhPgt2Kb2hHjQta7WJS58G3",
  "key1": "4MaiwhM4zPBTxMKm5K4eKhsHstecb4z7KuGDcaE365B1yCyAz8kn2AA266yuunNcBvQdBZEJ5F31aAjegHsivEMw",
  "key2": "3m9nCfmHYH6TXsyANvcLWdwAk4dqryzFHwcdgvSQEDtVN5VKs2SAThahgZ6QbyDD4NT5hhEwP4BiCi3iivju2KHu",
  "key3": "35wFU6Z9nanwJHyEAhRbbmeXssXy4NpGhJRPkfeXseYhXCo4M2wKsu8Gtz8SZRia5fxhUYj5GzPz8mgrvbNkSnJJ",
  "key4": "3DmEjvniwJWNxemoCwSqWfFoVHjnav9rnQoLUMSTpVo3vRfWHUQTSPLWaUzTWhUNErRXsDEQsqmvEATiZKMNc4aH",
  "key5": "2ZEwgnZHw44CGcQNprYmbsCpaTfrqV9oE3S1PhoFexWt8Lcsx3rT6DAq1GB1VsHUKnn47giRDFzsGTU5gqFuC3c1",
  "key6": "3ybade5SQPEoWr3UArfXU3HufMeKVRoGKCDRuqnuMphY1crAtFjrcufaPYDKxhTpfwsfMWyvr63GjBnx44cc4WPY",
  "key7": "4v3c3YgJYgyTqEYCz17WLqh3otd153WZptfvVAk7UmBwr2Q4FYocdSknA226uUCqQ7AnccDWHKYBmX9adQDfzdgn",
  "key8": "3wpw8eqKwjtzht7huDKS5nkTpTy3fdauPvaBUAmedV9QiJFT93Ktbxv52tk6eVkWQ26WVq1FJQgFw9p8nTDKtMQa",
  "key9": "5YNdRn9VfKgAawVYkVaLPqyCXKvgerUhAXcMt7VBVb3HYJhBcJwkA9fhVGBuivXTZ9ox1LN9Jn44tSh6TfdithUt",
  "key10": "4g2UvWts2MWxJvYLwFQ6bpXYu7NT1LwoNYtZ3BfpaWHzAYKu4WK5GFef99VZHtSMbVs9GPQKWweKFe6pUtLSo7Kk",
  "key11": "363T3g4Dn9QMy4yD4saMsPv934wWPZYo2B5kGsDzosZf7WibKoXtynxNhm7diUy6bRr7f65C5U9yT5AuduXQD6et",
  "key12": "ubZe9yDTSH2ZA6dtYCwTuxk9Bw9DX3pDhid2Pju6Jq1bQoyE2ncp3ZagWjqEFumMn3ZpLpHxdmkkbJu8cH3eWDZ",
  "key13": "3pGzyCCeECUiDpNPXT9sAKu3JMHUBtTCxHRafCNcbWYRoXjoQcrweJGkKJ1cJ2a146kkzXZiCzvV5gvXfHe8yPiW",
  "key14": "5XKU3sKeuRvMqRTLd7iExZmMLTrRdYjWmw522Y3EC6fddmdTpTzjrwEUzMgoGNpXf59RWEQnoBmKfau7t7qtSXoM",
  "key15": "5G3kPu5bGUMoBYkmTtT22zVmDxWdmn4rYbT689Nsfgs4ECZL27n8LmH2rpzQqmcxhA3PxV3U25ubejF7nXbrmHtq",
  "key16": "zMGf9SLHbNfyJgmxWRnvyjHmPdXsKMdcs9ydBrTfbG4BD6SX1jxGNzHMwxcjp3JoBUwowB1TqncNFrLRubaWaQ2",
  "key17": "5rqaqCc3MUVxuucXFJPCaH2wtjaKPvyrcMJaNFtAxVN9hWv2pTTUzVMAEibotgqddFj6byT3wYPLcghYBRBEmcHd",
  "key18": "62aE7BEjEGNB3xguk5Jfiw3oju41cUwKsoXSBxD2iwvMSAhk8qytFw8kvB7Le9jgn1o3XXgdrh21ovtKe3kKa4aD",
  "key19": "2neZue8WXvWesTjSvQph3NJBt3jyfREbhwcHnptSVGWgxym6GQAJy6aE69ErQ1aRKJcexM7WFDHfc2Jh7hoyauP3",
  "key20": "PxmkkbUGmSNuhxnTpXoxq6kboDXmVTPcN3pg7coNJoM9EzDWM7uBnysLxegb7h4AWUGjq8whXTeKBy9fnuqXJBq",
  "key21": "ABYVjGRtsQaSqojyLnCPsqSfY4dcmiXkLcEEGe6ZPBNhwY5nZJXMr6ciPnPbdWL4hdgkyVAANRdsTBC4wH1zGTq",
  "key22": "2BY38qjuV3vZbBK58koQWZqZC7zs4izjxEEGaehyDFDpyjABABrx67AR3twVhu9jEYh3dbNZsRBGvvzJdBuCv5va",
  "key23": "3ZtyYT2wFQYPeUooNebSfRpe6Q14sHYszPWTb3QeEZB8NLSB1BAxyNDTs6KLQ5podTrqecx8KWmfeVHvTSJKooJG",
  "key24": "3jwEAEjAaEPbALJZb6fCAPNVVqRRPFu3K2ciQ4ZzqwSdjTDDQcHa98932B6KyPhYpmjmxPVFXdZgnsum3ZXLU6ph",
  "key25": "51QJ4A5jZNBz72bM5M821wgUSu5J3W3RYWdkQ49yJmTDeJvppNsUNKTLiGWZHNFc9m15AwANNGkzKbtDokn3f7eF",
  "key26": "5HKywkQ1S9fD7MCkQV5KCCsHyFx6S2rxMRPRxTkQvVyduj3tjsNn4SaBrnnXwAdCigVNFBFo7Ls4fc911HoWpdLA",
  "key27": "3a4Ysdard3v2161uMv8SQm72h8HhXKaesg1RacChb82Bu2WKv26GEgVzQQ9K4tt7bSjUjTTpthpnd3MuQZX5QQcv",
  "key28": "3p34k7sQ7kkLbGQtSJKhFdFSUvy2zMQxMdTdRKzvkBbidYYppBQbFWrv52dHzyvSLsj9pxiTV2tRC6sbK1WMVtFz",
  "key29": "57yMGt1vFSomzwpTJR7btocYWdM7ETbiyvHYm9LGJCf9wAqTLBFxnhr752Ek4bwng1oNXxxH3Tw9rYeVhXW3EkWy",
  "key30": "2cV6Bfuy9nGUUETLgbn4jpvS85HctcUquGfM2CHsmDtq3i43S1GFybQtD5enX13CT9ZtHkzM7T6Qbho3jSgshwFF",
  "key31": "414jnTNo7g7zE79ohxZDDNUbEYqkThkmEBKDiz2G4kV5V9xLzwP4PmdsEY927jEa1mSHz8kkiFtAe68YfzW7oLvP"
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
