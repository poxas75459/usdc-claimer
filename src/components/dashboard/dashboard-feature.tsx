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
    "4q18oKjBjhrMgYBP1Jnq2LoUHmruC8kYHvFBedXFBVYfMnzyVAM554ZyyuERobpXWdpvGabnh12JDHS8tGWwoKC3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Jb61YicrCrub5UMdXVhxTQnuCBdypjJoi1UkE8bwYtDeB7bSY2Ne4oRVjwA74rU7PArfAdtSDCQsbQAvVYXyGD",
  "key1": "CjL6aGAFL1Ri2eVbuef9yA2LfzFjHwpLUPamsvScTL4Gt55bQdshSwwAH2UwfHC2jfJBvcfb86xDdoYgRQQ4qFg",
  "key2": "42DHpERLqZeuqL5HHAAW3nsrSmBArYriE4ewg3QM7RixuKoTbhPG8pcDVZfHzvdiUQqfdH9bnRK6UQYYVGVZjo37",
  "key3": "264dZayd4KXTckqSew8F8CW6Gyrq5jFWnVFvE3BfFDP6gSgNXXmZxZtTmR3UAzefFMtdaK8oKQMfiXp5RBKpWh64",
  "key4": "ohRnMxiDshHYh3ZJpCHp224uiwQW9WjrDVohZvmB77xuWqRjBh3YoA4X7vqFW3hzyTpCCKqz5CjWG1fCZjx2cco",
  "key5": "PYNgyf9sm9FErM6D3FC2mAiGSESCpXUvG7U2YDPueAASdX1AakXFN223DcAqWMb7SstVWSsCjzobi6ahKr7EEzS",
  "key6": "4jwVawKnWNH4PTPRcuuwrRQPo9aXzhNNgYA5cE1bqmbHX2NtGUq7w36aVvvpe4R2DXTWtbbWGkjHYnPijGivVvik",
  "key7": "5spAGwFZ5LU57MDzDB2k5mh5fFNZ9ATqkEJSxUs4Kq6rkH6WDcY5GPFuUeHRT9RGFNHgix18afGfd8zszEWExgcX",
  "key8": "hxGRehpUE7qFRXo7PY3rBDGwRMgvrc32Uc8r4wfwaVR8K4wwfyjEvJ3hWZXiQCWhDX3CSSBLmTr6AzwHeGD6A1L",
  "key9": "3diVFx7ybFcx3t7ZMQVNnEFJzmWmtbjvBcPku14toG4FqSbw3vUbKMPbRZpfWeZm3qyfPFVgEJsTh7nD2esQZcpa",
  "key10": "4GBSTXu1Q4scHP6JgpJ65CAKzCL62RAGeKzsUMzadPg87pjSVnoWyFCLFzupbrPpGLXcmQp3QcXs9gtQVxtnNfq8",
  "key11": "2LrJ4HTFmfUcjhcTT5pHei3nCdyeF8SnTBiph1MwfNoC3pHb6JZ2rMJMBJGPE8jtWFdaQdB5sFsiisJvCCgZPcgx",
  "key12": "3JJE8M6mcb6kt5StuzXzm1cxYnU9Km2hRGgKxafxqPsP1UBJFA7ysgRNfqugMH8MhVSyMQQEXFE165zdURKhmwM3",
  "key13": "4zaZ4ajAHofxw21PvL9dXT23iuoYWSBkf7LUDHNg3SeGcP93FUjZhko85TNByVHPM7442LX9LwDi8oAJnxix2Miy",
  "key14": "5qtN8jPZJ7FVLMvJ9p8VGX1B5RNQLSH7seZ3yPJrAdL9duPWWWGJ2wUtBhfNQnqNQhxSAZiWEejV4dDYM5DjcjLe",
  "key15": "4Dr9479kkBbeKmoCdvCjUgyByPJ7qjBYUmbH8GfzxEt3ez4Cf2wWENeGuSDyMtKHuj7qacfMpZaHGUz9JAXWmv8e",
  "key16": "4YWTrwoeG5vZtyhgbCe61pSHdqejhviH9moacEqhdgeV28idWQ3fxbZgBT3pux8r9VSKtk7rPU7GHhGmRABBjX8f",
  "key17": "QyzKAEbSKArYSU3HA7KgoRY7NLAEjuxdboaMw55Pg5XiPSoXbSQsMCz9zNdo7AQdTadKzQbCzaMXpfpqCszDiVL",
  "key18": "4434pobWjnFixVrrPoMxKrKE7JC7mwtgyiimcMJYFRSBZAouK1ijBrzyvChgQyc5TzT56VDW3gewTfZw3TnNqwkN",
  "key19": "4atfWXPTui2mHSYfpSXjedy4WtizUFvYkNRM8H4mmGfDGM5MpJ6wwCcEra76KHpiRkLC9BSJ7xzU8vNpB82U4V8q",
  "key20": "3WoZyjcz9PGjKavmq3zmvfvdFGX9a9C66fD1WsmQbdL9X9G3jitPBffXc2AD2qfKNmWyQXvcLxXvzKjmQmbdkyAW",
  "key21": "2SM9NPTcCKDY5WznnG5j374yzrFbTKPFKgEYatHGU2sG7JfPHVrdMGrWdqV46VJubZbhvkKB5nXHjDKGTznXQtMo",
  "key22": "4pZ3vMEYCL41nj2FTBdngqdoU2TLrgdLAxTW9LKWnEeTY16Z5Z8gyQreob5akDo8DBD4GZBELZp7i63qhqXrJ3nk",
  "key23": "2JvBj4YQm4PfqzEn65je2PGRQkrCeJ1SAeVq7X3dvNSmnxhSgBxnCgxukoQKwGxVXWvU21by7WKtmyNEfT3vGXXV",
  "key24": "q6bQrVj9vi2fuZibD6rVQ9NaohY9ZjsPn2um6Y4BuBWBRkGXaP7dq2jmynsxTqPkCEttMPkpWZbYk3H9joKuqbV",
  "key25": "4abe77PSutq1hNgDxRbahSvvh7aWBdUgaQLvWyVXq3iCqimum8PXw3zQsxwZe3ZLJ2aJQViLasCDvovXVBsZpSF7",
  "key26": "5pAaDUizEBvaY4SR2HUnmqesoseeYyoqD9Qrr7PuNfFoA4KAASXfrYrdzJbjrDbYr46Pb3sBRadd8XQCkshwKoaB",
  "key27": "2P1kVZ5wpTqXVwppz1LRKP3cBgBMkj7aaohJ3vG9arfqix3mFJrwfRfqYLdrbeyoyQ9HazdH6TBbfA7379fGdaNF",
  "key28": "4u6XwFTXSzHLAGfNP2wnsMnDwoFHFgtawBwxeY6e5NZxrJ5f2Gqm7tvqk4UZg5ntDrQXSq6nGncZ8macyMzMhmx4",
  "key29": "4Syv3x8TJJFdPZHmJfTJAaTb4Qv5tnLwwyims9Ty8n2wYPYquTP6GJ47NiytHd2QZvxeBig3SzZMdH7P7tdaWL1P",
  "key30": "4LoHBYZtYYEQdrXWRtdrBpLnXGPE4KdUUaCCidqxptzNhfNy98h2Hyan7hqenqxasSWWWBXUNtinfsS8iHLGVBqf",
  "key31": "3ABi7DkptBRgK2zGJaaFE92XMQ5s1vLQKGCZV9xyZ4Uc9qMatXrP5M9M5mbL2ZxbpMf7h7sVd5zoNub4iLxps8h4",
  "key32": "5vsJjbvcd7uByF8s7a7HwzDTxYe28MzhHLo2UBBhmBgDm9gTKdoDiqiTpLTdvvZBy6SspNuDE32VLNqhscSX3bLq",
  "key33": "Gvk3dZkiuHpnh2xS5XfiuqPmtzCnxBAsysnYftp2ub3QXdQ5TTuDP5BkH9Y5pHPRMom3A2Pivi35gcDHMND5SXh",
  "key34": "3VUvYyRS4dGSmxy33toXxoqW8Q3ecaPFYLLmTnivZiKH6uFGapR5ehnDUtyXURwTkKLDkpwZjAZxktMtCRPsz4HT",
  "key35": "5FtEWbwc5op7YZcVPdTBpJL2C2g8cUxqndUqMyquvhPhViaj1CDjMYQyZPGeboudyZawFfE7uk2yTH5rAyyCMKT",
  "key36": "2XtMzcVS1tgKvZJkxbnu7u6gL8GCts9nUYxvs9Fq36kJFNpMa1RbkUvenrmoV8N2Hx36kvPHBXbuvjw8v7b3ZoRn",
  "key37": "534xef6Ny2FqPoGgZxyMPz1vpPzvbW1y7S1uht43Ja83wQjGtoR5FdQrHnrqBvib5JsYPBxMKhVE1E7pfLxSLoMG",
  "key38": "5ePWHwPKmekRHQ1a54Depj4UhD48n32DmBjUjWxxVscn1QPYbQtU4YSEgwWZjZoUarsbAJtmZg2jxKXL2wEseHke",
  "key39": "2bPcFGkc5mzsuXdrQPTdhE4cz7HSBsx77TgrW3Nueyx5hHEQDYq1ANS55qTgm71N8tazWG52mAeUUMSnMX7fU2ei",
  "key40": "3zkQZ28YgCmZZRJzmtYe9AgLMtSe1r1qjscsyLq8RJKdSNz1o2WhUM92i1rz38ry74wcTyLbJim7nsSW15oSg7zN",
  "key41": "4pQ419xeFf2Rqb72qEFaApBC2QvXbZjxAqQykDy71mwXd3W8J1cShZLM4cnQQzN6EJEKcLeG4U14SFRE68T6bqS4",
  "key42": "5fYfLwc64XaRFbSg8R3mYiPt5vTyUWQRdP8KvmiFaGj5Q77txFRezWvW9rK3yMuST8m6MNLHWUW3ciz8LUaYpETG",
  "key43": "5WqQrLuGh6XNf35tf3m9QLP2KxDtDGdZy4LKrkgAAysPS88hs4Cg4FBWEtvifHmAv4GmU1Q7Mb58i2syJcdmSEUv",
  "key44": "ZqNiQSDwrpKKbqZhWigSTwTQhJWrLwKxBW8A4bFUndEwaSHXNoafP5rgiNo3yAHepXAbGsW8rHGwtZTFoWsfpj2",
  "key45": "5dBDVjBzQd811PFUarjDVHVR7EsaWvFNCtNiTmv8DUEy3qajpyFGRHJqc291bHZ5yMTnXj8bidcEtpg5LiZcc3c7",
  "key46": "4GrzfN6h54wYwCSBQiydZqopfQMZm1dDd1BmhvyB9sWhVNsUesyp1wKjpxa8HttRjm5evMJA2easQRhgDa67yqYL",
  "key47": "5FXCvWLcLfRRGVNfJuNzHT7Qp2dndZ7LTYxQHEdieb4ZM5ufHwCmwtcwK14xcse9qk9b7sBmxisgPR7DAWteUja8"
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
