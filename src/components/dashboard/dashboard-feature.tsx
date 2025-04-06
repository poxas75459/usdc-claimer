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
    "5AHeiqvX2eUXRzKEAdXSsaLxqEvzTYyoxBqTVzjfDvaLCDXZduRBsjkebYmbZtGRbnFMPD45pbDZzNiXx1aVUQNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NmF5Jc52ZCJ2KNsfPFfxcZTiKZ848FSjFpovaHpby5YDd58hqvQzLPVsuiqM2RxmAXYrJPBdjqxPfv5H1bp6KL",
  "key1": "5TSYwHRkRatj7w5tWpcHJVG9oZWMd5B8yjJnjfPNVuD8QZz8pEfPiGaB1D5yTqdMSvUr5gKEdrR8ZMJjPxe8bY2r",
  "key2": "2yfRCRgCuHobn7ZmC2CNZmB9MM1BkwqBfUvtnoyGYKqBRsURfwknQrTUq5ChRv9pj1fx4JG8BRnQNmVxHAwFfoiR",
  "key3": "4e4jr8MSHYeEw2Fg4UWJ237N31XpFtbEY37sm675JqeBe4zzCxikqquXmmpfeXYXpqspUxo17HgocX7tsy32YuQE",
  "key4": "2bJcEmQn8sxq9yKRWzYQor5KZUvqi4EbuZVAaaeTLiUBVHqz5N3wbcfig8uyvfvVHjhdRNtuEd5ZcxxAfuGiHBpe",
  "key5": "4svYw9qiyXSfJE4LSVvXtmVsAzuzhXsGP8bo8eBaPviqpwRQXUTreCZQLyjTX46MzjXCyuUYjWJ6LAJqHaNtXaJg",
  "key6": "25ZAmXveHqSGifw9VFg27MY85c3c7jVjPah7cwQSdhoB6j7RX5Gi3pKu4R2UnqoyWC7KZR9StUNNb8NEyNAixoVC",
  "key7": "5y1b8denj8oFiTHzQW9v6z621wcEG1dguj3Eg2gfEe5oZ6mP6ncZKgRAYPTrrwYG5LAbjMaPXwcH7ECoea34z4zQ",
  "key8": "4xByYTJXybudUKoXk1A3gdbn2tyUNvpsZshTx7ZmbRzrLgQCo4o4B3BhVFQdboUgCrtAmFYnjqNzKtYArgiPPuTR",
  "key9": "5qLxvnB74RUemZEri71pTXAmQs564VwQowwr3PpCCAJr1TAAXwmTrn6JAkznCxNQM2V64evPrXrpeqNrtfiAw7ZZ",
  "key10": "qQCiHR8mroP8V9Enpg1hi4XHJoT6UJ9d9BbM4TbWy19ty52ftvQJ3J7zp2c8iYqFaSh8zXpoH9t43U3nYHFPrVj",
  "key11": "3NnC4zeATCYyheWU8MgZwEoCS5sPi6auimSgbw4EsaDLvLKWNX8Q4imeqgEHkpLpZrvynjq71Fr6mwKNhNzAAP3A",
  "key12": "2jeLLtZPS6Lt5wPhtzpSVPZEMW2DGfhKkw57YbsxpaFFR8EwtMWVz299FjmeP7FoEzQ1wcyhL2NaRa3SkXPTX84h",
  "key13": "5gwzNo4Mf6QwEKMiJvdR1YhVK3AH4KE9XFAedeYoZ7NjiQYZvtzk13UNCpYycajvKwtFrxMPagZLfGDCpkE5TdXJ",
  "key14": "5gBmcHjM33XuKCetfsJVGSBb6V3F55nuZVNadMTGxmQyvqywTyPmJHBiUaL2qAYbrR7P14TYBd2PXtoG9JZtbTDC",
  "key15": "zpgGrL22RVQHwLB2FaBszMHUGeb4nTgHxs34iPvKrFkXGGK2USbYDHsb3bFZ3mP1HeQ7fFE4Znstjw1yqTaJew1",
  "key16": "3K51o8mXLWe5NNmYj1p517UfEdwiEZTRpo5s6xmBwUNTm9Sn9nsqrvPcfQPoBggtTdKMcKSJKMg5yDYez6Syk7P8",
  "key17": "23xLV4ZhcBX4FQwHraDzkTz5U9GX1J4HDEuSPV7SPtrJtd2Q96jDvwaMwnLzfrmBzUsp4HYgWEhvfcdGj9QrUgeF",
  "key18": "5WrVZ4eNCDKLeXiQyCe4PmV91s4jH1zjFYvUNjbP5uiPoUxa4AEdA9buGbTeLSg79W4ZV9Mb2MMVxmiSQ8rq4425",
  "key19": "5gMV5XhDgXUWnqxLCY1HkjA3aGXgyVoo1uvEfoJvnoyWK6DnyPDGoFCuPtkY5TKZcUebSSxrBrLtm83C24dYMUmL",
  "key20": "W2ijgmNUyVt218jPVi14V4njoEUodrrBR6M2Qcgt2H5hQTxkAb477SAhg22kCkWesVVPmfn7G2u6DpBGSKeoUzb",
  "key21": "3k32SoTS3zch7bByXfGdRPsuWY2zmq2ZHexVmNvjNyS42KytPSMLgQmtycZvJX4gfSf51H6vbW23fPFfVi4BhGUX",
  "key22": "66X483oRc7FYJVQshp266ZPbaqfPUzFbbH84x3MxCUDLAXFcho1Aqbsb1QFhxEy3mmqasoCnDR212dtG2mSYhfUv",
  "key23": "29jNsjA8p9kNnRq8msuSPk5hgomXyV8peDV29hyRU7hft9QoQM3MsstpFgSCWY2F5e2sk43eAd9fpiSoXC866w3M",
  "key24": "2kb1vocUt8Ny3KU5p7Y2zDDFZnAPrZDbADAXSJy4jofEPwBmTjaGVDa7q58TBKbjakKYpkTGDzYKfkzLjgxLtTXZ",
  "key25": "4y31yhY8YxWCdPvsEzSrV4cmag6sKS1S1X3UyGmWVqDTaaP4QSCCu156gyMuCqxWp8bKQk74zVKzZmB8MrLLg4o3",
  "key26": "2Dt1uMMt9kCki9BcD6axPRgS4cezAnrmTbXeLZ6TeDwcvRd79xAykRr2fxBGauVBjUz514QooY8oJqEn6d2wQHCc",
  "key27": "62feW3p7cw8uyhnMtpDcA8xVUDu3cxLqcWZyWVTpfFdau8CV1ehXnfJ6E4fwjKSqD3MxZ3eqAN1MRa6R3Lnt3zdx",
  "key28": "YQV4ffJCNTg4cuTZ7Uj1kNGH8ChRx6tQuZUFffCMYiWNpRVNcR8CoqqQLGXRAJyUJrHSqa48oHtWaHBpMPpgQeh",
  "key29": "2DDAfCSF3xPQkXJqUDYs7r2H83ycy5fznjj3u5fVaq7jzdsPYDwgv8PiVFAChu8F9UhGjrxNAjqzjkkrHwTeBFdy",
  "key30": "Rre44oxtmdfFM6f82cypEuBsv8Cj643JGBnrr9AtGkMnTDA6umh673EfwwedYmJ4ASshj9DxGyYvq1i2kBacp5q",
  "key31": "53acWgre2NKUbJod2GkGSzdvU21hwYhv7DqvwmHq9huMdXhnyTeA6QPdDDCSMmDSFPicKYeryUemU1vooE8gunSt",
  "key32": "5AB61yD9CV1fMejqpEakpJ1kDj8ZAfRjS5H58Wo4UX8i3inXbYWHMpDnKkoNj2uC3PikqtRvftUkm1U6HMvQWGMM"
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
