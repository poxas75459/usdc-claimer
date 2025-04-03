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
    "VcugSDYxEGX8T4aJJBKuL7zYKa6BfMDcZ2ARG2Rgnq8csxGReVZfZd5s2L9zbhbfrmu1VmY2ktv4JmjoEreiYP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5fPEYmiAtmRBhEDox4Uk7SoGHQhHZTDM67vEYJDBkBmr4UBDoY19eaF4ADXuLnxjUrZ69RMLx4wdwJKbJgroG9",
  "key1": "4W96VY2LGkijcjsHQf7WW7pCDyAcz9YqJNtwRZbhGmXFx8rLdFj2TMkvsugnLHb5gsA77Hv3nbV9fDFxCdhy8AAq",
  "key2": "5JexDXT8xokKWqnixqqqQqzCzaLJJYJTUWdDZ3mgQNE9zESsEvAysqdj6MEzNA2Xso5Fj1tcnTXCKwCVDHN4ZxP5",
  "key3": "4NSecs5tPDDedUuzVautZY4gan8SBzu9ugfyh2FDNENxRmoNo3ke4uMXGTKuHBkREAc7yQ2r6NkMYBHTjng4x6wb",
  "key4": "Y5ssss5RYmkVNkbft3KnfnUAnSDpwPakVP95ie61sernnZzxumgKHJCY8gMsQoKVw3vkXAD2bmZvBNtGwSBjLy8",
  "key5": "2iKfcB5ZCVpdJMMcyjm6DaD8XyAs9rPjmTgv1T6rpw3iQ4Gr3gTsMqSTT54WbshUT3Apqji7d83imAAoJGdCVu8E",
  "key6": "2vDotDUqpBaDjZYthFQPAMduqe6XhD4ddtKEcwkQcrGss3TdMDQPDDdZevqWGhQozKpVnUVtiKSL5yEQnc4ZWVVA",
  "key7": "3YsiU3eoEde6ksc59qTmk5eJrWWMwF6qoX9xtUQVhHD7JxvyKwEp8VfpMKPsENcm3ZHj3amqM71k3NvgUiAiGJQA",
  "key8": "31agRPs81ZoDRm9KtigncdfWLGSMBiPhHqkFr1a9ib5zyMB37Xy8UGSgF8cG94B6bEdqKdaZVwpeiNCCNyq7wjnA",
  "key9": "2SAKxM21RjkDUw2twdfCRHcpSJWnMvgEWHBWLiXe6mswWKRR8tBdqYoerqXoDm6CZzpqsAPiNnqyKP3APew463p4",
  "key10": "4MJ1vZ71rbdCZ7PEFYy3Y6VBgemdPL1CqoTCa3CnzoAJj23d29u5tVW1dw6az4JZPi5HjLuVyhR2br4jw9ad7MJs",
  "key11": "2NLfPciwG2j3VQjGdbV8VzY5jS9bhbVpo8ca1tPRoyQVo4TRRAPcEGoEStMmwvmSfzRihkD9xGKixpVvj9e59ggE",
  "key12": "3ec1zpBVoEFqeXriL3f1k4i26gxscSenhtfyR2Fvc4WKbiFeAMUMZruRdmL3oZLS4Kh2QGusCJYiqsBiWEiNzt5y",
  "key13": "63Mnu1zzs6mm4rFe21sAd5Df3EQJcCRttGs8shBguom2gYBP1VMesiVAAr8GNoLQPzL7S5KpLJXagpub2qFPfRNT",
  "key14": "4QzsGnb4UnxF6ZtdDn6wc7vWsCVSqptCV9N6V7xZg1h779EHZ3b7E7zPLCqPq1koJ7kZjnKKiowz9CY6REbc4giJ",
  "key15": "429BQ3FgWodG9djfUWF5HP6XtMjgsgnNYznyj53Tf5jimYYHqtg7Ejz1oKS7NqDihGyNb1ixo9wvk2HfoiEGNBhR",
  "key16": "2Cgf6MhYs1ZozQm5Md9nrwrDK7aD6Mq3vkZSw8mBUsj13imM5QFGFkcux9w873bkiMvbZneLFhyKWBkPiUh1KUh5",
  "key17": "5ThciUVG6sP4cxADm58AeYTURRqiurYVoJTRC52gxRQMpaxGadbJp8XSYdRRTuenD4nr7Qbm3aMpDnGCEYiMdhVk",
  "key18": "5ARMckh2r89Q9NfDvFkJok2nqeiQxcGXpaHyvwd2RiKwWrMHZjQEzQ4jVmDDknhvirAbepxJ1Pp37L5XNHMQRosw",
  "key19": "4qw5FAFxChzPo69WJ6AiK8xGR2avrdSAZCTaWm9gSgwABQSyZbLKAyX1LVu4xp9q83bNnyMa8SsY4TpuRdMGJXZq",
  "key20": "2mhTrPZAdJrVCyQRFcMCgDzqS4i65qv2jsY4XwTeC5jNNXWejnquiUagWoent6PQW1fExt9W7gYXCwsKYHswc2fw",
  "key21": "4BLW3csc6EDBvRbsnPzBV7GPPKdDKssNS2mpzM7dQk3pYkALctds48jVohtTJKAnm8HYyaMwogQrusoWw9R13YUh",
  "key22": "3RJJhbtp8tadvSQACr6gzUJweC8o5RzwYGtBwooxMAYN81Pa28FYQWsaz9tyZQVZM8LFmnQrTzA27qh3LpGGeMvS",
  "key23": "5KJp1byMHdFy5xhsbNbgnS6CLisqf9ZrCN6DBdmX2SriKkZr1VMv7FWcMEfLJaS16tDoJBurFnejkXtzcXrHf8d",
  "key24": "kLcND9PHNvowzWHNzSs58mcrCrJQZEViPiQ3ANLcfwmQLxAjydtyFCf9UKWG2xofosytX5o2DMiAaHrydw5tjNz",
  "key25": "evAnCVZXTRkypv9Hkd9Ns1kpqnBKf361nUHAHjpDAfQTR1uDfTWLGqVU89zXBCzrXNbskijNHszn23MY2geWyp8",
  "key26": "2ZvqwfCfnnvNxkomq2uRgMomUC7P4nGqR1dpsA5hxVtdSY7BejdFbcAV87TLEYtnuLwmmQPjo4hWf4957jphLVnT",
  "key27": "4UbqMBQGgSuvcpK4ho2pz5mobW8ZF74Bj1nqZ43AQnjQJJS341WDW2PSE31DGQHQUBmpTaoZssDRzCqpCzGuMKKd",
  "key28": "4Qr7dXkw2vFmq1bBHpvkGsupZfRpYTiPSSbycHbNJdrebu4uRuwuMfz9GFZXmKQtC7JFUv2J5Egjc9Abg9XrxkTP",
  "key29": "hb2AJ7XCx35dTQkG78VVnU5n3dTeXERtpNgrw6s1o7PshG881kzPSHxP3bKSpkxHNv51DEo7Jo7HNZPyx1hi1cu",
  "key30": "31Rpo5YTfT3na1sSHZzoCjk7WHRoKGhFuZfX39oPQacf4rruqSbsimBc7tkJJsXo7xd2QfWQNPkMx6AcAWKew5av",
  "key31": "4rdGyeLE1qdoJbH5JyqS5AZyrhXWbRuXhS5RfCYZeMT3P83yaghY1P5skUPjfFTBt374fHyRTU4VfuWo2y9YnUzW",
  "key32": "49fk57EKBGhBCVvtCvJJLmqrqXJqgG3AyNuegds6JYeU7Spq1HKCB26oYXJ21hVmjxNhFBSjPxnHcSd3exEFekmw",
  "key33": "5RXZ7gMYaH5WSrQjYP3u99isV3mUdqLs4vWrvVbZF29WRc722qW2oquK5Xd2AJhAbFMMHY2jEkGDdBWqA5aodJX2",
  "key34": "3ANKcDnP7qyLS6cPwrCJUwxyVPmDMNA4mq2kpkd2DnztsfcWagx1SXWmmhpi1Piu5kUgVCDiFbGYJJ1wcm9r6Y2A",
  "key35": "3RaAbP4SsZhWase7aKRQbsJ7PRRQdc8xXaSsdjtgvznETW2PPo6k7s7HPEsk1QPwp9FwJpz6K246iFQri6T36v5D",
  "key36": "5Ckj7aGaKSMbrGtyLd44cBeZgpoFirTJcyLWuUAinjkW8bZCdaH6zYXQZP3AtFBFmfrx5a5McFB4u3HHA2yk3Yag",
  "key37": "2FYSB7x1VwqJt1G3EVC9zgbnvc2ogqFRMrZcf9Qo6m2B5MHD572MtxnNtRmK5idVL3PHHm7Csr7UZDQ3g6X4XxtL",
  "key38": "3nQQVfBENpAZCkt8L29yD9aHSzoWy3UGENxdoU4wuMsujCRGRPMRy1jrYCNKG4Liye41LNGVWPbummLnEdFFyZDv",
  "key39": "3kzra9o53qpSsB9aUdXCcWyYRyhwWUkEtjCZmEC8dpAW7rqwgjD4CfXBwv3MjfzPCtpai4TQGcEfViwapjEs42ss",
  "key40": "kwrgKbkHhGPHMPKxr4dcYvrxzR1hafSPAjjgAZzLd9WsiKendVgdH4TwrRWmvTUcDJgUpYMzqs4Muz9fzZnn1FX",
  "key41": "66LG6Jdenv6J2XYbNhmebRwzBZzVhJhw4U1sZKLJcsSqs7WwK4tkWQ9hB4ttB121Awv8cQetoLchvW63kUHsxHsZ",
  "key42": "2XTWXwdEiJi3CvfMxxtHHoEGRwegqHsinCh4RLwMpw9dhgMXMLg6NMU8dz5NDRJs1xjn3BWTexhr4rGoSZwLqGFn",
  "key43": "3VnjGQThZipN9j4dMFhRgvrhabP3uihWaTgB2qjwdKYW7TWCraHtC8eWgo7ski9pn48qeYcnXNdKhXrYauycmWSC",
  "key44": "2FjwQvfeA3vwpoQifP7KPwPjfUYTfGf39cUKNWD2TrDntSW4u7zuc1rv3pGVZfE6Ajd5DQpAFwfxgzme91SyCMvp",
  "key45": "55tgiohsXiokUqqNQjNvHXsTFvaJrxToeM5PRxczMJvSPiJecnagmR1FusC38BobnVvCAqHgubaz1PQWpng2c6YC",
  "key46": "HMP8QwWQhbXa4C9k49VwVu7Nv2TJSHNBytnuqAbismmSiSLGgtvgEQBGAZRc1f8JXvXASKaQPsva3xhKWSvPag3",
  "key47": "V2qwyJHiHVrq5GjKutAHhabUd1kEyoVjYJsMiwwYSqVFGMTjuwXNCG3PCarjWPnGD7J5XEkjjnvpnSd3AJVvokA",
  "key48": "3PkuGBfcUmMAbKpRu4xDonT4Y7BgSud15CbzyMkx1YVg4pJMpQgNaFoWE1bR7hBKD338e6cJm7e84rLVuYtd9okd"
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
