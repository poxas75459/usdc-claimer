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
    "2TxHaS6FDdHEuiyk9b6XTH8ufvJqwUJRrjmqPY5PvaqzW4JzTB4X4u3zBdzGuYtmHxkzemkEDnNpNBnNMYQZ2NXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ewAcFVQsY8F2hqJKzrgrtxvfmARJqb1LtnwohNKFX6NYtSdwAKMoCPQH8fjrqHoAiwaFq5dDKqzBeT4CzBWUXaw",
  "key1": "quhk2MHJTizJR9QbpMrYxqcRvsXX5nuhSu2vKqXAJi3PtRJbkb6WMjNme1g42GbBMxZEETzRtGFB8YWm17VmhLD",
  "key2": "5PyTGWF5hvqmgWckp2RQjp5hS39pMrH7sqxButEqw83gy3RJwtZSfPejgcMqEz5VDxuyciLY1y27brYwt7vu9SkL",
  "key3": "2Ch6sJim2zxn43PQ3eozQjR34TYDi1HCM6sNGkoTRDMBaYFLknMWNpqL4bxeaNe5jb4n9wfa2m6esmYmGgNc9agQ",
  "key4": "3pKG57MxeS7R67CTV84H43LNqwZQCueaUWU91Z38TSvZfkfv3JKVorQSHFJynvSStGQnYWNCNtzmg5ZPwziqFrnL",
  "key5": "2w6ikUAcMUSwDUEtPJqGxuViWmzrKJhNhd6nepHU3QVkFtsHsk51GwiNPMQSpQncBE93VDqSPkypLaoeSbL8jCvX",
  "key6": "5WbigzjxCUjAPMjPrxy3fDVptSkcovphiiCize5NX7TLygH1B99kL2GkhntXQ9YXaybpHXtbhUgfBJtZyhzneNj3",
  "key7": "4Skw3eSiNTTb3ToyKdLpy4DkZe1b8q164F2VQ3c8GCDvttS1UE3SoJ9CCSAbQ4LK8iSrf48FaNrLahAnqscQfysk",
  "key8": "2G596w81wuhMH6XDPNNjbjFc7URVENDao3ht18gyhqdSUtziJ4EzmpHCk1RZqFQjM253yEW1m78S1Aiynty5rUpq",
  "key9": "2BYCVQhvaH6eT96A3c1W4U8A9iusjjQF7E2X8pLL7mQmdqwkdjj6Uzg21kiwDFGNtrdRMgYnKrz7CjceLWNPWSXF",
  "key10": "4M4nq5Pa1KnYqf9ho6cvRoHcEzcNfmePV1Q8v4cpA43mvVCygeuXAH7hMJcpHfB4b2aTccVuKkCtvhydU14UVhdL",
  "key11": "5N37gJGFWRooMzTrUN2stY2KwXWM7CxDbjgrCohZ8JZ11eGSqevLgcjXKNSbWBxCyWzEADabGyrp3yAQAosRpzMV",
  "key12": "oeVBTKk2mAZXyh7TpaaSDhz4jQCGPpXR3EpoXETBeXZ43hgiQiRY3qC7NpCQ43Fj7XTHRbvjnh6XwAFgMjrgaGx",
  "key13": "4wLfw3ontuHNM6kALKFEoLFsXbRwbxseod3oNSq2Lb3t1cEhhdnV5kpJuFW6sMXDP3KVgTYhzoRctE1fvXdZKwNJ",
  "key14": "quJQRF9kg5gMi9JAsGw3M2eWsUCY7yJvd1HECqjnjgMRZBiFbZUiK3rEioRNfj5VMRBU2CEd2sGVwMT6wFfBXyn",
  "key15": "3njLetXEwDq68vp38kZA41wF2dQ6EFj5ErTozkkVSZQrpvm2DknV7Mkty5oa1DUHRKJq237FbKYJJbyentw2TeCn",
  "key16": "5K2wNNDPfEVZai6jRUBnUevnrLzkmoPoaDwXRsmmp1azJZXs8Qo2GqhXatroLd2w8ft7YqaobjmAgiy71f2k6BDa",
  "key17": "4RsKF2ctPvWnecky4sEnLHPFcR19H5wUrFzC7rFdR46Prde3WJvYJpxM9fQ894WfiGEUfBXdMwEDk8HCQED9kwT4",
  "key18": "5xrJpcot2jAZzSkeVZGaA2wWuAYaJJ7vGjudkCmLS74kZvXq62xtpgCK35AWDCJ4pgYN17fUyhMVSEDfEHSNgxcc",
  "key19": "5J7Z7biDMffGwtJyPvZSPjgSm2rhqWqQFWEQC2WTY9QTmtAjVgPmKRtHuX189KSd3UBxkFAvSp4idytAf1AEFcYN",
  "key20": "2yxjfAeQWzvAGWJgFaahbKcA8cVtMFTG8z3ax3vKDFH1EbE4L3iFfo7qsfQFiiyL1a7Aue4WBPf9W2R9fed1w6Ak",
  "key21": "HCqu7aLJhrjVLQC6GPS8hhYa3QvmVPVyAXJS3pcBTNBjRih1jcKbrmvXnhkysjy2HwuQLYhiRwWQ9w1XsJo7s1a",
  "key22": "262hXNtjwLKxwYuPkwQRxxGRCG9FsGDUtRNRSCRkuGLHLqjjGAvYwJgzQDs3DR5kzuBejBUPxy1vD46YCg7r2QNw",
  "key23": "56SHqV81LhPqwopBgYbUxdPAg6AjjncRbVtD2fSQZa9dMyFBPn1uxf5KNyEUG89AmcbTk6LFRMxkBjLAjQAwDQKc",
  "key24": "3cmJWSsXxKVR5v7GziJGjc1Attn5usKZtjWayCBeUXmvbQxEuWm4968yFakJzAU9NySJe9X9u1KoCagrv4zCZ8aC",
  "key25": "4GPD2i2tZv9LuoRdk2JvVkbujMRVFFcK74wK54SQaKc8m5rhsJZitLG3z9kRD5p3THfx977AumHi2xSyooXYnLCe",
  "key26": "2xcua4UtHVAdg1yDUdNToyBhEKEmupqTMFRsNuq5XoHwooJT58x1NSFNfPzebyVqgG5RQ6hfZjNDu8z2nr19QXk1",
  "key27": "NqP1qp4mH7idzHVNDoTWuTfRQhGf2RVMdHrpJBXvNbv6J1HdP18dKBDknxVHwxRhvacMGacgx2Tm749Ex4zye8v",
  "key28": "638NueBn6QxjHHHDcG1gP9Hc3NXehTDzbT7WnNTRWaz3t1MZzdoudHCHu969XYKYBYTAnQFfJGBPR9ACqXfY877g",
  "key29": "4btMLNDsxPefmvjNkeqqYKRcU7ExABeZ9havhhCj8qdZx9d4PvmSYyZm7YUssYNcALins4SfJCmPafrq6dKyDUJf",
  "key30": "4yVzsKcU379dxwvPYDeeBcUkBdsUvKbaGA8XaFbPTk6AMqBiWseoNAWWMmubSNPPymyGq1mzvtRCwX7QqhGdiXHA",
  "key31": "4vK5U5LBjv5SrhgWmfTEB2rdEuWGwK8BAFQ5qix7eufGtGNZ2RzAfCQ2yvaWSnDcQyS64R7Wmr7YQsfRHpmnVc77",
  "key32": "518tjH3deqDvEycmoYDNvUpXPugKaEmaP1AJ28TEmZbiy7DJfMP7Eaevgy25tYazY8XWSCBSLDSVDzzLUgjmsNBH",
  "key33": "649UsrhY7CafmhDQcuQZmmDDGk7YKpBiwLm2gWNj52HNMSR27mkbWpb1J4CWhpsGzyMhRSrLcX46zeA4k9227XVj",
  "key34": "5h24FLp1NbsmS3LzedPbfqLxUb6dAkJszZXzZ1h9eo7upErzqe7hagkuUq25yEe57V9YWMb24nZ9KJbikx2AWqGc",
  "key35": "4ozT5BWvvAVDa67DBBcTJPKq5FNa8Ypk1SEh1NM2wkhAGqCirgihnNXJPHsUjvkWcEzTFZxyRFLzdyuixB2D7nov"
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
