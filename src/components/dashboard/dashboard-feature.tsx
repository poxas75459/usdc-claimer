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
    "21hcXTWB35LBzp28WH7H14YcgpgWriJxQ5M22r2X4mNmeLyciqXs9PeYYTuxXPHE4vsDqgLbizFhbMPmmanwDBM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNmupPi68V2ueVzZ7E2ratnq1KsZU584aZF9ZkzSAsjNWzVVnpo6vEnArJqaizJBKGcUDLaHXkYbmGvQsa3wB46",
  "key1": "qDJbdJrPJZauqDQLFWCQRfTYeEXfA7z9yPQrePuajL3RtMDcz3peTSuZjAjZs2K3eDwzFx73XpsUgt3wRv4Bgns",
  "key2": "2g6hLizGhPCg5nREjvX4fUQa7gveAYwBd9q2rdLSXf32yhg9nNSUgb2n8LmJhCkhbbZ9WTWQSHWargC6kogxCJTv",
  "key3": "LuNf2sMhQHhLyCmQyHkq6NenmSVG1pmuA6QtE4QVYeyPWHxcW82wuhHzyiGonBUJVgWDA1vKSAAch1AikNpgvqp",
  "key4": "5reqPp6xbK5EZ3PHKtNJ4CzbVsF7fDgSWpsr84pQCVSc7xBtZKqXByXonMGHUvrjbkiUD1nXpkNMZBmsZgGaGJTa",
  "key5": "pd5bpphzGukquak96ehq1WQbnywnpj7Q36qS9J5pfaZ4JbnH9gHoZDVqMPmcM8pw9sVhgWt4or8qqvEru1WvazV",
  "key6": "3fsvpPsRZR4jM7h1Zw24xY3FDYw1oZcEdogyNBrGULi3X9fFxS9tB4EnLaQ87YYU5g1ghAhUMp4Ddg97eNErgk2r",
  "key7": "5c5814aH8rQvYQammVE2yiLweqxXv1jJ4xQqTQQSyPJNatUSevE9vF8hqmawrntbU141SAGMGxmSXgSmuF1Xqqwi",
  "key8": "5K3PBgxiXX5YywZL2LQ2Mup1EdVi3nvTf5QoDP5yJ6rGaksAqEocgYn5dj9QvbpoayWXbi6rKfs6Wb924VPo32Fw",
  "key9": "56bSMtwNeQMiEUBF1Sa6Z14FjkBjFotp5YBWz3QpEn3QptFrzN3AYihofnSzyGS4JNepnxu4dSG3ifpp5Br7wPHS",
  "key10": "3djRnGMVdyp3SwpZBz3HLVBmU9Ph4jSBNKN2eiePtnndMh47XgqpbWTCBaXK8HuGPh98RqwgQpyrY631TpPp1tYo",
  "key11": "YnRGTooHCvEBtL9uh1YHWZe2YWFctNUNWko7sS6BNoELXusfUyTnCFjfDXgcL8KKjumRXkY3GzUMbL63cpm5JsM",
  "key12": "3zgUVh9LEvd1QYu58YgdBU9LsKkKMU3QyZbpCZUBrHbSg1zXXohGAwv1GbuuUiuRfzM4kgs2hBrJQ7KndLuKuY71",
  "key13": "49DJDh2hT5J4zVEWo5gBK3q8t9Vzw5NRquJKdacymqGXeV85N8Kf5GZ5MkGqaaSDePhVNUjjgk2R8MpY2yDwf9nJ",
  "key14": "VGRHbXT1bcQDYDUEN7zNuaAC42L7EK3FqtHsQX86mYde2r5gxegKDkupZQqeEgDWgQBvoBh1WsPv5G24ynPzjPd",
  "key15": "38vA2EAq1Q7e2oVM8qd1cBd9AiuHMj4abTRH38VzatRQ854UA9mocGA2jskQNvNTbZDGNUM6eJhZX4Nb54KzoHWd",
  "key16": "3MEmfFL3HWsTp5x1QkowFcvWcWNqV79JJeDXUQ83hyFzoML7sGuPvZf7RucEzfDhcXfpHDLi5SFsqmaoCP76saBj",
  "key17": "3NzMvRyANEip5QKxE1afZL5BXVc5BJE4hmUWyqxZFEWC3QC2b4RqfHqorHKGNxGdEumYUPU1Csvnp1sxtDcWG7sr",
  "key18": "5Wunp9aGiSEgP4EgetzyzX9F5FBYbxeDKeL5zCyfyVsBmcBPB916Ad4uKgTgcR2CGHLcQDxJu3KeHqmB4hRpVfTs",
  "key19": "5wM1CWHSZmwjwHLcdyT5bVEPjmuDE3cMRPKjZP9xmBv9NvoByKbbYGPcQX7Vqq2yA1RXj5Qbd2o5jMGXDQt2jt2d",
  "key20": "W8YQ5iEm5cM4UbBaoA1sn978uM8bjGij7qBHfgxv1ZmLbSMbRqiPK5uiJhinPVWe7SwCN4FnbwArTZ7wKCM9gt5",
  "key21": "5WqH9dGTeCvxwi71S7eePtBSHCKjVhEcF9W6NSnGLB63RvKD9a3YeNwnK5NkYfst2qsWmdJ95gKKFKqCoGmy1Mhw",
  "key22": "62Uz4QRj9tpAN6ftGd9DPqNX73kyagLP5QR5ERvQopG9c83WgMgwmDAQAQVsCqf5ASrF3EqSnXdBUnnG4DL1zUfC",
  "key23": "3oDsv9eAu8rc1D9EEnrmysSCZcMttCu9uxZ3CRfhnGiS9WUqqMqzjXHuLgjYnjpaqFyV6cD6DgxwivEbEA3e4rY2",
  "key24": "2ywhNFwZusMc4bV8E6PiJKXdiR6d5ASM2gXsc6GgSRGRq2TPqos3P86DwvULSYzS9fDxCvTiJU4YDmY8bg5Fj8ow",
  "key25": "3DJKBfxCWzxvmXi8zCjTHLkV8u48HXRwdSy92J7rnJFHb37f26y2H3d3pWZ7edHFgVnQkLxdxdSLPnGRnXUi9SMZ",
  "key26": "2dDecPgrqWotXh9y1K7BekJGoTvp8vHE8LhoWRf5Jsveb7VhE5Nc4p7wfZxvoVwoGDJ9p52yECscFg8o9riPo26a",
  "key27": "4zRZjJbyuE7yqAg8Q2wi9EWQ8qF4VN2Lnn1WG9weHAZffkakfbQsc9fjzKL7jsv2Lh8BphQfHQCgRc8tzrVYCQgz",
  "key28": "5KRtajGjehc7NjtmMj6H1GxZBv8XPAF1Q1AQCYmZZwaYiZmUyXaHkYQ32sQzXY1Rh7JtEBdutVRvpM8SgyjkNQSG",
  "key29": "3r4Be3RzfYQyjWWrFetUK1WpCBKL9Z8jZTcagBkSJnNbeaZuScrDRCnViKCb3tRC2DqDw9hkkp4g21hexxXk1hJ",
  "key30": "4gX9kzUEyTWXGAGxgp5CgSQYgTRgKh5bcL59ufjYVHMr8uQMEs9TGoSES7Sx1EFojmZhJ76iyg6YXmjadW8KLdWe",
  "key31": "3HUm3HupEU8aEdGThTtkfHze6CGJZR3fmJvJZf3PG6TtjFr2pBnfBL46X4ipYvBH1ZoP33ySvNYdikudNhWs1yiQ",
  "key32": "3hx35mN2gb6xoSuuPLJWRPRK1bkiAtHq4xcwFBGjMnhknEpo2ZnpEqfUePecjpj3v2o7c6Wmjw84kRRCkkn9uSDR",
  "key33": "4g2xjYa1WQ46nqizDBC4B4sdXd4azvmiPBfjBE1BDJLUzXZdetriwnYmCZiKHZ14Yu6XHJrp4yBdR81BWGoAZ8yR",
  "key34": "5P7BAh2FmEi8ZCrRPGeX6KsYL4o4oPWMQhxDmHL4NUVuj7PZxZjE8W8ZK1PyUtfa2QQYcNffanczwsU68wspKzTg",
  "key35": "4eKAZnpF8sJfR9FH1SLLqKw8UQWou3Pfd8ZH9687aXqLugt1vMDwRJ8rdRCHZi9aiYzzspgp9nR4AY3gRGyQxhE7",
  "key36": "bZWfHyHnYemL3QT5euVi3Vn25nTEzSMRCJCVUeSS6P2SqDmNAaiKPfESaLS33UKh4Yzg7rdQ9dC9B1d3hQCJQmH"
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
