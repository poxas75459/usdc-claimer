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
    "fiJNkzcvfj4KUmnc8bTmA6Mo991UvzMPW5mSqonRJ2UGwKawKSHBFY5FJDPeqg885T1KGPTwZjEdKuhxG35tj8D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGwPEPC8t7iSuBLEEUQx84x2M8Mo7wNBTHyPHeYiztAUSr9rTLbox8wXr8ZviJq4ufd9GPx2GEbur6mtszfBEmm",
  "key1": "3Y9i2DB77aNkvwSF6Z8TCihw4otRvtEyFNtQCYNDn1tXfLBNTCEJQKcATVv25vCBGe4FjGey9yVZfaZGYBegCdW3",
  "key2": "5rHf6WZZBZLSUKZFQZYJ6VHjF9nN8wTKU1s7TcYCwvAMYp4icyMgjf9qReHo47gBvzmdMzYDP1apYk7xxNsUMpQe",
  "key3": "sKjkC6qtDKGp42djQNa1tP7WdUvJym3q23RpS3BQAeepnmAvnTKnwcwPUPTC8DoMqeXDQgeixmso7SBRRFQ9czP",
  "key4": "5YarbqqCRT5Na4yBZwcxGr6fnDvux6JktXoJ5iAbmC4mDdNPtWRMRzQZP4PEMNYULWZTGrmzRuYYbw2BeftyT6ju",
  "key5": "2YvR7yTG5GRwzfM28QSxLHpeZHTqjJiNiGsCDm9ueuiHi8UqgVg6HLvmxZqKCTTkxRACcwdmF95qe1nVSQjfLa7k",
  "key6": "2h2CLaya8j5jALTy6RcMscG62aBq8GRu4D34H6y9VF897jXkhqtqfvAwnaWCc2pazVsDaGDVanhTbFSwWVAjXKQF",
  "key7": "hkpVG1jrhco7EeinbECaTU9SUZdyQw5ev1LLpatkPEFmepKDJXqsRkPC9fgg6P6DLRG9Z927eA2BnF5HvmvkeFw",
  "key8": "4N2xFozo9xPxJ4Rt3ULttF1A4ALrkDUo9DNctXnuafRjseofd77xnMMcB6oUkwgdJqiq9y7SJwwhmY4c5PQTPHLB",
  "key9": "5xuvzS7DCJE3tyPzyoXRMeHJGCs8TjJeKMdkpd5giX3NZi5Y77g6mEVnyUzFvhYrAH4CP6QrybTc9J1RF3cJT2VS",
  "key10": "3Luo5D4EeheQc2Kr1aNNFgeWpY9fg7WfkPaAF7jJrC7NTCLLJj9K4TW1aTFEF7RqZ62QzTteuyRwCUdMhPaFGLQ3",
  "key11": "4QyQCFC3YrMajfWHgfaZZw6DvbBDDg8EZX5W6V2jgrpxf8wCt4nUZJSrcgtY7qGNMBvoQPPe9qFZZxmaJfeHuK9h",
  "key12": "4b3KuF6NQvavVSBV3aTxrZ3YQbus7gRLDpjtQXBf2yye64EaCJCVzw8Zz6ikSrxujQ6PtUJ5rBXqP9AP1pXoSeXL",
  "key13": "38DEMRSEzDahYutmS1ik4rMa36mj17Vw6R4xp97MRn6P9pKKxxADd8VhrP7o3KcTRvTHvpL2wDy3WJvuoT9w4WDW",
  "key14": "3TJGyYp17STD2KuCqwoWLrdh2DnJFLGH46QM2PHUQDw6A5X8tVeCm1TY6H6FSurA9TYMXNPDjz3vrdWTgXkrf66H",
  "key15": "3vQoSh9NYSpE9DBkjoNh6VrCVjbdbA3v6FRycBHpm3kYdMpk3yoz79Dq8nGMCQyjPgEK8r329Ckiw3Y3RuY8qACs",
  "key16": "52sUCiZS8zbfnmhHMLz6bMtCcx1J3RnbFvBAr4VLHbP7DXpyuYG441WGGL2pjtjZMSCRZE3GTq9nmr3uSxRZYU5B",
  "key17": "2YFLvywQ53x3GUeN1juaTwzMdAGzMUwutXnSJLVNpkCxBpguwgYS6yrdnqCpRFsp2t9pFtG5ojkq4S59Ts9NvKfK",
  "key18": "e1TuZeYfvYGW4kzqkgbczKbDwQTS34C37P2HM6khBiyJHHhGJWdnYBTUd5BuKGtqFCerj72UbvWx5fCoLmm7ULF",
  "key19": "BX4a6NLDNAfDM2QGoUPHyhwBHKvmtAEywgoutwDrS7GZ6F2ZJtKC3ooPMoWCAQs3eLU5H1QwtDP71bDXiWJBniN",
  "key20": "4nGKmw4gnqxcvqLKYAZt24ooiNa6VKwe9BerrhSRa2q6gBWVzzcvYPpBjR1z77GkWiZJ9rLsNP5MW87AfuAV2pue",
  "key21": "4z21SuGZjmSNjz9sjf2hRCiNie6Q7gc5jJbbJsEZwAESQiycRmmtXW3Lso658Eg5DoiMFiVYkSGgTJY8BmTAKh63",
  "key22": "2fYhL7a6e9YDr2QiQ72bEsUePRYsMrEyMhoKb3YY3QQwFMEpVxhwHKyjMQ5ynXeXJQ6tCv48cbWkMbEJPDcv9npi",
  "key23": "2HL52ZNncCFMLTnBfKX8LwZ2g3rsqU2yq748P7egoxHiraJjg8mDj2VHofCswm8pvuEzMxoRjQVZUT4Mhedb4Zrq",
  "key24": "nD1CctMq7x9kdHxS9oJYCoZyfL9N12LSkbkjxDJ1LLA4eCZKKQsHGm2k74PCsLwjEuXJQuokButXw9Nj5XDmGek",
  "key25": "5EowAhvWeDUvLxiem3iu8qDcVhqgC9B87rTtoaieCu2pco6AbukDZw4qEKJTb4o16B6GR72YZzNorwW4hVMowVru",
  "key26": "Nzv3Jgc3ih6C711EQ3ST6QNFVCTF7q5PPHuHmKimKTCmFntCCtWpDXcUf17LFbsQyouXa4zfKYhzbw4dccx7Yw3",
  "key27": "42dSWb8BqACrRMYyMzicSoxpvByCwbhSDT62oR86G6EsYoWXzPUabJCnmysz3bdzkNwm5QZtocjvgoDpA2be6TYE",
  "key28": "2kYoR6YMmD3i1eHhoRegjeY2GDAYyaEwVGoukM98jzydAq1rffw4XY6NcErz1Fi4ksuab3BW778a63FahPryCR1P",
  "key29": "63XKVNH9hXMePWP6Ht16JtCFG7ZyE8pwWckuBKyv5am33LbXU9EPm6jvetfDjx41goFmPmcKvbf7JRNx35Y5eYH1",
  "key30": "5DnTzzy83zBrMxuvFHw8xKPVJJ8pifk9RcbqyurB8uDJ4mveuNX5SZbBr4MxKoitkaje4Q6tMJwajzFayLPqF71C",
  "key31": "hDiqeGwLrqRdQLPUZ1UgQqVrz6gYpVUBDpwgrsNW9QjTUWx1o4D965ZgaKYtEx9XATa48mzjkccnRyrUNXEWga1",
  "key32": "4XLRrLYoxPHYrXUiNHdMio6te7ks5AQY77aj7VXPpvjYT5HFkdcZKofYH5DzJwLQ9E1LYPUuTTwP4sbS9my3WfFS",
  "key33": "3vc8QC4PB3L8CtekzchjzfTEfYbafijN1AQpzS6xfJrpkV1MqAsnjmPeL5CHLXCKxYk4QxuupWVSzYbEzRi3v7zG",
  "key34": "5hK8ba4TmBrbntQSoFkhJvmArnrcmS82H1Ng9X67txBtpEFZ5QYEe3G9JESnEsXHyhuzdqnZKD67uKhBmx6zzQmm",
  "key35": "4SqkvX3Ecgk2YsU2NHUY6wvCmVCxUxF3BQBGvQmvMB548NvLFg4mdUhkLY45uu5becoKkE9k3Er2ioWS6mw2eseh",
  "key36": "3txoj4mBtMFu73MpiTR2VPBaw7NZinMJ1j7URv1ZAM3o5mRS9HZfN5tyRzqYoEaVQBWRRsHAkpgjGu6C9uBXzMkp",
  "key37": "3TcRR46qctUjUSFoCHorKXure39NV1G2MQ16GgUE9PLLM7gEaTCCvtdDDMixSCdeCycm3VdJJ8ubvTPUJWhPFQz2",
  "key38": "4D5omqWQ2518MQRYZRL7mQPooxc6bxT3EBb6HpiqDuuCmiHnzw2ZqAuECN8WmTLY5fgTJMLZLKLue4MN1U6Yz7t5",
  "key39": "3idSAc6EkqCuDRnyqkAvQFaRjYVu3vb779F2g2s2CnJxN4Aau4jmUbZjPAmgYNFe6aPi28iPTqsYsT9qLdtd7YNq",
  "key40": "5FC828Ep8VnTryUZDkFRwJpN3PUZjULqpQnKw21TiZmGPtHHUMzYJL1n21YC65NBYZNfCTw2jZjGW3Q7q7nDn3Fc",
  "key41": "3mpfnhtdguWyjX7y754mxyLzdxj9xThN6hesqKpDjwvTwCXEx65GqrzsR9oGsdMAFDJvgFDwGPRjWpYcWiq6LpSj",
  "key42": "nfqfx5HJj8reyqpCSh71ouJd8Vz5hodhMg562PGYzViYi3DrwsmHL2cZ3kQ2z4anSbmog2yzyGB9GPJ6q4mquo8",
  "key43": "5dYMogcs9Beo95ym9wBvZm5de8tP3u4qt8CfqFzXctPTCRPxEnPUabMDu5Y7dJhMBrXT6twh86nSytU12wdjFRvb",
  "key44": "4xvWSAtSDJpSwNRS2hk9cPVp3oFctKCrWojsAffLEryJDXtj4QQJdPts3C7sK7t4fuN3hhJkn7EehET5ysgxAU8S",
  "key45": "1812fefSq3QKsjBorm1q3nxD2w91HAtjekWy6M7xvUfcXBvV6v18hsozhi4p5kfNQ4o4AaKH65fJB23ckrvSS3E",
  "key46": "LnyJcfAZsm3aKjowDJ3bG7fc8Z9rfvXWX5qYTZMfzM32VoJCP4LKKtM4WvJvRvrqoptpTaZLhnTtn6RRdxAdyq1",
  "key47": "2QPji3qaFP9TCP1dqsHwCvQuiqEViwHT4Wo9ntgZKr3tjbKLAP6DpBintKspKwgbBkM9iwewQaTFm7Lqt5Q731xB",
  "key48": "5LQ4CNTkGceWLKsj9JED1PcCcyc88gg5ZjVC6axV7TdSiXUX4H4E2ieZiA4Mo5EgSF7iq8nc1Uwxr197A3tUx7mn"
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
