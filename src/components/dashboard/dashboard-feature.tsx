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
    "2zqsYi3ZJ1nGzsg5R5jQ9MpacLg3GhVuR42Fg2SEETNK7DKtUeYYHuu4o7RHvzcTyw9d6GvtGocVeFd22vWQt72V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMPNe7KEQRvQFNpn763aLfrz75UVBet9kDRrYNijUkWQKYwHdnTjTHwA4VcGpnyiABYHq4y1T7y4CkfMY4iqhkd",
  "key1": "4yXJimDUpVVRfVWfjKJUarz5nvm4tARPMppuoy145yqDwdayvS7TuR8Yp1wk4ZKYqs93RDeaQXNmB47ZWoMQV6Jg",
  "key2": "5X1MAzjH3vsddU8h8yk2Upikp1FP36CBzRAf5a3dju8TxYVT5dFyf383ZKScAELA8pbuCvSXHmYXBDetUyh6o1ob",
  "key3": "2h9pJMNrmBDJVWMNUB3QQr9NYJ1BBXYtiy62ePGWw7YVdgTBGHZ39QpWTZN4dYjUjFDbrAVxGJYonkHi4hYCELXo",
  "key4": "2ReMfiMhVUbfJczcftjXdUCQwFQiPRo3XRTRiVJ9PixPrx25i7ch9xekrY34Ki8sKfkb1sRyyVasjggNPeD1ADpE",
  "key5": "2aPHVa9YAQ5iLkep9Pn2Qo8S8zmoGETSS8YMw6jdJDiSPjcqYiAqcuMjJEMmGzxV4oK2QFZYqiFNtCUiWL6tacqb",
  "key6": "4MDYjjGVpmHAmhtESw59ZCFPj9X8DbsiT2RNDukie8qnq1K2AjZQnzvTeBWtp92nNj2oyq5SA9Mg8sbDnKrptZMU",
  "key7": "2SREPKyax8VMgc9tpye1cKd7seF2r4kRUPQYQE7Xiz6fMDzqoozUnngSSt1ZHcjQySdSdhvoRbz7upTmCZ3E7YaP",
  "key8": "5nPLdswgqAaTZnxC32XibTctR6Kjpsr9uZ4yKKKzmhA6upk6RiDEhjUFoPHR1EeaBqYJS2LvEtD995fmuCSigexV",
  "key9": "3LMxok4iMNZSwWKk6PggMxm7W6yrZ3DMiQRvL7VG2oYS1tscYrmJ2UTNe53ZYzXwF2wQDaBFok1cY7iRGdgS4qQc",
  "key10": "2haADjE8M7QQAbiVaZCYnijzc812E5959W7KFGBnY4nfTxpT9FHBybbzb9BvYZZroSzxfo2F6QJLQCyoRN4oruLy",
  "key11": "4vhbwhNwbkFnLN16dmzfSMQeBqiEjFw7oXXbi5Q8zjhwh5aFmp6w8SwoRhNatWptNSwCxkNUgxXsq5tuEJ6USVwX",
  "key12": "4u8vSaaPRtvFX531K5dpbQAaGeWSSkNERHRYXRSgMjyXg3vjNsMaBXibhimSNwZ7R7LPjUXLsdSazDgrXHkuGLCg",
  "key13": "3jrmoaMfRRKk2LuwY5oh7RPWuaBPoPP4j66uADDE6gr7riq9aPTn1QmS1eXgGfcjM8WGfPCciYTSTMwSzR3S6J3G",
  "key14": "4ybpjP2k9bPp8qL7CW1F5C31enPT5KykMhxCXmmer7A2K4ya4PFRv4VhS5CfMgdXimwnCiv2WyhGxk6RcvuG8GfM",
  "key15": "2C5bUhQAb79xAgvKZu42LiNLEqb3Jx8sV1mwDXEcJZUiUpQSHvSZHLtYJrL9CXVwmsC6xovfiPoBEeew3M4Jffma",
  "key16": "3XruyCi7BWH4arqF8PuCuxBE9VRZAq8XbAB3W6LshzsmBBYVeuPCeqfpKoHUxmMNJzVfbNCsBDqneonSK2t91P9z",
  "key17": "4MvLVVgKWJbv7gZ1993ZhTyBWkfvLY7hs5PD1VEVVjUPUqqhnQqvuoj6tY3cq6p16hif2ksU9KFKavuyrrm61Ed8",
  "key18": "4tuYUQ2tqt3241RcphzigxNVi8ec6TJXzxAhErsbzezBJRGqxCEw6xwAokLhNQcJmqTH792Gq5c8iiycXuexesvB",
  "key19": "3WgTFUQmTsZqgMNJBeB4JRAmrzDPxm2GwK1P8uc69aFqRCb5rG3sDETTxee3bQWHuAc7YAbTKq3DiVJrr3v4pt72",
  "key20": "4BoeQwGpuY5fHxsXzQ4z5ycXqZRR8U413JmnDASei8eKMCXaWDJMLvzHtSUg9e2yJz1YPmBJ4FFFdYcpJdEKuDxs",
  "key21": "5q5YuYLXThoupaQVSXwUNZe7VvQDw4KTmKEE4WHw9BHeqFNT61auoTcjP6XT8QZaGkHtZeGg9YAAarSW6J2iebvb",
  "key22": "5kuByZc1GN1qV1KhTuacGCbW59bfYBWjV6vZD3GzcU1nULcEvwY2eqt7jYEKrTyQhnguXcSV82tQV8zdARSGS5QD",
  "key23": "5uH6vj3aBSipDkL5SkXd7mqV7o6P4WFuCmHV5GoDHhgU6KqcV7TFDjXF9X2Jbqh5qJxsbXeV2m81CyGWwDCeqsCv",
  "key24": "5cueZpvY2NuyzfTB4KbhLS9LepJQmsciinkkmSSaBn9dAz13khafgtuUVA1UUQURprQKDZTVweSFZzW4FWtUEXfx",
  "key25": "4RZHWFLo5Trj9WAtYeTRgc2jkeBaqK2rKPXktQDTdUQBgiRpYjYYRUnKzZGuT9YTDvVpPmF3rUrhT4V1FPePpYv6",
  "key26": "2vUw5iAjP4mbccjrrudAHC9VYTnQsNfqo9vgWSkMnvpnAr6npkv1teVpGz9xuTfyzqFBwAwvyLto6AF99rxFQ4Za",
  "key27": "7evD6QDzNS3ckQs3myuxNgUo1jft7FVHwNkRn81io33a3THXh6RJNcRLA79EXMu5NS96sdWFdS7xAmvzGdJ8Bmt",
  "key28": "3n9x3uBBU5cyM3oeAT3JBzhZ5oujSw8kYgjiqUtJrnG2sx1iH5hEWdMbUfY1Zfqr1n4JcYUsgALzwJJgF8dSid6G",
  "key29": "2xCyWK5E3Wii4JcXHUtNzeHsLoHrBwyWqGnxTpuEPLuXHr6jzt63WasX7b42xNjZsPbzUXaPaSYBPS9E6aBjogkb",
  "key30": "5yRiGym1YV9NEHp2cGZh2FBtUbZqYtrdPhDysb1dgoyePAcpREVZ3fPnwSU28GB6xEUdjRbztVEFwFd5wKWLHhnR",
  "key31": "2ETxg4HeqSuR36WscsuAPT4r7hEX3b2UojMYsAfZqRMfGGkYobBFMyrTkp7EQPQkdqiS7pfZMyGQJQG5Cp17fux8",
  "key32": "58ycuoHWiAXz1xk3pqSdiSFxjaDEjjx4jFeDEAXGeVZ5GMWAmoBCnKtxuFTPcB8uowgJYobHCBfbo3F1yNm3MMTY",
  "key33": "3SZgGZxx47vX8eLXJQbfQSV9nASvo2BLm624EYYom19tjauwxQ5xeQsPnUr1pV63zrqotn8i3ea2nW8JPPojaNiS",
  "key34": "5xH1iEM8w2kGZw6yaHvjjzTUCkXjiZEM83TJm4LYHbjJWBG1xfmSVjhKATjnhgSQg66wSBtzKwxkvLRM1X7t4QFD",
  "key35": "4CaH74K31yPXsEiY6ZALo781FHKoZHGVqJrEaPpMai6oeDNnUofo4ftvBTmRsvkedGECXFWyLJr3KYofqWGxZzqa",
  "key36": "5M4pBfaXVHQwdBjnrbQ4wUT2KdZsQFHk8apRz2U736A2NkCKcYKKKYasRqZyV2n9dDYmsBh8n2HymMEDzFGs9ede",
  "key37": "3YT74FwTitUqwSRNsczxxBUC2tbTDHL8fLaTsfumbwhswX9V3LBtDJrNaBPpoAimNyDwhQB8ygnjNKyexK6TPtcE",
  "key38": "32k1AVhsRBzpzsNfHg62Es7CBRV7d8kGyjuAaPdNFwip6zshcb4Z17T2LEwnAdDEjaStbJmJ78saG7hWKbjEV77E",
  "key39": "2DgFhuXVg6r7vnixQPCmYfU8SekR7xEAQ1nwhUhKNNtDkQbtUwpGhqHZR1mSq9Tf6LDoSmemcBzgSJLLeuEBJNxd",
  "key40": "jCZ74jbGQEj3A6cntRfHynavFEiL4ZauoL8KzVfk1diqyCEAtdN6FhQNWvsWNHbZZN2Eniz4nS5mn2u3iBcncEp",
  "key41": "3wyuzZJ7PQXgfs7FY3azdZvQ7zrPrYpxWY9jJL7HWCqom22A5Qxcu2qx39ytdGxSaMkYmAmmS8Kr95rvArUSVLGn",
  "key42": "3zLDmecfWbnD2wvw5HG5nD24dUaWWzrCSu4LMUZwY9ceemwnWq6VPS5JQUgiW1EuSEBz1Fyo8XmAwSuNYCddMgoA",
  "key43": "3dncimJVe6tMyGtW6vJHnaaZAevMubJnig75fE9aVCTCSQhspZwD1nSYmZggrbZ11fnaqyxpiMQdRt6jX8EjSoHu",
  "key44": "3G4Kk6ChAbxgcxNqZrfxpZK19CZU9CQ2Msn4xcPp8vEGJVUWBcnrenH9gGzobLyiL2RFd4EZGWoa3C5QiYuq26in"
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
