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
    "3Ps2MXg1FY3YXobYCgvhggeW3ZomPAHXaqR4CXB9S6fbPLnxX5GQCiEAz24sLDMpWpabRDKB1NGHQvTyiAj6AyKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W7azDrwzea55yV8sS3xCVFPEXKgHLL3nYvT2bS3Ehk9sEczcQDQcf2BMoqZ4cxoq7vAzsGSbzP4HKVzrfs51qvW",
  "key1": "3MQz2AHmZ4ZbmZbsebKZE6j3Kn4gXjnN59htUPgX1RfHhte35CZLUuNyAPHA3YQkFZdaG6KtYp5s4c4QNgTCQd2b",
  "key2": "4rNTrEtrBayb3om2r54RabQqH8uQApxotGkRArco1R1eXDHoCWogpqPih8vU7eLF9eRCHz1w4nsvdGcHxbYG24wo",
  "key3": "3X7tLTUNo94Q9eiSx9pDtTNF4fmwX5y19RE7NDXFcC17r4SmRezo8xb3gP95q93i788x5BziRJBWEy5CpHfiScWs",
  "key4": "5BPzvG7LraZ5SEL2jSQYkrxtqiRqqJhRocUMq3ek3zUbD2bkV2uVW3YR5VA9pgQsMgoYjyHATf16axtCJgwQaLY7",
  "key5": "58cfUhUEnz6zVrtWQv3ikCxzVmSbR3Rg96hefy5syC4LEfJp9PwSZDEKpScJ8kcGBteR3BY4GR4iZ2xyJwRipjsq",
  "key6": "4yTC9py5hgFzDSQ7EyXykXyB21CN3MjAMzdf3c6qe7Yy84K6mJaaudPZraY9YPu4RPJrFgwoMRv997F3RbjUj2GR",
  "key7": "5DMSKpndT4za7KSFRdubnnKXx2k71CQxJa8pFJfXbHySvHgk5KJrCuWqAn46rWmPfco6TYYmfxkFDgfC6LN64wVS",
  "key8": "2GMZHdZ6USiGXqDSWNRXMxmNQAedBiKP2ax93skcAADAorpMjLxnS3eALzgPaGEd2mdsybMqEd2T3SX7PwPm6L6Y",
  "key9": "22DKFwWHCCmcLBKCSV9nwJQNiLYVSLCi82tkTdq34h1XBwcMiL4YjN9EhphMbFy3iDEHJL5H53DK3cCqkPmEpPeb",
  "key10": "32dm8iCdwyVjVN6QNm3wPUeqyhME8PfSi1sgWgADrkfCegN8svSmwrnAhapB9onYv7dVVocoHF8HtxppjW6x5MV3",
  "key11": "b3W6BXjV42DeapnoixRahf9sjwP68mBsKnWHcmf5Nq5EURwsVCD9iBMFNwusmSnGxVz9CmwWRe4iYjtissfdbTG",
  "key12": "rgzXpRkq9NciicnSkghzpSxizUCPFBKCsBpDnYqUD17ZtqhCJ5tDP5K29HhQ2yq7Gm7TwhTbeGcJWzRhEkiM8b7",
  "key13": "2rc8NfbikDwkctPAd1RebAT1Z5z1otJ4QmGaJ9gL6bM5VMsF4o6s5bx8J3a7Duf4pQG9n7XMockxTC5E2YCQNHAf",
  "key14": "TzztEohi8pVt3pipRRyyroAkum7sMVGRPY8LmEiuCNWvhDrfn4gf8yjSLRavxcizh2rztW5rLWicPWbRJ2ASQo7",
  "key15": "5xFcLKGG1niR7x9zqGtsMdWbgJwvczbUFWHDP654XkYnkDPgstEWTSYe5s6xzTCLcyvrcGWD3hrUnQ7ML6qhAUoP",
  "key16": "vwCBWdEtwF7sB5Y3SWfR5BcKQMPfKqXKvJgwo8ANgShgdCd8iwz9bA5osH4vxqu1nBJHvqB9Ao3VWYk1vELYqVb",
  "key17": "5H6s5JoH5NgUJpvmK29H6cL26VznY7RS3tfhQ3RutTaKimm1xFEiYxScBXmLsfWhNejPtCFBpsvYCitiJ2gcqrhu",
  "key18": "3zBs2xW4oEuFpUt9CzsAN8Y9cc4D4ULDkFyLYefwoLFnjswXpccCJpPgYWe5pmfQcDDCeqpittBPTsn9nZWUrS7U",
  "key19": "588YS5vY7VGtCY9GWcyUHYDnUtcGp7RfJ2u5W5u9VNfDEamwbxN2zi2228sMnDeHvYpVwmZQE6NxrvLeE4M7CFn9",
  "key20": "2u3c1zMrcVT74FK68nWBEvTV2S4Ho9cDUTngS1Z6XPvBYN4GPmvxfKBbpQXv2bTxpaYtcnVUGpSoxKGDYAVwQofT",
  "key21": "3jgmGgadyPg2AaZkWdPTYwJQtAVtAD9rJJ8tEgDDACoNPBX1iZjKQQcdNERkhb4k8PWhfbFqst3KZP5snzj6sSjy",
  "key22": "TUE1tEwBaqcHeXiANFEHxowNtGYSDg6UWukZD7jJ6bC6EfTmZ12NjqPJu7dDPExDyq8f7NGdGFsQX1G3QCs7d6X",
  "key23": "iqsxUBtw5Dh5qnTq2CteyQ3KNKvLtinyzc6Q1XyFddwTAfPpF5GUcfFdgQZMLMJxjpeQrYqMGwLBErES7ydYD47",
  "key24": "5zC4TN3bk5dTVr3MmWRgmQRmMeYtoMfUosBLWrypiPpjXWSoVKZvzjHZj3yrL6piYvLUDBWCKwSqe3SXdzU4igJF",
  "key25": "2EqpZnEey7fqMoanrcNRATB8G7VocGStPKCPcxNjjUZodxW8vH52VLoVNura2bb9vvaFNnHow29sLteay2ycKgDr",
  "key26": "3vtHLjXnwBXentTmbMYkME2dfuWY7BPDP6HRzqarbSw2NpCgCEB2tMMgh8GhwjaL1rKNjah9a7xCpTbQYCgzi9Lc",
  "key27": "5XUKSfBCJHV1UoMxCGKAjn7WRck4udxuecV3ENg7kNvmQ9jBuw5X8X1NC7u9p83THQWmQkKMh6WZ5hQktdevCmf8",
  "key28": "35rUCxHYovSDN3caFP44MZczQDZjw7nyxnhGsAtxZEfHJe6kdZtJwiqqSUFA5RV23GvLhPFSu59skAezNdXn59aw",
  "key29": "XrSL3MJqPFnrMdP1yYHyhzbvxvNL3bSwHjRS4WffwEaY7um9rLiEXCTegiidQTD6h7gNHLtU4JFR23sZuYqfWcx",
  "key30": "3JjJhaGxFPkUPscArhRqxEJhZorhijfzFYACBbWDBJYHFxKP5hkp5asz4XHLscqrJnsJ33Vn9gs7XSfKAgYppfQE"
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
