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
    "5DuMU3u4BJVdpeZxekbKe4g2dbG743sXGX1S7tdiagnbYA5kZARvwBBozGwmCJdGnUfkd5xK8eNjQomueJPo33DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tCwJLkUGVjktUHr1egD5zZvWHFfBzP5qxMP11KMqx3pjrYD2RytYNWWbPsPmviMBNKXv573XnB3ZhN7mxftefJL",
  "key1": "3sfbz7WcwaLPzxKqtp64m7LHJdz5kGbZLQCHYdA6onK8xQcTmzbjjeqjWhvN8KrxsaVZ1pPPvfRxyGHQrG6DQQg5",
  "key2": "YpVrRrFFtWhtMX7hDe6bcUg4sVRkMgnkyuzpWtsPqaJsmA11UdvmwZY56sjZHEQimqfAAZFNJ4oBxuZ45KbSVdL",
  "key3": "31WkpkjbFLB7mq8fyt4LaJtxjYSf3nhynNJxBMh4X5Dou7CCBZk3BtUFayHQtCm2Lfqfcp4Aop7ZymtPmGNn7S1d",
  "key4": "3HKt7mxVp9MAxVP1PmWXFnFmGCHZh7hUB5Mmyp4UKtT5d8QeuUG4PQjgrVUKR7jFKqJB4rARgUogB7Hj7zVRbWBo",
  "key5": "giYqLJm9yYEzVb3nQt33XPsdgtvt8ZQMQa2XTVZ9ZR8oZzoivcDkmm1mRmmMHvSFnka9MKzMALVHCdWtSij9v41",
  "key6": "66q3P69P2cycUdZeqozc8zTd7Qhia8K3EWfUQ3Mr8TFHKfXDN4KHCHKzCCZXC1f4K56468ybyQKkLm1QC8j1bhGB",
  "key7": "4hkxdvJtuTsyWJDBe771aFd9ZbHubDkstERAbpyYwMXAQgsQkqwbUy6grzjKy5dR7GPfHQR7wieRtY9SA9LcBaZN",
  "key8": "3PNEz8SeagpkiST2GZNmdr27uXogjtcDf7mTQWCkEnsFnxwzzGdv4tXhu8xKVohiQiHuPRXoJo6SdZxhY1Aw8FFc",
  "key9": "4g6nZF95DVc1cDMZHPxQ6y6vaVqUx518iPYgHvYPswYU7fNkEFSLMTkPrX9bufDUSVdDqr91VWHrRXrRqyScPD1n",
  "key10": "z3p9sE1KA71f8FoKtxC9RBGagVHTCs3wDwPkrfMx2A6ArkCFBpsDrd3Z9vUeyNtCaAWMTMMokcqh5hXknAXug7f",
  "key11": "QvfK58GGgckd1U6ytZenx5wFttJ4tDkLo66BDm2R4M8qMnorj5SZ3tEFvdGSz1divuYCyDRtmQRhge77xXfJZwX",
  "key12": "3TDyHhHuU4yF464g6PstBQRgn7pGpbhH4WKRRVRaHECNHavvJseMV4u34rBbwdsnGecoJ42LTZTGHwzY9Zoi9Hag",
  "key13": "kDGDCdXz9YzpqszT2X22vRm9xM3a3iUXhJhzU2iQXsRZrpREkEGvSEwgcKXRwYRdNfWRxoch5VFSPfpGyXMzMN1",
  "key14": "5xp6Tnb8xfh7DEVrRqdTFDBvcqbkf1Q3qXsF6mWv49wGNZ7rt559VWf7n4Kh6mENK7TB4hHNTWZFojLp15ajfasC",
  "key15": "3VZb6VSdLP2mkvXMQaiGicR5WhwGco2E3DzsxXuxcgBd8wDv9g8aSD7VNKnnUnyvVfpZ1L8N7oR4QVX6kfJ5Wdih",
  "key16": "5YwSidbX9YzwgVTToDQwHDxdS5XvHmXsK5wNDPtFLPF34VCLBCYhFuwAsQDq3xmFVMJuNDHr7PNkGZAHNZvJcqKm",
  "key17": "Ro1rqdkp2wNxu3Cp38HVm7pLbqTC4Xt4ind3pgUiDYNwyFm9ixeqBXbL7EAFhgPBjxJfqQ6pMzMW9tTXW3FS7vB",
  "key18": "5odtC4wUHBaazLyWVjQ7Ho3XSoT7eTne4mCr2cJu2NtnXLyxNEa8ZMEczAyhRPJjg3YsyMspGWgtLCqPHLR1Ssd5",
  "key19": "4BJu56v2VH5TnpuYcxJkCDSSwTJNZd3TtEQHPNc1yGKy4KebZacPiyvLWQWRYpmzAtUM1TovmSDiPZEjhfEc6Nbw",
  "key20": "4Y1ARGvUQhVesM2r11imPmETzzZ7oEWV4TRwuxzcjkftXwuxTHkbN7sjizBdzuScFMYEW5LmeisxHAXkQHShsQw2",
  "key21": "MThvQWKkXqfBGZ47qjX4YuE6okjRVNfpCteqP9rqu7g3Lf1Bzvgix5JtoQkXh6h9tGEHTdtTFoAztkTZmswRrNR",
  "key22": "tNxLR7i1w66X13RZ4zhXEVqjf8N9j3X2Y52vvRbhBZRaKJeNok1Z2kRFBvRZ6VbCMQAAi4bmqn48V5y4ZRCJhe6",
  "key23": "65WLS9YzPpfmGexwDPRFpCuzaKA7ptzVBouqUvpg7VqzjMSoNsRkQ7d1C4jACtKsH1aacoBmHZyoSWLatenAV5cb",
  "key24": "5dscd6pGxKaUWgtioQAa5hk62V55fTgAYPHaxmpcGcsmz2y1JEJeVpKv5ND2kaZF9qU4dixFTVQc89JhyrJDbjAD",
  "key25": "5gfpZAbNDnssJA73kVYxHzkt9JsqQtbWatmbetnZx2XUYSd9i9FFdp2XwpyA6snEGm3qAR2tFxjF12rA8ubQEyhJ",
  "key26": "UbW8TFhUaQ8KSrVt2QCBWkJ9UPkKYWbWd3SPe4iC6BrgyJyKycRNJzmfaiBinaL8s8YbxTG5Bce3uJAjwrpmkxA",
  "key27": "2ko3VSnEf3J8Lnw2uCTLrpfJunakgkLUbVh8XaLGpSeoP1yu2BJaqhgWWZdf4qWAgCbxKRvuSuQi1xhrYT1DwmdC",
  "key28": "3RyJvkUXkYTF3JGp1vGsTm6dedoJmbDcdgAngLxL9YnP5piMdtBgkxajcvwxw5yQC5Thd3aAbQtYkAk5wPtErQ1t",
  "key29": "3sqKaoCtjvP7Av35Arw6sdTouppxCGz8ohBPQnNpctjc4238bjT19ymnoX9N5cVyzshbQu7iguQUX6v3KCyUuiJT",
  "key30": "3zig51YbooW7xFnj8UCQm2wWCSi1R2Q9LwXrEJFiqzFu4G7RHTorKkZ2KhLoq6a1LFDhdgVoYTu4yugNZWHCKJ6f",
  "key31": "67dSSfH4ae6xGb38Tz5uduoBY6ADwBRBRQRgG4QRjyyitYEX2iVox57ugzcDooyVX84FuLBecHXnTVvCF2DhXqP5",
  "key32": "5eHqa1BJWUpNtRHz626J78caNPS9MTFrmrmzZxWxDrh8VGAi6q4yeinR9pmpQk1DPD93jiKUnnWY3hyCRDEnjAZp",
  "key33": "BJJcn37ubuP3Yp1Wwtg5G4MVJiZjfTjTdLMksgFhVoq9H74nEvZ8R7tT2teHKH38v9KSp2fj8v8fSczHK12rsGv",
  "key34": "2t9JpPxQkRbWn8N6CpSkP3Rtai9Jw4A7Xk58G9XbHRKzwHTmzow5HxhpGjkcSufM6NUDpyiPBSbZTDtmkfs7yb6P",
  "key35": "3aNteDHWqnKDe5fVxnk4HyA2ntfYCXdaTPkYCBLNNjfogkNpw9UnAJDGCzZQ4BtuLc9eemzNQ16Z9ipRzGAGX82f",
  "key36": "u7TFLZUffjRkxhKb2mZYzTgLhB51UNNTZrrwScHCiX9UujhEJ6vVKRyL9SBwuFS7NNjrDdNpuY6Sepz2faT9z2L",
  "key37": "4RHfB3STnq4yPg9uozqN7LeuS1jKKZNVwx2wBDrGJu8cifm2Jnxdv5rzUcHnPe9M77Et9UsjrENJHu3uyuBRSPuk",
  "key38": "3FKg5XZaBWgtAEroMhXsnZvkYsbeJBpNkouZeHTV4iDhn3g4uj9c9hkmcFNwQGbHRgLSLZrP8g7VyUEp1gPW6wJR",
  "key39": "5X8Ts8g36eCdFbUp68yvjWikirTDz32ngsUe8MV3LSXMQt6ysbF6NJsNQ6W3E1o9nj2RmWuUfRebFKsFmQvDqFsz",
  "key40": "3SznKhaML3muVoy6GQEVSpSHwauzydaTUPfMiUhErmQXZZ8VZGB1HYx8nnKzKqk67VuviWA9foaVo2yMuZ4modAR",
  "key41": "nEEfBznfKVs7H6Lfa3yVtX1Fr3EfMVGeqtsuamrFBb8JEY1ojj9V557JR7pJG6uSoc1pDC4KD13tJQckGpQcfjx",
  "key42": "4MQxuHTW5ckyrGvmby2JVTPLuv5XNdip42HFuo7AzwhCSNGJVHifccHbgfGw3CkrreM9U8f6JieMZNJq5hhvJnhU",
  "key43": "2zc6dJxitbaBujyEkgM8z2sFKDXwepr6MzN5bgPH2v1JPR7j7tku78E52AzB8XjQjyJqvHzLUGHCNRGKpuypEuwp",
  "key44": "341hvfGva3x6rCwsPR9wYbSTeJ9YMb2qp9hRovebze77bVvNve2m7SEGdfHjriyd5DKKhxQ6nWTtbYRi2tqXLUer",
  "key45": "KSM4WsKVaFohtABsLQaUTRXPo8n2FJhTs2dEhEtjg2spTY4M9WLHT7weEBHU832mBfFipSpeqDgo2DHwnEMAT86",
  "key46": "47PF52XQfqsvD9YA6P4SJiARN2BNbQwGR5R9huKjD7Kna7zms3K9GBD4ujfxdaCM7CT3z2fFMWTHatcaA6TTLKg4",
  "key47": "4aoBFzq2CNkhJ1vNJXD1fgevmTtpRugcCwcqxBqNxwoqRoM3pcNPkzB1cfm5wUkCuRxHqdK3R26zVkprv99i2aX6",
  "key48": "2n7Uxyu1LpQS2Aw1hWFatjmXLHCKZ5ZWXVARMrMcem8n8LTFRek12CHyDkuWC5exQqpq8YVPC6Btr9LtQWYTnoYQ"
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
