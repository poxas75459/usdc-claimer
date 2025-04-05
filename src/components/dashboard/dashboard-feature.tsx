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
    "2s9wKFAuxGkgAeEmdbG92XR8s9eF4tr5iMaHSJwfieRN7PnnajD1KkJkLYCgHQAbmoAZST4bUNRhVaAWBgKv7PnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29H7c8cSU21k5cS7vWBLC94ennSeevVdRvfQDqd1gYbq15XKBcL5QWmtYtKVFQG86rpNFWKZRqHZjxWazTgYfUxC",
  "key1": "5jpU5hQ68VNWGmMM7thLcdGuFpTir5o7W4DAXdUzZc4JTJMBhdbw1mkB1kTyEj2tzzsRqPvJZhRGv7xDY5R2ce1B",
  "key2": "2F1EtTsouWvfeNZzpN8GBkYhdpDz1xpzevydk7vpCrCYkTXme7wnkkEihK2Qikg1Ua6uZqvjzXJ47xWg8s4GSopQ",
  "key3": "2PHNKenmTCo2ZRvQQPreV6aPKCjCGxpGuM2tFNddkknFecn442LNedDxqUeyUcVqeMaNzu4d2sq2gWEFRDsFJsGs",
  "key4": "5PwL78ayDuxQFjBrKzN4q1WQTH35QQntmeLKRMG8ejZCx84bkEs52hdLDQgMLj99eTzuuykh8Ey6Q2WkD3TR57Y5",
  "key5": "5JJVYzGpDE96DP4C9E15C8ZbD2BGZRftkCUsi8hMi3qsuVfA1Z8QMvRXNQjJgYEFZDF2BfgaZDqVbYHgX7f9zcaE",
  "key6": "2EWGY3HnReQ2oj4wA4Kg4DHvtZMRMyK9rjmWi9LsShRdcX8BoeJ58bgMBGsarhMCxtacynmyR4KdFU1Xay2Mcm9f",
  "key7": "3KBBYe3usgsFnKCACzeY7DLQct4kikcueVvWXrtWuNXMUTQviy9Qr9DpaGd3Mhyi3kU5fXrmJVC6pKWwRFNp2FQW",
  "key8": "JqVjhhXDxv1ru6nsZs3dcP7fSHdVFpp4aYxWNvqeBYUMUA2PkgVZv5EewLxNkybaCv5Cp7ibtiruXnb7JFejSMv",
  "key9": "2qEq1kS76kzDc2Usus3kcj6yNddF4YXiGJMAA43vy8yrpxowPoYwTkQW71rDoZBBWsTsmGepDXrmqT4rVhLL5hKy",
  "key10": "29eRJBceQWEJxnekpN5UGLcPuADWGVUGJroRLTXmHoAETybtAnRDEL4t6joD3fsX895YDD81FhTe1Hr7HgaQV2vD",
  "key11": "4S4itigTN5KJybCgR8dpsmfj5ZPxMV8wJkk6j6H4VSzhZBf6rD3LbHjx625qMEEPkkQkkXGpv1d1J6jtfpUsQEU7",
  "key12": "2Xz8RAxxXaJ4HDZjZSiJg4qCSvJuuehRXunCuN2F4tLfRSgXNw7wwvB5GpwmgNZt31uiXj2AbLv8LZnK5jNbtGo3",
  "key13": "3y2D6NvA6jmSzwkqN6X9j3C8caPwa2HfTSu4MkuSzMq6FFM6L8fe6mKdyqUp7k2s2dQkhVrkuD1hsnf4sLGv599z",
  "key14": "5KYwQQ78iHHsatN8A3iUXT6eqqkpPz1n6wWxAdf65CrDrPT3MYCDgub3NYGbXT5RfZYeiGQbLrasLMsXD5GJVUy3",
  "key15": "3BCZdo3EPy8ZAgCWWSLmJpeTFBgA8CEoLnT2LJKN4kXakryczpB5BBosyfuMnkB3koJMoFeFxuTVm7b5N65q29t1",
  "key16": "24C9CzBp8TtMUBb61zZNqR62sZaZraviXBdgWsDCGBC8wpyaMRJJBFhakxXoimFqTRoyysuRBMtMAqNxE9Xh2ui8",
  "key17": "5mR3ex2WpSKJNt8YuzW6fkEPoFw4ddDypd1ThS7PUYboYm1mzG29LHohMicUgAoB1Z45Mvc2f9HiBU2Hqqu7KaX5",
  "key18": "wBDYw2s9wGfPTAispnBNGN3rdEPCim5j7zxoFLyce8ymNsmwAiaMzVGnFoRLHumQXAUikeNXPHcezdVyAQRLEzW",
  "key19": "CX6FuhAhPgAcHeNz1m1PpMifXpeUKKwhD3nuVjcDv4i6WRkZjQKudtMAFSwTdSiJAAHyUQBUQFh7J1PvoeMsvJ4",
  "key20": "3x1be3p6N6oqYfRHcqUD42Dr6ygLDzAYKF1nZkUzJFhjGEuhvMec6rTSGmuXW6i7BbWuHT56w8bSGsv9vvCUJze6",
  "key21": "543gMsiJPRETyusewEsvwuGmjZQysg8UJa5ua6WZyBrj5oXLbr7VGZNxSWJfRrEQf7XtAP2kCfEcQTFiLpCvC4BC",
  "key22": "49NrchFsKNABq9FbgunDASV1VBDTmeK475wRACSEwq9VDRYBK81sREJpr868QzGMQAxhyeyn3yxWpUZSTvvXC9W7",
  "key23": "2ovnVmyyUkjL63xnimQDgmcCcwKQU4pCBytbV7YaJyxMQnQF69v7CkSbNp7q2zhsYw9wuVBk54AxBCQ78oahgVce",
  "key24": "5V9oEDq1PTUGVZ626H8kqZ5PvKhMe1o9pXNWyH72sRZbTGXWB8UcPz8DVF4PkRirWWGxcYNWN7DX8ysCKd3tZZxi",
  "key25": "5VCavhQgAUjmRuxQtroRmHL5ZBrrL3XnM3PbCViWYgJeQsNzsVDoRoSHwx3xTtps6mmuqT14uqXJx9AUG1Lg2fym",
  "key26": "3GRRRYmUCqcaAogSPaRUqfvs7BmVp5TN6LFK8JbvgzCh7HqDL11gotyxDWhPT5yF5K13poa1g6ir4GC6afqaQeFY",
  "key27": "4JKhMRJvcr1Xb1zRviYkiuRZkimDa9PoPaSEcL63AVoT6MGLpDtKGTXDgYhDtCMxKJ3nyg2Wu656MVABZVKxBjE5",
  "key28": "FqSmqch81LXyCCv6tdHY8Fiv2RS3XYZNgDvEwcZo6swMvPyVTKEiPFeuwviZiuFa5d8cGYzN3w5rE1KZipJXVji",
  "key29": "2ZX4popfczTnMNY9Wsh6dZPgLvZuKbw4PG4kVgbR8ECNtMLriSHpNK8he6abe6xme8iT8rAXjNDEJ6jVCnu6wZzE",
  "key30": "673SNyJ4kK9ovevRqHWwHnLbAc4eYjcErGRjdJoNJp3h4t71G1ZT3uoCv2N8GqPE5PuaHvSa1JvF1qUWLZPwjAg4",
  "key31": "QXPnpmLAuBf4eyjmTLygAFCbiPdFuR1Zg6HXuNzAJUvFDTf4yWW9wxgjNHiMhd1thKLhyiQEQidfW7mG5tjzV4R",
  "key32": "21MZTZ97oaCQ2oFCHGqHhSTvWvUWxQtU5eWZ2MWRcS2HqDmSy2QnrG1JQJAaiSaBvZ4LU8ogkHPUZHEik7UqYhhU",
  "key33": "32NXsUYiGZbzQkXWzPNbvbESgSfsKB68TJ3L4VGA9or8V1nP3Sg9gf6nn1xMPhdCSSVbjujFcCJoJxQX3Epcn6tq",
  "key34": "5VXuT8SMFQex1dcD8mF4MHtLKiUUfL1FdsscavAqmSeHEqDhhaEbf1zs73JCQi9dz7okR4E1CP5t95Qw9q9ohhYF",
  "key35": "YsbxjfC48f6Vys8eneJbVBSFRTzswdKvdUREXJhSCN9A8kQdki7QJHrBRKtupZVrrAFWE9ZPhuSNfVMRZLY2LPZ",
  "key36": "4p72DRpWLLfAzBVfuiiQ5GH7cYMHYpXdidYEXKjUWuX4dy4hRosij1p165xkQwzg8P7eDhn6yrsovduQ7nqT6oV2",
  "key37": "2MQmFPy8Kz2JF4tssQ4bP8pZpDLeotRuidThLNREWNovWth6WehV4wv71fdDvvob8khZRj3jYhwX3ufugHvUxT5a"
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
