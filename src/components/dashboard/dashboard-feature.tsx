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
    "5brMgjFtpsghXTA6p9A1uUcsvctVH49eL4FggL73ffcAt1gDdX8ngBKFSpy7z8hbNwMqVj7LeF6UeMURZFyZqNMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TWT1xmYiSqwjhGopuBqpbD7gdxPzgcixxSdnZY49DutAw6xgnxR5uffBt3nx5aJs2ZanYSbWVGeop9TDXPWMvtr",
  "key1": "5W1VqgvJdozHSLqCsgnR7u64HAgHs4bGmU8SM9o6Z9XmMq8YcC6ME3AUc1m4BmJqwn5g5tB1VEDyTXQMhqEnW3WF",
  "key2": "35HAc9yGaa7hGFTGWjmQHzUi639xXuyhdpnd9kxapQ3npYa8kj87rBUPbipHQ7m8K9LmqbCcU91ofYUqSo6CoBeD",
  "key3": "3jAaYqr7cAbaDMoDaNxpNdBF9n6uq5rE37hvSVfUBRGM6eXbWhuhPn6esCqqEvN6F1XypAkT2DTn3yPj6zBwF8ng",
  "key4": "2vCSYNAmLmKofVdFDqnpCqwY29ENka4UZuNDnbVWCjapWVsHee4o6bAvymXBppdxjoEQUkhVS8e1axZJF6g5zBCJ",
  "key5": "6wG7uMCMr2oCYUK78TfhwPk5P6o1SHyrMjChsuGVD2PQES5nQvAtB9hwTdLdyfA79DNace2bqxncV6k3EKAuu9r",
  "key6": "3Gmz8nDY3StsyEp3mEeZeMt8GUyCm3bCbA49rSXD63NGqGCxbEpG6vBjgnoYN34irg1CHCBvKW6RtNrKsG6sQ5V9",
  "key7": "4H8LFPTCfjpt7v4ZCtCkPZ8j8afd1ShmAo5hB5rh1wfxTjTRLg41YR1cjhu4NmTFypbNnT1Djotx3eQtjSE2f95N",
  "key8": "2cSRKF2cwnqFh5AWVrtL8CWvRdnz5FeBRGt5hCUhQYxbrYCJgfLBAkYjbMdvGaCizYiphL1Bq5t55a2CWJy3xGLU",
  "key9": "3mxomHoGRJGG6mt1K2hEB9D6sPTPBL7TJN1qAdaLRfrE3vn2h7exY7MwyCoTVstywTQKQ3KKUcgXjwPrG28h617f",
  "key10": "5SEASX3XouYapdJqpCVCx3V1NFB55Ct3PKqnnkAQwbmeGVxjk5QaHuSfeF7Hi5AknUYQZjQVo1tcnchQCwXCQXQk",
  "key11": "4NisCeemBqXP8TPGqdGj5ZAMEEmwB8E3kz7tZsVsFqq8Xn2MWbjyhApoj3AZaFoYZVP6Lp54TwJXwXTWqf1V4oGo",
  "key12": "4BccnrY8ALf9DGG1JssMxqqNF1tssAe9GTu3PQumChSpc53XvL7hw5gxnv5uTYnDSs2RsVS5EzV5QMmoWqja39U6",
  "key13": "2SnnN7RxKHRUdJnQAf1hYrrvsc4ek6QedcNh7HLZwuiqptzjC9y7BVMnioQ4bU3P1NYDiNaJP1poYK926sja1PTn",
  "key14": "4bX2K4jW4apVAy3zVpciyVkaa1TgHS566XeyiSwxu9oP59RNsuBzui2eux8ba1zZLFdH4rHkkrU5tuRP5AavkbKT",
  "key15": "4dghTyqqtV3cNPU942ZWk9Fu9sKRXdghRnLbagymuCfhmGSZb5pdpvfEb7FSoi4yD2V6FYgD3cJgz3zovEoG4dis",
  "key16": "3WNqXDSBu1twkzY7mgdotiG1DNsk93g6ZLLHKLwkzjsLr4HY9rYyz4yFPLnbjRqTYkVgCWpmWgWU1Jw7andFUZJc",
  "key17": "21XqrMmX7RyReTHwrQHm7GpuURtzmGUqimV6QZbgiyrdnFSbgCefw68hXJDGLRkJhsSMda4Ec9qmD9wGq4tDnEmm",
  "key18": "3mW2fTZCCNXSY3jPpxBAjMuHvoNxHyAsEtY86723Quxum8ZKgtcwzedmGLHAAUTM2t6svsw8QjDWxMcuZqgpYT8",
  "key19": "4dnrBQ62JB3K2pegJJkNCSkYUEQvEHcE3EFAjwDGnokB2yDk1hXXfyT22Ms6Ag3PjFDjfCuP6zT8NTSkRsiJBtM3",
  "key20": "2tWeuxHdors19nGxrmux4DtUzRxPC4Jmkk7CbSKCNhSJaTa7SgdLkvgZB3mYGsCS4SQE2T8mE83ox2bdUv5LC8Et",
  "key21": "31nNSaBhzFM22nUdhGv3NUsBoteDMJKEYg95XaK4h2FWKjBLmNcZEVs9akaftZsF1QGZBF1ZFCGM3y2BxQheEBxe",
  "key22": "By4aLoBt98YxRuryJHLzECZZdEhKCRdGYWj9AYKjEzFQ8xNgAiMoE5Rj9f6pJKosZRt8EJ34aDPPy92eeyfnsqX",
  "key23": "2WUTyefKRKgfqt9wcf2ySCh2ZQDFG9gwkT1ZyX8pu3Utam1dAv8hcAd43NVwSewRAVLLSgZ4EW6DNLaeyLNyUXkH",
  "key24": "65W3WhBQhYquWt4kRE297MUste3hgQNsh3X9K2ybfZfv1DvDe1EYbzesjZQeoQ6EoWtMwmXUhyBAnwHkw7vKFDPA",
  "key25": "4s8WvMqPG96uqWmev2aeeTXFxLuZziJamoBfgKHJAEXnHWbb5YtKnsybWHrSkHp68icDh6PefR9ob1y6P9nwbHkA",
  "key26": "aEKgMYnzBxDdBTB9f9eiQ1ndKDXyHSQxvRgj7N6KFGEP9wnW7LEJeUWWNXa7haatwbHqUqU2aJsXqyDJfgjBuUy",
  "key27": "4HCgb2EUBHjiQP9gV3YDqR6bXiyTqftxTPYHChfvWgNt2vHt6vQKrpXrYWDrT1Ncqana8RJiVvCgPgg4JveVSLt5",
  "key28": "3RbqAnHjEqGwShMMNW9awtF1NSHFASZ2wVKc9PffCJ9Wk4tbkMEHGonA2fcNXGiYEnR2tKkvwgcoWrC3eNUMfH1f"
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
