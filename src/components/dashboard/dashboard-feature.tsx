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
    "4MXj2zFUwKZ2BphCiM1e4kM71z2oZE4UCrEaQUmLAZucZArWTTT95yGUaa4CqKziYNRfFvqKtjVhJA67ZvnoBc9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cSYWnvDWwunSFUsiGM8PaMxgweYVngndskSUtV6rmCgeJv6awbZDZkxm83shbmBHYnyeo832TbGDSX2b9QeYsdh",
  "key1": "3jLQkdNvJoGM3p9ZfnWoK6pKGVKr3Rc6By3cAnjbvX6zNc9XH6hNyoJxe15R5wJxib5Qcxq4wMRSnUK6oY6LZzWq",
  "key2": "5uUBXKGsFSeKDrNkyeomfSyepmk2y4LU3xvVbjVRizLN6eftWJ12FR4P2WTeBZ1ah7qUpRnJ2RRvbMDZSTt4vKHz",
  "key3": "37RXvEkdLJTKZURdpMMqMt1JHEMktRTbTCiJwkWPfKALVucXY3N7f2wSjoMsYgPjxM829YAtMnMGoMqD2UGRbWyU",
  "key4": "4SLcvhxNWS5ErfBMoGwKMpTcAFGkP1vQJD9Y41FTqZjfEeA1uT41hEkBrXXnn5PKdSAp5dVtFo94ADLnUHPfmtFe",
  "key5": "4ZBeS5NCcTnurm2V2Cu8cbEUVEwcjKkRfRZH8y9sgod4Na13crKyBq1mhLVgUSKBdmQ4tGDzhTVw3f4mBcRYZKPA",
  "key6": "5BAC9Me8XDjTRgxwEhwxV9p2q27aDMoxwtNbznagYfB4gxh4wQR6H1HJu7RNdpikaEK43LxTMc1h4QfHfZf2Wa5Z",
  "key7": "2tNnw4TZMBM7JcnMZXweZ2GeH2GugdfDqgAej6sJqnurpxdnGTo25Q4KC8AdHPJrhgXBZ986ENkLJS1ZDnAysctT",
  "key8": "32i7Qc1pKHcTsnJ95N74RXrN3GyBd94KBjgWchxfWQZNcxbE8H6TE8AXY3dL9GLrnwDPD8vT2fgwsUB8H8uwfqf7",
  "key9": "66LrjF6tULGuAd5WKdkeop1LSD2TWx4zp8YgTJGs55Zy52a8h2DGeLAQu7KXJCaLnXvKCGxoHWdApJhAk47XxdNx",
  "key10": "3hkmPshtdAxKSUBBGDM9uPmLC59hXRXnu6tHdWARrhioUpZrusffCFaVYhSJAZzGQJir5cA2w5UUZGRXqGwgxdZ5",
  "key11": "2QZcQKaxUeVaU8Te7EhbJV7nsPFHZ7dy8s8gEmjtLc1ozWBN8KaKv5zd2NZUVVi3V3oiGmXpUvoj2Q3KahjyUp9g",
  "key12": "yJoEvwB6w6dzGRzbKEE8GRsAUVG6RjfZsYtT8DqqFNghHzd1j1gaxYGc9YYhBSNW3ks2LWG3tMPFSxAYrMWyLpm",
  "key13": "4qm2SJedQsL9MYpKKGwQ56vjXvtAMK7ZhwbC5a36gGjmiwV3dGfRpGZpyLTPBjYe2w9duytSSNikoEYr2MPrwFeV",
  "key14": "eWfdZSrEDmBvdNZ7oGoifnL2uhsDT4mdBXUJfwyXqSRTTEuEP1mNcEqiFJRd9xMyxLyJHEmHhXxGNLWetzvhu2B",
  "key15": "3RNS4jALmPKgp5yXoELrU5pQrUXTxnUrTZw7Vz774ETJoBDndH4eWDCP9nFHdsFBRQkmWaqPzAmPPUEHt3yPSuQ7",
  "key16": "3zLSVYqLauZywSF3yrshXv4DZ7wNH6VqhyXkkWKA5fWoPXZeupu1JpCQ5yL6q36GWn84VK3PTAHS4Rmuhs4jqVs5",
  "key17": "5NzeLDx442VCDDYK7upfJcwDptn1r11M93VTRXbqZ8KKm8ztrZBbhGPLmXTUwLrH1s1EHow1Y9A7Sc39xrEDFSTk",
  "key18": "3bzvigCKzKsGdt2eDdhmnEKgi7iQBWMHaAwNyxTofM5ZRA63kfnEcKCvrBazx71Rz3MRq8MmB483Vih1tx4quvgf",
  "key19": "2Ff15wbY8t4MQGLeffJbgRku7CAFiyG1UbTvWtXiqRGvVMKe9YUDvCv6fUsWS9x6kTnxCoUHEEyLxtqzCugCmu23",
  "key20": "4hoTzsGvVauZWLQBNF2ncqufFGwi5kNiPYDLHi5rF8CnK92ersc32L2jkXhj1mhyzXspNXR1h1rVYB6xJikycUyr",
  "key21": "4WJxominhNBtdP1HQnd3bgjmLeJiCQa67G1mXU35hKTTm1uQfKsk7rqUQ7BDKATYmLH4emiECboJSPM5hbedpNsa",
  "key22": "4jaaWnwPkvsVr5HFYZB3YtySrPVpYLMgjRFhbZhN9U4ZZYYkxBLFDu54sxARZARx1dcS9XXt7TzFPKg2mn2UzdJB",
  "key23": "8Q84k7Qazq3J4rd4EzD8oiDKZhwYMfxGbzdWQemsAB7JhXFeZRAmxN854w3Zejr3PAwQq88aWrNdLmWMYmqdFY1",
  "key24": "2Dfhk3ZCb8xLgG8dWtqaezVYjNgZ3NNx41YQwkp8mmNxQZKyaTGLDNv8GE8jTvRD8nN8XSQ4jhGgHvYLm1RBuEae",
  "key25": "3r5otxuWUaPAY6hCQ2zTHyvJutCTMae9hMfy98j9XHPg23CF9ABzs69ZTmX7dvvD76SchK6jjox59uNr4kbMh4ho",
  "key26": "4u4mvuPvjG3SFe52rE4a9drbCK4SiLzskYzNoHJzizZVtb3quwfGPrsfjTA3S3WrmCSPa14HHW7fteR2hqK62XUx",
  "key27": "55K4wrHyoaAXumh4ruzndo43di1tp2gtRffh2fu7gfUBg3dSUNEcmqpUowsWM61eZvoimxMFaSyYJRdULoVRrCG7",
  "key28": "2xH2NcXjj8KXytRF3KoEosRdj8iRfB7XfreNmnSfa2RBNHrquswKjNToU7zHD6sGGVXg6MJTXqY1kbYipWxxqpZ9",
  "key29": "37kjuRDQaaNdNMQwigR1BrEnGWEW4Cwc9x2cHAQCL6T1cppmYupt1j4TrEjwvCQus5916nDTUkYfJLhMLU2s7EaF",
  "key30": "5FRtLqZaqTfCy58LDme1Ycxc3nYCba3wFcDDyFbjwc41ZXYBvhpezNmkqptDYpTpUGUmNZkyZ8Ra3VuFkK15Na5p",
  "key31": "56PhZ7gBinrLGZ4J8Vmz6NxMHKB1vvSRDbGyPzZ8hu9RiNuWF2Pz7ML7Ts8ZQWtrJrkSbZRyiwoqZZCVg2EtMEPH",
  "key32": "4Uu4md3nmjgEUzwx6tSsBDXP4ZRB7y85fD86KZ2Qqt7BQ2FSVRRM7fAKiPFTqh1KQN5a2E6KzGBLE9vpnwpGAZmY",
  "key33": "3Yd4ZL3BxLBE4Vk3TcXu3X4GaDCZmnMRMKkWsJUKirUDM3ZwRqxrZQex6AbivHmNUzYqN3SbdmnLMhcGaQS9frHW",
  "key34": "5GYTGDRFWVCNPVj232U6oUu2j5wtMtico7GQv3eat35gWxFTZsm5BfCEjNPeV85qBMvMcPW7zmS54wS6mp4ZtkPa",
  "key35": "29iW1gNW5HnPDJRsjNRHVSLSYU5cSjRDftLTeaAawuaricj1EAXLPLGmtjDzNuQguK1vgVx9hb386R32eUXAQhxk",
  "key36": "3SzKoLe5wKautdsUKKiEYHfJWZhJyCkwcN1PMjfAykbDYPK9agcf68bwwE4VDiSeEwpt23K8TTM7jP5xc6BrqXJf",
  "key37": "3h2Z2a6LtGoh9KgJK7qJLiChYpexT2vNV6N1XkAMiVyPn9ACTdS7EBg8htqSadtsKZ4RPJPq9M6ynnNyvm8W767D",
  "key38": "37tDbrdcc1LTg5SWZqFLEGBtxLnbBrn7yQH2LPfrUWzSnHZBpvVxwW92d9twbZBzUEdNKxrLDosdCeac6xHs4NYN",
  "key39": "2RytAqcFCCem8p998Nkji67mnGrd4gsD5DQduJ8XAtEEAXxpDuCUWmqoKdbvPRxxbbGDjayW3EB3Uot5oN1Mi92R",
  "key40": "3jaR58jSTgN5QuGP7yw2iB4cwi5iLyzstMyRtPKpeGjPHUy9NkRvgt8WUFLbdyaTWm1tNHR6A9rR6yyTe3HnFjF2",
  "key41": "Nqzb3yB9jfiGahSNLWAP7NzXDy9vgAUPaxvY6iQUDZniSSHRcMpZ6f3B3WwGDCEoGADhDRpPzVfRnK36pneiVYN",
  "key42": "53abmxXcAn7P4Cf8RQYtAdBRq78Q3JdvSoyZQyRTQwMPkVJWHGopXHr1wM3jWpmEvaAzZ7eYrkCD34kdj5LYH3o4",
  "key43": "FWrJmqeHZADntSEFhDX631N6Y6Ps1hXSVJ6iYqrQBDkLDAXwssQMLK1Zewk6FDTdLw3sBMXGkmuewp7sPhBT4Sw",
  "key44": "4eTfgaDZJFAj5vQzGPU49uNcdhwirKdriGqHNZQt34BiVHfVzZDvkc7JF3gvKmj896HR44MV2FhbgdnxM3UhA4FM",
  "key45": "5djjXiGpZ8fNYZG17F7vVhBwnFWyT9QEqT3RW9wpXTEnnf4NYMRrrVSC1tF5xmXgq2nvn9P5SLHWFE5jfnTrysKA",
  "key46": "42ibEjoopHzS3tHQeU7Mm3CcUKJM7t9gFeY6799Nt9UAn7dhqv91RfzCB9ybSBmr11P7FczbmEVXA62jzuZbd2vP",
  "key47": "2qdsiXJzZ41iZ7S2hPcNfmXbUjMprzbFHXmJsbrifppZyBzk7pYAjQHbSwXaLG7owqJLL9MSG3CNanQNgGV1Db9Y",
  "key48": "127BsNeRXsAhx6FyR629ZgHpPrbLqwbbfRcGe2xnKhUeB24o4AML7PV1xoQgQUW4ioErzQELzUyJFtpRoAUh2R6G"
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
