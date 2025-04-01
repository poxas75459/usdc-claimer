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
    "X5SU19BaMDbUHW8gsaoQr5c871GiTZrSsoxkXqudvNMbHzUotXtN3iqqyVRRZG1AxZKH6eHTizDGYwVotF4KFSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FUAJVmPS3RiK95e2Y2wXeRrYXw7A6WR76ngZdhWk8ivwpspDenG8RPcpriEC1DoX2gLrWXS3sqf7XHGT8YeXu1u",
  "key1": "4SQ2wTcnmo4Na4kNQvjNWcsAid3RMsKHdt8Zbzz47Cg61zUd3dPj5UyrDYwMyztHsr11NCnkxmoxx6ggD8Lo8fJR",
  "key2": "37v7titC3bFRCBpUxhDdcN9jScidX41mZrGUxy8cUPyAWwzm9GSEN96KbFRjPANpQUYCt1sYUrdWBN8iqiLK5KAm",
  "key3": "2dgzSdSzce27yV9yk3Ehv83o9uYrA9R8L6ffjhWazt3o7a58j57WpHwTE2KfqLhrFvmsDUeBwDAY1BdNx9742AVU",
  "key4": "38G9cFCKvH98xwyM7zWvE4gUWV3rTb9YQSJe4PdjYczMw7U5Nj3x5mj5trzbmMwQnJCoY4Wrkn3PuML5etSbKMKx",
  "key5": "cwZSGUNRDbk2aw1dGPYofZZFo1RhNnWwmTYJFoptgKXXydzF6PhbqVJXWTaCia9UAmncp14UGf1JT8BtxbVPgV4",
  "key6": "3MS46Uy7P9FPGRqJsPTL8BAdCq5RZAxuJTZgmEVUjqD1wSM6J9Fs95rQAvDWe1FFiLS4W9Q2nyD26RUSNgfbhQXn",
  "key7": "4AMEMsTJ6m8BeD6SgCvbb6XQ8J5PMU9yWjmQ4pqG1v8mNvmgCbhofUMN8Zp96VkzvpSLWdVjdK7nRVxBbYyPCcBc",
  "key8": "32Kt6PFbg5Lc1zAFgbt5y44DdVwJghJaAuhBTaL1S2DK9RsuYBS6wQ4b5kHYfShQq25KTK1VgVE1c8EyvopXcou8",
  "key9": "4ohhoc5J1aHn9ES3hALhbkBhP1NZDfhANmKbidHvoumrd6SrJU6hzi1HzhM1FVRLDfFvTsRwQynEam1e98VJsDbW",
  "key10": "5x6KmaLncex4GiidoFwnWgbkgisJf8HjxZRXxpaC9XCu3zyrxSeww19ThwQEktq2F8SacuUPgA6aWszwKGX7yvkm",
  "key11": "5UFRcZiPgaTQ1L3FtYtwXeKbT1f9BwKiXTPy8VkPA9GssfwYNUtrPwTY8bRNLJWYxBDEpZKXGvp3zV6jqrD5G2wQ",
  "key12": "56Y4pCtP8kxttqeb8MnDq4v7qcTr3aBSRSeVJMRMDTkoHvsZbztf6VgJy2TnX67NfSCzfzfUUAgEf5R5cYgmta4",
  "key13": "4GmCoxfxxLHK458L9YngTWp2tyd5X2kiFaRAfCMCYmCQiFRGyxkNtVxLnnVqcEcsYQbaiyTv3psZ9SKLzofQztiy",
  "key14": "257k2CdbnkWKNZk8eeY8wYSCPrmKVMsuHP4VsjEgv7h1cWeoHmuZ5SPJLYJFHyyTQRVv6eRu6BTx98wg8TxXw4FZ",
  "key15": "4i1irym4ZNZT7FP2eDVdTBmRVkt766aDaxTCBHPGtCtspPsLvG3Tj6o6YZbd4Kx4Q1qvUNJy4dbNCqGCsS3XTAPs",
  "key16": "4tozHDsuSdHt8YcaNoSBqUNQ8duP3xHTmNnQL1KBuoz5UXtci1HFkpZqJgESsFRcTGSiPCMkyGYtDGuyXdJcrTej",
  "key17": "4eMFgchHGwxKWNhuoFYBb5jiQNWrFh2Bt9xxnrkdyQ1JwxaVkDWKr2EAkTtDTfCFdus89d8w42uSfAxbN6hoPajw",
  "key18": "3KdEdpizkWXwnyeXjfGyBaUyDtArNZYwsUGG318AZvHA1WStbF31tzSr5ParJPutUUvLN5Ywj67xvGyUpXqBRmNq",
  "key19": "4LwEru2Sc46NzsHPWzRyL3fZa6BEovNpoSsdQiwX9zbbaQWyDEAPx2ys9gLuupNAjGXShHrSTfCMFBP2s5F4tybD",
  "key20": "2dhrUv8XrUSwBH29z8LEegXz48ichykm2cph4z6K7LweoerwPvDJbahevNVs28zX9WWgdg9F5rfD92gcyVor5qqe",
  "key21": "3dKe6dA3cgbcEf1PirtZSjLCtarZD8U2uibFBmVnpQxEGnTxLr7ccdcaZha7LhpFm4LVeBNEth2rNxKL2wSFse1U",
  "key22": "G7KauGePmMtXzxfqKLcnE3ET7DUx5w4RZGfjWiwHUjLWSmc6uXr6jMsS2fLUL2eBHs4kcKDcifTKghQExL1uHGB",
  "key23": "31ACcEfDtvBL7wS2y6AbwEfj7iYegX3NMAhFJwNRcGtEdcteTpSMuVd81TiYwNWUYqiVYbKW69UnW6pfXfb2xP1p",
  "key24": "2sVtxteC5y7W4RopobhGiVXMeKkk4HQvf2rV54cL6bCkgCLDrB54bfenuXyEg3kz5EazWo2wWaDjG588hXpGuR2f",
  "key25": "2KJpg5x4LSht4JrdtbfStoZiLuis9WYxN2euQn3ugDSL8HmwyuChqEzMcG7cySrhHH1iQhTrU24ea4heUC1ntLTv",
  "key26": "2w8gzh1V2ZekLyoCDdWvoy8X3n22HcoTqXXmHG3X85bezaqm6MAnFvTweann6qvC7gow9du2JDFjPddVmpHbd6dE",
  "key27": "3kXChd6hiwgxAdo1WF1Ej1ALs3RukquiivyKyTEkog1DuinMkr6dHuSgyHSj2nLoHqrzGSYeyX4UsXhzHQubq4wL",
  "key28": "28B2DcAjwMgSX549wrW91hC22N39dLpHFtq7DoBqfk4777vNyTP6DFgiz8WdkB8MuqTdBDYhvPhm6a2Jtw5xgRBP",
  "key29": "4ySDvS5tXA44uwpBYVDiU9B5HUhXLP3GMB73it3Ex7uPGc3HFBgdesJjD21Gvhv3D9aoqMWhMdvsRmmLidSt5kLW",
  "key30": "3tsc2rWh3wDNWRN6DFGdTCJHfvy6EnJpRrQ6rDNUynhuKsMh9GSUovWHJsAzS4fWbMmBGiaHF5gYvPZfkTj2A5KF",
  "key31": "5Aybc1aGdp3wX3wVzp6hhYRBYNAYav6iZTZfi8cRcBcSbQGbUQJmRJ2HaNWxkXyGRgMgmJQzWDFcB1UgyxxN8bWf",
  "key32": "2aKcrJLpTBFkPcyq4B2f3c5PgR2H2u4nTyfXVUK1vZM63RanaPg8SFa21mspL7xmN32X5ZA8u1Xm2RbWWFoGAqhU",
  "key33": "5Pdrrkijaqz5ubF6crgfsTffenW2Rg9VCpGeaBpURJa4K3dsKcdoqhfP3soGPZ26vJ3bsjsLmgHBmXKwdj1gamrs"
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
