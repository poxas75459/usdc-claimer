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
    "cA8ryyijdKNSxhpYB9AXSNYhVh6ZQK7tCWNrqQn6UpNQFTEg7GJy6bbePs2YV37dMHV83jetkv1oe1C5Adecysp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1hj6n5vX8d5Hh7FaSubktjQYB6bHg6B6ggNodD9t3U14pK1bWGV5EzJHRecG5W5VrSzffqEqNJN71qx617FZP1",
  "key1": "2NuHg4Xwfr2cYN9uekHHyXi7Xb72vrsqRavAxdZ5e3zR4qJq78kTxqkE9us1aHaS5P3wBYbh5C8Z2LZ3vkFXLRn8",
  "key2": "5XXH4rcpER4eyc5Qa4vR6GHiHdcFy5nBHkNLT6Nq6efXLY8DHNhbES7CSbigWNRdfcVeAkyXcWRu2WKmLxcEvQJJ",
  "key3": "2wwtZ5kfXmFet5wFxzKb1jEAjLu4kHkKCfmvgA8vtzQ9HNwuLb6biaTKQNRTRxSKHWFV8MX51WmUsYXEFikViP4c",
  "key4": "NTcTydgjN8wpZx6628kxosAsPZgo1E15PN6RiuFXAdbqQajoL34Ur1XyFHBQmUUHGp2FogiKpbUGt2mCTKm2LTJ",
  "key5": "4tW1MuQrfmsnzBr8jRGiQoSV8gSWEnAF2X8D2inRjo8aJMWYyZQn2VbKUHTNpEFWbwjMsaa5fVR8zdWgDGWFBTKA",
  "key6": "bY1Nv3WDjAzMvSbjdVGBTTdw6xyF8Nx5ecfuRkbvRiERKFAK4VzAJquDu5LJevf5Wiqmx6bMjNBUDPyupy4v4K6",
  "key7": "3jwRTmnATf5EBjd5eAa2zVcfCc7joT2qcQimQ5nx5Hg3sTwTpfpD3YqyDncFu4nvTjq8hoA1ahzn6P6KorXv9dEH",
  "key8": "4BPYwgnwu1xjkmyF1Tfg4BhNEzJmnQAuoF6HFABzWsYhE48FzFrhrUcQeC1rqALozJ3Ccmd9bKwd19GriWYdD34C",
  "key9": "QhMcvSxRes6THquQoy8N2LpNCr9dct2eWKLZV1BtptdYMXaeeYRuy183Rc6QfMVbD5kazyAetdQr4QJRucTdz4B",
  "key10": "5npRp9hp4sEN8ixdqzXLeFsFJuPmwqdNqPmanHgrt5at1RSC5PqKXxKmXGf6rRTGC8vRWz4vgiQb6Fp1zb27Cx1v",
  "key11": "3P4JtPfWKkhNre2bhUivp3WZJ924sSFWkxhryDZeAeYHRzGrSRGpfqESo2F7wzEMRLkcjH8wA1cQ6nkM1tPxUUuq",
  "key12": "22rPvDejSqP3xjtLrvZuLMBBndvAGHxmQnQdmKJ6eeyKmwYB81EgN3mFpgyUZAihcXPUfu5nAMkb4Mgwzj7xaio1",
  "key13": "4bdVbbphsEaBc78XFqaFAd9eanKt5McjbUomb1kH1PUKAZVWxofMsjyid9hrqPPWXToWo7BJbtPQ6WpGCM7NVMGL",
  "key14": "4QUpjwwGu9n8B1tadCUPUbnuww7u57uQY1UwCknNN1Y5m3aRmdGrj5jqFwENo3w3M6ggrg4qFUFjzDPw8vVx9Bo6",
  "key15": "4UGob7MHs6g6jFUoiaB7qhUAQLKktotFmSFB8jjEs1PNzxXbqvKJnmCuSvMTYZwcYUrgnDkP1GL4XUgCToTQZRvS",
  "key16": "3gefJX7f8fa5G3KU5xomjtwRYXxSQdqSFcwWVueGyMtBra5jC5jrWbFwyLzVmhSwXXLfa4dqosefsH24mjCgCCZC",
  "key17": "47kPz14y6Wq6uLAxt9nvLn3hcA7AH5a28LWcGcL6aGxFAZx19Dqds34nMT713QkbMGBYLqsBR4VewHfVjri7uxdr",
  "key18": "4gFcRRUyuPrvgvkKyUpxEbJdMM15eymYuATfNB3RoyGr2yFRQH3Xz9vWRpH3uuGeg4dR2Dunzrx7g8m6XcN5wYat",
  "key19": "4RaZjfFmHS5QbRFBsrqjESRDxWLgR8bx3kryNHyhqivrDpW61Hy7QgGHw6cSERngp4CR45deHK4ja5SxzRwsjzmS",
  "key20": "48HgWJcWySAp8X3MuWqfnpUYpoeszjGJkTiZN6NB4jgQk8TsjpjjgPQsNeXDtSgGdNRXbHzjwJU8UAt2Mh9nfQtn",
  "key21": "QDhZcjLuFQMpEFKDCTdCHiKAh1AYSQ6M1Ez7TnQTrRtMcfsNc1RAZx6kGym8tWajdhgMAy9PWVYACADv5noR997",
  "key22": "3eoadZPTkaHX25ZAuETudtjVkukShL7u8r9iXqLVdrxZT893kC3Ye62pSDPY7En3gVigGub8ianhZ9JW5GtTu24Y",
  "key23": "x6NgwE3EXDL8mmsZSu9cNDVoW4EquoKw7EJF8BYtdFTBv7nF2K3UFa6jjXHzS9JF1oFW5Z4cx85fsdwNznYdXWk",
  "key24": "4SE93NNbnKrVY34dhbEngH346ShzsnRxAEL1gsZ23NsEEgPwipnp6BMYfqFwM4epQLGXvCHmCpihPmQLNxixSH8s",
  "key25": "5hnUjD2ud7nDCANYWcyGj2tiBgvwqBLzJGkRCxRk9yPxiLoFPLHYCtqf1N9Xk3rxmRd8EwYw6zJefv1yB7xkaRCM",
  "key26": "JE1pokW3dSZNX6cXNvYcyHodmoFh17Z4Uj5mTfGjuXA1mLyYKbXoooqro8hY6pAUeDeG2aoPBfvFdZaYdmXSLrW",
  "key27": "5JS1WbPW6btV3RYWjPXByT7U2Dp3HLHCgwS4gbrzy7KgqjVXHZotai7K2wQ84r6z4GS6Knx6gs4oyCCRF2wodwqJ",
  "key28": "RWCxRLuAfzyShirhj5BTYzCEmWc8xL969gUYjpxs7KbAuLp52ZyE6RfXXH1957ZwttCUdvPuJRwW13MgVfDqzqo",
  "key29": "5MeNokQpKEqeJobChkJpTuHW3PJPXCNRn6ohTZjz2YuGahScW6en8M3uZjNBBiJrwMSGTB8nbUdLb32P5a1xgDqz",
  "key30": "4EGxKaVp7VCpuSwSEofZv4hCkzWU9varqDFYw89P9DcsYbxsmNEm4zNj14mUPpyg399XDiUsB7H8DzyPqfPPF91s",
  "key31": "4sPNbk4skb5sPDEDgzdZ6tshofSZNcDzc5LycWmzkmui1sNS3Z1UW6Y9jiMQUptx8g8AHDJbui1B9ccg5GLM87pP",
  "key32": "33mw9F4SrdfxfHrPnKGxuWcEXm8kjPNPQvWhTWLVuYXg46ZcoprshZzqbTGR59xeigkHayKLX3rrwD9Qto2dRdag",
  "key33": "3XQNbM1E9qbbVuo13Zg2sAgm3RKpPdNiKuEnHJyddrNycNnu8fLMwL5x8oqwUohkr3PWC9AWkgKKyuN5XmA85dNj",
  "key34": "23BgCMBsvUFAZuaHW9z3Yt8KpbBKbnZpskNRScyLxB3FwjEbTL8FA2RqnouqYRUX7iyHXhdxkud5TYbA6SCKfP8f",
  "key35": "G5RLCcuXQ3ChbejSVEwz8MXkmrqxhbB1p5AXUjfu9ovdfqyfywHcudFWgzC1XJwS9io4nYFPBmYvtATUmMhSGKv",
  "key36": "54x9cn3N3Fvyvf1be7PxJn52S3m6E6JKtyfG81D2BxVGiXdvcU9zipyRBfPAjcmT8JALWfaRomn2LNsFUkYsfcd9",
  "key37": "4zGFtdtmwgVK8KZE7xoxQmsmh2uVcWGeKyxKNjwWdUCNTELhAYWEeCToPUrMfytMbA3A4q21DkDnuUNPHVRJwZod",
  "key38": "5QhSQ1Kw1WSQ28Tz6tYq46zNYDS5cNC86s9y3QNKyqzJ6XSpTww84hcSrFYzYmRXW7M3F2KZJvoDsZHBih6tRAvQ",
  "key39": "2bX2qNKeDhHXqidwTt9fFwhZFRJnmhoxpXi14idzRdXPxNokyMNnjdfVD9G8HqEPymhZdBpxrRsAnT4WjbAszU1L",
  "key40": "26aqYrUh2ggncDvJWV8jFy7K5QEBRdCjePs8JvFo5G8zyh3F8CCEBt8XqiW1u5rMWqABcyX6imTks8QAmN75vBux",
  "key41": "3Zx8z4LtWBEKagMkgfWqsrRwnTnem1dnrjTADNNjbXvwvF1HvV2PjUzkdw8DaTe4rE5VCmyJ2YFB3We99vN78TPm",
  "key42": "55VTWb59EJ7PSFu1LAkDKXwpsfodV7WdTXdkomJgVHXnNowfyrtFuFHx9XEGaZumHeGPS87JXTkqmXv7EFzSWr99",
  "key43": "2BSGwVfEakHgLsevPc6ubZbnvEnPzwjmocBMdJJnk2g51WhbJv6caVmdAF9JQAaSY9gV59iez2iBtXH9qz6VeVVe",
  "key44": "3CHQw2KVkQ67rSRLS8e67w3UhLwe4eUrVkvBCWEAVz4YXeFtGwzEi417E3k6GjCAoSrXhkJVCZ6xj769mcfJpo8z",
  "key45": "24UwXc9BCbNBLYfGxGLZv6Kf7pbQK7tL1KZFmveocxhzYd78vxi5s2V86XRC4iPXJMxkmrojVwMoGnJP2pTuuu92",
  "key46": "22CKihJBmkrs5CQJKeDDp9LSAsBNaAc1iNCGBSrSsYv3tvqiTLDpTKUDSb2gVdsWc56ZitTqv8koLC1hs4XLhwVQ",
  "key47": "2XDUvgmrCjcTxcGh873ETWeiF1P3tTy2hn3HKHyP665QCrTUWofyB7GTQLtxm8sRvtgTM6JTTW2mC9iX3qwT9BbL"
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
