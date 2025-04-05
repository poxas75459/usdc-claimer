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
    "3HY3ESKhaby7fHsnKcRUUgeRagTXTLxaT56X2Y2QHDb68VL1dmFZA58ydAosnzo9FN2JZ6UTXyMpFs2CJ7XHigc8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fpgZ7AZavrVbtnwua2rTzzbSCAorvLLc5FpL42dcxC4YoCXf5rYzFhccdNMe26LN1hukohaWqoqYhGqA9hySrMD",
  "key1": "21WVPNaoiM9y2uGT485w1DX2h7JHGiNKFH79YvFGQFJtz1JmXx1x51WPy8RZBTSurcm93BJGFRrFRDihCMMJGjyU",
  "key2": "m6MAWeUKrj3uF8mqZNzVwS8Gfy663rnoQv9C7TSFdWpSvYtBkjTPmugBPyDqdsWTnsPPTLP6fSn4gc2RdvxMtw8",
  "key3": "4GLSVJHVUJZbufdoKNYM9igq15zba9pQxxqGmADWfJXPguw1krZY4ji4TjALXgh7RyzwNmtE6JKQMAurjP5WrjdX",
  "key4": "427C1RyBEKSHsPqqpEj8GtC6f47JAJGEcZoPJuCjHtLhKm3zw2Ge5DTVxmx4Uo6aGFg2Z2LfkbP9pjuYSd6d6JrW",
  "key5": "gdEznJtCNNY8YcPeowuf31iRJdAs8vAAAYnZKFdkbCmhH3UBHhvCFfDqh8kmcxdf5UV4FPqJCyqBGRjokjEsj6T",
  "key6": "47qFVf6XBv9s5D35ew5FookW2TPNJsMLMmyayfvinxmvqWQiVTuV9dTM2iKcSXCitPa8z1isLdGyCE1Dho4KXMd1",
  "key7": "4NRQ7jwsRsyQoGPrHY4UUAxc4feVzn98kFjuiWSBsswKGMWew5ZLbCYvy8VjnwZbYBJfjQeFKU1UFXH76uhzikny",
  "key8": "FEDnX5BZCuP6JhqA5Dk4u9tKCdr8wvRqok6en22nSiPu18A36fPF2QvzX5tmfqtmRFjgBv9ePrA2euWYiypNTym",
  "key9": "5UmVDBupy9MAeRnMi921FJeEKsRwWjMdi49aebg8yTw6GMETZCXJ5tTzef8tRLDNNYqivxubRqUFCcHVWkaua8C7",
  "key10": "xTouAcBRvH4DeY3YE832g15zVaRKh94dGjBPH7PApSowUGPCJSszSKoUjtiEWnS7F86VAsCkGC5HUUyPYkzXv63",
  "key11": "5ecWUuy15ySNrzqh57bxi1ucJcD7odCWzm6NbbfMRr3Co84smfpMqJpcP4QDX3CjPMFsBTxgewsvE5W3JWX34dhu",
  "key12": "5BmKfS6o79dPKLnLd72kW2hmskBJFygoqPYSy4EhXcjgkk4DJc73pGS5HxkuYCEmZEDCfXrr7N5f1rPwiv9npETA",
  "key13": "5TsbqrSs2bbxoVkie3EHsSxEd5idHmPTdz7U9YhK8uPNpwLSAm5hzQcJxs5zEaeFYWeVLwK9H5LonVYbFvH5aqEr",
  "key14": "5TmCdXX1UfFsobSuMeyDVcAKBypnVUohahrxfZCtkWK7fGkiMdKQFBeeEHte1NpnCnR3WHmxhDoQaxG9Dsh6VtUn",
  "key15": "35EjJdXc6XpJ71LPaFikZDtLxLavYY9R7JEx16wctRzSv7ebWFkMJSJdkZ7M9kv2UnN6FJa8VgNy1E4yqzXN5HYc",
  "key16": "2tUgpathVAkMvBZKzUvRzuUnPzVSUAZjrV7k5gPTa6EeQPTH1WwssmgHSTbCJizV32h73ZkuHbK8ZRp8Ti8Uw4r2",
  "key17": "2FUQ3HxZLj9EYgkuRK441CeDGMbAyRC5n6jqhi3ij4Gt5gtE2DAXgLiPNsqfnZLiRSmMnmc2kniuBV5x8y8CzVSy",
  "key18": "5RRJSfMHhmtgxD4un53Y3fbLDjuJH5QYiLBuxCcyaN7cCq9dA2tEH4NTq1jNuQrTkwRtWcWPcC5TuMpbsYHoTJyt",
  "key19": "5Zvpvo2vukzWYAY4BugMzhVDqLvYJVgUDBA8wzbCBiN6jphHE6C2WJ6vt3i7a6W5hg1zwXZajJiL7itNF3Js44F5",
  "key20": "24cZXKEaRCyaU8JC48BPAN93tdxoNhXKwRjBm1yNvipFoHe3jPmEFuvQAKhayZKPsv8Ww3bLZiwdGFAtKxfoH4Sz",
  "key21": "2GZRuhS1Y7i3nUEtA42Fta4YpY1HuDDZGDHPTVU31o5m5Go7tdSXf2tFFkRm4pbLgGX5ze7zQvxspD2u6bj998EZ",
  "key22": "3GbSdPFf4fhkRdkyis1gDX9SRtNWmrNvkzFsVdtjVefkuieYi78AdNi2JtqMtoNDbxs7UgHpwZCZpdCaANv39xLJ",
  "key23": "5C6NB7w3xNGuZ1XcBNJPctzuHi1gshBcUxPf5YgY5oKDMwn3vcFGqrMrDj2wMX2h8MbRuLsAf9jBTa9TAgUixFJC",
  "key24": "54o4GedbLfN9EcLwM3QE8Njn86TctZbXg2mX1B9DqKYRidWws1yGxizfDp4L1P4uihHWaWPDaAruNpq9BNdE1Zgo",
  "key25": "44EeXxBtn77XMsa7FzhNyP6nEEhyyBYeZRkBESR83dJ4PLLHVNkYwc11xLEbHf3PSGU4NhCTG9vYw7cFK9cxwd4M",
  "key26": "35jMUQVUwBSqmMywzjchPyhBrtwoUhW9Vsui6TWs8sruJGCpNwSE7WKr1YnkCet8yhD27mUHjkPeGYsTQWjR88G8",
  "key27": "4qkuzXPKFrNJYB9pbng2HiGgnH8k3WEhZNuTcMwFayW4e536HY4znKHyNvxM9fGzwbJscq6YMUBV696tuzRF84Hw",
  "key28": "4ZavcWyrRbLQKkomYYvsaf8LQyAHDcUT78smaJAd9HTkXa8iX8pnCNPwq8ZVjnXu5BgXAehAPAMU4JpfiizirKEN",
  "key29": "yPsUyAyhgWtrVBUJLAnaiXyPaKR5i8TguHqPX1fJoAvJmKFpt4wdGjx6589GDvVeoTtDaGJa7ufzZsBZCXWVRoj",
  "key30": "Z98q7XZQe9XGbLtguXVAAVQs2653bFa9zYR5rabSJD9WpFWEk4r3x67mBdcPEaffNfbPAKhXrPJMKLsmFDQRNTz",
  "key31": "5u8fopu7D2bWPMC4s6yijC2W3RWpymZNbnex29YHF6CziMv9cBjiaTmRkVZSXMqac46eFi8YfLaxLndGBH23ynW7",
  "key32": "3gs2TfhKP8AXi1qaYyLQyMoMsZQTnbBK3rUWJ27cQ9hn3Sge3ao6CtS73GNv6YimyBU51NNZZJ1vWf7giuWhRgXP",
  "key33": "2Yj7UtsduEQUTuhTCgMYwoshXNK8DcD2pZGVvHapn8atPgBYeiwbPoPNDGU74H9z7TbVYwbMobyP9GsyVcFaWn7p",
  "key34": "oMjKysQBcqcb4GTW3ges9q6mUzMkowrGLB8cnGWkQS8ksmRmUaT154gKqomUrZwVB252HiTyvDaB24YYcjNaJi1",
  "key35": "2p8G5BW9PxDsz2eVUpQnVn326ZXCbWRCkoxtBQHvMbhictEqcXSJy3DAwM9UmXSoLCCA4SjKcHgpRgfEDZqg8MLQ",
  "key36": "3tyMywxMvu1zQZE1RwcSJ5n9AxFvMTc7bERKP9HqVXXnHDe7QDsDh6ztkwUNZhLK34JyEMTYxrTfYqtZWefBwWZZ",
  "key37": "svGSdk9owpaQyNXUuz2QrmZ2FFSmDCayCQWDPNR88CAoajwPdjXyTYZhFo7o4vUuVVVu1DKDpbFivg54hmPxkJt",
  "key38": "5zQYKSpScGUPvSdnsGfkn4at51b3Ye3tMfmAHig8VdSX52MHJ69e7qGVW6BKuXupNUWnkQwWYJDy5m3TM8TEpWjn",
  "key39": "5JZWLbKt9M5ezAdp1VXQjMxLaviwX2hZvuVANbqj6MYYXPwBiFzJPUBPcnzg2tVPPFM2rEJVoFPNWuW2Sgqx7vLW",
  "key40": "5cRg5dQUWqDH5aoUxoR9831E4WzJL43rfHGNGKXCLwuX1EfEyqVoBFK59kkotjzViiA8dEieqzJtVnb1sWzgfP3G",
  "key41": "4PDhCXCSWV4UTXY1dGm691p8kkQ2ApGU5eFhEtvwyF7VHksa2UioRf2JcnG7Dr39mQ2gtPFQm23KzreNb8bunTSA",
  "key42": "2hLyXeeXWKMjfL8ybdyUSN7BEWMKr5m1u3t6RHjSkyZYMgqp9NGqZWJv16TjfTyWqBrfRJNrm5oKVPbBParuLNB1",
  "key43": "38j4TmyEQSdbZtmrVoYQSa63oxGgXC5X3LJXfcXosbwDpjgXWE24E4JwJmWvCajzyc2b61dogoS1emZedkBMWN37",
  "key44": "s71MSFciEBiAxTKJ9YgLwFPh3GQqwpcf4SCWy5SZ3imKcpgVjfdqtbTZxi3CSx35e2s9HH2BniKwvQeXM3P1T65",
  "key45": "5uqZ1JaGwHDxv8kFnvuBtyxCFYw8HoatrAqAcJqv4gcm6dxXn8G9adQE6g9Q2WTbWPXNcxEJugWVWSLzmg9RkqJf"
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
