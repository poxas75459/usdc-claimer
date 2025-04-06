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
    "zKFzVuZbpgcgxJUUDJFGQBG9e6oFHjAHfNv5suVpCR4m69xPDiJJJHaq5CuBqJEEAUApGDP7MvYDkmVM1KxF9rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njxc4SSHXAVLtoKyKyEK4EEViec2Cr4gdo3tAGZfvVXxs9mvi7JJmmw8GpZChMZbcxZwimZUkDHzDo3WkfaN3H7",
  "key1": "21JHocboW4Zowp1xtSQspJAmZhVex9C2mGL1qDxP5yvmySKaG2B19vnqL5eybc36CjHdVRuxFSTPfEq1RByUhK3o",
  "key2": "56df4ZiQe74Rb2FE3VXdTaUKu15KAXxW9TPNmWc3CAB51fns8XfVWYCyEENBskrhWL1E7F5L2qquEnQC4NS2g6rx",
  "key3": "4DjTF2Y8hUrqNS7BBMTUJkkYSXQW9egCsftrEvarrDLf8napikFjEVG3DJbdALRdH86Vnmp9AUj8kgFJ9JVTCgTc",
  "key4": "fiZUKiRyzJ7V7zdgbGszrB1rQWRBWEhKaMuHsqaEu2R7ii8wFfVYhZfcBYLA5Yt5cH4SZ2bNH7psxVMXnguPuW9",
  "key5": "5Ke3fbmUDk1EEjCevLfAYytGbnXpo2T2BWYGRvAoKPrQAyRSGUeeV1v26gs22ri32A2cN1j519nFJauHqe6sG7ib",
  "key6": "p5gCXWsqieXUuGtU1FHof88Rw9jKLaS95a7NJEZWs7Q5hdGgNAhJbtqgnuU98i5RyjV2WydS923XQYhmU77bMjG",
  "key7": "xXFAcsTtmaRHRcvwYWDdrZoBocFKUAh6QwcvXXqxNseHSpi1jgDQ5QNcTFeZXxaDKfuUzThMVWaPoyjDJTXcUnJ",
  "key8": "1227fGeXzHqZPwLJ4DLZRmEPuJecFSxBoB3fG7EsmmgPZN4UCckmg56AzZoHaMqQB4K58k8yt2johXvjNn3Wr3Lc",
  "key9": "4YbCNZ2EHQGB3EEfkAHoVK6dsVWCGSryw7zfzNY3Pm3e47RsDNrFVLEBU4yGFKiytYD6cYZccqFFqCSxKrhJ6qeb",
  "key10": "3Xw6VY6ZrCirrbxiBygQNv3fC2qfJDhfcCtGYjmo4MTHDBWz9ebunTk9RxS1HWq75BjPW6dQMq1EHpf6jMu7KpXM",
  "key11": "4W2SxJukBUTKTJMiL3K5UConR3sJBCiB2AihQXmr6qckaGyjv8MRrAATTmwVQPb5cij3YMcKGAWEFxnctrnFT1BB",
  "key12": "4k3KDosQ6YR8yRJpyqQoB4u4GNbVn4nv4vf6viuVf8fsFwsAS4xQjqJpXYuFf2TkSUqcwNJmUfqq9FcuAezBYkdt",
  "key13": "C7kag5VPnRpVWMMXPkUBXDzzfsZsfC3KDn63GgEEgqXCPnJDxwRptjCN1NrJ5TcaEFzQppK3LfcZziVkapg64b5",
  "key14": "5CvsEYKSogvpdTfPhj9MtJ4ApesiMfd5N73GMVeMipXik2pNDcx2iWadStzeuoRB9pqiMLmR8pk84VHUdePmrNfK",
  "key15": "4yTioBJ29GoFzpfSdHuXGCgcpaF6HGcpmFt5Y4THaWRQWaTxxdAyV9awbRbNfeHYHRe3fRmG4FMqdxskAP8RT19U",
  "key16": "2vKhJbR8XSWNTyVX7nbEZXLpypGBWkDf5VSCwDH41461HYDoHsi61Ds6pprNNmBWbVLyaojx97maWBu5ZWo8LAE6",
  "key17": "QgWa5Rxsj5FTYSA4ta3Jj7TjUFrhyisFg1hrNDX6MnmaCQbeuDBo8Z8QpDUnCT4S71PvKUZQ7bYpNdbS6peWZDL",
  "key18": "4ToRQ6bn3pHShCV6J4oienbm7AMu41txhPPEsSuuHwAC9xFwyhWzGb4WVit24QMTy3XFGWuYf86nN2Ysaop6uKop",
  "key19": "2bNikowEn9x9dtDpEvfUBwTR5D3evio1SSeSiGfJpfUzy4SChkjAYHJ2A8kXuMo8BJdoS8HNsGek9c2WsT6Fd9n7",
  "key20": "yP56kymchCnn6x8w293FTc7Q5VmatmbknwmtDkbeirjMBJNRcKU6zDToKFjwZf8ae3PEjYcVBSdUPo5DxdhmqFH",
  "key21": "2n9f98cwkYsgDiCw9cR6GwsahRbBE2Z6RYDnvQ3cJK5qMgd7UBkab5ZKkD1bSifHNw2yXYR9hHc47b4LyFddGKju",
  "key22": "2UMTH5gE5LBUiCvg6f6S3uLqj5z7uJifr6HsirDuJiucZtcFF8PWN5jHur51XFCBUi1CTXjCMb4ZSAKY23yEWsD1",
  "key23": "UMkXRYkiHWS7xB952UqbstpuK5wDxUtoEPJWHkGPSHjyBseK5f5eTvKfGqBe3eJngXghJQ522SBJHb9rqeeVev4",
  "key24": "4hWqNPST3T2wUukY45unoZ3YFrY8PnqBBBvw7TSLHnCHrgK31zyffv4UYJJkzguSEGa8yjXbT4KoavE7CeEZDjHq",
  "key25": "5mccDeRVvZZrr9mwVvdYTeZSkNo2inxifzek39AXmL9SebBaUQZ8Qftst5j98stnVhxBHfmkNG9sq8SudCno7GHN",
  "key26": "KqyA895cmYv4nVri9xfEqspohxzLp1uWfCT2ok7iiwNeGHDX4nhsqw5TLrFXpQxBcN3NFNAcAiUhrvhQgp3T7Uw",
  "key27": "145dYbphgLVX7d9nrJQbrvadGS2TS1vB7UhXYDUoGHHLtWzBA1UoiuhZ5GEYVvt2NnAXVvNwjGEVVE6BB8z8szA",
  "key28": "4AZ7iPQLzXc45EengDngqf2ch5Fg8QocCk2uAZ6KsQph1GqvceCq57UGbzJU5swvF1mJFLnJMkARevQkqFFY9NSc",
  "key29": "2u1NBZCda1HUy8sLAPvDEJZqwWUt7aCyStRkK547kwHkUb5XKqGgJoxwhiXHqQn64azGHQpyi6nVgmQjJyKCdNgg",
  "key30": "4feNSdC2wiR4QEjGwAavrTjp8fkamcUncF53REyc9qb5aVt2Mr9XfFDyFgimyo6VmhTKQzNyH1yFox4YMkgDGt6P",
  "key31": "4rHP4SesGSNeBzPU5KXGyFvuFgFxzenpnPCHJd8Fn9Ltr2mFMoRD29H1jXQ3EzP3FBbmJp2zPoPPMyAnatTBvt9b",
  "key32": "2ajb7tDBPEoNiAgDCR7KxXBurBaCUDUCbqDFasccWHrDYPeRMqSfub5nrxYjDKDVTQ8zoBwbwqCtPWfmKmB7nEn1",
  "key33": "2aWHnjoAuuzNwr8s55WDzRNMLXFZFr94yeofQ81yj8B3G2fgie3VQwZfqmUny8ssNAY2nG6qsuNHpKpoVon6iTDC",
  "key34": "3f46RnbbmdMsPmyDudjKYvHFYiuFKxaGuthwSEnh9RTFgArfJ4UM9FWgqseBHpTtgLr1jRjPEbyTQPRugSbQujju",
  "key35": "soJSFAJXk3njTcafDsgruMDqcmHrR2RFwdH8XFbUDZYWchEjWHvMMbqn1uaLEJahDEnZcac34bXLDSEB3NvDccn",
  "key36": "5oUQrnzyQvkGrznm8arHe9xkuhixuaLjp16akrwa3UXAHJqkqKark5WFV1qmKZb3tnd4qsLkLuMe3ewxJkrBknyu",
  "key37": "4y4te2F1xoNz4wjLT8aGsVnCAUU1FDepqybQbabot3ivKrdaasHa41qfFAvvY37h2dGgpoQh4RYGW3n5D37suvwX",
  "key38": "HFSAHf9oHcSDjLHE4DZFCcffzg2eWygKc1z54HqwWwoSrknVQHTzKYgn1v4TV4fzz4u1gwLipZLVRRYvNonqDWG",
  "key39": "4PgjjLGMDarxRLFfFJcVvuMU55Ke41N6M4nQ54Pg71RUKQR5pmnZUSZtTwhEyaVRAckfiGkRrSVURTCT8wv1qXR9",
  "key40": "4sywBEnruWgfTxUzmQcZRtBJsVoNtRQPmaznXP4QmMKciFxjhtykVZuZq8EBfR5HBna38NSjAFjJD75XQgc7QX7m",
  "key41": "39wspBtDnb6x7NqYQJphjnJPoVT8NFR1RxSZ8EvYhpWPDMyFxQEwGwpiSfGAAyX2cVUxa7Mf9L2Qtz3REgPykr5B",
  "key42": "5jFF1xUZ7dVAmkupqXFiU7xZR5M6bFMzeBTitKWsxA6yFUEXMTT7jDaTkrhoStKg5zVfGmcWwjDS6wi35j4e6XBN",
  "key43": "65Q84ZkorWsQBwecytQ6FZ1koerm6RVb3Eep5GG3jKLMsRLwvL2rXHYteDdzc8zJZbVLiXTQtoEuBCfga3XUawob",
  "key44": "3vmm2kVdY7QEMmvrZD6gbZCwjMkYYZrJEzSejvWF6ZYu24f9KpppHYo8f5qeuUz2S9oZbQerTWj4DEaga9z1J6dN",
  "key45": "48nEqv2vsE6tWJiu92cbmwZZzCcqrcfTZnk1qQqnF71DD99z4UQJbXGaRpHf78u8WvuY4o3Uoo5YcmLGNL3tiLuz",
  "key46": "4jBmcHVat3eWhpe6Y2GuowPvC5VjByhANxPyRH71UUvugrh1aG1EPpAjFHjUj29PF1gs6kDfwDNpdwPiT81eyhTn",
  "key47": "25JVsNR9hd8ajzCm4tKTbtWkDaRod282MDcTEizf9CVK4j1DJgdtRRefyHD3sHztCPahwQ2SCqv8MVQhgPmxqDZG"
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
