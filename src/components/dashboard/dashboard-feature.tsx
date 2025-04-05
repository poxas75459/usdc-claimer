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
    "5xa4aXztge6hZbe7dSbQfmAZUxAhAPHPMq9N9WS5YfdsGsy3dexLDiaNvBPKXrYzbaSvZKTUovppXLspq1czndsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y4rjs9bWpwRGb94B1p5v8CfVWnQcLZwsaZEAbrvQcqarPG1xf3f5gRvFqSKK9RFc1CRHQJVktLE6JpVmEPJJP23",
  "key1": "qZh82s6Luyn1rbiP9XncA6Zao4Ao7WoEKxGA2gcFWsJX5yPJfSY6Tb3PWjcnWk5mP1C6PWuNfMyML8KP1N914yg",
  "key2": "39afckkU355BjCdk7HitAauv3u18dZYtoxxAY88mDxCKZTakwh3UKmSb4owcrQZFyGF4MwbGNTeSAJjQpjMVCydg",
  "key3": "3UWN3E3ubB5bKSU52XoZGYVFXPkiGYzebG7m24wYjrWaWLnGgfQNqtqWHn87Gti11ctmEUU1qpLaGLZv2XdvE9gQ",
  "key4": "2CXbp36Rey8NMp8mxdzxUdHVZgndjZoUqEFmYZGjJS5TBFRbY8ckTU5jKv64du916kr1ZaLiMYh97ewTwbwfiism",
  "key5": "4GxcgFkovj9q3M92jvuzuMewo1hz2EfzGNm9B6FHsj8MQyC5MRxphmj2ceAFboP2F5rQeG3X6agaG8idURypPEuG",
  "key6": "2z5RnPiNDLSD6yrwdp15pKKNDLpJrFkzYovpLz6GUrzMyycqXVeu9g55pNRYqLvSW7BAEtkErKNxnvXQTbMWrvMt",
  "key7": "45cEaX9WPSSXo9bc5qVxNcwztfS9C1MEdUq2RnMfEGoCCqXZDppa2NEaH2nHmBpXbDGHes7aZfVS8YcHFopyZsZr",
  "key8": "3huz9gGfa2R5tdRSUV94BHXKrNGgKxReo9UBurj7BKW57htJFoL2DCYca5TTafbWQjWp6W9sEFdyvHJ8zSXnqq6c",
  "key9": "teHnvYhuDNWNighvqmzd7xG3w6GbuHpSSt9utaapzXMWBus474wjqyENQsKJG3cG8vWXfNCXAtzZKPSTCrULsP5",
  "key10": "sQmJGMFdhG6cKx1pvWp8V58hCeafzzErD3MAKgvocfdD6S7Ri5zMiP6byVgKRX9xMhRaQ6dBrv4msWdEs4mty4D",
  "key11": "3KGSyRz2y1J3Masj43bh1dS5pTvwYUANeKKqHVZokc5gtYU77N5CT987HAYmeXmbcbhfAyCmN6F3GJL1XCchKPCZ",
  "key12": "2SuNAFk6EKvYz6KcVxcTot1pfMwyNJLMfaSuxHp1EqjX5V83UKh2u4pkhA6t1TdztBKuPexMwzfXKHFivR6vNzQU",
  "key13": "Q2jH1se1UPtjHd5wZRB4jHxeW1bHqhUovLhxj3pAW8ZEwXFLLx92ehZ5qfezRctZ96VSY3JR29r9ZH4RqzRGVCf",
  "key14": "4xpcve1MtLB4J161GE8hLMcRqivNHVb2RdDtdYHTKf8wGYUeJBjFb3UqwBDxZWuEzczqJz6hbKHsMc3UXh5Pw6jr",
  "key15": "mdVWkKaCaBbppCqR7jg8cQx5jxUx1s5HLdriB9ziZwzwNp9nkya8GNdEbM62N8Mg6xqrLfMjCUFxfTiLj4w9kDx",
  "key16": "3ACbFEuBJV7b7F3HFGVGEgmBEwfZmwMZufhEyW1BJdSPRpQv1ahtA7j8vpYzwfcpNWuHMEa2Th3HLTLWp7fWpShr",
  "key17": "eWfusbu8AcASJJ1aPa9Bc48nZAeVY28aML8HbW13djK4DsaA8h4voJvJTdHoVS51Q45Rb3ARcibZoCT5DCWg5cc",
  "key18": "4NYQGYYbHXB4QVFLKkDxuykiBVxnjUzkCJzXoiJC8pAJVeqiPvNuWgnYG4xWaYvEvxH8jYSkppDYhTK1Kcut3Qus",
  "key19": "2qyaugfHjj7PEFJSZxyDUT5dvZ5Rvgg2PRZGwHja8hUSmkb6FrSHEsktijauHbhoEFU4VevSLYcKw7UEmkY3FfBg",
  "key20": "3S1akpwHxejMGdx6zuGTBqzsoh5JxPXeeKPHUghnstrJY6R52iryv2X5Z18h3pdY3GiEMsF25XdYeiLE6i5KmPnd",
  "key21": "413th2weyoWzKpyc2Vo2V35zWp8qmAErb4acsE2RrPA5yDpCc6rCKD1BzzoMNBw7KDxfBkdT55BEiaa8uCRAswXi",
  "key22": "3fCcNzW69ULjS7pxWUB9hUyQ1L8uCrMjW8QE1McFF7ywUkXdc4StrPdxwi5RXXbx2sGCsAbXExU2dWJKFnqgemnY",
  "key23": "5oFsohzPW7PVVu9gv7vF8rwVc1dHrBhEbX9Jp7kD7KekXAnnh3ZhjRaQXfZTjBNdkqa9VaUVMTYmrL5CWYkazWbJ",
  "key24": "4eMtE9bMMk4DzyvgXQmQcxopMAuwVsGxTfmn2Pn7jGZr58jbCwWtfsJPEPANSGQbYBuwX857dMZnTahikR9GrxcG",
  "key25": "4kUajjmrgDN9SbTesZzRqxzMdVfszLMxo5XpKZbsCmFJxKcVjzmkS2uze5gwEAvroZTiYDHMJcDXgehW5ACQpVzU",
  "key26": "4EVVJsPonc8GTsTMMatanFMvVfsHC6sfr5obAdxzGnKSMqXsD3FZ2GQ1FLHtzn5ApwHyig4EQUyfjCa47ExDgY1x",
  "key27": "43m6wyXtC11W1pG6jWVvCy5xCLg11xEcYn5ALSGtFnerA2CZ3Mp59rZK81jkHULd3867iQzPVn7fnhwsUb2QnR3m",
  "key28": "5ytUvLJ9bWX48n7RThGyxq5p7v9dmKwjDyu38pEUxyFsHkaJsjPdzEmNn76AFDtBNQM3jCRs7Lt2RUGeyhnU3bzc",
  "key29": "3QwcDsE8RSG8ytjGo4Ms9w1j4Vjg2auqwUaMuZ21uwFzHVU5iNtP7LnuSt6AsQjVZamwxNBBPALCtHQVn4xCQPhw",
  "key30": "2XevCWzusjMn3yFWmwnUWDGuZaMgCxd5EqZh5fUqytynvHioHDiDYGYWQnDn6tk9ghjVQkfPzLujYiRJtXiTG2Qv",
  "key31": "4sa4NiWLG3PQdF3a65KxxvrZcZQGEwGGVZbaMnvBacjNymUUv1EwCtwBoLuYEsdh97psRLAN1JfRKXAfkvZ95B2v",
  "key32": "29M8yz1pcKV2xcVoofyxcRmq6rsoTaZaJozUoFCdHb7rYZ5Q2aaqPfzfLTVNfjVpY9vmXfhZiFhxKFJs6FK3sz9L",
  "key33": "7tGqbe2nCr9h24Wz3yNAvkaERAGdotkNkRgxjL4mapZMQixQcH5b2nuAuE9WQ9sCFBcrAtcf2i8Hw32sx5BiPQt",
  "key34": "3osvm3ymrRxMWuccGyrKhmvHNAcDNhNkbbPKpQB4m3mTSVbDV93HffUQZV923kApqrtUDfcTcfHS9XYcwfT4Lfh1",
  "key35": "5Hxv27mTN14QpKoKPwz7M35QxFCHYgchiigvAafFbFWBoiXQwBwocVPKZ72oVVsGNMFLBpgU3s94jAdZYr5Vh7ry",
  "key36": "3ecrioYaHpLf1SQELDvxmrL9koZndXe6haBVVufLLKbzyc2ha3ViJMhuTxxyLaVEkm1vvhXJWLfd992B8MMXn5PS",
  "key37": "22PgVSjpyncBZUvGvJ9XGaZETqRyKFW8nYpRem1hco2knD8RUSXF4KuEuERFEqoP1go3s2qwFPvW1uusuzTkLqv2",
  "key38": "5vJGc8GnPjh6SMXdhwvNBtAM9vHC2mDq2TxTxf7Y4G2H9XknauHnrZymFReGDTw4Mr3k4JqXJf11RAbsqi5CWoPu",
  "key39": "5P46eYxd7oN5qDAvZq1WbHvWgZCG3F1EiaUffqXWhwTCk8enZL5yWvD3R41wjC9UmpbR4UEtcmMA8NYrcRUPkxmp",
  "key40": "54hXDeHQXSBNekFEDSaMXrCE6wFKTmu8DYd1Rj6f2rbTycGiktaEqEmtMmu4BfA3hBjKdQ8npa7wrzty9fSqn61L",
  "key41": "2asB6eNRHhHarz84Nu8JpjgHMETDEDHePzhgHrvvkQFkadJfwopQyc3SnM8M8wbSVArsRTZrSB6dKqKNebe1PPhs",
  "key42": "59KbLat4iwN9vy99naeLmYf5KufX43uSFfVYozfZ1aKq972hsYaDJ9P3mhHvwqWhc47pzXtEBu2AapujAbGZLmsM",
  "key43": "4B3XGVZyZCW8gKbFA34Ggqw2vLuxovXBf8nD8uGL313y7jgc6hqqHyGybkfbV2pi3xY5CZCqdxiGnsouQoAAMo4S",
  "key44": "52ZUEzEfeFekhgrocNuWFKRQV59fwL7JvNdKsaj7i5SSv2eMERmnsGQJkCiTscW7zHpcMYdwg4EF1nMT2jUACgoj"
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
