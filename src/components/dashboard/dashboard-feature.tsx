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
    "5iJzHLHH9AB3p9pDwLLM912wYiTSwxqkyBLFh3NqxENNaKeUxxMpghRQ7juryqTwcamsqoae7EB4ydJZbCeouXhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZPEz13BwD6GgUSj5oav7hb95NwExU42KeK2qh7sLVrc1Ac2io5JMfWahvwxz58HPFncakm7isLCQPAKX9tfEi6",
  "key1": "5d2HdChWZn4L7hwyKRzu24WhjxBMxr7nzP9wBft26RkUJByubsCPLiBh9DXWYseL1RJrXizT6cqfFbjkt3b8R8zj",
  "key2": "4eRSxcd42hityL1DnXqqM685sCtkRX7Jwk6vfhtgfy3kMBirSuhb57ZVT1FKksz8Uv69YVtCCSawyCrjTpUBE5nC",
  "key3": "2FrRQfsZJ6V48PizVptrMotdcTTPzGo57E1dGmDZSDkH3chAYeuwSkWgDTzHVrHTcRToSow6oqXTTC2LhbT3fT55",
  "key4": "2ie5Z2teR1SbYhYLB2522wXzYJX7JFV4UHhGipF7Ng5bBMvKZWT2jJjviZt2hwDHijEEpo5m6sjRrYvVe4ZH7q44",
  "key5": "TLB9iHEYZb7wv1DAV2gmQtqC8sGCdoQNxpzVXMJbj8oDEEE12qPgUqaAg9THCCDjBsVRTsayGtRPVRnG1te6RSK",
  "key6": "64CersoHFch4V6xBgM7BkdhNy81zXkSgBfME4RdpDhczCzPA85xDKzdhKxNcGwUPkjfDYfYjtU48fPNtB88Cud8W",
  "key7": "5VSTN6ZZB7eabRxwvnAfXajz3jyFGzkybdbH3VCGxNkRjA588QDq9dgaEtu5Fsx4JegYnk9w8GVHS4oMBYywLVML",
  "key8": "43vodtUBLDUv1kGsWaAF1FjtPDeURzNKhEpS4NN4rvSccasYACTT1Y9MDQecKRmmkgzDbc5RrYqFnUMhpQx4KaDJ",
  "key9": "hUYB3yntF1Exh5n5PsPMpkDfxMpd5Ka53xrXiL5r4vF6JXnveVJo6BwLFWFXNq1HUZsQZKy2VFUDCDAMJZpr83V",
  "key10": "4RSDGp6Qwf3MXqQF5knUwxXGBnE2Zy9YDBgJSUbs8nkbAkr2GmsJPNagUhWYoiXpCW324xD56yPTfAxcWv7EFypt",
  "key11": "2BV7XT4SnXpLVMWsESZ63wf5SheTx8GdxcJSLkK1wciZH7oLyKZwWJQCRQ9vgpwPpUiSnx4ixhtMHaDdhwZnCba2",
  "key12": "49taUua5yh4grq7FBK11y1wNeScWy89AA6mUoToNngHeDN8aNixpPzTkoyeB9RcdJCitcc5khCayq7zRdr1K1sjB",
  "key13": "55PWVm12S4fhgRLz6CqQhMePQHfVbdBpTw4sNvBdnDHp4t4RaXvJisZ8rvMouTiMHkVEc3q2ebA91C911p8Ex91L",
  "key14": "4jtgHXyt5pknRXmaxbmfvfAn9U6SgLeMpBL5XksZPWqLvEVhXP33Uo48PtUVRf9j4VxhtLNmhYaQXditZ3QTUx8Z",
  "key15": "4uFJSdnSkhJUzAAXdna4bkiXUrJQjfD5qNuXXRKDjSw8DK2R5n1c1XYw6XSfmL6bdPnn8Hcx3YoN78Z9HwHZxC6K",
  "key16": "2wmPNbzZrEak41gL4Zft6BkxA6EKKvBsgBpXK1BQ7fkAVa9taane1jPeaFU8Ndtcknmqym1NUUA69ZX6rTbPLJQp",
  "key17": "3NAmqQL7Eo5afHJpcQnQxKZhGqnx52EK5SiVGChVWRGfmqNwusZc1M31LVNbCThfxHcTdDK1RFFNDQ9EDZWK6Qa7",
  "key18": "3rCbAorHT6nk2Vo5LySMffwkYqoCU89NEwPByVQBaYQs6uPNkdUpQfvrta2Yx7Aj1JY18MQpwpwZM88JpYEjA44H",
  "key19": "ZieV6EwZ4K4gaPR3drc5wHqdsbMMYS1cS2GrdMQQ2MFp3MH21Asrdeg4GuYtndMjoSBY2tCr45CXpMKYU8k7vu4",
  "key20": "55qX7mYcLXjHgxtw1AJctqnWuyYHYREaehdBD6fMTrpoWas1unQ15kZAEktnrGs7T9sC9bWdbm1eRrHSXmQcHY1d",
  "key21": "5vXNk8huuaFMJMuNY9NB9Y3PQ8rxmxPxn4CFcA2LSZHescwR3QTtPsgn5NMar1LqcMdPPQwrkuUYTDZ1SjBxeMvq",
  "key22": "5zHtYEKeDAdwypbNYHynbrN38RXXseU2KNYgT4LZkB3hr3J1A78GR8FdQaVnLymuSNbSgNpQuqGavwqoUm2LdMJ5",
  "key23": "kkHJTVM7aSnSXehQfqzKBTR9JJEyCbAnWq8cTvv7zy4vF72E8csc5zHS4G17MW8PKtndcxhH5zigtrghvoKQt2f",
  "key24": "4DevdAbhK4EWjWR8xHEN1zSEd3y42Y4DYNnLtvoWrjWCAjES96PSmAGuQsrNtJkvo5FKh54Nswn1vCNfNo4V1TyZ",
  "key25": "wKGrR3BmiHvgvNRNpLp3wacvu6dE3qKxa9TeJuQx3gwQALri7CxxTCkaSbBcFdcARqpQP7kq9K15xk3dpyvBL8n",
  "key26": "213LmPNYc19mpT1iyxnJ2VqYrnBzrTtTRHvjvCJEzVoCQYTFNASYYdV2ZACwzaCzVwpBYywnBTpjsQPgWRLxBfkf",
  "key27": "347hdFTS6bEgz1fQTAzpGG9p5NLnsJFiRh6Vdbp5xSFBTQpfsjhqxrtpFLmtxp5itJpqMAfmjW7h8wNMTMM1nLZh",
  "key28": "3LofTTyZxvc9yNCEVGh2VNkoT4Hchj5YCEyCCs5CSMFVGm65nbmiE8GimvLN1QYW521EYTqvaum4pkkQWdbsLZ9K",
  "key29": "31EKhv5e5vgPGFoZhBQcTUVxszcfCSgz9hgvZvKaBBV8jeHFfxTb1irvX5puC1uyjTv32vD7G5LZs7B1KNdoV5gP",
  "key30": "4Kf2mJq7LJtrEDwoQ8xBrC2iMccCHcic6Y7x2Hhx3x2P1STUms57173FaXb9uYekhbU8Z2eWsHmePPUGwUJLYJng",
  "key31": "29Mpr79Q6V3cW61LYf7Mys9qqUrKuJmQguu3L6AV1ih6XZgPWaDRrH73LNgmY9fN6vBraFdfbJuHA9vEJ1enXej1",
  "key32": "wzVm4tqhqqHKd96J8iSNw12yQBdR13nc4fQVPCTnZCM9YDUpMHRqDmbNncgL7G7aG7qSMDWEDRyPwLdcxrcr3Pq"
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
