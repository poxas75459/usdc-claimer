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
    "7YewYGZC69XYkPgncCEYpsenPPi9LUKzwaUhbqg92Ri6mAyuN3NitgHES3ukB2zfKQ2QjcQ4nbsTZGpxAdKVsRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UrMzupBUNoXJ4dYnf81jVQDBCQ51my3S4dsFsvR8xUHYCFarr6Wej5cQhR4szoQEFdh2wm7ssn63EJXG47Wy3CH",
  "key1": "XTmaJbNTAsUnyHtG3UT2XDdfubKoLz1FBXsBeNKipfubB5i8wwxjvVdYgHgHKBhewvbfw14fg4tdbLDcR6XWA3Y",
  "key2": "4hNDw4SQKZCUMi1rkU1rgMRmU9xUjcqC1EdaXxHALGsrVQKwyehSybb6duJudp6sFW1Fkdquanr7chK6wwzamVij",
  "key3": "QEo9aB1LSvw5yZAnz17h8HPqPZxD9pLv3ac7FAKGQifpLgXkJqdFhBP6aGarrb1J6M1PfX6TY4HNehmAWi9FWZ7",
  "key4": "4axMMFN3WTps1ABsinRZDFqiG7esUxZUwNiWSvXv4jQEPUCs1SJ66W74aHdBjLfujsQiQnFCuyQHX3aVFoSQ1vYJ",
  "key5": "3y9CVMTBoNWHnMvK7ycnQTkiTzPcXSBexvoU7LXca1u1TQFKEC8ePsgzv4cbBaULtJeyp2qc86vjmbwyTQZ9xPo6",
  "key6": "2WdpvCayDey4C27seJTuxJgmT5P12XFYNkHNGvrHbm2xadw3ftwYe3ECyMDzxdfdAzy3rMvtyX6dLtE9YAAF5xEb",
  "key7": "5YJxhpxpeQkkybDHq4rvjHdHhYxgXCoTHnekJ69BTJCrAwMVWPsfmXDbow4ryiS2a1Q94fn85Ts8YmNc97mAc9Ku",
  "key8": "2683NepoyJ2Sa26gzJcsKsJUoYUDaVxaZV4RTbrRqXVEB3SEgaowqw4eurpLPMHSpxykFSKaBRCUYmdMQhGLy8Hq",
  "key9": "4mhuBDGL66VcPX4s9rcmJnDur6FJPn2UkHJiwqJJG2w6VRtnqCKGMqJXaZmRaDvibwBk2Lj9ox2ERzwiwmW6pxdB",
  "key10": "7R7q6hMKWiim1hkkEXC3srjDYbVnXcpYuRwdVVcQ5BZpD5JJpMKx2WnabMQQSDNFjHZpTVvg1y4GiTHBtWGu1tK",
  "key11": "4LkwnErDCv7F4om9yFwCFFpyMfSbgveMXQzXwFj2xG2FeotABszdsCoYbCJ5GwWXN2TqpsHqgC9fbPThTxyBKGPh",
  "key12": "4Xp9PLQ3gQ8gUC34eBQuVxwnsrP41cY7nUfH1MpiNy4C6u1LovpfExC4BKm8T8hXmffjj9TJdjyvhQTxJHYSfXe6",
  "key13": "MGhdWyvqLjRdDJ8rVvo2bZyvv7WuZy1A4TaqudMKX97LEuHEtzMpAbcdrX5c2NansDc7hoazwNM7WxkWQaekbJy",
  "key14": "9rsy8WsvndYt9NQcnfx6TQTnLKRYF324EwXxbJQyFSySYs6yzbpf7W4K87pGvG3C5DL63tZ6wKmBHe4hmdUoHz6",
  "key15": "23WepqgQ5R2oScycjVrvYucQRzu9VBa6pf9EZDFeHgCeaB1LarB9APNgGhmA1BBnM1k3zWH9fsirqb19VUkGZ5ZR",
  "key16": "3vsVPczfL39UoVUC6xRPawaSCogvgRHimCEHcnE5EJDL1GsGmkkejLZevVBRk3njY34JzUm16kEucgjrPEKBUtRz",
  "key17": "6z84VSgfU1Z51VCxSfotcN17oBtiGbhEEC5ESUSTDwKHWk3vDDejJYv1U4muspZnVMjHPNrfNQ6t9SMozYHGRTW",
  "key18": "2of7Z6SKFNNygJDrUJuBKgQ3JrqQDf3D4WKbZxmwCK2pux8wZ55yJX6xXY9qP2VqR5g2BxupNevXiPhJvMwYeaKP",
  "key19": "5Gjr78XiKnjMPKQaqTdLNM4aNX42AoXmTAuvrj3UcwHc3F2z2NnPHH1tQgr7Wb26b5sDkQ1QqWuLqhgkzRpvrbsx",
  "key20": "5HehdtfAGpX6UzTqLZc7pnPWw9bKX34bXsScLbh4yYC7GKTPAvGZ9Q41kHjD6BnSboUz375eNA4XndfFJXQZ11w8",
  "key21": "3tXYyDpxpbsVFaT8XUJwyVKZRUhVRsZqCdNxGAZEFqHPCpjuNLHD8Diq5SsoxPbEU4HYk7WJ5fddXcCrcMH4gwTd",
  "key22": "3VgZsL5Nv8Ex1ZE1ZHqgzTcpr2wEMHoVzzSZQTWh7owQZVD6YuyYEawhtc6fYmL5JJs1SrKeKeFDHLU4ce9qeYEj",
  "key23": "4fRN8rotrVT2HyVpgZr1DAK6MNSyg8bJP8PDct18NC4fYhSYrzotXHF7Q8yBgKcbGvkr1ov6BnLuySMM97UMzvuP",
  "key24": "2wxrjjpksouu5wvc2qi4GuSoRQMUDMhnPX4DH9J8GKaNKTcM3UxckfGyZ7pMbYeBAtqbV77pzx9RWxW6jJ84uw9c",
  "key25": "976wbAHkp41LwGXAbPtYViMVMYrqKRXGYYbdUqa9ZZUjAfaQh12L4sXPGR1d9A53NJgbAA7EnpGbAfUxn4qzMii",
  "key26": "3Ap9MQN4wYocDSNQswWFkGnYUtP9FuzDA2gEVuATaUzMeLyxNkeX7RxD82Da3iVvbEvcUwXjsUCQGt1B7AojLyE4",
  "key27": "3yrVfsS1xJpTVNCXDWPdr33Lif1qfQex5QWnS4hYBmHtTdTuZmHfHw4m3hzBYTYTEgVT4Zvdw1TVpf8rDvy9B1RV",
  "key28": "UHrzHTp3MoHSgfJ7UuzjzCUKB6Fpd9nCLLYyJL9rmAh339ZRf9cPJjAkmrixEG6j4LhycD4dLoMf75Zi9pYyB8X",
  "key29": "qW1EYMnBfaY5F9iBWP6hdBbUSPGcxMh9aAd5cqYqt2SUeYT1n1wL3t7mv5JaR9d76RvzstNEHNKaDEJwgH2zJgF",
  "key30": "2Kc6ZYxYziPJovJJD8FMkMEUQvXF8CXiyXoSHWgDgf5NYNad2mPCU58hXvRq3hM8kNf1Jbw5t7Xd3vuLu2tfozEX",
  "key31": "27JKQdL1tUb2FFWbrdGBAhWp1GGJrBtFiQJXPiKH9W232ope9QWAfGVmgMiVNb8AbQ88uMv1HjrPzm1ov6nXGnAU",
  "key32": "2A95GB4nKnafv9uhBSey3pUTzUtFsCHGng1gtnxohk2bryGYv1j82yF4vUZruyrXfHuteYF34eVcNe2vtuX97En1",
  "key33": "4pfgdshTbta3DLuVoSdyc4H4WMssVa4oxYBtn24ry8sPjfBsxFFrMAe4ZQXVxHn83S3k8msaLJX1t8XHFt2h1ATV",
  "key34": "4XKmzKfY33yXx975njEWExG5u2ve4CLmHzAWW5Bz8ZyjxTcKTX6VKM4ZzX5tvfytRevuQK99kd5LGbo3EQMe5Egz",
  "key35": "ZgmhL5oYhJLPqqQz4M7nwdm2VM1XNnRS9Xu4n8sKhzQSuxJK286nym64eZhEzsgX9sxoZwUGjfAp2VdkjNHu4kU",
  "key36": "2iHwgkdqRWVjcMvHgGiWUyYLgUinPh94tzYnWxTNwvBfAH8RAfSVT77VeLmBAXtubTmLg9Pu93UzJbtLqpFP6CRZ",
  "key37": "5QDMYvifK4NB32bUrv3ZPZUuCAW4dvZKvxDsjiiHv1AZ6qSNNLZF1vubBFrMysnHRVwSwgXcnLm8EUz5p1TfVBju",
  "key38": "FBkUBbCTtrM5oVAnxU6oWAg2b58RrgZZDsLSKYa1YnHvGCqFe4K3i4MrwyZq9dzGA7Tc4UR3joJLR5xHr2WNopT"
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
