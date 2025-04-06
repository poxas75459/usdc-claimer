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
    "3Ppm4EWSvaFg475fF8JNEiRGsJrE1CHCNeLzNXNrVgGkygqXfcYFC5M8EdgHxePK4cx2KvgCbnSjWWMAmKYTE1bh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xL7CpawP7ZM16TDyX1zvN7B7oxVsESfedkL55ncUPDVhamGbvrjQP6ZaCzzTKAgTtuKYAojtBtT9mLNiaWPAdKw",
  "key1": "3J4AsKKn4rkyDvxiDP61vBQVhFfTPNDJGLeD26WYb4HD6fa6AZy86jBfem44G5odtFoSdBsz99FHrcqiL1FVhc87",
  "key2": "nvDHHXMt2VvFwEAqN9VXhiBmuuwfwT7TCZPFTxpFAW7HnpYYKNZZfJszY1ogmZwAmQgj4dtemAf4UTinssZnvuC",
  "key3": "3HXU4TjbuwTRprQYWdfJuekgfiNKHxxWih4XRckkBwe6AdcCyzPXUuUg6vVUkbNMgSTWaSUBYjsdSNjrRezFGD1X",
  "key4": "2dYwaANC3X72HmtK4KynpQnEZNbS4w6uNKVpYWu6gKsjfonF9BZFkB4f2Fwh7Y4MmgNEWV2aB7FTWdLs41o6WcZy",
  "key5": "5bRMeFu3e6K3NcVi8gqGXB6DB62aM2dqVsnyHj8MZcWahpD3WnnGyF4GvH25gsQGDovLca8FacAep67f2thgxX37",
  "key6": "2mr9BpUpZfx7iWKHFYPwSUeLDjQCg8s7FKD7zqZzCmyHipUYePiabMjikLY7FaYXSaXpKTtbde4kKWTag4Z1PTUm",
  "key7": "34Vq4vWNwmFuHrCpaie2m4gTHNe7QcwuVkhHQ7jC24fpgrvx1cbAqVzKZLN4Szp3jhw4xrfCwTS7fcswuYBPoZCS",
  "key8": "574Z1sJSedStdrkS4atc6ifb6Xf62Z3ZeQq287AJoBjzRQ8fcqGVHhQp6xzFLPDjU5mcWUoq4Y65rnyG7T7aPe82",
  "key9": "JztyFZKs3PJwR9K1NhY8Yo32Pu1VneNwSR3yFSrZdq4WenmC5JGfCuvFyr7WMPPAP1T1pju2cek12ZBwAKtyHoy",
  "key10": "4s6dxPz5F8jQ62sbz1eC2iee7nswYQgQPAuYcV5z1rPFguGszVXtkBPtJTwJ31yMZdY1Qzo3LRL73nR9UzSkHvpH",
  "key11": "2xBcUDz7f1QZMS2P7xn1cwWvBNYBvm8JcR53StusgmeqgGu5dkXDKKf8LWAZnh9VBQTgW2PgdpoPJcy4XpUps5qM",
  "key12": "G61KTbR11VUqkfgH7qFr9XW6ut83EkZNma936Cnq19irCNdqoQS9ej9AEpXHKNCPk3CTgU1HALmDCc6XqnaATU8",
  "key13": "4hW9U5kix5ZCfuiRVMg1S5qKKUcW1bq7V8C7JbdYE4B7ai69LX8SviLTrhfaAPCEtC96AoW5NuaM68F9Riggu2Y4",
  "key14": "mkg1E7EVj6EkhTCQKQ2fn6PgRaHjQN6ANR2fd4rKcWusaijWzgEv7R7s6Hfsgp9YUxrXv3M8W7AJvdZnd5CrHki",
  "key15": "5CniGDmdv5WWYbiKzTMUKTbdVP4jgqg21S75ni94wdq5QrtborYeZ4eiYRteUJv7dJa2PPESYEoscg3WMC37D4fp",
  "key16": "52qZ6bmUVouDRhYnfzRn3DpWeu67jS9KfEG9t8ctxSrefHEPnKVq4R1SAzz6YtNsnB36RijpEeD88j8A6nWY4h7R",
  "key17": "4j82RDB5FSEn7RpQjw3LZYJ1YVbMUKKVLTaUXNTJdsZrFLiJghVFgzVVdmp9LXGxdgpabNVYuACdVaFa5Kk8f9Je",
  "key18": "4niU8AFgfWKDFnHR4zwMPMFGxKRSbqMzAgbhLpQ1ddmuVk9tz1jJQttrHGymVxWEod1mMKfPnbCuF9uouwGQRryW",
  "key19": "8GUbyqSrCnJsKwNgWp57NL5g6DEo25WMdZm54hZbPh6NFXQumySBZovZFnGF19kBV7PrK2GGaM9sZEPkphh2vK5",
  "key20": "2vbjQgf9qApwfZ4M4vxAkXHi9cVcjp96siBWdPQfFc5nYvcQF6yNZcus7zD4RXmJNEMrYYy9jRPLas6wpMyXYkKe",
  "key21": "5nuT2qPSw7z618Dz2p66in4y8ueBrDP2XtoHWUb1VbPf7kTbvUEhyuef6M1AmtVvBHzRjwC7VPSLjxaWnhECGaxK",
  "key22": "3RJhMC5rb8mk93dafhfKSZktC56hKkHEX5nrs73y46hXpFFV2wuU2mymyUpkSvvJnZDVutm4Q2pwrvLqeqm5q35V",
  "key23": "3fNGSJ9vU6iKVMLbiX8ef2XoR2c39PFo1nBcyFkYnTevh63BJ345SUe4kWopvS4umZynfpPchK93iVQTHaErihbH",
  "key24": "4VJy7UcBXfFaiQ3WQt1WoQFLkWDtCHRn4C9j59Mh2mykrJzhEbZNEX1zf6PRUf2vivbNU61crzynwm83c6PxWz7N",
  "key25": "5MaqtZ1QEgw3gXK1gwMrwgB74d9N4vBmpgP3FR7kP3CAH69xR3tzKtMHK2UjZuG5uoFTLWQtT9Gz5chDdHrq7uq4"
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
