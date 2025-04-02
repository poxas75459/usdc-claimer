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
    "zwsjrkGznySzFge5m3HsPXfebar9oNQKhgfRe9hgL4HDLdTK6m8N4MBxMDPjUfgZFRkmVaHSdeCQevsSyFVEw5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ZgmxbSGbGV4codcGvKcYsJAB2gAir9PebMU11RQV6aTouWZAK3bw4zHxKuvNLr2g6C3Mf11DrtJXax9S7BAoWP",
  "key1": "65mvqrRbopTUajHecNMqbqckNqQPBHyEGsv5BXA5eT7JijLuWuJWhUxuU7kfd76tGBE2dr5boEzePTexwZGmkUdW",
  "key2": "3JxN8vhF9Vwy7Vt7QDumxajYX9oHRyFeKXBnDi12SRAsGBC7vsbswrwHZVw4UJUbZmLPYw4C7ESCr28qYACtsabP",
  "key3": "QwE9sm8ewwa1A4jc9AjkeuVwL3sv5EWN4nWVUVRi9Exsp62CXr2fHXQN558KC2DmU13HSahDqQNySy1ewkW5whh",
  "key4": "5TN3Q4MxV112Cr1AGitGQJ9LUqduirRDCHjrFDgJQmFQHrmqfB2EwP81NnbHEQkgxjxsyAZKtGrVtK6EuSJVk1cZ",
  "key5": "2tdXhTrdQ5M1CbkMGJFL6pf24bAKV3y9b8rUYeCQ2s2h77N2FLX5ZfEwwVuFhYETQb4NxG4rkt936zzB67aQkfdw",
  "key6": "XAw4sf2bx2YKsMFBnuriFji4kUeDuX5vVgZimLrbBPAgsQBZcsq1WBVUQWESgoeKPAoTxDWq5zJhsFxW8TFkuzF",
  "key7": "37k7AWrKMsAVMNSqARw67dA3SGQod7D1CnUBvU1DDsmNff3VCZYEGBYbqEzwuMcyvYmHBBAkwidNYZS8pdQUetsu",
  "key8": "24pCmyJnqjpJoSMnMa7sfbPC2q3bRs3Bck2SMhmWVT8CKygX8EVBXbTkZaDRCkGWjzATCYFnJzJLbqfVJ6AcxKMB",
  "key9": "jh5mNqV9ixFwvJgqYot7HHN1TynqQFu6xtXC5o5P8DkXvh7iDkjL14ScxQ7kWZvwhogbH1eumLpH91ZKsZrL5FJ",
  "key10": "LRF2MtQZTxjfkXgaWWPfm985CSUEvQebAtocFAck7k5QuT84KGefFoAHnfm69BY827SAJW2gKoV9wf3hwnfPW25",
  "key11": "3DHFQwu4qsKgteB7iTEt2LegRt7aWRbuwaeTpVafSRdSqC5KcqgjPrGypHWRomtjdJ6GjjYkNKtzrxt9zEoBt59b",
  "key12": "BMV9TGh2uMW6SU4rBhtMVEBmwTJxrZ4hMvtzEMTq3giR758QHMgm1VGcukENwNJeY8T1TinMX9HkMUnBoMK4YCQ",
  "key13": "3fn1diaSmNch7PuesZVpCWneRdq8uS3HFAr73gW2148untR4VveCkv69szYaHegiqTNr2AMDjK2HaYvzWmb8jtKN",
  "key14": "nJ8255b1G9PABoL7NPb8FrPkwqrrYsmLz2qksyCPctyyRAPhTR756Q8NHt1bURaonfhcWvfUg4VxFUtLknd8Hug",
  "key15": "2uZDj421nRDV62zyzBtHpGrb7qdoKxs49fyAQdSJvFJCNk331G9VZ8VFKyPjUUoohViZKB8mJE5dwpka5ruW9aMp",
  "key16": "2SgfRWsoSL5eLhbkG99GBBTw2U1mGAZ34g5oPcG7EY2DC6J6mdCC1PbH5rGMXgwyP9cpcAVFc2DFL5NUsp8D9Aem",
  "key17": "nLhnyAJ1LLMVbg7oYhSeSR7K1WBntxMvhSkA159heTxBWhsxgYwCLjwEZVtmoJD4t1RsLMz2CMBq9vtisKj9DJC",
  "key18": "43g2pqSDyKAERs17ufuhyjdKxG5NF3hpDeiEZheqnDLwAKDHirrUU3YZ7p3VQRxJXyLwVrSrbrok9aNUCSCa9CWj",
  "key19": "3yfzspe6jgFAVEdw9bg2N9XvY36TXeCuvUW552ssMGzdNsQA6NcP5TW5UPA21poJ9CUoZ9LBiHtXiXa7NczN2bF7",
  "key20": "5dDBWj3uTW3EVg1bFz9ZRUhkDDNEYRp7TdtY3U1Rhe72rkaCUMDA5XTcty1aYqSJzjmwxFy6upU2Yjb2dmBNFKmS",
  "key21": "4UcNU4j1Gcs8qc46gUKeDo7CkFmwfq2CZfjxw7wLZoKcAcTqo7gzia7z3v4tdcUupE5rCKUvwJW9pCPWzafTmL1M",
  "key22": "4a43GFy7stxkyL3euUVwPtUPKxuJhXxPzWV3efksqgPyuy6FR1Bgyjph1d1F6Dkit3LzghX6RXUk5uhGXmvgyGog",
  "key23": "3cbxgxkvAoMSNAN1h8435tpZ4n3Qcc7KYmUU2mFRuDgxQUFGeYRX6fwsybrobYvERtNdU2hrL7zwXnR6jNP5oz7j",
  "key24": "46XZ1NQTrEkp3erPatpk5ATU6dhZDsZriPQdE1pDXjZaQhXqzTBY2GSHYdYaepboQde5aEVYQadJLtaxzxYzn7TY",
  "key25": "5urRFs3kuJGWjBF5hNuGuD6d6C2xJSGv7ZmbRZadeWUSExsn2bEfxGxumYrg6WmhnDuEmZ2Jxmp49WLj8DW75E1G",
  "key26": "2rLeXbNNDxFMMJ7hBn94AeSYGWap2zZthFr4m5dbHFVZ16qJUhVJSJg2Ab5UwJwyMdt6tTuzKuEKqYAgWh2H7WwK",
  "key27": "4t5YPxBVpr4yyCeUNk6k849LmvR92rFqeZNbaKViuZT7SXizaVGG43zB3fbSby1zXSN1EnbPHPw6jLjtWR3KVb5N",
  "key28": "2kCFLC8ioezT2tAwJp7gekuuSqN5srF646ai2PLj8yfLHRkKPUKLMGkB4W6D9XiCsbZ9yAiJxKsLqbq1CnCTqLuU",
  "key29": "5PoRN1suJ2VaXUGeNV69BQLbPm2Wgx84MoKCvBiHugtd9i5dZ1zJdtzbTkQS2rqoVk5ZRpTXPBdHS4dggJLpp7XW",
  "key30": "9e1K3cKLNscoubktB95iBEKkGCBWwjQq4mdBEP9QFok13o95o1Css4B9snwA8hQ3yuDT9wDQfivv72vc88T63EB",
  "key31": "2etahYZ1ZUy1v5mUkWrZ8MQvtUYCY3o6izWooAvz92gM5f1CTkKHcPWRCSi19xExTLdS6LBHaLqYfKWsi2pk4YJR",
  "key32": "5edQJ33YeV8FKyp92SXErHbXT5P8ozzWdxpLUHJ7CocFAXvCm2vHQHpxEJKLY2nggKVtFELdKXWcNAZGe7HWKLvW",
  "key33": "2xS5DbZp7WnZaYM61yj6RDnUrHtjZMze96hs3nbptANQEX6ToQz314jaGcbs7TTZyNcPn2KPiahrLtH3nxZ4C9x6",
  "key34": "4tZe7Uxiw1S8hKpmNBY4jNoJom9Yqv9zuwrfupv8JX6LGyVMzrFaFeCZYpUmtFei88Z1tjxkKQXheiHneVbg3eq3",
  "key35": "2dCSQyxnbocLysTN8fqqQLWE8T8dHcAtamyJM25XLKVESrdrrSrbipBrnp8yKPiwzTgmt1JsZT8zpM4V6N3ZbpPL",
  "key36": "4DsZQ4rEuNLg9Bx7rWGMKAkiLUp7ZpA86hSicib7ZEFwbsX7N3An8pHMC5RFgGBasjzk9gkCM2k9y2KeRMLvfdWy",
  "key37": "4XvXbWEdyd2R2ze5wcxhn9oLvV5D15zUg6ribAxbKWoTv7ieHK9GdGoBgg4v5UvWDac4VSAAAirnqySgUbHVsMd4"
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
