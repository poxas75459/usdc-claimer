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
    "4WpwQNCDWYxospaRCrjzKbRP4jgYWvRZsh2Y6AMmQYuGuqZV4uvhhBCvLkbuXJEkhjbvBJGLJFf9L6ZoBxfVbasP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TS2uzXA73tEdJNbei4GQLkirW4d1DP9VXcYH9TMJUw87kP59HxqGgm1vKMKxYEk5sBx5ZeXN8XHezHBvY6UXa4",
  "key1": "5VYkK1493mYjV7ALMcF3XaJPUowgdWx5k43kacTTBJJfgMn2V3QynmmdDMTPm5pqmeu7wMpNjuSx9h7yrG2pHvzv",
  "key2": "4oiytYVQmMRMetvUZNf5BfJCgu7TCQskLKkVCBY6p7grXm2jT68iPmo3r5raSXE1UYRkHXXEMvQQUD5w1MjaTN8r",
  "key3": "2SgNgxeVbghbp97HLzNofX2MWAN7ECaBeTo73pGU24zZU6k3SKDt1zB1KTUzxD2cbyyxFL2aKU49moW3W6uNzVcU",
  "key4": "4Zt4uHpArLzZDkuSj29gAdL4Z1Tqt9kuwYvmnxXiju1Q72qZytnXUJmVW7M2xHyhRD77KcaVwEfRGj7aL7ZSyfMP",
  "key5": "2rw1cM5qrNt3Ei88N9NW9zjxR9jtQQ6T8ouAafTzWPkBznBULyJNbfDnU636ykxJXepx1subzqoz5SiVF67mJcWW",
  "key6": "2AJ6Ss7qPTfp6d436ybSVDvPLJySoMkzk3vY73EE1n8UwSu2nTsAeqj5JDAAm8ymX3bhYQffyqyoMU7zQT6fj2N7",
  "key7": "2XqY6fCAoGWaV2TcK8xvf9LPdLnapC64oNWcQEX19Jz83ikndC1RJCRYvkXaLPVnnJsSSCLP1AfveWnVwnt6rmXD",
  "key8": "66eAVpo48g8G858HKtRLqcy5UgEqQopmFe9nqQNwKk1DggoJRxn2DKNCsBchR6P1w1Jacx4YHAKneLNebCCNRwCZ",
  "key9": "4Fw2M2t1hL1jwqbsGxCLj7stLT15BvoAVTqcLu1pudRZYcC8qZZ3pECi1qboURWS144czryvYP7qFF5MdL4eh7jG",
  "key10": "3Jh116fweEkcS9nhHkptk8DP34T9nV32bHwKtdNoUZ7vUThcbj6tfsccygcvnefPC2ry9sdzmaQYhbp7F8BktofL",
  "key11": "2owDVWpnCb2XjCShq8LnZxHVStbzscedPLUoxwNgoyMdb996njhjtQ4z5stKftaPVkMwmw12sWth5zbs2diotUz9",
  "key12": "4DYRDaUQGuzhJcNRWde3isx4xaYWXZQs9K4N2AVR5u1SVky8Db6pKgjUyVetzcEL4ATUZkvYcA9AEPZNQMXkpJ36",
  "key13": "393s77wockkEV8SgGuw4DLxW29pZdfbz9H3F7rndPkVZU2oc1FvhPXcj4NKx3mx4FJiJHW5drdEVcvDGf23PbUt1",
  "key14": "4ra2jFkdShCbirciBhgrqavUxGVAYjWR9HyttAsjkeVn7FP6xCwXPb5pkZ1WVYemyCh1f9mayUgEabGutvenkvMV",
  "key15": "53QUUcNwVHfh3aXUgcA3dP2KLBSTiSf6dxVwYydBMUPnNsMchULv8Y6bsNJhj6pUyywCB6QQjqhwVmCdg3Revjhj",
  "key16": "56GLDBDX2BGFuGa7brgG3xycgexxpEt5D5AEGwGGnj9i2oyPL27L9x4JbJZJ6MbcMuEjZDqC6aTcTabh6MzXdHGj",
  "key17": "iBe7LJSWY1xV3c8ULRitsgDdtP9qj2RFEUKDbKJHscqThtokrPTLT9pn1TCuLc9s8p35ZtLux5A6n3Wdh5m1CTq",
  "key18": "5DL63iPiqXii2BUS3gFSbaALBNZ9cv2iTtXoWEqvsXpFYqdjdCnnCvGRGexTgaqSjoPvmE3jvnUCdLTNmxH78FP2",
  "key19": "5ngdC9oniLcbZiuavEQwvoza5Uo4yeny94Puec6XwK4o2s46gqysJ88Bgj4q9KEqW38fnTiyALVimeSqEky98KV8",
  "key20": "o4tnUNNECtfaXZMw77KPf5nxbxkXtqcVyRZHMkWPHwBt9E4EjxY3462PnNK83Rd65BCqw5hURKdwGCBXa5ccVRa",
  "key21": "5RxiaY8scoaDKgaLPGPufxoUZECqXZYvoNvhFwq464JCrbVZNAFJ1kSH7gvhWmZgR7JiGi8Y3muCCHz4c9jZrhXT",
  "key22": "3arNYbW2pYjnb7712Cd3dxDqaC5guWthGneieNLJzDJd3ArjaKY7SgCEBK19D5QQfJzPnrdALeR75ZQaqoT3CG1E",
  "key23": "4GHFwV5hb9nUG9MS8e6eqk8J17R31ZZ1TzgHWjNb3SMYFQTZSwnZcC9nuKFUUL3HXsiTFGPCJQ7iRQEtdCbSnE4V",
  "key24": "33qXtmJ5GSsQRhSfyenmuomXGdzcrCZmz2JhpSrNSLNgwGwUg9MHDinbTs7Trv4LrRFEu94a9ckuU97eDtnip8jm",
  "key25": "wAasyoK9uWDwdA3g57qWx96tF5xASWNUFua7vq8FPnJooAAnomkL4bybtCdKsCYn7YVSs5LQKvaPvJveECoPV2B",
  "key26": "2RdGMa3PBG6GVrHHLqisQc9oESRrNyHxzHVQEBdMgWhk3GgUATGWv4T9dSveGbWSuo9uLny7XznprhacjNCbSv29",
  "key27": "3teGsCk5TgYvPy3FacmP5rMXUE1P7w365rNGUiqn24Wa7BqYTvm43VVv3Ay39YFMPGDPsnXXHkgLBhsQ7D7LscAi",
  "key28": "2oDnjBHnP2qKmcAMtPihKmHbGm2XqS8mxYY3SfafhwRpqXCFNVLBY1deZvhKb8ka14FsingrAG1G5XbG5NmuibGD",
  "key29": "26pR8PMTbgXcdvUBoTree2MM42dipQQsyfFLvNczg81mXN98iaHwpwZRfEnGAecHXZcFGUXPGBxAhPaAq1e1SNrJ",
  "key30": "34zH4yurkQ5kCQnXHCYGeRoQuFuGCWDD2QXH2mZXivCwAiDoMvcRwMEhiQ5JaDoXruWqSuU3vyQzybxjkwzMVdxq",
  "key31": "379iKQ3s1yrTnQ5GJGDT1bJxJout1jCzD3ii76RggDDCnP97ozVxeaqJeHSiV53cgiWd9gh8fQV2mPKZztNSj7UB",
  "key32": "4EVMDZ5CRLtLoqoaaT7HDEemXLwcNmTWMsTZM7KyHkXpcrkz9TZCHyi7LKG2dg2FXrgKE5CDbczhDgwjJ2mifbdm",
  "key33": "2dwqRLrisM1sBtViMN2yELfqkcDUTQoauJZgEqfV97fhnaCNvTZtEUgVmRBk5ymLQjteoGxif3qPwLFJBedEiWgq",
  "key34": "4va9bqVBw7Ay63gsVmtt3ruxsT1ARa97cmAEGyrCYEErG6xvXG94GNgrgFiy9AxLDEWksZN6X5SdgYH2RsCHLkeE",
  "key35": "3vuuDLYgsXT5dMk5qp24DDZKX2ksHX7cDtd7PG9ydZAaKXhUFDbKNThF6Vm9B1JKWDjKnXHSFe7xjtjxpgH16FHk",
  "key36": "4e8Apss1Nzm5jMvcVh8wfCnKfzi6MXKfEbYGmTdthpM9PPMQkXdrAdatEo1sGqBCfSSPAdm478Ay6ngLoQaQqPws",
  "key37": "2Hy3kteCoB5mx1ELSDJPYRPJYtGcqjBYJnvHumBPh7coxJ3gcMntDu9KXrrwjqMYMk6VYbA8LJX7N71tNWrFDbJ2",
  "key38": "2eaUaScqhP29G169Rot5SejCAxYk8JiSvHDjicG3zHsEPQvE6x8K74rpfZv3wDfkBpu6C4gX3XkGz5cpX6v4dRPq",
  "key39": "5jJrSjQuyxM735xHsi9jUH3ZnZMPmvRdGtVd7oo69SrwVhh5fFWtXQLgfV4KA12Yy9N83HUqL9SVWYqmD91dAZsj"
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
