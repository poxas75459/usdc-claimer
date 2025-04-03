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
    "5kjqnnJfAWHRbfWCSxPxpzMWG8M1Tog3gLxggJRqBd3QkJ25EhpVtntbjDBrSoYQNh7hu6cvZfHiTepaohajSu9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UAVDbw1wU4Mhh7zCUdkhSLnv1XTM2FFonQjACvh6zQb4wNwMdezeRhPbTQ4E5jmp1md41y67UPFZ9p8zLQ4KqQH",
  "key1": "4AEDi4EAgPzN6SMD4DB4asTSdo9Nk6WbvWVWW1BoqyJhV5NPDE9jJnLSN5T9THyeJyvwLTGtK4n4sFbyT2NqLdhP",
  "key2": "3b7RK7oMqyt3h8XncSTqExCxZAsaQoN1QBJxjyFGq2zxn9v2u8rPyyc3WBbJi33dAmo5ZL2TPU7rRNFY9ay5xvWf",
  "key3": "3PAX4KoLPGBPmpqRNmPzMQYK1XgWf9mXuZVzRqBYpBp6FJrhaP4zmpc8W3tSJ1AgMgU9i5dMiWartwier2EqdSnX",
  "key4": "3PaGe1jPQjLFcr8C2fh2DStMgp5b6DQnEjzNyGr1VKESNEVjw7kNoZsbWCjdtzBC3RHUq7N5swWL1RNPmSuPXYeb",
  "key5": "4pTRbXkganPAxiF1fg3KzLhDWjD1rcXwYcGyPiQupxKbTbUNguX2tyCV9bNFfAhUPdAiPw5yQKNYkkfPynmiYJmL",
  "key6": "5Ftxa2ySifB9keHC4NEsVMcQkkHwWgf7oKr3GurpZahFBbRT2Smw1ipycZnwqYeAf1GHwXbY33zBYRFUkqgkEce5",
  "key7": "4X1W1NZoyBJusNi8weRmMt57rqPuCrZJ2qGcXUedXeoFJmZMT1v6LHqyumvS5gGuzwdmCpDwh2mWMkzPM3D1GT85",
  "key8": "W3cf4SKYJXwkQwwhYiC2uPEtyJMqoE7qobRqmz3eDEC6mdqqu62pJ4BxXbJ7mY1TAmtm5NAySu7UhqRobVVjiE1",
  "key9": "3bJvmyKHJP77cJ5u5doQR4RpVqF3xgykjNvjEvYKCfpXpKVZqdAfzTbD3qMxYAA3jPPc5oF4MyN9kLh6u3DTjut8",
  "key10": "34d9Giwxa5uf8Uzyd31Br2iK1LVSg9q5ZFdfeDGjHiC8X1R835DRq6Zyx62iZmCm8i7536x1nPMHyTBJphCsQMQ7",
  "key11": "2enHvvnTEBw65yT7ihLYWpzowtwQH3njjhAXabE4UD4riaPjj5TRTKe6zmfMrrkuJbQP4uQQuD4MzFsgjJ93fXRY",
  "key12": "4FG57BeFhGumEMuTbwnG1BKFfx239gGvzge7XaAZK7c9QDpMt423c4K57JXD5YbwwUuKv8BDTtKpuvVguCFcAfHM",
  "key13": "3j9jtPR8PnCxVxubLWM1aLTGkSRy8CYotTJ8oqqFHGX9Ax94W3BBs8Z9T14PLeiw7unki47ZZ17MDa1Ytx79ZHy5",
  "key14": "2aWNxBkRsYmapcwiWuWZqmBX3Muf2GZB2zY8ffzTiyYoYscJsCoJQx1HPmqJi7WNgYtPe3NTaKfDZi3JekPf2ksq",
  "key15": "56jdq3G8RnYPJtGMpenmFfsBfoU3mNohJ24WtJeW4h4EKxEKCKdjNk8HHMCtEbGyA4ooJonguHuf4CZPWJiYgDgU",
  "key16": "3LFkyWKGjHMQTcptUMqTRj71Eoe1V7bNhsaqtFABzJCnumkEoC669RwNBARZdkXirUSoEjGKJhPwRzXfRYasZ3Gm",
  "key17": "36C5axVP8mFfsMUVHYTvQiR8pTCVoGekg3ytLUm5NbkzAc14Lof6hpDA4bGtpQvBgAabGhSVAdzeo6apKGFioWWC",
  "key18": "6287vJBLVbMDt4m5AVSErs74Ls9T5WhpkasSZMGBzQabUKj24zzfnirJYz94rrSbYDz12R1vwuBsaLQiYS7bbMAc",
  "key19": "4pj4DtpmMfW4HGtSDtFQdp9ZBQihoJM1rYRG43q2iocqGF9FsmD8UA6PzEv9DWA2so5AqxKKmrbn1E8faUrb2SJi",
  "key20": "2nFGrcjw41eKoGv7R4wPfJapUCmbvKUeX83jUJSXSD7K9QWUmRhmmV9eBzh9eBT6B7r7q1cennrGSnGRXhdNYgHo",
  "key21": "2hbR2zw8jZrB7GvdyDhHECkxtEHaXRaMeAo2baE1VoYDox3a4NiZATtZr1N5KLiwP9xugfX79uLFm6d2pUQiVHx8",
  "key22": "2MNnQpyieeoz4X9xy2LTSDDsdrbgTNontvudQWqXMk11XDopNJvGe9RmZcZmU7oDoGe3cYsQiyrRAeXn2iK7Yvuj",
  "key23": "5ZrZYHTTU5ZRShYiMuMdCKMjPv7bPphR7Sa9sUStKvYBMgwXFWz23N6Q9b9Md3GUtzp3mkMjevTtwxhpz8R8nE8o",
  "key24": "59dE26GAGTGXgvwNs2uX4jfkVgwzcMmoUzPWuBkqUPpH89MuDBedHUzkP2vxtdWWc4DvcPuZ2z3mJiLY4VUDzkVv",
  "key25": "3UcKmF3hx1dTEqsSHjTjSShnYpPjqLnYhfQCryji4qUTP4yFckmiSLgnQA6VQrwCYQPxiKcCZQ9xtrau9Ant1ybm",
  "key26": "5e8A9UYsJPVR6uH5SR5mxu55UR7Pbdxv2kCmZiArtwkd7YBXMQJTJXq6J51Z58gQFR1E7DxAhaafJVznzgKsgBht",
  "key27": "2yf1hekobgDvARwenYxPUCao2ZM9mRiX6ffyWe7Ud2uE6rsD9b3r2ZE1qGuHQyMjBQ6acGJCyKCF22pqh96Nqeaw",
  "key28": "2i8upHpU3WQkU7ZC2JgFrzimEsWwDDM9QmELsM3XziJsfBq2seXHLEdX1undrN3hV5TpyJDUiRiiTyfWHcGiK4DV",
  "key29": "Ri5vU3vtYxPWYLwQiLaAJdwkc4AcrBpx2B11DgViZQYEkoMrTQQWifvhBB2gG5shhC9Yc1ubAEZytrzPjEq32Jm",
  "key30": "5jiH3ub1vWgiEEL3ALjheWotK2cgmrvZrQKNNYDMSxjqtwwnfYk6kEXo8RCDB3352CTBkwzGTivgrZjthMvjJw7P",
  "key31": "G9r8J5uWH3LZ2t4zx8guaf8djh846D9eWZNgNtVtHVyBpcszypySWRvDhGoc4jTTkp2wWQ1v7T1W6gryp2m1feH",
  "key32": "WHztiaTbbgDq5KPrQWbYAEFxP3Y2h4bUvfFuJkmZbgSE1fPTjvXkkj6ksEuXqTDCFQPrydXWKFp6dXVTTLs7aFq",
  "key33": "3cGxZ65zj7yLsMMWQ4qRtvAsAjiLb55gMWrkb6yjx6F3PeYAoe7kA5xewLUdM96sqynZmufmmvK1anNGruuaqkPQ",
  "key34": "4bwuKwHebwCxPgThHeRqKBo6ihmLe9ofPeKF9HX4TtSCRSRhZaxq7hkMvXm3gcRKkmqErPHVWC8vRJX54Etx6aUY",
  "key35": "3nrsk5EykxhuJNiyjNkgB1pzpHqyNCskVMrdztn9LskthBKEbmYSHpoZ7RX61NhsBDGvZGxCn2ZYyzKm5dGbdzyD",
  "key36": "3WR6J5B3x1C8KVFeEKhkKmueZCiyuapbD6Ve9PFtvYVrow97UQdA94DeYCrDQTKCZG3WkugRvztPez25DkFCHCnj",
  "key37": "5aSQ8S886Bc26hVvS9UJaxbwpbgnnw3zHuutkbt21rXhA5DQwpKdAhSbjUUd677mpDamWrkotH8p4XtnQ3G5wqeZ",
  "key38": "4k2ZN82KDr5dzzb9E64XkJVj3Zajy6yec7Tm2rtWdtjEbrha4g4hwonWFiVMW3XCP1Z3GNfAHupX2SaZfbMV8iBS",
  "key39": "4un4Z8i2wrwucf6tKbCtw7Ex6xbRFuvosPbmvsp9DXbrNxz5Y4AsFQuiwVrsYACxa7YNCAaih7EwHqFNpCC9H6Mi",
  "key40": "5xvhdsSWSMnxE1yScEaTKb8uuZPBK6DLVvviGBJjSYEcjS5dzqMLjaDtosU5JFjQCPesuQDdLkhHNScT27jgq6BB",
  "key41": "2zNmFRmYQ3cCjXJ1qQquTDrhFPoJCLt2iQitfMoXBJrH8gNoS2C61Gnvnt5jLK1aKH7PnQKnQFUDcVvsjVJTvW4E",
  "key42": "2vX6dSfBSZGRGkX2eE3HaLd9rL6BrXrH6fYvbM4b27M8XksEnB72We77CFjiHRrwC34HEryByiFLeRNP8jukVyVs",
  "key43": "3BVbTkqc4QkS4fDzdnVuLK9cfpJXsWJGWviCjZPEPiJC2cCNXZQzwdpu83tNxXWX59wC7zjL7FXHdsrhA3gtoJ81"
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
