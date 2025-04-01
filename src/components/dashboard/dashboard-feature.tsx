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
    "23bgPG7mkN3Qi2A26J63r2SvR2uhSvKYpJ6njokBDMZP6ScfvYNkq4hC51T8srVxuKCA9RSrSTqG6ugEZziHNaLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "394sNovYSVTadubWYz9uJWB8SaX9SAcHg4qTGDk9g3VBmmCibPU4FUkF2ns1La8EFCM2qu6pPLcJK6ZTe5MPSfcS",
  "key1": "62QDvCvciKsxDjGpopQPudA7V6Tj8go8nrps9RtouT4gkRohjPA6sqG4E7aEQwPMK6SoPXaUQUZhPWKFsSLB4URS",
  "key2": "4uX2v4bXDEr5ayTzGambsLcmGTGLfCejJHiH4s5h1LTBFP92RRCF288BB6Yf9r666QzECE2g7oqjv1MYe2BLZckc",
  "key3": "2hKmDtyJNWTsDqzFaAFvZ2aMshpL6y2wawsmZUEojnkhmrwyqKbuSDxMP35Gtey7KrZ54PVi4hcG7PuV6HqH2hjT",
  "key4": "3FF5dtmq99qSzHDt5e1jXpuhhXkEe6QCfoZYiXUZqQyjHRDwt3jkVmddDDYuDciADwY8E2weBHjfjFBfazxNmefP",
  "key5": "3Mhv7BaQ5q58TJLX7cEeFWRCHpGBA4MKohoQuNTZx1s4FdMzewchvU9LD8PaCvHMUQwwqo9SsJa3iR5F7XK1K2Wv",
  "key6": "5naw6W882XrJro7kPXkCyDopcyDBSuSfX7FXAxAzwjkHTHxgwrSNcu5EYvFNHs7T5GQxv27nr66k9rkv1SCHeHNK",
  "key7": "3vk38UvGkNaCrNya63kwJsHVqWywcBXLary6CAvxzBttVt3xkAdVgwshu5mebQmRsW6iFwe3JH7nqMDRbhpSRQNR",
  "key8": "5qkQ5w3VvBJVEuHSKYNeGUSyVvnQqzJoaPEhAd3BxFaG9ZacH8hYck2j8YY1K2QpAW221uFkYKb1e4Vi43qMLRie",
  "key9": "5jn7pZA4Y8TebBEUxQmgHqT4hsXYq6CyWkJUqN6QgJ5bZJ5Lv7wTN2c8somu2K3f3PiZ3CJ7pSzUQzzdNWjshdMT",
  "key10": "3orxQW5Gafha1bgHDEge8stTBdWBA72oM57ZRAgdo9oSfVJQ41pzoKy3nJQTHxY6ePTaSCrAMiqAggGqs9mEeXZz",
  "key11": "UCyA6AQtvkhZwhy9CvmtoKoBk8vGVoMpkaFYTqaM6K6z4cTz7Tv23CJc1TnmJWqJVZ4zwXnJppYUDu5x5MmEt1V",
  "key12": "5eVy7kp8m65XYZqB9xVRVC9SMZPJSGC4Uya6NqRGZpM1tiiGM8JiZcZ2rjEJtSpXHWHxCugr6EoXFJptcaMq9Q2S",
  "key13": "2qZEtSZ3V2nKJtuWYC2eDdLEEgJmCG3XQjcarMXwjvwbDkkBSvrhHRrnfhm2Nt4jQ5YmRfdgKDEUYm7QfkoWtfQw",
  "key14": "4vxyA1bXUAGDBri9HVMp45QeujswQCd4k5BBcARseLbNgqDiWXyFR7wZ4F9bzQg6N6VWWcAAZx1Fhgn3odvkUpAn",
  "key15": "5qGc33A2uBLRmNZTeWjLMtmrdbP9HPBdi9mgYGyh1nPTmCPNnHZJ82hymEb264AP66n5NeFRjk4rfR8smJeHET3J",
  "key16": "k96ZJwty7Et4u9a63bkbFDyos9aRacof5mKBZrLWUurhzbUbR6LWZLZFDFiD2tMT5ruoUTTgwArWs4VLvjoFNMd",
  "key17": "5Ta8GrWHi1n5EMx5aYJD5g7khbSVjEsV5gdhyG4eXbTueEo4sby91fdYYYppbt2RFFV3bcDLfRJ8eDMkyzmdTrgG",
  "key18": "3ZfTRqLV2ChmfKRHfqfuDtMMSuLCXogLCz5HnZhohG38UQDv1JChur37SBuXCp41Wtr7SQVkA7YeuG6L36MdEJaK",
  "key19": "3e6dGbRn21evtdSasxdH4wdwVGLvMm975si8YvWK2tt99cHJgzrPvcTsv14E7o98eiE9r45KYbb3dCwPaXEEMGT",
  "key20": "5iEeCYcpk6sNcyWR6iVZkaL8KXiFioNmtC37QsEqQQJczdyVj9o77JmMDvZ5uYYLWZgwEtVahGpzWekVe9KPyPVp",
  "key21": "5T8ZJkPiqG8aywemKihLooCFTt4aKzU1AXFqN6uBojt6SYvWUh724ZoKm9oE9jePLzq7A4QfgX2rmLaPjFy6Yqzj",
  "key22": "5Aci7YqjAKnSDd194E9hu4747rBKrTrLf3aZvUfqVotrHH4ZtXjkQFfwQ8S96VPGKGhGbUZG6WUjVrUmgg5gQwdz",
  "key23": "5horpnJsf3Pc8jwmqoERkPeKfyVSi29PbkVESYrSurZu7sqGh9xeuPVeCYfeMDa7XBqDGd9Jqwoi96yewW8K8bEc",
  "key24": "3uHycZqnTc7aSeFhchAMVkmeqQAU47suv65TzjrEvPCCDhEkvJG3ZaZSy8UUmwJQHYnUH245xF794QQXdDUPbaLp",
  "key25": "4czMTKjVSboBJyPt4UxSUHitouUawNit955wpMw4iqDdErpgzuDq5VAabHXc1nimrr4nYUuQ7q2jFCjtS4dU6DDt",
  "key26": "5tjQboNXP8Xx16TM9mTs8nWpG5uR7rwkfmeWqXuP2o8Qj3a3SsLefDB9cHZs5h2s3mqjfhWcUBdcJLTi1GgwUC6S",
  "key27": "4RN1f99rRLoQgJXdPN6S5MYnVjVyC53Q51KwrHz1VQdhomBymTZM9aoMqUi2dYdjkdzcAGm1fGA4Gaj4g7f7bRnt",
  "key28": "UAVZbw497bnMnpKefkdxo2B1gMe9GgRaB9rDRPPuefXpDQH54MnGakyVHPwUHiCj7u274o2uJx5WHGgU1ravYiN",
  "key29": "35qXrnRR5TX3SPtZAPX8j2Vhcf5nikpwFKhAhNcUx2Nd2us6Rhgmxn5hrt49SRs7wdycFcv1sTb4PMnbiwePPjBC",
  "key30": "s72p7U614KUtbcUZLcbLCFxg54sdEE1wYJ38AtmF7CNQANyKLeeMgFg6ttyTdEdFPpS85eSpnzDNcbzXfLQZuE7",
  "key31": "3AyszXJBK1sifyoDHvgyGNHCs6zqcFxVqCPVoDgmNBqaYA1EfovGJzkbiVgWVZb3zMf1VbNGWZVQGFSD4RPd8yfZ",
  "key32": "BHuBhAMKDwTd3YBh8wU5vbNpFwEJSxU5bJFMGVfzfjY8ntNytqRhcaHbyGhc9LkVX9zWDgBf5LrFRzAtfN49ASw",
  "key33": "59CwaeimN14P5PvFrv224WSgig7BtBe9ufSj7fGLUESC2qunWkhHysHrCFbBKdJq5JtF5mN4AKXVqDJ4Sauqvjgb",
  "key34": "2AEtJamUhsynLUXzhonwFKqtXzM66ht3ws8fa4cT4k7nWiLxcY3hbRyiAZiQbRqYmcXY2CaLaXBc6GSxTQmQHcbw",
  "key35": "4gYrHU7sbv2g154iTYjngVk31W7LXYPE4LDbFGg1NZCm9Mf3FhFV1sT7eBUiKYmK4mr1b4tTnNkktr4BCS8jRSfw",
  "key36": "2re17RjETpCMLtep4CrDhb5rEuxfFaAEWpChQPe8ERJfCZ8ktZ4xyvJZEFmW2s26Vi3BvPoT1xf9v355WmpQNjBa",
  "key37": "3CNF4rFrRwJtiMFmFup2YRyb95cybMvKEeBu2YGgaKB3ZGE9o33appNZANkrSKCwV36AXB7A1mx8SCAe5GSQFGie",
  "key38": "52PLQZjfaqGT4BmDSiVqxZZvWn7AGq7621j7HUKTTLBpnGZjfqsZmLeh1CUB95a4aDhZUrDRERpphhk3zR8VGwQ2",
  "key39": "3wuPxfcKexRx7XUHcCzVX2Cf94A2gVuZC2aBE6bgUCH3RWPpKUSSTbAvSXJaadSe8GXb6qf4LgRsNge1eHvE5a7x",
  "key40": "3y8UiendB6ioa1By8ws1kNuQhh97PdvFSbNCFTPLQbKvmPSX7JQAxJEKaHbNzZ15MCszbdCx5vFJBt7Zd4vyXAzq",
  "key41": "1jLy8jgTc8cDiKnJff1nyHcWAivpyictiJtU6gNrcm55P5JjmmfMvr6EqtHnW4wsCbVdAxfkHyqVn76UPwBwu8P"
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
