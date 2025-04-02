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
    "3Epu27LTHeB6dxkT3moBWMrpHcp3DvypSXuXep4s2VZ7q9dJ741ttAeJHC3Ugh269oZoybXFWNohvUbW9kQnoE2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SVod3iCSC12tZjnSeBQskiQMhnyGyaerTMj6eTy5V6mK1obkeEMpyB4mVP52MwoYxAtSgnPVQN8eWjNeWZd2nk",
  "key1": "4xrj22UpoMUKuLjMKexzwkzJwL7GkTuEiBUxgfeeBx52gqUqjhngxN47rhvEEXKda231kNjhWnw62RxyVyEX1hgP",
  "key2": "3qm2QqUZVoV3Lg7mk6v9qQtF6MX4tMKTF3EidhzxtybVvKnq6Q8o5UZ41DtpKFCVaLJ56t6GJVrMtvEzM1PdQMjm",
  "key3": "2motNv3vcCB2GLHzySDegbScsm8cHny8uL3d8rAbt7CH39pX1XHR4Cyz9pkE3rQt9iYfMpK8C6Ti85ed5mnUcZb2",
  "key4": "3WNNYqt6uihFE25v7H1YoybeKC3W7X4SFdtSqhfBt2JkzCYQPkwB3mTWXCKrrfzCCjPcFRD9VZqThzQqqHJB3Mf3",
  "key5": "5CuSrEU4R2bmXxkEN53FowyZF1ZPQGvgmJnSeTUyh6dGYXyd8kQsXboMaQ2YS6DXa1Bj7i7Sk4MhJZ1nypTaAiMF",
  "key6": "fzW5KpJA7WUWJvv1uDnaqtofWQoqY43j7bnsZshEJXgLDBuL6CeoWTZJMNibEktxSPK1JwGBDQNZYhJfV7tXvpM",
  "key7": "59SEMFhMLj4av52aQ7LPwMzATM9BrpBqNpBsQp7wN832rQCZybB4GBqCp49F3cXZXVpPiCNyW9LV5HHU6sntstz1",
  "key8": "2PReaBz9fTsJR5yoaafv54dEhNHFTfo9TzfYcPhrSwbbbuGiLZaR5SEWnZ7Sz3QE5Nppg5iecpbLa27eZtDV9z5L",
  "key9": "4gcKVRfb78dLz6jaf2sBwnWbT1nwmu9sCkUbeWpxYHxaD69oLWndD2ETy4Dz9Yq5D9XwYUS7dnJui6ngqLh4nrVs",
  "key10": "4y6S62KuaM4hk4Djxaw9eKMJvrf2awK4CX6Gjk2m5Li5qWLPfs57fL5qszVsYtAPns1JuzEUbr5bpER2fmTaqRzD",
  "key11": "4qFrdR5gcnZtddX2NH17nfQvXRWXzzTBko9XVgfDbxZpWEaXUgHQsp6FrUD6yAgK3LymzQFKKpcRypXQMB7dqoDc",
  "key12": "59ZVqZuRJpbzqkBhtGvNvMAAnfsCmfrhs74zvkUbjpxSMNQfZdfZ6GsG58JCM1smVTKeRDkNbevDjP7biFqDD3pC",
  "key13": "MPJgFhZUvQZM5uGDCug4cuQSkZX446oQ2YxriXURPLGDAWDggcZcNCf3Zko7RqiDLgxVgVLSYUMDE4Ucj9D9W3X",
  "key14": "5Zfe2RAjKMJQYPj13aivgoXH7Ux2Kwo8Vue6ygKtoBBhJavHuKDsfXxpfk8vzUAi4BdUfkrHxanoBjbczgLwnX54",
  "key15": "456gFYJHoE8oVxGRLjHgj7pStsVF82Am6azUmd4Y1ybu8yC4VbnjMq91WfWwFz4nQSQxX8yhaFht85BUjmuH7XNc",
  "key16": "65tVoazDzFw7RDG6m2DzmDDrRbWfZUeUz64cRoSBptU1Y9YmyCnCVFscRt1NZYdRUpRWDM7WixA3X4ffJPUmqqNr",
  "key17": "32VtZJBFZnqQuBXJzr9JYAb6MTMFux6Svth92Yzzww7VLFfQxTs5r78jvYnqSPR5KjDH8tyGtw66osZASzAQRXFb",
  "key18": "32A3NQR8dZYBdcM2QqV2cSBAnkRvFw4nwQtPDZCeGf4aiHAkcRjHRq6j7KC1sBYFqXk1K84o6i8va4SqzeZEXHq6",
  "key19": "4FAs9mDaufqYHfZdAVcLMdnJercXDmf5hQ6zf7fhQ6PjhiNTE6HyLPXN9MBkVp6oMKzpT3d2Dby3fDGSf6tk71gm",
  "key20": "2YHoAUn7kXPaHQwSsagQofAoxWxfoT9nVae87ttQoFzMA8fVLZ6FAaXkpbA9MiqkLsdmJKvqLpH2voUXRijxS9QE",
  "key21": "3wcKcMevqWUPKEVzsc5pWh4fWzjiWxQBMHuKhQ9sypmwaknR7xSNLJ5mY4NCvhJyW5VQViSTGJFPnGvZZwAVP7Dk",
  "key22": "26kgggmZJTtkX2cs2nmw91oK2VrAorEa4BJoWiFNU6vs9fYUhcG1s3AKFKxSNGXozw6jU4RHrMFRJiWQ5X3wZTbS",
  "key23": "KnkXVD4ppFAH9aCLuGgimTRyEGwUH7EVQw4KXpm9t7fCNFuenurkTuAAWuAXLiZ5xbyM4Rpac3ZrWx1ML6hPK6u",
  "key24": "txbgBojJGjauxLqijyFqZWwkefJLV2yWnciHGGZFSpme7q2GjbCbaNJt65WvVHHpt4223d33Xf7gczMeKaAQsyL",
  "key25": "zKTZYpnx84CH1Msnz4oSDjcpQrWoMwTmEtVj9w2DSwbpqWbNvMdhEaDz3PKs5zuKz512puv6bqn5XkiMwSNuPCt",
  "key26": "4biTTPqHsXroof8pvEpz72FFiSxRfxCmXfSFyiMBFEdAj1VHrA8PKxHXt6bWRRLcPqoUVhtgURZA2QpHLttvjwrY"
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
