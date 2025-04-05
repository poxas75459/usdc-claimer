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
    "2j7694zNBHRQMYaBHRFooxbJaxYJnGvXSDbBTpG25hjJzURo8DGSCwqWSjr17QoacUPs9PkMJT2AWBzKj92fgK4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oy25iPfsZSkCetWTRqYXvhHG5ya9Y8rEb9fXPfjqsatMsTi63NsvXaZfpiJAHgoSB3uV75W6doTwTT95QUzaVsW",
  "key1": "45Sx4XxSjpke6ZK56jzcNBFCZ3w7wD7mBbNQ5EVdoNa9yAVXpVLWEn8q3yUFFFWWvqReszF7U7hMfJiqiiuuLwig",
  "key2": "8gnTQkuPEBKou1omNaX4JegHJpPi7sU2u22H21SPZUf8AK6gD7jUampcgV8qoCXKu1mriSzZW7bZnPwwgUuoW1N",
  "key3": "4s59b1AzEtde3BoGKq2DjSAF3ed9SpuFjyMagVqsADArVPjEpMxoAY1S47spvbCPqbAve6uNjAQ14CkEoFhpCzHr",
  "key4": "2heGSBEs4fmKavFLaTRE2t2YAtSNyVq3z4WPC9A34YXSgsaaUagGDjYUwpPxgNpJymzkcWGUT1yAAY2nb3jFQ1A1",
  "key5": "3Q8pW6EuxwRtFhZxNbZ98sTvbBpsC8aHqk3si14qXR3WR8qnnzUeXYnUcFLpm8Lk32AvbDfwvvW5bR4BckFtCN4e",
  "key6": "4B5av4cgxenFPWArpmi8jw5w3N81AdHfcbycnx4KhN6BC8X2ur7GZWC8Ksd9baLad2VyJ8L8HEYDsSMxZTCHgg3n",
  "key7": "2yAjMizw6921WFhHQCTNdsGyvfd9LQPHjJXaMEniNC2JB7ZauAdrNnAXSvmuELai984Wc3VUA6pdUw9mApecXRGA",
  "key8": "UCyeoHz4JNMfARTAGdvtNma11Sg2yKpou16bh6nhjVt63sxt4mYpxBZfkwHx84upfMqUShW156CvaRCTNk3oAz4",
  "key9": "2MJYbBaJjpJEj32qpg3u6MYsEU9JkojfBiXnDGTqogNyN5PXnDXeh8VZCq4vEh9LJpACTUGCZRyvaMUvDsWvod31",
  "key10": "4vL7QSRYi7e1aGFPdHnE9pHdTusLZgNvT7eZrbQaFs6yGoHDwow6MUT8aNuZcRYbmUjt3q5kKenB2C4ABF2rFHAi",
  "key11": "4DH2rrQhVz9C6Ahvmkidj6fmsja6K8pRa8XLiNFqAmiejt6oegRtb9jQAzjhfYkqvhaBj4zDWbk5VuBrJA9WYeE1",
  "key12": "3Jz7xMiQt1MbVZfGUHNfvgrF9BwAKfiWn28Uj5kuejsJYL7995FM4a6hSR52ztPM7X678kqbEaX4qp6iPJZNhi8b",
  "key13": "3MCVVRh2gsvqAs6Ro3GrvUbZBAtgRS3rgfEeNy7satMCtv8PcmPxYCAgCPjiH5XM7MCn4JrjLC3ChbkxurJEUVTd",
  "key14": "5m7sVwCzRkDXHA4ZQB2NKtHwSoxJeBcrjhm9iEuDKXLSkApPrq8QLNhJPpHVUmVWQHPSjLjHhLJmXQMkMd619oV1",
  "key15": "bJHycJj7HD7y1hYCcWwymeBXjnmxSXwPg7vH32nywAkcUmrYcSgnGvEUVGq1vwNSkuwB8fuhL7AWEGX26dRiBdj",
  "key16": "4tUo8W6kCt6pcKNeghj6cXiEfMAr4CLRbSN4QvXc8sXQX7emh1HKqcLH9E78JNbPHSiiyG1dFizjqx4k8c1Vhf6s",
  "key17": "NBjS3rLUF75NUgoJcksd486c9RWGDPJZpmDQMWu3M3ZGrJeJ2TVtre4g59P7Tmi6yVwHNzcbnFBG1DuxTkTnXg6",
  "key18": "xmjaHPgMrz8WHV1kdYHVEE64oUu16DEyUgfFbjfvqbpoRRSbxgrMegT1Z9YV9C5raTJn2ypgRVrwqwoSpt39GUY",
  "key19": "66zFTv9waVE8hMr2WEy3VQfUDFGtnsMwa3wLSZSVQh4TCrxh4JxstqriCD6iFzg5Po63iEF6A13iTbRsW5jEsfDH",
  "key20": "5qvPENxC9fqCCjvMuPnqxWQTxS59XHSmLBnQPuxqGjxoXG1gYUfFo6KymGzd45b6ttVNLxGbJgTvM2EJAN7AtFcz",
  "key21": "4g288iTW3cSB9Y6pTC8caFPSMV8dH2NATchMv5XDWe5GfEEX7n8R1Ndxzavg6FxDvrM7Q6PorVEeEVdiz3pHvxmb",
  "key22": "3TyBh1JsmHjwcHzgxUhD62L2ZH3zvPb6mttfdTsK4X5rQ7Bkvw26mC4A2oWB7oY8qzdfeVz3W3DpejG1zgLMkfve",
  "key23": "3vsAiufnqvwCfU4FcKM9xkBT2LxVaCkt1JKeyxQnFK1CnQaAYNhQ5uJNuTUYF86hebryeR7YpP5Ess3V9BCyserL",
  "key24": "5ZjgYawQbPgUoNukeUwmqPHk34mWrqR1HXSHtt1SdMaiLdZZ9xgDzbr6BpgHs41BNR3RanDf1MJ5hmkmi32YBgoB",
  "key25": "6AbeJxzMdTsRhe2CHuACZwNbFbgvnFUQTztM1dmWw9evZ2DAZPSTV9MfnY5DXPW5N9Thim9DnNiinNDX19Xsj1w",
  "key26": "67fAt2psDrQc7geNnZfUiXdH8DUgX3qccKg9RbA3LrRgBntXbEKkZopM8NBQkNJNV41cKV6dMbhbg1vTAjzVCLxf",
  "key27": "W3645NrMNRzJwboYqwSEC1MvKFVBmbsSedqb24kgLpQCE51RB368kJM7FygRVvinqvxbvesYzCJxutbqYAu8k4X",
  "key28": "66Cw8aApJFuUvaPYZEGLkk5mgDH2Fh9VzXr4YidMeiFcmuywGNA3hq2CBaGNfHzUFzmmQ9XwQtr6mstNhr2B8inb",
  "key29": "3Ki6sme34ZT9cKkwq39u5vWR4CiCuThGHctfTPSLDXfMWdehWSGHKsHZDDTdkWYSeZxsFFNYVNQNr1KKWkN1P1Fe",
  "key30": "4FCbcv8Ujw42kaQiYNvVY3VXNMz5KbbsPETWF66jSuUUf4DoqFfm25cthPuY3ePWPEWd6hPuYFzZqSosXBSH8C5o",
  "key31": "UKLtGuRQrHYGBNdFtsVPfuvw1AhVd1UkmodqH7j5xsMXLSKXxFJyELsg8EoGMZhYiEBes5LQGgs7zULSewit9UH",
  "key32": "3aPK5QP2PwZAT3vqAybMsErzfufjksfHhd6jFkd5WzGzx2gYism92zzfeJ3bD1FsQJGktw3FpA2HGnYddX6qyX9m",
  "key33": "VmvFoaWMKqWLebWw4b634arwDmy9F2tU5HoqhPxxmsWJEeRF6jJSMgGz149736EZ3TNY5z5ZwhzC6oFCqLkfBHu",
  "key34": "2k3kVhCHky8gqdGBAGzuJs3eSjnX9xABxJsNqPbr2g2FJRrE4z9hYYq2T23bS8P3XhbHAtiiDThU7yjxd8NaP8kV",
  "key35": "5BXFYt94XjhZvKWZxYkJMhD2Wjw9N8t8cgvuU2PRg2xaMLKoi6DK9BMVoy7sYDo6WW4xBPKJyPDnRh1FKPL9Xmi2",
  "key36": "4rEXwqPALFBWTZkbA26zsfGkhYAnhLDDWttVV7jUKs3GQspN86xGCUHSXY21ZbCeJvbaTzCQbS4QQbEDdCtPKT3R",
  "key37": "5wi8ttD9FRDbGgVTzuLFFGRFsHaKGAYdNAUHXnkPLg2b3CxDgkfrAHXaCVFTMXRau9kni5QQbVJw4WMuPu2zRvNN",
  "key38": "4d5c3VxkxTFiGhpcyjhtsoJgUs5pNf15aSGN5zzaa5GiZzJK9p9qqRy2dZmgUKKBAfoAY9co4jasXppgh3wCKxFL",
  "key39": "5JnxipW8Rit7KJ4wK7zf2XQcDCAkUCzSFWgEZspQAMgRdHN17ZMSLGd9ZjuX5YGzNAx8PshLgpQgMHLxxhmeqVjq",
  "key40": "Hmt7P5uYoifdyi4s8iqx2onbgjpJJDR7GNLZku2XyvZL3R6qaYZRTv9mQT38A9Q5K9g7zBxchgYzaMCWgBckxhP"
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
