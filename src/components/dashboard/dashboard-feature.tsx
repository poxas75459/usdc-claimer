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
    "2bkgiYmaH3VhtmVa3cV9Eo4Hf4PcGTMF249ep3csyNN2z2dRusJusZxsPNQpWQi9W5MXmmeTYBiK3QwdpQyncuWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vmBoYLRbY8KCW2M1AoFiBgKNF4ARUAv2iWhpS4ijst7mWRZjeXb6hB8T4Gxepq4xnEzLkzD3RdgePcjt5vTsaVC",
  "key1": "64KP2meCLxQFMEvtxLkv9GpMAkmoFBqYdoLvvJxT7QvZHEnHfQMQ2zXViPVTTHvV2uJdd8ur9GYpCF8Dft4c9Rfm",
  "key2": "5dGkrmuQumgzPfjsU5f5kGWMFmqe5fi3aZtG3xkqLo2kuMVPSmMa7epEXQagTBsWWVVg4298dSD1n7h11gWDbUBb",
  "key3": "23WwZGoX6LxeBqHKRxggfEFcK4MBgYBd4PdaXjgMd5khKCXWYY8v7CotnN6hC8MGQ8AHYspMD2nEPvrFHVwyzof8",
  "key4": "56XwoCKtpfisc8udVa9C5Dp1y5Z9U76KhFtaiJbKtEEW1nn5i6TQRT43HZVs61f3cjWXLWZaPF5z4P288m6GJ726",
  "key5": "2bDumWiFtRFQgV5JpmmFBr1u1gwHezowYpGNhLAzHgtYbbe1WTWNHxZnFQ786WSU7KJcQEKXv9oSMMeNW1mHwuWe",
  "key6": "2aEer4QgGMDCb4WwZCmTZYXh4vBK6A9J3zeQ7hs5qw9AMtQYrKVVPFGRtfpNtNRKmZVEydycUajPsTfVfRhvZArd",
  "key7": "4xEzGnZq7p6kunwMDcSj8mELJJqGc4W7xCupXxp1pAxL71ZFE6dHrdiqPHxypA5nxMEJ4ywXBoeKKaZuewwcpkk3",
  "key8": "3JQsunxVU78vSPcyfqUkG91J34H44fRR9pXD4Y7BizoWS7qJxPsqyBS5UhRrxPn1w5QAATkkdG4kncV2SXYPU1yM",
  "key9": "3JGnSh4oHePawL3cNDCbZDDJtwNyHsL5Duvfw7QasFqTeB7gCjdSPEhsKbAhSH7eh4NpiLFzmY4Yuws3NwStXNn4",
  "key10": "o9Hj5weBB4zS4C5RXMSc3DYpwA9V8aWngWeSkeFWW2hgVjMjcjAx5g9u2gGC9cXXsDu1shaJXhARhFBEiA1eNPi",
  "key11": "2w1HhZkgCTA7FskMFx6eHGByw4bBbjfbwf8dCrf74VwwEdWvKB3RWJHM75p6omwbXFNk4H7jCevH22msHyWm9S1c",
  "key12": "JzVHGbogxoS8wSy8b9UkmzQ5M8hozMUgsS6FB134XDb3FP5HSz5Qtrvxs3GnUCz9KcYVJjN272RtCfMCk6fmnvu",
  "key13": "3K4oTL3HVKgVwdaeBXpMRDoJSCH856V6NPSwuFnszxEMC8KZmZGN5K8VkFjzBVb4z39AZifyUMxdzv7hy71hsQN6",
  "key14": "GQUwNaEXMh34H43Xrk3vXGBmyN3bj7iJkkA2hjRjnPhnxuoBbSrQ8C2fJQMcBnPMGckUWFnHMQhW4cizxPV1hzq",
  "key15": "4ZLtigzQoz1iRhBhYimo5zJg1YwhEemTLLm4j7Z6zQmhvjj2CWHyWHgbe4piJzhMhkmULhuZ3qptDixW9gA7ZLf1",
  "key16": "3wN1jHANrzKbFNPuwmFCA1PTaPpzckQyWX4n4mwWiZYsadAMdAwQ2zRRVjK7mRnLn2VseqtuZZNmNohsEzpos8JE",
  "key17": "67EaAS9SxoHAXNTcTfAVSrPpMmoA6vwDZZD8f5arxZcDSEDWEVg7SZZd6ZBTnpC68g1gFYwNHxS5Ba5RDYhw4EEt",
  "key18": "hie1GazS1nVWg1XBgoAGYkRa8Fx4reatVAZ3q4WFac63wANbe7ycw76Xrwsq5ZCtk2X8rA1fr5qUXPkXtjiGx4t",
  "key19": "2AaxMEMUDexTXn7nosmkjQmN84TLtJQ5oNvzfdegpKshNAvHBii5gocxG9Uu1fzjN2mrMBMkqEGm6Zp8xXSFtwZG",
  "key20": "wCagmtqCy1xGfHqMnamk7e5RpkMCtm6y3E9mm3VNRoJjKCoCWT2TfwuEKjBg8q7o3HERbwzJX6QnCQLXdCSsXtP",
  "key21": "ZJnkraXbEKFrNvNrHNygpCppmTghdqDgKERDSD6AkvpW8MAC4Cz9dVs8rw4z53xFJgJzu3zc116h847ZCmPhng9",
  "key22": "5s6AitWnZzKTaZ2iW73Btef41xy3TjeNesmV6NKhzWUnMPzQ7tfsnwd2pXUnMjMwri5LypxMjgSZZiA1sCMQw9P6",
  "key23": "2CSRYajt3qBkhyiEytsWH9q4kf65WFBGtUTvWHo4jmGTN963iD84JX6BKZvkeEBpsQd4N8otZNMtHT7bi1uR8jVN",
  "key24": "x9AjpUtmJZYpY1ELvdSvZ7BQpTnW767XqGqfdjFPMHUZPdkpF7FQWqn9cvDaCPZUD62HW88uzBQaf99VKZvMM5F",
  "key25": "4CUeSQap5SfrYbYkJ8hgj3Fhq55bLSqihF83dF8b8GtCMuCMJJDvzQawUk62zXUcyJWnKo1xh3iLibpuPfwF9AeP",
  "key26": "3fz4GPR3Wf2jtadbKxpLZxUi3wkCFzFWR2dSzo275SHER29psJHKVAgymz892qJGp68pfFAPtUJwxq7mhpJ5JWbF",
  "key27": "2CLWYtAjFrQJVnfK8N7WtzMZQdRjWuT2tVscm4imSCvs5fRBzmBYEY5RsQU2PTqeLgwF4aAK6TD8bQ5DHP4bwKdg",
  "key28": "42sVikVQzsyXGuwBGoivPfHox1sjojULDipqcyBMHNViGbosiowDriuk5rwPWe1yShJomEQn2a58xRtoAkixdfJz",
  "key29": "sfmMhkL6RzjbadnKoRrotPuFts1xyKoMjTRt5v8T54EibhPySvLTn57gJ3XrkCVw5tU6XLt9puqAm9MKHJ8CrwU",
  "key30": "4C1JRtjFP3iE9XcsY53c7jaBeEQFFT1gVBBSgw3xg1GSHsdx92KiinALZKLbw4FTvcK62nxdt8M9NpWaycc9mx79",
  "key31": "25PPPDHndXj9nzo8Pw9nSehrTUMFVGs69uRW2KDA12zgbFEkakiWN6EEkxwjXeJF9NwcEBMDaBUWCnWuHemjKSZU",
  "key32": "42q7gru9Epfduy7rHdvgAc6PtHpx3HjmfrPugo9hn23m6WekquCdgKJ5ikih34Am3C7cw91sy5HsLmYP85pioCcG",
  "key33": "53njwGRHqieD6gmmt5UjYa5NH1o2WT6YyBgA29D7WdcG5FTDqMa9BYf8Rym57MSb2ViWKZqN1f2HKiGXN9V7wMvR",
  "key34": "3hoUaPaEPem71cVbMdhJN7MwXV2CViACFDiN1msR777yEZUfABVkKRBfYZZ8UTYVwJPDS3RuykpPjh3GBRYdNu6Y",
  "key35": "yRBaXNKJuKRQFoQeZ6hdX3SEEMSJXGoa8M4j1BnoWoCX2ZM3wksKmv9Qmii4gBP91wQRu5bHjXAqz9PhYTUd49L",
  "key36": "4Hic9MvGBs2qS3fQSKfDGJKLGB84ieHZEvp7orGSssLdswAitFwrRskW5Zp5haNvukCp17jN5neZ88RQbKFRE39f"
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
