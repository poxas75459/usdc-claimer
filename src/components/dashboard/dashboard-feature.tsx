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
    "3Wm2Gq1smVR8vBJCjauwryf6iJG7eWdRDoeF3RuE9Pc5dcf1nv2f5PH18iettfh22sgNdzUWHYoX1WGfj2kt2dbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oJjsaCicVuAaiW8J71uUAEDNmpnFEwEfzicJkBWuojHDk5xXr4QnWnzUC86jfGjLt1zJYcJzKjjcKLkQFKUXrwN",
  "key1": "5zRCpG8EBMEMqPixrf8QHaYqyaYrjitPsgs5Fe6t3v8Ysnqs9EjmWQCnjErDtPKWaAVdyedS9YGce3LB6Fv2HAb6",
  "key2": "33ay9YiWFL8dYW2FYhCybtMAYX1zW8JirF9onmBJJJifHRmbPCqS1qXVJXtm7at3KnzK8odE8g2PyMrwi78gK5pW",
  "key3": "zcjgjBi2vMJQX5pwcdTWmvuWcgC3V3TqzcMzKmqQfvr4Yy5N9SVN9oMQ6d6FG2xPvYKM6URRfZ7X3iiJMerRLBm",
  "key4": "3ZL9e553LSJuYoMpNMhFqqn7a6X7q3k9RCk7SYAvPb8ktkqjMbK6zyhWgNswo6brDsCT39MnAmBTEwW89fhjYDps",
  "key5": "3iVpBidNCdMR7wQd6N6LNj1jtov3kJEo8EZULSwL7RoJxwpXfagNFKa7jbzMCC41GTd2bRqFwdA1wg2TC2RSxLnA",
  "key6": "5ZXQ59AsSo2NFzfBwyUDbUmYBjziK8cg7PbsZAfUYG7W4bcGmwB6p1BSn8tvbikKpNpPb1C3LtpLSe8zkrXooGdg",
  "key7": "2cugEvTxzHh4uzrNWDmNozhcD5won9CR5TQuu9RX6Rr73ma2bLAn6AGYBgVD2i6HNDqNa7yVcXrFqGd9efLB7q46",
  "key8": "2RhTNWmVXCWf3TpE9bZWopPR6MYFmTcuL2bgykwNumjkMbP9P6hF628sunLhhtqob5wnVepLh5xdUkMAJMZkyVde",
  "key9": "4R3fdgX2aqa5rcfZnRrghRDCi818uzU1yXxYDF5h5JiBV8sTHnTTvWb4s3YmTjvcW7edSMNRMHKXnHh8QGJLLDcT",
  "key10": "X5v3F8kQqg1mQycptJzEjob4UWt66FTrY6WWbUSQHsZcPgHLrn9vph5fNADX37CGmYEgTgsXMc9BhrE4zcQSZuz",
  "key11": "2kZNDdfB3NgdE711FaCkHwhTYiKJ7awSjmr5tFrGZsTwxrRgwsys1q8pYL4Pmzb6ApahU13RdHZXmupn6W7E1N4o",
  "key12": "3dLD7DBszAQSxyYDpFNpJDhrJzezbPZ7bxUcgcPuWtkjoZ7J6MxreSRDTxH14AfeKtHwbBokGLacG7mSPYZK7LVn",
  "key13": "3Qf2yP4u8565NUvaUpntH2CEVoanx3j3ZEBCk3tUVmBKoTJFYjWtPft96ae16AqXrRP8DUNSPAQAKLa35aQAzeNa",
  "key14": "3qVmUELTq5iYLaNhh54xZvKazhGByZn6LoPsfHQ3ccKvd9MGRmE3pDoPGHVsL2iJUpmR1G85G4U1ryE89qvSzbPf",
  "key15": "3f5R4sYeAZkCzXprb8nvrNRAMbSzqGMHTzT6ckGAJa7r4zzeZCpCgRQ24CxfPiy2kq9HEjF1cNrQWXJ3jLw7SMhn",
  "key16": "5Hf6QS1pc4UvkvcanxN5xoo2E2TDV9HnneHmhMcQNKWVd3czce8nqxtL7vJ4tkucu4Q24mUjahbCqMcHzYRPuc8J",
  "key17": "3faHkUxKqiQbukYERLm2o7WZCqsTrvzaV4dAsBHYkexze8h843rMnTPTtp42KUzzfEFsyFTkMBLz2RzgTJtsHKpN",
  "key18": "5Mw1uGzyqLJyqf2aJT8zhHqZdjk2R5Ei6mvZMQoEVvbX4Sst4DJXb1Y97Chd7pezdH6QJg4189CUWMkxKRjL7q8U",
  "key19": "BKc1mqXQkXJRFzZ5ZCZ747rXJSx39BUzQMVcvtAj4BTEDCgxooMJiV4xcLSgVhJAKD1v5duZQmk7brYTfdLxgkm",
  "key20": "21NB8zyRGwrutusiBnekm5FNneymry3UYv7iFxW3h2Y4UBM1P1hPBPuAAwP6Zvs1Afz19S5N5qfwuH9xJHHdmXj6",
  "key21": "4Q82R9923qrBDSjzEXMWbGLyH3GWfjUjnv1M2XzfwW2w45B6uYo6W3wU9JvKwUgp7W5pUN47LGqn2nPqLWi5LNWn",
  "key22": "WXEEqtLED3w3LPwoNwpYsnFhSE33D8CpNhojUgFA6rmWtna9pJm2dQc2wFr2NoagVVwABwVEqs4cYJmupYTcXfV",
  "key23": "3xHQbvCMkzsbjXU5DaRYbPsfc9DDTKuzkFTstJqShHXTNQdXUCGkqw6PYsTBt5UnVx2twKqzqwnAVnYUjcy5iuwY",
  "key24": "5gLxt9WF54Vi5QzfRv7TRdfQcCQoDuCYx92wsJEoiJpfmCpyQCA15L7PbSyHmzSadhE3ynYbYJoVgt12vnBcRdgU",
  "key25": "3QtAdhUc9EMxHihCJpL2HnXkPfzjWN4o6ENXCmb4ZziK8UnyjPhtTon1kA1yUg8wG1c9yHiFedL24V9voyhmVWMa",
  "key26": "56k7VVTWqzZCoxbPBNhkw9ucqu8bZnnKGasDq5fFgUp7e5E9MaRQZEHy3hvwEykFCXFjnQHiDVCN8KJ96U7T1iMy",
  "key27": "XfLgrxD696s4U6hieCfaY28N6gszXjuCMR8Sg3Rf4QCyLASCkxvsZ2o41WQYzp59C93MwgMifQMB3DKvMLGcBV5",
  "key28": "5YcuoU2P3fpj7UBXER4bZc437gghsdVDYEp8eFja24bTxet1mVUrKhNXranhWkQY8QCFSa6vKMTgTzpPvTgXQKYg",
  "key29": "3G3eaekBiwzNssAptZ5TnWXzWeQMuSYVsQnFpvWyHYffaKU6Cb6UwuSfCWXkdLu4vSRh577tf3qVwHGejHucJvXr",
  "key30": "4Xh4Lh4iYnzRBVfp4Re6o3AMG2k52CPFs6AdA9tm6rtVbhbe474UU8kQmmUdZfaLAXbtecdbTLxZiDCNB8cvDwQr",
  "key31": "3GFzqD45V4czWBGdn8aPb8S9f5yxLeae14pvdZsgGNVkdDad7Xn3E9FhJCHYKgcrZUA8tFsEQB4niJBrfSKrjcmg",
  "key32": "8JczZGmN3XPmdAqkXda9Rt9hctJ6aUzkG8tTzvM6ZDWoVNRsJG6XWLdbrMWon7zABXpxrtNMCYc1LboAruWGUSn",
  "key33": "39JZrTKVTZBDJewWvWUomci26UEdFAco1Y4NQyJF9dLMgz7mWhU1PEsXc9Lc84GZTAh9MvLKDJuKac1h6rieh2eF",
  "key34": "2gvBikAmyJ5Bd8nb5A73Si2fqMUJ2d22JZDXFgwoeYavQT1EuwTbXpgxajHeqsut8fJHyGLX77ePDE944jvbxny7",
  "key35": "3uixTjPmycJtdqMYYksuKAnwGRrXk7RAeGbAm9WLMWkXqmHpNFh32dhQ5fu4P5KqnH3uHWVcXTG8VzGRtoiu9mt4",
  "key36": "2MFn7dJU8mjtDNs9YxnG7bBRu4Edy9yZ29xo4Zg2Pq4JJyyCwdvMoNi8S8QPdaWnQRxbqN65pj4Q77c5Rn1F7gLr",
  "key37": "6mzywThJ3AXPadQpTgTsG5eWUJkvC2WfEjVhkBkSENQ1k3jZCrzYDFRTy32pwEyZS2eUohaWoscQAvuHdLd7Nzk",
  "key38": "4Aiu79KgqUNYzRAttjgNp2VbY85EUiEyFinrCj3SoDxez5gSQUrLmwWp7h614wzgaDajir8ZH7Ph3pg9Ye7TXawE",
  "key39": "3LMmoTUFNjiXLqugjLRE2mzyZxeLU71Sap37SbN2raNVdjdADaEYtBBYgZT9UP9VFy8Kt561RkwdGoejaS366GsT",
  "key40": "5dbSrgNdMpjTChErgVPMcDajEEWejNEPypiUwPr6dvvtmadQvhoV4enscpuJnAneK8eBz7MtNTsA8Zu4mUw78e9f",
  "key41": "4JwE9JHa99LYh2MPjmLDqZuNKBcQpcccK53poWWi9tYbGbD7rYAhpy2rayvCPaqRFQWhpoPUiDKWedfTVdFY89Qf",
  "key42": "2eFdcZbJS86wqfMRHyZ2aakYEQSezPSbVoVn7N9WnamZ3QnEZQFSZaCRL7UaSsJBQmXpomNYpCzwrTtkt8og2o3H",
  "key43": "5yk1PsKtmDrAmD97Fmj7asLNDZNsuzWnfo1mhn5pw8NsKhvCb4CLT4h3xaQR7bWb8rLvzrRDWbPMDwSyntw6uPtb",
  "key44": "4WtcHvRzYNAGYJST3sm1bXvxNvNxZyJbqq3gLW7zfX9dVVwXEAajqXLJamdUVZij1TBHKLnWhMw3je7g4iGAB6HS",
  "key45": "2hasXzCvhzNaqBG7LsS9cHPFxHjUjkME8pANxRXmEv4bwTznuBjnvezWMFKCUvyo9VaxAHpZVrP2zUBvZyVsEdZf",
  "key46": "45eWThwootGKTDN76oWVonb5QSwZFTVG1CP9cC2go9ZrEvFssUwm7R7es8fWVk6byft25gCDYiMpRrQQt7pxRXsG"
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
