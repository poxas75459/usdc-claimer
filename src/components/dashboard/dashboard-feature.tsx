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
    "3VwxErfxk2xfFt3vXvZX5o8x3ksmroknvkphnYmd9xHgQg5YN9Vzy6NdcHDX4SFARoGQEXaVm2MUvmwVoefmVZx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WE5faKjZr5c46shc7TnYmmCXusY5GXmmDawViGStTcoRMD7oXVyrPKXnS5FbuzwfkrCxJP39vmn5Jd3nvaoCDbh",
  "key1": "3F14x2ch4crGTHJ5kjuPaWrV8cYkqmA6jmPsAvor67sZB6PQb54uPcD97iy6Bcj78GmdQa1eEbjnc5dYP1umtLJS",
  "key2": "4Fw5twRdHG9hhJCB995B3qWKGEfCZRe7wvzwXkETfoS3MSnQNLhg7zJNr8rfzujx9w9qAa4hnbAgSEVjnz7BRHHm",
  "key3": "651So3g29bMCDJz3rTfVAnrL5yRQ4fJPPCZ4oA9Rb846iWxTERcDC2jQw6UfQ8QyLLt6yMKAiNq93iwuZrwNmV1o",
  "key4": "3qCpFWKLffmQbnM9yYk7kjtGZSViPB5XiEEdg2u5pafQs1JTYews7MWstawLtyABAiyiQscU9w8NV8PisbY7Wrss",
  "key5": "3TtfrjKZo8E2PkQsCtr9EYuyfey1UM2oc5jSACppFfJCbcyB2mEhmiC9eorGLMBKpiEUGzax3jAZZ94NUVFCQvqU",
  "key6": "F5mPC9LQ8euYfRX8RShTRSSDKWtD4qkvhMFg6zvSNoAhL22CqXRrrJJkQVmFijXgz3Xdk6UuCCiyTaiFVY5MBe9",
  "key7": "2qvAPUkCHwEjmUWZ42kLmwnnv8qKbqgCCiT6aCYMokQMW9WQGWK2b8iLgx7xyVSsXpL41HnaoUNBX2PaSupA4kQ9",
  "key8": "66mpefJEAfkDWguntztFiTZKtKszP6vpmW32DuvFyzujWZ8toiLW9rDPzunDT314wDdBU4gzwkp127CFDRzyvT4R",
  "key9": "4tWa81FT4R1duYJ9TMLmFiqCpnsqn1tAq17wtwsr33kfnWk9HD2auzDM9CCCFsA9Kt8feVSdSwWLYcEguBFmHLca",
  "key10": "ETLTY8n7SsaZPU1xRavwvs9DhZPBXHstGVeDwmYDjvFDZtBuP9kvg2dHK4aon6pENdxrPQPcH9cqY3Ut1AcR1We",
  "key11": "2uYFN2vZfn1oZTwefZ4xMYGVoZD5SqjkTakooQHYbDQyPgoxGauRM1UgT1ztxrCVxkjSNikAC5a85LL9yPphpjUv",
  "key12": "28XGtfKvTFyowdbyBZ69BNnhxfYQR5bPcwjcDBqFPYJX4mjb9e3a9eT3ZB3RdoS7HS4j2VzRw2PoqXRVKBpFK462",
  "key13": "2BBAFRwrFxv7EVY9keYEZB4AgtG4rEHrThkyMToFVHzFBotVDFX2Dz1gYujNq9K1qdjGipoiSWbH9obN68ZyKdME",
  "key14": "3VhYfWdVz1acasDZWzbTr64ESLRB3wErhVvVet7x7dXDzzPELxqXFkKuvQ9qVpRFzCzHSzEV2Piu4D2CwwMCErJv",
  "key15": "2MxVAidnZVRgbduWwqJkwoyZpHQRH8hFcq5BGsAokw8CyfkrqPEXHiXjmsfjzyZ2ZnHrw2BTygWpmFrmV1uRwKj3",
  "key16": "2ChayJGM7bhQffypGmp5k6GFXwja7kBNJyLwfUTTy6Rq1pXi1ptzbAceSoTncNWxWyhyuMpJJxVX2aMXJsuc9eK",
  "key17": "4RzaHtmdbDoT7A32YuNp7ZrxUZVPYkTv1f5eXVMWxKHGg4Tdrj1xnw8p9thgDrYJLoEhfB6rJ8By9dwNUAjrWp33",
  "key18": "3fnKywLTESvR7F3wyutXnhSH2xRUeQdepHLrS4WjWwVL6mtcKngrSAwk6yHQpsfM9W1p5CpmCYnqqwPosZcFr9y",
  "key19": "L9UvZigUx6J1os7SweKa9oZQpvQ8PEYCTm69SXrJdzN4AoV8FWEfDhPFTHxY1ckXmKKTcQ3mw6HdnjWwfa3Ssdh",
  "key20": "ve77QTEB9N43S7tSrZgMK3aQVszebSnjUpSPRpUf5LEMMUuPSYppEXCKvHYZz9KTvA217Sznv1jTKBuGdnX2DuP",
  "key21": "xHdtTfGohfJR1e2JJARQ7iJk8782DF49GmcHoBWjo1ebXRddCRWQyLzZ1pMb1uEcvL9dFY16nf4axyHKz2saDNM",
  "key22": "3UozG21MnyGqDUkkLWp9ioEJeq2xtMU92Rdc1z4atUSJVLLmZz9HzN8n66c8goHeQCbv8sxgTR7Ur68Z8wMRtCia",
  "key23": "4oYN3iaQAMvDW5JdyHRoczSnHAtF3EMLckX3dgY9dQDCBSBRmcBXzESzWrCT4ZjeRnqqLoN78QK1r4agVNeMavut",
  "key24": "49a964k9TdaThTXF8aMeYaNz3LkSbwy7tQ2j3vu9ShFvZwDwMM4LDnK62R2FdDoo1fLaVDDVgGuR8hZxv82Mqx5K",
  "key25": "3TyTaJLViAYAZxSHzTGngPcfxYWztzdjBWtGqcNK31NUwmgxJehL6qYmUb68E3FVeUYwYcaiYdrkK2xX7F9J8Zjc",
  "key26": "5QMSejU6vFehEfq4FLRYxs5PGBafrq1LKiKHnZmGpzSMdW2yZyJZFLFzCFXdTTymZMtSqughawjkEAH2qz2czsWM",
  "key27": "3RteZtnhMVA66Wm3MYEXYP5o2rxqjrPCABdWNpjzT1gaN9aJeeScWzHAvhUet6JXG87f1QikpatANCWJUxGZSAFk",
  "key28": "4GPQELnd2QjiniKFSJMCzxiBjdFhZxUBMmFsCXkN2B5nedXSGkdzWZ1g31vzRc9zsjHb4XWeVogrBbiQzohgrZP7",
  "key29": "5xjAY7XAJn7Q77xRzXBQ7eHZJHxTS75JariEaVi5CvgCAGa4kVXJ5ndVysyPFo9RDZ4Uzg74bpsBvoRmNxDGhY8Z",
  "key30": "5gDXrW7SUf7r5n5SN4dJtLSuxswqvdDpGHQdZfvN6FUs5CHMKytMjm7Z9TzqoiDFjMAsDzztHHQYcqejTpN6eXxH",
  "key31": "3nPx8UDPRQkwa8YV39rYqkTwiUAzX1UrnyXhT6m3CfAFAN1B1YgjuTzCiUMEybSxMVNdcesynQMtB1etm2vDg35X",
  "key32": "3mFLyU9Yet4vCnFs3wkoVUndrqutQuL4mS1LdbCuSKrjt4nY8DkEYkJbiRFdNRrAZW65LzggR58VVAWvKs4DY6JA",
  "key33": "4niUtJKj8cqKaoj36ET1JYhpuFmJVK1M35qgAM1aaXs2hnrLfHcwtQAZrfSKbC9gGjBCpYKeoRVSpdxD8akd8x9z",
  "key34": "3enveV3hzykZvuYGpHLVp8n3WyEUeQCa3byd1EMTTxTx5PbP27wXDE1sS6urkkQabYbB6Jvu9LdDrL4Z3Tuyv5mW",
  "key35": "4jYdXZQqWq2QnhByK6FLPriZ5fSvVVuaDJuC6PPfVQCxA9uBi1KvzKPpX6DyMhbAEk7W3Y2xzfSSkNNhHyriYVVZ",
  "key36": "2wRyw1ox58LGNP6NWvm7dMqZEgpfwunUmn3PXRyFTz2gdxS7gYZEw9aB8wWcMFFfpmEjFiMdw6iaGw323yNXVuaw",
  "key37": "3TXUwPFGzw5fMZumjPU2LotWizA7vgNzQ82YoddoNj5yvHZVv7AMkNm3Xd6UiqK9nDTo9qcLA7x7pqpXWbMuqVir",
  "key38": "42JUuDTZgRiQED3C1G1gXkob9bYy6n8yQRp1w2Ez3CJBUEf9ki3MjRptjYKokp1ZzqNiS9u4LSDiozXwdD66RVPW",
  "key39": "5fFjAZTa8ZbNABq77hgeLTaLdWyybnsVyp3AXNmWxHhQeYR4FqySVoYkMLyxSDFh5bUKVYz2XdybwoEHp6LTzE6p",
  "key40": "3KWruLjG1H9w9bfhwP2ZQPXmTMiXorneHqm843hr2pN6yHFyQNEG1uh7BfEQwaJ4xmAztfHBq9tssxXmgSeCPwWv",
  "key41": "4pZw5FG3KprtB7MYVdEEoGBfdUVaYXbAsvBXc614vtk2ZfhqVWrnk3c8pH9Cz7trbuFsaM1M68a3M7VoMDMjy5Fv",
  "key42": "5cM5aaLXuBULBVKesG5MKP7ZV1hBAH6wyUFrdW6euVC3TMe6rRJLdQ5L95J5wpm868QHeFihvbsetXiizK96T3aA",
  "key43": "3e3fJMiX22kfqmFuu3DR8yXSemMkz9WU5oD7i51c3m8iK48cLb2Qb956yQFNMucuEu9QxEtNBQ45NmrdDBiLmdUG",
  "key44": "2WVnbzsXvKtB4TXCbp5g39UZbanpd9jiV1JkHYtFgdiZo1nfgFEq68C53mtvsZQjr2JMWn2Lymrev7a7rXUuTBXy",
  "key45": "5vPdA1s4GhVsnNc2CNWqxLTocEYCbmy3FCccPDSRwyJiYYUHWxnvz9DGcmKeb7ACgzceGQ4jRoTSqLxY5xbWunjF",
  "key46": "3HUL87jAcM5hCXsjmiqAPQnwHnEJppxGHqBT16DvnmoB9vTgrP4nKoTr8B8JTo392vQLqHt391wdhyF5A4ujL4D9",
  "key47": "5GZu4yshPUhDdvY9XAYSWkuVH32QxR3fcRV6WWY6xMzvAxAaJeXQFxQdxbCejkvyi6NdKFt53sA7iYkAnMnGjokK",
  "key48": "Nxy3gcKSFPoLqv8nNjR4X9nYHfeRZFCSuvh1AnEGcJH351fC4G479XN52BXsK22uKXmhzTsWhHc1ppnf1nLpEQ9"
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
