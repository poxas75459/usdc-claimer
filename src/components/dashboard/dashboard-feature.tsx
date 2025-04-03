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
    "CH2BTR2VqMvjzbJMeHDUoE7YcjwzN4PpjHxGX9hnW9jkKiYnZohWaA79xidN4ZSqmXeXWUkUoVSeQDYJ2dT3Vzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42ZWQ5Liies6iRaMYbqEHSBTcsAtowcoKS7whpDFW9cvBi1buKq9oYwaK4WGcUiyGBYGdr8pz98iBoaoQW3Mkr3k",
  "key1": "3KhvKKazomwYeq2VN2s33c7hiojRBpu98HLXgLrmhCu466fTvtAPFRxtmkvMLWjiPfyMmYYJ53AjoLz7LmaMaXWZ",
  "key2": "2jwYx9HedoVFD5ybHhKV1tecw1umnppQ5GYwFDapfJsQgLj7G1rY1ak4zEKFfWN5oLjwTzXykF8gk3jtbrB9sPeL",
  "key3": "g9jdi3nGeBhq6Kw2jj5MK4W5euDB696vNg5a4pkPAKd8QTRchJ9WWg3DkPXTtavxt21EcXA2iwRdP9iq6XJLoDo",
  "key4": "3ENNDovUNLjkXkDZB9RmDhvvHJhaHQ7YKMc85UpRUHpfLrAMUx3c1AhzenyAbbdEuFAntj9dPtS2UxGYb65dzKWT",
  "key5": "AWWAwW5X8MZBAQiRJTXMVs6SSJPcmPHBSrix9Yd9WTFhYKhEBtutSjtqUn4rYnCzSDuJJGzNBZvapfdk6tABeCb",
  "key6": "34jqLbwWDh51sfGuZtHZGWznFwiSHZZ31n476scH6euR1DqdVZuw8Prj1mG3oT5fokTSMMHW7AQX2bPE661iTcJb",
  "key7": "3WTb4sXRmJvpqREm4JJqFuKcyNQUoK6dbtxVU5R9SZeNpZqTUnacGPW1qFwtvnhWBZdLWJ7CXTjj15qBEKPGTsur",
  "key8": "4xufvyjq28DBgbATytwLnTGKT3XQGwjQx89E1yq3gAPBR8HvsmdGMdhMYtG6Vm8XR9cFdm1hK1ko8NERHVgSkTTW",
  "key9": "25odMcmgGjhS1sUWTUhsSX1VgLG9J3jRCdYMDV4hQjTeZUiT2SKoeD6YueaNGYMPzHEs12LvQ2YBmmcNgenN1p2V",
  "key10": "kGAKFsHsraDpupPWNTLrV8FvuCyVJG6zVkZGj7oSmHbjWnFanAUcBBqHpMxA8vRkwTn8Mj3kqUweHa4EioYcsBq",
  "key11": "3tqw8TvPuYHEZL3xw731cn6HYPURw2hQm6jkPkLm2cTo71zvE9NsG248jHxuNiH2XFtsqEdWzmjtoA16iRjH8CcA",
  "key12": "5BfEVAwZLB7iExASB2jtQFhD2DRiF2oh9YfwAxnbWsQ5avPrW9QzHJESus7K1UqzQt7A4u7uperCGcAso1qtGVhh",
  "key13": "MDc2UC4ipVNhRURJPMSr8PWSW5AyhwEbXFHhKvZRgVVEYbZ3VPszdj1QW8xrTiUe7rqCPbNZdAbass6XQYavoQ2",
  "key14": "4GFgTQqhnKipkRkM6X8JKnvrPni2L7WYUBjWSCQBWup7odbpth7Fb6hGnLoYvgp4T9Z8NJWZqUBfmAhcz5TcJDkx",
  "key15": "2HE7RDBzP8pgN2Cu6owmt3ko1s8CJur9oUnW39r7irHnYDu2MxN3n5PGTQjz7L1PiYYc3gzBb4CUqw5rPMsX5fDh",
  "key16": "vBU4guh44i1gxPVYbRS5bfxmgTJ57RzowkDXgSAMn88zjXxqwVWKG7yDU9JuSAVdjsMg6umwPWNebRSdkSPnEcu",
  "key17": "5aRHPbQjgZPk5nnaVw23W1wzGp46J1xserXi4qemAgALw7u8oHWxhiyj9W11vjfPXwY92PNka9xBsvGdqE6vbgGw",
  "key18": "3japNeY3Fbd9GBKDNepRA1JpWLmkn17aKjM2mjKMZVqXcP6J341FYQpUN6ocgTQ1up2jydTPAqtb3sAGa27mz7TV",
  "key19": "3nLFjKBNHondA2G3RvjooGN4DYjiMsiyzqDQnwyUFP1veGqLx1XUaaZcDYrG1seLGvCGfGu9Rn9PaD11hKeYPHiM",
  "key20": "4wA3oRvcqhjyUs6PTJMLQzSSMtAXtCYsr9tXMCPfACQL5vfMAuwEdaMGdA9AG4W7JXZaLV3S29nFvdcGZLHLJ2s5",
  "key21": "iGZJFrx8SibdYRWTGE4BZBn34G3iNkc2PV7TtwpwtuPMCPWw1kpwKqnmJjTY1etQ7MX4YiEcEotePcLXHFPPkg6",
  "key22": "haQTNePqCfxfz4EyL3MhgjyYyEr81FDRb92bTG7S7dheuzotHbxjkh4bjKrBhQXtJuRXd478B394xRDEc5LVvDa",
  "key23": "5Ak9vXvj28JaFs22KsrB9FnZUw7iBcZcV2uGVURVJd4D3CFAQwEdwufSsSHhHibZFy88GeVM8Jofs18Rdi7PK6Vv",
  "key24": "46mRiy6X8P9Socpqe5gSrz4sz3UKk7PAfff81VMhxTt8uSXaWyfjX5vYZueebdiD6ocVU3dpQgQ3VjmgBti2iRnj",
  "key25": "Wy6AR2Kp8qmufxRZym8ydKmTurpGRAwbmu1cvkVYsFSzvMZ2AeZnrepPo1QmyuxrFp7Y3N1Z2PbtR9EKL4XFDM7",
  "key26": "3poD7ezUDWVeQTnF4Bo3UzgjnoiBRckhnnTByvziHyiBSVa7E7zEENJNinLAALjcrM5Nw4aRHNaGU6wDpUDgzuAz",
  "key27": "viXF1WsT4tk7r5UT9TFuMT4Buwc7eSh3JGSq4WoNuBsP5nSrbfHV4H28n9m7uzvzF6bAueeu3iyAdn4ptdzw73u",
  "key28": "PiFgdiUGp3FinWVoZE2hLanuM5QUGR71x93MRPrLSn4de2KvVqPPdCmNG93aZhf448hPRkqe78aL6jaTwd6n3eC",
  "key29": "4b6PeRTFNJGKuXoF8v9Ye1yRuier5vJmPBBAZsDJk1UspVxEWJTiPf1N4GTNW77DnKDKupDiTVqZTq5F3g96hgUx",
  "key30": "369HsttrCZ6bi5rBdvMR8jKFy6WXMVXWffdqzM8CQUXgmnCWErWQzuv3SAhEXd5kGkhJzxymEtYHrhxyhBWGk8rQ",
  "key31": "2kbQurjy7b9RUL9nKUHLQpWGx2AnnvPxD8ywaDg8uL3UBeQmkiwMrX4o3oPSpbQiGrXvw6ZWLadxS8Hznh5cXauf",
  "key32": "5zLuezhfKMVJHsRQQJdgsfRrRfBCoczUwZUdH3KHRZ4ibhwNjzyF1f6xFDTAAYqhs59J3Bdoc3qhoVtJniTS1rVG",
  "key33": "VXjmbWE7opo8FBNhM2GUsz2UqruFeqFmguyKLqT1dVLYhMksijdmWU7o2j3M15W3Baaqk5dNS6SLkMCcm2zgMGY",
  "key34": "4JmXe2UZ4TBP7mEfZLwgPZZX9Bx1GvMj4KBPWJqBsMkeZ23YRAZNiCkBXqrn9oX8AxcscgdaJygZ3HXQEKQe9HNk",
  "key35": "JNKCuxrx7KNcpMAHnhREXA1W5yEcRPEeqo8xYoLGZw9VGcqrGZ1QTnSdBb2A153emuhMnSfmwCGrsTypJNxqqtJ",
  "key36": "2zvg4SoYeL9uM1PFomjScTnB3Xp2EaVMmj5Fkyshw9d4N4m91UH1N7RkYJLKvfvvgpVWx2GGQ8Vr6ARWRe9xsxwj",
  "key37": "2c4spx8sGyonYktJ11SeXKZifC1UM3rziuAqmNw4WY5vwfVqvbKcCQFgjxZz5J2H7nkz9VTQ4p7GDxe33q1mGZEZ",
  "key38": "4QBgKyBcxWis7JmjuFH9LoFnebsbXv3NU9R27YGmCEE3Ly4ZoBGdTsEiboG7acYo5K1fFgQJ1bGPvLbYM6UUJAjk",
  "key39": "2g2EBZFitD5vVAx52ZcvKSBcGUZkURt5TyojfesuwseGop2yx5LdHQfKD9qjZBeiB7qiBRWkfsvcghA6vHrcW1NR",
  "key40": "u73aHLMCraUhDh1WrWJ8zAD6JJLFxXyn8v4TscYQXqsmjwqnkWA1HAD6AQkWcs9ssG7Nou6VNwLkxu7hTM3gxgy",
  "key41": "2dyQxxy1BSnSSPjEJg2wWt6QjW4LvSDpWrYp8NMeBjiM9HBBgQYZsjssm4pn9jUzX9RDne4ExLKCK9uAeiMzJyjD",
  "key42": "3ZBpae9MLpL3Ma5YdPfz3Pzjr2JYt2nch27hzVh6bDe1eXp5hV8U18MSex5K1S55rXFuRBx9wNVai1HFZzdTCLqt",
  "key43": "ALapPumXC399TxPqwbae4onNKrBJcJK6jrbGGBEWqFsNbjeQXaD5gWVJfAa7Fy7obu1zJ91V9JHpJDYZeyp85DH",
  "key44": "3YPsrB7xxKYXACof9LHkdqgLRyiVEVmK8xhN66cSmy6zAqEyno3k9S78ECPtG52jcFZC9nU7BJ1o3m9CioFLB2bJ",
  "key45": "3BxqHvUDaRdGBC7qUWwW5G7CHM99gAuuFugDYooEQCF4QXF5YzSC5g7sjd1ShuWRK5j75KAtyDGheu9TW4EBtqro",
  "key46": "3a78abgdXN3HV2yxeGmwVhSMkwnfXrjLPZgBD5KBHPLnBmEEJV95tTLf9JLCXLkzVeEGkQsCzHJxJLWYKbfYUxWN",
  "key47": "3PqXVqpW64ZzGCCniLraACcCSZz2QGtLySwmgMAuzm3iNPgjDFyGnnQMnxHRDnfy62KYGCEN36zXRjsyVHCgQLx2",
  "key48": "2Us5Utqm5rYwyQcL1A9BJwLVWVH9VVqdoSUtC1WtyXz3YYoFHVj5wgoc7rsjuq4bESTvks97QH3Tomo1tLc6YeVX"
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
