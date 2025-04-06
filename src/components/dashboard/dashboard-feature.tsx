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
    "3ojoEPCHqDwDkjDtQddr9Quf35FgwWtRKGbGnyqvXPBLagWSQApRewttm239FvFZNfjsKpdJMrJyeXWNVdGuQzoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wJawLvMMSuquMeR5P4CDywWrz2YadwM2wR4UWZdyryK4uyvgLehd16yz4g9BXQNi5hN5bPAjsPAGabEzwphwkZ7",
  "key1": "4c5zVrX9WY4NqZzmqxkJB6Wb1TiwJ35BRA2S6YRYrmjA2kAA4SUPQXycX54c2KdXrGzgjjfpnivYPG9wz3Rh1Z9Y",
  "key2": "4PE3tV81b4CirDW7hVZce5gqqhRqW9utfxmtBHMnixEmv4JXP11Sjt2qi5EBttFTMt7vuVuLc6cfKTQMbkgrxxQP",
  "key3": "4tKYUzEwFZrC289RKcM1RsfmmRsWqDBAkntKttj1VMJovcgimPaSQwPHyVREVN6gvxKnbcfLrEXq1xB5K79rP3gE",
  "key4": "46vt4X7GXTk6ZhcuAXhPxnPhLo4HmqL6gFaH3FDMBsUGjcGVx7PQBtWrsKQPrSXebA9rQXrFpRiirjhDt9KnKJGY",
  "key5": "67r65e7Sxfbou8QyRYJ88offfjZ56CCAjAyTcAUTeVQUVgqFtN4kAncPEujgma9t6PGVNKGdpbEAScn9hLN2VWCe",
  "key6": "2XU5Co4fRfLRhXoNjzMjvAmGNXSPDWyLHEbuENSfoVJQbBW5GZ63qgkGYcww2QaXwejZSJTWxqrfLYJ9LiQYaJnj",
  "key7": "37xRDr1jLq2DgGUpEGhZxBZzFKEV7KrAqnjQdpVpsrNaTSEykF6Lw4xFHZGQNRbYUr9SEmxhF7k6KNZiRPGHBUk2",
  "key8": "3p4C6Kmp4kmrKRzdUzm4GzjeBYig6Hz6q5FhLyYpoyKf1Yu1ryudZsik6j56LH26jWVqWT1vFhS2nPTGRDxUNXfm",
  "key9": "2CoZ6HQYg33QPso1hfwqeUNHWTdRGHSzdNeeSZ3NRhG85MZfCX3Dws7j4KM4u4mn5Uc83mLh3J4mmCfvWzAXFcD9",
  "key10": "4zWKDbbZb4U6zCjA2nVQ2CEzHxHtNd2TV6VePxdku26QGc4Gu9pW9b1xSZMpfXgm7mhn5TtpdXo3LmZLMtBXb835",
  "key11": "59Tb3AYdhppv9bn8xeZTXUxVVpjJtbQbYzUftVYCPBpDepshmLbYonozepzCYpmwDUqsV4UNrEXtGqFhWAc9nXzf",
  "key12": "Km6jMMHcSdvMNFZqgVXSPxG1KbHRrNowxTjiGBWmR7y9KhLAHhXXkxzLy6LPzPqP62hKDBNkfDYxAVUEuXQQhLX",
  "key13": "WjrSNiM5Z3HWUFfN2nSvGs7J4RZwdWE5oN3SL7sJssTNSvzpB3vtN68ZUQBhbst7F24DnEVqRLZRLJa6pMHHwv2",
  "key14": "5sDSxH5znGvQjZf7GrKJgy9PDamMWZ2pXTSZHsT9cdvYcPC9r78NPG7wxPXj9vJbLqF8buGzazfR6kCohwyfAXyF",
  "key15": "4ATzeZA7qPFrs3x9A8UbcuGyYKDYXSFZofXwaAzzDc47kBPAzTTeXAyNJ63c4dTRHgwAweT2DUZUCBt7v7ggRZoL",
  "key16": "3mCECbycqQCSyhP8AtkaVNFUPDU8WwSmqs81TRV1o4AaFVYQrThMzv3d2SCYrVbVVWNew3sBuEL3J4qbVasM3caH",
  "key17": "vMLRXhyM32rVrACvmEkiasLv7YBi2UsB82GB2JhWGWruPQZrQZwFKtPBKs1fNFk3V2JGWRT9NaJLPtVe8uywJbQ",
  "key18": "2gA8cDPkLkqmcFoSwYRzWV8BLrKK6oj74EcXEjQzS1uZd5rsdaY8b8PVxdtMTNhCW5vS8ZtQnMkimefCWPjTV4dL",
  "key19": "3fh3DJjAw1bX9AhLffQiEfcncu88n4PjPLQvWwFxMz8bwTAgTqXB2DymrPdZzeMvoqoK2Z2Ta1i1VJuKRBNoxuTK",
  "key20": "4LiGan1HL3JooWNN5BbySBUYEzEU5nW1fdr1zRfnDeVSkxdUZATqwq67mfHJzTcPKbPndhJcciHmKqLfcESHw9ay",
  "key21": "A6D3dsdP2aNnUABFG5ywrAbQAgE4oxdn5gYuazShU4J7AbLgzig5pbej2a3vKWgMHmmgFaGnoTWLteSu35kMUJY",
  "key22": "5AdZoGxnAkwpk7Uh14xS8R4Ux9j9Fm3FJuKF4pC8aoAwL62qr8sDBA777a2eHagWvFuG93Kydh1SkqiTL1ZDwwgp",
  "key23": "2uUdGnGgaj1yLow8vVkLS9Z8v7CdPSngc6oW7i4C3ESKL4NtoKELQ7Qz1yAuS5Bh7PvEKWQGbWGu32oSZxw1ZsZU",
  "key24": "4oNKZViFsBFgcMn7WUP9ohruB37B4AuKmZ7bUz537VSLGhfjDX5fjZ7FrcjEqGV3h2nJFgcYhZqwxQ5FPmjjr148",
  "key25": "5mWiQ4FSBAFjQofsProQW8YFDhR5kigXu9bhhgqZbWgEskztNTmhGhrusECBh2GqhVLvTMdZZfu2SkoEdu1iT6Pr",
  "key26": "4EetCHy4LynC7STNjxxYxP8dSCTh5fiNPrnKje1SNxSFdRmG4G1DgXHFi2JT4oG1GWMrWNWFjDHwPmCC8yzHbqbe",
  "key27": "tEykpEBTCbupyE4Zqj7vd1Amaw5j5xeifm6jPNuCHGnXEqHauh8WVSFhDm7p1LirQM7ZzEmWoNGWdHiyxw3wLUX",
  "key28": "4HskvYijTLyyYhjAifWnzN5VDJ75N4nUhtjvEa8JxgekmLuG1TWnimdbuei9UyFya14Jwr4Hc4vBvcZhzbQS78GN",
  "key29": "CGFz7SHXkJHQphcUnZDkXYvRGEd5rbyxkwwAKsdAFXha6sYRw4wfyqKZdjc8K8KSyQbbrLnXqm4XU62fFFZmtaQ",
  "key30": "q1PNWXSTgjXSjrmLFeKSEqJFzk67GQVakfSiQYLcgE9c7V16V9eMtz5XsfWoxJi6XUqF5qZvjQEHa7TwHw9kNua",
  "key31": "4X2PUsan3hYSwiF1B6ZFwJMJ4CD4M2Z8DNCiExWiy7jRffyq7JiuB9QT5CjMs3qUWN3T2zn36brcpDN5hUJRhxRj",
  "key32": "5EhqMzXuT2Ekdyp296mDwHLTFqZfvY6yud9XEXU1awC8a2aAFRVqMpF89KNS4sskgYZJEPfe5WbGy6EqtwvVfdtN",
  "key33": "8ccN458JAuQGLsSPcn3bFoDFLH7VbJbC1yiJomEnd2Cj7GXfPb2VQvUHmsYcNbxvwV2M7VRdvRyovVjyDgP5bjN",
  "key34": "2oHPtVEJ9tFAnFWmfktrzuXFmb6dTX2x1L7ctBZWnCMkjt32bvN22wNq59CAPCGmrQ16H7k3vHhPTiNFeW62LdBQ",
  "key35": "2fkK3VJvPBW1LfCju4S5Fpokb7b62JVwC6Frt66iyKQW5jWoJ62UXpjS62YWwWFAFCHxpnAY77or6p386wsmbst1",
  "key36": "5DzRK13kexXA1xGNdeFob5qbmRd4No1CDvGuaPb1NjDAog7br1wEx7xv77mo3nE9urZq7sNTdREoqW6CsDKxnbKE",
  "key37": "5xQvCeLeaAgMsoBDA2BtKa216NUfNYabmYE1s2vp8vvnmNG4vG56WaxVNLh518QvWuVqHMt4bRtbVUF8gBgqzT2z"
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
