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
    "5DbxNMtp4vDEqGtzK5SHfA8Ggb668u4fg98Y72yukbFCzsDYg5JmoBohhW6fgfdQExWnea3v48cAQtZb4vJtMUBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oZu4ewCVyEshCsALA3s9kL44vZ9U7o5nDaEAq8RwrVLcq58hjnGXhRmvt1F8ZzLMCxzuzSdrX2aZsJNEXxTSje2",
  "key1": "BfyZypVUbExxTwJ6nLyF6kfcRJU9ZjipDaWX7up48pxVdBvTL6SxqcQ2dPtvTxXdoGqhUMqmsXxuPAnovrbTrUc",
  "key2": "uyPjM3zpHt3fTYsQWJ5YmG8i8qRxWrpcyHagf8JGYekFPVnJuvBKshJSYZJZxXDWkLobDuRND7UyXXtZwBkwfEq",
  "key3": "5XaiioNeTrj4KNhcnphAZca7MLPR6AwK1NhHUTyzk34MDcgBw3yGhpGx9vnvouc99PXv2JTtFjjzcTRunJnm1ZSW",
  "key4": "4p2QmWUzmvW1MFvWinkt7SegLh8WByKaXUj97FL9FXWNvRXzvwV9auFVrLrDmwfD2P2npDFKFAb3egyuMi7BP4z3",
  "key5": "37yfHNzmKPJwsRQYzLzAkeSJmjdspXMAoT8xoAhEvCb22GGSM3v6BAr2TgUBKKSUvMfzDtNXfDE8TEW9Qhrjkm4P",
  "key6": "2LGMwrUGgsvzBtJKhy1MhAkappf4JT8zybY5WDQv2hfp95F2JC1QHtpX7ZV1QFVkyHjg1XEkPMUbp4art2w2FUXK",
  "key7": "Gcth7Jy6827sTozfUMEsEhputCXajr77XhYkZ5w55M6fg6dKBHrxYiU7KwTQ6heUTf2kYuPWR6KSNHTVZ1RMquD",
  "key8": "rXt5Dp8vosqZkVDpuk73vccZcqQkiLvLZhsfixpbuynXP6Nxpz1nxpTaw5tX5JkQroxikqdPZWaTfxvug8ghu9K",
  "key9": "4nsPiMmNucXm6FBQABNi9Z9fBH5Uh41dCyjAfNSd9ZuNwsrCs1vnbep9aTTpqVThSMQiRV4HGY4QJRngbBwRHppF",
  "key10": "3t4qe1sKcQSjUgWEWEZrEgsqnD3omkFc2ePDScozJE3RfNoWBtuRKCgAHPUnssaZH7xTLbq4bRSbh2pfsDvB7TH1",
  "key11": "5oEpQMgRPrWT1oWdEmUK8DnYYfrWTGPrxQVh6nMnd2Jsj8ePvdBbHPgrrKgPn7XutgynTUXxDgjw59ETaqo5m57A",
  "key12": "4VzfN6QNBVcovzP5bPk9teCYaPeNzd23Exxq3NUt4XCDvsxdx8iJ1bfE6ZTrM9SK4Q65oHGi698BtFfseVygpov5",
  "key13": "2DgtawUAW8PggsFCmXGQUw7sudCkeNa3MPvHaqnZToTq1d22mH7yLkqpedzTEGcPa3NSoiFP3P9vsmGZMUQCUkGo",
  "key14": "3RDEoj3MN84Ri4nHsWdJSEGD4ojomekYtdRAGHsuygJLt4sGBepQGgyNdt1bdLcTsugqfw1JSpXCx8dddkXPfqNg",
  "key15": "3GrgtrYxySAoZs6t5a5vr3UMHunjYadPW85RPwtU1oahQqJ1kJsWGYRjss4MhZSfxHWWHAqmAwehvGG6YbAwXVwz",
  "key16": "4jeWe7sQmZY59kRcjTZ3NavVd5KPfjTMPqenEATrR1QQ1vBMUzDbXNJN2JCuuBwKq5LitPP9wUaFnJVcT1zLxEKU",
  "key17": "51UGp2ZEDeGNQSHpL62UhCfdKHxNqyiwRdX2YR8ikXaQkE4QGdNEGyinugQFPpJGNvYiPFJp4F1izUJ4uQaCNWtk",
  "key18": "23WMAWdGpc7pcfM94U4TVeBqoUH1sHDA9cCNz2ofCtDZFGttdd1iNv2mnhVZgqSvrF44QFwzG3BPt6cMCk6DwwtQ",
  "key19": "SnjHLhQ8jg8UGnQp6JzPgYxXAxtcmtKNkRUsNGYEpEZ1YeG7APt99qYndSfqszSYxCWrKbTcDRGem1vVgdQiELt",
  "key20": "3kQftWYgxW9QoUanZ7oEXirkDdAtULtfdDNKpZqgPU2TPwBeLNnzYxi6C77r2tikxcrJ9DQakHVMipgB7V9TPDsj",
  "key21": "64X6MrDJ2gESBHxLScEW6yE6LbdHXrnEwNZ7rp2UDUMBSvjznsC9vFtLbkdRQUeMaUmkeeSwUoJ1zaWphBWz5VVx",
  "key22": "3DNoSj7vM8ewBTVnhM3FrWhmJXZ1U2kdtkLQo8LpQ1hSaU8ZD6kVpSPQDwgc97dF1WzVJtewQDvHzHEzdqS9g7oA",
  "key23": "5VgRwfA3DwWqNVZrR91CaDbGAgjctn8yqxE9FkmcbQLTnCA5BheLrjAJixpwH3iessbLeupYFbsrAN2Ydaz79d2Q",
  "key24": "4pq4Xx55PGM6T8x2TNwCTBLhyJb1dwJi7Akvxq5WqHTtChmG1HzmignH6bMi5NJb2ge66HeyxHvTwPiHoYTCqVUJ",
  "key25": "2922VKHFhLLCxSymb7wfsU3hMjxnxjY636nZRRRE8ouqDaYVeTmKqG6YTKzDs8X2HrL3bksT5skdC1RsaTrXLkpi",
  "key26": "27rKWMjpRPqQSdNTByWk3jPPvEXt2tdH1M1KSZTj6pj4XkjNN4SyPj65QfB4kXWRHcrR7pbiYdQFmC4uQNFiZoZf",
  "key27": "MiZVxmJT58NBESRZfHzu5s9h11pUHz5npiW8UDe8Ejrb6brafhvZrpdQGX9fSKyfNYPS2c6kHxZ52MTzfodeFK3",
  "key28": "Z5v9hVsb5vMieiHsYC3bbEzhjS78YGCQ7xpiCAip8nTuJ1MGkQeRHRbRBzbD2xJj6dtdXtBbqnxvFyFiYR3RcG6",
  "key29": "54eoTP2DbDe5c93Z6YDBp9h39fFabFPWWwN8WwC7Cs1N5dkccMGA4eedvsG2fk2MtYXiQM55gBdHkAtakcTpVY6Z",
  "key30": "572KV6bsRWuwZHaDiTkuvFvG3CxKE7cZdwHfefsRXXgBmYsn69y8ZkZx5n1BJ19vSy5ZrWqNE4xtf4opAYLVdpNB",
  "key31": "5WF93Kzjbp4aHPYWPTaD6q1CAobtggt7FTW7SRLLBSd9xeLRa6DhMGotJpJthyVJjFoDDqY8eP2zyXiNaG6JXAdf",
  "key32": "4PmJCuh9fgeCWgCngFVwatP2vpGMrhhFKhTA7xifUPcstaQZ8UdbiNoMwKaaDXWnJTDj6pq1vT47CL3p4YFMxzu7",
  "key33": "2T7beDNnETYNLLFaDNMnMqnaRunMk7iHCBrWh3kcvDseszHyw5qnTkPy5xaaS3C4zcDbJDPRN6Z4GX9dUdU1JoAP",
  "key34": "4dMSKnD6azuGwQ8wjK4KfKUs3GNRsYqdEBwC9SpJfLh3WHBJecXr6NUDNx7gNiMH4mrUj4CbPJfkq2aBDHNCpu1W",
  "key35": "2Yoc4U7UiB1D9BVMywV22HA2ForsK2BrAxBSV6LT3zF8veiASunxHZhgWShtuCB4SsBr1fm1k9TYMYVY4Y2QnuQ8",
  "key36": "3r9Zw6YUN9mXp9Cs4JdGPXkKib47NYpLS3bRvtfiXbZ1qsewGSthP6UJfaMejBXm3Avg4KcSfGDp18LLj4iZfCH8",
  "key37": "2yQEUunAnQ5jvfRFY2W836CjNe53zcKoic5DYa7Gz2dXBJvS6N25zjLdNWaKb6nYY8Msv47eYu9PTmJqJpSSbMTp",
  "key38": "5cXPChK55k3oF6gc9fSQFqfh1VtCeFhLQe7SQZXmQojzQPXxZGeTMdNxaZWS4cWfggC3ML7QZMp6FunCHLKUPU65",
  "key39": "757oBPpFirsE9BQ78zKa6cXwBH2RwGiRvz8kBLoh3GSkXbDbSu2LZh6mNe6LXLXeEuRrVtsDXnELPnskq7jhFat",
  "key40": "3FsZoMXv46CShBvYCtrLsmLP37Eb4QjQyb1f7Zn7wMG7y1p9rmircveUz8rowGhnwmWkWt9D9QWEPKRMWuqBwfEH",
  "key41": "5LBuYoS6KQCX3AeiLwvmWhCjDLVyvfrXNevQ7q3a6ZGeBQnX7NRPVvKFhRcoKivW62MDyN5iHwDnJ2vTysK9z58c",
  "key42": "4ndxhVWNSd2GV7bR2VqRrXw3wXn3vDwMd4QyTYRN9sPTyyDoEobgAS93kCq787wtUbpmsXd9Ez78Gbak2Pi3NoME",
  "key43": "KdDWLNw6A5s3FGYbHF82uXMrPEoP8URRPFY5Z6VUtigMhLwxggqxpehaxYcf81NPKt8NcudRBPZCFdnusZgvLBb",
  "key44": "21sQNESZuYHut5Tmdnwfy9HzbXR1e1REeCiwfUhHZ7WUQuj4eozJnQPxdAaNHBXxttt9RWZZKkEfWznrr3u1eUD5",
  "key45": "3iFXDD2bJE8s4cVYDZU1aaPiYgVLAHmkAaPuHaPx3W76teksJ6bhWSYXSc8GjCj51wfHbihPATeWWsj24hNRAxb8"
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
