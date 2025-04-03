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
    "4pohk5fPTBKT3bLVV2dyzke1i8ZLWNVQxD3DuLCJsLxhxNBVwW9C4kmioLXKux45TbT89ioWsxipnShxPiCUy3ev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFvr3bBwMkdgRdi4TV9tYkds7g5iDePSgpY8fhSqk8s5Cq6ix3NbRowG32jnDLytTmTes9tJMkt8M8B8MC59R7g",
  "key1": "4pnu5CSpkCdwpCB28Nu6C9KkCCDcmTHcdJMKLorgmRhTagfec5ZqEfDeBy5rYx4EQeuWvUGNMk8AqFFABbUGU9T4",
  "key2": "36tBgTYw8DZnjPqJxSgrjbPR9jUAU3ns1DnKdbXpVED7b2NGS9UGshPJ1VCxFTkFazSmHwVZ3CYCGdBrhLJ8nGbc",
  "key3": "424mMhgnAMzoo4zaoKYYd6PZLcCU5CBTQhTfhQwbHuysWu6VqkNziJ6QmNoT5kQ7WZ74WMZWqqehvb7xExmbJQCX",
  "key4": "386RJmJ8dsCeQRMoiKH7iyoaZeDm5TQukXRKM4YwcTskA3asrRHgnDH6abiHRYCVWFHHbNrHuiDcEnKWYWDJ1SKN",
  "key5": "aRqQqayPg2dxxFK4SdsDMx8ThixoM9utFZ5zEikGWuRJnnVR6nKUbsxTjTgcWygAEZ2VLQJ7MDTqmRi1rYfE49u",
  "key6": "31wG7yBGzycEY7MMUdaUhUKiZmiYHmpDetK7pCFhuT4b1bZXfhNzys6uUbbjhqLJEKuvWhraat8bgopPJctQ4YKi",
  "key7": "3MYir6znGCM557zmuTdPUKcJyYA6eTKjFWppqmtksagykRmpXeMx4TQUy34DmDqLNHzbSpMME7u7ZWQRyQYQy8fp",
  "key8": "2NxLYs1y5bx9hcVgYqxrrtLodm9juN2ufjc5cikUMRPsM8cneiENJXpnz7KJq3iTJDi3h4vbytJSuxLHKxQsjRU1",
  "key9": "5mRGcqhQ55NXmYdgFKM2wJKvaR6jTVHuoWybSyqKk5Ki1vDe75mEg1vh4s9HX1Z8bH7hNx68VkE2xdoYc56vMrJN",
  "key10": "3dUrEnBt8Vx5Yp7xENxQj8zWWkJHesgZPGxJztY1b2J9TEmurJV4eaGkfxN1XLdxg2bTb4PN7FpUseT6bP8T4ir9",
  "key11": "BJB2Z8dayCLpEMm31bqbU4LJKgwirkmC3hi3UbsrfZmZ6nUZ7TpM7oieG8mADPwdX37tNktEnPd2FLRdviR8npi",
  "key12": "3HHDeKcCFEg8HPtqn6ZJTajVyW7UfbMLSiAanw39gXBxVK3TE8Y9jSQ12GGJPfG9vhQCi6zteK3wrygEDPiBpRVm",
  "key13": "5q1Z6Hqu5t6Qud1RYqRN2KDQ6dWJjJy6k8Kt6iUnniyiqbu8vTpaWe4Gn27GP1kPPxMAFKAJ6vuJxKQwYzSkvDGi",
  "key14": "2nhrgKdKj6b7PYU5ieek6sDhWWPyH91C98AX4gSRTQyLraayyafoLGhtCxTEKeptNc4HeMTw8wpRxLiYPe3oXPPj",
  "key15": "63GmSyc99gEf8njRfVcE1aHpnYXeGQuMGGsqRrueTKhwCKJpusd1PFzUUGDMSzvjKp33zQ2Fzj8pzRzegJMdZgEG",
  "key16": "QkKU8HnMM3rFH3vYkW66kyK5hzxz2z43oamoNbNvKRBNdjCUXF3FxSkqdiw2YY1TZYAHn4Z3ctwT6MDuwvrHy3L",
  "key17": "4GcQDsWrMFgpwRsFQJ6aKE4rQJu4R3efw9JToVfxNRimCfygpvpPZm5MdXC4KZdkJmNApQ9naAPLgv4Phg35vj4q",
  "key18": "LE6AJVj3qqpXUALA7XGanA8jYYtkA3h9ZnehxwE8G65U4faV3DmVCo1XWLvyDvubWiz1ZMbYEQZVGMVzs6uVC8Z",
  "key19": "4aHzZ9WpqvpnDs89H8q6eYDV4uXXYsfuL26hL12cJ8wXxFfV6PWK6RMBEzVZwqgSkvVazaqND6vASFmVw2Q2S9H7",
  "key20": "pxPLxfeYpDLqEty4YTAp3WWdosKZh95FYAKtJQkcCpPFWMmX21UsLx5A6XHUgcKUnHeMENzvUkxYYVHPwD26ZiC",
  "key21": "45HYrkXFudsNcYUTcK1QkVwSaedvc7fsSsN6wCs2dwTfFd1Ux2Z4NzdaTnfhPLnLw4L2mfDUYT91QYHGBpPaRfKw",
  "key22": "5foxxAPJksnP9hGGNuetN5weGJxCHDqVZ1ivtztZK4AFAamY6ah7A5FiVH3vuymp4mB4Z7dhc8pUPuWGrgLBGpDd",
  "key23": "26jMvXSSGzk6PmLyth6na3vMXBhLw58dzcFNZrZWka3XUjS5WVW3KghNXDZyePp5t1joftxnWK2iLKLzngGbzCUn",
  "key24": "2Rpk88YGD2KxQdNoDSnUC8ATzB5z4HLprL2QUxU4ucN8uCeHkhTrYUZbAMnYFLFhtHk3GHouUvTbxVuJG2FmgSWJ",
  "key25": "3XpycgnWPEu1SE3Lba9evja2sEkdvvzpApdZCGXasRfG12dw2CzLcmcAu6izFFw4EqodA9rxcHbQgp3CfnprF4Cp",
  "key26": "5xMj76P4kEdGZYLHpEh9LMpNPRdKfTcm3FoGKDabkVsj3t9ZhvBLughZPnyRskDR22fTPvwVgGZ4s4QNg6FaBPKK",
  "key27": "4GRVLQBNif1oBYeZAo1CARK6ZMVCnFeMg6RkWqz2HZFJdBtuk3aMeFuHvFAUoMxti4KqN6YbHqNVSZxdenjmVd17",
  "key28": "JeEtJsxPL8eAeToJDhJPpXnzkVbpCeEmTW4rX3XGhiubY4snyPRgj29BS4DvvjGrFceFpnkdPeRvHcuC3t9gx7W",
  "key29": "8JUNkZTjNYMn6f2Q1xNyWvZn5s8UR3LYN5oRk6656MSqzU94dHjYdj8LJVNF43HQ22DHwvcRWFGw6Jc3aeidWAU",
  "key30": "2W656V8y2W8KJc1SLkTmBwdqCjk6FgCdvGaK89dDdRkBwFZRFoy94tACBX6Q1h2eqStJp3TzcciUCfXxoccq4Wxg",
  "key31": "ARSx6mHpFAJtTNdNQwu9CFpvzDvqDZgxEEMNfPWyaTDf5YkopBd52bBXja79k5cVo9mNFD5bqEbrCHrsSgboc4n",
  "key32": "63FDigVSoRA2rvUwbgfdCmWYHfJ1185J1VGU8d4FK5fDxBJ8kH9SLAFU57CmvKLuV1cKYKS25Buuo5q1CSRpUBTb",
  "key33": "CGppaJscBz8jxPuAhcSMgYC6uLb1xqy8nA5z4hQTjcVxefvfibg22cGXLJKRdEinLcs1EAyjesc6ioroP3smDQk",
  "key34": "2EDVvHHEVW4NseMaofToVvpoRipNpTiDfKN8YXiNymABUxWqnAtSMLTz7PX1N8tN5eC4rqg1Qxos2TxijT9NAfvR",
  "key35": "24pq7rPNY3RmoirVn47uXJ91hBFDDnYhJSZ8zfatb9B6MmdhVYxDQDoby6gzCqJ12S8TxKkyZ4LeXpJR4KvM4tMD",
  "key36": "3jeaX6eybUqg5XrWiRmTDG8fARaxA1LXE2WAt2K2E7v6iFFfLBWMr4Cc3UiBcmHDRdKdJmVWe4s4ij2mWBqF6fV8",
  "key37": "2wakVUnFCJsvCgpmQCE5pfHuXuGUNLYT4sEMYLK8h9AoKYf1ruahzKKDXM3KM1zMcNgSonG1LUiv8VRYKsuzXfCN",
  "key38": "5hSgALhEgLE39LdVf521n876yqbR1v7bdjgbgWYWBGcoDQKLrRkm1YGvvaVSDdnxEzqdWqJtDD17WUkwHAfAkeEY",
  "key39": "2TLdbfeQxkwHrQcVWR9B8Tt1FaUZUTGSQHcDVEykkrYhm11Jp3eX1XzgTZdcj9KxHriWmHSVgmVCggJtMzE9c82b",
  "key40": "q3hb3KhSfJznBMRCizRNSoCpHdKPtig4nHefdoLr7PKqRYwv71ReCiHvXKrbFUDqFYRrvZe1RQcerueNBiMYrWC",
  "key41": "5vCYUcCiinWyvpN8rvhVJCctgX4rgCUNzHZRnqkVKj8EKLu9PsQdx7YzBjBsMozybGC8tdB9mqDaA292WRW16eV1",
  "key42": "4fDgpioJAKFYNvybhiBcfHdPgt4DTrLa9zcWJt44m7JiY9g6mS6qReBk44f5WEw3bhp1qpJtnwQuLoHYqj1ftyCA",
  "key43": "jmitzh3Ww1UXHuUgAH8DA84FcotESEGdre2YZrHSdcxE1EEBR24cu1dZ31kBVhMkxJ4MHuSnF4dZM5ym4hyWo4a",
  "key44": "dsFtZXqGm92bQKd28bvFcBfQH6QqHkPKJEn5Mzt1tBBQsEpbBiARAz4fPT6dnARckyghh9BeEqbdaH8UKSbxdD3",
  "key45": "2mYVhWGzxyUDFaRmHq5vwhP2YyAZFrr7FjMZXqhQ8D6MToidk3aC3vnDtxwdtkNi12Zf6qJEegk7AKyXtZvmzkwr",
  "key46": "66Qt41R4LuFnSJfTEJMcRUHCtprcz44C6eHhBvC98aHndM5qfVXUAyTYykAAxRhp8Jt1MUy4bPiHk6WGb8BkdGDy"
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
