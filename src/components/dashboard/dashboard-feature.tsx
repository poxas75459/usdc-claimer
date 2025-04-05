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
    "3dNzJwNqsuvkA4TqfvPFyajNWaRH491WZTeUEpU9GKWsSrwyokstLCeJnLM8DPVcVXkcYciLHSB7YJSmQXC8ZMUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nT3jiszjThFYARbHg3oj19ByxXjKrHJkY4gzAWNDey3J4HRm46zvTKWLFNuVSs1wira53CcsDPagebW55WpRDNe",
  "key1": "4q4Ct8HoogCuZUywN1cVF4myZ2n1uDcaiTGgodSAfMichwN6WHh9sroztNxbeMGqKkBngUy5CQME1czipdEznZN2",
  "key2": "5SSgeP65Ba87egitrQv4Xr6Vwoud2gENpizxeUhDLuJ4RcgismDq4VMh7Ag23SD59oYFZPHHEoryqQ2xDWF5We1m",
  "key3": "2Af1otYN3cQLxSuPu5CVfw659vzYo4YxDpy8gu3iDiFyNwFATQ6cCnkijP7hVF3gWUyWTdKjVdunZy7VX8vNtHyX",
  "key4": "32ZgpfxsMWYe7FxBGmnfvPpVGVsga5xPQ4etofYFwBAGuDsyjcmwaz4m1SVZqL5Uz2TbPbeAUcEA9orP8hB7royG",
  "key5": "2JwJdZTjr86X27SopQPiwZr1oV2TnuTSaJd8dwRhBPikiQW4uAEGYPvsW6ykdotKD5CRqQatGiiF4bdTg9hhqfJ8",
  "key6": "2N1h6ypsLGzjvSjC9SpT5AKscF1sYNEe5JdW5gwN8Bj7GCG5s8hRhYh1eHempiBvU36FMQhFDtWs6EJwqr7uVtUN",
  "key7": "CHJph27g9umFna9EzFGEkfJHLXKijqfUXSY2ktRAR4BGChqxKMNUeJY9EY8BY5GFh2vEbNBKTk86QEf3Bq9DvZw",
  "key8": "3xZzuTkM2qdubcHqQE5NFgqE3gaYj4nrBekaDsYPfWxPSpSHqffgshTUQcNmDFXPJCsyhgY9v4VTkCy9AwsoCMdx",
  "key9": "21aT5sQFdv1GfUAvgJH3PdftfwHrUmz4Sino9gMLJE3YR6ruRF6Kb6ffJnfbeDS1i4WTbjujMjNNjhJtyaZMNtxk",
  "key10": "3B1V7ZG4LcYCvATYsJk1oV9ufnAeXpJPZ9YRMr66Wj7VngaKBdoLSh5LgWmj1t8ZA3ryibTgHNsQywxtrSDy6SUv",
  "key11": "5Rtp7UeRMPjLoTjFo58NXtsZimm8Qr6Kp7D2Nvet5zTacoz2Pzj875aC5PuKPgcPcQUKxxyDb7jikZ1WftpEEDg3",
  "key12": "3zfYaZ4Jf2KaJcoLNZjJ1ZqmoXqEbgV89JioyBku5tzV9r7Z2pGC6TWKpXvP5RMFkUXJbcTT9kwqyFCLpi17PFtC",
  "key13": "3hZH8S2xuxcTvqM4yNfmmKzAizYqrTfmKnfCzxo9KkQVeBBkdWTZVQXS8CoyQhGD4syC5HKT8MAPZ3KFxEow4M96",
  "key14": "2aSruNcaMQYWF4DVzQA27NHhafpbJmWMRuzQ4sFoFDM8amjQKqebq1YqBZeET7cpP6ujHEvp5FGsyA8p8awWF5RQ",
  "key15": "2fdthge4CtV1mHn18RThAwV1QeXnoBHCSbsjMvCt5ZmtNjmGXBQgngLSpTZZejmU51HZcoxP4cixdtxLhgRKooJV",
  "key16": "2QopzUSwfrwZbLLGsuW53K31EXp9NW95vYegiC5hsmctXtPAsbnk51zKrc7vq34xySLGsC8dkBbCHyNk1UkvFZfm",
  "key17": "RKXNDDPDfUxAM4rGkZs7gTrUkztEqAQYwRdfc9QPpbXHhNrjCBt1xHFZjEtK5p6248NNmhUgnj6ziGxhLzyvmQi",
  "key18": "itMX5fN4N9RGPLjXdKQ7eQb4WyaEzkNrqo4yU3Emiubr8aLfHYYSuyZ2VinQo3DkTBmeaeqDQstH7UJbzkNDrpR",
  "key19": "2fCfQMyyRxSn8kV2WbzzWv21cuCfvfuJJFSqcjfmNQ4HHPivq4LKS1AnoT8YZw6C23WabDyHoEJfMYW4GabaJ4mu",
  "key20": "5znEtBM6qhfRz54sgkR1QwWnPYThqc7pKbwUomXrtVr3yJTpJ1b8sjj8RXZCdmEb3asSQGqvwEWtmeeDiSJjSrLe",
  "key21": "5k5TAmuwbK3kE6JRwsUgq1uWowwAUZhjWLtx1F5aHEZaP7AjTSV2P9pBXapMkCBF8Z86T5Fv8BhEKSmTJ5oQu1q5",
  "key22": "3yh5cM4nL39hzZea7dwLMbiAEfzDUxnod9mi4WLoW7mNSAiNNYyr3CKHhJmKzgYHLDFZ6Gzvjvov2EtVfYWpVEgh",
  "key23": "48pWMd7WRuKyTvBfnFRAHvBf87vMisY3UoZRSab6dXWPUjrYJ7hJJRgFzYFFxk3TxgMNDZRcpfhmLRzgcUaWY2ww",
  "key24": "2mNRQ8QQ2R9KHCqBfXZt78ErL6hqorvcUCnfChBJ8hXhuSwEkMeUxXj7uqAMCaxfx5HMHK79imjAApLHTXkZHmVb",
  "key25": "48usFTfUKYeA3WqiCjLng56SiwHAnRtJrZv9CPesCe11kovf4QYedQR6KQMfgtySnj3PXFNnVSHysN6RkEaDcntR",
  "key26": "3cA3naaexrfeXRzKNj5d463PopoyvgGXEdkHPExgXWcNWBX7R1ZAPdHjS2JbpQg7UDEfryuGWKooC2bQVCvg8gyu",
  "key27": "2f8AxycoaTVYjfnHjYurEEwW4BoraonesRCQkWrE1yw8iH2794X9sgSdQfShkhhShpR6pFEphnghz4F2iXumvbmm",
  "key28": "5D4BDaFevvJ48e8veZuBfe31o1fQqAPQmVG9i3ELB3UPLSncbpKNWeALsuAfVxeL4KCKkHBikfj5FkHZrX5HADSr",
  "key29": "VPb5fFbXR6i7gN4wv5TjhanUiH8nXA68FFjG6JWiYyAzKDRBxYcCkGeh6bEV3tdMekWizNyZa9QbzDMcoidAfCq",
  "key30": "2fP3tMN6kwcGnAsNYmLg99jkyw9MNjvZz8pNcAxgoXGut4Q4QwZykz7TwQvPFUmB3hbKVj7UAK7J8ErKJcnL9zEn",
  "key31": "3ocfRu9rjQwsro5WaCZJKUx2cUTKRRtnPNXDDhb85vwDgRvZkremc9WifJr1HVWsAB4FDymkR9CYq8uutP7SBrEN",
  "key32": "27a4J8MrtQ1YR44f6w4KDyi4maTKY7SX1w2zNWcHjWXmAhQzJ5cVYFnh5w61L1uMeDAEuyFdvnU4L3EutYMBnZvc",
  "key33": "eCB5jFsFHHmuMaA9TYD2yiNarEaZceRH8aerjPgJJwEmyUFJbayWVCmuWttRYK2a1ehchz1NQr4HVz7J3AneXpd",
  "key34": "28NWWhuRC3eRwFQva7dBw7xCMbfou4yVfodhc3bR9Z5GBgA6bwBqYGEahqQv7vkZrR86TRNjsyAnQuzphJT92CFT",
  "key35": "3c1j7UnDLqtXDvXNoDgfu3oUethibDKnNn8K7BQoj9aVLDiuNTWJLTkkM1z1SuK5HW6ynVru3hr1DarckQVw7b4k",
  "key36": "2FTNRYgWWjBieL2kTxnBW2bHDY2nHx8gDzSUM319zq9UdEyYJC5nnpH654dzZrCEWHbihPuJYcehPAVEA1Lu18WV",
  "key37": "j9om7Eg1Xqf2R8cD54rhiyN5ux8dC3Zf6kHbnF4QygaSwV1VWgFcpgKRbK3tJ3npU1tebqKAykhXNVnzeFaM6k1",
  "key38": "36jumaLTNv7c43k9T4R43GW1JxtSbjMosLcfkBmXqbcCfwoBLYK2ouDjJU2vvUzoKdfDUEsnwgGnZdbVQg6uur4i",
  "key39": "5piGtjgmZJX3z5Y7d55C7QjT9ZXeF12N62ABDYimGip99Ed2Q6z5JX5EDzW5h4EHPb1MFUeyK8rPTKcpiNLrXnrp",
  "key40": "4M4YRmAsGGqFYvEroKtVLR7BUtEaPsKLvLxiFP4UykXBwyfCvDTcqPFZGZG93s8g5tULhLnSRx4BenBWmK9Qx9rg",
  "key41": "3S2gKLaCVKWLYgJLYwMkxKDpxf8DGrMokeDue47gTDQtZm4nJHwKFpJHEcZNfuDHxJrnFPNw6Xf2gXbF8jfv7ywn",
  "key42": "BFKT5xwnHg1Ay4JozfiGKjqdkkN5VY5HSgJZoeBnqGirdzqYsNbJerxRxqhwkDn2EHPZwuHS3LMUyBqKnu2pMjJ",
  "key43": "4ywsFydAofohFgRKvtimWL1i4VdXwdqH7MG7ShUTqmQiW7Na8D1E1NWu6CEoGqp1tnEgw2tfKLuALy4ewGHbJLDy",
  "key44": "4VrjxVkjYLRLsT8LudAVwo1ZTwk5Y1dYFfLhWr6rYBKmdjSmhM7ztdEj6BTmfq21NQ7emvgSu8sAZL9iigzEe7kh",
  "key45": "36odacpjn5G1bS8MXqbTAvmq7DZav1HCb6QcSwmNqAV7qc8o6WUquBZ8V7Fdp7grRCScdwjFydn12vVhEb8c2K2U"
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
