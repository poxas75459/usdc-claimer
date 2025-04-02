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
    "4i6rDDxgeczQZQzwCChv81W5HB6BogLfiPYhXZ4fGqwuZhv661uSE5dHtDUoePYQLnyAyUrXSauKNYLsyVKH9HTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31j4ZTANNhAUH3Lw1Xyyvw5FkdpvopHExBNy78NxepMxa3Uwuk7NALhoj8aCpQuPigYJMLZuf4NRysPFHtepp8ip",
  "key1": "24UajF6nwfXFL6f3vJEEAspdPsRLc8QpHRJ2CDWRyx8fZv1Fd8KfmRpveDKG9Xh8xwP5kcD3qNf2onSHVJnMPgDx",
  "key2": "3JPYU1q7BLyX9mPxT7DefoSCSLF3pGjnrqqSWqwcXPairQeShrt7ffdEvMTekPXdd4cSYEMdAbXEYd5HgreeBedX",
  "key3": "3wPNEEFnHe68tQMmGhwxe99q6MZuuatX8jtp9poeEUkjmZVmwiE4u2zQ5wpe9WAbMUEkFDiLvBDEpMaZqVd4HFTx",
  "key4": "4uph7d6iGfxVgJWHqEvyMbJRfagdSiQkxMQhN2P5L9kPfFpKTHDuELDY7u8zjQv7CwJJTy83yy4JKEbjBxnqg9Ag",
  "key5": "3BVXii8tVFQyHpeRqX6FkE6wVdJaAeQamMr9yLRMxQqfEhm91RbMKx37G1AYXB4FGpjYWUuCEMYAtk2mHKcGPP68",
  "key6": "5g8otqbJCGN3dbNAcPyC95tGPTBASbxkC52yYTWwNCDkkjqvYNTEvtA1G5UpdZkCSMzyETMxtFPBsXkBsgqVn6PQ",
  "key7": "2SxEpQ2Cmh6JYCNxnK5i4SRhi7AGRfntLrkdC9Qi7r8MQoGxu3an7S89VMa8icvUAozaRmpV3WdPPBU5SQMTu4Ek",
  "key8": "2nQTDPBTnKMksvSaSy3H8X55gmNQRjC9jWH7zCGm64oEbjXKuTkP6xdzsGCJi25qBNjPvzP16Y9ruZttKdT4wvQB",
  "key9": "3n7fB2Ar28jGqffCPmYx9NoE1H2X7nWbDRbr2HmMYnYcfiqkExsb6TtRgRKJUko4No4BGRaDyoHLVZsKRpGP6VC6",
  "key10": "5hH9LYqMtvRvBtKT8ZnooVrsVhk2avAgBAoq7HkBRJYt9y6D3YWMX9dmGZGCcqCMh6JsH3CNu5Xn3ghJtQV28ptk",
  "key11": "2YWiAWD3hKnvYgwvhUnCipVskqFUPbGHg3QymYT2mMez5mdHtjn9fmEg2xRzRqjYWcxSM9CV6sSbEd6rLZmzxW6c",
  "key12": "5Gw5mKJwnnxGLjaysrXK33pUqQxK7UYpusXRnJMw78Xvoo3BBSHRhYAedyYq5PJ1yuxkExGU6d9ETDCfw5VTWZdW",
  "key13": "Wy25Jfr1wFJHDe2oFzUyv9tAyWKYCyHV4iWLe81CGkuBgbq1jhr4QLPP6e8RgyCjTkDZrKBVhvB1LxdfdmdSX7M",
  "key14": "CELpS3PCUdYvSzVmDTe66phboYB96brxoRonZ1Vdb4aWxUoLYyv8N8vruD3oUTwqSykcxXXi3YwX5t7ioMU18Ke",
  "key15": "3PD6XUhoKt6UmBZmKTSm46jnWPfhajKZPpDwVfZmcHThGeWBADu5p35uNNi4ayZSrp8YiTCwnMhibb86DJcK1ZCZ",
  "key16": "5RiH3NyjuvLEesek4XnQ3xFqqWE5Hbxb2jNFVfM4ZxQQpNEPj3QmtFzHjPLmPaEYWiCiRLvudNe2CuY9vAMZTWZF",
  "key17": "57MLqwk4D2jftQtk2fmtEQQWBuKYuTahLe1PDuSLZr3gYdF4XXECnz429B9eEf39L52NcKGoMsi7YaqAmKQzxwNc",
  "key18": "54TK2wd9vums5BBjHjCvmnETcviWt8dk1MovFycxP31pNBSbcimujX7hMp6UFptcwxNdpuWUJtoo2BSR5z2TKFeL",
  "key19": "5xz9ja3s3q1u4epiXwves8thFn52QBkapMq2p9CdSn4SJmTVfYxVVw3satAvXLj9xWX662fkKi48cnFfzZqFbmEE",
  "key20": "2k4s2BfAYrnV7YYzNtZEEUDSqzvjQxJuSoJ7Bh6v9upSSv48vNuxJhmgZcU3rfR9pFHX5b19zaMoMBJeFcugbjmR",
  "key21": "2mMd237DnnRW2jDWgwfmRzXLxJ3HW3VMAiRBybdPWK7b8qnkjReAyg3kNZxyGtFd1k8mN8dME6M8HdB5zKYe5ya6",
  "key22": "LUJ8nJRvkH64nMYoSqEX8qaAJFrudEgpN2ZKsTSXV1JYw16LND4V1aVptUJ8j4qJzrjWgUsqN7AFxJzpcJXxs6F",
  "key23": "aAuZvhqvcZTsS3HcCzvzps3ogZdxYtnko3LLwoGD2SGX1TgxPBg5WadeKU8o4ym2eqSXQL3y7K5BxBydtHpYbGS",
  "key24": "4bXn5ord5QATzawQGmik7VWzhEbsJ66hFbZ9znXRCaSckXURupVXvXRn7ohA5hXyCv7hYh848PrTDvL4y8xUinMH",
  "key25": "3Q2yWbv2ZyevRaLv65XBwtYDDgw7BqfkHFm3QCE5vqEJ8RijruGidh8qtUU7vR4Rrn1G28EJDGn4gmYZ5XHDJaFx",
  "key26": "3eanvsX7QMr8ZujLQ3zmZVK2k31k5Y1NrTrFu613GserDW9RV3oyyRyYUAJfiSYU6L4iSoWxawXBagyXn6WVzdTC",
  "key27": "5UEiYzbeWVCBbEmKKuh3iHiRPes6bp85YqpF4JSPb1Lv7atNyNdEiZAdNGDtjzP793csQbBHuekUnu5FnnGqrwwZ",
  "key28": "3swT65HqodmYQ2BN4mamhRWv3PoRP7YYGiq1kPxcXMpoUz2DgfepjMeMFaap2LKRECfufgp9dBFixPjdHdH3i3PG",
  "key29": "2EMMrjrfTs7grgY737nrNnHpuhdHd2DZcEJq6YXnDWDcxMERG1DXnr7ou4hjH72xogM83CVydoV5me7QzwuJSSXk",
  "key30": "Lkp3TaqJYYcdDJTfZHrQ3k7VHq5PmYQE2FZTR7TBdZVVJ1z5AAq7J2kdozMCR8jWoBNPoAo2zZiR5BPLUGgx7PZ",
  "key31": "4Lstds856aH36oyemc3A6QRoHomg7uxuHuTPe1o76nDqbKrNeNqzgsPEpTM6CCwTinRKVvP923oG9yquwU8kMDtr",
  "key32": "4KPy71fgAHVSAr9KjBv9DniWK3PjrQjj5fSKRJmwGt9MBZdd96y1juSRKynhbWnvn4qqiDzMHn2HZzjRMgqRPGqU",
  "key33": "2caGUNSb9FsJaaWCkM6zpShZ1rfdXR7pKmbz1YV9LxK99ETtXxmTKSdnBgonuf67BiJsVQVwEFUTU2H2Cv4wj5jp",
  "key34": "32MSKtSxjTM38vSiFbUVUu2nKHjriSR7ptM23RVNQVw7hRFMVXiRY7vGKQZWTvQ2u1aSwMgY58c47WUNimM2PmZB",
  "key35": "5bpGfPyfiNdje5Zmts6N2w54XK4x8zMyQNryZo5BbZ1bH6ojCejJAL46DuedV8RC9ksb9d74dGw1cDTC9A2ZFqTJ",
  "key36": "4gPzbaYCHtskELwQewwBvFpeLVXb2pQybkC3hKbUHA2RUL4rRQ8JSKPjJXDVGgJ9aurB1XgHyobKG1JjjoZH6Zd1",
  "key37": "5DTd3kq8C9X8ShgNzAKc2e1MAhQgPoFJ1a8T2VJ8xCzfa462wHwXbHvTeQziW1kBxJ9S3WM47c2cXaYMhoFGRf3P",
  "key38": "2Bpa4pfSXeEdxZqMmszsPekKtwyMoVVQw74z7VH19tKiiib867rpt2JXVLxu3QM8gEJAFXdRbt8QRzqBswtyruHU",
  "key39": "5ZNyjYe4Lo2d7cfV6kR3KR3ppB9c94TTy9V7qz2KVtxoz22vgZwKDPMAGDXMboPGrcLGvYTeHv3hGJ23fvq9svb1",
  "key40": "5U9KFu6W1VKwtmRK9j3s4CyDDXRvigJSH6QsRaFgWgypaskYYsbU6dUzYDsNtr1knSyikB2B1PzpLNkRzgwzkXGT",
  "key41": "5cBSLPaANc5bscsXL6gzUTRexSyaFJEV9AAsE5BPQmuSmNndSeYbxv4U5dmdHftKBiye55inRSG77c2kox47hkrk",
  "key42": "34FP4ePQFYzBscnjWyxaqDhAy76tKtWqWu3c3FxrHocEEm5PQA88MH5PDoAYezeAoJePfgSA5JeFM5sm8T3FWaAg",
  "key43": "4jFesjnzjJsrafhsy67X2SwWvXgBRDBWGZqPTGkj3zyGCXsDjneXjCYFLRMGJSNgEeLpxDrwujrHN1oCjx4KGTx6"
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
