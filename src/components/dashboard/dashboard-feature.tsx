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
    "5DUv1vZboNQ4zu9LNHqh7cWxjLkTjfi2vdPEQs59Hf9qgs8tbEBvXnnh7YgpazCPohRehEzaMFzRnsxybmurdcTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xZpuzGjdmdsRVU9beoBs7Vk5YqjrvewzQsn6kWwaWqkBVHghSrsezNuNny2s6EKZoqV1Tz8RsH97Utsk5xqGnWx",
  "key1": "5p3bDnmPtRqsfT7PPj731sDXgPJPDJZS7tUt6JpKXJaoSrN7PPNgnpaoRycsBZsoHAHg7v5AD8RZPGfsTQge9x6A",
  "key2": "3vsTxXKxqYbYS9qdA7CxWAipbJMt6HPn6GxMMkG21gy7ZizzF8ZGW6adai5CuhfjNJden8xE4idRNGd7oDhzfjb2",
  "key3": "EG6RHvpD3Y9SbVsropSBYdCUTg1NGM93Ga6F5emuKT6CkGW2eoeE244YBqgkciSwFiZTw3XsJopj9tf6PLCp6zV",
  "key4": "4zxR6bPTz3spPi1mA5AUpkNTVg7CZtPPWCiwhLDzRWPrpmidecrAgPn5DTSP2wDX8NDWW8atqFKRexyz8r7omc5x",
  "key5": "53hKvFoj3SBNpkgjGa11sXq2c2W9xXoieDFNLoHwPxGudBgEjC39XEyDfcUerPt9qoyjSW7fKtviDbAo1EXeCUH",
  "key6": "5PEWhoFytFCV23g9VfdBifkbrTq9nUG5WUDKvT1axvRMAfBGeqJoacMcFKzMNkp8WtQBWQfouJbNpVbNWXrRNumz",
  "key7": "suLmox5Pv5fVA3FFxqziNYtNi4MwSK37D7uFLKWWqyb5UwbQJVmpxw3FbaFJCAHFY2kmz4gf6YEtjDtAtWj1uD2",
  "key8": "Fh6hU5TJ3x5DZu4xL2ZH3LMeQFzWyEBXeWnviZbM13TsC953y5JFHpC9woB1CkiKtymrp7trdNMnb5xahXnVQwa",
  "key9": "4JoQVnJNMpcj4fGnipeiUdAxHjjdpy3yKGHMR21NjV4MA4A165fQ9afJScoFfAmFtfZV1ZfH7LiFxGzurEJNhgX1",
  "key10": "4J9WX2anwSu2oXeg9VoK5rFm3uqGpe1KugCPsxAa7pJVLXoPaKAnKZ6z18obenoYpdTAzCg5o7wfh1RcqHMqxcCU",
  "key11": "41zbQNwxhgE9AvLCVTJr1CjHwjzUVv94yVdNM9k1cpKtdhFj9cXnxQbPDgKSBzQ3BdpYSeY5Pfc7fRuV1KcpfgKY",
  "key12": "3fMsaek7xqk5nMSxBP5QHdGvcRBgrtV1hw31EQWPFZ8cgfgumtYmGBpz9PcVCpPWCe8cN9pkZfESxoUryWitC1H2",
  "key13": "5Ro2n5nuK1bwJGahi1UqSnGJ7bUKfPbE8nbiqmotPtYNpeDmyeou2T555bQUEPp7jg29pQT7Pxx7XUDmBJ8dYmve",
  "key14": "2TRD4b6L5Xqk55mhHbhoTAJxC3vSfeBZdE8S4RcLnYcVUtcuZ6cGJQMRn9rUxmxgcboKgt8P9r5RBs2jYPn3NPFk",
  "key15": "28hZL62eft3w63222m536Rj3k85WGk5Se64LRaHTyDRuC2UsgjZ7k3anb9TQQAHy9qaSKt4U8wZGWsi2ib9CCKG1",
  "key16": "2yDbiCDLnW5fJvytbxsLqZ6buMD8gKkP9HDBMgQGjGkRhs68LPzH5ebcLBVoyP6uDx2SzEEJToZAjr34V57ha6sz",
  "key17": "3cXUHjSjmaKg2MP7C4jm5MitRd5pf1VxDCpx3hmxLx81vQmro3oZeuwU5kzm9iNFupWAfX2xUCNMcBvD13R8JFR7",
  "key18": "3AP9mRTsCegJgjScUGa2vZhpPMV9eyZkwsejVc89dYxvWhZ48Lp7wfFhMWNCqDZw5rSqK4N81ygYo9YN898P7x86",
  "key19": "3cSdcT4d87xwwNzQadhjEcvVehAZ4uaa3BEikPozw6i2pdTPgV9TPT4KjEfwKuG7Ff5ZyTeW9jtDLSy4vji48Jw",
  "key20": "xTZFGRhCcLGo9rCAS6Ni8xd3VismbNjziA9V86RvWCnKSg4dTRmyUmUWPAk3hD787SGBkcKBz2Y6r61TaZcsnT2",
  "key21": "jXfFQhNbBUU9DNtLtFBLJKzb19TsyLC8xXciBfTmXNxUVdYP1RAUYLaEg9JTHg6wk1AVrkQZETN6gh9ymrcqMnv",
  "key22": "VLMwdBCQvaEDT1qZAeREo7HtzDjhiii84bVrcovnQcvpoFwF69Su4jHBFPVfJULJJ8SLK7sTBUi12DPfHJKc2KP",
  "key23": "3ss4BLG67Q5pAuavw8tztFfKhHNQeuvGuWGeLLfGRG1ZutRCno8SzgTnQ2G7RHzx4z93FEtAS1bwtipyxyTK1fjz",
  "key24": "4B4jmEP3Av6dyj4ZxCNNAVLATfBGRutr8DKPPf7DFYyAR8zcWzATfKmvs9wMjjS8qU3s6r3FRe4caCDGdpDma1Lc",
  "key25": "57YxaiFmJpUTB24tQs1qYB557nzWHxoqkhKvqxTx6YCA5EsKEGhCNwpnhvMVsiezV61XLo9GeRkmZgYuQUk8icAL",
  "key26": "4gdtdBXsC5F2pXcFjPk674s389po1NbHaw1nzoWsv4ukQF3Fk7JZ1a7j98YXQavFBWe4FUeFPBN7WsEpfxHMLPeh",
  "key27": "34g4H6qvPakd6dWvoX9BF9XWpV7cgjkxE5JxErBy99yZug387WfZVTh8CzvfX7Vh1J4SpfRkM6TsaufvCQMG5pi4",
  "key28": "3QmVmmxQqZpty3qcM3m8QUboFX1nc8md55reFQnEUufhARR9nbcAXc8AUMtnd7Ke8epMdGc9ycvtKD9Ma1y8xVZU",
  "key29": "4qgBba3DXYFjVKJphGbsFHM5uJYFq4ZcJpPq6G9H47NUcxcVCPRxkak8Q9wBp7q546FSeSgmTEJXXPu7dzbMexZR",
  "key30": "32jAzuVtb5csNXhP6FBQL15tCD8haMuj7DuRNqWnbBHCYKXa8fZtmwRK8vgttt4Xgx7Pn3HHn7o393REMqhXxiAV",
  "key31": "4uc4oXAZXse886JtFBh8Fw2Cs7X6BmVdStx8GExRj6yzLFjrwYZH7PUeerQDhBUtari9c6CJGCDuk526mbr7LNgm",
  "key32": "51z6ktxUs9nqzyUJD2L9EgA4JP1XEVJGCnvdwwPAbV94gTQV43zS3b26dTdb2L84yvKuUVeicVD18Bj3dWLb5C3Q",
  "key33": "3BeP72wew3G1ZyzudeFxDKHXq7bCoUvPJxv1k9wzRzXcqCgMZzsH82PxutYtQLkCMq6G8XjJKu9ykVj3TJSHKMXy",
  "key34": "49hMrK7oacS4GiREDG5SJW723ccpfKhutsNCnAe47HTX3rgmB3tbnfH4khDNS7dJn6rFzBtyTgm3SAGVtw49fx89",
  "key35": "5zHP5N3RevDD7UwiYhDLjMK7TDuVr8fXfuwk4VDbvPjJwxDtoPC4VqwJ2jHxGgXUjZrNAWa8Kz2g6hewLnPW7cVn",
  "key36": "3hcSDpFhSCwiQQtXa9uEx3sV9WCrnoC8rzEZ9ci9odXjHnjHJrjb2Ht2D8kh585gpADQAQD8btn4AzyUu4v58kyw"
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
