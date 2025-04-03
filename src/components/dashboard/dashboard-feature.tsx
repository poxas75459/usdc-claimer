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
    "2uWaNMufP1wqgc4sPHsWyRgVDbfqL3dMyanRXiqrCKfkJVnuH8fUqGd42odvcpcrGJaFLrSKkPTBSourMn2JRFLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ztAbEzXtUom4mEX9aFiv4xbn5QzPYgE3aEuCbCLwNv65m6oPxc5WCYHEM5Caik6SH54Jkap9iA84oLCFX1pMH5C",
  "key1": "2t3KpohXHioHnsa2ppfDsBmYfEwEZVVns8yrKFyP12mfiNPYWB6FwV9jVz2xDMtbMc6X3rKJ4Vdgbcce4uXvhih6",
  "key2": "2wA1z575hw6dzzLkzN6HfveEtnMaB7wFQKQ7cxo3WBuqh4RBWPTGLh21BNbKhpkDbU43Esftr8yeKze9njb45SfY",
  "key3": "3pHnYtpN3ueiem5dZ55nwe7j7HhZLEQXcsRYpHWh3tJYuTFRSQ89QQ2VdHksEXDNDaYoNVmqCiN6S8F6KnZmutK6",
  "key4": "2eEQPBonVVB1PsZUz82SJ4RkbgYGgJ9CDHe4m14x1jQXc1Xxx9Y6147A8Qm7embM8NrHPNro2whTcJj65bxoypfw",
  "key5": "4KJStjMVpLSB1XwuTdwZqZgqQ4YRp6DYvwhCczwRdYiNwKW4wT768DQyTjraok4KgEb8fp8q5aupUASmumLSG8Cz",
  "key6": "4ojCkka31cGasNvu55f6Aug1MV5B2YsEGpnC1UTXftRXa6vCKnPtTyFCoiSzkVkJhwnDKzVCTAhkgo5TS2qk3f51",
  "key7": "5L1awr6zqsJmHpdUZUh5zjkqANF6b8P2Sk1d2oy4HSxstUuvb5Xs2q6uJVk5FLdSGzdeaKYiRM9AhoZj2NnJEEwp",
  "key8": "3muqAjQaNz99g8jq39cJojecmWu3RBfDX2ZsJknf2dY4ouGFG4XhtHMiAUcvQ3UZDawYAYjyBPT9Fx9hQuCk35MN",
  "key9": "3czXyF63oe2DNkZfmJXxTQNGNuynb8G9TVaXdGCKo7c8csoSZ6qgSdgdrfeipBSmarEQBzxELCHLmDm5Zb94eU4C",
  "key10": "29ExbpKBVFLv8DRVYWSZDkwe6QbwnMJVnD4PqGUKM3jyDgMTxJNL96SLn52sbimxRuJxnQQr3NcZGFdr7xotELQg",
  "key11": "63igHpBKNjM4CsxweCYEN9HMUiFU7V3sZUaZ4uT7NAynGQdVk4Po5VX4USSUP6tTXdM6SqXYcjpCENymDNbyqrgx",
  "key12": "4utR7YXV7PcyyiPxHeRFKpoPEEsZfW5DLViNr7VAY2av4FriuRkRy5oFxJ83ZuFRVShCftQiF2kDZvvPJg2fH7A5",
  "key13": "ay3Ws3nRWyVKWgRzk3TgN1Vw1DZkyLTLK4DLfTwmWsLQqeowy5Wxq6xLUfcCjmbLw7zFH8tHsrMZimXDqt3c4EZ",
  "key14": "3oxbCMTwqUhfPRVozNkJytgjgurpbrdRj4Wde9tAYdXzh71bfpaS17EU1wvR7aaKnFtynC1oAuECiZP7z23MTuFo",
  "key15": "2dXHg1tq8zUTrTUq8Rjvf3Fwhcm269YMZEs2SJgjaBqLNrK43EPMANBYv5oCigTYde5hxRMovyCXfnRQTbNyHa7V",
  "key16": "zpnKeUtEwdJcKN6fNHfYtujde8Ysh9cx3xqDUgB4FAHEspzGN1kakqgxjbNtChi4FUvFuqXFzeFaxnmrwoSWe4P",
  "key17": "4iaRt1vdYGxVBANYsoKFJ3bCMMuuNYEyyei1smJhC5EMr1wfUfNgXrqdNMZBHEzTXXafAUKEv1TG893oK8nBaCnb",
  "key18": "35tcFSC1NVCYTy5toy1kzxmUUeT8w1DutYpLKJa2G9oex6r4Q495ywyDnQLggpexybewkLmmuyCz5hPFDaCc91Ni",
  "key19": "5Pni5iXApuREssbff3rFuncBzNKrHQn71YJUWCSvYA8ukuVHPgiDYsp6Kank6dpTXJ9hLWEP7mTYXKjvM2T6WcbZ",
  "key20": "5WPfisH4AVLfLU5LsMbB4mUuLQ7gduQd7uGVQgkwVc4vNgpzf4iK4mDau841X6PobJ2kXFdyWQ7i5J6gCp99qjA4",
  "key21": "xphBAuEU18EfTububKKamWQwF2YrgGgbQ3QTtsKWuqWHRtZb5JXpN6JKGhQ4LzqKwKPPX2tnGx6GvxMbpMjHJEa",
  "key22": "2Grkxp4cgUWtrSi14wBWWEM851fQjwinQTzosAzy1frLsV73CNfKX6zcNMzrN2uGBQZDficeBF3Rf3JHe6zhbpEV",
  "key23": "aCFbLtru2jt4VKLYYqpxKYbskWd9aBXew34zt1oBdgAECeVkBHnYj9hvsxdgekRjAYfGsTvPgC2VpYaZVGFhQh6",
  "key24": "5F27Vsz9U9x8aAee5QqkFeifBrexEX5TEwzTQUKx66GTUhZ1ptTUCbEG9bVvFVYreCiPevvzDAbCoqfAArQjnEri",
  "key25": "4uTB2ppipBuVRYgXu4fjrzfxPqPWywtMNpkZ8d4ys5RQhWsUb73hNL662Sr8TU9xcLaZdLAcqDZid3o3b5PrAFo9",
  "key26": "5wm1uUDykPcBCszKK3Fac1zH4ktsbpLJih6r5zz2r59VLZLqY1kXBkzSUsbEU1aMJh423P2ovcFdVwcz4k9n2Go6",
  "key27": "3REavHSgAnmyBqZdctWSBozVk5NdE41pdhGjHBjMV5Patg2Qi5bdGYLsn7Gxw6RVGZfCNi6y4N9eHH9n44eLoq4b",
  "key28": "2VdDPzmEH17r85pnyTD4ybaLX6nhrANfQRBAjqQRgPjcXe2A7rqAQ5x2aSFVBDz2WuDokxxwFjVCw5CkFRhhSUr7",
  "key29": "3rZkMbvKU6SUjTnEVwxgY1fLDiMKsuxN8SqhbajTvkgyF8DZg6FgVHhbeqFbMtAd5q6gexiLdPbvMq2EkMR5wHcZ",
  "key30": "2Ue3PfaH8oYW7Mvd8VBpwCys4kY47Tq7fJKfAgDZP224U4TJStrFyKZQWNDhs2UUUo2aYHDtHEMBgmeNDjWRaVLS",
  "key31": "LKrX6AVtr3DwC1f3uPAEwQcoq5udLijVqEGSETTfmPxinCRUhw7SEeGL3qtfRTVY8WSRtVR7aS5qHFTases6y45",
  "key32": "5HCCCzV5YeHkZvcFbZqHBnyW24sG93Y5pNPFeiDhbNHJCxB3osdApVUCUgPtZB9xA35K5kCffvA47C27JGJZUyHQ",
  "key33": "2JuH4Xt7jbCA79VN3Xpzvg81y8xitdqUv4bo9gLiXJ3CL66MK2iLdCUB1kAxF4oZxR4DZ3H5K4XaGz2eCMht5VoL"
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
