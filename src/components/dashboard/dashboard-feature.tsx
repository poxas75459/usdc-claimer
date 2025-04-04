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
    "vNKMjg5azcf5XNTX8yAbjUjerpMKy76YXS7i9RhqPhqCdDg8U9UK9McPnCP3DJoX9uyDabnyagrrtAFHrbuHKCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59YaJSsReSFx3fgQ7wyH4AiwyJCRP4fbyTMqapUFwEWBqDdKWaKfycuUF86HdJcZMZHxRe8qDEeEDW9syJknRvFC",
  "key1": "UDLMtJ1w5KVqQHk6cxXh6XFnB8cnE99iMrPH8rcsRvovWosDHe4UrQ4zTuc36deAGL1W2psfL4jZZw2xocua3PF",
  "key2": "43iMikpfdwVCCDQwpq21WKkJTL6KjtvBrniC3CZPBB4i3hQfvEC8hwZkPKRZQhPopwkJ3yZVdpJ23GGwQDxe4gQd",
  "key3": "3JSsvcoLDjMJZZqACwXFbVbnfg2BqkdvS3zZwXo67WCrph8DX56UiW32XDLQMChHGJ2aUrS5a7QyfWY3B5vgURt7",
  "key4": "4cVkeVAoS8txjGNQxw5PS3ZbG9SeJ6ukwLidXX6YvuALRtgXMAXwKhvoABNp2FZNewbLfKT7uPdWDq1fQtkwdw3q",
  "key5": "Gbq8kSabhQBYzn3DoAXGNdqMSnE1zHCLsgcCaceUFcZvchaqoxZ1TbUWzCVrZzLgNQ5jSJijfV2sdU5vtyPHgMr",
  "key6": "4k3gcCakUAi4BYcr6bPgGaE7PDZXUoFf7dLxoX8Vw9ZgonU2ZyBwd9JZ77aEJTb4MFC1b1s2mqnPPKnveiCQRWxX",
  "key7": "39BZFkZGXQUVXUtcrnfsbSSzgwFj8WqP32acTjoPCn2NrJoiWBBkqKJDx5jYVNnzioX3n2Ladm1k5XKFhtYN11rN",
  "key8": "5WRsPV5Gj2X8WgusU8EoHPhszWGeFWQDSm8UrZgDBMMG2Mbe9a4GupVbzt58DMRgWJqK6bmzJ1HSpXB4tidyuij9",
  "key9": "4omkxBgNMEbTSt9UBPaKioS4ZRPJE4RpHM146KMdFNNDosorvbNBrhtnKWRTNQAufMg6a6yZpCVyvYij1yAYj1WS",
  "key10": "37DF8LLZM7pXz1hYDV42v3q3QHWiibYhMDBMWHSRKqPNDFJY34qABvwZxhfnkGdszu4imUuRxBrvUEjdtV9ZKLmX",
  "key11": "31aRhpnrWhvY4xs9pcf264oadqQtBPFQ2par6FrnTN8R3p4YYQ2YktmYdgxESuyXP9MJ1raVd9GErqFnG7spwfNo",
  "key12": "4XpcyWj1AWJyuZpnguRUAswPzdZACuKaE6McKeb7kc6D9SXsp982DykoAn5SCjvHneg77YEvkH5e2mKT7Be8Nv2z",
  "key13": "4JNF4ViqQxvPfsXtEBNf1YW4PWvXgeHi6yeqhpEt4cRxPmuarNSMMWDYhQPV4edNH6r1fcxAneGbDQcim5KGpBEe",
  "key14": "6RNY2GFQgnCNYMcXY34rCm25N2bQLf9ytWMw4j6poK9K5XkfGcLP8x8BrnrNgCKDngiM7WtV9mwbT41cqFqvgbY",
  "key15": "62yaUUNSJgZ15tGu2TqjKo1PfZEfUmicHUXbT13RDSnPxTVTqDziHqoAq2pABegM2tEBfps2ryhYMp26eeMwXbDS",
  "key16": "2BQkVxrjZNnMZMNjMDdytbZTv4jHVHtF1Fg7fwyQVXKG8dLuM7Fp8hetNHSNfXwRJ22ihBaygCW42NijB2E97RaM",
  "key17": "4QWfCiVG4u9r7QpBRugmT6crvmuqTpdFsMq5rXRNHgyPptcEptxdvwnfAYqrYY1qc5wZChbMPKgXjSckDcHPVn7",
  "key18": "NQAxg3BS4z9DY5YduwrbnCiicDJHJrJ3vuxfoX7c2CtLpj1ke8eyKdUC8zqSZby6zM6HWeH2y3w3RxyajGrzHL5",
  "key19": "4aSZzvnwH3VwxzvsngAwXcdL3MghsfMtaxPw5qHgnm6Na9tRDAs66iZVwm2ZXvzrLdZLeyvca3tokwSM9HPvZd92",
  "key20": "3Az6wbj74SqpCt2GvsTKYuStMof5iEHn1gAnxEnD5x6w8cukwvKD84T6Y9vHk4Vtx8cTDB1zQ831UCzJUkMBwqFT",
  "key21": "5NXHPqJrHQfGxSMFEpmPqHnRThLn2jDYmhTxszfPzgBVmAEMeFvGhaxY8D18qb8kUQrYrrbpheJcGaQ7gKPe3oxe",
  "key22": "48iFNmtp6hiTE944BMGwuXM2i482fiwUECSf3oQRH7LjgtKmUKCmWy1XsAhCD6fvq8crPf1aXhg8Dvxa2FX6Cq5G",
  "key23": "f9HeHcD5XvHbcCVo9qp8vq9Z9pmwMoi3AsFXeof1hJ8YTXaZXCiGKqygGhzLdYUBjwdA5gnNdP8j7JSbS61DvXS",
  "key24": "4SpYRjemeAvjFjctCeyrmtRmHe84fvaVtfaf8L9hL5r8QhHw85vTAqBcsjwV7jkwbFhPWiANJWbEmVvCk5d8LfCv",
  "key25": "3ZACuW8Y184358wv2hPCu4bX68rB5QAW4nZJk8CmxmvfKBq5onA6qzDJxD4WVJr8vqochj6nEPUrZKJLqT6qpCAV",
  "key26": "3WYsDhDnnxHPPsAJdsv9HkZRLLQWzTNKedxokN5HFMfjzc6yCtppkwKXNWCh232QnuPfwEJuuNmsrQNeaF3Pcj4L"
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
