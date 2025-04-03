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
    "37NCoAXeLZ2QWMaRCCgWkWZdaNxm9FksjBaPCJKWjErKgN1x3tTgzWn7xuvGLpYgLJxtSG96LRob7wts5wSX7sZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kYYpibemzP2iqevc7GSpPtqcjDRWcgPgqJePpNPwzcP16Vz2mPEbfUMs3kDVoYiKFRoUky6DSEqpwMay6z4ZqVs",
  "key1": "5vqNRxmDsDbaLrSW4artK8rCAktKitNdszpMzK1rLXMWhmY8UdpF3Fx3ohZNKCfQiGsm7YG7cGA1FBLMQxRzBcbe",
  "key2": "4pb8sQuqJrPfXZC7zF8um5fSG3frSqdiaJQCWcaDBnd7qezGQbjBufD8YA1SQWnx3d1gCr6ZC3sfxcq31SVZpfPC",
  "key3": "3xkjECU8GHZWLTzDyi5BaLFbojqUTbU8TGP3qoA9denagmi8LofMDydHLFyT1uXKr7X2SdpyUNA1kZ2UyR6q5ssD",
  "key4": "5oiuVTNxXk6HcvHx6QuTpvYLZH1cJGf18Jspj6fMoEq5EZVZqKeaAknyRAKVivykq4g2EbvfySGSzuWfoHqTyZt2",
  "key5": "5VGVMG1maZ8xhKpnidRi9GtNBKddrFNMXZzbnUNqQ47Ux4UhJ5ZXsK69MGGyQCnzgyNB7Wj6sNYsYevQ6qHHnn7o",
  "key6": "4w1JxY1TdM69rxMggJhdTqfaUCFK9cT6ow3kxZJKMsU9zHdY9rpjQb2RsTndaj6iA99bD22LRehnokeYoyXqHVfD",
  "key7": "2pHWt4rZ4idWJNJL4vMD1Ycz4XzQ4SbCD8Sr5bwrg1WQS47ikRvqg4PTtgT5j9KyQN4bDcB7q4o5He2Gg3RuydAi",
  "key8": "sxgp6ddBTGvuEHqLY46SCvUFpgcAu6Yd4shXKuRQhbGSD8cPNA68G5touw6GEy9G2kzZJMEQncFNSYRZ1GZYa66",
  "key9": "4sAC53nipp8HLcjbgucFizPaNX15dx2wkhYp4zYuQYmPu1QjjwSz8wFZBqGjwH4qURpZGQiHbLD6hts4TLjdLh1E",
  "key10": "3heh8agmceNFu38Xey8e5Tqj5zPZoyT48racBkgfbTrMGSX28HCNif3RtTm6v1dbixWEKwsQu3xAQkwfaDH6ydYn",
  "key11": "5WrHkiKe9CQhksNA6Ux1WYz8Kq7KguCXX3819fTHcPo7WS5ZvFm7KvFRJviE6g6iqJrgTitXVY59mEFfPdNJLjS2",
  "key12": "4ZKggaVosotZhmojDKqTzrmmTNgUGt8kiJbvP7ES3T5xDHqJLunCHkVgbpqou26464G4XCNpHG8aeHo2Wttk6q5Y",
  "key13": "2xHC7yxhFRN9vGCXGLCaTefN3m7ikwv4W1nh2BcAiPxEQGyZL6HyL8Z1paeM8etK1EpuiDc6y6bnozBZ2GRM7VkG",
  "key14": "34cX6tiY56qGhDnNAHEV6inEr4WHWJsozym1X28qnPZW3AEZuS244waKjvDLLVjjMFWuges8DYCfmQS3W3oRN4uG",
  "key15": "2kexXmDhYg6q5NwivBK33hXyjVdAPv132M21ovzBLMuUXjd49MbJyqE64C7WUzYPs5DdSmUy7QpLsBJquniscirg",
  "key16": "4uFsnRjmDCv44HM9t9o9mcSQeCfCPz2EDL6dVFuoBDeUVx3qdubYpErXWhbLvPgUTSQVNqc3sfmC6Hn589pvfGf5",
  "key17": "2TtkZM3uVhDjDc3yo19zxDn91o7bm4oUYUyWjUrZMahxkMMNKf8HPSa6qDXLFQqbU54zyV921REZXE3ucbN1qgVS",
  "key18": "52YmZNtVsAVARHQ7ZHfdUewP3JtNXQiDcx3X8sYnAFDBQGzEmehhgirTchjzAMPoeTt2P9obPBivf5qnvaTBNg6t",
  "key19": "4YzkpGPjwSW8HNFL6Sr5pVbtCVWbKMdpGcEmR3cV5uKdFaY2RoYgksR7GurcWpd75gW9LUchtbY7ofe3PQyvZwts",
  "key20": "3oZotmuAk7SzHEVSPC1brTbojvkkjT3xfTaMtnafkMZu15X8iiP2V4tNc1qocnsQDUxi1h4qyNbE33DSiavntZ2W",
  "key21": "64C3VYC9CofPJELuc2BRvjwp7rCuXhQaJnHNWqNB65P3pDR2N9CjaSraXtYeFwnbN4mX4bNGqq494TnQ7yACkdr3",
  "key22": "5qdmp1pWUL2gyTMigLCeNeayeXHHMvTJj2qCDT4vM5vKXqjigjCVe8RMAobAd4xH9JaKTbiVF1udcborSRbm7BbW",
  "key23": "2CzJykZ35kuT7kGQkjg9v6BrGXxinTDZ21RVbiujsAHQ3Nqiot8MTTm2FdFDqzNTnk7mUFr7BAkPui38ki3AVMzj",
  "key24": "2PtAtPYLhySiFB8rtTgcwBPMPKyRgR5BXgBnZRLB1r5TBpZfwWjQXKZwK76wABChuMWAuCNBLq2HaVwr5JGQDEPC",
  "key25": "44RvseiaveZG8qmEXmNM2ikEvja5t7jRLDNPEA321SXScoyTzDfBqiAnu2cnfEfy5ocX5tZW8Fhkx55J2cNE8oMD",
  "key26": "5KkfX3167pKZMNCMLgC4RAExkfaQdeD3HraVtKf2xvjpKJvsaW42QctT8tZhw4PLHvSGKFvgVL2B7cHzQngH5ND1",
  "key27": "5fwMMjfePin7pAi7pNvAR1EC1wMDqCiLfL1AER9Ratn6WEXxDKbF3xquDzaBfk7U84y4JdyKSziVJCaK9JqjPTXw",
  "key28": "pDSsFzDBBJHihgjrH6UhBwMVdk7JtEiZnPjMQBLKizp1eYoXA2RktM4iSxajzV8CqUpSVFqL6x1R8e2rPsewQa6",
  "key29": "2Jrtst3LbabcD3fJGW5Yf1SQsFShAj7tTtkhiD6QXmXkCkBaWTaQqsBTQEwaZs6noBNy5wy1K4hPnHmALJPnDBDs",
  "key30": "4fG2TTkQm8ehSHLHEj4HnyTYApTjmZudsenuinrBHBrPSPZbYJJCeXDx6QhPHn3k1d3naVfFug3xN7RDJm7BrH2H",
  "key31": "5fquLgLoCAzwvjXMCY8RkRABDqtwpURcUPCb3KsP2z1mcRsRgjiMfU66QMNHLjAosftUhYbZKnAaazch2cuxdiPq",
  "key32": "361mzwzo6U7RBs3TcnZegv79As3Ss6an8wnkdcXL3AkZbEQ63QLy529Ps8mpVDcnuugYptvbK4Aoh2pR1d2RY6Bz",
  "key33": "2XMJCPJ6YuM1rz55XWJjP3KK9NEwKPq39VcHviiNFHWpskkYKJooxqgjzoAVyZw8uL1YwRHQMwjL74E1hTz2agYY",
  "key34": "4xvFcjQk6xkkaRbrdrbdBv79Tpdub3YUQQGtyW9AQMidKrnaA3W4PbqMo8wmgVRHW2dJ1xGHykZPB7k9DV39wrmE",
  "key35": "st4q9z1eetHk45ZD1q2UMhqa6u4GmCrTMDLeM71xqDpfv9NY6MC6eXPzLUUZubRY9cZERWHcSmhxdG7szs55mik",
  "key36": "mzZGfLTExQjQgzCyxkzumqfdnNhgrCwSM8bX7E7j98DzFLvF5QAJJ4ihHrVZXm6JocEKpWkVRzWpAog9YZpeStu",
  "key37": "2MpJzJU5SWspHKdV1agAGn2ZsLTKfLfwpgGTnyqQL4zrxbWgozvHRJXcBZhbQhDHF5xn2gFBwi9fEL5dZjHQ8bHb",
  "key38": "VLc5DaLXHqMcAGbCzR2EL1RkjMqdAjcN5S8PdYRtCZW6FyPmjtJXECkha93Hh5rWf3XWZuubrgdQK7Rx1b3naux"
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
