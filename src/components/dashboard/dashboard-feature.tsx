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
    "55BKurKrWPw21HUarfsqdGiaXoB4TTrniDKgYHV9ox5w7bnkasPBEy9sVd3FvvfWfBrA4JywVs25aWuwuQFVQ1JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bwxGadQcg8cwzZhcGvXS6pg6Uufxew3qoLAQF2bANMorMLMDg3VoMMDukXrUMR3SF8NoNqZkJPGTuGxqUZHJpWB",
  "key1": "8YtgrEhTtcvpnTmyjU5Tq3Atmir7b6XPzhcha194FDJpeKoNEL5RSSYQmsxSVonp5TKrdURHpquaWNAxUzjHssd",
  "key2": "zHgciZx913fmasKg3ZQH2agPcDwGfVycWnbrxKBLGm5JqQveruWBEM3YbDbihvgaR2iNizRNLsMzuSEsVZYLvaC",
  "key3": "VBFxgPzoqeC9M92qUZChnLZQxAGSDR5TWxsbwSkroUFuVatFaeFtVd5pmr1P6taUTvAUhzVohimyw4keZGtAZkQ",
  "key4": "5Ej4WNTDyZydA2SLcQqvmLPu4cUUubwb9zAAFC7jcvvYCSSpJSvkpKVTwJrDLx9vKBG1GnK4f2e6Y1LLvVD2zHG6",
  "key5": "632rMTEpABneJRyeASwYU2Z1ZmA4P138vNc9UNZxnWQZTMZQyUJ2o1Q62y5L4gDScFJ4AmhG1JENWhNJZJx7Uzct",
  "key6": "4KhE8osqA66E5GFk917ZUApREtAZbCEvt47o497EAbq9AwEYGDx8bzr33FsfkY9TG4toJAb5LwdYGZXDp1CrneQZ",
  "key7": "2yQNi2VxBfkhNHsqVaQGG9M13ZsYGYycVZDAcYcpcnerk1VP9PpPcAjeJnFZEyRsEGFMRsY1rP9ExuuaYxJkciqh",
  "key8": "4zWM92v7Uh57Nk4vm46sAthd4jujBuFswBHGExmUjimYUETs4aRSSvuiUfcK4jYSXB7Z7uBp4mTvhSQL8SKdLTNr",
  "key9": "2rAWDw9HEJG1xvhv71GgpoehDceCnGi2Wqvbf2fvria2UmBT8Te8PWWey1Mow5FpsZLepihMPZu2FzS3h2vmL4Y4",
  "key10": "2BxPa6zDQiopE97tZedn643ZQKnShibBjCSyKeXmUhuKT35sGV4BbNc4WkawDsLjm2e79xtS814ui8bka8mBF4Qo",
  "key11": "4LFsz5HHjpwYv8wNMfTETmmmnjxJs6hZBXHG9MwWqdzzJ85gECZwwCbQ5qnuLFbFGhiXWvurdB6w3aji4RCrCGM6",
  "key12": "65NWKAZvHXyFuXHNoxEnudWSZJLEmNEGEJBihmzbBCQYt6WnWFsNoyiJq584duQBZLUhfamgNCiqh4XVtDCpZZBS",
  "key13": "2EbzXWt5vvXMqenTiFxJFqyUBq25Pb9SbfhHas4z93VdK8ppzK8AtP2gPtP7najoWk4zK6bdA8ai5x4GkM4j9B5J",
  "key14": "5cidpphQ6B4H9eSq2c6xK2ScwF5XPNrx2YBNNCop2sRZ7qWaLcuW2phDc87ewg7aMcEmLtjbtDVDDmcohac4mkrB",
  "key15": "384pmiKkK9NxrQYQsKgfSkFUerckCfCULvUe96BBzoLyXKA1Qtz8p6oK9ch1NjMhm9w696VwG5mjfv7eDYaJa4bg",
  "key16": "3qHCVDbaiVmkJWMXjTABte24V6i3rpMmFvTYwULP2BVgD7sNWt55ecPMAZXY3nZQCz3dYQNaKeh9aLqNxYwXHX8u",
  "key17": "5cUUUjn8Nqxripckf5tt918hy7EWjMUrXYK3MxqJkqpSdd3ZcSeH55r1khPSL5Dhi3YW7t1ACPBXeD6xf5iXpBVL",
  "key18": "2Xn1Pt294k6pNmMTdCcBxF2uEz2Re56DsDPvv2uAYdPxfoRSdLSjviUnVALTaucCmHjgwGz9fuZTX8cekgh4H9TP",
  "key19": "3bdYYrYBHDcGPacgWpz5peWxVDMj7dEKy7FxwNj1wm34GfckfwLMCqoERMWztewQ1u33jk4HwaPauLTe884bQeP5",
  "key20": "3LVCVAKP5QJNFs2DiYnoKvTuFo155BFyi6fP2xbdz5qj6tpzFhYRxFMFSkK7kNADCx9TLQtJeXt4wrJdEH9EEi7B",
  "key21": "3HjdnjqHc7CKbLACReRPQXQqzx543vSZ4R6TsYvcNvUJBvU9mvGYbrozX9Scc3MyHdWkV6aHVB1FGyZ2kybtNotG",
  "key22": "xm9TdF17KbjPieKk1bGnn4t1neYW87rScEEJjiDw11XJQ61sMoTj1rZjZ8n1cnpFARPzPmJJ8xxi7S3Mq7iEF7A",
  "key23": "5dMRprTr5rQWjqkPAeb5VrP8Zghiu2wxFYXcveyXgKP4jpxwJmmeRCtmRTXPUyFtXdeqMJHYmKREiJ5qiQB2z19e",
  "key24": "qLBNPq1xsodLGcrtqW4wHkqsKakyPoMRH5ukwWVEmH8Zv9tTeZ7zfabAGeqtLdVJNmmug1K48QUfe19N4SAuRum",
  "key25": "2b6JQmcG9FkjDHbkj4qs8XotqHvWvhnobGFkUcdNenc2cbzgmx8T69UmpnLw17EPzNtKEGNttX78Hy52q7nF7g1f",
  "key26": "4LRWXPZK2JpoxWZvsgLfBq8HfNiNgKehDTThcMr4H18cY5whi6umtMzESMPMjssFVKQymm76FGwbG9rZvrtUkqdh",
  "key27": "4MZ8mbmpWMMpEd5ji7g2NVDwir1htDWKz842VppTEwYyfBKisjWPsBt2RcVDAKG8WCMWvEcpFUP8beBvqWdGjj65",
  "key28": "49oK126kLPtc5k2R69P4qrH4YQ2i6hojSXpHKDoZ2oN5RqTw14HLwHZntrsQjWZzTnpih369b7S3zw4Mrniz672G",
  "key29": "3iDANNMQHV5D1ox2UZh9aCNV7AW8156mgtEZosrhadpZkgWa68Wrjq6LKD7hcqZ7ZD34Pryq8AYjKjdhK7SMyap3",
  "key30": "SwGHHeGQVfQGjVh3VokaFWConYKVgkbgfh2QZz1SYicAfJJxxj41PwE2CULV3BYhvLas6pJQitTRffUAHjWUb7K",
  "key31": "NrHdN8zeDnxtM9JvPGbB6SNsSSnntGaXYCKnwSfzXeZKoRpu1ibYeCVPT5SyvpoQ5a2165msnP89wpWGHUXy95F",
  "key32": "5ynngtJRNiQs2xLsp5XjioUnBYDbpcxYDdosfWY3rFm4ULfXxFs3MbK6rrYNBMVgNwHy64aJRLG9P9f46Rrn1dx8",
  "key33": "4SDNQoACWqfuuUB3B3jRago534XE2RB2o3DfdFBNC8F3X9G2K66iQhXMkVdN94RszfqsbXgGQz8TvzmJ7Du3syZ6",
  "key34": "36WtTH67bPndQtwHTWKLXeQouezYdBGmPaUJQ7n4QCQED1ysLUfroT2vU3a5AtUxX7VBZphWzK9DNsY5qNbnLkZs",
  "key35": "5bVfjZcAY1zEbsD3jN18q5BJi7ZzCFBrB5MZcv7pav2b3EhNVwUJajk1YHRkPc1A8Q14NQgopwDmX1M94mDYKfXw",
  "key36": "2eEGm2jpYN86tbb2W9GRojBcDCYad1gxVrTYF4bYXrtWTRDUojxUvPVmQxCcpZz3xxa67b812dpAhWic5v5c6tVm",
  "key37": "5djjci1Pq8c41XpVLAi9vTN9SQPeFijpy3g5Dg53xKNyxJ9Q5yEKEvdu5fxCfQUq9bnHbvw9cHeRGy9ecswTmDoL",
  "key38": "21UjX5grz5XMa4JzhQDVDupUmHVfnHRFHB5oAgBCGHLGHzgcTvT3qj9QHwBvWNxKxe2kQmsJwtEBNWhqQvKvQKP6",
  "key39": "4LyeZdEWFaTK1JxVBe6tgmUG6FhQPL7DQGXmjR7gucuUZoqvhFJ1d8Vgv2Hj9BBeXMzqrt3WBkK5iPiY2teQDzXf",
  "key40": "39VHSw8GRJNW5ZJ8fcdjdqQ1nokfJBN9iR8Yeq1nMbHa8ba55p1SAfya6MDyRfuPQoASGDpmHq8dDWuLYMxiNaHr",
  "key41": "5GfzhqmjD1yK6zqRknYTQtSkiDQioUhADfNX573W7YRuRfo8dEykkeK5Lu9vbRt5MF5fDVh14NkAezwxuBbAtQxV",
  "key42": "5xatLgs7Q8dfHXyJaQruyhHa1by6VY94KUq1A2k3wNLuJWUfBb9YNqLxWAmNG1cgd8CTYb4NJJVMdFagxMEt7gZK",
  "key43": "EfYeud2dFw6Lei3TXU5Td2HEtPmTttG7vJT9sDB8BrZvaipFu4xc5c4cDPdK8WiBH9CL7aP8n29y6HjWgwVtFxT",
  "key44": "5MXSoM4PNHFad7HqXYWp678a4XBzuiizWspkPF95qaTCGJRayZPC25Ac3k8R8i3LQS2QogGPLnc9SGWdj5V49QBX",
  "key45": "33zt9QVKk2ECEbNHnUJpvseMQdYMssPgBLwmy6j7pZpuDZXt5Bx4mTE71SrKKmJLW3dZNmWDom3BLAa524CSpyuT"
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
