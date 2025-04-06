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
    "JgAdEHkrp9Q3ejWRwH1PQm51TNzwfU34yg8ZwUs9befLBhRzDiMAqZgF5J4HoKSCvgzArjMrvhJPnq88dgPk36z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xhv8rNsEH5tJAsMixVojoswUae91TTMwLox82Ydna8sU7jeL8t4P8UoiHLvuSpQ244bnFMsW9Y4yfdz98LmKU4E",
  "key1": "3nYfS9duhrGA7zMvW3917ZrVSjGFu9WsMbbHKzMsbMZmwXmZ3V65zGKvvQTh1ZjaiVRmqSM8dZ9g5HFxwS6RbLeR",
  "key2": "2VbqBJ3Rs2oxv5vevtRpAgK1pJffX73R29LboEwDjAyL9tDqikYQaoLyH8nZJkdG5gKi4smUb7xh3iAXjDPo2Jix",
  "key3": "yKjCRt5NcLw9KA3ajy1C4oEZ1VQPrFnWE8cPqeywPFVVNdU6HE8UeGeDFD85cahxo9Cg8PqWusAzsuLjY8Bv6mS",
  "key4": "3dHcpqmEqNxnzVm6nkXAriHYv741TjPQveJJ1isz8UmTnvqzup7TbzfRWZ4PtmfJQ8ereUUJyH1rBuB6KVX1PypV",
  "key5": "299uCphUthDHPbDLZEqg8Xokd2t6VjSdNPdHHPgwPoNDQu94bfgmizGsgA1b8xDUREvKA4SZ1tTjubDRYKQSnrXw",
  "key6": "qcnCcrxbpm6XJ6d3Ef41ouidiaSKTqWJwf2X33XAn7JWCpTswCWTYUe3xFYPGMXDKNDiZrRa29ptVtfLe78eMgv",
  "key7": "4BJzWt22RqZ9iJjDJKM4C1kd6j5wy7sEhakgC3KepXuohnS4muNaZV5eLRQpY5EmfT3FJsRcmZz5P24aJaeAyjnb",
  "key8": "53DxbB4D1wYhcRgXHnhVGhvJsndPpt9iivnwwmtQYgN5Ce7xKqVNk1Pz4QRBUTgrqdCEoR9rf8T6ANFy7M9NNZfC",
  "key9": "vtznXCUMdczB6qcjdgEYp16dcfaeGngSEwQaPWtvdJE37htvbYo19aax5VAmawABd3QVEJwC7WUt3yYpC8SjjDC",
  "key10": "2gWxH8PjW7YhGLWFqvzy1sWngjhwXY8cTW8f3eoBqrm8pZvESsry3MZKa7q1ggfTGSfeqGWvok1EZXt5czacKugy",
  "key11": "3yNMrNTQuupuHYkNcSpGKJPhHo6e9USE7HYvAkYEnzpXp2XcdNHPoZRbzv49a8Z9NykX1bXjP3zsy4VjKKg5AexL",
  "key12": "2a6nvXmtNwjQCk7ZzvWQFMRuabwrKD8oBjvhhrGd3LPHrQ5YH12uXyvbKBNdXWSKBPdfQwi2HiWtTqmZw77dHWqG",
  "key13": "BHyAKTQGdQtZzy26JgGDFLXrt1zy4hmgSGuAo61DQQBEJxM3caue3uVT3mLz8yDwrYxRWPpH5vjvS2j6mQPkN6c",
  "key14": "3idNRwNmf8WEpxrB7cwzpj1rGKgAvgfacve1H5qUpTQMFjAUjNXWbopdVpfbZ56RDE9cZzCubZMXqqr9ATSzWQTo",
  "key15": "Pu6va8usBk7ANEdLdpRhmurRYfmzfvTzGbhrh8FPL1nTBqv52PL4U6wQMF6794PaRuRvdFj5Am6SdTrxwmZDw1j",
  "key16": "2g7LpxJZY6iVFGeqwejXyq5GFW5RiiZguhQxmsRjUofZkw1wwTJYesHXtr73zTmUicgHTzwGt5mW17pkntdp5572",
  "key17": "zGjZ3WMMSRoybynHPrfcNMqnumm6v9FywLMDLF4hu9MCVPDroEFsZACntgScDgmAgSihDfuhWsYPdAM6Ao3zUbS",
  "key18": "5pDuX91UPjFPGw16FuiBMRXNXyD9nrSjjoKsDuTND6W4EGDWNxU29t62RbbEFWGTxrpwBrjShbUfCYBGayhYEQLA",
  "key19": "3F6kHofj6hbNN1mjjzT8vi4JWi55KMrVjKfc4Z5bFg8bRV44ECPmoHWvGncxd3xfaLaDMxzbFUqXjxX6UYHvdoFL",
  "key20": "3YitWdNwhSw55TUzNitzBTrCrkkWrHEw18YhLYxWT4fG5PEvhh7bPp4Gc4hJKmF34pFeuNUSGncr8CepVFnCRsec",
  "key21": "TCvPsVpnzT2kiKwrBMPNnksq5xrz7qvNxwWfR938bVJPv8owayeDEuU5LHkUQXbSpkuWbS9W69Xc95AGaMpg1Zd",
  "key22": "62qwywv8HX2m3UTTmm1nTd1iwJXCrMT3rQAfmJqa4UUjQu5aNUmFdmhSFruMaexDAQ9YdYKMwoz3JovbxYEbaHyu",
  "key23": "2Hid9ZYtGLvVE9KDoLZGGimfRgekLFV5jBJgJz636Lysz4AgdcbhFRfysLDD11NPFZ3S3t2SnZTeWeYvG5jkzxbG",
  "key24": "3QKQXrU5YMNPUQXG1UzcykiMPB66KoJNrNzqvhkx95k2Hwkh21pLkG8uBq8coLpr1Hjs6wSmykifxhyAthq3vun1",
  "key25": "45Grdczy6hMtByZx6v1RWjpjFrAsGDqJe3NPbLF8Hc3ckFAmeSZJj8UFcDkqGV7cYAgYLSAr3EAhFyTYtynhGr4y",
  "key26": "5Jvhvgx9PXcXPvj6kBRhtgTpLRPkyET4SipxLq1sN4rpvx6gHkaS3uFZhHNoWQLUVK4HHLaDnMf968YJSKCe38im",
  "key27": "5Z7ZUksZF9QN7QzWDx65N44nxbrQS9FV4scyS7GUffrZkh9KgJjxBpSV2o2c7G2aj2sF2mgPhQkxr5m7CgDQrJ5z",
  "key28": "2qRJzhYo4Y7aCxBzUebQEHVo4dQ6VvXAiocndLKst4qmKPMcrh5piSfjsrpAPrPfXGrBStaxVyRkYwLdMtiWzCJW",
  "key29": "4xYpFhv8jEFeRgLuoxyxqEw9SoS5z9g8oxUwPXwQJ7ovLZThcYsy12WbQ2tbdZH2BzGgBZw63iRjjUHCoZNRkH9",
  "key30": "86cGPiBzYNsgfiVDbr9d6UxJ7Bea3UevigXP3xfRZ1Cv6PNftoTRv1tCfmXgeF5FVFT3pKiohn7zkWtE5ye3SC1",
  "key31": "3dd1jnyB9qp7rYuVRfGndQH8g1Vm4eQDzHfoXuNjH8YhMQ8uU9gXWBT8FwWj5ZRxBBsmnbtmpyJMHcEDimPH5tkG",
  "key32": "2FkpyM93xmoPM4mxnwU7zp1fJH1iU6FZj5pzXqFaSAy93jEPeUy8NVHUcd88rZ4LksHEbQ9an82mgekNCaHxJtQj",
  "key33": "31WMu8XtYxJZkvdMY3mh16ACZKns2JsBcQ3UV2u9b3aeLPRZrG75b3uC42H796kjPaamCr5ikdtFPdDkTSxH8aGa",
  "key34": "4WaKVxiEjhkDFiy9XLJ4WV1E8dDWSa9KJ6PSkEzoAiBRgFamCYEGKVtMqYVoDy7fX8P9sNDns42T8YRVG9nWtFYx",
  "key35": "3utjL7XL55U2gfdVdqjJ8rBvkDkkkpdoL3ApDJ8xeJzwRFGSzufgs7BC8t7w6WTPnbeUJi7579D826Y23G6rbV8Y",
  "key36": "3gt7JogUy4PWqdbvyBt48hA3axAiPgKYGHiLuttieRE7VroNw7adfRkE8D2mPPE7RGwnn2rTYUFuuT7kqT5sBawA",
  "key37": "5reyUXBEfzK5Qj65eHpsdSuDqNkeMzsuK8eQVwKRDguVrxmtdK9dejQC1nwb5bfeL7UE9L7VqbxWQ6f54Yk5oQ5L",
  "key38": "TD6Rvt7LDjdodvpdB25PBSmgeYzXptbASNWJ4jdVPZqRmF3jLKf8wGbKWTxBFNra97rJTAYL2x7E3tcjtsKz7A1",
  "key39": "39RksVC35uRVX3isjRJt8smEkc9JHTJWjoQoCXBycBktFwkXNvLj1XWuKoRFA9dbDoUzbFPYsMPhxvS7EDzBuiVX",
  "key40": "4MRZH2YLTBJSLGgdqU831VoucshBL5qrHxAy1TRXoKhCELh2HTh4cU1ckBUGKmUJzJZ72i3AttKwDf87A5oHZokE",
  "key41": "YR7BqStaobwoZ7Syd8d1WXFqfM5MHnMvwAhKn2wZZHK521nemtEQnEnPA5r7E7FAad8bKVQUXvCFRwaT4e9s3VC"
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
