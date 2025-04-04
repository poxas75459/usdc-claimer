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
    "4uCHvqwqwPUzGqnRZvokPKd2hM4RuFA15nq3m77ZdstppUnCPfzYr2BRwLcLHUQNenWLQS6uWwE1hJ2PftXQQXVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1ZGt1iBxYhyY9ZHtzRRqSGkh3W4tMfhuD2TwgtdJ7eKB7rrDiq1w7yXCbpPfNNvKMd5PviH8dyBk7pEHotqLa4",
  "key1": "52wfSWmRgmhYNtUAQC5mspScBcHSyRLwtn7kc5SknWR11sNmyJJWi1jLzAkXGxhRothVm6dqyYXHWQFFf85gMYES",
  "key2": "3NVnP1Hx6Z6QVCSwSiec2Zz5bJFqiYEuKp1UFVF6ayUkVYkBhYfwF8dBtBjbv944N4J16pFjLjgeAKizjivqzDYi",
  "key3": "5FkKydL7KG32xALwaTb53mykaiJiZ5wcU5hgbhkUV5Keoht99UsCqQVPZRwmFLai9BLoC9Sq2QM7z2KVZjAzUdH6",
  "key4": "3nBb6pusbpbSCWReVJnSCP9a4qYuUJK4qu8dJNWTKzufzKszAQ5odoCFasLpHxmiEouf1oFP3iDkyRViMPbeiuya",
  "key5": "3xMu2NGpFs5MAUHAbUS2tPSLGKY5J9wmj7Ax1L52FH85sNDjFEewLaoqZxstSJyeXkc67R1UCML2Y4KUAuCA2dQr",
  "key6": "5GVjdeHd4ZJp7RzNsysNKqvSAXjXQoCUYf2xCTduhx2y3s5tViYfRzXQAWQt2Eg4mHKGRhpvdQVbuqXa4FELjUcZ",
  "key7": "7zJJz6Bjoetr2xDPUkNWdjyASPPLp6gZuvcNm9TiNsNJngQmH8TieUJi6kmhi6uqSJ5c6jyHDtbEcnLsncDR5sz",
  "key8": "28njTc4C8oa3k7QD22fTYnmaSJNMBmwbjfWqcsrrSJR5B3TRsBpJUre7wL2kgKayu64U4zzhKKZaQ6LMBJ2JFp7x",
  "key9": "2HLr5pLyb11EFaxMx5sfp6xCM856i4jjAtBhobYJoLPeP8YCDZccLPU9EiVJS73SgweHfM7hFhwfFS6M5dmy1cip",
  "key10": "4zV5767TvGvt5outk7TGXLYTttD537GxavvLUtbXxgWFEhAhPYkMvTj6f2bioBZ3A3ZFgWkqCGESmtccWievNRyn",
  "key11": "4h98QFgpTCypa4CNh8ALCKuvZT738nUh2KRGoA43TaWNgAFvPxPcefNWh4wtaf4o3WmV3LxonZVzc3Pria9QsjXW",
  "key12": "YbJyq3Wy9PG2NiqUxnw7y2u1ewa1dwMSfxBxvktwznXo3QfnVoyzb3uXzCJ3fFF7zqGyVJy1f45UnM1Ns758Vou",
  "key13": "39MRYPjZQxk1boq9QEZcdiUhHggCmJSfvV5GPAGYHhHEnfaBqR9GapZfxFKUVLG8qM4YG1pgHzBwGUJ1qw7bafHp",
  "key14": "4ebqdYwyWSky2c5czpaQFVzU6oQqyWUDFriCJ6MNo6tnVudc5tJyUfCeG4SmWTaK1HCi3Xv2xMz9aC5QdvtqLFTs",
  "key15": "5ueSTXDJpnH2DK1iYBakKUYnwwonzzM6gXqoZcPfF1sfwQUSz1TN8XD3BANepDbzDUGTsyuvZriw7EQJ8T6SjQvw",
  "key16": "38TxgfGwEgSGb87o8x222i1q42ogyx92cQ2cQCT6zjnYFQvQMTyQRkDLSkrfckyEjxT8yTMPb8n18ctNDQyd1NTo",
  "key17": "jdnUNfWac1za5bSjH1UPB6MYDTWfFc1jD3gp7RH11Pq8qhUC4Bgu7CZxwT4kDZ3ACwYtikKz6x2bKP7sRDxKQux",
  "key18": "2bVj234Lkc4yWrWNxf82JXut7Sj7R5DQVUCXhzbhCicSKTFHG2C9HSA9JihtJJECwTZgFcJbTvazJY7qRQHQmC2h",
  "key19": "2cLet3bvamC6wBzxWyKXtN6eQySEcydk5LrGFUhCYNH9QU35iqpou862UFm4vjxd94M85Tcp1fep4EXgQFp5isrV",
  "key20": "4kC26H2w4bBdLichV154Q7WxJwqM1fo7g6UDgMV2dz9fgLTX3R1fbQFReRiQjeFUzuZrEUpqs9JxkX4F1jNykPfK",
  "key21": "4zxrihtZxjGxEce99MntHNZUrpH7ReRX8wqCBa6qW5omvt8Sj3N3zbbZRMfBg7cvzxV4VPXThrRqkXGYQeKeDS51",
  "key22": "2boDtoR1UmZKz9zprqTMg7suMXt5yVYGBeq35jWUgmT2h7b81ZCLyAFk6YMU2aKVnLNz3rsbmefh7K5c9uK1icm6",
  "key23": "2RtWeFdZbZ67yq5sFaGbhJnmNqUkUaJXrfmHgaJMXFUHx4ancMnUbssmbmCfaQ9iPhZcsvaQyuCLgQCHxrFaNGXj",
  "key24": "yLDQvYZNSUCrAz1HjKhAfCoYSJdURvjvfkeHBfWP8w68ZvchBB7YbNET74QhUtDtW2Eg8NGxtVXPf9pnQwnckma",
  "key25": "3chgk6wWyh3wLv2ryqNq984JRcV9c95KqyuQ1TjRTMmvXdq5VN7DYcJ5kZ3yncafUCUqVJbDfx8hUWjyozu7KUPh",
  "key26": "5MEV7KzizVPjJP8yxspLYDFW5orhsuQMuGUaPtpRUQi9MXnLgrr7S9825Pria7viXEjE2To3WJBmcmEWbsfyjn3f",
  "key27": "26ZLCuhyCiDnUQigC2syAVj27RCKjwXtEytojpbagULqnYzmoPhMn6198A3RwapjVxv8tEQ7Mzqyde4uFjvERci8",
  "key28": "41im8Wyjjixa2YZ9y94DG7est9oeYhgwkgZAXLijYCe83Gt4iuikSoWX76N6ykMRUhU1gR3gt3jBmVXNmZrhz77M",
  "key29": "5uHjn4CfyJKZFymLY3r8Dcs9i5VSnuCSYWrgtMtq8aihEhCdoAkJ4B36Azz4oUqXn89MuUxFjRZhnyX1ERb5rWGM",
  "key30": "5MPYVrx91TBDsisM9gWbyK6ec4xA4FAUDGwXkBLBGioNsh9GxnPLG7MdwUKNEvv92itGs7Hy4BZdMWGY6LBxRvTv",
  "key31": "3BqF3bab1wkeqbSqdRYnvKga9CApCwYkYT1hnGCPBWFuX65rt6BEyFswc6BMk97aPZM6NL7uaurrLmcDFQnGPfWm",
  "key32": "5Ppc948rFg3VEgmJunmPhL75JUfQhjFwrYdZbHZ5kwvFbdFXgvsh84HA1aToh6yWzjQWC2WYZgmAS8kvDEfosjbu",
  "key33": "2LNmcLoNwrC4zUY9UZumbyPUdifZPZvsZXEDPNyDsVA4eMQM2FoxozTwNrwErcJUvU3MQb8zCcQnhox75Rx5AX9T",
  "key34": "5nanmDFRoohnPN5Yhy9DauF4BrbNt3zspDhq1ipzkefMLxhHkQvYx4xkFLxMai1jhd6zpwuRkGYZTRUdG1ct7TsH",
  "key35": "39KtFAbvcghtyYv6JaN87c6bAoxQhFTSKFsjssm2t5d8eKxu5mWQvrN4rwkue8X3LiL6t3KMx8o5nwtpPtzZMJGB",
  "key36": "51faVYnvikkB171LK392mNh1Coxir5FWtmpdLPEiV8cLUaMWuDh6XsVAZscAigHpK6v5pYtKsxrHoXPFQxbXobdv",
  "key37": "4ryCKf2pPH67rZV8UqQWuPjFhAKQeF2qJuECUPycMe5FMuXbYzJUWe5nhkuV6Rk6GgTcoemzBKUKQ873zzEBt7v6",
  "key38": "fPvhrj61dKUP3mSCF9AXCxyWetqUhPx6hKbmrE4pJvzZ6uknEhUDtdRxyV5RWrfRx6LdnkdSy9NGccjvoh6oAor",
  "key39": "3mHG9wYm3F9LGDvqyW9VC9yQX8k6x4jFSK5kL2L8MQkfnw1Kt28Vjm4BiiM3w2Dv9SJtxtExjDczTytbCjnfrznn",
  "key40": "D3tnz2dtvpEL57HEHrVSFST6bDnSgmfGBHuftuiKhkpc4XSCLrZVmfTmZtnynXrMxMbvK5nLPcMGqQFw6QTkq9L",
  "key41": "32G9b7qzQg9Q4n9P2HPLnXh5LD5dQoLtFVPwdzLrAWbBsFL2MrFTLeEecnYABWh9BgjExEyZUcBooYLDR6q21yzQ",
  "key42": "23YrdcoEzWA9BDTXL8qSqQUfLdAhnbxrdJY3gjq4FN6WcnrXwenp2fe8sE4EAVY5W6AuU93wvnMgE6UTYnaBoNsq",
  "key43": "2Euk4XEsMKyUAK68jh4KFThTgsQubiWy5RdKVBXJWLa1GN6nKteMeSsYx4KbkWN1ZjrGsLzqxGdbNL4YP4CDLaLA",
  "key44": "4tsAz8hySJYGTBXkUmogX7oC6oqUcAfivKEfuFYpRywhgar4LCEsGLG26M2sceXJEexgWNPYALJCPZaeBBmHAN77",
  "key45": "3JbFY3djvkCGAq5EtM5Qw7LvbTDLgKZhGdttURL7tPgPa9eVmbgkJNiXDvhLEDe4yXxoBLN1hLGEDny9Yj5wCZLC"
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
