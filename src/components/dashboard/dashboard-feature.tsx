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
    "3SPQv142YVMM6JYnW9yfhjomH2P78p2RNghhQtMd35wvwG5zxJYvKYiVWMAGMSLrjySKDp3X8CKmsDp7sP5R8SsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kwbVm1VWKF5MmWgD5DqbcSW3gYS55prH8yEzhxg5v77md1MynyNxC4sTBCnpee6XahzhsigcQAvaQHxEz6EokEX",
  "key1": "ioDWL8xVv9cJXABzT5xCqHNDSLnizsHpptvH5JxxzJdQnUCWykJt2ux1S9drkUf1cnB3KsnWrMgWPpDjp3eVg88",
  "key2": "4PnKVAx4kRx5jTDq4C1rtV42FdJiamHTgvHuPeRVUZNsRY83GrTD8Mu5GhXtEPoMZky8NSki328rga5zFywYNRWJ",
  "key3": "3PPoXKKJ1wx74rH9YL9h7gkpgKUggTuYBqfCngjJEcpA3MZwN4d1uEw7nfMmZgnXnoMpoazKKJnCYVJzZzgzhL6",
  "key4": "ba8c6Nm3URGpw2aetuFC2TKMTVCwE4XNVKhHm1KCnfHSZ8dMWhHnxL2AaLrky6A37D6SFsuU9ZttEu5UvufShYM",
  "key5": "3jHKFs6FwCyN2XcyuqwBbm3EfK76LtWPTmBJYvraC5gRg5zWM8hXdRKNJjp1hPU9wdipgp4B69ziitSZCnysjxmC",
  "key6": "3zsgx1U9QuPNnbu8qvAauREsdQD8jzuemKxBAaH36Sc5NFYvv6FPCiaCFJA6AzEAiZHicNjvpmscVf7p4DsXAdB1",
  "key7": "fu6HSfuJqhrnV3T6J9x91KYEWCEUFD7Cet6BhGYca38vwBcwRygo7jn6uZzY1GxSZX7T9XytwvVPjAip4HWWLtW",
  "key8": "3FqUQ9rK4NzJWbZNog3P4rxZgVFxrpvGWiqLPExPru1Z7Bh6Fie6eg2YnU9HTgwzGxJwSCh56kjSDyCmDfnZirga",
  "key9": "6Zf7Gr6cd5AUUrVLhyQMxUxmjkHUpgNwbhw6VVsFzucYRAhaUnNHviBakvzVn4BhXuYtaiEVCWLcCj1aexoyRif",
  "key10": "tux2YMngr55ekpYdvFVaFXhvXp2CM5cF44iFNm5tW8NNYyk4RY6soPRtd2SeHpQFjm82rTYTD6REQBLgJThbMem",
  "key11": "2nG1CREp7hwVZzfYv5J4rhBKnZGE3dsdU56e4NFf9FVyJrtaMcytqFekivnwwPVbtigjCjiiPqcq5essKw9egFvf",
  "key12": "4ek6RS7WAiAmepu5kSeKQ3a7D3f5DQ2tgPmYKfHx1H5tbxa8PAr1VmcsLPNSdjctVcYHrF1PrX2nHrTUbxzmRMVY",
  "key13": "21TTRajfHiJc517sXksJjU8wx49depSFpjuDg4YNrUQLrGz1P9Ag4pXy5um7XYLVMUqdCMD6RhpuxVX1cUfgaQYu",
  "key14": "4MNqr8GPJ2S1jD6B5WGthGfs22eGdZbr2mSNMWhuyW5FoG1LERKAcEAeEPcdy2zUGEJdurGYYqZh3WvEYFZSdHfP",
  "key15": "2D5jQxgRcLzfySPbhZTui8veAtMEW1m9REjigbthpY4NaK6Y2KhCN4xQki4essSqks8iMRxvtKFKybtXRaTBWNcC",
  "key16": "9U5tfqbEoximCaUJjvD9AgKUGcBnqyXNnVpkPSAXSw2Hi7WDJSoQnBZYJvC32nNHuwySfTdn82jxC2CXwP7xjRA",
  "key17": "YRzNQxEKsqwzL1MXbiVm4QtcqmYxifD6AAWYkNyj81nAQ66FHHkLCuaT4Bn7pwdLEyjoQ73pYJSjGJkxFGPshp2",
  "key18": "2MA8uVywt8ppkg5S1oshfnU8pDVcAqyG5oLD2Xcu5AHqKpiKQtjr6NYy88RRvPP23YgYUnSk2c9aB3aWQST36xwD",
  "key19": "59LQPpiQgeRBddk7pZ5oRK7joLHeie5ejE2FWu9X5jnx3XxXKzA8NqsBgMaQccrAKceekW5yN9PQrJaGruetQsMb",
  "key20": "6492GNLzQBh6kubDFUGXRmVeZ2Mgn3RH2dkQBUuUkHhVxzXhRFJkBMffo1Quz4kQENawxTpeTQmnXrj2NpyJBLU7",
  "key21": "o4vmXUF7zHJqYG1zgEWaYjszqn2SE53SCkXfWUatxc1Y4bH1nGDJRTegijYDsegJvbDuQW8gjRCFUkLq5VaDF4e",
  "key22": "3FDN2pT89S4Tg6qEPez1mGiKhTrmbfEXzwWBGXuj4h1uScgcLKkRcLL1RDnA8EfyepqsGeG51BqFXnaUu3yTCBvs",
  "key23": "5iKhhxfYqgtuovNSvKJjwf1JfqTXpkPMCQ751JQSZksz5BvVqUmrBUH5A5CyLCBuUBbQNQA6VxKWLHKbXnDPCE7h",
  "key24": "2nLiJo1ktERLdmQ64eA2eiiAZNLmmVxVQEg6NUBknrBAMsjbSzB6Cp15QBRzVQFJkqhzXNN1BsC982tWcXJLyZ1m",
  "key25": "MiZpnndwXagj3Y9pquVTiVJSw9yt86h86KJiGWfYvd2jigNzRZKqGkBg4hpUspcFmm9wSVjRGmgEYwSTTsJ7XXs",
  "key26": "5U4CgusWPU1RzFWfZsdZ7QPzCh8ajeiJGBJN76WZnwqBuE7VeaUNNAD2bnXx48Kx8UBwdEvWXUaWVBbBDE1exVDt",
  "key27": "rV5MJRFj16kCTtQx4psLVpw88ofsXwh18yu3FxEez8QT1NDR3JwExA8Nq9eY1wCjs3NkxXnVGQYEPvtmpbuy9Vw",
  "key28": "V6UGmvZzSrXRJFfDuZ2RGxFAUmThS2f1jgrpvoL9EbcKtkDt7ccQkTpyCx4YmRRQe8wUjc62Vdp1TR9sWnmupCG",
  "key29": "yX6RBLSEtLefFJxvdiAFyuJhfG2tz9DpDVr9oXNCMJCnSNQBcidgUMN4YhXKscUECAQJ4WjQWib1xM2opytzHds",
  "key30": "6M7cT7zfWTVQQB2osYcnqiYDUXY1ZDWUivaSgM3AhP7jurWLbynhShjdggFMs2Vw9EvDJQU2gTiWv2nQ8Pim7RX",
  "key31": "4a4GNNto5y3r4Xa6AJRzb9ojm7WdZjEM3PoaazFheWQQWvsLBsnAkQgSPcmBbhzgNAQRvyUKQaV8RHsqBKV8e2Mi",
  "key32": "4KW2M1DzzJJYzAeoo7C1HeAg3uWyptQw5YH7BcATo56C5Sn1LxY6kKvGMh5iKkRA9GDuQnUYF1ui54UQkpPizWbv",
  "key33": "2Vo9ZAE16oCtm1Da7hpJfLYMUv3nfEVm1iUzRo6fJHD382jkHCdpgnAe3u3twwwLa9sK1QUKB8yaMgLyBgmj5qA5",
  "key34": "3vRqLFjm2d8UB7rd8jPX9jK5kTKeEhrzrMYUfF7CevTytb1XNptjw8fFf3bTaKkFvXCk4WeKeWwf8SYeuJ9BnEgC",
  "key35": "9Z8mepEw3ETzEnH7CDZyp8D5VBtsjypzGYzWndT2mgzJ4N9YjaU16eWMLhgYn9sVgMHCSbUyk41YoyGRbCkUmFB"
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
