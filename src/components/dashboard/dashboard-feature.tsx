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
    "4hi7D2EVN9TDK2oUX3M6xJgh5zLpYKA1WvcxiNkopj5esHc89dBcxCUZ5XutfejqRrBdb9DYKCQjLrte9AK9iBYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqYbopcjR9foaqShWi2k4bswHK9jsguE2iyyyNa5Fmeuvdiwr3thh1f3XtVdPJ6wp8mSPaea2R8zHeQhVW31fyv",
  "key1": "5ofZ6JRxAWZnx1Fsre8bEUt16BFVka7bDehxojDr9oRAALRUXhr3nxaKsjnhVKGKwHQwMhcAJP2R6h6icTjSLYF8",
  "key2": "2tANv1X1gtcY3HGbEjcy1iHqAtmFCzKJL2awB21cwoexwxUuzWMQcKLDidUmNeJsY1y1hKEKci9zLmBXDuLXPZWz",
  "key3": "ohF1zovvFTr24f64bHKCQmthG5N7caX7RFyoR9Tbe3fED6rZXCX4ZRmMJvPCq5RSuqdoNWn8jwrus8914CXGNLn",
  "key4": "3fpUD9qSw8FiZ8gd1tqFMHRxkWcJUCLyU8WxCMSpbaySbaV7VE1nRBKWQHEGteq5RPUJR3CijWZKfFbhosvzVmf5",
  "key5": "FJvPhqjhroKbbedmievhbGURh3HHUyAiiHuvXdcXfEYQkwJBrpdoTwmiUgTZudMBKKig67a2FvAQv6pCn9Y3LRB",
  "key6": "47xgUxzt1PUUfweGZfhRqBrM4yjjFgM9CjTLKea1V8GpKf3Y3jjU5yFiKD3vvxNKpeCqFyBo89foG23SowPUtrMn",
  "key7": "4KSbMiybTzZqLyYPVeHYqMFWEgKpiXpw173TPf8axn6fgPvP6CdUYjfgdttmNeUHAcD5aZfr1fzMRHPZK5Be9ThZ",
  "key8": "5wkTYARBw7BbDKPJwtqK1M4zaGeH9pZkVen7xuVHDFdMuHi3ev6Bz4d8BwdfSy5PsYQtP2razFtzrBGVBTYohomt",
  "key9": "4y7rWbPz1z8ckCrLRj3WmdqLt8Y7YAQMvn6vM3gBcGLvo1CwRvqaC5d1Mic47udf3FoCdLMFSTKjDXKqdbqiZ6iZ",
  "key10": "64Fn6rXTAGLnekgKNPQEVQf1Syh2DCznJeNfTUrtGxhnquWpgSiKmyUTRSjjAJGG97XWT2xJjYzTHty8qZYCcdkg",
  "key11": "3sK8v2FqnCVqEbJpSrSbsUTEtq53fGneKvedJFj7q4W16LGKKDWoryr84Df1q7ZVtcHPws1koW3XvptG8wePAfe4",
  "key12": "21cXBgtedtXdfSwdRqgDMzy4NdASV3S3fdwqz2TYDQABTmas5HegHTvuLtSfxjsiMkWVoB2Kkae2GPMFEqWf4NVt",
  "key13": "67r5k4g1XyS9QvxBTTUY3K2RANKSp52XgF8nVwWWTKpyLLNuEGYCyCRA2MopTfuh1SaqRghYZ56h3C4gcLD2V3Nw",
  "key14": "352z1z1e38fkN1E8WJnWkYHZCanYsE49fa2wBTnBzhUS2y3pdKj64L7L4owtB2k2i7yXd8faHVSLtnZmBkM3WvEf",
  "key15": "3ahVbcMEybqgrTK7zCciX529rjpP8QAKm7Rdy3wWjmoYSX57bUDxWnGxhVHrD8HZoQoaeg6mR6qxuMYZ3DHGBwZe",
  "key16": "3T6x4t1msXY72Fitz5ncsdD7nfnwASxqhLRcoVQsRBAg4XbdGE3dCuB7a8xMUeCmUJ6Qq8NupCRbMYGvgPF9XW7x",
  "key17": "EWmStRQo2Yns6Jk5aHNAUL6kKh5HNRUdexg2BvCBYzSaxWLLYXrgQRoMQJzDFmewHCNY8pf4FxgRBtd8ifvWVs3",
  "key18": "4kfCztxArm3PHzu7fZrDrTCsPCKF2YLbzbd1iN6hra8QxYCf5ZkrBvduUpbXj9kibKDmoYX1SSzu2xA6zeh7gbKq",
  "key19": "43bEtzymLbycKnx3qU6NcM57gu7BzBxiVeVWiHVGibCJJMuaAKPJnuwfC7bEKZxo8it5BdeSwxUsE6ogeZUhMXLS",
  "key20": "4NHLifCYoaxVG5XuiAa3ipTa37Pj86aaMZ6xunnRNmg63LmdCVTUKofg7RdZZt5TR5RGSta3A7RUydY4PxQaidCY",
  "key21": "2Xu2rFHh1ryeSPg9Vwgzo6QqJ6sKwVWH1Mdhb3whXA8wyAJ9V8Y9BjZs4qUXuqu8Npt7piYajRjKq8MA2LhJeXkR",
  "key22": "53KFkypMtDHaXVrnGikJzF3i2zc7VcqDo8GMem2B6y4Qog5DSH2DKeQUgRELutLy6W5veQdkeYZ5err19UT9m1rN",
  "key23": "3r9ySL2MiixHPPJuhEQBvHi9Uk7i5WB9V41FW22hjaYVjx2mqBms4MiPqbubEMUGAt6RH2dRzA97Y5z7KFm1hkKC",
  "key24": "ZDtT8SUp1mdXy9wTRS5ZDZF8WRw4WSffUuRayQ4d1pkjLSxPx4QpXUCeFRisPArZgBDjiZUjpY5xE5KAvkuxeCN",
  "key25": "61yZUxX2w9Zo1ZZLKn74bvrNPaFzodY2w9hZM7XGLjesQy8NGrVRtFn5EVGRGj7xnifkn3FEU8agnoGkmzrBdvQM",
  "key26": "kSmUvLdNRKmXaj2KDGe7iDmGvYiQ4n2PpqCpgfXkb4K6YA2mby8dAWoN5YiC8mw828CgQhEfL7qAupxoxSYQ4ak",
  "key27": "3gkKY1w8pU6TqJxHz34n16Sa656ACy17dePSMxemFm5vAhub2bL1PApJajpy6brUmzvB3c85QxmB94cmjVqM2JwC",
  "key28": "5uDXPuAmAxUAX2XwwFa9GiZBgGR6WWB3Q3Cv8dzrV6KBJUCqGL9BTSpmyadYcJ59YQwJrykiFsJgnhu1A9S11Amb",
  "key29": "2c5hxV1MQXjm8NMiVxPrvACuPKofmdPBJPBsvbVx5HVQ4YTs5KTkR9Ru6TunrexQ8hyQS915jH2w6wWPDj5N6PGo",
  "key30": "35mtVqYVYNjh1aASSvsgXJisc19XCQuSi11UvRWMTZkPDoZhnYUjKWZENbeEtVzfWGpoP3FRMyEkLVSCQNqLh3ip",
  "key31": "TcDY951cjdvrHCJjjSTb4AtfcGuYMvstE9MA1ExuqJRFMKU47PgYr4JpwTFxKKg7zavkBVMDF2pFnmXG7mCjXGe",
  "key32": "4sWzR8EqNFgzvkc2ToHP8YSHgYv7s1fyNzbs4HxAhEY75xpKdArmhSYMGSXHT6g2X2exoM9ZVFpBiGSmyAenDCCu",
  "key33": "4fRJTiE2W9ckQiDrQukcgZgBzZaifDTwiQZk3P9QuhKTUvFDXeGvzx9ivcPhs4KN3HU6gVaBERViFBnpNsH6GkS9",
  "key34": "5etrd6uPGXhfXqW8Dn7ZhJ52nc4WZQRjQsk8f6Dmp3yY9cjcpBkCKPCDUyCHmNiUFU96FcKg3fZMjaXs8owLRGVp",
  "key35": "382Mm2UHnJTnM3ZvaxSa3n9r6npKW1Ce5UGaoKEXrdSSxGwZoTCxD4RABj9DeA2661rkCxzXLRHZ648dpQpoPbQe",
  "key36": "26cwKisEV2duF3p9EbmP2fCXvqNmZ1dRd5JQRqVEBNyuv58yfoKMcSwV6hScYdCfu8kP8x89QQRDAZPdK8FjV5wY",
  "key37": "41yps5UkhNzDem9juoidHEq5dJhXDZiXAEx8gubnwCSNDUD2CLj5enjKRrWfX9BrQi8im5HQgzT5aFbGNMmMg999",
  "key38": "3JRQqCD2HB78xatCNVkqQ29jpCAz5jjGUwVTXinCogwf5SKrZ3pYpuYAWBohobkxPqVmqa29uJ6ed2kz9Xr3zKBZ",
  "key39": "514YsweAC6d639BGcTpnp6iSrkQFSxsUu7XrYKrmpUqtVdBVnMg1tuBFHMQQydFgsJ6vmn37jqTxJuAMw4GSP1KK",
  "key40": "5PVanaM4D4FzU6kBLDbbfuAdY12FyBU7fgGhN9PbvHj7KbcVkx1dqQWxCuQHWVqPApnHeEjU6HD7b1M3kvt4hvFu",
  "key41": "3jFrU3WJYi1iBYqrz9YkHQPgLVNKmorsytAoXiqSsRtHpGLvhwNtc4GqdoHkyUk5UbGd5xd8sdXcDY5h26atPz44",
  "key42": "3EurxwWmBnnSUadQMbnsQXQtSQeeXUPjssHog5BW5MzuGEhwUzEsPDtAnAAnZTstNpyatvubV8YazoPw8z6KnEK4",
  "key43": "1hZMUgU54FsMRmfLmMnSGhp192rvNiGDXNw1zYcfmGzWVqW5xYfTrNqVPw8JUrFhNYxVohe7LF7rFutpGcwQGBz",
  "key44": "4AfDELMEyUiBYmouUj2ajT5g4wRFY9L9So6iLFHBaszAitvWtE38VWRJpP1pce7cWEQWJUxeeZGEXv8j2hWpayj3",
  "key45": "4ALk4THKEo5btvmC7xkqnHTJeRpW4LAScvNUsuQmEDk1ZfFC17iHCG9tCstUjqMxmNc28xnnuK1SKrz5Nf1qGbFo",
  "key46": "5dYx7wwXEh79n8e9N8u2LQq6MTDFrdBoHshsr2HJF4bqzcJpdhGqVM4gWSTohXNEYV1YuRRh4Jgy2TWM7dnUMTx6",
  "key47": "Y9NUFDxLVULtffciCgkQrc3KfWwx8CJWoqm4b4A9YxP4wxCYCPGEGuZeN841CpCECrwQRFpRmaXiYTkxgPjoyQb",
  "key48": "39YJGaNVokDAhiuDFmmnPRwKuSXyQjgVbfnn1VA4WBQgyeqLnsTBco94yMVhb81zSRRoX7TuAgPW9fJheByDvxBh",
  "key49": "29z9ANxCnxNAbE1zkvrQ81Whos4WPGZNfpBnYs2gLMaqBgv3P8j2krokgCDwd5KR3pRDqG3Wy3MG2vYrNZPLnDBP"
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
