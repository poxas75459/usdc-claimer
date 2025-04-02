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
    "LdQADLCVexYvQdUk8zzLsPGpiYTood6Vjm6KhaLPbUgFLzPQmXsVNXEDCsE4SNz2za6jjko6cibKoPto6b71Cre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mK8fAsiHVRddzEjX9hFkJG5rxdNcb12D3jJk5LL112ftnzNBintr5p2NTRmxSMHfeopP7BT6egdFJoKkSqfn5yn",
  "key1": "4xwwVFDMNL8zCXrPnBjwMqLGoLBcZPXfuPStJKK3Jq8XZbnqQ5gsTUx1avkjDexwF7jBJr8EkcfQ6mVyHZindU21",
  "key2": "4pnMJm91En15YEYc4EbkTVKpsbko1Evb1TRxXPyuYBnA2RBcFYF7H5mU5uvEyrMUAdAUm3jFPhGMQUUceymVZSox",
  "key3": "2hRMRzSgKVQtb4L5FUuNw94ukTMTj8GWm93RcQ6kFnfGzMsa55zN89s4FpFQG2XA6qmeTwoSbGahezdcvrGVCPv4",
  "key4": "3FnWRsAQvEgbYfeux3Q86stSW84AKJG6g6fchEpnneq5nt9BFzN58BkRruXJevBvzsLeyoNTBtnCZLGaVknPpZpS",
  "key5": "4agvE5kS5FVLvQ2gc9t7NqkA6iid5jXVU6md7TjezmHK7BhqcgHGZ4xfEsS7phkcUHWxFAqg3o5A1jKVnmJw9erQ",
  "key6": "3qEKNeoDcHq9LtvZj7EvfTSo1zEmm2dxLRxrV1PDpahTZfS1pxVCRuoyfNGbd4JkVnMaeVFLLs2nkbJuaq3BoSpc",
  "key7": "4DeUbLSQU9mCs7nwMBA7TgrkGejrz7h5w73WWVB2FnXa4arDuGKB4sHFfGH2DkzvRNCYR5rjjNJy5cC6tzkwt1XN",
  "key8": "4aFtZFxZ2iyUq8vehYGabaUAS28QnsckcSxViZuyuibqWuCLrjdbir4V5srcj4VuE7dMqCnMy8fsRZzF97QbKBRT",
  "key9": "aGr9BVj1kt1ajPhAYqnMZVFKQK1kfssRJCAbYjLyknP84MXYhTLPp1so8kGridKnSgFEEroKdHnEYobp3LYNabv",
  "key10": "546roXsH3yVSKhnbQ1RNAc2XY3x9JktBYbvkDiuEcnVVmtkQghbnADXWVMo5RiTqw8QdERMv3wdnCPYXXZpEgn2z",
  "key11": "31BMBSKmYB97ngse6kMhyum7yEJkXmBSx64oHSHyRFWh15EBtq8yNoFya1DTZempTfZ7ozspRskoZo2xAP1RJbJF",
  "key12": "2sQ7CaV1SZVUXSpyUqYo6f25PjFrsm8ceWcsRTEkgbZT7zvBWR8kngoRWti7StfCfbPfeAqxcivXE4pLxC23Wm1P",
  "key13": "5FjPk7E2jRjxRsnzk5APg14sEbpf9GjTbJYkype74jon2yoGCvRiRbaPjNZov6XdVx5nCHNKFfypvfkQuuAw9p5Q",
  "key14": "53ZE4cn39jBB768bqsSvE5VERvtAB69NEvU3Mt2yDwWtMtpByP9Y4pHjYy1Qh3kZ38EmTzV5VW8Nt3BAZq6suLvQ",
  "key15": "2HDcAStWiGGvawHiPdTzVrxjUcpcrGhSNu1vxGt6MEExz2xSTne7SZbuNe87vr9SB5T71dXxZyuSf9oWhUsqTg14",
  "key16": "4MyykBizycEarAbs9FMPbjWTaca6WD2k46heegByBTxtBdX3ibSbPTTK5biVb49ftbagAT41VeHTRJrBaCHsL2V4",
  "key17": "3n2LjscwK7eNdnHJqyddanMZEWx21f22yAqKjn8uGNTpCNTN1HhUxEXBsB4Fr2USd9DsVQZiXTigbMsNLkpVmAVv",
  "key18": "2XbRGByTckNX3bPmdJLbGFY5cmGRkf3TN1VnPdMvjvcFWBssBRL2Wucz3bmvsQpn5Zio4adVZKm9JW5xcD2tkrh6",
  "key19": "2G8XeUBsuEZgvaL3oUSs9kAieJijfWXwGAqj7wh8unfEUivua3rrH967wUcE6pnCb4fUJ5KP8hhywDteCjnVWeeC",
  "key20": "5cURUbrUapBgWbYwXy1mG9q4eQ1EbRhw5GbDWy38Zaear92QuYmuEp8FgwyTBNFmeUzsSPGHEeaTbcP4HJLQusgr",
  "key21": "4fArpwos9GyAga4gqBgRBHv2AifSAunfns3MUH8GtY7dJPLCudJmeCfFZoaDoWAS3aUALcf2zaJW4TMbMYPcGxJ9",
  "key22": "4XN91ahVAdpnvuybNUFAEhQgBvWHUnmy94k8gyUCSMaYfNKeFR9T2LZ6qJcwftHjtEScbauTC1ZkEWcQBfQMUPbh",
  "key23": "5yCYMEjUFA6MgtHsBWLpGo8MnmakTRBUmt58eXWg5ZsK72ftKfP3ofE9ZG8r6tenSB5bqQjViexNmGkZMox6rUFr",
  "key24": "UPKUwqUXcveW5dox7J6JukEkqtPGrPSMvjmrG1oeegoEkLxxnGF1cJd9vCccdgtd8H9UXsTNFtqHAJUkZA5KS4X",
  "key25": "3KF9Ks1BgkQ4MwiTT818WxJj4xrgKmxH5Yd23cks2WB2TQYs8hQZaHZFbQEYwjawvJVJYaH67VvZSAeJfqA74Rwr",
  "key26": "2KmuMepcMc7N8wR2GALV4Q19W98o1cUL5ykNEghrADvxaVybBNapUjqVxxaSWqyAhqJidbtr7VzbLwhZJ7HdyJ5q",
  "key27": "27fMvkaekZaiTGQUtcZmwwnsDDwMuLUKmYsd1bu7Ghgn4ZaJooawNk7ko2opbeR6qH4qRSJkKA8RZwjiETdPq3pj",
  "key28": "5jbpAitEhpAaGCHDgYqkPNh4zqwF8cBaa8VG2EYe9n914B1SZnz4scf7a3Az224x6c69rTznEhGoCKN4KeU2adNJ",
  "key29": "5RXEYBc5VZRzJjmdeZavK1DWz57L8AmYjfvxrW95Lv5fXioZ41isYhhcqCvt6ALr4fbrtTgCdoRuftAzstYdCNT7",
  "key30": "4uqR49zMk5DuvJjAMhbjC5ZAFjnzgjAoC7UzKd4D3TKjEdxGCT89vKzQKUpX5afPcZonEZWB9itDX4T59Qw66fET",
  "key31": "2DZPcCXcMjVvghfhRhmJeNtGX8zxCdSrUuYHCnkWbV46Sc3A2qRDxVR4aX6TAJW6Kmevggk952LM5KGt38LfFEtN",
  "key32": "2nM3TZyNdrCeU8yz5A6ZXc6LxpHDD8oYRkzJP4xYUELQLwUkbSE9pXDMR7AU4ZwEYW9f1wnP4jTJn3wbrSTExrDY",
  "key33": "2gphP81ya7iSBZpdJEP5TXhiLJeNhfWUoWrUBBwUbapmYC8dAtp3rHZuo7FSpfrd3iq4SMVYeasKLVotPq3xKvgq",
  "key34": "4uEkJdGkopRm9d4KyxDv1CBbLysnWUXupgZsuaydN7eNJVg1V1Nxc4QWtJisdNUfLAbjSztWuAR9ubBevrArKB1C",
  "key35": "4STTDks1V48ASP5zaj7sHk3TT6uzjUGuPg3ysP7XNQ93ZHYuY7F7WXYYeQrniTxfXui4Di1uaof8LXJMocV9xfCF",
  "key36": "352Niko2cNRM5JQLG7QjVGTaNB8DBqT4GW3BqomDom66AhfFg41AGUDYvwG3kJwyhYZQCttGr33NiyHNQaUQLWEj",
  "key37": "45K8LXyMrwFJm1wjZ3oACcFCC8YpiW5rDxuk7Yvr1DkamTeoJMo7FDX9gezJs9vHjJUC9wm6uYxRqj9Gfyg8JbGt"
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
