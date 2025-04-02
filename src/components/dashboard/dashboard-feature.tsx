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
    "2HhHtVPicwuZw4ab41mBHEbyu96NgaZWFHHvhN92tD9Wv2M6RvccWPwgotzKLFNoBiMJxpEdPNQ5dNhXkU9JnaYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pThZrCJzXoh5NXaJwQ6s2TohNP8xkGaEfDcN1MozmegZ1YkW3wcZLrWLijUS6HHFKxcTN1kRYKk8P2kwFsWTDp1",
  "key1": "5esc7z6ajwCZ2czyQommabUtWYXeRpmW6oYQF7RRAH1XBHmofx4mhDdbZy1ZwgFJrcxEzJi5WTPfvJEerq8gQAuv",
  "key2": "5cLTxRXhTMknPZy6iDCqkC5ZbbuScM3cut2xbAZMiEDkJhpXvZjFP5AvKr78k22dzB6GvRLcLtJZsgmJAtFDPXS3",
  "key3": "oRcydT1xmoMgsuBbjUyzumXu3L7twNiyKUzCUYZXUpzgU7Ax8fyuDZDs6kWRidmYygRPHLsxWuSyNAWhrBEEVVk",
  "key4": "4DkX7gH3mA494J6Vp74Ch22f2FqzFwzBwuf7zWd2ovTk5oDvooh3k5ZCTCfNB5QjucpKE6fQu6LydmGWzZPS6FVR",
  "key5": "3TycGPC9vLSBYhY9awoDbeA2ND2479bVMgZzpjown5vfiT6Z8s5t7EmeuNLHeDsfmzu77eoriHkdCLJWSRiuZAnq",
  "key6": "2mz7xZPWTdRpLqZGRfF1n4PYzFor1AW7yaSeMVCJ7CZJhCQcATXMZorhLmmryjMfps36eymJtwDLwWKSRhJDKep9",
  "key7": "3fN1J73RpG4c7Ba94awD3EoZxuuE7NSXsd5sCThrJ4zMw88A3iUH3rF657mfZiUiLmG5eJjstwAdyaTxub7jZ4Nr",
  "key8": "3GGzDSprxinjqyffLeKRWFfPyKzy12UbnyJBjvZ1tHqTH6oUgD9mjRsxAsV8VcTmnvwcnZay7FEh9ssqssRkknwo",
  "key9": "5NS3ZqkuTLHtBAB3zJoXgJ7p9Wf4w5aTRBcvcRAbjHRE8PHKiqxd2N3yiQfwmjiRvp6sGfqi7zF4bDkC5LaE5iqv",
  "key10": "4G7tc1oZk4FvGCZgL8R1mwZ4uqrY44ywEZk5VZxCdYUcJnePf9XNCaXUDjnFv4K5sSE39LQ1K2Q6ijHFbBzRVber",
  "key11": "M8WseZSn4DynDCLKvBJJYxBweu5y43Bn1f3Ykh8QnJ5eKKsn5CEfToDM1eaAMMZJTL8CYSw9Vrq1Pg2CNxa4azQ",
  "key12": "ESzuX8qeiYq8VEphKkZTiF2yy774Tgi7VaptC9e5cRyqNcRfLqLTUXXttuKzYH7v6AdQjNCcCrjTDvQiAyAHdSQ",
  "key13": "22Ao3CMRGo2M86JfnRLFHpoc8SFYa7J14CrcFdrKnHMw8yf3yvgksPD9kQXbksuZjZa4dWxd37rQVE436xJbr9gv",
  "key14": "32xqEG7G7Ky2USRHbBXrTvMyz6WQXqX6MVGaCkw8Jxq6s1acz8s9V1XFZXFwhuhSbJ1GaHgxseXRgSqy2RAbq9HX",
  "key15": "2eUfKoUjmLC3CMAF6EvupnQqmyRZ6qxkfs5vVWhbH1FAym2xNCkMTcur8LMRvc2NDsuyMB3gUDDHp8Bs7uweHVz5",
  "key16": "4u57v7sfgadeStL8Jyx21zwody5okrj3At5MtzdBRoCvgxYDkNoXgktehjqG2SE3J89bHD8DCAnQR4bmkoh6ZDtE",
  "key17": "4FmoYfKD6y3urnW5xReeegFy3dr5A3xareWAwe2FexXidpJFPuxfoLwgtL7nusJg9ENHVmAJVwuqtHghDjGWLc2t",
  "key18": "5PC4QDak2CvTqroQB5B1NWWj3R882CTUyeTToAk2ADUT5Uzzdadykh1XcfpG2dA1sYdth7PfusX4W4mUEymCmowV",
  "key19": "3hcUhVFZaycf8SvkoPsXzeGrAAqg7reWrP9neZdzcoH6SNtewTzFLtuXBFJR2mtW1cabR1oT1VhrCtMYENhX4Ucd",
  "key20": "3bQymVquCGbM64TbA4uGcf3nqjKHQZvvsdwBxNT4TWXU41L996coMqBaRb2qcTMSRgn8y1LX9ipd1NJywdjKSz5c",
  "key21": "3T3NAeZeYs8ShtPBpofYJZMfw4okLJuRB71FXSTUq6JkSHkXNU3hUfkLxkSoo2nfHE3vzVBaQvcuhg4ZU5Yauaox",
  "key22": "Qotposgwf9qXdBd3aMaWH9EukDoJB3h9vWTfkxPtAAHU85nAG3RzhAYCJpGtcUFyfsN1ePfA9rCERp4tbXnTBPc",
  "key23": "2i8dEGTa4ZPHrtKKH3WDzR4M7SbSwfyKdGjtXzx3wpvToW2ZkqbLjp58rJTAsx3uzYRFVfoxPj3rbRGyTUYawqGU",
  "key24": "4YiZZinMUXXizwUNrEsi9HhMecx26YFcJnkRLyfY93FsVbiGkBtck3womF7KadEc6gYAYmLzrRKS7BgmTvGzdjK9",
  "key25": "3cGio9Y71Fs9nqn4MTvF4KR9gSRAXCi1ES8brsFQmpNpkpHv5RzQWHF7djYcimSYvDXQbnv7BegNA2eGbnENEn8a",
  "key26": "52bL3T8MAAXoPpdMaqqoDzbmR6offJXrKih68YS9Xw3grZFH24PhKUnFxqDZWzcYfgozNZCSvrKhUox8UxxyhsSj",
  "key27": "58nvkdRHpWad8pnzPu8mEwSqbou6ZVWa6jKD1jfZpJTydnEJ3S9gEADfA9FCPCcnFVb1Jky7QnvpU2uEDF5J1Ukt",
  "key28": "4k6t63TZBtDYjqwr9158qUA2FcwBvgUbCTgv18Lfq5stbGaYPheQtUieEMeRg7WoK2xwK6V49CwrfPRwaR2BehLE",
  "key29": "ybf974ZKZ6FvzTiQL1TQi6XzG3Qom9fNAgPaBQwafvQtss1TqAqigoNtPjLRpFEtuCqTVu8ehw1geKAyQ4HrJbZ",
  "key30": "675zdtvwvHtVb7Bua8jQhtjumpu6dExkk4o2krjVdkZM6uehWBCGgAcaw5fn8tB6LTAnz9J1cx5yM5XwHSWsLsaa",
  "key31": "3qkzWjDpdkGZysDbWuZ2Yd7WaoZFwRooCaVuzzJzZmGbfJWKu5yqMM1SWsx3poJ5KQM5FVMZptYsjRrtazvo9R5q",
  "key32": "4zeFw28KbaewsGSkzxCrc4qCJQyjcWqMJvJ6dBQAZaSUFfYiZ4Hcf9U3pcf4nxDDSbMuaKoEpU8P8GbspajznK2t",
  "key33": "S5b2sKTnGEVbtKEg6S9jmGWZvmdT4vEe4P4erDhWLYkdhyL64Djawd42PktZKHYGAaC9dPGnhPP2WzmEDaHsr5c",
  "key34": "CR9gFUzhHYEy77XUsa7Hdhsx96bay4ry994abtNhRMofSEijEjHCK9yNqZFDcXLRL6dEazLDrSRzVEGV3fACSix",
  "key35": "5TtyjhRGcewwtXqUNvwcxJCBmnH4i3S3JW2bmdXTBZo7dVTb8zphvAPK1sFntjqtKEnfW9YNnhataUHNA3M7drP1",
  "key36": "4PEmGYg7LnhPEmjTFrdUrMdF2xoE9TSkhnJfL1i16mvHdhYzsiiA9fa3hW6rxApheqtLH4ecRx8UQcG53tLeEJGv",
  "key37": "5T81gvNHQXZjAyEGREr4pnt92MHWwvJmm7seHmaxuUCBeEHJRJCpSUoN8amk3ZVcT1xbh2obRoioZ4hSBnXAMTkn"
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
