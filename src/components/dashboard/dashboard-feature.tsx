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
    "4UFDXT748JcWKdud1onYbxrnfu4K8FfLAnKRH1y36mHmM4K2yBvmhDJNE423UH9Z3RGTMnApYTNdGz5V7g1uwoQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzwQV9kSPHvE5x37isjT4QuVMGqKVBb1cz2ToWVh793cg7vRpja6afZwWM2D33YjYQPJEZWFiV3xDywUNUCUfB",
  "key1": "5t7CJ1X67C7xTCfozPPPgAh1t18gQt62hktYjkd4ctenx82VnvWy6zGsCE6LFnS1DkHVTUnZryi97dBM6LJzmJTF",
  "key2": "4eT8HxujyzJZpn6o2Ko9PUyh4T4FczhSP5be1VqwXuEsydTG3bQs9XRix3JCm58sbR8NmoSnxeF11GqNKQDkqoPS",
  "key3": "zqmF6VG7DTJsDvDY4bezXU9i3aKVTcucxpmoP8WrcDQXD1GCkrAtm5e5eGJQ6v8PkQ98e7jMHRpPh62oEgNzbGT",
  "key4": "WAwEVFdRhxYd2fo2oYm61ZXiB4zGMs2Kc5ou5BX9wKApnXJaiPFwqP7uxYxqhpBkiB15Q5DMiDovKKrtGji8m3v",
  "key5": "4jXxWRTESxnTfHdLx5xy9CwtiBZMKhaMYCAV9uyxMg8w17aS1aWDTR4bzftxhjow81HZH5jYmADcKC6ju3ZLRXKS",
  "key6": "2K6NyzawYaB7dFd45GLLkyTARDG8oBBYfyAt7EVK5QtN1YtA2FLV5KcnffqxJtHTbmxyyNeXV3F2fhb9tUjrqFhi",
  "key7": "5jXVjwiZt2cwJwzrDv6Rtatmg9t25sUp49hqgNjmGJDZ2oK2gHszidLRcreL4uT7zBaMQp3ra5f2oute6Vp7rRmi",
  "key8": "eFgHD8tKX1a1nMiLzJVXK3owd1eewQTH3u9Fx7zQAzy3VdH6kmULAYe4wMXTxu6WaYVDTTQFTeWyn2JxVSRGkuE",
  "key9": "2n6ZpFBZkHL7op2aXPgRrtcTKuCifSoUnyyyRQce2HRyZAphxptbwe9FQPR4cHB67bEWCjzeDacSXP45oPLEeXnC",
  "key10": "4Se7QhfjjW2ZUSqycL5WxvbudoUkRBBnMjT2tNHhqJuBUkpdM2hNgccqtCKW3LDF7efEpWwf8Gs9egYgFwYVRuWe",
  "key11": "QV2twoE7EnoEcNMaWqpxnbfrHCdxBezD3sDpPaWaMbxVqYUbRFgnfrgLLshWT7ZUpEQk2wdUN1XgneKqXw8oVhp",
  "key12": "4ZKdEBfSPUw3FAmYSqhh2UV4rYvsL8AiFVJJ6xfQ5SpnD5LjBSXsWzZPu1VVzL63WmEdtqVy14ifdExjLYZcgFNg",
  "key13": "4w8niU5QRdpBBeZ3KXBA4xq2Y5ULBxbVC4tywkR9ihpL4tZTAC53EcTtJwfERZ1XA43nafMRWwShjSKMoeW4fe3f",
  "key14": "TqfG7JQKkqAKEUJ2B4z1xxnENmQXjcGb3HdvdNHD2ZSYK9Sjs4C8vdr43K6MvDXVE68hgo9qqw2KicijUzrUGTq",
  "key15": "5vesMim4n17r8wmjVEJtsgJoi6yVmrB3kiYJnjiQTV7yd519sDGUEfXw6nDa2ASFNtJSguSnBPeCp49xhPXfHDH6",
  "key16": "59dzUHMPwauhZ5kx6Zj6dXmp3wMwnm9yf3UFyV5pxGpmUSVFiP8cKcgo4KKZvYq4D3pbLtgizLDfrb2voH4BLYED",
  "key17": "5zMnyiZqhMCWfmPFD83P3LK3UyZnsKJguzjn7psQ5HGNqGARFyEovNFkfGjzw5grSr3err1UeNLGWC2JeJnrHeh5",
  "key18": "3CbSFNU4CLiDNgNvLXK7ym68jNpzcXcRVPYAaU9EZNhgKChTFEdEaYC46sRUVww1CzHLRVvjwU98KMvGdHcKk4gr",
  "key19": "64Kj7dpoBXWFFNfaGPUTJ9TpiiCmtJZgBsbzaXrU7LdjT4rGg5Dy8vi7cfiCvXDpxKYXGpRhCCcms1LKu6maX6Xy",
  "key20": "4xFg62mhqzPGugVr8m9q1NHMKNMGq6UeAN9uYBmqdxDSc7rKksoYcE8JPbYsVaWrcvfbiBcQtAKv1jp9XhM79AN3",
  "key21": "QX9Kpnm2kQYY2Jy5q9mqkBfYUghwZcMGMBQ4e3ycBxt39SuNxwtre1v18Wmp2wSRSGtmmzoNsZXGeVDxEEZJe57",
  "key22": "4WqS65nu7zvbhwGpbKhb76Uc7dEys17QRyZogE8SoKopACNTFqZbBvG9j2uYzeuSY9m6QCT6Qsb8nkm3uxp2PA4X",
  "key23": "2xTMaz57YaNcEn1WMJVERcNFCuyCRSXuhACgGBshfFcYGjaMw8LXdibL6UekMC7vFVTLMAj6uPckuAA7dyuLPryD",
  "key24": "3h14hyKpKVfyCs1SaegNVo6gFpVivtLiU1GEUes9ckH281cYwUYwJLm1uLf62DXQRbULq8QMeFjgdzX8E1idUqzK",
  "key25": "2UgeEn7G2h2jPu4jPwCrJFjyPt1ugp6caRjqwAPTz4tZcmriBWuTE9dk1rrYJZmhzxPdCRfJYZYgLeQyKudJ1TX4",
  "key26": "3Vd78jvBQbFAc4qbxWudWMZvZWKA7WswjAC3uxfvQHAWHnNHMD1Kv8QqGxgKZb3BXRnm6AUDaXEuDF1yUo4GDTc3",
  "key27": "6TU9FRopaS2jxHv2feKK8DQYuHbwZVGmLjexTFKz7t8veMZjrCLFsN63P8LjGvXRavLHsGFEFmpR6Geo2gc7GGe",
  "key28": "5U1CGCdcwawdEsE99qN41Aq42Lkpb9AfTsQnam7zCrBAe1Z6GjBaL5xwK48zetQTZ1dzZ9z9nqMrAKTEeBEauWEv",
  "key29": "tghCLPgUb4GbwwVLff13jNB1kCs3KE9dRBrXDYiYdBXXsC9LXCBgzxHRW2mDrm2f9UJJvjsgZjs5BpJ8HEBr54q",
  "key30": "4eFZ23PG5NMbfazpYxsfpGKBvCGarQHXPhKTwL6dTVXYEWaHTcASAZQ4gezE56EHqgZn9xvZjAVRcQysQqJMz7Ne",
  "key31": "4rJwWvRfqWgK9SKWgMUCyicVweaQvaLLiJBsje6LoWvJSt7Wr1kMhpSBjHrPKzZzPAaJgpX2WornHgom5wWKXSBc",
  "key32": "5Zv5ChUwsAHSbZkH9ecSvLTGdTXZLPd22v8qTWA35zvACv5F3ywSBA3HqLaYARsbP8ER2U4WZwmwsXBBcFSkdaiL",
  "key33": "3eD96NT358TYjvKJQAgsUYDhpzFXqyGGTiwXjwE7rYGgNZrjcFAkbtcztrYpQd7PZnAV2eDNuuoRMfdcHHivHTMA",
  "key34": "5y9444YUAz7c5A9WmzAiHNngsPSPC9yfwDYpEvuZ9knbaKzB49cYw3NjcCBV5t9vLQ1Pquw6NaqxwoNoVG8LEEmC",
  "key35": "64sDMmCpDwWPL3qQNjoFNMBLJSAh2sCTvCW2XQCvfKZkNJ497SJ1hPTWDb6wGFJhNAfAmwhVRNCZxFWRiaoZQnnm",
  "key36": "5qpxWDL8u1ioowadrE9EM4BhmZqoSNvB4B81yN1FDzdbdKz8yGTtLPJZLfYrdLq1kB2S7ynpTh9VyxJgRfGnwnCg",
  "key37": "5PbCxB25LsmfMjJLfgSWzLj1XXzh6L9YXDrVnjMiEukVjJQx7ikKjchpPCgYApcqVjdi89uJRXkEbab8iUKo7PTv",
  "key38": "3er7juJ2Zd2a79wa2vFZD2SPacz3ftDbMXXNRP99psMR1Bm52zfQUuHhRMmAB5Dup88ed77pWUJb9WJoXZQA9cVm",
  "key39": "YA9fRC5tSx9pNG6ZxLAVQ9ebhwYJfQneNhVh5BgxBfQMD2ogWPnm6wjbdj3QnNph98hMyyC67RaACqz3FmEHh3R",
  "key40": "4UhGcYXoZvMsNeAUpFThGTWyGFN6zv7Ui3QosFJhw9TNAZMnnGmVaaFoqBwnQg4Af79uj8GWFpE2DtHo4dSSU7va",
  "key41": "F8FtRJBcqM8KTnWA3ZEwEWrycYeYmdFJa52N6BC47GHnKTnBm6WbfLKyhNcsJ5awWKEDenoyMage59daqpHTvMm",
  "key42": "5LfxmGF8fBPf2iA3PsCHo5cm2Z885tQy527XsDnXVfuEZDkxn4XAmCoC3xgwEjAEQmh8U672sRfWa8APqEcuh11s",
  "key43": "5mQzhrn9ch142uApQD6VsKdHCQTKFQqHPoemiPKveQ4ShoKevWUg3hkvR6S6hHQV9b2Xt6YH6PD6CX4XZjydQviU",
  "key44": "4Ngr4WY1AE1p7TCpDykRtwZ6WVTWBkfv62HLbmRd6K3hokuhjqBk24hdqcnoycPw1PEaGA3iC1iUWibEKfoCoNrG"
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
