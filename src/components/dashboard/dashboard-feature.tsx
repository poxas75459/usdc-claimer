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
    "HfmwPyg3Vr2HRk8QitYM1CbnydyG65JkgyRVDa5b7D6XtxLBQVV8zZG2chap5E8EruZovXpoyw32zvxohq4EHJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CdstPksxLe5bdNKDZGK5jYLJxhWRL5yjJDmhhXmeziutBxg991MG5oVMuBfWQJC6uJZcHyW4pwzKx4EKPTHQP1T",
  "key1": "5wuvW7YdjiLqhuGjWMtwprkozcqi15jJtzhaTCEjeyvd4bMZ2bgcVDja9LTVYgEGmmFNpDdEhjiZCxkohxY8F8hg",
  "key2": "4LynQMsCfE8eXRCJ67FraHUWHuGH8UpAukZdtyCUrE5wecrMmhMGsYti8U42ay4VE7fGVZunNgMqXMSvUKXkiT8N",
  "key3": "2ptUmGcTjCZbAeL2dQkEwfeazcuGvj4YhLfEGz7xPax6Zb2nFnfiGLaTw73wpu97ZRzDhBMWqCVYDbjBbEBUT9oL",
  "key4": "3TaPXCQUCXJPeqRzkvsuekfUFxuVD9U9ujRe1U4ZSEbrSbbrnSmwqvyZF2xw3MW755gTTttHhjZnTsKz1MdnqXho",
  "key5": "3RM2PDibciyQumQbjXbSv3mstN3MNBZFJeEb3ii1xqQQN9RPzZMYABhJScdTpfMZ6GU8VSTRFFAjK4pNrJMNajir",
  "key6": "5y6Ae3Y2kXfAdY5uFKnCHRbSxp5L5mEuEg5vWGUei4stHDKWvNFsgHoMCXPHswRwXbSFHGgaKdXq6Et7VkcfzJpy",
  "key7": "VESdVoSNWHgV7QbyWjrmHZxS13YHuywMbUXGAQeeSoLvnaTqzSZVurNeS44JMod9d1qEzoTSgkGEA2yoWFN955E",
  "key8": "HhkraehU48eBJnSrkFmesB4sHgwxqZf2aNmiGhSJULtHS9nufjBfeEbtnikN4Csn9UJXq521ztzvxamgWHhgWnQ",
  "key9": "24kKCoSCn7aYFoH4FVnQnPtCRGdVc9NVZsVVNCVke5QghoFynu3vkp77XU4HCbNQzy5MkZD7YYq1HcYPxq6rkena",
  "key10": "5xS9rhQHXBBn8vA9ZvLZXdM6BT53iBA8m8bTuMvVGQTzJ4ntyWU5bREhpuguvp1Z8ftr3dkx9HBrNgwX2UVupJ6v",
  "key11": "4nmFBRSBEkKFcMLRTJufuJJAH5HccekdnZUcPLEmhmoHF6fw5oCJBkuZB8FqNDUisS2FFHiK1yHw3CjnvmfUSw2Z",
  "key12": "5HYHnjh4nDHb1P9vaajWtAMxaH5UCXPsyeasZT1tvYUyMBpA5WeHdaLcRcCYRAkbE7ZwDFTPhFPMvZFFMcA8BZVe",
  "key13": "2ZUrp3PABPwN4LyuMSCtY6vam6HoZc4ie648sLjqzARwjMihCmFaaQuUfzn1AqGXWtSBxmVMYGDVpUWwvwVAULaW",
  "key14": "2kFtnq7YhqECUt2vhNVGbk6cfziPB6HUDvZGEWHiaa6dyGM7fv8UpQoKQ3CDrgjDxfat5LxuXm7HtjLddVFhCGcd",
  "key15": "3Fb4bVPdh2fr9Y29oevvREeLq6RUsrEUfeAnkL3EmU67RtNurPtCioFVQh6ksADHrDGW8xdymb5nGu6VJ1PGtY7r",
  "key16": "52x3rsn7exo7GTDUvyvN7tdF79um7r2gkcJ87iimtXa8tsQvZzWXyMPAP6YW6WPTfhp3NwShQc3rFdb3ysQFtzc8",
  "key17": "3iJsAMndV7Z9xr9XirNJQseXkeTKw9EGpzzg3e39iMp8zBR5KVK4EtnzJM3SWbZyon8QkFvth5V8rmr6QaUfjTBu",
  "key18": "2NYViGBY5CuLk79ajQPq76Q7uavA2id3rB944bRAuYbspoTyWg2AjiXF2tjczbmooDg7AFQLW6VN95cKoywLsDW2",
  "key19": "5NvJtT339V8PRZ4bMY6qhyq1WUdH1anPiWQxyfHfQDndhGVgRtAP5vjQzzEYzCuD5YAwXGfMzAqwUJCu75xeFhQm",
  "key20": "53yZo5JaU2S7PpEDkd2BTJwLrE9tfdoSJV5i6S8V7iRjsDMpxMTX5LFAz9svsGs86ujMswMSF4LFCh2UxknBo51",
  "key21": "3yGYKPXeSUHKbzAkCRa8rXRkreYYsRrGv3BHPP3LXaGUtQpWEdbdoR3q2ioGZts3XyQiuAG1bGyWWwLxmsvw5CMs",
  "key22": "4Yg4xpahSVUs1cKYF6mJSmrzwnzaMmKva89Y7G7NfiGGKcB7vAXWiaoVAmSmxbGab9y3fhCZw7QGRRRWoybHjw2B",
  "key23": "ZNwjMWfSyH5pCQieDVqagLjU64vhDhdpyG2u6P5EJydFGHiLPmAVEf9yTQSQvyvAiHjEy8wW54o8ae3A2amDuVo",
  "key24": "5KPAJrzXuoBkP9jfjNv6iy4rK36Uo78K99Wd2mdUaXehAYPRrtHmC3fUbhVuLN9jZa2iZPSx9vL9rZUKAyJuvZHw",
  "key25": "2djK7xk1MXAJ82CWuuyrGTBNBJuzxZyr2KQFeZ9X7yoDky9VY5ZHs9uVZsomQUiyqGgwz5DP8S9HtvwqMaVuVSp9",
  "key26": "2FtLtiEWpojoXEHtUu3AvCxZxEYf17hzWGCL69eefDTqfkreu6Vr2YzV4PFDmcYQ3G7rwidTvYzN2Kx3svNwqy77",
  "key27": "36f5Sw82broQZGqovgaEAgYi2swDsKHmUND6mUu7y4r4ZBMhUzTye9gzzqaqi22DQKPhaG5MKTixDbaqcDzSTrxQ",
  "key28": "CkKhAMvNj7jJdhf711s8NFoMhn1yhXWNuk4eYG1KFShjXi8L1LnbtfnmKwQMLFaMn4bh3QaMePvLJoiLSGN7MYB",
  "key29": "BktgGXRxset6ASkPkP7LgHup1eMsg2C2gYfmNNbEdM6fxBZ5naDD5YHNebgkVMsYKsgnbapdxeZvaDJeaLpFVPM",
  "key30": "FdKpzvoEqnzcVuUd1N1fAweP1wYpdqPGq7kWLF2gB6vTK6tw4kZ3rYBKYPbFfgTJZirfUoG5FPFyr1Cb3TSdoZx",
  "key31": "xcsq868BtsF27NEcJPUzQS5JiPtJw7j8BB9ABKmrthvKwAS8kHXY5fe4ihbQZgYofQGfTdmfAToKXUwoTZw8V4X",
  "key32": "2Sz8m2jpLihCZ2vWFMbxGSupdsepzxZjdCwSdSHJRekafpSEpBnWvRUrN3TMJZXDJ3d7RHwrMF3s1gBskEs85p1B",
  "key33": "2hTJQmQ3AfHcuuiJ7hoS8o4HT2qLRGGWpegzAc2gTn5of6MEWgz6U7kaMyNJEeta85BXsr15zLSztydWPWmth8Sp",
  "key34": "2uU4LPQADyYCpxc2NPyMmFQNzqTf2S3vaNv3LsC862qL3EfPFvwMwAFnVwacz23EqiqZp3GdrAovnJyVzgdhKhAz",
  "key35": "UiscUYpMsj3KgPQ1eukjTufjh87WMgpVAgW2CeTvZuRkujKzSRpzuNQknp9ciSkL3HgfNx8efXWF8MsyXPjYU8T",
  "key36": "4TcHQaUsV56sbcqoMXEoWuB7hxQSinmvXJGA8QRa7hL9qoZWngD8jtJPPZvcHiSC846nuLnZLjgvCMFN7HLwYFWW"
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
