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
    "24oehdgZZ4CABpYAMusbv3oGcfJk6Zde3EyQUTBSmoNjkqX9awyWrPfcwPZtgSzc5J2VL1L3P4Ab9ahoMCFV4vHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYsHThtCPwpY5byaeTw8daMgwjtxNg424Bdxqt3UqjaEzNNfKPh9qHuPk6djKowqXRmYVZqgfHdhmPjiDb1cnJd",
  "key1": "4QRhMhNkaxvR9Grq8H2kFXernuq9hL6g8cnq3ZBXN9kLgBRFaSXxnMqfoC5SzzomarNY78Tw4ye1KQyL7UyLbK2N",
  "key2": "tqrgeFixtsch19JPipQBG9hV2tKvykQiFuYjvzYoyLEAUwQdwmu4BTvjp4g964EoR5kK9BV7DcueQdSseC45QiB",
  "key3": "4sW5jBrNsbJTQS3BXwadXnKYrrozs4Ko1WMjgNixCwQDT1Ba3JQEA2pqHZ4PvULgDUjqpebTbN7yEJhkfz59ZoGo",
  "key4": "oUvoq2pGGmj3UQwPqtJCBMcTqgt3pWHga2jCimsYA45WoXKpX4X15XfQzkrBczSmRwj9hprfseXTCvahPcMzBjB",
  "key5": "s78DRTpferq9UHQa678Qi3xXmL8HaEKxwLUruLrmco6NdnruyQYRXeG3cKaPBLbyRiYPimS91kZ8w9NaBHP1SiC",
  "key6": "4ec6iUJoWToRnmCFd8gx6rjFZ4ecQLT42VhWvWNecBdoxaXPqwEVFUFKXTaehn3hD7u6hwF1FDtyZk9AqgB5N4WK",
  "key7": "3mh1t7TkDXnkdme1MNDvkJ5SMkWDTLXCpUNjFFkqFUtSTgtNYDf6AeZqf2SAJydzb3mdgQH5ygBCbKs7i6uPW6TG",
  "key8": "3z4zYuYpWzqYucK46o7jYDqztZT9ucpECZnkqsbL9XiMywgCt7vSDbykc6t9ztRbhRAVZ3LK4MbADE4kZmzbFiit",
  "key9": "533v4omiYPx6a8djrSBhbJWZxFr5U6qzdCXCTDMM5sZj6SmG7M2dq2VTZ7Vd9TYd1UxrLBfzUNDCz1DQpX2Nf54s",
  "key10": "4Ads5Wd5mfMguXAQrmciwQMWBW5GhFwraUuDFpta1BQkP7bTjzvrqD2xQLgqVxu6Mt7YSQb6eJ1ifjMHmmLvGsbE",
  "key11": "2C4BQP1cwevfFViY4DUb9X5AYYCpk7f3Lujgwyh3xSVDCf59L7ph9P9Uu7qqPGQG1a55mbshUjTYJadxEWCQFMyJ",
  "key12": "3TxxEWCRJpKaegp4xVzAn1VVNDo9gLyi9j4QcdgQ9BW9wZ5tRCArbrK1SBZXUExHBnVspuwuyxSdobjhJ72cfjAi",
  "key13": "RoCGFKC1fMGjQxmZbdqWth9iVDCoVPdd7tLVxNGvwN8ZxL35JA4uJL7NMX8C3Tvxp8786NoKjvFZJL1sMYPwfoN",
  "key14": "4feJVT6DioYXwuZkoyTZbpNY963GE8N2n4uE2UbPwk1r6rvqdMbaR6h6rGDaJkKFLcPUXzdRNxywgK2HFgo6jJKL",
  "key15": "214TdqM94jUN4z9Xos4kS2MGmNGuvaUUMqfgN272dEqgiNQ7DytjzE3sPhjnY2i1UMdBySRxnoVoQgd2cJT62VZ5",
  "key16": "38YSsqZCCE6QoPZJkbukASzUpy4EHnh84SrKEZkrNNxsZSzt1etre9dFWgLr6zJpsADRqpWQn847s6TnfH9FPDDu",
  "key17": "2gxDKke2gBwaF6c8V4t8tzRhczGxagrVqszkMhV8S44jrewnCVtVALU6f51YpPhbXaDTKn7HdtwCPEwZCjiQtaWZ",
  "key18": "4VUWgah6nNJgB19nQQSz6yc9biVTijRJM2nXHhgKvvmo3GicVNsz3XXorWrxkmW4ZqtFNMyqqUW8KPyoBXruuMxk",
  "key19": "3cN5evzrQm1e7V28ejg53YNXcemPXkrXUbpz53HTxzZGm6693J4Bg8dh8KpxAP49aQpQFB9HpVDCNiQHm6uW56cG",
  "key20": "5edTY24io2TZ4XKxPt8Yd8PFkTyqt5nkBfaeFcWChFDci9UcTUaKLgU9wqznu5AJyLSkcx2fWZXrkgVm65np1rD4",
  "key21": "5CzQkUFVoAGdkf4Mm8xjgosF4GZaN47Vyqb88v1SiR2NHTjc8wzTVfz3oH14WZ8GjATNn4cZsEKPgesD8jUPAtJf",
  "key22": "4PaeEkcCxXwwWNtgiiqhxkqUXT5veEwFEtaFgspUzXec7P1FGymh4PGSqrXQNTJoLGWr78rASvSypPudcZrWMZ6n",
  "key23": "2AJt2WUaNyJVisvDH1CSszodSSndRn5AyppX9sm65jggzWfYiR8qQEXccZu8XQ8oGgnCKSpX8UMoRkpm7jS4FuLP",
  "key24": "467vergmTgo7vTg2DHpMkUAFaZcFVSTiLvgKUe4St9SyFkKtqUqym6qd2dBRTU3m2Ecm3uBUmLGQ9ARDUcHuk25M",
  "key25": "3D4aSkbkdGDyLVDEAqEhhwqBCAPLTinyLEsqpjtszojPp1WUfuoGX9jUw4x9Qzmqg4AqsK6nkbJ1pyqGHJcrr7DK",
  "key26": "3H4cLiBT96ESqeCxNf9kqr9r3ePP3PQaKN4VizKGefGUdWZPfigVG4KeCbmHvr5uyZ4TD4YqYN3GXtzwAQPX2oGF",
  "key27": "4YzfRi6BpVVJAqJvAwwq98P9rqNT2NjHLZq4FHzCtKRJs7kQxV3ZifTkRoHWpDYReGgnjSzwUcZam4roWtjpfPHx",
  "key28": "TVTBNCz5Q66hFSuSEE6NvKpeLdx2NeKEVb6p34SqryW2f5gtSNxUrhGRRpwcLDETLzuVic3F8NC1GRUuregBNsp",
  "key29": "39ZfZ5XZgDAKEuFV6t5vJJxzgx9CTj7TEtx5oBsATX4e9XZp9JH9MG5uYLpSpfb2Wxsv1UCKsw7dBMFVsLHDhvrL",
  "key30": "54NZ7CZcRJZQ8cTiaFSqG5KCL9QxSMf5ySUJs5RtRKXTB6TrbH3wEjpkLY9iPeDYjhvbbARwNB1wj6mLj7U3u9By",
  "key31": "5YnGw6Dnhd5foXwcL8DzTPUG4uVCSNoFaJwvmcFy6o5LWm9J2P9vFi7rr2PxbcqBbohJFXSWutC8AKK2x56bB4ah",
  "key32": "BipmHc4Awj1Qz6eBEjp2CfJmhwPqX4N5KDid9bTiqgCXEMHhyyrQqVWMiB3S12zCygkRTzxX4JMSJHdX5H2Z3MP",
  "key33": "G12xnDHDrawCKEYG9xNbTbWNtFMeLJNDNftB2XYUaKU1JmkuQcoaZSyrP4S18RJXiQStcJagQjAo5wNm7jqrNiM",
  "key34": "3tFqqEu7XTdi2x6GYpjtjWTFgZnym3LgKncT9DvAiESDxq7HteJ3tFTbh85f13aD2Bj4auhTyJvucUqceMwnb7nJ",
  "key35": "2aeyRsqBKvrswTaG667Q84PndKqivjayia5vaJv8iCt9ThW9kwamt2Teb1u9iEH1EiKTtQhHApkZW5Ea5gAxHJB5",
  "key36": "4LdGTVNgJgXFikzGtAxmfQ2KLp7MNXCGFnZNj4ovSdkwRtJF714ttETPcQivoMGoyN3yr5gseMzwKC5MSwawE6Vb",
  "key37": "3mntfuAbNK2cGf5rDohpUsD3hdWZV7qN7b64Z4AaBfSRtgneDaXKTeeK5Po3dsHLM56Ba2kk4CwZiVY9y71zMWim",
  "key38": "2nE2xDGuN8JRtR3fz9cvoZRNyL5nQNCbAAGZZ96kYBJrrg5UcXnJXtFRKf6cSrxrtV1U6EcN7AoPgxEi6xaJhHJP",
  "key39": "4NQQrb8jCXtea6ugq8cqAMLSyef2XtLoRu6wEfbPXe2ksQqeGhygJU5b3M5jzmKs2wtUDhxuHrViB59ExbmSDJF8",
  "key40": "5pgFnnmkUYZfUbyRHuyDhARZ4SyDotsW4LMvXYGu1maF44FArL4rfeducRDVSQS4juS52UsEA5sc2znwwJhwPYYv",
  "key41": "5iQdQieyzcsq4DQNWbBPKYuG4wGzXFzSKtBabxrA9zEoNyiSQh6WJq76gKwyB5b6qCzs6GQVsHxVUQgsuKMvVWm6",
  "key42": "214rYZ4ciFQ6e91qpxAHFsb8Jj4GnBsjvtzapKWVym98KGVn6gTfuSajMqssxeJ2PJTJRupmHzxvbGvTFRxNh4Wt",
  "key43": "33TXpaJapfvtiswwudWeqcm1berVigUCbCR98endyXKeQiQ2JRYruU8PANZQ8WA3vdTUMQwrjK1tqe7LghDcJPKt",
  "key44": "uoyypbsT5oA2wTi2tCwnzX4Awxhzz2pRej1ro8cDfWFtCNTy1Bf8j74RaCTinPGj7tQMc6pb7iKcsyU9T2CfzEn",
  "key45": "2Mub3D9nYNeSsAr4fHRzeL6EjW7dykje1tqBRU38U626aWWym5tnvPRXTqVLaQLvRpdzu9KpAkxqDn5UPUdGBvCG",
  "key46": "2nuhJANozSwFdkiyyD2FZ8oKzDysmMLRXSwcRegerniX6GL3NmeBNxDDMws5pXTtnadFZvTHZ8mhp11WjCxSFUY8"
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
