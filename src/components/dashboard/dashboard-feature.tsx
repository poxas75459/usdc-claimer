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
    "3qzGaursdCb7xoDdMjDNCL3z435fcZ21HmoNW8j5hkhP3MnxNenhsrL3knmjGS2QHpdasip7UbZNxxutiQbwNozY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SjmM9B5driAUcMjRYqE3JLJE32X9RpisFTWLy9ze2LBNnJ7oc5AazzLVmetCQsJegXJnC4kqMSkbs6WLESZf4Yj",
  "key1": "2yqFMBwiQ2oUbkfM3NfYnmxXnR36Sw5QD3sqzW8BTb5zrEiit3gLuLKPK5YrVx6YaEJ3eyRR49fhiAEdAZE7Msrt",
  "key2": "3LN6gfxphn1tRqRjv84iWJxKjaUfqfdxFpanfoWxDt9RVimqy7z9tgc1HWRfk6kSUCrUpm9k4av6sWQtp8tJEa5H",
  "key3": "3PNq7xCe3cCRKZbUwMwxAeLnhhN1HQ956GicAcLXhsPdKGPVCrtXCoNCoQc3NswrJ5ddGCV3WocvTUQ5trTiCMGv",
  "key4": "62uy4iXvD4QnKd2Q924HT7Ep3XhsBEkvnDE8WRV5rwzRqc3eC8tEPakdPqMQ2kSxjQ8g1SvEgntmLViWa7ffBEHU",
  "key5": "5Ud2PJ1gg7V4AomAMDsStfGNQ3goXWtffmToRfZ6BW6Pfb9GjPbz3JnEQ36dk4T8kgPvZPDcboMYpzna3V7Puown",
  "key6": "4Q7VRvU1saJMj3ZUcn18ahnUVCKSmLhYSiCb5M4eVrmPpQwDGQvyR78ZKuHdfiP7jT9Jk11mAW3amSNritK9cdgy",
  "key7": "5awdukLw6uZKo2CQpytac6hrWciV9VEzjzPLr6SozByfB3C1Me8YMgu9WFJcPw323gT76YbEwJLVzaHXFEb9ZbBG",
  "key8": "3ArhXuZJAUsB5gsPftjdJj96wXjvZgmkTTVNmytNMnBb4gZrgNsRCQUHNsktyqYPNaE7HfF3HhyMje6HJhMvUtFk",
  "key9": "3UKvahtiA5MnXt6Kn2XnnKdXGQ1qH4idshYxEq3s9h7LhvGVVsd6CyK5DebCgtazYaNyLP5TSn4iSViSAsHJxgxM",
  "key10": "qnSecKwm7wh51q8RJ332EzoL7LH7bD8V8MWn2zdQ8VqA9B8d7euq8MhtMVwwKWyFNyfkkDdMwnxH8Bf4dRsUqAf",
  "key11": "aB915j6ZhXh3KDd9mo1eNkZztiC4bSznwZiDCARBXVA2ge4QcVgKgs3Ua29WfFb5CMCphQJzxBt8G5DAJM5T8R7",
  "key12": "4NDtttjYcqed6QCFNFqFPkNDah48xeUmGJCXaYko5QtSbTKxCL4RR6dC9KQ7oSDTapHNdvsPyBSXpMxcNWGingK7",
  "key13": "ASXMhyBqPuMWWRtKpgnxP98APmZoQWUGccYf7ViNppeGPVmqSXfYYfApCh3ZJCwE8PgoWHLf4ge746r9C3ajm2c",
  "key14": "2gbVByWbkYiiDVVwEvmgFTepgMj4siVk2j6Fj9bwjdrqEoGZHAVCb7gso1Pyx8mn3ghddxcoomHhAJMLiXYxdhTk",
  "key15": "uo5Pk9FpJcEnAay5ibnmTgfBC6gZYvTzqYP1k3wBw4i6Uhs7uyt1LutJo4xEivpDPmRydgmo4JVJFiPVQ1T4RuA",
  "key16": "8juGzsJRHNMNPjFKmxL3U4dRSWteZHenHzzZDzP5WKFVg7nLz8XQ3W3nMm1NNmTcTJsydBT77gNe5qZ7kUsZhUC",
  "key17": "2qNfEu44on4oFXHNFy6K2Gfja2cnHZKDd9wCEhX44xHkrZUF22grewp7LVZBP7YoBeJP5Pz3iAU6JGojRWC12BuD",
  "key18": "5m3L4R2DnHZ3YQMvNFAbqqTsm4BFWvZK2K3RJ66mbL4HdTwNNw86y3w2nHKudJrdvJEhNmbsVq26pkxcBbgUNnFk",
  "key19": "FwWjoseQYoHVkA8p2RHKHKH4Jy4dpV11ziBkyJ91z2H6kh2WzRxDw6qVyjEP6YBZ3Xo3yv94cndYo5jnkVimSUs",
  "key20": "4XpNFqKhA2U2XaCw6YAdUAS3gyk6xJtRGgSNsWgri3tQpvMezmFNwMtKXUEqhpddw4r5H2S4RaV8N5xdYfQqwT1C",
  "key21": "jXCU3Ycxk5VGP4nDMMmEtfod4mrG4ZuM5R96D4h32M2xuBSm7pWx3T1WkSc4q23pFL9RAkq6VH1vB91G4kLLGmn",
  "key22": "5xbXtjaHuJfn7aEx1WeCvfv73oZxUMB9XtkkkjvbLxAQstXEGtYpQWeTj42QBFk6GaNd9XbMzaryK6zRot4x4Xwm",
  "key23": "5DsvwKEiY4XcCWzbbHdFsam51CpAVnBNmbCeatKcDzMUvK6AWmi2RsUo4WpX5Dqg7NhVhJQ3zWbi7YrA6DSC4MTF",
  "key24": "4AgePga6FUhoaNLoQXv7CmdYQNETQJihfS75ZVzdrfjWXy4FDEGTX8jMXsYPKb6LAxvKxtYSbCS2ZFVu7S2Jtv3u",
  "key25": "JNS6WkefrJvp35jcuDwUtpjwUeijkcKM5PM9nwGj2CbLA2RH3XYMVWnddfZsBbxnLuW1DdnLTNMj1PNg23yZds8",
  "key26": "3XMtRKuAVZncp2JrGoCnf5tSVWKP7S4kNiXwvrq3h9Qik4mVb6xwhsaZmHw77QC9neDPrLKHd6kc66csMYnMr8Wz",
  "key27": "2hRhjPp9CgZNAjupFULHLUbuzsbkjccnGh1oVPM2WPCdSo9EoJHgZGC8PBizR5PPtmx2wh21VMuLJpF4vZeyv9u3",
  "key28": "52cdVHr7YbjK3zPUgE3H5wMX46yLWK9pSrXobdNCNJD68c6Uh6AsUifGFm1uEuZFQRPLMtueHY3kn6poyoKvPKWS",
  "key29": "jPdcKXS4oQtFkcRZLJiif2CCRWXVMs72Ls16ide1MC3fY9UGCGf2PsjSZPHXs3nBx1nPvEQuyk6oWWsgE3doBF8",
  "key30": "stP31yEuKrfiAXUKt3S3QCGn76WQQ1S3BuL2jRoopzfUHkwZJCPr3LwJQbVKDLZtqVzzATG3S9CscpB5jjoz5DU",
  "key31": "36QjinsEvG4FLE9gDZzUydFDkLjXA1uWrjYza1yNLkRhvk6L5CsVqw9HdVw6fHXtkxFMM33BX1FVpsTKxFGsprKV",
  "key32": "5mSL8simVJB2ZKuLMB6UF57VTocwyeybgCaNqsgNXXgBFJmmbFcqExqtFyuJuUT1FpcMojq5kUU6uEvtUiz5Fudc",
  "key33": "32b45t4sPeQWq8xS7qcHCVeT4ZnrjcVx7CTMLWioXiks6R8gVaeXS9qtRb3cwYxHUffCc8Etn4nv7LPWTfB5dsfZ",
  "key34": "3NUFupvKxM2QkUHDP6spybmLCKzhafanUjMXEEFxMdnj25wEbpwDDM7aRBXax6wveA6YtXzv3QeznAMYBnDyEzUh",
  "key35": "3WRd9bi9XQBv15qFTAZ4kdUXKL7HFdJiFBkyehmwm8Ckpdc4dyLBqCQPLC5SLFrcyxrRxzqFHWeCUKDCZwnnGVju",
  "key36": "3MjsX8Qdsvdif61cfnimDUjbaXCugHHkwBxmKBdUJkA8yfuu2oq5BtUG9L6fAnLxT69Mw3P2SM4Cfniupccg4Nb7",
  "key37": "4LQ8N5p7Lnwg13bxdpYEcMaLKzSfxrAbKCWhyPEcbp2BWiHRcHBDeuqx4WUgh96tzMMPybbJsftVRe4oBsgMZYzf",
  "key38": "2yWAUn1CzSv3MkMMu8HhGfERQayAVbGkptfupw8EP65V2KujSdS8zZoXa3KmtHgoBZqYot9Msz1te5n2z7UNcEho",
  "key39": "342qoe5abeuPscUkctkW6MS4yik7XX23NSJeavKPmZqMaSz5S9DkeEmAbQSqEHku6v7bs3LwZSNQpjR7CUGMQihc",
  "key40": "447w9G18jGjPjXQp96Uze12YDsVCLjHMQqHVfpEmenZu6AMhYjoRLMg2zVNEgj7sC7ARQ9LBqhSSiCivNYQhvTNo",
  "key41": "2HyXMfwbQ1FGvRCBjCrx9UmHUnHsYoVXcEjEi7Uvsp1WWCnauUrhjnAF8NVSDHHtzcVP7VjSz9mEuuxPwXVgYj8E"
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
