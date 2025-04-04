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
    "65jUnhDBMjUy99RKofNE8orzDx5KpPeigXru5CChbApykvAb5tFrML6LqSd4yp3H92BawQDt3TxhSfJsqW7T6sC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jjE6Qya1yiDALF8esiJSfquELKY6hvYE6LZxTtH1jQgn345MVUFeLqG1GDWyvhW58E8n9L9WhZnDxNM1Qdebgwi",
  "key1": "48t4Htq4KcyYM51WNtasdxGf1DyQhQz9eoKn157PXDiP6nXP2WMakFtdrHyum3qXfJPgj7sPYJAfNHrszktexWZk",
  "key2": "4YL5cvKyfea1rCYUiRq4R5H3njB9tsgsoz2Z6d7wbk1BGdefmTCgyGHCXyvZpwXqLgkG5Hu4nt241WzJ8ya7wzGz",
  "key3": "5QsZAkboVwbKSArrkgbwERAnAtzRBcdZBWMbFKQYvizHgdT2di4VYuK5bhhaNQQiNZPZPeDU34TRYrro7nwg94Nk",
  "key4": "2Xq3gYqyDSWgbsbcHFCP5NCbyzhs4maFY7DnfCFitVNvvEo37VwLPPd1jFqceThsYvHQd7Y8H7Rb7M1q9C2NQmDC",
  "key5": "4wowYcBhJH58gJxWVtQWWnAtZVZg8tPMm8SkQeMg64FEhfmsD4LG9m3YEodDFXs1HmvuJmgbNkjYwhMVSj2i5eqb",
  "key6": "4fzp6Sj71SMuLXmDcvBf5pANVeL2L23trwUYa7TJK6qU9gRSfH53fmLhzeeF8SFuZHTDNsppmm6JuJDueR1FZDWG",
  "key7": "4RYNYLTsD9rwc66FfSZa9MTufbNhkrF8wYj25QHcs5LVdrMHPki5a1yQMG9FLjM6fADnaijtyD7He6ncYGaUUFsU",
  "key8": "3Vu68ScrzrXZqRbQ5c7pfW1KMVxoaV5qVERXP1P3xQQ7HkekFrtTymVEKPSLsA4C5w4vXwY6gMRzm2xkCT53oRCE",
  "key9": "7KFepJJw4S2gX3bpFMxefvip6xxJZy5JPXQqVkRFjs4LrLM9bKX5BSZEeB5fgLi4kG5kFZv7xXMuTkjrQ5o7Rv8",
  "key10": "4z7SgqTohgYqX83KWev11UBBFAY4SrxB3vtmCty2k6WkYRj4EZaN5pWucFUbeys5f1J2y78b6EUJXtEhcF3VAuTv",
  "key11": "5APcohc2yoLFqWxKj8qJDTph59Jpk8RDUiBtjyGktUgBBjGBPST56KYuTZsZ8fCtC22khWgucDqjThkCsE3QfZAQ",
  "key12": "zKojW9g3T7vdzpt8TFUm4M5Yzsan29BarRPmTrysYQtedtgzxUJqcmDd89VHhGkrG9boELKZhFSpgmCbDi1QMao",
  "key13": "wwCJkLqDR6nLJY2LsHEZ6ocxZbPTq3bZDTxY1Q3WyAJtWQY5diVmDUCCcp6JEcHXSznbTMXo6qfU7KDgAdc7sB7",
  "key14": "5KuCh7cwW2EEbkLe6hNGPkAAwLEy2iNNuyu9DViPsPGjuUwaxeLRwqyXQSvF222XtUcALvsj8zneGkzsCsiBcsSp",
  "key15": "2N5AuYPGdMdr6WAe8XNBuZvVj6kPVf31Y11p22VSiuPv7dsR7jrVbruCkC234hF74p4bZvpSZ6yUiT2nCwSTve7f",
  "key16": "5h1CnrH7Zha95FuuPVJc5USzJPMHNYnsxxxR9wvYTTz5mFMSgXnVFLqi3CLxq5u7Dqch6K2oJsrT9pXsKNoFydHU",
  "key17": "4aFbut71DLE6fwG6ro9Jgcb3Se6kyXzNeH7jKp49pLW7iRWfAr25phJ2VU2skSSRVrZzZeYYebLdStfrZasPYVks",
  "key18": "3HXfencaGBCdpZXhxvFAjEjc44fx6pQPDih6wAk25WhzHq9by558gAXb9t5s2F8KRTEKKCSksjCugoaYA7aXJh64",
  "key19": "3RzPnWyQqXSPJd43iBiBKQaa4Ymob3pPbZVc588kPTq9jY8YdBrwNKqZjJpvZF6PYRnofwKwCTSeibqxpGHQyn3f",
  "key20": "5BRyUXgp2KP2qkqAxJsSzdTkt5MQoPMMQfJ9DPZQFoGz6fCXJgBye7Gta2x7mVoHntiVnFeufZ7YdGKeumHxrkAK",
  "key21": "3GUibj9ao48pzvHoZ6K8NbvPYhDzJHWC2rtYNWxHkwdUfudS5PGtZQN8C7cYMFgHyQYn7JducJJNbiugsUHYmWEz",
  "key22": "4zDRxX55yvjPNR9rGSWod3uhPtNVkfZsoAMpq2MixydX4dCP7dqrKLsdxaqpa7QbsEVdryn4ArDzCATJdCGKbqaK",
  "key23": "3yzzmA6rros3NA7qzgewYd2Mb19hcpwEKHRycGcb3aPTdE6eiEcPCVn4Hf1eMV9UHopJkBuUzXsX5CNcXXQ4XrGg",
  "key24": "3J2vzUZhvn3ZUR7bRefuxJWBX7UE29vQPnivWUFEL6gYsn2kJ2EXxH1hCVt1vKzNcpBFxfr74aYecLq3ioVjmHkp",
  "key25": "4RJuKp4p7PtC3bpCisc9oVuNDeTeHVAxQkR36PjrQzUJN1srxRjWmGjbY998RqTNEhQps9CG1ji2ij9EwgMhQRDb",
  "key26": "22AUgoMWGdmYDQyoYA5hKoWBKsJuBNWwdT9fhJygUHHdqDybrFWRrYAmFrphwVgYNykjQvqCvN7GsxPkjPdF9eFB",
  "key27": "44DekZYDy4UND4nKaQiTszYAUqC2azVpiE1AerE72kfvApmYnS42MDm4xSFgmQyt7FrudCJtmJUbt9xoUwDujSdU",
  "key28": "3rcrajbxa9EwcPjtg9D2y1NqNPukHmXnkvBQka5ZLThrbN19KdsVtWJsXKV79aM1XMA1qW8EwuY69grpq85k6uSs",
  "key29": "3qHjS4Rf4paoptKgxzfYkXo83t3Yk56ggv9dUQRxaztmqCcokMR2JW7uxkxaM87LbpimcjCaUrRBSExPb6su8sd3",
  "key30": "2BuJYdS9R5toQvH5j69u8A9qWKisYsUnpACCoPSLPhrQauN9Xk3s2V144HQCZypfAuTsnnEDuRt3oon7RvKKsDHU",
  "key31": "2C2SWasycGBbgbCXQwMb3z8h1T6USPQUXgTdmceEtnVxZ5qehJftYnEitmKCF2gY6dWv2NYUJCcecUdsrpLms9Yd",
  "key32": "GVpToXiNqXir5GXQwwY1h72nB7GhVxfAXiXtxjpkLYK5YE1NDSXGUwhDC4pLDwDRr1Qq6TgR8sXTxM8dmoG3ZEz",
  "key33": "47P5d8DnH5vAd7hBEf3vH14rkx2FNCnxHiqA6um4L3vgwqXd1ve5pagQZPuukNuxSfsvcGxwznUxk1iF3f1U14s2",
  "key34": "3mJWnqqkTLkMTbpthNwFXEhANUBur21WqjtcGYuUTAHmKwp7godxYygRy18CQx2y8d6wPX7YjzHTjad7U6nzBFVz",
  "key35": "4z8bfaSpPTA1aiXDnCcwVLBs2AUe8GGmToEDRaMm6J5y6Up7UAnqR45GyPdD88dYcFww8M693HjMLu5YvP1TZs9M",
  "key36": "9yf5hRYwTvrgpGb9tnpM3uxt6W9qMpS4Jty6UE8JY6jWRYJeRXtxGX536kHCeaMVy6fHx9Fbz6zzSQSaQnFL5do",
  "key37": "4BDQio1G8Yd49cCmADDc29v1WFyvZG2eKCRAiHSxYfUWxyxrwDof8HkVeDyBjhsnq1HTY2nNJHJgHGNiUku7m7vM",
  "key38": "4VGXEzAyvYWKnfntG1wd2uT87wRqbsnAfVNg7d45WFwoppV4fJerAnWhLan2PaBPx1q9qQmArFvrfG6Sqhrq7wbH",
  "key39": "YDknhnc27hwyrEeKKmzS1E68htXkLdTSatDbJLoo7CBHV4KG2RyWgM8sFwuasEiZT4kHUgcehWkKBTzFXZdCiLx",
  "key40": "2yzUKzwkXunAV5YkDiFX7oVXpd7kQvADnyPL4gf7jzMzVGQzwb74XXJFWUeN2KJZf6wYCVciHdQhQy9nbG41gkcL",
  "key41": "2SaDxxjHAqTmwu4J6iEokPXUA9VgXXtFxNQrGSYNMXaXPcxxrX93ZFTFeS9BpaPSmJJYozPhAkyDNNk2NNQ2Xd7V"
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
