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
    "4NnuGHwPxSqdRrFDbrKfvucvxBuHXv8bwmCmoNRgg3KZ7N6wfXM2DV6HE6zuEDj6M6bVqFmUN6fsDsZz2GvPZq2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGMYoa8UJNruHcKBBuEXRvG9WTrW74U8cctMupftFoxMy8YJQSXiZwxF9cKq1STFq5aUj3MqFuQJ8PAy9erVKzc",
  "key1": "K81ugudKUdFRiRmSFSpr4tZAA42fZajdPmb2UtSL3DyTaDEJrkRGtjxJdwo9CVR1zR24ZQrzngBuSwk82vowuFs",
  "key2": "3JC9B5tBWAhs54V3ofJmhcRMunPDNtjt9wC3W9b5u63fx7oznQPzPKCQ2tJxBuhipgy2ajAMkHskCF2zsPfRNGvT",
  "key3": "2t85BQ7EuCshu14gg7Anh9nWtnEQqh8J39b5hL82BQ6aAUY1bgimkzbfvWzbL2Jg8HeAHQKct3bABFXYJLwFK1J2",
  "key4": "PNkB5hfJqb1eKsobCsDbhQdXqxnA8EBgWiRf9tQJZq1M5m81MkgLVPhQgb9PbgyE6B1w8hfE16kkzMmtCkYvPrN",
  "key5": "1skWgLTApEk84UHetzVYRVfmsx3Kzh5BhNiopVLkLJbJZ8H6zirhJW7oib6XunJgNEiPSGi1xbJTKqoXkc9Wk4y",
  "key6": "5e3nWwQBhuVKHD9ZNYvMotNXeexkvoinjrLzGfTKN52kcEAHKyFLCBgAhfnM8vBBnvePT2qcFhnrqWSooGD4y4ma",
  "key7": "44taZ4ULhHpKyni1nMFA2Mbe6X14MvygMFnZ1cnoVVPJ4Vjje2TiJ6t6L7sStg72Qamrbai8pxvrcM5o1ykEee4m",
  "key8": "3AyYBA7BsMxYab59wK679BvobJwJUobdHnT5MjP2FXpVoVXnfbHLQW9y9tYoTcUS4E7uWAHBgEXRTNmtbDMFdaKF",
  "key9": "2FwMeHDNNraDdj8vwYQFSAxP9rDCA26VMnSBky8wSUPcrfo7sT6Yp2XLnDcPmA5Yt2rNiF4h6tMDbnGjw8aEZXqo",
  "key10": "3K7f2NbdY1xvYVdxbH1ScWmUZ3ij2rwjBb1UkHiuvarvQH1K3GzLLaxaDn9fenWS5N4J2t41Zzacr2Zazio46yKt",
  "key11": "5x39aQ2oPH3SUejJogPjbVK4sGpmEVwm1bpnu97aGGFCjJj1ct3SSgmryyhMXDk8jNAH4mZzdKwvKhk5xCoXkqA2",
  "key12": "2gc4StmLcvGAZoqHdk9NfQovUrM813PEtTdjnupxUm84Gmk3G1dFGJrHJypZgLgr7DLz77ihqCENQC9aovNmgLFj",
  "key13": "5wZ3vzcTwf5kdxzuk4bE33RJ8w3M2KjBCpcLcJ2EZxAYVxBpjBCfqMczb8yH5kMLwYSvYpLtyJ9bRthE6V5aYcPr",
  "key14": "5Fr3AyzTjJaTY6fdivfdVxViym1TgpfMPQJ5BNdM1w5GYxbK4HmTE657RWmnEZpnPVGvmPgYznfcwn6QPn4sPzLo",
  "key15": "5V29rgc5prXvumgj2naFw5F9tns92HsjzF4rNqLhbNtBinzZyPLQMBFqUVifyX6ekdBhB3fJnVaeh7eZWgVWz22J",
  "key16": "3X9jkoQ2cfDDrxjhb1iaLiGai4ARcbnWcvQhT9c7QSpP5MJRpVEPAvzvVfj6nRPMVWgn4wX62nf3grGGiSWrVBku",
  "key17": "2UWTWTPocoNcw7WkCoVn1TgJdVQMc98r9TE5qn2AyzwtWD3DppycEC2mM6UuFLqeoKTRtSWxVfqoEJYRBCZFaSek",
  "key18": "4ydLy4jueF2yXeWUapoAjjXmeFRrKZV5Lr8wdbyBLofDTfp9EeBi5HbqjinaWY2rsNyGYnDoymRhPHjTQWcSw1nm",
  "key19": "4k9QQQmumAZeYbzn3SoCKe3kuUzdkvsj4HPfwcNi86h1xvv6KJS8LuUYLEopndZJ4EqeWjWpSrBBgwkKBFnWzp7Z",
  "key20": "tfasbvgo7f9asA7uV33uEe4rP7UVzbmPQ2eGxYXh1oLRZnw38qYwZfPDyFE44W2vCHzwkzZWZuUJ3mnvRzaaxnD",
  "key21": "oLJmCqy356VnvdDtbre6HMVyzEjpXh4f7grK5wpU6424tHAMm3Tz4vvdirhyqJAs6HBsZbkWuGd7fCYYDz2ddcr",
  "key22": "2uE9XqTSkP6bcTtmG85VGsAVfcnTGn7s16rtbhabSA7yXGTjVRtihbL9cPtT8c3Yp98nDQRXBzeU4DCxkzzMnHoP",
  "key23": "2bcwbSGQH6UUPniNDvRzNgNzYE4DesniFcCPr9XhJNQMoCvC6Njw12zHLT7FZsqbAiXdnd1BuTvtX3k5wZKDBZk3",
  "key24": "VRBQU38foEysahTLSn6U2iz3tLLZ7zXGT98tTQ9SpJU9DinMKw9VUE13MMLL1dTkYFn4NUk9oUwvXybCZM4uGoe",
  "key25": "5LpE8USxfo6kwmjfa7t3VC7osJNBxChrjHDk38ysy97LPuHhWXDFMefE13hoQWgC4joTnchAGevEfy1sTUJmoaMK",
  "key26": "4sJ7UGYm8HUmLbz3ZE7oVsK1iNYYtrJseNu4ywf2mPWSUKEuYre8wg3KmhWmiXgKGsy7mjYfC53gZVt8br6BngJR",
  "key27": "cMvmp9ojjH5eMAZCsLbqR7BTjSBbm7xG8Qp788ZxzQNJfHtGDbAUkgzLr1rXWqnReG7Ub6rDhcyhdMNsg5BGGow",
  "key28": "4CqfGALX6Vm7MgGhFD9q5E6p7V6HY1pcouTKDC9AxqDvL19RRXDRPaa9ocPcj6GXTyqAvXwLZxfGEdzAf8kb6x57",
  "key29": "2s7PBzsyXB5Tf1UMHNavyrJZ1NwogGmoQCqz2yxRwWWDeS8NfnDJ38MwbTWPsxVA2EQ8fKxUZiRw6eBSGYTFfL7F",
  "key30": "3qrMMG8xBoaC3vCy4bZo8H6hkooMGUg3gNoB5wuZEM42ZUZJt6A613hnne9U6Vk3NsNgGz9aw4CBCK8ExwzmSrNp",
  "key31": "2NSi7Xtxe3eDKZtGRA5MAkjVbsEtNhzRosqgPREHgQWcWKHVMWR3YSFKcoUHRauHpUtMWWKygFeGey36pj4YPLvs",
  "key32": "5hexFBBg8PoafRbb7faDBWEMcV6vvmQTFnu7yptuFjnP7mMfdtB9hzRYV9R7C5msSSc1mYRMRNTf8bP1pW1y5JwB",
  "key33": "5iq1JkqwfLoEKhGzprmpvuMrgb474DhbqC7s69LMD8nZFCK9667qLVwihG2g15uRfXmmXeAxyzrdiinVEL26utmu",
  "key34": "4VN3yNSb9y4LKC3hCkLZrrYbVvFpCwJ1eWqXPwZPzZA6mNMUXLxxLrf8c2aTVNsmWESXwnmxWEPf8XuYCEaodYfb",
  "key35": "3noi85eYYGrYucUridJybHTUWR1QZ6LUrH1gowQygt5H6G2wA8oX23Xq4XwJo6468ViizFFtLK32xGfNf4ATVGkC",
  "key36": "4TNA8dfAKS8fmWNrjjEkrhnyRDSUcGcakVTdAX8vk9BuESvxFZRrq1hAzWqmjjV29RkTBxqNHcssk3NPMEkpyjYj",
  "key37": "9AHmtNSnfST6bcCx4GwG8EHeV85wsY37gMhRA8UBvVbQ6EqL4zXqb5wH2Z7anJW8hqykhNNaSBL5xMRuzAVf5Sj",
  "key38": "4j2LRqE6MnfTh9WiWiL2yBH5QKpxinBPk32QoyHmX2daPJaHVSRagvrnHQzaekHQpLNYAu87qPB6evtQcqwd5zak",
  "key39": "AJk2tMAAnxmH2MZNLCg1eNHE4fXFzspyZ7fJU5zsF7DVMWTui9zEGoB1qumecBQkrdAzQAWfGnTfTJ1MgWuqWtE"
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
