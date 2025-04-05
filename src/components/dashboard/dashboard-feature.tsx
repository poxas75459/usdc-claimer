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
    "5spaPfNHthD3Sa7nP3eQoueKWbXXtxS4iEDd9i7e1cQrcFfwnijqiAcQ8MVBMMZcea29YFttkH9XM6csynBbmXm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NL6GbZcuUZ3NUJtNuHcwG6dvKQ4D9U5cd8PcBVaN6axWCobQ58cshSozYPiQqcyw2tz4UqnUyacAnVPpppxWvY3",
  "key1": "4VUohx8LxQiBi7fgAvJaAe6SMj1u4EYdH8TKcj2uJFncTWv3jYVySs2c2fjcC9YpLEfHnk7Y3j9Yp59i1ZBAx2xG",
  "key2": "oyu6KC5MmwRuDHgFXShuM5P7gE5KiyquWz4DbexKG7X4LiDoHhbA9HMLP1mT6aDAXz4vxnGAaHxiEXnMRDmr2ib",
  "key3": "5zVFNWUoh28gppiRb8ETMSzchQ6fakWtfbn2PVReGjSfcpoVfWXjdnoAG6nhQXeDa1ttuMUBtjXuNVT9LDD6YmAL",
  "key4": "62WbL3QYvGaUxcvSbXomeF72asxqvPaSM1Xh5BMJWLpNuEhGaPJvTr4yETPudbQ6cZZDRhZFzBAZCs9Ew9DDvSMt",
  "key5": "4rD43ap3A21BuuNPG7Mi2Axxx7zSrWNXNd1UgiKATsguwui564BfKAnZnK16XXyi2guNqxDEexRuGb3kGqVwGtoA",
  "key6": "25aLzFcXyPVSsQMbHgxwxP3cy67nAEi4Ca6XaDPJP7naqb1TBtGvdvFGv85AGsMQ1zNmrYCbCxSGyyYzyFtoiqcP",
  "key7": "RcY22s5GGJFBxUx9h5L3aBUXfWEj7ynjuk3WdG9C3dZSPLWdBkjJSf8mzVR1exmjTaAxA3zWns4RsWYYQVLVgHJ",
  "key8": "sfYcp9SQ4YQnhPYewuHYEDZGLH1EejHLdUPoRXq8fusoMJxPXKvB4pTGQ7u1gCFBZakft7j6dMBRaWVpDMYQAjN",
  "key9": "3gGsjpHmCXpjMyJBL3ZCq5V9HqqvhFU9EtMbfcanktzKNGB9v2au3qFFtuDnQk2kUjHtgLk5QmZBZCuNJ3qyNXgC",
  "key10": "4kpRr73KAUxXSsTWAVVXA7c1euUk74CcHVfygus9HXDUt9Vr9awkGE2UKEBx76QYWadE9B8sjkx5KeeL6t9zN9Em",
  "key11": "5kVCLbCtktWEEeKKM1PHUCPkS9foWeq7nYnifESxAmmVzDU9aKPPKJsjrawqXX2QW8JdrvrUjwSbMQWhErz1PpzJ",
  "key12": "3cgoiHaZ3BB6Bmppk8qQ98TH55Cdw694HTZDjG68DEk7BYWdTg6CXepYr2FjrqTHD3bNrJAi5DSuTo3oKKvafbSm",
  "key13": "5zmeDNagCpgoK4t77zTWpQkWdqj1TnVMjZUAY6X9MxRCzJwg4mWHxKQajj6UvDWwdfFY9t4sJ5hjKj4bW7ytxUmp",
  "key14": "jW5wuGVm1tWkZesgEYzKLwjwEq6ZvZRm6eHa9CNdJQGiLd14bDJo7EV6G7X57KdQ7EGKg4ZAFFD5EzV4o1Guv5v",
  "key15": "41o2NfU3bBEMcDQnmxM3mEoS5T1gkDUKuEz2ryaqBGjqDhaAWN1hPxVT8FrDBt9oT3i4fjkRkRTSdjTGZ34sHQvm",
  "key16": "2D8JFAVj5vRpy5nLEw6QHtVsUYZPFyH5CZtQy4khkyYBAUrYfXXc45WfvoD4wS2RntXgrM7o1wTELY5ca8XmtAgb",
  "key17": "4BrA9oTgSyP2Su1Lpw2YYd3LUyxjjaDBeyqiLJyPyue5huRqqXTjH2bzeUSJJKQ54WU1SjkwYESRrqiFos8gQyJo",
  "key18": "35dHu6M2W5Yn6wnjxPtZsNfVTLNmfDKJm4fiwCaF2rthvERbythXGxjzMc3HasCUsyZhNeNRH6aCJmDR6zgjbkzU",
  "key19": "5GmSH33RJnW3xV3wGb59sTHuLoWnjmKxeSFBR8GNU3c4ZqVDTaQ2v3zSD5YHXoG6DNhzVTmRoRrmLTfnBfLvjpLw",
  "key20": "3XgDTcpmWNETgfDoFK5L95R5ky1srcMrjw8MThJYarqSc6C8EJNBHDxveks2AVeX8Q2Ag3M7i8qiFroi3jJMTBiw",
  "key21": "2jyQfsL2bNPfTHdEi5CQUoWmW47EAqeL4D9BEwS67J2NeZZQe84XmRyquDsRNtLtrFGSxW823pU9SEq39KsCYT36",
  "key22": "5WQZt1G9gKGk64KWEwHfDcYFPS8qBEytCBaK9bj7TxYtY7PAfaExFmCnMG6AgMTs4KSLgY7YLsnCyLEVAAuurCzy",
  "key23": "2fLakRmDnP46EBHDJmcvYxZppgdUXUwfAzPHudqJQgn9jBM8up2ypzXphca1rcFMpgERDRD5Luxp1YeXm4m6qmdT",
  "key24": "jrUnNogKHQycxTP9nPoyuaWVhJKCSrx5VMb3tcewSCPsCTY9YXtq9FvphLLJZx8h5fX8iLuDPsCAx8L25CRw9sC",
  "key25": "2xLepfvgUZUtJg6q32cqvzZq3Scn7RLwLCoyrKNfedwgKaY3iVuyBUbrjmkkc1AaM8Bo1KNNLvNT9ciF9jDUCm1T",
  "key26": "4ywqDr8wnwgRemqoqLkEJSXiWCnuf2mm28kQ9PSvn3UNWtFg168MeLBY1qdECXSC5jhmhNFUueYfUpiY9ay47hrf",
  "key27": "5DydVLBb9nmB5rtAYPh1aCaonYKZCekEZ9c3YbUEwCAmnvmtMSiqhMkQA1MmJ5tuGdsFJJ3SFxzAzUPdHwWSXxRv",
  "key28": "43gFC6RvNZHaL9XxxqjdgyTMSSnon67AG912QEdxku5awC3gmT7yVMRBpAu4uQqsuQtmSAo865382769gqAau14A",
  "key29": "4PgwLWNxWZriWXhmyTWoKjxXeFJ2D5WKi2xcZPkG62EbRPb1VEPyhNJQ9HEb1NSSYswqT2R8VmZ3J8HgSS7oVQHm",
  "key30": "5RS8aczesdzLAMgMMQrEYCuVpcm7nfTaGv1oRxuJZYbZQzNhUUYfHAq4xk4cPs64Dha82myCnECXy2C48t6VMvt4",
  "key31": "3beyzcaYvbfofSPPwak8BHKQirEWBM2DwzemhxbBTpdyNBMYDghNFhqrZfKsq3sqzPxMYKbtkS35nFwCo82aRyPX",
  "key32": "3zY8oW4X7FEWqCc3BpVPyS9U8sMazjot9pW6dD27AMoEaQQp1z2cfF64oKew67J967Cg3rFiP3ve6jDRdd1AK6Lz",
  "key33": "3Je1CqfttTpKiYHB7w8JKPkAV1nwHJLKFzYcLFcnqA1WonhVZgUB3ozFAuG6juLwB7p9qbEjp8mUvzyXHfxFHzZq",
  "key34": "3fPgUCVSXmym1bn9dMhp2nf9fC6eWU7TEyHe1eeq3JjyRJBaLfUmtS6GHTUHYq95DBQGbcXqDP3j7eEetjUFY6gA",
  "key35": "3wD1fWicat4WA5pkfAHzUyVuaHAtZSnBUQgAg8p7n7u3sm97bLrVWzgGwV5vpWqNg6AYmKPrQgG5fGxJYk5r3LR1",
  "key36": "5oSLt6n1W8BrqeSzPsPKv1sSRL8CdTipv3gNp8JJmCqZ8JUxHkAzPzj6Fpi1aXyFfvAdvGE8epz7EiFeM7GjM1Fi",
  "key37": "4LJ7sZ16uNyZYHiKz69CDmCzLkYHDZai7vELcfoBzWeT3jyZhRGJ6GszP22QmQ9dbHN9N9WM1eSYPcyx96FmWvZt",
  "key38": "4WtwbnVbRHCCZczfnFzKnQwdiP6tD9EKQnMWPZNKXyHKnqi8nNhoxtMSUBcJqAkX6JU3fgbmTCGDjkmV1N16HtZT",
  "key39": "n6puhZqPKXAB3twFMuaPCr9HXvxyP1PmNbccZkjvuVJxjDMkWqmzfFF7JmBkuBvrqEexzZM1fyeN9GVFqEUrGAq",
  "key40": "3CA8GFYcXBTQMFZ118FCmVWSmWBtGX4MMNLRSSmXcHeRrwD1QKXmju9uH9cCjXYiQKAQFx48fpwzrRqr7p43ASCa",
  "key41": "5yMevC3tde3VT4yxv94wLxWrKZtyA1bJRgL4MEBBMmGh92HSVQngnNzVZCCeEWcJiUKemvt4YTxE5GZgvmBitd6j",
  "key42": "4aWYMUNecLMpPJE4D3VCvB75jLm4UU7bD8Y3GStRKgJqQaMir8FbKWGySE92tcTeyVWUw9JuGgkR8MfsvbhTj3MF",
  "key43": "3GJaGtgV7f1tqfGAadxSd3DonCS989HfUwUQojrF96TA7rUG4qTiuVgbYrLfCeZeZKnHofgsByJm8ccT1ff1uEyH",
  "key44": "4qdfmJ2Bix6ZZLqvzNL3XNkKjLKSRm5P7QMECves4NTtykasyzEcr37U4EQvpXkcU8wBaEGEoAYwjRS7UjbaHFQV",
  "key45": "pssi1EtXWwXjCbrE52XrcEpeyiFoo7GuSzzvxeF3EaWjSSDLMnur7sgjMDsP3mt4Nk2yYNL3mKrWxanMt3b9NN4"
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
