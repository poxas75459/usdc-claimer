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
    "467r2zTE1dMRxgrz1XnxNYN2siABJYPnbmRhTTLSjd7BtNqQ1XZXU9U9YmvuwEFQgrePaFrUxpQDnaAkAW4e6Lb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66wpuaBC2kM53cbES7oewe4b7sGdcmGcbursB7EnZu9np1bi5GvfpqD42UwBKhahcjSgGmfMnf9J7AW3jNHpfxKv",
  "key1": "5tz6RkaFoUsmyoyxqtqpTSdvABjqX3PoFkRFHHMtnWtxs98LeACeYz74y9xnwqYwSmrpkPHHdxg3FnRwvvMUXx3U",
  "key2": "2fKvuvrJir8K7YfHcVsJYWD366Z7X5L1yxZXAHHYyDrMFhUhhvb7b3hLGiK1f2zJhGEanLzRaiUTU5nSzyEdf7x8",
  "key3": "2rvpPGE4WAjDk37vcNK93p4XiiPnC921A4E8R3YbA4Ca7a9wpyx6SULogtZGqGKKt3vQ39hJMNz5F9MMw2HxWUeZ",
  "key4": "5PVi3XVGxZP8pgBarTLPxpuodzXQJLdMLxSUNuvA7pgjcDagvwttkW85HoY5H38f7EpkSpRPXtauHyzYyRZaRFuh",
  "key5": "4npZQVX4UmSzbgf7ztT31xfbyKJrWgmyrUriyf4jftkBJDhZ4yJYZSDxr9rDrnRNQPZdsvp1WmosyxmUjhHqjuM",
  "key6": "55twzgF6xxMvYLsB3Xo9WVyUyUfiwGsGRiozRdd6YonV6pQUb8mZJb97BYREiRP8paWk5EYwUjX3W5Et68FhfkqL",
  "key7": "3tPWZeydKpVw6MaAxhnQGSdZ6X3yuqm5rUqyigmsvAUQuaJSxM1VmcCJGUwBoYCgRU5tmnk87gzkd5N53jVp7ujQ",
  "key8": "4ppgM3tJmHSMSCx5dBVfyC4BcuN5E8Ng5c4LArMy6dArxLHi4xUP1XCcfAi4RgF2yj4TGXf3Li6MHvLyp27HwJRL",
  "key9": "67HBF5raV5kbbbb4hhXFNFa7Vp4CeREhAvNG17yhXcH53375ZPyrKqM3A2yoKrXx1nKQXRbgdbeP4SmYhhNhwEFn",
  "key10": "4wu1FsMiJ8Fm4mAYAEsAw59ZkFAjFdVFsBFJtYEewGaaHk66n7mbCP7YSRmTUra2PNwLW3KGMZq7ZGXsVZH58udo",
  "key11": "3DxBauAYLH4ebSmMwFc8rZUap2jkmLHNCNhb6RkpoZ6xJu92aUU5SBAer1pdU632TzwknFVcHJfvSZ166iqs7NHi",
  "key12": "cDRFdHeonaiqDADbd6QfggHVDD4r5whZLWVuKdsgnu3wPu8kW3BaE8TK5pGLnjWKxxsHAQ2FTbaBejfh4aatmS5",
  "key13": "iE5peqNaYyGgCmvt7oMH5YmuVkpezvTm3gDG1A39QP8PHRHc2Dar7iR7XVnkrxcDToczcu35mQy3PkUnpP2m4wb",
  "key14": "615UpspMYHdHMzfrL5fGy4sUrDwNJLnCJieegJLHTusHXYkcKdoTBndMwvr1UsGsgi3fChpxfy6TuyAAnVjNddpw",
  "key15": "4GsYgqjNWWXorqDQKFCaQkFPbnRJeuPo1KTGZijS8npK7J3n7Gi9kvw2oT1p23MC1xWh4Ar6MdaUdaTXomxuD3KD",
  "key16": "4WuQaygtV6FkrS7Fb5vfhY8n7hB8PNAwMZ8gKbCRVpk4aryQpbdXfwieNnq8r2wkjzYFj2yxZuoaPv7wSysCJQhj",
  "key17": "2T8yZRYfzmvtrqyeTbpVmvjKY9Q3Sm4iyPM1JbSxi4rMGQX1HAvW2PosMCEN9y7cicyaiDjE1fEUEFg2ch7rAtMU",
  "key18": "4GbKmCMbEcSHoj41R6j62q5w2rUyNPQaqtXszE7iZWoih3RaP6FLmx1Nb7pCBEwW3i6hHYZw6d1R1sUYsSyHY4uj",
  "key19": "2wTrB8B19gQ7oGqzuo6DYd7hVxU4bNTWFeJwPmS9TwuHKunCSPS3f5HkpkSceSk25Dqk2CVJeY2EQQCJrKWDPPaY",
  "key20": "5zXcKBHZ3G9JjT2NY3SWuoLtoHE7ggSMYCyGneSy3vBsfcieDMWJcAUAxqYwP93nAryHBaZugyk7jFS5o4qjJ98f",
  "key21": "2HMuQfCg2vZFA9WFLihwvTuStXiFZZ6K6vqGi4foxvFcj147ECL19NcFcwpXkqc6YBCuH9xe9b1RjqigcMacMwMF",
  "key22": "RjmvaLE68BynadLiBX5qmze4Zx8xJEwCxzg8vzPMUXpneEV7zQ3xs2xd56eWwo4WnCSLt2s4GDo5PidUAaP4Zca",
  "key23": "2r33DAtUk47KrEeLJaRBmwgJc4LzUb8jrDZSVuUwTsAKkRyoyNqYc8FM6JT996YFGPyyM621tR2eYTGw56HWyH6g",
  "key24": "5RGCjMCEzMG8FB6kjBz9z3WLFyeYmJVWPQLY8Q3eaWLGJfcDqe4zhcpehJa7sRgNVzrgtGiKpSHwhhw7Lw9nqzSZ",
  "key25": "27fmWrC2QWqt7PgrmkEbwwt5FhFjFrTRFYKZKfyX3xhfQYaKcw9EYhPQm9GXmAbUYuhdMcsQSFEUJ3ajZu41ZMJh",
  "key26": "5YH2A39Jd6uKG7vJnW2UBh1vzrrx6cFJhVH24sitN5QruxXvjYT4MwohrnY4BQ6xntUX7DGFjTDU6SLU9XJi51UW",
  "key27": "bTp6G4i8NzSB9fArVkf1wMFgXHmUYLgnHtg7U6UUjoeRv6YjFtYQeBUgnT3q6JKtJn5qR6MwAZUDeAASzh29PgU",
  "key28": "33118YDTLvTNUeQ2fxYjYKXx2vctkEDDs812Y6r1aMeAAhYRKUoEw4PLMNopUaFDdyxxoDZwe2wtWCDBUbX5jHa1",
  "key29": "3ZVjxVQavYQNfxkSQ7tyBnHJD4DvTFpKqdMBFRztQCy45LmhP5rLZUkQj6aDBq7VqtccNY1jBLnbcTCE3J4RjQkF",
  "key30": "4Kx8K1KZBJyaHX7UnXV1xK6a6HRKpA3YrNn3EvNfB578hWo47kZxzcfkWNeEXXxRdtiHUYa87C4u8ehyFvrRtYYW",
  "key31": "5RrMypsf2jaSmVB5mVinSgyGNfRsnPHaUqzmE9Ghw25SDMAJCvMZwLCWX46UQouMVckRrsTfFNXBuNn6dBggyD1E",
  "key32": "t5cJuDA6TttZDtUvKJXU6uXZSpMvkMB1po271dtdkDYyy4fS9cNSw9gL4kJySDxUwiEqGvZHmvqcWXKXR9sUg3g",
  "key33": "5gabv7A3rBpXp575GZHZgaBiKKWFKF68rut7X6TJWCETiyv4qu3TS7gAwrWu3niQQNpDvmJUwwoBugm8NwoRQuPt",
  "key34": "5mNXfzSQ2KsTCJdYeZCdEW3dTRSRCan2o7uAZ1ENxD81PLLhiUbJWpub5hNeVYD6sGZJ8kEEr5TMiXEbGqK39Brn",
  "key35": "2Tk2VgZk8JatsdUPBz1bQc7atiPMLaov6jbyG9XsS19ABm82JNHBJf5P245FZwUWnHhacc9uz8u2gUcGqpCYNcc3",
  "key36": "4uzCdcCJmrUtn96mT3eE6DXpgZmcsA2okbfazrvWif198LCY8aHrsTCepokgxBBLeEHvDP9f4MuBiRERRpbhKK8p",
  "key37": "3mBtpYz9HEUf6rwcEzN2N2L3gZcS1dtDGxGiBERtRssLr94fQXc9qr4AnbGDVwCsreqRiETRN9ZY7zcJwDL2xwK8",
  "key38": "xRQSyLt4brZxh76nzrxN9aLjP3mu2eg5xRPUtv33Y754r7C6uwRPc4Yi98TMG6dWnjHsHpgruvo6SYhXQruqZvH",
  "key39": "3A3kkx1U1keW12mawEMs3KqxSmLSsZSPGs6ESc8rrqe7H79J8VVhujK9ojUoaA4Jxvu6z5D8ks3scr9gt3tL6qzz",
  "key40": "4aydxr6goHqH6voMFndj9GvBojk77BUuxpXNTcWZkrNVPKZEHMdNkkjCf3Ltk3BVGTS7iMkvgRFeir1BBkrCepfW",
  "key41": "3kEaLW5coDnEhnqSv6pMgNcrESjKu4CU9DXAB62HdRcNTbmAHE8haFS94BjFsFw94ucM7RhQodKFkHKYrGm75uVK",
  "key42": "4mtuqTcSphEttu9sprivVMpg7fkoFvY1Xe7JHEGzhnKgK4DMUmtLEysvbjWWpMLJJ9NBgCGgCkKnmTTJe5MfWmPi"
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
