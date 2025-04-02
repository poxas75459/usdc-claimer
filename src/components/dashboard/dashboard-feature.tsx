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
    "2AX4Vj9P26Keut6pbXDemoA4Fq5uCmxhhRTKk7hjwcDdN74mCLrkuiS3RoUb5xcs6zn8VvrFuAMN6RK4e3NyHJyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rw5qQuCFceJBeRCf2nAZ8KZfXtWwGzzY16Cr9gweqxePFZ5atdiGMFDFpG66xrurn7Eu9p337tnj6iyYnw5v19p",
  "key1": "yiRfAbPC8Bwo3fL77D6ztXRkatEJMaYGJAnaaZpSbGMzjpUiJe786mQqNPPA66rB2ofsz84gtLMCCpjs99L7G3z",
  "key2": "2kzSPB53GNDWw74Lch8zX4MeMExcozr58Xn22xRaCmW6g5ThaFPdm1JMGgeegeXKWpuWxeCr9eJFeu7Fu4Tg1GQS",
  "key3": "3t4jDkyEXqQjKYRrbUwX1QYnEo2jrXK9R2pPj9HQenG3gu26G9pQp15pqwWS7mRtn8dFy3RKoXGXgpMQwwcxKc29",
  "key4": "4x7NBho4WWRkGp1zkBEQbeAuRoYDnd9WrT4BvUzNgFbVYgCvy7VWmLC5C1LFeEv4XGdh6aDdXYfz4yZcPFyYZt4G",
  "key5": "3Xd8MGWmSHD6fJ2u9fE8iEX2aNQyb4jyPCM22VY5UAdgGEENMt9j16gSW51TFzkyV1afyjZ9E4FiN6mw9TwcnsKe",
  "key6": "4sk466n5Zsgr8eYqUwP5bjyhNT4CidCow8k2fSyVPRyjAA81JoF97mn5N4j6b4FHUoTHzVNau4Z424LKmX8UXeq9",
  "key7": "CWkze1cmxqkKgzzhwDpYYH5eQUcStSeoWEnuU1UyhpTsNFg2xm73DCyVGuM7oQXKqBv4a9FZxbSurbpTYNjdkXm",
  "key8": "J1dXQz7qzzag8oxKfusw9fb8mwDKUPS1TaDUtj6ETjREW9mJhuPtuE68cpx63QedXnZVQLr8DHA33rHJWZiQDW1",
  "key9": "5kxCbXPpb7odc9zWP8uvox5YJpWiLLKjDSQvSgJP2sX9mnoUbgQwTSkUq9b7d8gPW4jboYLXd9B49XMx7X3F66Vc",
  "key10": "46iUEeW48fb1pwbW543gZ56QKgWbdCjxHSoCPG7nmRST2ACCD4KpaAVdS8CyRoM9KLp6B2veFz3NCjX4d1U5xA56",
  "key11": "46LDZZtNpSAwkChsgaDzKMsLkWYdGW5DdM83i3LuvveHqhjZLbY7KrynCrC9ZmzJ4nsckJZa7A9sHs4dGXB8WbHz",
  "key12": "2MpYiwCoQ3gMtDg853RjsiFJyFwQ3d45EjogaeP2DDB4iZgzn5DW6vR1rqAsvSP11CdogVxMi98erL1a592Kbk12",
  "key13": "5q4CcDUGdUCcNmGSbDZUipmWKBCT92UvNRrE97SnsJiVYteTZ5ENCrQbUkEiRugVRGKRHP3KGEZ3M2tZNyKXfAw8",
  "key14": "DMQBJXqo2ZNtyRpyFvSGHPu2coxS5hhCM5Y23Dj9VYZswbRcPufwGwX4Rh85yy54zT8yJ79d5P83Q9aYfsWsxqx",
  "key15": "3t9RvCuJHCZGVU3hYjQdRZjcKY2eufBbTeUfucAc9ax6k4kr54n22ZT9XkLTQoYs4CA7CVT6XETj6Cb2KzgRQxhC",
  "key16": "52c689dYFcVYQcCfLGBoTjcq7xp1FYtHh4MjjE8nGkJRb7DaKhdTtg25KpBrXf32MAVutjLa48fmLndqQVR9aHdU",
  "key17": "5uSDWsnqD3crQLEjeDKW53J35EjMUfBSLCec8MigGgMq8EgDu2Z7ksYPvkA1tExtYynQaLBs5ZiuzPjwRB9Wbocf",
  "key18": "2Yaqb8p5j45dCYG7MqSMuRnJANMqn2RAUaSruaYb4aDE84gjgN77DzEtHb3Eusxi8KQqP9dhnmRyZCHwrnG31UPq",
  "key19": "2wz94BjVEyjtkQfMJZRcAtyc67S6hxu1wZ7YQHhQVQxrMmEXMGrrHAhQNAnMCr6nhouVyPAd5PKJudWHobwCQNaQ",
  "key20": "5zsyzuqPR8irsQz1neovrLzJh5ZNFCcpJLJR6FyHHSzEFZJjhD7timWL4hWZEVcY5Dnro2BamtW38s4Nyn9RiJ6d",
  "key21": "4iMwcGckP5gAN3VZfJa1HY7mjchELKSLSSaA9GTNesuCzJe6L2bcqr81oGDCENCenRfvEXEtajcfaEuQxCHFm273",
  "key22": "wHpQq7Vq7EGhhM6FiuUGbyhPhVTVmWCpfojfLNHJ4sV4U4cZcSVEedAv974z8cwR1QXtD9s9gZZjBe6CPxwCUzt",
  "key23": "2wznkzsV3gsEnbWUkWE6vD2xsbnxPderyVxFqdFb53GYZ4RiFQa4NSrmJMgshCfrRv5ESPNjgDYrs91UYkmwpKPq",
  "key24": "5ZqHLiqDXjoHrX8K5FJk43bsn2mKu8Jn1ajb2JT9gxuki3QujD6zEDFGx3AvyiqgwVwT7rky9bbBuUXn61UgkPoF",
  "key25": "21aBXJg5h3FDVVqAjy2SnsuLtxrRgcnXrTViyLKSUEHXHnAkT6EqxYvWSqnaePh3JzwqgtRThQrKZELxHL2WNKFE",
  "key26": "44QYYbggHsaei4mSk6pmmPxjWW41w2AHXaFtuk9JasDye7UG1JuGzD36MpfcqMXQY7CJDpiiQnFWaPXhp7uBQf9c",
  "key27": "4fj4UTRJQ9m2qzKeBV4YdwqT4V5k7Tb9WwZE1cJheDGfwEZrdwiCJWpFmzJdtNYMRA5Bu51beh7sGwYJv6NdHZBj",
  "key28": "4FiGKq54dXRtnNLBB5YymhNSkPLTbLLpGixrTDmSuXdpCdBABotXuS2hRY3qtTtjR7jpSqz1q2wq987sxRyGZArz",
  "key29": "5bUa1uHMfTPjYbfKkxYD1N7fhfACf753ecgcS8ECfuByJD9E7E2toT6oLjQWLrL4dcJRWd912W9ZqHV7YwhDx8wR",
  "key30": "25feCZKtg5NaLdjqVBVFzRi6gHuFk4kMy74kUkLM1NdWGb9RhUi8zT82ZKPMYa6UDCupfVgiMbHiyq8eLPtAtKXM",
  "key31": "4txcZwihPjc6hVjmjsHFukuKeNedMX8VKDxmbkXkDBzyLRZuAbxpYvB5StxJP7E3uFuQTip6121ZvEWfRDZRw1ya",
  "key32": "5vwPtVbrbHuwgpfPcNvHnSK8QJLn8hiUBad8QyGsmwv8tyywJtJmrMqpPX6KiP7ELgjDuWtdFwRAuMGajcu8Rkw",
  "key33": "2p69J4kf5c1s6kW8BLcwF5WiwfDrY1Pyhj3D84XhJipEguxcpmhKai7ihkJFzhgo9cA6LM2W4RpU7xrgRjcDQr62",
  "key34": "3zsBM1rVsSmJ5eG2euMxaAsCFvtrSeDeiS15VCYr2CXRHc8TEFLEGKqgzmL17wsDFpzSnWpioCpXvB8qve9P13WF",
  "key35": "4F7eysNidAzc7d85T75SEReWvGUixPrAKuQ8aot4PzM5SYhwixoFgsQqrXVCkFPFTwQeGQVABT7WSKwPJCq4f2Ez",
  "key36": "2mwfd2LuEBdf1qwau9cnnsdFSGwb2wvd7p8nKnLYEXP1jwt1KTL6vHMsA4PtpVDUhwRTgFPGngcza5FDZaBizVSJ",
  "key37": "3oC9Ex6yuT5ZLQ2y8XaMZmyN1PUAaYtD1pV8b2Mkrdrd4LL9ryMocPKLEyHKPctCybGkLaanVdNpgZ5AD3qeR2Uv",
  "key38": "3peQHiKLNNwyeciVH6MbCeC3v3EP6UeKSdtNrMe8mihAnA9KzzNtnAuMPMpuiWwaDT19WJoYRUusH21xeDFzh5u1",
  "key39": "5N4fqZwfAfE2nr5nHWVhQnABCh84RwMEfNCTs5ZRYz42zqVGYFgYQbXncbUihLdc1uUjE4gg2Mg4fCKG26CNowxB",
  "key40": "4NLYThzARDz2xKstxKMkyqwoqGmrq1YKrPoJRJBFnCPCHS5byTdjSK6ahb251JdXBBHcfoT5m5qdLQvQf1cTT3Su",
  "key41": "RMWBi1SsGv2pxyLMX9LMMP2cHBRJcprwLf1ft9DX47wK1TL8jw89DZ5ivKFUChNa9RR95TBSWTsPsjxD7HBU4VC",
  "key42": "3bFo9kg78MtpR6s9myN8cAJz3h5cPp8zsz3RS61jGXcPqnoLbpFaZBpfKLGUQ2wdWDLakEXKBrYXeWE89ZjM2zuQ",
  "key43": "3TwKgvw7W25fH6NCeTY2fGP8PJbvThw9TN4CL7WpDSisCZeNz9LuebxTJjvWna3wBQDjFtoSfJ8dxXYeybCnsWcj",
  "key44": "3q8wpxB3fMXbujQg9jMTywqStk3iCHQpZpLfeiATqj4MTUddf8WFiEv7Mi9Ge1VkCFE6FgF7aR9v4MDFm75HE2Rv",
  "key45": "5v95fcKyrFpXqNcRTHFL6t3qnAmnR3e4V13pb4NLra5r2tK5vRUVVCvz81CzzfnsGr7QwnwNo92KX1M3k6s94Xs2",
  "key46": "4uNcHMZLeQnHGbioYby2B9KBFFYjDjdpSs3uQnVLLCw5yXUf46X2yoMs4hgDu56uVyQhGEtje1WhgT3KCv4jLWSo",
  "key47": "drb5Asz7VrFWG1U3XkMHTRi4BJfr4QBgcGA5QAoLxKHjFTZzwsHqMy9T6civf3vjx5TofvuyZhroxnvcxZ8QWYu",
  "key48": "2rQNXG9AFnK4rXQ6cbX9HgoMTtD7mgnqAgtHyHStCFKjYc2YRQt5MMXRHCR6PeSbNJyn9QhjPYDcVHDQH63K8DKF"
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
