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
    "2GHnP75ncSicKLyPFqjA32Pbz4DsYQZJfw5BNwU25FJGuF6tZqW1tBCzDosJA5S41wDgfWXhyyZ11dHvDhsm5FjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wQpCcAdG9YQoZCutn2oJozXPAe7YNeFob1GuyGn2F8C4XtgXX1PmG7iZP2KHRacs87zZAobptvCAfPwiKSh3iyU",
  "key1": "26fXJKCJWQaJRAuhSdyGf1NZ4Q39EyRGbDzJEVJNgzrFi8J3ftk9hLKnQ59EVuXUYrsgpMbBpj4VRzXb7ctf7V5m",
  "key2": "5vKPvs9xs6srfugroEowPuZ53nRc8RRYqrkeCHhNcRSCmDQdQwaMzALhqs2b2LwsErKKa631jZ7ibRBzhg9mGrfx",
  "key3": "vS6oZhuJkGz5dWezjh7TZpWrMQE7SgNfwiGsGKQ3kp8hKKpLnDuH57yMkqaQZcyeGR7GE7Zo2jEeMrtRqAvvWFe",
  "key4": "3Ftb19RbFrq1mcACAjsmdVqgVa6vDxgrMeqh3cUgL5aT9sS2ZAA6VK2ESTrWNCew53dEbVr9a8QDDCpx64XWWcXn",
  "key5": "LGvTDY1kWkV8MTFbp6qnYJE8rDhmL7UrvLSjxoCG8YB3DqBZR2tghVqbbh6XnCqpJqYYx5F3mVosYLReBgj1HTP",
  "key6": "8cJSiozbPVA61dSVukjm9PG5eTwzcCiDHTZ2G6uotMLRnES7yi38rsYMgxJkq8iuHZs2qDVKdASyFzYX5cwTUpT",
  "key7": "4tribJJ5q46FVqsTU2wsJeGvXg3JeGz1yKZsqGzMFEuXxXpM7FTLCAsV3gAMaatLpzjvmWnyXFpXbwQ8rqTju56Q",
  "key8": "dw7NhCATDVNuWjHvDGgUBWt3MZVmo7cj99muuQUAEHcSPWgmmYQGrrjZrLBJBkJhWXC88jrzww1zsEHjD6dqiXH",
  "key9": "3Us36K4yhXxMojjQzAGk5K6jHBE2nGVQMbtZ4HqfRNT5pV8VBMZWxsXRjuaVjeSrjEdpvAWSM3xX4tEYwTEoZZDg",
  "key10": "2L1s9MCVt1ksCxgpdLZM4TBRjKogR1aJiRQyFrGA6ecZhNXLkyVY57EY2wyJyoPxX5pHb7XUYU1xwU2nLw6neK3M",
  "key11": "KzkVHkxxp3hVNuKM9nTDqWjXKabJJNf97x1sCBYWZChUmXTa5KckzbSGnPrfguHBqHktQVAQ95q7EEM2DDHJtar",
  "key12": "3RkKqcLDNdQHMyEJEAhg7jL7rDLHC7EFiitjzBa4qHmiVchHcbvyeauGyUzwimEJ5Q4iJFoGSyrsdU6a6GePDeRN",
  "key13": "4efvVPNCZoW1s6kFtuh1PU4ih6h9nZw4XqDsrr2PJTryUGgW5CaT9BwcgiuJdpVLD71oPVucoVwuCTzEVr6A8J68",
  "key14": "4aoXwGk7TpAoG5LT29BT1mYHv5R4HsjRHv586EqrFh8gUie96DrtB7WgTzvCwzer3mtdqhEc1PjKwxscNzEDgFFf",
  "key15": "MsBiMQbqRqQFjMKrYxCxHaVQyaQn13QY8aPVY3JdqgUETNz5xG2KmnpvpHLJGCPQEudPcdbVpuQa433FCXMufCA",
  "key16": "pg5XDSYu3nhw3D8ESmq5wTeN3S8ejdpCcww8EFzccEtZvX4ud2GVNB2tvgcnHmtwREaJMt1zHmSnYcTC4NYfTKd",
  "key17": "5RiDEMUoDoAVo7Buo9kKcTCqLbhMCrDLvNdrWCMatHpzg5nR7XZygQWmRBPGtiR53MSTCnwa99d3TeRc1cBjG8Ur",
  "key18": "5PWrdLSYZ4PTq7sgFgxF2Yvaohq4oMdjVLqWgSXqBQpmJLkMeP4eeJn9wbRZnRYWLJU1Wa5bpcXrT6HjndQSGXJF",
  "key19": "52A1jc5gDhYJeWaDZ6h2DmT9MLnyBD9VvCdkScDR1D6JTJ5wvdHdAKm1t7UYZyF96XNwrAp53nSWZFDRn8BKnAkY",
  "key20": "4PbWViE24BRwyoFHB38yt93GHcvjmjjXg75KNi6ig7yh1s1YenZxfhpUHEacJcsPUuoEwFaWQfjPjVjjG6k4vg7i",
  "key21": "Jq29UDzzjP9qDkWbLL5NRjXjk6AFskms5quKBB2zPp9d7srQAvHcNHsscqp2U3NM36acVDg9qRCghW5geDT1JV2",
  "key22": "3M6eCscUfKastkXaWQnUZLcMWXPpMaQWgrvZigz5ZaRyYCvT3T8QhsBhZ2xsqh4NF5uGvUjyUoK4E2rJqVbRDfXW",
  "key23": "5gY62XDUyKJoYcbhVnbKFNfSz2AHxiApsSGfaBVgB9DxhMXw6m3NQEGT6Mfqs6TmnxfpyMUhASKtobSrcao3iuun",
  "key24": "5RvuDFVr23kRHXzH84h2QAmhvsfq7AHbcGEJKSStPoGU2NaLWSo8KKYezw7sLsdk6T2kFbnD7cke94cLd1t31UMB",
  "key25": "4pfpqEkriG7D9qD4Fd5vAeom2BXrN9thD9e5y6TwaJhyS3D4S2Sboda1XYYETaLsBb9Sgd6gqDeRUR9A7MedjScD",
  "key26": "z7ocQj1cdZgbVQb8wZ4D6N96bG5aTQrL5x2Hkeh7CGa3cf17LyZnG5kRUS9cncMoUdCCWzPauogAgdQPZmzdFGC",
  "key27": "5jdeWHpjxGq1C4jWvmo9t77hWy19qD3aX4myKb6osZxnHHjNav81c8uck42NV3Ae6s5bXhSf4EJ8RAGff5NdBLm2",
  "key28": "2cDH6v1Ws9xd6aYQuFRd1vUx4cHBrZ4h4T1pTLNqRBvjV5rL9PMwZbEhga5tWTi18fG3dGa5Yfz2bph9uXAU31vU",
  "key29": "5mv63bWD8gEazUKu8ZWZQDpn2JEWTFLBjv7sZKg39LGWS4UerBWU8cGDH37tKELyNvFjyRsyTRF8KqTQPsG96PEL",
  "key30": "28SdiJowB2QqL29tMn8r6TXJ1uC5epmryr3BHt1u4ZznnYap1hJZhbXAXPo2vv9StXdiy1xbwFyJPomEVLte3RYu",
  "key31": "5U6Rojygo6cBCBMVxAmTS8w5Bvw8WGEinJ2PpWdD5vUTA52xK8pjfZ1KaejuygGo3YMYn2VpcyGs56DegM8Jqzy2",
  "key32": "4mfXx2Nr7LzqTfJJqm1EXRVya5p3rBD4cF5UoCW1CK1Hn5SFbpu4jF7iNYQxTcRMK82WbfZVGC8MRtKypSXxnmBG",
  "key33": "5uPo4Pbi2tyQBLeitRpHSyZr3sCpV4H7DetgRhohsx9cHvypTh7jBDokDUrrfAgum6kLxkJdcFz9CurT6suzEKFN"
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
