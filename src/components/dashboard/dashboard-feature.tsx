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
    "3t7Ckxb2vs9CMkaXJcRXiJBPQGiVmzMW7EmLmHj3DVaojventy6h3yiTdvM24QFPupQwywFhyD6uGiFtdgvmNknN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NfpceGVTmY8kaSSGcWZjGr7XVV2gF4VuU6q3z1sXCQNkbysHg6wRcHXqVeNeDPEPfspLFESyQE6uMWCPfw8kbpH",
  "key1": "3Kk7JtDWgJSJrTdLXcXuAmKD2DvhjTxF5Ntj9XPEesLzEU7z2hniUTpkNpypp68w268FR56tGYpJr3nv2zU28ryH",
  "key2": "4GPs9s3j1pg2czVkHR5EoazFVHLZuwkNgV8JjiziUsQP1MiESo7VaQ6JM29nc7rBbSVp2MsCNFZAzW7gfe3Y9LU",
  "key3": "2w8ekSQ36TS5LddyHzZ7mP2DFdWuSzonNymAdF915sZZL98QXVim6D3Vm4yhRFEgtJmZDae4RWb6sKuAp4EPyKze",
  "key4": "4YkiUYCNawAk3VmCVLZBKXPniZyaFFiRUaYwHv2UGThqQTQcTTj9DWQ4oH6CFKGnVJ9HJx6k1NTB9MFBGARWxmnw",
  "key5": "56MtePG12YbVvsrr9CU9cWLWmsdG7MK4fA5j8VJuzu5dKN5Vr9CSWiArne4KdabX8Ju7BAfXbdGezmh6Do927WXS",
  "key6": "3zhzpeGt8FM4y8fQuAVvDyTjwBTRFkVxXcV65vRH7XcmaoAk39KnhMuBEQb9ox3RGjuWjJYacw6XbDvsgauipQWb",
  "key7": "5UXNhkFrNaFJEmhSdjQxXuSGQnUTA47dJx3qVK5B1TGtJr8akTh8ELFDeVd57LpkZYWVkWAb6WF7K21dJ2EGSvM5",
  "key8": "5f5dYaCF3kGBM4iNb1cEurAssPtfTtXfcZkwnMUmbNn61222CWufKrUrFpdpyKfPAbdCB1AkWDsx33bQNxRdfqVe",
  "key9": "rspXXwBtmWXh6ehYUsF1zWXdTvefVv9QHfrm5ZGeEqE7UKfYJzdBxet529dXXaSNPGSuLiWbUMPXRXScgePP6D3",
  "key10": "2NsgP4CWrFVzokeXT34pp45JP5stHpsmYcX3PQ6nvGwMmSydqBkryivSrTYzibT6LBut2QLMSFCEvGyE1UPSp8YJ",
  "key11": "4HuBDqzVKAZqPrQrUXLBbwTDAHuf1w5W9nRxtNTbeY4Ggj7gop7f1a9v6TJ2gjA5wm2QiCzEMMKj7KC7cguM2bFU",
  "key12": "nTwDGywW4xJ5oW8cTv7KQiWdaJHz7DMcwMJxEL57x85rW7vpcKaM4MBbBkc8JSMT2K61Hg4F3te1JS2ZNr9BajB",
  "key13": "4ny3aDUUtSEoF3Bpq82HtnQsTNZxb9oH4AMPNtWkwyX4Xj4rUnsWeCK5mbCxAAyT6NZZRPBHaGTkb154jLaWKcLw",
  "key14": "4wYUtiNgXRR2M2fWtwWpB1gDSBF7oneJQozGKci8uhFje6kEqf3JTtCfWC3urH5GoZcsCZDagRrswmpw1R5VVGSL",
  "key15": "4hdeLLuehL1YkanWD5ZHNaE9zSemtoXBhHUrsenkmu1yBuzrrZSJyH5TWfC1Nw1UAmo7jJWhBvokq3EMVaN4KhwG",
  "key16": "3S7CvNiuwCTqtt33rPiFPPecZoycuvDKyzGbGWCNfnjgpHtg23Q1mJfgz1xE3jm9HNyhK6sUZCiK6oq6wMpbg45u",
  "key17": "UbPo1NTtvNnH8gCBQXUK6x2jaiitAnKBgbGfzs2iorA4dueZ2p2gA5uqwH3kKmdPMxnhGPp4kVRWvuTZv1JoaBF",
  "key18": "23hm2H5PoTBzXwUcH6kLMdZfLMupKXszWT9UGu6SMjXmuURZvCbLqKqDjoprszyFUh1ryFSSJ5tstBcAi5WcWE8L",
  "key19": "4BEZ9d3jTuAWCxMRHPXC8WisU9XYBH6a3f3d7uxuDvK12bUztt7UrJ9HYK2EgpySXEMgWUfTBBVzVcGDxVkXgAtm",
  "key20": "4iU7VSUiTe551UwSb28R7rYWjeGkpvkpgDKS5AZ99sAH7XMrYXk1Ku14yMXVEUGxizBYZTLgFdU7odgC3JbNXrnD",
  "key21": "3TeUiRhiYjephGh1N8zgQc6VCu9nvxzNvxgCp6fCJ6zsN7H9bZRnw5swyp2CrLKvXxr3dmJiXnN57GXf1sEeCRPj",
  "key22": "2ksaELwm6cBBtZRjfCD8Go2V3LymzmuQATpBfmwRAQVe5rHFtcTK5e1ALNqWnB1BCs2Qk78kcfcCTzRD3kP99JQb",
  "key23": "y8uWbhY5pVyN1AAnXUEij3AY9rU6DaSAoVKB747ikrftcsLcULxMpZggX1oph6cJgtpgCEDbnLdbDirgoMwmEjg",
  "key24": "A5PCvXQoD5YqW4qLU6pjzRsbjv13EZwEyU84koFxDKbRW2XgwqE5SvWXV9bXY239xFeczp2s2rvzuNo4qJ1rZUa",
  "key25": "2S9nipgaQxtM7qdh2n9peGayTMhrU1aNFfonMJ9wpvaDtUHCd4xqFbnXXVb3pn4KzfEARgB5X5P1pDCLifFDruwP",
  "key26": "K6z4jaq6zZmnCtpz4pEmXcGb1ig1QE2WkEwHVcbEESfA9QMRssTyUUz8jkVHLcDVsw9t7swpxyS7whAoRuC6Yi1",
  "key27": "2FaQ5RYFib1F4vXRoPbGkj7xmFATJScoaJRFdq5e2BWU8AwfN3ySWeZ2nnkpj8KEqvLvhEJBvc3gZ8yQUf48sWmi",
  "key28": "4qMWuGyK6iWvZTnEnDabb1F2nRjw8wajhRS2UsxxuqBRr75YgZ1vzbu65gR1dnsLQV1Ai9h5JoTA8hiECaBia6s4",
  "key29": "5vhwnHqGne23ZYsDMWzkrFbTP8DQofrM19ZR94H47ynHnmCAUBUWBS1QYN18PiVh87JchtFedEoS5MaFAE1MDiEV",
  "key30": "2xEkoQ3fBtVt16UQPMfVjYKdA6eVW1aMeWFeSs1TzjcghVfrBzeZvegPuPRJoNZUrX6sbA6xrAxTay7noaYeKx22",
  "key31": "414rmVp5iGgh4uEJHkRTQAD92TWgNuTwRf7FdwruRbbpRtWZZpAgsnjtykLoWTJJULGjEZ81F1vHcQfuPEVeF48m"
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
