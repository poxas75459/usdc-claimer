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
    "2mTihksBS4D2doYBjbD3uFsrh3Rj2TtycPNxiqF6tkrdBKKUbVkF3pZSQ7DUTYp4WTLuz1vMnw1Wq1HMkt5VYRHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sbd12WgEsNPFf5JuXVskuXtefvSuRLmNPn1r3AGm58BJPwHQnpJKysirCzCT99TjcDGnmsuhFxEo5cEVKt8cBpu",
  "key1": "2M8BVugDRB9LMxhWBAJY3C5fgzPmeBVtZrgd47znDEbiqjGwxZm3YVztRHijVYaHX2yu2FiUxjusDinSYycZ7H4m",
  "key2": "WAiEMFXvWJZrVM9YjUvJUbpt2xHomdRHjJeZMq69itcpU8RF8XhTGJQP9nCgspCXabbUm3mPpv6oVB8N9mDyGrv",
  "key3": "5AEvp3M4pqjoRoFWvPfikQ9iChNtwGTrfBLKRpGSdqZnXMKkEMCUABadTadSmfHksDCvc5Y9AJMZmsrvYiGdrJUV",
  "key4": "3sgWPYnkP7oJQFN6JioyQiHdE4TKZzEf1DZCeGm5TN3L1Y7H1avTXxVqRASuYCcCXrwnAX86dpvc6f4j8eYqN1wL",
  "key5": "3Vmdhmasrn5n8RgWw4X3FLqiAFS2Fe1k1PvCAcczve8hku2ywxtETYvqs2gzsexssv7bq9APW7zDstHxofvFP7PA",
  "key6": "36cQxWHYf7t5tibqvCBHiZNxGC3RiVPmsp4fVup2aPpthRyoQdhxf7SaazfNRuSktKQ8HCh43dhmDjyRkkGVGnxU",
  "key7": "rTx6Qgs5wxV52tmCkXmAxFJepppGyB6qhF7sXzQ6qUtNfhboqiMtkB45D9ts1E2zSDPYUsbdVEiVWjd8hFtwVuE",
  "key8": "51e43sRbeyMrFvjC1xTkLWdUd7vbkF6H2bqde23wXKCzLVsvUPX7hUdTykJF1EeY4eiXdAWqQ1GdwxiSkPk9XXht",
  "key9": "4MAsdBhHGwwcJwAtVMxsVQf64VijZFHGdA2iMrQMnxn9KGjM8GuhjV5SL8aCgfXttYEKUntabJLmTe4d1v6aND8t",
  "key10": "47tRop1bEKYFQvbEW49KqQ9N9XTgLuZupRaEdiELiuPG1V7QoTQ4i4EaD65Smka22BRUtBibbi9SaW4nZXteFN1M",
  "key11": "47xSvCY5AnswYSJ459W8mjikDgTqZcUT37fkKpzPuLpNR4L5WiDqbSprB64LJFvQ3kKNnD7JenNueuZxiJcrAaYv",
  "key12": "3nrgMnug96xcci1RcPicVLRsUfvkFW7ZPBhfrt3fEbHZcSqye3UN8LteQPwtn3oeL9yEQu7T8CJiUgQGN6WD3e6P",
  "key13": "4oZSgsxGQVjseKdnM4Cgm1BGU3NTZBPRxVXy8uThH8dEmk1NvhXFnxXg3VtxvW7jbyNF5hTtNq3gAYiUNYJH3Pph",
  "key14": "2pqaHpiLMNvWH3G15QkutxPU2EP97gtijucgzA6PTwb8nHABFeZY88KKcxN3vKKYeb8Cwuv647mEWeiqWkNz4Tkf",
  "key15": "k5rYTcQXnQWqqHvfLowYzUTgh6vS47ZCEMPjq25nCfQQahdYcQnAp4efNZeNQ8KCYEBYqzkeLyYbcHPcFYy3Zq2",
  "key16": "3QaNGGaMu7L29YCi1pBBjP4QqZVT22amXCLLThDSUqtzUKZhhqEB5dHeVf8hndYDkLXFMfnZfaJMDk134wVZFNjh",
  "key17": "3rXSxVairA85zqQD5u2fnrTfaewKSwCwh9XXfZsRtpZyXcbbVPELq6amc7AUpkSJPxuVSJSajVWFLFvsgyTnCeoq",
  "key18": "3WBsoSJJEgNS2JV2q1Crm8NhWRNCcQFUdz2ujaxVsLnLKpsB3mXAgzm3j3ehCFJfDMAz33WVoAsDqevrsppQSbxW",
  "key19": "2FRHpaNcqPK6tnTD5JGQkq15j6hVrmZXzVFztUMwNEdzg1mEcnFxfbbFavVdY14cgrLnVfSjGVapbhUsSYxekoAX",
  "key20": "4mUSUw3Un9QnoMP1NtqsjJLRFg65y2HU3WvLCLUNrHq1AhRcise5Dep6MByyTWunrUN6i6WEkxS4jaCjcp2zRMuu",
  "key21": "2HnEbX59WG3WTS3KnAXx22w22TA6EnosojUf8xNZGXPrwpDygn37EmjdVnVGFi7HxRJ63T6jPc8AkEmEkucd69Wx",
  "key22": "5428dA1HkHvHyQRqHSVksfDN6dRbpyx767DGiLpjsnjojrQREpGk3dp53S3UcV4rYJt7RUY9Qood2jB3YjhSMFW3",
  "key23": "2ZSTJ8qnA4HJgKpMmqAS9zFJDggY9ghZcoPgkDNReKZkn9gWZbMiXBedUZL4Pj21fjSgfGJXoaHodbda3jZu6C8L",
  "key24": "5C2viwELBYrgy9fvwzi2EJbDtiu9yiVYd1L6M3s5eVcT1HPFc6PdndgPaMg9JWXSdzf7z4CJAnQhMJHZvJu4cguD",
  "key25": "2Mf2iJbJAMD6enb3sY2idxMvm3CbfBgQzedrPnn1Afnn6P2ryNZpWcyaeUPzEzfEiezdb46aHny6WPybc7bopBCq",
  "key26": "5uhjtv7cNY64hZgHwNDf3fK79gGNxiWpk3mEUXHsDCsw9k3wQF85bY4Z8bqmG8YGhhxAcsag43utd69z7s8HAYyK",
  "key27": "hFTfkRS8YSZsMBWvEQwmEpYZUM7sb21czc5D4gQGoqdGfGQRnCiiK171CpHmCF7mBye87FyMwJZ4fwuwarGH4JU",
  "key28": "4FrPbSgzjDCGz94GoYmZGsFiwbwQvQFrjP2m6h2vbH6Hoehw9yy75vpQocCshUzCGTUj3Bw4DUmrBrSreg6E2JRw",
  "key29": "5GFdRXKedHkCKiE5XwSnZiinKiAa51HnnekRxNLHEchBqK4GdcnDPdC7hPi8WXaRnW6ntauWQswhc7Nj2Uwsq2ut",
  "key30": "32fwCW2b89BguRW5d44JsVopBBnKnGXDbCsHmYmitqgZUskEVyAEtB4wAm1CJaPj2qJEeYd8BHvUnzyVdZUTzKqY",
  "key31": "5BwsosF5zKdQjv1rnXFpSb3Hcc7zXBiHjL8uWeyVX9yB5JX3aHAPXDd6sqkVds3n4rLv9oqf2BPe3NWCc9ph4xLR",
  "key32": "63NsmDx27XNZMKzMW71tiwymP63iKwHEeozSVE7x92ZvdBdXPmy3rYA8g9MptjyngWLdV49iuSAHhVruZsoYgUQf",
  "key33": "5PNdLNk6Tc6dSoKQu7pksG2usRjkZNCkAWYbUKSgnskJ4bqZU3wBxuthXyKFQAwB7RELyaVwV91pK1FDAnfH61Ao",
  "key34": "4kea4ztnfedVhCgdLy9cxNV8XokfeSAtKGsVANh7niAbWKicyV7Pb91w3rf1fpifvzB7P2LeVntAQNHKyiMWUD5V",
  "key35": "2CnzFk1s4MKu7bJRPiuXiQ4KuF6iaZK2a9KC1SC1FsVZ1ighWCotZHbEXJEVnewkp8PWbdTVqk3YgpcpUigHyfxY",
  "key36": "5y9uNV376CmXXSivWXNiEsJYD7TSihoGshmCmgmLU9dkB9djKE5Z9scMHCvfhktNCk1wpPUrawAYdQ7E3CPmShBW",
  "key37": "64bTFpGZZwkj48UDbB6PMtrj5K6AaT6xcxVVUxeipGVnakiQo2rRRexGvMKxSFSSXcaSepUFsj5iEnTX6qS271v3",
  "key38": "5QhrXSvoymDcyuBFqjMQUgtQdWdCMinKRy61iUy8udgqySKhJfhxGbKM2JhEBx9HcUN41DrDhb4FvJrygiaZbfk2",
  "key39": "BKHXfEhLbAHgvsh3hpcP3zTEmV4iwZ6wtvvsroCPNrNFAcR1jvAURaDEp3uynkDExJutzUfdDUUyEgibh5UsoWU",
  "key40": "5VyFkrNVpUpVraHCspVFV5tvKiA8B4C14G1Z4937Uw8RvQX2QAJEmSyfhV1fWSJ1CwSKwU94hNrEK84PZmURTmi2",
  "key41": "2fLccFBkWc5vXy8qAmpqwt4mniFUqP2HsgJeTdwc4ZbHioqm9HctJBoGErM45Yq1aBttjoEcTd3exYrMX5de2dtQ",
  "key42": "za3uRgrk2sCGvYagztERS8aiva9h6BGuZr9QY7P5M81BEj9UBMeSJNs5eEnNU47sdKAAtR7qpq4htf1nZP98ZYN"
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
