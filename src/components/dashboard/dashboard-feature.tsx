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
    "3SVes7rTgXzpT6Wqacm8zTVw18tY2LPD69RrNXdpAELAdvkqGWrGoD2eUuaD6A3JnfNVufwknU115ugfyKXFrrSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yEKREBSwG5mUrnwonyBcFVeKheU79dpNvGZK5DF39aSXLAKVR7VcfDtotB2rTcWNWfGwNL1SHmasAegKzhLqz1q",
  "key1": "2GbFuP5TdqJpPEar8L49ErJZFR8UtEDtAT7Q7netmP7zDPF3Au8WFVJStWtnRw6KKv76tcVNb4BcPLdFAcfQMxzb",
  "key2": "3QehriQHB91N8REwGhG2D5coxtP34wRRjPkKXgCtJzymLBQKnEv4RZgkGNWPAeEArDgy6eGR1uEfKMh6HouYkoTz",
  "key3": "3XUJhN1GUqeJhsE4TRwrURY3iMvrKmGFkDuCcfRGuB4X2qDGtgXYkcoL2XJV4AKfY5MfvxSHZ4QhmbJwqnBCpktg",
  "key4": "oC4ysvGqygR3yADoT2wKyPC6AkhBYxYtQZubmo4dV4Vv5Se9C764eV7oYdKcJbXK6uoEBpoHbxYJgTTVMqfZPEn",
  "key5": "2QJ44bnrGqKSnD4zJmpQTshpfokumnDRyZfJxfGEGW9pagRLoH3SCYRpjAdibEiLafJT5bBsACACRHG9MFGrNWrm",
  "key6": "5ST89eiW42KJx3yYhUB6DxhcBYoRKyhmga5mUjtARwN5EjPvvoYthPymb1PrVJ4iNbbvQgkUFgixhXrBAdyGjMKt",
  "key7": "3Emb34MAj8VjMayuKHJ87fqNzXgPtwBBEDycjEX2gC69KtopEvNSeXiXow9TL7jo6KteLGieUaPNPtDV4NhwbH3B",
  "key8": "2Awv44bTTEGbHKucTzE2pLXe96wBuJNLGDCHAjKNvzEZDShXYDKtKu2scWvf6zAFpkVmURMaF11oCqyo94vCbtnE",
  "key9": "2KaUFaFJivZb7HSUkhWnduAZ5SxZ6KLtqLzkc3uRqsaQv6JEgP4NgWnrSELeAKTAFN3ktJ4QLVDcHEPHZhu2zSgd",
  "key10": "2HrDRHX8mHXXraZcQhTtZbvp8cDgX9mgw3mxYgeQKN9QzLcUiAJsPMDejGBm1DZX87dUD35GExxjermtbGiHTdV",
  "key11": "JF8w9PQwp1ZHJ9W1WZdvusYQUJZyjEEtUu1wDU2ipecpPyVjZsGe6tvagRUdj7V5gqRCTL85uA2spiNhq2BWgwt",
  "key12": "3z3f1QuriYq5BMyCbqbgEFE1Tg6kfLUcAMvAPqxEuCrw4h1qHHtoybtPYDdHfKUZx5Z6VRhn6jcjVZqfKpUiAPS5",
  "key13": "58ZGnbZUjSQziNKtnm64C8z5mhYp2F5vj1o1bPgXuA6kgtSXufbpchBjSXuUyFqQqGTvxHxguQa92Jk7MBRQRAZn",
  "key14": "eSojk6bMhZCMhU8rZp1PA76GCNNNsdxnhvGCLuX8mNB8jfKznRK79NodBEVUv7pQd91SdSuuEfWrbdhzWiwi7C1",
  "key15": "4kMpsGVAW763bnZKDbct1WxupsubFnZNoF83vxA1EKMhYaV4bVBy53wEb3mL3kapJWKTJrhYJAdMC9XxiKxWQ37p",
  "key16": "4EY9CKn2PoevxqJc7exfhh1yF4FuExiQkKKkZem2XU4gyX45ghmVQshaf7ir9k5f3bev7e8cNPHoe6LNN1xB6miv",
  "key17": "2ykP8YEz3i48cNSthATZejy8L3Z12QEW4UU5wLJMTJNfojiCA298VGuJxBg9jSYmdaPMT2cuTzjTZjMks6b8oM1Z",
  "key18": "65rv8vm4zGCPPMAGEkirt14S1GT7avdwMAZ1RBGUT3Naxao7om7xZxZFojMmFFXWg3cZ4EZBj4VeZD5MA5ryMmRu",
  "key19": "4ggikSBVPNtSpM4vdk3diHS1E3z4wSwd5erQ58NVY6GkwX4VwN8FErkmHP56M13MZ4e82v95Xd9EHfmzUHZwywKu",
  "key20": "P76FA4cnGpYSLxohKz47QnS8R1ar3Mwh5w227M8VamPzftQoLUPgptFAzwQ4gnM7Z5v6iqd9CLmgQjyqTh1izvz",
  "key21": "THMq1G9r6tuoDxTHiw83CSJ3CCjTyXSJuhWFLdYkpxXk9bNv5iShRcNG3Ln8Rx7csbvxrt9DQ2RNdcFyZt56jzP",
  "key22": "5fWRfBBebhdfmPZPQ3VHuqk2y5HwfE3xwQE24GqZuS8bZQaG48ZnED9BeTfAwSPp15r5mXpdzaKDhePJZnTMTh4o",
  "key23": "2KhmXADW58tczxWZPKZprsybPKUgaU5tYmZpTU5QMoioG324MzSePqDpBifN781QSEJ5T5o9z8pZ4c7SiMd37CCM",
  "key24": "45g1DHrUZNnrx8PVe9PRFbXcbeQyZ1NyAhXrkZ5Tqvko815W1Lf5oh4bLh4eAaa2GR1SX4VPUvcabB6tLxsvoLr9",
  "key25": "3gwgnEpfJVFXDp4AkpGocXTSc6f6RnfqPLUnoTG6LJ7AGcCY6BTy1eM4gzWufwSsKSDP4vZCJTEi35HBZpjnVBPF",
  "key26": "2WfbN3M5xrKd8D43ggmyMcEA8Y4adZHH9RRT1zDwfdshwC3K5yeZR8uDbaPsAjRyDvLL77feZwSDLzfUQ7Pscovv",
  "key27": "5QesPKVt3BSCxLpLqMBosfhviTJGjfaazbnbiqNLHjoFVc62w1EmnZ9hhRnYfQfrb7rEsqS2PiJqYzMqGcbfHGXV",
  "key28": "4TnyYbvnGogQPKQBrQ511yxm3D7pUeRSTcqoAa9fk8nfEaAtWbBkrnQLvspsh52rg8aAfEJCBmmuk3CZddzY7HvN",
  "key29": "XABmuqCCHEsrVQuNcf5rbPih61tBXzwHaeLfZtUdXnRSYVMBvqXAi7w6gk9FkvWmYECS4RY1PmucQVXPPRoCG3Z",
  "key30": "2pdoPcUGRAgeqcN6jkYKgb5s73m9u8cFCkQoeKQDykquTdRn6Xf3U4A1fs1oS749KVvst3uSrqTPUPsuQ3JBV9KF",
  "key31": "4U7NTEsBwZzEu8oRnk7YqiP94ahsQ59EHjUEu3H3MpwbzAZe45vDJLVn6uQrfinkdvKfRqVw8c36UWs36M4PX8mD",
  "key32": "GoTJoT4CVKx9mMQRKQD72R379wc4aoXRgGbevua4ptJCDBbkNUTTSugyofggmKyCSvAZgwBL2V819QuuHryw5C7",
  "key33": "5AkCi9HmTw5u7szYqa6GU8Ygf5eWfXdHjSQKViCWsz7xp4DK2kKUr9FWM6q1fy5p2Ypoj6yrDm2raH43cr9A5A19",
  "key34": "2SKK62HpmPc7YAVsyHMid3r6r6f2sECckfLsGX89As1ejA6WmpgZo4kLzyYhWiL3WGgFeLdW31W2t5nQaodTFCfL",
  "key35": "2EM6Lyck4ro8uXhwW6wHWD4oZAimdUorke2XXV7F512JojF4a9cmBNDyQcMqFVKr78ES4zzooCGwTBbVFajKMz4L",
  "key36": "zTN52ruztCxx9rHEZCx7yi6P1aKFpQNTi9QYDt2UWQdPnK6YTySRnDzPVG83dX1PRBndK5EWKhM78BguYvucDng",
  "key37": "5eN57fQqeZwJtsvADFWHVVTqKzwJBcZ4ApMdsWHivTP9u3w8XuLEVxWc5JSsQXoj2DciUoD89QmgVzw7hqKN6waB",
  "key38": "2TS3ctHqs236v1f8Tga8P8idcorKgPgHDi2Sgs6NFb8BSEX5nPNdvWMbEKKCLParLhWYii3SvgyM9g4WyHroSuih",
  "key39": "3qWbss8VU6wEQ6x16GWX2SRAuWJmANVPEaaiiRp8bmy7wU5GDnJTT4qtmc6Re5ArB6kPS6Gvgo7Dz6npbwAtdXFm",
  "key40": "2gTJWtKzJRJTbSGL8yzuXM7qsVYnacRqzdQnGDwnS9HaQ3NsBHGa6FW9UpkRKadpZMHS1pTyRuM4MW17MRfbwaX3",
  "key41": "2mFfNs8aGiu5E21AAXqXpRhLdGSxFKnsx2a7tPCapcJeWfmTS1cUbxsSZVSV9Hb7rfH1P2g8q3BfvVQjWxe2WtEt",
  "key42": "3wHYSjobU4USYzRFioAFaJNDwchJirai6Sgn1Qoa7jnumZeSRhrMKZttBpZe9Xp37cNk8YzY7K5unVe47qnbuR2i",
  "key43": "35MJ8AQeGrh8Hec7w6sZAid6YsrY9876Aftg6iYcCTPbd1uFCzwJVdXpUis3SseuovaUagSsYmCN8PGvBqY2yMhw",
  "key44": "aejBdFnzNGKneqnUoLf7vBhrLx9JKvdKr2PB7W3XB3PoCGgcdDh9KKVvWL1ehiSLgeXYfgmdwgSBji31vPhLpib",
  "key45": "4feGLihdAYVRjAaPMeFYAGtLeoZ9cEhqsDhpao48VijVaqRx5J9pqSYqnxJNUHoAVS1bdtQtmLw9inQcvBF9qJGx",
  "key46": "2iiiksZvQRKKSBomrV5shDtsr8UCxoVEvLuBd5Nay1Zo9Sd5GbwU5o7GXVdSokZtJDvV3ohdgr76kjvvrsa96FNV"
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
