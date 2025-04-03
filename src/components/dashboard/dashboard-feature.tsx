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
    "5DrkdDAuEynNMz8e7sjrSdpHYjhyPcx7wRLb73AoEsbYxjJ4Bj6YkNUQ1Br4YiSsnKrE6ia6z93ukwNJuUXt5Lh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "95xrcAjU8qTUv6B6Rtr7Q1b9GTfLj3xbfMT5onhjGrdysRe11F1VznbXSQ72nusdo7McngrdNb3GRBmxJodYHCf",
  "key1": "4oNkeLvATfDotJsgzpbwoHspUvbdovsQSK1HU1JucfFnstxMoXBtzBtSFyhfQpGSQ85yEeonLrqoxCFsFsb4M8MV",
  "key2": "2ZfdmVLn1kA5FPgPSUKHiLpPNVxDf8hkgNG2rtizVdqK7c1Z4VfS4ui4hjJZH3hCp3XwxbGbcNGJ7rVxedvzUDFx",
  "key3": "4sopJgTHKCcChHY91FjxU3WRLxUkDC6hNvow9xaG7zkpHENr148P4iRxz8TL6daTdH9waRWD7VLnzsg8aqeCCB7C",
  "key4": "AcDuC6qEe67Me9oonzY4yoo7rKPyr9UnGYPATWNagBmkcxes97uSno4BLXciiauaNqVV8rN6fK1DeFRCtm8ThDS",
  "key5": "3kHTooR1M3ns5qrsjeaE8YKLMvoHL9nsqRXsm45L7nUJsgrr7FyjG4HorFsJEgZJYYeRrZB3qQBBUiYn92F4BWkn",
  "key6": "3VqoDJMGMMwiiBcgMBpLserU49TEC8Gwboxpv2Z1FVGYpcskxfriBuMYf9vB9QX8JpQxqocr9pJigfrev6jVK4Zh",
  "key7": "2GVCdMVDDtduAAKa2QrkbD8ttrQYK2yRDUyzfN8UmLmp35UToShhFB3rQpd9PHBsoamJLU5xQ2TaCaRm1tmGb1T",
  "key8": "6nNG9mvou7UNRVmNtCAA42S59XNFoSDr3nyYkudE3ciy9icadEY9eaqqPNxvtnzHGgPNRWmgZF4VCEWzrtcB8vD",
  "key9": "swbofFGnEf3ZkReNHhdkkGEAps36QxBhKV5xQ7VxCD7SKtxWgfZR18kHzwSZzg4E1oNEJodHSMU3YWnh88XLCve",
  "key10": "BpUEQZB8x14AFAfQvscXKGUH1BQMa9gTyWihgAFB5fnBiqonuSVAckMDnCkJzfCT87f22tXdvGft3je97NycPLZ",
  "key11": "4ABEo1JP8GxoeXriZW7HtMKK3sJVq7omvzxu3RBCdjom1DCfsPRdzNV5a8sfVbTVvPwZDq7bFegVQMQaoexFpuKy",
  "key12": "3hSRwu3Hx92LWmRvQVgAVSDZ9C6j6HGucqhXD9UEgnWHnT1Y9foF5gkGGD4BYSbS8y4vjsb6VTDPnMiercTVCcRQ",
  "key13": "3nEQmaHyBB9tT55ciEgjSAXcXiR4An1xZ6Q9PF2nzFa2ZKHNzod8EqxGTHUMPqjwKKnnXvw3iVh2cd6iWrtWaUu2",
  "key14": "3AjHwWKymLFApQEfZ3sw3pFJPmxdhWcK2MZcB3e1kiCrF5ZFTrCJJcAwNMh7GFaScwJwfHqewPbhHEx72r4QJdje",
  "key15": "2wzEBHQ4Fx45hcgHWz2ggwJeNpUtm9zY74bJMaiqjJtnVmcUVGH6prch1JAprjB3WJpuwbRmUEuors28RUXJC2wy",
  "key16": "241KrCYZomVZBj2XxdeVmbdfWqmKSmfDHvoTk9Y4NR3y4oaKw1jFRgQAkGPEwqSGd2SFbgspJSCDmAQKm621nfwB",
  "key17": "5M2SkPzWjkrV5H97kZMiC8XjYH6NWTHRNtnQwP9qjUtnC72P1DqRUg6L4nu69DRLA5axdAKGRQZKFFyueLbwbiZj",
  "key18": "55z3ANLdUqFK2uUSSdCMTeQ4Pw1tjAAYzmVRGVy8Wik1GyoEGhR3oRHM99gB2pMy9G71seHpPcCCbYAUSa4c1C6f",
  "key19": "5TwfP7b91Yjj7WvKzRAZbNo7eUQcrZ7hkeaJ51EMt9zkaSG2fd2ZHEGadJoe4jvcUEajrQgphhG8dJjiRzqGsHot",
  "key20": "5eWx2DN8itRhs2PqKzRrf1VudndfvoSAeq54PUtTepFwoVEAHbDvJBtyTrYq9XAJP5QMGymA1gYajspDEmnPwpLi",
  "key21": "3gYx1xF8sJgPaX3emKyRVigKDezK3NB2AJ1HAfmtuZP1VmKgkw2LeeMgzWNYRgr8ruXdpUDyCK7PHH4gAzXxDDuY",
  "key22": "krjHBdfFLVGDaGnAQw921GAYGeqiJZXeHNSJYRY5vBVTVjroHVzT76p7Kd9pNZAaMyP9q1E5H3RqdqyMBJ8BGiZ",
  "key23": "ZFAWLoiAE4JTtsk9WzghRXUWMNFcSX8ChcfmVUB5RkTF8SXkmyWRxHybD7wzoLHJCnKYak5i81ab6q5KSjweFiC",
  "key24": "dkvFdsDBmD4SMUT6VLhS7JX1P34zxKtp5sgxX7DgauxBpwR91WSVMrzQeQASndNTRqJHGJayRBrGDuBmT6EdnWr",
  "key25": "VcPVEVzfAEr2VqcqUo4B83oW7LrkkW4HD66PBNGYTYEdq4L9FoWmdku9peB2EV17t2W5mHyaF1rKopFRG653XkT",
  "key26": "3zwQLs39dSAox9xjVwHFMWwbQGTLnk57PE4CdRgi5bvi91Jr4E6htnVeFGSLE1zo47od5p5kNaUW6naVx1Hm1bV4",
  "key27": "2XfLoSExftLZJvcSfe6L8nm82GuEtkjfeQZ481wyjPPwUhKPeEUYtX3i2C7GtB9rPcnzfmM6iuX7Q6DHgrghxaxj",
  "key28": "4YuKYWNuTrC2ugebR3DGB7gYgHP9Jbg4DHpW3qX8swSqEfYfJUdHdLktvryXg8yG67HT5fJ1yZ8tBU2CMdErYtxo",
  "key29": "hGzqwToqZyriD17VfQhmHfeJ1xQBTSu5QWAtSu7BsJr3vxfwYcxRTKraMMTJivRKiZvepV95NHX1KbDZmGZT8FK",
  "key30": "w5azDcZA116r8RvqaNbsS6uvoUayKgx4pdXFQYY4bFwgyxCuLNwQ85CNDp99Rh312VCmuf2H8UUYrtSXV7DfWmW",
  "key31": "34DZYmD7ZsqvYyG8d48HtTCJ1vXZ1ErmwWPSJUo8qUDbrhM7iWk28tchKxifXBS4RkJoc6trgCq2LHXhwB5DezRF",
  "key32": "2qSEAZU2yJvkJTfK29gQFeYxWJUVYU2JMS2VhgvT7XsGTHhnS6XPBL5YxFiRUuyRWZw9aw7WLG4KDUXymNRHN3PK",
  "key33": "2DfXMGQefwvUE4rKSAhYhUCfuw4cS9v6QC7hQL1Dc8DhgeLEHYGr2VbPRqRq4tXFFDMQTzKimh7Lpmv2YvM9ShJQ",
  "key34": "31CnaXr3HFZpervUYaY5cYQYpYuRVSijLhUfXV7hzTUVjGxRcL8KAtJBYAraZguAk2ixer5E596WZnbzAWctDcFs",
  "key35": "5qSVX9PTPYQiXDdqsCh32akw8iJU4rTcFibZmvesx4YVAk7NwDFFy5EhnF5bzLvukzQ48X4zsxQnXQhd3oLPMJUy",
  "key36": "KCBtyHW8m4ZR1y9DUmaBQhanHuZrPd8BSSBtt7KGJeud2nvAAQRkf8F2cgj3Gfnv7vu2uKY5ZK1W7S5ce268TMd",
  "key37": "54yT5U2Bh3WJ8xBR7FGNc8aiX5qq3JbdfLiBc8jb7Sdd2shNPt4GwxLLFse9cfkiRTt8BhF3AH3r2mH9biZa1V2P",
  "key38": "5foD5ozKUr1uUmuSG1hkv2Yo5D18bVycKUqyqVngbq86upnyM1CxjSuiSswoghZzK2fY2ErkihggudYs7wkG9nrz",
  "key39": "43czp9wXjoqfLXCP9nDpWj6a7eJR4CmWsX6raZCfdaC3ahwEjssrJcgL5Qi5Q4x3iLvjMhQZTp2mPFZ7vcghJKzE",
  "key40": "swmzKELWcHs9pkWtipQ1bwfjkeFHrCkMXZnc7ULEff2MPcHmLLcLZSCLZGqGh8DZKhLpnsUJdQdPhoTSUhemKd5",
  "key41": "8Rz5jjsuMELsc2aDE5FsT66RzxDr2mJ3zAaFgCtH59YL2tYKTn6nymgnNF1hZ7t6F6FEthN93p2RbJUsyw4gFbz",
  "key42": "aK7DeRxJdamVPE9mmUscWqaR2o1VHbAV1eXZYEMjQpx7whhUbqAPQCrCouJhNq9yrF5TnzqwuJQPQgWNTiCK4fu",
  "key43": "5gvb49tDoS2yHcqR7E2Xj832HfV7pNyPmaDH6onpiU3LnKykKPUDkkAdZVJqSYCoi1dE5YDHEmDnYBKY51yDg6nR",
  "key44": "4H8cf798BREcxw1UaPpz4ZMDz8Zz2bgr5zmZu1oXkYS3Wk9Ja1tSrkRAKNU5TvVdaukwUj7Ei4jB48232tENFxFC"
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
