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
    "3UCigffJ7pggJJFgfn3CQG7ub3Qgnu3HWQzakfXgVxiyLPwoA4LXaWmFNoYi1UV9vPCfiLvVa2M3ZVsAmYnacEDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T2Yzojjeux1qqKYoTqXvJC7tM7G5SMxdmYe6eWas2Uymdyx1eMWSFh7CzDQBrofEP6evMbAcsjSnpZcDrdArJPp",
  "key1": "2PeQW62xrttNsj8VWkNUiY5VBroKruH47mVU8D7oeqYpVuAkah3kFAzJ37fXuLNHTDuafBomTER2SkaQKxuBXtU6",
  "key2": "4fEWdLrZLRuDGMGE5e56YW6cmM5nsR52X9aAQVVMLtnsMgdmCgf12FKkVbGH5KDpi9JcsmasjcKvy7KEKHmabUig",
  "key3": "3JnPe72Yg3FioxDHWBDFsf4qzzDgSmsMQEMZwjZncWE4sR7ze5MnRQgwJ9mpL34pTAwoA84psFXFQH9GDPpWGRbs",
  "key4": "7qqWmCS1yMXpdrEccJ1wQkgpbrA6UyqgD5NLyfsRY28d2izN7Jx9EyRXZmMicAjnLoXsgu1iGvm6jjajnWeybYj",
  "key5": "21W46veaN9M22cQxNk1bY2fTYkZc4zthnB9JBiwAqhQJmfFivuP1pjcf2EwqxNG8qmziZymnoeBntG2Pb7QYAdbE",
  "key6": "51wRTntNfzTEVPb9GV1uvx5CwPUmoyeXYHiWUm1hijunHhbAHhanTHBaznCFHvza8bKK9j6b5JPZwLi1LV15V9gu",
  "key7": "2Kg9H6d6uAxyhsYkD9mMZFugvsx7fzamo5KU69yPLroiVhvFz3iinmYFYATTz7QVqffxh9Sv44JeTV1zNxifZ5aN",
  "key8": "5AjuNNuhsxP8sKxXwRF4etcmV3kyo8QXdRZuN2qy7mvx6hUQ5thhPjgVuUVQ95qZ5d8qYMspFgqCBMf2QEnQttnx",
  "key9": "594NnmKtekjgDHKEg3uW6WJzLKeJxQMVS1LYUPuEVLqYP73x1AkR7Q5Kv6WH8CkXpqKQHMtEQ3dGMZ1bJPV8yqwk",
  "key10": "4PG2vCHmsxy5FRvKhBG8LAKt3JjNRfAJNdE7u1QMCC1PLSXWmeSU3vh9xPj2xJUBp3SvS3tzKokCfsE4rJbmRDu2",
  "key11": "32H9XDVfgi1WotF2Mo982ggKEk634SKcBaSwJsF3X6Dndi4HdhWC7gBBXQECLfUKyzX8YNoLM6YUa29VseNKbnRN",
  "key12": "5HAwtnEuRhKaUUrm381GSLu9t4Wq5texXTrLaFuK1KdvWxzQq2HZZNVkYouwdKaAy7SQHbynT6iPQ8jG7Fa32PEr",
  "key13": "3eREf6HHUETYxRRmfoJhciet5fUz8dccgAkdrGD1JjkogJuDgEMFZB4EtMN7sKKWiWCUPWyJoEyVuHWZzVF2AMgd",
  "key14": "4KrnFoCEuRutBnvewgLnWjQYJzcZPgmCVJVAvxaQT2sAwDn2PekhQBCej1c1dDF4vokNpFBeX69xFuooQ5v7XoUu",
  "key15": "49xcmJSxezyxfEnq1BGmMM71nRUWGKy7s8Jog2C7hyCukWo1V4zMSXn43vYiyabpuWktZYRJ362zt5xZVKS9YLLR",
  "key16": "4WxCVnVJ2CK8C8Cj9BZT4gacse5ZEzDBNt1BcfvvJcSahpjATSm1ixvAMPkht1XKbs59vz8ufriFe8XQKndJ2pGh",
  "key17": "4zxiy3WGxhixJbHkDb1gDFjqQHsE1aahxxkXUBwau7nZGmjMZyntuFaiC5qeCPJoPfR5pgEXUnM4MHwQfsD97id6",
  "key18": "4QM3e58XuKgsTWSYbcob17S7oSDE2LuBKeHosfVgKTzexeQzbYdUNCJKkVtnFuq8NKjHHbLCTVUT3JHiBXJ7r3zx",
  "key19": "3sfjsHgLJw2qKryAmrqdWv4BZoHtjuXLQRUUs8z9nghbPuKZpahjasjc1Aiv8Ph5jX48iQxrnrwijec9m6nuRRpp",
  "key20": "4rF5WUPuovXmsxBWsUkzgBaSg4kwdsdwWGUwDqNhRmjRMWEU6BYfLcA1rhoFgYHHZByVjctim8ExoZALFVFtaoy7",
  "key21": "4qhyeJwp1CEDhiAWTPnQF8XGLJWhHjpCX3Sa7W6qm4D6YGFT2C954UWcExpwPm3V1CQk4MVVvaWzJJp6pD2NWfoF",
  "key22": "4bc8dMxrxErUDGDaqg4imVPKnJSns6GjhSPzyo7KdfyGmqTtXThPCaPNtXieiYnRuWmJkne6M4fB7zyyJSSFRAuV",
  "key23": "29JCmHdnGW8vqPBEqw1GyDf2wAAN6Rh6bMmhRWpiu2ndnv1jZMHjuzLFkzrxxLJDBbZ9PA4pZ5p1KFqNzbmeAwYS",
  "key24": "5tcpn2bj5bj2GnMYg8o5kT6aTtzixhP1mnacnaWkuCz3uPMuHL1SwPNqLRhLk1qxNLQygMBak2rFdeDaWFB8MXw2",
  "key25": "5sxY2TXbbgGo5XL4Lwd6gSsuuPXFctNeQsEY4ZaCWSrGHQ73zZ5vfja76j63zAdjiuevx8dXmXrvKzytMZehrsW5",
  "key26": "3bFiztW1njinFmeLHCEZYHeRpq3dMFucuAXoVHGtzMgV41ANtcCQcLKe8t6R375QHyHfn6hDC6nRydEZahoaLkR9",
  "key27": "4RtZp5VKL5HvC9ZZ7EgYiR1TSSnjvLxnUvgH3MBPvBfVWKhtNV3FntwxBsogqfBaqwnFFdbYVvoRGTuoveZTLXAT",
  "key28": "57VXEss8iSDAdpwHDLKRe9pi4x1HP7QT87G3DUqXihbwmodGYGMrXowo9YiaBBzAzRDY9zTyUo2tkbyQRc4YGwry",
  "key29": "2EqBH4Kt97rdoALz6wrPrN6iHPLU3a7pfYvYTtPVMQ4z3peced21BpMgj8DN6brBbfxNpPUHzn7n1o6gxXfhitAm",
  "key30": "3AACgLXiNWQg8nLu5DDw7DAiXSjVkbo9GnfruJC94iAmLUCwNpYyRnHg2LzSkPfwPXoqnDcYw5LXRAaJDNiQqqAx"
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
