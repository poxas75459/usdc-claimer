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
    "5McukFTnDr9xrML8Sf74rTEdrPMGG9hsy8YsHrmzfgDx8DAQEdW9jBGwo3RkiwaLuJQrJxbi91rqC8Vv6E3qB9vb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jepwVjiGejHpdBZCYJuN2j8TzkZTMPiiqGJLbMGS2DJRLxzzdihcx9haH2MZ4Kn2MABGvZSpJ6xn7R5feHaPuYz",
  "key1": "3J5LzPVwwhmC2wnoLqhiTBdhBxe6RjVHvo2u8yQxWfQNo5VkY3Ak9rXUMHbF2bH6fc8v2WUGxNf7J6QaQLVhUag2",
  "key2": "ZNw1k5u6uaPdCuj4JJXUJxSotL1ExYQskhkGF96hS2p4sHRQQqF9vNs8v79MNnEj4KTbDYthfzpRrHhN2mPgxCp",
  "key3": "3bHkTDL3i2yuAtgGUqvZoktrLqWMEsQsDd7kXxyt2ehA4W37xTW8J6FQmdpMwt6LZmpmkAv3nUJN2vE298tTk12P",
  "key4": "5ELTyLKQvAhWfqjubcsmTWeFUDCW1y5Y713wHU7psSRj6eTskhNBV1h5B2a9xob4D3ka3eL8ZmSFcvCX3iVHrefP",
  "key5": "WDvzZEbuCZ3UDMusRY1RRdBtV3GUHxoYjMCJr27DZmaPXgMVVgPENcWx6jXsaHuWzKU7x2CXVZfRfTxxPrSaCwK",
  "key6": "32tXoUMuxfYEFgiep9QzqLrzyXEyFnb8vP9kCXVeBec6Ua2YRLTGr87GboeT9Fhs1uKzZ5cnk3jtUvi8Qr75gAw2",
  "key7": "2fHRtEjxmAbhU7A3Fz75vZGmjRc149KxMMmnkCWkFUtWNUqTzfHXV712A9hEpT7gw7suu6khpRuEFGk4p1xm4C56",
  "key8": "2RgmfcS38DRZr2BsuvftFZevxZEJjyy9tBpdnBW2cxXDUGRN8mDA3R3K4guoATKit4A8CVsqcxxZCo1zv5H85nkB",
  "key9": "4bAufXJYRZFy1YcdNWtevPvpbRV8kVVpLwUCceM2ArjThV8QryaaSffrogQAwTbQczMARgtX9VG7bHgk42exQ8m3",
  "key10": "4vmCHdZ61ovf69hmWCaMnJDA9dQRMdjkPp9mNzwCYFNXMnuj8a74NgwPooLyPXDBny3tkVKq3KQEwstV7wUySyYc",
  "key11": "49DNHvqmWp8dWbmB2pRo3bM2eze3pwpT1AJDbGxMU7J4YBy826K7ofNxPkLgdkpuwQq4H4Ck8zg11dPoWFdHFfTN",
  "key12": "2jGk71rdFkxCJjbAaEGKpCSbEdrZtto1rAiXW77WQgQgg9Lv4dzsgUMDqr5r7hgxTpZyoMuaUB2y3kVG9MUzseFa",
  "key13": "4kJZxM8xYKxdqPw9Kj7yxZrWegQSJyvosEu74h6cs68LScspsopsVo8iEbPdpf8SXhkg636vKPsMMcUqDA2uFCiY",
  "key14": "58rMjRCYTscDshXAXLnWKv1fAc3du12eQhzvEuc5dSkEBH8cqGceGRA69esww6up6xrbNsi95u3vR5d2EAwq3Ubc",
  "key15": "383UEwG75N97vSTLw2U1FsKcNvZ1dy7CoXL6PtjDK2oSLbPCMmXipjm5JrAqZNCy7YQmHrvYm7KGqUgjmxPNVkaT",
  "key16": "3sNEYBPVcX7PQiwxMSni38DZw4P9FxebUNHKVgkutXvnQZjWvTKEoLBidhMyhacwELcE7PgZh9uYRyajYvFH5HW4",
  "key17": "3kfci3GUdw7CaSGzamjVyVWhCY9yC6PPzhDUgMF3wzZCaXzkAUBC4qGB5u852W3noFzCPj9aN7g9EGa9UEJbhQQv",
  "key18": "Z7DzS9WeYcNqJy9QXX7dQbk6QDaGPJv3V5D9QJXJxsmZVPangeovonv4qyz6i9v8ff6Sa4NRPfn9rH44wJHja31",
  "key19": "5ocaLgRuPKkzpcZMWDYdo825EsW3fmwdAVeCs9DC5bG41LiurQxiNhAraYnkVa5peZCG2xaYaATDYTSvSJmNVhnV",
  "key20": "KHSE5SWvQkMnQnNSrLmhLDUj693NnfvmcfHiyCdrxpTHEvMpkGkwbAacwkmYZg4h4U8gkNNSS4YLMx6mz5NbGBb",
  "key21": "3p48XP5iaukMi65VES9ekxAPJ4R9qToYbvEzioNNCJGhqzpsQNkTwYFe6DkinioaB4vDSVvy8SVAyXwGLtNo1dGB",
  "key22": "25pv7ZxEtwU4XeYPz6PfohrNojBY4sPTz8raNukZLUuYAx3AtzydnWSiHpoAsL87ceW4XVfWhAsq6XHDNLySNQQm",
  "key23": "4fQ9UhcEHnops1qejcHbshd2uip979pK8YGvPDUTvdBUm5ZTJ3ZwNEKVtSya1z1irkqPN9gQz6zmDUZ1aAHMkUQB",
  "key24": "219G41JXMvMqdXht6izECEuzCVDzoYiq9RUeQ2oH87dP3UaVjZGKoRBttsCXTXe8qWdRYuDwZ2dVmkwp4K4t84mP",
  "key25": "p4UFqpiVz6k7epbVdsXqXAju21GbY6sX3nkaT94iJKKxF2VD4p6C54CKqDUYb9PsJbPWCc3xvTYoYwWoUeQ3rDt",
  "key26": "5Sqi9QxbwDCyMf3L6My3mvLfub7zk5hicvGrvd94CJRTwzJk99Lnx9Y8qgTWXS3KPfYxdkm44iVCKYvanL5qbPAt",
  "key27": "3kcu8PVRamvC8BpVsXEYUZ9SE4XxEQuzGiDAgpSWkUb516n9w8ysyfkhNkUMFV1PxY7Vact7ZY3agFjREAbP1tuV",
  "key28": "h2EFqot15wVU1oSiwqTc3nfLXi8rw3oRfqg22ZYwbN1ntaHVQ3BEBEfWvKqaSEZXy4rgiDZ1mrMcGhQMmXAtxJR",
  "key29": "2Z7F8sqi8SheQ9qfx5ods8So8ix8ZAcToofLPre3ykuYwu4dMyctpNzS8kKcG4ePZpkZp4cpNNzmRGTGPkV6edJo",
  "key30": "u1vyf4GSi4db97uDaUB8pRGFxmbxn3S5YrgRy8AMRjkcp15nfXVkKFaXYWw8QtCMbVv1gkqAFSZawhogCMMvsAf",
  "key31": "3wDsvnMHegSeexm2rbXUMSsyCXSDbXhsvCFvWrJtW9diS4GvYUJqvjLisQQJe9BGZGmyoc9bGVW21e2N2SJsr6bZ",
  "key32": "21ZyiiGBwQ6Hs8FjFxVStSwkkvFYxDXq9qUnCELRZJS3Z7HZpgM1yDZXmFi7VZBC6E2gbwUFBc5GXZzJxpoTgRxV",
  "key33": "5J8P7TL9QN5EB7ANkq5vYRvEmZcAcBhVf7HiJENMC7mtT6TKDxzwrUTEe91S5V82ghvqYhvbwLmDq4ZwtUBhfmSJ",
  "key34": "3rNscG4CFJbVW1wmYvfMMdmcTWJm1P88gxz5UxJDMec9VpvpwXb21FzmnsoMBo6nVwPPfzfwG7fLgMTzbamaGVYY",
  "key35": "4PLt6wp9e9ZiHT5UzsTSEUfjuwvioRv71da7SNtJVBPG1DBpjKrwHUBxVxEjGk5wafUjpx5apMhguosRTxyy1ZsA",
  "key36": "3HTk8UnsUZPMNAJgxPa4Cg6vkmKqCBgs86eDPnoPjivXMXmKA7qQuBZ4MYatact5hicC85t7EyhfkCKu69mgmUVh",
  "key37": "4TqkpKGuoJRbYWn3spLDMC9bZcDVc7HSsySghyrkt87G9a2SX1rWUMdncWkcsqsFdnWgLvsCER9AMrZdZRftGKkx",
  "key38": "3gg6Cq1nbSN2YJkHSBQj2GkQDCjPVNShSowQ1XmiPrVSc4o9czWiWAj8b7moHm7uphq42xinPH2Vqk7X2UnaJgkb",
  "key39": "4WjGsLdJDSdPq8MVmE5Ce4r2BcrGC7s1xepLxDu6mNepPARQfvy2E3DJ4gcYhhtqvxXTrtR85nFbK36vb8HXNFVr",
  "key40": "5Qw8DVdBeXVTmGABQygK9kKsV4zr3Xoq5xBWpGxR876EHKUCyS5T22DzrTSZhs9SC1erFHzcsc1tmsdN6DrpMZ7c"
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
