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
    "46DgQChZN1Nu5uQdQt53Y7mnDg4qJzJ3LEta1RktSJqD8ARbQapcX5sjAFUqpRGBDbtUNSzhRfakrGWqToEQRLbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WgNtfDaVpTuzFW7raFig71GPnreKyRgxyyGrkhcnMA3LW41Jp2WXHQRVCzb3KxwYZMVxX1VYZrWtPDAmzojUzds",
  "key1": "2hojPudDbE3uKcDJoLFvqLWnG1dHWhmqWMyosxy1suNjG42cd6RsnE4N88zmA7EwhbXL9YKKhH1Q3D5TCbXn57YH",
  "key2": "5d6YsGZbYNquqRtHUktdEzoamdMLUfkJ54Xoo3orBEWqKMbYvWQgidCW9vYr74z3Kmi6exaan8f2HUwP2NEG9J1C",
  "key3": "4opDrLsQeJ4sRLuxV679Sh5dYZc6RNv6W8rcLbp4TAYswdCmvYKAPPtvfgyVnGsfU3kYrtjyeQG8ztvJFyxbJ4N7",
  "key4": "4GpbKvPFaK68n6fLuZpqdg78xw2b9JNFsHzipZd9FdixmpHhwbDjz74Ri3hJ3qFMias5CXhJX9PMCARXsgHp7qxn",
  "key5": "4hs2KYHy37H5ABAPrdgg2NqfqDiCFWq6hwsHDHe17PZwjbPszQktMZ4yuAEyigisGtpcEBWz1xW7x96mQR7YTVw5",
  "key6": "42uHf5xUK7uEqwbC9HVhUN128fxLduCGaTSMUJEpsi2PSqEgeThoMbYwAwsk2NHrE72Qy29LFFYVxXyLAULpYXnv",
  "key7": "2BNm7to9Uxa2fGbTXT7T9QYocgs7EDD2M6QxrhkrkrYuzYk7EmRYXLdWp2ArefuuKtr2LcERGVcbCmWH4a95rNsn",
  "key8": "3Rxxa3yRBcf4aFbuQAfLrH1Hs4MH6H94VLGTWMFs8XdKMtJ83cwCjrz1UAQWLzS2PqqWqWWBqUKEd4BeyNkXdE4e",
  "key9": "4FbhCKqVdGBeqSj5NVJoWTFWCe13k1rt4Kn8vLoJ3WVw7FRwa7GDgSmvQL2cZrqwBHa89hVYtqXnpxfPpYUbCFtR",
  "key10": "5QM3xh3rHHK57WtdnQeZGn2hghitUkbwaom7hxTKt4ZSXTS8CWPmKtbPtwNc9b7kdqcE8PMNpjAsrbAgHn5Cbz1Z",
  "key11": "399hyc9bXbUJj1dixW6sdqqfKgAk14g5qTxcpHjSJRi1jjPKLvjJm4tbrxHBb2SRuPztMQmZKFPBWnctUR6ZgPdF",
  "key12": "3agRbxCLk5QKKuGTfJsp3brXfgUQEwbtuVcnoe8UM5j45sGZAHHK8q5v5G3sCYzxJAQAMxrVyfoGQS5dgchs5AkB",
  "key13": "7ASKcgQecCBpvBuc84rQ2JkiAqhh2Yo72ZuHC4kKc7jMJA9FaPS13uwhRQKS2CvVxVADY522uYffNofrrkgUaZx",
  "key14": "5othVYN2AxgKYJPuXGPN7ekg6zT8WAa1acxXecGdKoaH4mZrbMiPHAEZ8MVisLWFZD6tReDVnrZg13pEbZpDWLiY",
  "key15": "4NePgCmgXhaN1s7sh1ZgCbnG87EPXmnbkyLZafDmDGaWjLFm5KvV7fCyACGTHVRtdDQvnAC5RNsiG5Aaj8MbGGt4",
  "key16": "3VMQR5DQBfWCQ3j1VWUYNHBdzwTC2dreugsNWGrcpzaKd6u443mbxUkNzBaH4ttKeDNoZqEU7vzGFarxvgFx8PyB",
  "key17": "5UbqcHXUaytaXoULxuSgzVrDrX1M7kBXJpaw8Yx7E9YEaLEACmfr5ZHTmdvnx6SLFbAnS9kaMVjX1aWVZCxxZfvQ",
  "key18": "rRCX8soFigjF2xYV7icd3Nhm5SGB6NFYzqEnzneaY7uBxUVc72NSjuGKv2VABTTwEDrqcd58y5xG5KBrtfsXg6U",
  "key19": "2JdKBW1Zer7Zyc1zAWGQL5cT5Ng8k1jHWWZGt9Eaj6sHXoQYmoGFgywFFdJv8dnzHJ4UpVhYmzeNLDqzfk1xThCV",
  "key20": "5fv2XK9GF85Dm3FtCq6WNztb4i6iM8ZMZiyN1E52ReyRPhfokt3xZupiaQiDDp2w9TsMEhHzvb8th5CKDKi8uxBK",
  "key21": "3noX2UV1rCqMcbxUHBRsf3BGJrM2KtfuCqMGpWubcvLP3Xr15ZLuZCgizrw9ypzqgofWxbHNDMsne7qyueeknYCS",
  "key22": "2RyX1KUvnSUzZfuCFXNHUx2eE4EKsxxGmRbSu5jPLossXTcziwFhqv2XsdKL3ehnddwr3EsmnAXPcv1MqtJ85oxv",
  "key23": "43iLvv37WQmVJbgF2DzEvwz2tFKMgV9yaMxnzpjhWDZE5YTkFhGeDA2eokrZ1CYLtApm5SWLsike7iKQNL9TjEQD",
  "key24": "8QCAxFSZ9meEKuHTAwmMDVYdtVvZdzVswugFVpECUBCs7vKtS5oDcaae7YcspZEqL6CYsWC61hRLHRcJjJ4EKGm",
  "key25": "5S8523Ypqgf2xsjRFVoMd3NVDmdSYEPKzqwfcGmU5nufRBHN3rhsAhyJ8WWaSEtPYcD9AcVRmsqg4Kw3t23Nxjbi",
  "key26": "2aoZf9YMMuWNNKHdy6pT4QATbczGroqJB1JUPpmFx6j4ZTP6okna6DVA22kbGrpiXQg4fUof196vTNTbgCFtBJRB",
  "key27": "HZcJMeMTJT1wDs1Atw3j5JuXZJ3UaZWPJFZbVSbUUXQWz5uwYgNxXtGNDDut6cR9Dz9hmR8YArLAokSdHL1Uc1L",
  "key28": "4ocknHbbecA2YukoxwAqsGdzSHZ8NL3NY9MgsUafe52LLJpGC9e6q1gTAZkt676AFBKi7Xi9Pce3z4J9HtfRvG4F",
  "key29": "34gE85gS6kyvrrJEEjdFEAoejuXHG3wYqe8BUukHrdyxZKA79t1iTMvUKH52mC7BCsj4QZ7pqNHwAZJoXRik2jKQ",
  "key30": "3omkjZVPovJXsLLnVQnBUxwrES82emjG9cZdetf9VyQzm7AJ4M7tgbU5EhgELadiw4osx5r2UHsSaAisSADHw5Wn",
  "key31": "4f4VD57xWbhMjzhps8eVuSTybzMUeLZoc1R3gf82Byu6XsDunYytUJ347enmeughpueUqp5M9LzfB8KSuMJie4Db",
  "key32": "5c6z6Esh2R1YC8coBqfmJJXiH6WhrdgTrTzR359a3SinbbsGSAxTz41HbKvkhCM2dMSeRrR54Qkgzg6b5wAi7uVg",
  "key33": "dPdUU8gE6mEBpYczj2UecBraYDazMLKAWrPa22MvGTn4jBhKeFMWgqoZG8pXygEWgKYfaFiXs1u5JsmGPqSaLpz",
  "key34": "3XhfK3cSaJd5t2EiQRxjNE5RVX6Bv5SYz7E3FGVPfVX9hcymWeEuGKExzwkN6eweWPzfxN82qcVmjJu2ruH2mzRt",
  "key35": "4SL34uzrsScK6FADirpN9CMQ1MP1mECGiMhHxgWreaUdNmeRsfuPkg9jHYHUV1oDe4UEszK4BmMjLdNqfZb359hf",
  "key36": "21T2katEyTHAq2fEo2DjMkAmWQKd4BZrE1vPGr4eCuTggDj4N1XTHHJSR37ouPdCPyPmkUyZQVQHA53pFBbYEJrv",
  "key37": "2ciocLb7YyAEr4wqEEJ4K3H5wsEdGg4n2T6oECsxWqhapmyjz3ZdsPYTgvD4WgTHG8fsx5gsCDwqbHpyA7SWVj3S",
  "key38": "GPijkwJZBq3tTjhftH7xvpT3oyszUPCFBtiv77VP66eEu5eAw5rMRQ6BywpxkqiDuLB8eLBAX8qyFgqd8PddWBa",
  "key39": "5D1YEKYG5bfKytrUdC4dDBZyroGVY52mk6rBHRZj9tWgSRgmVzNngdpsTurvB7gCaja17uzABF7CaNTb3pWTqVBP",
  "key40": "3YHeBezNj1cSYLnTRg5KQaLUj3CQHEnE2L6NQkW2SivLmi8Pp5cHrVdBxgbMUJ7ZrGxdcYn9uCxqZcYcDRxpU6Se",
  "key41": "5Hnf6Ldrkrsh86r1QdiGYE4fZmwyW3k8bRBH5cVfnvD9BGsP3tAScM2NeZUnPiwNCQ6FTW2u5B8ApQjCN324zjT6",
  "key42": "51UaSZNFpPYJkqmgFM5pBcndCw1f9a57n7ziEvbL4H7rNd7B4fJ4Qw4JfgnhrF2jrQJWVYQJfHpKRg4AxoNVb1XG",
  "key43": "66gbwFErrCyuTyEKTxeRYY58TY8u6QXnactRyyJ3WahvkR24B4CYqvvaozXonBXfBqGokWYEDdbrNp3y9NkgDNV3",
  "key44": "5RczcFPESMEz1qycUqdG7bjDygwXCix16b6Ft3EcH4gw48XJiYspqef6BYNpjhyzvEVH5Lwn5JZC5bYovsQA96R5",
  "key45": "5w5SzHoEQ4V6VFAmL6KuD9u3Zzgzmp4anMj3frksQESRuNPw7AFHLjRymNMc61pfDzaoBSNvxwfe63ZiWVxXVxAK",
  "key46": "42xpjY18xvFNWRRgxBxjHNEZ93Ky1ZfHu8AQehxLJDSHiyLBz53dYxUno2JQ9EBgSxiRJEvNieJB99FovKcjHbVY",
  "key47": "51YBWwZizj5hepmQ4UiYCcPXxfKGEyEYNmG6FtwQEwCgbDdik5p2E7BcYCyfNRbNtnGzn46cVGau7on2iN22UwvT"
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
