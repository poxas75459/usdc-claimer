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
    "m1AJgiLtBbBD8evsiamhySUnH6aig1J21BeAbPbsKKXC2Xkz1vBMVE5KCFGaKHTQXvEa958WmRv1zJ8maT3mQE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwm7Z41tYdTR5uQAE8pUeeDjKHTVx7nwR83W84xYcecaYtyoTmSGqYYDuAGe1MfkVXsFJ1yf3pq8QJNGaarD3ZS",
  "key1": "4GvUqR9nhiNrwjP8XkdxsEw6gnkcpVrqK4nqRKQ3n9hWySDDHGSkdVTc2MYLEFFkvaDuagdjnmUiHCkrdL5RG7Pa",
  "key2": "RQRMCtcwGRATb5G6a73ETJVWoLz4tk2mABY7TKukjjVUfJ34iyf7FM7286ynW4RVQq79dxZ53tyXZs65RmHfyP2",
  "key3": "5WGChRv2AggKqokQPBBR24rcvMaStg7cmxH8tJRorSjQtpw7TeAsLVkMfbhQR7ffWaDVzkHMwD1tnzRQgNVivy3w",
  "key4": "25HVs5tA4yr1AQ6KyXSzVBUVNkErrXs6XRLZbFA4VJwsJ2h2VLt2uhnLDq6Q6pjwbCGkUCEPeMKte2Xt5wgqKWz6",
  "key5": "61YZRevcjSQ63PShN1zyk6Grdx7n5xCRThjGVNLkEtAbBTRGwX14CEP4F9m8wv3Vg8K1t4cTgExAAJ3BPaLNsg7q",
  "key6": "3vrPK3dMx7AxVuzjvN59XGXcmeWt1zGLaRZzwEHbehDpzeQLrJbi6o9hbahC9pY3ddzUbjKxpEtjaLFTs3k4awSC",
  "key7": "4Yb1rQpPB4NBampBmGX1vbzA9vsNn944yT3a8fgrFZWhioTP92tUd5GqdRd7C85YnACBX4ZaQxoWLAPevnZhncMG",
  "key8": "5ikUNzDNdAgM2v9GrBonMzZzMwV4w4CbERfRFxGBVt25eJJdJ9iiJL73Gd7Ftwah5CuBEfPoDKpVMUw3WR8w31cT",
  "key9": "3iKRjdpDs5apwmQLfUEu3fRhDLPPsvjvwUhdHHRQdUdxwcQmaYqTMm3JxhN4UFi8Bh1YJmZrgv8WkiL4C4bg3eXt",
  "key10": "GJixJk9mg81VeZshBovCBACixwW8ZmtCCeJUbHnKRmkPUsuGQ9GM9kdw3EfYJCRjbpyCzF3kcikFX6KVaA3VvoJ",
  "key11": "4hg8ZBmhXC4hg7tPygNPo3FDvAjEmqkrWf5bo12HNxA2T8XMLTi35J3PkzX46xWp9jn2DBNS7WxWEm9n4VjdDjeD",
  "key12": "uff3ho5ca4frzyM4k8tZvXGZ3PEwWwXWff9j4JbxsvFv5B6UK9rg9DuKKdEyfV3B8ZYzsXqFo4opzCBX4ien5cN",
  "key13": "TFZ7VcrFfEHB1E9TKL8wzzwiMfC2xF254BicPwWwtKjPqiVya1cZqVPoAutx3DRp6WyfAZrimSFZHwzAV42zjL7",
  "key14": "5Efrxbck5umLdTBd8dZV52VytLCcf325UVrATe1zgvEeEkfNn9mNeu2ENn3BiRprAhW9sWpk2cyWGoYKt2XKH6rz",
  "key15": "3qrrXjPFPwMKzmQfMLKA9KB3MNgD26APREHPYnCT3gjePJFuaM7pTVRTrctMAkUBJyoddsZjGdvgirHZMQk77rgG",
  "key16": "3KTUfESiHx3zxqVAQcC9gqKVUcU82GwLkkbUdhKaHXVJo97RoccLHJmxxZKpyeENqtnwPnz9pzeRvT4Y7CC645hG",
  "key17": "4LAo2E3ehbc1xCGPoaK8nZbzL8hy1TbNTF7LKtryH2Tdo6FUCEZd3bNkX4CNDUGkwB5Ykd8at5jXHCv4YXfXV3Nu",
  "key18": "4ZmGtkkZusyEcm1hvJcTjun5NSi5R9GhpFKory6dK2NnC4ZfKswYn9HDFY6d1tufNdqQC6EsSeWXRmF7mfwKXnVb",
  "key19": "2116yUkoLV2PDVowaBvPJYwVzsd2F8cAjwL12MqKnoX5WoMyPMfhcoDwuk5AcL1fNpf1pFXbk1v4m888gQ75QBfU",
  "key20": "59eSKL3NBkPAtS8aw6Yb4LjPVDdScwzYyx7ppWXaDnhSV1PukNsqSSXdutGPMZDj9nAYT2LF6XeVKftXUrYrASgG",
  "key21": "5E8sy6kR8niHgLxgadeGSfmuTfra3bkX35qRQM1esjRh3UC4791yRCjzT8oQgkfxfz2w63388WLa1SS6LL4tXmYN",
  "key22": "Ucqz7MQsPiAY6pnr8e9MgwbP3YGmvoQwP4QvtpjwfCb9hUqGdH3YsURVCjkXGCgZwyQJo9sGN4FBknr3m4kLZP2",
  "key23": "GvuJ7W67DGjQ3oEcy6sXhhq5HRhRuaJYRrSnxm7qJBjYo9wcVrDarffPKwDEsqbibtFpKQobC3c4x71mwDbaSZK",
  "key24": "5xdccrKcPgJZWqochSTwVYqvRgwfpLXudanNyUBFqoQKuzdyD8tY7mR316CSxC2EHu4mJax7sRvXgGmppW85yJZT",
  "key25": "2n5jgo5rb9rV2u9G7qQU4fw8oXxFryjzmD5yNrQoFhGzpj9nBZgxVQ6rJpFxn5YBhDQC6YQLgC5FL8wHLsuvPxdF",
  "key26": "5GHJRcJz63sGAJ8bLTyf7qzQArzL5Qw5md5ZvgPhyn7fGZnLzBQNgNZomLTFx1AwzucLWHUEqCBunLZzrJpH6um4",
  "key27": "W3SNqb1ayLJVDemLkmpLwy9vc5LfRHBpLRd9Xxp9FwhurGbJgD3vaPp91N4rAgtGwwPqU3F4fbFMXMbBJNuG6dH",
  "key28": "JVK4pV6ZZtLHULs8DLmvp5QQj94HbNtw3zHhzHg5QZ95uxuXsxeKTSugWrCeENmZAxUF26tfk5bmGHnDZSKtcH1",
  "key29": "2sTLRjXip9Jmf2dMZnvAkDR3ydx993GkAqekaMswu2eHMjr3PbpXpncLCdjBWTjCbwENpvcpJNppxYVZwpK6M2fz",
  "key30": "8eRdkD8TbeVgocpzBRJdeAEp1X2sRZe7Ki68rCDq1cyn3rdrdYio8hqndWzbcQRUuS2B3a9hZNvhStXNuwZPUJe",
  "key31": "4b3P94HBrao7jUqkEG2B1rfwUxAHaXg9uFrztzFhPUKTgiABaGz1js3ein2CbPMFqpJzrsunKowAKvLawqgh1kJy",
  "key32": "3Av6Tqc3uvYuwcFeD84L1x9yu2ZWZZEFKRXzMwKgtvSit9GgGuffNdJkwhuFXnU2XrPKrxFfghFeQpesB46obg3L",
  "key33": "5MXeD4LF358QT4hf66k6cDsETMc35mzMZwUZ8bSsJjgDav8mKCkeNXTZG4ZCqWVk3MUDmWj25qUxxQDtidXGs7yd",
  "key34": "5vKLyjNkRxYV5UFdf7ZVrCZrjjVMhCwZy8kz5q2YC8rJrYPjinpgN1Qut9gBENUinhW3FCkzg3ZRtpYBX3fwqJ1Z",
  "key35": "2mzqHnusZ99wwCbbt97fdNKUstJd7ttf6bzUR5rFqZ5j7H7gEYosTgKSvwZNHgrjAFx3Ndr38PCdKuJY6713w5hc",
  "key36": "3htwLvK47VgSbNKNz7McBH7afUHsePHhRpYtac2jve2GEofTugXFkJPQz8AFiwcaJzf6ZvxVF48cA32NktrypXkT",
  "key37": "46WkUfDLiLZSPftNsR8KLePNp2qoc6pxj3Fx1g5Ws2QonHV2mX27Kkx9zdPFP5pi26qvDT3A6zXvVaEMMTbQXyNi",
  "key38": "4E8xAQ9BafFSbsVuqTjbTHVFm2MvGFDid6S9H8uHH4wft4DWz9QqHbjmjKfmBokiMwH4EDDjWDG6M33pDfuRSBoK",
  "key39": "51jkSh83SVCmm5o9zp6ZW2KdqgXV2JsmFZfyRt6Pe8vsEaE35YbAB9XPVNMcNwJ5HLPBTKu2nfAF8gpxsUzCaj5D",
  "key40": "4c2GbEh4t7siyrQcnKdC5x764jqoRryQN6s6taaXCppQw4Ni1UpgE23n12ZRUwHx3YfiSo8hnnW1aW8xkQEMhsxh",
  "key41": "62bvf3NVkgu8wnHaiXHNawck5anMaFRtbXuv2d4PZn6RJ4Kq6uQdkdEVRvPxU5xmdjAckkx6d5j2GZE2bMJ9SgxV",
  "key42": "ZuMTGZXKBGJvN2SvJtvGRjNcFWLiaF8BFF8RqtMh1uArx9vExffosEoS1SHo9wVoXCRCZr9cD71YZSuSsiZpwEa",
  "key43": "3ZhwAGYxdUWghbMj91NwL3UYNkVJ5z1i1WmHi3dVW6s8a1t4x6UDZWEnod8e1MvYFoghAoPbnmJwrALE2iUnBmDh",
  "key44": "4aQs78Gaf6geymQsF5dYxV16XVwiq7mFa8c8XbnYYTPDYXxoAk8nyfXzCcsvhthmfHcyHRzAZB23CSQRzLWSJWgu"
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
