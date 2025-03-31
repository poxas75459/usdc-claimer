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
    "4Ycwi7a4BvA5tyCkUGFzRP7qiAykzmm3Mhd7tFfJshJTtJpDW1iDnqeVMZXftBGuoTx3djWv5jujmQDR6qtHr6fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4spPT4xvfHu173WV9cbEQ6huaZJuGHuVNbW7fwmuhqcPYnpob6hoWzxGx4L7PzNob8P6ZeWaAsK9xGnTfAQYxKYJ",
  "key1": "3nvTssYPiqFwCtKdaZspB8PiQ9k5Zb2r4Y4ecuBTcLDdSyx6TTJoqvbDWGW7ovwpVxof5kKEYYYoW9KynkVDRcki",
  "key2": "35WL4E8YG4HbS2YtUMPqqKaBkP2hJcUfHH93Ri29TTrM5umUDHsYVpHHgS2btWWAmRmiKKaiNjvnkcEeHt9kuEXM",
  "key3": "5iFZ3cfGTuda5TDnxHBQxfksKaSsV7W9L7Xgn5T8V7TLxq5Je5yk9NefkG5YocV4hu9QcCDvg2qYSpj91KoHJRsD",
  "key4": "3UEdPiVKwQP8vgxiw73z4KV72juVMERTtYeKRn57fFtw84AQX7sLtQqHorLo5Q9ssdyv2NREyTbGpjCS3BJstrGL",
  "key5": "Yc53UrX5Ei7dbkr2WhtR37tAWYh7F842m5w3ARw5nDi6wjLmE23iGqQbqb8dJdEJBKk8d9HtqZyHPJEtmxDBPcc",
  "key6": "4DBQCQwC7e33LU6bhWtgtkhgaqnJmFuxCdc4BaTZhda4EHo5ev64J9zszYhjbfsokvyFJJXrt68LZKSFgyrykKe",
  "key7": "2MvzHKq7GutxAao56BdtXqsW8p2aEA2EpHU1QSuxMWkFDb6o8Gtz2aDD1Ru1sHW9aavpmUoSz1jK9hk3iBqLXMzj",
  "key8": "2qLDb33dzL9CWDMtQPRdY7X8SByjS9menHLx7QwZQLjvc992fFei4DKfWUmmLtRZy12WLhtuBwacMyeSpmR9CjkD",
  "key9": "3MNDRitXBUiBKkxhTcUMxLKSyU2C4kjMeu7tZPmTukmAxZFu6zzyyaHij8PxG66B9WBjaAZ9xGQ4B9fFWxPLgRLQ",
  "key10": "mtb8BUHzQGKz4vckCzsCsxe7pFLAhw6WugFLeLpUYmj7RcPHM8MsDBerCBtBL5kVNQrgieFZVeeAH2itUAmR1iA",
  "key11": "4bNWXtMgos8Fc1NZ8sAMx3RFzPMVGraTGSi7y6SEMa514cwMLpVS2ZQm7Ai7NPR1QowkAVHAS3gLWwPHnTTv3Kfw",
  "key12": "66zht7JPuH57LVroGa31j3Tms1GWZUh2hYvm36WXtFzN5eDfQ1cC5MUk4Xpaus8JbZp9eJh6Dq6xAtQayf9prwQZ",
  "key13": "4fzpQ1xw76Rc7Rz6oLQD3KsydkmGK2DuW9caqZftmY1YdT1cDtFCXqYx1ouZGyTHbM3SDNwDAqwgZdUsMPUuFWno",
  "key14": "5ekhAhk7wLAaf64ZJfj1tcmSFmwm1zbqtPHteHz8oDbwQct62JA1X9EB2dzZgmPCWknAS3BdVrDwFmLKzVrLdVk1",
  "key15": "3xuJsxy3TRcrgk4JVKKTnBm3EcdUSyspF2ZLom4UWtq87QCG2sRXhUZ1RoxhtcpqkQ9dMjUUTVXxERpvYWSR43q5",
  "key16": "5mZL89roLotTLRyAA1ZuyLX6VyZ2YQZQBhJHENAU7uMCSWC64vYE6UMzxdsbVkVsHAhM925jQJPFGVeKq3H9KsLd",
  "key17": "WtTPEbsd2q8sERRgL5x9fsf7AimN2sHiZ25FTSv5qh4DhyPPsLUHNceCEAE23Nie9bWscGXpQxZkZjN8rQYBBaJ",
  "key18": "5SmzY9bDeHdcL5SyJfQNLFi68XzWqduA8guhXexaMv6znjrWqedDR4i7H7G6NZiZpKhjvVTpLxTrxg6b6JsE5Coe",
  "key19": "vEWPqaxFEkHG3UWbQCEkJF4EeQAqRmrAQqJ62eVUFjAiK7HvNucjV49boDxLqUAJZqMrchXm9JPxZhD1BojS7af",
  "key20": "YJKPdbCE4no81gTAjCBF62moPddAjiXL2sqSAfDJMuWGHsmSwm4SgrSrEfUbzpFjpRpkPcSFoFfYtfNP7edBC4d",
  "key21": "25kJRCHXpDBYPV5Tc2334YLM5bFowthNurWVnWACQvVHyMknWF9w8zsJKXLUtqgGEuWNAp9vEEDjfdQ4kLcesjmb",
  "key22": "3f7ghCGrc7dVoML4GeeUpJUDhdFjjQMMFeRShKz1RXYZ1bVpuxSeX3G4y4PZ6gUYNLXLG3P89egGvEMo1MqABL11",
  "key23": "3mJGqH4H4d9c5w3cVU8MegvJPoD2SaQ6GSpTEGxYmAJd3m9TVufxjT4gkdCSvk2Fa8bps33XTanQWmSZGKafq2V8",
  "key24": "Phy1A2SQhZFMCHpi31YMZ1PckeYZgTYMY75tCt1Q54Js4rvXMFQH6tSqRQJz97vNEoAsZ5iv37FBkgmKJCkitHU",
  "key25": "3m4WXcrqHzm1rUh54oiqAQRaumE2MhkNzmWszaYQpUk2AyN5qrVu8vhgt1sqhuHQ9UgX43fAp98vKoLodSZdkNQZ",
  "key26": "4aZeV58JSDwSw75N2BvAJMNgp7ghntGdWyAD7NztjYhA6izbnPSy2aTRtVowcZBrMHpAG9ixp7dCgiWycKuz4RjE",
  "key27": "55r8xDbYH6gjmv4qoQ4pBibkGtWk5prp6JmvXSfPAEAM9Zf17CC9YHgw2SSfXnQS3i4u2o61KU3wzsX5aaLczehb",
  "key28": "dA6xec32toWC85Jgw1aT8ewc3dh4X7aVpMxwyKwgFBUSRMFBxUbCq5bZcSt37cqr3LZPy6uwBkgcwMhXDXz3o63",
  "key29": "2WbS9XVa3WpVSvaqjHdGtyNkAfyhtpeEzyGhb2BZ1uBH6n32RcKgmFxHzhz9hT8iNrAF8s4nAs44vwKVC1VAbEP8",
  "key30": "DrL1qrVdnWBSEBMnWyzKxMbopn8ZUYNTfLGgokA6K4q2PwRHSc5zphwBqdS41KGuzeNfC6eQjsJiQiwUTcWuyUJ",
  "key31": "43hzwmnf45nnoKKgdysxjHn1JkxTxr9frLWTuQyH9GhqEsRiyyXsedNgxRjxqciUhe6sToTCThUEjBCUzZbnNDji",
  "key32": "4FnJR2aDBHDvUzUCeEsEZf9FjsT8xQ76PeKUWyv4HdKqxmMa4gHYmQcrtyJzcs6kbGc9STet1mRNPUmeqPFDbCEJ",
  "key33": "NwsDCbwZvmZKKBrgu24rZqyJCPASRcD12rc6F3643C15YtzNtaiVrC92y4MkNZKqb6atxR9G5RgKmsSdQeX6peX",
  "key34": "4uWGGbeKm1HQMkH9ypGvv838tX9b3F9UguS5aQDH9ENiDBaXDr8GdhNc68HodqtwUiCFjAitPJtpcxR3FEuUFbtn",
  "key35": "5CDsSy6qoZQfePNRrSksWJb39Q6Ks2p61jg6HzuEVutn4XH4TwcRQgDjYMdPwk2EBgyPMAghoH73Deqe98AMNNVJ",
  "key36": "3SsjhdheFBSXfR3uJJLe5Y5kyW8WTAPCKbbCwSyj2KR1M5uiXQPprXXyYq2u6q6k5geVFQ9rA9hKU6N7fMW1nsKs",
  "key37": "2faqK7z3QEzd1HeSjctSTzFgQJ1kV2MVraR1wGeCtsNzJxVqsTX8i4uEwXmgGyVxarQydyzAn3k82CXkk7RsGT8K",
  "key38": "yWoJ6BJiWS1bEz7VhMc3eKYfaUWo1E35TWCcwcMThBr1Qc831mie1ouQbrDNjHGUvsNdvcQwbMZYUHRrwmXj11A",
  "key39": "32ZTWzPH31prw5PnMcR9UUmR8y8gpLwnFrvEQpwnyhPShr6hFCKYB4DQWiFTneh94RV4HQNHyCnDc1EhvMUyZoJn",
  "key40": "4U9Z75BKdntUXbjarudDu6WqBaaFfQdkvrtLsDcKxyjwMLsC9q5hAvY9Z7aEAV3Ke1PHrMQUS4EnoKAiUcPhUrFH",
  "key41": "49qqvLwqvjtKW1kCA8CRSwJQQGxJJ4Mu2TFbK6GNwjcWaEHFALgDuhq9wap3XbpNzxDXUML259xAtkMbLEyEetU2",
  "key42": "2ZPp77LTFD8KpD3p6P9zzR1SXQdA7NgHdHKrF8whPQLJhrA6hpzQGPemvbWaNvupEae5NaNWF1xNTF59nPDf8D6b",
  "key43": "43pQ35ni7tSgFWtdXtAo7fEoKDi6YVT26FXp13s2NmnMy9MNMvKfaiWrb2WFGDZ9WWRbdgpa8mamRfKNtuwiLwCK",
  "key44": "3JDzkMkGb3BFmE3YaGQ8MvaqtXApoDNXPPuf3WGfJyzJYLPLa4CUq85CxeqEQ5NcEqn1L4dWdf1eHxyMv5ywHDoN"
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
