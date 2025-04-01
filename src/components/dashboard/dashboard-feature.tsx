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
    "5JNm8cVgSp7CfFxsbCqbWiqZZgb4gQX7AkLNv4YwbA2v3UGZSNNBeJtu9Ei8B6ymAwVkq9fJ2UzLTF8MZPGMARNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qM6e59gXjeWAv2Cfs1Ztc1pX1gwfpScKnw8ojp52FxoSry2kB2EXc771u6dX7rWbN1K5x7hXwik1zCn1jeB39Fv",
  "key1": "3WoQKQ4X1jzuX8xJXALN6S5CKj9hqXSoLnZ8dfMN3qWiDC1JHrYj5LyuSxZofNP5B3sa1eSSuYJBX3fczgD94AND",
  "key2": "29fGVZjh2fXbRQNDJLqEFvd6THj29P72ipZjUasgXiGhwYXpUpgRRwqLUnnuws2YrGCFU3cWDdM5PsV9YJiXjjsy",
  "key3": "2YmqciU1UN1PiSwCvNcyRdBeK8cSWTiP1U6Nu1DBq51UFLtvviBgxxXtAhGKN3RmfABhKjPkybxY56cfW6Em7kYs",
  "key4": "2VKsJtEXVrR8431AoNtvUmtszcQiWqzW5enqxTX1bK6XhHQncLFxJB1phet77CVJWnjcRb1exMeYxFfuu4PUgfve",
  "key5": "2JFd6uy2R3GBi9wAKZukViyEnrjsZ5GaRoeoxxATzffWGXcrQZtZh2RcdrY3Xn52V82KMtN58JtxFDy7JPQ5CtuE",
  "key6": "2wziPnuTcetExekpPEnZBWgGwQgTp3xajJ29MixUL24hs4GZm2435v5px8Ks1DJTsyiXmc6T2RthvjpQDsNz4D2A",
  "key7": "2GtcZVzZWisZaB7dQpXPzHcvpi48Mc7dapfiyLvRDGDDhwYLv2vUFfeVppyJj8inyyqjP22efQBYMB83tVcHz1k3",
  "key8": "2ErjghLJPCP3gHDGNtrjZoJ1KcZ936zkdyGpPcYXzCSgvTkM8LW4uLdeyRoBY2bjrMJibyt6oszunrGriMH27A6F",
  "key9": "qprgBQ6XuvE1dUiVXSwzcBZxRqXiyT3ua7ot4e65f1bjpsq9wn6dGTBTMG6hduufPoSm4Xqic1bnihaMA6YoE7P",
  "key10": "5tZZ4DNzpKuponYXhA9ADjdH5BKAUwzrwiBA5ZUZjeHZUTbGWhwbvA5cMwJqFJ7zpTCDMeJYPAFSLRLyZ1Bapd3i",
  "key11": "2LtcZBudriRML7rKHubZWizrqiCJUd3EZLdww55UZBt4rx41vtUNAf9jjFCRDRYaMPrcyz4XcMRvqiC6Nzo2UcRK",
  "key12": "3yWR4RS4ysQyu3yQcXQZPW8hqXPHSXDfBvAtWF2kkivkfVi6GxVggtu8ry8SwqqzbnRe5Eei2LbCFA6LXTs9pEzp",
  "key13": "3SFqZWfkcgsMX2z7pUpMRfEdc3N3qTDvnqKrCeA3WQhoRJXFKZDPSan3yPUpUgYwHvzLJe1E6CN1pFag6SJN8YkB",
  "key14": "2hzUuWfTGym1WLjerpRUPRpW9byRX5pqazRfbnuYhex5cu5HjnX6yJCzE1T2sLNe2NuR4GZEB72LmKXNSwf8ku1L",
  "key15": "4dU1nUVZywbgwsdDYu12Kej1WqJctswYeHHNjQb1vayVcc4R9RQRZsiCcEE43XhSqnxjz67ipH8oNZj6nKVEtyYM",
  "key16": "2Uh5Lfo5fyb1qutoZTn7Q1cqCLYHzFrjL5F8ZuSo7JJUPAvFrPjjtatsmLS6F7bGHfKMoUGStb4aRroceS76XRYq",
  "key17": "4v7Tjv1ZWgDRZLkXoj7MrqCCG2ESyUtCRzk4p1Je2Zz81sDPEuqdBRq5wybPD4mEGXvQud3RvE4d7Uv9ebKU83PL",
  "key18": "HYtx4urru1o9UzcaXbWnSm927WFc38wytrKKdWAWmJpgssVRat1UEY8tbDPSfyUor7Jcc6mEmuiNoMtmFZBbALA",
  "key19": "jam4FebxUAAw4CcggDMsskVmuqYYoUvJrEvtEbpAruapyet8YZUTrpaeMdUvWTaLFCqHgGVHgVYNSUSg3jsRePs",
  "key20": "3bkYuNPjJxfzB8pywosSAuiRHkC689WrCHFGEHb7MvN13yN9uhPhpmhP32qY6fYnXtLWJ4zG9gUc5uZ8LQgWr3rg",
  "key21": "5EfV7vSUzMmeCPSZaEdqifuzbP3M7M4kUGc3MZujww1nX4otuNEEyNoEeJZCgvamrNMFmMBnJAzEDoYgBNd4og6G",
  "key22": "3t8zPmj5sJrgCGttbRzgz5HXhSkA5PJwEdobSq9nAUQe97nxoTFak2ZSYKyWeBreUtJQwNxHBEDcidvrcu45pDHB",
  "key23": "4ynYsikirqjscK3W4n1Zgn29fQoNTGkJAz73JGiWmh4NQmL9NmHkgTBLHyDnywUtPYUKXf4tu2dSF5yWebjY8rH2",
  "key24": "5EswA4rCHDEeSM8X2cSmAAsPVGxnZhGbjrQ2nkD75dcKtkw1ZbbhEVUDGg8t2psBabXNWS8U5nqZLcPeSYLcFum1",
  "key25": "RnRMpTQW4bFkemQaqbfPNg4SoLP7yqWn67tGc4jatys4byYnLq6gZZogXgNRpYCyDbXMovhYeT6fuwToJFmXcKX",
  "key26": "2apYiKszakb8NwKbn3Po2q8dvFPjtBFG3Di5egJsSW4dHHUuHUsRWXXjEnMEgZDr7kaTWQKypXEuXNDdroUWXTF8",
  "key27": "374QsqU8Q1ZJn6psvC5MEcbnNKKxKTW4mDCUmUstTbWkn5pXQqneVpCKLYdttPqxCe4PQxruk4Q2oTRX4a3ZMXHq",
  "key28": "3aHLqKnC5QFJhNdQbyTwSGDjjL3PBTL84yBNvZqQR3RguVLiYz6fJJcULqsnVFUjNvWS6iPCFQNk8n4UjaR9YpA6",
  "key29": "5yFFdfwF1zMXFHeMHsDr4JPn3X4zijaSKW8MvzKYUpamwrLwSXxtRv6ULnzWzwwtrgbwYEhC6UsXnixM84LPxCBv",
  "key30": "2McbS1L5ghV5G2MjqEQGwPDaQj14eAicwjPnjabDAwFMiUH77fWmKXYRLKp8eUM2samvM6E2ehDxVvK2JgnChWYf",
  "key31": "5FoxcKS4wSarSW9ANdNSJnrQ1B54MiXZkseCzCbWr6YXYdmQ1ChFHtzdCdnWrYWkQ7WheXuxV3mRdtRJ3t81wJsN",
  "key32": "2nB42kzaKHfi7AYuc26CpZvxECsEKc3y9ALAcXpwYByn9F9uFj7FEfyCiAdT2yo9JdWksowaSETJD2UimvJpvRHk",
  "key33": "5XEBvkCxz6iXd8EtzfHYtYAv8ssR48MZPrsrVk87QXhQg6g2r2XgGxJtgavFJdqCGMXtacHY9nQXRhPtq3Tb8NBr",
  "key34": "3UAEgubUpDdje89u6JimFrmcd9hENkWrNJw2sVKmQUTcMt21sVaLNfnBEt386H5es3rP72fmVZoGL8aziYE7jW29",
  "key35": "2VQsYgeeB76rDYpHr89MAEVPJjYF47CQFmLKqXzFEsJGgtnFMArQsP9C8zByJDKMJwwvgCvtYhFFzvXNzPZyaYFF",
  "key36": "9firgYRFhS1ZvUesbzRVrKYViLoAHnHRskswe4EkcJK5dFLjTsbEFPGDhQ2wyiie75NpTGbVieRhjGfUUv898PZ"
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
