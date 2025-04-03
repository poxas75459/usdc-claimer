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
    "2S87WcQ4BsYhDHqijG2135ZD9zPXiVXtVNSPtN3MVJqJcqo6vKnihR5MHpkKTQQ2od9jULTPZKTbdJ2Ns1RDeczA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asWq8pzr8b6uLGifFbsEkGxmSGokyZxh1Y4LbE9HKVsneoQ3iX6u7R1RrQAr1ccCnSURMehxfYDaff4URyhEpt8",
  "key1": "656kPM97qw5LCdf9Q7qRrN9DqMxeS28QLmwviXYZ4iAu2N4JpmWxzGVXdjC6bv2dDepba6Z7SqovLcYGeGBS7dgU",
  "key2": "2cnRh3qv5bNP9TeboH4qxSwPTrQstsrvSnaxz72oyNrAh321Xb6d7NvKzoXpWJyKmqXaf9uBRaJD8NKJyVnfvYCM",
  "key3": "4qghbUuHGrqgdKDdegW1e3TtW3LYa5HkyCAKUn1dJg8g4RpSRUYcPsXAEeBPPD91jNnUqdKqBo8LQWgc45EZdTs4",
  "key4": "26JihdFNTzJeEaeiPK56t4RFSAMuiz3uij7vy86XYAhcVTpitCHozDA3q5goky6cTmhRXCrZaArRHJBoPiqbZwgP",
  "key5": "2V9ryaCCe5fwtUXbns1syCga7yTseaJzRmuohFh7QTD9iQ3cJ7fMwz5XohfEV5Tq9PkWV7SKHg5yniocoKJntsSi",
  "key6": "4MXTVJPCBWn6gLNy6rQ7J46zWBAm8P52o48iuB7DMWghBXMEV2uoCsxksu2B3yvRHRxLtSWxwXuBL17oLfDpR8K6",
  "key7": "5KoTBaSwWRQgD1nfJTjgs97Ad5ZgBNkEy2BwcsmRgtWS6QiT7QdZPaSJJauP7v9dCToqscxEc8nEqeR6Y8LzeXbu",
  "key8": "39ZEz15qA1gMh8zK8nHYDcVueMbQCXehCAP3sEkjNqHhiP6qNJMDF26J3R9rzVUg65uNRCL8e6mFoYi63qH7aeVC",
  "key9": "3LbeduNczpDGSfDVUuhhAVmCqCk6WS2XJYCV88Vn4eeVdhUr4ocfrf6HtoAmzEeJz43StD8XCjRnmnDgBbqpdysC",
  "key10": "3vwSE8UxFcsEqYZ1aMgCQ5t7XMPiU9ekzBDZUwFdG7vpUwiK8fH4zcFd18WT313LvfL8XGeTsDLxbqRTFGzxqVL8",
  "key11": "3a8gTQwdLPZrM6sHFKh8UzigqgnBBNNNxqq9g4iXs3yan3SkRPRnL9qKFxVgbAdtDnJix4rAksDoVmiqLrfKW6V9",
  "key12": "2awumzUf4XNibYh51RdQjZfbmdGtod7WaqVEsQDb2NWgD38UVS1GAjrAbUU7tA9h6voDNWTtog7tPJzzzNTEsfYZ",
  "key13": "VkVZAh4TDxhdAQNZdZEBqTn3zb3i2MPDVpFGSajJSsHdp2JCebQiFutMRtqSY3zJW8tDEQsNpSGjiru1HPYLSLS",
  "key14": "3wzBHVowhQJRHRTwGw4MgYe1TWyNBBcuiU3kx3jTMfJ4aixv7ctQJYmUEVfUQRDXFeJqXNMuywdhkAhnxensjdcY",
  "key15": "3zD6hnTJ3MQ4ypLK3sDu6Cho51Ci4xF5hpxi8JE5PLPPWRftLirWGMpB99W6JNWfWJYiqv9RZYG55G5q7qGipr6t",
  "key16": "5ZUx99eJjmpau71aq9fe3DNVAdHzknB7nS8o5XBZycLU8k2KUBMgBYC6LWocGLBuKfVZQjr12YnV7MEBj43PUP83",
  "key17": "AfEnPC57DrrSeSFsg1rEvAx4PbAqXm3rmM39tjQKscJYGnknnF9JyB1eZPkxWbXZXR1CvFukG5CBU6vYpwfe5zj",
  "key18": "5Y1qRceUptUjcHuJTcXg6wrLrGKfJJVawEKWSWki7jMRZbXX5Tyryro1yCTUYZTWqUUQvAB5UeUQviJEQwpqrDYM",
  "key19": "5wU479S3KQEeYzq2hr6knKimZUShT3Zehn3WdWLtVJpkuUQgZ6qpYFugT9GYpoMpvU91b7nnJ97zLTd2ejBRjQUU",
  "key20": "2L4bEvAeoWSmUZdAdM5VLQoJ1ZBCmo9m38YFs5w8SFvra7A8GgGX9Y1LEujDaexJ45JdbkHvQwbekN9j4JSwkPT3",
  "key21": "2NgKo1yyNU43x4ZRB6eRcnFjTfU3gfFFUzzCoFCEJHJ8ox1ToYGRoG29dDFQUZh6z3mX8MXt8A6PFv9BbSTvpmS1",
  "key22": "4BTgyZ7L8hHMYWJsvU5SZ37DiwoyLqxp7zRy3pG4H8urDSk6RBdiuJUQr2pZHmhTpzj2TjquHxGjNU2537iQ1uBM",
  "key23": "WG7LqYqW14vHu3SAa8GGwhD8cfFxQpTJTD7aS7iaJZvavCxz8q6ajjtNufyPDuDBeouFYEkNGfgLVnZkaL6FzL3",
  "key24": "2Zhthct5dHjXnm66XSYchEz4YB49n8CJ2LQ9YNafX6cCofHnjK1jzW81h8qU9PdoVr7NJZ8io3mANHfS77oRA7HS",
  "key25": "yN7tD5WCfrNGndz1yddvzPqojVVWjCDRacLaq1TfSxp9MDEsp76Hk6ftn1CttRCuSkd2m78qqafS1uB3U4s6MNN",
  "key26": "2d5c6rDHHYvP9c5xCjRCeaT27Ng8NCCdtzJ6LoE6TJBgafg5YayyYrUDwNkm3vAXoGAE4Y3eBTFderLLM5j7bL3w",
  "key27": "34jR3af9dLr8nhtaGrswPBZmEyjDuGE6TuihTixGdumwog4Daaq5ag6Jup2zSgqxCHqkfpQEd3gbw24VonR5ZNND",
  "key28": "5YEPdq73nxgkYF2Lp13pMREA8L4uEXEyQ3aJBgmmzUTHSAUq3UJE1PN5u3E6zD17SBXL8goR7jsEGy6NkgZHdBLq",
  "key29": "4BskPv7sLKb7Lhf2jSGLWA7xAsvPupissPUD9JwsieqxKXAAz7y3nYcxeTE4mNtHXrjMeXUw3aziUPJHgejQqrAm",
  "key30": "3sZiMYk9fZqECoing1u9LweULTbiPf2Rh6qF6gScigp7J8jgUUbYS886aryzDZKgLwvrsbYKwCSjpj1TwtntaQ8s",
  "key31": "4uVZZpt94hQ54kwQ5V36gYtFuWEv1b2cZcAdTFFTpnvSGUQTcq3Svo2CYZMYH4UY3C6fxT8FSxjCCj1X62DMfFPV",
  "key32": "2mrD9S8CWy4k7KiSAaTEspHV6BRtjq8esZSAL45oTaG7SzWdws1VdMQzkdSgmhRXTLi6b4efPZ8D4sApGz63aHQh",
  "key33": "5QnPVYigjZFkAQSUYsVu6h5ZpWGy5nf7uHWvTncsUun5gSXb9wo88AnZn8F8AogBQZBhMHRTMM9q6MaSrBvUPs2v",
  "key34": "66bz6qwnTikaaRdBELuwuYWsrMdccknpeuJUkjmeHv5jS5wn6A47FY8QkkAqWQ7ZN1EJcbF5j5RfjrAeKarTTSfy",
  "key35": "3GXDGscYiDJLEbmi5ohoH3TbyyzJCh2jmzJDEmGgPRmCob2CwbMn6gvqyrHdyS5PQBoUzRNJmAdoGbPFKZxm2Lq6",
  "key36": "PX2EmLE5e2fpNMTSCxtraVP5QW3Yx8ZJVStrnJc6zqCTxn8KGWtHyM3sjruYRo8oBzU9oDib6UQSYRmL28XQXuk"
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
