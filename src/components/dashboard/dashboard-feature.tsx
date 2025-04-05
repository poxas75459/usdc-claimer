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
    "2qAPVpypSEiRPhjdbhwQSmvpN331Wiwtctddsz6wBgwWNvVaDBNkSpySjkV2mhpus7Wbzw7kWasZHSwxSYmKjydx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RncfWqTqbNL7reXhtN3ZWtRnAvY9qKPKw2csj2bvKcoeuXyiisE66rywubBwdWGqhdFPAkLWfiF6TK7gPbS3Ei8",
  "key1": "4tXtc5YHBunuivwPpYsMvXak7cFmiYVyS39CuGEDPmNPPJKbsAUSv8TagpC9S8AZtk3hq26uSBpq1MVX85Ba3Nqw",
  "key2": "3BpSGmUXHwqWYF7JrHrqhH3SPDtsmibJJh756dY5KRX2aHNtQqbpUiwHXnz4tsUHXC6hs2Pn32CH6VJ1z5YpQH1Q",
  "key3": "299k84AT1beCHfuVVsChRTgv4wtk6D8DrdfCseXVmwmv285gTwR5X1fnStYWHqYbfo3PsHY7mqiQJ41sN5W22PZK",
  "key4": "24rwLZt7tP1UiQuhEAxy8FDsv1B1yhLCKTFMHNbeAZibPFUXyJTejGmSpRKQnWNRydqcBGaXoBeA8RbsrDy9vePE",
  "key5": "4A97fgnhw4WbLm5nhaqXge9jKxKg6mU26PRqbwCn7cJYLcajwvFokMGQPMfrLx3PyvsKmyyxy56JPkUk8CuKqBeY",
  "key6": "YX34DR1Rqn8WNR1jMs2jJ8TGuUbxN42Lu7AkqZDRR2Lu6g341HHPTWb4xrq8abqpjE8FSq7vPPRmL2idJdpCJ5L",
  "key7": "2vkbMMi1C2QZYhmFKdnyHue6hWaXfYzxW3uQrjfuGma9FnqyJivMECzvn1rQX8evQ5vuqGLzahqKVkKd7cv86NQZ",
  "key8": "2uC8APWmVpZ7xEfGjLRzfonLteW2AbGSTk1Ao4LpfZ4zhpocVCY3Hoa7xXhVF1z5VCFHmkZyfuxrLzoESKNeETXx",
  "key9": "xbCGoM3SB6yWB8kyfN1nWZo8RmZX9KjaGehuraeSzAjnKkEmCRgJbxUeX1uTWmsXG2Tz1HUTN3p62NrejJ6eXz6",
  "key10": "5BeGBeRFyek38fpiZw7CTKpjJJkiu9KDoqh7t5PrY7KDPdUtdQZgWAGCr3imJkkyoGPWUMpq5BPdKRidwo2KHyKp",
  "key11": "348Dg89b9ggJTLYKi8bckidTPxPcDCUWTHDQRv98c2FC8czWxbFn3ZuetseBrz6z4gKqby5F3U8iFqaq5SraoGC7",
  "key12": "3vyiwyW7SjcGgxx3SokKYKJRkBrnAQSaN4fDPc7dd66ioeBVs85XhjpxN9EffoqHKETj3k7LEP1d6ujpTXWCxQc4",
  "key13": "Mc7nkZSkpka74UfMJWckig1wuJHWBhrwiANhdCP4K5Bxe7qSPWJPtZHVHWW2BimdaGo1WTg7jZYv4NRC7Dfnm4e",
  "key14": "3d96pqYb4rJNCHvGGSG7q1WgggKLcfphK7QyAPCzTAuwuxrrt2ewSTe2t85JDwQbMyvbRS9pcM4LBBmLePsLWRs",
  "key15": "g7UZf6e485HJ7DowjrXEAH72hFbMXWzRZ5dmugJqDKHwY7FMKfX2mU2ELGiFNmSFcakSv2iejex7PCzQzQNY1KW",
  "key16": "aYJYZs4kn4d8mJwiUZGtBLgtZVqh2g3bdw69HAxz4Xq1cvQ5WnxgjtEfKm6rGqGeCfUmuqz2RkxSHb1BrAMmAmB",
  "key17": "4jeKLHbxwPCKZ2YDewCYK3sj8QLVWYiFJv4CxP5WeTvZ2wiaf2vAUghaH9epCnzUoenvkC2Qhra1Yv1Nrkg5MB6v",
  "key18": "5yVDAxC58saMDp89yfZV5SHr1QCwyq17JM3DNyfaRGsRQWGx3q8H538hoLwFNTVxKqTjb41p5pFtwDQnKCc1k5ou",
  "key19": "UWsK4D3xAjPmC1wmNzPeuNF1b5zG5ECRhfhWqGTh5DDDNJu6i9YtVaAzDtxzHEYiMSxRqP24oWmg1jXmVL1RYMk",
  "key20": "5y4BrjHt1CWCVZapbqer5q2AnySUz8N8jn5TCwfQW3gNFrbc4ykEjv3aNXF34BDZxddGMZ9JcA84JL91ZJKAuaxb",
  "key21": "42BPy358F6eKENbBdz7pFMYQcWiK8jQ9EVXQ9eSkRfN3NmY58dKHzNSTvzPcjM6hzfH8NFDR6Vu1Zny3SR1euQ8r",
  "key22": "4oNo6bBUhCYZzUqs9vpxmwj5asTVhnNqdFYecuZqce2csmK6B1QtsxdW4TVjV58ponMQjJDN7kzC4iDEi9AZ3CoV",
  "key23": "2ZfsZKkpdQ4BTJtwVMLkZCgpE9LKh6upuipqouXMkzCNVcF3BDYVmvPC72qdQkxN3uUXCEdXrNDgPBbNoAwvqMk2",
  "key24": "3DJJKhBuec3PS6ZyThYC218Yrf9qDRUGjKBx27ta5PmXVHcTpmAZAFbQPBbFuFTBJdPLwXFy5Nmn1b4EvsEACZGV",
  "key25": "2f6GGNZisocVzbyPWGu94ctMAkfUqRhzjmhHA5fge8QxgTg7DoCQMucsN6TrSkRNCfwvsCoTFhNqzCbVMt8Qrejv",
  "key26": "3QT5MyjypiiEzBM2veang7CxEXjY7Li3Erex7ZLU6GuqgDNNeWbNuBFaQcwfwXZ4k1Kkz6nvPsgBshCKwgmqrQEP",
  "key27": "2yba4kbUcpmxP72Xjp4NHdKBkR6H17wXs5GHDqCsDxmeQKdfsVXzP9ncJmAP1zKEenvKUgPjWFxdZbqS8Fmd1Ctk",
  "key28": "4EQjjfVxx7fBnSD2Sh34CRodReF5rhsBFZNzDTLwLDcgjDn7A8pMV7tvofVwMsXpDUDCf3FxpatTr19kSjWKxpBH",
  "key29": "3WnGZ6TLQRXGuU6naUCmjp7BgRiU2R3kpS4W1SzZt5XTQ9BxP7hgK8UM6rnJDuLWjtcVSjXtL4RHaUhPCVuuhogD",
  "key30": "qvZ2wrSTTtzorRkVgjwh6auh4ffvhPZp3aBhWorhJj37URL2vpaoDnefz4swTNaq284qtYpVxEpZ7CWK8arNCfY",
  "key31": "4ea1mzKLpu26tLDK5UdALzSJay8SgQUgwbNnFJKuHSGvk9PVV2hLt6to4tDQurDdShNvRPbEYbHh13pc5JSDVVv4",
  "key32": "2JBpKji3E9L3xh7jHzw7qyAUeVaTxbtbBr6RuqSzjHvA71MnqboSHwQgvoRSLDowKk7gm6kytdah25xDoMdK9g1Q",
  "key33": "3HNdPqz8Vk5oY1XHHJo1kj1fnEm4MjCJnrobJPAACuUx8SosJFWhTPPAKpgBUvGPDAr3XUSgXaHPrmALcsBn7v16",
  "key34": "2u8oEUdJGgpFmL6prVaqJp7iYrMFHGfnYRvb1Z7iJn4SDHx1X7VCJKY2skGgKKESwMPfXizwfFhXmRrD6LhfYwyu",
  "key35": "5n36fPcHxuTdede4Mtp6Q1V6udzKSgDdycApM4D3bdrvC9MRNXnWtVoX52rSpisw5pPNwQnj6uji5N5GTucJ8Ziu",
  "key36": "38DN7Mrp6ndnsFXuPkWkvogcLNPFAdd6WGSKk3rCP1owkyAxYa86RdNDH86CVSpKor2cxnjXqNtGjhwXU9JYqNDC"
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
