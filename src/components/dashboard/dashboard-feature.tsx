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
    "5vZpcigxsm1sU64rixUrHyMUWyS4fKRv27yNmyhfvnNub5x9mZoLQmEiRoxffJDhCFKXnLhU4tPgPqGZQYDaEhA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57tMG3T6CPfVSaSCMtqFG6LA8fiPqpwKEVwZbm7JADbYrZZmvxr4ZJcB2gCKDpipWMScp4MGm6iHKWJJLfFzJbVQ",
  "key1": "SR6TUxuTBd3eeGQnGZU2qwV7fPMC1nAmnmaHHuUrnXKNEad6n5JTfDo7EVSNrXnZa6trgH8dkPdCFimJ4ZnUf1W",
  "key2": "4L6mirTCSATrjk85TVVitAL9xhjztC9CwTfKenBXE1oYUaU3epmKzCpGUCgntCoUMJ4Q7mbL21EgmFvDc2iUD8fU",
  "key3": "2zYxWP8CVvYYqsroyNZCG1K87oZ3QFbY6VDgMJ8jydsWFgJBVQzw55PkiJs3dE5gW68HZ64UsUfv5dPMFcnWQFkc",
  "key4": "2kkfdj9X2TyNUvsLroUwiKs1NX8wcWAce3KzrG7BpRg1m94qakkpCSzH3EiiHH2hJPnh9GAfUnpfmkRNYFWSgvdH",
  "key5": "5XCxGt4JFwbDrC98KzzHZhdRAQRkytSJkzYccWHkHjto4PuuLLVk6KTnWzViZsRQtWpjkKwWQdc2EojXUUwkMDpo",
  "key6": "5jdk19xaQT6nzSr1jY8ZMJmhzGAqrpYGswEeQnwhjWwSRrJrsnwaTiBL46MKHhkbkJJgeqHPPctReM5RxhmBiAeq",
  "key7": "3XcAJwfKxQ25N7EvL4smNFJipzfstPQQUwAhb2pWEamZDigxduBU6fgeDrFVnzk8qHPcC3ygsf5S4wht61QecCjy",
  "key8": "3KoEc5HSBD4Y4YLvp6t9yqUsm9YWEMSseL5KhRSXe4x2oNNT1GT25pRkFW2mxwZsSsWC5b4uwC6hYQfPaxVfe8B",
  "key9": "3TnLTpnoobETCPgsfHKCbQAAgvNuTcrQGscE17ZoTWbDnCJx7GPDQqbVyFmcJzxADy6Bv3Jo1qDFVGkrvDnYDgYu",
  "key10": "27dAgisTV6LPku1QBadvgXWqHK44Ve3BgBc2heD7ZmnxXFmBpXgc7vWCxTajLYKKz5qepcJBQCsifMpMNXDtRvCU",
  "key11": "4FAAFW5eiyRCXAzy6MtpGFqtYscikRkw5jipQR3C7pvtSd3KziCYWedVaM2nbu5DSNxWTTdfiMZj3RriSXWN6NkH",
  "key12": "3T9qqeuMwcfC1copyyqZdQXsUQo8zTLtmZLxKb2xg5tFH7TExeREZ6A3zcsPMYhWnaKVCUZjMq9tMKhCdcUNf3P2",
  "key13": "29ttKEuzcSoeQ4eBzbijZvsLRRC6WLSsLvpCCQQPfwvdsbeKiYWMJsqkR4k255sFtnqDSoej6Y5gk2KAGGv4M3iw",
  "key14": "48AczvDytotGutC94pB8NEYXEZdcmEAkispmLJ2vDpaGzi3o3VoDJTq1T6xvyaiXETmaLT6bVTHRTYH3GssRKodL",
  "key15": "n79tZXSsbHZRVTweYLKdwSkYBQSj3ZKkNhHB6Eq4UKAsdDam9nTgHfpjbkXL8TBu5KS2C5wMKSQyjYRPMcyA6mW",
  "key16": "4fCAdmEkMhNfJw2tTnwtkC35TSeCvWHeNAjfRZxH5Jk5pr7P5HoWWjvdBzCPRFrnkJLToaMMsPXPASnT5cmNTFB",
  "key17": "3PkvF2hEcF4WHjKMJJXy5XdsrYDcYMG2ft7TCoAXueD5gBc1ADMf1iHwxDomaKwVrcioynPRrkky3VHkT4HDty71",
  "key18": "5PMPDNvbrtiJMUNGyFY1odvZ5mfU3drJNZAsKo9kRdNoVSsg8VmEqWj4nvaj4LsfgavEHryAZ87uFW9KbgKjpDQD",
  "key19": "3moroyAqUN8JouVVNXgxLFjga3G8B4hx5ouyBP7NUwjQw88hTK9UoGiKGkn5pAXZ4NVgx1uc63T2YdphbgKRcNBy",
  "key20": "EoMwkfiL62BssYftCb4HDzxC74woPfJYepDw9Js335RNfXJunJecUYikrjigBT5npk1krmtjq3vAFtUjMLd4Kmu",
  "key21": "4LKVmSCogBbMgoyQXimW3PmHo8e45FeVHbm92D6SFAEa6fTfQvyk72rMMJyifWjtXbmRmTNZqNTFfHDGrc71k5z2",
  "key22": "3FA3gRzcvnBY2SjsDBeAm8vJsanyvkjgiPnGKAz1dzJVau4NFFGZiXWr7QCVj2fC93oWg3S2Hsv1RtdUwCzLe6Qa",
  "key23": "4NKcJmMjiP4TcBEaKKcbuMErYFRxpgZKVMtCZiE5J74njEUfmkhVU7NvyjXUrKtdBbvkQ3snAP5cnH36ocPynH3P",
  "key24": "43m2Sjd6Mkv4iyo2gxEiUJCSPahR6JBbR6gsKs3VRkVWrLgYxteCbfDRTTzLwnpmsfNReWkzf8JaBPD5UJQcmiA1",
  "key25": "ASpt8WBP2R4KooTWpYhh8qW5vrWuvcFiFVzNdSVkcGQnCH8Vi5ApQau21UuDjZbDfa2b14Vrf2r57zEzNAXESwh",
  "key26": "5VyoJS5Wh4YPSnGyd9DD2PLFszg8HkgbAbVYUvLLjgfTxi1GkpCazaHJ1vyUhC53W3rt4zhKhTaLVT1gG5mkmGmL",
  "key27": "NmvCUH4KgAvLG3jZAGosNJ3we5AWs5ACoETEpiPQg5N9aMpmdWNPxecgecutWZc25CCvXJWWc1vCJPrFLPEhpc2",
  "key28": "iVNZKDcMiQXLboUQjgRJoJjCrq1Z8GygM82babAUu4FUoH4eb9qYtxidVRap2hsTt11Ge3uFPSj5FNAUG5BW4WH",
  "key29": "4YYE7LCFkWAX75CuGy72Ct1C8CMG2Z7dngGvH5LErmUqqEftgbMU8TaYmet5Lgq72WVFEVzSXHhdBsRU6tKMrcQJ",
  "key30": "39wEKEkUnH8mGq5k4f3gLQmB7v7jQKQPVByrwUbczhK1ZtVTB8ggftdhez8fd8oUMaudMsGjWznMs62x6xSrSpWx",
  "key31": "2Tjv3Xecvkoz2JDajLGF2JZwPztshPpB8BzJkpqJ9AqpLkE3gSTFM7P4sJeBaCxHSa9QkiQTN4mD3CYD5L3dRJs",
  "key32": "2fsYUwY26NN1wJvX1XtdzD1bgenzk8tjvZGHU8f1ayqXY1MEB2fQjK29yqcdhvzSyLR3S9u3UBn2nnUHfScUeQmd",
  "key33": "tpE7PjFAsKetAMYMCrWf6Eao8f6qQWKBE9tpSgTwXEtxzVYo7Kb35mVsKruKB4EJVFNNKZq1ZcUmyADPXCDMBeX",
  "key34": "5z3hEwnuQpW4roLLJWgLd6257qpGJqWhUEqav2vtzDzP1SyuzGsq9aCvbrdKyq79xRjY2hop1cm4kPPtbAYsqY1e",
  "key35": "2N9aiC74PXigiY6dE7J7WKbvVNxSLBPRPMqUQ25ZBvgRPPDWQUXQhRs6wYqMDCp9JVQ1Vxm2dAFpYfzgiDkb4QqT"
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
