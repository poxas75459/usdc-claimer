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
    "BaWEBFq2zbdEXmsooZ1X9NmMRj5KFTnauyfDE1KyJKPLRch4649m3wpw4sVZvPoNkPV5gYokuZerGZi6gFWTM3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uaSd1ygt6oPf1uk3AARcXWStLpgMgC167EBb1jTTQ4oefXtGPuatxDtAy24okYzCaJFj9NQgWywzFMVbLoBQbrX",
  "key1": "4hPbozT6USJBr1XUpgDvo7MXfSk2YV2KFMKs827RwWoTJawrKBYy9D5TJnWx2SDGxo3rG1io382HoY793F6uzCqz",
  "key2": "3ujqxUKSZdz3VNtE5NqrHhdxhYye3AN32zhXRQHYoNEzpLUgw6kv6s8196fLwPvn2dh8qwxdnxKwQeursY1VtPVQ",
  "key3": "4jGYcA4SFEu9Tq8JpBKDeg9Xm5HPoFdBstCEkf5EJzHjRuaTLJkNEd2DiosxtwL8g26nLfGBEVu6zZTu4Y8hKUjT",
  "key4": "2rhbd7AxEJPNsRZ9hACDUhQEabonYUHE16JxcoAuuHuepQkk16XdGosqWRtVbsKhcUtCew9Ew466D9uzTLTVcHY4",
  "key5": "5F6DNTqGikcmqzRqD4Kjz1SVwzsRxtWPaKXX2Hnpj1UQdbuaoAF7QEXjHk6P7cKw8k1PYQEkW6ACUGtiuc6oLXQk",
  "key6": "1XpcKMRDZqfEezDTMu1kd1bjfXPJ1M5QxUUVCJa19g11zxmCfgnBMTuWGyk2izZHs5ErWhB8Da3HGg4aPLTiQsL",
  "key7": "2qGvMM1oXE4YMkVEQEXnMGgTBNfWMS1cGHxaTfUgaT6RzNZKpjfHPE2J6FbqRdUxH3uwRbBXuRJ2d1yxobtPcVr6",
  "key8": "5Guzhc8kmGyKtFwYR59crxcgDX8a7DM4nbqhakfEyJgJuyqkfqsGTLbA4yRbhwGmxM3BmCC1W7dpBE5TPf7NVxxK",
  "key9": "3xfgiPUbSWwjsrLA5kAtYEPtjWk7T3cXzuN9pR4HViS12wZEVMANsmD4ozGtfmo1i79UUc4qXWYhaE54CU9e187n",
  "key10": "63ctaxBFfp6VA54XvyLyokjirni7GC3xQA3A3bdLW9QPRHASbrvxc4Mjp1ba8n3rcDaxvuwfKKSy2mQqmVwHvDi7",
  "key11": "2QJxXUamu8thcfJYPnb2DipLmQr9ZbNEsJrGZUtE6vcju2KSHdUDNfWjVkrd52Th1gEQJCVNEE82dJkxr8oeuQTs",
  "key12": "5WuxzxoWw1ak6tZW5GzmwDhGR7YJ6kv93w16qx8CgTUiANTYW5tecFeQA71xAqKnk9D8pmCRtWpqTDF3Le5J4Ruh",
  "key13": "2quRpMXecxmcDLQfAktS29c7WugjRZbiuuN5ExW5FfVxi3Ns1cE7gZdG1wpo3GixMhW5bHPtEm8SDfnBryEywT9H",
  "key14": "3TN1rcUtxmUjbrKWcmyZapBbVsgffHACopPf1MjnVn59iu2MTSEyeKZaoi2iiTBWMoAfiJ9RK8WL71u8cBuK1RGM",
  "key15": "5VzVdiopz1UNotbzvbApTBee59ogViWSscFGfVRHcy4A8xNabhhBTkBsUmypiZFnLPDR5he5k5BTgzg4SUzriNMw",
  "key16": "2qouA5b7SLT9VmGJEf9CiXGScXsqJV2ZTCjhpgRyr641GX2ycmMNtJKTpncYsoex1b9dcmT5rgNhZdpXH8ZKMJCo",
  "key17": "5SqW9B6CRvu6dNR2PbSUMC3DSUNpZ353bzPauy3jkvjtbufivaK1UQs9iUNYD7xFDcz8n8yT6EHeW7jreqfUDShM",
  "key18": "4weU4jhKqZ2UhAa4wWMeMfbbWzkES7NKj3cGD8vS6Dv6S6Rhh23EnzxaHqNUm3PYQpZaDqgZ7H2M9LKgiY2gm27w",
  "key19": "k3D3YMdH2AbaPaqW1qKPCMTJhEFhN2srSabdA5Tw41K9ELFghXDtfq4845waZHzhLsUg7xKFtwsxgmiSxYWEYad",
  "key20": "3gL8Ki8UcwmqAo7tW1ENxVPCADkBTBjPhkv8JRPcJNPHvKL8JnKsfQb4P96vtNts5SU2FFGbA8vZR7v2utUVbEGP",
  "key21": "ndBoebXMpgJeHFyuwrnAoAcYFZYp21kRNBXVp7tBRY7fi2XWUFYAE6UfVtfZhgLJLvQABrhXyEryEcbgjZ4Xq1i",
  "key22": "2SBvxe1j3bPwfAo2vmL4KowXHGCwH2wV8JALXYLVouMprL9F9n4a5XjxCQVBF9V5iYJ3wSZTbK5AVqE3taFRAo1x",
  "key23": "53YUBxXQcTecBih7owzJ7ZE8V47wmyw8wojGqK4nZc2bksrpux1MLEadEwuHM1cGVk45qhmMTSLvMaak2GkrXGmN",
  "key24": "5rdfZ1cwX2jSAFdDuxqBdK8iUaHbqZdTNmxSwUEcXZDGTCCzuznFDJXULoA82rob8MZzbwAYkxukmwfh86SZSLjH",
  "key25": "A4qCsFkZGBSziJsUzN6HG4YbzakDDwSVFXg9qeLMVXS34DDVQWHhaTXd6L4u3HBfif4H2PHtQA1hMPqgwAbgvQH",
  "key26": "66Wpv7fq7VBQqXrqFzmj8Dm3Y2Ai3zFqusgmDVM99rbkWVQqMeDb2kW9E7hnxrGJqpdnyMKTH8HMAcRoyVrJoRXX",
  "key27": "Pkc6QVczETndUiHdy3EPJjjrzarxLT8Ed8s3UqpFP6NPRThAbzJR6BZTQ3X7Fywzb5kko8QNqFpB7pMLd6e3mC4",
  "key28": "BkUSJBvZghVoRbpQoa6SKAEf1C49xthCFNRZk6M21pHYZWzRssXxpjLiu4vUJtdeMizoMQ9R8jvPc1gvJZRYgc3",
  "key29": "5NND7Zw257rQ9ZHB8hpSMdqYfiMGvkvfRnRiJBiChN2NhzdhgurFjtNDQ5RiUmAMgXUeC24JFHf2oPJcVJpWZW5h",
  "key30": "3pX9PpbvmQ4VV4WgYRo2Tymb8mJLA7kWF5mEzStuHMgumXQBkftNJRXDttspE8GzUfbMhX1oFQ7d2v36qYtbAJRf",
  "key31": "2C76ALdmyEaG27KrpgRmKgwwrMW6G9p73RhEU2adj1KPDZAk1ZoWbuue2jUPrSjygjdkma2aDJb4gBozQPrr5LPv",
  "key32": "vu23fQ1TSyY3mD11W1eA6iDVw14CvEneRMQr3xcVzB4L2QQkwgjFUjbF6EN4n11sxYcy3LzE2pHW3zKGoXMTJi7",
  "key33": "2simnE4WFuEwgzxKcvfiF4P6KXNxiYgBcfnN7y8tSHQkPbkCv4t4uZTDn29gjJcFUx7Vrh1C1kCQxiTKk4zqb4WT",
  "key34": "tW6QWuWzjP3u7WP4apuxpQBqrRiSdjHiLX6vmT8dgbLoUQjeB2YoaGujyAqdFuhLD4aJha3mLshxtdTSxZBEQbt",
  "key35": "XjBQ3qmnM7WevTDwzpM7S84UzctMvhpMbhKx8xU6Cy2WEXDAL7PA2K3bqAtK2dkm5M6fBnWhUsvcYoB8Rh2Xqj5",
  "key36": "5WmgRDRU6LdVb7qdZwD9Sgk7CDL5Hgz3PaUFWgNwhZBUCM9ptXsJP426W2R8jW84WirBrUdCZXwWpRvGUDSwpT8C",
  "key37": "gD5eUqcSb6rdN8ebhTr7KB73aZTB2BUYdbEH4CeH9JHf7aSdXqzUex7pi1mnopNCWGfd2wJNGkn1VmpbSxMN7mQ",
  "key38": "5b8cW2sMFFMThT7MUKNPcJMtQ3pDdS6ekZX97NCBiwyyHFZ2UBGs2YcZxzcj4Zj46mvLK1brq8Rt5JYzueS5RaLz",
  "key39": "4y6kE3QsQ5WPP8FcDfaRWmMaU6mkoExRQuW66eUZWExMErsjifzHsqjDZeEbKm7QoZJLYsuqpRcGqKJZq9b2LwnD",
  "key40": "4kgpUtgwDSw6YpiCxeZ366cHVwM8AJECw2Atzyq7At88sVuyzkhvEuTCJvJf3eNSSMftz2VUjdSZzuadn2agSQuq",
  "key41": "3DcCBXgnGN2rB3REs8H2PQCVyYc6p2yzfVyd4XpteHzAcpmd3dakCNyBH5fDyfX1zPs44NWCwsHfcGeHrY1QLjzp",
  "key42": "66EaFpHLzRDAehmxVzjFsmx9jjkJ8V8P6FaEDwBQWsPL7HkbZUhiCgznCLLKGNKG4S9hdZhDkNz9Qfwd9TT5xeiK"
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
