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
    "2SEGUE1UZnTxDnUfHEwuDzU9v3fuHi3YV4NHB21RUHYAeComPLdSWSkawL9nKchmJk45ZAfZ3JcGPf9e31ZF6itD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZJyp6fT1CaE368SQmhVcLrFkSrt7jTpo9vk8Y73zkuMULx3wdU3UutUTw4QVysxDjQ2tEpCfvtGD2Fb53Z1N8L",
  "key1": "229eaejxzxtg27daDaRyRQ6S5f5aXQfTR4ENBdFRTPVqp3KLWVSaJxqkAPmU3y16iFCtRpC2ebxxDcLUW5txMk3F",
  "key2": "21TjvTMAr9NXTtcLT9fwgJPHYNjXco3wFFqrc7kznzKd2tECuQ5B9PN5hTGbVaohKWrjFaLJkmNjTtDV77ix1KX6",
  "key3": "22bRD85zUjpALcfg5EAA2baQwYjUppkFFUL3zdu2CuftY6TgJvgF3EfB8LND5Ejae5vk1QLAbteRePw7uAdNCCNX",
  "key4": "2TLhJFMv9aMrmaBPyBRCBrwMWtHc5RNkS3WsyWRLhHiGsxzgytFu8F3w4vkidc3AtV2nKywNtMB2HgAr4fCzQddp",
  "key5": "5wumVB6cD8QocupKUb8xZDwJCD5TWeyywbKmcaySKRDufw3JZ1wz48AxQRVWXfYuYigRctDmLSRBbUjagHfeZ5rt",
  "key6": "4DddTF3bPgG6wnUaiCDjr1mBMSgH1xjLhC7Mm6czN6DpiU7TqCrweqG6cPsForkaqgMZGgAUgD7RTN9oGeTLrxcz",
  "key7": "3zqk6bwuMUs2UfaRqD145zxXPP69ErCw9D6CKoqt4WgzsoQwQ9r2AXuvofv3SRz5sXtvFBUFEVB7WTX8QQmMvu1E",
  "key8": "MJF7nHRFJTmU87VAzUTRwTkHyGas3TSYUy8dptv5UYY3wNRsW1cnYgxCwsnu3iinriRvxUibyyA3ZrFeUiAyUqw",
  "key9": "3gV3Kr8WSVmEDv9aeLG6NwNmBc5VhfiTsuTH6FpGNz5CtRwRDHXiWgTTXBxJB5r2LaRkXmhjZvwVE1bCSfBqJYD1",
  "key10": "5HjaYcZ9phpobeZ252pGKsPJk2D86bN5QwvBjeKF5hpDgDirmUuKkr7oLMAxh9WE6VC3JjFZGai5mzYfXeA9oAMm",
  "key11": "2QucZXix6mgCF5s154LeWv5oxii8qtniUpsi5hG6W7ovFUrVaSFgZAJ8eoj8PWY46Yd7PdNLCfQmPyDJMcS6xBjd",
  "key12": "64aDQ1vuJWcxiVAPevUrpUpDubr5YgLXwXQLNd2Ym4jrGSSry7FnfY24htrS2CSsqtnMhXE6UpuPL525tgG99NgZ",
  "key13": "56wPckWqDmE1d2LbzNXWnreQdwjMFifYUiNqNFAvCLY8unijUbLyvAriDHZM7C8GY4FMfifD3NwqBPfe8E8A2xxX",
  "key14": "5sn6tHT2ebc1x1cnFZsbadYMVRMuEPgfhv6TvKG74HYRvg9BLRZBXUyKbiZbz1PT1gcX9JEUbcvN6KkMtgpTUhNA",
  "key15": "3ozr3L7YsNSJophumkVTcH6WAUhewF8jwZwGUfVuaTVjU4qEfD9GtwpKNGEUtKxqsLmrfQEhZSZaTGhFEvxNYoFb",
  "key16": "35QC9FAqwnSs5SfjJ1XjY6EwfB5mx9uULuKR6eyNAtMwkBwvHQXVS6p1vvfpeqJT8qpWECCitm5zsXGfmegavX8j",
  "key17": "4axc1JCQaHkgKmVCHqcpCX12epPnjbtVcJfqRGd3fdTLnjs7L9d6jqm1RuaqsvGg3Q4PXKHuRYrPRYqrd5X6hTYf",
  "key18": "42sVhUacT3caEGDWzrppkEtJpnoNNydv4D65zKVtKfuXFyqQTvZPJuc3xoqPzJeJy5tqDnD6ERiuEVUNnJkPKhcG",
  "key19": "2UpHunP2UCiCPzqQK7ncYsTYNkLLb7F28wfU7UEkVFqQaCi1EXnDVrFLVMbXFFMf6oXSJ4QQ7WpaLTESSmf7Lxqm",
  "key20": "nhouWsf9krYcLcj4vSzN9qzykBeX3C83z7NHuYbdpMPH6mDHZeDCDvNcnqT4jpP5Dej9prADdo3NTihVLS95XMn",
  "key21": "2RKvFrdbxDyzCj3bcmMASaCiutQZxdxvQwYpXAZg1oPfQRQDx7HJzU6j1Z72qejro1QfzRFdE7F9hQ3LBH2Vmjn6",
  "key22": "2YJ6pSsESbocBF2a8sUtNxg6uZcR2MDoQp1nb4bmc7TCEf5zshBoPT1NbNdJ4CtVQ3PdBiYRDnWptNYSdB8puVsY",
  "key23": "3vKFf9vUFMUKdjitiNptiGUaYwX9NYzUtjFLUz8wXUZXunwVnpEP7VDLgLzNoXyUEyQovVMyVUNn2MBvamCQwVsC",
  "key24": "3o11h49FXGsmiVKvN2PXg4R1kyovCnEepZmjxYZFG7uN6cFWazbxpgU1HChEEgDTQTbFnQSgNYPcb5PJhkuQTjyT",
  "key25": "4YTBuki9W95SYVvR73cYSvdYNGHHmxAgkGuu9C5nBFntMfxXwzAEFFCH3KXoxyXyYJx8kMxSdwBrtu7A298qkG1p",
  "key26": "VPd9B616b1BtB8twLxfM7fLniqoSMQpUPLMXc2N9k8vUSVuiVqgm8uERXT1gP29fboMgxupEyRb693VxWg4WfGh",
  "key27": "67YA9Z87aR2EwhE7CZ5fppNb4CGXxhEcREDhKJW2862YKHJziTSdTRtHpSavnNF1TdNHLvNawbciEbwFkLCkJj82",
  "key28": "2GQZ19eJaoFsHCN73LZZbFcZe4kFfYbPbTVg65SE79i3v68BFWTJZJP8M4qiVttGuzuKyaz5UeVuLcTjkDUfHBod",
  "key29": "5TY7P4xazw1jyFJSFdJoBPfNyNFQ67LaiGBdJA9PAaYmkrFMbq3mp94J488gKPAUPruUxnNPc8fetCwWw2rSFiLU",
  "key30": "2xkgDxAfPUqvq93aXrUVyGA8Wq7R3zLMwNJYLftyNHe5Y9BZMe3MGehFxZBgbWpLWDRSgcSX5chWrYgHfT3yV9Xj",
  "key31": "fEDoLjqXEJC8XnaAVy2HQJU2FYUeQF1eoiEZViYB4zhFVN6KpsimBCJsj1aRLmwQJdzGuJDzHsPWzJTMFW32B9a",
  "key32": "2WSmZxXUpSUEiLMBe9fhPGzYcMN1sLQnGszKkQEHHqTtmeF7Vtu5RSQiB51qgAD7mGDgceqbAnndATPnWC6KsCKR",
  "key33": "4oq2TVEhXVmd56jqSacJxPYLhy1rYs58JzGHyZ4rLVnAxHDPvLkHFK2vCJezDB8JQjntWgx7BB5qmE5DfH4yywRi",
  "key34": "4tGiUYRePctTZ5bnMPCoHtdaRJx2N1CTmpaFWfamE5t1yr4D9sa3tqT68kfPWgcnQYwPxGJG7MDV5yFYqfzW6dt1",
  "key35": "3jxfA43tNAaSdL2SDZb4FqQah9cLRCrFLPWP6LwiB3Maejj2f1Tk8h9ywAbUBkG4c4j4dyBCQ1RTb9TryEovrdGY",
  "key36": "2ps2WYVx7BKKpSU64R4b4v52pQ4yCHp9PxtgP3138ckMUd1q7F7fhd3uyCEQhYTFYFN8L9bov9gimvrHuyyCwuhm",
  "key37": "2u9hJNX93R5viGxiCk7cjuyJfJJ96u6NyePTsNb2bKxqhRtZ86qn6DwfR9zPR8vsAz5ZYiaNKSYzanyATjAhBBv8",
  "key38": "3zYbmmGDkrgzWhqqWGiBtydzTAate7QySRy3tGNxEQ7qy4uRUdFxXADi6it6GdQDfZh44GdERkS3r4yEU7KuEcsN",
  "key39": "5nP79k7xwaBNg4sjvRbBGsv5oP9zy1qSfBL4svhq4sSr2Rqxbgk8rZUBEnomALRBFZFYpGbG9S9S63QhhCmjKenN",
  "key40": "3DfiN6RirzDSzDFq7CaoVitVE1Eg43rDUMpXd67fXrnUNenuEfc5fwWFJdn34uUKMeMuFsqVWTaViak4RFQ7YCq4"
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
