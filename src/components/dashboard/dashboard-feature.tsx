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
    "4QcJqbgWF6X63mj68UwiHhV73AVPw27dDZHY2GbThkzqen8U4z9bT8tnjTgxTtxhKifsgXgpmWpkuBNE2pQQe5ef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NEytSnhoZVcJuoDj6yBfjgXmMnJVAVMtDit1KhYiwPMWkYHBtmnsoeo8WA3T6pS5XMQGLExEYcTXzXfAxSV8fn9",
  "key1": "5VE5bskhrK2wkJfkLcukTAbxo8V2eJdEYSDAaeq6MsP5a3TsxSeegdoMepn8g9pKaFyXShkXZZ7NnfD3pireAaw3",
  "key2": "4rydEtywNJDcZXAGAtssvMCajqJkz88zBnp4j7Z8YeJkAfhEjtvUZeDqSSwDF1RYXV8yM2pPcM4dg6WU8FrSZ6sH",
  "key3": "5VUmRyAWuf5qZu92KCcPi5ho4vT3ZUN9vVTSqY6LP9Z6qQpAdgdjgJMjWgyH885xqm5yMceHZAffVTtzXTyrqxHa",
  "key4": "P8ry764tJVLixAHkufY3MnpmXkkWwkHaXLEtHX3jwWEsacH2SHsxq9ux4bn9fUoJcAfBKu6w8hoCsM6Z9KCcWyC",
  "key5": "2b1meQgbQkB6m8KvwSJPVfj1yh4JACcZUAK42rcMQ6Z6roRxS99K6DftM6W26zdH9W38Ud92YX9eWgJRE8uRmdeJ",
  "key6": "sL79nwmnAWC8E3aYhbUN1Lj11Tx17mB3oRfeiLU8cKk3KaJbPT5hRVXfpqvniyHfGdK8B4k2VWo4aqdsFv5gf91",
  "key7": "45BhhV4EQsF343haiq7DCCVXpaNQV6D3ANNaa9WpwZvWZwaHXGDgCA8M2uVxGKqgicWgLFuMpzjDxcbj4P52yvL3",
  "key8": "3oPQto5WeWd9sYwgg51oiC64x23wM5xgzTrUk4k8nRMZMs2wz3sDVZQvTzmABUa6u56F1eiDeibQQbs4rcQtNY21",
  "key9": "3ha75eGADuUfu3TTGriuoAgrGCLy23nSjxCber3ekwgjLyWeZyjRhRy7X2Y7xRwRoCp7pE6CGunzxHv4VVahFQ84",
  "key10": "rMfpdmT6ZPw6Cdp3UBVvV7cBKd47cxRs3jxdcV1S81dsXw8xg74Stk9bvA6JnbR6zMm7jb9az2RD5KJUMcnZAV1",
  "key11": "3vX18TZV8Mt2wPDg9mfPvNPkapSTbQFEnSvJknMsoouKVhNrZ1ZMuWt6yNwTX8nE93VpSc6B7hd236FKAxUxR4HR",
  "key12": "5UEQimL7Xut7b1hPpSfSNwggn745EaN4MuiMrfYm5vZpznsP2Fh1nd9h8SMFYUUMM2nwLBsdhZBp2sRumtohPqzd",
  "key13": "1kkqnGgN3TsuthZNYGEzsBKGbn5p6Y51QxTL35C6ne5ZYiPyioq7ortiK7E7ZefPYVCmQf9bR9EfrT3qCNuqMVu",
  "key14": "2hpwNZjowCsfEyFBb9x2ZdAbcbVrwWyCAWzFAWX9ATNM5dajE5V7MjRSimZSTCtj4YFtMxsHgTA9WazVtxas7XpU",
  "key15": "2P99fhtdLQhBLS7nko58Cj4sfYTYLsxLKo3WG2ugNDrcRdmbpHe7eJr8sDMffKJsWFL9fH2DvbH6i6kXrmumbFxm",
  "key16": "4qRYrCutHBYS9bbFux3jjGcBDi17VUN3Fjy2z2QAHNbEt5n1NeHDcraajqPv9bN4W6vZVo3Ww11o5w6ctDPDDdpr",
  "key17": "3MjvFpPNwDMe2XFxLtEhU4EBxppSBMKkS28UseLvrqXWrBbuWatVypH7TZhEz7CZ1WDJHwW9ejiHuJssK4ZqGcex",
  "key18": "3PgwGRqrCcpzwYEQW8LoShbEiwiZnVPKbZu9xGArJ4irL9fvJiY7bUqBrL6mjAecogZvQznCbaJF9eLcJ7QNL2c7",
  "key19": "39qVmgqQaVLxf9mjU3giQjpApRr8TsUcmXtuiMkgRWNGQzjUfaqr9yByVXyjEprPMSKo1zcfLaHDuVCN17u8MysE",
  "key20": "2ewFrpXFuQFZsEiMsX7n6XsGxYvHi7quUEEPoqiUzo64mpW9JckPBJqk7SqE4KFYvRrbtGr8rhMqM5zMqZLT2gFU",
  "key21": "3tEG8Hi1gGF6Mcxitx7yifWH1dAvn1Wx54idUjM34hT58SEHZ6ZB1GgfU1VZRcH8dDJCLF3AQ5NVXSfCdTb2DVY8",
  "key22": "M5qArWFXoqMicyf7PDtvV9rZT6Z8pt7zTnrapwTL1biad2Tt9Taw9eSjnaABNy15mPhzpq4GTcD872oqxQAYKxN",
  "key23": "4xaaVUHc3P2StHxDP1oUZwGGYLrMrBh1GitJpBPvwDZbc2JstkFgVPKEMRXggAQmswqDXrBXp7VMZPtmx54HqxoW",
  "key24": "4UtduvktS1dE7L4afBC9uM4LuMAFcV67b9xVFdMQJZpKm5nyWUGc39tJh4unPopBVa1PxyrpYVT5SB5iYT2XTE6v",
  "key25": "5e9jbBwztRLdMk5EkvJwwwk3mYKTbmobsQaus96gj4mANKDuZHSFfXXRWNihDJM98hmG1LBAmXfkLPyJrP7QAW35",
  "key26": "3oBBwv9aiBKZtqZq21XxdTAQk9TGdX3cBTaGFa2yoY2LUYyWr2j6bpxWggTpZbQ6HQVkP5xQawk1VVWKGPbSqZuZ",
  "key27": "2rnQb8fMhEz46iUNnErMWCBxqGHmYj3eE4QbNCrXSAzqjniHoNwMbkiLoQd9V31dAPSzqBdrQBDrxb4rFyYWtHXE",
  "key28": "4Mk4oHohuuLHvhkh7VLrM3NYQcTs5cnfcAQPJPJSBxaLyTChg7uMnV5on3yzwppSsm5Z2iyUpTd39QDNpow79ABZ",
  "key29": "5hMot2dZnyyr7dDF1C8VNU1qzFi2huRK1fKQqXcxxgnqDRcmFwZif4ZvBfdJYyWDBAvVzCJ7kpcrQztokdMjznBp",
  "key30": "2KJthKPswu64ApgWDrRtYSj5bPmRHKoaB9qhy23m1MeZMj3PEKzhdLYXFriLgZFraRveBJ2LWa3sknetAdFWvvu8",
  "key31": "5ssc7E6JyzrCQNf7skaJSwV3bwftYyS1HKu8oZgGyxqGTtbGgzXbc8d8zGcFoc6bocJiLtG1Vm8ZDpkEZjYJD4SQ",
  "key32": "3xG7BnLXMiEfmgbMsrXXWsvCCsss5tZ7JUEapuDBG5amf1J8r679tC5aNuagrfCwzzJRxunrb3dkvrfqV9bRsCFB",
  "key33": "5XWqvSqhoaQm7kM79WusGApAXpErk9ChoMhxS4c6DK5cpmhGAY5owpBCRHGFvs479GRkzeTLQXjzd9s4t8Ry8bNN",
  "key34": "3uGGrmLtxiCb59nTCbvQmpBieSA9CTNp1TtDuVDZezaoUnHiEmQMV4iBrnpyFvN4qFZJyWPK5M1n9uCCUUDgBzXN"
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
