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
    "5dHCfqyAAKQxZ8xJZgVSeEiYfE9VLYRxeBvsHufFskSeawTcEeRBZomnx6TBAL3BTHFuqfkyFhsg8wRMGpGsPTC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fa2yH6omLxkXCZZqyq881bKexEP7fWp775p9LsKKXZvGBU8CXisKeyPqBSLs5TZvFTidb7kVT4ns4vrcjRDmXn4",
  "key1": "5SxvFCkYRTRcfKGNvfLvynXwPwyNpFugidRCoxKFjN2RVkYiG8YhhyG5g7o3G1keEmtUvLKsE5cotT4SXoN41e1h",
  "key2": "3wpj2XA6a2t3yABJPdfLGHAnW9xarwXR92SXF3RYadCgfva2zdbSTCqUZxjjBsLSe49G3pUcT9dwQHKBe1UdJQNX",
  "key3": "GsqduxDA5ujtpDXScm2Pn99WtB4ybE3HeGw45og5b8kKKtzyto5BzFc53HUK7Fc6aHQDzTMZc4Ae1bC18AQkeM1",
  "key4": "3knGUQdL3yaMhhMsvbaHKMRQ5aJagiHUjjDvt2U5chRxFa74xs3tLBksQsZtMHahi8y2WcLDM3ZHNke1MGxB2tyf",
  "key5": "BaFSdniHEarQH1MECMaTw84TJCZD3g1T2p6qboa1sFAnBpYFtNMW3QsZJeVQeeiCfZRiaEUai3JH6UTQLeAmb8K",
  "key6": "4VLhpzaWuoSTjNXvBmScebK6z2idR4VupVFwNYNKwCffpm5SV4NwoFkDaCvJruf5NTYdgBa4rajxELe4gCT5zmEV",
  "key7": "64KtzQV5b5R6YxWdmWJT8JTMcovkJPGQzRw6mKq8Cp6djJBMBan7kisABLig97NumJi1S44agyMGkVoGwW6Jymfi",
  "key8": "2jfVpAcZtUeq2a3KgRzRJqnmf9qS9LWLwHK2vpWXowDhVCHqGhXJrHud6o4PftFoEYBhV9KQ26EimmMS5y7QnZFR",
  "key9": "KNNg37noM1gas9MHmucgkedm2xemaHdocXcXPetACBMeHNH9vhBLBGpgSdbfHHLR3An943i1Rgd8HzxoSTJLFNb",
  "key10": "Q2kt59EqzBNm8VbCgayd4JB4YZ6UJPghPMDmcJsjrqHgLF3rEervTGRJF8L74vLBmrNNsYGDvvaaGUws46o8z4q",
  "key11": "drHA5Ab6wJfyCD2AjEj3d1GQcAz53N6zCB5kcXGHapsVpKZisBZ6mHZXpYAUB3C39mEj5JTUXpi5jfK8hzxciTi",
  "key12": "3qJPkGmHK6JQ8wESUcqRoTBqB8CS8GJ5YDmwg1a1hjT4CUZFKGycR9tWu1pxusVrZayJq5wPHcdF6jAb7ANxNupZ",
  "key13": "2Dz2ZBtr176gwWri1poGuzbCDfecaR4KwfTFkTHW3YJTbzV9Wgx8V7g29FzCQLNyyDnF6tbMBJNnFa2A4tSz81JS",
  "key14": "5V4Sd7DGDG9YJUcoYubkWBt7jV6A8J5Nbm5C7Jax4YYV3eWH3rHd4G6Q6phD4dhqGAhFcaTgHbfSMCftZ2K2dtBp",
  "key15": "gbtXqKqyoUFx6AR65m8aMTKRCWzxFLbTiYJFqyNvTNGas13oc76nMCUw8WvFQiiHoDgqkw5nSvr2SD31FtDvE9b",
  "key16": "5vbBypJ4x2zp7vwL2REH48JGgNMMCWabb996d6rmrLbgHj5P9Ur4MhK7whUZ1mkjEtcu1pa9gmGy7osTWRYDTozZ",
  "key17": "63CgNCDLJ94XUEEjJmq9bjUUc46U9JVasFEHZyY4gvcufA7TjSV47HPeJwKhtfbgYvt7fp1zbxfg8KMnZ18yzMoe",
  "key18": "2yPVmzuptcoK5xtfX45XoRKpLTh6dZmV3NnngAUJmoUp6TXVHqeLxSVxc57mxABoSNUJbznXivz9ys8q28AfnB46",
  "key19": "E2N5u47czP9gMikf7qVmQdCUEVB4DVCGhfPc2gVvSJ79KwkRHwYZ7CA1K7cLXtSM5J39yffTeqeawzpi8nmkzkj",
  "key20": "4YoborVCyYSihcteWib4drhpT7THt2djePNdCpB2aRwri8mm1MjpAtcCmgEGKNFcgWD1AvgB6dwqZPjiEzdtjZMW",
  "key21": "59FKLYGwE9N2TsZgND7ZgcyiJJtLPnByD1QTkcqgVyfj1g6UenH21B42V66Cp9MSWe32CqvgCdYSWRyS2cRWaiku",
  "key22": "4gP7zXDzEitWyZeoCjhWH1mm8hYRWRw3dy37D8hjrQvmwfWXZR1Xuha8u2T5FSWdd5LFBvogHyjEScQk9wQotAJx",
  "key23": "Yys1YsES2o1AAaFwkHMs6XABiBkoopWv5QudFuxvSJ4tWmWj9LJrs4Z99GjPXTaKcDVB8R1vya6ZGP5Sfe66Bb9",
  "key24": "5qGoRwCqy4vxfDh15xKinqxSiHVsNCKyS5aAWLnfRNJsdrvH1u4n6fYbCwimRHKqba6pn2YHChKxafptv7ik6B7",
  "key25": "29xGAyYqRA2ofvmHxKgw99bLkrN2zV77uYB3prbFupkaneKnM7THfgkQKZRy9Y6frWMttgdu6MBLCuLeyrFw2eAH",
  "key26": "4c48eEESsmCkaifNwH5tfrTY5KeE2pDE3AeCZCQdwtaVYo332N2BC7iXLtPm4HFWMQ2gaC3b1hq5ofbDwwEPaCCt",
  "key27": "2J5Hv3LxE9eW9SoJWjijvFe3BFgdFo33VtDV6YPCfwF4f9FhP1NVLWqJFd9CbQM6kQVJXzEKKsCSp3BAe4S73jFz",
  "key28": "65qPTgFcB3DugYiVu2k3C3ti8PGc6XWcgrDfhPZaWwEuepSra9JNBLMYpY8kZP29XGyYvihCrBM9qnaBGZ8XYCu6",
  "key29": "2QUyuWXBFS7EcBHryAd1EkTHWiMZBcMu1938wbUTdtQ84czqYTUJm4kbjqLor9an37D3SVeraGrMte1BSC4ENnri",
  "key30": "3TsZPbq7s2KDBdKaSbSSrmBuPDv84YD7zVKHKWVwuN9mZPJaRJrG9DMDd1dXp6ZPXgPpoeK4qG5VYmC9NRdn4AMw",
  "key31": "5bbswhGpnsmbA5QXQFzYZPmRdZc9APVfeirtwkbj6k57diy6ehZN6D3NLDWdNU7EQhE9yQuGqwGJGmdq8PbXv63q"
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
