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
    "4yG1khvLdvotkJcHsVQxTdkb6sM2xKw2CEr7stYFHF2kvMq2K3kW1JKePjDV9ieBrKPKe4U4UrQA2SreSN8g43e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQSp2z1UHneYUiwDXcV5GqLrgv6Ex8uQRgj8PWju14iwx6Q8Ytkv5QbuBGSp5ohNGaS6QATaqfusSCN2w8mmH8c",
  "key1": "4orVuf6HxrkMhbwiDdgPn9trFvbgG1eUEgYyqBcab54GrokykSgjUWFXLrcHeBeKzPa6enBpGN55p16sAsJu5ZJ2",
  "key2": "q3b9pndkEUD7gjJfYALPyRaQQKLbrpxjnz3J6xjDZKP8LD7zq4M6iwZWUzmsnG7o4Pn54DEwwmPdNx6fgi2hQUE",
  "key3": "4oQXYYgpTWXZRyXA9KKL24TQH4D5FBGMBFSvUr9afLw526rRqZLpvEc6vPDTm38MqdEpt6ZC22etdV14fGMoo6Ew",
  "key4": "YeToqfHjiFDkivMSSoVciUFgT3iv81Sd2zCedVdnyStCZyn36eUgeFZwruWMSMUSDAXb3fCXCND2dqYKEmwHN9d",
  "key5": "2uC8878hXwv3kdzpENyYGujdhrytkGQoyNyy7aXbmcqha8hT75DiccBc5gSPCMPc94hYEc3dABuVQyCSourVc8mK",
  "key6": "5zZi9yCD9MARx9dFAvBQdF9NcGDcbusiD8rMDKMVnhT4vN5rwMQgrB8migAH9ApwmNtatQ4vKbz8KPXdtYhKHyPM",
  "key7": "4tXepTopo58GwgM7pkzPaJ1Jb5hozzs2TRW4FH5Ehze1JogKzzcRx4SZjh8WWPDK7aPTqqoC1ps9wTsSnn8DSXB6",
  "key8": "2YdEMCUW64cdGncJspxbjT5VpF5UzaRsaqdn9WD7R9yEPfKBw6RH6pGryj57LiV81mokM8HGV7XdKWBBAusxV3Tr",
  "key9": "2obUvvD2dnJDjTwP9ZjqK2m9PKsoNLsAqhRK9pa1toXGswkabRnccLgdTqwKmMiwx8nv8o6HW1YeDytUThcPs1Ux",
  "key10": "3n1r9sfWozR1QuFVMwx2FDwQu815Zam36MKXT4bHEm7yBCsi9WuQute7ZYi7ttUZsjRsv864fFbA2CtjvEeyASbc",
  "key11": "3qcF8rG6e29E546SmmoWcrU3zYoDyhU2mo4hqiizW7abiYGmcvkJ7eqxBtgpHCcRoxZ4jWdMbwGC3YEhUdLc3ci1",
  "key12": "3HoP5y2cZZU7qNsY45vWL21ssvDS18qLHpWs4RSwjNmunDZWAeUqhS3qENpDtiEVXjMqaN94Dm52Hwizp6M1Rh9E",
  "key13": "5RCekuk5hFyJqkCD1FRfPmBdCDqr3miyWEKfs5huT24puZFh8nwa42BULSrN4jY4oXL6TCirThHv1t9XfsoaTf6k",
  "key14": "5U7t3MwE3nPPtxBTYbTv4dwCaxhhgWBkXP2J7YfCAoQj9odaUTR62Qw8KrVzafVBB81xQs9cHmn3CuQK1ZhtBoi6",
  "key15": "5PujzU97UUzvgYdP11Rc8YdCTF8o4AdTjvkbEsW2nZqFaRBHBSbvQ6zUmmSoXemppEtECq2qvpfUMLhgzMp4keSJ",
  "key16": "62tEpAMGqoRmVCUG7vT1MuyQGdcEJD3hueH2rGb6gNWZYTn4PhnJwyM6j8Cznmu2cc5oMVD2aF8o25W9LvjZL4BY",
  "key17": "5QMQ61yNKtNYFSJ3YZwtXnXKGTvEo2cKNXBkLxY1juXk84fEsNVct71H73FV2FbKXkfZuR7CpmtNVRrC8TfUbqW2",
  "key18": "3MQM3CLHfCobpnYKdYT6aVJH6fvxZXeJ8AveRMUT7ZPgGCHNa7iEu2ShtJHAFWXZ8mkZG5SkjXSuVfjUYh1p6KyN",
  "key19": "3zxa1ax3KWpE6jjU9j7cV9h6htKbPB3phofGArnLxDQ1M4MEHaqXVoA4z9Ry8hFKqaWQowahpYanAaEV69Y3SpCF",
  "key20": "Fbq8KBCFqCF7Co5K5eGxgEGHabYtNRDJ4m4BhLAH9WY9kkCKUAb1RzrE5qimsYEnJTU5kVZgPw4C8CDsvimbdJL",
  "key21": "1MsEZWSymaYecbhPSNoMG5AiZhXbT7XCcDor9iNYsAa6mPhHcCuvcrayMFwvyu1PVGnk6rt9pxq8xPpvjPRNZw8",
  "key22": "3XxzcmG6AhpgL7R3u4D2NPEnAZ4KdgDXrk5GEUdQLKf24VrGvFy5rtQdz6PncHF5TbSCTAuAXf5jq2uWNDeombnH",
  "key23": "3A9CbtfXLcHSfBnKpM2FggJTpPVvLNhzphc8wp5FYcA7RiG2gtDFtH1pHggrgBXLUswPAAAT8wtBDnEZmmQ1GBxq",
  "key24": "4pXMoYrY7aZVnjdQzEiK6nnpB3tW4jPvWgDn1yNgetHe7t68Rja7RceP8WkrCDRfEbbwheJgaXB81hD2DuHS88Y2",
  "key25": "2YNAYEaTEZY139Q382ANNXYFdk6qYoYnQQVXzyNUAFeUVDQbT4cDhLF7JvRchVWkxjhXBqquWArksRwEAAt61rN3",
  "key26": "2Ybfvv9GSUhKfYZxkVQ8pj4grBKfWcorgh8FY2Jx9F92LMG1dCq3kBXL4yH57wjLYrPn5pnvCJTqcbjSdwEE5aAf",
  "key27": "4PW5npPuzdNvWY7nqGJjMgjDTorJmEorhY4bV2oDZu11dhK2g8bVez92EpNteoNjfpDbd6eAX34z8MckoBVkTwdM",
  "key28": "2V7umHFDhtYkLFrsmmU6SAkqvMhw2rwJaYfkwhqnBozDV1xUTUv64Ydj8ePKDpHQYR8iCJqEQpJsuUSDUT4miuxA",
  "key29": "s33t6reium2oNGkk2g7aryhZipfgyny67oawAgh2efqYkuyif33XWgH42nXyYdEc5h6LZkhJXdwCB9e4TghGEXZ",
  "key30": "3JXxjAUhzjuWyRE3WkWG9oa17QEZZu8zQk2FjQR3uAKa1SNM9zhYXLBtfrUkfpYAPNk8sRBSKjSFsqz9uxzF3mL",
  "key31": "4yMrn3gVhhBXhTvmosmXVsjPeHFDw19HtrJim5nmaVf331g8a2nBnXXJNERLKEj5u3mfPUSxcgCMew5SRzkRF8wi",
  "key32": "3Wfb94gfZ7FxC8cmdA8YtpqmvRyRgicxsSM1zsktuwzFbGVCeghpWgXUWSUCg2cmqxCab2ggUc5RzkuQWJVCqkzn",
  "key33": "gN6Ryt3ABZ7TJkoHsRCxzD6FiZuNjZh8xK2VKhGp6TawTBGXRDW5U6wiBji6Z5eRzcDENTRLDgnGSTcbM3qvSuD",
  "key34": "481KnAP6MUM33MursQr3xzjdD411DVNXqweDzph5Y9Dvr1PrRtcKjNJxCBCovMKDzhB3azdH2xiZ8c7vawwS5h4E",
  "key35": "2UbgG3aDHjDMvfDoGR4TxdjJ5doWJzqVobCNQt9V2gNUhxTSn7yAhEbjmbPJRKgf81HtDnQ9TPUArCLsppPT6FVB",
  "key36": "QbJTT4axj6GphvirToKrN732DfKcUwRXLecP6qixuiYQaRbbjjUDuGXPsRjvj4DaNgCHNTLAymDsxGhJrdw43LZ",
  "key37": "3fLUNmyAKSXY21Kr7gfiuaK9pFsUu7z8X5FQdtvCpnK3RPGF5joRVgXXtyPGhdiz8toVL8UGpPYWXGhhk8uznVCw",
  "key38": "26pqZWohvUHQ1GMr1RGJmP5twBwZ1eFuZi8Pn322v3XkMpGJaTND3AqR41PL59mYEoYoKJeipY7AZD1E8Dr3qdTt",
  "key39": "4Egjmqy2Ay2FxYQeDebuq4iZwB2kJtLFijLA1fYBgm2QnENna8JtoSLeLAwXf2nfgddTMwoWX18XP2hqwPYn1BCE",
  "key40": "3GT2o9QYJf3WXcEg85bnBZ8ZYuPR9qDNh2ViqYdm6VMZCkgsnBMzymKkn37tGaBUHopkPJgVaT58GWdtCJwgTzJ2",
  "key41": "3fRpZTw1TTQiB9h7kvSCTd2WycWtdAkXFQawfzqcYBP7dhfStnvRvdcMMVkqEALTPhs3zpLaB1ewyCgopsuVHRBL",
  "key42": "21c68QwVwrezwpkTDRGi9qKWa7NgxepHBhioZo1rNeNoo2vVDaLexpHPkXBaBDewap4UAEBTNVxjVBrp9kEikHi5",
  "key43": "4DV9SYHJmpCh5mX2y11WUZHcT825JDtSdiVDZxfFsRipuXZDcxLgLqNJHj6vcSQsDgLMJS7CrZYx7PSxm3QhPEjk",
  "key44": "4XQRe5yDmzuQMDXqsZEMVJsvRqhvKUkA6FdDwanHuCaCiQKdmN1Ajy2vDTr8ukCFVqy7cURa2RNh7XWSMXuj551g",
  "key45": "2vU3KtS7PSgzRBGfuL2v38S6ur5Ah8fKaCe4oYvgoAmpC1wL8byXt37j3nig3iWKPSrfF85jiV4gdQxwP1hou4r5",
  "key46": "ZG3NWAQuikm5ydhiHZ91XsdVT11bCoe5oFj6LjcFCRbZoTM9yrH9N7CRrKkZjpYvcBQCnQJBBfspVv4eZXns1k8",
  "key47": "3tvyg3bS8pJ9CmuABj5sySRzG7gMiXBDsnp7xwx97yfLaKLvMio8bdrNikCJH8ypSLtfeTnqhqz2jvioNMWyu7W5"
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
