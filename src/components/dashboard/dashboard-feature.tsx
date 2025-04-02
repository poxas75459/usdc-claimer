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
    "2mdf4yrCCsRBKCv4YP3n9kPtuv543KxmuAxFLyHCbTF8RBkN4T4U3FQVMRq5PCqoTMHCvWjiG9AWRzXRR7snW8cK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mby2YndP1VMGu6oD91qFr35j2YfFBHmq5DggYjZ83zExmR1PTBgYgEoMvfewpQJcweuUuypa3NcBMy2wrrwrKan",
  "key1": "4VhNpRAsjq1wuGK1it1KEdVHFjK8QJKXMJG9qFyKdpD7QPYstsQsWjp5SuNocM9HEN9zPRHg9F3M1RaiGGWgTYdT",
  "key2": "2BiGcEndjnJ4Tz61sJMdkKWgaeUhrWj8Nhti5n78uvceBxLtwF3e7emZ74Rxq6mFypS6wzucFwYd8yVtc4RxB3w4",
  "key3": "3a9oeTv3cx5PXFH3UqvkgtpaqzZvPfQH5sPVCBQCyqyKw6UUDcvTw9xEsuApNq4QSv2M7PJ2RRjqm4SwnXgdmQXz",
  "key4": "NVN1L9nkTFgyzU25V8fR6jzenTdBT5LyB2gFe4N2Ps6WwDAT6X2oBZQoTESu4Ud7UHa9w2Gz9K9VaSGvyqM3vJx",
  "key5": "4mctFsaf8iqhnaRrzuDiFCYEVRKNqGDp2hF9YK7yLG6DdY4ZCLtRwnycHdGBUBt1knxCsjmLtBPPxeS27rCcDJAM",
  "key6": "UjjjUuga3dtGP7hEuSUNtsYJx2SkeySubR9637CHB1x49uYAabU3fCAR49zfTNo2vuxbWAnWPv6yMJTFVHJjodC",
  "key7": "2BNNhxoXJ2dsSaygTSzo58PuCkFg8aDBgPUmYmJrjjGfW332yMDtS2WS5mEkgddfb4ZbNFD8tW4gZNR8iU97GvYy",
  "key8": "5YvQQVgXkEtbPx9n7n1rRA36zCj36mLkkydbzHRv495amwD6wSEJ7iUK1H4zFTjUwvL5pmndcwjQLGmy56Ji9b22",
  "key9": "4sNu1r67ZqgRvsoGT8DoQ3FvhAYKferzMB145X8HsWkYDQA3ee8qWWrFYac3whrNLdojnJ924jnEQXiSkWJDBcz9",
  "key10": "2M4RvqdmthQ8vB27x5Fn8xZ5oL4icf7WRTW38dDvocJX3ziBTNe4ZxNSHy8QLSTyzUBX9ZsoVvzpQHm36LRtEQ4t",
  "key11": "5LoBXBdrDCspnu2KyQ8EgJWE41NjdRyAMYZCgTpf1nK8fWaWJ4pRr9f1HcWWnM69Qa2Xn6nsRcwYTWUf9NwfXLS7",
  "key12": "5uAWB9CMRz7x1dLZ6spQyuXyeYVhC7X2DmQKgGfHyzCeYWEscJgVe5aiVB9F2jcfJoZ1A9BdtaZzSaKHQWjytFGK",
  "key13": "Fx6bsyLgN1UUSjH4Xw6iSjSCkY7gSsTRe3Y7yq4bgTkrfAbHb482TPiaWjFS8dyZaUDWeydUohKcTWXQBcUbtMu",
  "key14": "5QvAAgSQ3jnnTsTb3N5h6nHc4GSyXxxQwbthrrMqH2YNX9TRyj3W2jKA6CdfnTPLc5kwD6aqf7M1CmXgDFUaqyBw",
  "key15": "4VaAZaaDEUWDDSk1jhsxLvRDtfRed55Z81LkP9Nyj6yd6nKfaEd3yoGiZmU3LZQMbc17oRrUF82bpdWSKwtQXV4d",
  "key16": "3A6SpMFcmLeTHygSv89bbuwoGt1Aeqv3oUiZDwQs2uT28wvC7uZNpEucG4oeiq25Aa45LKjNAow7nn2tvJ4t6F7t",
  "key17": "28gF7ZFLbZBk5hcwVf5NK3b8dR9FZW1y3MeTdcYFKNs59WXcQMv7pRu1hx3vGJwt4Y3Uh1uoQ5B1RJ2N7hAEWCKH",
  "key18": "5b2gVDo77dBiowKmb8VdSYM5kwUJDeXpcMCx1aoFCRKGij6LzCgEtGduKkGBSfdHJkrNo1DBP7s8Taqgh7xLTSA7",
  "key19": "4yX4DQF9TfdaVMLQzTvN6GqBtL53Y8Ngt1JHT61tC6ZKJbFa6rtjhsrMt5yk8wMWZ9aBGCYwmm5rHwT4P22ZM7q7",
  "key20": "4wRLBP7mSncW4HnGxDPgyiyaoiYh94ZFY87f2SbaYM5fCzCTRUGgcFijKkjV6A6toyuDuxk3vrFjHsyxSYb7jTC5",
  "key21": "4kqBLBipcqwHPutsKRUBKNMyraL9uL9uKxFMhx9J8ErnKY4TRQLLbd8ib62cXctDY5fMWczbUr4Yzdy6xYetHMfP",
  "key22": "4uKsFm96oN29LfePBZChQv9ZaEjY6U36fjUjuop3U8kv7SMk6xsR2pxuMqeh3jJc7sdn2Kko15n5rbdgkzSxH24X",
  "key23": "Z2VvdpGFyCmUYQnGnNnKSrdSWJxSJieaakDKea9bicvRPDoESfj6uFX6LsTWBaZZQ3iVas9Nj4TYqYq9Y7KDL4q",
  "key24": "4D9NGfLvX5sbQ3Bjt68u79ycYxAgWXEK5NeaS9pu2YLgNumkJhGgLATPFWVCMpykvuuPN39HNHH6sFyUogMxNbG2",
  "key25": "3UaaSK29ynCiZas8E4HhZ2b9s2xUJYrwRxgWM7gA2KBSJ3Gx1Xwjycuws4F3JiX6TkiQBsYh3hhKW49enobzJH2C",
  "key26": "5yU9ZJRHQMdGvZ17bWRzVdXwjrBZXERAxbvaJ3d6LcroyWiaP6PLsKpe7nUaxnLzduyhB3ptrnqVuMUucYbz89TY",
  "key27": "4JFwUqSqpwvNBFCjKmv7dTaYbhE1tZCccM5B76rk9jCLWFfx9pzpTTr3E7FKUa3h8oiSLrKWhjf4BNxWywgXz75d",
  "key28": "43u5Y4CFZs217re2WwZWedL1XRVBmfYVRxanqRsz7qbpS1niKbbHW1JwVLjV5tVkaTZr8xfUHHWM3tX9Ae71dZZo",
  "key29": "UMxjFGfDkZ2S1xsxr5HAtQQnrM59kxC3tsGKyC7c1oJuvC124NabcZnCmXjiBiwoVAYfcg4tURs5frWzMSDZDkS",
  "key30": "5fAZm7kNoBi57dsN7g2D5y4b2Cd2tp13vGLEfppReuxHbHeoABoz5fpwFQQffGevkrJPFeoM1vsudKFXf1D2xtSB",
  "key31": "2URwH1bwytgZrQEwNU6RUWoEx6GfBuCFYdsmwy1nPDwfdpQ2NG4n7mHc8deuFScJLUdacVejqNTFC8GeD2kKeM3s",
  "key32": "3pXompBAYzTF8uathZWjmqnCNTZRvWFDsyra5firtx6LbxFpbm1d2TDiczSTosM4NKhwUDFMvAn7B6gbdQ5a5VUE",
  "key33": "43vZXdi4yWh6KHFVdHERM29EMfm3SM1JiwoVVtQPxnPwoSnwSKayaPfUHZP2rP8jvnLsRZRZUzGtHfuhNRt8XcZs",
  "key34": "2mYBtpoEX18zGPBfuKcrPghe9zMGo5anWfuHbtMWJe95i3oR4zWYAsDTERvyScEFZnNKWFM4ssDax5v2acX1rcX7",
  "key35": "5CMfy8onU8Cp9N4emnJoF9k1Cww7hpzaFm8uC5PcyGZdrqgc8W9EXHHediVGwerQxpS1qyPtx61Ev1wGoqjUoyLc",
  "key36": "49Dht3hsWcYtWu1Tnn4d8BT578VqkhbeZhHKwdaHG4gpuvshzccfGfKjt3h5uWbL12FNNxLzBNDSTt3fpgojSUzm",
  "key37": "2rEV8BkVdfZMeMo5MpdKn8MPPDbmXuAdcVNB5NtfVZFto7mnMoF9kRkWiCGVBXxEA3fcUXjGEyZkFpsDLN8wBsQB",
  "key38": "NsiLchRW3CDSHLLwo8jW3GTymCEYfKsc7LEygvLVMZwdT5qvNmHqQyfx7YUXHsY1rkQT4afJzBq3Yzt1wShmTrV",
  "key39": "3SBJygvLtb1KfF973irXqeGpoG7JF248bfnMan5eUVwts7BNMjxExBRFvhY7WgvNmj48cbzbdFvcrreKGtRxx1AA",
  "key40": "5YbjhCauo98E16w8qUPZMcbsGBD4JTCGeJkXtZACs9q6gmioaRmH3J8Y4tYqU7ftKgsgt3aNVp2tCwadeXJCeqDD"
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
