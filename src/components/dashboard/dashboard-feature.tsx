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
    "29NHGNZKQbfY6JjnMgtEtK1epsC1N5EQhqs4W4UPsucb3Y24UT8rJ7QkmACVFVepRa8C1j9JxQm3c7Wh1BTH61uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34e7c5QmWomvfwuP86E66AoDh8WoqgsNLzFp3kHmy71TiJXRDiNNzjj22RyCUFLcmaDWANMUiquKz47vdiknzewx",
  "key1": "2iXKkm5ehin8xrjqwhU1paYNmN26YHm18BezsAVwzqnvPsRgNrykWPLXVqLkAjzf1b35dYuAjKCprEgsbTGav3AH",
  "key2": "zrjv7ykCLskqv44jMJthhS2WRbocS9cmeP1VYQywjwDy2njLhK1TQgt12e5AiJxgssWk8WJyBh5Ny4KvqCHhoqq",
  "key3": "MSnkPYNBLWtnjoGU9tmwS7LWwNtxHCoXvrxawcx7R8Fa5PPwWNcYQNXZwJjdrvrDNqo9dBTWDTajtVehv6aoJoh",
  "key4": "2CtNSA6ULihiEQa3H9ZX2a8G23etGjhShr28drR8wMCDPYfSKbcACrLRzhg69BWPfdRLAPcG7bfDv8bQrVaEHjh",
  "key5": "2iV33fVGxdxsi3a6ZYPpoG2PhcJn9Ed2eaxSDpuWZkdiVQfR8dMEcUSt2reo6yaLCbPzAaDY1DCaJqkEEcFHXAQ5",
  "key6": "2NvMJf5AUMo7MvEPRYg2SsTsHuH1XtZLssa2WxAeTvfbdW4Q4Ws7RVyYNqT42cBzHJb4kqnncbxFXZKcwKApjszt",
  "key7": "2HaDykRQZ8XFMmj1LNtwmWTP7MkigKVw4WXAHASsg4n28o9ALr8iCj5DT9jHpTAqNdnKBYHGvmxJESYRE49e1Tr9",
  "key8": "5NSLuJbVrQGKtAewJbmggDnhLtd8nMyXEeqJf6Qc4Aq5HLussxweG7jXCq5Zkrebqtcvub6YZBhwHc1t2ffGTE49",
  "key9": "4rGPV6n7iU49E5C2evHnq1CQ4xTMpD9kwC5tNx4SZtzRgXjvhavL1DyoS96mSezti7vxJeBnR5YVBUi77GsYrhHh",
  "key10": "2uGLDiZ8Ur7bFTcDoSDXvSR5hPwhnRh3JpbdeE5YYtkniKjkXaSdD9viSQ2dBBgCACT87yJCnA8nh3x1rQT5utxq",
  "key11": "31e69jfC4q5dhpRuZCZeNRknud2m3kGkVhJoPWCNkRWSXy9j9mSkBzrPJ6XZ5T4jLKKG5ch16ZuZnYz5U412V5kT",
  "key12": "4ExUpenmgXKiXMPjYFqF7EgSn8ba7Bj1rFiKUoD33vx22WVwEwUbGwbVNi5XZVM4VoS7sVhCY6qfBGTZ5QLXPv1W",
  "key13": "5pph9TY2NLkNpci4taZnahfddUQYgz6gAj6MmYoGBPyyB7XcVBPSmawsDLTCZHZwyrcquJmdQWQEnhmSudTGkFru",
  "key14": "256SYA2j8no2D27Xr9m7iQ3pZM6xEGQWMgNCy9bvn2Ma9vXjqMCWW3r9nUUQeD2P4vrrMiEf9r3o2MXtXZxaMH7F",
  "key15": "4kzfJYbhxM6Y7owZSa8FmTQ8fs747rVevERKKgnC7Zf87Fo9UCrs1dUAvh9NdfyH2yST9fnP7dDdJvG3TskqnJhV",
  "key16": "588LE5qqWn8zaNuWHK7jAXJDjw3bpSWCjJLBR4ckwEnL7KhAMbBZgZfc3VxdCrBxEEe222472jKehLzoNu4qmHfi",
  "key17": "65jTtVKzoqBkmfC5i2D9tNim3e3T1tHeDEc6YEfjwybzxpDXgNXmavLvr8MFrKRKoZfGf99YLRij437e7d4iSwFa",
  "key18": "2PYrwZAu4v6gQseUfaZd3WKBNcSScXW1Jf2kFcLgdkpjym2hWG7gdGqDafYxaXdwKcVSZXBjhjJWuAiS88txrmA1",
  "key19": "iCcbExzd9x8uAmnDXAnuZ9RbjTs5t7t9LkT97RNHBrSjBQVarKCiwWDeWKDSRfNVK1uaQ9KAKxYEeR7TLPqSXCa",
  "key20": "5n1ULDx6Qd3PfCK7cDeJNG5hoLNhJM2JMcWhxoeYGVeygUyM8bEDJkfgs4XbXkM9uUKugsfiPukGLEykRWu2HL45",
  "key21": "39uivaYKYJLZCCr25m6JGVVjUhbkSVCDEzkDwqDkNv963qs2vuEVmU1ANYwPhbkDU594CPLdWdHdqqWbdVk5Hp81",
  "key22": "96wSuDHBRzLDrNBmBDbEQuCj9WZFcnpaWCU1SWkC8L7Eie2iH5MdXhwrBEy8CvEJNATwZxEoHuie3Dyvt2JosNS",
  "key23": "3JzXjoxBAetccLBg2C4zN2BxD7d4a4Lvaa5LPDKZMWV54WpStGZVDyRLBPVpmeRDWvmYvP2KAzQE96sbbWzVH8Xn",
  "key24": "37kbLtuG2JBSFabzHjixdroiBCa5gtgyiNLEQBF3AeeXg3cx6DP4aMAyiogbscK2MtcCRFvs6VA298itCFSVSetP",
  "key25": "3pWJuKiJrBMbZMMQQptkGa2FctEkHQ2d2zkqq7cSyLgkK7w8jVZo7KMFjr46vUbAmeMoFNc6bSsztobMGKJtdvvf",
  "key26": "31hcsV1e7PEQV1qCNntjMfnLE9BAg4iWRoPt6ahrDxbqTgU4A7pqs132ZiQB48wPq71GSCYuka3VYcTirC8ToyHT",
  "key27": "U6EKMyBuXDhoXq1cnfVMKBMkDfGt6fwGKQxWwXnEReP2fEAahXEeqRrqhiSSa5LDxXgJwiMYD9wPHw3GkY3Vcp4",
  "key28": "29uppZKRNmwvdpfzaiUh8LRMbkCFggjwVgY6oiXzd7sNu1NUprKGfZ5SMH2xoBqLYXSKAnSYY5VGLNQdwrFjwdM5",
  "key29": "JpFzjhFcoifJHYiDjpYLwYq4SKfDkmX7S5dovTJH1UFfNhkUPUVn1TgqwhLMktQAfAK5AEKHzntniuVyiDkbhJe",
  "key30": "5vNxUvbmRQSzdAXJT6x57eGcZksA4FenmQPDAD4RTCX2hFT3EEBMRNjyeSYHsB5HnFpLQwnWhCuV7SxgWVdDTpqK",
  "key31": "4JVumT6xgheXbqsHMiiD4fbkyBvYSvZvrZkM9WKYqDp7pTtrwG3it8Dcj4NaTctnFz2ySPVovy35f34mN8zMsbFt",
  "key32": "4yhEzwQvbasCDPiP8Uds6yPsbz9AYp9dLoqerVpTVvi7bkMnKkHkzJhDzxgjVUrp1bjCy1UQEsdfHz8U1BjeNHzh",
  "key33": "5piBjiREujSVgv87w8TFehZYeA1aZoPNL6adDECrxPPJPBrTcF8Qw9JVSSz98F8dYGNgUeFEdXfnfwS3caBEThWu",
  "key34": "2HfN57Lyh5FfcjceEhv2cUq2o35tRB9iJfbmy29EYJxeeMSQ48vPwdrqcBsVwWmpyBWAqp62iwyCwHbaxmVGxryv",
  "key35": "5b35vwZAWSZuE2j43pGMamBzrcPYKMhj2wcHiohcseRJUVtybWoNNZv25NQJhPsp3nk2zvwkqjiD8VDT5tM3MeJB",
  "key36": "3nRGLyBMJMJj6JVXDbZ6XUvD2pbTFwnRauKYrju1ZmNH9eLGBNK5JjpgtM983mLwBU4Yt1GGK3RwVjaipR2t9kuK",
  "key37": "yXegFhiEYF79mY1F5wrbZtH6j3AXnprKeojNdcrm7LWyP6PkbZd1UbrP5mUVzN6sBNau3cP7hVyZ4SUtHiWFdGz",
  "key38": "5mQrYL7Je8MaEb4o4PEuLUoe4tHHTo7jPPrW9eEZ98vXnchiBoGpZ8iM3Y9iuGLWikJL6dCMqo6bcn3juuZnsEax",
  "key39": "4No9TNwG8JzGJnbs3U9RyJEc1XUYDsUNLZxfb8NjjacUWrioWkBxtr9ZPaRu9Eis9x4D4MQKY5DrUDHWr75eBrfM",
  "key40": "3MMvvNXr3N5ZTM8BfTwsft7XFy3V4P3BV3uuxDgyg5npJ2nmcnQb84eXitsBJiJGqLjxnuDYM1eUHx7FqCUHV5yj",
  "key41": "5fdweQPGStVdL5ZRrtmHsnBW8tcVBRaWFxEP8z3WQU5UbStWL4ZxWo38qoFXWUtv6n5fE7VPbHsJMx9SPhJ4Bqx5",
  "key42": "3PJCjogkiJjQjSdB88DJRhNiSo6Drf1mj65ATqUgjSMuuWwVkzGZN1YycqpM87pk2rUjayBk4g2bsdQ6HngimFFK"
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
