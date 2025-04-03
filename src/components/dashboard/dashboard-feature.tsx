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
    "3rivmAho3hLokV5tLCEE3iZzDBxdiak3S1UBktK6JSRL7yfJiyMWCAs5Rhz9nfs4vrjibdNcEG9CDHk8Ze9PVnTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kK4cpwg5b4Cn7uhAobrPoNd568SbQXsA4fBoFWo1sfebMEn7JaBbLQxMQQjjTZWXkbNtd1gqjB7TCFQe9rMCD23",
  "key1": "4n9mYX2BprE2D5mKDWVe6hjGHvqXfpVZQHFHNvdxhBUuard2cXRkhMxpdKoUHbp2zY9DT18MeGv3NkbomAj3rQhU",
  "key2": "NrQxatSXnMb2mRBUzGD5gLWAJh1wZbcQRtEbWRahjR9jPAexTBM7Nt3iWKWWy3BheQYhn6LRFa97TRLAseXU9J3",
  "key3": "5jHCFXZ48ZjZgq7zPQx6pDM3sFEUymrP7rc2ptEGrzzp7wjuZXTkrFmx56YP4Z6mVhzWnpsBLC4RJHmH61awtsRh",
  "key4": "eKGBvEUe3AENbD8vPvPoxrrZmb47PZEj4gotdUvu2YU3BKPkhHxBpQitpSvhZcTomkVt5S3GSkcJngeHHKNdyBS",
  "key5": "45rqTUGZUJPRTSKZRNsN6kdE47kryqmqrWEo58HRe2pc2oXCeY3pQs75i6MEnzQ1e73Mx4iR7ahNEXS8jv1usLeX",
  "key6": "3WbW55w2n5V3TX7MLxfiiE6Xs7wjMzCKp5wxLTv3vYEY3XZHYq91Gx4JmwxuebVS7XuuMTpoPQCAj6JWj6Mj7F4t",
  "key7": "5FJKNboDbNmAXMKkndgbdCBDW4AEWnWWRK9bZnpSEReNJHytq195yeGrwangxQDG7FeHasfMGnzrQAj7oLt52RtQ",
  "key8": "T9s7Y7e41ssSYDXKm6L6kvBqVsmqPa3cLWMRLyTUnR37TXWfGe8HxgWd8rEyH7beM96Kymf6bo2KuKyvWS6oYWC",
  "key9": "5s84CKEBmbEChSD1tgWva31SVHyCEsk37jXeDKsE8PrPBP2LvnzBnthaBx51UVTxkYmMAu1zcKJ4516W4GputJsV",
  "key10": "1oEMDdqwTKjq4LaU3atzxFiAExhT59xJPhVqboacLBxuqrGpzyyxMrhUnRn5Sv87Jra5QywSCSgXjkRiGCFJ6Ri",
  "key11": "FZuzPPYkWUu69cEBBW3chkt5aAnYLJnAWwkoxgpp95svUTsYRPkyTSCo6EUadyNTnQmTAvXCrVZics6srvNkqGs",
  "key12": "4ei4kfDwCL11wvtzbR4YZ1mPoKY4UNbLTH17SNuxbnoTs1xrQGAfcRMfVnRzQwqC5id3VxejGGzAuWxbJHKrvy3B",
  "key13": "5ktG5LHSx3KmUd7y2NSqZ3FjtccPypDSyNVFKXepcmsLPtcMwsbkzqDQTU1n3LTVT5rCDdsQJ7Da522MaHxH1JM1",
  "key14": "4EC4DHxerg2d3zXj8G9fJ82GE5DCtn4VpumEYESHZSwVaxPEr6HF1Hfm16yx67JsyUUbM4gxfcR4wdyGZHiwsyb9",
  "key15": "sgrNhSEvDEuoid8Rbwa4mzs2da8yXQGx39aK82FiAiouxTD9BxWNy94rdhBeApvCcypAUGErt15GNQigxRwaFft",
  "key16": "26V8kQ6k41WfAxBDyHLKNJcJ4aw4bbEiEmTEB2Qc4uZVRp2JFq66MXg7Vc6FQz4qUGTkbZkMQRJ5WQEoqGmnVCLM",
  "key17": "3yG7zzV9nSaJfkb8SDZaLg2f78JgmpNB3e46Rt9AUZpBzRJAdgUp8KXxdKfi4QgWQ7it1j9rFaQA41djgV8KMGK8",
  "key18": "5H4rTbsbkbvVJQaUAfKGJFb2gHr3igM4ob4hS6pb1PxHQSuv99CnnEMVgYuMjeCiUBKg9u3VAuAa1gLwpGiRDUPK",
  "key19": "Zog8tSz7zhQvAHMAS72xZ8KNCjk7KUcNo8yya5oXn8yQEvgJxGuYd3L9mMUoAedzZ7DrtsS72xtgj3mmAxCcNGr",
  "key20": "LigvVNtWW13p8BaukFRyh99ACvBRZj5CoGZB7a88UxKzJoKshCCA1pw7gDBMU2xurdnbcFTQMBtRyNiXo8QjJcA",
  "key21": "4W5eLgg2jNr1U7CL2siov3auN9HtWYrDGwqkEbHwMXjnvTTB7CMqpueASfYPrNWqmXw19BTSjJwAk83JWnFpLyfH",
  "key22": "4QLWExa3xqfPAiAqTTAg1KfSZAYYQdhzsJzAc3TEXwPh52zaNmEXSKC1Sy7tof3P2MUSTWergixX5E9nQcK6mtpr",
  "key23": "582YU3h5XQ9m7UzoWJDyGbh58LkS2XrZkPAnRqHGT7E91bXddg7GwVZZBTfxcjzYiqWisiXJiNyx3QWghGcKHVpA",
  "key24": "53NrgZgvokNPWkvsWEhZA2yyR4mwFM38wwXjc1iNTMJZ2cg3fNtykTcfdshFGAKcdcbTB2A4KQ8U6S837mCbZNZt",
  "key25": "3WeivN5WdEhkkUJTTQrcuBaMfUkAaqT2SPnqXtmYhXjsAxjz1dnZS6sjsvXFqQt6seNhn3d6HMYW9jUrLGJVJaV4",
  "key26": "2suSacPRqc91wj9T13HHTNjb63XWoQF78fwkduDoCb5LctdmrzX4pQZPstWnP3cnD9towrVJTngXeoYx1tpjdKeZ",
  "key27": "3wwJAVZqu6h3ETN4DeceQBGspkxNg4W1wivTbmjiBXUBtW5aHnsj9bb5u3WrHDgaEucawbc1WJSzZCHXk1shRDrE",
  "key28": "5gaytV2MHqKAMqrcU2TkUkXQ3MDqPd7eWSDHHQri78f2Q4m23nv1aBZpXqsSL5KhANZHnSEmtwi59diETaCqLdkE",
  "key29": "DrMtvgY3szzVMULi9kuTguCHy848LyyGfUV5z9ekGW75Xdo19upX5DEa7ZrM6QPEgm4Y14tkMaycMfHFY8gmiVJ",
  "key30": "CigxnNwR5msTVHecJAP5RcbbTpsKpzn2TvVU2zJNDrYB9aDfV8BJQGAca6SF8c4NtJNjGZyom3hQa9eo435nx7d",
  "key31": "4s2nUoP1m7DxSAuVNUa5Bf76oeHwS1tsgMGZRpZL22EMcJEBPxmcvFQRaoCyWoGPrq3ZCApwbzpHF7fgsRMWGc4w",
  "key32": "4hbcNWujANUNY4ZuvcuDqxhkTVEmcWrAZj1WQeK9cGfPAwox885WKWgv8Dz1Ly6pbCC3goat41UnCmkCrTN6yUA7",
  "key33": "2Jg6SdG5sxVDUk2VAmhMW9tRj83WMdKvqpcZWWLaQ3Wx2ZK2WvYac3Dxn8CCLZ7gWmG7FgWYZn8UNVte6YTFZuPj",
  "key34": "5PTRJjgohwMe7bfGqa7PFuRAzUnPAvxU9ezhXe3dq7rXWb2oB4UWCztmuLYw3rNJ8hNkVExWTw4MDyva7dpyimh8",
  "key35": "58sVmhQVhLAVY2WDnYQ3gDJccf9niWNwA7QgyrSCqtbaVC12anoUgtNPZUgcfeMgxMzLfogXVXXb5CwNwEfNZfQ4",
  "key36": "5WPuNGegj1NMFRC1FndYhSTaurHokH6itqEHfAjgbh5BMc9jQEoA1VGb5juoVFXUsoqHfAZDmxb8rDrFpZFvKyUh",
  "key37": "2p7jLav8buzYfsRfhabGMn7J5pmm9jikcnpbzw6f3EJXDZZPG7hoKoioD4559r47rfw6kTkYsYx35xYxst6beHKu",
  "key38": "64kvbMGwktQLdHGvDk88M686jfVPcrhmGpHPxg2KchF9ixEhpe86pEsAHtKbNov2CpdSJgqZkPiNEs96fmsmyLoL",
  "key39": "PTKF8e17huq27CQP87K26UVRtMKUt8FGme9oRRKsMn68Kxj65d61y5V9TxUCtkcnKYSMaJLVztqF3tczgrQ7YD1",
  "key40": "TxrJj7bmXUF7YeV1UCmcnAKDF6CF4vDNWeCNPD1rjRnSnkcVhqD3jAbvchzW1WGqgS7z9XPYxuDDDtWPjAV5CUN",
  "key41": "43KVkkqwY4dM7Us1VQNK49ShexmZHtWUnTW7xQA3Ji7A8ntutTB4Qz8wWoerBiNUe7GJVGd3s4p3VfzLg8PMJFxr",
  "key42": "4NKA8f31aGX8xHGbTXXQ6YYXLAMFt6Ri4Vc9mS53pV5xvHHyfeFtYgtBjDQ4KM89VXzaw5emgtSMfXBeNyzNWmJc",
  "key43": "5caAkqWbNKXRQNu3Ry3TBiUkBPPS4yiXceHETetuyGNbCPe6uHDRgA4t1VSUKvuaPz1BC6CHDgoEGEujWqzt9Z5E",
  "key44": "uppKoVvLrFdFwuiyAFoSyCEJgaLimUDkVmjRywGdoFBcrUP3LbewafH5DbvVAyYdrLrcSdkTe9WA2Pn8FHS8W9J",
  "key45": "5XpCXCyhJfkxqrrmvcr2fc9uP78jdB9QuJN6vJg6mbtNTZASc81RUMov2FwWgUpofNRzBcVhu5ShcLpe6SJYrXMB",
  "key46": "55TvyZoTaHYnaoNtNFUu9TE4u68o18GyaJ3NxpkHPQnPKXAH4MMHmKtdZKV6tZLbnCQJjnkzDatXgY5FM3bJQfMX",
  "key47": "3PPB6TZda5YLSjJCiDpU9s6WYQB3o19Hmq7E4USX1sVRpqf8sGNkXuvysDtTNACbAMRAnc2ZsEta4g4pNN5ZyJLY",
  "key48": "2Q6ZbACSZxx2GHfXV3RMdF2JjM6VLzVnQKuBh4AdbwSQ54Wmh8iJfsoG2MeXeMxNJkvbRGNjwNZ5uAWCpn8XRjC5",
  "key49": "39nj3DNg8GxUJLm4ySadMzfmZeQd1h3kbkUAprcWS2CA25k9mSFTND3a8uu7uG5t4Ka4i5CSo4rF6e4XxRAz7hfi"
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
