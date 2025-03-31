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
    "2J8tbFcauYZAuqKcj8DARMS9M2mdgLD33Bidhb8QUa9JunK4DPSzjUo2f33XUHgwM2y8NfXfLBs8hKYpq1kCBp8e"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4gJV55SNZ8DvjT8ePryqtsTRZbhzCDXJULp126rqCobeV3yzsZw6D6k1VNegqojfEBpy8wQJ6si5za3J35eworPT",
  "decoyKey1": "4baWc7JHs7kgt5zcwvRm9WHkpTLKcJmqCWUhSck8HDJAADrG9KUeLDjWpQ19ZcRgX53SpddG93XM6X4g9ohReyHH",
  "decoyKey2": "4GM5TaB89gYHgrE7sV8K6zfbXZfWcaWMHTXxw48wrZEzWb8963JHWKPWTds2kRFkfsx15KETbvZmA5tfXrzwZe97",
  "decoyKey3": "25ukYRQgUBTVX5apgtdkyCf84JRAaEMVpwzo1gLLUQ8iqFCMe7yZ7Wc6eHfRbpcNctQGqhy4xWq4YHeEzmdne7bw",
  "decoyKey4": "29sDCQBXyYQmbyPXM5Rj6HeRHUDWD31KaxFrkbh3PFgrvDoWumsVWyCzjQAJUTpQfSztxMPYnBtLLYd7FNzPZtt2",
  "decoyKey5": "4cJ423rpYxH3s22m3epN1VQR2pLWUyigbeK7HJQ5uUQ5N2L7UcuKvpKMrChpP9CBatAvKfwvZ5bKDAyHgMz4p1Wi",
  "decoyKey6": "5hYHJbMkHCJDa3TpTWx5uyWMMtSUjKEuU8bcaGQVFzgmgAZY78JLRW14JUpnReDbFt5b5kmaMpJ1v1icWu1eMEyp",
  "decoyKey7": "fWLHA9oTH5EbayrbbTuXeKAFpj7EGN2ypfoVn49PpLZjtWpU5TRf39dJq7Q43EebC15m8a882oC5h3f8xUMHVZ3",
  "decoyKey8": "FoA88dUPx2sLH997tBZKgPr8ZixPvM3LssLAcpDvb1WFvvVGkJbJumwgXDepWwtGHsrS3U2QmfU4d3M3T7VD8Vm",
  "decoyKey9": "CBw6bhbArt8bUZrJfcJmfr5gSHHaSnZVBL6FiaAcAhCF4WDuhhod2Z61yMX5q3F7ps44PTZw6SR8MJt4utHGwj6",
  "decoyKey10": "3G1vo1yk7qFt1aydRqMt1knnzQojPn8GWJQkJzK74ig3P8jpFkPpC6NhBvqTyNBMANeeydEG36Ud7iqDMzjVjoKv",
  "decoyKey11": "hyNXUxVvJjPtw4PyAi9oD7XZmu57MiapEDR8AXRs1paUGuLpF9i9QH2qLsMbZVRKxDB5joLSpHajGs2BXsgrL9X",
  "decoyKey12": "3XvkrqM88anbUiFTQPizhxuYFLAbAUiVfdNKQmxfmDmT5vxkbrgQ2hpBuMR3F84j3KXUYhF6gf5DRDdJftocQW5Y",
  "decoyKey13": "3M318xb7c6cT7RsRL6xCqDhm56DBdn9snbsMofJnPijiQDHx9NV65wqmkNba3UBeVYXtjyAeUw3zHmpr8xmTBEHK",
  "decoyKey14": "agMAX334zgT1ni1HN3YRXpyxwrhtarM68Na3hapFuwDt7TSEwphxUALjohKhuzoNfP1ksC7cbdrxCdDK7R9f2tL",
  "decoyKey15": "4vVSVMy7n4pqrtitEsaJxXNdZm8KLvwtTF65uTSGw3RWEmWzt5iPasF7dAcyA8uqRFDx3YXxuYAcmFzoKXFkjHkW",
  "decoyKey16": "3uYqt5i3CN2U3DLLTebhnSb6P8fJYawtjNrSpnpYCvjGovSUjVqmPFx7zmHRgpvyFiCDbMnGq772cCsukbdM7765",
  "decoyKey17": "5LTQN39AT2qtemEpwYFSifeFCNwmMNXXNJg97jnLPpatV919KEKi2foCVb967TeZY5ha4rnKLkzkAP11Xd8gifQv",
  "decoyKey18": "3KceRwpudpuTm739BqkCtKbhn1P86XbFuzXX6aDuYtbyhmHsiYjo2i5zuQwk39y3W63bpxvUVuSJThDvjQegdkjL",
  "decoyKey19": "oXTUAYQyjSdD7dKhbZ5iHfhMQTZfBBaHE9ZAT2ivfrWyAtoMgJduyTBNy5QBKMNcbHwJsv2FsdDrxrMeYfuDoFQ",
  "decoyKey20": "DZNs7Zi9F1mD6V9XDFgmH9HkqiWvmA5bk49HjdUhbWcijJhugb8Lh5hpgNNuKwKbdrnFcR1AAuNze88k3pPrcA1",
  "decoyKey21": "4DkemSjgoPQXcKsGrp3Lj3x9h2c8fBL1HCcXQAvNVBkTbhePDM1ZbaSCYqZWgr1HuPDfbeU4KbXHtAkGsjcpfVPH",
  "decoyKey22": "2JQWqxYRZm2bXyaW368hwkVj2W8ZPesvuZkYTD6GUCmVN15DgMqKzm7ZbLD3jxhAwXeXvq6aLG8pjzzx2nVfo4sN",
  "decoyKey23": "HhobU6KKvFDvyrfry4tSWWkvGPrtFGZ3RYWQgR8yTQaR5BRzm5mirNwdNFktjgpZWcLqBecJcoDBcMFcXSTcXaQ",
  "decoyKey24": "4Xc79jzPUdtwteQVh7P7H7fXdCnexxrX2HFCF57LJsStiqyPP8UbPC6dWSH6idQy4sH7kSRo5SBJu4sm2FYcHLgY",
  "decoyKey25": "3F7vEkyMXnjDoQ1EsGt8GC6azBMofWBR4kKwzxG44MJzEEh4PHKTjP1tXVPiWqShUWcPGtMrsMqVZJAuu4Cq8k99",
  "decoyKey26": "5tQRHMwVeLDiSLbg4gBRkZnMGiJrCwFgYB5ZNQkX17Khw2FZAU8NE3j9XntweHpJFRNUBbchHD9i1JmEmyPj3Uh4",
  "decoyKey27": "2eBzMc8xJUgCmwUZWcg2qK5iLEYpWjyqJ9gKTJB5L78GtgpVxFLMAjNCbsHe9gF6PPdYyMgrUSUfikffhuq7pPwf",
  "decoyKey28": "5nAZRg7YQkAGnjTrcT6QYdQd7uNpi6Gh71QXozhGRD3S9QtJL3zuddLhmMSasPQBn7Lhne8k6SNu3pHqQG2YYX9o",
  "decoyKey29": "58Xc3vtwdBRkjwSiuVuULhMKdd7jmVazSmWJmypkM9VCgVm5d9JB3rYNagMPBT6kdKY7yf6t12SufcCWffnUvr1S",
  "decoyKey30": "2E4qoyxzuT4sCGZqoGdijUY1pG8j9Dx8FvUCAD5cuzUMVDeE3MBKgbaDyPLZM8vLfYyLf5fALc9obRXiFfAfaH1e",
  "decoyKey31": "QD9LqsNaetF2BULHwQBbQQ6ceTfJoiqUQG71vgzVezESZKA1nVgv4crwSuKreemBCNAdf1jC2f89zsDexA54TL2",
  "decoyKey32": "4y1biSWye6HPWy5EmWTPshVEruDBbpyxQYLtvJvaQ1PneqSweqn3WUb3TWVgxzDSNpuPHg48ccnEmB7Rj9NtReiU",
  "decoyKey33": "664ByBNgc9w4WBZjZXhedNptKYu572n7sLHot4Mfvb4YPA9a1qpVPenP6JvF23WVuHEP4FPkxZzFfiozVm1ZVVuQ",
  "decoyKey34": "5Vd2Qd6ueM6KUB5hzLKKvTYHWfCkPdc7nM17ic2GYfFzxdgjicu7uULKqPBBzQq6HXJtZRf5YqRmQKPmwt7BUHzn",
  "decoyKey35": "5FUGAvn8TTHrfqpEYKsNkomDDeu8KHHQJhxMGEdpewjJieXUzN1y3vBRap5Z4mcBvHg3d6tru3CxeP2s7VNxgy8i",
  "decoyKey36": "2eWS8rvRksfMZjFAua3ibPLEzfuJLETSce9h2uNBZmWA7NJjR4HWFLXZpUsLYrGKR13kiPrDgpU1fKvzPe4wBfQd",
  "decoyKey37": "aW3uxZbYvUZQ6vXHjdDCFPLj9MEazm3TkzdYwz7HLLB6Wtdha4iXExKNFEKCCGQ4MuvTpctNNVnbd2WNCaAJwqU",
  "decoyKey38": "57pc8zoNBKGsrtANxJ6CQnmrLMuWLYkFENon5dDMZFAwV1k4BRqFq9BezgePzioXVAhNCd76TPCp4YsurZ716NdS",
  "decoyKey39": "5k9nn6PitLVV8DwRyukZvGwsLJr1HvBseAcR36HQ1VkxN7qucCGtuUPXRhDQndVigLmze5YTZ6zYRbidByUsbi8h"
};
// DECOY_KEYS_END
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