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
    "53JdSPssCFAf1cNsL9zJk4eQ6qWm6gU5LJwCGEsdHbQpw1XwQhvMtc3jyYxZVFMZk7QvHj4yDVo77sazQVUHf6o8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sneFanSREW3QdvVfDWDvBbP9BX6tp8kow8gbAt8qg8114j5o9vuutVuobVdjxXG38zejCvrzmZEeUSu9z5v7hR8",
  "key1": "2ngt9FW8TFhzSBpXxYSpekChXKLjU9LGeKGMx7i4DioVfZrBTgR75S9JDBhHxTsGyKgGJQuCK3A7xsCQJ4XfNG58",
  "key2": "5UgR51RVkp7Atf2cHBwdYWHzxy5uWNkrtSiJhR72RFwFi1vv9GiwK5QVfetY1yNguyFDDfVSQHLskWAqDcjfedZn",
  "key3": "3yTGXeQo3dHGW4S63qBtmzushuoK2XR8CdheLK1ZoGp8dRC4UHzA1CWHbhDiHScUa62htNSFjPcxS3J9rhjoMLo6",
  "key4": "51g9Ssvcp6FWG3Brb9bmzCjDC5ySawTEHfAiV9xLHzsZyPDwqC8WLDLEy9WjoebV6bjo61xyUAdZdpbAiHCWD8zx",
  "key5": "2cz2gWpxVy4A2sv1DptdNyXjUKiMKRDjhMZwYX1Dbc2AZiUPkgecnQ561ReEG4GRgx3StirPH4PPqaEiwYyfypPo",
  "key6": "26L9MwBkrozxGoHaerUq2wvk71LUdPEcSy2rqLqKzWyARkbJgikxbcwnJvE267VL46Tv5bhiXvQ6PvQrcCVd4kCD",
  "key7": "4PqveKFw2NDfPPy97W911QvJc89ZXv3NbirfZBo1EJvGURK28tujsGYqgvd6zxhHi4VagH4e4m4TT38YmDqBcqaQ",
  "key8": "2DV5NMw7ci166ZDjkj92JBPpG7UEjfQQmZAC9h6YGJNwBeGSYMjmi7iQepZJsmgsDb5zRtNFxS3w1QM9xiLeuxb",
  "key9": "5xF5DAmVmBWxadYi41XbLzPxEGiDTAtspixkQM57sd71e3Nej8nmViPwftg5Hapn6LpFVtUHqXkeKS7gPbNqLvqf",
  "key10": "zpa9kxBTDwDYvR28tmWMJSNcs3qAwqzWB3yQmccnHjDmPrVhuMvQdiS3SxLgB7zMhDE4FX37FDgQH4iL6dod5Rb",
  "key11": "3udpzvoTc4grKUt75Sw6sKTSBe4rWYQd9vRsrTdbv1bkRZHB7E5yXHZfhB3Rgegdv1shM7uFuLCu4YxFU8z34ZpV",
  "key12": "3BmTWWYtcwuNzwpzW4GWpn4JBJ4eKWrkxZccNkbyarNqcvFddHnG3saUsgMFEsF6f8ig19JgKrUTSXJ9mns68ko7",
  "key13": "5uodD9up7VfXz1p8v1gU2A816z2pL9QV3rozkszBk1FCWCYUf7fTJ8aRJ4a2o8WPDNKwU8dKrCpqcwVGBxBdjPo6",
  "key14": "4XN4oc4XFz2xwC87wGn8rRP3DyMgkYyc5bcyRVD6x6gEzJNp3wUBPfRu4oEaD5x6KdasH6NnWMQKAatAr3XFLTRx",
  "key15": "5ScVE6CpdYL6SUaWGz8kDppQx6ioJPBEdnBFzQ3T9iX2nYz88FVZfN2bvcdvXzHw6iyg5L31qo4toeR6BmSzcYeq",
  "key16": "3KrsJqaeMy76HkpwEndhffvM1MQr8JQPqa4v2UJohmXYSNyFyR4CwJJ2preHyxob56Uh6j1MEUgUteGVJNCLqmLf",
  "key17": "43JS91dYwTUfr4TnsGqiEbFVWHFqqcoBMFJyZXxaTPLaRDDv8fAygzxRDQ4htYCcGUEv31HU16S91x96roavDPkb",
  "key18": "5Qp8u5gzmHweTdGsnUiJfTG8g9QFDMNC2fdnPS4WETJXTT3TV37XaDSziTw6GTun8jAs2RXwZbFuXzzCmukK3quR",
  "key19": "5wrHFsHByqQtWtzh9rmXegzxTcR2rfmgXqrcdLvSr3uQ2PR325cF1o7qax4r8ZpRjthrjLcchEDjcN7Bac4jWcwd",
  "key20": "4wPNAcgneAJGk1ETMh4Y8fqXUqF8PaNgT1SYG9Zjin7kkPvjesR5z7Ui75nqMjArL3Rf6sK91DguKQn1xXGNP4yC",
  "key21": "5G3djUhPENz36juhwzHQFxVKQ97R5cyJ5x3oJ9FGfZcNo1se7ga2NRNJNzcfVRgaEiveiMBqed5iK6LnVr9ey1S2",
  "key22": "3VoXoS9UEJBLJu49ULwNn5bFZVRHMMFy4v2vwykVcTmFmk7jmZDpYgiXQfCqqX1qgpNZ5AdTvXd2JVEafHRoKoKP",
  "key23": "3GxdKgSxaVutduiWpYT1HZ8ehjuXexiRW5c3fgGZPtDjALt1srKbVdvN4hWhmoj7DxbqP8wBiRG6ogjw9Y8ok5LH",
  "key24": "TwLGiQCy83YopRkKZceJA4saV1ip9kcgX23ZqkZbsADyrSwMV7EbdGWSBFnFxZ8X94N8qYYp1NsuEW21pYxfo3x",
  "key25": "4K6sHgF6FvxfPJXr4VzeMtS8JPq9xt6DxMUNEVZd1ZZVqex9LVPcYi6ULfQGK2RM5FdYm6qPpGaDkddGdGNc4meQ",
  "key26": "57BwQDEf7p9Mo7arNmgqVF6Ec5XBVTqC1WpfHpyud9JX5WW2Jq69b92GWFczgW9TcNqVKGdZGggiPdasXkxtDwru",
  "key27": "4YpJV5FE8u1PDAa93avkWjVypqSaGbUrYpyPSJZmc8PGo9J6qVnWipxTZ9PVMuRDwoVyS2fyq7iyBqnZkeHNiP8c",
  "key28": "5c34Bdyt9BW7MZQqk4FdPaQuFn9oWmsX38soTGRaDsySyGm53cGicJoovpmL7xsrSdy4f9KfmG5UxtgapPTkVUnm",
  "key29": "E6mM78N6eCPyftncvUTpFN5K3Zsm2wF6vzvDoRUrPwZGTzFRJiXZ3ifKZRVycfVoM1EFKidPftHQjHRGq9Ug5md",
  "key30": "5hTa2x5AANZkhBKo2LuNw3vpmAcrAr5RGEjooG8DVvrYhKdmtQaxDEQrqEYzCn7r2ofpebok9D8YCbgjSWL3pbeZ",
  "key31": "4Zb82vHywYxEGM5rEMdnf6ra18c8jCrrqbseVr7DF33uhXPz9gs5yKhUDKfQ5Gbc3i699RBrFa2T83vydfL4fdcc",
  "key32": "4ZTejzvCQa7s91ss6kQY6brUMdVuMTvopcePY9Xh22EiuQErC1yHFaHy4bN7D9faxVsV1prTLGk86iLw76VUFMLb",
  "key33": "4MA5GcrEFD9SNgvLdSGvgo8Q8JKaQ949zNubcyKuKbBnzJs2RkhurFZ8JJebdKPC7HaN1j9rrpSBFDiEpKXbogi1",
  "key34": "TeUcJ6xPtCk8X4fM6sXmLvNQZ4iwBRVoFGzP4bnnMNtjLjaysAuxrNaALh7S1tRd6W1J7N9ErKPhRpT2xTHhkeC",
  "key35": "5S4rHCpMYJcRXh4eHJzxHSRHqmWcV2JMJNSEQF4YnHHzV1aTp57R2G9S6FzXojxTXTXtYWqigFsGPLFW2A584EaB",
  "key36": "5RAzcANnjCQ4AfAjtdHFMiPZQuTNiK99p6PEe3Me5yDwDjPJTA9CkJ2A1J5DuPXgipS6DH2taCRykjt4UwyUZjyQ",
  "key37": "3FkqyNP9SSEoYUWsYC2ye6twzhPxPXn4xh1mEcMmCrLk7447EmpqjuB51D8tRtwT5YvyrmqAs2yFwU4U1zUSpby",
  "key38": "u6VWBb8awSGUpKXuhjYzhsH2rZjSafwxvto4QbRtyrJ3qpNM9dRPMKfjeB9G3jLQowXbi7Lz5oannZMdrqng2Hp",
  "key39": "sveMKxtCBLqWpWXwDx5m3kH1eCaH7RhYT1BB1QdZkchnhYK2Q56Lmp3g2wZuZsGqmifinVPPLvwmjQVvsS1Z7qt",
  "key40": "2pM5wmmhaGVEWPW2anB1r2gNAe8ULzTk98vaHesREjX3Xu9tE7eKVWQeWszQENbLu38rWx7MQ5cHzAwYRAbAbcZr",
  "key41": "61QMZssBUUjkcBF7Gw5Dt2T4N79VYc6XfZ1PL6pSpevnBZXd5UajvBnAjBVXrtm7DZq25dxxFH3KSpBVdGweRTpY",
  "key42": "4Kpg2VEhnPbK8VjC8vihQ3JDkviAZkWV1kxyNwg6c9FVQkLUMHYY2MQHPaWjjcHHXHHJHGBEvj66cy87z3eD7m2R",
  "key43": "2yxZjFFQmP7GN1hvoteprbGpWQ5XjM8iYTxW4dQzJneWnB7aHtSPV81JpUkx2n62xkBSM4AWjA4yx2YHyCLzphGL",
  "key44": "53mY7oBvTXqfA3hnHyMRBrtgt9GuUKX8v9cKkuhrovCkPywDAPXZQQYJes6vHViPdXeCHKigFuu8eAyvDdgV7HLw",
  "key45": "3SZo8jG674W3AKgN4LcAHgLnVUpXfLuSVfhomaLEtsexrX5BzMGWB5axn3W9nKxDQV3eUmMMaefvszdudCKnbB7a"
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
