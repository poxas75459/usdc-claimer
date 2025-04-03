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
    "5iVGsmVPDSm1KD68mQsVBd64Nyfwf36JBvsVnyveBudyXTbowKtLJKn3CiavMyZcPXuuwepMFZq2Mqu9pwtMfj2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qJBfzS2Uj9hFcN8BuvfjnKNKEV53BUmu4jYqJLxizbgxpvqGNaXDHudq4qym9Gf8TBkoPEB49iKxaqj6DvBLYUp",
  "key1": "BxhY7YUx5Cznsc8UddGVPWWMX8j6MuzZNuXGstRn48me4d5v7UbNKJhG7KW3Pwj5faFPEKsmdDB2PvRKuvGmseC",
  "key2": "2cMqsuNVXmf6WLgDH9hdLmhekC3Q9LDCfM8X3XrodSWSaJfx9QGAuz2FMfa5rahFZJZUr5Yku818F1X7EjEgpuEw",
  "key3": "53QKh7qKcVxdGzdusR3UueCo5PVVSpcCLVK48CD7WmTC2ZmGmvrmFvQfejTmrb8JFqeruMvp4vQZNZJsMo36tun3",
  "key4": "2HYGoR4XTwo1pn5LMHvYCnUijVaP9HELTNrNWXMNorMniHScPzkWhGeNDCqzfM28MaqPvyuZXw17QLrW69fQryU1",
  "key5": "xoWXLGt3g8VoTLH7p9nGNhUJUeKPeohkfK8NHfNoUquVhNzk6PnRAPRhTe6sk4NP8CKeB3uWXzj8oE7yVo4MfPq",
  "key6": "KC9eb9434xAt8s97Ac3V3DTdxTNPa3hxXQ39EQu4r6EYUK6BoLwTA3tQdHzErV1dsxcZWXQqgbRbdF28XbKGGiV",
  "key7": "3ASS4dhnJr88QHCyhLXGaBwRewFLqpF1UY1xacfVX6JwedGyo9BpeUUL51jsHReigS23avvCs12aRp3VRh5V2nxe",
  "key8": "TukHvNgoEjVeTUP2hx9u7Jj13XXyfNQtUjZwfRaKQq7qxjhmqyjjLcDiVseS1CjxTzabo8Pp6DoCC7Yrxciofps",
  "key9": "25AzLJLDN1Qo2QnVVA4G9iR1REK28HCkgzHmZYuX6FSzV56nxEgV3T6dWTFfXuDC1PPR5DcamPhn1aSpGyKsQJvY",
  "key10": "2j6KUmgh8CFmCe6f25mushtbHFjentKEvAAG5g2zehh63awLwBAjiyE5DY6XjLpJ7QrtxqWRtJ43RGNwvurGbwGC",
  "key11": "2EuPpvndzqfX3jsonXBN4TJmXwRn9XdUxZTJ6N9AWAhLdkXdf1Wzk2R5oSsKRwZeGirqd1utxmoRou41D5zNBiyX",
  "key12": "FECq9Vt4usdGfQw1cVFLyGvaUN64qsA7VVZa2fzHYpF6QA71QVbW4DdFkgKJRs7Lpbgzzwc9i19Y4QYxZXVxFG9",
  "key13": "5ejpr2yGMp3rsAGD3xc9nBHaofnEQC53imVmtqNXz37X6eUgfmsDuz73ThC85YxdDLzRWo8V3fvLsVBRMQxTaqb3",
  "key14": "ekBRcWthqAWe6hejStJqATzDEpSiMJbwNYJ5n4w5c6fhoHG3WYUs3H5YU7CUTpb3GeBmafPakgCV7NLfmeYggpi",
  "key15": "4ANFAksDmUob9oGEBTmpaaC4K8eF9sDQN8N3LvVkLin2brBPYUd5s2bgVfXADJt6kb6xkthzuwKec8j1dhV91xZP",
  "key16": "5vBw24hAvXgKLjYXxQnpeZrhmviuP8mKtWc96Eg9hUt6JbZgFMZ1p9FRCjeycfRv2kCqr5YF96XGm8CcG4mX4A6P",
  "key17": "SfEdfu2ts9VnPQDuxrwpYHCdYikYL7uxLspauMEWCvgwj56chsXUmv4QkHsL4SdgQ6Bo2yFFBLAXna6njSyQ4Fz",
  "key18": "4CcAKmLCHiipJb9ohmf28ZMTqvv9SdTn7BwRJ3wLc3rWgZfArE3YQKy7ErMbLYV29To3nK227kXVLgn5HPsndHmu",
  "key19": "2N4rmQyKACEhVi4ZQmv2WbhsoCbY88FgCvNfxZbMmxyUvjYtZSPNxwrgerPk2aVopgVvikWMG3gTZC7vbufFiJEU",
  "key20": "5PaMvb1kRB5MCHcwBJC3h1QzFvE2u63UFdSX6B7jXBT8isr5fubh6hxppxmYbKhUkm7Pm3ymtP5jz3m96CcBLwuk",
  "key21": "3dtRr31XGNwhUgApqkd8KwrmiG24jfz3xDsEh9caMXh3G6nRkKhPk7trVeayrgC2SRRP74TKS1dRE9GRvC63N5yX",
  "key22": "2UL5UtQeMBPFPb9xHx3gVKtuJ9smFnDpNMuu5k3SVni3PMozWJWvzCoMuSs4swVdChsK8JeSBFkHYPqgiQCRFFvq",
  "key23": "2HVTrJbLzGmkMgEGZcxXG6PDQ5ByMW8c27PQv4cEFW4yDrymZi7DtpPNwLVEKJghUURajQCRj4yhqGTt1yFihL5r",
  "key24": "2B4c1JhCT5KAsW5m4ksqTf4K5nieHuxwWgKH2LSfn5H8zNh8WgTWduoCCcsrqC6jksX9j3wXeZLgaJt5F3b4iNww",
  "key25": "2zJJuBXH2SC1eh22b9iYajvbxKKr1yQfMoxx2dUWgNAZ5QGVZHqAbVi7z9LmrM9s75s1F2nsaCr9Hepagpm6AscP",
  "key26": "4ADaxvwyP3UW2Vz5QeZaV8rib4h7oqbEfe8gRsJtcjMqHXdtqwjhWu7FowdbF4G1FS7kwvyjUpSndTonvqyGHB7g",
  "key27": "3u1sLFoRBgvzEWNgf3JyzWNqgL6fX4b2PAYAFSJUQUu9XJmaktifDSrR9BJVvNUsXU9J9oLuGDi9C4uj55tsyZne",
  "key28": "4HzxxATikzd3QvpEW5VftZ9uWJkicwfoK3yNK7bJ9fZe1BQ6BS5CXDcVWvxbwB7eThL1zyctEqCpKepnWzG4euAN",
  "key29": "4PAWneSuGLp87FbEr5BYfJh8swCSCRNDwc7AA59HeUDpWKAKNwU6bK19dxijUykBq6GyJcvneCHBw3prUZuEvzFG",
  "key30": "4cjqDSijo3TNLZrnvhfvJmGouyJo6CYsgVj4LYibzULh2Qt7GjJPXzbuSHRwjtjtBYEwkWDcMSJ2higv1YyxDHK2",
  "key31": "4q6UkdWhPWA5zRyrpkWWgy83URTt2Waj6renZG9r5vffPjAvMjMD9tqma1cVYSEEsBapQzkSDVkUR27j3hAPF26F",
  "key32": "3KEaWywRLHSmMxr92HbeuqCULXBKuB7iEtZcdjJZs7mLAZwW31M3aV1CaV5hWQ5uAK1pCw4kwf7CQZ4oBTNE4LfN",
  "key33": "24Hg1BeLw5U4kaAjuHpDQfZT4QvEuhdZr6UeQE7qKiym98C7a4GDNBqjwg7RTHFoJaiBnGcYDxAHdLdTT9Buup9f",
  "key34": "36Vy6HTPkukuMz51qk7UnQAkz58c2kxqUB7JXDj1kgEaTGHjyaxVNK6T5px5pP5ny4LjPegoo1HbUnmh3G5bxT5",
  "key35": "3bpKkASXa2ZZxVYLof8ehQpAn31LgY8azwGRmK2HxQjmkCVegKp2fLCEmApgKopjD1p7e8b2qimvCaTnviPgcUQ",
  "key36": "2j8pkuDSYkdrYxRwib7RvtKamyyEKxMebjBZYGRJatGdJCsiFbrPHrSV1boA17t52KE7Sr43sVcKMPQ3snhmwdFr",
  "key37": "KGNerqGNBq5wjgXu3UyuLvWH1T9zpJV3yeA1tgiav5Q1Pm2TLJne4c8hSv1fMq76Qi4Qq6p7qwUa7kq9zd3gBKL",
  "key38": "KCVHoA4gXrthxvvja3YvSZCemzvdGPPTp2Q8UNyzf5RoQPu5nrQLXz5LQgXSzju1L7hbJfycVRzgV1iYfKH9ezT",
  "key39": "23ZGeSj8ufZ7HX6Db4w4NDNYFJ1wf2KRbTx1Cpro9AYcpLL7oRZYaqvAjB52iVGpjAXrRr5ybZ1A3ApTgREbkyK6",
  "key40": "4RRJuVSCqnzsVoYshXBWwptwcAuuAHefVy4pWBw3H2TroZQ1eoRzY1xuDrd6knc6YqJWBewHvswMfJzAt6HfwL4m",
  "key41": "4c1xNdj9oK1q78pjBz4XmT3Mk4ymmEJDwPNchbxtrHqXQjYx7w3VvwiKEjJQxCeBWWkCmUGyLUAUBkwia2CNXRYa",
  "key42": "3qTFnvaUARVNZ2V5X7EK3npgRbCPDya23Lh9fuARMNGgz36cPgVbzA3UfLWrKZ4NmhHtyvfTBMNgHFVbre64TK83",
  "key43": "5semNC1jPTR2FcgfBVNa9nybuXRdKFZpHe3X99TdgM8fDgAFNKnZcdpw9jtoqu8hxKMeTcUfBFmbwQsqKVYoAaYX",
  "key44": "5F9ePw3rfj9VETCZTmMTedXhg6UfACPVsinYcVtzK7GXGxae99Gx1GPrPYhQekHrDcPgLdZ3jAiqxfcMbN8w9adY",
  "key45": "5QaF5Po6LdQi6HfMcHsjbQfuprm8NB7KHXyXGyUVWYQ2NjBDQ6HADLJ8wDvY3JJGc9T5jdo7AuxEnLypEfPHbfJ9",
  "key46": "48W9SaMtZdULzB3mtE1prWxgnvqThWTg4iNsn2D6ciKEWLinDeMTp3A8Vzq4b27wrJLPa2KZTRqkun3JrrqfcqvV"
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
