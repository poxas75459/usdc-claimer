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
    "31Q2pQRB1AaLXKopFsetcbPA5KqZDrTiW1PGb2VjaiZmknxywvWyPTEQXFKau8pm1pGv7YGh3NRXzsnHeyNYCYtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTmskaRb9TLmCFqT9PA1bdgxetmNGuDzr6wn1VvJ4HCXPPQQPGiWpgTkGqdgXaDG6BBj75DVtZktruuMqDPu8ja",
  "key1": "2yBVEpuLBg7NVd51WTfsegAuc4SwFaqEppok7adY7MMhGCvGfiXfAzqJq76TPmq7QFRJaHwDAkohpu5oNxC8TMb2",
  "key2": "FcGDBwXwBhzf37BmRu74k4b5r5zwSDRWbDEDo2YUjnCpNX8RcDNLxwvjWLT88gS7csiP8EpeKkQYWWxvVHJpvC5",
  "key3": "4AjwHRsmhi8kwbuKFRoTjQnp2zinM1aQqbiCVHp18WKs4SAWWSSQ5ps85k6Lo6sCDRpmKzy7TjczeVrm5LnQSrDp",
  "key4": "zfJvEoygjFu4WYWev7qj9VmMSJL5HRsgexHWoy4nSSFBhJ9gkhYLDb2NENcvJvxJGdzW5yPRgKkNNKZZBzeFC3o",
  "key5": "sBV7dxDoZf5qF3gn2fS9EcJACvZWT3LWhgRLQHyZ87EPmDaETCkhgbYQiNKtbXdA8zAqyaguMdgo7NywsEMKKob",
  "key6": "4vFWE1g2mtd9tCuXyNtYrTvtT6rkmdvRckpNbGZKCFtjUvCMa5arn5xLxL21PhEvSfZJnxqYDBVNR8EZL1PHQjrS",
  "key7": "3J32P7EsaMEg64nbVjeCVQJBNLiv24i398vm9sFZ7MCDamETpHWo31Ho2ruuRFXoja7xC9RVUqMJZpb73x6qxMtk",
  "key8": "3w36vCW9tSTTPwQBKVMUw6eUyRAAoqGQ8gD9KggSJkHwaKupBXuAQS53EQq68Si4i5wdkSmd617mqSGFKbgakng9",
  "key9": "3F6NF8JKSdz4KjbVwLbAs3iBHz6k4juJr9WfLbMrqNzynBRYwNYW48RgSSuGeLE635mKgUWnPwTrP9GPF5hMEMr5",
  "key10": "kEH54QSjkkWCjNJnPdz52883t3TimiWkD43u2h8KAf97vsEkzBzfhoX7rV1EjTr5a57L19pKaWX3jPGAZD7J74G",
  "key11": "28cgkRkBcbR9zSE9j9Pk9AwKAF83CXeZTBtHrydNUxLRRVYxWqUrkGE4nX3CpJjZzq9oFmPpegQbzAF6LLw22B2e",
  "key12": "2vMpd8ss1pwUwfgS9AUVf5BjEarGwshtRdcWeU86Bvtxn9rjawD8CUNK637Tfn2N2ZCfffnfF9BzhmdMNKhbWVCy",
  "key13": "2wymZ66RXWc6xrcF6hBvcWpsRMnnEUPvUKRv4kn68KTKxjmD21cZ3HigHuacTLiCJMvebKV98L9aYzT7iwMbqCD5",
  "key14": "Krm1DCHUkTrAHBBuaTM4USo4mWhdiSZz9A73epPkJwEYrjFU31YG3B7rXb3TkW2vRxDEW6eEFpszW6RxNAaeKeV",
  "key15": "5HjZpZ6E8bJ6vMkwf2as3m6FXbn4Fc6dXFkRaHPLod5pYVJ9kyuRpdXojH4gW6BdzCyHK9UGhUC5j9dqHSUPSbWL",
  "key16": "52gge8k3T7UcSfqYgpxZseHpmhyihBk3FQUq8eKDe7T3eK1m37PkZJhow7E5sPxC8oitbsC48RbRXeRHRuMPBbX4",
  "key17": "3YN8ry6n7wikEU1pa9GNiajn8LtEzBJZezHHKn9hZqVLuz2XoyANtEqxRygBmMwaeKBvWctWvbVoL97HaRSU4Y94",
  "key18": "5SL86X85DMipsvhn2g6nboNiQSQouB5x8eVq21HAeRMFnGjzN4H41J19raEHHbv2sbKKP59duxkCaUya4LzB5GTA",
  "key19": "28zwZnDFkRCZg9mpWvuEPyuV1kHS2qANtzFaWEHxd5izmtpVbc6ezxGaHZsKtZPPnsFcsA3EiAD2vhFHFu7bi8NC",
  "key20": "4BdBLEVYgQpzLNZCiuhZU5YpvkYqgwtSFZ6uPrdpvL9Sdt1UYSTL2ZnbFqbdXQuJkoKCjCdeMBE7hJoifpJQUtqz",
  "key21": "3Ja6io4V6x9yJqZ87mvv14jpQLAhBikFyR2pqBXEppqyb5TkzvZYFQMHxQwa6wGEbx4Etv6aGMHUrofWHYeXsoeD",
  "key22": "5nuDysFvdyVjMifvx136CAKQjgTHMyPyp2BeYg9vgdgDXa6bHBMD17Yqo24tHQT3oG9UDLW7Lbk11WmEZhx39mmf",
  "key23": "5zyxqqVuoD3gUrJzfj35QJv32DtBk4brxZwGPpYVXK9BjtABtwDudDYKc58hSG1UsszAvn9DeDcPBfQZi3o7QvYx",
  "key24": "4hKxr3jJpfkevC4FQccPRn29yTpMp5MZ4yBojGQSJ9D9UTiLeFVbmWHiZUoMLN1MKJAXGjKKNnNhGuHtQkvWbGU",
  "key25": "5KPeMBMn3B9C7XAkjbXR1SZZqhWfDvuCox2iSg3pE38LyumZVXGEpYeEM4qBdms5U9QTJ2XHbncGXExKDs7YGU6f",
  "key26": "2L24Matwe3k3VDxCzBZsWJQCZyotLxoTLrDwuGrqcyFb6vDg4PzmmhRf6Qj2YGpSoG4KFw43PPURFbSWdycrb2zj",
  "key27": "5JJKX8cmJ124C4aK9JU3p1WNAxMxirefZWm9nFdqn4pwmbVKupRP6DYddsajNh7CPXF3CTXSJJA5JZEug1ZAEiXZ",
  "key28": "4c2gKzSPEZjVuAue2ZbXYPrMa18GwymATus5Mi28CPhA9buxaoXEvHyqn3xha269HmFBwJ6ujp7f6joZ6sWMbCDt",
  "key29": "3DjLWsrEES8DaBkHZo6ixGG96UQDANv3WnAmjUygej1CNctFWgUczAVQ6rNqCrJjygBAnBiZf5YMQgDssLYgNveE",
  "key30": "3ppxT3Xrdo96t7zX7JQeAZDfCrwjRh52WUmGCSQDq7B3MHVhWajY58LAmKPKiEFjiWqANtoGGRAp9ZMJcsuVbwGv",
  "key31": "3ZchjUhPALJnPsmMSZPbCuuR65VvyDw3v4CYGgi1adKtipALbs4DvKbFgbEfFHChqEvF9UYzTWQXyTNAgVdE1tcE",
  "key32": "3Xt6AQsMHAvfU3dDB59jWbU5Beq3DqMuV9eypB2e2gSQniWspqNqNPLsFdgrp5r6jBkRiqiDbugWa7EdDefamLb2",
  "key33": "UtATMY19CQy4LsCKZjRnhrx3fDy4BqT4haS8NkmdVkzq9URxXFQhZQ7m5vjsGA4nxcYrPykb9biZYr8yuCumLsa",
  "key34": "5gVjLKN1RB8ExWsr3q339LQVqWCjVfxGTR1py3V4uxmpPKsmi8JsobRJEb5qDsXWKE5yzw9FSSJTCe8V7s99tGQZ",
  "key35": "UsVbC6YehrG1wDAvJ8hBQdkMVLNzoWCGEJqzs7eeu6uKd4euQLRqZao3De25LLBCVgpmJ28LZvVyt8dAfzLiZb9",
  "key36": "2QUPgqiTGyXzr8HW3yf7K7ymBPxWXREuumRsf1hJyWMydv59GJYHpeR8Z7Wxo9h98sY7Xe4j7c2H28v5ywG3wkYH",
  "key37": "2QiCz3eYhiNGYNuNVZup3ZQDoLKFiYWg69qtWP4X8hP9khGUFZtrxXFa1YKpKWpuptXzDoxRDtvZke6TKiAgSYsB",
  "key38": "3GCPt9GPZD3HNjs2r9gM1gFZ4VFx3L1pPuAohQStdUPNxovEJRkKQxKit9RSFHjtYVXYfwGWivrA8BHpecHfFtqg",
  "key39": "YE5hD5QcKY2pv7WwzeBob5euLPvd6G2Eyu4NP3ZzsXNjvAfkbgT5qjiP895YbkagzbZN5JNio4CxhYhpsyuB2sy"
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
