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
    "2fCA3c2bGEBMMynj5HCQJbZmGgGQHZhkC9DqsA7CVJ3p5kLoCW2cE825mXmXDmLReHRucoiB4WS4swJFyaqsCuq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkm4ranTkyAcsFkyiGbPJDKyasWzsPm5TwMPiPoLcB72fzGyu8DzsgDfXfnJXnwwQh6xiQBN11KjUunfujU27Mc",
  "key1": "3CQbGJsiENw8vLRAAHjHQjAdwCmze6PZAT444d5HJWmGz9qXA6saF3n4ZjUMZgEuzhQyhwK3tRBwjGLCVCYGgW2j",
  "key2": "4KFs8PN3SbY6fmUy93miq55evDyHDLsXqwqZMfUKbPYcGEExwuPrAPkZsTPiNtg5MHx1rPk3Xhn4n1HYuafy9TJh",
  "key3": "4S8GZC9h8yNJjSnUC68sYdNuhMNSLxfyhrVctTaehHQTxdwpKcx67EvvfmLZyVAyecbh6HKGdB359m3KDcR7HrxV",
  "key4": "5ym6FkSJR6ESQbXt1TCZUUfsjbcNci82cTVhMcyDaePhsQXsNApzWqi2ThuAAq5tfUiVtUDw2ChPWGdMb3XCLVE6",
  "key5": "4rAvz43MvFCNin6qbneceCDDnKQPQsJsTNXrAz8HUnfzF6jdm45q3iJ4CM4m81T33UAHiQCGqEgTdEd5Vci88tm8",
  "key6": "3FJzJe5HKjU3PJGRfiSs1ogVTZ5pCWxaem1hQ7zHts3FQYu3ywBeiUuSNNaAjqSqzNH5Kcv1V6rPQzECuXZcZUuy",
  "key7": "3Rh5pSUg7JXNrdthPpBSum4wceb9A2M6s71zapGgzDnS5jFq4ZZEHFv26QTwTMaFuWicnoY4Jm1CtgQvrqFyrJUG",
  "key8": "53zBWoqNm4ds824JEichzDdAzBNMS4hHG29RdvWgRLLwzWRtiiBK2zjrbd8nGDt7fxECtVJ9i5dChPxVHeY7mGkj",
  "key9": "5iDBhudqymNuSgtqVyxAFytKE78oJEhWCZP669iYgWQ8Qmfy3MK2DrwAvwTgKq8Dqa7j9eaPeFopNHn7YP283q1P",
  "key10": "5e2ZT1JK4BiHrtLkCju5hA2wGhf9Ra1dvZ9aeamozwkzZuKzAVWTbEYmye7M5VeqSC5gGNDFzXub6Kcn36Etye8Z",
  "key11": "4QxYCpoEN8uThe4QZLgib8enfedWR1NmN7ovd1M7NcbAcEHwMGYAhgwjE3KXvCZZKvqGomSpEqonxfTGtLjeeM5D",
  "key12": "5qQQNizH3WwrnPAGTYUjNXAVuJojeBrTMSymuE3YykDyf552AyBGXTvmwA1vV52bbZiuUJrGkc3Vg7UF4QQ8N6LY",
  "key13": "2w35JAF2Aby1mouWRz9BN72rE5TY5JiQ2AvE7cptbMQ9vGTXXbEjeAsnSMCbXA8iri94BeqWEi9Rjv4NzGCeXWZp",
  "key14": "3A9xj3sAG9RcMrqibpgBHfHNVgRTFsT5wWgTy2P4XR5RDPR9Q99BooE737eT3xp27P3hsiJeFhtLicPKi5CWDwZB",
  "key15": "57xMspEVc57ytrbWhjM2X8cfJHFsXfhPKPB52tX7fJgjrQFzMUi1Gn5d6kuFQDmFL25W8kxb7y7FXqPQ3djCRhHm",
  "key16": "4oetDLFxA9bRtA6W3bnAxaZCvZoUZnYomFTrUnVFyGUgQHxvYbG2Be3FcA9pJQ5bgSqcH47utkYT7baRyaJFx8dL",
  "key17": "5y9Y9Hg2MSQUssn59GWT6XuMFPmau5vM4qdrHBNLVXTbnvskrMedH8yHnqhveyvad6Vvt1KEg73gDh5rgShXNaKA",
  "key18": "5ueergw4ojDYSnRA3m9uCUmzC7eriB2WB1qpxQYhen4noSwmN86n9LT61mhdSu5wPoUab7ztAzSawp4ruvbHvHTi",
  "key19": "ocdWuFHeXXBQFrfBNrbh4ZznAKYCLx3xE6thkuoy98RUubbySXkfSYkBaZAeXVfToRymQk384Nd2mEQTg13HgKF",
  "key20": "3mTtTgDCwnpHDa8pQxezHWpo6WJNBRjErqDSn8gSp6iGHQa6qqr6FbgCy6wyRHWVkUDHjj1MTVhyx8QqkR4HRryN",
  "key21": "5hw4GbgDrnUYQWTn5Wo5BdBET25SGq6UYAvonPiJ5VfpYqXFrCeqbNDCRAJwtJaLbaAVXatSTmHkV3GCJyhzcJwP",
  "key22": "2TuakMaSwLfRThneK9mnassTa8ZEuoJezfDYWvmBdj1wqvfhVinnXLhb3AXUtrT972PdHXzCpSF7iLRHimqapJkB",
  "key23": "xiZrEVsBWM12FdVh4UPRABeepsvGZdaS4xdWBtKzuquY7GHu3BpkzMhGNJvp7Wd3ydAyrWFRM8QCFn1G25YoKkG",
  "key24": "4rGa5kxSfPURV2o7ZKtTmdTDHoJUv6ZMojf8qhAwVV7E7s3jaBw3d6pgXkbhZ7w7JvGSD1hyhGBSNKu3hNLMy7tP",
  "key25": "wTz32f6utqyLof6KtMoUwDujwaGTGcD9FL9Q8Tkf7puFruPC45hETguskaPENMECqTAyptszoJnQDgpyv7PMsow",
  "key26": "2FoHPrhpCw51xHVRtrrKib3E9ezZp1sGBJxxW75jtVwP19C4e9fSM47RpWAogYVguajSsy7znx9rLsiHbhw3Z8jt",
  "key27": "2AVQWw2yAcgxgosQqdrCdC1mnxSJHTYPrQr7TFDSrFbfwpEfUoXefxkrpaScRj71dXYtABcuQsK3k84fZ6os1BT2",
  "key28": "3LJsXy8gAgZQxVBV84K4t2qVHM4s4kJQUyYzime8ZWqvNqoUsxvifxtxfmZfZPG2hHq5bKsSmft5BwJovnVnvkk3",
  "key29": "MtseSC9ZLvfbdNzg3wCQK17z6gWF8aD9RNEBTYpuN6REDg2pU2xGnMoq55e8disnqzMhF5vhaZBhdaWRaacMjsi",
  "key30": "2JgoshWnk3xxTKVrNFoZsTYmPiEuCopZXsmgUyYi2KDddhvVxPsN7KjEYEduJjgXLdhBtrGJcbscWHTF7kFKKVm1",
  "key31": "5dR3YLiuV6TqSoE5m3de6osM6FVcA4jcd4ay4B6S6c4oitUdjBtPkgEfYEGZ8aPhRoJk1FwEzpzAyh945jbGdWJZ"
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
