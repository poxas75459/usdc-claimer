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
    "4DSzDoPJS2HvR3EDQ64rLoUoPMzTSUySQEy1nS6TNvDiukDvNEqU53m3c4VgUvznqS6FVMoxLcPFVwPu6SSU3cbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbj8KkXsBNTrTdG1jBzauQcydVeiXQGgFPtNfgLwqyPHidzZ198UfrySGreuqAomGh974ou6bz9uijE1RuanGax",
  "key1": "2wdgoMiwuyUfZpjZnpwmEP6mX5LE3HYPGVjAXBo8Hce1wVd5boheF2oYNWgVgbshNBCGLW4wXAWndgv4ox9WH6Rx",
  "key2": "5GpUXTAGw8R9Zy38NztkDbVr6MQri57MvaYVrnpHbejBSekgyRcwXuZLCxdNuthgAk5nDuSBxL2NzeaniLaTUpRe",
  "key3": "7ZAackNEqQgBuHybH6x45eFZjGLdV1roNaoN47DL5U4cWrbPu5m6b8hLxiEMEGxKeKd7cpsEoyDXNwLHDa7kn4E",
  "key4": "5ACdVjjN7DzKTNfUG3Vh7uXYnLgbZ48kzUnEMjif8XX81JL1UQ7kiC2QoHwGQGYmFp5ppoAUDwdzj5EYMC5f4hHs",
  "key5": "TVjWS2Kyyq16bZwFhZz8o6KGb35LxGkcVtnERGCaPemqQxB5McHzn7ZEABHQ9KqGGbTCnqhkiPCqsxdCCbAnxzT",
  "key6": "4paW4NCpF1Hg4MTsSNVNnCUPsxg48Ywvg92h5i51JPREZWvkxbnyNunMAEz3eXTxqLJgUShQonUrHTnaMYjHW4Go",
  "key7": "3ZbmmBmcuwTRPGkV7yoeWPMx9kLFJ9t1amFop1CTeDDcqnmUYrHN5uHBhLskbbgJfvq6vBUMsrUQ39zGeve4odgE",
  "key8": "3ThYGiNy5ZnniNdiLLdyFwjm5cTbfQ77AT3jYf3NCRFFkmphw9ub6w3gVGSF798KTrE9x4g1dv3C9Ubt23yzN6dx",
  "key9": "2uVxpNSpU9LV8kWqLwXzqaWxwzqRmEXbHEawbgEdWPxHTdQ88TbNVmeiRFUztS9VevrftR3cdkr9hedvnTXz4qHS",
  "key10": "4pvpboYE9jdEZ5se3ZUcLTa7r9r3EFNoVRjtdgZMQjY3cWXLCNbxy49kg5ApNLgHTcngnR7GPB7p3MoRwiSkX2mS",
  "key11": "2LAR7yMpyoGJDmEyPivfrhCAr8du7xUeX9jUvV7mmnLBNgGAgsUXyGoXdHjvNXBVEwPDmiw4KjuwVAm5deUJ7T1j",
  "key12": "3KDob6ieRUE4ytwf4TKeUszNpd6h5ipyLvt4YkcoPzGEaEsAzygHLqqha3WYkQZYnFH5zxe8tNboMT5u19cRgtfZ",
  "key13": "5QfZmi8rAh7WGCWJw88s8no6aT2NQq1vTPGM3sKnBPSuuF3hDrVBru67pZPf3YXqARDcExQcFbsurXHHvxf9iFJL",
  "key14": "8t8bnt85wRt65bwxGsVduQSUeoZJc8vvR8VEgrW7DVguJdy4czSnbHdjYJ165kmqhmP2RT5GCiLDUpkb5oTH6xg",
  "key15": "2QpFcdWFQgBhsHkewvLw9FjSwjNrACmQQM5gn75XnTgkiDcrEG8TbMrAYazCfdND5QTyDvJXgsPpLisLa7UfduPP",
  "key16": "4As5zxsqToyY6xSbBCoWn4MMzWhTNRNvSpNQiWhnnoujRpyvLrqiVryj6sv6gbo3da5bF8yY1BSsu92pJupaNvpV",
  "key17": "2AhDwC1vPYMtje5UFn4HMcxwo4UjDoAaYyJRCo7a9uvMDKfxrqGdXyjTteFfM3CSh5tdFCtTy2Bpf35XVRR9W8sW",
  "key18": "5bih4TnRD4oVf1F77YJwmGrmbU4gzVK57jtEFqz8bH7Qv23vE9aVNFsQSEB6WhcRyqViwnQbsWKaq73a1sKivLxK",
  "key19": "4UZscd6we5zPCm51oxqEZBJ3WVHPcf431PqcsdeFyAApXtLwaQRp1xVLvSzsbi1mYidRaPNS846sE5va7hNBcQiu",
  "key20": "2yoNdFyUgyvQsJzacWyAqVod9R6uEy3m94eg7kPwaeAHTN4jXX47e2XBQ9b4gW4odPoYd4QpnaUveQELCtSgErvd",
  "key21": "5TctCw1j4gzZ83TiszWGf8529bnGZxEX3kGdSDYvFNcjFREYd2dzJ4hyQ9NcupaH9LYMUVD5w3tjdVVP6f5qhU8d",
  "key22": "5w1BTZFeJGjhM61QvDP7QKri9hHhsEszPwFf1J8DnhbBWqU4TstCXhVVjRi1z2nUYsQSyoC24x5kqbVkrK61fm6q",
  "key23": "4vAzrDG3ChQ1wjEteYjkPHyyjUbyisPDviqT6z5Qn5eu1nida3xjSNrhrQTDDvL1CsXAmmifzjFppCdjgF3MT1cW",
  "key24": "23FWeFN6cb46bkf5eduvPTAhMhM8Uj9yqvrBigB9eD8MmpEJSW7myfTuNq9gnLWUzgN7opBoE5gDS1EzupJzjbn9",
  "key25": "4FBk5iBHXCLZWFBjTQTpWvHWYkyVMqnNYKxPP5p8kcwE4BK5D8t7vMjDsuZk4AigFjXLDohfhwZt8b2TggT6XBtL",
  "key26": "5DQKLCLnRK2Za6QP91HaMFpp6kDuKkYHjeEMXksiFeu2xsbL2jo239hwgpsGa6ggLTPhTwcAuPo2M7KEiaFrwaoi",
  "key27": "4rX8qdvPhQPnkyVfVQuUSNajhnToyCCcSUpkWd8CW79GEpkWy5t1dYgauXyEHJtsi8S6sBuo1tg2mKXtzwuHFW5G",
  "key28": "5BCJBmn2e8TDjosuTf2FFkXwgNBHM7rPATicVsxRU1SK3CWkHNYVPTQB6623FUTvQUVYJNoEXiEJnMjvwLx4SXFr",
  "key29": "4u5yRDamG23RvYsjRYcQxWDCoZdCiESWRb4SqTKj249DUMvb9JF5Ba6DXVa1WDCJxU4FbkyV14tuBPACzkujC6FS",
  "key30": "4qcvKUrxEi4r1xo3zoPd9ukm6JmUJGv5qQKpQu5kMErTvHt46DkgkSzpdLnfhEbVWaPMu7xJKexxwk7ybspeFmuL",
  "key31": "36oH4A2oHJLk4DTUuoQDAra6gDvktFbuUouyxK6L9b9xqduMeesGQ7Aqz3HS9qm1fDKmqRDGj3qbcSY6f26PS2UD",
  "key32": "2LsmT8Y8gXWeVH3Cb5d3iiHnH69kTyTgf4RELrNVAEXnpktFeq72RyTMCiKBATNTnNsR2ojW8TxhYVVutk9eok5F",
  "key33": "3dFXiLtGRaTqeBzJ3KXUMi658k6aDbHJEvW2VSGzP5Wj8LwrDVuWQWuiURibRvY8FbVccEHUk1CC8oZutpK2YS3f",
  "key34": "5qyLDyN9W4xGiKATM2X6Mdo7MGqKM3dK6fwB5s8mFhKRgDJCmt64nypm4boDu6RWYjcgZRehNxaC9ku7P4U5aPm7",
  "key35": "x3iJswSAQotcwSTiy896n4qJhYEmAxT7V4k8cXsDsUVhxACHUETSG85YhLhVPHTyZwTXUg5NDFbwEsdozYZTw6o",
  "key36": "3aDwQ35UyyLj826UxNoM1DvtJuhSbj7d9W8XFJNm3rTXM9vgQxyPMFqQMBeHRFvoVsoxMrvs4cZfwgmhrxnWwai6",
  "key37": "vxbMQ9ehhExcYpEA3SVogm1QG3QuMisfxKEujMxpgSBBgurNTsFZVxdakPKytP5agUPiM72erSRKuTxu2rJWnnt",
  "key38": "4KSTEwfVQeYXhr9PBFsEFMVY3du2C1ydrCsFWr8qVBk5HhHn4TmP7FN8EhEXZLte87cMnLn5bgAMQFGxKPsg8iU1",
  "key39": "aUDrWC7kCsesZRsXhzyS7RFoTdQmmpN9RyfAaTmCaXZ4VVhcfmsSdwP41Jo2jhLi19km3nAD5xsPTVG4nDAjnqw",
  "key40": "618UAF1gY817LuvwoSq9R9jnFRRqodrr6QHLCXoh7zQWeQ1YYzUf1jZysQi2kRsqv6MqQFc3qkNsaLPbWa5a9tFx"
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
