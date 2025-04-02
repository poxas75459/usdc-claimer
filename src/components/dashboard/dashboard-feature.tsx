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
    "4uSsd2dWvWMicCqRBHqLpRKFwVorA4jDd7cWxJ7RLMDBorqLAPKxvCQmEHv7e7AmYhetjpCksSvrot69h94rGQaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rown2bxTYRtXkFfszz7SwJcFLrG1T5apR8SRabQtaA6bBy3e685LDQhu79gVrSy1y9MujACpHzYmMr2JkzbWYXS",
  "key1": "4ErqmEzDPyf8wJFYui3fn9n9UsP8TWmaoee2g4mGgucqrqaDm169Jr4z1F3xb5sC7p6qkbMHxi6Nbv5rvvXtgRAd",
  "key2": "3gQZmWqgJ2ZFY1ek5gVQNfysKSW7V3FaZnuapvFLHAvqFB4YuxdNd2FArpVcRyTVrAxVDu3XzdB5jjWuc7C36DZa",
  "key3": "3gxgBU5mM63WiFJxteVVdfAthGQPTVzJrmtBLNgybB38M1yF65sGFNE5WcM9eDZvcDL8PLMvRW2DzfrLJaAjaiM1",
  "key4": "2RttzMsh76ZXD3edtAjfmRmeTiQZCoqpMRudyVoMZwUtVE7jfyz7xNKi5WFKWmS9bnEdWP5H9UMWar42i7BqLP1A",
  "key5": "4Mj3rVYwo5Bi4roPG6hvwhbJ4kcVRwvMDt27NtzKzKWxmYYP1cMYmfSjZNUHTnwphEWDVAswPTnxG7gAeMuGzBcq",
  "key6": "3mBkQeMqn3dV2fKSjb5LvjQ9hwLBra1wrHX4CKTowm2rLmpP5kdsGPww4knkfafRbFHbqEuWtmKfXwM92Lm9XzRc",
  "key7": "5kt84LEasJqgzfSCAozL4ciDmFS2aBvdvadWqGADviuFAWQGrUax2numCaB1Mp73Mb7EJAABU1SrTx4BwEz8W8v5",
  "key8": "5Vny5FG659u4Np8z6ygJnS99SLr7UmjzXnBuBkvtzrzvVWmak4AWT3B6zLFjRZnPnosGBRPSubHeDx3mXtmDjoBj",
  "key9": "2441CCMQWL7VpitKbaa3GW46isXFWD3BQZNt1AxNBwZnGLxJmbefTu3b42Pns1q2EBLtsi2RnwTiW1echiaEPuK3",
  "key10": "2LBXtRR51T4XQCHEntbugg5CXSLhYFQJgdtGiJike1JJmmBzytavE2x7dCuB2oV8KoPZhzyDgR5G5XmKYQrtJsVj",
  "key11": "5ZxprQJyqPmNRYtAeUmjX4LTCqc6V8qrP1KJUKUkEfskCshBqbPYw2Zc1jP46hTGzuLHjvD4wEwSf6s7dn7yXVbc",
  "key12": "Ky3wYh2wTAyKbZK71PGKVKsbvT95tYAXP5on5NVZAKNDJP2GCy3RN25goosvShmm45fZogDfo1u1Lep5HwbVFML",
  "key13": "2SnBsHaUtDwH5TrzpGs8pU8qW4uUCSgMYT4KjiUQsCxtCP1oLvwjuPoBZea6gR29E1Bo3XzNdfSWvXyZex5LJ9gb",
  "key14": "3hTvwpKZ3xHRU7iuUL4J2J7qpmEPja74X1HXFc5cX9praEunryvXgjMKP7RENRGftYH9Dzhq5uCpdZHmHhNvcsrF",
  "key15": "5fzyQ5d9EE9RM3VcrUgwtYAeyUtH1nnSCEkLSHWf6RK22bJhXnVHXktC7q8QCwEQMjsRH2KMQ1bcjhD5ETfDTQaF",
  "key16": "4d2zoxkCqyWT6Hxzn9L4Q32rbRRpU437wzvpuH7MbNoHct2xFgZaKgYa4usE6gEa5DxuYdgL6zYYBrWK3s823NEv",
  "key17": "L38i7NL7QjnX7BzZtVJ8QXbJbF1k7UdP5LXbwKWUV6JESqVMn22DoZm2A9fmXPuVix2Xpv1eWoWSQYkkTxamcMr",
  "key18": "3becSdRSoXmqoq6kGNyUDnparKMo1xDLkkAS9YJ3k6u7PJM9yoJ9Qixk6X4BPfxXCgg5rgRQ27EBQnrDUWWyjj1m",
  "key19": "2ardexgD3YcakWAj4MDX4v2G3Uj3YYHg3ARR7zcv4bS5sPW1zUadm8jvqRjCJJ6jJuGEx5NR7fMge5b64r2QkTYg",
  "key20": "3sinPGuEZvx3BWwThV6xv6jYrrx1b3P2b88gxo7mNy5TnRMtsCd7xKE5a9LiBy17BcFRN1S7MqsUrnn86REGdMJW",
  "key21": "3x9D5J1mpvnTjN7jyPFqLeoipcf9JNdqFuzu2x9PRLHFgxFi31Dczhw29JqxFo9GTjECUku7xmoA9yHMWE8RKoW9",
  "key22": "2oNdTgXBk12oQBheetiMhG1VZQcZUzsXqe1LZvy9Fm9qr54TQGU7Sea6gYQg52mYwH62hFBf2bb5REdxtfUcVe6V",
  "key23": "2U6RX8rwixgurfgbzYkLg4AS8PNE4rNjskj49657j46CKtAyw1xnykH8qxb5JDQyxESf2H4hZNtoZHXCcwvHR6J5",
  "key24": "2Zuxg2EXu5VC5CBUWoQDA71Jo9tHzABr9Tb16Zvidx7ftWKjQQbyxHJh1TRNj82YT1ETKgotVM5qAUw5HDCHhT3K",
  "key25": "2rcd4rRqWGWYMhGf3SgYazv6nbvFKRkMrYQ7qnFTSWg4VCk32tP1uakFmy9jCpF3bca4Rz4osFWQY66LiYQpTG9z",
  "key26": "61Asmj28aNiVt8Q3y2vgXeuvmyQ2ZNc123X25DWa6u7oZNbUFmoGeTzKbQGsdWW4NSWSPBdTX3MTgKMTjmEgSJcX",
  "key27": "439z743KKwRTWYLzPojV5v8jyFvpPpKJAPXtdAKP4r4n7uPRw57TRHMmtHg1FWrtNxethRCsSJE8U8SfBJQ4N17b",
  "key28": "3uuyKTAucyQG8CPR5kCEyv2Jt75YnpB94b9qpL3osQs9vKLQ442164aVfq1u3S8LAaYCw9FsAYZdUmh8Dv4tr23K",
  "key29": "57Gv13C54Ugb8zdMJfALEEsBa76gyt63w2gqDKXiCoU3d6s9zJqE78hvRzscqwrDpRwnHwtZid4T5FzPAwn8Vy9L",
  "key30": "4Yf2Vq7EzoaVvKZmgoq9rzKH8mtowdukzXVahSsLyhJtX56HeAtbpPwBPS4UrRWcEs3Anocq8mbYUhKLFYYWoYNw",
  "key31": "2MUV75BFtwTxiUV2ZVAWyx8pHpVb9uYdk6f7jrEyoAvPkuko67ZDCzizuw14HLiju3a9sdmqQ49CetCjUNSH7W7Z",
  "key32": "864kFQaEvipt9zxoaqPtXCv6Piv83TucdiFW9ZibAkbEtnpxFn6au3FJquvWETjMvxxFQzi4UPM36Qj5UBjat6D",
  "key33": "2FAujpXHkSp1aX8mCL6kosh28D4isYHbfBpW8bQBesZ3yidmUd2VHwfHNsgWUN4KEYu79dfFmyiJpCxUiCS5PcG7",
  "key34": "5eyNkewbt4Bdn7WTaGdjeJuez8WwDUFpmE3hFwT8VchmGzzXTF3UTxCc2S2QXZabFp5ZMDPyFZimGDD6ewZ93rpW",
  "key35": "4Wcxz4MKqPAHcS1UvFJsTqZoozPvugugsCgZyH1xkaadL9TebUwa9KBu5surxxSv6HUsTbRWz2eU1BugBGjDuzhn",
  "key36": "26XgRMyL3U8ViELVhKC8k1XKDPta4AJj3AMLzZmGYhMJV9x74Tk4tVcte2WQRrRNt5eFhwcVQ9kyk1gkFyqwJ5Kr",
  "key37": "4KhR9pYLBxMjLFDApmdaDJfehnwcjhm48LYZQtZhucfwjKscvhhTDuxdamNknQJ67BehJswZ1oB2wv73mv7u9Gpa",
  "key38": "3CTtAsk5cvZRdATfECXkLwFtzJYVAyNr3jaUwCgrhmZAFZ3diwfXb9v8vHTZuvKY76oQaRj8M3KQTDYmkxQ3Kh2D",
  "key39": "2VFujVMsLFL7GzJTNJLHyxpnTY3uhFzNq1b4D38j8nWhkSF4Wz7TpkPxwv2n9qo6TiSv9ZsbNm7HzCSM25tC1zp9",
  "key40": "5AevkSzbNXr5xvoYaKHTAEF3AYjY3A2UcsWpEjtajxK6iddKtsia7Kw7kCTNpBD9KQnTWBUEjeCuUbDPVWAwaz5x",
  "key41": "4Ujd5S3Ga5PnEzmr3tQe2nBwT2tCY8H2mo2ifALGb8zV6xeAyhvEmB9cJWwxvkGj8o1Ut23A5iiGp9Awzne2NUwj",
  "key42": "59LzVnTHJUx5BT1P6PWqAurAATJUomLaReVMhiE2d2tVHDD5wr5c2cxnoKuNiBseNNiWGJZEMzZY2pr8ydTfRsUR",
  "key43": "3eGVd8mJDVGYQAHEgFyvyS3iU5KRwMv675WxnswHFpGcvKntnYbaJ1RPorMbYvTRhLxeUkJgTvz7sXEGgTWyGrN2",
  "key44": "9UkYgsEs9W23LSACf41pqP944epk1CEiVRdaZSjPa3hX7kSMxHUHTEdMwk4CLiG7G838egFW5591SvVDLz9KNQP",
  "key45": "uwqTHW7CbbLL5fia8NvEFWzD13ayZZUDnQtURYR8Z7y4KtyvsZqp1cw9kcofp6wzYmCBpNCUZcwkCbyv78Xbh9m",
  "key46": "4NUYnAmALKoVyC2TvnFRWjqLTBrchaJNfgyYdnnQQWAjBrhiT3XMkC1bh14e7cSGEtVct5NwrfKgKXaim4RxPmn8",
  "key47": "4wtjBYkAU1z3EV69KuKgqo4Tq7VHDCznnDmBGG7YeHiFjYUsFKRsx2nFTEAjUxcnc4GSqdcT7JTbVmxS5NLx2qwU",
  "key48": "5uauawNykhtLuXhU2c6srJWQWTE6XCRY2ABEwSXpKa13sJLkUr6xDbCq5m4RzW3rBdgnzoGS4KU5a6hu9eBERgnB",
  "key49": "4CQ4Tr8v2h3mS1vZUFQDF3ejGAkrqriGh1cqnCuQdMqgRnsaiU5AWg3DUkg26u8kdHjyxEw2noTsVFaPtUejcUUk"
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
