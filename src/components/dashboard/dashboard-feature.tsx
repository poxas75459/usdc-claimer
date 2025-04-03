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
    "5gjeGGpogq867KXAoEVShfUvfikQfy9xWHzgxVUV2yumJFBqkY4zW79kQXXQdL1AqPjJK6JBZTSD7Y35Q4Pov8tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29sLB85Z4Xk8x47aBLFpYWci4tJ4qqKZKr175JBiLh2czcDY5BGkRJEspYALUhxhFxCrCyAKEiNn1eDApVWWiwZD",
  "key1": "5q5kJ3uqit252eCrz6DywnKX12xVLVjEgMHZMs2KJE51K4cGXFVDx1wYf5ikk9mXCN9jyeNCQy7dSvzGLH8jEuPB",
  "key2": "3Cu5ebre95Fqh5KECDP8441LS8HrMDcTNEwBPYTGj9ZcmKb1mnpnbK7qEZQtjBsuUpurfbkVgE1d9y3ikjnSYzZj",
  "key3": "DKqGrnsBvvuBenoBUPdgpvBDyMJnq6x3CkEWi86oHLGAxrpUC7yvCqT7G2KyT3mY55skYwWEqSwsjb28CJdMBzm",
  "key4": "29844KzhgXknVWkiAgqZG6zVWSutQcnSKJvgkdq5e3Ep4TgdWXLVE3pXciZBEpQRBbmhkqbbR6KJHBudKyEYMuSM",
  "key5": "38JgRtgWnVXEmQUvujgFx766DeRHMQE7YGzSrhr1ByEftgFAft3y3USkLczQSQ2TQ51AEh5vBWC7v6Z5P7nZMjAQ",
  "key6": "FCUMtrgEtdXNC4DWACANs71jWTSBy12DSCGK7UYVbJ1zt174G9ebo5zUprWKGBRmjsaN756dmSe9tMg7GL4PKQW",
  "key7": "4QjFYRp8HRPXhiMTZs59QvoJv9vpw6sNC2KvwxSjBWuATncZGTjkQxcbrmg1PWuypzF1KeNw9zNNguDXC7A7YouE",
  "key8": "VcoW294nMat1JLeK69YtUSo6z38A3PnEeZGKcUioemBT6ugXED6WsbjUcxWmkPjL1Dw8Z3siNUT7Ft7UxtJuHTX",
  "key9": "4fN5YCigvvYfUGdA63wRjqHA2gr76QPkGPXDnj7SZudzg5taMvAHkSZAHVzR6tUDjR2usDMGFc7cHX4WmHp7ikc5",
  "key10": "2EQt8Dh5mZFNLg23MVTUZbN36embFbfG8p55wArB2P2WhzT5n3a8YjiJVwPPkacLRhrZFLmvc6AzCGBhZXDFfzqB",
  "key11": "AwyoFbk44oPPRM4tDpSCaBq1kjR1e5wNjfGMnxQjWydQqrhqLG4M4bmyweEUD9MrwT9Z7Qr6BNq6A5GzMxvWBqK",
  "key12": "3NssNKrGfs5dG7SbyxQGRKcexdRiYkkArXjE1oQivAAuSjB7FcWFhigETLK4cRv5qAeNr8nmhCQTrqP9s9onuNVp",
  "key13": "PHu6yHTKMe3W5ZrwqfwUU9Ufc9qfctzLA5Lt7j5iSEDzxFCTcXMYkLSGjnf3RjtDJoJy8sRxxMNYKtR4qjWA5w7",
  "key14": "2Zah5C4LQSLj6JzfDZcQnudiLJYpLsnxdtMcCJEV7J8ADsHh2G8MWnJVsS7vZDaDPhEVEMLySU6sEzrYiJARiUe3",
  "key15": "3WW6gfgPBBdSrAwyFgwzfSxnnF66Ray5nmwitDgTeqnfeUMPSrgp45B3y2cRoJ2esi8RYqz3CbbXVzr6BB5j7bbg",
  "key16": "3G4GKNyABhbcFNs3CFafrtgREBAq9ME8HUgeF7JDrhY98Ud9ekqBHU6fbePbFXafGA2nygqDQTgCzs6ebVykpQUD",
  "key17": "5BtiKd4YJoV8F3ZAwX8sVhN6ziCCeZazbz2Hhfr1rkUWPjkcrmqZPPUHpQadhLfTd2wXS1cKP5ZKaTWT43BD9XxC",
  "key18": "47e6WizUxUVrpfnT1rga7AtYPSJVr2K494muZgaRQxLLVLnkDaGBRoko1g4r8DPXMDxEhHHpTuq7M8hHPeTFRdGV",
  "key19": "3BSoqso2tdj8gTKoV6QtTiwpT12aazcbpL78YmjGDpWuDL9HZsXPfegTnst3b4Auk1W5foiqrHxSTem1agtuSFmW",
  "key20": "2yK5SbYZS6CGyZ4s4GtWXC1HTTaHy1zKqbnxS8CwBmemdEsKJcQvDcDXD5jCWqEyiUCX9z4pU4c9gnZpdgmkL2Wt",
  "key21": "3PNHGzdn77BH5SuMiYEcmu6AV9ype6zLnHB3L73YgsoxcoNpaaLYTp2MPqYidhGfY889e4vXJRr3jedskGaNUFzB",
  "key22": "2ihBuw93QfUVCYGeQ7rZjAwtNsgXbbVU3kE3qxQSTCBDJMejUXco1JpVmR5WC67Y4PyAQqNiyZL4GyZbWCQEFQN",
  "key23": "5P3UmKzaNKc4n7GuvAfGx4ZXijKqEW4E7nTo6WPBtQdoqPkGhp8v3yWnKsyMPJfBsAWkrvscbtQWT2axeUsEERJg",
  "key24": "55x97tBtgT3zMn8TsPwQZd7Qco7STFeJx9xTz4ceWbALUVA6ooz8CAHnY9N5Qg4H9K7ajLeFZfVUgMjVReJjXjqW",
  "key25": "4yo18qMPEFxHbxj4pWk9swnHF4kPVq2fgcCAWPzNdUbW8PLcmcMU9n7kYGkMedP8XvB1tdQ83DWqy3UrjaCuFqzq",
  "key26": "2qXAJAMpwwf9g6vTRh1LYmGVQn8wgQyBEVtNamCzeiCNhjCrD9NNJFpGip4VmjaGj9v6es2g8jrhnNdRprTG1DpV",
  "key27": "4LYngR7Jhf9AXVJCdaokhbrXkkES2fo3BnjsUBecxSahiqhG4sLMjAvkyL2f6SC6wBzw3JwPdfFYRKguezTYiZZt",
  "key28": "4YsZKXcust2VLAytQLJzPXWrHLJxo2Box1CAaWvQXPwB8wgULbePvWEMCn4FLcBpb6MNBU4HoJX63MvT8BHDfEac",
  "key29": "5NuNgXWuVimKQiAPeyb516qV4UNssDcAE3Rgu2Ygcg9AxfLfu65qDCa7h2Pe8pW2Y2gnZVFH8JiuZx3CoF51czKw",
  "key30": "3Z4yYzxzQxPjDqXdNmJPBQnM8DqjkjMCpB3VZTei27QwsgFJT3drvymVr93oYBngyuVKsv3K4GoGrtfaeyWSSjsQ",
  "key31": "2C73ME5m6Vq8EPS8Doroezd7vxT6qK5RFPpb6MnHNwkdJdDzbhK5kTS14qXmsVSEH2EvXCjjt2ULGJEJ7hGUurkF",
  "key32": "4YSDryjSRpQudNrQ65ZKq9HWAn9znqba954SABFSxz4BPEQs6yMwVkfNWk278Q7PueogeMLuh44mLN12gb6eGYhK",
  "key33": "o7vjYgJXG53vYtP7JbykKVQoZriXCqbgA2WH6yC7UTD6ktjN2pFr11igdqXwz62F3NvoPXLq6sJZi2bdQa34oJV",
  "key34": "5U4pnGxgT1CG14ENgSJEoQ1Gqp8qn8mZoGaiPnRJ8uEEs2mrpmFsJLy1fDEXvDpd9SWXRtm6mVpDouLbMH89WZBx",
  "key35": "45W6UKH8UG3cpEFf2gfj2f31B6K2twmG9TzPHroCmYcRmJBw8qRHpmrYRuKhmTpcStvjfveWSCMYUyaJbkNu4xJG",
  "key36": "5oqaQEThbmbcVoqNW5mT1qZVc36dEwszBrAY78LTCj6pdAcbMMfGyKuJK8BJ6fwTz74GssELqfQKEW4rGvcr1c4i",
  "key37": "2fgWc3tPaYC1D3iXHkPWik4so9xVXAkagRKXxdkhfBa8sNkaScusGhXQqiZ58YRkSZgF1kGgsRPzHxZWtWSv7QnX",
  "key38": "2snmD4REyrgZrh2suontx3PM9RvgMRgvrceiwFpiEHQwkJzU8yMiSoV6JurUY1QWM17427BQhkS5ADwf3w1aNqEk",
  "key39": "4a7rqf87A5BF2mRKN4xLijECGvx8aL9WNARJpBvmhegfE3rWosHhdLVX8svDzx7oqopXkKKFRAkfVxaNGV7uEC2m"
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
