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
    "5iWn51KDG1mCb3psaz4iR7Nq4GAJGozx7RrbcwBBj4ryYFrXybppp4HexKWc52Pe4Ry6iFtRYdSDJruroKpaUumW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LgMJZc58AY1d2wK8xeDMhbNA3iD8EJQoZnYmfWG6nr6Gm9Ce97w8FkG26Yj1qP4JKEVW8tJ1KYhaLawFMLeZSPE",
  "key1": "8eUkurHhMcuhnBshbpZrmEPUg3CNmYsrDoQuA6zeSFEbgvQ8fQappaEGAg5mzTwJ94HQLgZrq1sXWwHU4H4aMzR",
  "key2": "5PxY9SV8gXSudtncHPPNERJea2vRePcCA2MUAAs452e1Rctu23wgPFKnjjSXk2Vv6d4bbj1kPu1NNAFmb79vJPTZ",
  "key3": "3qGfGuNMfswoSSGCuYhM8GNHBgEaK6RwJDbQuuBNjoY7HAEBug5cTKsjGeobFooqQp6UEQk2SFUvuYHnd1cnNXRQ",
  "key4": "mfG23sGx6dkQ2NZsVWx2RXGjcJ3GEcP7wCzGdL45MjXKW2iXvykEJEKN9XuutT4FfHhRpPSRxnjzD5RthEPiteb",
  "key5": "4HXqxMGSahxYDYRXr7GmU4QdkFCLv5eQsJt6EnMM5CGPTk2TpcNQfFFfr8bWuRLZUEGHnmcPiA9Q4DpEdjk3N2aS",
  "key6": "eZqknH6pGHTi4BRov1ckQkizbZJJ6uzHWySzbM3eGgXjJ1iRSLEi48LD5R6ZHDsuSG9QzxMgaZpQvXPPTFjqfxm",
  "key7": "4avkKKvFBCVYByPjWrKpQxmgDiKHs43vsfmkLc16oiGbe4RhqyzCQB9YqK8HTV1y5rLUSd5EMynfcxrjupfBKTrn",
  "key8": "sTENK8DcDuEv43yzBPSDTPrU8uhfrFQRU9qpb3bJnp8WmsrFhkZWtrGfkwuNbVF6N1RfnGBCK2VsvYBWjLBwtKv",
  "key9": "2kg2sU3VmVJkfqLiLnt7tgWuVV77cK2PxtbkvoYF8GkABRsbnFNUwTDMLZE7TheKX3Heuq9TpNvAcaRX4Py6VTRm",
  "key10": "4XMJUcXwNcug9h6ZBZfi6nsr6BjPpbj4Q2dq59mKz1pSeChXHaAhctkrpnPcuAqyQYVmGTbgVygcokNKzwfacRs",
  "key11": "RG4qd8tVWVhnNbQ3XbL3n3Pz1SX7kSjHujkC7uGp25NtfQqvoeSXx2vmW6FQCxdY3THdPeU7xGZcwRRG8dBWAwj",
  "key12": "3Y2qmK95wRHb41X5maG2KZMSS2ZKYJCDNmphcYdv7o59rdr4YAfkoXiRd1y543M8otJJeyZp4BFXgZXv7Yi1gZz",
  "key13": "54W6ZcxRnhg2UmJu5ecJGheb75kyhXaqqdnxbqZDeEBAe8oHMhuYpwGwZNzYDJGGuT22XNEh2eCVcKd7VSQ28zBA",
  "key14": "4aeLeDwiBCotUEoRXMK62UdniudbgVNRJxfK7mfcCxLwZSq4XBgERDedLxsWVaYT95bzG382w6j7GUGCVtQYAbs8",
  "key15": "5b2SujxLt5jfL7WGKdu9TPAjHeCkqBhUBdksxHvzFtrLwBt3GEgAK7pm8TDXrv3QDya2DYn4q8dsEeZYMWy9hR79",
  "key16": "wT6PWGuQhEZZNqxTwpQVS6i5Mc4gC8tGoM4YVt3UhJrnUfJm16c2647VWqq6BpuHQdULVj5VgD91QbwHCLmU7gz",
  "key17": "3qhiRgyY4WUiMUPu37fRm4qukzTnhw7ywSdoKc6BaFK97UFs2QVVoar5CVKnYaC7myDTMwdka7DCL13TM5n3p5ji",
  "key18": "5xY5VYZE2R6kBgny82gkZWGwZuvSHySprgd5ka2TMXJvhAyMYV2dskFVozVLFZ8BQUuoa4LT4PEwZ6RKPiUEg8zH",
  "key19": "4Ba3JGJP6qvUXr3yFm4DwHydeZ9Wx2H7GEQtBhkguENrwjLG1XVoooMTgnyEA6imNVMJAAw2JqSE4p9c1S7JHbQF",
  "key20": "3pvYhvwvabaSzT6eu9V2UFpqmAWMwY7Tm79s6TZKacsxsidTorK31E14QEzb5KN3Z7aHuKzbkpNNt2pVY6L1yTmU",
  "key21": "2UKKME7ramQpvHwzNcDcBdFvsiTuA3LnejAMJP6pXBCEYYkX57VfPoQeVvbL9kbb4KxtDK7itxNacbzfcvdaqqKB",
  "key22": "Etig7hzuCnyaZp4jM2Y6aVYE8Q2RWB6guQ5EjHpAFP94ebSPrQjXPHKPAvC4SzPcPRrsrKk92HGLr7iJ2eMYYQY",
  "key23": "5rqb2Hos6yDAjNegFx3hKC2fg6yFeQn8f2N1pR8HSHXcfAV2KNKZ5FVtxUdAiHts5g5hr1VS9ukSUhUJjc6fWXS",
  "key24": "g5qqHGgccUhke8AnHcc7XcezU1rbQZwSySmoEfLqfeYEipXFWL2tx1H4y8DgDgWQvnS81MNCosN43Hvppi5MdBR",
  "key25": "2p41u4aauf2h8RPpqDmamiW3XeZZQxYbezYwNV8yh82QgRZ2wcHPjUVrq1BN4zeFWETPJmpLuPovnNZ93yYnVW4H",
  "key26": "5ZuqjtzYEwcEizmayedhrzCqwb9BrcPcCkg67qYjDTjKhpFBnvyuSRaCyo3x3Ho6mFyCkczP24adBHFfyKjxnDBh",
  "key27": "42dNj9yJwSYsoqTDWb4myKkmJH9c4XoD7c6cHnthuLzdhna7Zqc9FuvPXhzMcWxfiTFzkLhdSwr324bymxun5KWU",
  "key28": "5oJWXaBg4iQvFmmLcnqxAKSVcA7DbioaRJGzaBxejfg8gg8iimegYyvywgW3ukVx3P3jv78vnNa2GF9d7KEffvyR",
  "key29": "5SrRht9goEoVfuGNZcoL1rgTNDMkDoj9ZbDHgngvhGki6WvoeLJFbTjMNN4XD8ppwGpXsBDpsn6kttf9hSZae8YV",
  "key30": "55CJy4YHBnr5cWARaJfcvjVHcASdEtxJfS6VCNeVWzHe7KWUkFESf4su5uqX6x2WucX19L5h2PLrvwh9dpHGuWfj",
  "key31": "5eg4SdBdwJK85egEsqX7ZNMkUDJg1DmRAYM3JWxPqit5QBqpddNim84XfyHJyRZBQ174UNuNKegMzatshm2R6KKd",
  "key32": "v1TRFkqkLQpAUqFLvpDQBp8xMHmAjZp1sfwjGLXSA3t32HRobewzFcvJAVAxNPXBdaL2gbMAT5HZ2RaFcLbiSNW",
  "key33": "eovCiedCDNAZGcGNuGBoQZ6idzYALfLw1mo1bm4NwqwJXzR24h3VHfRbbwcbVvKrzdmKAgLDJdhNNiVfJ69GEoF",
  "key34": "xFWgA4ZRDx2qXkusmjcPTFfcTUtoiZ9omc5Cscy2zL3ndCf7jgPKtU9SmDpVc92Utd2tJ98j8Fz34WwVzR1XWRx",
  "key35": "4PapbJpBS9GLEYBV6TcyazCBKtAiMdbvjQBxFbgZJm6MrqmFdBhDuSCNPHYTXeJJe2X8hzGozP898H9kaGQX8Yn4",
  "key36": "41hdktXBUCMzcxorstQkQWBC7UfRvnao2xNLyb27kwa8nv33wCZ1W3WqFtVxWkJdotek7quR9MqRsDQSWpvW9G5j",
  "key37": "38eYQDGfRCaS17x6P7wDoD2ESEuFWtFMWktoKFfuxZYNNk6Q42DeWVHqLaPGa25uvq1gBq6Ve2FCQ1a5Fq5U5UZn",
  "key38": "3J83KW1BV82NVuL3yQTPerU2w4RiNaanbYcwGsf8QEdEpLA229NnYKyVeeuvhNmZPHm6HsbL83g4qFvyeaHjjQg7",
  "key39": "21EKezeSrFF3FM6PEDAEhzj7R8fo4rACLG1AKbtKWBK2z8o7oXYfr18Vt4DHd2zAfCXLGpCiH9h38Tp3G7SyZQWq",
  "key40": "2yi7xEAvHSjiNSdC6uZhrqnSiscdX1CEUsi4xyv4ob9Xwxofqjrg6GD6EVZ8U74x2Cfgw8p6c9gxxoo5mCNHhRHP",
  "key41": "2tzb9noj19vtWoYYPH9CY4xLvNVPDU5bGSvNUj8s4DxhaT95GgUQEHTAbeCt2iVp6AwTiFhdXGQDZn75w891F41L",
  "key42": "aUD8YkxGisu4CumJtdZ2bmrhfYPdVhyt3W5iZqNAAJY1sjir8z4RTQzLrxVURVm6GxUiNshgiW1oWe2joDfpPzs",
  "key43": "eCSh9AVX7d3kUNgFTN3g1c3UovCoTxX9jheP8dcKyC9MHyu9q8WGPCvnoqSUfthqsYPXY7Yn1EWPkDcWMTNRtiT"
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
