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
    "3x2b8nAFcVPhhpHe4KXGi64UDUJhPxt5YXyjWDDvBesffWgtSRYBrkp1Mi8BzEwLoauV1GTPjgNbVgXCnVesY6x4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTTsRFZdT7PBGABGcV3uyVUhWGKT78kGHrPFiRrV7MMy5GMFvDyNQiWmTDg4qtGXDq8uvQRk8VAmGoQdYNPQLQc",
  "key1": "3HYz47BvZQ78ZPoAcXJcy3vB3tsoimKXsKMBVWZL7ghkhQHqc553MtGjFNmqrqiTyZniTG8JmrTuvJ5jrQiUfHje",
  "key2": "qNqhdsBpVTVkbB5sQYMc7UcJuYiaCmrBP9q1xAJ7WKrqihY19tXEue6icRU9UfhUdWkrsemSptFxj223BZV2DJk",
  "key3": "2S8LrbnmVxuvH8k8ajzxxgvUJkNtYsa3rE3mfHfm9n12KCcXQtrQFQa9mYEtjetdsGd5Nb1USU7TgKKnRGHy4DYv",
  "key4": "4np8fpSV7Mu1PEeJJg9XRxvTLSSVyq5hwMGhY83po3PcVMz9YLTajrnp88bC4ScT53DMBu4r6mSLdmCSS1xskqsU",
  "key5": "2DQNdZ3nGmZszitvoLvLmCk34MhLD1DsJMsg8BpQtrahpFco4Q54RoCFhUJyWxbJ11sfyLZaaGozL7sm7ipNNHS3",
  "key6": "Sru7Y6Pp6hWN9HipNv1g7SKQLfSfWZwxi3jPvK8uvhKDeXgQRMCeUpyvtGyVDxUCrdWnjvC5rj1eZH1QpryhZC1",
  "key7": "3P949sjwE617HggtjcdfAiKtua3Wz9bvaupPu5mmLC9pK5r1CDDW9r6wjojUS9gpi6adhP2uHxmv61mm4S7gBptG",
  "key8": "3978NVWNZB2rm32sea1yr271Y9UMvv8UTW3sETW88JeF3LubPqVCZqBu5KFiYGjW92Hwu6qK8eeUyg2wwTvduXWS",
  "key9": "5sQKmmkXqeHxgArVkaxQ8wHGn8X6kTn796mPZ6UZMV8uqRGx3Qd1yMgfYXm8dJMsAZXnSpZKwCRtRkBRuPB2T1qd",
  "key10": "LSXJVoMtvHaEDBrntThdH2ttZze5T3HwD1Kr8Ch1vR7CDv6veY15TmdD1JtPa12NqpE7QZ3wTCJ8ABtbg1SwNX2",
  "key11": "4YUrecLrNchyABy2k8AD2YhMmSNjf3eg1xPW3iYnQZtEooVsXdhGbMMgUusJfGC4rTJ6vAUbHnHez78Pfk7xb224",
  "key12": "3ngGFqmtTBjnxDqRyyLi9cMEqTL2KgHED2Ed9YNDxXUDB6cWY1rgc9i1kdrP921oQ73j28gy2RnrFB7RNGwzoZy6",
  "key13": "gM5G97WZYJ1RgMMLX5G49dhemknNBPapKEy9YFmKCTF4ZVCE3SZ3i8XbVXiBpr6ryE9o8uJjCaeH44bc5Kwi9cA",
  "key14": "4cBqGaztxQwQBaJFYudr5izjJDScJfte2ixnmy1XZZEJbxCXPCK6iiAswcWMfjeEKLPM2DqGMww1t6kczF5WMyMz",
  "key15": "3FQWbDkt63sD2W9zZCviGjE3VrrNby6APcBi8koyE9i37VsDd6sGqFJZm1TBNUmB59STzBvTkSq3tq1Qnfhz7wpX",
  "key16": "2yQmnGooPdXVNzsVcXiNuQpZK2SzKim1b4AufSC5eKTs4tWA5zDzzzMB1mo2NuXotCWUWsmXhBWN6unR7VD1xkSZ",
  "key17": "534VeEUztGbktumAhsBEK6Cia3FE4pgU1iSaRq8Gu4xiUU7SRBchmtsyGuaNA33MhTsRhYQUwxGSwdF8ZZgkgRJV",
  "key18": "2kDvLvqZCnWFEX4kCWrjEnCZYwgiVFDYUm1qQukqtaJL2SaWs2dSrG3WoU3owZWmNB3TcdMwkkuPxJDtxdQjz9av",
  "key19": "2WmS9Mc5gwS2sQvUBTCWnEB4o5KpqXaSbUzFnvQhnEQKyA5vex2Kiay21PD57Xf25JLbTYqpVUb9c1bmq5trf9zK",
  "key20": "4MEv6vU6xT5qfVMWwvbKyPqJr4u2LUEDuCpHHLeaqkpCZVp56Ys4KFQgGovBSk2ikh5DyzuLdEFiECkSKw27yG5b",
  "key21": "269tVPUGuwKBKQ7YCzEpQBmZeoADhgP7QL5cgw7yDdEqPF3T8tHL77CP3X3Q7sqQmEQhYYX5jbudP2jFLjfz97nG",
  "key22": "4i1Pp9TqqeH7qYESZJao46j56Foo5wni94xnYcbvmaceZJmJZswYGeZmuVUw1wqQSz3CMSEjVE1QVAj4kjNmg7aA",
  "key23": "BydEgsaGZNUgm8Ka1fYMpDz4GGA6Rco7G8GzuVRQ8tzJy8ZZ2gkNPqFTerLio4DHK5bUVC4aRipWba9H36MT8Wu",
  "key24": "3HEc19s7KCXfxbWA4zTv2Lw7PDEwdniQLBKG6P8HAXMS6kks5NNQmeqgVZVJLCkyx2KYjhcu65Z7QQkdzxJ8pK4o",
  "key25": "3u3otZ6kFqxkTDCFr8dSX2YJqQzb4jTF9rsqcseRVRHnFJsigFkTyXuFhHjAg1mn5hjinKQjD2akZNYqZubbP8ey",
  "key26": "4yP5oFwdEHnXSB2w5GG41jNbaEkELnXcsTvgfmCTgncr6kUWSYQbF7BGFa2Lr5U3qmbnyBsGjWDs54hShsfMetPu",
  "key27": "2U7n8RgK542L9HyULQsYRWaKLT4mNPY29HozWuQt1N2Y63z8PgdDTd9ir5pfp5nCbWKHsHfxauPnQiEw5u4MYY7d",
  "key28": "5veR2C32AKN3WYjrxACLDmyJNpyQ7qP3NHaL29jX1ssqvGWVpa1CXLkc6AmHTMkuCFmD9iLtgBozBJuuSZ4x9fmg",
  "key29": "2mDAKuBZWzngUcbFQpVupjf2zbwYUhGSm2oheGRCcAL4JeWuW34m7UNdkbb2pPj32P3FT6P24SmEtPwNQj1TL2jF"
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
