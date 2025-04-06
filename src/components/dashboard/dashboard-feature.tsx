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
    "2L39d7ZYzTFzsjU5CkGiwxrq2RGUP1ugDnrAjAQ9KDUr5qF6Xi4ViHyssqjqZiQ6ToWzUgYxt8wYWtu82YMDj4Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyEaZhyteVZRt2RVpdWsrY8HrNZv1yhBACsXTbVcdv2CKYN5xmCJ7kyDvDzz8y2YSKSKGJXGadbUKZsjUS5FdqQ",
  "key1": "5NbzXRUFhVJpTG75SGLJT6Qe5M2rSCxdRhYGrUWhFA8Kyf7GZ9BoK6LR4fcFiZis3aMo9qnNft7n2pT3gtGTL2LT",
  "key2": "EEHomoZgXy91dZafSi4JCMHJa1BF9t8LUuY1C88HshjTmArhXpvTfSXyzQmJhgsyq8Txvr3sq5qNSNXLCYtJo26",
  "key3": "o22DycuFWRmVrZ55kRvrrnhPvjSMmWy74Qzwei2tuUQf6jo5QXWvmxpRZyFBAkbGo7t8YoMGHNuQD5NMsuZWqea",
  "key4": "4aZF5fXViWyqyycGPHz5Ndxz5Ver91nYmxfVXht9NbTXmgdpjKb2EQKLFkS5MGdMMdXgxWyuqJsiQeEcWiwYru3f",
  "key5": "65JGew1NoiEzMVtxYWn9yai9o2Hi5bzWDDRQoc9dPtCZdDUYSmHcdRiDbBeASNLJTanQLWb2ev8qyf8Y5Ab59k2j",
  "key6": "5qYdTFp3UHwCnhNG7pUJ17tYu4vVkm4moMUvwiNEBMidTYfnQDw7ERLCJ2XB8VwixEjRe8ELmpHwv7Pa8bbMQS34",
  "key7": "2wkqV9jEKKjDxEX9osJaYS1nxUN8btsWcqqaapEzsh82hhieQKQuP1hYGHZZR7SyoD68WBDVKYnWU25c7Lwk45Kb",
  "key8": "T4tncHM18JywiSJbxpuwgiyCFNFN6TSQgBy5L4H8dCF7fXRicgak7viCzX417eWYUbV3woFTFFmMNB1pvsUZ6E5",
  "key9": "4gK1k9B4mfigVi1Uc5HEwnrXeDv3NshDFBxs8D1imEbrdSnzhmqfFh3tG91t4kiKdZqUE3gvi4Ur5X1BDWAwQfHR",
  "key10": "5cmjhnmAXjhEpRoZt4Xp9SxyrYLvjTuFeMrEfF2pUGmkFMMkVAZ4YS8N85zFNSudJWsGX2zyuxxVJgupTW1xPsGi",
  "key11": "43Gcyr51RNAgCZycwC1YdSLpczAfe3znzuz71A2cR8nuYYzZAJe9JoA6WP1mJvqfnWPMJjSLJvG4hYqZ3LkiZ75G",
  "key12": "2hU5yYx1QF2wmhugHvHbgQzzT5zBUyVbbtU9Ez1dFjHrvdgLm7rpksX53uZoqNMR8iXLmrnHVzYsA5CBRhYLZCRB",
  "key13": "5twyFUqcp9i47oZN2tMjGJypw7GTQFihAKUp2f6uhmQpBFWj5Kn5jbvAPuzznfR95va8hUZsmANNebmfawzx65cL",
  "key14": "41ysAe1Tktge2CE5qkTUpcFXkEUwC9XwN3BHq8aH6Faj1r3ZGrzheFALCNAZAGcRg7NwFmLNCB36BParUqUQT1di",
  "key15": "2djM4KX8rwQLTw2ddigdfQjnEYsGHn8zrUC2QoRjSgjYLavewoywij4FafUZnQcLFUjttdbA8eoYcJtD4s9qhjQG",
  "key16": "3tmwgZxkKNmWTYFHirhog96fr4ZQdU7Aj13eAtjAUYAoeXubdpwSTyPa7XUeSz215umjDJc4v4QasmEQ2ErvxKu6",
  "key17": "3zcLk5f7136njCL1nQBo9mbKQN6q17mYEvrfDnnJ5ksQP9JLBiUXsHtDeACto8zQsvWgnh46q7ErV9jwUHqer5BT",
  "key18": "4Pkzat8kf1sEKv2jjL9stryJTEzsar5R9fnPnHYWgWvh5Maks6wWXGayAfgiRZdsWs7pfMjk9UgtYw64RJUow4UD",
  "key19": "3tYYTffVd5vdmFVdabdWmLkZz9Bkp4MW6MSkAGbKfukkZKtRVpe5GEWbmVgc6HbJavXTX8KQTjbL82L7iZRBGgpW",
  "key20": "2kGfpNBvP6Sp8a86UoizquY48mevK9gfVmbeDjHhhkU4xmeUAnMEPT4uL4oBhN1eiJ2PrEXab5uqMLcVT63N8c7G",
  "key21": "572kiF9AbbaDjvvn9FviZoMnJ78xf9qmGhbbKUASENB5uH2gKfwnyqxdfKFpjJjLpR8SDEJXiby5fZkUkTPpqsY4",
  "key22": "kkh6eQbKt29yuYbHpJA93WN4kx7XA3AQm3o6oAMGUbqXHCTgnbbnAkRBby4HMyGLi6PNJmzcYLgBo23J4tGKtP9",
  "key23": "FoZfQBdnUURmePgxLQaYZjrkyctYEJdmS2CKmEbSGwX6X2RKS81ZSfQo4jYq3zXyV4nCdNBv4AZ6ptfe1zn1PDv",
  "key24": "4HKdhi345oS23MUFtSqr2VuDfFZtKaP9VjkYoE2oLGaeejPs6d5ZkVLGr16n6vfh1rrMowQWKekwqYoQtyJhyb7P",
  "key25": "4n9pYwjQ84dW8mHP4X8ryak2dLXSsJzgVEJgeeTYHAWAt8FgfV5EYdtHv5x2AkdrKHfcuQXg8mLZNp4zRywHHE2n",
  "key26": "22sMoWVYCyXwsCwpScaipKZAmHj58LijKBrRL7K2cYehvEADX1sbdNRdyuKfwpg6iQ7toJ7f6SY6zBghub3ZWxrB",
  "key27": "4XdbDJ87F8PYaTDQgbN8onGsjKfbHYTfb3YxfUQiYGW3VKKyzs8hEy2VYa7WnQwKqBETJfFYQmrPfDtpi2h4wtsr",
  "key28": "5fgw1Jv11vFvjyqhB8A7RmBLwG8EBTVn6EJt1LnqCkhK6ExArGac9eycGTy1PBr75gntQme4xeNdMgjaVJUHhJUk",
  "key29": "FpXea1FvS5qfyGkPuuasNePztKrHdR8VFpyUcQqfWd6tXLTMq65pwz2Y8xdPKBKDFJMxEJ8gsXxavwo6ncZXsQ3",
  "key30": "4yAGt1V2m9xwoCB3MEzMbzu8VWTWNk2SM5hPfDF8iXjb7QmqNbpHaSUK3423UUv479Byhd3Uva5vxrN8T3Su2dNm",
  "key31": "5xN8YV2GnkMc381GRAYmU5euYh3tHvof4E1tMBQmDPeYuMCfRtzPd8ZFj3dxWo8zjL215yV222fdZ6icQS657ZAx",
  "key32": "31dSVjEsoNjTGMVTRJpmHjUkfKzFjpLAMsaQdmKqTydkhSc2gCgi8ya7foW2ujA7y4oEYqqMFdqYZAKnFGQbk6BW",
  "key33": "5SKwaYyZUraDSwcyM8CNSoJ1MZuvPyVn6VXnYwh8AjRjChKwx6XhNkoyWyUKn624T81tWC15pMFwSZkvEPLWscLH",
  "key34": "5U1dHP3XioyYZbNpYMzgvWXx7FAmoRmFGdsMCq5FgMmz2hRg4oGwt93teVm23UyPEYUS4srWScTQEGPStP19LKGD",
  "key35": "2Gg9mXBTup8PxgX9ePti1MpaV8MByGbbWsQA74Dp9NTTLTktwx12CSrVTcN5W8bZdGmpQ6svqThb1wei79qZuLo7",
  "key36": "4g2MxmQ4tSppJCw1yZBwp7kwDkimGTV4RC7QH3Km4ArNzp9qtBm8E8KkG3rnkjPqE7CMyFQGDbdCpGJYkaL5Re9N"
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
