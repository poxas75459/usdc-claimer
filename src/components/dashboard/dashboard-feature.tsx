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
    "3AsqZkbYq1C83Bbf7uUoEXs928K9nBT3zXqZK3EnGo9dRLMDHnLLR75qJXLRhY7H8iGszozvXB5CzdLPYk5iJWui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SuwjTfPQB6JnkFikCvBBPNtQJG8FobMKJYBVjiiicJCL8ue1HDL6MzdKCR4ez6YLZsPfk8Rqc6GsnwzJn2AAdfx",
  "key1": "2GN2mSUTrvNHDWf4KXdULfPD1KeH1DTVTLZvm5h8EeQzHnaMXcuqPGCNrs9iwMS16bi69RAHCHjTBGFMESVjSeCW",
  "key2": "3ZcBm1d5JAmrx4BxRppCCER1S1BM6gecFVfuKjurP8JR38RPZ4w8MoqN8pBytck6KYNhcayhUxP5uu1F1kJ5QdRV",
  "key3": "2TF7V8514LwpsyPzdNC4e7eUzKR1NkmmPAwcqBYJUTKtATgcqbH2RKFdEECn2S9m72QSPvDuWaHki1WcqAcXGPaT",
  "key4": "4YF6q6ZH7TDTR6mYvru7vxG3izADYf6z8o3xRaK21y9sep784KFSrAZn75vtGtxPQQdZ6QXXtda3y4LET7A6unv9",
  "key5": "5h4w6SfHz8jRhsu9Nd3zEaCyFPLvQaVYTmH1DzaMFQw4YuQUjhFFsQDHrLobWEJ81cPpTEzfqrfJhoTFUTg5dFbE",
  "key6": "5Ji9vqWEZN9NUw6raZeDcUiU1fTZgBmcTF5CkV1c6aw1iwNYmPkVGHMcGdgiejUKciKwnmGHbqfoCVmB5CMkJNhq",
  "key7": "2cXFgTR4Qd7pysaLFzHE2jUz2rkK4wkMseQEefpQE1GhbZH3HYnMumpyDaMVHYtUR1Ndd9CSfwtKbSUnkLyMPhNZ",
  "key8": "4oyBYhMPUiAU6SiAJuFas4zr4DGDRja58zbzNBfKvsKh7An2creEMcNt531waG7fJGwt6jKQbTzNafSNrUBQd9Ub",
  "key9": "3Q4HmAwTbrAp2CGpqh5JbhyRkAUWmifh1fi6Bw9PMe1krGNuzR9LU4UmHpaLJp8XDhmhAMymsr37d2efhn5FkEeT",
  "key10": "318efwUqFS71kez63JQxkjU1vZptxekwPnFzXddpP8jtfu3FagwEXG92GCr6QT96PaqJbybXvXTd11BHimhgV6kr",
  "key11": "4FJZtcut511P38hxL5d53XjcFQMqu5rqP8oSn8hynUpbYcVo9X5BmVfLPcqcvyFBpQNXp9dxGwovGpmFaECgMNaP",
  "key12": "26im2VciauLrixNmj7ZwvPvacgW1cqNBkbmTK89MLUxEdZa2tvcr26EPxqk8VP8StNB3PmGbE6GkTXD9MCYneSSf",
  "key13": "2PcQEEy3YYtUq65Jy1mdruJ2DFbQdx44ex2JhEs1ht4bTpPURGHtbaYVCn5BYzzhqasJfuM1iWB9b3vsqVuR3epN",
  "key14": "5YN981vN96ebJQN87yVrhq7DC6AdSnBxKQEXFiVH7cB2DS1chKMWSThqH8MnTaWGNGsYQw4gjJ9Vk8vTRyvWzAVe",
  "key15": "5NXa1XdRZ8hizf1C2KV7bWYQ4E93qTqBdVmAkK2u5DxCNNTjsVCDmKZ6ZaKT7i5vLDHa8Z28SS1Y2UJ85v7pDCND",
  "key16": "4CpaoTMvWVKCQq4FJtLuLbt4QpahP6viWeE4q2YrWqQ6qgcfSbTYEkbkRtUULtfnmMWkeBtDhAKfw7MQkV1NbuZW",
  "key17": "5srhsqQrs88K6pH7pixunaHJ1Sb4CTRhL3AYRpNegomLMFt5ozri6SbbmhUvaGB1o1upe1vHFs4fdFMNcBuDXziK",
  "key18": "4XCCjLDan3RSn8dKQrS6xQoMwPbp6hpHrEy1ZTzrKy55G7iqBdMkyiHSmPQCMxaEw6CuXhqKw7yAxn2R5CMuwdSU",
  "key19": "3A2vNXwFHTWFrUJ4PbXZtzBZeQumpqB9hKcyAoCAqbiHbcJrFpuWdpqe41FtQFSDjeVkozWnk1UpnbbahSqoE2ti",
  "key20": "bhvAtnQwpwraxqSK7J1tw3RJsAdz91w9qay7Rhtn28PcbjkVDJ6KmSnXf1m7Zuqrsd2CpXgyVh4PSp9ympzfuyb",
  "key21": "3LQgVEMKuWLVUKG1ntfVjHVUJmgHYBCYWFQR7LMtj6mcec2eoLR33axee9zSw57Tc7FgC4RTKuNtz9r7JJtBQ6DW",
  "key22": "3becATjJShogTyQpCNBPzcJSq3fqjcosNaY6WTYs6DtEqfyVpLYtVpYATudXCQ8f5S6beCScgnWE4qCCJQk5yaiK",
  "key23": "5fCcoUj2zaeMxQ9Vdn5WguDjibLmEZUuMKXRnNoihqR45Tt8Nxx7KrnF1kCE2r9rfHWJcGFag9vZtAkxBcmuUoK",
  "key24": "5r2W8to8BXDinymEq4jmjtprF1ifYimvMNs5Eboz7sSa3ZQHVVvDQ5zHmSBW65jBs2cBNrhXCgcEumKnS4v7U1yc",
  "key25": "41CQwoaGgUJ2AC5mg5SGdtnH4L3cTfVwoPntHaPcWhMEs5nZ33BbvSVKvgETFJrft7VZxkApcQzdD5ERg2Ay3MHy",
  "key26": "67VtzHaMFyRfmt188ikEyFhasXuzAtsXyKUpeuJ6DPNtfizjJpeziTmwh2j7XpZpiabhb7k37vU1NpfEDCKkMo5C",
  "key27": "2miQBuLdWhXeVhqLNp9fQVPPbxWf8YG9Hu3xmeetWHCTUeU7U4U7Lu6nxpJoYvJmZuJtb9hKayDpQ3wFeL6fiU4U",
  "key28": "3Xk2iZjV1B96VjgYrxnhnK1RKYXkBVTMv57ggzLzHGUperk8fpxjo5Rhj5n1kYRmUvSJAkAwzsEb73aCLoqqVejr",
  "key29": "WfzUixfuB4btVtUzVXjmkQiZ2wbSs9u8d3NeJZYrj8P1uwJHxKuf1HpwfyR4pqtQmC2LRqXBA8g6QHzCL2ke9XV",
  "key30": "KgjMwwDBE1PC5H2SkdEg3M7vBETd2Hcd7eoDKAHCwRH3xdPEY6tzA4bjGUavXp1jvEextbRGtBG6EEwbuhgKRoA",
  "key31": "egUnwNd4PDbxGtbUbLqeuCprnvjfngBAFCiqYc9PN2J8QXKJ5dP7aN4QDmnsWYLMUYcyDrmehHy6YM8pFnYFNc1",
  "key32": "y6eSMynfWCJmnQ5HxXeYwCopwpAJ237UZeC7QBHyayquu5c6UmvohNgsFR31jT5F3FKTB5L1cSVV9WDcqjcoFJy",
  "key33": "Xav4w5GZ9HF4ZxcW4MEsSaZt6DveTmKZ9JHec5hPMsiQVWQomUWnojwhwVpYXvS9rbuXFaXocL48EJyzjPEPo3G",
  "key34": "5vn7seRSgZFpybzJ9EThH5MmGggxLb2TNLFyrhWznestHqvHTTgEicoQiff3EtV1BHabRHwKQ9CPcereSwXTCCVL",
  "key35": "FMpDjHXgA9FRmDdLmeV5PUCAbbus1sTwP8qPXmDJk8P5HQVktxpuAqf1bfSMP3MV7DURRcFUcVSCx7sPyACE3F8",
  "key36": "5NktVzGrbGwvuJj7jJS3fZZHsn4P54wkqLASxrcyHxJNeyLyfa5CEvTpaffkMLAHpaeY8yNg7ZP1veLBDNbQ3eLF",
  "key37": "4158VUFrdwE2kcjLE4tEvKx33NngJRrPrdGV7W9AVUHTp1enSjB3fzcahwqzjW6twQXg7xSvSjRtELB8H2izmvjv",
  "key38": "554XByXNdWaocTotwwW9qLgK3zpJpmygQitCiqgZqUjwC5KnXKwcqYYsAGk4SBqFqNhg9GfDLGGgHfn6uY4Bw3z7",
  "key39": "2Dh3tr2Q5XY3s8Tah1N8nqMU7gtj7EpunboWtpjyVBcNAt6bm3eWw3Sk99AkdCiQY6sRyNppJ5LAydAr5XmM2zoE",
  "key40": "4p7GAnwox4vNBAKyKTqsrpj1CvWctdgp2S3ZB57teqkrktq6sAgg1inFuHUEXfJrX3KTGTJvWFzkmWrHCknGPohi"
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
