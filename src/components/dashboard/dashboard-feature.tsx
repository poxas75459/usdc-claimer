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
    "kfyRAfx27qfj42f3o5Rp5rT7vM5qskv7yabRHDfCzZc87EPic3cwks6eXqhhrkBBk2w9ndNyimAAEZyuvhRVQfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NJyo4eBeQzKV5HxybfJUSdcf5HQwFozWECtZN2TdadFdBEdiYC8rGYivAxZS5MzdxA3quMiNKphAmPSXcBy8fAa",
  "key1": "3MDEid54G94qQBjHfAvMZPXAAitukAf5HL5KUxNh1Fh3NHmFUhu6gXLYETr7Q6GRi24czHrthCMeADG6YUfHkxAf",
  "key2": "2ivuNjPnhsCx7mWMpmDwkxFmYMn4MzfcFVbmevpsNnbvgFAAX465nQoRYZt9BL8JmSrD9YDAdWMQgE7XWQF8ayr4",
  "key3": "5x3wiibFqBnWRrQuZhRP8efaaFokhmk8sECmKhFapGCTxYTgKGp96XP28XeqjSYHpfynh1tiVL3KBypWpJ99J2E5",
  "key4": "9Jn2vsUCKLt8M1u8kWmndFLYeh8eLGzx2cnkjXAJvGmKTq2QqK3314NBJpm9sKEZqScey48T3NQMvAJ52dAiEr9",
  "key5": "2BxK3dG3wAfFDooJvJ6joJidybNthQBC3U6Vm86VXcRjKGngM9aXJGyUeFovdKEFDZTTN55NciRaVATojJqRkaHa",
  "key6": "2jJEnZ9o2XSSG2v1kC58skrxhdQm34L7AMvie5xJWp95MKJ7dSPAt51AWpa93SEFnXLixRs1T7gFy6QAVMJtj6Yg",
  "key7": "25WiFY51yNXJMvpfC4UuJANNVZbfWQxRkDwBqzAKtb9ey39Ay7QYZkUvMBxczrPY491z5vFyFdz2TA7qjeZgsJjJ",
  "key8": "3hCwvM3spZyb79wNS7wwj4NNLqs49d4mbAVdS9ExM9sHFFCcdFCQ3Wyq1P85gXB7gf4ohg1Mc8e6ZMf3zNs1egcP",
  "key9": "mH43rHqqZexoq9L5hSmjieHBfn2A3UeuywVsvycwcZ6kAjokKhFCWoZooFkUqb3P5Lppjvd4Fcrsm3kwScaFStN",
  "key10": "21asjbdjrxgP711noDDnbFTg4gAgPSzAiXjprnG5QUtFdkhgycx6E3XHtJVk1n4CRHoJuSHTNHWMGCAmLfAxDr4o",
  "key11": "RwKTZXJY5ENn7KH68wyXXfQGLQvwZBCs7gfcDPnUJwASMRcBnZynGJ3B9bgHQbVigBmYMEeHgjeHM9ffNQ7jsYG",
  "key12": "2PPeVnZjNnEB8af4bzpPrkqJN5DrTcSFuAd8SJL6qjmgEieAN4hLpax21SjFh6NGqwKnF9digBtqAaUSSDNind4A",
  "key13": "2q9psfPc6fVig3CkFfHBfmPZvQMj6HMCd8BqebziQeyhycHXHXwchbhDCqZEthZZJy9wBHb8o4owj72LPpQ1xXgF",
  "key14": "25ZUQxw4JTFqrQCLvzqVtfbcjQGxuiNfS7kJbC9dXitJTJ7hRLvCB4sfGz3GbQuzGSemrFsRWnsDYUKKMN3RbMcg",
  "key15": "4hbKxMg8jS199j19F3PFCqzV8tbFpUES46CfVVvivHsGN9urQqjQaDR167M29QhGWQWebe19muCL9B1FWzysSG6Y",
  "key16": "2GbsobvdzTreKewGo9FtKUdqbzJNvG5n7RZL38PRjmVhYxTNuYaDh5DG1Hf3gjrLKWmbTV2M8fvLfUbbWhZhmFYe",
  "key17": "62x3ticeYokFtyYdnwvWe6qe84haSZV1KuWxt1f5tMipspP67dTmw63vk8zia5Z5p9tVKuhP4NetZacVDKrPvFyv",
  "key18": "3TjFZHJHcMnHQauLQhUNTyf2bKLLQ1HqZkqx7LuHdeHcwrqF88t6mS44To1ESZtE5onJ96gbJ56GV4mYwuhiGKvC",
  "key19": "2BMEDqP1B1fyFQbJTHWqAsBYpAYD9wUBPmXrvSB2erJmgM6rDCWggD7BvfEU1tKeM7wZNQBY6jYwyotsCNjbMyue",
  "key20": "vUooZFWoHehj7WAzQFb1ZRgKKeo4KqmCZvVddt8bPdsCCgkeV74QjnHGLJNxAYJSztkFyFmE8PEHkwnZJJQmkHL",
  "key21": "4QAqND25NPfna6vUZ6G7DXDRVjVJa4it5Rfw4ttXQs57sV8emk9TxRTo3H15vaxJqy9ziZe8ZvQBQ4BduY9CvQfi",
  "key22": "5R7hfY9nomek31GaB3tgp1d9aypH4EtUYLPn52dDNyYqSBXarpcNZnqnEU4WXW4GiFgvDdtDJS4N7tRUQWuo76Tw",
  "key23": "7TmH1ehuRgwnUjUqwvKVQeNx5R4KgzwvYf5wbMLpE87XCSmCAF4HQ1nWUp6wZvvRT1s8z4Hf41LQcHGSVjYzoeG",
  "key24": "3qd6gbNS7qfLMi2M8hVLkj8tGcseYsCsKVUvit6bWSHBfNuyxtx3ie8APQCED6aTrtoDZPDye4ATd7Rv6cutiaM7",
  "key25": "4iB6x3BYJ6ZEnMJ4KLddhFvxZAQoscibb162TiaUZQrR2QbPJyhCGvC4YNvtftSFtDBm5mJG3fqSqWp1zePGK2yA",
  "key26": "4378v6f5p4AbxaSbHe7KQMV2ks8P5qtbxtk5z9ZYsQS2cy1QSatJxBAAZzSBrDszb6gefpuwy6CMpf1HnbaLwvRE",
  "key27": "5ie6kx7PKFNsdhNkTBBcUqDpnxXmyQeAzpkMrsZ5TbLGHrmKVYx54YLqixPfJMSQg2ZGc4jWp5Rb7bM7dUjKJocz",
  "key28": "2tRbo1Q8xD8MtQSdueCg3egjMtxmLXbuUF5VR86X5i468CuNmupo71YKsq3kem5C8XKfMfrCzDDAvYFMMLz4WbM5",
  "key29": "4fMg3hZUh2jj1Q6s5cLMASAjZQB3CaXNyQoxven8u1YDtp7pDiu6stuWDtUND9HC6FgN8EKUUw52J2QXGNXi5JwJ",
  "key30": "4FNzW8Lyr3RcJy9wGrZ3xwY4PVWvxVtehCwwuPW5HcrBmqTCyZpFpPjMAMsAm6FQmTnrizvG8a7Yawcv8LqTPrDC",
  "key31": "5VxXkBhHcrgYt97CJasG3eisia3zrufjUHy56Dfcjm5i7NaXKnvexnKZ8jF5z2TLXzkh821mUUvSK13yDeLGUPWV",
  "key32": "f77q6qrwXKh2PUn3Uouud65NGGEhrE9hQLFdd1AXZH52m8GVNZ32Mud4R2M7xs9bJFo4JafimhxmBKmr93bJhyb",
  "key33": "2Q8NFbvNXYaP5SajrJsc3AzA6crJT11hFgyEM5n195EVze18RWPkiyyW7mkS4UWrR69D2KpqqjZTrHFFBzsmfNVa",
  "key34": "36hpRi2k2rwYwKPCGkBiJeUGqU2K9ndPyxeoxFyKejsY381g6w1ti45FwfzTVSW4sy5WVR3DEv9ZZvELPfoz7eUn",
  "key35": "2X2kwqtR6CfCpCiwFP5xvLjZAdkwqa7DAbbJhgpri7Ujv57rSfXUZSSaknfvWicKUnPgfhu51UKXwuEGKcKb6Nzg",
  "key36": "3yibU91VfnevzzMPwKuLwaAqVYfAoLAtncdwHYWsL9dbUGWnbEqAFbcT2TcfMFW5k3k2VsA3FfhWe3DNP1Ue8G87",
  "key37": "5VGQbKU8JhEpPuNpCXVoTaSftCsd72TBZJdyzz1bo5diwTYnkfSS8N9u8ba2bTNB2VGGFMFrGMvtkze6jY81RdLR",
  "key38": "5HnvPQ7JhNQrdV4eL3kan3nzrFNE7jCZWGi9SRyzDXoejEbNdcfUA1a36RuYnrdMSZek6pPPppEEVRdcLN4MxMbL",
  "key39": "4j9WGogyMRD61g2p5eu9HYXbHqMGajEVBWrZmHoM88B5gPrE4utWgiMW6QVtkghZZhkT1z8AdPB2r8RibcqTnqxv",
  "key40": "5epoPdAVJcQR7YDVUCSMqdB4V2ZCjFeAaoknmmHTPEVNfVpmE8mb5fNDCsTkk2uwsRcsB1YSrLUbu7xB9wRpJAC1",
  "key41": "2gWEoGn1ojNPqu9LqWz8Bn3qG3aktxmH7XyYeW6bR2NLLwxsxpNPKsNTjUV4ekcnF5mdAPGeiafmFFo8kmZVq1c",
  "key42": "2a9Tx9aqmqLRf2ksYH6Rxq84Eisq8cfZQ5K6LKZLXYPvrmhApM6pcqa1xJRM5MTVFhfHG47DKB9noWXHgSW7FPY5"
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
