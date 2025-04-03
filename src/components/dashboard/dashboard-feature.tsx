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
    "4Eik6FMqnarQpuQ7qLBBRJMociGDRsh4yd4iVdZEM9bBUDdxnwLAByPpstb5dmAoZxm21PEFDv5uqcBgzGTUu5hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dFYuTPgrx132s8M8KHnWkaJz5gqy2CfgyAGMNfCX9fX2bTv9wZDGQzcCDorZQPP3KrD7TxWSFk7VKragH41QTz",
  "key1": "3JBkjyVemcQEpLzygxLU2zFcHfvyBSn61HuBDJFawwjNscHowZBgQ4ncFngs9xpFE1fQgX8csG42xXe1Xw3J5Pzm",
  "key2": "4AvavuNnu9RimHBM1GYuFhFhAxRR1u2ZTapC6VpDXTR5ZcybWJvjBgFPNN8dahEgReFdwYoqB7iVBBSygEsg9SHU",
  "key3": "5JuJroAGzbMrGm4BteujwXdm8zCSbii29xKLC6SLDsJBFzc9aEhq9VJGVDrmPr8C6gt3TTGX1DLdoPomaoYXWqQ1",
  "key4": "2PDg85wdRVHUELFDUSeGnsRTmTi49xhdbwqcaDmzsT4qTe6S1DAu9fT3HKrLkc1j8iM2MNcbVLmSyNwzpM6bCxTN",
  "key5": "59xLHDXKxwVTCTf7X1xvTitdWmxS8uLc5zSdEEwj5ZUc4Kzo9RSLGB6FvnHVdxBM88XMkW3bdQmnkeEzcrrGBDdA",
  "key6": "5EvFu6dBWTUYiP1tXoceiZCE1NMyixt7kaHu8WkDGLCDqT9ZDxBA2D5ZtwdZ5nk1Wibmymk32MWTUiJtsT5PFN34",
  "key7": "5DarpqFsGJkENLAvkvuJb32RWvrchDviWTJ2KQVL4eqWirkNoD3KFPtEs2XCuoQcmhC3UgBtX69E1XZaMMDZZGVy",
  "key8": "5a2EcYEYFebzkWHNFAQrYrd5ja5LkdbQeCxxeuPipdEJuE8HGSZ9R7sduPBFwzrB1wQBQ7r26WByHD6qneMzgMsL",
  "key9": "3kHS65mN87jygPLzHBf5KrQYpBoGQADEqdtDgePZH4LmJqpN4E4ghDCM5VbTFRMSx9vKgiFRjSjWuZRuCwi1ptLX",
  "key10": "29zEXpmiAb1sR8ZQW17mRcKRMDQEBRb1ynhR3pkHK3Q1KzoKnw1wPJpE4fHXHvtFuN5WsKHLt3WxjkySm7gjQroe",
  "key11": "xHrjR3RkEZPuk5kBGfF2iawvR469nGBEb9DEDao2mYtrgXntb5rA6pULHTr3XHzm1J89HF1pRbQyCificihdF54",
  "key12": "4qmcFr95oiaoQBe3UwBMtFwdStWWWujXU4WvWvGcz4NAe17oo1nCvdUhDFPHbWjxjjUP5jju73tkdMxyekqkjymw",
  "key13": "3QLkVbPxPwD4AigN9Vr7efQxC3rq2WiWbJQrDYDsw78vHKk7BaavXKAcngDcdjgHtZgVh7Sdf2UJBqumArDh7BUz",
  "key14": "64zfw8nP1i8uFkYqYDwMXNmHkkxTgbATTdpJhkGwTqr8xgUnFXNp9VgmGUznYfKw4FZdE83Hv3GwBswVMhijXLx6",
  "key15": "3zdCfVST4cGRM1eDboQ6wW9FnWSHZven7mShAda5CkMvnzkJtJm9ssCNSwdLKzn8ahe13689ju3SCNwziQysnKBN",
  "key16": "3gCwLHeHqPyW81o2fUoQRuzKKPsJXpjEEqaLv54DqywkW7Zf7VRzgvbyKBe838EDYkJbcPmTHEwTEQuSxj5pAWu4",
  "key17": "3D1zFhS1bibUsEi6PpvHMXdEKpCzdN47w28SgXutes825BLjdi1Ny6xYB6JgmvUVqC2vky4Romt7QrFYXaRUHMpZ",
  "key18": "J3P9Puwjp6wAMmhCZfBK41PpzBKh1yU65uPJUwrKkHnjN6nDQ2aSaF8RRjVdzmct1ThuvqgTPK351jVfQtRbGSe",
  "key19": "2yA6rhunpwhL8ZHb8Nmj6knGBoJVFeqDb2ZycWkqFmyyXGQoQNCiiExUUrxyqfuXm6mR6TYF4i8jep32wutYKEd",
  "key20": "zFusaAR3n6Y8QgZc32ueZiMsezsrMTAPy5x75cp8nqC5MyH9WvizrXXGBtUaXWFEuMFtyCR2pEdLLo3EaF4Nx11",
  "key21": "2oah1SFWAjAJdkTCdNFNaYJTRMEa3LJkLvtRg56sGtJbhfkzDuvSjGcRnKeF9W4KfEW6qQbP8Bm6N7BDFR5VPU9K",
  "key22": "3CLGmNTFhxn2WF3ekq76xpWW97bvouCBALtTb2hicp7n42EGUKqAaoryaPm5s2i3nRdfZUKxMQHErLmERde8t6Fr",
  "key23": "4YprJWQpzEXwAUV3vAfA444CvwT3oLbw942XUwQNNjB4hqHNMQ2PDzJ19qC6LyQDiF3jecPjk3HydSBsKn2AAB7x",
  "key24": "HrbiMiDb48W5e5tfQd89bSvD7ma37wgyrFkdSHDKqfPajxVHQuPkzed56TGrVWRQN4BneGHvbRKwHuXJh1DzjH3",
  "key25": "2g2qZ4xX3JKtdAuj5uU62FqYqDeSkbyx9xHPKiEDZnJucJVEEP74HnYCvAhK9hT6hZub22pD35MMAwYPy95j4whg",
  "key26": "2MYybazTRFDpwGRW6bXJoC6DaSNe9TndF5cgE6hpTfBjeJ1nTok9SLPFvppUWpVDgiDtWmBYAX3eRB84ZQ82wsEa",
  "key27": "3WHTu5RqriPnjAx85t9QqUiAPwVLRKtB97o5DwTCZKE5EqofL3s8e4zZ7Z5NewPfDvuV6BUPs9P9xcbw2rNuYsRD",
  "key28": "2tjTmfwAa48Jrom3WhzqdPCKX1xAi5JKLwCWRwTAfZxVxRPmQ356A1dKbNpexu5TFkriuweqCNLqLZ3ZwA8Uth7",
  "key29": "4uhAoc8Q4dqAJY2KGKRKc33gCaTkexe5i5vA9ysm5cxHvb36u4ZeMGVw4LESuzKR16Xrohmy3U6cn67UqTHAiC3b",
  "key30": "4pXeNhTrpWp2BsbWVNLdi7Kg4E7F9Ra4kMLMbR6V4vkmgYAjR9NsuHmtavgETdt3YGPMdZeAZWhjFRKctDca9dL5",
  "key31": "5CZrQeAz77KqBbT4ot3auiDVu56NHbxpmkM8QJ2nDhUETALkHA61MDqe1yRsZR1SN3KqmQsJeVhvbFehqbWPwGZY",
  "key32": "2GMbbs16USvCdhjGV1P8zP19Xw4xBcybQCEa6kPAvfBscjsNTa9rJm2cc8Bf9591NQn51spWece6ANnu2ydaxHd4",
  "key33": "3GrCNmT6J3Ygu7pJZdsLwqPMnx5nu87Eh2cWaB9u2QhRNQNcBFJDLmjbycnYsAJBRgEihs1zDgrvXNm1TKgJfEg5",
  "key34": "3PJ8eQJM3QnrickqCSawGu3wv9pvn45PLd1jotCCzLTwh2Fctaq5D4FXj6a6f7Q7iiHRY3SAeTGxvuQKbhiCXA4F"
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
