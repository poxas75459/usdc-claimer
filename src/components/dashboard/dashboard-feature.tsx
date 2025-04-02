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
    "2wc5hY2Uwt1RovUFuM24P19xMyCbbeDD9ixRYuie1e6Qj3CiaNABHd7TSEYWv7kPe9wbJvU2RNanb9HU77ZRG2ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K9TY3fnoV4KKSxiL9FDQn2mEs4eT9x4PKVc78qVNrp8tK1E4KtseUjKWxScmjZu8HLibaT98aag7BAnef2F1Vcv",
  "key1": "MBhMjoduBwT3BLJojhsDHiAdCwYywCpLPa6nmgvbBF3ZGnrY7yZoUwuuAD4Wo3QBcLoeFyRCPsLGd7YpFYnVFj4",
  "key2": "4sFA9VYsqU7FyvuphTR4eudAvanSJvxsCNZsFqRL9nWFzxJrgxkUPukrmtiiAYTPNUGjWmexY2QBfbv5a1TA8oZY",
  "key3": "4CP6ZeHzMWHdY23RYhswXUuKy4fuSyBhjM5x9tdC9s532NQfQ1ZUvb58AqNrXBtUd9Zje5zsn6stM7iaCT8mPfsr",
  "key4": "2AiRSxDJNcZoVDN5KP47ptSQZzbqbbKTvJFxLugwH5wAPRYziEXcXCwvzVM1Nbkfo9tNmYBiScYuPt272nWdrCe5",
  "key5": "5shGiKQiP1fgkSswpKSNm8hfVH35yPZiPSybRrZpkwH38jmoXM7tjQuyTWeychWHV4ouihTm5Q8Pa2Ps9yYfDrSE",
  "key6": "puzaSVNpUNKg6W3h26hHcLZtmq4DQt9rf1U2ZWJdAJG52AweGcg4WnKKRA2QjN1igzMQ3nvRaimhD3fN9rZFvXt",
  "key7": "3ZrJhinbb1Q3k7W7YVMUajTnc2JAkKaaidZu6FN7qL44MM9BPZKGEmPRMcvc6oJqFmUB9WHX6wyULHfuTTHvNu4Y",
  "key8": "3DiTR7aEEseG2qfFKpLogL8icut9aAcWGbRo22DeCbTNUXzLuzegZdZWAruvSWPN4V5uC2UY6XBWQXTs9JFJA48B",
  "key9": "5vxjPJqfC2jMpAuBsfV3TEeJKzWKbeGhzmY19tudFhQtU67JgpMWHAaZCVP7HFy4ZbxWr9NVtxfgNGZH59DQTRCY",
  "key10": "2wuGrXzo7nRqY3zmEgvPPBJZDKJKfwk4gLL4wE995Ja3gUqr9JsuZGNc6wdcpJFFbALgQdVkJ8vFHkuRb3pZCcK8",
  "key11": "457RTn5qEEm6jUofipsKHYUzwVLyUtnpgqWyvxFh3WoBhjqzmzQ68pPiPfYpwPP2Qgk8kjueo4uvkyznNSN7gJvM",
  "key12": "5XvUXHavEZQvJWYJTQZcRMN5XCABcXWAjboRF5Guc6w9ytYx3qgEd9pkrdyLon4abHBTs6ai6hgc8CSft9QjEu9w",
  "key13": "3vsfGtZQfggG1g7ETgKegNURqEQF7EwfV3SELomzmj3R1m5tTF6Vv8g1ZBBgCc7VqqojHYTt6puc53Fbkt9E1xC",
  "key14": "2uK9z846jKL2LdwFef4BcXrDvDrdhTHQEZ6F7yvM4JfmL384TninpH8cNdHXiEKdMkT82e8RyWvziUhj4Ya2ED9H",
  "key15": "5Z4FcKAzirEFCSDqAcBcaLsdM4CAuL7bvh3K39dNAC21eg1DMuuUUYW2bPjNDryXCBokxu1yhHzWcN1LyvwHSxQt",
  "key16": "2LfmX5QA2sUEJN1MkWfRLHMGhTW7iErvENuKP6KLzjsgE2yuEsniLSj8jspCzYsohYQgexDqVRTmFQrxHipE5uT3",
  "key17": "5E5Adg7mHAifid5pszGT89ATRTU2wEDqE73vrHsRzwAM1AVWkwN586f8ShcPQfVCzEDrnS4UUYThzE6oRvFDNi7",
  "key18": "54kHBuHZLpREksVvQEodhHD6AvmhupZTA4gCpzASgUuLycKt2t6qZ4vyKAfR3QTQVuvs1EuKVck6aLcb6vcTcKNM",
  "key19": "5auKyK63zzKgPcvPPk9QiWxwCqaCAhzeqx69ybe7pBBMk924zcGoNDcw4PsUmanLV762Yc8WGZz6Ts611dkVJBq4",
  "key20": "3QtxSRLTM7qG6BucE64Qdyxfc8oJrn1fA1RsUzLbjHnHuA15ddyz8kxjBoiMp6fH2CrnD7NqgxQnjguuGXyhsjtB",
  "key21": "56pR6q3cFMUsSpJT76hoPFscQbp8LduydKt5gFzj4BCgeezXL7MbPkkWUvgfrdbfk5oM47sEMvVQMb42Si2M2thM",
  "key22": "ZeW5Fsqpg7itjXkxG9e6U24q3CitGs4cJH6KZTLibwqNg1NkhiiNSGW6nj1mBr57n7MV5uqgGhGbQt1JEf1Nazw",
  "key23": "qGxCnX8Set1Suu4UWmsNAZK9zW6XvE34monNQc3D1q57gzt8R9PfCd5B5gPxXD1A3mne1L5zz7gD6zovQTtfNbC",
  "key24": "3Mxrk8ozM4bFdwrfGV2wYYyEAjGGXMjvoKTtghj3sCnGp9qpHZmsupyzkuqDTpZ3tMcL9GBkSGFALiwon6ZKixCd",
  "key25": "s6BVwEgK9LhoEqxETSSPfWoYczi4Rd7F4p37uXXEDo8QLDyNubBKtUbGLYpUjgyjfeBRFQJfP3q99i6i8C2BHHj",
  "key26": "46PuAC1rGPvFi4CAkpV9uaL114YSJC97kL398ziLsacU64NmyY5FW2p1mpq9mCP2j5h2nfRUbXfrUVQYehTvnQmK",
  "key27": "3QHRwpfEQdK9466vjzqp5TYML5wYpPKScF1tRQSj2srJBcBy65XEi9D1kTZ6W1TtTiCjqgEbiRa7MJhYoeZDxgfu",
  "key28": "5KrhbRLKmmW8HxCjUDhwppu6FvZExJJYJJt8m4scpevGPauPPAheBrR68wKYJRKwmcw2tDiYq19KV7fKSqWDdWRD"
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
