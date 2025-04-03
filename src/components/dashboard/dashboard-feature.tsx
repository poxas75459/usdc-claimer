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
    "2hCLcA1TVXU8Y4mwL4mWtfmc2DgM6mdZHBiuTHXNQvd89rdy9dJeKskw5omHobCbKRQ23jhq4uSoE4YitmuCn4Xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d5gvZhadZh5WGdwGbsMgxpegLcLJ5E2LPe6YE77PJYwboSAjsed7hcajNAQxShhYgs2TfZqxmqX8CZTMRztYE4n",
  "key1": "4d7a2TZSzFwTzAuYnEMdiUXYFYQMrKbdZn6dvkieLhYtpgDzBgPz9xzLGvv6cxwUpJXXKLUefHbLGUJFT5EAYGy6",
  "key2": "VNGg9AgtEUZgb5UiYRBrLZPUopi36NuMAHyyJubHjkyQvDynejFFVZaXdU4X7Yr88vNvw6N2UyVhEu56A7wWsSN",
  "key3": "5e4ofM67MzTQ3CN8TQjMRaAKivVrQoc2rYPNZQ7ZeF9QxRnUFdbXTvJAYjTCGjL3wYt5ANFAhd4jkkfHmzQnJ4tY",
  "key4": "3izsbrTNzDo6MsgSndgGKTGEHPw7UApuDNDboWgzR9WU8p31F8H5Ua7oS4s4LfmucbgGCmPSRmT8qxR4HzLKdWpe",
  "key5": "5vFjHci8pdheoWkdVxyqE1BzFBFuSRuDK2BZ8hVn83WdwjY4VVnMzMMRSM1xz5oK35jC4LwAYiCJ1NpamWrvkY4d",
  "key6": "a2wBDPa7jNjEyczq3EQpvEj4tT6hGSUBVRembnWoyHPpJcDpuWy8aAejAhJsDXtPGgfKPHkz16ZtP4RjQkDaHhy",
  "key7": "Sjt61kmKBkPkgTcxU2Js46TjUS3aH4bujmGWRfKe4NwB4ShwLthagXfGjMhk9vUUhvSjoD4868DeZKter2mDHRp",
  "key8": "yk9qqBdRoEGG1oaqhpQqpsUDLjykaiyweuH8rwgwYfSUz7rfmVku2HaN7nWfDhet8sM3ZAPvJCqmRqPxMX11DLB",
  "key9": "2u5hCGBDE6sbX4LwwCmp6TiDs6Qg7uAa3RhEna21bNNVD4zR7MzzmLLp8Y2nQATUU9sbVHzHVEhpwmoyxL7x1V8p",
  "key10": "5fPYHjB1zY3hXgDspZUa4mU9Zjyh9A7HFaS4xcDH9xhiJzBjGw3w3dgWDcUMAk7Fo4451JNAq94RcUGyXKtevz21",
  "key11": "3V8U1oiXRmfGyNXumZyRqiEAUuidxJyXmPitDg6XU61FYdsmbU2zmMTYfbFqsMo8itcYZxXv4B87gAy2SQXAQ4VJ",
  "key12": "4f4SxdngRpXCfRfBp6NRob5jgHvfUWYfRFr7ViaYbYhBBbvMQjVoYgZ48bembP4G1Hcozi4H8JRYzvh84vXyUSnY",
  "key13": "EAWWfCPihmGDgtVa9PRhPZxEgrBTgxTuHXX24c69mEVZoXG9AfoCpmoD32DWpPWfcQwE2dZcRG229et5ZnzQoxU",
  "key14": "Rt31CDN3cXrxGSSbzeATPdXJggB7Dx8zVeySDuHFXtJAQLhpwsSAUBzuohe6dakUwaQavx4FYqqZwyi69HTPMnf",
  "key15": "5pP1fSQfR6HC9XSDwGaAq7WQrKazmWe8vJ6Px9RkK1oQcPuQRboZjJkz9HmgeLNtuA4hXYLVNMErToWewwnd8Bo",
  "key16": "4zNyaVSmJzwjzhWPSMq7YNfWdPzCWHcSpVvi96uVziT4T67Z8CQhsbrQpoRax1jyHw8QYSLEBsFiyRdemXqXMdZf",
  "key17": "5YtgnkTnd7NpRwFMhFKCieMZdJNN5eGS1pZqQZTRV3yMn5PtpZZiZMmfpMV693hasmbSLDsz9MYpHyc7cvVpt9jT",
  "key18": "kRw5Bpsoqsj5mYWLyZy92ebCgLpxKSUSTf4rEVRj819WoEnvPmqA9dVJdq44uQQydtwq9wh6cL9JKsemz6G4GN1",
  "key19": "3qgQcSxEWc3Xei7kwivamQRX4p1TbVAGKz8UYFzVuMz8SMGU26TNxvoHDiZRKJjzpNx6C4dRG9w8cU8hNQAirhVd",
  "key20": "4rtftHZcqkUgCeC589bCb39fijbQmnt85Sfjw1YcXfA9MHojxqqTcRQrV1qJnZn8qvjJmCp77C9ZCxrNNuJoD7g",
  "key21": "dKvQgMTYjuBJi7H7MTX2CPmSNBVvwMfcyMMSZGcgHPPzQ5T1dLTdxBdL8iBYC5wnTgGg64nh9BJGnEzzSunccF8",
  "key22": "4eAhchUCMCmNfAezb1szfipPYPbzS5eELLZmuRieXFPpMBSPmrQdtU11hjpWTeVq4CGTRDnG63zMAj3AxunpWtvh",
  "key23": "2yqLbcr82S7ZTmKsw4s8AsnECEDRh3YiqdJfzfZkumKgwXzUEqRV3rywFKdMReExPsL2zP5ggusqVhWtnffRu7zK",
  "key24": "2NrBKVv2zs6qYAeFbU5CUFJb9t4gKtHLjENEnkF2JMQUnZAdT7y32vPBiZDWU5TBbbppEhFx1DRgTzKU2rG83Knx",
  "key25": "5TKQDhbagyyWbcWoEZ7sdhbq7hoKqidbiK8pSze6D6iuzqUpEzYaWJkXfKjATKD1fx8z63mXtXDQnzFypKPDfikg",
  "key26": "3qeB18VWqZYwLvVX2KKzjeZvBKBjmdrtE9KHmvn8aTGkvi3rMysvkc6e8HFvmv37nmFA3myNjaM5F9fxCKw8tPFp",
  "key27": "pz4DDpVzmG9pe9jcQKR9EdNdsNE8uS6kasvVpyhQeYvuxPTfDAM3PcFp7tEbM7Q1BpMgPpJuUZWtcF92D5WZKy9",
  "key28": "66a9dYr6GJUE3xczGBesuWUQfuGZVwBZmGqCbxjNcH8LFfWaZx2zap2JbMwLpyXLeBNphuQp35UaQkpFS736xUTb",
  "key29": "3ByDSTbFvdQCwKC7JKdX6vbZ6eFnudNNDRs2BcbroPWFVAT3aA5GBvCBK3k4GUvnPKWzhq1d8nRgLEasngx5WRjT",
  "key30": "45Zipsn8fTtJQbpkfNsoxyeaUx6fxot8EWHG186iTFK8hJCzqSehKdPELcBkqCGAQVZ7otsmmGBvA7h9akXHwMpH",
  "key31": "3MLqV7k4hhV1EtdqJjq7ecSbsAcmPs5EJisRwwkxkGaS3mR2CJ2GDBMd56vhP82PFPgmR1ZtCn1EnqLLGtRtMTET",
  "key32": "5JCxRGs8pHuYAwe6rdz2QfmUov44Xcmike7gVTgnoNcaVyMxta7G6QcEPEG8J6PQodj7iPKvGwZSuXpQuXnBxiox",
  "key33": "3mqEwXmqkCSB31cCk64dX6GMnpcnm8np1u6hjiPYGbMSCkbgkCf5DCHnaKNFiyW1qAma8ENTMiAuFFfYWDzwQ41z",
  "key34": "3SN6wNuS3wBakX1XcXRYoRM3Vxm8GJahTwRmCZKYyTW1JS5hYxh4jMHgrDBypCKWrhAMTDz4r1hydKcRRo1YFXLK",
  "key35": "sarcPpG6aWgqETUCh3ZEQxhHeKEiftA2TgcjqZX91Fat2axUriyoPXopz71s5q8Wp4kWH82LpPFuy6T2BziDibT",
  "key36": "3zd8VjCznQgzKPRbAXq5z66wMbF9cfDmGWo1L6jZLpKJagaEVHK9y6ue8Terf8qYB5iipsYqks4dfhJs69fCFmrr",
  "key37": "Azkd6j3PyMqXbw3eDyoLvWJ6ZfZfhCopbaALG5ZmNQ4dybqja2uGNddoEpDKudDKqPmPewRC29isyznj423gvRX",
  "key38": "ZGDhHr8bgM31z93TvT3MixaNc1wSUqeTbgoP7LjiH94URM8z5LDaYK91ZzYdFYkcJQcvjRcqbCtnmYaRbeKpzcn",
  "key39": "36jx3SD7U7Vpzncie1czKcvaHT817iBEBYDvGSks9hyHb33veqrKDNJsEa7tCJothpphsUMYXtfU9pxENzfNaHpC",
  "key40": "4vnsr5RSHRX3r4bGszk47UkAc59WXhWqCP6s8Zuw8dHGQQUEcPyrjg3SbUzyF25AmZ8Uo4q63ownFniwAv4vdcT",
  "key41": "4B14GA31hXsxGK6cgJwrX44U98goKipv3r6MagCVcCPGiWe8B5bE1cAtAwv4mXbAvrMjHeepiKnyBoPocqUprGSC",
  "key42": "4fnZievApok9nogzJU3bpCYZ4Jmr3GpLiXCSnV9ARfR83A8bTLEGUkc2E2xBfCudJEAzXXtHxd6FzMT94omDhDus",
  "key43": "4fyZB49BReYohq8sokSsGE1KJosEWVwNFXwwkEYUA3Q1m9dXu3c8sMfvo7RiHUXKVMCNQyXSq3frAZNaXaCSr21v",
  "key44": "5hyWYxAsWCHemKZXfrQkpLBJFX3kgn82JGokaWJjHd5KcDB7527k2ks7ZQ2pb1Eg4TbHGvdtJ1jkqaBJpjhCdrhf"
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
