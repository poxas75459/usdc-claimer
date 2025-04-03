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
    "rnwwKXTTbv3hPKZGV9dBmfUpQCh9tfRTkAw3sDQaD5rNDzpWA9vJBR4DUMe6T7K7FuF1bC6Q8NXkpYj5fz7yumw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfa5nvUDVMoGaTrvg8FMYsYUw1uCcjTpQETHpHgCWk4HYD5JTfsgy5SkD6LJhtoHnmuZezZuxsSBRMuRST8UGfB",
  "key1": "2GLTZwkQvPZbBeJSWsejQckrVZ7nvjXKMhqq8iQKj8NsmK5d5CQeHE29xLXgnb6Ldg7YwbzwwEVzPPBVYb8BQHvX",
  "key2": "GENNE5V7aWS7tj41Tx5VdhHPkxfz61hWgABBudqGCfoPskd5qp4UgAR9b7djGZDngMNm2EqNQoFRobSqYNLXZZF",
  "key3": "5DorQ8xYntwAuaMvupyti8Nh8MvoKsANxFLL1bQfEN54ZsgpSuMCR44TpaS36KhYNCL6KG3N8r1mqFmmuLpBEL2y",
  "key4": "3wBqvi9tt6d6W1JSbxnQ3Wy4ZGJWQVugNZGrLzVYfzPDmLAYsBJ4aiUgC3XxY5Ytr6xE5gVDTsNFpJxr4cAqN9Gw",
  "key5": "4a8jyZf3oZx8YFMsMJk5VXQRg3cXLVSXTd2Q5wCvGVzUba8c5goAj2SsgapqPvRsETszmvQaLXcZ1bS6wHkCdr3w",
  "key6": "2WsS1AGRHr5nxCAQ8uVUXNj9VMTWxVakSPhtBvxvtMMkaCxrfmputs8oWWjhgc9Ro27s8E9AZ13jS6DmJajme324",
  "key7": "2XEFRHNTkoJ6irYnjCEAZpjVhNZkoDC2WaPZjimGVPun4uZWVwCFFoB9rzC11XpfL3CfoBQx6Nw19DpqhtLhy1Ge",
  "key8": "3HJ6ZKHYfZGqu9YTmgna2CAcWLhYqydgLoyXrsqXkvZxJ7KEsgz3o4seHesiHoZJRrpWDiS4FSNsLc83VS8bBQii",
  "key9": "4F2zAYy3nxJMow3rcCr1QjYAGCH1278zUsKHk3jBdWDATzxSfytk7AqYtY71MKkm6Tmh1x4hUXXqs5wN8DTZpZVR",
  "key10": "3KvDcG9hQQBMoNBNYsZhuxFUYoRZqncXjx8ByynwxQXhEEjM63gPiH1puio1AZBqiobHVqD3B7okNZokHTaGdfBi",
  "key11": "4JXvbmB6Zj3fKwbLiaiF5TQnPsQZuPZFQsWp8xyyGVD1DEL2nSF1feGJpHi5bgbHz72KbJCVC7EbowJyCqLmVZC3",
  "key12": "3vYnYazqQA6Utqp3bNKYdnjFiGRcroeJy9DzTviX5216NUuXeS8RMspAGD6yQN7uhnRgZbxwpzGdrtxs4TVHo1Ng",
  "key13": "4X6AMSaVJeMyvv5xKmPySa68G5d2pZ9fgfxkFiJqNR6Yme5tW37E4EPckqncPSoQtDTKBRUNiBNWt3qwm1tGdFBk",
  "key14": "5MLgkSRQyL5EiWyvYwkzpi8Moig4Q98wv8Jg83wW2oVrVEPzemzY833pXabKG7RVoWyo3wMViKD1DCdRQ7t9KfVf",
  "key15": "oBPeTRDZy4g1xsE4WpryHtdYDAb43pSHscPdZkZZ3BYfdLJmvU33ob76g4YG2ht8FmwkuKmaJDmLXfWZ4C2U5qt",
  "key16": "4fXFxJLni1aGpLT3hNn3HSWnQHdTRDvQ7VFTZMmfkBYajJZvjG6PESPnTHseYMCX8gJ1iw6SDmCic1frqAaRcyAu",
  "key17": "RtkQvJEt5GfGmBuTaAXp2soCDyp2ErHqqBq5Lm6zra9f7X6ZrjHF5eMgBpWuFJfWCrNXo1ZYivwDK45731KDGYx",
  "key18": "5UTMedhXG9mNXokaSCfphaWE5gKkEe2g5kRuJ2XgfgUZxma5Cf7ujtSaBGTLK2MyF38PnDYMomGCxZvREHxCDw9Q",
  "key19": "4x1KeNsGX9bMfrgXm3oJbr8nbTSkp2c9XygY3mgg7zMoa59F7KY7xxRdZAUU4i2sqEAGjWe8QJfPitgLHRA6XwQM",
  "key20": "3nGhnZcBN3ReQPE2wJH1cdNqzGUkMbXVpPJg3dW99e5N2rifeDgsnuDKFuZReTdUonFp6BFJbsMsFYRLSeqRmrV7",
  "key21": "62jxag7GskVNDznJz4QYEFpT53E5gJnV3k6KHdzX9wGp6bRToNvtDoGVCyAXN8BfMAx4jCZi4YJHjdYEgatDtK9",
  "key22": "2gV43nzqw86YtKunGy2Tx1rcozPjxT8aRvJNj5JPsZACfdWr5cRMfdJXm1g5Rm14qP42BDcUdAABJJv3YH6sWVB",
  "key23": "3otcm3ab2EJNqn4RG96oZn5qzhpboPjUviVDotpRWq2LiuR7NEy3YgdhBmggxuvupPuuS4DpwV5XRLmBr6ApsnT1",
  "key24": "5noJVQxZteU8itzBLTPyCz6QyXQ4fzXkMSCBx3V5SeYqKsLbbqiDMJkh8FD76Nr7AHz2vqDrw6RSb2fEZzmQdcR9",
  "key25": "3dfyS3WgBohFWMhabEq2z7a6qrSr8e6Sqvxq4wRbMavat3tg9FGvADrPqHyoSr6itpdEcpeLWi9ekhEdJyHiFY4j",
  "key26": "Fc9qReyDfGvVKFGymAJhvL6QvgNR5zLSWVgKwTioKM5Q6XzdDVGa9jL2Rc86Apv46pMFtffx9E3cFBnLpoyRufF",
  "key27": "3HG9uCHAm9mWcBfDZc3fqfau4gKmzM2XDshXigbo7n2P2gqPcttLECbnZsBAXZT9i3xSPCDcdEV6VD5Twv3aN6EP",
  "key28": "3nFneKdgki1e8q9v5CAwLKCcdyiECfLWY9Mi57EUmuqkmrZ3S1uWbHLVksb8PRQ6varNW7BaU1veG5pPPESTDMfB",
  "key29": "3apBAU9gKKZs5bU1XB9AEQGDHoLR4xx5JyyvJZYzSUPcnDGTVz3Jh6Dhe4WpcxcjbSBayx1jJ1eAmfgVU8PMQg4h",
  "key30": "5YmNFqjiuX3e4bAtHoxTAo58KakQjkohzDdDzPCJzbdYnUhGHdwbV2FVaMgdMXSn8YBjdZXuWugrgvy6AysTRvvf",
  "key31": "QunPxg1tNo2zSgmDhXMHfFRGo1AqhzVomGAFVyZYwBH2X24FQ8SWyb7paQYyV3tA34QPUx4zzELwZEHwUYFVxie",
  "key32": "3ZsLjw6BYAYG7cnSZp66svxGijT9X13JJw7Xj7Fy6b2BeghDokjaSmedpDZEPRHtdBwch89XVFBTp6UZiqa2Qkyj",
  "key33": "4qBBUnH8po38x7DKhCaa21BK5KrpCD5oaS6Ttkfv76JgLUiKCgJ45BvAYChxEyN9q6GrUqsWVXi2kD5UkeQ1897g"
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
