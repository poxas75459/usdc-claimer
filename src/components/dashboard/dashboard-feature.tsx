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
    "5THzALp5g84msq85obrFbNMYkf2wKFffH1rhfPoCmf8D3CXryEKgeAjAbyeaT3ZUAeqXpHabLGsnPZDFgTRRGy3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rJ9nRyXysHgFNsLHA1ykFtFvYtUjougkF1VV2se6SuumkTnYNXQJRiaJWjvpFzfSM4whmHhas11ZPamFcjXPZBW",
  "key1": "3bCZgp2fMxyR9PRHBkvoya4a1kQW8RyNCvMcQnz5fqT4345Kr7NU2ZQUPnJyGL1ubypha6aEMzMep28FM7QdSKim",
  "key2": "4ahkKqYucL4Y1ac3u5by6AkT6cy4JUY9a9zQSYH6fLtfNDXrUAYMBREBgL3rsEabYdWjo184uzarJNxxWeFVzFbR",
  "key3": "2u1iJkEfnwVJJCarVYgzHX3tmge1D4kEbSAiao9VXf6JD1x2TNCrz4HNjQRdDvZ9H5HmLffy1kvW8PFz3B6eWWi4",
  "key4": "5TL2hCTDvcryeQg9AHHXdVmu5thu3kADJ2qX4L8nYQpmvmtPoByQxzJK6QMcwkMUcFrEoN6vw9iMXoEUt4RueLBk",
  "key5": "3Kaep6jSorgMKWRZtxxMbNxYYTq6WKBSLtaCWgGm36mxG2osQ46fvMBrQ7vuMKWuHva4Zr4Zjpc8FLJJkqofLeUJ",
  "key6": "4wpLvU3dBxFDvq31BvLDjCStHvYoajqQJwzsPVirg3K1MYAPpbhnHB5Qo9yuqqo6Xy1JPQCWyRn9h3zMCdPrp9YX",
  "key7": "5wekqaryxRdbpHK6Vkz5FdARxkmw9W2NESaEJW1ijRRsETzc7EC2Xk8gDzKVquFPgJuGrLhBnPyqHwj11SJrHyMt",
  "key8": "5FnDqRqgGzDG8P2vtbSULmvEiwF2sNi5pqYhVXFPoMbX6PEG94VnV1od9saiMCEgwvvpHg8EChGKmEMsZs37FfAn",
  "key9": "2hWVh3UMniewJ7QwHpJGodaEEMcdcfHo1P7DXWNd3Sn4nBuLAvV14QWRTxAnfHnZjQp9mFDasbYiEWPUoNYhVcmk",
  "key10": "1UHjmPuJA5sVBLViV33pNsoehUJWGRkimhveh9WdjspBNw5tbeFANe1mayXzKWTBJtAVsZd4C8WTFcNTp5hpe5E",
  "key11": "4KiNXaxJaRVZsHkNBA9tf45pKUDRR9q2W9djopKPBnPoACegy15hdgqYD2YpaTY8CtyhArQtZ4Rp1fQvWjAB8CMf",
  "key12": "33k5YA5Q9qfqnnxPswW5qdHYeaJqFVAjSaGvmb81QdETjzDRMN8AQFc5Jgm3kcRF6miRpg5nvHb57qLVcfyAsDWx",
  "key13": "2tsdPPGQRF2UfdqnTEAgWdSPEJk7ExCMq3boXbcKMbZQcavNe7EGu23bYEBd2Bn5EfjDAsBTSVCS6Vt65LgDxokr",
  "key14": "rLdZ528Q52f1NabxAC1sUp1RGz8umZLXTr6LBB6ZC9ha6hdw6QRMAxc2pTZMcPT8dkuDTuYKANEmYvZZwqnsQxQ",
  "key15": "3qB5gqe8NGxwM3VrdzvmErqokAqWEx7GnL7qT8a9G1Bz43LaQGDpxivEtrGK6hDz1R6fV3vD9PnKaUfYA3EYxTtT",
  "key16": "5sUJ5pXi8en1Q4kQoQgQa8p333Z5iwnRUQCukascrDpJd3WoJhHT5Gf6mi7B7Vm2W2euVqMPbzD6GafoxAGN8cVA",
  "key17": "5hm54scvbDjeweJ4PQdX58garbzWSdMn44td8RPve5dSLNsj1g6F5PpEafpCHGb1HC2AfGiRkTpCkHtiYXiGCSig",
  "key18": "JgFuwuo1sgN2RxLhXFijNsHM5ZYybH98A4nGYda8KGDWJ73cjw5Q6sU2rBDgwn2xKMmUFRRLiYypqfQVEbvqSiE",
  "key19": "4VYyDR9rofY5TbYTRC6DEjKvYUvt9Q8SiYTbsEQpXRE7vuynD2mDz5ChEfTguakmjFC3Tbms7DiQt84miZhXrqXz",
  "key20": "4LeXPiUyKW3DJFxHjjAr8F6a6WbuATgF4nwy26jCMxNaEPDkL2HRJbUR9iU4xCMEAEirkTCkErSg9wSAjk9btUSc",
  "key21": "343DCAbx5Lh841CRbLshbRe7p1VUKWRPTYpad3mHsmzQYFBBmfBuGrAkxAgJWaxLEeLtHrnPZM3dJjg6tcLJi4JM",
  "key22": "2yobwAgPz7io4HrbYSSjJguJFQgTHFZnah17AD7nYuAd7qx5pBp9uimBLqGUATc26qjEWC6ZoMN7vjo7FSeV3t1Y",
  "key23": "24mgdAEFcxaWvr9hctGuVujZVPTL9ZydhatW9ANLLeBQ4fdg9QRwp1Ce4EahJqDgamk3ffsc4be2H9KEaSjBpeMR",
  "key24": "2n7kBc1fhuoEK6hCzN3etvs2SpeZTUHqdp4hGC4ByQsVnwunLEtF7b1JjqFgDiCqeFKEcLMwxiFuNDmmCqFRYbeY",
  "key25": "N2okRAVmQZFWjSFvaKhepVL4sqNQjUaMLBMc4W4d3eH3XUuQbXBXxoWskznsGU9XdXD8qMNyRpWz8fcn3pPZPbs",
  "key26": "4vxtBnng3ZzPAiNkDGrk1RyBMV6st6eKHveLB6XoJUqveVaBeUJ8QttPy25k8NoGAi2xy2A8iVGV49MKwyouJnWN",
  "key27": "PDP83RgXdgYbUX3oFMQRzXbmkA8JDxzaVeG5xbqR5D85eYVgno4XkekLgzogYsqndTayq1umbEZfhXXNnwRnBQL",
  "key28": "yfonr7SvSUcJumsyNXDtUDEHWDsYwBngKFFmcCdUPQX8aRpjGuUj1eRnAeMaC59Gc2fm7xKUHc3jLZ1ysRUNhJ3",
  "key29": "53TvdTf3XZU618n8H5Lub6jWCQ58mT7kGcQ1K15t2RZSVBc4fffTBLvYmtd6WUjvgdcv7pmVccsf2i69GYh2ZGVD",
  "key30": "WnkDYTrBXq2K1uDCqe3LMQN6gWmSJb2dEan15qm1fcCXnAkTER4WyckWU3fZ83PfMdcZXEXzbyGuD4jms5AXaeK",
  "key31": "LCX82DXa7GvrRFCV68ASsggKFLUxrjG74DYrk5yctecfrZ5KkoUimzAXZHsaRtdeA948bF4L92GHwyVDnyfUew2",
  "key32": "3De4eQ5ikJf2998noY2ibFLiakSHL8BXSZWQGF21BDGCsp29kUZbNNLa3wXyHPaEvwSGFNGVn4kEei4kL7Y7Z5MY",
  "key33": "2DzYMwkzvEHBVCPC7iTQKrA9w8obd9KQon7Zg1b5ZfR1uydfgwKuKcEjb2WeaukJkojfgtTsqM1AmCXifGCJzmbz",
  "key34": "3r4VPCPSoaMuUpg5cZSotiXp6Npn6eLJZ4xFLKdNwKypLWvWdCKdwHNCpp3SYTzfLHRxPgWrYq5jnF3UScFEoqva"
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
