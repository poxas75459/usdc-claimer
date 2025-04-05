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
    "JN4zjN2Eo1pAXEwYzyY3LCVWrM7NZ6Fo7E2pKkfPpz1G1JL7b4KJWpo9s9zn7CdDcufvDQDTeynBfNF9P72TQfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5trmU9ToMmumFuiTafcB78KfHh4W9zSyCADyTX7Zpw8j784YfEfpiQ4c1szuVstpMRfcY1x4bhCDzebqt8zPns83",
  "key1": "261msjhHSxNZjpjqnG2r6Dh2RUHGB4ThgspJJweZ5GszpNydQhKHsvM2dBmqD7omFr18exaCoGgNVCrhHrkVnZrB",
  "key2": "NeG53janUZPj7hrA4NnnS4w3t52ds9S4CKaJp95BuBshm1cwbv5ZDaaPgJ9NhFXJ8M65mAPwEFvSd7HKc3RmUSB",
  "key3": "qnNkMBXUHZq9u9VVqYVMpZkFoUu2sSL2u7wFD1UgJiDu1vbRQisdZ6srFpXY38pEH3KaKNun1jiRxCdLrwAVFJG",
  "key4": "2kcVd2hh1kVUUTsFGrAxgKZUTkcH6Awrp6LZCsGCX5J3v69NCTVmccHxUwptSe8U751kRP89zkwjVMkSH2hticDN",
  "key5": "2Brt1xtks7vq7mMVJc4y442U2CS16UXkqEWbYdDGefZfztEX6F75R4UxeBcsYANWjHsmE8xKTR78j381JcedqmHd",
  "key6": "GYiFs5zCEyHRS7X5YUftRk2bT3UgU6ppcKyKjExsKjcSmi5MVZULqvx3AZBLXH2ow6XrwnK7bQRV476mx367Y9W",
  "key7": "yqpNbHzpquzbD7yz6Ha9229TxLxB3B6p3GFCBnX2QBWve6ciPMWRgDouzWyG1ugiiKATcNx5nofJAFuP2PxMZMj",
  "key8": "35egzX8Xb46M976G4sphx3RZbrJYzSNeQtNAJi7dQLq9hvSwqfXTePszCkGgcBLCh8xtA1of9pn8CT1ENjhBzjfi",
  "key9": "5JPeeAuzD5PgD7bzZ9PXti3NHYbAXEMgNBK37WXoHNUZ1AvUusKnRfJ39jAYJ68nJxUoeD3uwM5zoNk2mqo6bxQK",
  "key10": "6158pphgfj9oH5D2tnATPX9GrkY9dGqrXSMdrhTcfurbGxuviNucnzB8oZ3i4UBaFDA1ZYfDRHvcxyfiQJbB8hPU",
  "key11": "2QyjcW3qt21JNupT2PZeFbDhyYRmEpbynahSjrL7HmcXFtTRzU39mbF4M4Kds1oVGXJJ1seXwZWxQSnNCJ1W27Ft",
  "key12": "2gUZ5oWWwnKqmXFth3fGxSnKFBHtg9ZzbXykJzjUcd7nAbxfM1YRerMmN2Z6aPj8A3wc41mM4tGEhTvnwTZ9NMNc",
  "key13": "32MWmVuTScZ2kccYjnnyCWEgy9pjBVBDnSuK133S7kgPhu8SNhP48afKKSRad2zHYaSCQhobJxzTztdFLoi5wx56",
  "key14": "3KQcdGWBCWYP53D5Eyqgjqfr9iRWi2JAwFB39QAqw6ump9KXBGvDvqcYda2mx5oaKDYt6DgYBnksKCVHhuhuB2B6",
  "key15": "38v9TUJPeERpda5WeEFw9ULWMhbXBCXyWcBGtZqguswfcm7MqUc8eieDaQYtJJAF2QVF5HcLjA3NDnjkshLyTkDU",
  "key16": "4vnXvzdPK6XbuoddDFTHntT7RLdMopVdNyCASJTFsgHppWQmk89bcJecDb2LSbNDBSDVxA8N9jpYfPixeHWNC18K",
  "key17": "2Y9rFo3NWf2hU8Jr45UJbtkQQckNneBpj663kA3mzcwv7bQCMeMQiPMiTGN3PNW17WyyDboyBJi5Apo1Ff4JgiCk",
  "key18": "J33jhroski22Y3C6BqeWT57sPwAsMmcjHQwZRsq9rXqxtca1gpoWZEuet1pUeWzEyGmtR9MaGzvzndi3Fo31x5H",
  "key19": "2vsxmvPB3kAaf9GV1s79sfB4VEV9eCFJ4sEExNfWk4SzstK1aHVfTXmoqWAWGXq8t3rM8vsVoopXjvg3tTgE18v2",
  "key20": "5ciYHi9uDLCG9VEtwpaHK8US8Ue5vwZXeKxG9tUn4wcTTH2BH5X4uLmN6aT7SZ3SRWhMHcVwmKvEHaFokriXijmu",
  "key21": "2yM4JgMmvzjhXrKv5rfipWhgy4kisyxUNYzhjog5qFMDB6JovJDLvxJDieHTejS5X7zuz9AXPR77HScK46QDm3o3",
  "key22": "5F8LMKF5LXu6AxFYbifsEQcKZZCGXnK2ysyxJhCHhoBK2k1d1rjbEvpDKdsCwk4zrZo7DPh9GcccrugzB5pUzpLR",
  "key23": "2nCfZCLzt8tmZYtwLeVzfWT8Q68BGw1ALYDFXxxSQMG4LRhfYaRnzJZiA2bhUPG4CS4U4yTFAnhhKnhJJqWPvXYd",
  "key24": "3dHpn9i1DqvsSCWHnZnEzeYMddGSakAnW3DKwYLtBssDWfEjWVFVFiiC6BF2H99cJe1YUp5wCvzm86kpkkRmTjEd",
  "key25": "63KE4LQnfq6N4hdoocBgfMrujzhiHAt9km1UsY466gUp7BYgXEb2ZgpK28WdTz7bbSv5dYNhU3ZvarwVVxXFFmfo",
  "key26": "5JKgYtcg1uw5zy6hYRQ9g1Z9sEmsgkMrkJfVNixAQTikbRJoKJ3ESJAtWjR6koPHza7qq5juHiEWqT7TwahtU5ef",
  "key27": "9ybUS1gbDu9Fr8nwFwFyoFB1XdVeLixxZYZP9AJeyeojRKKtCGTXtDYoaBNp1PmqxkyycX8bQXLoZXS5XsX6nov",
  "key28": "3HqkMbkRHk5JrB22GZ7Zo4k8xQNLDP3kSfZXjrkS8UGZr7rYPdhNqGnKw8vnY6yTY48aU1FPLfXoMmZEwJrFWqeT",
  "key29": "5iEiWe8Q5mu8NsxweqU8R7dUdZSzaNnCuwBFjaMafJizp6VqzWLuJFFLVYBMgtCJCzRiNDvTwLNB5WaLcpxJvbCf",
  "key30": "5dLp6khKu92cHb61yhobhmRZgXckFuEVr3LE94NxKZRscgi2ZMpveZmD6nStKBEegFmwPBwbxEGWGEZREHuJTTQE",
  "key31": "3e7UWwatR3xSYida3tL8vFHMkByE4YdwbNeRwkEUhETA3YJYoxPX7Rt4k215KyCZVRLcHxcnfTEhowdu5necm8h8",
  "key32": "VnhjmBwW8MNcP9XELq78opuUhXj4FKfwxpmU4rrx668WpEyDAxZ6YeMEVmXhcb9uJgiPf6kJRCWzQNwc1moFvJF",
  "key33": "3ptoYgfdsmWErxvpfC3ZKbroVeEMumasDnErAoanLmEotNqic7XXuSMaacf1CJW9BJqe4tw4B3bhFDiULZsEGcMF",
  "key34": "4DPTN6gxg5hiKxRrHqRD54xZyqkKfXf2P8dLUKdP8W88nj2eQUAH4ii8hdKxVga5QySvQdVZszaz5sLwfMMApXyX",
  "key35": "3mm8jhtCD3xqq699uBFCXB4v54eVapdovVeugMWx4tYgKrGL7XQravvZd81vgiY5quVdeWFWuk7hWzyauMp5LtdK",
  "key36": "2cDiqhk9dCwxhhYEMZFg4S76rUQLjyUjWP3rYrqUpq8cKPm1ifBDkFQFnwATb6hbVbfR2UxzAA1mXFx5orc3eURc",
  "key37": "5LUHSRC7EddW8r1c6hxYw8sW9YLsoQ9EH1hYQHJk8EEGhDATs6WRPKtTRfMF5Y9BFqZSKZMUxgpa5dVXyguryYZz",
  "key38": "5a7DV5XNGzALX1Pv1CTKsjYinoPTVCgrirAdtL3a8beiTAzD7kf7zpTG7L46AUeuYZZVBpHk72SWC3uqpjWRdZDz",
  "key39": "47e4RYsrkMJ4ZKDm8mfDYp2WTDKeHjCnqTTMeaHcMPFetw2BFcJ5rpstmEh97Ga4vJeijLa1qZmLiPGWZ2RarXnm",
  "key40": "3VztEadgyE3MwgjMzhV25v93yy7EGgn4RME3BDkgwxuH6A4R6XLP57ck2dAeVqf6mbpsReh7wyhuKDHVJdzWuPjU",
  "key41": "4zw5LXrwmqf5qj5sS5YeHWUxueYi1ZKugJcTWzWGyJSrHkosbtJoJEuqm9Jo34czcFNWF9UPi8j5qD68LGGe1uZP",
  "key42": "DqUZhTP6aj7euuAtsDf8AtcsWDP67QEudVgMfEKvmSLRrBRUDPhnT89nQU1Xe9QQ3YZw3K937RXnzEogpqUAWgY",
  "key43": "58nTkB4PBhaRfhjEJu73G8D5k1KQAww8Ccdb1dyMXPAUiVi5BhEzKkYcbEnvcTeiFiQo9wpErhwLmYLGRXtxJyfB",
  "key44": "128BGm34FyyxoVZ6wWyzGr4gekMj825BFQFWy3URKDavjqk2LGxSS3Fd6YzY4yL3Q2BsxCx5Y2qLe9in9jpBGGQM",
  "key45": "4ru94Ji2FwhCUTGbpYusSWbe63MLDmEoPr9XWErtZZVHV2uwMKJJUmvZ4JMQqMxaDoQwjmMWBPV2t3HwQ8Hihbsp"
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
