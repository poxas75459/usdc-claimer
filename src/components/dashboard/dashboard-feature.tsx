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
    "3t3H6YJXfoi3xrQuLbcsLZi2Rh4wmypM6chfQauDq4X3eK4Cnb1mUnWYBdRfWmsdmVHD2aqk8Y1qxLDsSuZjUUD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sCkNDcMWMV2CrPjHyRmJFBQzzAb8G5EVwy4TvGPkZQ24tWmspaLgRNpz2vLV9UKZGvrZPri95i5S68N6mzwvYBS",
  "key1": "66BniKXNrEz9WYpnCs2QSDdUzK7yQFqHFbruRzEDxn2v4K7CUPPki92H8djxm1pdzWdJVL4o1AvfvG3GS3oqAsEm",
  "key2": "2fzcyoRq8DR9UmPHLSud7TZmmtPAVKNhURiPdTwvqs8HkoctqZ6tg8G8TxGinwpmmeKvcFEg2ANLxFQkoqspsy1E",
  "key3": "43wVi7e3gBCXMHUUH3Eg7ZXrRksCuJV5oTLqLhu6n2r5AZz959i63QsfW1UaYsCnJMLzo7hGC4YLgFZ3M4VMNo4F",
  "key4": "5cy2ttPzULxoUAasgjfdwqocDfvpnKchDGSUN4aJxFuELYPitoKtCp8Y66f7Tifx5KisbNHhXe2vEFBgWzeLLgVc",
  "key5": "4ynpKsw96GsvxWYCaCx8QN5cJE1tQxF3HzwGkGNBkD4F3y1qWow2AhgcMA3URhuzdnWxW8thsQRdNQ713Ho9fqJX",
  "key6": "4yCbvVn6m7XaqvvgJrApHXjNnTZZtWSdMHndn324RshFd7142naZuTdhVrUVkAi31tM1mm1aXU9LCN5b8CLgYoyq",
  "key7": "5S7p24zrVtiNeApswR91jokUgwcRVspMFePVe4T9c3JpLiwgXoJcrLjXfwDxVS7kyGaTT8TLYBqr3oddpd6u3oU2",
  "key8": "57DLe6wXoBTme3Ye6UggtTtsRTVDwjHKMVhQNVkrcCiz1y3cBRLfDw8wK5tTT8FhvkmFT64XtkYxmNhK5jxTv2hs",
  "key9": "3aCxFrQUPs37e737tKD32kzRjB1aeM6xq35qMBQBN5QZ1WwyaSZCrmJbDynNhhNpYiPs7zGun3aDdnByZ9BTHxUE",
  "key10": "mZoBKeUQopKFjTqF8bNCZC3qpyxkRBZ3ykj6uE7aJHTv3gdYqjYXb91Gbg3zAibm7iesd4bziL8FVH5rw9fxHsj",
  "key11": "4cGBrWsL2dquhBSKVBv1f8NJprAGzRGFVvw5eEGJ6RYiZ3oT4PteVWuHiCezUDeCpXeCzPkGLJDvz8bEGMwFUxqW",
  "key12": "4TpPiAxp5WKsUyuJU5hWTKDyEgVSXiA2YLVmVVZYZmQPUayEydzbP148zNsQcXQG7eUnjGKchLh3xPdthQ8BPmUB",
  "key13": "R2Nx1qCyuAULxbWjtG9AGTNUXWG5jkvGNP66L96BstAPxHnXqXcdxQFK6KQKykggSuvv3ZENbWKJ2tDPECsjUpw",
  "key14": "5PHbxvW3c4vC2i7TWhvYvqxhLy4YdWsUjGAG3yQACzu3itHrAGSxNSm5PvYVLSJLtR3Z5Uhv653gcpNJgFJxs3pb",
  "key15": "2hrry8VSbyN9ChGQbC8uCNHrCSBPzExkGEpUN6SohHmLMFRvpBsvsDKc3hCJfKrRyL9g5fd1z8a99J7VPPrCwsD",
  "key16": "3wG6EpBMnuRWD5HHf8WDwGVqPy8oZfF9JthYpH6KtYQJZP6ZyA3obGhWZbGRpQroLNqyMfMHwSQ6DgnxzV7GUuib",
  "key17": "2phSa64uzLHqR4dNQGmzBqM6qqaCgZSGLjRNhJYN2jUCWvpSa2p1Lr68ZXSi9xPeuraGr3sHfBM3E4vc8HAYmwCv",
  "key18": "24bxu8VinDmUmrFSUyH4MpWtf6T99uMunh58xFUjhepGpcemqMRij2gViaEqryVr9kn65wQRG1pTcYvXJ3hHFYxb",
  "key19": "4Yu14jyj3rzBysbky1U1djvRC2pnjZSWat6KiJ3kYk5NDsDrC8QxxK8JCBH5SdwwtLZibZWfNLh9DScgvrT2BEtZ",
  "key20": "3XE8ZkDj4cEveyA1V1oKoJkcQ1Y88x6ShYyBStELJLMcAMZUEKBGFLxfaZCdgVhmRyviSDNmjmVQzoQDC1woaLLe",
  "key21": "KWeqQT1oYyDDiqbUE47BkKVjEckUaZGpije4RBwfQthDEdXdqBaGmm8kC1pZZJ31hRLCvTMZuH2dCvHQutmgJxz",
  "key22": "2QHp81T2EeRaU5bD2jNn2W2HDLANeF8arRttbVHUk6vhqZQ3mvhgUtjaW943sPXTAWYPvR7hikxJgKrM91Yf17qp",
  "key23": "26juch2Ue5Hu5iwFsz4dJhc46NXEKMhrs73jdAnZq4YcLcCTMDmgeQpEMEkoh19U14mLgEtwXMXZjUNxgY9fNsRu",
  "key24": "3QPxsYuKjrX9ZUVq7HrzhBJjCY6r9pPeNvnoZJ9F1eyxDyhQTXroNJp87D3zxx6ePug83kkEi3dnJeU8JZXCdBHx",
  "key25": "4brBdtcwUqQ518uVqLjQPQrsMtyTifbaiNpQdW16ptdtt9Aavpw2WSUjAzDLa2wCZqhEQy2eHc66ysCyGL9f8Sx",
  "key26": "4d3gRuxDEsUCJj6S7xFfkHtPfZnba4qEzb8QRWMHdwfE7LHSoW9sB5cZDbrSbWjzMcUez4ymt7Zx5Y41J9PgZ4G3",
  "key27": "2WNq9aWYdEJ1oD4gs67XookmohDKunKYE8boZu91yaTjL5AUY3uDBupN7mc3F1jDho3KhR79aKKw5ipj6TXfkXQo",
  "key28": "5xDnbGEmXLxfyr2UYCXEoYp94eBYGiLpWVSo6oN3bkNN4pNFMcHjv6WHviGZJn6qUbUQXaU3mZ88ULXa9hyUR1fS",
  "key29": "28eqAuhf6z3bU5tipXSGYLuXSE3Zqf5yzwG4HTEvZufsXGxzNDEhC9aXGDHUdA65qi2z6bgHK4SRFSEXEpF9hCPG",
  "key30": "2yZ86wLnjvUcd24MJZR5xwrHpfv6Hk2WSRYQXtsynp8Q1vizPkSsFXLRdhphySt9WXH3UiwTzqoTGMTFUtXiobME",
  "key31": "34S4S1yxZbBZEvxQpMeH8QtXPZbh3fxFGnL9sXHxLi8GMG9fgKk4iGAHEmXfVp4vAzRDnwxiB1hvfDJmbFBwNU7g",
  "key32": "4CMiL7yd84jXPANMwHrzV3d1PjyQHrCdtnQegBk8buiiAhwqUcmCxJ37MVmowyGTSEess3DujUgx4eE9F5hXwmZr",
  "key33": "3nQjpYnEzVgM51UniXWkY8RgonxNxYfdCTmChJ6vVqNsaPn2GCBqeNmvyWmhzRS5aAQtUpfvS5TjYjL2A3pxCYJg",
  "key34": "3uPENwFgSYA9UsqBR7SLtUq5NjaffWnk47GoGxgWuF9sRSFNQcMvd7Jr21SnB1bczbFy2XtynAckpz9CKZRyHAmS",
  "key35": "34pwTBgDvUNkJf9wgKkV8F7whJHVVfKRyrd6oJ9z9DM5NCgY5WEEtrNLc94AVurBo9XxECsizCieAHFp6hXTxXTH",
  "key36": "5oGGyJvaqU2tW8Acw7M3zR6M54vwWPnjZRY8DEEv1hhpsHrm8pRT5hcNKnC8ykhRK7ZSw7HQN2tdA9hNvHoBVQwa",
  "key37": "27f1ugEvMjuS1TSrgGyzkgSkJMcZi74NNnAYejJFFih6Tnwd3uJxNPGVdzn2PmQ9ERbkcRYfmhvJiEwnept5uMba",
  "key38": "4G8GEMg8pvpkQzx8MsSHsdKWw3a2gzvbBbyizBikcXP47u376gxmnEa6Hmyh9c6w3h81PZ13JmqxRbPiao4ww7o1",
  "key39": "5daw8uFRtfXVRrd3Uv2UBedwjCGms8szux4cVpeDnDGdDE7JJewGtSYiP4RpWvAbpUqkdjmf51fQkLXrCGjKZBiD",
  "key40": "5abS6b88x449zXsqM1hpgJPo5Y3RyBKjz9LkdVNFpHzm7zyhjVgr945h9PfDmzMVm8trZKiSbMVsUNiw1SDTF64M"
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
