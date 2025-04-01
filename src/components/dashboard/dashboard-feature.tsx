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
    "5JKnyoZki87HxvLXYFwmWCuvEa973rVofsjsxxcU3yzJ4nKNNF4R64Ydn6qFe7vBipGvGJjQLJrVXzaLxgt4hegx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzUzDDHHxAz3bCaJwX57mBDXYJaDZXrm5KQWRQWSa8fXzLydCbexWvu9AMstjGzRv5WRvCToAUY1wTXjeEWp3Pk",
  "key1": "48gBNTQaJvFJMnG3eMrGqEhUja4mnpMKtntWN4UoR8qVDXwnJAUehmwohxZpqWZpFyYD6coHAdraJDt11TyFk6JV",
  "key2": "2Tjd7dAKqtPNBuyWJrpDubL6i9kP6wtG712ej24eBN9nuWbwTAUm3CRKNHoZfttuoQeGbdRbx4q1rg7bBjNeqkw1",
  "key3": "ieCZDUR4y5sWG9GeoGBBPrt7C7jgWhKG5M839rtT3m2F3wmQfL7wMg5zL8Dc1AJtNbzigoXWMcbFoobDg2WX4g1",
  "key4": "2FuRZBeZA1bXMHqpt2XhUVRFkReCRHWQkCojJk4cEC6yeEHX17J5U7jFTdjfqX1u5aKnf9amhrhVksuvS8pMaPb3",
  "key5": "n2o8rsRJWV6WFEZE47BiBJs1U4dwpYv4S7xb821b21M9FZqMCugFkLi4MvUvu5kMHURCSQkjXngwXCDp4kP5ikj",
  "key6": "3d3h9ACJ1xZYHenw41w3b44jMbkUGtA5bFif7QepVZDTyZJyvBfTLDFJA7KfR1yPJLJQqqv1smTT36BnMJpMSqc7",
  "key7": "NCg28rSz76xk1y27as7AAg3xgm27ajGaBLWhPoD9dEQzxwLKin8RW1nbryf5j3QRWxSyLcBdSsdDf1E8TwbM6gZ",
  "key8": "5CHtMqCX86PYKvT1HitX7N7T48hnr8LzzsQyn6PV7LoKyqsnFcyS2qABdb6VkNfmqiWUeU37imFyEn5sbtYgJxUw",
  "key9": "2LHj38yKT7RmPmwjfbxC6Dys8gZKW6KVVhu5sBK85Yfm6PVAd7m4z5tGjWFBnnkPxmUmrSuJmJgXr86HeiGr4jbm",
  "key10": "5CD3NpcCLCK1pLySTuMa5TZibXeLtZ9Hu2o3XnUf6MuMWn1ZhVqTw2hiZkrPUgE8U6abrV92bWRyKVTmaGF3WNXj",
  "key11": "322xgVWuvUrMnHvH4kHtPJ24eVSWWncqWfY9wGzqamHSCnG9jx2pmoVmusVKUEgJ2KwPRvuShn2JSAbyf71WpZwh",
  "key12": "Gvh3tAFjPbqQ3XPERbjFd6ii9B4anD77oRfG5bqS2HKSmF3EcFJyUKWBq2s6PMBEPZfhNDy8WeowKuz35CUHKvw",
  "key13": "2EkWQ6d2HodBjE5okpJbRD39cH6cdx1C8SKxtZ7gJUV2zMEaHdKiMY7hQqA8eusCMs2oxzUWJ8mBZVdtBHASNPYi",
  "key14": "2KcVjFVnfYxhi6NKEWAbj2tbeGfBgkMuX6pQ7PNeAhMwXVwZVkurcSHPNMsauZbpwR6sujGVCQ7AGomwfy92wKNr",
  "key15": "3qcpvEMTjCsbutr3CJx1oZefo6uB2rWemoo5qoX7WA6g6SPXfYYdtwnYhQtKQgXSVMAoe5DHhRgsKVRtMyoKWjXa",
  "key16": "56a51UuqzkV5DMQfiXhkRFQTCpYzj7J1kcSX2Utbev1PaGJTKu14ejYKMQnjzKyqosnDeS1nLkGryz2jDXDL3P7y",
  "key17": "tSYTt8KDfegG2dE5BV9TzhLRvGEQttigbkWWW1Siso148LAp5W1Uz9BzbvE1VQ86buYsCzi3ZAaS49p3TeCukHS",
  "key18": "3ZR3spmMTRNEQm5JGipCVJBrEN9vKQH8WBDFXcGLuASiLtSptF1m2Kz3VizVVRva99FBdB4GgT6njHaPQzNZvrdY",
  "key19": "2Lp5yFAtkVQjypUVcRitmMmLC8Qhf2jEMJBuzCqPpUucUDDgEjmhJfgZ69Hns5Wg2HNEg4QQiDnpYqXygKnGBz3i",
  "key20": "MFEtfya6WyeDy7B6Hy81ra3af4kDhEfAYJzVv1HuFL4WEZ7xyxy3ypZBBtMMynqXDt6iVMooWH3HepvfBHmnjGW",
  "key21": "5ra2hPyFkDuk5LpBkkhgvnSRAEm5sJPVaW8wXB84tYf6JP2UyPfeirtwmjaRcSoCW2FvxQpem5vub1xzU93YbHnp",
  "key22": "V4NnJBeWXsqf1kDcFiYardGGPTBRYQLq7ZtbKAWgZ3r9PAGDWtNJwBnbDH7QgK5n5kFcEnm87XnnsWSX6jQwnyV",
  "key23": "AbcL6kR2enu1xzMz86w9RzXbNHCDawyNRwFHPrKmZtQJpHNHt2BKxuu6ywjumCN4bqMEAAjaEatiZpqCihBskDU",
  "key24": "3Fge2EZiq9YemzY26y5qrGdTpLyvKfo1szdd4iZ4HjED8XcgwDFK3w5VqZywFbRDteh9nqZzpp3R8yUxu7pdMBwY",
  "key25": "2BoPHcMFWkFH6WEhbP9ZAEWQ2EhWFJqpn9bfebGKiMFKEDWYJXLgVxFHt753zLh2xf5mMGasvGgj3RbDAskFF8w9"
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
