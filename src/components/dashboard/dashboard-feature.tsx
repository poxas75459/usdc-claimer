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
    "23e47hmQ831pABomuict8nBSCFiZAaVpPxeN18Ud7cQtXYuktx9aSGHTmDEi4LFnPwFHrWRHGRi36L1hooUK42X5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YxBJXtc62KYuTrXhoLXs9moHkQNzpExsTLxZBHYAVz7XNXTxEH1otM3QEP4PopjQoetc9XZKNRyrhkrYjhtv6ir",
  "key1": "51JSLKeqZ9mjdYVstcnu8aHXt2Da7fUkP1hHkrFsG9GBFiW1ZBwCSTP2yeu1oUufMyuxYha9HDwxAvNihZ6FYEKU",
  "key2": "4LpQiM6rqtBmp42Teai73MYJKAWb4c3wDjuGMo15PTxwh3uB7Kqufv9GxMFrfaP6cg2BbmXbd2mTCyGzAovG3hEZ",
  "key3": "5Hz9BRTSubACNijrf3g7aGGNSbNDnJa9TfutS5UnGv46JXtZxuakRSDams7FYikXEKigU7BqKsqs5MWiWZxVhg62",
  "key4": "5P16A7ksCwmw9B8GRs2p5WQqZRTAbEw8basQiQTnpWuy2NY138QRHs9yM9iHnUKBZeNWyhob5JZB5eLKL3SKxa3M",
  "key5": "5wWkAo45Egpgd81X4WAdJW43BXQYvQ3ugGVpTmdjDNNx8QSuhat9n6UdDAzjkmwFiBpahfLQiTczLEfoEvqASdeJ",
  "key6": "Y9Cjf9v3W1zGrBxVNwSs9jMKkjS1XBR4eGWCBQxdqGyrb9Lf8FvBvDo5Pxj6j53bh1VA4Kethhrj9NGgWYPnBw4",
  "key7": "2zGbY4Y8v2hrCmeVHzKEEByhmfC8VLzNcRTEF4doFfu92AjYcVeFL7Jvcz4VYZWPTgBpx1kxudHF5gYeSZ2ecuyd",
  "key8": "2havirvkFfjzBR1EyHCAz62f9xKJjQEmX59JfzrLho7RUw4G3pPmkLGJoL9svzeNbUo3NpNSqtpfTLVNkmoBWp2u",
  "key9": "2QMxns98bTwdcV9asxubUKCuTqfXtVVnsJrZ6KcV7NTFxAuPR4Te1SwShrLRECnhtNeCQH1B9R6db6kkr7u7ymfC",
  "key10": "2kN5nV1bxc1eTHBd1NQiB3Y4Fy9L2SyZ5tedpKf6uGMJ37pFd5zuUCeJjpP4tquBagU1ZGuCCwFteim7soRussRs",
  "key11": "Wtu85MDtsFhCa1xqRXYZx2zuN4Hye7ZVpweEMYRskHAQ6b4u3x7tUeBu4TD7c3cs6U1mfcjohu8kv2YLT8Nc4vN",
  "key12": "o87PKj5N4Wx5xoubntRSanSbcXvzS9pLBvgciRYwzHo83uyrpe3PqNunZhCzjjHicyTFpmnpqzwP6URxKtDiNKD",
  "key13": "3pRxRQQ64rZNKJhYBHQebQFhy5iipDsG9u9TLAujLzDzhccJRZUeeAc8qLrp6KkKViWz8tupt4iSqR9E6ggdu7nA",
  "key14": "3YVCboF6qWyxYQ3QChFjRYsSHcciJgo2siN3xoGrZ44yRtHi87oHxLStr6mEDnVCtuXy1ReQfMaqMfR7qq9ubNsN",
  "key15": "4wWjT44Cqk4Vx1uoJRCNPJTHpmaZugAQ3Ga7JQjPBTditU21m1DXi9sZHmTBbCusm3n93CJ6thk9JcZhuHYVKPR6",
  "key16": "3wYM491WozjTG2PTrXo7PMJU1iprQ237quaGY2RqJ4842Xzx1mdRZAHUhAZk1BKUzYy9BymHAp9Ant69UJJo1xFk",
  "key17": "48gTsjHfWk5RX2ym3LxXjG6VjQciZwdXXRmB2LJq5JwwBf8jMiaoM1v2CroDzuSqrLtwBBGbAGWqhgwfUk82n8eT",
  "key18": "4V2ZP7UeStRfNJGjrvAg2CF1dc6bo5ZnrVY4XVUk7ccw9ibw4VZZ2BAQiA59jUFwCPNeuko53PwQ4qhaJLKpQBKZ",
  "key19": "3bQaCUTr6qDW6SrYiAeqVcdzAY68JrsCXPi4uEKnWZ1QBu94HwFyvRzC2grqiWUw4iGFxg9wmDogaddg4hDKgHzD",
  "key20": "4e5A3Mb9QxQwdCcHhFK6eHunk4KaSkj96vrKppbv4dtF4PzSEAnfH26RiRfruU9ksTj4xcmeGr9N2n7W5ff2SyTW",
  "key21": "54kYfxtLodjGtMbUo4VGoBmCJUEaZgJdh8vLENNQ7qP7XN2E4QAzmvxmCth39R6zf4YGEsdkhc2i3hfa4DWswMsA",
  "key22": "UpP6V7bYwA1saayktRAT9Qrc4ikUh8VfFh6urUogum5aPAk2nCgSnTrEGffqRHK5i9Q6fAhiyjnKVqMPuGRaRdj",
  "key23": "31wg7as12VJPptkBuSywENw7ACuVJaAscahxMnKJYJ4iVoGpR5dRZTQxpUVod3re43tVW6Jf4kVY6dnGNYTdaJcx",
  "key24": "2ixsthq8qJJL4kXmbiSkoeyKRdGivuY8RHV2qYrJFaKNrQSncidtbUmp72VMVgb5x5gskfqD9onx6vrFPWjt5sxG",
  "key25": "3KeS1WzSbMbuRV772W7UBRmZtMancZ9L7JuMfkzrrztFywtyYHSAXiiS8wZakvK9rzyFW8KqmSqpGtHeVsdmQHh2",
  "key26": "2Y1KoohX8PR2bmoVRoNy6Frus5BgU8fVeX1tDxkXpCXhB8ce2UHDAugXFh6ytdkTxx7NEmQh3Gf8Ux8nQ1B21nLb",
  "key27": "2jpaF2v1fqQfZTiLmqebhW1Jz8XePXRfzL2Upy5TLiCa7ss5WFcm7oVt4qtZJDwfmrNyYPvjJxwyxywwbXVkp8N7",
  "key28": "FKjgicRZP3bqZPKfNEMFHKy19GMCayMf8NjKPComw7iEuQ4p5Qeymk7BAJ6qQSKjwbfxdwRWVFaZqXSVLMusRdR",
  "key29": "3aSMgT1NS7QWe6m5y9D2rdhy5Hfe3FE9PPmuPv9moAiVHu9zaeR9myRwquf5niAgJUz7yhtr72fuFVAHeeAk1gMg",
  "key30": "2kMwE3FTcCpQ45qgxe1hzELyD6NqchejNiwbYnXQk4STyKYRYFopc3eQAqWg8YwWSBremK2GHQfiFwKEoCcbqrin",
  "key31": "48R4gLWMR4w4De7XnSDSjLxsXMK1dN9bzt2fGBwB5FBtT2wc4b7NHFTWJrD8BGPuY2rkpnEDpUAHaRdL1YWgPqrt",
  "key32": "4VJwJeFtCv5kzaNzGtxWnDWbWq7xeVihU4rC3NZVorxqyEjAZyfWqxAPuQzu119RrcRToho2mh2jHAKZRoxFHUVq",
  "key33": "5dSSF7DeooD3HMng9TWfdpug9ho8RndZq2WuLYDi9KoA1S9kXAyTEfY3GutuhNRysxykBja6LSmz24ve8YnCCdKb",
  "key34": "45Z4aTqi1uP99qm8enHSRyszAvdUsHXveDTQja5e1aCKKDEmcPCZxtrUJHK4o5UyXvGUxYZs3Zsebbyg3zsDYQFc",
  "key35": "2aHnRuA7kxHvkxKu6BrKCpEeHra2YQqR6ugxJPx4v7vmNnSsxzPDQXAF1XAZpthpebrtgNeggUGoCP9vBy4YjZwv",
  "key36": "4V4Pf16u4emQzau8EGUViLzuRTrpsRDrTQkpQYZPqqycTvJEE57V36d32wSYGahfpobFDLCviXzFniicWgLk29Ly",
  "key37": "3bbdQFuGNYeGtmXLa9q6CWEaWbbTpTCwc2wqQS9T6RYpwmSPMN7z559fiFwxBW7HZabjbFb47iFYEbF6KrcGgfUe",
  "key38": "2ECTjJG9UjJuM86wbmDCM98J7FXdeRmhnzhFQ9JCbqeHAddEuSi7i72roiHZzbVa77KJDJd11NjzdEK8BkeuNbKC",
  "key39": "3oEhvbXRYVgP4G2uHF1sg6EMT2U6MMPbbDoJwbaDMHvP4qkv1Vq6jvNy4foysd312oX1khcNJPWT3c7qzdWGqfFH"
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
