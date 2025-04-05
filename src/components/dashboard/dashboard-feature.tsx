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
    "5ZAcoeVkp7HtFXPQ49nxLLNdsU9nFmjkb2RYZeq5Uic6gZ7SS11yj7MbLaH9on23NJ5FsZtjUkUxvqgAuqbF92iv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FevW5MdAgheGFuTGZQWTjmqky5niDyTGhSacjKrAHrMxmZqsBjzTacne5FWc8ypoxQGQAzjk7ALJivhe36UEg2J",
  "key1": "JU6wBKhjzRcNncnyR3afS59Gdes6Bf3sxsRxyWsR6cnWMeqwCWmhUu4SVHaaqn27KFgKNH1E1disyk2HVDDJofk",
  "key2": "3DysX2fPzPm7M5Rk9oe94CJ2w2EgYUUD5Lqv9Yzc1DfgaRwMi2kSH7KcBdA11M7JZpyW5sc8hfPrLZGmZMdapXo2",
  "key3": "5oBT8aCAwiG5ckdfu9pE7H8Tedkn3UxwzHD3JEUTEugA7vJKgjSagqDU1RjjFmgRNH4UZnLdgeUKZGeFkJ4U48HT",
  "key4": "3K6wMECPVggvyzQ3PhtHjvpNnPBU9uaAkdve5323oKQ7uWxYuneWsPdCBxvkhxEkSgqUKJDTG9NgceY56ftUy5dc",
  "key5": "44iYGRfaKM3xauHqkmyVHHAKr1jSB5w2bt9Zn7iWW9Nm4cEUSVtf4P78mKUrcSgbBARbZYPecca2BLrjUkx43qkf",
  "key6": "4wEyiN79fSd9oi9iaCiaH4txURaMYiqAVNE1PwGxjTG6k3mBVu2mDV7yRThqW98UU97DZX2HfYDoNUydFqTtuHyz",
  "key7": "fv4oh1DVjRnjEwizemSitrJhxfRp2v3QS1hPRzP1P6g6ubHKcnXraVYcWZmASsxmQZFr3ZgKuWarFqmxicGapZY",
  "key8": "41tJfSFx7fDooT9uA1LrpbKP9TXCF5pVcsZ6xB3kzCBnd3kAjEwbHLR2kJnKBKjuGWuEqFGHdKQFSv3mFaRSjeqA",
  "key9": "4eGy2oQtK6bNvCgGPSX7CAeuxxtM65pgKCPT5Nu1Wufxojc9gkWBDNPomZbZEBPRXgSYaYYxvc6t5pcFPuKW7gjp",
  "key10": "6jTs7YXLrqqvcNXTkcBKdMiJuGpT2EHguRtWhFQMtnVY8Yqs2ghHcYZgxwfwdsTpFUed2NhnNQnm8i6ewYxYS7d",
  "key11": "2vCsYLkuBz5QSJSY1sBcs8Lwbk32P1oDBq1Uc7rLXFzbEzEh7nSjopkhyYPQREvqNEdetg119LYU7vUTgdfoKr8g",
  "key12": "4aiVpeLaEyyJu9YUVt4owzwBo3oG14T56rXsu4fZZzFjZxxg8Uyk3a9KzBPFegEuM5s33KLk1cTbvY5ukbmPaZD",
  "key13": "4qmUkAhio9VBrdYqBeJ9813NLU2NbnpsMwM5o3PyFPV41p6H3ETv5HZ3Fv8JqYRdNivEGmybdNC65C848VLHJ2oG",
  "key14": "2d8BhXuBR4yNMqLeVYdABAyEifuJMXaRgLn4pGdChX2cnwYqrseubDoqJKDwjYRvJ936Z1wiX5AHmKzCCCjgVame",
  "key15": "3dF8MX31u6iKwiuRzMvqmccPEGfoMw3bWuNKfxvjdSmjQDa9dsvG9pX9DDAaYJupWjzszDQ3boirhHqzBP7DX7Pg",
  "key16": "4dpdizKndvfgCtW7JJUDoAywsP6h1VWV6U4Zpp88Vf3uayJuhBNMPqMVGAoaUrGt4ygN7j92iZGxtbNRWZGdPCDL",
  "key17": "5utjHNKX63ujF5YfcX6TcN5FfqFZd42jUSR7UqF4aaWCTdm74KxiCHyhP1NAYd586k4u6mwduDM9hrSmUfeb2p93",
  "key18": "3DP7ZWijiS5BijdKTjvRkdXubH87DJtMJtUUGzVzsiw4xHJqXPQZsz1dkL72iS5dV5BaeNHb5vEY9oaGHSZhCcuT",
  "key19": "5pz9wNgwP37TbFLJZSNWQiXftkc6wJvjdw82fyrVHySvhf3dSCV1Rtwq5ZwNvy7vaKZGo4xKuAiqVzH7thzjCZhH",
  "key20": "2tLgiLuBcvvBteBxhjsxgAwwrmWQ8sbxDwfPtSJnh5ThKy2Q79ptZ5hG8y4xVMUh1wc6qzY5wFjVBqUwtHHXjhGP",
  "key21": "4iHJdb4zgyo6Bc2o9Ht2sPuo7LxWB2AB8AUREfPzNn2P9HDUcSkWTqzevwGF6unEXg78dzmBMxNVHtP1mmVHBwGG",
  "key22": "5NV2iA834x9jD6idrr2h2iUDV8bS1AA9BpcVg5uuA1gSr5UmszNpD4qTXRTLEjbQNZyygPmeVv5b5tVmcWGDCGCS",
  "key23": "gr8nks2Zd1qEpaXAmbH7cUwNn1kRoy42FivgHiFzxAKXUEbVaQpQLvHp7yNSff6VNwM86FFmrf7Lc15kNMcAnBy",
  "key24": "yE9U4tPCXgnPYq71e4vbaa6upaoUit1Mzqd47eDcGQV79wNUzdKeaSGfqokHp6EbEtHRrJUtxjrM6EMo5XL67rH",
  "key25": "51ihoMcAEDzvXSmCRuB1Fn3VMJqZV2DVAzUFBBYNkR9g2jshQsn18ESTyWjyrXYT865jToLDtdVC6bcPYYEkLW58",
  "key26": "4zcWTgekE7iK3DMTa89uCtZm8qWpAi1izc6bMnj6J4XcdPgCNG7h4bfCVwTf27hPpWRLpL5yoYdH9Cf5oHBa4jDi",
  "key27": "2VCio9qQ8fuSBBbwUyZvQRhvYffx1ALPkRp67KgpdG5MDqzm2zDodnLRr4qtdhULcm9FbrAzLaN5vPjxWF6NrAYz",
  "key28": "5SjUS1LPdquqQ7M63g8oJ8TYFCg1vX9L8FcMPmySawsCmiGURgk7ZmN9qXUK7gNtHxJpK3hgx2HdVYbWEgTUR2e5",
  "key29": "4B9epBpfmcS8NaXx82U4VyNMrz1y8YUYAPz1rh3DWGEUgz5MD48SdHQ8wZYXNq8NPNWsmMhWF3zmBNifKPXCg3Vh",
  "key30": "3yJnmLhAreEUWH4NBghChsQUmDb55fhz6h9F2CdrzJNqDNAD171dPg6vSwrawPXEk5caS6y7WX598jdsV4QcUUJU",
  "key31": "5BJq48gQGmLtJ4XLWnXczjsGftAFG2icZr4bpZDWNdQ7C7fDjfRwtpAq4njbtasH4Rx73wyPjE7LRQChG2uoM9vJ",
  "key32": "5YrVturWuFw5NckqCY2WPuJk4jYdWdvaHdqtzNB442PQmuUJvfiumQPxRqzKUf4BUK4pbEFqwFRaJimuowLknXbo",
  "key33": "4NgWFVfAtWVAbVsidk5ZevteKrk7wbVmJEFPccbYLwFqNfu3ibSFgKLgYxwsKDar2n1dohtAGmwJcxQHkb5niEtQ",
  "key34": "FEWPasgwjkkbyR7PCQ5DLc7PKWyjpSB6sQQtazcws4Gw7dGpwEPfKZw1YB5kkTTUdhWNXdPuWAJJbS2j6yVeKoc",
  "key35": "2TtJRY7PgGED1Tib3gHroZqEpbyu63n6KSa9Fa3boMQS8KYzo5zUbynJbyYuCcvd2TNUDdtxSRTuCKRiAn2DKj4b",
  "key36": "3NG5JgZJHECgFQcRb5EG5wZDt9o1Y2T1vnGvtM5AW8PMzQLDGQmYy75r5XLFosJPuukAvwNbDMgqvP6HZ4ZE4HqY",
  "key37": "2SrcAcm4WrtpwCXRtNuG5vF2qeCBFmx7ztXwdGnBtuqAAH4P9shxLQMMyN3bRiRfBC2LyyN5P9MSZxRzhFRRWRQJ",
  "key38": "2By8LJTWveoP12KcAKfNUV3rngJ5YNgpuwx6YXhobEg3V4pULMoPNBaeaucfvrgN9XkS5VNKNw6XPZdJUV5HYi36",
  "key39": "4zB1UYyR2xiaVgD6Ue9a3Dciohv1gg2pgnUGBNevxJ1MN8okEkDnMyzFbB43AvwAN9w5u51oG5FjTwe8tkp4kT36",
  "key40": "Rn2E3iiCRw7KjfkcVxEn2cXyT5ARsokcTUJJG7mKQ1T5Y5z8gEsH2t4WyicKLUbcW2cgp6FnZRsEDRDLqrBLP1a",
  "key41": "45oVuXfutJN3UHeLa5VUjgbmjhu3eabdRsJqgmZZs3ZWPngBR9pWQB8nCbcG7kiTaxjznkpe8FdQ5NR9GuW97C5a",
  "key42": "3GCXTshnkU9jUBM7QiUgfXYuVgVSFaxF2yzVbNmrpU6ag5pxLtUUkB2hVkaoXznnqQPv9ZwXXhsNxD6FPQ86dgbg",
  "key43": "3Gg5vS66j5o5wqWgqHnN3bv9TQnaz5PEeeEfNzmLP1c7YDsMQADtJuFNT2x54UtcpyjLGT3fHfCbjoofQ1jUSdn1",
  "key44": "4Nzq3dsnK1RQ5AvsfCmfuKkhsqqGvdYQqEELorRfwb68GPCUxBRcXaccHmn1NzuMAnRrgwxfydyDQzUwu9JuE8Te",
  "key45": "AU5GQyD6hZAaCD9F8yzkjc47bNvaR1jYFbw4eA41PRkfQc4XTb6K2xUovSFCPVcBX7irSbCy8Tg2AfVFFnvPEMA",
  "key46": "9Ec6GrAX5RQeJ7XwVDfh1jAwicFsmdAX13um9qutpyU8b1KU5B6vi9MVWF3VPQZ8AdCb2HtxT8FF4Tc2JGvy62G",
  "key47": "HTDPBnEUFcEPJNg7JFHXo9TE9D3Sp43vx4K8BWB6PZ7goT8N9WGgnZLYfddXGDUwbAuA8tuasecZsQGkxbNC2xj"
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
