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
    "5jP2BTurB7cUxmrnxxXSyon7epbwfRGctdmJv2X2vgnV5RuoP9ede9YLwuVsqUD4b248EoFhYkkLQPDCw2pknbfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUwZsGvhuMD5cNkWrHzaynkZSH8RwfXxb78W6b5krEiCvN8YBSE2Jd2vDB3vJv8Jn7QgsbGEEVeD6YmcH781Kmf",
  "key1": "4T4FAWiNBg3NiFeKLHWws5oaN7z8miCNo613oJjo5wAx1eZww6sDp1VVzdJVzqwpqP7QvZoLmnmSFhcWRUGJbvaT",
  "key2": "26ELFe2GnAyHLk52X4keqA7C8j7bP86EDuv9Ct5n12PwHrFw1mynA3DDqiw4jy7oK1LnoHGNTH9ekwcMjPusruar",
  "key3": "3nxRdjcumnPUircUq2xD11DMp3ANVGWisr9uJWscjv8JoAneYpdN7E4oExZcJvE63kCvHFt1pyuyspiVc79bbD1L",
  "key4": "uJVx8DFBe5MgM19p9aP4LTn7whMN9zbA1npX1TDTMsyv9bHmt9QL3gfPmpSEdFzcdxNW94EJj5MNm3eAecFYedL",
  "key5": "26cBnSTxk3HVZ9XCE1YqMQMKzFzbBCZ9ezt7PaQsGHTXLhfg7oMBWAEo2zqaDig6PUb9taPPVrH6uFwEnEFTGuYL",
  "key6": "5xKAmxWeyFUvfVhyRBtZ376VaqtVHC4WHvpV3JRh1cyjo5EnEsNSHz4D4aTKvsYt7mWp9tfMdRJsiABp4unXXX6A",
  "key7": "3rUEnYNpdvocxkqR8cWbGe1MPjkf6TKUKgZJTgctEP8XqEwmyCdcB3H3RHk4Q2FNjskcvF3UhB5zMpvFV3ZFZ7jQ",
  "key8": "5EJQneD8ovRfnvgWBkAxhvxq2AbahBAbGzkFf23DjBu4tsfu3J3b1dU4dVDBAZFkshnsqLgnuqXru4GojPLSG95x",
  "key9": "5WGDHEwsoEqiPdgAYGgMXFX6Ku8RVoGi5tFYG4uxZ5qemWj3mKbaSg5p42yoSr4iLu3wfw2UnmSYvq4syzudDaei",
  "key10": "5QDcoJ72xEiSYsZ4894TR5428PMxirSGjtwBfnJwYucmGTrnkipBTNeB7Hx3FgA77B78yr9vWxnMqWZz4veH6S6a",
  "key11": "5wD6JvmLhgBLxXBASwzEExRts6FV9ngVMs8Qj6Ey2zxpEiF23XWnNFNEZouxyCoPMXKpxL11yRL5rhrj3uYjFCdJ",
  "key12": "R3gUHooG5RF2QYuu1mzXQZ38gbQeeD1kN4owfRkY1vBcebB9ujZ8zBbBJ5mRYWG1n83xgLFmGnEWBjA1wYrRuoW",
  "key13": "4bXF7uDbfbi5KybQW6wBR5GqUNUJgcKTDcSMgD5mgTF3h54V7BQKw68mBvcc1uJbauqc5zjZFgRDrjLPYbL98Eh5",
  "key14": "FKbDyHLkhdeEpAP348dQ5ga63WbpUb1Ly8BWvvh6Mzth153s7ALCmHYPT94wM36tCHoqSGU9CskfMN6hfg2GWgM",
  "key15": "5431ewr2b2DqqYLK4DrQXA9dKwM9doGvjWMJc7oiFukEi2Y6JR5tFdaoaifFv4cRg5kqtX3TCRHXrkBMnac2mvKS",
  "key16": "37ozKAShVpeCzLvARoiiTXEa9m9sW3GRGgUpxGuUgAeVjNJ3uund72U5VotPATpUayZNXWrdEP3zRtgfEsKZpqaf",
  "key17": "4cB6AvfB7ZPCYU5sHk2TjuGWzTqSqTwnG2XeaRVCdGC2J3wXb21bGtPgeUqR3CPbMVky1zYyVPPn83tt85KkBsab",
  "key18": "3ECBdAdiudNWVqhxAWLzuprgCTcmqxZE2YTsst1VZK78zCBYuufn4sBvqGvS3zjcA6dfQniBV86MDx3i74pdZ4Se",
  "key19": "4QRSX8QD4Hsx3AKDB5xekYMyjyvvcVbgFkweovSZTkgjFDEbyE6ARVgBSNhk7GQ48CG7W4Q8NXrSWGjUUMvy37ST",
  "key20": "3Y43uXeK3J7a1PWwUmj2XDuRPGp55PPYwRZmXKN9rk75XTKsRP1K7EeAneWg4pi8EVqryUdekwngYh3HKCw47UuB",
  "key21": "5z6AJJ7Q3FTRSN6yV1si1V3YmnJzFRveuFruR4w4QNtJdWT6xzLRkV16QnrwBFKowAen557EWAGYiRghc7BN8xcQ",
  "key22": "2JoFnGRgL5vQEmJTZ4PGYN5KhSDgwU4nrMvb978fHoFQGRSegSVX7YQudHZBo7RjFiEUuqw66m7ZCBBpGnazth8g",
  "key23": "3RN7tyKaLRNQs8dAjwUSZ7n3a2ibvZdTzGAq3nBzSo8nyQx57a5ckENvDDRSmTVTZHDoQo8z1P3LUEdL7X1DnHGt",
  "key24": "4FF92Zi2TNKyp13HDfaUgctYrdS2jgEN18kPMwMasTrNBzqAzPj7DXGJxw25yM6WAf2mAcgUki7wnRFBeCRSR3yG",
  "key25": "4y5Fvo4574kdH5qqnNRov2BNCFNDrvyzcS39N91bcWtmyA9Kpso2vAT9Q9Q9pUtiw2vU4yv9w8t7PSZ97SqdNHqs",
  "key26": "34w6WPMZwb7qcjeaRp5arsZkE8VzTJn19XbYEC6MStcCcehC6rHZ1cjEgqoadk3zjGHyPVAaTTHbHzf8FmxBtiEz",
  "key27": "5rQmr8wEJjLvuXv88Hx6L9o5eggMbehuCVGLM2fGV3hsY9kZPqWU8B9bYskhFBLw7xndhojmRaZMPXV1GpE7FRKz",
  "key28": "29EAZwbFaDkqg2uvktbS6rRFdZpR5wPC2bWEWGdrvk37LemBvFwFGTGkD6rUPHdbymK8xKzN4fngiWhjq9Dbv7vH",
  "key29": "5NEoyvjKagReS7MxDEzT5ReWU3iwWfkgsDQCNSz35yLz6yfaFJPUc4pSDBKhhUJziT2axptkwn1LYaUTuLMiokxd",
  "key30": "nDh1xdWgFML66zns7WSdoxdAPgiMDKS8zMQidbyhjostypkvRC7F9e6wu6WBUjqNrMSebvAcA8ifKw24uXe34Rz",
  "key31": "39dkXgc268VeDCqySVPGB4B2E8pDeehov6usd2GVNQ1SUv6VmJ7o32EuCEjxS2RBwMWQ4HxzXvU6BCnXVojDJJcT",
  "key32": "4paLZCn8JRLJgFUnt9yZtNN5NNeHTZRqZGXoFRvmf4PY2Xcnv5STcNQgXEdQsJ4bQ6NDRpYtGiGrEaGonEGbHzsi",
  "key33": "2pa9v1qMKrBxXZcX5XGU6gMvx7tYQwYHd2BZ1poJjdhPHTFiFtem3JYRiTF5s5o2ftVLmRVHfoUZBCJTdhcT9iC7",
  "key34": "3uHb6buWz8K4cwq5bhY6S7RLnuVkbee9KBG6rkstmew5QLgAtSPBt7EtNV9KRLmzbFkoYH3AD9jHqSBVpp8yEdmR",
  "key35": "PhNfButAkWwgA7QbvqNk8ABCmJbjxMScawFNT9P814e2TziSpvx1LtyqGhhNnhGzVg1PEfGpqzX55xC1WNrgULu",
  "key36": "26nzyARRLK9XovdiaeLJvRfoetR2MPmtPAb6ccx61rHVMWN1v7sh9DmNboj6HwScBJxoWeumDZEFZueagnWtR6tW",
  "key37": "3EZKkTmB4GDeu61RW4nNRegd6VF1uj4ctsvfYB4d3sQdVhtWoV1nXTR71UMwZr7Xio1NuWmjcw5kmZVBVcg8d2zw",
  "key38": "5pJzEAiqKHn7f9XAAaB8K8y4S3k7vXBkf4JCnR7k4aD4VnTqpwaNWdb3V9H1zdg1mh8EQN3jkmSkdERScjgu6xSC",
  "key39": "5wpsi1eB6CCztL3LziBf6Y8dwbVrHgNsZvpCtvgF3QF37Jy7hN8c3dMBQ92Pk6uvZdKiL5Sv9B2bjWNCXMGjrxGy",
  "key40": "2V7P71QR6qcuhBGaqvTshV3U3QFBKjiZgfK6sEpHxme8CPDvnt6GK19VD5oWjhcAcpSYBSe1gyVitNpQ5Ku4Yk6M",
  "key41": "2vmqABirQ9XUZGDA4cHobieSZXLFNfz3azSkND9AGoJVEsBgpo4FwAMKtX3R5V2rmWG88Er2W5GFN6oZbDVv7Pk9",
  "key42": "2F9M3u9iYbQCxt4Z6i7PRgcQwTvFeaVTArvptAkEPSjHDXX5GPHEGZAcZ3kuNmdLTew22EK4gFrXp92GxbpJHGct"
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
