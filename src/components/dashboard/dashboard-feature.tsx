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
    "3AfAmjxPWNcNBMY3YyqKP98zcMFjNquzaK57cyF9ja1HKdvz4uUGYWYmQTy8Auno6iSJpyLoHbG1NHRfLsLdPVdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bxSMB1RzSNwqDk1Dj8zAn3CPyx8rSY42b52jyygBjS6ZD8WFBnNLTdPdzx81rfe2xUfGUa6Swa6N8uvdjSq89wa",
  "key1": "32civP5YDEjmvxuARQtoUrgnQTC7jF5yGeFz8PHknYC4knHjDdkTXxVy7xtDoz5oBX6Yjv8ZXNSfv92PXzWry9h6",
  "key2": "2RzhbRgvdX7MgjNrHihezGwRj1JR82759dgVvED1r4E6MomMgrA9jhRvTxb7NeZNsReMscaYH4coL9azWJgbgriF",
  "key3": "w3XZ4QyNJuimxL68DoM1DCA6atcJfuVh6kvnGCEbdYqAnvVxaDGpsCMkz2YMM4fusHMVAJXZUTrNSwyYxv62h8t",
  "key4": "2cMK5NYyPDmRcEgs9R752fNSuzqhDzFLMkPMHXjpeceHjT5UHmUMVRYSxLBzXNyfSmP3rJAEiVXjcN8M83xv2JMf",
  "key5": "5bVqBtjGzddj8hZrMoKXyZZvmSZDjTxLexPaBEx4YCdDYYy1eJSJLeF7pv7NUZYHAokHSCggiyAun7kFXum9pbRK",
  "key6": "4VgB9efMBguHDsB3bG4kiUwYgPzbByFRbQAcNVh8nBprt7Uxg4LAh4FRMrhemVDuWy7pz7WKdVq7PUswCoS42a5",
  "key7": "5ZCVyQ4d1vGH4tx66yH5JcGJ7sQM4ePYdivdheFAkzpcKXcUzG5FhsYsU9byLRPgnyVrQhveYTMnd5vnjr3FU3Kw",
  "key8": "5UHKmmca5qXbod8o3b1e8GPhz2d8ERL2tnLCorS7DKo9ZRNRri4ah7YdvTmJyHFABuCfB9fW3uWemxgZTbVEbPe6",
  "key9": "2h2qtutzoDPBYtAgjCz5Kv7bZ9VPWfSS3DF6xCB9Si6U1CHERDNoXo2JPsnLCVTkEGgrZGJL4xijLRfQuGhVKwKs",
  "key10": "2Fpi4Fmb7gwNh6kczAXM74jUVJNJAPRAPmTfzrEfvhCEHA63rBJ7iiiy6sHCUHgXvPR3mxq1SBe71TxXLVYNKxiF",
  "key11": "2c15jmmJPoJzVgYcdJskrR8ccQ5kmfaeEDgRvzkDcJvETu1tEfNiFDUdZYjgwdbgJZm3r6ySuSF4wBZjkSxiAkVh",
  "key12": "2JALh6wSJChaV1TmjqhxxoLp53zGsn6sQj3wYtY4awAv9sxcacFp2d7r4EUhBUSeVoVatigxygPiCTGDaUYej38K",
  "key13": "2hiJJRP8f422hNagWdB6M2kfbeHTDybM1TdfrMkbmW5GKxhch1SdSxCV6KSAW52P1U3R5rpNgAu3yf712YvVvwzK",
  "key14": "2qZDzGCfeDHdgEKWizzJtTLJ1ntLEdRmWksrULvBARLC5sKXYc7e2puAEwoVEghbnjLhME2zm2kVEd2URaomJXVp",
  "key15": "2MuhAWgA4B5Ty1MKsqEn1d5DgPPBezqXQGxWy7Qee41pWSvJpsM6xC34eVoCBkesgHceHBFN215iKbyAzvxtssBL",
  "key16": "4gjiS5GZbYhsNLcxyUzHXzxQG8v6eL6mbWnD6rR2mv1qKC39qCuLg2NQh6eF4J7MrFW9nedq4Yi8pphmvh1jpfTi",
  "key17": "4qnjrgaPcqFJkDbWbFzMM5pxYsu4pzrczQ7mDazpYFZ5iLeo9T5zGzLbrtANmBmXw2mTzK8yqtWn5gwusbAoJaut",
  "key18": "vJYnvVTBBmRGmAz7yg3fCfSUcEKccyxeJe2WA8dnX8yu8SPpj4TNLEe65V163ekZPnjQvcJg6F3SjhjLJN6L1Do",
  "key19": "2Gg6T99iZWjnyvDyzuBKx1yhxS2aDN6LpZT6LFEy9Ae3taNSsETi8xUVhTH2WoavdCMA26h7kH3xY8hGw8wvKUnb",
  "key20": "667kB1PqK6jVVkNin1xFibuSgZaWZuW7Po1XMNQMxzPccZYQ6PuG2wwwScUejwWSLd7wDunhd7WNSepBWVCrhYrd",
  "key21": "4nx2PAxn4eZf6EybZyLXKkDCt7aDn6vyhqWvftHp9g4vdRexpmf4Bu1RBQ2m2sKViF58QLaTJ9CpeRpyT4xeEgJ4",
  "key22": "YcyK5qfkUymtGFV4ALVpPaUC5TpXgQDzhY7UtaWJR8x3fBaAMW45MWegvJn5osx8d3uQxESB76xKk138sEvKfaV",
  "key23": "3baW2ycdFAepba2EHHdY4YjKGTXt3PEYUVqNi66orTbB8bDx6PxczCtqGGnw7Wj4uBeFM9FfCq6kqaUeEi9onCMN",
  "key24": "5Rw1Vnf2xHsXHjVz5XthtwBym9T4SpsybR3pkVDmCefrbLBYVaDPgmkNGHkgsNcVnfX8DUSW5jnVXE5q5N1g3Xrr",
  "key25": "3z1ss1UygH7FNs4ZWfK1VuvjayFd4q3FCnUPzynrUeLvLd79vPa8FcKyGg4xj5Cr9uomZXoBVMMPRjmYcc4u33tW",
  "key26": "4Z62j9S2np91xZMhgKBa2FPEmNKWKGKmeRXda3EacGRNXQ6PBdBRqaZea7ELodTfq18PR6jndTskzeYVWhryQCgx",
  "key27": "5Sd6Xog6YD497EqtzUcJ2wMJsfZhdos1pkYKLNgHJmu5nvcwtt1e2sFPERf3bmQjsV8eyMdDA7NX2bQz8juaEKX4",
  "key28": "DsXSMZadaov6mPD9xnRnhGXAMnMpUHvkyJBPt5v8SQaMx6cgN7EqKvER8ZrH8uzsfc6pBdLYo6JknGWxnkA7SEn",
  "key29": "34xC7ucFQXGSGRjW225VgDyTb3wJzyin2Su5R84RvUJD8iysgpBBUmBRhU5zMCMJSjc5yMCeyR4Sf81x83hKyqid",
  "key30": "3ZZFUARjwoBeCPJtAF2ZHcLu35irgdJ9QibRUmVoV6GgtLtdYaQdUgYm6c6GM7RYZ9onjWGzbx7SEzdTy4d1eima",
  "key31": "2Q3JaB8QdbS4Qv1kVJiTrmQGNv8XngS791LNPoiGQ5o3kEGD6SrH9uSv4pqUao37b8YXZTVqPB7jtSzmDMSFsPer",
  "key32": "2J3sHcBfAQJmM28Ph1JxvgiNhXnURiKe9og9iSwm1sEyKqFiPmhjdS4BrWDCaMukNaLUyff3hPX5qWQyL7BULnKZ",
  "key33": "5nzFV8UNx4tTbLwfqq8FhWq9UrnDXJXtXg57WSKh4cEsCygcumqzGVbNTUQk5NoVQB49uCWYCMUp27r5DQUgaVmw",
  "key34": "XknPMtHfuYTzmwzpSgE4PjYAQnvGHH6JYepruUzMb3tqKNhWuMSKzYR2o3x5eCzEv9SpQhV8QpTKkSFNSPf3U33",
  "key35": "3ipy7MhyWjhMokxdQotMzafLwUEqkkfqvHkGRmZMbqckH4ReqmryzFLLPzq2s7rr5Hr8sWtR12W81AfxKAEinGej",
  "key36": "2FEVfq76ar1P1W9SXbK8TGZnq56FWx8RsuaMxqQRdvj6JpaQHeQeRiqiBSYXDeXpQwpLbSfDaEuJjB9jrFKAhfXf",
  "key37": "2BbnsYQvhSf5CKquqgV4HzKuPRiBzPCvasYRtNX9EDymHZixpmkndM2reQFv4PGeZ8rYDN2kXdiwibjBTjCQ7HDy",
  "key38": "5xWJTxy6tGKqCX9JiFL6A4sn4Aj4NMtcQHUAsmaABAx4JdrVSya4Wwhw6ZLoZgotwn5WE1jeea2RhTR7bFQGN6cA",
  "key39": "5XYcDxMd6x7Va9siFjYZAc159EcihiYNKv1xWyYPjVVGxycR2psu1jJrrhPhTrcrhJf3dGVq9V44tBsgDbcJZrrA",
  "key40": "4tp3XgDgX9vFJABc8NUDb32UbxBc4EkLKwHJWVJKkjmA1oorYDtSrbSm55jmv3qkHGr5tn5fXTobDasjK6AQfeB8",
  "key41": "2wMSMCjKUK46RBQrevRKh6NHnzBxQTXBvc7Tk44wKSPuNxCifq5hykGpNStbrQymNRXc4GHcY1cfuASofLGXYPku",
  "key42": "4uuzvPVnLf22v9KvnmyFN5wU2v43ZEwh9uUXfbeCrgcP93Poj42G8LjkTqty1pZX9bFDv2McNL7L7GfWRdf7adGf",
  "key43": "4x8C9RhZFNjEdtZCnBXKHvx8hyAjPs9cPrHhFxzv2GuYpH5bBSpVUjKtJmZCdCuoaq8PKDvY8fmu9xhKBELqKoPV",
  "key44": "3ePCTotdEWqd7jhrQS4ya5KTc2TTseM9tGQv8QQByNArSJ8ZBKYxJb2QZiKH6HtgVwTLpe4PkmF5Px7mz4TcykKK"
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
