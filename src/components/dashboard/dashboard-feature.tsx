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
    "55Bto1hB4zoWvGhwZTtbSjbkTTeeebcAGW3gT6DvLDr7bStzvutxDTWBsAFJbYsdzmHYAwVjnWDQvuWX4BbqkHqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bmS7Fz3oE388xWnhB2qKYRAvZsCJZsdTiCgb2oit6HDyVHicPiQP5qGFRp111oQv8UBrSqR42zeo9QNaQiwNcQ",
  "key1": "3fVgwo7gvmsKQ5Pn4UPG4VRZXx94J3yyxXosZBZanZf4cWM7CHMErV1mYyK7UGAEK1XBmurpCsTpr3hQovmy8iXy",
  "key2": "iuiY13nTdFy5PJQGMQMJiDLNHVSh629TVnFCsCZtMkuHwfPQbaXtYHpas3X8u1Nwq56FiRdbupEUjnsw3RbYSkg",
  "key3": "4zAhYnj4h6Vne7xENMLppRMcLb68SqYiEAARSFcbV7uSc5zmdvWEMenXHk6kVM2YutPamnbJbZPPXjsMyShzHTWm",
  "key4": "E6BPzywM31v6PUnqvgSypmvrvHFYKVCpAdqjHSLbxQjxkfJC3YxKg5qDnYbAuZcZbjKi9PMdzDYu9k5NetajJQD",
  "key5": "CLpp95PuxzJZBtjQ7BihohU6QWkwFZUq1nFc6xfdU96VgJDhk2gnzRzYJXX1hb69v2p3AwhmJxAs7ULLtM6SJfA",
  "key6": "46pZ7TFvwBzVYoAWQfmTM9TskyW21wttx8HbeFGob9R5Gkj3kvmp3h9YXdb4A69CXzdsYTZmUr2QDmPCNaZaP2rW",
  "key7": "5T5es4tpFXrMf3Wrr9niZ2yq71SvqmnYcg91iAELnuzZQUKN7uunykFQ6Wa3QueEGRLQXkeiod15GmHVuKa668Ko",
  "key8": "DmbUEVSbgWFe82Cee54yu8jQsBDHLX32PrP25Yp9xNuHwneUUAH2QrtpQARSm2qAwmuwXnsZpu9EFSqktq2kJRz",
  "key9": "2bwGwk2PJLEPG31DbCRyNiGDjMNKruANRUptpveFmyLYHJPECm3RtbYyignGZAxDwq9oBF4MWSsX7JoQ4XwdvbGU",
  "key10": "5xk9Z6P87NKuUXdWj6ALfc3jRCEDTaHNurB7Q5QjnZgNnf8X4nDmauzhxbu5cUhoj2C9cGVvP8fRF5Z236DMb26M",
  "key11": "2AgUrxe9yQNMGpfPKThksRpJHV8BKEPoSc9knz9vPzRa3sczNoWYkYT3Sy3RLdtirfV8BL6E23oqZF8L2NFNVnhF",
  "key12": "2LhWPosRzXQodDALwrv85GdUtW1cyzGs5bhhjT8dtgUJ1r5jFjYAEAGPb8bggHMrB2yERDtxnD1j4D8TokRoNnZZ",
  "key13": "2FEfK4VTKVjz5QYLjEDg4K1p4Zm5pjrkdCtXcTp51tozNyhNPa8JWCJ98xMYy6Q2oGZu3wNrv5HUR8ruek5dmqUw",
  "key14": "4PgrTSFKh3ZKwqqmtbaJJmRcBkVEuC16kkNnJe7zop5BpC4Kyv2TcqzGs289wFDBvN9cQSqQV5jQM1NLhaUpzv3W",
  "key15": "33B83XE885Ryh6PEcSCCRbpwqfwhmUyCRg7A4a4Fsuz2uSj4wFHS3GpR4gXgNtjygxxgkraEWnaztf16WRNpsCFU",
  "key16": "5A9mefNgRbEARvq8Bwok6VthD7JY5qeQhRfVsZnq5CR2C2i7hGjLbkZFuizjwZnXQ46A9K4ZQbHX3kCQEWcMK3HP",
  "key17": "3AVMzoyRMdbCi1ydY3y174m3A7F255cPjM2c5828z6r5AiUZYPQHiSMfSx8Nkypq7cWjGAyvx7fo9BAiSK1XkCiB",
  "key18": "5827kYSMiSqRjKvXdbDMahU5bDjDYcxVSrPHHrpMyxg1aSrsMVoF3NMJeFW6u69CswsNn9wk1eZPX8BWPXe7epLT",
  "key19": "3mqXBb2Qy8cHsEeYE5RB3Yg6QgDEaopU2aQDdthiVpgbd57Xd1F8aq8EBgHsjSd2UfcLqDFZmAxc3uKCDWv5qNy7",
  "key20": "3faq584pKnu3gpw4hTLTF2UUjbmym1dBNd4FeCy6wcSS1ZJqjbqPVjpsrFcZhDkSNUBz1rqyjj95SgduqMYqhgWE",
  "key21": "GVBmvFarDFHwEozH3kZgFJ6UUNJLTLaGJAu3KpChJxVsv3629RvtAfBYt9LipdDMy4JmMhMh227NTtDnMsCLfRZ",
  "key22": "2xUpHDeCLXDNy414p6jeBiUe6CKqs586GAaeLwozphRg343HzxjyLGFcWexgNzwJyc2hMbZRZdFNyEUiCjwYSCdg",
  "key23": "4vJ92hxAkrJTKTRmXut8YHuWeen2utgtpqRzBTBmE1qZF42ky498CiMaNTcyf5MfW2KDyW8ZQZRHe2ifhi2kPC4L",
  "key24": "3cxAi1qr93fdPwgc8x9QrCm48rqUyktNY7cT9rKsA1ZCDZKFfg5rUH21k3Gkvnai94U4WFdi6V4FtoMDeCzcdac6",
  "key25": "5AHYzwEyc6FS3xrP8HXxBwaRSP32XDMuiST4s2seg9wXJ2BU2DivFP4c3jLYwQdNq2NoGeLzuMKRCKVLBahGPqt9",
  "key26": "5XmQLkHaUMrYk2Z2ScfwKhsetExT8rSGef692WzwWe1HW6dmwxHxfLw2vSFSNKEeLe1B6fs3wiN8ApysGPX6Tg91",
  "key27": "xU3QSZ15hrApPkJFCgPCvC4A63VVzezGSTpRBBCcabYjiPJE9UBej7Ci6ATcmNJwWYKDRMxdcQrt8gtHj1QZrQ6",
  "key28": "3wUDZ8XydpioMu246H28ebopYgRXVmiZ1qUi5dwk8hZ29TooEM4gJS5oobXfnLbTZjyeUw6FayBUfMNbK2L3upcZ",
  "key29": "rBM5qkCqjpqXUsPj7XAWvfFb4RLqp4uG3PyzhY8xjvzPb389NwfCKbCTHA9otmDw6T9zp4xAmdnwtKQGsRPKc1x",
  "key30": "3XZKZCJuz8A95yUTcBdJLoZHi9rRaXawjxPkNFixd3wdCfSbuhC6v8sJiWBGeK1gcRBTwdHtiwhuxX1k7AqBLWZq"
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
