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
    "5ace69JzTVuG7Y7jSUs8Cdknjny1XzwGzY3nWU22s1By424P2dJ5CWTxUzhWWJmePVJMAHhdE9U9A1GAf2iFWKhM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ajJq55TVVD2SYmo19jzKu1afQMDBJipRbvhU16QbrEqkoYjL9VCiWeHY3MZbQQbVnXcGYPX94UTryYR5GNbeYP",
  "key1": "3KfPHRSkwxkPjZMw2CNfvGgZfmYRaN95dcfdSm8JC6Tc81Y91hJzw3XKVmwBP5rZFrHfAS67CpHUCiYf9DvWgUEh",
  "key2": "3AygTtpV2qoBukp2nWKUF3iBerWd85oz7QZxSxEuqEQfgrGg5kVa9EfnhK5WhnSHomjsdjtc7Gcec9aZHWU6bCB7",
  "key3": "4h9sizuPgJPB3jExPbN5jAXAmifXNo6NETyYsiQJ8y8jndRpb7aZcJmBpFERx6eFAMzBuBjHJFf9jZgZjR26xcSW",
  "key4": "51EPSmdsprEjZQpVKuSx5htCdeW78V1n93mmni2bh41C2Mj83WtR8kfTMUxVz4FaJpij2Hi2tbHpPxJhWTpWbLcX",
  "key5": "3giPWLvrP6GvRa2XUt4ij2SmQdS4ny8WUkBPNxakoDqrypDBkLBNo6znkWR1QQbNghiW8WAU3fz6Ys5mg8aqvX7U",
  "key6": "2QKPP5rAxUSurkL3TnGSzweKqf8Fw2TH8oC9TzVtTzh4oDAJDDikgPMvZj3itjgnhcfdnmw9tQTBfQGUSa6GSwkj",
  "key7": "2uRj4knWwiAQbgnjJicDHzKjsTst2SrYccq8GronPfJ9r4WXC6F9Do7zTAP2khS3JjMaBCV7Y4ene5ekcpmzGJJM",
  "key8": "4r8qzxBMLWLvjSkfrY4ZCaDrBmxB37CKHUyaTTwkTsxBAyQziZxF4GNKdtQ2xaCVjpTWhsbDVbmERCZkhturSTmb",
  "key9": "4R2t3aeb9sp9382LeLV8gsQQDM6h7nLEAWTZgfdiVMAmeFpb19AG3x6AKQj1XNM33d1x5JruiUdnQ6FeRnV1Wxgk",
  "key10": "46kr2kZM77ZVBt73gagEZkbETfdWKRFCbFk7PzVRaALMuDjwSahVKy9pWmjHD6KjJVzDQRT581FhuwtsNL3rik9S",
  "key11": "5sPJus9k6oWM4Q2ARfESq83B4ZwxQ9cT1Hrn1ZRXY4ctJN1JVSNcqR9mYjrv719nRWj6WaYUHvB8WryWC1bqc27S",
  "key12": "PjQCiFeSnEy22vwPUmdJmeyJNdhu6Ccn6vMwRGXKXyM4w9mFiFDTdFDZeRf1w9TBPUbJriVR9fqBKG8EMH8oHqg",
  "key13": "5PEofn2VyqNgdsT8jsmqWd1ohKGjWZfYcZwMAmywNMETVexB5L3F6qSBQSmbn6XoE67dAXt6QPbKzF8ut8ZuMMAv",
  "key14": "53miwKNxGbRVqgsdLjDnZGYzAy8obmSEhEh6k9KethuyVpLwcnCQNhLKXxvLVuuHryP5JUAi2apWBbHquS613wu2",
  "key15": "4ppWJVPx6gGzGpGQdTkXJUBi3D7B6knaZ68EFJPsdDVVThzQba642CMcfoWKaQAPBNFJw3wDes43pnW2T1Ue735g",
  "key16": "51hPurrspMbE1DnvQ33DgwKbWR3CwJvXupR6ryMfmJuHPs8fUn1oCynV7zoBGJ24GSxagKGJ8shF2Kv5LUhscryr",
  "key17": "2MASH3Hy1YcF5RaYQ2t4YvYWQY723D3okmtejnw9Kp1BZjbvbEqfRK3Ex9crB6oYs4gvVcgT9XUHwVcmxn2VCeBN",
  "key18": "5bCvtMEy4vSiEPYTzxQ46xm5Bw7SFZHxZRzLhUgYiPnkdXV1gU77oQa7bM4ruiz3gu6RUycMsr8K2n82TBzJQ7y4",
  "key19": "4NxS4hoPg6HUVhB5Z2DUcWfq5V2QLizWoR2dup9amLVHREgtEx2kw6qi7uhHPMqeTc21syF5EJuJxXsG2LqsgPEg",
  "key20": "4vHLHp8mtmKKwYqyPDp9vH1vpscPGwcDD9UYMSKzJJCGixHhujZuxeVVDvHSjuyY617NSQkhfTseGMpFhbHZNjYD",
  "key21": "2qMKmRRAnwy5wMQBkWnDWgZU1Hqi6QceYNmANek4SCxH8RmTPygnzs7mbxcfRt4bxr4bTZBo6ShA6To5Lr457vKY",
  "key22": "4iDa1osdi5GskQJoKCgddKoEbdnvcHwSk81BwNDwpYmB24G2oNVtTvvkTZbhbSSkLUDg8zTfCfju3fd1GqP23igq",
  "key23": "2x1A6hmtHAtbHKHZDgKWH17yLwq1M8349hjVEdkMf76ZDHJJCt4RYNJneXtGq4ehsKuSTjvsbfxVrSptWdnqoVJZ",
  "key24": "5GvQhFPYJKS1nLbGfMkEy9ToXHMftgHAskztiDs7WZnx6rwK6NxCXWetb1Qujd8ejjVq3ufBmJ6F1eDmDDspEA7A",
  "key25": "4zwd2pd6kxsqyomxmLduon3jerxRuFrBGfVMpYohm9tJjhF61fggutgsuLj3whxtqmUWWVc4SEK6F4nkubRUey47",
  "key26": "3E1fTE4uA3CfGBs7HC5YGfUHtxwxb9FQtPDf5PgmUX8Pp39Zq6EXNCPrAfeTMwAcLbkTGDhBtFeTrW8cohLim8yo",
  "key27": "5zdgPrNBJqRn6N7doEw2Y6on85xpPTwX9926FVZQmjVtXjNMfNofxYgzkAWaNd7VxKQHaspZzyj6H2ytLLsggwbT",
  "key28": "4BoGLV4bWbGTtaNzZwcnUupyP9CiBkMd25fawn3Wap1WxCBjxrvekcqxFkwuPjPESDcqeTe4ePvqq8Wq3x5ZwqWg",
  "key29": "3zTPD5Kr3BCjij1xjfAQCG1pZnJCuiq6FtXtTYtKCJvgfaBaX4y29eoZyqiZbBecaWDRBam6qc3swEWQesqztMfF",
  "key30": "2vDTNPkFxVnR83SSr5V2T217qCA2hRRsnX62FQ3DQFNRVxrdVhzS3Zf6ai5Yhxu7Rz1Wtsd6NDqhtiSMeEFJk3Gb",
  "key31": "5cLaPYWoLcrb3sbQeEzweZqJGywrLJd4yJtbCbh8MDKnEuwDGEVzdumsH78WnL5j7hLADdgk3QXfkG39yBnBDpLB",
  "key32": "22mZzznLU3YuBr4aWKqvURRRnNjH3b7q4s8E8CPiTMTyrMhyR96vhsPev1g81TtSf8Do6URpzJemBK2eCnNd8A3o",
  "key33": "2aqjezsyaG985ezg84cjwQyyVtKcmyQcLsD4UBPPAvNvnZWLPXzyGCndiknVp9wTskdmf3FRUJAxD16tHUzMw4Au",
  "key34": "2cx6BroUs7LCeyKd23fWYnW2SQ9DURm3YnR9d3BQK32kLPAD9qKj2b9zrJ3ias8qNZBLUuznkBRADsjwqRjwUjso",
  "key35": "6MsXMXtMPo3TtKbfCZAMyt9fVQAkB2vpsYKqBoifmppn6tx9fCY45XHcULAZppvp18jscVvfd3PriN8QrxH8Dfc",
  "key36": "5ePT9MxHoBvwag3tJe3yic2UDbZK1K2mHFbVEquo84ypewFoEKQW8vovr3TRuomza7UvkHFmh3cuYVwKSHwYS1XA",
  "key37": "5dhrpw5w9RpDYyR3zcWdoCCrYdP1yPmtEEVenT5SAUvpiZV4H7Yx5r5bQbmqtAv9uEtAqd83PqZjrhwVjr5u6B6f",
  "key38": "2s5zK1ctNZ8DLi2WDN2JjCPPQ7EndXEqXwGg6vEUrV16c5KRqXAcQ2jDd2fFFYWVXPtz8jMJ7N82iyH9NLaeL1mB",
  "key39": "3MQnaeSzehToXK54zxsxmRwd8bJV5BGRstCoETZN9J5CZYRD3Be7fw2vY3mxyDKXKhfmZU4nqZnZ55mEojbQM57F",
  "key40": "21yB7GmPDxs52v2uRe8Z8rJgtBzgWswRMqheXn8cfgPvHWqEbdSGMzZowbZaH916eXUv3wed6g6b6TcAqX1ixdDm",
  "key41": "5ccJFYEStb8C3XgfxJoKaTQCScKZLaTJU2Foz8anQ265tyxas7eXQzTRidQrSCCNsTi8ADaYvTuX6mEdW3KtWUXE"
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
