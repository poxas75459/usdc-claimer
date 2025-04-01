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
    "RDDEiMRTy5CDB6EhQw6Dim4sRpAaPysPW6KznhuySBxST3H8q6Qqt6mzZCNoWczPTYmHzWoHroNTqAK5AC7NCLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R97L2NYT4Wz4ANPEDLriAZn7kC9FvZqUCLAAUHUQxxM8UBy8e5HWFfcg4AmTpwAH46vjh5nXzfT79A2eFqd79TJ",
  "key1": "4mAFQkVcoG6JG17UBfgWMgqfhixrz2ZvvePN3HDPr4qfhRnopcw5iX5NrwrzM9UGmmm1YzyTW3zXoeQHmwsmE91T",
  "key2": "533k9pJGuB8wyToSj6ECpzygJCdv3bixHg87jo3eRnQXuaNrusrKYjHqxCM9WBt9E46B3HkA4V7pERcuQzWQ4AFN",
  "key3": "5v62tDoR4WNG9xAxYdKVfM9bzANqieD6BZg8tgPYZUzpWBBazwxbWqNJNwRQPEGxYMiuKecQgD937JZDsqJu6j94",
  "key4": "f1GycrhBGwAdQb6wZURohQJcN5KYgMGgJS8arBDJqDg8FgSSc82VybHoofYdu5rBDLEAfpPj525Nt9tKYzYzmu5",
  "key5": "4pdupPVafE5YV9NdRaacMAWxikBH44JChGw4xwFMpKRp49pnYQweY1sYYfX4353TSBPXWEmd8o97GvYYPb4DG1xk",
  "key6": "5dzZkst9EjCmTUECwQKz8GPRtet8sftiUw2FXyVb3ARxWokturUkrnSV1LC4Gqq3mSVe3j9gCZhksmdrkJbmH6Rx",
  "key7": "2uRyAUrPuy35oBb2PAwhzTy4bqJDUNt7hK37DdaahoozaCYLr85DCGmZEjgyurkB7hCM8GbtM7sqrUHs4hLtcN9f",
  "key8": "3qoUoQcnmyUQffCiuUvoSoXLbxBxQvuG51HEv1QXEjevmW2QFWq65JKdQ3L1R3VospVsGqQRpVBcG5gEhH8cauHB",
  "key9": "3h1xK2hRdfGUnKiNzAnaoHcZDEgX6M137bdthSwMmrF4dp5oKzWc6bBsh6NkEZzz518YWCy5CBTjg14dDWo2FcZg",
  "key10": "4PeexucAvPXnrDtcLafo7q4Bv39EvXrrMP9QsWpmU1ntYvcMSEZxScJChdHPfWP2XUnvTz3fRUBLYWHL4PeYK1eC",
  "key11": "5JhytmfMbuMRf2KiwJqqAa1TqiEHG9AVLSWeiWZDTxzXGAySdqDgHQ9wfbYjR1Y2UyV1vK1oWEjdsokErEWNBjSi",
  "key12": "HZVsTgc62WFLbaW6tWZLo46hgBq4nsAZtCx2NaFEJat9fxWtZAsm9SmktyTM2V84ivxsbzxHnAk8yqzjpCGrpWs",
  "key13": "5xYxM8djBo3s3EzSyXKCJXUzGCZho2s8CoTXT9rfZGi3aT5EjfV7GwqMMrwpLzU9w3kAp6y5FHd5ZRBhsJabq3JP",
  "key14": "3gMtiQR17i8rLE1r97arHrbSrCw5AJsocwrnzpQjQZFL5FTMtWKsXR2kwfznkKNKeCmbERmU55bGqVHayzmgDzqo",
  "key15": "2zSgUYzBjM7S9adbjBqVxibUtkvqS5hqG74A9GKm1AnBEr2qEkUM73Xz8j9pH57ekWcPyjkCWPCdxUezWTKnmL23",
  "key16": "U8xYqNVAssgz3Xfn81Bk7jAKzhE9cPmvKBsQM1wjEDciEgeEdvdrrcnji2zqJDidKweZvDzxXZFd7yQXCncm5t6",
  "key17": "YLwBXiLpjxdmg8LjXuXhGMnxJhN6F57Yg7Dgsbe5eXehZHYjktdMo4n89ouH29AmYxQukhDjPHGAeaQbRECLT47",
  "key18": "weq2JjiBuvN7E86BxVeVMQofjnmZVuQbHBCLHfxVWnpbnLYXAWTSnhTN1ksppSnxKPUiwFwMSEsgfxGjo9xsoke",
  "key19": "3QjAPCcv4HGV5Yy27JZg4Cx2K1LnnQ61TjjiHJkbe8mxbhGd8U3QoieUtS5YtyR6DPTJX2REZQPKN2Wc9cGdCST",
  "key20": "5uc2vamenP9EeNWWrRgUgdHHpYLrmatvF9CkUh5Sb5hYotqVHeeLdEvgWesQtEj6P5oVoKZFiNMo55YY5qbU9LYk",
  "key21": "4CBGTpZ5CvayN6DLfvCTWXXgA4egcJMmrk4vcLxE4CSDRrkQjdexbGfS2jqDW5uFvtSA768EDbvfof3t2ka27Pru",
  "key22": "4ArFymBwKTZQjSBem4Yi2x8DnSiQgAB8tzytPTFeodvcrAjcm9G2KqHQNeedN8jbAdKypUdfnzoFpUzqxFtuBfKc",
  "key23": "5Z6reM9peCvteA8qef6NDmvLcQ6fHKsdj56RforfgXYqSQm6uZy8tjEeLAAVFpeA8sNccyqaKUgSSFuXeaPd61jc",
  "key24": "4QhrMoBsbECuc3ETeAkZMg8FqRS8mvGyXsJMK52MjBK66VK9HWq44MVJgsSLtCdUsciwYoT1yT9xt626MFdh2xvd",
  "key25": "4zxRatSEFHUXDZXBEQpMXYWjVrVGbGruZ2FnNR6vQHst1is3iEDuojmkoSYTbfQMGRw7vfCvHBW15nsiqURLcJbQ",
  "key26": "2Yac1SvLHWMFsSHJrKJX5BiGjFJEq9kRrzNqkBUyc9PprV9sFHmiHsu2aa38KLDbz3jEqfyfrAydLWrZ5QouE4AD",
  "key27": "5kFQUs7cMvcQ3eS7qiQWXcLowTG6W4BzABWMQYx2PTjZ83uHny5uoRciJmV1tTFK59XzJcyHaaTVU7RHMi34Dwsw",
  "key28": "2CRnETi8WzNXb4MNEhm1w3ppNA1mwMPWAT99rGya7WGzbf7M7ZBYQTnvv5c1yzBTASWpbym7MCfz7d1vgSpxMryr",
  "key29": "52erJEcgFwa9GWP7TPc6ZeRBmrmvGzmSQ4F8m6U5pR2YWzu8sux7uGPCTrBBvCHc1Wyi4GkWQAafiLH5RBYD7cDp"
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
