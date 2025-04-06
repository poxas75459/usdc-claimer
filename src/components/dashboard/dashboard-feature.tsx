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
    "WQBgPTo85FvT7TjKPD5hGLR5oyLxprGoQiosARHTnG7hp3pGen8HjVyitZQSdocR3ok1A2eZM4aiGUAyUpL5b5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X6RddED7MorrXSM9TKG2qMFGECFrJQP1ZZDHwSdYaKJMnqnciiHZvPUv92tUkrwb6RAGeMNio5WbS4k9uevGgdU",
  "key1": "4R3AwcK3qVzMBBNvcRkkV42zZDtoPFPFobDJ4tjMdcNsALq4Hh13usJbqDkavUx46fn5tuZX7HF7xomqfG9mRgh5",
  "key2": "4oEeraxNjX9WNKoWzm4gvfA9xZMZr9CZ6bxiUFnupB2HQiKxB4v8XsKxouWzEyDYNvjXWjCKGV3yDuUYnh6QjRkH",
  "key3": "gkpmPtrKuAJDcTSGpjQVueXUDjDTQay5AtxL5tiHcSBGiEkJrSRPEpSwSQtmmgADoQQKs4pP5NLGKB6YC6YwU2c",
  "key4": "2tvr8vocLJRCARY9gTDSkhxwQ7q8QnrZWL4scDBHi7Yqd9t67f4HW27mwcEKRMGq5hq1D8AxGixpYXm6bzwSonsr",
  "key5": "2Q9sFYM1rfry9PiMsxSzzqSjMHVkKaKSNMcWPEAosGMRuGavKeufNMZ5nmRVa1kAsyZYRMyDJerxq1ufLyJzExRf",
  "key6": "gag6U6e8JDUeMAgL7EXRBq45vFy4LdJqK9djyGnTkyGJ4ZcT4AK6WR3qECjyHAXT3KrKT41FwT8vM44dHRK4Fsa",
  "key7": "b1ivw1exFPoyTByvqMABbiGSM8HHjF82ahPzRMEZxy6WE4Gm2wjNavDFDBeonKyoQCifkRwPzmjaoX83yNRmWdy",
  "key8": "47vas4bkvw6ULwxQqWSokrt5pCNH9cYAMPwZLggw8LTvKwz3ySmzppbfJ99t5J1zcQ7ZEF5fKf1zNG9Wtw6F7ttx",
  "key9": "5Nm95MVeyJRjAtsw3VjsEPXiZTRkrtYPqZL4yr1sNVEFnnyHGkdQpJmXQ3x7ozqMXd5JArFhK5k7HF8DB7JoeeCE",
  "key10": "5FC4kaPvFSeNLzrDhrozYpkCEjVEz8B6hqBdT1ahR4G55pJvvfL4mMwrbP5GjJvnbnjaEPqW7otb3xrddgu4VQBY",
  "key11": "KaSWvTQRtEiUDhuAFQqYfT4k1WNJzyYjqEbA4yANcW39HQKSUfsvU3PjcRY9LRZYEgd1hS2r9ZXkoyr6NpcEQdA",
  "key12": "WFQXnp7AH6Vwq8F7U7exAUJSfCc6wioaSrefZa16hGxZEpzZUsDnPHKRb9yhHUY7CBSxGsAh7XioRLFp7VR37Xo",
  "key13": "4u88WUMTSrriVYhw812oZYzxckFjbB47vP8dGLbc4UBeKEHXz6qGUuc57iXtGUzpgM2UewTxLsXp1tRderXtR4oX",
  "key14": "4p3XcuXPGjYFQoRaeBTX6yPdBQdWk3RyfneeR7XoE4TY5dkCqpySqWxaMD6LmVsqLPkGYRe7yZ12dBHpQNCKsYUV",
  "key15": "2er9Vrf2L3iWT6utY8Kk3WA8Xs8LHqGXmXZvmLUZFEnC8rqnhuBHuE8uF5AGU9oxz52csGKBh3f7rCme2mYZskMm",
  "key16": "5hforhHZHs44KLjJiD5dWAHy4tmebojnK9ViVZyWX5x3FNzyP1TBGeyUpqLJqpwmg9CoLAMVM61HkzPAECerRGHM",
  "key17": "5S4YNN9riXBkvKZKmRqqfWZaLX1nPfJsfPX8dkqkhcVwiakyaRWmn6A9M3ktuaV6Vpa89be7Yx8DJNuUBaRW2r5n",
  "key18": "5FAQxEktXTiTZWi3SiMgFabsiWrrL6z88hop9YESiWqMLinJFddhBSpARegCWnr2pG5M1QUdZQG9hG1eTJvMydJp",
  "key19": "5NsbMU51F6QRR9wtqqcSUncFyndFRg1L9ZzFfqt9RD8Rcjq1AFZNsoNDSSyQGG5VEmfNKSGQTTXWGuxBP4TqYUao",
  "key20": "375xHSReSYfAzdE19Bvj7c4Ci3opYFiyoFfoTpTeDQJzDnpvRgaiDLkSg4aZrrBruMfoWhaSq3yPeykEiE9fSJh6",
  "key21": "VmVZFv4KGA1BH6jcWVhrdHao8Kq6uWLpALcnt2NZiThJjBqw7WWkmQVzdMjuPWyD5BFmpYRSKwJZxMMFUT1WCzP",
  "key22": "3hsz5xHyPXjLsv7rHEJPtE47fXz9Q2bWJeUzvKMk3m9vPPZEry3Ab9kDRtPbds7AjTRgzYYMJQPAyUzSwPMMaQVa",
  "key23": "VbLDhpUYM99w1KNw5KFtXjhqm1nKzqAhQsJrwRV1Q9BUVDZ3Z79Ut2vQpM4tHzAWXs6evwnSBddpxiRxK2ZU8eR",
  "key24": "UkitYqYSTieJPEfh9CChwUEHUCaCvDNB2xpJsBqXst7jUxwiAadywPhVVU1PnGDuoNFcApgACTmhpMnbmbBqLF3",
  "key25": "4eEfxxWRz2iAefXQFUjd9RfR82qFbqmC2AfhJMaeAtzmxRcte6eMvPTmkRYiozoWdYb8JxiXkw7Fbz8b7iJSrCAj",
  "key26": "22ED2aGnpFcMYaCrgwFqqo8MDtBWJ44TrdfSfVdn9dLSuJtZ4TsYBn1za1iYAXvF7Z5UkCn37Dt6waSx5w6AMxGW",
  "key27": "3ef9sTZSgeuGg5ipWnWMe8PxKANgdauRmAnHoVS8W86z5FzqGRRHpZgXmtg2WELSPER3CuTBD752quWqdpzgYPjz",
  "key28": "3BcgYDgJPsN9aP8Q9nny8D8gUB1yorMH1Xv6xPM83dizF2BXWac91iddpBM18oZTJ1F9T1agQpwqR2QFwyCANhMh",
  "key29": "3wxDLvX6uMKhxmBBSqHexR4CMtwEzvYsBAiTxZRTC9NipnpTpA3TgQbxWaGkdXuMSEbRgJzdMST5mnACpJUyWtQE",
  "key30": "2SiPf3TCXGeV1dY5NdmnQZMVH59fzoYECkvjDWLABbhYMmrCvUGsK3jNVeUu1qoATzugUNrKRdYWzEifLk8Kd6K8",
  "key31": "5SmoqQVA1ieRvzr6imdoaWSsvsDCrEyXtm9bYzKAjLaR76sEnxsxFTLiH2cJS7opd6YxUjbAkvk3YNdJHAv4oz1J",
  "key32": "2KBe34uhqbyjCQrHzer6gh9qQceiaaP2YigZbanmG9kGXaDrVgfKhGqEC9Um2Huq2kBMTze1rGKN4MACUGsj5PZB",
  "key33": "5BTHQuyxmkA9vLaTreHWV3cc47n6dCMR3QcsTYG3eXKbPoZo5dLCrU94iZYp3KdcQSHd15MCSDfm5pBrCBj3Ytig",
  "key34": "66hSb3pKQh3ihHE1sdEPHpYvWsurBs1X3oW98Lz3zxMpqMXbLFXfo94AYEv2eR3zCVuy2KyD9Grw5ikGj6VsRYNB",
  "key35": "4hHGyDjdMf9rBja5aCTQnfRPm4RatQ9pYUNmWr1unJRLMhm2UXioqdJ54hQrohhtZf2NpqPs5CKHHf2WExDhZU6G",
  "key36": "CHAozWQV9gFHUCocuH33EZv7uhrYceLmnATaGZcdjPmMDtoYWLcPUZguByhWukU9GZmcCGxQftbdutz8tfgs2jC"
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
