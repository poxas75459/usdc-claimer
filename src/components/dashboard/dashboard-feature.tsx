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
    "5Ns67FDrkTA5bXK5pbgA6QTi7eEBk6riJ4NTSLCoqJ4fNfWN6EsB1dkpMiN5PUzyHhCsUBTGFohnqTVjjg8rFGda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ec9AAmD2iCQrENxttT2KEk5QWrDoSqKEQ2AaDzx7fWGZJwKP7BWU7XHmJRaBc8QoqtxDkxuPeT8yguYmvZqWbEk",
  "key1": "3WwpteEdMYfdpS8geDpoyV6qtgRb86eMA2DLHdjeBdDg6QsEnm4dVntGb495je3XTDKHNvFnxANQqYJK5oYM7YR2",
  "key2": "2Np85DGxRUxenhegYWsvVb3Bmp3DbWwNcuJevn3VF9EBCCjfs9FSZTQT44azoDqYFhcMasM5X6cA2A1c1P1oJWQa",
  "key3": "8qqcwbyRLwXLesctZNJZgNpc5ZhJZhPojEaTPaZWnH2gsM9Nh6AytTyRPNtrzZysxErDFC7zctirM2aHkwZbdyZ",
  "key4": "2ibuuSJk4Bt1wQ2Ji4xw4GegpbvEmpJ2CKGvGg6P87sK7AZFQfZwxdeDM5kJS6NUb71LgeFx4YRyDa8rWNupRVAp",
  "key5": "37MhewZFU3Dn66YJnhbPq7mDZPPqFfJro8bkvecnuWEMQd7wmqhyEheYiZwNEm3QHX1FCLtaNfLeLEkstg2f7sov",
  "key6": "57K6J4KLzaAmXHB5ncVYuyCzEbVWgSosPgjsbTHgFfpVdLfV59RDGrTzkfgPJygALjcVDBMiNkHrnB6PS3QxaAEf",
  "key7": "jCa4utvF6jiNwuorpGmuCZ45ZQbNTWfvphHShhk98NQabWpDxneLRzQ9MJGDnxt1czQtKwnz4nQwBCWT6MU6yVZ",
  "key8": "tmw3s5MveNzk1MBnJWoTagHvrRATgh6yvcZsuqHwkpexFBgTyD52wfTG3GXpDUDqipzZME9iTGkSUieKzMiVk7J",
  "key9": "62HQNQwLD9TsZHHJ99fYJ1sZmdZK9SqjSM9Lb38kewzKeEh9Mrkw7bbdmY6SnW9WqKrz3EfscWCMV8QuLhuD7SuZ",
  "key10": "P3NMjMNHELrzzucBkFaU9Lkuzda2KroJBSKNrzA4fM6Lf9hPaU1zfDXtEZX3kQev2suUaTGwnHo758z6fPD3tPa",
  "key11": "2ENxvwQgzZJMQXBL8HpP77ja4sNGYmMFSjC2FnUMgRFWpeGsFsqHF3j7rpWBVE9r3EwvHRVRULK1gPvwjfWUEZCX",
  "key12": "4rdJQrXNi5Zxzajg4SCwLEDQiM9Uuay273aBdgMzQNWjDYYdVMe3xWmPQguwBZidcohXmqwVtnHJg8DEbTr1Ut3Q",
  "key13": "4UsMS9eScNwj9uQoLWrdJwLUWQVc8ZjufgY5zDtcYXvNreVtzqV9NZVTfF9awShfEUjnx4CXg1dyiEiPcBRvA1mU",
  "key14": "3cJx7g7n9AFENR28wZQyqyMkTR6iVaH8yEsEogiNQRk8peA7fh5kTxaVw2LcqeH3KoEZLXXzf3xLG2d49bRpixkf",
  "key15": "sLwnw3mzbpQMKocXG75TRvSzeTGURCce1bbLSrJ9jyZrEzfxhesB6NSo4bfeqqdXHUYofrnMtdUGq2JNz1EbdH8",
  "key16": "3qSrk4Pah9abzVvbLrHnNUhoD6xGDzKovom6TXfDr2UNx9fL1o3UbEw39Vz7MgUqELX3D8a5DQegpbNfVvG8VwJ1",
  "key17": "33J7XwFq8evy1ACmANAifHmwkBhmpDuwDH4u7f6nCKr1iLRBbDXWwHq4VhZknEJaU5gzwsEVozb7HUyqSoWKheGM",
  "key18": "27k2Aw1uBxWbfPTusBR4doqWq3RbiqCH8KVSr6cFZkFmHYZMQLg33uztJ9i6cdnfugRo4GoTGVrTPgaYLNwYH3cn",
  "key19": "3V6XSZ45DkpUxq8QH7qhphtz3UAVeQ4iUfAYC4QVBSUy2Vq3jWNpSQ7QrRaCzGXdVdD73WyWPNb8nHgntKtkCrgv",
  "key20": "5RTp4zGKMrirEPpebqJL3EtXcSd8TSbPma8su7d48djmFBaoErvFkYHrbu5yt34XAVRyiUpcxt9E4Ta1u7Xy5dHv",
  "key21": "53WMMBKTJt4xvBeY66ZhVuam8hp3WPuSoVrCd1RY5U4n8vskcYVsDjxhWTXwTvugJj43v3QDdmd7oQs2RSvuuyAU",
  "key22": "4fGsRschHi4RLtiNM91nR91N1BMEkwvcSG43QPenhq3u3GJPZk2LeyTZzxQir4tuTzSgWyYXc97aoy3UYaqDX6mv",
  "key23": "yNgYunF5FXjCNceQ1rQeNbx4sJpFzehuwiwQUHtQ9zxp33AUQ9XYqvZyGB6xjTCWwGTMztmSt8rxUX2YsnDNFNR",
  "key24": "57JVaF3o2bhFAxQv3oXqVZARDE6kVX3ADaoMLaHgN5vXh5d9HiMoNE2ZNQrLJNybrCqzeubwzaCDwXQNttG2VFnM",
  "key25": "x2kQrPuR1qzbEYhcYhbY8iLaGf4D9LgUtYP2nxAWo51AHC3kUf5EpwujafERVGCYnXuMVbzVy6a9RSFZmJNp3sB",
  "key26": "5zjRXaKxUoqaYPM5jzvuCjpzTtB9C9euT6wMKwKN1wzALoVtySAQ7U58bFmxzR9yi5V7LNMBrVgAx7fXCWXj6rVG",
  "key27": "3BVZmka1oy3Z3sygiqvTiUnWoUQwSNm3kLPCFw7YhstbUC5ubAPU9bTfJnM5HV265XgdoJ5qSHxLc5nngv69v2vc",
  "key28": "4kPzTyXj1GjP5PSkocg8zk22TdcBE7PBPMDRqmuFwkvVrRcrb3u2kV8StEdoKaREJPSH7JqD9FVocXksRYY5wAJ7",
  "key29": "46ZGCV72G2HjiCihHTddEwratV6ZXjPUs9msjJJNtaC5bQP7ATuAsx2fLzX4Lkmf7BJyrCwV4PNJ4N8nJ4JysLfU",
  "key30": "61Twzm4wVFxvxa1G28HBp8TdHCs8JVamMTfZWmfAswMSx6wDvYQqF7PmSCVBH6GuJz3FFa94tD17WkJWKCxqBDHM",
  "key31": "2isa5MXENmfoyckj2zn7aRMXz7C8MDGXno4JfXjEfaM6hvS7TN6BhdynoqvNDzEDowTv51MeJq81Kb1K3WgZapYk",
  "key32": "qCjq8fXKbs15PdvPSn7ej3xdTem1WufyvM2BBLQ3wRZ3ek75AQiej8G4DGpD3pP2ZmJE7giQfm1U67JWHA8XcRQ",
  "key33": "57Sy1hwn4rscZU6u9LDTYDc7vXtkwY3c3akD4LNU3E72KnznEs6HH74ehLpYYqGHX2b2AY1QToP9nBjMYoXzbCHm",
  "key34": "5ko5gAaFddNdbRAbho6YkiNy7daRwGQx9WNCMgAZzMAdGEiWbkRioy6QErxUUmhXR2j9aEQS5kRtSqiRmvqTJJbK",
  "key35": "4LjRNAoD1ktKRsdh2mf3DDXyW2PApTYqjBzn1FMzcj2UAKSx1VaHrSFx7nfG5GM9aemk1wLRYo635syzAz5UqVgB",
  "key36": "4wv43wTHxB1xfa3yU1xHHKvj9oSPtC8CZxTsMBQbA5L97KXD9hc3p37LQZGFqfkc2Cf34jyPJK23ZdUvRiMqHS4a",
  "key37": "64ekavhdwNs2xU37n6AmS9A4JQThucJoKhKi3Mi2K643x7KhuZHGRuYqvKB7xUwQ2pbLSQ65GmuVTCet1BmiBvth",
  "key38": "4wQEkfCm5YDj24tuYZ8QKZP55mdaWaXR9EQexi6scKzrMJvtkNVznYC83SQGYVaQp54gZ1BXFLpSpZykwxhhaj5x",
  "key39": "3A8H9bnzXJPwYJf8BxfhBmRy3k61DP6wBPyWn2C4pS1f6zhchPvRQRYVWzN6EdSW3wtcri1F7KP6LxgWThQ2dhf7",
  "key40": "5QmEzb6iKh39b4j69YVbnLNsKQDaffUXWEAshLqjaxnWEvoMuuNV9mrkaSHCrf8P1zPAMtrcEQqZSvxCy2RSFXpW",
  "key41": "uenUBAv2rQKcWdYr6ECNSGxKmFPZXvLeR6dioDsaNJszrwQf1T9Vcrua77x5J2rgUgLr8w44bz2DYaJXnL1Vkmg"
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
