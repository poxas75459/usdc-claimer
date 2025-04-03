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
    "7k5Ybm4fM9PCm4aYh1PYE2MYUk1E79CgAbmJuH7Md6VFY1owrcue65miWrNU7T2KNzz2oANbF85jnAphQjiyPUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UqkhnzRLsJhdUjRjChY3FuQFZENnUAg5xAp9AsYX7YJfdd4R9SKLVxom1ZhxWYhd4E3dY4TREWDeLijdWyFzG82",
  "key1": "5UnasoRjNUKaByUdkCmx35cEeuMAebCXhRjHCGJb7o2XHuSw4RvHFzHZYWmAEpzagH6kzoRYp5TqXfE1zTmPk2oP",
  "key2": "3RFDpqM8cgEya4Hxp3fRkp8Pu5WRwBJsG9NSbkZ74nBTr1355GVVE7uZBYoRU3DfRNWXjLLG6rJJgtKWuKK7D6R9",
  "key3": "2L1vyXZHQFctzKqUdz1RAjksUs5jbuPkHnaVjis25DNWfvPEDWqhK4D4Kvy2VXHyweLfjfXKhZFTTehW1gHuuA9o",
  "key4": "3GXvJi34yE8fKEqaq4EWQPXocuv5menDKM5EccYjVqv9AepyzscH7SC63GiySyubJDQ7fd16bJGPeDm837tXcaef",
  "key5": "27ozUA6xZtYshZhjJQbt965yfhMt48dCfxYxjDBbHp9oy94H8emfbT7inbY1LybzwG64xFvs14GX7tTPrSdd8BvG",
  "key6": "4X1Gd6bUc9P3osxE1c8DdsVYDPKshv3qpTKZT2CWXsCtxrNUGY5Y4UFUXdG4unCDunzgvLPnZWCWqG6n3VEs8yke",
  "key7": "GJbUuhmsyYBgikuqewRP1E8fRsXbZeHtSaiuksNgVrYegWJY9MiUoqSWw44EmUjR4M1ZmwqWdcFsQsMprxLi89j",
  "key8": "3SH7whGnLfdGZQzJyj2g4CusVfaLrMFXw56uwTveRixaQqpAWZpS9quymQS8ZuVfYewdBYqExJinVQfP6aQN2cb3",
  "key9": "2fNJ2WsrrSfy1i5cvhyQ7WWkzJUx1suv2LY3Dob6cq2YJv3pCB2CPmMwmfAc3dPPkBRm4KbkJXN35JRnR1F9QEnY",
  "key10": "58rPA6tGzwo4QHqyjvQp6g7Xt9thNtJJtkwhGo9GsDzfFZEWTA3Hn8ECwNsriRYQSeLSMJmLFFjEjyeen5Ettsse",
  "key11": "5CmKVLvU5NJMTkHQr4wQZciDbsBbZWjSKALUvgfeeva6iQsvNRBszjHecq6bMoFsNrqsGDfJZESYJ4rXckXhp34F",
  "key12": "2ZTLxTgGTDAAK161guiyxvv5M2PffKPeUn6LWauVzw6x1S8JDdW9fRUzyYd71758TVpFTLx8Z5g58ptoMrfirES6",
  "key13": "4A5DtMHzKxLYVRgNVHtmkmT8oVFCoGaGg8Rsi4bEoPaJvGNGRbYX5WZdAM8tyip5mEFG58inXWRqmzPnokceU892",
  "key14": "5GrhAE91KG9QiASH5RTKsqWZeDKEbxPsvBviXJWhfoNULbYCEiVCn68yYGuLgUnf9unR6LzKN6kAZRooHcyENiVz",
  "key15": "32zL188A738SRnmGNA3myAgAbsYHf46z6GFG5hoybaJCskFAnnKemWtvxksyqVbcfMVLXphdqCf4aiTgguFiT11A",
  "key16": "3FkfuGNoNNcTiS7ywBDmH4fj1PnwjLnQfcW1rLbne3TLoZhuoYucQEgLfmPbVVbB1YjKiNow2uc7fMUM5MbLmA22",
  "key17": "3ApN5ywCLjfbyc3kvBgLzWdLoH1v7Qp2tg2CHXuCbX1wWHKXmxN6LfWSkkXWywNdKJAgwBd9wCMBKVpqQirKsqMA",
  "key18": "4UEZhA3Dk7VXqcSVTroximgGHP3hfSQ4ZTuTKkC7gfFqfvMbWtx1jh3eUsmVfR2u6B3rD38ui5PQzjykxa6RzJfW",
  "key19": "31oEdKHYFcyEFBGGrQu25AevyZFVwtrH5wyv9BmQinKHCwCyfZ5So97Eae7Ey8Z53ozmbDaKp7KdTyrdUtzFuyS8",
  "key20": "3KTgqv1bA8oqGWXgqZd9tVUYKzYBZPGiy664W41MqAgCHGrNEtDMojrFVXTEAKBY1VcWWbPVrxHwnfEB2eeyhh6K",
  "key21": "66LQPVgF1ZoPvmuchSv2tuwgwJnfUj818RaF66ZGtkNUxCUmfgoFJPQpd1QFDurmNkaVdkznDDWx5Ybwn1Uwzkdq",
  "key22": "k2ChMT8TF67tGz8u65in9Ec8Wt3oSt75GFiCm4RbLD2RjA9WYzCdowoYoSKmiy7qmna217VMpinUw4MCyLyE4ei",
  "key23": "EWHYdDxnHaAdtYbnTpWKK4JBimAd8RqPn6LxzpqELNe1ED1Qbe4FMzEcCHEfPp3jZ7RqVy5z1VMd64zs2dgumfS",
  "key24": "37RhtbwTzk847VPJ7xkTu6JQjLQi4ziVpWoVzDoHBsW1kC9PFZRTzmt4QPkw1Pcy6GpYpJZq5Fh3m6pvBgnNvHu2",
  "key25": "5EcNGrrhwVRNFrQYPm2Xyinrrm2sTYwyvcsLvg2FTqpsAdyeJVggH811LSbCdg6Rc6mtNSijAgcpt3MpmFrxPy83",
  "key26": "3RMpqpFu1nsf8SYgPMpuudbqLT4vhnrXsWipDKtzeTahpFquwJKXpRjXWreopVVGNmXib6wFhJD1tSsHydnC3duT",
  "key27": "3t7rdrJtE7bRLmyZH2k5Y1heBugEjVBPZD6t2MPHYnuvZJRnJfvgNE71hrDdzt8kFkr63nd5oPTbKsXrbLve8Tnq",
  "key28": "5rwqiWaQRbbDxcCYrhvKhRuUMEP1hg8VyhWJo1LQF3gRyPeeVX2B2T4ZDfRmkj8PWTcPE63f4p4fSQKdgUYVxVjF",
  "key29": "66e9u6YqrTQ3Seur3uzMEqYSn8Y6garNoZCPoNcUNadWXth3Th8XdkGdBCsW3sAsAHgpCiQYZM6BTo3NcE31Gu2a",
  "key30": "3xYc5FyFaV6CPp7ambp215b9mScdgq92NVAqKXMneoWi4jk7UgwDXLdn6wGaPirt8MDW21AMr4zkqVd7HN2boVnV",
  "key31": "4FCs5oMz3roao2MSua3QkZ61DAgkphuCQTVpjugeHJTh4K13bEQbQqKf3AWyYHz8Gx3cnjx3GDo6dCXZQuq1Wfnw",
  "key32": "teT51BCKLWhrPwFpN7FfvVVf4vaeZ8WKpKmDHtPSiMBrRwTurzHVXvC6jsC2CmohunUNC3929ELxBdeV7UPyigh",
  "key33": "2sjdAtKcuGp85kNCAJhmBbFDo2HGLc2GGPcLfeEZQEMEEt5C493YQGXCYYkC8XfMQ5AesRqcjqSw852BTvNz6QRS",
  "key34": "4btmZZfEpf3sJSqzNkRFgTsRg9LsdJcaEtre9BiJhv4mx4TpCmcyZaJERvUVqnN1phhDo6oGKe9RRAa7g9Fei6J4",
  "key35": "2pKJsRAwDxdqT65ALbBMpzYF5WTWDVFiVGgCcdzc41y6aweAuZj8TXtzF3P1yD8hPRHtinPyWjoBjJBnVUowH434",
  "key36": "4t6jDKBCivsLRUTtudt37Jci89snZw9KX9Wj4LTKjb9sQXgLmESd8tToufkTbMFUBVqNrLRZyJKoEJFw8S5XzBWn",
  "key37": "4TCrXe8jESNpko1pDDcbHGz1nLcVf9tD2vCse6KGuBGMtdUUB3Q98xF9t3n78LLHKJfzfeNnXH9pnCbpnxkFgVCK",
  "key38": "3uxq7RabWxPPr7UocznnxUF8nJkLxzqJh5SNTuamVS5zo6XNmyxvWenkXJ3yXrUE13XkXxd4jMvD3uNHFoPymiDd"
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
