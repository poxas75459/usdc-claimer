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
    "55n55eWxwkjAvuhYQaydEPUxesM86R39gjaqdwFYsoiAK6gPuZUvSWboHVwyFs8zkhMd64zuLx2jnoDvVkq4HMoY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWKoeP4JNxPN59GNVW7TJdCMyQfCxL2eg4ifSzpNXzoDJkR3ryCR7k88V3JtEvqVJ6hmiZ9qNCa72KKR45cx6W5",
  "key1": "dVrUVXLbefBZrfnHdchv2W62kv3WAnxUkGuHFfR1LLtP3ozJaVKK9zgXRx6QAjxrW97Pi7rnY36SkoM3iwj65mV",
  "key2": "5S4jThHLbtT16pUnsadH2jBjfuE32YgakF51brbyJ6C4GiRn3rUShHqsyx9omS2QUqBKEeWtx4cvmb8J7GiEVF1u",
  "key3": "62a8QFGzvAJLLuZQW4rQDWcHcp8WCwK1u5Ph2odRNHUCCnMNiEiYL9zGbr9Vh2YQ1c4U8ULSC515V1VUAn84oEtD",
  "key4": "qcVuGfBtictqfqnK84hrp4tbdQRaDdKRBmvXJQWBo9mi7UnufujchGCXTcB6LHTdw9tuNVqoDcUtYQmZRDickBa",
  "key5": "3qiYmPUusjr9fFppiwacdj3i4n4Duaaa8YfMgzR5Dn1TCsmBCYPEsGgpVS5RobwX2cam4h97krNejd75oqp2V2yw",
  "key6": "56MNdj8XacpKS5S7tgJMqg9cryzoqANrmZwMMvwsKnu5Fkmm75t7obsASLXb72PQYqjFSbWBGBKXkq6oYCvGMhQd",
  "key7": "4XX8QPhHRc2aJHKV491XgQZ1YUtF2JBhmLrfyzk7djvH4WBUC4fZgHMLD1AV96ujX5Hx2Sv1DppXKvbAwX2Gowpp",
  "key8": "3Ma4y9XBex3QTC6yrTw3iwFF6KpJzVzyJEcWtnq7HbhvZhxqzBC3G5BRwFi55evBUNGYT11rPZgXnspJAwq1JnbH",
  "key9": "gW41MSKno25aGCwmer5RWuwGpF3Mjs5qhGpy1oofMLaZsbz3TJ4bBsQFGHBU3nTiYRdjAhBF8LDRavpQ1rXUU8g",
  "key10": "63nXQxifuDQfdSHmP6cE7rQ5VTXm2JHFGtUVWV7yG7zpvfP3H8sYzCXZD4GBw344YpHwdSx6CktZ3vkBucrPL13s",
  "key11": "3FXC6cMTuL2nhdF8eqJz7qHcb8nXy9E2kf57c1v24h1EW4KXGvPefWtToBy7dhPqQzFvfkt1jhbddU6ZEALDyuJp",
  "key12": "S5JDv7u1FTnjhUuRggzLKjXQT31PpCzjnrLiVuEiSbAwHQdvq5Eq1mC1M9FjEd8aBJLi1r7WZAbA23WLuRnfvRe",
  "key13": "482j2Ato9w4W7Rs8SwtQsr6SNqK5J2mmg6EaQYcgbjUeTPFfeeqiK7a135oeofJ98vBQpEhUeWQVXvQpbhcCAhW3",
  "key14": "5R4oL417UaJFGfSfB1x367AVnYrQ2zv5Po7NsG8S95SEntk9a2p9JiL6bYcMfQ834gkiNWnbpyuVhiUgENp5cxfi",
  "key15": "4WqsNtePi8neYxrMXWyrzR1hrNGoBycdYWJRZm9EcvGrKhMJX1J8dNAmBEw1rAixgvryo4AS4aBcWJeYcapfjNwi",
  "key16": "5CaJrY1y7bRB1pukBcvpMX3UmPJ7kFVcnGj8SQMkYmNw3KqTvLU7iwbPbHo4ar73GqrrG35qNuebbZNDGG2qYS11",
  "key17": "PZwYp2JeHtWwmfD36UrNME6UJwt6pQ9oWrNDJk27oN6pe6AmBSXENXGUZDXSCFTz9eP9DCcLqxnaUNdN1mKBMd8",
  "key18": "ksifYg4tQDNNCQkQPoEtbyyaXqjhbwkC4yRxddUdWw7DQNMgA52TTnJ9hLKEdAf4HxKVzKbe3mQpBwFPWgLPmx6",
  "key19": "JsfzNPQrU5VqF543kicnFVZ7JWEYJbQREw5zaL3MCDjQaogQGf2UbXpDntviTfjtiPFaGUvZ44B65kK8m5tANMs",
  "key20": "3pevzJKvGB5i6YLD3s1Mdy1jtUt59mL3SfiHhu1jyKtW5kY38vg3VDELazWCQFrJnYhDzpKLXMrUNFbcbkoQ52sU",
  "key21": "3kTyAgeGurnw9hoDDuViuHXHkUEC6SRLJ9gSuNor81C7VkEVgQhgVRx459zFP1NzUQSwX7n94n2vU1AVVrHsSdnw",
  "key22": "4iRt2Lo6MuXr6bfuxP5u84nZseyYaVPNJfPje7GTvhD7PsGujbV22iW2KcS5SuKe7ygx1EWhM6nmx3cdAGfh3Q2x",
  "key23": "4QTjWSbk7GcQoPc3thHK6n8hze4XHqLM8mBxPt3mkEP363crc8p7CwmhR8SnttZVTisyMT9gLHNZuuMcEu3figq8",
  "key24": "2KW7SFq9iJHsRaGMPtswJWiMAeueA94Gv8yZAXGJ6ziXpaAaUrVRZJgF2TMvL49brbrDNoqnDYUL1PvnkikLYDxG",
  "key25": "5nEm2ieKKP3QhagXBpWRZPGZN52u6ukMHQhYn3P66CwsZW2HiqeYwV7qhnZGLKxRBEVYwcLzWaFnXSgeKs8cbvxB",
  "key26": "yg2pERftNwhjNHKxkEwFphBpdsVALVxa8XPMehimzcv9qL9L4PfCBVMinvqbKj42nLLdW6CCCiXoBet16ZiEfjV",
  "key27": "2BWtpema1PsJdk8LdnJkQds9HAGfgQgehJSeci3Ex3BPf1JXBMTHPpfwkfutyLvwtM3EX5c4WPV8LmB3gn8JwenP",
  "key28": "2DSGqj2pKevzXm529KQsAQRXVhYieGzUMcQJQqAUzThfQtXWcpwvBsHdye6zUwax99BjDmseC62chc2wE4RanpVT",
  "key29": "5sfBPC5QeYKA3icTVf6PDgJB6jcVoftownMyNpxGiDSVo44ZYx6yDwKnVMuq5u6bKfyGLpNrgdgcXLbVi5Px3npv",
  "key30": "4Bk2ki3yfVshuDNA6g4zS2L6PcDt8q4sVivLeXrE5h4yEP1wTtCMFXh8mx4mfsVh7PfB99KEPW76j3n7ibp8dkic",
  "key31": "yrNS8NqNe1yByvrK9bTJ7ENQiwLmwnZNoFRUziU7iPuU8MhwMRP4YVCDvsJ9Fs63NdgQjD9hPbkLXWBgQmPrRaV",
  "key32": "tpLQNUCcEWPXELBtyMSScmvUNDVAMQuNaHEEvY1n9AugUNaikFNbtBc7zdqNHyVfJipXUUHoCeVsuzcqL5qBUEu",
  "key33": "2hUomhiPwxbCb5kcCpgBRs5kBGBjAmJUcRqDtNMmU4r6Nm6WqsTaVRrip1EDr2bWVGrXUc9dGC4nSMnqdKd6vD1W",
  "key34": "YmBC2YeeCiezajS6cxrfoxawzKZV6PUHRVW9ZpCjVkPChvktocd8UspS1jvaPwmbMktp1cpb8JXM7i2tSdqmqeW",
  "key35": "4BLE2csAEM6Tj3sjxGxxvtqdpVFdcHPP4AtMbywmQ2j8eqNMZjiNH47UBPuuQhpZ9haVc3BANjj7HRpCCusLMuvc",
  "key36": "35chWm7kKQy7EkerS9apkY2GaW4xw1SYsvpijZFkia7ensKFWLZSKRV8yRaxc3xUZKYDo7ZwGFFFtRTm8rvZoRPy",
  "key37": "2X7s9WdythQkyn1yS5wsFusssZB4Gx7AL96ggLhcNBnwLQMNi9oTNz38UZUNM8LZm21RvQhWDwQiMKpQ54dhNMaZ",
  "key38": "4KeaP8HZL2zcBCjjq2HJUHH8hwfaoTQw4XyQAR863dQKtvB9AzM5bmFDLCPpTqrVswEDKZJ3qaX7dVdB1cqbxSXR",
  "key39": "5VrseuGQc25bDJMnYmUCG5HXqoZDKfs8mC9qCYnyVbQrDzhyfDtRRn1kiE8RrSHCa4sZ3T5nHsJr8JCVRi2z6fxu",
  "key40": "5eKwMQPBDAfPY69zHiko5iTWx3wSbzR1BysjU38t7qrfEJbLDeCLnDmyszGecmF786B6WV9UwZZzQ1fRre1hdjiM"
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
