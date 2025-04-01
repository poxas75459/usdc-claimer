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
    "RLX3FHGYPBJGM8KB6ryWuVtDRjRPmfoB5TySgdZ8mnTiRRY4Y8B4A24Qrwmjy918M2WxXXqdmWyNRKXRpeVATPi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9CC1yLHGLHrtN7gvFdZYEwKHnSk6Vvk1i8G7LjcWXpoAov1U4dCMbfhzrdy2Xr3wVhyH2xxefnNmz6CGMiKFojw",
  "key1": "4ypnkQjRb9hWkswENja6Q81PAtUTCXn4nmfFr6YBR4Yt9c5xnYgbGNJTtKsFHQbUrQtwEcyDPjcS1ZEAiqf1KgHJ",
  "key2": "5hvksS8PT74yyvicCPvUxMpmAA2gAuJpC5V8BHxjronx4Twcso2FNq2yexb74hLxBePvqfkUWoDqo3czCgJyLyo7",
  "key3": "2GPsq9BwYtyrvLaMNPAFUYXHNTeGZ5Z1eZS5XQi9vEvH2xayDsuvN2c1TCYa4bAc5fqNeAwRNVFEQapXbBK3t9ee",
  "key4": "5muGfYL4w6CkfFJ6zLy4dTvsRgBzTEYZQv3QPp9JDgCb8ZEyHYetec5SpJ7FqiZSGSN7EkjfEMReeiSfHwngpifG",
  "key5": "1QhuWCsW7TPi9XbrW739CEkzXsZYRW8st7Dvvssp92CfAYVh9mNwX2uvmXMpG5DSHwFPM3s565x6DWBY5ac1rLV",
  "key6": "3E2ZyUP6DnALAoqkUTxcoNc3EjyRB4PQMN6YWRKZG3pBxtS3PWhFt33E9zm5A6Mtc6QpAFNM9JwPFUoicxSfEieF",
  "key7": "4Qo1ePzjnMDpjqv5D4VTbsivn1yFESuk5Dq2QrvE4T4rqcgYLKo5viMD2xjtQmCHvtMUN2QdmrDNt9iSsRbHidrc",
  "key8": "3Z9TMiDcvdnKYC8Wp41YMFZZBW53seuQYCH8CvEYnBfJYfq8mrprrtxnc4a19RtAHLvwmNRrs5PxD4fEqBeQ1CEA",
  "key9": "4f4m3k6tHkmnfYyWkPfCEhLMWQPdCs4mdiHCAAnu9iUzw3EXRJDNfrSz2eeKmZWyL5VtawVDPqy66Cx9ZzzN6pHD",
  "key10": "3vhiTA3yufu8faxH7usne1bPLaFcxPGf6U3eN92es4FTinDpE4dK2oy7fX44vneqivhn2W43pvfrh1BFMwd4qWGj",
  "key11": "3bqvp2Gvx3xcaov54GzzCXhojdny9K628d41RsRq9m8rBUW5gfi7NTgzFwzVocnxrdsoy199AVX69TzLQGntLKT8",
  "key12": "c87DE6WPvJ1KsemMruXpcxkZLeCwREQJCPpYgQ7n85fPysciEVoFBCRarQHs1XugZLH68dTfsMSHgq8cUtkFgmB",
  "key13": "312BJ9UynPpexWfDoUNWg1U26XiAmKDQryDoxJGrnHJwedxVKf9dTpjNYov2wuDmg1QmqfkbubF7QcXyhz8QfRmi",
  "key14": "fsBZ4RyJWchGhFDGoDA8EvMh6E5JrDuhbdSqoErS7AA9atkKb5NvfL6Sjag7FueudJ2q4aE6ASJ78wNZ2gnGaom",
  "key15": "4HzCjRmEmTzrHnVqRqVArE51jTQz2LG2ptY6F3G7oMGy6eKZJ6rwemn5YvovLKVoZFRwZhJJREjXRonxk2Wzn1pC",
  "key16": "33U3Nh1ncqW41uj8q8nq49iCzpTb8ABR9M1bvmeqHD3K4VC6bZQByDMbS9XTQUqB6HTNAU28G6qkJHQWiLfyaERR",
  "key17": "5AdUdDBqAV4EypTEG6NmYKbRGoVGnH2MtGXdYw1APpbg9RJto9ArJKosiAcWMeanQxcLJq5tuMRRHpHkZoj5Gf12",
  "key18": "42mPhVi9TRANg4pkweof8iygiuq6ikuNHkHijUBhjaPxbvaW7rrgm5MqC5sTa4VJfNTcUHERGnGiGjJCZQkF9HSs",
  "key19": "3HRxAYsXwbK8wTUwKseskgE6AjM1cQYoFG78D18wHx5oN8hFuHMW2WFWhQ3mZi19tCoZPy1NrVds7oVm1vyJSez2",
  "key20": "2AwByr3NVg9JswirEEbBQjt5fktuNXhQ4EpBuuzMJP95SmSxrtdHqLnChhVdV6uedopANXaykiL6uk1vdxXdVBXi",
  "key21": "s3MVb4Q9kD5Xj9Td4HMxdBBCQvW8udMuyCjwzqo8za8gF99D838wubayWzBb3pVJumpoKy6dYiE5RieHerT9h9R",
  "key22": "zFMJd4A4TBhtvf8fkJWVDpgShmFQYBdrite5pqNKHVUzz4vJY7xnMt29tss3v33M3Ao2Vtua4WQQ7LfUbTJq1re",
  "key23": "2Ly67wpSemPYRVUhecRjVPLmSrGQFxbWUVvu4M9C28jbqsxQjz3bFEaEGEWT8uqhEfCrtYPgG2ajSrGo8bupjkps",
  "key24": "5n6dwkuWb2SQio6Co9KmGMqNQSNEqnTv3EsNxX7H62mKTqEX348A6pFSptRPpSbkCfkkXAcLk4DyG8ymGqrBEXzC",
  "key25": "5acF5EKtAxAFvRpVmZTbRWQMBu2FtCo8YwX2nAJNKA2nv7FqjSbb2ucTiVfHTn7BBN5CHLDfhL8HHPpS5bBitrdg",
  "key26": "371yCqVxFjdfZTxfKADyRpy54dnsTqRAgMYJ1GAVS78FFoPAbikmVsuiq1c5bxU2tsW6DimvS1M8r5PjxNAiKxUe",
  "key27": "4vu48fhfaDWL5oe6JabpnedT9UiUtAHw7HSgXDHpPcfqpWQeM72kmxYgxmKrW6mX5NvrDSuo8Dr4Ejg4BA6YUFy8",
  "key28": "4dcaGabbJgeYDXr6YmH37ypgiYiorPpoXG8A8J4QpqtajgZ19gFsynYt4MfpVGHUGvL1BLuNqGuiBRooJfArvduS",
  "key29": "mrmEEZYeUS6f2fxWaLAs4TDeDUQX4vtGd4WFR6JWN5sTUnukm2cCVAfTM2UopTEwtX64nywEpTzubHmRENkeTY8",
  "key30": "63LBm8HQzB9gewxvbDCuH9enWMGYG2qzWWeW7fH1giLSgBmXWgjKGbwXzu7v1tJhJZTkLx1HBoSaT8Vy5KTj7vKB",
  "key31": "3vmLDVq9H125QPrxCVtG4uiToHp78LhfTkV2VqpSM1h8nFS668ivHsGH6DzWVZhXkss9rJTgvUTMDp8DBgGMP6EX",
  "key32": "4XfZ6H3JMzNL1DK8Ya8p7aRnTG8dd6ZW3KWJfep8WZgv5iKch9WRU48XQ6U1m62xL52FZHvKn93xkLJ7GAdd6tVa",
  "key33": "66emXxrYntyW2ykkAkB58B7aeVFkQ69jbdifcqaB6U25mNmRvk1FHNEakem8PBZWEWmQRt9Z8eyiSNHXnBaPWQLo",
  "key34": "Dfv2GcbwyvCpV43kciYcgvXrqaCBLR46yau5XDv412T7zt8eq9ToDmyear4xufGpCUsWU2tYCrT57W2wDBRHmUk",
  "key35": "4TcNq3Wuua4q8xHJENab3GrDRKHvon8JPRASP6HRHCYjw9xxhgUyLB8WkNR3SucNCDM5skkVyTzgoR1DfgyisDzA",
  "key36": "5vtW9wtNrvkajo2srvfzyMWwKDHJQbi5noMHmgcmB4TVKBsXoWfv5g6QnS3W7Y9RZzc7ZaCErmHo4bxDBheZe2Zr",
  "key37": "3dqwBBpX1KUwyku5x4jrAgJgCQC9g6huN3CQCJvzCLwgGqRzwZ4MTA2HAjTWSD8AjGEJQL7WBdNDPVeRMDCjZsjK"
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
