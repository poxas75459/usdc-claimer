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
    "5AYkkGyyLFzmSkUcgkCjarGcdDubmuHBLGZZjSAsyyVvJPrQHfZ3WNbZSw3SmGQG96CSSkX9DE2AudZFM6NoJH9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ePnxMXtyfb4tmdx5KWX4pExnp2YXuXcpv5gejfwjuYAUCgdCiPKuHuU7UuqvprjRg8gMHEwA6L1b6TJFyaXLzeB",
  "key1": "yRt4wkq5c1Bysc891zxP1CcSLs9LQ1h95acsK1FNxJrQ2yD7CeFg5DFcKRFCD7dEoyFvs1myA3nniqHE922Kii5",
  "key2": "2EpLM2J1382Qy3BV6xcX6ajuB5XNT2KmHebbX4wQcH7f55uYVsF4ko4cTqNS5LfZNwUKGbeagnifNhheVak3Vgg8",
  "key3": "UUM1s9H1uY9N5Lk69GePfnpUakbedZK2BUZYhE8SAYC37wfqxz4ovD8ffpgttLPPQu3xnoSYJNSVrRYpNj1mbeZ",
  "key4": "4fXnkGsp6Y1KtV9r3Y99geNPHNvXV9e6Tg8SeaNp8UtxGpWnbz8H1psHRyAapybs52JSjRFbp29Jz87i7tFN8dfY",
  "key5": "3HqRimzgmThokc7HYgaWby9UUGBxCLR7got5o6hqRsDFNTRPXGf8FLUbjXpwEdkqF7PdV2Prv5fnVxjtfM115vai",
  "key6": "5RtVDJYjJXFi8su5r8t9oh2t44o7qv4Gn3MogJFo15bxQup4z9RdToFLLkUM1Nf6N18A6ygqCFgC2fi5XWAfAwjo",
  "key7": "24JVVsrn1HzMxSWbQMXszqLTh21Hze39AGTyMuqKHKMFeQCvSktAq17JBa6QTEMehUNdexXAGaiP4hBFk7fqwH5X",
  "key8": "3n9cxqewkwHRnUKqUvhCt1Lcksov8mK9cbgwqd6K78VKe32b1sh3gM5xxjtx8mMeT6ZqJqj1PhMyGJbcefdPfASb",
  "key9": "P6dT3Yw3gk7MCB2UNAuUjGxwZCeDaJh81jRLeMBXNmrtxQfrSxJcRwitmLa7keKrqB8EwCdtJPEQSs8Lyrhr8fW",
  "key10": "BwCJCzUYAJ3xJGVMSTbHKzqXVDMs3pP7zREzotHjcXCTgCojyyAsceasroA79dp6ey5qSzYRmQFwYwveL9JJjYV",
  "key11": "2so225Xw2bgLAxtfyKrPvopspDKG9BGEyKobAdoJHwLQyc77iv8HNYNbXDrhJpVZNWXrxB29LbFKZ5PopjxRocCK",
  "key12": "gTbc5zdfx9jjkV8qn4hER6JMPjQfTYXhei3NPcZJa7dG14HU72SVCeGX9xXDgKDDT4WqGGrEVDNHGqeX99CkPiH",
  "key13": "4ZV6LEP9tCZUbkaWSGbh8EgFMa33qZYDvBQ6wkXNvFefYueWNhLsjVD7zUjPsL3A9KhMshjccWU6Vmbo5jgVAUoK",
  "key14": "2ivXe8qGLsUFGDcdkWt6r3rSPcyptXeeyJC48ehoPjXZKnyzWm14aofGFpWAHRqVz9a8AGvQ1MSBZFi1Eq2nisRt",
  "key15": "4Wmc55cAL2qQhtpgzkWWN7twidbRhWmuKiwHjPwNs3RMs6YYB9MQvpoJ6L2EXgq8HkMREmX3SePk5q781JQEoTnR",
  "key16": "5toug7NpWsR3qxa4bvd6wnZCAF8RNBmhUycwFjNpDRwuo7hEfCdDtPGU8YUDMvmbzbLSoS7ykybSx39wP4Gej2nx",
  "key17": "2t6UapbruFoDJA2Z94a1aqqEVxEpYBn48zXKmeH8FbgUM53FvrCyG9JMb7oyhtY58pDXsLQeSE8aodBvouZiTKsL",
  "key18": "5kRxiAkFkeDobB3NtgkLAu8gJZoTXrao31TGTboj61BYm5FKtRq2Ra8xcnsrucYjKEUMgCj9Y3iBB2zE6zq6jXiF",
  "key19": "4FCNxGNomVAZ1Lqi37d5NqPxmSonowP7NXRB5k1beCzkdzdyAuRBZkhkYsQSxNaDEth4pJ5ig2GtgdiQGzsPhyhS",
  "key20": "4LhXQjfBZPipVEw5QMf4wWcEvoEKDnRADWdDFVh4uM9EPWvNzfvUsYMev7o62TZvo7FZ5o5p2VP7XsqcJEDQpc4k",
  "key21": "2JPzCnS6irezmYZg2WwBH64Dhnr4FYr3UuihH2FReTzHRRmiztnURJKQXBJjxjAH3dd4T12ZBXTqpXTpt7vYAYSL",
  "key22": "JTHs27nGRHC2QfiKPFmRMKxgvu9SRNHdGrUwwZ2xuiEksrBrX4AsXPPJdiVNazi99Z3uGZYV4JW2LkpzeYGPeSW",
  "key23": "3Yq3W9GZR2D7DVq9a84Vj82oPcApKkjzF2f8b43e4Hi23puBSjJqvRKTSeN2VJgQFAvg3mxhbirnsUiMAhKSQy3N",
  "key24": "4NweEkcd5yCLzZNKFvA1oV5fwNJn6VXe3qUfxk9mcZ97AtbWfxstRcibR4BXop9zn6PCNiRpwuXG7nZfJD3Zyq3",
  "key25": "3sSBreUL6TrbkEoyXqs7rFUzTGVsCk7utnpkkcWXLJ2EN3GhPPKLstn8tAdr3rqPZQTfvGLEJUHRncEuzyvi9E6b",
  "key26": "5X2A7thNQJstHAoekseMa2ZV6ui2it3cBRaj2aZcYCdbDLCFUyUpSnHtGcSjweJ4ArQEfagzE38gCe3XHYAjsNmT",
  "key27": "4xEPzNKNRkAoUgZCSFtudQtGTFZUyEi8QtShhYSEPK9xHRW45VV2qHiAjgwS15tQU8tGJLky7qS9K6t8BcF3HqcN",
  "key28": "2Rs8HTJqkS9FxWDQzNwTdzNAxm2Po3ju56FrmU3RgtX5hVnHW47z61PuJDTsipvAF5QzvF4wpWDCTLc71abGLSJr",
  "key29": "3H48Q6qLgvrnLZfxW2vKVcfSJ2cGdcxwo1fCKq4yYrfVaW2M2iLMagGa5a8H1tp8EJ9VtYhDB3WDuEThUYf4rEno",
  "key30": "2MzSGdG37482qVsG5eGFwfZVQihWyBvNZqAffuCBumAJxVNPkc65J7Jfv5YV4jd3E4UJYHVUQTznc2f4LT3xfXFS",
  "key31": "21g3aXf8MAuxgLBmk9UYxBdcJgU9QD9PHgGwvZe4xqq9EFcWwKpiQbQKEk6vN3D6QC1RARbQpxnmGqsbcWw67FbY",
  "key32": "2LWBfKkfJDXq8vN5HdyMcM5ePrTjP44R7UQdLpZF27beN2Ko3AoboCR7Fh7WF2BENkVcvzHsU71SxZ6kqdraQeeL",
  "key33": "4UzKZzhGCudx82WBMX894DrHJwG4U1AjZukLsTH68yszVJe8HdmALS9NCejxkPFurVEc7TEkh3HFgzKLekWEJ5gf",
  "key34": "4hxetqYEPquqKR4yPFU9nKoQ9vYBQH5QHX5ZgkXAb7AeACCGPw6JWfV2UfrE1rGQunnq5mFFUr2Jp2TeVx919gnc",
  "key35": "4WCyLBXujPpGuXb8n1w8Jz8pxR24YugB5cm96RMqCYxNamReLMgwuZwo4ew86E5KwBA948s3msdQrYr19xe72oJj",
  "key36": "24XiF33W4rv4vXjQsg5X4yBzB1GMajY1x9tmxR5Qp5MWQa6hcrYRTo7FbAoefZKutz2k7Vzu35LgeL43gAdh1pkM",
  "key37": "4Bp8bMiaJY6LcxfERQZKQKvvuTz9DArqArTd1Ky54W2aPPgkby1W9E8uEfxSiG2EQSzcRNXv6VEpePSPV2Nmz7La",
  "key38": "v2nrAaAUgBtFYWAzoAUD2F1DM44GFUqURwPYhXSEBvjbnGPA4UUjWQiWnuUtCcrmVj5dArNPVsHBEfNepvbh3ip",
  "key39": "4Grazgyva8g6X5Sc5J863d8wTSoM8mn7qEBj7f6vju8iqjjdRtb6AWuyXUUKCX7uJg7AShcjvBZdnimCRrWXkHPp",
  "key40": "2BgTgUoSgKMFf9iwYujPWCgrtD1fkqUj4f6fqtGbzHUnBkZfxndoJxwWewTSdc6cehfcj5MNrEPXumRPooUvxbLf",
  "key41": "3YFBC3THPb1tmU6NmabJuUgTWqEjfbgEExAjx6zJmnDfwDVXk7vpmB1iBrQeiPCPcNSjD96E94pn8NYVZg2v4dZ1",
  "key42": "56Qmw26rtm3H3Y6rRa6yuUfSaLnVrdatMkv5oC2nD8L7WTfp1wV9mqFuZJ1wrSHxjVB67DDaexug9HCqbYu9v8kX"
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
