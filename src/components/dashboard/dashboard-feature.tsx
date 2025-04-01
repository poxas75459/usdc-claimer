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
    "3RZ7hzWCGxdN4x1WYr2PKXh7C7MDSQbYgLoS72fgeiDUgjKtfHqWzN7FoBrq4PQcxC3DTi7ByvNqwSPbrTieRsvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22RBYW6cHrVnxt6pnPggp3rqQdgdCLKkPz35GWFDVexQEWVwgVjebMN41eyoTRenhz6WHK7jeXeFxi6ync2oGwFw",
  "key1": "EbskrJ2YdpSnZEUbeXkj7ArNqNhdUpHtXva7AaapwQWbewuosHs1M4585NJBGNhY1PLxwfjAFdenx2HvemkzLkE",
  "key2": "65WSu7iYSchcoPC1vYXg1Gw4NDEmZjo7kRMMRi8sm2iCmGzXf3GTGnETW2WLayBmSfNgebbYxwXgnDfddrrzM2D6",
  "key3": "cW8PZ9qDnQCxQuYXV6pcrUwz7inWLQQz1ZtCUHSRFCXidWpJiq8Xurb8Dy7renDQgyramYiEWXruUHpJhFLPJka",
  "key4": "3GhLodVAnC6hENURFpMRS7hwWMeGkJ3Cfmx5W9oRMx6WX6bgJWKtLnNBp7trT5W81TH8fWAbGKECfBQ5YM1VUdri",
  "key5": "4TGS63bP5LVBCgiGuJHTmGFLhBp15CWfXPz8yv98M12agZmiDnEegy5ciwqbeTvZN5wimVHUDcJqszWJsBizVQzL",
  "key6": "2u5bC8ocBwA5tBPrpzwGkWMtKWG15NmhLWzn8isrb2rn6uL6eYphXR1ZkUAmMjvrtGfUphoVjnaUBHF1TSLfKq4j",
  "key7": "2kaAx8urhojBQE4zBUVexW8CneGyvG2FPDB9ZZNH5v5F3CjaGPx8z3U1VzovCXM8T5L9whBM2jGEmWrNHWfnuzQA",
  "key8": "5NBCAWgCcvzzxEbE2X1S6KHtVh3i7MyMc3wN2A3WW1f18QSP4UuDYQ7x8UFJWmc1Fo7pRphuhMVp4LnhUMM8nBXS",
  "key9": "5ZYJXV1QNTRtdd7b1UEdgtBQDfPV3gZi6MPAMq96aSwr8yjAxNEaHYiJtX8U6gm42G38PQmLuQKzEP9hQtH9BeFQ",
  "key10": "4xvvz6YLgQHUxUx1xYVpSJXyrUUzQesprk4jBsHDbTCWwEZFRNZyBdXmQB3iDVnofaWvYfDmfezrLUTDni9SUL8a",
  "key11": "61xpWEDgxDk71iwyYeeJRVCDhARDF7d7EPERCxoE5Bp55EzgAKt8h1DcEwFCG6bKBU19BELWRhQr2LfSB5gHwjJx",
  "key12": "4XDbirkr12EWTUnLcpqftG2XxsCXjM9RpyMfp9Frs9BQsUjYg5XpCpoo4No2UGtEUyTkbuJBoPJ32sv7Q3zC2kN6",
  "key13": "2xSGJ84gGiZaGa1yDRHrh2N8eQ5FdTos15BV5BkEQsX7qfP7wJSMx8G5fAnySifhs3B9khK2RrY22CEDhUDEC4GT",
  "key14": "56rfvSGNLACEkwtjte7bdmMY55gBDMdLHCBmP9QDyDasyrHYeiYWKWXJyctbh28M9zsSwp2HCvLsvTSthtop8eKi",
  "key15": "4aikYENwJX34eWxxtshS6j9sdqvoMQHTH4PwHQYzaVQXFMr4X1LT6jzF6zfLTSrKCEagVUEBVFnBVMjgj4QY8L38",
  "key16": "1vyyoFWqu2dKhPRpT1DP5XtxLLrgSj19RcZJMjpTp8Sc6go3VbQthsmZ7GBDHdQAaL9M8VpmdCtU3AqpAqy6fwE",
  "key17": "2vQg4xGyaabuvHAjHyQ5xMywnbLosnxhAWzGNYQ9V22zLZ3SfhwTuC8ngkp2pDbBgpAQVLNGZEpe99wy4FrmQ55d",
  "key18": "2jpPpECxfCWVsgzpjRyf7tXeeEakEaxZuoUZhmzVHDoNZWZq3WqnEq9YLF3F2ktCRei9vr4zabR53Nty9CYTHZ5b",
  "key19": "3vypayQoBinHjPFWyzpBFwgZDCgnWrTeUUugNwjc1czpqFhV1sJvUGsEbsga3CCZo9PDN5KsazBga6KYiWXmnPqn",
  "key20": "4m42d2hUata296FryUi1NhfHMZVK5Gex7NP3RUssbSQGf4WrsmLDbFrv1hAVwp5Cj9MHyupnd3fYTn9MgmpxFCJT",
  "key21": "JcyQiHuVt77Am3XiUKUa39QeAeACT85CAUS83H1vGTiH9PdpeSSa7AMUh3hFogHfqzdd9K1hcWAiiU6H1skmgVi",
  "key22": "5jBv5dgm2qmTaCVZ9buXsRthnV3QkPETrAuCL3Fq5Ta7s827pRGrWJutUvHzNv1mnRKfnYUxnCPx9AWcK4QSSdf",
  "key23": "2mpCj2tJtaoMehPNZcVKVdNpddBVjE5rnKgv5E8YqYc5XpmJGm6YqWn7X9sgBdNnSEaZdrX5RZjJ4grA6kKMBwjc",
  "key24": "3Y3yp8kv5b32curR6DVijK3hfv212kkxgNYWEQsUUQ3yBzHS2jvFRMtw7J8VH7EW3yLszXPUTFDrMf4PzJb67jJ1",
  "key25": "4xTeCPc5F685C4uBygrFTkdB1xA5eMWTG4KhcFbnaeooEehsfqay3AYPsqTatyt9w2uJKrMoqmVUNCtLztGuqyEw",
  "key26": "5upX7h7muTKroRVJvR9VaVFV7PbW1P9MUb57r4K5Fq2R2rFP8tXjjLt4ictfkMq3RCrRL182xifH49JmjasDQviR",
  "key27": "27hfRyFgHYq3oeBnXGYW8twwunuyAPGkkKQVzcYyVxkHRTEQ65MABnUnhg2AM5v5En439cVwahYAQQPJWfvdmvNe",
  "key28": "3kngfMZYzEfe4J6cRPWyrtrYEjHGwfB5ZJ6aWBASXgCUeBgGC6wzpzVejJ96CHqAdH9nMqHgx9CufyMmjoc4ivQu",
  "key29": "2sEt3SvinEBCq7Nnr2dumTzFaGj6ikKT4ykRcbusEwMNguLDGFVYqAoQ6Q1nJVYV2UUVRghqe3Tn9pqBJt2E2DC5",
  "key30": "5QdtxVU24b6VTGn5jhAq2SyoD6sDZHWXJV8LaYB3Gv7Puy5Rd8QwCndPrJDLRYsiEfzz2TAie3JUMgMGNuG6A6Xk",
  "key31": "2j28fHinf5jujhpzjoLrxhw1psynGqTSFtRyPfKBd1eRq5XMDCqGXwS9gLZERmtbZtoECDjkmG6U6Z4jeVhN4nES",
  "key32": "2aEcuZPKdcJ5es8ziR3W5SFNq44Bu2rXQABfVYheGEBZX57qKWNwqEL4Gm9zMx3ub7RW6aMgczJ7u2x1TyxjPiGg",
  "key33": "2AQAz3p4eVmCNRrwCq7BJKapyEDrdNgrB4uTCVsJ6rR7jVsa2VsxyjB3rtFANKRryhFtNQTxocFn8qB5vwCSYDWt",
  "key34": "3ZNaeNfGArBkJd2txRFy5oHUT4fMWbx5x1SG1eNWWsRiHsmYeuCEo26fJA6nFJuu8FuX73dwnKEywK42y1yNeESR",
  "key35": "35NY1RzZGw1yf5ZcHddaJhMYNVMp5oRGsvi2Tn7KULthHZ4VbTtBN8SPe1peF3XDa39Mcimi2assvfDHF8DSjo5p"
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
