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
    "22yNKLUZ8feoDGkHjPbyHUbNdTJC7PyKrjhnidHi51AN4x1Qr9DWnQKgSQTdHH5UKzQaYQ7nZoKMsYzJhqvN94it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K5rnV3hqCtxX1kEJCNpSN26Cjx89WXTrbSVfcbCc55A5aQci96JcT5hEbq8kUJ3swdgsDssAvm296b9o2hrH1FR",
  "key1": "4mjx7VvxnxXb24F6JvgxL5Jvi7toCD5RNTSgLAeUnduS33HGSRBxTTXW6HZ51MLR5jdghhv3JNYTy6db6jiz4Fed",
  "key2": "6PeLe99YthRbeucVdcfZxo2jonSWY7bufhid3UtwQMD64bWLYsCVGBaiL1HDAoHnRixvz5NYidjPAHsoRbwPSLa",
  "key3": "581orTdHksR876cvkWwJMEc6kqnQLw8uBqQ7pK5JzcihEDtqPbaqnF1UNJBdxjmycuyMrqgicA9pzThuJfRC6dM",
  "key4": "5cKwa1KaUe8PEzCMUjRjVxbCsdsKiqhVCxbtQv8g1i79XggkCoPYRouiam7TJMUa2B4nmV4pSNuiB1hVkeR31JsL",
  "key5": "5gQwBEqGqUZP49wYBUMYCwTwJwRuEh9NK8UEFjjeNBnBhHzCdGqqppbMNkxmwpAGLs61enfUrERvKmVXBtivBf42",
  "key6": "4GnJNH5MzuVCmBbu1TG9X7ybGT5Hw8hY2cJ8yD3nspHbxLjpL8Ap4y6HEBkNSEMhdoGndmXq4Ac4pDyQZZuLCJVc",
  "key7": "5vvVm5Vis2D39A4iktqLhgE6wAdYvsHDBVz6SK8Mn4SqsGRCUwQUmub3FmEh7KkiJzMdrRxYtq1FxA65H7d9E8Hx",
  "key8": "84pvKdrRU73ngH8ykgL4qGw84cG1JUmZvwSsnWPma59G8htmZgyyyaJ774BcSugqWiZmbE7aHZyGtgv2HuYSFAq",
  "key9": "AgX1FbppmVQyqxyjdycyyj6bifwqqPb2ANLyPpFAPRRLk73Jf7L7HBLNRFxsVLMRXvMuFE5wZwWaimZyk9S1aFz",
  "key10": "2joVtzEYaShEwqNqxVqy2KGGnhNJxhDrYiWRjFxo9Rmq9Qc2UsPRF6gZgxVMrhYD2cYtXm3hPH1mTQGJm2rgQ6rP",
  "key11": "2awEr7yUyZKUpdxsqNwjgTDGfQnRJz7onQZJuttqpgb5Qnv5aidKhkZK3ouTjXd1so1zjg35DVK4LjFtEHtgaFjH",
  "key12": "2FBst8gKQmesjrpHPpCMzau5bVGZtJiZzFMcT1zeH4cB1WS8QzFyEGKFMku8Q4WrASF9avRHkWrNtQuNfwmZSLeG",
  "key13": "4CGAxwR4KjUKbHwTEjTKV7ero998eG1NhDGK4Bo8QjLp7tgUhkGCnYWy3FCgw9jZX9FPTAQgvZGGx9MLpfe3znPy",
  "key14": "qbfLtbn4bPVxEZ9PNtH26cDDjuYk6SBVurqMh54ehhA953PgXBeQTfRfK2U7gEoyBhcvGFZx7GLrVD4cUWdBiwX",
  "key15": "5hXhRLZHCv1cXP2mXZEsi3XNRxMDoVg8G4FC8nrDxCVbCHsrWoHdMBbyWEqJKhxkBVnqgQLV9c9vdiRxJAUCEasT",
  "key16": "JMLBLEBztGthK2rrnYiBLqjrJzdXTd3X3GoN3xEDeiqJm3gyLmNBtTcEBenL6hyhjxtXDPpsoQ2pC1yCUG4Pu3m",
  "key17": "5UPrrma99hUNcwKmCzh6PZJzgvkD2dhC5vMvHq6ZjBubentuzBKB61rSKJz2big3TKbSUzrL7SXTgJ6hUE97k36G",
  "key18": "4aqg9qTWmeeeRsiWHK1hSpG7ADoshCZ3VVXkbXvXSrUki37ZE5jq6sDscr97poGoH6hiyJkVKti7h1NXq855URPM",
  "key19": "4xDR3JePJh7A6CfXzBVXtvDMJvwVqcrTcMHmajUHqY5oGhF25XeaA8GsouEkRt7TLLpvWqfg5SkvkYpNtqvxu15s",
  "key20": "3uBGL4ZgpWDUd8EdY4ye1L7C7mr963yCMG894zf8GsgEf2y3eS9XXtFSgEjx9Mgio7Ent1pZbg7Gjb8DuY66XBYs",
  "key21": "59AzcftM7RYV2143f3LyDciiDKHMwZKQ4rYJSuXyYBoDSYmkdT1G4xfgKRtar7WzpFnbmGTE5gfKMAoE9xyFSUwA",
  "key22": "5AKvpS6vaQe7hVkzx9snBn5KHx96pVFcSwVHK3n8eDbdVMk1mMBK5XtpH1a2xG7qCxMGiYdTH2eBXq8x697Th7Wi",
  "key23": "j8PhyoU2PA4V6fYbR6QbmupVXn8Sf3hVyA7cyVfJCsGHmcHJkSZQrvZZsHqWXDL4HPHFLFXXqrtkxVCWd6k5XUk",
  "key24": "62fqf2f6cUwUgccHKyEv57E1Xs54jqufYhuKL3s8bEjHS75ucpvDKGYXLSG3Y4NeUKkbFqfkeuVc4GZL9WcsFL6i",
  "key25": "yvW353DWFDRt142WV13zgvsQNS5sHkDtia55byGzFaXZDrdy4312V62yYpSZSskvyzdgD7roMQNztJPjArkTjnj",
  "key26": "3XYLUCTKL1d5WJv6TnhCkVMfnd9FiLuRzsDcGf7DwkaJ1ZnQ4PMwn91RgPWcpgGio89mtNhM4XeKxVVV86HbdawQ",
  "key27": "z2eGUViQDJiXHbee5Jw3TdY4x3z2PdxnneLbjXjXDqs3UKei26kV95B3BLwnYgLsKAg7DnRZvgAsFBttnPLxJ2h",
  "key28": "2GVyKE3X4ZgbTc4K4RbMe7BJbew15hueTVvqV1MgfjYEA1Shcg7DXXfPnhveBCx4HNykBxfWpTfGMphwJs84jK9q",
  "key29": "27CkxCgnL5cyfGKeVrx5J4C1vg7nMiqkC44gx3bPwRfwaoZcCVBxkkVgvxc78SUheAX4KLEHriv6akDtUxRLZich",
  "key30": "5G7oDPtepmeSKrHGkyurAyDdDBBvAdXZpMLQwoKDm5QAmPebAvkECc3R3C7do2hhpLQ6o8o1cWRNDHfdcECKtuWr",
  "key31": "25WZ8qML5PX1QVRegkg2tWCFPSammfEx19nsLF5krZaAoBFsbuBdvCyPFSauH5gcjBY3sr7rMFXdc3hyV9jeioof",
  "key32": "3AhnxDYMkHuPJkScK5aT2fHwaA6zSuhMcGwZxe4TtNprQCHLaSvuSC3kmSVeWaz5tn6iQYqo7zPkanbsHgaLNQ9p",
  "key33": "4161SZ9RdZgYbKwW5Cds2DEKgwAn4D6RJ9KAUF6Bey4fHr5Ww4W2oYamcBi3e8YVLTGxcFtSAMJCX3gaQ4SD1oEF",
  "key34": "2wmxZMR5aBC9qt5a3krmDTZHLoLJpyQTC2gWQU9e6wh8B8Xz3uvPkc4MWToSwThtepDEiZDYco5jrmWTtPf7XvdP",
  "key35": "3F4uMLqGB9txQUriNk6HVjUje8VZiWTFKDUHK9L5d6L9eYomPikGntmoEpRhdYQn5nNpgiKG2E3ut4aZUqsK6o75",
  "key36": "5nE4WpFRkGVdBj92HBoEUQHbfrQogfcZX61cyTP1JsmbhmrzgA425LeAevwzKcKNK1YqH32dkuRtfmRjWEBYFGBV",
  "key37": "4dcfmvPyRPvcRCPatj5yJajqpKGxSppmeNNjhsrvEiWCD5rKZmCoCTb2xRF6JyYooVyz5JmwwAEBvmbQR8ShNG1n",
  "key38": "5ym8uSHWNJy8xmBZuoHhBKpbPzQXDXwnNc5ucnNaUkrkJWVSoH7SKM8NUjzYUu49rgWGjUdKw8gjkkXRPyKwFfZa",
  "key39": "55s6D5UKQKJ3YKQhVAKZk3NgdvjHuwdEhNFKw9Mr4hLmwJZfh2rzXE3N9xUtBETsGkcn89EDjrPBH1NopsaysqVQ",
  "key40": "5qgFhtWrgU7pXhFK3DQ2krUHCzHGmpxesmmeZw5BdvCKLXUDcTPW17HwnfUf2YNSpRdHkvhMTq3RpTd9eGqLnumw",
  "key41": "2eZPMkWzeLmcoSL3Bu6zE38jxQBujSsabtkxBW69Tpqa3YjHjubPM2z9vA8ymXujAmw9ti9zFy79sQJSYqGJWnBP",
  "key42": "24M4k9qL6vsQX7E9cVuzVWEmrybQijfJVjqsoKRA2PbZXmNnghc8CCf8KVCVLyyDTT5Urhy1Y89sqzk2KCbY5FEx",
  "key43": "5XytQCWjffcjc6ysfgtpJuJhryhu6VZtJAFm1xSP4bMXBfG3RXbHxF4728B3cVrtZ9fXUTdGsKvcqiR1tMx32yCq",
  "key44": "3CnXqdwfpYsn3TAT8uD8hiUPDFarDVFs4c4UjeXDRoUQ9FcVXfhyCSni3KsRCW2ZkJRBNvbYnE6reHo9uNLsyug3",
  "key45": "2qVV1LRVwg9XKvLHzobs6rL8vbL1EjmnY6gBdLwRXN8uJyzASK4ZapGh1NJLWuY4rDwZVbdaxf1PpdUf6wtJvAhA",
  "key46": "BaJaJrvoi4aRxKwG5ZLuYQ7Dr7Nw8Ux3Wdsbu8cWWm7EWdZAqRXDMqwct1veFWpfVwYKaZCZMBenizdEdzGNoSr",
  "key47": "648ua5v81aTgeAHjNadTWMMcZtDGXT8TdGe6rqk4vpymdVfU1FwHudtodCQjBEG8vQgsdJRKFoWUX5egzoPCZTTS",
  "key48": "5sg5kSuArc4kxWvrSyqvUiHJdT2UzeDZ5r1J5StQwrJs42LMNU5osnviGuXcEFuE76DAyj1x4AVdLLbwFdKPFuzS"
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
