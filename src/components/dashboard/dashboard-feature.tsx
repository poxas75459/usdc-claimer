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
    "31tJ32R4m9fECTiPo3NwTD3WMmEFCnsUgvSjW5qo4hZCP4UDBX62CGXDvRknJAUwW84Qo7yDSr2MFxN4Qvqwu9X9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AU8X9AhgxZf1k5sp1tFDWRwaoxyWRD8VRpeddQWZpXBoKXseEEvEVb6wutxV6oztFnjWnWqHtZMxG8iBkXGxBKR",
  "key1": "2Y2FpC88GokMM1BhxoQ6AYU49dY62UW4uNfkTvhUKK3m7hvJKztY6zKvpaeACnVFPb51vWFUyM1Y4Ftz4JvGCquZ",
  "key2": "5quxREkwGiRR1UGsEAkdhjSuEiUDigooYKMCFtkTTCnFXGKc4LipVdw21jcbKi89oDNugPVWg8wfwdj35BRc95EW",
  "key3": "4JD5x4Kp712cTKqFHS7CjiLvCzTN5Z9c2c3um8DgDNK9KvwdWyXPPyWF8BU62qigtRyZW7PPwHQRC68Rmr8ipJor",
  "key4": "5DCFLiqFPDRVes4L8QLD5Y1ZNjM6EnRCDBmv1MdJ7h2Z4zjJVXYdjzNPmQtTRbr8eV7CfPm7svH9Kf6HUNWQhR8m",
  "key5": "5JYQ91Ntzt1afzUBoRHLhsEMS8Qc3ggDKp5xzduV5m1jKA7NLpW8BfKs2hhRrU4aXBGk7uMRHUo7casix4AvnCUX",
  "key6": "2dahgTtw9CPtEWgrV3xf845dSgnmCRuzcXRMyN2AaaVDXfyZM8MdjP5YrVT1muJD2GMD6pxrrAjMBYkATnviLX6F",
  "key7": "5KDhZNgmU6GHeGn4Akqbzj8y57Y4scmUGVHPpNJANuL7EYRH2bFSvFNRMWQ5QHkw6bA3dXRhSFUVr8wj9Wm5isPT",
  "key8": "2j35XWzq1rAnTmB8SeEMrvTHEuHRHXUsyQEeVV9cqE1Qcrj1JkkEZ7tQwrnXBGqMn7Mu7vEzEBPhNorknpxKyivt",
  "key9": "4rUHn1UUKKu8pfpFToSM2RsW2hhehHEo4oTMMYGZtcLpZzS7nMqPhAnBV4Z7hYhbVaDLPVZDHp4atMPNcDf69AVb",
  "key10": "3gXFMRBN838fhvYHZo2QuwTXUDG4ij4CX8n1S2UMyNs36V9CNQx8QCvutozxDQ6efiANXpqZBznhYfkanevdctQb",
  "key11": "LpqEXpKrUhbxxdp8X4swFoNiYWLnvEXrQazaASGano2cH7u11zpukRxY6NuDnAEK2LMpgHNavPoAA1wHS8f9DN9",
  "key12": "3dSBMhy8n4QqBqWDPXSVvyshANHz67d1CgrNvw74Ww7xp3pLi1cbRh93CLxmLfGw45s4Y6XdqmnvFs1Us9pQA6GG",
  "key13": "47B6rDLTUB2XMmpmoEaAqcnoRk4NirEJuRbZZEDZYWi5yzL5PjryWjRzg7fhseHrHNUsbodF7G8vjzFY1nNxBd7Z",
  "key14": "4YqmrqpuVrRR1iRK65rL9H9bww2PifiVb3immu9S8Dgfhs3yQP9rXwj4c1amQtXBpsQfEd4Qsijxan6XRrRbPsUU",
  "key15": "58KQPMySovpgqYAHzVDPE9S5YKoXhbngRL9V3KEoTzi5Hh2iPEppjApPfFGGkEWD9EJYToL72dfJ4EsSzk6UMPCj",
  "key16": "2nibQCq7Pqihc33ALhT7BDZPgpBjQFNKbLLYUxsoDcqXczQiGeocA1vz2tiYUAdioLMhVmUqVAmuMB3q8JLcyP1N",
  "key17": "3QUnDkG79Qen7yqc5maA2f9WgxVibfQTj6p1atribLoeyYABULpUhLdNyS8jaEURjh2HLBtxqrCa3UdwX1tAC6ER",
  "key18": "496KAyMaJPBxKPx2MYWUtFQncmR6aBbkKPkhGhzAhLSFMEVWbTbCEZXnNiZzTJzcjfaUCGjy9qEMz5rv8Bmgfu5E",
  "key19": "qbpLeb2K58R9Ui7j6Q2iVWxtKKvhxX3VZ4vjMnHFc8PQTBXQmQaWu59JtezTiVjGA8KmWEsHs9YCotEBeccb4s7",
  "key20": "3fUVAG13ToaRVAwnHe4uJ4L4n64BCocoYXmHo52BYVimPrppnf7Zu1na7EhDooq2beNBN3j1xXb3DoibK3jRJEEc",
  "key21": "5mnR8gvYWnaMgow32RJzXZ2ALRhsEDmK3oBRUHaiVLopj1FsEpXUyE79N9YAYAXqW5rgRgfqvh7nG8tCvxhbHqKK",
  "key22": "3bbHyYrBFmB4hfeBBrw45Q4rozScrJRn9uXCk6CTsT2KNequFV178pjDnsG15mmJmYHzqS8umLpwGcWFJS6RUBGD",
  "key23": "gtqS6XRkGahxBdDXZr3pjcVQQeBmimE9N9KwCaMKMpBRDfzMBDQKYwqGV5za8XN5XaGTzjv8uRG5BPWD569wmoQ",
  "key24": "2SWENyNa3RtsqfKhZ623S2Nz1CsAZWCQKK4KnsT5SJ4ozW6wd5WvgGW5FWVai64PaNhQ6WYF2EJLJvBzPkiUveJa",
  "key25": "5VgN1VaLosHe8xTBe8oeKMSprg2c6GNwCweczyNrnu8fgVQe26xVnNfjs4aMxmSuFTZPH9G7crLxHwvJSrzLuZKZ",
  "key26": "4662N6q14CVC1U7jgGrJE9gf5uGV6g9w9DgcbSWumCKAmLKSSZqF6MeCjQdZTyMkouFwfu7ZnVdoUsvErM2Sr6pG",
  "key27": "2AxFCbEJELUFo1zvtb86g2YmuiGLdu5XjoksQ1PXAQg7Zry8qZMt3pLxcckVbahChfoPiYrwz5HFg7xz7SBgMLJF",
  "key28": "35Y3yPQZpJqwLbrw64b9TiYDccUjcd1bBN3XgUK9zSvtfSkNHUwsYy9DTtoXveKqaer8QC8JXjsmftB5MbxUQj5M",
  "key29": "cJuhzzEzAUB9hMWKnVtZTr7vjbNv7LTV8gnxXe3hTuGLwQ77d4RdUsHCQNiTEaSpsK4S4HxUKUHZcH3LroR152w",
  "key30": "UC3AijoLtDLguBNuepoNNbVaVDRHEuahBKijFnFEnJpHXsNGBUCSyQkcWbLss9UuzVf1XYX1gwcpjRCxiV4eKir",
  "key31": "5qXTK6brpWfHbBzZK9HtqLpNSJDF6qEJEfYncLMEPg5ixGqzaeuTXpKE6V3cFQKyvJiru6PqLkwo1D188kojzSm",
  "key32": "3M3WyWBYz1BXh7g4KQzcPVaFupo2QgtMQ4itchUhfvg46t5aK57BcjrvpPv1HdLGcuk3Zgy37ajgfVxUdvofibfH",
  "key33": "638JgvZd68H91vSDFHDcK15EPVW6RF9itDJNNtaDVxWET4RefQiYcYJAxfpgaw1CBRnSNo5bH8q5HgWJGzBHS9uG",
  "key34": "KfS52PsfGo3HbAR7bNPi9QD2CoAHEzddtN4V2EPYN2zwUjydSeH2Dspkp2HEvByoMkV36FzbCsSa6q4YvZD1pCB",
  "key35": "3zbciDcLY2YXE9fstzZUqyozQeVLTQ5iUyKi3pwKZq7Rv7MvYLPhBBMHFFxYyu6esrnKTjAjegT7xxjU5qtVvrm5"
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
