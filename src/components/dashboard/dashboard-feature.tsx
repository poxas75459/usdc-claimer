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
    "3tLA31fXNBWsTPRPQDNCqM3qr78mf5mihRMfJYXkN9wTahdta4NiFvJbweHqMsAEoSbJMtrBqUq4XxftsLLJPwTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zF2QfDjvgog1t4hjrGuRw1RNey1fXrWrZ5D8eGsHqaCrJ7iNSbXF2DCG83mUU1Qu5mtTzkTBmymC3U5uzH84Dfr",
  "key1": "4gMSHjZSMF8w1f679e9WTzp9n3rBGBbZqYcrKbR5J8tm57z3bcvvFFZrY9EMY6JvLivphRTxhdsKZSbipCs4rvJc",
  "key2": "29tZ5V3b2StEte8eYaw7whmxRMnnXQctSYQcSwm198fzFAivPpdzi9LjfuGRpmyjgwvLdZfe92SNKCN2WZtnsBmB",
  "key3": "5KReX3kWV1iG1MU1vgi5zkpYXjymmeL6532QTrxviBbUaag8Aon45dc6EVVEaB5KYebHKXsJEes6xJU6Hg3hhn9",
  "key4": "5YUoo3cdAL2kg8aVG9zP8HVSruoq71Tz82Q3GYU6JFja2cLZiFkNby41ikFz2niQsL2amUdcf5PRyBTL87aDmFEj",
  "key5": "28NKe9HPdK1LUTZ3LrYRGpzzFQrmCNq468KVhPRf3vueaHGyWWHkQNEZPT2CSvNKLe4Mj4SFLKPTZwhez3Up9ULq",
  "key6": "2Gp4wk7vq2kbwQCEpxuUbc9HUT6xvidwqrWAjGKw65ugoFab7zdgqu1f9j8JWqMyN4CRDVtDVjmnZqmrAd2q1mQx",
  "key7": "Xm9wfWMXQVvdSur9pvsFj9z175gYAFJt34Vb6td9ZuD8nuMGyFzrZrhvT31LMXfdQkyNb1sz5mbXZbLwLq27Z7g",
  "key8": "CRjKpUBmRjZca7DensgHbq6azyMhEW3pu3qC25VHuyB9ANB8ez532meVF3tZ4MTfXm1BBvNvA59bKUHW2HhTTJe",
  "key9": "3H2HYmanjMFKjddJnxvqyXzZ578S8SjB3MET8hhVmVusN78tn4BdBbvv8GPZKMV1mC8CKRjsVdo17FNtVPo1N7Z",
  "key10": "5TCpTyLvgseZak9qc3DGdiQ3ndNqnuZnaYvETmExCfj3qbweq1VcxGgSu7w8Nz66DwTJZ5z95Jc1f68TopLTkycL",
  "key11": "5eaSk3YTnaQZAb65xLy6Amszufd7wLqJeiurEPMBLn1erqiCeE1HuNG6RDKobS8appdicfCdfcuSHJ9WMShPk62F",
  "key12": "4EjeSRayosFECWFZ6HL6gax94hyk1uWGXYSDjcbhD2RDKXd6tQ8CB575CdKyqGwN4rnREUs9ZmaUggu4KZyU96L9",
  "key13": "2royUL6ufdbAFRa5HyxBmLvUvMyPeKYU9REjqYoCLUDThaZccdheAh1NsdCV2wdcKrAZBJo4qTQxZU7aa4YFXhEt",
  "key14": "25HDLKFSq2FKHezoDCGXSGYjzzxJGL4Stc3Eqgt2vyeGVXspeni5q7HRTzawzGtijFo6KvKaGcxbwb2artdaaxt9",
  "key15": "MEX3NgcyFHDTXK1sFVXh8W2mEUfHJ5RuKWrtLwciJT57D8c6YoGj5pqYDxcjVVyRnYG4Q5XyFQybBnhbZza3hT6",
  "key16": "Lk47beSXcvxD3YqVvLB5FbmxUDrBoXNHuJETPMU8uJ2ueVsAY3SjDNPQv3bMBu8WVssvHa5cCGjyyZePNmoHUKY",
  "key17": "3w6bQ5zi3GBuJp5vM5cwm7dH8xPR5Yy7aDVuTwErZnheSEc44As2BKTyhM1K9RqsondDVdSrguxhsJs6uaBk4Hq8",
  "key18": "4B6qTYhyswSkV85ATrNzWB2DhkDLTC8Wd1cqmoGda8AZS6gVH8GKbN1QukZmWbLrPHHjKM7WSHd7T6z5Vpbo6EYx",
  "key19": "LgG7FUFQuLXPBDJZGj2BWSAMcDs1utyz66C4G5nLXTk2DqJ6bkXscaaxPVDnMAinPYuadEUMjUkwJvFqnhog7az",
  "key20": "5tFvC2adwXgnngLtHzDpZ87ixjGGm1Jikrtjo52kEk1sQXzjie52zN8X9XK4Ez4thEsT7dSCqcFqgTdbfSwxy8Pa",
  "key21": "2QBtNAjmXKxSepJzvoMAsMyk9ZHuK8WnFrUtXQxCyQ5xZ8htVa8o78RxvAXwmCq8z2UsRpuwrTQDCgezWDPfGd4u",
  "key22": "2tSPF4a1EANqt9D97vzL4XEaBgN82vHnTPJk4jmYDkBWjA8e5riB9gKNjHFTp6MuCy9EzTxM1MJfYbZNSXj7yYyX",
  "key23": "eQXgGXLFeBhrB4kJpf67K3M5dVQTemaut1nugWCym2jwTqYcoKRocQFwWY9gzjafnH7eStsnSCd7M6HNTk9EWvn",
  "key24": "62Qa57bWzgqeq4pTNhvwQ6pQT9i34HK5TnTFRYho9SscKWxY8ms5rprXKAQnrLQw7XKab9WK3zf6wJJuXk6FdMW9",
  "key25": "5fTYaJ9c5SDBKsHFGniKMnyrsVSrYLE8k8MYJkCEJvU8yERpW7ef2bYKfVV31Qw8tfZqe4JhGMjnK3RiHHsY2S9D",
  "key26": "47mTZKAV4LdoHW5p5zdpJHRpp6ZFrUnF3A4vonBH39sKgwQ64iXFDiETyzLbr6PWbHuRrfym9sJQg7Ufsib3iTAY",
  "key27": "4faLCYYpWphsDQ4fMU94CvsX1Kzyb1eU4H4c2bhfMwtECsdv7vwSuGWUY3MMau3ppiLewmeRfF48EjNSNEjc1rAv",
  "key28": "4J5pE59QLzP5KbdN2HYgxDsVRF6jhLPnexgZVvBqkaiYKQXqtFNB18SzRNLpon8iQ9DmUUz6PyfjprYTBjDzXK2Q",
  "key29": "2bwEsGB6JgH9QpDz9CBKGo9eHuaiU7jhoLPd8DGpkv7f6LpTGN83Bk8U84UeKo6QT583VRPFRNEeyMCsSm8gNRRx",
  "key30": "3ErmLH9QbTDSwv8q2jSNjJmYKt1kdryZTFvEEM8giPkYhfTegtCzphBZ4ZDRfvTaDSuRTtQyeVUnC6uWm4FbL28z",
  "key31": "633BoE3cZYP82U43Vx7ScFY3E63WD5GDjNEfrpkM154N8JMhYkaPdvQ2N25bA8pXn7VhxSsVynxRzQvmJJW5gPQF",
  "key32": "xZEyuHfYJ6dYdMQxFnCPNoKGGGsk2ydgWyt9hAootayVFJMpMd3XDzziSKkAAFGrsJmjzijquPjj5ZH6fFGewX7"
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
