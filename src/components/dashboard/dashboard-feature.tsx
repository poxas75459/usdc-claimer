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
    "4tT6STg2fzSqXg65tiKFKBS54MUnY4AMsAjHnxbZCFCTq8QArPeU19qsBwABWfvnvRK8aGZW3daadQn7aUahRa8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kwKV14GqKhz8kCwfoMac78iCeiyQa4sdceN7dhP7pLD6XwpPWrSKzXUJs9vLk88z3fZQHCZyHm5E1gX8QbAv2C3",
  "key1": "5xsdLTdR6Lba9TCe5jKqDSK2pL3JBsYdd8U8nb3f4UVBFe6zB6McDxNYm53JTh4krHBUdPNDXJ23HHY1LJmkmW1o",
  "key2": "4F6YiWkEPGv3boRuHT5ecvCPdinmcJ8wmPPfhXfauCKaYXiBLSNBRJo3ufLu961umcYmdoupiUwPzaG618enimm4",
  "key3": "osJ5ucMURqcdHxc8wp9auYg6TwauPMMWoowaqkLL4K2f8JcGhzUGNcfVeZiUdDMyfiJMLth9mUni5dWmWc1FAyj",
  "key4": "2s61UeLFA2y1qjiPpPTMPRHL9XYTzqNLkW7RNaTTDSYjmfXNHcPqtkZ5JY55LVWnWgWMr4GfajvCcSfAKS8pAJE",
  "key5": "4oZsB5sdYJCMhM4G4kkUEG9CQfwVNUCiBAco8saZ39wngjtxgVhPy17JDagVCwifCaMW2zvfHQ2po6UeG3wWbeKN",
  "key6": "5Zousvbi9bSJRgDLqzdEtP3UQ7KeWEDTVTaFNLG2MM2zZLTCVUjhXL6hPAf4m1duRm1S31tm3g1hQBHozDTcNnmb",
  "key7": "5BYxXqd8yyNLS8h1PKirX8XzZ5LzhXLK6waVbUwyTFT1pjgD3tkxgpFzyCcQ76qc2wkNw7NmpbvV657BcimwRuPC",
  "key8": "4taGsrQtZrN7eSuTd2i3PD6oZGWfLU1wiaAqUeceS66NJ5Pi6YRn51TTS8RADeVQDBRb8b137j3X6C3ALiQaC8SL",
  "key9": "5KVAsG5u9gSRqpMdrz6MymoU54QaQGvAsXNjVXJVHEaB86ov5p6QQHC84gR72zmSeTtHWyKQVMjavTJGp3u1bqRp",
  "key10": "3XARgT3P38Lu8Duwbai6AiqGc8fcR7a5rJG73npM1j5wM9um9s33ZtcWLft7JLyYxM3dZudrWvQPnot86Nfvq6Lg",
  "key11": "3NJs8HRB6kQohtwM7JwwGaePmKyX2ytoFDTJhqjkVjrRCSFBVEf4pAQramDeT2LKq8WSkqrBQFmwoSexSKAspAG6",
  "key12": "64MeuVCLP5uUeQK4A2WdRRs9iLVhrBkrJmBzQBoP8MbVsNc3EWB7xa6kbFYp8rF5Qm2GJNKKKR3RKnwi8ob8CpFB",
  "key13": "5YJrrXKxjK2E2KBrXRDok7V43ZGE1jQcAruueXToduDB17a2i9H7Y32GMUGXLLpv1Natxruk4ukt5Hon9RFaBiDy",
  "key14": "3Vn3HoW9uK4yAcvGFZvN7ikUBDTJ3PTECqNsTaibfqPbkqSTd5Sew6i1L9wBke9wX9ErVFPUzHxbGMvYTKbwBhDP",
  "key15": "eaJi4exTW2WhVaYPnrmmUQo8YH37ZfnbKbLVNkjM6UqvCDyg33qwPMT4XD4C7oT9jL7t5trEeCJbE7FWAfD4UMy",
  "key16": "5cxySLbYjh1bsvVgDjUpwYzr2wxptMMUdNHEnbywsktfoaYPJ94srXGFRDx914MetXkbrX2u69uBXhNkte3e4jYh",
  "key17": "2nNBvxP7iBXthLzdcYLQi11YJtkaRMQPBJaHUxDAmz5pGdC6nEiJzXgnEcqRrQAhd3AXK8h3W5bNpFZ62KZYXVE2",
  "key18": "3UryeRPVVuJD1oRc5zkykKht12JcVoZRFuYfYqLgrcz7DFHpPJLXAWjsK9UxcTDHfu7bb4gEifaJrgYnkygxqS2F",
  "key19": "5HXayuzu4A36KRDJ6LGs8DkqawaSry6Qaf2pLb2khd8PMfB3dPkjLDUczZiXoSdYKcqUzEDGfZHm2yrK9osFWuXv",
  "key20": "nzyueWHmqZje92cMtBELZRb8oN6RGapG5jLjzHsgZj5ebg72LS4dGHxSRRNbdoJeHsnmZHDrsXMahErwFTZnTG6",
  "key21": "iLniMLhcKhqztPzwKdqwkSJ5BwzJWepzMtMBcpFcJRMUF4HrQwEg7SgHDuUyyKuGdmeXVeT6QP7cRcf19APu4JS",
  "key22": "27fPrrCZ6KYxa9YHHbYeMPyzxXxeBJdtN2BFoA7SviaHqgRCD18Z3EDHqJVnxDrbKDfZZ18Pp9vXdX4jgAFeVAP8",
  "key23": "5YuhxcmYb7T6b8X8JeMifybZXBoUZyf16rDtYEZ9BkpkVzgWLPhbu25q9yWYwmVo8cmHLhqpxhbnkkxcUQ9oYVLD",
  "key24": "5LejifLvREm69hRaHDBBhBFqCuHFM8vPekicK8YVdm3K3Pw4tebjiRriqKmGaZb76MRTcZ6xfSXNENQogNPpEQST",
  "key25": "4QhGvbA5nJCmCoYcoqdN7bL53F6LUj59XZaDpxE6V7h1ymGVXAhErP9SH6AyKKgEuRwPezjYbv6dCnUuKfdyZxDg",
  "key26": "4BMimHpnkJLUWKxyxY7N7dJd7tXR5UsRXaQHKC61ojfCkUHeEsmE8TLZdfFkZ9DaQW6ExYDa35xDb89vPtfKKLEQ",
  "key27": "4C6q9hFXtvhxTq9VFmb21uctHzBJrbMi8EMvtGsYFTTHyPexLz8E8urC5Jfy8Y8JCz9xPSa9bTk7cgTUXM6WtDyh",
  "key28": "5z8JxRQBfGcv325X4PhK19yotNxP6Wm5koMw5ftczBt3Ft9PX71qFEoGyXUXFcKANeKhpwFb1QALjHZgU29t3mWq",
  "key29": "WFU9p6RBxB2bQ35tEdXBXuFQoqty3h6wEdvCKZ2zkUBwPUcuUgfkBSs67p2ZN8N8AyTSnfaEV4y7b1fJJykqFfG",
  "key30": "sbxV7a6CVM2E3keqZqiC8VXHmY5nYcVR2ZqozKqULkfhD4F3MhVYVLDz6KeU97EPbMzYZ2c1uPjzQYsjqWtS9s4",
  "key31": "2q56qGCXdBGagxRbC24utP62JJgjWFyv6RFCNNTdosx5RBNBUQV6XSTckSRyBsY2kycu5DJd1scXDhxxhgVbEkud",
  "key32": "QncCS1bnowrG8mgrKJAWj75SZ314r62E7N3NEczAseMuTovKkCnPV6JCBtxnRjx9hS5HGEm2KfF667WLKDHuKxD",
  "key33": "3LzcaQ5s4MQRoAvsGjvp7WWGdtLBbPn4U7w4YAtNT7m9pevT91z2HosgXWsnLgoVvuDkaiWmJUhTK5SYDe7zu7ZA",
  "key34": "2oUDstVoqkpoRocmSEGqBVhVQeHdeBdppPrj5pEJXT6arGfscnS3d15n9LrqWADnqbYVkcbbG9cMfduGhU12cFDw",
  "key35": "2CxCykFnh1W7JmWS4jDLUYLShDSgQaKMaUrMdy5kywJmWui3DYKNVATRfZbbpQqKk2ZLD9GBAWRtfjgqqxGJQN29",
  "key36": "aKiJKgkg9LatdZyh3b4qHh1XGa1g1ASHG3iPLjW3Ldzu7C5YSc5HhEwTi3Ad1oWSZiSRrQkur4mbPNJroqvJthd",
  "key37": "2DvJ8q8jJXWttQfK2oyTNqRj7XZJGGpHziRH4EQfTgab8qQ7QYEGpHALxn3uqCQDsM7tYmfTMdMaLBpdWSG4RNRm",
  "key38": "5ayMrJWFPqiVW2tBzWbijd9LEqGmW5vjiQstN2z6A5pbfPMGc7UhAbHxdmW1hNuYX7UjDDoW57M5jGo3iQQKTgSz",
  "key39": "2fjXFmPVkhQwN7KSd8Kw8AUzBFeD8tqwAcYND3t6H5wZ3eA2itWfzcQhP3YauooNohTGgdor2hbgqbfLQY5yfEkK"
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
