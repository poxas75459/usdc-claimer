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
    "2sB9dG1CeHmSgQN85xG6ZCJPjBWbeGCo94iFAbH52QGCaeTxTMQJFbyA23MhrfVBgEWepuugqpEArvFwxsPWhnWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66xs4FmyYNZyNWemuN9HWiVCi3mA677aaD6KjnaHfPMkyymZpfYHNhvKLF82Rde7Mxp1nC4tGcpTpQ1p1mkWwE9n",
  "key1": "2BzMDroMDn9Asku2u1WZAxgsmtrj9r8m4TgGjPjdcjabEav2Q4KjAkpUnnRDv6qU34VnQVjphACZZNnQ4VDrqcpq",
  "key2": "2eNLxujgPEGoJRjWKKjV6EZGkP8HVjyG4wST3dbFHxLmpajS3XatBZCVk3wQPm9mA2j7c2Yf97oTryhDkx8xz1gG",
  "key3": "3vioCyeMYNgFPStUEeu76xVBjNE8uFnSH3Kj5wBQ5kckkFsEzADDCpgA6xRjohTUNyB6pdx1dgNtDYxv2U1DCq2b",
  "key4": "2a4MqP1jzLVjWTjWpXhprgFK1z8yngRm7nsdbSAe5k9451iGbKZ51RDCWZjBJGCSYn1gaZCBAgQjevaedc7sS1h3",
  "key5": "5aCtxrE1mQQimsAosjv18FU2Gt56yScK8BiNP8iZr4NbtZNdD7ynmiPtwPp5jwSyPrKpFEsdwMmK9YySiV5rNPQy",
  "key6": "4u7M1LEEvahX8f4YP8cbuQi9cybbSqKGbMy9p47zrNfrSQhUgMq2qU8oq72H7YdSxfbR5gQ37WbB7awJY9KvxhnS",
  "key7": "3FH6uQueFMyXvem7G4Rv17gZhSZ8ChMqzrVcQbVs9HF41ScWTkzuVLgbxnHYfEVvoM7ULjpdKxFQwVW3GAUV8mdV",
  "key8": "2HeD5AjoZjhNU9UfTUxjytyEwLPvwjMqYJk8GyMMgTnRU2PMJjPn4eoiV9Qa8evJiqqAsVmC56dPdbEgDuaEktAr",
  "key9": "3q1ZM2wzrCG8beggQapmBPwkfv7ovsntpPZuJqZ5pvGsKcYdnq2LXqun8b3VJfL6VWY9m92wWEAoNS5zExVJctov",
  "key10": "5Mo7JQq7BN9CjNj6vu3ppCgGzC5PzFkzKKzCoxUBeC2Nzc1kYpSowd7X1Grv6YnVE8zgMwJP38TZZURvSoRLMcVF",
  "key11": "4VnTT1JhgVdLPYpmjiYoN6K9aCyvNCYsU1ZLAkXMfo74WHhtmE1wZ3jBhye5HeBXbMMS2MmFg1NSx7evDNohWgcp",
  "key12": "3qeGPFrT8MZ2mGum3e2rR5nhB7PMJVESXFKS9xvTkKTEZPLhL6eE8SvdFTDpofe1k7k8LRvhPjLj1s24orpMnkXU",
  "key13": "3sWaykQfriSRafxadLPYSpjre7if8Vc83atTvaWdcZZGhegEwKSkGPNfyZ1jZCNexYQeYDyWDzsnE5sse1CLdT41",
  "key14": "2L8Ag1FGA4ULY8ht4851VeE3fiWLufH2y8oXjs2EX1mwqnbfQTKYjk3jDQWmaXN2hMWu2XKS7NRo3Ln4eGpkPwgN",
  "key15": "2oUJuioZNoJ7spLrR78a8Ev4fWn5a7sFRcCYVnmnETXCezDJ8XYJZtkawsWHCJSiKjnM5BfqWKFH388xQvPcPiGZ",
  "key16": "4EHJKwHRJTUHRj8uq6ZVYPfCJH4JCZaHSfgoj2eKzJFLPb7wc7dEzFL2tj652BHoxccXHq7o7Dz1Ar7QRmyFyjwY",
  "key17": "3Bunvkda8yTpp7YbYpRSY2v1rdGJmTUaXp8LowrFmNaoLUM3SkUMfpZoaLYRXwNZt4hgm6pPvakqqSGhNPb1aDHR",
  "key18": "5ygkxbnHayT3ivTyWwLpPuTf8L2Xy2z3UxEroQZTt493u5N4xh15FWcXaU2T4qMjVcFESNsTXYDMFHo1xJhcMW8e",
  "key19": "356erN7FWMh7xWpoPJNasTvGTg57XVZ1k3xEwbbA2yVxbeY3hwYSFtpQ9pU6ck1zwkfdMMRLLPHQVUYYND1DD5c6",
  "key20": "4qyrEZKcTCCWJQzShGdq1nZqcywpQL1qaGTwPvxyNh5sE5bUqS35PZDQo9whJgvCcWWpvQXLEVKqF3NgC7PRT3He",
  "key21": "2dhJUaV3C8WsZ2RkNBUEakoWmMoZWtGMnDGKWxmVL8zPb9mTi3aHF4aAGABQSM2UmaRVeMY7LC98Xvc9EXLgbv6v",
  "key22": "5XJDppZ8kfr4my2tNnYzmN4H2FsZtJmyqALDZmUi4X8e6YEL9uLAZBFBaDSvcoApaTKpbpFzsBP8odny5cw3wYst",
  "key23": "4hVnRGC4k88NKwmRZ4DaumN64FjUyBF2rJSLQXd2HPYDuhX8KsmJrCyc7iw6CUe1C6WSJSKnJAAvM8Qmb5VJXD7p",
  "key24": "5EEbu4vKgGKiCXWgKTA5PTqd7zS1dSf3oXUGZ9hcfpjXaKnU2zdkYUKyhgBtAP8BkyEzwuFUzKbx3Qv6Q6vwkLvb",
  "key25": "4pj7EVXVpP3cCns1ccSgmvPyFXqopvkY93Ujz4K4Kg5FcB982vzLK9PgFw6Q874iPrBYhXTaWWppnmAN4o8ojWo3",
  "key26": "2X6yoRjDyhs2CNgKL2eBCNk4PA5tafGt8acAqnbHUn3WFJfC5TH5yz7U629EAVBgiP1b7PWUePA49wTKwszqewvx",
  "key27": "2s7oYhrRzFuk3EyPZg6BaZ5kjSJTr1mCScj5jNBisHRoEX8UsFc2TyBwYzhXqsFVt23WwjSL7rkF2n9AeGy3FSUf",
  "key28": "4LP3DvdjHjRLuqWRtCk6jevShoSSfRywNXVSDzgJDhLbLZ1D1Nm28p1be2aUcPypAui9NERyJdGEWBx9zpoc5xRo",
  "key29": "52j17pavhPseYx6fg9vQtsosqgVvRgiviCHfxmiyxfZY3BRDZXd9TrdysACeEVpQGqzWtDCnmGBf3Dungfxs27Cb",
  "key30": "38D8o4RhpaTi3NESAEscYsCtRgzDoEsRnYZPuqggyZ6q4bdxweQ72dBc1pKvesP1oSuxxhSnQWR3UrTxWvy2bHja",
  "key31": "kTgGMTMGbzDkegdgDDdNhgM8NtTazVR6wBz5FZVkM9PEu1ag9y3aa4zqKqjcfCBQcCc62ap7kCunBWAsDGeSDUT",
  "key32": "NquVUecfLWh6mE79YLnGJtn2c4E3WfRWwGBqoVSpVwc3pP3hiVUjmeEdSKNatXQWt9vBEgTmbEEJ4ZbrzEUBXYd",
  "key33": "4gghuoNxVfbN3rDnPtE1B94cYn164oAiKcR2HQGAJFCEuSBsp8cm2cztusMRPVpJd3gaHePJXhU1kUWitGQDSwSv",
  "key34": "4FkBKVtm8SeF3BvNNekMNbvfeqWmzNod5peVaEwZsAyXJM5W7CtURxp7SoSPyAyuwyqnHnvgaeBPqMnV2x2GvKNQ",
  "key35": "3ibCUsisQsGwLwarkJd4RLXBZGe98Z8o6N8Yv9VVNJx8FQGBMGtS9HR77JtbKYM57qDmMfCxXKdqgrxtN29EBj4g",
  "key36": "fRcdW9B5ntuvpZbbAqxmoV7bGJ2b6UnHUJaW8oNH8mXTTNoJQFJw6iunzsAreeAA5DmFTLu6LpcqFviLe8EYXHv",
  "key37": "ZU9pYWN1zAJmQkjeTgcCVPzaAwWRN9apFYgtav5uiCZmZoA2uLUQbUDrgmeuemAS3q5M4Uw7rAk78z2ALUGmio2",
  "key38": "kZ6ZtEtGoUsCEsZwuRZz7PvKG4zZ9YrUtTKe6wdobKopgQtAxrz5ar6LwGCTvu6WzcW5uYfVT14ccQPpvLwFeBX",
  "key39": "5y7VYx4B8Hq1STRD9CnDmGGNnTLxygGBruUKhWykbqN2k5o8noqYGRSisW8YGM7c2muEAJWiqSScSL3Y63uKvR6W"
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
