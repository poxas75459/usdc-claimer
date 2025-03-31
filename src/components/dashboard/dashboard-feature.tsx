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
    "279edVQRB5MeWQffkF22aBAgTJcWQ1agVcttJT4Fc9HDWE8pTEVNk5EPjQ3H9GordqVfw5Z4FRHvQJgPg5AMTLH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KNhVei7nuKDTncShHxKNdFBugZCSgdP8y63wLbducYzKQ69kXu27G6VbY6GMrHQsHhg7BLjtuVR1nJfvNGs2WxJ",
  "key1": "2oCpcaLAYG5CE3DSjyYfhFHcRVrqyN7fM6Gfs5RvPVFjjDfyPLceANKtZn4XBxw6aKHtmXPJu16JmSn4CEWxUj4h",
  "key2": "2KnQeU7Rc9N96QA77dgV6GLfwujZ8zucf84WMgeYWF1VbmtTcm3oHbpCA93sJHTrWCzbERyWsiEC5LX7RNWh9HZ2",
  "key3": "2tf8j5qChJXFZrXADdEweSDWjcmL3X2buopy3FyXQtidRJswHsMvYus1U1TQHquhg7nb9rcxQsvDY2J7SSkJxzpA",
  "key4": "5m989LmGNyyxi959KCDRMDE6X6WxhncGHcLqU7Ss8hDGWoGn4ZPdqxCANzg1q9hsBtN8bGU8XdFmoDvymjXqKe9M",
  "key5": "49uha9NBjcx8dpWr5MQaxHA8tLQaUdt1kpKfu43WvV7jtNGWMtMS9Ab8ip5xJ7iSQwddU39M8HWEQ3LniJ1CCf1c",
  "key6": "PmpB5ffdHt8heGBP7wyrcTUuMTDANJWRmnMimmd5gwnMCwtuGpmbW6ogCMFXx2hdHKN2PEPRM7XPnRq5M1EtkKD",
  "key7": "dnnRjHEcBGRraduVN756jf7foTsVT21CSTEPTQXaWFhQvAQqJ913oNUdQh2vpMGD6ggKVUHPKxLbJSeLQsvGZsV",
  "key8": "4tjpR41FTCEoMQXpBneJfxGwthULNLfdaBvh7UpHjVJdcYRLkqWUuW4tsh4rEYXueXPiDWo6aiGgVZmDJr9AyqGz",
  "key9": "4Ws826G5YxwVVFXzDKSs6RUXa1SLVx6qa2AnAKvd9XhHFW5NWdy7Vei5Kmx7fTEMxVGxDnXDrguXxwzrZrTLkiiV",
  "key10": "39poSSZRdstbLupW5bt246Z5VQH3JzooC5EmWfQKGexFQgrJDzLQg3gYPGNt4dYjv4aFwTrqZFU2JA5h9F5PjU3o",
  "key11": "5j5F28eCd1ynnJC78HxmPiVnL9Nopcj4afoo82A9FA2mXHSgoEyA4FBin8UEspyapvqDdLsyCSEzbhYZaB75DiEn",
  "key12": "2d22dX8bnBGo6LjahRpjPdWwJpztQg7hG2T7TtdpRu58Pa2C4GrMM5ipV2yMH62nQMowR7WUv6nq2G5G4eGYqeoe",
  "key13": "5Vuha7E7PtWTnpFK5LvdF7V3UYybNhQiSNZAjwAVBGARJ9ecaMwg8m4yTKUptp1AoiJGPjazGE5jkahaUWXnGkau",
  "key14": "pXvyor8zroMpFoHS9hz8qu7qoy7FBjwMUvaPjofXRvddkVdv9vLDYF3p7avUL3ST6pmi4CvuYe4rB7z5N2ZzLbC",
  "key15": "2izscSNh84Qw4sBqWMbh7JvxpUqTNZR3y2nQ3P5PEYEigiF4AWEqCHYUMoePuSZL6gNedZjvsoCPmW5cW3iV33ft",
  "key16": "2yG6Vv8WdausNhJd7drdoRmQFfgcHqbTSDv8sM9UgUnZwdd5xCBBhRyumLisE46zMG5hhAuy8kfN74F2dCK4nPxT",
  "key17": "4L9WNzHYEHt7u5BaUzHdkc2wuWsXuVZAVK8DC6bGcQuSQ7bq4pdN6iibF8hquqHA6V9V46osrNR14U227CvaphDp",
  "key18": "5w6a5gUvATi6pSPgUYBRZM9FVjbZz1W4Zo9hjDoSGeBfkHkWEPMchNoCrhRGtFgRQVWq5h8v3sqXKGwQ5cL5MWGv",
  "key19": "4DgpRr4AGjTyg4yXRBxvaaRtDo8VZjR6kiBGPbxWYKLwViYNmmsSwNHTQa2RcRB3XFV7bE4Ud2LFjsJb8A9D5qW5",
  "key20": "4gDY2PtufQWe16LAhnwNfnV9Hr6MojSzxWsbZvJ6yMx27dbVM9z9DXeT27zPjSkzGg4TJe8RSDYjcbXmy2eh5pF8",
  "key21": "3szmMZQNkD8MxoBnGJ7utYLFVYnueqzAtcVjo8rtmg77NXAncQfB4NfiTAguQFfZu1JXbzoeh1Z5ErpP2bMPNgnW",
  "key22": "3rPbDwnLK1mg4DCNr16AqwbB7Fg2xnMQrM5wPT8jQK2HJRrKZXGT1YzKH8jm7KY3gv135Po7tjFdEi1oeEjiVoyb",
  "key23": "3nfB2XbJV6WcfvbqDxcFgRyMHS6sbszoVWunHZ1PR8hUv5Jg6QnfZJiFDqYefPaWGtistu8vPppQMJ5xJsJWNyB3",
  "key24": "4fMZPSQJ9dq6E62GidrQy2qQ9ieZZR3aj3BHVxiJuTy6BrrFJXkqE8buC5aVoGwDBQwuBFaZZaEgppWL3m4GwWit",
  "key25": "2btgA1PNx957roUhLv3ssg1FLVaXzWWm15jJ1kNeZK3tPsPjEYDDYBbYXQqVKtNexLhFcmZfA95XeJp3ukCHFh4p",
  "key26": "5QE2vzZHfBpZmbktW4xwFGFHSkpdoiorpj8XLjCpjQdJCXiG8afFhWo2NbQ2VExseL2oEUccLgNNTRZ6mrEgnSQ8",
  "key27": "MZgJCrbt8yKNZdvEVKddHntJ3H9dje9NXdsJ23i2GJ66yQKiDLzvHZjfmdATLwKNpWdZy1yB7bGpmRaQXpoN74T",
  "key28": "2wmuPNpdEaPKq3y7vMrjDPPVxtaSY61CU4XefFgYsM5tngvmu2mT2DmyPy2uRarU9mGQtvs8TGvnrYby7BsS64rk",
  "key29": "2VvqkYZitMZZ9isqi5DxQS5BUR3ci3xyZfxXyM4yWnwa9hYaxXpDk3zQrU1WmR8DRULZNY1qbaqAYoLQwhCfvyuS",
  "key30": "2BT9xRuMjvHjfGGPJ5yYvpwbERNuymPwriMstxNcv5o19TAa2sPaQ2VFSRJ6hNeUE6iGR8MdEt9r9BZNQ6wkoEmn",
  "key31": "y8xq8a2mcRqsY6WZFeo1mHQh3wYRVRuCg5hvrk7cAGKW6q83uoRWvUnjzTeeTfmV7Sk1j3myGPqoCm6rbdr2nFy",
  "key32": "hSS3h6kMsfHTavTd4qRatFSRbEwfeDZiXs1isjvQGbrjETnN2d3Y9GLCU87BZxmXWgAwFZ5ZYtWhdGQroTLhnQx",
  "key33": "ecND2PMKxeGhAyzpwTqR5i7mNCRgMbBUwt3od44Ww5jyxPscbMEtwZmNLrzpWtuBGLn79vyQC5UKzB69BFVu3Qs",
  "key34": "2EqkJme9mn6in3TpyvaXdYRzy6A5M1Z3YMy97NyVioPDCecNiYw7XhWhGVv5QVQ8Z2wXoQRCQLV8NYdSkgfM5HHU",
  "key35": "4WDJhmPdKpbymgtoM1LanPK5WoqkFNdsNRTQ7GGf9ATbV27q3d4B7zS3Gifas9xwH1zrSsXF1BmmYLfeRgUDs4wn",
  "key36": "QtVA4oTsUqgYzQPJpVmMTgkSsWXNc98LWYN8neFAeJSF76Zgoerc7rx12pwi4qyUXuHci7EKQGUcY8gDLixXtG3"
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
