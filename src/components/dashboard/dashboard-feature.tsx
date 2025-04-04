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
    "63GyGrhp26yeTsxVH9626Zdw5GK7ynamJfykb5JEfg18tz3TbGPvAZH6SPcbqa8TgT1uUR8D2FV9SGNshbjH4Yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zwTbPhtZVsXHDFfUC3Lwz9nmo2xziY1NavGVa6bryHeLg5ieMFipGoSKpXAkXwyQhmkxa6jtTjZMZbDBbymBuWt",
  "key1": "u7rzqdyhq6hkcYFjjLTNpGvFkeRYy5S57YX6NX63NWi3qDK5vfrquafuWVSRrB9Z63h25LDABdPfYCtGYuN2h3S",
  "key2": "35nBqWHmYpGGjpYhznd9LnefpTd5uBjcxjb9ZgnsesA1GtTjaK3dCxQwLvjh9DopUAgudMduKDxxJSvLufZT6xhy",
  "key3": "JbpAsfe3qoEiegZV1mdE9NfNrS1U9KYZtsJTyLkDjiFMiZjQNron4RKLzPx8D2posCpW9jRjVnWUEMSidCqAF6u",
  "key4": "2N4R3JfX6f3YQqERvazEgbKf2n3CpJbepPfRFUGDWy2zFEESh3tFjqkpfcHtV1HyBaahdrgwmBY79dZnivdrNwhv",
  "key5": "4TFtfPRfxrcbWXKP3Wb4DHwXNxwSh9BCnqcHQvmpNANcBqA7zzLZJnWQRFuPTF6f13Y3ddBwmQH3mgFRKdNwLZx1",
  "key6": "k5QABHQ78HxEvcjCeALAFxx4GMPqdNVc8DFrWQALPZ4ZAtsLtjWvb2nWomF2jg8Me8dTiPMsjMPTKkv3j4tgXiV",
  "key7": "TexaWXMPR2Lc1JRB5Mpp5qyb42nt72Vzeq51sTorBTHUpreVdMBwDFwDSo7TNfb9ckxnNevSQTRdhVKWb3bQ49A",
  "key8": "45mYC59emFCbnZVm94Zqnd4k3ta1gWx2Y6KYnMbzmUW92nCWjbkdWMGUbwjhmoYqavcpEqcQ6nCRE6Y2AAkxxiMy",
  "key9": "4GmEBtrL6eGak3gnxaF4P5Lsk4ejCMNv1g1pFom4W4MDM5waBNeSqiLpg4TNQjK6BGSJMddx6Guu7Ftn7QLitkzi",
  "key10": "54MnWKgsSZL1zQZ4ZuxpyyPrrekdaiaTzxNgEUuEAqQ8LaACTeV5N6HaAAcFKHDUYdaDCEmBA5na31BJT6NXJS2n",
  "key11": "2KQTfvqfufLj2Nnd5VyUtezb8NThLj8YXYadb1t1aNqW3ftutZq5rbRcnngjdeSea3twNRYJNDkPk2jcsFufYiJh",
  "key12": "3smEi1jVGzmhioo3v4zB2MirMBUX3NNKen2HSmFQoxjMxfiwDrqq1s9QZZLssD6tuCWnEJxM3x25WEb1QeTeyupx",
  "key13": "2rwKLVCYEdhDMeCMG8Zy23sEVimDX5XSzSdxrVsReGu24w8xnWDFc98ZgjjoaMQN1tXyz2kUut9dPEC2FoC2Y6QA",
  "key14": "EJu8HdXSiLWkQGiJSyTCzsteuobccw1nEX5EMHRJwtUq651akK6hFApWVjR9ikGgcBJfxZqBpBnhkg1qGyKBBex",
  "key15": "4rCEiMkvyBXZB8zoQcXdLu7xhxUSrfA53juSH9mebYgEiN4LDHpVjuyQxDVu2LjWwSCfZ5dub4ipY7vS7GCZoPiV",
  "key16": "3C9m9QMD5HPCPuG5L2DDs9nhERzzCfSocaxD4kkNTtcPadxWF3UNJcaHKErg2ZXLdfNoraKxpus138bqU5vX5Kqy",
  "key17": "RxheEhdUrece7SNTiBgiEfZP2dK2sw69URpisEAtcauvXMcPHqaPFuSbuzYbASJnbyiJ27gWi6rrASTiDXgpbph",
  "key18": "GJKf7DZeznZNnrUSJpznFf8jA9AcE9zwzEHA8gnsgYa4FQmYdKPQnUXooZ1fo7X4GkBHEAgx7fxUfnRVJkbea6k",
  "key19": "4NbQSNxw5M4J4dX6pfBGMeiouwnL9BoWiTrhjhHuK8f9Fz59qGA8n62MWeFjmY2sBQiw7eyg1CWMxLttBoAtGQGC",
  "key20": "3iogzY59J3aLG9gYycGRyUkWSSnic64YYr9DyYkPwQu2QLn1aRPxECK36pqUP5emLZdUaLqEJfoLg7fZCUWeZuGe",
  "key21": "3MpxdxaBtj2pXettM1WdXjyEAatHjFHdvC4pUWHium5Es4YXamp4WkrmsRjUsHSTWcFWi4ih67CPwNmUMWs9tuff",
  "key22": "4xK5B9HYcVRSvicwjseh3VZ7H6Nu8TTERXReUUUb2dA3YNck2pdBP5iCQmhSCvr4Eow5U6AS5ufQfEecird5wi36",
  "key23": "3uQAeKCXA4wtiLLTiS8wDNJFXgY1zWL5q7i2miZJDvS7giDyMvksbQmMpJ27MCKVEG19NQxHiGZwYrtE5VgQcN2B",
  "key24": "25iyGeVNKmn1or4LL9PzK7egN78oem7Q3sWP9sMZr1ZNwKpXBYq3T6njZ9F2f23EEuT8JUW5wwVkvwkvb1yUf9qU",
  "key25": "wUt8Ea9vystDN8RSSPvWzTw6DT4io7pjk2kt1zGv4e3NDyXAefZNjvpAmyTJdyxQ3p63rxgHMtwimicNYA2v6gJ",
  "key26": "5q4H8vucPQ91bG4yCuG6x7FZSXziUR8YpwSrQRygMLvaDfbCgDtwuggPi21BvP6NXm8GnUyUYxe654UsjgRZc5CF",
  "key27": "3C6h3KX71pEvRN6HjmyfHYLn9zVd4hxqeUJ44tXQAXkaZCJq6hexxhme7Z2GxmUzQtU9mTgs4crdoFX9QFcR4hku",
  "key28": "4rj2dDQKsMpthAwabc4n5DzCy8Cw2rry83t1xWdcnBpnZnuRENQDbGPAXEHizBa7nvbWgPX8aKzPhuwXBMZ597ff",
  "key29": "54CXWyEbt7K4862u6k45K8o7VNyzqCDan3Eat91J6YDjpHYmFtd67cLqab59NG3iLZiTVu1D1AzD51vdyKVXdCM5",
  "key30": "ALXa67Pqp9T3CFBDgZXuKVhMsUWbmHzzGUVfeVhgNhTMaxB2kYqURrt5WQqiJq4kGDGH4F9ZFW2oo97Zf9wEz5z",
  "key31": "4B5kuscUNDkx1j8X8WbU8LyfRUH7Einj4oqEXYqx6Q54LASaHfRTmLX9gRtWjeSe14vvd5r4jCFtjMxj62d5SaZY",
  "key32": "4KCeodyTsKWreu6qTVmwhd5oYjqZRTk9fvoeXG9SP3vdjWKXpskCJ2G9BL8vNz8gayA68zF2ShELj5rDv3FUybfg",
  "key33": "gvdE3cRtzcYcao4QZvvWmpYJESvTufbXZWQCsyMaNLr7rwHqWtmEUaotxhtcrLsffRuTBcZszcFrQdWk2wLxuHA",
  "key34": "3sLsBhauz7K4iWXeZEYLJ1HaxNgz9Yo8AjGwPESLTsTMbe5UfrzqT9AbiFLVnsUgLQXcR3wxCLdJ1PfmugDBszMh",
  "key35": "3qWWC1fHaCfb8si2fP2MmtH5iu3evWzbN2u9ZzMjggZhLQgRCPWTNGjY2WSbgV2NHiFfQCS5fJawc3UTMJ3G6tr1",
  "key36": "5mAj2fx3icN2QM9nWb4FiahhvXSwPxKK6oF11n9ftFuVqy2ygEiUjzdrhPLByddvdGsKxWAztXc4mAhC2P26ffBh",
  "key37": "47nKNu2BvozfAWLdPZFNagoaxBdojLtepbwGbiPw71V5D9ZEKYica6UQykjxd9BgCCFtgLEjGvH9dCc6rcP8rYfa",
  "key38": "2aDeH2ZLgyt7UD5UhQCtTFgwbYJ7oaHkd7DhswCPc9uYPETyBD2zRg8siexE6CmhRbninbLG5fCYU8GkCBqbJWVZ",
  "key39": "2fJnR8tSrwdVDRr5pnU3KwVZVkYhR7N1iBdLcFotib2dKVeXxZ7kxTaq4GmAHJzqpK9HmTXh6bWtj7kxAdNaLYEN",
  "key40": "2mTSj7W4CutQJsDQN8KxGzYYLT7fwqj27imQ3jGE8puP6EDM8mT4gAPp6NZHNtST4xhiEUSXfQ2vFQpZYPGiodJu",
  "key41": "b5jE73bPSQayUgebhZQA8EytZ62KoxC6CFEQNdEuSZcgxXr4aZGiLquJ7KojP9DjX3ha18wrbBYzAvRdTa1VU4w",
  "key42": "4BctKJRu5PSnK92QdutmygpXxMuWXQe1gXHDuQfVp4rRUZFAzX6AZ95uDLSZmP2zaU8fTg8beJjoJ26crBBECaBn",
  "key43": "gXYjYw5ohfvaGmH5uKdfR19YzfT788ihBgff5ssazNo3ZiGb3LSWdnybuMJZDytxoJVx7q2x8NmyJFiAnWHEZo2",
  "key44": "2sbyTFNP6hmLAVNndvqKZu5ipgPfj1hRmbdPyDTQoKh8TN7UTMhQqVgNUnC4MtR1mLqLhdSzuvZXgVWsLMCHo6x4",
  "key45": "3sP4eEtEdZzZPftyUAnRdQvnYUMYKwZ8CfP8QDtCKrsuVpQZf698gb2WTq4AoPCr26N5JF2G8okDXSnDevSK34aA",
  "key46": "4wsysumeqpBS1opordCi5Z1CWh4i9dYd8PfpnHUdMwMYqmnDPmH4ugF2JgCmpRUjnvAPocfDUJzGVbE6mL5acurF",
  "key47": "66pzZ4ZqpDAD7LTvZTxoxxGvTQik8pe4Re8PtXVRdeh1GzaJLunuMtmoXsMivH97VBCztLFPp5yicicUCZxZiR32"
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
