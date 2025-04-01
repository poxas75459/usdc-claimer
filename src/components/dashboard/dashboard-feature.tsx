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
    "4N5MMNKxRhKwpxcB4UhgiPgk7f8M6pQKhyH2N6feZbE2JikiQPr4X5GjkP57YgQUuEDJ5GjZcPW13oCp7tdJxqZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24st98H4cuzMWt2NXaogR8FpFcxhPrNV7pSQqjD2g94BkBRbscLBCT22Lurzdw7VyN7EfDwBfkXkKbCgv7DWZdPh",
  "key1": "5MXT6qSNnthyCcCqGaJQvnyP1tDH1HSgrb3btCD7Jsr1U5NakLLbwyatZRjvJFSzRHzNftFNKBfQi7zQF8NeivzG",
  "key2": "5md6Z1kCgHaX5pWVV8GdGW18griQ3fC2V5V4NPvrDrFJ7inUqVP7rFebG9BdqzKdxrAgNXxRxR8a52mrzVjnJSHw",
  "key3": "4YNrdZ8ic7sDmSFyijad4AYgWqrMmNmuub59ZMrfvhaP5JkRvLP4SDtzMHFNdQa9MnMssnwVtGZX56A1efY1tcfe",
  "key4": "2jZWoL1oS6ATduZ3nrhvMbGCXQPpEioMPJtEiviV1EB7zNM4HJ1NW2pZJFug3ywXeHVEdngKVeaLBkygKPnCLYCP",
  "key5": "3TrSsARVZbzvYKbQ9XJNR84cR7WsNPCSsYpnsuJr2QNTi5iQPteo67fikB1vH9s1zG78ftPRYBf11RFibTrxmBZL",
  "key6": "5L8vkHx2b64mnRj6E9SsfyYDpmsTB8HrH2mKdzouoqVxhX5hVjv7xQgeWYXFwUAwBCtNjgZFcMA1pSXe4pfYAs4u",
  "key7": "676wUw8SXvNgpKBcPWptmtXy5D48wJ585uUHtTMzHBV2kD7TDvF6CKAPmac7azfFZ8Fhox9ZLWQ3BqPW8UjrvyzY",
  "key8": "3ekDGRvVSkgGgUofqZR1iBb9WdLJz2FfFsxt9Q6jfhVzSdkpvXrUbexUjTLLb6Ng6h3jpbzDGVQs28bYKLyeUqAe",
  "key9": "4Va6qgnw4RmTdpYzWgB8TMcii9haLiynX5pYv8G9yzMc5SMWLXpUWzSW1ge2rhh7t2F5Vqt8H2rHCp7pYwqz6Ev7",
  "key10": "4Y7GU212eoujSDVmHajzQWqmkJWNfG6ZMxDAxhtszpiZiJX8Ue8YTTU8GkwtSD7nh1wva1A5KCGMeAyU9Hox1wwo",
  "key11": "JvMFQdN1cZv1V1kj4u2Nm4RU44w6SfSi7BDaj9satQaqho58hJZRtAzHbX9X2VfAvMvUnwRCAChbyAvpYPBkmEj",
  "key12": "4i73T8UHycpJCAMvStkhFhwBRrLruAt2KXJUfWAFcM9Foh9oeaTUsXTxyrSN2ZxpZXdNxkrenkECLu7NqqFPPf9w",
  "key13": "5M439G58jGfpySPCFucoFo4uQjh4VRx4jNXxzhnhGz9ApyXtLEHtMWd5Dnq42H6hYKKdUm66LyVaH3XjkmJU4qr6",
  "key14": "5Uz22dNbHLwx8oR1U5FQY5NKT9MoGW1j4v9wNGf6Aj2LDFYy2xcBCZAdcQ5wr8y6n9v4jhL1egLJ3Ycu4nJd4T7V",
  "key15": "UEq75PZ2x4RWKrJ3LWowVSYnP8CnkZzcLGCvXPvpaxYB4tCxs8YjJQMLsijpC8uEfZYUST9qGa6CMHRPCKi6prB",
  "key16": "fLXkQRcaXGx48E1cdc3HTibhWaaQRBKfQ1ZHSeYqTqAxBzZfLCUzFNtjysk5cBF6xbMLoJjqmzEMhByf2UfzFMw",
  "key17": "5ne8jukLsd935mprms4F2wwfdS4H6oNRJcZpwKSvZdh9yFTp1nbiMPJ9CvtKdnscgCmwhQwT7poFyHi1eAsVdxj2",
  "key18": "zKgf5mwxt4x5XaJG5g9HD9EDHSmfpXfiy5PvqPBZj7dELzX4H69Euva2prx8Z1TWVDLZnpUnTC9C8YM2AjeLM7L",
  "key19": "5kJun54vrUHo9fJrum8iVJPyiNNruzuKC9QDZSeJTopjZzsE7r8QzaRWDcBD6z5uVJ2CBPMmxLZ7PwSHAMBtWHh9",
  "key20": "5NMRR3nPApqzQYjizhTkfGYutUCrn4ZNuE3oys2zZA6xErW83jES4FPJu1QXU7H9JMwzYNf3gXso8Trmkf9ty3Ct",
  "key21": "2TSfX4gpLwkjmtEuAd1wwkgKs9CCUdSKw2ymDRQStSnZSnZGoTdr2ecM2H9pAXgMQjK4j7QGCB9trY6vMA191V2j",
  "key22": "4ji7hnuQxGXBdNJnGtqkEdbFy9myHRZ6etBGQx1E8N29aA1MYimNe5FAU5iaFcaZYuLkfYK5ed7o35xMCCMrhrdK",
  "key23": "4k1HMfqqUusN3kCzQDSqTAr9qLJCqaRyXBPD2VD7cjSB393PhtwKXNwWvbhsu4YtjxR33HeAsGMay3FoJc9JcNTy",
  "key24": "4dchpdMhqmo8PcgtXwGLJ5M92k58L9PMvMWo5MjKzxBwhRuD5LsHQXgTXidJkJh6nky59b2ZMndUSuga7tHTjCEg",
  "key25": "HoGtpFw2MsND3BrSyQCtJMevdKybvAdAwV3ZTGEudGVXsGqm4y39PqXhjmYUB7XKcsHfHo9iBGLh1PLzoXdvdsq",
  "key26": "doDVhBfWaf5S3H93sgjg9Xm4kk6bHWZQg9orkFpY8SWqSpEC7ufBNEJvvDst7V6fHhmkPkmrkRW9yZiZJL89J3j",
  "key27": "2pU1oVmZKjkaX6Ctvr8PGwXiEryhp3sSBK2Z7LwYUwnbQSn5qsnpuAHoJTDumqgxdnpdDsqbGva3YDimAJc53mPG",
  "key28": "4cSnhsyHJTaKnP35UosoXR4sF2rh6vaFUvPojgb3GCXqchU5v2V9M9NZ4AzjPEWqJuL2nhpenZJC134mb5XHdwMa",
  "key29": "4Dub28QaZf2dfoiJRz8x4ZFpKuKrTByMhU3kEchQYP7y9hoq9ddLR2KFMK6ATkeBPfxboJHiR9WhgdMcnQNNYQZ",
  "key30": "3RAYa4pa2u9SrrzTjPrBiAnBrjhrsAmBn9wic2CQv7NQwXvTL2aL7YhxS919p3dEsy3D3jUoejQH3mNSwbJGGJ3L",
  "key31": "5u3cYkLpwEaiYMEaFBWYcH1yddA6j9zcVyLTPKER5pTXy5dYEoG1UCQ9yB6uxPCSHqpPFh7a7aTrG3YmVtnf5Kjo",
  "key32": "4xdM7Cj3DB9cTM5iP4F5sfMKgjgz3pMc7FDVVZ1Krr2ZCbqoDw71JVynCfsD11ppDVPk3cvS81XFM31ft3ud7S2G",
  "key33": "qdeZziVtw4rKEsyPFfNmY2wtcR2kpf3QD9SHzhcmjiukYKamDxMZVysoSBwqgTHpXi63dapocTvh6osw54DGjwa",
  "key34": "3tQY3UzgorRsWq3AzwxP4Di4aHx64H99H2u2V5YcaRWRwFaWzGisa877CkXpG8tc5yhXJFdxrMY4Y5QJnr7yiyi4",
  "key35": "rBJpjAszVCcS8ut1EL23mwERK9qQwfQ82ryy6HXBg4Xpd7tdR4b6DruECYX4LYp7DL5Cx4Wf5zaXU3gU6YrvjK9",
  "key36": "5AqCU8N5hbJgM4KX4URvxsC6Mumt4YaJeSBKq9FcofTUzMxJ3FTbbBXbo3uN1kNAmVtFDLrtoEJ3fqwDRYzWWGiK",
  "key37": "2XTgA3vve45jxY6U5GnFENkpK9CgavG8jmkipVV49ofDoi1zXAxbwYXh4TdBK12QwFa7vUYHZStbAyvKRZtRnjuc",
  "key38": "5kz22hu9mTyS9dg5GjZXT2rtFWekx58DvAWoTeyCiPnxJJjzedY1ifbE7qNoyxHDU4qRLzxTfeLgpdpjM784Y2kf",
  "key39": "3FVcmwJV7f8P5Q4vDY4wtSRBpEeQQvmRRq9s74gSx5q7JxRhYxq1vU7mXccC4XP79uawzRmqxg5dzpCB2zvA2vtv",
  "key40": "53VUbRkwLf6Hdj6SHwFEB4Wt3Vo1GxLicu7RRg29aLeRBnpgfgxiZiQjQT62kHzFHAfUCYYaLeCCfAuuRCuLWQVp",
  "key41": "2EiZFYNLNSJr3Mxtx9r9upEU7fmkRZGbg4wPMpfueppDMG2HZpAmtdxmCG32DDNp3bz2vcUYcuh28zvWdd3TVdG",
  "key42": "5Woi4TVUqmD3GXBPHQ6tyRDSF2hkGaMKJnzaF7e4AgmcqtnmVhR7FdmPKoNPrakaeuQwimTKVa4ErEN9zttUcikY"
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
