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
    "4CGDfAmB3ksGeB6174Qmz8QiKMWnr6LC5T2cN7XZgVZxtEoSaQmbYhHyuxmGbBzHMCJyxhvzURdGYH81n6QCp3bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eTVHfAJCQHymorYBkSRY6vKK1cigKoKBC8YwZUaKvBPiWbaXHU5dciGqzcBNQn6PNC4Zgp32TmdEeqG95R2rZoR",
  "key1": "4Jade89ecM5CLPeXsScth1kQ5DgnbwCobkeGuJBsgRkjryWEGAvEVkmSJHTNS78wEoC4mvwoqagK4t5FZRiY6h3S",
  "key2": "52mtLuT4uFGGAKmfwkr1cyNYYvBYRqStaTFDBqapXU6hAA2xuENWzU3Ho9r2UnBeQkJGpi34qjEYG669aN1a2D9g",
  "key3": "4jMkLs4tQXR2W5trneeR67NF94ow1iLrfs3TcS95SetBLbotGozfE4TT5VKERboDEUUxU8v4TR1tYznxisFkQ5QR",
  "key4": "5ipsLzyKJmzeabKKt4Np8CP2eacUrkEW4bL9K1MRmiY46CgSoyCQLp48BQdQ7ZXyxduNTLQrXhYtw9tp9ypWn4kX",
  "key5": "4U8w9SyYoqiqGKDQEczvrVRoPWJ56ZdBA2TDZUHn1B3MkBXzbZiUvDoRyPbrZn9uYNCfAAom83GJYLycFqDo7rEu",
  "key6": "4S7Ey8xBU9PkijSAL9TriYC45HTiWVB7VKyjdtz1n7F1dHZQkPVoEU7oiFL4GNGC4SmVqi667oUr62mfma69zmbF",
  "key7": "9FppWbvu8XANy7ykXdUMnvQ2ui3yjLkHVqNjhB6SpNGUQVqpSy8kQXa65a9gQ4enVatVQ362MprYpkeZmBogUjK",
  "key8": "x5YFpnRAy12rHikcRfFmM3VEm1bEPTQC51aVDiA9WNff299s3m9vehMStQiEtDvraQBk4FRAiMdaYKLWaJiEziM",
  "key9": "4tDt8UEWzdGQEZVyokbiavz7w4Xx7RJvM7mX1qu2Ro1LaZNEbdx39325nwZoVYeLRvnUHjqMR949nWQyG7duxhJR",
  "key10": "2Fq15oMDgMhB7sbw7ktc4zNSw1A4NLfyMH9CAvGPoFEBUqxXgqye9h4pPwPwZwexb7jAqR5L3egznq4bJskwMXGp",
  "key11": "2yq9wDDGLNwcGY1GCyiJa34cehJCuq4qFwyeEEzT5yUYXwVR7SNPwhK22rhMLnNkpauwDustZJZw9Awv2zAry7sF",
  "key12": "L1i4yuA7gpTxYQtGufCvGwAAhd8dvcggJr2qVKDwNf4YcmJ2YBkF4SUdjNp9guqxo6AYoimZ19NprJaA1WnDxVx",
  "key13": "nDucjTHTcBGuGv9CHqPFxUv7kuqDqvbRH5CF4Vbw1Sim4TNiZ7qoLcn3oTYMeWdnug23ASy2Gb9aPsKxgyqrA2c",
  "key14": "5FyrbYVR6c1pYiiDankcanozV8wgZhf5bcf766mpikQPPEvKZC2qxY7WDaUvDDtkB6uR3BUfUdn5hWb3ag2WMFmw",
  "key15": "5VB5FHDDuLFFXgcg1u3TkZLyKnofDkLgWxnHi1FYsHHcxEcHUHuApZYJrqnd2msveeH4jtDFJmSJoF2vDxjt6Ne3",
  "key16": "3NFfiuVQFYLuK6HxfYpf5eAq86Z7ZEhgMu7B68sotyktJmCkiQT9P9RUhvG77xxZidkEvt8dt559ShDE1GFZuAZ4",
  "key17": "3EFcXpjpxPfKGwU3S78dpcfoehAM1ZyBAPhWzvwdeg8yMTTLiLkPT9xzbeQHuFCBxbg6oeV7foxmyaFCFi9PhwF",
  "key18": "3HR8ny6vTqEZbwUn8FT54LhChM5ywTH3cbHUSYjgEfRAXwdanWbC65rXCK6PoUXNRF1FNb4RwM3vRN6XggLKAQ2G",
  "key19": "4RHY1dVkTYSzBFhmHh1xrxH1EG9mKGrtjofJnnzq6EaQvE9gaSiS7oeY4dVwyMxP2SqmcTYLiSWt9op1aHqXz29a",
  "key20": "5bDR2a1h27ebffPr3RLTPs8fFs3wMWU3nHogPNr3K8khVj4Qr9kEt7skhzmFkepX5JNz2gNkfz5QWoJ4XHtuk3mU",
  "key21": "HkpKpzj3jFtZf7vVHY7Lj6dEJetBBXeyekKt4UuAwR4hF4GC6ZNSZUSUyYPbTs14tnQ7wwvMAdjxfRN3PZqUdBE",
  "key22": "4L244wJ2zFL2xWYUtmvmo25temZKaMrotxkVE9sfzRS4gWngzkHsnNKvHgCmKDtJWK7xbvSYBMFqYus2G6a6Rvak",
  "key23": "58fj84LUPxARctBbieANLxu75LuvGuGtV4WPC4g35ZcPG8xwUFHW5y7dk8PBgjApuuMQecbPXBDcGd499hsqpeDv",
  "key24": "5CgruDGdkwJBLhEGV4pp7cVESnYvu7SYHHnZ4AB8LxnymCT2M5UAriXTFX3Qb5XRvPpeQRfcteugGXxDXhod2oDx",
  "key25": "5Mkoaon54B3fSx1zy71Ymv2XekJesQnNetxVVEEWYmvqbHPBvjxUPVYDYrWqfFJbRrxZe6hQpwnTvJc3xuf6FUn4"
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
