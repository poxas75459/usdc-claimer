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
    "3too7YY7LrjDsvpwo3ZNmshzA8VH6G3UbeW9zDT1zErZKB6XxRGDRK1hHnSSVbaUCCz5JKQk4AkyKMpjorpxR5hi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FjnHihiEXCe4asoJvc7wedkiSNjWZBh1HxDWvA2DKn4MbVsN2aCnrDs8YjY34rZBPPY63pCyNeBRBgSWcVgmdXc",
  "key1": "5F3dGcM6mEi6zkzpBRLrK9tbCxBpPf7aCmUZwwD4PNPbuQdyAYfBAaY5bD1HqYNZtR5TgB9Lu4ciuAcYbFkY5pL3",
  "key2": "5Ar3KK48kUpXcnNJGkbaNWPtZ5oTrprUogmwa19Es31RX81r1kDmWMHLaDfmd1AyL4VUYG8CP3FKFPp7ruQYtekS",
  "key3": "4PYKxGM1X7mwVU377KyXYXBvy9T1Ejq3YJNm4tWXCeAnKK8mUhqRY31i9r2T8UZH3K4VSo6bhKHmZDwUWn3XGS83",
  "key4": "6Cjbeu2xVDvpea3b6s1G7ffGbmCdrVU1Kvbfm3FrDwq3L36q7RFvEsG3DpQHBuLTeXTNH5KRbU12Gs7FN2CsGJb",
  "key5": "2rywyBjmykifq3vzRTjP45UGywbnLt7f85k6gdZivRqKWKg15MXCMFCpvY7XJEqrPYg5akWfAUXymBGCwPtA2Fs5",
  "key6": "42gh2BruHnxm9bSwrujvYuWUfXEdk14mZ3TETonM3N8bSff236Lz79nBdvHrack5h2sNDGTof23zDt74z58T3PEg",
  "key7": "3iKzbfeE1isNX9WzhYtz9BZirhSC824gGyJ1WBZN3JhkLSkHayQtqJGm3GB2YEkT1hPsoJLoN5vsVUtpxMWPSteh",
  "key8": "4s6Xy8ao64u4UqpHZm7misBpQrRu5ufawCZE2UJr59Rq9NmWw9VdTfdYFLEJbKChq49skM7iLKV37TUxvv1NCXGL",
  "key9": "3fSrcofbqCnJWY6FiLTkVgR6o8jBtkLpKdnmEs4hCimJ4vTr5qJ2py4AWB8WbqB7gcJySdieoEYohN6YPXK2XXW8",
  "key10": "26aG5GcrPu4BWCvMWHFg6jxsQpeKMEr6a7KDnTJW3k4Bw1pMv5Cg8xhxFikJS66GWchgV9igRg4soAcFqr7NVtmS",
  "key11": "3arS4yLV7fXkE5W1pbu2GNMFCD74FCbcK3N374wgpjMKoEtWZie9DPwPLhWucv8dWUZEV3BKFgamHGqq35tdamG4",
  "key12": "3GjcYZodZFkvpwgNF7yXcio5DLBM6eoHLb3GJ1jSKyMuL4rbZ6vjPcoKnMRaSABJSEehkNCrHKJXqbF3UQsEq4Kc",
  "key13": "3YQHJ1UgWZHgbSLTvcB42ghnVffTXVtpstGja4cKKjh4PdPD6hJQuRWX1M8Tf9xQM95LZoXEMYbRHcMHHeetrwWa",
  "key14": "3SgRtJsc4APc2Ey1feN9FQn4WNNND1kMXUHFruV4Gfp19vxGX7ZMr7rZiwMMbvZaxd8kTkptHwDXccF7L6r9AHji",
  "key15": "5VjhdYyd8jXqbdJXP69dctLvY6VfXzxGAuKaJ1JyacybERmDhDGK3LzzdWF8qrkwqEdFVxKt1xyEtfJVqqVZ71oP",
  "key16": "5gSFMMkqCMwPBayYwZLCSsTWF7mbttmzjamh1VMf1hFd4ss5YgRF1vWnhkK9amWVV1XLda8oo1DnwrFvEf6WCs8V",
  "key17": "5TgvejCppVDNtfxP5xY4azHLAxYPB85iCDSxVjaYV7RETdJMgzgWcpd1Q3uXTTvgQ8xNDncrF4MHuoe56E9mZHwq",
  "key18": "jtgrA7ETaNUJ558bur5RzxQmHCKWjdDCEmR9k1JtkPyP6YRCoPN6CQxVCDbHBqZ1Z5qJJ4DHSVZ2x33JsnHsxjM",
  "key19": "3AmYEnpzoiPMmaZNcsoquoLby1iUY4PvRUkvx3bEyZb7ps1KxSFSGEchWPUHfM574NWkLpeCvX5gXsSrheCYQGuD",
  "key20": "417fMuMwzeJkEurZsmKpe9by9LAP1DUgt93HQq1nxuA4SoFhx37J2cpNN2J1CXQxg1EH2Fy2Rz3Td3HaAZaJYrLh",
  "key21": "3iygeo79CziA1Z6JTWG8CeaNUKJLJY67MnANARdcpDu847XxHsnXtVMBXpX9NRZqkSvJJogXH1T3qa5dwyF2fE7N",
  "key22": "EvtKwhAAJ7zV4oWgvGJMi3bdjovMpnbDfe18Wx4ot1zJZQ2bSimvy9FWW3P7AtTHkHzW5MDMq9NmAPCNVW9EEdH",
  "key23": "4WCoKx5UXR4V1rcyjfi4QpKzTk748U8eMhoekoJNVNXwd89VmyeGEec1n94rqnt2Q8P2DM2EUu6mtHoetV51KfAq",
  "key24": "5UT9XB3oqN8oMmv844WBR3EJntmjcWXYZn9WagpHbtWA7HRggwJHqhMH96awkas3UCPoEVrM753TubqwUubV7JME",
  "key25": "3LTzV9G6ZHTX1ZXBEbJUe7ney5W9hdhoLGxhKv75mtHawXHSn9S2F3EayZDPPRbfrTwW1gyzgrb6LpesLM3Gy6yz",
  "key26": "4LMHSaoBC1zaron3xYbFaGmZk1KKT7sUV7sxWQvfzGpLyQJv9fMeFxKdwKAGGcFAb6VUwmRnT1QyFYPsQ3YqReLp",
  "key27": "5ZfCGvyZQwoFaau9q2aY9tU5i2Qvp7j4EmRXVPv96QayTNTMvNPYWSNWjvC5gW1kCATtS29wop7F7puh6sgQTvCd",
  "key28": "33QALVY2mRe2UmXfaTr8T2hPJxdij9x137qq1hjGKzsNZQMV6od1JDLXJYJ1tbNHEXSv1jVqb2UfbL4S3y1k6e8G",
  "key29": "3AZTdaV3qS5mEnTGEon9pD2U11CQ1seDQdNPsPR7ATpR2m3kC7KtgyfBxQWVeTkM5r34gJ3wYreTh3HNufVTb8GZ",
  "key30": "5gshiiz3BW5LuYzX1gN2mp73S81HNKd8VbEb9uMHGjJza2XQx7xALz9kx2CaUxHK5mua5afRv7UMBByMvCgcj8Y4",
  "key31": "5kKZqJTMGBL1LmbKh2hBbZjupimMy1p12SsTPqK2iJucXPQ5CnE8K4XZpkVFV8fF3oguf4az3aEvsYRFdiBT781j",
  "key32": "5sJ9CjD6zFpaS5Bf5ERteEZ5PemSswgjX1PozNcjxoM6QiLEbNujpxRLpaWsNzGQwtYBXocSqysvHhmHkrFLNo1h",
  "key33": "4X6vcFNjvranPShzZ9KfCKCXVmXoiQyiqpQi7jYp3sEDFsjoymbMHgfJ32Shbeqfdb8TKwkUQje8ueGGPVbYx6RH",
  "key34": "4BanCYKd27kv5ficGLK5qKowxBGbF2t6WuRSKYv7CpcRNrC93Pxtzx9vidVJiwQPpF4KwVHDWaUD6Cxwth36NBNw",
  "key35": "4fu7ZYAsJK969pn7FpfS9djeMLCD8VfbDzRhWCbSPX7aChpmbksUUQVx79sBUxBqhqBYbBvWXLQiTRRmtNdTYSh5",
  "key36": "2s56tD6FbN5h8MiMi6nKnZ7jkZue6dMtN7oi8Q45aQfvtwwDQhvwpuAZDEdaSAUYBeMw2PuLBS3M2MEyEpRbsLrH",
  "key37": "3VUuFzbuqtA3Vq4hG1A8e5KceqT5S2LH9WVLjqMEuku2g8VZvscq7LZ1h1BRmjVuZwG7GbJiJxEbqSQwYQg9YNxi"
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
