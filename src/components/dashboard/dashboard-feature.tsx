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
    "2w6USESUa1rYLZqY6NsAjn77mYvwvvRpmJAoDR99rGWxvv3jLt4EqwJrZbsACYhM24MiMPhcMoAMsouQrAA3H2Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iyty6yZMgbeT1jh7cj5jJN29aCjdvKJKuLfmJkjn6HREpvPHEzdMNytwZ7K9VnYxtZWaSs1Ykn2nYXVrNHJQJcx",
  "key1": "65X3XS3NPLfuySbKL13AdnzhEq1sFuRZqdJmah2tgZidg7piQ7mGcdh66hK5hXLtZ3yuvqsNRR3at9i4FkfcyCjV",
  "key2": "2VftLqN87yRhhzYAPS5zgQhsMFcRMvwVPrzTH8Y5YB6Rz93HRwG2R95fU3xCtfsjDZZtpxPttbBKw6vojGv29eBw",
  "key3": "3BCYvM5RCps8zk1DmzBRVgKqiaTa6JAqzxgiXysKNam9rM6vbhKhpzMpbEEdacrf4r1NagK38iKjmWL4VvDbuURZ",
  "key4": "4AbR1P6A2DH9tvR5r98PmjJw7Y2wDGeTcE7gPsfr5yJNL6vtzn59YcxWSvRRyyekAjG6PYhFyZjh9E9ACMCteAD5",
  "key5": "4E2kpWZGZEfCmK3ZVfWixyhCTyhJZUTTndbjuJVBqNEHt86yRbYFunqBq3h6enxyqh4kfmjqfHymVRBJfdzuDVKK",
  "key6": "o3BG6YviYDU782xNkVfejpFSnPPfZ2wK8dVw2ZKcKZ9wNzyvBZH3hpQax94WVvnaRGFDkJd3hQqEVaJYBQw8csK",
  "key7": "4Beg5zhwnCZqF7NBJ1vpFa1ZgLZb9v8qWzdYMUyoaMHso4r9gADDHfnXbmzi2jkJjovmviGC7iCJf1vU5d7EpYZL",
  "key8": "4K8ALoSGb8uezbLkhswERNhJUNW99Hi5fkTcwTgnKnraKcBY9QAurfxjzzrh8oAfuLvYW6KceAkdgxVbsn19J8Nj",
  "key9": "4FUrLPbq37X2WXem861JyXrgaPTQVRqSjN8VqDmwJy4AUPiNRtCLCbirsCbmc6pZw38cQVYTkoFEA4vrfRuA5wzT",
  "key10": "2kbKX158vsbb4PN4DPdcNa8muRNTEGT7aXcA43eyJR52FyBoiDkdFKre6L2X5pfposmK2ybhGwjiUWNxJR1SnupW",
  "key11": "4jwn9Lfgbe8PKSMUX6dAetg4mf9mxpBtcbirCNMbT24KeZKvrRBxLTyYmde4aiGbGfs2viuJsDfsxrTHwSHJWWs",
  "key12": "2h57kNNfK2QscP6zqw4Cw4C4P18idRsvJd7Pb8gbaJkHeaFHUk77KjdNM4hCHMppvWfh45bFZdKPSs46iJYsZs3o",
  "key13": "3XWVnFZhiS4dGsBvKvSWqk2VUKCefwkvSnB6YvWDCjvhqpgbcVJEXouJaRAqrJcbtbnMyF9b7WqCLGS9K5arSx6k",
  "key14": "2WRpeJXX8Vgj7UnyA2ciHCK7Xw4pwknLDwQ6gzeSYp7xLbWjijd5ERrDuqDHu3oVrW1Scxqn8q3ZkvHyzH3uHNjd",
  "key15": "7w4y9sbPALivS2vCqZautCYHNtTGzppTufyjMLqtX35DputuQywRdv3idYCPEN2ny5QzY5VxkiBNNtyiPSbUKtt",
  "key16": "25emsc3NpBy8sraJdwfBnfqpB9gGCFHQSm6XyiQ2WAKSmboAbuNA5F2oNtTR9cZmbUUsjj4Wgq33x2uLTsUm4c9L",
  "key17": "4tpKDFgCJebCfXPZxckHnZAdh8Dta7EDWykKAvAAk8xGtPoLXqrQePTsZZmnC3RKzLuWoQfKJAdadhRnf5DZuXBS",
  "key18": "Hki6uhdSU1dLJ6wks6XkduFfNcwmnJitkk3dWgaFEyvnCEFBfHuqEeLGzEVEYJhgQSXXKWc2Q5NJHyejJH9rV46",
  "key19": "4v4pnbNAz1fUBQJpXZ9GADDccoS7CC5MFgFSPKKLbeU9PrynqH7Jh8Pc5UQYdPoBwzSBVs6a8WmEpPyx1RdHxys7",
  "key20": "5jFVdSLU6b2upQYTfWNdKPhzHAH1sDbj9Mcf2Ya9cKYDi753YaLqCoAnf1ZZWkTGHWRrH3w6o7H5urFCjYnRoDsU",
  "key21": "B8zgL8mHL2vyRhcHHefdGAgWCsmAXPmUAM9GETJKjVVApmKqPg4XSQx3eSDeRMMfwzWfHXaan7VJUmTQHDT6uia",
  "key22": "YG59YQ7UVnJZx8DqB6tbMJhGbmDfZAgJzbgz7iBL61b19BNfgN26aYDQVGLdfTXjPxxZJaFJFQb8oiJf1eXkeZV",
  "key23": "4cKmJMNcBgayApaHmhsftbvFJJwpMadgbfEHj4pf5QTSp8VPVjUKyeJ2cNXbKE1a6pg7n4W2f3P56VmzQoo9BJuw",
  "key24": "2JwsgheucocJPkDm1pSSqtjcYUFrZJoULJeCQH1dqLULrVepL7XxEkENAg94f97uvfuuHQoKVLRje5c2PTvDrWpn",
  "key25": "464WHbSu72G9sVVSr4a3QJ6gBq1a7MUexWivbokhgtGN9A8AgF6TJiQTtFM1WvpCytciEE4ZvtcLovFqwG6AwWYX",
  "key26": "4Sai5ZdPfxY3WiRwfnRUjkLdsx4rfzgvRAmGFWQ3DJnfxzT6aUcfSBtayYqCuDMSUx6r9uZst4sAxV7fHVThm7pJ",
  "key27": "2q9QJtVTvLeTsRNawKUPvxQSbrY1xPRb5aZZz3eZb6Twe7iHc9BzF6SVzQiwXsqzCbCevVduJZAQmM86RBFgYjoW",
  "key28": "2fccoxQZwPYg6vNXXCTev83XPit5HEM63QB2uhjKbUAPgHkhtL9ysiZoSTmrtNgTUFRfw3rNv8mBT7dRd8HAqUfv",
  "key29": "4y8SkbYUv5Htn9bvUorMm1QxbnPcUkGK4x3MxqLwwiGLsSQuwRssMZmDpS9jGJApsQrPSjFk3sGA7PrUJiWo2Z8J",
  "key30": "21oJcXhR7S5YsUHmh25u2ZiaAJTsoZ7aYScR2fB1RzJ6i6R5tm4ojwx2VXR6ExE8HCBdh6i6XRXdGzFpBv2A4oQy",
  "key31": "2NoxKmsCer4x5fBivjB9AjNfCDJBQ9zHWJTEc6utDdtH849M5rcxCZqovpShJ8yU8daNGJ778BUdJSSbziUez6Nr",
  "key32": "XXd8SiYeg84PbaaeW36wfzGVHTfGXixcwHp4WsKHPJFHw9XMbhzZXZ5bSCWYPtwTSZwvxmmZVY1vtyLYPV9CXYG",
  "key33": "43N6EC7QzdPpDkKqAoCgFUpCg2GwSUwB4U22E4v4eJFFcisaDeETJ6VdYimbdxTxS755CVyyaLjageuZwCKnjgGA",
  "key34": "9HCtJKm6a3EiTVivUSrvUoPzU2juw6mq2L9JsFoF4XbQ3LkbnZB6ptu9f7Wpu3yec6kD3R9phA6oLbQDZ1ycQNq",
  "key35": "4NhMFCGT8nEFB75GYFgs56XPPebnWwydED9g3Degxh1ca9qDnUXwUAnQzJ3RaqMjDjeLiT495hTvFaRuQxZ25mFh",
  "key36": "44nePRAiALJxSxBxAVB6AwhW53CgGggVrrwQ2BbrJJRez7yJ2ci9vw71VUyv1KNbsQg6QwWx3MFVZtWzYbLGLv3F",
  "key37": "376Bi6c6kx7VAoZ1nehKD2XqLxXqKWKu93LvsJezj8Mwkts5Y98Hwf3A7wHE72FJuv4i2EB61Wty6EFqpBZj2WXa",
  "key38": "2AhyB2JehxopRMgLfT2xRxxn6sowKrQs2aUBsdiQ4xgocTXHawzQUAFdx64VSUt2ivcmnqfcV2PWErjxouSxCnPq",
  "key39": "4Qccd2Yik8Q9xKVyhcr8MbJLrjyjER9PQSTuN5TnfDihkwvv6CbXaAtJjRUzvpRTuXVR8ETAqQJ4U9WT9bsqGUTs",
  "key40": "4pF1ocxKdjeLEqrrqxAVEn8Bcqtx2yPufKhxga53uks9ZSkrHjnyBKETTZvMFQHJXiBT6NeV9H1jthdnzzZiaUmE"
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
