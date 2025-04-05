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
    "5yrqmSwEGkK3BFN1qq9ccu2g1EjX38YKX7TWuiRxF66NxG6fjPqe6TfLYuY33E8gEsnkq3inpB7MQhdq4gWRmtwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SQ6Rty5QXf9ee9Q3JdF1hhgjSw4uNpbmLFqGxVvQhFtkKoLUDJd4FiqrQAxosEUMDguNTkJ5gPWNz1XWRLBsEj",
  "key1": "2Q9ChTF2Vz5xdNPUE3oVzG2vJaDrPpt9RABnjnMRtG8cXntrpP7N43x514Tn4LbBwqNVr9thwvrgeD1VXr8W8R9Q",
  "key2": "2XhW7B7Ag3pW6vZ7WUKgcGuk8RbhfANkAYH7qfQDi8Ft4jUsZG5rqiVubFBMLBsUXwj64BqVuSbP4nU79t4tgMC4",
  "key3": "27w9KsfcS751YFAYThQV3YvKveQwFwLuhqxf75e2LDR1dYZzfWmArwGaHvZvLU3rQWb1c1scbEvLSz6Kit9bRiwH",
  "key4": "4oRLiK4iJrUmC1tHSpzbr6fqvNU4jZzQoNsMSzvcQyFeExn4Mp5tNp8ctqvjdiqWWwXHqWxVSiApXANgstf1yDfS",
  "key5": "2ZS6ZC1sjvdyR1LukTcP7VvE9xADuUj6auUYDqSfAf8ZK7J34b9EgPJUDzDPJg6n92XvR86zv5m1wSBfqT3FgGdw",
  "key6": "3dJ8ZPygq5CVtpfBxcVbFvJ2c8FY9WbMQ2K2tvwNtMSWyEYR9PBwfF8GAgCskBxksWe5YwmrGWCT9MDZR2JP4SsG",
  "key7": "W1wKfyfaPRD4hGKNa2orEoQAYgBkXaxcKKRVzzmTdkLh5ZfUgsWb9p5c2xxCuCZQwsCLCsFLrsC4Bgib98fj1bg",
  "key8": "5xgqLWfYKdedtSq6S3AcwQuMVJrSs18VoNrZxk3tSeyvdrmYBnhAQFc6FqfMCmqCyepA9S3XiszqbW4Ho9LLCmww",
  "key9": "5RAoigPCpnodcDPhRXMSR7SmZnMN1Q4aM1P2xfDpomRG5nvsLEhQTuo9ywUfGT5nwopvuVxkAU4CuEFHGsK5dvKk",
  "key10": "2rz2ppdBCkiGpcbc2Cos5zDVVbdaYcWZ2d1V74rGfUuiGVDpQFpYP7u45xEW5n6GnFziEqCiRW9Pov2ipcuVMmca",
  "key11": "274cDFm3ZdBz6SZ5yaVvuJD5gQ6CuY8CpRyCYAMkMct5V9ULCbCWUpgA8m9jiNJPrPPrF5yKrXpF6KKPkwMYZcSM",
  "key12": "4A2SaJZvtgwDWyGJiAVNgUV1CQvacLevh3BjozvKpiNQytWRDjjLuQYpozYNsJedtc6PuF4YYZEEZScEe3gZEhZQ",
  "key13": "2ZVZXjCBqfVTJqqTyPRf3XtxFSgq8ewpYnivTjYqMDpB57YmGqumAkzA64VPe7hFRnpuNR9FCvCJ2e5GVvuxQG48",
  "key14": "33iu2dLyWNmqyTvfen7GT6b9yFFxepekKogdaXBvFmCeRsgvQt8ofCAymh1PnS4ZecJmA5GxEBKjrjMBfbW8Uh43",
  "key15": "4VzTcEBxyhD4PMrKg9bwLeZz2TR3ZbG8kbzSZxP7r71Dqf8uyXSxD8tkDDBhzi9KdQk9DEBz7vr8wLMvgDH6jKEP",
  "key16": "26tm9uXZp1PCeFUdhHB8kQ1MVFiTsXHcUQCnvXk2tjnteyMCPcCLaSyY4SBKQdkc7Uwrsytw3JX5vt2tmNZvbz7t",
  "key17": "4V7rGoeHmEGUR7j6eH2F5CJ91AYXu96q8cBEvvmGwY1XWDcvkDc4TaDinHmdep3Jc7uKEoaqhqNV64XNY5YY9fuk",
  "key18": "4zubZ4SFuBRCe1m2MJa5fXALoDAnMR8LHmUm9kbA6ecFVB3gNfgjMzxi52Mu9Yiwso6Z68QjD2ux2pgVwSunvfUM",
  "key19": "5u5UTLDW9AVAG16Z5TpqvK3mRVSJPXD2ruakYn4DG321rUomw4ByL9X2dzmB486z8FeMRHaUsLMrWkp1UpmgV2AX",
  "key20": "AMkcLcTSgLRamunpQohCgGmbPFN3QnYGDiza6nssHG4FXQUfksFHYFpCcZWhFqaxSUDjXUBept3sMva59KYNxxV",
  "key21": "2hShWGAvyqomo6Qot9xcfs9C8AznnnkDK5gheuhnYb4K9RWLfKDV3RkavLBt5HbuM8qM865u7KP4osfdhUsY73YW",
  "key22": "3PbAy8KmPteVbkjFfSJpXPJ9RXFyYVsdkNwZx7vBKKVDKqLEhvoTniB5AqzACNX8KjPt4NcRmcvHQib2LEAbBT7V",
  "key23": "3yakseb59nEsi8CT3sy1HvS7eDZLdRoQKMQNBTCMzyUoDZb7McshWKH1sbGRcqv3kAjUH2NkowTt3iG3Qr7wdtvC",
  "key24": "xvM9bZDS4dHgJwSfgwbSBG7vckbgYAWFRno9LL76CfF3UQRXCU5nECrp36G2wQ11mBEp7AGAvxj2cuNig9q9886"
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
