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
    "smcxjYGx4RYUTgpCBT944sxx93PxxVJLqUGT56ajZqFX7ayyAHF4p9XYfAf4ix2NeKfc2vWbHfupT6cadY6AmL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZxcaUANbAM8ytPqS7WmaMqyoh8abejtkVat4pLPaiVe4RpgmAryxHB92hBFr8SyDssnQckwtXCsjaYuZww58Nw2",
  "key1": "3eAkkffDX7ZZKQZpqo9rkvq5LzJx3mUHcCAt54biRvDoBfosaLEN9XhQFLkXNKArtmoBzMmjJ881hVHNJyCv3kGR",
  "key2": "3ujLR7PqT5SrrsBUBn5XvfxfH3e9T57Eaq2WaVa4QLHQATTGWekmv1aLR7JpUu9aZcS8nV4NRu631GnCBxNUk2G9",
  "key3": "CMXnSyGEjUyVX55YMJaMV5Udh8t2mNvQLJJjFa7Ra2Gu6yDCDY4uL7d1jgb6L6MtJd3CWQPSQHm5pkmVRUMnf1y",
  "key4": "2ErdTzgcYBXQTouxHcbVXrb8DqsEbbq66JyRSbgfmPgCNJsWfD5PqGah8KcChpLefmmDgF31MXV4M6zi8w6DY6C3",
  "key5": "31JduW2Zi54pZh8wzTCwcC5qYBfoCd2uULuX3ynuUE6zMFuShwKmUMJ1ghfBF4nv4WkygDbampGuJFKWWyMX1EfK",
  "key6": "33ZqKKi4v6sYZxk9jXof4wTejExEArbjufAoNVxppbWVUFiciifo2iGfyGpUNEDdWmGnaJm6JYDpmZvg3qPui5Mn",
  "key7": "3dYn7Msto8CE7ELCPGeRyiBmiNQan3hBy3heKcKwH8whhYhmJjK9NfLn25XQGaVwL3hUBPA8CEqMVVxXhzByX9HB",
  "key8": "31Kybtgb8pL3r3BksRAesosAzjLgipZfnBKpsc6u6oFV9vRnnp51kiVwcG7w1ingHDgtZvwEqsK8Mq4pTqPJakgL",
  "key9": "B7VrmWAtGuyMRKYfMnpwnxg69s372tFEBdzPzX1sRFjydc4x6pXoDppHMaUQ2tVE1AHQckCCqWXngYJWwUZ9waP",
  "key10": "5wFes96CMs3mEtpjowNqwfyMWHipYumwfbTjJoBvZbgUXNED3dbLRchXKVpzXnNWNYeKQMeZxvxkDtU3Cnh4pHT5",
  "key11": "61tUHzGMqRdF9GLFumw9fRGqhYoKdHBK4bRrLDQg9tAWLzQPz1qBcXhrmJ23AoVF9NaQpx4uwbmemjvTSGWiyvv4",
  "key12": "3Upxt9QNGLEbxBkA87zQWzuka25ntQ4SS8txL2Bn4bnhK18tjW66qoWJd4gwMW1JxbUuy2urt5C4EAuV6y89fQxx",
  "key13": "4SAB4irVNpY1Y2r6AYnaYmuyE8CK1pzpk2szSXcu1Y8yGDmLbbgnH6XdL5P9SvNhApzJAFgikth12zwRszLXo4Xq",
  "key14": "PhbKkK8wpFgwj9T3UGbz9JEAa2MBRPQY7kqNrEfgj6hNRZJBY9xcMGBCYeQHpCbJ8xL4VmYFh4N1GwiY9SoTzeb",
  "key15": "3c8py6tNvfCj5yGgbbaisHAGvGdih1W1gjXodwC8o4gNSrev89tDJxSkaViWPDigzh1ABBoJwCGNrPSnUBxmYyxx",
  "key16": "4A8uXqV7H1awZJMeB2YKkY9GuYDdWoDaLT5Ndph86eRft2nMWd7MkgjWu7WsuzLUdKmyV5gD6AVksz8Gj97jBx3g",
  "key17": "5PekYverxFfXSKnxP5NNpcv14KZHZNZXXgPNa9xykLGBz5Rm5fkaPe5p4hHSPeF49AZV3bMdTQEyMzpmk3e6RWhQ",
  "key18": "2QJzuXP5PWs1YMVJNx28QdDfcN3WVTuLkhW1eCDB2s41KBFVaEGT69NGoH4sqzKoh5xsstagf2Eod763aR6BUADz",
  "key19": "4EwL2Rjm9bK2nLMqZ75STNFuojVDFAjfDEjDMqGrA5nzrkWVfK5RGdMhHdavaWohSpgQMvGA6XJtLaAdnXtz6puM",
  "key20": "2KLyghEQtucVuaSk7euLouvho8f8GnWbafgMnT9soScF6NF9iDt5paaz5kzyc837m9nHc3CxfMjkGnK86h7H4zhp",
  "key21": "5qWznuv5UJd1zyEqtHpzxTgCrFvpfsdqVEsJsi1wiS8pV7idVEcXe52V5wFoide2kGre8g5TgaKsbPC4yuxh5cNF",
  "key22": "4ADtYsmgBMDQcwS17mZdHy1Pz8KK1cxgpYRF9do2SjgTfePhZz77nKXUBNy4bVzvKafKXgWB44EMZxNNZq6yFCjG",
  "key23": "61c3bazpFewxG9AxdN5tRTzrnoirnw2i9W2jf3GKGEvnF6Twei1dKvwNjm7FMqNe4RQcS7eW5AVxAwyA1mpi3EMq",
  "key24": "3QpanESby2GbneWtMahiwJ77QKay8rMLhmdW2EE4ZZdxakeRpenxzs1QMeaSLZK6qxhYcjqgswU47D4cG8xGRs7V",
  "key25": "4Wbogs6dkXn8GsfkGw68YsshMRjQjR8f8w4YAhomErsFPabQLLHC7MW3PoudeaWftf91JNFoXJKDyWSKzfTWU2mA",
  "key26": "22bVympW4nVCnvjcchc26BXXUtTiw5B7mfGAjKewfgFQM4ZiZ57fwAcSJYPZxsmuecanUMsnBt9agiEDqdSxiaoG",
  "key27": "2tdHSKDMNXdWXZqF4CBBbBF9t49TnWmXDKimtcPHEJHcoHMZraAvf5N2sRHf75NYyap2cBoHUE3Y4gK12YeFoGjs",
  "key28": "3xZeBSJJXeqzZBxrBhptJwVrp4vNwQQGCmvfGn6JAKUGhFBpeaq7mz8NxwtLNV8oM7zLK6LXf2vdgteqpGxTJmYT",
  "key29": "3zHv3rEpZAbFgZyEyTeXBcjGHQbj164m3NRivgJVLJ2boCPqxG8u64P5Z5BF26VeWmGpY8GK5UY32SLJAeFHtgJh",
  "key30": "4gCsC1UWoQiPpKWPzzvJN4CY3Dg8dSZfRi57SznHMCJC5LhjHujBKcomX3Wy76iehB9KCF8n5seHAzY99cmZpSWW",
  "key31": "3x9PRFtczCU3SmgHoJy4LV1LFFLQ6imnKXgTPHJ2aH82k86UssRDvdCiCe9cyrmZV3bM13NN6YCefiQZZUMNKFis",
  "key32": "5PcQJMhp3oTY7UvcTwEV8BVbLTB2ovqArJkwFiPTJYEoNGCXnjzLnGJ1sSpnR1NWCMVWpC3GkyrL8HFwb1KBNFfs",
  "key33": "37saQ5h3tAaPBP8eL7fvVK9gD9KvDPr3nDq8uhfYHRhhn6vdUjCLXoX4hFJU6xbB2zr8hDNFaobDRfn3Fj8discc",
  "key34": "3jbggKY9UtF9NcfacWm2Zx5orLxzPvVCKbuvGaky9aRs553yqBwGeYyfxGGJdsgwWD75oDFhNSoP58EvP19nEpwf",
  "key35": "2e5A9NkUbfMsdKtXJ7iufHefTmBpoHEVkfQYapKFLifKykVYW2H2sKP1fuT3Bv1r87m8FPAb89g2ikMqqHuNTVH3",
  "key36": "2wsV6G8Wb7yGfmcr8pHBvP53FXj8NRcPHL4djr857CRJoz7bJ9LKTWzZoKRVdTmrBhYJBxv9nBf1DigXfWBaXMtQ",
  "key37": "3jZKKPgRgYvZ7tW3ZRfHoQjKJLHxp1Fsua6DQmT69xU2rWdWDheFPgV3jfuRyLk8HwnHCPVRotQonRb1fEWmEYZu",
  "key38": "4Ph6YqE7Q1cbgR2M24RyqD4rxuzQhj9Q27gscs5nMgCdVmQRrxwMB9jXC7Cup3GrssKboFfqGrq7RmTV5hr3kYTK"
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
