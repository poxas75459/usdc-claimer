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
    "4kAmV7ueYNwjoEuEWcqdFknATiiRQmuutXwXXiZPDDHZeAd2WW1oY9Y6NihDS9dbZvok9hhxDXucPdhJGb9HPbwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579g9oUf6mAwGcyLZLmiAmdgCZK8mBpph6c3vTLGTK8FcNtQ7caAs6Bsk9mnv2qbsJHbke9zkWnmJYitRM3LSrDD",
  "key1": "5Fgu39T6G9te8vhLY6HuBXdeiggwbZ9i6ZknG2YjE5UXbFWFHcrWX9NDHj26yATKgtPnziFFMZ4YKxFo3XHemUP2",
  "key2": "qD5wCyJaKWzmy1fhSwF1f4DwVMkKgu63C3LDZRRdt6T5Wc6uYWfoB9md8jaPTMLvuenZUzThCCffipQpRoYzFas",
  "key3": "2DWvzzWKM4Dj1UdkLPftpsP7n39aQpTxnTdb4XoMormp1V1eb83bu8wyRbo4tJzSm51Lux5d84Mg8VVDACJhxRhu",
  "key4": "35PMMx7rW9u6WaLKajBxZJyi6mNfFFYMH2eaJJ55dDUqRH62ENetPfo4cAxiBu2eC3gJBWuNSxoo5MXwrKxDvic9",
  "key5": "22CGe2gfiPF2EN9jXfA2oMFgknxyCywwSi9ympEKxmTW6kYQ1F6fZTa77FXaWpJHFdb6p7JxUrYpcQeyHAuJzcpP",
  "key6": "CVyDieSkm3UTdijVm7EGXfHt158E9Ht4SGFrZvhTAMuTLbpw7VMZZQVWQaatdWaewcv6rUJsekJPZbNFyBy3sn4",
  "key7": "3cPFh9FEH2EVTEgvbRvxdo4t6zTAU8e1ZWz1fMj7yLDjjpvEmN1tfgygqjaqGADchGvusPD1hvNxV2YAyjWWPYaa",
  "key8": "5ajwruHJ9dBbFP1KQKXoLUzN5PPvJ9Lo9VyfR5TX5Q6YgLi1roKvnxo4K2g7P1edHHKVaGyJZEcPuUDU5C9TyZSS",
  "key9": "58EjLLs4zqtE8cQutC7THhrn1gXgevquUoDTWaCg7bj1qZx76PqYPpCNT7dDdicsaWYHJfvpActNxRa1Z8sZDL1j",
  "key10": "3yhii5wJF7B4zMyzoUDEbJuLZdzDk2fzWte73Lo9Zo4mRcpUUv2BzJbJGncCCBhePoCXba5qzP8Y83ViyGvJYGZC",
  "key11": "615sFYXw6q8n7iTv7qTey1KC9cwUpTTLYaEfkZgxrszRnLz6kpNsf4bxvPXVeytqpscNMSLnxmH8aXFDbquoAEPf",
  "key12": "1fA39M37xGicmyFzd5huaFn5pr2y6hYsjiw9EabyRcX39j2Lmca2dZQ4J8nRZdT3Xtjjwm4UyzwkCfvE9nmmVs2",
  "key13": "2yUHdG2mRRS1mwU3jerfnavcCVck2uAkTRZdnNKG5dEqck1jNXKBuMn38q2vXBMwshZpiJEWreGqkohok2wQ19po",
  "key14": "5qzvps8vxw9mxy1kDRJM11GHqsqQ5swQiYruc6qRgqq9c4epiwvPbkPRtcg3TsjYwzhJorAeWfo5aKzxfuTzyMn2",
  "key15": "2kmiZBekrww5JpjiYqKgocUya6DAa4E3J3UXbuApu6SLKtv8R9kYzDAw6Wj3LCoXaaRcWfV5y54masBh2CtKJYe5",
  "key16": "2ckRbbW5pZoEHRXeSf1x9GVvrv9xgqoNfG6CnWRJnfdqrJUgzrcHFNznLCZwBpyZcqWLb5ZJQatkzxhN3uxbw2go",
  "key17": "49G4eG97hsyPih9urEWDKvVLLmbXtkPXfb5zazm9Zjy4HZXcxnQgMUybUauoc35UoYnQukVs4C7NMjd88oqeKfJQ",
  "key18": "59invutADA8xyUjXWDjPwJmgq5JFU7inQUv6jePKMek4HpL1PdcCKrzQVWJpb7zt9hS6peLRGZWmueFxJimuKa3R",
  "key19": "5Y1qCL6MdWnW8yLR7onyXbmMQoCTRRypi22mvY1orXrh6iCVP6pusZD2KQJTmXnPQbtma1LCiHJRSS6KdZTKbpb8",
  "key20": "k3kStB1ewcFRzWeFhHsCaBNWHCnGiyZoekrkowAMxciuStwZcRr2XZM9ciAX52xhZXiPZQ32L7WKViMiDFod5hD",
  "key21": "LrXN3cQXN52zsfmjni2cjtt6WRP3eyLD9GpFdWH2sXKrbYQGCpFuCVpFR6xTjvihhtjEUZVq7f2AuSEpPE8j8BN",
  "key22": "3tJigWcV32m9Ze6cQwSdi5V62Zc3t27BWnSJGLEU5Ep6Q5FWA1yfs7B2yGh5wREQdESQ4eP4v55nzKZQwyrsLtJD",
  "key23": "66tzP7nP7iN1SizSxwaeNUyZvwyau8nzqCHwi7o6CWvwQKRoLnbT55G945s21xYh2uQs4RwkEXkiWhb11Ww35VjD",
  "key24": "4RaS929ZNzMchiYvGxwhYQEdFYkVNr48bjbctWqzFsFnceL12Txwhxg1ndZ92VPrhv3Dt5j9CjWqZJKbEUDKYxST",
  "key25": "5DFxFpYiFbby2iscZn6yPEFmUMddjARnwQa2fZPrb9RE9H31rMhfn3WXsUbUTaHBP1ci8hLXZjv3oyCqCQqySa6P",
  "key26": "4k1sPurttRZooAgLSSFbaPy4DUFVQWa3G4RoArNd6pAFRoU2jvN9Mf2h7PiDVuLUHZD6NJ6fjyMMCY6jL4yu5o9u",
  "key27": "5X9c13ZViKaTE5rmEWEFmE7vR4tWaJyAZMyRSfDwJ7pTpxZTBXi5FcUrtmrvj2r1ALzMN2LXTRPxRcmRrPbnfNEu",
  "key28": "3s1UnqS9fGvaQZKjtjwEx9t6wzjtd9sfFkcJVoM65Xjwc8qBk35MwbKQ97hcsJgJEMY3KAc2TUoU7pTJWGfioYxE",
  "key29": "2WMDdE66yY5pHvkGGygsQBB26o6gKwMyjCqWQSqvn6kid4LnSYSb1NJBPVLWYN2PYinXTFey2i7K2NmDHVKwPZxi",
  "key30": "2wC26hMTdFCkwFUkojSKdGSVbcfRCjrK6NmD6naWEyQx4zB2ePKCACcnKPK4BpK9Grm66ymbYN4EAva71E5kK8aY",
  "key31": "2nK1cv4dqtYmH8Eryn84ynRvQXhXWRbWtaUbMpLxGa1kwkQn4PY5ybBSqy9rLCvKoGu6uG8NUVwVmHGnQjQUXxCa",
  "key32": "2n3Km8ppcUvUMNvZRg3RBeqXiBMLYTccWVcok988QBxV2qrqV8eu9tDxHvFjw8sLp9J9rqUM9VNxiiPm1NHZmU9U",
  "key33": "2wBxwWmkdmVTMXsirGTdJuqtn3hfQepgSEwEgDDiGGgy8K3uasFs8x5Wm88jUjDgWA3EkrK8E2Y48TTnbiZbQHes",
  "key34": "3UqvwGWyNpajVBxpDm2C2hTh2ZzzAbStPamfZUnCA7CQsJciYGa3A7hyopHwM2Z6KeZ6CxFCxLCmXyNsSpApJKqt",
  "key35": "5obyPvshJrcTE7YZCN1Hneuj8JQLsMvUiZ4mBkNP3B1dEmW8FwZMrdV9cat9TeMXnnJoMJjuwMCSkoNRxBUrFxwM",
  "key36": "42D1UA61nYZCoFsSEZ32SLZoxA6V8HQ4aMxpzvVjRuqYhmyLTaDARDbURttKagmeRFyK4WnZewLmTQeU18mQ8T5w",
  "key37": "PqiC5LRhPTKnmWST3DwoTwM19f789B9vJpazcE3VQmdzoAC8gsDRBefNxBhk8494ac9m5VyD3a4y35ee2SYd86K"
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
