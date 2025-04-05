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
    "2eg72inhFRroaNne8yWNTRAu1AShLqRTDhJs2hbMq9Y26e6iqUc1A9tJnABHMhJQVtnwdLURE4eUHh1ZseFxvTBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EJj92QMcar2tHFVo9ycUmFKeoDDXjSY4KjcMo3E2PeTE3tobTH9Gp5Z4uvgHZTYh9NSksQ28nSHvcMuEyhBg8HU",
  "key1": "3Uyen3NKiEn9Dr3SeH4VqhKtERiNBqsje6aFAsMY5EEbEu1nqS7zBo3DcC4vmLJCkY8vnvfhkTagxD1M49DnVUR6",
  "key2": "f6QuvCYzkzT2z3UQvFuv2PJMTQf26kHqo56L7dzuweofXCxMH2872Le4nAjCkfyuXpeWV6tJTYu4bXCMwHZ3eUm",
  "key3": "59Qeh7XB3Rzjh3x7EvBha5kHhRvAZw5t2ZpRzxVknPjwtoGHN76KpsLzs3LJ3Kx71sHFLcjsRGwab9eY3Q3UMDQm",
  "key4": "3AJNeQc4pC2of2665Y3si1cT5mMUiK6VJffxRNDdqoWSodFwikS5P18qunqNi3dp5Ae62c2U94W83ycyLMtLcQ6j",
  "key5": "4yizqRMnXGvMTcGJZn6bGrBBomDYMTa4nsx8dnhopgu8YBzCNrTyzzX7N8f9eJbnMWdeVY1aR1iHsRpSDqJz6xAm",
  "key6": "5JxpnoDjmDQs7VJqXRZNTmHER6Lrxt5uYoA8PLAb78LxmkcnEvCd6ZYker9SqCBeNYPW2YJ2nJVgscpBLabS1yTk",
  "key7": "AWp3sLBEQW83acLHMjiKHPhrJeArfN753jgreBLvHtrNxEgwKhuckaetNNL9feCrd18iYzY7KK9h59ry8af23bW",
  "key8": "3r9a3thMKi17CuFoaA7fHEoyioc8QZppXHFFRw9iYkUvehqjs6RFR2tbWnak6cJ1JJAsEaLwjmHHtSTGj7qdgvm",
  "key9": "Q6q9mVBaP7FnREnNeWKiLcq31H194oX65wnvPEBMeVA38aQSZAV96ZdgRo84GKnmek6y4XTNLporBn3gkzEDBRW",
  "key10": "5GVW85bEhh4v3H3xBpV6V4JdJtRj9yvu4vuyHQEWz8Mn46ry9si1XDTbNPmR6ATzaCeuAXjDLUdCDZ2mrfdznoWx",
  "key11": "4qfzeK6xA3eieAdik1tcrF9FhRoKxpRQigiqt9sU18aTvYcgq3P2DnqGx56N1QKdeH16iYBUV38U2FLny3qw9KyT",
  "key12": "rBtTGBsmJ7YuvQP58hQJ8KppwiWMhJ7rv3jKpengrjPcxNHa9gxiVijEMP9oBmzmp2VeLJCgreDpr6WXSWEd45A",
  "key13": "3F6WQSpN9kkTQEpf5dY2m1qZzV6rMRJACJtFD4SuWjZVHBgQrTs1qyKaS4mWMBic4qA3nXc5xpX5MBHTaCmumzmB",
  "key14": "4mr7b7kXoD9AxfLKkmBQVPURSjStNGLJS6kAiwjEqKyg24YFLE1WUgrUYuV4m71fiyjkzSAV4yayyB7TpzsnzzC2",
  "key15": "5yzVr79ctVdhRBGRHiRsPuEgxc4oRmHgDEy7JERcmNpq75apj5T3iBYcPsnBZpbqdoLpCt8RPDDY5gudchjQH6bt",
  "key16": "4dLgqdNyRNMCVjSn51WxWoDHbM6DrX9xvG6o6179SdfxqpvLApRoNxtas4s8F4fJSb4VxEVm5jqzGDq7iuL84Go5",
  "key17": "58zwJs9X1ECfwtPcfeYQRFhyGzx3FseJoLUwWgd5RZFDNg3FyXEroGJjemhM8Wdv8pJzXGigpFozEabHBCxG8xqa",
  "key18": "2n8HdPi8GstQZdHwwf3vFnLH7RWDHbhg4C12x171ZkNwQcVYk1HZM1N5MbWHLeyzAZCCfCGdiy3Q1LpGhZebS38r",
  "key19": "2GSKBh1T25EkJCHWXF7y6E9niskBzkLwe9B5HSkBEhg6PNPScSJpsZPHgnHuq6TWp7FS3cMpQw5iHweqWx2F2j5S",
  "key20": "3zoXgqpMvZvvF3tgQkW1wErg2hrrUPQVox33Er4iBAVAnKZHLF5rtgzGZLnCJQPLq3VxchY1M8SLhZgtZWhTmxZB",
  "key21": "JkpUzXbDdSxEkCD1eg6cDWnmGCpbcnmysLXEANx7aosE1GdkkFpkbgv6bKt38nNs5yLZNwHV2Xby7dVDBS2NRRP",
  "key22": "2uPG1SGX4dzf3mEXWeim7Ybn2bxttvwYiLNeitXMS3iXjgxcFdxbvhQu7VBoHo3EjSTvyquHjztQutA7uzvBkEcR",
  "key23": "5qbUKBQmfwFPDdRHFwMExn1KpGbFMnF7kesthtWR6pr13Zf1VdroZNSsFm2WPm2msBf66YFoH8Q3RUDgGEmBQ7vz",
  "key24": "5Hti54FgQn1cKQiNbu4gmM6bHUH48L1T6LnuAmfDM3HjtHSbSzSu2GQGFFFo9M8v2JBAVP2QzbXC6qRGgPdB1To8",
  "key25": "2j3sTqDGXmGztkSizagCWgsTrHuCaxwpYiuF7VDHPptNVX3ATTmycX4XoC4rTY6HWVZT1FFiW2M8A8amoBKjScdR",
  "key26": "4QcyHzW3pKCStBeYvXT1say61CVncyT2Qq7X6jPMBPNWPpAUzMnK4HmUBXVCigxHX26Ys2kZkk9MAdkYBVdCLFTF",
  "key27": "49zKKRVmdyTLn6dftH6bt8zWuQVSs8D9iCYKZrSgdGt8XnvJVr8Ggteerix1FU521wryCmNEAUj3EGXKawinvHGc",
  "key28": "455ST6YzcYzSdyZz3tVCob1v2MZX6pH3XqGDR61Q8zUcDf61LF1McYNxkG5Ypb5XXhd24menQTTYwWBwgHv3gD3x",
  "key29": "5uLkZuLWLZaGSTTCot1iUeECE1HM33Aesa5nutPszwJtyWKh33PesGMy1xRZS9TazWzNziThbWRRxHXKHnKE3AH4",
  "key30": "TPucuEMKWfx9f7xVHQneTCTn7USrvuVL4XSmQgo3QDkyY4ET2YMp9SYoB7CQRbYRmY3b77hhsY11PYD14wZSkmk",
  "key31": "3fdm9Wn639frz7q3iCxcNGyHM6DUKAJiEp16GbJgA3iWiGuf2Vo1SvJk3LsLjxV3PTZVoDSYrj55MXTYG4EQTtAw",
  "key32": "ALYrLxKvRr6QCCHvLRZ57FeMLtpfo8K3iyLm5gNfywAoe6v3T5NS9bRYy7LcB8Vh4ULeuFA3Q2jdiD4n3gkCoLX",
  "key33": "5UxcR4JFb3WDiVZgA7MFqDoUFLc6JA6MPXHbmQPHq12EVhg2J84SgAZWVKTo6QW2xppZQjHdzY7BUKh7Ra9boPpp",
  "key34": "37AdpSFK3LGsHMT7Wh7qhQsbM2AvkaUZnQUjsHAUwGswg2Gt4YMekTZJ4JoJUhWxFfsgqX5sknpWPVQRa8p3z5qV",
  "key35": "JR6KFjkNRuMSM6SF6Fx4CjySGYLEdpC4EpNT13cQZK6d8F4tYmxaQXSfZ4Mxj8UFD9SrkgbHhnj2efejzpWzPfE",
  "key36": "3LTzHepYhqzBzcCGdxPBhHpyQNBSHK42t5GcCjrc41eHyAXE9PmticLf8BQg556vm9j7JAi13wFuqmiBdr3Qwbrz",
  "key37": "42XFYQk9L4baPtx2LHDVbeGcQt7Kmh3B7bjLEvFjdxXUswfoUWXeE2ZSiEFeb9HAbNyNdEewNjv4VJPcdS3TpQ1D",
  "key38": "36owyesuYHEFJRB7ggsmGW2WfR65erU1MenwnKcvUii1q8hf1na1mzA1m8T6FQoo5dDVkBstuFhXM2GnZhUefS2p"
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
