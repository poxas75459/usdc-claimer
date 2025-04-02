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
    "59DrtTohSvJRdGh5jyNVhzrvBLYvoJtNqiWgQQGBi9ERheYyWdNeieaWjjN68XKniHQ8EEqTVyz6P3DMwSBFMuLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ni9mbbeRVcghLs1VbdKrEe7bi7phHiQpXBHV7WWnsGxjSyLUqSUJ4AD9yVF2atypVUmN2yRhTCiKdfdtSZMcod9",
  "key1": "5Zv5BFf1czeGwc9jFScc9cSvi1sbni2Mwq1tdAhPTzM9D2gibxiS7mjP2YsaH52tA6enyzgs76UrZPpBHu3VHMPs",
  "key2": "2w19yMm1nhJXJ7X2z4aPh4anWYwPi8t34X2TqanRpQs9rvcsXZDpSacVq4qCv56jMyudg7WqQVXVuZxt8PMYGnHn",
  "key3": "4xFGKpXeZqXJJptDZytKCAHyCDMhtVZj9VtB1KZKqtiLZBzfcFk5rkdNjGmXdEax4fuMkzbRL7Z9vSMmWvn2Skmq",
  "key4": "3G8fewLYqLSfbkWmMy16kTTrPoxv4jhvgq5ctvg6Au3LX5QaGZgQn2CEwmgf1gDTFzADh3mF84P66cBiXF1g1BZJ",
  "key5": "45tcKfgJfe97b1aKacp6k4NweNDWai8CS9YFzWJLnbXaAGcWnGKatLkAduKW3rogHdUxUxvHiaMqJgNmx4ojBTbW",
  "key6": "5xLZyfoDigbvUod3BBrftZEBF7S4bQf8GsE5xtQH4yUGBm1v7Nsm6caKhxqCixvZQ9eL5aitHnYarqqTawud1xqX",
  "key7": "4HW6DzSQjt85TELqqKWVoZV2XYnijNm96BTqmxzCJxuoAvyqQW7yTyKJZ3uqFhbuNCwPQkP2gVVuedEdMwmnmyoS",
  "key8": "2X1xadnB4Ex8E2UeW9oCehwjsehV8iAwv1RUc3SsbSMZyiEt7MEeicfw4BH99avxwckAyjDPzWoQFx2gJnLbwzYF",
  "key9": "23kANLGwAWFbBgXGz3378miaPt1cFGPEXqCQFwBTwpiPWRV6ywu9M5K6FW4HVehNQbNz3BMPsJ3NGyPaR78rXADm",
  "key10": "3ALLW42jp4W96H2cw5tb1TGkNCBB7cw6d2YzEWtzkSgQmgguBmn5ypwhR6ddS7mS4E5j1ihWayaVdbBX6shck4LY",
  "key11": "3Ds4mBsUhxT4f8ZBkXKWfWaGt1MLTqxGPjbebsz6ttbJd8V1AeRVA2dKa2iHqEG58FBLfBkh2YX57QbWV5FpJx6Y",
  "key12": "2UuZLLZZew72W65DLZoQK54qJZVMkhSFPfqE1iAtoXPyTjrwQCmQx9b6Drrb6ZLcRT5fLq2iH2jZatK7dSz2rqei",
  "key13": "5H46ALWxMAAmRsViuhSWv5n3174HCyJ5StyRDZBiG5kJtnMdVEg7SbscQFD89dCRiLdLgv58LswXyx4Y5wqpV1sd",
  "key14": "28uQfkKD2Dsh9U1Rzhj3xvxCoJrBhxxMMRpXcBhCueX1z5SeCbLgV5vKp19uiMnSpeo6NFPURdt6uizfRkocgGfS",
  "key15": "eUc9czGCftpzBoMaZfYgrwRg2FtqUtjUCMbeFovVgwXeSkDZJbxqDMaP6iXjYirt6xvYhp8y4TSeJDFmLYjGXUh",
  "key16": "jpE9MM3yvKbYDMUDBY58hMRwPCz3KGm8mkXYuvXWKNbQBbHkCFWzybw2ghb827Ei61w2LJwxwJAc5M399qioVCQ",
  "key17": "32JZ19qfPVvebNJFtzDQDd3KmBXejNdRRtJLvVxdXVNzrGN4ziNxj26tre1zcsBxTpgqi3eavm6Wq8YZEpHrLa1V",
  "key18": "ncpgopmEwrcb22gTVxy8c4HFSYGC2r2nT2xPtvgwzqoD3D2odGf2Qar7EPLYRFd56Ef2dJV4aMyBCKuRy6HVPwD",
  "key19": "3dYm55SuYgTuHDtVSupPx2FbY2X9bxG6bWs2NHA2fXCYgh637Lf9gvjoxPJeJVRXxBbZZkQTsE4JzZYdrvo3eyUV",
  "key20": "4GdEwSAEwzHy65sPxHwNWj1s3TNGL8NJ9CjRLM1FqNCmrMBGLghTtEj3NNn2rwrq1wRGorPPGZk7mejW8peJ8yJz",
  "key21": "63wG8YuoPZjSVh6L7nXV7BWAVDJurxMpTMVBP2GbVsZWEZioKdP7dxt8KvRQDWFdvgFCPH7DN5EdonYwH9Z9bzkf",
  "key22": "2GTSXf26hgQmD1SwZ6rZcXWUduhJFR53WVeTbpevPzeGhKPML5ZFBspB7dvNjPjPYkmfd8kDK3kdWfRefFXhk7AF",
  "key23": "2BTfGsGcpQL7b1hFBTm8ppXnCN9ki64hcQ448raKkRhmTau3TnsqSZQrMECPnGHs5LpRu4jrAU2cn4VkY48gGTzt",
  "key24": "icMeNS7Kmbnoh1iZREotb6ZxnZT9B7pERXxqRq6wykPVC5uwegJppFZQyt4rR38ArdC7kidrwACK6TBiZN8NsfZ",
  "key25": "4tqv58BPwWWDG76oSCt8YaRJFGwUzmF7Y4sGpe6JPgXVMBKPjUH7pUAskrBYgR4rstZ231DeVtRVV4wJpckkr8p5",
  "key26": "2tnS3WKXRkytmyx8XKoD8zc6iZQnp8CZtT9SR7WVbgik3HxsHLeeiXw6HPLe5Pmft3SVmBSovAbuUntBYNUCk5Up",
  "key27": "4xBuVm58Vn9ByiMS2jMPdXQ1N6pxorKv3pv1FxdLzPRH5DZQ6sqyQTLq4q8URmnQq2NTnzggHvbKtzg1tocip2hu",
  "key28": "5LLMs1ckUwc3TMbrdVZh7d4A2oWzzbrbabjZFMuuvmnZkaFLUL4B4i4FkFgNv5k6nvXSUkDGzci9JK3tFzzjuzb7",
  "key29": "2oGae1VFhWR5cAqc5hVu2yPX4NuhUqPzS7WU7zc8opGhe6iBzUJPPvvCqWQGctAVH39x1fL5JggdMYsnG5JFFsaA",
  "key30": "bZMe6ViVMWW4Dac2AubSPf2byZwXdLKSgXqpa4qPDpwcU1d8QSoaHvFvzdruuF2c6UvB7EFBUKjrYPaYCkRCs7P",
  "key31": "2uG7hknJtUyoyD99oRHiL3qg6Pj6x1V7TS9jSMpADRW3fcMJwKt6WLpDVPThRtdML3QRDB46Zy2Cjc2Zo8ofgDv7",
  "key32": "aRd8eksSaQzGftRNcUiTD8mYfyDnh8ymn7Dd7q7Wx2i1QhmQehTzcWka2u5F6d4MioSocj7XCmkiqQ7kaBGvGrV",
  "key33": "5qsxQoxTLQCCZeNab6eQAXgMZ5YTGSfQsbTYrD1xQbQr2RYEYCpYx6Pw7HqLh9aqizFnNVH7LvMsBGTY4oKTja8f"
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
