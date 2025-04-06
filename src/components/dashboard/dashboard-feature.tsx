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
    "3U4awAWdt7cHLD6b1cuJhxztXvHth8sP269JHQuRfW9xgEuN8DgjRgkajm5XcF6m9kxX1JEsp8dBT1a9autr5j2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zrtadot3ax6vAGj1V7VtXWCnQhRhNmdF17vHQxDu34aSrZ5L9MaKYnmhz1CxfetNxKaxvqMVhk94tAZHwiwq2gL",
  "key1": "heumjj6Q8f5EaosBYuByvfYbrJdbLYuvcpYNCqx4zyJg41XHb3hAuxZ84dHkXsPZ2S9TF5EzwCphfhq5JYQkuvE",
  "key2": "5Xv5KxyocGxnxxVbYAB8mMWBFX6sJmYPi5ZSYrW6hSALfLZgFV5FHJFVcYNCjFJrCoCmbNvcSQcAw4sEnSWDXFb4",
  "key3": "3xPKKfYJNuqkf5soo6EVXrwC9EENne14YstXvVWKcHkpd7voAX7g9tESxUrNpiaYSrKmUJS6gChb3j3MA25KQ92c",
  "key4": "3jfa17rq4icLp4dPGeoaRNuRNqV6qh5u7xxSNZFbLfofZQNtZHVBLE8rzWNtX4VLAcReK1kTxo7vNBfXJHgRx1D7",
  "key5": "2Vxwfhs6xKNfkGvd887ruGaKdHU3Lotcf7UQQg8WG6dxGFkMR3DUF3ndn7hAVwXsr2GzxWFdacGas5zcap2AiQb8",
  "key6": "2TQzz1FUWPc7vBR1WPDTz42AroWYsY6JEot4y55YwHsFRNXj6q3cSTr3NtJt2eAKqnJoZkaZKGM5osUkd9hSnaiu",
  "key7": "Tdz4dUUwpt5tXA4onHWh4oria6PeJUdj1F8pmPDtujarbZUS1wLDjQEhuQweMnLN4rNRjRqMxrjdXnv18EzYAfG",
  "key8": "2CfCxe47jmHaTbptksLvcEjKg1Wmm11DDwCFnM1WhHDYCAHvA19XYQytPpvnVTauZSqijMYdcUsWsmsfGkwTE26n",
  "key9": "zE1KxbLmT8GmCRNWSQekQTLCLEhBCC6pA7S3rAb6PhpHiaU81HhgxVdQr5spqyrTJ5KtN5nW5cmL97ioRXMhDxu",
  "key10": "5H9Dp1cV1cTpCp52p47qQWhFMqD1YWJmkVJgNmZsF2mowzFPVLHA9DVSfwSJsDbPvMdTzMDffUPNHaJdQXqdDwtp",
  "key11": "HHz871TKXUJfwthnShuekXZMt56g6oP4eirYi5KjLxr4Dzx452c3WeVT37tNr4EYtuDspnb8fUDGcESSs8J1Acn",
  "key12": "58PqRFoyjYrPsuvL9nrnD87iA9RL8sNkMa9bZNsabTngXVsxdbMdwtqqvzy2x63ZiMupiFGAmVzfwUKU5P8JBzUw",
  "key13": "2Tp4FLFCx8Bmvqjfmpah8RHZq5Qsn9w5T42JEsV1WGkdFFBSMWLerAD7hh8GAH7is8ZWMCe6RAcEtRxNJwm8R87p",
  "key14": "SKxada2jHwqgxbDCM8me5LEZAquXCJehr3gtxguhKimD4Mye7rD6sDwy6hobuiDopjpxhnCXAbkzqnAvgcXULmj",
  "key15": "2CuzjiTGhGu33UxFopSjs8YwjpTBLfCZFbsK6eCVoUFKgbmhH5cuEhYPjPaww3nKyidCXNPChKhkbumAdQuxr6SW",
  "key16": "5hgNxWocyEiLENyooM84K7UdficV1x1QgZSBvtv5pE9R3atEcWCGBLbmSKcMEnugfbGogzM76XSQawJZ5digFKh",
  "key17": "3ntW5qmko5bz1G1CMEWKWjTSLvfdKWr5dk4289CP6Ds9pXPRAmDvBEwRGrvGbbjpAYfdEPCszAMukVzCpXT98tVn",
  "key18": "3giFWg8jEX7QCBMsiKUoyFeqi7TdvVNUDcr9gHzmAVdW7mDYh6WNvseeKRYy84TaM23N3FLDh2WuyBeR8jaWv5JY",
  "key19": "5htorSCvwNiD2pJFUMEL7ZH5a564VaaRm4zqtAtXbebp4H3yC3MGkgBqEbzn8Hxasx99XjAhU6uK2hxuANttJDi3",
  "key20": "5TRooKKDUBNx3bqgWp6TjwZAJHpoz1eehTknAMmkSLwEYZtAQk4S5qZuCwppFX8cAh3Rhn42akbnrt4SeqCZqg7r",
  "key21": "cmjHUhecqsPMPxeF4hMT5w3V2iNKa6nBA78MMi6WUs2CWgTXqeCQXugQs1r2fauDPF96YwBhip3iayo79k7bQRe",
  "key22": "4o972kTtvK5sdm6PCxu2jJdTXoyjXzxUARusnnCXq2JHRV5eDm7AEudGujFEmHin1E11dVi1RrSY8Gdt5nMUhNhm",
  "key23": "5n98qDVc7tv4eDEtJWpyzhZQxFpCtZZUNktfhEWh1hgaMjFGwf23NSsyrweKLaezcPpxn83uyB7k9fJaRZcE4wro",
  "key24": "CAmDXe9drWc2vMrAspnfhngjbWsKgFycFQDxCCTMNo2MvdGSbTfXp6tyvfC5CbRZ7oNPyDxMxivDqtyTxUZQ7rT",
  "key25": "2Xry12Jc4hZBAhAsA6xsJksW5HmUCfpwT2HA4aXiFK4j7f1mnLgrqkQcDtU8opoZYKMbmBj3pX6Asks8fuvVVXbB",
  "key26": "44FJkYj6LhzV3wZKmXMz1ttARfBTRCMTLTRXr7Vmx13UyZeyyGjYckzjjp2zYHJN7KW3dPQArx4Ms5KhQyVGeyYL",
  "key27": "4cY79z1Vq8XwkKZgmKcqVNRzd7JNxX79kdVnzJPFX1H2uM4zNGA5qv7SGTeKqb4A4xPHzGRhKrUPmLUfqtWvRKuA",
  "key28": "VB9urLvhD8rqEKr9ZP7V7v8TRSiRcgqci8oTwJKpnqrioGwZ4RX1UhiMAHJqfpze53mLMgGpLq3R62fB8YcMmu4",
  "key29": "4T5w1abuNrVTxBK8V6DTrVa2S7bajaywifMnNkg62habPN9yyVKtqZLZDoPdkT4RsM7ANuM5d38w9k7AewrPdZhw",
  "key30": "49Ae4y5YTPS1mcqqna7zAayBeZWRPsWKz7bQw7awGcYZP6bnw819wBiDMVepR9Af4vsCq2WkRCEMo9umkpRLYgTU",
  "key31": "2ZcuwawnJ5uCss9vaB6YSgbXvweT9NJ3c2qPUP38t2D3dqjxk3ntFMiphjr2zubVN78PpvSax5A4pZSp7ccQtQ7M",
  "key32": "oo9NJ2PRPtCCHNBkcXbqDYTq6iee8CtMSF1Z7LS5sMeKKyqQHp8KprDH4EdT1bqdEY1FdSagmZvoJVc8cHuU9Ev",
  "key33": "2Ssg1uqYaAYo9ysheXnaAXi5itjWTzMdyM7r3tQWuTQ7Nc6emWsAcnvEtY8PMwLWwEReENCNGKeB86TdLMdy8wWt",
  "key34": "49Dx8kkDUpRGnUPTEuJQQmfoo1WcCJpwoPTHBoWUMzZnvBWfsgi6XyoCruNupA4cJgRnaWC2FHSk36JYCujNK9kH",
  "key35": "24XsLxmr9mRnTfbWXh5iCcoYKr8HJ6sQXkWMwtZXH8bAmHZPnuDusnGHGE3sk9AS8bGeX4KPALE11rYaWvYqzwVX",
  "key36": "5w6rwPBYGdJiZNBnQFbHWoT1q3QYvD4iiTknTHcS8eaVskJzX18Ahes3y9VxoiJsf7JxtbFMhdVXcsRPKrzjJSLi",
  "key37": "4NcVnr55Mjgg8Z4wF9ydMZKp4xxgP6EjbyUedHCGXa5QSQ8eZVy9YV3DxjcoF6qSZdmPbxkkfaAfTYu7PDFUTz7p",
  "key38": "5X6fBJZUbujCjgigD2gqdCRTHcNxJQd53iCiK9drAmgpG6XMCnpzYpYZPzWTAMK3o3dyrMjgSeq2gd6EdjiWf7Wy",
  "key39": "3gvuQD8jVpdFeQ4CXWXtbs9iBG2NfgQEQUqizTUgGL9LH5Tja5Yy4oaoGgWjEsJgcY5YTTHqh31RWWpwieQYrZij",
  "key40": "22guSC7V1SJFnjpb2qeghydwLhURXCM9Xu8YnFD81pCswAZwk2QuZo68KNrhmEQzCk14W3xmdse3eXwPmCEHixCf",
  "key41": "4GsxUGGD4utjzDBvihgNdNcV69MP7Wr1tNCdmR4Vx7RpMhnEw7JoAvzi96sQGj4mvravknCwnguqJ1M95BMRYHbE",
  "key42": "67qMkj6qAoCLzhBLAqKj9YdprXEL3Dv7SZRqy1QvrUD5Zg4CyvCsJnEsfBA3LwUTHFZWUhvcvW78QfBbVsVZLD8p",
  "key43": "iu7uVGxfk7Ryiy2Ngh86517AVF3bFV2qqWaUpnBKi327aqRz5vNo9MoAmmm4HFEYGaGKTJCLzir6J8GM5yxe7bi"
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
