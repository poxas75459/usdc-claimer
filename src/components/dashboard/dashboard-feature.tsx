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
    "3wks6MXnP43Jz6RUtu3YeD8cR5PimEjbS8Yu1KC1yPBiUUbSCYEvzea3cQnfJHFbveG4rspy6n8LCeAba8JAhx5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TH5sqxY3NCXwpVyyc9WEMqxibRJPCdMe26jJ29pxTcpvBKR8yn4Pk4tBGBxcsYbJE1pUGe4EtPpJ92aSHY9AcKp",
  "key1": "3QMogq88s9tM2c7WqSLb8C6f9BzzTHbT7azMWbZ6Bzbvx6zyRrBTvmWR57JAPd6fk6zNRBxUQX1WMcPjzfixaYnL",
  "key2": "CFnZkmAcdKdvhSag8zuUizHDaKH8vg7eaWdXKcHBWvqsec8maTDwRFFZoqUdRC5fmBcuTFDfWjFLrS7YFFpJeuL",
  "key3": "4MTAWun1sWwSoSHc3qVkUwLoLnCF9qoJKokmbkiXHinSKU31ix2g5zajQnMHAsG1Rxx5ZNJtF7nCUcUX9e42R6Xg",
  "key4": "2G3ycvA3hHGksekDWfxXq3jQ3MjJoPia29ssC5YhQ5PitmyHoPiukzcm6PkYUivf9TH6AZbcRj84iY2jWUWJ65SD",
  "key5": "5rsc4eEVVSyCNLmNw1tNw9wBShfLbFHmqzjg9L9gxEkrBVgVYyC8qaZkRP8xiW832rXHjoV6XWmf89nEvijHRMC",
  "key6": "42Jvg4C4B5NuK3f7ZLoUMZbujqHJkdkXzHS5Y9ZKgMyZnAQGUCyRyxFoq8tqd9q1BK1Po2YGWPQBp1V77o4bqNud",
  "key7": "XMLjSb1N2AxN1UV6BdsJNcEGo6fEk9DLt4nn1vYQwYH1PVgRPUp3eLxQWK2vX1gz82FbqPAvKN5xVD7K89ASeV7",
  "key8": "JZBKG73DPTbEVUetw3zQgyM2qQ4TDgS4vEF9tCbD7qrzxnTkwoNELyzfyB56dAuJ6FBdtmJ7AgP6megmGqjdD6z",
  "key9": "63VMnctA2RNRGpudxWrUt8KtqLr5cWVXEGXBUjgrYtfBokd9989ph8ruaEpDx4Cr2syq1joXq1gik4tz7cZUjNWj",
  "key10": "w6qLvVe5NrmKG7o92pJUqGCqDpAyTFagkXgPDGJTTXBSxNBTvig3Sey61x8CBkbQh8kjgQPxSdTuCrEDv324Lkh",
  "key11": "2spi9gsdwJ5NZwN4V1wsBDQV9imkFEB9Y27a9p8X3YYYhrGyRK7FPbV5GhLTVgAuePSAziofzrY6YN3UJJLBniU1",
  "key12": "5aHFQmpzfdACzLquR25fGmw2ApSGqnXJUiwaWzTuRKktxLBn2a956NPimGR1vEJGS1QTwX6yiu2mbCUL4VPoWGXX",
  "key13": "4nvCwscuWzK2kfoAyqtMBUCA1xBLcujZwCCnr8STYbu6MxPfCEDXbUKBgqjewQ614VR1nbQ1RPTgJXtt9DQD6e3p",
  "key14": "WxBubCnLKwsmCpicxV7gqhUoHAq2xhFzhbt73sGsLDWSX9o7TqojDR2SWgpKES81FMbyvH81YgdgbgEk2z4P1wD",
  "key15": "4pWsrS9doerRfdGT1TmYVNpmsa9wfZy44GFae9N1U6CochjPG24RS2x9YWSWdKZ6ETao1hynCv94Zn51oZJQJov9",
  "key16": "3eeEy3irRuGndcBwA77WQTpcxxKPHMVzHZoXefXKMb5q445K5fNhPCHsMCjZ46bcAcPoynJRzQMBLSDJi7KeE2ky",
  "key17": "5xDHbbQbbsDLMsRmxTRqQMg7Ye6bnzkFtfVyni73Ho3M7u98MS6erUCSYGoPtQQK5tnjrTjz1erF9NMDPYD2kmTs",
  "key18": "5rj8adMeyRLC7CXBorNofnNqxbVbAo7dJmyN1U7uZHhx7sL5giZyRocGg1qQpk9mF4uoATmSL1KPsuBc4TZKTGKg",
  "key19": "5hwJ9g4ewNNm5cfx8m5q8XineX2DNrbioxmzNbP26M22x7cryZBrthXToZGUkdmYEJexmDkaawKZWGqad9JD6ayE",
  "key20": "mjaaAS8GFpEhkNH8VZY7uYwM7CkL6A7MDuh7jYSW1CXTeY83Q4Wq7fMm2ByjnXb2x6pY5GkSmaWYF62oE4GwakM",
  "key21": "vfP16Xadd2s9bR9eWopejw3WxdvoKCj3vhDrPjaNXqHkSnnzccPEit2sGcGt6SypaEXSPbpZmd6VAAXXKrLbuSH",
  "key22": "3v9sV4uzCkthapNhSXP6seAYCM7wvQ9iNNHdtAFtvnnP82HT88H2N33Uhgsm1kRjFTd8cE8KgfwE6nAd1HjRax6a",
  "key23": "3xkNtRUGK1Bk3nuP8q5YDsHQHn6atLgoSfHhC42frML9BLPtxzRcLjHMYy94d5qXEZgC3fVqFcBGW8H1N5R1ZnX7",
  "key24": "35CRZZySedJcvmi29pUXYMfwpPBW6pTBA76EM5w6fU67gd3LYiFyNn5wUwBPW1aHJZW6zH9yuH6KkEZ5cCAPdx6Q",
  "key25": "3uF1T7VTcj4dZKcRpE7xMnHr4SmgUCy6BF4D3ahvr6HG74S6gtq5TZUNvUJfVSxTHxgmeWuagyEbUY7RZDRbFd83",
  "key26": "uUknQtgVCJsCYxdctsbJuy82QnWX8wiXswZFJM49SyD8FMm5T3wx8zUehHKnYiLN4acyKtWFWNAW3riwJ5Ei1st",
  "key27": "2voSeGr1YA7jWNQkA68DmE31yBxMNMZctvBeqbHJEpoxAb9eNWRoh8BUZNAJ6cUkqSahjkYDXpztaLtXHs2opmqm",
  "key28": "Lq69eABuHEjB8QHTmfjNMyUeYtMZ5z1yuaC2oMpnKS5DVpt8RRkXMCEcXfpfr9d1pnSZ3ZBwEMekgptiSsfqcgK",
  "key29": "FTVEa5KoGfbQfTnWke6H96CzwN9df1tipKMJEENxq8X3GLZfQgNEt3wYTVAeG9hb8XPYShmwoqL7otVjuuDXtP1",
  "key30": "3GPQjai9BDi7FLdcnSW7CcaRwBPxZXkBC3zCC86rB76YDkZRUmwqderAtEKh7bb5a7svmmSqNo1YP8yhUNKCr3rn",
  "key31": "LYDXzaVxCBFX54XGFmmREAuG6kWztKzupGjRL1uCvonGoDRn4ifLuJAYVJfHkA9t4yEDA7wPfF8yCgrZddj8Hw6",
  "key32": "4QhTFonh71dxtzgFVP1AKftEuSJuv4MKJSbHQQaGi3HdhAw2R3qF9JKsMUCLLR3ATwKXNSLadDd1bwNVwH26v7oo",
  "key33": "55tiEe5f2URGUv7omyAA2bKw1pgRCuoCZ7i7ejLBUw388bUcuxnjK1nnWAfiFFGQBwGbVcUAwyoYvbB6kb77KQTk",
  "key34": "4L5z99APUtyrp3kbJv1FUXdEjDFEDyoFriJb6YfAesBnKjA9nLNv9yrLo7a9rC33CQtVU26GMEk8ZL4856TrqQiU",
  "key35": "2yGm2DeZeQp7kLCEYSkeZx5RN68rB9zjJcRSMxKRRjLjU8iPCVvm62XRFDVJUo8Aa6WUfU2ZJMjMy5YAC3DT4Rs5",
  "key36": "3n2md7KMFB1vhbimEwwZEB6Xz8z4hPwtAvFDgDsHqTtx3PyzH81JU7Sr8qzMSUph8JpegPD57Ypvu2QA2LLLE8Vn",
  "key37": "2bNaj4tR9mK6eZQ9tiWHZwgQLFFshMwoFLDEv5nrtdf8pKcvFGcHw9SyaYxMWSoRTVvBxb8FhfGpRrRya3ksX6aS",
  "key38": "4H4jCGWn6Eu3LvLVZq6avJZF1oKnrFx1EaEEjpygaEvfk9jHVeeDyZmsQMBT7aMXDMFB7dtmeCdRbPSjfM8ad9Wq",
  "key39": "2eK5MdMB6CyawUJNU2Ujt2TMDgUaZ1PmpTi43h5sePt9VgWFUaa575EknJvv8EsP2SrYBh7RnsYn1iZAHXSYrsr4",
  "key40": "59ty2Mi47zUqXERHMASDzVcHtxdPvvRs4ffvgsgnEQDvQ3qSG3GvDmmFKKCZu4moYomdK1X9KtQMuQacQiAaLyAw",
  "key41": "24CVEc6q295vvbzm7mFUGvpeDQK2mjEJcrkYGQxWn9wk2fMw4TDmuqFSeiVL5nNPYyP7rdyZjS7419zAeEFpa64P"
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
