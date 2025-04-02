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
    "5crTDzwU1BByMq6uV1uKjE6v3zeVyAgaKqK5837eK4Yyv7Q54xGQZj7YS3jtcGmhq7nFws95ZvWgreP932w7Ui1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VfYQzXDr94gpMxbDM2PGttGSGHsSJhKLjBHRb2L1w6wYouJ9aVW4YkNJ2ceeDoY32Yvc9UYjm1QXdZj3KufSGm9",
  "key1": "5dcSgZDCsoT7gna43CPUxo3Knkar9faqeBPcYy9APo8kX9DZ7JQk6gLvtXswwosHYRM4WWTgVBNB6NWCzQQnz5Tj",
  "key2": "5QpRHCM9hNx6HDoFTdR77vUdwtZ8f1xQAFZ7d2FkjHMJpthKFCSqwMZncCwCUMU73igB1BFi1TKYrSt7vg9Vq9Mu",
  "key3": "3cMxhevsYyjmLDTZahaY5vpt35Lpez3K8DiEbB5w4CJhm8RaPZ4cY8s4WCDi4rxa8rTReukwJLREvRczWZ9dEAaC",
  "key4": "4dfjMeaTTRF8jPCTQ3h1ZT2miWsq6u4JFBDDAFYdfscsgbbANo2njrhsFq8bnuBFtgcn6VvToq4k2QZcCLbtSW5q",
  "key5": "2MKG4eP7B5PVuBUjqF5GQ3JgpLak5FeDva9VoodzUJK71QV79dtRSYX7kEEH2g4p6SKoh6SsuYuxH8Uc8ZEYJsdy",
  "key6": "Y5iNZqKA5hhE6nJmNVdM9JscwWAnvkN6LT8SUWpCaTWYpk1sebYASb9HyTK6WhBMc6zi67XfZuzjzffdz3utJpy",
  "key7": "3Fav2h9PUWea9as3GiDqadu9r99ifWWuVnZj681mVReWrSg6uDm5riRVZE99Sjj3AnZ2ZP3yR8go3SWnQmLLQLWg",
  "key8": "5x2ug8vvdJk9SBp5f7PQKDDMmHnJqnNa47zBpGffq3C44mJxnheQMqCKcNQK3TQhZyswpV2EuFRFb1QfuWrwxvJP",
  "key9": "oukgKFNKQxfCDp6P1m4HwH4yh7g717uJrHKUxEidMAqBoAw6AA1Ln38uCurbBZbjAbCeJPviWgQwdJcs7ybWoNP",
  "key10": "5NfbbAMgn5STP7pgx93NayJjfxhHsy82XFyzVv9vn5yakGmrYSjuoSBWQFheX6ZYttLhBALH13CxyfdkuWdaPHSu",
  "key11": "4s6oaF5qLJPVBVxz6MRHQu9uFMS7UdSdCMLcdp8WDy8LePQ537FCSzkLR7ibzKV96S8wBjd1Dspd3yibSS1f2oFY",
  "key12": "2VVuJH82HRQrrmoV1B99rsZGffY15RGUFzXQ4m7EfaWnfBeZH7zm9qapPAhYfzQTqN492xmv2wBukFCsDr2mmQ28",
  "key13": "5Rt9yY3a6Dd53PfhXdSFB4Ss23gYx8zAB5LZszXt39LKrirprFUYNVM2FTGAGh9QdWjY4gnvNT19sEfeTCYCCHdZ",
  "key14": "55EMHEFe6kbQ1fBjE2qsZYgLRLt6cKU2dQnGTGvv56kZkfZNJQScaovfPXkgvCYbiyaguStvHgsdpNcVNFnHGwrC",
  "key15": "3bceo1pwPApU4w3ksvg945erSC5zR3fV87BgFGJ8SJkRjsBqwqtY5JpZFcYA24CyDvxj6qyMYs2Z8nUa6Yf3xWSr",
  "key16": "3Yf1RR2XGKHx7YbQ9RCr8xKNmAwJNV3VPtCtGxWqGv9ehGPnEYGtaaVFk4fgb9PdKSL6RovQQ9dg2DkZ5gsy1P2c",
  "key17": "5f4iMHLYSidY4h6ENjpEe12saC7DUaByMwrLLy686FX2b221Dtgf5eLtmPnieiwXFjUJUaFLqBorhE3hcmMBzMP3",
  "key18": "3Cpgo76Mp8JjMK8yMX3rwJLcXwztEDZwUxHyidmpEyShZgcWaxPYRJjtWKDUWUZWQMEeG8UdzuZiUkkAK5gYnRfP",
  "key19": "3iMgEVbruErpwgyJ4JAZzoBnwhMyfLXgWBG9uFhKL4sCFrcmApCzZrsoQ8pEpqg3k8WY5NJMmKqi16TPWRniZ7kW",
  "key20": "2uWofrdtARkmkFKYw3pfjYJWCNZcdPh71dSj3VHV6rfd2y7oVrZVwFYyzJL2mrQWJ3JGTQv363wzdWRyjYL32Mk9",
  "key21": "2BHbTPBPhXoVLxgsUs9YtbzZEcyXR7tEPZByE3Fg9EQ8tsFeR1aHWAEqd7dzhpwsHayfUcU8k3rQwhiwbum8XRxW",
  "key22": "2AiBPpW8ueQvAZJfvtEUgFS78PL6jraz8ppQYsT79QywWQ4NoUUaSEaicm6bp8xV1mSzqm2bCjtq5UDR2GZrgu2j",
  "key23": "2X33EBHyfoe5GgSk9cn7YV41HZNectHiEh1TjPtx7xUVVcWS5WvAM8z6hdM63J55ypsTRjRt4Ja4uTk7DG3iMVYE",
  "key24": "29R8AivDRgQA8HDZ99C4hiHov5XnFCGouBNsHxpgBJzmxGf6gGUCBBWmKFeqdb4EhQ3XzsR2hoSty1cpfwAwisTa",
  "key25": "2FW5BhsFTJPuxj1H6xqVf7BxrLE3HrvmmYQx4X4xGgpuZXqjCPoQxpAFakVMtpSy5sjND3CLaGDwbfXBo7hMkz7v",
  "key26": "dJqdCYVQuwMFbico6KKrA5kA1jCDTUs1rWQM7y83xxLQE6Ku4QHo7DHFSbFbXyCW3R8rBVcbeZduxCLRmi1ep6a",
  "key27": "2dF4aoXBqas8GuevMZCFHxSsTuSPNRKXGrc1DDfb3LqoeTcsHWwdT3DhP3pG67n6Tb8eB2hVPQHqm4Huxti1Q5oK",
  "key28": "7G8PEMDeGu4TPY3PMc271q7MiQ2QUS2sZawSUcgpmzqsKAcgYd2kQiJUCCrGmarU4bCYhDkh8gLxQ2dPD1LNDgb",
  "key29": "2yEjRoNJ8jcVh2w9EQsLwpYCpbRH1sGMCABos6rM2ScjCMJGYAG9MXVZTGMYNdtTFenuzTRrYwa7n4NEKPtdkBr3",
  "key30": "4hGBNBaaSfSJG1idvGH9ERkYuaRZCqKWiij2cdULZwWZtasa2VJLVXEWHuwDc2i2cy61f2mPM7xzqeCqPihDRF6M",
  "key31": "3UGbz8ELYpQLXCztkW9KXAhVHbynV273LQdqH3XYpCriVHS1HH2TDcfWS6xPvZkw4DoLWDJFDQquqzsA8Nysurfa",
  "key32": "4bQEGrWETTuHFfA18fHXQnom1waBrSqgdRtrg6D5FPe7weiRYRwtD7iRc9Q2C2cnfUGSWtt45YtPWTUK4YRk2em2",
  "key33": "2fSZsK3NDXJkqbBAWBo2Yi7EGcaEDYg2hFdsXMB6MixHyqUwMtRCmL4qHn1F8jQmxbHhdXaenx7zZwpx9iC9Geff",
  "key34": "4vr6AZMjNhCVPSciviywjVpu7nc8ySh7kK75MhBE4yVwmGveFuLQMoZAV5FN5HQB5YAZZpvjyZJ2DXxyAhMx5oT3",
  "key35": "58BAi9tJKWvQH5kbyFp9bMDzw2nfc2bHSmNPQYaau2JjFVVFFLHmWjAuzqsKyiVzNRJrUvU9LUUzs36JYZdssAXq",
  "key36": "5NBYgetxQgCnQinJE8pR9L9rRPbzPSmqLafRWhhW7ZjvB3QivcDKkQVsFFFPp4aGMF5w9LU3M76cjPjJ7tzLse3T",
  "key37": "4pc3tamDWEdbybXRV6pnPTuN5dMTkp4wrEKkXBWcqiXEi667Yk5KWXWD5xrRA6nDykEL5bpCYEWrd9MTj7HjqdEx",
  "key38": "EkxUoibcu5xsKsi7TZ2b8P1cf6edB8KSNC1o824MKw3DePi5sf7Fk13eqhqKWiZK94LmLr8XCr9LXu9MZPEEf3c",
  "key39": "5WvrUtKHUWf65k26u5nRFv4BxpBVGonKfKe2jUACSvhcm7jt8rvuhcQVKt7b3qp3dAyC1VBeLSwwrjVyANF9ta8",
  "key40": "3zVP8QCm9H7se1r8Q99M3o4hwAqJa8DuuPokXWeMzFnaEBPRhbsgGDSyFwb22x3PgKiM82ogtemd91g43XLxEnUk",
  "key41": "3iT2HrDBUv3zeZ7HyCT7uTzHmbjfvnTp7LF3u1hpdjzuujAGG2Ynb9qtJqViHWUyMudoMZ2AZnxsvc8daa2oTwKt",
  "key42": "4WX9LQCeZyVS5GAYdAPZdPAPR1vLHYTWc2Kp12AvcxBMxtnBwhGWf2eUjPxpp9VHjwUFcgmEC3fkAh7G1vkRmxDb",
  "key43": "5fSuAG1WjynznfdJfsKKuHx9WaUK3Jp7AkXsVHquKeZ8MUtAd9hQD9veHA4EZXLCJJUN7sMrPAbs3EYBVWKCf1jf",
  "key44": "3iriLUT5yt6Q2e1Mx52Mj27p3KTg43m988ArkxHMs3nCT8VsFP23Y4hNKqeQpNqx9YjUoX5pxYjBEcUPCqjuuFFH"
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
