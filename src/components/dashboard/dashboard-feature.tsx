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
    "4CT9h4RFBoqoDPF8UMYJBpfZVj2KKzZRYyyXSAxtriqeFTvLwJjkMTs5njL8ENnBLB1hHhh4hN4sAJNdWQXGMrzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hhYrnpfBKThx8VEkcHvN1qRCcYdpe4F9UgGkH5k1bApVW7Yhuc8fuykRnAdnmJBW7neJXPfjqKJYzyRko43F2ki",
  "key1": "4CdrfWrNj12v8nXtjc83rAGoKFaQQACf4AqhUnBeC3W1gQUk1ubRvULk4z9UFC3vRWEYGTKajAPBm1DdN72N418h",
  "key2": "2CqKDP5K3ZDer7BZwjVEAaKaiNkhLTwFiPNPjVSGoSM5g4EDaAooyghR8xMhatE2LVxoM2RVCxucCmmAtgf5Zo6e",
  "key3": "4fNQE5b4J8cagu3atnWtEneTVdPtRPynygJ3gdt3YzysAku8KCLjyNeRKob5KMnq2sc2g9251rwTxBTPPhaaEbMX",
  "key4": "2iMc1xDFcewogBRfk6LUaymsqVu2F9yTL1WeDALanFZye59G2hrt2oj9GGrnVDmT3Wr6TdPATfJvL7m8ho23xiFW",
  "key5": "4AQQVKMDi5HsFmKExiHwytEAoxytjoEAJzMoWg2q7cXhWvTV7HGTHKcHCzLYiXyxPgqbGtkKigcJDVqHEzdaVBx7",
  "key6": "2mvhdK9By6Zmroei9Fj2Z3VC7DQ9rzeK7anem9c2TYXMFk2icvcbVzYeHvd1vhuU4pnDJUb1unQDt6M6UstixSDT",
  "key7": "5TovDsUSAsPfdDdtmgDkK6u9etYabuj2YLKr9eoVVUhrPs1KJfmZoAqpegdd9h4GGk1sGS2Wo26bc5L8ErmD4FdQ",
  "key8": "m2SYwbBvE4WjkSWWv8AmxzumVrXbYxpPr6a8zYtRqFVsCc2LtTbUjzbv9NuUK8tYCf8JBpZeJUJHto5CiGoGeAf",
  "key9": "mLREMnfgZoHA6NQdr8Nv9PUFbxhFU2t7BA7DdSTmSYfqc8b2wz6jHab4GvHNeCzXUurHCG4pzAfgcJzxDUHas24",
  "key10": "4EW3Vz3Cfajkemn6vYz3S5TRmFDUQy1hMdykmN5oJUB5ogtutSQ4Vypgzp5WTvLNiZgvfpoz4iGcbywaRrQHx8Zx",
  "key11": "393kxXzeBLom67TYTYDerKWAnngNnnMXJScaTQ3q3z5DzPg939qrtaKLej66DbGtaNtkEoYcX556DuJktiRGkumQ",
  "key12": "44DYQ7s4tYdLDHmDiNkdNp39aezuHrHTi5UCcj2JtJdGzee22e24uPhy1aTmCNKwYNGgFuuyPNay5rfxY4dkoNXV",
  "key13": "3BgaFZ19oxPEgNRvUtZtYdhxZVMuMZY9i74h4HB8oKzRoAPBp7jwmH65r9TNksU98iZGBCwqnYX8qrxGuBhSSB4p",
  "key14": "Cyh3fd997sxPVs7FDpfKWJuPKp9ykJWe3sfsmy5u1DYefkiTmw39BcFi4PZdZYw9K3oYaxH4fgTcY3zwsP9v7na",
  "key15": "4iSfPfBgo32XWMSpzvxu9UJzmvBt6RmxHr1u7Pkpvr3y8K7jKBYmzAMTV7KFxxMw1d8cjaNbqC62dPb3wj9osRQV",
  "key16": "cgyvjK4Ci94BovgjTeK76Q4DUFJniSwpHdF2VP96SexhaBbc7d2DJuNMqceJg9H76Vg4EExeAELQMRSLwoJYzbD",
  "key17": "2ARsAGjcQA13JFCWwo9wgXpaLdZ2z2A3H1bsp8n9uWm16SWRaLa4fX951NbCzoAbHQgYeFWVNq9wVcfMiiKPGCqi",
  "key18": "5H84sXv3o6bRQrY8eT4PMYoUZDpYLfwmCfNxmhjGA64UrcHWRJBvrNnCVb4oNgL68YQ3b9t1ek5hv7xXWy4m7imh",
  "key19": "4dHS2jFhYSzzUGmnwKGM6LT7q145x1toKnMJQadECR4Y9Ap4z6wpbHMMVWHffHiZCvu8BebsLyAUjW1srhMRfdvm",
  "key20": "3cKPbjr2BphYBT6Dhqu6wKBZedvjVGc88AQ9uiLbMBjPHY1k5Lrv8SXgJkg8tyiEGu9XsmvdAjiAMkmJ2zxgXqSy",
  "key21": "UPFgZ3D9Sa6PvUkN7NHzJwhUyjj3WYAkK9MmoqTtWhi7ZJdB84dkNF8mUQfAhherSMwTZmtfRTWJyywvo8TtD7c",
  "key22": "3CCQVWK1vTW8Poe6KAG9epBAZD5ceZqzhPtB9vjyMiKsaDbcMXYKXAXAApLfa3vXejvLUVDt9JSV3c3WL8VyzYq5",
  "key23": "621jM9ZSBRpymXH5uMCiBoVp26Z6pwJfb9ymgqQM6fxpuBGH3wiNRgve51AeAj4aEHDp3VTTgzN43M26uSYXMoqv",
  "key24": "xue4m4HHDSoiA26zxUdvbTsqHcoeC5YKuRoQ4V2nRkscAJStX3aKtRYXgtQpMwXo2vLjfS5KLHWdfGGcWNhLkPg",
  "key25": "4G9wbML6tTeDeFmmUBwSENUAL9taKqzPEQKJ52p7nda36yFBiNukfYYxzYDr5Z8ksKt8EAJXdsqCCQ33MfnaJ9g9",
  "key26": "3nsQGYjcFhCkV75Wq45YGaRqmVDrF1k2m43tpKhMrJLKwA4JEKQdDiGzNRQeax5yoLeYRr7CNqGBxb6wv1pmYd33",
  "key27": "3cQndKxD92hiRiA6LHmm24Fby2wMw3QL1u3KWpRW3tsTDcSS1x1WDXGLQ4axs7aeuaghUfnHbYX7zCQ7dsmrXMV8",
  "key28": "5EUPUaeh1gT5NUBqYx7r54gunjz1biMBRZhq1WBswNWCDphsN62GJj7hAyjgwDdLbXjoUV4WczB7QkBPNuSevnuB",
  "key29": "3tXBd1YuYkxKg51sdJvEwmJnyDdiPUwWjrZcvNzAQJefvUYwb77N4E69Lo6xCJ6ezoVWsNEKtubsLmxWrYa6pVXh",
  "key30": "uTDaQWfVWDZJ5ug3mtEppCLyF3ocbszVKQSEGxEHbsecUXHE1otjqmEsbppocXdWQ3qhqGaHcBBR6zK1DCci4hv",
  "key31": "3NygrwF545rjqHq3jcJbPkPULSMSKXhf44xMcpPvsagnsozjfnX2tUfyVrxnd2JcPuBTtscVmipUaWPyvV6niDZp",
  "key32": "5gWWsE5Bp8m98tYN9jcjxuztnuKSAaLnCwYisCCoPkBXcqksQetL71675cL3iw1KTQZb84moSC8WkKaVDbNc4ZrU",
  "key33": "GYPb5ZF25mZ1bQBRMJrg1WCHjWr5rFYRFCrBx36dePsC2sMMCPgXVCFWuhdorPM5NtcwkS8jAWDxHsBQQN16tgt",
  "key34": "35P7ZRc6wJevKFAsdZVBkfLsycTH7wBC5bcucHixQT8aD9XJN4HbUV84pZZoS3nYSuefVJtzMjCUh7i9DmckqnJ5",
  "key35": "3BNuc3hRhDRXA53oXqc78fPEeVAWMNXzLoVFJJHirqUj5jQJYM1ikRDJqP6MUK4JRLw5FFB3Tk1FuXnnu1q4wP8e",
  "key36": "5ea7KoDK7m5U3Cim1zxBDKNZYFxJzyMj5a1wUQ1JsJzQ7tZZg56oWtk3EQa1ZSeX1CTADNuiDTwpL73LnRPFkQba",
  "key37": "VaPv2bi4a9xwFJY1axmTnxQvSvGsNur5VwatDDEBLNAaGvPABy87jNDjN3NscRZczfcNthjy4gTTE5Jt9RDMnCw",
  "key38": "CvPJjCRmXfCBV2MUyzJgeStzDCgvVWxpne644wUFQ5aWa7QFezt4kFcgKaBbWHkcZBxpQk5xsSR12JYYicxNwez",
  "key39": "3cwvQyHXp149AsGzQBnhegUVssfhLwgjzRyqWrG2DKeifamTBFKLMbiuwj1UBdZS9a21MA5fRA61NFeRr7LWpnYP",
  "key40": "41GaNGe86Koq95BfjXBGMtq8wKkBfFVWojbh73RvqkYxnyjwyQerEGTSt9Ro2WdoVVaxghLkGn4y6xFwbSAZbDCa",
  "key41": "VNEtaro8ohqheHxwqNbRunPuisv8GvPjCc9Q7vkZR1JFLqmNbTJY1nBJjMkWJ4T4swChVDDXSVaFvdSuNPWoTMs",
  "key42": "4fDxGdjXTKALHtQ3SDwHhmeNon7ZyGE51zhSQyD7daUGGqDsxFZjJ9zbm2Fg1eFTH1BuyTscT75b2n8LiWKtmL46",
  "key43": "5DkD9AuJqfkacYuwzsAmgpboB8vwZzyuhavmoyfY8mVqiszWrTMDh4iniYCvjSeTPZywjVjqGMTMEctYMabbwSD5",
  "key44": "5bdxS18xprVafGXUrBpmFAs88Vj2iPf2kC4MB5unAfJExDMjYXdPSZDF8R9dZkmFyFeiMFee44fb5KwAXcaaauFG",
  "key45": "646AeRQdm4DEbMuqfH8bHgoywmbvpUQaArWRhnquDQ9mrEQhXKUEzyJEhxNATCGa1B2MMZsPU4XVnkTj3T2ujut5",
  "key46": "4P4PefrfeCPDB1PqeZQXkenyHGeAFHzUxr1QUc6xbHZ4jJnu6qdBK1XM2n6TN5jj2DkuCNFTsyBT6w6Q4SCVs8Tm",
  "key47": "57Ah13SC7EMCmjTbccG7F3Y5hQgs3CaxfPCYLVcgQmJorDb66AzjXx3quuD6JfBHEH9yN6BGnxg6faAP23LUBmgk"
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
