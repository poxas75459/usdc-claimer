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
    "62KWUw8R7ei3PdiLRNdo3HckfFuBNqotA5rcrH5HZ3EMZyE5EzEvLjUPUQzUq8UV2d19ycLaxZ9ZKM1DF2ByxMi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62uYinrrwL1FukvEUcWWBFkVetw8qwfMvqRUjVAVessimKzDpuRJtfVcZ2DMD99yEpfRJnr8kwdJrSsoife48jj1",
  "key1": "5cFa2iJvURbAWUtt5i7aT74CqSRVFS6NexKh78dj2Z1VkRd9aGDy4jfPk9qfn2ZwJzVYwbG5n7vM9MqCgCx1yT5",
  "key2": "2Ukam35aJViB54SFSazks9fi4CGRGdmV2NbMpxy7mwDTEnNoeDGk2FMMxyFvrDF9iBZjBW9vCXwRXZV9YVJuGAZV",
  "key3": "3hcGR38TiSWNNDPwRiGdqsa3jwC7GAL4JjcooNFnLa487kzxcnxDDn5DSPLQD9syTzptCgVDQvvbgH3bishGNZPu",
  "key4": "3VLYaSfU3sNz2jQJSFpvYN8MPNw3fHm5K88XL7MnhmgnJUn1wD3n64HJbmVrpr4M6Wb3B6SbbD9NnVvntpC93b2",
  "key5": "5ZUyhSzo7rnCbLa5KfTsMPTeyc42wqrErupa6HYba4wesugo7u2diz5e9PcZ8udy1hJAsSKdCvgyksLVU41epyox",
  "key6": "48fHUL8AQXGn2n4CEbtkUyXRPKHBUQ9t6efTyvYLnYuAPk3t3yrB6FX3QaJNmFsUJP3egf7BfU2r48y9S6mYKVLE",
  "key7": "2dbsMEYL2pdCm4Ktq2X7tN5zufYB6fvu4CHaKs46mSyhUEYEN4vWTmiS4deoAeNXcpRP4v8B6dWL3v4hthxkbJ1m",
  "key8": "2PNCYMg35NN1PVFFy5PDMTitSLpBH5LRzEYuk9kVmi6g8Hp2YMtvQwaG2CmALteacrFRYvxWM67v73fkyZwxjEmr",
  "key9": "59gWM6jh79Gyth1K6CWodXeVKuvVi8ZqyWxXAMdmwqnS342Ps19xqYP8UaFV43vhS5gLXKovzbgtKh2JUEDN4gDj",
  "key10": "txgGoDj6Fo5j8VyE3xyVTakVhEgrFyB3bCGKPrSQDrjDQM2JbBLgRuywYn5xraKdje8FJqQDmiFZy2n646vBDJd",
  "key11": "4CHBJHsD27oWGxkmy3TqYt2CadQ7cRoH2gAzgDgs3nWBtwJi47z8XedqJN3gsRhnv9ejqn2yZcJpPZrdDjW6uipS",
  "key12": "39CCh1weAVfF4Hyh1dDcTi3tMqBqhAWUZc3RaUT1MShaKRDTCY7dwW8aGvRC98eQZ1uaXWvzQYRR2EVSHak65duv",
  "key13": "4R7YnTCkCJYuyvjj6TY9rxc619fCjQryLgvqdnhfTHPYRfYkv8BZHiqsAvjP3zcbhJoDGNyNKV7BE4VQScV3M2mB",
  "key14": "4wBEhaPTpV5MM7Hjt8FeAhKLHQZdfJCJbhyhFC7tABEFMSWDSXCtXWTpW5vuC15UCP8H5dNVzFbsKMuhSWd7SVzT",
  "key15": "26NxQ7oDz7wMU97ZBNH4yQLFTysmr6BeEKzXdyf2Lcsy8emkLEhDEKcgUafT6aLpq76W2d1fyiHe5NRCbMa4VMyN",
  "key16": "bsFjLE5HEBakLXZnD525stZkJ1PwgjVC5iEqBvU8wNFPP3doTwcz3JLvcYUcyuC7drSiHTPAQ7mHfDpvSSQ6TVj",
  "key17": "4TSjRasjJZXoRiycegtLdiuVsEU5ePxhYEngtQmNbRyybQ7bt7m5N4LkAwqEo2yvmucp9hPM4RQgHzrLz5T62o7f",
  "key18": "3aVAQVdbUF6NKw8Ay3pj5y85MNgu8PsSTxdRLUs8SNkfxuQdKziHznLH25bGHCkWsB6bz4pbGB4Q35BN6hgudERW",
  "key19": "iov6hWBXNPjzvgCVWq2nW4gymQCFySbPXuzPQBXBmCXVevdB2Gocd6CAjByUVMF7buc8y7sFBkqPTxc1nffU3Pv",
  "key20": "3L9G6ukTjMsEuFgPcrxctbkMrsnRPZkZWcPfeRZjfPZnggs5jtNzfLcuDcx9xfKFzrxifL8YopVwHuVszs1MnsCh",
  "key21": "47JvYJhfgJKjoohKDy2Kqg5W3AvxUEnxYauW6sReD1wo7iwuooCsq9HmJbvWbLKehTWqB5veyqmSHMyMwDRKSJy4",
  "key22": "2WrUntErxJ7mQjmbajPYom21MiKvPW6tnqVoRKuc76iya7VhMdgb8txZ3LHfxFGEG6hipFHSLu6mj3WQX9zmp4hc",
  "key23": "FASziF8RCGiEXc6oJXyVLDm5poFDDGH5Kz8eMwiATJVWAanETAVGHiK8A5FW4SGnCWXp6QCzaYDBouqdCHZ5A2f",
  "key24": "67fCXBLPCVpnGFQqSek7HiJEUqnR2YLmqViNsy8Bx1647SdyqAazMWqgqRbouPm4awRwFkXBqcJx2aaBpLYgoJdi",
  "key25": "3ZAteJbEdGwEKfJWKbY1dGB2QfjW1Yf2xqFgbsyPu59fQfeZZPtDNZ9peaLUwoEHgaQ8CkwrYJh6PmA9vU4xEi82",
  "key26": "4r5cCR4jqiRgKFpmxb6KT9iND2RuS4Vc9AuEad8vW4axTcMnRSi2zUj48xkqJ527LDdBzYaVgFivrAXqTxAEj6yH",
  "key27": "4giWEp4erSsEyyYmCLX27yziXkW5apJVzmfLe8AopFWbasuC62sdxvFgjrytJoST2utNjjNsVcWPsPDQ8cXqEJWx",
  "key28": "2kAtVYMaXH2qFF1KKFDDyLtGv55bUoJtzJZRF3RPG2qHytaZiMbJbgnxkxEAPLnqdKDCgp4JcS4yUCHjUbH44s5F",
  "key29": "4d4SSUKt2UnV712krPwXbTMELKLLRF9RTQosUQRCZ7Bpzet638No6QcuFRRqsxdErA1ALFrD4J4nGmoFFhJ53jKm",
  "key30": "3jZQjKqDopP7CMES1EWyGzkGbdEt1YtTDVMwPQZrw8cWMwJkBuSkn4UxeN2fd4kUrdLYbb6TGAQLEk7DTDeNFLM1",
  "key31": "4M8nQn13A3uNq2RniW1B3h1KYhh8mv9uMnhfo1zezvbjxDcXPT2Lk8jUPW3fiagM11HEK4TUZYqq9paRwSYrKqpD",
  "key32": "MxtBbrDGC37ECE9M4vsakL17HqAeGXYpDkcWJg7cinA2EpDRuAuhzbX3tspjQzJpyUXPp88srH5N5Ez9C9HHTEK",
  "key33": "2aerPuxBTWJwwMmS1AAUeN83DiaLvti8JmYmNLEPcqrikkx2mBAXjG5AZTMzZKhcLmQV1616BTWe2MkVWyURH259",
  "key34": "cfCcBQB5UfvEtneSSRyBGYhTAn69Tkj1gkxzXtdwnksnK9M44JEHHHUFoKwYRcqCW2TPa9nNKdh67zDymb1soZr",
  "key35": "5a7YPgfmiUhWQpMTd3THhwCek6iec17XP32UiJumJ7HfuXWKFzNuHmkKE4Ti5WE6BNg3W23YELJJN2E5MeKRu7xS",
  "key36": "ZmdwRAybyHjzSNKdoWafKWFkDbHN53zGcEmxDMFhd5k5EEvFfybqs5LqKF8xjx4GQ6TxyhSwvf5dsGHKdhMhqbt",
  "key37": "5rPDWc4cDbR32vzMSNBS1rkiHPYS5HmqQ7WBSZKoWPcMTjosWFwQByTZEtUVrKUedZ5kR4DRbEiE8vKpY6CsH4hj",
  "key38": "T1nuywZkQCCveZgkArg6QgpTn1c31C4RQHTHBaz64quLYM376VYC28mRDunViDEQTo1we4hfNV7eEXbwEqXjutM",
  "key39": "3J6PA9fijZZB9pYEe4XNzvfXFKAHtWS3CzaES8Wu8msWTCrNW6p2ca48Rm8zZm8DVTZjdBxdwwtGUdmfGsqNtJVe",
  "key40": "2C4H72k3uvsVVk6nBim3eozSGX3batjiBW1qxPFmC4b1aqHriqQFTvWE7CZm27dvFESEdji3gVpjSAkfEDxdbXxH",
  "key41": "42ZdEDxsefCwZjYEAzU3dMeANmeggPx39xqnFcQGoRcnYDJFoBd2kxX7UProesrr41XhYvZLk7jtje3uYSgn9Unu",
  "key42": "5uqp5JGGnSMj4MKzgKMQnNpZeq2qhLEeiW5YASTMffsJkhCwgaXbMpcQTXKvSDH8A25EsvSoFJ3wWTVNeKYnhcKQ",
  "key43": "2cEzTDzu9Hvq5q6oLJWqVuAWSmomX6xpFJ4Qqb4g5qucL5XFjvdUbKwTQRroGLt1Ve22DB4e3rvhQzn6Cz4cyv9W",
  "key44": "5XhuGTkJN4acHou1yw5eZa2ABzKWSGWCMxGcWj5CrArAzb3fQ3Bn4wBfBtSWSt6heL7QeYFofX2F7ZbBEdNeACiS",
  "key45": "3wSUMS2iM3wDiWitupCZzYb6vy2z2BthDqu4KDWuF6fc2SZjdAWCJMK7yKGahozjy32vsn7dXMsKSXDqgfDtyjnn",
  "key46": "22CvapJBn4ZmuR5AF7pirtXL7nSHHgtx9iLcmjgghTdt5s4DWNAnJ1HQtx4vfVNuatEKJ5bDXcn7VUj7hjwm6PcD",
  "key47": "2CxCKxcMdHNkKnqC4vqjmobwvVHKzjaMZMMU8mEgEN5egykA53fMaCDyb9PswTD6KTQ8wfd21FFoidnMCTFKGX5L",
  "key48": "5gz8vt3aTCXpH2umkywnfxDbWn26Z9RKRjhqS5QSiYh4WuEReHeoyM8WS3kiGmjpugVqMovhr7D5ycsnf25KXStv",
  "key49": "3aXsfJgjUN3S7KckgJ621ytpJpuubrWoajS1ihDoo1SbY4Jsgwggae7pnW8N18zm8bckt5dEqdsdWRfR4C8HZJCK"
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
