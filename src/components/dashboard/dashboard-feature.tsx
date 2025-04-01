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
    "5oqzccbW7hMFkMWe1NZPQKq9RvAeStxyxaa2A2usQWqwmYKf1i3ZY23hDJmHsWvhZZsr6Jc8fpY9gHkbWhpvQgQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fo6gGkRMYKcZQoUVZwTHDdVj8pRj9god5RYbiDsaHVjZtNJKYGpi8X7wgw865tVziNnzQcC442RszRyrFLnjkMK",
  "key1": "2mkDKGM5Rq5b1hBU12V4PweV64b5ySCPuuXZH7upmTBjU21BGotni1ZfE5zonXUj5fp9RxequWigsCmLyMSsBRDr",
  "key2": "4XrNwJciAfYuTnvwojKe1yjWTFYAKaCpa1YneHAtkWDpAXDB6YGbywZSUSTTew2kN8zYYRdPCXhyqvGrUMZSeXzV",
  "key3": "23mE493JGRsf2SkcM4wmM8Ax3ib6CUCB1wardoQaERDwnUAMBJEQ2JKygpKFLsLgptE7mBk8bhiUbhXUDcZXQCC3",
  "key4": "2KHi2ZZYBg8CUbzv3uxYJ7yT7L1ogHDbb6gPP55vQxDfk13e8tCgioDjKRHgGzJfYqXY49Nb4kSyzMgQ3weECVJ9",
  "key5": "4jwLvx5AUtWrNvojx9rbUbBfh8cEG7YajdjeJ1nPFZ8SAjTd2bDkireXHcv14yVaym9obDP1aRKE4HWGy5SVTXQm",
  "key6": "5Pz9FHKF6nii27V1cDH1wJdk8Mwc7WphUR1kM1JJnV2aLhXiAMCVbkNn1ND7eQV4CtHYfwsKqwjnmLwSCuGwWG4g",
  "key7": "4mch9b4dWbtjBo6ud7pANAwsuhbKTrYchooRkjYwLc1s26fxuxu8p5MxiuYA9P9Li9GoKBiPyKuuW7cYsYgmnBYH",
  "key8": "Sef3BLeQSEjURB2vZ7sJiJd6YnZUtLMybBWzrkFsPZQZnoNteELzKgfpjbtHXKkrSL8gEQWZNA5r6K57CUQ7hmM",
  "key9": "4Pcohf4H9rvnbWbV67KahzbCyEwnLky85NVhdH1UiEa7aanTk9hrwhZ2EVJPo5Xgt9k6VgUqTJfPbfZABT9NQCQ",
  "key10": "9eDsAajqeZcZcSkaoMDqg1n9SYtMhUxkMjRRqX7dUmQ7t6RahTtpjekTLsWPUtwLafrFwgETzKSSwtwXRVAfmBF",
  "key11": "5zdYGP7X2hbbEn3KFMqqjaQhoQiFSXSpf4t32Rpp62dRDDxUyZqkDZ6rnf1PJ53x25DGbZPNgHJNnvLyhpu9LEUA",
  "key12": "1szHPLA7h351BiBvBtyW5dHvwZhSCf6xNVPEZmDD4AERTS3q5hKDjekTQfPBM7Kt7oV2dwEhcady2ENGYMV8wCK",
  "key13": "36PXzfwDxnW7jwQzsBZpKSwto3EnG76QjhwAqU78QMMh4ePvjuXfaWVUXMDcC4bMag6TwsU4FKu4KeZ471LC3rjL",
  "key14": "vZpLrwGw6sg9djSxpAMMgcNYapa4Gt82nhxDHNuE5cEx8d6GSwV5zzMkdX7PfSmtaPge2UquzDJSJoTDWQhi1de",
  "key15": "5ADQzceQ5CmrVqNWyzU7PQ9WbX9TY7NZJUmLns3rf4WFL5wieEX4WmGAYfz1w4uF5992Aom7Y7xa6dK8CDptbxMg",
  "key16": "3FWFKmT7jjBRGTpKeesqwMBB3ggu5ZZcSMubetm5QcPtWDyQje84M4cwAPwp5AzBj1oJR2y2PdbCtWziJFsegNM5",
  "key17": "5hU1KcBDdBaLv5BfpN6WcvzJWnxbKb6RxWCoUZbDxCrZTEXUA7Ddw9EsTnerapxH4YgpBfQawwZNhRSrP9SjkRui",
  "key18": "9ANoET8NfUuwfuwD5YNShzPEsgXi96AL5AbJy7h5KQNSi6XB18NBP5faJAUEfBPEd1BF8ztL8ACmgcKRouqJgdf",
  "key19": "2gGpDaGAsyuiarLgRaPFZ15a5J9AhQR6yYikSq3JxUShwRVoE3aBJTJwa8vaQ8cVC8c2gbVeq6oJhgLP33yvUnNR",
  "key20": "MfkhrjiEksCz56Cjjc9apTJTakGqMKCkJARdXf16NS19Hh6Tk6DeshzBD8Bkz5yCfgt98cvMziAcKF1dgW5NLZ8",
  "key21": "5QcMHkBMB1xKjM29QNpzcHCkhQSzzn1vRvDCBrLZ8FJh32gvmLTWjn3g87jGYrXy295Ku27pS5twc6bTkgXyupmk",
  "key22": "2MYuE6D81hLWMm4kDw6nuqjyLaViBVPCXUAV2XaNdputa7o68Qx81VNAvNGAsTzUu82ioSX1eVR176K4aESUbTpu",
  "key23": "3adm34LrRssQth8fGhgpPexYXtjP5YuCjbMPyLpNp4rT5ssrtPmrvQwY5eke7aArZNVbWUh3o9Bh8gnmX9TxVE9y",
  "key24": "5PJvzWH7dnNvFoJKFM3EBTdAC8acWF66EhPCEi8NgzoPWXQFxpfNikyxkEbvRikBCaBLjTaX3DjmAuGcrpZyhEkp",
  "key25": "5AQzCtoHqd19ZGBzyK68RfKGCLXGbuPR8g3qs1sLVEK9Zj2jui96GR11y4Za8KW6qr6cfFsQoJkghTwHqzQQhkmZ",
  "key26": "2fuoFa6tiqL1oU9SbatrQ3hyb5LAbzeAUpV4UTS2ebcCcA4amj4wMBsgk1M5qzzJymMAnjKAwJ58J4vfAQFfEBSn",
  "key27": "3CJeyQQvo9v1Qq1yP37zMgZUnXGtgtuLKPgtHjrJ75wE9w7abFibixwMnywXKrEkenC97j1eVGoRCvfJhKDZLw61",
  "key28": "5gMNoasdmK2tJsFrq4wFypPVmbtxe5fJW63mboUAJzXzRHdupiMNTgm19XiBPmVas6sDU2LKq5hoSvWidDc6FJei",
  "key29": "Cyn2o8jkM54yyau5Z8X1yKAVhs2ibFXD19g6d2zF5NxpLWS8Nmujzg2bgWUzXWC3HUzya3JBD56ZrARhRTAecxV",
  "key30": "Suj1WhDY2D3SFLqr2Ced8amJuBf4nARt4ATmgTw4KkAymWhp64sHDyDYp1jZqmpiP1VMaE6m1bnTxrQhqEMLXYo",
  "key31": "pGtgbqZPPAx2NYU3NkiqYCmUP9cq9iMF9D9cHsS6pmosLQJdn62nChfoMAKQ7YoWNse8SA2LNEQ3h9bUBZMwKoc",
  "key32": "KL3w9jNK9cVWyWwJhAaWBJBhn1jqt9zZg4NdoWztc1Y7SJ4t47QzFAVH9GBL42EETqCTAHhcySURaPiBy1SXXYq"
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
