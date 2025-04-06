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
    "5RUxhs7DjRhuJCDGH41hVX3Vz2dQ7QkcyhWbKxK6tSqvWHuQwNZhuUNh5DvbmVp57vnnzoT5ZkXeff6fPHZwoo1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bPfNfmpPjuTKmzorgJic5bXTZT8VV2TxqTyTAXzrVEG3NtLhQ9LogQZ6aNv1FawS4X7kaWWgE52woh9UWuTkPSw",
  "key1": "qd8tiorq87REw5jrhUPT7AnP14TwKWUkEpVAZCejvjxVZRobMRCTNSLaRjA8shGxN1hwje3h7QqMs72s38rPgQd",
  "key2": "5xQgqbmowHXpi4vgJnwAS5g2bej2EPiLouKew6jK49gK3qFLe575sFBkudrtqfb8LCX3JGZ6Tye1BydnQUudoNBe",
  "key3": "4a7PEj97fWfqGeaWVCYZ2K3hZvriWg79ARe2bTmYfYNhkBU7QfKsKxtJGYCx98DaMtzJQPsc4HZFgmzGnEgKbz1V",
  "key4": "3bChvmZr8o3TLgyyRUn1XnGB9qoRgibWzvNMjr9ATckCm2JJXH1B4QqkmQmv5Qp3iA1e8PgxnuMsztsfyE8m2gu6",
  "key5": "5xGcpPkrBx5FrAjRdSFcbLQX4LVSbHubst3WNALEqjFJkajfKRQjPjUh3ZEjckqF1tKre7yKqvyc4BUipxvNVZLY",
  "key6": "4rKNtKBkXtrdnkWT57QqQ4jVEraKLM4EVFsTGCYzryCGpgagvybf6NgXSrdPsq1AHx9kbYJEyJPy3d6xigKPwxLQ",
  "key7": "5UiWxPh6e6zMUk9utsfXFezPECEKAxwxHXWgc6eFMh86XQujurAFDj5NGTpNW8MApxbhDk2Yv1cdaGfjQCqpLZCS",
  "key8": "4xKrZNpt4uv1qi6rGzBEgixzpBtGdCRbXtWfo3jh4SmrF1PK528gdnSbiA7fXC8AEU8SBystbjdNGcnFQdZKvbhd",
  "key9": "53D6wUYa8y1yQxiyESfvPZY5iBvRhYSmzJwAym8R2REkhEvZop3bvJF5Lj2baYZo9TFxbtkZwLLrayN43ZQf8nAw",
  "key10": "7mDPVzU8zvNgG3DMbgWmsBKfztRs6AFhMUNu8D7baFkJcfL3uuX2DohPhV9QXccGSaK99CTjw8K7dnPWtGkUoC9",
  "key11": "4wQsRSRevadYEa6s3TowShUfARmZd2w8sMN23QAnhbDdejqqGrP7cXcbrnxV2TR15MUZLC8HCSWtDSA2yG67YWAt",
  "key12": "41stYgMm4yWPamrrpRUn2vFMbCPiNuVuNdbZ3Ty8UwH24DvsepYnSyoHmfQAadTiHmGUKb9ZGdiq3p1p9Ppo47PK",
  "key13": "sfDWw7QQmRP4rYcJhxQppKnmmWAWJTWZoAEzq8P6cjoCjBWUde8i8Aj69DcCZztR9vJsvueAkxGmBAYePBzqDyV",
  "key14": "2orYv75bdvQnpAHhUYZAXJ1DAYL9cM2vfwhHwxpLmaXfGMWEt9uwueGC8PUM1Zf5FGoGupgQCP3LQpEX4nz1J2Nr",
  "key15": "ZU3mitcGrSWEJ69aYFUVSTDM55933KrGKf9vhzgnJSnjijeSDoiRB7qztkVBrcvFgi5LstDcjMZ4eeikFrkxF8W",
  "key16": "C8hfSkH9kUYxYmMCY1GrnkcvDBtHye6vAq96BJnKdUagCJBNLgqKA1ZJWyy1X9wyXzSvYNiZF1tChAGUcYiRigY",
  "key17": "3sp33otaBvt4J7PrYA95SPL9GgxSWNMpDmsRJWwyDPHieXP6HRWB8WBTWARf4XHXFYWw8kJtm2kDddz86oGJFGVo",
  "key18": "665HrKrsGuNFUJoq75egGRv5y19JxVt3uX44Yhf1kRRTS3u8LE374onU2wrznpWquB7ioL75SdL4LXkkaoUSWXb9",
  "key19": "W46qUvtnYD1yYhE4or2T334GQ1CpHak7BxZfgDU11fqqXHjzGxvnT2Xhq4kF4754NRjd4oiZiT1RgEnR4978Q34",
  "key20": "41CNpqJTBcu5MfMetrcHd1iJEUbDmt6Wuc8JvHFfwxrXx5xqtR19gBkXh7H7Mgwfu4vmhZHn4H7sZ31CdjH2Adoz",
  "key21": "35WXt3gQhNzDHdU5ZwacZ9aMUiZtfyj1yQrJXj1TpSKLwH8R5K7WC578TvwfYtAxweCy1gYEw9sXKiD9b6W7oq1d",
  "key22": "3y8cXivUFNmepTu4tjGxSDYCVd3Y8PTM3Vj78aEZRjh3azUde2xc1oTmuaxwMPGzirFqSDFT1ybRp99pejqpJSkX",
  "key23": "5woFzmKvRRkwqKSY22Nom1TUD4SyNtGHBzb3HfkHD598TzeiyBYP3X7SYFvPGknqAirtLVEQ6MJKVM6NrEhiQQjA",
  "key24": "45dhkZ7TWRAGkFShzhBcJ4t83Wi14m9cYrUdzkqdv7eqQCmMc7vvbSHvCi2pdjdLLLBJVZfXj8eikuqiqYTrJrCf",
  "key25": "3JyMPLac6FWdGzhHrWotvLKyFF8V7ekFNRWouCsWNWm89eARa6iwkTznEKwv8qovU9dS1rLMCuBfgDzTwUZUksdH",
  "key26": "4qfRFQmC4fGEb9CxzAj76xMLNqAKHYJKDuMTEeeFLUBSSvh9LLWtuCXXdLgHeFzVTTCkdKKA6T4tDv7gT6mLA5hy",
  "key27": "3R11sdR2MpPagnQ845c5qbxEbpSTk82J5J3EkJZvrsQwdjLzGhpyBVkfJX443uNykRmhphxYwayasb9XJe6GWtF5",
  "key28": "5y5CakXYVqRV7To1yfeMayJkQJ9aNoPnGfCV9mCcwRP7taNUVcUANZ5XLkQN48kh4QmmsJxw7N7fGdHJv3kMJZdS",
  "key29": "4KqxuMAvHR8gsRkTCSXqachrfJ9EA3XhCaxbGwVqrYpr2FtcQfHUPQnkUXeKrtcsPHYSDCAzHVG37zbr3kDH2eBb",
  "key30": "4WjxanGxVTbykVJhijH6HzjcXVyhi7FUN3dhY7NaU64NSMYwuLLbitw3BRh7FVYAKr4vFvY6vreGDCZw8EPDxjCd",
  "key31": "4AoE4iw6LEanns44bDwPPPTv4Wygw9yrXftwsHUGg27J92uMHiTSXqEVsjbNvVoDVA9AhEaEbmGrByfH7TotAruw",
  "key32": "2hFBNtw4LuQTUhNLf8XBKbAUaPn7bwmK9qWFvhHKk7F1oa8xHrVGNaHPExMWPWzWicCyGpTQeLZVhyDQ83phxx5P",
  "key33": "61SbNb3rJf335suX3rYTXvzcAT6h2xNPsf6UXZcreNQjsN2qFRQ5uK7XYVayNmYtBxWZJqSroeRjcCxVuitbRntY",
  "key34": "2ZnQgPFwcDXkJgXcUPVEBeD3B16rDsfgU64Q7XtBT3hYRFzFdpQpN5SPJZaELhaKpSmFzBGa3WtWsTGgUKEyrjh2",
  "key35": "5JGAZpPJBS4tkdhgKV9vtrfpZSFPEHG7VmRsXTQmXddw29cAkWKH9NbGWn3KNkryb6U9knwLFVcHeWpSsHfRp6ab",
  "key36": "Zbg63oFcRLRRjSLiZLZ2L3jNWfFpHW4DpePsaAUFNvppmHaJ5zvXwcz6vRov7EToRPZEJ6wULVMh1gJjCtApZWu",
  "key37": "z9wWR7hTZmBCTZ75KQmvi2ERSiXGsdJr5bjaGz8irhZmjibDX8NA3qB3cW7VpAsLPHgH11UpTmTh4kjitN77iU7",
  "key38": "KSv2kQFjupgCLRJP8EoAeSAp33htjLgP19Mz823ScNTSTzPG8JQFyzAmf4m72cBHoPXLDobbw9wFXT7U472TYyP",
  "key39": "3atbFU74ZfC1iwAtgPpc5WiiU9KPNBXaXK7tYptK5bEmiTRUoy1r5tnQvj8ZaKeSsduuCWryQGy7ugRLC5QxUaKj",
  "key40": "2qwPUekp2jN5865q6Tf6RzegaDj8CwAq9LcFHgGtegSHPNTRgvn2eVb5vF95nmxQPfasyfeATtiP9MWmCp4q2dbc",
  "key41": "4crjNvxaLFjwAWCKEF6apUK1XFdbJWU417RzR5uW8d6hR5wTZz6VHaWUMaWxUnAo9uSq3PkeQjZW1ro5oHqRQvHw",
  "key42": "4wtW1qdV5j848snyqYoP86A2ttYRFSXowrLqYL2QbWrXTA5LQGF4NNqEFAthYGyebGs3kiXTJoWuZ2auQN8T4UJ3"
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
