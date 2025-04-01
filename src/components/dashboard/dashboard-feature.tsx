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
    "2JPWizmDLxD8y1U5dM1Qyp8MPo5YX9UvRSaaKyYLjSoHULv4H5UFQVUDEeCym9faGgBRPq6THmPCzrA7U9KvPAVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxSmvcNe5wm2Sb1WM1SYtXzhwuhYHesAtpwhLLapyrdrA82sRHHjPp1xw71xxYyn2tj2nakMvEedTFhao5bbkJY",
  "key1": "3uEmg7YdEvZEwTkSpF2jjDkuG81XNiuLyQQkjEsiSs61qLrjXfUKG6U3WTJ96te3i1CEqL53G88o6cBHx6WgrF4F",
  "key2": "2FzqtLXfAUM6hRB3pPwqUF9kkbqGdSX7oDcxk4X9M8CUEVR9CeCEf4qAiyAkkAFERpmWJ98PzxQUd33Ud9iAY3Sp",
  "key3": "4ifRibQKeBFNKLk8PbXUYVNSFQWkswboPfsrKTqXhQCodRtpqQSMQBMxCdCDDPV9fHAMA1juxuZLuCB5DC3gfmEC",
  "key4": "5AeTaX8w7Y4x7oG7dDj9VBRwRmijZDYB3QsmAV9A3NgxoS5axaopvWQpXYUJzzAhZRSQ7SA375eTs4bx2RUwrQHt",
  "key5": "649U8qFGPtDTayDVNDpm9ZUEQr3mDCwndGWsK2bJzJgC5FsATVNcjq6U4mtttanywYXRoGNXC7VezfcNCvjcQCgf",
  "key6": "Sy9chqpSbe85bkUn6RW92TtPeSTc8ZTDvk4njo1JFkvHE1UpdAjX363fSob66CtEYEALQbuYDMu3CkgTdCZkgwk",
  "key7": "3r4LcSzRHcdHnatSTRBPtjMWiziA1gbxMWb1tnPBF7vg4nq37XfEz1gHmjUgG1ZzfiKgVWurkshCcnzEWVWhi5Kk",
  "key8": "3BdhT78wjX5FVhSPdffNmkiYmyqAhipp2Vu9x8XUqhQFd12ri27xqxeFutezTBsASGzettcqfW4hbP9uRC5W5xkw",
  "key9": "4GdEu2qY3Kn3W5kTS8APrGWcLsVMNhAAF8zrSw9EZXBSFE9x1FmVxCmXZAnh4YN9n3E7CPvEu3Jo4Nfb2dYReBFv",
  "key10": "534CAuCxfvm4wnxseyUGZmFBEr6AkGo8vpAVWjwDJQsAQxDwijFJYwoxu2p22McVwjZXQoQBTRrLwVQimzZGmJHK",
  "key11": "43JXbqusCi1keusJ8shmLRwAMzCiiA8AaDEngDPGHnEjwZrvnYgsNBTTk5ZnJf7EtRLsSXsBXAWQRAwGgYGc7V1P",
  "key12": "2gn1iBV8F5wCtR1Ni2peHD4zKfAccZ39Xt5brsNaHmTSs7MSKQoPjQiB8Z3s4RSAUSz5qKp6sGknGm1sPLTamQsr",
  "key13": "5VjcUY2VsktX3WVvjeeRivRLyfpi8HH3aUeCxDjh1HbSdUAcgRRcquGkCWi2X8xJiXGgQZYnDj5FvQnmHYANCNFw",
  "key14": "5oCm3AvHDEo52CCQjXzPzGEprxRyN5zrwmSHgw3Wo9QGnt7dnZ2hVZAyEojxpKNiDBemox9zbwgYR9rzPtKoSQPP",
  "key15": "xb49t2dG3275dqj2wR5S8cDJhUPerPuF7AuAYSSxEm6H6jBUAbsdKuVPA2ZGfNEFh7a1F6NJs7LH93vsLpeqWKJ",
  "key16": "619iBqwrPPvCXd631R1keGFNrru2J7MgC1gA7BsZrWAZBfaYCJS1TPrmq73oPLjqKS3PMDzfozz975yrc3kPFkaz",
  "key17": "2aE59VnamztvwsLzjAcVkKv2ZFe4wpukdTi4wYkEZv6Tsuf6DbiAvwqCDz8yLBtyfcmYDLRidRFthuKx7Ujc4SFF",
  "key18": "5xNntC1ZqDcqEzB9EvpdNT7bwuLvZgk3oty9QgjVkv5DX4Rxf7dG8caWjMemkocDaFzUEh1k3iNVXDGeRKyykbx7",
  "key19": "3x3AFbQNLmFqmpnhqXpRPU4Tgym99yJEa5pzzEkkwkKUbnUdAK6jqXTSJEHAwQG5APyBFWyQ8GvY4CKZm6yQfnZ9",
  "key20": "BVnQ7RRUnewh4JmXadiXQrqyVtFHigDef1d86Sbt2mmweoVNUgfAWXDNszhfCHUWuzaWndgmYbZV2ntgtGXTrKM",
  "key21": "3iNShgKh7AcWxEkGWuvDxSadPhJyx3FBURVjXqtjZV2JwbjQhNE21TakiVG8n2qekAHfaAptreoKX9SKUhboggAJ",
  "key22": "5jAuSq9TYo1YnLFM5axLBd3U3YxmCkAAY83LFQMyR6HZtNiZKNyb8hy3vuBCKm4ACofvHqhT5SftN9kMMNkCoYEf",
  "key23": "4iwWioK1VZA5e8SJyUkzKQxKbBX5SLpY4Dya4Rb2cDuvunSh8mJcJmoqfwMH7kWdTQay7sKeAPdVvj7F6o3x6h86",
  "key24": "4gLosLiXWVvZCjFYph5Vnf7rSD9rbLJbahifTsMu58FDZ2ai92jxNWJFaGA1DGiuF52aRoN9ym26KoZWy4SMWC2g",
  "key25": "3exj81nRya2xZ9V5f668QMAoN9LeAKwAqXpWVeA29mr9tZPH8X9CHhEDSVHfjtSmKR2yyh9ENW9fP5Aodnxc5wnA",
  "key26": "2tiampB2ZFA9y7aRK2aYxKhh1Mus7MVfMHi9H7LDUifJDE2vjEdchLu68Saow9WAhkSULL2XchQ566SsHTto3LV9",
  "key27": "2SYyskHQu7bg74J2dxuwSL8aneAX3iLeQCYMtUaoPXp3xCCbKK6FyE4UDR3tJkmwgCNqy4p4RSbdnqcN4dm2E1km",
  "key28": "35y88NhJtC2xxLcYgvwWF8yZempa23z7cP4cWCiuSp9WBjE7XhjM69Kg2Hms6FeDnzEKrVfsTBG113o1XTcCibj2",
  "key29": "41oCnCe1rUBcTZSGDVTQYsn74nBy8Z4z17TTU7XbnQue4RotWukpjpiRZ11qp5JzQUQ2wYiCLoufoRRZKVqsBeSc",
  "key30": "3h4NBsE47DDZqQpARu8CL1FKFE32NBcQogyUsBUeWZniUxxw5inSw6DSVpmehwK6bmeVLpnha3vuNTRM3x8t6zg8",
  "key31": "3RVXJPeHgMZ3p5m5hrQRhxPQ9AaCkExuMEWVKSGtsvsjSvetuidgyHBzVogJe6a2dSb2Er1VgCYceRDDPWgQyLTK",
  "key32": "5k91vaefkqqLAtrNcsz2HrPMq7fA859USfZXm9Vp61gv6EVdBHoMm8WPNL52vHJD5AsXY7jHm112StQpc3cTzViP",
  "key33": "23UMxQcPN6129yRp5zriNBX5hYv9DG5XaaPBprQ6rWYiWVmwoj2pw63inxubqA1knaTxssHy3orJ7W3SGfA1ZxZA"
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
