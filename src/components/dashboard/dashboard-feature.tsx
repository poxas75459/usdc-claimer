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
    "4DbouyusKyZvvRF2BrsvNRjxRfF7SgRr6FBy7MVniHMYYwpW9ysBMD6omNCnEbPcNMdRgyPicRT1DDfeYNCmbZ3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NLh9mLBjz5fbbjF9f7a1Cd2QG3DHkVvGnhfBoxwD4MX8PYmt2fiDPsfkZjEg8CTpweDX3TTTuMR4K8x41K2SR1i",
  "key1": "3bd73435g1wgS5WTUFAzV1CEb5Zr7rjBdsFVgig44Yt2U1iN8ptY29fnqc8uGwzMC6k96ZV5LNcb1JRy1hsJ7pYe",
  "key2": "63JoaPm1rMncs4EZYMUrPJXJT3rqzUR8gYJ1KHerHMv9yX1pqpVK8ExQF2N6UhCBWTwTWsCq72HTk5dKqacmnPuZ",
  "key3": "4rdiZSCZFyKS985QA6AdJde1R4Q81iL9eyQPnMEaPcBzR6owX552Ezik62mFQdnuiQnSU8wh7GviDP8DFfbJeVc5",
  "key4": "5e2ortkAV8drp537C1usuw6E52TQ2NLFhrCcfYdYuvKAbXbd779wgDmJHzEbuvWCMcHPorBCysdwGxctvb8dYoZw",
  "key5": "3yViRq3XNZGAbMuCawwYwJPxQVuk558pCtfF7iN8yJ1pZ2J9WUTYAxtzYL6ck7GXkxrHuabum35bN8ChBhrP55zi",
  "key6": "2TdXuUck7wGrdozvwALDByvfDx42FUETGQfAdhJKbefnAUCC4PSV6D4w7NCVXimYrqDCEBwb37iUsS9Fkejz7dXX",
  "key7": "rLjipriBV3TRRjat6riE2nAwKUQmvnkQtynpAuPSBwJTaZeZryCwkEvYTZ8DphBb7qzQ7n6PrKhegGiRer1hhaW",
  "key8": "2QQB4yiGVLYW4FWhar3APMHjAtZgqHB5KUJVrgu2VbYfXKnqoP48xkQqKZ1jU6NvEdmc3WHdsV3C6KWmgG9LWPm",
  "key9": "58gMBZQ8xzEVw9rq5nKxYv1dcKiLUZz51wjuBzRQH5BaW5aPkygMXgnFVFjiAkKVkhfqwq5PQRoM1Ah2Nur33Fu4",
  "key10": "428sDRg428NjfpCL2VXuZ9ZEn4qY4Vb2USUe8QqHurc7JxedxCw6r9iMWhJWxHNNTGvkR75ZTQoFcqz5G2isLCA5",
  "key11": "3o2K3p6E3bxHeXpZA2ZXxkJdDYVLCCZfASAD8bCryJQMGAi3b86R8eY6YuNP45h5XLLS1LGezaFnUUFyyN3wYUdd",
  "key12": "3Sq5FEQJmSAUnkBgPVUZXJq4UMmD7vgwb23cWT5enbPi14tkCbYuxKvHiUtEY1LZZCtQAz7tpqXphT9WZ4rGTDWa",
  "key13": "2Kfc1NeTTSx7tAGQKFxhL1bm3LRCjFCGvAEkxRwkny3pTWwSxdNDT1LbzGjjdZRa31cA1XEfK7X4nzK7PTBmwxgP",
  "key14": "4u3wFg2R6rASAzbheFWCtwE2qadCsCMZh2vb4mqZ7C1ADwWsMhm6qADWGjZS6cGQFzXA6y13U6KF6UgcYnCz3Vg2",
  "key15": "4xwnzdLfkwcBoRb6VuDnQ9b9WNUaxvf6GktZfD8Lv2QcZbGH39DKs6J1Ym5KLUdNpnN6mqfVHn8eChb58jWaZbe4",
  "key16": "3SzHxWV5ZmB5ztJy5qT5HGXBY25krmFzWS3wqbkMTjW5EmcJpCKcvhbH4n4iqq2D96AEH6DxRyE3so1YC43ZYp2g",
  "key17": "3tDQCgFVoGN5aAux9i3Uog5Kc6BfaJ14ihV9N7azFCMYajzCuJhajEQeKi3SdD2tsfpPBXEs45y9b3VP1oNgwNic",
  "key18": "59s347QNFmJKs4Z4UfSgDEttwXdNaCrFVdaASMGjQso3mqzijybzV4kzetqvhGFxWd4tixT7qcNL5kAA7tMC7jxr",
  "key19": "4a7sk76t4GdhAMfLxd2saPSQJGoLTvxbs7JNHwt3fEHvsPM7chgkVZHuVgA7hGJewRqPSEdML9v95mnNNLchyVSD",
  "key20": "yNy87Xm6JRACvuj2Q8ZLQMbMRzy4TWySizkwj22CH9dPZoo9TaapriZVhAYa9fp5k1qru9ep3ApNQEZA5PjKwS3",
  "key21": "28vUWkMP9fDkViCJ5aM66ZoxC3pqWUfEWXqMp6oEWsbFHjTqTXvc888PDq7zrAz2amSXBFygbdovYFibpxC1phiA",
  "key22": "YvfHhsNvH122wX2L25TsnVxbgobtSek7AfAa58Yd2UzTxr3EHCJSctVjiPcoHraTXcsspFRzpzSyX5PcGgh8WRD",
  "key23": "5FVKUYWHscJv9JnGD9NQwUyWNBm4cDjf35B2pcwUaM7TUNPmpTDqFkgTqD7pKzr2y9X9zX8JRxj59BHw9hxqUQ4N",
  "key24": "4sLQ1LYyDDc79TcmRCX4VBWjbvM2BekmV338rKfu2SXyjQ2AAbHTHAMMDwFn9KrpdxE4bMJAefnt93Ekhb4ypkKV",
  "key25": "5Bwhinw1a8JHER7DbPcQmmKkfuZG2z6ioFGQjGsim56GdCHQojjYHaiSFPpk1eDRuVgE9RNBEAzEpzy3pkMTGrnt",
  "key26": "3bF94qwRWnwoEypY2L8rDwCApHpSBxDbNGod9SEb8G4Ubicy2zpwsDKZN4KzujugpAoJTtNwpQEybdTTLnCJyhMc",
  "key27": "657ofJ8k2bjm28M7CN1jhE61H5517KpN776Fnyqhww1WYpFDHucsbm4SK7VAAiiKm8Na41T3UsKs6YsFHtpCPsmo",
  "key28": "4VQjFigpVHuawFFSthhoqTeWg62rmbZA9h6YjgvT1daA7rHitZaWGFNgepp9o99ZybRmPqRCMy5FfZWp5pG6iwxk",
  "key29": "4AreEonVKcc5EzFpKszTZBHogvzXHZ8zAH4Bdapn8koqrYjhn7FNZohn5qXV1JfhcdtX14UnZeLoHn5PyzWihuyK",
  "key30": "5DjEhZQT4umq9L3D2STcfkqZ2CxHGezhPERpnL2q5mQQvHPjwpAvoNMQnD3CSrseJcwqTByJVorsse4FCmca2QDn",
  "key31": "ZnHqmnExQdZDKWZFZLSma5U25LKLMHc2YsGJ8Z9qBCYfQNFdvvvXXnQvC3WKd7jXTG6v6MKMMoiTFLvzUf6EEzM",
  "key32": "24mLhWAkjfubT4NXTeQpFAX5EexyKHQVbsV46B11WchriXuwMUWVokkx5ppLJuVZHk7QJiRQ1mzCZEcAct6Dxhn9"
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
