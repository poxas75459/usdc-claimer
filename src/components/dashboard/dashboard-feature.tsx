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
    "4CmyobJUW9kvhFAPGhU713VxEmuK29DPydqadt3WwkStVyFiud3bjEBGdZ2VLW2KXqibhwPBFLZdCRNHuDzKaXb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CdyaViPiYELh7abW7V5ntbgLShcTJ1NHdK2TVddxtvoM5fuZKTuHMzisYRPmiPgSeb34s6muYk51CTiuxgsdmEw",
  "key1": "5EjWGeigsieMYmFdApmyVaNQX5j81CDqvGDHSVVXFcUrkY3s8vgeSyktXAmHVr3jhT5aKbZf4YWzyMpMigxWZLtU",
  "key2": "3tcngqT4DEz26EhkrFk2DkRikKyEY6NFx1FvcXZGrgKQvpndHibaQJrj9HudRUFFHtF2Hdxs57jquQtEF7gxY1jC",
  "key3": "4MyM9pRyc6g5Csgs1wtKppoVzLDmv33SjhRXzP8Ug8aY3rat1MabAx6oehnsZ1tBXFZPtmmMn34wQnvkN8BbrdZZ",
  "key4": "4R6JDVjL7LdVEtoNrMtV7MBkyknuwTu8GJ383pfhrrxc8PPYimJBniRZeTpYxZb4ThyxJhhppdJwKpK4HhB6uSwB",
  "key5": "fzyhgyT8275gMvRh3JEeZsLQjnnVLUkzKCdq7h2YE8iK1GHVoSaUfs2MzKkZPs4WgyuKW1SsVfXKQWJ8TgzUfp2",
  "key6": "2iWhygw1MRHWc2jX954hR6pg19MBHpGfs7Ws3JKyRR6svLRqWQapvxGbzReHYdDuhs6z4zxobCimXz8GomU9SMcV",
  "key7": "3wpuuMXY9PWkGjX5U56bFhiQNibku8Awks3CxqtDgia12AK3mJuM4h6cm7XMJADgueyF6J5mq359M4QkawmQMsTJ",
  "key8": "2mD5tErSyhjptAnPpk16gDgzvepdJHpxe136qKjfB2RSxzDyPqc2zAhz4jb1A9fTtw6ByGu6oQwPFCZV8otCpm8o",
  "key9": "5DmkJNrK5Z3Wuy9RLGZtwJsRu3Gd3WNs9ZcZwV2x7aH4dAzTvyurfF2LsYKeXoTbjKqTixcMj1Gj7Egz8Hpuo2Qr",
  "key10": "58SPx5MJQjUbgVtnjrapGtQV2FQiBS3FYFX4rf7sZpgg7WBaKdGawPWrpe9DtTf2QWGqPP7n63imkQPANBCqFfnR",
  "key11": "2mzQfbja9fejrRyM3Hyeq5b8oDDXLjPRGGC65XjwLJ7B1tuHi9ekJgHGJfvYJXuv1NRcopNbtWJUbt6vjLPvG9jb",
  "key12": "5PfBYJHR1XA6EqjkrFL2Vd2tHhXVHdjePofGcyvkbYgsnJsHvsQoWAtmGD4skuqptzJY38ReXSqK4roLf2ivXfGG",
  "key13": "33sUEXgPP5RDUPWG2NoPHnzyMJuLzfS8oHiGxnhqgrRiLoaXdyqL3eHRAv7cBqxvWhocnD8LjkPoMqdp5ESSkFVB",
  "key14": "3GiXSkymwAMufACiU3G1BugFrhVPDUJrakDomXUgLwYmgRHtrgTncReqLZQ3PHrFWreAFWkVgqTJ5Gp3A18dtGBN",
  "key15": "4gAskQuUHXkQMndzjQfZBrqtza3mJXcVYBej9W5y49J6tak7224ujokt2gsw716jVaaDf7TJVKQ4vmymHUd2Pwnn",
  "key16": "536PsTktAJBdhQKvRbRWAkKxBbwgha1PwVHh8f2RpwDB1ffeaudjpV7s8JZS4V9No4g2Qbv5bSRFjZtCZoB187rh",
  "key17": "5ymi6dT5p5xQPfDtuzXQUcSEDmmZrve63XL4gSJghZEyNiqmLvqaQAknbhxJPqAMAYVSWHRFPetgm7Ci8bvPczYG",
  "key18": "2vQxDxkQH4D9ywVUt7Lc7xNx9fLyxsh2Zpyq6WHWTxNH2Y5MWXBRswncrr68vYYSp5qWEdMSgQPLQSvQUY3WjwW",
  "key19": "5brrKjqvWSoAKg9HRMf5vUfcBmP12M9kDfFU25GyiC6ko8QNRYqFJqXDp5noWzhqp6afr9nBymyB2f4HnvoznN2K",
  "key20": "4SBYusBpFtR9xLs2i2Dn7BZTa5VQrnP3hLk1up7KQpYrj4oCdFJHPh6XsK2XkQoBDBAUQiYapQ79ggxetX1Nv3T9",
  "key21": "27s3tHju9U5MjUpst5K9bb2JQw6MWBsKqGDgZKSG3VJrKUFutiqoU7FqFoALhpxSenakULC1T6zfda9JeAMimyxP",
  "key22": "3AGa4TUsj9U6zRH4WsuRTYJpTKWVojpn817RZfvtzotbypipKESCveJRQzJYzRYWRcDe6hP1XktkBp7P44ii2Pus",
  "key23": "4itFMUY9BbmvyXXoJkaGxsuWPJ4GL377ToGNB34DsVm8txqXZFrvxuukTvyFc3KsVnFCsZmhD4q1WWRsvPk39PDb",
  "key24": "F197j4h1ZfwrVa9qZHpY55Qd7jX12WSjLkErJhuMF3cZ4yN1Nmbvvbc1Nt7TqwspP5ZEXeEf21waWWeMhgS1bjz",
  "key25": "q5rLbjMLnw7ZuwBM76nMH7E9o12jzdZxGeZDnapunrpMmRbk7e4oxDLNHUv43NXrYKoT9dCTqXqoA2oR3mZBcRP",
  "key26": "5se9qkcL393XmCbEu3rTsrdpCnCpx4u5JDrvbgV8kDv5twgDES1QBCY7FeuymzdQSBawYc5C8bqneEDsey3pTDbX",
  "key27": "64EEbEWEyzikGWEXCLehYPtJ5D6hC2ePvpyvCv9qby6FNqD8zqWgop3TQiTUWGtDcSskWnNt7rK3mNxxziitM49c",
  "key28": "49795zapXWqut56THQJerENX53V5ERfunzTMhE9ZH6uBRvp4uVJMbyU7LiEAnrQtAiSYkDy4e3nKvdsSKft7FVeh",
  "key29": "46gQnNMgYuUFe9QbQzBLrsMs7B38GuspQHvHn9dy8qTNizsh1aFzQtngjKrHAUYArbRuu4yFmGzZ3xVnjL7Kn3Rq",
  "key30": "3Pep1it715qkLVnqg29vbLawvTt3Et2HSHZzbyJjVR9quNjM3qZz9oVgxCJCRuUWTe2u7SajQt22unRhSHy6e1mK",
  "key31": "2wkgGop8UMmPgiQPUXKmwiz5s5AdD6fSoRxy7vHcKgebDdP9mNqvQXY5pbpjfnwbmX8L3EtGtUPaUVXGc7ZHy1St",
  "key32": "3cisvuJ4cUtu6XQ59UCHQYhzHBJ8wQNQ897bJnhg5oe82R7eFfPBjevbXPiKiYpp7SnzdLB5JQXTJCG9FgN94aaX",
  "key33": "5oXM7EUcRuKEMCpscGgq7X68SKKgLgMuF8r9uRQAGS3hNi6Dj5HuZUSjh1wYRivBiAvtTtciNftoPXR8LWWaQcT6",
  "key34": "4dVQu6GH1bv3QQ4fhSW8o5xQJZMv3v4kcAMTD8UH6wYM7KNHRwSzJivvoKBahxtz8sfDCtFLjvtt9tyU1qA2KTZU",
  "key35": "3gevsgQTyv8XiZYWbGoubSFrCF59QVRawiPgbEPFufRixrJvHXPqkoYAogorXMNKLjRvn13WDSWqjtZCS2Rr9jJL",
  "key36": "ZgECFc5xp4c9NQ3SY9tRWSRLrzgU7a1rajBWdNSZQiSmdPvYoGRJQiCiNfWH1E4RFBr6XngjAiL4RyeguED2Efj",
  "key37": "22G7xaUXLAxgA6k6ppAQ4WL1ZGY1eGBVYAQ61n3oEM6fcrQGrdTdAYQRxa9B99pCnbinSa6jAv2REqK9zVe9stT3",
  "key38": "2yCxYaVbt171vPQY4kgDkKLVpMgmUfcKpKNymcXG8hqDKU4zPFckavQYaMSJViPtHt7jY2eW3wRj8uWt5sifyd7H",
  "key39": "4mgi4XQJG9BfHbCf3UAaJ1mDhXQibicSXrMj8am3JADRJTGCvizwvv9WkYTdVMjNPnTayzaU9PcN3Kc8Aj5zPL6h",
  "key40": "5Y7uw5MXJKqhwE7ksSjeTCRShrYnVRvTQbgmjDeSdRTdsyj6JVopyRKJYS6RzggR6CZQ5djP4FraT6SSebmGLV4J",
  "key41": "2BXdLAurXdnPT7XuPLYgsZ7bEhkwS78GCkq9zze9h3rdxAh8xapjc9cBGyLUE5GUt86gg71x2GeXRJ5fG8zBurH6",
  "key42": "5Ag2B52hchTNL2rKuH5CChgubihoZd9biVbBuJHvN1T2AraK7Nr8XCV1mNhJQ98JnVvBGf6iuMXSHF2A7kr9kAiM",
  "key43": "65iXY7jTQbjSNx7LVFnk5LrH2C5Q6Xnr8P48GnqBgmjSRfi4wDtbSWQ8j6CYmCjP4B6exdFD2H98zLRYY4PgNWPf",
  "key44": "fNwmnV15Cb8943pAYHXdE9tJd2KCacJDEDqKfuTKZn7gSAhGwEmnL5g4qj1T3suLJeKfQtaQEYG9g9cwtkSTD8a",
  "key45": "2mJKbcntBhPF16Edj26sZFBK7p7edkhDFbLBNXF1NpVD3wK5BBesYXSzgRH3SJSri7tSixTkZrkDBnvydEK1okGK",
  "key46": "3VQjxK6AX5mXhCvXKpjzB2VdSWVFMBWVMDiuNYvVRJFJy3TRsvhz5B6SuFueS9RLVYsayPeCtjXPcVumic5US2Gb"
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
