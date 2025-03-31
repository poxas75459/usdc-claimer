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
    "2knwk7XrMiNFB1iAjemENBmJLvWRPfVzip4gpD3fWAP7DvFPS17YH68Tk3PVkJmaud1mDPPYC29gePqyf5N7Pk9E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iGvqFALoRTzH21dTKwkhKR91avBAVB3QbLmS3jLZZDyjwPfjnD8MKqttYvtmNfuEVFDfwizr4UKFhNrrBmHAw9y",
  "key1": "3wZxc25kJjr3yBe1Svfha5eNe4DqWMLjeSWQjciGLXiZhyeyUqALmXhrSLV9aoFG5eDfcZBkEtFofwYGwRokibLG",
  "key2": "2vzK6kx5oaxjati3utUBVSqTLtJ63RYRHgc7AD8U5vfJvjNZb14Aww7HP1vXwDZnqFFoxCwNvHiP8vizqLVFZYu3",
  "key3": "4LDqrJFoZ2b9doU9cU3tkToLV9wHvPKCbEbTV9PAV8D5knquKxUnV8yg44P9YnANc3C9ndtFh7dk4bkPgwcr23UD",
  "key4": "4uG2zhEHD3LJQWex2VQRuyJfrGzTkWtEG1j9GargKrue3x22ivK4vthRZySNzG8sQEUvJJvcFKuqr7Rvqz7Vf9aG",
  "key5": "4xm2CcWXxNeNzEbUtxKFTGp27ZXQxouyZQPazzeHjeRTtqLrYQJTtVYBerCm6e5r91yc33W5buwhEBMkcsyZSDXb",
  "key6": "oWDJADDptfzifc5GvsV9SWjEmKGrdLV8dLANjs91hdc2LczszVpJqyX7xoW38sp9yFbffTjyUDJCBQmWpbgwJc4",
  "key7": "4dtNVYRXf6xpGGrTfdHepcWgehbFjCh29tahkQG8JTvNTYHqRccR8M438hwdKkehNK5uFmtU6sbhNppdXTW1ZEyE",
  "key8": "zzaFfPxRuzhMLNXg66jJFmfBhVZnbgb9iYbaCvibe3whjD926CvH8KQqm95j5yM9pmrt4zatYXchQAmTyaXpthv",
  "key9": "HK567H8KMPKGk9wfQmJtT8nUyv6yxWU6Ti69BRCD4spAEj1NbPgCGcSgNkeDedbWJRLtDrPY8EVreVQCv4Ne2Dn",
  "key10": "adeUQFduMeukfnMoiRuA2cbV1aPDZCSuHDj951oDd53H5CsYUC3MaNygADWpjgv3kuQthaWviKmk7neSR59Uezc",
  "key11": "4EKYBLMh711e7c3Ydr5GmnxL2sWPyFc81ZJa2FB6VoxyRs9Ky5Nz9a4jvTc4YJhKP3MsFL8dmJb7Gk1FzdTFrsVt",
  "key12": "3iz9kiS56ioUFZaGmfLF3UuMV3kuPFchaRDHDHpmYF3CavsYkrstTL4mJerfLspEayaaWuqJpRk9sbL8RXg1g2oz",
  "key13": "mpNHqeqNhaehdQH9Fh945uQGYaHoN1MU3myx2t1kMj2S1bnSwyRHnVTuatqAbEueTJR7yjXQMfWNmRtGYrjGK6p",
  "key14": "3yMspkDXKtisuBKzSXRx3DobSMHmkYXrPQpnjC7Gjzxcp57hAmeJ1xu3696bBNUXhyBvgZy83STFSG3tG5oQ6UK8",
  "key15": "3HAwA8HWpQDzbEhStGgkYgVpmGMxfL3TASzEfzMeLv6fJ3C9PLYsGLahTpuAuaiiArKsLruheBtdewc5vmLYt963",
  "key16": "4D1yZKA2rivyoLzN54bsXyn7Hj3nbuZdozp2SXYVpRhXgKDP7mjDMbycyJFz1RRaGSTDBxqFiH5AfQQt7iMzm9BC",
  "key17": "7Vr4wxShrEbovtFmbSv3zFrvvMLg1JrCGQaLmYH7tK5tqsxEFN8X3um5ygAquR3NQz24u8mLNJR3tytWPXi3iAD",
  "key18": "63yHete2GMtqCaqPQVYdW1YLd3gttd9XicTsjiaDzKbih6Z4cbgLJAV6ZC6LaiweEsxT5vdTPxZUzuHM7c3Pnm7f",
  "key19": "4JrrA3V2SALWKXmiCQqTWbfbxHtS6ByQA9nWvm35d5bqyP884WGUm1BQhXTU6WbrFKwkC8eKUUePK4N85maqTg5f",
  "key20": "2HCUZLZHqQdZkSZn4q2qcDiHurqv1pxhgGEHixNMJDbp9SUyu9MzpsaDwb9CMdqq98HdrFWcWBsPnJRE8nsU2eQ1",
  "key21": "5tBPq1xCZdfGv6PSMBXyWsjzBbyb5whDuDmY4fpqogj5um2sgVqs4KJnfBtBYirgtcKDwSdpbNM4kpCRabH89qbT",
  "key22": "6117WqzYC5nueBAjT9LGHN2c372uMLnpFV19hUMF2SwZAWND9SSykzTpEAkxR7RKgSaD8ap7xza8Edsa2dKHVgEr",
  "key23": "BqsHX4nWsKqxFhJYXVaDiBPco31LsfbCr7PZXgTRfXPLvKzobUmoWJJ5PNj6be1JTkZttg325jRVbGSwTaA8HXC",
  "key24": "5fLsLitNE17d9V9wsFhWVCLiU61VuhyokmWdUEtTLpnhfd2bUorwuod6kdP6PWgzoexqzNDzb8jBW7mi8TGCMs1u",
  "key25": "2BjPzZsJRTHjVEE8E7gqG3JHPrCLKSGE19BPhPujssxuAwUEJPjuL4qCjNfeLS4csk8LqQaTK4PTRCeXi2AG3Lu6",
  "key26": "M4nizyPH6hLtNLQbiGyP7PUNZ2W1UA5Vt9iocdrsq5N2y78XYc9znfVT4Mw2ixox2Y9ydhvvCzZL26B76HvxWii",
  "key27": "wXTaf3V24BE9WxKMSNybv34s3V9xQWrXNsjGyJGYrdJsxmUrPB4En51CKR9bD1e7eFnrK3FRbTrxxby2VbKssaU",
  "key28": "Jx6A4yfwEVRcJA4Jf4mq3QFrmtoLu3JpuMtQrNgCNZRtPZdicKdq1pD21AMeyrMQHRTuKMRPrkDjtfRDeVDsCM7",
  "key29": "3EYsTJGEVy9Q91YojYcfgAPF4kWgvUUSEGrf3vGeNjLoq87yXpYDhtnNmXMYgceHT6dxi7EMdq4Gcbq1vVRKprjj",
  "key30": "5Gh7jCUCXhPCejbzc64PF7sRi3QNJ9kzDvJ8jPMipPaJyFKTB9pHtcbYuDA1m3nGNm1pd42GqW3zJqW25XypqdNi",
  "key31": "3Z6M5AwSryz5Gpe9yb53khVpMJJrBdmw6gvzW5Bfr5cNiU3ryskFYkz9eQW246GTxBxV279bwFJXPNjrseYd5bPE",
  "key32": "41ohHLtteEv4TWRAH7EqoxUoGfroQKCnjWxGanEvoUmZ1zutAvAob5pQfWo6ofrZ56jFvFdJ2q3DRSpKoWW84DrN",
  "key33": "2AWeKRnk1phxGW6w6zWyUa643MppTSJcoSkXKQAQGSF2tHtF1TcgqAgYkstPbXtpWQ2YtdwE1LEPvnvFyUGFykDC",
  "key34": "2weLjdhfMTEjpnLHAfPt7tAoD8Yv25WnHzySshwbBz2CzNSKwdBEu3ghQtciw7cGikJPXzMNFSkVEXjqDhnk9amX",
  "key35": "5xokWaYJUtmDgKNNZ3zBqprNy9HujFPbNRfVBjAKzuX3xQsSaxmkfBCV5JsbqhqXLQUQBkwTGhMtiTXBPJm1Hb49",
  "key36": "4dFXCJerdTeehXPzwEGjJTBWDAW3NEicUwPrAvTh7MmTyvD9sBZRysqQdqTz9hkqFbgjzgCYPgKdhKUyTnjPHLS2",
  "key37": "iqkSByDZHgbraxoWFXtaWqjx9GZJbKKh9gUB9Qb5L1Dp42HjeHT12yjh3U9iccEYeinJGz7p7ECXfatPHHTt8vG",
  "key38": "4QKuAtCEBUsgsqUFWSqPubrEHrB69mFqmX1cXJc8hU9gWCCvndUPHU29t2GXkStSL5UsiExa4AUikGkrCYnutt2c"
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
