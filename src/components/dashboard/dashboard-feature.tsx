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
    "36HnbCTzHp5o7gjW1wdLrCoadQzz6PUDVotnsGvAGssYNd7p94DRPSXuPmkSkThBZgK6fcXUSMYHB7QzxTSM4UFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LyuhqkxkZYuXyWriMaaBYJpHpVtzVupsLQtXg6qUZVTyTmVj9uRUq8z4JqaAgp8iWFukPrjFfpdf8uPpHyEGc13",
  "key1": "5ZAAGx1yxKFRYEjGcop8U6PVGYpg43CK7kMegdnwnenowgE4KXG2YKtSKJmGcszj2BzoGJQLmb5qdX9T8cQwB1qu",
  "key2": "25oEP1WiBd9TttYUeXTaTGPd3o9ovxYHfWvoDnP7mkYHUag5p2p8ac1vhXUKYb1V912o2YAepTNcqq9VhmXXarqL",
  "key3": "2L4M4MNaPncDRrzmjpSB1QG1ovTEQcdwUaP412vzpgnZLBdjCebrcCYHCEZuL5Xd2YDX887LN2XuEUF1sKpPWfxN",
  "key4": "35WD7K4abosiK7rGTb6W4CnYoJ56aCDDhrGJNuxAApZtQNnTthWnKBWVtQQB3HrK6qjxWLVpHovm5o85xeDKJab8",
  "key5": "3mbMt7jYyHMn8PRKRZ2paybBZETx3JSGxQWN2U3LVVaED4TBxwDhpYVgGJ9zFHPg8xFCUeanuCDf41raMZtxKFva",
  "key6": "2dPhcaNSve3PSypRhMkGiiHtnfNPCg6Aye8b8bnq2Ux5sdvEb7r1eNTQkP4VoL4BmkNyYaUBzNT4pQzNeFT6oNiE",
  "key7": "3cJ75bmeGPTD4Mbfo8aLEArJy2eHnJcigbCzBPwfU3fTRvYdVp3MT5kBBmZdw8L1MWfsCfGbhD6J2zUxqSkxmE3X",
  "key8": "4xewNjAYCCd3e7ytKbXK7v6Tq7x5FuXuAfoTbSUJZpGcTBSgMimpHtpV4iDEgaKcyqS7j1q9bT6mE9dBapnjBCcE",
  "key9": "2ofmj7RGPUykobWBgZdr4kASxPjzypEFzmjMuowmaYP6fgoaLgAhzS5p1vkEoaW42PMC4e5bM5qhhtEnPYDZBzVy",
  "key10": "2bS1hsEzpMZfpwo53EeMdWke6JNYkMTCS55pCYPioDPS5EhZhkh7T2HpeUPVuUVEtDrAmizdfcqr7KrcbQit8daT",
  "key11": "4cV5iPPd8Tm7nnsD3b7R9LqXFyWfG3icXiNnu4mo3wSRsvhssy8xnh9RbUN8nhSpA6d2ZVuysRBihio4BBTYkQtp",
  "key12": "3uLdnyGP9ffSwgbT2D3jnSF99xuLnfTZCe4FBTTRRoLaFnqXHqRr62oSYSzY8yyJMTtB1BtJQsyYhWQ9HoxmxTZJ",
  "key13": "pAGTJa2yTxFE4RcpXPciXiDnT2uNBVmqySFnn35nYM3BaK9NiK91tfxNMxybJvYaY84RtMnVW3dsZp3YfT5K9EV",
  "key14": "4YwJXzPXDxAte2cmMWeMSmCqv6GZFDXdyozWsH5kN58bQxzCL2J5fAUoEm7Bn8DNH3xkqT4h3bJCyF36jamiTLwv",
  "key15": "3bjh4Ur9pGBkEhDQkQMNQE2UZC5SamCVa27yLYHEw48AumE8aWkWtAa6WKJHBpTYireAwFugUZvXZMU8simnfvbK",
  "key16": "2FY9o7NaizZNeaNwsuC9A2fxwYjueamstnV4ZL1jFH4w2EtDT1G89YucU7XyXtVZJjA3UfxgtnsA45oBf6Zp4aYb",
  "key17": "4s9yBfHaTwre3tS4Ev5hLjnPHCbn2eJYHm7B3S66i1KTkhgnzm3qTvMEda5ze25koYntDtk5nJHcPRr82ccRuMF7",
  "key18": "4k4JiscP53ygCQRScqVqxZ9cSHnBWL4DfiZ6JvyDCDtcMMk9V2BHLxQfrK6TcJdmzTgV64o6tU6erAXFyEnuEWHd",
  "key19": "4n8gLcPvWX2CNh5jdGziefJA9AcLQxMZT3JfiGVsXHHL3g76cX7DrGaNwHas7gvgjZYBcCrsEL2dvXDQPkRAzWWn",
  "key20": "4ULZFxKQUm1tsKaDLPKEc5oCE6hEQ5VQgT9mUFovEK7KkzEXhBUNLtctjcdsXpPUG6oaCidXCzo4NiHCugFXsZkq",
  "key21": "3d5VvsucribrfnaMjvDqFBmqH9WhEuCo34hyCsPhZWrBmPyDwWGuvS2iZDeau5ice8PN87N8emZq5fP7sYi7RupR",
  "key22": "5g6A2qawBosze7WoFKe8K2theQHWrd7zCjRRw3caegWogN3b5AZ4Fkwd62Ytbs8G1TTPDgE8f38iYH7Y91XAUnWh",
  "key23": "2GDjY7KidwNBPCR7wRfrG7zG7W15nKfEHcp5q2oveUV7fsJ7GJiW3zRAQb33CHhee2NRT8MPc3yjkbXFmrh36vXg",
  "key24": "YpkkqRvoUAPjNTwFw2SYHKMRceFZgyhQb7gRwpLi6VUWgRwiyccJqf7UQa69N14S9i3HxCvjc3f1sAaL4AUocbx",
  "key25": "5u6XVe1nZegMEk9XKxJottShEhgRYYwyCGV6KKuC2LYb9M9oBWiW1kFSYt3e8NBqv2hE9RJYNiuw7zrCjiiUDKrk",
  "key26": "3nMJSAnhcX1fMaKq6Y161eC57wV1E38gFd148SugFit5CHqVvAjBWkvZBEPfrSc3TSZSZJXH1yp11JvkKps11Wcd",
  "key27": "2V7iNmojLERcEVBorVVbQRDi1WPm8hsinNPhHAHGsVh7P83KkJ6Lq45txfp1hQZvfb1jPtaVe9h2JHjSP9miuMtC",
  "key28": "53NEAogejteh6sgQeokN9zsnx1chinBfop4r2mxA8GSyE6z6qb65j6zt17oSFqbAZzXFDVW615zeSogZzwQpmLup",
  "key29": "4EVUG2aLiwsJcoPdiAYiXRwHGKs4ArkcGYaH5NpL4N5bBtHLqDgHPjz8Gn5Jg1gciuriraZ7tHeG8jH2xKZXrZ1",
  "key30": "3QTwbQQgSu3ZFrjkVwHseHHGND3zqCgYuaryhqz54EVmQPyh8hR49MPpGEh6zUUjsTyYAdqwHvkfLUd5yQas7Aii",
  "key31": "3Sg4eALnVwV217rskFSUNeZBDPsHNqRBsF3mjM6Fh2V2UzcNuLVbhmS2ajzVBENYCvZLSUaRXLvtnxcocRGnP4uK",
  "key32": "4L3pdaVZKPLmLWA4yTSfNZX4D7CCt5H2Z111ASd4ZXicC4eQvaFgj5ivdUp2P4JhomV4TN85qKrzUc7EQky8PpHp",
  "key33": "59BgjL6GeLTX6JY5JHzfXkD6iMT8k1diqdRU5AoqajoWSud4sDa7AfKH8WMkctGtVFiTcLuzbMNqR1RAmHjkWR2X",
  "key34": "ML4iLFqxBPqsgUYMZrkicue8GshdxUp2NwHZ6KBD8UjodERY48zYyx3UxH9fxYifWcBRB658gAjxgjmAyYpb6nz",
  "key35": "2nnv4XSmsRqnCUkc6cQQkRAfbAvSpXL5ei4qxdaN9BEESGF4jv33LWEd6DhMezXHUyDwHCDT2Tui8XvNW4Q7MYNW",
  "key36": "qGwJyZXVxYz1yZm198Tt4hHywBSNmn8fSuqk1qA9c2rZP7fsnzQQafVseYTE6Jwmgmsj3tRYPqUGD8LQKtUB8ir",
  "key37": "62hvMNKkBPKoD4qh16hs6HryFiKxDWLJ5hrd3hRZq82HwamTcihbwwoXKV8n43AmmLkvzL4SATTfciknzJSmgwJ8",
  "key38": "4RVeapgd1SgsZH9TFttojwd6pJgBF8rfXieYTrBUYGvGfNp8sjmDjq6thiDcwrwJFRMHSmM4B4xEDsH1rNXPWAaV",
  "key39": "5cxCzQ47FMdnSDKvTHA2AnNhvpNwouGrG8EKXjaRuyf7jsjc5ACqNHjQtLioFi9ZyhP55y9a898EBLTYg7ZhqXhN",
  "key40": "4EbF26XQFEBcXUrznPgojZH84Rnc1CAJSfeKmdFJor8zpWyFYxJ7aBKu4WfARbRfQXoSeihCte3ZVcCBb9nEJVQa",
  "key41": "5L6F9tqT26TCiTZAmKPVeYukvSTaYKrazUKDcr4toT2B2f8WnwDSTvjLb7CV7vuqunGBVf17refJNWVYkG4ZDTN9",
  "key42": "5PBCdjpSptuZYS5q1Vc4ZFmiLCCJtCctYBYo8DSShMEDfZyFLK2ch5J2FfRF5FtCFijThCSCiH6BVoRQWAorNTxD",
  "key43": "3jhroCAAUKkYwMKz7XJsisJokjSnEZYDdpTN3VL8q5hpYZW2zQWFKaGFRZUUJ96Px5CgVg24JnmJ6HUvTUMRCHh",
  "key44": "3mDSDzapDEERHZvfmkxckqSuZ9D3iciPfK54jBzXyxR382Yt9Qb8wtFNKeWFNhvKjsR4SGPQhzDhGj3chDdcCuRe",
  "key45": "4SroaHdaPcUQNyCTqE8dx85ecngHNnaqh5pBse32M73gDZxVYMPMerUWzcpFCJnByo3kvHbY9MAHWmpNgaWaSuRc",
  "key46": "3BDHk8eSwUrG4N12SDzHGsxKm9GjqCh9L4uuNwsbkJW2PwN5BniSXReWM7r4e4LmLnYWCKWaje9HX7TaWk83hiTF",
  "key47": "ERQ5V4NNLzSqUoP8zJ6Vnmvip16Jd4CJ7ELfCQBmWiiRmzuWbU1FKj6PyTXzzE9w6qyKZtWfgaXHyZYkv9N3rTj",
  "key48": "BpmG39pqwduApgpyd3RTsmGAJ83L1ncjMwzMMhVtzmRxLudBH6X8nUSxauKXCJef5D7KHfyT7yKfq4X6xDgtPzm",
  "key49": "2JMmyFSSWZGqT5rJPdafwiTY7aHmr3ysCLiAWd2cEd16eChjybumXUc5pEAboqziGZtswbKEdwWsJPWhmAar1FGL"
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
