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
    "NZX1mr4BwkM8EizJNarp5GXE9p4nGYxoxc1KfYcTtiDthQe2AnCynjpesSFzdXkjqn3kYRD13zAkzQqBxNGism6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eocbinaJT4mcGtnDVJ5fLwkzv48wj4yMmc5Z1VuC2FoVALz9qSLnJLqYs6zgHsszhFcHUrmJQRePpDcfqhrZP3D",
  "key1": "No8Z32CiBRT6mQ1vvwT4YxoVzFALWw3uzikzJxznT36ojgfVfFyqyYrwrno7ZJPR524Vw4wsaXLCnT7vQ6Qym7c",
  "key2": "2QgTxyPsAVP9iNApeerZSNWRH73bKuXpz8Ms1XrMyqs5D5e4fnkqkqpQKSdowXN9F3H1h14JpZvM7Qmca9HaXgry",
  "key3": "47cMiNwHMayVX2ZZN2Es7uUvh3npFSKr6ZyTQ9ypVMzhxtACR1XWq5w5iq8qkCB2zGPYxjLnybwdzv3hpMy1sN9y",
  "key4": "3EN7FRXtV3o1i7zmkUzUw51YkAddhfgCCLYgNc93RSxJkj9qUP475fvJyexFrSvsqcfi1Q5wew3ieUdUacv6Ltak",
  "key5": "kRYsB8gcsAmz9JoCePCoJoZnAgXnt6ShqsCKcJ6eqEkTjvAirXMemv2BqufMYM9iG2hFWkFTvZECT9WTvCcQfYW",
  "key6": "5PEjZ479DoTn5AHGyfkcxfofAoe8LPQDRsKvdcLN8mgnYpoiT4e6H2CMSKDsL2Kk854U4JLwrabWqAEcEGEbfXsL",
  "key7": "2VbfLwr4HkCo3z8k112jScHxeMvK7JJrGnkP3w3g3mp46hZmU1cm53faroPJEUM5aWPTefivrEgzy4zs7sQsstGn",
  "key8": "42WzE6VFd4QnQmfLZk9XpBHct1UTvwsEL3SbeDroFdQWt16ycMuGttJDY45btdzZuzvPJ28JGQfX262DwTd9QiPB",
  "key9": "2jjzjF6qc4yKPDWHykuAAhEq7axbaoQFesgfZTE64TJZHQye5vDgEjTrbwrqhYomWk2hnmzjGm7DLGAmRMPsDcsN",
  "key10": "SLpqbUxqbH7859ZwdhQPrA33Aj7KFz6jnJRgkCDQSMuLR9yVLJVkuWZLRntmqmLLYwDxvUeVwq2bnLokYbNsBKF",
  "key11": "64p5AdmuKgbcuGKpnkTuoL5NSwXzDT4GVRAqvpCdS6w2kks511dpu1p3kHQBrYrpNc4UCKwqU7DEkQVkKXBvif1S",
  "key12": "3rok9WT4pxy2UnzjjRoniT7WaDegGm5EfRYCdeYXirV8a6iGhNxSBCwTwzoMJWwLM66xpDBS6SJwCeK5UjBGbkgQ",
  "key13": "121k3ioT8QveuUKeqRFTm5iY2XCgXqpJyoUotensAGPYs573YS3yU6hDJXyGsV95JtxKiRNe9JGXY2fU6MCJv3rn",
  "key14": "5cAth6ohivmGa1nrb4Z7ChpPK76QSrkdozqNfrTRQuEdmvdcqaQmVFX2EfGzfN7PUynVaMJhcdR4HccSGfm5d4Ha",
  "key15": "58pKZdonPSCG9e1AmtVHpqeHsxTcqR5fXrCY6jZ9Xq33hvqWkZauNiVkV8noWqKbFMd6oqXeXzzBjURGWPKhyHu8",
  "key16": "3UqWZHuyN4yxaWk1CVPd9baqQrMGsuhK4N78L8EXdPB52ST8fS4CpGK6WvPuMnmrvR3cT3fw48ghgzTELXpyYMK8",
  "key17": "2pZgYBh9ct53cRaTkBfK3mr4xUvZjfCLnNKUN3CASkhqNYbS9vw7bWhCTsc9xxgvH32UoZiM7b4n1CtFcker5ASi",
  "key18": "56NnjdSBLuT1qzL7fHj231zfP3JXRZAjtJxZqVoA2r1qFtczAsQThEto9UtZadXnWpwNH2Kvy4aiecJrjddZ9Xoh",
  "key19": "qKpXykjvZvivfUaft9K2G7BBNVRXrQ11avgvXUenCTUVGhtzG8Pvx4ohfZmMRtcggQvsfeuiJ2iFiBqknmSBscx",
  "key20": "LWyEtdzHFKJx2GZAt8ePrLyqdBtqdaLjSbmssTgYXSqb5QCHZYB1T4GTU68dxkfWjKKYA7Qh75ydxFwjpojPJjS",
  "key21": "6qij18fs95ecFKrKaCSCDKsBmg6pfeRoKFXuALUxeRFPmDX26xjXxJ661E9BPsiLrvV9KSFV6qcsKbFiP8miqTm",
  "key22": "4hfiaVrYPX99pPFQwbNkGcHfnETUCkTPUJfZUkq2ooo1b6bibUBKDPpenuZicUAT48ve8UXm5nZgkPYBFkj5rZtq",
  "key23": "4tCPxP6GdgTJr4HDQ6GUNJrWEae8octHGNKviRMZqZNsKpjFP33mLqM3TnvVwFvqZ9BwrTBWTNwBdJ49LjaCURx1",
  "key24": "23iE2pAVtKkmu3xqgByRRhPhL4uY5SsL6sn4Lt9rQxnR83HyAbnC5Lvpf1q9JBWmKmQsr9VSHjBrDtAk2zFdkA8r",
  "key25": "mL2LT7V4k8v9cd6TtFWFbLVBQH6D68A3rtE6LdSEjFaMJqrRG3oHT6Dj7WbLgwmD67McqiiYe6esJYYtdZgoPsi",
  "key26": "2jLwihXAvHBnE2CpFgmghf9bPntCQM3VYMD2YPDGq1AACzus6JcNBUV8PBJQZR6L4n39m6eWmpoEsdim3QDR18k3",
  "key27": "29pFDsn7gM9G5XneUG68kUJ6Y3mDp9wYssTwCzYYgpkLyQ5hD5xXxqK4FPCkUMxtzwqrXjcinDMX9vPwB1rsfz4j",
  "key28": "2V8KAjMwoJAv5thNxWjzdJAzmCPTBzgq9L2ZCPREGdjfrtZSkMqHfL6qfbMkn6yFEUnz3ZGcDtVhoGzZjHR6JXmp"
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
