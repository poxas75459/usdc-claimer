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
    "NMP464exhFwYaZnpxKARk6B3mcZCvuZjFA8mbNSFVhVKXeZpunEvnXP3CiZebqQF4ngXoFMS4sTnaXHKkWm2Nj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1V2GYhSRDmsujhFqwWCdnJ8BC6qMc36VeyjJGqEL1UtrD8mgbXqJ6KuBn1MgyfeDfrMGnMtLFFYJEnBBfbS79X",
  "key1": "2QDbC7jJ8yk5mDovznds1ZcK9KfLZjiJmhb7BKsjbJZRjfswXtCfZxUnudps4osmehdzNL67z37ACzsYpZiJ4sHq",
  "key2": "RTpMEK73zaArZ62y2hdCBRoHH8wxEeKQkwgwEdWRMzwC5xwBWRDkJM5jsjsqQhYGNvgrQGhznQbB27w42XV6iQP",
  "key3": "RhKEi9B1d66UjeVSD1hraKsDjLR52aKj4iRdpZHKCeDNdnMmDH6MNgNR63uFvv8bS8kUHmLWHhcNpe2MCCisDa8",
  "key4": "KucTeu7qDugSiGvgNVD7hbrHDNddeHvVdFacXLK935RCTAbYg5hbGApn464v37TASs8Mym2rRe6hB3V4UCe2Hb8",
  "key5": "2udFSqAq9rxf9dkvUjGVEfxYzm3WXCLKM7xo9kaKGziv37yUx2GbTTVcncRPnyM3sVw4zxuxUqAG1DWTDT55pKox",
  "key6": "3eiExymrsCsSSsgmZxNeD86Upxf53Azczi1P2PHwChz25ShY4g2nKGGadHAqUqyc1UQuYsBtN2QVz7WnrRHaSRPq",
  "key7": "Y6KeTVuDXyNR5EoEbiqCJw2uX14EnD148JwPBM42aCzpyXVxSuXtDAgaFVBkH1keVZW64uQTxpxVaLpNdHZ49sP",
  "key8": "5XZc1jwHqXHqjdE5VjhYVVwT5bFWbGqDXXif9SgFQ4Aw8riyy8GjZf883MSTaKZLrykGt4PHef4CvmWuSUjV1qHJ",
  "key9": "2t5Kce9vhCavyFPWnSbKzhKso4ey18BqCV71G63FaCZBNrcN3JeNWvvwneyXJqdqVQV73C33gwiNrCy6E19VzVgQ",
  "key10": "4hMdGdt4xA6Eu3Q8pbM3mZeXn3YX85H7UyfERSdZtibyLDScKTLR3321H9RJf9bbzvWZqNt6kUq9wM7X4wPa8Zhg",
  "key11": "vMAuR84cg94uKx89kCL56idmAFZkPLaBQJBJmxHqtwq5ESt1hr5En7ZGzRuf59H596RybpDbpXJUy6Vj9ExpnW9",
  "key12": "ftNo2wkpiEDHSeByqt8Uo7g9viRXGLd7u2BRNZupu62cWXZ7wNUv66RVQbjXTky4Nou5q4wtNBSEqKYgX9X7yfi",
  "key13": "6e7J8HZGGmzPq9yF6mxwXjRdrfpjT51BRa4ySRS2vVqAa8426nfeQD43F6TnFkNEQjvLbQH9x4VDAKkZ7V18oy7",
  "key14": "3edEsgL7AvvE2x6jwGCYncNDSPtMqMt5evsVLCuXdw5KcYbHMeLZjskK6enozF93n92F8DYCDTWRFDRPHo6qH7WQ",
  "key15": "2uW17SXPHGuJHF7ZueZAL2JVeG58ZQMgfncCGJiqxS9auey6ccat1xnQwducox4SprFtw3BsuM4kK2kPH6e7xgpd",
  "key16": "5Rgs9k8Mpmwk1dLTGZhVHtbRKmoAxAgCW5PNMXvsdBDhecEJSN8GSotxkoHGW4kQSTTx4rruB1Kq3yvUe8mTNXJr",
  "key17": "397ifCWwn5AhRQXSsjxY7sXoQb229dSVrrcifvr2N5vaqVjNysaWGJ5q7XmFLPJ6vFwCww1oW6Bz1pdV8SBfE44f",
  "key18": "4a5w3WgSHMmh93BVvH2P5vpezn2ojkgTtAHYvJeSJ1ivNSQpR6v8gy6A9FdqesvxmrWpTbPnB3e5zZDGj1W14fRk",
  "key19": "Ucy139BB6AJvbKk8qEhPNyeVHjKzYjSpDFbCK56tywUcyVZnLqboAuR6NdpaJs5Kou9Et5tZEBsmzsgKVXwMGgS",
  "key20": "DhYVjsGbg3Zdx4bhk7dcAZGHjLHwyruGZzk7UrChPWbbgucVPEsH7ivsyt5pz6DkHUqi73gqbLpyLjc9EyVgsfP",
  "key21": "4fkCHobwqH2NEu3u5bstzCki84Tep9cqLBetdegGYSUiTPjYPozcg1bWMB6yygSfPGLqjRWkqsuTvncRXqGyhKvv",
  "key22": "uFagBXPHWBtPy2shp4L5BuoW1VBuGZFYDLii4WCRu5E4RwiYbYJGyFAeRuyjPseaPm6HaVi66HyMSFTjaNwr6UK",
  "key23": "4xRjumHtytiEQRp9i5QeapUsytYW9dLZXVZhWRNw1UD5nbYs7wvzZE6pAtmJoY8Kw7rjkzABYn6haKsLFgjQQt2t",
  "key24": "31UZT9aahCzYCiZaiJbzfhjXhoptBGTiFxgBLhYDZgzkP5ZRAoDaUQAJ2dGz5hSmkV9CcyfwYwjG5wWJRad5aQmk",
  "key25": "2Aktc61U4McZCPipXtsUGW636qPNDMLJNKHKykKnJcVKjJDX7jNfkU1hum24kRaedg114sHkrbkVBDYCrqU9MGW9",
  "key26": "5G1WJk1ox5gQhZL66YncJBse8tDuN18uoJx41L3dU7Rtg2hXMJ8uiBiLv6MuqxvysivQXN4c2LVdkzobvALYM3Nx",
  "key27": "5YSGeXgqWqZWoQHmR9HbVCVNJD5dQtsbDfRawPnrrRXC1CF3TzMKoYhiAGFZhCXuiwBMqzv7Ez8rPVSoE5VQ4BkG",
  "key28": "4NuCW6PXtsU9jnmSEX4WxL8McqCdynrVX8RHBCynqPvzY2TxksDauV5dNKiqs95RXHx6eytzVR6HdQDbzwi4aaoZ",
  "key29": "2tSUWycRqtJgnX8Jx2w5RrVafQWrACm7QNAqFQpCQ4YmDB27xduw9J2BTXWQdJckRwkEMK8Ra3yC6kPTGAs9JjcS",
  "key30": "2kxHLwP1bzd3aNTX9GHfDU3CsWE7iyy9d6RyFmdkeLpCkBDJzFxFh7x3vsKz3pLampDFnU8Dk2uY86hCwqjNXxBq"
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
