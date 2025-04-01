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
    "3e2qou7PQZ8bG2KC5Y1kjVsQSwy3ZQsYcWZWPk3LFDXs6U8iEiTfGiRqcDik1zeerTDRpr5Luup4wze5ggDABUnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rvnf1vzQDvz9aRL4MMZoYNFKBcG3aRDncKxZZfeNWvCTzAXC9EgqiSuMnnjdyX5W6upZoae6PWTwhtL55Zq63YP",
  "key1": "5mq6VPCoRxEQzbN6wxySN9fzCgHxAHFUEJhnZErVUmdLDmrqzCuEzXyccUKMG7YPF4MieWNRFFwtWnfowe5y52Aj",
  "key2": "3RpL2Rr5hMRYsLxEBWkTU33i7TjaukpXUPmNL12MM8kqFv7D9w8DZDVpVy8d7pQYKTg633S9UScm4xGVZUDhZKBY",
  "key3": "3zHn8k3pY9UPpGPNrGzQWHKCRnvfpgAeR75QLwRJJdkxttWEnvmvxxzktxr8GYtKZnwVNBEu75K39E7Sb7NavFgX",
  "key4": "3Rupm5LUh2xo5mnXGU2n6NAL25e27aeZ22BGePQThuarygpAAYQzCy1u5QeaSgSneG6E1npXufPmX9VLBKreK46R",
  "key5": "2X3RiVEXu9BNafX5s3VzN1QSw9nBZDzhoWSPre2GVNdM8GUJ6YdaBHxJceTB5Q4bPAeVkb4oNMHPE3NHHY5Ff4S4",
  "key6": "3MMpkvCxLSKcM8FAdcdrDq947HSQQuWZrt4tg4vZpZtkeR3EKtF6JvkYTLGXjZt46iJuFc2cA3CWCJFHpQeTQfmt",
  "key7": "5ek8rV8nHcxTNkTVNDjD9eAwrDTTuMXogg2HmvtztSx5fb9tUacPzMqqo1nnYj8DGjfLgQ4hSyhSTBYR3cstuscP",
  "key8": "3hi7XbBXBJzHpjLSXQDRtPXBTVemUhDtvEFzWZ5j4K1icrEDgdrgVfSj6PDyhiMbTtNkP5Q5RDMdtsR6YaNWx7Mp",
  "key9": "3p7SfH8QjnmrZGqiMcS52KeaViERud1ev6guYBS2R7HbfF3JY9dEzuDgKairqT9z3t8oNBGSkCw9EeTrKjtPaSnn",
  "key10": "JMCSvj6QrLEzPyWdZj1GtVGhBQboevEydCg8Q1ovNveTm3Z4x583caQ7oFCAM2QKXakgHWC8Yxdurn2Fe3dZRMz",
  "key11": "5BYmyS1L841NdS3fU461nK4sSWDRcdrF12ftUZ7SzagZtjNggQV7D3D6u6J1GYHPu4uEZGTtnePDJJG4m1QZPzzj",
  "key12": "3nWZMrntgxyTnb75tC4WwkqgV4Uw6enLt2My5Vpqf7yjsYZyM6ZhH581i1FeAZck64C4tsVPqUSjaRTtZcjkn2V2",
  "key13": "287KM59VhswH5c7H7TvnX2JuZpnyAHaWVvpFDCmCjg9N2TfYZ6q3ZAHFfEyCGuDgiRrjShe7nqemksHCzvV9GpJo",
  "key14": "5RTSnJBQZ5TgrvKiy9KnNzFrD2xRfuiS2kUjR8tt9YTYtbZiuwk6kHCrkB7G3xdicE9ePXBnp2CC7fVEkrDddbbZ",
  "key15": "63V1v3x54TdFp4qLL8ojP3vSjv4w4TL6ueQYCZTCxmeVaeh5XJ6BaNCsujgre5jcgB3D7dP2rLGWE4WuuxGC8vDK",
  "key16": "62Skc2JGZvL6xYV929AsuzKmYuGis9hmneLojhe54uhdeRrVXfMtqUy6saaLmktoeq2AZ4L8bDyAYvq54kr4YfGs",
  "key17": "2kgVE7fvfzM1RC8WsufRGCr8qD6HRBtWnLQqCrycjxM4rxD4xLrkcwMGa9b4msNDNhzcY5oBmwAjRT1RSuS2AJSa",
  "key18": "SnpmzyzjMYtBYxx3G9k9aUsMENDtF4oqFcF6g43J9bCUuXYC1SrDPWSqgqdeaGeLxtA6NQNaEuqnL9KhicSxnjr",
  "key19": "5P6HnbBeQkw1yk7Q9aNQPLWyr4fPiRSC2azZnYBkNhEe8bPoVBf5drY89bkpwXTEfqKc34Q1MeuRdhFTaDCTJMKK",
  "key20": "3pDnAgqYuh2etEJpoMEyVq7BjzBPjeqMRF1FzEPQxPqVgCXNPQz5FXkLnKX8HWvzEBrxiDLQJjQR7uP5VcgZMLHB",
  "key21": "m1SY7rXu7nKFAQusDwn1w7S5jCQrPhKDmTRpvASY3RAThAgaEGfruPf6EyFMvUusLN5rYgELpHzyWaFifeJQfxp",
  "key22": "3rCfv35xXapY3gKoiZYhKLhYq2bA4RoeidVzMJWpfWeuu59EQ7X9QeG9zCUWHmSXovkoutN2HBv5hpYHfmJ8KA4Y",
  "key23": "2CA8kdHxYEpwjHyAnxDcTY67SKprXncGtjkSVfMVSwjKurpqiqJzg2h2Yqe2qbLpeGm1Q4wuKVJhRisgTJdppFuv",
  "key24": "6143VBWiaarmJFjXkwFXFYqraU7oUuLxiDFUSPCnV8GPrF9WbMRW5nThV3rAK8oJLM8MTSNX2Dt59VDnjLeK4b4q",
  "key25": "3pQYPgQn7gGF3WmL9oox1iUucPDgGCxpAuarY4Lx1njvLhWr4dY1SxoCFYmD1o8dP7FwVammCD1im1RXfqQ1DkjP",
  "key26": "3LvsYQuuYa5citBLJpVmy5SmpPRu8SkKR9D6JXkC2qLZSTveAto7mP5BF5YBSwNQuZKv84Q9Np365oTek7vehf52",
  "key27": "3kDE712wgtRGHJXXJqAyAuabUw6iLPkjNxMRp2AFQWjpb89d9uRp9mfTTsbNCSenjYu1mLQEigTV6unLQt3QzR1t",
  "key28": "4151JZpUdF5wT9sVrd4D7rT2BiXwTWUikYnLd7P9UnTk5WqYWxzMrzfLcko5xR2UtXXuM57XMFugKui8WQazAsEn",
  "key29": "4EgzsDCu5c4kNB7R7JYhyzNkJLTcFoXhVjEJt9mTZ21YFdSMxKwU1LZCztEAfmncsYBptn73gEjyNEuYVHeKXLsf",
  "key30": "47x1rCmsDKeKw2VKbrv4LnZUzZz45J7u7cjbBi5iNnzpujma9di6gxoM4RWznTYLUbLMv5Scqd2gBg69N4qCPNwJ",
  "key31": "4LpYjEWqydaa1mYvHez9knpWntV7zRRc4NBtLvEgkprmUepFXkKBC3RMKhB4p7DufGw1Pambz2cJorDYvv91nfoA",
  "key32": "4WikWmisNLXv9LPLxLCjupqUbv31jqodTjZ2AvkxH3tUSmX4BGPH8YpNexBbGtBKdzbA3Zrzi35UftZjRTrGTVok",
  "key33": "4L4LGNVtzH7JNnZ2tnx3Ud65EgHZC7dukCe1Ky9BeX2otzBDqRGhVvtpJZqztLTTNMCNxLZ58xgZ867855QNMykD",
  "key34": "4eX3xL9fg3aagbZqQ9wFgRm4tdxvC7VQdotQTkRN3KT1tVEgzPrcJE2bb6cFNLNRLqpuKwieT45XXAeqckuVCQ6H",
  "key35": "2B5sJBmnLQCg9yNSNyukS3xVEfwYv3xAKbQMFHYCFaRViVxTq5xCedWxpwAxSNbEFhGhQkDgDnRcL3syrN1VjKK5",
  "key36": "5aKN568rWwMLdD1G6k6zY5wKqWJHYav4FMoyQAZnYqA6uJcmgFUUUudsKMZdZniQ1Wscp6WNoLTbKUFo1mq3JnR2",
  "key37": "2qiqE13Bo6gdb2cNn2HobuhKCwo68oVaxd1DbvzP9RVopnLpoCU6BYSJ56JQH6orZFcCWBzrH869YKGPCZ3YAzq",
  "key38": "5m7ww7rYX1QysGR6DN4Ui52Jou8gv8ZTegzfR3J8rquZSy8Hzjk4kXonwKUQQVh4RZKCqmjZ4xJ8DWeALgSdVYx1",
  "key39": "1Pv3u1XX7rey5Aao3F825xKH1tG3Jh5Jfm9r7HywumkGgdU1R2Rjd1hKP1y21bN2NvNPEHk2zKCFpzoxaarwFRu",
  "key40": "4aMhRbwoZa2KmrGbSbwfeXbSo6oCARvZi6vQZSK5MCeTXPjRNtUVHqZUAJxSHVQap8utXrYzjGWYEPwtzUuijBnb",
  "key41": "62hWqQJQc352VmSox7RCz7S8vxQNzNTiKhBrHMvcr3rcUY3eUJR4wNtc3mRBabDGPDMescTjujniVdKA93NemcTg",
  "key42": "32qCVxPNDTpujwobiSV3XaW3Ssdq8JoPqYhpPDAWxr9mMo6FGpib9rZbrLj8SCSjndHGM87JVh5E1QVGsbrZMh2W",
  "key43": "3bziAGSYXierYD4Pvtpj1y4EwgdrcMeQ9DzqwyDUPJowMm67irwXnsTScDqm8tPk552p22WkWW7DmQ8YDTxWcfbj",
  "key44": "4bibwt6JG3JQkVnLEpj7vwD6dKakrXS64DvcNcx78aj2pqnGLxzPQ7RiR7Ao3CFut71yNeBD9qmoW8sKrZ1aGvFd"
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
