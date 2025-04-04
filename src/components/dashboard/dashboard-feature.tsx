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
    "2JUwFnp1UkAPnWCMPdvyFNGtuxXbp4v1LpHksmaFk3kbXfouEt48dHLzAnen38P5xnMgN45T9PSVxEcWwyFiyBm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puLZieNsb7m9uFg9PLgkFbAjKB4cQtaKMvTFx4VkFE3bscVrMufSBaxDgbymbkC7uLLx2CNuASNGpYjc8RiBKsx",
  "key1": "42xb6Xwq363whwgAT1nBLRnscBs8Z6rWK64UWnhnpTYpwcQuqM5nNdyLtp94Tg5s6iwdiPgC9MCtoho8jAdNSMmq",
  "key2": "5K7UMV3d3kMSZ8zTfoybiNK2wodUktKzWbtToBoiojKc61NgyPDb18P4sFSHnJXQp8awRoFrAzfjgyiyperiqkNw",
  "key3": "3kL7WJycfwsgLdiBagiSig9CpfggJudgugwEhJDTF7izZDeZznr9VXUyX25ARvpqSBSUbcyQ9Wb6byZbtHkGaQ6r",
  "key4": "2cBidyQ3WgeWjNUec8LxEcueBLb1DRf7AK9Qnp4A4B2q4qvYXnvkoVJdSVfULBiojQuKCm2HQoXiJtAW6UJtVxaS",
  "key5": "2YCFesbhaGc6gRbVDxMJ8CdHF5eKLSDPMSfiHunacsNLoZMBt68Qm6DRFyvrJkwmYXGRF6JrKfkv2arXWko8NAUg",
  "key6": "3PmysGtodkpsiEoiTKYB6ZgvnFCWbsnCD3xLfqJQaQiV4pmVgxJUDsEG2ZSoFpNmQ2w9qfuDdifR9G6iYpiWQ9zL",
  "key7": "2cH9bYS8vn6VkydWLq37DgGFYGyur5kQPdG5cx7yySTiPkF4e7UGzVLCLrsmnLUoDGTGp2gSeLf2V1uxMiRoHk2k",
  "key8": "4su6xq3CiMZ1Vt8h8ybC9LGEogEu6xp6qnXKFrrwmEWK3xMvrnEQbf6xybvzU2xAjkVRG87p6PvFsmiSu9bKCns6",
  "key9": "5FgJA2qikYyfdA5NRhgGAKbSru1WdJzsZKmaJzpBu83DC6ytfpHcUQUUiBv5s1bM8YMCqJp3uq2QXgHNbXggqNra",
  "key10": "Z3EDpQ7JohKSXFMPXjH7S1z1MR4zB58caDTpr7KywmFFzjQkHbBP9vaAozm5RHfiS3fGAVZMFEJL1Xwguz9mLhQ",
  "key11": "3AbncXJBzwGubSss2rRYrDKukKxWcFS1EJEDic9oJDAH4w15RZyB2Mt1V2QgEET2UjdukE47QzSQG5hBnzvqE4bF",
  "key12": "3nhTrV9fVFCWZVBuXN5jppvswTCMjSt3PCmk4u9DWa27ywaaA9hAb7a9F7TGaKuTxVWWxra8EUBfmFtr2HdGjU2v",
  "key13": "5tUxYtks7qxxs1kDkkGHp4SjvZrPFjkPQuak35uXomDvTvz2Koj21YESKWJiZbSb5s2Eu8P1rtiJbamD2UpWEEf6",
  "key14": "5pFMTPLqvp141iK47arb6tP67YWhjiXZVkWxGsLaAjgXfHCq1ZGDimrvbTXsM6rX7v6P9cG3RfzxDeWgeyfhV9SF",
  "key15": "2n4nTNAo7ZztLpLZrF39DbPXrXmyzYxYsztmfjRa4GztFDTVY5kCe9aaDx5T2zK2hLJThUNV6BAAxanBSC8XhX7v",
  "key16": "FVkHVka69TAATnDeMxbuPdc4FzgB9UWVzdVEqGTXHmt8PY9k59D5GzuUVefApt71kJ34HoviRXSXo9qeM8KJbAA",
  "key17": "2bDVaFSBLJFSodx1pnUnh84WMTA6MiC1ByJcQi14Pq2kuLtJ2T83ckret1VpD5VKQQUGo2fVeqtDnxL2sCBgtvec",
  "key18": "59iGeZzUZCUfpJWLvCbBbLUyaqWwLuqXJ4994ND3MeWZ5qj9VqFkfHcdUjBmTZhUNr9D9ZHKCkcS4rUSSw8mVLy5",
  "key19": "38fa3m22j3N267BMdZmiZHaUf7ctNhBVCG5JNqkvmTfufL7qJ5zJuH6PJHbU3dnGzJMQPpTorRLrxt2p52DqV7CC",
  "key20": "5C5VYk8TSPPfg6qGiy4Z3M72QLHhjZGF6YQS3tFq16hDVVacV9mKsh6kaQjss7VrhqCQLEynXfnbyLvA2nLEcH5q",
  "key21": "DQa5EMPF7rJN3y4pjdaDcES81JeJgY4t7DfMEEF9t3NNcEofZHRgNKELJ3bRi7DxAUzFXeS9yo7n1CnfTdadcUH",
  "key22": "R758QsLtLx6ZwiVGr6XBiMNPiAs3cDYC6Fepxkds9Ubmjcg7YfU8BksGmRVyaJPBaTsdVMgy2F5yqaXKab91W96",
  "key23": "21pTZqDaR8p1PxVLCxkCbMbMLrEEAoNK5hcKNMT6vjBda69Ycb9m2xnUfPBb4jkSom4twCcXxLB4R5ZWLsiWXujF",
  "key24": "t3tPwJHaEFKD47rbVGqKpPD36PKQifRKTUShrqW75eAeDuiuTy4PWizP9ErK3VZMP4MzMRjn8vHQWMwR1y44Acx",
  "key25": "5U533bBxitZeqwXGZSPrLG7QZqNY7ekUS85GJsHpy12XSdBJyFQ3Dydes8yWtc3MMrEhUza9hqG5jucSvSbe1zr",
  "key26": "3ZGugqDLGzmdKjXSjGqVFL6DsssceL7TLLvFosEQ16kSuriGSBmaSBZVBbKkeHHtzbirN91hxGNzemymk7mS3jNb",
  "key27": "45MqWph3Sjfe7YEaqPWsSWChxrHe73FUJbPYSsF7cn2MwVXx4x3YtSpk7D2Y1oXEXhBhhrKzH8qgZUtTFD4xmWQX",
  "key28": "ySZQHAYgHAEmNY89WMmERWm6gqt5ak2EAEPK3gZcEg1GdKYTBPySpP4AvhJYQYJgSiHCupFrWnqa8oKW1z4E46v",
  "key29": "31NYr7mHMv71t3FMiKbG5mtwPiYoHeKpaUd1w79EP7jag54vMmF7gFp8pq7dKbGArEJqCrcevK3BbhSjzmb2fr7Z",
  "key30": "dKMB6UUd7aiNJxy2ExMsr526rVCjGU4ThVaRFo8w3SHdLupUJ3TaXfznQUJhL2DKoUovXFBfTEoFr9LTgpuN7ws",
  "key31": "3eFk7Dk2SQU9BoqoCMvAWeo7qvRXR1La2X4KRGtTuK51TV9yPwyyLJL3bya8hJ1pMMMKbUzp6cUKRqCSo7kNfaAV",
  "key32": "V5bBeyLuVQ5gs7XzLwdYGtMV122ayRDLJWnXeewTe9dg23qKvdtmj5672XqD1u24NdB6uBVo3qs5zJTgeX2wwpD",
  "key33": "3yaCASxzujhktt8VGv1esGNpPuXp98horeQLiCanzagKPM3qUMTNo5Ljw9TiHKJq6MF4Ls4q7yfTiMUs6XNnTWZC",
  "key34": "5owEufniUChJnXGaL7Br16HwHHm2swKTWa2AWjnBeph1tabYFSL43F9EQwL4HsgWh2sVFiRRQGnq9dy16nvqrumw",
  "key35": "5QLVeh6FRkZsVJcRTPW75iZqvnBWGhf4zkxFDNQsbw6u9H9gLhdUTxDqhFz49VfwhXNCtP5kGxjczMrtdcpRUoo4",
  "key36": "4hErQmBnT5qCCoWwJHan2oYzKj4mJJiUiFnP9xdzLTBXaE2eSgZSJzr7kfJHLSy2D8UGqRG3KkHYnjSDTor5JCkv",
  "key37": "4wamGER8VqEXuisbkwMMEpTnL9MgyBN6LSKoL2TXio2EfbKrhefcuHj32Du9bHWMdUNvLFceCBNZNA2HM41vLrCS",
  "key38": "5nRREmDy4Ag5hSi1wPEuoUJhwrjHNV4x8uLwBLFCeZphiSo231UTRei8pWW3jnNe2B3xJ5Fn7Y5ztjd5V8s47wBM",
  "key39": "41K3P8cVcwipH5j5ceqoJT5MYoxooM6Tka16NW8twPo2BZBEo8fwJXvVsyi5p38B7NaxsUQxnXjaSmyd9Ffa1L9S",
  "key40": "5SavAQVqtBgQGyBaa9KnH5RXqY59BbCMySgkqE5SnYS3HijyMzW9ikYXJvRHzQUuAHgX8ASwYe7QmR3sLAkRarfB",
  "key41": "4XNnP1Ha2EAgVknjjqrsn47U4Lh4LZxq9FnyUpkQjSjiDwCt1SVnDGuf3YWqEtZXVBZ1r729kFDkYmxxYaTCJst5",
  "key42": "5dGVZ6jUJzHh6UJgx5fzE5TUNJE17TFuQLGcjRM2hwbvkwpApxtGR1k4rBAxxesWqVeLYGtdkNEC9YjZpfjALy6U"
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
