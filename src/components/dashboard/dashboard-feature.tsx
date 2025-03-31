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
    "47ByVN5cHtTim7zxYHs8iLV2jZfxLpMsHq1iJcqSCFUu7JNe3bgJeVxEgq4i2YY3sgSWveCg7s8CuzY5TVo9b14h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByEe1fNzEnJNs9ay5fgfznDGmBid8H5aVZZ4rFkTXgxCVcMt8pAS8KEn7UVEVTJ8vhPx4V54vMp7NRp2FRV69us",
  "key1": "2NLrDpH2Ro646scDmropT8NFXfwMMEti3iq8ciZ85rJvpkSJSM8by5LMP293dRNwT4VX5Hu6Kzji3w7ZYZzCF4jA",
  "key2": "3RULPJ6SdbsR3oGAoVMbxe7XdAG72gakUtuWHWgyhbsHsNNevu6pjTGF2PYd86YoRhWMHDDMtwSbNJBxzwGicYRi",
  "key3": "UAv9y3JpLu2oKbYhLPso5VbZZE4jcTi1TxdgXNuFMDZqao8arDBdPHKBdYpxbgG5zmPMuAG55xAE6LvWmYqx7XF",
  "key4": "5GP2nARBHwGxEbobBkrEDKU35w147XsYGCaJ6jdEdAEcjaHyKzkpFprsCCQozofjKMGUFVSLZvC8EckCDKPsjawA",
  "key5": "4weq3AKJfKyYtoRAN9yenNpeaaK1hVT5HR4gCXU224VQyAVwafHsJLaiP3KfSvvgYd5U7FTdBfFxads1joGQiy4g",
  "key6": "vMMnMhLA9Ch8uN8NQ3JzYsP6HVQUxFgMu9XZBF2SjgXA9kbkVdhjnGS3xydCM6NKf9vtSZv9ymyv2UU7MiBvhqM",
  "key7": "3h36DcV55BBC5GGjCapcMWhfS1DB2ieAPJ7kP11niVeKQCGhvbJ99Fp36WUVidPrmzriGn4fvVMLGFXWvAZucesC",
  "key8": "26MZGwudYEsSjWoiL3x4egJrbWxJb1hkbznqgph93z73A6yk6NeMVcbsMpbga9mRnreWc2CzoYTCynxSfPSxq6eR",
  "key9": "Do7dVKGUP2YYEbfjfwB7WfgquaYYGK1c61Y1ibeg7WBuqwPPF3iUCj8T1gsy6YvxboTo4eEgYvX7JHnVox16Tat",
  "key10": "3hsjRouZ4oexuLB8xN6HdGKxqe7FMeSkuiVT1KjHgr2CHsqyhwueAkiLgfH2pvhNEZhFm59MXTE5jDHpWv8K8M7f",
  "key11": "4a4jkdvnzCnaQJEq9tZhQR7ouQbkm8vEZRRFA3viwNswzHzfHad88nWBc7H7fwYSCEFDaFoNZmAR7Ts2TA6wqpPo",
  "key12": "cqf4VMDUcnDHZSHKDFSAPUShsWfiuZSRXA6Ln1mQcF8dNZjuXpLtMrVkSS2H2d2mJzGCcZBY4ZVkAjy8nnmRxkH",
  "key13": "5NGnNRWg8cZocUemaXRKL1PrFguHv9RNBTD4w2UmPtbSDvF6HVPBH52A4cwvxWhGWJhpMbBCoJbQNUbhuuAGseXX",
  "key14": "3CxpejV9zaAgUaQBSpyKYaE67NPBCfHPWvrKKrVob2t17Y43FnSVsJCUFLXSVMFaT7wpKHXRgg4s4pjbg8DphGLH",
  "key15": "4VXU36Re3g3EfNnUywHpEKeoBD3hQwX9QtEr74KFkaxzDHLRw95dKzsbp7QLAnm2StCHFxz3fkyacPfAnAw154oj",
  "key16": "5m7JGjuDAmMbjtRhQMYEKcaa3AHropAcBFjt1zthnxPfq6WTUsJAphd9BKfhArhabWaYS2XzuA6LshcmgxrFEt1E",
  "key17": "4yKvDFnTAiYqmtdurbFU9JYubDuGGgFcviN5Uw18JtSWkNXwaFX8YAAU3BmK5crYWgccMK2EmB87ef5xdkjLfAYo",
  "key18": "B79FEkUHgA5DHvMW2ACfHj1LiuZcs2gMSwkSdzYWJ8ehaHoBrE2KACC3EtFkMMP6MP9s1ga9rP38YCTnXHNFf9G",
  "key19": "3EeJhdx1iFMLUt5kt5R9YRmiPTSLCcCk57YzzX33KjZaDmeUVjE9GEryrREJYzd6wPE7mHkwcqycWbLr6v2Jn9dw",
  "key20": "25FiqetpeNhQd2GmxYU6Q9v4ySLUvwxDsdaH1upaDPc8SgEXcUBiyYNB1ozpu1hRTRymce23WFmnjPk3vcg8tj94",
  "key21": "2DEZCZ61X3roppCoj2PSwR5tjGitQmpXBd9F5GQ6mC875ppq6Dy2Zeq2UNpMH2ZaZsiDEpcFJgPD5fwfJyDjMypv",
  "key22": "3aneRyGhDZUG6LY7iuHoztLYTzT1a38JBL7op1ee2C85MUWTBRV2ZzGvYcR5ov2Q3C7xQ1Dm7rQ7ZeQ6h4DnG9wF",
  "key23": "4oWjPvqYZNfb5UURdW2Y3Gk5gYv4JWauxAR9ieRZeDZo9aBfDVLnMtX9ffFrohGn1Nfbkvz14bP4brmA5mkZzRxC",
  "key24": "36aLVzCdJMYP9KQp7Tu44vjTp3VHwfhiLNx4QnWxr9gEKXeea1dUDjJqaj4WvrkYp6NVKFxauH4HmTSCJdTirDhB",
  "key25": "341ULTX4oSAD6377m7VHM1JXcNT5yWVYNPv9d75NHgVSqW4N8rbPJtbnfy7gsHHaMfvnbwsRZFn1L31jTH2hBk8z",
  "key26": "8iTccgneDpzZJz4MbVma4wf8DW8SKXMRzXtevuPmd5SQN97MvFwZoavo16oaPpRk94KfFQ9hBXZQ67XgcsuYxYs",
  "key27": "4RF6nj23jQVSnGvg6BsFwvpLbkaN1PrrQbYv6YrrmvNPGPtGAwsB6RpEkkj6tvg5fnAWoCCbnP227T4uepHbJ8tu",
  "key28": "52FvkK2g6bKw9MZsqqPtdpPorr6NjJrSU3yqEtv1RKKbHxFpzrshBnxkVaGNTxM5nyAzwZ32zf2fVjfXBhd1fWx1",
  "key29": "2zhgfrB6ygMtU2KRTQ4SutNSevPpR9QqRr6qoCfp9mzwQZirYrihC3dxEYs6UdKPRqZyW9heqQhtHr9TpGviV3FF",
  "key30": "4sFVLpraAvnxC81kaq445BG8JXEpnuTUhAK1J9P4H7wUgNdpQcYo5VJJ2A3msWhzDdzUzyAuBW3EzvmcTAVLNyQu",
  "key31": "4KGL7Ai6tXa9t7tiZMFtjXYc2FV1T6zqVzRK15YfxJcfMgntToWHGsVTf3Mbyv6Fd5LETYTKgWr8Qx9wQCuoXYCF",
  "key32": "4RD9GppzZGiamJNRzx9XCmGYQXnuddn1qkK6Qi5H3VfyrkpXb75BN4tWDeP4BCSL7grv6H5d7zmseUQxZaVWn6g9",
  "key33": "5RxZdLM5xhVACyBpC2w3yneRP8KXJuNuutdrrEMNgu1pmWvhzPmSZEsz6EmSCHhd1t6MQ6hb8PjLc6uEaFD4R3DM",
  "key34": "3hTmYRjpRqsQWtHRD1UWbmFNtwWyiyCMRpafy7E4VQc1wTEg2aKiyceKP5zwL6VT31TyQNaQbAoy2QhjPhZV4Zyg",
  "key35": "5mwPkPhvHErf5p9Wg94dVb8pAA76h6N9hT2QknLLg128uVeGELmYET5xKq5RUhUhNdFqJixnATMtcZ7KxYNXvfgW",
  "key36": "3Mc3ZNzSePgax9cnA6Ydqsg6Yz8ATbSC3oKtWsv9Uy96kvb5moQkp1YvD4U1ey269XM6GYSPhH2GVyPPCNdaF2Ke",
  "key37": "2YdPb8aVfeMfnAeMJfTaGFN3uwmV7PpUkZTt3ywwhBNqvxhfMmKkjq8RSN4Lo8JaBM11Wht47zWotwc55j1j3pCr",
  "key38": "4Ae9BgpiNHztkVhDXKm75b8MKDgXvpvLKPwoMmKS7Hh4ijzUWN5wB5XZnm6wYPD6bMf5DHuqsw6DTEtwxDDVrx3N"
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
