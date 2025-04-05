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
    "4rW3mdkS6KxWfH5V8vqqsDK37DkDYG7H8mkmCThL6giUwYwYb6hHGUFzXxsWAeaqn5FYii6GwLvttt5cYZaGGNK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "137BQizKuXHxak8JopMPgREKWeEG1HiSzPHwdwheDeSG4mvuUZzGfCa74DacewMACRBpaTuGQWRYw8ppXVgbGf6",
  "key1": "2DTBFZg3Y7RcgfRJY2Z2kJgYmR2f72McdyEu315hdLQ8fUcZJmfQuBKGWuxkzJKFT5bbShsmWVkMckABVCi5d8pN",
  "key2": "2xFKw3eoMUPonKND1BDaYghi2GC48qwrbedTcPAWo1GbwCD72NgkS3vLg946DyUrFWcTjhqCdfEFu2Uj8U7BEkkC",
  "key3": "4mdDoETnPUXeK1GJoutmfC8XdFNJ6Thsq1TcxdJ9mUABN3THJGzhi2TyYUCNNYxopyKJBuKTY989vECcjmgrRcky",
  "key4": "M6R4ie5h2fdCPPU9WWuuoAh94DxHGyGeph1mJAwhkrQGTzHtVMXMrJP24cvdCSzBHDe3gBsJTT3Hmsbohuk2iTv",
  "key5": "4WJ6Q6t2Xa7KNNHGG9CcUE4qPeZdCDQ3hpmJcdNuZNynCvXeK2zpGqBv6EUeREFqyEZqibnKMDPV74kPrfwHGi38",
  "key6": "5azZ5NJDXDMrkMNARUEeLUdPa5SnpUBxGSNkLLaWZEMSnig5Jshs1dn7PV8YxpMxqsqfe6xSqGFNHTTwb8TPwFrD",
  "key7": "5BcgUnckV9wAbUDdGpMzMCBD552WwUFz346v8C811wX7rGjXTARxpDZbR7SKnhNcsTLifVtCh2PDTPUGgTMbN6mc",
  "key8": "K81bQEiNfRmvpC8kw2SGdup6zeE891wHwPNZtj9G3HKht7koVHCg4ZM4HWxS3C45jBc2cFwjc1FntADSXDBPfpQ",
  "key9": "2REYyWu4DgkRszECBzhhi7xZkg6aRR7ZtuCfT2ekoUdQh68tGoeShYpyWWTn44GQjbYZ8NUHDphNxbNnGgArE3Jw",
  "key10": "2vzaYGCJmFSLqPaCMt15pvogzWM54P7qYwPfDNZ7JFwmY455zLGJdk5BQWW4STTBAp9KDqbhJdaboKNoLyktovjB",
  "key11": "2JiigWdTuvM7wvyCHZojwhEbdaESXw7ExgYDcgsNsWUSBVYnh7kkuLQps5QfaT5JKgnHSdvJJdMjBHBpHsaW5LCn",
  "key12": "3SK2JuMHPS4tjn8C5GakNZZKXCKDLryY1Yrkc9S11r5xH1LqnLXUEpWKABdgNxqTxibVfz1MoUxWQHFkgfWsHWhQ",
  "key13": "259brnAt2hxAKsx9TPbq5Pkv7EwWCXPWmz6hWTKZBmg3k9xT5i97Q9MyEGgcLWLBHncfUNSEJQnDrnomSsrs3jJF",
  "key14": "3a5BYEfHwYEmTD3gU69LJLGdwDk1HNkUQfELXKdW7VH3ntYAXj8XKjVXSnMRqMvedSBEUui7ck9CmQv19XdSC49T",
  "key15": "W27MPWQW44HpwjeiNiUEGJ7uHeGMc5xBgwUvu4YZr2MzWX6bNC3qm8Lt3fh1avaU9s4iXoghZ3vBesbhGgP3NpS",
  "key16": "3LDJbLMRUSc63Msk8fCDNpAyP97Q5LniyRcZCU2eLSSSE9QUHE52bZ4Ch5WNt6YU8X8Q4G5JNmisCuEwyasbHKik",
  "key17": "tY5viSX6qkGouDa1TqxyDNQEAbTfG2VfUe89PAZasQfQFgrrLNutcucpRszp19sqk6rJnB2aLdm7xfehq3ytqAf",
  "key18": "655yf4JKvchX2FYNVjrthBeynwocVUiA1fEwufqtm5U2zMTQTSiJ7hUcKJhRLpvwc8CzFiGiDznAMHU2xZ1PzEja",
  "key19": "5JNZ65E9JFecHUoVsdDPJFcaXR49ocNF4RQt1c5QSWGC2vs7uc4X7D4doQaVLezdBvXSrHEAXCfpF3S4vPk4FxZ9",
  "key20": "4vTRWL5CtEvunGZhBmzY9cqtmZJ8YnpzYEiB4BRUkuF265iJEQBMoQhLJSyonYG2UZrGqfBKH1pemA4Ke2Ze6zFG",
  "key21": "4ByXBTxpKLAAZWp48r1vBVbNdrvNr1uHNSZaiezWjVNtzm6cLnHXFkna9DTckQ3paQyLWQ8KaZyawPN72eD5resu",
  "key22": "3RGrM4GqKs6v2SwtDe5Yi7HCjapsuXw4tVYvkjtj8iuPM6KCF2qS4xdzkMB4eiM6Xt9oYD93n3qCmGRfPqbWeZM8",
  "key23": "4pywTR224Riujn9kxcsZt6uUmWDTwpBmvBesxHDFmcGBaxCdoodcdamQL1K3Wsji3uhwhjkCToQGVxVndiSGn5Yr",
  "key24": "3ctAvqBwiiSNhQsKcgZJiQpyZjTDBeauFwkgqBxMSxF9EtGgGJLptZVUKwwbraP4T215DW98pK3mRUcQm4JAicpM",
  "key25": "5vWqLNrHGfQSd4nHjcfRchPYvuvNMk79qCdzxxygaV8vLDnWtmeAGYMNiQzZ5mb6Un7r8xMPU7prhy5vygYxc1eZ",
  "key26": "5dHcM5gMxQwEbGg9iv8pjPXEKtfNq54NvndtCp8cWMvDXZuxjBUg6nLUyFtHz7SmZ6iSbs2TtoaEwsKsvbhqJCi8",
  "key27": "4TA1WsqQHqvfvrvTPqH8Xpo4oS9jubUAu1kkGh2NRGV8MxxFffhRWH5ZJjZdHhc5yFhx1rqf9xS3c4F7AFbpnfse",
  "key28": "2VMhbqWu7j9KvwaaZF6sMvd92Ua9ivttxv6hmLuRxivzEdtREaEyUPghUMp81LsoR4FcEPnBWK8MwHLC542ZKxov",
  "key29": "2XrZDBrt5FTk16sUvAmcKSBeWMGgU1dUbWDuBWoL6S5X5AAvbCnyyb3WUcfy2EotN9A1sz7j3TjhihHcdZVRjyz3",
  "key30": "51PBwotEVtuN3aKJNwoj4JqF9hQW25K9vnVwguSHpoKjRMsnLgXVWND5qnPFHX6vcCKXrHaaGPZD5t25gi7dVooQ",
  "key31": "NrWWznHBKaMnA1Qa5w36eQ2RLf8rMcAVkrXKAcDYXwsRR1FvdRTNjaQgCJ32ww1rpAnmDmDbCEdAFeNHCj1qTab",
  "key32": "3fK39TxqyTgejKNFbgmaSWNt2gzdXKsX94HSpKzCYedUGAk9gVBpzMhVngBnhd816MWTEpkXVKSnWpYVQYz5RtTo",
  "key33": "41EPLrf1XoKDZLKHUofK7TDR4rqvwtrMKLHuW7cif22fQLhAUgah6us9rRFvUCt7HPXxmEUba1DMhuvZyQaampo8",
  "key34": "21YifyzrKCjiKuZWRcupx69XaEqbKv4bopa6g9Civ3iEZeyfediiUGq85Dx2CNGVfpq7m9sRo5HnqTejZqXqKbmQ",
  "key35": "5KDfCSvX1EzG8wneCVamMkdygeTUHqmRjym8cS4PwdpCBgFMBmkegSTsA5Nj35iMw7xfX2SmbrnYCz3KE2TaUTmw",
  "key36": "2aRj5gCwZ7EHGRk1iKJzdehrkjgew9YqaZSehgKiekD5YooQB1eZUwmbTH9SKSsMR5grahYswHHqkMFGuZMKJYHv",
  "key37": "3cZzjJJiscC8jKSWed4KhGYDi2VrGMqXpXSb6bs47aZanSd8jeoMMeZEW97utq3ybn4pEXmVtpnUsvhqS757dfYu",
  "key38": "3mvdAJBGeJkA8pkdU29rYTz3TKKQ7dAWEsvuF51pLWUBhqTLkfAUmgtbG9SwdBuRgvCEBAowU8hGXA33AwJPMRVn",
  "key39": "3rLA6KioKerhSTu56i4MFPAPHNUT3ajmQbGye2XNLm8bsDaQc9LdYd5Ws8WXEYcHrrzbiBSoDAzshkM1VXbG8AMG",
  "key40": "Gvk4qwr9C3wHdGdMTDEDt9oBZWZbrGE274igzVJP7y6dseUKWQK5sepdiHePWjmBHuYywAuwteD9oAuGLYYiSms",
  "key41": "2k9in2Xd5eQ3d2kW7k7nHv2wRGbsWzSEA1gZogi2R6o2CQKLnuY5iaAeVWjrJgP9Q99EDT5vY9Pd37MAHSkGF1K9"
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
