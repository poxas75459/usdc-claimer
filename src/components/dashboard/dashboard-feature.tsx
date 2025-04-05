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
    "2ecwCuXKLHyvKZtFTuJGfr3AG7rfbd3cD24UfzcURfvsLoHai9rkpWb3LVWBaJNaQe8s8NtsNq7oFRF54Efijscq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVMUAZMfu2bUc49NMvmFzVZ3NZucHUcgPLpkyGeVoWD3KFPhDNvQPCU275Xzm3ojDbGaYENjRH8NZu6yLqkAF7z",
  "key1": "QAqNf4P3fuBdWHZTmmBuVGDdKweDd7Xh12BjQQCi4qjGvkuN5ZWowCW3eR6AzE5BfWDrqm3njzf5Z6TqYKEYF4H",
  "key2": "AygCn1LKYhrzVMKXkA9JbYDGs7cpg8Noc7ENZRc47Ap3RfqAkm5r4CmD2Q8wrcVSuNzzVUA9rdahVWB19NxPy5Z",
  "key3": "2betbDwGUpc1rAz5szE8RbGKwi57dznx5zp7MneGpiHbm4wZxYFk5n2Lpps4fYHSxaXjMFb95zwchJnzXWqbeeCk",
  "key4": "5z7bXaWuChwCCuH8nzuESv7x5SXU8R55yURLVECekUCZKDYARGPxjGzFeU4mYcE1Qd9z97vndaBZJ7kELSDnXjtX",
  "key5": "5LyqxPpiHPdcMA2U6G7ttE21xerF97D3dkguxqvKqmBgcSqRPX1gNiVS3YXZy7QVaKCjf1b2SF2u4YndtaYvDCQA",
  "key6": "t7hdMkPDMTf95HTaWH4o8XDCWU16UB88ca5YwJEdbBKr15KZWu75xZoA1wa5VeoALrDBCVmV6VD1x9Yrb8xGjpj",
  "key7": "48eoh8pJBcbAkHuvLMUTvtSDS6WNaLvmKFiYXhHK7xVoDysCsJBMXJycTf9vQjzk47FrgS6SYuKfrTBmKqCuY7yP",
  "key8": "VpZoDVYkv3bEX9votwdtozDtjYNP9SvTz4E9j8nVZqh65zmczaE6E6PxbCjjCedfzZxjEQKM3jBWhPg1SSkmuoJ",
  "key9": "2MhhGyMhJ3HUg1MLg7JzqiURmdyQ6jDwwLfkE1ywxcHmiDdHFVCShXUyrQ77NasT6rYpN6tRxNj129BmprHeJ1q8",
  "key10": "5Nr2LtAuGBhhzJTCjsd2gWxgGbZCvp1Kg2gUiVdN4zcRNyhqj8zAQLfHpgJrLMa8rmjyif9hbLLRASANC316cHGN",
  "key11": "2KqkQaPMuLRgqzoTcHXKzmyH1VR6eWQNH3oirGEgAMoxV7KNizVftGMdHDJ7za9wpZJ32P1McQBm4HSnhSi4GNFU",
  "key12": "2PmuYCHHFvhcVX9R8dvShE34gLSgukpvccYsL6ZNqdKvN41RHCmpru95byWa435fN9Xq1R5kXD5dNJH7P3Cyhtje",
  "key13": "4Qt9Ah9WpN3c74YuUpAYpDAo2LcaKSMGZF8pHYkHwuoaeRNXky7gvSWVysdbRuYkoZSLBgaZqybHTMxj6ZtArVoT",
  "key14": "hZXEHkMHR8AfL1BUTBBagWfPfb2dvtTnRUFkhp2tDtNSD2CNatDwPYsii7v883Ept8F4UHhsaLmhq74F8YmGJcP",
  "key15": "4SkwN7XKDL2trUrZE2P91muABD3VrTSdhn8h4cdikZrdVLDHpZD6jq1MesWAiCwx2epvoQm945d4rS15SL1ihJUA",
  "key16": "5DpqRKKDeKbGWAqmsmpCnweqorX29G6JK9K8ixEZW5ugD4BvU1PFup6qEm4me9xzLWD6PhGnRWYdLzsNUZWfjMFD",
  "key17": "21LkTv5TzAbhzxTuPTGFVfebRnr8wtQezT2BNspE23wK2Sef1hXPr8HjXCkJZsRbd4dj65DfEF2SJn6Z4Hc1CAY3",
  "key18": "gEjASx3ppHNmMbJdMjDAi91jGvvSpXozq91Uc9LtfSGTumFPUpdPq1VDW9z9TtYBCySGibH8nyeUMGc9WymUYJf",
  "key19": "31pYhfXEYhid8ibux8VitXfbk5QyShmhZ2xMyLk6yjAgpqD7At9faL2czJoTNHMWsbbGG8bU9Kp85z6imVF3kvbW",
  "key20": "4qAFiB5KTDmrYFKNHwtm3yDtEXoLo7NNWjuknDrQbp4My6JCZrST4ghPkYVvY6UQiq3wYfAdpPLewFrsc4VJq8n7",
  "key21": "zze9sHg4KmKSBbP2kYwBM9yVAv2RRVUeR3gKebxYvureToRpi3HKn4RyegvhLGxEzQ94iwavXeFLndwMgFNpgXV",
  "key22": "4jC9rbCTgHLB8GsEUgAVFBVtiH6QkYspJVmvM2x1e4RPNdymrsT3QQE8ukeq5daV3PsGybW3a4QpGc47BWZyPrYe",
  "key23": "4JLvsPD19kqkNfi1jA3MkFixkT2S5L8F7Y2PJhzhSJzgtk65z28tXwWmG1prVU3pj2V4cuRLtxGFvvEVS9BaNBjE",
  "key24": "5NzFGd4vfSwwkrT6nUDK5gZvWJSLXsLiFxaGtQUGMz1GyVZaJwZRpwwRJS5zaiuaz6f8wJfmipE77ckqiCyuzJux",
  "key25": "4VnTf4wvaxzFpgjEe3gH4UX2x1UPZW3ifozCuvqS5sZuoxXxLtZar3kNx3PzdRdJUeHXiGeXYSV334bJsU8rdeED",
  "key26": "3ANBtxwe7o12gjko9qHJng3reYhGMQWZaZs2dHqX5pMPo5LN82Nze5rR764hct71x3vZBiMcx3nkXc6wzdxCkgfB",
  "key27": "5sYeEe6b2Vf385fHJKG6pdsbC8gDZctrMUUXdYioXDoAffhAbqWD2VCmzFmx3v7WuqEF7MthATvLkVMFNDwHcMPD",
  "key28": "5dADNfTrt7N754RjACkLtjRow9VQmj8zz1bxqZAttnKvEVzRi73WcTwb2e9CFKzPXGg6rsdCpHoTwtE1PWKYbE8Q",
  "key29": "4ZEu27Z6TUMX59k2byG2kCnTtuyMV2GK9ixxPp7qjsjAXzzNyLE18qZ1zsMpPtFeURKDoa8Zd1nEhX2FyStPqgrt",
  "key30": "22AWssth9Hr9S571r1in8TPPv6T7kfgUabEARTgWJRqAmAnntCLXDT5x5PQxDZ7CsRWLwrNr3ZwxuwrVPiVLFdd4",
  "key31": "4F52XPYPhRYNMYvQUPfWj14ejTq8o9XqLW3Qp2UmcgbWkRH3M8FfGVWQLQ2PTFpkwMMbYuj9pL6o17PUH2ipyKpn",
  "key32": "3Q7pYG4mxjfAco8Ta4Syg7KqcGy6E6Dbhn7hi2AxA3mcd2gGHrSkXzE9FkPNAroP8b3ek7utmfZHw8fxKhyaAGic",
  "key33": "3KGK1kZ6NLtw1g5EdbhEjCXHMh1yhA3fDKHinZoBoPP7GxsLwy3ENDgWaHjtwFgkhr6YvmuK2W6m9AFsg2zvHa7y"
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
