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
    "5eUVZKTp67xSGnbyPDLtLvGH2zTTmCgN5wHWSvraCHs3rBdCWFaQgesoqFnaU9mHRvKpLQxRPQuot9yXmfNQgMWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55eshAk1k3izXZQQ4ae3KdsAr2W7U8Fi4RqEHHKwUQFsqTuW3fA56FTSSJXVvWufwVaW6YfBnwSS5wGj1mgk3mLy",
  "key1": "3qf3BY6PQfWrdr4vHVzn5LCWLKuzmpN6AFGaYM6y2a9WxpLGRZbbq1S4j4AhQFK7zz5v1P2j6PLRi7dpiei4nv16",
  "key2": "cW5pQnNWS2GbWP4xn8Rt7CGqgUuK5DGHkhzsuaP8qF8ppVxgJ54YgE2vhdghGTo1vQkcfoBDgjTceELbjbnJryL",
  "key3": "3sqdV7cUn6z2ACnXW3ZzWy9JasYpWf1ZsbXCvJsvJ6MJLAm7L9HxqVL2NtHwEwnPA3fBwAEwYZjAHMrPNGaivwXL",
  "key4": "5emstEMuHqwoceWLAhXrA72c2iRNQLDpduDfv8gXy6Jw66CBoWCwe2nATyGCdMBqQgHbaWmppvyo3Ui9YiW8ipUk",
  "key5": "DF27V9gLDC7ykAgtRMKjGJtS8UBuQbUn1AYQDZTmhKvHEh6rgbWqbHNQEj9w3din1oSvb8dN82NFzf3yFWNxG5G",
  "key6": "52Aq9iDzv6HKrx1vGAGKFYKeAnM8BYmmXpziK66svtTa4nXRjGZAWRUuEr3zhAZy17Db55GSPRay9sXDE634Q7bT",
  "key7": "27rXBm7BWpYJZqe2kzqEutm2wGWa2UVAKJYkfkbo3FoT8ejNGoLemCZSLWU4dqyK29HgkKqLVtGm6F2jWdhaDh1R",
  "key8": "9X77AyDt7stM8E1s4h1kxszTxSVwUh1MqxKH6UHhtNLMJeV1rsqLSuPBM647QEotcZg7uEmwwBtLLhdgARjKfdJ",
  "key9": "4LM6zrwtFFCVL2gZq1TioMRASU4dWcRknx2Kihq4LudkCKwaiFJqqhoX25fGunFiQBuSv4nA1FSrPcNVYPn5pqrL",
  "key10": "36f5N1TSvBDj5pK1LbWuH8RGmAL9nKQP7wYEnLt5d8eyHzcbBPLauit8KZkf3HD74R8C1o76GnxYf9m9j1sEVTzr",
  "key11": "4xRR5z93wui7vTst2wM8ShgdwnNzi7a27EsEvak28mFrnUWmorkHqbH3yoa2Wph9Fp5qNnxexN842v2QyVS48mmK",
  "key12": "Kon2UWaKSsd5VSoUf2Qj8BCs7avPL93t4geFr3KAjCQQ8t74xQKEc7sZ22mfgXwweaN31HqeJiSKoRRXdM1ynen",
  "key13": "JF2odxqzVXbEsjMbrKiqR9Jw5iuDJSjQirgSoHscwM1sztif7m3NFwZMTafppAZhGtpQ5nXyzfvEs4xPU7NxR98",
  "key14": "2FrvEpDD94N8WABwmbt7Z5N5txw5jgzvkxy83LLjs6KSis9oyfiR35TDvwkjqv6BYAA6NFgHAvXX9EmLCJCAdgfS",
  "key15": "3NiK1W8QLaaGU3y9hVpYPRFWBDhtRafoY7PtgGLgy2NVXUbRwzYrzyk742kCP52CdcfNfY6p3hpRHag19zsmkfZz",
  "key16": "2yKdFhnUjoGG7iuh21AN5wFPrru3FapRx78NbNsajpwk1FDo6RZMVFqyH6UY2HYwvBo1KKU7w6oNfF6VUCqGiQdD",
  "key17": "5NePLfJPW3JJ3YXr2tYrcBuytuGKyTFfMntesfzBU7SSRXRChyQ8f9oPKTGesvfBtKqKVH5LBHqkvkSSmvbg1MZe",
  "key18": "2rRidacxzRKGQHSJPF4S6FRzmUynk5h2ZMkutWLDN57bsv1mSrjbfmbwzbdkjVAm4v1JxfcM1Qf8Jwd9HFm8FCcd",
  "key19": "2p5RUfxCvJH2BuKHVeWwstGbh9cFYk7YFEVXUr1E8A9nc1HJYyKhMZqpQ6jEwXeeXUf3wCzL496hXBYDJe89YtbA",
  "key20": "NbkzjdzAQNLgH9tt2muP5Ry6WHdwdrccmBsZf1yxBY8KLvim1ptKHKENr3jLE2MNWR9kx6fFxukvu5WwoFwyhsK",
  "key21": "5BXT6iTbQtT9KhPpo5H9esjtFkDcZ1V96w6AnHHSof5R8W9CrVmdCBEexrZHYUjnbpXeey3DH1JgVXiUuW56G6SR",
  "key22": "3icihFgFzvPgJmaNpDtVN8784QgRr5H7xGuU5G3sEKLFBsNnCAy2NoCX1tPaXavsaxjk8Ji4aV3RxKQrHpNMz1kR",
  "key23": "5GvyfKPD7nABAp7C85Ga1g9Eeo747be7jxWCLkfgGRNgkFoD27U47wonWhnwVsumRJ3pGxCKA76zzZawo1SYF1dp",
  "key24": "25TQbiSdDJ3LhxMqp4UkAwWhLEZfX2oWNJ318BRDHBG2rBkZYj2J9zNh7S1P8UcrE2RnTyuMK4qqQeNFh5qTagGA",
  "key25": "4QPJ1FhVD6bQaeQXtTs2bVs7P6xKKyDSTixkpyQnKkMB6oxN6FKWgFvPHEW3adE7MpubxueY6BC6MVc39Jp3FiRt",
  "key26": "C6QR5kWi69m2AaTKQqsuCzzWNhyk2PS8vWN4r4cd3yLbQyQu2yYUaN4nnWYsegVCP1AbQeHmSXWExYxN8GdEbbs",
  "key27": "39Bz1rXSiLDpgCeQhJvB3GuNDfm5F3NXNnWF3zXs7RCFnaLDcrKJRc75DtgMxe3hBSYg3ofpAkoDJ5GkSikbEF2m",
  "key28": "5gmRwc4byoUve7tgUducEzcHDU345o1KzHq7h5K6zKJncs6C6sYhEZiSMxvQ2vX5fZyRQXaWDTCnqiRV6SwSkbVS",
  "key29": "2dtnm6ZjW8z8sSpoy7597h9imzs2Kk6rWMrtSqxpY3nXhHLbXMCJr8vSMWuftV8q4sxM2kz9sdw3CbWsDqugeQwN",
  "key30": "L9RTxBbmW8iQJMjeSewZbTPReW4mENf69uKuCiap8Q6gd4H14Uhez59CQKhYK73Cfmi3GEVDMeaPrjFNnBQ8W5u",
  "key31": "JudV17wwZHid7MBT6RgghqwwVF28jYD7k2dPVwL2bXPhet6W8FvnoSA9zPVfAwrGqqrWh8ma2k4cBUYNW2K4C5L",
  "key32": "3hfGLWUyBADvH4Hie8jV9WSoUdm8VXXKKid5Td3eBu5W1NHcXi8VUaLTXWidLoN1EFzusyypkJSs4ABNLJJHmegG",
  "key33": "4AK6ASg4zzzM13gyQtNTXmwqWgGigL3bGgi7DJh9LCe1PhhUHd3fUPGNtUmjV7t3pJs5fRdqRvvpKjjMhPsCpJ3w",
  "key34": "3XUgRSnUiCNKMvuLADtFNmAYZB3Vpov4y5WPbVJCKZMYmUT31pfmXrUtud6LMwsMBsEfJD5ESMqhxiXN9ERqJ8iU",
  "key35": "4zjjP1LGPBd2rJAgk3m5P6UmoG6hvbPFNgRE8qcMapx6DJqyas2YHpZ4CosPbSPemfWwqqQEqx3husdaiXMEXgkc",
  "key36": "3vkaxASqWKJCHjdVJ3gnFAhxu8WrjKtG9f6H5nD9KE6Qae4YrwNbYrQF3TCe7u8ns34HVsdHEZvdT62XhfhRAzJk",
  "key37": "4t2h7umEv2dgA9ZP7gKE6PuXQwwddDEnzFfb91LL3eXqNNRWapgNpBMndgfAW35JJcCuTWpBQhFFqCYQwR45W14s",
  "key38": "433QUQ1Xreo43bziKeihiUA11uA7Fd2bAiWqXKHYS2i1C6jj35QjV4p8evuqdtxueiPJ16ooVs6Dho4tvMvaxheo",
  "key39": "2ep8yiifdKqmLK54SHDrg2YUYCz2Bq1ro4ZWrsBu6KVVSj77SCJbweDXn2ToMXHK2ar1EebvRjrxG9WxSEbXVC6N",
  "key40": "3iWShHienqMYDpn4ErCmdFzucr3VpDj9az7vJxRrwut18rXFYbKgUtYqUwAzohCU1PqBk8TYRx6QxBcj8stqRiQg",
  "key41": "4LEKbn4mEWiuuVpP88SvmYc3yk8uJVLetMTJ2VTNQBJNsk8dsDm8ShKHrxf7rjSqz2RoVGfGdr6M6W2aFvsZsXcp",
  "key42": "3YpfU6URh1UPyxKmg9d8UdCKb73obVokgkvbLT2sNV95RFyZfe2CiTwxiQdNaG9wfxGH7TQzsVG5GRdnJgag1Tu3",
  "key43": "2bdMCSWCttj275LJNWiAxLaS1vJT7bvDmtWszNesQwrwDK8RBgLMe31A5jySofMgRFvFF8MsBKyrxkXqk1dtTdUC",
  "key44": "Ji8UfSuJBkhqWVp7m2BSeknwPoHeGvgnzcrTPGm13oUBrdf347KVF4m49xd6kSrxn1mT6P1qhjQDFv4Mwd7ew2o"
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
