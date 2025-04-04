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
    "5RpMzh1z8bVwuVwm3BMQAmPRrfRoPX4j6DX5LPAS9QEWpwUb1DTaAuL8h2j39F2CsxU7jiBaeDYj57jQn5ukFnX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpWnMoUicckKxDnTcKaxXip786U4FVtJBCTeP2wBkLkFmdFwbSCPfzzg2DfEZ8t6t6kYH5rJKuxBKyr2RDvbcE",
  "key1": "2XFqirVoFfUqdsikAPVV2BajLGcCBBLNtzxd4C8n5ZxCCx9HaYH4xnTRxhxekRiq7db1gUdw2y8SKPk83gwVT69K",
  "key2": "sumrwjsS4RPNLeGH4YGymEjcfp36hSpo4VJxekjCjFjwnKN48yMWxqEwNfntwjzmGpSjRTCaqvZ6S7gcLCehrLg",
  "key3": "3DxGYigyyTuF3QGPWX3nxW63qjPH629iJppka4t4LQ6SUiUtYFfZ1ybjYKg2PebN2UCHunwHhrMMX18Zu5oGnXUn",
  "key4": "299DmLAs9XmWSANDYWzqBTK5Q8Zc6cKTEuUzLPN1regs3JcqzgbMHj9mhVBuCSVX8GygarQufJDyajm98qkayrYz",
  "key5": "QMrm8Nmpx9NH9rumTCXfGCSdC8bxqCW7pGUJWg5tEeAZXoEdqV6SVKrGwUeD6D2pcWerEssqNrBFDkCzf74VAG3",
  "key6": "J8aX46Tgwq8nCniYXv5cBgJY7hhvX2jw7V8urfzQcQpyHRwi2V3w7dSfo6NxXbnNALTj4ynWcMi8p5WMi45Fxiz",
  "key7": "4LxGmKjnuxfT4yX8HNfhr9UVBpfsefKjwqJ7MeDAMhDcYKHcpcAAtXf6KGeVWymvnCavirSLNAKba8tFhuvijsSD",
  "key8": "rMucTPV3KLTqvqDUXnjMAsPwG23C9EosMjJfCqKttmChCXSTGr4EMFq8HHkRjdkTMseRviTPNHDA4Ez1tUx28i2",
  "key9": "42h2HMAegiYn4QHWgiR6xJ7QaUKammXC5VtLHBjgXnaHGfWTjmVJQfsozdabfR6fw1aBp9trFRcG49tuQhMeXzKY",
  "key10": "j3uoxEJqvQCEUYn3BCyHHzr6S4hBfccF3S4qLSFGW8z26Fi6rfh7f9BP34bfeVwz5UTXc2iwgkVTkMfNn7JnsLT",
  "key11": "5T16hZEewqf41WS9at9kr8XtZkzE4EStUXedR3xWk7BaHcQ5hSkLTt2NbwrsC5aZnFpUCCZjbnko71cTFU7MFMwT",
  "key12": "5mWhuddYQZZ9ejaywK4w6XYarQnjDHgjtDyZrq3JmNWe4rNhEkzrJR5Ev6FGhtTbirj5to5zq8DG5EYNVQXFUbWC",
  "key13": "2eLQJGSoLZx2J32kYS5qqeELcUrxrFQsmMznJ8CMtmvnEPmcee3offXsTPinpC6kEHRnwN86faAf8khLTqpZnM7M",
  "key14": "4yWRLZKaRD3CziWQCVoD8ij47mjZomGfuQWKdeSzez29qUM7HQQsiG43Bhn8e4HeqvyhcWQTujBisFi3Y2uY2K4u",
  "key15": "5u5BoR3YAmFjrSGBnvVqfCHkv6UJi5LD3xdT41gwrDWfmAzt6QE2PaRz25rMFSB7x7gEB6YJyshytK6i7W3TQvuw",
  "key16": "5vQ58hqxvqZnZ8QZBdRLMXgzdG8vckJUwRaatpW7pUuhAvK7rN9z7rhfk8sAEKiZbPVKvXXCntZ2uGKNRozoS3rg",
  "key17": "5LNpwSnc7UzTjLxgKSkthRdeKbUE3of7LtenxpHFT34575dLjB7rwEaVfoDcpZ4PHNtuHBv4M8nuSy588UXGf7e2",
  "key18": "2GanrJFGTGZentCd7VUZDcWy4BD2uxLXNrPN6kk2GyKcpJaEqAfA3wiyha4qu5dzvgRa6vf3NH692xpKCTPxmUd1",
  "key19": "5m43v84Lsrn9fPUYtSa8TiZ8EWJcYXGVx7HcZSkcpTUHgTL45b8qFGW7Z5zXyHijizfUCvHws6SojFAQ6zuRPzZ4",
  "key20": "3QRQ9vYg4daXdckWM6jHNcPK8QzyVcUPYpAo33nxRjDUDEfxqhYALpHwnAWqjcJnsr5XBhGrQV17fo2ZFJGnEHiK",
  "key21": "BN8Rhq9rMkkvK6eYWbrzqHdq6QaQRqfSELsMnwxDA1VAY4wvypgSsokT565P8PxYwTn1PXjVAA4Rz5CCWh6THcF",
  "key22": "MFHGCaNCfXG2LdJUDfbGT3XRGcgjGen5H1J823voBgXAbCNN72YUvBqHu77AKc8U1XVvKMcNUpFEUmJV5o4GZji",
  "key23": "5wE8yCjCDoFGQrYThba6UnYL72JfCA6bo1GKnfPkUVndqqYcZtXmyoxeYj88q2yAn5oJZ8qRiDNSz547692WStmy",
  "key24": "4fiYDSqdhjWmvv5ZiccNVM7YStSZmTJBD76FhJdw5akbQ3P4BFStLMqVBCHw8thZmgk3AVc3gzSWPmfPAgBMCmWN",
  "key25": "34HgByV1FkuNXAhxVHbaM4GVTpuhVr8xqx1qoJHeUnTZXTDPVQG92MiDVeNDGAD31mGi1X5tfuWFUY8pf6f9MMYu",
  "key26": "3V4dYcTS291gkeMQCEYC36ZXtaWSLAnG9b6SD9GjY7uASHfGbf9sboZT6bpw1emnGQYqSetKCWBVJEkP2ogZj4KT",
  "key27": "3J5s4vXNZJ9WusoRdW2W9my1YaGnQkQWgNLGZ9bv6UGCee2pLvpRmv4Tn3RDhn5gdMJuM9maZ2UuGnu4QBY3mB7a",
  "key28": "5N2RML9r7sNqzEjqSJEq2VNH485ePgAdV6nW4YZi7Q6yt6TRep9VQCeMjx4qRX1rwBPq7eRPj142H9uRpMzVrUPY",
  "key29": "RGiAgJZ8faZE34yYMXh2931ix7qc2rmVQQLnrCQmxcsdek3565DB5DoES9zzU5HbQahfj6oh23EJLCWDdy3yafF",
  "key30": "Ba2vYssHZy1naS4VzGpFnYnVtwaq2q2fY21cMVDSVH6xSsPu5MmxdQ3xjYNx8sPcuAtq3BsA1p51DSPuVvR1Xeh",
  "key31": "5ruf7hcf8YSm9P1SJfqBN51FZwSUNfxTMc2e7Qgy5YCbpwjeBy68C33F6e2xqzGseebNhK6nrUURKAhzUMMzbuQ1",
  "key32": "24NAnEXmNyna12FsN1UGeWCCmJ8aNYrpEDVtejmJ1x55kjLRr4MDaNxjQSPS1dcXiFWKwG6784ZZgXgMTkQoxiDZ",
  "key33": "292aw2AyZKdrgYsEq7o5sHeLLEJ7tM3fArV3SAWB4Eybat9iippPnXN3YQiexpALow9uRK2EcPBesDWFdWRWwMqS",
  "key34": "5iXm9RJyzWTHAUHo7569kvFPjx5NESHsLqQz21D9hd4p5ryx29pU2jbZTBgvtZDCCYxscjaiUdTs6xAqG67wPK4u",
  "key35": "cTCqC3RFdKPnWVJ72dPwourYDoATcjqz9z5ckKihmBVuPyDVs1PZi4voGejzdT9BbUjuLu19CwCsXZQRvM6acS8",
  "key36": "4Q9om6Fy6LkCJJ7nQmK9t3TdcFGGyFhdWB6aLpvT6B5G9cWf7Y3WAdXvwSbtfGnknEQPBidEgSRjsLgbQCpctWbq",
  "key37": "W1jkJ9Lm6jV8CN3XE47RBsPHZkqqaxDFjuDFGqj5Y6xBhf4zXLJkkAdVKrMBJJ8zxDHYKxd4WSNM3D8cznRvJY5",
  "key38": "4nofdvmaWVjsmfVHe2iTyjJtyQNSsYPBcgyUHEQQYoHW2oKD9SMHwzh8P4UncRR4vnk2nXCXHn7LxFiMQ1W9XBgx",
  "key39": "3mz3xXwaxdCF7qGFfVaXxNiJHukQmn6TnStx2UtbWJnBTogR87rrMvDpkzpx9XDJRz3oYKTmxAViFoWNhPfFDxoN",
  "key40": "4Jo9CtqQzW4QDe2Rdf2eSn3jKGb3rWwp2EC9d1GSQpfSGvHymnA1GXNPGM57LEMQe24JZnU3peHBHWuZfa3CVXXw",
  "key41": "27v7tVcMx8m6GqXdD32Gd5e9kRzmVthXRPXACyULCfLV7SRABZK5Wa4DZqU7NgKXDLQsEMRRSbVHCxcBbNh5T8f5",
  "key42": "iKqF3pk3BiG7Pr72n2rTXNgQh4CHNaAmFxPgFadqDNZJEUCvusi7TD1qRy98t2jxQe4Yq39bnH5AYWWTWf9gYpZ",
  "key43": "5SCAZgRuCqmgUznaLMSZk2b55BZEeHoBHsD692MWsaDyy6uw5tHQU1FC4ZVNZr81Di5BC92LVF44CKhsHdRVTCs6",
  "key44": "F9iGqMvFRy11XVTWwvrnM8VF6qxnFuNZcK5ywvgQNTKQ3oeX57KGzJAHk4ncoUT6mT5JUMCESExpUu2Eb86qfZF"
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
