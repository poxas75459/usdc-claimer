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
    "4Q9xdBi8fXkhD37qrosi2nwEQQumCZJ2bEVRGSQaxF346cX7tyvWndmvco3C46rSPnMUMVK6W9Cx3fcfJQaAaiCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b428ESgsN53HTAZQ9wDiPf8SQkt8MotrvVXneKLAtVC77GuswggA2KwNWuvAMwpLYaPUi4UnJ5UMvMBpwr2koMu",
  "key1": "46fefUd8NowqPcK3HHTQ3psPkrqKqFioXXD8grS79MVK9kM18jKponACZAPM9P1A5jUL2q4R8vfM7XVYUJVS8uaw",
  "key2": "2xy8jbCtBnswXKqEHPAtEiJmuZ31J8visEN2W3U6gnULLo7rW1oYqL3pkSGwU7Y2XAEuugo6daKbd2o7LU8fCAoZ",
  "key3": "3mdhwSEH2qUG2MgWW3qrpe3wEEYGxHvwa4VNVKHtuR9QKv43knwXChTiZhgM77huD4UG9PwAurQNt63gVBPnkVZG",
  "key4": "4P1Ftcaaxd5dnyR6qGbwRePuSgjBbf8UAA9m5UT9ham5ysGMaDU3SmmQfyS5LggutVrFn1uiQpP8BErCSUe59Hv4",
  "key5": "4mScpx4YweWcAFaa7Rdu9wcsEXFAs8vk3CwAgQ8m6RYTL3EEm6fR5k4abAyMxwXsaegeyXfbFdHvheZjjhS5Ydaq",
  "key6": "3TqU5tGa7mnuVhQ7MGM4nYfAVJHp21FsZkhnojM27EL6hApDp3J6DDkHQCseHku8a1Ys9ZG3HAFzyBdGSnJ1JpvS",
  "key7": "4Wb7ksapKtS6eKSJtmuf8hkYyubxQ8qNKvUkvDKvsTdWtxh7GeqC6yqWw5Z5hVXmd9G87vXscyrg4Me5sQW8An6E",
  "key8": "5EkAgvo3m9YzAxeWEkkSJtrZPYadH2htaM9kGxVXXeNyUH1YiSLDSAhqsuBk9HhZaMX9evEoBYtdtTThSLu6xpSt",
  "key9": "4dYLHHih2iHZRkGLpa3GtTCrcPpz9yCAZyB1gNwQnGXGmzJKdR26skyqKP7Y6TbpYoZnN2q6gfi289hQ8vEBat3S",
  "key10": "uB9AaaGnzEJWnFGPrQdxZ19NcdqrP4QKFhDQdDWo67Y26GCaHZtAMx1p9MoQJgJc32SEMVNUte4WtXTydNaadKP",
  "key11": "41VdDzrX4eTKLpn1oAqtVKsb8L6NrzENro5M45jw9QvaU94DuKYm6SQ6ZLkEnsTjnq4VUhBqAF5Dw56cUgYp867m",
  "key12": "55sWKLwCLR9BBsXsT85rF2DqwH3USpNsy6atYqixWt8aCtw4WZZUC1PLnNNyJL7xKT8yrSDjKfbT3gwWa4HshTbP",
  "key13": "3rUkDW8XVktgNm6gQnmy1cVhc7ZaXaERN8eSs6ToiAPKVXDeeK43hNY2REtncaN7Eed6qbzGv2d5S3UZN6f2fWZF",
  "key14": "3WM7pgijCB8UhPBNc9xA7PAzqgbSHUdfMEfn2ssH4vWEtiaWMsskCU93eD9mrR1Yrm4aNkM5nM6ZMKTDewVMxfSr",
  "key15": "5dY1sEujPAmRvygNh46KDjUGsS7tmUnarQvEM6iwCDW42oMLPtdPR2YiT3w4HUeCFqYbWubTbZHN8ty8DiYUtheP",
  "key16": "wP3gqxNoXWTTpZttpStbzNjYUyKrn17aLqwiDe2YhY4PqYj7dAkYZsw56ynv9wkx5X7KEvBW4JHpbGziAeKTfUy",
  "key17": "2w1miYkhkhB1z4sJ3GjTLvn3mff1JqvU3J9DJ6tVzHiXoFLUvYDsPDU7NeSg1XVYvwFVedjCmjwBv6X6MTrocDtk",
  "key18": "2LpRNfrDjKEmxDD3ZSDTEth8EP6aUx6XZM38Ldybz6fnkwuHFcCR5hAQWgQr1yzUZoQnpSWZa5GhtiRMRE1eUuPa",
  "key19": "5fc32R4zp6MQNjivPn9VFCoCJbWvhP86xn3ZDyNZGAq8YLBEqWEtsFCHGwsSb4XGWmcMENeHDzxWg265K6FhUACB",
  "key20": "2dnEECCSLbhGCHDk458Ra15ruyn1ibWi5kDvQwjhFnphKeHhP26ZrGVuuyC66hPDmKrXqc72necA6CEzXgJ7mZiS",
  "key21": "2Hvzcney9ebV3BXsvdnyw6Ryivc4FU6p8ZPXA4q6p4V6W9faCfq77sLC3p2WPgVTPJqfMfJ8xW6pMvWjuWCPYr5C",
  "key22": "3M9swM2h46D3fts6KdE4YtyzYe1qajYVBfXGpDU5r9bWPEMkddhhR6RCU7GQNhqqbcC1qNZb6Ysy66irympLcCqv",
  "key23": "2qeAb36hXjFZQeoYiYZwdaSt15wvJBp4x1Rg3ZXq89K1CJQ2bLcvsnT7RHy5aV43mmqu5sjL9hggiBKDUxdzdxoX",
  "key24": "5cWWd1vaFEjgzHDw5tky7JKA2Azg1zho7CDBWopfE7LzNtH6VYWQv5nfxPpwREqRYZupZtLC3Zpo3Z826NipPcNN",
  "key25": "3x6NgKnFAdifzsjoDwdxNqo1uMP4yjgcX8hyry7cDqFRDDa4knbNVVNxdzSSP3dCjd5Gs6GgHqcx5tkcaFZ2pdsz",
  "key26": "4pcLzLzoaJuryYevhRcBsQykwpbQ8PGJXVZQZbM7CczWfBJ2AKo5VNxPAbxwARn3pEVPKgiPG23Wzw7KxnRcJ1V3",
  "key27": "3YVZ24eukWvVQo1vBeDursiWmdCuTjwtZANVvkcNannT4bnbY57jVbAqevanyJhCokyvxrnNzWm7fp1DhpZeY6h8",
  "key28": "qRvFGQg6283wow7x3Vd3N4pmNQz8oBC4MLoZA9DKEspfK5UFceHp1w6iDnnauAu8eyBky8EWjrrtKZc9aC89E9m"
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
