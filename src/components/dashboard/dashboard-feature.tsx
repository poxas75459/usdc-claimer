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
    "836qPynu8CpiCEXN1ePF2Wpj2DUQKY95VuyaQ7Dkvi4jU2oytEjtSUArWGtiQWya2sgGoFimdtDUnktBA9pS6ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6kFMJg74HJ3LAcTasoKbjGokCwWDNwt1rAaKBB9GjNDEc6bZCXXyUxDR4Nw6rNTEoLtRtRGYwFNLWJsoT4gAmN",
  "key1": "2Vd2Nvavnp2tvqeb8bV8djP3U448P9oeTXjDVoZ4PT7V9db7o41fkX25MpUkospCsg53z4WSjbG7PEMLoLR8x1UH",
  "key2": "3ZNw1P1tHBnvvvusWvuxBSVXesf7ouEcT7A6Kz486aFTnZNpJE7ED5j2TvMH3PTHH2CWxkwJXu3WemYeBUUJ1nis",
  "key3": "47hX6rYecwFB1G7m7cKaCBy6qHztUBWWDbAhTGbqQSEZWBb2fpLGL5EoChxS8Nvnpif3MVTQ2D5pAwjo4EqEuX9q",
  "key4": "7RHt7nn6nmxpc4BjKnReQCMixGxY6ZsgFJ4KZT6tYNAAdR4d3rPckoiFNzqFhX6ufURmMgqDqhCz7HCkJTJnhzG",
  "key5": "2cmwata9iaG4nsxn1xWYv49LefbxKpnSLsztY8GbsVszMV8M6eExNiWi3K8B9LAxRYDn9djeVtXuekDognn123RC",
  "key6": "2h7yYfRyvQw7CYpaDb27ZfUaqkhWhAjNVWoQzPbsaxxy5xiP8C5AkwrurknnPHuKGqR45RNGyMk5WRTRay2r73R8",
  "key7": "2jHuNg9pbUT8Z6m751c8BbrsnfQ6GfiEiY3J3a98nBe4Gc9BrXtmwkKDQgtMKzawdSTtakjHdv3chPnffJuB7Ao8",
  "key8": "T8qAVsqHLXfsjY9j7qpQ8YfRB9autYe6h8fE1jwe2o3NnQA5rGPgMGb7z7MQG9Lnk5ZoEcUCZuzRK24VnSQzFSH",
  "key9": "ARBnRKMYQCkwgdJVURLyyn2EQwh17CvFZgAHuBkCyGuRuxfcXWGCtzikYJFAWvJetv8HUrjr1HQisWyXLkdHnnX",
  "key10": "3k5eL8eASDrAr7asmfUMo86cGDfpG9Fc7M89wEVCmKV5LR32dibWT6iNeuXHenYbD85F3n7WD8o6vksFLd6tAVZm",
  "key11": "5mfE1bEiAiZtPPsfVFoEv3ECSrcxTGYbZkZ83xr1bfGjJnxPqdCNN2j6E8SJXJof5ui2FztnMTvGD9UA518C6MxA",
  "key12": "tiTgXHzcDEcmRqJAqZ3fGhbJhn17ez8QPXGzpiyui87h2g2wNKwkimXGQmkWD6QecJeukKSdPFUzypjPPW5e3qv",
  "key13": "3DQmrmAPKdv5YkQ2scN85FrXk41td2UkXav9F8hz4u2rpzsh2EwKSVUNgUxZnyCezBbReC9xbBNx8u31J5venA36",
  "key14": "5CZnuvio7PR9af8bHhsCa11fbESHx5Mafp7x4LK2mRa3MKz7DUkTZykYbWB7zTovwVq7gEH54oqspj1GzjQhs3W8",
  "key15": "4bdhKUMyrbWS28bvdU8wghKBf9LYSxP5t7QMXqnFEt1fiVjghDydKQZKpy4Cbqvcwi2aYVzCWqD8tPtMFKAFZA8M",
  "key16": "2HN2AncmMdkiDMeYP8teqiwDdUBi7cK7agmZd1LRCmGFzZw3WR3oC3p5GEQbVJqUpv21g3KY2j4hsc3d7zypPdVy",
  "key17": "5XaL29Y323x3x5Aj5pemZFoPZcrcHJcSk5q7nSGfvaDFKUYFob2YV3zWbXcQZJwU8EdAGUxfYRwm7W9AGRCgweh7",
  "key18": "5viGrV9ybvLtzeqGXB7Kjxs6WjbWx9fEvFFwptGjq55PHNM9RSyFcDAUQwgsETK79W2KrKgyj8DHqi7XjE546FTs",
  "key19": "4p3ravQmQSVh9fnyhjBNhnewVNYfGuwZHyow2rk6cwNCXHCZk6kXjwnztwP31x6Uuy9PvBxDG2FmLfAc4Qv4tAfk",
  "key20": "snqerS9teT9gxxTyySwG1naKNrJetk1L8C7oLbjTqDfT4WUj4xKu3Rn3awvpphHSfi2dEvJVPdMXLvZCAEfdGmJ",
  "key21": "2YeNR82AiAWbJFBJHJdgXKenLNMp6nXVQJkHyStKfxasUXKBCWqwt6aadrvGSrADmCYAxv2No82NRdzSHx7tAsyv",
  "key22": "zNdtqgGWADZzRPNgv26kLg5tmUEiTWFrCroTdrTVoaCpd7hju4ypMjrv9YT1ekgsYw64r82BJcfhrcJHRmitsoT",
  "key23": "cdZTzM7H6SbY5bRuHSMkxKS5FTLE4VNL7ywo9rnqqBvzUXsNg3WCQio2s3TL6z3NrNCjL9JL5Dnm4NudhFhc1Ln",
  "key24": "62Zca8KZZAh7eCXdjyx3LUnkYdrpSCbK2C8BEJ67ESJJXKtTU9KYPG7jWZYtctUk3Y9shnLCKGjeNbjfRechpGHC",
  "key25": "2rqJ9gTDXpXkdqfFva6sJhEP5cfv9h255eHwwcnTCq6xGwGY78WkJo8tHbz7VxGXurfdpyE6bgM2ozta3ybd1qcX"
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
