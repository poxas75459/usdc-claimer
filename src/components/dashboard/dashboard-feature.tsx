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
    "4uRXFJZqjdkXXkUHyx3ud5wrvh87p8EkkxgZP3AbuFyrCMREADfbTkndUmRuAw8hjAxGnCLqhbTA6HhrqdXjuhGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rR7arLjkSGNzDxhYk6VZfsnuknSSgczNiYDVQQm6dKBW5m64ESco8Hg4PzGRDA2gTPxtZ6E1benLE7HNHLdonCA",
  "key1": "Zory1acVYbuuEvSHS99iPW8RZfba559mfomcp6BzEHDMeQmEFiZsyjj5y6hgf7sgQ2wDXEsmjcRcjL1yQwumWfq",
  "key2": "2F1JJVQpVZJ1WgSK7LSLNXfy1X6E5rTwuQbAQNxziWv8dYy1aKwXXeMkM1BSD1ZfLgC4UKb4EQFX3Ku8fyW8FyL4",
  "key3": "dTLAP2F11UErJ3sxFyamiujoHjwBcNDoaqZHqXZP68TMMnMcrcJ4jQN4AyLeJH2smLFE88WDhxTnjJGjNyQF3nu",
  "key4": "5v2WXT2uvTcY4WKHSWca6TVKVvTG4tpjvftvU8vhWWX69bF51MHXZgrshkt6KVPUftfBMhuKn4jmVo1jPq7ywKWh",
  "key5": "b1uLDde8gNiYTERMexkRjJdBo76TtYgCMD4XGG8ex1KL9XBgFgHEDxMSaC8DwWRsbcnjiA13x542MT1ng6be5eN",
  "key6": "2AVWZ9ffeV8aFbHnCK36crQ19xhf7vzfVPftawHuGKn6rchH7SeZFqbuRgyQaHzeGrNd4uvZv4wiLmjrh5yiPXAv",
  "key7": "39KaRUsiLa1LjXChdLN9wni4YM29RZBZSoP9xBHEks9rgLHfcfmc5qQ6tXqw6spCreSzoh7ACbb38sUs6PejhxKU",
  "key8": "3WANZiDdWF3QzdiZNHGH5mzar7kYLLs2TDSvF2yMajPfuKNmW4cbv89U7a1JYYGAJX3bFMsCnFJv9P9fn5gAa8r6",
  "key9": "2yFzLq95exTebdhi3Jj9SoQTGqFYxg9CXMihcxYcNc76XZMmDpa1UYWykZ67o127jQa9EkB2qtpxyuyhmCmuruhp",
  "key10": "6QiVx4juhvdKUsvQMa8WRVeZFBdAsakPnPkncPigGJiW6KKEMF9Bak7zTmA3drLNCZ7vJ5eNScZ6ZCb29K7jSfb",
  "key11": "4UTVRw2oafffGbFDLXaXuHPAPJCwFuFfo2fx86rtHzGCp1Ri2NvuAFbf99YSRFFpix8SMoPsySwXUAkyr7JDxPe",
  "key12": "5tDGYtxmEDXrX2eCa33vT6w8RpMmZV41KCLNgRebP54PchPW8vAZJJfdvC61UbRSksuA3yHqQdCHMURqUPnTMPyX",
  "key13": "HYoyyCD11qEY2tUidrFNCF9Dkjii9ZqtvWe1ntsUCkyM3jy3kWoyLyhJiq4zBRkStzqdRzQBK9y1qcNPeEJhvQ2",
  "key14": "sUPQipxb3j7trbK8YWGDW8EMJGdaa1FbqeUT1LzioRxPC9DAJeeUuaqT6VTXpMPBM5czQDKi9bjoKy5tYZDWSFb",
  "key15": "3ihba6Jcw91jmHwnw9xfVTwNAkke4QE1c39jRxHgSaw2BAvDSz3XH8FuortAA2pGzH1PqvWNJsytAe9CLWxNjik2",
  "key16": "3aWtBaxoNLjdKgQVowPnL9VfmTm2gMbq3MUgEMZcCwPjdK7AaLb33dfKvz4va8bZ5JZ29MSaz5DBqhLn5suUpuaR",
  "key17": "32MjcqcCC18GipsRCJ1L41QydAhjPUc6kZ6oKs9F7SUs3UZpuUWCwjNszqL5ypNcGjqcuNQAgBsUB4WZLMAYMKW9",
  "key18": "3Gf9c8X8xnMCGzTvAgsxdkZAxDCgXdzbRRLSF6HkRr1K56bRur63WcM6sPQYjoiqJkL5zRDnS9Ds49azLtCrvYuf",
  "key19": "3fpZozSiXmTvP7N4X36n1Lmr8mkd62t8EqnUmYPWZ8yjVpPXkqDU6jeYoXnXXgqsQnNWe8YktQgzrSmt7hi9FFsC",
  "key20": "3B68wqkryVdzkSjHPhJw6BpHBa4G3xVKHryWMs1KJ3r3H9wfz8ymTCgSDG6vWqFSFLmCESFX833SQPXxhZ4PkuoL",
  "key21": "2Ffg9pcceudoGPTTHHhbg7nZaVv3bKm5vpLtYSJ9ZnwfskVG7CXZbxyYV8QSjR6y2LFa4JFDWb6nBPyCWSTZdJCJ",
  "key22": "ZCFxdSSXma2NKP1hYwUmNnnRbBYWtfKd3K962W8t8J9HSrR4jfh8mcq5RM38A7mK7Ki6SrjJ17Gs3thWJQVRrXe",
  "key23": "3PTUws1gnqikxiKHYamvo7YR5PrnSRLXkSWGm3hzjRsz7Ec3AV3w2bJmRakeK2Xv34rzvbxuEyGFTwVjWyydtRMY",
  "key24": "47wgf91WvfzfbZogB5GxeSxyG9nGJhc79pAS5sDWgLcGCk5FAKdsitQ4Gb4N9dKLBGAtoJgwP7cKaKMBCwWV4jpa",
  "key25": "Hmw5WQffExf1M8RnUEi9x7U8VpGEWd5DKLQgVaognNvMNvYS4B1783kmngZyPtPPHGRpHpoH3Zk9hGhhfusgLsS",
  "key26": "5EwUfK2Y2FTVMubEHJGcjTU2eePuSRRdikg91zGV6465KdCGq4KyVukbcbbn1Fh2gQy9m4o2B8THQkSDRpPLUoDG",
  "key27": "2KJb2P2Xxtz1CQihNqanTurVsnw5kC7baAWUwAjkzx2WMyre2S1g3hw77iCAXUczvFVW4dtd7xq1uodbTbAU2AT8",
  "key28": "tgJMSFibjfZRrbUfQQQj31FkLGPWmZPMnBFLLJvsbccZFrgoCuP2wvVqoVsHvKaD3eFFuty59usLTWsf1dp6Yhg",
  "key29": "HhakZw1xGcMdKVA7W9FTswmvxtzjfb3dvRNyieKkeeG9xwaoH5Yop4wCLHjtjrKNzxWwfn9UGpBZPmjhaHfqisH",
  "key30": "5XPQoeisiTjbQVmCBH95HocfnAG4TNckevTjDiwAudRWHzWyR2HEB9mmmit7Q9UXbUWoeuZ4zJ53QR4sGCrcjp5B",
  "key31": "4w7UtxEi86trJwojxJnpczWSSqfzqkm6D9PUPahtHNtV24uhe2xCQCR8KN4zgLocBvrhk1s7di881QZx8YBWYRin",
  "key32": "5jMK77qgUqpajW2QWn3CEDAn1G5YcaQom3CcuEeTakQCAQ4AkcvT5XoXdYgTbTmQMHSBBw8cZ1kRmdkMzmZqFaxL",
  "key33": "67URSu2B815ZnZFBLhJecFGYLQKKkuoBdWKTuwbuGmVFb9C88PVVhVCzTyNaiHFStxEfH2YKt3eDKTWVJp5LwHiG",
  "key34": "4zXKNBpjsuGxJVzysYFRRP63smFob83hpWeSmM3hSxh27jr4U3D4y7YfucrYx6xbitYKYCLeKXy1bNLfgEuREB1w",
  "key35": "4YsYojpSWH5r4vL6c2JzyGPZYFxNjP72dYSEfTAgKMCuQ2Ek4kCXMHCruQNpWuwCLHFX4oaxchQQTeW65vxnPXTQ",
  "key36": "3tWSPoCf4hAcHtijYrtdaLkiRD8F8vGuU3fzbNv2qUcW3nNVekfBqtAb3skfBHfZDH5RyUBzLmzcLzLm1TesbzZT",
  "key37": "5VVU8bbfZf6nmoZKArAWAeoPbNiW1TZV4a9bX3A5CY4pFnCXsWiGq4ZN8dcvKAQvuy6AvLYPySBWbYDUWv95UJ7P",
  "key38": "3GdC8P8viqKCo9BECrZxuyXPo1p4cN3iKuBSS8XcJRPP1yBRddYsd2YeFmK7FbPzjA3HNmLymw1KxH5649dZGcn1",
  "key39": "FYncPNTPqFRDrVh1fmQ3y44gQXyaPke7zxZYPud9HPEKP22wcW1CgKYHL69YBX5RtAYzQqSTyMVhkthk1DRCzJB",
  "key40": "4nNpTMR4hKWSSmX4R9LfjoFzi8Ucgy2mYwR1zJYf1opTDSM4BgrCxYTvFTmBYRS9HmJCwAtvmyR6f7DfPWbL5mNd",
  "key41": "1oZs2vSpHutMMj2QoLUPbJxvEPmZqNLcvG6JhCaDgtqMAw5wX13xH1UkyLuUrQrcc2A7cKE491cHCAYynZ3SKUJ"
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
