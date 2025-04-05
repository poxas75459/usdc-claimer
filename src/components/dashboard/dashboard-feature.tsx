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
    "329ZEf8smo7P6N7hrA8ebL14Ty8a7dMc36zwCB2fo2eAkAph81oN5xSREuAERqQXS4DhgHGiTQWtWgDbqtUF6p9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R98ttLYFDmJ5jKRBNWCrDwecCW7ovdfySU2zQvTpB87V7adMZrN5R1Sme74GMnjpur19RtC6Zh39hXHWdT1frGk",
  "key1": "rXd2WRqV8je5JirNeic84ZxB3j94nuXN87pUC4Jmn2dyqnQ8UMPFPPox6WWS9bSBnjexx59VtwVDV17n8ACcQQr",
  "key2": "2vqGJWhPpUPYKkhvVArusGhdRoLGuh3i6s4nqL4PT6C5KmMXFr13MRPbfuUUUygrJPu8gTzLPLTjLzDwaQaav7iY",
  "key3": "3kRBseS1vgVWS8YmF52Fo6KKAGVeZtpMD3P8rAgm8Gm1X62HgS1pF2asFg58NxVC27YLven4V6TPCkbQnasoTzf6",
  "key4": "wcrm64pQdts9914EX67SGscC1NpJUB8sZMYHF1GtYVWzvmR1rvkj8KixwuTmjRuEztUgbi1ysPZiDcSZPMWCBzP",
  "key5": "2yXvxhg577xJbdCZZQ9nHUcbs4U8jpGangCEHqg4wS4AwmgBd9Y9vzYhqatkcZwnuX8coZ83EcgK5eCwJnfnLaMM",
  "key6": "HahSC2WGziu7DRmRbnPtBPcctvyTxV2gRCZEzDx4HAdMP7Zq9J7mGhqzTHhxLxsUDxx1EuH7NaHSPx51RoskEnc",
  "key7": "5yQsXnYzKHWCkTssFYRbM6M68gM2FNuvq2UDbvimoXs1EwV5qSeeJoSbUtpseXfyu7XNbCzvtdg3By1Gus8Ban9c",
  "key8": "5mwkCF3poYCTUaVs5v7PiD48nvJGtvwQgauzgfrBnzm9dD8xv63NdUMqskJRo56vaT9A79xQP2Xm9P26raxn1sk7",
  "key9": "4awxPrw93rfGaMh1sUDKJ3Bupono7UYFQhWJhpXV1vgrvizoiqtEzSknjViVtbpjhNmxZo57DFhu95YPDxHDLNW3",
  "key10": "4hYGQsnYhcGku2WHtCcRLpm8RVdsiVvkW76ssh5WhPZtLFSydi7yjVcuWVVKy3XBfJGkkKaUDLZdHfG9bzLEddZX",
  "key11": "38zLET87if6T9dbQwWPhTNQ7J9R9giWbRJo5LvaUsvrbymQCmmoGExqJURze56QXhHxcdijrrDYoRhPbP2uW1obE",
  "key12": "2i7FRpQVQRTBNMimNiVZqyyHgUKaJDZ9wpdwA99NbjUfLmR9Q6JGCkd7FwGqudq1LFFBnCpKsqwgbxZadynaBZKc",
  "key13": "5q5zaZ51iQD9VreQ7wbrQ48uvT6fwvtwwKQEKd5rvjWzWFEjUtpEkDVVhbRJUJmqwMnSZWTpZhZPQVkWootTXRkZ",
  "key14": "4v1ptQfnDpj9Q2scU82At2V2HysWMjeh1sXfpsB1wxTaTCs7W4DfPniSvpfBqXdH8oM5JDkRBbm99Ltsj3FhBA3H",
  "key15": "52soWGSh9iEQK3cZpPM4LbUkecZ2zG2T1j5tunuc721TKivzP1snLANkKB7TrpJT5LmaCA6rrggPNGoRkW1po8io",
  "key16": "2URA1AxLt5tq986GzH383WmbJYjhhaox8LWTB9DBn1PcHejfHiKhFbn82tbQ46moUTujKLChJXjxS5VTWFxFP8pH",
  "key17": "5VxoYYafiSZH2S1385kZTQTdbLHFqT97oAHhR5tw25eV6qYW3bzHKZfXWZeAj8iv2XWMXYy754UzK7gMDMUKw3mP",
  "key18": "4UWecz7KPWvzxdAZnHqbGmmWtRhCsW7Zt3Gv8MdKCd6SnAre5NyXu6Y96TGEHHcNhcybNYRNCgqWhZDde5SQ8S6P",
  "key19": "5YrEvPvkqCd3hVefNzmPyCtzVQ4iCihhjRcpa6K2jaEvTvL2k4DpdEumTik1AG6PRfPme9muFA8TFEhMRn3X8Qd4",
  "key20": "3CesAocKpijG4QatzAWsMvPgHeZ22Fd1gnTcvGz5nqP5UshDZxCLnpKNtgz9a2ggqhJTfSRuHW9wTpWD2Gs3U2ia",
  "key21": "4R7Lfn556cnhK4p745PWGERPnsnFCeAnNQ2kvdD4aakw6ZWPaoL2BcNYXFFxH1rbbxJTFrYaLmWtLosjEpXup2a6",
  "key22": "427BZagoF7rr4Qf47JutcmmCF186tTFNcRJJLHp5kPnz7qFMonJW5U7FRZ2FDr69MTgQwkkMVpQEzz4uWVomhAbX",
  "key23": "2ADd9dL2yZG8BJjzVD1TyKWwnMCsMKiMgvWWC6E2K51dcDDXhrjyYvSFEuQGXWU516NNKPXA4YqgXVVTrsP1GQ74",
  "key24": "36KbY9RCA1M4nnRSXmAp64wViuRKnMBtaEWKyVnhcWmWhCoiheLtnKJtCDD3CsHsa6nU9yfyR2jtbnqGsh4PLqmE",
  "key25": "t7tBGEVVkCka7erkA8hfoPBCiAqfZEQG6YtBw1W7vTDpR3rZEJwgP2jqaiaCaQwKdAVC4TCjYZnu1K4Rubnvi9x",
  "key26": "62YYiiAY6DziordoRbCJKWy3NokdM2FXvaL2zUYBtAYxbpL3gx5sLGHmqCG1ngzB8DofMEiZ44AjiMQdGDTe3o2o",
  "key27": "34YtzGDeuPUk1G672E34FPZuJE9YCkpUMSN1CJY2ypDCGDr2JmE9J8YdBseVFePSA7Rk4S3bJ6Qrvfaibo5rTVBL",
  "key28": "2fbrsVoLnVB8hbMCKxCJyxr63ACXSNRQjdWkofyeWt8svE3MkhFkDqJtSgRfiKhHFRSad5ZFUZM933mrRbcEvRmk",
  "key29": "4jqFypsDU3MLMkR2yFJdZh6iudN9TkHtX3eR8Bswk5fJfbEB4JKM6g3i2ZksAyLRkfGdR1rnkXFYn7xZ6ZfZaemy",
  "key30": "hRoNSncrraGmqU531KUo8Ew7BXtpy3ReCtvhQdAvZGB7eZBU3jQcsW6VnxbdvcGCKUwPmfi6S891G8pWqK8zdcN",
  "key31": "4gAg2QwXCe9aGkQpiuNS1BtacY5HoMhY3bZUZBoEh5HsPRUWpzZdQEAXZy4ruBt6Lz1FdKuWomu39YiChRYdyJrd",
  "key32": "3kCUaQ4XNvf7mZKeeo4THE9qdg1wmgfeUU8gUxz1Lw3Ngu8cuSQ2E6k6bnbGyUszAa8SgZKc7Ucoi2F8aBokNjA6",
  "key33": "4JydT2QVepmWbrzauyiWnmskHKuy4ibRaUgsvzPbqekJSDSP7T3xHNjmBWqNyVWvZKky9WUhGxmmcJnjv1tmrXv",
  "key34": "2affxqbqaCY8aZwneQWxTANcM67hZ4kicty9bfuV71VCvMV2FhNoPHttaZLAd7C9rMezpYJTJP4cwHaZeqcMhQMW",
  "key35": "NogQzcAbN9GftGztaPuNv261sLJTokBCrzwCwCRAkpgjpYiCZfnEaEkYGmy1hpCbM3bCQS9vrqUTrTHsRofPHui"
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
