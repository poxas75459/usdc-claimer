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
    "4hZ4L8VWDUAFr79A35ZQVpWaXRm8M7gF8NEK5rd5U7hPoaeyXWHr3Ur9apsdSiCGTQ9dKtGAYdFoiZYwXvGKQzGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45zPeZppjk9Vx2qj8z6dAUhJQqLMQvg7WNqN8JTnucuxS3JuXuv5TxD2KC1YNdpJGSTKLpuqRV1Y1oHLED4GkDxD",
  "key1": "442gHR78hh4MM2rw3ZCqfH5ssevWKoimM3PCViFfMQSkyUr7Wq3XzCeVSMa4GFqKxRAGXUHWKW5yP7cNGyLq8F4B",
  "key2": "4rakJsQWtJaqHGuoBfntHY34SSeNYTBGhJPmGeqqoqyVLLKLBCa9RJaBk2N9wRtfNn9pWSR8Bmw49QaXzHzCx7Fp",
  "key3": "54m8RhwysZkgRxKW6CZWP73aMySG5u8jb5L9gnmwEKBcL7gU7DxMz251zi65F1BYo1vL8DzEWxpFhv7o1idskE6i",
  "key4": "37vLfmznqtEbv8vBKT4dzVDMkKDA2DZdsQ37gZV5GRGRg2XPhnfgiGJoRj3ToCyVCpqkEjbSBkkK6MTptif57emt",
  "key5": "4kuTXzHDVZvGnf7E9gHWNPoLpuyuukVs87aLV8NnyfmkgLNLrWFjCcrHQy4jcdzChWaBTnNyYweMUGo8oWhgCB64",
  "key6": "5mnhn9rMbzMuLz5Qoyy9aijEaSk94MC665wEHzj4HFdDnRBG7RaCZrJfFTe4TXh94RkAePkXPKM6nTk5of72bUyZ",
  "key7": "bPSFmrsJdiWtVeCmutiKJaDXfkiYjRkbhUB2hRv4v67HwpvPYhUi8fTcKWjPVGTC45F9An86a6x9AL4DDJrgboz",
  "key8": "3UjvVHZS4Ptrgvk46KUR4fRUdN8e42szqUaZj62DssS8UXw8PtZc1mqXxU3pQZGpc44mmUcEzPram7ruRC2YGeMH",
  "key9": "569CvbUEAQDhi5C7oSB58FVWXQ29sjGNMDdVpLi3gSM5ZNxLyQZfpT4NP7TQPaBL14wBxhNNqscYLY6vY3qZjLoi",
  "key10": "5yQp3mGvuDEjbXBxjaMQtZs8MG9xfQSct4wJKiSpo1k4dNz3UYABV2ZFpZHe3Ck9HgBiU7Yr27KAd4ig35sNRYDH",
  "key11": "2QvHPUJWwyvsf2qmwq7exdMsniLhPHuggmvxZitDsqJN2YKWu6XWiuho9Awi84tbopVevTgphCmcxXCwR14bPyA",
  "key12": "5e1ABBTyQi2PHmb6ewHuXU1PjygSxVMkeHoWPhmKKerf4MLmMTYzPFbEwndU9btcBJYkoe1der6HvtEVqGrkki4F",
  "key13": "4psQRw7SuATbH6DZ4EekSkpSRqFLpx2PpZ9EgZArufGbJMnLKGL8iridsFMaRvgNxm4UQuAVFBVHtU26PoHWD1sv",
  "key14": "5qPRKWrZxuzJWxXxe3BXH16bknZ5DZgD5p9kxYmKnCDt7MgnK3WwEUGJiKEEirnoNya2JRaxayeBLRgLwUTzrrEN",
  "key15": "2TfUVKv4L9JRgQaFL5dwBgFBseZdwGfdmSjhRSGgpnosELDSUquqQeKdhSwK8YFg7MtQb6wzYuL3HiSpsbMcjBTe",
  "key16": "3kyNoNnrVokrLRF77XAbw4PWpqwNufAtKQDdSwpZtZtbWR35W2b8UK6A41SCRy4kzxHezNK5v5xku3xqhZWqWsQD",
  "key17": "3Z2qCqfgkdQGnQEfP266GGPVFUEtqhh4dRAEqkFR7mydy7jpyiuuaRkhqtNRq8m5B6MxMq2wRA1trieGX95UvABy",
  "key18": "5JEFDNz6KMpgjV9Aa947nZ9Q3y9vJnAKnM9BSKyF1dy7we6U64C45yHpKYwcWUhr8QX2YiNP9qrpEUFb5JYZMF8M",
  "key19": "2B2AbMHrsd6vBs3yzX1bqLLZQN1h5becT5nsD7UYzGzqMdSC9ZpkrMhYsaKMCa67k36J8FAiXehUndaNZBFe4KP6",
  "key20": "54ZxEaZ7mv8uTF5Tu6GtPAQAESf2q5TXRrNye43nkopVkoAfkigwP9mPMoCX4jwWLpD2t89oyoj1ky5pdXi6Yxtn",
  "key21": "2FFc5ZAERQGsgPXKJ3GaFV25wUFL7Ud34grWUcD73Lm4q9GRdJwSseiYfzWmwbKyidysdPcBW9oCm5mXvTZpakHa",
  "key22": "3MFS6vBGpbZrbaYcapbEbi2YPwnNEwGJNLLBPH919iYPQs9PVtoQV5ooF7urWkjrK8gajMkj2ByGup23KsYJxFAC",
  "key23": "4PurJuEPAd3vxiomAt3d3pB67spSYtNQzXC2XGMtRZ88uiQZAPmPK3zjGrC8UvT9GwJTrG2E59w7VTRReQHoQ2Wq",
  "key24": "2ZU2cokkmMQjLZnUEQmAXBXrw849kgEtmYAY9rC9TQMupsQpvPtoyFsVYMUcAo7QQqtdEASCd4m4q8o6NARt5McS",
  "key25": "4Urjt2JgPXGUDv5LmMcd2k6pjqRXJd96T2y2o1qLeBnNxaS7psqvWeooFvMaqo1p6XC2wtaDeWBEgZGcFD2KWSRQ",
  "key26": "36YG9ZbodvEoHBdk7fzBFETuSR4JkpsfsdJe9vqxU8Ff1g5sKJmZzfYdkuQ4tBHyHs9DrhtYVoV2ZKihawRgGMUZ",
  "key27": "2derpdovsVHoiuEUG7YhsxHmT7CVwecJSobAzno487Q4ibXVumzjmda1znxa1yoEEyncVc7CHW9RWtXMjodjdaGy",
  "key28": "2h2BthLBbMtey1ksfxMbAChubedm33kxHyBpn2WXJv5KwYN5y8mDjcHLn4cw9kFFfxx3mUJt8S1FjQM5YiP3YwbZ",
  "key29": "2UWG5uJwQpF3NTAD6ioyZjy9VPth13tEcQTJ6tWupBvBYBFQknNbF8UTedWVi3AKdaqYeFt3tYgfUA4u7LhJSx4a",
  "key30": "HusjuQTWrnECiigKHjF36j35DoWnr8J7Dvt4VvyjS6E1LeZDsykhdHP66SzXzzeUw8P6fhcDv86xTW1ukAVbRVw",
  "key31": "imvEymhh5GbeHJ2afeqaVrLepKLjCMK13zSTGqdC8xoFgCBTjp55wMcpZs5gqmaCDZwsKU3M4wj1C5aKQGkYMzE",
  "key32": "4bQuL1Uu8PG5t3Qrd9dV1B8uamwXsVv8vnGe7twVPrmQD75hMy5Sj8CnFFbd1bhEfdDnNaop6RF1QtYfJhzsXSqK"
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
