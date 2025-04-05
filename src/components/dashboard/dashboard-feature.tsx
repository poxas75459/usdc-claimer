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
    "4oxL6ruK8gUZHxZwaTMZWW8FJ4p3rAJHguv7epEWFFqApdCo27NpQXNyjQgNgZzGspXyb8R2iqNKzwvheJ2TQeVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxe6jDsZ8QtmUyX5C8o9KcFswAKgwwL2usP8fSLJafvb85qDJAmugnkVzkNvnxno3Aj9f7N4uZ2ZEtW8X7CPUNu",
  "key1": "67E683xTc9ZjvfjuYPmNF6GcJxerXq4HHuQdsaTBRgjohmySRKa7syVA5qeN8vcyKpymsxHidnoU3ASfc347PQQu",
  "key2": "4vLaB6NkQ3dTW6FWxWxRssBRjvtG3UhvSUgzcuAPwDXHm758CcedcagGcGBTXksv3xoKgGCHRBBkjCW7JFjJ4Rgo",
  "key3": "4mvHHfscfHP9SHC3Y8iuhLmJckxP4G5LRbLQJDtgmB7L5aWrrx46SUzushdonGrm7pB8dessDHceATaP7kScHJgG",
  "key4": "4VSmYk471DvYgordV7xxi5Tayi2v2WmRkuGDngBRLBDZwa4b4zfrgLpq4eocXLQ3EURWmg8djC5Kc7DqmHvjxEqc",
  "key5": "3qrqSTurKAp6s2po4ti26VvX7yoDi27Kry4U57JVu21BQVVASgNq1XQo7JL2wiJn75gsUnuqChYJqzsH1LbyHAYT",
  "key6": "2ffZVF2bqCv7JmxDNRX4s9yMeFRhHrEbVdiJ9i3v69XuDU5q6sDQL87qVPWKck7RD46B3L6xpxygBvABDiDw72RG",
  "key7": "QZnYR7ag4kMkAiz15atcwbMfCisYBr4MbbjXgLwLV3RWcbBgrV4tEKZfKy9epdDAL6rR6wcToJ3ihXykFNt1pZU",
  "key8": "uHwQXcyzNc8e6soS6nydkNbH4Zk24db4v3f8T7LiRH3sztwMgAsgbnxjMpuZfC4TBcjGc5KfXyzEj13SxVpW21i",
  "key9": "LmEUb3mDezhEtkxXVpknupryyzw19Dauzq6JaTuvfrwRU3Jobffiw8TAWsn9w6DgRwuTsKCjCKXSggv9bKzCrJT",
  "key10": "5rpjbYjgPEYjNX1ETXmW12RiJbctGf8B4YEJJhHwDxToeum9QUtQRABZL6eeEtfXXhUtnqQb9kwVfZusGVampW8y",
  "key11": "2tSZzpYihMQRa27KHPhgQ54SaeufZjQ43MB7nYXitnvFSnEdxFs4BXwyFgu9quZ9PR3KH9NDA3wdJZhyS8Rrr4Q7",
  "key12": "4rWWw8NrvU2SvkRYtakqGf53zx5Q84Hsmptv6SUMZGMNgV9bZbn83sayACNbWUeXJYfAb7dqKJEJHRgRcszyMGgH",
  "key13": "3FWdgLGiaDDZHALDcSvpT48pWPWfSjv5wgFy5MgY4ABs4ffkdszwsGoqkeVyNva5ZTgvLirrBJfifDFKMTvwGcaB",
  "key14": "4P155pWESPJBJYvoo2dbHEZ5m7x5N42yHh6pc1zrbW5x9zT6DhWgPmrdyDYqEkvL5E6a9GBaEoBrFywWD71doSp7",
  "key15": "5nhA1p2M2721kPPh3ieyH2SHYttnSSWTxwfPVyDBLgbtpsG9gdewt7c147ARkQRdhwyBCCZmg535eh7Fbw1djsWv",
  "key16": "3FvQZcnxtmUPMRSZwbi2icXoi9ebN1gxSfDzSowtK91HCT5Yc4Tpe1vtVYbveUoDLPJPRkcwtoHzsua15RPfYAyy",
  "key17": "5jiwFza1LdyLKchXZupMqL2JWaBHBQJJxHvoGmbpY8Gtzf8TdBaGEFnHNRyq951E43ubNtYgyG6C1wu117QTHAFL",
  "key18": "4YGJ5d6owR3NoB63FfiYXLkECmg99n4orjXmGWKjHAmuoHiXWq3vXKWc1W9Ck4p3pxGMBUpQJ4m7QchHMSSatnyC",
  "key19": "5gin5cQ2fDpxqnFfd4aZwVyWXjbQKwanUsACk71rE69ScTQP4cshXtwtRa4Lm7QuLbE4ewae6rgqkcD21WeKRNAV",
  "key20": "5v8YotZ5PZZ9KSCxrPkLStWzy1BCJiG6FW8qzAQ2xBcDPXgsYpPz34YLj6y9r1VSJAxJwrWaNuQQMh1dstWLzySm",
  "key21": "3Zs1BxQXikvGF9XRhHi1smzGukWMkT52F7WBPGib9ghveABPCZv6ez3JXZ1BtYanSKG3YybvMGHMpZL3QYzFsSLw",
  "key22": "2fcXE97rUwQ7voY2zRnD3FSoavPHZGVUgcCMynTUUT7z2yV9JLXvFkoH2aRi6Unt9LfnzQqkUQizpbMAV4eGyt31",
  "key23": "3NuXLdUayQfKyh6pf55oo99sLJvhwFbGNVatZt5i9j5dAc9CWuhG67zPvfJJnEWTvw3UwiSx4HGJTGBTsaMmSW1n",
  "key24": "D7dZxBvXGVZc2r8ksAg6m1upWjurGzMT8t3ziAGB5heAbxP5kLvJNMMoJwV55coxSuAoYjbwiGu1HaokUMoxhuN",
  "key25": "41U4HHQ2abFuAY8pD98f99nTBBgRqmHFDbfiTSr5cSiujcRroqYvX47tNydToUgpK1CM6TqBegwuCKBTnkEsc9Hi",
  "key26": "3UsCPMVhn2nxEZRezh2frEnhoKaYyztF2Tpr4pJ5zJUVtLUgKyQZvisL2e149qujeZ4WBrk2pYhywhZqMwuAtjfB",
  "key27": "2TGU65ydnzHJ5KDZCerfanCeC6aQffSHCSAMXTBPu9foWKCjUVkPmwSHkaHrX3BdL7KtawX7DzUWqqp3XCJroNY3",
  "key28": "3m1Bbf2yxBB7SoYzr5FKFK31Rk2UVz9LfofNoE8639Wpmo9zZaoLSddPXvAvhVXrSTBQpYzF23XpEoottP3iNQ8K",
  "key29": "4VoraMPdWrDhQ598e4dicWDQX5LycYHUZTP2VUPwZQffVUAMLEQryyEYoCM9CQFK97U9dCQtW9JJRkSpM88hi1eA",
  "key30": "2RiAEfjoaKnREZrSPeCAoWmKjy8ugk5saw2yQByh8guK5UyAdAhvbB3Exf7kfdktnFYK3UKnmGPVDRm9dkyqKNbr",
  "key31": "4f9LcAHiicigdcWYFywaw5oyjNTCGdMYZuapniBbax9p3JeG1eR8hgY28XBnaY93Trh7MBCPhiKz8nRmfQcYXocG",
  "key32": "4LeKGeaBuXAZgZ8b9KPadH5foBnkvdkKZaUwpX6W6NyXDPTeQ48hMzrs8S5i4K1viscaGUWgRwVQwK5rqEGVswfF",
  "key33": "tKbUJNrRTdg5WUqq1CozaiWgjHjxfJJfiCDc2bbiodRdD9HZtykwbnF4LxL536kEtMTBen4QAeT33PGJjRPy8Pw",
  "key34": "4tHYeBKohA2iTVMkR2MHma3VSGhNqCECQagjU2XtLDyDukoxzCSen5ZCo1PYrRub9F9cZf29jB6dqrLQZr5J2n7H",
  "key35": "Bkrjdp59hPrqy4dCVYDCiGSAs3rvQgLmbWAnWgCJMAjXQw8aDtjS3gBTontng9uzSD2qYzkXudHDp8VssJHQGHu",
  "key36": "4JZah2ZPLPDSckeRVHDJSkEU3ML35NLf28gRYDKZp88HLvDNrpTJvWeYiBfBe8PQZaNcREn9vw6toX7FUhTq4FQL",
  "key37": "5ULmcNh42XkQJ7hEcRqZfeCWGJEJtEioqmbHnY9YJ3RvQAxtqoqfHP8AQsgybgBShGQPWRYTVPQxLCBZJxAbheED",
  "key38": "4o7J7nB2bSTXfmDzkFqsswiTGfHFerbbBuaGgZ6BdeuxosXg876KpRnTteKqTKJbm4DjhACJA5yzoztpauFeekKT",
  "key39": "VhEnErnr4yWJKYcGq54Lh32qXsQgg97f1pzxPEBsmk7JgC9vrHiLpzxE9xGbnn5EfAfJETwPrPMf5eoUkyeptEf",
  "key40": "5g4hNA7F9qWcSyLUABpnNt4aHYR1FETzdfMAJERD9TdpkuFV3158uCLRo5PqhfF6hQEabcJYted3eJnpcEewNy6T",
  "key41": "2586Q3Pz5hKfXWEVyonHMmVrRXziJngkKjpnKZcDpREvo2EVGpaRTqTTjmrF6prxvJ6PUNs7gj9EbMxMiq3eBgxH",
  "key42": "5LSuqCc8iLDvPcY7DZ4j1qhtgSECUsrGi2QFhaTQiEV1FMK9CBtV9LntRCmVHBW86VVaBoux9cC2uFCCk2f7aVMV",
  "key43": "FH2MTRaCSDRSpJhspfMcEei8pgX5E65TN8bcwR5efQsVasQty334TYYJwvPwCegjEssYAtgPe8FKaztEb3Ve9QX",
  "key44": "MwFVXeSwZL1WcmSufeNfkqXdt1B4S17R79HAuYmC96zT621JekfNu69QE9z6tZaUCBSSQtoyCKEE3GPQJUgEZTV"
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
