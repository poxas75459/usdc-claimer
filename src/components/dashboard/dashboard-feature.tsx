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
    "3ae2hzRiK59Ecdcc4pHMcDf6JaiGM9dqNeeZkXGqxVGMJy4RQBHzmVuB1R4r7GYNs4ZebXNofYwsgerQnuhTrkWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvP8DxdJfEXmQoXmgcgWhSAoueZR82suR6B46o7cDG19ebp8wLRAPdiK4kmdmPwfNQvNoxz8gbE2rVsJ6XRSUhc",
  "key1": "2XuJMWjBwZGNbMDnT7Ritc6gpnBf2iBEThFyacuSZ645MEMGq3A1AbzxfdkoDMc8SgqdvQGk2AnRYMYmwjbUbr7g",
  "key2": "4HwrRpvefdZgWd7LzmeDpbPULDEst5q4KcBed9mqfqaADg11b6h61363jUDhmzhifYTHatwXrhqDntKVnUKRzni9",
  "key3": "4xNsWLKKLYBX2z5Wku92UmKdGBpFja3kFqdbWokqrqR4rmC7yiiEomMLaJjF8P1mKfv1CYSu9PJYLEFSQgwwbcy1",
  "key4": "3dtgQveFJrgoyZ2xMRpN2gbFwbBkNB1tWhq6tqy9u9tSBzBeWqA5CYGA6QBoTxoN5iSTobRrCDnBLgi7CzqsfKuB",
  "key5": "3GLF45nR2wmHP1k7HCBx6qnSco7xRtFUhMDVDpTxZKTF9i2939GC6gNdptJamF64DXuuMtVKCz7HtHCaL3gMZwBf",
  "key6": "2LzWnDWK1z1bojy7gj6E4usVGZubGhVAoxKzNgvRyCW9MGp1YdDy3oQk1RTJCo5Ff2sT4vzYDBvRFLPPWrxYtkGQ",
  "key7": "2Qzm11Z3FdQV2XRKZ281MSn7rTUHoQZYu8Afy5kGKhKfhAcQzrTqWh93ihc584RdM7Qb4WZLTMXC767wAJEvPvXn",
  "key8": "381VmShAj81Vy1u5Ebh9QgXGwSiPxzmf2xDq9e8VD7vyMy96sC8QJ71RBNF5tqWNppTG5kUntUkkpCUEDb5w6TcA",
  "key9": "8Z7gWpHPpLnyYnzEuAAp3Krmo2gQuGchMhJhihG6K7jwwTb6hfwwkNQLur8ePefy4GMsaMuvkSkpfuyCejP13Zq",
  "key10": "2Ew3fFCugMekaoxFx2NP8UXsMeafoDh38Yf62FdA52ExBRzkEWhNbREErPsnoNd9W3EasitT9UhHC3nM5Bx8YA4z",
  "key11": "5xnkUC1VjsvFgFrdtkYJoPgFwvpuJB3xF5x9cZYqeiXUwHjqnNAiAEVLScpyCvUvH949gxMpUBcpM5juDj9XgNNT",
  "key12": "5hUsGejT6upe86kMJW7m7w1FsdrfwadVLLgBGuBsjjB6ZJYxHSFAf2n6buroNGXELyo4EGWJqxYEJHqV3jjc4nzJ",
  "key13": "4MSS1TFq5VVPtXEn3E2CMpio3zRmsHsb57XfAFLbWGYwLLxP8XSkiEgEF6M2H9PismEJJM1yyLYswuq3ddFz34Vo",
  "key14": "5och7aBK3FvSbhxqBddAswxKCQ7bEoNPurjXZfXPsFBYYeRzQxFArwWoYCre1oULUpCtrZfT4akRqeeAagSYjt6A",
  "key15": "jRegwbdCz5W4cFmgbiWGHL6kEZ4ayU36vzZ1pfo24b4oHdvvSy75Vkm92jqfnb8685L22tSrPXpeBHSVf2tpogB",
  "key16": "3UtF6wM2JKtXLssgCtqe2FLGUW3SUZGwBadGUZrRbttSS3e8Fyj3VKHTsBpvJPYPdb5nGZBU4VGSFDT9LLXL1AEi",
  "key17": "5VrJA7qsCDgb4L192LkuStgDRAcBzpchr1cD9PYkTCitTdmBVwwxi43cByNCvDFo77ESRqDBkzFVKGXamtaorBg8",
  "key18": "dX16sXSTLEV6fbqL3UxFnwUyDrwuaJX4bStW6oYCbBQUgHdgKLNyKnE2Xyw84hcFnL2NVirG46jXXQxEAfS1LoL",
  "key19": "5vwshdK58rfsPf3tH3TdchPH5yeUNb97SqoQCU8jmYE2KAJo9Hj4x3JTPGN42BMRzN3xoaiKqP1SdK294EFuTDPp",
  "key20": "4hGTTdxCY2Xrz2WkXGS12vVR1dSzEsevCDjFvA2HvoygzNSk2YdhH27totJTBJC61aSAyBi6ANK3zaYRzs87WzvC",
  "key21": "4LU9GvLDkjZJQzpHAnFBQzmFiVEtxmTtH8jyev1t5Kii694jc6mHnNCQdja7PrXAzy6hqjGhVXYZWmAcAcArTW7w",
  "key22": "NStKmAyerzRHhguMLUskG7wAN4x27hWZjzLEuympkzGsREdKEKQ2kDqydVHHtodHDrG5XoHQKUmJHg1mYoEDqWS",
  "key23": "31ZGRdRfBNQLMhzT15aS8L4Ry3rwnYsi4UXChX2SY9LWYfpAU3PuEV3GDLwiSCkKgemvPcwPxa6uW9mmrwBzoiPb",
  "key24": "RbCnMANvAApNMY55dtYXhRxBKy7dAn8hFsgPJw5hRhkEwUe9MtRyK4MTLTcJBTAXMDXmcECgzB5Rdfciuq6FAw4",
  "key25": "66rZg9wA7TJR3nd9UeyHpKA8iJtsPWYkHgQXSueYqsJdscEq7jp9hoayc42ciCXQFr3ffovMepN8eDQ6NCipQYe9",
  "key26": "4kaHH1L5bw8fMbTQRMKJFRzh2CB8ZaXFdckyVQyW1vBkvSKUz6Y2PcUgLa4RuR1XaTU8zYLorfwpmG2BcDhM7R2H",
  "key27": "5v1ynVakdb9q6DbkUBHjptcSKxGP6vPDuz9gA9QGjz7j2NSQVcffGYUQRLqGeDUgwEamMetDe3mipf7Bh5FP29Vb",
  "key28": "4GRqiweMhi8kqyKnYFnVi8w7adwkfhTe5jV5CT8mS1iCFgtwfK5UrMARCTnyRdZkYxW7t8uKF932iraAk3PA5LyM",
  "key29": "5ZTBiueerRJ82EMjjZbxmABNQXLaAPXoob8TUerQi8zsvXazUsgx26veUD8joV7W3gwtRra5Vrs7nitGRZXT8mYH",
  "key30": "58Nk4YjTgoZTjtAf5F8CLwaKhbfXvHmfJpG4d4QEQD8mRpnQuxedSxPkxL9L3gsCmQMT5oPAyG23XYBHPjqhNpkK",
  "key31": "29QnjDD5BiQgY8TDLb8PTYWUvLBGyEbv1JdB3cTQssNYyypAZvjvhcGcwsxtA5gBTyStSHFJQCt6ue1ofDBi7mgg",
  "key32": "RbhDe5tJy8vTwc6ae3BUGLws8ZHSA8JFNzRtgdEaajy4H1i49YcASS9jZYt9YRzfZYQWhQ8uDcWu1LTR86JAMut",
  "key33": "4WA7tVfvZfY16t11zN6pgrnSPEAabH78K8psxEm4XfhbRgnGHTAa6Qnv2a6WQU7LBKTYQUitHzonScB6RXRUiCDC",
  "key34": "2ZxrFvQ9AqX278skzuoS5PVc5toNDNtUWFmuN3Vke6ycZY4ju4K4iGb9GxEX2bLWhroqUoXnkcrYuqEZgJCJdrsg",
  "key35": "2LTBTK8LvR6AmmMkX3pzWqLXqpS6Un7m8Lj374ht5qrYWVrJqqZH7vZ3tGV3XtMrRxmaGbGCHhvRYibgsc7s9Uh3",
  "key36": "4gz3qyuNyu16q81vmNjFtGCzh5GXpHa5Pe4LErcN4imUTZZMorV8odHQkwxXWnerGX15JaZ22iR9zrDpwC9zogZM",
  "key37": "3PrR5mrQBhh8friX39aiWRjdcbHPTSucGJnxkWgETkFTS1FyqmVM5L5o2mpkpspfxmYLzNXnJJ3854aM9epihmBg",
  "key38": "2cb7tpzQ6bKorzsT74AKSsXAzgap2hPiraA7xfMGkyYWXC5rdvSTz7mR8VLvhtHCvHMyDYEg9Tg346kuE1apDXuV",
  "key39": "QD8kKUf3SRwvaFgi1wsJ6ziREt9QFCvhVofqkdybay3pNNKA5gQDQ4riCWn5Wf5zw4vCfNA3wBfiacgACdWFrqV",
  "key40": "pWeMs8L5hiRRaS85aWTxW3G6KB8xW5UUyRjLn3Sp72Y7AEXxPT7TEY9npmqzg8bQCg8wFmDGtD1tc85qLtzoJ4G"
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
