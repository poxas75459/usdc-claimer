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
    "5p6KPX9D9YnwwBkLNWTmRHjfPLtdG7JU2YUcoQKM95rUq2h4aJgiBFy1Xe6g2JT4xiDP3pem3C8Ss5CwntP2myE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n6dc5VSUQcFbB9ohtoFgXjk1faRqBYixCuEMp724966VmLybVmBswB9LM5gcndWhWoUdaTwRhFCKkh6BRWiK63g",
  "key1": "WdQzbyDPF1y9G1yARGUsFoZHjRMzMSxnWJkqj1soHVrgP4VQTkGnX5Bt52XJLHgD6NZ2n2wbzPQ9d9FST8iyafr",
  "key2": "5iRJDeZE1b8CaqjarKJ5Jn5DC4L5s3nQAjNbvb2iogURkUQm2jbCdAUruoFSjNmi9cLuddjwDa9bJ4qjfcLYxAJg",
  "key3": "29xGvaTUF9Jp6C2GosETDjy5zKtEFBHBZEkZTocMUR5veVYwb9JDXo6uYNfA1cevPErMWtjkXLU7Cu9vMCLMDDRU",
  "key4": "571QgzQBM5s9tjjuEDsvC8AYBDFcM62ZhJ8kmx8xuZifZkEL48Az2WV5aZsTzoUPGgzGQb33WFzD6JxmrXTq7FYm",
  "key5": "4jZFYHXCixB7WVy4Qqg5D8MUDLk7W6HiGSvjbh11N63EVFBTbMD9Mqha8vyx9cAbzCHr5ZT3YVn6o5vLV599oLth",
  "key6": "2oatk5CHuNasrTxKAL4uLuJPmG3QtrrtwABxmdy1jjJRZgY9tgJiTUjR7UorZE2B5a71vW2vW1kwaVXXe1K4uLzX",
  "key7": "54Kf5gKLv2spxjnbimjEnc8XeosBdHtCfoNd3SWcC3zoRrUMLjWf3qJKoNLhiS9GmSAmEpuo5eZUJsuzToRpXRes",
  "key8": "2kDwxHC5kTy9TszZf4n64KSwXBYgHrooFQKThPDMAUcgJVYFG6KdgdcgoJK2Y5dC7do4qhBedBQKeaSn3JvWnpi7",
  "key9": "4ittCmP2yPByDebzp26i1Q9JmGywbWuZ3Mw4UUXbuv3J9PTtfYgyVCABrSw2aG57K59wReno3uPFmt8rG7U8vHf6",
  "key10": "2guYKB1HzLYSszHxm6CpadVKmULn2bVwUGYBpdGgo8JnNie3gwJFgVCJqBLL36NYkzpJGytofztXT4ep2SMqxczT",
  "key11": "28RRrGonwAkx7c5tqg2GUj3mYFrQugifWTezFjcb6pprRN4MV9cTXyfhBiheFn3sZuGXFWiXUPd1auTcYNkWPWku",
  "key12": "4mur4ZMkAQsFM7xgNY356PKbWHELyXeJH1MicRMJg21rSAsUpfpGfKBZrdvfZqsu19L98eoF2gMQf2AW4MWY1yFN",
  "key13": "5rxYYYGH1k6nR2PCKdVRh48qRswXKbXiAkTTqPmsuZv6XjPyYiSnX4LAAYxxNKQGXpzmr1xrEeK9ihz2tpQouMMg",
  "key14": "4yY5w1QbeZX9CUiktJM8FDFj3udrPyUhsyYYR5z3EHTgMY7Mo1NhmY3hAysseMK45Va7VUiR4gHnCKxWoKujhxY",
  "key15": "iUNUdwi5sGGA33mPiwFcsP2XFAmHE1VEndLksuXWuj3DDQvVAYSfbcz2qgnoE2okJ2Lpx4HAWWFqJecp6gNPr1B",
  "key16": "2UarB4LDmqc9PwBYrEQcYZVcyAnLV6qNcMNHK957mN3Rf5mRGdzXKSaUeqvqT7rm9gnxBoYLijQi4PAFX6mPicbM",
  "key17": "5mP7bU9YgMAZmV2NUQdABdmWwy2f3gvSnL8MaAqGawgsdoZepnsw2m8z5Dy8m72FH1ywLf558aT7HNiUEutxLwPL",
  "key18": "yhXa1dFwQqWURKi9r9FVuqkyduPu5rdG3Tfe2fKLM5Mtty38kdTS36W6yAwDDMwCN9fLDoAkswYXetTTj1Pmf3t",
  "key19": "4ckS6vtu4kgb3meDuipDSQcTy3HhXT2UZc8DzQGJTUkW6YEg65Hq2N1RmpfZucgqmhed9DNVPxP6uYABvRhgBatV",
  "key20": "67UxBAiRs26taBEDsZqjA64tbKDSkFmjCvSP9AVRuAb67ryEYwWnPyDyoFCyX4W1dyJVBuib6zNkM4u1nmBYadcW",
  "key21": "2vsHfk1hykXNSHJVuGm1sfNGSorBVcorQZi1FRMapAnuCdVfsqvEhJGJZ2VSfThPj442wqQRAS8e2J9hy3wHqw18",
  "key22": "2ckoK3odm8hnzrL7VL8irRhJC6P3hjANVdJsFobJDXqXwBhYUYVkjABno1Ro4KCCejM3edz9mExYVJLguHQ2qmy7",
  "key23": "3fkhhs2tKBJ2AQgkJUD3cmDzk4R1moHLm3yvEPdnWj7RzPFfKZVcsqTeuqNbcmcE4xGtPe85pYXuqkEcvokqL8n1",
  "key24": "5tAgTtonJDXvzVQYmhsANhjJZZk7ZUJ8Ez9ADsmsmrasz77DVTpEibmqb8akNfmZA5NFnXzY7PQaDBeXtcDnSinE",
  "key25": "5XJaGN1LiqmdVZuzx8cDLaix6LmL3L6ES9SQ4xJpKEJZhAoaRcZP1MkohMSDmv3zhA1tAjBoayXqpQR2UdFUUh5n",
  "key26": "4qSLK6uN5VgXKTqAw7sDFi8sAEyWchFY5jc2Hw48UjqJo4aAZkNamgJsofa7ZKTVarWhoxroFD1rbwEeyzWJiTk8",
  "key27": "EMgSBvSJmWxsLf9z4uG4fWVwiwcouoUyaZvMa9kvnMAx9HwhnoxrdbhZdp4WTRyJ36qfFzM371yJM5BuRFZSdrJ",
  "key28": "2F3iMNBcb5SVSZpT3SvsqJ9S6hMbhNGM4ouNdeiTYGNmXjqB2HBE2Hnq9u5j51J1pjAAkG5gXxsuP5WVG3xdmASp",
  "key29": "3fQWK9z97utkvQPep1YWxzT7ivJEDbRRZa2jA6njJNDcbnXYShTyRDqtbBryWoHT8L6YCDybanqhZRBjKFTMv3Q3",
  "key30": "4Jr5DcQsDUpcbVJadbHm83HWF3RmPTALJFFiXA7WT8AKRoM4RmtNBAchp9jYQHQc6YAJ8S4yyYrgZDUv9GGoFsiv",
  "key31": "2WXytuyWMZBHnWNP19VEnGhdYxQGwSvyRNCJdVu4BhzsWGB6hnS4xc6C2dRviwXDrsy2ADp8wuLuVvffJAaF5aUM",
  "key32": "5imt5LPoUutTYoVBvjfn3nqLfkJp1oXr9QLyxTo4tfEEpTHaGNprHTB5JKAna7w9fQcxqzdE7TXjDW93jGxKUoPz",
  "key33": "4j9RLKjcTSKjzxf5sUPps8v494SPuWAfgNpokcbujLrkKrVR4ZiqrfDK15QGD8kDoa1PP8gYqF611CAWr2ysiHQf",
  "key34": "57Ywsb7VHewEbnfFLNmBAB7HGhxikum2uqnqjE6JDFCndxnzHCaCThjip6nL2NNg6gKtiWn9SVUNCphtNkAhEcNt",
  "key35": "5oNBAHYLikobTxZATKChSXWJLwN4A3RsvrKKB8mDppsaXZEEaCSwm45DJxbiC3z52qQgTE4z75pMZqvhzCmHAbS9",
  "key36": "LomGDCh6YCnVB13sVEX79R2H8m1MNaaYXQf8hAsVhp1cL2HhN18nnbhVNxXw5jGYQQMaNnzfrYJ5EBr8vToP8Vj",
  "key37": "36th1PGW1f6jDR8rWpBu2jnVNb5ZKLnSrore6pt9UhyRYjFqaBFniAequDydfsWJ7mhRCSCtQpw2X7X3hprDarQt",
  "key38": "5qu49abZragsSMUaTLAehMcxBwg567X9t6zDTTp6kog7jj9nUsLrqh4xYnPuFCfXMk6MKFPZ9PgbyAVXf8UisEkw",
  "key39": "14jdiM526NVTzHxw7RyM1uQQxves2njLxfMixZFpuH8f4VAZobqVUi39JDksvgVCxgaMntLxTXQ3y9bQpBcSccn",
  "key40": "tEFU1KjHffcL9MtNVVi5XiKzXL9VFYfSwzLEtubbJaPYBBoWYzymQHkpjJtRaCY1KLkhhuarjU3RjN7vdrMq8n8",
  "key41": "3MFmD3UecFbyzccFpe38d1vAVWgtpdvBQJ4JQfcWqJhVpG4bBe7jGpYNhahWWqG5Y8GpYunMCq7whL1BtegJv1PP"
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
