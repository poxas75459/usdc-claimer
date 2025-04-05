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
    "5pMm8rH725zFenVEZEsz39S5dHD8Y33s2eTmUtQLqVqdzvaeFQypoKA2t2bJfCA6n8toLAwfaZfQtN7k7ish7FH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsdHsvENCshfaKqrsne8aBAemx6doomFoDaRZEqAmFEBnRM8mSg3MFFvMpYfL6mKy8yDmoEMGgELoMSpvyEYWdu",
  "key1": "4hGYEoQEJfCbbn2HRw6XeggpQcBhoRzw7AurHkMr7aiWfUsreQpNhWReuzt6wdU1CAetfAXz2DG5vdienra2Q4h9",
  "key2": "5x3C7jcPjM5dGHMo9nvZp8CJ5XnkY7WkmVRem4sC4TBW2BVPaPAABymFH3XNVquTbXmE81PKScoJRWitWBVoio4S",
  "key3": "JojYS9q3yXGg8dWWRSZrSqzPNY5pteNNUETVLciUkbaLd9QZR7aKcLK1Q1v4VRYzXZpqnUXTW189JP3QWSoE7nN",
  "key4": "44ACx13nC3USVuucNYrHfXECrkhE22BHFCgquMxm7Ex2HkpdmHtiL9WyaqySCZaChFQhhU4ePpR9J8gVc7HrBTgD",
  "key5": "4wEtH7217ac1ZRkTQsdtMDD9tuFNyBUYtemiV1DpECQYqzuxxmE6c6cgDc3Z1FWsBUxb3qPrpHTYoBq67ZXzm44D",
  "key6": "2qKKDZzveDJvCjyJCB7afXTstuG3xBioeJeSyohfc3eMeKsixHqdY8QMSqPWLHf2qUoAftHu1jdU5sFCc3ei7Vh2",
  "key7": "4A94kLchWpjJjyDgTci7qYtgo2SNhNLdjh9s1z1Qw34XW1nuDFFSXuftjMKLkh4JH43UQLE85GkxFThutMZANVaJ",
  "key8": "4cBV4GTNiyz4woLYA8REsZ6czxnkGKmyZRmGTWQDzYovVyY6AybJb9BTcPzBaYUo2vMYm9YhfhsThbGvWQ4oMF2H",
  "key9": "2o7PYp39LVfcrBeMNL7Zu8yNAHREaKtkdFsTK8ChcKuPdYBNQhfBUTJcPf8acRF8EHm4hbwfEGCnkYYyyuTHCL1x",
  "key10": "nXUtGHX82gB11Zbp8dstPAQ6NnWQ7P8yozA2mCamRWUJUb5WhDt6XRaKREBkpwXnAPtJ7dCuoNLcqAC5ZEHedUz",
  "key11": "4JPnLUJBRzQz1DPASeJaJ9GumGbMzVsPzX416pwD6MrtMyRwZBqsbGrMLWXmnXGeVMJ5AEtUdigG3iG2wDgfBQdx",
  "key12": "3qS4UkT97wq4J75j75jKGZ8LveXE4bPff6P5cHXp7gv8yaH7E5fivH79FpiCkiby6LWT2TkaycjFtREjvgiQyFy5",
  "key13": "2iFbh7G1VHSQsNeZEJa7hK2D4XD6tBvMpWDYEckajNw23xvM8RgAqcHk6ZnMvmRckPHrZv4Tv9TRDSQACBhJhoJF",
  "key14": "4PJ4iqebAXDmtBD5urE8sZ698BsX1oH98ptDL6MEt8KT6E5gHZw2w9GY7Edxr494icYe2fMZvca1qcMwpVxGA4Sj",
  "key15": "37Cn4tRpbV2tTDQsn8xbRpjGzx7FVymwTfrFcHsHxdsrjya8EafJXsJTnCQwBNsKzFPGSENVMBNHfv8sM4eNA2mZ",
  "key16": "ia7De1Q2ioTi78fbZ1rRt4ZEMMqivM4JWBeAmwgbZuZivFZFZXEiu3rYTc6RGPBSHjKqxLwRY67TXErUQbAjwbn",
  "key17": "2Q9Hf5gd43DxTzJCSsm1MQ8kn7TyuYGTf5bywuF9teqMfUUUrNu3WZigc44hZ13nC3hsWj4cBeTDXMFmssh2RaeJ",
  "key18": "3VCgjqiRSWCmWP78SdrAHHcpa9VWBANEyobeZKcriyHHPUYpS81wD3JhLH68PjArcJ7sKZ6cxMue3fwPhNqZ55Xp",
  "key19": "2YyDffd5Bg9K5Bi4kZRpsZKm35j7BhxZYjM2zBPMd7QL2vEBtVN3khHq7HFoVFqnEsDd6zXgxKN882gFJSLJjrug",
  "key20": "2q6CzJPmApB1ogGkrCLvSEDZwF4Mx7eRHNSrd8rjgY4DtYP6vTJ8ZaEZbKppy3uQYQrg79c1JHFa5uesxjf4Jrdi",
  "key21": "57hmFqDWYAimbVaureo6mRUUEdcDNYP5nCLrQKQoaH4US4UqDSsujaG6KZkyUzUokW6LNciCHs7WGUSExA4c1PHa",
  "key22": "2RLFTziHY7Nb9zyFrgz3um67kp7FxosDtSrZG8jzaH1xktz7Q7Kmc57nofjJxktJRSUuQp7xBmHo1bBb5BWJBgvR",
  "key23": "hWA66titZuQGueVW17zLWLcsPBPTRGRMREEgMSeL4wWMezT2TWBccieRMNEvPQ36XhV43D2enoBk2isrziqkYKN",
  "key24": "2e7eSrrfemF2e4kA11oKNkyGMHiRzWcvCD3GjciggHQJAzsDkh7LZPzztDEWV7VHduDZf3XJeFigouYnuUqK2Paj",
  "key25": "3fjdoi8Jbkomv3mYxHMkzFoPWLeh2wQbw3zTWV6JM2GKBDr6nuqq6GmnZrWCnASfeoqTcdMsqfeDk3domoa2QwXX",
  "key26": "21jxcU2ZSvrJDmvUe1tFo8m224krnpZhyUXfMf3Rw7dRwLW8EgtRYkjia6pGt98FAAwdwtVWcBpJuKVRvMACx8vU",
  "key27": "21GWJSepgfQA3XqGNtT6qnkL446P2o4c4C2v95KRUCm6GMnggQXmAh7xt9bCppJiM1k5bge7wB8F5Bevb3qBiAiL",
  "key28": "43z7zs1Gh7m1FS2DfYVAEXsSXHkcMhyLF359WaLeeUSsw3Gfv1fVz8YYJZnun59WNJgaLE4XUm9wVjU3otT8vLk6",
  "key29": "3tjzHgKpUZThPTXtq3QwC5bxk31YDs633WmamkcgEDWRBZumX53tSLXvJ71DaLzwGYLT7A3hVqviUA7rmKSAerpk",
  "key30": "FuB1Kzm8RWzRZZ2LEWKRLAfePy3pf5kpuSsBz1wosVa7TSXXmPKkqos6HMYV1z4Buqsb8uEqPgGZEGntAqfuRXn",
  "key31": "2nsw6bkCj4CfoYYg3ogSiKnxyPnfNMJvQUjThs9ra14SMWq8QTijtTmqRn89dp4DEBMTHEsngpx6yQNao9v7aGfy",
  "key32": "3QDAg7dx8oG6fQFBnTZxEpQAdxKjqC3YeXhMrLnjs1fnBfyqkBeMjMnXeijnwBdpPE3815vPTebZUn5uKvRqhK9",
  "key33": "3XDisZ4LtrWf24pK5irJ5HdUYhKBEfu69wKQJMoMQD6ikryjsnXmgM3Xot292Ba9XKrSho6UMeWB31keK2j78Z21",
  "key34": "2ktcq6S3zBvJbD8zrigxSKqsZZuRhJntsdo2jVYQxPyX5aKRxJUKho5bapAWXYaP3bmdkH3e3SoyjmpnKAHYyELw",
  "key35": "2uZGQC4RwVqpjGBDMqaTThXVakszgMp7BL6EFYPNYizCCX7jHuB8mJMkwTXsWdgTU4S1RYRMAQB4BshP4FCjxBif",
  "key36": "3nNjyr4XFNx19trQhiP5ChJXZSAUJH3vZw9QWtrnUKFEKfkCqsxNZ8jUDum9fjVvy9jjyzn9Kyf8ZKKb86LdfVjh",
  "key37": "46Z6WfLvWh84YGkwWsiEAgvhmhK5C3VbAeSo387HpFF5SEATzoaWtmdTWDJoYQQ4ehysWBArRVFZFcC2BRbegjtd",
  "key38": "2zUHdXADYWuUrhfdbphY42V7ugdBsngngc1ZuBm9gGngxKPDra7gGWoZefweYu8SXxB3nngQngQg7q9nn68gmFWr",
  "key39": "3qCX7ofFZQKaW1pAWsy5ZPoNpvPFmeu2tPyQ2duraFJLNmMAtHRquqjjodvkNVwoGSM7zvrgRcAEhALVWPRp4HHf",
  "key40": "3y1ZAfHda9R8oMHu62hnSgws2YAS9FcFPhWCqjUuwfC7dY4JcZb2amknidbzk41P4mEDgzQ7d4r5FrU5HTSCXpir",
  "key41": "2n1ccc9RDb1DWzBsrTXpxwKS1PXPAsxj4XRzm6Uydbjq2hpuzdagwTq6gnPU3YupzMDuxh5athxEqqt2yFdJ9yZv",
  "key42": "2o3ZKcjVbipA7wJZNKUDrEDj7zRyc22BcbQPFaQ53Khh5yHAs5JxgBvugcYKwV4t6Sqarc5QCZWhKedhK5PVxTzq",
  "key43": "2RAmTxkPkyryMgryfRnFRxiE9FSMva2i9GA5jFgtoymNd6bBcGYmCLxwq51WHt4yr8JkwfYhfrrr5AXAK4otoRUd",
  "key44": "4V2eEjpKhbsvj7JPXra2qQDjG3L8u2c82mVL5Etz6LhFkE3ChwyBfUpDAViWUchuPapQ1VsuaEoNiSC4BHnGFeUP",
  "key45": "2QFnbY7XWWKngDp4ceUQH8WjfDJsfrsPH6uxcocLAb53YYtZDd9cd2GDqorz4uPYTBX4LiogopsDApiKwQh7munC"
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
