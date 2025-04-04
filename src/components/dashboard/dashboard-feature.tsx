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
    "2yrK1PWJiUjWkcG5MQMFQ6GYW2uL8iA4LK2BhyecX8FTSPfutFHHwWHHt33hRW8gYNq7z6QnofjGkMkzmtAF9AMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oYCsu2BHcKiPhhP3gixE6X13T2FpVFY3CSPVz5Ne6upGfNAY6nwTqMV2nW5G4NLrtJqSHBRk5Sy9nLBX5YJDmgw",
  "key1": "3LnG6BCvoEDWTAPvgmAXfALy9KFJpmQSPpYMGP2frFBJQ1X6XNuohGqNitBYFPzDeYx6n3qbvKHWbb1ZMQBvMQtA",
  "key2": "43DFwBFDiddRh2WXpNhdoGd3uaXj2vvBiAksMsXayhwXGU9b6BzqZNkS62M8ALGocA3MshRYLXUDcQb9sFZRAmdT",
  "key3": "2MTupao9z4RFMSc44GLZbyhNnjt83Ai71XroVVXSrFaQuLsTCwQsWq84Pec6gCFzAPpiPQpb8Q4MrHMjXQCyrzYU",
  "key4": "3DScUmj8m5zgmkjQRKLQgPDnAqrrJXercLF4yzQA8ABeqdo6rUqwz2B9YH8mLxNLi2XhUKVherYzJ8d6E9147fk",
  "key5": "gwXBJKXfQsYpERQxvRmgibocKNzHjQFCqgkD59JaRVrjUtmYs7ESorjHtyXr9XDVJUgUoDqvAxHJob9hRECXhoZ",
  "key6": "4YdaNJiNiDrXeS866CBQPBxD9qJ66PGNNCyjif4B1GefsZzju3pyPbyKtYJkRU3YWtUm754nhD9LAzwfZ2odNkV7",
  "key7": "354hTMdAXJArMzYvLbnfFZ7R1zQ5B61x1YZAj4ZZPaNhsBpBcsGpsgZFxe5r2M92RRGFUtam9BCkH5ewup4fMmA6",
  "key8": "4gc5ifnkScfZsn6yarQAkCTr2LQ4jAen1zD5mgDW1fZAwtkFBfDZtjmJrQi9iX9eHUw41By9EU3WYXRyeg6bC5id",
  "key9": "4QFyNgp1gttADS8vcvDJHhbehHbwXjkyMYDC6sAyqjq7WGJTqjbxbCF9dMTphfK1njmRwtgB2PSQSbnsXYCyEowV",
  "key10": "2izbufYFGHQ2qExTVnZaCj457wMxcY7mjoeKaUbr36Xy7gNRuGCdsS1rMBNCSw5FH6GmN7mWiB3qLWZXAde3gmfN",
  "key11": "3MutnbSVApt7YEZg6uECtp5MjnkWnwSocQcoxAKZppocvihAXdKyPowCN1GZ8JQ3NQuC1o1bYtRD6GVk3y22LiZ5",
  "key12": "5Yp5UzvqDDDdeErQofrXPoxWV3Z8XiMRt1gJT4ULLeY5a67fMsGkurjqDn78CSighgCorBbaKuZskRkddmsM7X6k",
  "key13": "5QUu6QiQgoAnnVGV9XbeUs1ey2BEzu9iVPdgMUx2oBKDEiaYNh5fP4hZjjx7Xxgu4cY7cGALhpECgoqpkBMdKBjg",
  "key14": "5koeyufLRdVWzfmuJ3n9UaD7VghgD43SU5mFzpunK5Wf3RoXFeNfyHdGfujj5tHh1kh63HzDhvfVfHhum8Dj7LDh",
  "key15": "B6mqjTTFDjvKwoVoNmECUeBiwXXjRDctsY9TuhQReYRmLLzCSMKGcnqYAvconhh8ZXTPcxTiGbUEkGiRMPxA5Cj",
  "key16": "651QV3D6ktoMZqvgHkVhR8meXkg4o6yupvKF7fMGapV6tbTYQSVPKFCjDZnDm6PjKyXqQn4F41ff2xrw5mBriYKh",
  "key17": "hnEo97kGdWmb97AC97LMtkMRFbMByLYPDDKMrJHGcj4D5kLKASSxK2rKyoZzZoGCKeXHBWBzqiKWTYZhmqQzZMF",
  "key18": "4huTx6KNvuam9s3xwuqpJy4oJLALGHgc29dNoiGMioyW3WoTGKfpB8rFyTcK8BQtURrEx9rV8PRUJ58SNy3DB97q",
  "key19": "2NBQhudt6Froyt7pvYfnNXssJZ7ZFe89SJmBBptQEjcBfjSVDUZsYufy4tVXH9Vma3QvsQqUF7ZNMWGupZWR7JPS",
  "key20": "4jjp6SwDCPsh4A9SDuTiCJaWPiaCWTAVMQv4N9BZiX8NiY2dpTNxgT255nj1ryBjySuqdmtBNxKYMxvenxZnpAjL",
  "key21": "AzsPLeDeKcyPbpqN9rVnsD7WdqS9KeqssMX12J5Tgu3MRfx9Hwe14iBtUQwJZYjY5bExwYcqxFaJjiZrymCTcC5",
  "key22": "65BTL1nrFRc6wEW5PYBP9NBkv4ukmsy86CMj5ED7MVoMYH6JUS4x3ffxRpP2zCUfToEsgv2sp5tiy7KhAFPp5Zbr",
  "key23": "2hK45Zeg78oWUFZEPvzcQTk9MPSsvdPZYCia2d34ZjfKAhUefqR68SJVR4WXAFRXoNEq95RRdBnrBDrBpqSDwjGB",
  "key24": "5wRwM3aQiZkseKGpj651osEro4bn5HHffZQZc6HzodiY1GnbJ7SLoxWHMwBBh1KHJ4F6DhpYNoGWAXe3QXXTeqg4",
  "key25": "5Yx9B5oQffhjG3Y9vXhqAjuwuP9PXqqzRwt4cVQQ5Ra2TodoCXAEYjBf2ywxSdHbZpsyxU39e3STnbE7HmGwVVKL",
  "key26": "2ZrUZFs75sAa3oEgp5dk8aJCtxSb1z9ZUUeyfeHXnAkLGxVRUs5k7TsvmWePfcBoFsmRNRvda8pDYRiajS7pDUfM"
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
