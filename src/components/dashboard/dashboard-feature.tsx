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
    "EE7KLB16NiAeoS3NjuMgY3mUFsHQXERNgn4iVgtzQcWkw8kk1Xjc5kPUcTqbEZkLPLBV865kdZfBeBaYpyGzjwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYvA6zDS7aknttBGkQnqRYKGjsbyv2DxDMg6jc3eNV4GSx8h8UmMnJedqcg1qfTKMEmbLV7YaRkVPPXaeSQxW6v",
  "key1": "2PBgNMsbKkuScQyxPWAcvkNVe9WtsDmm6znyoF9VbgowUrGXvzJmDSdtf2x9sPCMk4eyFs38C5qMsEPuqPjD9jeu",
  "key2": "4k4ZUUt372wXSyZhkzLVX5yW6d6RZ9KrAiCBae5geZEdrDedsfm3p7jfUBpxxnVsm5eXVeJVTx54t26vVL9AVKqN",
  "key3": "2JuhhHPszn7yKDnitXxLJav9MwcwBxcqAz5y42xYsyMnkZpYtzzsApRjG9dYcrnfCpgbQdKRfsBvKCidt8hppWgf",
  "key4": "3uhbULeGtW4hRHsDK1hEVciv9QCVUVQt2SGC9M9K8R5BkrFqSD2kbPq1ZEy3nynqFBTygTK8AhipwzfSeHf542gT",
  "key5": "4BmXe9Y1nKqZ2CmRXC9w628HKydHVm2B1aL4L3ZVE5YXd6KUNnkgMFknadUwe3A6JGk2daBLo4PtfXDajFeA1hvG",
  "key6": "wv8ZDg9UpHBdnbfFosQP6bbpUm8tdPMNJn17qZdvE3kUbWhfxq3A7RAJ1qpY3gBV5XoGY2zT1i6JUu4ct9ifsn7",
  "key7": "4R7GinZqxFXWPsZLv93ei6woCxvMASxzVj4XpsWZhCpDfCJPy7dNo17C5X38cH6a7Aj4ybWrfMDJT8CToKfuKrmP",
  "key8": "3rNgvjh45BwGCv1FoZTY6zHJUWH2Bh1sVBV8RXRdPCUyvDErHFo3ciHzZc8MVayJQ2FS8zwA3UADSxmGQoXqZCoF",
  "key9": "ZaG7nqZxodfvSrXs9Y6tM49McRy9UE5GfquMUP1kPNdNTAatswNN8qNk4PorWqXJPEjAgWydcGDMGPrQwSisM1K",
  "key10": "2pjz6rhmpsSq41CdQjmfB9vJ2yChHK27kwav2KkErvSrVtkPcdjWsXS1HWyAtK2fehpZ9dfxMQ6Xz6orjQa2q2Hg",
  "key11": "2bh5SEPY6J2f8QyEUkADBcdxzT5BjGg5Edt4wwtEqxJM8pag766zK7r537ustXNnKFqMEBWeSLunrpQaa6Qsf2G9",
  "key12": "3MpetAihx9ST2JYd5wrkM5bceXKcctVmePK85E5MygXEV4ctiaoiRMmo5PreaBuKaeNSpDvWhbPna3ukQVvVWQT3",
  "key13": "aJ3vVYccExcc63KfsPBdDRn1186h38uwcLHkBrP2G4UtQgh4XEHMYkpJhSgsGAr3msmwwZWFPrPVhTKfhikg7is",
  "key14": "5DfjHi3N9XURCCzNiuWAjQshFyS4MdZqzo1RHwCevN4PsKZ5piGkViUM6XW1RVUbcCutTMxdgBBdJTX7gDgqUVRv",
  "key15": "24zwEND5j6Rd7NGcTeWUSstSrNg77JBeQjLsziBaB7Zj44o6spzWMtdTf9e1bFre276gBVNuHYDoSgnXZDoBRdxK",
  "key16": "ZcdPkh2iBB6RJzB7hp6NsAAkKY6FYpLqNagatG8Bp4dzk1u6LNdoX1BpVwBMfSe1efKWuxmPph9UrtYhf3EZuSa",
  "key17": "2oYE4teM7mnN2v3o6BbGBkZUrKXdJGnPwmsBEDF126jSfSGkziMN9Ncsrh76ibqNX3o7SwYTqK5J5J5R7ajsgRkz",
  "key18": "5WsSdZjS6DEv8GUx8RTY4wh6i35JJcJZBCpHSLbB3gdX9DpY3EyE5cRfdfnUMEg8ybC5nT3iyB1HGoQVCTopmC7V",
  "key19": "zbyr6D6bxVdnjfAeyMadjAFKsvProZFgbuxKyCbph31w4tvLgSUsgWS9v2ZnnLWW92fpKDhDjySzPV3VZFGW3dz",
  "key20": "2vkHbDKc4mQftRcsdhFZ87vzFRDmBDevG7Y7R5DDwSjE3nFkWusUtfFjG96dVHexiBkbamS99DGeUCvEApf6D67R",
  "key21": "34hubnuNJWnRsPATWiK3KkcxNY73hq9cQsGS7SqNVYrWtbceUkNxbmjJEVqRTJPKNdumvjB31p7jJuwdfzWtCm7C",
  "key22": "2qLk8BDNg1qBvkJPRUS3zR7oiJoCLPaW7n3kE9uT4ZV96p1ky79sfbL7cYdWoLupAAo7SZQuC8uMqm6wA4AFzJC1",
  "key23": "63H3GtGXPKCLKbjRnbqN3zdAi1fccuxvmaYHtzF2qDftGTA5Eh5jGLztrtQhy4ckfFcVAHR2xqkZ8pUxdCeg1v1E",
  "key24": "5iPEmkRxmo52MBBAHhYmrARfXYZE4v98o3JTLEmzYgmXmENoUoHecqB1bThHNirw1Vt4W66V4cJVajU7iiMfo6TB",
  "key25": "3vEa7zRTY7SeidxxYPHc2Qb6mu9SUGQpCifF5QNwc6cLXYb5izRGadzAeriHN7Ge58RcdDRwC5MbLs1kUDG9Cr89",
  "key26": "2QzkHfiy72GRxQp6GwJQcUYq8ZakceTNfwti43VoMuyU38bsk71h1DTbkNnkEHcXrvKsAguYyXbXU2ffsQkdbQ9n",
  "key27": "5C3kUT6wEZfpdR6iQk8SHNCK5UVRrrUWgLpocG3sQfYMmKjp6n4yVu4NxisjU8Zo4KtRgnPRREzFFGUQSMiAk6Zu"
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
