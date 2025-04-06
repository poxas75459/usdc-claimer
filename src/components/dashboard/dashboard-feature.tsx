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
    "4HvkX4cMS4r2o3rY9BrX9jTB1jJyHYfYxvRcaiaSo5yH7eE1h3tRfoyHYpaWbitbbt6SaWJqmYGt1petSCSEpiJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umVSREEtG3qVVkQcyzemwuL1vEuPJTjsNDe5tgqnYkR9pu1xaoZ5Hkh2meUnyxffx3xFwZjRHnERQsF5idwBSMX",
  "key1": "3D3WQUyxvxoSqRhbbYzfHMJuXDh4cKsp9S8RaUERM9TwudDDwXjXMkBywxnqDYpgWTh1mjyMiyB48W9mDvCMnBQ2",
  "key2": "s4iejDQRYtcrtW8boTjZSNAsWHwoPJhSMbWryJ9nCh6mCpf7sTpSweyStzFa2kME8QMsG63LbGmmMmm9X8FvHQK",
  "key3": "5CkfBfdrLZniH8FPK1wuKCh2Stmbjyyd2H7gt128igxAJU7xJreKWqnMqaV5teXXFowuNdtpkAcWkojjrL8cREy4",
  "key4": "28iz6yFxxkzvhWh4Fqe6jwpt3J689mdyP6zV6DWbQaFZreEENiYu31evLBcoQM4yDQvc5kPmbtynCMx95Q38ocRj",
  "key5": "3oczQ5jCaCRR8w4TMQSh9qrXNS1HtEiMga1wCQ5T83Qb9YxrSmzMusyX72vstYunwaDbAPpqHrjzonBy7zNMUDGh",
  "key6": "3ajpANtuCT3XpgUE5AcyoYrWaxrx4AdhRLxHeZjue1R4W5aKnhuVpxNGySzr5tCry9dUs3raMU4bjM4Vg54dma8K",
  "key7": "AZxAtV7P7VEpQKTjLWdf8YsPkH4sRhvBn8VTBrE3i2yVvfN6wpcmaApYkydRQcdhsDX5shxuF2jh59v5j5JaoKG",
  "key8": "5BrvDNqw8qSULcqXA8KgPcuEdfQX9EWX5dcnSBuiSJZaonAcu6VY2xaUbVdW5HAUCkJV1afYb1mr6gjuDi6EVNV9",
  "key9": "51ANy3ZvE3AcN6tyaS69HUZvpS6BEgjvkGmXAyCLMXTa2FgVckaExJvPXXv5WoH9JgyW2fNtLittxbic1NDhFV2z",
  "key10": "5FqKt2TLU2TTiLncjjFAMNrJoMa9S6vy6P6vNPJv6iSEFDuPZjzc7aCoQLu9UV1RBGYQqnoz3nQg44kzofa9BRGw",
  "key11": "4Bzxar6HjsjxnBntZbHnthFMijtjkocUqCf7d23t1UX6mBussnFAgFdVuAVB244uWMR98FK15sZNZghoVcvkDegw",
  "key12": "5MvPH4t222MppNhG8bhJTfFXq2319ZY3UVnUNokfctda6hLR8LYM35iXCWKjf3kT6Vr57p7c5VKadDZnv8dD3BtY",
  "key13": "W8ep8fYWsPsrDWWkRAhBhm1S2Uq3AhEePEa9VfEWjXcDRGnNRbAcjLYCaQmCRBYmPPLFJkF7rrM6sDfkJGe67oJ",
  "key14": "4fZ3n7xTKES1WT5fJWaFpgRfaGq4hDku3BXNdtFoFCAnKwJkP7jtd6huUaBiPnEBWgrxDqvk4LGrMLMWUdCaeGW4",
  "key15": "2ZzCBaRRkjAPEb29FKrEXMJZztCr477wRH16ABasWuxvHdx198G9NNVqoYGSGiVgkBoKgV8VXK2pRp97wMMx6Hr2",
  "key16": "4T23dVoVMZRbvD3GNB7tMyigUjJJn2BEKUqoibeRLQk93GDt2WJBV4FFamxguE7MwNfBcKD6KvvB5tiKXsB1wKcb",
  "key17": "pa4F11rucEHwgstvZHSRzwqQmopxANJES4T1yRdkFXUrFwbf6vuBxFKgqhdPoQRtLNtgEihffSvxBNavbffTYNi",
  "key18": "ChKu4eWZqoKWy8B6cPHs9nMQUo1s5o3Rw7aPpkpkX8MPmPhrooFxPJMMByJHoXYb5Q47fDedpMLCPYcSGTqCprZ",
  "key19": "5Lcih7EFo75yDvGjUhWYudWQFdAC5xv2vihWouzNMucNgdtGZNnpcsnhvRvyPi1hUDUTNqkojBdf5vSQbEFVVcK3",
  "key20": "3MuDsFqPa7So4oi3N9EktdUD1eCKSAYvZ6VmbLfGSfm3YWQZA6nKQHHaYKaiW5kWEa2Z8iBtXKQ9JhyDN8y1MRP5",
  "key21": "2oAz8wqruP5pgYiJ5bcFuHUd6k3kozXhMTYCZavMghQUcHmJtD2goo2Bu2q8ZK8Jq7amNSU4p8AqEHU1QXKGqhcs",
  "key22": "3zHZZ3kZWAyDGcdq9rcPsuvSFsG9XWmUwhWVHogzQJe6cdTpdvBuo5WAZhRFQkVWW6zdaHuhRiSY1K1hw5JrCBZC",
  "key23": "2Kc1WGeNx72TEwoUWwu7fKveWszBj5qjShKGHvEMrwwWHFZABcHndqgjDp5TRAia9uRvRmdz4ENiZFNyo5mdzyeD",
  "key24": "4iEVj1BiZj48fEYGx2nCiEeUyavRjwGKqVFFxzUqdJU5KnBXCM53EcwRTMiG9VQFV5YFgSQcxyAJeFEL6dV29QxE",
  "key25": "2L5CpodSbHKNWwEBjrLgXFBoLsgf8ytmX7pFk3z1MWAuit8DjsMo5FJHgigdop3gNeTyPGtMxhcb9bveEM5zSf1X",
  "key26": "MrnGoe1J65owvm6navudu7Jmupk24VR9zQDkT4qfoCEcjD63vnkEBG3wVm7H4bjYhpRej611jJuqGNeNzeVAjxH",
  "key27": "5AudQhGzb832sTBFjfiBGdCd9KvqPg52WuZMqfGgide41yJmGXpWUFNkRrnVKBtKW6py6eRFdB913xf9N9fnPnm9",
  "key28": "QFHgQJQ54nwB6LYQJrZFAhPdMfzRNDguM5Jd93h2uPnqMyp7fdBdHFzTvjrg2z2s78xKFBgJqiciFwcJyD9G8zs"
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
