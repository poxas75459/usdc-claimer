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
    "4zd9pdHZeMr5kNhEWakDhEdJerwhihz2pX5Ec6dLFFNCgERkTSqaDgq5YruMPLtza5kMprQk7G1PBkJTMEAuuie9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipnvHMTiHEHueyV2h1PR8E2tKUchZZRTkcU1tJeFv3KPoMLhjaBugtdDwNEWgmM2JYHD2BNCK7gxbufXEB9p48N",
  "key1": "4xoqmbN45Fr9nAJMU2BLP8qt3r8oJZAuG3qYn7Txwdswt4EyXhRyiAFv5UFanHJhBd7i3QdQZnB9rF6J6psyfu7b",
  "key2": "4Kdq6G5RVxmB9L3M9VvqHXqNDvJ8TAFHgTscNvNTycziu7eDkXKehdiGnnF1fop2XhLKUMbyMeLk96GWPsEWEcmr",
  "key3": "2gKam8jWwD2SwGkmCHPRAVtamm433iSbqgoyDr3ewuWSjgorJ8CwvP5Meh3G2cyYQ94vmeHdndHr286fzcguzVLf",
  "key4": "3L4hfA6u9MFzpBfzV3n3hADWHBidLRyH7PUissG2SSwx6aZbwWzuord1Exs3jdydxfmbBvixEjXMqsTbU3fwdjQE",
  "key5": "j4YBHvCBu9v31Y9c1cYHNBQxT6bk36yAwD7fa6sJJCkA7TvvXaeCN7TYLpVwterW4LvRZWk1moPW32undKcdcyd",
  "key6": "3x5wuvQugPS9XXxE1orwVhpzotk6g9QkDe1imkT7pfHbV9ZJXmGkwxtf2cnDVW8iBsCndeeYEGTErXXM7fAAk3QD",
  "key7": "4vyRNKyZ8nZKGZXLXoViRCKPouPtPNRmy5eU9y9zNJvB1PTQFjYBS5r4DfFFM9V3SUDjNaSpN59gYFsEfrGgLpfi",
  "key8": "5zcJ81QufeB2aMafxTRrFXUufw7mze2q5GJKfrxvPacjNVNzMshek4qAisgoohUGQL4vkwxx5Kz6nkt8LKC6iwTG",
  "key9": "3H6fBgywDuBZroKWTRn6oe9ysetEHEAkA9bNdSACKJauNVi9pCqZ4tvwT8Bph9vJKzVpAAFSBoQtSkwf689RHD5T",
  "key10": "4xeCvacikrQDfqTgJnb6gs4E4diMPU1SeD44A82YqWBTz436xjdNvopdXke1d9r2HTX9t2r6iJw7bZq1gX5JPW3s",
  "key11": "kqkPL95viFj4ceAzqh8VMA4AURDMrb98K34muWzh8x3XhgUC1Ki7UDZamBUxhAdouc5ctpfvSUxeT6Zw77bPSpB",
  "key12": "3xTJPGzYCUzZXXSZ2NsAsbfi9biHmMbs49xkMpKKmcf9BCJNUW2RuWmKA4fZQ4FVf3AxRVWDPRagkiUNJdG5sPSg",
  "key13": "4zvnTseHSNgMpWSqnMopNgyYrfvYJsetGN8zeEggQ44jyxWWdiKPKEW69L2ktXq814csH4LwEXiKHN1zcvMH2F67",
  "key14": "tLsTbYSHG84wSYRbbuK7jq3khJmiWbMWHZ4sNLMLJxsn51LCPP165JvwnDpHKu8qngiDSmGRjRQhH1qAGThwBLE",
  "key15": "4Qh1naP59KHHXv36o8occT9i3PKCf1AkxAJJUasD9Uzmiour3cFFPNaANioHtsvhMW78mURnBTYebNKjmjQe9m4q",
  "key16": "3at2sXi2xhTfTHj3sRppCR5YxE3CA2pyVsaWYJ6kbkMvKE7UGdmkeP9m9fQfboMRXp4QMphRw1BscEF5nWCNVtxB",
  "key17": "2HEgafwsx57X9iKYgmCE1VERuy1fiXTeSMokeJBoKCVtkzZNqyvJ8anKQMf4WWnrd6bvXA59jrw7CyvVWPXSjmqk",
  "key18": "msB1bvs5BoydT2oC4PfoNUEm38Vh1SanUftdJDp3VXTMyr6wxtsNte4CANUx8Q1uKx4a3nz9WhpYigy8XZQ9fDg",
  "key19": "3fZQUoPnrMWNNJBPYKAyBVKY8igV54p48N7VsQC2MX7MLrrXUfS8sLXDjmw2ECWr7j6nVLFXAm6KaUY5Pmo2G9f6",
  "key20": "2jVGbUrMVHpAGq2nPr7bif8txxwYk4MzdcC8EcKE5sZ4hRCLNG3pGcF2pr4g45YWQ55c9FMcFyLkv7wXYyp9bceU",
  "key21": "3aoVcQoXehr75nPCs786NmFBY56aavwKKrTY8ktr5tFmKkU8RLBBAg3HECNF6ZYTYM4C7deMsUnPhW6LDkbPSESe",
  "key22": "2Wfq8YJz9fjdunWDYoAYtd6CUXXcZfKhSRUktDqc59XzwGuzWrQa7CzpszSJhaVosNvUydb7izKRbQGkVmEXWYbt",
  "key23": "5rhBXtmBQLhKTGFpdNPRQYF3EWz7s6xoFDFTimBmhm7xFBzKETUVm4NGrdEzziFaqskXkkW7JdXtHDpV5honCbDS",
  "key24": "MA9ek3362cwEb7wMo5dkE5uuJYFuUHZ5yCAURwBeo8kRH1jFpzNy26TgMguD4dQjrmeN7KTv39h6sL6Gkpgx2vi",
  "key25": "5zcZssM9xRMrZapWAPzfUNGi4CTHhevVbKpUnzn9idGkHVFYCEwRG3Ynd494uta5rmQssH9Y8gwKHL724KuMEQPx",
  "key26": "4Jn5kJmfhX6ctR1GzHg6PrpbGrkLHegVjmtreeM8DMkDhegbyuot8YCrH91qqLbuGKbyc9b1ePQzjaFyBtSZLFwf",
  "key27": "32HaHXCRaWWsX9pfCwfeJ9ZkzFYsNpFoTkfjJKV3FAKLsGqcgRpz6sV9YBWEAjZucM9ho8pkX9ZmEjU7D77fUqy9",
  "key28": "2NRd4XsYDfEEiWTETHkE8LK2mA4iVgoPSyngYsCbwo5tNGKt8CCjsiPKHMrfkFcVQjzTGWP82oH9w2N7FFDxEk3h",
  "key29": "4KbmwXXiFgVWWETHyGkELEp13r8oc75EY69BuNxmJd5dJCjjLg16Z5Tef4nM7fEcptKmW7b12okYbJZyeSRHuL6d",
  "key30": "5HL7SFqtHcwTbkVuH99y9ZYgVypUtFvac9XcrdHK3imyg7mn1hSjyxWQhjoYiTSvdsXmrWN7NTTmn5zio1dn24TE",
  "key31": "35FLtf3a6TTj5QwtAeCFRdWEPznfvChm49yrVjAGnGoRzotEpyagLMAERrFVcfwZH4F9vurcsC5wiiqRJo54K6bw",
  "key32": "5SP9RdMH2KoJsFD48gweRB67f6k7djGpiU6BTKxF8rKVLKoWaNBtig4YXRb9f7ZrNBnEzHMnpGNoJqbtg1MTRSYD",
  "key33": "4DF3QAUnHcQzoYyZQQykhZmMf8extZhfDEtAzryXh1dRGka6diqMfMvtias6RrqmgChBZtwndhsy7E7RrCYHKAyG",
  "key34": "5RQiPKrYdgNNtAmWkxcQo51R3QnVsuh4EHJ2RRhtCuyZDTQTJZFCVsRGesxXQCERvNZjyEhuMmoHx7ee5NXJPWN8",
  "key35": "4ZJWbXs7qynuTb5iLRmvxQAQfpwBy3L7XFoeTLC9vHmzTBiiDFshrcYkWFjwEMBK8WyuoFLKjgHzwyiyRajLJ3Jn",
  "key36": "mUio7jG8esjYrH6WrnUVjduteBJNMiac5MWiEDmsjRog72jgp5YANfuYdj5wLToEheXD9sjEWFh5iqKTGa2h8NQ",
  "key37": "5ujZvDKnpFoYsrFNBEfobUDctPvDBSNLCgnD7hQqab2noSC1wApguxBc1dQvzJBvCeHtVQgZnPbyiFiEA1zjar6a",
  "key38": "5BYZwMLxXM5xBA7GpUUe81d2J1iyAUQMCmmZe1D2pLNpkfraS2X8tcaU9c7owdGhN4hdHHzChwZAKDJv2CiCnKyq",
  "key39": "nt1H8Zoef54fPUkoh2G2pVxQ9eyPaLvnZy3LBcGWzgBdM3JUz2jEeNHWpUvtJN3pRUYJze11iNXTrXGZiW6g2ke",
  "key40": "5JYbC2whMewzef4nm78LeygLpC89PrnvnadjLU5qo6N8LiDp5oZJv7qKUAfdv55MJYzjXjCHJDJwsvagmFJjZSNt",
  "key41": "3uoeEsZAFkxs69cbfYFETSfpbRsU6vBXu3kzz4jAuBwjqyYoMDhEoSKEB9RvmDSC5Rfs8MhwqoQP3ZSWScmXd2XZ",
  "key42": "5ZQq151x8xPh9cm3JSE5kXxKNf5jV7u8g8pTxGbFj7A6u7xWkZDk5K3NaumhsvGhdj74EB81y2G67ExRU818wQwG",
  "key43": "2dpyLxcjJEuN6f9P337S1XHQDPBeYjssux4n31M4bQeg5ZyYkqJtJ58fUNXtsYVPw7BPcZfnWz7DxtQMFNPWFXCP",
  "key44": "3hbkJGoj5tkLPvdmNjF47gRk8rWh8FVzYeyr154yfXwdcjRxoqzw1zpVW5iGQmou5YcvwP3VSBhgnJDeJc95KWXV",
  "key45": "2KBnQQLNk3kNHjY5b3opwV2pLnmAtof8swnNZMsPrPZa46TSQQZqDtRNsj1V5NBQStZTusRrCp9ZXXcRYwfeUSKm"
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
