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
    "4fWhb4FReZLfqbXYDAQ3fiSsntFrArF94n7WzTibSPjw2B48SazJ35DqNebjyinEemAjLJS9MeFDNq2U3fH1c2Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYJUyrGRwtqYkBXe5MqwXanP4zyw9B9AroTj5PJ9oMywUU3t9whUbvZSoFbd1Wu3RAGxNyVaLjvrnFCetBm52pq",
  "key1": "4CGywvAXJPTNX9QrVMG3J1zSgSLLwhP8pJ6275XkjA5Du1qsXwGLVybRxfaaz99vuooXDZhASSdidZcBrdAHoevc",
  "key2": "5qZDFQDyPpydxwbhW1TBkUHi2EU7yYDof1RkqZcuixKtrdD8ZVr5N8doaqezxG9hr3gY9bFGWgFSEcA6MCUHAQmY",
  "key3": "3Tmxi2TvzTdc1CEtsmySrtVkvSeFDUttiscCi7Ukajn4kz5Wt6eT89o7WifRAnRNzidZRLLAuedDy1gAChoG166Y",
  "key4": "ER5YotoJHooQ13qFX1UbiCxjAhS5om1GppN3RdjKRjJA6vnSujgCr2qMiDcEyedvu9GybiSSfLycfpGn9c9nmP6",
  "key5": "28M7VrSGNytCaJFHpUyoB2txTjZ4eHe4buWybVWtxniZzDcnEZZtpxjG9brHSWHKCVqtnS3d5HhNagEsYYVxo9w3",
  "key6": "5h3LdLSPasknY7dr8pH75BvrsVKdpZpJPn3zAYmbqXbpCZerptn4PX6GSazBw1uoZsUwJLVVECVNZEGKUA3iGaxE",
  "key7": "5iBLUcE11tKQsEpMC2ScEVBuxde6NobyUnSdcUMBfWwn3UBJkb8QTzSZjTDUHjmcoEZQqEMjEyi7tXU4Pd8FoJLQ",
  "key8": "2A7qYqpMYK13MPvt8cfvsmdH54BLShr4JappG6L3ddkir6uXFsQPEyauAUWnJyiBfXbbUUMDsYLQd15rM9aVhRDt",
  "key9": "4yo5hE8JVy4VrC6NukG94kFc377rt54CLCLrVQn6DobutAsog8qfzZtAfV43tqLJdtEn3nocJaeytWismLdbwTJ4",
  "key10": "4jAN5JUoUNkBfe3RGh5dTNe2UvUcw7PtbYbEedsj4bq7nWfc5UcN9SKyoEUNPvKCJhVaakfRiUcBqAK889xEADXw",
  "key11": "UPqyC9n8RfKWXuuJVCARMHpm8Ri5KX45zqkw58Nbm737eeUX1bdbCxqjaC2gh3kg2GgA3iV11bNGKXPqxTU6oEJ",
  "key12": "2jUKFvvueJk5QKtnvkvQE9GDsZftxaDjFC7qvP77kdC9F6cSJZEiVfSzXr6jANdqEHwKb5T7zJJsmLun68DJyKja",
  "key13": "dY9shDpcm4UtdMyLfovQFHPdwEaveWo5a4VQfKgbqzRD6nuYX6YD7Uj6p1WYoXXvL5gPxRy1hGjDJcTX7jEHnLN",
  "key14": "3cR1V6q8k1SYpGy3td7CbHcuaFSbFvzEKaqmfqw2CbKPLgUkYB3wqmr3ucuiqtRuobpFh1fv6UKxovbrkPUkjN4b",
  "key15": "21YWSreLU9V6kvvzJkBesw9SBm9QVb76KPjQiPYGSa1RcYqbqh9N6VrvBhsrSCPvE9gUx5dr1bN6fSk6pArWAVj7",
  "key16": "4pc5mCksuzRvcCQxGQrM1coY6pxG8BZLm2LWnkfU2Nax2oESVAbAUuUBcrfLSbyDDwfMn1sXtHN8uiopdcDs8g8w",
  "key17": "26xEJWUnecaHz7owu1dyC4vUFtZVRr4vvQEqo6fhsAdvnVi4bn222pbVXhm4FusdJc6m7PNQqViw3hHY68Arxkfx",
  "key18": "5zdKjYU6y4HXEzsxet6bCmm6Gu8iiWX7JkC3NoDHN4rvuTcr9gASmaETfKeeqio9TXjTWWAGVNhghy26RqKgztXC",
  "key19": "4tYXVzn15pPPuPa6DMRVVW492m8dsPNTbGsFjp8XLnNUy6ksyQivqaDe5pwfjg2iniQuyMa3gzm5nvucJ61VBRsn",
  "key20": "5gZtx2LwJSfowkx1YpjZ9sFB5omeG7AJPd7cerbLV9muu8EPn2zJ5WGGKCoBt14oAfFwaV5xZtAUnXwLXuP76Coa",
  "key21": "3zSaXyo6XPhEXNLfaX5Nsm5HSCHVGGwJv2uvymeYfrg1i7EkywqJLrxBQbHNszzyiq1ZbyrK7HPiPYB7BXCSxAmy",
  "key22": "27tSfG2chic8oKcnrwhUCeuVN7TWzi4JDShh31sZFGMf9TsvPsY1ZV3CDvZyqksVQgfCVYi4YCVKm8WhRk57HK47",
  "key23": "2UKvifkF9qAf2Nw1uEpuPe2pb9F2JqpTPFKxRRXuoEgLDTJotiwkW7fjyqW9BXRAquCZLXt45n7oUrM21yjwHWbN",
  "key24": "4jdKUjrUMASRmkSuHtAcwiHfqMVRDT88UprZhL8uLr4wUrBXuEYskANUZyVtR41ut5Xvvyrc43HvQCot7yBuNDzJ",
  "key25": "2aYfHn9iv2ktawWxMAjpGCekTbJNoeV9iN23Mxcf3TmBxiUGNgDrcy21VEAQwQynswxR6Dgz2gAB359C98XXjijG",
  "key26": "12247n3gszfSgEBofjZwNs2m3TVTy1axbXSJs1UZsRjUwGmcCrAZsxsiMNMCyK2tgzcpLD2BAUF974mVk73dp66k",
  "key27": "9UqVZQme3zZUdwEGNQiSizZWsSUtjbczuaCSLhWdDzyjNBdZ1eqA4biiLQ6YRaQa58Hk5C5cqTPmfhVG3X5V7m9",
  "key28": "6ZNfAPD7nC6BZhgoc9NtpFR2fk7QrmkjMLirPfAa6mTigyNAitmEZnTntadresMG4wdTqJq1nS62H1xdx2psbKj",
  "key29": "zreHwFWzdJL38ZwEY5BD7fbZiazY9JDCpL5XCnJ24SjHw39icBRx85iyJdriAQw1qCEnwPyjBs1WmQ3aTc1Mksr",
  "key30": "MqQSphToSX4au2J6JZS5LF6d8W5N6wZkTachqD4qKx67tCeSMZSB6CXdUn8vspyeLHgVh53DdjF3AxVJ5NPqPMe",
  "key31": "5g6T8xSyPzgoQFeKvDwBLf1GSpWuA6cfoxUJVCC2Gf3EDGab3F8Gt4UzKVkF1iMiDynG5u2FgQxPxttNt5N5BFNJ",
  "key32": "nuYuUdvGn5vPczv6KUT4bWNMvfbqXicZRtQ9TLWYTuN4e6QgW67yXCz5X7wcccsA68GogbQtQh7g9Z8sE6HNkN7",
  "key33": "51chNvopVPfYWwdQFSb3nmFsf2tGNWVtF1bEjYyevAkDMaiEoMrP5FyoTFbmeBcM8xXemiEesjicph4AwVCdsSSq",
  "key34": "46N2L7vLe3XKempthcfgqByNTKvyoYudNaFkhw76r6ug7axoY58Y4d5ycEjzpNbirsivgYHb9E3d8kfXJWuYXQAX",
  "key35": "5Lt2jmVjqFGD6Qpx1iV4KTkSBGBfZHyRtC9ojBW6W1eLkEaXdHmtJTm7STweM16YSFffeQX1XZSaE99Ytrn2iuFh",
  "key36": "m3sMjE1KrbAZ8kid1bYhfvntoGmLQWw9YmoQNBwzK9GFTaJhPbDE7mT6pwRLeoitMA74aeadAnyPGUCxi66a2hd",
  "key37": "3ahPDhffhggFgxXvyeSLh1ue5NudgwkN1nRaQSDb5fJScneN5ZYqCudKt43qSGysp4ztFSauWjuNkWvwCESk9Hsg",
  "key38": "4YiRptZtPYMnBFa6cNfHyyeW8XYK8AjcjCeqP9LwnayuyTMKi2JowcWUitDYfboyZhXwx123CGT96c81giV4cb6d",
  "key39": "2ugDdTvdGYxTR8VdfyzeA6yjQ1AcFFDi7uWF6GpakZWq184crtrQQ2RXMW7EZVh8abw6E9r1Cif6rTkTHY2fhCSD",
  "key40": "5NPbYWgbx2rXPKkb4KfChRduzfimdE4GgxSAwW2aDBPF58UvBQifoxeV3cBJvtkEDRC8YT5m9nYGgQejZyUB5bzK",
  "key41": "TCM7fUkV4aNjsnHAmiVRmUMsdoCiH911SRrcdiMFczQnQTKRan2LF4KHYN251nj2jo65zzYY8LRJLupE3dW4B2S",
  "key42": "2TW9g9XJdVefmfiNsHK1TpScCnH7u6ZcKQhCBdZhVgRtNktEpPvXzgTYetoaqwVqMJVTYPytLspyMFDZF3fRngCL",
  "key43": "NzvXYntPo7squ6aRMJrrrh7HGUCPnT5cApDujFgVyhxvAS44taGxRaDBAErcar2tPgUu3T7mVJAZZsBBgaxn4Wd",
  "key44": "588XVx9pFJT6JPLkbe8MNdnDn9ctj7g7tnF8ocRGvHsyxYwYRUB4pX8hjTpZ8eZu4r5cw1gTxXrRjyZ96X2jXqur"
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
