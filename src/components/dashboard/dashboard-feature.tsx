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
    "5DW8xjfuyWo2yE8RTwBt9aFKsL3Wo9ycWrhH1S5SPwiZCA9Wx5yykprfSV7j8dcox5rJP6eeWjvwPhQ7Aui3THLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVe43rpRP8FcDXqjpM4MNLAHq9qbdknSRP1xodD3B7zgjkFYSrAyMEj8JAUvHFwCPCmVEUWKmPyPKNcHVXSjqMV",
  "key1": "45mifCid96Cgr8Q9DjMfLUm4tE33zsF1WhTyAp66q2e2bxcnYRhR743zgPvMDU5rvGVgvuhJmuYa5wgCJji8FFLj",
  "key2": "529zaDkc7QLxmrfSsjEWwaeK8J17v7NihxwAziaSLekeRhN1v8F2DKmqkcr5Nx8xZwXbWTHzioYjpxdz69nEgtX3",
  "key3": "jMjKGtt6c31ipCPUEwLiN6kzEWnsRPBAwJTJLNqSJw6Ri38BwA8LekYGACs7F4SsLfxF7Xo7uW7d6wDJKsV8bTX",
  "key4": "3JeTvLq51Nieud59JxnFuULZwv6fvAza1M7RgLRH7X9QLWPSB8JfgEtv3W7CuhMrcoQ9BQh4PC8uXuw7Fy2QkWjs",
  "key5": "4xJXwirkzpZwQmd1wSYmkaBnXqCPzaotbMUEDUaHXuoVXZ5r7184eVDVXxYy9Bg7vajkXy4fG6gD4z5Y9qya7ds8",
  "key6": "4mUSRqjQMt25Z61dnD2hFMQVEwHGtkT5i9XqSM8r6kyr2R6LFhAaWi3gfV2pRhbAjdgL3qoUmGqa2352zWPZo8E7",
  "key7": "4NA9J4m371sTHHyDeTobQia1gqwDD7ngM5fc2rWWx9rV8Z9dfurCVEeLWS9FdTd36a1WW43V3toVgn3ziq6oymHW",
  "key8": "4bkavtRgJZ5K5HQm1dikmPGC9gMyqepBCZ4dNS7hGHv7Wz8rkpXCdvqLnjUw3ZsZaH3fqYRTFp1yWL4ZuWNrvx5u",
  "key9": "3m2S352vaUhSApuqZmCi8c3zQQ8jZYoMvYuqZXnfuKrFn8jtwZg9F7PkYKM8pJHcK1RoqyNANodDSctfkC8zWSCB",
  "key10": "5ghfRCxRfGBspBx7APMex24qgEvxjxNoWGVJtQkVNLAabubRa8Ce4oKCkXFkC8VzsRoah3hLVFrpXVBQKkWQkma8",
  "key11": "3gePEMLFaQMsUB9keKkrGrjfVDdjaaHXgR6qqbSMK55XwLf2exCYy7gPHhKRDaaLUDTZ9f1jGfhGTmtBsDFV38JJ",
  "key12": "3aHjM83WYdpgcCZ1CVpHh3enURnLCUwxymBpZyLhLehjfZXF1KjKJNm36EeSgs1X1cjJjJ83CRhbuU4ekdESGENY",
  "key13": "3dWrmyZQmE3r1z5U31PTZ4u5sLM9uxMwR6k1LJXRhjHw6BUHayGhAR9ShiPFcuGtbMENYhQcVVKYrQ6EAWU1Kdja",
  "key14": "PtEeAmbF2Z7zV6koTeyy2hSPNjhhd2No82YUR8wUNzTniJ2cx5evqowqw1V2qUScN35iLANTZp7SNTu1U6YNRjf",
  "key15": "2pn5RZktzpE2aAcWmKYAzn2eNmZkptBKEHRxZPDX5AFgyQaSC2PuNvBScZGV2UjtChB3wvYQpmt3pshwCQFMdwkF",
  "key16": "2RUQ8eu9KT8PSo2D3RauAR6hyGgUNFDf19BvkWCGmmN9DLMDE4RzGLaorq6cCsFWNqLSVtf33sDFKJNKMmAgYhxB",
  "key17": "W6wUvh4p7KRXdH46noDSeGhzq7tsa9NrP3fJrBB8XiZQrxheDDgDDzETaC2kjDTi6fvwEWUWX4t11uJoRsmgjgN",
  "key18": "ot7tAwo793ittQKr9C4JVXPWRCbhnFz8UYimcAyeQvwMEzUHqTk9Z16RJM1UXbAgmGThpnBAaMM3FPjzgHU8i6J",
  "key19": "2DNA4aPa73vXhNALthtw4Md3t5km3R3SYhojsVr5aZbkX1XWRZTah1QqCHXKj1HEP4EuAyvep57yiqGBtPUNDBwQ",
  "key20": "VGfL6pLparfH1uXmTg8R5MhB5gt3zL4XgSv9aNmiHGt21wTcFHuFjQGPswBA1u44YM5C4gKAuH9ngSmW9pRJNuy",
  "key21": "2KxanrfL9EqFxXpXkGgoW3YqpT6sTxJaVBMAKrSMNPhZ9r3QdemFUtGcGqwTRB6LEUCeWiHppw8xgmb5qULY3K9Y",
  "key22": "43WVp3gUpuAADfENMtDBw19gvDeVDrZ83XGgfwfBEojsjcrT8Co7te3mmKWkbRC4cMffF1168CsUUeYrGVKrzAsv",
  "key23": "5ihEqRsr5BVZjDBXfznMBUTyAdhAUEqD8Repx5gtoFf9yNdDfe1eUUUfAEjPbuqqTs7uR555gE3TD5b7TE2K2FfG",
  "key24": "3uFfXwbpwBCjqmjNBimtTP4tqxRgF8HN6GFHoPkgLaaLXt3SoXHUKWmVTiEgv4uHnYYA5hvSp4za8m2X4dxtYTi6",
  "key25": "5YaZwWCPr7HGvssvPtbognYW7gTbeJkU5DAWXzzWeEGy5to4BeJArFkahmn3mAaFvAVT8hc5uS9PFoTcrpaZtWuM",
  "key26": "4ASsu62Sek4gk11bHpxzkiRpH9YSCDnKeKcFY3nWr35EzVa89vtpkd6dxqVsRKvmCb21vJR23p5KWSXV3FoHgbpP",
  "key27": "42gTnQ3XkSqcm46JZekTai3zbWS3csEBbmzsAUr4PotCiwohTszL9TbghghLLPizkF3dZSamVSh5aynCVUaxguvf"
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
