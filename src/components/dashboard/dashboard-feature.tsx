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
    "T1FheE3hNKcwnSXJaijfUPHmmiF64mcvEJRdFuyEtTby8YHDfsUrjDqJ3dpi8pUjVEzNY99mPH9qmRksNqvTUD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTaLS2XsSXyN9WanJFPgESg1fzconUfcZshFZoVhyE8xdtXYD3bPJHziZjZDrD4Huj32N1mAfAjenr6cqpXPU97",
  "key1": "V4gjWegC23npUXNAieJeoGvwue4oFJSh4xNoBwhZoS7AVZWhZU5L42KF4CwAZBJWBsySoEfV9N57GxXEd79nGLv",
  "key2": "5qqozFt65wND8E6tpJHrVQTY7Znje488W39s7zVycXmCibYZBhGvCX937njAvG7od6Erqme5G4RJpLZpsEfqoWTS",
  "key3": "YbmGiYUdasEBe9D7mE22NE9TFfT2L75Yox848E9HXwXGgPPk6o36t2GR1kVi314sgtwMVLQt8NMaQs76k7y9tfA",
  "key4": "2T7DC336M2Qq4RukqRSfuyotgCYWuMEmJ795weFukxdujAryMVNBPZBWi2CFPADMd3DBz5FdDTqR4WVYp3qYV1sP",
  "key5": "23ApYUzq1uSZSSUEPJvGXmrnfCddtvQczMtcskw8tTjAG3n2cSTjpFjHXdq7NvjAtASkpRjdmGTdBEKjnGhh6NFa",
  "key6": "2HeYBUSQzCp82kCfQyXAU4MkQuVKi9YGZFGmbP7GBnMJPkJab9jqK3EGrw18gGAvkDPviB8DzTu22s2jEAPQUq4K",
  "key7": "5oe45JH6cvihz48oDkxtuJzpgKanWd8rm6UmYRtzEYSBSDmSy6UB2zvnDHfJzvtb753MbMwrneb74GzeAiYdAFEd",
  "key8": "4orQhLuWDyYzwYjnBavCwWnaEr9hhwgMJeXzFhhXZ7mgcTYBTHtrAe7Te7zt5hVmjTPE1MxhanXfq1w1m2WJrWVg",
  "key9": "36UWann2cLBxcNZsL3WTsyBDwACKdaePyeucUbbCjcUQRXWevJhjS4cJZprs3MJgRTDQD8bvowMQ4u6kv3RuKuF9",
  "key10": "u9mwvMiEfxavyW7v8Vs3Z3HQjpPNjoaYQFzGPyjkur7oaGBSBt3Vv66azVYnxvbvQS7ygDGXxyaJvsHHBXN7cKy",
  "key11": "3ymfk4CBDFtupY44GVBse8abskXK4s58TY8W8W3qoxXNgnRDK9XLMD884XUyCSoEfDHrNR9U3KWE1MHwQEcmwK5e",
  "key12": "rj94swmagJn6m3WCq861PX5ui8BU3UhZbYhvNCrC95GxtrH3fwTpcigoVRn4Hf9ymEs3H2H7fDXBDvpW8YHq6Eb",
  "key13": "46GZLC7vNQ4NsJpGZbiJxxF3BiycmwEycSfK8C2NLcGufTDuWaU315vBNVU6QGQ7cc1eFGhwoyiZSwTrirMRAV3M",
  "key14": "4RG6GWNv82C5RpKt9Jv489EXccN7CpMNw1VRzXnYFonew8zVf6JQ26KUTzup3X5fqicd4zu6sKWoPPKcdx1ALrQn",
  "key15": "rFrtgRHcUsgU4dVMVJK5TJLgNr8PPVDmMmVzSxZG1BoMsqcCfC2QdkkBDUJ6dJ9s7zM1HDuPXAm6c6jbn4Kcmx9",
  "key16": "5SJG1kuBkn9i3VUnEDzsozHFioTXGjajWYC51DHccBewBhmk8wECtj3zC7GzvJi4uojqJnLydnz8dinodacCeaF7",
  "key17": "3QQQMiQGT3HNU43JhToukLKbhy2yW4iZXC937AHhCdDCcUaQhAUqVAmwSePA6ADCE1hFNuESmDhxaz69sC2iMoku",
  "key18": "3439XtqYzWHtVxLfKuoNCAz61T6RktsxX7MwukuWFCut2j3kCBoCbpAGhYR9CELXbFvZ3QfC9QeQq4o7tMSgncke",
  "key19": "4Gi5J1ULtmVxzVDpYmsDv4PyvyZy2UcDSxPxrjHdAsQSRWVBgEerMwCVqBjqEP9Bwkcq5DMWQWqoPaXMQgNg3o2t",
  "key20": "cuS2xvTS69xnj2JBbUseibd3FLM6o4UTPBUysMvyKjh3LSnfQHBHoaUCwWFzVpuXcJBNRETovvrAp28xtsRp7A4",
  "key21": "MY241BAjpPYTbtVwG97FPUoLVjCwohNhnAbk99EvowKenzNQjfgynQd5Woxryvr6jRkkS3VSCYCT2KyRCdiQYVn",
  "key22": "25wh4ZjEsfpbQpNmVYjEUxjiTmx83BicTfLN6RQYHbXrHVCBNzRUbebkiv7CHEEYjzTRExxMoTQ4NbR6XkVNtDF4",
  "key23": "2rMD8uGcy2Kpebq7mctzhQknXzuWGoMC54icKbUBQxbfAxPgM1UTfpzpwEmuuLz2FVdcVumvBNRBGBhDMHDb9mnw",
  "key24": "2mnrNvWD3dxMBkwHXLubPCFfvEt1SevqNpHJ5WvU6SpKBVTEdYZDdHXBUghMYkfreoKD3ThNMuV5jDm6Fv7aqFDV",
  "key25": "3VLwnzdCGLP2QDxBc6nmmDyXiykMWpafr5PYkE64kxj2851DvbnTLYz2ZykFYWyfxMSeFGJRUNwt59SFjpzVQPmW",
  "key26": "5h2kmdSuZnoKdLqRSn7W9RZyCfQzBrwXBXSanXQZREFgZtLbvBVF1oPnFX8nQkuaKGgpium3za9VyYP2cxpjk3hS",
  "key27": "3mhFWckRWWERj78uxF3mYtCuq8o4XKQhnUTU3sJ7zZB34opn4Jsmbb4TP6mcxLBAqiGREXD11g6163WwaTwXLTPt",
  "key28": "3LBn7wAozf4xegq1DJEbtn18wRoKpmBZhdRgXGxY4x6u1TAUqCRavqoNPsy5Fiw5mWHPtaMMSMVapeDxWaWEa6QV",
  "key29": "w22kbhMtq7KEinkY1t2t4JRvV5LUyEQQvBshCPNnYJYk4RAm6HYxFWQrhUgad7dQZ5gQxs4Ptht4dLQC3xoYPLy",
  "key30": "4q7bvYmXhA8u3AP9VMsrU7EPjYJAHBcLQf6iZTSv9UGJ667p3rMQYMT66ae3dwWRonVuohDWGk56Upw5FfMGXjBL",
  "key31": "3fvcWjM3kupxKUrxbzKMwfp8FMcxgGMFuVQMYSSdn4LjjEgz2iqDCVnH1aZfHNNJQ89V4ChNMm3DJNCojgnyHJNi",
  "key32": "2GC6cXpqM1Km4ULpiLVvJxeQBaNw5PiXWpnrGmPvHouJf6yPZrPqHzL26dK4CRQvFBGr9wELnXV3a28BRND2MqeC",
  "key33": "2hoBipqbNKatwWq8TTaKr92fjqZquH2MnVuSVmRZa2HndFP6qbZs2sdgaFaZSL2qRu9ZDTw98Lm5hAn1jdmmvz66",
  "key34": "BAjzKvRGXcvvqDMgaTrVdrvF7aEK1jyq9rkkqjrkxz2sqoeb9CyYfn4SqPGEpXiLP8JV9hAWJFxy9sXqyU1hbFL",
  "key35": "5YUrKPiwkQz64i2S97HVnaRpehmvcuPx4wTsMiFAqHFSSUTEqdw4HDzvsehBdRfaWUG4ZWiBET5NvwqsdvdL5zji",
  "key36": "3rsT3mBFphijpVvLUutL3jUtogsk27u8ioCbSJxFxUC21QGiXD85sisW5XxS4svtWvoRnZHZVppnrc7jchdWzdjC",
  "key37": "5i7g2tqvNsKMPznPBuQ1LQ4nW2gmVaqgLX2AHETxiQP7gUT41h3Z9aj1jGHrXiXcqcKV9uZdfNhUZFVrRqMCzDMC",
  "key38": "3mArtUncR2mbhRwLTvjZVjAtZdLpfMgzPkKcKagER5aQyUKe3XzAXTmCMSeT4cM1BkWw4ERbppAWcbRxsWAStVdc",
  "key39": "5DRRpC7oEMS6zQhph1fhJMNw1mgzChKh3NYDbUGZSwcmYmZDh2jbM7QorRkADMT4ywVj5rhu13TfK258Unb8nx6M",
  "key40": "3kBTHiuTcBCjRC8em3K2sj3ZwoP39tQ7sFWmkuEf4xWV7sKikGqZ2H2Qk2bxURmvkQeUyEGGPPrvpmmx31znYNYD",
  "key41": "4WgL3z7tSEX4TxNbMhn8r1rTZwquhQXogW8v74fp79MLmR3PQ4crP2FJoxrTqiuw2dANkcCvdGJsPpXmFqJ1WXgG",
  "key42": "3M1Ed9jkbKSRMduc3qfJvn1jrYq9HjjF9QbL8RGVDNtdb5vaYipyEfhaJ1Vc6HPNpQ4FYJD8RW7B19sJV7Lpvn5b",
  "key43": "2Q1j3xmE2kJNCMnSo8UqNgN9TzEKzxpZkECmPhCV563dguMwjVRheYm4tmUcPPYaEn6PR7NLYMgYH6AMUbiFCjEE",
  "key44": "Sj71Va6j6JBGtvjZWewYdpHg2bshuU81LuCxBANywpHYqvZGLEUAwCRrRrLVrQTrft9U8KJi6DMw9ZDB9W5iAMa"
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
