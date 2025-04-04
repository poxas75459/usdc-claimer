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
    "4GpLSinZfhoZguYkAZW5y14zpLnKD7jcKtFEWouyFPNbVfxzNCGyQUcuYmUghdrTYMuxqK3eUZNTMuY7CY5STMg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Vi8S4fvWeNE44so9b399RTfN88h3tbmSiK2KjdWYMgW6ytwfwZrdQTPurYa9SuVf2TQoaExoRgcM6TaAzFgnMX",
  "key1": "aPjrjbhPTLzGonStYmF9DPxZvraMrB3ijFUzQKvU4de3Z53T2KYSKjuXCFrkE1UT4PS4GvN7P6hGULcEimhqchb",
  "key2": "4nZGhQgv84qfNGw9bmdgY3rt4HXapRithoN24rowjwGTQZ5MnMNjHVtCEnPstwCdoWDFNocn3g5cJFxa8dGvoByR",
  "key3": "2hUer7SknbdsQRSE6rGJsYMVkBKg61hCCX4NeKaPZLMtS6JbCRMNDV6KyH2e5Swx5zaHoocLnQgWde7m4Cg8FmC6",
  "key4": "2W8F8HfrXcQwbqWvpMEjEKs4S1RfpXuQz8uoDttKYTm1U5KhSXzpNbNGca4AQ4N2cDQujsZBetJFbX75miSJncBj",
  "key5": "2Txz9yf8rw9hRL9iYThLEBNDaL2mZ8KEqX6yxkEFtJCTQKEUKLLXf4puDGPsBgaYX5aHRd9cV9NT6QhTTNHCRcDP",
  "key6": "2StRoBARV2CuLgcDmy9GrXNosvHL1pocar8nM2ca5RmZr43BHcN75WKRGE7w7NXnGUxeTLXPqNYdzgcromPSXxXG",
  "key7": "3zfuTgSRMAL267i3i4JpRUM42JXHSnXw6jF1nWFtRuU4wFc6mcc5A8D3CmzQXzAnfDBeHNHkCAfCWshU3hQjXkvu",
  "key8": "3tEbriQPCwfx39TqXigA58dRVhCBJ2dUyZiguFrMks3HuoiVwvS3zKNmvSFev6xaejgKfWWsYVwTKXtgLNNAz81h",
  "key9": "4fsqTe6fYNLRd27BnU7DmjTGxUBpUNGahY65tFN3TWDpSmvjbQnZARjbpLu6JLrHA9neteWDZwctjNn9F3o9VLae",
  "key10": "3zusoWoaSkKrsqoFYf6L3HoZArTPJLNneN2GYEXssoNxfPvJXCcBjfgnJ3upfVdNmtbLH8Sm4f5sSGP55fFQHctN",
  "key11": "9SvPdeNMU9r4u96yCqVsDCjeeRqD2VKewYpoqq9VhejrqCsVTu7hFG1G3nzJe23E8D34vVHpw5853tTyMV7JRi6",
  "key12": "2ek6cfzQrD3ms9Uo2rtwgf3LcbEX1JMCPKWWqmbbkCCMvKRNbX1qYLoLbNztdWA8nLZw9LJdgW7L86zU8uWC9dHE",
  "key13": "HWxAXSXBtUrfUeCMqAWxt5Ze49nmRzXeL4UaiKEGFJo2GitNKhfpXs3thZ3P5oJiCk7UW8REFazseCK244xwGY1",
  "key14": "qTBuVp35EQP12ZTpVnk4A3e9bDtMMEqz9QLZG9r9F7rUkG9FPfPiViqwzR5d6LLDW3UpAKFcTqv87e3vvmx4Tvd",
  "key15": "2BVVfz5Rg8odwZAugxV7VwBy1RgHzh5AJA44s28LwmnUz1AobrgENdHYbbH7k2UCezBXtt8wBTumCaNwVecZPFfi",
  "key16": "4wgnYDSJfCwMx2BJkromgkyVHNRYa8ADwhepjezoGDe74p5YhpsqYQWQ9iGTze2s2UZPFzHdq2EnHJWSWkNx2phz",
  "key17": "4Dbgb6NETjwW2SDrsFXWvyAECQ9vnzFRHhcAmTmQ7UQE235uSLyiv2LYxxSjxM9CCsDNDrBrjL8jVYHXqAKC8esD",
  "key18": "3ug8gtq6HNNkVrGDbMM96bW1vktUCG6p7zGFMFqe4sDv8DVeUW8msRZhWer6tVv7wSZoWw2K5UpCc4aDEyhN1dPe",
  "key19": "22W7bkxu6KzwYKyK4qC8k9TpUZPFpyxA22SDh5sBdrtTBABfF3zQWTQvpsVz97UN7gPUKTzW4r1yeP6CkU4tPBdu",
  "key20": "5NdBRcu1MdXVBDN4FG4jpQCH9BgiQABLZEiAhKWf9BM5dUYE4W33payNHFFHdmRERng5pmpu3FSqW1SETGEyBRGU",
  "key21": "4UpTDxrQP6HyAiKMug4bzvB4rqLfSNB9hC1VqWXrJTWio8pgytFGRfxVbYvoMucjkiZgDWHXDHKTwk7FQoeqDFVY",
  "key22": "65cdRMzSyTeKRaopYx8qgc3vxMD3Y1wEJaS2rH9jSTgdWwjxHPztrXDeanArmeZ9mnPEc5jLF317zuV2woxteUKT",
  "key23": "411UiE1GXTH7UDpxs9QvQNA7bmkFiyNPobcAEwZCdE6chPXJhhu4cP3zExH89DpeqhUPURMNAiVrQcQE9hr8s5iQ",
  "key24": "2HraetBaxvzuqQVFBBmaoZwvq1iEYQBL5TXcrZVa8yjjF55yEZ3r5gvw62TE3yNwWUdUoyiukybe7wBKLCpijLb3",
  "key25": "5sEMcEwQd5RsRryb28NECEJsJJVUtBzh5dQsmM354cwiBHj1q4eBZCMUiU6VPvVT3LuJd464h3SbzX6mDTfBpMYh",
  "key26": "37tHCcKtZtEjxokGvVRNrcwXPxxDeVUvkpDQQ9fTEErts2c3PWpn9g1aNHGhRXiPFesdDpuc9eW7RvM5APpsfsyy",
  "key27": "3KaGvCpLSVNjpPGjnBdADAvbuMkdR5HLXQaanVMenf1xEB6MiGyPbhfX768D4brbFhTzvTJ3i31CwVyKfp7Qgb9c",
  "key28": "GiCxpzTonvjAbfeVQwZwnJuwy2uDs2V9YDqHhMrZBUCaPeYY5ULmnwdSBtugTWYBXPgzFrHJgiBMvvDTXmBbouS",
  "key29": "67jxvuTPbVWmp5o5bAykKSrQcwrFSsqjHmiwApmqjKU98j2jrvC2cmTKEgaQBGLNtT7WLRieq3AmqRi9hAdZt1rX",
  "key30": "3sAm6YpCKGX4WHDywN3MBMYHTDVMCCR3DLVt2aq9yTLJd1zBpnqxAoew4wUuCKeTQsTyv7eStH7kZp8eNQfV3ui4",
  "key31": "3Kvtx9UtENw6rkh3nUGgqVp2WsVH1yV1huhiZxiRkEBjjsH1S5siE87b92NpjMTaf4mLRMqx2Zym5aangXzPLoQd",
  "key32": "4kMaPYZJZZYJqeDKXZZmWBHYMCRQPgwUqQhSfu9UprVBfvEyGy1xhmvPqLtkz9zok7XR95q2FYvqHEuTPVZgjSyB",
  "key33": "3QVKQHGNor5Lc3BHvW25rsmEQLxGCxfABQm5gSSKHuLaVtbASPREqPpfc4QBSGJHGp7tHZ6JAGHLU62pitn3yrAB",
  "key34": "2Jcv7DvqVQ4GdSa8ASKUm7MXjrLnjfS7Lt7zmMAv9sf95e3xv6Uz1g5VJTxxitTCEnBJXBJjm7CNguMuzPru7S8d",
  "key35": "4Cg1ZSf58y3eqMVY2PSkqPm7p77tKtP4RtK9Z8wcNtWAEshchLCNkFzNgGaNgqNoYH8TPBek6EpRSr2zXYHrqduD",
  "key36": "XaUtp3XNRm4fdhdYa3PxK4myzeqdQxCKNNPdeUSRZs4hcZmXXuAPUmCJtbZqyECtgyN8nR5rtAKQe3nUxHpo5MF",
  "key37": "2yXQB5u7SdV3DK77i1HNDM84HdP7fMyifWhyx5i33TJXdTLq6A4oUEw9x6XkhR4MkHEHd2n715LvneFmkYCK5giK",
  "key38": "3VqCqXMhjWDeYaeKgoC33Ea4Btfxmmaf4uuSUzHr1ySCjiK8wugEWGfCvwkLFuM6LKt7z4UMZsY7vyvxwCr7Hh9F",
  "key39": "2UQpTymv2JE776QW5avM1VYaAq1YpaocKeBMrW7t5YK9ZseaFBt61n4rBJJEHCWm9CiMXKRCRmGCdRrpKAoE9Psq",
  "key40": "5gc2rpL7zhRCRx797aJZq6XP6cFf3UfvyYzNLp5A8ZK25yW36xKYAB2329h8nktoUBNXP59Hn5MSVndLxtGpRYCr",
  "key41": "vwAqzBBbYNe9P88UHQrFLmD7QVUPkQxstGQNZh19VtMczAGS4kQDS8H4Ain3RmTQwdkdgTvzktZ6hYM76z5sRUq",
  "key42": "5yKWEJfwiVw6hNxmWP18QymEVJxj7dF8uhw5ykyqEbd6rkJgLyRwvPVJjy8hFxhHX4kNGFnKFy5nZH1k9NKNua3J"
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
