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
    "4wSDtHNBmUc6PqHe1y1uqDu56BuQDJmRJAzaTorZyRAoZTqHSF1TQ7TnHXMddxn3VqKmGSW2eCqYrDLPgirQGbmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kur9PVGmbDpP31rMdqB6sHRHzW7SKPFP3neWrpefQNXKagQcayfrpyFKZYGaDapqWpoKaNNbJKwN9EVoPEunQjs",
  "key1": "2kZivmL9rC5W4xGJFMByg1o7KPT55QXedFogz8fjtzDWXJovPnChRstsbCL5rWP35ns4oNEXVWCD1RztSyYHY1B5",
  "key2": "2BC3HDcS64rWjnXLQGsfkox4Naqy4wU2cj1BUEvGwf1cPSffeBrt8b8hbFxXW4hmwjhqM2oaxeAQFM2epKtjXz4d",
  "key3": "3VwaFkrgidSQ7VzGLXP6GyBFB24PihtSsGE4hwr3qQHnkVjvnLxx1LfMNQn48eyDGJu5BWLdsx7zqJpbzhRdYJ7p",
  "key4": "4EGnnNXH2jWdvbQFHnGJRPF4Ar12UWb9ryRcXt8QVEX3LhXt8sTazbxXGw7wm7wQhj1XnpFHsejvyJRCBMNK9Lqa",
  "key5": "4SziSSabTDjS5h9wRsBqzyXnB36j289CUNiwx7MFXtjvfSfUmNM9dUaVUPvxuv7wvzUxVfR73ahKpdnSkjZbVSz7",
  "key6": "2LYxVeSA3ydw8jFQzDwHSwd6YAnTzU2qLewULF7e2pT9SzRv7dyxnBVUCsyhXyQsLHY6Fc6hXYJDoEq67dBeQKUq",
  "key7": "3jX1VHMiJhLVadJJsm1NaphtC3su2vC8GTJp2k58cTpRJ7auYQ2UdssYFXNHYQ42FshpaYXnCTdq18MsG45R8osU",
  "key8": "3xA85brAMncdTSwir8DHBmeEpPjEkQxWr9PRx7oQ6b2ZSd6DCTcqa869cLzNn3kuEqb5hpF4Bu57Mc6w3bnkaUfG",
  "key9": "eCRLat2zKVKDEvtygvVECFEaqs6zrK8or8bSLPZPnHgAoihZgn7J3vDo3aVJZTXkgPXe7379QPFvL8a2EEkcuJY",
  "key10": "5RWsrtPt46kQhmHtoqzVW6ACWERhETSowUc6gsAqdWikKum2VLSnxU99oTT7VJGmqD8u1hEVQEzrvLwbvaNSWtfc",
  "key11": "4ap65utN2JSKaeszdMwA4Q29UaVFQASXg6K31P4afhFY3aSBCgGz1M7Jeont5QaERw45twJPRGUAK2KtY8SaCaco",
  "key12": "4qC5nGpAHWusSdbmQq4RtP28rWgDYHzQmG4EPEDb7jo3anfL6MTf3KMmHRHpGHbFFddUhoBq4UBbSwzUFwfezHyB",
  "key13": "8eJ6o35GuJG43MSEmrBYvtZUoD8jjhtmEzUgao5aSy218S1DcHQCDe8oddwVYXPPfenmen6ryqsMsWwvMa1xpCw",
  "key14": "5MwB7s311pMEaVt5bqeph5jVEZ1Am4DuzZxT4mRWKDe6tnfGHNc5wrXeYeGPK8thHgeQeNNL8srYUvy7PW4jWBAw",
  "key15": "5f6VRsP8AxEYNmSrjMG7sX2n4AM4vKBb3s9aQbJDMXAe9GpLHj4jyQFKa9nG6JKR7K5kLaBWFeptDy3pKBYz3Cyh",
  "key16": "5wr647FMyZyvVQxUKmMUVUrgKrzSLehj6EHQD23jRC1rskF1CeCo2SFom7CkrqjPCEkReiftZX21vCJCiGz7UYY5",
  "key17": "65YSJHBMpQQsbVSikX22ciuy2djQmvonp5P4VnGezA81Y3BNi6FH7TAPbJtcbUP5WTrEFK62SzmqLvv2nbjZQE6G",
  "key18": "2wcAUzSr2Qw6HxYGw3mGpcK9r3eWS3SdwAXTS5zFvNUt9212PDte9x3m1c8vCZtdEt4kA25bqj3hFiFSH53BQYtW",
  "key19": "3WiChLBXdvYg2oS1ErdEz7i3mWhW1wXqWeZ6Vs5MGSfbYB8sjZPSHVoq7UhP3EG1JQp9MGdKxUzi5cMUJ4vNUk43",
  "key20": "53ymnZGXEYGvtoezAVm1Z4AFdDU84d9CJZY9E8NvjAUw5VAfGtHuYvyb7r5qQu8q8eC7pnDVGiqRCWqHLLHB9Z1H",
  "key21": "42n5hFWkjLrr7NzLpfPbieS9seCeRrQHMbCkvL9bB5btkUHnr1c1yYgAWZkzhzrMhHuLfmPfWUEEdNSd3gueza4U",
  "key22": "5GHtWdKJKkRPYVSU7LGSJLWoE2ZfTdLgtn76pYPJrWnY8bYGCytbypM29qj9Vn9Sxm5aP2BuBRtervJN532G6Xw9",
  "key23": "Xhi2cdtSE8m1F6p19EmccRmTHERguwG41kZQ6LTHPsYEjaJ2hVPuSU2ySbC6qRzTijAVVMLgCsto83z6HWYPapC",
  "key24": "43EcAUMphvn8wZG6T5y4FSu1zhLSgc4ad1EhUJ8w3hBPJTQnW2unw8KAarukq1wLQgRaN6EPaEs5azGRmhWWXipk",
  "key25": "2fYWXs9X6GzmmBdTj6QBfbV6weBJ3kmkPCxffhLMf4cWD5MscbwvHZ8ajggTpEZN6JDPwuxoZ7BUTVCaYcDH1YRm",
  "key26": "4UonKXMp6bYe9VuiXivkrDSnt2xc6cCc6FEK9ACYLuPewLnhazvsZLb3E3Nk6C5uu2kGe959S2B5EpWgnSy7w3Kg"
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
