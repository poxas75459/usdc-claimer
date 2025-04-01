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
    "3aq51ZSiEA5AUBk8UfS75gUwjgdUNFzG4VPXMxmJBET6RM1Qfpyh6vE1PFsDBsrkeaj8m5pX1Ns6Myh9YkNisehy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stawqH2GaUPdkBvjHsTy7sJumpgKW2qZnzPyvpwgGs12MVtXhmtWBWJQGmthU5efaRysNkipKqCqPCZ6LqasiR6",
  "key1": "4NS8wRwPJJ3ubYLPxftqqszJW4GT1mjfg6oL7ajM4NNqTYpxaisNYu6rV8L4hCXQn5cZDhtDnq92WWDDVK6VUkqD",
  "key2": "8j19rzrraaSJELKYoEqSnQWXrhWkheKbZYXVpruFTj6VAX9bVoPUHFz23LvCA2N6QXsR3tPAevYGcP7qe2tDQgM",
  "key3": "z1L95yAQbjFjEBR8mHUh85ibfeyKQHvfxipJqkUFaJk4sLm5dpNybFyuo4h17kEyvPCenvFBxF4vw8kxSvhRy8z",
  "key4": "2LYQmAhWLHewcVaePz85QxooVy628EAAX6ZJDF6429GSLWKDHh7zFZwmHocXkduahCgimrkTSHiFMFfrmzXQDW2d",
  "key5": "3Z1oxZYfVSVS2VfTBM3UsxHHEDUyuRCFzW7z1qWk6gK159PvZLSDQiDQHctAT89g3mkCj1G8nc1KvNsBf4ZvaJjj",
  "key6": "4RP5CWute5RXP6yYDQuRw3x4Ac5kLsgat19U8Dev6sr3kkRRRJZpJxN6Vh9RyZxBxBZJW15bW8Xk9fkwmHVwjDWx",
  "key7": "4PM21F6sn1kZ7P5ffdfT9fx86n5zfM76iCx925c9n8sbG5i67Pm8mxAx4zjfPLP2N4LQ7Fj5gKwZqk7kuD15SGKC",
  "key8": "3YnYA2ttcTtm4nD25EiMVr4CoBbxfo9mEsaFmjeVtc24dYsyvR3SCAABKcE469Wt73TLGqhX93jAazMx9UjSMKwA",
  "key9": "q7XWSCBuxaTB2D7r4nTXE9eDZ7fAPW2bzU4RSdS4mpQdpTG4YgEJyTvkJmyU4bixAQ85A4s7moVJunNb55ntDD5",
  "key10": "4wmfCNrytQr1wXKGnZPfncBoFCSFgj3CTFGRFB8Ps7qWPgdkq2oMTzwE8S1kRz6H1qtiP2MySw4diAAorWNRCtCJ",
  "key11": "4EJjZUnXUcXFQrXCjqf91CCVMJFPs448YBgkwuf8SboBz1vZvkAJmaGJvzUEPh3LtXB8Btx2LRWXey6L6SRaTMBb",
  "key12": "5haLy4ScFo2wd6GXE5XNqjjQDrLUnVGzJ9mDLaLYA5S27L1AACMBU8iiuqQM7cNpnwvyJwifeSoG9uieZFiGpGPM",
  "key13": "2tr6HeZuoPgVCqkHbXhow72MseUUbBp8iyWEBdjb4s3BytopYGpHevK6fUnmwkWwG5hMzVk3tkDoCsGDNmBzHs4N",
  "key14": "4X2Uw9eMcKP3gzam1rSppDwTk8HBRrefyBcdGXjUu228JW8y9ce7RSgbNiFKTEd28duhkCqbJgkdP73312yy4rsx",
  "key15": "i5hr7C562uA7u9Xhb3fBUZ4ADz4gWFbtBTosXjh5QTFhCD8JdyVaG1jhbgcJhdtmaNMvdrzf3NwpzKKfw83Zjoc",
  "key16": "mq2vRTC9GtPvAtgKzPFNXGC5xh3qpo2iviQKhzBkCo85KEobDjVNZLXhrrsUkSt7c4rtbhJAskREXskxCBbfMTW",
  "key17": "4RcmGPGka2edCg92dgFh2RhJXYWhFtJWJXcfaKGMrGTCYKDy5z9coaPQhU9MZArUWwfB43HELuLWA1Ld47T4DbSk",
  "key18": "3tUPxufGaJ9G8cEcPKgfGRBZ3waxZvWddtNTCcKc3WH8L1XBeEvSsSfNyTCGL3oUFzodrUkSxXDazchpHMitC7nM",
  "key19": "5vptPyYmAHyFChnXGyCqP4SJrh4ds9uJqCW7nB9fCvk7ZY1SodQKrnvCTKWj4SYCE7xkj7eoa7XuMMYKTc5kCwmw",
  "key20": "4GmCKRxTJM6pB65i6EVsfvAZxgEgdFtuNzjPhBvife3Qs2hKppWTBcGZgKU1pbLbNoEce4bM5fMVKNs9bN6Z9mBN",
  "key21": "3AAQSDkoEcrmenpmSw6KNgEdp3Puvepnyic4pNHXz7aT1FsUFBtbVGArwZk8D2Mxq7rVd4LjhuB4nnkV2ExktRn7",
  "key22": "5esa5tfsySATzG7ALZwqKm3SpT6w4orPWey69DUnrYuRBQgWNZd82ypaN7MLqumFttexXZP62DaSi47dDKxvzUCM",
  "key23": "Y3XMxyq8Bw2uqz1mSUZDHwJ6Lfo51yr2MvjXRZbRy4E7udDmm9Re9oF3VPbPLEth9UW7iRuWHxF8ikjoVaYskEt",
  "key24": "2HKa7bRLFXMTrARv7mkUNazVdYkbrdZtkJfCa78Jkh8mrhUyGeTReomCUwjfCFLKPcGTKPVgkTyaz7oRCkVMoAet",
  "key25": "4VMccD8oxdBceWvSPymuuWr4r5sPWZsc8rHBkiKcQLhtjo8ETBD1CqZDixDbn7edPd6C9zJ91WXRt2n29dYJeWvM",
  "key26": "ZtPoXdbUk1KxnxC6iAAEjx67oVfoPfScEY6ydrWfSehPWAUvruxNzbhg6pH9ZZU3r2jvVzS4eZ9sR9nQqMMKfut",
  "key27": "5S3i2JUN9Yv9XHhvssfPqtwT4F4qHvXiED1HNgKAG9cSMtwfv2bJP2EQSoDzr2XbDCWWM1SGDfzV8sre5Tv718i5",
  "key28": "354QdJqhifL7ENBaMBBgRNL3HVWpWJ5xTtnxoxCaVF9xay7ZxcqTLVMZm65EDw9G5vgbUeMrALcEG5z1dZ2LDcrJ",
  "key29": "7AD5qiFwgxYPuWZoa3JCSbccACXg8VY7gk7w551GaLP8T5zzs6KczXagfvhAxzQ8tw5hWoWN2uE6UBd8L8XTXDk",
  "key30": "3zoxnFBKDNfBMyBKEwCq1wcAU79dQNfYock5YepQPHdEuZxwgME7LBhdkWsyFs3JLYyma1TRa3PH7bBrUKeZhRG6",
  "key31": "cbKgQBQbK2kRz4Uc7y1GBbkbDEdT8uDVkYEASXiyL4P19aMHUEFnALrbttifw9WVsziDWMb6iXX9gTYNnAqwruj",
  "key32": "21BXNvk2Rnf5K1Aa3JxGjCj4N5g1pqDQuHvwiYP6Lwox5idgKBD35U7hznHe67U9ufyVZGKqRhe2KEQBjrt5GTaJ",
  "key33": "YLtLyH9BEzqv8FnwNp2Z4Z8kuXxEUswnfpRtrscNTdMMw5EautathQ6i744sPbXNKjEJCu9KwGeUQi6TrH4xy67",
  "key34": "2qXQQK7R6KdYmkM97CApxmgdWuJnHo6x7Whwvdsod3qQKgnBF8MPj3LzgW3G4bs7UP9nHGCh6x1fLkMmQnaJLib1",
  "key35": "44K6gy6FFHV3SYhVFxEMauUyCeT66nJ2RXTDmRNoWFvPTDF9ZEBdSX4L5rKSHZKuWu9dTVGGCEuXjZJesyogajN4",
  "key36": "48BkcwUZ99f6dNqZ2Pi6WNdsqwbVLkVSoR5Bf3rZ21qD13d8pCUiDhMvzJQRqrnchRbkc9TS6v6ASCZdiGvrL8ki",
  "key37": "3V1ZUEFc4LK7F1cFtfrXX1Wqv28MCF4hGU3Qm4Eizp865ZvtLCTa45PBYeV9yAbQup2ceHFcx5wt949YSokfK7Pw"
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
