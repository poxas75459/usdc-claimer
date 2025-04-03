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
    "3wwaAL8hAFDsDB3gvP5QAeTwwykYTY2fXBfyg1PD7CRqgHKtN58aZWopEJaSVDV92qqg1EQAT9K1FZjXcMz2Jig8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55BQjnfAgsiddv28zUULDDw5qnQyRLSH5dof8hWKA5NoLptmDayTJtnDjuh37DZZTLZQyJzPjtVrqJDMurVtRTxN",
  "key1": "2nQcz11yQQiPBTb2VMxtrbZFsBUZV2mhexBEriTNMSCu9d4CXb1YRm6ypD76YR6W1dXALpFKT7ZMwnVGcEbCiGDg",
  "key2": "32qdx9pDnXV3S8XzUAQK6vQFh5zHzPi79uz5LKSmx5GmkCcvxcx6fX76hGgwZYmLneqNZvRG9kj51FsE29YDW7CQ",
  "key3": "5TiG9uofG3i3nEx4SN3EK6ikug4J5SG7Vuc7J1Qxxe2L8aPtUqyvdbbfA7vTLsR2Y8bHb1GXF6S4gFgb1gW8MZLF",
  "key4": "3HBkWvCR8Ky2zhdhjT4pPfB4now2Lvzr8AEPQCPnjWjxCXWX58LvSzXdHwmq21czJ7SsoNmkgH6grBaQDVKpPJXm",
  "key5": "5WWiC96hKVM4ERTXobcALirxbTSJuthoA1rxNbH1tz1Euf8L75sTfiDBuUHUBQG9AyhqrNpa4GtR8s5CkScHtvmZ",
  "key6": "2u2SV5J3MJ5K1Cvh339xhoa58cYEQZpqAbg4mb8mq4Qe4927GJuLNLgvccoBitgQGBjMtbx3ikCghGpTX4Dd8ciY",
  "key7": "3UvEKMWKPWn8tb2rsmekK1DxCvhuepvPzJCzgQE9WS9rcEJubTwudydFytDyNwhCEZgur3mypoHBvgcUzejAGVwN",
  "key8": "66XE9gVWRNQcNHdM6J3AJxUwF4gtRgv1ZmHBA7ZDvkKNHfDWJzL1F5mLn8o1rhsaEGud8r9X78JkTEn7R2MjqYTS",
  "key9": "4csQQ7T2do3owg1inejb2zrDzKGBiwFDqd5oHBXM6S5JNiHxZtEsivnuQb5SqYFrYYLN8KgRNYSpHZVXW1tWdwFB",
  "key10": "3KaASnbAKvHj8y1zGcEvjtkSPRYKvj1TYMdcFhkgfqJujbznSm6hXoVvun7DTAtNoCnrneHP9o2YhR5VcGy6GoEk",
  "key11": "2HX4onSjWAZw71Z7sSoJfctoQyutLmrADsTfEHbKhMUw3PFrUozpUpXsZ4o6mjXkEXLGb1f8hzRysyXdTMqSSjSr",
  "key12": "4HiAS4pykTCZrygKzm7pK9qxtArio4wDidsiFYN9JuXkBYwYUpiDPzKwZSeU3raW1iVDYAe97n1DeNCyNF57m7YA",
  "key13": "55cvgbtTs6QjnZQNVnBvoYdANaaWTcZymcKpwYVUzZQ8TQSbQn6jfTaBr88AWtVX1Xf8Gjc4eWazL2Dh8cAnRLxG",
  "key14": "2uB12EXT5SV88KxFZuBHTQhR8taYuxSVquQZxUAVd5qgWgzchEtSvMq3SY8nfyYiJJcd8BSmLG7yh48s4qbMZXPa",
  "key15": "GGq1rGAgXhuKwJ7euSriyyju3TotE9Wm18s52kcrJwzHMaYJ72EyfJowM2LqZQH3D1YgnXEfXU1tciJnxiU26M7",
  "key16": "4NZ6wWqFFYm7j1pYXdQPw8Bk5cu1Hq3pFSPtLroXw5BLrSBa6VEds7V5Bx7phD1fzpYHuR594gTLWV3K4vRWsust",
  "key17": "3C11prMcFrvaxPBxzNhTqxqgYmeH4spXCYUfLbqAn3K4KtAxvXAKyknrq4rMeeET4TyoxvpFVkLYvF84WhcppbcT",
  "key18": "4YHD5bhZbpEC4M8hzeWJgo9GXXMWK257EfCHRDh5HyLFbrGeDE1p7wAJZs77y8aLGbkFK1VHDx99XKPEW6u4PqF8",
  "key19": "54CkoDzysdoKDeD3RLgEmX1gkB3cRhiSgvqGWzL8nYWqrZcuRgrYfVoVVXM9mnY8YdF1LpRb55XRtirHWwmwxe3G",
  "key20": "BiPeiDSoyVLNt3tLrioLFC2nhgm1tJo4FGeGRd4bGJZ1z3F3Ms7hYWkDeHyRGEHrUjb2q84TXXnn7wK76FEBWi6",
  "key21": "4vyEtHmFmc14iizwFyHd8pnZgg1vxXi7ZRfp3AZAdtqwXnhPCgbF5J5g8HmBx8eUNbLdoRr1YwjYtwh6WQgdU3FV",
  "key22": "2Xkdw4KDqFcp2VWV7w92441huEvhZ7FPCkfRjA7M9smyVicg6ox7GY3stDKRPRab6jKADw4LusjxxGhYntA4KYYt",
  "key23": "4Lsoa28HJaiUmKk28Wt7wXQiufvXVuZHsAzxuUEQBivh2r8d4JCX9KoK6hmiv8YWX219MNN4Qa92ujhnfUxUWfNg",
  "key24": "3DCEKPTxjw4fJ6PJ4CBGggE7JCTeVTCdWmRi7XZBrfW9MtkvaVyTVTYjeDiPJbC8iVGEQ1AW9Ek8WmFADQ9cawJS",
  "key25": "4jC7vSoCUfMrnWd2UrNjcGfgsCHptMaGR653vWCW8LAyD2y3G7vhGZoB7MsUCBS6j4chvubw53BPzsq3vvNoitdm",
  "key26": "48cK5RaGxRYEqgF4sXkgdh1dELDuCKd41Gi1LttU5fLDkacSEmg3Tnaot7THeHBhGmMoF5McvQReR4QepyTphPjV",
  "key27": "4CXjaFCuThVufXgCw46FtvrhXhe6dV3dc3Ac8d24SFHSQXFZ1xBz8jP5rVH67DbVkKFx89TywbiHPGpyY9X4oQbV",
  "key28": "4Up9hqCPzft75z9hBjVZbWreV9fyKJ8rtFEEQuRLcw5A8j6XnAhTwJDgPc7bZRDvxBEtSFiaeDz2WUHncm1b1erd",
  "key29": "tQdU7rdaPJb72YfXtEXmLJRyU8YfuS4F1jPQTPEbkUQa49dtNNJev3CaNQubzytAbKCkGTpzbouQb6byHxwmSe7",
  "key30": "5pKQfcgniWpY2s497pGkPKzcACqomHx5WJMS8Z3oDcCw1jymMtWgnVwWuheNPBs1ic2GL4eMddiB79tEKTpYpetP",
  "key31": "4bX2TBV4Am8wPsznNmpDogPQtfxhjjhxdoBYnj3j6KnnQWk4n8aAMXuiHzUimZXYKzxHJ3mFgcGkMC6CBYab6mU7",
  "key32": "3ruNnjMA4nLkaH9WjiCNv23CruZdpHwSFAB7JwhJKTrqBieTGmsR1qAAoKKYMnoyxk8XSWWLmDh2YHjQTTmDDWGw",
  "key33": "Gzvy3pZL3p5BPvLNxfjPFc2ZDB5WizBeJcKqAUSEhVCGDpxFrMWnW7n8ZUdkBZmfuKMeF2QT3e2MAsjQJsJE7Sh",
  "key34": "5WzxvKjrm2eguC2LnoZMpDBJo7RuA4Ne9QNEaYUgPzZvJpdegSME15j4RTFBEha8fWz7xeHSzu27f6BuivnUpyUX",
  "key35": "2weAhtfzgG59LyLqxE1mABL5Ms8VewM1Ps25YsAj73xDdLcvej2aZBQe5yWd1NTVLSMkzDrkhxoRL5bruM4bZhuc",
  "key36": "5jVepXBoMGZ7hNx56JUDt1uYGxNmHDmck2qoB6XozjvHMfAmGV6xq6X33BmDv9zHwbScappuZWSBRaRbdQ5QmQav",
  "key37": "4anJvwmGJmgbu7hi43ry7YWLqysJLzZuqeyY1bmxsjh9Q7vYQ66bEpbbAB2BysKstAX48Dhd7wbf4rKi78oBNrLP",
  "key38": "56cV69syxoSzGhUAQ9TotxDfzEgKkaWUJeQd5WycgCRXgNWWB67MbgBvMWWpQCWtKBAitppEZBEkmuYJG2B22QTh",
  "key39": "4ebua53t8fzjkVojB8rQUMej7CYicsMTiAbNvz8Q4UFo2fSb27DpUc8mGoEke56Av8Z2Gkd9fk892uUH9HmfQRNY",
  "key40": "5rcWAcijGx4o6NidueNd4PwMex2smBTENQ53P9KnPzyhSANy2FCXrH9MSYyLZUxeKDpwVbVXySXC55ixvECXhjXd",
  "key41": "4rUkdZA3RTyzew8ucsKHGxx4TG9j3ftgsHNiA35yvS5TXToKueYkAV9dZ1Tg71gZa7tmnhWfzHxF1bCToC72bwZx",
  "key42": "EFCD9f4ZSWRPAkVK7d1QzcJjJ3Ro8z2CQWzxiN8ujfEk753XY5BiAoVyGHifRCGfDdnpnbg5UnBmwbZe5mzgydm",
  "key43": "25696ocEdrv3vym65Td13upvTbXDrjfKzKmNt3rS5S7LQRxLig1tPz9HcjaqukhKdnsszqH9zL24c1tV2xEjMK37",
  "key44": "4Vxj5pAdoeuQkbGvfZ2U6fu4Nr5Yg1hE7GmU7vGs19Z6NXdEwJgAvMXdwyEenCcbtWpxi6jq2y3u7zFYe6fv4mLn",
  "key45": "2KiCHokd9FMfrHEoraGiz9LsQNuqZnRxsScp48fj8LSYRQUvuBPg9T5QGtonj1zLwrLXzULPoPKoXEBPmpDG7KEK"
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
