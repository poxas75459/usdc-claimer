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
    "4aJFmicgmuPNysUzwsceYPtbNku5AgiXT4EgHbxQUNT9Zve6ihtVpK6zsBsuiR1GQigsauwWFajQ9o5CQSryMV86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mz8LEj4wjxuJT7aJgMFVcasKKTVtvUuyvnY4bkKiAUq11pT7xVPxcFmz5HrJ6R1qLHBagFkyXuGwZ665URcRwyc",
  "key1": "3PC9TH16pV2EaMrsodT9XjuQCM4mQP8opxxJzFbEcgpSWqogujhE1DqDfNa9S3hsiJ4q9ZvxGr5AUthgAztiT7r8",
  "key2": "3wxTWz63WgdwstaRBmHfP8MgaXtLEnvPH284mDPxaRpoUT5VyvUK47pwQERMQsbc4qd7YkDpz3ScqG47iTFvyYdV",
  "key3": "3iKLyCTJeSakhppupDwtSHvXPR1Asya6okqkQH46VNEEwwsDBoJPQbmnT7BV4uVomd1JwS37GhDuJA6VUVn6m8yx",
  "key4": "4D3iL2qXN22unoEi7XYNcrHq91snpnriBuB1AtWjNj3ZEarRrGSyJP9qdFRH6vWNi27VaGPS7PbwLNGkiHPkBxUD",
  "key5": "3qc3scHpvGWRkKUyXow76d5gtV8866fRBQy3onFtBtUXytfTgt6HbBsh2n69K9kXbdsyveDEfs8HhwD6hjWL7dip",
  "key6": "2c8GuoWrhzrciimdUNxMyqdpuo6wKn77UkoPkwrDYH8pJMTrApagSjo6BXzAUVj2hA8XkDm7r8zg8UjwA6mmB2px",
  "key7": "63qz3FYVqqqxoT3bVJcLXLbPPmUNVQBX8J7dA8fB5rnfXNHfNp5u9htsBFpYee97ukfSCNS6PbWCnmx8mFaW7wLH",
  "key8": "4AGpDT1eiEdEKbWVqb9F5CHrHwtGNS7jw67RyKWPmEcS8GVqZRzFUem1pd4qGvJTkMRLyBcbjJrL6J6xNCUoKvYz",
  "key9": "4gBTvDyzZJTq7gV7GkAyBUdwDNkjZdbqzdgeUwMo5oD9ujveASnfL6ynAJMKk1ZvSkLmkjug9Sj3PCBLdpJpNqf4",
  "key10": "5vY4APn3cssUgF7eRcWBdYjuimpmjXeYZ32UU9BFNpHLxse47eVEcwEvdteW6dXLAF5ZaASYCNU1oDeEFFF7hRD2",
  "key11": "3W1Fx6B7k4FdcZaWHffteP7zKouMk9LKD43NdBcpXAM4KZQ5rpNduhhdaMhjqKrgbNbqmn6v8Gr6aevP1EJUj6UC",
  "key12": "1Qv8UQ76CZBDjbxpZimGLEMvXZ99aQywbR3NKqoSDY3rSg89aafddGF5MW2pdeCXUr1z8fMNj3A4qqSr1Ec8bxz",
  "key13": "3BcuX2CPsKRXCTwWJULtzRbmTvEtFBX5seixdQE3hVEQQktNF1k21FfLTQjHVW7xzTecEPYujhJgNUPMXqDEdzTP",
  "key14": "2x1CXKXJqfQL6gKU7x1exeafNjRUSrW2kV164HSVFVRScfzjvujP4HY3H8RPYrnRC2fHYxwe1N5Zu2Pu5cGVUmhr",
  "key15": "2x7n5TaSEWNY87n3BQ45PSr9enBDdpgFmPFZvvHMXKapAsfGfiiTqa1QMzsEkbczx7Vwfex7dFrohpUyWkHtX9SD",
  "key16": "5qMZMBLJQaN5gpGmurz7EjYQq1AZsho574dWYqKYgGKQwyby5eQT1VpLwPKwJtA6RmaRuLdy3bGu9uJdi5muBykX",
  "key17": "CR5ELfR2HBc96ZpycMrAQ8SExUthW8psjfb9xF6WCwD7nCtq6PQvMujaTFY7QSY6vjRQQGbAJgX4YkyAghaV1WZ",
  "key18": "5UySz1YogXMXMyBtrZGuccapnxoGbxM8GQfX86KrHM7d5HbF9umD6c42muMWm6Wd3r12d417WhP6wxuNiNSQQais",
  "key19": "2QoZwGe92KQHr1Ki7BpLa14KWNqXutkD5dLZ45poQap3WPEsM9eGiyp7w1CeR7FYtkXhfrgjYoUQeitshGtKR7sX",
  "key20": "681agbFStoCdC7uLSzdK1gvKspmV1FwLdGSWhdMGLCdFG6rzpN38FZS81h7q3JgTTByo4hRF5mVr59BegozjpHg",
  "key21": "5eDNwaS44eJN8sMxv5zSjAgaLzQvpWDvcKehaxaC3ELhX4dTnQXDBeMupDrum7rBsToT4YsjL2YZc5sSYwrpVBWK",
  "key22": "krEnroNSUxaMvdV2kYPgun61TzTM3RZjgPH6BrDQtvuiv8DFvMnmJ9UyPvaCKiafSUDTSNjmAiJh6TLrn43muu7",
  "key23": "2wcu3zuuhdm5zuqbGuQetLed2XXTJDmiyn7CyKmRCx76wKwaXFcyYaziGL7xeMnV6g83qd52yqTF9YXPQNho4XWv",
  "key24": "toyoMy6mWoMRT3fHhN3fC7bRpwLg2qXGTbzSp4Sdb9L39X3RTrxgDfSesMPWwm6L6c3Rrkzv3dj9mPDpt5w9auJ",
  "key25": "3sXjtYsWkdEVtxaPC5qNUmpF8tBSudGVZb45h4eXCKYPfQ2DLm94vEPoLqA1cit5sgHugoXF7ekcsJLVJHnNAgwU",
  "key26": "56MampzeULZfKaBDBHTe24HmU6D9pJPqe5AYhcu8TTDfCg5EG9wfS1s4tvxpFNcFnx2b8LnQ875Nk3DuM8YfyueV",
  "key27": "5Uum37NvsxFARSxQgzFAGz995EP8rSrQE4ZtcD4XXL6bGpt2nvxGAWrJmo9oJr38zBP65f59cYPfxjDH1FDLQT3x"
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
